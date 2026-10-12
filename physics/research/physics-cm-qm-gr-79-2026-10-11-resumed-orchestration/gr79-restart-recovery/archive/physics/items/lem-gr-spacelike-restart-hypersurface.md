---
id: lem-gr-spacelike-restart-hypersurface
kind: lemma
title: "The spacelike restart surface at an exposed boundary point: maximizers on the boundary, the level hypersurface and its radial tube"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, lem-gr-portion-inextendibility, lem-gr-corresponding-boundary-structure, lem-gr-corresponding-set-smooth-extension, lem-gr-boundary-null-geodesic-segment, lem-gr-exposed-boundary-point, lem-gr-time-separation-maximizers, lem-gr-compact-past-above-cauchy-set, lem-gr-globally-hyperbolic-causal-structure, thm-gr-convex-normal-neighborhoods, thm-gr-normal-neighborhood-causal-cone, thm-gr-local-geodesics-and-exponential-map, lem-gr-joint-exponential-diffeomorphism, lem-gr-position-vector-differential, lem-gr-parallel-transport-and-geodesic-speed, lem-gr-push-up-rule, lem-gr-chronology-openness, lem-gr-causal-curve-calculus, thm-fundamental-theorem-on-flows, thm-flowout-theorem, thm-smooth-dependence-of-ode-solutions-on-parameters, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-embedded-submanifold-and-slice-chart, def-continuity-real, def-countable-choice, def-dependent-choice]
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
$$K:=\overline W\cap U^c\cap J^+(\Sigma),\qquad
\tau_0:=\max\{\tau_q(r):r\in K\}.$$
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
$$F:S\times(-\delta,\delta)\to M,\qquad F(s,t):=\phi_t(s),\qquad
N:=F\bigl(S\times(-\delta,\delta)\bigr).$$
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
3. for every $y\in N\cap U$ there is a unique $s\in S$ with $y=F(s,t_y)$ for
   some $t_y\in(-\delta(s),\delta(s))$, and the radial segment
   $\{F(s,u):u\text{ between }0\text{ and }t_y\}$ is contained in $U$;
   consequently $\psi(y)=\varphi(y)$ for the two maps under the local
   uniqueness identification of [[lem-gr-no-corresponding-boundary-points]].

## Facts & Assumptions

**Given:** developments $M,M'$ of the same data, a common subdevelopment $(U,\varphi)$, an exposed boundary point $p$, the neighbourhoods $C,W$ and the point $q$ as in the statement.

[L1] Time separation: $\tau_q:M\to[0,\infty)$ is finite on $J^-(q)$, the supremum is attained and maximizers are causal geodesics, and on a causally convex $W\subseteq C$ with $q\in W$ one has $\tau_q(r)=\sqrt{-g_q(\exp_q^{-1}r,\exp_q^{-1}r)}$ for $r\in W\cap I^-(q)$, with $\tau_q$ continuous on $W$ and upper semicontinuous on compact sets ([[lem-gr-time-separation-maximizers]] clauses (a)-(c)). Since $C$ is a strictly convex normal neighbourhood of each of its points and $W\subseteq C$ is causally convex, these assertions apply with base point $q$.

[L2] Compactness: $K$ is compact and contains $p$; and $J^-(q)\cap J^+(\Sigma)$ is compact ([[lem-gr-compact-past-above-cauchy-set]], [[lem-gr-globally-hyperbolic-causal-structure]] as used there; $\overline W\subseteq C$ compact). Moreover $p\in I^-(q)$ because $q\in I^+(p)$, so $\tau_q(p)>0$.

[L3] Geometry near $q$: the gradient $\nabla\tau_q$ is past-directed timelike on $\{\tau_q>0\}$ and the flow lines of $X=\nabla\tau_q/g(\nabla\tau_q,\nabla\tau_q)$ are the maximizer geodesics toward $q$; $d\tau_q(X)=1$ ([[lem-gr-time-separation-maximizers]] clause (b), [[lem-gr-position-vector-differential]], [[lem-gr-joint-exponential-diffeomorphism]], [[thm-gr-normal-neighborhood-causal-cone]]). The flow of a smooth vector field is smooth with derivative bounds $|d\phi_t|\le e^{C|t|}$ on compact subsets of the flow domain ([[thm-fundamental-theorem-on-flows]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]); a smooth field transverse to an embedded hypersurface has an injective flowout on a neighbourhood of the zero section ([[thm-flowout-theorem]]).

[L4] Achronality and convexity: $\partial U\cap I^+(\Sigma)$ is achronal; every causal curve in $M$ from $\Sigma$ to a point of $U\cap I^+(\Sigma)$ is contained in $U$; every causal curve with endpoints in $U$ is contained in $U$ ([[lem-gr-corresponding-boundary-structure]] clause (a), [[lem-gr-subdevelopment-convexity]] clauses (a) and (c)).

[L5] Corresponding points and strict maximum: $C_{\mathrm{corr}}$ is open in $\partial U$ and $\Phi$ preserves the connection at points of $U\cup C_{\mathrm{corr}}$ ([[lem-gr-corresponding-set-smooth-extension]] clauses (a) and (c)); $W\cap\partial U\subseteq C_{\mathrm{corr}}$ by the choice of $C$.

[L6] Causal convexity of $W$: for every causal curve with both endpoints in $W$ the whole image lies in $W$; indeed for $x\le z\le y$ with $p_1\ll x$, $y\ll p_2$ the push-up rule gives $p_1\ll z\ll p_2$ ([[lem-gr-push-up-rule]], [[lem-gr-chronology-openness]]). Similarly $W\subseteq I^+(\Sigma)$ since $W\subseteq C\subseteq I^+(\Sigma)$.

No choice principle beyond the two declared axioms is used in this item.

## Proof

**Proof technique:** direct.

1.1 (Attainment and the location of maximizers; clause (a).) $K$ is compact ([L2]), nonempty ($p\in K$, [L2]), and $\tau_q$ is upper semicontinuous on $K$ and finite there, so $\tau_0$ is attained ([L1]); $\tau_0\ge\tau_q(p)>0$ ([L2]). Let $r_0\in K$ be a maximizer. Then $\tau_q(r_0)=\tau_0>0$, so $r_0\in I^-(q)$; and $r_0\in J^+(\Sigma)\setminus\Sigma$ (as $\Sigma\subseteq U$ and $r_0\in U^c$), so $r_0\in I^+(\Sigma)$. Hence $r_0\in J^-(q)\cap U^c\cap J^+(\Sigma)\subseteq W$ by the choice of $q$, so $r_0\in W$. Suppose $r_0\in U^c\setminus\partial U$. Then $r_0\in\operatorname{int}(U^c)$ is an interior point of the complement and lies in the open set $W$. Let $\gamma$ be a maximizer from $r_0$ to $q$ and continue it a little to the past: for small $\varepsilon>0$ the point $r':=\gamma(-\varepsilon)$ lies in $W\cap\operatorname{int}(U^c)\cap I^+(\Sigma)=W\cap U^c\cap J^+(\Sigma)$ (all three sets open at $r_0$) and
$$\tau_q(r')\ \ge\ L_g(\gamma|_{[-\varepsilon,1]})\ =\ \tau_0+L_g(\gamma|_{[-\varepsilon,0]})\ >\ \tau_0,$$
contradicting the maximality of $\tau_0$ on $K$. Hence every maximizer lies in $\partial U\cap W$, and since $W\cap\partial U\subseteq C_{\mathrm{corr}}$ ([L5]) in $W\cap\partial U\cap C_{\mathrm{corr}}$. If $x\in W$ satisfied $\tau_q(x)>\tau_0$, then $x\in I^-(q)$ and $x\in W\subseteq I^+(\Sigma)$, so $x\in K$; if $x\notin U$ this contradicts the maximality of $\tau_0$, so $x\in U$. This proves all assertions of clause (a). [given, L1, L2, L4, L5, contradiction, algebra]

1.2 (The level set; clause (b).) On $W^\circ=W\cap I^+(\Sigma)$ the function $\tau_q$ is smooth with everywhere nonzero gradient ([L1], [L3]), so $Z:=\{x\in W^\circ:\tau_q(x)=\tau_0\}$ is a closed embedded $3$-submanifold of the open four-manifold $W^\circ$; its connected component $S$ is therefore an embedded submanifold of $W^\circ$ without boundary, hence of $M$, with timelike normal $\nabla\tau_q$ and thus spacelike. $S$ is nonempty because a maximizer $x_0$ of $\tau_q$ over $K$ satisfies $x_0\in W\cap I^+(\Sigma)$ and $\tau_q(x_0)=\tau_0$, so $x_0\in Z$. Since $S\subseteq Z\subseteq W^\circ\subseteq W$ and every point of $Z$ with $\tau_q(x)=\tau_0>0$ satisfies $x\in I^-(q)$, we get $S\subseteq W\cap(\overline U\cup\partial U)$: indeed if $x\in S\cap U^c$ then $x\in W\cap U^c\cap J^+(\Sigma)$ ([L6]) with $\tau_q(x)=\tau_0$, so clause (a) gives $x\in\partial U\cap C_{\mathrm{corr}}$; in particular $S\cap\partial U\ne\varnothing$ since the maximizer $x_0$ lies in $S\cap\partial U$. This is clause (b). [step 1.1, L1, L3, L5, L6, algebra]

2.1 (The flow tube.) Write $X:=\nabla\tau_q/g(\nabla\tau_q,\nabla\tau_q)$ on the open set $\{\tau_q>0\}\cap W$; then $d\tau_q(X)=1$, so along a flow line the parameter equals $\tau_q-\tau_0$ up to the initial value ([L3]). Choose a positive continuous function $\rho$ on $S$ with $\rho(s)\le\tfrac12\operatorname{dist}_h(s,M\setminus W)$ (distance in the auxiliary complete metric; positive because $s\in W$), and set $\delta:=\varepsilon\min(\rho,\delta_0)$ with $\varepsilon>0$ small and $\delta_0<\tau_0/4$; then $\delta$ is positive, continuous, bounded by $\delta_0$, vanishes toward the ends of $S$ (where $\rho\to0$), and has arbitrarily small Lipschitz constant with respect to the induced metric of the level sets (scaling by $\varepsilon$). For each $s\in S$, let $J_s$ be the maximal interval on which the flow line of $X$ through $s$ exists and stays in $W\cap\{\tau_q>0\}$; it is open and contains $0$ ([[thm-fundamental-theorem-on-flows]]). Since $\tau_q(F(s,t))=\tau_0+t$ and $\tau_q>0$ on the flow line as long as $\tau_0+t>0$, and since $W$ is open and contains $S$, the interval $J_s$ is a neighbourhood of $0$; shrinking $\varepsilon$ if necessary (uniformly over the compact subset $\overline S\cap\overline W$, using the distance bound $\operatorname{dist}_h(F(s,t),s)\le c_0|t|$ valid on the compact flow domain), we may assume $(-\delta(s),\delta(s))\subseteq J_s$ for every $s$. Then $F:S\times(-\delta,\delta)\to W$ is well defined and smooth, $F(s,0)=s$, and $F$ is an injective immersion because $X$ is transverse to $S$ ([[thm-flowout-theorem]]); since moreover $\tau_q\circ F(s,t)=\tau_0+t$, the map is injective and a diffeomorphism onto its image $N$ by the flow-box property. This is the construction of clause (c). [step 1.2, L1, L3, L6, construct]

3.1 (Finite length of the base curve, and at most one meeting with $S$.) Let $\gamma:I\to N$ be a causal curve and write it as $\gamma(t)=F(s(t),t_\gamma(t))$ with $t_\gamma=\tau_q\circ\gamma-\tau_0$. The curve $s(\cdot)$ is locally absolutely continuous and
$$-t_\gamma'^2+q_{t_\gamma}(s')(s',s')\le0\quad\text{a.e.},$$
where $q_\tau$ is the induced metric on the level set $F(S\times\{\tau\})$ pulled back to $S$ ([[def-gr-causal-curves-and-reachability]], [[lem-gr-causal-curve-calculus]]). Since $\nabla_X X=0$ with $X$ smooth on a compact neighbourhood of $\overline N$, the flow derivatives satisfy $\|d\phi_t\|\le e^{C|t|}$ for $|t|\le\delta_0$ on $S$ ([L3]), so $q_\tau(s)\le e^{2C\delta_0}q_0(s)$ at every $s$; hence
$$\int_I\sqrt{q_0(s')(s',s')}\,dt\ \le\ e^{C\delta_0}\int_I|t_\gamma'|\,dt\ =\ e^{C\delta_0}\cdot\operatorname{var}(t_\gamma)\ <\ \infty.$$
So $s(\cdot)$ has finite length in the fixed metric $q_0$. Since $\overline S\cap\overline W$ is compact and the intrinsic metric $q_0$ dominates the auxiliary metric $h$ there, $s(t)$ has a limit in $\overline S\cap\overline W$ whenever its parameter tends to an end of $I$ with $\operatorname{var}t_\gamma\to0$ near that end; in particular $s$ extends continuously to both ends of the interval and $\gamma$ converges in $M$ at an end whenever $t_\gamma$ does. Moreover $t_\gamma=\tau_q\circ\gamma-\tau_0$ is strictly monotone: on $\{\tau_q>0\}$ the $1$-form $d\tau_q$ has no nonzero causal kernel because $\nabla\tau_q$ is timelike, and it is continuous ([[def-continuity-real]]); hence its sign along the causal curve is constant and $t_\gamma$ is strictly monotone ([L1], [L3]). Consequently $\gamma$ meets $S$ (that is, $t_\gamma=0$) in at most one parameter value. This is clause (c)1. [step 2.1, L1, L3, def-gr-causal-curves-and-reachability, algebra]

4.1 (Every $U$-avoiding inextendible curve meets $S$; clause (c)2.) Let $\gamma:I\to U\cup N$ be a causal curve, inextendible in $U\cup N$ and with image disjoint from $U$. Then $\gamma\subseteq N\setminus U$ and $\gamma^{-1}(N)=I$; by [[lem-gr-portion-inextendibility]] applied with $V=N\subseteq U\cup N$, the curve $\gamma$ is inextendible in $N$. Write $\gamma(t)=F(s(t),t_\gamma(t))$ as in step 3.1. By clause (a), all points of $N$ with $t_\gamma>0$ (that is, $\tau_q>\tau_0$) lie in $U$; since $\gamma$ avoids $U$, $t_\gamma(t)<0$ for all $t$. Being strictly monotone, $t_\gamma$ is decreasing (the future-directed case; the past-directed case is the time reversal); let $L:=\lim_{t\to\sup I}t_\gamma$ and $H:=\lim_{t\to\inf I}t_\gamma$, with $-\delta_0<L\le H\le0$. [step 3.1, L4, step 4.1 of [[lem-gr-corresponding-set-smooth-extension]], algebra]

4.2 (End types.) Consider the past end $t\to\inf I$. By step 3.1, $s(t)$ converges in $\overline S\cap\overline W$ to a point $e$; write $e\in S$ or $e\in\overline S\setminus S$. Since $F$ is obtained from a smooth flow and $\operatorname{dist}_h(F(s,t),s)\le c_0|t|$, the curves $\gamma(t)$ converge in $M$ to the point $F(e,H)$ (where $F$ is extended by limits along flow lines) whenever $|H|<\delta(e)$; and $H\ge-\liminf_{t\to\inf I}\delta(s(t))\ge-\delta(e)$. Thus exactly one of the following holds at the past end:
(i) $e\in S$ and $H>-\delta(e)$: then $\gamma(t)\to F(e,H)\in N$, contradicting inextendibility of $\gamma$ in $N$;
(ii) $e\in S$ and $H=-\delta(e)$: the past end lies on the "past face" of the tube; then $H=\tau_q-\tau_0=-\delta(e)<0$ and $t_\gamma\le H<0$ on all of $I$;
(iii) $e\in\overline S\setminus S$: then $\operatorname{dist}_h(s(t),M\setminus W)\to0$, so $\delta(s(t))\to0$ by the choice of $\delta$, and therefore $H=0$ and $\gamma(t)\to e$; since $e\in\partial W\cap\{\tau_q=\tau_0\}$ and any point of $\partial W$ with $\tau_q=\tau_0$ lies in $U$ (otherwise it would belong to $K$ and to $J^-(q)\cap U^c\cap J^+(\Sigma)\subseteq W$, contradicting $e\in\partial W$), we get $e\in U\subseteq U\cup N$, so $\gamma$ converges to a point of $U\cup N$ at the past end, contradicting inextendibility in $U\cup N$.
The same analysis applies at the future end, with limits $L$ and $e'\in\overline S$; the analogue of (iii) again contradicts inextendibility in $U\cup N$. [step 4.1, L1, L4, L6, algebra]

4.3 (Exclusion of the remaining cases.) Suppose case (ii) occurs at the past end and let $e'\in\overline S$ be the limit of $s(t)$ at the future end. Case (iii) at the future end is excluded by step 4.2; case (i) at the future end is excluded because $\gamma$ is inextendible in $N$; so the future end is again of type (ii): $e'\in S$, $L=-\delta(e')$. Set $\varphi(t):=t_\gamma(t)+\delta(s(t))$ (the "signed distance to the past face"). Along $\gamma$,
$$\varphi'(t)=t_\gamma'(t)+\frac{d}{dt}\delta(s(t))\ \le\ t_\gamma'(t)+\ell\,\sqrt{q_{t_\gamma}(s')(s',s')}\ \le\ t_\gamma'(t)+\ell\,|t_\gamma'(t)|\ =\ (\ell-1)\,|t_\gamma'(t)|\ <\ 0$$
almost everywhere, where $\ell<1$ is the Lipschitz constant of $\delta$ with respect to the metrics $q_\tau$ (achieved by the choice of $\varepsilon$), and we used causality and $t_\gamma'<0$. If (ii) holds at both ends, then $\varphi\ge0$ on $I$ while $\varphi\to0$ at both ends and $\varphi$ is strictly decreasing, which is impossible. Hence (ii) cannot occur at the past end either. Similarly (with $\psi(t):=\delta(s(t))-t_\gamma(t)$ for the future face) the future face cannot be an end. Therefore every end of $\gamma$ is of type (i) or (iii), both of which are impossible; hence no causal curve in $U\cup N$ that is inextendible in $U\cup N$ can avoid $U$. [step 4.1, step 4.2, contradiction, algebra]

5.1 (Restatement; clause (c)2.) Combining steps 4.1-4.3: every causal curve in $U\cup N$ that is inextendible in $U\cup N$ meets $U$. Applying [[lem-gr-portion-inextendibility]] with $V=U\subseteq U\cup N$, each component of the preimage of $U$ is inextendible in $U$ and therefore meets $\Sigma$ ([[def-gr-development-and-data-fixing-isometry]] clause (a)5); so every such curve meets $\Sigma$ at least once. It meets $\Sigma$ at most once: if $\gamma(t_1),\gamma(t_2)\in\Sigma$ with $t_1<t_2$, the subsegment $\gamma|_{[t_1,t_2]}$ is a causal curve in $M$ with both endpoints in $U$ (as $\Sigma\subseteq U$), hence is contained in $U$ by [[lem-gr-subdevelopment-convexity]] clause (c) ([L4]), and its endpoints are causally related points of the Cauchy set $\Sigma$ of the development $U$, which are equal or fail the Cauchy property of $\Sigma$ in $U$ ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c), [[def-gr-development-and-data-fixing-isometry]] clause (a)5). This is clause (c)2. [step 4.1, step 4.2, step 4.3, L4, algebra]

6.1 (The radial segment lies in $U$; clause (c)3.) Let $y\in N\cap U$ and write $y=F(s,t_y)$ with $s\in S$, $|t_y|<\delta(s)$ uniquely. The radial segment $\Sigma_y:=\{F(s,u):u\text{ between }0\text{ and }t_y\}$ lies in $N$ and is a geodesic segment ([L3]); its image lies in $W$ by causal convexity of $W$ ([L6]), and in $I^+(\Sigma)$ by push-up applied to the timelike geodesic through the two endpoints $s,y\in W\subseteq I^+(\Sigma)$. 

If $t_y>0$: every point of $\Sigma_y\setminus\{s\}$ has $\tau_q=\tau_0+u>\tau_0$ and lies in $W$, hence in $U$ by clause (a).

If $t_y<0$: suppose $z:=\gamma(u_z)\in\Sigma_y\setminus\{s\}$ (writing $\gamma(s)$ for the flow line, parametrized by $u$) is not in $U$. If $u_z=0$ then $z=s\in S$: then the maximizer property shows $s\in U\cup\partial U$ by clause (b) and if $s\notin U$ we use the seed argument below. So suppose $u_z<0$ and $z\notin U$.
(i) If $z\in\partial U$: then $z$ and $s$ are timelike related (both lie on the timelike geodesic, and $z\ne s$), and $s\in\partial U$ or $s\in U$ by clause (b); if $s\in\partial U$ this contradicts the achronality of $\partial U\cap I^+(\Sigma)$ ([L4]); if $s\in U$ we argue as in (ii).
(ii) If $z\in\operatorname{int}(U^c)$: then since $y\in U$ and the subsegment of $\Sigma_y$ between $z$ and $y$ is a timelike geodesic crossing from $U^c$ into $U$, there is a boundary point $w\in\partial U$ on the segment between $z$ and $y$ with $z\ll w\ll y$; moreover there is a causal curve $\alpha$ from $\Sigma$ to $z$ (because $z\in\Sigma_y\subseteq W\subseteq I^+(\Sigma)$); concatenating $\alpha$ with $\Sigma_y|_{[u_z,u_y]}$ gives a causal curve from $\Sigma$ to the point $y\in U\cap I^+(\Sigma)$ passing through $z\notin U$, contradicting the convexity statement [[lem-gr-subdevelopment-convexity]] clause (a) ([L4]). The same contradiction arises if $s\in U$ and $z\in\partial U$: then the segment from $z$ to $y$ and a causal curve from $\Sigma$ to $z$ produce a curve from $\Sigma$ to $y\in U\cap I^+(\Sigma)$ through $z\notin U$.
In all cases $z\notin U$ is impossible; hence $\Sigma_y\setminus\{s\}\subseteq U$. This is clause (c)3, except for the assertion about $\psi$ and $\varphi$, which belongs to [[lem-gr-no-corresponding-boundary-points]] where the local uniqueness identification is constructed. [step 1.1, step 1.2, L3, L4, L6, contradiction, algebra] ∎

## Remarks

This is the central construction of the proof of Sbierski's Theorem 3.6. Clause
(a) is the maximality argument locating the maximizers on the boundary (the
key point is that a maximizer with positive time separation lies in
$J^-(q)\cap U^c\cap J^+(\Sigma)\subseteq W$, so that the maximizer can be
continued past it inside the open complement if it were an interior point of
the complement). Clause (b) is the level hypersurface; it is taken to be the
component of the level set inside the open manifold $W\cap I^+(\Sigma)$, so it
is a submanifold without boundary that need not be compact and may accumulate
on $\partial W$; the width function $\delta$ is chosen to vanish toward those
ends, which is what makes the endpoint analysis of step 4.2 close. Clause
(c)2 is the precise form of Sbierski's statement that a curve through
$N\setminus U$ meets $S$ and then enters $U$; the strict monotonicity of
$\tau_q-\tau_0$ along causal curves (step 3.1) is what forces the curve
crossing $S$ to enter $U$ on one side, since all points of $W$ with
$\tau_q>\tau_0$ lie in $U$ by clause (a). Clause (c)3 furnishes the radial
segments along which the patched map of
[[lem-gr-no-corresponding-boundary-points]] is shown to be well defined.
