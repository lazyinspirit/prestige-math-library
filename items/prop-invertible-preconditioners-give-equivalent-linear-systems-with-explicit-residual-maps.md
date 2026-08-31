---
id: prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps
kind: proposition
title: "Invertible preconditioners give equivalent linear systems, with the transformed residuals and errors written explicitly"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-right-and-symmetric-positive-definite-preconditioning,
       def-invertible-matrix-and-general-linear-group]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods"
      url: "https://www.netlib.org/templates/templates.html"
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient Method Without the Agonizing Pain"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
---

## Statement

Let $Ax=b$ be a linear system. In the error formulas in parts 2 and 3, assume
$x_*$ is a solution of $Ax=b$ and put $e:=x-x_*$. The corresponding
transformed exact solutions are denoted by $y_*$.

1. If $P\in\operatorname{GL}_n(\mathbb F)$ and
   $$P^{-1}Ax=P^{-1}b,$$
   then the left-preconditioned system has exactly the same solution set as
   $Ax=b$. Its residual is $\tilde r=P^{-1}r$, where $r=b-Ax$.
2. If $P\in\operatorname{GL}_n(\mathbb F)$ and $y:=Px$, then
   $$AP^{-1}y=b$$
   is equivalent to $Ax=b$. Its residual is the same physical residual
   $\hat r=b-AP^{-1}y=r$, and its error is $\hat e=y-y_*=Pe$, where
   $y_*:=Px_*$.
3. If $M=CC^*$ is Hermitian positive definite and $y:=C^*x$, then
   $$C^{-1}AC^{-*}y=C^{-1}b$$
   is equivalent to $Ax=b$. Its residual is
   $$r_{\mathrm{sym}}=C^{-1}r,$$
   and its error is
   $$e_{\mathrm{sym}}=y-y_*=C^*e,$$
   where $y_*:=C^*x_*$.

## Facts & Assumptions

**Given:** A linear system $Ax=b$, the left, right, and symmetric preconditioned
forms from the definition, and, when an error formula is used, a solution
$x_*$ of $Ax=b$.

[F1] Left, right, and symmetric preconditioning are exactly the transformed
systems
$$P^{-1}Ax=P^{-1}b,\qquad AP^{-1}y=b,\qquad C^{-1}AC^{-*}y=C^{-1}b$$
with the accompanying variable changes
([[def-left-right-and-symmetric-positive-definite-preconditioning]]).

[L1] An invertible matrix has a two-sided inverse
([[def-invertible-matrix-and-general-linear-group]]).

## Proof
**Proof technique:** direct.

1.1 For left preconditioning, [L1] implies $$Ax=b \iff P^{-1}Ax=P^{-1}b.$$ For any trial vector $x$, the transformed residual is $$P^{-1}b-P^{-1}Ax=P^{-1}(b-Ax)=P^{-1}r.$$ [F1, L1, algebra]

1.2 For right preconditioning, put $y=Px$, so $x=P^{-1}y$ by [L1]. Then $$Ax=b \iff AP^{-1}y=b.$$ The right-preconditioned residual is $$b-AP^{-1}y=b-Ax=r,$$ and if $y_*=Px_*$ then $$y-y_*=P(x-x_*)=Pe.$$ [F1, L1, algebra]

2.1 For symmetric preconditioning, [F1] writes $x=C^{-*}y$, equivalently $y=C^*x$. Therefore $$Ax=b \iff C^{-1}AC^{-*}y=C^{-1}b.$$ If $y_*=C^*x_*$, then $$C^{-1}b-C^{-1}AC^{-*}y=C^{-1}(b-Ax)=C^{-1}r,$$ and $$y-y_*=C^*(x-x_*)=C^*e.$$ Thus each transformed system is equivalent to the original one, with the displayed residual and error maps. [F1, L1, algebra] ∎
