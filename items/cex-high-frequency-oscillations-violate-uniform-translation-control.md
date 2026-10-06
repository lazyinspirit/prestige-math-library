---
id: cex-high-frequency-oscillations-violate-uniform-translation-control
kind: counterexample
title: "High frequencies destroy uniform translation control"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [lem-relative-compactness-implies-uniform-translation-continuity-in-lp, def-l-p-space-as-a-quotient-by-null-functions, thm-linear-change-of-variables-for-lebesgue-measure, thm-quarter-turn-values-and-shift-formulas, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations, complete 242-page 2014 notes"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Sections 1.5 and 3.10, printed pp. 6-7 and 73-74; locally derived consequences are identified in the strategies."
---

## Statement refuted

**Refuted claim.** For $1\le p<\infty$, a bounded family in $L^p(\mathbb R)$
whose supports lie in one fixed bounded set (that is, a tight family) is
uniformly translation continuous and relatively compact.

The witness oscillates faster and faster inside the same interval: the mass
stays in a fixed bounded set, but an arbitrarily small shift reverses the sign
of the oscillation and changes the function by order one.

## Facts & Assumptions

**Given:** Countable Choice; $1\le p<\infty$, $c_p:=\bigl(\int_0^{2\pi}|\sin x|^p\,dx\bigr)^{-1/p}$, and $f_j(x):=c_p\mathbf 1_{(0,2\pi)}(x)\sin(jx)$ on $\mathbb R$ for $j\ge1$.

[F1] *Scaling the sine power.* For every $j\ge1$, $\int_0^{2\pi}|\sin(jx)|^pdx=\int_0^{2\pi}|\sin y|^pdy=c_p^{-p}$, by the substitution $y=jx$ and $2\pi$-periodicity. ([[thm-linear-change-of-variables-for-lebesgue-measure]])

[F2] *Quarter-turn shift.* $\sin(y+\pi)=-\sin y$ for every $y$. ([[thm-quarter-turn-values-and-shift-formulas]])

[F3] *The necessity of translation continuity.* Under Countable Choice, a relatively compact family in $L^p(\mathbb R)$ is uniformly translation continuous: $\sup_g\|\tau_hg-g\|_p\to0$ as $|h|\to0$. ([[lem-relative-compactness-implies-uniform-translation-continuity-in-lp]], [[def-countable-choice]])

[F4] *Norms and supports of classes.* $\|f\|_{L^p}=\bigl(\int|f|^p\bigr)^{1/p}$, and $\operatorname{supp}f_j\subseteq[0,2\pi]$ for every $j$. ([[def-l-p-space-as-a-quotient-by-null-functions]])

## Counterexample

**Proof technique:** direct.

1.1 By [F1] and [F4], $\|f_j\|_{L^p}^p=c_p^p\int_0^{2\pi}|\sin(jx)|^pdx=1$, and all supports lie in the fixed bounded set $[0,2\pi]$, so the family is bounded and tight. [F1, F4, given]

1.2 Put $h_j:=\pi/j$. For $x\in(h_j,2\pi)$ both $x$ and $x-h_j$ lie in $(0,2\pi)$, so [F2] gives $f_j(x-h_j)-f_j(x)=-2c_p\sin(jx)$ and hence $|f_j(x-h_j)-f_j(x)|^p=2^pc_p^p|\sin(jx)|^p$; integrating over $(h_j,2\pi)$ and using [F1] with the trivial bound $\int_0^{h_j}|\sin(jx)|^pdx\le h_j$ gives $\|\tau_{h_j}f_j-f_j\|_{L^p}^p\ge2^pc_p^p(c_p^{-p}-h_j)=2^p(1-c_p^ph_j)\to2^p$. [F1, F2, F4]

2.1 Hence $\liminf_j\|\tau_{h_j}f_j-f_j\|_{L^p}\ge2>0$ although $h_j=\pi/j\to0$, so the family is not uniformly translation continuous; by [F3] it is not relatively compact in $L^p(\mathbb R)$, and the refuted claim is false. Countable Choice is used by the scaling interface [F1] and the necessity lemma [F3]. [F3, step 1.1, step 1.2] ∎ 
