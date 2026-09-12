---
id: "thm-distributional-differentiation-is-continuous-and-commutes"
kind: "theorem"
title: "Distributional differentiation is continuous and commutes"
deps: ["def-distributional-derivative", "def-weak-and-strong-topologies-on-distributions", "thm-test-function-operations-are-continuous", "thm-symmetry-of-higher-mixed-partials", "def-regular-distribution-from-a-locally-integrable-function", "lem-test-function-cutoffs-and-euclidean-localization", "thm-integration-by-parts", "thm-riemann-fubini-on-product-rectangles", "lem-riemann-lebesgue-comparison-for-distribution-test-integrands", "def-countable-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Distributional derivatives satisfy $\partial^\alpha\partial^\beta u=\partial^{\alpha+\beta}u$ and are continuous linear maps on $\mathcal D'(\Omega)$ for both the weak and strong distribution topologies. These claims hold in ZF. Assuming Countable Choice for the cited Riemann-to-Lebesgue comparison, if $f\in C^k(\Omega;\mathbb C)$ and $|\alpha|\le k$, then $\partial^\alpha u_f=u_{\partial^\alpha f}$. In particular distributional differentiation extends classical smooth differentiation.

## Facts & Assumptions

[F1] Derivatives are signed transposes of test derivatives ([[def-distributional-derivative]]).

[F2] Weak seminorms test one function, and strong seminorms test bounded sets ([[def-weak-and-strong-topologies-on-distributions]]).

[F3] Test differentiation is continuous and preserves compact supports with $p_m(\partial^\alpha\varphi)\le p_{m+|\alpha|}(\varphi)$ ([[thm-test-function-operations-are-continuous]]).

[F4] Smooth mixed partials commute ([[thm-symmetry-of-higher-mixed-partials]]).

[F5] Regular functionals pair by the bilinear Lebesgue integral ([[def-regular-distribution-from-a-locally-integrable-function]]).

[F6] Compact sets admit smooth compact cutoffs equal to one near them ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F7] One-dimensional integration by parts holds when the factors and their derivatives are continuous on a closed interval ([[thm-integration-by-parts]]).

[F8] For Riemann-integrable functions on boxes with integrable sections, iterated and multiple Riemann integrals agree ([[thm-riemann-fubini-on-product-rectangles]]).

[F9] Under Countable Choice, a bounded Borel Riemann-integrable real function on a nondegenerate box has the same Lebesgue integral ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]).

[F10] Countable Choice, needed only for the classical-compatibility clause below, is [[def-countable-choice]].

## Proof

**Given:** a distribution $u$ and multi-indices $\alpha,\beta$.

1.1 Evaluating consecutive derivatives on a test gives $(-1)^{|\alpha|+|\beta|}u(\partial^\beta\partial^\alpha\varphi)$. By F4 this is $(-1)^{|\alpha+\beta|}u(\partial^{\alpha+\beta}\varphi)$, which is $\partial^{\alpha+\beta}u(\varphi)$ by F1. Linearity follows from the same formula. [given, F1, F4]

2.1 For a single test $\varphi$, the weak seminorm of $\partial^\alpha u$ equals $|u(\partial^\alpha\varphi)|$, a weak seminorm of $u$. For a bounded test set $B$, the set $\partial^\alpha B$ is bounded: any zero-neighborhood has a zero-neighborhood inverse image under the continuous linear test derivative of F3, and absorption of $B$ by that inverse image gives absorption of its image. Hence $p_B(\partial^\alpha u)=p_{\partial^\alpha B}(u)$, a strong seminorm. These equalities prove continuity in both topologies, including for nets, without choice. [step 1.1, F1, F2, F3]

3.1 Now assume F10 and $f\in C^1(\Omega;\mathbb C)$, and fix a test $\varphi$. Use F6 to choose $\chi=1$ near $\operatorname{supp}\varphi$ with compact support in $\Omega$. Extend $g=\chi f$ by zero to $\mathbb R^n$; it is $C^1$ because it vanishes near the complement of $\Omega$. Choose a nondegenerate box containing the supports of $g$ and $\varphi$ in its interior. On each coordinate segment F7 gives $\int g\partial_i\varphi=-\int(\partial_i g)\varphi$, because $\varphi$ is zero at both endpoints. For complex functions expand into real and imaginary parts and apply the real identity to the four products. All integrands and sections are continuous on compact boxes and are Riemann integrable: uniform continuity makes their oscillation Darboux sums arbitrarily small on sufficiently fine uniform grids. For $n>1$, F8 integrates the one-coordinate identity over the remaining coordinates; for $n=1$ this is already the required identity. F9 componentwise converts the two multiple Riemann integrals to Lebesgue integrals. Near the test support $g=f$ and $\partial_i g=\partial_i f$, so the resulting equality is $-\int_\Omega f\partial_i\varphi=\int_\Omega(\partial_i f)\varphi$. [step 2.1, F6, F7, F8, F9, F10]

4.1 Continuous functions and their continuous derivatives are locally integrable by compact boundedness, and their regular functionals are continuous since their absolute pairings are bounded by $\int_K|f|\,p_0$ on each fixed support (or directly by the global $Q_0$ seminorm on that stage). F5 and step 3.1 therefore give $\partial_i u_f=u_{\partial_i f}$. Iterating this identity through at most $k$ derivatives for $f\in C^k$, and using step 1.1, proves the classical-compatibility formula. Degree zero is the identity. Zero functions and the empty domain give zero distributions. The additional axiom enters only through the integral comparison in the classical argument; the algebra and dual continuity remain choice-free. $\square$ [step 3.1, step 1.1, F1, F5]
