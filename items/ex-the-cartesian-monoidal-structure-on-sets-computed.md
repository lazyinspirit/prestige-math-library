---
id: ex-the-cartesian-monoidal-structure-on-sets-computed
kind: example
title: "The cartesian monoidal structure on sets computed"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-set-cat-and-every-complete-category-are-cartesian-monoidal]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

In $\mathbf{Set}$, the tensor product is cartesian product and the unit object
is a singleton set. For
$X=\{a,b\}$, $Y=\{0,1\}$, and $Z=\{\star,\diamond\}$ one has

$$X\otimes Y=X\times Y=\{(a,0),(a,1),(b,0),(b,1)\},$$

and the associator and unitors are the usual rebracketing and projection
bijections:

$$\alpha_{X,Y,Z}(((x,y),z))=(x,(y,z)),$$

$$\lambda_X(*,x)=x,\qquad \rho_X(x,*)=x.$$

## Facts & Assumptions

**Given:** The cartesian monoidal structure on $\mathbf{Set}$.

[L1] $\mathbf{Set}$ is cartesian monoidal ([[cor-set-cat-and-every-complete-category-are-cartesian-monoidal]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], tensor in $\mathbf{Set}$ is cartesian product, so the displayed set for $X\otimes Y$ is correct. [L1]

2.1 The map $\alpha_{X,Y,Z}$ sends each element of $((X\times Y)\times Z)$ to the same triple with the other bracketing, and its inverse is $(x,(y,z))\mapsto((x,y),z)$. [step 1.1]

3.1 The maps $\lambda_X(*,x)=x$ and $\rho_X(x,*)=x$ are bijections with inverses $x\mapsto(*,x)$ and $x\mapsto(x,*)$. So this concrete example realizes the cartesian monoidal structure exactly as claimed. [step 2.1] ∎
