---
id: pthm-gr-plane-wave-tidal-detector-response
kind: physics-theorem
title: "Response of ideal test bodies and of the ideal two-body detector to a TT plane wave: free-fall worldlines, first-order relative acceleration and strain"
status: published
origin: session
domain: physics
dependency_level: 16
physical_scope: "Conditional model deduction inside the classical gravitational framework: a model spacetime R^4 with the small-amplitude TT plane-wave metric g(lambda) = eta + lambda h, the adopted clock and free-fall postulates, and ideal structureless test bodies whose worldlines are future timelike geodesics. The conclusions are the infinitesimal relative-acceleration law of a geodesic variation to first order in amplitude and the finite path length and strain of a prescribed chart-straight detector arm. The infinitesimal law is not a finite-pair acceleration claim, and the arm length is path-dependent rather than the shortest spatial distance. The exact-vacuum residual statement applies in the zero-source, Lambda = 0 branch and on nonempty compact sets in the stated chart-control regime. Excludes self-force, spin, finite body size, elasticity, internal resonances, detector noise, the propagation and readout of light, any measurement and any comparison with data; the conclusions are conditional model predictions, not empirical claims."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [post-gr-ideal-clocks-and-free-fall, post-gr-spacetime-and-classical-domain, def-gr-si-unit-and-coordinate-conventions, pthm-gr-free-fall-worldline-is-determined-by-initial-data, pthm-gr-tidal-comparison, pthm-gr-linearized-field-equations, thm-gr-jacobi-equation-and-geodesic-deviation, def-gr-jacobi-field-and-conjugate-instant, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-gr-metric-selected-connection, def-christoffel-symbols-of-an-affine-connection, def-geodesic-of-an-affine-connection, def-covariant-derivative-along-a-curve, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-plane-wave-perturbation, def-gr-wave-screen-and-tt-projection, def-gr-linearized-wave-regime-and-detector-coupling, thm-gr-tt-plane-wave-solutions, thm-gr-tt-plane-wave-curvature, def-gr-flat-linearized-perturbation, thm-gr-flat-linearized-curvature-and-gauge, def-gr-minkowski-model-and-inertial-chart, def-gr-smooth-covariant-two-tensor-field, def-gr-smooth-lorentzian-objects, def-causal-classification-of-lorentz-vectors, cor-taylor-lagrange-and-cauchy-remainders, def-rational-power, def-real-order, lem-of-square-positive, def-compact-space, thm-heine-cantor-metric, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-addition-formulas, thm-chain-rule, thm-algebra-of-derivatives, lem-gr-null-phase-coordinate]
dependency_roles:
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  post-gr-spacetime-and-classical-domain: physical-assumption
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  pthm-gr-free-fall-worldline-is-determined-by-initial-data: physical-result
  pthm-gr-tidal-comparison: physical-result
  pthm-gr-linearized-field-equations: physical-result
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  def-gr-jacobi-field-and-conjugate-instant: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-plane-wave-perturbation: mathematical-premise
  def-gr-wave-screen-and-tt-projection: mathematical-premise
  def-gr-linearized-wave-regime-and-detector-coupling: formulation-prerequisite
  thm-gr-tt-plane-wave-solutions: mathematical-premise
  thm-gr-tt-plane-wave-curvature: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  cor-taylor-lagrange-and-cauchy-remainders: mathematical-premise
  def-rational-power: mathematical-premise
  def-real-order: mathematical-premise
  lem-of-square-positive: mathematical-premise
  def-compact-space: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-gr-null-phase-coordinate: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.58)-(6.66): the geodesic deviation equation for slowly moving test particles, the component R^i_{00j} = (1/2) d_0^2 h^i_j and the oscillating separations for the + and x polarizations, printed pp. 152-153 (PDF pp. 159-160)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.2.2: the geodesic deviation equation d^2S^mu/dt^2 = (1/2) d^2h^mu_nu/dt^2 S^nu, the circle-to-ellipse deformation and the arm response L' = L(1 +/- H_+/2), printed pp. 212-215 (PDF pp. 219-222)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.3: the parallelly transported frame, the geodesic deviation equation (7.52)-(7.55) and the relative displacements caused by + and x polarized waves, printed pp. 79-81 (PDF pp. 80-82)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework postulates [[post-gr-spacetime-and-classical-domain]] and
[[post-gr-ideal-clocks-and-free-fall]] ([[def-gr-si-unit-and-coordinate-conventions]]).
The exact-vacuum residual statement in the Status below concerns the
source-free branch with $T=0$ and $\Lambda=0$.
Let $(M,g,N)=(\mathbb R^4,\eta,\partial_0)$ be the flat model with its inertial
chart, let $A_+,A_\times\in C^\infty(\mathbb R)$ be bounded with
$M_0:=\sup_{\mathbb R}\max\{|A_+|,|A_\times|\}$, let $h$ be the TT planar
perturbation of [[def-gr-plane-wave-perturbation]] clause (b) with these
amplitudes, and let $\lambda$ be a real parameter; when $M_0>0$ assume
$|\lambda|<1/(2M_0)$, while when $M_0=0$ the perturbation vanishes and all
statements below are trivial. Let $g(\lambda)=\eta+\lambda h$ be the
resulting smooth Lorentzian metric on $\mathbb R^4$ with time orientation
$\partial_0$, and let the model be the framework model whose spacetime is
$(\mathbb R^4,g(\lambda),\partial_0)$; write $u(x)=x^0-x^3$. Let $x_0\in
\mathbb R^3$ be a reference point and $\delta\ne0$ a spatial separation
vector, and let $\gamma_r(s):=(cs,\,x_0+r\delta)$, $r\in\mathbb R$, be the
smooth family of straight coordinate curves, with dimensionless family
parameter $r$. Put $u(s):=cs-x_0^3$. Then:

**(a) Free-fall worldlines and mathematical continuations.** For every $r$ the all-real curve $\gamma_r:\mathbb R\to M$ is a future timelike geodesic of the metric-selected connection of $g(\lambda)$ with $g(\lambda)(\gamma_r',\gamma_r')=-c^2$, parametrized by its proper time $s$. By clause (ii) of [[post-gr-ideal-clocks-and-free-fall]] and [[pthm-gr-free-fall-worldline-is-determined-by-initial-data]], a physical ideal freely falling massive test body released with the corresponding initial data has a history that is a restriction of $\gamma_r$ to its actual proper-time domain. The all-real curve is its unique maximal mathematical continuation; the postulate does not require the physical history to have that full domain. The smooth all-real family remains available for the mathematical geodesic variation. When such body histories are realized on a common parameter interval, the restricted family is a free-fall congruence in the sense of [[pthm-gr-tidal-comparison]] clause (a).

The geometric Jacobi and prescribed arm-length formulas below are defined on the full mathematical curves. Their physical interpretations apply on common domains where the corresponding body histories and detector data are defined.

**(b) Infinitesimal relative acceleration.** The field
$J:=\partial_r\gamma_r\big|_{r=0}=\delta^i\partial_i$ along $\gamma_0$ is
the deviation field of the free-fall family and satisfies the exact Jacobi
equation

$$D_s^2J=R\bigl(\gamma_0',J\bigr)\gamma_0' .$$

For each compact parameter interval $[-S,S]$ with $S>0$, if $M_0>0$ fix
$\lambda_S$ with $0<\lambda_S<1/(2M_0)$; if $M_0=0$, put $\lambda_S:=1$,
and then $h=0$ and the remainder below is zero. Its first-order expansion
in $\lambda$ is

$$D_s^2J=c^2\lambda\,\tfrac12\,\partial_0^2h^{i}{}_{j}\bigl(u(s)\bigr)\,\delta^j\,\partial_i+\rho_\lambda(s),\qquad \|\rho_\lambda(s)\|_{\mathrm E}\le C\lambda^2\quad\text{for }s\in[-S,S],\ |\lambda|\le\lambda_S,$$

where $\|V\|_{\mathrm E}:=(\sum_{\mu=0}^3|V^\mu|^2)^{1/2}$ is the Euclidean
norm of the inertial-chart components; the components of $\rho_\lambda$ have
units $\mathrm m\,\mathrm s^{-2}$, as does $D_s^2J$. The constant $C$ depends
on $S$, $\lambda_S$,
the reference point, $\delta$ and finitely many derivatives of $A_+,A_\times$,
but not on $\lambda$. In screen components
$(A_+''=d^2A_+/du^2$ etc.$)$ this reads

$$D_s^2J=\tfrac12c^2\lambda\Bigl(A_+''\delta^1+A_\times''\delta^2\Bigr)\partial_1+\tfrac12c^2\lambda\Bigl(A_\times''\delta^1-A_+''\delta^2\Bigr)\partial_2+\rho_\lambda(s),$$

with no first-order component in the $\partial_3$ direction. By
[[pthm-gr-tidal-comparison]] clause (b), $D_s^2J$ is the model's infinitesimal
relative four-acceleration for this geodesic variation, per unit family
parameter at $r=0$. It is the differential deviation law and is not the
acceleration of the finite pair $\gamma_0,\gamma_1$.

**(c) Finite detector-arm strain.** Let $L_\delta(s)$ and $S_\delta(s)$ be
the arm length and strain of [[def-gr-linearized-wave-regime-and-detector-coupling]]
clauses (b)-(c). For $q\in[0,1]$ put

$$a(s,q):=\frac{\delta^i\delta^j h_{ij}(cs,\,x_0+q\delta)}{|\delta|^2}=A_+\bigl(u(s)-q\delta^3\bigr)\bigl((n^1)^2-(n^2)^2\bigr)+2A_\times\bigl(u(s)-q\delta^3\bigr)n^1n^2,\qquad n:=\delta/|\delta|.$$

For every $s$ the exact finite-path response is

$$L_\delta(s)=|\delta|\int_0^1\sqrt{1+\lambda a(s,q)}\,dq,\qquad S_\delta(s)=\int_0^1\sqrt{1+\lambda a(s,q)}\,dq-1,$$

with the radicand positive for all $q\in[0,1]$; this positivity follows from
$|\lambda|<1/(2M_0)$ when $M_0>0$. Its first-order term is
$S^{(1)}_\delta(s)=\tfrac12\int_0^1a(s,q)\,dq$. If
$\sup_{q\in[0,1]}|\lambda a(s,q)|\le\tfrac12$, then

$$\left|S_\delta(s)-\tfrac12\lambda\int_0^1a(s,q)\,dq\right|\le\tfrac12\lambda^2\int_0^1a(s,q)^2\,dq.$$

If the arm lies in the screen, $n=(\cos\theta,\sin\theta,0)$ and
$\delta^3=0$, so the profile is constant along the arm and
$a(s,q)=A_+(u(s))\cos2\theta+A_\times(u(s))\sin2\theta$; in particular an
arm along $e_1$ sees $A_+$, an arm along $e_2$ sees $-A_+$, an arm along
$(e_1+e_2)/\sqrt2$ sees $A_\times$, and an arm along $e_3$ sees nothing.

**Status.** Clauses (a)-(c) are conditional deductions from the adopted
postulates for the model spacetime $(\mathbb R^4,g(\lambda),\partial_0)$ and
for ideal test bodies and an ideal detector. In the source-free branch with
$\Lambda=0$, the residual in the exact vacuum equation $G_{ab}=0$ for
$g(\lambda)$ is of order $\lambda^2$
([[thm-gr-tt-plane-wave-solutions]] clause (c)); consequently
the field-law interpretation is a prediction of the linearized model. No observation,
apparatus, noise model, light-propagation model or statistical statement is
made, and the item contains no empirical premise.
## Facts & Assumptions

**Given:** The framework postulates, the flat model with inertial chart, bounded TT profiles $A_+,A_\times$, an amplitude parameter $\lambda$ with $|\lambda|<1/(2M_0)$ when $M_0>0$ (with $h=0$ when $M_0=0$), the metric family $g(\lambda)=\eta+\lambda h$, a reference point $x_0$, a spatial separation vector $\delta\ne0$, and the curves $\gamma_r(s)=(cs,x_0+r\delta)$.

[A1] The model's ideal freely falling massive test body moves along a future timelike geodesic of the metric-selected connection with $g(U,U)=-c^2$, and its worldline on its actual domain is the restriction of the unique maximal geodesic determined by its initial event and four-velocity; ideal clocks read the proper time of their worldlines ([[post-gr-ideal-clocks-and-free-fall]] clauses (i)-(ii), [[pthm-gr-free-fall-worldline-is-determined-by-initial-data]], [[lem-gr-proper-time-reparametrization-and-four-velocity]], [[def-gr-timelike-worldline-and-proper-time]]).

[A2] The metric-selected connection of $\eta+\lambda h$ is the unique torsion-free metric-compatible connection; its Christoffel symbols are $\Gamma^\mu{}_{ab}=\tfrac12g^{\mu\rho}(\partial_ag_{\rho b}+\partial_bg_{\rho a}-\partial_\rho g_{ab})$ in the chart, and a smooth curve is a geodesic with affine parameter $s$ exactly when $\ddot x^\mu+\Gamma^\mu{}_{ab}\dot x^a\dot x^b=0$ ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-christoffel-symbols-of-an-affine-connection]], [[def-geodesic-of-an-affine-connection]]).

[L1] The metric $g(\lambda)$ has components $g_{00}=-1$, $g_{0i}=0$ and $g_{ij}=\delta_{ij}+\lambda h_{ij}$ with $h$ supported on the $11,22,12,21$ entries and profiles bounded by $M_0$; it is a smooth Lorentzian metric with time orientation $\partial_0$ if $M_0>0$ and $|\lambda|<1/(2M_0)$, while for $M_0=0$ it is exactly $\eta$ ([[thm-gr-tt-plane-wave-solutions]] clause (a), [[def-gr-plane-wave-perturbation]] clause (b), [[def-gr-smooth-lorentzian-objects]], [[def-causal-classification-of-lorentz-vectors]]).

[L2] For a smooth two-parameter family of geodesics $F(s,r)$ with affine parameter $s$, the variation field $J=\partial_rF$ satisfies $D_sJ=D_rT$ and the exact geodesic deviation equation $D_s^2J=R(T,J)T$ with $T=\partial_sF$; for proper-time parametrization $T=U$ with $g(U,U)=-c^2$ (for the unit affine length parameter $\sigma=cs$, the tangent is $U/c$), and the model's relative four-acceleration of the free-fall congruence is $D_t^2J=R(U,J)U$ ([[thm-gr-jacobi-equation-and-geodesic-deviation]] clauses (a)-(b), [[def-gr-jacobi-field-and-conjugate-instant]], [[pthm-gr-tidal-comparison]] clauses (a)-(b), [[def-covariant-derivative-along-a-curve]]).

[L3] For a planar TT perturbation, $\partial_c\partial_dh_{ab}=F''_{ab}(u)n_cn_d$ with $n=\partial u$, and the first-order curvature satisfies $R^{(1)i}{}_{00j}=\tfrac12F''{}^i{}_j=\tfrac12\partial_0^2h^i{}_j$ ([[lem-gr-null-phase-coordinate]] clause (c), [[thm-gr-tt-plane-wave-curvature]] clause (c)).

[L4] The Christoffel family has the expansion $\Gamma^\mu{}_{ab}(\lambda,p)=\lambda\Gamma^{(1)\mu}{}_{ab}(p)+O(\lambda^2)$ with the first-order coefficient $\Gamma^{(1)\mu}{}_{ab}=\tfrac12\eta^{\mu\rho}(\partial_ah_{\rho b}+\partial_bh_{\rho a}-\partial_\rho h_{ab})$ and a quadratic remainder bounded on compact parameter sets by a Lagrange estimate; $\Gamma(0)=0$ ([[thm-gr-flat-linearized-curvature-and-gauge]] clauses (a), (e), [[cor-taylor-lagrange-and-cauchy-remainders]], [[def-gr-flat-linearized-perturbation]] clauses (b)-(c)). Also, on a compact parameter segment and a compact set of the curves, $Q^\mu{}_a(\lambda,p):=\partial_0\Gamma^\mu{}_{0a}(\lambda,p)$ is smooth in $(\lambda,p)$, satisfies $Q(0,p)=0$ and $\partial_\lambda Q(0,p)=\partial_0\Gamma^{(1)\mu}{}_{0a}(p)$; applying Taylor's estimate to $Q$ itself gives $\partial_0\Gamma=\lambda\partial_0\Gamma^{(1)}+O(\lambda^2)$ uniformly there. Smoothness follows from the explicit metric formula, matrix inversion on the Lorentzian domain and smoothness of the profiles ([[thm-gr-flat-linearized-curvature-and-gauge]] clauses (a), (e), [[cor-taylor-lagrange-and-cauchy-remainders]]).

[L5] A continuous real function on a nonempty compact set is bounded: its relatively open sublevel sets $\{|f|<m\}$, for positive integers $m$, cover the set and have a finite subcover ([[def-compact-space]]). For $|x|\le\tfrac12$, put $r=\sqrt{1+x}>0$. Since $(r-1)(r+1)=x$, one has $r-1-x/2=-x^2/(2(r+1)^2)$, hence $|\sqrt{1+x}-1-x/2|\le x^2/2$. Squares are nonnegative, and $2|ab|\le a^2+b^2$ follows from $(|a|-|b|)^2\ge0$ ([[lem-of-square-positive]], [[def-real-order]], [[def-rational-power]]).

[L6] The finite detector arm is the spatial coordinate segment $\sigma_s(q)=(cs,x_0+q\delta)$, $q\in[0,1]$, and its metric length and strain are the path integral of clause (c) of [[def-gr-linearized-wave-regime-and-detector-coupling]]; for TT profiles its integrand is $|\delta|\sqrt{1+\lambda a(s,q)}$, with $a(s,q)$ as in (c). The addition formulas give $\cos2\theta=\cos^2\theta-\sin^2\theta$ and $\sin2\theta=2\sin\theta\cos\theta$ ([[def-gr-linearized-wave-regime-and-detector-coupling]] clauses (b)-(c), [[def-gr-wave-screen-and-tt-projection]], [[thm-sine-and-cosine-addition-formulas]]).

## Proof

**Proof technique:** direct; compute the two Christoffel symbols needed for the geodesic equation, apply the geodesic deviation theorem to the exact family, expand the covariant acceleration in the amplitude and evaluate the strain exactly.

1.1 (The two Christoffel symbols.) By [A2] the symbols of $g(\lambda)$ are $\Gamma^\mu{}_{ab}=\tfrac12g^{\mu\rho}(\partial_ag_{\rho b}+\partial_bg_{\rho a}-\partial_\rho g_{ab})$, and by [L1] the components $g_{00}=-1$ and $g_{0i}=0$ are constant, while $g_{ij}$ depends only on $u$. Hence $$\Gamma^0{}_{00}=\tfrac12g^{0\rho}(2\partial_0g_{\rho0}-\partial_\rho g_{00})=0,\qquad \Gamma^i{}_{00}=\tfrac12g^{i\rho}(2\partial_0g_{\rho0}-\partial_\rho g_{00})=\tfrac12g^{ij}(2\partial_0g_{0j}-\partial_jg_{00})=0,$$ because $\partial_0g_{0j}=0$ and $\partial_jg_{00}=0$. This proves (a) at the level of the geodesic equation: for $\gamma_r$ one has $\dot x^0=c$ constant and $\dot x^i=0$, so the geodesic equation $\ddot x^\mu+\Gamma^\mu{}_{ab}\dot x^a\dot x^b=0$ reduces to $\Gamma^\mu{}_{00}c^2=0$. [A2, L1, algebra]

1.2 (Timelike, future-directed and proper time.) For $\gamma_r$, $g(\lambda)(\gamma_r',\gamma_r')=c^2g_{00}(\lambda)=-c^2<0$ by [L1], and $g(\lambda)(\gamma_r',\partial_0)=-c<0$, so the curve is future timelike and, by the proper-time definition, $d\tau=c^{-1}\sqrt{c^2}\,ds=ds$; hence $s$ is proper time up to an additive constant and the physical four-velocity is $\gamma_r'=c\partial_0$. The displayed geodesic is defined for every real $s$. By [A1] and the determination theorem, a physical freely falling test body with its release data follows its restriction to the body's actual proper-time interval. Since the displayed curve already has domain $\mathbb R$, it is the unique maximal mathematical continuation; no maximal physical lifetime is inferred. This completes (a). [A1, L1, algebra]

2.1 (Exact deviation equation.) The map $F(s,r):=\gamma_r(s)=(cs,x_0+r\delta)$ is smooth on $\mathbb R\times\mathbb R$ and each $s\mapsto F(s,r)$ is a geodesic with affine parameter $s$ by step 1.1; its variation field at $r=0$ is $J=\partial_rF=\delta^i\partial_i$, a field with constant components. By [L2], $D_sJ=D_rT$ and $D_s^2J=R(T,J)T$ with $T=\gamma_0'=c\partial_0$; this is the exact Jacobi equation and the model's infinitesimal relative four-acceleration per unit family parameter at the reference curve, not the acceleration of a finite pair. [L2, step 1.1, given]

2.2 (First-order expansion of the acceleration.) By [A2] and $\gamma_0'=c\partial_0$ (step 1.2), the covariant derivative of the constant-component field $J=\delta^i\partial_i$ is $D_sJ=\nabla_{c\partial_0}(\delta^i\partial_i)=c\,\delta^i\Gamma^\mu{}_{0i}\partial_\mu$, and hence $$D_s^2J=\nabla_{c\partial_0}\bigl(c\delta^i\Gamma^\mu{}_{0i}\partial_\mu\bigr)=c^2\delta^i\bigl(\partial_0\Gamma^\mu{}_{0i}\bigr)\partial_\mu+c^2\delta^i\Gamma^\nu{}_{0i}\Gamma^\mu{}_{0\nu}\partial_\mu .$$By [L4], both $\Gamma^\mu{}_{0i}=\lambda\Gamma^{(1)\mu}{}_{0i}+O(\lambda^2)$ and the separately Taylor-expanded derivative $\partial_0\Gamma^\mu{}_{0i}=\lambda\partial_0\Gamma^{(1)\mu}{}_{0i}+O(\lambda^2)$ hold uniformly on the compact curve segment for $|\lambda|\le\lambda_S$; hence $\Gamma\Gamma=O(\lambda^2)$ and $$D_s^2J=c^2\lambda\,\delta^i\partial_0\Gamma^{(1)\mu}{}_{0i}\partial_\mu+\rho_\lambda(s),\qquad\|\rho_\lambda(s)\|_{\mathrm E}\le C_1\lambda^2\quad(|s|\le S).$$By [L4], $\Gamma^{(1)\mu}{}_{0i}=\tfrac12\eta^{\mu\rho}(\partial_0h_{\rho i}+\partial_ih_{0\rho}-\partial_\rho h_{0i})$, and the last two terms vanish because $h_{0\rho}=0$ for every $\rho$ by the TT condition; hence $\Gamma^{(1)\mu}{}_{0i}=\tfrac12\partial_0h^\mu{}_i$ and $\partial_0\Gamma^{(1)\mu}{}_{0i}=\tfrac12\partial_0^2h^\mu{}_i$, so $$D_s^2J=\tfrac12c^2\lambda\,\partial_0^2h^\mu{}_i\delta^i\partial_\mu+\rho_\lambda(s).$$This is the displayed expansion in coordinate form; for the screen components use the profile $F$ with $F''_{1j}\delta^j=A_+''\delta^1+A_\times''\delta^2$ and $F''_{2j}\delta^j=A_\times''\delta^1-A_+''\delta^2$ and $F''_{0j}=F''_{3j}=0$ ([[def-gr-plane-wave-perturbation]] clause (b)). [A2, L3, L4, step 1.2, given, algebra]

2.3 (Exact finite arm length.) For $q\in[0,1]$ the connector $\sigma_s(q)=(cs,x_0+q\delta)$ has tangent $\dot\sigma_s(q)=\delta^i\partial_i$. By [L1] and the definition of $a(s,q)$ in clause (c), $$g(\lambda)_{\sigma_s(q)}(\dot\sigma_s(q),\dot\sigma_s(q))=\delta^i\delta^j(\delta_{ij}+\lambda h_{ij}(cs,x_0+q\delta))=|\delta|^2(1+\lambda a(s,q)).$$The TT profile gives $\delta^i\delta^jh_{ij}=A_+(u-q\delta^3)((\delta^1)^2-(\delta^2)^2)+2A_\times(u-q\delta^3)\delta^1\delta^2$, whose absolute value is at most $2M_0((\delta^1)^2+(\delta^2)^2)\le2M_0|\delta|^2$ by $2|ab|\le a^2+b^2$ in [L5]. Thus the radicand is positive for $|\lambda|<1/(2M_0)$ when $M_0>0$. Integrating its nonnegative square root in $q$ and using [L6] gives the exact formulas for $L_\delta$ and $S_\delta$. If $\delta^3=0$, then $a(s,q)$ is constant in $q$; for an arm in the screen write $n=(\cos\theta,\sin\theta,0)$ and use [L6] to obtain $a=A_+(u(s))\cos2\theta+A_\times(u(s))\sin2\theta$. [L1, L5, L6, step 1.2, algebra]

3.1 (First-order strain.) For each $q\in[0,1]$ apply [L5] with $x=\lambda a(s,q)$; when $\sup_q|\lambda a(s,q)|\le\tfrac12$, this gives $|\sqrt{1+\lambda a(s,q)}-1-\tfrac12\lambda a(s,q)|\le\tfrac12\lambda^2a(s,q)^2$. Integrating over $q$ and using the triangle inequality proves $\left|S_\delta(s)-\tfrac12\lambda\int_0^1a(s,q)\,dq\right|\le\tfrac12\lambda^2\int_0^1a(s,q)^2\,dq$, so $S^{(1)}_\delta(s)=\tfrac12\int_0^1a(s,q)\,dq$ is the first-order coefficient. This proves (c). [L5, step 2.3, algebra]

3.2 (Consistency with the curvature identity.) The right-hand side of the exact equation of step 2.1 is $c^2R^\mu{}_{00a}\delta^a\partial_\mu$; by [L3] its first-order coefficient is $c^2\lambda\cdot\tfrac12\partial_0^2h^\mu{}_a\delta^a$, in agreement with step 2.2. This is a check of the conventions; the relative-acceleration content of (b) is the direct computation of step 2.2. [L3, step 2.1, step 2.2, algebra]

4.1 (Status and conclusion.) Steps 1.1-3.2 derive clauses (a)-(c) from the adopted postulates for the model spacetime and the cited mathematics; the only physical inputs are the clock and free-fall rules, and the only metric input is the explicit TT plane-wave family. For each nonempty compact $K$ and length scale $L$, smoothness gives $B_K(h)<\infty$, so sufficiently small $|\lambda|$ satisfies $|\lambda|B_K(h)\le1/16$ and the quadratic residual estimate for the source-free, $\Lambda=0$ branch of [[pthm-gr-linearized-field-equations]] clause (d) applies. The displayed relative acceleration and strain remain predictions of the model, not exact solution properties; no observation is used or predicted in the empirical sense. [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, A1] ∎

## Remarks

- **What an observer "feels".** Clause (b) shows that a single freely falling test body has vanishing relative acceleration to zeroth order — the model's free-fall rule assigns it a geodesic and predicts no local force on it — while the *relative* acceleration of two nearby bodies is first order in the amplitude and proportional to the second derivative of the profile; this is the precise content of the familiar statement that a passing wave is felt only through relative motion.

- **No real detector is modelled.** Nothing here models light bouncing in an arm, elastic response, readout noise or calibration; the "strain function" is the ideal path-length ratio of clause (c) of [[def-gr-linearized-wave-regime-and-detector-coupling]], and its identification with any measured signal would require an apparatus model, empirical premises with uncertainties and a statistical analysis, none of which is supplied.
