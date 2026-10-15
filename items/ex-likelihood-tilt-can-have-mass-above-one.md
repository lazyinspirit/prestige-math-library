---
id: ex-likelihood-tilt-can-have-mass-above-one
kind: example
title: "A likelihood tilt can be a finite measure of mass above one"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-kl-projection-set-and-relative-kl-neighborhoods
  - def-likelihood-tilted-measure-at-kl-projection
  - lem-likelihood-tilted-measure-is-sigma-finite
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, §3.2"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
---

## Example

On $\mathsf X=\{0,1\}$ with counting measure, let
$p_0=(1/1000,999/1000)$,
$p_a=(10^{-6},999999/10^6)$, and $p_b=(1,0)$,
where each pair lists the values at $0$ and $1$. Give $a$ and $b$ prior
probability $1/2$ each. Then $a$ is the unique KL minimizer and the tilt
at $b$ has mass $1000$.

## Facts & Assumptions

**Given:** The finite density model and prior in the Example.

[A1] Assume AC for the imported directional KL convention
[[def-axiom-of-choice]]. No additional choice is used.

[F1] [[def-kl-projection-set-and-relative-kl-neighborhoods]]: a KL
projection minimizes $K(\theta)=\mathrm{KL}(P_0\Vert P_\theta)$.

[F2] [[def-likelihood-tilted-measure-at-kl-projection]]: for selected
$\theta^*=a$, $Q_b(\mathsf X)=\mathbb E_{P_0}[p_b/p_a]$.

[F3] [[lem-likelihood-tilted-measure-is-sigma-finite]]: the likelihood
tilt is a sigma-finite measure, whether or not its total mass is one.

## Verification




1.1 The density $p_a$ is positive at both sample points, so $K(a)=\mathrm{KL}(P_0\Vert P_a)<\infty$. At $b$, $p_b(1)=0$ while $p_0(1)>0$, so $P_0\not\ll P_b$ and $K(b)=+\infty$ by [F1]. Therefore $a$ is the unique minimizer. [A1, F1, algebra]

2.1 Since $p_b(0)/p_a(0)=10^6$ and $p_b(1)/p_a(1)=0$, $Q_b(\mathsf X) =\frac1{1000}\cdot10^6 +\frac{999}{1000}\cdot0=1000>1.$ The tilt is a finite nonprobability measure by [F2] and [F3]. [F2, F3, algebra] ∎

