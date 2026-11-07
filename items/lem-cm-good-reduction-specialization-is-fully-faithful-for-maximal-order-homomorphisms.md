---
id: lem-cm-good-reduction-specialization-is-fully-faithful-for-maximal-order-homomorphisms
kind: lemma
title: "Maximal-order CM homomorphisms lift uniquely from good reduction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-abelian-scheme
  - lem-abelian-scheme-base-change-and-products
  - thm-smooth-morphism-formally-smooth-finite-presentation
  - cor-extension-of-k-morphisms-into-abelian-schemes
  - thm-nonzero-ideals-in-dedekind-domains-are-invertible
  - thm-invertible-ideals-and-rank-one-projective-modules
  - thm-projective-module-characterizations
  - cor-ring-of-integers-is-a-dedekind-domain
  - thm-complex-abelian-variety-uniformizes-as-complex-torus
  - lem-cm-tate-module-rank-one-over-finite-adeles
  - thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic
  - lem-abelian-homomorphisms-descend-over-regular-and-purely-inseparable-extensions
  - lem-cm-centralizer-in-good-reduction-is-the-cm-algebra
  - lem-arith-abelian-scheme-torsion-specialization-unramified
  - def-k-isogeny-of-abelian-varieties
  - thm-proper-quasi-finite-is-finite
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication (2007)"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "Proposition1.35 and its complete proof, printed15, and Application2.5, printed18; passages read. Projective-ideal transforms are constructed locally below rather than assumed."
    - title: "J. S. Milne, Complex Multiplication, version0.10 (2020)"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "Proposition7.9, printed54, complete proof read; only the actual regular-extension Hom supplier is used for descent of complex morphisms."
verification: {}
---

## Statement

Assume AC. Let $k\subset\mathbb C$ be a number field, $v$ a finite prime of $k$, and $\mathcal A,\mathcal B$ abelian schemes over $O_{k,v}$, with generic fibres $A,B$ and special fibres $A_0,B_0$. Suppose a CM algebra $E$ acts on $A$ and $B$ over $k$, that
$$E\cap\operatorname{End}_{\bar k}(A_{\bar k})=E\cap\operatorname{End}_{\bar k}(B_{\bar k})=O_E,$$
and that $A_{\bar k}$ and $B_{\bar k}$ are $E$-isogenous. Fix compatible algebraic closures at $v$. Extension and specialization induce an isomorphism
$$\operatorname{Hom}_{O_E}(A_{\bar k},B_{\bar k})\xrightarrow{\sim}\operatorname{Hom}_{O_E}(A_{0,\bar\kappa},B_{0,\bar\kappa}).$$
All these homomorphisms are defined and specialize over a single finite extension of $k$ with a chosen prime above $v$. An $O_E$-linear isogeny of the geometric special fibres lifts to an $E$-linear isogeny of the generic fibres. Products of CM fields and primes ramified in $E$ are allowed. No assertion about arbitrary non-CM homomorphisms or nonmaximal orders is made.

## Facts & Assumptions

**Given:** AC, the number-field good models, their maximal-order CM actions, their geometric generic $E$-isogeny, and the compatible geometric fibres in the Statement.

[A1] AC implies DC for the extension and regular-field descent interfaces. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Products and base changes of abelian schemes are abelian schemes; kernels commute with arbitrary base change. A locally finitely presented formally smooth morphism is smooth, with lifts required only locally on the test scheme. [[def-abelian-scheme]] [[lem-abelian-scheme-base-change-and-products]] [[thm-smooth-morphism-formally-smooth-finite-presentation]]

[F2] Over a Dedekind base a generic-fibre morphism from a smooth finite-type scheme into an abelian scheme extends uniquely. [[cor-extension-of-k-morphisms-into-abelian-schemes]]

[F3] Integer rings of number fields are Dedekind; their nonzero fractional ideals are invertible and finite projective of rank one. A finitely generated projective module is a direct summand of a finite free module: split the finite free cover using projectivity. These facts apply factorwise to a finite product of integer rings. [[cor-ring-of-integers-is-a-dedekind-domain]] [[thm-nonzero-ideals-in-dedekind-domains-are-invertible]] [[thm-invertible-ideals-and-rank-one-projective-modules]] [[thm-projective-module-characterizations]]

[F4] A complex abelian variety is its complex tangent space modulo a full lattice, functorially and faithfully for homomorphisms. A CM rational homology module is free of rank one over $E$. Holomorphic group homomorphisms between complex abelian varieties are algebraic. [[thm-complex-abelian-variety-uniformizes-as-complex-torus]] [[lem-cm-tate-module-rank-one-over-finite-adeles]] [[thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic]]

[F5] Homomorphisms of abelian varieties descend along finitely generated regular field extensions under AC/DC. [[lem-abelian-homomorphisms-descend-over-regular-and-purely-inseparable-extensions]]

[F6] For a maximal-order CM good model, the geometric special-fibre rational centralizer is $E$ and its integral centralizer is $O_E$. Prime-to-residue-characteristic geometric torsion specializes isomorphically, naturally for homomorphisms. [[lem-cm-centralizer-in-good-reduction-is-the-cm-algebra]] [[lem-arith-abelian-scheme-torsion-specialization-unramified]]

[F7] An isogeny is a surjective homomorphism with finite kernel. A proper quasi-finite morphism is finite; every nonempty affine variety over an algebraically closed field has a point over that field. [[def-k-isogeny-of-abelian-varieties]] [[thm-proper-quasi-finite-is-finite]] [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]

## Proof

1.1 Put $R=O_E$. Its elements extend to the good models by [F2], preserving their ring and group identities by uniqueness. Work first with any finite projective $R$-module $P$ and an abelian scheme $\mathcal G/S$ with an $R$-action, over the connected Noetherian local bases used here. Choose $P=eR^n$ for an idempotent matrix $e\in M_n(R)$ by [F3], acting as a group endomorphism of $\mathcal G^n$. Define $\mathcal G^P=\ker(1-e)$ and $\mathcal G^{1-e}=\ker e$. Both kernels are closed and finitely presented: the zero section of the separated finitely presented group scheme is a closed immersion of finite presentation. The maps $x\mapsto(ex,(1-e)x)$ and $(y,z)\mapsto y+z$ give inverse scheme isomorphisms $\mathcal G^n\cong\mathcal G^P\times_S\mathcal G^{1-e}$. The factors are proper as closed subschemes. They are formally smooth: given a map from a square-zero thickening's closed subscheme into $\mathcal G^P$, lift its composite into the smooth $\mathcal G^n$ locally and apply $e$ to the lift. It then lands in $\mathcal G^P$ and retains the given restriction. Thus [F1] makes the factors smooth. On a geometric fibre, $e$ maps the connected variety $\mathcal G^n$ onto the factor, so that factor is connected. Its tangent rank at the identity is locally constant, and the base is connected. Both factors are therefore abelian schemes, allowing the zero-dimensional factor. [A1, F1, F2, F3, given, construct, algebra]

2.1 This construction represents the functor $T\mapsto P\otimes_R\mathcal G(T)$: since $P=eR^n$, its value is exactly $e\mathcal G(T)^n=\ker(1-e)(T)$. It is independent of the presentation by this identification and the elementary uniqueness of a representing object. It commutes with arbitrary base change, either by the kernel equation or by [F1]. In particular an $R$-linear homomorphism $\mathcal G\to\mathcal G^P$ is precisely a column of $R$-linear homomorphisms $\mathcal G\to\mathcal G$ fixed by $e$, so $$\operatorname{Hom}_R(\mathcal G,\mathcal G^P)=e\operatorname{End}_R(\mathcal G)^n=P\otimes_R\operatorname{End}_R(\mathcal G).$$ The same formula holds for abelian varieties over any field. It is natural for restriction and specialization: the maps on the right are simply entrywise restriction or specialization of the column. This proves the needed ideal-transform and Hom formula without importing a tensor construction of abelian varieties. [F1, F3, step 1.1, construct, algebra]

3.1 Embed the geometric generic fibres in $\mathbb C$. Choose rank-one $E$-bases for their rational homology using [F4]. The images of their full lattices are fractional $R$-ideals $I,J\subset E$: they are finitely generated full integral lattices stable under $R$, and clearing an integer denominator places them in $R$. By [F3] they are invertible, including factorwise for product $E$. Set $P=JI^{-1}$. The given $E$-isogeny shows that the tangent complex structures agree under an $E$-linear rational identification: a complex-linear differential induces the rational homology map. For the transform $A^P$ in steps 1.1–2.1 the complex tangent is $e(T_0A)^n$ and its lattice is $e\Lambda_A^n$. Indeed the direct-sum idempotent splitting of the lattice and vector space identifies the exponential kernel of the factor with that image lattice. The multiplication isomorphism $P\otimes_R I\cong J$ now identifies its tangent and lattice with those of $B$, compatibly with $E$ and the common complex structure. Thus $A^P_{\mathbb C}\cong B_{\mathbb C}$ as complex $E$-tori. The isomorphism and its inverse are algebraic by [F4]. [F3, F4, step 1.1, step 2.1, choose, construct, algebra]

4.1 This complex isomorphism descends to $\bar k$: its finite chart coefficients lie in some finitely generated field extension $L/\bar k$ inside $\mathbb C$. Because $\bar k$ is algebraically closed and has characteristic zero, $L/\bar k$ is regular (it is separable and has no new elements algebraic over its ground field). Apply [F5] to the isomorphism and its inverse; the inverse identities descend by faithful field extension. Their finitely many algebraic coefficients lie in one finite extension $k'/k$. Extend the chosen prime to $k'$ and base change the two good models; [F1] supplies their good reduction. By [F2] the generic isomorphism and its inverse extend uniquely to inverse isomorphisms $\mathcal A^P\cong\mathcal B$ over the localized integer ring. Their $R$-linearity follows by the same uniqueness. We may work over this one extension henceforth. [A1, F1, F2, F5, step 3.1, construct, algebra]

5.1 The $R$-linear generic endomorphism ring of $A_{\bar k}$ is precisely $R$: its rational centralizer is $E$, because by [F4] its rational homology is the rank-one $E$-module, whose $E$-linear endomorphism ring is $E$. The assumed full-order intersection makes the integral centralizer $R$. It follows that every such generic endomorphism is already the specified action of an element of $R$, defined over $k$ and its model. By [F6] the geometric special-fibre $R$-linear endomorphism ring is also exactly this same $R$. Consequently step 2.1 identifies both $$\operatorname{Hom}_R(A_{\bar k},A^P_{\bar k})\quad\hbox{and}\quad\operatorname{Hom}_R(A_{0,\bar\kappa},(A_0)^P_{\bar\kappa})$$ with $P$. Naturality makes specialization the identity on $P$, hence an isomorphism. Transport by the extended isomorphism of step 4.1 gives the asserted Hom isomorphism for $A,B$. The description as columns of elements of $R$ also shows all these maps are defined over the single chosen $k'$ and its residue field. [F2, F4, F6, step 2.1, step 4.1, algebra]

6.1 Finally suppose the special map $\mu_0$ is an isogeny, and let $\mu$ be its lifted homomorphism. Choose a rational prime $\ell$ different from the residue characteristic. By [F6] its action on the rational $\ell$-adic modules is identified by specialization with that of $\mu_0$ and hence is invertible. Explicitly the geometric points of the finite kernel of $\mu_0$ form a finite group, annihilated by an integer $d>0$. Any element in the kernel of its map on $T_\ell$ is a compatible sequence of points in this finite group, so it is killed by $d$ and is zero because $T_\ell$ is torsion-free. Both Tate modules have rank $2\dim A$ by [F4] and specialization in [F6]. Thus the induced map after tensoring with $\mathbb Q_\ell$ is an injective linear map of equal finite-dimensional spaces and is invertible. By [F4] the generic rational homology is a rank-one $E$-module, and the Hom description in step 5.1 identifies $\mu$ with multiplication by an element of $P\subset E$. Its invertible $\ell$-adic action means each field-factor component is nonzero, so it belongs to $E^\times$. Its complex-linear lattice map therefore has invertible differential and finite-index image. The complex torus map is surjective with finite kernel. Its algebraic kernel therefore has finitely many complex points and dimension zero by [F7]; being closed in a proper variety, it is proper and quasi-finite and hence finite by [F7]. The algebraic image is closed (the homomorphism from the proper source to its separated target is proper) and contains every complex point. By [F7] its complement is empty, proving surjectivity. These properties are detected after faithful field extension, so the original algebraic lift is an isogeny as well. This proves the last assertion without restricting ramification or excluding nonsimple CM types. [F4, F6, F7, step 3.1, step 5.1, algebra] ∎

## Source-reading boundary

Milne2007 Proposition1.35 and its complete proof, printed15, Application2.5, printed18, and Milne CM Proposition7.9, printed54, were actually read. The idempotent construction, lifting smoothness, Hom computation and base-change compatibility are supplied above. No ordinary Tate isogeny theorem, arbitrary lifting of special endomorphisms, ideal-transform representability theorem or external reciprocity theorem is imported. Only maximal-order CM-linear Hom groups are asserted to lift.
