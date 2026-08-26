---
id: thm-field-norm-and-trace-agree-with-operator-determinant-and-trace
kind: theorem
title: "Field norm and trace agree with the determinant and trace of multiplication by an element"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-field-norm-and-trace, def-determinant-of-a-linear-operator, def-trace-of-an-endomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "B. Conrad, Norm and trace, Section 1"
      url: "https://virtualmath1.stanford.edu/~conrad/248APage/handouts/normtrace.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Section 5"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite extension and let $a\in K$. If

$$m_a\colon K\to K,\qquad x\mapsto ax,$$

is the $F$-linear multiplication operator, then

$$N_{K/F}(a)=\det(m_a),\qquad \operatorname{Tr}_{K/F}(a)=\operatorname{tr}(m_a),$$

where the right-hand side uses the published linear-operator determinant and
trace.

## Facts & Assumptions

**Given:** A finite field extension $K/F$, an element $a\in K$, and the operator $m_a$ of multiplication by $a$.

[F1] The field norm and trace were defined by $N_{K/F}(a):=\det(m_a)$ and $\operatorname{Tr}_{K/F}(a):=\operatorname{tr}(m_a)$ ([[def-field-norm-and-trace]]).

[F2] The determinant and trace of an endomorphism are the basis-independent linear-algebra notions of the earlier pages ([[def-determinant-of-a-linear-operator]], [[def-trace-of-an-endomorphism]]).

## Proof

**Proof technique:** direct.

1.1 The two displayed identities are exactly the definitions of [F1], and [F2] identifies the determinant and trace on the right with the published operator notions. Since a field extension has positive degree, the zero-dimensional determinant convention never needs a separate case here. [F1, F2]

2.1 This proves the stated dictionary identification. [step 1.1] ∎

## Remarks

- **This is the promised dictionary item.** The page is not introducing a second unrelated determinant or trace: the field-theoretic norm and trace are built from the same linear-algebra invariants already established for endomorphisms.
