---
id: lem-half-space-stokes-for-a-compactly-supported-form
title: "Compact-support Stokes on the upper half-space"
kind: lemma
status: published
origin: pipeline
deps: ["def-integral-of-an-oriented-chart-supported-top-form", "def-induced-boundary-orientation", "lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary", "cor-repeated-riemann-integrals-on-rectangles", "thm-newton-leibniz-with-interior-derivative"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (lem-half-space-stokes-for-a-compactly-supported-form). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Lee Theorem 16.11 proof, pp.412–413"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Give $H^n=\{x_n\geq0\}$ the standard orientation, $n\geq1$, and its face the outward-normal-first orientation. If $\eta\in\Omega_c^{n-1}(H^n)$ and $j:\partial H^n\hookrightarrow H^n$, then
$$\int_{H^n}d\eta=\int_{\partial H^n}j^*\eta.$$
These are the signed single-chart integrals of
[[def-integral-of-an-oriented-chart-supported-top-form]]: the identity chart
on $H^n$ and the standard chart on its face. Their compact supports lie in
these global charts, so the identity requires no global partition of unity
or choice axiom. Where the general manifold integral is available, its value
agrees with this single-chart convention.
With $\eta=\sum_i a_i\,dx^1\wedge\cdots\wedge\widehat{dx^i}\wedge\cdots\wedge dx^n$, both sides are $(-1)^n\int_{\mathbb R^{n-1}}a_n(x^{\prime},0)\,dx^{\prime}$ for $n>1$, and $-a_1(0)$ for $n=1$.

## Facts & Assumptions

[F1] [[def-integral-of-an-oriented-chart-supported-top-form]] defines the signed integral of a compactly supported top form inside one connected chart, including a half-space chart and a signed point when the dimension is zero. Its coefficient zero extension across a face is Riemann integrable.

[F2] [[def-induced-boundary-orientation]] orients the face by the outward-normal-first rule.

[F3] [[lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary]] gives the coordinate exterior derivative and support containment $\operatorname{supp}(d\eta)\subseteq\operatorname{supp}(\eta)$, including at the face.

[F4] [[cor-repeated-riemann-integrals-on-rectangles]] permits iterated integration of continuous coefficients on a compact rectangle in either coordinate order. [[thm-newton-leibniz-with-interior-derivative]] gives the endpoint difference of each one-variable derivative integral.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Compact support gives $R>0$ such that $\operatorname{supp}\eta$ is contained in $(-R,R)^{n-1}\times[0,R)$ and misses all artificial outer faces. By [F3], $$d\eta=\sum_{i=1}^n(-1)^{i-1}\partial_i a_i\,dx^1\wedge\cdots\wedge dx^n,$$ and its support lies in the same rectangle. The identity-chart integral [F1] is the Riemann integral of this coefficient on $[-R,R]^{n-1}\times[0,R]$; zero extension across $x_n=0$ does not change its value. For $n>1$, [F4] puts each $x_i$ integral first. The one-variable fundamental theorem gives zero for $i<n$, since both artificial endpoint values vanish, and gives $-a_n(x',0)$ for $i=n$. Multiplying by $(-1)^{n-1}$ yields $(-1)^n\int_{\mathbb R^{n-1}}a_n(x',0)\,dx'$. For $n=1$, the same fundamental theorem directly gives $-a_1(0)$. [F1, F3, F4]

2.1 The face is closed, so the restriction of the compact support is compact there. Pullback to the face kills every term containing $dx^n$, leaving $a_n(x',0)\,dx^1\wedge\cdots\wedge dx^{n-1}$. The outward vector is $-e_n$, and $(-e_n,e_1,\ldots,e_{n-1})$ has determinant $(-1)^n$ in the ambient standard frame. Thus [F1, F2] make the face-chart integral $(-1)^n\int_{\mathbb R^{n-1}}a_n(x',0)\,dx'$, exactly the value in step 1.1. [F1, F2, step 1.1]

3.1 For $n=1$, the outward vector at zero is $-e_1$, so [F1, F2] give the determinant-line point sign $-1$ and boundary integral $-a_1(0)$. This is the same endpoint difference from step 1.1. If the form is zero or its support misses the face, the same formulas give zero on both sides. [F1, F2, step 1.1, step 2.1] ∎
