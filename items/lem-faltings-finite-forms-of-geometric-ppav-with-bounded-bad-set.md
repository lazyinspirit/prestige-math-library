---
id: lem-faltings-finite-forms-of-geometric-ppav-with-bounded-bad-set
kind: lemma
title: Finitely many number-field forms of a fixed geometric principally polarized
  abelian variety with bounded bad set
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-abelian-variety-over-a-field
- def-good-reduction-and-abelian-scheme-model
- def-polarization-of-an-abelian-variety
- lem-polarized-abelian-automorphisms-finite-and-faithful-on-three-torsion
- lem-arith-abelian-scheme-torsion-specialization-unramified
- thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism
- thm-faltings-finite-extensions-unramified-outside-bounded-set
- lem-filtered-colimit-fp-scheme-stage
- lem-nonaffine-finite-galois-descent-of-morphisms
- thm-fundamental-theorem-of-finite-galois-theory
- thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
- thm-primitive-element-theorem-for-finite-separable-extensions
- thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group
- thm-local-absolute-galois-group-residue-exact-sequence
- thm-finite-unramified-local-extensions-classified-by-residue-extensions
- thm-choice-implies-dependent-implies-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: G. Faltings, Endlichkeitssatze fur abelsche Varietaten uber Zahlkorpern,
      §3, Satz1 proof and Lemma4
    url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf
    locator: Printed356–357; full fixed-geometric-class descent paragraph. The published
      argument calls faithful-level descent known; the local proof supplies it.
  - title: J. S. Milne, Abelian Varieties v2.00 (2008), I Proposition14.4 and Remark14.6
    url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    locator: Printed62–63; finite polarized automorphisms, faithful level action and
      descent.
verification:
  precheck: pending
axiom_use: AC and DC are retained literally. AC supplies algebraic/finite-stage descent,
  local inertia and bounded extensions; AC implies the CC used by the latter. No choice
  of isomorphisms for an entire infinite family or arbitrary cocycle effectivity is
  needed.
---

## Statement

Assume AC and DC. Let $K$ be a number field, $S$ a finite set of finite places, and let $A_0/\overline K$ be a principally polarized abelian variety of dimension $g$. There are only finitely many $K$-isomorphism classes of principally polarized abelian varieties $A/K$ whose base change to $\overline K$ is isomorphic to $A_0$ and which have good reduction outside $S$.

## Statement references

[[lem-polarized-abelian-automorphisms-finite-and-faithful-on-three-torsion]]

[[thm-faltings-finite-extensions-unramified-outside-bounded-set]]

[Faltings1983, §3, Satz1 proof and Lemma4, printed pp.356–357](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

[Milne, *Abelian Varieties*, I14.4–14.6](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** Exactly AC and DC, the number field $K$, finite set $S$, and geometric principally polarized abelian variety $A_0$ in the Statement. All isomorphisms between polarized varieties preserve their group identities and polarizations.

[A1] AC and DC are literal hypotheses ([[def-axiom-of-choice]], [[def-dependent-choice]]); AC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Good reduction means existence of an abelian-scheme model with its generic fibre identified as a $K$-scheme with the given variety ([[def-good-reduction-and-abelian-scheme-model]]). A pointed morphism from a smooth geometrically integral group to an abelian variety is a group homomorphism under AC ([[thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism]]). The abelian and polarized notions are [[def-abelian-variety-over-a-field]] and [[def-polarization-of-an-abelian-variety]].

[F2] Over an algebraically closed characteristic-zero field the polarized automorphism group is finite and faithful on geometric $3$-torsion ([[lem-polarized-abelian-automorphisms-finite-and-faithful-on-three-torsion]]).

[F3] An abelian scheme over a DVR has finite-etale $3$-power torsion when $3$ is invertible, and its geometric generic torsion is fixed by the chosen inertia subgroup ([[lem-arith-abelian-scheme-torsion-specialization-unramified]]). This direct result requires no supplied Neron model.

[F4] Morphisms, inverses and their finite identities between finite-presentation schemes descend from an algebraic closure to a finite extension ([[lem-filtered-colimit-fp-scheme-stage]]). Finite Galois correspondence identifies an orbit with the embeddings of the fixed field of its stabilizer ([[thm-fundamental-theorem-of-finite-galois-theory]]). Equivariant morphisms between arbitrary ground-field schemes over a finite Galois extension descend uniquely ([[lem-nonaffine-finite-galois-descent-of-morphisms]]).

[F5] The accepted global decomposition proof identifies the chosen decomposition group and its inertia subgroup with the absolute local ones ([[thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group]]). The accepted residue exactness proof constructs the unramified residue-primitive subfield at finite Galois level and proves residue surjectivity ([[thm-local-absolute-galois-group-residue-exact-sequence]], proof1.1–2.2); unramified finite extensions are classified by finite residue extensions ([[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]).

[F6] Under AC and CC there are finitely many $K$-isomorphism classes of extensions of fixed bounded degree unramified outside one fixed finite set ([[thm-faltings-finite-extensions-unramified-outside-bounded-set]]). Its complete local-discriminant proof is supplied; no unresolved conditional local bound is assumed here.

[F7] Finite separable extensions have primitive elements and finitely many embeddings, indexed by distinct roots ([[thm-primitive-element-theorem-for-finite-separable-extensions]], [[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

## Proof

**Proof technique:** direct.

1.1 If the family in the Statement is empty there is nothing to prove. Otherwise fix one member $(B,\lambda_B)/K$ and put $H=\operatorname{Aut}_{\overline K}(B,\lambda_B)$ and $h=|H|\ge1$. By [F2], $H$ is finite. For any family member $(A,\lambda_A)$, let $$ T_A=\operatorname{Isom}_{\overline K}\bigl((A,\lambda_A),(B,\lambda_B)\bigr). $$ It is nonempty because both varieties are polarized-isomorphic to $A_0$. Postcomposition by $H$ acts simply transitively on $T_A$, so $|T_A|=h$. This chooses a $K$-model of $A_0$ only after the nonempty-family split, rather than assuming its existence. [A1, F2, given, choose, construct]

1.2 We justify the unramified-field implication at the actual local interface [F5]. For any finite Galois local extension $M/K_v$, its residue degree $f=[k_M:k_v]$ and the residue-primitive Hensel lift in the residue theorem's proof give an unramified subfield $M_0\subset M$ of degree $f$. Reduction of $\operatorname{Gal}(M/K_v)$ onto the residue Galois group is surjective with inertia kernel $I(M/K_v)$; this kernel fixes $M_0$, since unramified reduction is injective. The fixed field of that kernel has degree $f$ by finite Galois theory, so $M^{I(M/K_v)}=M_0$. Absolute inertia surjects onto that finite kernel: extend a finite inertia automorphism to the separable closure; its residue action fixes $k_M$, and residue-surjectivity for the absolute group of the local field $M$ supplies an automorphism fixing $M$ with that same residue action. Cancelling it gives an absolute inertia lift. Thus any finite local subfield fixed by absolute inertia is contained in $M_0$ after taking a finite Galois closure. Such a subfield has ramification index one, by inclusion of the extending value groups in the value group of $M_0$; its finite residue extension is separable. It is unramified. [A1, F4, F5, algebra, construct]

2.1 Both $H$ and $T_A$ carry their natural continuous $G_K$-actions. Each morphism and its inverse are defined over a finite extension by [F4]; their group and polarization identities persist by faithful field extension. Because the sets are finite, one finite Galois extension $F/K$ defines all their elements and factors their permutation actions. Enlarging to a finite Galois extension uses only the finitely many conjugates of finitely many separable defining polynomials. Postcomposition is Galois equivariant. [A1, F4, F7, step 1.1, construct]

2.2 Put $S'=S\cup\{v:v\mid3\}$, fixed independently of $A$. At $v\notin S'$, both $A$ and $B$ have actual abelian-scheme models over $\mathcal O_{K,v}$ by [F1]. Its literal generic-fibre identification may only be a scheme isomorphism $i$. Compose $i$ with translation by $-i(0)$, a $K$-rational point, to get a pointed isomorphism; [F1]'s pointed-morphism theorem makes it a group isomorphism. Thus the generic torsion of those models really is $A[3]$ or $B[3]$. By [F3], the chosen inertia subgroup $I_v$ fixes both torsion groups. For every $t\in T_A$, $\sigma\in I_v$ and $x\in A[3](\overline K)$, $$ (\sigma t)(x)=\sigma\bigl(t(\sigma^{-1}x)\bigr)=\sigma(t(x))=t(x). $$ The polarized automorphism $t^{-1}(\sigma t)$ of $A$ fixes all $3$-torsion, so [F2] makes it the identity. EVERY inertia element therefore fixes EVERY actual isomorphism in $T_A$. No extension of $t$ over a DVR, Neron mapping theorem or automorphism-extension theorem has been used. [A1, F1, F2, F3, step 1.1, algebra]

3.1 Construct the ACTUAL finite-etale isomorphism torsor from these Galois sets. For each orbit $O\subset T_A$, choose $t\in O$, let $J_t$ be its stabilizer in $\operatorname{Gal}(F/K)$ and set $E_t=F^{J_t}$. Finite Galois correspondence [F4] gives $[E_t:K]=|O|$ and identifies its geometric embeddings with $O$. Thus $$ X_A=\coprod_{O\subset T_A}\operatorname{Spec}E_t $$ is finite etale of rank $h$ with geometric points precisely $T_A$, with their actual Galois action. To check the splitting explicitly, write $E_t=K(\alpha)$ by [F7]: its separable minimal polynomial splits over $F$ into distinct linear factors, so $E_t\otimes_KF$ is the product of copies of $F$ indexed by $O$. The same construction on the finite Galois group-set $H$ gives a finite-etale $K$-group scheme $\mathcal H$ with geometric group $H$. Its multiplication and action on $X_A$ descend from the equivariant maps between split finite sets by [F4]. The map $\mathcal H\times X_A\to X_A\times X_A$, $(u,t)\mapsto(ut,t)$, has a Galois-equivariant inverse after $F$, since the action is simply transitive; [F4] descends that inverse. Hence $X_A$ is an actual $\mathcal H$-torsor. [F4, F7, step 1.1, step 2.1, construct, algebra]

4.1 Over $F$, the components of $X_A$ carry the actual isomorphisms $t:A_F\to B_F$. Their evaluation map, viewed as an $F$-morphism between $(A\times_KX_A)_F$ and $(B\times_KX_A)_F$ over $(X_A)_F$, and its inverse are Galois equivariant. By [F4] both descend, retaining their projection, inverse, group and polarization identities by faithful base change. Thus $X_A$ is equipped with an actual polarized isomorphism between the pulled-back varieties. This construction needs no assertion about representability of arbitrary nonreduced-base Isom functors, and does not replace isomorphisms by a larger torsor of arbitrary level identifications. [F4, step 2.1, step 3.1, algebra]

4.2 By step 2.2, inertia fixes every embedding of each orbit field $E_t$ in step 3.1. Under the global/local decomposition identification of [F5], all its completions above $v\notin S'$ are consequently fixed by local absolute inertia, and step 1.2 makes them unramified. Therefore each $E_t/K$ is unramified outside the SAME set $S'$ and has degree $[E_t:K]=|O|\le h$. This establishes the actual torsor's ramification bound BEFORE using bounded-extension finiteness. [F5, step 3.1, step 2.2, step 1.2, algebra]

5.1 Since AC implies CC, [F6] applies with fixed integer degree bound $h$ and fixed set $S'$. There are finitely many $K$-isomorphism classes of possible $E_t$. Choose representatives of that finite list, and take the compositum $L\subset\overline K$ of the images of ALL their finitely many $K$-embeddings, finite by [F7]. This is a finite Galois extension: characteristic zero gives separability and including every conjugate makes each normal closure, and then their compositum, normal. Each actual field $E_t\subset\overline K$ equals one of those images, since a $K$-isomorphism with a chosen representative is one such embedding. Hence every $T_A$ has a point defined over $L$, so every $A$ has a polarized $L$-isomorphism to $B_L$. No simultaneous choice of isomorphisms for the entire family is made, and no further ramification assertion about $L$ is needed. [A1, F6, F7, step 4.2, choose, construct]

6.1 Let $\Gamma=\operatorname{Gal}(L/K)$ and $H_L=\operatorname{Aut}_L(B_L,\lambda_B)$, a finite $\Gamma$-stable subgroup of $H$. For one actual $A$ choose $f:A_L\to B_L$ as in step 5.1 and define $c_\sigma=f(\sigma f)^{-1}\in H_L$. Composition gives $c_{\sigma\tau}=c_\sigma\,\sigma(c_\tau)$. Replacing $f$ by $af$ for $a\in H_L$ replaces this function by $a c_\sigma\sigma(a)^{-1}$. Thus the actual $K$-isomorphism class of $A$ defines a class in a quotient of the FINITE set of functions $\Gamma\to H_L$. [step 1.1, step 5.1, construct, algebra]

7.1 This map on actual forms is injective. If $A,A'$ give the same class, alter one chosen isomorphism by an element of $H_L$ so that their functions $c_\sigma$ agree. Then $h=(f')^{-1}f:A_L\to A'_L$ is invariant: $\sigma f=c_\sigma^{-1}f$ and $\sigma f'=c_\sigma^{-1}f'$ imply $\sigma h=h$. By [F4], $h$ and its inverse descend to $K$. Their polarized group identities descend by faithful field extension, proving a polarized $K$-isomorphism. Therefore the family has finitely many classes. We need no effectivity theorem for arbitrary cocycles. [F4, step 6.1, algebra]

8.1 The empty-family case was handled in step 1.1. For $g=0$ the unique abelian variety with its identity is $\operatorname{Spec}K$ with its unique principal polarization, so $h=1$; it is also covered by the argument. Empty $S$ and residue characteristic $2$ are allowed, since only primes above $3$ were added. No fixed-field semistability, rational level structure, supplied Neron model, or $K$-defined ample line-bundle realization of the given polarization was added to the original Statement. [A1, F1, step 1.1, step 2.2, step 7.1, algebra] ∎

## Remarks

This fixed-$S$ lemma does not supply finiteness from bounded stable height alone. The preserved unrestricted bounded-stable-height Statement is refuted by quadratic twists and lacks the fixed bad-reduction hypothesis needed here. Its exclusion and the false Raynaud boundary remain unchanged. The source's finite-forms paragraph is in §3, not the old §2 locator. No full Faltings/Shafarevich proof or deep consumer acceptance follows from this local result.
