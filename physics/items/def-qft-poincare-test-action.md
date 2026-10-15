---
id: def-qft-poincare-test-action
kind: definition
title: Proper-orthochronous Poincaré action and test pullback
status: published
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
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

For $f\in S:=\mathcal S(\mathbb R^4;\mathbb C)$ define the pointwise pullback
formula, viewed initially as a smooth function,
$$T_gf(x):=f(g^{-1}x)=f(\Lambda^{-1}(x-a)).$$
On smooth functions this formula obeys $T_gT_h=T_{gh}$ and $T_ef=f$, by the
group law. This definition specifies the formula and conventions; it does not
assert that $T_gf$ belongs to $S$. Translations have the convention
$T_{(I,z)}f(x)=f(x-z)$.

With this signature, $p\cdot z:=p^0z^0-\mathbf p\cdot\mathbf z$,
$\overline V_+:=\{p\in\mathbb R^4:p^0\ge|\mathbf p|\}$ is the closed forward
cone, and $x-y$ is spacelike exactly when
$(x^0-y^0)^2-|\mathbf x-\mathbf y|^2<0$.
