---
id: "prop-an-e-two-page-alone-does-not-determine-the-abutment"
kind: "proposition"
title: "An E2 page alone does not determine the abutment"
deps: ["def-spectral-sequence-computation-record", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page", "thm-the-next-page-is-the-homology-of-the-current-page"]
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
    - title: "Weibel, Sections 5.2-5.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

There are two finite first-quadrant cohomological spectral sequences with isomorphic $E_2$ pages and different $d_2$, stationary pages and abutments. Thus the bigraded $E_2$ object alone does not determine the result.

## Facts & Assumptions

**Given:** Work over $k=\mathbb F_2$ and take $t=0$ or $1$.

[F1] Filtered pages are the cycle/boundary subquotients, their differential sends $[x]$ to $[dx]$, and the next page is current-page homology ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]], [[lem-the-filtered-differential-induces-d-r-on-the-r-page]], [[thm-the-next-page-is-the-homology-of-the-current-page]]).

## Proof

1.1 Define the cochain complex $C_t^1=kx$, $C_t^2=ky$, zero in all other degrees, with $dx=ty$ and $dy=0$. Give it a decreasing filtration in which $x$ has filtration degree zero and $y$ degree two: $F^pC_t^1=kx$ for $p\le0$ and zero otherwise; $F^pC_t^2=ky$ for $p\le2$ and zero otherwise. Each $F^p$ is a subcomplex. Its associated graded is $k$ at $(p,q)=(0,1),(2,0)$ and zero elsewhere, hence is first quadrant. To use F1's homological formulas literally, put $D_n=C_t^{-n}$ and $F_aD_n=F^{-a}C_t^{-n}$; replacing $(a,b)$ by $(-p,-q)$ gives the cohomological $d_r$ of degree $(r,1-r)$. [F1, construct]

2.1 The only differential raises filtration by two. Therefore it is zero on the associated graded, giving $d_0=0$ and $E_1=E_0$. On $E_1$, $dx$ has no component of filtration degree one, so F1 gives $d_1=0$ and the same two entries at $E_2$. At page two both $x$ and $y$ satisfy the required cycle tests and no incoming denominator has yet killed either: a boundary hitting filtration two can first come from filtration zero at this page's differential, rather than in its existing page denominator. F1 now gives $d_2^{0,1}(x)=ty$. All other $d_2$ are zero. [F1, step 1.1]

3.1 For $t=1$ this is an isomorphism, so $E_3=0$. The total complex also has an isomorphism $k\xrightarrow{1}k$, hence $H^1=H^2=0$. For $t=0$, all differentials are zero on every page, and $H^1=kx$, $H^2=ky$. Their induced image filtrations are $F^0H^1=H^1,F^1H^1=0$ and $F^0H^2=F^1H^2=F^2H^2=H^2,F^3H^2=0$. These identify the stationary terms with the actual associated graded. All other degrees vanish. Thus convergence and reconstruction are explicitly verified in both cases, with finite exhaustive separated filtrations and constant-tail completeness. No representatives beyond the displayed finite bases and no choice principle are needed. [F1, step 2.1] ∎
