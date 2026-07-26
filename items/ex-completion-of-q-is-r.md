---
id: ex-completion-of-q-is-r
kind: example
title: "The completion of $\\mathbb{Q}$ under the usual metric is $\\mathbb{R}$"
status: draft
origin: session
deps: [thm-metric-completion-exists, thm-metric-completion-unique, def-metric-completion,
       def-rationals, lem-rat-embeds-dense, lem-real-line-is-a-metric-space,
       def-isometry-and-metric-embedding, thm-euclidean-space-complete,
       def-metric-interior-closure-boundary, def-metric-ball, def-interval,
       def-complete-metric-space, def-metric-space]
justified_by: []
aliases: []
landmark: true
short: "completion of $\\mathbb{Q}$ is $\\mathbb{R}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Regard $\mathbb{Q}$ ([[def-rationals]]) as the subset $\widehat{\mathbb{Q}}$ of
$\mathbb{R}$ that is the image of the canonical embedding $q \mapsto \hat q$
([[lem-rat-embeds-dense]]), carrying the subspace metric
$d_{\mathbb{Q}}(p,q) = |\hat p - \hat q|$ inherited from the usual metric of
$\mathbb{R}$ ([[lem-real-line-is-a-metric-space]],
[[def-isometry-and-metric-embedding]]). Let
$\iota : \mathbb{Q} \to \mathbb{R}$ be that embedding.

**Then $\big((\mathbb{R}, d_{\mathbb{R}}), \iota\big)$ is a completion of
$(\mathbb{Q}, d_{\mathbb{Q}})$** ([[def-metric-completion]]). Consequently, by
uniqueness of completions ([[thm-metric-completion-unique]]), for every
completion $\big((\widehat{Y}, \widehat{d}), j\big)$ of $(\mathbb{Q},
d_{\mathbb{Q}})$ there is exactly one continuous
$\varphi : \mathbb{R} \to \widehat{Y}$ with $\varphi \circ \iota = j$, and it is
an isometry. In this sense $\mathbb{R}$ **is** the completion of $\mathbb{Q}$.

## Facts & Assumptions

**Given:** $\mathbb{Q}$ with the metric $d_{\mathbb{Q}}$ inherited from $\mathbb{R}$ through $\iota : q \mapsto \hat q$; a real $x$; a real $r > 0$.

[L1] $q \mapsto \hat q$ is an injective, order-preserving embedding of ordered fields, and strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]).

[L2] The absolute value makes $\mathbb{R}$ a metric space, and the open ball $B(x,r)$ is the interval $(x-r, x+r)$ ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-interval]]).

[L3] The restriction of a metric to a subset is a metric, and the inclusion of a subset is an isometric embedding ([[def-isometry-and-metric-embedding]], [[def-metric-space]]).

[L4] $(\mathbb{R}, d_{\mathbb{R}})$ is complete ([[thm-euclidean-space-complete]], [[def-complete-metric-space]]).

[L5] Density: $A$ is dense in $X$ when every ball around every point of $X$ meets $A$ ([[def-metric-interior-closure-boundary]]).

[L6] A completion is a complete space together with an isometric embedding with dense image, and two completions are related by a unique compatible isometry ([[def-metric-completion]], [[thm-metric-completion-unique]]).

## Verification

**Proof technique:** direct.

1.1 $d_{\mathbb{Q}}$ is a metric on $\mathbb{Q}$ and $\iota$ is an isometric embedding into $(\mathbb{R}, d_{\mathbb{R}})$: by construction $d_{\mathbb{R}}(\iota(p),\iota(q)) = |\hat p - \hat q| = d_{\mathbb{Q}}(p,q)$, and $\iota$ is injective. [L1, L2, L3]

1.2 $(\mathbb{R}, d_{\mathbb{R}})$ is complete. [L4]

1.3 $\iota[\mathbb{Q}]$ is dense in $\mathbb{R}$: for a real $x$ and a real $r > 0$ the ball $B(x,r)$ is the interval $(x-r,x+r)$, which is nonempty and has $x - r < x + r$, so it contains a rational; hence every ball around every real meets $\iota[\mathbb{Q}]$. [L1, L2, L5]

2.1 So the complete space $(\mathbb{R}, d_{\mathbb{R}})$, together with the isometric embedding $\iota$ whose image is dense, is a completion of $(\mathbb{Q}, d_{\mathbb{Q}})$. [step 1.1, step 1.2, step 1.3, L6]

3.1 By uniqueness of completions, any other completion $\big((\widehat{Y},\widehat{d}), j\big)$ of $(\mathbb{Q}, d_{\mathbb{Q}})$ receives exactly one continuous $\varphi : \mathbb{R} \to \widehat{Y}$ with $\varphi \circ \iota = j$, and that $\varphi$ is an isometry. [step 2.1, L6] ∎

## Remarks

- **This is the metric statement of what the construction pages did by hand.** This library builds $\mathbb{R}$ out of Cauchy sequences of rationals on its own page, and the general construction of [[thm-metric-completion-exists]] follows the same plan for an arbitrary metric space: classes of Cauchy sequences, with the distance read off as a limit. The present item is the observation that, run on $\mathbb{Q}$, that plan reaches a space isometric to the $\mathbb{R}$ already in hand, and that no separate verification of "which complete space it is" is needed once uniqueness is available.
- **Density is the whole of the third condition, and it is exactly the Archimedean fact.** That every interval of positive length contains a rational is [[lem-rat-embeds-dense]]; without it $\mathbb{Q}$ would sit inside $\mathbb{R}$ as a complete-looking but small subspace, and $\mathbb{R}$ would not be a completion of it but merely a complete space containing it.
- **The metric is the one written above and no other.** Completions are taken with respect to a named metric ([[def-metric-completion]]), and a different metric on $\mathbb{Q}$ would in general have a different completion; nothing here is a statement about $\mathbb{Q}$ as a bare field or as a bare topological space.
