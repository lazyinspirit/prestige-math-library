---
id: "ex-dvrs-as-regular-local-rings"
kind: "example"
title: "dvrs as regular local rings"
deps: ["thm-one-dimensional-regular-local-rings-are-dvrs", "thm-associated-graded-ring-of-a-regular-local-ring"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Example 12.10, p.116"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: "draft"
origin: "pipeline"
generation:
  role: example
proof_strategy: "Explicit algebraic derivation"
---

## Example

A DVR $R$ with uniformizer $t$ and residue field $k$ is regular local of dimension one, with regular system $(t)$ and $\operatorname{gr}_{(t)}R\cong k[T]$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-one-dimensional-regular-local-rings-are-dvrs]]: A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring. Fields are excluded from the term DVR.

[F2] [[thm-associated-graded-ring-of-a-regular-local-ring]]: If $(R,\mathfrak m,k)$ is regular local of dimension $d$, any cotangent basis induces a graded isomorphism $k[X_1,\ldots,X_d]\cong\operatorname{gr}_{\mathfrak m}R$. Conversely, if the associated graded ring of a nonzero Noetherian local ring is isomorphic as a graded $k$-algebra to $k[X_1,\ldots,X_d]$ with standard grading, then $R$ is regular of dimension $d$.

## Verification

1.1 The DVR equivalence gives dimension-one regularity. Its maximal ideal is $(t)$ and $t\notin(t^2)$, since otherwise cancellation would make the nonunit $t$ a unit. Thus its cotangent basis is the class of $t$. [F1, algebra]

2.1 For every $n\ge0$, multiplication by $t^n$ identifies $k$ with $(t^n)/(t^{n+1})$: injectivity follows by cancellation and surjectivity by principality. Products of these classes are powers of the degree-one class, so the graded map $k[T]\to\operatorname{gr}_{(t)}R$ is an isomorphism, also as given by the regular graded theorem. [F2, step 1.1, algebra] ∎
