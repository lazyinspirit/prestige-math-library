---
id: thm-triangular-decomposition-from-a-chosen-positive-root-system
kind: theorem
title: "Triangular decomposition from a chosen positive root system"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-root-space-decomposition-relative-to-a-cartan-subalgebra, prop-root-space-brackets-add-their-roots, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]
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

Let $\Phi^+$ be a positive system in the root set from [[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]] and put

$$\mathfrak n^+:=\bigoplus_{\alpha\in \Phi^+}\mathfrak g_\alpha, \qquad \mathfrak n^-:=\bigoplus_{\alpha\in \Phi^+}\mathfrak g_{-\alpha}.$$

Then

$$\mathfrak g=\mathfrak n^-\oplus \mathfrak h\oplus \mathfrak n^+$$

as a direct sum of vector spaces, $\mathfrak n^\pm$ are Lie subalgebras, and multiplication induces a vector-space isomorphism

$$U(\mathfrak n^-)\otimes U(\mathfrak h)\otimes U(\mathfrak n^+)\xrightarrow{\sim} U(\mathfrak g).$$

## Facts & Assumptions

**Given:** A Cartan subalgebra $\mathfrak h$ of a complex semisimple Lie algebra $\mathfrak g$ and a choice of positive roots $\Phi^+\subseteq \Phi$.

## Proof

**Proof technique:** direct.

1.1 The decomposition in [[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]] groups the positive, zero, and negative root spaces, so it immediately gives the direct-sum decomposition $\mathfrak g=\mathfrak n^-\oplus \mathfrak h\oplus \mathfrak n^+$. [given]

1.2 If $x\in \mathfrak g_\alpha$ and $y\in \mathfrak g_\beta$ with $\alpha,\beta\in \Phi^+$, then [[prop-root-space-brackets-add-their-roots]] shows $[x,y]\in \mathfrak g_{\alpha+\beta}$, which is again positive or zero. Because no sum of positive roots is zero, $\mathfrak n^+$ is a Lie subalgebra, and the same argument gives the same for $\mathfrak n^-$. [algebra]

2.1 Choose ordered bases of $\mathfrak n^-$, $\mathfrak h$, and $\mathfrak n^+$ and concatenate them in that order. The ordered PBW monomials from [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]] are then exactly products of a monomial in $U(\mathfrak n^-)$, one in $U(\mathfrak h)$, and one in $U(\mathfrak n^+)$, so multiplication gives the stated vector-space isomorphism. [step 1.1, step 1.2] ∎
