---
id: lem-interior-sphere-barrier-for-the-laplacian
kind: lemma
title: "Interior sphere barrier for the laplacian"
status: draft
origin: pipeline
deps: [def-subharmonic-and-superharmonic-functions-in-rn, def-interior-sphere-condition-and-sphere-normal]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Lemma 2.21 proof, pp.29–30"
---

## Statement

Let $n\ge2$, $R>0$, $a\in\mathbb R^n$ and $\alpha\ge2n/R^2$. Set
$$c=(e^{-\alpha R^2/4}-e^{-\alpha R^2})^{-1},\qquad v(x)=c(e^{-\alpha|x-a|^2}-e^{-\alpha R^2}).$$
On the annulus $R/2<|x-a|<R$, $v$ is subharmonic; it equals $1$ on the inner sphere and $0$ on the outer sphere. At every point of the outer sphere its outward sphere derivative is strictly negative.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] A real $C^2$ function with nonnegative Laplacian is subharmonic. ([[def-subharmonic-and-superharmonic-functions-in-rn]]).

[F2] The sphere direction is $(p-a)/R$, and its outward derivative is the limit of $(v(p)-v(p-t\nu))/t$. ([[def-interior-sphere-condition-and-sphere-normal]]).

## Proof

**Proof technique:** direct.

1.1 The parameter $\alpha$ is positive, so the denominator defining $c$ is positive. Substitution at radii $R/2$ and $R$ gives the two boundary values. [given, algebra]

2.1 Writing $z=x-a$, Cartesian differentiation gives $\partial_{ii}v=c(4\alpha^2z_i^2-2\alpha)e^{-\alpha|z|^2}$ and hence $\Delta v=2c\alpha(2\alpha|z|^2-n)e^{-\alpha|z|^2}\ge0$ on the closed annulus. This is subharmonicity. [F1, step 1.1, algebra]

3.1 At $p$ on the outer sphere, the supplied direction is $\nu=(p-a)/R$. The radial derivative gives $\partial_\nu v(p)=-2c\alpha R e^{-\alpha R^2}<0$, also equal to the one-sided quotient limit. [F2, step 1.1, algebra] ∎

## Remarks

Hunter’s displayed Laplacian has the sign used here. The following prose on printed p.30 says negative; that prose sign is a typo.
