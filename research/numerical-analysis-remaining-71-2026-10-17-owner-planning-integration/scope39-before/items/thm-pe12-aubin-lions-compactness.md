---
id: thm-pe12-aubin-lions-compactness
kind: theorem
title: Aubin–Lions compactness with exact time exponent
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-pe12-gelfand-triple, def-compactly-embedded-normed-spaces, def-dependent-choice, def-countable-choice, thm-holder-inequality-for-integrals, thm-minkowski-inequality-for-integrals, thm-pe12-bochner-lp-completeness, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Tomáš Roubíček, Nonlinear Partial Differential Equations with Applications, 2nd ed., Birkhäuser, 2005
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MC/MCde/Roubicek%20T.%20Nonlinear%20partial%20differential%20equations%20with%20applications%20%282ed.%2C%202005%29%28ISBN%209783034805124%29%28O%29%28457s%29_MCde_.pdf
      locator: §7.3, Lemma 7.7 and complete proof, printed pp. 208–210
    - title: Marvin Fritz, Monotone Operators in Nonlinear PDEs, JKU lecture notes, WS 2023/2024
      url: https://numa.jku.at/media/filer_public/ff/80/ff80a871-94c4-4785-8314-028a46d185ed/lecturenotes.pdf
      locator: Theorem 8.8 and Corollary 8.9.1, PDF pp. 33–36
---

## Statement

Assume the Axiom of Choice. Let
$(V,H,J)$ be a Banach evolution triple with compact inclusion
$i:V\Subset H$ and continuous canonical inclusion $J:H\hookrightarrow V^*$.
Let $T<\infty$, $1<p<\infty$, and $1<q\le\infty$. Suppose
$u_j\in L^p(0,T;V)$ have distributional derivatives
$u_j'\in L^q(0,T;V^*)$ and
$$\sup_j\bigl(\|u_j\|_{L^p(0,T;V)}+\|u_j'\|_{L^q(0,T;V^*)}\bigr)<\infty.$$
Then $(u_j)$ is relatively compact in $L^p(0,T;H)$. If also
$\sup_j\|u_j\|_{L^\infty(0,T;H)}<\infty$, each subsequence converging in
$L^p(0,T;H)$ converges, after the same subsequence, in every
$L^r(0,T;H)$ with $1\le r<\infty$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the Banach evolution triple, compact and continuous embeddings,
$T<\infty$, $1<p<\infty$, $1<q\le\infty$, and the stated uniform bounds.

[F1] Compact embedding means every bounded sequence in $V$ has an
$H$-convergent subsequence; the canonical map $J$ is continuous and
$\langle Jh,v\rangle=(h,iv)_H$
([[def-compactly-embedded-normed-spaces]],
[[def-pe12-gelfand-triple]]).

[F2] A distributional derivative is tested against each $v\in V$ and scalar
$\phi\in C_c^\infty(0,T)$, so the coefficient
$t\mapsto(u_j(t),iv)_H$ has weak derivative
$t\mapsto\langle u_j'(t),v\rangle$
([[def-pe12-gelfand-triple]]).

[F3] Hölder and Minkowski control scalar pairings, integrals and finite
Bochner sums ([[thm-holder-inequality-for-integrals]],
[[thm-minkowski-inequality-for-integrals]]).

[F4] A scalar $W^{1,q}(0,T)$ class, $1\le q\le\infty$, has an absolutely
continuous representative on $[0,T]$
([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

[F5] The Bochner space $L^p(0,T;H)$ is complete
([[thm-pe12-bochner-lp-completeness]]).

[A1] The Axiom of Choice supplies Countable and Dependent Choice for
sequential extraction and countable dense-set selections
([[def-axiom-of-choice]],
[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]],
[[def-countable-choice]], [[def-dependent-choice]]).

## Proof
1.1 Fix $\varepsilon>0$. Compactness in [F1] makes the image in $H$ of the $V$ unit ball totally bounded. Choose finitely many points from $i(V)$ within $\varepsilon$ of that image, and let $E\subset i(V)$ be their finite-dimensional span. If $P_E$ is the $H$-orthogonal projection, its best-approximation property gives $$\|(I-P_E)iv\|_H\le\varepsilon\|v\|_V\qquad(v\in V).$$ After orthonormalizing a basis, write $e_\ell=iv_\ell$ with $v_\ell\in V$. [A1, F1, given, choose]

1.2 For each $j,\ell$, put $a_{j\ell}(t)=(u_j(t),e_\ell)_H$. Its weak derivative is $\langle u_j'(t),v_\ell\rangle$ by [F2]. The uniform bounds and the continuous $V\to H$ inclusion give uniform $L^p$ bounds on $a_{j\ell}$ and uniform $L^q$ bounds on their derivatives. By [F4] each coefficient has an absolutely continuous representative. For any such representative, some $s\in[0,T]$ has $|a_{j\ell}(s)|\le T^{-1/p}\|a_{j\ell}\|_{L^p}$; otherwise its $L^p$ norm would exceed that bound. Its total variation is at most $T^{1-1/q}\|a'_{j\ell}\|_{L^q}$ (with $T^{1-1/q}=T$ for $q=\infty$). Thus all coefficients are uniformly bounded, and Hölder gives the common modulus $$|a_{j\ell}(t)-a_{j\ell}(s)| \le C|t-s|^{1-1/q}$$ for $q<\infty$, with $C|t-s|$ for $q=\infty$. [A1, F2, F3, F4, given]

2.1 The finitely many coefficient functions of $P_Eu_j$ are uniformly bounded and share the modulus from step 1.2. Choose a finite time grid so the modulus between adjacent grid points is below $\varepsilon$, and finite $\varepsilon$-nets for their bounded values at each grid point. Rounding those values gives a finite $\varepsilon$-net in the uniform norm for the coefficient vectors, hence $\{P_Eu_j\}$ is totally bounded in $L^p(0,T;H)$. [A1, F3, step 1.2, choose]

3.1 By step 1.1, $$\|u_j-P_Eu_j\|_{L^p(0,T;H)} \le\varepsilon\|u_j\|_{L^p(0,T;V)}.$$ For each desired accuracy, choose $\varepsilon$ small and use step 2.1 to approximate the projected family by a finite net. The displayed remainder then shows that the full family is totally bounded in $L^p(0,T;H)$. [F3, step 1.1, step 2.1, algebra]

4.1 From total boundedness, [A1] selects a Cauchy subsequence; [F5] makes it convergent in $L^p(0,T;H)$. This proves relative compactness. If the $L^\infty(H)$ bound is $M$, pairwise differences have $L^\infty(H)$ norm at most $2M$. For $r<p$, finite-interval Hölder gives convergence in $L^r(H)$; for $r\ge p$, $$\|u_j-u_k\|_{L^r(H)}^r \le(2M)^{r-p}\|u_j-u_k\|_{L^p(H)}^p.$$ Completeness in each $L^r(H)$ then gives convergence for every finite $r$. [A1, F3, F5, step 3.1, algebra] ∎
