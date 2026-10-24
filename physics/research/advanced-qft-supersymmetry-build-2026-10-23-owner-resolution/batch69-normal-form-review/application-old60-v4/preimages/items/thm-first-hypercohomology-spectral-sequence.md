---
id: "thm-first-hypercohomology-spectral-sequence"
kind: "theorem"
title: "First hypercohomology spectral sequence"
deps: ["def-right-hyperderived-functor-of-a-complex", "lem-finite-diagonal-cohomological-double-complex-spectral-sequences", "lem-cartan-eilenberg-comparisons-preserve-both-filtrations", "def-dependent-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 5.7.9"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "Sharifi, Theorem 4.3.7"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

For an additive left-exact functor $F$ and a bounded-below complex $K$ with supplied Cartan–Eilenberg resolution $I$, there is a spectral sequence
$$E_1^{p,q}=R^qF(K^p)\quad\Longrightarrow\quad\mathbb R_I^{p+q}F(K),\qquad d_r:(p,q)\mapsto(p+r,q-r+1).$$
Here $q\ge0$ and $p\ge b$ if $K^p=0$ for $p<b$. It is first quadrant after translating $p$ by $b$ and converges strongly with a finite filtration on every target degree. Derived objects use the supplied columns; under DC, or supplied Cartan–Eilenberg comparison and homotopy data, it is natural in $K$ and independent of the resolution from $E_1$ onward.

## Facts & Assumptions

**Given:** $F,K,I,b$ and the data qualifications in the statement.

[F1] Hyperderived objects are cohomology of the signed total complex $\operatorname{Tot}(FI)$ ([[def-right-hyperderived-functor-of-a-complex]]).

[F2] The cohomological double-complex construction gives vertical-first $E_1$, bidegrees and finite image-filtration convergence ([[lem-finite-diagonal-cohomological-double-complex-spectral-sequences]]).

[F3] Cartan–Eilenberg maps and homotopies give independence from vertical-first $E_1$ with DC or supplied data ([[lem-cartan-eilenberg-comparisons-preserve-both-filtrations]]).

## Proof

1.1 In $C^{p,q}=F(I^{p,q})$ filter the signed total complex by the original complex degree $p$. Its graded column has differential $(-1)^pF(v)$. The kernel and image of this signed differential equal those of $F(v)$, so the canonical cohomology quotient is $H^q(F(I^{p,\bullet}))=R^qF(K^p)$ by the supplied injective resolution of $K^p$. The differential to the next column is induced by $F(h)$ and hence is $R^qF(d_K^p)$. [F1, F2]

2.1 Apply finite-diagonal convergence. Its target is $H^{p+q}(\operatorname{Tot}(FI))=\mathbb R_I^{p+q}F(K)$, and the filtration is the image of the cohomology of the subcomplex with columns of degree at least $p$. In total degree $n$ the filtration is all the target at $p=b$ and zero at $p=n+1$; below $n=b$ the target vanishes. Translation uses normalized total degree $n-b$. [F1, F2, step 1.1]

3.1 For a map of complexes take the comparison of F3, which preserves columns. Its vertical homotopy makes the $E_1$ map independent of the lift, and its total homotopy makes the target map independent as well. Identity and composite comparisons prove naturality. This use requires exactly DC or the supplied comparisons stated above; constructing the sequence for the fixed bicomplex uses no choice. Zero complexes, zero columns and the sole bottom bidegree satisfy the same formulas. [F3, step 1.1, step 2.1] ∎
