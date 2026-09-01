---
id: lem-operator-norm-is-a-norm
kind: lemma
title: "The operator norm is a norm on the space of bounded linear operators"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-operator-norm, def-space-of-bounded-linear-operators]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-28
---

## Statement

Let $X$ and $Y$ be normed spaces over the same scalar field. On the vector space
$\mathcal B(X,Y)$ of bounded linear operators, the operator norm of
[[def-operator-norm]] is a norm.

## Facts & Assumptions

**Given:** Bounded linear operators $S,T \in \mathcal B(X,Y)$, a scalar
$\lambda$, and a vector $x \in X$.

[L1] The operator norm is the supremum of $\|Tx\|$ over the unit ball of $X$,
and it satisfies $\|Tx\| \le \|T\|\,\|x\|$ for every $x \in X$
([[def-operator-norm]]).

[L2] $\mathcal B(X,Y)$ is the space of bounded linear operators, with pointwise
addition and scalar multiplication ([[def-space-of-bounded-linear-operators]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\|T\| \ge 0$ for every $T \in \mathcal B(X,Y)$. If $\|T\| = 0$, then $\|Tx\| \le 0$ for every $x$ with $\|x\| \le 1$, so $Tx = 0$ there. If $x \ne 0$, apply this to $u := x/\|x\|$ to get $Tu=0$, hence $Tx = \|x\|Tu = 0$. Thus $\|T\|=0$ implies $T=0$. [L1, algebra]

1.2 Conversely, if $T=0$ then $\|Tx\|=0$ for every $x$ in the unit ball, so the supremum in [L1] is $0$. This proves definiteness. [L1]

1.3 For every $x$ with $\|x\| \le 1$, [L2] and [L1] give $\|(\lambda T)x\| = |\lambda|\,\|Tx\| \le |\lambda|\,\|T\|$. Taking the supremum over the unit ball yields $\|\lambda T\| \le |\lambda|\,\|T\|$. The reverse inequality is immediate when $\lambda = 0$, and for $\lambda \ne 0$ the same estimate applied to $T = \lambda^{-1}(\lambda T)$ gives $\|T\| \le |\lambda|^{-1}\|\lambda T\|$. Hence $\|\lambda T\| = |\lambda|\,\|T\|$. [L1, L2, algebra]

1.4 For every $x$ with $\|x\| \le 1$, [L2] and [L1] give $\|(S+T)x\| \le \|Sx\| + \|Tx\| \le \|S\| + \|T\|$. Taking the supremum over the unit ball gives $\|S+T\| \le \|S\| + \|T\|$. [L1, L2, algebra]

2.1 Steps 1.1, 1.2, 1.3, and 1.4 are the norm axioms, so the operator norm is a norm on $\mathcal B(X,Y)$. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
