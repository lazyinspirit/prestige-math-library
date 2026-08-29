---
id: thm-schwarz-pick-lemma-on-the-unit-disc
kind: theorem
title: "Schwarz-Pick lemma on the unit disc"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-blaschke-factor-is-a-disc-automorphism, thm-unit-disc-schwarz-lemma-with-rigidity, thm-chain-rule-for-complex-derivatives]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 Exercise 2.10"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Jiri Lebl, Guide to Cultivating Complex Analysis, Exercise 3.5.10"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Statement

Let $f:\mathbb D\to\mathbb D$ be holomorphic. Then for every $a,z\in\mathbb D$,

$$\left|\frac{f(z)-f(a)}{1-\overline{f(a)}\,f(z)}\right|\le\left|\frac{z-a}{1-\overline a\,z}\right|.$$

Equivalently,

$$|\varphi_{f(a)}(f(z))|\le|\varphi_a(z)|.$$

Moreover,

$$|f'(a)|\le\frac{1-|f(a)|^2}{1-|a|^2}\qquad(a\in\mathbb D),$$

and if equality holds for some distinct $a,z\in\mathbb D$ or in the derivative
inequality at some $a\in\mathbb D$, then $f$ is an automorphism of $\mathbb D$.

## Facts & Assumptions

**Given:** A holomorphic self-map $f:\mathbb D\to\mathbb D$ and points $a,z\in\mathbb D$.

[F1] Every Blaschke factor $\varphi_c$ is an automorphism of $\mathbb D$
([[thm-blaschke-factor-is-a-disc-automorphism]]).

[F2] A disc self-map fixing $0$ satisfies Schwarz's lemma, with equality only
for rotations ([[thm-unit-disc-schwarz-lemma-with-rigidity]]).

[F3] Holomorphic compositions satisfy the chain rule
([[thm-chain-rule-for-complex-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Put $b=f(a)$ and $F=\varphi_b\circ f\circ\varphi_a$. By [F1], the two Blaschke factors are disc automorphisms, so $F:\mathbb D\to\mathbb D$ is holomorphic and satisfies $F(0)=\varphi_b(f(a))=0$. [F1, given, construct]

2.1 Applying [F2] to $F$ at the point $\varphi_a(z)\in\mathbb D$ gives $|F(\varphi_a(z))|\le|\varphi_a(z)|$, that is, $|\varphi_b(f(z))|\le|\varphi_a(z)|$. This is exactly the displayed pseudohyperbolic inequality. [F1, F2, step 1.1, algebra]

2.2 Since $\varphi_a'(0)=|a|^2-1$ and $\varphi_b'(b)=-1/(1-|b|^2)$, the chain rule [F3] gives $|F'(0)|=|\varphi_b'(b)|\,|f'(a)|\,|\varphi_a'(0)|=(1-|a|^2)|f'(a)|/(1-|b|^2)$. Applying the derivative part of [F2] to $F$ yields the stated bound for $|f'(a)|$. [F2, F3, step 1.1, algebra]

3.1 If equality holds in the pseudohyperbolic inequality for some $z\ne a$, then equality holds in Schwarz's lemma for $F$ at the nonzero point $\varphi_a(z)$; if equality holds in the derivative inequality, then $|F'(0)|=1$. In either case [F2] makes $F$ a rotation, so $f=\varphi_b\circ F\circ\varphi_a$ is an automorphism by [F1]. [F1, F2, step 2.1, step 2.2, cases, algebra] ∎
