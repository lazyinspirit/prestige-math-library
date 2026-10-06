---
id: thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n
kind: theorem
title: "Sobolev embedding on bounded extension domains for $p<n$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-axiom-of-choice, def-sobolev-conjugate-exponent, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-extension-domain-and-extension-operator, thm-gagliardo-nirenberg-sobolev-inequality, cor-sobolev-embeddings-transfer-from-rn-to-extension-domains, thm-extension-theorem-for-bounded-smooth-domains, thm-holder-inequality-for-integrals, thm-gagliardo-nirenberg-sobolev-inequality-for-p-one, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-riesz-fischer-completeness-of-l-p, thm-complex-lp-completeness-and-almost-everywhere-subsequences]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.6, Definition 3.42 and Theorem 3.43 with proof, printed pp. 84–85."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.7, Theorem 3.28 and the extension discussion, printed pp. 65-67."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a bounded $W^{1,p}$-extension domain with a bounded extension operator $E$, and let $1\le p<n$, $p\le q\le p^{*}=\frac{np}{n-p}$. Then $W^{1,p}(\Omega)\hookrightarrow L^q(\Omega)$ continuously:
$$\|u\|_{L^q(\Omega)}\le C(n,p,q,\Omega)\|u\|_{W^{1,p}(\Omega)}\qquad(u\in W^{1,p}(\Omega;\mathbb K)).$$

## Facts & Assumptions

**Given:** The Axiom of Choice; $n\ge2$; a bounded extension domain $\Omega$ with a bounded extension operator $E$ and operator norm $\|E\|$ ([[def-sobolev-extension-domain-and-extension-operator]]); $1\le p<n$; $p\le q\le p^{*}$; a field $\mathbb K$.

[F1] For $1<p<n$, the whole-space Gagliardo-Nirenberg-Sobolev inequality holds ([[thm-gagliardo-nirenberg-sobolev-inequality]]). For $p=1$, compactly supported smooth density ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]) extends [[thm-gagliardo-nirenberg-sobolev-inequality-for-p-one]] to $W^{1,1}(\mathbb R^n)$: the smooth estimate on differences gives an $L^{n/(n-1)}$ Cauchy sequence, completeness gives its limit, and successive almost-everywhere subsequences in that space and in $L^1$ identify the limit with the Sobolev class ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]). Thus $\|F\|_{p^*}\le C(n,p)\|DF\|_p$ for every $1\le p<n$ ([[def-sobolev-conjugate-exponent]]).

[F2] The transfer corollary: if $N$ is a whole-space functional with $N_\Omega(F|_\Omega)\le N(F)$ and $N(F)\le C\|F\|_{W^{1,p}(\mathbb R^n)}$, then $N_\Omega(u)\le C\|E\|\|u\|_{W^{1,p}(\Omega)}$ for all $u$ in $W^{1,p}(\Omega)$ ([[cor-sobolev-embeddings-transfer-from-rn-to-extension-domains]]).

[F3] Holder's inequality gives the $L^q$ interpolation bound $\|v\|_{L^q(\Omega)}\le\|v\|_{L^p(\Omega)}^{\theta}\|v\|_{L^{p^{*}}(\Omega)}^{1-\theta}$ whenever $1\le p\le q\le p^{*}<\infty$ and $\frac1q=\frac\theta p+\frac{1-\theta}{p^{*}}$, on a finite measure set ([[thm-holder-inequality-for-integrals]]).

[F4] $W^{1,p}$ consists of $L^p$ classes with weak gradient in $L^p$, and $\|v\|_{L^p(\Omega)}\le\|v\|_{W^{1,p}(\Omega)}$ ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]); every bounded $C^k$ domain supplies an admissible extension operator through the extension theorem ([[thm-extension-theorem-for-bounded-smooth-domains]]).

## Proof

**Proof technique:** direct.

1.1 The endpoint $q=p^{*}$. Apply the transfer corollary [F2] with $N(F)=\|F\|_{L^{p^{*}}(\mathbb R^n)}$, which satisfies the two hypotheses by [F1], enlarging $C(n,p)$ by the finite-dimensional comparison between the Euclidean gradient and the coordinate Sobolev norm: $\|F\|_{L^{p^{*}}(\mathbb R^n)}\le C(n,p)\|F\|_{W^{1,p}(\mathbb R^n)}$ and, since $Eu$ restricts to $u$ almost everywhere, $\|u\|_{L^{p^{*}}(\Omega)}=\|(Eu)|_\Omega\|_{L^{p^{*}}(\Omega)}\le\|Eu\|_{L^{p^{*}}(\mathbb R^n)}$. Hence $\|u\|_{L^{p^{*}}(\Omega)}\le C(n,p)\|E\|\|u\|_{W^{1,p}(\Omega)}$. [F1, F2, given, algebra]

2.1 Intermediate exponents. For $p\le q\le p^{*}$ write $\frac1q=\frac\theta p+\frac{1-\theta}{p^{*}}$ with $\theta=\frac{1/q-1/p^{*}}{1/p-1/p^{*}}\in[0,1]$ (at $q=p$ take $\theta=1$, at $q=p^{*}$ take $\theta=0$). By [F3], $\|u\|_{L^q(\Omega)}\le\|u\|_{L^p(\Omega)}^{\theta}\|u\|_{L^{p^{*}}(\Omega)}^{1-\theta}\le\max(1,C(n,p)\|E\|)\|u\|_{W^{1,p}(\Omega)}$ using $\|u\|_{L^p}\le\|u\|_{W^{1,p}}$ from [F4] and step 1.1; the case $q=p$ is the same inequality with $\theta=1$. [F3, F4, step 1.1, given, algebra]

3.1 The constant and the domain class. The constant obtained depends only on $n,p,q$ and $\|E\|$, hence only on $n,p,q,\Omega$ for a fixed extension domain; every bounded $C^k$ domain, $k\ge1$, supplies an admissible $E$ through [F4], so the embedding applies in particular to that class. [F4, step 1.1, step 2.1, given, algebra] ∎

## Source notes

The endpoint case is the whole-space Sobolev inequality transferred through a bounded extension operator, Kinnunen's Theorem 3.43 (printed pp. 84–85) and Definition 3.42; the intermediate exponents are the standard Holder interpolation between $L^p$ and $L^{p^{*}}$ on the finite measure set $\Omega$. The constant is not asserted to be uniform over all extension domains, matching the transfer corollary's dependence on $\|E\|$.
