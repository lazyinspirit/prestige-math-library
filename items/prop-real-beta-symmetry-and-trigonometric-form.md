---
id: prop-real-beta-symmetry-and-trigonometric-form
kind: proposition
title: 'Symmetry and the trigonometric form of the real Beta integral'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-beta-integral, thm-real-beta-integral-convergence, thm-substitution-for-improper-integrals, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §2.2(a)"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Statement

For $p,q>0$, $B(p,q)=B(q,p)=2\int_0^{\pi/2}\sin^{2p-1}\theta\cos^{2q-1}\theta\,d\theta$.

## Facts & Assumptions

**Given:** Positive real parameters $p,q$.

[F1] If $\phi:I\to J$ is a monotone differentiable surjection with locally integrable derivative, the proper change-of-variable hypotheses hold on every compact truncation, and $f$ is locally integrable on $J$, then the improper integrals of $f$ and $f(\phi)|\phi'|$ converge simultaneously and are equal when convergent ([[thm-substitution-for-improper-integrals]]).

[F2] The Beta integral converges if and only if $p>0$ and $q>0$ ([[thm-real-beta-integral-convergence]]).

## Proof

**Proof technique:** direct.

1.1 In the convergent integral [F2], the decreasing substitution $u=1-t$ interchanges $p$ and $q$. By [F1], $B(p,q)=B(q,p)$. [F1, F2, algebra]

1.2 On compact interior truncations use $t=\sin^2\theta$, with $dt=2\sin\theta\cos\theta\,d\theta$ and $1-t=\cos^2\theta$. The transformed integrand is $2\sin^{2p-1}\theta\cos^{2q-1}\theta$. [F1, F2, algebra]

2.1 Let the truncations tend to $0$ and $\pi/2$. Convergence from [F2] and [F1] yields the full trigonometric integral and completes the displayed equality. [step 1.2, F1, F2] ∎
