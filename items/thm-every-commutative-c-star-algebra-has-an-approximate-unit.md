---
id: thm-every-commutative-c-star-algebra-has-an-approximate-unit
kind: theorem
title: Every commutative C star algebra has an approximate unit
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["thm-nonunital-commutative-gelfand-naimark", "def-approximate-unit-and-proper-c-star-morphism", "lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set", "def-axiom-of-choice", "lem-ac-supplies-countable-and-dependent-choice-for-banach-integration", "def-c-star-algebra", "def-compact-support-c-c-and-c-zero-on-an-lch-space", "thm-closed-subspace-of-a-compact-space-is-compact"]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
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

[F1] Under AC, $\Gamma:A\to C_0(X)$ is an isometric star-isomorphism onto, where $X=\Delta(A)$ is locally compact Hausdorff, including zero and unital algebras. ([[thm-nonunital-commutative-gelfand-naimark]], [[def-axiom-of-choice]]).

[F2] An approximate unit is a net indexed by a nonempty directed set of self-adjoint elements $e_i=b_i^*b_i$ of norm at most one, such that both $e_i a\to a$ and $a e_i\to a$ in norm. In a commutative algebra these convergence conditions coincide. ([[def-approximate-unit-and-proper-c-star-morphism]]).

[F3] Assuming Dependent Choice — which follows from the Axiom of Choice — for a compact set $K$ inside an open set $U$ in a locally compact Hausdorff space $X$ there is $f \in C_c(X)$ with $\mathbf 1_K \le f \le \mathbf 1_U$ ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-axiom-of-choice]]).

[F4] The support is the closure of the nonzero set, $C_c$ means compact support, and $C_0$ means every positive absolute-value level set is compact. Closed subsets of compact spaces are compact. ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[thm-closed-subspace-of-a-compact-space-is-compact]]).

## Proof

**Proof technique:** direct.

1.1 In $C_0(X)$ the family $\Lambda := \{e \in C_c(X) : 0 \le e \le 1\}$ is nonempty (it contains $0$) and directed by the pointwise order: for $e_1,e_2 \in \Lambda$ the pointwise maximum $e_1 \vee e_2$ lies in $C_c(X)$ (the maximum is continuous by $\max(u,v)=(u+v+|u-v|)/2$, and its closed support is contained in the finite union of the compact supports) and satisfies $0 \le e_1\vee e_2 \le 1$ and $e_j \le e_1 \vee e_2$. [F2, F4, algebra]

1.2 Each $e \in \Lambda$ is a positive contraction of $C_0(X)$: $\|e\|_\infty \le 1$, and $e = (\sqrt e)^2 = (\sqrt e)^*(\sqrt e)$ with $\sqrt e \in C_c(X)$ real, so $e$ is positive; the square root is continuous on $[0,1]$ and has the same nonzero set and support as $e$, so it belongs to $C_c(X)\subset C_0(X)$; after transporting, $\Gamma^{-1}(e)=\Gamma^{-1}(\sqrt e)^*\Gamma^{-1}(\sqrt e)$ and is self-adjoint. [F1, F4, algebra]

2.1 For $f \in C_0(X)$ and $\epsilon > 0$ put $K := \{|f| \ge \epsilon/2\}$, a compact subset of $X$; by [F3] with $U := X$ there is $e \in C_c(X)$ with $\mathbf 1_K \le e \le \mathbf 1_X = 1$, so $e \in \Lambda$; for every $e' \in \Lambda$ with $e' \ge e$ one has $e' = 1$ on $K$ and hence $|f - e'f| = 0$ on $K$, while off $K$ one has $|f| < \epsilon/2$ and $|1-e'| \le 1$, so $|f - e'f| < \epsilon/2$; thus $\|f - e'f\|_\infty \le \epsilon/2<\epsilon$ for all $e' \ge e$. [step 1.1, F3, F4, algebra]

3.1 Consequently the net $(e)_{e \in \Lambda}$ indexed by the directed set $\Lambda$ satisfies $ef \to f$ for every $f \in C_0(X)$, and since $C_0(X)$ is commutative also $fe \to f$; by [step 1.2] the $e$'s are positive contractions, so this is an approximate unit of $C_0(X)$. [step 1.2, step 2.1, F2, algebra]

4.1 Transporting along the isometric $\ast$-isomorphism $\Gamma^{-1} : C_0(X) \to A$ of [F1], the net $(\Gamma^{-1}(e))_{e \in \Lambda}$ is an approximate unit of $A$: the explicit factorization in step 1.2 proves positivity and self-adjointness, norms are preserved, and $\|\Gamma^{-1}(e)\Gamma^{-1}(f) - \Gamma^{-1}(f)\| = \|ef - f\|_\infty \to 0$. For the zero algebra the constant net $0$ is an approximate unit by [F2]. [step 1.2, step 3.1, F1, F2]

5.1 Hence every commutative C\*-algebra has an approximate unit of positive contractions, and for $A = C_0(X)$ the explicit net of [step 3.1] realises it. [step 3.1, step 4.1] ∎

## Remarks

- **Directedness avoids choosing bumps simultaneously.** The net is indexed by all compactly supported functions $0 \le e \le 1$ at once, so no simultaneous selection of cutoffs is made; the single cutoff in [step 2.1] is chosen for a fixed $f$ and $\epsilon$.
- **Choice costs.** AC is inherited from Gelfand–Naimark and supplies DC for the cutoff by [F3]. Directedness, square-root factorization and the norm estimates require no further choice. For $X=\varnothing$, the same family is the singleton zero function; its net is the zero-algebra approximate unit.
