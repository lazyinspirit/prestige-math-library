---
id: lem-gts-skyscraper-semistable-phase-amplitude
kind: lemma
title: Phase and cohomology bounds from semistable skyscrapers
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-step3-fresh-2026-11-04
domain: mathematics
library: physics
category: string-theory
deps:
- def-gts-bridgeland-stability-condition-with-support-property
- lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- lem-eventual-global-generation-coherent-twists
- cor-regular-local-residue-field-projective-dimension-dimension
- lem-projective-dimension-from-last-nonzero-betti-number
- thm-localisation-and-polynomial-extension-of-regular-rings
- def-axiom-of-choice
dependency_roles:
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  lem-eventual-global-generation-coherent-twists: mathematical-premise
  cor-regular-local-residue-field-projective-dimension-dimension: mathematical-premise
  lem-projective-dimension-from-last-nonzero-betti-number: mathematical-premise
  thm-localisation-and-polynomial-extension-of-regular-rings: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Chunyi Li, A remark on stability conditions on smooth projective varieties
    url: https://arxiv.org/pdf/2601.22994v1
    locator: Theorem 6.5; proof locally strengthened to use only semistable skyscrapers
axiom_use: ZF + AC
dependency_level: 1
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume AC. Let $S=\mathbb P^n_{\mathbb C}$, $n\ge0$, and let $\sigma=(Z,\mathcal P)$ be a locally finite finite-rank-support stability condition on $D^b(\operatorname{Coh}S)$. Suppose every skyscraper sheaf $k(x)$ is $\sigma$-semistable of phase $1$. Write $\operatorname{Coh}(S)[a,b]$ for the extension closure of sheaves $F[j]$ with $a\le j\le b$, where $H^q(F[j])=0$ except in degree $q=-j$. Then
$$\mathcal P((0,1])\subseteq\operatorname{Coh}(S)[0,n],\qquad \operatorname{Coh}(S)\subseteq\mathcal P((-n,1]).$$
For $E\in\mathcal P((0,1])$ and any coherent $F$, the derived tensor product satisfies
$$E\otimes^{\mathbf L}F[r]\in\operatorname{Coh}(S)[r,r+2n].$$
In particular, if $r=n+1$ and the tensor product is nonzero, all its phases are strictly greater than $1$.

## Statement references

[[def-gts-bridgeland-stability-condition-with-support-property]]

## Facts & Assumptions

**Given:** The objects and hypotheses in the Statement, including AC. Zero tensor factors are permitted and impose no phase inequality.

[F1] [[def-gts-bridgeland-stability-condition-with-support-property]] gives finite HN filtrations and phase-Hom vanishing. The phase of $A[j]$ is the phase of $A$ plus $j$.

[F2] [[lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space]] supplies finite locally free resolutions of coherent sheaves on $S$. [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]] supplies natural perfect trace pairings for vector bundles on $S$.

[F3] [[cor-regular-local-residue-field-projective-dimension-dimension]] gives a length-$d$ free resolution of the residue field of a regular local ring of dimension $d$; [[lem-projective-dimension-from-last-nonzero-betti-number]] says that vanishing of $\operatorname{Tor}_{d+1}(k,M)$ forces a finite module $M$ to have projective dimension at most $d$. [[thm-localisation-and-polynomial-extension-of-regular-rings]] makes the stalks of $S$, which are localizations of polynomial rings, regular of dimension at most $n$; at a closed point this follows directly from the Koszul complex on the $n$ affine coordinates minus their values.

[F4] [[lem-eventual-global-generation-coherent-twists]] supplies eventual generation when a global vector-bundle resolution is needed. Its inherited AC is retained.

## Proof

1.1 At every stalk $R$ of $S$, the residue-field Koszul resolution and balanced tensor product compute $\operatorname{Tor}_i^R(k,M)=0$ for $i>\dim R$, for every finite $M$. The projective-dimension criterion in F3 therefore gives projective dimension at most $\dim R\le n$. Finite module resolutions consequently have Tor amplitude $[-n,0]$. Bounded coherent complexes are perfect locally: resolve their finitely many cohomology modules and use their truncation triangles to totalize finite free complexes. For a sheaf on projective $S$, global negative-twist surjections from F4 and the preceding stalk bound make the $n$th syzygy locally free (a finite presentation whose stalk is free is free on a neighborhood, by lifting a basis and applying Nakayama to kernel and cokernel). Thus global finite locally free resolutions also exist, and bounded coherent complexes are in the triangulated closure of vector bundles. [F2, F3, F4, given, construct]

2.1 For perfect complexes $A,B$, finite total Hom complexes and the trace of F2 give the functorial duality
$$\operatorname{Hom}(A,B[i])\cong\operatorname{Hom}(B,A\otimes\omega_S[n-i])^*.$$
Here the pairing is evaluation followed by the trace, with the total-complex signs. To verify perfectness, first take vector bundles $A,B$, where the assertion is precisely F2 applied to $A^\vee\otimes B$; it is then preserved by shifts, finite sums and cones in either argument, by the long exact Hom sequences and their duals. Step 1.1 extends it to all bounded coherent complexes. This derives the complex duality used here rather than attributing coherent-complex duality directly to a vector-bundle statement. [F2, step 1.1, algebra]

3.1 Let $E\in\mathcal P(\theta)$ with $0<\theta\le1$. For $i<0$, $\operatorname{Hom}(E,k(x)[i])=0$ since $\theta>1+i$. For $i>n$, step 2.1 identifies this group with the dual of $\operatorname{Hom}(k(x),E[n-i]\otimes\omega_S)$, which is isomorphic to $\operatorname{Hom}(k(x),E[n-i])$ after choosing an identification of the one-dimensional fiber of $\omega_S$ at $x$ with $\mathbb C$. The latter vanishes because $1>\theta+n-i$. This uses semistability of $k(x)$, with no stability assumption and no invariance of $\sigma$ under tensoring by $\omega_S$. [F1, step 2.1, given, algebra]

4.1 Localize $E$ at a closed point $x$. Its perfect stalk has a bounded finite free complex representative. Whenever a differential matrix has a unit entry, elementary row and column operations split off a two-term contractible free summand; repeating leaves a bounded minimal complex with all differentials in the maximal ideal. Applying $\operatorname{Hom}_R(-,k(x))$ then gives zero differential, so its terms in degree $-i$ are dual to $\operatorname{Ext}^i_R(E_x,k(x))$. Global derived Hom into $k(x)$ is this local Hom: a finite vector-bundle representative has a Hom complex supported at $x$, whose higher sheaf cohomology vanishes. Step 3.1 makes every term outside degrees $[-n,0]$ zero. Hence $H^q(E)_x=0$ outside those degrees. Every nonzero coherent sheaf on a finite-type complex scheme has a closed point in its support, so $E$ has cohomology only in $[-n,0]$. Taking the finite HN filtration extends this inclusion from semistables to $\mathcal P((0,1])$. [step 1.1, step 3.1, F1, algebra]

5.1 A semistable object of phase $>1$, normalized by an integer shift into phase $(0,1]$, is by step 4.1 in standard cohomological degrees at most $-1$. Thus its Hom to any sheaf is zero. A semistable object of phase $\le-n$ normalizes by a shift of at most $-n-1$ and lies in standard cohomological degrees at least $1$, so its Hom from any sheaf is zero. The same holds for finite extensions. Apply the top and bottom HN truncation triangles of a sheaf: if a top factor had phase $>1$, its nonzero map to the sheaf would contradict the first vanishing; if a bottom factor had phase $\le-n$, the nonzero map from the sheaf to that factor would contradict the second. Equivalently these are the orthogonal descriptions of the truncation subcategories furnished by a slicing. Therefore every sheaf lies in $\mathcal P((-n,1])$. [F1, step 4.1, algebra]

6.1 Step 4.1 gives $E$ cohomological amplitude $[-n,0]$. The sheaf $F$ has Tor amplitude $[-n,0]$ by step 1.1. Tensoring their finite locally free complexes, or using the finite Tor spectral sequence of their standard cohomology filtrations, gives $E\otimes^{\mathbf L}F$ cohomological amplitude $[-2n,0]$. Its standard truncation filtration therefore has factors $H^{-j}(E\otimes^{\mathbf L}F)[j]$ for $0\le j\le2n$. After shift $r$, step 5.1 puts each factor in $\mathcal P((r+j-n,r+j+1])$, contained in $\mathcal P((r-n,r+2n+1])$. For $r=n+1$ the lower endpoint is $1$, strictly excluded. Extensions preserve that strict lower bound. This proves all assertions, including $n=0$ and zero objects. [step 1.1, step 4.1, step 5.1, F1, algebra] ∎

## Remarks

Li's Theorem 6.5 invokes the stable-skyscraper bound from Bridgeland, K3 Lemma 10.1, although Li's Corollary 6.4 explicitly supplies semistable skyscrapers. The weaker bound proved here needs only the stated semistability and suffices after using one more step in the partial resolution. No stable-skyscraper conclusion is imported.
