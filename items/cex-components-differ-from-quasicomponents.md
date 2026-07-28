---
id: cex-components-differ-from-quasicomponents
kind: counterexample
title: "In the subspace of $\\mathbb{R}^2$ made of the vertical unit segments over $1/(n+1)$ together with the two points $(0,0)$ and $(0,1)$, the component of $(0,0)$ is a singleton while its quasicomponent is $\\{(0,0), (0,1)\\}$"
status: published
origin: session
deps: [def-connected-component-and-quasicomponent, thm-quasicomponents-contain-components,
       thm-components-partition-and-are-closed, cor-connected-subsets-of-the-line,
       def-connected-space, thm-connectedness-characterisations, def-subspace-topology-top,
       lem-product-topology-on-rn, def-interval, cor-archimedean-reciprocal,
       def-canonical-natural, thm-closure-characterisation-top,
       def-interior-closure-boundary-top, thm-subspace-closure-and-interior,
       def-topological-space, def-product-topology, thm-product-universal-property,
       thm-continuous-image-of-a-connected-space, def-continuous-map-top]
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
    - title: "Locally connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
pipeline_run: null
---

## Statement refuted

**Refuted:** that the component and the quasicomponent of a point always agree.
[[thm-quasicomponents-contain-components]] proves only the inclusion
$C(x) \subseteq Q(x)$ and asserts no converse; the inclusion can be strict.

**Witness.** In $\mathbb{R}^2$ with the product topology
([[lem-product-topology-on-rn]], [[def-product-topology]]), and writing
$\iota$ for the canonical natural so that $1/(n+1)$ means $1/\iota(n+1)$ with
$n \in \mathbb{N}$ and $\mathbb{N}$ containing $0$
([[def-canonical-natural]]), put

$$S_n := \Bigl\{\tfrac{1}{n+1}\Bigr\} \times [0,1] \quad (n \in \mathbb{N}), \qquad a := (0,0), \qquad b := (0,1),$$

$$X \;:=\; \{a, b\} \;\cup\; \bigcup_{n \in \mathbb{N}} S_n ,$$

with the subspace topology ([[def-subspace-topology-top]]). Then

$$C(a) = \{a\} \qquad \text{and} \qquad Q(a) = \{a, b\}$$

([[def-connected-component-and-quasicomponent]]), so the inclusion is strict.

## Facts & Assumptions

**Given:** $\mathbb{R}^2$ with the product topology and the subspace $X$ above, with $\pi_0, \pi_1$ the two projections.

[A1] The sets $(c,d) \times (e,g)$ form a basis of $\mathbb{R}^2$, and the open sets of $X$ are their traces together with unions of those; a map into $\mathbb{R}^2$ is continuous exactly when both components are; the projections are continuous ([[lem-product-topology-on-rn]], [[def-product-topology]], [[thm-product-universal-property]], [[def-subspace-topology-top]], [[def-continuous-map-top]]).

[A2] A subset of $\mathbb{R}$ is a connected subset exactly when it is order-convex, and a continuous image of a connected space is a connected subset of the target ([[cor-connected-subsets-of-the-line]], [[def-interval]], [[thm-continuous-image-of-a-connected-space]], [[def-connected-space]]).

[A3] $C(x)$ is the largest connected subset containing $x$; $Q(x)$ is the intersection of all clopen subsets containing $x$; $C(x) \subseteq Q(x)$ ([[def-connected-component-and-quasicomponent]], [[thm-quasicomponents-contain-components]], [[thm-components-partition-and-are-closed]]).

[A4] A connected subset meeting a clopen set is contained in it, since the trace is clopen in it and nonempty ([[thm-connectedness-characterisations]], claim 2, [[def-subspace-topology-top]], [[def-topological-space]]).

[A5] $x \in \overline{A}$ exactly when every basic open set containing $x$ meets $A$; a set closed in $X$ contains its closure taken in $X$, which is $\overline{A} \cap X$ ([[thm-closure-characterisation-top]], [[def-interior-closure-boundary-top]], [[thm-subspace-closure-and-interior]]).

[A6] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $S_n$ is a connected subset of $X$: it is the image of $[0,1]$, connected by [A2], under $t \mapsto (1/(n+1), t)$, whose components are a constant map and the identity, both continuous by [A1]. [A1, A2]

1.2 Write $P := \pi_0[X] = \{0\} \cup \{\, 1/(k+1) : k \in \mathbb{N} \,\}$ and, for $k \in \mathbb{N}$, $\mu_k := \tfrac12\bigl(1/(k+2) + 1/(k+1)\bigr)$, which satisfies $1/(k+2) < \mu_k < 1/(k+1)$ and lies in no $P$, being strictly between two consecutive members of $P$ and strictly positive. No subset of $P$ with two distinct points is order-convex: given $p < q$ in $P$, if $p = 0$ and $q = 1/(m+1)$ take $k := m$, and if $p = 1/(n+1)$ and $q = 1/(m+1)$ with $m < n$ take $k := n-1$, which is a natural number since $n \ge 1$; in both cases $p \le 1/(k+2) < \mu_k < 1/(k+1) \le q$, so $\mu_k$ lies strictly between $p$ and $q$ and outside $P$. [A2, A6]

1.3 Each $S_n$ is clopen in $X$: with $\delta := \tfrac12\bigl(\tfrac{1}{n+1} - \tfrac{1}{n+2}\bigr) > 0$, the trace on $X$ of the open strip $(1/(n+1) - \delta,\ 1/(n+1) + \delta) \times \mathbb{R}$ is exactly $S_n$, so $S_n$ is open in $X$; and the trace of the closed strip $[1/(n+1) - \delta,\ 1/(n+1)+\delta] \times \mathbb{R}$ is also exactly $S_n$, so $S_n$ is closed in $X$ by [A5]. [A1, A5]

1.4 $b \in Q(a)$. Let $K$ be clopen in $X$ with $a \in K$. Since $K$ is open, [A1] gives $\varepsilon > 0$ with $X \cap \bigl((-\varepsilon,\varepsilon) \times (-\varepsilon,\varepsilon)\bigr) \subseteq K$; by [A6] there is $k \ge 1$ with $1/k < \varepsilon$, and putting $n := k-1 \in \mathbb{N}$ the point $(1/(n+1), 0)$ lies in that trace, hence in $K$. The same holds for every $m \ge n$, since $1/(m+1) \le 1/(n+1) < \varepsilon$. [A1, A6]

2.1 $C(a) = \{a\}$. Let $E \subseteq X$ be connected with $a \in E$. Then $\pi_0[E]$ is a connected subset of $\mathbb{R}$ by [A1] and [A2], hence order-convex, and it lies inside $\pi_0[X]$; by step 1.2 it has at most one point, so $\pi_0[E] = \{0\}$ and $E \subseteq \{a,b\}$. But $\{a\}$ is the trace on $\{a,b\}$ of the open set $\mathbb{R} \times (-1/2, 1/2)$, so $\{a\}$ and $\{b\}$ are both open in the subspace $\{a,b\}$; a connected $E$ containing $a$ therefore cannot contain $b$, and $E = \{a\}$. Hence $C(a) = \{a\}$ by [A3]. [step 1.2, A1, A2, A3]

2.2 $Q(a) \subseteq \{a,b\}$: for each $n$ the set $X \setminus S_n$ is clopen by step 1.3 and contains $a$, so $Q(a) \subseteq X \setminus S_n$ by [A3]; intersecting over all $n$ leaves $Q(a) \subseteq X \setminus \bigcup_n S_n = \{a,b\}$. [step 1.3, A3]

2.3 Each such $S_m$ is connected by step 1.1 and meets $K$ at $(1/(m+1), 0)$, so $S_m \subseteq K$ by [A4]; in particular $(1/(m+1), 1) \in K$ for every $m \ge n$. [step 1.1, step 1.4, A4]

3.1 Every basic open set containing $b = (0,1)$ contains, for large enough $m$, the point $(1/(m+1), 1)$: such a set includes $(-\eta,\eta) \times (1-\eta, 1+\eta)$ for some $\eta > 0$, and [A6] supplies $m \ge n$ with $1/(m+1) < \eta$. So $b \in \overline{K}$ by [A5], and $K$ being closed in $X$ gives $b \in K$. As $K$ was an arbitrary clopen set containing $a$, this shows $b \in Q(a)$. [step 2.3, A5, A6]

4.1 With step 2.2 and $a \in Q(a)$ from [A3], $Q(a) = \{a,b\}$, while $C(a) = \{a\}$ by step 2.1. So $C(a) \subsetneq Q(a)$ and the two notions differ. [step 2.1, step 2.2, step 3.1, A3] ∎

## Remarks

- **Why no clopen set can separate $a$ from $b$.** A clopen set containing $a$ must, by openness, catch a point of $S_n$ for every large $n$; being clopen it must then swallow each of those whole segments, by [A4]; and being closed it must contain the limit of their top endpoints, which is $b$. The segments act as a ladder that is invisible to connectedness — no connected set climbs it, since $\pi_0$ would have to be order-convex — and unavoidable for clopen sets.

- **The two points are essential and so are the segments.** Removing $b$ makes $Q(a) = \{a\}$; replacing the segments by single points makes $X$ totally separated, because each column becomes clopen on its own and no ladder survives. This is why the witness needs sets that are connected and shrinking towards the limit, not merely a sequence of points.

- **The space has no isolated ladder rung near the limit.** By step 1.3 each $S_n$ is clopen, so $X$ is not connected; the failure recorded here is not about $X$ being connected but about the two ways of measuring how $X$ falls apart giving different answers at $a$.
