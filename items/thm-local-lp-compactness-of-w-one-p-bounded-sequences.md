---
id: thm-local-lp-compactness-of-w-one-p-bounded-sequences
kind: theorem
title: "Local $L^p$ compactness of $W^{1,p}_{\\mathrm{loc}}$-bounded sequences"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain, thm-extension-theorem-for-bounded-smooth-domains, lem-rat-embeds-dense, thm-rationals-countable, thm-product-of-countable, thm-heine-borel-rn, def-metric-compactness, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-weak-derivative-of-a-locally-integrable-function, def-weak-convergence-of-nets-and-sequences, thm-reflexivity-of-lp-for-one-less-p-less-infinity, cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence, def-countable-choice, def-dependent-choice, def-axiom-of-choice, lem-compactness-is-intrinsic, lem-finite-ambient-partitions-for-euclidean-boundary-integration]
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
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3, Section 3.6, localization form of the Rellich--Kondrachov theorem and the compactly contained cutoff step, printed pp. 85-86"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 3.11, the localisation of the previous results by finitely many balls, printed pp. 75-76"
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be
open and let $1\le p<\infty$. Let $(u_j)$ be a sequence that is bounded in
$W^{1,p}_{\mathrm{loc}}(\Omega)$: for every $\Omega'\Subset\Omega$ there is
$C_{\Omega'}$ with $\|u_j\|_{W^{1,p}(\Omega')}\le C_{\Omega'}$ for all $j$.
Then $(u_j)$ has a subsequence converging in $L^p_{\mathrm{loc}}(\Omega)$.

If additionally $1<p<\infty$, the limit of that subsequence can be chosen in
$W^{1,p}_{\mathrm{loc}}(\Omega)$, and then it is the limit in
$L^p_{\mathrm{loc}}(\Omega)$. For $p=1$ membership of the limit in
$W^{1,1}_{\mathrm{loc}}(\Omega)$ is **not** asserted: the weak-compactness
argument below uses the reflexivity of $L^p$, which fails at $p=1$, and a weak
limit of $L^1$ gradients need not be an $L^1$ function. The compactness
conclusion itself is proved for every $1\le p<\infty$.

## Facts & Assumptions

**Given:** the Axiom of Choice, an open set $\Omega\subseteq\mathbb R^n$, $1\le p<\infty$, and a sequence $(u_j)$ bounded in $W^{1,p}_{\mathrm{loc}}(\Omega)$.

[F1] *Countable relatively compact ball cover.* The rational balls $B(q,r)$ with $q\in\mathbb Q^n$, $r\in\mathbb Q_{>0}$ and $\overline{B(q,r)}\subseteq\Omega$ form a countable cover of $\Omega$: given $x\in\Omega$, openness and density of $\mathbb Q^n$ and $\mathbb Q$ give such a ball containing $x$. Countability follows from countability of $\mathbb Q$ and finite products, and each closed ball is compact by Heine--Borel. ([[lem-rat-embeds-dense]], [[thm-rationals-countable]], [[thm-product-of-countable]], [[thm-heine-borel-rn]])

[F2] *Rellich on smooth balls.* Every bounded ball is a bounded smooth extension domain, and every sequence bounded in $W^{1,p}$ on such a ball has a subsequence converging in $L^p$. ([[thm-extension-theorem-for-bounded-smooth-domains]], [[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]])

[F3] *Reflexivity of $L^p$.* Assume Countable Choice. For $1<p<\infty$ and every measure space, $L^p$ is reflexive, so every norm-bounded sequence in $L^p$ has a weakly convergent subsequence under the ultrafilter lemma, Dependent Choice and Hahn--Banach, all supplied by the Axiom of Choice. ([[thm-reflexivity-of-lp-for-one-less-p-less-infinity]], [[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]], [[def-weak-convergence-of-nets-and-sequences]], [[def-countable-choice]], [[def-dependent-choice]])

[F4] *Weak derivatives pass to weak limits.* If $u_k\rightharpoonup u$ and $D_iu_k\rightharpoonup v_i$ in $L^p(B)$, $1<p<\infty$, then $u\in W^{1,p}(B)$ with $D_iu=v_i$: test against $\varphi\in C_c^\infty(B)$ and pass to the limit in $\int u_k\partial_i\varphi=-\int D_iu_k\varphi$. ([[def-sobolev-space-wkp-and-its-norm]], [[def-weak-derivative-of-a-locally-integrable-function]], [[def-weak-convergence-of-nets-and-sequences]])

[F5] A compact subset of $\Omega$ has a finite subcover from any open cover of $\Omega$, in particular from the ball cover in [F1]. ([[lem-compactness-is-intrinsic]])

## Proof

**Proof technique:** Extract successively on a countable cover by relatively compact rational balls and diagonalise. For $p>1$, use weak compactness on each ball to identify the local limit's weak derivatives.

1.1 If $\Omega=\varnothing$, the assertions are immediate. Otherwise enumerate the countable cover in [F1] as $(B_m)_{m\ge1}$. The local boundedness hypothesis makes $(u_j)$ bounded in $W^{1,p}(B_1)$, so [F2] gives a subsequence converging in $L^p(B_1)$. Recursively, after obtaining a subsequence converging on $B_1,\dots,B_m$, apply [F2] to that subsequence on $B_{m+1}$ and retain a further subsequence converging there. Countable and Dependent Choice select these nested subsequences. The diagonal sequence $(v_j)$, taking the $j$-th term of the $j$-th subsequence, is eventually a subsequence of each stage; hence it converges in $L^p(B_m)$ for every $m$. [F1, F2, given]

2.1 Let $u_m$ be the $L^p(B_m)$ limit of $(v_j)$. On every overlap $B_m\cap B_\ell$ the limits $u_m$ and $u_\ell$ agree almost everywhere, by uniqueness of limits of the same sequence in $L^p(B_m\cap B_\ell)$. Since the cover is countable, these compatible classes patch to a class $u\in L^p_{\mathrm{loc}}(\Omega)$. If $\Omega'\Subset\Omega$, compactness and [F5] give a finite subcover $\Omega'\subseteq\bigcup_{m\in J}B_m$; therefore $$\|v_j-u\|_{L^p(\Omega')}^p\le\sum_{m\in J}\|v_j-u\|_{L^p(B_m)}^p\longrightarrow0.$$ Thus $v_j\to u$ in $L^p_{\mathrm{loc}}(\Omega)$. [F1, F5, step 1.1]

3.1 Suppose $1<p<\infty$ and fix $m$. The sequence $(v_j)$ is bounded in $W^{1,p}(B_m)$. By [F3], after finitely many further subsequence extractions, its function and each of its $n$ weak derivatives converge weakly in $L^p(B_m)$, say $v_{j_k}\rightharpoonup w$ and $D_iv_{j_k}\rightharpoonup w_i$. Step 2.1 gives strong convergence to $u_m$ in $L^p(B_m)$, so the weak limit is $w=u_m$. Passing to the limit in the weak-derivative identities against each $\varphi\in C_c^\infty(B_m)$ and using [F4] gives $u_m\in W^{1,p}(B_m)$ with $D_iu_m=w_i$. This argument may use a further subsequence depending on $m$: it identifies the already fixed strong limit $u_m$, so it identifies the derivatives of the already fixed limit on every ball without changing the diagonal sequence of step 1.1. On overlaps these derivative classes agree by the weak test identity. For any $\Omega'\Subset\Omega$, choose a finite ball subcover of $\overline{\Omega'}$ and an ambient smooth partition equal to one near that compact set ([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]]). Testing after multiplication by the partition pieces proves the weak derivative identity on $\Omega'$; the partition-gradient terms sum to zero, and the finitely many local $L^p$ bounds give global $L^p(\Omega')$ bounds. Thus $u\in W^{1,p}_{\mathrm{loc}}(\Omega)$. For $p=1$ this weak-compactness step is unavailable, and no membership of the limit in $W^{1,1}_{\mathrm{loc}}$ is asserted. The assumed Axiom of Choice supplies the countable selections in step 1.1 and the Countable and Dependent Choice interfaces of [F2] and [F3]. [F2, F3, F4, step 1.1, step 2.1] ∎
