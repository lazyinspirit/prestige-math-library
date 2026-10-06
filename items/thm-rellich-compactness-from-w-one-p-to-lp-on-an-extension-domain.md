---
id: thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain
kind: theorem
title: "Compactness of $W^{1,p}(\\Omega)\\hookrightarrow L^p(\\Omega)$ on bounded extension domains"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [lem-translation-estimate-for-w-one-p-functions, lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic, thm-frechet-kolmogorov-compactness-criterion-in-lp, def-sobolev-extension-domain-and-extension-operator, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, lem-weak-leibniz-rule-with-a-smooth-factor, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-metric-bounded-diameter, thm-extension-theorem-for-bounded-smooth-domains, def-countable-choice, def-dependent-choice, def-axiom-of-choice]
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
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Theorem 3.27 and its proof, printed pp. 76-77"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 3.45 together with the transfer discussion of Section 3.11, printed pp. 74-76"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem 9.31, the extension-property clause, printed p. 218"
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be a
bounded $W^{1,p}$-extension domain
([[def-sobolev-extension-domain-and-extension-operator]]) and let
$1\le p<\infty$. Then $W^{1,p}(\Omega)$ is compactly embedded in
$L^p(\Omega)$: every sequence bounded in $W^{1,p}(\Omega)$ has a subsequence
converging in $L^p(\Omega)$. Every bounded $C^1$ domain is an example.

## Facts & Assumptions

**Given:** the Axiom of Choice, a bounded $W^{1,p}$-extension domain $\Omega\subseteq\mathbb R^n$, $1\le p<\infty$, and a sequence $(u_j)$ with $M:=\sup_j\|u_j\|_{W^{1,p}(\Omega)}<\infty$.

[F1] *Extension operator.* There is a bounded linear $E:W^{1,p}(\Omega)\to W^{1,p}(\mathbb R^n)$ with $(Eu)|_\Omega=u$ and $\|Eu\|_{W^{1,p}(\mathbb R^n)}\le\|E\|\,\|u\|_{W^{1,p}(\Omega)}$. ([[def-sobolev-extension-domain-and-extension-operator]])

[F2] *Cutoff.* Since $\overline\Omega$ is compact and contained in the open set $V:=B(0,R)$, with $R>0$ large enough to contain $\overline\Omega$, there is $\eta\in C_c^\infty(\mathbb R^n)$ with $\eta=1$ on $\overline\Omega$ and $\operatorname{supp}\eta\subseteq V$, a fixed bounded set. This construction also works for the empty domain, choosing any ball $V$. ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], [[def-metric-bounded-diameter]])

[F3] *Products with a smooth cutoff.* If $v\in W^{1,p}(\mathbb R^n)$ and $\eta\in C_c^\infty(\mathbb R^n)$, then $\eta v\in W^{1,p}(\mathbb R^n)$ with $\|\eta v\|_{W^{1,p}(\mathbb R^n)}\le C_\eta\|v\|_{W^{1,p}(\mathbb R^n)}$ for a constant depending only on $\eta$ and $p$. ([[lem-weak-leibniz-rule-with-a-smooth-factor]])

[F4] *Translation estimate and automatic tails.* Under the Axiom of Choice, $\|\tau_hv-v\|_{L^p(\mathbb R^n)}\le|h|\,\||Dv|\|_{L^p(\mathbb R^n)}$; a family supported in one fixed bounded set has vanishing tails. ([[lem-translation-estimate-for-w-one-p-functions]], [[lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic]])

[F5] *The Fr\'echet--Kolmogorov criterion.* A bounded family in $L^p(\mathbb R^n)$ with vanishing tails and uniform translation control has an $L^p(\mathbb R^n)$-convergent subsequence. ([[thm-frechet-kolmogorov-compactness-criterion-in-lp]], [[def-countable-choice]], [[def-dependent-choice]])

[F6] *Restriction and norms.* $\|g|_\Omega\|_{L^p(\Omega)}\le\|g\|_{L^p(\mathbb R^n)}$; and $(Eu_j)|_\Omega=u_j$ almost everywhere. ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F7] *Bounded $C^1$ domains are extension domains.* ([[thm-extension-theorem-for-bounded-smooth-domains]])

## Proof

**Proof technique:** Extend, multiply by a fixed cutoff, apply the Fr\'echet--Kolmogorov criterion to the products, and restrict to $\Omega$.

1.1 Fix $E$ as in [F1] and $\eta$ as in [F2], and put $v_j:=\eta\,Eu_j$. By [F3] each $v_j$ lies in $W^{1,p}(\mathbb R^n)$ and is supported in the fixed bounded set $\operatorname{supp}\eta$; moreover $\|v_j\|_{W^{1,p}(\mathbb R^n)}\le C_\eta\|Eu_j\|_{W^{1,p}(\mathbb R^n)}\le C_\eta\|E\|M$, and $v_j=(Eu_j)|_\Omega=u_j$ almost everywhere on $\Omega$ because $\eta=1$ there. [F1, F2, F3, F6, given]

2.1 The family $\{v_j\}$ satisfies the three hypotheses of [F5]: it is bounded in $L^p(\mathbb R^n)$ by step 1.1; its tails vanish by [F4] because all members are supported in the fixed bounded set $\operatorname{supp}\eta$; and [F4] gives $\|\tau_hv_j-v_j\|_{L^p(\mathbb R^n)}\le|h|\,\||Dv_j|\|_{L^p(\mathbb R^n)}\le C'M'|h|$ with $C'$ and $M'$ independent of $j$, so the translation control is uniform and tends to $0$ with $|h|$. [F4, F5, step 1.1, algebra]

3.1 By [F5] some subsequence $(v_{j_k})$ converges in $L^p(\mathbb R^n)$, say to $v$; restricting and using $v_{j_k}=u_{j_k}$ almost everywhere on $\Omega$ together with [F6] gives $\|u_{j_k}-v|_\Omega\|_{L^p(\Omega)}=\|(v_{j_k}-v)|_\Omega\|_{L^p(\Omega)}\le\|v_{j_k}-v\|_{L^p(\mathbb R^n)}\to0$, so $(u_{j_k})$ converges in $L^p(\Omega)$. This proves compactness of the inclusion; its boundedness follows from $\|u\|_{L^p(\Omega)}\le\|Eu\|_{L^p(\mathbb R^n)}\le\|E\|\,\|u\|_{W^{1,p}(\Omega)}$ by [F1] and [F6]. Finally, [F7] says every bounded $C^1$ domain carries such an extension operator, giving the stated examples. The Axiom of Choice is inherited through [F1], [F4] and [F7], while the extraction uses the Countable and Dependent Choice of [F5]. [F1, F5, F6, F7, step 1.1, step 2.1] ∎ 