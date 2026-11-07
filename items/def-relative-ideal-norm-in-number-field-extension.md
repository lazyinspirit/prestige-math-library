---
id: def-relative-ideal-norm-in-number-field-extension
kind: definition
title: "Relative ideal norm in a number-field extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-fractional-ideal
  - def-number-field
  - def-prime-above-and-residue-degree
  - def-prime-ideal-valuations-on-fractional-ideals
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-ramification-and-residue-degrees-in-towers
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Sharifi, Iwasawa Theory lecture notes"
      url: "https://www.math.ucla.edu/~sharifi/iwasawa.pdf"
      locator: "Chapter 3 §§3.1–3.2, printed pp. 73–82"
    - title: "J. S. Milne, Algebraic Number Theory"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Chapter 4, ideal norm conventions"
verification: {}
---

## Definition

Let $L/K$ be a finite extension of number fields. For a nonzero prime ideal $\mathfrak P\subset\mathcal O_L$, put $\mathfrak p=\mathfrak P\cap\mathcal O_K$ and $f(\mathfrak P/\mathfrak p)=[\mathcal O_L/\mathfrak P:\mathcal O_K/\mathfrak p]$. If $\mathfrak A=\prod_{\mathfrak P}\mathfrak P^{n_{\mathfrak P}}$ is a nonzero fractional ideal of $\mathcal O_L$, define its **relative ideal norm** by
$$N_{L/K}(\mathfrak A)=\prod_{\mathfrak P}\mathfrak p^{f(\mathfrak P/\mathfrak p)n_{\mathfrak P}}.$$
The product is finite and is a nonzero fractional ideal of $\mathcal O_K$.

## Definition references

[J. Sharifi, *Iwasawa Theory*, Chapter 3, §§3.1–3.2, pp. 73–82](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

[J. S. Milne, *Algebraic Number Theory*, Chapter 4](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** A finite extension $L/K$ of number fields and a nonzero fractional ideal $\mathfrak A$ of $\mathcal O_L$.

[F1] Nonzero fractional ideals have unique finite prime-ideal factorizations with integer exponents. [[def-prime-ideal-valuations-on-fractional-ideals]] [[thm-number-field-integral-ideal-factorisation-in-zf]]

[F2] Prime contraction and residue degree are defined by the induced extension of residue fields. [[def-prime-above-and-residue-degree]]

[F3] Residue degrees multiply in a tower. [[thm-ramification-and-residue-degrees-in-towers]]

## Proof

1.1 By [F1], the exponent $n_{\mathfrak P}$ and its finite support are uniquely determined by $\mathfrak A$. The residue degrees in [F2] are positive integers, so the displayed exponents are integers and only finitely many are nonzero.[F1, F2, given]

1.2 Unique factorization of fractional ideals makes the product independent of its written order. Exponent addition gives $N_{L/K}(\mathfrak A\mathfrak B)=N_{L/K}(\mathfrak A)N_{L/K}(\mathfrak B)$. If $M/K$ and $L/M$ are finite extensions, the exponent assigned to a prime in a two-step norm is $f(\mathfrak P/\mathfrak q)f(\mathfrak q/\mathfrak p)$, which equals $f(\mathfrak P/\mathfrak p)$ by [F3]; hence relative norms are transitive.[F1, F2, F3, step 1.1, algebra] ∎