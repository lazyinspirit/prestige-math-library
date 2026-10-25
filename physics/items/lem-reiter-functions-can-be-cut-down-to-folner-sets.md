---
id: lem-reiter-functions-can-be-cut-down-to-folner-sets
kind: lemma
title: Reiter functions can be cut down to Følner sets
status: published
origin: pipeline
dependency_level: 1
deps:
- def-reiter-condition-p1
- def-left-folner-net-for-a-locally-compact-group
- lem-layer-cake-identity-for-nonnegative-integrable-functions
- def-complex-haar-lp-spaces-and-compactly-supported-functions
- def-left-haar-integral-and-left-haar-measure
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- def-l-p-space-as-a-quotient-by-null-functions
- def-measurable-function-between-measurable-spaces
- thm-lebesgue-measure-is-a-radon-measure-on-rn
- thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
- thm-lebesgue-measure-of-a-box-of-every-kind
- cor-rn-is-locally-compact-and-sigma-compact
- lem-metrics-on-rn
- thm-metric-hausdorff-separation
- thm-uniqueness-of-left-haar-measure-up-to-scale
- thm-choice-implies-dependent-implies-countable-choice
- thm-heine-borel-r
- def-axiom-of-choice
- def-countable-choice
- def-topological-group
- thm-finite-products-of-compact-spaces
- thm-compactness-under-continuous-maps
- lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
- lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
- thm-linearity-of-the-lebesgue-integral-on-l-one
- thm-integral-triangle-inequality
- thm-nonnegative-integral-zero-iff-zero-almost-everywhere
- thm-chebyshev-markov-inequality-for-the-integral
- thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
- def-borel-sigma-algebra
- thm-compact-subset-of-a-hausdorff-space-is-closed
- def-compact-space
- def-locally-compact-space
- def-radon-measure-on-an-lch-space
proof_strategy: direct
axiom_use: Assume full AC. It supports the complete L1 and translation-continuity suppliers and supplies Countable Choice for the layer-cake/Lebesgue-level measure interface. It selects countably many finite compact-orbit partitions. All averaging is through finite Borel partitions in L1; no global Bochner measurability, sigma compactness or semifinitization is assumed.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)
    url: https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf
    locator: Appendix G, Theorem G.5.1, proof of (P1) implies Følner's Property, printed pp. 468–469; the proof begins with a compact Q containing e; this original route assumes e in Q. The full arbitrary-positive-compact-Q quantitative claim and stronger bound here are proved locally by finite-partition parity averaging, scalar left-Haar averaging and measurable coarea; no stronger source theorem is asserted.
  - title: 'Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 19: Reiter''s Property and the Følner Condition'
    url: https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture19_2012_Reiter.pdf
    locator: Slides 14–18 (PDF pp. 14–18), proof that Reiter's Property implies the Følner Condition; the proof begins with compact Q containing e; this original route assumes e in Q. The full arbitrary-positive-compact-Q quantitative claim and stronger bound here are proved locally by finite-partition parity averaging, scalar left-Haar averaging and measurable coarea; no stronger source theorem is asserted.
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume AC. Let $G$ be a locally
compact Hausdorff group with fixed left Haar measure $\mu$, let $Q\subseteq G$
be compact with $\mu(Q)>0$, let $\varepsilon>0$, and let $f\in L^1(G)$ satisfy
$f\ge0$, $\lVert f\rVert_1=1$ and
$$\sup_{x\in Q^2}\lVert L_xf-f\rVert_1\le\frac{\varepsilon\mu(Q)}{2\mu(Q^2)},$$
where $Q^2:=\{xy:x,y\in Q\}$. Then there is a Borel set $U\subseteq G$ with
$0<\mu(U)<\infty$ and
$$\sup_{x\in Q}\frac{\mu(xU\mathbin\triangle U)}{\mu(U)}\le2\varepsilon.$$
Consequently Reiter's condition (P1) implies the left Følner condition: for
every compact $Q$ and every $\varepsilon>0$ a Borel set $U$ with
$0<\mu(U)<\infty$ and
$$\sup_{x\in Q}\frac{\mu(xU\mathbin\triangle U)}{\mu(U)}\le2\varepsilon$$
exists.
The supremum over an empty compact test set in the consequent is taken to be $0$.

## Facts & Assumptions

**Given:** AC; an LCH group $G$ with fixed left Haar measure $\mu$; a compact $Q$ with $\mu(Q)>0$; $\varepsilon>0$; and a nonnegative norm-one $f\in L^1(G)$ satisfying the Statement's $Q^2$ estimate.

[F1] Left translations $L_a$ are linear isometries on $L^1(G)$, satisfy $L_aL_b=L_{ab}$ and have norm-continuous vector orbits under AC ([[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]]).

[F2] Under AC, complex $L^1(G)$ is complete. Integrals are linear, obey the integral triangle inequality and are monotone on nonnegative functions; a nonnegative function has zero integral exactly when it is zero a.e. ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-integral-triangle-inequality]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F3] Left Haar measure is left invariant, finite on compact sets and positive on nonempty opens; every identity has a compact neighborhood. Finite products and continuous images preserve compactness ([[def-left-haar-integral-and-left-haar-measure]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[def-locally-compact-space]], [[def-topological-group]], [[thm-finite-products-of-compact-spaces]], [[thm-compactness-under-continuous-maps]]).

[F4] Under Countable Choice, layer cake gives $\int_0^\infty\mu(\{u\ge t\})dt=\|u\|_1$ and the analogous symmetric-difference identity for two nonnegative integrable functions, without global sigma-finiteness. The same proof with intervals $(0,u)$ instead of $(0,u]$ gives the strict-superlevel version; their endpoints have zero Lebesgue length ([[lem-layer-cake-identity-for-nonnegative-integrable-functions]]).

[F5] Chebyshev bounds $\mu(\{u>t\})\le\|u\|_1/t$ for $u\ge0$, $t>0$. Tonelli interchanges nonnegative product-measurable integrals on sigma-finite spaces, and pointwise limits of measurable functions are measurable ([[thm-chebyshev-markov-inequality-for-the-integral]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[F6] Compact subsets of a Hausdorff space are closed, hence Borel, and a finite open cover can be disjointified into Borel cells by finite differences. Compactness gives finite subcovers ([[def-compact-space]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-borel-sigma-algebra]]).

[F7] Reiter (P1) supplies a probability density for every compact test and positive tolerance; the left Følner condition uses finite-positive Borel sets and compact-uniform boundary defects ([[def-reiter-condition-p1]], [[def-left-folner-net-for-a-locally-compact-group]]).

[A1] AC implies Countable Choice by the declared implication, supplying the hypothesis in [F4]; AC also chooses the finite-partition data for each positive integer below ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).



## Proof

**Proof technique:** parity-average the supplied density, then combine scalar left-Haar averaging with measurable coarea to select a single uniform Følner level set.

1.1 Put $K=Q^2$, $q=\mu(Q)$ and $k=\mu(K)$. By [F3, F6], $K$ is compact Borel, $k<\infty$, and for any $c\in Q$, $cQ\subseteq K$ gives $k\ge q>0$. Let $\delta=\sup_{b\in K}\|L_bf-f\|_1$, which is finite by the bound $2\|f\|_1=2$, and satisfies $\delta\le\varepsilon q/(2k)$. Construct the compact-orbit probability average directly in $L^1$: for each $n$, cover the compact orbit by norm balls of radius $1/(2n)$, pull them back to a finite open cover of $Q$, and disjointify by [F6]. Choose a sample from each nonempty cell; this gives a finite Borel partition $Q=\bigsqcup_jE_{n,j}$ with samples $y_{n,j}\in E_{n,j}$ such that $\|L_yf-L_{y_{n,j}}f\|_1<1/n$ on each nonempty cell. Set $S_n=\sum_j\mu(E_{n,j})L_{y_{n,j}}f/q$. Intersecting the partitions for $n,m$ and comparing their samples through a point of each nonempty intersection gives $\|S_n-S_m\|_1\le1/n+1/m$. Completeness in [F2] gives a limit $g$. Every $S_n$ is a nonnegative probability density; convergence makes the imaginary part and negative real part of $g$ have zero $L^1$ norm, hence $g\ge0$, and norm continuity gives $\|g\|_1=1$. This compact finite-partition mean requires no pointwise formula for extended convolution. [F1, F2, F3, F6, A1, given, construct, algebra]

2.1 For each $b\in Q$, $by_{n,j}\in K$, so $\|L_bS_n-f\|_1\le\delta$ and passage to the norm limit gives $\|L_bg-f\|_1\le\delta$. For $a\in Q$, fix any $c\in Q$; [F1] gives $\|L_af-g\|_1=\|L_cL_af-L_cg\|_1\le\|L_{ca}f-f\|_1+\|f-L_cg\|_1\le2\delta$. Thus $h=(f+g)/2$ is a probability density with $\|L_ah-h\|_1\le3\delta/2$ for $a\in Q$. For $x=ab\in K$, $\|L_xg-g\|_1\le\|L_a(L_bg-f)\|_1+\|L_af-g\|_1\le3\delta$; together with $\|L_xf-f\|_1\le\delta$, this gives $\|L_xh-h\|_1\le2\delta$ on $K$. No factors were commuted. [F1, F2, step 1.1, construct, algebra]

2.2 For any finite-positive Borel $U$, write $d_a(U)=\mu(aU\mathbin\triangle U)=\|L_a\mathbf1_U-\mathbf1_U\|_1$ and $C_P(U)=\int_P d_a(U)\,d\mu(a)$ for $P=Q,K$. For every $x,a\in Q$, insert $L_xL_a\mathbf1_U$ and use [F1] to obtain $d_x(U)\le d_a(U)+d_{xa}(U)$. Integrating over $a\in Q$, left invariance and $xQ\subseteq K$ give $q\,d_x(U)\le C_Q(U)+\int_{xQ}d_b(U)\,d\mu(b)\le C_Q(U)+C_K(U)$. Therefore $\sup_{x\in Q}d_x(U)/\mu(U)\le(C_Q(U)+C_K(U))/(q\mu(U))$. This scalar averaging inequality needs no identity in $Q$, inverse-word cover, overlap inference or right-Haar factor. [F1, F2, F3, step 1.1, algebra]

3.1 Choose a nonnegative finite-valued Borel representative of $h$ and put $U_t=\{h>t\}$ for $t>0$. By [F5], $H(t)=\mu(U_t)\le1/t<\infty$; it is nonincreasing and hence Borel measurable. If $s\downarrow t$, the sets $U_s$ increase to $U_t$, so countable additivity gives $\|\mathbf1_{U_s}-\mathbf1_{U_t}\|_1\to0$. For each fixed $t$, $D(a,t)=d_a(U_t)$ is continuous in $a$ by [F1]. To prove product measurability, set $t_n(t)=2^{-n}(\lfloor2^nt\rfloor+1)>t$, which decreases to $t$. For each positive integer $j$, $t_n(t)=j2^{-n}$ on $[(j-1)2^{-n},j2^{-n})\cap(0,\infty)$; thus a strict superlevel set of $D(a,t_n(t))$ is the countable union of the products of $\{a:D(a,j2^{-n})>c\}$ with these Borel intervals. The $a$-sets are open by [F1], so $D(a,t_n(t))$ is product-measurable. The estimate $|D(a,t_n(t))-D(a,t)|\le2\|\mathbf1_{U_{t_n(t)}}-\mathbf1_{U_t}\|_1$ tends to zero uniformly in $a$ by [F1], so [F5] gives product measurability of $D$. This constructs the bridge even when $G$ is not second countable; it does not treat arbitrary Borel functions on products as product-measurable. [F1, F3, F5, F6, step 2.1, construct, algebra]

4.1 For each $a$, the strict-superlevel layer-cake identity [F4] gives $\int_0^\infty D(a,t)dt=\|L_ah-h\|_1$, while $\int_0^\infty H(t)dt=1$. Haar measure restricted to $Q$ and $K$ is finite; the level measure is sigma-finite, so product measurability from step 3.1 permits [F5] on each restricted product. For $F(t)=C_Q(U_t)+C_K(U_t)$ this yields $\int_0^\infty F(t)dt\le B:=\delta(3q/2+2k)$ by step 2.1. When $H(t)=0$, left invariance gives $F(t)=0$. There is a $t>0$ with $H(t)>0$ and $F(t)\le B H(t)$: otherwise the nonnegative measurable difference $F-BH$ would be strictly positive on $\{H>0\}$, a set of positive level measure since $\int H=1$, contradicting $\int(F-BH)\le0$ and [F2]. This also handles $\delta=B=0$. Choose that $t$ and set $U=U_t$. [F2, F3, F4, F5, step 2.1, step 3.1, choose, algebra]

5.1 With $r=k/q\ge1$, steps 2.2 and 4.1 give $\sup_{x\in Q}\mu(xU\mathbin\triangle U)/\mu(U)\le B/q=\delta(3/2+2r)\le\varepsilon(1+3/(4r))\le7\varepsilon/4<2\varepsilon$. Also $U$ is Borel and $0<\mu(U)<\infty$ by step 4.1. This proves the full original quantitative claim, including $\delta=0$, with the stronger derived bound $7\varepsilon/4$; the stronger bound is a local conclusion, not an assertion about the cited source's identity-containing route. [step 1.1, step 2.2, step 4.1, algebra]

6.1 Finally assume (P1) and fix any compact target $T$ and $\varepsilon>0$. Choose a compact identity neighborhood $C$ by [F3] and put $Q_0=T\cup C$. It is compact and has positive finite measure by [F3, F6]; so does $Q_0^2$. Apply [F7] on $Q_0^2$ with tolerance $\varepsilon\mu(Q_0)/(2\mu(Q_0^2))$, and apply the just-proved quantitative clause to this density and $Q_0$. The resulting $U$ satisfies the promised $2\varepsilon$ bound on $Q_0$, hence on $T$. Empty $T$ has defect zero under the stated convention. Since the requested tolerance can also be replaced by half of any desired Følner tolerance, this is the full left Følner condition. No compact generation, countability or semifiniteness was used. [F3, F6, F7, step 5.1, construct] ∎

## Remarks

The source extraction proofs begin with $e\in Q$. Their overlap inference $\mu(xQ^2\cap Q^2)\ge\mu(Q)$ is false for an unqualified $Q$: on the additive real line, $Q=[1,2]$ and $x=3/2$ give $Q^2=[2,4]$ and $(x+Q^2)\cap Q^2=[7/2,4]$, of half the measure of $Q$. Also for $Q=[100,101]$ every $A\subseteq Q^2=[200,202]$ has $A-A\subseteq[-2,2]$, so $Q\subseteq AA^{-1}$ is impossible. These examples refute that route, not the quantitative conclusion. The local proof above preserves the arbitrary-positive-compact-$Q$ claim by scalar left-Haar averaging and coarea after parity symmetrization, replacing the invalid overlap route without adding $e\in Q$ or changing the repository's Haar/null conventions.
