---
id: lem-arith-dual-and-poincare-bundle-finite-field-descent
kind: lemma
title: "Finite-field descent of the dual and the Poincare bundle"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-variety-over-a-field
  - lem-arith-picard-representation-by-generic-quotient-and-translates
  - lem-arith-rigidified-line-bundle-descent
  - lem-arith-coherent-kunneth-and-proper-image-dual
  - lem-nonaffine-finite-field-descent-scheme-with-affine-orbits
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - lem-filtered-colimit-fp-scheme-stage
  - lem-filtered-colimit-fp-sheaf-stage
  - lem-projective-coherent-cohomology-finite-and-vanishing
  - thm-abelian-variety-is-projective
  - thm-ample-powers-very-ample-proper-base
  - lem-ample-stable-positive-power
  - lem-ample-pullback-finite-morphism
  - thm-global-functions-proper-integral-variety
  - thm-segre-line-bundle-external-tensor
  - "def-rigidified-relative-picard-functor-and-dual-abelian-variety"
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (2012), Chapters 8-9 (dual abelian variety and Poincare bundle)"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied scheme and cohomology results. Let $A$ be an abelian variety over a field $k$. Then the algebraically trivial rigidified Picard subfunctor of $A/k$ is represented by an abelian variety $A^\vee$ of dimension $\dim A$, together with a normalized Poincare bundle $\mathcal P$ on $A\times_kA^\vee$, and the formation and full universal property are compatible with field extension.

## Facts & Assumptions

**Given:** AC and DC, an abelian variety $A$ over a field $k$.

[F1] Over an algebraically closed field the entire rigidified Picard functor is represented by a separated locally finite-type group scheme ([[lem-arith-picard-representation-by-generic-quotient-and-translates]]); its identity component is smooth proper of dimension $\dim A$ ([[lem-arith-coherent-kunneth-and-proper-image-dual]]); the universal rigidified bundle is obtained by evaluation at the identity map of the representative, and its restriction to $A\times B$ normalized on both axes gives the Poincare bundle ([[lem-arith-rigidified-line-bundle-descent]]).

[F2] Finite data spread from the algebraic closure to a finite extension: objects and morphisms of finite presentation descend along filtered colimits; morphisms and isomorphisms of finitely presented line bundles also descend to finite stages, and compatible morphisms descend along finite faithfully flat field extensions; and a scheme projective over a finite field extension is projective over the ground field ([[lem-filtered-colimit-fp-scheme-stage]], [[lem-filtered-colimit-fp-sheaf-stage]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]).

[F3] The affine-orbit descent for a finite-field extension applies to a smooth proper connected group scheme whose finite descent orbits lie in affine opens, and the orbit condition follows from Serre vanishing for a high power of a very ample line bundle and sections avoiding finitely many closed specializations ([[lem-nonaffine-finite-field-descent-scheme-with-affine-orbits]], [[thm-abelian-variety-is-projective]], [[thm-ample-powers-very-ample-proper-base]], [[lem-ample-stable-positive-power]], [[lem-ample-pullback-finite-morphism]], [[lem-projective-coherent-cohomology-finite-and-vanishing]], [[thm-global-functions-proper-integral-variety]], [[thm-segre-line-bundle-external-tensor]]).

## Proof

**Proof technique:** direct: construct over the algebraic closure, spread the finite data to a finite extension, then descend the representative.

1.1 Work over an algebraic closure and write $G$ for the represented full rigidified Picard functor and $B=G^0$ for its identity component. By [F1], $B$ is smooth proper connected of dimension $\dim A$, hence an abelian variety and projective. We establish the algebraically trivial identification directly. The connected components of the locally finite-type scheme $G$ are open and closed, and translation identifies them with cosets of $B$. A rigidified line-bundle family on a connected finite-type parameter scheme gives a morphism to $G$, whose image lies in one connected component; therefore differences of its geometric fibre classes lie in $B$. A chain of such differences has the same property. Conversely, restricting the universal rigidified bundle on $A\times G$ to $A\times B$ gives a connected finite-type family whose identity fibre is trivial and whose fibre at any geometric point $b$ has class $b$, proving that every $B$-class is algebraically trivial. For an arbitrary test scheme $T$, its classifying morphism $T\to G$ factors through the open subscheme $B$ exactly when all geometric fibre classes lie in $B$: the inverse image of the complementary open-and-closed components is empty if it has no geometric point. This argument also retains every nilpotent of $T$, since factorization through an open imposes no reduction. Thus $B$ represents the entire algebraically trivial rigidified subfunctor on all tests. Restricting the universal bundle and normalizing on both axes now gives the Poincare bundle. [F1, given, construct]

2.1 For arbitrary $k$, spread $B$, a projective embedding, its group operations and the rigidified Poincare bundle from $\bar k$ to a finite extension $K/k$ by [F2]. The resulting natural transformation to the algebraically trivial rigidified functor is an isomorphism after base change to $\bar k$. For an affine $K$-test $T$ and a rigidified algebraically trivial bundle on $A_T$, its unique classifying morphism over $T_{\bar k}$ and the isomorphism with the pulled-back Poincare bundle descend to $T_{K'}$ for some finite extension $K'/K$ inside $\bar k$, by the finite-presentation statements of [F2]. Uniqueness is detected after faithful field extension: two classifying morphisms for the same bundle become equal over $\bar k$ by [F1], hence were equal already. This also applies on the finite cover's double overlap, including its nilpotents, by tensoring that overlap with $\bar k$ over $K$ and using the all-test universal property over $\bar k$. Thus the local classifying morphism has equal pullbacks and descends along the finite fppf cover $T_{K'}\to T$ by [F2]; the bundle isomorphism descends by module descent and rigidity. Affine-test extensions glue uniquely, proving the universal property over $K$ on every test scheme. [F1, F2, step 1.1, algebra]

3.1 Consequently $B_K$ carries a canonical descent datum over $K\otimes_kK$ from the uniqueness of representatives of the same base-changed functor; the datum includes the entire nonreduced tensor algebra and satisfies the cocycle by uniqueness. The scheme $B_K$ is smooth, proper, connected, projective over $K$, hence as a $k$-scheme projective too, since $\operatorname{Spec}K\to\operatorname{Spec}k$ is finite and projective. Every finite descent orbit lies in an affine open of this projective scheme: choose a closed specialization of each of its finitely many points; for a high power of a very ample line, Serre vanishing makes the map to the fibres at those finitely many closed points surjective, and a section nonzero at each of them has an affine nonvanishing locus; nonvanishing at a specialization implies nonvanishing at the original point. The exact finite-field descent lemma [F3] now descends $B_K$, including inseparable $K$. [F2, F3, step 2.1, construct]

4.1 Module descent gives the Poincare bundle $\mathcal P$, compatible morphism descent gives the group law and the rigidifications, and the sheaf isomorphism descends, proving the full universal property over $k$ and its compatibility with field extension. [F2, step 3.1, algebra] ∎ 