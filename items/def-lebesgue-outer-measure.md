---
id: def-lebesgue-outer-measure
kind: definition
title: "Lebesgue outer measure on $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-box-volume-is-a-premeasure-on-the-elementary-algebra, def-outer-measure-induced-by-a-premeasure, def-elementary-set-in-rn, def-nonnegative-extended-series]
justified_by: []
aliases: []
landmark: true
short: "Lebesgue outer measure"
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Definition 2.2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Definition 1.2"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
pipeline_run: null
---

## Definition

Fix $n \ge 1$. **Lebesgue outer measure** $\lambda_n^*$ on $\mathbb{R}^n$ is the
outer set function induced by the premeasure $\mu_0$ of
[[thm-box-volume-is-a-premeasure-on-the-elementary-algebra]] on the algebra
$\mathcal{E}_n$ of elementary sets ([[def-elementary-set-in-rn]]), in the sense
of [[def-outer-measure-induced-by-a-premeasure]]:

$$\lambda_n^*(E) \;:=\; \inf\left\{\ \sum_{k=0}^{\infty}\mu_0(A_k)\ :\ A_k \in \mathcal{E}_n \text{ for every } k \in \mathbb{N} \text{ and } E \subseteq \bigcup_{k\in\mathbb{N}}A_k \ \right\}$$

for $E \subseteq \mathbb{R}^n$, the series being the nonnegative extended sum of
[[def-nonnegative-extended-series]]. The family of covering costs is nonempty,
because $\mathbb{R}^n \in \mathcal{E}_n$ and the sequence
$(\mathbb{R}^n,\varnothing,\varnothing,\dots)$ covers every $E$, so the infimum
is a well-determined element of $[0,+\infty]$. On the real line the subscript is
dropped and $\lambda^* := \lambda_1^*$.

The values $\lambda_n^*(E)$ are defined for **every** subset of $\mathbb{R}^n$,
with no measurability hypothesis. That the resulting set function is an outer
measure, and that it agrees with $\mu_0$ on $\mathcal{E}_n$, are proved in
[[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]; until
then the name *outer measure* is not claimed, exactly as
[[def-outer-measure-induced-by-a-premeasure]] stipulates.

## Remarks

- **Why the covers are by elementary sets and not by boxes.** Both give the same
  value, since an elementary set is a finite union of boxes and a countable
  family of finite lists reindexes to a countable family of boxes; taking
  elementary sets is what makes the definition an instance of the published
  construction, so that the Carathéodory theory applies with nothing reproved.
  The comparison with covers by closed, open and cubic boxes is
  [[lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure]].

- **The definition itself spends no choice principle**; it is an infimum of a
  nonempty subset of $[0,+\infty]$. Countable choice enters only when the
  infimum is shown to be countably subadditive, and that is recorded where it
  happens.
