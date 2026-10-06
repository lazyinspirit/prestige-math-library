---
id: lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core
kind: lemma
title: Positive definite functions give positive bounded functionals on the transform core
dependency_level: 7
deps:
- def-positive-definite-function-on-an-abelian-group
- lem-lca-translations-and-normalised-local-approximate-identities
- lem-lca-scalar-unitization-character-space-and-spectrum
- lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution
- lem-lca-lone-convolution-is-a-commutative-banach-star-algebra
- lem-lca-haar-measure-is-inversion-invariant
- def-compact-support-c-c-and-c-zero-on-an-lch-space
- def-left-haar-integral-and-left-haar-measure
- def-l-p-space-as-a-quotient-by-null-functions
- def-integrable-real-and-complex-functions-and-their-integrals
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-spectral-radius-formula
- def-spectral-radius
- thm-c-c-is-dense-in-l-p-for-radon-measures
- cor-weierstrass-approximation-on-a-closed-interval
- thm-riemann-lebesgue-lemma-on-lca-groups
- def-dependent-choice
- def-axiom-of-choice
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
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $G$ be a locally compact
Hausdorff abelian group with Haar measure $m_G$ and dual $\widehat G$, and let
$\phi:G\to\mathbb C$ be continuous and positive definite, with $k:=\phi(0)\ge0$.
Define
$$L_\phi(f):=\int_G f(x)\,\phi(-x)\,dm_G(x),\qquad f\in L^1(G,m_G).$$
Then $L_\phi$ is a well-defined linear functional with $|L_\phi(f)|\le k\|f\|_1$,
the integrated positivity
$$L_\phi(f*f^*)\ \ge\ 0\qquad(f\in L^1(G,m_G))$$
holds, and the Cauchy-Schwarz-type bound
$$|L_\phi(f)|^2\le k\,L_\phi(f*f^*)\le k^2\,\|\widehat f\|_\infty^2$$
holds. Consequently $L_\phi$ vanishes on $\{f:\widehat f=0\}$ and descends to a
positive linear functional $F_\phi$ on the transform core
$\{\widehat f:f\in L^1(G,m_G)\}\subseteq C_0(\widehat G)$ with
$$|F_\phi(h)|\le k\,\|h\|_\infty .$$
No condition on the growth or integrability of $\phi$ beyond continuity and
positive definiteness is needed.

## Facts & Assumptions

**Given:** The Axiom of Choice and Dependent Choice, a locally compact Hausdorff abelian group $G$ with Haar measure $m_G$, a continuous positive definite $\phi$ with $k=\phi(0)$, the functional $L_\phi$, and $A=L^1(G,m_G)$.

[F1] Positive definiteness gives $\phi(-x)=\overline{\phi(x)}$ and $|\phi(x)|\le\phi(0)=k$, and $\phi$ is uniformly continuous on compact sets ([[def-positive-definite-function-on-an-abelian-group]]).

[F2] Convolution and involution make $A$ a commutative Banach $*$-algebra with $\|g*h\|_1\le\|g\|_1\|h\|_1$, $(g*h)^*=h^**g^*$ and $g^{**}=g$ ([[lem-lca-lone-convolution-is-a-commutative-banach-star-algebra]]); the transform satisfies $\widehat{g*h}=\widehat g\widehat h$ and $\widehat{g^*}=\overline{\widehat g}$ ([[lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution]]).

[F3] The approximate identity $\{u_U\}\subseteq C_c(G)$ is symmetric with $u_U\ge0$, $\int_Gu_U\,dm_G=1$, $\|u_U\|_1=1$, and $f*u_U\to f$ in $A$ for every $f\in A$ ([[lem-lca-translations-and-normalised-local-approximate-identities]], [[def-dependent-choice]]).

[F4] In $A^+=\mathbb C\oplus A$ the spectrum of $(0,a)$ is $\{0\}\cup\widehat a(\widehat G)$ and $r_{A^+}(0,a)=\lim_m\|a^m\|_1^{1/m}$ ([[lem-lca-scalar-unitization-character-space-and-spectrum]], [[thm-spectral-radius-formula]], [[def-spectral-radius]]).

[F5] $C_c(G)$ is dense in $A$ every transform lies in $C_0(\widehat G)$ by Riemann–Lebesgue, and the transform core is a self-adjoint algebra: products and complex conjugates of transforms of $A$ are transforms of $A$ ([[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[thm-riemann-lebesgue-lemma-on-lca-groups]], [[lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution]]); polynomials without constant term approximate the square-root function uniformly on a compact interval ([[cor-weierstrass-approximation-on-a-closed-interval]]).

[F6] Tonelli and Fubini apply to the $\sigma$-finite products of $\sigma$-compact essential supports, and Haar measure is positive on nonempty open sets and finite on compact sets ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[def-left-haar-integral-and-left-haar-measure]]).

## Proof

**Proof technique:** direct.

1.1 (Boundedness.) By [F1], $|\phi(-x)|=|\phi(x)|\le k$ for every $x$, so the integral defining $L_\phi(f)$ converges absolutely for every $f\in A$ and $|L_\phi(f)|\le k\|f\|_1$; linearity in $f$ is immediate. [F1]

2.1 (Integrated positivity.) For $f\in A$, $(f*f^*)(u)=\int_Gf(y)\overline{f(y-u)}\,dm_G(y)$, so by inversion invariance of $m_G$ the substitution $z=y-u$ in the inner integral (a reflection followed by a translation) gives $$L_\phi(f*f^*)=\int_G\int_Gf(y)\overline{f(z)}\phi(z-y)\,dm_G(z)\,dm_G(y),$$ and the integrand is carried by the $\sigma$-finite product of a $\sigma$-compact essential support of $f$ with itself ([F6]). For $f\in C_c(G)$ put $K=\operatorname{supp}f$. The continuous kernel $f(y)\overline{f(z)}\phi(z-y)$ on $K\times K$ admits finite Borel partitions of $K$ on whose product cells its oscillation is arbitrarily small: use compactness and continuity in the group uniformity to take a finite sufficiently small cover, then disjointify it. Choose a point $y_j$ in each nonempty cell $P_j$. The resulting sums $\sum_{j,k}c_j\overline{c_k}\phi(y_k-y_j)$, where $c_j=f(y_j)m_G(P_j)$, converge to the double integral since their error is bounded by the kernel oscillation times $m_G(K)^2$. Each sum is nonnegative by positive definiteness applied to the points $-y_j$ and coefficients $c_j$. Hence $L_\phi(f*f^*)\ge0$ for $f\in C_c(G)$; for general $f\in A$ choose $f_n\in C_c(G)$ with $f_n\to f$ in $A$ ([F5]), then $f_n*f_n^*\to f*f^*$ in $A$ by [F2] and $L_\phi(f_n*f_n^*)\to L_\phi(f*f^*)$ by step 1.1, so the inequality passes to the limit. [F1, F2, F5, F6]

3.1 (The Cauchy-Schwarz bound.) The form $[g,h]:=L_\phi(g*h^*)$ is sesquilinear by [F2] and positive semidefinite by step 2.1; for such a form $|[g,h]|^2\le[g,g][h,h]$ (the quadratic $[g+th,g+th]\ge0$ in $t\in\mathbb C$ has nonnegative discriminant). With $h=u_U^*=u_U$ from [F3] this gives $|L_\phi(f*u_U)|^2=|[f,u_U]|^2\le L_\phi(f*f^*)\,L_\phi(u_U*u_U^*)$. As $U$ shrinks, $f*u_U\to f$ in $A$ ([F3]) so $L_\phi(f*u_U)\to L_\phi(f)$ by step 1.1; and $L_\phi(u_U*u_U^*)\to k$: the functions $u_U*u_U^*$ are nonnegative with integral $1$ and support shrinking to $\{0\}$, so $|L_\phi(u_U*u_U^*)-k|=|\int_G(u_U*u_U^*)(x)(\phi(-x)-k)\,dm_G(x)|\le\sup_{x\in\operatorname{supp}(u_U*u_U^*)}|\phi(-x)-k|\to0$ by continuity of $\phi$ at $0$ and [F1]. Hence $|L_\phi(f)|^2\le k\,L_\phi(f*f^*)$. [F1, F2, F3, step 1.1, step 2.1]

4.1 (The sup-norm bound.) If $k=0$, [F1] makes $L_\phi=0$ and all bounds hold. Assume $k>0$ and put $a:=f*f^*$, so $a^*=a$ and $\widehat a=|\widehat f|^2$ by [F2]. Applying step 3.1 to $a,a^2,a^4,\dots$ gives by induction $|L_\phi(f)|\le k^{1-2^{-n}}L_\phi(a^{2^{n-1}})^{2^{-n}}$ for $n\ge1$, and the elementary bound of step 1.1 applied to the last factor yields $|L_\phi(f)|\le k\,\|a^{2^{n-1}}\|_1^{2^{-n}}$. Since $\|a^{2^{n-1}}\|_1^{2^{-n}}=(\|a^{2^{n-1}}\|_1^{1/2^{n-1}})^{1/2}\to r_{A^+}(0,a)^{1/2}$ by the spectral radius formula [F4], while $r_{A^+}(0,a)=\max_{\lambda\in\sigma_{A^+}(0,a)}|\lambda|=\sup_{\gamma}|\widehat a(\gamma)|=\|\widehat f\|_\infty^2$ by [F4], we obtain $|L_\phi(f)|\le k\|\widehat f\|_\infty$. Applying this bound to $a=f*f^*$ gives $0\le L_\phi(a)\le k\|\widehat a\|_\infty=k\|\widehat f\|_\infty^2$, proving the second inequality in the stated chain. The bound holds for every representative, so $L_\phi$ vanishes on $\{f:\widehat f=0\}$. [F2, F4, step 3.1]

5.1 (Descent and positivity.) Since $L_\phi$ vanishes on the kernel of the transform, $F_\phi(\widehat f):=L_\phi(f)$ is a well-defined linear functional on the transform core, and step 4.1 gives $|F_\phi(h)|\le k\|h\|_\infty$. For positivity let $h\ge0$ belong to the core. The core is a self-adjoint algebra of functions vanishing at infinity ([F5]), so choose real polynomials $p_n$ with $p_n(0)=0$ and $p_n(t)^2\to t$ uniformly on $[0,\|h\|_\infty]$ ([F5]); then $p_n(h)$ lies in the core with $|p_n(h)|^2=p_n(h)^{2}\to h$ uniformly, and writing $p_n(h)=\widehat{g_n}$ for some $g_n\in A$ we get $|p_n(h)|^2=\widehat{g_n*g_n^*}$, so $F_\phi(|p_n(h)|^2)=L_\phi(g_n*g_n^*)\ge0$ by step 2.1; passing to the uniform limit using the bound of step 4.1 gives $F_\phi(h)\ge0$. [F2, F5, step 2.1, step 4.1]

6.1 Steps 1.1, 2.1, 3.1, 4.1 and 5.1 establish every displayed claim: well-definedness and the $L^1$ bound, integrated positivity, the Cauchy-Schwarz bound $|L_\phi(f)|^2\le kL_\phi(f*f^*)\le k^2\|\widehat f\|_\infty^2$, the vanishing on $\{f:\widehat f=0\}$ and the descent to a positive functional with $|F_\phi(h)|\le k\|h\|_\infty$. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎ 