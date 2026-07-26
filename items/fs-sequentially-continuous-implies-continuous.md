---
id: fs-sequentially-continuous-implies-continuous
kind: false-statement
title: "FALSE: a sequentially continuous map between topological spaces is continuous"
status: published
origin: session
deps: [def-sequence-convergence-top, def-standard-topologies, thm-first-countable-sequences-suffice,
       def-continuous-map-top, thm-continuity-characterisations-top, def-metrizable-space,
       lem-real-line-is-a-metric-space, def-metric-topology, def-metric-ball, thm-metric-open-set-algebra,
       def-interval, def-countable, cor-interval-uncountable, lem-subset-of-countable,
       lem-countable-iff-surjection-from-n, cor-of-one-positive, lem-of-add-order, def-neighbourhood-top]
justified_by: []
forward_refs: [cex-sequentially-continuous-not-continuous, ex-cocountable-topology-on-r]
aliases: []
landmark: false
short: "sequential continuity does not imply continuity"
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
    - title: "Sequential space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
pipeline_run: null
---

## Statement

**False claim:** if $X$ and $Y$ are topological spaces and $f : X \to Y$ is
sequentially continuous ([[def-sequence-convergence-top]]), then $f$ is
continuous ([[def-continuous-map-top]]).

One half of the relation between the two notions is a theorem: continuity always
implies sequential continuity, and in a **first countable** source the converse
holds as well ([[thm-first-countable-sequences-suffice]]). The claim above drops
the countability hypothesis, and it is exactly that hypothesis that carries the
weight. The witness is the identity map from $\mathbb{R}$ with the cocountable
topology to $\mathbb{R}$ with its usual topology
([[def-standard-topologies]], [[def-metrizable-space]]), and it is exhibited in
full below rather than cited, so that this page does not depend on its companion.

## Facts & Assumptions

**Given:** The set $\mathbb{R}$ carrying the cocountable topology $\mathcal{T}_{\mathrm{coc}}$ on the one hand and its usual topology $\mathcal{T}_{\mathbb{R}}$ on the other, and the identity function $\mathrm{id} : (\mathbb{R}, \mathcal{T}_{\mathrm{coc}}) \to (\mathbb{R}, \mathcal{T}_{\mathbb{R}})$.

[A1] In the cocountable topology on $\mathbb{R}$ the open sets are $\varnothing$ together with the sets whose complement is at most countable ([[def-standard-topologies]], [[def-countable]]).

[A2] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], clause (b)); it is sequentially continuous at $p$ when every sequence converging to $p$ has its image converging to $f(p)$ ([[def-sequence-convergence-top]]).

[L1] $\mathbb{R}$ with $d_{\mathbb{R}}(x,y) = |x-y|$ is a metric space whose metric topology is the usual topology of $\mathbb{R}$, and $B(x,r) = (x-r,\ x+r)$ ([[lem-real-line-is-a-metric-space]], [[def-metric-topology]], [[def-metrizable-space]], [[def-interval]], [[def-metric-ball]]).

[L2] Every ball is open in the metric topology ([[thm-metric-open-set-algebra]]).

[L3] For $a < b$ in $\mathbb{R}$ the open interval $(a,b)$ is uncountable ([[cor-interval-uncountable]]); every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L4] A nonempty set admitting a surjection from $\mathbb{N}$ is at most countable ([[lem-countable-iff-surjection-from-n]]).

[L5] $0 < 1$ in $\mathbb{R}$ ([[cor-of-one-positive]]), and adding $1$ to both sides of $0 < 1$ gives $1 < 1 + 1$ ([[lem-of-add-order]]).

[L6] Every point lies in each of its neighbourhoods ([[def-neighbourhood-top]]).

## Refutation

**Proof technique:** direct.

1.1 The radius $1$ is positive by [L5], so $V := B(0,1) = (-1, 1)$ is a ball, and it is open in the usual topology of $\mathbb{R}$. [L1, L2, L5]

1.2 By [L5] one has $1 < 1+1$, so the interval $(1,\ 1+1)$ is uncountable by [L3]; and $(1,\ 1+1) \subseteq \mathbb{R} \setminus (-1,1)$, since $x > 1$ excludes $x < 1$. [L1, L3, L5]

1.3 Let $(x_k)$ be a sequence in $\mathbb{R}$ converging to $p$ in the cocountable topology, and let $R := \{\, x_k : k \in \mathbb{N} \,\}$ be its range; the map $k \mapsto x_k$ is a surjection $\mathbb{N} \to R$ and $R \ne \varnothing$, so $R$ is at most countable. [given, L4]

2.1 $\mathbb{R} \setminus (-1,1)$ is not at most countable: otherwise its subset $(1,\ 1+1)$ would be at most countable by [L3], contradicting step 1.2. Hence $V = (-1,1)$ is nonempty and its complement is not at most countable, so $V \notin \mathcal{T}_{\mathrm{coc}}$. [step 1.2, A1, L3]

2.2 With $R$ as in step 1.3, the set $S := R \setminus \{p\}$ is at most countable by [L3], so $U := \mathbb{R} \setminus S$ is open in the cocountable topology by [A1], and $p \in U$. [step 1.3, A1, L3]

3.1 $\mathrm{id}^{-1}[V] = V$, which is open in the usual topology by step 1.1 and not open in the cocountable topology by step 2.1; so $\mathrm{id}$ is not continuous. [step 1.1, step 2.1, A2]

3.2 $U$ is a neighbourhood of $p$ in the cocountable topology by step 2.2, so convergence gives $K \in \mathbb{N}$ with $x_k \in U$ for all $k \ge K$; and $x_k \in R$ with $x_k \notin S = R \setminus \{p\}$ forces $x_k = p$. So $(x_k)$ is eventually constant with value $p$. [step 2.2, A2, L6]

4.1 An eventually constant sequence with eventual value $p$ converges to $p$ in every topology on $\mathbb{R}$, since every neighbourhood of $p$ contains $p$; in particular $\mathrm{id}(x_k) = x_k \to p = \mathrm{id}(p)$ in the usual topology. As $(x_k)$ and $p$ were arbitrary, $\mathrm{id}$ is sequentially continuous. [step 3.2, A2, L6]

5.1 By steps 3.1 and 4.1 the map $\mathrm{id} : (\mathbb{R},\mathcal{T}_{\mathrm{coc}}) \to (\mathbb{R},\mathcal{T}_{\mathbb{R}})$ is sequentially continuous and is not continuous, so the claim is false. [step 3.1, step 4.1] ∎

## Remarks

- **What the witness shows about the source.** The cocountable topology on $\mathbb{R}$ is **not first countable**: were it, [[thm-first-countable-sequences-suffice]] would make the map above continuous, and it is not. So some point of it has no at most countable neighbourhood base. That much is a genuine consequence of the refutation and not an extra assumption; the sharper statement that **no** point has one is true but is not established here, since the refutation exhibits a single failure of continuity rather than one at every point. it is also the reason the cocountable topology is the standard source of examples in which sequences fail to see the topology.

- **The failure is not about the target.** The target here is metrizable, hence as well behaved as a space can be; all the pathology is in the source, which is where sequential continuity is tested.

- **The same witness, worked as a counterexample with the cocountable topology's convergent sequences identified once and for all**, is on the companion page ([[cex-sequentially-continuous-not-continuous]], [[ex-cocountable-topology-on-r]]). The refutation above repeats the eventually-constant argument inline because an item on this page may not depend on an item that lives only on an examples page.
