---
id: ex-choice-free-discontinuous-functional-on-c00
kind: example
title: "A choice-free discontinuous linear functional on c_00"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-norm-and-normed-space, def-linear-map,
       rem-discontinuous-functionals-on-banach-spaces-and-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Christopher Heil, A Basis Theory Primer"
      url: "https://heil.math.gatech.edu/papers/bases.pdf"
pipeline_run: frontier-29
---

## Example

Let

$$c_{00}:=\{x=(x_n)_{n\ge0}:x_n=0\text{ for all but finitely many }n\}$$

with the supremum norm $\|x\|_\infty:=\sup_n |x_n|$, a norm in the sense of
[[def-norm-and-normed-space]]. Define

$$f:c_{00}\to\mathbb R,\qquad f(x):=\sum_{n=0}^\infty (n+1)x_n.$$

Because every $x\in c_{00}$ has finite support, the displayed sum is really
finite. The map $f$ is linear but unbounded, hence discontinuous.

## Facts & Assumptions

**Given:** The space $c_{00}$ with its supremum norm and the standard unit
vectors $e_n$.

[L1] Linearity means preserving scalar combinations
([[def-linear-map]]).

[L2] A normed space is a vector space equipped with a norm
([[def-norm-and-normed-space]]).

## Verification

**Proof technique:** direct.

1.1 Because every element of $c_{00}$ has finite support, the displayed sum for $f(x)$ has only finitely many nonzero terms. Therefore $f$ is well defined, and termwise addition shows $f(ax+by)=af(x)+bf(y)$ for all scalars $a,b$ and all $x,y\in c_{00}$. Thus $f$ is linear by [L1]. [L1, L2, algebra]

2.1 For each $n$, the unit vector $e_n$ satisfies $\|e_n\|_\infty=1$ and $f(e_n)=n+1$. Hence the values of $f$ on the unit sphere are unbounded, so no constant $C$ can satisfy $|f(x)|\le C\|x\|_\infty$ for all $x\in c_{00}$. Thus $f$ is unbounded. [step 1.1, algebra]

3.1 Every bounded linear functional on a normed space is continuous at $0$, so an unbounded linear functional cannot be continuous. Therefore $f$ is a discontinuous linear functional on $c_{00}$. [step 2.1, assume-contra, discharge-contradiction] ∎

## Remarks

- This is the explicit incomplete-space witness promised by the companion
  remark. No choice principle is used anywhere in the construction.
