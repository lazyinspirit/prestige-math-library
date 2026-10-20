---
id: def-nonnegative-test-supermartingale
kind: definition
title: Nonnegative test supermartingales
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-filtration-and-filtered-probability-space
  - def-martingale-submartingale-and-supermartingale
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Aaditya Ramdas, Peter Grunwald, Vladimir Vovk and Glenn Shafer, Game-Theoretic Statistics and Safe Anytime-Valid Inference, §§2.2-2.4"
      url: https://arxiv.org/pdf/2210.01948
---

## Definition

Assume the Axiom of Choice (AC) [[def-axiom-of-choice]]. Let
$(\Omega,\mathcal F,(\mathcal F_t)_{t\in\mathbb N_0})$ be a discrete filtration
on a measurable space, and let $\mathcal P_0$ be a family of probability laws
on $(\Omega,\mathcal F)$. A real-valued process $E=(E_t)_{t\in\mathbb N_0}$ is
a **nonnegative test supermartingale for $\mathcal P_0$** if, for every
$P\in\mathcal P_0$, it is adapted and integrable under $P$
[[def-filtration-and-filtered-probability-space]]
[[def-martingale-submartingale-and-supermartingale]], satisfies
$P(E_t\ge0)=1$ for every $t$, and has $\mathbb E_P E_0\le1$.

The same process must satisfy the supermartingale condition under every law
in the null family; that is what makes the definition uniform over a composite
null. The initial value may be random and need not be bounded by one
pointwise. Time starts at zero.

## Remarks

A nonnegative test supermartingale is a standard sufficient process for
anytime-valid testing. Some literature uses **e-process** for a broader
class, allowing a process dominated under each null law by a different test
martingale. This item defines the planned common test-supermartingale class;
it does not assert that every e-process is itself a supermartingale.
