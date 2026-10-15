---
id: lem-likelihood-tilted-measure-is-sigma-finite
kind: lemma
title: "Likelihood tilts are sigma-finite measures"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-likelihood-tilted-measure-at-kl-projection
  - def-measure
  - def-probability-measure
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, §3.2, p. 370"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
---

## Statement

Under the hypotheses and conventions of
[[def-likelihood-tilted-measure-at-kl-projection]], each $Q_\theta$ is a
sigma-finite measure. The definition does not require its total mass to be
one; the companion examples exhibit masses below and above one, while
$Q_{\theta^*}(\mathsf X)=1$ for the selected minimizer.

## Facts & Assumptions

**Given:** A probability measure $P_0$, supplied finite-valued measurable
densities $p_\theta$ and $p_{\theta^*}$, and $p_{\theta^*}>0$
$P_0$-almost surely.

[F1] [[def-likelihood-tilted-measure-at-kl-projection]]: $Q_\theta(A)$ is the
integral of the nonnegative ratio $p_\theta/p_{\theta^*}$ against $P_0$,
with the ratio set to zero where $p_{\theta^*}=0$.

[F2] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]:
arithmetic combinations and lattice operations of measurable extended-real
functions are measurable under the library's conventions.

[F3] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]:
if $f\ge0$ is measurable, then $A\mapsto\int_A f\,dP_0$ is a measure.

[F4] [[def-probability-measure]]: $P_0(\mathsf X)=1$.

## Proof


**Given:** The hypotheses and conventions in the Statement.

1.1 Fix $\theta$ and define $r_\theta=p_\theta/p_{\theta^*}$ on $\{p_{\theta^*}>0\}$ and $r_\theta=0$ elsewhere. By [F1] and [F2], $r_\theta$ is nonnegative, measurable, and finite $P_0$-almost surely. Thus $Q_\theta(A)=\int_A r_\theta\,dP_0$ is defined for every $A\in\mathcal A$. [F1, F2, given]

2.1 By [F3], $Q_\theta$ is a measure. For each integer $k\ge1$, set $E_k=\{x:r_\theta(x)\le k\}$. The ratio convention in [F1] and the finite-valued density hypothesis make $r_\theta$ finite everywhere, so the $E_k$ increase to $\mathsf X$. Moreover, $Q_\theta(E_k)=\int_{E_k}r_\theta\,dP_0\le kP_0(E_k)\le k$ by [F4]. Thus $(E_k)_{k\ge1}$ is a countable cover by finite-$Q_\theta$-measure sets, and $Q_\theta$ is sigma-finite. [F1, F3, F4, step 1.1, algebra] ∎

