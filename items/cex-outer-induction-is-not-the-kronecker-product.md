---
id: cex-outer-induction-is-not-the-kronecker-product
kind: counterexample
title: "Outer induction is not the Kronecker product"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-outer-induction-product-for-symmetric-group-characters
  - lem-characteristic-of-a-young-permutation-character-is-complete
  - thm-frobenius-formula-for-induced-characters
  - def-tensor-product-of-complex-representations
  - thm-characters-of-direct-sums-tensor-products-and-duals
  - def-frobenius-characteristic-map
  - thm-frobenius-characteristic-sends-specht-characters-to-schur-functions
  - lem-frobenius-characteristic-preserves-outer-products
  - thm-jacobi-trudi-and-dual-jacobi-trudi-identities
  - prop-omega-conjugates-schur-functions
  - lem-complete-homogeneous-expansion-in-power-sums
  - thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
  - cor-distinct-specht-modules-are-inequivalent
  - thm-complex-representations-are-determined-by-their-characters
  - def-column-antisymmetrizer-polytabloid-and-specht-module
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "the outer product, printed pp. 112–114; the internal product, printed pp. 115–116"
---

## Statement refuted

The claim refuted is: *the outer induction product of two symmetric-group
characters is the same operation as the Kronecker (tensor) product of two
representations of one symmetric group*, so that for $f,g\in R(S_n)$ the outer
product $f\circ g\in R(S_{2n})$ coincides with the tensor product $f\cdot g\in
R(S_n)$. Take $n=1$ and let $\mathbf 1_1$ be the trivial character of $S_1$.
The outer product $\mathbf 1_1\circ\mathbf 1_1=
\operatorname{Ind}_{S_1\times S_1}^{S_2}(\mathbf 1_1\boxtimes\mathbf 1_1)$ is
the permutation character of $S_2$ on the two cosets of $S_1\times S_1$, with
values $(2,0)$ on the cycle types $(1^2),(2)$ and decomposition
$\chi^{(2)}+\chi^{(1,1)}$; its characteristic is
$p_1^2=s_{(2)}+s_{(1,1)}$. By contrast, the tensor product of the two one-dimensional trivial
representations of $S_1$ has dimension $1\cdot1=1$, lies in degree $1$ and remains a
representation of $S_1$. Hence the outer induced product and the same-rank
tensor product are different operations: an outer coefficient such as
$c^{(2)}_{(1),(1)}=1$ records a multiplicity for representations of
$S_1\times S_1$ inducing to $S_2$, not a tensor-product multiplicity for two
representations of one symmetric group.

## Facts & Assumptions

**Given:** The trivial characters $\mathbf 1_1$ of $S_1$ and $\mathbf 1_2$ of $S_2$, the transposition $\tau\in S_2$, and the subgroup $H:=S_1\times S_1=\{1\}\le S_2$.

[F1] The outer product is $f\circ g=\sum_{i,j}a_ib_j\operatorname{Ind}_{S_m\times S_n}^{S_{m+n}}(\chi_i\boxtimes\psi_j)$ for $f=\sum_ia_i\chi_i\in R(S_m)$, $g=\sum_jb_j\psi_j\in R(S_n)$, with $(\chi_i\boxtimes\psi_j)(\sigma,\tau)=\chi_i(\sigma)\psi_j(\tau)$; for $m=n=1$ the subgroup $S_1\times S_1$ is the trivial subgroup of $S_2$ ([[def-outer-induction-product-for-symmetric-group-characters]]).

[F2] Frobenius' formula: $\operatorname{Ind}_H^G\theta(g)=\frac1{|H|}\sum_{x\in G:\,x^{-1}gx\in H}\theta(x^{-1}gx)$ for a character $\theta$ of a subgroup $H\le G$ ([[thm-frobenius-formula-for-induced-characters]]).

[F3] $\operatorname{ch}(f)=\sum_{\rho\vdash n}f(\rho)p_\rho/z_\rho$ is linear, and $\operatorname{ch}(f\circ g)=\operatorname{ch}(f)\operatorname{ch}(g)$ for $f\in R(S_m)$, $g\in R(S_n)$ ([[def-frobenius-characteristic-map]], [[lem-frobenius-characteristic-preserves-outer-products]]).

[F4] $\operatorname{ch}(\chi^\lambda)=s_\lambda$ for the Specht characters of $S_n$, and $\chi^{(2)},\chi^{(1,1)}$ are the two pairwise inequivalent irreducible characters of $S_2$ ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]], [[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]], [[cor-distinct-specht-modules-are-inequivalent]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F5] Jacobi–Trudi and dual Jacobi–Trudi: $s_{(2)}=\det(h_2)=h_2$ and $s_{(1,1)}=\det(e_2)=e_2$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]).

[F6] The involution $\omega$ satisfies $\omega(h_2)=e_2$ and $\omega(p_r)=(-1)^{r-1}p_r$ ([[prop-omega-conjugates-schur-functions]]).

[F7] $h_2=\frac{p_1^2+p_2}{2}$ in $\Lambda_{\mathbb Q}^2$, since $z_{(1,1)}=2=z_{(2)}$ ([[lem-complete-homogeneous-expansion-in-power-sums]]).

[F8] The tensor product of two finite-dimensional complex representations of a group $G$ is a representation of $G$ on the same group, with $\chi_{V\otimes W}(g)=\chi_V(g)\chi_W(g)$ and $\dim(V\otimes W)=(\dim V)(\dim W)$ ([[def-tensor-product-of-complex-representations]], [[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[F9] Finite-dimensional complex representations of a finite group are determined up to isomorphism by their characters ([[thm-complex-representations-are-determined-by-their-characters]]).

## Counterexample

**Proof technique:** direct.

1.1 The subgroup $H=S_1\times S_1$ is the trivial subgroup of $S_2$, and $\mathbf 1_1\boxtimes\mathbf 1_1$ is the trivial character of $H$. By [F2], $\operatorname{Ind}_H^{S_2}(\mathbf 1_1\boxtimes\mathbf 1_1)(1)=\frac1{1}\sum_{x\in S_2}1=2$, while for the transposition $\tau$ the condition $x^{-1}\tau x\in H=\{1\}$ fails for every $x$, so $\operatorname{Ind}(\tau)=0$. [F1, F2]

1.2 Since $\mathbf 1_1$ is the trivial character of $S_1$, whose only cycle type is $(1)$ with $z_{(1)}=1$, [F3] gives $\operatorname{ch}(\mathbf 1_1)=p_1$; hence $\operatorname{ch}(\mathbf 1_1\circ\mathbf 1_1)=\operatorname{ch}(\mathbf 1_1)^2=p_1^2$. [F3, given]

1.3 By [F7], $h_2=\frac{p_1^2+p_2}{2}$, so $e_2=\omega(h_2)=\frac{p_1^2-p_2}{2}$ by [F6], and therefore $h_2+e_2=p_1^2$. [F6, F7, algebra]

1.4 The tensor product of two $1$-dimensional complex representations of $S_1$ is a $1$-dimensional complex representation of $S_1$ with character the product of the two characters, so it lies in $\mathrm{cf}(S_1)$ and has degree $1$; the value of the product of two trivial characters at the identity is $1$. [F8, given]

2.1 By [F5] and step 1.3 applied to the identities $s_{(2)}=h_2,\ s_{(1,1)}=e_2$, one has $s_{(2)}+s_{(1,1)}=h_2+e_2=p_1^2$. [F5, step 1.3, algebra]

2.2 By [F4] and [F3], $\operatorname{ch}(\chi^{(2)})=s_{(2)}=h_2=\frac{p_1^2+p_2}{2}$ and $\operatorname{ch}(\chi^{(1,1)})=s_{(1,1)}=e_2=\frac{p_1^2-p_2}{2}$; reading the coefficients of $p_\rho/z_\rho$ in these expansions with $z_{(1,1)}=z_{(2)}=2$ gives $\chi^{(2)}=(1,1)$ and $\chi^{(1,1)}=(1,-1)$ on the cycle types $(1^2),(2)$. [F3, F4, step 1.3]

3.1 Steps 1.2 and 2.1 give $\operatorname{ch}(\mathbf 1_1\circ\mathbf 1_1)=p_1^2=s_{(2)}+s_{(1,1)}$ in $\Lambda^2$. [step 1.2, step 2.1]

4.1 Step 3.1 and step 2.2 show that the character of the induced module $\mathbf 1_1\circ\mathbf 1_1$ equals $\chi^{(2)}+\chi^{(1,1)}$, namely $(2,0)$ as computed in step 1.1; by [F9] the induced module is isomorphic to $S^{(2)}\oplus S^{(1,1)}$, so the outer coefficient $c^{(2)}_{(1),(1)}=1$ is the multiplicity of $S^{(2)}$ in a module induced from $S_1\times S_1$ to $S_2$. [F4, F9, step 1.1, step 3.1, step 2.2]

5.1 The two sides are therefore objects attached to different symmetric groups: the outer product $\mathbf 1_1\circ\mathbf 1_1$ is an element of $R(S_2)$, namely the degree-$2$ character $(2,0)$ with $\operatorname{ch}(\mathbf 1_1\circ\mathbf 1_1)=p_1^2$, while the tensor product of the two one-dimensional trivial representations of $S_1$ is an element of $R(S_1)$ of degree $1$ with value $1$ at the identity [step 1.4]; a class function on $S_2$ with value $2$ at $1$ and a class function on the one-element group $S_1$ cannot be the same function, and an outer product coefficient records a multiplicity for representations of $S_m\times S_n$ inducing to $S_{m+n}$, not a tensor-product multiplicity inside one $R(S_n)$. This refutes the identified claim. [step 1.4, step 4.1] ∎
