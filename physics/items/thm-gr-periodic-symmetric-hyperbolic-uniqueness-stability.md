---
id: thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability
kind: theorem
title: "Uniqueness of classical solutions and continuous dependence in H^{s-1}
  for periodic symmetric hyperbolic systems"
status: published
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  [
    lem-gr-galerkin-projection-properties,
    def-gr-periodic-torus-and-sobolev-spaces,
    def-gr-periodic-symmetric-hyperbolic-system,
    lem-gr-positive-definite-symmetric-matrix-bounds,
    lem-gr-smooth-composition-and-commutator-estimates,
    thm-gr-periodic-symmetric-hyperbolic-existence,
    lem-gr-galerkin-time-derivative-bound,
    thm-gronwall-integral-inequality,
    def-ck-and-multi-index-notation-in-several-variables,
    def-countable-choice,
    lem-gr-periodic-sobolev-algebra
  ]
dependency_roles:
  lem-gr-galerkin-projection-properties: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  lem-gr-galerkin-time-derivative-bound: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-gr-periodic-sobolev-algebra: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein
        Equations, Living Reviews in Relativity 3 (2000), article 1
        (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the
        definition of a quasilinear symmetric hyperbolic system, the
        finite-dimensional mollifier approximation (3.1) solved by ODE theory,
        the energy and Moser product/composition estimates, the higher-order
        energy inequality, uniqueness, the Rellich/Ascoli compactness step and
        the passage to a classical solution, with Remarks 1-6 on smooth
        persistence, the continuation criterion, Cauchy stability and the
        non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $s\ge5$ be an integer, let $A^\mu,B$ be a periodic symmetric
hyperbolic coefficient family on the open set $O\subseteq\mathbb R^m$, let
$K\subseteq O$ be compact and $R\ge0$.

**(a) Uniqueness.** Let $J\ni0$ be an open interval and let
$u,v:J\to H^s(\mathbb T^3_{2\pi};\mathbb R^m)$ be classical solutions of
$(\star)$ in the sense of clause (d) of
[[def-gr-periodic-symmetric-hyperbolic-system]], both taking values in $K$ and
satisfying $\sup_{t\in J}\|u(t)\|_{H^s}\le R$, $\sup_{t\in J}\|v(t)\|_{H^s}\le R$.
If $u(0)=v(0)$, then $u=v$ on $J$.

**(b) Continuous dependence.** Let $K'\subseteq O$ be compact with
$K\subseteq\operatorname{int}K'$ and let $T>0$ be a time for which the existence
theorem [[thm-gr-periodic-symmetric-hyperbolic-existence]] produces solutions
from every datum with values in $K$ and norm at most $R$, with values in $K'$
and the bounds $C(1+R)$ of that theorem. Then for all such data $u_0,v_0$ with
solutions $u,v$
$$\|u(t)-v(t)\|_{H^{s-1}}\le C'\,e^{C'|t|}\,\|u_0-v_0\|_{H^{s-1}}\qquad(|t|<T),$$
with $C'=C'(A^\mu,B,K,K',R,s)$, the fixed compact coefficient time slab containing $[-T,T]$ being included in the coefficient data.

## Facts & Assumptions

**Given:** Countable Choice, the stated coefficient family, data and classical solution bounds; in (a) fix any compact segment joining $0$ to a point of $J$, and in (b) use the compact coefficient time slab containing $[-T,T]$ from the existence construction.

[L1] Subtraction gives $a\partial_t w+a_i\partial_i w=f$, with $a=A^0(u)$, $a_i=A^i(u)$ and $f$ as defined below ([[def-gr-periodic-symmetric-hyperbolic-system]]).

[L2] $a_0 I\le a\le b_0 I$ uniformly on these compact coefficient sets ([[lem-gr-positive-definite-symmetric-matrix-bounds]]).

[L3] Homogeneous composition, difference, multiplier and commutator estimates hold on arbitrary compact value sets ([[lem-gr-smooth-composition-and-commutator-estimates]]).

[L4] The equation gives $\partial_t v=-(A^0(v))^{-1}(A^i(v)\partial_i v+B(v))$, and likewise for $u$. Composition and products bound these derivatives in $H^{s-1}$; this applies to every stated classical solution, not only the existence construction ([[lem-gr-smooth-composition-and-commutator-estimates]], [[lem-gr-positive-definite-symmetric-matrix-bounds]]).

[L5] Integral Gronwall applies in either oriented time direction ([[thm-gronwall-integral-inequality]]).

[L6] Fourier projections are self-adjoint, commute with derivatives and satisfy the uniform one-order tail bound ([[lem-gr-galerkin-projection-properties]]).



**Proof technique:** direct.

## Proof

1.1 (Homogeneous forcing and constant dependence.) In (a) the common solution norm bound is $R$; in (b) put $M=C_{\mathrm{ex}}(1+R)$, where $C_{\mathrm{ex}}$ is the bound furnished by [[thm-gr-periodic-symmetric-hyperbolic-existence]], and use $M$ as the norm radius in [L3], [L4]. Thus the comparison constants in (b) depend on $A^\mu,B,K,K',R,s$ and the fixed coefficient time slab, through $C_{\mathrm{ex}}$; no independence from $K$ is inferred. Put $r=s-1$ and $w=u-v$, and define $f=-(A^0(u)-A^0(v))\partial_tv-(A^i(u)-A^i(v))\partial_i v-B(u)+B(v)$. The difference bound of [L3] and the $H^r$ algebra bound give $\|f\|_{H^r}\le C\|w\|_{H^r}$, since the derivatives of $v$ have bounded $H^r$ norms by [L4]. Smooth cutoff extension in the proved supplier gives these estimates on the actual compact value sets without assuming convexity. Total coefficient derivatives $\dot a=A_t^0(u)+A_u^0(u)\partial_tu$ and $\partial_i a_i$ are bounded in $L^\infty$ by those same solution bounds. [L1, L3, L4, algebra]


1.2 ($L^2$ uniqueness for all stated classical solutions.) Set $E_0(t)=\int w^{\mathsf T}a w$. Symmetry and integration by parts give $E_0'=\int w^{\mathsf T}(\dot a+\partial_i a_i)w+2\int w^{\mathsf T}f$. Pointwise coefficient Lipschitz bounds give $|f|\le C|w|$, since $\partial_tv$ and $\partial_i v$ are bounded in $L^\infty$. Thus $|E_0'|\le CE_0$. If $w(0)=0$, Gronwall on either oriented segment from $0$ to $t$ gives $E_0(t)=0$. As $t\in J$ was arbitrary, this proves (a). [L1, L2, L3, L4, L5, algebra]

1.3 (Energy identity at the stated regularity.) Work on any compact time segment and define $E=\sum_{|\alpha|\le r}\int(D^\alpha w)^{\mathsf T}aD^\alpha w$. Put $w_N=P_Nw$, $h=\partial_tw$, and $y_\alpha=D^\alpha w$, $h_\alpha=D^\alpha h$. Classical $C^1$ regularity makes each Fourier coefficient $C^1$ with derivative the coefficient of $h$, so $w_N$ is a $C^1$ finite-dimensional curve. The bounds $w\in H^{r+1}$ and $h\in H^r$ are uniform at every time: the former is assumed and the latter follows pointwise from the PDE and [L4]. The coefficients $a$ and $\dot a$ are continuous, with $a$ uniformly $C^1$ in space and $\dot a$ uniformly bounded. Let $E_N=\sum_{|\alpha|\le r}\int(P_Ny_\alpha)^{\mathsf T}a(P_Ny_\alpha)$. The tail bound [L6] gives uniform $L^2$ convergence $P_Ny_\alpha\to y_\alpha$ at rate $O((1+N^2)^{-1/2})$ since $y_\alpha\in H^1$ uniformly. Hence $E_N\to E$ uniformly. Finite-dimensional differentiation gives $E_N'=\sum_\alpha[2\langle P_Nh_\alpha,aP_Ny_\alpha\rangle+\langle P_Ny_\alpha,\dot aP_Ny_\alpha\rangle]$. By self-adjointness the first pairing equals $\langle h_\alpha,P_N(aP_Ny_\alpha)\rangle$. Now $ay_\alpha$ has uniformly bounded $H^1$ norm by the Leibniz rule, and $\|P_N(aP_Ny_\alpha)-ay_\alpha\|_2\le\|a\|_\infty\|P_Ny_\alpha-y_\alpha\|_2+\|(P_N-I)(ay_\alpha)\|_2\to0$ uniformly by [L6]. The quadratic terms also converge uniformly. Thus $E_N'$ converges uniformly to $G=\sum_\alpha[2\langle h_\alpha,ay_\alpha\rangle+\langle y_\alpha,\dot ay_\alpha\rangle]$. Integrating the scalar identities $E_N(t)-E_N(t')=\int_{t'}^tE_N'$ and passing uniformly to the limit gives $E(t)-E(t')=\int_{t'}^tG$; $G$ is continuous as a uniform limit of continuous functions. Therefore $E'=G$. The differentiated difference equation is an $L^2$ identity because $w\in H^{r+1}$ and $h\in H^r$; spatial integration by parts is justified by Fourier density and the $H^1$ bounds for $y_\alpha$. It may therefore be substituted into $G$ without additional time regularity assumptions. [L1, L3, L4, L6, algebra]

2.1 (Homogeneous difference time derivative.) Invert $a$ in [L1]. Multiplier bounds at order $r-1$, the forcing estimate of step 1.1 and $\|\partial_iw\|_{H^{r-1}}\le\|w\|_{H^r}$ give $\|\partial_tw\|_{H^{r-1}}\le C\|w\|_{H^r}$. [step 1.1, L1, L2, L3, algebra]

3.1 (Order-$r$ difference energy.) Put $E=\sum_{|\alpha|\le r}\int(D^\alpha w)^{\mathsf T}aD^\alpha w$, so $a_0\|w\|_{H^r}^2\le E\le b_0\|w\|_{H^r}^2$. Differentiating [L1] gives $a\partial_tD^\alpha w+a_i\partial_iD^\alpha w=D^\alpha f-[D^\alpha,a]\partial_tw-[D^\alpha,a_i]\partial_iw$. After integration by parts the energy derivative consists of the $\dot a+\partial_i a_i$ quadratic terms and twice the pairings with these three right-side terms. Step 1.1 bounds the quadratic and forcing terms by $C\|w\|_{H^r}^2$. Homogeneous commutators from [L3], together with step 2.1, bound the time commutators by the same expression. Spatial commutators also have that bound since $\|\partial_iw\|_{H^{r-1}}\le\|w\|_{H^r}$. Therefore $|E'|\le CE$. The energy identity is justified at this regularity by step 1.3. [step 1.1, step 2.1, step 1.3, L1, L2, L3, L4, algebra]

4.1 (Continuous dependence.) Gronwall in both directions gives $E(t)\le E(0)e^{C|t|}$. Equivalence yields $\|w(t)\|_{H^r}\le\sqrt{b_0/a_0}\,e^{C|t|/2}\|w(0)\|_{H^r}$. Choose $C'$ to dominate $\sqrt{b_0/a_0}$ and $C/2$. This proves (b). [step 1.3, step 3.1, L2, L5, algebra] ∎

