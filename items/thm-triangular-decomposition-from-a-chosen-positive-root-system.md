---
id: thm-triangular-decomposition-from-a-chosen-positive-root-system
kind: theorem
title: "Triangular decomposition from a chosen positive root system"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-root-space-decomposition-relative-to-a-cartan-subalgebra, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (thm-triangular-decomposition-from-a-chosen-positive-root-system). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Let $\Phi^+$ be a positive system in the root set from [[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]] and put

$$\mathfrak n^+:=\bigoplus_{\alpha\in \Phi^+}\mathfrak g_\alpha, \qquad \mathfrak n^-:=\bigoplus_{\alpha\in \Phi^+}\mathfrak g_{-\alpha}.$$

Then

$$\mathfrak g=\mathfrak n^-\oplus \mathfrak h\oplus \mathfrak n^+$$

as a direct sum of vector spaces, $\mathfrak n^\pm$ are Lie subalgebras, and multiplication induces a vector-space isomorphism

$$U(\mathfrak n^-)\otimes U(\mathfrak h)\otimes U(\mathfrak n^+)\xrightarrow{\sim} U(\mathfrak g).$$

## Facts & Assumptions

**Given:** A Cartan subalgebra $\mathfrak h$ of a complex semisimple Lie algebra $\mathfrak g$, a supplied root-space decomposition $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ as in the Statement, and a choice of positive roots $\Phi^+\subseteq\Phi$. The assertion is conditional on this decomposition; it does not construct one for an arbitrary Cartan subalgebra.

## Proof

**Proof technique:** direct.

1.1 Group the positive, zero, and negative root spaces in the supplied decomposition. This gives the direct sum $\mathfrak g=\mathfrak n^-\oplus\mathfrak h\oplus\mathfrak n^+$. [given]

1.2 If $x\in\mathfrak g_\alpha$ and $y\in\mathfrak g_\beta$, Jacobi gives $[h,\,[x,y]]=[\,[h,x],y]+[x,\,[h,y]]=(\alpha+\beta)(h)[x,y]$ for every $h\in\mathfrak h$. Thus $[x,y]$ belongs to the supplied weight space for $\alpha+\beta$, and is zero if that nonzero weight is absent. A sum of two positive roots cannot be zero or negative, so $\mathfrak n^+$ is closed under brackets. The same argument applies to $\mathfrak n^-$. [given, algebra]

2.1 Choose ordered bases of $\mathfrak n^-$, $\mathfrak h$, and $\mathfrak n^+$ and concatenate them in that order. The ordered PBW monomials from [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]] are then exactly products of a monomial in $U(\mathfrak n^-)$, one in $U(\mathfrak h)$, and one in $U(\mathfrak n^+)$, so multiplication gives the stated vector-space isomorphism. [step 1.1, step 1.2] ∎
