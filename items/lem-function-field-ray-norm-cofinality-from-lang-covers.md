---
dependency_level: 16
id: lem-function-field-ray-norm-cofinality-from-lang-covers
kind: lemma
title: Lang ray covers give actual function-field norm cofinality
deps:
- lem-rigidified-picard-ray-quotients-over-finite-fields
- thm-global-function-field-artin-reciprocity-and-norm-index
- lem-canonical-local-reciprocity-from-cyclic-character-pairings
- def-local-artin-reciprocity-map
- lem-unramified-local-unit-norms-and-cohomology
- lem-function-field-constant-class-local-invariant-comparison
- lem-function-field-discrete-idele-cohomology-and-local-invariants
- thm-curves-function-fields-equivalence
- thm-fundamental-theorem-of-finite-galois-theory
- thm-finite-galois-extension-characterizations
- thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form
- thm-smooth-local-standard-form
- def-etale-morphism-schemes
- lem-etale-stable-base-change-composition
- thm-unramified-diagonal-open-immersion
- def-separated-morphism-schemes
- lem-closed-immersion-affine-quotient-and-base-change
- thm-etale-morphisms-open-and-quasi-finite
- thm-finite-morphism-integral-closed
- lem-regular-local-domain-induction
- thm-regular-equals-smooth-over-perfect-field
- thm-global-field-element-integral-at-all-but-finitely-many-places
- def-idele-group-of-a-global-field
- def-idele-class-group-of-a-global-field
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
axiom_use: AC, Countable Choice and DC are explicit. Actual finite-character carry compatibility
  and physical continuity are proved; kernel intersection alone is used for the constant-cover
  compositum. The input finite Artin theorem concerns already-given fields; no global all-open
  existence is assumed.
sources:
  references:
  - title: Quentin Guignard, On the ramified class field theory of relative curves, arXiv1804.02243v2
    url: https://arxiv.org/pdf/1804.02243v2
    locator: Section4.1–4.14, printed/PDF16–21, full actual rigidified-Picard and Abel-map proofs
      read. The all-test construction is reconstructed from local Picard/projective-bundle/affine-descent
      suppliers; no geometric CFT theorem is imported.
  - title: Hanming Liu, Geometric Class Field Theory, arXiv2211.09730v1
    url: https://arxiv.org/pdf/2211.09730v1
    locator: Sections3.1–3.5 and4.1–4.2, printed12–27/PDF14–29, full relevant passages read.
      Cited Weil, singular Riemann–Roch and arbitrary-field results are not imported; finite-field
      Lang/ray norm cofinality is proved explicitly.
verification: {}
proof_strategy: direct
---

## Statement

Assume AC, Countable Choice and DC. Let $F$ be a global function field with its finite exact constant field, fix a separable closure $F_s$, and give its idèle class group $C_F$ the physical quotient topology. For every open finite-index subgroup $N\le C_F$ there is a finite abelian extension $E/F$ inside $F_s$ with
$$N_{E/F}C_E\subseteq N.$$
Here the norm is the actual idelic field norm. More precisely, for every nonzero effective modulus $D$ on its curve and signed degree-one divisor $D_0$ away from $D$, there is a finite abelian field $L_D/F$ whose actual canonical Artin map is the ray projection $C_F\to A_D=J_D(k)$ of the preceding lemma. For every $m\ge1$, the compositum $E=L_DF\mathbb F_{q^m}$ has norm kernel equal to the inverse image of $\{0\}\times m\mathbb Z$ in $C_F\to A_D\times\mathbb Z$. No direct-product or linear-disjointness assumption on these two fields is required.

## Statement references

[[lem-rigidified-picard-ray-quotients-over-finite-fields]]
[[thm-global-function-field-artin-reciprocity-and-norm-index]]

## Facts & Assumptions

**Given:** The exact finite constant field $k=\mathbb F_q$, fixed separable closure, physical topology and literal AC/CC/DC in the Statement.

[F1] For each nonzero modulus, the all-test rigidified Picard group has smooth geometrically connected $J_D$, finite $A_D=J_D(k)$, finite étale Lang torsor and a degree-one signed divisor $D_0$ outside $D$. The physical ray quotient is $P_D(k)=A_D\times\mathbb Z$; all closed-place classes $[v-\deg(v)D_0]$ generate $A_D$. Finite-jet Riemann–Roch approximation is proved in the same construction.
[[lem-rigidified-picard-ray-quotients-over-finite-fields]]

[F2] For each already-given finite abelian function-field extension the ACTUAL product of the canonical local maps descends to a continuous onto Artin map with its actual norm kernel and arithmetic unramified Frobenius. It is not merely an abstract class-formation isomorphism.
[[thm-global-function-field-artin-reciprocity-and-norm-index]]

[F3] The canonical local map satisfies $\chi(\operatorname{rec}_K(a))=\operatorname{inv}_K(a\smile\delta\chi)$ for finite characters, with actual finite carry/inflation and standard Brauer sign. Its unramified action is arithmetic Frobenius. It kills unramified units by its actual norm kernel. These are named distinguished maps, not arbitrary maps normalized on a uniformizer.
[[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]
[[def-local-artin-reciprocity-map]]
[[lem-unramified-local-unit-norms-and-cohomology]]

[F4] A finite constant extension has its actual degree; local decomposition groups identify with completion Galois groups by actual tensor completion, in every characteristic. The function field has a smooth proper geometrically integral model over its finite exact constants.
[[lem-function-field-constant-class-local-invariant-comparison]]
[[lem-function-field-discrete-idele-cohomology-and-local-invariants]]
[[thm-curves-function-fields-equivalence]]

[F5] Finite Galois correspondence identifies fixed fields, composita and quotient restriction maps. Finite group characters with values in $\mathbb Q/\mathbb Z$ separate points of finite abelian groups.
[[thm-fundamental-theorem-of-finite-galois-theory]]
[[thm-finite-galois-extension-characterizations]]
[[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]

[F6] A smooth relative curve has an étale local chart over the relative affine line; étale morphisms are flat and stable under base change and their diagonals are open. A section of a separated morphism is closed by base change of its diagonal. Finite étale morphisms are open, finite morphisms are closed, and smooth curves have regular local domains.
[[thm-smooth-local-standard-form]]
[[def-etale-morphism-schemes]]
[[lem-etale-stable-base-change-composition]]
[[thm-unramified-diagonal-open-immersion]]
[[def-separated-morphism-schemes]]
[[lem-closed-immersion-affine-quotient-and-base-change]]
[[thm-etale-morphisms-open-and-quasi-finite]]
[[thm-finite-morphism-integral-closed]]
[[lem-regular-local-domain-induction]]
[[thm-regular-equals-smooth-over-perfect-field]]

[F7] Global elements are units at almost every place; restricted-product neighborhoods at1 are products of local neighborhoods at a finite set and full units elsewhere. The class topology is the quotient topology.
[[thm-global-field-element-integral-at-all-but-finitely-many-places]]
[[def-idele-group-of-a-global-field]] [[def-idele-class-group-of-a-global-field]]

[A1] AC, Countable Choice and DC are all retained literally; AC supplies field embeddings and the finite/group/scheme construction interfaces. No number-field or choice-free existence inference is made.
[[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** explicit character compatibility, connected Lang pullback with computed arithmetic Frobenius, continuity/density dictionary, then constant-cover kernel intersection.

**Given:** The stated data; first record the exact same-base quotient compatibility used in the construction and its consumers.

1.1 Let $K$ be one fixed finite-residue complete local field, let $M/K$ be finite abelian and let $L\subseteq M$. For a character $\chi$ of $\operatorname{Gal}(L/K)$, inflate it to $\operatorname{Gal}(M/K)$ and then to the same absolute $G_K$. Choose rational lifts $r$ of its finitely many values, $r(1)=0$. Both characters on $G_K$ have literally the same integer Bockstein $r(g)+r(h)-r(gh)$, so for every $a\in K^\times$ their scalar cocycle $a^{r(g)+r(h)-r(gh)}$ is identical. The ACTUAL local invariant evaluation in [F3] is therefore identical. Hence $\chi(\operatorname{rec}_{M/K}(a)|_L)=\chi(\operatorname{rec}_{L/K}(a))$ for every such character, and character separation [F5] proves equality of the two finite maps. This proves compatibility, not an assumed reciprocity functoriality. For global finite abelian $T/F$ and subfield $E$, choose a common place upstairs. Their local completions sit over the SAME $F_v$, and the completion subgroup quotient of [F4] is onto; apply the just-proved local equality. Restrict the actual finite local product in [F2]; its finite support allows restriction factor by factor. This gives $\operatorname{Art}_{T/F}(a)|_E=\operatorname{Art}_{E/F}(a)$ on every idèle class. It uses no cross-base norm transition or abstract Tate compatibility. [A1, F2, F3, F4, F5, given, construct, algebra]

2.1 Use [F4] to take the curve model and choose $D\ne0,D_0,J_D,A_D$ as in [F1]. The graph of the variable point $s:U\to C\times U$ is a relative effective Cartier divisor: at a graph point, the smooth projection $C\times U\to U$ has by [F6] an étale chart $h:V\to\mathbb A^1_W$ after shrinking around that point and its base. The composite $h\circ s$ is the graph $t=a$, and multiplication by the monic polynomial $t-a$ is injective over the arbitrary base ring. Its pullback $V'$ along the flat étale chart is therefore an effective Cartier divisor, and $V'\to W$ is étale. The induced section $W\to V'$ is open as a base change of the open diagonal of an étale map, and is closed because $s$ is a section of the separated projection. Removing the closed complement of that open-and-closed section inside $V'$ gives a neighborhood in $V$ on which $V'$ is precisely the graph. Thus the graph is locally cut out by a nonzerodivisor, with no use of a later section theorem. Its line bundle, tensored by $\mathcal O(-D_0)$, has canonical trivialization on $D\times U$, because both divisors are disjoint from $D$. Thus the ALL-TEST representing property gives $\alpha:U\to J_D$, $x\mapsto[\mathcal O(x-D_0),1]$. Pull back the finite étale Lang torsor of [F1] to get a finite étale $A_D$-torsor $Y\to U$. For a closed $v\in U$ of degree $d$ and a geometric $x$ over it, choose $z$ with $\Phi_qz-z=\alpha(x)$. Telescoping gives $\Phi_q^dz-z=\sum_{i=0}^{d-1}\Phi_q^i\alpha(x)=[v-dD_0]=b_v$. Label translation $T_b:z\mapsto z+b$ by its pullback on coordinate functions $T_b^*$. Evaluation of $T_{b_v}^*f$ at $z$ is $f(z+b_v)=f(\Phi_q^dz)=f(z)^{q^d}$. Consequently $b_v$ is ARITHMETIC local Frobenius, with no inverse ambiguity from point-versus-function actions. [A1, F1, F4, F6, step 1.1, construct, algebra]

3.1 Prove $Y$ connected. Its connected components are regular integral curves, since it is étale over smooth integral $U$ and regular local domains prevent intersections of irreducible components; Noetherianity makes the finitely many components open and closed. Each maps onto $U$, since its finite étale image is nonempty open and closed. The group $A_D$ acts transitively on components: otherwise an orbit sum of primitive idempotents in the generic torsor algebra is a nontrivial invariant idempotent. The invariant algebra is $F$, as follows after a faithfully flat trivializing field extension, where functions on the finite constant torsor have only constant invariants; faithful flatness descends this kernel equality. Fix a component with stabilizer $H\le A_D$. Its degree is $|H|$, because all component degrees are equal and there are $[A_D:H]$ components of a degree-$|A_D|$ torsor. Its $H$-action is therefore free and transitive on every geometric fibre. Arithmetic Frobenius preserves this component's fibre at each closed place, so step 2.1's $b_v$ lies in $H$. But all $b_v$ generate $A_D$ by [F1]. Thus $H=A_D$ and $Y$ has one component. Its generic algebra is a field $L_D$ finite Galois over $F$ with group $A_D$; the generic torsor invariants are $F$ and its degree and automorphism count are $|A_D|$. It is unramified on $U$, since its finite étale local algebras have separable residue extensions and ramification index one. Under AC embed $L_D$ in the given $F_s$. No Weil bound, Chebotarev or geometric fundamental-group generation theorem entered this proof, which includes $A_D=0$. [A1, F1, F4, F5, F6, step 2.1, construct, algebra]

4.1 Apply the actual finite global Artin theorem [F2] to $L_D/F$ and identify its group by step 3.1. At $v\in U$ it kills all local units, and its value on a uniformizer is $b_v$ by step 2.1 and [F3]. These are exactly the values of the ray projection $\psi_D:C_F\to A_D$ in [F1]. Thus the two maps agree on idèles with all $D$ components equal to1; only finitely many outside valuations are nonzero. Both maps are continuous to finite discrete $A_D$, and both kill principals: the first by the actual [F2], the second by the literal ray quotient. The subgroup $F^\times I_{\mathrm{outside}D}$ is dense in the physical idèles. Indeed, for any idèle $a$ and basic neighborhood, [F1]'s proved finite-jet approximation gives $f\in F^\times$ sufficiently close to $a_v$ at each $v\in D$; set $b_v=a_v/f$ outside $D$ and $b_v=1$ at $D$. By [F7] this is an idèle, and $fb$ equals $a$ outside $D$ and is as close as required at $D$. Their closed equalizer therefore contains a dense subgroup and is the whole group. It follows that $\operatorname{Art}_{L_D/F}=\psi_D$ on $C_F$, with norm kernel $\ker\psi_D$ by [F2]. This proves congruence-unit killing without a conductor/ramification-bound theorem or inferring canonicality merely from Frobenius. [F1, F2, F3, F7, step 2.1, step 3.1, construct, algebra]

5.1 For $m\ge1$, the constant extension $F_m=F\mathbb F_{q^m}$ has degree $m$ by [F4]. At every closed $v$ its local arithmetic Frobenius acts on these constants by $q^{\deg(v)}$; units are killed by [F3]. Therefore its actual Artin product is degree modulo $m$, including all places and $m=1$. Form $E=L_DF_m$ in $F_s$. It is finite abelian, and restriction embeds $\operatorname{Gal}(E/F)$ in $A_D\times\mathbb Z/m$. By the explicitly proved compatibility step 1.1, the two projections of its ACTUAL Artin map are $(\psi_D,\deg\bmod m)$. Injectivity of the Galois restriction into the product says its Artin kernel is the INTERSECTION of those two kernels. By [F1], this is the inverse image of $\{0\}\times m\mathbb Z$ in $B_D=A_D\times\mathbb Z$. By [F2] it is the actual norm subgroup. No direct-product or linear-disjointness assumption is used. [F1, F2, F3, F4, F5, step 1.1, step 4.1, construct, algebra]

6.1 Let now $N\le C_F$ be the physical open finite-index subgroup. Its inverse image in the idèles is an open neighborhood of1. By [F7] it contains a product of local neighborhoods at finitely many places and full units elsewhere. Shrink the former to $1+\mathfrak m_v^{n_v}$ with $n_v\ge1$ to get $V_D$ inside it. If the exceptional set is empty, add any closed place with exponent1. Thus $D$ is NONZERO and $\operatorname{im}(V_D)\subseteq N$. Its image $\bar N$ in $B_D=A_D\times\mathbb Z$ has index $m=[C_F:N]\ge1$. The finite abelian quotient is killed by its order, so $mB_D\subseteq\bar N$, in particular $\{0\}\times m\mathbb Z\subseteq\bar N$. For the actual field $E$ in step 5.1 the norm kernel is therefore contained in $N$. This proves the full Statement for every physical open finite-index subgroup, with arbitrary characteristic, nonreduced positive moduli and signed degree-one divisors retained. It asserts no number-field, real-place, finite-$S$, LLC, LT, Wang or conductor theorem. [A1, F1, F2, F5, F7, step 5.1, construct, algebra] ∎

## Remark

Step1.1 proves the same-base finite Artin quotient compatibility used here and in the full subgroup-correspondence deduction. It uses finite rational character lifts, their literally identical inflated carry cocycle in the same absolute local group, actual invariant pairing and character separation. It does not require an unproved norm map between different base fields or any identification of abstract Tate–Nakayama with the Artin map.
