---
id: cex-pasting-fails-for-an-infinite-closed-cover
kind: counterexample
title: "$\\mathbb{R}$ covered by its closed singletons: every restriction of the indicator of $\\{0\\}$ is continuous and the map is not, so the closed pasting lemma needs finiteness"
status: published
origin: session
deps: [lem-continuity-is-local-and-pastes, def-continuous-map-top, def-metrizable-space, def-metric-topology,
       def-metric-ball, lem-real-line-is-a-metric-space, def-subspace-topology-top,
       thm-continuity-characterisations-top, def-interval, def-topological-space,
       thm-metric-open-set-algebra, cor-archimedean-reciprocal, lem-of-inverse-positive,
       lem-of-naturals-positive, cor-of-one-positive, lem-of-add-order]
justified_by: []
aliases: []
landmark: false
short: "pasting fails for an infinite closed cover"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Pasting lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pasting_lemma"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
pipeline_run: null
---

## Statement refuted

**Refuted:** that continuity may be checked on an arbitrary closed cover. Claim 3
of [[lem-continuity-is-local-and-pastes]] allows only **finitely many** closed
pieces, and the restriction is not removable.

**Witness.** Give $\mathbb{R}$ its usual topology
([[def-metrizable-space]], [[lem-real-line-is-a-metric-space]]) and let

$$\mathcal{F} := \{\, \{t\} : t \in \mathbb{R} \,\}$$

be the family of its singletons, a cover of $\mathbb{R}$ by closed sets. Let
$f : \mathbb{R} \to \mathbb{R}$ be the indicator of $\{0\}$, that is $f(0) = 1$
and $f(t) = 0$ for $t \ne 0$. Then every restriction $f|_{\{t\}}$ is continuous
for the subspace topology ([[def-subspace-topology-top]]), and $f$ is not
continuous ([[def-continuous-map-top]]).

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, the cover $\mathcal{F}$ by singletons, and the function $f$ above.

[A1] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], clause (b)).

[A2] The subspace topology on $S \subseteq \mathbb{R}$ has as open sets the traces $U \cap S$ with $U$ open in $\mathbb{R}$ ([[def-subspace-topology-top]]); a topology on $S$ always contains $\varnothing$ and $S$ ([[def-topological-space]]).

[L1] In the usual topology $B(x,r) = (x-r,\ x+r)$, balls are open, and $U$ is open exactly when every $x \in U$ has some $r > 0$ with $(x-r,x+r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-metrizable-space]], [[def-interval]]).

[L2] For every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$, and $1/n > 0$ ([[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L3] $0 < 1$ and hence $1 < 1+1$ ([[cor-of-one-positive]], [[lem-of-add-order]]); consequently $1 \in (0,\ 1+1)$ and $0 \notin (0,\ 1+1)$.

[L4] Every singleton $\{t\} \subseteq \mathbb{R}$ is closed in the usual topology, its complement $(-\infty,t) \cup (t,\infty)$ being a union of two open sets ([[lem-real-line-is-a-metric-space]], [[def-metric-topology]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathcal{F}$ covers $\mathbb{R}$, each $t \in \mathbb{R}$ lying in $\{t\}$, and each member is closed by [L4]. [given, L4]

1.2 For every $t \in \mathbb{R}$ the subspace $\{t\}$ carries only the two subsets $\varnothing$ and $\{t\}$, both of which are open in it by [A2]; hence every function out of $\{t\}$ has open preimages and is continuous, and in particular $f|_{\{t\}}$ is. [A2, A1]

1.3 $V := B(1,1) = (0,\ 1+1)$ is a ball, hence open in $\mathbb{R}$ by [L1], and $f^{-1}[V] = \{0\}$: indeed $f(0) = 1 \in V$ by [L3], while $f(t) = 0 \notin V$ for $t \ne 0$, again by [L3]. [L1, L3]

1.4 $\{0\}$ is not open in the usual topology: for any $r > 0$ the ball $(-r,r)$ contains the point $1/n$ for a natural $n \ge 1$ with $1/n < r$ given by [L2], and $1/n > 0$, so $1/n \in (-r,r) \setminus \{0\}$; hence no ball around $0$ lies inside $\{0\}$. [L1, L2]

2.1 By step 1.3 and step 1.4 the preimage under $f$ of the open set $V$ is not open, so $f$ is not continuous by [A1]; by steps 1.1 and 1.2 the family $\mathcal{F}$ is a closed cover of $\mathbb{R}$ every restriction to which is continuous. So claim 3 of [[lem-continuity-is-local-and-pastes]] fails without the hypothesis that the cover be finite. [step 1.1, step 1.2, step 1.3, step 1.4, A1] ∎

## Remarks

- **Why an infinite closed cover is useless and an infinite open cover is not.** The proof of claim 3 of [[lem-continuity-is-local-and-pastes]] writes $f^{-1}[F]$ as a union of sets closed in $\mathbb{R}$ and concludes that it is closed; only *finite* unions of closed sets are closed ([[def-topological-space]]), and here $f^{-1}[\mathbb{R} \setminus V]$ is the union of the uncountably many closed sets $\{t\}$, $t \ne 0$, which is $\mathbb{R} \setminus \{0\}$, not closed. The open-cover version has no such restriction because arbitrary unions of open sets are open.

- **The singleton cover trivialises every function.** For any spaces $X$ and $Y$ and any $f : X \to Y$, the restriction of $f$ to a one-point subspace is continuous, so the singleton cover certifies nothing whatever. The witness is therefore the sharpest form of the failure rather than a delicate example, and the map $f$ could be replaced by any discontinuous function.

- **A two-piece closed cover of $\mathbb{R}$ would have detected the discontinuity.** For instance $(-\infty,0]$ and $[0,\infty)$ are closed and cover $\mathbb{R}$, and $f$ restricted to $(-\infty,0]$ is already discontinuous at $0$ by the argument of step 1.4 carried out inside that subspace.
