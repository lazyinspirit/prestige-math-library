---
id: ex-tgr-flrw-no-killing-equilibrium
kind: example
title: No massive Killing equilibrium in a spatially flat expanding FLRW metric
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
deps: [lem-tgr-isometry-natural-tensor-invariance, lem-tgr-mass-shell-polynomial-rigidity, thm-tgr-massive-juttner-stationarity, def-gr-smooth-lorentzian-objects, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor, def-countable-choice]
dependency_roles:
  lem-tgr-isometry-natural-tensor-invariance: mathematical-premise
  lem-tgr-mass-shell-polynomial-rigidity: mathematical-premise
  thm-tgr-massive-juttner-stationarity: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §VIII"
      url: "https://arxiv.org/pdf/2106.09235"
    - title: "David Tong, General Relativity, full Cambridge Part III lecture notes, §4.3.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
---

## Example

Let $L_0>0$ be a length and take
$O=(0,\infty)\times\mathbb R^3$ with coordinates $(s,x^1,x^2,x^3)$, where
$s$ and $x^i$ have length units. Give $O$ the time-oriented Lorentzian metric
of signature $(-,+,+,+)$
$$g=-ds^2+a(s)^2\delta_{ij}dx^i dx^j,\qquad a(s):=s/L_0,$$
with future direction increasing $s$. This is the spatially flat FLRW
geometry with the scale factor explicitly fixed to $a(s)=s/L_0$.

(a) The scalar curvature, using the convention of
[[def-gr-curvature-tensor-and-derived-tensors]], is $S(s)=6/s^2$. Consequently
no nonempty open subset of $O$ admits a timelike Killing vector field.

(b) By [[thm-tgr-massive-juttner-stationarity]], the specified normalizable
massive exponential ansatz has no stationary state on any nonempty open
subset of $O$.

(c) Define the **future null fiber** and its **total future null shell** over $O$ by
$$\mathcal H^+_{0,x}:=\{P\in T_xO:P\ne0,\ g_x(P,P)=0,\ g_x(P,\partial_s)<0\},\qquad \mathscr H^+_{0,O}:=\{(x,P)\in TO:x\in O,\ P\in\mathcal H^+_{0,x}\}.$$
A smooth vector field $X$ on $O$ is **conformal Killing** when
$\nabla_{(a}X_{b)}=\lambda g_{ab}$ for some smooth scalar
$\lambda:O\to\mathbb R$, with symmetrization factor $1/2$ and
$X_b=g_{bc}X^c$. On the total shell use the restriction of the geodesic
Liouville vector field of [[thm-tgr-massive-juttner-stationarity]], namely
$$\mathcal L=P^a\partial_{x^a}-\Gamma^a{}_{bc}P^bP^c\partial_{P^a}.$$
For a smooth function $f:\mathscr H^+_{0,O}\to(0,\infty)$, the **null-shell
Liouville equation** means $\mathcal Lf=0$ everywhere on this domain.
For smooth $\beta$ and $\zeta$, the exponential transport condition instead
permits conformal Killing inverse-temperature fields. In particular,
$\beta=b(s/L_0)\partial_s$ for a constant $b>0$ in $\mathrm{J^{-1}}$ is future
timelike and conformal Killing, and for constant $\zeta$ the massless
exponential $f=e^{\zeta+g(\beta,P)}$ satisfies the null-shell Liouville
equation. This is a mathematical null-shell example; it asserts no physical
state or empirical radiation result.

## Facts & Assumptions

**Given:** The metric and domain above, their metric-selected connection and
curvature convention, the massive Jüttner theorem, and the null-shell clause
of [[lem-tgr-mass-shell-polynomial-rigidity]].

[F1] The connection is metric-compatible and has Christoffel formula
$\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$;
the coordinate curvature formula is
$R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}
+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$; the
curvature operator and scalar are
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and
$S=g^{bd}g^{ac}R_{abcd}$
([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[thm-gr-curvature-tensoriality-and-coordinate-formula]],
[[def-gr-curvature-tensor-and-derived-tensors]]).

[F2] A local flow of any nowhere-zero Killing field preserves scalar curvature
([[lem-tgr-isometry-natural-tensor-invariance]]).

[F3] A finite shell normalizer and stationarity of the massive exponential
ansatz require a future timelike Killing inverse-temperature vector
([[thm-tgr-massive-juttner-stationarity]]).

[F4] If $A(P,P)+b(P)=0$ on the entire future null cone, then $b=0$ and
$A=\lambda g$ ([[lem-tgr-mass-shell-polynomial-rigidity]]).

[F5] For every smooth vector field $X$, the general coordinate formula
[[prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor]] gives
$$(\mathcal L_Xg)_{ab}=X^c\partial_cg_{ab}+g_{cb}\partial_aX^c+g_{ac}\partial_bX^c.$$
Metric compatibility gives
$\partial_cg_{ab}=g_{db}\Gamma^d{}_{ca}+g_{ad}\Gamma^d{}_{cb}$.
Substitution and torsion-freeness therefore identify this expression with
$\nabla_aX_b+\nabla_bX_a=2\nabla_{(a}X_{b)}$; no Killing hypothesis is needed.

[A1] The differential-geometric suppliers use $\mathrm{AC}_\omega$ for the
canonical smooth tangent-bundle structure; no stronger choice axiom is used
([[def-countable-choice]]).

## Verification

1.1 Put $a=s/L_0$. The Christoffel formula in [F1] gives as the only nonzero
coefficients (up to symmetry of the lower indices)
$$\Gamma^s{}_{ij}=aa'\delta_{ij},\qquad \Gamma^i{}_{sj}=\Gamma^i{}_{js}=\frac{a'}a\delta^i_j.$$
With $a'=1/L_0$ and $a''=0$, the curvature formula in [F1] gives
$\operatorname{Ric}_{ss}=-3a''/a=0$ and
$\operatorname{Ric}_{ij}=(aa''+2(a')^2)\delta_{ij}=2L_0^{-2}\delta_{ij}$.
Contracting with $g^{ss}=-1$ and $g^{ij}=a^{-2}\delta^{ij}$ yields
$S=6(a''/a+(a'/a)^2)=6/s^2$. [given, F1, A1, algebra]

2.1 Suppose a timelike Killing field $X$ existed on a nonempty open
$U\subseteq O$. It is nowhere zero, so [F2] applies and gives $X(S)=0$.
Since $dS=-12s^{-3}ds$, this forces $X^s=0$ at every point of $U$.
Therefore $g(X,X)=a(s)^2\sum_i(X^i)^2\ge0$, contradicting timelikeness.
This proves (a), including every smaller open region.
[step 1.1, F2, algebra]

3.1 Suppose a normalizable massive stationary exponential existed on a
nonempty open $U\subseteq O$. Choose any point of $U$ and a connected open
coordinate ball $V\subseteq U$ around it. Restricting the ansatz to $V$
preserves smoothness, stationarity, and the finite shell normalizer. The
theorem [F3] would then supply a future timelike Killing field on $V$, which
step 2.1 rules out. Thus no such massive state exists on $U$. This conclusion
concerns only that ansatz and exact stationarity. [step 2.1, F3, algebra]

4.1 Metric compatibility makes the geodesic spray tangent to the null shell,
since, with $G=g_{ab}P^aP^b$,
$\mathcal LG=P^c(\partial_cg_{ab})P^aP^b-2g_{ad}P^d\Gamma^a{}_{bc}P^bP^c=0$
by the metric-compatibility identity in [F5]. On $G=0$ away from $P=0$,
the fiber derivative $2g(P,\cdot)$ is nonzero, so this is a smooth level
hypersurface; its nonzero and future conditions are open within it.
Thus restriction of $\mathcal L$ to $\mathscr H^+_{0,O}$ is defined. For a
future null vector $P$, the null-shell Liouville derivative of
$f=e^{\zeta+g(\beta,P)}$ is
$$\frac{\mathcal L f}{f}=P^a\nabla_a\zeta+P^aP^b\nabla_{(a}\beta_{b)}.$$
By [F4], its vanishing on the full future null shell is equivalent to
$d\zeta=0$ and $\nabla_{(a}\beta_{b)}=\lambda g_{ab}$; conversely those
conditions make it zero because $g(P,P)=0$. The factor is smooth since
$\lambda=\tfrac14g^{ab}\nabla_{(a}\beta_{b)}$. For
$K:=(s/L_0)\partial_s$, direct differentiation gives
$(\mathcal L_Kg)_{ss}=-2/L_0$ and
$(\mathcal L_Kg)_{ij}=2a^2\delta_{ij}/L_0$, with mixed components zero;
hence $\mathcal L_Kg=2g/L_0$. Also $g(K,K)=-(s/L_0)^2<0$, and $K$ is
future-directed since $s>0$. Thus $\beta=bK$ is future timelike and
conformal Killing, with $\nabla_{(a}\beta_{b)}=(b/L_0)g_{ab}$; for constant
$\zeta$ its null-shell
Liouville derivative vanishes. This proves the explicitly constructed
massless conformal branch without asserting a massive Killing equilibrium.
[given, F1, F4, F5, step 1.1, algebra] ∎
