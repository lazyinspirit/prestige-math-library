---
id: lem-regularized-evaluation-of-the-weyl-character-quotient-at-one
kind: lemma
title: Regularized evaluation of the Weyl character quotient at one
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
justified_by: []
aliases: []
deps: [def-axiom-of-choice, def-formal-character-of-a-finite-dimensional-weight-module, thm-weyl-denominator-identity, lem-bgg-euler-character-gives-the-weyl-numerator, thm-weyl-character-formula, lem-positive-root-pairings-of-a-dominant-integral-weight, def-completed-formal-character-ring-for-downward-cones, def-weyl-alternation-operator, def-weyl-vector-rho-for-a-chosen-positive-system, prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces, lem-weyl-length-parity-is-multiplicative, thm-exponential-addition-formula, def-real-exponential-function-and-e, thm-derivative-of-exponential, thm-lhopital-zero-over-zero, lem-algebra-of-continuous-real-maps-on-a-space, cor-exponential-reciprocal-and-positivity, def-finite-weyl-root-system-lattice-and-chamber-conventions, def-complex-exponential, thm-complex-exponential-addition-and-real-extension, thm-chain-rule, thm-algebra-of-derivatives, thm-algebra-of-function-limits]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.5, printed pp. 142--143 (Proposition 26.8: specialization h = 2th_ρ, factorization of the numerator and the limit t → 0)"
    - title: "B. Weber, Weyl Character Formula II: Formulas of Weyl and Kostant (Penn Math 651, March 2013)"
      url: "https://www2.math.upenn.edu/~brweber/Courses/2013/Math651/Notes/L17_WeylDimII.pdf"
      locator: "pp. 2--4, Theorem 1.3 (proof by factoring Q(t(Λ+δ))/Q(tδ) and applying L'Hôpital's rule)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$\lambda\in\Lambda^+$ and let $\rho$ be the Weyl vector
([[def-weyl-vector-rho-for-a-chosen-positive-system]]), with
$m_\lambda(\mu)=\dim L(\lambda)_\mu$ the multiplicities of the
finite-dimensional simple module $L(\lambda)$.

Exponential values in (i) are complex exponentials
([[def-complex-exponential]],
[[thm-complex-exponential-addition-and-real-extension]]); for real arguments
these agree with the real exponential used in (ii)--(iii). The pairing on
$\mathfrak h^*$ is the complex-bilinear extension of the real form on $E$.

(i) For every $\nu\in\mathfrak h^*$ and every $t>0$,
$$\sum_{w\in W}(-1)^{\ell(w)}e^{2t(w\nu,\rho)}=\prod_{\alpha\in\Phi^+}\bigl(e^{t(\nu,\alpha)}-e^{-t(\nu,\alpha)}\bigr).$$

(ii) Consequently, for every $t>0$,
$$\sum_{\mu}m_\lambda(\mu)e^{2t(\mu,\rho)}=\frac{\prod_{\alpha\in\Phi^+}\bigl(e^{t(\lambda+\rho,\alpha)}-e^{-t(\lambda+\rho,\alpha)}\bigr)}{\prod_{\alpha\in\Phi^+}\bigl(e^{t(\rho,\alpha)}-e^{-t(\rho,\alpha)}\bigr)}.$$

(iii) The left side of (ii) is a finite sum of exponentials, hence continuous
at $t=0$ with value $\sum_\mu m_\lambda(\mu)=\dim L(\lambda)$, while each
factor ratio $\bigl(e^{ta}-e^{-ta}\bigr)/\bigl(e^{tb}-e^{-tb}\bigr)$ tends
to $a/b$ as $t\to0+$ for $a,b\ne0$; hence the right side of (ii) has the
finite limit $\prod_{\alpha\in\Phi^+}(\lambda+\rho,\alpha)/(\rho,\alpha)$ as
$t\to0+$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight $\lambda\in\Lambda^+$, the module $L(\lambda)$ with its multiplicities, the Weyl vector $\rho$, the positive system $\Phi^+$, the alternants $A(\nu)$ and the completed ring $\mathcal R$ with its group ring $\mathbb Z[P]$.

[A1] The Axiom of Choice is assumed; it enters through the BGG numerator identity of [F2] ([[def-axiom-of-choice]]).

[F1] $\mathbb Z[P]\subseteq\mathcal R$ is the group ring with $e^\mu e^\nu=e^{\mu+\nu}$, and $A(\nu)=\sum_{w\in W}(-1)^{\ell(w)}e^{w\nu}$ is a finite alternant in $\mathbb Z[P]$ for $\nu\in P$ ([[def-completed-formal-character-ring-for-downward-cones]], [[def-weyl-alternation-operator]]).

[F2] $\operatorname{ch}L(\lambda)\cdot A(\rho)=A(\lambda+\rho)$ in $\mathbb Z[P]$ ([[lem-bgg-euler-character-gives-the-weyl-numerator]]), and the denominator identity gives $A(\rho)=e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})=\prod_{\alpha\in\Phi^+}(e^{\alpha/2}-e^{-\alpha/2})$ as an identity of finite sums whose exponents lie in $P$ ([[thm-weyl-denominator-identity]]).

[F3] $\operatorname{ch}L(\lambda)=\sum_\mu m_\lambda(\mu)e^\mu$ with finitely many nonzero integer coefficients, and $\sum_\mu m_\lambda(\mu)=\dim L(\lambda)$ because $L(\lambda)$ is the direct sum of its weight spaces ([[def-formal-character-of-a-finite-dimensional-weight-module]], [[prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces]]).

[F4] For $t>0$ and $x\in\mathfrak h^*$, evaluation $e^\eta\mapsto\exp(2t(\eta,x))$ is a homomorphism from the finite-support group ring to $\mathbb C$: complex exponential is defined everywhere, satisfies $\exp(z+w)=\exp(z)\exp(w)$, and has $\exp(0)=1$. It agrees with real exponential when the pairings are real ([[def-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]], [[def-finite-weyl-root-system-lattice-and-chamber-conventions]]).

[F5] For $w\in W$ and $\mu\in\mathfrak h^*$ one has $(w\mu,\rho)=(\mu,w^{-1}\rho)$, and $(-1)^{\ell(w^{-1})}=(-1)^{\ell(w)}$, so reindexing $w\mapsto w^{-1}$ preserves the signs ([[def-finite-weyl-root-system-lattice-and-chamber-conventions]], [[lem-weyl-length-parity-is-multiplicative]]).

[F6] For every positive root $\alpha$ one has $(\rho,\alpha)>0$ and $(\lambda+\rho,\alpha)>0$ ([[lem-positive-root-pairings-of-a-dominant-integral-weight]]).

[F7] The real exponential is differentiable with derivative itself, hence continuous, and $\exp(u)>0$ for all $u$; finite sums and products of continuous real functions are continuous, finite products of convergent function limits may be computed factor by factor, and by the $0/0$ form of l'Hôpital's rule the quotient $\bigl(e^{ta}-e^{-ta}\bigr)/\bigl(e^{tb}-e^{-tb}\bigr)$ tends to $a/b$ as $t\to0+$ whenever $b\ne0$ ([[thm-derivative-of-exponential]], [[cor-exponential-reciprocal-and-positivity]], [[def-real-exponential-function-and-e]], [[lem-algebra-of-continuous-real-maps-on-a-space]], [[thm-algebra-of-function-limits]], [[thm-lhopital-zero-over-zero]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Apply the multiplicative evaluation of [F4] with $x=\nu$ to the half-root form of the denominator identity in [F2]: the left side becomes $\sum_{w\in W}(-1)^{\ell(w)}\exp(2t(w\rho,\nu))$ and the right side becomes $\prod_{\alpha\in\Phi^+}(\exp(t(\alpha,\nu))-\exp(-t(\alpha,\nu)))$; using $(w\rho,\nu)=(\rho,w^{-1}\nu)$ and reindexing $w\mapsto w^{-1}$, which preserves both $W$ and the signs $(-1)^{\ell(w)}$ by [F5], the left side equals $\sum_{w\in W}(-1)^{\ell(w)}\exp(2t(w\nu,\rho))$, so the evaluated identity is exactly (i). [F1, F2, F4, F5, algebra, A1]

2.1 Apply the same evaluation with $x=\rho$ to the numerator identity of [F2]; the left side becomes $\sum_\mu m_\lambda(\mu)\exp(2t(\mu,\rho))$ times $A(\rho)$'s value, the right side becomes the numerator product of (ii), and by step 1.1 with $\nu=\rho$ the value of $A(\rho)$ is $\prod_{\alpha\in\Phi^+}(\exp(t(\rho,\alpha))-\exp(-t(\rho,\alpha)))$, a product of positive factors for $t>0$: for $u>0$, the real exponential series gives $\exp(2u)\ge1+2u>1$, and $\exp(u)-\exp(-u)=\exp(-u)(\exp(2u)-1)>0$ by [F4] and [F7]. Apply this with $u=t(\rho,\alpha)>0$ from [F6]; division gives (ii). [F2, F3, F4, F6, F7, step 1.1, algebra]

3.1 The left side of (ii) is the finite sum $\sum_\mu m_\lambda(\mu)\exp(2t(\mu,\rho))$ of continuous functions of $t$ by [F3] and [F7], so it is continuous at $t=0$ and its value there is $\sum_\mu m_\lambda(\mu)=\dim L(\lambda)$ by [F3]. [F3, F7, step 2.1, algebra]

4.1 For each positive root $\alpha$ the numerator and denominator in the factor ratio $\bigl(e^{t(\lambda+\rho,\alpha)}-e^{-t(\lambda+\rho,\alpha)}\bigr)/\bigl(e^{t(\rho,\alpha)}-e^{-t(\rho,\alpha)}\bigr)$ of the right side of (ii) vanish at $t=0$, their derivatives at $t>0$ are $(\lambda+\rho,\alpha)(e^{t(\lambda+\rho,\alpha)}+e^{-t(\lambda+\rho,\alpha)})$ and $(\rho,\alpha)(e^{t(\rho,\alpha)}+e^{-t(\rho,\alpha)})$, and the denominator derivative is strictly positive by [F6] and [F7]. By continuity the derivative quotient tends to $2(\lambda+\rho,\alpha)/(2(\rho,\alpha))$; hence l'Hôpital's rule gives the factor limit $(\lambda+\rho,\alpha)/(\rho,\alpha)$ as $t\to0+$, and the finite product of these factor limits, namely $\prod_{\alpha\in\Phi^+}(\lambda+\rho,\alpha)/(\rho,\alpha)$, is the limit of the right side of (ii); since (ii) holds for every $t>0$ and both sides have finite limits at $0+$ by step 3.1 and by this factor computation, the two limits agree and the right side has the stated finite limit. [F6, F7, step 2.1, step 3.1, algebra] ∎ 