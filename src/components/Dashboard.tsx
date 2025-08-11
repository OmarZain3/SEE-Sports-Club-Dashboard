import React from "react";
import { Flag, User, Heart, Trophy, Search, Funnel, ArrowDownWideNarrow } from "lucide-react";

const MetricCard: React.FC<{
  icon: React.ReactNode;
  value: string;
  delta?: { text: string; kind: "up"|"down"|"neutral" };
  label: string;
  tint?: "primary"|"success"|"danger";
}> = ({ icon, value, delta, label, tint = "primary" }) => (
  <div className={`metric-card metric-card--${tint}`}>
    <div className="metric-card__icon">{icon}</div>
    <div className="metric-card__valueRow">
      <span className="metric-card__value">{value}</span>
      {delta && (
        <span className={`metric-card__delta metric-card__delta--${delta.kind}`}>
          {delta.text}
        </span>
      )}
    </div>
    <p className="metric-card__label">{label}</p>
  </div>
);

const TeamCard: React.FC<{
  color: string;   // small square color
  tier: "Standard"|"Premium"|"Platinum";
  name: string;
  players: number;
  score: string;
  injuries: number;
}> = ({ color, tier, name, players, score, injuries }) => (
  <div className="team-card">
    <div className="team-card__header">
      <div className="team-card__flag" style={{ background: color }}>
        <Flag size={12} />
      </div>
      <span className={`badge ${tier.toLowerCase()}`}>{tier}</span>
    </div>

    <div className="team-card__title">
      <h3>{name}</h3>
      <p>{players} Players</p>
    </div>

    <div className="mini-chart">
      {/* placeholder chart box – swap with Recharts later */}
      <div className="mini-chart__grid" />
      <div className="mini-chart__lines">
        <span className="mini-chart__line mini-chart__line--green" />
        <span className="mini-chart__line mini-chart__line--purple" />
      </div>
    </div>

    <div className="legend">
      <div className="legend__item"><span className="dot dot--green" /> Physical</div>
      <div className="legend__item"><span className="dot dot--purple" /> Skill</div>
    </div>

    <div className="team-card__footer">
      <div className="team-card__stats">
        <div>
          <p className="muted tiny">Team Score</p>
          <p className="stat">{score}</p>
        </div>
        <div>
          <p className="muted tiny">Injuries</p>
          <p className={`stat ${injuries > 0 ? "danger" : "success"}`}>{injuries}</p>
        </div>
      </div>
      <button className="btn btn--primary">View</button>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <main className="dashboard">
      <div className="dashboard__inner">
        {/* Page header */}
        <header className="dash-header">
          <div>
            <h1>Club Dashboard</h1>
            <p className="muted">
              Overview of your football club's performance and statistics. Monitor team
              progress, player wellness, and club achievements.
            </p>
          </div>
        </header>

        {/* Key Metrics */}
        <section>
          <div className="section-head">
            <h2>Key Metrics</h2>
            <p className="muted tiny">Essential statistics for your club's teams and players</p>
          </div>

          <div className="metrics-grid">
            <MetricCard
              tint="primary"
              icon={<Flag className="muted" size={20} />}
              value="3"
              delta={{ text: "↗ +1", kind: "up" }}
              label="Active Teams"
            />
            <MetricCard
              tint="primary"
              icon={<User className="muted" size={20} />}
              value="67"
              delta={{ text: "↗ +8", kind: "up" }}
              label="Total Players"
            />
            <MetricCard
              tint="danger"
              icon={<Heart className="danger" size={20} />}
              value="4"
              delta={{ text: "↘ -2", kind: "down" }}
              label="Current Injuries"
            />
            <MetricCard
              tint="success"
              icon={<Trophy className="success" size={20} />}
              value="73.7/100"
              delta={{ text: "↗ +3", kind: "up" }}
              label="Overall Club Score"
            />
          </div>
        </section>

        {/* Teams Overview */}
        <section>
          <div className="teams-head">
            <div>
              <h2>Teams Overview</h2>
              <p className="muted tiny">
                Performance trends over the last 8 weeks. Hover over charts for specific dates and values.
              </p>
            </div>
            <div className="teams-actions">
              <div className="input-wrap">
                <Search size={16} className="input-icon" />
                <input placeholder="Search teams..." />
              </div>
              <button className="btn btn--ghost"><Funnel size={16}/> Filter</button>
              <button className="btn btn--ghost"><ArrowDownWideNarrow size={16}/> Sort</button>
            </div>
          </div>

          <div className="team-grid">
            <TeamCard color="#ff6b6b" tier="Standard" name="Team A" players={23} score="78.5" injuries={1}/>
            <TeamCard color="#4ecdc4" tier="Premium"  name="Team B" players={21} score="82.3" injuries={0}/>
            <TeamCard color="#45b7d1" tier="Platinum" name="Team C" players={23} score="60.2" injuries={3}/>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
