---
id: def-smooth-periodic-oscillator-pulse-model
kind: definition
title: "The smooth $P$-periodic pulsed oscillator: the normalized pulse, its
  Hamiltonian and its stroboscopic (period) map"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps:
  [
    def-cm-stroboscopic-map,
    def-cm-phase-domain-and-standard-symplectic-two-form,
    prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart,
    lem-test-function-cutoffs-and-euclidean-localization,
    def-ck-euclidean-maps-and-diffeomorphisms,
    def-first-order-ode-initial-value-problem-and-solution,
    def-maximal-ode-solution,
    thm-existence-and-uniqueness-of-a-maximal-ode-solution,
    def-interval,
    def-abs-value,
    def-continuity-real
  ]
dependency_roles:
  def-cm-stroboscopic-map: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-interval: mathematical-premise
  def-abs-value: mathematical-premise
  def-continuity-real: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS
        Graduate Studies in Mathematics 140 (author's preliminary online
        edition, complete PDF), Sections 4.6-4.7 (periodic equations) and 13.3
        (Melnikov's method for periodically forced planar systems)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "S. Dyatlov, Lecture notes for 18.155, MIT (2022), complete course notes
        PDF, test functions and smooth cutoffs, used for the existence of the
        normalized pulse"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
verification:
  precheck: pass
---

## Definition

**The normalized pulse.** Fix once and for all a function

$$w\in C_c^\infty\bigl((0,1)\bigr),\qquad w\ge0,\qquad \int_0^1w(s)\,ds=1 .$$

Such a function exists: by [[lem-test-function-cutoffs-and-euclidean-localization]] there is $\chi\in C_c^\infty((0,1))$ with $\chi\ge0$ and $\chi(1/2)>0$, and $w:=\chi/\int_0^1\chi$ has the stated properties, the integral being positive. All constructions below use only these properties of $w$ and are therefore independent of the particular choice.

**The periodic pulse.** Fix a real parameter $a\ge100$ and a smallness parameter $\delta>0$, and put $P:=\pi/2+\delta$. Define $\beta_\delta:\mathbb R\to\mathbb R$ to be the $P$-periodic function whose restriction to $[0,P]$ is

$$\beta_\delta(t):=0\quad\Bigl(t\in\Bigl[0,\tfrac\pi2\Bigr]\Bigr),\qquad \beta_\delta(t):=\frac1\delta\,w\Bigl(\frac{t-\pi/2}{\delta}\Bigr)\quad\Bigl(t\in\Bigl[\tfrac\pi2,P\Bigr]\Bigr).$$

Both definitions are meaningful: for $t\in[\pi/2,P]$ the argument $(t-\pi/2)/\delta$ lies in $[0,1]$, and at the junction $t=\pi/2$ the second formula gives $\delta^{-1}w(0)=0$ because $w$ is supported in the open interval $(0,1)$; at $t=P$ it gives $\delta^{-1}w(1)=0$. Every derivative of $w$ vanishes at $0$ and $1$ (as $w$ is $C^\infty$ and compactly supported in $(0,1)$), so the $P$-periodic extension is of class $C^\infty$ on $\mathbb R$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]). Moreover

$$\beta_\delta\ge0,\qquad \int_0^P\beta_\delta(t)\,dt=\int_0^1w(s)\,ds=1 .$$

**The Hamiltonian and its equations.** Use the phase domain $U=\mathbb R^2$
with coordinates $(q,p)$ and standard symplectic form $\omega=dq\wedge dp$
and matrix $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, as in
[[def-cm-phase-domain-and-standard-symplectic-two-form]]. For each fixed time
$t$, define the smooth Hamiltonian function

$$H_\delta:\mathbb R\times\mathbb R^2\longrightarrow\mathbb R,\qquad H_\delta(t,q,p):=\frac{p^2+q^2}{2}+\beta_\delta(t)\Bigl(aq-\frac{q^3}{3}\Bigr).$$

The Hamiltonian-vector-field convention is $\iota_{X_H}\omega=dH$, for
which [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]] gives
$X_H=J\nabla H=(\partial_pH,-\partial_qH)$. Here
$\partial_pH_\delta=p$ and
$\partial_qH_\delta=q+\beta_\delta(t)(a-q^2)$, so the associated
time-dependent first-order system is

$$q'=p,\qquad p'=-q+\beta_\delta(t)\,(q^2-a),$$

equivalently the second-order equation $q''=-q+\beta_\delta(t)(q^2-a)$; the right-hand side is $C^\infty$ in $(t,q,p)$, hence continuous and locally Lipschitz in the state variable, so every initial condition has a unique maximal solution ([[def-first-order-ode-initial-value-problem-and-solution]], [[def-maximal-ode-solution]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]). The system is $P$-periodic in $t$.

**Free rotation and pulse endpoint maps.** Over the first subinterval $[0,\pi/2]$ the pulse vanishes and the system is the free oscillator; define the **free rotation**

$$R_0:\mathbb R^2\to\mathbb R^2,\qquad R_0(q,p):=(p,-q),$$

which is the time-$\pi/2$ solution operator of $q'=p$, $p'=-q$: the map $t\mapsto(q_0\cos t+p_0\sin t,\,-q_0\sin t+p_0\cos t)$ solves the free system with the initial data $(q_0,p_0)$, and uniqueness of solutions identifies it with the solution operator.

For $s\in[0,1]$ the **rescaled pulse equation** is

$$q_s=\delta\,p,\qquad p_s=-\delta\,q+w(s)\,(q^2-a),$$

obtained from the second half of the period by the substitution $s=(t-\pi/2)/\delta$. For $(q,p)$ in its domain of existence, let the **pulse endpoint map** be

$$K_\delta(q,p):=\bigl(q(1),p(1)\bigr),$$

where $s\mapsto(q(s),p(s))$ is the unique solution of the rescaled equation with $(q,p)(0)=(q,p)$ ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]). The **stroboscopic map** of the periodic system,

$$G_\delta:=K_\delta\circ R_0,$$

is defined on the set of $(q,p)\in\mathbb R^2$ for which the solution of the $P$-periodic system exists up to time $P$; there it equals the stroboscopic map $\theta_P$ of [[def-cm-stroboscopic-map]]: the free rotation moves the initial point to time $\pi/2$, and the pulse endpoint map moves it from time $\pi/2$ to time $P$.

## Remarks

- The phase variables $q,p$ are dimensionless in this definition; no units, masses or measured quantities occur. The parameter $a$ and the pulse data are pure numbers, and the entire construction is a mathematical model of a periodically forced one-degree-of-freedom oscillator.

- The pulse has width $\delta$ and total strength $\int\beta_\delta=1$, so $\beta_\delta$ converges to a formal unit impulse as $\delta\to0$; no meaning is assigned to the limit $\delta=0$ as a physical force. The $\delta=0$ endpoint map is computed on the companion page cm-math-chaos-examples by explicit integration and used only as a comparison object.

- Nothing in this definition asserts that $G_\delta$ is smooth, invertible, symplectic, close to $F$, or defined on any particular set; these are the contents of [[lem-rescaled-pulse-map-is-c-one-close-to-kick]] and [[thm-smooth-fixed-mass-mechanical-horseshoe]].
