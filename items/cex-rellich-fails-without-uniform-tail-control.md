---
id: cex-rellich-fails-without-uniform-tail-control
kind: counterexample
title: "The tightness hypothesis of the Fr\\'echet--Kolmogorov criterion cannot be dropped"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [cex-rellich-fails-on-rn-by-translations, thm-frechet-kolmogorov-compactness-criterion-in-lp, thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity, def-translation-of-a-function-on-rn, def-l-p-space-as-a-quotient-by-null-functions, def-totally-bounded, def-countable-choice, def-dependent-choice]
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
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 1.15 and Example 1.16, printed pp. 6-7"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem B.15 and Example 9.14, printed pp. 219 and 360-361"
---

## Statement refuted

**Refuted claim.** The tightness condition (ii) of the
Fr\'echet--Kolmogorov criterion is redundant: an $L^p$-bounded family that is
uniformly translation continuous would already be relatively compact.

The witness is the family of translates of one compactly supported bump, which
satisfies boundedness and uniform translation continuity but escapes to
infinity and therefore has no convergent subsequence.

## Facts & Assumptions

**Given:** Countable and Dependent Choice; a nonzero compactly supported $\varphi\in W^{1,p}(\mathbb R^n)$, $1\le p<\infty$, as in [[cex-rellich-fails-on-rn-by-translations]]; and $u_k(x)=\varphi(x-ke_1)$, $\mathcal F=\{u_k:k\ge1\}$.

[F1] *Boundedness and translation invariance.* $\|u_k\|_{L^p}=\|\varphi\|_{L^p}$ and $\|\tau_hu_k-u_k\|_{L^p}=\|\tau_h\varphi-\varphi\|_{L^p}$ for all $k,h$, by translation invariance of Lebesgue measure. ([[def-translation-of-a-function-on-rn]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F2] *Continuity of translation.* $\|\tau_h\varphi-\varphi\|_{L^p}\to0$ as $|h|\to0$. ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]])

[F3] *Failure of relative compactness.* The sequence $(u_k)$ has no $L^p(\mathbb R^n)$-convergent subsequence. ([[cex-rellich-fails-on-rn-by-translations]])

[F4] *The criterion and total boundedness.* Under Countable and Dependent Choice, a bounded family with vanishing tails and uniform translation control is totally bounded with compact closure; total boundedness is exactly the finite-net condition. ([[thm-frechet-kolmogorov-compactness-criterion-in-lp]], [[def-totally-bounded]])

## Counterexample

**Proof technique:** direct.

1.1 By [F1] and [F2], $\mathcal F$ is bounded, $\sup_k\|u_k\|_{L^p}=\|\varphi\|_{L^p}<\infty$, and $\sup_k\|\tau_hu_k-u_k\|_{L^p}=\|\tau_h\varphi-\varphi\|_{L^p}\to0$ as $|h|\to0$: the family is uniformly translation continuous. [F1, F2, given]

1.2 Fix $R>0$ and choose a radius $A>0$ with $\operatorname{supp}\varphi\subseteq B(0,A)$ and then an integer $k>R+A$; then up to a null set the support of $u_k$ lies outside $B(0,R)$, so $\int_{|x|>R}|u_k|^pdx=\|u_k\|_{L^p}^p=\|\varphi\|_{L^p}^p>0$, and this value is independent of $R$; hence no $R$ makes the tails uniformly small, and the tightness condition of [F4] fails. [F1, given]

2.1 By [F3] the family is not relatively compact, so — although it is bounded and uniformly translation continuous — it violates the conclusion of the criterion [F4]; the two remaining hypotheses do not force compactness, and the refuted claim is false. Countable and Dependent Choice are used only through the criterion [F4] and its negated instance; the Sobolev and translation suppliers also use Countable Choice. [F3, F4, step 1.1, step 1.2] ∎ 