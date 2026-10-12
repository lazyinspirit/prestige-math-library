---
id: def-arakawa-suzuki-casimir-operators-on-tensor-functors
kind: definition
title: "Arakawa-Suzuki Casimir operators on tensor functors"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-degenerate-affine-hecke-algebra, def-classical-complex-matrix-lie-algebras,
       def-universal-enveloping-algebra, def-representation-of-a-lie-algebra,
       def-tensor-product-of-modules-by-generators-and-relations,
       thm-associativity-of-balanced-tensor-products,
       thm-tensor-product-basis-from-bases,
       def-casimir-operator-relative-to-an-invariant-form,
       lem-the-casimir-operator-is-basis-independent-and-intertwining,
       prop-trace-forms-are-symmetric-and-invariant,
       lem-the-casimir-element-is-independent-of-dual-bases]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tomoyuki Arakawa and Takeshi Suzuki, Lie algebras and degenerate affine Hecke algebras of type A, J. Algebra 209 (1998) 288-304 (complete 16-page arXiv preprint of the origin paper)"
      url: "https://arxiv.org/pdf/q-alg/9710037"
      locator: "Sections 1.2 and 2.2, printed pp. 6-7: the sl_n Casimir Omega, the operators (2.2.1) s_ij=Omega_ij+1/n and (2.2.2) y_i=Omega_0i+sum_{1<=j<i}(Omega_ji+1/n)+(n-1)/2, Lemma 2.2.1 and Theorem 2.2.2 on the resulting H_l-action."
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Introduction, printed pp. 1-2: for Omega=sum_{i,j} e_ij tensor e_ji the action of x_1 as Omega tensor 1^{tensor d-1} and of s_i as the place permutation, with the resulting right H_d-action on M tensor V^{tensor d} commuting with gl_n."
verification:
  precheck: pass
---

## Definition

Work over $\mathbb C$ ([[def-classical-complex-matrix-lie-algebras]],
[[def-algebra-over-a-commutative-ring]]). Fix $N\ge1$, let
$\mathfrak g=\mathfrak{gl}_N(\mathbb C)$ with its matrix units $E_{ij}$ and the
trace form $B(X,Y)=\operatorname{tr}(XY)$, which is symmetric, nondegenerate and
invariant ([[prop-trace-forms-are-symmetric-and-invariant]]), and let
$$z:=\sum_{i=1}^NE_{ii}\in\mathfrak g$$
be the central element (the identity matrix). The dual basis of $(E_{ij})$
under $B$ is $(E_{ji})$, so the Casimir element of
[[def-casimir-operator-relative-to-an-invariant-form]] is
$$\Omega=\sum_{i,j=1}^NE_{ij}\otimes E_{ji}\in U(\mathfrak g)\otimes U(\mathfrak g),$$
and its operator on every $\mathfrak g$-module is the image under the
representation, commuting with the $\mathfrak g$-action
([[lem-the-casimir-operator-is-basis-independent-and-intertwining]],
[[lem-the-casimir-element-is-independent-of-dual-bases]]).

Let $M$ be a $\mathfrak g$-module and $V=\mathbb C^N$ the natural module
([[def-representation-of-a-lie-algebra]]). On the tensor product
$M\otimes V^{\otimes d}$ ([[def-tensor-product-of-modules-by-generators-and-relations]],
[[thm-associativity-of-balanced-tensor-products]]) label the factors
$0,1,\dots,d$, with factor $0$ equal to $M$. For $0\le a\ne b\le d$ let
$\Omega_{ab}$ denote the operator obtained by applying $\Omega$ in the two
labelled factors, and for distinct $0\le a,b\le d$ let $P_{ab}$ denote the
operator that interchanges the two labelled factors (the flip of
$V\otimes V$ on two $V$-factors). Define, for $1\le j\le d$ and
$1\le i\le d-1$,
$$x_j:=\Omega_{0j}+\sum_{k<j}P_{kj},\qquad s_i:=P_{i,i+1}.$$
Finally put $\Omega^{\mathrm{sl}}:=\Omega-\tfrac1Nz\otimes z$ and define the
Arakawa-Suzuki normalized operators
$$y_j:=x_j-\tfrac1Nz_M+\tfrac{N-1}{2},$$
where $z_M$ denotes the endomorphism of $M\otimes V^{\otimes d}$ given by the
action of $z$ on the factor $M$ (so $z_M$ acts as the representation of the
central element $z$ of $\mathfrak g$).

The verification below records the properties of these operators used on this
page: $\Omega$ acts on $V\otimes V$ as the flip; the operators $x_j$ and
$s_i$ are natural in $M$ and commute with the $\mathfrak g$-action; the
recursion $x_{j+1}=s_jx_js_j+s_j$ holds; $\Omega^{\mathrm{sl}}$ is the Casimir
of $\mathfrak{sl}_N$ relative to the restricted trace form; and the operators
$y_j$ are exactly the source operators of [AS, (2.2.2)]. For $d=0$ the family
$(x_j)$ is empty; for the trivial module $M=\mathbb C$ one has $\Omega_{0j}=0$,
so $x_j=\sum_{k<j}P_{kj}$ and $x_1=0$.

## Facts & Assumptions

**Given:** $N\ge1$, $\mathfrak g=\mathfrak{gl}_N(\mathbb C)$ with matrix units $E_{ij}$ and trace form $B$, the central element $z=\sum_iE_{ii}$, a $\mathfrak g$-module $M$, the natural module $V=\mathbb C^N$, and $d\ge0$.

[F1] Matrix units multiply by $E_{ij}E_{kl}=\delta_{jk}E_{il}$, $B(E_{ij},E_{kl})=\delta_{il}\delta_{jk}$, and $B$ is symmetric and invariant; $z$ is central, so its action $z_M$ on any module is an endomorphism commuting with the action ([[def-classical-complex-matrix-lie-algebras]], [[prop-trace-forms-are-symmetric-and-invariant]]).

[F2] The Casimir element $\Omega=\sum_{ij}E_{ij}\otimes E_{ji}$ is independent of dual bases and central in $U(\mathfrak g)$, so its action on any module is a $\mathfrak g$-intertwiner; module actions extend uniquely to $U(\mathfrak g)$ ([[def-casimir-operator-relative-to-an-invariant-form]], [[lem-the-casimir-operator-is-basis-independent-and-intertwining]], [[lem-the-casimir-element-is-independent-of-dual-bases]], [[def-universal-enveloping-algebra]]).

[F3] Tensor products of modules are modules with the factorwise action, associative up to canonical isomorphism, and pure-tensor bases multiply to tensor bases ([[def-representation-of-a-lie-algebra]], [[def-tensor-product-of-modules-by-generators-and-relations]], [[thm-associativity-of-balanced-tensor-products]], [[thm-tensor-product-basis-from-bases]]).

[F4] The degenerate affine Hecke algebra $H_d$ is presented by $x_1,\dots,x_d,s_1,\dots,s_{d-1}$ with the Coxeter relations and the cross relations $s_ix_{i+1}=x_is_i+1$, $x_{i+1}s_i=s_ix_i+1$; the recursion $x_{j+1}=s_jx_js_j+s_j$ holds in $H_d$ ([[def-degenerate-affine-hecke-algebra]]).

[F5] The source operators: [AS, (2.2.1)-(2.2.2)] define, on $X\otimes V^{\otimes\ell}$ for the $\mathfrak{sl}_N$ Casimir, the transposition operators $s_{ij}=\Omega_{ij}+1/N$ and the generators $y_i=\Omega_{0i}+\sum_{1\le j<i}(\Omega_{ji}+1/N)+(N-1)/2$.



## Proof

**Proof technique:** direct.

**Given:** The data of [F1]-[F5] and the operators of the Definition.

1.1 $\Omega$ is the flip on $V\otimes V$. On the tensor basis, $\Omega(v_a\otimes v_b)=\sum_{i,j}(E_{ij}v_a)\otimes(E_{ji}v_b)=\sum_{i,j}\delta_{ja}v_i\otimes\delta_{ib}v_j=v_b\otimes v_a=P_{01}(v_a\otimes v_b)$ by [F1]. Consequently $\Omega_{ab}=P_{ab}$ whenever the two labelled factors $a,b$ are both natural factors; in particular $\Omega_{j,j+1}=s_j$ on the $V$-factors. [F1, F3, algebra]

1.2 Naturality and commutation with $\mathfrak g$. For a $\mathfrak g$-module map $f\colon M\to M'$, the map $f\otimes1^{\otimes d}$ intertwines $x_j$ and $s_i$: it plainly intertwines the place permutations $P_{ab}$, and it intertwines $\Omega_{0j}$ because the Casimir operator on a tensor product of modules is an intertwiner by [F2]. For the same reason each $x_j$ and $s_i$ commutes with the $\mathfrak g$-action on $M\otimes V^{\otimes d}$, the action on the $V$-factors being the natural one. [F2, F3, algebra]

1.3 The $\mathfrak{sl}_N$ Casimir. The trace form restricts to a nondegenerate form on $\mathfrak{sl}_N$: $\mathfrak{sl}_N=\{X\in\mathfrak g:B(X,z)=0\}$ because $B(X,z)=\operatorname{tr}(X)$ and $B(z,z)=N\ne0$. Hence $\Omega^{\mathrm{sl}}=\Omega-\frac1Nz\otimes z$ is the inverse tensor of $B|_{\mathfrak{sl}_N}$: for $X\in\mathfrak{sl}_N$, contracting the second factor of $\Omega$ with $X$ gives $\sum_{ij}B(X,E_{ji})E_{ij}=X$, while contracting the second factor of $z\otimes z$ with $X$ gives $B(X,z)z=\operatorname{tr}(X)z=0$; so contraction with $\Omega^{\mathrm{sl}}$ also returns $X$, and by [F2] the dual tensor is unique. Thus $\Omega^{\mathrm{sl}}$ is the $\mathfrak{sl}_N$-Casimir for the restricted trace form. [F1, F2, algebra]

2.1 The recursion. Since $s_j=P_{j,j+1}$ and $P_{ab}$ are involutions with $P_{ab}\Omega_{ab}P_{ab}=\Omega_{ab}$ and conjugation by $P_{j,j+1}$ replaces the label $j$ by $j+1$ in every operator supported on labels $\{0,1,\dots,j\}$, one has $s_j\Omega_{0j}s_j=\Omega_{0,j+1}$, $s_jP_{kj}s_j=P_{k,j+1}$ for $k<j$, and $s_js_j=1$. Hence $s_jx_js_j+s_j=\Omega_{0,j+1}+\sum_{k<j}P_{k,j+1}+P_{j,j+1}=x_{j+1}$, using $x_{j+1}=\Omega_{0,j+1}+\sum_{k<j+1}P_{k,j+1}$ and $P_{j,j+1}=s_j$. Thus the operators satisfy the recursion of the Hecke algebra [F4]; in particular they define the same formal relations as the generators $x_j,s_i$ of $H_d$. [F4, step 1.1, algebra]

2.2 The source dictionary. Let $\Omega$ now denote the $\mathfrak{sl}_N$-Casimir in the formula (2.2.1) of the source [F5], so that on two natural factors $\Omega_{ij}=P_{ij}-1/N$ by steps 1.1 and 1.3, i.e. $P_{ij}=\Omega_{ij}+1/N$, which is exactly [AS, (2.2.1)]. On $M\otimes V^{\otimes d}$ the library $\mathfrak{gl}_N$-Casimir satisfies $\Omega^{\mathfrak{gl}_N}_{0j}=\Omega^{\mathrm{sl}}_{0j}+z_M/N$ (the extra term $\frac1Nz\otimes z$ acts on factor $0$ as $z_M/N$ and on factor $j$ as the identity on $V$), while $\Omega^{\mathfrak{gl}_N}_{kj}=\Omega^{\mathrm{sl}}_{kj}+1/N$ for two natural factors; therefore $y_j=x_j-\tfrac1Nz_M+\tfrac{N-1}{2}=\Omega^{\mathrm{sl}}_{0j}+\sum_{k<j}(\Omega^{\mathrm{sl}}_{kj}+\tfrac1N)+\tfrac{N-1}{2}$, which is precisely [AS, (2.2.2)]. [F5, step 1.1, step 1.3, algebra]

3.1 Special cases. For $d=0$ there are no labels $j\ge1$, so the family $(x_j)$ and $(s_i)$ is empty and the Definition records only the module $M$; the recursion and the dictionary are vacuous. For the trivial module $M=\mathbb C$ the action of $\mathfrak g$ is zero, so $\Omega_{0j}=0$ and $z_M=0$; hence $x_j=\sum_{k<j}P_{kj}$, with the empty sum $x_1=0$. [F1, F3, given] ∎

## Remarks

- The operators $x_j$ are the universal (trace-form) Casimir operators; the operators $y_j$ differ from them by the scalar $z_M/N-(N-1)/2$ recorded in the Definition, and this dictionary is the one used whenever the source normalization [AS] is compared with the tensor-space computations of this page.

- The sign of the shift in the recursion is fixed by the cross relation $s_ix_{i+1}=x_is_i+1$ of [[def-degenerate-affine-hecke-algebra]]: the computation of step 2.1 gives $x_{j+1}=s_jx_js_j+s_j$, whose right-hand side contains $+s_j$, not $-s_j$.
