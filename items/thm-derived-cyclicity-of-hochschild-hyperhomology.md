---
id: thm-derived-cyclicity-of-hochschild-hyperhomology
kind: theorem
title: "Derived cyclicity of Hochschild hyperhomology"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-hochschild-hyperhomology-of-a-bimodule-complex
  - thm-hochschild-hyperhomology-is-resolution-independent
  - lem-double-bar-comparison-for-cyclic-bimodule-tensor-products
  - def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
  - lem-bimodule-tensor-totalization-respects-differentials-and-homotopies
  - lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms
  - def-derived-tensor-product-in-the-bounded-above-setting
  - thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility
  - def-axiom-of-choice
  - thm-two-sided-bar-complex-is-an-enveloping-projective-resolution
  - def-enveloping-algebra-and-bimodule-module-dictionary
  - cor-every-vector-space-has-a-basis
  - thm-a-direct-summand-of-a-projective-is-projective
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split
  - thm-chain-homotopic-maps-induce-the-same-map-on-homology
  - def-opposite-ring
  - def-two-sided-bar-resolution-of-an-associative-algebra
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Beliakova–Putyra–Wehrli, Quantum Link Homology via Trace Functor I, §3.8.4, printed pp.37–39"
      url: "https://arxiv.org/pdf/1605.03523"
      locator: "Equations (3.37)–(3.39): the two resolutions of $N\\otimes_BN'$, the cyclic twist between them, and its square being homotopic to the identity."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1, printed pp.300–304"
      url: "https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf"
      locator: "§9.1.3–9.1.5: bar resolutions and the bar-tensor model for Hochschild chains; the projective-complex comparison used below is proved from the cited library suppliers."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice (AC). Let $k$ be a field, let $A$ and $B$ be unital
associative $k$-algebras, let $M$ be a bounded cochain complex of graded
$(A,B)$-bimodules whose terms are finite projective as right $B$-modules, and
let $N$ be a bounded cochain complex of graded $(B,A)$-bimodules whose terms
are finite projective as right $A$-modules; all differentials preserve internal
degree ([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).
Then the ordinary signed tensor totalizations
$$\operatorname{Tot}(M\otimes_BN),\qquad \operatorname{Tot}(N\otimes_AM)$$
represent $M\otimes_B^{\mathbf L}N$ and $N\otimes_A^{\mathbf L}M$
([[def-derived-tensor-product-in-the-bounded-above-setting]]), and for every
integer $n$ there is a natural internal-degree-preserving isomorphism
$$\mathrm{HH}^{\mathrm{hyper},n}\bigl(A,M\otimes_B^{\mathbf L}N\bigr)\cong\mathrm{HH}^{\mathrm{hyper},n}\bigl(B,N\otimes_A^{\mathbf L}M\bigr).$$
It is represented on the middle double-bar coinvariant models by the cyclic
rotation: on the block with $M^i,N^l$ and bar degrees $p,q$, whose block degrees
are $i-p$ and $l-q$, the swapped tensor is multiplied by
$(-1)^{(i-p)(l-q)}$. With both bar degrees zero and both coefficient complexes
concentrated in degree $m$, this is $(-1)^{m^2}=(-1)^m$, in particular $-1$
when $m=1$. The middle rotation squares to the identity; the outer comparisons
are chain-homotopy equivalences, so the induced cyclic isomorphism and its
reverse are inverse on hyperhomology. No left-projectivity or derived-functor
claim about an arbitrary projective target is asserted or used.
## Facts & Assumptions

**Given:** AC, a field $k$, unital associative $k$-algebras $A$ and $B$, a bounded cochain complex $M$ of graded $(A,B)$-bimodules with termwise finite projective right $B$-terms, and a bounded cochain complex $N$ of graded $(B,A)$-bimodules with termwise finite projective right $A$-terms, all differentials of internal degree zero.

[F1] The hyperhomology complex of a coefficient complex $F$ has $T^n(A,F)=\bigoplus_{i-j=n}C_j(A,F^i)$ with $D=d_F+(-1)^ib$, and $\mathrm{HH}^{\mathrm{hyper},n}(A,F)$ is computed from the reindexed bar resolution, or from any supplied bounded-above projective resolution, by tensoring over $A^e$; quasi-isomorphic coefficient complexes give isomorphic hyperhomology, compatibly with internal gradings ([[def-hochschild-hyperhomology-of-a-bimodule-complex]], [[thm-hochschild-hyperhomology-is-resolution-independent]]).

[F2] Assume AC. For an $(A,B)$-bimodule $M'$ finite projective as a right $B$-module and a $(B,A)$-bimodule $N'$ finite projective as a right $A$-module, the two double-bar complexes $\operatorname{Tot}(\operatorname{Bar}(A)\otimes_AM'\otimes_B\operatorname{Bar}(B)\otimes_BN')$ and the exchanged complex are projective resolutions of $M'\otimes_BN'$ and $N'\otimes_AM'$ in right $A^e$- and right $B^e$-modules; after coinvariants the cyclic rotation $\rho$, with the homological Koszul sign, is an isomorphism of complexes, and the outer comparisons give a zigzag of chain-homotopy equivalences $C_\bullet(A,M'\otimes_BN')\simeq C_\bullet(B,N'\otimes_AM')$ natural and involutive up to homotopy ([[lem-double-bar-comparison-for-cyclic-bimodule-tensor-products]]).

[F3] The signed tensor totalization of bounded complexes of graded bimodules has terms $\operatorname{Tot}(F\otimes_AG)^n=\bigoplus_{p+q=n}F^p\otimes_AG^q$ with differential $d(f\otimes g)=d_Ff\otimes g+(-1)^pf\otimes d_Gg$; each total degree is a finite direct sum, the internal grading is the sum of the two internal degrees, and outer actions are induced ([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).

[F4] Tensoring with a bounded-above complex of flat right modules preserves quasi-isomorphisms; homotopies tensor with the Koszul rule, and the cone of a tensored map is identified with the tensor of the cone ([[lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]]).

[F5] A bounded complex of right $R$-modules with finite projective terms is a complex of flat right $R$-modules, and it is a supplied projective replacement of itself; hence its ordinary signed tensor totalization represents the derived tensor product $-\otimes_R^{\mathbf L}-$ ([[def-derived-tensor-product-in-the-bounded-above-setting]]).

[F6] Tensoring preserves chain maps and homotopies and the Koszul signs on the summands: on a summand $F^p\otimes_AG^q$ the second-factor homotopy enters with sign $(-1)^p$, the first-factor homotopy enters without a sign, and identities and composition are preserved ([[lem-bimodule-tensor-totalization-respects-differentials-and-homotopies]]).

[F7] The degreewise balanced associator is a natural chain isomorphism $(F\otimes_AG)\otimes_CH\to F\otimes_A(G\otimes_CH)$, and the unit isomorphisms $B\otimes_BF\to F$, $F\otimes_AA\to F$ are natural chain isomorphisms ([[thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility]]).

[F8] Under AC the two-sided bar complex is a projective resolution of $A$ as a right and as a left $A^e$-module; its terms are $A\otimes_kA^{\otimes_kp}\otimes_kA$ with the right $A^e$-action $(a_0\otimes\cdots\otimes a_{p+1})\cdot(c\otimes d^{\mathrm{op}})=da_0\otimes a_1\otimes\cdots\otimes a_{p+1}c$ ([[thm-two-sided-bar-complex-is-an-enveloping-projective-resolution]], [[def-enveloping-algebra-and-bimodule-module-dictionary]]).


[F9] For a left $R$-module $L$, the augmented bar complex $\operatorname{Bar}_\bullet(R)\otimes_RL\to L$ is the standard bar resolution: its terms are $R\otimes_kR^{\otimes q}\otimes_kL$, and insertion of $1_R$ gives an extra-degeneracy contraction; under AC the terms are free left $R$-modules ([[def-two-sided-bar-resolution-of-an-associative-algebra]], [[cor-every-vector-space-has-a-basis]]).

[F10] A direct summand of a projective module is projective ([[thm-a-direct-summand-of-a-projective-is-projective]]).

[F11] A bounded-above acyclic cochain complex of projective modules is contractible if the epimorphisms from each term onto the preceding cycle split; reindexing turns this into the bounded-below chain-complex criterion ([[thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split]]).

[F12] AC implies dependent choice, so the recursive choices of splittings in a bounded-above projective complex can be made ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]]).

[F13] Chain-homotopic maps induce the same homology map; after cochain reindexing they induce the same map on cohomology ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[F14] The flip $\tau:A^e\to(A^e)^{\mathrm{op}}$, $\tau(a\otimes b^{\mathrm{op}})=b\otimes a^{\mathrm{op}}$, is an anti-isomorphism. It converts the left $A^e$-module structure of an $A$-bimodule into its right $A^e$-module structure, and hence transfers projectivity between the two sides ([[def-enveloping-algebra-and-bimodule-module-dictionary]], [[def-opposite-ring]]).
## Proof

**Proof technique:** direct.

1.1 Every $M^i$ is flat as a right $B$-module and every $N^l$ is flat as a right $A$-module because the terms are projective. The bounded signed totals therefore compute the derived tensor products under [F5]; [F3] gives their induced outer bimodule structures, internal gradings, and finite diagonals. [F3, F5, given, algebra]

1.2 Put $X=\operatorname{Tot}(M\otimes_BN)$ and form the standard total complexes $Q_A=\operatorname{Tot}(\operatorname{Bar}(A)\otimes_AM\otimes_B\operatorname{Bar}(B)\otimes_BN)$ and $Q_B$ with $A,B$ and $M,N$ exchanged, using the reindexed bar degrees $-p,-q$. The associator and signed-totalization rules [F3, F7] group these as $U_A\otimes_BU_B$ and $U_B\otimes_AU_A$, and [F6] ensures the augmentation maps tensor to cochain maps. The map $Q_A\to P_A:=\operatorname{Bar}(A)\otimes_AX$ induced by the $B$-bar augmentation is a quasi-isomorphism: for each $N^l$, [F9] is a left $B$-bar resolution, tensoring it with the bounded complex $M$ preserves that quasi-isomorphism by [F4] and termwise right $B$-flatness, and the outer bounded-above right $A$-flat bar complex preserves it again by [F4]. The augmentation $P_A\to X$ is a quasi-isomorphism by the outer bar contraction. Each total degree of $Q_A$ is a finite sum, since $i,l$ range over bounded intervals and $p+q=i+l-n$. Each term of $Q_A$ is projective as a right $A^e$-module by applying the explicit module-level projectivity proof of [F2] to each pair $(M^i,N^l)$ and taking the finite direct sum on that diagonal; each term of $P_A$ is projective by the same proof and the finite projectivity of each $M^i\otimes_BN^l$. Thus $Q_A,P_A$ are bounded-above complexes of projective right $A^e$-modules, both quasi-isomorphic to $X$. The symmetric statements hold for $Q_B$ and $P_B$. [F2, F3, F4, F5, F6, F7, F8, F9, given, algebra]

2.1 The quasi-isomorphism $Q_A\to P_A$ is a chain-homotopy equivalence. Its cone is bounded above, acyclic, and termwise projective. Starting at the highest nonzero degree, acyclicity makes the preceding differential onto the top term; that surjection splits because the top term is projective. Its kernel is a direct summand of the preceding projective term and is projective by [F10]. Repeating downward gives splittings of all cycle epimorphisms; [F12] supplies the recursive choices and [F11] makes the cone contractible. Since the differentials and cycle epimorphisms preserve internal degree, each splitting may be taken to have degree zero: extract the degree-zero homogeneous component of an underlying module splitting, which remains a splitting because the epimorphism has degree zero. Thus the contraction and induced comparison after coinvariants preserve internal degree. Hence after applying the additive coinvariant functor, $\operatorname{coInv}_A(Q_A)\to\operatorname{coInv}_A(P_A)$ remains a chain-homotopy equivalence; likewise on the $B$-side. To identify these models with hyperhomology, use the common triple total $\operatorname{Bar}(A)_{\mathrm{right}\ A^e}\otimes_{A^e}P_A$, viewing the bimodule complex $P_A$ as a left $A^e$-complex. Its maps to $\operatorname{Bar}(A)\otimes_{A^e}X$ and to $A\otimes_{A^e}P_A=\operatorname{coInv}_A(P_A)$ are quasi-isomorphisms by [F4]: the bar resolution is bounded above and flat as a right $A^e$-complex, while $P_A$ is bounded above and termwise flat as a left $A^e$-complex by [F14]. Each cone is a bounded-above acyclic complex of $k$-vector spaces. Under AC, every term is projective and every epimorphism onto a cycle splits; after reindexing, [F11] therefore makes both cones contractible. These contractions can be taken internally degree zero by the homogeneous-splitting argument above. Thus both triple-model maps are chain-homotopy equivalences, including after coinvariants, rather than only quasi-isomorphisms. The first model is the reindexed-bar model of [F1], hence computes $\mathrm{HH}^{\mathrm{hyper}}(A,X)$. The same argument identifies $\operatorname{coInv}_B(Q_B)$ with $\mathrm{HH}^{\mathrm{hyper}}(B,\operatorname{Tot}(N\otimes_AM))$. [F1, F4, F8, F10, F11, F12, F14, step 1.2, given, algebra]

2.2 Group $U_A=\operatorname{Tot}(\operatorname{Bar}(A)\otimes_AM)$ and $U_B=\operatorname{Tot}(\operatorname{Bar}(B)\otimes_BN)$, so $Q_A=\operatorname{Tot}(U_A\otimes_BU_B)$ and $Q_B=\operatorname{Tot}(U_B\otimes_AU_A)$. For homogeneous blocks of cochain degrees $r=i-p$ and $s=l-q$, the map $[u\otimes v]\mapsto(-1)^{rs}[v\otimes u]$ is well defined on coinvariants: a $B$-balance relation maps to the two classes identified by $B$-coinvariants, and an $A$-coinvariant relation maps to the two classes identified by $A$-balance. It is invertible by the reverse switch. For the standard tensor total differential, the first-block component commutes because $(-1)^{(r+1)s}=(-1)^{rs}(-1)^s$, and the second-block component commutes because $(-1)^r(-1)^{r(s+1)}=(-1)^{rs}$. This grouped calculation covers the $A$-bar and $M$ differentials in the first block and the $B$-bar and $N$ differentials in the second block. The reverse switch has the same sign, so the composite multiplies by $(-1)^{rs+sr}=1$. [F2, F3, step 1.2, given, algebra]

3.1 By 2.2 the middle rotation is a cochain isomorphism $\operatorname{coInv}_A(Q_A)\to\operatorname{coInv}_B(Q_B)$ whose reverse is its inverse. The map $Q_A\to P_A$ induces a quasi-isomorphism after coinvariants by 2.1, and the two maps from the triple total in 2.1 are quasi-isomorphisms; therefore these maps identify the cohomology of each coinvariant model with the bar hyperhomology model. The corresponding maps on cohomology are isomorphisms, and composing them with the isomorphism induced by the middle rotation gives the claimed cyclic isomorphism. Using the inverse cohomology identifications and the reverse rotation gives its inverse; equivalently, chosen chain-homotopy inverse comparisons induce those inverse cohomology maps by [F13]. All comparisons and homotopies preserve internal degree by 2.1, and the constructions are natural up to homotopy in maps of the bounded bimodule complexes because bar augmentation, tensor totalization, coinvariants, and rotation are natural. The termwise projectivity assumptions are used only on the indicated right sides, and no arbitrary-projective-target derived-functor assertion enters. [F1, F2, F3, F13, step 2.1, step 2.2, given, algebra] ∎
