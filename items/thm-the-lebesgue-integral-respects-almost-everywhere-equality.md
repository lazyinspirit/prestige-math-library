---
id: thm-the-lebesgue-integral-respects-almost-everywhere-equality
kind: theorem
title: "Two integrable functions are equal almost everywhere exactly when all of their indefinite integrals agree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-integral-over-a-null-set-vanishes, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-integrable-real-and-complex-functions-and-their-integrals]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 8.2"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 2.23(b)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $f,g\in L^1(\mu)$. Then the following are equivalent:

1. $f=g$ almost everywhere;
2. for every measurable $A$,
   $$\int_A f\,d\mu=\int_A g\,d\mu.$$

For integrable real or complex $h$, the notation in condition 2 means
$\int_A h\,d\mu:=\int h\chi_A\,d\mu$; the product is integrable because
$|h\chi_A|\le|h|$.

## Facts & Assumptions

**Given:** Integrable functions $f,g\in L^1(\mu)$.

[L1] The integral over a null set vanishes for nonnegative integrands ([[cor-integral-over-a-null-set-vanishes]]).

[L2] The Lebesgue integral is linear on $L^1(\mu)$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[L3] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L4] Real and imaginary parts of an integrable complex function are integrable ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Proof

**Proof technique:** direct.

1.1 Assume $f=g$ almost everywhere, with exceptional null set $N$. Then for [L1, L2, L4, given]
every measurable $A$, the real and imaginary parts of $(f-g)\chi_A$ are
supported on $N$, so [L1] and [L2] give
$$\int_A(f-g)\,d\mu=0,$$
hence $\int_A f\,d\mu=\int_A g\,d\mu$.

1.2 Assume instead that $\int_A f\,d\mu=\int_A g\,d\mu$ for every measurable [L2, L3, L4, given]
$A$. Apply this to the real part $u:=\operatorname{Re}(f-g)$ on the set
$A_+:=\{u>0\}$ and to $-u$ on $A_-:=\{u<0\}$. In each case the corresponding
nonnegative integral is $0$, so [L3] gives $u=0$ almost everywhere. The same
argument for $v:=\operatorname{Im}(f-g)$ shows $v=0$ almost everywhere. Hence
$f=g$ almost everywhere.

2.1 Step 1.1 proves $(1)\Rightarrow(2)$ and step 1.2 proves $(2)\Rightarrow(1)$.[step 1.1, step 1.2] ∎
