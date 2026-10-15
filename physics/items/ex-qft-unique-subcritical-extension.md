---
id: ex-qft-unique-subcritical-extension
kind: example
title: Subcritical singularity has a unique same-degree extension
status: published
origin: pipeline
domain: mathematics
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-polar-surface-measure-on-the-unit-sphere
  - def-qft-distribution-scaling-degree
  - def-regular-distribution-from-a-locally-integrable-function
  - lem-test-function-cutoffs-and-euclidean-localization
  - prop-qft-local-counterterm-jet-classification
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-polar-coordinates-formula-for-lebesgue-measure
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  def-qft-distribution-scaling-degree: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  prop-qft-local-counterterm-jet-classification: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "R. Brunetti and K. Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds, §5.2"
      url: "https://arxiv.org/pdf/math-ph/9903028"
    - title: "Klaus Fredenhagen and Katarzyna Rejzner, “Perturbative Algebraic Quantum Field Theory,” in Mathematical Aspects of Quantum Field Theories, ed. Damien Calaque and Thomas Strobl, Springer (2015), Section 7"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73875/1/95.pdf.pdf"
    - title: "K. J. Keller, Dimensional Regularization in Position Space and a Forest Formula for Regularized Epstein-Glaser Renormalization, dissertation, §I.1"
      url: "https://arxiv.org/pdf/1006.2148"
dependency_level: 4
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Assume the Axiom of Choice. Fix $n\ge1$ and a real $\delta\le n$. Define $g_\delta(x)=|x|^{-\delta}$ for $x\ne0$ and choose $g_\delta(0)=0$; this point value does not affect any integral. On $U=\mathbb R^n\setminus\{0\}$, let $t_\delta$ be the regular distribution induced by $g_\delta$. If $\delta<n$, then $g_\delta\in L^1_{\mathrm{loc}}(\mathbb R^n)$, and its regular extension

$$G_\delta(\varphi)=\int_{\mathbb R^n}|x|^{-\delta}\varphi(x)\,d^nx$$

has scaling degree $\delta$ and is the unique extension of $t_\delta$ with that same scaling degree. At the critical exponent $\delta=n$, $t_n$ still has scaling degree $n$ on $U$, but the regular integral diverges logarithmically at $0$; its same-degree extensions exist but form an affine line $T_0+\mathbb C\delta_0$.

## Facts & Assumptions

**Given:** The Axiom of Choice, $n\ge1$, $\delta\le n$, and $g_\delta(x)=|x|^{-\delta}$ on $U=\mathbb R^n\setminus\{0\}$.

[F1] [[def-qft-distribution-scaling-degree]]: for a regular distribution induced by $g$, $\langle t_\rho,\varphi\rangle=\int g(\rho x)\varphi(x)\,d^nx$.

[F2] [[thm-choice-implies-dependent-implies-countable-choice]]: AC implies AC$_\omega$.

[F3] [[def-countable-choice]]: AC$_\omega$ selects from every countable sequence of nonempty sets.

[F4] [[thm-polar-coordinates-formula-for-lebesgue-measure]] uses the measure of [[def-polar-surface-measure-on-the-unit-sphere]] and, under AC$_\omega$, gives $\int_{\mathbb R^n}f\,d\lambda_n=\int_{S^{n-1}}\int_0^\infty f(r\omega)r^{n-1}\,dr\,d\sigma(\omega)$ for nonnegative Borel $f$.

[F5] [[def-regular-distribution-from-a-locally-integrable-function]]: a locally integrable function acts by $\varphi\mapsto\int g\varphi$.

[F6] [[thm-locally-integrable-functions-embed-in-distributions]]: under AC$_\omega$, the regular functional is a distribution and the map from $L^1_{\mathrm{loc}}$ modulo almost-everywhere equality is injective.

[F7] [[def-qft-distribution-scaling-degree]]: the scaling degree is the infimum of the exponents for which the dilated distribution tends to zero on every fixed test.

[F8] [[prop-qft-local-counterterm-jet-classification]]: for every finite real scaling degree $\delta$, the same-degree extension family is nonempty by the extension theorem; it is a singleton for $\delta<n$, and at $\delta=n$ it is $T_0+\mathbb C\delta_0$.

[F9] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: a nondegenerate box has its positive product volume.

[F10] [[lem-test-function-cutoffs-and-euclidean-localization]]: every compact subset of an open set admits a nonnegative smooth compactly supported cutoff equal to one near that compact set.

[A1] Assume AC; it supplies AC$_\omega$ by [F2].

## Verification

**Given:** The hypotheses of the example.

1.1 By [A1] and [F2]–[F3], AC$_\omega$ holds, so [F4] applies. On compact subsets of $U$, $g_\delta$ is bounded and therefore defines the regular distribution $t_\delta$. Put $x_0=(3/2,0,\ldots,0)$, $K=\overline B(x_0,1/4)$, and $\Omega=B(x_0,3/8)\subset\{9/8<|x|<15/8\}\subset\{1<|x|<2\}$. By [F10] choose $\varphi\in\mathcal D(\Omega)$ with $0\le\varphi\le1$ and $\varphi=1$ near $K$. For $0<\varepsilon<1/(4\sqrt n)$ the box $Q=\prod_{i=1}^n(x_{0,i}-\varepsilon,x_{0,i}+\varepsilon)$ lies in $K$, since $|x-x_0|<\sqrt n\varepsilon<1/4$ on $Q$. By [F9], $\lambda_n(Q)>0$; on $Q$ we have $\varphi=1$, $5/4<|x|<7/4$, and $g_\delta(x)\ge\min\{(5/4)^{-\delta},(7/4)^{-\delta}\}>0$, so $\langle t_\delta,\varphi\rangle>0$. For $\delta<n$, the unit ball integral is $$\int_{|x|<1}|x|^{-\delta}\,d^nx=\sigma(S^{n-1})\int_0^1r^{n-1-\delta}\,dr=\frac{\sigma(S^{n-1})}{n-\delta}<\infty.$$ It follows that $g_\delta\in L^1_{\mathrm{loc}}(\mathbb R^n)$, and [F5]–[F6] give the regular distribution $G_\delta$. [given, A1, F2, F3, F4, F5, F6, F9, F10, algebra]

2.1 The dilation formula [F1] and the change of variables in the regular integral give $(G_\delta)_\rho=\rho^{-\delta}G_\delta$. For every $\omega>\delta$, $\rho^\omega(G_\delta)_\rho=\rho^{\omega-\delta}G_\delta\to0$. For every $\omega<\delta$, the nonnegative annular test $\varphi$ from step 1.1 has positive pairing with $G_\delta$. Therefore $\rho^\omega\langle(G_\delta)_\rho,\varphi\rangle=\rho^{\omega-\delta}\langle G_\delta,\varphi\rangle$ does not tend to zero. Hence $\operatorname{sd}_0(G_\delta)=\delta$, and its restriction to $U$ is $t_\delta$. [F1, F7, step 1.1, algebra]

3.1 Since $\delta<n$, the subcritical uniqueness clause [F8] applies to $t_\delta$ and the extension $G_\delta$ from step 1.1. Thus every extension of $t_\delta$ with scaling degree $\delta$ equals $G_\delta$. [F7, F8, step 1.1, step 2.1]

4.1 At $\delta=n$, [F1] gives $\langle(t_n)_\rho,\varphi\rangle=\rho^{-n}\langle t_n,\varphi\rangle$. Thus every $\omega>n$ gives convergence to zero; for $\omega<n$, the nonnegative annular test from step 1.1 has positive pairing with $t_n$, so the rescaled pairing does not tend to zero. Hence $\operatorname{sd}_0(t_n)=n$. The polar integral is then $\sigma(S^{n-1})\int_0^1r^{-1}\,dr=+\infty$. Its coefficient is positive: with $c=(3/4,0,\ldots,0)$, choose a box $Q=\prod_{i=1}^n(c_i-\varepsilon,c_i+\varepsilon)$ for $0<\varepsilon<1/(4\sqrt n)$. Then $|x-c|<1/4$ for $x\in Q$, so $Q\subset\{1/2<|x|<1\}$; [F9] gives $\lambda_n(Q)>0$, while [F4] gives $\lambda_n(Q)\le\sigma(S^{n-1})\int_{1/2}^1r^{n-1}\,dr$. Hence $\sigma(S^{n-1})>0$. If a locally integrable $h$ induced a regular extension of $t_n$, then $u_h|_U=t_n$; the injectivity in [F6] on $U$ gives $h=g_n$ almost everywhere there, so its absolute integral on the punctured unit ball has the same logarithmic divergence. Thus no regular-distribution extension exists. By [F8], the same-degree distributional extension family exists and is $T_0+\mathbb C\delta_0$. [A1, F1, F2, F4, F6, F7, F8, F9, step 1.1, algebra] ∎
