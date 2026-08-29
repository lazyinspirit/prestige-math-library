---
id: thm-sector-power-map-is-biholomorphic-on-narrow-sectors
kind: theorem
title: "Power maps are biholomorphisms on sectors of width less than $2\\pi/n$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complex-power-from-holomorphic-logarithm-branch, thm-branch-power-agrees-with-integer-powers, thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-complex-derivatives, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, def-biholomorphic-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §1.2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Let $n\ge1$ be an integer, let $\alpha<\beta$ be real numbers with
$\beta-\alpha<2\pi/n$, and define

$$S:=\{\,re^{i\theta}:r>0,\ \alpha<\theta<\beta\,\},\qquad T:=\{\,\rho e^{i\phi}:\rho>0,\ n\alpha<\phi<n\beta\,\}.$$

Then the power map $f(z)=z^n$ is a biholomorphism from $S$ onto $T$.

## Facts & Assumptions

**Given:** The integer $n\ge1$ and the sectors $S,T$ above.

[F1] On the slit plane the principal logarithm is holomorphic and satisfies
$\exp(\operatorname{Log}z)=z$
([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]).

[F2] If $L$ is a holomorphic logarithm branch on a domain, then $z^\alpha_L:=\exp(\alpha L(z))$ defines the branch power ([[def-complex-power-from-holomorphic-logarithm-branch]]).

[F3] For integer exponents, branch powers agree with ordinary powers
([[thm-branch-power-agrees-with-integer-powers]]).

[F4] The complex exponential is entire ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F5] A map is biholomorphic when it is bijective, holomorphic, and has
holomorphic inverse ([[def-biholomorphic-map]]).

## Proof

**Proof technique:** direct.

1.1 Put $\gamma=(\alpha+\beta)/2$ and $\delta=(\beta-\alpha)/2$, so $\delta<\pi/n\le\pi$; if $z\in S$ then $e^{-i\gamma}z$ has argument in $(-\delta,\delta)\subset(-\pi,\pi)$, so $L(z):=\operatorname{Log}(e^{-i\gamma}z)+i\gamma$ is a holomorphic logarithm branch on $S$ by [F1]. [F1, given, construct]

2.1 By [F2] and [F3], $f(z)=z^n=\exp(nL(z))$ on $S$, so $f$ is holomorphic there; moreover $\arg f(z)=n\arg z$ with $n\arg z\in(n\alpha,n\beta)$, hence $f[S]\subseteq T$. [F2, F3, F4, step 1.1, algebra]

2.2 If $w\in T$, then $e^{-in\gamma}w$ has argument in $(-n\delta,n\delta)\subset(-\pi,\pi)$, so $M(w):=\operatorname{Log}(e^{-in\gamma}w)+in\gamma$ is a holomorphic logarithm branch on $T$ by [F1]; define $g(w):=\exp(M(w)/n)$. Then $g$ is holomorphic on $T$, $\arg g(w)\in(\alpha,\beta)$, and $g[T]\subseteq S$. [F1, F4, step 1.1, construct, algebra]

3.1 By [F2] and [F3], $g(w)^n=\exp(M(w))=w$ for $w\in T$, while for $z\in S$ one has $g(f(z))=\exp(nL(z)/n)=z$ because $nL(z)$ has imaginary part in $(n\alpha,n\beta)$ and so is the chosen branch value $M(f(z))$. Therefore $g=f^{-1}$, and [F5] makes $f$ biholomorphic from $S$ onto $T$. [F2, F3, F5, step 2.1, step 2.2, algebra] ∎
