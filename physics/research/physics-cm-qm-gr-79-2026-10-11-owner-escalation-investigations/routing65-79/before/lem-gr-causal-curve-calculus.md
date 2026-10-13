---
id: lem-gr-causal-curve-calculus
kind: lemma
title: "Chart independence, concatenation, reparametrization and transitivity for causal curves"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-causal-curves-and-reachability, def-gr-smooth-lorentzian-objects, def-absolutely-continuous-function, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-absolutely-continuous-functions-have-integrable-derivatives, def-countable-choice, def-dependent-choice, thm-chain-rule-for-total-derivatives, cor-mean-value-theorem, def-velocity-derivation-of-a-smooth-curve, def-c-r-and-smooth-maps-between-smooth-manifolds, def-gr-timelike-worldline-and-proper-time, def-interval, def-continuity-real, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-velocity-derivation-of-a-smooth-curve: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: causal curves and the causal relation (section 1.11 printed pp. 15-16); continuous causal curves and their local Lipschitz parametrization (Theorem 2.12 printed pp. 32-33); Definition 2.16 printed p. 33"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): the Lorentzian metric framework and time orientation, section 2.2 printed pp. 15-19"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N)$ be a
time-oriented smooth Lorentzian four-manifold with the causal-curve class of
[[def-gr-causal-curves-and-reachability]].

**(a) Chart independence.** Local absolute continuity in the sense of
[[def-gr-causal-curves-and-reachability]] clause (a) is independent of the
chosen chart and of the smooth atlas. Every compact parameter interval
admits a finite subdivision on each of whose pieces a chart representative
is absolutely continuous. For a continuous curve, the relative neighborhood
formulation and the compact chart-interval formulation of that definition
are equivalent.

**(b) Velocity and smooth composition.** At every interior parameter value
$t$ at which one chart representative is differentiable, every chart
representative is differentiable, the velocity $\gamma'(t)$ of
[[def-gr-causal-curves-and-reachability]] clause (b) is well defined and
independent of the chart, and the set of parameter values at which some
chart representative is differentiable has full measure in the domain. For
every smooth map $F$ of an open subset of $M$ into a finite-dimensional
smooth manifold $P$ (in particular $P=\mathbb R$) whose domain contains
the image of $\gamma$, the composite $F\circ\gamma$ is locally absolutely
continuous in charts of $P$ using the same relative neighborhood definition,
and $(F\circ\gamma)'(t)=dF_{\gamma(t)}(\gamma'(t))$ at almost
every parameter value $t$.

**(c) Piecewise $C^1$ curves.** Every piecewise $C^1$ curve (with the finite
admissible partition and one-sided endpoint convention of clause (a) of
[[def-gr-timelike-worldline-and-proper-time]]) is locally absolutely
continuous; a piecewise $C^1$ curve all of whose tangents are future causal
is a future causal curve, and if in addition its tangents are future
timelike, it is a future timelike curve.

**(d) Concatenation.** If $\gamma_1:[a,b]\to M$ and $\gamma_2:[b,c]\to M$ are
future causal curves (respectively future timelike curves) with
$\gamma_1(b)=\gamma_2(b)$, then the concatenation $\gamma:[a,c]\to M$,
$\gamma(t):=\gamma_1(t)$ for $t\le b$ and $\gamma(t):=\gamma_2(t)$ for
$t\ge b$, is a future causal (respectively future timelike) curve; the same
holds for any finite chain of such curves.

**(e) Reparametrization.** If $\varphi:J\to I$ is a strictly increasing
$C^1$ diffeomorphism of intervals with $\varphi'>0$ and $\gamma:I\to M$ is
locally absolutely continuous, then $\gamma\circ\varphi$ is locally
absolutely continuous and $\gamma\circ\varphi$ is future causal (respectively
future timelike) exactly when $\gamma$ is. Moreover $\gamma$ is
future-inextendible if and only if $\gamma\circ\varphi$ is
future-inextendible, and this equivalence holds for every strictly increasing
continuous surjection $\varphi$ of intervals, not only the $C^1$ ones.

**(f) Relations.** The relation $\le$ of
[[def-gr-causal-curves-and-reachability]] is reflexive and transitive, and
$p\ll q$ implies $p\le q$ for all $p,q$; the relations $J^{\pm}$ and
$I^{\pm}$ of that definition are therefore nested, $I^{\pm}(S)\subseteq
J^{\pm}(S)$ for every $S\subseteq M$.

## Facts & Assumptions

**Given:** The Axioms of Countable and Dependent Choice, a time-oriented smooth Lorentzian four-manifold $(M,g,N)$, interval domains, curves, and the maps of the claims.

[L1] For an absolutely continuous $F:[a,b]\to\mathbb R$, under $\mathrm{AC}_\omega$ and $\mathrm{DC}$: $F$ is differentiable almost everywhere, $F'\in L^1[a,b]$, and $F(x)-F(a)=\int_a^xF'(t)\,dt$ for all $x$ ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-absolutely-continuous-functions-have-integrable-derivatives]]).

[L2] Chain rule for total derivatives: if $f$ is differentiable at $p$ and $\psi$ at $t$ with $\psi(t)=p$, then $f\circ\psi$ is differentiable at $t$ with $D(f\circ\psi)(t)=Df(p)\circ D\psi(t)$ ([[thm-chain-rule-for-total-derivatives]]).

[L3] Mean value bound: if a real function is $C^1$ on a convex open set containing $x,y$ and its derivative along the segment is bounded by $L$, then $|f(y)-f(x)|\le L|y-x|$, by the mean value theorem applied to $t\mapsto f(x+t(y-x))$ on $[0,1]$ ([[cor-mean-value-theorem]]).

[L4] A $C^1$ real function on a compact interval is absolutely continuous: its derivative is continuous hence bounded by some $M$, and the Lipschitz bound gives the absolute-continuity condition ([[def-absolutely-continuous-function]], [[def-continuity-real]]).

[L5] A future timelike vector is a nonzero future causal vector, by the pointwise classification of nonzero vectors into timelike, null and spacelike and the definition of causal ([[def-causal-classification-of-lorentz-vectors]]).

[L6] Local Lipschitz composition: let $O\subseteq\mathbb R^n$ be open, let $h:O\to\mathbb R^k$ be $C^1$, let $K\subseteq O$ be compact and convex, and let $x:[a,b]\to K$ be absolutely continuous. With Euclidean norms and the associated operator norm $\|Dh(w)\|_{\mathrm{op}}$, $\|h(x(v))-h(x(u))\|\le L\|x(v)-x(u)\|$ for all $u,v\in[a,b]$, where $L:=\sqrt{k}\sup_{w\in K}\|Dh(w)\|_{\mathrm{op}}<+\infty$; consequently $h\circ x$ is absolutely continuous, because for pairwise interior-disjoint subintervals the sum of the increments of $h\circ x$ is at most $L$ times the sum of those of $x$. The bound follows by applying [L3] to each of the $k$ component functions of $h$ along the segment from $x(u)$ to $x(v)$, which lies in the convex set $K$, and then taking the Euclidean norm of the resulting $k$ coordinate bounds. For a curve image not contained in one such $K$, use finitely many chart patches with compact convex coordinate neighborhoods and subdivide the compact parameter interval accordingly. Finite concatenation preserves absolute continuity directly from its definition: for $r$ pieces and a tolerance $\varepsilon>0$, take the minimum of the finitely many $\delta_i$ corresponding to $\varepsilon/r$ on each piece; split any test intervals at the finitely many junctions. In each piece the resulting disjoint subintervals have total length below $\delta_i$, so the total endpoint increments, bounded by their sum across the split pieces, are less than $r(\varepsilon/r)=\varepsilon$.

## Proof

**Proof technique:** direct.

1.1 (Continuity, finite subdivision and chart independence.) Continuity is required by the definition. Fix $[a,b]\subseteq I$; when $a=b$ the coordinate absolute-continuity condition is automatic. For $a<b$, its relative parameter neighborhoods furnished by Definition (a) form an open cover. Take a finite subcover. There is a number $\lambda>0$ such that every subinterval of $[a,b]$ of length less than $\lambda$ lies in one of the chosen neighborhoods: otherwise choose successively intervals of length tending to zero that lie in none; a convergent subsequence of points in them has a limit in one cover member, and eventually the whole small interval lies in that member, a contradiction. Subdivide into finitely many intervals shorter than $\lambda$. Each piece has an absolutely continuous chart representative. To compare it with another chart on that piece, cover the compact coordinate image in the open transition domain by finitely many convex balls whose closures stay in that domain. Apply the same parameter-cover argument to subdivide further so that each subarc lies in one ball. The transition derivative is bounded on each closed ball; [L6] gives absolute continuity in the other chart, and finite concatenation in [L6] joins the pieces. This proves chart and atlas independence and proves the compact chart-interval condition from the neighborhood condition. Conversely, for a continuous curve satisfying the compact chart-interval condition, choose a chart about $\gamma(t)$; continuity supplies a relative parameter neighborhood mapped into it, and the assumed condition supplies absolute continuity on every compact subinterval there. This proves (a). [given, L3, L6, algebra]

1.2 (Piecewise $C^1$ curves.) Let $\gamma$ be piecewise $C^1$ with admissible partition $a=s_0<\dots<s_m=b$ as in [[def-gr-timelike-worldline-and-proper-time]] clause (a). Around each parameter value choose a chart containing the local curve image. In that chart each piecewise coordinate path is $C^1$ up to any endpoint it contains, hence is absolutely continuous on compact subintervals by [L4]. A compactness argument gives finitely many such parameter patches on $[a,b]$; their common refinement and finite concatenation show that $\gamma$ is locally absolutely continuous. Away from the finitely many partition points its velocity is the derivative of its $C^1$ piece, so if the piece tangents are future causal (respectively future timelike), the velocity is nonzero future causal (respectively future timelike) almost everywhere. The finitely many joints are a null set and do not affect the curve class. This proves (c). [L4, given, algebra]

2.1 (Velocity and smooth composition.) At any interior $t$ where one chart representative is differentiable, [L2] applied on a neighborhood of $t$ shows that every other chart representative is differentiable at $t$ and transforms its component derivative by the derivative of the chart transition. Thus the displayed derivation in clause (b) of [[def-gr-causal-curves-and-reachability]] is independent of chart. On each compact parameter interval, a finite subdivision into chart patches exists by local absolute continuity; on every patch the coordinate components are absolutely continuous, so [L1] shows differentiability almost everywhere there. A countable compact exhaustion of $I$ and a countable union of the corresponding exceptional null sets give the full-measure assertion on all of $I$. If $F$ is smooth on an open domain containing the image of $\gamma$, then at each point where $\gamma$ is differentiable, [L2] gives $(F\circ\gamma)'(t)=dF_{\gamma(t)}(\gamma'(t))$ in local source and target charts (with the identity chart when $P=\mathbb R$). For local absolute continuity of $F\circ\gamma$, fix a compact interval $[a,b]\subseteq I$. The continuous image $\gamma([a,b])$ is compact. For each point of it choose a source chart $V$ and target chart $W$ with the point in $V$, its image under $F$ in $W$, and a convex coordinate ball $K$ with compact closure in the coordinate image of $V\cap F^{-1}(W)$. Finitely many such neighborhoods cover $\gamma([a,b])$; by continuity of $\gamma$ their inverse images admit a finite subdivision $a=s_0<\cdots<s_r=b$ such that each subarc maps into one chosen neighborhood and its source coordinates lie in the corresponding $K$. On each piece the coordinate expression $h:=z\circ F\circ y^{-1}$ is $C^1$ near $K$, so [L6] sends the absolutely continuous source coordinates to absolutely continuous target coordinates. If a single target chart contains the whole composite subarc, chart independence and finite concatenation give absolute continuity in that chart on the whole compact interval; otherwise the pieces give the relative neighborhood condition. The same argument works for any finite target dimension, including scalar functions. This proves (b). [step 1.1, L1, L2, L6, given]

2.2 (Concatenation.) Let $\gamma_1:[a,b]\to M$ and $\gamma_2:[b,c]\to M$ be future causal with $\gamma_1(b)=\gamma_2(b)$, and let $\gamma$ be their concatenation. On compact subintervals lying strictly to one side of $b$, local absolute continuity and the almost-everywhere velocity condition are inherited from the corresponding curve. Since both curves are continuous at $b$ and have the same value there, choose a chart about that value; on sufficiently short one-sided parameter intervals adjoining $b$, both chart representatives lie in this chart and are absolutely continuous up to $b$. Their concatenated representative is absolutely continuous: split any finite test family of intervals at $b$, apply the two absolute-continuity bounds with tolerance $\varepsilon/2$, and take the minimum of the two $\delta$ values. A compact parameter interval is covered by finitely many such patches and patches away from $b$, so the concatenation is locally absolutely continuous. Off the single junction parameter $b$, its velocity is that of $\gamma_1$ or $\gamma_2$, hence nonzero future causal (respectively future timelike) almost everywhere. Finite chains follow by induction; the timelike version is identical. [step 1.2, given, algebra]

3.1 (Reparametrization.) Let $\varphi:J\to I$ be strictly increasing $C^1$ with $\varphi'>0$, and let $\gamma$ be locally absolutely continuous. For a compact $[u,v]\subseteq J$, choose a finite subdivision of $[\varphi(u),\varphi(v)]$ into chart patches on which $\gamma$ has absolutely continuous coordinate representatives. Pull this subdivision back by the increasing diffeomorphism $\varphi$; on each resulting parameter piece the relevant coordinate path of $\gamma\circ\varphi$ is the composition of an absolutely continuous function $x\circ\gamma$ with $\varphi$. This composition is absolutely continuous: given $\varepsilon>0$, let $\delta$ be the constant for $\varepsilon$ belonging to $x\circ\gamma$ and let $\eta$ be the constant for $\delta$ belonging to $\varphi$; for pairwise interior-disjoint subintervals of total length less than $\eta$, their images under increasing $\varphi$ have pairwise disjoint interiors and total length less than $\delta$, so the sum of the increments of $x\circ\gamma$ over those images is less than $\varepsilon$. Finite concatenation proves local absolute continuity of $\gamma\circ\varphi$. At every $u$ where $\gamma$ is differentiable at $\varphi(u)$, the chain rule [L2] gives $(\gamma\circ\varphi)'(u)=\varphi'(u)\gamma'(\varphi(u))$, and $\varphi'>0$; hence the causal and timelike velocity conditions are preserved. The inverse image under $\varphi$ of a null exceptional set is null because $\varphi^{-1}$ is locally Lipschitz, with derivative bounded on compact subintervals, and a locally Lipschitz interval map sends null sets to null sets. Applying the same argument to $\varphi^{-1}$ proves the equivalence of the curve classes in both directions. For inextendibility, a strictly increasing continuous surjection has a strictly increasing continuous inverse, so $\gamma(\varphi(u))$ converges as $u\to\sup J$ exactly when $\gamma(t)$ converges as $t\to\sup I$, and dually at past ends. This proves (e). [step 2.1, L2, L4, given]

4.1 (Relations.) The relation $\le$ is reflexive by its first alternative. If $p\le q$ and $q\le r$: when $p=q$ or $q=r$ the conclusion is immediate, and otherwise future causal curves join $p$ to $q$ and $q$ to $r$ and their concatenation is a future causal curve from $p$ to $r$ by step 2.2, so $p\le r$. If $p\ll q$, the connecting curve has future timelike velocity at almost every parameter value, and such a vector is nonzero future causal by [L5], so the same parameter set witnesses the condition defining a future causal curve and $p\le q$; hence $I^{\pm}(S)\subseteq J^{\pm}(S)$ directly from the union definitions. This proves (f) and completes the proof. [step 2.2, L5, given, algebra] ∎

## Remarks

- **Measurability conventions.** The absolute-continuity and almost-everywhere statements are one-dimensional Lebesgue statements on compact parameter intervals, used through [L1]; the only choice principles used are $\mathrm{AC}_\omega$ and $\mathrm{DC}$, assumed in the statement.

- **The $C^1$ reparametrization hypothesis.** In (e) the $C^1$ hypothesis with $\varphi'>0$ for the forward implication cannot be relaxed to mere continuity: composing an absolutely continuous curve with a continuous increasing function that is not absolutely continuous need not be absolutely continuous. The inextendibility equivalence is stated separately because it needs only strict monotonicity and surjectivity.
