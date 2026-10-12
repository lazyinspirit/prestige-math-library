---
id: pthm-cm07-coordinate-covariance-of-the-equations
kind: physics-theorem
title: "Time-dependent coordinate maps transform the model's equation into the Euler-Lagrange equation of the substituted Lagrangian"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [def-cm07-action-and-mechanical-lagrangian, prop-cm-coordinate-covariance-of-the-euler-lagrange-expression, pthm-cm07-euler-lagrange-equations, pthm-cm07-first-variation-and-euler-lagrange-expression, thm-cm-stationarity-iff-euler-lagrange, def-cm-time-dependent-lagrangian-and-action, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-velocity-acceleration, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-linear-map, def-invertible-euclidean-linear-map, def-matrix-product-and-identity-matrix, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  prop-cm-coordinate-covariance-of-the-euler-lagrange-expression: mathematical-premise
  pthm-cm07-euler-lagrange-equations: physical-result
  pthm-cm07-first-variation-and-euler-lagrange-expression: physical-result
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-linear-map: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Covariance of the model's equation of motion under a time-dependent coordinate map of the configuration domain: along a curve described by a C^3 map X with everywhere invertible configuration Jacobian, the Euler-Lagrange expression of the substituted Lagrangian is the transpose-Jacobian multiple of the inertial-chart expression, so the model's potential-part equation holds along the Cartesian description if and only if the substituted Euler-Lagrange equation holds along the coordinate description; when the chart condition holds, this is equivalent to stationarity of the substituted action. The statement is conditional on the adopted force branch, the potential presentation and the smooth invertibility of the coordinate map; it asserts nothing about constraints with fewer coordinates, which are treated separately, and no empirical claim."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.2 'Changing Coordinate Systems', printed pages 13-16 (PDF pages 19-22): Lagrange's equations take the same form in any coordinate system, with the rotating-coordinate example"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 6.3-6.4 and 5.8: Lagrange equations from d'Alembert's principle in generalized coordinates and generalized coordinates in variational calculus"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 2.1, chapter pages 1-2: transformation of the Lagrangian description to arbitrary generalized coordinates"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
masses $m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$ and $C^{2}$ potential
$U:I_{0}\times Q\to\mathbb R$ ([[def-cm03-potential-and-mechanical-energy]]).
Let $\Omega\subseteq\mathbb R\times\mathbb R^{3N}$ be open and nonempty and let
$X:\Omega\to Q$ be of class $C^{3}$ with $X_{q}(t,q)$ invertible for every
$(t,q)\in\Omega$ ([[def-ck-euclidean-maps-and-diffeomorphisms]],
[[def-invertible-euclidean-linear-map]]). Put

$$\widetilde O:=\bigl\{(t,q,v)\in\Omega\times\mathbb R^{3N}:\ \bigl(t,X(t,q),X_{t}(t,q)+X_{q}(t,q)v\bigr)\in I_{0}\times Q\times\mathbb R^{3N}\bigr\},$$

$$\widetilde L(t,q,v):=L\bigl(t,X(t,q),\,X_{t}(t,q)+X_{q}(t,q)v\bigr).$$

Let $a<b$ and let $q:[a,b]\to\mathbb R^{3N}$ be a $C^{2}$ curve with
$(t,q(t),q'(t))\in\widetilde O$ for all $t\in[a,b]$; put $x(t):=X(t,q(t))$.
Then:

1. $\widetilde O$ is open, $\widetilde L$ is of class $C^{2}$ on it, and

$$E_{\widetilde L}(q)(t)=X_{q}\bigl(t,q(t)\bigr)^{\mathsf T}E_{L}(x)(t)\qquad(t\in[a,b]);$$

   consequently $E_{\widetilde L}(q)=0$ on $[a,b]$ if and only if
   $E_{L}(x)=0$ on $[a,b]$, and (by [[pthm-cm07-euler-lagrange-equations]])
   $q$ satisfies the substituted Euler-Lagrange equation if and only if the
   Cartesian description $x$ satisfies the model's potential-part equation
   $\mathsf M x''(t)=-\nabla_{x}U(t,x(t))$ on $[a,b]$.

2. If in addition there is an open set $U\subseteq\mathbb R^{3N}$ with
   $q([a,b])\subseteq U$ and $[a,b]\times U\times\mathbb R^{3N}\subseteq\widetilde O$,
   then $(\widetilde O,\widetilde L)$ is a time-dependent Lagrangian chart over
   $[a,b]\times U$ and: $q$ is stationary for the substituted action
   $\widetilde S(q)=\int_{a}^{b}\widetilde L(t,q,q')\,dt$ if and only if $x$ is
   stationary for $S$.

The statement is conditional on the adopted force branch, on the declared
potential presentation and on the smooth invertibility of $X$; the residual
forces $d$ do not enter, so clause 1 concerns the potential part of the force
map.

## Facts & Assumptions

**Given:** The model data, presentation, the map $X$ and the curve $q$ of the statement, with $x=X\circ q$.

[F1] The covariance supplier ([[prop-cm-coordinate-covariance-of-the-euler-lagrange-expression]]): for $\Omega\subseteq\mathbb R\times\mathbb R^{n}$ open, $X:\Omega\to\mathbb R^{n}$ of class $C^{3}$ with $X_{q}$ everywhere invertible, and $L$ of class $C^{2}$ on an open $O_{x}\subseteq\mathbb R\times\mathbb R^{n}\times\mathbb R^{n}$, the set $\widetilde O$ defined as above is open, $\widetilde L$ is $C^{2}$ on it, and for every $C^{2}$ curve $q$ with $(t,q(t),q'(t))\in\widetilde O$ the transport identity holds along the curve; equivalently $E_{\widetilde L}(q)=X_{q}^{\mathsf T}E_{L}(x)$ in the notation of [[def-cm-time-dependent-lagrangian-and-action]]; and since $X_{q}(t,q(t))$ is invertible, the vanishing of one expression is equivalent to the vanishing of the other.

[F2] The model-terms identity ([[pthm-cm07-euler-lagrange-equations]], [[pthm-cm07-first-variation-and-euler-lagrange-expression]]): for the mechanical Lagrangian of the presentation, a $C^{2}$ admissible curve $z$ of the Cartesian chart is stationary for $S$ if and only if $E_{L}(z)(t)=0$ for all $t$ of its interval, and the latter is equivalent to $\mathsf M z''(t)=-\nabla_{x}U(t,z(t))$ there.

[F3] The chart dictionary ([[def-cm-time-dependent-lagrangian-and-action]], [[def-cm07-action-and-mechanical-lagrangian]], [[thm-cm-stationarity-iff-euler-lagrange]]): a pair $(O',\mathcal L)$ with $O'\subseteq\mathbb R\times\mathbb R^{3N}\times\mathbb R^{3N}$ open and $[a,b]\times U\times\mathbb R^{3N}\subseteq O'$ is a time-dependent Lagrangian chart over $[a,b]\times U$; stationarity means the vanishing of the first variation $\delta S(q)[\eta]$ for all variations $\eta$ with $\eta(a)=\eta(b)=0$, and it is equivalent to the vanishing of the Euler-Lagrange expression on $[a,b]$.

[F4] The matrix fact ([[def-invertible-euclidean-linear-map]], [[def-linear-map]], [[def-matrix-product-and-identity-matrix]]): if $A\in M_{n}(\mathbb R)$ is invertible and $u\in\mathbb R^{n}$, then $A^{\mathsf T}u=0$ implies $u=0$, because $A^{\mathsf T}$ is surjective.

## Proof

**Proof technique:** direct; instantiate the mathematical covariance proposition at the mechanical Lagrangian, then read the result through the model-terms identity and the chart dictionary.

1.1 Clause 1, structure: the Cartesian Lagrangian $L$ is $C^{2}$ on the open set $O_{x}:=I_{0}\times Q\times\mathbb R^{3N}\subseteq\mathbb R\times\mathbb R^{3N}\times\mathbb R^{3N}$ ([[def-cm07-action-and-mechanical-lagrangian]]), the map $X$ and the set $\Omega$ satisfy the hypotheses of [F1] with $n:=3N$, and the displayed $\widetilde O$, $\widetilde L$ are exactly the supplier's constructions; hence $\widetilde O$ is open, $\widetilde L$ is $C^{2}$, and the transport identity holds along $q$. [F1, given]

2.1 Clause 1, identity and equivalence: substituting the transport identity of [F1] gives $E_{\widetilde L}(q)(t)=X_{q}(t,q(t))^{\mathsf T}E_{L}(x)(t)$; since $X_{q}(t,q(t))$ is invertible, [F4] gives $E_{\widetilde L}(q)(t)=0\Leftrightarrow E_{L}(x)(t)=0$ at each $t\in[a,b]$, hence the vanishing conditions on the whole interval agree. [F1, F4, step 1.1, algebra]

3.1 Clause 1, model reading: by [F2] applied to the Cartesian curve $x$, the vanishing of $E_{L}(x)$ on $[a,b]$ is equivalent to $\mathsf M x''(t)=-\nabla_{x}U(t,x(t))$ on $[a,b]$; combining with step 2.1, the substituted equation $E_{\widetilde L}(q)=0$ holds exactly when the Cartesian description satisfies the model's potential-part equation. [F2, step 2.1]

4.1 Clause 2: under the additional chart hypothesis, $(\widetilde O,\widetilde L)$ is a time-dependent Lagrangian chart over $[a,b]\times U$ in the sense of [F3], and $q$ has values in $U$ and is $C^{2}$, so $q$ is an admissible curve of that chart; by [F3], $q$ is stationary for $\widetilde S$ if and only if $E_{\widetilde L}(q)=0$ on $[a,b]$. Similarly the Cartesian curve $x$ is stationary for $S$ if and only if $E_{L}(x)=0$ on $[a,b]$, and step 2.1 gives the equivalence of the two vanishing conditions. [F3, step 2.1, given] ∎

## Remarks

- **Time-dependent maps are included.** The map $X$ may depend on $t$, so the
  result covers moving charts of the same type as the moving-frame construction
  of the preceding page: the substituted Lagrangian reads the Cartesian
  velocity as $X_{t}+X_{q}v$, and the equation of motion in the moving
  coordinates is the Euler-Lagrange equation of $\widetilde L$ by clause 1.

- **Fewer coordinates are a different construction.** Here $X$ is a local
  diffeomorphism of the configuration domain ($X_{q}$ invertible), so the
  number of coordinates equals the number of Cartesian degrees of freedom.
  The reduction to a parametrisation of a holonomic constraint locus, where
  $X$ has fewer coordinates than the ambient configuration space, is treated
  separately on this page.
