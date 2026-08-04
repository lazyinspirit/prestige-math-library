---
id: cor-connected-subsets-of-the-line
kind: corollary
title: "The connected subspaces of $\\mathbb{R}$ with its usual topology are exactly the order-convex subsets, the published characterisation transported by the identification of the two descriptions of \"open in $\\mathbb{R}$\""
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-connected-subsets-and-separated-sets, def-connected-space,
       thm-connected-subsets-of-r-are-intervals, def-connected-r,
       def-open-and-closed-in-r, def-neighbourhood-r, lem-real-line-is-a-metric-space,
       def-metric-topology, def-metric-ball, def-metrizable-space, def-interval,
       def-subspace-topology-top, def-interior-closure-boundary-r,
       def-order-topology-on-a-linearly-ordered-set]
justified_by: []
aliases: []
landmark: true
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
pipeline_run: null
---

## Statement

Give $\mathbb{R}$ its usual topology, the metric topology of
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]],
[[def-metric-topology]], [[def-metrizable-space]]), and let $E \subseteq
\mathbb{R}$ carry the subspace topology ([[def-subspace-topology-top]]). Then $E$
is a connected subset of $\mathbb{R}$ ([[def-connected-space]]) if and only if
$E$ is **order-convex** ([[def-interval]],
[[def-order-topology-on-a-linearly-ordered-set]]), that is

$$x, z \in E \text{ and } x \le w \le z \;\Longrightarrow\; w \in E .$$

In particular each of the nine interval forms of [[def-interval]] is connected,
and so are $\varnothing$ and every singleton.

**What has to be checked, and it is not the mathematics.** The characterisation
itself is the published [[thm-connected-subsets-of-r-are-intervals]], which is
stated for the connectedness of [[def-connected-r]] — a condition phrased with
the open sets of [[def-open-and-closed-in-r]] and the closure of
[[def-interior-closure-boundary-r]]. The present corollary says the same thing
for the connectedness of [[def-connected-space]] in the topological space
$\mathbb{R}$. What licenses the transport is that the two descriptions of "open
in $\mathbb{R}$" are the same condition word for word, which is unfolded in the
proof rather than quoted.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology and a subset $E \subseteq \mathbb{R}$ with the subspace topology.

[A1] $B(x,r) = \{\, y : |x-y| < r \,\} = (x-r,\ x+r) = N_r(x)$ for every $x \in \mathbb{R}$ and every real $r > 0$: the three descriptions are the same set, being defined by the same condition $|y-x| < r$ ([[def-metric-ball]], [[lem-real-line-is-a-metric-space]], [[def-neighbourhood-r]], [[def-interval]]).

[A2] $U \subseteq \mathbb{R}$ is open in the metric topology of $d_{\mathbb{R}}$ exactly when every $x \in U$ has some real $r > 0$ with $B(x,r) \subseteq U$ ([[def-metric-topology]], [[def-metrizable-space]]).

[A3] $U \subseteq \mathbb{R}$ is open in the sense of [[def-open-and-closed-in-r]] exactly when every $x \in U$ has some real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; a set is closed there exactly when its complement is open.

[A4] The closure of $A \subseteq \mathbb{R}$ in the sense of [[def-interior-closure-boundary-r]] is the intersection of all closed supersets of $A$, and $A$, $B$ are separated in the sense of [[def-connected-r]] when each misses the other's closure; a disconnection of $E$ is a pair of nonempty separated sets with union $E$, and $E$ is connected in that sense when none exists.

[A5] $E$ is a connected subset of the topological space $\mathbb{R}$ exactly when there is no pair $E_1, E_2$ of nonempty sets with $E = E_1 \cup E_2$ that are separated in $\mathbb{R}$, closures being taken in the topological space ([[lem-connected-subsets-and-separated-sets]], [[def-connected-space]], [[def-subspace-topology-top]]).

[A6] $E \subseteq \mathbb{R}$ is connected in the sense of [[def-connected-r]] if and only if $E$ is order-convex ([[thm-connected-subsets-of-r-are-intervals]]); each of the nine interval forms is order-convex ([[def-interval]]), and order-convexity of a subset of a linearly ordered set is the condition displayed in the Statement ([[def-order-topology-on-a-linearly-ordered-set]]).

## Proof

**Proof technique:** direct.

1.1 The two openness conditions coincide: by [A1] the ball $B(x,r)$ and the neighbourhood $N_r(x)$ are the same set, so "some $r > 0$ with $B(x,r) \subseteq U$" and "some $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$" are the same requirement on $U$ at $x$, and [A2] and [A3] then quantify it over the same points. [A1, A2, A3]

2.1 Hence the usual topology of $\mathbb{R}$ and the family of open sets of [[def-open-and-closed-in-r]] are one and the same family of subsets of $\mathbb{R}$, and therefore so are the two families of closed sets, each being the complements of the other family. [step 1.1, A2, A3]

3.1 Consequently the closure operator of [[def-interior-closure-boundary-r]] and the closure operator of the topological space $\mathbb{R}$ agree: each is defined as the intersection of all closed supersets, and by step 2.1 the two notions of closed set coincide, so the two intersections are over the same family. [step 2.1, A4]

4.1 Therefore "$A$ and $B$ are separated" means the same in [A4] and in [A5], so a disconnection of $E$ in the sense of [[def-connected-r]] is exactly a decomposition of $E$ into two nonempty sets separated in the topological space $\mathbb{R}$. [step 3.1, A4, A5]

5.1 So $E$ is connected in the sense of [[def-connected-r]] if and only if $E$ is a connected subset of the topological space $\mathbb{R}$, both being the nonexistence of the same object by step 4.1 and [A5]. [step 4.1, A5]

6.1 Combining step 5.1 with [A6], $E$ is a connected subset of $\mathbb{R}$ if and only if $E$ is order-convex; and each of the nine interval forms, the empty set and every singleton is order-convex, hence connected. [step 5.1, A6] ∎

## Remarks

- **Nothing here re-proves the hard direction.** The mathematical content — that order-convexity is exactly connectedness on the line — is [[thm-connected-subsets-of-r-are-intervals]], whose proof uses the least upper bound property. This corollary only checks that the vocabulary of the general definition and the vocabulary of the real-line definition denote the same conditions, so that the published theorem may be quoted afterwards without a translation step each time.

- **"Interval" is read as "order-convex" throughout.** The published theorem records that the converse classification — that every order-convex subset of $\mathbb{R}$ is empty or one of the nine written forms — is not proved, and [[def-interval]] records the same omission. The statement above is therefore written with order-convexity and not with a list of forms.

- **The identification is one sentence and is deliberately not routed through a conventions remark.** A dependency edge onto a remark that itself points at material developed further on would mark every consequence of this corollary as resting on later material, which would be false of everything on this page. The computation $B(x,r) = (x-r,x+r) = N_r(x)$ is short enough to carry in the open.
