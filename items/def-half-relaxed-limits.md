---
id: def-half-relaxed-limits
kind: definition
title: Half-relaxed limits of a locally bounded family
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-extended-reals
- def-metric-topology
- def-infimum
- lem-sup-epsilon
- lem-envelopes-are-the-least-semicontinuous-majorants
- def-countable-choice
justified_by: []
aliases: []
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: 'Section 6: equation (6.1), Lemma 6.1, Remarks 6.2--6.4 and Theorem 6.5, printed pp. 34--35; these are stability background, not the explicit sin estimate.'
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $U\subseteq\mathbb R^m$ be open ([[def-metric-topology]]) and let
$(u_\varepsilon)_{\varepsilon\in(0,1)}$ be a family of real-valued functions on
$U$ that is **locally bounded**: for every compact $K\subseteq U$ there is
$M_K<\infty$ with $|u_\varepsilon(y)|\le M_K$ for all $\varepsilon\in(0,1)$
and $y\in K$. The **upper half-relaxed limit** and the **lower half-relaxed
limit** of the family, computed in $\overline{\mathbb R}$
([[def-extended-reals]], [[def-infimum]], [[lem-sup-epsilon]]), are
$$\overline u(z):=\limsup_{\substack{\varepsilon\downarrow0\\ U\ni y\to z}}u_\varepsilon(y):=\inf_{\delta>0}\ \sup\bigl\{u_\varepsilon(y):0<\varepsilon<\delta,\ y\in U,\ |y-z|<\delta\bigr\},$$
$$\underline u(z):=\liminf_{\substack{\varepsilon\downarrow0\\ U\ni y\to z}}u_\varepsilon(y):=\sup_{\delta>0}\ \inf\bigl\{u_\varepsilon(y):0<\varepsilon<\delta,\ y\in U,\ |y-z|<\delta\bigr\}.$$
The quantifiers range over the index $\varepsilon$ and the point $y$
simultaneously, so the limit records the behaviour of the whole family near
$z$, not the limit of the single family of values $(u_\varepsilon(z))_{\varepsilon}$;
both envelopes are local and depend only on the germ of the family at $z$.

## Remarks

- **Basic properties.** If the family converges locally uniformly on $U$ to a
  continuous function $u$, then $\overline u=\underline u=u$. If the family is
  only locally bounded, then $\underline u\le\overline u$ pointwise, and
  $\overline u$ is upper semicontinuous while $\underline u$ is lower
  semicontinuous on $U$: the expressions are again monotone limits of local
  suprema and infima over families, and the proof of
  [[lem-envelopes-are-the-least-semicontinuous-majorants]] applies verbatim
  with the family indexed by $\delta$. Every value is kept in
  $\overline{\mathbb R}$; local boundedness makes both envelopes real-valued
  on each compact subset of $U$.
- **Why the joint limit.** Under Countable Choice, there are pairs
  $(\varepsilon_j,y_j)\to(0,z)$ with
  $u_{\varepsilon_j}(y_j)\to\underline u(z)$, and likewise for
  $\overline u(z)$. For finite lower limit, take the infima over
  $0<\varepsilon<1/j$, $|y-z|<1/j$ and choose a point within $1/j$ of each
  infimum; these infima increase to $\underline u(z)$. The upper case is
  dual, with suprema decreasing to $\overline u(z)$. Infinite values use
  diverging finite thresholds. The definition itself is set-based and selects
  no subsequence or point; only this sequential characterization uses
  Countable Choice. This is the limit notion consumed by
  [[thm-half-relaxed-limit-stability-for-viscosity-solutions]].
