---
id: ex-harnack-inequality-for-a-poisson-kernel
kind: example
title: "The Poisson kernel realizes the sharp Harnack bounds on concentric discs"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-poisson-kernel-on-the-disc, thm-complex-polynomials-and-rational-functions-are-holomorphic, thm-c2-holomorphic-components-are-harmonic, thm-harnack-inequality-on-a-disc]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The positive harmonic function

$$u(z):=P(z,1)=\frac{1-|z|^2}{|1-z|^2}\qquad(|z|<1)$$

satisfies, for every $0\le r<1$,

$$u(re^{i0})=\frac{1+r}{1-r},\qquad u(re^{i\pi})=\frac{1-r}{1+r}.$$

Since $u(0)=1$, these are exactly the two Harnack bounds on the circle
$|z|=r$.

## Facts & Assumptions

**Given:** A radius $0\le r<1$.

[L1] For $z=\rho e^{i\phi}$, the Poisson kernel at the boundary point $1=e^{i0}$ is $$P(z,1)=\frac{1-\rho^2}{1-2\rho\cos\phi+\rho^2}$$ ([[def-poisson-kernel-on-the-disc]]).

[L2] The rational function $(1+z)/(1-z)$ is holomorphic on the unit disc, and the real part of a holomorphic $C^2$ function is harmonic ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]], [[thm-c2-holomorphic-components-are-harmonic]]).

[L3] Positive harmonic functions on a disc satisfy Harnack's inequality ([[thm-harnack-inequality-on-a-disc]]).

## Verification

**Proof technique:** direct.

1.1 The function $$H(z):=\frac{1+z}{1-z}$$ is holomorphic on $|z|<1$ by [L2], and its real part is $$\operatorname{Re}H(\rho e^{i\phi})=\frac{1-\rho^2}{1-2\rho\cos\phi+\rho^2}=P(\rho e^{i\phi},1)$$ by [L1]. Therefore $u(z):=P(z,1)$ is harmonic on the unit disc. Since $1-|z|^2>0$ and $|1-z|^2>0$ for $|z|<1$, it is positive there as well. [L1, L2, algebra]

1.2 Substituting $\phi=0$ and $\phi=\pi$ into [L1] gives $$u(re^{i0})=\frac{1-r^2}{(1-r)^2}=\frac{1+r}{1-r},\qquad u(re^{i\pi})=\frac{1-r^2}{(1+r)^2}=\frac{1-r}{1+r},$$ and $u(0)=P(0,1)=1$. [L1, algebra]

2.1 Fix $R$ with $r<R<1$. The function $u$ is harmonic on a neighbourhood of $\overline{D(0,R)}$, so [L3] gives $$\frac{R-r}{R+r}\,u(0)\le u(re^{i\phi})\le\frac{R+r}{R-r}\,u(0).$$ Letting $R\to1^-$ yields the unit-disc Harnack bounds $$\frac{1-r}{1+r}\le u(re^{i\phi})\le\frac{1+r}{1-r}.$$ Step 1.2 shows equality at $\phi=\pi$ and $\phi=0$, respectively. Thus the Poisson kernel realizes both Harnack extremes on the circle $|z|=r$. [step 1.1, step 1.2, L3] ∎
