---
id: cex-a-path-connected-space-that-is-not-locally-connected
kind: counterexample
title: "The comb space is path-connected and fails to be locally connected at every point of the limit tooth strictly above the base, so path-connectedness does not imply local connectedness"
status: published
origin: session
deps: [def-path-connected, def-locally-connected, def-connected-space,
       thm-path-connected-implies-connected, def-connected-component-and-quasicomponent,
       def-subspace-topology-top, lem-product-topology-on-rn, def-interval,
       cor-archimedean-reciprocal, def-canonical-natural, lem-continuity-is-local-and-pastes,
       def-continuous-map-top, thm-closure-characterisation-top,
       def-interior-closure-boundary-top, def-neighbourhood-top, def-metrizable-space,
       lem-metrics-on-rn, def-metric-topology, def-product-topology,
       thm-product-universal-property, cor-connected-subsets-of-the-line,
       thm-continuous-image-of-a-connected-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Comb space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Comb_space"
    - title: "Locally connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
pipeline_run: null
---

## Statement refuted

**Refuted:** that a path-connected space is locally connected. Neither
[[thm-path-connected-implies-connected]] nor any statement on the page it belongs
to asserts this, and it is false.

**Witness, the comb space.** Writing $\iota$ for the canonical natural so that
$1/(n+1)$ means $1/\iota(n+1)$ with $n \in \mathbb{N}$ and $\mathbb{N}$
containing $0$ ([[def-canonical-natural]]), put

$$T \;:=\; \{0\} \cup \Bigl\{\tfrac{1}{n+1} : n \in \mathbb{N}\Bigr\} \subseteq [0,1], \qquad C \;:=\; \bigl([0,1] \times \{0\}\bigr) \;\cup\; \bigl(T \times [0,1]\bigr)$$

as a subspace of $\mathbb{R}^2$ with the product topology
([[lem-product-topology-on-rn]], [[def-subspace-topology-top]]). Then $C$ is
path-connected, hence connected, and $C$ is **not** locally connected at any
point $(0,t)$ with $t > 0$.

The base $[0,1] \times \{0\}$ is the spine of the comb, the sets
$\{c\} \times [0,1]$ for $c \in T$ are its teeth, and the failure occurs along
the limit tooth $\{0\} \times [0,1]$ above the base.

## Facts & Assumptions

**Given:** $\mathbb{R}^2$ with the product topology and the comb $C$ above, with $\pi_0$ the first projection.

[A1] The sets $(c,d) \times (e,g)$ form a basis of $\mathbb{R}^2$; a map into $\mathbb{R}^2$ is continuous exactly when both components are; the projections are continuous; an affine map of $\mathbb{R}$ into $\mathbb{R}$ is continuous ([[lem-product-topology-on-rn]], [[def-product-topology]], [[thm-product-universal-property]], [[def-continuous-map-top]], [[def-metrizable-space]], [[lem-metrics-on-rn]], [[def-metric-topology]]).

[A2] Being joined by a path is an equivalence relation on a space, so joins compose; a space is path-connected when any two of its points are joined; path-connected implies connected ([[def-path-connected]], [[lem-continuity-is-local-and-pastes]], [[thm-path-connected-implies-connected]], [[def-connected-space]]).

[A3] A subset of $\mathbb{R}$ is a connected subset exactly when it is order-convex, and a continuous image of a connected space is connected ([[cor-connected-subsets-of-the-line]], [[thm-continuous-image-of-a-connected-space]], [[def-interval]]).

[A4] $X$ is locally connected at $x$ when every open $U \ni x$ contains an open connected $V$ with $x \in V \subseteq U$; a neighbourhood need not be open ([[def-locally-connected]], [[def-neighbourhood-top]], [[def-connected-component-and-quasicomponent]]).

[A5] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]]).

[A6] A point lies in the closure of a set exactly when every basic open set containing it meets the set ([[thm-closure-characterisation-top]], [[def-interior-closure-boundary-top]]).

## Counterexample

**Proof technique:** direct.

1.1 Every point of $C$ is joined by a path in $C$ to the origin $(0,0)$. For $(x,0)$ on the base, $t \mapsto ((1-t)x, 0)$ is continuous by [A1] and stays in the base; for $(c,u)$ on a tooth with $c \in T$, the map $t \mapsto (c, (1-t)u)$ is continuous by [A1], stays in $\{c\} \times [0,1] \subseteq C$ and joins $(c,u)$ to $(c,0)$, which lies on the base. [A1, A2]

1.2 For $t > 0$ and $\eta := t/2 > 0$ put $U_t := C \cap \bigl(\mathbb{R} \times (t - \eta,\ t + \eta)\bigr)$, an open subset of $C$ containing $(0,t)$; every point of $U_t$ has second coordinate $> t - \eta = t/2 > 0$, so $U_t$ contains no point of the base and $\pi_0[U_t] \subseteq T$. [A1]

1.3 No subset of $T$ with two distinct points is order-convex: for $p < q$ in $T$ there is a real strictly between them and outside $T$, namely the midpoint of $1/(k+2)$ and $1/(k+1)$ for a suitable $k$, since between consecutive members of $T$ there is no member of $T$ and every element of $T$ other than $0$ is some $1/(k+1)$. [A3, A5]

2.1 By step 1.1 and [A2] any two points of $C$ are joined to each other through $(0,0)$, so $C$ is path-connected and hence connected. [step 1.1, A2]

2.2 Let $t > 0$ and suppose $V$ is open in $C$, connected, with $(0,t) \in V \subseteq U_t$. Then $\pi_0[V]$ is a connected subset of $\mathbb{R}$ by [A1] and [A3], hence order-convex, and $\pi_0[V] \subseteq T$ by step 1.2; so $\pi_0[V]$ has at most one point by step 1.3, and containing $0$ it equals $\{0\}$. Hence $V \subseteq \{0\} \times [0,1]$. [step 1.2, step 1.3, A1, A3]

3.1 But $V$ is open in $C$ and contains $(0,t)$, so by [A1] there is $\eta' > 0$ with $C \cap \bigl((-\eta',\eta') \times (t-\eta', t+\eta')\bigr) \subseteq V$; by [A5] there is $k \ge 1$ with $1/k < \eta'$, and with $n := k-1 \in \mathbb{N}$ the point $(1/(n+1), t)$ lies in that trace, hence in $V$, while its first coordinate is not $0$. This contradicts step 2.2. [step 2.2, A1, A5, A6]

4.1 So no such $V$ exists and $C$ fails to be locally connected at $(0,t)$ for every $t > 0$, by [A4], while being path-connected and connected by step 2.1. [step 2.1, step 3.1, A4] ∎

## Remarks

- **The comb and the zigzag closure fail in different ways, which is why both are on this page.** The zigzag closure is connected and not path-connected; the comb is path-connected and still not locally connected. So local connectedness is not implied even by the strongest of the three global conditions, and the three properties are genuinely independent.

- **Where the hypothesis $t > 0$ is used.** At $(0,0)$ the comb *is* locally connected: small neighbourhoods of the origin contain a piece of the base together with the bottoms of nearby teeth, and that set is path-connected by the argument of step 1.1. The failure needs the point to sit strictly above the base, so that the small neighbourhood $U_t$ of step 1.2 misses the base entirely and the teeth become disconnected from one another.

- **Deleting the base is what makes it a counterexample and not a curiosity.** Without the base the teeth are disjoint clopen segments and the space is disconnected; with the base they are welded at the bottom, so a path may always descend, travel and climb. Local connectedness fails precisely because that detour is not available inside a small neighbourhood high above the base.
