---
id: thm-equality-case-in-minkowski-inequality
kind: theorem
title: "Equality in Minkowski's inequality for $1 < p < \\infty$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-minkowski-inequality-for-integrals, thm-equality-case-in-holder-inequality, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, cor-additivity-of-the-nonnegative-lebesgue-integral]
proof_strategy: "Examine the Holder step in the standard proof of Minkowski. Equality forces the nonnegative functions |f| and |g| to be proportional almost everywhere, and that proportionality is sufficient."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Chapter 8"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "John K. Hunter, Measure Theory, Section 7.2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $1<p<\infty$ and let $f,g\in\mathcal L^p(\mu)$. Then equality holds in
Minkowski's inequality

$$\|f+g\|_p=\|f\|_p+\|g\|_p$$

if and only if at least one of $f,g$ is zero almost everywhere, or there is a
constant $\lambda>0$ such that

$$f=\lambda g\qquad\mu\text{-almost everywhere}.$$

## Facts & Assumptions

**Given:** An exponent $1<p<\infty$ and functions $f,g\in\mathcal L^p(\mu)$.

[L1] Minkowski's inequality has already been proved
([[thm-minkowski-inequality-for-integrals]]).

[L2] The equality case in Holder has already been proved
([[thm-equality-case-in-holder-inequality]]).

[L3] A nonnegative measurable function has integral $0$ exactly when it
vanishes almost everywhere
([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L4] The nonnegative integral is additive
([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

## Proof

**Proof technique:** Examine the Holder step in the standard proof of
Minkowski. Equality forces the nonnegative functions $|f|$ and $|g|$ to be
proportional almost everywhere, and the pointwise triangle inequality then
forces the same sign.

1.1 If at least one of $f,g$ is zero almost everywhere, then equality is immediate. [L1, given]

1.2 If $f=\lambda g$ almost everywhere for some $\lambda>0$, then [L1, given]
$$|f+g|=(\lambda+1)|g|$$
almost everywhere, so
$$\|f+g\|_p=(\lambda+1)\|g\|_p=\|f\|_p+\|g\|_p.$$

1.3 Conversely, assume equality in Minkowski and that neither $f$ nor $g$ is zero almost everywhere. [L1, L2, L3, L4]
The proof of [L1] showed that equality in Minkowski can only occur when both
inequalities
$$|f+g|\le |f|+|g|$$
and
$$\int |f|\,|f+g|^{p-1}\,d\mu\le \|f\|_p\|f+g\|_p^{p-1}$$
and its $g$-analogue are equalities. The second and third equalities force the
pairs $(|f|,|f+g|^{p-1})$ and $(|g|,|f+g|^{p-1})$ to satisfy Holder equality.
By [L2], this makes $|f|$ and $|g|$ proportional almost everywhere. The first
inequality then forces $(|f|+|g|)-|f+g|$ to have integral $0$; [L3] and [L4]
therefore give
$$|f+g|=|f|+|g|\qquad\mu\text{-almost everywhere}.$$

2.1 Let $|f|=c|g|$ almost everywhere with $c>0$. Then [step 1.3, algebra]
on the set where $g\ne0$, step 1.3 gives equality in the real triangle
inequality for $f$ and $g$, so they have the same sign there. Hence $f=cg$
almost everywhere on $\{g\ne0\}$, and on $\{g=0\}$ both sides vanish. Thus
$f=\lambda g$ almost everywhere for $\lambda=c>0$.

3.1 Steps 1.1 and 1.2 prove sufficiency, while steps 1.3 and 2.1 prove necessity. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
