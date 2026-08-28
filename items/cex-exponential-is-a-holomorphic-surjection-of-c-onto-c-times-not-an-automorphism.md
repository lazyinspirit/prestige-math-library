---
id: cex-exponential-is-a-holomorphic-surjection-of-c-onto-c-times-not-an-automorphism
kind: counterexample
title: "The exponential map is a holomorphic surjection C to C^× that is not an automorphism"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-automorphisms-punctured-plane, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-exponential-is-a-bijection-onto-positive-reals, thm-kernel-and-fibres-of-complex-exponential]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Statement refuted

Every holomorphic surjection $\mathbb C\to\mathbb C^\times$ is a biholomorphic
automorphism of $\mathbb C^\times$.

## Facts & Assumptions

**Given:** The complex exponential map $\exp:\mathbb C\to\mathbb C^\times$.

[L1] For real $x,y$, one has $\exp(x+iy)=e^x(\cos y+i\sin y)$, and the real exponential is onto $(0,\infty)$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[cor-exponential-is-a-bijection-onto-positive-reals]]).

[L2] $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

## Counterexample

**Proof technique:** direct.

1.1 If $w=r(\cos\theta+i\sin\theta)$ with $r>0$, [L1] gives a real $x$ with $e^x=r$, and then $\exp(x+i\theta)=w$. So the exponential map is surjective onto $\mathbb C^\times$. [L1, given, choose]

2.1 Fact [L2] gives $\exp(0)=\exp(2\pi i)=1$, so the exponential map is not injective. It is therefore a holomorphic surjection onto $\mathbb C^\times$ that is not an automorphism. [L2, given] ∎
