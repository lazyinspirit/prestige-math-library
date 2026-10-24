---
id: lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux
kind: lemma
title: The admissible-tableau count equals the Littlewood--Richardson coefficient
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
proof_strategy: direct
deps:
  - cor-schurs-lemma-for-irreducible-representations
  - def-axiom-of-choice
  - prop-semistandard-tableaux-expand-schur-characters
  - def-littlewood-richardson-tableau-and-coefficient
  - lem-bender-knuth-involutions-on-semistandard-tableaux
  - def-schur-module-and-schur-polynomial-character
  - def-stable-schur-function-by-bialternants
  - thm-skew-jacobi-trudi-and-tableau-expansion
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-semistandard-tableau-and-kostka-number
  - def-partition-young-diagram-and-conjugate-partition
  - thm-schur-weyl-decomposition-with-length-cutoff
  - lem-highest-weight-modules-have-weights-below-the-top-weight
  - def-dominance-order-on-partitions
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. R. Stembridge, A Concise Proof of the Littlewood--Richardson Rule, Electronic Journal of Combinatorics 9 (2002), #N5, 4 pp."
      url: "https://www.combinatorics.org/ojs/index.php/eljc/article/download/v9i1n5/pdf"
      locator: "Printed pp. 2--3: the bi-alternant theorem '$a_{\\lambda+\\rho}s_{\\mu/\\nu}=\\sum a_{\\lambda+\\omega(T)+\\rho}$ ... T in $S(\\mu/\\nu)$ such that $\\lambda+\\omega(T_{\\ge j})\\in P_n$ for all $j\\ge1$' with the complete sign-reversing-involution proof (bad guys), the bi-alternant corollary $s_\\mu=a_{\\mu+\\rho}/a_\\rho$, and the Zelevinsky corollary $s_\\lambda s_{\\mu/\\nu}=\\sum_T s_{\\lambda+\\omega(T)}$ together with the remark that 'it is a not-too-difficult exercise to show that these two formulations count the same tableaux' (printed p. 3)."
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §9"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "§I.9, printed pp. 142--148: the Littlewood--Richardson rule (9.2) in the lattice-permutation form and the complete Littlewood--Robinson proof of (9.4), which identifies the tableaux counted by the lattice condition with the tableaux counted by the recursive/dominant-weight description; the two formulations are there proved to count the same tableaux."
---

## Statement

Assume the Axiom of Choice. Let $V=\mathbb C^r$, $r\ge1$, and let
$\lambda,\mu$ be partitions with $\ell(\lambda),\ell(\mu)\le r$. Write
$\rho_r=(r-1,r-2,\dots,0)$, $a_\eta=\det(x_i^{\eta_j})_{1\le i,j\le r}$, and
$s_\mu=\sum_Tx^{\operatorname{wt}(T)}$ over semistandard tableaux of shape
$\mu$ with entries in $\{1,\dots,r\}$
([[prop-semistandard-tableaux-expand-schur-characters]],
[[def-stable-schur-function-by-bialternants]]). Say that a semistandard
tableau $T$ of shape $\mu$ with entries in $\{1,\dots,r\}$ is **admissible**
for $\lambda$ if $\lambda+\operatorname{wt}(T_{\ge j})$ is a partition with at
most $r$ parts for every $j\ge1$, where $T_{\ge j}$ is the subtableau
consisting of the entries in columns $j,j+1,\dots$. Then:

(i) (bi-alternant expansion)
$$a_{\lambda+\rho_r}s_\mu=\sum_{T\text{ admissible}}a_{\lambda+\operatorname{wt}(T)+\rho_r}, \qquad\text{equivalently}\qquad s_\lambda s_\mu=\sum_{T\text{ admissible}}s_{\lambda+\operatorname{wt}(T)},$$
the second identity obtained by dividing by $a_{\rho_r}$ and using
$\ell(\lambda+\operatorname{wt}(T))\le r$ for admissible $T$.

(ii) For every partition $\nu$ with $\ell(\nu)\le r$, the number of
admissible tableaux $T$ of shape $\mu$ with
$\lambda+\operatorname{wt}(T)=\nu$ equals the number of
Littlewood--Richardson tableaux of shape $\nu/\lambda$ and content $\mu$,
namely the Littlewood--Richardson coefficient $c^\nu_{\lambda\mu}$
([[def-littlewood-richardson-tableau-and-coefficient]]). This count identity
is the classical Littlewood--Richardson comparison; it is cited to Macdonald
§I.9, (9.2)--(9.4), whose Littlewood--Robinson algorithm proves it. No
bijection between the two tableau sets is asserted here. Moreover the
multiplicity of $S_\nu(V)$ in the polynomial $\operatorname{GL}(V)$-module
$S_\lambda(V)\otimes S_\mu(V)$ equals $c^\nu_{\lambda\mu}$, because the
character of that tensor product is
$\operatorname{ch}S_\lambda(V)\operatorname{ch}S_\mu(V)=s_\lambda s_\mu$
([[def-schur-module-and-schur-polynomial-character]]) and the multiplicities
are read off from the expansion in the basis $s_\nu$ of characters of pairwise
non-isomorphic simple modules
([[thm-schur-weyl-decomposition-with-length-cutoff]] parts (2) and (3)).

## Facts & Assumptions

**Given:** AC, $r\ge1$, partitions $\lambda,\mu$ with $\ell(\lambda),\ell(\mu)\le r$, the alternants $a_\eta$ and the bialternant Schur polynomials $s_\eta$ at rank $r$, and the set of semistandard tableaux of shape $\mu$ with entries in $\{1,\dots,r\}$.

[F1] $s_\mu=\sum_Tx^{\operatorname{wt}(T)}$ over semistandard tableaux of shape $\mu$ with entries in $\{1,\dots,r\}$, and this polynomial is symmetric in $x_1,\dots,x_r$; for a partition $\eta$ with $\ell(\eta)\le r$ one has the bialternant formula $s_\eta=a_{\eta+\rho_r}/a_{\rho_r}$ ([[prop-semistandard-tableaux-expand-schur-characters]], [[def-stable-schur-function-by-bialternants]], [[thm-skew-jacobi-trudi-and-tableau-expansion]]).

[F2] Bender--Knuth involutions: for $k\in\{1,\dots,r-1\}$ there is an involution $\sigma_k$ of the set of semistandard tableaux of shape $\mu$ with entries in $\{1,\dots,r\}$, obtained by complementing the counts of free $k$'s and free $k+1$'s in each row, with $\operatorname{wt}(\sigma_k(T))=s_k\operatorname{wt}(T)$; consequently $\sum_Tx^{\operatorname{wt}(T)}$ is invariant under exchanging $x_k$ and $x_{k+1}$, hence symmetric ([[lem-bender-knuth-involutions-on-semistandard-tableaux]]); moreover $a_{w\eta}=\operatorname{sgn}(w)a_\eta$ for every $w\in S_r$ and every exponent vector $\eta$, since $a_\eta$ is the determinant $\det(x_i^{\eta_j})$. A $k$ or $k+1$ of a subtableau $T_{<j}$ is free in $T_{<j}$ exactly when it is free in $T$, because a column of a skew tableau consists of all cells of $T$ with that column index.

[F3] The tensor product $M=S_\lambda(V)\otimes S_\mu(V)$ is a direct summand of $V^{\otimes(|\lambda|+|\mu|)}$: each factor is a direct summand of its tensor power by Schur--Weyl decomposition, and tensoring the inclusions and retractions gives a retraction onto $M$. That larger tensor power is a finite direct sum of the simple Schur modules by [[thm-schur-weyl-decomposition-with-length-cutoff]]. A direct summand is again a direct sum of these simples: Schur's lemma makes its equivariant idempotent act by a scalar matrix on each isotypic multiplicity space; each scalar matrix is an idempotent and its image is a vector space of copies of the same simple ([[cor-schurs-lemma-for-irreducible-representations]]; scalarity follows by applying the nonzero-kernel argument to an eigenvalue). The Schur characters at rank $r$ are linearly independent: multiply a finite relation by $a_{\rho_r}$; the strictly decreasing exponent vector $\nu+\rho_r$ occurs in $a_{\eta+\rho_r}$ exactly when $\eta=\nu$, with coefficient one. Thus character coefficients in a Schur expansion of $M$ are its direct-summand multiplicities ([[def-schur-module-and-schur-polynomial-character]], [[def-stable-schur-function-by-bialternants]]).

[F4] The classical Littlewood--Richardson theorem expands the product $s_\lambda s_\mu$ in the Schur basis with coefficient $c^\nu_{\lambda\mu}$ equal to the number of semistandard skew tableaux of shape $\nu/\lambda$, content $\mu$, and lattice reading word, as defined in [[def-littlewood-richardson-tableau-and-coefficient]]. Macdonald's complete Littlewood--Robinson proof in §I.9 establishes this count formula; this item imports that theorem and makes no bijection claim between those tableaux and the admissible tableaux of part (i).

## Proof

1.1 First identity. Since $s_\mu$ is symmetric by [F1] and $w$ acts on monomials by $w(x^\alpha)=x^{w\alpha}$, for every $w\in S_r$ one has $$x^{w(\lambda+\rho_r)}s_\mu=w\bigl(x^{\lambda+\rho_r}s_\mu\bigr) =\sum_Tx^{w(\lambda+\rho_r+\operatorname{wt}(T))}.$$ Multiplying by $\operatorname{sgn}(w)$, summing over $w$, and using $a_\eta=\sum_w\operatorname{sgn}(w)x^{w\eta}$ gives $a_{\lambda+\rho_r}s_\mu=\sum_Ta_{\lambda+\rho_r+\operatorname{wt}(T)}$. [F1, given, algebra]

1.2 The bad guys cancel. Call $T$ bad if $\lambda+\operatorname{wt}(T_{\ge j})$ fails to be a partition for some $j\ge1$; equivalently $\lambda_k+\operatorname{wt}(T_{\ge j})_k<\lambda_{k+1}+\operatorname{wt}(T_{\ge j})_{k+1}$ for some pair $(k,j)$. Among the pairs $(k,j)$ with $j$ maximal and then $k$ minimal, one has: $\lambda+\operatorname{wt}(T_{>j})$ is a partition (by maximality of $j$), the difference $\operatorname{wt}(T_{\ge j})_k-\operatorname{wt}(T_{\ge j})_{k+1}$ changes by at most one when passing from $T_{>j}$ to $T_{\ge j}$, and hence column $j$ contains a $k+1$ and no $k$, with $$\lambda_k+\operatorname{wt}(T_{\ge j})_k+1=\lambda_{k+1}+\operatorname{wt}(T_{\ge j})_{k+1}.$$ Let $T^*$ be obtained from $T$ by applying the Bender--Knuth involution $\sigma_k$ to the subtableau $T_{<j}$ and leaving the rest unchanged. This is well defined and involutive: by the last sentence of [F2] the free cells of $T_{<j}$ are the free cells of $T$ lying in columns $<j$, so the modification swaps the counts of free $k$'s and free $k+1$'s in each row of $T_{<j}$; row weak increase within $T_{<j}$ follows from the Bender--Knuth lemma. Across its boundary, only a $k$ changed to $k+1$ could cause a problem. But column $j$ contains no $k$, so a boundary neighbour in that column which was at least $k$ is at least $k+1$. Hence it remains at least the changed entry ([[lem-bender-knuth-involutions-on-semistandard-tableaux]]); column strictness is preserved because each column changes in at most one cell, as in the proof of [[lem-bender-knuth-involutions-on-semistandard-tableaux]]. Moreover $(T^*)_{\ge j}=T_{\ge j}$, so $T^*$ is bad again, and the same pair $(k,j)$ is selected for $T^*$: the violation tests at all levels $j'\ge j$ are unchanged, so $j$ is still maximal; and the test at level $j$ is unchanged, so $k$ is still minimal. Hence applying $\sigma_k$ to $T^*_{<j}=\sigma_k(T_{<j})$ returns $T$, and $T\mapsto T^*$ is an involution of the set of bad guys. [F1, F2, given, algebra]

2.1 Cancellation. By [F2], $\operatorname{wt}(T^*_{<j})=s_k\operatorname{wt}(T_{<j})$ and $\operatorname{wt}(T^*_{\ge j})=\operatorname{wt}(T_{\ge j})$. The equality in step 1.2 says that $s_k$ fixes $\lambda+\operatorname{wt}(T_{\ge j})+\rho_r$, so $s_k(\lambda+\operatorname{wt}(T)+\rho_r)=\lambda+\operatorname{wt}(T^*)+\rho_r$. Since $a_{w\eta}=\operatorname{sgn}(w)a_\eta$ [F2] and the transposition $s_k$ is odd, $a_{\lambda+\operatorname{wt}(T^*)+\rho_r} =a_{s_k(\lambda+\operatorname{wt}(T)+\rho_r)} =-a_{\lambda+\operatorname{wt}(T)+\rho_r}$, so the paired terms cancel; if $T=T^*$, its alternant equals its negative and is zero over $\mathbb Z$ in the sum of step 1.1. The bad guys therefore contribute $0$, and the surviving tableaux are exactly the admissible ones, proving the first identity of (i). [F1, F2, step 1.1, step 1.2, algebra]

3.1 Second identity. For admissible $T$ the vector $\lambda+\operatorname{wt}(T)$ is a partition with at most $r$ parts (take $j=1$), so by the bialternant formula [F1] $a_{\lambda+\operatorname{wt}(T)+\rho_r}=a_{\rho_r}s_{\lambda+\operatorname{wt}(T)}$. Substituting into step 2.1 and cancelling the nonzero polynomial $a_{\rho_r}$ gives $s_\lambda s_\mu=\sum_{T\text{ admissible}}s_{\lambda+\operatorname{wt}(T)}$. [F1, step 2.1, algebra]

4.1 The admissible-tableau count is the LR coefficient. By step 3.1, the coefficient of $s_\nu$ in $s_\lambda s_\mu$ is the number of admissible tableaux $T$ with $\lambda+\operatorname{wt}(T)=\nu$. The Littlewood--Richardson theorem [F4] says that this same Schur coefficient is $c^\nu_{\lambda\mu}$, the number of LR tableaux of shape $\nu/\lambda$ and content $\mu$. Thus the two counts agree. [F4, step 3.1, algebra]

5.1 Tensor multiplicities. Combining steps 3.1 and 4.1, the coefficient of $s_\nu$ in $s_\lambda s_\mu$ is $c^\nu_{\lambda\mu}$ for every partition $\nu$ with $\ell(\nu)\le r$. Since $\operatorname{ch}(S_\lambda(V)\otimes S_\mu(V))=s_\lambda s_\mu$ and this tensor product is completely reducible with linearly independent Schur characters [F3], the multiplicity of $S_\nu(V)$ in $S_\lambda(V)\otimes S_\mu(V)$ is the coefficient of $s_\nu$, namely $c^\nu_{\lambda\mu}$; the terms with $\ell(\nu)>r$ do not occur because $S_\nu(V)=0$ there. [F1, F3, step 3.1, step 4.1, algebra] ∎

## Remarks

**Source note.** The admissible-tableau/LR-tableau count identity in step 4.1 is imported from the complete Littlewood--Robinson proof in Macdonald §I.9; the exact equation locator remains in the source metadata. Stembridge, printed p. 3, records the comparison as an exercise. The finite checks in the Step 3b report are corroboration only; no explicit bijection is claimed or used.
