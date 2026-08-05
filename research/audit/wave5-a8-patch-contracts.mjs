import fs from "node:fs";
const p = "research/audit/wave5-topology-countability.proof-contracts.json";
const c = JSON.parse(fs.readFileSync(p, "utf8"));

// 1. thm-radial-straight-line-map-on-punctured-rn
const T = c.contracts["thm-radial-straight-line-map-on-punctured-rn"];
for (const e of T.citations) if (e.fact === "L3" && !e.uses.includes("1.2")) e.uses.push("1.2");
if (!T.citations.some((e) => e.fact === "L4" && e.source === "lem-continuity-is-local-and-pastes")) {
  T.citations.push({
    fact: "L4",
    source: "lem-continuity-is-local-and-pastes",
    source_section: "Statement",
    quote: "composites of continuous maps are continuous",
    uses: ["1.2"],
  });
}
const s12 = T.derivations.find((d) => d.step === "1.2");
s12.claim = "The coordinate projections on $P\\times[0,1]$ are continuous by [L2]. By [L3] the map $x\\mapsto\\lVert x\\rVert_2$ is continuous on $P$ and never $0$ there, so composing it with $u\\mapsto 1/u$ gives a continuous $x\\mapsto 1/\\lVert x\\rVert_2$ by [L4]; hence $c(x,t)$ is continuous, and each coordinate $H_i(x,t)=c(x,t)x_i$ is continuous.";
if (!s12.inputs.includes("L3")) s12.inputs.splice(1, 0, "L3");

// 2. lem-radial-normalisation-is-continuous
const G = c.contracts["lem-radial-normalisation-is-continuous"];
if (!G.citations.some((e) => e.fact === "L2" && e.source === "def-subspace-topology-top")) {
  G.citations.push({
    fact: "L2",
    source: "def-subspace-topology-top",
    source_section: "Definition",
    quote: "a map into a subspace is continuous exactly when its composite with the ambient inclusion is continuous",
    uses: ["2.1"],
  });
}
fs.writeFileSync(p, JSON.stringify(c, null, 2) + "\n");
console.log("patched");
