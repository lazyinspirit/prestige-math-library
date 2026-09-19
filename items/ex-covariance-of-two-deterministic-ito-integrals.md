---
id: ex-covariance-of-two-deterministic-ito-integrals
kind: example
title: "Covariance of deterministic Ito integrals"
status: draft
origin: pipeline
deps: [thm-ito-isometry-and-linearity-in-predictable-l2, lem-cross-ito-isometry, cor-deterministic-ito-integrals-are-gaussian, def-multivariate-normal-law, lem-characteristic-function-of-a-multivariate-normal-law, def-ito-integral-for-square-integrable-predictable-processes, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Aad van der Vaart, Stochastic Integration and Differential Equations, Lemma 5.22"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Example

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. For deterministic
$h,k\in L^2[0,T]$,
$$\operatorname{Cov}\Bigl(\int_0^Th\,dB,\int_0^Tk\,dB\Bigr)=\int_0^Th(s)k(s)\,ds ,$$
and the pair is jointly Gaussian, so $\int_0^Th\,dB$ and $\int_0^Tk\,dB$ are
independent exactly when $\int_0^Thk\,ds=0$. In particular deterministic
integrands with disjoint supports have independent integrals.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), deterministic $h,k\in L^2[0,T]$.

[F1] Both integrals are centered: their laws are $N(0,\int_0^Th^2)$ and $N(0,\int_0^Tk^2)$. [[cor-deterministic-ito-integrals-are-gaussian]]

[F2] The general cross identity $E[(\int_0^Th\,dB)(\int_0^Tk\,dB)]=E\int_0^Thk\,ds$ holds for predictable $L^2$ integrands; for elementary (in particular deterministic step) integrands this is the polarized elementary isometry. [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[lem-cross-ito-isometry]]

[F3] For deterministic $h,k$ the vector of the two integrals has law $N_2(0,\Sigma)$ with $\Sigma_{11}=\int h^2$, $\Sigma_{22}=\int k^2$, $\Sigma_{12}=\int hk$; a multivariate normal law with diagonal covariance can be realized with independent coordinates, and its characteristic function determines the law. [[def-multivariate-normal-law]] [[lem-characteristic-function-of-a-multivariate-normal-law]] [[cor-deterministic-ito-integrals-are-gaussian]]

[F4] AC is declared for the ambient interfaces. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 Since both integrals have mean $0$ by [F1], the covariance is the expectation of the product, and [F2] evaluates it as $\int_0^Thk\,ds$. [F1, F2, given]

2.1 By [F3] the pair is jointly Gaussian with covariance matrix $\Sigma$ whose off-diagonal entry is $\int_0^Thk\,ds$; if that entry vanishes, $\Sigma$ is diagonal, and the multivariate normal law with diagonal covariance is the law of a pair with independent coordinates (realization $m+\Sigma^{1/2}Z$ with independent standard normals), so the pair is independent. [F3, step 1.1]

3.1 Disjoint supports give $h(s)k(s)=0$ for every $s$, hence $\int_0^Thk\,ds=0$ and independence; the degenerate cases $h=0$ or $k=0$ are included (a Dirac factor is independent of every variable), and AC enters only through [F4]. [F3, F4, step 2.1, given] ∎

## Source notes

Van der Vaart, Lemma 5.22, gives the bilinear form of the isometry that computes these covariances; the independence statement is the diagonal-covariance case of the multivariate normal law.
