---
id: lem-indecomposable-type-a-soergel-bimodules-are-classified-by-top-support
kind: lemma
title: "Indecomposable type-A Soergel bimodules are classified by their normalized top support"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 1
deps: [def-real-type-a-soergel-category-and-scalar-extension, lem-type-a-soergel-generators-are-finite-free-on-both-sides, lem-type-a-support-filtration-multiplicities-are-intrinsic, lem-type-a-top-support-layers-are-controlled-by-reflection-localization, thm-the-type-a-soergel-hom-formula, lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln, Satz 6.14 and its full proof"
      url: "https://arxiv.org/pdf/math/0403496"
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules, Sections 3.5 and 6.1"
      url: "https://arxiv.org/pdf/1212.0791v2"
verification:
  precheck: pass
---

## Statement

Over $k=\mathbb Q$ or $k=\mathbb R$, the bimodule Soergel category has unique finite Krull-Schmidt decompositions. For every $x\in S_n$ there is a unique normalized indecomposable $B_x$ supported on $\{y:y\le x\}$ with top $\Delta$ layer exactly $\Delta_x=R_x(-\ell(x))$. It is the unique summand with the $x$ graph of any reduced Bott-Samelson word for $x$. Every indecomposable is exactly one $B_x(d)$. Its finite-dimensional degree-zero endomorphism algebra is local, with residue field $k$ under restriction to its rank-one top layer. No Kazhdan-Lusztig character identity is assumed.

## Facts & Assumptions

**Given:** The idempotent-complete finite additive tensor category of type-A Bott-Samelson bimodules, over either field, with shifts $M(d)_i=M_{i+d}$ ([[def-real-type-a-soergel-category-and-scalar-extension]]).

[F1] Words are finite free on either side, and their summands are graded free; all fixed-degree Hom spaces are finite-dimensional, because morphisms are determined by finitely many homogeneous generator images in finite-dimensional homogeneous pieces ([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]], [[thm-the-type-a-soergel-hom-formula]]).

[F2] Both flags and their canonical Bruhat layers are intrinsic and pass to summands. If $x$ is maximal in the support of $M$, its $x$ graph is the top layer in a compatible enumeration; its inclusion and quotient satisfy $\Gamma_xM\cong\Gamma^xM\,p_x$. Both graph modules are free, and the same identification holds for a summand of a reduced word ([[lem-type-a-support-filtration-multiplicities-are-intrinsic]], [[lem-type-a-top-support-layers-are-controlled-by-reflection-localization]]).

[F3] The flagged Hom formula is proved for a flagged source and a Soergel target, and for a Soergel source and a flagged target. For a canonical flag extension its Hom sequence is short exact: prove this degree by degree for word carriers from the three graded Hom rank formulas, and then project to the carrier idempotent ([[thm-the-type-a-soergel-hom-formula]]).

[F4] The flag recursion gives support of a word among its subexpressions. A reduced word of length $m$ for $x$ has its $x$ layer exactly $\Delta_x$, since the only subexpression of product $x$ has all $m$ letters, with generator degree $m$ ([[lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]]).

## Proof

1.1 A finite-dimensional endomorphism algebra and the absence of nontrivial idempotents imply locality. Indeed for an endomorphism $f$ its polynomial minimal relation splits into a power of $T$ and a factor coprime to $T$. The polynomial Chinese remainder identity produces an idempotent separating the nilpotent and invertible parts; indecomposability forces one part to vanish. Thus every $f$ is invertible or nilpotent, and a nonunit $f$ has $1-f$ invertible. Nonunits form a two-sided ideal: multiplication cannot make a nonunit invertible in a finite-dimensional algebra; if two nonunits summed to a unit, dividing their sum would express $1$ as two nonunits, contradicting the invertibility of $1-f$. This is the unique maximal ideal. Its powers eventually vanish: if a power stabilizes, take a minimal finite generating list for that stable ideal and express its last generator using coefficients in the maximal ideal; the invertibility of $1-a$ for such a coefficient eliminates that generator, a contradiction. [F1, algebra]

2.1 Split idempotents until indecomposable summands remain. Each split reduces the positive right rank of its summand, so there are only finitely many splits. The resulting summands have local endomorphism rings by step 1.1. Decompositions are unique: in two finite decompositions, express the identity of one indecomposable as the sum of its composites through the summands of the other. The local maximal ideal cannot contain every composite; an invertible composite gives a split inclusion into one indecomposable summand, hence an isomorphism to it. Remove the common summand and repeat. This proves finite Krull-Schmidt existence and uniqueness. [F1, step 1.1, algebra]

3.1 Decompose a reduced word for $x$. Its top layer is a single $\Delta_x$ by [F4], and the top-layer functor is additive by [F2]. Exactly one indecomposable summand therefore has this graph, with precisely this normalized layer; call it $B_x$. All other summands have support strictly below $x$. This constructs a normalized candidate without any character conjecture. [F2, F4, step 2.1]

4.1 Let $M$ be any nonzero Soergel object and choose a maximal support label $x$. The two graph layers $\Gamma_xM$ and $\Gamma^xM$ are identified by multiplication by $p_x$ as in [F2]. Choose one homogeneous basis element $m$ of the latter, and let $d$ make its degree equal to the generator degree of $\Gamma^xB_x(d)$. Choose graph maps $f_0:\Gamma^xB_x(d)\to\Gamma^xM$ taking that generator to $m$, and $g_0:\Gamma_xM\to\Gamma_xB_x(d)$ which takes the corresponding element $p_xm$ to the generator $p_xb$ and kills the other basis elements. These maps are homogeneous of degree zero and satisfy the identity on the rank-one $x$ layer. [F2, step 3.1, choose]

5.1 Lift these maps to bimodule maps $f:B_x(d)\to M$ and $g:M\to B_x(d)$. The quotient map $M\to\Gamma^xM$ is the last step of a $\nabla$ flag with $x$ last; its kernel is flagged, so [F3] lifts the map $B_x(d)\to\Gamma^xM$. The inclusion $\Gamma_xM\to M$ is the first step of a $\Delta$ flag with $x$ first; its quotient is flagged, so [F3] lifts $g_0$ followed by $\Gamma_xB_x(d)\to B_x(d)$. The first lifted map on the quotient and the second on the submodule agree with the prescribed graph maps. The image identity $\Gamma_xM=\Gamma^xM p_x$ makes their composite $gf$ act as the identity on $\Gamma_xB_x(d)$. Thus $gf$ is not nilpotent, and is invertible by step 1.1. Rescale $g$ by its inverse to exhibit $B_x(d)$ as a summand of $M$. [F2, F3, step 1.1, step 4.1]

6.1 If $M$ is indecomposable, step 5.1 gives $M\cong B_x(d)$. If two normalized candidates were obtained from different reduced expressions for $x$, applying that same splitting argument to either candidate makes them isomorphic, because their normalized rank-one top degrees force $d=0$. Distinct labels cannot be isomorphic, by their maximal support; distinct shifts at a fixed label cannot be isomorphic, by their top generator degrees. This proves classification and reduced-word independence. [step 3.1, step 5.1]

7.1 Restriction of degree-zero endomorphisms of $B_x$ to its rank-one top layer is a unital homomorphism onto $k$, since homogeneous scalars act there and its endomorphism ring in degree zero is $k$. Its kernel is a maximal ideal. Locality in step 1.1 makes this the unique maximal ideal, so the residue field is $k$. All selections were from finite supports and finite homogeneous bases, and no choice axiom beyond finite choice is used. The statement follows from steps 2.1, 3.1, 6.1 and this residue calculation. [step 1.1, step 2.1, step 6.1] ∎
