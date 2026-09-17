---
id: ex-stone-duality-for-a-power-set-algebra
kind: example
title: Stone duality for a power set algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-stone-duality, thm-stone-representation-for-boolean-algebras, def-stone-cech-compactification, thm-compactness-via-nets-filters-and-ultrafilters, thm-ultrafilter-lemma, def-axiom-of-choice, def-boolean-algebra-and-boolean-ultrafilter-for-stone-duality]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Marcus Tressl, Stone Duality for Boolean Algebras — Example 2.3.2, p. 8; the beta-N universal-property verification is local from the declared Stone–Čech suppliers"
      url: "https://personalpages.manchester.ac.uk/staff/marcus.tressl/papers/StoneDualityBooleanAlgebras.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $B = \mathcal P(\mathbb N)$
be the power-set Boolean algebra of a discrete countable set. Then the Stone
space (ultrafilter space) of $B$ is the Stone–Čech compactification
$\beta\mathbb N$ of $\mathbb N$ ([[def-stone-cech-compactification]]):
its points are the ultrafilters on $\mathbb N$, the principal ultrafilters form
a dense copy of $\mathbb N$, the basic clopens are
$[A] = \{U : A \in U\}$ for $A \subseteq \mathbb N$, and the map
$A \mapsto [A]$ is the canonical isomorphism
$\mathcal P(\mathbb N) \cong \operatorname{Clop}(\beta\mathbb N)$ of
[[thm-stone-representation-for-boolean-algebras]].

## Facts & Assumptions

**Given:** The Axiom of Choice, the Boolean algebra $\mathcal P(\mathbb N)$, its ultrafilter space with basic clopens $[A]$, and the discrete space $\mathbb N$.

[L1] The map $A \mapsto [A]$ is a Boolean isomorphism $\mathcal P(\mathbb N) \cong \operatorname{Clop}(\operatorname{Ult}(\mathcal P(\mathbb N)))$ and the ultrafilter space is compact Hausdorff with a clopen basis, so it is a Stone space ([[thm-stone-representation-for-boolean-algebras]], [[def-axiom-of-choice]]).

[L2] Every proper filter on $\mathbb N$ extends to an ultrafilter, and an ultrafilter contains exactly one of $A$, $\mathbb N \setminus A$; the principal ultrafilters are the $U_n = \{A : n \in A\}$ ([[thm-ultrafilter-lemma]], [[def-boolean-algebra-and-boolean-ultrafilter-for-stone-duality]], [[def-axiom-of-choice]]).

[L3] Under the ultrafilter lemma every ultrafilter on a compact Hausdorff space converges to a unique point, and a topological space is compact exactly when every ultrafilter on it converges ([[thm-compactness-via-nets-filters-and-ultrafilters]], [[def-axiom-of-choice]]).

[L4] A Stone–Čech compactification of $X$ is a Hausdorff compactification $(B,i)$ such that every continuous map from $X$ into a compact Hausdorff space extends uniquely ([[def-stone-cech-compactification]]).

## Verification

**Proof technique:** direct.

1.1 The ultrafilters on $\mathcal P(\mathbb N)$ are exactly the maximal filters of subsets of $\mathbb N$ ("set ultrafilters") by the complement dichotomy [L2]; the principal ultrafilters $U_n$ are pairwise distinct and $\{U_n\} = [\{n\}]$ is open, so the map $n \mapsto U_n$ is an injective continuous map from discrete $\mathbb N$ onto a discrete subspace. [L1, L2, algebra]

1.2 The image $\{U_n : n \in \mathbb N\}$ is dense in the ultrafilter space: a nonempty basic clopen $[A]$ with $A \ne \varnothing$ contains $U_n$ for every $n \in A$. [1.1, L1, algebra]

1.3 Let $K$ be compact Hausdorff and $f : \mathbb N \to K$ continuous (that is, arbitrary). For an ultrafilter $U$ on $\mathbb N$ let $f_*U := \{B \subseteq K : f^{-1}(B) \in U\}$, an ultrafilter on $K$, which converges to a unique point by [L3]; define $F(U)$ to be that limit. [L3, algebra]

1.4 The map $F$ extends $f$: for the principal ultrafilter $U_n$ the pushforward $f_*U_n$ is the principal ultrafilter at $f(n)$, which converges to $f(n)$, so $F(U_n) = f(n)$. [1.3, L2, algebra]

1.5 The map $F$ is continuous: for open $V \subseteq K$ one has $F(U) \in V$ if and only if $V \in f_*U$, that is, $f^{-1}(V) \in U$: the forward implication holds because $V$ is a neighbourhood of the limit $F(U)$, and the backward implication holds because if $F(U) \notin V$ then the closed set $K \setminus V$ is a neighbourhood of $F(U)$, hence lies in $f_*U$, contradicting $V \in f_*U$; consequently $F^{-1}(V) = [f^{-1}(V)]$ is open. [1.3, L1, algebra]

2.1 Uniqueness: $F$ is determined on the dense subset $\{U_n : n \in \mathbb N\}$ by [step 1.2] and [step 1.4], and $K$ is Hausdorff, so two continuous extensions agree. [step 1.1, step 1.2, step 1.4, algebra]

3.1 By [step 1.1], [step 1.2], [step 1.5] and [step 2.1] the pair (ultrafilter space, $n \mapsto U_n$) is a Hausdorff compactification of $\mathbb N$ satisfying the universal property [L4], so it is a Stone–Čech compactification; by [L1] the basic clopens are the $[A]$ and the algebra of clopens is canonically $\mathcal P(\mathbb N)$. [step 1.1, step 1.2, step 1.5, step 2.1, L1, L4] ∎

## Remarks

- **The example is the identity case of [[thm-stone-duality]]**: the Stone space of $\mathcal P(\mathbb N)$ is $\beta\mathbb N$, whose Algebra of clopens is again $\mathcal P(\mathbb N)$.
- **No new choice is used beyond the ultrafilter lemma**, which is the declared form of the Axiom of Choice in this run.
