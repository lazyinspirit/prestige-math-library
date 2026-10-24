---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-5.md"
      - "research/frontier-38-owner-30-alpha-batch-5-5a.md"
      - "research/frontier-38-owner-30-step5-hash-5-post-5a.json"
    content_sha256: "d844f9fc608af031ac32f242faa4b495faa876e7fe7aced1214d74dc410fd4ef"
id: lem-holder-cz-kernels-satisfy-hormander-cancellation
kind: lemma
title: "Standard Hölder kernels satisfy the Hörmander condition"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-calderon-zygmund-kernel-and-principal-value-operator, def-countable-choice, def-standard-holder-calderon-zygmund-kernel, prop-measure-monotonicity, thm-polar-coordinates-formula-for-lebesgue-measure]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.3.2, comparison of (5.3.11) with (5.3.12), printed p. 359"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "§3.8, footnote after (3.13): the smoothness condition implies the Hörmander condition, printed p. 11"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Every standard
$\delta$-Hölder Calderón–Zygmund kernel with constant $A_2'$
([[def-standard-holder-calderon-zygmund-kernel]]) is a Calderón–Zygmund kernel
in the sense of the base definition
([[def-calderon-zygmund-kernel-and-principal-value-operator]]), and its
Hörmander constant may be taken to be
$$A_2=|S^{n-1}|\,2^{-\delta}\delta^{-1}A_2'.$$

## Facts & Assumptions

**Given:** Countable Choice; a standard $\delta$-Hölder Calderón–Zygmund kernel $k$ with constant $A_2'$, $0<\delta\le1$, and its a priori annular constant $A_1$; a vector $y\ne0$.

[F1] $k$ is measurable on $\mathbb R^n\setminus\{0\}$, integrable on compact subsets of $\mathbb R^n\setminus\{0\}$, satisfies the annular bound with $A_1$, and satisfies $|k(x-y)-k(x)|\le A_2'|y|^\delta|x|^{-n-\delta}$ whenever $|x|\ge2|y|>0$ ([[def-standard-holder-calderon-zygmund-kernel]], [[def-calderon-zygmund-kernel-and-principal-value-operator]]).

[F2] Polar coordinates: for a Borel function $g\ge0$ on $\mathbb R^n$, $\int_{\mathbb R^n}g\,d\lambda=\int_0^\infty\int_{S^{n-1}}g(r\omega)\,d\sigma(\omega)\,r^{n-1}dr$, where $\sigma$ is the surface measure with $\sigma(S^{n-1})=|S^{n-1}|$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]); the integral over a smaller domain is at most the integral over a larger one ([[prop-measure-monotonicity]]).

## Proof

**Proof technique:** direct.

1.1 Fix $y\ne0$. By the pointwise Hölder bound of [F1] and monotonicity of the integral, $$\int_{|x|\ge2|y|}|k(x-y)-k(x)|\,dx\le A_2'|y|^\delta\int_{|x|\ge2|y|}|x|^{-n-\delta}dx.$$ [F1, F2, algebra]

1.2 Polar coordinates evaluate the radial integral: substituting $x=r\omega$ and using $|x|^{-n-\delta}r^{n-1}=r^{-1-\delta}$, $$\int_{|x|\ge2|y|}|x|^{-n-\delta}dx=|S^{n-1}|\int_{2|y|}^\infty r^{-1-\delta}dr=|S^{n-1}|\frac{(2|y|)^{-\delta}}{\delta},$$ the last step being the elementary integral $\int_a^\infty r^{-1-\delta}dr=a^{-\delta}/\delta$ for $a>0$ and $\delta>0$. [F2, algebra]

2.1 Combining steps 1.1 and 1.2 gives $\int_{|x|\ge2|y|}|k(x-y)-k(x)|dx\le A_2'|y|^\delta|S^{n-1}|(2|y|)^{-\delta}\delta^{-1}=|S^{n-1}|2^{-\delta}\delta^{-1}A_2'$; taking the supremum over $y\ne0$ shows that Hörmander's condition holds with $A_2=|S^{n-1}|2^{-\delta}\delta^{-1}A_2'$, while the annular bound holds with $A_1$ by hypothesis. Hence $k$ is a Calderón–Zygmund kernel in the base sense with the stated Hörmander constant. [F1, step 1.1, step 1.2, algebra] ∎
