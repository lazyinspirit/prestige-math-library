---
id: thm-na-daubechies-d4-filter-qmf-and-two-moments
kind: theorem
title: The explicit four-tap Daubechies pair satisfies the orthogonal filter and two-moment conditions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 1
deps: [def-na-daubechies-d4-filter, def-na-periodic-orthogonal-compact-filter-dwt]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handout 8"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/29303d64110d5953075d8f3781ce61fe_Handout8.pdf"
    - title: "Jelena Kovačević, Vivek K. Goyal, and Martin Vetterli, Fourier and Wavelet Signal Processing"
      url: "https://www.fourierandwavelets.org/FWSP_a3.2_2013.pdf"
---

## Statement

The pair $(h,g)$ in [[def-na-daubechies-d4-filter]] is admissible in [[def-na-periodic-orthogonal-compact-filter-dwt]]. In addition, $\sum_{j=0}^3j^rg_j=0$ for $r=0,1$, so the high-pass filter annihilates constant and affine data.

## Facts & Assumptions

**Given:** The exact four entries of $h$ and the definition $g_j=(-1)^jh_{3-j}$.

[F1] [[def-na-daubechies-d4-filter]]: $h=(1+\sqrt3,3+\sqrt3,3-\sqrt3,1-\sqrt3)/(4\sqrt2)$ and $g=(h_3,-h_2,h_1,-h_0)$.

[F2] [[def-na-periodic-orthogonal-compact-filter-dwt]]: admissibility requires unit even-shift autocorrelation for each filter, zero cross-correlation at every even shift, $\sum_jh_j=\sqrt2$, and $\sum_jg_j=0$.

## Proof

1.1 Write $r=\sqrt3$. Direct addition gives $\sum h_j=8/(4\sqrt2)=\sqrt2$. The numerator of $\sum g_j$ is $(1-r)-(3-r)+(3+r)-(1+r)=0$, and the numerator of $\sum jg_j$ is $-(3-r)+2(3+r)-3(1+r)=0$. Thus $g$ has the required zero sum and two vanishing moments. [given, F1, algebra]

1.2 With denominator $32$, the numerator of $\sum h_j^2$ is $(4+2r)+(12+6r)+(12-6r)+(4-2r)=32$, so the zero-shift autocorrelation is $1$. The only possible nonzero even-shift autocorrelation of a four-tap filter is at shift $2$ or $-2$; at shift $2$ its numerator is $(3-r)(1+r)+(1-r)(3+r)=2r-2r=0$, and the shift $-2$ sum is the same by reindexing. Reversal with alternating signs gives $\sum g_j^2=1$ and $\sum g_jg_{j-2}=h_3h_1+h_2h_0=0$. [given, F1, algebra]

2.1 For the cross-correlation $\sum_jh_jg_{j-2s}$, only $s=-1,0,1$ can have overlapping taps. These sums are respectively $h_0g_2+h_1g_3=h_0h_1-h_1h_0=0$, $h_0g_0+h_1g_1+h_2g_2+h_3g_3=0$ by pairwise cancellation, and $h_2g_0+h_3g_1=h_2h_3-h_3h_2=0$. For all other integers $s$ the supports do not overlap, so the sum is zero. Together with steps 1.1 and 1.2 this verifies every condition in [F2]. [step 1.1, step 1.2, given, F1, F2, algebra] ∎
