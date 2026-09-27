---
id: prop-opposite-root-spaces-bracket-to-the-killing-dual-line
kind: proposition
title: "Opposite root spaces bracket to the Killing-dual line"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-root-space-decomposition-relative-to-a-cartan-subalgebra, prop-root-space-brackets-add-their-roots, prop-killing-form-pairs-only-opposite-root-spaces, def-killing-dual-vector-attached-to-a-root, lem-finite-semisimple-cartan-root-and-string-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-receipts.jsonl (prop-opposite-root-spaces-bracket-to-the-killing-dual-line). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra, let $\mathfrak h$ be a Cartan subalgebra, let $\alpha$
be a root, and let $x\in \mathfrak g_\alpha$, $y\in \mathfrak g_{-\alpha}$. Then

$$[x,y]=B(x,y)H_\alpha,$$

where $H_\alpha$ is the vector from [[def-killing-dual-vector-attached-to-a-root]]. In particular, $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]$ is the line $\mathbb C H_\alpha$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, a root $\alpha$, vectors $x\in \mathfrak g_\alpha$, $y\in \mathfrak g_{-\alpha}$, and the Killing-dual vector $H_\alpha$.

[L0] Under Choice, [[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]] identifies the supplied Cartan subalgebra as maximal toral and provides its finite root-space decomposition.

[L1] For this maximal-toral subalgebra, [[lem-finite-semisimple-cartan-root-and-string-structure]] proves that the Killing pairing between opposite root spaces is perfect, the Cartan restriction is nondegenerate, and $\alpha$ is nonzero.

## Proof

**Proof technique:** direct.

1.1 By [L0] and [[prop-root-space-brackets-add-their-roots]], the bracket $[x,y]$ lies in $\mathfrak g_0=\mathfrak h$. For every $h\in \mathfrak h$, invariance of the Killing form gives $B([x,y],h)=B(x,[y,h])=\alpha(h)B(x,y)=B(x,y)B(H_\alpha,h)$. [L0, given, algebra]

2.1 Because both $[x,y]$ and $B(x,y)H_\alpha$ lie in $\mathfrak h$ and have the same Killing pairings with every $h\in \mathfrak h$, nondegeneracy of the restriction from [[prop-killing-form-pairs-only-opposite-root-spaces]] forces $[x,y]=B(x,y)H_\alpha$. [step 1.1]

3.1 The root space $\mathfrak g_\alpha$ is nonzero by the definition of a root. Choose $0\ne x\in\mathfrak g_\alpha$; the perfect opposite-root pairing in [L1] supplies $y\in\mathfrak g_{-\alpha}$ with $B(x,y)\ne0$. Also $H_\alpha\ne0$, for otherwise its defining equation would make the nonzero root $\alpha$ the zero functional. Thus step 2.1 gives a nonzero scalar multiple of $H_\alpha$ in the bracket image, while every bracket lies on that line. Hence $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]=\mathbb C H_\alpha$. [L1, step 2.1] ∎
