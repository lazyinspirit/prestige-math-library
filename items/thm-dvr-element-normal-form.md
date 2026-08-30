---
id: thm-dvr-element-normal-form
kind: theorem
title: "Every nonzero fraction is a unit times a power of a uniformiser"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniformising-parameter, def-discrete-valuation-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., (23.1)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Discrete valuation rings after Example 20.1"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a discrete valuation ring with fraction field $K$, let $v$ be its
discrete valuation, and let $\pi\in V$ be a uniformiser. Then every nonzero
element $x\in K^\times$ has a unique expression
$$
x=u\pi^n
$$
with $u\in V^\times$ and $n\in\mathbb Z$.

## Facts & Assumptions

**Given:** A discrete valuation ring $V\subseteq K$, its discrete valuation $v$, and a uniformiser $\pi\in V$.

[F1] A uniformiser is an element of value $1$ in a discrete valuation ring ([[def-uniformising-parameter]]).

[F2] A discrete valuation ring is the nonnegative locus of a surjective
valuation $v:K\to\mathbb Z\cup\{\infty\}$ ([[def-discrete-valuation-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $x\in K^\times$ and put $n:=v(x)\in\mathbb Z$. Since $v(\pi)=1$ by [F1], one has $v(x\pi^{-n})=v(x)-n\,v(\pi)=0$. Setting $u:=x\pi^{-n}$, [F2] gives $u\in V$ and $u^{-1}\in V$, hence $u\in V^\times$. Therefore $x=u\pi^n$. [F1, F2, given]

2.1 Suppose also that $x=u'\pi^m$ with $u'\in V^\times$ and $m\in\mathbb Z$. Applying $v$ gives $n=v(x)=v(u)+n=v(u')+m=m$ because units have valuation $0$. Then $u=x\pi^{-n}=x\pi^{-m}=u'$. So the expression is unique. [step 1.1, F2, algebra] ∎
