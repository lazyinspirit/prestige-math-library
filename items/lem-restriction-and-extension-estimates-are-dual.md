---
id: lem-restriction-and-extension-estimates-are-dual
kind: lemma
title: Restriction and extension estimates are dual
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- def-fourier-restriction-and-adjoint-extension-operators
- lem-fourier-pairing-for-a-finite-measure-and-schwartz-data
- lem-complex-lp-duality-from-real-lp-duality
- thm-bounded-linear-operator-equivalences
- thm-extension-of-a-bounded-map-from-a-dense-subspace
- def-countable-choice
- thm-c-c-infinity-rn-is-dense-in-l-p-of-rn
- def-complex-l-two-inner-product
- thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- lem-schwartz-cutoffs-from-the-standard-smooth-step
- thm-monotone-convergence-for-the-integral
- thm-complex-lp-completeness-and-almost-everywhere-subsequences
- thm-complex-holder-minkowski-and-the-quotient-norm
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: K. Merz, Some notes on restriction theory
    url: https://www.iaa.tu-bs.de/konmerz/ss25/fr/material/NotesOnRestriction.pdf
    locator: '§2, printed pp.5–7, equations (2.1)–(2.3): restriction on test functions, extension and duality; the local proof verifies integrability and density explicitly.'
---

## Statement

Assume Countable Choice and let $1<p<\infty$ with conjugate exponent $p'$. For a compact hypersurface $S$ with surface measure $\sigma$ and the operators $R_0,E$ of [[def-fourier-restriction-and-adjoint-extension-operators]] the following are equivalent: (a) there is $C<\infty$ with $\|\widehat f\|_{L^2(\sigma)}\le C\|f\|_{L^p}$ for all $f\in\mathcal S(\mathbb R^n)$, so that $R_0$ has a unique bounded extension $R:L^p(\mathbb R^n)\to L^2(\sigma)$; (b) there is $C<\infty$ with $\|Eg\|_{L^{p'}(\mathbb R^n)}\le C\|g\|_{L^2(\sigma)}$ for all $g\in L^2(\sigma)$. The least constants agree, and $E$ is the adjoint of $R$ under the $L^p$–$L^{p\prime}$ and $L^2(\sigma)$ pairings: $\int Eg\,\overline f\,dx=\int_Sg\,\overline{Rf}\,d\sigma$.

## Facts & Assumptions

**Given:** Countable Choice, $1<p<\infty$ with conjugate $p'$, a compact hypersurface $S$ with surface measure $\sigma$ (finite), and the operators $R_0:\mathcal S(\mathbb R^n)\to L^2(\sigma)$, $f\mapsto\widehat f|_S$, and $E:L^1(\sigma)\to C_b(\mathbb R^n)$, $g\mapsto(g\sigma)^\vee$, of [[def-fourier-restriction-and-adjoint-extension-operators]].

[F1] The operator $E$ is defined on $L^1(\sigma)\supseteq L^2(\sigma)$ by an everywhere-defined bounded uniformly continuous function, the surface measure is finite, and $R_0$ is pointwise defined on Schwartz data; $L^p(\sigma;\mathbb C)$ and $L^p(\mathbb R^n;\mathbb C)$ are the complex Lebesgue classes. ([[def-fourier-restriction-and-adjoint-extension-operators]])

[F2] Pairing identity: for every finite complex Borel measure $\mu$ and all $F,G\in\mathcal S(\mathbb R^n)$, $\int(G\mu)^\vee\overline F\,dx=\int G\overline{\widehat F}\,d\mu$. ([[lem-fourier-pairing-for-a-finite-measure-and-schwartz-data]])

[F4] $C_c^\infty(\mathbb R^n)\subset\mathcal S$ is dense in $L^p(\mathbb R^n)$ for $1\le p<\infty$; smooth ball cutoffs exist. ([[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]], [[lem-schwartz-cutoffs-from-the-standard-smooth-step]])

[F5] Complex $L^p$ spaces are complete under Countable Choice; a bounded map from a dense subspace to a Banach space extends uniquely with the same norm. Cauchy–Schwarz and complex Hölder hold, including endpoints. ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]], [[thm-extension-of-a-bounded-map-from-a-dense-subspace]], [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]], [[thm-complex-holder-minkowski-and-the-quotient-norm]])

[F6] Absolutely integrable product kernels admit Fubini, and nonnegative integrals obey monotone convergence. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-monotone-convergence-for-the-integral]])



## Proof

**Proof technique:** direct; prove the pairing by Fubini and obtain extension integrability by compactly supported norm tests.

1.1 For $g\in L^2(\sigma)\subset L^1(\sigma)$ and $F\in\mathcal S$, the kernel $e^{2\pi ix\cdot\omega}g(\omega)\overline{F(x)}$ has absolute integral $\|g\|_1\|F\|_1<\infty$. Fubini gives $\int Eg\,\overline F\,dx=\int_Sg\,\overline{\widehat F}\,d\sigma$. This is an absolutely convergent integral pairing, without asserting $Eg\in L^2(\mathbb R^n)$. [F1, F2, F6]

2.1 Assume (a), fix $g$, and set $h=Eg$, $M=C\|g\|_2$. Step 1.1 and Cauchy–Schwarz give $|\int h\overline F|\le M\|F\|_p$ on Schwartz functions. For a bounded ball $B$, put $v=\mathbf1_Bh|h|^{p'-2}$, assigning zero where $h=0$. Since $h$ is bounded, $v\in L^p$ and $A=\int_B|h|^{p'}<\infty$. Approximate $v$ in $L^p$ by $C_c^\infty$ functions and multiply by a fixed smooth cutoff equal to one on $B$, supported in a larger bounded ball. These approximants still converge to $v$ in $L^p$, and their integrals against $h$ converge, because $h$ is bounded and their supports have uniformly finite measure. Passing to the limit gives $A\le M A^{1/p}$. Thus $A^{1/p'}\le M$ (also when $A=0$). Letting $B$ increase to $\mathbb R^n$ and using monotone convergence proves $h\in L^{p'}$ and $\|h\|_{p'}\le M$, establishing (b). [F1, F4, F5, F6, step 1.1, algebra]

2.2 Assume (b). For Schwartz $F$, step 1.1 and Hölder give $|\int_Sg\overline{R_0F}\,d\sigma|\le C\|g\|_2\|F\|_p$ for every $g\in L^2(\sigma)$. If $R_0F\ne0$, take $g=R_0F/\|R_0F\|_2$; otherwise the desired estimate is immediate. Hence $\|R_0F\|_2\le C\|F\|_p$, proving (a). No density assertion on surface functions is needed. [F1, F5, step 1.1, algebra]

3.1 By [F4] and [F5], (a) gives the unique extension $R:L^p\to L^2(\sigma)$. For each $g$, the pairing in step 1.1 extends by continuity in $f$ from Schwartz data to every $f\in L^p$, since $Eg\in L^{p'}$ by step 2.1. This identifies $E$ as the adjoint under the displayed Banach dual pairings. Steps 2.1 and 2.2 preserve each admissible constant, so the least constants, and the operator norms, agree. Countable Choice is the hypothesis of the density and completeness suppliers. [F4, F5, step 1.1, step 2.1, step 2.2] ∎
