---
id: thm-slit-plane-root-branch-biholomorphism-to-a-sector
kind: theorem
title: "A slit-plane root branch biholomorphically parametrizes a sector"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complex-power-from-holomorphic-logarithm-branch, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, thm-branch-power-agrees-with-integer-powers, thm-complex-exponential-is-entire-with-derivative-itself, def-biholomorphic-map]
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
---

## Statement

Let $n\ge1$ be an integer, let

$$S:=\mathbb C\setminus\{x\in\mathbb R:x\le0\},\qquad V_n:=\{\,re^{i\theta}:r>0,\ -\pi/n<\theta<\pi/n\,\},$$

and define

$$R_n(z):=\exp\!\left(\frac{\operatorname{Log}z}{n}\right)\qquad(z\in S).$$

Then $R_n$ is a biholomorphism from $S$ onto $V_n$, and its inverse is the
power map $w\mapsto w^n$ on $V_n$.

## Facts & Assumptions

**Given:** The integer $n\ge1$, the slit plane $S$, and the map $R_n$ above.

[F1] The principal logarithm is holomorphic on $S$ and satisfies $\exp(\operatorname{Log}z)=z$ ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]).

[F2] Branch powers are defined by $z^\alpha_L=\exp(\alpha L(z))$ ([[def-complex-power-from-holomorphic-logarithm-branch]]).

[F3] For integer exponents, branch powers agree with ordinary powers ([[thm-branch-power-agrees-with-integer-powers]]).

[F4] A map is biholomorphic when it is bijective, holomorphic, and has holomorphic inverse ([[def-biholomorphic-map]]).

## Proof

**Proof technique:** direct.

1.1 Since $\operatorname{Log}$ is holomorphic on $S$ by [F1], the map $R_n(z)=\exp(\operatorname{Log}z/n)$ is holomorphic on $S$; if $z=re^{i\theta}$ with $-\pi<\theta<\pi$, then $\arg R_n(z)=\theta/n\in(-\pi/n,\pi/n)$, so $R_n[S]\subseteq V_n$. [F1, given, algebra]

2.1 If $w\in V_n$, write $w=re^{i\theta}$ with $r>0$ and $-\pi/n<\theta<\pi/n$. Then $w^n=r^ne^{in\theta}$ lies in $S$ because $n\theta\in(-\pi,\pi)$, and the principal logarithm of $w^n$ is $$\operatorname{Log}(w^n)=\log(r^n)+in\theta=n(\log r+i\theta).$$ Therefore $$R_n(w^n)=\exp\!\left(\frac{\operatorname{Log}(w^n)}{n}\right)=\exp(\log r+i\theta)=w.$$ [F1, step 1.1, algebra]

3.1 For $z\in S$, [F2] with [F3] gives $(R_n(z))^n=\exp(\operatorname{Log}z)=z$ by [F1], so the inverse of $R_n$ on $V_n$ is $w\mapsto w^n$. Therefore [F4] makes $R_n:S\to V_n$ biholomorphic. [F1, F2, F3, F4, step 2.1, algebra] ∎
