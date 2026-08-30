---
id: thm-ideals-in-a-dvr
kind: theorem
title: "Ideals in a DVR are powers of the maximal ideal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dvr-element-normal-form, def-uniformising-parameter]
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

Let $V$ be a discrete valuation ring with maximal ideal $\mathfrak m=(\pi)$,
where $\pi$ is a uniformiser. Then every nonzero ideal $I\subseteq V$ is of the
form
$$
I=(\pi^n)=\mathfrak m^n
$$
for a unique integer $n\ge0$.

## Facts & Assumptions

**Given:** A discrete valuation ring $V$ with maximal ideal $\mathfrak m=(\pi)$, where $\pi$ is a uniformiser.

[L1] Every nonzero element of the fraction field of $V$ is uniquely
$u\pi^n$ with $u$ a unit and $n\in\mathbb Z$
([[thm-dvr-element-normal-form]]).

[F1] A uniformiser generates the maximal ideal of a DVR
([[def-uniformising-parameter]]).

## Proof

**Proof technique:** direct.

1.1 Let $I\ne0$ be an ideal of $V$. Because $I\subseteq V$, every nonzero element of $I$ has valuation in $\mathbb Z_{\ge0}$. Choose $x\in I\setminus\{0\}$ with minimal valuation $n$. By [L1], $x=u\pi^n$ for a unit $u$, so $\pi^n=u^{-1}x\in I$. [L1, given, choose]

2.1 If $y\in I$ is nonzero, then [L1] gives $y=u'\pi^m$ for some unit $u'$ and $m\ge0$. Minimality of $n$ yields $m\ge n$, so $y=u'\pi^{m-n}\pi^n\in(\pi^n)$. Thus $I\subseteq(\pi^n)$, while step 1.1 gave $(\pi^n)\subseteq I$. Hence $I=(\pi^n)$. Since [F1] gives $\mathfrak m=(\pi)$, this is also $\mathfrak m^n$. [L1, F1, step 1.1]

3.1 If $(\pi^n)=(\pi^m)$, then $\pi^n\in(\pi^m)$ and $\pi^m\in(\pi^n)$, so $n\ge m$ and $m\ge n$. Therefore $n=m$, and the exponent is unique. [step 2.1, algebra] ∎
