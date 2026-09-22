---
id: fs-the-weyl-character-formula-is-an-ordinary-quotient-of-functions-before-formal-cancellation-is-justified
kind: false-statement
title: The Weyl quotient requires cancellation or extension
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-weyl-vector-rho, def-positive-system-and-base-of-simple-roots, def-special-linear-lie-algebra-sl-two]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §§1–3"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.3"
proof_strategy: direct
---

## Statement

In the Weyl character formula the numerator divided by the denominator is an
ordinary pointwise quotient on the whole torus before any cancellation or
continuous extension is justified.

## Facts & Assumptions

**Given:** The $\mathfrak{sl}_2$-weight data: a root $\alpha$, the Weyl vector $\rho=\alpha/2$ of the positive system $\{\alpha\}$ ([[def-weyl-vector-rho]], [[def-positive-system-and-base-of-simple-roots]], [[def-special-linear-lie-algebra-sl-two]]), the variable $z$ ranging over $\mathbb C^\times$, and, for an integer $n\ge0$, the Laurent polynomials $$\chi_n(z)=z^n+z^{n-2}+\dots+z^{-n},\qquad N(z)=z^{n+1}-z^{-(n+1)},\qquad D(z)=z-z^{-1}.$$ The functions $N$ and $D$ are the numerator and denominator of the Weyl character formula in this rank-one instance, with $A_{\lambda+\rho}=N$ and $A_\rho=D$ after fixing the trivial Weyl alternant normalisation.

[L1] Multiplication of the finite geometric sum gives the telescoping identity $\chi_n(z)D(z)=N(z)$, hence $\chi_n(z)=N(z)/D(z)$ for every $z\ne0$ with $D(z)\ne0$, that is, for $z\ne\pm1$, by cancellation of the common factor $z-z^{-1}$ in the Laurent polynomial ring.

[L2] At $z=1$ one has $N(1)=1-1=0$ and $D(1)=1-1=0$, while $\chi_n(1)=n+1$.

## Refutation

**Proof technique:** direct.

1.1 The identity of [L1] is an identity of Laurent polynomials, and it required multiplying the finite sum by $z-z^{-1}$ and cancelling the common factor; on the set where $D(z)\ne0$ the quotient equals $\chi_n$. [L1]

1.2 At the torus point $z=1$ the displayed quotient $N(1)/D(1)$ is $0/0$ by [L2], so the formula gives no value there, whereas the character has the well-defined value $\chi_n(1)=n+1$; the value at $z=1$ can be recovered only after the algebraic cancellation or a continuous extension of the quotient. [L2]

2.1 Hence the Weyl quotient is not an ordinary pointwise quotient on the whole torus: it is undefined at the identity point until cancellation or extension is justified, so the claim of the Statement section is false. [step 1.1, step 1.2] ∎
