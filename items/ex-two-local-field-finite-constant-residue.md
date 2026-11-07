---
id: ex-two-local-field-finite-constant-residue
kind: example
title: "A two-local field with a finite final residue field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-d-local-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matthew Morrow, An Introduction to Higher Dimensional Local Fields and Adeles, §2, Definition 2.12 and Example 2.14"
      url: "https://arxiv.org/pdf/1204.0586v2"
      locator: 'The field $\mathbb F_q((u))((t))$ as a two-dimensional local field.'
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, 2nd ed., Chapter I §4"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Complete discrete-valuation topology and Laurent-series fields."
verification: {}
---

## Example

Let $q$ be a prime power and set
$K_0=\mathbb F_q$, $K_1=\mathbb F_q((u))$, and
$K_2=\mathbb F_q((u))((t))$. Equip $K_1$ with the $u$-adic valuation and
$K_2$ with the outer $t$-adic valuation. Their successive residue fields are
$K_0$ and $K_1$, respectively, so $K_2$ with this specified valuation tower
is a two-local field with finite final residue field. The successive residue
chain is $K_2\xrightarrow{\operatorname{res}_t}K_1
\xrightarrow{\operatorname{res}_u}K_0$; each arrow is induced by reducing a
valuation ring modulo its maximal ideal. This TikZ source records the same
field tower, and the verification below does not rely on the diagram.

```latex
\begin{tikzcd}[row sep=large]
\mathbb F_q((u))((t)) \arrow[d, "\operatorname{res}_t"] \\
\mathbb F_q((u)) \arrow[d, "\operatorname{res}_u"] \\
\mathbb F_q
\end{tikzcd}
```

## Example references

[[def-d-local-field]]

[Matthew Morrow, *An Introduction to Higher Dimensional Local Fields and Adeles*, §2](https://arxiv.org/pdf/1204.0586v2)

[Fesenko–Vostokov, *Local Fields and Their Extensions*, 2nd ed., I §4](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** a prime power $q$ and the $u$-adic and $t$-adic valuations.

[F1] [[def-d-local-field]]: a two-local field datum consists of two successive complete discrete valuations whose final residue field is finite.

## Verification

**Proof technique:** compute the two valuation rings and residue fields.

**Given:** [F1] and the fields in the Example.

1.1 A Laurent series in $K_2$ has a least exponent of $t$ among its nonzero coefficients. This exponent defines a surjective discrete valuation with uniformizer $t$, valuation ring $K_1\lbrack\lbrack t\rbrack\rbrack$, and maximal ideal $tK_1\lbrack\lbrack t\rbrack\rbrack$. The Laurent-series field is complete for this valuation, and reduction of coefficients modulo $t$ identifies its residue field with $K_1$. [F1, given, algebra]

2.1 The same calculation in $K_1=\mathbb F_q((u))$ gives a complete surjective discrete valuation with uniformizer $u$ and residue field $\mathbb F_q$. Since $\mathbb F_q$ is finite, the two valuation stages satisfy [F1]; thus the specified $K_2$ is two-local as claimed. The diagram records these quotient maps and is not used in the verification. [F1, step 1.1, given, algebra] ∎