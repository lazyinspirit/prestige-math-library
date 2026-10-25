---
id: ex-direct-sum-decomposition-of-a-semisimple-lie-algebra
kind: example
title: Direct-sum decomposition of a semisimple Lie algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [prop-ideals-and-quotients-of-semisimple-lie-algebras]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, semisimple direct-sum theorem"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Chapter I, Theorem 4.15, printed pp. 46–47"
---

## Example

Over a characteristic-zero field let $\mathfrak g=\mathfrak{sl}_2\oplus\mathfrak{sl}_3$. Its summands are simple ideals, every ideal is a sum of a subcollection of them, and the Killing form is their orthogonal direct sum.

## Facts & Assumptions

**Given:** The componentwise bracket on the displayed direct sum.

[L1] Relative to a decomposition of a finite-dimensional semisimple characteristic-zero Lie algebra into simple ideals, every ideal is the sum of a subfamily of the simple factors ([[prop-ideals-and-quotients-of-semisimple-lie-algebras]]).

## Verification

**Proof technique:** direct.

1.1 The standard matrix-unit commutator argument shows that $\mathfrak{sl}_2$ and $\mathfrak{sl}_3$ are nonabelian simple in characteristic zero. Hence $\mathfrak{sl}_2\oplus0$ and $0\oplus\mathfrak{sl}_3$ are simple ideals whose direct sum is $\mathfrak g$. [given, algebra]

2.1 Applying [L1], the complete ideal list is $$0,\quad\mathfrak{sl}_2\oplus0,\quad0\oplus\mathfrak{sl}_3,\quad\mathfrak g.$$ This includes the empty and full subcollections. [L1, step 1.1]

3.1 For $x\in\mathfrak{sl}_2$ and $y\in\mathfrak{sl}_3$, the two adjoint maps $\operatorname{ad}_{(x,0)}$ and $\operatorname{ad}_{(0,y)}$ act on opposite blocks, so their product is zero. Restriction to a block is its own adjoint trace. Thus $K_{\mathfrak g}=K_{\mathfrak{sl}_2}\perp K_{\mathfrak{sl}_3}$. Everything is finite and choice-free. [step 1.1, algebra] ∎