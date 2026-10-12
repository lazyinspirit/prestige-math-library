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
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-receipts.jsonl (thm-tonelli-and-fubini-for-completed-product-measures). No independent judge or whole-closure certification.
    delegated_by: owner
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

1. If $f : X \times Y \to [0,\infty]$ is $\overline{\mu \times \nu}$-measurable, there are measurable null sets $A\subseteq X$ and $B\subseteq Y$ such that $f_x$ is $\overline{\mathcal B}$-measurable for $x\notin A$ and $f^y$ is $\overline{\mathcal A}$-measurable for $y\notin B$. Define $I_f(x)=\int_Y f_x\,d\overline\nu$ for $x\notin A$ and $I_f(x)=0$ on $A$; define $J_f(y)=\int_X f^y\,d\overline\mu$ for $y\notin B$ and $J_f(y)=0$ on $B$. Then $I_f,J_f$ are measurable and
$$\int f\,d\overline{\mu \times \nu}=\int_X I_f\,d\mu=\int_Y J_f\,d\nu.$$
2. If $f \in L^1(\overline{\mu \times \nu})$, there are measurable null sets $A\subseteq X$ and $B\subseteq Y$ such that the sections are measurable and integrable outside them. Define $I_f,J_f$ by the same section integrals outside $A,B$ and by zero on $A,B$. They are measurable and integrable, and the same equality holds.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, two sigma-finite measure spaces, their completed product $\overline{\mu \times \nu}$, and either a nonnegative $\overline{\mu \times \nu}$-measurable function $f$ or an integrable function $f \in L^1(\overline{\mu \times \nu})$.

[L1] Assuming countable choice, a function measurable for a completion is almost everywhere equal to one measurable for the original sigma-algebra. ([[thm-completion-measurable-functions-have-base-measurable-representatives]])

[L2] Tonelli and Fubini hold on the uncompleted product sigma-algebra. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[L3] The integral is unchanged by almost-everywhere equality. ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]])

[L4] On a complete measure space, almost-everywhere equality with a measurable function implies measurability. ([[thm-ae-equality-preserves-measurability-on-complete-spaces]])

[L5] Integrable complex functions have integrable real and imaginary parts. ([[def-integrable-real-and-complex-functions-and-their-integrals]])

## Proof

**Proof technique:** direct.

1.1 In the nonnegative branch, [L1] gives a product-measurable extended-real function $g$ such that $f=g$ almost everywhere for $\overline{\mu \times \nu}$. Let $N:=\{(x,y): f(x,y)\ne g(x,y)\}$, so $\overline{\mu \times \nu}(N)=0$. By the completion definition, choose a product-measurable null set $Z$ with $N \subseteq Z$. [L1, choose]

2.1 Apply Tonelli in [L2] to $\mathbf 1_Z$. Since $(\mu \times \nu)(Z)=0$, it gives $$\int_X \nu(Z_x)\,d\mu = 0,\qquad \int_Y \mu(Z^y)\,d\nu = 0.$$ The functions $x\mapsto\nu(Z_x)$ and $y\mapsto\mu(Z^y)$ are measurable, so $A:=\{x:\nu(Z_x)>0\}$ and $B:=\{y:\mu(Z^y)>0\}$ are measurable null sets. For $x\notin A$, $f_x=g_x$ outside the null section $Z_x$; [L4] makes $f_x$ measurable for the completed factor measure. The analogous statement holds for $y\notin B$. [L2, L4, step 1.1]

3.1 In the nonnegative case, replace the product-measurable representative $g$ by $g^+=\max(g,0)$. Since $f\ge0$ and $f=g$ outside $Z$, one has $f=g^+$ there, both on the product and on every section outside $A,B$. Apply Tonelli [L2] to $g^+$. Define $I_f$ and $J_f$ to equal the section integrals of $f$ outside $A,B$ and zero on $A,B$ as in the statement. They agree there with the measurable Tonelli section-integral functions of $g^+$, so are measurable and have the same outer integrals. By [L3], the completed integral of $f$ equals the product integral of $g^+$. Tonelli now gives the asserted three-way equality. [L2, L3, step 1.1, step 2.1]

4.1 If $f \in L^1(\overline{\mu \times \nu})$, apply [L1] separately to $\operatorname{Re} f$ and $\operatorname{Im} f$, obtaining product-measurable extended-real functions $u,v$ equal to those finite parts almost everywhere. Their nonfinite-value sets are product-null; set $u,v$ to zero there, making them finite real-valued product-measurable functions. Put $g:=u+iv$. The discrepancy set $\{f\ne g\}$ is contained in a product-measurable null set $Z$ by the completion definition, so $g=f$ outside $Z$. By [L3] applied to $|f|$ and $|g|$, $g\in L^1(\mu\times\nu)$. By Fubini [L2], the measurable sets where $\int|g_x|\,d\nu=\infty$ or $\int|g^y|\,d\mu=\infty$ are factor-null. Apply the Tonelli argument of step 2.1 to this new $Z$, obtaining measurable factor-null sets $A,B$, and enlarge them by these nonintegrability sets. Outside the enlarged sets, apply [L4] separately to the real and imaginary parts to make each $f$ section measurable; its almost-everywhere equality to the corresponding integrable $g$ section then makes it integrable with the same integral. Define $I_f,J_f$ by these section integrals there and zero on the exceptional sets. They are measurable, integrable, and equal almost everywhere to the Fubini section-integral functions for $g$. By [L3], their integrals equal the completed product integral of $f$. [L1, L2, L3, L4, L5, step 2.1] ∎
