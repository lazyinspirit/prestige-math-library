---
id: lem-ip-tcc-residual-derivative-comparison
kind: lemma
title: Tangential cone control compares derivative and data residuals
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-tangential-cone-condition
  - cor-inner-product-induces-a-norm
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Theorem 9.8"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Barbara Kaltenbacher, Frank Schöpfer, and Thomas Schuster, Iterative methods for nonlinear ill-posed problems in Banach spaces, §2.3"
      url: "https://www.f08.uni-stuttgart.de/.content/media/downloads/Mathematik/mathematische_berichte/2008/2008-005.pdf"
verification:
  precheck: pass
---

## Statement

Let $X,Y$ be real Hilbert spaces, let $U\subseteq X$ be open, and let $F:U\to Y$ be Fréchet differentiable at $x\in U$. Suppose that for some $\delta>0$ with $\overline B_\delta(x)\subseteq U$ and some $0\le\eta<1$, the local tangential cone condition at $x$ holds on radius $\delta$ with constant $\eta$. Then for every $h\in X$ with $\|h\|_X\le\delta$,

$$
(1-\eta)\,\|F(x+h)-F(x)\|_Y\le\|F'(x)h\|_Y\le(1+\eta)\,\|F(x+h)-F(x)\|_Y.
$$

## Statement references

[[def-ip-tangential-cone-condition|Local tangential cone condition]]

[Christian Clason, *Regularization of Inverse Problems*, Theorem 9.8](https://arxiv.org/pdf/2001.00617v2)

[Barbara Kaltenbacher, Frank Schöpfer, and Thomas Schuster, *Iterative methods for nonlinear ill-posed problems in Banach spaces*, §2.3](https://www.f08.uni-stuttgart.de/.content/media/downloads/Mathematik/mathematische_berichte/2008/2008-005.pdf)

## Facts & Assumptions

**Given:** Real Hilbert spaces $X,Y$, an open set $U\subseteq X$, a map $F:U\to Y$ Fréchet differentiable at $x\in U$, a radius $\delta>0$ with $\overline B_\delta(x)\subseteq U$, a constant $0\le\eta<1$ for which the local tangential cone condition holds at $x$, and $h\in X$ with $\|h\|_X\le\delta$.

[F1] The local tangential cone condition gives $\|F(x+h)-F(x)-F'(x)h\|_Y\le\eta\|F(x+h)-F(x)\|_Y$ for every $h$ with $\|h\|_X\le\delta$ ([[def-ip-tangential-cone-condition]]).

[F2] The induced norm of a real inner-product space satisfies $\|u+v\|\le\|u\|+\|v\|$ ([[cor-inner-product-induces-a-norm]]).

## Proof

1.1 Put $d:=F(x+h)-F(x)$ and $e:=d-F'(x)h$. By [F1], $\|e\|_Y\le\eta\|d\|_Y$. Since $F'(x)h=d-e$, [F2] gives $\|F'(x)h\|_Y\le\|d\|_Y+\|e\|_Y\le(1+\eta)\|d\|_Y$. [given, F1, F2, construct]

2.1 Since $d=F'(x)h+e$, [F2] gives $\|d\|_Y\le\|F'(x)h\|_Y+\|e\|_Y\le\|F'(x)h\|_Y+\eta\|d\|_Y$ by [F1]. Rearranging yields $(1-\eta)\|d\|_Y\le\|F'(x)h\|_Y$; combining this with step 1.1 proves both inequalities. [F1, F2, step 1.1, algebra] ∎
