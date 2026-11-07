---
dependency_level: 0
id: lem-pointed-genus-one-curve-has-a-regular-group-law-by-relative-Riemann-Roch
kind: lemma
title: "A pointed genus-one curve has a regular group law by relative Riemann–Roch"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-genus-one-canonical-bundle-trivial
  - thm-full-riemann-roch-divisor
  - lem-proper-flat-cohomology-perfect-complex
  - lem-fibre-injective-map-flat-cokernel-noetherian-target
  - thm-proper-quasi-finite-is-finite
  - lem-quasi-finite-morphism-fibre-characterization
  - thm-finite-flat-modules-over-local-rings-are-free
  - thm-nakayama-lemma
  - thm-differentials-smooth-locally-free
  - thm-global-functions-proper-integral-variety
  - def-abelian-variety-over-a-field
  - thm-proper-ideal-contained-in-maximal-ideal
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Elliptic Curves, second edition, Chapter I Proposition 4.10 and Remark 4.11, printed pp. 32–33; relative-family regularity supplied locally"
      url: https://www.jmilne.org/math/Books/EC2.pdf
verification: {}
---

## Statement

Assume AC. Let $E/F$ be a smooth proper geometrically integral curve of
genus one and let $O\in E(F)$. There is a unique commutative algebraic
group law on $E$ with identity $O$ for which, over every field extension,
$P+Q$ is the unique point with divisor class $[P+Q-O]$. Thus $E$ is an
abelian variety over $F$. Its tangent bundle is trivialized by translation
from its one-dimensional tangent space at $O$.

More precisely, for every Noetherian $F$-scheme $T$ and invertible sheaf
$L$ on $E_T$ of degree one on every geometric fibre, $p_*L$ is invertible
and commutes with arbitrary base change. Its evaluation map
$p^*p_*L\to L$ is injective and cuts out an effective Cartier divisor
finite flat of rank one over $T$. That divisor is the graph of a unique
morphism $T\to E$. No Picard-scheme representability is assumed.

## Facts & Assumptions

**Given:** AC, the pointed curve $(E,O)$, and, in the family assertion,
the Noetherian base $T$ and the fibrewise degree-one invertible sheaf $L$.

[A1] AC implies DC, as required by the finite-projective cohomology
supplier. [[def-axiom-of-choice]]
[[thm-choice-implies-dependent-implies-countable-choice]]

[F1] On a smooth proper genus-one curve the canonical bundle is trivial;
Riemann–Roch gives $h^0(M)=\deg M$ and $h^1(M)=0$ for every positive-degree
invertible sheaf, also after field extension. A nonzero degree-one section
therefore has a divisor of degree one.
[[thm-genus-one-canonical-bundle-trivial]]
[[thm-full-riemann-roch-divisor]]

[F2] Proper flat coherent cohomology over a Noetherian affine base is
computed by a bounded finite-projective complex compatible with every
algebra base change. [[lem-proper-flat-cohomology-perfect-complex]]

[F3] Over a Noetherian local target, a map from a finite module into a
base-flat module which is injective on the closed fibre is injective
and has base-flat cokernel.
[[lem-fibre-injective-map-flat-cokernel-noetherian-target]]

[F4] Finite-type morphisms with finite geometric fibres are quasi-finite;
proper quasi-finite morphisms are finite. Finite flat modules over local
Noetherian rings are free; Nakayama detects a finite-module surjection.
[[lem-quasi-finite-morphism-fibre-characterization]]
[[thm-proper-quasi-finite-is-finite]]
[[thm-finite-flat-modules-over-local-rings-are-free]]
[[thm-nakayama-lemma]]

[F5] Smooth curve differentials are locally free of rank one. Proper
geometrically integral curves have only scalar global functions. An
abelian variety is a smooth proper geometrically integral algebraic group.
[[thm-differentials-smooth-locally-free]]
[[thm-global-functions-proper-integral-variety]]
[[def-abelian-variety-over-a-field]]

[F6] Under AC every proper ideal is contained in a maximal ideal. Over
an algebraically closed field, maximal ideals of polynomial algebras are
evaluation ideals. Thus every nonempty locally closed finite-type locus
has a rational closed point; closed points are dense, and a regular
function on a reduced finite-type algebra vanishing on all of them is
zero (apply the same assertion to its nonempty principal open if it is
nonzero).
[[thm-proper-ideal-contained-in-maximal-ideal]]
[[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]

## Axiom use

AC supplies DC to [F2] and is inherited from [F1], [F3] and [F4]. The
construction uses no choice of a Picard scheme, divisor-class parameter
space, or algebraic closure descent datum.

## Proof

**Proof technique:** direct; the unique degree-one effective divisor in
an explicitly supplied line-bundle family constructs addition regularly.

1.1 Work locally on the Noetherian base $T$. Every geometric fibre of $L$ has $h^0=1$ and $h^i=0$ for $i>0$ by [F1]. A computing complex from [F2] is locally homotopy equivalent to one free module of rank one in degree zero: at a chosen residue field split off each nonzero differential by a unit minor, lift the corresponding row and column operations to the local ring, and remove its elementary two-term identity summand. The remaining complex has zero differentials on that residue field. Its terms in nonzero degrees have rank zero because the fibre cohomology in those degrees vanishes, while its degree-zero term has rank one. Thus the remaining local complex is a single free rank-one term. Each of the finitely many operations holds on a neighbourhood. This proves that $p_*L$ is invertible, that all higher cohomology vanishes there, and that $p_*L$ commutes with arbitrary base change. These identifications are the natural cohomology identifications from [F2], so glue on overlaps. [A1, F1, F2, given, algebra]

2.1 Trivialize $p_*L$ and $L$ locally on $E_T$. Evaluation is multiplication by an element $s$. On a geometric fibre this is the nonzero section spanning its one-dimensional section space. Since that fibre is integral, multiplication by $s$ on its local rings is injective. Faithful field extension detects this assertion on the residue-field fibre as well. The target line bundle is flat over $T$, since $E_T\to T$ is smooth and $L$ is invertible. Apply [F3] at each local ring to evaluation. It is injective and its cokernel is flat over $T$. In a local frame its image is the principal ideal $(s)$ with $s$ a nonzerodivisor. It therefore defines an effective Cartier divisor $D\subset E_T$, and $\mathcal O_D$ is flat over $T$. Each geometric fibre is the zero divisor of a degree-one section, hence one reduced rational point by [F1]. [F1, F3, algebra, step 1.1]

3.1 The divisor $D$ is closed in the proper scheme $E_T$, hence proper over $T$, and its geometric fibres are finite. By [F4] it is finite; its algebra is a finite flat module of fibre rank one. Locally it is free of rank one. The unit map $\mathcal O_T\to p_*\mathcal O_D$ is an isomorphism on every residue field, and Nakayama makes it surjective; a surjection between free rank-one modules over a local ring is an isomorphism. Thus $D\to T$ is an isomorphism. Its inclusion into $E_T$ is exactly the graph of a unique morphism $T\to E$. This proves the family assertion even for nonreduced $T$, and all constructions commute with base change by step 1.1. [F4, algebra, step 2.1]

4.1 Take $T=E\times_F E$ with its two universal points $P,Q$. Their graphs and the constant graph of $O$ are Cartier divisors on $E_T$: a section of a smooth relative curve is locally cut out by one relative parameter, a nonzerodivisor; equivalently its conormal sheaf is the pullback of the rank-one relative differentials in [F5], and a smooth coordinate at the section gives that parameter. Form $L=\mathcal O(\Gamma_P+\Gamma_Q-\Gamma_O)$, whose fibre degree is one. Steps 1.1–3.1 produce a morphism $m:E\times E\to E$ with $m(P,Q)$ in the class $[P+Q-O]$. Similarly on $T=E$ the bundle $\mathcal O(2\Gamma_O-\Gamma_P)$ constructs a morphism $i:E\to E$ in the class $[2O-P]$. Over every field a degree-one class has exactly one effective representative by [F1]; its degree-one divisor is a rational point. In particular the displayed rules characterize $m$ and $i$ uniquely. [F1, F5, construct, algebra, step 3.1]

5.1 Over an algebraic closure, the map $P\mapsto[P-O]$ is injective: if $P-Q$ were principal with $P\ne Q$, its defining function would be a nonconstant member of the one-dimensional space $H^0(E,\mathcal O(Q))$, which by [F1] consists of constants. The rule in step 4.1 adds these classes. Addition of divisor classes is commutative and associative, $[O-O]=0$, and $[i(P)-O]=-[P-O]$. Injectivity proves commutativity, associativity, the identity rule and the inverse rule on all geometric points. Their two sides are morphisms on products of $E$. Those products are geometrically reduced, and equality on their geometric closed points implies equality of morphisms to separated $E$: on affine charts the difference of coordinate functions vanishes at all closed points and hence is zero in a reduced finite-type algebra over an algebraically closed field; faithful field extension descends the equality. This proves the algebraic-group identities, including characteristics two and three. Any competing regular law with the class rule agrees on geometric points and hence as a morphism. [F1, F5, F6, algebra, step 4.1]

6.1 The curve with this law is an abelian variety by [F5]. Translation identifies its tangent bundle with $E\times_F T_OE$: differentiating $(P,Q)\mapsto P+Q$ in the second variable at $Q=O$ gives a regular bundle map to $T_E$, and differentiating translation by $-P$ gives its regular inverse. Smoothness and relative dimension one make $T_OE$ one-dimensional. This proves the final assertion without a choice of an invariant coordinate or differential. [F5, algebra, step 5.1] ∎
