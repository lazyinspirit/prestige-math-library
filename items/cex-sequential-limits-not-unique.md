---
id: cex-sequential-limits-not-unique
kind: counterexample
title: "In the indiscrete topology every sequence converges to every point, and in the cofinite topology on an infinite set an injective sequence converges to every point"
status: draft
origin: session
deps: [def-sequence-convergence-top, def-standard-topologies, ex-cofinite-topology,
       lem-sequential-closure-inside-closure, def-injection-surjection-bijection, def-countable,
       lem-subset-of-countable, lem-pigeonhole, def-equinumerous, def-natural-numbers,
       def-neighbourhood-top, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "sequential limits are not unique"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
pipeline_run: null
---

## Statement refuted

**Refuted:** that a convergent sequence in a topological space has exactly one
limit, and hence that the notation $\lim_k x_k$ denotes at that generality
([[def-sequence-convergence-top]]).

**Witnesses.**

1. Let $X$ carry the indiscrete topology and have at least two points
   ([[def-standard-topologies]]). Then every sequence in $X$ converges to every
   point of $X$.
2. Let $X$ be infinite with the cofinite topology and let $(x_k)$ be an
   **injective** sequence in $X$ ([[def-injection-surjection-bijection]]). Then
   $(x_k)$ converges to every point of $X$.
3. Claim 2 is instantiated without any choice principle by $X := \mathbb{N}$ with
   the cofinite topology and the sequence $x_k := k$, which is injective outright
   and whose index set is infinite ([[def-natural-numbers]], [[lem-pigeonhole]]).

**No appeal is made to "every infinite set has a countably infinite subset".**
That statement is not a theorem of ZF, and claim 2 is a conditional statement
about a sequence that is *given*; claim 3 supplies such a sequence explicitly on
$\mathbb{N}$ rather than extracting one from an arbitrary infinite set.

## Facts & Assumptions

**Given:** A set $X$ with at least two points carrying the indiscrete topology; an infinite set $X$ carrying the cofinite topology, a point $p \in X$ and an injective sequence $(x_k)$ in $X$; and $\mathbb{N}$ with the cofinite topology and the sequence $x_k = k$.

[A1] $x_k \to p$ means that for every neighbourhood $N$ of $p$ there is $K \in \mathbb{N}$ with $x_k \in N$ for all $k \ge K$; a neighbourhood of $p$ contains an open set containing $p$ ([[def-sequence-convergence-top]], [[def-neighbourhood-top]]).

[A2] In the indiscrete topology the only open sets are $\varnothing$ and $X$; in the cofinite topology the open sets are $\varnothing$ together with the sets of finite complement ([[def-standard-topologies]], [[def-topological-space]]).

[L1] In the indiscrete topology every sequence converges to every point ([[lem-sequential-closure-inside-closure]], claim 3).

[L2] A subset of a finite set is finite ([[def-standard-topologies]]); $\approx$ is symmetric and transitive, and an injection restricts to a bijection onto its image ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L3] A subset of $\mathbb{N}$ that is not bounded above is countably infinite ([[lem-subset-of-countable]]); no finite set is countably infinite, since $\mathbb{N} \not\approx n$ for every natural $n$ ([[lem-pigeonhole]], claim 4, [[def-countable]]).

[L4] $\mathbb{N}$ is infinite, that is not finite ([[lem-pigeonhole]], claim 4, [[def-countable]], [[def-natural-numbers]]).

[L5] In the cofinite topology on an infinite set no two nonempty open sets are disjoint ([[ex-cofinite-topology]], claim 3).

## Counterexample

**Proof technique:** direct.

1.1 Claim 1 is [L1]: in the indiscrete topology the only neighbourhood of any point is $X$ itself, so every sequence is eventually in every neighbourhood of every point. With at least two points, some sequence therefore has two distinct limits. [A1, A2, L1]

1.2 Let $X$ be infinite with the cofinite topology, let $p \in X$, let $(x_k)$ be injective, and let $N$ be a neighbourhood of $p$; fix an open $U$ with $p \in U \subseteq N$, so $U \ne \varnothing$ and $F := X \setminus U$ is finite. [A1, A2, choose]

1.3 The index set $S := \{\, k \in \mathbb{N} : x_k \in F \,\}$ is finite: the injectivity of $(x_k)$ makes $k \mapsto x_k$ a bijection of $S$ onto its image, which is a subset of the finite set $F$ and hence finite, so $S$ is finite as well. [given, L2]

2.1 A finite subset of $\mathbb{N}$ is bounded above: if it were not, it would be countably infinite by [L3], and no finite set is countably infinite. So $S$ is bounded above, say by $K \in \mathbb{N}$. [step 1.3, L3]

3.1 For every $k$ with $k > K$ one has $k \notin S$, that is $x_k \notin F$, that is $x_k \in U \subseteq N$; so $(x_k)$ is eventually in $N$. As $N$ was an arbitrary neighbourhood of $p$, $x_k \to p$, and as $p$ was arbitrary this proves claim 2. [step 1.2, step 2.1, A1]

4.1 Claim 3: $\mathbb{N}$ is infinite by [L4], the sequence $x_k = k$ is injective, being the identity function of $\mathbb{N}$, and $\mathbb{N}$ has at least two points; so claim 2 applies and $(k)_{k \in \mathbb{N}}$ converges in the cofinite topology on $\mathbb{N}$ to every natural number at once. [step 3.1, L4]

5.1 By steps 1.1 and 4.1 there are topological spaces in which a sequence has more than one limit; the notation $\lim_k x_k$ therefore does not denote in a general topological space, and the uniqueness available for sequences of reals and in metric spaces is a property of those settings and not of convergence as such. Both spaces also fail to separate their points by disjoint open sets, in the second case by [L5]. [step 1.1, step 4.1, L5] ∎

## Remarks

- **Uniqueness of limits is a separation property, not a fact about sequences.** In both witnesses distinct points fail to have disjoint neighbourhoods: in the indiscrete topology the only neighbourhood of any point is the whole space, and in the cofinite topology on an infinite set any two nonempty open sets meet ([[ex-cofinite-topology]]). Where distinct points *are* separated by disjoint open sets — in particular in every metric space ([[thm-metric-hausdorff-separation]]) — the argument that a sequence cannot be eventually inside two disjoint sets restores uniqueness ([[lem-metric-limits-unique]]).

- **Why claim 2 is stated for a given injective sequence.** Extracting an injective sequence from an arbitrary infinite set is exactly the statement "every infinite set has a countably infinite subset", which is not provable in ZF ([[fs-infinite-has-countable-subset-in-zf]]). Claim 3 avoids the issue by naming $\mathbb{N}$ and the identity sequence, for which injectivity is immediate.

- **A sequence in the cofinite topology need not be injective to have many limits**, and need not have many limits if it is not: a constant sequence converges only to its value there, since singletons are closed. Injectivity is used in exactly one place, step 1.3, to make each finite set catch only finitely many indices.
