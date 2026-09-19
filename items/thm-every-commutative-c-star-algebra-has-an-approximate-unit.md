---
id: thm-every-commutative-c-star-algebra-has-an-approximate-unit
kind: theorem
title: Every commutative C star algebra has an approximate unit
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-nonunital-commutative-gelfand-naimark, def-approximate-unit-and-proper-c-star-morphism, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-c-star-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Example 3.1.39 and §3.1, printed pp. 66–67"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — §4, printed pp. 9–11"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), with the Dependent Choice
cost of the cutoff lemma inherited. Every commutative
C\*-algebra $A$ ([[def-c-star-algebra]]) has an approximate unit of positive
contractions in the sense of
[[def-approximate-unit-and-proper-c-star-morphism]]. If $A = C_0(X)$ for a
locally compact Hausdorff space $X$, the net can be taken to be the directed
family of all $e \in C_c(X)$ with $0 \le e \le 1$ ordered pointwise.

## Facts & Assumptions

**Given:** The Axiom of Choice, a commutative C\*-algebra $A$, and the isometric $\ast$-isomorphism $\Gamma : A \to C_0(\Delta(A))$ of the nonunital commutative Gelfand–Naimark theorem.

[L1] $\Gamma : A \to C_0(X)$ with $X := \Delta(A)$ is an isometric $\ast$-isomorphism, $X$ is locally compact Hausdorff, and $a \in A$ is positive (of the form $b^*b$ for some $b \in A$) if and only if $\Gamma(a) \ge 0$ pointwise, with $\sqrt{\Gamma(a)} \in C_0(X)$ for nonnegative $\Gamma(a)$ ([[thm-nonunital-commutative-gelfand-naimark]], [[def-axiom-of-choice]]).

[L2] An approximate unit is a net of positive contractions $e_i$ with $\|e_i a - a\| \to 0$; a net is indexed by a nonempty directed set ([[def-approximate-unit-and-proper-c-star-morphism]]).

[L3] Assuming Dependent Choice — which follows from the Axiom of Choice — for a compact set $K$ inside an open set $U$ in a locally compact Hausdorff space $X$ there is $f \in C_c(X)$ with $\mathbf 1_K \le f \le \mathbf 1_U$ ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]]).

## Proof

**Proof technique:** direct.

1.1 In $C_0(X)$ the family $\Lambda := \{e \in C_c(X) : 0 \le e \le 1\}$ is nonempty (it contains $0$) and directed by the pointwise order: for $e_1,e_2 \in \Lambda$ the pointwise maximum $e_1 \vee e_2$ lies in $C_c(X)$ (its support is contained in the union of the supports) and satisfies $0 \le e_1\vee e_2 \le 1$ and $e_j \le e_1 \vee e_2$. [L2, algebra]

1.2 Each $e \in \Lambda$ is a positive contraction of $C_0(X)$: $\|e\|_\infty \le 1$, and $e = (\sqrt e)^2 = (\sqrt e)^*(\sqrt e)$ with $\sqrt e \in C_c(X)$ real, so $e$ is positive; and by the positivity statement of [L1] the same holds after transporting to $A$. [L1, algebra]

2.1 For $f \in C_0(X)$ and $\epsilon > 0$ put $K := \{|f| \ge \epsilon\}$, a compact subset of $X$; by [L3] with $U := X$ there is $e \in C_c(X)$ with $\mathbf 1_K \le e \le \mathbf 1_X = 1$, so $e \in \Lambda$; for every $e' \in \Lambda$ with $e' \ge e$ one has $e' = 1$ on $K$ and hence $|f - e'f| = 0$ on $K$, while off $K$ one has $|f| < \epsilon$ and $|1-e'| \le 1$, so $|f - e'f| < \epsilon$; thus $\|f - e'f\|_\infty \le \epsilon$ for all $e' \ge e$. [step 1.1, L3, algebra]

3.1 Consequently the net $(e)_{e \in \Lambda}$ indexed by the directed set $\Lambda$ satisfies $ef \to f$ for every $f \in C_0(X)$, and since $C_0(X)$ is commutative also $fe \to f$; by [step 1.2] the $e$'s are positive contractions, so this is an approximate unit of $C_0(X)$. [step 1.2, step 2.1, L2, algebra]

4.1 Transporting along the isometric $\ast$-isomorphism $\Gamma^{-1} : C_0(X) \to A$ of [L1], the net $(\Gamma^{-1}(e))_{e \in \Lambda}$ is an approximate unit of $A$: positivity is preserved by $\ast$-isomorphisms, norms are preserved, and $\|\Gamma^{-1}(e)\Gamma^{-1}(f) - \Gamma^{-1}(f)\| = \|ef - f\|_\infty \to 0$. For the zero algebra the constant net $0$ is an approximate unit by [L2]. [step 3.1, L1, L2]

5.1 Hence every commutative C\*-algebra has an approximate unit of positive contractions, and for $A = C_0(X)$ the explicit net of [step 3.1] realises it. [step 4.1] ∎

## Remarks

- **Directedness avoids choosing bumps simultaneously.** The net is indexed by all compactly supported functions $0 \le e \le 1$ at once, so no simultaneous selection of cutoffs is made; the single cutoff in [step 2.1] is chosen for a fixed $f$ and $\epsilon$.
- **The choice cost is the cutoff's.** Dependent Choice is inherited from [[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]] and is used nowhere else; the directedness and the estimates are choice-free.
