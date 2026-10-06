---
id: lem-nonzero-section-vanishing-at-a-point-has-positive-degree
kind: lemma
title: A nonzero section vanishing at a point forces positive degree
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
- def-axiom-of-choice
- def-degree-invertible-sheaf-proper-dimension-one
- def-integral-scheme
- def-invertible-sheaf
- lem-euler-characteristic-additive-short-exact
- lem-euler-characteristic-finite-support-twist-invariance
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: The Stacks Project, Resolution of Surfaces, Section 54.7 (Vanishing)
    url: https://stacks.math.columbia.edu/tag/0AX7
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $C$ be an integral proper $k$-scheme of dimension one and
let $\mathcal L$ be an invertible $\mathcal O_C$-module with a nonzero global section $s\in\Gamma(C,\mathcal L)$.
If $s$ vanishes at some closed point of $C$, then $\deg_C(\mathcal L)>0$ for the degree of
[[def-degree-invertible-sheaf-proper-dimension-one]].

## Facts & Assumptions

**Given:** A field $k$, an integral proper $k$-scheme $C$ of dimension one, an invertible sheaf $\mathcal L$ on $C$ with a nonzero global section $s$ that vanishes at some closed point of $C$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-degree-invertible-sheaf-proper-dimension-one.* Assume the Axiom of Choice, inherited from the Euler-characteristic supplier below ([[def-axiom-of-choice]]). Let $k$ be a field (def-field) and let $C$ be a proper $k$-scheme (def-proper-morphism) whose underlying topological space is Noetherian of dimension at most one (def-dimension-noetherian-topological-space, def-locally-noetherian-and-noetherian-scheme). ([[def-degree-invertible-sheaf-proper-dimension-one]])

[F3] *def-integral-scheme.* An **integral scheme** is a nonempty scheme that is reduced and whose underlying topological space is irreducible. Equivalently, it is nonempty and every nonempty affine open is the spectrum of a domain. The latter criterion is independent of the chosen affine open cover. ([[def-integral-scheme]])

[F4] *def-invertible-sheaf.* Let $X$ be a scheme. An $\mathcal O_X$-module $\mathcal L$ is **invertible** if it is locally free of rank $1$ (def-locally-free-sheaf-finite-rank): every point $x\in X$ has an open neighbourhood $U$ with $\mathcal L|_U\;\cong\;\mathcal O_U.$ Equivalently, $X$ is covered by open sets $U$ on which $\mathcal L|_U$ admits a generator, that is, a section $s\in\mathcal L(U)$ suc ([[def-invertible-sheaf]])

[F5] *lem-euler-characteristic-additive-short-exact.* Assume the Axiom of Choice, inherited from the finiteness and long-exactness suppliers cited below ([[def-axiom-of-choice]]). ([[lem-euler-characteristic-additive-short-exact]])

[F6] *lem-euler-characteristic-finite-support-twist-invariance.* Assume the Axiom of Choice, inherited from the Euler-characteristic supplier ([[def-axiom-of-choice]]). Let $k$ be a field (def-field), let $X$ be a proper $k$-scheme, let $p\in X$ be a closed point with residue field $\kappa(p)$ (def-residue-field-scheme-point) and let $i:\operatorname{Spec}\kappa(p)\to X$ be the corresponding closed immersion. ([[lem-euler-characteristic-finite-support-twist-invariance]])

## Proof

1.1 The section $s$ defines an injection of sheaves $\mathcal O_C\to\mathcal L$: on a local trivialization of $\mathcal L$ the section is multiplication by a regular function, which is nonzero at the generic point because $s\ne0$ and $\mathcal O_C$ is a domain of dimension one, hence injective. [F3, F4, given]

2.1 Let $Q$ be the cokernel of the injection of step 1.1. The map is an isomorphism at the generic point (both sheaves have rank one there), so $Q$ has zero generic stalk; since $Q$ is coherent its support is closed, and a proper closed subset of the one-dimensional Noetherian scheme $C$ consists of finitely many closed points. Hence $Q$ has finite support. [F3, F4, step 1.1]

3.1 At the closed point $p$ where $s$ vanishes, choose a local frame of $\mathcal L$ near $p$; the section corresponds to a germ $f\in\mathfrak m_p\mathcal O_{C,p}$ with $f\ne0$, so $Q_p=\mathcal O_{C,p}/f\mathcal O_{C,p}\ne0$ and $Q_p$ has length at least one over the local ring $\mathcal O_{C,p}$. [F4, step 2.1]

4.1 The short exact sequence $0\to\mathcal O_C\to\mathcal L\to Q\to0$ gives $\deg_C(\mathcal L)=\chi(C,\mathcal L)-\chi(C,\mathcal O_C)=\chi(C,Q)$ by additivity of the Euler characteristic, and a coherent finite-support sheaf is pushed forward from its zero-dimensional Artinian annihilator subscheme. Its finite module has a composition series with skyscraper factors $\kappa(p)$; applying [F5] along this series and [F6] to each factor gives $\chi(C,Q)=\sum_p\operatorname{length}_{\mathcal O_{C,p}}(Q_p)\,[\kappa(p):k]$, the sum over the finitely many closed points in the support of $Q$. [F2, F5, F6, step 2.1, step 3.1]

5.1 By step 3.1 some closed point has a nonzero contribution, while all terms in the sum are nonnegative; hence $\chi(C,Q)>0$ and therefore $\deg_C(\mathcal L)>0$, as claimed. [F2, step 4.1, step 3.1, F1] ∎

## Remarks

- No smoothness or geometric integrality is assumed: the identity $\deg_C(\mathcal L)=\chi(C,Q)$ uses only properness, integrality and dimension one, and the closed-point contributions are weighted by the residue-field degrees.
- The vanishing hypothesis is used only to produce one nonzero local quotient; a section vanishing nowhere would give $Q=0$ and degree zero.
