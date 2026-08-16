---
id: thm-compactness-is-invariant-under-finite-sheeted-coverings
kind: theorem
title: "For a finite-sheeted covering, the total space is compact exactly when the base is compact"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-covering-map-and-evenly-covered-neighbourhoods, def-compact-space, thm-compactness-under-continuous-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 3"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
pipeline_run: null
---

## Statement

If $p:E\to B$ is a finite-sheeted covering, then $E$ is compact if and only if $B$ is compact.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F2] Let $(X, \mathcal{T})$ be a topological space (def-topological-space). An **open cover** of $(X,\mathcal T)$ is a family $\mathcal U\subseteq\mathcal T$ of open sets with $X=\bigcup\mathcal U$; a **subcover** of $\mathcal U$ is a subfamily that is itself an open cover; and $(X,\mathcal T)$ is **compact** when every open cover of it has a finite subcover. ([[def-compact-space]]).

[F3] Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces (def-topological-space), and let $\mathbb{R}$ carry its usual topology, the metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$ (lem-real-line-is-a-metric-space, def-metric-topology, def-metrizable-space). Then: 1. **Continuous images.** If $f : X \to Y$ is continuous (def-continuous-map-top) and $(X, \mathcal{T}_X)$ is compact (def-compact-space), then $f[X]$ is a compact subset of $Y$. More generally, if $K \subseteq X$ is a compact subset of $X$ then $f[K]$ is a compact subset of $Y$. 2. **Extreme values.** If $(X, \mathcal{T}_X)$ is compact and nonempty and $g : X \to \mathbb{R}$ is continuous, then $g[X]$ has a maximum and a minimum (def-max-min): there are $x_{\max}, x_{\min} \in X$ with $$g(x_{\min}) \;\le\; g(x) \;\le\; g(x_{\max}) \qquad \text{for every } x \in X .$$ 3. **Compact to Hausdorff.** If $(X, \mathcal{T}_X)$ is compact, $(Y, \mathcal{T}_Y)$ is Hausdorff (def-hausdorff-space) and $f : X \to Y$ is a continuous bijection, then $f$ is a homeomorphism (def-homeomorphism-and-open-maps). Nonemptiness in claim 2 is a hypothesis and not an oversight: for $X = \varnothing$ the image is empty and has neither a maximum nor a minimum. **No choice principle is used**: the one selection made below is over a finite index set, where lem-finite-choice is a theorem of ZF. ([[thm-compactness-under-continuous-maps]]).

## Proof

**Proof technique:** direct.

1.1 The forward direction is the continuous image theorem and uses surjectivity. [given, F3, F1, F2]

2.1 For the reverse direction, call an open $V\subseteq B$ **adapted** to a given open cover upstairs when $V$ is evenly covered and every sheet above $V$ lies in a single member of that cover. Because each fibre is finite, every point of $B$ lies in some adapted $V$: take an evenly covered neighbourhood, and shrink it finitely many times, once per sheet. Let $\mathcal V$ be the set of **all** adapted open sets, formed outright rather than by selecting one per basepoint, so no choice principle is used. [step 1.1, F1, F3]

3.1 $\mathcal V$ covers $B$, so the finite-subcover clause of [F2] supplies finitely many members of $\mathcal V$ covering $B$; each contributes finitely many sheets, each inside one cover member, so finitely many cover members exhaust the total space. [step 2.1, F1, F2, F3]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
