---
id: thm-equality-case-in-holder-inequality
kind: theorem
title: "Equality in Holder's inequality for $1 < p < \\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-holder-inequality-for-integrals, thm-young-inequality-real-exponents, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-calligraphic-l-p-on-a-measure-space]
proof_strategy: "Trace where equality can occur in the normalized Young-inequality proof. Equality in Young forces the normalized powers |f|^p and |g|^q to be proportional almost everywhere, and conversely that proportionality makes the inequality an equality."
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Holder's Inequality"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem 8.6 and converse"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement

Let $1<p<\infty$, let $q$ be its conjugate exponent, and let
$f\in\mathcal L^p(\mu)$ and $g\in\mathcal L^q(\mu)$. Then equality holds in
Holder's inequality

$$\int |fg|\,d\mu=\|f\|_p\|g\|_q$$

if and only if at least one of $f,g$ is zero almost everywhere, or there is a
constant $c>0$ such that

$$|f|^p=c\,|g|^q\qquad\mu\text{-almost everywhere}.$$

## Facts & Assumptions

**Given:** A measure space, an exponent $1<p<\infty$, its conjugate exponent
$q$, and functions $f\in\mathcal L^p(\mu)$, $g\in\mathcal L^q(\mu)$.

[L1] Holder's inequality for integrals has already been proved
([[thm-holder-inequality-for-integrals]]).

[L2] Young's inequality is the scalar step used in that proof
([[thm-young-inequality-real-exponents]]).

[L3] A nonnegative measurable function has integral $0$ exactly when it vanishes
almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L4] Membership in $\mathcal L^p(\mu)$ and $\mathcal L^q(\mu)$ means finiteness
of the corresponding power integrals ([[def-calligraphic-l-p-on-a-measure-space]]).

## Proof

**Proof technique:** Trace where equality can occur in the normalized
Young-inequality proof. Equality in Young forces the normalized powers
$|f|^p$ and $|g|^q$ to be proportional almost everywhere, and conversely that
proportionality makes the inequality an equality.

1.1 If $\|f\|_p=0$ or $\|g\|_q=0$, then the corresponding function is zero almost everywhere, and Holder's inequality becomes equality with both sides $0$. [L1, L3, L4]

1.2 Assume now that $A:=\|f\|_p>0$ and $B:=\|g\|_q>0$. The proof of [L1] integrated the nonnegative function [L1, L2, L3]
$$H:=\frac{|f|^p}{pA^p}+\frac{|g|^q}{qB^q}-\frac{|fg|}{AB}.$$
If equality holds in Holder, then $\int H\,d\mu=0$, so $H=0$ almost
everywhere. Thus equality holds in Young's inequality pointwise almost
everywhere for $u=|f|/A$ and $v=|g|/B$.

2.1 Equality in Young's inequality for conjugate exponents means $u^p=v^q$. Applying that to step 1.2 gives [step 1.2, L2]
$$\frac{|f|^p}{A^p}=\frac{|g|^q}{B^q}\qquad\mu\text{-almost everywhere},$$
so $|f|^p=(A^p/B^q)|g|^q$ almost everywhere.

3.1 Conversely, if $|f|^p=c|g|^q$ almost everywhere for some $c>0$, then after normalizing by the two norms the two sides in Young's inequality agree almost everywhere, so the integrated Holder proof becomes an equality. [step 2.1, L1, L2, L4, algebra]

4.1 Step 1.1 handles the zero-function case, step 2.1 proves the strict necessity, and step 3.1 proves sufficiency. These are exactly the alternatives in the Statement. [step 1.1, step 2.1, step 3.1] ∎
