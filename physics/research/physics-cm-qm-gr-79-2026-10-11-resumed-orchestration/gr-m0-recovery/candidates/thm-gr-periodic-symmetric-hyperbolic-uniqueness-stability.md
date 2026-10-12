---
id: thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability
kind: theorem
title: "Uniqueness of classical solutions and continuous dependence in H^{s-1} for periodic symmetric hyperbolic systems"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, def-gr-periodic-symmetric-hyperbolic-system, lem-gr-positive-definite-symmetric-matrix-bounds, lem-gr-smooth-composition-and-commutator-estimates, thm-gr-periodic-symmetric-hyperbolic-existence, lem-gr-galerkin-time-derivative-bound, thm-gronwall-integral-inequality, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice, lem-gr-periodic-sobolev-algebra]
dependency_roles:
  lem-gr-periodic-sobolev-algebra: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  lem-gr-galerkin-time-derivative-bound: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $s\ge5$, let $A^\mu,B$ be a periodic symmetric
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
with $C'=C'(A^\mu,B,K',R,s)$, the fixed compact coefficient time slab containing $[-T,T]$ being included in the coefficient data.

## Facts & Assumptions

**Given:** Countable Choice, the stated coefficient family, data and classical solution bounds; in (a) fix any compact segment joining $0$ to a point of $J$, and in (b) use the compact coefficient time slab containing $[-T,T]$ from the existence construction.

[L1] Subtraction gives $a\partial_t w+a_i\partial_i w=f$, with $a=A^0(u)$, $a_i=A^i(u)$ and $f$ as defined below ([[def-gr-periodic-symmetric-hyperbolic-system]]).

[L2] $a_0 I\le a\le b_0 I$ uniformly on these compact coefficient sets ([[lem-gr-positive-definite-symmetric-matrix-bounds]]).

[L3] Homogeneous composition, difference, multiplier and commutator estimates hold on arbitrary compact value sets ([[lem-gr-smooth-composition-and-commutator-estimates]]).

[L4] The equation gives $\partial_t v=-(A^0(v))^{-1}(A^i(v)\partial_i v+B(v))$, and likewise for $u$. Composition and products bound these derivatives in $H^{s-1}$; this applies to every stated classical solution, not only the existence construction ([[lem-gr-smooth-composition-and-commutator-estimates]], [[lem-gr-positive-definite-symmetric-matrix-bounds]]).

[L5] Integral Gronwall applies in either oriented time direction ([[thm-gronwall-integral-inequality]]).

## Proof

**Proof technique:** direct.

1.1 (Homogeneous forcing.) Put $r=s-1$ and $w=u-v$, and define $f=-(A^0(u)-A^0(v))\partial_tv-(A^i(u)-A^i(v))\partial_i v-B(u)+B(v)$. The difference bound of [L3] and the $H^r$ algebra bound give $\|f\|_{H^r}\le C\|w\|_{H^r}$, since the derivatives of $v$ have bounded $H^r$ norms by [L4]. Smooth cutoff extension in the proved supplier gives these estimates on the actual compact value sets without assuming convexity. Total coefficient derivatives $\dot a=A_t^0(u)+A_u^0(u)\partial_tu$ and $\partial_i a_i$ are bounded in $L^\infty$ by those same solution bounds. [L1, L3, L4, algebra]


1.2 ($L^2$ uniqueness for all stated classical solutions.) Set $E_0(t)=\int w^{\mathsf T}a w$. Symmetry and integration by parts give $E_0'=\int w^{\mathsf T}(\dot a+\partial_i a_i)w+2\int w^{\mathsf T}f$. Pointwise coefficient Lipschitz bounds give $|f|\le C|w|$, since $\partial_tv$ and $\partial_i v$ are bounded in $L^\infty$. Thus $|E_0'|\le CE_0$. If $w(0)=0$, Gronwall on either oriented segment from $0$ to $t$ gives $E_0(t)=0$. As $t\in J$ was arbitrary, this proves (a). [L1, L2, L3, L4, L5, algebra]

2.1 (Homogeneous difference time derivative.) Invert $a$ in [L1]. Multiplier bounds at order $r-1$, the forcing estimate of step 1.1 and $\|\partial_iw\|_{H^{r-1}}\le\|w\|_{H^r}$ give $\|\partial_tw\|_{H^{r-1}}\le C\|w\|_{H^r}$. [step 1.1, L1, L2, L3, algebra]

3.1 (Order-$r$ difference energy.) Put $E=\sum_{|\alpha|\le r}\int(D^\alpha w)^{\mathsf T}aD^\alpha w$, so $a_0\|w\|_{H^r}^2\le E\le b_0\|w\|_{H^r}^2$. Differentiating [L1] gives $a\partial_tD^\alpha w+a_i\partial_iD^\alpha w=D^\alpha f-[D^\alpha,a]\partial_tw-[D^\alpha,a_i]\partial_iw$. After integration by parts the energy derivative consists of the $\dot a+\partial_i a_i$ quadratic terms and twice the pairings with these three right-side terms. Step 1.1 bounds the quadratic and forcing terms by $C\|w\|_{H^r}^2$. Homogeneous commutators from [L3], together with step 2.1, bound the time commutators by the same expression. Spatial commutators also have that bound since $\|\partial_iw\|_{H^{r-1}}\le\|w\|_{H^r}$. Therefore $|E'|\le CE$. The identity is valid in integral form at the stated regularity: $w,\partial_tw\in L^\infty H^r$, and $\partial_tw$ is strongly measurable since its finite Fourier projections are continuous and converge pointwise in $H^r$. Its bounded norm makes it Bochner integrable; coefficientwise integration identifies $w(t)-w(t')$ with its integral. Thus $w$ is absolutely continuous into $H^r$. Spatial Fourier approximation justifies the integrations by parts and commutator identities by density; all their terms converge in the required integral pairings by the bounds already proved. [step 1.1, step 2.1, L1, L2, L3, L4, algebra]

4.1 (Continuous dependence.) Gronwall in both directions gives $E(t)\le E(0)e^{C|t|}$. Equivalence yields $\|w(t)\|_{H^r}\le\sqrt{b_0/a_0}\,e^{C|t|/2}\|w(0)\|_{H^r}$. Choose $C'$ to dominate $\sqrt{b_0/a_0}$ and $C/2$. This proves (b). [step 3.1, L2, L5, algebra] ∎
