---
id: def-holomorphic-kam-domain-and-diophantine-labels
kind: definition
title: "Analytic KAM data: angular tori, action-angle neighbourhoods, Fourier cutoffs and Diophantine frequency labels"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-separately-holomorphic-function, thm-power-series-expansion-in-several-complex-variables, def-balls-and-polydiscs-in-complex-euclidean-space, rem-complex-euclidean-space-dictionary, def-complex-differentiability-holomorphic-and-entire, def-quotient-topology, def-product-topology, def-continuous-map-top, def-integers, def-metric-ball, def-metric-topology, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-cm-phase-domain-and-standard-symplectic-two-form, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-sections-and-iterated-riemann-integrals, thm-riemann-fubini-on-product-rectangles, def-countable-choice]
dependency_roles:
  def-separately-holomorphic-function: mathematical-premise
  thm-power-series-expansion-in-several-complex-variables: mathematical-premise
  def-balls-and-polydiscs-in-complex-euclidean-space: mathematical-premise
  rem-complex-euclidean-space-dictionary: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  def-quotient-topology: mathematical-premise
  def-product-topology: mathematical-premise
  def-continuous-map-top: mathematical-premise
  def-integers: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-sections-and-iterated-riemann-integrals: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §2 (the domain $D_{r,s}$, the parameter neighbourhood $O_h$, the sup-norm and the Diophantine sets $\\mathcal D_\\alpha$), PDF pp. 8-13."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §3.1 (analytic preliminaries and quasi-periodic data), §3.3 (Diophantine properties and the resonant strips) and §3.5 (geometric structures: symplectic forms and Lagrangian submanifolds), printed pp. 24-31, 32-36 and 40-49."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Definition

Throughout, fix an integer $n\ge1$. The space $\mathbb R^n$ is read through
[[rem-complex-euclidean-space-dictionary]] and $\mathbb C^n$ carries the polydisc
geometry of [[def-balls-and-polydiscs-in-complex-euclidean-space]]. All norms
below are supremum norms: for $z\in\mathbb C^m$,

$$|z|_\infty:=\max_{1\le i\le m}|z_i|,\qquad |z|_1:=\sum_{i=1}^m|z_i| .$$

**Angular torus.** Let $\mathbb Z$ be the integers ([[def-integers]]). Write
$k=(k_1,\dots,k_n)\in\mathbb Z^n$, $|k|_1=|k_1|+\dots+|k_n|$, and let
$(2\pi\mathbb Z)^n:=\{2\pi k:k\in\mathbb Z^n\}\subseteq\mathbb R^n$. On
$\mathbb R^n$ define the relation $\vartheta\sim\vartheta'$ by
$\vartheta-\vartheta'\in(2\pi\mathbb Z)^n$. This is an equivalence relation, and
the **angular torus** is the quotient set

$$\mathbb T^n:=(\mathbb R/2\pi\mathbb Z)^n:=\mathbb R^n/\!\sim$$

with the quotient topology ([[def-quotient-topology]], [[def-product-topology]]),
and canonical projection $\pi:\mathbb R^n\to\mathbb T^n$, which is continuous
([[def-continuous-map-top]]). A map $f:\mathbb R^n\to X$ is **$2\pi$-periodic** if
$f(\vartheta+2\pi k)=f(\vartheta)$ for all $\vartheta\in\mathbb R^n$,
$k\in\mathbb Z^n$; such an $f$ factors uniquely through $\pi$, and a map on
$\mathbb T^n$ is, by definition, a $2\pi$-periodic map on $\mathbb R^n$ read
through this factorisation. A function on $\mathbb T^n$ is **continuous**, resp.
**real analytic**, when its $2\pi$-periodic representative has that property.

**Action-angle neighbourhoods.** For $0<r$ and $0<s\le\infty$ put

$$B_r:=\{I\in\mathbb C^n:|I|_\infty<r\},\qquad S_s:=\{\vartheta\in\mathbb C^n:|\mathrm{Im}\,\vartheta|_\infty<s\},$$

and, for a set $\Omega\subseteq\mathbb R^n$ (always measurably or
topologically qualified in the uses below) and $h\ge0$,

$$O_h(\Omega):=\{\nu\in\mathbb C^n:\operatorname{dist}_\infty(\nu,\Omega)<h\}, \qquad \operatorname{dist}_\infty(\nu,\Omega):=\inf_{\omega\in\Omega}|\nu-\omega|_\infty .$$

For $\Omega=\varnothing$ the infimum is taken in the extended nonnegative reals with $\inf\varnothing=+\infty$, so $O_h(\varnothing)=\varnothing$ for every finite $h\ge0$. Supremum norms of functions on an empty domain are $0$ (the supremum in $[0,+\infty]$). Thus an empty Diophantine label set gives an empty parameter family; results quantified over its labels are vacuous, and positive-measure assertions require their separately stated hypotheses.

The **action-angle neighbourhood** of width $(r,s,h)$ over $\Omega$ is the open
product

$$D_{r,s,h}(\Omega):=B_r\times S_s\times O_h(\Omega)\subseteq\mathbb C^{2n}\times\mathbb C^n,$$

and $D_{r,s}(\Omega):=B_r\times S_s$. In the KAM construction the parameter set
is a **frequency label set** $\Omega_\alpha\subseteq\mathbb R^n$ (defined below)
and the relevant parameter neighbourhoods are $O_h(\Omega_\alpha)$; the
temperature of a step is measured by the three widths $r,s,h$ and an angular
margin $\sigma>0$.

**Holomorphic data and norms.** A function $g:D_{r,s,h}(\Omega)\to\mathbb C$
is **holomorphic on $D_{r,s,h}(\Omega)$** when it is continuous and separately
holomorphic in each of the $2n+n$ complex variables
([[def-separately-holomorphic-function]],
[[def-complex-differentiability-holomorphic-and-entire]]); equivalently, by
[[thm-power-series-expansion-in-several-complex-variables]], it is given near
every point by an absolutely convergent power series in the $(I,\vartheta,\nu)$
variables. The **sup-norms** are

$$|g|_{r,s}:=|g|_{r,s,0}:=\sup_{D_{r,s}(\Omega)}|g|,\qquad |g|_{r,s,h}:=|g|_{r,s,h}(\Omega):=\sup_{D_{r,s,h}(\Omega)}|g|\in[0,+\infty].$$

Where no parameter occurs we write $g\in\mathcal H_{r,s}$ if $g$ is holomorphic
on $D_{r,s}(\Omega)$ for some fixed open $\Omega$ and $|g|_{r,s}<+\infty$; and
$g\in\mathcal H_{r,s,h}$ if $g$ is holomorphic on $D_{r,s,h}(\Omega)$ with
$|g|_{r,s,h}<+\infty$. Functions of $\vartheta$ alone are read through the
$2\pi$-periodicity of the $\vartheta$-variables, so that all integrals and
norms below are well defined on $\mathbb T^n$.

**Fourier coefficients, mean and cutoff.** Let $g\in\mathcal H_{r,s}$. For
$k\in\mathbb Z^n$ and $I\in B_r$ the **Fourier coefficient** is the iterated
Riemann integral

$$g_k(I):=\frac1{(2\pi)^n}\int_0^{2\pi}\!\!\cdots\!\int_0^{2\pi} g(I,\vartheta)\,e^{-ik\cdot\vartheta}\,d\vartheta_n\cdots d\vartheta_1 ,$$

as in [[def-sections-and-iterated-riemann-integrals]]; by
[[thm-riemann-fubini-on-product-rectangles]] it equals the multiple Riemann
integral over $[0,2\pi]^n$ and is independent of the order of integration. The
**angular mean** of $g$ is $[g]:=g_0$, so $[g](I)=\frac1{(2\pi)^n}\int_{[0,2\pi]^n}g(I,\vartheta)\,d\vartheta$;
$g$ is **zero-mean** if $[g]=0$ for every $I\in B_r$. For a real number $K\ge0$
the **Fourier cutoff** $T_Kg$ is the trigonometric polynomial

$$T_Kg(I,\vartheta):=\sum_{k\in\mathbb Z^n,\ |k|_1\le K}g_k(I)\,e^{ik\cdot\vartheta}.$$

The sum is finite because $|k|_1\le K$ bounds each $|k_i|$ by $K$. For a
function $g$ of $(I,\vartheta,\nu)$ the same notations apply with the
$\nu$-variable carried along; e.g. $[g]$, $g_k$ and $T_Kg$ are then functions of
$(I,\nu)$.

**Frequency label sets.** Let $\Omega\subseteq\mathbb R^n$ be open, $\alpha>0$
and $\tau>n-1$. A frequency $\nu\in\mathbb R^n$ is **$(\alpha,\tau)$-Diophantine**
if

$$|k\cdot\nu|\ge\alpha\,|k|_1^{-\tau}\qquad\text{for every }k\in\mathbb Z^n\setminus\{0\},$$

with $k\cdot\nu=\sum_ik_i\nu_i$. The **label set** is

$$\Omega_{\alpha,\tau}:=\Omega\cap\{\nu\in\mathbb R^n:\nu\text{ is }(\alpha,\tau)\text{-Diophantine}\}.$$

$\Omega_{\alpha,\tau}$ is closed in $\Omega$ and contained in the global
$(\alpha,\tau)$-Diophantine set; it need not have interior points. Write
$\widehat\Omega:=\Omega$ when $\tau,\alpha$ are fixed and no confusion arises.
The parameter neighbourhoods used below are $O_h(\Omega_{\alpha,\tau})$.

**Hamiltonians, canonical form and Poisson bracket.** A **Hamiltonian datum**
on $D_{r,s,h}(\Omega)$ is a holomorphic $H:D_{r,s,h}(\Omega)\to\mathbb C$ which
is real-valued on real points; more generally we consider families
$H(I,\vartheta;\nu)=e(\nu)+\nu\cdot I+P(I,\vartheta,\nu)$ where $e$ is
holomorphic on $O_h(\Omega)$ and real on real points, and
$P\in\mathcal H_{r,s,h}$ is real on real points. Pair the coordinates as
$q=\vartheta$, $p=I$ in the phase-domain notation of
[[def-cm-phase-domain-and-standard-symplectic-two-form]]; the **standard
two-form** in these coordinates is

$$\omega=\sum_{i=1}^n d\vartheta_i\wedge dI_i,$$

and the **Hamiltonian vector field** of a $C^1$ Hamiltonian $H$ is, by
[[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]] with
$(q,p)=(\vartheta,I)$,

$$X_H=(H_I,-H_\vartheta),\qquad \theta'=H_I,\quad I'=-H_\vartheta\ \ \text{(Hamilton's equations)},$$

characterised by $\iota_{X_H}\omega=dH$; the **Poisson bracket** is

$$\{f,g\}=f_\vartheta\cdot g_I-f_I\cdot g_\vartheta,\qquad \{f,g\}=\nabla f^{\mathsf T}J\nabla g\ \ \text{in the notation of that item}.$$

In particular $\{f,e+\nu\cdot I\}=\nu\cdot f_\vartheta$ for every
$C^1$ function $f$.

**Angular parametrisations and Lagrangian images.** Fix a Hamiltonian datum
$H$. An **angular parametrisation** is a map $\psi=(\psi_I,\psi_\vartheta)$
with $\psi_I:\mathbb R^n\to\mathbb C^n$ $2\pi$-periodic and
$\psi_\vartheta:\mathbb R^n\to\mathbb C^n$ satisfying
$\psi_\vartheta(\vartheta+2\pi k)=\psi_\vartheta(\vartheta)+2\pi k$ for all
$k\in\mathbb Z^n$, so that
$\pi\circ\psi_\vartheta=\pi\circ(\psi_\vartheta\big|_{\mathbb R^n})$ descends to
$\mathbb T^n$; it is **holomorphic on the strip $S_s$** when both components
extend holomorphically to $S_s$, and **real analytic** when in addition
$\psi(\mathbb R^n)\subseteq\mathbb R^{2n}$ and the components are real analytic
in the real variables. It is **faithful** if
$\psi(\vartheta)=\psi(\vartheta')$ implies
$\vartheta-\vartheta'\in(2\pi\mathbb Z)^n$, and an **immersion** if
$D\psi(\vartheta)$ has rank $n$ for every $\vartheta\in\mathbb R^n$; a tuple
that is both is an **embedded torus parametrisation**. Its image is
**Lagrangian** (with respect to $\omega$) if
$\psi^*\omega=\sum_{i=1}^n d(\psi_\vartheta)_i\wedge d(\psi_I)_i=0$ as a
two-form on the parameter space of the representative, and **invariant with
frequency $\nu$** if

$$X_H(\psi(\vartheta))=\sum_{j=1}^n\nu_j\,\partial_{\vartheta_j}\psi(\vartheta) \qquad\text{for all real }\vartheta .$$

## Remarks

- **Conventions.** The torus is the $2\pi$-periodic one, so $e^{ik\cdot\vartheta}$
  is $2\pi$-periodic; the symplectic form, Hamiltonian field and bracket are
  exactly the $\vartheta,I$ coordinate model of
  [[def-cm-phase-domain-and-standard-symplectic-two-form]] and
  [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]]. The
  dimension hypothesis $n\ge2$ used by the KAM theorems below is imposed there,
  not here.
- **Axiom of Countable Choice.** The measure-theoretic frequency-set estimates in this batch use the Axiom of Countable Choice; analytic suppliers are used with their exact stated hypotheses, and no extra choice is required for the determined Newton iteration. The assumption is carried by the positive-measure theorem and its consumers ([[def-countable-choice]]).
- **Scope.** Nothing here is a statement about a physical system: $I,
  \vartheta,\nu$ are complex or real variables, and the "Hamiltonian" is a
  function whose Hamilton equations are an ODE system. In particular
  "frequency" means the vector $\nu$ in the invariance identity above, not a
  measured frequency.
- **Sup versus $r,s,h$.** The norms $|\cdot|_{r,s,h}$ are finite only on bounded
  functions; every function considered below is bounded on its declared
  neighbourhood by hypothesis, and every estimate is an inequality between
  these suprema. The quadratic Taylor step and the Fourier estimates below use
  the margins between $r,s,h$ and the smaller widths they produce.
