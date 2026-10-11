---
id: ex-kronecker-products-for-s3
kind: example
title: The complete internal product table for S_3
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [prop-kronecker-coefficient-is-a-three-character-inner-product,
       cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric,
       thm-frobenius-characteristic-sends-specht-characters-to-schur-functions,
       def-frobenius-characteristic-map,
       lem-complete-homogeneous-expansion-in-power-sums,
       prop-power-sums-form-a-rational-not-integral-stable-basis,
       thm-youngs-rule-for-permutation-modules,
       lem-characteristic-of-a-young-permutation-character-is-complete,
       thm-characters-of-direct-sums-tensor-products-and-duals,
       def-young-subgroup-tabloid-and-permutation-module,
       thm-jacobi-trudi-and-dual-jacobi-trudi-identities,
       def-sign-representation-and-restriction-of-a-representation,
       cor-sign-from-disjoint-cycle-structure,
       thm-centralizer-cardinality-from-cycle-type,
       cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types,
       def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Igor Pak and Greta Panova, Bounds on the Kronecker coefficients, arXiv:1406.2988v2 (2014)"
      url: "https://arxiv.org/pdf/1406.2988"
      locator: "§2.3, printed pp. 3-4: the triple character formula for $g(\\lambda,\\mu,\\nu)$ used for the explicit $S_3$ table"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I, §7, printed pp. 116-117: the internal product table in low degree and Example I.7.20"
---

## Example

For $S_3$ the three irreducible complex representations are $S^{(3)}$ (the
trivial representation, dimension $1$), $S^{(2,1)}$ (the standard
representation, dimension $2$) and $S^{(1,1,1)}$ (the sign representation,
dimension $1$). Their characters on the three conjugacy classes, indexed by
cycle type in the order $(1^3),(2,1),(3)$, are

| representation | $(1^3)$ | $(2,1)$ | $(3)$ |
|---|---|---|---|
| $S^{(3)}$ | $1$ | $1$ | $1$ |
| $S^{(2,1)}$ | $2$ | $0$ | $-1$ |
| $S^{(1,1,1)}$ | $1$ | $-1$ | $1$ |

The complete internal (Kronecker) product table is therefore
$$S^{(3)}\otimes X\cong X\quad\text{for every irreducible }X,$$
$$S^{(2,1)}\otimes S^{(2,1)}\cong S^{(3)}\oplus S^{(2,1)}\oplus S^{(1,1,1)},\qquad S^{(2,1)}\otimes S^{(1,1,1)}\cong S^{(2,1)},\qquad S^{(1,1,1)}\otimes S^{(1,1,1)}\cong S^{(3)}.$$
Equivalently, all Kronecker coefficients $g(\lambda,\mu,\nu)$ with
$\lambda,\mu,\nu\vdash3$ are $0$ or $1$, and the table is invariant under all
permutations of the three arguments. The character table is recomputed here from
the Frobenius dictionary rather than imported from an examples page.

## Facts & Assumptions

**Given:** The partitions of $3$: $(3)$, $(2,1)$, $(1^3)$ ([[def-partition-young-diagram-and-conjugate-partition]]); the class-function inner product $\langle\varphi,\psi\rangle=\frac1{6}\sum_{\sigma\in S_3}\varphi(\sigma)\overline{\psi(\sigma)}$; and the cycle-type data $z_{(1^3)}=6$, $z_{(2,1)}=2$, $z_{(3)}=3$, so the three conjugacy classes have sizes $6/z=1,3,2$ respectively ([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]], [[thm-centralizer-cardinality-from-cycle-type]]).

[F1] $\operatorname{ch}(\chi^\lambda)=s_\lambda$ for every $\lambda\vdash n$, and $\operatorname{ch}(f)=\sum_{\rho\vdash n}f(\rho)p_\rho/z_\rho$ ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]], [[def-frobenius-characteristic-map]]).

[F2] For partitions $\rho$ and $\lambda$ of the same integer, $h_\lambda=\sum_\rho N(\lambda,\rho)p_\rho/z_\rho$ in $\Lambda_{\mathbb Q}$, in particular $h_1=p_1$, $h_2=\tfrac12p_1^2+\tfrac12p_2$ and $h_3=\tfrac16p_1^3+\tfrac12p_1p_2+\tfrac13p_3$ ([[lem-complete-homogeneous-expansion-in-power-sums]]).

[F3] The family $\{p_\rho/z_\rho:\rho\vdash n\}$ is a $\mathbb Q$-basis of $\Lambda_{\mathbb Q}^n$, so coefficients in that basis are unique ([[prop-power-sums-form-a-rational-not-integral-stable-basis]]).

[F4] $g(\lambda,\mu,\nu)=\frac16\sum_{\sigma\in S_3}\chi^\lambda(\sigma)\chi^\mu(\sigma)\chi^\nu(\sigma)$ ([[prop-kronecker-coefficient-is-a-three-character-inner-product]]), and $g$ is symmetric in the three arguments ([[cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric]]).

[F5] The tabloid module $M^\mu$ is the permutation representation on the $\mu$-tabloids ([[def-young-subgroup-tabloid-and-permutation-module]]), and Young's rule gives $M^\mu\cong\bigoplus_{\lambda\vdash3}(S^\lambda)^{\oplus K_{\lambda\mu}}$, so the Young permutation character is $\varphi^\mu=\sum_\lambda K_{\lambda\mu}\chi^\lambda$ by additivity of characters ([[thm-youngs-rule-for-permutation-modules]], [[thm-characters-of-direct-sums-tensor-products-and-duals]]); in particular $\varphi^{(3)}=\chi^{(3)}$ and $\varphi^{(2,1)}=\chi^{(3)}+\chi^{(2,1)}$ because $K_{(3),(2,1)}=K_{(2,1),(2,1)}=1$.

[F6] $\operatorname{ch}(\varphi^\mu)=h_\mu$ for every $\mu\vdash3$ ([[lem-characteristic-of-a-young-permutation-character-is-complete]]).

[F7] $s_\lambda=\det(h_{\lambda_i-i+j})$ for every partition $\lambda$, so $s_{(3)}=h_3$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]).

[F8] The sign representation is one-dimensional with $\operatorname{sgn}(\sigma)=(-1)^{3-c(\sigma)}$, where $c(\sigma)$ is the number of cycles of $\sigma$ counted with fixed points; hence $\chi^{(1,1,1)}$ has values $1,-1,1$ on $(1^3),(2,1),(3)$ ([[def-sign-representation-and-restriction-of-a-representation]], [[cor-sign-from-disjoint-cycle-structure]]).

## Verification

**Proof technique:** direct.

1.1 Character of $S^{(3)}$: by [F7] $s_{(3)}=h_3$, and [F2] expands $h_3=\tfrac16p_1^3+\tfrac12p_1p_2+\tfrac13p_3$ in the basis $\{p_\rho/z_\rho\}$. By [F1] the coefficient of $p_\rho/z_\rho$ in $s_{(3)}=\operatorname{ch}(\chi^{(3)})$ is $\chi^{(3)}(\rho)$, so uniqueness [F3] gives the values $\chi^{(3)}(1^3)=1$, $\chi^{(3)}(2,1)=1$, $\chi^{(3)}(3)=1$. [F1, F2, F3, F7]

1.2 Character of $S^{(1,1,1)}$: by [F8] the sign character has values $1,-1,1$ on $(1^3),(2,1),(3)$, so its characteristic is $\operatorname{ch}(\chi^{(1,1,1)})=\tfrac16p_1^3-\tfrac12p_1p_2+\tfrac13p_3$ by [F1]; this is consistent with $\operatorname{ch}(\chi^{(1,1,1)})=s_{(1,1,1)}=e_3$ from [F1]. [F1, F8]

1.3 Character of $S^{(2,1)}$: the Young permutation character of the tabloid module $M^{(2,1)}$ has characteristic $\operatorname{ch}(\varphi^{(2,1)})=h_2h_1$ by [F6], and $\varphi^{(2,1)}=\chi^{(3)}+\chi^{(2,1)}$ by Young's rule [F5]. Applying [F1] therefore gives $\operatorname{ch}(\chi^{(2,1)})=h_2h_1-h_3$; by the expansions [F2], $h_2h_1-h_3=\bigl(\tfrac12p_1^2+\tfrac12p_2\bigr)p_1-\bigl(\tfrac16p_1^3+\tfrac12p_1p_2+\tfrac13p_3\bigr)=\tfrac13p_1^3-\tfrac13p_3$. By [F1] and uniqueness [F3], the values are $\chi^{(2,1)}(1^3)=6\cdot\tfrac13=2$, $\chi^{(2,1)}(2,1)=0$ and $\chi^{(2,1)}(3)=3\cdot(-\tfrac13)=-1$. [F1, F2, F3, F5, F6, algebra]

2.1 Triple products. Write $(a_\lambda,b_\lambda,c_\lambda)$ for the values of $\chi^\lambda$ on $(1^3),(2,1),(3)$. The class sizes are $1,3,2$, so [F4] gives $g(\lambda,\mu,\nu)=\frac16\bigl(a_\lambda a_\mu a_\nu+3b_\lambda b_\mu b_\nu+2c_\lambda c_\mu c_\nu\bigr)$. From steps 1.1-1.3, $(a,b,c)$ equals $(1,1,1)$ for $\lambda=(3)$, $(2,0,-1)$ for $\lambda=(2,1)$ and $(1,-1,1)$ for $\lambda=(1^3)$. Substituting these into the formula, the nonzero values are $g((2,1),(2,1),(2,1))=\frac16(8+0-2)=1$, $g((2,1),(2,1),(3))=\frac16(4+0+2)=1$, $g((2,1),(2,1),(1^3))=\frac16(4+0+2)=1$, $g((3),(3),(3))=\frac16(1+3+2)=1$, $g((3),(3),(1^3))=\frac16(1+3+2)=1$, $g((1^3),(1^3),(1^3))=\frac16(1+3+2)=1$ and $g((1^3),(1^3),(3))=\frac16(1+3+2)=1$; the remaining values vanish, for instance $g((2,1),(1^3),(1^3))=\frac16(2+0-2)=0$, $g((2,1),(1^3),(3))=\frac16(2+0-2)=0$ and $g((3),(3),(2,1))=\frac16(2+0-2)=0$, and every other triple is a permutation of one of these by [F4]. [F4, step 1.1, step 1.2, step 1.3, algebra]

3.1 Since the multiplicity of $S^\nu$ in $S^\lambda\otimes S^\mu$ is $g(\lambda,\mu,\nu)$, step 2.1 gives exactly the displayed table: $S^{(2,1)}\otimes S^{(2,1)}\cong S^{(3)}\oplus S^{(2,1)}\oplus S^{(1,1,1)}$, $S^{(2,1)}\otimes S^{(1,1,1)}\cong S^{(2,1)}$, $S^{(1,1,1)}\otimes S^{(1,1,1)}\cong S^{(3)}$ and $S^{(3)}\otimes X\cong X$ for every irreducible $X$. All coefficients are $0$ or $1$, and the table equals each of its permutations by [F4]. [F4, step 2.1] ∎

## Remarks

- The example is the smallest complete internal product table; it also exhibits the multiplicities of the tensor square of the standard representation, which decomposes as the direct sum of all three irreducibles.

- The three characters were recomputed from the Frobenius dictionary rather than cited from a character table on another page, and the count of elements in each class used $1,3,2=6/z_\rho$.
