---
id: prop-opposite-root-spaces-bracket-to-the-killing-dual-line
kind: proposition
title: "Opposite root spaces bracket to the Killing-dual line"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-root-space-decomposition-relative-to-a-cartan-subalgebra, prop-root-space-brackets-add-their-roots, prop-killing-form-pairs-only-opposite-root-spaces, def-killing-dual-vector-attached-to-a-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

Let $\alpha$ be a root and let $x\in \mathfrak g_\alpha$, $y\in \mathfrak g_{-\alpha}$. Then

$$[x,y]=B(x,y)H_\alpha,$$

where $H_\alpha$ is the vector from [[def-killing-dual-vector-attached-to-a-root]]. In particular, $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]$ is the line $\mathbb C H_\alpha$.

## Facts & Assumptions

**Given:** A root $\alpha$, vectors $x\in \mathfrak g_\alpha$, $y\in \mathfrak g_{-\alpha}$, and the Killing-dual vector $H_\alpha$.

## Proof

**Proof technique:** direct.

1.1 By [[prop-root-space-brackets-add-their-roots]], the bracket $[x,y]$ lies in $\mathfrak g_0=\mathfrak h$. For every $h\in \mathfrak h$, invariance of the Killing form gives $B([x,y],h)=B(x,[y,h])=\alpha(h)B(x,y)=B(x,y)B(H_\alpha,h)$. [given, algebra]

2.1 Because both $[x,y]$ and $B(x,y)H_\alpha$ lie in $\mathfrak h$ and have the same Killing pairings with every $h\in \mathfrak h$, nondegeneracy of the restriction from [[prop-killing-form-pairs-only-opposite-root-spaces]] forces $[x,y]=B(x,y)H_\alpha$. [step 1.1]

3.1 Choosing $x$ and $y$ with $B(x,y)\ne 0$ shows that the image of $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]$ is exactly the line $\mathbb C H_\alpha$. [step 2.1] ∎
