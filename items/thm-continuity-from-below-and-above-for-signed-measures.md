---
id: thm-continuity-from-below-and-above-for-signed-measures
kind: theorem
title: "Continuity from below, and from above when one set has finite signed measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-jordan-decomposition-for-signed-measures, thm-continuity-from-below-for-measures, thm-continuity-from-above-for-measures, lem-finite-signed-measure-sets-have-only-finite-subset-values]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, note after Definition 12.2"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory, §6.6"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $\nu$ be a signed measure on $(X,\mathcal A)$.

1. If $E_0\subseteq E_1\subseteq\cdots$ are measurable and
   $E=\bigcup_n E_n$, then
   $$\nu(E)=\lim_{n\to\infty}\nu(E_n).$$
2. If $E_0\supseteq E_1\supseteq\cdots$ are measurable,
   $E=\bigcap_n E_n$, and $\nu(E_{n_0})\in\mathbb R$ for some $n_0$, then
   $$\nu(E)=\lim_{n\to\infty}\nu(E_n).$$

## Facts & Assumptions

**Given:** A signed measure $\nu$ on $(X,\mathcal A)$.

[L1] Jordan decomposition gives positive measures $\nu^+,\nu^-$ with $\nu=\nu^+-\nu^-$. ([[thm-jordan-decomposition-for-signed-measures]])

[L2] Measures are continuous from below on increasing measurable sequences. ([[thm-continuity-from-below-for-measures]])

[L3] Measures are continuous from above on decreasing measurable sequences once one term has finite measure. ([[thm-continuity-from-above-for-measures]])

[L4] Every measurable subset of a finite signed-measure set has finite signed measure. ([[lem-finite-signed-measure-sets-have-only-finite-subset-values]])

## Proof

**Proof technique:** direct.

1.1 Let $E_n\uparrow E$. By [L1], write $\nu=\nu^+-\nu^-$. Then [L2] gives $$\nu^+(E)=\lim_n \nu^+(E_n),\qquad \nu^-(E)=\lim_n \nu^-(E_n).$$ Subtracting these two equalities yields $$\nu(E)=\nu^+(E)-\nu^-(E)=\lim_n\bigl(\nu^+(E_n)-\nu^-(E_n)\bigr)=\lim_n \nu(E_n).$$

1.2 Let $E_n\downarrow E$ and assume $\nu(E_{n_0})\in\mathbb R$ for some $n_0$. Choose a Hahn decomposition $X=P\sqcup N$ from [L1]. Because $E_{n_0}\cap P$ and $E_{n_0}\cap N$ are measurable subsets of the finite signed-measure set $E_{n_0}$, [L4] shows that both $\nu(E_{n_0}\cap P)=\nu^+(E_{n_0})$ and $\nu(E_{n_0}\cap N)=-\nu^-(E_{n_0})$ are finite. Hence [L3] gives $$\nu^+(E)=\lim_n \nu^+(E_n),\qquad \nu^-(E)=\lim_n \nu^-(E_n).$$ Subtracting again yields $\nu(E)=\lim_n \nu(E_n)$. [L1, L3, L4]

2.1 The displayed subtractions are defined because for a signed measure at most one of $\nu^+(E)$ and $\nu^-(E)$ can be infinite, and the same holds for each $E_n$. [L1, step 1.1]

3.1 Steps 1.1 through 2.1 prove continuity from below and from above under the stated finiteness hypothesis. [step 1.1, step 1.2, step 2.1] ∎
