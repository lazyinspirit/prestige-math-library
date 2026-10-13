---
id: def-gr-spacelike-initial-data-and-constraints
kind: definition
title: "Spacelike initial data, the constraint equations, developments and maximal developments"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-smooth-lorentzian-objects, def-embedded-submanifold-and-slice-chart, def-lorentz-orthogonality-and-orthogonal-complement, lem-lorentz-form-has-orthonormal-basis, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-curvature-tensor-and-derived-tensors, def-gr-smooth-covariant-two-tensor-field, def-gr-inverse-metric-and-musical-isomorphisms, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
justified_by: [lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, lem-gr-constraint-projections]
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): initial data as a triple (Sigma, h, K) and the Hamiltonian and momentum constraints, section 10.4 printed p. 123, section 10.5 printed pp. 123-124 (PDF pp. 124-125); domain of dependence and maximal Cauchy development, printed p. 124 (PDF p. 125)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): the induced metric, the extrinsic curvature tensor and the projection of the Einstein equation, sections 4.1-4.2 printed pp. 51-59; the Hamiltonian and momentum constraint equations, section 4.4.3 printed p. 64"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: one-sided and two-sided Cauchy developments and domains of dependence, sections 3.1-3.3 printed pp. 83-103"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$ and Einstein tensor $G$
([[def-gr-smooth-lorentzian-objects]], [[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[def-gr-curvature-tensor-and-derived-tensors]]), let
$\Sigma\subseteq M$ be a spacelike embedded hypersurface
([[def-embedded-submanifold-and-slice-chart]],
[[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (a)), and fix real
constants $\kappa$ and $\Lambda$ (the framework coupling constants, purely
parameters for this definition).

**(a) The geometric data.**
For $p\in\Sigma$ the orthogonal complement $T_p\Sigma^{\perp}$ is
one-dimensional and nondegenerate
([[def-lorentz-orthogonality-and-orthogonal-complement]],
[[lem-lorentz-form-has-orthonormal-basis]]); there is therefore a unique
$n_p\in T_p\Sigma^{\perp}$ with $g_p(n_p,n_p)=-1$ and $g_p(n_p,N_p)<0$ and it
depends smoothly on $p$, the **future unit normal field** of $\Sigma$; this
and the properties of $h$ and $K$ below are proved, not assumed, in
[[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]]. Define
on $\Sigma$ the **induced metric** $h$ and the **second fundamental form**
$K$ by
$$h_p(V,W):=g_p(V,W),\qquad K_p(V,W):=g_p(\nabla_Vn,W)\qquad(V,W\in T_p\Sigma),$$
where $\nabla_Vn$ is the covariant derivative at $p$ of the ambient field $n$
in the tangential direction $V$; $h$ is a smooth Riemannian metric on
$\Sigma$ and $K$ a smooth symmetric covariant $2$-tensor field on $\Sigma$
([[def-gr-smooth-covariant-two-tensor-field]]).

**(b) Matter data and constraints.** Let $T$ be a smooth symmetric covariant
$2$-tensor field on $M$ (the stress-energy field of a matter branch). Its
**matter data on $\Sigma$** are the smooth fields
$$\rho:=T(n,n),\qquad j(V):=-T(n,V)\quad(V\in T\Sigma).$$
The tuple $(\Sigma,h,K,\rho,j)$ **satisfies the constraint equations** for
$(\kappa,\Lambda)$ when
$$G(n,n)-\Lambda=\kappa\,\rho,\qquad G(n,V)=\kappa\,T(n,V)\quad\text{for every }V\in T_p\Sigma,\ p\in\Sigma .$$
The first is the normal projection of the equation $G+\Lambda g=\kappa T$
evaluated on $(n,n)$, namely $G(n,n)+\Lambda g(n,n)=\kappa T(n,n)$, with
$g(n,n)=-1$; the second is the normal-tangential projection, the term in
$\Lambda$ dropping because $g(n,V)=0$. That a solution of the field equation
satisfies these two projections is proved in
[[lem-gr-constraint-projections]]. The purely tangential projection
$G(V,W)+\Lambda h(V,W)=\kappa T(V,W)$ is not part of the constraints and is
not required here.

**(c) Developments.** A **development** of the data
$(\Sigma,h,K,\rho,j)$ is a time-oriented smooth Lorentzian four-manifold
$(M',g',N')$ together with a smooth embedding $\varphi:\Sigma\to M'$ whose
image is a spacelike embedded hypersurface with induced metric $\varphi^*g'=h$
and second fundamental form $K$ with respect to its future unit normal $n'$.
Write $T'$ for the smooth symmetric covariant $2$-tensor field included as
the development's stress-energy field. Require the tensor equation
$$G'+\Lambda g'=\kappa T'$$
at every point of $M'$, where $G'$ is the Einstein tensor of $g'$ with its
metric-selected connection, defined as above. The constants $\kappa$ and
$\Lambda$ are the fixed parameters of the initial data. The matter-data matching condition is
the pair of normal projections
$$\rho(p)=T'_{\varphi(p)}(n'_{\varphi(p)},n'_{\varphi(p)}),\qquad j_p(V)=-T'_{\varphi(p)}(n'_{\varphi(p)},d\varphi_p(V))\quad(p\in\Sigma,\ V\in T_p\Sigma).$$
Equivalently, the scalar field $T'(n',n')$ along $\varphi(\Sigma)$ pulls
back to $\rho$, and the covector field $-T'(n',\cdot)$ restricted to
$T\varphi(\Sigma)$ pulls back to $j$. This tuple prescribes only these
stress-energy projections; any additional matter-field data are not included
in $(\Sigma,h,K,\rho,j)$. The development is a **globally hyperbolic
development** when
$\varphi(\Sigma)$ is a Cauchy hypersurface of $(M',g',N')$. The implication
from this Cauchy property to global hyperbolicity of $(M',g',N')$ is a
separate theorem, deferred to the later causal theory; it is not established
by this definition
([[def-gr-causal-conditions-and-global-hyperbolicity]],
[[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c)).

**(d) Maximality.** A globally hyperbolic development $(M_*,g_*,N_*;
\varphi_*)$ is **maximal** for the data when for every globally hyperbolic
development $(M',g',N';\varphi')$ there is a smooth isometric embedding
$\psi:M'\to M_*$ with $\psi\circ\varphi'=\varphi_*$, $\psi$ preserving the
time orientations and carrying the selected stress-energy tensor $T'$ to
$T_*$, that is, $\psi^*T_*=T'$. This is a universal embedding property: every globally hyperbolic
development embeds into the selected maximal one with its data and
stress-energy tensor preserved. It does not assert that arbitrary globally
hyperbolic developments are mutually isometric.

**(e) Scope.** The definition asserts neither existence nor uniqueness of
developments, and it does not assert that $T'$ is generated by matter fields
solving any equation: those claims require the local and global existence theory of
the Einstein-matter system and are not made on this page. The constraint
equations are displayed only as equations satisfied or not by given data.
The equivalent formulation of the constraints in terms of the induced scalar
curvature of $h$ and the divergence of $K$, and the existence theory for
solutions of the constraints, rest on the Gauss-Codazzi relations and on PDE
theory and are deferred to the later pages of this track; no such
equivalence is asserted here.
