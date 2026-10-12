---
id: lem-gr-parallel-transport-and-geodesic-speed
kind: lemma
title: "Covariant differentiation along curves: metric pairing, parallel transport and geodesic speed"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-covariant-derivative-along-a-curve, thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension, def-geodesic-of-an-affine-connection, def-parallel-section-along-a-curve, def-parallel-transport-along-a-piecewise-smooth-curve, thm-existence-and-uniqueness-of-parallel-sections, def-christoffel-symbols-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, def-gr-smooth-lorentzian-objects, def-causal-classification-of-lorentz-vectors, def-gr-metric-selected-connection, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-countable-choice]
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
supplied by [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. For a
smooth curve $\gamma:I\to M$ write $D_t$ for the covariant derivative along
$\gamma$ of [[def-covariant-derivative-along-a-curve]] with respect to
$\nabla$ (equivalently, the pullback of the Levi–Civita connection).

1. **Metric pairing.** For smooth sections $V,W$ of the pullback bundle
   $\gamma^*TM$,
   $$\frac{d}{dt}\,g_{\gamma(t)}\bigl(V(t),W(t)\bigr)=g_{\gamma(t)}\bigl(D_tV(t),W(t)\bigr)+g_{\gamma(t)}\bigl(V(t),D_tW(t)\bigr).$$
   In particular, if $D_tV=D_tW=0$ on $I$, then $g(V,W)$ is constant on $I$.

2. **Parallel transport.** Let $\gamma:[a,b]\to M$ be a piecewise smooth curve.
   For every $v\in T_{\gamma(a)}M$ there is exactly one continuous piecewise
   smooth section $V$ of $\gamma^*TM$ with $D_tV=0$ on each smooth piece and
   $V(a)=v$; the parallel-transport map
   $P_\gamma:T_{\gamma(a)}M\to T_{\gamma(b)}M$, $v\mapsto V(b)$, is linear,
   bijective, and satisfies
   $g_{\gamma(b)}(P_\gamma v,P_\gamma w)=g_{\gamma(a)}(v,w)$ for all $v,w$.

3. **Geodesic speed and affine parameter.** Along a geodesic
   $\gamma:I\to M$ ([[def-geodesic-of-an-affine-connection]]) the norm
   $g(\gamma',\gamma')$ is constant, so the causal character of $\gamma$
   (timelike, null or spacelike) is constant on $I$; a nonzero constant value
   makes $\gamma$ regular on all of $I$. If $\gamma$ is timelike and
   $g(\gamma',\gamma')=-\lambda^2$ with $\lambda>0$, then the proper-time
   increment of $\gamma$ over $[t_0,t]$ is $\lambda(t-t_0)/c$
   ([[def-gr-timelike-worldline-and-proper-time]]), so proper time is an
   affine parameter of $\gamma$; the four-velocity
   $U=\lambda^{-1}\gamma'$ is parallel, $D_\tau U=0$ in the proper-time
   parameter. A null geodesic has $g(\gamma',\gamma')=0$ and admits no
   proper-time parametrization.

4. **Affine reparametrizations.** Let $\gamma:I\to M$ be a geodesic and let
   $h:J\to I$ be a $C^2$ diffeomorphism onto its open image with $h'\neq0$.
   Then $\gamma\circ h$ is a geodesic if and only if $h(s)=as+b$ with
   constants $a\neq0$, $b$; in that case $a$ is the constant
   $h'$, and every affine parameter of $\gamma$ arises in this way from a
   fixed one.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with its metric-selected connection $\nabla$, a smooth curve $\gamma:I\to M$, and the sections and maps named in the claims.

[L1] The covariant derivative along a smooth curve is defined by the pullback connection, satisfies $D_t(fV)=f'V+fD_tV$ for functions $f$ of the parameter, and if $V=s\circ\gamma$ for a local ambient section $s$ then $D_tV=(\nabla s)_{\gamma(t)}(\gamma'(t))$ ([[def-covariant-derivative-along-a-curve]], [[thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension]]).

[L2] In a chart, $\nabla_{\partial_b}\partial_c=\sum_a\Gamma^a{}_{bc}\partial_a$, $\nabla$ is torsion-free and $g$-compatible, and $\partial_ag_{bc}=\sum_d(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd})$ ([[def-christoffel-symbols-of-an-affine-connection]], [[def-gr-metric-selected-connection]], [[lem-gr-connection-conditions-in-chart-components]]).

[L3] A geodesic is a curve with $D_t\gamma'=0$ in its parameter; such a parameter is called affine; constant curves are geodesics ([[def-geodesic-of-an-affine-connection]]).

[L4] For a piecewise smooth curve there is exactly one continuous piecewise parallel section through every initial vector; its value at the terminal parameter is the parallel transport of [[def-parallel-transport-along-a-piecewise-smooth-curve]], and the construction is independent of frames and subdivisions ([[def-parallel-section-along-a-curve]], [[thm-existence-and-uniqueness-of-parallel-sections]], [[def-covariant-derivative-along-a-curve]]).

[L5] Along a future timelike worldline, proper time has density $\sqrt{-g(\gamma',\gamma')}/c$, and the four-velocity satisfies $U=c\gamma'/\sqrt{-g(\gamma',\gamma')}$, $\gamma'=\tau'U$, $g(U,U)=-c^2$ ([[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]]).

[L6] Timelike, null and spacelike are the three mutually exclusive nonzero causal characters, and a vector has constant character in a chart representation if the smooth function $g(v,v)$ is constant and nonzero; the zero norm characterizes null among nonzero vectors ([[def-causal-classification-of-lorentz-vectors]], [[def-gr-smooth-lorentzian-objects]]).

## Proof

**Proof technique:** direct.

1.1 (Component form of $D_t$.) On a chart domain $U$ around a parameter value, write $\gamma'=\sum_a\dot\gamma^a\partial_a$ and $V=\sum_aV^a\partial_a$ with smooth coefficients on the parameter interval, and let $s:=\sum_aV^a\partial_a$ be the ambient local field with the same coefficients. Then $s\circ\gamma=V$ near that parameter value, so by [L1] $D_tV=(\nabla s)_{\gamma(t)}(\gamma'(t))=\sum_a\bigl(\partial_tV^a+\sum_{b,c}\Gamma^a{}_{bc}\dot\gamma^bV^c\bigr)\partial_a$. [L1, L2, L3, algebra]

2.1 (Metric pairing.) With the notation of step 1.1, $g(V,W)=\sum_{a,b}g_{ab}V^aW^b$, so $\frac{d}{dt}g(V,W)=\sum_{a,b}\bigl(\partial_cg_{ab}\dot\gamma^cV^aW^b+g_{ab}\partial_tV^aW^b+g_{ab}V^a\partial_tW^b\bigr)$. Substituting the compatibility identity of [L2] for $\partial_cg_{ab}$ and the component formula of step 1.1 for $D_tV$ and $D_tW$, the terms in which $\Gamma$ multiplies $V$ or $W$ match, using symmetry $g_{ab}=g_{ba}$ and the relabelling of the summed indices $b,c,d$; the remaining terms are exactly the two derivatives $\partial_tV^aW^bg_{ab}$ and $V^a\partial_tW^bg_{ab}$. Hence the displayed pairing identity holds; if $D_tV=D_tW=0$, the derivative of the smooth function $g(V,W)$ vanishes on each chart, hence on $I$. [step 1.1, L2, algebra]

3.1 (Parallel transport.) Let $\gamma:[a,b]\to M$ be piecewise smooth and $v\in T_{\gamma(a)}M$. The existence and uniqueness of a continuous piecewise parallel section through $v$ is [L4]; the map $P_\gamma$ is therefore well defined, and it is linear because the difference of two parallel sections with initial values $v,w$ is a parallel section (linearity of $D_t$ from step 1.1) with initial value $v-w$. It is bijective with inverse given by the same construction for the reversed curve. For $v,w$ apply claim 1 to their parallel sections $V,W$ on each smooth piece: $g(V,W)$ has zero derivative there and is continuous across corners, hence constant on $[a,b]$, so $g(P_\gamma v,P_\gamma w)=g(v,w)$. [step 2.1, L4, algebra]

3.2 (Constant speed and causal character.) Let $\gamma$ be a geodesic, so $D_s\gamma'=0$ by [L3]. Applying the pairing identity of step 2.1 with $V=W=\gamma'$ gives $\frac{d}{ds}g(\gamma',\gamma')=2g(D_s\gamma',\gamma')=0$ on every chart of the domain; hence $g(\gamma',\gamma')$ is a constant, which we denote $-\lambda^2$ when it is negative, $0$ when it vanishes, and $\lambda^2$ when it is positive. By [L6] the causal character of $\gamma'$ is therefore constant, and $\gamma'\neq0$ at every parameter value when the constant value is nonzero; a null geodesic has $\gamma'\neq0$ by the definition of null. [step 2.1, L3, L6, algebra]

4.1 (Timelike geodesics and proper time.) Let $\gamma$ be a timelike geodesic with $g(\gamma',\gamma')=-\lambda^2$, $\lambda>0$, and let $\gamma$ be future-directed at one parameter value; by step 3.2 the vector $\gamma'$ is future timelike at every parameter value, so $\gamma$ is a future timelike worldline and [L5] applies. Its proper-time density is $\sqrt{\lambda^2}/c=\lambda/c$, constant, so over $[t_0,t]$ the increment is $\lambda(t-t_0)/c$ by [L5]; hence proper time is an affine function of the parameter and an affine parameter of $\gamma$. The four-velocity is $U=\lambda^{-1}\gamma'$; since $D_t\gamma'=0$ and $d\tau/dt=\lambda/c$ is constant, $D_\tau U=(dt/d\tau)D_tU=(c/\lambda)\lambda^{-1}D_t\gamma'=0$. A null geodesic has $g(\gamma',\gamma')=0$ by step 3.2, so the density $\sqrt{-g(\gamma',\gamma')}$ vanishes and the curve is not a future timelike worldline in the sense of [L5]; hence it admits no proper-time parametrization. [step 3.2, L5, algebra]

5.1 (Affine reparametrizations.) Let $\gamma:I\to M$ be a geodesic and let $h:J\to I$ be a $C^2$ diffeomorphism onto its open image with $h'\neq0$; put $\tilde\gamma=\gamma\circ h$. In a chart and on each parameter interval where $h$ and $\gamma$ are taken on a fixed chart, $\tilde\gamma{}'=h'\,(\gamma'\circ h)$, so by step 1.1 $$D_s\tilde\gamma{}'=h''\,(\gamma'\circ h)+(h')^2\,(D_t\gamma')\circ h=h''\,(\gamma'\circ h),$$ where the last equality is the geodesic equation for $\gamma$ and the two terms arise exactly as in the product rule $D_s(h'\,(\gamma'\circ h))=h''(\gamma'\circ h)+h'\,D_s(\gamma'\circ h)$ with $D_s(\gamma'\circ h)=h'\,(D_t\gamma')\circ h$. Hence $\tilde\gamma$ is a geodesic if and only if $h''\equiv0$ on $J$, that is $h(s)=as+b$ with constants $a=h'\neq0$ and $b$. Conversely, every $C^2$ diffeomorphism with $h''=0$ is of this form, and starting from a fixed affine parameter $t$, any other affine parameter $s$ of the same geodesic satisfies $s=at+b$ with $a\neq0$ by applying the criterion to $h=s\circ t^{-1}$. [step 3.2, L3, algebra] ∎

## Remarks

- **Choice convention.** The curve, its sections and the parallel transport of [L4] are those of the pullback-bundle construction; the tangent-bundle smooth structure assumes $\mathrm{AC}_\omega$ ([[def-countable-choice]]), inherited through [[def-gr-smooth-lorentzian-objects]] and [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. No further choice principle is used: parallel sections are unique when they exist and no family of curves is selected.

- **Scope.** The isometry statement concerns the bilinear form on the tangent fibres transported along one fixed curve; it asserts no global trivialization of $TM$, no path independence, and no relation between transport along different curves. Path dependence is measured by curvature and belongs to the curvature material of this track.
