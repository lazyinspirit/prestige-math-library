---
id: ex-the-cofinite-topology-in-the-separation-hierarchy
kind: example
title: "The cofinite topology on an infinite set is $T_1$ but neither Hausdorff nor regular nor normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-topologies, def-t0-and-t1-spaces, thm-t1-iff-singletons-are-closed,
       def-hausdorff-space, def-regular-and-t3-spaces, def-normal-and-t4-spaces,
       def-countable, def-interior-closure-boundary-top, def-topological-space,
       fs-every-t1-space-is-hausdorff]
justified_by: []
aliases: []
landmark: false
short: "cofinite topology in the hierarchy"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "L. Steen and J. Seebach, Counterexamples in Topology, §18"
      url: "https://en.wikipedia.org/wiki/Counterexamples_in_Topology"
    - title: "T1 space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/T1_space"
pipeline_run: null
---

## Example

Let $X$ be an infinite set — that is, a set that is not finite
([[def-countable]]) — and give it the cofinite topology
$\mathcal{T}_{\mathrm{cof}} = \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is finite} \,\}$
([[def-standard-topologies]]), whose closed sets are $X$ together with the finite
subsets of $X$. Then:

1. $(X, \mathcal{T}_{\mathrm{cof}})$ is **$T_1$** ([[def-t0-and-t1-spaces]]).
2. No two nonempty open sets are disjoint. Consequently the space is **not
   Hausdorff** ([[def-hausdorff-space]]), **not regular**
   ([[def-regular-and-t3-spaces]]) and **not normal**
   ([[def-normal-and-t4-spaces]]).

So the cofinite topology on an infinite set satisfies $T_1$ and $T_0$ and fails
every axiom above them. It is the standard witness that $T_1$ is strictly weaker
than the Hausdorff condition, and that is how it is used on the main page
([[fs-every-t1-space-is-hausdorff]]); here it is pushed further, to show that
$T_1$ implies neither of the two axioms that sit above $T_2$ either.

## Facts & Assumptions

**Given:** An infinite set $X$ with the cofinite topology $\mathcal{T}_{\mathrm{cof}}$, and points $x, y, z \in X$.

[A1] $U \in \mathcal{T}_{\mathrm{cof}}$ exactly when $U = \varnothing$ or $X \setminus U$ is finite; the closed sets are $X$ and the finite subsets of $X$; and a union of two finite sets is finite ([[def-standard-topologies]], facts (i) and (ii) of that item, [[def-topological-space]]).

[L1] A topology is $T_1$ exactly when it contains the cofinite topology on the same set ([[thm-t1-iff-singletons-are-closed]], clause (d), [[def-t0-and-t1-spaces]]).

[L2] Hausdorff: distinct points have disjoint open neighbourhoods. Regular: a point and a closed set not containing it have disjoint open supersets. Normal: two disjoint closed sets have disjoint open supersets ([[def-hausdorff-space]], [[def-regular-and-t3-spaces]], [[def-normal-and-t4-spaces]]).

[L3] A set with at most one element is finite, being equinumerous with $0$ or with $1$; so an infinite set has at least three distinct points, since a set with at most two elements is finite as a union of two sets each with at most one ([[def-countable]], [[def-standard-topologies]], fact (ii)).

[L4] A set is closed exactly when its complement is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Verification

**Proof technique:** direct.

1.1 $\mathcal{T}_{\mathrm{cof}} \subseteq \mathcal{T}_{\mathrm{cof}}$, so $(X,\mathcal{T}_{\mathrm{cof}})$ is $T_1$, which is claim 1. [L1]

1.2 $X$ contains three distinct points $x$, $y$, $z$. [L3]

1.3 Let $U, V$ be nonempty open sets and suppose $U \cap V = \varnothing$; then $X = (X \setminus U) \cup (X \setminus V)$ is a union of two finite sets, hence finite by [A1], contradicting the hypothesis that $X$ is infinite. So no two nonempty open sets are disjoint, which is the first half of claim 2. [A1, assume-hyp]

2.1 $x \ne y$, and any open $U \ni x$ and open $V \ni y$ are nonempty, hence meet by step 1.3; so the space is not Hausdorff by [L2]. [step 1.2, step 1.3, L2]

2.2 $\{y\}$ is closed by [A1] and $x \notin \{y\}$; any open $U \ni x$ and open $V \supseteq \{y\}$ are nonempty, hence meet by step 1.3; so the space is not regular by [L2]. [step 1.2, step 1.3, A1, L2, L4]

2.3 $\{y\}$ and $\{z\}$ are disjoint nonempty closed sets by [A1] and step 1.2; any open $U \supseteq \{y\}$ and open $V \supseteq \{z\}$ are nonempty, hence meet by step 1.3; so the space is not normal by [L2]. [step 1.2, step 1.3, A1, L2, L4]

3.1 Steps 2.1, 2.2 and 2.3 complete claim 2, and step 1.1 is claim 1. [step 1.1, step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **The three failures have one cause.** In the cofinite topology on an infinite set the open sets are so large that no two nonempty ones are disjoint, so every separation axiom whose conclusion is a pair of disjoint nonempty open sets fails at once. What survives is $T_1$, whose conclusion asks for open sets that are allowed to overlap.

- **The hypothesis that $X$ is infinite is necessary.** On a finite set the cofinite topology is the discrete one ([[def-standard-topologies]]), which satisfies every axiom on the main page.

- **This is the coarsest $T_1$ topology on $X$** ([[thm-t1-iff-singletons-are-closed]], clause (d)), which is why it is the natural place to look for a $T_1$ space that fails everything else: any $T_1$ topology on $X$ contains it, so any counterexample to a $T_1$ implication should be sought here first.
