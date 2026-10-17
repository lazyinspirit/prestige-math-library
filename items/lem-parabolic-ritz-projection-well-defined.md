---
id: lem-parabolic-ritz-projection-well-defined
kind: lemma
title: Existence, uniqueness, linearity, and boundedness of the Ritz projection
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-parabolic-ritz-projection
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12, §12.2, PDF pp. 104–105: the Ritz–Galerkin projection for the parabolic semidiscretization."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§2.2, pp. 4–5: the Ritz projection identity and its role in the semidiscrete error equation."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Let $V_h\subset V$ be finite-dimensional, and let $a$ be a real bounded
coercive bilinear form with constants $M$ and $\alpha>0$. For every $u\in V$
there is a unique $R_hu\in V_h$ satisfying the defining equation of
[[def-parabolic-ritz-projection]]. The map $R_h:V\to V_h$ is linear and
$$\|R_hu\|_V\le\frac M\alpha\|u\|_V.$$
The argument uses only finite-dimensional linear algebra; it adds no choice
axiom.

## Facts & Assumptions

**Given:** A finite-dimensional real subspace $V_h\subset V$, a real
bounded/coercive form $a$, and $u\in V$.

[F1] The Ritz equation for unknown $z_h\in V_h$ is
$a(z_h,v_h)=a(u,v_h)$ for every $v_h\in V_h$; its solution is denoted $R_hu$
([[def-parabolic-ritz-projection]]).

[F2] Boundedness and coercivity mean
$|a(x,y)|\le M\|x\|_V\|y\|_V$ and $a(x,x)\ge\alpha\|x\|_V^2$
([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

## Proof

1.1 If $V_h=\{0\}$, define $R_hu=0$; the Ritz equation, uniqueness, and norm bound are immediate. Otherwise fix a finite ordered basis $(e_1,\ldots,e_m)$ of $V_h$. Form the square matrix $K_{ij}=a(e_j,e_i)$ and vector $b_i=a(u,e_i)$. If $Kc=0$ and $x=\sum_jc_je_j$, then $a(x,e_i)=0$ for each $i$, hence $a(x,x)=\sum_i c_i a(x,e_i)=0$. Coercivity [F2] gives $x=0$, so basis independence gives $c=0$. Thus $K$ has zero kernel and, being square, is invertible. Its unique solution $Kc=b$ defines the unique $R_hu$ satisfying [F1]. [F1, F2, given, construct]

2.1 Testing [F1] with $v_h=R_hu$ gives $\alpha\|R_hu\|_V^2\le a(R_hu,R_hu)=a(u,R_hu) \le M\|u\|_V\|R_hu\|_V.$ If $R_hu=0$, the bound is immediate; otherwise divide by $\alpha\|R_hu\|_V$. [F1, F2, step 1.1, algebra]

3.1 For $u,w\in V$ and real scalars $c,d$, bilinearity shows that $cR_hu+dR_hw$ satisfies [F1] for $cu+dw$. Uniqueness from step 1.1 gives $R_h(cu+dw)=cR_hu+dR_hw$. The norm bound from step 2.1 proves boundedness, so $R_h$ is the required linear map. [F1, step 1.1, step 2.1, algebra] ∎