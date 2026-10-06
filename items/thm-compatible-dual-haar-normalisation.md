---
id: thm-compatible-dual-haar-normalisation
kind: theorem
title: Compatible dual Haar normalisation
dependency_level: 10
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-left-haar-integral-and-left-haar-measure
- lem-lca-haar-measure-is-inversion-invariant
- def-radon-measure-on-an-lch-space
- def-fourier-transform-on-an-lca-group
- def-positive-definite-function-on-an-abelian-group
- def-l-p-space-as-a-quotient-by-null-functions
- lem-fourier-stieltjes-transforms-determine-finite-radon-measures
- lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution
- lem-lca-positive-convolution-squares-form-an-inversion-core
- lem-lca-scalar-unitization-character-space-and-spectrum
- lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations
- thm-bochner-theorem-for-lca-groups
- thm-riemann-lebesgue-lemma-on-lca-groups
- thm-dual-of-an-lca-group-is-locally-compact-abelian
- thm-rmk-positive-functional-is-integration-against-its-representing-measure
- thm-rmk-uniqueness-among-radon-measures
- thm-uniqueness-of-left-haar-measure-up-to-scale
- thm-complex-stone-weierstrass-self-adjoint
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- lem-character-evaluation-pairing-is-jointly-continuous
- def-pontryagin-dual-and-compact-open-topology
- def-compact-support-c-c-and-c-zero-on-an-lch-space
- def-gelfand-transform
- thm-maximal-ideal-space-is-compact-hausdorff
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "T. W. Koerner, Topological Groups (author PDF, Internet Archive snapshot of the dpmms.cam.ac.uk Topg.pdf file)"
    url: "https://web.archive.org/web/2024id_/https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf"
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $G$ be a locally compact Hausdorff abelian group with a fixed Haar measure $m_G$. Then there exists a Haar measure $m_{\widehat G}$ on $\widehat G$ such that for every $h$ in the complex span $E$ of $\{g*\widetilde g:g\in C_c(G;\mathbb C)\}$ (the positive core of [[lem-lca-positive-convolution-squares-form-an-inversion-core]]),
$$h(x)=\int_{\widehat G}\widehat h(\gamma)\,\gamma(x)\,dm_{\widehat G}(\gamma)$$
holds for $m_G$-almost every $x\in G$, with $\widehat h\in L^1(\widehat G,m_{\widehat G})$; and this property determines $m_{\widehat G}$ uniquely for the fixed $m_G$, so once $m_G$ is fixed the scale of the dual Haar measure is fixed by the requirement that Fourier inversion hold. The normalisation is reciprocal in the scaling sense: replacing $m_G$ by $c\,m_G$ ($c>0$) forces $m_{\widehat G}$ to be replaced by $c^{-1}m_{\widehat G}$ if inversion is to continue to hold.

## Facts & Assumptions

**Given:** The Axiom of Choice and Dependent Choice, a locally compact Hausdorff abelian group $G$ with fixed Haar measure $m_G$, its dual $\widehat G$, and the positive core $E=\operatorname{span}_{\mathbb C}\{g*\widetilde g:g\in C_c(G;\mathbb C)\}$, where $\widetilde g(x)=\overline{g(-x)}$.

[F1] Here $C_c(G;\mathbb C)$ consists of complex continuous compactly supported functions; equivalently its real and imaginary parts belong to the real $C_c$ space of [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]. For $g\in C_c(G;\mathbb C)$ the function $p:=g*\widetilde g$ is continuous, compactly supported and positive definite, $p(0)=\int_G|g(x)|^2\,dm_G(x)$, and $\widehat p=|\widehat g|^2\ge0$; the involution satisfies $\widehat{f^*}=\overline{\widehat f}$ and convolution transforms multiply ([[lem-lca-positive-convolution-squares-form-an-inversion-core]], [[lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution]], [[def-fourier-transform-on-an-lca-group]], [[def-positive-definite-function-on-an-abelian-group]]).

[F2] Every continuous positive definite $p:G\to\mathbb C$ has a unique finite positive Radon measure $\mu_p$ on $\widehat G$ with $p(x)=\int_{\widehat G}\gamma(x)\,d\mu_p(\gamma)$ for all $x\in G$ and $\mu_p(\widehat G)=p(0)$ ([[thm-bochner-theorem-for-lca-groups]], [[def-radon-measure-on-an-lch-space]]).

[F3] For every $\gamma_0\in\widehat G$ there is $g\in C_c(G;\mathbb C)$ with $\widehat g(\gamma_0)\ne0$: otherwise, for every nonnegative $g\in C_c(G;\mathbb C)$ with $\int_Gg=1$ supported in a small neighbourhood $V$ of any prescribed point $y$, the identity $\int_Gg\overline{\gamma_0}=0$ would give $|\gamma_0(y)|\le\sup_{x\in V}|\gamma_0(y)-\gamma_0(x)|$, which tends to $0$. Nonnegative compactly supported bumps of integral $1$ in arbitrary neighbourhoods exist by Urysohn's lemma, and Haar measure is positive on nonempty open sets ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

[F4] The transform algebra $\{\widehat f:f\in L^1(G,m_G)\}$ is a self-adjoint subalgebra of $C_0(\widehat G)$; the characters of $A^+=\mathbb C\oplus A$ are exactly $q(z,f)=z$ and $h_\gamma^+(z,f)=z+\widehat f(\gamma)$ on the compact Hausdorff space $\Delta(A^+)$, with $\Delta(A^+)\cong\widehat G\cup\{q\}$; and the vanishing-at-one-point case of complex Stone-Weierstrass applies to a point-separating self-adjoint algebra with a unique common zero ([[thm-riemann-lebesgue-lemma-on-lca-groups]], [[lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution]], [[lem-lca-scalar-unitization-character-space-and-spectrum]], [[def-gelfand-transform]], [[thm-maximal-ideal-space-is-compact-hausdorff]], [[thm-complex-stone-weierstrass-self-adjoint]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

[F5] Tonelli and Fubini apply to the products of a $\sigma$-finite essential support of an $L^1$ function on $G$ with the compact support of a core function on $G$, and to the product of a compactly supported continuous function on $\widehat G$ with a finite measure ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[def-l-p-space-as-a-quotient-by-null-functions]]). The substitution $z\mapsto-y-z$ preserves Haar measure, as a translation composed with inversion ([[lem-lca-haar-measure-is-inversion-invariant]], [[def-left-haar-integral-and-left-haar-measure]]).

[F6] A positive linear functional on $C_c(X)$ for an LCH space $X$ is integration against a Radon measure ([[thm-rmk-positive-functional-is-integration-against-its-representing-measure]], [[def-radon-measure-on-an-lch-space]]); Radon measures are outer regular on Borel sets, inner regular on open sets, and finite on compact sets.

[F7] Finite regular complex Borel measures on $\widehat G$ with the same inverse transform $x\mapsto\int_{\widehat G}\gamma(x)\,d\sigma(\gamma)$ are equal ([[lem-fourier-stieltjes-transforms-determine-finite-radon-measures]]).

[F8] $\widehat G$ is a locally compact Hausdorff abelian group ([[thm-dual-of-an-lca-group-is-locally-compact-abelian]], [[def-pontryagin-dual-and-compact-open-topology]]); any two left Haar measures on an LCH group are positive scalar multiples of one another ([[thm-uniqueness-of-left-haar-measure-up-to-scale]], [[def-left-haar-integral-and-left-haar-measure]]); characters are jointly continuous in $(\gamma,x)$ ([[lem-character-evaluation-pairing-is-jointly-continuous]]); and the Axiom of Choice and Dependent Choice are assumed ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F9] If $\eta\in L^1(\widehat G,m')$, then $\eta m'$ is a finite Radon measure. Its inverse transform $x\mapsto\int_{\widehat G}\eta(\gamma)\gamma(x)\,dm'(\gamma)$ is continuous: for a net $x_i\to x_0$, choose a compact $K\subseteq\widehat G$ with $\int_{\widehat G\setminus K}|\eta|\,dm'<\varepsilon/4$ by inner regularity; joint continuity and compactness make $\sup_{\gamma\in K}|\gamma(x_i)-\gamma(x_0)|$ eventually less than $\varepsilon/(2\|\eta\|_1+2)$, while the integral over the complement is at most $2\int_{\widehat G\setminus K}|\eta|\,dm'$. Thus the inverse transform is continuous for the full LCA topology. If it agrees almost everywhere with a continuous function, Haar positivity on nonempty open sets forces equality everywhere ([[def-radon-measure-on-an-lch-space]], [[lem-character-evaluation-pairing-is-jointly-continuous]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

## Proof

**Proof technique:** direct.

1.1 (Generator measures.) Let $p=g*\widetilde g$ for some $g\in C_c(G;\mathbb C)$. By [F1], $p\in C_c(G;\mathbb C)$ is continuous and positive definite with $p(0)=\int_G|g|^2\,dm_G\ge0$ and $\widehat p=|\widehat g|^2\ge0$; by [F2] there is a unique finite positive Radon measure $\mu_p$ on $\widehat G$ with $p(x)=\int_{\widehat G}\gamma(x)\,d\mu_p(\gamma)$ for all $x$ and $\mu_p(\widehat G)=p(0)$. For a finite sum $r=p_1+\dots+p_N$ of such generators, the measure $\mu_r:=\mu_{p_1}+\dots+\mu_{p_N}$ represents the continuous positive definite function $r$; uniqueness in [F2] gives $r(x)=\int_{\widehat G}\gamma(x)\,d\mu_r(\gamma)$ and $\mu_r(\widehat G)=r(0)$, and $\mu_{r+s}=\mu_r+\mu_s$ for finite sums of generators. [F1, F2]

1.2 (The sets $\{\widehat p>0\}$ cover $\widehat G$.) Put $U_p:=\{\gamma\in\widehat G:\widehat p(\gamma)>0\}$ for a generator $p$. By [F3], for every $\gamma_0$ there is $g$ with $\widehat g(\gamma_0)\ne0$; for $p=g*\widetilde g$ we have $\widehat p(\gamma_0)=|\widehat g(\gamma_0)|^2>0$, and $\widehat p$ is continuous, so $\gamma_0\in U_p$. Hence the family $\{U_p\}$ over all generators covers $\widehat G$. [F1, F3]

1.3 (Density of the transform algebra.) The functions $\chi\mapsto\chi(0,f)$, $f\in L^1(G,m_G)$, form a self-adjoint complex subalgebra of $C(\Delta(A^+))$ by [F4]. Distinct characters of $A^+$ are separated by some element of $A^+$ because the Gelfand topology is Hausdorff, and since all characters agree on the constants the separating element may be taken as $(0,f)$; thus the algebra separates points, and its only common zero is $q$. By the vanishing-at-one-point case of Stone-Weierstrass in [F4], its uniform closure is $\{G\in C(\Delta(A^+)):G(q)=0\}$, which is $C_0(\widehat G)$ under $\Delta(A^+)\cong\widehat G\cup\{q\}$. Hence $\{\widehat f:f\in L^1(G,m_G)\}$ is uniformly dense in $C_0(\widehat G)$. [F4]

2.1 (The consistency identity.) Let $p=g*\widetilde g$ and $q=k*\widetilde k$ be generators. For $x\in L^1(G,m_G)$, absolute integrability over $\operatorname{supp}x\times\operatorname{supp}p\times\widehat G$ and [F5] permit Fubini in $$\int_{\widehat G}\widehat x\widehat p\,d\mu_q=\int_{\widehat G}\int_G\int_Gx(y)p(z)\overline{\gamma(y)}\,\overline{\gamma(z)}\,dm_G(y)\,dm_G(z)\,d\mu_q(\gamma)=\int_G\int_Gx(y)p(z)q(-y-z)\,dm_G(y)\,dm_G(z),$$ because $\int_{\widehat G}\overline{\gamma(y+z)}\,d\mu_q(\gamma)=q(-y-z)$ by [F2]. The same computation with $p$ and $q$ interchanged gives $\int_{\widehat G}\widehat x\widehat q\,d\mu_p=\int_G\int_Gx(y)q(z)p(-y-z)\,dm_G(y)\,dm_G(z)$, and the substitution $z\mapsto-y-z$ in the first double integral shows it equals the second. Therefore $\int_{\widehat G}\widehat x\,d(\widehat p\,\mu_q)=\int_{\widehat G}\widehat x\,d(\widehat q\,\mu_p)$ for every $x\in L^1(G,m_G)$. Both $\widehat p\,\mu_q$ and $\widehat q\,\mu_p$ are finite measures (dominated by $\|\widehat p\|_\infty|\mu_q|$ and $\|\widehat q\|_\infty|\mu_p|$), and step 1.3 makes the functions $\widehat x$ uniformly dense in $C_0(\widehat G)$, so $$\widehat p\,\mu_q=\widehat q\,\mu_p .$$ By step 1.1 the same identity holds for finite sums $r,s$ of generators: $\widehat r\,\mu_s=\widehat s\,\mu_r$. [F2, F5, step 1.1, step 1.3]

3.1 (Gluing the local measures.) For $f\in C_c(\widehat G;\mathbb C)$, step 1.2 and compactness of $\operatorname{supp}f$ give finitely many generators $p_1,\dots,p_N$ with $\operatorname{supp}f\subseteq\bigcup_jU_{p_j}$; put $p:=p_1+\dots+p_N$, so $\widehat p>0$ on $\operatorname{supp}f$. Define $$m(f):=\int_{\widehat G}\frac{f}{\widehat p}\,d\mu_p,$$ where $f/\widehat p$ is set to $0$ off $\operatorname{supp}f$; the integral converges because $f$ is bounded and $\widehat p$ is bounded below on $\operatorname{supp}f$. If $r$ is another finite sum of generators with $\widehat r>0$ on $\operatorname{supp}f$, then by step 2.1, $\widehat r\,\mu_p=\widehat p\,\mu_r$, so $$\int_{\widehat G}\frac{f}{\widehat p}\,d\mu_p=\int_{\widehat G}\frac{f}{\widehat p\,\widehat r}\,\widehat r\,d\mu_p=\int_{\widehat G}\frac{f}{\widehat p\,\widehat r}\,\widehat p\,d\mu_r=\int_{\widehat G}\frac{f}{\widehat r}\,d\mu_r ;$$ hence $m(f)$ is well defined. The map $m:C_c(\widehat G;\mathbb C)\to\mathbb C$ is linear and positive: for $f\ge0$ one has $f/\widehat p\ge0$ on $\operatorname{supp}f$. [step 1.2, step 2.1]

4.1 (The measure $m$.) By step 3.1 the functional $m$ is a positive linear functional on $C_c(\widehat G;\mathbb R)$; by [F6] there is a Radon measure, again written $m$, on $\widehat G$ with $m(f)=\int_{\widehat G}f\,dm$ for every $f\in C_c(\widehat G;\mathbb C)$, and we identify $m$ with this measure. [F6, step 3.1]

5.1 ($\mu_p=\widehat p\,m$ for every generator.) Fix a generator $p$. On the open set $U_p=\{\widehat p>0\}$, step 3.1 applied to $f\in C_c(U_p)$ with the single generator $p$ gives $m(f)=\int_{\widehat G}f/\widehat p\,d\mu_p$, that is, $\mu_p|U_p=\widehat p\,m|U_p$. On the closed set $Z:=\{\widehat p=0\}$, let $K\subseteq Z$ be compact; by step 1.2 choose finitely many generators $q_1,\dots,q_N$ with $\sum_j\widehat q_j>0$ on $K$, put $s:=\sum_jq_j$. By step 2.1, $\widehat s\,\mu_p=\widehat p\,\mu_s$, so $\int_K\widehat s\,d\mu_p=\int_K\widehat p\,d\mu_s=0,$ and $\widehat s>0$ on $K$ gives $\mu_p(K)=0$. To pass from compact subsets to the whole closed set, fix $\varepsilon>0$ and use outer regularity [F6] to choose an open $U\supseteq Z$ with $\mu_p(U)<\mu_p(Z)+\varepsilon$. By inner regularity on the open set $U$ [F6], choose compact $L\subseteq U$ with $\mu_p(L)>\mu_p(U)-\varepsilon$. Then $L\cap Z$ is compact and $0=\mu_p(L\cap Z)\ge\mu_p(L)-\mu_p(U\setminus Z)>\mu_p(Z)-2\varepsilon,$ because $\mu_p(U\setminus Z)=\mu_p(U)-\mu_p(Z)<\varepsilon$. Letting $\varepsilon\downarrow0$ gives $\mu_p(Z)=0$. Hence $\mu_p=\widehat p\,m$ as measures on $\widehat G$. [F1, F6, step 2.1, step 3.1, step 4.1]

6.1 (Inversion for the core.) Let $h\in E$, say $h=\sum_jc_jp_j$ with generators $p_j$ and $c_j\in\mathbb C$. By step 5.1, $p_j(x)=\int_{\widehat G}\gamma(x)\widehat p_j(\gamma)\,dm(\gamma)$ for all $x$, and by step 1.1, $\widehat h=\sum_jc_j\widehat p_j$ and $\int_{\widehat G}|\widehat h|\,dm\le\sum_j|c_j|\int_{\widehat G}\widehat p_j\,dm=\sum_j|c_j|p_j(0)<+\infty$. Therefore $$h(x)=\sum_jc_jp_j(x)=\int_{\widehat G}\gamma(x)\sum_jc_j\widehat p_j(\gamma)\,dm(\gamma)=\int_{\widehat G}\widehat h(\gamma)\gamma(x)\,dm(\gamma)$$ for every $x\in G$, and in particular for $m_G$-almost every $x$. [F1, step 1.1, step 5.1]

7.1 ($m$ is a Haar measure.) First $m\ne0$: a nonzero generator $p$ has $p(0)>0$, and step 5.1 gives $\int_{\widehat G}\widehat p\,dm=\mu_p(\widehat G)=p(0)>0$. Next, $m$ is translation invariant. Fix $\gamma_0\in\widehat G$ and a generator $p=g*\widetilde g$. The modulation $\gamma_0g$ lies in $C_c(G;\mathbb C)$ and $(\gamma_0g)*\widetilde{(\gamma_0g)}(x)=\int_G\gamma_0(y)g(y)\overline{\gamma_0(y-x)g(y-x)}\,dm_G(y)=\gamma_0(x)\int_Gg(y)\overline{g(y-x)}\,dm_G(y)=\gamma_0(x)p(x),$ so $\gamma_0p=(\gamma_0g)*\widetilde{(\gamma_0g)}$ is again a generator, and its transform is $\widehat{\gamma_0p}(\gamma)=\widehat p(\gamma_0^{-1}\gamma)$ by the modulation identity of [F1]. Applying step 6.1 to $p$ and to $\gamma_0p$ gives, for every $x\in G$, $p(x)=\int_{\widehat G}\gamma(x)\widehat p(\gamma)\,dm(\gamma),\qquad \gamma_0(x)p(x)=\int_{\widehat G}\gamma(x)\widehat p(\gamma_0^{-1}\gamma)\,dm(\gamma).$ In the second integral substitute $\eta=\gamma_0^{-1}\gamma$: it becomes $\int_{\widehat G}\gamma_0(x)\eta(x)\widehat p(\eta)\,d((T_{\gamma_0^{-1}})_*m)(\eta)$, where $T_\delta(\eta)=\delta\eta$ and $(T_{\gamma_0^{-1}})_*m$ is the pushforward of $m$ under $T_{\gamma_0^{-1}}$. Comparing with $\gamma_0(x)$ times the first integral yields $\int_{\widehat G}\eta(x)\widehat p(\eta)\,d((T_{\gamma_0^{-1}})_*m)(\eta)=\int_{\widehat G}\eta(x)\widehat p(\eta)\,dm(\eta)$ for every $x\in G$. Thus the finite measures $\widehat p\,(T_{\gamma_0^{-1}})_*m$ and $\widehat p\,m$ have the same inverse transform, so they are equal by [F7]. Since $\gamma_0^{-1}$ ranges over all of $\widehat G$, this gives $\widehat p\,(T_\delta)_*m=\widehat p\,m$ for every $\delta\in\widehat G$. For a compact $K\subseteq\widehat G$, step 1.2 provides finitely many generators $p_1,\dots,p_N$ with $\widehat P:=\sum_j\widehat p_j>0$ on $K$; summing the identities $\widehat p_j(T_\delta)_*m=\widehat p_jm$ gives $\widehat P(T_\delta)_*m=\widehat Pm$, and dividing by the strictly positive continuous function $\widehat P$ on $K$ gives $(T_\delta)_*m|K=m|K$. Since $K$ and $\delta$ are arbitrary, $m$ is translation invariant. Finally, $m$ is positive on every nonempty open set: if $m(V)=0$ for a nonempty open $V$, then by invariance $m(\gamma+V)=0$ for every $\gamma$, and any compact $K$ is covered by finitely many translates of $V$, so $m(K)=0$; inner regularity of the Radon measure $m$ then gives $m=0$, contradicting $m\ne0$. Hence $m$ is a Haar measure on $\widehat G$. [F7, F8, step 1.2, step 5.1, step 6.1]

8.1 (Uniqueness of the scale and reciprocal scaling.) Let $m'$ be any Haar measure on $\widehat G$ for which inversion holds for every $h\in E$. By [F8], $m'=\lambda m$ for some $\lambda>0$. For a nonzero generator $p$, the inversion property gives $p(x)=\int_{\widehat G}\widehat p(\gamma)\gamma(x)\,dm'(\gamma)$ almost everywhere, with $\widehat p\in L^1(\widehat G,m')$. By [F9], this inverse transform is continuous; since $p$ is continuous and Haar measure is positive on every nonempty open set, the almost-everywhere identity is everywhere. Evaluating at $x=0$, and using step 6.1 for $m$, gives $p(0)=\int_{\widehat G}\widehat p\,dm'=\lambda\int_{\widehat G}\widehat p\,dm=\lambda p(0)$. Since $p(0)>0$, $\lambda=1$ and $m'=m$. Thus the inversion property determines $m$ uniquely. If $m_G$ is replaced by $cm_G$ with $c>0$, then for every $h\in E$ the transform of the same function $h$ becomes $c\widehat h$; inversion under a Haar measure $m''$ reads $h(x)=\int_{\widehat G}c\widehat h(\gamma)\gamma(x)\,dm''(\gamma)$, which holds exactly when $c\,m''$ satisfies the original inversion identity; by uniqueness this means $c\,m''=m$, that is, $m''=c^{-1}m$. [F8, F9, step 6.1, step 7.1]

9.1 Steps 4.1 and 7.1 construct a Haar measure $m_{\widehat G}:=m$ on $\widehat G$; step 6.1 gives $\widehat h\in L^1(\widehat G,m)$ and the inversion identity for every $h\in E$ and every $x$; step 8.1 proves uniqueness of the scale and the reciprocal scaling law. [step 4.1, step 6.1, step 7.1, step 8.1] ∎
