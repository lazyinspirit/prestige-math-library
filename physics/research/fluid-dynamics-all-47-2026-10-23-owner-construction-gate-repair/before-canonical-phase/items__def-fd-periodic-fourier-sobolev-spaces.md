---
id: def-fd-periodic-fourier-sobolev-spaces
kind: definition
title: "Periodic fluid Fourier Sobolev spaces"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-countable-choice
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - def-fourier-coefficients-and-trigonometric-polynomials
  - thm-fourier-basis-and-parseval-on-the-n-torus
dependency_roles:
  def-countable-choice: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  def-fourier-coefficients-and-trigonometric-polynomials: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis (2017)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07%2110_23_44_AM.pdf"
      locator: "§2.5, printed pp. 63–68: Fourier coefficients, orthogonality, Parseval and Fejér completeness route."
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf"
      locator: "§2.3.6, Example 2.66, pp. 87–88; §5.3.1, pp. 233–237."
---

## Definition

For an integer $d\in\{1,2,3\}$, let $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$ carry the probability measure obtained by pushing normalized Haar measure on $\mathbb T^d=\mathbb R^d/\mathbb Z^d$ forward under $y\mapsto x=2\pi y$; in coordinates this is $(2\pi)^{-d}dx$, and the characters are $e_k(x)=e^{ik\cdot x}$. For $q:Q_d\to\mathbb R^N$ and $k\in\mathbb Z^d$, set $\widehat q(k)=\int_{Q_d}q(x)e^{-ik\cdot x}\,d\mu(x)$, componentwise, so real fields have $\widehat q(-k)=\overline{\widehat q(k)}$. Put $w_k=(1+|k|^2)^{1/2}$. For any $s\in\mathbb R$, define $H^s(Q_d;\mathbb R^N)$ as the completion of finite real trigonometric polynomials in the norm $\|q\|_{H^s}^2=\sum_{k\in\mathbb Z^d}w_k^{2s}|\widehat q(k)|^2$. The completion is identified with its weighted coefficient space using finite symmetric cutoffs. If $s\ge0$, it has a unique $L^2$ representative; for $s<0$ no $L^2$ representative is asserted.

## Definition references

[Gerald Teschl, Topics in Real and Functional Analysis (2017)](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07%2110_23_44_AM.pdf).

[Theo Bühler and Dietmar Salamon, Functional Analysis](https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf).

## Facts & Assumptions

**Given:** The hypotheses and conventions stated in the formulation.

[F1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; the finite-torus Fourier-basis supplier assumes this principle.

[F2] [[def-the-one-dimensional-torus-and-normalized-haar-integral]]: normalized Haar measure on the unit torus is probability Lebesgue measure, and the product torus carries its product probability measure.

[F3] [[def-fourier-coefficients-and-trigonometric-polynomials]]: Fourier coefficients use the normalized integral against the conjugate character, and finite character sums are trigonometric polynomials.

[F4] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: under Countable Choice, normalized torus characters form a complete orthonormal basis; synthesis and Parseval hold and the coefficient map is an isometry onto $\ell^2$ in the finite-subset-net sense.

## Proof

**Given:** $d\in\{1,2,3\}$, $N\ge1$, Countable Choice, and the normalized Fourier conventions in the Definition.

1.1 Under $x=2\pi y$, normalized measure on $\mathbb T^d$ pushes forward to $(2\pi)^{-d}dx$ on $Q_d$, while $e^{2\pi i k\cdot y}$ becomes $e^{ik\cdot x}$. Thus Fourier coefficients and the componentwise $L^2$ inner product are unchanged by this rescaling. [given, F2, F3, algebra]

1.2 Apply [F4] to each of the $N$ components after this rescaling. The coefficient map identifies scalar $L^2(Q_d)$ isometrically with $\ell^2(\mathbb Z^d)$; summing the component identities gives the vector-valued coefficient isometry. The Countable Choice hypothesis is exactly [F1]. [given, F1, F4, step 1.1]

1.3 Since $w_k^{2s}>0$, completion of finite symmetric coefficient arrays is the weighted $\ell^2$ space: truncating to $|k|_\infty\le M$ converges by convergence of the defining nonnegative series. Conjugate symmetry is preserved under these symmetric cutoffs and yields real representatives by uniqueness of Fourier synthesis. For $s\ge0$, $w_k^{2s}\ge1$, so the coefficient sequence is in $\ell^2$ and [F4] gives its unique $L^2$ representative. For $s<0$ this argument gives only the weighted coefficient completion and makes no $L^2$ claim. [given, F4, step 1.2] ∎
