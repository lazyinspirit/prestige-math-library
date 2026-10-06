---
id: thm-lca-fourier-inversion-for-integrable-transform
kind: theorem
title: Fourier inversion for integrable transforms on LCA groups
dependency_level: 11
deps:
- thm-compatible-dual-haar-normalisation
- lem-lca-positive-convolution-squares-form-an-inversion-core
- def-fourier-transform-on-an-lca-group
- def-left-haar-integral-and-left-haar-measure
- lem-character-evaluation-pairing-is-jointly-continuous
- def-pontryagin-dual-and-compact-open-topology
- def-radon-measure-on-an-lch-space
- thm-dual-of-an-lca-group-is-locally-compact-abelian
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-c-c-is-dense-in-l-p-for-radon-measures
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- def-l-p-space-as-a-quotient-by-null-functions
- def-dependent-choice
- def-axiom-of-choice
- lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution
- lem-lca-translations-and-normalised-local-approximate-identities
- def-integrable-real-and-complex-functions-and-their-integrals
- thm-riesz-fischer-completeness-of-l-p
- thm-riemann-lebesgue-lemma-on-lca-groups
- thm-minkowski-integral-inequality
provenance:
  statement: literature-derived
  proof: ai-altered
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

Assume the Axiom of Choice and Dependent Choice. Let $G$ be a locally compact Hausdorff abelian group with Haar measure $m_G$ and dual $\widehat G$ equipped with the compatible dual Haar normalisation proved earlier on this page. If $f\in L^1(G,m_G)$ and $\widehat f\in L^1(\widehat G,m_{\widehat G})$, then
$$\int_{\widehat G}\widehat f(\gamma)\,\gamma(x)\,dm_{\widehat G}(\gamma)$$
converges absolutely for every $x\in G$ and defines a bounded uniformly continuous function $f^\vee\in L^\infty(G,m_G)$, and $f^\vee=f$ $m_G$-almost everywhere. Consequently the class of $f$ has a unique continuous representative, namely $f^\vee$, and at every point $x$ at which a chosen representative of $f$ is continuous one has $f^\vee(x)=f(x)$. No pointwise statement is made at the remaining points of an arbitrary representative.

## Facts & Assumptions

**Given:** The Axiom of Choice and Dependent Choice, a locally compact Hausdorff abelian group $G$ with Haar measure $m_G$, the compatible dual Haar measure $m_{\widehat G}$ on $\widehat G$, and $f\in L^1(G,m_G)$ with $\widehat f\in L^1(\widehat G,m_{\widehat G})$.

[F1] The compatible dual Haar normalisation gives inversion, with integrable transform, for every element of its declared core; in particular for every $q=g*\widetilde g$ with real $g\in C_c(G;\mathbb R)$ one has $q(x)=\int_{\widehat G}\widehat q(\gamma)\gamma(x)\,dm_{\widehat G}(\gamma)$ for $m_G$-almost every $x$, and $\widehat q\in L^1(\widehat G,m_{\widehat G})$ ([[thm-compatible-dual-haar-normalisation]]). Such squares are continuous with compact support and lie in $L^1\cap L^2$; they also belong to the complex-generator core $E$ of [[lem-lca-positive-convolution-squares-form-an-inversion-core]].

[F2] The Fourier transform is linear with $|\widehat u(\gamma)|\le\|u\|_1$, takes $L^1(G)$ into $C_0(\widehat G)$, and satisfies $\widehat{u*v}=\widehat u\widehat v$ and $\widehat{u^*}=\overline{\widehat u}$ ([[def-fourier-transform-on-an-lca-group]], [[thm-riemann-lebesgue-lemma-on-lca-groups]], [[lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution]]); real $C_c(G)$ is dense in real $L^1(G,m_G)$, and approximation of real and imaginary parts separately makes $C_c(G;\mathbb C)$ dense in complex $L^1$ ([[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] The dual $\widehat G$ is locally compact Hausdorff ([[thm-dual-of-an-lca-group-is-locally-compact-abelian]]), so real $C_c(\widehat G)$ is dense in real $L^1(\widehat G,m_{\widehat G})$ by the $C_c$ density theorem ([[thm-c-c-is-dense-in-l-p-for-radon-measures]]). Thus every $v\in L^1(\widehat G)$ has arbitrarily small tails outside a compact set: approximate $|v|$ in real $L^1$ by a compactly supported continuous function. Character evaluation is jointly continuous ([[lem-character-evaluation-pairing-is-jointly-continuous]], [[def-pontryagin-dual-and-compact-open-topology]]); Haar measure is positive on nonempty open sets and finite on compact sets ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[F5] The elements of $L^1(G,m_G)$ are equivalence classes, so pointwise statements require a representative ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F6] The translation/approximate-identity supplier proves $\|r*f\|_1\le\|r\|_1\|f\|_1$ and $\|q*f-f\|_1\le\int q(y)\|T_yf-f\|_1\,dm_G(y)\le\sup_{y\in\operatorname{supp}q}\|T_yf-f\|_1$ for compactly supported $r$ and nonnegative mass-one $q$. Its proof restricts the kernel variable to compact $K$ and the output variable to $S+K$, where $f$ is represented as zero off a $\sigma$-compact essential support $S$; for the difference estimate use $S\cup(S+K)$. These restrictions are $\sigma$-finite, so Minkowski applies there and the functions extend by zero to $G$. Translation continuity then gives the approximate-identity limits without assuming globally $\sigma$-finite Haar measure. Use all admissible pairs $i=(U,u)$, putting $u_i=u$ and $U_i=U$; for symmetric real $u_i$, $q_i=u_i*\widetilde{u_i}$ is a positive-core generator, and Tonelli on compact kernel supports gives $\int q_i=(\int u_i)^2=1$ ([[lem-lca-translations-and-normalised-local-approximate-identities]], [[thm-minkowski-integral-inequality]], [[lem-lca-positive-convolution-squares-form-an-inversion-core]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F7] Under Countable Choice, norm convergence in $L^1$ admits an almost-everywhere convergent subsequence on any measure space ([[thm-riesz-fischer-completeness-of-l-p]]). This applies to complex functions by applying the real result successively to their real and imaginary parts. For a countable sequence, replacing the supplied representatives by any specified representatives changes the convergence only on a countable union of null sets. The assumed Axiom of Choice supplies the countable selections below.

[F8] Each integrable scalar function for a Haar measure on an LCH group has a $\sigma$-compact essential support: its positive level sets have finite measure, outer regularity puts them in finite-measure open sets, and inner regularity exhausts those open sets up to null sets by countably many compact sets. The assumed choice principles supply these countable selections. Haar measure is finite on compact sets, so two such supports give a $\sigma$-finite product. Fubini applies to an absolutely integrable product-measurable complex kernel on that product ([[def-radon-measure-on-an-lch-space]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 (Absolute convergence and the $L^\infty$ bound.) Since $|\widehat f(\gamma)\gamma(x)|=|\widehat f(\gamma)|$ and $\widehat f\in L^1(\widehat G,m_{\widehat G})$, the integral defining $$f^\vee(x):=\int_{\widehat G}\widehat f(\gamma)\gamma(x)\,dm_{\widehat G}(\gamma)$$ converges absolutely for every $x$ and $\|f^\vee\|_\infty\le\|\widehat f\|_{L^1(\widehat G,m_{\widehat G})}$; thus $f^\vee\in L^\infty(G,m_G)$. [F1, F2]

1.2 (Uniform continuity of $f^\vee$.) For a net $x_i\to x_0$ in $G$ and $\varepsilon>0$, compact approximation in [F4] gives a compact $K\subseteq\widehat G$ with $\int_{\widehat G\setminus K}|\widehat f|\,dm_{\widehat G}<\varepsilon/4$; by joint continuity [F4] and compactness of $K$ one has $\sup_{\gamma\in K}|\gamma(x_i)-\gamma(x_0)|<\varepsilon/(2\|\widehat f\|_1+2)$ eventually, whence $$|f^\vee(x_i)-f^\vee(x_0)|\le\int_K|\widehat f(\gamma)|\,|\gamma(x_i)-\gamma(x_0)|\,dm_{\widehat G}(\gamma)+2\int_{\widehat G\setminus K}|\widehat f|\,dm_{\widehat G}<\varepsilon .$$ For uniform continuity, use $|\gamma(x+z)-\gamma(x)|=|\gamma(z)-1|$: the same compact-tail bound at $z=0$ gives one identity neighbourhood working for every $x$. Hence $f^\vee$ is uniformly continuous. [F2, F4]

1.3 (Positive convolution-square approximate identities.) For each admissible pair $i=(U,u)$ use its symmetric normalized $u_i$ from [F6] and put $q_i:=u_i*\widetilde{u_i}=u_i*u_i$. Then $q_i\in E$, $q_i\ge0$, $\int_Gq_i=1$, and $\operatorname{supp}q_i\subseteq U_i-U_i$, so $q_i$ is an approximate identity in $L^1$ by [F6]. Also $\widehat q_i=|\widehat u_i|^2\in L^1(\widehat G,m_{\widehat G})$ by [F1], $0\le\widehat q_i\le1$, and $\widehat q_i\to1$ uniformly on every compact subset of $\widehat G$: for compact $K$, joint continuity of $(\gamma,x)\mapsto\gamma(x)$ makes $\gamma(x)\to1$ uniformly for $\gamma\in K$ as $x\to0$, while $q_i$ has mass one and support shrinking to $0$. [F1, F4, F6]

2.1 (Inversion for $f*q_i$.) Fix an admissible pair $i$. Step 1.3 gives $q_i\in C_c(G;\mathbb R)$ and $\widehat q_i\in L^1(\widehat G)$. The inverse integral of $\widehat q_i$ is continuous by the compact-tail argument of step 1.2 and agrees with $q_i$ a.e. by [F1]; since $q_i$ is continuous and Haar measure is positive on nonempty open sets, they agree everywhere. Choose representatives of $f$ and $\widehat q_i$ zero off $\sigma$-compact essential supports $S\subseteq G$ and $T\subseteq\widehat G$ by [F8]. For fixed $x$, the kernel $f(y)\widehat q_i(\gamma)\gamma(x-y)$ is product measurable on $S\times T$: on each compact rectangle, joint continuity of evaluation permits uniform approximation of $\gamma(x-y)$ by finite sums of products of Borel functions in the separate variables (take finite rectangular covers and disjointify their coordinate covers). Taking a countable exhaustion and multiplying by the scalar measurable factors proves the assertion. Its absolute integral is $\|f\|_1\|\widehat q_i\|_1<\infty$, so [F8] permits Fubini. Since the convolution integral is absolutely convergent for every $x$ by $\int|f(y)q_i(x-y)|\,dm_G(y)\le\|f\|_1\|q_i\|_\infty$, we obtain $$H_i(x):=(f*q_i)(x)=\int_G f(y)\int_{\widehat G}\widehat q_i(\gamma)\gamma(x-y)\,dm_{\widehat G}(\gamma)\,dm_G(y)=\int_{\widehat G}\widehat f(\gamma)\widehat q_i(\gamma)\gamma(x)\,dm_{\widehat G}(\gamma).$$ Changes on the null sets used for the support restrictions affect neither integral. Thus $H_i$ represents $f*q_i$ and is continuous by step 1.2's compact-tail argument, since $\widehat f\widehat q_i$ is integrable by [F2]. [F1, F2, F4, F8, step 1.2, step 1.3]

3.1 (Uniform inverse convergence and almost-everywhere equality.) By step 2.1, $H_i$ represents $f*q_i$ and is the inverse integral of $\widehat f\widehat q_i$. Step 1.3 gives $0\le\widehat q_i\le1$ and uniform convergence to $1$ on compact dual sets. Since $\widehat f\in L^1(\widehat G)$, the compact-tail estimate of [F4] therefore gives $\|\widehat f(\widehat q_i-1)\|_1\to0$. Consequently $$\|H_i-f^\vee\|_\infty\le\|\widehat f(\widehat q_i-1)\|_1\to0,$$ while $\|f*q_i-f\|_1\to0$ by [F6]. For each $n\ge1$ choose an admissible pair $i_n=(U_n,u_n)$ for which both errors are below $1/n$; the assumptions supply Countable Choice, and no countable neighbourhood base is required. By [F7] a subsequence of the specified representatives $H_{i_n}$ converges almost everywhere to a representative of $f$. Uniform convergence makes that subsequence converge everywhere to $f^\vee$. Thus $f=f^\vee$ almost everywhere on $G$. [F4, F6, F7, step 1.3, step 2.1]

4.1 (The continuous representative.) By steps 1.1 and 1.2, $f^\vee$ is a bounded uniformly continuous function; by step 3.1 it represents the class of $f$. If $g$ is another continuous representative, then $g-f^\vee$ is continuous and vanishes a.e.; if it were nonzero at some $x_0$, it would stay nonzero on a nonempty open neighborhood, which has positive Haar measure [F4], a contradiction. Thus $f^\vee$ is the unique continuous representative. If a chosen representative $g$ is continuous at $x$ and $g(x)\ne f^\vee(x)$, continuity at $x$ makes $|g-f^\vee|$ bounded below on an open neighbourhood of $x$, again contradicting almost-everywhere equality and Haar positivity. Hence $g(x)=f^\vee(x)$ at every such point. [F4, F5, step 1.1, step 1.2, step 3.1]

5.1 Steps 1.1 and 1.2 show absolute convergence and bounded uniform continuity of $f^\vee$, step 3.1 shows $f^\vee=f$ $m_G$-a.e., and step 4.1 gives uniqueness of the continuous representative and the statement at continuity points; no value at a point of discontinuity of an arbitrary representative is claimed. [step 1.1, step 1.2, step 3.1, step 4.1] ∎
