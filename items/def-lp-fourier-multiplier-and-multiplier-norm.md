---
id: def-lp-fourier-multiplier-and-multiplier-norm
kind: definition
title: Lp Fourier multiplier and its norm
status: draft
origin: pipeline
deps:
  - def-schwartz-space-and-its-seminorms
  - def-translation-invariant-fourier-multiplier-on-schwartz-space
  - def-complex-lp-and-euclidean-test-function-conventions
  - thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p
  - lem-complex-lp-completeness-density-and-inner-product
  - thm-extension-of-a-bounded-map-from-a-dense-subspace
  - thm-locally-integrable-functions-embed-in-distributions
  - def-countable-choice
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: "§2.5.5, Definition 2.5.11 and the following discussion of the Schwartz core and of p=infinity, printed pp. 155-156"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
      locator: "§3.9, Definition 3.11, printed p. 12"
---

## Definition

Assume [[def-countable-choice|Countable Choice]] and let $n\ge1$. Let
$m:\mathbb R^n\to\mathbb C$ be measurable, with Schwartz domain $D_m$ and
operator $T_m$ as in
[[def-translation-invariant-fourier-multiplier-on-schwartz-space]], and fix
$1\le p<\infty$.

**Definition of an $L^p$ Fourier multiplier.** The symbol $m$ is an **$L^p$
Fourier multiplier** when:

1. $\mathcal S(\mathbb R^n)\subseteq D_m$, so $T_m$ is defined on all of
   Schwartz space;
2. for every $f\in\mathcal S(\mathbb R^n)$ the tempered distribution $T_mf$ is
   the regular distribution of some class in
   $L^p(\mathbb R^n;\mathbb C)$, in the conventions of
   [[def-complex-lp-and-euclidean-test-function-conventions]];
3. there is a finite constant $C$ with $\|T_mf\|_{L^p}\le C\|f\|_{L^p}$ for
   every $f\in\mathcal S(\mathbb R^n)$, where the norm on the left is that of
   the uniquely determined $L^p$ class representing $T_mf$.

Condition 2 is meaningful because the regular-distribution map is injective on
locally integrable classes
([[thm-locally-integrable-functions-embed-in-distributions]]), so the $L^p$
class representing $T_mf$ is unique. The set of admissible constants $C$ in
condition 3 is nonempty by hypothesis and bounded below by $0$.

**The multiplier norm.** Assume $m$ is an $L^p$ multiplier. Then the assignment
$f\mapsto T_mf$ is a complex-linear map from the dense subspace
$\mathcal S(\mathbb R^n)$ of $L^p(\mathbb R^n;\mathbb C)$ into the Banach space
$L^p(\mathbb R^n;\mathbb{C})$: the compactly supported smooth functions are
contained in Schwartz space and are dense in $L^p$ for finite $p$
([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]),
and $L^p$ is complete ([[lem-complex-lp-completeness-density-and-inner-product]]).
By [[thm-extension-of-a-bounded-map-from-a-dense-subspace]] there is a unique
bounded linear $\widetilde{T_m}:L^p(\mathbb R^n;\mathbb C)\to
L^p(\mathbb R^n;\mathbb C)$ extending it, with
$$\|\widetilde{T_m}\|=\inf\{C:\|T_mf\|_p\le C\|f\|_p\text{ for all }f\in\mathcal S(\mathbb R^n)\}.$$
We write $T_m$ for this extension as well and define the **multiplier norm**
$$\|m\|_{M_p}:=\|T_m\|_{L^p\to L^p}=\|\widetilde{T_m}\|.$$
The infimum is a minimum, attained by the operator norm of the extension. This
definition asserts nothing about which symbols are multipliers: no Mihlin type
condition, no endpoint $p=1$ or $p=\infty$ boundedness claim, and no algebraic
property of the set $M_p=\{m:\|m\|_{M_p}<\infty\}$ is stated here.

**The case $p=\infty$.** At $p=\infty$ the Schwartz core is not dense. A
Schwartz function satisfies $|\varphi(x)|\le C_N(1+|x|)^{-N}$ for every $N$,
because $(1+|x|^2)^N$ is a finite combination of monomials and each
$|x^\alpha\varphi(x)|$ is a finite Schwartz seminorm
([[def-schwartz-space-and-its-seminorms]]), so every Schwartz class has a
$C_0$ representative; the $L^\infty$-closure of $C_c(\mathbb R^n;\mathbb C)$ is
exactly the set of classes with a $C_0$ representative, and it does not contain
the class of the constant function $1$
([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]).
Hence uniqueness of a bounded extension of the Schwartz-core action cannot be
inferred, and this definition attaches no intrinsic norm
$\|m\|_{M_\infty}$ to the core action alone. Whether a chosen bounded extension
exists on $L^\infty$, and which one is intended, are separate specification
decisions not made here.
