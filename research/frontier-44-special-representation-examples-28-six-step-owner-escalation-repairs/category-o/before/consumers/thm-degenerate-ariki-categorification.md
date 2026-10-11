---
id: thm-degenerate-ariki-categorification
kind: theorem
title: "The degenerate Ariki categorification theorem"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 41
deps: [def-degenerate-cyclotomic-hecke-tower-and-residue-functors,
       thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module,
       thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module,
       def-degenerate-cyclotomic-hecke-algebra,
       def-higher-level-wedge-tensor-fock-module,
       thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis,
       def-dual-canonical-canonical-and-quasi-canonical-fock-bases,
       thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix,
       thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule,
       thm-the-highest-weight-fock-submodule-has-the-qg-global-bases,
       thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module,
       thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases,
       def-the-higher-level-schur-weyl-projective-generator-and-schur-functor,
       thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer,
       thm-higher-level-schur-weyl-double-centralizer,
       thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects,
       thm-category-o-translation-intertwines-residue-induction-and-restriction,
       thm-finite-length-grothendieck-groups-have-simple-class-bases,
       def-axiom-of-choice,
       lem-the-fock-pairing-matches-projective-simple-and-standard-costandard-pairings,
       thm-residue-translation-functors-give-the-integrable-fock-space-action,
       thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives,
       def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Complete 44-page article: Section 1 (printed pp. 1-3), Sections 2.1-2.8 (printed pp. 4-19), Sections 3.1-3.7 (printed pp. 19-32), Sections 4.1-4.4 (printed pp. 32-42). Complete relevant passages read in the retrieved full text. Owner targeted ROUND1 uses: supported tower/content proof, full costandard versus standard lattices, actual inverse matrix, cuts containing charges/support and full Young/tilting generator Ringel algebra. Native source-reading/provenance remains archived; no optional generic or ALLCol classification reconstruction is claimed."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.6 (printed pp. 28-31): Theorem 3.10(i)-(vi) and its proof, including the commutativity of the Schur-functor diagram, the decomposition formula, the Chevalley operators and the head/socle rule for residue translates; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Theorems 6.9, 6.10, 6.12 and 6.15 (printed pp. 33-41): the Schur functor, its images of standards, simples, projectives and tiltings, and the intrinsic Specht modules; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Section 8.5 (printed pp. 93-97): the higher-level Schur-Weyl duality and the Whittaker functor used for the identifications; the relevant passages were read."
verification:
  precheck: pass
---

## Statement

Assume inherited AC [[def-axiom-of-choice]] for the category-O, Fock/global and Schur quotient suppliers invoked below.

Assume the bounded-below charge hypothesis: $I$ is a nonempty set of consecutive
integers bounded below and $\Lambda\in P^+$ has level $l$ and integral
multicharge $m_1\ge\cdots\ge m_l$ in the letter alphabet $I^+$. Use the actual admissible integral-origin stable realization of the tower definition, with roots $c_j+q_j-n_{\rm row}=m_j$. Then the two identifications of the preceding
theorems hold simultaneously for the degenerate cyclotomic Hecke tower
$H^\Lambda$ of [[def-degenerate-cyclotomic-hecke-tower-and-residue-functors]]:
$K_0(\mathrm{Proj}(H^\Lambda))\cong V(\Lambda)_{\mathbb Z}$ with
$[Y(A)]\mapsto P_A$ and
$G_0(\mathrm{Rep}(H^\Lambda))\cong V(\Lambda)^*_{\mathbb Z}$ with
$[D(A)]\mapsto D_A$, $[S(B)]\mapsto S_B$, and they are mutually dual under the
Cartan and Shapovalov pairings. Moreover:

**(i)** for every $B\in\mathrm{Col}^\Lambda$ one has
$[S(B)]=\sum_{A\in\mathrm{Std}^\Lambda}d_{A,B}(1)[D(A)]$, where
$d_{A,B}(s)\in\mathbb Z[s]$ is defined by $M_B=\sum_Ad_{A,B}(s)L_A$
(equivalently $P_A=\sum_Bd_{A,B}(s)M_B$);

**(ii)** the endomorphisms of both Grothendieck groups induced by $e_i,f_i$
$(i\in I)$ are the Chevalley operators $e_i,f_i$ of
$\dot U_{\mathbb Z}(\mathfrak{gl}_{I^+})$;

**(iii)** for $A\in\mathrm{Std}^\Lambda$ and $i\in I$ the module $e_iD(A)$
(resp. $f_iD(A)$) is nonzero if and only if $\tilde e_i(A)\ne\varnothing$
(resp. $\tilde f_i(A)\ne\varnothing$), in which case it is a self-dual
indecomposable module with irreducible socle and head isomorphic to
$D(\tilde e_i(A))$ (resp. $D(\tilde f_i(A))$);

**(iv)** in the source's normalization the projective classes correspond to the
quasi-canonical family $P_A$, which at parameter one equals the canonical
family on $V(\Lambda)_{\mathbb Z}$ ($P_A=T_{A^\uparrow}$ at $s=1$), while the
simple classes correspond to the dual-canonical family
$D_A=\pi_{\mathrm{Fock}}L_A$, the label bijections being $\uparrow:\mathrm{Std}^\Lambda_\alpha\to\mathrm{Rev}^\Lambda_\alpha$ and its inverse rectification $\downarrow:\mathrm{Rev}^\Lambda_\alpha\to\mathrm{Std}^\Lambda_\alpha$.

For any admitted consecutive $I$, including $\mathbb Z$ and half-infinite sets,
the same blockwise statements hold: for a fixed $\alpha$ and finite list of
residue operations choose lower and upper cuts whose LETTER alphabet contains
every charge and whose ROOT interval contains the support of $\alpha$ and the
required shifted supports; added bottom tails are common ground and added top
entries are absent, and the double-cut compatibility and the
contractible-central-corner restriction identify these SAME Hecke blocks,
intrinsic Spechts, projective/simple labels and residue maps. These compatible
finite pieces give the original arbitrary-$I$ statement. At level $0$ only
$\alpha=0$ and the ground survive.

## Facts & Assumptions

**Given:** The bounded-below data and the tower $H^\Lambda$ of
[[def-degenerate-cyclotomic-hecke-tower-and-residue-functors]], the two
identifications of [[thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module]]
and [[thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module]],
the Fock data of [[def-higher-level-wedge-tensor-fock-module]] with its four
families of [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]] and
the category-O side of
[[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]],
as well as the Axiom of Choice as used by the imported suppliers
([[def-axiom-of-choice]]). We prove (i)-(iv) and the arbitrary-$I$ extension.

[F1] The classes of simples form a $\mathbb Z$-basis of $G_0$ for a
finite-dimensional algebra, with composition multiplicities as coordinates
([[thm-finite-length-grothendieck-groups-have-simple-class-bases]]).

[F2] The Axiom of Choice holds: every family of nonempty sets has a choice
function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **Both identifications and their duality.** By [[thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module]] the map $[D(A)]\mapsto D_A$ identifies $G_0(\mathrm{Rep}(H^\Lambda))$ with the full integral costandard lattice $V(\Lambda)^*_{\mathbb Z}$ and is compatible with the standard classes $[S(B)]\mapsto S_B$; by [[thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module]] the map $[Y(A)]\mapsto P_A$ identifies $K_0(\mathrm{Proj}(H^\Lambda))$ with the standard lattice $V(\Lambda)_{\mathbb Z}$, the embedding of projectives induces the lattice inclusion, and the Cartan pairing is the normalized highest pairing $C_0(P_A,D_B)=\delta_{AB}$ of [[lem-the-fock-pairing-matches-projective-simple-and-standard-costandard-pairings]]. Since the two lattice identifications are the actual source dictionary $[L(A)]\mapsto L_A$, $[P(A)]\mapsto P_A$ of [[thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases]] at parameter one, the identifications hold simultaneously and are mutually dual. [F2, given, algebra]

1.2 **The actual surviving-head calculation.** Fix $A\in\mathrm{Std}^\Lambda$ and let $M=f_i^{\mathcal O}L(A)$, or $M=e_i^{\mathcal O}L(A)$. The local residue theorem [[thm-residue-translation-functors-give-the-integrable-fock-space-action]] says $M=0$ exactly when the corresponding crystal edge is absent; otherwise its head is the simple $L(C)$ at that edge, and it is self-dual. The ground component $\mathrm{Std}^\Lambda$ is closed under the two crystal operators by [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]], so $C$ is standard. The actual detector/corner Hom comparison of [[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]] applies to maps from a Std-head object to a Std-socle object. Applying it to $M$ and $L(B)$ for each standard $B$ gives $\operatorname{Hom}_H(\pi M,D(B))\cong\operatorname{Hom}_{\mathfrak g}(M,L(B))$, of dimension $\delta_{CB}$. Since the $D(B)$ are the complete distinct Hecke simples, this computes the head of $\pi M$ as the single simple $D(C)$ and proves $\pi M\ne0$. The natural intertwining of [[thm-category-o-translation-intertwines-residue-induction-and-restriction]] identifies $\pi M$ with the appropriate Hecke translate of $D(A)$, and its natural duality comparison makes that translate self-dual. Its socle is therefore also $D(C)$. A direct sum of two nonzero finite-length modules has at least two nonzero simple head summands, so a module with simple head is indecomposable. If the edge is absent the translate is zero by the same natural isomorphism. This proves (iii) in both directions by a Hom calculation; no arbitrary head or socle preservation by an exact quotient is assumed. [F2, given, construct, algebra]

1.3 **The parameter-one normalization and label bijections.** At parameter one the quasi-canonical family satisfies $P_A=T_{A^\uparrow}$ and the costandard family is $D_A=\pi_{\mathrm{Fock}}L_A$ with $A\mapsto A^\uparrow$ the inverse rectification from standard to reverse-standard tableaux and $\downarrow$ the rectification in the opposite direction, by [[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]] and [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]; this gives (iv). [F2, given, algebra]

1.4 **Level zero.** For level $0$ the tower has $H^\Lambda_0=\mathbb C$ and $H^\Lambda_d=0$ for $d>0$ by the level-zero convention of [[def-degenerate-cyclotomic-hecke-tower-and-residue-functors]], so only $\alpha=0$ and the ground class remain, consistently with the two identifications being the rank-one lattices $\mathbb ZP_\varnothing=\mathbb ZD_\varnothing$. [given]

2.1 **The decomposition formula (i).** The formula $[S(B)]=\sum_{A\in\mathrm{Std}^\Lambda}d_{A,B}(1)[D(A)]$ for every $B\in\mathrm{Col}^\Lambda$ is the standard-class half of the identification of step 1.1; the coefficient dictionary $M_B=\sum_Ad_{A,B}(s)L_A$, $P_A=\sum_Bd_{A,B}(s)M_B$ is that of [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], and the full polynomial transition matrix, its unitriangularity and the restriction to standard simple labels are those of [[thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix]] and [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]]. This proves (i); no off-standard label is made a simple class. [step 1.1, F1, given, algebra]

2.2 **The Chevalley operators (ii).** The residue operators on $G_0$ are the Chevalley operators by [[thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module]], and the corresponding statement on $K_0$ for projective classes is [[thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module]]; on the category-O side both statements are the integrable Fock action of [[thm-residue-translation-functors-give-the-integrable-fock-space-action]] transferred by the actual natural residue comparisons. This proves (ii). [step 1.1, step 1.2, given, algebra]

2.3 **Arbitrary consecutive $I$.** Let $I$ be any nonempty consecutive set (possibly unbounded above or below), fix a content $\alpha$ and a finite list of residue operations, and choose a finite lower endpoint $k$ and upper endpoint $r$ so that the LETTER alphabet $[k,r+1]$ contains every charge and the ROOT interval $[k,r]$ contains the support of $\alpha$ and every shifted support occurring in the operations. The common-tail and double-cut compatibility of [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]] and [[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]], together with the contractible-central-corner restriction of [[def-the-higher-level-schur-weyl-projective-generator-and-schur-functor]] and [[thm-higher-level-schur-weyl-double-centralizer]], shows that added bottom occupancy is maximal in every column (so every new entry is forced ground) and added top occupancy is zero, and that the monomial, bar, global and projected basis equations are unchanged on the selected finite weight set. Hence the Hecke block is the same content component of the same $H_d(m)$, with the same intrinsic Specht modules, projective and simple labels, residue projectors and residue maps, and the blockwise statements of (i)-(iv) glue along these compatible finite pieces to give the arbitrary-$I$ statement. At the level of the block decomposition of the tower, the excluded blocks for $I\ne\mathbb Z$ are real (the supported cut is proper by [[def-degenerate-cyclotomic-hecke-tower-and-residue-functors]]), and no equality of $H^\Lambda$ with $\bigoplus_dH_d(m)$ is used. [step 1.1, step 1.2, step 1.3, given, algebra]

3.1 **Conclusion.** Step 1.1 assembles the simultaneous full upper/lower integral lattice identifications and their perfect mutual pairing; step 1.2 proves the residue head/socle/indecomposability rule; step 1.3 proves the parameter-one normalization with its correctly directed label bijections; steps 2.1–2.2 prove the decomposition formula and Chevalley action; step 2.3 glues the actual same-block and full-basis maps for arbitrary consecutive $I$; and step 1.4 gives the level-zero ground line. These are all clauses of the statement. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 2.2, step 2.3, given] ∎
