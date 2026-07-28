---
id: fs-local-compactness-is-hereditary
kind: false-statement
title: "FALSE: every subspace of a locally compact space is locally compact"
status: draft
origin: session
deps: [def-locally-compact-space, def-compact-space, def-hereditary-property, def-subspace-topology-top, thm-compactness-agrees-with-metric-compactness, thm-heine-borel-rn, lem-q-and-irrationals-dense-r, lem-of-q-dense, def-metrizable-space, def-metric-topology, lem-real-line-is-a-metric-space, def-neighbourhood-top, def-interval, def-topological-space, def-interior-closure-boundary-top, thm-closure-characterisation-top]
justified_by: []
aliases: []
landmark: false
short: "FALSE: local compactness is hereditary"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
pipeline_run: null
---

## Statement

**False claim:** local compactness ([[def-locally-compact-space]]) is a
hereditary property ([[def-hereditary-property]]): every subspace
([[def-subspace-topology-top]]) of a locally compact space is locally compact.

**Where the claim comes from, and what is actually true.** Metrizability is
hereditary, and so are several other properties of the same shape, so the
expectation is natural. What is true for local compactness is heredity along
**open** subspaces and along **closed** subspaces of a locally compact Hausdorff
space, and no more. The witness below is the rationals inside the real line,
which is neither open nor closed in it.

## Facts & Assumptions

**Given:** The real line $\mathbb{R}$ with its usual topology, the metric $d_{\mathbb{R}}(s,t) = |s-t|$, the subset $\mathbb{Q} \subseteq \mathbb{R}$ of rationals with the subspace topology, and the bounded open intervals $(c,d)$.

[A1] The false claim: every subspace of a locally compact space is locally compact.

[L1] $\mathbb{R}$ with its usual topology is metrizable, its open sets being exactly the sets $U$ such that every $x \in U$ has $(x-r, x+r) \subseteq U$ for some real $r > 0$ ([[lem-real-line-is-a-metric-space]], claim 3; [[def-metric-topology]], [[def-metrizable-space]], [[def-interval]], [[def-topological-space]]).

[L2] $\mathbb{R}$ is locally compact: for $p \in \mathbb{R}$ the set $[p-1, p+1]$ is closed and bounded, hence a compact subset of the metric space $\mathbb{R}$ ([[thm-heine-borel-rn]], claim 3) and so a compact subset of the topological space $\mathbb{R}$ ([[thm-compactness-agrees-with-metric-compactness]], claim 2); and it contains the open $(p-1, p+1) \ni p$, so it is a neighbourhood of $p$ ([[def-neighbourhood-top]], [[def-locally-compact-space]]).

[L3] For reals $c < d$ there is a rational strictly between them ([[lem-of-q-dense]]), and there is also an irrational strictly between them, the irrationals being dense in $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]], claim 2; [[def-interior-closure-boundary-top]]).

[L4] A subset $A$ of a space is a compact subset when the subspace it carries is compact, and for $A \subseteq S \subseteq X$ the topology $A$ inherits from $S$ is the one it inherits from $X$, so compactness of $A$ does not depend on which of the two it is read in ([[def-compact-space]], [[def-subspace-topology-top]], [[def-hereditary-property]]).

[L5] A compact subset of the metric space $\mathbb{R}$ is closed in $\mathbb{R}$ and bounded ([[thm-heine-borel-rn]], claim 3), and a closed subset of $\mathbb{R}$ contains every point of $\mathbb{R}$ all of whose neighbourhoods meet it ([[thm-closure-characterisation-top]], claim 1; [[def-interior-closure-boundary-top]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the claim [A1] holds, so that every subspace of a locally compact space is locally compact. [A1, assume-contra]

1.2 $\mathbb{R}$ with its usual topology is locally compact by [L2]. [L1, L2]

2.1 By [A1] and step 1.2 the subspace $\mathbb{Q}$ would be locally compact, so the point $0$ of $\mathbb{Q}$ would have a compact neighbourhood $K$ in $\mathbb{Q}$: a set $K \subseteq \mathbb{Q}$, compact as a subspace, containing a set open in $\mathbb{Q}$ that contains $0$. By [L1] and the definition of the subspace topology that open set contains $(-\varepsilon, \varepsilon) \cap \mathbb{Q}$ for some real $\varepsilon > 0$, so $(-\varepsilon, \varepsilon) \cap \mathbb{Q} \subseteq K$. [A1, L1, L4, step 1.2]

3.1 By [L4] the set $K$ is a compact subset of $\mathbb{R}$ as well, and hence closed in $\mathbb{R}$ and bounded by [L5]. [L4, L5, step 2.1]

4.1 By [L3] there is an irrational $t$ with $0 < t < \varepsilon$. Every neighbourhood of $t$ in $\mathbb{R}$ contains an interval $(c,d)$ with $c < t < d$, which may be shrunk so that $0 < c$ and $d < \varepsilon$, and [L3] then puts a rational $q$ with $c < q < d$ in it; that $q$ lies in $(-\varepsilon,\varepsilon) \cap \mathbb{Q} \subseteq K$. So every neighbourhood of $t$ meets $K$, and $K$ being closed, [L5] gives $t \in K \subseteq \mathbb{Q}$ — but $t$ is irrational. This contradiction refutes the claim [A1]. [A1, L1, L3, L5, step 2.1, step 3.1, discharge-contradiction] ∎

## Remarks

**Why $\mathbb{Q}$ fails at every point, not just at $0$.** The argument uses nothing about $0$ beyond its being rational: for any $q \in \mathbb{Q}$ a compact neighbourhood would have to be a closed subset of $\mathbb{R}$ containing all rationals near $q$, and hence would contain the irrationals near $q$ as well, which it cannot. So $\mathbb{Q}$ is nowhere locally compact, and the witness is not an isolated defect at one point.

**What the failure is about.** A compact subset of $\mathbb{R}$ is closed in $\mathbb{R}$, and a subset of $\mathbb{Q}$ that is closed in $\mathbb{R}$ has empty interior in $\mathbb{R}$; so no compact subset of $\mathbb{Q}$ can contain a whole interval's worth of rationals. The two facts pull in opposite directions, and $\mathbb{Q}$ is caught between them precisely because it is dense in $\mathbb{R}$ and is not all of it.

**Heredity does hold in two special cases** and they are proved rather than assumed: along open subspaces of a locally compact Hausdorff space and along closed subspaces of any locally compact space ([[thm-locally-compact-hausdorff-basics]], claim 2). The set $\mathbb{Q}$ is neither open nor closed in $\mathbb{R}$, so it escapes both.
