---
id: ex-qftx-n4-adjoint-hyper-decomposition
kind: example
title: N=4 action as a massless adjoint-hypermultiplet specialization
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 8
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-extended-actions-examples
deps:
  - post-qftx-n2-vector-hypermultiplet-model
  - post-qftx-n4-super-yang-mills-model
dependency_roles:
  post-qftx-n2-vector-hypermultiplet-model: physical-assumption
  post-qftx-n4-super-yang-mills-model: physical-assumption
physical_scope: "A conditional equality of the N=1 superspace action terms and on-shell field content for the N=4 SU(2) model and the massless-adjoint-hyper specialization of the adopted N=2 model; it does not prove sixteen-supercharge invariance."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Set the N=2 hypermultiplet representation to $R=\mathrm{ad}$ on $V_R=\mathfrak{su}(2)_{\mathbb C}$, use $h_{\mathrm{ad}}(X,Y)=\kappa_{\mathbb C}(\overline X,Y)$ and the induced dual Hermitian form, and set its mass to $m=0$. The map $\jmath(X)(Y)=\kappa_{\mathbb C}(X,Y)$ is an equivariant isometry from the adjoint representation to its dual, so it identifies $\widetilde Q$ with an adjoint field. If $Q$ and $\widetilde Q$ are the canonically normalized chiral fields, define connection-normalized adjoint chiral fields $\Phi_2=gQ$ and $\Phi_3=g\widetilde Q$; let $\Phi_1$ be the connection-normalized N=2 vector chiral field. Then the N=2 hypermultiplet kinetic terms and cubic superpotential become exactly the two additional adjoint-chiral terms in the adopted N=4 N=1 action, and the on-shell component counts agree: one vector, three complex adjoint scalars, and four adjoint Weyl fermions. The calculation does not prove the N=4 supersymmetry variation.

## Example references

[[post-qftx-n2-vector-hypermultiplet-model]]

[[post-qftx-n4-super-yang-mills-model]]

## Facts & Assumptions

**Given:** The N=2 action with one hypermultiplet, the N=4 N=1 action, and the stated connection/canonical field rescaling.

[A1] [[post-qftx-n2-vector-hypermultiplet-model]]: the hyper kinetic terms are canonical and its superpotential is $\sqrt2\,\widetilde Q\Phi_1Q+m\widetilde Q Q$.

[A2] [[post-qftx-n2-vector-hypermultiplet-model]]: the N=2 vector action has gauge and adjoint-chiral terms with coefficient $1/g^2$.

[A3] [[post-qftx-n2-vector-hypermultiplet-model]]: for $R=\mathrm{ad}$, $\jmath(X)=\kappa_{\mathbb C}(X,\cdot)$ is an equivariant isometric identification of the adjoint with its dual, using $h_{\mathrm{ad}}$ and the induced dual Hermitian form.

[A4] [[post-qftx-n2-vector-hypermultiplet-model]]: $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$.

[A5] [[post-qftx-n2-vector-hypermultiplet-model]]: $\kappa_{\mathbb C}$ is the complex-bilinear extension of $\kappa$.

[A6] [[post-qftx-n4-super-yang-mills-model]]: the connection-normalized N=4 action has coefficient $1/g^2$ and cubic term $\sqrt2\,\kappa_{\mathbb C}(\Phi_1,[\Phi_2,\Phi_3])$.

[A7] [[post-qftx-n2-vector-hypermultiplet-model]]: the connection-normalized vector multiplet has one complex adjoint scalar and two adjoint Weyl fermions.

[A8] [[post-qftx-n2-vector-hypermultiplet-model]]: each chiral N=1 hypermultiplet field has one complex scalar and one Weyl fermion.

[A9] [[post-qftx-n4-super-yang-mills-model]]: on shell, the N=4 content is one gauge connection, six real adjoint scalars, and four adjoint Weyl fermions.

## Verification

**Given:** [A1]–[A9], $R=\mathrm{ad}$, $m=0$, and $g>0$.

1.1 The map $\jmath(X)(Y)=\kappa_{\mathbb C}(X,Y)$ intertwines the adjoint and dual actions, since $\kappa_{\mathbb C}(X,\operatorname{Ad}_{u^{-1}}Y)=\kappa_{\mathbb C}(\operatorname{Ad}_uX,Y)$ for every $u\in SU(2)$; in the $\kappa$-orthonormal real basis $T_a$, it preserves the Hermitian form because both forms have coordinate expression $\sum_a\overline{X^a}Y^a$. Differentiating the group intertwining identity and complex-linearly extending gives intertwining for the represented complexified Lie algebra; the matrix exponential power series then gives the same identity for the superfield exponentials in the D-terms. Substituting $Q=\Phi_2/g$ and $\widetilde Q=\Phi_3/g$ into the two hypermultiplet D-terms in [A1] therefore gives $g^{-2}$ times the D-terms of $\Phi_2$ and $\Phi_3$ in [A6]. The N=2 vector term already equals the N=4 vector and $\Phi_1$ terms by [A2] and [A6]. [given, A1, A2, A3, A6, algebra]

1.2 By [A3], under the invariant-form identification of the dual adjoint with the adjoint, $\widetilde Q\Phi_1Q=\kappa_{\mathbb C}(\Phi_3,[\Phi_1,\Phi_2])/g^2$. [given, A3, algebra]

2.1 By [A4]–[A5], $\kappa_{\mathbb C}(X,Y)=-2\operatorname{Tr}_2(XY)$ on the complexified adjoint. Cyclicity gives $\operatorname{Tr}_2(\Phi_3\Phi_1\Phi_2)=\operatorname{Tr}_2(\Phi_1\Phi_2\Phi_3)$ and $\operatorname{Tr}_2(\Phi_3\Phi_2\Phi_1)=\operatorname{Tr}_2(\Phi_1\Phi_3\Phi_2)$. Therefore $\kappa_{\mathbb C}(\Phi_3,[\Phi_1,\Phi_2])=\kappa_{\mathbb C}(\Phi_1,[\Phi_2,\Phi_3])$. [given, A4, A5, step 1.2, algebra]

3.1 The cubic term in [A1], after the substitution from [given] and equality in step 2.1, is the N=4 cubic term in [A6]; the mass term vanishes because $m=0$. [given, A1, A6, step 2.1, algebra]

4.1 By [A3], [A7], and [A8], the N=2 vector and adjoint hyper together have one gauge connection, three complex adjoint scalars, and four adjoint Weyl fermions. The three complex scalars are six real scalars, so these counts equal the on-shell N=4 content in [A9]. [given, A3, A7, A8, A9, step 3.1, algebra] ∎

