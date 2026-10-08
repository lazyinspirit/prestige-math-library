---
id: lem-l1-probability-densities-are-weak-star-dense-in-the-mean-set
kind: lemma
title: Probability-density approximation of continuous tests and topological means
status: draft
origin: pipeline
dependency_level: 4
deps:
- def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group
- def-complex-haar-l-infinity-space
- def-complex-haar-lp-spaces-and-compactly-supported-functions
- def-left-haar-integral-and-left-haar-measure
- def-radon-measure-on-an-lch-space
- cor-existence-of-left-and-right-haar-measures
- def-essential-supremum-with-respect-to-a-measure
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- def-the-one-dimensional-torus-and-normalized-haar-integral
- def-standard-topologies
- def-product-topology
- def-borel-sigma-algebra
- def-group
- def-topological-group
- def-compact-space
- def-hausdorff-space
- thm-finite-products-of-compact-spaces
- lem-products-preserve-t0-t1-and-hausdorff
- thm-compactness-under-continuous-maps
- thm-compact-subset-of-a-hausdorff-space-is-closed
- thm-uniqueness-of-left-haar-measure-up-to-scale
- thm-r-uncountable
- def-ultrafilter
- def-filter
- thm-ultrafilter-lemma
- thm-compactness-via-nets-filters-and-ultrafilters
- thm-heine-borel-rn
- def-dual-space-of-a-normed-space
- def-weak-star-topology
- def-measure-null-set-and-almost-everywhere
- thm-countable-union-of-null-is-null
- thm-nonnegative-integral-zero-iff-zero-almost-everywhere
- prop-order-and-scalar-rules-for-the-nonnegative-integral
- def-integrable-real-and-complex-functions-and-their-integrals
- thm-linearity-of-the-lebesgue-integral-on-l-one
- thm-integral-triangle-inequality
- def-axiom-of-choice
- thm-separation-of-disjoint-convex-sets-one-open
- lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure
- lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
- lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous
- def-convolution-on-cc-and-l1-of-a-group
- lem-haar-change-of-variables-under-inversion
- lem-right-translation-scales-left-haar-measure
- thm-the-modular-function-is-a-continuous-homomorphism
- lem-compactly-supported-kernels-admit-commuting-radon-integrals
- lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean
- def-directed-set-and-net
- lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets
- lem-averages-over-probability-densities-attain-the-essential-supremum
proof_strategy: direct
axiom_use: Assume AC through separation, Cc density, smoothing and convolution closure, and for the ultrafilter extending the co-countable filter in the retained counterexample. The approximation net is witness-indexed and requires no global witness selector.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)
    url: https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf
    locator: Appendix G, Exercise G.6.2, printed p. 472 (PDF p. 478), asks for weak-star density of L1(G) probability densities in all means. The repaired finite-detectability/local-support/continuous-test-and-topological-mean claim is a local correction under the explicit global-null Haar convention; this source pointer does not certify the false original scaffold assertion.
  - title: 'Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 20: Invariant Mean implies Reiter''s Property'
    url: https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture20_2012_InvMeanImpliesReiter.pdf
    locator: Weak-star density lemma and Hahn–Banach criterion, PDF p. 9 (slide page indexed 8). The repaired finite-detectability/local-support/continuous-test-and-topological-mean claim is a local correction under the explicit global-null Haar convention; this source pointer does not certify the false original scaffold assertion.
  - title: Matthew Daws and Volker Runde, Reiter's properties (P1) and (P2) for locally compact quantum groups, arXiv:0705.3432v5
    url: https://arxiv.org/pdf/0705.3432v5
    locator: 'Introduction, printed p. 1, after equation (1): for an invariant mean, approximation by normal L1 states yields an asymptotically invariant net; this does not prove density in the full set of all means. The repaired finite-detectability/local-support/continuous-test-and-topological-mean claim is a local correction under the explicit global-null Haar convention; this source pointer does not certify the false original scaffold assertion.'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $G$ be an arbitrary LCH group with fixed left Haar measure $\mu$, let $\mathcal P=\{f\in L^1(G):f\ge0,\ \|f\|_1=1\}$ and let $M$ be the means on the global-null $L^\infty(G)$ of [[def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group]]. Then:

1. Every $m\in M$, finite list of bounded continuous functions $\psi_1,\ldots,\psi_k$ and $\varepsilon>0$ admit $f\in\mathcal P\cap C_c(G)$ with $|\int f\psi_j\,d\mu-m([\psi_j])|<\varepsilon$ for all $j$.
2. If $m$ is **topologically invariant**, meaning $m(p*\varphi)=m(\varphi)$ for every $p\in\mathcal P$ and $\varphi\in L^\infty(G)$ using the smoothing of [[lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous]], then $m$ is in the weak-star closure of $\mathcal P$: every finite list of global $L^\infty$ classes can be approximated simultaneously by their probability-density integrals.

Here $\mathcal P$ embeds into $L^\infty(G)^*$ by integration. Full weak-star density in ALL means is false under the existing Haar/global-null conventions; the original counterexample remains in Remarks. No countability or semifiniteness of $G$ is imposed.

## Facts & Assumptions

**Given:** AC; an LCH group $G$ with fixed left Haar measure; a mean $m$ on global $L^\infty(G)$; and finite test families.

[F1] A mean is positive, complex-linear, unital and bounded by the $L^\infty$ norm ([[def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group]]).

[F2] Probability averages of a real bounded continuous function have supremum equal to its pointwise supremum ([[lem-averages-over-probability-densities-attain-the-essential-supremum]]).

[F3] Under AC, separation separates disjoint convex sets when one is open ([[thm-separation-of-disjoint-convex-sets-one-open]]).

[F4] Relatively compact open neighborhoods exist, have finite positive Haar measure when nonempty, and $C_c(G)$ is dense in $L^1(G)$ under AC ([[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F5] Smoothing $f*\varphi$ is an actual bounded continuous UCB function with sup norm at most $\|f\|_1\|\varphi\|_\infty$; extended convolution agrees with Cc convolution and is bounded in $L^1$ ([[lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous]], [[def-convolution-on-cc-and-l1-of-a-group]]).

[F6] Left invariance, inversion and right translation give $\int F(x^{-1})\,d\mu(x)=\int F(x)\Delta_G(x^{-1})\,d\mu(x)$ and $\int F(xz)\,d\mu(x)=\Delta_G(z^{-1})\int F\,d\mu$; $\Delta_G$ is a continuous positive homomorphism ([[def-left-haar-integral-and-left-haar-measure]], [[lem-haar-change-of-variables-under-inversion]], [[lem-right-translation-scales-left-haar-measure]], [[thm-the-modular-function-is-a-continuous-homomorphism]]).

[F7] Continuous compactly supported kernels on LCH products admit commuting Radon integrals under AC ([[lem-compactly-supported-kernels-admit-commuting-radon-integrals]]).

[F8] Convolution preserves probability densities, as proved with nonnegative Cc approximants ([[lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean]], Remark). The integral is linear and satisfies the triangle inequality ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-integral-triangle-inequality]]).

[F9] Weak-star neighborhoods test finitely many evaluations, and nets may use witness-indexed directed preorders ([[def-weak-star-topology]], [[def-directed-set-and-net]]).



## Proof

**Proof technique:** approximate continuous tests by probability witnesses, then smooth those witnesses to approximate a topological mean on all global-L-infinity inputs.

1.1 For bounded continuous $\psi_1,\ldots,\psi_k$, let $D\subseteq\mathbb C^k$ consist of their integral vectors over $\mathcal P$, and let $v=(m(\psi_j))_j$. The set $D$ is convex. If $v\notin\overline D$, choose $r>0$ so that the open ball $B(v,r)$ is disjoint from the nonempty closed convex set $\overline D$. By [F3], after reversing its sign, a nonzero real-linear functional $\ell$ satisfies $\ell(c)<\ell(u)$ for every $c\in\overline D$ and $u\in B(v,r)$. Choose a unit vector $w$ with $\ell(w)>0$. Testing at $u=v-rw/2$ gives $\sup_{d\in D}\ell(d)\le\ell(v)-r\ell(w)/2<\ell(v)$. Write $h(x)=\ell((\psi_j(x))_j)$, a real bounded continuous function. Complex linearity and positivity make $m(\operatorname{Re}\psi)=\operatorname{Re}m(\psi)$ and similarly for imaginary parts, so $\ell(v)=m(h)\le\sup_Gh$ by [F1]. But [F2] gives $\sup_{d\in D}\ell(d)=\sup_{f\in\mathcal P}\int fh=\sup_Gh$, a contradiction. Thus $v\in\overline D$, proving simultaneous continuous-test approximation by a density. The empty test family has a witness given by a normalized indicator of a relatively compact nonempty open set by [F4]. [F1, F2, F3, F4, construct, algebra]

1.2 If $a=0$ or $b=0$, the adjoint identity below has both sides zero; assume otherwise, so both supports are nonempty. For $a,b\in C_c(G)$ define $a^\sharp(u)=\Delta_G(u^{-1})a(u^{-1})$. For bounded continuous $\varphi$, the compact-kernel formula and [F7] interchange the integrals of $a(y)b(z)\varphi(yz)$; left invariance and inversion [F6] then give $\int(a*b)\varphi=\int b(a^\sharp*\varphi)$. This also holds for any bounded Borel $\varphi$. Indeed put $K=\operatorname{supp}a$, $L=\operatorname{supp}b$, $C=KL$, and choose $\psi\in C_c(G)$ with $\|\psi-\varphi\mathbf1_C\|_1<\eta$ by [F4]. The left integral changes by at most $\|a*b\|_{\sup}\eta$. For $z\in L$, inversion and right translation give $\int_{K^{-1}}|\varphi-\psi|(u^{-1}z)\,d\mu(u)\le M_KM_L\eta$, where $M_K=\sup_K\Delta_G(t^{-1})$ and $M_L=\sup_L\Delta_G(z^{-1})$ are finite by [F6]; here $tz\in KL=C$ for $t\in K$. The right integral changes by at most $\|b\|_1\|a^\sharp\|_{\sup}M_KM_L\eta$. Letting $\eta\downarrow0$ proves the adjoint identity for bounded Borel tests without invoking product measurability of arbitrary Borel functions. [F4, F5, F6, F7, F8, algebra]

2.1 These witnesses can be chosen in $\mathcal P\cap C_c(G)$. For a witness $b\in\mathcal P$, choose $u_n\in C_c(G)$ with $u_n\to b$ in $L^1$ by [F4]. Then $|u_n|\to b$ in $L^1$ and $\int|u_n|\to1$; for large $n$, $b_n=|u_n|/\int|u_n|$ lies in $\mathcal P\cap C_c(G)$ and tends to $b$ in $L^1$. The finite bounded tests preserve the desired inequalities with any initial smaller error margin. Index all such witnesses by triples $(F,\eta,b)$, with finite continuous test set $F$, tolerance $\eta>0$ and $b\in\mathcal P\cap C_c(G)$ meeting it, ordered by increasing $F$ and decreasing $\eta$. Step 1.1 makes this a nonempty directed preorder. Its third-coordinate net $b_i$ satisfies $\int b_i\psi\to m(\psi)$ for every bounded continuous $\psi$, without a global witness choice. Fix also $p\in\mathcal P\cap C_c(G)$. [F4, F8, F9, step 1.1, construct, algebra]

3.1 Now suppose $m$ is topologically invariant. Set $g_i=p^\sharp*b_i$ for the Cc probability witnesses of step 2.1. By [F6], $p^\sharp\ge0$, $\|p^\sharp\|_1=1$ and $(p^\sharp)^\sharp=p$, so $g_i\in\mathcal P$ by [F8]. For a global $L^\infty$ class $\varphi$, choose a bounded Borel representative by modifying a global null set. Step 1.2 gives $\int g_i\varphi=\int b_i(p*\varphi)\to m(p*\varphi)=m(\varphi)$, because [F5] makes $p*\varphi$ bounded continuous and $m$ is topological. Thus the probability integrals converge weak-star on every class; in particular any finite family is approximated simultaneously. No locally-null identification was used. Together with steps 1.1 and 2.1 this proves both claims. [F1, F5, F6, F8, F9, step 2.1, step 1.2, construct, algebra] ∎

## Remarks

Full weak-star density in all means was the false original scaffold claim. Under AC take $G=\mathbb T\times\mathbb R_{\mathrm{discrete}}$ and $A=\{1\}\times\mathbb R_{\mathrm{discrete}}$. The finite-detectability example shows that globally null Borel subsets of $A$ are countable, while $A$ is locally null and globally infinite. Extend the co-countable filter on the discrete factor to an ultrafilter $\mathcal U$. For a global $L^\infty$ class choose a bounded Borel representative and set $m(\varphi)=\lim_{d\to\mathcal U}\varphi(1,d)$. Global a.e. changes affect these values on a countable set only, so this is well-defined; compactness of bounded complex disks gives the limit, continuity of complex operations gives linearity, and the essential bound/positivity outside global null sets give positivity and norm one. It is a mean with $m(\mathbf1_A)=1$. Every probability pairing annihilates $\mathbf1_A$ by finite detectability, so the weak-star neighborhood $|\nu(\mathbf1_A)-1|<1/2$ misses all of $\mathcal P$. This mean is not asserted to be topologically invariant: smoothing annihilates $\mathbf1_A$ pointwise because its pullbacks are locally null and L1 pairings annihilate locally null sets. The corrected full-density conclusion is for topological means; continuous-test density remains valid for every mean.
