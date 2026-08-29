---
id: thm-tonelli-and-fubini-for-completed-product-measures
kind: theorem
title: "Tonelli and Fubini for the completed product, with only almost-everywhere section measurability"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completed-product-measure, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-completion-measurable-functions-have-base-measurable-representatives, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-ae-equality-preserves-measurability-on-complete-spaces, def-integrable-real-and-complex-functions-and-their-integrals, def-countable-choice]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.39"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Theorem 5.21"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]), and let
$\overline{\mu \times \nu}$ be the completed product of two sigma-finite
measure spaces.

1. If $f : X \times Y \to [0,\infty]$ is
   $\overline{\mu \times \nu}$-measurable, then for $\mu$-almost every $x$ the
   section $f_x$ is $\overline{\mathcal B}$-measurable, for $\nu$-almost every
   $y$ the section $f^y$ is $\overline{\mathcal A}$-measurable, and
$$\int f\,d\overline{\mu \times \nu} = \int_X \left(\int_Y f_x\,d\overline{\nu}\right)d\mu = \int_Y \left(\int_X f^y\,d\overline{\mu}\right)d\nu.$$
2. If $f \in L^1(\overline{\mu \times \nu})$, the same almost-everywhere
   section-measurability conclusion holds and the same equality of integrals is
   valid.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, two sigma-finite measure spaces, their
completed product $\overline{\mu \times \nu}$, and either a nonnegative
$\overline{\mu \times \nu}$-measurable function $f$ or an integrable function
$f \in L^1(\overline{\mu \times \nu})$.

[L1] Assuming countable choice, a function measurable for a completion is
almost everywhere equal to one measurable for the original sigma-algebra.
([[thm-completion-measurable-functions-have-base-measurable-representatives]])

[L2] Tonelli and Fubini hold on the uncompleted product sigma-algebra. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[L3] The integral is unchanged by almost-everywhere equality. ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]])

[L4] On a complete measure space, almost-everywhere equality with a measurable function implies measurability. ([[thm-ae-equality-preserves-measurability-on-complete-spaces]])

[L5] Integrable complex functions have integrable real and imaginary parts. ([[def-integrable-real-and-complex-functions-and-their-integrals]])

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a product-measurable function $g$ such that $f=g$ almost everywhere for $\overline{\mu \times \nu}$. Let $N:=\{(x,y): f(x,y)\ne g(x,y)\}$, so $\overline{\mu \times \nu}(N)=0$. By the completion definition, choose a product-measurable null set $Z$ with $N \subseteq Z$. [L1, choose]

1.2 Apply the nonnegative case of [L2] to $\mathbf 1_Z$. Since [L2] gives $(\mu \times \nu)(Z)=0$, Tonelli yields $$\int_X \nu(Z_x)\,d\mu = 0,\qquad \int_Y \mu(Z^y)\,d\nu = 0.$$ Hence $\nu(Z_x)=0$ for $\mu$-almost every $x$ and $\mu(Z^y)=0$ for $\nu$-almost every $y$. Because $N_x \subseteq Z_x$ and $N^y \subseteq Z^y$, the equalities $f_x=g_x$ and $f^y=g^y$ fail only on null sections of the completed factor spaces. For such $x$, the section $f_x$ is almost everywhere equal to the measurable section $g_x$, so [L4] makes $f_x$ $\overline{\mathcal B}$-measurable; similarly for $f^y$. [L2, L4]

2.1 In the nonnegative case, apply Tonelli from [L2] to $g$. Since $f=g$ almost everywhere on the complete product space, the completed integral of $f$ equals that of $g$, and the section integrals agree for the almost-everywhere parameters isolated in step 1.2. This proves part 1. [L2, step 1.2]

3.1 If $f \in L^1(\overline{\mu \times \nu})$, apply [L1] separately to $\operatorname{Re} f$ and $\operatorname{Im} f$. This gives product-measurable real-valued functions $u,v$ such that $u=\operatorname{Re} f$ and $v=\operatorname{Im} f$ almost everywhere. Put $g:=u+iv$. Then $g$ is product-measurable, $g=f$ almost everywhere, and [L3] applied to $|f|$ and $|g|$ shows $g \in L^1(\mu \times \nu)$. The $L^1$ case of [L2] applies to $g$, step 1.2 transfers the almost-everywhere section measurability from $g$ to $f$, and [L3] transfers the equality of integrals from $g$ to $f$. This proves part 2. [L1, L2, L3, L5, step 1.2] ∎
