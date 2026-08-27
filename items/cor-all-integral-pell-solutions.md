---
id: cor-all-integral-pell-solutions
kind: corollary
title: "All integral Pell solutions are $\\pm \\varepsilon_D^k$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-integral-pell-solutions-form-a-group, thm-all-positive-pell-solutions-are-fundamental-powers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Pell's Equation, I"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn1.pdf"
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
pipeline_run: null
---

## Statement

Let $\varepsilon_D$ be the fundamental Pell solution. Every integral solution of
$$x^2-Dy^2=1$$
is represented uniquely in $\mathbb Z[\sqrt D]$ as
$$\pm\varepsilon_D^k,\qquad k\in\mathbb Z.$$

## Facts & Assumptions

**Given:** An integral Pell solution $\alpha\in\mathbb Z[\sqrt D]$.

[F1] The norm-one elements of $\mathbb Z[\sqrt D]$ form an abelian group ([[prop-integral-pell-solutions-form-a-group]]).

[F2] Every positive Pell solution is a unique positive power of $\varepsilon_D$ ([[thm-all-positive-pell-solutions-are-fundamental-powers]]).

## Proof

**Proof technique:** direct.

1.1 The element $\alpha$ is nonzero because $N_D(\alpha)=1$. If $\alpha=1$ or $\alpha=-1$, then already $$\alpha=\pm\varepsilon_D^0.$$ Assume now that $\alpha\ne\pm1$. If $\alpha>1$, then $\alpha^{-1}=1/\alpha$ satisfies $0<\alpha^{-1}<1$. Writing $\alpha=x+y\sqrt D$, one gets $$x=\frac{\alpha+\alpha^{-1}}2>0,\qquad y=\frac{\alpha-\alpha^{-1}}{2\sqrt D}>0,$$ so $\alpha$ is a positive Pell solution. Hence [F2] gives $\alpha=\varepsilon_D^k$ for a unique $k\ge1$. If $0<\alpha<1$, then $\alpha^{-1}>1$, so the previous argument shows that $\alpha^{-1}$ is a positive Pell solution; [F1] and [F2] therefore give $\alpha^{-1}=\varepsilon_D^k$ for a unique $k\ge1$, hence $\alpha=\varepsilon_D^{-k}$. If $\alpha<0$, apply the previous positive cases to $-\alpha$, whose norm is still $1$. Therefore $\alpha=\pm\varepsilon_D^m$ for some integer $m$. [F1, F2, given, algebra]

2.1 The representation is unique. Indeed, if $$\sigma\varepsilon_D^m=\tau\varepsilon_D^n,\qquad \sigma,\tau\in\{\pm1\},$$ then the powers $\varepsilon_D^m$ and $\varepsilon_D^n$ are positive real numbers, so equality forces $\sigma=\tau$. After cancelling the common sign, suppose for contradiction that $m<n$. Then [F1] gives $$1=\varepsilon_D^{n-m}.$$ Multiplying by $\varepsilon_D$ yields $$\varepsilon_D=\varepsilon_D^{n-m+1}.$$ Both sides are representations of the positive Pell solution $\varepsilon_D$, so [F2] forces $n-m+1=1$, impossible because $m<n$. The case $n<m$ is symmetric. Hence $m=n$. [F1, F2, step 1.1, algebra] ∎
