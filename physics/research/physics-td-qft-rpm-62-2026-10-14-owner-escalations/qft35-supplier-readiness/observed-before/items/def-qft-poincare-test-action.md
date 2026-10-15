---
id: def-qft-poincare-test-action
kind: definition
title: Proper-orthochronous Poincaré action and test pullback
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-schwartz-space-and-its-seminorms
dependency_roles:
  def-schwartz-space-and-its-seminorms: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jens Mund, General Aspects of Relativistic Quantum Field Theory, lecture notes, DF-UFJF (2012), §2.1"
      url: https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf
      locator: "PDF pp. 12–17: proper-orthochronous Poincaré covariance and its pullback action on test functions."
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, arXiv:1904.04051v2 (2019)"
      url: https://arxiv.org/pdf/1904.04051
      locator: "§4.1, printed pp. 13–15: the proper-orthochronous Poincaré group and its action in the QFT framework."
---

## Definition

Fix coordinates $x=(x^0,\mathbf x)\in\mathbb R^4$ and the Minkowski matrix
$$\eta:=\operatorname{diag}(1,-1,-1,-1).$$
The proper-orthochronous Lorentz group is
$$SO^+(1,3):=\{\Lambda\in GL_4(\mathbb R):\Lambda^{\mathsf T}\eta\Lambda=\eta,\ \det\Lambda=1,\ \Lambda^0{}_0\ge1\},$$
with its subspace topology from real $4\times4$ matrices. The proper-orthochronous
Poincaré group is the semidirect product
$$P^\uparrow_+:=SO^+(1,3)\ltimes\mathbb R^4,$$
with multiplication $(\Lambda,a)(\Gamma,b)=(\Lambda\Gamma,a+\Lambda b)$,
identity $e=(I,0)$, and affine action $gx=\Lambda x+a$. Its topology is the
product topology on the matrix and translation coordinates.

For a smooth test function $f$ define the pullback formula
$$T_gf(x):=f(g^{-1}x)=f(\Lambda^{-1}(x-a)).$$
The continuity lemma [[lem-qft-poincare-pullback-continuity-on-schwartz]]
proves that this formula restricts to a continuous linear action on
$\mathcal S(\mathbb R^4;\mathbb C)$ and hence induces the stated action on the
algebraic tensor test algebra. This convention makes translations act by
$T_{(I,z)}f(x)=f(x-z)$.

With this signature, $p\cdot z:=p^0z^0-\mathbf p\cdot\mathbf z$,
$\overline V_+:=\{p\in\mathbb R^4:p^0\ge|\mathbf p|\}$ is the closed forward
cone, and $x-y$ is spacelike exactly when
$(x^0-y^0)^2-|\mathbf x-\mathbf y|^2<0$.
