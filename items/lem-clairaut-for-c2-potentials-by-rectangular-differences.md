---
id: lem-clairaut-for-c2-potentials-by-rectangular-differences
kind: lemma
title: "Continuous second partials of a scalar potential commute"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-directional-and-partial-derivatives, cor-mean-value-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J.-B. Campesato, Poincare Lemma, section 1"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be open and let $\phi:U\to\mathbb R$ have continuous second partial derivatives. Then

$$\partial_j\partial_i\phi(x)=\partial_i\partial_j\phi(x)$$

for every $x\in U$ and every pair of coordinate indices $i,j$.

## Facts & Assumptions
**Given:** The open set, function, point, and indices in the Statement.

[L1] The coordinate partial derivative $\partial_i\phi(x)$ is the derivative at zero of $t\mapsto\phi(x+te_i)$ ([[def-directional-and-partial-derivatives]]).

[L2] A real function continuous on $[a,b]$ and differentiable on $(a,b)$ has an interior point $c$ with $f(b)-f(a)=f'(c)(b-a)$ ([[cor-mean-value-theorem]]).



## Proof

**Proof technique:** direct.

1.1 If $i=j$, the displayed equality has identical sides. Assume henceforth that $i\ne j$. Since $U$ is open, choose a ball about $x$ contained in $U$, and choose nonzero $h,k$ small enough that the coordinate rectangle with vertices $x$, $x+he_i$, $x+ke_j$, and $x+he_i+ke_j$ lies in that ball. [given, cases]

2.1 Divide the rectangular difference $$R(h,k):=\phi(x+he_i+ke_j)-\phi(x+he_i)-\phi(x+ke_j)+\phi(x)$$ by $hk$. Apply [L2] on the ordered endpoint intervals first in direction $i$ and then in direction $j$; this covers either sign of $h$ and $k$. Using [L1], there are points $\xi$ and $\eta$ inside the corresponding coordinate intervals such that $$\frac{R(h,k)}{hk}=\partial_j\partial_i\phi(x+\xi e_i+\eta e_j).$$ [step 1.1, L1, L2, algebra]

2.2 Applying [L2] in the opposite order gives interior points $\xi'$ and $\eta'$ such that the same quotient equals $$\frac{R(h,k)}{hk}=\partial_i\partial_j\phi(x+\xi'e_i+\eta'e_j).$$ [step 1.1, L1, L2, algebra]

3.1 Let $h$ and $k$ tend to zero through nonzero values. All four intermediate displacements tend to zero. Continuity of the two second partials in steps 2.1 and 2.2 therefore gives $$\partial_j\partial_i\phi(x)=\partial_i\partial_j\phi(x).$$ [step 2.1, step 2.2, given]

4.1 Together with the $i=j$ case in step 1.1, this proves the assertion for every pair of indices. [step 1.1, step 3.1] ∎
