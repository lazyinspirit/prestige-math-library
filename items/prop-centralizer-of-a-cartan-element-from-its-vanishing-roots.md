---
id: prop-centralizer-of-a-cartan-element-from-its-vanishing-roots
kind: proposition
title: "The centralizer of a Cartan element from its vanishing roots"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-root-space-decomposition-relative-to-a-cartan-subalgebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

Let $\mathfrak g$ be a complex semisimple Lie algebra and let
$\mathfrak g=\mathfrak h\oplus \bigoplus_{\alpha\in \Phi}\mathfrak g_\alpha$
be its root-space decomposition relative to a Cartan subalgebra $\mathfrak h$.
For $h\in \mathfrak h$,

$$C_{\mathfrak g}(h)=\mathfrak h\oplus \bigoplus_{\alpha(h)=0} \mathfrak g_\alpha.$$

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra $\mathfrak g$, an element
$h\in \mathfrak h$ in a Cartan subalgebra, and the root-space decomposition of
$\mathfrak g$ relative to $\mathfrak h$.

## Proof

**Proof technique:** direct.

1.1 Write $x=x_0+\sum_{\alpha}x_\alpha$ according to [[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]], with $x_0\in \mathfrak h$ and $x_\alpha\in \mathfrak g_\alpha$. Then $[h,x]=\sum_{\alpha}\alpha(h)x_\alpha$. [given, algebra]

2.1 The directness of the root-space decomposition implies that $[h,x]=0$ holds exactly when $x_\alpha=0$ for every root with $\alpha(h)\ne 0$. Thus the centralizer consists precisely of $\mathfrak h$ together with the root spaces on which $h$ vanishes. [step 1.1] ∎
