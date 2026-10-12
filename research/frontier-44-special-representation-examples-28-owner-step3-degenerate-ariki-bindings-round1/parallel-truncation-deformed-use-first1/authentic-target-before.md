---
id: lem-the-parabolic-highest-weight-truncation-factors-through-the-cyclotomic-quotient
kind: lemma
title: "The parabolic highest-weight truncation factors through the cyclotomic quotient"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-degenerate-cyclotomic-hecke-algebra,
       thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations,
       def-associated-graded-algebra-of-a-filtered-algebra,
       thm-skryabins-equivalence-for-the-type-a-whittaker-pair,
       def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
       def-the-type-a-finite-w-algebra-and-whittaker-category,
       def-arakawa-suzuki-casimir-operators-on-tensor-functors,
       thm-nilpotent-jordan-string-basis, def-nilpotent-endomorphism,
       def-classical-complex-matrix-lie-algebras]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Lemma 3.4 and Lemma 3.5, printed pp. 14-15: the minimal polynomial of x_1 on the tensor space and the stable injectivity; the ground induced module and its column filtration appear in Sections 3.2-3.4."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Chapter 3, Section 3.3, Lemma 3.3 and Lemma 3.4, printed pp. 28-31: the explicit x_1-action on the deformed tensor space and the minimal-polynomial computation with roots c_j+q_j-n."
verification:
  precheck: pass
---

## Statement

Let $\lambda=(0\le p_1\le\cdots\le p_n)$ be a nonempty pyramid with columns
$q_1\ge\cdots\ge q_l>0$, let $c=(c_1,\dots,c_l)$ be arbitrary complex origins,
and put $a_j=c_j+q_j-n$ for $1\le j\le l$. For $d\ge1$ consider the raw
tensor operator $x_1$ on the truncated tensor space $V_c^{\otimes d}$ of
[[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]] (whose underlying
space is $V^{\otimes d}$ and whose $x_1$ is the operator displayed there).
Then the minimal polynomial of $x_1$ on $V_c^{\otimes d}$ is exactly
$$\prod_{j=1}^l(x-a_j),$$
including repeated roots with their multiplicities. Consequently the action of
$H_d$ on $V_c^{\otimes d}$ factors through the cyclotomic quotient
$H_d(\mathbf a)$ of [[def-degenerate-cyclotomic-hecke-algebra]]. The same
polynomial annihilates the action of the ordinary Casimir operator on
$P_c\otimes V^{\otimes d}$, where $P_c$ is the ground induced module with its
genuine column filtration.

The statement does not assert that every unrelated standard object $N(A)$, or
every parabolic category-$\mathcal O$ object, carries that same tensor action.
For $d=0$ there is no operator $x_1$. The integral-root weight $\Lambda$ and
the arbitrary-root coset bookkeeping are the separate conventions of
[[def-degenerate-cyclotomic-hecke-algebra]].

## Facts & Assumptions

**Given:** The pyramid $\lambda$ with columns $q_1\ge\cdots\ge q_l$, origins $c$, the numbers $a_j=c_j+q_j-n$, and the operator $x_1$ on $V_c^{\otimes d}$.

[F1] On the raw tensor space the operator $x_1$ has the form $x_1=(e+\sum_{j}(c_{\mathrm{col}(j)}+q_{\mathrm{col}(j)}-n)e_{j,j})\otimes1^{\otimes(d-1)}-\sum_{\mathrm{col}(i)<\mathrm{col}(j)}e_{i,j}\otimes1\otimes e_{j,i}\otimes1^{\otimes(d-2)}$; here $e$ acts as a single Jordan string on each row of the pyramid, and the largest string length is $l=p_n$ ([[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]]).

[F2] The ground induced module $P_c$ has a filtration whose successive quotients are indexed by the boxes of the pyramid in column order, and on the $j$-th quotient the Casimir acts by $a_j=c_j+q_j-n$: this is the trace-Casimir difference computation of the column filtration ([[def-arakawa-suzuki-casimir-operators-on-tensor-functors]]).

[F3] The action of $H_d$ on the raw tensor space is obtained by transporting the Casimir/place-permutation operators through the Skryabin tensor identification, and the recursion $x_{j+1}=s_jx_js_j+s_j$ determines all $x_j$ from $x_1$ ([[thm-skryabins-equivalence-for-the-type-a-whittaker-pair]], [[thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations]]).

[F4] A nilpotent single Jordan string of length $l$ has $e^l=0\ne e^{l-1}$ on the space of the string; the individual $e$-operator on the first tensor factor therefore has minimal polynomial $x^l$ ([[thm-nilpotent-jordan-string-basis]], [[def-nilpotent-endomorphism]], [[def-classical-complex-matrix-lie-algebras]]).



## Proof

**Proof technique:** direct.

**Given:** The pyramid, the origins, and the operator $x_1$ of [F1].

1.1 The first-step column filtration. On $P_c\otimes V$ the operator $x_1$ acts by the ordinary Casimir on the first two tensor slots; the column filtration of $P_c$ has successive quotient scalars $a_j$ by [F2], and tensoring with the natural module $V$ refines it by the Jordan strings of $e$ acting on $V$. Along this refined filtration the diagonal part of $x_1$ acts by $a_j$ on the $j$-th column quotient, so applying $x_1-a_j$ successively along the filtration annihilates the module: each application removes one column quotient in order. Since the operators $x_1-a_j$ commute (they are polynomials in $x_1$), the composite $\prod_j(x_1-a_j)$ annihilates $P_c\otimes V$. [F2, algebra]

2.1 Tensoring the remaining factors. Tensoring $\prod_j(x_1-a_j)=0$ with the remaining $d-1$ natural factors preserves the identity because the identity is an operator identity on the first two factors tensored with an identity operator: $\prod_j(x_1-a_j)\otimes1^{\otimes(d-1)}=0$ on $P_c\otimes V^{\otimes d}$. Transferring this identity through the explicit Skryabin tensor matrices of [F3] gives the same annihilation on the raw space $V_c^{\otimes d}$. [F3, step 1.1, algebra]

3.1 The degree bound. Assign column degree $\mathrm{col}(i)$ to the basis vector $v_i$; the diagonal correction $\sum_j(c_{\mathrm{col}(j)}+q_{\mathrm{col}(j)}-n)e_{j,j}$ has column degree $0$ and the cross-column term lowers the first-factor column degree by $1$, while the leading part of $x_1$ in the column filtration is the operator $e$ on the first tensor factor. Since $e$ is a sum of one Jordan string per row and the largest row has length $l=p_n$, the operator $e$ on the first factor has leading term of nilpotence index $l$; a polynomial $P(x_1)$ of degree less than $l$ would have nonzero leading part $e^{l-1}$-type term and could not annihilate a vector in the top column string of the first factor. Hence no polynomial of degree $<l$ annihilates $V_c^{\otimes d}$, while $\prod_j(x-a_j)$ of degree $l$ does by step 2.1. [F1, F4, step 2.1, algebra]

4.1 The minimal polynomial. Steps 2.1 and 3.1 show that $\prod_j(x-a_j)$ annihilates and no smaller-degree polynomial does, so it is exactly the minimal polynomial, with repeated roots counted with multiplicity. Consequently the algebra homomorphism $H_d\to\operatorname{End}(V_c^{\otimes d})$ kills the ideal generated by $\prod_j(x_1-a_j)$ and factors through $H_d(\mathbf a)$. [step 2.1, step 3.1, algebra]

5.1 Degree zero and conventions. For $d=0$ there is no operator $x_1$ of [F1] and the statement is vacuous; the integral-root and coset conventions for $\Lambda$ are those of the cyclotomic definition and are not used in the computation. [F1, given] ∎

## Remarks

- The two ingredients of the computation are the scalar $a_j$ on the $j$-th column quotient and the nilpotence index $l$ of the leading $e$-term; repeated roots are handled by counting multiplicities in the column filtration and require no separability.

- The annihilation is proved first on the ground induced module $P_c\otimes V^{\otimes d}$ and then transferred through Skryabin's tensor identification; the transfer is why the raw operator and not merely the abstract Casimir is annihilated.
