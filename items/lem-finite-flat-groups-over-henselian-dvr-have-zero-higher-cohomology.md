---
id: lem-finite-flat-groups-over-henselian-dvr-have-zero-higher-cohomology
kind: lemma
title: "Higher cohomology of finite-flat groups over a Henselian DVR vanishes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-axiom-of-choice
  - lem-finite-dimensional-commutative-algebras-decompose-into-local-factors
  - def-finite-flat-group-scheme-and-cartier-dual
  - lem-smooth-affine-commutative-weil-restriction-and-diagonal-quotient
  - thm-smooth-affine-commutative-groups-have-etale-fppf-comparison
  - thm-artin-tate-lemma
  - thm-adjugate-identity-over-a-commutative-ring
  - thm-nakayama-lemma
  - cor-finite-flat-noetherian-modules-are-projective
  - thm-faithfully-flat-descent-of-flatness
  - thm-faithfully-flat-ring-map-characterisations
  - thm-localisations-are-flat
  - cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented
  - lem-ag-flat-local-regularity-ascent-descent
  - thm-galois-h1-of-smooth-connected-group-over-finite-field-vanishes
  - thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes
  - thm-abelian-sheaves-on-a-site-have-enough-injectives
  - lem-site-slice-restriction-locality-and-composition
justified_by: []
proof_strategy: direct
axiom_use: "AC is retained for geometric regularity, local module and Galois/site-cohomology suppliers. The actual finite-flat affine quotient and smooth resolution are constructed, not assumed. This does not discharge an unqualified finite-flat duality assertion."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, III Lemma1.1 and Appendix A; SGA3 Expose V, affine finite locally free quotients"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "The smooth affine resolution and quotient proof are given below over the Noetherian DVR base; no abelian-scheme embedding theorem is imported."
verification: {}
---

## Statement

Assume AC. Let $R$ be a Henselian discrete valuation ring with finite residue
field $k$, and let $N$ be a commutative finite locally free group scheme over
$R$. There is an exact sequence of fppf abelian sheaves
$$0\longrightarrow N\longrightarrow H\longrightarrow H'\longrightarrow0$$
where $H,H'$ are smooth affine commutative group schemes of finite
presentation with geometrically connected fibres, and $H\to H'$ is a
finite locally free surjective $N$-torsor. Consequently
$$H^r_{\mathrm{fppf}}(R,N)=0\qquad(r\ge2).$$
No completeness, fraction-field characteristic or residue-characteristic
restriction is assumed. No finiteness of $H^1(R,N)$ is claimed.

## Facts & Assumptions

**Given:** Exactly the group, Henselian DVR and AC of the Statement.

[A1] AC supplies the actual qualified geometry and cohomology interfaces. [[def-axiom-of-choice]]

[F1] Cartier duality is finite locally free Hopf-algebra duality, with evaluation and biduality; represented affine functors have fppf descent. [[def-finite-flat-group-scheme-and-cartier-dual]]

[F2] Weil restriction of a smooth affine commutative finite-presentation group along a finite free faithful cover of a Noetherian base is smooth affine of finite presentation. [[lem-smooth-affine-commutative-weil-restriction-and-diagonal-quotient]]

[F3] For Noetherian $R\subset C\subset A$, if $A$ is finite type over $R$ and finite as a $C$-module, then $C$ is finite type over $R$. Finite-type algebras over Noetherian rings are finitely presented. [[thm-artin-tate-lemma]] [[cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented]]

[F4] Unit-determinant matrices are invertible; Nakayama and finite-flat-projective criteria apply; flatness descends faithfully flat; localization is flat. [[thm-adjugate-identity-over-a-commutative-ring]] [[thm-nakayama-lemma]] [[cor-finite-flat-noetherian-modules-are-projective]] [[thm-faithfully-flat-descent-of-flatness]] [[thm-faithfully-flat-ring-map-characterisations]] [[thm-localisations-are-flat]]

[F5] Along a flat local map of Noetherian local rings, regularity of the target implies regularity of the source. [[lem-ag-flat-local-regularity-ascent-descent]]

[F6] Smooth affine commutative groups have the actual etale/fppf comparison over Noetherian bases, and positive-degree residue comparison over the present Henselian DVR. [[thm-smooth-affine-commutative-groups-have-etale-fppf-comparison]]

[F7] A smooth connected separated finite-type group over a finite field has zero Galois $H^1$. Higher continuous cohomology of a discrete torsion module over a finite-field Galois group vanishes in degrees at least two. [[thm-galois-h1-of-smooth-connected-group-over-finite-field-vanishes]] [[thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes]]

[F8] Actual injective site resolutions exist under AC, and slice restriction and the named-functor comparison have the stated exactness properties. [[thm-abelian-sheaves-on-a-site-have-enough-injectives]] [[lem-site-slice-restriction-locality-and-composition]]

[F9] A finite-dimensional commutative algebra over a field decomposes into finitely many local factors. [[lem-finite-dimensional-commutative-algebras-decompose-into-local-factors]]

## Proof

**Proof technique:** embed into a finite-algebra unit group, construct its finite-flat affine quotient, and use smooth residue comparison and Lang vanishing.

**Given:** The data above; put $n=\operatorname{rank}_R\mathcal O(N)>0$.

1.1 The algebra $B=\mathcal O(N^D)$ is finite free of rank $n$ over the local ring $R$, with a retraction to $R$ from the identity section; it is faithfully flat. Set $H=\operatorname{Res}_{B/R}\mathbb G_m$. It is smooth affine commutative of finite presentation by [F2]. Evaluation embeds $N$ as a closed subgroup of $H$. Explicitly a point of $N$ is a group-like element $b$ of $B\otimes_RT$, with $\Delta b=b\otimes b$ and $\varepsilon b=1$, by finite Hopf biduality [F1]. Such $b$ is a unit, with inverse its antipode. In any finite basis these are finitely many coefficient equations inside the unit open subscheme of the affine vector space of $B$. Thus they define precisely the represented closed subgroup $N$, not merely an injection on field-valued points. [F1, F2, given, construct, algebra]

2.1 We construct the quotient over $R$, rather than applying a quotient theorem stated only over a field. Write $H=\operatorname{Spec}A$, $N\times H=\operatorname{Spec}D$, with source and target $s,t:A\to D$, and put $C=\{a:s(a)=t(a)\}$. The relation is closed in $H\times_RH$: translation identifies it with $H\times_RN$. Its coordinate algebra $D$ is free of rank $n$ over $A$ through $s$. For $a\in A$, the characteristic polynomial of multiplication by $t(a)$ on this free module has coefficients in $C$, since composition by an arrow identifies the two outgoing-relation fibres and conjugates their multiplication maps. Cayley-Hamilton over the ring follows by coefficient comparison in the adjugate identity [F4]; composing with the identity-arrow map $D\to A$ gives a monic equation for $a$ over $C$. Thus $A$ is integral and finite over $C$, because it is generated by finitely many elements over $R\subset C$. By [F3], $C$ is a finite-type Noetherian $R$-algebra. Closedness of the relation gives a surjection $A\otimes_CA\to D$, since it already gives a surjection $A\otimes_RA\to D$ and all invariant differences vanish. [F1, F3, F4, step 1.1, construct, algebra]

3.1 We prove that this surjection is an isomorphism and that $A$ is finite locally free over $C$. Localize $C$ at a maximal ideal, and faithfully flat extend it, if necessary, to $C[T]_{\mathfrak mC[T]}$. This is a flat local extension with residue field $\kappa(\mathfrak m)(T)$ and is faithful by [F4]. Formation of $C$ as the kernel of $s-t$ commutes with this flat extension. The extended $A$ is finite over the local $C$, hence semilocal. The free $s(A)$-module $D$ has rank $n$ and is generated by $t(A)$, by the preceding tensor surjection. The $C$-submodule $t(A)$ contains an $s(A)$-basis: choose a finite generating list in $t(A)$, reduce at the finitely many maximal ideals of $A$, and choose a common-coefficient linear combination nonzero in each residue vector space. Each forbidden condition is a proper linear subspace over the infinite residue field of $C$; a finite union cannot exhaust that vector space. This produces a unimodular vector in $D$. Split it, repeat on the finite projective quotient, and apply Nakayama at the finitely many maximal ideals to obtain $t(x_1),\ldots,t(x_n)$ forming a basis of $D$. In this induction a finite projective module of constant rank over a semilocal ring is free: lift its finitely many residue bases simultaneously by the Chinese remainder theorem, use Nakayama for the surjection, split it and apply Nakayama to its finite direct-summand kernel. Thus the argument also applies at each quotient stage. [F4, step 2.1, choose, construct, algebra]

4.1 Expand $t(a)=\sum_i s(c_i)t(x_i)$ in that basis. Apply the composition comorphism and compare it with pullback along the first arrow. The groupoid identities make the coefficient differences $s(c_i)-t(c_i)$ multiply the first-factor basis $t(x_i)$; their sum is zero. Independence forces $s(c_i)=t(c_i)$, so $c_i\in C$. Applying the identity-arrow map now gives $a=\sum_i c_ix_i$. This expression is independent, since applying $t$ to a zero expression gives the independent basis in $D$. Therefore $A=\bigoplus_iCx_i$ in the extended local situation, and $A\otimes_CA\to D$ sends its second-factor basis to the displayed basis of $D$, hence is an isomorphism. These conclusions descend by faithful flatness [F4] to each local ring of the original $C$. Thus $A$ is finite flat, hence finite locally free over Noetherian $C$, and the tensor map is an isomorphism globally. Its spectrum is onto: localize the injective integral inclusion $C\subset A$ at a prime of $C$ and choose a maximal ideal upstairs under AC. Its contraction is maximal downstairs, since a domain whose integral extension is a field is itself a field (a monic equation for the inverse of a nonzero element expresses that inverse in the domain). The local base has only its specified maximal ideal, giving a prime above the original one. Hence $C\to A$ is faithfully flat. [F4, step 2.1, step 3.1, algebra]

5.1 Put $H'=\operatorname{Spec}C$. The tensor identity just proved makes the kernel pair of $H\to H'$ precisely $N\times H$. Since this map is a finite locally free surjection, every test map into $H'$ lifts fppf locally to $H$, and two lifts differ precisely by $N$. Thus $H'$ represents the fppf quotient. Addition and inverse on $H$ descend uniquely to $H'$ by [F1], so it is an affine commutative group and $0\to N\to H\to H'\to0$ is exact. The same tensor identity proves the torsor isomorphism. Both rings are finite type over the Noetherian $R$, so all schemes and maps here are finitely presented. [F1, F3, step 4.1, construct, algebra]

6.1 The quotient $H'$ is smooth over $R$. Its algebra $C$ is $R$-flat: tensor an injection of $R$-modules first with $C$ and then faithfully with $A$ over $C$; the final tensor is exact because $A$ is $R$-flat, so the first tensor is injective. For any field $L$ over a residue field of $R$, the map $C\otimes_RL\to A\otimes_RL$ is faithfully flat and finite. The latter algebra is regular because $H_L$ is smooth. For any prime of the former ring, choose a prime above it and localize. The resulting flat local map has Noetherian regular target, so its source is regular by [F5]. This works after every field extension $L$, proving geometrically regular fibres. Finite presentation, flatness and these fibres are precisely smoothness. [F3, F4, F5, step 4.1, step 5.1, algebra]

7.1 Both smooth groups have geometrically connected fibres. For an algebraically closed residue extension $L$, by [F9] the finite-dimensional algebra $B\otimes_RL$ is a finite product of local Artin algebras with residue $L$. Its unit group is the product of $L^\times$ with $1+J$ on each factor, where $J$ is its nilpotent maximal ideal. As schemes $1+J$ is an affine space: its elements are exactly the vectors of $J$, and every $1+j$ has the finite geometric-series inverse. Thus $H_L$ is connected. Its finite faithfully flat quotient $H'_L$ is a surjective continuous image of that connected space, so is connected too. This argument establishes the claimed connectedness, rather than imposing it on a smooth resolution. [F1, F9, step 1.1, step 5.1, step 6.1, algebra]

8.1 For either $V=H_k$ or $H'_k$, all positive etale cohomology over $k$ vanishes. To identify the actual groups, the finite Galois Cech nerves of the fields $k_m/k$ compute continuous Galois cohomology: on an injective etale sheaf their augmented free sheaf nerves are exact after Hom, hence their finite-quotient cohomology is zero; the geometric-point stalk is an exact filtered colimit and its invariants are the original sections by Galois descent. Applying these two exact functors to one injective resolution and the first-quadrant continuous-cochain double complex proves $H^r_{\mathrm{et}}(k,V)=H^r_{\mathrm{cont}}(G_k,V(\bar k))$, with the actual restriction maps. This is the finite-field site calculation, not an imported duality theorem. The degree-one group is zero by [F7] and connectedness from step 7.1. The module $V(\bar k)$ is torsion: each point lies over a finite extension of the finite field, whose finite-type affine scheme has finitely many rational points, so its point group is finite. The higher-degree assertion follows from the torsion vanishing in [F7]. [F7, F8, step 7.1, construct, algebra]

9.1 Apply [F6] to $H$ and $H'$: their positive fppf cohomology over $R$ is their positive etale cohomology over $k$, hence zero by step 8.1. The long exact fppf cohomology sequence of step 5.1 consequently has zero groups on both sides of $H^r(R,N)$ for every $r\ge2$, so that group is zero. It also gives the honest formula $H^1(R,N)=H'(R)/H(R)$; this quotient can be infinite in equal characteristic and no finiteness is inferred. The trivial group and rank-one case are included. This supplies the full higher-vanishing assertion at its declared AC scope, without adding completeness or characteristic assumptions, and without proving the original unqualified local flat-duality or exact-annihilator theorem. [A1, F6, F8, step 5.1, step 8.1, algebra] ∎
