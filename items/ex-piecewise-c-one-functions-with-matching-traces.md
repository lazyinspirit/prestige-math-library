---
id: ex-piecewise-c-one-functions-with-matching-traces
kind: example
title: "Matching $C^1$ pieces across a hyperplane have no jump derivative"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, lem-weak-derivatives-are-unique-almost-everywhere, def-ck-and-multi-index-notation-in-several-variables, def-test-function-space-d-of-an-open-set, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, thm-tonelli-and-fubini-for-completed-product-measures, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-lebesgue-measure-of-a-box-of-every-kind, thm-borel-sigma-algebra-of-a-subspace-is-the-trace, thm-continuous-preimages-of-borel-sets-are-borel, def-borel-and-lebesgue-measurable-function-on-rn, def-borel-sigma-algebra, def-metric-topology, thm-borel-sets-are-lebesgue-measurable, cor-continuous-functions-are-borel-measurable, thm-heine-borel-rn, thm-extreme-value-metric, def-l-p-space-as-a-quotient-by-null-functions, def-calligraphic-l-p-on-a-measure-space, def-l-infinity-on-a-measure-space, def-complex-lp-and-euclidean-test-function-conventions, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, thm-arithmetic-and-lattice-operations-preserve-measurability, cor-mean-value-theorem, def-real-power, cor-exponential-reciprocal-and-positivity, thm-real-power-continuity-and-derivatives, def-integrable-real-and-complex-functions-and-their-integrals, def-integral-over-a-measurable-set, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-algebra-of-derivatives, thm-finitely-many-discontinuities-integrable, cor-newton-leibniz-with-finitely-many-exceptional-points, cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps, def-euclidean-inner-product, def-linear-isometry-and-orthogonal-or-unitary-operator, def-measure-preserving-transformation-and-system, thm-integrals-are-invariant-under-measure-preserving-maps, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: direct
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026), Chapter 1 §1.1"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Example 1.7, printed pp. 3–4; complete one-dimensional piecewise-affine test calculation"
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§3.2, Example 3.3, printed p. 48; the one-dimensional positive-part test calculation"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (2011), Chapter 8"
      url: "https://www.math.utoronto.ca/almut/Brezis.pdf"
      locator: "§8.2, Examples (i) and following sentence, printed pp. 202–203; one-dimensional examples stated as exercises"
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.1, Example 1.7, printed
  pp. 3–4, proves the weak derivative identity for a continuous piecewise
  affine function with a matching value at its single break point by splitting
  the one-dimensional integral and applying integration by parts and the
  fundamental theorem of calculus. This is a one-dimensional model only.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3 §3.2,
  Example 3.3, printed p. 48, computes the one-dimensional test pairing for
  the continuous positive-part function and its step-function weak derivative.
  That calculation is the one-dimensional slice model used here; it does not
  state the higher-dimensional result.
- Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential
  Equations*, Chapter 8 §8.2, Examples (i) and the following sentence, printed
  pp. 202–203, states as exercises that $|x|$ lies in $W^{1,p}$ for every
  $1\le p\le\infty$ and that a continuous piecewise-$C^1$ function on a closed
  interval lies in $W^{1,p}$ for all such $p$. The source gives no proof of
  those exercises and treats only one dimension. The multidimensional claim
  below is proved by coordinate slices.

## Statement

Assume the Axiom of Countable Choice. Let $n\ge2$, let
$Q=(-1,1)^n$, and put
$$K_+=[-1,1]^{n-1}\times[0,1],\qquad K_-=[-1,1]^{n-1}\times[-1,0].$$
For $\mathbb K\in\{\mathbb R,\mathbb C\}$, let
$f_\pm:K_\pm\to\mathbb K$ be $C^1$ up to the boundary: each is continuous
on its closed half-box and each first partial derivative on the interior
extends continuously to that half-box. Suppose
$$f_+(y,0)=f_-(y,0)\qquad(y\in(-1,1)^{n-1}).$$
Define $\widetilde f$ on $[-1,1]^n$ by $\widetilde f(x)=f_+(x)$ when $x_n\ge0$
and $\widetilde f(x)=f_-(x)$ when $x_n<0$, and let $f=\widetilde f|_Q$;
matching traces give continuity across the interface inside $Q$. For
$j=1,\ldots,n$, define
$$g_j(x)=\begin{cases}\partial_jf_+(x),&x_n>0,\\\partial_jf_-(x),&x_n<0,\\0,&x_n=0.\end{cases}$$
using the continuous boundary extensions in the first two cases. Then for
every $1\le p\le\infty$,
$$f\in W^{1,p}(Q;\mathbb K),\qquad D_jf=[g_j]\quad(1\le j\le n).$$
Thus the weak first derivatives agree almost everywhere with the classical
derivatives on the two open half-boxes; their values on the interface are
irrelevant.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $n\ge2$, the two closed half-boxes,
the functions $f_\pm$ and their matching traces, and a test function
$\varphi\in C_c^\infty(Q;\mathbb C)$.

[F1] The only choice assumption declared here is the Axiom of Countable Choice,
which says that every countable family of nonempty sets has a choice function
([[def-countable-choice]]).

[F2] The weak derivative identity for a first coordinate derivative is
$$\int_Q u\,\partial_j\varphi\,dx=-\int_Q v\,\varphi\,dx$$
for every test function ([[def-weak-derivative-of-a-locally-integrable-function]],
[[def-test-function-space-d-of-an-open-set]]). Test functions have compact
support in $Q$ and extend by zero to smooth compactly supported functions on
$\mathbb R^n$; their boundary values on $\partial Q$ vanish. The pairing is
complex bilinear, without conjugation
([[def-test-function-space-d-of-an-open-set]]).

[F3] Membership in $W^{1,p}$ requires an $L^p$ class for the function and for
each weak first derivative; the zero multi-index is the function itself
([[def-sobolev-space-wkp-and-its-norm]],
[[def-ck-and-multi-index-notation-in-several-variables]]). A weak derivative
value class is unique almost everywhere under Countable Choice
([[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F4] The closed half-boxes are compact, and continuous real functions on a
compact metric space are bounded; apply this to real and imaginary components
and to the continuous derivative extensions and test derivatives. The complex
modulus is bounded by the sum of the absolute values of its real and imaginary
parts ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]],
[[def-complex-conjugate-real-imaginary-part-and-modulus]],
[[lem-complex-conjugation-and-modulus-laws]]).

[F5] A continuous map has Borel preimages of Borel sets, and the Borel sigma
algebra on a subspace is the trace of the ambient Borel sigma algebra
([[thm-continuous-preimages-of-borel-sets-are-borel]],
[[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]]). The half-boxes are
closed and hence Borel ([[def-metric-topology]], [[def-borel-sigma-algebra]]).
Consequently finite piecewise gluing on the two open half-boxes and the
interface is Borel. Continuous test functions and their derivatives are Borel
([[cor-continuous-functions-are-borel-measurable]]); Borel functions on
$\mathbb R^n$ are Lebesgue measurable under Countable Choice
([[def-borel-and-lebesgue-measurable-function-on-rn]],
[[thm-borel-sets-are-lebesgue-measurable]]). Sums and products of real and
complex measurable functions remain measurable by the componentwise arithmetic
rules ([[thm-arithmetic-and-lattice-operations-preserve-measurability]],
[[def-complex-lp-and-euclidean-test-function-conventions]]).

[F6] Under Countable Choice, $Q$ has measure $2^n$ and every box with a
degenerate side, including the interface inside a bounded box, is null
([[thm-lebesgue-measure-of-a-box-of-every-kind]]). Lebesgue measure on each
Euclidean factor is sigma-finite ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F7] Real and complex $L^p$ classes are formed from measurable representatives
with finite $p$-integral, or an essential bound for $p=\infty$
([[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-calligraphic-l-p-on-a-measure-space]],
[[def-l-infinity-on-a-measure-space]],
[[def-complex-lp-and-euclidean-test-function-conventions]]). For $p>0$,
$t\mapsto t^p$ is increasing on $[0,\infty)$: on $(0,\infty)$ this follows
from its positive derivative and the mean-value theorem, while at zero it
follows from $0^p=0$ and positivity of positive powers
([[cor-mean-value-theorem]], [[def-real-power]],
[[cor-exponential-reciprocal-and-positivity]],
[[thm-real-power-continuity-and-derivatives]]).

[F8] If a measurable function is bounded by $C\mathbf1_Q$ and
$\lambda_n(Q)<\infty$, then its modulus and each finite positive power have
finite integral: the majorant is a simple function with integral
$C\lambda_n(Q)$, and the nonnegative integral is monotone
([[def-integrable-real-and-complex-functions-and-their-integrals]],
[[def-integral-over-a-measurable-set]],
[[def-integral-of-a-nonnegative-simple-function]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F9] On a closed interval, if a continuous function $G$ is differentiable
except at finitely many interior points and an integrable extension $h$ agrees
with $G'$ elsewhere, then $\int_a^b h=G(b)-G(a)$
([[cor-newton-leibniz-with-finitely-many-exceptional-points]]). Bounded
functions continuous except at finitely many points are Riemann integrable
([[thm-finitely-many-discontinuities-integrable]]), and bounded Riemann
integrable functions have the same Riemann and Lebesgue integrals under
Countable Choice
([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).
The product rule holds on each smooth real-valued piece; the complex case is
obtained componentwise ([[thm-algebra-of-derivatives]]).

[F10] The Euclidean Lebesgue measure on $\mathbb R^{n-1}\times\mathbb R$ is
the completion of the product of the factor Lebesgue measures under Countable
Choice ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).
Tonelli-Fubini applies to integrable functions for that completed product and
gives measurable integrable sections outside factor-null sets
([[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F11] A coordinate permutation is orthogonal and preserves Euclidean Lebesgue
measure ([[def-euclidean-inner-product]],
[[def-linear-isometry-and-orthogonal-or-unitary-operator]],
[[cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps]]); integrals
of integrable functions are invariant under a measure-preserving map
([[def-measure-preserving-transformation-and-system]],
[[thm-integrals-are-invariant-under-measure-preserving-maps]]).
The complex Lebesgue integral is componentwise and linear on $L^1$
([[def-complex-lp-and-euclidean-test-function-conventions]],
[[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** direct coordinate slices.

1.1 The two half-boxes are compact, so [F4] gives a finite pointwise bound $B$ for $f_\pm$ and every continuous extension of $\partial_jf_\pm$. Extend $f$ and the $g_j$ by zero outside $Q$. On each closed half-box, the source functions and derivative extensions are continuous; using the Borel trace fact in [F5], their level preimages on each piece are Borel. The piecewise definitions on the strict half-boxes, the interface (where $g_j=0$), and the complement of $Q$ therefore make these extensions Borel. The test functions and their first derivatives are Borel by [F5]. Hence $f$, $g_j$, and the integrands formed from them and the tests are Lebesgue measurable under the exact assumption [F1]. [F1, F4, F5, given]

2.1 For each test $\varphi$, set $$H_j=f\,\partial_j\varphi+g_j\varphi\quad\text{on }Q,$$ and extend $H_j$ by zero off $Q$. The bounds from [F4] and compact support of the test give a finite constant $C_j$ with $|H_j|\le C_j\mathbf1_Q$, so $H_j\in L^1(\mathbb R^n)$ by [F6, F8]. Put $C:=1+B$; each representative satisfies $|f|,|g_j|\le C\mathbf1_Q$. For finite $p$, [F7] gives $|f|^p,|g_j|^p\le C^p\mathbf1_Q$, so [F6, F8] proves their $L^p$ membership; for $p=\infty$ the pointwise bound proves essential boundedness. The $p=1$ case also gives local integrability. The interface is null by [F6], so the chosen values $g_j=0$ there do not change the a.e. classes. All measure claims here use [F1]. [F1, F4, F6, F7, F8, step 1.1]

3.1 Fix $j=n$ and $y\in(-1,1)^{n-1}$, and put $G_y(t)=\widetilde f(y,t)\varphi(y,t)$ on $[-1,1]$. It is continuous at $t=0$ because the two traces agree; on each side the product rule [F9] gives $G_y'(t)=H_n(y,t)$. The section $H_n(y,\cdot)$ is bounded and continuous away from at most $0$, so it is Riemann integrable by [F9]. Apply finite-exception Newton-Leibniz [F9] with exceptional set $\{0\}$. Compact support makes $G_y(-1)=G_y(1)=0$, so the Riemann integral of the section is zero; under Countable Choice its Lebesgue integral is the same by [F9] and [F1]. Whenever $G_y,H_n(y,\cdot)$ are complex-valued, split both into real and imaginary parts; componentwise integration in [F11] preserves zero. [F1, F2, F9, F11, given, step 2.1]

4.1 Fix $j<n$ and reorder only the first $n-1$ coordinates so $x_j$ is first and $x_n$ remains last. This orthogonal coordinate permutation preserves the integral of $H_j$ by [F11]. For fixed other coordinates $z$ with $z_n\ne0$, $G_z(t)=\widetilde f(x_1,\ldots,x_{j-1},t,x_{j+1},\ldots,x_n)\varphi(x_1,\ldots,t,\ldots,x_n)$ is continuously differentiable on $[-1,1]$ and has derivative $H_j$ along the section by [F9]. Its endpoints vanish, so finite-exception Newton-Leibniz gives zero section integral, first as a Riemann integral and then as a Lebesgue integral. The excluded parameter set $z_n=0$ is a degenerate box in $\mathbb R^{n-1}$ and is null by [F6] under [F1], so the section integral is zero for almost every $z$; for complex-valued products split into real and imaginary parts as in step 3.1. [F1, F6, F9, F11, given, step 2.1, step 3.1]

5.1 Under [F1], [F10] applies Fubini to $H_n$ in $\mathbb R^{n-1}\times\mathbb R$ and to each tangential $H_j$ after the permutation in step 4.1 in $\mathbb R\times\mathbb R^{n-1}$. Steps 3.1 and 4.1 give zero section integrals almost everywhere, so $$\int_Q f\,\partial_j\varphi\,dx+\int_Q g_j\varphi\,dx=\int_{\mathbb R^n}H_j\,dx=0\qquad(j=1,\ldots,n).$$ For $\alpha=0$ the weak identity is the identity itself; for $\alpha=e_j$ it is exactly the weak-derivative test identity [F2], with $g_j$ locally integrable by step 2.1. Uniqueness [F3] identifies this value class as $D_jf$, and the $L^p$ bounds of step 2.1 with the Sobolev definition [F3] give $f\in W^{1,p}(Q;\mathbb K)$ for every $1\le p\le\infty$. [F1, F2, F3, F6, F10, F11, step 2.1, step 3.1, step 4.1] ∎
