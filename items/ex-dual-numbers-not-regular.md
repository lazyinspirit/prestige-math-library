---
id: "ex-dual-numbers-not-regular"
kind: "example"
title: "dual numbers not regular"
deps: ["def-embedding-dimension-and-regular-local-ring"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Definitions 12.3–12.5 and Example 12.6, p.115"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: published
origin: "pipeline"
generation:
  role: example
proof_strategy: "Explicit algebraic derivation"
---

## Example

For every field $k$, the dual-number ring $R=k[\varepsilon]/(\varepsilon^2)$ is local with $\dim R=0$ and $\operatorname{edim}R=1$, so is not regular.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-embedding-dimension-and-regular-local-ring]]: For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, define $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$. The ring is **regular local** when $\operatorname{edim}R=\dim R$. The cotangent space is intrinsic, and is finite-dimensional because $\mathfrak m$ is finitely generated.

## Verification

1.1 Every element has a unique form $a+b\varepsilon$. It is a unit precisely when $a\ne0$, with inverse $a^{-1}-ba^{-2}\varepsilon$. Hence the unique maximal ideal is $(\varepsilon)$. Every prime contains the nilpotent $\varepsilon$, so this is the only prime and the dimension is zero. [given, algebra]

2.1 The square of the maximal ideal is zero and the class of $\varepsilon$ is a nonzero $k$-basis of it. Therefore the cotangent dimension is one, strictly larger than Krull dimension. The ring is finite-dimensional over $k$ and hence Noetherian, so the regularity definition applies and fails. [F1, step 1.1, algebra] ∎
