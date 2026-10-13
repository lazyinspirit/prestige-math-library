---
id: lem-gr-past-corresponding-boundary-restart
kind: lemma
title: Past corresponding-boundary exposure and a spacelike restart in the original time orientation
status: draft
origin: session
domain: mathematics
dependency_level: 32
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
- def-countable-choice
- def-dependent-choice
- def-gr-common-subdevelopment-and-corresponding-boundary
- def-gr-development-and-data-fixing-isometry
- thm-gr-cauchy-surface-implies-globally-hyperbolic
- lem-gr-globally-hyperbolic-causal-structure
- lem-gr-cauchy-set-topology-and-graph
- lem-gr-subdevelopment-convexity
- thm-gr-auxiliary-complete-riemannian-metric
- lem-gr-strong-causality-compact-length-bound
- lem-gr-basic-limit-curve
- lem-gr-causal-curve-conventions
- thm-metric-compactness-equivalences
- lem-gr-chronology-openness
- lem-gr-push-up-rule
- thm-gr-normal-neighborhood-causal-cone
- lem-gr-null-position-vector-forces-null-velocity
- lem-gr-maximal-geodesics-and-extension
- lem-gr-parallel-transport-and-geodesic-speed
- thm-gr-local-geodesics-and-exponential-map
- lem-gr-geodesic-extension-from-compact-length
- lem-gr-corresponding-set-smooth-extension
- thm-gr-convex-normal-neighborhoods
- lem-gr-joint-exponential-diffeomorphism
- lem-gr-position-vector-differential
- thm-fundamental-theorem-on-flows
- thm-smooth-dependence-of-ode-solutions-on-parameters
- thm-flowout-theorem
- lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it
- lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking
- thm-smooth-partitions-of-unity-exist-on-manifolds
- def-gr-causal-curves-and-reachability
- lem-gr-causal-curve-calculus
- thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
- lem-gr-portion-inextendibility
- lem-gr-isometric-immersion-rigidity
- lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form
- def-gr-smooth-lorentzian-objects
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  lem-gr-strong-causality-compact-length-bound: mathematical-premise
  lem-gr-basic-limit-curve: mathematical-premise
  lem-gr-causal-curve-conventions: mathematical-premise
  thm-metric-compactness-equivalences: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  lem-gr-null-position-vector-forces-null-velocity: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-geodesic-extension-from-compact-length: mathematical-premise
  lem-gr-corresponding-set-smooth-extension: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  lem-gr-position-vector-differential: mathematical-premise
  thm-fundamental-theorem-on-flows: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  thm-flowout-theorem: mathematical-premise
  lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it: mathematical-premise
  lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  lem-gr-portion-inextendibility: mathematical-premise
  lem-gr-isometric-immersion-rigidity: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
sources:
  references:
  - title: 'J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification,
      arXiv:1309.7591v3, Lemmas 3.9/3.11 and Theorem 3.6: geometric exposure and restart mechanism; the past-side construction
      keeping the fixed matter model and original time orientation is developed explicitly here.'
    url: https://arxiv.org/pdf/1309.7591
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ be developments of the same fixed model and complete data, and let $(U,\varphi)$ be a common subdevelopment ([[def-gr-common-subdevelopment-and-corresponding-boundary]]). Write $\Sigma=j(\Sigma)$ and let $C_{\mathrm{corr}}\subseteq\partial U$ be its corresponding-boundary set. All causal relations and future normals below use the original $N,N'$. A tangent vector $v$ is future timelike when $g(v,v)<0$ and $g(v,N)<0$, in the convention of [[def-gr-smooth-lorentzian-objects]]. If $C_{\mathrm{corr}}\cap J^-(\Sigma)\ne\varnothing$, the following past-side construction exists.

**(a) Exposure and localization.** There is $p\in C_{\mathrm{corr}}\cap I^-(\Sigma)$ with

$$J^+(p)\cap\partial U\cap J^-(\Sigma)=\{p\}.$$

Choose a strictly convex normal neighborhood $C_0\subseteq I^-(\Sigma)$ (every pair has a unique contained geodesic and each base exponential has a smooth inverse on $C_0$, as in [[thm-gr-convex-normal-neighborhoods]]) of $p$ with $C_0\cap\partial U\subseteq C_{\mathrm{corr}}$. There is an open causally convex diamond $W$ containing $p$, with compact closure $\overline W\subseteq C_0$, and a point $q\in W\cap I^-(p)$ such that

$$J^+(q)\cap U^c\cap J^-(\Sigma)\subseteq W.$$

**(b) The whole restart surface.** For $x\in C_0$ put $\xi(x)=\exp_q^{-1}(x)$ and define the continuous local forward radial separation

$$r_q(x):=\begin{cases}\sqrt{-g_q(\xi(x),\xi(x))},&\xi(x)\text{ is future timelike},\\0,&\text{otherwise}.\end{cases}$$

Set $K=\overline W\cap U^c\cap J^-(\Sigma)$ and $r_0=\max_K r_q$. Then $r_0>0$, every maximizer lies in $W\cap\partial U\cap C_{\mathrm{corr}}$, and $r_q>r_0$ in $W$ implies membership in $U$. The connected component $S$ of $\{x\in W:r_q(x)=r_0\}$ containing any chosen maximizer is a nonempty smooth embedded spacelike hypersurface without boundary, closed relative to $W$, and

$$S\subseteq (W\cap U)\cup(W\cap\partial U\cap C_{\mathrm{corr}}),\qquad S\cap\partial U\ne\varnothing.$$

**(c) Thin tubes and original-oriented comparison.** On the positive radial region put $X=-\nabla r_q$, a unit future timelike vector field, and let $F(s,t)$ be its local flow from $s\in S$. For any prescribed open neighborhood $O\subseteq W$ of the whole $S$ and positive continuous ceiling $b:S\to(0,\infty)$, there is a smooth positive width $\delta\le b$ with $\delta<r_0/8$ such that, on $\mathcal D_\delta=\{(s,t):s\in S,\ |t|<\delta(s)\}$, $F$ is a diffeomorphism onto an open tube $\mathcal N\subseteq O$ and $r_q(F(s,t))=r_0+t$. Write $q_0=g|_{TS}$ and $q_t=F_t^*g|_{TS}$. One has $F^*g=-dt^2+q_t$, $q_t\ge q_0/2$, and $|d\delta|_{q_0}\le1/(8\sqrt2)$. Moreover:

1. causal curves in $\mathcal N$ are graphs in $t$, with finite total $q_0$-length of their base projections, and meet $S$ at most once;
2. every causal curve inextendible in $U\cup\mathcal N$ meets the original $\Sigma$ exactly once;
3. for $y=F(s,t_y)\in\mathcal N\cap U$, the radial segment between $0$ and $t_y$, excluding its base $s$, lies in $U$. If $t_y<0$ then $s\in U$, and whenever $s\in U$ the inclusive segment lies in $U$. If a local isometry $\Theta:\mathcal N\to M'$ preserves the original time orientation and agrees on $S$ with the corresponding-set smooth extension $\Phi$, then $\Theta=\varphi$ on $\mathcal N\cap U$;
4. every smaller smooth positive width $\widetilde\delta\le\delta$ with $|d\widetilde\delta|_{q_0}\le1/(4\sqrt2)$ retains conclusions 1-3. Such a width exists inside any further prescribed open neighborhood of $S$ and below any further positive continuous ceiling, by the same construction.

No matter field, future unit normal, initial second fundamental form or complete model data is reversed. In particular the past-side construction applies to every fixed admissible model of [[def-gr-development-and-data-fixing-isometry]], without a model time-reversal assumption. No compactness of $S$ or uniform positive lower bound for the tube width is assumed.

## Facts & Assumptions

**Given:** Countable and Dependent Choice, two original-oriented developments of the same fixed data, their common subdevelopment, and a nonempty corresponding set on the past side of the original initial surface.

[L1] The original $\Sigma$ is Cauchy in $M,M'$ and $U$; each is globally hyperbolic, strongly causal and causal, with closed causal relation and the disjoint side decomposition $M=I^-(\Sigma)\sqcup\Sigma\sqcup I^+(\Sigma)$. Both $J^\pm(\Sigma)$ are closed. Future causal curves from a point of $U\cap I^-(\Sigma)$ to $\Sigma$, and causal segments with both endpoints in $U$, stay in $U$ ([[def-gr-development-and-data-fixing-isometry]], [[thm-gr-cauchy-surface-implies-globally-hyperbolic]], [[lem-gr-globally-hyperbolic-causal-structure]], [[lem-gr-cauchy-set-topology-and-graph]], [[lem-gr-subdevelopment-convexity]] clauses (b)-(c)).

[L2] On the relevant connected component, a smooth complete proper auxiliary Riemannian metric $h$ induces the manifold topology. Strong causality bounds auxiliary lengths of causal segments in a compact set. Only the finite-interval result of [[lem-gr-basic-limit-curve]] clauses (a1)-(a4) is used: fixed-length auxiliary-arclength curves with initial values converging admit uniform causal limits which are nonconstant on each nondegenerate interval and obey the uniform local-clock estimate $v-u\le C(x^0(\alpha(v))-x^0(\alpha(u)))$ whenever the segment stays in a dominated cone chart; $C$ depends on that chart and $h$. The eventual-domain half-line extraction is proved in step 1.1 below, rather than assumed from clause (b). One-sided inextendible curves have inextendible extensions; sequential compactness is compactness here under the declared choice axioms ([[thm-gr-auxiliary-complete-riemannian-metric]], [[lem-gr-strong-causality-compact-length-bound]], [[lem-gr-basic-limit-curve]], [[lem-gr-causal-curve-conventions]], [[thm-metric-compactness-equivalences]]).

[L3] Chronology is open, causal relations are transitive, and either mixed timelike/causal concatenation is timelike after push-up. A causal segment between points of an achronal set is null-geodesic: a timelike portion or a genuine corner instead gives a timelike endpoint relation. Maximal nonconstant causal geodesics are inextendible causal curves, meet a Cauchy surface once, and preserve null character and original time direction. Geodesic initial-value uniqueness and finite-affine-end compact-length extension hold ([[lem-gr-chronology-openness]], [[lem-gr-push-up-rule]], [[thm-gr-normal-neighborhood-causal-cone]], [[lem-gr-null-position-vector-forces-null-velocity]], [[lem-gr-maximal-geodesics-and-extension]], [[lem-gr-parallel-transport-and-geodesic-speed]], [[thm-gr-local-geodesics-and-exponential-map]], [[lem-gr-geodesic-extension-from-compact-length]]).

[L4] The corresponding-set map $f=\Phi|_{U\cup C_{\mathrm{corr}}}$ is a homeomorphism, its smooth extension is a local diffeomorphism there and agrees with $\varphi$ on $U$. The corresponding set is relatively open in the boundary. Its metric, matter and connection jets agree on $U\cup C_{\mathrm{corr}}$, so it carries affine boundary geodesics and preserves the original causal direction there. Correspondence is closed under joint boundary limits, directly from its neighborhood-witness definition ([[def-gr-common-subdevelopment-and-corresponding-boundary]], [[lem-gr-corresponding-set-smooth-extension]] clauses (a)-(e)).

[L5] Convex normal geometry supplies smooth inverse exponential maps and the radial Gauss differential. Timelike radial lines have constant proper speed. Smooth flows, uniqueness and transverse flowouts are available. Countable relatively compact coordinate refinements, locally finite shrinkings and smooth subordinate partitions on a smooth hypersurface are available under Countable Choice ([[thm-gr-convex-normal-neighborhoods]], [[lem-gr-joint-exponential-diffeomorphism]], [[lem-gr-position-vector-differential]], [[thm-fundamental-theorem-on-flows]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]], [[thm-flowout-theorem]], [[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]], [[lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[L6] Causal curves have locally absolutely continuous coordinate expressions and nonzero causal velocity almost everywhere; smooth composition and the scalar fundamental theorem apply, and finite causal concatenations are valid. A maximal portion in an open submanifold is inextendible there. Local isometries preserve connection and geodesics, and an original-time-orientation-preserving isometry carries the original future unit normal of a spacelike hypersurface to that of its image ([[def-gr-causal-curves-and-reachability]], [[lem-gr-causal-curve-calculus]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[lem-gr-portion-inextendibility]], [[lem-gr-isometric-immersion-rigidity]], [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]]).

## Proof

**Proof technique:** direct, with separate geometric contradictions; the time orientation and solution fields remain fixed.

1.1 (Compact truncated futures in the original orientation.) For every $a\in M$, $D_a=J^+(a)\cap J^-(\Sigma)$ is compact. The cases $a\in\Sigma$ and $a\in I^+(\Sigma)$ give $\{a\}$ and the empty set by acausality and [L1]. Otherwise $a\in I^-(\Sigma)$. For any sequence $x_n\in D_a$, choose future causal curves from $a$ through $x_n$ to points of $\Sigma$, and let $L_n$ be their total auxiliary arclength. If a subsequence has bounded $L_n$, its $x_n$ lie in a compact $h$-ball about $a$, so have a convergent subsequence with limit in the closed $D_a$. If not, pass to $L_n\ge n$ and parametrize the curves by arclength on $[0,L_n]$ starting at $a$. For each integer $m$, discard the finitely many indices $n<m$, apply ONLY the finite-interval clauses of [L2] to the restrictions on $[0,m]$, and extract recursively nested subsequences. Their diagonal subsequence has compatible uniform limits on every $[0,m]$: uniqueness of uniform limits makes them agree on overlaps. They define a future causal curve $\alpha:[0,\infty)\to M$ which is nonconstant on each nondegenerate interval. It has no future endpoint: if $\alpha(t)\to x$, choose a dominated cone chart containing its entire sufficiently late tail. For all $t>t_0$ in that tail the finite-interval local-clock estimate in [L2] gives $t-t_0\le C(x^0(\alpha(t))-x^0(\alpha(t_0)))$ with the same chart constant $C$; its right side is bounded by convergence while its left side diverges. Thus $\alpha$ is future-inextendible under the no-endpoint convention, and its image lies in $J^-(\Sigma)$ at every finite parameter by closedness. It misses $\Sigma$: after a hypothetical meeting all its later values would lie in $J^+(\Sigma)\cap J^-(\Sigma)=\Sigma$, contradicting acausality and nonconstancy. An inextendible extension supplied by [L2] cannot meet $\Sigma$ on a past extension either, since that would imply $a\in J^+(\Sigma)$ while $a\in I^-(\Sigma)$. This contradicts the Cauchy property. Thus every sequence has a convergent subsequence and [L2] gives compactness. The curves and $D_a$ stay in the component of $a$; that component is closed, so all compactness and length arguments remain valid on disconnected manifolds. [L1, L2, L6, choose, construct, contradiction]

1.2 (Past boundary and complement geometry.) For $x\in\partial U\cap I^-(\Sigma)$ one has $I^+(x)\cap I^-(\Sigma)\subset U$: for $y$ in that set, choose $z\in U\cap I^-(y)\cap I^-(\Sigma)$ near $x$ and concatenate $z\ll y\ll\Sigma$; future convexity [L1] forces $y\in U$. Consequently the past boundary is achronal. Also no $r\in\operatorname{int}(U^c)\cap J^-(\Sigma)$ satisfies $x\le r$. Otherwise $r\in I^-(\Sigma)$; take a short future timelike perturbation $r\ll r_+$ within that open complement and past side. Then $x\ll r_+$, so choose $z\in U\cap I^-(r_+)\cap I^-(\Sigma)$ near $x$. The concatenation $z\ll r_+\ll\Sigma$ violates future convexity. Finally a future causal segment between past-boundary points $x\le y$ stays on the boundary: every intermediate point is in $I^-(\Sigma)$; if in $U$, its continuation through $y$ to $\Sigma$ forces $y\in U$ by [L1]; if interior to $U^c$, the complement exclusion applied to $x$ is violated. Such a nonconstant segment is null-geodesic by [L3]. [L1, L3, L6, choose, construct, contradiction]

1.3 (Corresponding pairs stay on the same past side.) An interior point in $U\cap I^-(\Sigma)$ is joined to $\Sigma$ by a future timelike curve in $U$ by [L1]; its image is therefore in $I'^-(\Sigma')$ because $\varphi$ preserves the original time orientation. For a corresponding boundary point $x\in I^-(\Sigma)$, the neighborhood-witness definition [L4] excludes a target point on the open opposite side, and excludes $\Sigma'\subset\varphi(U)$ because the target is a boundary point. Thus $f(x)\in I'^-(\Sigma')$. The same arguments apply in $M'$ and to $\varphi(U)$. [L1, L4, algebra]

2.1 (A boundary generator and its last parameter.) Choose $p_0\in C_{\mathrm{corr}}\cap J^-(\Sigma)$, necessarily in $I^-(\Sigma)$ by [L1]. If it is already exposed as in (a), retain it. Otherwise choose a distinct $q_0\in J^+(p_0)\cap\partial U\cap J^-(\Sigma)$. By step 1.2 their joining segment is a future null geodesic. Its maximal affine extension $\gamma$, parametrized by $\gamma(0)=p_0$, $\gamma(1)=q_0$, meets $\Sigma$ at a parameter $T>1$ by [L3] and acausality: a crossing at $T\le1$ would put $q_0$ in both $J^+(\Sigma)$ and $J^-(\Sigma)$. For $0\le t<T$ the values lie in $I^-(\Sigma)$. The closed set $B=\{t\in[0,T]:\gamma(t)\in\partial U\}$ contains $[0,1]$, misses a neighborhood of $T$, and contains $[0,t]$ whenever it contains $t$, by step 1.2. Therefore $B=[0,b_*]$ with $1\le b_*<T$, not merely an unspecified closed subset. [step 1.2, L1, L3, choose, construct, algebra]

3.1 (Correspondence reaches the actual last boundary point.) In the nonexposed case of step 2.1, along that generator let $J=\{t\in[0,b_*]:\gamma(t)\in C_{\mathrm{corr}}\}$ and $s_* =\sup\{t:[0,t]\subseteq J\}$. Relative openness [L4] gives $s_*>0$. On $[0,s_*)$, $f\circ\gamma$ is a future affine null geodesic, and agrees with its maximal affine extension $\eta$ in $M'$ by [L3]. By step 1.3 its tail lies in the compact $J'^+(f(p_0))\cap J'^-(\Sigma')$ of step 1.1. Strong-causality auxiliary-length bounds and finite $s_*\le b_*$ let the compact-length extension theorem [L3] extend $\eta$ beyond any putative affine endpoint $s_*$. Hence $\eta(s_*)$ exists. Joint boundary closedness and the neighborhood-witness definition [L4] imply that $(\gamma(s_*),\eta(s_*))$ is still corresponding. If $s_*<b_*$, relative openness contradicts the supremum definition. Thus $s_*=b_*$ and $p=\gamma(b_*)\in C_{\mathrm{corr}}\cap I^-(\Sigma)$. [step 1.1, step 1.3, step 2.1, L2, L3, L4, construct, contradiction]

4.1 (Past exposure.) If a distinct $y\in J^+(p)\cap\partial U\cap J^-(\Sigma)$ existed, join $p$ to $y$ by the boundary null geodesic of step 1.2. Concatenate it with $\gamma|_{[0,b_*]}$. A genuine corner gives $p_0\ll y$ by [L3], contradicting past-boundary achronality. If the tangent rays agree, match the affine velocities by positive rescaling; geodesic uniqueness identifies an initial part with $\gamma((b_*,b_*+\varepsilon])$ for $0<\varepsilon<T-b_*$, contradicting the last boundary parameter. Thus $J^+(p)\cap\partial U\cap J^-(\Sigma)=\{p\}$. The initially exposed case of step 2.1 has the same conclusion directly. [step 1.2, step 2.1, step 3.1, L3, algebra, contradiction]

5.1 (Complement localization towards the past.) Given an open neighborhood $V$ of $p$, take a short past timelike curve $\zeta:[0,\varepsilon]\to M$ from $p$. If arbitrarily small positive $t$ failed the desired containment, choose $t_n\downarrow0$ and $x_n\in J^+(\zeta(t_n))\cap U^c\cap J^-(\Sigma)\cap V^c$. All lie in the closed part of the compact $J^+(\zeta(\varepsilon))\cap J^-(\Sigma)$ from step 1.1. A subsequence converges to $x\in U^c\cap J^-(\Sigma)\cap V^c$, and closed causality gives $p\le x$. If $x\in\partial U$, step 4.1 forces $x=p\in V$, a contradiction. Otherwise the complement exclusion in step 1.2 gives a contradiction. Hence for every sufficiently small positive $t$ the containment holds with $q=\zeta(t)\in I^-(p)$. [step 1.1, step 1.2, step 4.1, L1, L3, choose, contradiction]

6.1 (A precompact diamond.) Relative openness of $C_{\mathrm{corr}}$ and of $I^-(\Sigma)$ permits a strictly convex normal $C_0$ as in (a). Strong causality and the closed causal relation give points $p_1\ll p\ll p_2$ so close to $p$ that the diamond $W=I^+(p_1)\cap I^-(p_2)$ has $\overline W\subset C_0$. More explicitly choose an open neighborhood $V_2$ of $p$ such that causal curves with endpoints in $V_2$ stay in $C_0$, then choose $p_1,p_2\in V_2$; the compact diamond $J^+(p_1)\cap J^-(p_2)$ contains $\overline W$ and lies in $C_0$. A chronological diamond is causally convex by push-up. Apply step 5.1 with $V=W$ and small enough $t$ to have $q=\zeta(t)\in W$. This proves (a) without altering the original cones or any solution field. [step 5.1, L1, L3, L4, L5, choose, construct, algebra]

7.1 (Forward radius and boundary maximum.) The inverse exponential at $q$ is smooth on $C_0$. Its future timelike cone is open and has only null or zero vectors on its cone boundary; therefore the displayed zero extension of $\sqrt{-g_q(\xi,\xi)}$ is continuous. On its positive set the Gauss differential gives $\nabla r_q=-P(q,x)/r_q$, where $P(q,x)$ is the transported future radial position vector. Hence $g(\nabla r_q,\nabla r_q)=-1$, $\nabla r_q$ is past timelike and $X=-\nabla r_q$ is unit future timelike. The compact $K$ contains $p$ and $r_q(p)>0$, so a positive maximum $r_0$ exists. A maximizer has future timelike radial vector and is in $J^+(q)\cap U^c\cap J^-(\Sigma)$, hence in $W$ by (a). If it were interior to $U^c$, extend its radial geodesic a little farther to the future, still in $W\cap\operatorname{int}(U^c)\cap I^-(\Sigma)$; its radial proper length increases, contradicting maximality. Thus every maximizer is in $W\cap\partial U\cap C_{\mathrm{corr}}$. Also $r_q(x)>r_0$ with $x\in W\setminus U$ would give $x\in K$, a contradiction. [step 6.1, L1, L3, L5, algebra, contradiction]

8.1 (Whole spacelike component and compact ambient closure.) The level $r_q=r_0>0$ in $W$ is regular with timelike gradient by step 7.1. Its connected component $S$ through a maximizer is a nonempty embedded spacelike hypersurface without boundary and is closed relative to $W$. Every point of $S\setminus U$ is a boundary maximizer by the argument of step 7.1. Its ambient closure $A=\overline S^{\,M}$ is compact in $\overline W$. At every limit point the inverse exponential remains future timelike with squared norm $-r_0^2$; thus $r_q$ extends smoothly to a neighborhood of $A$ in $C_0$, and $A$ lies in its regular level. This proves (b); it does not assert compactness of $S$. [step 7.1, L5, algebra]

9.1 (Quantitative normal flow over the closure.) Near $A$, the unit future field $X=-\nabla r_q$ has radial flow $F(s,t)=\exp_q((1+t/r_0)\xi(s))$. Thus $r_q(F(s,t))=r_0+t$ and each flow line is an affine unit future timelike geodesic. Compactness of $A$ gives $a>0$ and a level neighborhood $B$ of $A$ on which the flow for $|t|\le a$ has compact ambient range. Smoothness and the compact unit tangent bundle over $A$ permit shrinking $B,a$ so that $q_0/2\le q_t\le2q_0$. On that range choose constants $c,C>0$ with $q_0\ge c h$ on the level and $|X|_h\le C$. The speed bound gives $d_h(F(s,t),s)\le C|t|$. These bounds concern the compact ambient closure, and require no completeness of the induced metric on $S$. [step 8.1, L2, L5, construct, algebra]

10.1 (Actual smooth-width derivative estimate.) For the prescribed $O,b$ define $\beta(s)=\min\{a/2,r_0/8,b(s),d_h(s,M\setminus O)/(2C)\}>0$. By [L5], take a countable locally finite smooth partition $(\rho_i)$ on $S$ with compact supports. Set $M_i=\sup_S|d\rho_i|_{q_0}<\infty$ and choose positive $a_i\le\tfrac12\inf_{\operatorname{supp}\rho_i}\beta$ with $a_iM_i\le2^{-i}/(8\sqrt2)$, discarding identically zero members. Countable Choice suffices. Then $\delta=\sum_i a_i\rho_i$ is smooth positive, $\delta\le\beta/2$, and $|d\delta|_{q_0}\le1/(8\sqrt2)$. The speed estimate keeps the tube in $O$. Whenever $s\to e\in A\setminus S$, relative closedness puts $e\in\partial W$, and $\delta\le d_h(s,M\setminus O)/(4C)\le d_h(s,M\setminus W)/(4C)$ makes $\delta(s)\to0$. [step 9.1, L2, L5, given, choose, construct, algebra]

11.1 (Tube diffeomorphism and causal graphs.) On $\mathcal D_\delta$, the radius identity makes equal image points have equal $t$, and flow uniqueness then makes their base points equal. Transversality to the spacelike level and the flow group law make the differential invertible. Thus $F$ is a diffeomorphism onto open $\mathcal N\subset O$, with $F^*g=-dt^2+q_t$. For a future causal curve $F(s(\lambda),t(\lambda))$, [L6] gives $q_t(s',s')\le(t')^2$ and $t'=dr_q(\gamma')>0$ almost everywhere, since $\nabla r_q$ is past timelike. Scalar composition and the fundamental theorem give strict increase of $t$. Also $|s'|_{q_0}\le\sqrt2 t'$, so total base length is at most $\sqrt2\operatorname{var}(t)\le2\sqrt2\sup_S\delta<\infty$. In particular the curve is a graph in $t$, crosses $S$ at most once, and its base projection has Cauchy tails in $d_h$, with limits in compact $A$. Past parametrizations reverse the curve parameter, not the manifold orientation. This proves (c)1 and the stated metric assertions. [step 9.1, step 10.1, L2, L5, L6, algebra]

12.1 (Radial interior in the fixed past-side model.) If $y=F(s,t_y)\in\mathcal N\cap U$ with $t_y>0$, every radial point with $0<u\le t_y$ lies in $U$ because its radius exceeds $r_0$ by step 7.1. If $t_y<0$, the future radial segment goes from $y$ to $s$, and $s\in W\subset I^-(\Sigma)$ has a future timelike continuation to $\Sigma$. Future convexity [L1] puts this whole curve, including $s$, in $U$. At $t_y=0$ the base is $y\in U$. When $s,y\in U$, causal convexity gives the inclusive segment in $U$ for either sign. This proves the radial part of (c)3 using clause (b) of the original subdevelopment-convexity lemma, not a reversed development. [step 7.1, step 11.1, L1, L6, algebra]

12.2 (The signed future endpoint of an avoiding curve.) Suppose a future causal curve inextendible in $U\cup\mathcal N$ avoids $U$. It lies in $\mathcal N$, has $t\le0$ by step 7.1, and at its future end has $t\to H\le0$ and $s\to e\in A$ by step 11.1. If $e\in S$, the tube inequalities give $-\delta(e)\le H<\delta(e)$. When $H>-\delta(e)$ the extended flow gives an endpoint $F(e,H)\in\mathcal N$, impossible. For the remaining lower-face case $H=-\delta(e)$, put $z=t+\delta(s)>0$. The actual derivative bound gives $z'=t'+d\delta(s')\ge(7/8)t'>0$ almost everywhere. Integrating, its future limit is at least its positive value at any fixed earlier parameter, whereas $z\to H+\delta(e)=0$. This contradiction excludes the signed lower face. The direction is future increase of $t$ in the original $N$. [step 7.1, step 10.1, step 11.1, L6, contradiction, algebra]

13.1 (Noncompact surface ends and the original Cauchy surface.) If $e\in A\setminus S$, step 10.1 gives $\delta(s)\to0$, hence $H=0$ and the curve has ambient endpoint $e$. This point lies in $\overline W\subset C_0\subset I^-(\Sigma)$ and has future timelike radial inverse vector of norm squared $-r_0^2$, so $e\in I^+(q)$. If $e\notin U$, the containment in (a) would give $e\in W$, contradicting $e\in\partial W$. Therefore $e\in U$ and is an endpoint in $U\cup\mathcal N$, also impossible. Thus every inextendible causal curve in $U\cup\mathcal N$ meets $U$. Its maximal $U$-portion is inextendible in $U$ by [L6] and meets the original $\Sigma$ once. If the entire curve had two visits to $\Sigma$, causal convexity [L1] would put the intervening segment in $U$, giving two visits on the same maximal portion, a contradiction. Curve-parameter reversal covers past curves. This proves (c)2. [step 6.1, step 8.1, step 10.1, step 11.1, step 12.2, L1, L5, L6, contradiction, algebra]

13.2 (Original-oriented overlap agreement.) The local isometry $\Theta$ in (c)3 and $\Phi$ agree on $S$ and on tangent derivatives along $S$. Their differentials also agree on the original future unit normal by [L4], [L6], since both differentials preserve the original metric and future cone there. In this past-side construction that normal is $X$, so the two radial image geodesics have identical value and initial velocity at every base $s$, even if $s\in\partial U$. The punctured segment of step 12.1 lies in $U$; its $\varphi$-image is an affine geodesic, and its limiting base jet is given by the smooth extension $\Phi$. Geodesic uniqueness gives $\Theta(y)=\varphi(y)$ on $\mathcal N\cap U$. No exterior isometry of $\Phi$ is assumed. [step 12.1, L3, L4, L6, algebra]

14.1 (Admissible thinner tubes and unchanged data.) For any smaller smooth width with the bound in (c)4, the flow domain, metric comparisons and vanishing width at $A\setminus S$ persist. In step 12.2 the derivative estimate becomes $z'\ge(3/4)t'>0$, still excluding the lower face; the other endpoint and radial arguments are unchanged. Step 10.1 applied with a further prescribed open neighborhood and ceiling below $\delta$ gives the required smaller smooth width. Finally every construction used only the original metric, its original future causal curves, common map and original Cauchy surface. The solution fields were never transformed. In particular the equality of complete data on $S$ and $\Phi(S)$ uses their original future normals through [L4], [L6]. This proves all of (c) and the fixed-model scope. [step 10.1, step 11.1, step 12.1, step 12.2, step 13.1, step 13.2, L4, L6, algebra] ∎

## Remarks

The past boundary is exposed by following future null generators toward the original initial surface. Its local radius increases toward the future, so the avoiding-curve argument uses a future endpoint and an increasing signed lower-face function. These are the sign changes required by the past geometry; the physical normal and matter data do not change. Local complete-data uniqueness is applied afterward to the actual original-oriented restart data, in [[lem-gr-no-corresponding-boundary-points]].
