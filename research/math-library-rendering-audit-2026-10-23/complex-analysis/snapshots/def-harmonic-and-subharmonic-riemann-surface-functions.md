---
id: def-harmonic-and-subharmonic-riemann-surface-functions
kind: definition
title: "Chartwise harmonic and subharmonic functions on a Riemann surface"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-plane-harmonic-function
  - def-plane-subharmonic-function
  - thm-conformal-invariance-of-plane-harmonicity
  - lem-biholomorphic-invariance-of-plane-subharmonicity
  - thm-plane-subharmonic-functions-are-locally-integrable
  - thm-mean-value-property-for-plane-harmonic-functions
  - thm-harmonic-majorant-characterization-of-plane-subharmonicity
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 1-15, especially Lemmas 1-5, Theorem 4, Corollary 6, and the non-Green proof"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §§2.4 and 5, printed pp. 64-68 and 115-118, Theorems 5.1-5.6"
verification:
  audited: 2026-10-02
  precheck: n/a
---

## Definition

Let $X$ be a Riemann surface with complex structure given by a holomorphic
atlas $\mathcal A$ ([[def-riemann-surface-and-holomorphic-atlas]]), and let
$W\subseteq X$ be open. For a chart $\varphi:U\to\varphi(U)$ of
$\mathcal A$ with $U\cap W\neq\varnothing$ and a function $u$ on $W$, the
**chart expression** of $u$ in $\varphi$ is
$$u_\varphi:=u\circ(\varphi|_{U\cap W})^{-1}.$$
Its value set is the value set of $u$, including $-\infty$ when allowed below.

A function $u:W\to\mathbb R$ is **harmonic** on $W$ when $u$ is continuous
and the chart expression $u_\varphi$ is harmonic in the sense of
[[def-plane-harmonic-function]] for every chart $\varphi$ of $\mathcal A$
whose domain meets $W$. A function $u:W\to[-\infty,\infty)$ is
**subharmonic** on $W$ when the restriction of $u_\varphi$ to each
connected component of $\varphi(U\cap W)$ is subharmonic in the sense of
[[def-plane-subharmonic-function]], for every chart whose domain meets $W$.
Components of a plane open set are open, so these restrictions have plane
domains as their domains. Both notions are nonvacuous only on nonempty open
sets. Finite constants are harmonic and subharmonic; the constant $-\infty$
is excluded from subharmonicity on any nonempty open set.

**The definitions are independent of the atlas.** On each connected component
of a chart overlap inside $W$, the transition and its inverse are
biholomorphisms between plane domains. The conformal invariance of harmonicity
[[thm-conformal-invariance-of-plane-harmonicity]] and
[[lem-biholomorphic-invariance-of-plane-subharmonicity]] apply there.
Restriction of a plane subharmonic function to a smaller domain preserves
upper semicontinuity and the submean inequalities; it also preserves the
nontriviality condition because local integrability implies finiteness almost
everywhere ([[thm-plane-subharmonic-functions-are-locally-integrable]]).
Thus any compatible chart expression is locally harmonic or locally
subharmonic. Harmonicity is local because the $C^2$ condition and the equation
$\Delta u=0$ are local.

For completeness, local plane subharmonicity gives subharmonicity on every
component as follows. Upper semicontinuity is local, and local integrability
excludes an identically $-\infty$ component. On a closed disc
$\overline{D(a,r)}$ inside the component, let $h$ be a continuous harmonic
majorant of the boundary values. If $s-h$ were positive somewhere inside,
then for a sufficiently small $\varepsilon>0$ the upper semicontinuous function
$q(z)=s(z)-h(z)+\varepsilon(|z-a|^2-r^2)$ would have a positive maximum at
an interior point $b$ of this compact disc. On a sufficiently small circle
about $b$, local subharmonicity of $s$ and the harmonic mean-value property
[[thm-mean-value-property-for-plane-harmonic-functions]] give
$q(b)\le\operatorname{avg}q-\varepsilon t^2<\operatorname{avg}q$, contradicting
maximality. Hence $s\le h$ inside, and
[[thm-harmonic-majorant-characterization-of-plane-subharmonicity]] proves
subharmonicity. This proves that testing any one atlas gives the same notions.

**Chartwise Laplacian.** For $u$ of class $C^2$ in charts, write
$$\Delta_\varphi u:=\bigl(\Delta(u_\varphi)\bigr)\circ\varphi \quad\text{on }U\cap W,\qquad \Delta:=\partial_x^2+\partial_y^2.$$
This expression depends on the chart. Under the transition above one has
$\Delta(u_\psi)=|\tau'|^2\cdot\bigl(\Delta(u_\varphi)\bigr)\circ\tau$ on the
overlap, by the chain rule for a holomorphic $\tau$. The factor $|\tau'|^2$
is positive, so vanishing is chart independent, and $u$ is harmonic exactly
when every $\Delta_\varphi u$ vanishes. For a specified conformal metric
$\rho^2|dz|^2$, the Laplace–Beltrami operator is $\rho^{-2}\Delta$ in that
chart: the metric determinant has square root $\rho^2$ and its inverse matrix
is $\rho^{-2}I$, so these factors cancel inside the divergence. Thus the same
vanishing criterion gives harmonicity for any conformal metric, without
identifying the unweighted chart expressions as one global operator.

**Harmonic conjugates.** Let $u:W\to\mathbb R$ be harmonic on the open set $W$.
A function $v:W\to\mathbb R$ is a **harmonic conjugate** of $u$ when $v$ is
harmonic on $W$ and, for every chart $\varphi$ of $\mathcal A$ with
$U\cap W\neq\varnothing$, the function
$$(u+iv)\circ(\varphi|_{U\cap W})^{-1}=\,u_\varphi+i\,v_\varphi$$
is holomorphic on $\varphi(U\cap W)$. In the chart this is exactly the pair of
Cauchy–Riemann equations $\partial_x v_\varphi=-\partial_y u_\varphi$,
$\partial_y v_\varphi=\partial_x u_\varphi$, so the convention fixed here is
that the conjugate is taken so that $u+iv$ is holomorphic; this convention
fixes the sign of the conjugate once a chart is chosen. A harmonic conjugate
$v$ is itself harmonic, because in each chart its expression is the imaginary
part of a holomorphic function, and on a connected $W$ two harmonic conjugates
of the same $u$ differ by a constant, because the difference has vanishing
gradient in every chart. On an abstract surface such a $v$ need not exist
globally even when $W$ is connected and $u$ has no singularities; the
existence, and the resulting multivaluedness, is treated where it is needed
later on this page. This chartwise notion of conjugate is the one used
throughout the hyperbolic-surface arguments.
