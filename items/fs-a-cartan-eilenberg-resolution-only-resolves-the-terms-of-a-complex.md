---
id: "fs-a-cartan-eilenberg-resolution-only-resolves-the-terms-of-a-complex"
kind: "false-statement"
title: "Cartan-Eilenberg only resolves terms"
deps: ["def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex", "thm-second-hypercohomology-spectral-sequence", "thm-injective-modules-over-a-pid-are-exactly-divisible", "def-injective-object", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Sharifi, Definition 4.3.1"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Compatible injective resolutions of the terms of a complex suffice to be a Cartan–Eilenberg resolution.

## Facts & Assumptions

**Given:** We use abelian groups and assume AC for divisible injectivity.

[F1] Cartan–Eilenberg data also resolve cycles, boundaries and cohomology, with split horizontal exact sequences ([[def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex]]).

[F2] These split sequences and the cohomology resolutions identify the second hypercohomology page ([[thm-second-hypercohomology-spectral-sequence]]).

[F3] Divisible groups are injective under AC; injectivity means extending along every monomorphism ([[thm-injective-modules-over-a-pid-are-exactly-divisible]], [[def-injective-object]]).

## Refutation

1.1 Take $K^0=\mathbb Q$, $K^1=\mathbb Q/\mathbb Z$, $d$ the quotient map, zero elsewhere. Both terms are divisible, hence injective by F3. Set $I^{p,0}=K^p$ and $I^{p,q}=0$ for $q>0$, with horizontal differential $d$, vertical differential zero and identity augmentation. Each column is an injective resolution of the corresponding term, and all squares commute. [F3, construct]

2.1 But horizontal $Z^{0,0}=H^{0,0}=\mathbb Z$. This is not injective: the identity map on the subgroup $\mathbb Z\subset\mathbb Q$ cannot extend to $f:\mathbb Q\to\mathbb Z$, since $2f(1/2)=f(1)=1$ has no integer solution. Thus the induced cycle and cohomology columns are not injective resolutions. Also $0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$ cannot split, since a splitting would retract $\mathbb Q$ onto $\mathbb Z$ and give the same impossible extension. F1 therefore excludes these termwise data. F2 needs exactly the missing clauses to compute $R^pF(H^qK)$; commuting term resolutions alone do not provide that computation. The example is bounded, has only one resolution row, and uses AC only for the two divisible terms. [F1, F2, F3, step 1.1] ∎
