---
id: thm-ump-nonexistence-witness
kind: theorem
title: A two-sided normal alternative need not have a UMP test
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps: [def-axiom-of-choice, def-standard-normal-and-normal-laws,
       thm-lebesgue-outer-measure-and-measurability-are-translation-invariant,
       def-measure-preserving-transformation-and-system,
       thm-integrals-are-invariant-under-measure-preserving-maps,
       def-measure-with-density, thm-integration-against-a-density,
       def-measure-kernel-and-probability-kernel,
       def-integrable-real-and-complex-functions-and-their-integrals,
       prop-order-and-scalar-rules-for-the-nonnegative-integral,
       thm-linearity-of-the-lebesgue-integral-on-l-one,
       def-countable-choice,
       prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null,
       thm-lebesgue-measure-of-a-box-of-every-kind,
       lem-randomized-threshold-has-exact-level, def-randomized-test,
       def-test-size-and-power,
       thm-nonnegative-integral-zero-iff-zero-almost-everywhere,
       thm-arithmetic-and-lattice-operations-preserve-measurability,
       def-borel-sigma-algebra]
justified_by: []
proof_strategy: direct
axiom_use: Assume AC for the standard normal laws; AC implies the countable-choice premise used to show normal laws have no atoms.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: George Deligiannidis, Foundations of Statistical Inference, Neyman–Pearson Theorem 13.2 and UMP discussion, PDF pp. 77–78
      url: https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf
    - title: Karl B. Gregory, STAT 713 Lecture 11, Neyman–Pearson lemma and proof annotations, annotated PDF pp. 6–9
      url: https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_11_slides_annotated.pdf
---

## Statement

Assume AC. Let $X$ have law $P_\theta=N(\theta,1)$ on $\mathbb R$, with
$\theta\in\mathbb R$, and test the simple null $H_0:\theta=0$ against the
two-sided alternative $H_1:\theta\in\{-1,1\}$. A randomized test is a
binary-action probability kernel as in [[def-randomized-test]]; write $\psi$
for its measurable rejection function. Level $\alpha$ and power use
[[def-test-size-and-power]]. Here UMP means maximizing power at each
alternative among level-$\alpha$ tests. For every $0<\alpha<1$, no such test
maximizes power at both alternative values.

## Facts & Assumptions

**Given:** AC and $0<\alpha<1$.

[A1] AC states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] $N(0,1)$ has density $\varphi(x)=e^{-x^2/2}/\sqrt{2\pi}$, and $N(\theta,1)$ is the law of $x\mapsto\theta+x$ under $N(0,1)$. ([[def-standard-normal-and-normal-laws]])

[F2] Translation preserves Lebesgue measurability and Lebesgue measure. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

[F3] A measurable self-map that preserves the measure on every measurable set preserves integrals of nonnegative measurable functions. ([[def-measure-preserving-transformation-and-system]], [[thm-integrals-are-invariant-under-measure-preserving-maps]])

[F4] The measure with density $f$ is $(f\,d\lambda)(A)=\int_A f\,d\lambda$, and integration against it is integration of the product against $\lambda$. ([[def-measure-with-density]], [[thm-integration-against-a-density]])

[F5] Countable choice selects from every sequence of nonempty sets; under that principle every singleton in $\mathbb R$ is Lebesgue null. ([[def-countable-choice]], [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]])

[F6] Under countable choice, a nondegenerate interval has its positive length as Lebesgue measure. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F7] Integrability is $\int|f|<\infty$, the nonnegative integral is monotone, and the Lebesgue integral is linear on $L^1$. ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F8] A randomized test is a binary-action probability kernel; its test function is a measurable rejection-probability function with values in $[0,1]$. ([[def-randomized-test]])

[F9] For any probability law and $0<\alpha<1$, an upper or lower threshold with boundary randomization can attain rejection probability $\alpha$. ([[lem-randomized-threshold-has-exact-level]])

[F10] For a nonempty simple null and alternative, power is rejection probability at each parameter and level $\alpha$ means null rejection probability at most $\alpha$. ([[def-test-size-and-power]])

[F11] A nonnegative measurable function has integral zero exactly when it vanishes almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F12] Sums, products, and scalar multiples of measurable functions are measurable whenever the pointwise operations are defined. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[F13] The Borel sigma-algebra on $\mathbb R$ contains every open ray, so the threshold indicators are measurable. ([[def-borel-sigma-algebra]])

[F14] A probability kernel assigns a probability measure to each observation and has measurable event-evaluation functions. ([[def-measure-kernel-and-probability-kernel]])

## Proof

1.1 Write $\varphi(x)=e^{-x^2/2}/\sqrt{2\pi}$ and $P_\theta=N(\theta,1)$. The translation $\tau_\theta(x)=x+\theta$ is measurable and preserves Lebesgue measure by [F2]–[F3]; [F1] makes $P_\theta$ the push-forward of $\varphi\,d\lambda$ under $\tau_\theta$. For each Borel $A$, $x\mapsto\varphi(x-\theta)$ is continuous, so its product with the measurable indicator $\mathbf1_A$ is measurable by [F12]; integral invariance gives $P_\theta(A)=\int_A\varphi(x-\theta)\,d\lambda(x)$, so $p_\theta(x)=\varphi(x-\theta)$ is a positive density for every $\theta$. [A1, F1, F2, F3, F12, given]

2.1 AC [A1] applied to any sequence of nonempty sets supplies a choice function on its values and hence a sequence choice, so [F5] shows every singleton is $\lambda$-null. By step 1.1 and [F4], $P_0(\{c\})=\int_{\{c\}}p_0\,d\lambda=0$ for every real $c$. Applying [F9] under $P_0$ gives finite $c_+,c_-$ with $P_0(X>c_+)=P_0(X<c_-)=\alpha$, since the boundary masses vanish. The threshold indicators are measurable by [F13]. For $B\subseteq\{0,1\}$, define $K_\pm(x,B)=\phi_\pm(x)\mathbf1_{\{1\in B\}}+(1-\phi_\pm(x))\mathbf1_{\{0\in B\}}$. The two weights are nonnegative and sum to one, and the formula is countably additive because each point belongs to at most one event in a disjoint sequence; each event evaluation is measurable by [F12]–[F13]. Thus [F14] gives probability kernels with test functions $\phi_\pm$, which are randomized tests by [F8] and have level $\alpha$ by [F10]. [A1, F4, F5, F8, F9, F10, F12, F13, F14, step 1.1, choose, construct]

3.1 Step 1.1 gives $p_1(x)/p_0(x)=e^{x-1/2}$, strictly increasing, and $p_{-1}(x)/p_0(x)=e^{-x-1/2}$, strictly decreasing. Put $k_+=e^{c_+-1/2}>0$. For any level-$\alpha$ test $\psi$, $(\phi_+-\psi)(p_1-k_+p_0)\ge0$: above $c_+$ both factors are nonnegative, below it both are nonpositive, and at $c_+$ the second vanishes. [F12] makes this product measurable; since $|\phi_+-\psi|\le1$ and each density integrates to one, [F7] makes it integrable. Apply [F4] to the positive and negative parts of $\phi_+-\psi$, then [F7] gives $E_1(\phi_+-\psi)-k_+E_0(\phi_+-\psi)=\int(\phi_+-\psi)(p_1-k_+p_0)\,d\lambda\ge0$. By [F10] and step 2.1, $E_0\phi_+=\alpha\ge E_0\psi$, so $E_1\phi_+\ge E_1\psi$. If equality holds, the two nonnegative terms in $E_1(\phi_+-\psi)=\int(\phi_+-\psi)(p_1-k_+p_0)\,d\lambda+k_+E_0(\phi_+-\psi)$ vanish. [F11] makes the integrand zero $\lambda$-almost everywhere; strict monotonicity then forces $\psi=\phi_+$ off $c_+$ almost everywhere, and step 2.1 gives $P_0(\{c_+\})=0$. Since $P_0$ has density $p_0$, equality forces $\psi=\phi_+$ $P_0$-almost surely, so $\phi_+$ is most powerful against $\theta=1$, uniquely up to $P_0$-almost-sure equality of rejection functions. [step 1.1, step 2.1, F4, F5, F7, F10, F11, F12, algebra]

3.2 Put $k_-=e^{-c_--1/2}>0$. For $x<c_-$, $\phi_-(x)-\psi(x)\ge0$ and $p_{-1}(x)-k_-p_0(x)>0$; for $x>c_-$ both are nonpositive, and at $c_-$ the density difference is zero. By [F12] the product is measurable; it is nonnegative and integrable by [F7]. Apply [F4] to the positive and negative parts of $\phi_--\psi$, then [F7] gives $E_{-1}(\phi_--\psi)-k_-E_0(\phi_--\psi)=\int(\phi_--\psi)(p_{-1}-k_-p_0)\,d\lambda\ge0$. By [F10] and step 2.1, $E_0\phi_-=\alpha\ge E_0\psi$, so $E_{-1}\phi_-\ge E_{-1}\psi$. If equality holds, both nonnegative terms in the sum vanish; [F11] makes the integrand zero $\lambda$-almost everywhere, and strict decrease of $p_{-1}/p_0$ forces $\psi=\phi_-$ off $c_-$ almost everywhere. Step 2.1 gives $P_0(\{c_-\})=0$, and its density then gives equality $P_0$-almost surely, proving uniqueness up to $P_0$-almost-sure equality of rejection functions against $\theta=-1$. [step 1.1, step 2.1, F4, F5, F7, F10, F11, F12, algebra]

4.1 If a UMP test $\psi^*$ existed, its optimality at $\theta=1$ and step 3.1 would force $\psi^*=\phi_+$ $P_0$-almost surely, while its optimality at $\theta=-1$ and step 3.2 would force $\psi^*=\phi_-$ $P_0$-almost surely. Choose $x_0>\max(c_+,c_-)$; positivity and continuity of $p_0$ give a nondegenerate interval above both cutoffs on which $p_0$ is bounded below by a positive constant. By [F6] and the countable choice in step 2.1, that interval has positive Lebesgue and hence positive $P_0$ measure by [F4] and [F7], but $\phi_+=1$ and $\phi_-=0$ there, contradicting the two almost-sure equalities. Therefore no UMP level-$\alpha$ test exists. [step 2.1, step 3.1, step 3.2, F1, F4, F5, F6, F7, F10, algebra] ∎
