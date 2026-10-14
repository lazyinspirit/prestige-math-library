---
id: lem-isotropic-gaussian-noise-is-subgaussian
kind: lemma
title: "Isotropic Gaussian noise has the matching sub-Gaussian proxy"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-subgaussian-variable-and-vector
  - lem-normal-density-has-total-mass-one
  - thm-integration-against-a-density
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - lem-ac-supplies-sequential-choices-for-probability-constructions
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1, §1"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$, $\sigma\ge0$, and let
$\varepsilon\sim N_n(0,\sigma^2I_n)$ be a centered multivariate normal vector.
Then for every $u\in\mathbb R^n$ and $\lambda\in\mathbb R$,
$$\mathbb E\exp(\lambda\langle u,\varepsilon\rangle) =\exp\!\left(\frac{\sigma^2\lambda^2\|u\|_2^2}{2}\right).$$
In particular, $\varepsilon$ is sub-Gaussian with proxy $\sigma^2$ in the
linear-functional sense of [[def-subgaussian-variable-and-vector]].

## Facts & Assumptions

**Given:** The Axiom of Choice, an integer $n\ge1$, a parameter $\sigma\ge0$,
and a vector $\varepsilon\sim N_n(0,\sigma^2I_n)$.

[A1] Assume the Axiom of Choice, as required by the multivariate-normal
construction ([[def-axiom-of-choice]]).

[F1] Under [[def-multivariate-normal-law]], every linear functional
$\langle u,\varepsilon\rangle$ has law $N(0,\sigma^2\|u\|_2^2)$.

[F2] A scalar law $N(0,a^2)$ is the law of $aG$ for a standard normal $G$;
the standard normal has density
$\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$
([[def-standard-normal-and-normal-laws]]).

[F3] Integration against a density gives the corresponding expectation
([[thm-integration-against-a-density]]).

[F4] The standard normal density has total integral one
([[lem-normal-density-has-total-mass-one]]).

[F5] Translation is a $C^1$ diffeomorphism and the nonnegative
change-of-variables formula applies to its translated Gaussian integrand
([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F6] Axiom of Choice supplies the countable-choice hypothesis required by
[[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]
([[lem-ac-supplies-sequential-choices-for-probability-constructions]]).

[F7] A centered vector is sub-Gaussian with proxy $\sigma^2$ when all its
linear functionals satisfy the corresponding exponential-moment bound
([[def-subgaussian-variable-and-vector]]).

## Proof

1.1 Fix $u\in\mathbb R^n$ and $\lambda\in\mathbb R$, and put $a=\sigma\|u\|_2$. By [F1], $W=\langle u,\varepsilon\rangle$ has law $N(0,a^2)$. If $a=0$, then $W=0$ almost surely by the degenerate-normal clause of [F2], and its exponential moment is $1$. If $a>0$, [F2]–[F4] give $$\mathbb E e^{\lambda W} =\frac1{\sqrt{2\pi}}\int_{\mathbb R} e^{\lambda ax-x^2/2}\,dx =e^{\lambda^2a^2/2}\frac1{\sqrt{2\pi}}\int_{\mathbb R} e^{-(x-\lambda a)^2/2}\,dx.$$ Use [F5] for the translation $x\mapsto x-\lambda a$ and [F6] for its countable-choice hypothesis; the last integral equals the standard normal normalizing integral in [F4]. Thus $\mathbb E e^{\lambda W} =e^{\lambda^2a^2/2}$ in both cases. [A1, F1, F2, F3, F4, F5, F6, algebra]

2.1 Since $a^2=\sigma^2\|u\|_2^2$, step 1.1 is the claimed identity for the arbitrary $u$ and $\lambda$. The mean-zero clause follows from [F1]; hence [F7] gives the stated centered sub-Gaussian property. [F1, F7, step 1.1, algebra] ∎
