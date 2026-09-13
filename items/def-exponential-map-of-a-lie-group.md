---
id: def-exponential-map-of-a-lie-group
kind: definition
title: Exponential map of a Lie group
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Definition 3.2, printed page 30
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$, let $G$ be a finite-dimensional real Lie group
with identity $e$, and write $\mathfrak g=T_eG$. For each
$X\in\mathfrak g$, the existence-and-uniqueness theorem
[[thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields]]
supplies a unique one-parameter subgroup
$\gamma_X:\mathbb R\to G$ with $\gamma_X'(0)=X$. The **exponential map of
$G$** is the well-defined total map

$$\exp_G:\mathfrak g\longrightarrow G,\qquad \exp_G(X):=\gamma_X(1).$$

Here $\mathrm{AC}_\omega$ is the axiom of
[[def-countable-choice|countable choice]].
The same theorem identifies $\gamma_X$ with the integral curve through $e$
of the left-invariant field $X^L$; the left translate
$t\mapsto g\gamma_X(t)$ is therefore the corresponding integral curve through
$g$. The countable-choice assumption is used exactly through that supplied
smooth invariant-field and completeness result, and evaluation at the single
time $1$ adds no choice.

A Lie group is nonempty and boundaryless. If $\dim G=0$, then
$\mathfrak g=0$ and $\exp_G(0)=e$; the definition is unchanged in dimension
one. No metric or nondegeneracy condition occurs, and $1$ is not an endpoint
of the global parameter domain $\mathbb R$. This item defines a map and asserts
no biconditional characterization.
