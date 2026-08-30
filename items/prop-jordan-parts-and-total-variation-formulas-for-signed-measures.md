---
id: prop-jordan-parts-and-total-variation-formulas-for-signed-measures
kind: proposition
title: "For a signed measure, total variation is nu-plus plus nu-minus, finite partitions suffice, and nu-plus and nu-minus are extremal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-total-variation-of-a-signed-or-complex-measure, thm-jordan-decomposition-for-signed-measures]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercises 12.6 and 12.7"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory, sentence after Theorem 6.21"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $\nu$ be a signed measure on $(X,\mathcal A)$), with Jordan decomposition
$\nu=\nu^+-\nu^-$. Then for every measurable $E$:

1. $$|\nu|(E)=\nu^+(E)+\nu^-(E);$$
2. the same value is the supremum over finite measurable partitions of $E$;
3. $$\nu^+(E)=\sup\{\nu(F):F\subseteq E,\ F\in\mathcal A\};$$
4. $$\nu^-(E)=-\inf\{\nu(F):F\subseteq E,\ F\in\mathcal A\}.$$

## Facts & Assumptions

**Given:** A signed measure $\nu$, its Jordan decomposition
$\nu=\nu^+-\nu^-$, and a measurable set $E$.

[L1] The total variation $|\nu|(E)$ is the supremum of the countable partition
sums $\sum_n |\nu(E_n)|$. ([[def-total-variation-of-a-signed-or-complex-measure]])

[L2] Jordan decomposition gives positive measures $\nu^+,\nu^-$ and a Hahn
decomposition $X=P\sqcup N$ with $\nu^+(A)=\nu(A\cap P)$ and
$\nu^-(A)=-\nu(A\cap N)$. ([[thm-jordan-decomposition-for-signed-measures]])

## Proof

**Proof technique:** direct.

1.1 Let $(E_n)$ be a countable measurable partition of $E$. Using [L2] and the [L1, L2]
triangle inequality,
$$|\nu(E_n)|=|\nu^+(E_n)-\nu^-(E_n)|\le \nu^+(E_n)+\nu^-(E_n)$$
for each $n$. Summing and using countable additivity of the positive measures
$\nu^+$ and $\nu^-$ gives
$$\sum_n |\nu(E_n)|\le \nu^+(E)+\nu^-(E).$$
Hence [L1] yields $|\nu|(E)\le \nu^+(E)+\nu^-(E)$.

2.1 The two-piece partition $E=(E\cap P)\sqcup(E\cap N)$ from [L2] gives [L1, L2, step 1.1]
$$|\nu(E\cap P)|+|\nu(E\cap N)|=\nu^+(E)+\nu^-(E).$$
Therefore $|\nu|(E)\ge \nu^+(E)+\nu^-(E)$, and together with step 1.1 this
proves equality. Because this equality is already realized by a finite
partition, finite partitions suffice for signed measures.

3.1 If $F\subseteq E$ is measurable, then [L2] gives [L2, step 2.1]
$$\nu(F)=\nu^+(F)-\nu^-(F)\le \nu^+(F)\le \nu^+(E),$$
so $\sup_{F\subseteq E}\nu(F)\le \nu^+(E)$. Taking $F=E\cap P$ gives equality:
$\nu(F)=\nu^+(E)$. The same argument with $E\cap N$ gives
$$\inf_{F\subseteq E}\nu(F)=-\nu^-(E).$$

4.1 Steps 2.1 and 3.1 prove all four displayed formulas. [step 2.1, step 3.1] ∎