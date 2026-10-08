---
id: thm-littlewood-richardson-schur-product-expansion
kind: theorem
title: The Littlewood–Richardson rule for products of Schur functions
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 0
deps:
  - def-littlewood-richardson-tableau-and-coefficient
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-semistandard-tableau-and-kostka-number
  - def-skew-schur-function-by-hall-adjointness
  - thm-skew-jacobi-trudi-and-tableau-expansion
  - def-hall-inner-product-on-symmetric-functions
  - def-monomial-symmetric-polynomials
  - thm-monomial-symmetric-functions-form-the-integral-stable-basis
  - thm-schur-functions-form-an-orthonormal-integral-basis
  - def-power-sum-and-complete-homogeneous-symmetric-polynomials
  - def-stable-schur-function-by-bialternants
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - thm-jacobi-trudi-and-dual-jacobi-trudi-identities
  - def-stable-graded-ring-of-symmetric-functions
  - def-partition-young-diagram-and-conjugate-partition
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "M. A. A. van Leeuwen, The Littlewood-Richardson rule, and related combinatorics, arXiv:math/9908099"
      url: "https://arxiv.org/pdf/math/9908099"
      locator: "§3.1 Definition 3.1.1 and Proposition 3.1.2, printed p. 15 (word raising/lowering); §3.2 Proposition 3.2.1 with complete proof, printed p. 17 (these operations preserve semistandard skew tableaux). The local proof below uses signatures and signed determinant cancellation, without rectification."
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §9"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §3 (3.4), printed p. 41 (Jacobi–Trudi); §9, printed pp. 142–148 (the LR rule). The determinant identity is supplied by the local Jacobi–Trudi theorem."
---

## Statement

Let $c^\lambda_{\mu\nu}$ be the Littlewood–Richardson coefficient of the inherited definition, the number of Littlewood–Richardson tableaux of shape $\lambda/\mu$ and content $\nu$ ([[def-littlewood-richardson-tableau-and-coefficient]], [[def-skew-diagram-and-semistandard-skew-tableau]], [[def-semistandard-tableau-and-kostka-number]], [[def-partition-young-diagram-and-conjugate-partition]]). Then for all partitions $\mu,\nu$,
$$s_\mu s_\nu=\sum_{\lambda\,\supseteq\,\mu,\ |\lambda|=|\mu|+|\nu|}c^\lambda_{\mu\nu}s_\lambda\qquad\text{in }\Lambda,$$
where the sum is finite and zero terms may be omitted; equivalently, for every $\lambda\supseteq\mu$,
$$s_{\lambda/\mu}=\sum_{\nu}c^\lambda_{\mu\nu}s_\nu.$$
No choice principle is used.

## Facts & Assumptions

**Given:** Partitions, the stable ring $\Lambda$, the Hall form, and the top-to-bottom, right-to-left tableau reading convention.

[F1] Partitions of each size form a finite set; $\varnothing$ is the unique partition of zero. Zero padding is used when specifying determinant sizes ([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] The coefficient $c^\lambda_{\mu\nu}$ counts semistandard skew tableaux of shape $\lambda/\mu$ and content $\nu$ whose reading word is lattice. It vanishes outside containment and size compatibility; the empty tableau gives $c^\mu_{\mu,\varnothing}=1$ ([[def-littlewood-richardson-tableau-and-coefficient]]).

[F3] Semistandard skew tableaux have positive entries, weak rows and strict columns, and their monomials record their entry counts ([[def-skew-diagram-and-semistandard-skew-tableau]]).

[F4] The skew tableau expansion is $s_{\lambda/\mu}=\sum_Tx^{\operatorname{wt}(T)}$ for $\mu\subseteq\lambda$; noncontainment gives zero ([[thm-skew-jacobi-trudi-and-tableau-expansion]]).

[F5] The graded Hall form is bilinear and satisfies $\langle h_\pi,m_\rho\rangle_H=\delta_{\pi\rho}$ ([[def-hall-inner-product-on-symmetric-functions]]).

[F6] The Schur functions form an orthonormal integral basis in each degree. Consequently the Hall form is symmetric: in Schur coordinates it is $\langle\sum a_\eta s_\eta,\sum b_\eta s_\eta\rangle_H=\sum a_\eta b_\eta$ ([[thm-schur-functions-form-an-orthonormal-integral-basis]]).

[F7] For every partition $\nu$ and $r\ge\ell(\nu)$, $s_\nu=\det(h_{\nu_i-i+j})_{1\le i,j\le r}$, with $h_0=1$, $h_k=0$ for $k<0$, and empty determinant $1$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]). Products of stable complete functions have their usual meaning ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]], [[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F8] Skew adjointness is $\langle s_{\lambda/\mu},s_\nu\rangle_H=\langle s_\lambda,s_\mu s_\nu\rangle_H$ ([[def-skew-schur-function-by-hall-adjointness]]).

[F9] The stable ring is a graded algebraic direct sum; $s_\eta$ has degree $|\eta|$ and $s_\varnothing=1$ ([[def-stable-graded-ring-of-symmetric-functions]], [[def-stable-schur-function-by-bialternants]]).

[F10] The stable monomial functions are an integral basis, with each $m_\pi$ the sum of distinct monomials in its exponent orbit ([[def-monomial-symmetric-polynomials]], [[thm-monomial-symmetric-functions-form-the-integral-stable-basis]]).

## Proof

**Proof technique:** signed tableau cancellation in the Jacobi–Trudi determinant.

1.1 Fix $\lambda\supseteq\mu$ and put $d=|\lambda|-|\mu|$. If $d=0$, then $\lambda=\mu$, and [F2]–[F4] give the skew expansion $s_{\lambda/\lambda}=1$ with its unique empty tableau. Suppose henceforth that $d>0$. For a nonnegative tuple $\alpha$ of total $d$, write $h_\alpha=\prod_i h_{\alpha_i}$. The coefficient of $x^\alpha$ in [F4] counts the skew tableaux of content $\alpha$. Symmetry makes this coefficient equal to that of the sorted exponent partition $\pi$; [F10] and Hall duality [F5]–[F6] therefore give $\langle s_{\lambda/\mu},h_\alpha\rangle_H=\#\operatorname{Tab}(\lambda/\mu,\alpha)$. A tuple with a negative entry contributes zero by [F7]. [F1, F2, F3, F4, F5, F6, F7, F10]

1.2 For a fixed $i$, filter a reading word to the letters $i,i+1$ and match each $i+1$ with the last still-unmatched preceding $i$, when available. After deleting matched pairs the unmatched letters are $(i+1)^a i^b$. Define $e_i$ by changing the last unmatched $i+1$ to $i$ when $a>0$, and $f_i$ by changing the first unmatched $i$ to $i+1$ when $b>0$. Matching parentheses shows that these are inverse partial operations: $e_i$ replaces $(a,b)$ by $(a-1,b+1)$ and $f_i$ does the reverse, leaving matched positions unchanged. No $e_i$ is available precisely when every prefix has at least as many $i$'s as $i+1$'s. Thus all $e_i$ are unavailable precisely for lattice words. [F2, construct]

2.1 These operations preserve semistandard skew tableaux. To check this, retain only cells labeled $i,i+1$; they form a skew diagram, since adjoining to $\mu$ all cells with entry at most $j$ gives a partition for each $j$ by the row and column inequalities. Every two-cell column has $i$ above $i+1$. Each maximal rectangle of such columns has reading subword $i^k(i+1)^k$, which is neutral for matching; delete these rectangles successively. The remaining columns have one cell each, read from right to left. On them $e_i$ cannot have an $i+1$ immediately to its left, and $f_i$ cannot have an $i$ immediately to its right, by their definitions. A neighbor deleted in a two-row rectangle cannot cause either violation: the skew shape and inequalities would then force the variable cell itself to have a second cell in its column and to belong to that rectangle. Hence weak rows are preserved also before deletion. The variable cell has no other $i$ or $i+1$ in its column, so changing it by one preserves strict columns; other labels cannot violate an inequality. This proves the required tableau closure, including skew and disconnected shapes. [F3, step 1.2]

2.2 Fix $\nu\vdash d$, pad it to $r=d$, and set $\delta=(r-1,r-2,\ldots,0)$. Expanding the transpose of the Jacobi–Trudi matrix [F7] and applying step 1.1 gives $\langle s_{\lambda/\mu},s_\nu\rangle_H=\sum_{\sigma\in S_r}\operatorname{sgn}(\sigma)\#\operatorname{Tab}(\lambda/\mu,\alpha(\sigma))$, where $\alpha_i(\sigma)=\nu_{\sigma(i)}-\sigma(i)+i$. Thus we count signed pairs $(\sigma,T)$ with $\operatorname{wt}(T)+\delta=(\nu_{\sigma(i)}+r-\sigma(i))_{i=1}^r$; negative content gives no pairs. Each set is finite, and all entries of these tableaux lie in $\{1,\ldots,r\}$. [F1, F3, F6, F7, step 1.1, algebra]

3.1 Cancel pairs for which $T$ is not lattice. Choose the earliest failing prefix; its final letter is $i+1$ and it is the first unmatched $i+1$ for this $i$, with all earlier prefixes lattice. In its $i$-signature $(i+1)^a i^b$ we have $a\ge1$. If $a>b+1$, apply $e_i$ exactly $a-b-1$ times; if $a<b+1$, apply $f_i$ exactly $b+1-a$ times. This changes the signature to $(i+1)^{b+1}i^{a-1}$, keeping its first unmatched $i+1$ and every letter up to that position fixed. The equality $a=b+1$ cannot occur: it would give $\alpha_{i+1}=\alpha_i+1$, hence equality of entries $i,i+1$ in $\alpha+\delta$, although that vector permutes the distinct numbers $\nu_j+r-j$. The new tableau $T'$ exists by steps 1.2 and 2.1 and has content $\alpha'_i=\alpha_{i+1}-1$, $\alpha'_{i+1}=\alpha_i+1$, with other entries unchanged. Replace $\sigma$ by $\sigma'=\sigma\circ(i\ i+1)$; then $\alpha'+\delta$ has exactly the permuted entries required in step 2.2. The first failing prefix and its index $i$ are unchanged, and repeating the operation restores $T$ and $\sigma$. This is a sign-reversing involution on all nonlattice pairs. [step 1.2, step 2.1, step 2.2, construct, algebra]

4.1 The uncancelled tableaux are lattice, so their content $\alpha$ is weakly decreasing. Thus $\alpha+\delta$ is strictly decreasing. The only strictly decreasing permutation of the strictly decreasing vector $\nu+\delta$ is itself, so step 2.2 forces $\sigma=\operatorname{id}$ and $\alpha=\nu$. These surviving pairs have positive sign and are exactly the LR tableaux in [F2]. Therefore $\langle s_{\lambda/\mu},s_\nu\rangle_H=c^\lambda_{\mu\nu}$ for every $\nu\vdash d$. The basis [F6] now gives $s_{\lambda/\mu}=\sum_{\nu\vdash d}c^\lambda_{\mu\nu}s_\nu$. [F2, F6, step 2.2, step 3.1]

5.1 The coefficient of $s_\lambda$ in $s_\mu s_\nu$ is $\langle s_\lambda,s_\mu s_\nu\rangle_H$ by [F6], which is $c^\lambda_{\mu\nu}$ by [F8] and the skew expansion of steps 1.1 and 4.1. Noncontainment gives zero by [F4], and unequal degrees give zero by [F5], [F9]; these agree with the support rule [F2]. There are finitely many partitions of the product degree by [F1], proving the product formula. [F1, F2, F4, F5, F6, F8, F9, step 1.1, step 4.1]

6.1 Conversely, the product formula and [F8] give $\langle s_{\lambda/\mu},s_\nu\rangle_H=c^\lambda_{\mu\nu}$, so [F6] recovers the skew expansion. This proves the stated equivalence. [F6, F8, step 5.1]

7.1 Step 1.1 treats empty skew shapes, including the empty partition. Empty factors are covered by $s_\varnothing=1$ and the general coefficient calculation, while impossible containment, size or tableau conditions give zero by [F2] and step 5.1. For $d=1$ the determinant has size one and the cancellation has no nonlattice pairs. The involution uses the uniquely determined earliest failing prefix and finite signature operations; no representatives, rectifications or choice principle are required. [F1, F2, F9, step 1.1, step 3.1, step 5.1] ∎
