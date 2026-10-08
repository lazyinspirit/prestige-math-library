---
id: lem-averages-over-probability-densities-attain-the-essential-supremum
kind: lemma
title: Probability-density averages and locally detectable upper essential values
status: draft
origin: pipeline
dependency_level: 1
deps:
- lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets
- def-essential-supremum-with-respect-to-a-measure
- def-complex-haar-lp-spaces-and-compactly-supported-functions
- def-complex-haar-l-infinity-space
- def-left-haar-integral-and-left-haar-measure
- lem-counting-measure-on-a-discrete-group
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- def-the-one-dimensional-torus-and-normalized-haar-integral
- def-standard-topologies
- def-product-topology
- def-borel-sigma-algebra
- def-hausdorff-space
- def-group
- def-topological-group
- def-compact-space
- thm-finite-products-of-compact-spaces
- thm-compactness-under-continuous-maps
- thm-compact-subset-of-a-hausdorff-space-is-closed
- thm-uniqueness-of-left-haar-measure-up-to-scale
- def-nonnegative-lebesgue-integral
- prop-the-nonnegative-integral-agrees-with-the-simple-integral
- prop-order-and-scalar-rules-for-the-nonnegative-integral
- def-integrable-real-and-complex-functions-and-their-integrals
- thm-finite-and-countable-subadditivity-of-measures
- cor-archimedean-reciprocal
- thm-nonnegative-integral-zero-iff-zero-almost-everywhere
- def-axiom-of-choice
- lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
- thm-linearity-of-the-lebesgue-integral-on-l-one
- thm-integral-triangle-inequality
- lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure
proof_strategy: direct
axiom_use: Assume AC through Cc density when choosing the L1 approximants, and through the Haar and choice interfaces of the retained counterexamples. The support-value estimates and compact superlevel witnesses use no additional choice.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)
    url: https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf
    locator: Appendix G, Exercise G.6.2, printed p. 472 (PDF p. 478), the weak-star density of L1(G) probability densities in all means. The repaired finite-detectability/local-support/continuous-test-and-topological-mean claim is a local correction under the explicit global-null Haar convention; this source pointer does not certify the false original scaffold assertion.
  - title: 'Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 20: Invariant Mean implies Reiter''s Property'
    url: https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture20_2012_InvMeanImpliesReiter.pdf
    locator: Density of L1(G)_{1,+} in the set of means, PDF p. 9 (the Hahn–Banach separation argument). The repaired finite-detectability/local-support/continuous-test-and-topological-mean claim is a local correction under the explicit global-null Haar convention; this source pointer does not certify the false original scaffold assertion.
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $G$ be an arbitrary LCH group with fixed left Haar measure $\mu$, and put $\mathcal P=\{f\in L^1(G):f\ge0,\ \|f\|_1=1\}$. For a real global-$L^\infty$ class $h$, choose a bounded Borel representative and define its **locally detectable upper essential value** by
$$\beta(h):=\inf\{t\in\mathbb R:\mu(K\cap\{h>t\})=0\text{ for every compact }K\subseteq G\}.$$
This is a finite real number independent of that representative, and
$$\sup_{f\in\mathcal P}\int_Gfh\,d\mu=\beta(h).$$
For complex $h\in L^\infty(G)$ and $\alpha\in\mathbb C$, the exact support-function formula is
$$\sup_{f\in\mathcal P}\operatorname{Re}\left(\alpha\int_Gfh\,d\mu\right)=\beta(\operatorname{Re}(\alpha h)).$$
For every real bounded continuous $h$, one has $\beta(h)=\sup_{x\in G}h(x)$. All $L^\infty$ classes here retain the global-null convention of [[def-complex-haar-l-infinity-space]]; locally null functions are not identified with zero. The original global-norm formula and its naive global-essential-upper-value repair fail as explained in Remarks.

## Facts & Assumptions

**Given:** AC; an LCH group $G$ with fixed Haar measure; and a real or complex bounded Borel representative $h$.

[F1] A Borel superlevel set contains finite-positive mass exactly when some compact intersection detects positive mass ([[lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets]]).

[F2] Global $L^\infty$ classes have Borel representatives, can be clipped on a global null set to be bounded, and have the essential-supremum norm ([[def-complex-haar-l-infinity-space]], [[def-essential-supremum-with-respect-to-a-measure]]).

[F3] Under AC, $C_c(G;\mathbb C)$ is dense in $L^1(G)$ ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F4] The integral is linear on $L^1$, monotone on nonnegative functions and satisfies the integral triangle inequality; a nonnegative function has zero integral exactly when it is zero a.e. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-integral-triangle-inequality]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F5] Nonempty open sets have positive Haar measure, compact sets have finite measure, and relatively compact open neighborhoods exist in an LCH space ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]]).

[F6] Countable unions of measurable null sets are null by countable subadditivity ([[thm-finite-and-countable-subadditivity-of-measures]]).



## Proof

**Proof technique:** optimize over finite-detectable superlevels, using compactly supported approximants for the upper bound.

1.1 Global a.e. changes alter every compact superlevel intersection only on a null set, so the defining thresholds and $\beta$ are unchanged. The admissible thresholds form an upward-closed nonempty set, bounded below because $h$ is bounded and some relatively compact nonempty open set has positive finite measure by [F5]. Thus $\beta$ is finite. Every $t>\beta$ is admissible; on each fixed compact $K$, apply this to $t=\beta+1/n$ and [F6] to obtain $h\le\beta$ almost everywhere on $K$. Also a normalized indicator of any relatively compact nonempty open set shows $\mathcal P\ne\varnothing$. [F2, F5, F6, given, construct]

2.1 Fix $f\in\mathcal P$. By [F3] choose $u_n\in C_c(G)$ tending to $f$ in $L^1$ and put $v_n=|u_n|$. Then $v_n\in C_c(G)$, $v_n\ge0$, and $\|v_n-f\|_1\le\|u_n-f\|_1\to0$. On the compact support of $v_n$, step 1.1 gives $h\le\beta$ a.e., so $\int v_nh\le\beta\int v_n$. Since $h$ is bounded, [F4] gives $|\int(v_n-f)h|\le\|h\|_\infty\|v_n-f\|_1$ and $\int v_n\to\int f=1$. Passing to the limit proves $\int fh\le\beta$. [F3, F4, step 1.1, choose, algebra]

3.1 If $t<\beta$, it is not admissible, so some compact $K$ gives $E=K\cap\{h>t\}$ of positive finite measure. By [F1], $f_E=\mu(E)^{-1}\mathbf1_E\in\mathcal P$, and [F4] makes $\int f_E(h-t)>0$ because $h-t$ is strictly positive on $E$. Thus $\int f_Eh>t$. Letting $t\uparrow\beta$ and combining with step 2.1 proves the signed formula. For complex $h$ and $\alpha$, linearity gives $\operatorname{Re}(\alpha\int fh)=\int f\operatorname{Re}(\alpha h)$, so the same signed formula proves the complex support-function identity. [F1, F4, step 2.1, construct, algebra]

4.1 Let $h$ be real bounded continuous and put $s=\sup_Gh$. Since $h\le s$ everywhere, $\beta\le s$. For $t<s$, the superlevel $\{h>t\}$ is nonempty open. Choose a relatively compact nonempty open neighborhood $V$ inside it; [F5] gives $0<\mu(V)<\infty$, and its compact closure detects this superlevel. Hence $t$ is not admissible and $\beta\ge t$. Letting $t\uparrow s$ gives $\beta=s$, completing all claims. [F1, F5, step 1.1, step 3.1] ∎

## Remarks

On $\mathbb Z$ with counting Haar measure, $h=-1$ has global norm one but every probability average is $-1$, so the original signed formula with $\|h\|_\infty$ was false. Even replacing that norm by the global signed essential supremum is insufficient in arbitrary LCH generality. In the torus-times-uncountable-discrete example retained in [[lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets]], $A=\{1\}\times D$ is locally null and globally infinite. Thus $h=\mathbf1_A$ has global norm and global upper essential value one, while the finite-detectability lemma gives $\int fh=0$ for every $f\in\mathcal P$ and $\beta(h)=0$. Both original counterexamples remain; the formula now identifies the exact support value rather than silently imposing semifiniteness or changing global-null classes.
