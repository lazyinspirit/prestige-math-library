---
id: lem-continuous-characters-separate-points-of-an-lca-group
kind: lemma
title: Continuous characters separate points of an LCA group
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [cor-cauchy-schwarz-inequality-for-l-two, def-axiom-of-choice, def-compact-support-c-c-and-c-zero-on-an-lch-space, def-dependent-choice, def-fourier-transform-on-an-lca-group, def-hausdorff-space, def-integrable-real-and-complex-functions-and-their-integrals, def-l-p-space-as-a-quotient-by-null-functions, def-left-haar-integral-and-left-haar-measure, def-locally-compact-space, def-neighbourhood-top, def-positive-definite-function-on-an-abelian-group, def-topological-group, lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure, lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, lem-lca-lone-convolution-is-a-commutative-banach-star-algebra, lem-lca-positive-convolution-squares-form-an-inversion-core, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, lem-topological-group-translations-and-inversion, lem-translations-preserve-compactly-supported-continuous-functions, thm-bochner-theorem-for-lca-groups, thm-complex-stone-weierstrass-self-adjoint, thm-extension-of-a-bounded-map-from-a-dense-subspace, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-riesz-fischer-completeness-of-l-p]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Section 36A, printed pp. 141-142: Bochner representation; Section 36B, printed p. 142: convolution squares and the positive-definite core. The separating bump argument is supplied here.'
  - title: T. W. Koerner, Topological Groups (author lecture notes)
    url: https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf
    locator: 'Theorem 13.3, printed p. 26: injectivity of the evaluation map; the independent Bochner proof is supplied here.'
proof_strategy: direct
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]). Let $G$ be a locally compact Hausdorff abelian group ([[def-locally-compact-space]], [[def-hausdorff-space]], [[def-topological-group]]) and let $x\in G$ with $x\ne0$. Then there is $\gamma\in\widehat G$ with $\gamma(x)\ne1$. Equivalently, the evaluation map $\Phi(x)(\gamma):=\gamma(x)$ is injective on $G$.

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$ and a point $x\in G$ with $x\ne0$.

[F1] In a Hausdorff space distinct points have disjoint open neighbourhoods; in a locally compact Hausdorff space every point has a neighbourhood basis of open sets with compact closure. In a topological group addition is continuous and translations and inversion are homeomorphisms. ([[def-hausdorff-space]], [[def-locally-compact-space]], [[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]], [[def-neighbourhood-top]], [[def-topological-group]], [[lem-topological-group-translations-and-inversion]])

[F2] If $K\subseteq U$ with $K$ compact and $U$ open in a locally compact Hausdorff space $X$, then under Dependent Choice there is $f\in C_c(X)$ with $\mathbf 1_K\le f\le\mathbf 1_U$. ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]])

[F3] For $g\in C_c(G)$ put $\widetilde g(x):=\overline{g(-x)}$. Then $g*\widetilde g\in C_c(G)$ is continuous with compact support, is positive definite, and $(g*\widetilde g)(0)=\int_G|g|^2\,dm_G\ge0$; the convolution is $(f*g)(x)=\int_Gf(y)g(x-y)\,dm_G(y)$ and $C_c(G)\subseteq L^1(G)\cap L^2(G)$. A left Haar measure is strictly positive on nonzero nonnegative compactly supported functions, so $\int_G|g|^2>0$ whenever $g\not\equiv0$. ([[lem-lca-positive-convolution-squares-form-an-inversion-core]], [[lem-lca-lone-convolution-is-a-commutative-banach-star-algebra]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[def-left-haar-integral-and-left-haar-measure]])

[F4] Bochner's theorem: a continuous function $\phi:G\to\mathbb C$ is positive definite if and only if there is a unique finite positive Radon measure $\mu$ on $\widehat G$ with $\phi(x)=\int_{\widehat G}\gamma(x)\,d\mu(\gamma)$ for all $x$, and then $\mu(\widehat G)=\phi(0)$. ([[thm-bochner-theorem-for-lca-groups]], [[def-positive-definite-function-on-an-abelian-group]], [[lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite]])

[F5] For $g\in C_c(G)$ and $y\in G$ one has $\overline{g(y-x)}=\widetilde g(x-y)$, and $x\notin S-S$ is equivalent to $S\cap(x+S)=\varnothing$. ([[def-topological-group]], [[lem-topological-group-translations-and-inversion]])

## Proof

1.1 Because $x\ne0$ and $G$ is Hausdorff, addition is continuous at $(0,0)$ and $G\setminus\{x\}$ is open, so there are open neighbourhoods $W_1,W_2$ of $0$ with $W_1+W_2\subseteq G\setminus\{x\}$; replacing them by their intersections with their negatives and with each other, we obtain a symmetric open neighbourhood $W$ of $0$ with $(W+W)\cap\{x\}=\varnothing$. [F1]

2.1 Choose a symmetric compact neighbourhood $S$ of $0$ with $S\subseteq W$: a neighbourhood basis of open sets with compact closure at $0$ supplies an open $V$ with $0\in V\subseteq\mathrm{cl}_G(V)\subseteq W$, and $S:=\mathrm{cl}_G(V)\cap(-\mathrm{cl}_G(V))$ is compact and symmetric with $0\in S\subseteq W$. Then $S-S\subseteq W+W$, so $x\notin S-S$; hence $S\cap(x+S)=\varnothing$, since $s=x+s'$ would give $x=s-s'\in S-S$. [F1, F5, step 1.1]

3.1 Apply the cutoff of [F2] with $K=\{0\}$ and $U=\mathrm{int}_G(S)$ to obtain $g\in C_c(G)$ with $g\ge0$, $g(0)=1$ and $\operatorname{supp}g\subseteq S$. Then $h:=g*\widetilde g$ is continuous with compact support, positive definite, and $h(0)=\int_G|g|^2\,dm_G>0$ because $g\not\equiv0$ and $g\ge0$. [F2, F3, step 2.1]

4.1 For this $h$ one has $h(x)=0$: by the convolution formula and $\widetilde g(x-y)=\overline{g(y-x)}$ from [F5], $h(x)=\int_Gg(y)\overline{g(y-x)}\,dm_G(y)$, and the integrand vanishes identically because $g(y)\ne0$ forces $y\in S$ while $g(y-x)\ne0$ forces $y\in x+S$, and $S\cap(x+S)=\varnothing$. [F3, F5, step 2.1, step 3.1]

5.1 By Bochner's theorem [F4] there is a unique finite positive Radon measure $\mu$ on $\widehat G$ with $h(x)=\int_{\widehat G}\gamma(x)\,d\mu(\gamma)$ for all $x\in G$ and $\mu(\widehat G)=h(0)>0$. If $\gamma(x)=1$ for every $\gamma\in\widehat G$, then $h(x)=\int_{\widehat G}1\,d\mu(\gamma)=\mu(\widehat G)=h(0)>0$, contradicting $h(x)=0$ from step 4.1. Hence some $\gamma\in\widehat G$ satisfies $\gamma(x)\ne1$. [F4, step 3.1, step 4.1]

6.1 Since $x\ne0$ was arbitrary, continuous characters separate points of $G$. Equivalently the evaluation map is injective: if $\Phi(x)=\Phi(x')$ then $\gamma(x-x')=\gamma(x)\gamma(-x')=\gamma(x)\overline{\gamma(x')}=1$ for every $\gamma\in\widehat G$, the separation result forces $x-x'=0$, that is $x=x'$. Conversely, if $\Phi$ is injective and $x\ne0$, then $\Phi(x)\ne\Phi(0)$, so some character has $\gamma(x)\ne1$. [step 5.1] ∎