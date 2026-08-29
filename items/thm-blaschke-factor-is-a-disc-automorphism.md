---
id: thm-blaschke-factor-is-a-disc-automorphism
kind: theorem
title: "Blaschke factors are automorphisms of the disc"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-unit-disc-upper-half-plane-and-blaschke-factor, def-biholomorphic-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Jiri Lebl, Guide to Cultivating Complex Analysis, Proposition 3.5.2"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Statement

For each $a\in\mathbb D$, the Blaschke factor

$$\varphi_a(z)=\frac{a-z}{1-\overline a\,z}$$

is a biholomorphic self-map of $\mathbb D$. More precisely,

$$\varphi_a(\mathbb D)=\mathbb D\qquad\text{and}\qquad \varphi_a(\varphi_a(z))=z\quad(z\in\mathbb D),$$

so $\varphi_a$ is an automorphism of the disc.

## Facts & Assumptions

**Given:** A point $a\in\mathbb D$.

[F1] The unit disc is $\mathbb D=\{z\in\mathbb C:|z|<1\}$, and the Blaschke
factor is $\varphi_a(z)=(a-z)/(1-\overline a\,z)$ with denominator nonzero on
$\mathbb D$ ([[def-unit-disc-upper-half-plane-and-blaschke-factor]]).

[F2] A map between complex domains is biholomorphic exactly when it is bijective,
holomorphic, and has holomorphic inverse ([[def-biholomorphic-map]]).

## Proof

**Proof technique:** direct.

1.1 For $z\in\mathbb D$, [F1] gives $1-|\varphi_a(z)|^2=\bigl(|1-\overline a z|^2-|a-z|^2\bigr)/|1-\overline a z|^2=(1-|a|^2)(1-|z|^2)/|1-\overline a z|^2>0$, so $|\varphi_a(z)|<1$ and $\varphi_a(\mathbb D)\subseteq\mathbb D$. [F1, given, algebra]

2.1 A direct simplification from [F1] gives $\varphi_a(\varphi_a(z))=\bigl(a-\frac{a-z}{1-\overline a z}\bigr)\big/\bigl(1-\overline a\,\frac{a-z}{1-\overline a z}\bigr)=z$ for $z\in\mathbb D$, so $\varphi_a$ is its own inverse on $\mathbb D$. [F1, step 1.1, algebra]

3.1 By [F1], $\varphi_a$ is holomorphic on $\mathbb D$; step 2.1 makes it bijective with holomorphic inverse itself, so [F2] makes $\varphi_a$ biholomorphic on $\mathbb D$. [F1, F2, step 2.1] ∎
