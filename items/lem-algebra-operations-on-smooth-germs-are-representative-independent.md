---
id: lem-algebra-operations-on-smooth-germs-are-representative-independent
kind: lemma
title: "Algebra operations on smooth germs are representative independent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-germ-of-a-smooth-function-at-a-point, def-the-local-algebra-of-smooth-function-germs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

The addition, multiplication, and scalar-multiplication operations of [[def-the-local-algebra-of-smooth-function-germs]] do not depend on the chosen representatives.

## Facts & Assumptions

**Given:** Germs $[f]=[f']$ and $[g]=[g']$ in $C_p^\infty(M)$.

[F1] Equality of germs means equality on some neighbourhood of $p$ ([[def-germ-of-a-smooth-function-at-a-point]]).

[F2] The local algebra operations are defined by pointwise operations on representatives ([[def-the-local-algebra-of-smooth-function-germs]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], there are neighbourhoods of $p$ on which $f=f'$ and $g=g'$. On the intersection neighbourhood, one also has $f+g=f'+g'$, $fg=f'g'$, and $cf=cf'$. [F1, given]

2.1 Therefore the germs determined by these sums, products, and scalar multiples are the same, so the operations in [F2] are representative independent. [F2, step 1.1]

3.1 Hence the algebra operations are well defined on germs. [step 2.1] ∎
