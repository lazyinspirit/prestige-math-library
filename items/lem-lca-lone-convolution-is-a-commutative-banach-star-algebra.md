---
id: lem-lca-lone-convolution-is-a-commutative-banach-star-algebra
kind: lemma
title: L^1 of an LCA group is a commutative Banach star algebra under convolution
dependency_level: 1
deps:
- thm-absolute-continuity-of-the-integral
- thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation
- def-fourier-transform-on-an-lca-group
- def-left-haar-integral-and-left-haar-measure
- def-l-p-space-as-a-quotient-by-null-functions
- def-integrable-real-and-complex-functions-and-their-integrals
- def-radon-measure-on-an-lch-space
- lem-lca-haar-measure-is-inversion-invariant
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-c-c-is-dense-in-l-p-for-radon-measures
- thm-rmk-uniqueness-among-radon-measures
- thm-riesz-fischer-completeness-of-l-p
- thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
- thm-minkowski-integral-inequality
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- lem-translations-preserve-compactly-supported-continuous-functions
- def-compactness-variants
- thm-finite-products-of-compact-spaces
- thm-compactness-under-continuous-maps
- def-dependent-choice
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
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume Dependent Choice. Let $G$ be a locally compact Hausdorff abelian group
with Haar measure $m_G$, and let $A=L^1(G,m_G)$. For $f,g\in A$ define
$$(f*g)(x):=\int_G f(y)\,g(x-y)\,dm_G(y),\qquad f^*(x):=\overline{f(-x)} .$$
Then (1) for $m_G$-a.e. $x$ the integral converges absolutely and defines a
class in $A$ independent of the chosen representatives, with
$$\|f*g\|_1\le\|f\|_1\|g\|_1;$$
(2) convolution is bilinear, associative and commutative, $*$ is an isometric
involution with $f^{**}=f$ and $(f*g)^*=g^**f^*$, and $A$ is complete in
$\|\cdot\|_1$; hence $A$ is a commutative Banach $*$-algebra. No
$\sigma$-finiteness of $m_G$ is assumed: the proof reduces the two $\sigma$-compact
essential supports to a $\sigma$-finite product and extends by zero. $A$ has an
identity exactly when $G$ is discrete, proved later on this page.

## Facts & Assumptions

**Given:** Dependent Choice, a locally compact Hausdorff abelian group $G$ written additively with Haar measure $m_G$, and $A=L^1(G,m_G)$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F1] $m_G$ is a Radon measure that is translation invariant, finite on compact sets and positive on nonempty open sets ([[def-left-haar-integral-and-left-haar-measure]], [[def-radon-measure-on-an-lch-space]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]). For a Borel $E$ with $m_G(E)<+\infty$ choose an open $U\supseteq E$ with $m_G(U)<+\infty$ and then a sequence of compact $K_j\subseteq U$ with $m_G(K_j)\to m_G(U)$; then $m_G(U\setminus\bigcup_jK_j)=0$ and $E$ is covered by the $\sigma$-compact set $\bigcup_jK_j$ up to a null set.

[F2] Haar measure on $G$ is invariant under inversion: $m_G(-E)=m_G(E)$ for every Borel $E$ ([[lem-lca-haar-measure-is-inversion-invariant]]), so $\int_Gh(-x)\,dm_G(x)=\int_Gh\,dm_G$ for every nonnegative Borel $h$.

[F3] If $S,T\subseteq G$ are $\sigma$-compact, then so is $S+T$ (the image of the $\sigma$-compact $S\times T$ under the continuous addition map), and the product measure space $S\times(S+T)$ with $m_G\otimes m_G$ is $\sigma$-finite: $S\times(S+T)$ is a countable union of products of compact, hence finite-measure, sets ([[def-compactness-variants]], [[thm-finite-products-of-compact-spaces]], [[thm-compactness-under-continuous-maps]], [[def-left-haar-integral-and-left-haar-measure]]). Tonelli's theorem and Fubini's theorem for $L^1$ functions apply on this product ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F4] $C_c(G)$ is dense in $A$ ([[thm-c-c-is-dense-in-l-p-for-radon-measures]]), and two Radon measures with equal integrals of every real $C_c$ function agree on all Borel sets ([[thm-rmk-uniqueness-among-radon-measures]]); an $L^1$ density defines a finite measure with total variation controlled by its $L^1$ norm ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]]). Such density measures are Radon: approximate the density in $L^1$ by $C_c$ functions and transfer finite-measure regularity with the total-variation error bound. Applying RMK uniqueness to the positive and negative parts of its real and imaginary density therefore shows that a function $\varphi\in A$ with $\int_G\varphi h\,dm_G=0$ for every $h\in C_c(G)$ vanishes $m_G$-a.e. ([[def-dependent-choice]]).

[F5] $A$ is complete in $\|\cdot\|_1$, and $\|\cdot\|_1$ is computed on representatives and descends to the quotient ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]); translations preserve $C_c$ ([[lem-translations-preserve-compactly-supported-continuous-functions]]).



**Proof technique:** direct.

[F6] For $u\in L^1(G)$ the integral of $|u|$ is absolutely continuous with respect to $m_G$: for each $\varepsilon>0$ there is $\delta>0$ such that $m_G(E)<\delta$ implies $\int_E|u|\,dm_G<\varepsilon$ ([[thm-absolute-continuity-of-the-integral]]).

## Proof

1.1 (Reduction to $\sigma$-compact supports.) Let $f\in A$. For each $n\ge1$ the Borel set $E_n:=\{|f|>1/n\}$ has $m_G(E_n)\le n\|f\|_1<+\infty$, so by [F1] there is a $\sigma$-compact set $S_n$ with $m_G(E_n\setminus S_n)=0$. Then $S:=\bigcup_nS_n$ is $\sigma$-compact and $m_G(\{|f|>0\}\setminus S)=0$, so $f=0$ $m_G$-a.e. outside $S$ and $f\cdot\mathbf 1_S$ represents the same class with $\|f\cdot\mathbf 1_S\|_1=\|f\|_1$. For the product-measurability needed below, choose $C_c$ approximants converging in $L^1$ and, after a subsequence, almost everywhere, using [F4, F5]. Define a representative by their pointwise limit where it exists, and zero elsewhere. Its support lies in the countable union of their compact supports. Do this for both $f$ and $g$; we may thus assume $f,g$ have $\sigma$-compact supports $S,T$ and are pointwise limits of $C_c$ functions wherever their limits exist, with zero assigned on the remaining null sets. On any product of two compact subsets of $G$, a continuous scalar kernel is uniformly approximable by finite sums of products of bounded Borel functions of the separate coordinates: take finite sufficiently fine covers in each coordinate and disjointify them. Hence it is product measurable there. Applying this to the continuous kernels $g_n(x-y)$ and taking their pointwise limits proves product measurability for $g(x-y)$ on the $\sigma$-compact products below; the zero convention uses the measurable set where the sequence converges. No equality of the topological and product Borel sigma-algebras is assumed. [F1, F3, F4, F5]

2.1 (Convolution is a well-defined contraction.) Assume $f,g$ are supported in the $\sigma$-compact sets $S,T$. For these representatives, step 1.1 shows that $\Phi(y,x):=|f(y)|\,|g(x-y)|$ is product measurable on $S\times(S+T)$ and is supported in $S\times(S+T)$, a $\sigma$-finite product by [F3], and $g(x-y)=0$ unless $x-y\in T$, that is $x\in y+T\subseteq S+T$. Tonelli's theorem on that $\sigma$-finite product gives $$\int_{S\times(S+T)}\Phi\,d(m_G\otimes m_G)=\int_S|f(y)|\Bigl(\int_{S+T}|g(x-y)|\,dm_G(x)\Bigr)dm_G(y)=\int_S|f(y)|\,\|g\|_1\,dm_G(y)=\|f\|_1\|g\|_1,$$ the inner identity being translation invariance of $m_G$ and the fact that $g(x-y)$ vanishes for $x\notin y+T$. Hence $\Phi$ is integrable, so by Fubini's theorem the section $x\mapsto\int_G|f(y)||g(x-y)|\,dm_G(y)$ is finite for $m_G$-a.e. $x\in S+T$ (and is $0$ for $x\notin S+T$, since then no $y$ has simultaneously $f(y)\ne0$ and $g(x-y)\ne0$), and its integral is at most $\|f\|_1\|g\|_1$. Therefore $(f*g)(x)=\int_Gf(y)g(x-y)\,dm_G(y)$ converges absolutely for $m_G$-a.e. $x$, the resulting function $f*g$ lies in $A$ with $\|f*g\|_1\le\|f\|_1\|g\|_1$, and the class of $f*g$ does not depend on the representatives: if $f_1=f_2$ and $g_1=g_2$ a.e., then, for each fixed $x$, the integrands differ only on the union of the null set where the $f_i$ differ and its reflected translate $x-N$, where $N$ is the null set where the $g_i$ differ. Translation and inversion invariance make this union null. Thus the absolute integrals and values agree whenever defined, including for arbitrary representatives before restriction to essential supports. [F2, F3]

3.1 (Bilinear and commutative.) For $f_1,f_2,g\in A$ supported in $\sigma$-compact sets and $a_1,a_2\in\mathbb C$ the identity $(a_1f_1+a_2f_2)*g=a_1(f_1*g)+a_2(f_2*g)$ holds pointwise for every $x$ at which all three integrals converge, hence a.e. by step 2.1; the same argument on the second variable gives bilinearity. For commutativity let $h\in C_c(G)$ and apply step 2.1 and Tonelli on $S\times T$ ([F3]) to write $$\int_G(f*g)(x)h(x)\,dm_G(x)=\int_{S}\int_{T}f(y)g(z)h(y+z)\,dm_G(z)\,dm_G(y),$$ substituting $x=y+z$ in the inner integral, which is a translation and preserves $m_G$; the right-hand side is symmetric in $f$ and $g$ together with the labels $y,z$, so $\int_G(f*g)h\,dm_G=\int_G(g*f)h\,dm_G$ for every $h\in C_c(G)$. By [F4] applied to the $L^1$ function $f*g-g*f$, this gives $f*g=g*f$ a.e. on $G$. [F2, F3, F4, step 2.1]

3.2 (Associative.) Let $f,g,u\in A$, all supported in $\sigma$-compact sets, and let $h\in C_c(G)$. Applying step 2.1 twice and Tonelli on the $\sigma$-finite product of the three essential supports (each a countable union of finite-measure sets) gives $$\int_G\bigl((f*g)*u\bigr)(x)h(x)\,dm_G(x)=\int\!\!\int\!\!\int f(y)g(z)u(w)h(y+z+w)\,dm_G(w)\,dm_G(z)\,dm_G(y),$$ where the substitutions $x=y+z+w$ are translations at each stage; the same expression is obtained for $\int_G(f*(g*u))h\,dm_G$. Since $h\in C_c(G)$ was arbitrary, [F4] gives $(f*g)*u=f*(g*u)$ a.e. [F3, F4, step 2.1]

3.3 (The involution.) First let $f\in A$ be supported in a $\sigma$-compact set $S$. The function $f^*$ is Borel, and [F2] gives $\|f^*\|_1=\int_G|f(-x)|\,dm_G(x)=\int_G|f(x)|\,dm_G(x)=\|f\|_1$, so $f^*\in A$ and $*$ is isometric on $A$; it is conjugate-linear and $f^{**}=f$ hold pointwise on representatives. To prove the reversal identity, let first $f,g\in C_c(G)$ and $x\in G$. Substituting $y=-x-w$ in the defining integral and using [F2] (the substitution is inversion followed by a translation), $$(f*g)^*(x)=\overline{\int_Gf(y)g(-x-y)\,dm_G(y)}=\int_G\overline{f(-x-w)}\,\overline{g(w)}\,dm_G(w),$$ while substituting $y=-w$ in the defining integral of $g^**f^*$ gives $$(g^**f^*)(x)=\int_G\overline{g(-y)}\,\overline{f(y-x)}\,dm_G(y)=\int_G\overline{g(w)}\,\overline{f(-w-x)}\,dm_G(w).$$ Since $-x-w=-w-x$ and complex conjugation is additive, the two integrands agree, so $(f*g)^*=(g^**f^*)$ for $f,g\in C_c(G)$. Now choose $f_n,g_n\in C_c(G)$ with $f_n\to f$ and $g_n\to g$ in $A$, possible by [F4], and note $f_n^*\to f^*$, $g_n^*\to g^*$ by the isometry just proved. By the norm bound of step 2.1, $f_n*g_n\to f*g$ and $g_n^**f_n^*\to g^**f^*$, and the isometry gives $(f_n*g_n)^*\to(f*g)^*$; since $(f_n*g_n)^*=g_n^**f_n^*$ for every $n$, uniqueness of limits in the normed space $A$ ([F5]) gives $(f*g)^*=g^**f^*$. [F2, F4, F5, step 2.1]


3.4 (An identity forces discreteness.) A positive singleton mass $c$ makes every point have mass $c$. A compact neighbourhood $K$ then contains at most $m_G(K)/c$ distinct points, since every finite subset has that many atoms. Thus $K$ is finite, and an open identity neighbourhood inside $K$ can be intersected with the complements of its finitely many nonidentity points to show $\{0\}$ is open. Hence nondiscreteness implies $m_G(\{0\})=0$. Suppose now that $G$ is nondiscrete and $u\in A$ is an identity. By outer regularity at $\{0\}$ and [F6], there is a symmetric open identity neighbourhood $V$ with $\int_V|u|\,dm_G<1$. By continuity of addition and local compactness choose a symmetric open $W$ with compact closure and $W+W\subseteq V$. Then $0<m_G(W)<\infty$, so $\mathbf1_W\in A$. For every $x\in W$ the convolution formula gives $|(u*\mathbf1_W)(x)|=|\int_{x-W}u(y)\,dm_G(y)|\le\int_V|u|\,dm_G<1$, since $x-W\subseteq W+W\subseteq V$. This contradicts $u*\mathbf1_W=\mathbf1_W$ almost everywhere on the positive-measure set $W$. Therefore an identity can exist only when $G$ is discrete. [F1, F6, step 2.1, algebra]

4.1 (Discrete groups have an identity.) If $G$ is discrete, its singleton $\{0\}$ is open and has mass $c=m_G(\{0\})>0$ by [F1]. Then $u=c^{-1}\mathbf 1_{\{0\}}$ is in $A$, and translation invariance gives $m_G(\{x\})=c$. Thus $(f*u)(x)=c^{-1}f(x)m_G(\{x\})=f(x)$ wherever defined, for every $f\in A$. Commutativity makes $u$ a two-sided identity. [F1, step 3.1, algebra]

5.1 (Conclusion.) By steps 2.1, 3.1, 3.2 and 3.3, convolution is a well-defined bilinear, associative, commutative product on $A$ with $\|f*g\|_1\le\|f\|_1\|g\|_1$, and $*$ is an isometric conjugate-linear involution satisfying $(f*g)^*=g^**f^*$ and $f^{**}=f$; no unit is required. Since $A$ is complete in $\|\cdot\|_1$ ([F5]), it is a commutative Banach $*$-algebra; it has a unit exactly when $G$ is discrete, as proved above. [F5, step 2.1, step 3.1, step 3.2, step 3.3, step 4.1, step 3.4] ∎
