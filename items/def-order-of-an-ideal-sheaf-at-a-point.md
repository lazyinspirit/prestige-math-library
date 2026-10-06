---
id: def-order-of-an-ideal-sheaf-at-a-point
kind: definition
title: Order of an ideal sheaf at a point
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
- def-coherent-module-scheme
- def-dimension-noetherian-topological-space
- def-embedding-dimension-and-regular-local-ring
- def-ideal-sheaf
- def-local-ring
- def-locally-noetherian-and-noetherian-scheme
- thm-krull-intersection-theorem
- lem-regular-local-quotient-by-parameter-is-regular
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)
    url: https://arxiv.org/pdf/math/0401401
---

## Definition

Let $X$ be a locally Noetherian scheme, $\mathcal I\subseteq\mathcal O_X$ a coherent ideal sheaf ([[def-coherent-module-scheme]], [[def-ideal-sheaf]]) and $x\in X$ with maximal ideal $\mathfrak m_x\subset\mathcal O_{X,x}$ ([[def-local-ring]]).
The order of $\mathcal I$ at $x$ is
$$\operatorname{ord}_x(\mathcal I):=\max\{\,n\ge 0 : \mathcal I_x\subseteq\mathfrak m_x^n\,\},$$
with $\operatorname{ord}_x(\mathcal I):=+\infty$ when $\mathcal I_x=0$; the maximum is attained for $\mathcal I_x\ne 0$ because $\bigcap_n\mathfrak m_x^n=0$ in the Noetherian local ring $\mathcal O_{X,x}$ ([[thm-krull-intersection-theorem]]).
For $f\in\mathcal O_X(U)$ put $\operatorname{ord}_x(f):=\operatorname{ord}_x(f\mathcal O_U)$; a germ is of multiplicity one at $x$ if $\operatorname{ord}_x(f)=1$. If in addition $\mathcal O_{X,x}$ is regular — the only case used on this page — then $f$ is part of a regular system of parameters of $\mathcal O_{X,x}$, so the zero scheme $V(f)$ is regular at $x$ of dimension $\dim\mathcal O_{X,x}-1$ ([[lem-regular-local-quotient-by-parameter-is-regular]], under AC [[def-axiom-of-choice]]). The parameter assertion follows by extending the nonzero class of $f$ in the finite-dimensional cotangent space to a basis and applying the finite-generator Nakayama argument.
If $x\in V(\mathcal I)$ and $s=\dim\mathcal O_{X,x}$, then $\operatorname{ord}_x(\mathcal I)\ge 1$; $\operatorname{ord}_x$ is the multiplicity used throughout this page, and it differs from the Hilbert-Samuel multiplicity, which is not used here.
