---
id: lem-gr-cauchy-set-topology-and-graph
kind: lemma
title: "Cauchy sets are closed, split the manifold into past, set and future, and are locally Lipschitz graphs"
status: draft
origin: session
domain: mathematics
dependency_level: 19
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-maximal-geodesics-and-extension, lem-gr-chronology-openness, lem-gr-dominating-cone-bounds, lem-gr-parallel-transport-and-geodesic-speed, thm-gr-local-geodesics-and-exponential-map, def-gr-observer-and-rest-space, def-gr-causal-curves-and-reachability, def-gr-smooth-lorentzian-objects, def-continuity-real, def-c-r-and-smooth-maps-between-smooth-manifolds, def-interval]
dependency_roles:
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-continuity-real: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Cauchy sets and domains of dependence, Definitions 3.33-3.35 and the elementary properties of Cauchy sets printed pp. 93-97; Proposition 3.42 printed p. 96"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. W. Hawking and G. F. R. Ellis, The Large Scale Structure of Space-Time, Cambridge University Press (1973): Proposition 6.5.1 and the elementary theory of Cauchy surfaces, section 6.5; achronal sets and their local structure, section 6.3"
      url: "https://doi.org/10.1017/CBO9780511524646"
verification:
  precheck: pending
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) and let $S\subseteq M$ be a Cauchy set
([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c)): every
inextendible causal curve $\gamma:I\to M$ has
$\gamma^{-1}[S]=\{t\in I:\gamma(t)\in S\}$ of exactly one element. Then:

**(a)** there is no nonconstant future causal curve $\delta:[a,b]\to M$
with $\delta(a)=\delta(b)$; in particular $S$ is achronal and acausal, and
the three sets $I^-(S)$, $S$, $I^+(S)$ are pairwise disjoint with
$$M=I^-(S)\;\sqcup\;S\;\sqcup\;I^+(S);$$
moreover for $x\notin S$ one has $x\in I^+(S)$ if and only if some point of
$S$ chronologically precedes $x$;

**(b)** $S$ is closed in $M$;

**(c)** for every $p\in S$ there are a chart $(U,x)$ of the kind produced by
[[lem-gr-dominating-cone-bounds]] clauses (a) and (d) around $p$, with
$x(p)=0$ and the supplier constants $K\ge1$ and $c=16$, and numbers $a,\rho,\eta>0$ with $\sqrt c\,\rho+\eta<a$ and
$W:=x^{-1}\bigl((-a,a)\times B_\rho(0)\bigr)\subseteq U$ such that for every
$z\in B_\rho(0)$ the coordinate vertical line
$L_z=x^{-1}\bigl((-a,a)\times\{z\}\bigr)$ meets $S\cap W$ in exactly one
point $x^{-1}(\varphi(z),z)$, and
$$|\varphi(z)-\varphi(z')|\le\sqrt c\,|z-z'|\qquad(z,z'\in B_\rho(0)),$$
with $\varphi(0)=0$ and $|\varphi(z)|\le\sqrt c\,|z|<a$. The cylinder $W$ may be chosen inside any prescribed neighborhood of $p$. Consequently the maps
$z\mapsto x^{-1}(\varphi(z),z)$ form a topological atlas on the closed set
$S$, making $S$ a topological $3$-manifold in the subspace topology whose
inclusion into $M$ is a topological embedding.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ and a Cauchy set $S\subseteq M$.

[L1] $S$ is acausal, hence achronal: no two distinct points of $S$ are causally, respectively chronologically, related in either direction ([[lem-gr-maximal-geodesics-and-extension]] clause (d), [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (b)).

[L2] Every maximal geodesic $\gamma_{q,v}$ with $v\ne0$ is defined on an open interval and does not converge to any point of $M$ as the parameter tends to either end; hence it is an inextendible causal curve whenever $v$ is timelike. Along a geodesic the causal character and time orientation of the tangent are constant, so a geodesic with future timelike initial velocity is a future timelike curve; on its image every point is a value of the parameter ([[lem-gr-maximal-geodesics-and-extension]] clauses (b) and (c), [[lem-gr-parallel-transport-and-geodesic-speed]] clause 3, [[thm-gr-local-geodesics-and-exponential-map]] clauses (a) and (d), [[def-gr-causal-curves-and-reachability]] clauses (b) and (d)).

[L3] $I^+(x)$ and $I^-(x)$ are open for every $x$, and $\{(y,z):y\ll z\}$ is open in $M\times M$ ([[lem-gr-chronology-openness]] clauses (a) and (b)).

[L4] Adapted chart and flat minorant: around every $p$ there are a chart $(U,x)$ with $x(p)=0$, a radius $r>0$ with $x(U)=B_r(0)$, a constant $K\ge1$ with $n=N/\sqrt{-g(N,N)}=\partial/\partial x^0$ and $g_{00}\equiv-1$ on $U$, and the flat metric $\eta_c=-(dx^0)^2+c\sum_{i=1}^3(dx^i)^2$ with $c=16$ such that every $\eta_c$-causal vector is $g$-timelike and, whenever $\eta_c(q'-q,q'-q)<0$ for $q,q'\in U$, the points $q,q'$ are chronologically related with $q\ll q'$ if $x^0(q')>x^0(q)$ ([[lem-gr-dominating-cone-bounds]] clauses (a) and (d), [[def-gr-observer-and-rest-space]]). The coordinate vertical lines of this chart are the integral curves of $n=\partial/\partial x^0$, hence future timelike curves, and for $s<s'$ in $(-a,a)$ one has $x^{-1}(s,z)\ll x^{-1}(s',z)$ ([[def-gr-causal-curves-and-reachability]]). The vertical segments have affine coordinates; in any other chart their smooth representatives have bounded derivative on sufficiently small compact segments, hence are Lipschitz and absolutely continuous by the mean value bound.

[L5] Restrictions to subintervals and finite concatenations of locally absolutely continuous closed curve pieces retain absolute continuity and the almost-everywhere causal velocity condition. This follows directly from the finite epsilon-delta definition: for a compact interval meeting $k$ pieces, use tolerance $\varepsilon/k$ on each piece and the minimum of the finitely many corresponding deltas, split each finite test family at the junctions, and sum the variation bounds. The exceptional velocity sets are a finite union of null sets together with finitely many junctions. Thus no general absolutely continuous integration theorem or additional choice is used in this finite step ([[def-gr-causal-curves-and-reachability]]).

## Proof

**Proof technique:** direct.

1.1 (No closed causal curve.) Let $\delta:[0,1]\to M$ be a future causal curve with $\delta(0)=\delta(1)$, nonconstant. Define the periodic extension $\beta:\mathbb R\to M$ by $\beta(t):=\delta(t-\lfloor t\rfloor)$. On each interval $(n,n+1)$ the curve $\beta$ is the restriction of $\delta$ up to an increasing affine reparametrization, so it is locally absolutely continuous with future causal velocity almost everywhere, and by [L5] this persists across the finitely many junctions of every compact interval: $\beta$ is a future causal curve. It is future-inextendible: if $\beta(t)\to z$ as $t\to+\infty$, then for every $s\in(0,1)$ the sequence $\beta(s+n)=\beta(s)$ converges to $z$, so $\beta(s)=z$ for all $s\in(0,1)$, contradicting the nonconstancy of $\delta$ on $[0,1]$; the same argument at $-\infty$ (using $\beta(s-n)=\beta(s)$) gives past-inextendibility. Hence $\beta$ is an inextendible causal curve, and by the Cauchy property $\beta^{-1}[S]$ has exactly one element $t_0$; but then $t_0+1\in\beta^{-1}[S]$ as well, since $\beta(t_0+1)=\beta(t_0)\in S$, and $t_0+1\ne t_0$. This contradiction shows that no such $\delta$ exists. [L1, L5, given, algebra]

1.2 (A vertical line meets $S$ at most once.) Fix $p\in S$ and the chart $(U,x)$, constants $K\ge1$ and $c=16$, and minorant $\eta_c$ of [L4]. Write $x(U)=B_r(0)$. Choose $0<a<r/2$, $0<\rho<a/(4\sqrt c)$ and $\eta:=a/2$. Then $\sqrt{a^2+\rho^2}<r$ and $\sqrt c\,\rho+\eta<a$, so $W:=x^{-1}((-a,a)\times B_\rho(0))\subseteq U$. These choices can be made arbitrarily small: for any prescribed neighborhood $V$ of $p$, first reduce $r$ so that $x^{-1}(B_r(0))\subseteq V$, retaining the same adapted coordinate functions, cone constants and $g_{00}=-1$, and then choose $a,\rho,\eta$ as above. For $z\in B_\rho(0)$ the vertical line $L_z$ is the image of a future timelike curve [L4]; two distinct points $x^{-1}(s,z)$ and $x^{-1}(s',z)$ of $S$ with $s<s'$ would be chronologically related, contradicting [L1]. Hence $S\cap L_z$ has at most one point. [L1, L4, given, construct]

2.1 (Disjointness and the decomposition.) Let $x\in M$. Choose a future timelike vector $w\in T_xM$ and let $\gamma:=\gamma_{x,w}:I\to M$ be the maximal geodesic through $x$ with $\gamma'(0)=w$; by [L2] it is an inextendible future timelike curve, and $\gamma(0)=x$. By the Cauchy property there is exactly one $t_0\in I$ with $\gamma(t_0)\in S$. If $x=\gamma(t_0)$, then $x\in S$. If $x\ne\gamma(t_0)$ and $0>t_0$, then $\gamma|_{[t_0,0]}$ is a future timelike curve from a point of $S$ to $x$, so $x\in I^+(S)$; if $0<t_0$, then $\gamma|_{[0,t_0]}$ is a future timelike curve from $x$ to a point of $S$, so $x\in I^-(S)$. Hence $M=I^-(S)\cup S\cup I^+(S)$. The sets are pairwise disjoint: if $s\in S\cap I^+(S)$, there is $s'\in S$ with $s'\ll s$, and $s'\ne s$ because $s'\ll s$ forces $s'\ne s$; this contradicts acausality [L1]. If $x\in I^+(S)\cap I^-(S)$, there are $s_1,s_2\in S$ with $s_1\ll x\ll s_2$; if $s_1\ne s_2$ this contradicts acausality [L1], while if $s_1=s_2$ then transitivity of $\ll$ gives $s_1\ll s_1$, that is, a closed future timelike curve through $s_1$, which is excluded by step 1.1 applied to that closed curve. This proves (a), including the characterization of membership in $I^\pm(S)$. [step 1.1, L1, L2, L3, given]

3.1 (Closedness.) Let $s_k\in S$ with $s_k\to q\in M$, and suppose $q\notin S$. Choose a maximal geodesic $\gamma:=\gamma_{q,w}$ with future timelike $w$ as in [L2]; it is an inextendible future timelike curve and meets $S$ in exactly one point $r:=\gamma(t_0)$, with $r\ne q$ because $q\notin S$. Let $t_q:=0$ be the parameter of $q$. If $t_0<0$ then $\gamma|_{[t_0,0]}$ is a future timelike curve from $r$ to $q$, so $r\ll q$; since $I^+(r)$ is open [L3] and $s_k\to q$, for all large $k$ we have $s_k\in I^+(r)$, that is, $r\ll s_k$ with $r,s_k\in S$; since $s_k\ne r$ for large $k$ (as $s_k\to q\ne r$), this contradicts the acausality of $S$ [L1]. If $t_0>0$ then $\gamma|_{[0,t_0]}$ is a future timelike curve from $q$ to $r$, so $q\ll r$; since $I^-(r)$ is open [L3], for large $k$ we have $s_k\in I^-(r)$, that is, $s_k\ll r$ with $s_k,r\in S$ and $s_k\ne r$, again contradicting acausality. Hence $q\in S$: $S$ is closed. This proves (b). [step 2.1, L1, L2, L3, given]

3.2 (A vertical line meets $S$ at least once.) With $p,W,a,\rho,\eta$ as in step 1.2, fix $z\in B_\rho(0)$ and put $q^-:=x^{-1}(-\sqrt c\,|z|-\eta,z)$ and $q^+:=x^{-1}(\sqrt c\,|z|+\eta,z)$. Both are in $W$ since $\sqrt c\,|z|+\eta<\sqrt c\,\rho+\eta<a$. In coordinate differences from $p$ one has $\eta_c(q^+-p,q^+-p)=-(\sqrt c\,|z|+\eta)^2+c|z|^2=-2\sqrt c\,|z|\eta-\eta^2<0$, and the same value for $\eta_c(p-q^-,p-q^-)$. Thus [L4] gives $q^-\ll p\ll q^+$, so $q^-\in I^-(S)$ and $q^+\in I^+(S)$. The vertical segment $J_z$ joining them is connected. If it avoided $S$, step 2.1 would partition it into the disjoint relatively open sets $J_z\cap I^-(S)$ and $J_z\cap I^+(S)$, open by [L3] and both nonempty by their endpoints. This contradicts connectedness. Hence $J_z\cap S\ne\emptyset$, and step 1.2 gives exactly one intersection. [step 2.1, step 1.2, L3, L4, given, algebra]

4.1 (The graphing function is Lipschitz.) For $z\in B_\rho(0)$ let $\varphi(z)\in(-a,a)$ be the $x^0$-coordinate of the unique point of $S\cap L_z$, so that $S\cap W=\{x^{-1}(\varphi(z),z):z\in B_\rho(0)\}$, and $|\varphi(z)|\le\sqrt c\,|z|+\eta<a$ by step 3.2. Since $p=x^{-1}(0,0)\in S$, uniqueness on $L_0$ gives $\varphi(0)=0$. If $z,z'\in B_\rho(0)$ with $|\varphi(z)-\varphi(z')|>\sqrt c|z-z'|$, set $\delta:=(\varphi(z)-\varphi(z'),z-z')$ and suppose $\varphi(z)>\varphi(z')$ (the other case is symmetric); then $\eta_c(\delta,\delta)=-(\varphi(z)-\varphi(z'))^2+c|z-z'|^2<0$, and both $x^{-1}(\varphi(z),z)$ and $x^{-1}(\varphi(z'),z')$ lie in $S\cap W\subseteq U$, so [L4] gives $x^{-1}(\varphi(z'),z')\ll x^{-1}(\varphi(z),z)$: two distinct points of $S$ chronologically related, contradicting acausality [L1]. Hence $|\varphi(z)-\varphi(z')|\le\sqrt c|z-z'|$. Taking $z'=0$ and using $\varphi(0)=0$ gives $|\varphi(z)|\le\sqrt c\,|z|<a$. [step 3.2, L1, L4, given, algebra]

5.1 (Topological hypersurface.) For $p\in S$ and its chart as above, the map $\psi:B_\rho(0)\to S\cap W$, $\psi(z)=x^{-1}(\varphi(z),z)$ is continuous (a Lipschitz function into Euclidean space followed by the continuous chart inverse), injective and surjective onto $S\cap W$ by step 4.1, and the restriction of the continuous coordinate projection $\pi:x^{-1}(s,z)\mapsto z$ to $S\cap W$ is its inverse, because a point of $S\cap W$ lies on exactly one vertical line and has the form $x^{-1}(\varphi(\pi(\cdot)),\pi(\cdot))$ by step 1.2; hence $\psi$ is a homeomorphism onto the relatively open set $S\cap W$. For two such graph charts $\psi,\psi'$ the transition $\psi'^{-1}\circ\psi=\pi'\circ\psi$ is continuous on its domain, so these charts form a topological atlas on $S$; consequently $S$ is a topological $3$-manifold in the subspace topology and its inclusion into $M$ is a topological embedding. This proves (c) and completes the proof. [step 1.2, step 4.1, given, construct] ∎

## Remarks

- **What is and is not proved.** No smoothness of $S$ is asserted: the transition maps are only continuous, and no normal vector field is constructed. The proof uses only the Cauchy property, the acausality of Cauchy sets, the openness of chronology and the flat minorant cone of the adapted chart.

- **The role of the minorant cone.** The flat form $\eta_c$ is used only to *produce* chronological relations: to find points of $I^\pm(S)$ on every vertical line (step 3.2) and to force the Lipschitz bound (step 4.1), where the absence of a chronological relation between two points of $S$ is turned into the inequality for $\varphi$.

- **Use.** Clauses (a) and (b) are used in [[thm-gr-cauchy-surface-implies-globally-hyperbolic]] and clause (c) records the terminology of Cauchy sets as embedded topological hypersurfaces; the graph representation is also the model for the local Cauchy-neighbourhood lemma of this page.
