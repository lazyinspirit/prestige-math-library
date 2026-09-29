---
id: def-newtonian-potential
kind: definition
title: Newtonian potential of compactly supported data
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: §2.7 equation (2.24), printed p.36
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf
      locator: §2.11 Newton-potential definition, printed p.70
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: §5.3 equation (5.21), printed p.117
status: draft
origin: pipeline
proof_strategy: direct
deps: [cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, def-countable-choice, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, lem-borel-representatives-make-the-convolution-integrand-borel-measurable, prop-countable-subsets-of-rn-are-lebesgue-null, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-completion-measurable-functions-have-base-measurable-representatives, thm-tonelli-theorem-for-sigma-finite-product-spaces]
---

## Statement

Assume Countable Choice and $n\ge2$. For a measurable compactly supported
$f$, define
$$Nf(x)=\int_{\mathbb R^n}\Phi(x-y)f(y)\,dy$$
at each $x$ where the integral is absolutely finite. Whenever this integral
is finite almost everywhere, $Nf$ also denotes its almost-everywhere class.
The following items establish everywhere convergence for bounded compact data
and almost-everywhere convergence for compact $L^1$ data; the definition itself
makes no unconditional convergence claim.

## Definition

Let
$$A_f:=\left\{x\in\mathbb R^n:\int_{\mathbb R^n}|\Phi(x-y)f(y)|\,dy<\infty\right\}.$$
For $x\in A_f$, the pointwise value $Nf(x)$ is the displayed Lebesgue
integral. If $A_f$ has full Lebesgue measure, the phrase “almost-everywhere
class of $Nf$” means the equivalence class under equality outside a Lebesgue
null set; one may assign arbitrary values on $A_f^c$ to obtain a representative
on all of $\mathbb R^n$. The potential is not asserted to be defined at points
outside $A_f$ unless a representative extension is explicitly being used.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, let $n\ge2$, and let $f$ be a
finite-valued, Lebesgue-measurable, compactly supported scalar function.
Complex-valued data are handled by their real and imaginary parts.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of
nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] The kernel is given away from zero by the power formula when $n\ge3$
and by the logarithmic formula when $n=2$.
([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F2] The kernel's value at zero may be assigned arbitrarily; its locally
integrable class is unchanged by that point assignment.
([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F3] Lebesgue measurability on $\mathbb R^n$ is the completion of the Borel
Lebesgue measure. ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]).

[F4] Under Countable Choice, a function measurable for a completed measure is
almost everywhere equal to a function measurable for the original
$\sigma$-algebra. ([[thm-completion-measurable-functions-have-base-measurable-representatives]]).

[F5] For a nonnegative product-measurable function on a product of
$\sigma$-finite measure spaces, its section-integral functions are measurable.
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F6] Lebesgue measure on $\mathbb R^n$ is $\sigma$-finite and finite on bounded
sets. ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F7] Under Countable Choice, every at most countable subset of $\mathbb R^n$,
including a singleton, is Lebesgue null. ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F8] If $\widetilde\Phi$ and $\widetilde f$ are Borel representatives, then
$(x,y)\mapsto\widetilde\Phi(x-y)\widetilde f(y)$ is Borel on
$\mathbb R^{2n}$. ([[lem-borel-representatives-make-the-convolution-integrand-borel-measurable]]).

## Proof

**Proof technique:** direct.

1.1 On $\mathbb R^n\setminus\{0\}$ the formulas in [F1] are continuous, so assigning the finite value $0$ at the closed singleton $\{0\}$ gives a Borel representative $\widetilde\Phi$ of the kernel. [F1, cases]

1.2 By [F3] and [F4], using [A1], choose a Borel representative $\widetilde f$ equal to $f$ almost everywhere; in the complex-valued case apply [F4] to the real and imaginary parts. Since $f$ is finite-valued, the Borel set where the resulting extended-real representative is infinite is contained in its null exceptional set; reset it to zero there, which keeps it Borel and equal to $f$ almost everywhere and gives a finite-valued representative. For each fixed $x$, changing $f$ to $\widetilde f$ changes the integrand only on the fixed null exceptional set. Changing the assigned kernel value at zero, arbitrary by [F2], changes the integrand only at $y=x$, a null singleton by [F7]. Thus both choices preserve the Lebesgue integral, including whether its absolute value is finite. [A1, F2, F3, F4, F7]

2.1 The function $H(x,y)=\widetilde\Phi(x-y)\widetilde f(y)$ is Borel on $\mathbb R^n\times\mathbb R^n$ by [F8]. By [F6] both Lebesgue measure spaces are $\sigma$-finite, so [F5] shows that $J(x):=\int_{\mathbb R^n}|H(x,y)|\,dy$ is measurable. Applying [F5] to the positive and negative parts of the real and imaginary parts of $H$ also makes their section integrals measurable. [F5, F6, F8, step 1.1, step 1.2]

3.1 The set $A_f=\{x:J(x)<\infty\}$ is measurable. On $A_f$, all four section integrals from step 2.1 are finite, and their signed combination is $Nf(x)$, so $Nf$ is measurable on its pointwise domain. If $A_f$ has full measure, extending by zero on $A_f^c$ gives a measurable representative on $\mathbb R^n$; any other extension is equal to it almost everywhere and hence represents the same class. No finiteness claim is made at points outside $A_f$. [step 2.1, F5]

4.1 If $f=0$, then $A_f=\mathbb R^n$ and $Nf=0$. The pole assignment and the finite/infinite boundary of the defining integral are handled in steps 1.2–3.1. This definition assumes $n\ge2$; it uses Countable Choice only for the Borel representative and the stated measure interfaces, and no full Axiom of Choice. [A1, F2, F3, F4, F5, F7, step 1.2, step 3.1, cases] ∎

## Source notes

Hunter §2.7, equation (2.24), printed p.36, names the integral
$\int\Gamma(x-y)f(y)\,dy$ the Newtonian potential after proving its smooth
compact-data convolution result; the displayed definition itself is not an
almost-everywhere convergence theorem. Teschl §5.3, equation (5.21), printed
p.117, gives the same integral formula while expressly treating the initial
distributional computation as heuristic at that point. Schmidt §2.11,
printed p.70, defines the integral for $f\in L^\infty_{\mathrm{cpt}}$ and
proves everywhere finiteness from $\Phi\in L^1_{\mathrm{loc}}$. The present
statement separates that convergence question: it defines the integral only
where absolutely finite and justifies its measurable almost-everywhere class
when that domain has full measure. The next items prove the promised stronger
convergence claims for bounded and compact $L^1$ data.
