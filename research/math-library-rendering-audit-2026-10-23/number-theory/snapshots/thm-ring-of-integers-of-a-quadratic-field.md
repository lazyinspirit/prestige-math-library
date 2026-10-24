---
id: thm-ring-of-integers-of-a-quadratic-field
kind: theorem
title: "Integers in a quadratic field"
status: published
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-ring-of-integers-of-a-number-field, cor-algebraic-integer-minimal-polynomial-criterion, cor-trace-and-norm-of-an-algebraic-integer]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Remark 2.12"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

For squarefree $d\ne1$, $\mathcal O_{\mathbb Q(\sqrt d)}=\mathbb Z[(1+\sqrt d)/2]$ if $d\equiv1\pmod4$, and $\mathbb Z[\sqrt d]$ otherwise.

## Facts & Assumptions

**Given:** Squarefree $d\ne1$.

[F1] Integral elements have integral trace and norm ([[cor-trace-and-norm-of-an-algebraic-integer]]).

## Proof

**Proof technique:** direct.

1.1 Write an integral element as $(a+b\sqrt d)/c$ in lowest terms. Fact [F1] forces $2a/c, (a^2-db^2)/c^2\in\mathbb Z$. [F1, given]

2.1 These divisibilities force $c\mid2$; the $c=2$ case occurs exactly when $d\equiv1\pmod4$, yielding the displayed bases. [step 1.1, algebra] ∎
