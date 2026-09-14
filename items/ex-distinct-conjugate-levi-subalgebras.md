---
id: ex-distinct-conjugate-levi-subalgebras
kind: example
title: Distinct conjugate Levi subalgebras
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-malcev-conjugacy-of-levi-subalgebras, def-semidirect-product-of-lie-algebras]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Malcev conjugacy"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Chapter I, Theorem 6.25 and its proof, printed pp. 59–60"
---

## Example

Let $V$ be a finite-dimensional $\mathfrak{sl}_2$-module whose action is nontrivial, and set $\mathfrak g=\mathfrak{sl}_2\ltimes V$. For a suitable $v\in V$, the standard factor $\mathfrak s=\mathfrak{sl}_2\oplus0$ and $\exp(\operatorname{ad}_{(0,v)})(\mathfrak s)$ are distinct Levi subalgebras, conjugate by the inner unipotent automorphism $\exp(\operatorname{ad}_{(0,v)})$.

## Facts & Assumptions

**Given:** A finite-dimensional module with nonzero action and the displayed semidirect product over a characteristic-zero field.

[L1] The semidirect-product bracket is $[(x,v),(y,w)]=([x,y],xw-yv)$ ([[def-semidirect-product-of-lie-algebras]]).

[L2] Levi factors are conjugate by finite products of automorphisms $\exp(\operatorname{ad}n)$ with $n$ in the nilradical ([[thm-malcev-conjugacy-of-levi-subalgebras]]).

## Verification

**Proof technique:** explicit conjugation.

1.1 Since the action is nonzero, choose $v\in V$ and $x\in\mathfrak{sl}_2$ with $xv\neq0$. By [L1], $[(0,v),(y,w)]=(0,-yv)$ lies in $0\oplus V$, and $[0\oplus V,0\oplus V]=0$. Therefore $(\operatorname{ad}_{(0,v)})^2=0$ and $\exp(\operatorname{ad}_{(0,v)})=1+\operatorname{ad}_{(0,v)}$. [given, L1, algebra]
2.1 In particular, $$\exp(\operatorname{ad}_{(0,v)})(x,0)=(x,-xv).$$ Its second component is nonzero for the chosen pair, so the image subalgebra is not $\mathfrak s$. An automorphism carries a Levi factor to a Levi factor, so both are Levi subalgebras. [step 1.1, algebra]
3.1 This explicit automorphism is a one-factor instance of the finite products in [L2], with $(0,v)$ in the abelian nilpotent ideal $0\oplus V$. Thus the example witnesses both literal nonuniqueness and Malcev conjugacy. Selecting one pair from “the action is nonzero” uses no choice family. [L2, step 1.1, step 2.1] ∎
