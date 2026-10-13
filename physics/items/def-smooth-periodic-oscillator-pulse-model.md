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
    def-continuity-real,
    thm-continuous-implies-integrable,
    lem-integral-elementary-bounds,
    thm-monotonicity-of-the-integral,
    thm-additivity-over-subintervals,
    thm-linearity-of-the-integral,
    thm-ftc-first-part,
    thm-ftc-second-part,
    thm-chain-rule,
    thm-sine-and-cosine-derivatives,
    cor-trigonometric-parity-and-pythagorean-identity,
    thm-sine-cosine-zero-sets-and-fundamental-period,
    cor-pi-is-the-first-positive-sine-zero
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
  thm-continuous-implies-integrable: mathematical-premise
  lem-integral-elementary-bounds: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  cor-pi-is-the-first-positive-sine-zero: mathematical-premise
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

**The normalized pulse.** By [[lem-test-function-cutoffs-and-euclidean-localization]], applied to $K=\{1/2\}\subset(0,1)$, choose $\chi\in C_c^\infty((0,1))$ with $0\le\chi\le1$ and $\chi=1$ on a neighborhood of $1/2$. Thus there are $0<\alpha<\beta<1$ with $\chi=1$ on $[\alpha,\beta]$. Before taking any integral, extend $\chi$ by zero to $\mathbb R$, retaining the notation $\chi$. Its compact support inside $(0,1)$ makes this extension identically zero near both endpoints, hence smooth on $\mathbb R$. The continuous extended function $\chi$ is integrable on $[0,1]$; by additivity and monotonicity of the integral and the integral of a constant,

$$I:=\int_0^1\chi(s)\,ds\ge\int_\alpha^\beta\chi(s)\,ds=\beta-\alpha>0,$$

using integrability of continuous functions ([[thm-continuous-implies-integrable]]), additivity and monotonicity ([[thm-additivity-over-subintervals]], [[thm-monotonicity-of-the-integral]]), and the integral of a constant ([[lem-integral-elementary-bounds]]).

Define $w_0:=\chi/I$ on $(0,1)$ and let $w:\mathbb R\to\mathbb R$ be its extension by zero outside $(0,1)$. Since $\chi$ has compact support in $(0,1)$, this zero extension is smooth and compactly supported in $(0,1)$. Linearity of the integral ([[thm-linearity-of-the-integral]]) gives

$$w\in C_c^\infty\bigl((0,1)\bigr),\qquad w\ge0,\qquad \int_0^1w(s)\,ds=1.$$

Fix such a pulse $w$ for the constructions below. The resulting coefficient and endpoint maps may depend on this choice; the later estimates apply to every such $w$, with constants allowed to depend on it.

**The periodic pulse.** Fix a real parameter $a\ge100$ and a smallness parameter $\delta>0$, and put $P:=\pi/2+\delta$. Define $\beta_\delta:\mathbb R\to\mathbb R$ to be the $P$-periodic function whose restriction to $[0,P]$ is

$$\beta_\delta(t):=0\quad\Bigl(t\in\Bigl[0,\tfrac\pi2\Bigr]\Bigr),\qquad \beta_\delta(t):=\frac1\delta\,w\Bigl(\frac{t-\pi/2}{\delta}\Bigr)\quad\Bigl(t\in\Bigl[\tfrac\pi2,P\Bigr]\Bigr).$$

Both definitions use the same zero extension $w:\mathbb R\to\mathbb R$, so the endpoint values $w(0)$ and $w(1)$ are defined and equal to $0$. Since $w$ vanishes on neighborhoods of $0$ and $1$, all its derivatives vanish there; the $P$-periodic extension of $\beta_\delta$ is therefore of class $C^\infty$ on $\mathbb R$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]). Also $\beta_\delta\ge0$. To verify its normalization, put

$$B_\delta(t):=\begin{cases}0,&0\le t\le\pi/2,\\[2pt]\displaystyle\int_0^{(t-\pi/2)/\delta}w(s)\,ds,&\pi/2\le t\le P.\end{cases}$$

The integral function of the continuous $w$ has derivative $w$ by [[thm-ftc-first-part]] and [[thm-continuous-implies-integrable]], and the chain rule ([[thm-chain-rule]]) gives $B_\delta'(t)=\beta_\delta(t)$ on the pulse interval. Since $w$ vanishes near its endpoints, $B_\delta$ is differentiable across $t=\pi/2$ as well. Since $\beta_\delta$ is continuous and therefore integrable on $[0,P]$, the second part of the fundamental theorem ([[thm-ftc-second-part]]) gives

$$\int_0^P\beta_\delta(t)\,dt=B_\delta(P)-B_\delta(0)=\int_0^1w(s)\,ds=1.$$

**The Hamiltonian and its equations.** Use the phase domain $U=\mathbb R^2$
with coordinates $(q,p)$ and standard symplectic form $\omega=dq\wedge dp$
and matrix $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, as in
[[def-cm-phase-domain-and-standard-symplectic-two-form]]. For each fixed time
$t$, define the smooth Hamiltonian function

$$\mathcal H_\delta:\mathbb R\times\mathbb R^2\longrightarrow\mathbb R,\qquad \mathcal H_\delta(t,q,p):=\frac{p^2+q^2}{2}+\beta_\delta(t)\Bigl(aq-\frac{q^3}{3}\Bigr).$$

The Hamiltonian-vector-field convention is $\iota_{X_H}\omega=dH$, for
which [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]] gives
$X_H=J\nabla H=(\partial_pH,-\partial_qH)$. Here
$\partial_p\mathcal H_\delta=p$ and
$\partial_q\mathcal H_\delta=q+\beta_\delta(t)(a-q^2)$, so the associated
time-dependent first-order system is

$$q'=p,\qquad p'=-q+\beta_\delta(t)\,(q^2-a),$$

equivalently the second-order equation $q''=-q+\beta_\delta(t)(q^2-a)$; the right-hand side is $C^\infty$ in $(t,q,p)$, hence continuous and locally Lipschitz in the state variable, so every initial condition has a unique maximal solution ([[def-first-order-ode-initial-value-problem-and-solution]], [[def-maximal-ode-solution]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]). The system is $P$-periodic in $t$.

**Free rotation and pulse endpoint maps.** Over the first subinterval $[0,\pi/2]$ the pulse vanishes and the system is the free oscillator; define the **free rotation**

$$R_0:\mathbb R^2\to\mathbb R^2,\qquad R_0(q,p):=(p,-q),$$

which is the time-$\pi/2$ solution operator of $q'=p$, $p'=-q$: the map $t\mapsto(q_0\cos t+p_0\sin t,\,-q_0\sin t+p_0\cos t)$ solves the free system by the derivative identities of sine and cosine ([[thm-sine-and-cosine-derivatives]]) and has initial data $(q_0,p_0)$. Moreover $\cos(\pi/2)=0$ by the zero-set statement ([[thm-sine-cosine-zero-sets-and-fundamental-period]]), $\sin(\pi/2)>0$ by positivity on $(0,\pi)$ ([[cor-pi-is-the-first-positive-sine-zero]]), and $\sin^2(\pi/2)+\cos^2(\pi/2)=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]), so $\sin(\pi/2)=1$. Uniqueness of solutions then identifies the endpoint map with $R_0$.

For $s\in[0,1]$ the **rescaled pulse equation** is

$$q_s=\delta\,p,\qquad p_s=-\delta\,q+w(s)\,(q^2-a),$$

obtained from the second half of the period by the substitution $s=(t-\pi/2)/\delta$. For each initial state $z=(q,p)\in\mathbb R^2$, let $J_z^\delta$ be the open maximal interval containing $0$ of its solution to the rescaled equation. Define

$$D_\delta:=\{z\in\mathbb R^2:[0,1]\subseteq J_z^\delta\},\qquad K_\delta:D_\delta\to\mathbb R^2,\quad K_\delta(z):=(q(1),p(1)),$$

where $(q(s),p(s))$ is the unique maximal solution with $(q,p)(0)=z$ ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]). For the original $P$-periodic system, let $J_z$ be the maximal existence interval of the solution through $z$ at time $0$, and set $D_P:=\{z\in\mathbb R^2:[0,P]\subseteq J_z\}$. Define the stroboscopic map by

$$G_\delta:D_{G_\delta}\to\mathbb R^2,\qquad D_{G_\delta}:=\{z\in\mathbb R^2:R_0(z)\in D_\delta\},\qquad G_\delta(z):=K_\delta(R_0(z)).$$

The change of time variable $s=(t-\pi/2)/\delta$ identifies solutions on $[\pi/2,P]$ with solutions of the rescaled equation on $[0,1]$. Concatenating with the unique free solution on $[0,\pi/2]$ shows $D_{G_\delta}=D_P$ and $G_\delta=\theta_P$ there, where $\theta_P:D_P\to\mathbb R^2$ is the stroboscopic map of [[def-cm-stroboscopic-map]]. Conversely, restricting any solution through time $P$ to the pulse interval and applying the same change of variables gives a solution of the rescaled equation through $s=1$; uniqueness identifies both maps.

## Remarks

- The phase variables $q,p$ are dimensionless in this definition; no units, masses or measured quantities occur. The parameter $a$ and the pulse data are pure numbers, and the entire construction is a mathematical model of a periodically forced one-degree-of-freedom oscillator.

- The pulse has width $\delta$ and total strength $\int\beta_\delta=1$, so $\beta_\delta$ converges to a formal unit impulse as $\delta\to0$; no meaning is assigned to the limit $\delta=0$ as a physical force. The $\delta=0$ endpoint map is computed on the companion page cm-math-chaos-examples by explicit integration and used only as a comparison object.

- Nothing in this definition asserts that $G_\delta$ is smooth, invertible, symplectic, close to $F$, or defined on any particular set; these are the contents of [[lem-rescaled-pulse-map-is-c-one-close-to-kick]] and [[thm-smooth-fixed-mass-mechanical-horseshoe]].
