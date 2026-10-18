---
id: cor-trigonometric-parity-and-pythagorean-identity
kind: corollary
title: "Parity and the Pythagorean identity for sine and cosine"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, cor-differentiable-implies-continuous, cor-zero-derivative-implies-constant]
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

For every real $x$,
$$\sin(-x)=-\sin x,\qquad\cos(-x)=\cos x,\qquad\sin^2x+\cos^2x=1.$$
Consequently $|\sin x|\le1$ and $|\cos x|\le1$.

## Facts & Assumptions

**Given:** A real $x$.

[L1] For all real $u,v$, $\sin(u+v)=\sin u\cos v+\cos u\sin v$ and $\cos(u+v)=\cos u\cos v-\sin u\sin v$ ([[thm-sine-and-cosine-addition-formulas]]).

[L2] The derivative identities and values at zero hold ([[thm-sine-and-cosine-derivatives]]).

[L3] The algebra of derivatives and the zero-derivative theorem hold ([[thm-algebra-of-derivatives]], [[cor-zero-derivative-implies-constant]]).

[L4] Differentiability implies continuity ([[cor-differentiable-implies-continuous]]).

## Proof

**Proof technique:** direct.

1.1 The derivative of $F(x)=\sin^2x+\cos^2x$ is $2\sin x\cos x-2\cos x\sin x=0$. [L2, L3, algebra]

2.1 Step 1.1 makes $F$ differentiable everywhere, hence continuous by [L4]. The zero-derivative theorem therefore makes $F$ constant, and $F(0)=1$, proving $\sin^2x+\cos^2x=1$; each square is then at most $1$. [step 1.1, L2, L3, L4, algebra]

3.1 Applying the addition formulas at $x+(-x)=0$ gives $$0=\sin x\cos(-x)+\cos x\sin(-x),\qquad 1=\cos x\cos(-x)-\sin x\sin(-x).$$ The coefficient matrix squares to the identity by step 2.1, so these equations give $\cos(-x)=\cos x$ and $\sin(-x)=-\sin x$. [L1, L2, step 2.1, algebra] ∎
