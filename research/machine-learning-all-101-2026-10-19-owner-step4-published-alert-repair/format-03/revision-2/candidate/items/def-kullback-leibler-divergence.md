---
id: def-kullback-leibler-divergence
kind: definition
title: "Kullback–Leibler divergence"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-axiom-of-choice
  - def-likelihood-ratio-as-rn-derivative
  - def-natural-logarithm
  - def-nonnegative-lebesgue-integral
  - def-positive-and-negative-parts-of-a-function
  - def-probability-measure
  - def-real-exponential-function-and-e
  - def-extended-real-valued-measurable-function
  - def-integral-logarithm
  - cor-integral-logarithm-agrees-with-natural-logarithm
  - cor-exponential-reciprocal-and-positivity
  - cor-mean-value-theorem
  - lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative
  - thm-algebra-of-continuous-functions
  - thm-algebra-of-derivatives
  - thm-natural-logarithm-laws
  - thm-exponential-is-strictly-increasing
  - thm-integral-logarithm-derivative-and-normalisation
  - thm-likelihood-ratio-change-of-measure
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4, Definition 4.5 and Proposition 4.6"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 8, §8.2.2"
      url: "https://stanford.edu/class/stats311/lecture-notes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
---

## Definition

Let $P,Q$ be probability measures on the same measurable space
(Probability measures and probability spaces). Absolute continuity $P\ll Q$ has the convention
of Absolute continuity of a signed or complex measure with respect to a positive measure. If
$P\not\ll Q$, define $D(P\|Q)=+\infty$. If $P\ll Q$, assume AC
(The Axiom of Choice) as in Likelihood ratio as a Radon–Nikodym derivative and
let $r=dP/dQ$ be a finite-valued nonnegative measurable representative of its
Radon–Nikodym class; such a representative exists by
A sigma-finite positive measure has a nonnegative Radon–Nikodym density version.
On $\{r=0\}$ set $\ell=0$, and on $\{r>0\}$ set $\ell=\log r$. This
function is measurable: for $a\ge0$, $\{\ell>a\}=\{r>\exp(a)\}$, and for
$a<0$, $\{\ell>a\}=\{r=0\}\cup\{r>\exp(a)\}$, by the inverse and
monotonicity properties of the natural logarithm
(The natural logarithm as the inverse of the exponential function, Order, continuity, range, and the product, quotient, and reciprocal laws for the natural logarithm). These are
measurable sets by Extended-real-valued measurable functions. Since
$P(\{r=0\})=\int_{\{r=0\}}r\,dQ=0$ by
Likelihood-ratio change of measure, the value chosen there does not
affect $\int\ell\,dP$. Define
$$D(P\|Q):=\int \ell\,dP,$$
where $\log$ is the natural logarithm (The natural logarithm as the inverse of the exponential function).

The definition is independent of the representative: two representatives
agree $Q$-almost everywhere, hence $P$-almost everywhere. Put
$$\psi(0):=0,\qquad \psi(t):=t\log t\quad(t>0).$$
The function $\psi$ is continuous at zero: for $s\ge1$,
$$0\le \frac{\log s}{s}=\frac1s\int_1^s\frac{du}{u}\le\frac1s\int_1^s\frac{du}{\sqrt u}\le\frac2{\sqrt s}.$$
Thus $t\log t\to0$ as $t\downarrow0$; here $L=\log$ by
The integral logarithm $L$ is the published natural logarithm and
The integral logarithm $L(x):=\int_1^x\frac{dt}{t}$ for $x>0$. On $(0,\infty)$, $\psi$ is a product of continuous
functions by Order, continuity, range, and the product, quotient, and reciprocal laws for the natural logarithm and
Sums, scalar multiples, products, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants, the identity and every polynomial function, so $\psi$ is continuous on
$[0,\infty)$ and $\psi(r)$ is measurable by
Extended-real-valued measurable functions. Its signed integral is
defined by the positive and negative parts
(The positive and negative parts of a function,
The nonnegative Lebesgue integral).

For $0<t\le1$, the function $-t\log t$ has derivative $-\log t-1$ and
maximum $1/e$ at $t=1/e$: $e=\exp(1)>1$ by
The real exponential function and the number $e$ by a power series and
The exponential function is strictly increasing, $1/e=\exp(-1)$ by
The exponential is positive and satisfies $\exp(-x)=1/\exp(x)$, and $\log(1/e)=-1$ by
Order, continuity, range, and the product, quotient, and reciprocal laws for the natural logarithm and the inverse definition. The mean value
theorem gives increase before and decrease after this point
(Sums, scalar multiples, products and quotients: $(f+g)'(c) = f'(c) + g'(c)$, $(\alpha f)'(c) = \alpha f'(c)$, $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$, and $(f/g)'(c) = \bigl(f'(c)g(c) - f(c)g'(c)\bigr)/g(c)^{2}$ when $g(c) \ne 0$, The integral logarithm satisfies $L'(x)=1/x$ for $x>0$ and $L(1)=0$,
The integral logarithm $L$ is the published natural logarithm, The mean value theorem, as the case $g(x) = x$ of Cauchy's: for $f$ continuous on $[a,b]$ with $a < b$ and differentiable on $(a,b)$ there is $c \in (a,b)$ with $f(b) - f(a) = f'(c)(b-a)$).
At $t=0$ the negative part is zero. Since $Q$ is a probability measure,
$$\int \psi(r)^-\,dQ\le\frac1e.$$
The change-of-measure identity of Likelihood-ratio change of measure,
applied to $\ell^-$ gives $\int\ell^-\,dP=\int\psi(r)^-\,dQ\le1/e$,
so $\int\ell\,dP$ is well-defined; applying it to both positive and negative
parts gives
$$D(P\|Q)=\int\ell\,dP=\int\psi(r)\,dQ=\int r\log r\,dQ,$$
with $0\log0:=0$ and a finite negative part. Therefore the extended integral
is well-defined without an $\infty-\infty$ ambiguity.

This convention is directional: the first argument must be absolutely
continuous with respect to the second for the integral formula to apply.

## Definition references

[[def-probability-measure]]

[[def-absolutely-continuous-with-respect-to-a-positive-measure]]

[[def-axiom-of-choice]]

[[def-likelihood-ratio-as-rn-derivative]]

[[lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative]]

[[def-natural-logarithm]]

[[thm-natural-logarithm-laws]]

[[def-extended-real-valued-measurable-function]]

[[thm-likelihood-ratio-change-of-measure]]

[[cor-integral-logarithm-agrees-with-natural-logarithm]]

[[def-integral-logarithm]]

[[thm-algebra-of-continuous-functions]]

[[def-positive-and-negative-parts-of-a-function]]

[[def-nonnegative-lebesgue-integral]]

[[def-real-exponential-function-and-e]]

[[thm-exponential-is-strictly-increasing]]

[[cor-exponential-reciprocal-and-positivity]]

[[thm-algebra-of-derivatives]]

[[thm-integral-logarithm-derivative-and-normalisation]]

[[cor-mean-value-theorem]]

