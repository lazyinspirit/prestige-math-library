---
id: cex-clt-can-fail-with-infinite-variance-under-square-root-n-scaling
kind: counterexample
title: Infinite variance can defeat square-root-n CLT scaling
deps: ["thm-ftc-second-part", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "thm-derivative-of-exponential", "thm-sine-and-cosine-derivatives", "thm-chain-rule", "thm-monotone-convergence-for-the-integral", "thm-dominated-convergence", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "thm-integration-against-a-density", "def-integrable-real-and-complex-functions-and-their-integrals", "thm-principal-inverse-tangent-calculus", "def-principal-inverse-tangent", "cor-density-inversion-from-an-integrable-characteristic-function", "thm-lebesgue-measure-of-a-box-of-every-kind", "cor-countable-independent-copies-exist", "lem-ac-supplies-sequential-choices-for-probability-constructions", "lem-characteristic-functions-under-affine-maps-and-independent-sums", "thm-levy-continuity-theorem-forward-direction", "lem-basic-properties-of-characteristic-functions", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-continuous-implies-integrable", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "thm-algebra-of-derivatives", "thm-complex-exponential-addition-and-real-extension", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Example 3.3.16'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Billingsley, Probability and Measure, continuity theorem
      url: https://www.colorado.edu/amath/sites/default/files/attached-files/billingsley.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement refuted

Assume AC. There are iid real variables with density $c(x)=1/[\pi(1+x^2)]$ and infinite second moment such that $n^{-1/2}\sum_{k=1}^nX_k$ has no weak limit. In particular square-root-n scaling need not produce a normal limit when finite variance is dropped.

## Facts & Assumptions

[F1] Continuous derivatives integrate to compact endpoint differences. [[thm-ftc-second-part]].

[F2] Compact continuous Riemann integrals agree with Lebesgue integrals under countable choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F3] The real exponential differentiates to itself. [[thm-derivative-of-exponential]].

[F4] Trigonometric derivatives justify real-component exponential antiderivatives. [[thm-sine-and-cosine-derivatives]].

[F5] The chain rule applies to real linear changes of variable. [[thm-chain-rule]].

[F6] Increasing nonnegative integer truncations converge in integral. [[thm-monotone-convergence-for-the-integral]].

[F7] Integrable density majorants allow complex truncation limits. [[thm-dominated-convergence]].

[F8] A nonnegative measurable density defines a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

[F9] For nonnegative measurable $f$ and $g$, integration against the density measure $f\,d\mu$ satisfies $\int g\,d(f\,d\mu)=\int gf\,d\mu$. [[thm-integration-against-a-density]].

[F10] The derivative of arctangent is 1/(1+x^2). [[thm-principal-inverse-tangent-calculus]].

[F11] Arctangent takes its values strictly between -pi/2 and pi/2. [[def-principal-inverse-tangent]].

[F12] An integrable transform gives a continuous probability density by inversion under AC. [[cor-density-inversion-from-an-integrable-characteristic-function]].

[F13] A real interval has Lebesgue measure its length. [[thm-lebesgue-measure-of-a-box-of-every-kind]].

[F14] Independent copies of a given law exist under DC and countable choice. [[cor-countable-independent-copies-exist]].

[F15] AC supplies dependent and countable choice. [[lem-ac-supplies-sequential-choices-for-probability-constructions]].

[F16] Independent sums and scalar scaling give product transforms. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

[F17] Weak convergence would force convergence of every characteristic-function value. [[thm-levy-continuity-theorem-forward-direction]].

[F18] Every characteristic function is continuous at zero and equals one there. [[lem-basic-properties-of-characteristic-functions]].

[F19] The oscillatory exponential has unit modulus. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

[F20] Continuous functions on compact intervals are Riemann integrable. [[thm-continuous-implies-integrable]].

[F21] Real integrals are defined by positive and negative parts, and complex integrals by real and imaginary parts. [[def-integrable-real-and-complex-functions-and-their-integrals]].

## Counterexample

**Given:** Assume AC. There are iid real variables with density $c(x)=1/[\pi(1+x^2)]$ and infinite second moment such that $n^{-1/2}\sum_{k=1}^nX_k$ has no weak limit. In particular square-root-n scaling need not produce a normal limit when finite variance is dropped.

1.1 First construct the symmetric Laplace density $l(x)=e^{-|x|}/2$. On [0,R] the primitive of $e^{-x}$ is $-e^{-x}$, so [F1]–[F3], [F5] and [F20] give integral $1-e^{-R}$; the other half interval gives the same value by the primitive $e^x$. The bridge [F2] and MCT [F6] yield $\int l=1$. The elementary exponential series bound $e^R\ge1+R$ makes $e^{-R}\to0$. Thus [F8] defines a probability with density l. For every bounded measurable complex $h=u+iv$, apply [F9] to $u^+,u^-,v^+,v^-$; these four functions are bounded by $|h|$, so their products with $l$ have finite integral. The real/imaginary definition [F21] then gives $\int h\,d(l\,d\lambda)=\int hl\,d\lambda$. In particular the characteristic function of the constructed law is its density integral. For real t, componentwise differentiation using [F3]–[F5] gives the primitive $e^{(-1+it)x}/(-1+it)$ on the positive half-line and $e^{(1+it)x}/(1+it)$ on the negative half-line. Their nonzero denominators have modulus at least one. Taking integer R limits with DCT majorant $e^{-|x|}$ and [F19] gives $\varphi_l(t)=\tfrac12((1-it)^{-1}+(1+it)^{-1})=1/(1+t^2)$. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F19, F20, F21]

2.1 By [F10]–[F11], $\int_{-R}^R(1+t^2)^{-1}\,dt=\arctan R-\arctan(-R)<\pi$. The integrands are continuous, so the bridge and MCT make $\varphi_l$ Lebesgue integrable. [F12] supplies the continuous density $f(y)=(2\pi)^{-1}\int e^{-ity}/(1+t^2)\,dt$ for the Laplace law. It equals l everywhere: both are continuous and have the same integral on every interval, whereas any nonzero value of f-l would, by continuity, have one strict sign bounded away from zero on a nonempty interval, contradicting that integral equality and [F13]. At y=0 this identity gives $\int(1+t^2)^{-1}\,dt=\pi$. Therefore [F8] makes c a probability density. At y=-u the same identity, multiplied by two, gives $\int e^{iux}c(x)\,dx=e^{-|u|}$. No contour integral is used. [step 1.1, F1, F2, F6, F8, F10, F11, F12, F13, F20]

3.1 For R>=1, $\int_1^R x^2c(x)\,dx\ge(R-1)/(2\pi)$ because $x^2/(1+x^2)\ge1/2$ for x>=1. Nonnegative integral monotonicity and [F13] give this lower bound, tending to infinity; [F9] identifies the second moment as infinite. By [F14]–[F15], AC realizes iid copies of the c law. By [F16], their normalized-sum characteristic function is $(e^{-|t|/\sqrt n})^n=e^{-\sqrt n|t|}$. It tends to zero for t different from zero and stays one at zero. [step 2.1, F9, F13, F14, F15, F16]

4.1 If those row laws had any weak limit probability, [F17] would make its characteristic function equal to the pointwise limit just calculated. That function is discontinuous at zero, contradicting [F18]. Thus there is no weak probability limit, and in particular no normal limit. AC was used through the Lebesgue bridge, density inversion and independent-copy construction; the direct moment lower bound and discontinuity argument make no additional selections. [step 3.1, F17, F18] ∎
