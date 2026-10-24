---
id: lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions
kind: lemma
title: "$\\ell^p$ sums of atoms converge in $\\mathcal S'$ and in $H^p$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-hp-atom-with-moment-order, def-real-hardy-space-by-a-radial-maximal-function, def-grand-maximal-test-class-of-order-n, def-convolution-of-a-tempered-distribution-with-a-schwartz-function, lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions, lem-an-hp-atom-has-uniform-hp-quasinorm, def-tempered-distribution, lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable, def-countable-choice, thm-monotone-convergence-for-the-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "the paragraph after Theorem 1, printed p. 61 (PDF p. 3): the easy embedding $H^p_A\\subset H^p$ via uniform atom bounds"
    - title: "Stefano Meda, Peter Sjogren, Maria Vallarino, Atomic decompositions and operators on Hardy spaces, Revista de la Union Matematica Argentina 50 (2009), no. 2, 15-22"
      url: "https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf"
      locator: "section 1, p. 16: convergence in $\\mathcal S'$ of atomic sums"
    - title: "Li-An Daniel Wang, Multiplier Theorems on Anisotropic Hardy Spaces (PhD dissertation, University of Oregon, 2012)"
      url: "https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download"
      locator: "Theorem 1.3, printed pp. 11-12: convergence of atomic sums in $H^p$ and the quasi-norm infimum formula"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $n\ge1$, $0<p\le1$,
$s\ge\lfloor n(1/p-1)\rfloor$, fix the admissible
kernel $\varphi$ defining $H^p$, and let $N$ be an admissible order for the
grand maximal function with $N\ge\max(N_0(n,p,\varphi),n+s+1)$. Let $(a_j)$ be a sequence of $(p,\infty,s)$-atoms
and $(\lambda_j)\in\ell^p$. Then the series $\sum_j\lambda_ja_j$ converges
absolutely in $\mathcal S'(\mathbb R^n)$ to an element
$g\in\mathcal S'(\mathbb R^n)$; the partial sums converge to $g$ in the $H^p$
quasi-norm of [[def-real-hardy-space-by-a-radial-maximal-function]]; $g\in H^p$;
and with $C_p=C(n,p,s,N,\varphi)<\infty$ independent of the atoms and
coefficients,
$$\|g\|_{H^p}\le C_p\Bigl(\sum_j|\lambda_j|^p\Bigr)^{1/p},\qquad \Bigl\|g-\sum_{j\le J}\lambda_ja_j\Bigr\|_{H^p}\le C_p \Bigl(\sum_{j>J}|\lambda_j|^p\Bigr)^{1/p}.$$

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<p\le1$, $s\ge\lfloor n(1/p-1)\rfloor$, the fixed admissible kernel $\varphi$, an admissible order $N\ge\max(N_0(n,p,\varphi),n+s+1)$, atoms $a_j$, coefficients $(\lambda_j)\in\ell^p$.

[F1] Uniform atom bound: there is $C=C(n,p,s)$ with $\|M_Na_j\|_{L^p}\le C$ and
$$|\langle a_j,\psi\rangle|\le C\|\psi\|_{C^{s+1}(\mathbb R^n)},\qquad \|\psi\|_{C^{s+1}(\mathbb R^n)}:=\max_{|\beta|\le s+1}\sup_{x\in\mathbb R^n}|\partial^\beta\psi(x)|,$$
for every $\psi\in\mathcal S$. The pairing estimate follows from assertion 2 of [[lem-an-hp-atom-has-uniform-hp-quasinorm]] because its minimum cube-volume factor is at most one; in particular this is a uniform bound by a continuous Schwartz seminorm.

[F2] Domination: $M^0_\varphi g\le2^NP_N(\varphi)M_Ng$ for every $g\in\mathcal S'$ ([[lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions]]).

[F3] Convergence in $\mathcal S'$ of the partial sums implies pointwise convergence of the convolutions: if $g_J\to g$ in $\mathcal S'$, then $(g_J*\varphi_t)(y)\to(g*\varphi_t)(y)$ for every $t>0$ and $y$, since $(g_J*\varphi_t)(y)=\langle g_J,\varphi_t(y-\cdot)\rangle$ and $\varphi_t(y-\cdot)\in\mathcal S$ ([[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]], [[def-tempered-distribution]]).

[F4] $M_N$ is Borel measurable and the $p$-th power inequality $|\sum_jz_j|^p\le\sum_j|z_j|^p$ holds for $0<p\le1$; monotone convergence applies to the nonnegative measurable partial sums ([[lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable]], [[thm-monotone-convergence-for-the-integral]]).

**Proof technique:** absolute convergence of pairings, monotone maximal control and monotone convergence.

## Proof

**Proof technique:** direct.

1.1 Absolute convergence in $\mathcal S'$. Fix $\psi\in\mathcal S$. By [F1], $|\lambda_j\langle a_j,\psi\rangle|\le C\|\psi\|_{C^{s+1}(\mathbb R^n)}|\lambda_j|$, and $\sum_j|\lambda_j|<\infty$ because $(\lambda_j)\in\ell^p$ and $p\le1$. Thus the scalar series $\sum_j\lambda_j\langle a_j,\psi\rangle$ converges absolutely for every $\psi$. Its limit defines a linear functional $g$ satisfying $|\langle g,\psi\rangle|\le C\|\psi\|_{C^{s+1}(\mathbb R^n)}\sum_j|\lambda_j|$; this continuous-seminorm bound proves $g\in\mathcal S'$, and the partial sums converge to $g$ on every Schwartz test. [F1, given, algebra]

1.2 Maximal control of the sum. For every $J$ put $g_J=\sum_{j\le J}\lambda_ja_j$. For fixed $\Psi\in\mathcal F_N$, $t>0$ and $y$ with $|y-x|\le t$, [F3] gives $(g*\Psi_t)(y)=\lim_J(g_J*\Psi_t)(y)$, so $|(g*\Psi_t)(y)|\le\limsup_J\sum_{j\le J}|\lambda_j||(a_j*\Psi_t)(y)|\le\sum_j|\lambda_j||(a_j*\Psi_t)(y)|$. Taking the defining suprema and using $|(a_j*\Psi_t)(y)|\le M_Na_j(x)$ for each such $\Psi,t,y$ gives $$M_Ng(x)=\sup_{\Psi\in\mathcal F_N}\sup_{t>0}\sup_{|y-x|\le t}|(g*\Psi_t)(y)|\le\sum_j|\lambda_j|M_Na_j(x)$$ pointwise. [F3, given, algebra]

2.1 $H^p$ bound and convergence. By [F4] and the $p$-power inequality for finite sums, letting the number of terms increase in the display of step 1.2 gives $$(M_Ng)^p\le\sum_j|\lambda_j|^p(M_Na_j)^p.$$ The nonnegative partial sums on the right are measurable; monotone convergence and [F1] therefore give $\|M_Ng\|_{L^p}^p\le C^p\sum_j|\lambda_j|^p$, so $\|g\|_{H^p}\le2^NP_N(\varphi)C(\sum_j|\lambda_j|^p)^{1/p}$ by [F2]. Applying the same argument to the tail $g-\sum_{j\le J}\lambda_ja_j=\sum_{j>J}\lambda_ja_j$ gives the stated tail bound; in particular the partial sums converge to $g$ in the $H^p$ quasi-norm. [step 1.1, step 1.2, F1, F2, F4, algebra]

3.1 Conclusion. Steps 1.1 and 1.2 establish the absolute convergence in $\mathcal S'$, and step 2.1 establishes the membership $g\in H^p$, the quasi-norm bound and the tail bound. This proves the lemma. [step 1.1, step 1.2, step 2.1] ∎
