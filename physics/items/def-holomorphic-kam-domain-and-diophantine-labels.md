---
id: def-holomorphic-kam-domain-and-diophantine-labels
kind: definition
title: "Analytic KAM data: angular tori, action-angle neighbourhoods, Fourier cutoffs and Diophantine frequency labels"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-separately-holomorphic-function, thm-power-series-expansion-in-several-complex-variables, thm-power-series-define-holomorphic-functions-in-several-variables, def-real-analytic-germ-in-several-variables, def-balls-and-polydiscs-in-complex-euclidean-space, rem-complex-euclidean-space-dictionary, def-complex-differentiability-holomorphic-and-entire, def-quotient-topology, def-product-topology, def-continuous-map-top, def-integers, def-metric-ball, def-metric-topology, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-cm-phase-domain-and-standard-symplectic-two-form, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-sections-and-iterated-riemann-integrals, thm-riemann-fubini-on-product-rectangles, def-countable-choice]
dependency_roles:
  def-separately-holomorphic-function: mathematical-premise
  thm-power-series-expansion-in-several-complex-variables: mathematical-premise
  thm-power-series-define-holomorphic-functions-in-several-variables: mathematical-premise
  def-real-analytic-germ-in-several-variables: mathematical-premise
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
geometry of [[def-balls-and-polydiscs-in-complex-euclidean-space]]. We relabel
the suppliers' coordinates indexed by $0,\ldots,m-1$ as $z_i:=z(i-1)$ for
$1\le i\le m$; every coordinate tuple and derivative below uses this relabelling.
All norms
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
Here **real analytic** has the componentwise meaning of
[[def-real-analytic-germ-in-several-variables]]: near every real point each real
component is represented by an absolutely convergent power series in the real
coordinates, and the same coefficients define a holomorphic function on a
complex polydisc whose restriction is the given real component. For a
vector-valued map this condition applies to each of its finitely many scalar
components.

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
scale of a step is measured by the three widths $r,s,h$ and an angular
margin $\sigma>0$.

**Holomorphic data and norms.** A function $g:D_{r,s,h}(\Omega)\to\mathbb C$
is **holomorphic on $D_{r,s,h}(\Omega)$** when it is continuous and separately
holomorphic in each of the $2n+n$ complex variables
([[def-separately-holomorphic-function]],
[[def-complex-differentiability-holomorphic-and-entire]]); equivalently, by
[[thm-power-series-expansion-in-several-complex-variables]], it is given near
every point by an absolutely convergent power series in the $(I,\vartheta,\nu)$
variables. The **sup-norms** are

$$|g|_{r,s}:=\sup_{B_r\times S_s}|g|,\qquad |g|_{r,s,h}:=|g|_{r,s,h}(\Omega):=\sup_{D_{r,s,h}(\Omega)}|g|\in[0,+\infty].$$

The first norm applies to a function of $(I,\vartheta)$ alone; the second
applies to a function of $(I,\vartheta,\nu)$ on its declared product domain.
They are distinct notations: $O_0(\Omega)=\varnothing$, so the three-width
norm at $h=0$ is $0$, not the phase-only norm.

A phase function $g:B_r\times S_s\to\mathbb C$ is **$2\pi$-periodic in the
angles** if $g(I,\vartheta+2\pi k)=g(I,\vartheta)$ for every
$I\in B_r$, $\vartheta\in S_s$ and $k\in\mathbb Z^n$. For a parameter-dependent
function on $D_{r,s,h}(\Omega)$ this means
$g(I,\vartheta+2\pi k,\nu)=g(I,\vartheta,\nu)$ for every point
$(I,\vartheta,\nu)$ of that domain and every $k\in\mathbb Z^n$.
Real angular translations preserve $S_s$, so these equalities are defined on
the entire declared domain.

Where no parameter occurs we write $g\in\mathcal H_{r,s}$ if $g$ is holomorphic
on $B_r\times S_s$, $2\pi$-periodic in the angles and $|g|_{r,s}<+\infty$; and
$g\in\mathcal H_{r,s,h}$ if $g$ is holomorphic on $D_{r,s,h}(\Omega)$,
$2\pi$-periodic in the angles and $|g|_{r,s,h}<+\infty$. Functions of
$\vartheta$ alone use the same periodicity condition with $I$ omitted.
Thus at fixed non-angle variables the restriction to real angles factors
through $\mathbb T^n$; the strip norms are suprema over complex angular
representatives and the integrals below are integrals of the descended
real-angle functions.

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
is $2\pi$-periodic in the angles and real-valued on real points; in particular
we consider families
$H(I,\vartheta;\nu)=e(\nu)+\nu\cdot I+P(I,\vartheta,\nu)$ where $e$ is
holomorphic on $O_h(\Omega)$ and real on real points, and
$P\in\mathcal H_{r,s,h}$ is real on real points. On the real phase slice pair the coordinates as
$q=\vartheta$, $p=I$ in the phase-domain notation of
[[def-cm-phase-domain-and-standard-symplectic-two-form]]. On the complex phase
domain $B_r\times S_s$, identify phase tangent vectors in angle-first order
with $v=(v_\vartheta,v_I)\in\mathbb C^{2n}$, and define the **standard complex
two-form** to be the constant alternating complex bilinear form

$$\omega=\sum_{i=1}^n d\vartheta_i\wedge dI_i,\qquad \omega(v,w):=\sum_{i=1}^n\bigl((v_\vartheta)_i(w_I)_i-(v_I)_i(w_\vartheta)_i\bigr).$$

Here $d\vartheta_i(v)=(v_\vartheta)_i$, $dI_i(v)=(v_I)_i$, and the wedge denotes
the alternating product displayed above. No complex conjugation occurs.
Fix any parameter $\lambda\in O_h(\Omega)$, real or complex. All derivatives
of $H(\,\cdot\,;\lambda)$ below are complex derivatives in the phase variables
alone. The power-series coefficient bounds of
[[thm-power-series-expansion-in-several-complex-variables]] meet the hypotheses
of [[thm-power-series-define-holomorphic-functions-in-several-variables]], so
these derivatives exist, are holomorphic, and give the complex linear phase
differential

$$d_{\mathrm{ph}}H(v):=H_\vartheta\cdot v_\vartheta+H_I\cdot v_I.$$

The **Hamiltonian vector field** is the holomorphic phase map

$$X_H=(H_I,-H_\vartheta)\quad\text{in }(\vartheta,I)\text{ order},\qquad \theta'=H_I,\quad I'=-H_\vartheta\ \ \text{(Hamilton's equations)},$$

These are the component equations for a $C^1$ curve
$\gamma:J\to S_s\times B_r$ on a nonempty open real interval $J$, in angle-first
order, with $\gamma'(t)=X_H(\gamma(t);\lambda)$ for every $t\in J$;
such a curve is called an **integral curve** at fixed parameter $\lambda$.
It is characterised by $\iota_{X_H}\omega=d_{\mathrm{ph}}H$, meaning
$\omega(X_H,v)=d_{\mathrm{ph}}H(v)$ for every phase vector $v$: substitution
gives $H_I\cdot v_I+H_\vartheta\cdot v_\vartheta$, and comparison of the
coefficients of $v_I,v_\vartheta$ determines $X_H$ uniquely.
For holomorphic phase functions $f,g$ on the same domain, with parameters
held fixed, define their **Poisson bracket** by

$$\{f,g\}:=\omega(X_f,X_g)=f_\vartheta\cdot g_I-f_I\cdot g_\vartheta=\nabla_{\mathrm{ph}}f^{\mathsf T}J\nabla_{\mathrm{ph}}g,$$

where $\nabla_{\mathrm{ph}}f=(f_\vartheta,f_I)$ and
$J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}$ in angle-first order. The
equalities follow by substitution into the displayed bilinear form.
For real $\lambda$, the real-valued restriction of a Hamiltonian datum to
$(B_r\cap\mathbb R^n)\times\mathbb R^n$ is smooth by the same power-series
suppliers, hence satisfies the real $C^2$ hypotheses of
[[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]]. That
supplier identifies the restricted field with its real Hamiltonian field.
Holomorphic $f,g$ that are real on real points likewise have smooth real
restrictions, to which that supplier's bracket formula applies.
More generally, for $C^1$ functions $H,f,g:U\to\mathbb R$ on an open real
phase domain $U$ we use the same
coordinate formulas with real partial derivatives: they define continuous
fields and brackets, and the same coefficient comparison gives
$\iota_{X_H}\omega=dH$ without invoking the $C^2$ supplier.

In particular $\{f,e+\nu\cdot I\}=\nu\cdot f_\vartheta$ for every
holomorphic phase function $f$, and for every real $C^1$ phase function $f$
when $e,\nu$ and the phase variables are real.

**Angular parametrisations and Lagrangian images.** Fix a Hamiltonian datum
$H$. For parameter-dependent data, fix a value $\lambda\in O_h(\Omega)$
and use $H$ below for the phase function $(I,\vartheta)\mapsto H(I,\vartheta;\lambda)$;
its vector field differentiates only the phase variables. An **angular parametrisation** is a map $\psi=(\psi_I,\psi_\vartheta)$
with $\psi_I:\mathbb R^n\to\mathbb C^n$ $2\pi$-periodic and
$\psi_\vartheta:\mathbb R^n\to\mathbb C^n$ satisfying
$\psi_\vartheta(\vartheta+2\pi k)=\psi_\vartheta(\vartheta)+2\pi k$ for all
$k\in\mathbb Z^n$. Define the complex angular quotient
$\mathbb T^n_{\mathbb C}:=\mathbb C^n/(2\pi\mathbb Z)^n$ by the relation
$z\sim z'$ if $z-z'\in(2\pi\mathbb Z)^n$, with its quotient
topology and projection $\pi_{\mathbb C}:\mathbb C^n\to\mathbb T^n_{\mathbb C}$.
Then $\vartheta\mapsto(\psi_I(\vartheta),\pi_{\mathbb C}(\psi_\vartheta(\vartheta)))$
is periodic and induces a map
$\widehat\psi:\mathbb T^n\to\mathbb C^n\times\mathbb T^n_{\mathbb C}$.
When both components are real-valued this instead induces
$\widehat\psi:\mathbb T^n\to\mathbb R^n\times\mathbb T^n$ using $\pi$ on
the angular component. The parametrisation is **holomorphic on the strip $S_s$** when both components
extend holomorphically to $S_s$, and **real analytic** when in addition
$\psi(\mathbb R^n)\subseteq\mathbb R^{2n}$ and the components are real analytic
in the real variables. In the action-first order of $\psi$, the same field is
$X_H=(-H_\vartheta,H_I)$. It is **faithful** if
$\psi(\vartheta)=\psi(\vartheta')$ implies
$\vartheta-\vartheta'\in(2\pi\mathbb Z)^n$, and an **immersion** if it is $C^1$ and
$D\psi(\vartheta)$ has rank $n$ for every $\vartheta\in\mathbb R^n$; a tuple
that is both is an **embedded torus parametrisation**. Its image is
**Lagrangian** (with respect to $\omega$) if $\psi$ is $C^1$ and
$\psi^*\omega=\sum_{i=1}^n d(\psi_\vartheta)_i\wedge d(\psi_I)_i=0$ as a
two-form on the parameter space of the representative, and **invariant with
frequency $\nu$** if $\psi$ is $C^1$, lies in the domain of $X_H$, and

$$X_H(\psi(\vartheta))=\sum_{j=1}^n\nu_j\,\partial_{\vartheta_j}\psi(\vartheta) \qquad\text{for all real }\vartheta .$$

## Remarks

- **Conventions.** The torus is the $2\pi$-periodic one, so $e^{ik\cdot\vartheta}$
  is $2\pi$-periodic; the real restrictions of the symplectic form, Hamiltonian
  field and bracket are exactly the $\vartheta,I$ coordinate model of
  [[def-cm-phase-domain-and-standard-symplectic-two-form]] and
  [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]] for real
  $C^2$ data. The complex bilinear extension is defined and checked above. The
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
