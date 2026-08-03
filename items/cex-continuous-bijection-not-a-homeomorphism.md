---
id: cex-continuous-bijection-not-a-homeomorphism
kind: counterexample
title: "The identity from the discrete topology on $\\mathbb{R}$ to the usual topology is a continuous bijection that is not a homeomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-continuous-bijection-is-a-homeomorphism, def-standard-topologies, lem-homeomorphism-criteria,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-homeomorphism-and-open-maps,
       def-continuous-map-top, thm-continuity-characterisations-top, def-metric-ball, def-metric-topology,
       thm-metric-open-set-algebra, def-interval, cor-archimedean-reciprocal, lem-of-inverse-positive,
       lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
short: "continuous bijection on $\\mathbb{R}$, not a homeomorphism"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Homeomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Homeomorphism"
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
pipeline_run: null
---

## Statement refuted

**Refuted:** that every continuous bijection of topological spaces is a
homeomorphism ([[fs-continuous-bijection-is-a-homeomorphism]]).

**Witness.** Let $\mathcal{P}(\mathbb{R})$ be the discrete topology on
$\mathbb{R}$ ([[def-standard-topologies]]) and $\mathcal{T}_{\mathbb{R}}$ its
usual topology ([[def-metrizable-space]], [[lem-real-line-is-a-metric-space]]).
The identity
$$\mathrm{id} : (\mathbb{R}, \mathcal{P}(\mathbb{R})) \longrightarrow (\mathbb{R}, \mathcal{T}_{\mathbb{R}})$$
is a continuous bijection, is not an open map, and is therefore not a
homeomorphism ([[lem-homeomorphism-criteria]]).

The two-point witness inlined in the refutation of
[[fs-continuous-bijection-is-a-homeomorphism]] shows that the failure occurs in
the smallest possible space; the present one shows that it occurs between two
topologies on $\mathbb{R}$ that both arise in practice.

## Facts & Assumptions

**Given:** $\mathbb{R}$ carrying the discrete topology as source and the usual topology as target, and the identity function between them.

[A1] The discrete topology on $\mathbb{R}$ is $\mathcal{P}(\mathbb{R})$: every subset is open ([[def-standard-topologies]]).

[L1] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]); an open map carries open sets to open sets ([[def-homeomorphism-and-open-maps]]).

[L2] A continuous bijection is a homeomorphism if and only if it is an open map ([[lem-homeomorphism-criteria]], claim 1).

[L3] In the usual topology $B(x,r) = (x-r,\ x+r)$, and $U$ is open exactly when every $x \in U$ has some $r > 0$ with $(x-r,x+r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-metrizable-space]], [[def-interval]]).

[L4] For every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$, and $1/n > 0$ ([[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathrm{id}$ is a bijection of $\mathbb{R}$ onto $\mathbb{R}$, being the identity function of the set $\mathbb{R}$. [given]

1.2 $\mathrm{id}$ is continuous: for any open $V$ of the target the preimage $\mathrm{id}^{-1}[V] = V$ is a subset of $\mathbb{R}$ and hence open in the discrete topology. [A1, L1]

1.3 $\{0\}$ is open in the discrete topology by [A1]. [A1]

1.4 $\{0\}$ is not open in the usual topology: for any $r > 0$ the ball $(-r,r)$ contains the point $1/n$ for a natural $n \ge 1$ with $1/n < r$ supplied by [L4], and $1/n > 0$, so $1/n \in (-r,r)$ and $1/n \ne 0$; hence no ball around $0$ lies inside $\{0\}$. [L3, L4]

2.1 By steps 1.3 and 1.4 the image $\mathrm{id}[\{0\}] = \{0\}$ of an open set is not open, so $\mathrm{id}$ is not an open map; with steps 1.1 and 1.2 it is a continuous bijection, so by [L2] it is not a homeomorphism, and equivalently its inverse is not continuous. [step 1.1, step 1.2, step 1.3, step 1.4, L1, L2] ∎

## Remarks

- **The two spaces are not homeomorphic at all**, not merely not homeomorphic by this map. In the discrete topology every subset is clopen ([[ex-discrete-and-indiscrete-topologies]]), while in the usual topology $\{0\}$ is closed and not open by step 1.4 above; "every subset is clopen" is a topological property ([[def-homeomorphism-and-open-maps]]), so no homeomorphism between them exists.

- **Both are metrizable**, the discrete topology by the metric taking the value $1$ on distinct points and $0$ on equal ones, whose ball of radius $1$ about $x$ is $\{x\}$, and the usual topology by $|x-y|$ ([[lem-real-line-is-a-metric-space]]). So metrizability of source and target is no help: the failure is about which topology, not about whether a metric exists.

- **The general pattern.** Any two comparable and distinct topologies on one set give such a witness, the identity from the finer to the coarser ([[fs-continuous-bijection-is-a-homeomorphism]]); the discrete topology is the finest of all ([[def-topological-space]]), so it pairs with every non-discrete topology on $\mathbb{R}$.
