---
id: def-cyclic-convolution-on-z-mod-n
kind: definition
title: "The unnormalised cyclic convolution on $\\mathbb Z/N\\mathbb Z$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
justified_by: []
aliases: []
deps: [def-counting-measure,
       def-finite-sum-in-a-commutative-monoid,
       def-function-space,
       def-injection-surjection-bijection,
       def-integers-modulo-n,
       lem-finite-sum-reindexing-and-fubini,
       thm-complex-numbers-form-a-field,
       thm-integers-modulo-n-basic-algebra,
       thm-standard-representatives-modulo-n]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§11, formula (11.30): convolution on $\\Gamma_n$ with a factor $1/n$; identifying $\\omega^j$ with $[j]_N$ and multiplying that convolution by $N$ gives the unnormalised convention here"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $N\ge1$ and let $\mathbb C^{\mathbb Z/N}$ be the complex vector space of functions on the finite group $\mathbb Z/N\mathbb Z$ ([[def-function-space]]). For $f,g\in\mathbb C^{\mathbb Z/N}$ the **cyclic convolution** of $f$ and $g$, unnormalised, is the function $f*g:\mathbb Z/N\mathbb Z\to\mathbb C$ defined for $x\in\mathbb Z/N\mathbb Z$ by

$$(f*g)(x):=\sum_{y\in\mathbb Z/N}f(y)\,g(x-y),$$

where $x-y$ is the group operation of $\mathbb Z/N\mathbb Z$ ([[thm-integers-modulo-n-basic-algebra]]) and the sum is the finite sum in the additive commutative monoid of $\mathbb C$ over the finite index set $\mathbb Z/N\mathbb Z$ ([[def-finite-sum-in-a-commutative-monoid]]). No factor $1/N$ or $1/\sqrt N$ is inserted, and this unnormalised convention is the one used throughout the page.

**Well-definedness.** The standard-representatives bijection gives $|\mathbb Z/N\mathbb Z|=N$ ([[thm-standard-representatives-modulo-n]]). For fixed $x$, $f(y)$ and $g(x-y)$ are values at classes, so the finite sum of the complex family $y\mapsto f(y)g(x-y)$ is a single complex number ([[def-finite-sum-in-a-commutative-monoid]]). Thus $x\mapsto(f*g)(x)$ is a well-defined function $\mathbb Z/N\mathbb Z\to\mathbb C$.

**The operation is commutative.** Fix $x\in\mathbb Z/N\mathbb Z$ and let $h:\mathbb Z/N\mathbb Z\to\mathbb Z/N\mathbb Z$ be $h(y):=x-y$; then $h(h(y))=x-(x-y)=y$, so $h$ is its own two-sided inverse and hence a bijection ([[def-injection-surjection-bijection]], [[thm-integers-modulo-n-basic-algebra]]). Reindexing the finite sum along a bijection ([[lem-finite-sum-reindexing-and-fubini]], part 1) with the substitution $z:=x-y$ gives

$$(f*g)(x)=\sum_{y\in\mathbb Z/N}f(y)\,g(x-y)=\sum_{z\in\mathbb Z/N}f(x-z)\,g(z)=\sum_{z\in\mathbb Z/N}g(z)\,f(x-z)=(g*f)(x),$$

the middle equality being commutativity of multiplication in $\mathbb C$ ([[thm-complex-numbers-form-a-field]]). Hence $f*g=g*f$.

Attached to the finite set $\mathbb Z/N\mathbb Z$ is its counting set function, which gives weight $1$ to each point ([[def-counting-measure]]); the displayed sum is the convolution of $f$ and $g$ against that weight on the finite group. This cyclic convolution is a different operation from the linear convolution of finite sequences of coefficients, which agrees with it only after the sequences are padded with enough zeros; the companion page exhibits the wrap that occurs without such padding, and the transform law proved later on this page computes the cyclic, not the linear, convolution.

## Remarks

- **The factor that this convention costs.** Because no normalisation is built into $*$, the unitary transform of this page does not turn $*$ into an unadorned pointwise product: the transform law later on this page carries a factor $\sqrt N$. That factor is not an artefact of the proof but the exact price of leaving the convolution unnormalised, and it is recorded here once so that no later item silently mixes the two conventions.

- **Cyclic convolution as reduction of polynomial products.** Writing a function on $\mathbb Z/N\mathbb Z$ as the coefficient list of a residue-class polynomial identifies $(f*g)(x)$ with the coefficient of $z^x$ in the product of the two polynomials taken modulo $z^N-1$: exponents add under the group operation and are reduced modulo $N$. This is the viewpoint of Taylor's (11.30)–(11.33) and of the MIT lecture, and it is what makes the diagonalisation of $*$ by the discrete Fourier transform the discrete analogue of the Fourier-multiplier calculus.
