---
id: thm-smooth-affine-commutative-groups-have-etale-fppf-comparison
kind: theorem
title: "Etale and fppf cohomology agree for smooth affine commutative groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-axiom-of-choice
  - lem-smooth-commutative-group-etale-cohomology-over-henselian-dvr
  - lem-smooth-affine-commutative-weil-restriction-and-diagonal-quotient
  - lem-finite-morphism-etale-direct-image-calculus
  - lem-small-etale-sheaves-extend-with-fppf-descent
  - lem-site-slice-restriction-locality-and-composition
  - lem-fppf-cover-refinement-by-etale-local-finite-flat-covers
  - thm-abelian-sheaves-on-a-site-have-enough-injectives
  - thm-jacobian-criterion-smooth-morphism
  - thm-etale-locally-standard-etale
  - cor-henselian-local-simple-root-criterion
  - def-henselian-pair-and-henselian-local-ring
  - thm-adjugate-identity-over-a-commutative-ring
  - thm-nakayama-lemma
  - lem-finite-dimensional-commutative-algebras-decompose-into-local-factors
justified_by: []
proof_strategy: direct
axiom_use: "AC is retained for the existing smooth geometry, local algebra and actual site injective resolutions. No generic smooth topology comparison or finite fppf direct-image acyclicity is assumed."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Etale Cohomology, III Section3; The Stacks Project, Etale Cohomology, comparison with flat cohomology"
      url: "https://stacks.math.columbia.edu/download/etale-cohomology.pdf"
      locator: "The local finite-cover induction is reconstructed here using actual finite-etale direct-image exactness and the explicitly constructed smooth diagonal quotient."
verification: {}
---

## Statement

Assume AC. Let $S$ be a Noetherian scheme and $G$ a smooth affine commutative
group scheme of finite presentation over $S$. The actual topology-change map
$$H^q_{\mathrm{et}}(S,G)\longrightarrow H^q_{\mathrm{fppf}}(S,G)$$
is an isomorphism for every $q\ge0$, naturally in $S$ and $G$. On fixed
big sites of locally Noetherian schemes, if
$\epsilon:(S_{\mathrm{fppf}})\to(S_{\mathrm{et}})$ denotes topology change,
then $R^q\epsilon_*G=0$ for $q>0$. The ordinary etale groups in the display
may be computed on the small etale site. This includes all residue
characteristics and noncomplete bases. The AC qualification is explicit. In particular, if $S=\operatorname{Spec}R$ for a Henselian DVR with finite residue field $k$, then residue restriction induces an isomorphism $H^q_{\mathrm{fppf}}(R,G)\cong H^q_{\mathrm{fppf}}(k,G_k)$ for every $q\ge1$.

## Facts & Assumptions

**Given:** The scheme, group and AC in the Statement. Work in one fixed universe of sites and sheaves.

[A1] AC supplies the declared geometric and injective-model interfaces. [[def-axiom-of-choice]]

[F1] For a finite free faithful cover of a Noetherian affine base and a smooth affine commutative group, its Weil restriction $X$ and diagonal quotient $Q$ are smooth affine of finite presentation; $0\to G\to X\to Q\to0$ is exact and $X\to Q$ is a smooth surjective torsor. [[lem-smooth-affine-commutative-weil-restriction-and-diagonal-quotient]]

[F2] Finite direct image on small etale abelian sheaves is exact for all coefficients, and the actual finite big-etale direct image is exact as well. [[lem-finite-morphism-etale-direct-image-calculus]]

[F3] Small/big etale restriction is exact; its extension is an exact left adjoint, and the final-object section cohomology agrees for the actual supplied models. [[lem-small-etale-sheaves-extend-with-fppf-descent]]

[F4] Actual injective resolutions exist under AC. Slice restriction preserves injectives; positive cohomology is locally zero; higher direct images are sheafifications of object cohomology; the actual composition spectral sequence and its edge maps are available. [[thm-abelian-sheaves-on-a-site-have-enough-injectives]] [[lem-site-slice-restriction-locality-and-composition]]

[F5] Every fppf family has the specified Zariski, finite locally free, Zariski, finite locally free refinement, requiring no point-indexed choice function. [[lem-fppf-cover-refinement-by-etale-local-finite-flat-covers]]

[F6] Smooth charts have an invertible finite Jacobian minor; etale maps have standard-etale charts; Henselian local rings lift simple monic residue roots. [[thm-jacobian-criterion-smooth-morphism]] [[thm-etale-locally-standard-etale]] [[cor-henselian-local-simple-root-criterion]] [[def-henselian-pair-and-henselian-local-ring]]

[F7] The adjugate identity inverts unit-determinant matrices. Nakayama holds for finite modules over local rings; finite-dimensional commutative field algebras have finite local-factor decompositions. [[thm-adjugate-identity-over-a-commutative-ring]] [[thm-nakayama-lemma]] [[lem-finite-dimensional-commutative-algebras-decompose-into-local-factors]]

[F8] For a smooth commutative separated finite-presentation group over a Henselian DVR with finite residue field, small-etale residue restriction is an isomorphism in every positive degree under AC. [[lem-smooth-commutative-group-etale-cohomology-over-henselian-dvr]]

## Proof

**Proof technique:** simultaneous all-base induction in the cohomological degree, using a finite cover only after lower-degree comparison is proved.

**Given:** The data above. In every induction degree the assertion is proved for all Noetherian bases and all such groups at once.

1.1 We make the required local finite-cover refinement explicit. Fix one geometric point $\bar s$ of an affine base $\operatorname{Spec}A$. The ring $A^{\mathrm{sh}}$ is constructed as the filtered colimit of all pointed etale neighbourhoods of this point, with residue embeddings in its fixed separable closure. Fibre products and the equalizer neighbourhood of two maps make this category filtered; standard-etale charts [F6] give the latter neighbourhood, since the diagonal of an etale map is open. Its residue field is the chosen separable closure, and it is Henselian: for a coprime monic residue factorization the finite factor-coefficient equations have invertible Sylvester Jacobian at that factorization. Their standard-etale neighbourhood is another pointed member of the system, so supplies the lifted factorization in the colimit; its local etale uniqueness gives uniqueness of the lift. No Noetherianity of this colimit is asserted or needed. [A1, F6, F7, given, construct, algebra]

1.2 Degree zero agrees because the represented group is already a sheaf for both topologies. Suppose $q\ge1$ and $R^j\epsilon_*H=0$ is known for every smooth affine commutative finite-presentation group $H$ over every Noetherian base and every $0<j<q$. By the actual composition spectral sequence [F4], the topology-change map in each degree $j<q$ is an isomorphism on every such base, not merely on stalks. This is the induction hypothesis available over a finite cover as well as over the original base. [F3, F4, given, induction]

2.1 Over any Henselian local ring $R$, a finite free algebra $B$ decomposes into local finite free factors. Here is the finite argument needed for [F5]. For an idempotent of $B/\mathfrak mB$, lift it to $b$; the multiplication characteristic polynomial reduces to $T^a(T-1)^c$. Henselian factor lifting and the unit Sylvester determinant give coprime factors $f_0,f_1$ and $u f_0+v f_1=1$. Cayley-Hamilton over $R$ follows directly from $\operatorname{adj}(TI-M)(TI-M)=\det(TI-M)I$: coefficient comparison and multiplication by powers of $M$ telescope to the characteristic identity. Thus $u(b)f_0(b)$ lifts the idempotent. It is unique because every $1-x$ for $x\in\mathfrak mB$ has invertible multiplication matrix, and an idempotent in $\mathfrak mB$ is zero. Lift the finitely many residue local-factor idempotents from [F7]. Each factor is local, since a residue unit lifts to a unit by the same matrix argument. It is a finite projective $R$-module as a summand of $B$, hence finite free: lift a residue basis, use Nakayama to obtain a surjection from a finite free module, split by projectivity, and apply Nakayama to its finitely generated direct-summand kernel. Nonzero factors have positive rank and are faithfully flat. [F6, F7, step 1.1, construct, algebra]

2.2 Let $f:T\to S$ be a finite free cover and let $G_T$ be the base-changed group. For $0<j<q$, the fppf sheaf $R^j f_*G_T$ is zero. Indeed its sections are locally represented by classes on $T\times_SU$, by [F4]. The preceding lower-degree comparison identifies each class with its etale class. Exactness of finite etale direct image [F2] makes that etale class zero after an etale cover of $U$, since its higher direct-image sheaf is zero. Thus its fppf higher direct-image sheaf is zero. Leray [F4] consequently gives an injection $H^q_{\mathrm{fppf}}(S,f_*G_T)\hookrightarrow H^q_{\mathrm{fppf}}(T,G_T)$: every possible incoming differential to the $q$th degree-zero row has a positive direct-image degree strictly below $q$ and is zero. For $q=1$ the usual first edge injection requires no positive-degree vanishing. Crucially, no finite fppf direct-image acyclicity in degree $q$ is assumed. [F2, F4, step 1.2, algebra]

3.1 First refine an fppf covering by all affine finite-presentation charts over the affine base; these charts form another covering. Apply [F5] to that family and pull it to $A^{\mathrm{sh}}$. A member of the first Zariski cover containing the closed point is the whole local spectrum. Decompose the resulting finite free covering algebra by step 2.1 and take one nonzero local factor; it is still a faithfully flat finite free cover of the base. A member of the intermediate Zariski cover containing its closed point is its whole spectrum. The corresponding last finite locally free cover is finite free of positive rank, since that factor ring is local. Composing gives one faithfully flat finite free cover of $A^{\mathrm{sh}}$ mapping to an original covering member. This finite algebra, its basis and multiplication table, the maps and the finitely many identities descend to a pointed etale neighbourhood of $\bar s$: all coefficients occur at finitely many stages of the filtered ring system, and eventual equalities hold at one later stage. Positive finite rank persists, so the descended cover is faithfully flat finite free. Consequently etale locally at each specified geometric point, one finite free cover refines the original fppf family. No cohomology-continuity theorem for the strict henselization is used. [F5, F6, F7, step 1.1, step 2.1, choose, construct, algebra]

4.1 A smooth surjective finite-presentation morphism has sections etale locally. At a geometric point, base change to the strictly Henselian ring of step 1.1. A nonempty smooth finite-type fibre over its separably closed residue field has a rational point: a standard smooth chart has an etale map to affine space, whose nonempty open image contains a rational point over that infinite field (a separably closed finite field is impossible because $T^{q^2}-T$ is separable); its etale fibre has finite separable residue, hence has a rational point. Lift this point over the Henselian ring by fixing the free coordinates in a standard smooth chart and applying simple-root lifting in the resulting standard-etale chart [F6]. Finite presentation descends the resulting section to an etale neighbourhood exactly as in step 3.1. This proves the section assertion without assuming a smooth fppf/etale cohomology comparison. [F6, step 1.1, step 3.1, construct, algebra]

4.2 Let $\alpha\in H^q_{\mathrm{fppf}}(S,G)$. It is zero on an fppf covering by [F4]. To prove it etale locally zero, fix a geometric point and use step 3.1 to replace the base by an affine etale neighbourhood and obtain a finite free faithful cover $f:T\to S$ on which $\alpha$ is zero. Let $X=f_*G_T$ and $Q=X/G$ be the actual smooth affine groups from [F1]. The image of $\alpha$ in $H^q(S,X)$ has zero restriction to $H^q(T,G_T)$, so is zero by step 2.2. The long exact cohomology sequence of $0\to G\to X\to Q\to0$ therefore writes $\alpha$ as the boundary of a class in $H^{q-1}_{\mathrm{fppf}}(S,Q)$. [F1, F4, step 3.1, step 2.2, construct, algebra]

5.1 If $q>1$, the induction hypothesis makes that $Q$-class etale locally zero: it is the image of its etale class, which is locally zero by [F4]. The boundary $\alpha$ is then zero on that etale neighbourhood. If $q=1$, its preceding class is an actual section $a\in Q(S)$. The smooth surjective map $X\to Q$ has etale local sections above $a$ by step 4.1, so that section lifts to $X$ etale locally and its boundary is zero. Thus in every degree every local fppf class becomes zero etale locally. The sheafification description of [F4] gives $R^q\epsilon_*G=0$. This completes the induction for all Noetherian bases and the stated groups. [F1, F4, step 4.1, step 1.2, step 4.2, induction, algebra]

6.1 On one actual fppf injective resolution of $G$, topology-change direct image preserves injectives because its inverse-image sheafification is exact. The vanishing just proved makes its direct image an actual etale injective resolution of the same represented group. The two final-object section complexes are literally equal, so the induced isomorphism is the actual topology-change map in the Statement. By [F3], restriction of this big-etale injective resolution to the small etale site computes the same groups: the exact left-adjoint extension makes restriction preserve injectives. All maps are the natural restriction and adjunction maps; hence the comparison is natural in the base and in $G$. The zero group, degree zero, residue characteristics and noncomplete bases are all included. This proves exactly the AC-qualified smooth affine comparison, without claiming the unqualified local flat-duality theorem or its integral exact annihilator. [A1, F3, F4, step 5.1, algebra]

7.1 In the Henselian DVR case apply the comparison just proved to both $R$ and its finite residue field $k$, and use [F8] between their small-etale groups. Naturality in the base makes this composite precisely the actual fppf residue restriction, giving the final positive-degree isomorphisms. Degree zero of residue restriction is not asserted; its formal kernel can be nonzero. This supplies the smooth affine residue comparison at its declared AC scope, leaving the original unqualified finite-flat duality and exact-annihilator obligations distinct. [F8, step 6.1, algebra] ∎
