---
id: thm-equality-case-in-holder-inequality
kind: theorem
title: "Equality in Holder's inequality for $1 < p < \\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-holder-inequality-for-integrals, thm-young-inequality-real-exponents, thm-exponential-two-point-convexity, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-calligraphic-l-p-on-a-measure-space]
proof_strategy: "Trace where equality can occur in the normalized Young-inequality proof. Equality in Young forces the normalized powers |f|^p and |g|^q to be proportional almost everywhere, and conversely that proportionality makes the inequality an equality."
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (thm-equality-case-in-holder-inequality). No independent judge or whole-closure certification.
    delegated_by: owner
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

**Given:** A measure space, an exponent $1<p<\infty$, its conjugate exponent $q$, and functions $f\in\mathcal L^p(\mu)$, $g\in\mathcal L^q(\mu)$.

[L1] Holder's inequality for integrals has already been proved ([[thm-holder-inequality-for-integrals]]).

[L2] Young's inequality is the scalar step used in that proof ([[thm-young-inequality-real-exponents]]).

[L3] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L4] Membership in $\mathcal L^p(\mu)$ and $\mathcal L^q(\mu)$ means finiteness of the corresponding power integrals ([[def-calligraphic-l-p-on-a-measure-space]]).

[L5] For a weight strictly between zero and one, equality in the two-point exponential convexity inequality holds exactly when its two inputs agree ([[thm-exponential-two-point-convexity]]).

## Proof

**Proof technique:** Trace where equality can occur in the normalized Young-inequality proof. Equality in Young forces the normalized powers $|f|^p$ and $|g|^q$ to be proportional almost everywhere, and conversely that proportionality makes the inequality an equality.

1.1 If $\|f\|_p=0$ or $\|g\|_q=0$, then the corresponding function is zero almost everywhere, and Holder's inequality becomes equality with both sides $0$. [L1, L3, L4]

1.2 Assume now that $A:=\|f\|_p>0$ and $B:=\|g\|_q>0$. The proof of [L1] integrated the nonnegative function [L1, L2, L3]
$$H:=\frac{|f|^p}{pA^p}+\frac{|g|^q}{qB^q}-\frac{|fg|}{AB}.$$ If equality holds in Holder, then $\int H\,d\mu=0$, so $H=0$ almost everywhere. Thus equality holds in Young's inequality pointwise almost everywhere for $u=|f|/A$ and $v=|g|/B$.

2.1 To check the equality condition omitted from [L2]'s Statement, first suppose $u,v>0$. Apply [L5] to $\log(u^p)$ and $\log(v^q)$ with weights $1/p$ and $1/q$: its geometric side is $uv$, its arithmetic side is $u^p/p+v^q/q$, and equality holds exactly when $u^p=v^q$. If one of $u,v$ is zero, equality in Young holds only when both vanish, again exactly when $u^p=v^q$. Applying this criterion to step 1.2 gives [step 1.2, L2, L5, algebra]
$$\frac{|f|^p}{A^p}=\frac{|g|^q}{B^q}\qquad\mu\text{-almost everywhere},$$ so $|f|^p=(A^p/B^q)|g|^q$ almost everywhere.

3.1 Conversely, if $|f|^p=c|g|^q$ almost everywhere for some $c>0$ and neither function vanishes almost everywhere, integration gives $A^p=cB^q$. Thus the normalized powers agree almost everywhere, so the scalar criterion from step 2.1 makes Young an equality almost everywhere and the integrated Holder proof becomes an equality. If either function vanishes almost everywhere, step 1.1 already applies. [step 1.1, step 2.1, L1, L4, algebra]

4.1 Step 1.1 handles the zero-function case, step 2.1 proves the strict necessity, and step 3.1 proves sufficiency. These are exactly the alternatives in the Statement. [step 1.1, step 2.1, step 3.1] ∎
