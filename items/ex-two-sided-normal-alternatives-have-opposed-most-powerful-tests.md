---
id: ex-two-sided-normal-alternatives-have-opposed-most-powerful-tests
kind: example
title: Opposed most powerful tests for two normal alternatives
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps: [thm-ump-nonexistence-witness, def-axiom-of-choice, def-countable-choice,
       def-standard-normal-and-normal-laws,
       thm-lebesgue-measure-under-dilations-and-reflections,
       thm-lebesgue-outer-measure-and-measurability-are-translation-invariant,
       thm-lebesgue-measure-is-a-complete-measure,
       thm-borel-sets-are-lebesgue-measurable,
       def-measure-space, def-measurable-function-between-measurable-spaces,
       def-measure-preserving-transformation-and-system,
       thm-integrals-are-invariant-under-measure-preserving-maps,
       prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null,
       thm-lebesgue-measure-of-a-box-of-every-kind,
       def-randomized-test, def-measure-kernel-and-probability-kernel,
       def-test-size-and-power, def-measure-with-density,
       thm-integration-against-a-density,
       def-integrable-real-and-complex-functions-and-their-integrals,
       prop-order-and-scalar-rules-for-the-nonnegative-integral,
       thm-linearity-of-the-lebesgue-integral-on-l-one,
       thm-arithmetic-and-lattice-operations-preserve-measurability,
       def-nonnegative-simple-measurable-function,
       def-integral-of-a-nonnegative-simple-function,
       prop-the-nonnegative-integral-agrees-with-the-simple-integral,
       def-borel-sigma-algebra, def-measure, def-probability-measure]
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited through the normal-law definition; its implication of countable choice supplies the singleton-null statement.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: George Deligiannidis, Foundations of Statistical Inference, Neyman–Pearson Theorem 13.2 and UMP discussion, PDF pp. 77–78
      url: https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf
---

## Example

Assume AC and let $X\sim N(\theta,1)$. For the simple null $H_0:\theta=0$
and alternatives $\theta\in\{-1,1\}$, consider the level-$1/2$ randomized
tests with rejection functions
$$\phi_+(x)=\mathbf1_{\{x>0\}},\qquad \phi_-(x)=\mathbf1_{\{x<0\}}.$$
The upper-tail test favors $\theta=1$, while the lower-tail test favors
$\theta=-1$; their powers at the opposite alternative are strictly below
$1/2$.

## Verification

**Given:** AC and the normal experiment in the statement.

[F1] For the two-sided normal-location problem, no UMP level-$\alpha$ test exists for any $0<\alpha<1$. ([[thm-ump-nonexistence-witness]])

[F2] $N(0,1)$ has the even positive density $\varphi(u)=e^{-u^2/2}/\sqrt{2\pi}$, and $N(\theta,1)$ is the law of $\theta+Z$ for $Z\sim N(0,1)$. ([[def-standard-normal-and-normal-laws]])

[F3] Assuming countable choice, $\mathcal L(\mathbb R)$ is a sigma-algebra and $\lambda$ is a measure, so $(\mathbb R,\mathcal L(\mathbb R),\lambda)$ is a measure space. ([[thm-lebesgue-measure-is-a-complete-measure]], [[def-measure-space]])

[F4] Countable choice implies that a singleton is Lebesgue null, so a law with a Lebesgue density has no atom at zero. ([[def-countable-choice]], [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]])

[A1] AC states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F5] A randomized test is a binary-action probability kernel; its test function is a measurable rejection probability in $[0,1]$. ([[def-randomized-test]])

[F6] Under countable choice, a nondegenerate interval has positive Lebesgue measure equal to its length. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F7] Power is $E_\theta\psi$ and level $\alpha$ means the null rejection probability is at most $\alpha$. ([[def-test-size-and-power]])

[F8] A law with density $f$ integrates a nonnegative function $g$ as $\int gf\,d\lambda$. ([[def-measure-with-density]], [[thm-integration-against-a-density]])

[F9] The nonnegative integral is monotone and homogeneous for nonnegative scalars. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[F10] A measurable indicator has nonnegative integral equal to the measure of its set. ([[def-nonnegative-simple-measurable-function]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]])

[F11] The Borel sigma-algebra on $\mathbb R$ contains open rays, so both threshold indicators are measurable. ([[def-borel-sigma-algebra]])

[F12] A probability measure has total mass one and is countably additive on disjoint measurable sets. ([[def-probability-measure]], [[def-measure]])

[F13] For a measurable self-map, measurability means inverse images of measurable sets are measurable; it preserves measure when every measurable set and its inverse image have equal measure. ([[def-measurable-function-between-measurable-spaces]], [[def-measure-preserving-transformation-and-system]])

[F14] Under countable choice, every Borel subset of $\mathbb R$ is Lebesgue measurable. ([[thm-borel-sets-are-lebesgue-measurable]])

[F15] A measure-preserving measurable map preserves the integral of every nonnegative measurable function. ([[thm-integrals-are-invariant-under-measure-preserving-maps]])

[F16] Products, sums, differences, and scalar multiples of measurable functions are measurable whenever the operations are defined. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[F17] Integrable real functions form a vector space and the integral is linear on it. ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F18] Translation $\tau_\theta(u)=u+\theta$ is a measurable measure-preserving map of Lebesgue measure, by translation invariance. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[def-measure-preserving-transformation-and-system]])

[F19] Reflection $\rho(u)=-u$ is a measurable measure-preserving map of Lebesgue measure. ([[thm-lebesgue-measure-under-dilations-and-reflections]], [[def-measure-preserving-transformation-and-system]])

[F20] A probability kernel assigns a probability measure to each observation and has measurable event-evaluation functions. ([[def-measure-kernel-and-probability-kernel]])

1.1 Apply AC [A1] to the values in any sequence of nonempty sets and compose the choice function with that sequence; this supplies the countable-choice hypothesis in [F3], [F4], [F14], and [F18]–[F19]. For every Borel set $B$ and $\theta\in\mathbb R$, the pushforward definition [F2] gives $P_\theta(B)=\int \mathbf1_B(u+\theta)\varphi(u)\,d\lambda(u)$. Apply [F15] to $\tau_\theta$ and the nonnegative measurable function $h(x)=\mathbf1_B(x)\varphi(x-\theta)$; [F14], continuity of $\varphi$, and [F16] give its measurability, and $h(u+\theta)=\mathbf1_B(u+\theta)\varphi(u)$. Hence $P_\theta(B)=\int_B\varphi(x-\theta)\,d\lambda(x)$, so $p_\theta(x)=\varphi(x-\theta)$ is a density and [F8] gives $E_\theta g=\int gp_\theta\,d\lambda$ for every nonnegative measurable test function $g$. [A1, F2, F3, F8, F13, F14, F15, F16, F18, algebra]

2.1 Let $\rho(u)=-u$ and $h(u)=\varphi(u)\mathbf1_{(0,\infty)}(u)$. By [F14] and [F16], $h$ is nonnegative and Lebesgue measurable; by evenness, $h\circ\rho=\varphi\mathbf1_{(-\infty,0)}$. The map $\rho$ is measurable and measure-preserving by [F19], so [F15] gives equal integrals of these two functions. By [F8], $P_0(X>0)=P_0(X<0)$. The singleton at zero is null by [F4] and step 1.1, while [F12] gives total mass one; therefore both probabilities equal $1/2$. The indicators are measurable by [F11]. For $B\subseteq\{0,1\}$, define $K_\pm(x,B)=\phi_\pm(x)\mathbf1_{\{1\in B\}}+(1-\phi_\pm(x))\mathbf1_{\{0\in B\}}$. The two weights are nonnegative and sum to one, and the formula is countably additive because each point belongs to at most one event in a disjoint sequence; each event evaluation is measurable by [F16]. Thus [F20] gives probability kernels with test functions $\phi_\pm$, hence randomized tests by [F5] and level-$1/2$ tests by [F7]. [F4, F5, F7, F8, F11, F12, F13, F14, F15, F16, F19, F20, step 1.1, algebra, construct]

3.1 Let $\psi$ be any level-$1/2$ test for the simple null $\theta=0$, put $D=\phi_+-\psi$, and set $p_0=\varphi$ and $p_1(x)=\varphi(x-1)$ as in step 1.1. The ratio $p_1(x)/p_0(x)=e^{x-1/2}$ is strictly increasing, and with $k=e^{-1/2}$ the product $D(x)(p_1(x)-kp_0(x))$ is nonnegative: above zero both factors are nonnegative, below zero both are nonpositive, and at zero the second factor vanishes. By [F16] the product is measurable. Since $|D|\le1$, $p_0,p_1$ are integrable with integral one, and $|Dp_i|\le p_i$, we have $Dp_0,Dp_1\in L^1(\lambda)$; then [F17] gives $D(p_1-kp_0)=Dp_1-kDp_0\in L^1(\lambda)$ and yields $$E_1\phi_+-E_1\psi-k(E_0\phi_+-E_0\psi)=\int D(p_1-kp_0)\,d\lambda\ge0.$$ Step 2.1 gives $E_0\phi_+=1/2$, and level gives $E_0\psi\le1/2$, so $k>0$ implies $E_1\phi_+\ge E_1\psi$. Thus $\phi_+$ is most powerful against $\theta=1$. [F7, F8, F9, F16, F17, step 1.1, step 2.1, algebra]

3.2 For the same arbitrary level-$1/2$ test $\psi$, put $D=\phi_--\psi$ and $p_{-1}(x)=\varphi(x+1)$. Then $p_{-1}(x)/p_0(x)=e^{-x-1/2}$ is strictly decreasing. With $k=e^{-1/2}$, $D(x)(p_{-1}(x)-kp_0(x))\ge0$: below zero both factors are nonnegative, above zero both are nonpositive, and at zero the second factor vanishes. The factors are measurable by [F16]. The bounds $|D|\le1$ and $\int p_i\,d\lambda=1$ give $Dp_{-1},Dp_0\in L^1(\lambda)$ by [F8]–[F9], so [F17] gives $D(p_{-1}-kp_0)=Dp_{-1}-kDp_0\in L^1(\lambda)$. Linearity yields $E_{-1}\phi_--E_{-1}\psi-k(E_0\phi_--E_0\psi)=\int D(p_{-1}-kp_0)\,d\lambda\ge0$. Since [F7] and step 2.1 give $E_0\phi_-=1/2\ge E_0\psi$, this proves $E_{-1}\phi_-\ge E_{-1}\psi$. Thus $\phi_-$ is most powerful against $\theta=-1$. [F7, F8, F9, F16, F17, step 1.1, step 2.1, algebra]

3.3 Let $I=\int_{[0,1]}\varphi\,d\lambda$. On $[0,1]$, $\varphi(u)\ge e^{-1/2}/\sqrt{2\pi}>0$, so [F9]–[F10] give $I\ge e^{-1/2}\lambda([0,1])/\sqrt{2\pi}>0$ using [F6]. By [F8], this is $P(0<Z<1)$ since the endpoints are null by [F4]. By [F12] and step 2.1, $P(Z<1)=P(Z<0)+P(0<Z<1)=\tfrac12+I$, and symmetry with the null endpoints [F4] gives $P(Z>-1)=P(Z<1)$ and $P(Z<-1)=P(Z>1)=1-P(Z<1)=\tfrac12-I$. Thus for $X=1+Z$, $E_1\phi_+=\tfrac12+I$ and $E_1\phi_- =\tfrac12-I$; reflection gives $E_{-1}\phi_- =\tfrac12+I$ and $E_{-1}\phi_+=\tfrac12-I$. These expectations are powers by [F7], so the two most powerful tests just proved have strict power reversal at the opposite alternatives. [F2, F4, F6, F7, F8, F9, F10, F12, step 2.1, algebra]

4.1 By [F1] at $\alpha=1/2$, no test maximizes power at both alternatives; step 3.3 exhibits the strict reversal for the two most powerful tests established in steps 3.1–3.2. [F1, step 3.1, step 3.2, step 3.3] ∎
