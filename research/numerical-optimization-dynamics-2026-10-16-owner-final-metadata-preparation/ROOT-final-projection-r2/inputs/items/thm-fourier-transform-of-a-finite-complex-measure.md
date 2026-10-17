---
id: thm-fourier-transform-of-a-finite-complex-measure
kind: theorem
title: Fourier transform of a finite complex Borel measure
deps: ["def-complex-measure", "def-integration-against-a-signed-or-complex-measure", "thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation", "thm-dominated-convergence", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-complex-exponential-addition-and-real-extension", "def-countable-choice"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Problem 14.10, p.387
---

## Statement

Assume countable choice. Let $\mu$ be a complex Borel measure on $\mathbb R^n$, $n\ge1$, with finite total variation. Then
$$\widehat\mu(\xi):=\int e^{-2\pi ix\cdot\xi}\,d\mu(x)$$
is a bounded uniformly continuous function and $\sup|\widehat\mu|\le|\mu|(\mathbb R^n)$.

## Facts & Assumptions

**Given:** The measure of [[def-complex-measure]], finite variation, [[def-countable-choice]], and the simple-limit integral of [[def-integration-against-a-signed-or-complex-measure]].

[F1] The integral modulus is bounded by its absolute integral against total variation ([[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]]).

[F2] Dominated convergence holds for positive measures ([[thm-dominated-convergence]]).

[F3] The exponential has modulus one on imaginary arguments and satisfies addition ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-addition-and-real-extension]]).

## Proof

1.1 First repair the positive integral used to construct the complex-measure integral. Augment every finite disjoint nonnegative-simple display by its complement with coefficient $0$. Pairwise intersections of two augmented displays partition the space and carry equal coefficients on nonempty cells, so finite additivity and $0\cdot(+\infty)=0$ prove representation independence. Common refinements give simple addition and monotonicity; scalar zero is direct and positive scalars are termwise. Supremum over simple minorants and the sets $\{u_j\ge cs\}$, $0<c<1$, give monotone convergence; increasing simple approximations give nonnegative additivity and finite $L^1$ linearity after positive/negative and real/imaginary decomposition. Fatou follows by applying MCT to $\inf_{j\ge m}v_j$; applying Fatou to $2g-|u_j-u|$ proves dominated convergence when $|u_j|\le g\in L^1$. For a canonical nonzero-level complex simple function, the triangle inequality and the definition of variation give $|\int s\,d\mu|\le\int|s|\,d|\mu|$. Passing to $L^1(|\mu|)$ simple limits using this bound constructs the complex integral, makes it independent of the approximants, and preserves the same variation bound and finite linearity. Each exponential is bounded Borel with modulus one, so it is integrable against $|\mu|$. The locally reconstructed complex integral exists and gives $|\widehat\mu(\xi)|\le|\mu|(\mathbb R^n)$; no Radon–Nikodym representation is needed. [F1, F3, given, construct]

2.1 By the addition law and the locally proved variation bound, $|\widehat\mu(\xi+h)-\widehat\mu(\xi)|\le\int|e^{-2\pi ix\cdot h}-1|\,d|\mu|(x)$, independently of $\xi$. Under the stated countable choice the sequential Euclidean limit criterion applies; the locally proved dominated convergence, with majorant $2$ on this finite measure space, makes this bound tend to zero as $h$ tends to zero. Hence the transform is uniformly continuous. Countable choice also covers the near-maximizing partition selections in the total-variation additivity proof. Finite variation was assumed; no general finiteness theorem, RN or Hahn decomposition is used. [F1, F2, F3, step 1.1] ∎
