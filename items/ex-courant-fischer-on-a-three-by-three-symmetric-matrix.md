---
id: ex-courant-fischer-on-a-three-by-three-symmetric-matrix
kind: example
title: "Courant-Fischer is checked on an explicit 3x3 symmetric matrix"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-courant-fischer-min-max-principle, prop-standard-coordinate-inner-products]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "MIT 18.409, Lecture 3: Courant-Fischer and Rayleigh quotients"
      url: "https://ocw.mit.edu/courses/18-409-topics-in-theoretical-computer-science-an-algorithmists-toolkit-fall-2009/535add3f6457cc13e51d9774f16bf48f_MIT18_409F09_scribe3.pdf"
---

## Example

For the symmetric matrix

$$D=\operatorname{diag}(4,2,1),$$

the Rayleigh quotient is

$$R_D(x,y,z)=\frac{4x^2+2y^2+z^2}{x^2+y^2+z^2},$$

so the Courant-Fischer formulas recover the ordered eigenvalues $4,2,1$.

## Facts & Assumptions

**Given:** The diagonal matrix $D=\operatorname{diag}(4,2,1)$ on $\mathbb R^3$ with the standard inner product.

[L1] Courant-Fischer characterises the ordered eigenvalues of a real self-adjoint operator by min-max formulas ([[thm-courant-fischer-min-max-principle]]).

## Verification

**Proof technique:** direct.

1.1 For every nonzero $(x,y,z)$, the displayed formula shows $1\le R_D(x,y,z)\le4$, with the value $4$ at $e_1$, the value $2$ at $e_2$, and the value $1$ at $e_3$. On $\operatorname{span}(e_2,e_3)$ the quotient is at most $2$, and on $\operatorname{span}(e_1,e_2)$ it is at least $2$. [algebra]

2.1 Therefore $\max_{v\ne0}R_D(v)=4$, $\min_{v\ne0}R_D(v)=1$, and the $k=2$ Courant-Fischer min-max and max-min values are both $2$. This matches the ordered eigenvalues $4,2,1$, exactly as [L1] predicts. [L1, step 1.1] ∎
