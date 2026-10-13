---
id: def-gr-jacobi-field-and-conjugate-instant
kind: definition
title: "Jacobi fields, geodesic variations and conjugate instants along a geodesic"
status: published
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-curvature-tensor-and-derived-tensors, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-affine-connection-on-a-smooth-manifold, def-geodesic-of-an-affine-connection, def-covariant-derivative-along-a-curve, def-vector-field-and-section-along-a-smooth-curve, def-gr-tensor-fields-and-components, def-interval]
dependency_roles:
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-vector-field-and-section-along-a-smooth-curve: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-interval: mathematical-premise
justified_by: [thm-gr-jacobi-equation-and-geodesic-deviation, lem-gr-conjugacy-via-the-exponential-map, lem-gr-normal-index-form-factorization]
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.5: the deviation vector of a one-parameter family of geodesics, the relative velocity and acceleration and the geodesic deviation equation (4.21)-(4.24), printed pp. 46-48 (PDF pp. 47-49)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the one-parameter family of geodesics (3.107)-(3.110), the deviation vector and the geodesic deviation equation (3.113), printed pp. 86-88 (PDF pp. 93-95)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), section 6.1: conjugate and focal points, the endomorphism R_u, the geodesic-variation equation (6.2) and the conjugate-point initial conditions, printed pp. 159-161 (PDF pp. 159-161)"
      url: "https://link.springer.com/content/pdf/10.1007/s41114-019-0019-x.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), and let
$R$ be its curvature ([[def-gr-curvature-tensor-and-derived-tensors]]). Let
$I\subseteq\mathbb R$ be an interval with nonempty interior
([[def-interval]]) and let $\gamma:I\to M$ be an affinely parametrized
geodesic with $D_s\gamma'=0$, written $T:=\gamma'$
([[def-geodesic-of-an-affine-connection]]); the parameter is the affinely
parametrized one of that definition and need not be proper time.

**(a) Fields along $\gamma$ and the derivative $D_s$.** A **field along
$\gamma$** is a section $J$ of the pullback bundle $\gamma^*TM$, and $D_s$
denotes the covariant derivative along $\gamma$ of
[[def-covariant-derivative-along-a-curve]]. A field is **smooth** when its
coefficients in a smooth local frame of $M$ around each point of $\gamma$ are
$C^\infty$ on the corresponding parameter interval. At an included endpoint
of $I$ all derivatives below are one-sided.

**(b) Jacobi field.** A **Jacobi field along $\gamma$** is a smooth field $J$
along $\gamma$ satisfying the **Jacobi equation**
$$D_s^2J=R(T,J)T\qquad(s\in I),$$
that is $D_s^2J=R(\gamma',J)\gamma'$. The assignment
$J\mapsto R(T,J)T$, which associates with a field along $\gamma$ another
field along $\gamma$ and is $\mathbb R$-linear, is the **Jacobi operator of
$\gamma$**. Whether the field is smooth only piecewise is stated whenever a
statement uses piecewise fields; the unqualified term means globally smooth.

**(c) Geodesic variations.** A **geodesic variation with affine
parameter $s$** is a smooth map $F:J_0\times I\to M$, where
$J_0\subseteq\mathbb R$ is an open interval containing $0$, such that
for every $r\in J_0$ the curve $s\mapsto F(r,s)$ is a geodesic with affine
parameter $s$. Its **variation field** is the field $s\mapsto\partial_rF(0,s)$
along the curve $s\mapsto F(0,s)$. The variation field of a geodesic
variation is a Jacobi field along that curve
([[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (b)).

**(d) Conjugate instants and multiplicity.** Let $s_0<s_1$ be points of $I$.
The event $\gamma(s_1)$ is **conjugate to** $\gamma(s_0)$ **along $\gamma$**
when there is a nonzero Jacobi field $J$ along $\gamma$ with
$J(s_0)=J(s_1)=0$. In that case $s_1$ is called a **conjugate instant** of
$\gamma$ (with respect to $s_0$, when the base point needs to be named), and
the **multiplicity** of the conjugate instant is the dimension of the real
vector space of Jacobi fields vanishing at $s_0$ and $s_1$; the fields
vanishing at $s_0$ form a $4$-dimensional space and the multiplicity is at
most $4$, since a Jacobi field is determined by its value and derivative at
$s_0$ ([[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (c)). For a
geodesic with $\gamma(s_0)=p$ and $\gamma'(s_0)=v$, the corresponding
possibility of conjugacy is measured by the derivative of the exponential
map at $(s_1-s_0)v$, provided this vector lies in its domain
([[lem-gr-conjugacy-via-the-exponential-map]] applied to
$t\mapsto\gamma(s_0+t)$ on $[0,s_1-s_0]$); that equivalence is proved,
not assumed here. No conjugate instant is asserted to exist.

**(e) The normal bundle.** If $\gamma$ is future timelike with
$g(T,T)=-1$, define its **normal bundle** to be the vector subbundle
$$N_\gamma:=\bigsqcup_{s\in I}N_\gamma(s)\subseteq\gamma^*TM,\qquad N_\gamma(s):=\{v\in T_{\gamma(s)}M:g_{\gamma(s)}(v,T(s))=0\}.$$
A **normal field** is a smooth section $J$ of $N_\gamma$, equivalently a
smooth field along $\gamma$ satisfying $g(J,T)=0$. Each fibre $N_\gamma(s)$
has dimension three, the restriction of $g_{\gamma(s)}$ to it is positive
definite, and $D_s$ maps normal fields to normal fields, since
$\frac{d}{ds}g(J,T)=g(D_sJ,T)+g(J,D_sT)=g(D_sJ,T)$ and $D_sT=0$; these
facts are proved in [[lem-gr-normal-index-form-factorization]] clause (b).
The norm of a normal field is $|J(s)|:=\sqrt{g_{\gamma(s)}(J(s),J(s))}$.
For any field $V$ along $\gamma$, its **normal component** is the field
$$V^\perp(s):=V(s)+g_{\gamma(s)}(V(s),T(s))\,T(s).$$
Indeed $g(T,T)=-1$ implies $g(V^\perp,T)=0$ and
$V=V^\perp-g(V,T)T$.

## Remarks

- **What is and is not fixed.** This definition fixes the vocabulary of the
  deviation and conjugate-point results on this page: Jacobi field, variation
  field, conjugate instant and multiplicity. It asserts nothing about the
  existence of Jacobi fields with prescribed initial data, about conjugacy
  for any particular geodesic, or about maximality; those are theorems proved
  separately. The sign convention of the Jacobi operator is the one induced
  by the curvature sign convention of
  [[def-gr-curvature-tensor-and-derived-tensors]]: $D_s^2J=R(T,J)T$, not its
  negative. Sources using the opposite sign or the opposite curvature
  convention state the equation with a minus sign; no formula is taken from
  another source without converting its convention.

- **Relation to proper time.** When $\gamma$ is future timelike with
  $g(T,T)=-c^2$ and the affine parameter is proper time $\tau$, the equation
  above is the same as $D_\tau^2J=R(U,J)U$ for the four-velocity $U$; the
  conversion factor is a positive constant and does not change which fields
  vanish at which parameter values
  ([[lem-gr-proper-time-reparametrization-and-four-velocity]]).
