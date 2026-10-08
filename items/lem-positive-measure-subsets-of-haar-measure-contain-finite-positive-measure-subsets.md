---
id: lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets
kind: lemma
title: Finite Haar mass, compact detection, and integrable pairings
status: draft
origin: pipeline
dependency_level: 0
axiom_use: Assume AC for the retained torus-times-uncountable-discrete counterexample and its Haar existence/uniqueness interfaces. The equivalence and annihilation proof uses only finite regularity selections, countable subadditivity, and explicit integrable threshold sets once Haar measure is fixed.
proof_strategy: direct
deps:
- def-left-haar-integral-and-left-haar-measure
- def-borel-sigma-algebra
- def-radon-measure-on-an-lch-space
- cor-existence-of-left-and-right-haar-measures
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- def-the-one-dimensional-torus-and-normalized-haar-integral
- def-standard-topologies
- def-product-topology
- def-group
- def-topological-group
- def-locally-compact-space
- def-compact-space
- def-hausdorff-space
- thm-finite-products-of-compact-spaces
- lem-products-preserve-t0-t1-and-hausdorff
- thm-compactness-under-continuous-maps
- thm-uniqueness-of-left-haar-measure-up-to-scale
- thm-r-uncountable
- def-axiom-of-choice
- def-complex-haar-lp-spaces-and-compactly-supported-functions
- prop-order-and-scalar-rules-for-the-nonnegative-integral
- prop-the-nonnegative-integral-agrees-with-the-simple-integral
- thm-finite-and-countable-subadditivity-of-measures
- thm-nonnegative-integral-zero-iff-zero-almost-everywhere
- thm-compact-subset-of-a-hausdorff-space-is-closed
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Donald L. Cohn, Measure Theory, 2nd ed., §7.2
    url: https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf
    locator: '§7.2, printed p. 190 (PDF p. 207): regularity requires compact finiteness, outer regularity on measurable sets, and compact inner approximation only for open sets. The repaired finite-detectability/local-support/continuous-test-and-topological-mean claim is a local correction under the explicit global-null Haar convention; this source pointer does not certify the false original scaffold assertion.'
  - title: Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017
    url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
    locator: §2.5, pp. 63–64, normalized Haar integral on the circle. The repaired finite-detectability/local-support/continuous-test-and-topological-mean claim is a local correction under the explicit global-null Haar convention; this source pointer does not certify the false original scaffold assertion.
  - title: Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press, 2008; author-hosted complete text)
    url: https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf
    locator: 'Appendix G.3 and Exercise G.6.2, printed pp. 453 and 471–472: intended weak-star-density route; Exercise G.6.2 gives no proof or semifiniteness qualification. The repaired finite-detectability/local-support/continuous-test-and-topological-mean claim is a local correction under the explicit global-null Haar convention; this source pointer does not certify the false original scaffold assertion.'
  - title: Nicolas Bourbaki, Integration I (Chapters 1–6), Chapter V and Historical Notes on Haar measure
    url: https://link.springer.com/book/10.1007/978-3-642-59312-3
    locator: Original scaffold pointer for the Haar regularity/semifiniteness route; not used as evidence under the repository's explicit Radon convention. The repaired finite-detectability/local-support/continuous-test-and-topological-mean claim is a local correction under the explicit global-null Haar convention; this source pointer does not certify the false original scaffold assertion.
  - title: 'Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 20: Invariant Mean implies Reiter''s Property (University of Sydney Honours lecture notes, 11 October 2012)'
    url: https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture20_2012_InvMeanImpliesReiter.pdf
    locator: Weak-star density lemma and Hahn–Banach criterion, PDF p. 9; the source route is not valid under the present Haar convention without extra hypotheses. The repaired finite-detectability/local-support/continuous-test-and-topological-mean claim is a local correction under the explicit global-null Haar convention; this source pointer does not certify the false original scaffold assertion.
verification:
  precheck: pass
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $G$ be an arbitrary locally compact Hausdorff group with its fixed left Haar measure $\mu$ under [[def-left-haar-integral-and-left-haar-measure]], and let $A\subseteq G$ be Borel. The following are equivalent:

1. $A$ contains a Borel $B$ with $0<\mu(B)<\infty$.
2. Some compact $K\subseteq G$ has $\mu(A\cap K)>0$.
3. Some nonnegative $f\in L^1(G)$ has $\int_A f\,d\mu>0$.

Call $A$ **locally null** when $\mu(A\cap K)=0$ for every compact $K$. Thus a locally null Borel set is annihilated by every $L^1$ pairing, even though it need not be globally $\mu$-null. Positive global Haar measure alone does not imply these equivalent conditions; the counterexample in Remarks retains the original scaffold's obstruction. No sigma-compactness, semifiniteness or locally-null quotient convention is assumed.

## Facts & Assumptions

**Given:** AC; an LCH group $G$ with fixed Haar measure $\mu$; and a Borel set $A$.

[F1] Haar measure is outer regular on Borel sets, inner regular on opens and finite on compact sets ([[def-left-haar-integral-and-left-haar-measure]], [[def-radon-measure-on-an-lch-space]]).

[F2] Nonnegative $L^1$ classes have Borel representatives and finite integral; indicators have integral equal to the measure, and integrals are monotone and positively homogeneous ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F3] Countable unions of measurable null sets are null by countable subadditivity; a nonnegative measurable function has zero integral exactly when it is zero almost everywhere ([[thm-finite-and-countable-subadditivity-of-measures]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F4] Compact subsets of a Hausdorff space are closed, hence Borel ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-borel-sigma-algebra]]).

## Proof

**Proof technique:** detect positive finite mass by compact intersections and by integrable threshold sets.

1.1 Suppose (1), and put $b=\mu(B)>0$. By [F1] choose open $O\supseteq B$ with $\mu(O)<5b/4<\infty$, then compact $K\subseteq O$ with $\mu(K)>\mu(O)-b/4$. Finite additivity inside the finite-measure $O$ gives $\mu(O\setminus K)<b/4$, and therefore $\mu(B\cap K)\ge b-\mu(O\setminus K)>0$. Since $B\subseteq A$, this proves (2). Conversely, under (2), $B=A\cap K$ is Borel by [F4] and has positive measure at most $\mu(K)<\infty$, proving (1). This argument uses compact inner approximation only for the open finite-measure set $O$. [F1, F4, choose, algebra]

2.1 Under (1), $f=\mathbf1_B$ is nonnegative in $L^1$ and $\int_Af=\mu(B)>0$, so (3) holds. Conversely, suppose (3) and take a nonnegative finite-valued Borel representative of $f$, modifying a null set if necessary. For $n\ge0$, each $E_n=A\cap\{f>1/(n+1)\}$ is Borel with $\mu(E_n)\le(n+1)\int_Gf<\infty$ by [F2]. If every $E_n$ were null, their union $A\cap\{f>0\}$ would be null by [F3], implying $\int_Af=0$, a contradiction. Thus some $E_n$ has positive finite measure and proves (1). The equivalence also proves that every locally null Borel $A$ has $\int_Af=0$ for all nonnegative $f\in L^1$; applying this to $|u|$ gives annihilation of every complex $L^1$ pairing. [F2, F3, step 1.1, construct, algebra] ∎

## Remarks

The original claim that every globally positive Borel set contains a finite-positive subset is false under the actual Haar convention. Under AC let $D=\mathbb R$ be discrete, $G=\mathbb T\times D$, and $A=\{1\}\times D$. The compact open slices have common Haar measure $c>0$ and normalized torus measure $c\lambda$. Every compact set meets finitely many slices. For countable $S\subseteq D$, arcs around $1$ in its slices can have total measure below any prescribed positive number; open inner regularity and outer regularity give $\mu(\{1\}\times S)=0$. For uncountable $S$, every open cover has positive arc measure in each slice. Some positive reciprocal threshold is exceeded on uncountably many slices; arbitrarily large finite unions of compact subsets of those slices force the open cover to have infinite measure, and outer regularity gives $\mu(\{1\}\times S)=\infty$. Every subset of $A$ is Borel because it is $\{1\}\times S$ with $S$ clopen in $D$. Thus $A$ is locally null and globally infinite, with no finite-positive Borel subset. This explicit obstruction is retained; the repaired equivalence gives its precise finite-detectability domain instead of changing the measure convention.
