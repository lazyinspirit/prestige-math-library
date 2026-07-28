---
id: lem-the-oscillating-zigzag-curve
kind: lemma
title: "The graph of the piecewise-linear map oscillating between $0$ and $1$ on the intervals $[1/(n+2), 1/(n+1)]$ is path-connected, its closure adds the segment $\\{0\\} \\times [0,1]$, and that closure is connected, is not path-connected because no path joins the segment to the graph, and is not locally connected"
status: draft
origin: session
deps: [def-connected-space, def-path-connected, def-locally-connected, def-homeomorphism-and-open-maps,
       thm-closure-of-a-connected-set, thm-continuous-image-of-a-connected-space,
       cor-connected-subsets-of-the-line, cor-intermediate-value-theorem-topological,
       thm-path-connected-implies-connected, def-subspace-topology-top,
       thm-subspace-closure-and-interior, lem-product-topology-on-rn,
       def-product-topology, thm-product-universal-property, def-metric-topology,
       lem-real-line-is-a-metric-space, lem-metrics-on-rn, def-metrizable-space,
       def-metric-ball, def-continuous-map-top, thm-continuity-characterisations-top,
       lem-continuity-is-local-and-pastes, def-interval, cor-archimedean-reciprocal,
       def-canonical-natural, thm-closure-characterisation-top,
       def-interior-closure-boundary-top, def-topological-space, lem-sup-epsilon,
       def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Topologist's sine curve (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topologist%27s_sine_curve"
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "Locally connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
pipeline_run: null
---

## Statement

Write $\iota$ for the canonical natural of $\mathbb{R}$
([[def-canonical-natural]]), so that $1/(n+1)$ means $1/\iota(n+1)$, and recall
that $\mathbb{N}$ contains $0$. For $n \in \mathbb{N}$ put

$$I_n \;:=\; \Bigl[\tfrac{1}{n+2},\ \tfrac{1}{n+1}\Bigr] \subseteq (0,1],$$

so that $I_0 = [1/2, 1]$ and $\bigcup_{n \in \mathbb{N}} I_n = (0,1]$
([[def-interval]]). Define $\varepsilon_n := 0$ for $n$ even and
$\varepsilon_n := 1$ for $n$ odd, and let

$$f : (0,1] \to [0,1]$$

be the function that is **affine on each $I_n$** with
$f(1/(n+1)) = \varepsilon_n$ for every $n \in \mathbb{N}$; explicitly, for
$x \in I_n$,

$$f(x) \;=\; \varepsilon_{n+1} \;+\; (\varepsilon_n - \varepsilon_{n+1}) \cdot \frac{x - \frac{1}{n+2}}{\frac{1}{n+1} - \frac{1}{n+2}} .$$

The two clauses agree at each shared endpoint $1/(n+1)$, both giving
$\varepsilon_n$, so $f$ is a well-defined function; $f(1) = \varepsilon_0 = 0$;
and on each $I_n$ the map $f$ runs affinely between $0$ and $1$, so it takes both
values $0$ and $1$ on $I_n$, at the two endpoints. Let

$$G \;:=\; \{\, (x, f(x)) : x \in (0,1] \,\} \;\subseteq\; \mathbb{R}^2 ,$$

the **graph** of $f$, with $\mathbb{R}^2$ carrying the product topology, which is
the metric topology of $d_\infty$ ([[lem-product-topology-on-rn]],
[[lem-metrics-on-rn]], [[def-metrizable-space]]), and let subsets carry the
subspace topology ([[def-subspace-topology-top]]). Then:

1. **$f$ is continuous**, and $G$ is homeomorphic to $(0,1]$; hence $G$ is
   path-connected ([[def-path-connected]]), connected, and locally connected
   ([[def-locally-connected]]).
2. **The closure is** $\overline{G} = G \cup (\{0\} \times [0,1])$.
3. **$\overline{G}$ is connected** ([[def-connected-space]]).
4. **$\overline{G}$ is not path-connected**; more precisely, no path in
   $\overline{G}$ joins a point of $\{0\} \times [0,1]$ to a point of $G$.
5. **$\overline{G}$ is not locally connected at any point $(0,t)$,
   $t \in [0,1]$**, so it is not locally connected.

**There is no trigonometric function anywhere in this construction.** Every piece
of $f$ is affine, and the oscillation comes from the alternating endpoint values
$\varepsilon_n$ alone.

## Facts & Assumptions

**Given:** The intervals $I_n$, the function $f$, the graph $G$, and $\mathbb{R}^2$ with the product topology; $\pi_0, \pi_1 : \mathbb{R}^2 \to \mathbb{R}$ denote the two projections.

[A1] An affine map $x \mapsto c + mx$ of $\mathbb{R}$ into $\mathbb{R}$ is continuous: $|(c+ms)-(c+mt)| = |m||s-t|$, so for $m \ne 0$ the ball of radius $\delta/|m|$ around $t$ maps into the ball of radius $\delta$, and a constant map is continuous outright ([[def-metric-ball]], [[def-metrizable-space]], [[lem-real-line-is-a-metric-space]], [[def-metric-topology]], [[def-continuous-map-top]]).

[A2] Continuity may be checked on any open cover and on any **finite** closed cover, and composites and restrictions of continuous maps are continuous ([[lem-continuity-is-local-and-pastes]], claims 1, 2, 3, [[def-subspace-topology-top]]).

[A3] A map into a product is continuous exactly when both components are; the projections are continuous; the sets $(a,b) \times (c,d)$ form a basis of $\mathbb{R}^2$, being the $d_\infty$-balls and their finite intersections ([[thm-product-universal-property]], [[def-product-topology]], [[lem-product-topology-on-rn]], [[lem-metrics-on-rn]], [[def-metric-topology]]).

[A4] A subset of $\mathbb{R}$ is a connected subset exactly when it is order-convex; a continuous real-valued map on a connected space has order-convex image ([[cor-connected-subsets-of-the-line]], [[cor-intermediate-value-theorem-topological]], [[def-interval]], [[thm-continuous-image-of-a-connected-space]]).

[A5] $x \in \overline{A}$ exactly when every basic open set containing $x$ meets $A$; $A$ is closed exactly when $A = \overline{A}$; for $A \subseteq S$ the closure of $A$ in $S$ is $\overline{A} \cap S$ ([[thm-closure-characterisation-top]], [[def-interior-closure-boundary-top]], [[thm-subspace-closure-and-interior]], [[def-topological-space]]).

[A6] If $A$ is connected and $A \subseteq B \subseteq \overline{A}$ then $B$ is connected; a path-connected space is connected ([[thm-closure-of-a-connected-set]], [[thm-path-connected-implies-connected]]).

[A7] For every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]]).

[A8] A nonempty subset of $\mathbb{R}$ bounded above has a least upper bound, and for every $\varepsilon > 0$ some element of it exceeds $\sup - \varepsilon$ ([[def-complete-ordered-field]], [[lem-sup-epsilon]]).

[A9] $X$ is locally connected at $x$ when every open $U \ni x$ contains an open connected $V$ with $x \in V \subseteq U$; a homeomorphism $h$ carries such a $V$ to $h[V]$, which is connected as a continuous image and open because a homeomorphism is an open map, so local connectedness is a topological property ([[def-locally-connected]], [[thm-continuous-image-of-a-connected-space]] claim 1, [[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** direct.

1.1 $f$ is continuous. For $n \in \mathbb{N}$ the restriction of $f$ to the closed set $I_n \cup I_{n+1} = [1/(n+3), 1/(n+1)]$ is continuous, being affine on each of the two closed pieces by [A1] and agreeing at the shared endpoint, so the finite closed cover clause of [A2] applies with two pieces; likewise $f$ is affine, hence continuous, on $[1/2,1] = I_0$. [A1, A2]

1.2 $(0,1]$ is order-convex, hence a connected subset of $\mathbb{R}$ by [A4], and it is path-connected: for $x, y \in (0,1]$ the map $t \mapsto x + t(y-x)$ is continuous by [A1] and takes values in $(0,1]$ by order-convexity. [A1, A4]

1.3 $(0,1]$ is locally connected: a basic open subset of it is the trace of an interval of $\mathbb{R}$, hence order-convex, hence connected by [A4]; so the open connected subsets form a neighbourhood base at each of its points, which is [A9]. [A4, A9]

1.4 $\overline{G} \subseteq G \cup (\{0\} \times [0,1])$. Let $(x,y) \in \overline{G}$. Every point of $G$ lies in $[0,1] \times [0,1]$, which is closed, being a product of closed sets whose complement is a union of basic open sets; so $(x,y) \in [0,1] \times [0,1]$ by [A5]. If $x = 0$ the point lies in $\{0\} \times [0,1]$. [A5]

1.5 A second consequence, used twice below: for every real $\rho > 0$ there are $x_0, x_1 \in (0, \rho]$ with $f(x_0) = 0$ and $f(x_1) = 1$. Indeed [A7] gives a natural $k \ge 1$ with $1/k < \rho$; with $n := k-1 \in \mathbb{N}$ the interval $I_n \subseteq (0, \rho]$, and the two endpoints of $I_n$ carry the values $\varepsilon_n$ and $\varepsilon_{n+1}$, which are $0$ and $1$ in one order or the other. [A7]

2.1 The sets $W_n := (1/(n+3), 1/(n+1))$ for $n \in \mathbb{N}$, together with $W^{*} := (1/2, 1]$, form an open cover of $(0,1]$ in its subspace topology, and $f$ restricted to each is a restriction of one of the continuous maps of step 1.1; so $f$ is continuous by the open cover clause of [A2]. [step 1.1, A2]

3.1 The map $g : (0,1] \to \mathbb{R}^2$, $g(x) := (x, f(x))$, is continuous by [A3], its components being the inclusion and $f$, both continuous by step 2.1 and [A2]; it is injective, since $g(x)$ determines $x$; and its image is $G$. [step 2.1, A2, A3]

3.2 $\{0\} \times [0,1] \subseteq \overline{G}$. Let $t \in [0,1]$ and let $(a,b) \times (c,d)$ be a basic open set containing $(0,t)$. By [A7] there is a natural $k \ge 1$ with $1/k < \min\{b, 1\}$, and putting $n := k - 1 \in \mathbb{N}$ the interval $I_n$ lies in $(0, b)$, since $1/(n+1) = 1/k < b$. As $f$ runs affinely between $0$ and $1$ on $I_n$, [A4] gives $x \in I_n$ with $f(x) \in (c,d)$: the image of $I_n$ under $f$ is order-convex and contains $0$ and $1$, hence contains $t$ and every point near it inside $[0,1]$. Then $(x, f(x)) \in G$ lies in the basic set, so $(0,t) \in \overline{G}$ by [A5]. [step 2.1, A4, A5, A7]

4.1 The corestriction $g_0 : (0,1] \to G$ is a continuous bijection by step 3.1 and [A2], and its inverse is the restriction of $\pi_0$ to $G$, which is continuous by [A3] and [A2]; so $g_0$ is a homeomorphism and $G \cong (0,1]$. [step 3.1, A2, A3]

4.2 Suppose instead $x > 0$, so $x \in (0,1]$ and $f(x)$ is defined. Let $\varepsilon > 0$. By step 2.1 and [A3] there is $\delta > 0$ such that $|f(s) - f(x)| < \varepsilon$ for every $s \in (x-\delta, x+\delta) \cap (0,1]$. The basic set $(x-\delta, x+\delta) \times (y-\varepsilon, y+\varepsilon)$ contains $(x,y)$, hence meets $G$ by [A5] in a point $(s, f(s))$; then $|y - f(x)| \le |y - f(s)| + |f(s) - f(x)| < 2\varepsilon$. As $\varepsilon > 0$ was arbitrary, $y = f(x)$ and $(x,y) \in G$. With step 3.2 and step 1.4 this proves claim 2. [step 2.1, step 3.2, step 1.4, A3, A5]

4.3 Claim 5. Fix $t \in [0,1]$ and let $U := \overline{G} \cap (\mathbb{R} \times (t - 1/4,\ t + 1/4))$, an open subset of $\overline{G}$ containing $(0,t)$. Suppose $V$ is open in $\overline{G}$, connected, with $(0,t) \in V \subseteq U$. Then $V$ contains a set $\overline{G} \cap ((-\eta,\eta) \times (t-\eta, t+\eta))$ for some $\eta > 0$ by [A3], and that set meets $G$ by step 3.2, at a point whose first coordinate $x$ satisfies $0 < x < \eta$. [step 3.2, A3, A5]

5.1 Hence $G$ is path-connected, connected and locally connected, these being carried across the homeomorphism of step 4.1 from step 1.2 and step 1.3, using [A6] for connectedness and [A9] for local connectedness. This is claim 1. [step 1.2, step 1.3, step 4.1, A6, A9]

5.2 A useful consequence of claim 2, used twice below: if $p \in \overline{G}$ has $\pi_0(p) > 0$ then $p = (\pi_0(p), f(\pi_0(p)))$, so $\pi_1(p) = f(\pi_0(p))$. [step 4.2]

5.3 Claim 4. Suppose $\gamma : [0,1] \to \overline{G}$ is a path with $\gamma(0) \in \{0\} \times [0,1]$ and $\gamma(1) \in G$, and write $k := \pi_0 \circ \gamma$ and $h := \pi_1 \circ \gamma$, both continuous by [A3] and [A2]. Then $J := \{\, u \in [0,1] : k(u) = 0 \,\}$ is closed in $[0,1]$, being the preimage of the closed set $\{0\}$, it contains $0$, and $1 \notin J$ since $\pi_0(\gamma(1)) > 0$. [step 4.2, A2, A3, A5]

6.1 Claim 3: $G$ is connected by step 5.1 and $G \subseteq \overline{G} \subseteq \overline{G}$, so $\overline{G}$ is connected by [A6]. [step 5.1, A6]

6.2 Let $c := \sup J$, which exists by [A8]. Every open set containing $c$ contains an interval around it, which by [A8] meets $J$; so $c \in \overline{J}$, and $J$ is closed in $[0,1]$ while $\overline{J} \subseteq \overline{[0,1]} = [0,1]$, so $c \in J$ by [A5]. Hence $k(c) = 0$ and $c < 1$. [step 5.3, A5, A8]

6.3 So $\pi_0[V]$ is a connected subset of $\mathbb{R}$ by [A4] and step 3.1, hence order-convex, and it contains $0$ and $x > 0$; therefore $[0,x] \subseteq \pi_0[V]$. By step 1.5 with $\rho := x$ there are $x_0, x_1 \in (0,x]$ with $f(x_0) = 0$ and $f(x_1) = 1$, so $V$ contains points $p_0, p_1$ with $\pi_0(p_i) = x_i > 0$, and $\pi_1(p_i) = f(x_i)$ by step 5.2. [step 5.2, step 1.5, step 4.3, A4]

7.1 By continuity of $h$ at $c$ there is $\delta > 0$ with $c + \delta \le 1$ and $|h(u) - h(c)| < 1/4$ for all $u \in [c, c+\delta]$; put $t := h(c)$. Moreover $k(c+\delta) > 0$, since $c + \delta > c = \sup J$ puts $c+\delta$ outside $J$ while $k \ge 0$ everywhere by step 1.4. [step 5.3, step 6.2, A3]

8.1 The restriction of $k$ to $[c, c+\delta]$ is continuous on a connected space by [A4] and step 1.2, so its image is order-convex and contains $k(c) = 0$ and $k(c+\delta) > 0$; hence $[0, k(c+\delta)]$ lies in that image. By step 1.5 with $\rho := k(c+\delta)$ there are $x_0, x_1 \in (0, k(c+\delta)]$ with $f(x_0) = 0$ and $f(x_1) = 1$, and therefore $u_0, u_1 \in [c, c+\delta]$ with $k(u_i) = x_i > 0$. [step 1.5, step 7.1, A4]

9.1 By step 5.2, $h(u_i) = f(k(u_i)) = f(x_i)$, so $h(u_0) = 0$ and $h(u_1) = 1$; but both lie within $1/4$ of $t$ by step 7.1, giving $1 = |h(u_1) - h(u_0)| \le |h(u_1) - t| + |t - h(u_0)| < 1/2$, which is false. So no such path exists, and since $\overline{G}$ contains points of both kinds by claim 2, it is not path-connected. This is claim 4. [step 5.2, step 7.1, step 8.1]

10.1 Hence $V$ contains a point with second coordinate $0$ and a point with second coordinate $1$, both of which must lie in $(t - 1/4, t+1/4)$ because $V \subseteq U$; that gives $1 \le |0 - t| + |t - 1| < 1/2$, which is false. So no such $V$ exists and $\overline{G}$ is not locally connected at $(0,t)$, by [A9]; this is claim 5. [step 4.3, step 6.3, A9] ∎

## Remarks

- **Why continuity is checked on an OPEN cover and never on the closed one.** The intervals $I_n$ form a closed cover of $(0,1]$ with infinitely many members, and the closed pasting lemma is false for infinite covers, the standing witness being [[cex-pasting-fails-for-an-infinite-closed-cover]]. The proof therefore pastes only two closed pieces at a time, producing continuity on a slightly larger closed interval, and then uses the open cover clause, which carries no finiteness restriction.

- **What each claim is for.** Claim 3 with claim 4 gives a connected space that is not path-connected; claim 1 with claim 4 gives a path-connected set whose closure is not path-connected; claim 1 with claim 5 gives a locally connected set whose closure is not locally connected. Each of the three is used as a witness later on this page.

- **The failure is exactly at the added segment.** By claim 2 the only points of $\overline{G}$ not in $G$ are those of $\{0\} \times [0,1]$, and claim 5 locates the failure of local connectedness at each of them. At every point of $G$ the space $\overline{G}$ still looks like $(0,1]$, since $G$ is open in $\overline{G}$ — its complement $\{0\} \times [0,1]$ is closed — so no pathology occurs away from the segment.

- **Both endpoint values are attained on every piece, and that is the whole mechanism.** The proof never uses any property of $f$ beyond continuity and the fact recorded in step 5.3: arbitrarily close to $0$ the function takes the value $0$ and the value $1$. Any function with that property and a path-connected graph would serve.
