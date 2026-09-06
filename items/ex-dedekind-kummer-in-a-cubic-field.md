---
id: ex-dedekind-kummer-in-a-cubic-field
kind: example
title: "Dedekind--Kummer in a cubic field"
status: draft
origin: pipeline
deps: [thm-dedekind-kummer-prime-factorisation]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Example 3.48"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Example

For $f=X^3-X-1$, modulo $2$ one has $\bar f=X^3+X+1$, irreducible; whenever the index hypothesis holds, $(2)$ is inert in $\mathbb Q(\alpha)$.

## Verification

**Given:** a root $\alpha$ with $\mathcal O_K=\mathbb Z[\alpha]$.

1.1 Neither $0$ nor $1$ is a root of $X^3+X+1$ in $\mathbb F_2$, so the cubic is irreducible. [given, algebra]

2.1 Dedekind--Kummer then gives one prime above $2$ with residue degree $3$ and exponent $1$, which is inertness. [step 1.1, algebra] ∎
