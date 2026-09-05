---
id: thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra
kind: theorem
title: "Cartan subalgebras are conjugate in a complex semisimple Lie algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-root-hyperplane-arrangement-in-a-cartan-subalgebra, prop-centralizer-of-a-cartan-element-from-its-vanishing-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Any two Cartan subalgebras of a complex semisimple Lie algebra are conjugate under the identity component of the automorphism group of $\mathfrak g$.

## Facts & Assumptions

**Given:** Two Cartan subalgebras $\mathfrak h_1,\mathfrak h_2$ of a complex semisimple Lie algebra $\mathfrak g$.

[F1] For the connected adjoint complex algebraic group $G_{\mathrm{ad}}$ with Lie algebra $\mathfrak g$, Cartan subalgebras of $\mathfrak g$ are exactly the Lie algebras of maximal tori of $G_{\mathrm{ad}}$.

[F2] Any two maximal tori of a connected complex algebraic group are conjugate.

## Proof

**Proof technique:** direct.

1.1 By [F1], choose maximal tori $T_1,T_2\le G_{\mathrm{ad}}$ with $\operatorname{Lie}(T_i)=\mathfrak h_i$. [F1, given, choose]

2.1 By [F2], some $g\in G_{\mathrm{ad}}$ satisfies $gT_2g^{-1}=T_1$. Taking Lie algebras gives $\operatorname{Ad}(g)(\mathfrak h_2)=\mathfrak h_1$. [F2, step 1.1, algebra]

3.1 The adjoint group is the identity component of the inner automorphism group of $\mathfrak g$, so $\operatorname{Ad}(g)$ is an automorphism in the identity component. This proves the claimed conjugacy. [step 2.1] ∎
