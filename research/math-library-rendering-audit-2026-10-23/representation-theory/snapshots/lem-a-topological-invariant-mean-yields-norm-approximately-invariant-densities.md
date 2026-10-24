---
id: lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities
kind: lemma
title: A topological invariant mean yields norm-approximately invariant densities
status: published
origin: pipeline
dependency_level: 4
proof_strategy: direct
deps:
  - def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group
  - def-reiter-condition-p1
  - thm-mazur-weak-and-norm-closure-of-convex-sets
  - def-weak-star-convergence
  - def-axiom-of-choice
  - lem-an-lch-group-has-an-open-sigma-compact-subgroup
  - thm-sigma-finite-duality-for-bounded-functionals-on-l-p
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - thm-monotone-convergence-for-the-integral
  - lem-haar-change-of-variables-under-inversion
  - lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous
  - lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean
  - def-convolution-on-cc-and-l1-of-a-group
  - lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
  - lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - thm-separation-of-disjoint-convex-sets-one-open
  - def-weak-topology-on-a-normed-space
  - def-weak-convergence-of-nets-and-sequences
  - def-directed-set-and-net
  - def-compact-space
  - lem-compactness-of-a-subspace-is-ambient
  - lem-compactly-supported-kernels-admit-commuting-radon-integrals
  - lem-right-translation-scales-left-haar-measure
  - thm-the-modular-function-is-a-continuous-homomorphism
  - def-modular-function-of-a-locally-compact-group
  - thm-finite-products-of-compact-spaces
  - thm-compactness-under-continuous-maps
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-integral-triangle-inequality
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-haar-l-infinity-space
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-left-haar-integral-and-left-haar-measure
  - def-topological-group
  - def-borel-sigma-algebra
  - def-dual-space-of-a-normed-space
  - def-radon-measure-on-an-lch-space
axiom_use: Assume AC. It is used through Hahn–Banach separation and Mazur's theorem, sigma-finite L1 duality on the clopen sigma-compact cosets, Cc density, and the earlier convolution-closure proof, as well as choices of coset representatives, local densities, and approximants. The nets themselves are witness-indexed and require no global choice function; no separate DC assumption is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press, 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G.3, proof of Theorem G.3.1 (ii) to (iii), printed pp. 454–455: the passages on weak convergence of defects, the convex-set/Mazur closure argument, and uniformity on norm-compact sets; its p. 454 all-means weak-star-density assertion is explicitly not used"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 20: Invariant Mean implies Reiter's Property (University of Sydney Honours lecture notes, 11 October 2012)"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture20_2012_InvMeanImpliesReiter.pdf"
      locator: "Slides 15–17, PDF pp. 15–17: the passages on weak convergence of defects, product-space convexity, norm closure, and uniformity on norm-compact sets; its p. 15 all-means weak-star-density assertion is explicitly not used"
verification:
  audited: "2026-10-08"
---

## Statement

Assume AC. Let $G$ be a locally compact Hausdorff group with fixed left Haar
measure $\mu$, and let $\widetilde m$ be a topological invariant mean on
$L^\infty(G)$: a positive complex-linear functional with
$\widetilde m(1_G)=1$ and
$\widetilde m(f*\varphi)=\widetilde m(\varphi)$ for every
$f\in\mathcal P$ and $\varphi\in L^\infty(G)$, where $\mathcal P$ is the
set of probability densities from [[def-reiter-condition-p1]]. The product
$f*\varphi$ is the $L^1$–$L^\infty$ smoothing of
[[lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous]];
products of two $L^1$ classes below use the extended convolution of
[[def-convolution-on-cc-and-l1-of-a-group]].
Then there is a net $(g_j)\subseteq\mathcal P$ such that
$\lVert f*g_j-g_j\rVert_1\to0$ for every $f\in\mathcal P$. The convergence
is uniform on norm-compact subsets of $\mathcal P$: for every norm-compact
$C\subseteq\mathcal P$ and every $\delta>0$ there is $j_0$ such that
$\sup_{f\in C}\lVert f*g_j-g_j\rVert_1<\delta$ whenever $j\succeq j_0$.

## Facts & Assumptions
**Given:** AC, an LCH group $G$ with fixed left Haar measure $\mu$, a topological invariant mean $\widetilde m$ on complex $L^\infty(G)$, and the probability densities $\mathcal P$.

[A1] AC is assumed in the choice-function form ([[def-axiom-of-choice]]).

[F1] $\mathcal P=\{f\in L^1(G):f\ge0,\lVert f\rVert_1=1\}$ is the convex set of probability densities ([[def-reiter-condition-p1]]).

[F2] Every point in a locally compact Hausdorff space has a relatively compact open neighborhood ([[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]]).

[F3] Haar measure is positive on nonempty open sets and finite on compact sets ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[F4] Indicators of Borel sets are simple measurable functions, their simple integral is their measure, and the nonnegative integral agrees with the simple integral ([[def-nonnegative-simple-measurable-function]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F5] A mean on complex $L^\infty(G)$ is positive, complex-linear and unital ([[def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group]]).

[F6] Complex $L^\infty$ consists of Borel almost-everywhere classes ([[def-complex-haar-l-infinity-space]]).

[F7] Complex numbers have real and imaginary parts ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F8] Disjoint convex sets, one open, are strictly separated by a nonzero bounded real-linear functional ([[thm-separation-of-disjoint-convex-sets-one-open]]).

[F9] There is an open subgroup $H=\bigcup_{n\ge0}U^n$ with compact increasing exhaustion $U^n$, whose left cosets partition $G$ into clopen sigma-compact subspaces ([[lem-an-lch-group-has-an-open-sigma-compact-subgroup]]).

[F10] Haar measure is Radon under the repository convention; the Borel sigma-algebra is generated by the open sets ([[def-radon-measure-on-an-lch-space]], [[def-borel-sigma-algebra]]).

[F11] On a sigma-finite measure space, every bounded real-linear functional on real $L^1$ is integration against a real $L^\infty$ function ([[thm-sigma-finite-duality-for-bounded-functionals-on-l-p]]).

[F12] The complex Haar $L^1$ spaces are Borel almost-everywhere classes with the stated $L^1$ norm ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F13] Under AC, $C_c(X;\mathbb C)$ is dense in complex $L^1(X,\mu)$ for an LCH space with Radon measure ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F14] Pointwise limits and their convergence sets are measurable, and monotone convergence applies to nonnegative sequences ([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]], [[thm-monotone-convergence-for-the-integral]]).

[F15] Inversion satisfies $\int F(x^{-1})\,d\mu(x)=\int F(x)\Delta_G(x^{-1})\,d\mu(x)$ for nonnegative Borel $F$ ([[lem-haar-change-of-variables-under-inversion]]).

[F16] Right translation satisfies $\int F(xz)\,d\mu(x)=\Delta_G(z^{-1})\int F\,d\mu$ ([[lem-right-translation-scales-left-haar-measure]]).

[F17] The modular function is a continuous homomorphism ([[thm-the-modular-function-is-a-continuous-homomorphism]]).

[F18] The modular function $\Delta_G$ is positive and is the factor appearing in the left-Haar inversion formula ([[def-modular-function-of-a-locally-compact-group]]).

[F19] Extended convolution is a bounded bilinear operation on $L^1$ with $\lVert u*v\rVert_1\le\lVert u\rVert_1\lVert v\rVert_1$ ([[def-convolution-on-cc-and-l1-of-a-group]]).

[F20] The extended $L^1$ convolution preserves probability densities: for all $f,b\in\mathcal P$, $f*b\in\mathcal P$ (the explicit remark recording the earlier proof's step 3.2, [[lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean]]).

[F21] For $f\in L^1$ and $\varphi\in L^\infty$, the pointwise smoothing $f*\varphi$ is bounded continuous with $\lVert f*\varphi\rVert_{\sup}\le\lVert f\rVert_1\lVert\varphi\rVert_\infty$ ([[lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous]]).

[F22] Compactly supported continuous kernels on LCH products admit commuting Radon integrals; finite products of compact spaces are compact, and continuous images of compact sets are compact ([[lem-compactly-supported-kernels-admit-commuting-radon-integrals]], [[thm-finite-products-of-compact-spaces]], [[thm-compactness-under-continuous-maps]], [[def-topological-group]]).

[F28] Left Haar integration is left invariant and linear and satisfies the integral triangle inequality ([[def-left-haar-integral-and-left-haar-measure]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-integral-triangle-inequality]]).

[F23] The weak topology is defined by bounded linear functionals, and weak convergence of a net means convergence under every such functional ([[def-dual-space-of-a-normed-space]], [[def-weak-topology-on-a-normed-space]], [[def-weak-convergence-of-nets-and-sequences]]).

[F24] Weak-star convergence is convergence on every element of the predual ([[def-weak-star-convergence]]).

[F25] For a convex subset of a normed space, weak and norm closures agree under AC ([[thm-mazur-weak-and-norm-closure-of-convex-sets]]).

[F26] Nets may be indexed by directed preorders, including witness-indexed finite-test and tolerance triples ([[def-directed-set-and-net]]).

[F27] Compactness is intrinsic to the subspace, and every ambient open cover of a compact subspace has a finite subcover; applying this to norm balls gives a finite $\varepsilon$-net ([[def-compact-space]], [[lem-compactness-of-a-subspace-is-ambient]]).
## Proof

**Proof technique:** direct.

1.1 Choose an open relatively compact neighborhood $V$ of $e$. By [F2, F3], $0<\mu(V)<\infty$, and $p_0:=\mu(V)^{-1}\mathbf1_V$ belongs to $\mathcal P$; this also proves $\mathcal P$ is nonempty. [F1, F2, F3, F4, construct]

1.2 Let $\psi_1,\ldots,\psi_n$ be bounded continuous complex functions and put $z(x)=(\psi_1(x),\ldots,\psi_n(x))\in\mathbb C^n$, viewed as a real vector space with its maximum norm. The vector $v=(\widetilde m(\psi_1),\ldots,\widetilde m(\psi_n))$ lies in $C:=\overline{\operatorname{co}}(z(G))$: otherwise a ball $B(v,r)$ and $C$ are disjoint convex sets, so [F8] strictly separates them by a nonzero real-linear functional $\ell$. Choose a unit vector $w$ with $\ell(w)>0$; applying separation to $v+rw/2\in B(v,r)$ gives $\ell(v)<\inf_{c\in C}\ell(c)=\inf_{x\in G}\ell(z(x))$. Now $h(x):=\ell(z(x))$ is bounded continuous and real-valued, and $\ell(v)=\widetilde m(h)$. For real $u$, $u=u_+-u_-$ makes $\widetilde m(u)$ real, so $\widetilde m(\operatorname{Re}\psi)=\operatorname{Re}\widetilde m(\psi)$ and similarly for imaginary parts; positivity and normalization give $\widetilde m(h)\ge\inf_G h$, a contradiction. [A1, F5, F6, F7, F8, algebra]

1.3 We first show that every bounded complex-linear functional $\Lambda$ on $L^1(G)$ is represented by a bounded Borel function. Let $H=\bigcup_nU^n$ be as in [F9], choose one representative $t_C$ for each clopen left coset $C=t_CH$ using [A1], and put $K_{C,n}=t_CU^n$. Each $C$ is the increasing union of compact sets $K_{C,n}$ of finite Haar measure, hence its restricted Haar measure is sigma-finite. Since $C$ is clopen, it is an LCH subspace and its restricted measure is Radon: Borel subsets of $C$ are Borel in $G$, and open subsets of $C$ are open in $G$. [A1, F3, F9, F10, choose, construct]

1.4 For each coset $C$, restrict $\Lambda$ to complex $L^1$ functions supported in $C$. On real functions its real and imaginary parts are bounded real-linear functionals of norm at most $\lVert\Lambda\|$; [F11] represents them by real $a_C,b_C\in L^\infty(C)$ with $\lVert a_C\rVert_\infty,\lVert b_C\rVert_\infty\le\lVert\Lambda\rVert$. Thus $\phi_C:=a_C+ib_C$ represents $\Lambda$ on complex functions supported in $C$ and $|\phi_C|\le2\lVert\Lambda\rVert$ almost everywhere. Choose Borel representatives and set them to zero on their exceptional null sets. [A1, F11, F12, construct, algebra]

1.5 Put $R=2\lVert\Lambda\rVert$. For each $C,n$, the bounded function $\phi_C\mathbf1_{K_{C,n}}$ is in $L^1(C)$; by [F13] choose $q_{C,n}\in C_c(C)$ within $2^{-n-2}$ in $L^1$. Radially clip $q_{C,n}$ to the closed disk of radius $R$, obtaining $h_{C,n}\in C_c(C)$ with $\lVert h_{C,n}-\phi_C\mathbf1_{K_{C,n}}\rVert_1<2^{-n-1}$: pointwise, if $|q_{C,n}|>R$ then $|q_{C,n}-h_{C,n}|=|q_{C,n}|-R\le|q_{C,n}-\phi_C\mathbf1_{K_{C,n}}|$, and otherwise clipping does nothing, so the triangle inequality gives the stated factor two. [A1, F13, choose, construct]

1.6 If $f=0$ or $v=0$, the adjoint identity below has both sides zero. Otherwise their compact supports are nonempty. For $f,v\in C_c(G)$ and bounded Borel $\varphi$, define $f^\sharp(u):=\Delta_G(u^{-1})f(u^{-1})$. The adjoint identity $\int_G(f*v)\varphi=\int_Gv(f^\sharp*\varphi)$ holds first for bounded continuous $\varphi$: apply [F22] to the compactly supported continuous kernel $(y,z)\mapsto f(y)v(z)\varphi(yz)$, use left invariance to set $x=yz$, interchange the compact Radon integrals, and use inversion [F15] in $\int_yf(y)\varphi(yz)$. [F15, F17, F18, F19, F22, algebra, F28]

2.1 If the finite test family is empty, take $b:=p_0$ from step 1.1. Otherwise, given $\varepsilon>0$, choose a finite convex combination $\sum_{k=1}^r t_k z(x_k)$ within $\varepsilon/2$ of $v$. Continuity of the finite family gives, for each $k$, an open neighborhood $O_k$ of $x_k$ on which $|\psi_j(y)-\psi_j(x_k)|<\varepsilon/2$ for every $j$; shrink it to a relatively compact open $V_k\subseteq O_k$. Then $p_k:=\mu(V_k)^{-1}\mathbf1_{V_k}\in\mathcal P$ by [F3], and $b:=\sum_k t_kp_k\in\mathcal P$ by [F1] satisfies $|\int b\psi_j\,d\mu-\widetilde m(\psi_j)|<\varepsilon$ for every $j$. [F1, F2, F3, F4, step 1.1, step 1.2, construct, algebra]

2.2 For fixed $C,m$ and every $n\ge m$, $K_{C,m}\subseteq K_{C,n}$, so $\int_{K_{C,m}}|h_{C,n}-\phi_C|\,d\mu<2^{-n-1}$. By [F14], the sum of these errors is finite almost everywhere on $K_{C,m}$, hence $h_{C,n}\to\phi_C$ almost everywhere there. Since $C=\bigcup_mK_{C,m}$, convergence holds almost everywhere on each coset. Glue $h_{C,n}$ over the clopen cosets to a bounded continuous $H_n$ on $G$. Applying the convergence-set and pointwise-limit clauses of [F14] to the real and imaginary parts shows that the convergence set of $(H_n)$ is Borel and its limit there is Borel; set it to zero elsewhere to obtain a bounded Borel function $\phi$ agreeing almost everywhere with each $\phi_C$ on that coset. This uses only countable unions of exceptional null sets inside each individual coset. [F14, step 1.5, algebra, construct]

2.3 For general bounded Borel $\varphi$, let $K=\operatorname{supp}f$, $L=\operatorname{supp}v$, and $C=KL$, which is compact; the pointwise Cc convolution $f*v$ vanishes off $C$. Since $f^\sharp\in L^1$ and $\varphi$ is bounded Borel, [F21] makes $f^\sharp*\varphi$ bounded continuous, so the right pairing is defined. Choose $\psi\in C_c(G)$ with $\lVert\psi-\varphi\mathbf1_C\rVert_1<\eta$ by [A1, F13]. The left pairing changes by at most $\lVert f*v\rVert_{\sup}\eta$. For fixed $z\in L$, inversion and right translation give $\int_{K^{-1}}|\varphi-\psi|(u^{-1}z)\,d\mu(u)=\int_K|\varphi-\psi|(tz)\Delta_G(t^{-1})\,d\mu(t)\le M_KM_L\eta$, where $M_K=\sup_{t\in K}\Delta_G(t^{-1})$ and $M_L=\sup_{z\in L}\Delta_G(z^{-1})$ are finite by [F17]. Since $f^\sharp$ is bounded and supported in $K^{-1}$, the right pairing changes by at most $\lVert v\rVert_1\lVert f^\sharp\rVert_\infty M_KM_L\eta$. Letting $\eta\downarrow0$ proves the identity for Cc $f,v$ and arbitrary $\varphi$, without assuming a Borel product function is measurable for the product sigma-algebra. [A1, F13, F15, F16, F17, F18, F19, F21, step 1.6, algebra, F28]

3.1 Index by triples $(F,\varepsilon,b)$ where $F$ is a finite set of bounded continuous functions, $\varepsilon>0$, $b\in\mathcal P$, and $|\int b\psi-\widetilde m(\psi)|<\varepsilon$ for all $\psi\in F$; order by inclusion of $F$ and decreasing $\varepsilon$. Steps 1.1 and 2.1 make this a nonempty directed preorder, since a witness for the union of two finite test sets and the smaller tolerance gives a common upper bound. The third-coordinate net $(b_i)$ therefore satisfies $\int b_i\psi\,d\mu\to\widetilde m(\psi)$ for every bounded continuous $\psi$, without a global choice function. [F26, step 1.1, step 2.1, construct]

3.2 A compact set meets only finitely many open cosets $C$, since these cosets form an ambient open cover and [F27] supplies a finite subcover. Hence for every $u\in C_c(G)$, step 1.4 and the cosetwise agreement in step 2.2 give $\Lambda(u)=\int_Gu\phi\,d\mu$. By [A1, F13], $C_c(G)$ is dense in $L^1(G)$; both sides are bounded functionals, with the integral norm at most $2\lVert\Lambda\rVert$, so equality extends to every $u\in L^1(G)$. Thus the full bounded dual of $L^1(G)$ is represented by bounded Borel functions, without claiming that an uncountable union of null sets is null. [A1, F12, F13, F27, step 1.4, step 2.2, algebra, F28]

3.3 For arbitrary $f,v\in L^1(G)$, approximate them in $L^1$ by Cc sequences. The class convolution bound [F19] makes $f_n*v_n\to f*v$ in $L^1$; the inversion formula gives $\lVert f_n^\sharp-f^\sharp\rVert_1=\lVert f_n-f\rVert_1$, and the smoothing bound [F21] gives $f_n^\sharp*\varphi\to f^\sharp*\varphi$ uniformly. Passing to the limit in step 2.3 proves $\int_G(f*v)\varphi=\int_Gv(f^\sharp*\varphi)$ for all $f,v\in L^1(G)$ and $\varphi\in L^\infty(G)$. [A1, F6, F13, F15, F18, F19, F21, step 2.3, F28]

4.1 Fix $p:=p_0\in\mathcal P$ from step 1.1 and set $g_i:=p^\sharp*b_i$. Formula [F15] gives $\lVert p^\sharp\rVert_1=\lVert p\rVert_1=1$, preserves nonnegativity, and yields $(p^\sharp)^\sharp=p$; the earlier convolution-closure proof [F20] gives $g_i\in\mathcal P$. For every $\varphi\in L^\infty(G)$, step 3.3 yields $\int g_i\varphi=\int b_i(p*\varphi)\to\widetilde m(p*\varphi)=\widetilde m(\varphi)$, since $p*\varphi$ is bounded continuous by [F21] and $\widetilde m$ is topologically invariant. Thus the density functionals $g_i$ converge weak-star to $\widetilde m$ on all of $L^\infty(G)$, although the net $b_i$ was only chosen to approximate on continuous tests. [F1, F6, F15, F17, F18, F19, F20, F21, F24, step 1.1, step 3.1, step 3.3]

5.1 Fix $f\in\mathcal P$. Formula [F15] shows that $f^\sharp\ge0$ and $\|f^\sharp\|_1=\|f\|_1=1$, so $f^\sharp\in\mathcal P$. For every $\varphi\in L^\infty(G)$, step 3.3 gives $\int(f*g_i)\varphi=\int g_i(f^\sharp*\varphi)\to\widetilde m(f^\sharp*\varphi)=\widetilde m(\varphi)$ by topological invariance, while step 4.1 gives $\int g_i\varphi\to\widetilde m(\varphi)$. Hence $\int(f*g_i-g_i)\varphi\to0$. By the full dual representation in step 3.2, every bounded functional on $L^1(G)$ is one of these pairings; therefore $f*g_i-g_i\rightharpoonup0$ weakly in $L^1(G)$. [F1, F6, F15, F18, F19, F21, F23, step 3.2, step 3.3, step 4.1]

6.1 Let $F=\{f_1,\ldots,f_r\}\subseteq\mathcal P$ be finite and nonempty. The tuple $(f_k*g_i-g_i)_{k=1}^r$ converges weakly to zero in $E=(L^1(G))^r$ with its maximum norm: each coordinate converges weakly by step 5.1, and every bounded functional on this finite product is the sum of its coordinate restrictions. Its range over $i$ lies in the convex set $D=\{(f_k*g-g)_{k=1}^r:g\in\mathcal P\}$, since the map is linear in $g$ and $\mathcal P$ is convex. Thus zero is in the weak closure of $D$; [F25] puts it in the norm closure, so for every $\varepsilon>0$ some $g\in\mathcal P$ satisfies $\max_k\lVert f_k*g-g\rVert_1<\varepsilon$. The empty $F$ has any witness from step 1.1. [A1, F1, F19, F23, F25, step 1.1, step 5.1, construct]

7.1 Index by triples $(F,\varepsilon,g)$ with finite $F\subseteq\mathcal P$, $\varepsilon>0$, $g\in\mathcal P$, and $\lVert f*g-g\rVert_1<\varepsilon$ for all $f\in F$, ordered by inclusion of $F$ and decreasing tolerance. Step 6.1 makes this a nonempty directed preorder, so its third-coordinate net $(g_j)$ lies in $\mathcal P$ and satisfies $\lVert f*g_j-g_j\rVert_1\to0$ for each $f\in\mathcal P$, without a global choice function. [F1, F26, step 6.1, construct]

8.1 Let $C\subseteq\mathcal P$ be norm-compact and $\delta>0$. If $C=\varnothing$ the estimate is vacuous; otherwise choose a finite $\delta/3$-net $f_1,\ldots,f_r\in C$ and take an index after these tests with tolerance $\delta/3$. For every later $j$, choose $f_k$ with $\lVert f-f_k\rVert_1<\delta/3$; since $g_j\in\mathcal P$, [F19] gives $\lVert f*g_j-g_j\rVert_1\le\lVert(f-f_k)*g_j\rVert_1+\lVert f_k*g_j-g_j\rVert_1<2\delta/3<\delta$. This proves uniform convergence on $C$ and completes the lemma. [F1, F19, F27, step 7.1] ∎

## Sources

BHV, *Kazhdan's Property (T)*, Appendix G.3, Theorem G.3.1 (ii) to (iii), printed pp. 454–455, and Thomas, Lecture 20, slides 15–17, present the weak-star-density, product-space convexity, and Mazur route. Their proof strategies are followed after the density step, but the asserted density of $L^1$ probabilities in the set of all $L^\infty$ means is not used: that separate assigned claim is refuted under the repository's Haar convention. This proof instead establishes finite-test density against bounded continuous functions, smooths by one fixed probability density to obtain weak-star convergence on all $L^\infty$ tests, and proves the full $L^1$ dual representation locally over sigma-compact cosets.
