---
id: thm-rellich-compactness-from-w-one-p-zero-to-lp
kind: theorem
title: "Compactness of $W^{1,p}_0(\\Omega)\\hookrightarrow L^p(\\Omega)$ on bounded open sets"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [lem-translation-estimate-for-w-one-p-functions, lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic, thm-frechet-kolmogorov-compactness-criterion-in-lp, lem-zero-extension-from-w-one-p-zero, def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-metric-bounded-diameter, def-countable-choice, def-dependent-choice, def-axiom-of-choice]
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
      locator: "Theorem 3.45 and its proof, printed pp. 73-74"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Theorem 3.26 and its proof, printed pp. 74-76"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem 9.31, the $W^{1,p}_0(U)$ clause, printed p. 218"
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be a
bounded open set and let $1\le p<\infty$. Then $W^{1,p}_0(\Omega)$ is
compactly embedded in $L^p(\Omega)$: the inclusion is bounded, and every
sequence bounded in $W^{1,p}_0(\Omega)$ has a subsequence converging in
$L^p(\Omega)$. No regularity of $\partial\Omega$ is needed.

## Facts & Assumptions

**Given:** the Axiom of Choice, $n\ge1$, a bounded open
$\Omega\subseteq\mathbb R^n$, $1\le p<\infty$, and a sequence $(u_j)$ with
$M:=\sup_j\|u_j\|_{W^{1,p}_0(\Omega)}<\infty$.

[F1] *Zero extension.* For each $j$ the zero extension $\tilde u_j$ of $u_j$
lies in $W^{1,p}(\mathbb R^n)$ with $D_i\tilde u_j$ the zero extension of
$D_iu_j$ and $\|\tilde u_j\|_{W^{1,p}(\mathbb R^n)}=\|u_j\|_{W^{1,p}(\Omega)}$;
the extension vanishes outside $\overline\Omega$.
([[lem-zero-extension-from-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]],
[[def-sobolev-space-wkp-and-its-norm]])

[F2] *Translation estimate.* $\|\tau_h\tilde u_j-\tilde u_j\|_{L^p(\mathbb R^n)}\le|h|\,\|D\tilde u_j\|_{L^p(\mathbb R^n)}$, under the Axiom of Choice. ([[lem-translation-estimate-for-w-one-p-functions]])

[F3] *Automatic tails.* A family in $L^p(\mathbb R^n)$ whose members all
vanish almost everywhere outside the fixed bounded set $\overline\Omega$
satisfies the tightness condition of the Fr\'echet--Kolmogorov criterion.
([[lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic]],
[[def-metric-bounded-diameter]])

[F4] *The Fr\'echet--Kolmogorov criterion.* A bounded family in
$L^p(\mathbb R^n)$ with vanishing tails and uniform translation control is
totally bounded, its closure is compact, and every sequence in it has an
$L^p(\mathbb R^n)$-convergent subsequence. ([[thm-frechet-kolmogorov-compactness-criterion-in-lp]],
[[def-countable-choice]], [[def-dependent-choice]])

[F5] *Restriction is contractive.* $\|u\|_{L^p(\Omega)}\le\|u\|_{W^{1,p}_0(\Omega)}$, and the $L^p(\Omega)$ norm of the restriction never exceeds the $L^p(\mathbb R^n)$ norm of an extension. ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]])

## Proof

**Proof technique:** Extend by zero, verify the three Fr\'echet--Kolmogorov conditions for the extended family, extract an $L^p(\mathbb R^n)$-convergent subsequence, and restrict.

1.1 By [F1] the extensions satisfy $\sup_j\|\tilde u_j\|_{L^p(\mathbb R^n)}\le M<\infty$, and the finite-dimensional equivalence of norms gives $\sup_j\||D\tilde u_j|\|_{L^p(\mathbb R^n)}\le C_nM<\infty$ since each component $D_i\tilde u_j$ is bounded in $L^p$ by $M$; moreover each $\tilde u_j$ vanishes outside the fixed bounded set $\overline\Omega$. [F1, given, algebra]

2.1 The family $\{\tilde u_j\}$ meets the hypotheses of [F4]: it is bounded by step 1.1; its tails vanish by [F3]; and by [F2] $\|\tau_h\tilde u_j-\tilde u_j\|_{L^p(\mathbb R^n)}\le|h|\,\||D\tilde u_j|\|_{L^p(\mathbb R^n)}\le C_nM|h|$, a bound uniform in $j$ that tends to $0$ with $|h|$. [F2, F3, F4, step 1.1]

3.1 By [F4] there is a subsequence $(\tilde u_{j_k})$ converging in $L^p(\mathbb R^n)$, say to $v$; restricting to $\Omega$ gives $\|u_{j_k}-v|_\Omega\|_{L^p(\Omega)}\le\|\tilde u_{j_k}-v\|_{L^p(\mathbb R^n)}\to0$ by [F5], so $(u_{j_k})$ converges in $L^p(\Omega)$. Boundedness of the inclusion is the inequality $\|u\|_{L^p(\Omega)}\le\|u\|_{W^{1,p}_0(\Omega)}$ of [F5]; the extraction uses the Countable and Dependent Choice of [F4], and the Axiom of Choice is inherited through the translation estimate [F2]. [F1, F4, F5, step 2.1] ∎ 