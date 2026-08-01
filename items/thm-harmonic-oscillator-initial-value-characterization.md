---
id: thm-harmonic-oscillator-initial-value-characterization
kind: theorem
title: "Existence and uniqueness for y''=-y with prescribed initial data"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
pipeline_run: null
---

## Statement

For $a,b\in\mathbb R$, the function $y(x)=a\cos x+b\sin x$ is the unique twice differentiable function on $\mathbb R$ satisfying
$$y''=-y,\qquad y(0)=a,\qquad y'(0)=b.$$

## Facts & Assumptions

**Given:** Reals $a,b$ and a twice differentiable solution $z$ of the displayed initial-value problem.

[L1] $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$, $\sin0=0$, and $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]).

[L2] The algebra of derivatives differentiates sums and products ([[thm-algebra-of-derivatives]]).

[L3] A differentiable function with zero derivative on $\mathbb R$ is constant ([[cor-zero-derivative-implies-constant]]).



## Proof

**Proof technique:** direct.

1.1 By [L1], $y=a\cos+b\sin$ satisfies $y''=-y$, $y(0)=a$, and $y'(0)=b$. [L1, algebra]

2.1 Put $h=z-y$. Then $h''=-h$, $h(0)=h'(0)=0$, and $E:=h^2+(h')^2$ has derivative $E'=2h(h+h'')=0$. [step 1.1, L2, algebra]

3.1 Thus $E$ is constantly $E(0)=0$; as both squares are nonnegative, $h=0$ everywhere and $z=y$. [step 2.1, L3, algebra] ∎
