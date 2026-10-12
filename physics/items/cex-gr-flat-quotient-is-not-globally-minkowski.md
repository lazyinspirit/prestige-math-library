---
id: cex-gr-flat-quotient-is-not-globally-minkowski
kind: counterexample
title: "A flat Lorentzian four-manifold that is not isometric to Minkowski space: the rolled-up flat model R^4 / Z by a timelike translation"
status: draft
origin: session
domain: mathematics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-free-proper-action-quotient-manifold, thm-smooth-inverse-function-theorem-on-manifolds, def-gr-minkowski-model-and-inertial-chart, lem-gr-flat-model-connection-curvature-and-geodesics, def-free-and-proper-lie-group-actions, def-group-action, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, thm-gr-curvature-tensoriality-and-coordinate-formula, def-gr-curvature-tensor-and-derived-tensors, thm-gr-vanishing-curvature-implies-locally-minkowski, def-differential-of-a-smooth-map, def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-manifold, thm-cauchy-mean-value, def-derivative, def-interval, def-compact-space]
dependency_roles:
  thm-free-proper-action-quotient-manifold: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  lem-gr-flat-model-connection-curvature-and-geodesics: mathematical-premise
  def-free-and-proper-lie-group-actions: mathematical-premise
  def-group-action: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-vanishing-curvature-implies-locally-minkowski: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-smooth-manifold: mathematical-premise
  thm-cauchy-mean-value: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-compact-space: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2: the n-torus obtained by identifying opposite sides of a cube, printed p. 31 (PDF p. 37); Ch. 4: Misner space, the warning that an identification can produce a closed timelike curve, printed pp. 125-127 (PDF pp. 131-133)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.5.1: a periodic coordinate direction with negative norm gives a closed timelike curve, printed pp. 272-273 (PDF pp. 279-280)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.1: the flat metric on R^4 as the trivial solution, printed pp. 41-43 (PDF pp. 42-44)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "Let $(M,g,N)$ be a connected time-oriented smooth Lorentzian
four-manifold whose metric-selected connection has vanishing curvature,
$R\equiv0$ on $M$ ([[def-gr-metric-selected-connection]],
[[def-gr-curvature-tensor-and-derived-tensors]]). Then $(M,g)$ is isometric
to Minkowski space $(\mathbb R^4,\eta)$: there is a diffeomorphism
$F:M\to\mathbb R^4$ with $F^*\eta=g$."

The counterexample is the quotient of the flat model by the timelike
translation group. Let $(\hat M,\hat g,\hat N)$ be the flat model
([[def-gr-minkowski-model-and-inertial-chart]]) with inertial chart $x$, fix
$L>0$, let $\Gamma:=\mathbb Z$ act on $\hat M$ by

$$n\cdot p:=x^{-1}\bigl(x^0(p)+nL,\,x^1(p),\,x^2(p),\,x^3(p)\bigr),$$

and let $(M,g,N)$ be the quotient time-oriented Lorentzian four-manifold
constructed below with orbit map $q:\hat M\to M$, descended metric
$q^*g=\hat g$ and field $N_{q(p)}=dq_p(\hat N_p)$. Then:

1. $(M,g,N)$ is a connected smooth time-oriented Lorentzian four-manifold;
2. $(M,g)$ is flat: $R\equiv0$ for the metric-selected connection of $g$;
3. $M$ contains a nonconstant closed future timelike curve
   $\sigma:[0,L]\to M$, $\sigma(s):=q\bigl(x^{-1}(s,0,0,0)\bigr)$, with
   $\sigma(L)=\sigma(0)$ and $g(\sigma',\sigma')=-1$;
4. nevertheless there is **no** diffeomorphism $F:M\to\mathbb R^4$ with
   $F^*\eta=g$: $M$ is not isometric to Minkowski space, and in particular it
   admits no global chart in which the metric components are the constants
   $\eta_{ab}$.

## Facts & Assumptions
**Given:** The flat model $(\hat M,\hat g,\hat N)$ with inertial chart $x$ and $\hat g_{ab}=\eta_{ab}=\operatorname{diag}(-1,1,1,1)$, the number $L>0$, the group $\Gamma=\mathbb Z$ with the action above, and the orbit space $M=\hat M/\Gamma$ with its quotient topology and orbit map $q$, with $g$ and $N$ constructed below and the curve $\sigma(s)=q(x^{-1}(s,0,0,0))$.

[L1] The flat model has $\hat g_{ab}=\eta_{ab}$ constant in the inertial chart, and the metric-selected connection has vanishing Christoffel symbols and curvature in that chart ([[def-gr-minkowski-model-and-inertial-chart]], [[lem-gr-flat-model-connection-curvature-and-geodesics]]).

[L2] A smooth free proper Lie-group action has a Hausdorff second-countable smooth quotient of dimension $\dim\hat M-\dim\Gamma$, and its orbit map is a smooth surjective submersion ([[thm-free-proper-action-quotient-manifold]]). A smooth map with invertible differential at a point restricts near that point to a diffeomorphism onto an open neighborhood ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[L3] The countable group $\mathbb Z$ with its discrete topology has a Hausdorff second-countable zero-dimensional smooth structure given by singleton charts, and addition and negation are smooth in these charts, so it is a Lie group. Its action on a four-manifold is smooth when each $p\mapsto n\cdot p$ is smooth; a smooth action and freeness and properness are as in [[def-group-action]] and [[def-free-and-proper-lie-group-actions]]: free means trivial stabilizers, proper means the action-graph map $\Theta(n,p)=(n\cdot p,p)$ has compact preimages of compact sets.

[L4] Chart formulas ([[def-christoffel-symbols-of-an-affine-connection]], [[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (b), [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]): the Christoffel symbols of the metric-selected connection in a chart are $\Gamma^a{}_{bc}=\frac12g^{ad}(\partial_bg_{cd}+\partial_cg_{bd}-\partial_dg_{bc})$ and the curvature components are $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$; a tensor vanishes at a point as soon as all its components in one chart around that point vanish.

[L5] A local diffeomorphism $s$ with $s^*\hat g=g$ has components $g_{ab}=\partial_au^c\partial_bu^d(\hat g_{cd}\circ s)$ for the chart $u=x\circ s$, and $dq_p$ is a linear isomorphism where $q$ is a local diffeomorphism ([[def-differential-of-a-smooth-map]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L6] For a chart with constant metric components $\eta_{ab}$, the symbols of [L4] vanish identically in that chart, hence so does the curvature there ([[def-gr-metric-selected-connection]]).

[L7] Mean value theorem ([[thm-cauchy-mean-value]] with $g(s)=s$, [[def-derivative]], [[def-interval]]): if $f:[a,b]\to\mathbb R$ is continuous and differentiable on $(a,b)$, there is $c\in(a,b)$ with $f(b)-f(a)=f'(c)(b-a)$.

[L8] A compact subset of $\mathbb R^4$ has bounded coordinate functions ([[def-compact-space]]), and for $F:M\to\mathbb R^4$ with $F^*\eta=g$ one has $\eta(dF_pV,dF_pW)=g_p(V,W)$ for all $p,V,W$ ([[def-differential-of-a-smooth-map]], [[def-gr-smooth-lorentzian-objects]]).



## Counterexample

**Proof technique:** direct; verify the action hypotheses, construct the quotient and descend its metric and time orientation, exhibit constant-component charts for flatness, then exclude a global isometry with the mean value theorem applied to the time coordinate of the closed timelike curve.

1.1 (The action.) In the chart $x$ the action reads $(x^0,x^1,x^2,x^3)\mapsto(x^0+nL,x^1,x^2,x^3)$; each $p\mapsto n\cdot p$ is a smooth translation, so the action is smooth; it is an action of the group $\mathbb Z$ on $\hat M$ with $0\cdot p=p$ and $(n+m)\cdot p=n\cdot(m\cdot p)$. It is free: $n\cdot p=p$ forces $nL=0$, hence $n=0$. It preserves $\hat g$: the differential of a translation in the chart is the identity, so $\hat g_{n\cdot p}(d(n\cdot)_pV,d(n\cdot)_pW)=\hat g_p(V,W)$ by [L1]. It is proper: if $K_1,K_2\subseteq\hat M$ are compact and $p\in K_1$ with $n\cdot p\in K_2$, then $|n|L\le\sup_{K_1}|x^0|+\sup_{K_2}|x^0|<\infty$ by [L8], so only finitely many $n$ occur; hence $\Theta^{-1}(K_1\times K_2)$ is a finite union of compact sets, one for each such $n$, and is compact. Finally $\hat N=\partial_0$ is $\Gamma$-invariant with $\hat g(\hat N,\hat N)=-1<0$, since it is invariant under translations. [L1, L3, L8]

2.1 (The smooth quotient.) By step 1.1, [L2] and the zero-dimensional Lie-group structure of [L3], $M$ is a Hausdorff second-countable smooth four-manifold and $q$ is a smooth surjective submersion. Thus $dq_p$ is onto between four-dimensional tangent spaces and hence invertible for every $p$. The inverse function theorem in [L2] gives a local diffeomorphism $q|_{\hat U}:\hat U\to V$ at each point, with smooth inverse $s:V\to\hat U$. The quotient is connected as the image of connected $\hat M$ under the continuous surjection $q$. [step 1.1, L2, L3]

3.1 (Metric and time orientation.) For $r=q(p)$ and $v,w\in T_rM$ define $g_r(v,w):=\hat g_p((dq_p)^{-1}v,(dq_p)^{-1}w)$ and $N_r:=dq_p(\hat N_p)$. These definitions are independent of the representative: if $p'=n\cdot p$, differentiating $q\circ(n\cdot)=q$ gives $dq_{p'}\circ d(n\cdot)_p=dq_p$, so the inverse images of $v,w$ at $p'$ are the translates of those at $p$. Metric invariance and field invariance from step 1.1 therefore give the same values for $g_r$ and $N_r$. The form $g_r$ is symmetric and nondegenerate with signature $(-,+,+,+)$ because $dq_p$ is invertible and $\hat g_p$ has that signature. Over every inverse section $s$ of step 2.1 one has $g|_V=s^*\hat g$ and $N_r=dq_{s(r)}(\hat N_{s(r)})$, both smooth by their chart formulas. Thus $g$ is a smooth Lorentzian metric with $q^*g=\hat g$; this identity also uniquely determines $g$, since $q$ is onto and $dq_p$ is invertible. Furthermore $g(N,N)_{q(p)}=\hat g(\hat N,\hat N)_p=-1$, so $N$ is a time orientation. [step 1.1, step 2.1, L5, L8]

4.1 (The closed curve.) The curve $\hat\sigma(s):=x^{-1}(s,0,0,0)$ on $[0,L]$ is smooth and satisfies $\hat\sigma(L)=x^{-1}(L,0,0,0)=1\cdot\hat\sigma(0)$. Hence $\sigma=q\circ\hat\sigma$ is smooth and $\sigma(L)=q(1\cdot\hat\sigma(0))=\sigma(0)$. Its tangent is $\sigma'(s)=dq_{\hat\sigma(s)}(\partial_0)\neq0$ by step 2.1, and step 3.1 gives $g(\sigma',\sigma')=-1$ and $g(N,\sigma')=-1$. Thus $\sigma$ is future timelike and nonconstant with coincident endpoints. [step 2.1, step 3.1, L1, L5, L8]

4.2 (Flatness.) Let $r\in M$ and $p\in q^{-1}(r)$. Since $q$ is a local diffeomorphism there are open neighborhoods $\hat U$ of $p$ and $V$ of $r$ with $q|_{\hat U}:\hat U\to V$ a diffeomorphism; let $s:V\to\hat U$ be its inverse and $u:=x\circ s:V\to\mathbb R^4$ the induced chart ([[def-smooth-manifold]]). For $r'\in V$ and $v,w\in T_{r'}M$ one has $g_{r'}(v,w)=\hat g_{s(r')}(ds_{r'}v,ds_{r'}w)$ by $q^*g=\hat g$ from step 3.1. In the induced chart $u=x\circ s$, $ds$ takes each coordinate basis vector to the corresponding $x$-coordinate basis vector; hence $g_{ab}=\hat g_{ab}\circ s=\eta_{ab}$, constant by [L1] and [L5]. By [L6] the Christoffel symbols of the metric-selected connection vanish identically in this chart, and then the curvature formula of [L4] gives $R^a{}_{bcd}(r)=0$. As $r\in M$ was arbitrary and vanishing of a tensor at a point is chart-independent, $R\equiv0$ on $M$. The same charts exhibit for each point a neighborhood isometric to an open subset of Minkowski space, in accordance with clause (d) of [[thm-gr-vanishing-curvature-implies-locally-minkowski]]. [step 2.1, step 3.1, L1, L4, L5, L6]

5.1 (No global isometry.) Suppose $F:M\to\mathbb R^4$ satisfies $F^*\eta=g$. Let $f:=(F\circ\sigma)^0=x^0\circ F\circ\sigma$; $f$ is smooth by [L5], so continuous on $[0,L]$ and differentiable on $(0,L)$, with $f(L)-f(0)=0$ because $\sigma(L)=\sigma(0)$. By [L7] there is $c\in(0,L)$ with $f'(c)=0$. On the other hand, for every $s$, [L8] and step 4.1 give $\eta\bigl((F\circ\sigma)'(s),(F\circ\sigma)'(s)\bigr)=g(\sigma'(s),\sigma'(s))=-1$, that is
$$-\bigl(f'(s)\bigr)^2+\sum_{i=1}^3\bigl((F\circ\sigma)^i\bigr)'(s)^2=-1,$$
so $\bigl(f'(s)\bigr)^2=1+\sum_{i=1}^3((F\circ\sigma)^i)'(s)^2\ge1$ and $f'(s)\neq0$; in particular $f'(c)\neq0$, a contradiction. Hence no such $F$ exists. Since a global chart $u$ with $g_{ab}=\eta_{ab}$ constant would make $u$ an isometry onto its image (with $\eta$ given by those constants), no such chart exists either. [step 4.1, L5, L7, L8, algebra]

6.1 (Conclusion.) Steps 2.1, 3.1, 4.1 and 4.2 produce a connected time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with $R\equiv0$ and a nonconstant closed future timelike curve; step 5.1 shows it is not isometric to Minkowski space and admits no global chart with constant components $\eta_{ab}$. This refutes the statement; the local isometry statement of [[thm-gr-vanishing-curvature-implies-locally-minkowski]] is not contradicted but is precisely local, as its clause (d) asserts. [step 2.1, step 3.1, step 4.1, step 4.2, step 5.1] ∎



- **Local versus global.** The example isolates the topological obstruction to the converse of the local flatness theorem: vanishing curvature gives locally constant-component charts but does not prevent a compact timelike direction, which produces closed timelike curves and defeats the global argument in step 5.1 (the real-valued function $f$ on the circle direction cannot be strictly increasing). The construction is purely mathematical: no matter, observer, clock or measurement occurs.
- **Related models.** Other identification patterns of the flat model give flat manifolds with different global properties (for example identifications by spacelike translations, as in the flat torus). The specific timelike identification here is the one for which the closed curve is timelike; a spacelike identification instead yields closed spacelike curves and no closed causal curve.
