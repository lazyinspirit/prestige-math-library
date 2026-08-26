---
id: ex-a-family-containing-k-one-is-vacuously-viral
kind: example
title: "A family containing $K_1$ is viral for vacuous reasons"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-viral-property-for-a-finite-family, def-induced-copy-number, def-standard-complete-bipartite-path-and-cycle-graphs, def-real-power, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Every finite family of graphs containing $K_1$ is viral, but only vacuously:
for $\epsilon\in(0,\tfrac12)$ no nonempty graph satisfies the required
$K_1$-copy bound.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ with $K_1\in\mathcal F$, a real $\epsilon\in(0,\tfrac12)$, and a nonempty finite graph $G$.

[L1] Virality asks for the implication in [[def-viral-property-for-a-finite-family]].

[L2] $\operatorname{ind}_{K_1}(G)$ counts the induced embeddings of the one-vertex graph in $G$ ([[def-induced-copy-number]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L3] For a positive base, $\epsilon^d=\exp(d\log\epsilon)$; the logarithm and exponential are strictly increasing, and the exponential is positive ([[def-real-power]], [[thm-natural-logarithm-laws]], [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]]).

## Verification

**Proof technique:** direct.

1.1 Each vertex of $G$ determines one induced embedding of $K_1$ into $G$, so [L2] gives $\operatorname{ind}_{K_1}(G)=|V(G)|$. [L2]

2.1 If $d\ge1$, then $0<\epsilon<1$ gives $\log\epsilon<0$ and therefore $d\log\epsilon\le\log\epsilon<0$. By [L3], $0<\epsilon^d\le\epsilon<1$, so $\epsilon^d|V(G)|<|V(G)|=\operatorname{ind}_{K_1}(G)$. Thus the defining viral inequality for $K_1$ can hold for no nonempty graph. [step 1.1, L3, algebra]

3.1 Since the antecedent in [L1] has no nonempty instance, every exponent $d\ge1$ witnesses the viral implication vacuously. Therefore any finite family containing $K_1$ is viral. [step 2.1, L1] ∎
