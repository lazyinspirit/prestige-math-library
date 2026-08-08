## Target item — `cor-homotopy-equivalence-bijection-on-path-components`

Normalized current SHA-256: `46c6558e686089f2d5df400a21b06541a58fc3b10395ed30ac18bd395955ba8e`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-homotopy-equivalence-bijection-on-path-components
kind: corollary
title: "A homotopy equivalence induces a bijection between path components"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-homotopy-equivalence, def-path-connected, thm-composition-respects-homotopy, thm-product-universal-property, thm-continuity-characterisations-top]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

For a space $X$, write $\pi_0(X)$ for its set of path components. If $f:X\to Y$ is a homotopy equivalence, then

$$f_*:\pi_0(X)\longrightarrow\pi_0(Y),\qquad f_*(P_X(x)):=P_Y(f(x)),$$

is a well-defined bijection. A homotopy inverse $g:Y\to X$ induces its inverse $g_*$.

## Facts & Assumptions

**Given:** A homotopy equivalence $f:X\to Y$ with homotopy inverse $g:Y\to X$.

[A1] Path components are the equivalence classes for the relation “joined by a path” ([[def-path-connected]]).

[A2] One has $g\circ f\simeq\operatorname{id}_X$ and $f\circ g\simeq\operatorname{id}_Y$ ([[def-homotopy-equivalence]]).

[L1] Product projections are continuous, and a map into a product is continuous exactly when its components are continuous ([[thm-product-universal-property]]).

[L2] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]]).

[L3] Precomposition and postcomposition preserve homotopies ([[thm-composition-respects-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 If a path $\gamma:I\to X$ joins $x$ to $x'$, then $f\circ\gamma$ is continuous because $(f\circ\gamma)^{-1}[V]=\gamma^{-1}[f^{-1}[V]]$ for every open $V\subseteq Y$; it joins $f(x)$ to $f(x')$. Hence points in one path component of $X$ have images in one path component of $Y$, so $f_*$ is well defined. The same argument defines $g_*$. [A1, L2]

1.2 If continuous maps $u,v:X\to Y$ are homotopic, then $u(x)$ and $v(x)$ lie in the same path component for every $x\in X$: precompose the homotopy by the continuous map from a one-point space selecting $x$, using [L3]; the resulting homotopy of two maps from a point is exactly a path from $u(x)$ to $v(x)$. [L1, L3, A1]

2.1 Apply step 1.2 to $g\circ f\simeq\operatorname{id}_X$. For every $x\in X$, $g(f(x))$ and $x$ lie in the same path component, so $(g_*\circ f_*)(P_X(x))=P_X(x)$. Thus $g_*\circ f_*$ is the identity on $\pi_0(X)$. [step 1.2, A2]

2.2 Applying step 1.2 to $f\circ g\simeq\operatorname{id}_Y$ similarly gives $f_*\circ g_*=\operatorname{id}_{\pi_0(Y)}$. [step 1.2, A2]

3.1 Therefore $f_*$ and $g_*$ are mutually inverse functions, so $f_*$ is a bijection. [step 2.1, step 2.2] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-path-connected",
      "source_section": "Definition",
      "quote": "- A **path in $X$ from $x$ to $y$** is a continuous map $\\gamma : I \\to X$ ([[def-continuous-map-top]]) with $\\gamma(0) = x$ and $\\gamma(1) = y$. Its **image** is $\\gamma[I]$. - $X$ is **path-connected** when for every pair $x, y \\in X$ there is a path in $X$ from $x$ to $y$. A subset $A \\subseteq X$ is a **path-connected subset** when the space $A$ with its subspace topology is path-connected; equivalently, when any two of its points are joined by a path whose image lies in $A$, by the characteristic property of a map into a subspace ([[def-subspace-topology-top]]). - Write $x \\sim y$ when a path in $X$ from $x$ to $y$ exists. The **path component** of $x$ is its equivalence class $$P(x) \\;:=\\; \\{\\, y \\in X : x \\sim y \\,\\} .$$ - The empty space is path-connected, the defining condition quantifying over no pair of points, and so is every one-point space, the constant path joining its point to itself.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "A2",
      "source": "def-homotopy-equivalence",
      "source_section": "Definition",
      "quote": "$$g\\circ f\\simeq\\operatorname{id}_X\\qquad\\text{and}\\qquad f\\circ g\\simeq\\operatorname{id}_Y$$",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-product-universal-property",
      "source_section": "Statement",
      "quote": "Let $(X_i, \\mathcal{T}_i)_{i \\in I}$ be topological spaces and let $P := \\prod_{i \\in I} X_i$ carry the product topology, with projections $\\pi_j$ ([[def-product-topology]]). Then:",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-continuity-characterisations-top",
      "source_section": "Statement",
      "quote": "- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]). - **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \\subseteq Y$. - **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \\subseteq Y$. - **(d)** $f^{-1}[S]$ is open in $X$ for every $S \\in \\mathcal{S}$. - **(e)** $f[\\overline{A}] \\subseteq \\overline{f[A]}$ for every $A \\subseteq X$, closures being taken in $X$ and in $Y$ respectively ([[def-interior-closure-boundary-top]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-composition-respects-homotopy",
      "source_section": "Statement",
      "quote": "Let $f,g:X\\to Y$ be continuous and suppose $f\\simeq_A g$ for a subspace $A\\subseteq X$. 1. If $u:W\\to X$ is continuous, $B\\subseteq W$, and $u[B]\\subseteq A$, then $f\\circ u\\simeq_B g\\circ u$. 2. If $v:Y\\to Z$ is continuous, then $v\\circ f\\simeq_A v\\circ g$.",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "If a path $\\gamma:I\\to X$ joins $x$ to $x'$, then $f\\circ\\gamma$ is continuous because $(f\\circ\\gamma)^{-1}[V]=\\gamma^{-1}[f^{-1}[V]]$ for every open $V\\subseteq Y$; it joins $f(x)$ to $f(x')$. Hence points in one path component of $X$ have images in one path component of $Y$, so $f_*$ is well defined. The same argument defines $g_*$. [A1, L2]",
      "step": "1.1",
      "inputs": [
        "A1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "If continuous maps $u,v:X\\to Y$ are homotopic, then $u(x)$ and $v(x)$ lie in the same path component for every $x\\in X$: precompose the homotopy by the continuous map from a one-point space selecting $x$, using [L3]; the resulting homotopy of two maps from a point is exactly a path from $u(x)$ to $v(x)$. [L1, L3, A1]",
      "step": "1.2",
      "inputs": [
        "L3",
        "L1",
        "A1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Apply step 1.2 to $g\\circ f\\simeq\\operatorname{id}_X$. For every $x\\in X$, $g(f(x))$ and $x$ lie in the same path component, so $(g_*\\circ f_*)(P_X(x))=P_X(x)$. Thus $g_*\\circ f_*$ is the identity on $\\pi_0(X)$. [step 1.2, A2]",
      "step": "2.1",
      "inputs": [
        "1.2",
        "A2"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Applying step 1.2 to $f\\circ g\\simeq\\operatorname{id}_Y$ similarly gives $f_*\\circ g_*=\\operatorname{id}_{\\pi_0(Y)}$. [step 1.2, A2]",
      "step": "2.2",
      "inputs": [
        "1.2",
        "A2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Therefore $f_*$ and $g_*$ are mutually inverse functions, so $f_*$ is a bijection. [step 2.1, step 2.2] ∎",
      "step": "3.1",
      "inputs": [
        "2.1",
        "2.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the empty-domain or empty-space instance is vacuous or formula-defined and selects no point"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, norm, or scalar parameter has a separate zero case"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, or index has a separate one case"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "the statement has no separate coincident-map, constant-map, singleton, or collapsed-parameter branch"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.2 restricts a homotopy at a fixed point to a path with the required endpoints"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.2 fixes an already quantified point x; it makes no simultaneous choice over components"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cor-homotopy-equivalence-bijection-on-path-components",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-homotopy-equivalence",
    "declared_target": "def-homotopy-equivalence",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-homotopy-equivalence-bijection-on-path-components",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-path-connected",
    "declared_target": "def-path-connected",
    "target_statement_provenance": "ai-altered",
    "targetPage": "connectedness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-homotopy-equivalence-bijection-on-path-components",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "thm-composition-respects-homotopy",
    "declared_target": "thm-composition-respects-homotopy",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-homotopy-equivalence-bijection-on-path-components",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "thm-product-universal-property",
    "declared_target": "thm-product-universal-property",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-homotopy-equivalence-bijection-on-path-components",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "thm-continuity-characterisations-top",
    "declared_target": "thm-continuity-characterisations-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (5)

### `def-homotopy-equivalence`

````markdown
---
id: def-homotopy-equivalence
kind: definition
title: "Homotopy equivalences, homotopy inverses and spaces of the same homotopy type"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homotopy-relative-and-path-homotopy, def-continuous-map-top]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Definition

Let $X,Y$ be topological spaces. A continuous map $f:X\to Y$ is a **homotopy equivalence** if there is a continuous map $g:Y\to X$ such that

$$g\circ f\simeq\operatorname{id}_X\qquad\text{and}\qquad f\circ g\simeq\operatorname{id}_Y$$

in the sense of [[def-homotopy-relative-and-path-homotopy]]. Such a $g$ is a **homotopy inverse** of $f$.

The spaces $X$ and $Y$ have the **same homotopy type**, or are **homotopy equivalent**, written $X\simeq Y$, when a homotopy equivalence $X\to Y$ exists.

The equations required of an ordinary inverse have been weakened to homotopies. Neither composite need equal the corresponding identity map, and a homotopy equivalence need not be bijective.
````

### `def-path-connected`

````markdown
---
id: def-path-connected
kind: definition
title: "Paths, path-connected spaces and path components"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-connected-space, def-continuous-map-top, def-interval, def-subspace-topology-top,
       lem-real-line-is-a-metric-space, def-metric-topology, def-metric-ball,
       def-metrizable-space, lem-continuity-is-local-and-pastes, def-topological-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
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
    - title: "Path (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Path_(topology)"
    - title: "Paul Bankston, Metric Topology: A First Course"
      url: "https://www.mscsnet.mu.edu/~paul/Paper/4450102text.pdf"
pipeline_run: null
---

## Definition

Throughout, $I := [0,1] = \{\, t \in \mathbb{R} : 0 \le t \le 1 \,\}$
([[def-interval]]) carries the subspace topology inherited from $\mathbb{R}$ with
its usual topology ([[def-subspace-topology-top]],
[[lem-real-line-is-a-metric-space]], [[def-metric-topology]],
[[def-metrizable-space]]). It is called the **unit interval**.

Let $X$ be a topological space ([[def-topological-space]]) and let
$x, y \in X$.

- A **path in $X$ from $x$ to $y$** is a continuous map $\gamma : I \to X$
  ([[def-continuous-map-top]]) with $\gamma(0) = x$ and $\gamma(1) = y$. Its
  **image** is $\gamma[I]$.
- $X$ is **path-connected** when for every pair $x, y \in X$ there is a path in
  $X$ from $x$ to $y$. A subset $A \subseteq X$ is a **path-connected subset**
  when the space $A$ with its subspace topology is path-connected; equivalently,
  when any two of its points are joined by a path whose image lies in $A$, by the
  characteristic property of a map into a subspace
  ([[def-subspace-topology-top]]).
- Write $x \sim y$ when a path in $X$ from $x$ to $y$ exists. The **path
  component** of $x$ is its equivalence class
  $$P(x) \;:=\; \{\, y \in X : x \sim y \,\} .$$
- The empty space is path-connected, the defining condition quantifying over no
  pair of points, and so is every one-point space, the constant path joining its
  point to itself.

**$\sim$ is an equivalence relation on $X$, and the obligation is discharged
here**, so that "equivalence class" above denotes.

*Reflexive.* The constant map $\gamma(t) = x$ is continuous, every preimage being
$\varnothing$ or $I$ ([[def-continuous-map-top]]), and joins $x$ to $x$.

*Symmetric.* If $\gamma$ joins $x$ to $y$, put $\bar\gamma(t) := \gamma(1-t)$.
The map $r : I \to I$, $r(t) = 1 - t$, is continuous: for $s, t \in I$ one has
$|r(s) - r(t)| = |s - t|$, so a ball of radius $\varepsilon$ around $r(t)$ pulls
back to contain the ball of radius $\varepsilon$ around $t$
([[def-metric-ball]], [[def-metrizable-space]]). Hence
$\bar\gamma = \gamma \circ r$ is continuous ([[lem-continuity-is-local-and-pastes]],
claim 1) and joins $y$ to $x$.

*Transitive.* Let $\gamma_1$ join $x$ to $y$ and $\gamma_2$ join $y$ to $z$.
Define $\delta : I \to X$ by

$$\delta(t) \;:=\; \begin{cases} \gamma_1(2t), & 0 \le t \le 1/2, \\ \gamma_2(2t - 1), & 1/2 \le t \le 1. \end{cases}$$

The two clauses agree at $t = 1/2$, both giving $\gamma_1(1) = y = \gamma_2(0)$,
so $\delta$ is a well-defined function. The sets $[0,1/2]$ and $[1/2,1]$ are
closed in $I$ and cover it, and there are **two** of them, so the finite closed
form of the pasting lemma applies ([[lem-continuity-is-local-and-pastes]],
claim 3). On $[0,1/2]$ the map $\delta$ is $\gamma_1 \circ a_1$ with
$a_1(t) = 2t$, and on $[1/2,1]$ it is $\gamma_2 \circ a_2$ with
$a_2(t) = 2t - 1$; each $a_k$ is continuous into $I$, since
$|a_k(s) - a_k(t)| = 2|s-t|$, so the ball of radius $\varepsilon/2$ around $t$
maps into the ball of radius $\varepsilon$ around $a_k(t)$
([[def-metric-ball]], [[def-metrizable-space]],
[[def-subspace-topology-top]]). So both restrictions are continuous by
[[lem-continuity-is-local-and-pastes]] claim 1, hence $\delta$ is continuous, and
it joins $x$ to $z$.

**The path components partition $X$**, being the classes of an equivalence
relation, and each is a path-connected subset of $X$: two points of $P(x)$ are
joined to $x$, hence to each other by the transitivity construction above, and
the resulting path has image inside $P(x)$: if $\delta$ is a path from $x$ and
$s \in I$, then $t \mapsto \delta(st)$ is a path from $x$ to $\delta(s)$,
continuous because $t \mapsto st$ satisfies $|st_1 - st_2| \le |t_1 - t_2|$ and
is therefore continuous into $I$ by the ball criterion used above, so every point
of the image is itself joined to $x$.

## Remarks

- **Why the unit interval and not an arbitrary closed bounded interval.** Any
  $[a,b]$ with $a < b$ would give the same relation, since $t \mapsto a + t(b-a)$
  carries $[0,1]$ onto $[a,b]$ and is continuous with continuous inverse. Fixing
  $[0,1]$ removes a parameter from every statement below and costs nothing.

- **A path is a map, not a subset.** The image $\gamma[I]$ is a subset of $X$,
  but the path is the map: two different paths may have the same image, and the
  concatenation above depends on the maps rather than on their images. Nothing
  in this library identifies a path with its image.

- **Path components are not asserted to be closed, or open, or to coincide with
  components.** Each of those is false in general, and each is taken up
  separately on this page. What is proved here is only that they partition $X$
  and that each is path-connected.

- **The finiteness in the pasting lemma is what makes concatenation legal.** The
  cover $\{[0,1/2], [1/2,1]\}$ has two members. An infinite closed cover would
  not do, and the standing warning is
  [[cex-pasting-fails-for-an-infinite-closed-cover]]; this is worth naming here
  because the temptation to concatenate infinitely many paths is exactly what
  fails for the zigzag curve later on this page.
````

### `thm-composition-respects-homotopy`

````markdown
---
id: thm-composition-respects-homotopy
kind: theorem
title: "Precomposition and postcomposition by continuous maps preserve homotopies, including their relative form"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-homotopy-relative-and-path-homotopy, thm-product-universal-property, thm-continuity-characterisations-top]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Algebraic Topology lecture notes (UC Riverside)"
      url: "https://math.ucr.edu/~jbergner/SPWM09.pdf"
pipeline_run: null
---

## Statement

Let $f,g:X\to Y$ be continuous and suppose $f\simeq_A g$ for a subspace $A\subseteq X$.

1. If $u:W\to X$ is continuous, $B\subseteq W$, and $u[B]\subseteq A$, then $f\circ u\simeq_B g\circ u$.
2. If $v:Y\to Z$ is continuous, then $v\circ f\simeq_A v\circ g$.

## Facts & Assumptions

**Given:** A homotopy $H:X\times I\to Y$ from $f$ to $g$ rel $A$, a continuous $u:W\to X$ with $u[B]\subseteq A$, and a continuous $v:Y\to Z$.

[A1] The endpoint and relative conditions are those of [[def-homotopy-relative-and-path-homotopy]].

[L1] Product projections are continuous, and a map into a product is continuous exactly when its components are continuous ([[thm-product-universal-property]]).

[L2] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], condition (b)).

## Proof

**Proof technique:** direct.

1.1 Define $U:W\times I\to X\times I$ by $U(w,t)=(u(w),t)$. Its components are $u$ after the first projection and the second projection, so $U$ is continuous by [L1]. [L1]

1.2 The composite $v\circ H:X\times I\to Z$ is continuous by the same preimage calculation, and its endpoints are $v\circ f$ and $v\circ g$; for $a\in A$ it has the fixed value $v(f(a))=v(g(a))$. Thus it is a homotopy from $v\circ f$ to $v\circ g$ rel $A$. [A1, L2]

2.1 The composite $H\circ U$ is continuous: for every open $V\subseteq Y$, $(H\circ U)^{-1}[V]=U^{-1}[H^{-1}[V]]$ is open by [L2]. Its endpoints are $(f\circ u)(w)$ and $(g\circ u)(w)$; if $b\in B$, then $u(b)\in A$, so $(H\circ U)(b,t)=f(u(b))=g(u(b))$. Thus it is a homotopy from $f\circ u$ to $g\circ u$ rel $B$. [step 1.1, A1, L2]

3.1 Steps 2.1 and 1.2 prove the two claims. [step 2.1, step 1.2] ∎
````

### `thm-continuity-characterisations-top`

````markdown
---
id: thm-continuity-characterisations-top
kind: theorem
title: "For a map of spaces the following agree: continuity at every point, preimages of open sets open, preimages of closed sets closed, preimages of subbasic open sets open, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuous-map-top, thm-closure-characterisation-top, def-topology-basis-subbasis, thm-basis-criterion, def-interior-closure-boundary-top, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "five equivalent forms of continuity"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces, let
$f : X \to Y$ be a function, and let $\mathcal{S}$ be a subbasis for
$\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions
are equivalent.

- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$.
- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \subseteq Y$.
- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \in \mathcal{S}$.
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$,
  closures being taken in $X$ and in $Y$ respectively
  ([[def-interior-closure-boundary-top]]).

Condition (d) is what makes continuity checkable against a generating family
rather than against every open set, and it holds for a *basis* as well, a basis
being in particular a subbasis for the topology it generates.

## Facts & Assumptions

**Given:** Topological spaces $(X,\mathcal{T}_X)$ and $(Y,\mathcal{T}_Y)$, a function $f : X \to Y$, a subbasis $\mathcal{S}$ for $\mathcal{T}_Y$, subsets $A \subseteq X$ and $V, F \subseteq Y$. Preimages satisfy $f^{-1}[Y \setminus W] = X \setminus f^{-1}[W]$, $f^{-1}[\bigcup_i W_i] = \bigcup_i f^{-1}[W_i]$ and $f^{-1}[\bigcap_i W_i] = \bigcap_i f^{-1}[W_i]$ for every family, with $f^{-1}[Y] = X$ for the empty intersection.

[A1] $f$ is continuous at $x$ when for every open $V \ni f(x)$ there is an open $U \ni x$ with $f[U] \subseteq V$ ([[def-continuous-map-top]]).

[A2] A set is closed exactly when its complement is open; a set is open exactly when it is a union of open sets containing each of its points ([[def-topological-space]]).

[L1] The topology generated by $\mathcal{S}$ has as a basis the family $\mathcal{B}_{\mathcal{S}}$ of intersections of finitely many members of $\mathcal{S}$, the empty intersection being $Y$; every open set is a union of members of $\mathcal{B}_{\mathcal{S}}$ ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[L2] $x \in \overline{A}$ if and only if every open set containing $x$ meets $A$ ([[thm-closure-characterisation-top]], clause (c)).

[L3] $\overline{A}$ is the smallest closed superset of $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b): let $V \subseteq Y$ be open and let $x \in f^{-1}[V]$, so $f(x) \in V$; continuity at $x$ gives an open $U \ni x$ with $f[U] \subseteq V$, that is $U \subseteq f^{-1}[V]$. As $x$ was arbitrary, $f^{-1}[V]$ is a union of open sets, hence open. [A1, A2]

1.2 (b) implies (a): let $x \in X$ and let $V$ be open with $f(x) \in V$; then $U := f^{-1}[V]$ is open, contains $x$, and satisfies $f[U] \subseteq V$. [A1]

1.3 (b) and (c) are equivalent: $F \subseteq Y$ is closed exactly when $Y \setminus F$ is open, and $f^{-1}[Y \setminus F] = X \setminus f^{-1}[F]$, so $f^{-1}[F]$ is closed exactly when $f^{-1}[Y \setminus F]$ is open; as $F$ ranges over the closed sets, $Y \setminus F$ ranges over the open sets. [given, A2]

1.4 (b) implies (d): every $S \in \mathcal{S}$ is open, $\mathcal{S}$ being contained in the topology it generates. [L1]

1.5 (d) implies (b): let $V \subseteq Y$ be open; by [L1] $V$ is a union of sets of the form $S_1 \cap \dots \cap S_n$ with $n \ge 0$ and $S_i \in \mathcal{S}$, and $f^{-1}$ turns unions into unions and intersections into intersections, with $f^{-1}[Y] = X$ for $n = 0$; so $f^{-1}[V]$ is a union of finite intersections of the open sets $f^{-1}[S_i]$ together with $X$, hence open. [given, L1, A2]

1.6 (e) implies (c): let $F \subseteq Y$ be closed and put $A := f^{-1}[F]$; then $f[A] \subseteq F$, so $f[\overline{A}] \subseteq \overline{f[A]} \subseteq \overline{F} = F$ by (e), monotonicity of the closure and [L3]; hence $\overline{A} \subseteq f^{-1}[F] = A$, and with $A \subseteq \overline{A}$ this gives $A = \overline{A}$, so $A$ is closed. [L3]

2.1 (b) implies (e): let $A \subseteq X$ and $x \in \overline{A}$, and let $V$ be open with $f(x) \in V$; then $f^{-1}[V]$ is open and contains $x$, so it meets $A$ by [L2], say at $a$; then $f(a) \in V \cap f[A]$, so $V$ meets $f[A]$. As $V$ was arbitrary, $f(x) \in \overline{f[A]}$ by [L2]. [step 1.1, L2]

3.1 Steps 1.1 and 1.2 make (a) and (b) equivalent; step 1.3 makes (b) and (c) equivalent; steps 1.4 and 1.5 make (b) and (d) equivalent; step 2.1 gives (b) implies (e) and step 1.6 gives (e) implies (c), which closes the cycle through (c) and (b). Hence all five conditions are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 1.6] ∎

## Remarks

- **Only (a) is pointwise.** Conditions (b) to (e) are global, and none of them has a pointwise version that is equivalent to continuity at a single point: the preimage of an open set containing $f(x)$ can fail to be open while still being a neighbourhood of $x$, which is exactly what continuity at $x$ asserts.

- **The inclusion in (e) may be strict for a continuous map.** For the inclusion of $(0,1)$ into $\mathbb{R}$ and $A = (0,1)$, the image of the closure is $(0,1)$ while the closure of the image is $[0,1]$. Equality for all $A$ is a strictly stronger condition, equivalent to $f$ being a closed map, and closed maps are defined three items below. Note that no map into a **discrete** space can witness strictness: there every subset is closed, so $f[\overline{A}] = f[A] = \overline{f[A]}$ always.

- **What the theorem does not say.** It says nothing about images of open sets: a continuous map need not carry open sets to open sets, and the failure is exactly what separates a continuous bijection from a homeomorphism. That separation is recorded on this page as a false statement with an explicit two-point witness.
````

### `thm-product-universal-property`

````markdown
---
id: thm-product-universal-property
kind: theorem
title: "A map into a product is continuous iff each of its components is; the projections are continuous and open; and each projection is surjective when every factor is nonempty, which for an infinite index set uses the Axiom of Choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-product-topology, thm-initial-and-final-characteristic-properties,
       def-initial-and-final-topology, def-continuous-map-top,
       def-homeomorphism-and-open-maps, def-axiom-of-choice, def-choice-function,
       lem-finite-choice, def-topological-space, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: true
short: "universal property of the product; projections are open"
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
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X_i, \mathcal{T}_i)_{i \in I}$ be topological spaces and let
$P := \prod_{i \in I} X_i$ carry the product topology, with projections $\pi_j$
([[def-product-topology]]). Then:

1. **The projections are continuous**, and the product topology is the coarsest
   topology on $P$ making all of them continuous.
2. **Characteristic property.** For every space $Z$ and every function
   $h : Z \to P$,
   $$h \text{ is continuous } \iff \pi_i \circ h \text{ is continuous for every } i \in I .$$
   The functions $\pi_i \circ h$ are the **components** of $h$, and every family
   of functions $h_i : Z \to X_i$ arises from exactly one $h$, namely
   $h(z)(i) := h_i(z)$.
3. **The projections are open maps** ([[def-homeomorphism-and-open-maps]]), for
   the product topology and for the box topology alike. They need not be closed;
   that failure is recorded on this page as a false statement.
4. **Surjectivity.** If every $X_i$ is nonempty then every $\pi_j$ is surjective.
   For $I$ a natural number this is a theorem of ZF ([[lem-finite-choice]]); for
   an arbitrary $I$ it is the Axiom of Choice ([[def-axiom-of-choice]]), and this
   is the only place in the item where a choice principle is used.

## Facts & Assumptions

**Given:** Topological spaces $(X_i,\mathcal{T}_i)_{i \in I}$, the product $P = \prod_{i \in I} X_i$ with the product topology and the projections $\pi_j(x) = x_j$, a space $Z$ and a function $h : Z \to P$, and an index $j \in I$.

[A1] The product topology on $P$ is the initial topology of $(\pi_i)_{i \in I}$, and a basis for it is the family of boxes $\prod_i U_i$ with every $U_i$ open and $U_i = X_i$ for all but finitely many $i$; a basis for the box topology is the family of all boxes $\prod_i U_i$ with every $U_i$ open ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A2] $f$ is an open map when $f[U]$ is open in the target for every open $U$ in the source ([[def-homeomorphism-and-open-maps]]).

[L1] For a topology given as an initial topology of a family $(f_i)$: each $f_i$ is continuous, the topology is the coarsest with that property, and a map $h$ into it is continuous exactly when every $f_i \circ h$ is ([[thm-initial-and-final-characteristic-properties]], claims 1 and 2; [[def-initial-and-final-topology]], [[def-continuous-map-top]]).

[L2] If $F$ is a function with domain a natural number $n$ whose values are nonempty sets, then the family of its values has a choice function ([[lem-finite-choice]], [[def-choice-function]]).

[L3] If every member of a family of sets is nonempty then the product of the family is nonempty; this is the Axiom of Choice ([[def-axiom-of-choice]], [[def-choice-function]]).

[L4] The image of a union is the union of the images, and an arbitrary union of open sets is open ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 By [A1] the product topology is an initial topology, so [L1] gives claim 1 and claim 2 at once, the defining family being $(\pi_i)_{i \in I}$. [A1, L1]

1.2 For a family of functions $h_i : Z \to X_i$ the assignment $h(z)(i) := h_i(z)$ defines a function $Z \to P$, since $h(z)$ has domain $I$ and $h(z)(i) = h_i(z) \in X_i$; it satisfies $\pi_i \circ h = h_i$, and any $h'$ with $\pi_i \circ h' = h_i$ for every $i$ satisfies $h'(z)(i) = h_i(z) = h(z)(i)$ for all $z$ and $i$, hence $h' = h$. [given]

1.3 Let $B = \prod_i U_i$ be a box with every $U_i$ open. If $B = \varnothing$ then $\pi_j[B] = \varnothing$. If $B \ne \varnothing$, fix $b \in B$; then $\pi_j[B] = U_j$, since $\pi_j[B] \subseteq U_j$ by definition, and for $u \in U_j$ the function $y$ with $y_j := u$ and $y_i := b_i$ for $i \ne j$ lies in $B$ and has $\pi_j(y) = u$. [A1, choose]

1.4 Assume every $X_i$ is nonempty and $I$ is a natural number $n$. By [L2] applied to $i \mapsto X_i$ there is a choice function $g$ for the family of values, and $x(i) := g(X_i)$ defines a point of $P$; so $P \ne \varnothing$. [L2]

1.5 Assume every $X_i$ is nonempty and $I$ is arbitrary. By [L3] the product $P$ is nonempty. [L3]

2.1 Both the box topology and the product topology have a basis consisting of boxes, by [A1], and the image of a union of basic sets is the union of their images; so by step 1.3 the image under $\pi_j$ of any open set of either topology is a union of sets each of which is $\varnothing$ or an open $U_j \subseteq X_j$, hence open. This is claim 3. [step 1.3, A1, A2, L4]

2.2 Assume every $X_i$ is nonempty and let $t \in X_j$. By step 1.4 when $I$ is a natural number, and by step 1.5 in general, there is a point $p \in P$; the function $y$ with $y_j := t$ and $y_i := p_i$ for $i \ne j$ then lies in $P$ and satisfies $\pi_j(y) = t$. So $\pi_j$ is surjective, which is claim 4. [step 1.4, step 1.5]

3.1 Step 1.1 gives claims 1 and 2, step 1.2 gives the bijection between maps into $P$ and families of component maps, step 2.1 gives claim 3 and step 2.2 gives claim 4. [step 1.1, step 1.2, step 2.1, step 2.2] ∎

## Remarks

- **Exactly where choice is spent, and where it is not.** Openness of the
  projections (claim 3) is choice free: step 1.3 uses a *single* point of the box
  in question, which is given by the assumption that the box is nonempty, and
  builds the required preimage from it by changing one coordinate. Surjectivity
  (claim 4) is different, because there the point has to be produced from nothing
  but nonemptiness of the factors, and for an infinite index set that is the
  Axiom of Choice itself.

- **The characteristic property is what makes the product topology the right
  one.** The box topology has no analogue of claim 2: a map into a box-topologised
  product may have all components continuous and fail to be continuous, and the
  companion page exhibits the diagonal of $\mathbb{R}^{\mathbb{N}}$ doing exactly
  that.

- **Openness does not survive to closedness.** A projection is always open and is
  in general not closed, and the standard witness, the hyperbola in
  $\mathbb{R}^2$, is worked in the false statement on this page. There is no
  asymmetry of taste here: images of open boxes are computed coordinatewise,
  while a closed set of the product need not be a union of closed boxes at all.
````

