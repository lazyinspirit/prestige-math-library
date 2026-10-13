---
id: lem-gr-parallel-transport-and-geodesic-speed
kind: lemma
title: "Covariant differentiation along curves: metric pairing, parallel transport and geodesic speed"
status: published
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-covariant-derivative-along-a-curve, thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension, def-geodesic-of-an-affine-connection, def-parallel-section-along-a-curve, def-parallel-transport-along-a-piecewise-smooth-curve, thm-existence-and-uniqueness-of-parallel-sections, def-christoffel-symbols-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, def-gr-smooth-lorentzian-objects, def-causal-classification-of-lorentz-vectors, def-gr-metric-selected-connection, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, cor-zero-derivative-implies-constant, def-countable-choice]
dependency_roles:
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-parallel-section-along-a-curve: mathematical-premise
  def-parallel-transport-along-a-piecewise-smooth-curve: mathematical-premise
  thm-existence-and-uniqueness-of-parallel-sections: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the equation of parallel transport (3.31) printed p. 65 (PDF p. 72); geodesics (3.47) and the affine parameter, printed pp. 70-71 (PDF pp. 77-78); 'parallel transport with respect to a metric-compatible connection preserves inner products' (3.33)-(3.34), printed pp. 66-67 (PDF pp. 73-74)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.3: the exercise that $g(X,X)$ is constant along a geodesic, the free-particle postulate and the remark on proper time as an affine parameter, printed p. 38 (PDF p. 39)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.3.1: $\\nabla_Xg=0$ implies that parallely transported vectors keep their angle with the geodesic tangent, printed p. 119 (PDF p. 126)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold and let
$\nabla$ be its metric-selected connection; its existence and uniqueness are
supplied by [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Fix
$c>0$. All intervals $I,J$ below have nonempty interior. For a
smooth curve $\gamma:I\to M$ write $D_t$ for the covariant derivative along
$\gamma$ of [[def-covariant-derivative-along-a-curve]] with respect to
$\nabla$ (equivalently, the pullback of the Levi–Civita connection).

1. **Metric pairing.** For smooth sections $V,W$ of the pullback bundle
   $\gamma^*TM$,
   $$\frac{d}{dt}\,g_{\gamma(t)}\bigl(V(t),W(t)\bigr)=g_{\gamma(t)}\bigl(D_tV(t),W(t)\bigr)+g_{\gamma(t)}\bigl(V(t),D_tW(t)\bigr).$$
   In particular, if $D_tV=D_tW=0$ on $I$, then $g(V,W)$ is constant on $I$.

2. **Parallel transport.** Let $\gamma:[a,b]\to M$ be a piecewise smooth curve
   with $a<b$.
   For every $v\in T_{\gamma(a)}M$ there is exactly one continuous piecewise
   smooth section $V$ of $\gamma^*TM$ with $D_tV=0$ on each smooth piece and
   $V(a)=v$; the parallel-transport map
   $P_\gamma:T_{\gamma(a)}M\to T_{\gamma(b)}M$, $v\mapsto V(b)$, is linear,
   bijective, and satisfies
   $g_{\gamma(b)}(P_\gamma v,P_\gamma w)=g_{\gamma(a)}(v,w)$ for all $v,w$.
   For $a=b$, the unique section is its prescribed fibre vector and
   $P_\gamma$ is the identity; no $D_t$ condition is imposed on a singleton.

3. **Geodesic speed and proper time.** Along a geodesic
   $\gamma:I\to M$ ([[def-geodesic-of-an-affine-connection]]) the function
   $t\mapsto g_{\gamma(t)}(\gamma'(t),\gamma'(t))$ is constant. If $\gamma$
   is nonconstant, its tangent is nowhere zero and its causal character
   (timelike, null or spacelike) is constant; a constant geodesic has zero
   tangent and is assigned none of those causal characters. If $\gamma$ is a
   **future-directed timelike geodesic** and
   $g(\gamma',\gamma')=-\lambda^2$ with $\lambda>0$, then for
   $t_0<t_1$ its proper-time increment over $[t_0,t_1]$ is
   $\lambda(t_1-t_0)/c$
   ([[def-gr-timelike-worldline-and-proper-time]]), so proper time is an
   affine parameter. In this parameter its four-velocity is
   $U=(c/\lambda)\gamma'$ and is parallel: $D_\tau U=0$. Proper time is not
   assigned to a past-directed curve by that definition; reversing the
   parameter gives a future-directed timelike geodesic with the same
   (positive) proper-time magnitude. A nonconstant null geodesic has null
   tangent and admits no proper-time parametrization.

4. **Affine reparametrizations.** Let $\gamma:I\to M$ be a geodesic whose
   tangent is nowhere zero, and let $h:J\to I$ be a $C^2$ diffeomorphism onto
   its open image with $h'\neq0$. Then $\gamma\circ h$ is a geodesic if and
   only if $h(s)=as+b$ with constants $a\neq0$, $b$; in that case $a$ is the
   constant $h'$, and every affine parameter of this nonconstant geodesic
   arises in this way from a fixed one. If $\gamma$ is constant, then
   $\gamma\circ h$ is constant and hence geodesic for every such $h$; no
   affine restriction on $h$ follows.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with its metric-selected connection $\nabla$, a smooth curve $\gamma:I\to M$, and the sections and maps named in the claims.

[L1] The covariant derivative along a smooth curve is defined by the pullback connection, satisfies $D_t(fV)=f'V+fD_tV$ for functions $f$ of the parameter, and if $V=s\circ\gamma$ for a local ambient section $s$ then $D_tV=(\nabla s)_{\gamma(t)}(\gamma'(t))$ ([[def-covariant-derivative-along-a-curve]], [[thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension]]).

[L2] In a chart, $\nabla_{\partial_b}\partial_c=\sum_a\Gamma^a{}_{bc}\partial_a$, $\nabla$ is torsion-free and $g$-compatible, and $\partial_ag_{bc}=\sum_d(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd})$ ([[def-christoffel-symbols-of-an-affine-connection]], [[def-gr-metric-selected-connection]], [[lem-gr-connection-conditions-in-chart-components]]).

[L3] A geodesic is a curve with $D_t\gamma'=0$ in its parameter; such a parameter is called affine; constant curves are geodesics ([[def-geodesic-of-an-affine-connection]]).

[L4] For a piecewise smooth curve there is exactly one continuous piecewise parallel section through every initial vector; its value at the terminal parameter is the parallel transport of [[def-parallel-transport-along-a-piecewise-smooth-curve]], and the construction is independent of frames and subdivisions ([[def-parallel-section-along-a-curve]], [[thm-existence-and-uniqueness-of-parallel-sections]], [[def-covariant-derivative-along-a-curve]]).

[L5] Along a future timelike worldline, proper time has density $\sqrt{-g(\gamma',\gamma')}/c$, and the four-velocity satisfies $U=c\gamma'/\sqrt{-g(\gamma',\gamma')}$, $\gamma'=\tau'U$, $g(U,U)=-c^2$ ([[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]]).

[L6] A nonzero causal vector is future-directed exactly when its pairing with the time-orientation field $N$ is negative, and that pairing is nonzero ([[def-gr-smooth-lorentzian-objects]], [[def-causal-classification-of-lorentz-vectors]]). Along a continuous nonzero timelike tangent on the connected interval $I$, this pairing is continuous and cannot change sign, so being future-directed at one parameter value makes it future-directed throughout. The zero vector has no causal character; a nonzero vector of zero norm is null ([[def-causal-classification-of-lorentz-vectors]]).

[L7] A differentiable real function on an interval with zero derivative is constant ([[cor-zero-derivative-implies-constant]]), applied on compact subintervals and extended to included endpoints by continuity. Applied to chart components, this also makes a curve with zero velocity locally constant and hence constant on its connected interval.

## Proof

**Proof technique:** direct.

1.1 (Component form of $D_t$.) On a chart domain around a parameter value, let $e_a:=\partial_a\circ\gamma$ be the pulled-back coordinate frame and write $\gamma'=\sum_b\dot\gamma^be_b$, $V=\sum_aV^ae_a$, with coefficient functions $V^a$ on the parameter interval. By [L1], $D_te_c=(\nabla\partial_c)_{\gamma(t)}(\gamma'(t))=\sum_{a,b}\Gamma^a{}_{bc}\dot\gamma^be_a$. The pullback product rule therefore gives $D_tV=\sum_a\bigl(\partial_tV^a+\sum_{b,c}\Gamma^a{}_{bc}\dot\gamma^bV^c\bigr)e_a$. This uses ambient extensions only for the coordinate frame, not for the arbitrary coefficient functions along the curve, and hence also applies to repeated points and constant base curves. The same formula and pairing calculation hold for $C^1$ fields along a $C^1$ curve, with the derivatives interpreted at included endpoints one-sided. [L1, L2, algebra]

2.1 (Metric pairing.) With the notation of step 1.1, $g(V,W)=\sum_{a,b}g_{ab}V^aW^b$, so $\frac{d}{dt}g(V,W)=\sum_{a,b}\bigl(\partial_cg_{ab}\dot\gamma^cV^aW^b+g_{ab}\partial_tV^aW^b+g_{ab}V^a\partial_tW^b\bigr)$. Substituting the compatibility identity of [L2] for $\partial_cg_{ab}$ and the component formula of step 1.1 for $D_tV$ and $D_tW$, the terms in which $\Gamma$ multiplies $V$ or $W$ match, using symmetry $g_{ab}=g_{ba}$ and the relabelling of the summed indices $b,c,d$; the remaining terms are exactly the two derivatives $\partial_tV^aW^bg_{ab}$ and $V^a\partial_tW^bg_{ab}$. Hence the displayed pairing identity holds; if $D_tV=D_tW=0$, the derivative of the smooth function $g(V,W)$ vanishes on each chart, hence on $I$; [L7] gives constancy. [step 1.1, L2, L7, algebra]

3.1 (Parallel transport.) On a singleton, [L4] and the transport definition give the unique prescribed vector and identity map, which preserves the metric. For $a<b$, let $\gamma:[a,b]\to M$ be piecewise smooth and $v\in T_{\gamma(a)}M$. The existence and uniqueness of a continuous piecewise parallel section through $v$ is [L4]; the map $P_\gamma$ is therefore well defined, and it is linear because the difference of two parallel sections with initial values $v,w$ is a parallel section (linearity of $D_t$ from step 1.1) with initial value $v-w$. It is bijective with inverse given by the same construction for the reversed curve. For $v,w$ apply claim 1 to their parallel sections $V,W$ on each smooth piece: $g(V,W)$ has zero derivative there and is continuous across corners, hence constant on $[a,b]$ by [L7], so $g(P_\gamma v,P_\gamma w)=g(v,w)$. [step 2.1, L4, L7, algebra]

3.2 (Constant speed and causal character.) Let $\gamma$ be a geodesic, so $D_s\gamma'=0$ by [L3]. Applying the pairing identity of step 2.1 with $V=W=\gamma'$ gives $\frac{d}{ds}g(\gamma',\gamma')=2g(D_s\gamma',\gamma')=0$ on every chart of the domain; hence $g(\gamma',\gamma')$ is a constant by [L7]. By [L4], the tangent $\gamma'$ is the parallel section with its value prescribed at any one parameter, and parallel transport is bijective. Thus if $\gamma'$ vanishes once it vanishes everywhere, so $\gamma$ is constant; otherwise it is nowhere zero. In the latter case its constant squared norm fixes its timelike, null or spacelike character on all of $I$. If it is causal, [L6] makes its continuous pairing with $N$ nowhere zero, so its time orientation is also constant, including the null case. [step 2.1, L3, L4, L6, L7, algebra]

4.1 (Timelike geodesics and proper time.) Let $\gamma$ be a future-directed timelike geodesic with $g(\gamma',\gamma')=-\lambda^2$, $\lambda>0$. Its proper-time density is $\sqrt{\lambda^2}/c=\lambda/c$, constant, so for $t_0<t_1$ the increment over $[t_0,t_1]$ is $\lambda(t_1-t_0)/c$ by [L5]; hence proper time is an affine function of the parameter and an affine parameter of $\gamma$. The four-velocity is $U=d\gamma/d\tau=(c/\lambda)\gamma'$; since $D_t\gamma'=0$ and $d\tau/dt=\lambda/c$ is constant, $D_\tau U=(c/\lambda)D_t((c/\lambda)\gamma')=0$. A nonconstant null geodesic has nonzero null tangent by step 3.2, so the integrand in [L5] is zero and the curve is not a future timelike worldline; it admits no proper-time parametrization. [step 3.2, L5, L6, algebra]

5.1 (Affine reparametrizations.) Let $\gamma:I\to M$ have nowhere-zero tangent and be a geodesic; let $h:J\to I$ be a $C^2$ diffeomorphism onto its open image with $h'\neq0$, and put $\tilde\gamma=\gamma\circ h$. In a chart and on each parameter interval where $h$ and $\gamma$ are taken on a fixed chart, $\tilde\gamma{}'=h'\,(\gamma'\circ h)$, so by step 1.1 $$D_s\tilde\gamma{}'=h''\,(\gamma'\circ h)+(h')^2\,(D_t\gamma')\circ h=h''\,(\gamma'\circ h),$$ where the last equality is the geodesic equation for $\gamma$ and the two terms arise exactly as in the product rule $D_s(h'\,(\gamma'\circ h))=h''(\gamma'\circ h)+h'\,D_s(\gamma'\circ h)$ with $D_s(\gamma'\circ h)=h'\,(D_t\gamma')\circ h$. Since $\gamma'\circ h$ is nowhere zero, $\tilde\gamma$ is a geodesic if and only if $h''\equiv0$ on $J$, that is $h(s)=as+b$ with constants $a=h'\neq0$ and $b$. If $\gamma$ is constant, then $\tilde\gamma$ is constant and geodesic for every $h$ by [L3]. Conversely, every $C^2$ diffeomorphism with $h''=0$ has this affine form, and for a nonconstant geodesic starting from a fixed affine parameter $t$, every other affine parameter $s$ is related by $s=at+b$ with $a\neq0$ by applying the criterion to $h=s\circ t^{-1}$. [step 3.2, L3, L7, algebra] ∎

## Remarks

- **Choice convention.** The curve, its sections and the parallel transport of [L4] are those of the pullback-bundle construction; the tangent-bundle smooth structure assumes $\mathrm{AC}_\omega$ ([[def-countable-choice]]), inherited through [[def-gr-smooth-lorentzian-objects]] and [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. No further choice principle is used: parallel sections are unique when they exist and no family of curves is selected.

- **Scope.** The isometry statement concerns the bilinear form on the tangent fibres transported along one fixed curve; it asserts no global trivialization of $TM$, no path independence, and no relation between transport along different curves. Path dependence is measured by curvature and belongs to the curvature material of this track.
