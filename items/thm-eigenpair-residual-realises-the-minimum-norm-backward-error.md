---
id: thm-eigenpair-residual-realises-the-minimum-norm-backward-error
kind: theorem
title: "For a unit vector $x$, the smallest perturbation making $(\\mu,x)$ an exact eigenpair has spectral norm $\\|Ax-\\mu x\\|_2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-eigenpair-residual-and-normwise-backward-error,
       def-operator-norm-on-a-finite-dimensional-inner-product-space,
       thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Netlib Templates, Numerical Stability and Conditioning"
      url: "https://www.netlib.org/utk/people/JackDongarra/etemplates/node20.html"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let $A\in M_n(\mathbb F)$,
let $\mu\in\mathbb F$, and let $x\in\mathbb F^n$
satisfy $\|x\|_2=1$. Put $r:=Ax-\mu x$. Then

$$ \eta(A,\mu,x)=\|r\|_2. $$

In particular, the rank-one perturbation $E:=-rx^*$ attains the infimum.

## Facts & Assumptions

**Given:** A unit vector $x\in\mathbb F^n$, a scalar $\mu\in\mathbb F$, a
matrix $A\in M_n(\mathbb F)$, and the residual $r=Ax-\mu x$, where
$\mathbb F\in\{\mathbb R,\mathbb C\}$.

[L1] The residual and the normwise backward error are defined by $r=Ax-\mu x$ and $\eta(A,\mu,x)=\inf\{\|E\|_2:(A+E)x=\mu x\}$ ([[def-eigenpair-residual-and-normwise-backward-error]]).

[L2] The induced operator norm satisfies $\|Ey\|_2\le\|E\|_2\|y\|_2$
([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[L3] Cauchy--Schwarz gives $|\langle x,y\rangle|\le\|x\|_2\|y\|_2$
([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 If $(A+E)x=\mu x$, then $Ex=-(Ax-\mu x)=-r$. Because $\|x\|_2=1$, [L2] gives $$ \|E\|_2\ge \|Ex\|_2=\|r\|_2. $$ So every admissible perturbation has norm at least $\|r\|_2$. [L1, L2, algebra]

1.2 Define $E:=-rx^*$. Then $$ Ex=-r(x^*x)=-r, $$ so $(A+E)x=\mu x$. For any unit vector $y$, [L3] gives $$ \|Ey\|_2=\|r\|_2\,|x^*y|\le \|r\|_2, $$ with equality at $y=x$. Hence $\|E\|_2=\|r\|_2$. [L1, L3, construct, algebra]

2.1 Step 1.1 gives the lower bound and step 1.2 attains it, so $\eta(A,\mu,x)=\|r\|_2$. [step 1.1, step 1.2] ∎
