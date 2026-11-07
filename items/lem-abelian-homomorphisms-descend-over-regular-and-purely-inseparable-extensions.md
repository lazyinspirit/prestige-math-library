---
dependency_level: 1
id: lem-abelian-homomorphisms-descend-over-regular-and-purely-inseparable-extensions
kind: lemma
title: Abelian homomorphisms descend over regular and purely inseparable extensions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-abelian-variety-over-a-field
- def-abelian-scheme
- lem-regular-field-extension-tensor-products-are-domains
- lem-multiplication-by-n-on-abelian-scheme
- lem-abelian-scheme-fibrewise-constant-morphism-rigidity
- lem-nonaffine-fppf-descent-of-scheme-morphisms
- lem-nonaffine-finite-field-descent-of-morphisms
- lem-filtered-colimit-fp-scheme-stage
- lem-finite-etale-separability-and-hochschild-contraction
- lem-nonaffine-reduced-neutral-subgroup-over-perfect-field
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Conrad, Theorem 3.19 (regular and purely inseparable specializations)
    url: https://math.stanford.edu/~conrad/papers/Kktrace.pdf
---

## Statement

Assume AC and DC. Let $A,B$ be abelian varieties over a field $k$. Let $L/k$ be either a finitely generated regular extension, or a purely inseparable algebraic extension, possibly infinite. Then scalar extension gives a bijection
$$\operatorname{Hom}_k(A,B)\longrightarrow\operatorname{Hom}_L(A_L,B_L).$$

## Statement references

[Conrad, Theorem 3.19 (regular and purely inseparable specializations)](https://math.stanford.edu/~conrad/papers/Kktrace.pdf)


## Facts & Assumptions

[F1] [[lem-regular-field-extension-tensor-products-are-domains]] makes the double tensor of the regular extension an integral noetherian ring.

[F2] [[lem-multiplication-by-n-on-abelian-scheme]] gives the finite etale torsion kernels and their ranks, including after base change.

[F3] [[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]] gives the smooth identity component, of full dimension, of a reduced closed group over a perfect field.

[F4] [[lem-finite-etale-separability-and-hochschild-contraction]] gives the separability idempotent which makes the finite-etale diagonal open and closed.

[F5] [[lem-filtered-colimit-fp-scheme-stage]] spreads finitely presented maps and equality to a finite stage; [[lem-nonaffine-fppf-descent-of-scheme-morphisms]] descends maps with the double-pullback identity.

[F6] [[lem-abelian-scheme-fibrewise-constant-morphism-rigidity]] gives factorization as morphisms even on nonreduced bases; [[lem-nonaffine-finite-field-descent-of-morphisms]] gives the finite-field descent identity.

[A1] [[def-axiom-of-choice]] and [[def-dependent-choice]] are retained from the abelian-scheme and descent suppliers.



**Given:** The stated abelian varieties, extension, AC and DC.

## Proof

1.1 We first prove the torsion density needed below. Over an algebraically closed field, fix a prime $\ell$ different from the characteristic and let $G$ be an abelian variety of dimension $g$. Multiplication gives $\#G[\ell^n]=\ell^{2gn}$: the multiplication supplier gives finite étale kernels of those ranks. The reduced Zariski closure $H$ of $\bigcup_nG[\ell^n]$ is a subgroup: inversion preserves the union; products of its dense subset are dense in $H\times H$, so multiplication preserves the closure. Over the perfect ground field the reduced group $H$ is smooth. Its identity component $H^0$ is an abelian variety of some dimension $h$, and it has finitely many components, say $c$. In each component containing an $\ell^n$-torsion point, subtraction of that point injects the $\ell^n$-torsion points into $H^0[\ell^n]$. Hence $\ell^{2gn}\le c\ell^{2hn}$ for every $n$. This forces $h=g$, and the closed subgroup $H$ is all of $G$. Reducedness makes this schematic density as well. Dimension zero gives the same conclusion for the point group. [F2, F3, given, construct, algebra]

1.2 Now let $L/k$ be finite purely inseparable. The ring $R=L\otimes_kL$ is Artinian local and its reduction is $L$ via multiplication: after writing generators with characteristic-power equations, each difference $x\otimes1-1\otimes x$ is nilpotent, and quotienting by these differences gives $L$. The difference $u-v:A_R\to B_R$ of the two pullbacks vanishes on the reduced fibre and therefore sends every geometric fibre of the abelian scheme $A_R\to\operatorname{Spec}R$ to its zero point. The existing fibrewise-constant-morphism rigidity lemma gives $u-v=(u-v)e\,p=0$ as morphisms, controlling the nilpotents as well. The existing finite-field morphism descent theorem now descends the homomorphism uniquely to $k$. [F6, construct, algebra]

2.1 Suppose first that $L/k$ is finitely generated regular. Put $R=L\otimes_kL$, an integral noetherian ring by the regular-tensor lemma, and let $u,v:A_R\to B_R$ be the two pullbacks of the given homomorphism. They agree on the fibre of $\operatorname{Spec}R$ defined by multiplication $R\to L$. For every $n$, their restrictions to $A_R[\ell^n]$ land in $B_R[\ell^n]$, both finite étale schemes over $R$. Two maps between finite étale schemes over a connected base agreeing on one geometric fibre agree everywhere. Indeed the diagonal of a finite étale target is open and closed (affine-locally its separability idempotent splits the multiplication map); the equalizer and its complement are consequently open and closed in the finite étale source. The complement is finite locally free over the base, and its rank is locally constant. It has rank zero at the specified fibre, hence everywhere on the connected base. Thus $u,v$ agree on all these torsion schemes. [F1, F2, F4, step 1.1, construct, algebra]

3.1 Pass to the fraction field of $R$ and then its algebraic closure. Step 1.1 makes the two maps agree on the whole generic fibre. Since $A_R$ is flat over the domain $R$, restriction from each affine coordinate ring to its generic localization is injective. The ideal of the closed equalizer of $u,v$ therefore vanishes on every affine chart, so $u=v$ over $R$, not just on its generic fibre. [F1, step 1.1, step 2.1, algebra]

4.1 This equality descends the map to $k$ using only the existing finite-presentation and fppf descent suppliers. Spread the map over a finitely generated $k$-domain $R_0\subset L$ with fraction field $L$; finite-presentation spreading supplies such a stage and the group identities after a localization. Equality of its two pullbacks over $L\otimes_kL$ descends to equality over $R_0[1/s]\otimes_kR_0[1/s]$ for some $s\ne0$: this tensor product is a finite-presentation stage in the localization forming $L\otimes_kL$, and finitely many denominators in both factors can be absorbed into one $s$. The map $\operatorname{Spec}R_0[1/s]\to\operatorname{Spec}k$ is faithfully flat, quasi-compact and of finite presentation. Morphism descent therefore gives a map $A\to B$ over $k$. Its group identities and uniqueness can be checked after the faithful field extension to $L$. [F5, step 3.1, construct, algebra]

5.1 For an arbitrary purely inseparable algebraic $L/k$, a homomorphism and its finitely many defining identities descend to a finite purely inseparable subextension by finite-presentation spreading. Apply step 1.2 there. Faithfulness follows in either case because equality of maps is reflected by faithful scalar extension. Thus the asserted map on Hom groups is bijective in both cases. [F5, step 4.1, step 1.2, construct, algebra] ∎
