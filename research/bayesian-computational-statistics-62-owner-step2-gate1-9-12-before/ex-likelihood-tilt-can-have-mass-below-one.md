---
id: ex-likelihood-tilt-can-have-mass-below-one
kind: example
title: "A likelihood tilt can be a finite measure of mass below one"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-kl-projection-set-and-relative-kl-neighborhoods
  - def-likelihood-tilted-measure-at-kl-projection
  - lem-likelihood-tilted-measure-is-sigma-finite
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, §3.2, pp. 368–370"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
---

## Example

On $\mathsf X=\{0,1\}$ with counting measure, let
$p_0(0)=1/10$, $p_0(1)=9/10$, and model densities
$p_a(0)=9/10$, $p_a(1)=1/10$, $p_b(0)=1$, $p_b(1)=0$. Give $a$ and $b$
prior probability $1/2$ each. The density $p_a$ is the unique KL
minimizer, while the likelihood tilt at $b$ has total mass $1/9$.

## Facts & Assumptions

**Given:** The finite model, prior, and IID law in the Example.

[F1] [[def-kl-projection-set-and-relative-kl-neighborhoods]]: the
projection minimizes the directional contrast
$\mathrm{KL}(P_0\Vert P_\theta)$.

[A1] Assume AC through the imported KL convention. No further choice is
used in this finite model. [[def-axiom-of-choice]]

[F2] [[def-likelihood-tilted-measure-at-kl-projection]]: the total
likelihood-tilt mass is $\mathbb E_{P_0}(p_b/p_a)$ and is not required
to equal one.

[F3] [[lem-likelihood-tilted-measure-is-sigma-finite]]: the tilted
set function is a measure; a finite total mass is allowed to be below one.

## Verification




1.1 The KL loss at $a$ is $K(a)=\frac1{10}\log\frac19+\frac9{10}\log9 =\frac45\log9<\infty.$ At $b$, $P_0$ is not absolutely continuous with respect to $P_b$, so $K(b)=+\infty$. Thus $a$ is the unique minimizer and every KL neighborhood has prior mass at least $1/2$. [A1, F1, algebra]

2.1 The likelihood tilt at $b$ assigns mass $Q_b(\{0\})=\frac1{10}\frac{1}{9/10}=\frac19,\qquad Q_b(\{1\})=\frac9{10}\frac0{1/10}=0.$ Hence $Q_b(\mathsf X)=1/9<1$, so $Q_b$ is a finite nonprobability measure. [F2, F3, algebra] ∎

