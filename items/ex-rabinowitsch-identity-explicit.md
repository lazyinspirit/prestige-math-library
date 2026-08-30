---
id: ex-rabinowitsch-identity-explicit
kind: example
title: "A small Rabinowitsch identity written out completely"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus, lem-rabinowitsch-unit-ideal-consequence, lem-rabinowitsch-substitution-clears-denominators]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 13.10"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

Let $I=(x,y)\subseteq k[x,y]$ and let $f=x+y$. Then the auxiliary ideal
$$
I+(1-u(x+y))\subseteq k[x,y,u]
$$
contains the explicit identity
$$
1=ux+uy+(1-u(x+y)),
$$
and clearing denominators after $u=1/(x+y)$ shows $x+y\in I$.

## Facts & Assumptions

**Given:** A field $k$, the ideal $I=(x,y)\subseteq k[x,y]$, and the polynomial $f=x+y$.

[L1] If $f$ vanishes on $V(I)$, then the auxiliary ideal has empty zero locus ([[lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus]]).

[L3] Substituting the inverse of $f$ and clearing denominators yields a power of $f$ in $I$ ([[lem-rabinowitsch-substitution-clears-denominators]]).

## Verification

**Proof technique:** direct.

1.1 The zero locus of $I=(x,y)$ is the single point $(0,0)$, and $f(0,0)=0$. So the Rabinowitsch hypothesis holds. The displayed formula is already an explicit unit-ideal identity in the auxiliary ideal. [L1, given]

2.1 In the localization where $x+y$ is invertible, substitute $u=1/(x+y)$ into $$ 1=ux+uy+(1-u(x+y)) $$ to get $$ 1=\frac{x}{x+y}+\frac{y}{x+y}. $$ The zero-denominator case is excluded precisely because this localization inverts $x+y$. Multiplying by $x+y$ yields $x+y=x+y\in I$. This is the denominator-clearing step of [L3] with $N=1$. [L3, step 1.1] ∎
