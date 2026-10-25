---
id: rem-finite-measure-implication-table-for-the-main-modes-of-convergence
kind: remark
title: "Implication table for the main modes of convergence on a finite measure space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-l-one-convergence-implies-convergence-in-measure, thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure, thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces, prop-truncated-l-one-metric-metrises-convergence-in-measure-on-finite-measure-spaces, thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces, thm-egorovs-theorem, cor-riesz-subsequence-can-be-chosen-almost-uniformly-on-a-finite-measure-space]
verification:
  audited: 2026-08-28
  precheck: n/a
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, 245A Notes 4: Modes of convergence"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Sections 5.3 and 7"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

On a **finite** measure space, the page establishes the following implication
picture for the four main convergence modes it develops.

| from | to | status | reason or witness |
| --- | --- | --- | --- |
| almost uniform | almost everywhere | proved | [[thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure]] |
| almost uniform | in measure | proved | [[thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure]] |
| almost everywhere | in measure | proved | [[thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces]] |
| in $L^1$ | in measure | proved | [[thm-l-one-convergence-implies-convergence-in-measure]] |
| in measure + uniform integrability | in $L^1$ | proved | [[thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces]] |
| in measure | almost everywhere | false | the typewriter sequence on $[0,1]$ |
| in $L^1$ | almost everywhere | false | the same typewriter sequence |
| in measure | in $L^1$ | false | the spikes $f_0=0$ and $f_n=n\,\chi_{(0,1/n)}$ for $n\ge1$ |
| almost everywhere | in $L^1$ | false | the same spike sequence |

Two companion observations matter just as much as the table.

- Convergence in measure on a finite measure space is exactly convergence in the
  truncated metric of
  [[prop-truncated-l-one-metric-metrises-convergence-in-measure-on-finite-measure-spaces]].
- Even when convergence in measure does not imply almost-everywhere convergence
  of the whole sequence, Riesz gives an almost-everywhere convergent subsequence
  and, on finite measure spaces, Egorov upgrades that subsequence to almost
  uniform convergence
  ([[cor-riesz-subsequence-can-be-chosen-almost-uniformly-on-a-finite-measure-space]]).

The companion examples page still spells out the same concrete witnesses: the
typewriter sequence, the translated unit intervals on $\mathbb R$, the spike
  family $f_0=0$, $f_n=n\,\chi_{(0,1/n)}$ for $n\ge1$, the explicit Egorov core for $x^k$, the
Dirichlet-function Lusin core, and the uniformly integrable but non-dominated
disjoint-spike family.
