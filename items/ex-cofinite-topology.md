---
id: ex-cofinite-topology
kind: example
title: "On an infinite set the cofinite topology has every infinite subset dense and no two nonempty open sets disjoint"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-topologies, def-dense-top, thm-closure-characterisation-top, def-countable,
       def-topological-space, def-interior-closure-boundary-top]
justified_by: []
aliases: []
landmark: false
short: "the cofinite topology on an infinite set"
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
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "J. Munkres, Topology, 2nd ed., §12"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Example

Let $X$ be an infinite set with the cofinite topology
$\mathcal{T}_{\mathrm{cof}}$, whose open sets are $\varnothing$ together with the
sets of finite complement ([[def-standard-topologies]], [[def-countable]]). Then:

1. **Closures.** For $A \subseteq X$,
   $$\overline{A} = \begin{cases} A & A \text{ finite} \\ X & A \text{ infinite,} \end{cases} \qquad \operatorname{int}(A) = \begin{cases} A & X \setminus A \text{ finite} \\ \varnothing & X \setminus A \text{ infinite.} \end{cases}$$
2. **A subset is dense if and only if it is infinite** ([[def-dense-top]]); in
   particular every infinite subset is dense, and no finite subset is.
3. **No two nonempty open sets are disjoint.** If $U, V \in \mathcal{T}_{\mathrm{cof}}$
   are nonempty then $U \cap V \ne \varnothing$.
4. **Every singleton is closed**, so points are distinguishable by closed sets;
   nevertheless claim 3 says distinct points are never separated by disjoint open
   sets, so the space is as far from Hausdorff as a space with closed points can
   be.

## Facts & Assumptions

**Given:** An infinite set $X$ with the cofinite topology, subsets $A, U, V \subseteq X$ and points of $X$.

[A1] The open sets of $\mathcal{T}_{\mathrm{cof}}$ are $\varnothing$ together with the sets whose complement is finite; the closed sets are $X$ together with the finite subsets of $X$ ([[def-standard-topologies]]).

[A2] A subset of a finite set is finite, and a union of two finite sets is finite ([[def-standard-topologies]]); "infinite" means "not finite" ([[def-countable]]).

[L1] $\operatorname{int}(A)$ is the largest open subset of $A$, $\overline{A}$ the smallest closed superset of $A$ ([[def-interior-closure-boundary-top]]); a set is closed exactly when it equals its closure ([[thm-closure-characterisation-top]], claim 2).

[L2] $A$ is dense exactly when it meets every nonempty open set, equivalently when $\overline{A} = X$ ([[def-dense-top]]).

[L3] A topology contains $X$ and is closed under binary intersections ([[def-topological-space]]).

## Verification

**Proof technique:** direct.

1.1 If $A$ is finite then $A$ is closed by [A1], so $\overline{A} = A$ by [L1]. [A1, L1]

1.2 If $A$ is infinite then no finite set contains $A$, since a subset of a finite set is finite; so the only closed superset of $A$ is $X$ and $\overline{A} = X$. [A1, A2, L1]

1.3 If $X \setminus A$ is finite then $A$ is open by [A1], so $\operatorname{int}(A) = A$. [A1, L1]

1.4 If $X \setminus A$ is infinite then no nonempty open $U$ satisfies $U \subseteq A$: such a $U$ would have $X \setminus U$ finite and $X \setminus A \subseteq X \setminus U$, making $X \setminus A$ finite by [A2]. Hence $\operatorname{int}(A) = \varnothing$. [A1, A2, L1]

1.5 Let $U, V$ be nonempty open sets; then $X \setminus U$ and $X \setminus V$ are finite, so $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is finite by [A2], and $U \cap V$ cannot be empty, for otherwise $X = X \setminus (U \cap V)$ would be finite, contradicting the hypothesis on $X$. [given, A1, A2, L3]

1.6 Each singleton $\{x\}$ is finite, hence closed by [A1]. [A1]

2.1 Steps 1.1 to 1.4 give claim 1. [step 1.1, step 1.2, step 1.3, step 1.4]

2.2 If $A$ is infinite then $\overline{A} = X$ by step 1.2, so $A$ is dense by [L2]; if $A$ is finite then $A \ne X$, since $X$ is infinite, and $\overline{A} = A \ne X$ by step 1.1, so $A$ is not dense. Hence the dense subsets are exactly the infinite ones, which is claim 2. [step 1.1, step 1.2, given, L2]

3.1 Step 1.5 is claim 3, and step 1.6 with claim 3 is claim 4. [step 1.5, step 1.6] ∎

## Remarks

- **Claim 3 is the reason the cofinite topology is a standard counterexample factory.** A space with at least two points in which any two nonempty open sets meet cannot be metrizable ([[thm-metric-hausdorff-separation]], [[def-metrizable-space]]), since a metric separates distinct points by disjoint balls. It does **not** follow that sequential limits fail to be unique there: the cocountable topology on $\mathbb{R}$ also has no two disjoint nonempty open sets and its sequential limits *are* unique ([[ex-cocountable-topology-on-r]]). In the cofinite topology uniqueness does fail, but the argument needs an injective sequence and not merely the meeting of open sets ([[cex-sequential-limits-not-unique]]).

- **Finiteness of $X$ collapses the example.** If $X$ were finite then every subset would have finite complement, the topology would be discrete, and all four claims would read differently or vacuously. The hypothesis that $X$ is infinite is used in steps 1.5 and 2.2 and is not decoration.

- **The same computation with "at most countable" in place of "finite"** gives the cocountable topology, whose behaviour on $\mathbb{R}$ is the subject of the next example ([[ex-cocountable-topology-on-r]]). The two differ in exactly one respect that matters here: on $\mathbb{R}$ the cocountable topology still has closed points and no two disjoint nonempty open sets, but its convergent sequences are far more restricted.
