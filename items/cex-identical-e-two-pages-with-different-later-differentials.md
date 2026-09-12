---
id: "cex-identical-e-two-pages-with-different-later-differentials"
kind: "counterexample"
title: "Identical E2 pages with different later differentials"
deps: ["prop-an-e-two-page-alone-does-not-determine-the-abutment", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Section 5.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement refuted

Isomorphic $E_2$ bigraded objects of finite first-quadrant filtered cochain complexes determine the same later pages and filtered cohomology.

## Facts & Assumptions

**Given:** The two complexes below over $k=\mathbb F_2$.

[F1] The local two-generator construction gives different filtered targets with the same second page ([[prop-an-e-two-page-alone-does-not-determine-the-abutment]]).

[F2] Pages are filtered cycle/boundary quotients and their differential is induced by the original complex differential ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]], [[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

## Counterexample

1.1 For $t=0,1$, let $C_t^1=kx$, $C_t^2=ky$ and $dx=ty$, zero elsewhere. Let $x$ have filtration degree zero and $y$ degree two in the decreasing filtration. This means $F^pC_t^1=kx$ exactly for $p\le0$ and $F^pC_t^2=ky$ exactly for $p\le2$. Both filtrations are finite in each degree and preserved by $d$. Their graded terms are $kx$ at $(0,1)$ and $ky$ at $(2,0)$, zero elsewhere. As in F1, negate chain degree and filtration index to apply F2's homological formulas. [F1, F2, construct]

2.1 Through page two the numerator at each of these positions is the full displayed line and its denominator is zero: $dx$ already lies in $F^2C_t^2$, and no boundary from filtration zero enters the denominator at filtration two until page three. Thus $d_0=d_1=0$ and both $E_2$ pages have the same two lines. At $r=2$, F2's representative rule gives $d_2x=ty$. If $t=1$, the page-three cycle numerator at $x$ is zero because $dx\notin F^3C_t^2=0$, and the page-three denominator at $y$ is all $ky=d(kx)$. Hence $E_3=0$. If $t=0$, both numerators remain full and both denominators remain zero on every page, so $E_3=E_\infty=E_2$. [F2, step 1.1]

3.1 Direct total cohomology is zero for $t=1$ and is $kx$ in degree one and $ky$ in degree two for $t=0$. In the latter case the induced filtration has $F^0H^1=H^1,F^1H^1=0$ and $F^0H^2=F^1H^2=F^2H^2=H^2,F^3H^2=0$. These finite normalized filtrations have exactly the calculated stationary graded pieces; all later incident arrows are zero. Thus the difference persists in the actual filtered abutments, with strong convergence verified directly. No infinite choices or splitting assumptions occur. [F1, step 2.1] ∎
