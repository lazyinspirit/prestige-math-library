---
id: lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras
kind: lemma
title: "The trace form detects semisimplicity over the complex numbers"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-semisimple-ring
  - thm-wedderburn-artin-theorem
  - def-trace-of-an-endomorphism
  - thm-simple-modules-over-semisimple-rings
  - thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple
  - def-jacobson-radical-of-a-finite-dimensional-algebra
  - thm-matrix-of-a-composite-is-the-product
  - thm-trace-of-ab-equals-trace-of-ba
  - thm-nilpotent-endomorphism-characterisations
  - cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals
  - cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Section 2.3, Step 2 of the proof of Theorem 2.6 (the trace form and semisimplicity), PDF p. 5"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Section 5, semisimplicity of $\\mathbb C W^F$ and of the Hecke algebra, printed pp. 44-45"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Section 11.2, flat deformations and semisimple specializations, printed p. 47"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A$ be a finite-dimensional associative $\mathbb C$-algebra with unit, and let
$(\cdot,\cdot):A\times A\to\mathbb C$ be the **trace form**
$$(a,b):=\operatorname{tr}(L_{ab}),$$
where $L_c:A\to A$ is left multiplication by $c$, $L_c(x)=cx$, and the trace is
that of [[def-trace-of-an-endomorphism]]. Then:

1. $(\cdot,\cdot)$ is a symmetric associative bilinear form:
$(a,b)=(b,a)$ and $(ab,c)=(a,bc)$ for all $a,b,c\in A$;
2. $(\cdot,\cdot)$ is nondegenerate if and only if $A$ is semisimple
([[def-semisimple-ring]]);
3. if $A$ is semisimple, then either $A=0$ or
$A\cong\prod_{i=1}^r\operatorname M_{d_i}(\mathbb C)$ with $r\ge1$, $d_i\ge1$,
the simple left $A$-modules are the natural $d_i$-dimensional modules of the
factors ([[thm-simple-modules-over-semisimple-rings]]), and under such an
isomorphism the trace form corresponds to
$$((X_i),(Y_i))\longmapsto\sum_{i=1}^r d_i\,\operatorname{tr}(X_iY_i),$$
a sum of nondegenerate matrix trace pairings. No statement of this item uses the
Axiom of Choice.

## Facts & Assumptions

**Given:** A finite-dimensional associative unital $\mathbb C$-algebra $A$, the
left multiplications $L_c$, and the trace form $(a,b)=\operatorname{tr}(L_{ab})$.

[F1] Trace of endomorphisms: the trace is defined by any ordered basis and is
basis-independent, a nilpotent endomorphism of a finite-dimensional nonzero
vector space has a strictly upper triangular matrix in some ordered basis and
hence trace $0$, matrices of composites multiply, and
$\operatorname{tr}(XY)=\operatorname{tr}(YX)$
([[def-trace-of-an-endomorphism]],
[[thm-nilpotent-endomorphism-characterisations]],
[[thm-matrix-of-a-composite-is-the-product]],
[[thm-trace-of-ab-equals-trace-of-ba]]).

[F2] $\mathbb C$ is an algebraic closure of $\mathbb R$, hence is algebraically
closed; every endomorphism of a nonzero finite-dimensional vector space over an
algebraically closed field has an eigenvalue
([[cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals]],
[[cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]]).
Wedderburn-Artin describes nonzero semisimple rings as matrix rings over division
rings, and the simple modules of a product of matrix rings over division rings
are the column modules ([[thm-wedderburn-artin-theorem]],
[[thm-simple-modules-over-semisimple-rings]]).

[F3] The Jacobson radical $J(A)$ of a finite-dimensional algebra is a two-sided
ideal, it is nilpotent, and $A/J(A)$ is semisimple
([[def-jacobson-radical-of-a-finite-dimensional-algebra]],
[[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]]).



## Proof

**Proof technique:** direct.

1.1 Left multiplication is $\mathbb C$-linear and satisfies $L_{a+\lambda b}=L_a+\lambda L_b$ and $L_{ab}=L_a\circ L_b$, since $cx$ is linear in $c$ with $x$ fixed and $(ab)x=a(bx)$; hence $(\cdot,\cdot)$ is $\mathbb C$-bilinear. Moreover $(ab,c)=\operatorname{tr}(L_{(ab)c})=\operatorname{tr}(L_{a(bc)})=(a,bc)$, and symmetry of the form follows from $(a,b)=\operatorname{tr}(L_aL_b)=\operatorname{tr}(L_bL_a)=(b,a)$, where the middle equality is the cyclic property of the matrix trace applied to the matrices of $L_a$ and $L_b$ and their composite, with the matrix of a composite given by the product and the trace read in one basis by [F1]. This proves assertion (1). [F1, algebra]

1.2 Assume $A$ is semisimple. If $A=0$ then the empty product gives assertion (3) and the form is nondegenerate vacuously. If $A\ne0$, Wedderburn-Artin gives a ring isomorphism $A\cong\prod_{i=1}^r\operatorname M_{n_i}(D_i)$ with division rings $D_i$ and $n_i\ge1$ by [F2]; since $A$ is a $\mathbb C$-algebra, the scalar copy of $\mathbb C$ lies in the centre of each factor, so each $D_i$ is a finite-dimensional division algebra over $\mathbb C$. For $d\in D_i$ the left multiplication $L_d$ on the nonzero finite-dimensional $\mathbb C$-space $D_i$ has an eigenvalue $\lambda\in\mathbb C$ by [F2], and $L_{d-\lambda}=L_d-\lambda$ is then not injective, so $d-\lambda$, being either $0$ or a unit of the division ring $D_i$, must be $0$; hence $d\in\mathbb C$ and $D_i=\mathbb C$. Thus $A\cong\prod_{i=1}^r\operatorname M_{d_i}(\mathbb C)$, and the simple left $A$-modules are the column modules $\mathbb C^{d_i}$ by [F2]. For $Z\in\operatorname M_d(\mathbb C)$ and the basis $\{E_{kl}\}$ of matrix units, $L_Z(E_{kl})=ZE_{kl}=\sum_i z_{ik}E_{il}$ has no diagonal contribution from the summand indexed by $(k,l)$ other than the $E_{kl}$-coefficient $z_{kk}E_{kl}$, so $\operatorname{tr}(L_Z)=\sum_{k,l}z_{kk}=d\operatorname{tr}(Z)$. Hence, under the isomorphism, $(X,Y)=\sum_i d_i\operatorname{tr}(X_iY_i)$; if the first argument is orthogonal to the whole factor $i$, testing against all matrix units $E_{kl}$ of that factor shows $X_i=0$, with $d_i\ne0$ in $\mathbb C$; therefore the form is nondegenerate. This proves the reverse implication of assertion (2) and, with the identification of the simple modules, assertion (3). [F1, F2, algebra]

2.1 Assume conversely that $(\cdot,\cdot)$ is nondegenerate. Let $J:=J(A)$, which is a two-sided ideal with $A/J$ semisimple and which is nilpotent by [F3]. For $x\in J$ and $b\in A$ associativity puts $xb\in J$, so $(xb)^m=0$ for some $m\ge1$ and $L_{xb}^m=L_{(xb)^m}=0$ by the product rule of step 1.1, that is, $L_{xb}$ is nilpotent; by [F1] it has a strictly upper triangular matrix in some ordered basis, so $(x,b)=\operatorname{tr}(L_{xb})=0$. Since $b\in A$ was arbitrary and the form is nondegenerate, $x=0$. Hence $J=0$ and $A=A/J$ is semisimple, which is the forward implication of assertion (2). [F1, F3, step 1.1, algebra]

3.1 Assertion (1) is step 1.1, the two directions of assertion (2) are steps 1.2 and 2.1, and assertion (3) is the structure statement proved in step 1.2, including the case $A=0$ as the empty product. All objects constructed are determined by the cited decomposition theorems and by explicit basis computations; no choice principle is invoked, so the item is choice-free. [step 1.1, step 1.2, step 2.1] ∎ 