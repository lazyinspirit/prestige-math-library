---
id: def-qftx-kz-connection
kind: definition
title: "Casimir KZ connection on ordered configurations"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-ordered-configuration-space
  - def-killing-form-of-a-semisimple-lie-algebra
  - lem-the-casimir-element-is-independent-of-dual-bases
  - def-quadratic-casimir-element
  - prop-the-quadratic-casimir-element-is-central
dependency_roles:
  def-ordered-configuration-space: mathematical-premise
  def-killing-form-of-a-semisimple-lie-algebra: mathematical-premise
  lem-the-casimir-element-is-independent-of-dual-bases: mathematical-premise
  def-quadratic-casimir-element: mathematical-premise
  prop-the-quadratic-casimir-element-is-central: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all tensors and sums are finite-dimensional and finite."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Toshitake Kohno, Monodromy representations of braid groups and Yang-Baxter equations"
      url: "https://www.numdam.org/item/10.5802/aif.1114.pdf"
      locator: "§1.1, printed pp. 141–142: construction of the Casimir connection on the ordered configuration space."
    - title: "Pavel I. Etingof, Igor B. Frenkel, and Alexander A. Kirillov Jr., Lectures on Representation Theory and Knizhnik-Zamolodchikov Equations"
      url: "https://djvu.online/file/elCdJNnaapAuA"
      locator: "Lecture 3, §§3.2 and 3.5, printed pp. 30–37: the KZ differential system and its Casimir operators."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra with Killing form $B$, let $n\ge2$, and let $V_1,\ldots,V_n$ be finite-dimensional complex vector spaces. A representation here is a complex-linear Lie algebra homomorphism $\rho_i:\mathfrak g\to\operatorname{End}_{\mathbb C}(V_i)$, so $[\rho_i(x),\rho_i(y)]=\rho_i([x,y])$. Let $F_n(\mathbb C)=\{(z_1,\ldots,z_n)\in\mathbb C^n:z_i\ne z_j\text{ for }i\ne j\}$ be the ordered configuration space and put $V:=V_1\otimes\cdots\otimes V_n$ in the indicated factor order. For any pair of $B$-dual bases $(x_a),(x^a)$ define $\Omega_{ij}:=\sum_a\rho_i(x_a)^{(i)}\rho_j(x^a)^{(j)}\in\operatorname{End}_{\mathbb C}(V)$, where each superscript means that the operator acts on that tensor factor and as the identity on all other factors. For $i<j$ put $\eta_{ij}:=(dz_i-dz_j)/(z_i-z_j)$, a globally defined complex-valued one-form on $F_n(\mathbb C)$. For $\kappa\in\mathbb C\setminus\{0\}$, the **Casimir Knizhnik–Zamolodchikov connection** on the trivial vector bundle $F_n(\mathbb C)\times V\to F_n(\mathbb C)$ is

$$\nabla^{\mathrm{KZ}}_\kappa:=d-\kappa^{-1}\sum_{i<j}\Omega_{ij}\eta_{ij}.$$

Here a connection on this trivial bundle is a complex-linear operator on smooth $V$-valued sections satisfying $\nabla(fs)=df\otimes s+f\nabla s$ for every smooth scalar function $f$ and section $s$. The associated quadratic Casimir is $C_B:=\sum_a x_ax^a$ in the universal enveloping algebra; with the Killing-form convention above it is central, and $\Omega_{ij}$ is its tensor-level Casimir counterpart.

## Definition references

[[def-ordered-configuration-space]]

[[def-killing-form-of-a-semisimple-lie-algebra]]

[[lem-the-casimir-element-is-independent-of-dual-bases]]

[[def-quadratic-casimir-element]]

[[prop-the-quadratic-casimir-element-is-central]]

## Facts & Assumptions

**Given:** The finite-dimensional complex semisimple Lie algebra, its Killing form and dual bases, the ordered configuration space with $n\ge2$, finite-dimensional representations $\rho_i$, and $\kappa\ne0$ as in the Definition.

[F1] [[def-ordered-configuration-space]]: $F_n(X)$ is the subspace of $X^n$ consisting of ordered tuples with pairwise distinct coordinates; here $X=\mathbb C$.

[F2] [[def-killing-form-of-a-semisimple-lie-algebra]]: $B(x,y)=\operatorname{tr}(\operatorname{ad}_x\operatorname{ad}_y)$ on the finite-dimensional vector space $\mathfrak g$.

[F3] [[lem-the-casimir-element-is-independent-of-dual-bases]]: $\Omega=\sum_a x_a\otimes x^a$ is independent of the selected $B$-dual bases.

[F4] [[def-quadratic-casimir-element]]: the product image $C_B=\sum_a x_ax^a$ defines the quadratic Casimir in the universal enveloping algebra.

[F5] [[prop-the-quadratic-casimir-element-is-central]]: for complex semisimple $\mathfrak g$ with its Killing-form Casimir, $C_B$ lies in the center of the universal enveloping algebra.

## Proof

**Given:** [F1]–[F5], finite-dimensional representations $\rho_i$, and $\kappa\ne0$.

1.1 For each $i<j$, the sum defining $\Omega_{ij}$ is a finite endomorphism sum. Changing the $B$-dual bases leaves $\Omega$ unchanged by [F3], and applying $\rho_i\otimes\rho_j$ and identities on the other factors therefore leaves $\Omega_{ij}$ unchanged. Thus every $\Omega_{ij}\in\operatorname{End}_{\mathbb C}(V)$ is well-defined. [F2, F3, given, algebra]

1.2 On $F_n(\mathbb C)$ the scalar $z_i-z_j$ is never zero by [F1]. Hence its reciprocal is smooth, so $\eta_{ij}=(dz_i-dz_j)/(z_i-z_j)$ is a globally defined smooth one-form; the finite sum $A=\kappa^{-1}\sum_{i<j}\Omega_{ij}\eta_{ij}$ is a smooth $\operatorname{End}(V)$-valued one-form. [F1, given, algebra]

2.1 For a smooth section $s:F_n(\mathbb C)\to V$ and smooth scalar function $f$, $\nabla(fs)=d(fs)-A(fs)=df\otimes s+f(ds-As)=df\otimes s+f\nabla s$, because each endomorphism coefficient in $A$ acts $\mathbb C$-linearly on $s$. Thus $\nabla=d-A$ is a connection on the stated trivial bundle. The operator is the Casimir KZ connection because its coefficients are the pairwise tensor Casimirs from [F3] and the associated quadratic Casimir [F4] is central by [F5]. [F3, F4, F5, step 1.1, step 1.2, algebra] ∎
