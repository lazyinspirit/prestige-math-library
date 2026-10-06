---
id: lem-lca-translations-and-normalised-local-approximate-identities
kind: lemma
title: Translation continuity and normalised local approximate identities on an LCA group
dependency_level: 2
deps:
- lem-lca-lone-convolution-is-a-commutative-banach-star-algebra
- def-left-haar-integral-and-left-haar-measure
- def-radon-measure-on-an-lch-space
- def-l-p-space-as-a-quotient-by-null-functions
- def-compact-support-c-c-and-c-zero-on-an-lch-space
- thm-c-c-is-dense-in-l-p-for-radon-measures
- lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set
- lem-translations-preserve-compactly-supported-continuous-functions
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- thm-minkowski-integral-inequality
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- thm-compactness-under-continuous-maps
- thm-finite-products-of-compact-spaces
- lem-lca-haar-measure-is-inversion-invariant
- thm-holder-inequality-for-integrals
- def-dependent-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume Dependent Choice. Let $G$ be a locally compact Hausdorff abelian group
with Haar measure $m_G$ and let $1\le p<\infty$. Translation
$T_xf(t):=f(t-x)$ is a linear isometry of $L^p(G,m_G)$ and $x\mapsto T_xf$ is
norm-continuous for every $f$. Moreover for every identity neighbourhood $U$
there is a symmetric $u_U\in C_c(G)$, $u_U\ge0$, $u_U(-x)=u_U(x)$,
$\int_G u_U\,dm_G=1$, $\operatorname{supp}u_U\subseteq U$, and for every
$f\in L^p$
$$\|u_U*f-f\|_p\to0,\qquad \|f*u_U-f\|_p\to0$$
as the support neighbourhood shrinks, uniformly over all such kernels, with $\|u_U*f\|_p\le\|f\|_p$ and
$\|f*u_U\|_p\le\|f\|_p$. More precisely, index by all admissible pairs
$(U,u)$, ordered by reverse inclusion of $U$, and assign the kernel $u$ to
that pair. This directed net is a contractive two-sided approximate identity
of $A=L^1(G,m_G)$; its convergence requires no simultaneous choice of one
kernel for every neighbourhood, no metrisation, and no sequential compactness.

## Facts & Assumptions

**Given:** Dependent Choice, a locally compact Hausdorff abelian group $G$ written additively with Haar measure $m_G$, an exponent $1\le p<\infty$, a function $f\in L^p(G,m_G)$, and the convolution calculus of $A=L^1(G,m_G)$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[lem-lca-lone-convolution-is-a-commutative-banach-star-algebra]]).

[F1] $m_G$ is a Radon measure, translation and inversion invariant, finite on compact sets and positive on nonempty open sets; for compact $K,L$ the sum $K+L$ is compact ([[lem-lca-haar-measure-is-inversion-invariant]], [[def-left-haar-integral-and-left-haar-measure]], [[def-radon-measure-on-an-lch-space]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[thm-compactness-under-continuous-maps]], [[thm-finite-products-of-compact-spaces]]).

[F2] Real $C_c(G)$ is dense in real $L^p(G,m_G)$. For complex $f$, approximate $\operatorname{Re}f$ and $\operatorname{Im}f$ separately by real $a,b\in C_c(G)$; then $a+ib\in C_c(G;\mathbb C)$ and $\|f-(a+ib)\|_p\le\|\operatorname{Re}f-a\|_p+\|\operatorname{Im}f-b\|_p$. Thus complex compactly supported continuous functions are dense in complex $L^p$ as well. Translations preserve either scalar version of $C_c$ ([[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[lem-translations-preserve-compactly-supported-continuous-functions]], [[def-dependent-choice]]).

[F3] Minkowski's integral inequality: for $\sigma$-finite measure spaces $(X,\mu)$, $(Y,\nu)$, a measurable $F$ with $\int_Y\|F(\cdot,y)\|_{L^p(X)}\,d\nu(y)<\infty$ satisfies $\|\int_Y|F(\cdot,y)|\,d\nu(y)\|_{L^p(X)}\le\int_Y\|F(\cdot,y)\|_{L^p(X)}\,d\nu(y)$. Hölder's inequality also applies to the finite weighted measure $|u|\,dm_G$ ([[thm-minkowski-integral-inequality]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-holder-inequality-for-integrals]]).

[F4] Under Dependent Choice every compact $K$ inside an open $U$ admits a cutoff $v\in C_c(G)$ with $0\le v\le1$, $v=1$ on $K$, $v=0$ outside $U$ (so $\operatorname{supp}v\subseteq\overline U$) ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

## Proof

**Proof technique:** direct.

1.1 (Reduction to a $\sigma$-compact essential support.) For $n\ge1$ the Borel set $E_n:=\{|f|>1/n\}$ has $m_G(E_n)\le n^p\|f\|_p^p<+\infty$; by [F1] choose an open $U_n\supseteq E_n$ with $m_G(U_n)<+\infty$ and compact $K_{n,j}\subseteq U_n$ with $m_G(K_{n,j})\to m_G(U_n)$. Then $S:=\bigcup_{n,j}K_{n,j}$ is $\sigma$-compact of $\sigma$-finite measure, $m_G(\{|f|>0\}\setminus S)=0$, and replacing $f$ by $f\cdot\mathbf 1_S$ changes it at most on a null set, hence changes neither the class in $L^p$ nor any norm. For the product calculations below we additionally use an a.e. pointwise limit of real or complex $C_c$ approximants supplied by [F2] as representative, zero where the sequence fails to converge. The convolution-algebra supplier's product-measurability argument applies verbatim to $L^p$ approximants and to their compact-support unions. Thus we may assume $f=0$ outside a $\sigma$-compact set $S$ and the kernels $f(x-y)$ below are product measurable. [F1, F2]

1.2 (Translation is an isometry.) For $f\in L^p$ and $x\in G$, the substitution $t\mapsto t+x$ preserves $m_G$ and therefore $\|T_xf\|_p=\|f\|_p$; the map is linear and respects a.e. equality, so it acts on the quotient $L^p$. [F1]

2.1 (Convolution with a compactly supported kernel.) Let $u\in C_c(G;\mathbb C)$ (including real kernels) and assume $f$ vanishes outside the $\sigma$-compact set $S$. The function $(y,x)\mapsto|u(y)|\,|f(x-y)|^p$ is supported in $\operatorname{supp}u\times(S+\operatorname{supp}u)$, a $\sigma$-finite product by [F1], so Tonelli's theorem gives $\int_G\int_G|u(y)|\,|f(x-y)|^p\,dm_G(y)\,dm_G(x)=\|u\|_1\|f\|_p^p<+\infty$ after the substitution $x\mapsto x+y$; by Hölder's inequality with the finite measure $|u|\,dm_G$ this makes $\int_G|u(y)|\,|f(x-y)|\,dm_G(y)$ finite for $m_G$-a.e. $x$. For those $x$ the two defining integrals agree, $(u*f)(x)=\int_Gu(y)f(x-y)\,dm_G(y)=\int_Gf(z)u(x-z)\,dm_G(z)=(f*u)(x)$, by inversion followed by translation in the substitution $z=x-y$. Applying Minkowski's integral inequality [F3] to $F(x,y):=u(y)f(x-y)$ on the $\sigma$-finite product yields $$\|u*f\|_p=\Bigl\|\int_Gu(y)f(\cdot-y)\,dm_G(y)\Bigr\|_p\le\int_G|u(y)|\,\|T_yf\|_p\,dm_G(y)=\|u\|_1\|f\|_p .$$ [F1, F3, step 1.1]

2.2 (Norm continuity of translation.) Fix $f\in L^p$ and $\varepsilon>0$. By [F2] choose $f_0\in C_c(G;\mathbb F)$ for the scalar field $\mathbb F\in\{\mathbb R,\mathbb C\}$, with $\|f-f_0\|_p<\varepsilon/3$. If $f_0=0$, the isometry gives $\|T_zf-f\|_p<2\varepsilon/3$ for every $z$. Otherwise put $K_0:=\operatorname{supp}f_0$; its compact thickening below has positive finite measure. Choose a compact symmetric identity neighbourhood $W$ and a compact symmetric neighbourhood $E\subseteq W$ so small that $|f_0(t-z)-f_0(t)|<\varepsilon/(3\,m_G(K_0+W)^{1/p})$ for all $t\in G$ and $z\in E$; this is possible by the uniform-continuity argument on the compact set $K_0+W$: cover $K_0+W$ by finitely many translates $y_j+V_j$ on which $f_0$ varies by less than the bound, and intersect the corresponding symmetric neighbourhoods of $0$. Then $\|T_zf_0-f_0\|_p<\varepsilon/3$ for $z\in E$, and step 1.2 gives, for every $z\in E$, $$\|T_zf-f\|_p\le\|T_z(f-f_0)\|_p+\|T_zf_0-f_0\|_p+\|f_0-f\|_p<2\varepsilon/3+\varepsilon/3=\varepsilon .$$ Hence $x\mapsto T_xf$ is norm-continuous at $0$, and at every $x_0$ by $T_{x+x_0}=T_xT_{x_0}$ and step 1.2. [F1, F2, step 1.2]

3.1 (The weighted-average estimate.) Let $u\in C_c(G)$ satisfy $u\ge0$ and $\int_Gu\,dm_G=1$. Since $\int_Gu(y)\,dm_G(y)=1$, for a.e. $x$ $$(u*f)(x)-f(x)=\int_Gu(y)\bigl(f(x-y)-f(x)\bigr)\,dm_G(y),$$ and Minkowski's inequality [F3] applied to $G(x,y):=u(y)(f(x-y)-f(x))$ on $\operatorname{supp}u\times\bigl(S\cup(S+\operatorname{supp}u)\bigr)$, a $\sigma$-finite product containing both terms, gives $$\|u*f-f\|_p\le\int_Gu(y)\,\|T_yf-f\|_p\,dm_G(y)\le\sup_{y\in\operatorname{supp}u}\|T_yf-f\|_p .$$ [F1, F3, step 2.1]

4.1 (Normalised local approximate identities.) Let $U$ be an identity neighbourhood. By continuity of addition at $0$ choose a symmetric open $V$ with $V+V\subseteq U$, Then $\overline V\subseteq V+V\subseteq U$: for $x\in\overline V$, the open set $x+V$ meets $V$, so $x\in V-V=V+V$. By [F4] choose $v\in C_c(G)$ with $0\le v\le1$, $v(0)=1$, and $v=0$ outside $V$; hence $\operatorname{supp}v\subseteq\overline V\subseteq U$. Then $w(x):=v(x)v(-x)$ is symmetric, nonnegative, compactly supported in $\overline V\subseteq U$, and $w(0)=1$, so $c:=\int_Gw\,dm_G>0$ by [F1]; set $u_U:=c^{-1}w$. Then $u_U\ge0$ is symmetric with $\int_Gu_U\,dm_G=1$ and $\operatorname{supp}u_U\subseteq\overline V\subseteq U$. Given $f\in L^p$ and $\varepsilon>0$, step 2.2 provides a symmetric identity neighbourhood $E$ with $\|T_yf-f\|_p<\varepsilon$ for every $y\in E$. For every identity neighbourhood $U\subseteq E$ and every admissible kernel $u_U$, one has $\operatorname{supp}u_U\subseteq U\subseteq E$, so step 3.1 yields $\|u_U*f-f\|_p<\varepsilon$, and by step 2.1 also $\|u_U*f\|_p\le\|f\|_p$ and $\|f*u_U\|_p=\|u_U*f\|_p\le\|f\|_p$; this bound is uniform over admissible kernels. The set of all pairs $(U,u)$ is directed by shrinking $U$: two pairs have a common later pair by constructing a kernel inside their intersected neighbourhood. Thus both limits hold for this net without choosing kernels simultaneously. For $p=1$ it is a contractive two-sided approximate identity of $A=L^1(G,m_G)$. [F1, F4, step 2.1, step 3.1, step 2.2]

5.1 Steps 1.2, 2.2 and 4.1 prove the isometry, the norm continuity, the existence of the symmetric normalised cutoffs and both approximate-identity limits with their contractive bounds. [step 1.2, step 2.2, step 4.1] ∎ 