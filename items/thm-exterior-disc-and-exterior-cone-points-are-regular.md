---
id: thm-exterior-disc-and-exterior-cone-points-are-regular
kind: theorem
title: "Exterior disc points and exterior cone points are regular"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-barrier-characterization-of-regular-boundary-points,
       lem-local-subharmonic-peak-function-globalizes]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a bounded complex domain and let
$\zeta\in\partial\Omega$.

1. If there is a closed disc $\overline{B(c,R)}\subseteq\mathbb C\setminus\Omega$
   with $\zeta\in\partial B(c,R)$, then $\zeta$ is regular.
2. If, after a rigid motion sending $\zeta$ to $0$, the domain lies locally in
   a sector of opening angle $<\pi$, then $\zeta$ is regular.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$ and a boundary point $\zeta\in\partial\Omega$.

[L1] A boundary point is regular exactly when it admits a barrier ([[thm-barrier-characterization-of-regular-boundary-points]]).

[L2] A negative local subharmonic peak with a strictly negative bound on a
smaller seam globalizes to a barrier
([[lem-local-subharmonic-peak-function-globalizes]]).

## Proof

**Proof technique:** direct.

1.1 In the exterior-disc case put $$\Phi(z)=\frac{\zeta-c}{z-c},\qquad b(z)=\operatorname{Re}\Phi(z)-1.$$ The center $c$ is outside $\overline\Omega$, so $\Phi$ and $b$ are holomorphic and harmonic respectively on $\Omega$. Moreover $|\Phi(z)|=R/|z-c|<1$ for $z\in\Omega$, hence $b<0$, while $b(z)\to0$ as $z\to\zeta$. On the compact set $\partial\Omega\setminus V$, for any neighbourhood $V$ of $\zeta$, the continuous function $\operatorname{Re}\Phi-1$ has a strictly negative maximum: equality could hold only when $\Phi=1$, namely at $z=\zeta$. Thus $b$ is a global barrier and [L1] makes $\zeta$ regular. [L1, given, construct]

1.2 In the exterior-cone case, after translation and rotation take $\zeta=0$ and suppose that near $0$ the domain lies in $$S=\{re^{it}:0<r<r_0,\ |t|<\theta\},\qquad 0<\theta<\pi/2.$$ Choose $\theta'$ with $\theta<\theta'<\pi/2$, put $\lambda=\pi/(2\theta')$, and use the branch of $z^\lambda$ on the larger sector $|t|<\theta'$. Then $$q(z)=-\operatorname{Re}(z^\lambda)$$ is harmonic and negative on $\Omega\cap S$, and tends to $0$ at the origin. On a sufficiently small circle $|z|=\rho$, the angular margin gives $$q(z)\le-\rho^\lambda\cos(\lambda\theta)<0\qquad(z\in\Omega\cap\partial D(0,\rho)).$$ Thus [L2] globalizes $q$ to a barrier, and [L1] gives regularity. [L1, L2, given, construct]

2.1 The two barrier constructions prove the two regularity criteria. [step 1.1, step 1.2] ∎
