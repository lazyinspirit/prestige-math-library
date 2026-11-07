---
id: lem-good-reduction-specialization-injective-on-abelian-variety-endomorphisms
kind: lemma
title: Endomorphisms extend uniquely and specialize injectively at good reduction
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-number-field
- cor-ring-of-integers-is-a-dedekind-domain
- lem-dedekind-localisation-at-nonzero-prime-is-dvr
- def-abelian-scheme
- cor-extension-of-k-morphisms-into-abelian-schemes
- lem-abelian-scheme-base-change-and-products
- lem-arith-abelian-scheme-torsion-specialization-unramified
- thm-complex-abelian-variety-uniformizes-as-complex-torus
- thm-algebraic-embedding-extension
- thm-fundamental-theorem-of-algebra-liouville-proof
justified_by: []
sources:
  references:
  - title: J. S. Milne, Complex Multiplication, July14,2020 version0.10
    url: https://www.jmilne.org/math/CourseNotes/CM.pdf
    locator: ChapterII section6, Proposition6.4, Corollary6.6 and Proposition6.10–Corollary6.11, printed49–51; extension and prime-to-residue-characteristic specialization. Injectivity is reconstructed here through the lattice action.
---

## Statement

Assume the Axiom of Choice. Let $k$ be a number field, let $P$ be a nonzero prime ideal of its ring of integers, put $R=\mathcal O_{k,P}$, and let $\mathcal A/R$ be an abelian scheme with generic fibre $A/k$ and special fibre $A_0/\kappa(P)$. Restriction induces a bijection
$$\operatorname{End}_R(\mathcal A)\xrightarrow{\sim}\operatorname{End}_k(A).$$
Extension followed by specialization therefore defines a unital ring homomorphism
$$\operatorname{sp}:\operatorname{End}_k(A)\longrightarrow\operatorname{End}_{\kappa(P)}(A_0),$$
and this homomorphism is injective. It extends injectively after tensoring with $\mathbb Q$. In particular every commutative endomorphism algebra acting on $A$ over $k$ acts faithfully on the special fibre through this specialization. No extension of the number field or completeness/henselian assumption on $R$ is required.

## Facts & Assumptions

**Given:** AC and the number field, prime, local ring and abelian scheme in the Statement.

[A1] AC implies DC and Countable Choice, which occur in the actual extension and torsion suppliers ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] A number field is a finite extension of $\mathbb Q$ ([[def-number-field]]); its integer ring is Dedekind and localization at a nonzero prime is a DVR ([[cor-ring-of-integers-is-a-dedekind-domain]], [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]). Abelian schemes are smooth proper group schemes with geometrically connected abelian-variety fibres; their products and base changes are abelian schemes ([[def-abelian-scheme]], [[lem-abelian-scheme-base-change-and-products]]).

[F2] Under AC/DC, over a Dedekind base, every morphism from the generic fibre of a smooth finite-type model into an abelian scheme extends uniquely to the model ([[cor-extension-of-k-morphisms-into-abelian-schemes]]).

[F3] For an abelian scheme over a DVR and a prime $\ell$ different from the residue characteristic, every $\ell^n$-torsion scheme is finite étale; after strict henselization, specialization bijects its geometric generic points with its special separable points ([[lem-arith-abelian-scheme-torsion-specialization-unramified]]).

[F4] Under AC the complex abelian variety $B$ is $V_B/\Lambda_B$, where $\Lambda_B$ is free of rank $2\dim B$, and algebraic endomorphisms act faithfully on this lattice by their complex-linear differentials ([[thm-complex-abelian-variety-uniformizes-as-complex-torus]]).

[F5] Under AC an embedding of a field extends across an algebraic extension into any algebraically closed field ([[thm-algebraic-embedding-extension]]). The complex numbers are algebraically closed ([[thm-fundamental-theorem-of-algebra-liouville-proof]]).

## Proof

1.1 By [F1], $\mathcal A$ and its self-product are smooth of finite type over the Dedekind scheme $\operatorname{Spec}R$. By [A1], [F2] applies to every $k$-endomorphism $a:A\to A$, giving a unique $R$-morphism $\widetilde a:\mathcal A\to\mathcal A$. This morphism respects the group law: the two morphisms from $\mathcal A\times_R\mathcal A$ expressing that identity agree on the generic fibre and therefore agree on the whole product by uniqueness in [F2]. The identity relation follows similarly from the smooth test $\operatorname{Spec}R$. Thus $\widetilde a$ is a group-scheme endomorphism. Applying the same uniqueness to restrictions gives precisely the asserted bijection of endomorphism sets. [A1, F1, F2, given, construct]

2.1 The extension of $a+b$ is $\widetilde a+\widetilde b$, and that of $ab$ is $\widetilde a\widetilde b$, since these equalities hold generically and [F2] gives uniqueness. The identities and zero map extend to their identities and zero maps. Specialization preserves these algebraic equations, so it defines the asserted unital ring homomorphism $\operatorname{sp}$. The zero-dimensional case has trivial endomorphism groups and already satisfies injectivity; below allow any dimension but choose a lattice basis only when its rank is positive. [F1, F2, step 1.1, algebra]

3.1 Suppose $\operatorname{sp}(a)=0$, and fix a prime $\ell$ different from the residue characteristic (take $2$ unless that characteristic is $2$, and then take $3$). For each $n\ge1$, $\widetilde a$ preserves $\mathcal A[\ell^n]$ because it commutes with multiplication by $\ell^n$. Its map on special-fibre geometric torsion points is zero. By the bijection in [F3] its map on geometric generic torsion points is zero as well. This bijection is natural for these endomorphisms: over the strict henselization the torsion scheme is a disjoint union of copies of the base, so a morphism of that scheme acts on a component by the same index on the generic and special fibres. Therefore $a$ kills all $A[\ell^n](\overline k)$ for every $n$. [A1, F3, step 2.1, algebra]

4.1 By [F1] and [F5], the usual embedding $\mathbb Q\hookrightarrow\mathbb C$ extends to $k\hookrightarrow\mathbb C$. Take $\overline k$ to be the elements of $\mathbb C$ algebraic over this copy of $k$. It is algebraically closed: finitely many polynomial coefficients lie in a finite extension of $k$, and any complex root, supplied by [F5], is algebraic over that finite extension and hence over $k$. Base change gives the complex abelian variety $A_{\mathbb C}$ and its algebraic endomorphism $a_{\mathbb C}$. Every complex point of its finite $\ell^n$-torsion scheme is algebraic over $k$: its coordinates belong to a finite $k$-algebra, since this torsion scheme is finite by [F3]. Thus step 3.1 says that $a_{\mathbb C}$ kills every complex $\ell^n$-torsion point. By [F4], these points are exactly $(\ell^{-n}\Lambda)/\Lambda$ in $V/\Lambda$, and $a_{\mathbb C}$ acts by an integral matrix $M$ on the full lattice $\Lambda$. Killing all those points means $M\Lambda\subseteq\ell^n\Lambda$ for every $n$. Each integer matrix entry is divisible by every $\ell^n$, so it is zero. The faithful lattice action in [F4] implies $a_{\mathbb C}=0$. [A1, F1, F3, F4, F5, step 3.1, construct, algebra]

5.1 Equality of the two $k$-morphisms $a$ and zero descends from $\mathbb C$ to $k$. Indeed their equalizer is a closed subscheme because the target is separated. On an affine chart its ideal becomes zero after tensoring with the field extension $\mathbb C/k$; a field extension is faithfully flat, since tensoring any nonzero vector with $1$ remains nonzero, as seen by extending it to a basis. Hence that ideal was zero. Thus $a=0$, proving injectivity of $\operatorname{sp}$. Tensoring an injective homomorphism of abelian groups with $\mathbb Q$ is injective: after expressing an element with one positive denominator, its image being zero means some positive integer multiple of its numerator is zero in the target; injectivity gives the same relation in the source. Consequently the rational endomorphism specialization is injective too. Restricting an injective ring map to any acting endomorphism subalgebra preserves faithfulness, which proves the final assertion. [F1, step 2.1, step 4.1, algebra] ∎

## Source-reading boundary

The actual cached Milne CM text was read in section6 at Proposition6.4, Corollary6.6 and Proposition6.10–Corollary6.11, printed49–51. The proof above uses the actual published local extension and finite-étale torsion suppliers rather than importing Milne's cited Néron-model or henselian arguments. The finite-torsion-to-lattice injection is reconstructed explicitly. No centralizer theorem, Frobenius norm/degree formula, Riemann-form algebraization or general good-reduction existence theorem is claimed.
