---
id: cex-rellich-fails-on-rn-by-translations
kind: counterexample
title: "Rellich compactness fails on $\\mathbb R^n$ by translations"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [lem-euclidean-bump-for-a-compact-set-inside-an-open-set, def-sobolev-space-wkp-and-its-norm, def-translation-of-a-function-on-rn, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-support-and-compactly-supported-riemann-integral-in-rn, def-l-p-space-as-a-quotient-by-null-functions, lem-classical-derivatives-are-weak-derivatives, thm-compact-subset-is-closed-and-bounded, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Example 9.14, printed p. 219"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Example 3.46, printed p. 74"
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "The discussion of escape to infinity after Theorem 3.44, printed p. 89"
---

## Statement refuted

**Refuted claim.** For $1\le p<\infty$ the inclusion
$W^{1,p}(\mathbb R^n)\hookrightarrow L^p(\mathbb R^n)$ is compact: every
sequence bounded in $W^{1,p}(\mathbb R^n)$ has a subsequence converging in
$L^p(\mathbb R^n)$.

The witness is the sequence of translates of one fixed nonzero compactly
supported test function. Boundedness survives translation, but a pair of
translates at large separation has two disjoint copies of the same mass, so
the sequence is not even Cauchy in $L^p$.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge1$, $1\le p<\infty$, and $\psi\in C_c^\infty(\mathbb R^n)$ nonzero; for $k\ge0$ put $u_k(x):=\psi(x-ke_1)$. Write $K:=\operatorname{supp}\psi$. A concrete choice is the bump of [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]] applied to the compact set $\{0\}$ inside the open unit ball: it is smooth, supported in $B(0,1)$, equal to $1$ at the origin and hence nonzero.

[F1] *Classical derivatives of smooth compactly supported functions are weak derivatives.* ([[lem-classical-derivatives-are-weak-derivatives]])

[F2] *Translation is an $L^p$-isometry and commutes with classical differentiation.* $\|\tau_hg\|_{L^p}=\|g\|_{L^p}$ for every $g\in L^p$ and every $h$, since Lebesgue measure is translation invariant, and $\partial_j(\tau_hg)=\tau_h(\partial_jg)$ for smooth $g$. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[def-translation-of-a-function-on-rn]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F3] *Supports of separated translates are disjoint.* $\operatorname{supp}u_k=K+ke_1$; if $|k-l|>2R$ where $K\subseteq B(0,R)$, then $(K+ke_1)\cap(K+le_1)=\varnothing$. A compact set is bounded, so such an $R$ exists. ([[def-support-and-compactly-supported-riemann-integral-in-rn]], [[thm-compact-subset-is-closed-and-bounded]], [[def-translation-of-a-function-on-rn]])

[F4] *The Sobolev norm.* $\|g\|_{W^{1,p}(\mathbb R^n)}=(\|g\|_{L^p}^p+\sum_{j=1}^n\|\partial_jg\|_{L^p}^p)^{1/p}$. ([[def-sobolev-space-wkp-and-its-norm]])

## Counterexample

**Proof technique:** direct.

1.1 By [F2] each translate satisfies $\|u_k\|_{L^p}=\|\psi\|_{L^p}$ and $\partial_ju_k=\tau_{ke_1}(\partial_j\psi)$ with $\|\partial_ju_k\|_{L^p}=\|\partial_j\psi\|_{L^p}$; [F1] identifies these classical derivatives with the weak derivatives, so by [F4] $\|u_k\|_{W^{1,p}(\mathbb R^n)}=\|\psi\|_{W^{1,p}(\mathbb R^n)}$ for every $k$. Hence $\sup_k\|u_k\|_{W^{1,p}}<\infty$. [F1, F2, F4, given]

2.1 By [F3] fix $R$ with $K\subseteq B(0,R)$; if $|k-l|>2R$ then $\operatorname{supp}u_k$ and $\operatorname{supp}u_l$ are disjoint, so $\|u_k-u_l\|_{L^p}^p=\int_{\operatorname{supp}u_k}|u_k|^p+\int_{\operatorname{supp}u_l}|u_l|^p=2\|\psi\|_{L^p}^p>0$. [F2, F3, step 1.1]

3.1 Let $(u_{k_j})$ be any subsequence. Its indices tend to infinity, so for every tail there are two indices in it whose difference exceeds $2R$. Step 2.1 makes their distance the fixed positive value $2^{1/p}\|\psi\|_p$, so this subsequence is not Cauchy and cannot converge. Hence no subsequence converges in $L^p$, and the refuted claim is false. Countable Choice is inherited through the smooth weak-derivative and Sobolev interfaces. [step 2.1, given] ∎