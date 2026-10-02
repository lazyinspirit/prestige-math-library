---
id: def-riesz-potential-of-order-alpha
kind: definition
title: "Riesz potential of order alpha"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-countable-choice, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-integrable-real-and-complex-functions-and-their-integrals]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis, §11.2, Proposition 11.4, printed p. 73"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 11.4 defines $I_\\alpha(f)(x)=\\int_{\\mathbb R^n}|x-y|^{\\alpha-n}f(y)\\,dy$ for $0<\\alpha<n$ with the unit kernel $|z|^{\\alpha-n}$."
    - title: "Eleonor Harboure, Spaces of Smooth Functions, §1, printed p. 1"
      url: "https://congreso.us.es/cidama/activos/cursos/EHarbourefull.pdf"
      locator: "§1, printed pp. 1-2: the kernel $k(x)=|x|^{\\alpha-n}$ and the operator $I_\\alpha$ with unit normalization."
---

## Definition

Assume the Axiom of Countable Choice for the Euclidean Lebesgue framework
([[def-countable-choice]]). Fix an integer $n\ge1$ and a real order
$0<\alpha<n$, and work on $\mathbb R^n$ with Lebesgue measure $\lambda_n$ on
the Lebesgue sigma-algebra ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

**The kernel.** Put
$$K_\alpha(z):=|z|^{\alpha-n}\quad(z\neq0),\qquad K_\alpha(0):=0 .$$
Since $\alpha-n<0$, the kernel is strictly positive and continuous on
$\mathbb R^n\setminus\{0\}$ and has a singularity at the origin. The assigned
value $K_\alpha(0)=0$ is a normalization convention: it changes the integrand
$\mathbb R^n\ni y\mapsto K_\alpha(x-y)f(y)$ only at the single point $y=x$,
which is the diagonal point of the domain; every statement in this pair is
unchanged if another finite value is assigned instead, and the value at the
origin is never used as a bound on the kernel everywhere.

**The potential.** Let $f:\mathbb R^n\to\mathbb C$ be measurable, with real and
imaginary parts measurable in the sense of
[[def-integrable-real-and-complex-functions-and-their-integrals]]. The
**Riesz potential of order $\alpha$** of $f$ is defined at a point
$x\in\mathbb R^n$ precisely when the nonnegative integral is finite,
$$\int_{\mathbb R^n}K_\alpha(x-y)\,|f(y)|\,d\lambda_n(y)<\infty,$$
and at every such point it is
$$I_\alpha f(x):=\int_{\mathbb R^n}K_\alpha(x-y)\,f(y)\,d\lambda_n(y).$$
The integral displayed in the definition is the Lebesgue integral of the
complex function $y\mapsto K_\alpha(x-y)f(y)$, which is absolutely convergent
exactly at the points where the first display holds; the value $I_\alpha f(x)$
is then a complex number.

**Scope of the definition.** The set of points at which $I_\alpha f$ is
defined may be empty, all of $\mathbb R^n$, or anything in between, and this
definition asserts nothing about which case occurs: in particular it makes no
claim that $I_\alpha f$ exists at every point, at almost every point, or for
every $f$ belonging to any Lebesgue space. The strict-range theorem of this
pair proves almost-everywhere absolute existence for every
$f\in L^p(\mathbb R^n;\mathbb C)$ when $1<p<n/\alpha$.

**Normalization.** The **unit normalization** is fixed once and for all by
$c_{n,\alpha}=1$ in $I_\alpha f(x)=c_{n,\alpha}\int K_\alpha(x-y)f(y)\,dy$, the
convention of both cited sources. A different positive constant rescales every
potential and every estimate of this pair by that constant; no constant
carrying a Fourier multiplier identity is asserted, and the identification of
$I_\alpha$ with a power of $-\Delta$ is not used here.
