---
id: cex-sequentially-continuous-not-continuous
kind: counterexample
title: "The identity from the cocountable topology on $\\mathbb{R}$ to the usual topology is sequentially continuous and not continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-sequentially-continuous-implies-continuous, ex-cocountable-topology-on-r, def-sequence-convergence-top,
       def-metrizable-space, lem-real-line-is-a-metric-space, cor-interval-uncountable, lem-subset-of-countable,
       def-interval, def-continuous-map-top, thm-continuity-characterisations-top, def-standard-topologies,
       def-metric-ball, def-metric-topology, thm-metric-open-set-algebra, cor-of-one-positive, lem-of-add-order,
       def-neighbourhood-top]
justified_by: []
aliases: []
landmark: false
short: "sequentially continuous, not continuous"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 9dfa78ccc5c2429c2deee0cd02035b305fc047eefafff5340b72d7cf8ebbd6ed
    item_sha256: ed057fb37dfe0c1153a450cfaa60e2778dbfe57f28b42990dc54e7c636696aeb
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Sequential space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
pipeline_run: null
---

## Statement refuted

**Refuted:** that a sequentially continuous map of topological spaces is
continuous ([[fs-sequentially-continuous-implies-continuous]]).

**Witness.** Let $\mathcal{T}_{\mathrm{coc}}$ be the cocountable topology on
$\mathbb{R}$ ([[def-standard-topologies]], [[ex-cocountable-topology-on-r]]) and
$\mathcal{T}_{\mathbb{R}}$ its usual topology
([[def-metrizable-space]], [[lem-real-line-is-a-metric-space]]). The identity
$$\mathrm{id} : (\mathbb{R}, \mathcal{T}_{\mathrm{coc}}) \longrightarrow (\mathbb{R}, \mathcal{T}_{\mathbb{R}})$$
is sequentially continuous ([[def-sequence-convergence-top]]) and is not
continuous ([[def-continuous-map-top]]).

This is the witness inlined in the refutation of
[[fs-sequentially-continuous-implies-continuous]], recorded here with the
convergent sequences of the source identified once and for all in
[[ex-cocountable-topology-on-r]] rather than re-derived.

## Facts & Assumptions

**Given:** $\mathbb{R}$ carrying $\mathcal{T}_{\mathrm{coc}}$ as source and $\mathcal{T}_{\mathbb{R}}$ as target, and the identity function between them.

[A1] The open sets of $\mathcal{T}_{\mathrm{coc}}$ are $\varnothing$ together with the sets of at most countable complement ([[def-standard-topologies]]).

[L1] In $(\mathbb{R}, \mathcal{T}_{\mathrm{coc}})$ a sequence converges if and only if it is eventually constant, and then to its eventual value ([[ex-cocountable-topology-on-r]], claim 3).

[L2] $B(x,r) = (x-r,\ x+r)$ in the usual topology, and every ball is open there ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-metrizable-space]], [[def-interval]]).

[L3] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], clause (b)); sequential continuity at $p$ says that $x_k \to p$ implies $f(x_k) \to f(p)$, and every point lies in each of its neighbourhoods ([[def-sequence-convergence-top]], [[def-neighbourhood-top]]).

[L4] For $a < b$ the interval $(a,b)$ is uncountable ([[cor-interval-uncountable]]), and every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L5] $0 < 1$ and hence $1 < 1+1$ ([[cor-of-one-positive]], [[lem-of-add-order]]).

## Counterexample

**Proof technique:** direct.

1.1 $V := B(0,1) = (-1,1)$ is open in the usual topology, the radius $1$ being positive by [L5]. [L2, L5]

1.2 $1 < 1+1$ by [L5], so $(1,\ 1+1)$ is uncountable by [L4], and it is contained in $\mathbb{R} \setminus (-1,1)$, a point $x > 1$ satisfying neither $x < 1$ nor $-1 < x < 1$. [L4, L5]

1.3 Let $(x_k)$ be a sequence converging to $p$ in $(\mathbb{R}, \mathcal{T}_{\mathrm{coc}})$; by [L1] it is eventually constant with value $p$, say $x_k = p$ for all $k \ge K$. [L1]

2.1 $\mathbb{R} \setminus (-1,1)$ is not at most countable, since otherwise its subset $(1,\ 1+1)$ would be at most countable by [L4], contradicting step 1.2. Hence $V = (-1,1)$ is nonempty and has a complement that is not at most countable, so $V \notin \mathcal{T}_{\mathrm{coc}}$. [step 1.2, A1, L4]

2.2 The image sequence $\mathrm{id}(x_k) = x_k$ of step 1.3 is eventually equal to $p$, so for every neighbourhood $N$ of $p$ in the usual topology one has $p \in N$ and hence $x_k \in N$ for all $k \ge K$; that is $\mathrm{id}(x_k) \to \mathrm{id}(p)$ in the usual topology. As $(x_k)$ and $p$ were arbitrary, $\mathrm{id}$ is sequentially continuous. [step 1.3, L3]

3.1 $\mathrm{id}^{-1}[V] = V$ is open in the target by step 1.1 and not open in the source by step 2.1, so $\mathrm{id}$ is not continuous; with step 2.2 the witness is established and the claim of [[fs-sequentially-continuous-implies-continuous]] is refuted. [step 1.1, step 2.1, step 2.2, L3] ∎

## Remarks

- **The two topologies are incomparable, so the identity is discontinuous in both directions.** The set $(-1,1)$ is open in the usual topology and not in the cocountable one, which is the counterexample above. In the other direction $\mathbb{R} \setminus \mathbb{Q}$ is cocountable-open, $\mathbb{Q}$ being at most countable ([[thm-rationals-countable]]), and is not open in the usual topology, since every ball contains a rational ([[lem-rat-embeds-dense]]). So neither topology is finer than the other, and this pair is not an instance of the continuous-bijection failure recorded in [[fs-continuous-bijection-is-a-homeomorphism]], which needs two comparable topologies.

- **Why sequences are blind here.** A sequence visits at most countably many points, and the cocountable topology supplies a neighbourhood of its proposed limit omitting every other point in that range; this is exactly the mechanism used in step 1.3 through [L1]. Assuming the Axiom of Countable Choice, [[thm-first-countable-sequences-suffice]] then shows that this failure of the sequential test forces the source not to be first countable.

- **The target's good behaviour is irrelevant.** It is metrizable, hence as well behaved as possible, and the failure is entirely on the source side, which is where sequential continuity is tested.
