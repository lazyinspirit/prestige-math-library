---
id: def-qftx-hall-spectrum-generator
kind: definition
title: "Finite-quiver Hall spectrum generators"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-finite-acyclic-quiver-stability-data
  - def-subobject-first-completed-finite-quiver-hall-algebra-and-tori
  - thm-finite-quiver-euler-and-skew-integration-is-multiplicative
dependency_roles:
  def-finite-acyclic-quiver-stability-data: mathematical-premise
  def-subobject-first-completed-finite-quiver-hall-algebra-and-tori: mathematical-premise
  thm-finite-quiver-euler-and-skew-integration-is-multiplicative: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants"
      url: "https://arxiv.org/pdf/1611.03696"
      locator: "Sections 2.1 and 4.4–4.5: the finitary Hall product, stability phases, and decreasing-phase Harder–Narasimhan factorization."
    - title: "Markus Reineke, The Harder–Narasimhan system in quantum groups and cohomology of quiver moduli"
      url: "https://arxiv.org/pdf/math/0204059"
      locator: "Sections 2 and 4: quiver stability, Harder–Narasimhan filtrations, and the Hall-algebra HN system."
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, full lecture notes"
      url: "https://arxiv.org/pdf/math/0611617"
      locator: "Sections 1.1, 1.3, and 3.3: finitary Hall algebras, subobject/extension products, and quiver Hall computations."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $Q=(Q_0,Q_1,s,t)$ be a finite acyclic quiver, where $Q_0,Q_1$ are finite
sets and $s,t:Q_1\to Q_0$ are the source and target maps. Let $k=\mathbb F_q$
with $q>1$, and assign to each vertex $i\in Q_0$ a charge
$z_i\in\mathbb H:=\{z\in\mathbb C:\operatorname{Im}z>0\}$. A
finite-dimensional representation $M$ assigns a finite-dimensional
$k$-vector space $M_i$ to each vertex and a linear map
$M_a:M_{s(a)}\to M_{t(a)}$ to each arrow; its dimension vector is
$\mathbf d(M)=(\dim_k M_i)_{i\in Q_0}$. Put
$Z(\mathbf d)=\sum_i d_i z_i$ and, for nonzero
$\mathbf d\in\mathbb N^{Q_0}$, put
$\phi_Z(\mathbf d)=\arg Z(\mathbf d)/\pi$ using the principal argument. For
$M\ne0$, set $\phi_Z(M)=\phi_Z(\mathbf d(M))$. Call $M$
$Z$-semistable when every nonzero subrepresentation has phase at most
$\phi_Z(M)$. Include the zero representation as semistable with no assigned
phase.

Use the small finitary abelian skeleton of these representations. Its Hall
algebra has basis $\delta_M$ indexed by isomorphism classes, and the
subobject-first convention is
$(f\star g)(L)=\sum_{U\subseteq L}f(U)g(L/U)$, with distinct embedded
subobjects counted separately. Its dimension completion is the product of
the finite-dimensional homogeneous components. For integer dimension
vectors define the bilinear Euler form and its skew-symmetrization by
$$\chi_Q(\mathbf d,\mathbf e)=\sum_{i\in Q_0}d_i e_i-\sum_{a:i\to j}d_i e_j,\qquad \langle\mathbf d,\mathbf e\rangle=\chi_Q(\mathbf d,\mathbf e)-\chi_Q(\mathbf e,\mathbf d).$$

For a phase $\phi$, let
$$S_Z(\phi)=\delta_0+\sum_{\substack{[M]\ne[0]\\M\ Z\text{-semistable}\\\phi_Z(M)=\phi}}\delta_M,$$
where $\delta_M$ is the characteristic function of the isomorphism class
$[M]$ and $\delta_0$ is the Hall unit. The Euler and skew integrations are
the continuous maps
$$I(f)=\sum_{[M]}\frac{f(M)}{|\operatorname{Aut}(M)|}X^{\mathbf d(M)},\qquad J(f)=\sum_{[M]}t^{\chi_Q(\mathbf d(M),\mathbf d(M))}\frac{f(M)}{|\operatorname{Aut}(M)|}x^{\mathbf d(M)},\qquad t=\sqrt q>0,$$
as proved for this finite-field category by the Euler and skew integration
theorem. Their completed targets have bases $X^{\mathbf d}$ and
$x^{\mathbf d}$ and products
$$X^{\mathbf d}X^{\mathbf e}=q^{-\chi_Q(\mathbf e,\mathbf d)}X^{\mathbf d+\mathbf e},\qquad x^{\mathbf d}*x^{\mathbf e}=t^{-\langle\mathbf e,\mathbf d\rangle}x^{\mathbf d+\mathbf e}.$$

Write $\Phi_Z=\{\phi_Z(\mathbf e):\mathbf e\in\mathbb N^{Q_0},\
\mathbf e\ne0\}$ and order its elements decreasingly. Define the Euler and
skew Hall spectrum generators by
$$P_Z^{E}:=\prod_{\phi\in\Phi_Z}^{\searrow} I(S_Z(\phi)),\qquad P_Z^{\mathrm{sk}}:=\mathop{*}_{\phi\in\Phi_Z}^{\searrow}J(S_Z(\phi)).$$
In each product the largest phase is the leftmost factor and multiplication
is in the corresponding completed torus. In any fixed total-dimension degree
$D$, only dimension vectors with $\sum_i d_i\le D$ and their finitely many
phases can contribute. Thus these are degreewise formal products in the
specified completion; no analytic convergence is asserted.

These generators describe the Euler or skew integration of finite-field
semistable representation groupoids. Calling such data protected BPS indices,
dimensions of physical state spaces, or spectra of a four-dimensional
supersymmetric model is an additional dictionary, not part of this
mathematical definition.

## Definition references

[[def-finite-acyclic-quiver-stability-data]]

[[def-subobject-first-completed-finite-quiver-hall-algebra-and-tori]]

[[thm-finite-quiver-euler-and-skew-integration-is-multiplicative]]
