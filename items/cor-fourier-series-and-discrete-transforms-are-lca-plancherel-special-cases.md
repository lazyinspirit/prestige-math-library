---
id: cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases
kind: corollary
title: Compact and discrete transforms are the two extreme Plancherel cases
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 16
deps: [def-axiom-of-choice, def-compact-support-c-c-and-c-zero-on-an-lch-space, def-counting-measure, def-dependent-choice, def-fourier-transform-on-an-lca-group, def-integers, def-integers-modulo-n, def-l-p-space-as-a-quotient-by-null-functions, def-left-haar-integral-and-left-haar-measure, def-pontryagin-dual-and-compact-open-topology, def-square-summable-family-on-an-arbitrary-index-set, def-the-one-dimensional-torus-and-normalized-haar-integral, def-topological-group, lem-duals-of-finite-products-and-discrete-direct-sums, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals, thm-compatible-dual-haar-normalisation, thm-plancherel-theorem-for-lca-groups, thm-uniqueness-of-left-haar-measure-up-to-scale]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Sections 38B-38C, printed pp. 154-155: compatible compact/discrete Haar scales and the Fourier-series Parseval identity.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: Appendix C.3, Theorem C.8, printed p. 435, and the compact/discrete normalisation discussion after Theorem C.10, printed p. 436.
proof_strategy: direct
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]). Let $G$ be a locally compact Hausdorff abelian group.

(1) If $G$ is compact with $m_G(G)=1$, its dual $\widehat G$ is discrete and the compatible dual Haar measure gives each point mass $1$; the Plancherel theorem then reads as the Fourier-series identity $$\|f\|_2^2=\sum_{\gamma\in\widehat G}|\widehat f(\gamma)|^2,\qquad f\in L^2(G).$$

(2) If $G$ is discrete with $m_G$ the counting measure (each point of mass $1$), then $\widehat G$ is compact and the compatible dual Haar measure is the normalised Haar measure of $\widehat G$, and Plancherel reads $$\sum_{x\in G}|f(x)|^2=\|\widehat f\|_2^2,\qquad f\in\ell^2(G).$$

Without the stated normalisation of $m_G$ the identification of the dual measure in (2) is false; the compatible scale is reciprocal in $m_G$, as [[thm-compatible-dual-haar-normalisation]] records. For a general $L^2$ function, $\widehat f$ denotes the Plancherel transform $\mathcal Ff$; its pointwise integral formula is asserted only when $f\in L^1$.

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$ with Haar measure $m_G$, its dual $\widehat G$ with the compatible dual Haar measure $m_{\widehat G}$, and the unitary Plancherel transform $\mathcal F$.

[F1] If $G$ is compact then $\widehat G$ is discrete; if $G$ is discrete then, assuming Choice, $\widehat G$ is compact. ([[thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals]])

[F2] The Haar integral is translation invariant: $\int_Gf(x+a)\,dm_G(x)=\int_Gf(x)\,dm_G(x)$ for $f\in L^1(G)$ and $a\in G$. Characters are continuous homomorphisms into $\mathbb T$, so $\gamma_0\overline\chi=\gamma_0\chi^{-1}$ is a character, trivial exactly when $\gamma_0=\chi$, and every nontrivial character takes a value different from $1$. ([[def-left-haar-integral-and-left-haar-measure]], [[def-topological-group]], [[def-pontryagin-dual-and-compact-open-topology]])

[F3] The Plancherel transform $\mathcal F$ is unitary and agrees on $L^1(G)\cap L^2(G)$ with the Fourier transform $\widehat f(\chi)=\int_Gf(x)\overline{\chi(x)}\,dm_G(x)$. ([[thm-plancherel-theorem-for-lca-groups]], [[def-fourier-transform-on-an-lca-group]])

[F4] Counting measure on a set $X$ assigns $|E|$ to finite $E$, and on a discrete group it is a Haar measure: translation is a bijection, so it preserves cardinalities and hence the counting set function, which is positive on nonempty open sets and finite on compact sets. The space $L^2(X,\#_X)$ is the space $\ell^2(X)$ of square-summable families with norm $\big(\sum_{x}|f(x)|^2\big)^{1/2}$. ([[def-counting-measure]], [[def-left-haar-integral-and-left-haar-measure]], [[def-square-summable-family-on-an-arbitrary-index-set]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F5] A Haar measure on a locally compact group is finite on compact sets and positive on nonempty open sets; any two Haar measures on a locally compact group are positive scalar multiples of each other. ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[thm-uniqueness-of-left-haar-measure-up-to-scale]])

## Proof

1.1 Suppose first that $G$ is compact with $m_G(G)=1$; then $\widehat G$ is discrete by [F1]. For characters $\gamma_0,\chi\in\widehat G$ the transform of $\gamma_0$ is $\widehat{\gamma_0}(\chi)=\int_G\gamma_0(x)\overline{\chi(x)}\,dm_G(x)=\int_G(\gamma_0\chi^{-1})(x)\,dm_G(x)$; the character $\psi:=\gamma_0\chi^{-1}$ is trivial exactly when $\gamma_0=\chi$, and if it is nontrivial then $\psi(a)\ne1$ for some $a$ and translation invariance gives $\int_G\psi\,dm_G=\psi(a)\int_G\psi\,dm_G$, hence $\int_G\psi\,dm_G=0$. Therefore $\widehat{\gamma_0}(\chi)=1$ for $\chi=\gamma_0$ and $0$ otherwise, that is $\mathcal F\gamma_0=\mathbf 1_{\{\gamma_0\}}$. [F2, F3]

1.2 Suppose next that $G$ is discrete with $m_G$ the counting measure; then $\widehat G$ is compact by [F1]. The function $f_0:=\mathbf 1_{\{0\}}$ lies in $L^1(G)\cap L^2(G)$ with $\|f_0\|_2^2=m_G(\{0\})=1$ and $\widehat{f_0}(\chi)=\overline{\chi(0)}\,m_G(\{0\})=1$ for every $\chi\in\widehat G$, so $\mathcal F f_0$ is the constant function $1$ on $\widehat G$ and $\|\mathcal Ff_0\|_2^2=m_{\widehat G}(\widehat G)$. [F2, F3, F4]

2.1 In the situation of step 1.1, $\mathcal F$ is an isometry and $\|\gamma_0\|_2^2=m_G(G)=1$, while $\|\mathcal F\gamma_0\|_2^2=\|\mathbf 1_{\{\gamma_0\}}\|_2^2=m_{\widehat G}(\{\gamma_0\})$; hence $m_{\widehat G}(\{\gamma_0\})=1$ for every $\gamma_0\in\widehat G$. Every subset $E$ of the discrete dual is open and its compact subsets are finite, so Haar inner regularity gives $m_{\widehat G}(E)=\sup_{F\subseteq E\text{ finite}}|F|$. Thus $m_{\widehat G}$ is counting measure on $\widehat G$, and Plancherel for $f\in L^2(G)$ reads $\|f\|_2^2=\|\mathcal Ff\|_2^2=\sum_{\gamma\in\widehat G}|\mathcal Ff(\gamma)|^2=\sum_{\gamma\in\widehat G}|\widehat f(\gamma)|^2$. [F3, F4, step 1.1]

2.2 In the situation of step 1.2, $1=\|f_0\|_2^2=\|\mathcal Ff_0\|_2^2=m_{\widehat G}(\widehat G)$; since $\widehat G$ is compact, $m_{\widehat G}$ is a Haar measure of total mass $1$, that is the normalised Haar measure, and it is unique with that property by [F5]. With the counting measure on the discrete group $G$ one has $\|f\|_2^2=\sum_{x\in G}|f(x)|^2$ for $f\in\ell^2(G)$ by [F4], so Plancherel reads $\sum_{x\in G}|f(x)|^2=\|\mathcal Ff\|_2^2=\|\widehat f\|_2^2$. [F3, F4, F5, step 1.2]

3.1 Assembling steps 2.1 and 2.2: for a compact group with normalised Haar measure the Plancherel identity is the Fourier-series identity of (1), and for a discrete group with counting measure it is the $\ell^2$ identity of (2); these are the two extreme Plancherel cases appearing in the statement. [step 2.1, step 2.2] ∎