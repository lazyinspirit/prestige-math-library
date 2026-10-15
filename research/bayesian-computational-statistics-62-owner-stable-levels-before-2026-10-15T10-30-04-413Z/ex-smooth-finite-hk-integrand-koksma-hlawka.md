---
id: ex-smooth-finite-hk-integrand-koksma-hlawka
kind: example
title: "A smooth finite-variation integrand and its deterministic error bound"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-star-discrepancy-and-digital-net
  - def-multidimensional-darboux-integral
  - def-multidimensional-rectangle-and-volume
  - def-multidimensional-grid-partition
  - def-multidimensional-darboux-sums
  - def-hardykrause-variation
  - lem-hk-smooth-mixed-derivative-formula
  - thm-koksma-hlawka-integration-bound
  - thm-newton-leibniz-with-interior-derivative
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-riemann-fubini-on-product-rectangles
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 15 §15.4 and end notes"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Harald Niederreiter, Random Number Generation and Quasi-Monte Carlo Methods, Chapter 2 §2.2"
      url: "https://www.ricam.oeaw.ac.at/files/people/siambook_nied.pdf"
    - title: "Lukas Einkemmer, Quasi-Monte Carlo Methods, §2.3"
      url: "https://www.einkemmer.net/files/qmm.pdf"
---

## Example

On $[0,1]^2$, take $f(x,y)=xy$ and the one-point set $P=((1/4,1/2))$. Then
$$V_{HK,1}(f)=3,\qquad D_1^*(P)=\frac78,\qquad \left|Q_P(f)-I_2(f)\right|=\frac18,$$
so the Koksma–Hlawka bound is valid for this smooth integrand.

## Facts & Assumptions

**Given:** The function $f(x,y)=xy$ on the unit square and the point set containing $(1/4,1/2)$.

[F1] For $C^d$ functions, upper-anchor Hardy–Krause variation is the sum of the integrals of the absolute mixed derivatives on all nonempty upper faces. ([[lem-hk-smooth-mixed-derivative-formula]])

[F2] The unit square has volume $1$; grid cells' volumes sum to that volume, and for the constant-one function every lower and upper Darboux sum equals the sum of the cell volumes, so its integral is $1$. ([[def-multidimensional-rectangle-and-volume]], [[def-multidimensional-grid-partition]], [[def-multidimensional-darboux-sums]], [[def-multidimensional-darboux-integral]])

[F3] A continuous function on the square is Riemann integrable, and its integrable sections have iterated integrals equal to the multiple integral. ([[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[thm-riemann-fubini-on-product-rectangles]])

[F4] Star discrepancy is the supremum over $u\in[0,1]^d$ of the absolute difference between the fraction of nodes in $[0,u)$ and its volume. ([[def-star-discrepancy-and-digital-net]])

[F5] If $G$ is continuous on $[a,b]$, differentiable on $(a,b)$, and its interior derivative has a Riemann-integrable extension, then its integral is $G(b)-G(a)$. ([[thm-newton-leibniz-with-interior-derivative]])

[F6] For a finite nonempty point multiset and an integrand of finite upper-anchor Hardy–Krause variation, $|Q_P(f)-I_d(f)|\le D_N^*(P)V_{HK,1}(f)$. ([[thm-koksma-hlawka-integration-bound]])

## Verification

**Proof technique:** direct.

1.1 The upper faces are $f(x,1)=x$ and $f(1,y)=y$, and the full mixed derivative is $\partial_{xy}f=1$. By [F1], $V_{HK,1}(f)=\int_0^1 1\,dx+\int_0^1 1\,dy+\int_{[0,1]^2}1\,dx\,dy=1+1+1=3$; the one-dimensional integrals and the square integral of $1$ equal the respective volumes by [F2]. [F1, F2, given, algebra]

1.2 At $u=(1/4,1/2)$ the point is excluded from the half-open anchored box, so the discrepancy there is $1/8$. If $u_1\le1/4$ or $u_2\le1/2$, the box is empty and its volume is at most $1/2$. If both coordinates exceed those thresholds, the box contains the point and its error is $1-u_1u_2\le1-(1/4)(1/2)=7/8$; values approach $7/8$ as $u\downarrow(1/4,1/2)$. Thus $D_1^*(P)=7/8$. Also $Q_P(f)=1/8$. By [F3], the double integral equals the iterated Riemann integral, and [F5] evaluates it as $I_2(f)=\int_0^1 y\left(\int_0^1x\,dx\right)dy=1/4$. [F3, F4, F5, given, algebra]

2.1 The error is $|1/8-1/4|=1/8\le(7/8)\cdot3=D_1^*(P)V_{HK,1}(f)$, consistent with [F6]. [F6, step 1.1, step 1.2] ∎
