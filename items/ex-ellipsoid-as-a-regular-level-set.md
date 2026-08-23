---
id: ex-ellipsoid-as-a-regular-level-set
kind: example
title: 'A positive-definite quadratic ellipsoid is a regular level set'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-regular-level-set-local-graph-theorem, def-tangent-space-to-a-regular-level-set, def-definite-and-indefinite-hessian-quadratic-forms, def-euclidean-inner-product, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, regular-level examples'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
pipeline_run: null
---

## Example

Let $A$ be a symmetric positive-definite real $m\times m$ matrix and put $F(x)=\langle Ax,x\rangle$. The ellipsoid $F^{-1}(1)$ is a regular level set, and
$$T_xF^{-1}(1)=(Ax)^\perp.$$

## Facts & Assumptions

**Given:** A symmetric positive-definite matrix $A$ and the quadratic function $F$.

[L1] Positive definiteness means $\langle Ax,x\rangle>0$ for every $x\ne0$ ([[def-definite-and-indefinite-hessian-quadratic-forms]], [[def-euclidean-inner-product]]).

[L2] The power and product rules give continuous partial derivatives for $F(x)=\langle Ax,x\rangle$; the Jacobian and continuous-partials theorem therefore give $DF(x)h=\langle Ah,x\rangle+\langle Ax,h\rangle=2\langle Ax,h\rangle$ for symmetric $A$ ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L3] At a regular level point, the level is locally a graph and its tangent space is the derivative kernel ([[cor-regular-level-set-local-graph-theorem]], [[def-tangent-space-to-a-regular-level-set]]).

## Verification

**Proof technique:** direct.

1.1 If $F(x)=1$, then $x\ne0$ by [L1], and $Ax\ne0$ because $Ax=0$ would give $F(x)=0$. [given, L1]

2.1 By [L2], $DF(x)(Ax)=2\|Ax\|_2^2>0$, so $DF(x)$ is a nonzero functional and hence surjective onto $\mathbb R$. [step 1.1, L2]

3.1 Therefore $1$ is a regular value, and [L3] gives $T_xF^{-1}(1)=\ker DF(x)=\{h:\langle Ax,h\rangle=0\}=(Ax)^\perp$. [step 2.1, L3]

4.1 The calculation also shows that no singular point can occur on the asserted level; positive definiteness and the level value $1$ exclude the only possible degeneracy $x=0$. [step 1.1, step 3.1] ∎
