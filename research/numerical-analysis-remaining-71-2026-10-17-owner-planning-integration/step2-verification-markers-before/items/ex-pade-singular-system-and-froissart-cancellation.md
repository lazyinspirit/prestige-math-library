---
id: ex-pade-singular-system-and-froissart-cancellation
kind: example
title: Padé matching can be singular or create a Froissart doublet
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - alg-pade-coefficient-matching
  - thm-pade-solvable-system-gives-local-order
dependency_level: 2
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Pedro Gonnet, Stefan Güttel, and Lloyd N. Trefethen, Robust Padé Approximation via SVD, Sections 2 and 5
      url: https://people.maths.ox.ac.uk/trefethen/gonnet_guettel_trefethen.pdf
---

## Example

This example exhibits a rank-deficient normalized moment system, an
inconsistent full-order system, and a Padé pole-zero pair for an entire
polynomial target. It shows why coefficient matching alone supplies no
pole-location or analytic-continuation guarantee. A close pole-zero pair with
small residue is called a Froissart doublet.

## Facts & Assumptions

**Given:** The exact Padé coefficient procedure, and the two coefficient lists $f(z)=1$ and $f_\varepsilon(z)=1+\varepsilon z+z^2$ with $0<\varepsilon<1/2$.

[F1] [[alg-pade-coefficient-matching]]: for type $(m,n)$, the normalized denominator equations are $\sum_{j=1}^nq_jc_{m+\ell-j}=-c_{m+\ell}$ for $1\le\ell\le n$; the procedure reports inconsistent or consistent rank-deficient systems separately.

[F2] [[thm-pade-solvable-system-gives-local-order]]: a solved normalized system gives $f-p/q=O(z^{m+n+1})$ near $0$.

## Verification

1.1 For $f(z)=1$ and type $(1,1)$, the sole equation is $q_1c_1=-c_2$, namely $0q_1=0$. It is consistent with rank zero, so [F1] returns $\texttt{defective-nonunique}$. If one arbitrarily selects $q_1=-1$, the convolution formula gives $p(z)=1-z$ and $q(z)=1-z$; after canceling their common factor the rational function is the constant $1$, so the apparent zero of the unreduced denominator is not a pole. [given, F1, algebra]

1.2 For $f_\varepsilon(z)=1+\varepsilon z+z^2$ and type $(1,1)$, the equation is $\varepsilon q_1=-1$, so its unique solution is $q_1=-1/\varepsilon$. The numerator coefficients are $p_0=1$ and $p_1=\varepsilon+q_1=-(1-\varepsilon^2)/\varepsilon$. Thus $$r_{11}(z)= \frac{1-(1-\varepsilon^2)z/\varepsilon}{1-z/\varepsilon}.$$ Its denominator has a simple zero at $z=\varepsilon$ while the numerator there equals $\varepsilon^2\ne0$, so this is a genuine pole. The numerator zero is $z=\varepsilon/(1-\varepsilon^2)$, and its distance from the pole is $\varepsilon^3/(1-\varepsilon^2)$. The residue at the pole is $\varepsilon^2/(-1/\varepsilon)=-\varepsilon^3$. Hence the exact coefficient-matching rational function has a pole-zero pair with arbitrarily small separation and residue as $\varepsilon\downarrow0$, although the target $f_\varepsilon$ is a polynomial. [given, F1, algebra]

2.1 In the second case the system is solved, so [F2] gives only the stated local Taylor order at the origin. Step 1.2 shows that this does not prevent a nearby pole-zero pair, while step 1.1 shows that a singular system can leave denominator coefficients nonunique. Neither case supplies analytic continuation or a target pole-location guarantee. [F1, F2, step 1.1, step 1.2] ∎

