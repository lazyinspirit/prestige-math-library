---
id: thm-morrey-rellich-compactness-for-p-greater-than-n
kind: theorem
title: "Morrey--Rellich compactness for $p>n$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [thm-morrey-inequality-for-p-greater-than-n, thm-arzela-ascoli-for-real-ck, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, lem-weak-leibniz-rule-with-a-smooth-factor, def-sobolev-extension-domain-and-extension-operator, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-compactly-embedded-normed-spaces, def-countable-choice, def-dependent-choice, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 3.48 and its proof by Theorem 3.36 (Morrey) plus Arzel\\`a--Ascoli, printed p. 75"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem 9.31, the $p>n$ clause and Theorem B.3, printed pp. 218 and 341"
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a
bounded extension domain, let $n<p<\infty$ and $\alpha=1-\frac np$. Replace
every $u\in W^{1,p}(\Omega)$ by its continuous Morrey representative $u^{*}$
([[thm-morrey-inequality-for-p-greater-than-n]]). Then every sequence bounded
in $W^{1,p}(\Omega)$ has a subsequence whose representatives converge in
$C^{0,\beta}(\overline\Omega)$ for every $0\le\beta<\alpha$; in particular
$W^{1,p}(\Omega)$ is compactly embedded in every $C^{0,\beta}(\overline\Omega)$,
$0\le\beta<\alpha$, and in $L^q(\Omega)$ for every $1\le q<\infty$.

## Facts & Assumptions

**Given:** the Axiom of Choice, a bounded extension domain $\Omega\subseteq\mathbb R^n$, $n<p<\infty$, $\alpha=1-n/p$, and a sequence $(u_j)$ with $M:=\sup_j\|u_j\|_{W^{1,p}(\Omega)}<\infty$.

[F1] *Extension and cutoff.* There are a bounded extension operator $E$ and a fixed $\eta\in C_c^\infty(\mathbb R^n)$ with $\eta=1$ on $\Omega$; the products $v_j:=\eta\,Eu_j$ lie in $W^{1,p}(\mathbb R^n)$, are supported in the fixed compact set $\operatorname{supp}\eta$, satisfy $\|v_j\|_{W^{1,p}(\mathbb R^n)}\le C_1M$, and equal $u_j$ almost everywhere on $\Omega$. ([[def-sobolev-extension-domain-and-extension-operator]], [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], [[lem-weak-leibniz-rule-with-a-smooth-factor]], [[def-sobolev-space-wkp-and-its-norm]])

[F2] *Morrey's inequality on the compact set used here.* Each $v_j$ in [F1] is supported in a fixed compact set $K$. Choose one ball $B(x,R)$ containing $K\cup\overline\Omega$. The supplier's local estimate on $B(x,R)$, with $B(x,2R)\subset\mathbb R^n$, gives $[v_j^*]_{C^{0,\alpha}(B(x,R))}\le C_2\|Dv_j\|_{L^p(B(x,2R))}$ for the continuous representative. Its average on $B(x,R)$ has modulus at most $|B(x,R)|^{-1/p}\|v_j\|_{L^p(B(x,R))}$, so the same oscillation estimate also bounds $\|v_j^*\|_{L^\infty(B(x,R))}$ by $C_3\|v_j\|_{W^{1,p}(\mathbb R^n)}$. Continuous representatives are unique because continuous functions equal almost everywhere on an open ball are equal everywhere there. Thus both norms on $\overline\Omega$ are bounded by $C_4\|v_j\|_{W^{1,p}(\mathbb R^n)}$, with constants depending only on $n,p,R$. ([[thm-morrey-inequality-for-p-greater-than-n]], [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F3] *Arzel\`a--Ascoli.* A uniformly bounded, equicontinuous family of real functions on a compact metric space has a uniformly convergent subsequence; for complex-valued families apply this to real and imaginary parts. ([[thm-arzela-ascoli-for-real-ck]])

[F4] *H\"older interpolation.* For a bounded function $g:K\to\mathbb K$ on
any set $K\subseteq\mathbb R^n$, write
$[g]_{C^{0,\gamma}(K)}:=\sup_{x\ne y\in K}|g(x)-g(y)|/|x-y|^\gamma$ and
$\|g\|_{C^{0,\gamma}(K)}:=\|g\|_{L^\infty(K)}+[g]_{C^{0,\gamma}(K)}$.
For $0<\beta<\alpha$ and $\theta=\beta/\alpha$, the bound
$|g(x)-g(y)|\le\min\{2\|g\|_{L^\infty(K)},
[g]_{C^{0,\alpha}(K)}|x-y|^\alpha\}$ gives
$$[g]_{C^{0,\beta}(K)}\le 2^{1-\theta}\|g\|_{L^\infty(K)}^{1-\theta} [g]_{C^{0,\alpha}(K)}^\theta,$$
and hence
$$\|g\|_{C^{0,\beta}(K)}\le\|g\|_{L^\infty(K)}+ 2^{1-\theta}\|g\|_{L^\infty(K)}^{1-\theta} [g]_{C^{0,\alpha}(K)}^\theta.$$
These follow from $\min\{A,B\}\le A^{1-\theta}B^\theta$ for $A,B\ge0$;
the seminorm and supremum conventions agree with
[[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]].

## Proof

**Proof technique:** extend, cut off, apply Morrey's inequality for uniform $C^{0,\alpha}$ bounds, extract uniformly convergent representatives by Arzel\`a--Ascoli, and interpolate down to $C^{0,\beta}$.

1.1 If $\Omega=\varnothing$ the claim is immediate. Otherwise, by [F1] and [F2] each $v_j^*$ satisfies $\|v_j^*\|_{L^\infty(\overline\Omega)}\le C_3C_1M$ and $[v_j^*]_{C^{0,\alpha}(\overline\Omega)}\le C_2C_1M$; hence the family $\{v_j^*|_{\overline\Omega}\}$ is uniformly bounded and $\alpha$-H\"older, in particular equicontinuous, on the compact set $\overline\Omega$. [F1, F2, given]

2.1 By [F3] applied to the real and imaginary parts on the compact metric space $\overline\Omega$, a subsequence of $(v_j^*|_{\overline\Omega})$ converges uniformly, that is, in $C^{0,0}(\overline\Omega)$; along it the $C^{0,\alpha}$ seminorms stay bounded by step 1.1. [F3, step 1.1]

3.1 Fix $0<\beta<\alpha$ and put $\theta=\beta/\alpha$. For the differences $g=v_k^*-v_\ell^*$ of the uniformly convergent subsequence, step 1.1 gives $[g]_{C^{0,\alpha}(\overline\Omega)}\le2C_2C_1M$, while $\|g\|_{L^\infty(\overline\Omega)}\to0$. By [F4], $$\|g\|_{C^{0,\beta}(\overline\Omega)}\le\|g\|_{L^\infty(\overline\Omega)}+ 2^{1-\theta}\|g\|_{L^\infty(\overline\Omega)}^{1-\theta} (2C_2C_1M)^\theta\longrightarrow0,$$ If $v$ is the uniform limit, passing to the limit in each difference quotient shows $[v]_{C^{0,\alpha}}\le C_2C_1M$. Apply the same estimate to $g=v_k^*-v$ to obtain convergence in $C^{0,\beta}(\overline\Omega)$; the case $\beta=0$ is step 2.1. Since $v_j^*=u_j$ almost everywhere on $\Omega$ by [F1] and [F2], this is the convergence of the Morrey representatives of the $u_j$, and uniform convergence on the bounded $\overline\Omega$ implies convergence in $L^q(\Omega)$ for every $1\le q<\infty$, so $W^{1,p}(\Omega)$ is compactly embedded in each $C^{0,\beta}(\overline\Omega)$, $\beta<\alpha$, and in each $L^q(\Omega)$, $1\le q<\infty$. The Axiom of Choice is inherited through the extension operator and Morrey's inequality. [F1, F2, F4, step 1.1, step 2.1] ∎