---
id: def-kojman-shelah-scale-subspace
kind: definition
title: Kojman-Shelah scale subspace
status: published
origin: pipeline
deps: [def-rudin-ordinal-box-space, lem-normalizing-a-scale-at-existing-least-upper-bounds]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 7 section 2, definition of Z, printed p. 40"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Definition

Assume AC. Take the infinite $B\subseteq\omega\setminus\{0,1\}$ and the Rudin space $X_R(B)$ of [[def-rudin-ordinal-box-space]]. Set $\lambda=\aleph_{\omega+1}$, and fix a normalized scale $(f_\alpha)_{\alpha<\lambda}$ in $\prod_{n\in B}\aleph_n$ as in [[lem-normalizing-a-scale-at-existing-least-upper-bounds]]. Thus $f_\alpha<^*f_\beta$ for $\alpha<\beta$, the sequence is cofinal in the eventual order, and at each limit $\delta<\lambda$ of uncountable cofinality where the preceding sequence has a least upper bound modulo finite, $f_\delta$ is such a least upper bound. Existence of a least bound at every limit is not assumed.

The **Kojman–Shelah scale subspace** is

$$X=\{h\in X_R(B):(\exists\alpha<\lambda)\ h=^*f_\alpha\},$$

with its subspace topology. Here $h=^*f$ means that $\{n\in B:h(n)\ne f(n)\}$ is finite, and $h<^*f$ means that $\{n\in B:h(n)\ge f(n)\}$ is finite. Pointwise comparison retains its separate meaning at every coordinate.

Only eventual-equivalence classes which meet $X_R(B)$ contribute points to $X$. In particular this definition does not assert that any given $f_\alpha$ belongs to $X_R(B)$, or that every class is nonempty. An admissible finite modification means changing finitely many coordinates while keeping the resulting point in $X_R(B)$; such a modification preserves membership in the displayed set $X$, since the union of its modification set with the original finite exceptional set is finite.
