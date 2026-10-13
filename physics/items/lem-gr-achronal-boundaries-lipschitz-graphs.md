---
id: lem-gr-achronal-boundaries-lipschitz-graphs
kind: lemma
title: "Achronal boundaries are locally Lipschitz graphs, topological hypersurfaces and null for smooth volume densities"
status: published
origin: session
domain: mathematics
dependency_level: 20
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-dependent-choice, def-gr-future-and-past-sets, lem-gr-chronology-openness, lem-gr-dominating-cone-bounds, def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, def-gr-smooth-lorentzian-objects, def-gr-observer-and-rest-space, cor-graph-of-a-measurable-function-is-lebesgue-null, cor-continuous-functions-are-borel-measurable, def-countable-choice, def-continuity-real, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-dependent-choice: mathematical-premise
  def-gr-future-and-past-sets: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  cor-graph-of-a-measurable-function-is-lebesgue-null: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-countable-choice: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Theorem 2.87 (achronal boundaries are locally Lipschitz topological hypersurfaces) with proof, printed pp. 60-61, and Proposition 2.84 printed pp. 59-60"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. W. Hawking and G. F. R. Ellis, The Large Scale Structure of Space-Time, Cambridge University Press (1973): achronal boundaries and Proposition 6.3.1, section 6.3"
      url: "https://doi.org/10.1017/CBO9780511524646"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the absolutely continuous causal-curve
calculus and the supplied causal results used below.

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$F\subseteq M$ be an open future set, so that $I^+(F)=F$
([[def-gr-future-and-past-sets]] clause (a)), and let $A:=\partial F$ be its
achronal boundary. Then:

**(a) Achronality.** $A$ is closed and achronal: no two distinct points of
$A$ are chronologically related in either direction. Consequently every
future or past timelike curve meets $A$ in at most one point.

**(b) Local Lipschitz graph.** For every $p\in A$ there are a chart
$(U,x)$ of the kind produced by [[lem-gr-dominating-cone-bounds]] clauses (a)
and (d) around $p$, with $x(p)=0$, domination constant $K$, and minorant
coefficient $c=16$, and numbers
$a,\rho>0$ with $W:=x^{-1}\bigl((-a,a)\times B_\rho(0)\bigr)\subseteq U$, such
that for every $z\in B_\rho(0)$ the coordinate vertical line
$$L_z:=x^{-1}\bigl((-a,a)\times\{z\}\bigr)$$
meets $A\cap W$ in exactly one point, and there is a function
$\varphi:B_\rho(0)\to(-a,a)$ with
$$A\cap W=\bigl\{x^{-1}(\varphi(z),z):z\in B_\rho(0)\bigr\},\qquad |\varphi(z)-\varphi(z')|\le\sqrt c\,|z-z'|\quad (z,z'\in B_\rho(0)).$$
Thus $A$ is locally the graph of a Lipschitz function of the spatial
coordinates of the chart.

**(c) Topological hypersurface.** The maps $z\mapsto x^{-1}(\varphi(z),z)$ of
(b), for all points $p\in A$, form a topological atlas on $A$: $A$ is a
topological $3$-manifold in the subspace topology and its inclusion into $M$
is a topological embedding. No smoothness of $A$ is asserted.

**(d) Null measure.** Assume the Axiom of Countable Choice
([[def-countable-choice]]). Let $\mu$ be a measure on the Borel sets of $M$
which is locally absolutely continuous with respect to Lebesgue measure:
whenever $(V,y)$ is a chart and $E\subseteq V$ has $y(E)$ of four-dimensional
Lebesgue measure zero, then $\mu(E)=0$. Then $\mu(A\cap K)=0$ for every
compact $K\subseteq M$. In particular this holds for every smooth positive
volume density on $M$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, an open future set $F$, its boundary $A=\partial F$ and a point $p\in A$.

[L1] $F$ is open and $I^+(F)=F$, and $A=\partial F$ is closed. If $r,r'\in A$ with $r\ll r'$, openness of the chronological relation in its first endpoint gives a neighborhood $V$ of $r$ with $V\subseteq I^-(r')$ ([[lem-gr-chronology-openness]] clause (b)). Since $r\in\overline F$, choose $f\in V\cap F$; then $r'\in I^+(f)\subseteq I^+(F)=F$, contradicting $r'\in\partial F$. Thus $A$ is achronal ([[def-gr-future-and-past-sets]] clauses (a)-(c), [[lem-gr-chronology-openness]]).

[L2] If $F$ is a future set and $q\in\overline F$ then $I^+(q)\subseteq F$; if $G$ is a past set and $q\in\overline G$ then $I^-(q)\subseteq G$ ([[lem-gr-chronology-openness]] clause (c)).

[L3] The chart of [[lem-gr-dominating-cone-bounds]] supplies coordinates $(x^0,x^1,x^2,x^3)$ on a ball around $p$ with $x(p)=0$, the identity $n=\partial/\partial x^0$ for the future unit timelike field $n$, the domination bound $|v^i|\le Kv^0$ for future causal $v$, and the flat form $\eta_{16}=-(dx^0)^2+16\sum_i(dx^i)^2$ with the properties: every $\eta_{16}$-causal vector is $g$-timelike, and if $q,q'\in U$ satisfy $\eta_{16}(q'-q,q'-q)<0$ then $q,q'$ are chronologically related, in the direction fixed by the sign of $x^0(q')-x^0(q)$ ([[lem-gr-dominating-cone-bounds]] clauses (a), (b), (d)).

[L4] The coordinate vertical lines of the chart of [L3] are the integral curves of $n=\partial_0$; hence each of them is a future timelike curve, and for $s<s'$ in $(-a,a)$ the points $x^{-1}(s,z)$ and $x^{-1}(s',z)$ satisfy $x^{-1}(s,z)\ll x^{-1}(s',z)$ ([[def-gr-causal-curves-and-reachability]] clause (c), [[def-gr-observer-and-rest-space]], [[lem-gr-causal-curve-calculus]] clause (f)).

[L5] A graph of a Borel measurable function $\psi:\mathbb R^3\to\mathbb R$ has four-dimensional Lebesgue measure zero; a continuous function on an open ball, extended by zero outside, is Borel measurable ([[cor-graph-of-a-measurable-function-is-lebesgue-null]], [[cor-continuous-functions-are-borel-measurable]]).

## Proof

**Proof technique:** direct.

1.1 (Clause (a).) By [L1] the set $A$ is closed and achronal. If a timelike curve $\gamma$ met $A$ at two distinct parameter values $s<s'$, then $\gamma|_{[s,s']}$ would be a future timelike curve from $\gamma(s)$ to $\gamma(s')$ (or a past one after reversing), so the two points of $A$ would be chronologically related, contradicting achronality; hence at most one meeting. [L1, given]

1.2 (Points of $F$ and of its complement near $p$.) Since $p\in A=\partial F$ we have $p\in\overline F$ and $p\notin F$. By [L2] applied to the future set $F$, every $r\in I^+(p)$ lies in $F$. Moreover every $r\in I^-(p)$ lies outside $\overline F$: otherwise $r\in\overline F$ and $p\in I^+(r)$, so [L2] would give $p\in F$, a contradiction. [L1, L2, given]

2.1 (Nearby points of $F$ and of $M\setminus\overline F$ on every vertical line.) Let $(U,x)$, $K$, $c$ be as in [L3]. Choose $a,\rho,\eta>0$ with $\sqrt{a^2+\rho^2}$ smaller than the radius of $U$ and $\sqrt c\,\rho+\eta<a$; then the box $W=x^{-1}\bigl((-a,a)\times B_\rho(0)\bigr)$ is contained in $U$. For $z\in B_\rho(0)$ put $q^+_z:=x^{-1}(\sqrt c\,|z|+\eta,z)$ and $q^-_z:=x^{-1}(-\sqrt c\,|z|-\eta,z)$, both in $W$. Computing in the flat form, $$\eta_c\bigl(q^+_z-p,q^+_z-p\bigr)=-\bigl(\sqrt c\,|z|+\eta\bigr)^2+c|z|^2=-2\eta\sqrt c\,|z|-\eta^2<0,$$ and likewise $\eta_c(q^-_z-p,q^-_z-p)=-2\eta\sqrt c\,|z|-\eta^2<0$. By [L3] (clause (d)) we get $p\ll q^+_z$ and $q^-_z\ll p$; with step 1.2 this gives $q^+_z\in F$ and $q^-_z\notin\overline F$. [step 1.2, L3, given, algebra]

3.1 (Existence of a boundary point on each vertical line.) Fix $z\in B_\rho(0)$ and let $S_z$ be the coordinate subsegment of $L_z$ joining $q^-_z$ to $q^+_z$. The map $s\mapsto x^{-1}(s,z)$ is continuous, so $S_z$ is connected; it contains $q^+_z\in F$ and $q^-_z\in M\setminus\overline F\subseteq M\setminus F$. Since $F$ is open in $M$, the connected set $S_z$ cannot be covered by the two disjoint nonempty relatively open sets $S_z\cap F$ and $S_z\cap\mathrm{Int}(M\setminus F)$ without meeting the complement of their union, which is $A$; hence $A\cap S_z\neq\emptyset$. [step 2.1, L1, given]

4.1 (Uniqueness of the boundary point on a vertical line.) Let $r,r'\in A\cap L_z$ be distinct, say $r=x^{-1}(s,z)$ and $r'=x^{-1}(s',z)$ with $s<s'$; by [L4] $r\ll r'$, contradicting the achronality of $A$ from step 1.1. Hence $A\cap L_z$ has at most one point, and by step 3.1 exactly one. [step 1.1, step 3.1, L4, given]

5.1 (The graphing function.) For $z\in B_\rho(0)$ let $\varphi(z)\in(-a,a)$ be the $x^0$-coordinate of the unique point of $A\cap L_z$; it is well defined by step 4.1, and since the unique point of $A\cap L_z$ found in step 3.1 lies between $q^-_z$ and $q^+_z$ we have $|\varphi(z)|\le\sqrt c\,|z|+\eta<a$. Then $$A\cap W=\{x^{-1}(\varphi(z),z):z\in B_\rho(0)\},$$ because the inclusion $\supseteq$ holds by definition of $\varphi$, and if $x^{-1}(s,z)\in A\cap W$ then this point lies on $L_z$ and uniqueness forces $s=\varphi(z)$. [step 3.1, step 4.1, given, construct, algebra]

6.1 (Lipschitz bound.) Let $z,z'\in B_\rho(0)$ and suppose $|\varphi(z)-\varphi(z')|>\sqrt c\,|z-z'|$. Put $\delta:=(\varphi(z)-\varphi(z'),z-z')$ and assume $\varphi(z)>\varphi(z')$, the other case being symmetric. Then $\eta_c(\delta,\delta)=-(\varphi(z)-\varphi(z'))^2+c|z-z'|^2<0$, and both $x^{-1}(\varphi(z),z)$ and $x^{-1}(\varphi(z'),z')$ lie in $A\cap W\subseteq U$, so [L3] (clause (d)) gives $x^{-1}(\varphi(z'),z')\ll x^{-1}(\varphi(z),z)$, two distinct points of $A$ chronologically related, contradicting step 1.1. Hence $|\varphi(z)-\varphi(z')|\le\sqrt c|z-z'|$. [step 5.1, step 1.1, L3, given, algebra]

7.1 (Clause (c).) The map $\psi:B_\rho(0)\to A\cap W$, $\psi(z):=x^{-1}(\varphi(z),z)$, is continuous because $\varphi$ is Lipschitz by step 6.1 and $x^{-1}$ is continuous; it is bijective onto $A\cap W$ by step 5.1. The restriction of the continuous projection $\pi:x^{-1}(s,z)\mapsto z$ to $A\cap W$ is its inverse: for $r\in A\cap W$ we have $r=x^{-1}(\varphi(\pi(r)),\pi(r))$ by step 4.1, so $\psi(\pi(r))=r$, and $\pi$ is continuous. Hence $\psi$ is a homeomorphism onto the relatively open set $A\cap W$. For two such graph charts $\psi:B_\rho(0)\to A\cap W$ and $\psi':B_{\rho'}(0)\to A\cap W'$ coming from charts $x,x'$, the transition $\psi'^{-1}\circ\psi$ equals $\pi'\circ\psi$ on $\psi^{-1}(A\cap W\cap W')$, a composition of continuous maps; hence the graph parametrizations form a topological atlas on $A$, making $A$ a topological $3$-manifold and the inclusion $A\hookrightarrow M$ a topological embedding. [step 4.1, step 5.1, step 6.1, given, construct]

8.1 (Clause (d).) Assume countable choice and let $K\subseteq M$ be compact; then $A\cap K$ is compact because $A$ is closed. Cover $A\cap K$ by finitely many graph neighborhoods $W_1,\dots,W_m$ as in (b), with charts $x_j$ and graphing functions $\varphi_j$ defined on the balls $B_{\rho_j}(0)$. In the chart $x_j$ the set $A\cap W_j$ is contained in the graph of $\varphi_j$, which is the graph of the measurable function obtained by extending $\varphi_j$ by zero outside $B_{\rho_j}(0)$: that extension is continuous on the open ball and constant on its complement, hence Borel measurable by [L5]. By [L5] the graph has four-dimensional Lebesgue measure zero, so the coordinate image of $A\cap W_j$ is Lebesgue null, and the local absolute continuity of $\mu$ gives $\mu(A\cap W_j)=0$; here $A\cap W_j$ is Borel because $A$ is closed. By finite additivity and $A\cap K\subseteq\bigcup_j(A\cap W_j)$, $\mu(A\cap K)=0$. This proves (d). [step 7.1, L5, given, algebra]

9.1 (Conclusion.) Clauses (a), (b), (c), (d) are respectively steps 1.1, 5.1-6.1, 7.1 and 8.1. [step 1.1, step 5.1, step 6.1, step 7.1, step 8.1] ∎

## Remarks

- **The two inclusions used in the proof.** The proof of step 2.1 uses the chronological minorant cone in one direction only: the flat form $\eta_c$ is used to *produce* chronological relations, never to infer non-relations. The achronality of the boundary is the only global input.

- **No smoothness and no edge statement.** The chart transitions are only continuous; nothing here asserts that the boundary is a $C^1$ or smooth submanifold, and the notion of edge of an achronal set is not used.

- **Use.** Clause (d) is the measure-theoretic input to the volume time function of the globally hyperbolic slice of this page; clause (b) is the graph representation used there and in the local Cauchy-neighborhood lemma.
