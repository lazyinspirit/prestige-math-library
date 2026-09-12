---
id: "lem-finite-sums-of-product-tests-are-dense-on-product-open-sets"
kind: "lemma"
title: "Finite sums of product tests are dense on product open sets"
deps: ["lem-test-function-cutoffs-and-euclidean-localization", "def-mollifier-family-generated-by-a-unit-mass-smooth-bump", "thm-uniform-derivative-limit-on-a-closed-interval", "cor-change-of-variables-for-compactly-supported-functions", "thm-multidimensional-integral-properties", "thm-multidimensional-darboux-equals-riemann", "thm-riemann-fubini-on-product-rectangles", "thm-sequential-convergence-in-test-function-space"]
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
    - title: "Razvan Gelca, Functional Analysis; complete Chapter 7 reading recorded in batch coverage"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For integers $p,q\ge 1$ and open $U\subseteq\mathbb R^p$, $V\subseteq\mathbb R^q$, every $\Phi\in\mathcal D(U\times V)$ is a limit in the LF test topology of finite sums of products $f(x)g(y)$ with $f\in\mathcal D(U)$ and $g\in\mathcal D(V)$. All approximating supports and the target support lie in one compact product inside $U\times V$. This holds in ZF.

## Facts & Assumptions

[F1] Nonnegative smooth compact cutoffs equal to one near compact sets exist ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F2] The smooth-bump rescaling formula is $\rho_\varepsilon(z)=\varepsilon^{-d}\rho(z/\varepsilon)$ ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]). In this proof all auxiliary integrals and mass normalizations are Riemann integrals; no Lebesgue approximate-identity theorem is invoked.

[F3] Uniform limits of functions and their first derivatives on coordinate intervals identify the derivative of the limit ([[thm-uniform-derivative-limit-on-a-closed-interval]]), componentwise for complex functions.

[F4] Compactly supported Riemann integrands obey diffeomorphic change of variables ([[cor-change-of-variables-for-compactly-supported-functions]]), used only for translations and positive scalar dilations.

[F5] Finite-dimensional Riemann integrals obey linearity and the absolute bound ([[thm-multidimensional-integral-properties]]); all tagged grid sums of an integrable function converge with mesh to its integral ([[thm-multidimensional-darboux-equals-riemann]]); and continuous product integrands obey Riemann Fubini ([[thm-riemann-fubini-on-product-rectangles]]). Complex statements follow by real and imaginary parts.

[F6] Common compact support and uniform convergence of every derivative give LF test convergence ([[thm-sequential-convergence-in-test-function-space]]).

## Proof

**Given:** integers $p,q\ge 1$, open $U\subseteq\mathbb R^p$ and $V\subseteq\mathbb R^q$, and $\Phi\in\mathcal D(U\times V)$, extended smoothly by zero to the whole Euclidean product.

1.1 If $\Phi=0$ use the constant sequence of empty sums. Otherwise let $A,B$ be the compact coordinate projections of its support. Take nonnegative smooth compact bumps in the two coordinate spaces from F1 and divide each by its positive finite Riemann integral. Denote them by $\rho,\sigma$; positivity follows since each is one on a ball, and finiteness from bounded compact support. Fix radii $R_\rho,R_\sigma$ containing their supports. Choose $\varepsilon_0>0$ such that $A+\overline B(0,\varepsilon_0R_\rho)\subseteq U$ and $B+\overline B(0,\varepsilon_0R_\sigma)\subseteq V$, possible by compact interior margins. These two compact neighborhoods form the fixed support product $L$. [given, F1, F2, F5]

2.1 For $0<\varepsilon\le\varepsilon_0$ form the Riemann integral [step 1.1, F2, F3, F4, F5]
$$I_\varepsilon(x,y)=\int\Phi(a,b)\rho_\varepsilon(x-a)\sigma_\varepsilon(y-b)\,da\,db.$$
A fixed box containing $\operatorname{supp}\Phi$ bounds the parameter integral. On any fixed compact target box, take uniform parameter grids with midpoint tags. For every mixed target derivative $D^\gamma$, differentiating the corresponding finite sums gives the tagged sums for the $D^\gamma$-derivative of the integrand. Joint uniform continuity on the compact parameter-target product makes these sums converge uniformly in $(x,y)$: their error from the derivative-integral candidate is at most the parameter-box volume times the largest oscillation on a grid cell. The tagged-sum theorem in F5 identifies the pointwise candidate with the Riemann integral, and repeated applications of F3 on coordinate intervals identify it with $D^\gamma I_\varepsilon$. Thus $I_\varepsilon$ is smooth and supported in $L$.

Applying F4 in the two coordinate blocks and then F5 gives
$$I_\varepsilon(x,y)=\int\Phi(x-\varepsilon s,y-\varepsilon t)\rho(s)\sigma(t)\,ds\,dt.$$
The same uniform tagged-sum argument, now on the fixed support box of $\rho\otimes\sigma$, gives for each mixed derivative
$$D^\gamma I_\varepsilon(x,y)=\int D^\gamma\Phi(x-\varepsilon s,y-\varepsilon t)\rho(s)\sigma(t)\,ds\,dt.$$ [step 1.1, F2, F3, F4, F5]

3.1 The product kernel has Riemann integral one by F5, is nonnegative and has fixed bounded support. Uniform continuity of the globally smooth compactly supported $D^\gamma\Phi$ therefore bounds $\sup|D^\gamma I_\varepsilon-D^\gamma\Phi|$ by its modulus of continuity at $\varepsilon\sqrt{R_\rho^2+R_\sigma^2}$, tending to zero. Uniform continuity on all space follows from uniform continuity on a compact neighborhood of its support and vanishing outside it. This proves convergence of every derivative as $\varepsilon\downarrow0$. [step 2.1, F5]

4.1 Put $P_0=0$. For $j\ge1$, set $\varepsilon_j=\varepsilon_0/(j+1)$ and, for the original $(a,b)$-integral in step 2.1, take uniform product grids with midpoint tags in the fixed parameter box. Each tagged sum has the separated form $\sum_C |C|\Phi(a_C,b_C)\rho_{\varepsilon_j}(x-a_C)\sigma_{\varepsilon_j}(y-b_C)$. Terms with zero coefficient are omitted. Every remaining tag is in the nonzero set of $\Phi$, so its factor supports lie in the two fixed compact neighborhoods defining $L$, even if the parameter box itself is not contained in $U\times V$. For each $j\ge1$, choose the least grid level for which the error from $I_{\varepsilon_j}$ in all target derivatives of total order at most $j$ is less than $1/j$. Such a level exists by the uniform derivative convergence of those tagged sums established in step 2.1. The least-level rule is a defined integer, with no countable choice. Call the resulting finite product sum $P_j$. [step 3.1, step 2.1, F2, F5]

5.1 For fixed $\gamma$, the difference $D^\gamma(P_j-\Phi)$ is bounded, for $j\ge\max(1,|\gamma|)$, by $1/j+\sup|D^\gamma(I_{\varepsilon_j}-\Phi)|$, which tends to zero by step 3.1. All supports are in $L$, so F6 gives $P_j\to\Phi$ in $\mathcal D(U\times V)$. If either domain is empty only the zero test occurs, covered in step 1.1. All integrations were of continuous compactly supported Riemann integrands and all grids were specified, so no choice axiom entered. $\square$ [step 4.1, step 3.1, step 1.1, F6]
