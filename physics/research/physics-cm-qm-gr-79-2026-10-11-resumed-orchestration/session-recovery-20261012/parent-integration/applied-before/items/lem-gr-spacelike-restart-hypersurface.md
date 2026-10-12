---
id: lem-gr-spacelike-restart-hypersurface
kind: lemma
title: "The spacelike restart surface at an exposed boundary point: maximizers on the boundary, the level hypersurface and its radial tube"
status: draft
origin: session
domain: mathematics
dependency_level: 33
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, lem-gr-portion-inextendibility, lem-gr-corresponding-boundary-structure, lem-gr-corresponding-set-smooth-extension, lem-gr-boundary-null-geodesic-segment, lem-gr-exposed-boundary-point, lem-gr-time-separation-maximizers, lem-gr-compact-past-above-cauchy-set, lem-gr-globally-hyperbolic-causal-structure, thm-gr-convex-normal-neighborhoods, thm-gr-normal-neighborhood-causal-cone, thm-gr-local-geodesics-and-exponential-map, lem-gr-joint-exponential-diffeomorphism, lem-gr-position-vector-differential, lem-gr-parallel-transport-and-geodesic-speed, lem-gr-push-up-rule, lem-gr-chronology-openness, lem-gr-causal-curve-calculus, thm-fundamental-theorem-on-flows, thm-flowout-theorem, thm-smooth-dependence-of-ode-solutions-on-parameters, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-embedded-submanifold-and-slice-chart, def-continuity-real, def-countable-choice, def-dependent-choice, thm-smooth-partitions-of-unity-exist-on-manifolds, lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it, lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking, thm-gr-auxiliary-complete-riemannian-metric, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, lem-gr-isometric-immersion-rigidity, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-portion-inextendibility: mathematical-premise
  lem-gr-corresponding-boundary-structure: mathematical-premise
  lem-gr-corresponding-set-smooth-extension: mathematical-premise
  lem-gr-boundary-null-geodesic-segment: mathematical-premise
  lem-gr-exposed-boundary-point: mathematical-premise
  lem-gr-time-separation-maximizers: mathematical-premise
  lem-gr-compact-past-above-cauchy-set: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  lem-gr-position-vector-differential: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  thm-fundamental-theorem-on-flows: mathematical-premise
  thm-flowout-theorem: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-continuity-real: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it: mathematical-premise
  lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  lem-gr-isometric-immersion-rigidity: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): the construction of the spacelike surface S = tau_q^{-1}(tau_0) cap W cap I^+(iota(M)), the radial formula (3.12) and the past collar in the proof of Theorem 3.6, printed pp. 18-19"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: continuous time separation, the Gauss lemma and causal convexity, Theorems 2.6, 2.37, 2.41, Proposition 2.43 printed pp. 27, 41-44 and 97-99"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---


## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let
$(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ be developments of the same data
([[def-gr-development-and-data-fixing-isometry]]), $(U,\varphi)$ a common
subdevelopment ([[def-gr-common-subdevelopment-and-corresponding-boundary]]
clause (a)), $\Sigma:=j(\Sigma)$, and let $p\in\partial U$ be an exposed
boundary point in the sense of [[lem-gr-boundary-null-geodesic-segment]]:
$$J^-(p)\cap\partial U\cap J^+(\Sigma)=\{p\}.$$
Fix a strictly convex normal neighbourhood $C$ of $p$
([[thm-gr-convex-normal-neighborhoods]]) with $C\subseteq I^+(\Sigma)$ and
$C\cap\partial U\subseteq C_{\mathrm{corr}}$, where $C_{\mathrm{corr}}$ is the
corresponding set of [[lem-gr-corresponding-set-smooth-extension]] (possible
because that set is open in $\partial U$ and $I^+(\Sigma)$ is open). Let
$p_1\ll p\ll p_2$ be points of $C$ such that $W:=I^+(p_1)\cap I^-(p_2)$
satisfies $\overline W\subseteq C$ (possible: strong causality at $p$ supplies
a neighbourhood $V_2\subseteq C$ of $p$ such that every causal curve with
both endpoints in $V_2$ is contained in $C$, and then
$\overline W\subseteq J^+(p_1)\cap J^-(p_2)\subseteq C$ for $p_1,p_2\in V_2$
by the same argument). Then $W$ is open, causally convex, $p\in W$, and
$\overline W$ is compact. Let $q\in W\cap I^+(p)$ be a point with
$$J^-(q)\cap U^c\cap J^+(\Sigma)\subseteq W,$$
chosen so close to $p$ along a future timelike curve that also $q\in W$
([[lem-gr-exposed-boundary-point]]). Let $\tau_q$ be the time separation from
$q$ ([[lem-gr-time-separation-maximizers]]) and put
$$K:=\overline W\cap U^c\cap J^+(\Sigma),\qquad \tau_0:=\max\{\tau_q(r):r\in K\}.$$
Let $W^\circ:=W\cap I^+(\Sigma)$ and let $S$ be the connected component of
the closed-in-$W^\circ$ set $\{x\in W^\circ:\tau_q(x)=\tau_0\}$ that contains
a maximizer of $\tau_q$ over $K$. Then:

**(a)** $\tau_0>0$; every maximizer of $\tau_q$ over $K$ lies in
$W\cap\partial U\cap C_{\mathrm{corr}}$; every $x\in W$ with
$\tau_q(x)>\tau_0$ lies in $U$; every $x\in W\cap U^c\cap J^+(\Sigma)$ with
$\tau_q(x)=\tau_0$ lies in $\partial U\cap C_{\mathrm{corr}}$.

**(b)** $S$ is a nonempty smooth embedded spacelike hypersurface of $M$
without boundary, subsets $S\subseteq(W\cap U)\cup(W\cap\partial U\cap
C_{\mathrm{corr}})$ and $S\cap\partial U\ne\varnothing$; moreover
$S\subseteq\{x:\tau_q(x)=\tau_0\}$ and every point of $S\cap U^c$ lies in
$\partial U\cap C_{\mathrm{corr}}$.

**(c)** There is a smooth positive function $\delta:S\to(0,\infty)$ with the
following properties. Define $X:=\nabla\tau_q/g(\nabla\tau_q,\nabla\tau_q)$
(so that $d\tau_q(X)=1$) on $\{\tau_q>0\}\cap W$, let $\phi_t$ be its local
flow, and put
$$F:S\times(-\delta,\delta)\to M,\qquad F(s,t):=\phi_t(s),\qquad N:=F\bigl(S\times(-\delta,\delta)\bigr).$$
Then $F$ is well defined and smooth, $N\subseteq W$ is open,
$F:S\times(-\delta,\delta)\to N$ is a diffeomorphism,
$\tau_q(F(s,t))=\tau_0+t$, and:

1. every causal curve in $N$ is, in the coordinates $(s,t)$, of the form
   $t\mapsto F(s(t),t)$ with $s(t)$ of finite length in the induced metric
   of $S$, and it meets $S$ in at most one parameter value;
2. every causal curve in $U\cup N$ that is inextendible in $U\cup N$ meets
   $U$, and consequently meets $\Sigma$ in exactly one parameter value; in
   particular no causal curve in $U\cup N$ that is inextendible in $U\cup N$
   and whose image is disjoint from $U$ exists;
3. for every $y\in N\cap U$ there is a unique $s\in S$ with $y=F(s,t_y)$, and the **punctured radial segment**
$$\{F(s,u):u\text{ between }0\text{ and }t_y,\ u\ne0\}$$
is contained in $U$. The base belongs to $U\cup C_{\mathrm{corr}}$, and the full segment including the base is contained in $U$ whenever $s\in U$. In particular, if $t_y<0$ then also $s\in U$. If $\Theta:N\to M'$ is a time-orientation-preserving local isometry with $\Theta|_S=\Phi|_S$, where $\Phi$ is the smooth extension of the common-subdevelopment map $\varphi$, then $\Theta=\varphi$ on $N\cap U$;
4. the tube can be chosen inside any prescribed open neighbourhood $O\subseteq W$ of the whole $S$, and below any prescribed positive continuous width ceiling on $S$. More quantitatively, write $q_0=g|_{TS}$ and $q_t=F_t^*g|_{TS}$. The construction gives $0<\delta<\tau_0/8$, $q_t\ge\tfrac12q_0$ for $|t|<\delta(s)$ and $|d\delta|_{q_0}\le1/(8\sqrt2)$. Every smooth positive smaller width $\widetilde\delta\le\delta$ satisfying $|d\widetilde\delta|_{q_0}\le1/(4\sqrt2)$ retains conclusions 1-3.

No compactness of $S$ or positive uniform lower bound for $\delta$ is assumed. The radial segment in clause 3 excludes its base because $S\cap\partial U\ne\varnothing$.

## Facts & Assumptions

**Given:** Countable and Dependent Choice, the two developments and common subdevelopment, the exposed point and the exact configuration $C,W,q,K,\tau_0,S$ in the Statement.

[L1] The developments are globally hyperbolic. Time separation is finite and upper semicontinuous on compact sets, with its positive set $I^-(q)$ and its smooth radial formula on the causally convex $W\subset C$; $J^+(\Sigma)$ is closed and $J^-(q)\cap J^+(\Sigma)$ is compact ([[lem-gr-time-separation-maximizers]], [[lem-gr-compact-past-above-cauchy-set]], [[lem-gr-globally-hyperbolic-causal-structure]]).

[L2] Normal geometry gives the smooth inverse exponential on $C$, radial geodesics and the Gauss differential $d(g_q(\exp_q^{-1}x,\exp_q^{-1}x))=2g(P(q,x),\cdot)$, with constant radial geodesic speed ([[thm-gr-convex-normal-neighborhoods]], [[lem-gr-joint-exponential-diffeomorphism]], [[lem-gr-position-vector-differential]], [[lem-gr-parallel-transport-and-geodesic-speed]], [[thm-gr-normal-neighborhood-causal-cone]]). Smooth geodesic/flow existence, uniqueness and parameter dependence are [[thm-gr-local-geodesics-and-exponential-map]], [[thm-fundamental-theorem-on-flows]] and [[thm-smooth-dependence-of-ode-solutions-on-parameters]]; an injective transverse flowout is [[thm-flowout-theorem]].

[L3] The future boundary is achronal, causal curves from $\Sigma$ to a point of $U\cap I^+(\Sigma)$ stay in $U$, and causal segments with both endpoints in $U$ stay in $U$ ([[lem-gr-corresponding-boundary-structure]], [[lem-gr-subdevelopment-convexity]]). The corresponding set is open in the boundary and its smooth extension $\Phi$ preserves metric and connection on $U\cup C_{\mathrm{corr}}$ ([[lem-gr-corresponding-set-smooth-extension]]).

[L4] Under Countable Choice, countable relatively compact coordinate refinements, locally finite shrinkings and smooth subordinate partitions are available ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]], [[lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]]). A smooth auxiliary complete Riemannian metric $h$ with compatible distance topology exists ([[thm-gr-auxiliary-complete-riemannian-metric]]).

[L5] Causal curves are locally absolutely continuous with nonzero causal velocity almost everywhere; smooth composition obeys the chain rule, finite concatenation is valid, and the fundamental theorem of calculus applies under the declared choice assumptions ([[def-gr-causal-curves-and-reachability]], [[lem-gr-causal-curve-calculus]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]). Maximal portions of an inextendible curve in an open subset are inextendible there ([[lem-gr-portion-inextendibility]]). The common subdevelopment has $\Sigma$ Cauchy ([[def-gr-development-and-data-fixing-isometry]]).

[L6] Local isometries preserve the Levi-Civita connection and affinely parametrized geodesics; their differentials take the future unit normal of a spacelike hypersurface to the future unit normal of its image ([[lem-gr-isometric-immersion-rigidity]], [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]]).

## Proof

1.1 (Maximum and its boundary location.) The compact set $K$ is nonempty because it contains $p$; $\tau_q$ is finite and upper semicontinuous on $K$, so its maximum is attained and $\tau_0\ge\tau_q(p)>0$ by [L1]. A maximizer $r$ belongs to $I^-(q)\cap U^c\cap J^+(\Sigma)$, hence to $W$ by the assumed containment, and to $I^+(\Sigma)$ since $r\notin\Sigma\subset U$. If $r$ were interior to $U^c$, the timelike radial geodesic from $r$ to $q$ could be continued a little to the past within $W\cap\operatorname{int}(U^c)\cap I^+(\Sigma)$ by [L2]. Its extended positive proper length exceeds $\tau_0$, contradicting maximality on $K$. Thus every maximizer lies in $W\cap\partial U\subset C_{\mathrm{corr}}$. If $x\in W$ has $\tau_q(x)>\tau_0$ and is outside $U$, then $x\in K$ because $W\subset I^+(\Sigma)$, a contradiction. The same boundary-location argument applies to each $x\in W\cap U^c\cap J^+(\Sigma)$ with $\tau_q(x)=\tau_0$. This proves (a). [given, L1, L2, L3, algebra, contradiction]

2.1 (The complete level surface and compact ambient closure.) On $W\cap I^-(q)$ define $R(x)=\sqrt{-g_q(\xi(x),\xi(x))}$ with $\xi=\exp_q^{-1}x$; by [L1], $R=\tau_q$ there. The Gauss differential [L2] gives $\nabla R=-P(q,x)/R$, so $g(\nabla R,\nabla R)=-1$ and $\nabla R$ is future-directed; its negative $X$ is unit past-directed. The level $\tau_q=\tau_0>0$ is therefore a smooth spacelike hypersurface in $W$. Its connected components are open and closed in this regular level, so the specified component $S$ is embedded without boundary and closed relative to $W$. It contains the chosen boundary maximizer, and every point of $S\setminus U$ is a boundary maximizer by step 1.1. Hence (b) holds. Let $A=\overline S^{\,M}\subset\overline W$; this is compact, although $S$ itself need not be compact. In the normal chart of $C$, every limit point of $S$ still has past timelike inverse vector of norm squared $-\tau_0^2$. Thus $R$ is smooth on an open neighbourhood of $A$ in $C$, and $A$ lies in its regular level $R=\tau_0$. [step 1.1, L1, L2, algebra]

3.1 (Quantitative normal flow over the ambient closure.) Extend $X=-\nabla R$ to its smooth domain near $A$. The radial formula shows directly that its flow is $F(s,t)=\exp_q((1+t/\tau_0)\xi(s))$ while defined, so $R(F(s,t))=\tau_0+t$ and its lines are unit affinely parametrized past timelike geodesics by [L2]. Compactness of $A$ and openness of the smooth flow domain give $a>0$, an open neighbourhood $B$ of $A$ in the extended level, and a compact ambient set containing every $F(s,t)$ for $s\in B$, $|t|\le a$ after shrinking $B,a$. Smoothness of $dF$ and the positive metric on the extended level permit a further uniform shrinking with $\tfrac12q_0\le q_t\le2q_0$, where $q_t(V,V)=g(dF_tV,dF_tV)$ for $V$ tangent to that level. To see uniformity, the $h$-unit tangent bundle over compact $A$ is compact, $q_0$ has a positive minimum there and $q_t-q_0$ tends uniformly to zero; the bounds then persist near $A$. Likewise choose constants $c,C>0$ with $q_0\ge ch|_{TS}$ and $|X|_h\le C$ throughout this compact flow range. The flow speed gives $d_h(F(s,t),s)\le C|t|$. These are bounds on a compact extended level neighbourhood, not an assumption that $S$ is compact. [step 2.1, L2, L4, construct, algebra]

4.1 (Smooth thin width with an actual derivative estimate.) Let $O\subset W$ be any prescribed open neighbourhood of $S$, and let $b:S\to(0,\infty)$ be any prescribed continuous width ceiling, taking $O=W$, $b=1$ if none is specified. Set $\beta(s)=\min\{a/2,\tau_0/8,b(s),d_h(s,M\setminus O)/(2C)\}>0$. By [L4] choose a countable locally finite smooth partition $(\rho_i)$ with compact supports in $S$, indexed by a subset of the positive integers. Put $M_i=\sup_S|d\rho_i|_{q_0}<\infty$. Choose positive constants $a_i$ with $a_i\le\tfrac12\inf_{\operatorname{supp}\rho_i}\beta$ and $a_iM_i\le2^{-i}/(8\sqrt2)$, omitting any identically zero partition member. Countable Choice suffices. Define $\delta=\sum_i a_i\rho_i$. Local finiteness makes it smooth and positive; the partition identity gives $\delta\le\beta/2$, while $|d\delta|_{q_0}\le\sum_i a_i|d\rho_i|_{q_0}\le1/(8\sqrt2)$. The speed estimate and distance bound make $F(s,t)\in O$ for $|t|<\delta(s)$. Also $\delta(s)\to0$ whenever $s\to e\in A\setminus S$, since such $e$ lies in $\partial W$ and $\delta\le d_h(s,M\setminus W)/(4C)$. This constructs the required smooth width from quantified partition bounds; scaling an arbitrary continuous function is not used. [step 3.1, L4, given, choose, construct, algebra]

5.1 (Injectivity, the open tube and its metric.) Restrict the smooth flow to $\mathcal D_\delta=\{(s,t):s\in S,\ |t|<\delta(s)\}$. It is defined by step 4.1, and $\tau_q(F(s,t))=\tau_0+t$ because its image lies in $W$. If $F(s,t)=F(s',t')$, this identity gives $t=t'$ and flow uniqueness gives $s=s'$. Its differential is invertible at the zero section because $X$ is transverse to $S$, and everywhere by the flow group law; hence [L2] makes it a diffeomorphism onto an open $N\subset O$. Vectors $dF_tV$ are tangent to the $R$-level and orthogonal to $X$, so $F^*g=-dt^2+q_t$. All construction claims in (c), including its quantitative inequalities, now hold. [step 3.1, step 4.1, L2, algebra]

6.1 (Causal graphs and finite base length.) For a future causal curve $\gamma(\lambda)=F(s(\lambda),t(\lambda))$ in $N$, [L5] and step 5.1 give $q_t(s',s')\le(t')^2$ almost everywhere. Since $\nabla R$ is future timelike, $t'=dR(\gamma')<0$ almost everywhere, and the fundamental theorem makes $t$ strictly decreasing. The lower comparison bound gives $|s'|_{q_0}\le\sqrt2|t'|$ and hence the total $q_0$-length is at most $\sqrt2\operatorname{var}(t)\le2\sqrt2\sup_S\delta<\infty$. Thus the image is a graph in the time coordinate; integrated length on subintervals gives a locally Lipschitz graph in any base chart, without assuming that the inverse of the original time parametrization is a $C^1$ map. It crosses $t=0$ at most once. At either time end, tail $q_0$-length tends to zero; $q_0\ge ch$ from step 3.1 makes $s(\lambda)$ Cauchy in $d_h$, with a unique limit in compact $A$. Past curves are handled by reversal. This proves (c)1 and supplies the endpoint control used below. [step 3.1, step 5.1, L4, L5, algebra]

6.2 (Exact radial interior.) Let $y=F(s,t_y)\in N\cap U$. For $t_y>0$, all radial points with $0<u\le t_y$ lie in $U$ by step 1.1 because their time separation exceeds $\tau_0$; the base may lie on $\partial U$ and is excluded from this assertion. For $t_y<0$, $s$ is to the chronological past of $y$. Concatenate a timelike curve from $\Sigma$ to $s$ (since $s\in W\subset I^+(\Sigma)$) with the radial segment from $s$ to $y$. Its endpoint is $y\in U\cap I^+(\Sigma)$, so [L3]'s past-convexity clause puts the whole concatenation, including $s$ and the radial segment, in $U$. If $t_y=0$, $s=y\in U$ directly. If $s\in U$ and $t_y>0$, causal convexity with endpoints $y,s\in U$ also puts the inclusive segment in $U$. This proves precisely the radial assertions in (c)3. [step 1.1, step 5.1, L3, L5, algebra]

7.1 (Past endpoint of a hypothetical avoiding curve.) Suppose a future causal curve $\gamma$ inextendible in $U\cup N$ avoids $U$. Then it lies in $N$ and has $t\le0$ by step 1.1; equality may occur and is not excluded without proof. At its past end the decreasing time has supremum limit $H\le0$, and step 6.1 gives $s\to e\in A$. If $e\in S$, continuity and the tube inequalities imply $H\ge-\delta(e)$. If $H>-\delta(e)$, then also $H<\delta(e)$ since $\delta(e)>0$, so the smooth extended flow gives endpoint $F(e,H)\in N$, contradicting inextendibility. The only remaining possibility is $H=-\delta(e)$. Along the curve set $r=t+\delta(s)>0$. The actual derivative bound yields $r'=t'+d\delta(s')\le-(1-1/8)|t'|$, hence for any two ordered parameter values $\lambda_1<\lambda_2$, $r(\lambda_1)-r(\lambda_2)\ge(7/8)(t(\lambda_1)-t(\lambda_2))>0$. A past-end limit $r\to H+\delta(e)=0$ is impossible because it is at least the positive value of $r$ at each fixed later parameter. This excludes the signed lower face with the correct direction of monotonicity; no analysis of a second endpoint is needed. [step 1.1, step 4.1, step 6.1, L5, contradiction, algebra]

8.1 (Noncompact surface ends and the Cauchy conclusion.) If instead $e\in A\setminus S$, relative closedness gives $e\in\partial W$. Step 4.1 gives $\delta(s)\to0$, so the tube inequality forces $H=0$ and the smooth extended flow gives $\gamma\to e$. The point $e\in\overline W\subset C\subset I^+(\Sigma)$ has past timelike inverse exponential of radial norm $\tau_0$, so $e\in I^-(q)$ by [L2]. If $e\notin U$, the assumed containment $J^-(q)\cap U^c\cap J^+(\Sigma)\subset W$ would give $e\in W$, contradicting $e\in\partial W$. Therefore $e\in U$, again an endpoint in $U\cup N$. With step 7.1 this proves there is no $U$-avoiding inextendible curve. For any inextendible curve meeting $U$, [L5] makes each maximal $U$-portion inextendible in $U$, so it meets $\Sigma$ once. If two parameter visits to $\Sigma$ existed, [L3]'s causal convexity puts the intervening segment in $U$, making both visits belong to the same maximal $U$-portion, a contradiction. This proves (c)2 for the entire noncompact surface. [step 2.1, step 4.1, step 6.1, step 7.1, L2, L3, L5, algebra, contradiction]

9.1 (The map comparison and admissible thinner tubes.) For the conditional local isometry $\Theta$ of (c)3, its differential agrees with $d\Phi$ on $TS$ and, since both are future isometries at $S$, on the future unit normal by [L3], [L6]. They therefore agree on $X$, the past unit normal. The punctured radial segment of step 6.2 lies in $U$, so $\varphi$ maps it to an affinely parametrized geodesic by [L6], with limiting value and velocity at the base supplied by its smooth extension $\Phi$. The $\Theta$-image is a geodesic with the identical base value and velocity. Geodesic uniqueness [L2] gives $\Theta(y)=\varphi(y)$. Finally any smaller smooth positive width with the derivative bound in (c)4 inherits the flow domain, metric comparisons, speed bounds and vanishing at $A\setminus S$. The same proof uses $|d\widetilde\delta(s')|\le\tfrac14|t'|$ in step 7.1, still giving strict signed-face monotonicity; all other steps are unchanged. Step 4.1 already allows any prescribed open $O$ and ceiling $b$. Thus (c)3-4 and all conclusions hold. [step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 8.1, step 6.2, L2, L3, L6, algebra] ∎

## Remarks

The surface is retained whole. Compactness is used only for its ambient closure inside the given precompact diamond and for a smooth extension of the radial level geometry there. The smooth width comes from an explicit countable partition estimate and may tend to zero at the noncompact ends. Shrinking a tube for local uniqueness must preserve the stated derivative bound; clause (c)4 supplies such a shrink in any prescribed open neighbourhood of $S$.

The base of a radial segment may be a corresponding boundary point. The interior segment is in $U$, while its limiting first jet is read through the smooth extension $\Phi$. This is the exact statement needed to patch the local uniqueness isometry with the common-subdevelopment map.
