---
id: def-qftx-positive-real-monad-first-order-families
kind: definition
title: First-order families of positive real linear monads
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-positive-real-linear-monad-normal-forms
dependency_level: 0
deps:
  - def-dual-numbers-scheme
  - def-relative-projective-space-standard-charts
  - def-locally-free-sheaf-finite-rank
  - def-twisting-sheaf-proj
dependency_roles:
  def-dual-numbers-scheme: mathematical-premise
  def-relative-projective-space-standard-charts: mathematical-premise
  def-locally-free-sheaf-finite-rank: mathematical-premise
  def-twisting-sheaf-proj: mathematical-premise
axiom_base: "ZF + full AC inherited from the twisting-sheaf construction; the family and range conditions are supplied data."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "N. Brantner, Infinity-Categories and Deformation Theory, Lecture 1"
      url: https://people.maths.ox.ac.uk/brantner/24L1.pdf
      locator: "Lecture 1, printed pp. 1–2: the dual-number base C[epsilon]/(epsilon^2) and first-order deformations."
    - title: "The Stacks Project, Section 33.16, Definition 33.16.1 (Tag 0B28)"
      url: https://stacks.math.columbia.edu/tag/0B28
      locator: "Definition 33.16.1 and the following functor-of-points construction: dual numbers and epsilon-to-scalar-times-epsilon maps."
---

## Definition

Use the dual-number scheme, relative projective-space charts, finite locally free sheaves and twisting sheaves as defined, respectively, in the four suppliers listed under Definition references, with the inherited AC convention for the twisting-sheaf construction. Let $A=\mathbb C[\epsilon]/(\epsilon^2)$ and equip it with the conjugate-linear involution $\overline{a+b\epsilon}=\bar a+\bar b\epsilon$. Its reduction is the quotient map $A\to\mathbb C$ sending $\epsilon$ to zero. For every $r\in\mathbb R$, the map $\rho_r:A\to A$ fixing $\mathbb C$ and sending $\epsilon$ to $r\epsilon$ preserves this involution.

A **first-order family of positive real linear monads of dimensions $(k,2k+N,k)$** is a three-term complex of locally free sheaves on $\mathbb P^3_A=\operatorname{Proj}A[\lambda_1,\lambda_2,\mu_1,\mu_2]$,
$$\mathcal O(-1)\otimes_A U_A\xrightarrow{\alpha_A}\mathcal O\otimes_A S_A\xrightarrow{\beta_A}\mathcal O(1)\otimes_A U'_A,$$
where $U_A,S_A,U'_A$ are free $A$-modules of ranks $k,2k+N,k$, each map is homogeneous linear in $(\lambda_1,\lambda_2,\mu_1,\mu_2)$, $\beta_A\alpha_A=0$, $\alpha_A$ is a locally split injection, $\beta_A$ is a locally split surjection, and $F_A=\ker\beta_A/\operatorname{im}\alpha_A$ is locally free of rank $N$. The two short exact sequences defined by the kernel and image split locally; hence their formation and the middle cohomology commute with reduction $A\to\mathbb C$. The reduced complex is therefore an ordinary linear monad on $\mathbb P^3_\mathbb C$.

The **first-order locally-free/base-change range** used here further requires that $H^0(\mathbb P^3_A,F_A)$ is a free $A$-module and reduction identifies it with $H^0(\mathbb P^3_\mathbb C,F_0)$, where $F_0=F_A\otimes_A\mathbb C$. The image in $S_A$ of the map from the four coefficient copies of $U_A$ under $\alpha_A$ is a direct summand and reduces to the corresponding coefficient-image subspace of $S_0$. For each real twistor line $\ell$ in the reduced projective space, the restriction of $F_A$ to $\ell_A=\ell\times_{\mathbb C}\operatorname{Spec}A$ is trivial of rank $N$, and reduction identifies its global sections with $H^0(\ell,F_0|_\ell)$. These conditions state the precise global, coefficient-image, and line-section base-change range; no arbitrary analytic family or algebraization assertion is included.

Extend the coordinate map $j(\lambda_1,\lambda_2,\mu_1,\mu_2)=(-\bar\lambda_2,\bar\lambda_1,-\bar\mu_2,\bar\mu_1)$ semilinearly using the involution of $A$; write $\widetilde\sigma$ for its projective action over $A$ and $\sigma$ for its reduction. Since $j^2=-1$, both projective actions square to the identity and preserve each real twistor line. A **real twistor line** means the projectivization of a $j$-invariant complex two-plane in $\mathbb C^4$. Equivalently these are the finite lines
$$\mu_1=z_1\lambda_1-\bar z_2\lambda_2,\qquad \mu_2=z_2\lambda_1+\bar z_1\lambda_2,\qquad (z_1,z_2)\in\mathbb C^2,$$
together with $\ell_\infty=\{\lambda_1=\lambda_2=0\}$. Indeed a nonzero vector $v$ and $jv$ are complex-linearly independent because $j^2=-1$; they span the invariant plane. If its $\lambda$ projection is nonzero, that projection and its quaternionic conjugate give an invertible two-by-two matrix with determinant $|\lambda_1|^2+|\lambda_2|^2$, so it has exactly the displayed graph form; if the projection is zero the plane is the $\mu$ plane. Each fixed-line restriction above means the corresponding constant thickening $\ell_A$.

For an $A$-locally free sheaf $G$, write $D_A(G):=(\widetilde\sigma^*\overline G)^\vee$, where $\overline G$ has its scalar action conjugated by $a\mapsto\bar a$ and $(-)^\vee=\mathcal Hom_{\mathcal O}(-,\mathcal O)$. On the reduction, write $D(F_0):=(\sigma^*\overline{F_0})^\vee$. A first-order real structure is an $\mathcal O_{\mathbb P^3_A}$-linear isomorphism $h_A:F_A\to D_A(F_A)$ fixed by the canonical double-dual identification $D_A^2(F_A)\cong F_A$. Its reduction $h_0:F_0\to D(F_0)$ gives fiber pairings
$$b_x(v,w):=h_{0,x}(v)(\overline w),\qquad v\in(F_0)_x,\quad w\in(F_0)_{\sigma x},$$
which are linear in $v$, conjugate-linear in $w$, and satisfy $b_{\sigma x}(w,v)=\overline{b_x(v,w)}$. For a $\sigma$-invariant real line $\ell$ and $s,t\in H^0(\ell,F_0|_\ell)$, the induced line form is the constant value of the function $x\mapsto b_x(s(x),t(\sigma x))$; constancy is part of the stated real-structure condition. It is first-slot-linear and Hermitian by the displayed symmetry. Positivity means $b_\ell(s,s)>0$ for every nonzero $s$. A unitary framing at infinity is an isometric isomorphism $F_A|_{\ell_\infty}\cong (A\otimes_\mathbb C W)\otimes_A\mathcal O_{\ell_\infty}$, where $\ell_\infty=\{\lambda_1=\lambda_2=0\}$ and $W=\mathbb C^N$ has its standard first-slot-linear Hermitian form.

An isomorphism of such families is an $A$-linear chain isomorphism that intertwines the $\sigma$-Hermitian pairings and the framing. No order or positivity is assigned to elements of $A$ with nonzero nilpotent part: positivity is required only after reduction. The base-change scope in this definition consists exactly of reduction $\epsilon\mapsto0$ and the involution-preserving maps $\rho_r$ for real $r$.

## Definition references

[Brantner, Lecture 1, “First order deformations”](https://people.maths.ox.ac.uk/brantner/24L1.pdf)

[The Stacks Project, Definition 33.16.1](https://stacks.math.columbia.edu/tag/0B28)

[[def-dual-numbers-scheme]]

[[def-relative-projective-space-standard-charts]]

[[def-locally-free-sheaf-finite-rank]]

[[def-twisting-sheaf-proj]]
