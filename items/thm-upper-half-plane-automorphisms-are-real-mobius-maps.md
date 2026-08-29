---
id: thm-upper-half-plane-automorphisms-are-real-mobius-maps
kind: theorem
title: "Automorphisms of the upper half-plane are real Mobius maps"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-conformal-equivalence-and-automorphism-group, def-mobius-transformation, thm-disc-automorphisms-are-rotated-blaschke-factors, thm-mobius-transformations-biholomorphic-sphere]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Theorem 2.4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement

A map $f:\mathbb H\to\mathbb H$ is an automorphism of the upper half-plane if
and only if

$$f(z)=\frac{az+b}{cz+d}$$

for real numbers $a,b,c,d$ with $ad-bc>0$.

## Facts & Assumptions

**Given:** The upper half-plane $\mathbb H=\{z\in\mathbb C:\operatorname{Im}z>0\}$.

[F1] Automorphisms are biholomorphic self-maps in the sense of
[[def-conformal-equivalence-and-automorphism-group]].

[F2] Every disc automorphism is a rotated Blaschke factor
([[thm-disc-automorphisms-are-rotated-blaschke-factors]]).

[F3] Every Möbius transformation is a biholomorphism of the Riemann sphere
([[thm-mobius-transformations-biholomorphic-sphere]]).

[F4] A Möbius transformation has the form $(az+b)/(cz+d)$ with $ad-bc\ne0$
([[def-mobius-transformation]]).

## Proof

**Proof technique:** direct.

1.1 The Cayley transform $C(z)=(z-i)/(z+i)$ is Möbius by [F4], hence biholomorphic by [F3]; the identities $|z+i|^2-|z-i|^2=4\operatorname{Im}z$ and $C^{-1}(\zeta)=i(1+\zeta)/(1-\zeta)$ show that $C$ maps $\mathbb H$ biholomorphically onto $\mathbb D$. [F3, F4, given, algebra]

2.1 Assume $f\in\operatorname{Aut}(\mathbb H)$. Let $\alpha=f^{-1}(i)=u+iv$ with $v>0$, and define $m(z)=(z-u)/v$; this is a real Möbius automorphism of $\mathbb H$ with $m(\alpha)=i$, so $h:=f\circ m^{-1}$ is an automorphism of $\mathbb H$ fixing $i$. [F1, F4, step 1.1, given, construct]

3.1 The map $G:=C\circ h\circ C^{-1}$ is an automorphism of $\mathbb D$ fixing $0$, so [F2] gives $G(\zeta)=e^{i\theta}\zeta$ for some real $\theta$. Conjugating back and simplifying with $1\pm e^{i\theta}=2e^{i\theta/2}(\cos(\theta/2)\mp i\sin(\theta/2))$ gives $h(z)=\bigl(\cos(\theta/2)z+\sin(\theta/2)\bigr)\big/\bigl(-\sin(\theta/2)z+\cos(\theta/2)\bigr)$, which has real coefficients and determinant $1$; since $m$ also has real coefficients and positive determinant $v$, the composition $f=h\circ m$ is a real Möbius map with positive determinant. [F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 Conversely, if $f(z)=(az+b)/(cz+d)$ with $a,b,c,d\in\mathbb R$ and $ad-bc>0$, then $\operatorname{Im}f(z)=((ad-bc)\operatorname{Im}z)/|cz+d|^2>0$ for $z\in\mathbb H$, so $f[\mathbb H]\subseteq\mathbb H$; its inverse $(dz-b)/(-cz+a)$ has the same form with real coefficients and positive determinant, so $f\in\operatorname{Aut}(\mathbb H)$. [F1, F4, algebra] ∎
