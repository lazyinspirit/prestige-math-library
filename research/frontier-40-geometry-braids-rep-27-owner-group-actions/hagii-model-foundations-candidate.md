# Candidate foundations packet for the genuinely derived cotangent definition

Prepared 2026-10-04 for the sole batch23 reviewer. This is a repair candidate, not an item, certification, or source-resolution decision. It does not clear `def-derived-scheme-and-cotangent-complex`. No manifest, readiness, coverage, ledger, task, or engine state was edited.

The exact input is `derived-blocker-map.json`, `derived-blocker-source-reading.json`, and the supplied strict three-adjunction proof. The ordinary polynomial-resolution packet closes the ordinary cotangent comparison; it does not supply the genuinely derived interfaces below. In particular, a localization of an ordinary category alone does not construct its coherent mapping spaces or homotopical descent.

## Source reading and applicability

1. Goerss–Schemmerhorn, *Model Categories and Simplicial Methods*, full PDF retrieved from <https://arxiv.org/pdf/math/0609537>. Full PDF: 502010 bytes, 47 pages, SHA256 `655ecd36b495eb63d0287d9988b9e8d6d7403b624279739b185a3b3553adb506`. Read PDF pages 18–23 and 25–29, including the complete printed arguments for 3.5, the complete statements and surrounding qualifications of 3.6/3.8, Dold–Kan 4.1/Proposition4.2/Lemma4.3, enriched constructions4.9–4.12, and the complete proof4.17 and cofibration argument4.21. Transfer3.6 is stated with its proof referred elsewhere. Theorem3.8 is stated without its full proof here. Theorem4.13 asserts the underlying simplicial model structures without supplying their complete corner-axiom proofs. Theorem4.17 proves the algebra transfer by invoking precisely those earlier premises. Thus reading4.17 is not a recursive proof of all its prerequisites. The printed4.14 cylinder display reverses boundary/simplex; use the defining endpoint inclusion instead.
2. Hirschowitz–Simpson, *Descente pour les n-champs*, full PDF retrieved from <https://arxiv.org/pdf/math/9807049>. Full PDF: 1780234 bytes, 251 pages, SHA256 `04a87f9c5af1043353c7024add52c83589d52d9198388849dd4f95bd0e076cef`. Read PDF pages198–200 and203–210: exact Theorem18.6, Corollary18.7, the homotopy-function-complex prerequisite description, and the entire displayed proof of18.6. Its essential-surjectivity input is18.2; full faithfulness uses Dwyer–Kan mapping-complex comparison, Reedy structures,18.8/18.9, and Segal-category homotopy pullbacks. Page206 explicitly leaves details of the homotopical Reedy comparison to the reader. The theorem has a **Reedy indexing-category hypothesis**, not the arbitrary-small-category hypothesis stated in HAGII B.0.7. Neither all of these earlier foundations nor the arbitrary-category reduction has been recursively proved by this reading.
3. HAGII full source and extracts were already supplied by the sole reviewer. Re-read the actual excerpts for Assumptions1.1.0.1–4; Proposition1.2.1.2/Lemma1.2.1.3/Definition1.2.1.5/Proposition1.2.1.6 (PDF22–24,32–35); AppendixB (PDF218–221). These explicitly import model foundations and explicitly omit the full strictification proof. The exact derived-context and étale-descent readings in the blocker map remain the authoritative source routes. This packet does not claim an additional reading of every theorem recursively cited by HAGII or Hirschowitz–Simpson.

New downloaded PDFs and extraction files were kept in `/tmp`, not added as shared run artifacts. The byte counts, exact URLs, hashes, sections read, and qualification above are the durable reading receipt in this candidate.

## A. An explicit small-object and transfer argument

The following abstract argument is complete **under its explicitly named elementary simplicial premises**. It is useful because the proof of transfer itself need not remain a citation. It does not erase those premises.

Fix a simplicial commutative ring A. Consider simplicial A-modules, simplicial unital A-algebras, or simplicial nonunital commutative A-algebras. Their forgetful functor U to simplicial sets has a left adjoint F: respectively A times the free simplicial abelian group, the degreewise polynomial algebra A[K], and the degreewise free nonunital commutative A-algebra on K. Limits exist; filtered colimits are degreewise and created in underlying sets. A simplex has finitely many operators in each fixed dimension; the free objects on a finite simplicial set have the required sequential smallness by the adjunction and finite presentation of that simplicial set. Here “finite” means finitely many nondegenerate simplices, not bounded cardinality of all simplices together. AC is permitted for simultaneous choices in the run's ordinary packet.

Take I={F(∂Δ[n])->F(Δ[n]): n≥0} and J={F(Λ^k[n])->F(Δ[n]): n≥1,0≤k≤n}. Let Fib=J-inj and let W be the maps inducing isomorphisms on normalized additive homology. The required elementary premises are:

- **E1:** for a simplicial abelian-group map, underlying horn lifting is equivalent to the positive-degree normalized surjectivity condition; every such group is Kan;
- **E2:** underlying boundary lifting is equivalent to horn lifting plus normalized quasi-isomorphism;
- **E3:** for each object X in the category, its strict cotensor path object P(X) has endpoint map P(X)->X×X in Fib and constant-path map X->P(X) in W; a simplicial homotopy gives identical normalized homology maps.

The ordinary packet supplies the normalization/prism homotopy conclusion and the surjective-quasiisomorphism boundary criterion. It has not been assumed to supply the entirety of E1 or the endpoint assertion in E3. This distinction is essential.

For an arbitrary f:X->Y, form Z0=X. At stage r attach, by a pushout, one copy of every codomain of a chosen generating map for every commutative lifting square into Zr->Y. Let Z=colim_r Zr. Every square from a generating domain into Z factors through one finite stage by smallness; the next-stage attachment solves it. Therefore f factors functorially as an I-cell map followed by I-inj, and also as a J-cell map followed by J-inj. Relative cell maps have the LLP against their indicated injectives by pushout, composition, and passage to colimits.

Here is the path-object part without a transfer citation. If i:X->Y has LLP against every Fib, apply it to the fibration X->0 (all objects fibrant by E1) to produce r:Y->X with ri=id_X. Apply it again to P(Y)->Y×Y with upper map the constant path on i and lower map (ir,id_Y). A lift gives a simplicial homotopy ir~id_Y. The prism assertion yields H(Ni)H(Nr)=id and H(Nr)H(Ni)=id, so i belongs to W. Thus all J-cell maps belong to W. They also have LLP against I-inj, since I-inj⊂J-inj by E2.

Define Cof to be the maps with LLP against I-inj. The I factorization shows every Cof is a retract of an I-cell map. A Cof map f in W can be J-factorized f=qj. We have j in W and q in Fib, so q in W by two-out-of-three, hence q in I-inj by E2. Lifting against q makes f a retract of j, proving the acyclic-cofibration lifting axiom. Conversely every map with LLP against Fib is in W by the explicit path argument and lies in Cof. All retract, lifting and factorization axioms now follow. W is closed under retracts and two-out-of-three because it is defined by homology. This proves the claimed transferred model structure when E1–E3 are supplied, without importing Theorem3.6.

**Actual remaining gap in this subpacket:** complete local E1 and path endpoint lifting, including fixed-variable-base cotensors, must be written and checked. One may prove them directly by the usual ordered degeneracy corrections for abelian horns, or prove the full Dold–Kan inverse and the module simplicial corner axiom. Neither merely naming Dold–Kan nor quoting4.13 closes this gap. The path retraction and cell/retract portions above are independently usable now; the resulting full model structure remains conditional.

## B. Fixed-base enrichment: correct cotensor construction

A naive replacement of a variable simplicial A-module by its underlying mapping simplicial set does not specify its A-action. The action must use the constant-map morphism A->A^K. Thus for M, its cotensor is the simplicial additive mapping object M^K with action obtained from A->A^K and the pointwise A^K-action. For A-algebras, its cotensor C^K receives its A-structure through A->A^K->C^K. For slice/augmented categories use the **relative** cotensor, i.e. pull back along the constant map from the prescribed base to its K-cotensor. This preserves the fixed structure map and augmentation.

Tensor and mapping objects are determined by these cotensor adjunctions; they are not degreewise polynomial extension by K in the algebra case. The enriched strict adjunctions are proved by applying the ordinary adjunction to every cotensor and checking the natural bijections commute with every simplicial operator. In particular the fixed-base extension/restriction, augmented/nonunital equivalence, and indecomposables/zero-multiplication adjunctions are enriched.

This gives explicit enriched adjunctions. To conclude **simplicial model** adjunctions additionally prove the corner axiom:

Map(Y,V)->Map(Y,W)×_{Map(X,W)}Map(X,V)

is a Kan fibration when X->Y is Cof and V->W is Fib, and is trivial when either map is acyclic. Cofibrant generation reduces this to generating boundary/horn cases, but the combinatorial boundary/horn product argument and its additive/relative-base verification must actually be supplied. Goerss–Schemmerhorn4.12 explains this reduction;4.13 does not contain its full proof. This remains a precise local prerequisite. An unenriched adjunction of homotopy categories does not prove a mapping-space equivalence.

Once the corner axiom is available, an enriched Quillen adjunction L⊣R gives the required derived mapping equivalence by an explicit replacement argument: take cofibrant X and fibrant Y; LX is cofibrant and RY fibrant, and Map(LX,Y)=Map(X,RY) strictly. If an intermediate object is replaced fibrantly/cofibrantly, the corner axiom and the trivial-fibration lifting axiom show its mapping spaces change by weak equivalence (factor and use homotopy inverses for the acyclic-cofibration part). This proves the derived adjunction formula. This last argument is conditional only on the model/corner foundations, not on a separate Dwyer–Kan theorem. Identifying the resulting enriched homotopy theory with the required coherent localization is another interface needed for global strictification.

## C. Derived relative derivations: exact formula and proof after B

Assume the model structures and corner axioms in A/B have been proved. No properness or tensor-flatness assertion is used without proof here. Let P->B be a cofibrant replacement of B in simplicial A-algebras augmented to B. Write D=B⊗_A P, with multiplication augmentation to B and its section from B. Extension/restriction is left/right Quillen because restriction creates Fib and W. Consequently D is cofibrant in the augmented B-algebra category. The strict augmented/nonunital equivalence transports it to a cofibrant nonunital B-algebra I=ker(D->B). Q is left Quillen because Z preserves underlying Fib and W. Therefore Q(I) is a cofibrant B-module.

For a B-module M (every underlying additive object fibrant), the enriched strict adjunctions give

Map_{A-alg/B}(P,B⊕M)
 = Map_{AugAlg_B}(B⊗_A P,B⊕M)
 = Map_{NUAlg_B}(I,ZM)
 = Map_{Mod_B}(Q(I),M).

Every term already has a cofibrant source and fibrant target, so these are the derived mapping spaces. This proves representation of derived relative derivations. An elementwise natural isomorphism identifies Q(I) with B⊗_P Ω_{P/A}: an augmented B-linear derivation of D into M is the same as an A-derivation of P into M through P->B; both are represented by the displayed modules. Alternatively map p to the class of 1⊗p minus its augmentation and verify the Leibniz relation modulo I². The universal derivation comes from the identity of this representing module. Replacement independence follows from mapping-space Yoneda once that lemma has been supplied in the constructed enrichment, or from functorial cofibrant replacements and the derived adjunction comparison just explained.

For a discrete map, choose P->B by the actual I-cell factorization of the initial ordinary A-algebra map A->B. In each degree F(∂Δ[n])->F(Δ[n]) is a polynomial-ring inclusion on a subset of the simplex variables. A pushout adjoins precisely the complementary variables, and a sequential union of these polynomial extensions is again a polynomial ring on the union of the variable sets. Therefore each P_k is polynomial over ordinary A; its augmentation is a boundary trivial fibration by I-inj/E2. The completed ordinary comparison packet applies to this chosen resolution, proving the discrete comparison without an additional cofibrant-flatness theorem. This bridge was supplied by the sole reviewer and is conditional only on the actual model/I-factorization construction in A, not on a new independent foundation.

This is a complete formal derivation argument contingent on explicit A/B foundations. It substantially specifies the HAGII1.2.1.2 route; it cannot presently be marked locally closed because A/B remain conditional.

## D. Homotopy base change: proof by the universal property

After the preceding mapping model and homotopy-pushout universal property have been constructed, let B'=B⊗^L_A A'. Let M be a B'-module. The homotopy-pushout mapping property in the augmented slice identifies maps from B' to B'⊕M over A' and over B' with maps from B to B'⊕M over A and over B'. The latter are identified with derivations from B to M: the pullback

B×_{B'}(B'⊕M)=B⊕M

is a homotopy pullback, because the square-zero projection is an underlying additive fibration with its split kernel M. Thus

Der_{A'}(B',M) ≃ Der_A(B,M).

Extension/restriction for B-modules gives

Map_{B'-Mod}(B'⊗^L_B L_{B/A},M)
 ≃ Map_{B-Mod}(L_{B/A},Res M)
 ≃ Der_A(B,M).

Together with C this constructs the natural base-change equivalence L_{B'/A'}≃B'⊗^L_B L_{B/A}. It is a natural mapping-space equivalence, giving overlap coherence once the coherent mapping construction and Yoneda are available.

The needed homotopy-pushout property is more than the existence of the categorical tensor pushout. A cofibrant span and pushout construction must be justified to compute it. One may avoid a global properness theorem by using a suitably cofibrant replacement of the whole span and a derived-colimit mapping argument; that argument still needs a diagram model structure and corner axiom. Do not claim that strict B⊗_A A' always equals its derived value, or that every simplicial A-module is tensor-flat. HAGII1.1.0.3 and1.1.0.4(2) are separate assertions.

## E. Flatness, properness and descent: precise unfinished frontier

A prospective tensor-flatness proof should use cofibrant cellular filtrations and the normalized/diagonal double-complex comparison. For modules over **variable simplicial** A, degreewise free modules alone do not automatically prove preservation of weak equivalences under tensor: the simplicial base, cell attaching maps, and quotient filtration must be handled. For algebras use the filtration of a polynomial cell extension by the new monomials, then the relative simplicial degeneracy decomposition, and finally filtered-colimit exactness. The normalized tensor comparison/shuffle and filtration convergence are needed. This packet has not proved those ingredients; thus neither cofibrant-flatness assertion is cleared. Right properness can be attacked by additive fibration pullbacks and exact homology sequences; left properness for algebra pushouts still requires precisely the cellular flatness proof. Do not infer either from transfer.

For global cotangent gluing, ordinary descent for modules and for stacks in groupoids does not prove descent for derived quasi-coherent modules. There are three distinct interfaces:

1. strict/cartesian cosimplicial module diagrams over a derived affine étale hypercover;
2. their homotopy-coherent counterparts and strictification equivalence;
3. effective descent and coherent mapping spaces, including unbounded Postnikov/totalization convergence.

Hirschowitz–Simpson18.6 is a more informative source than the omitted proof in HAGII AppendixB, but its proof imports the essential-surjectivity rectification18.2 and the Dwyer–Kan/function-complex/Segal-category machinery. Reading its full argument does not make those imports local suppliers. It is stated for Reedy categories; Δ is Reedy, which fits a cosimplicial hypercover, but this does not automatically establish the arbitrary-small-category version B.0.7 or a coherently varying module category over ring maps. Required tasks: construct the variable-module diagram model structures; prove functorial replacements and Reedy matching/latching factorization; construct coherent localization and compare mapping complexes; prove essential-surjectivity rectification; verify the cartesian subcategory comparison. These are exact proof gaps, not source unavailability.

A bare spectral sequence E2^{p,q}=H^p(π_q M^•)=>π_{q-p}Tot(M^•) does not by itself justify descent for arbitrary connective modules: q and p may both grow without bound along a fixed total degree. A useful route is a Postnikov argument. First prove descent for a single layer K(N,q) via flat base change and ordinary étale hypercover cohomological descent. Then prove it for bounded Postnikov truncations by successive fiber sequences. Finally construct M≃lim_n τ≤n M and prove the homotopy-limit functor preserves these limits. Establish that the cartesian module diagram admits compatible truncations after étale base change. This avoids asserting unjustified convergence of an unbounded spectral sequence, but still needs Postnikov completeness, totalization, hypercover cohomological descent, and coherent strictification. None of those homotopical assertions has been proved in this candidate.

The familiar Čech contracting argument for a faithfully flat affine cover only proves the ordinary augmented Amitsur module complex is exact. It does not imply all hypercover descent, coherent module descent, or descent of arbitrary enriched mapping objects without these remaining steps.

## Disposition for sole-owner integration

The complete new abstract cell/retract proof in A, the correct variable-base enrichment formulas in B, and the exact conditional derivation/base-change proofs in C/D can be retained as proof-route evidence. They should be incorporated as certified local suppliers only once all their explicitly stated hypotheses have current proved suppliers. The actual unproved premises are E1/E3/corner foundations; cofibrant flatness and properness where used; homotopy pushout/diagram mapping constructions; coherent module localization/strictification; effective derived étale hyperdescent with justified Postnikov/totalization completeness. No source-only substitution here closes the full derived definition. Keep its owner hold on those premises. The ordinary cotangent comparison's completed scope is unaffected.

## F. Complete additional local Dold–Kan packet

This section supplies a genuine finite proof, rather than importing the statement Goerss–Schemmerhorn4.1. New exact source: Stacks Project, *Simplicial Methods*, <https://stacks.math.columbia.edu/download/simplicial.pdf>, full PDF retrieved, 682694 bytes,71 pages, SHA256 `87847df7287b59afaf814cfffa2a1cd7c431869e1b455d3840ece4e44bbc2015`. Read the full proofs of18.5–18.8 (017U–017X; PDF20–22) and24.1–24.3 (019E–019G; PDF40–43), including the composition-case analysis and the inverse comparison. The argument below uses precisely the normalization convention of the ordinary packet, N(U)n=∩_{i<n}ker(di), differential(-1)^n dn.

**Functorial direct-sum decomposition.** Every simplicial abelian group U has the natural isomorphism

⊕_{α:[n]↠[r]} N(U)r -> U_n,

whose α-component is U(α). Here is the full decomposition and uniqueness argument. In degree n+1, start x_{-1}=x and successively set z_i=d_i x_{i-1} and x_i=x_{i-1}-s_i z_i for i=0,…,n. Then d_i x_i=0. If the earlier faces d_j x_{i-1} vanish for j<i, the identity d_{i-1}d_j=d_jd_i and d_js_i=s_{i-1}d_j show

0=d_jx_i+s_{i-1}d_jz_i,  d_{i-1}d_jx_i=0.

A sum a+s_{i-1}b with d_{i-1}a=0 is uniquely split, because applying d_{i-1} recovers b. Therefore d_jx_i=0 and d_jz_i=0 for all j<i. This proves

U_{n+1}=N(U)_{n+1} ⊕ ⊕_{i=0}^n s_i(∩_{j<i}ker(d_j:U_n->U_{n-1})).

It is direct, not merely a spanning formula: the algorithm recovers every summand uniquely. Moreover the same algorithm applied to an element in ∩_{j<k}ker d_j has its first k summands zero. Apply that recursive splitting to each z_i; its further degeneracy indices begin at i. Induction on degree consequently produces exactly the sums s_{i1}…s_{it}w with i1≤…≤it and w normalized in degree n+1-t. Each surjection [n+1]↠[n+1-t] has exactly one such canonical degeneracy expression: its repeated fibers specify the collapsed adjacent positions, read in nondecreasing order. Thus the recursive uniquely recovered summands are in bijection with surjections, proving the displayed direct-sum isomorphism. The algorithm consists entirely of face/degeneracy/additive maps and hence is natural. Also d_n maps N(U)n to N(U)_{n-1} by d_jd_n=d_{n-1}d_j. This proves the normalization differential is defined, and its square is zero by d_{n-1}d_n=d_{n-1}d_{n-1} and normalization.

**Construct the inverse.** For a nonnegative chain complex C, set

Γ(C)_n=⊕_{α:[n]↠[r]} C_r.

For φ:[m]->[n] and the α-summand, put β=αφ. If Imβ is an initial interval [s] with s=r, map by identity to the β-summand. If Imβ=[r-1], map by(-1)^r d_C to the β-summand. In every other case use zero. The latter includes a gap in the image or loss of at least two terminal vertices. This convention follows normalization with the *last* face nonzero; the version using the first face instead has the corresponding reversed convention.

These formulas respect composition. If an intermediate image has a gap, a later initial-interval image necessarily lies below that gap and has lost at least two vertices, so its direct formula is also zero. Losing two or more terminal vertices remains zero after further restriction. If the first map loses none, the second rule is exactly the composite rule. If it loses one, the second map either loses none (giving the same single signed differential), has a gap (zero), or loses at least one more; the only possibly nonzero iterated case then gives d_C²=0. Identities plainly act identically. Thus Γ(C) is a simplicial abelian group, functorially in C.

Its degenerate summands are exactly those with r<n; every nonidentity surjection factors through an elementary degeneracy, and the simplicial rule makes that factorization the identity on the corresponding coefficient. The id_[n] coefficient C_n has all faces zero except the last, which is(-1)^n d_C. Therefore the normalization of Γ(C) is exactly C, with the correct differential. This identifies NΓ(C)=C naturally.

Conversely, the direct-sum map ΓN(U)->U above is bijective in every degree. For a simplex operator φ its compatibility can be checked on an α-summand. If αφ has a missing index j<r, factor through the jth face; that face vanishes on N(U)r. If the image is initial but has lost at least two terminal indices, first factor through the face r-1, which again vanishes on N(U)r. If no index is lost, the composite is U(αφ). If only the last index is lost, the restriction is the last face, equal to(-1)^r d_N. These are exactly the four Γ rules. Hence ΓN(U)->U is a natural simplicial isomorphism. The two natural isomorphisms prove the full equivalence, including faithfulness, exactness and replacement of simplicial additive objects by nonnegative complexes. Exactness can also be read directly from the natural direct-sum decomposition. For simplicial modules over a **constant** ring R, the entire argument is R-linear and proves the same equivalence. It does not turn a variable simplicial A-module into an ordinary chain complex over a fixed ring A; variable-base module transfer is still required.

**Narrower hold after F.** Full Dold–Kan is now supplied by an actual proof and exact full source. It should no longer be listed as an unproved premise if the sole owner accepts this packet. The remaining local model construction requirements in A/B are the Kan horn/path/corner statements, not an unspecified DK equivalence. F does not prove the simplicial corner axiom or coherent localization/strictification.
