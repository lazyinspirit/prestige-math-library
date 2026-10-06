# Hopf Algebras & Hecke Algebras — first-principles prose scaffold

Owner-authorized 2026-10-07. This track creates 17 Hopf/Hecke A/B pairs and one foundational supplier
pair in the separately approved Coxeter Groups category. All pages are **draft**, with empty canonical item arrays. The 111 named
contracts below are proposed locally proved suppliers for future authoring,
not existing proved items. Registration, source reading and mathematical design
are not proof-completion certificates. An application can consume a proposed
supplier only after its full local proof and normal build gates are complete.

## 0. Scope, definitions and ownership

The common entrance supplies tensor descent and coherence, free presentations,
quotients, finite duality and scalar extension. The Hopf branch develops
coalgebras, comodules, bialgebras, convolution and antipodes, finite-dual and
quotient constructions, tensor representations and duals, Hopf modules,
integrals, Frobenius duality, Maschke, quasitriangular structures and finite
quantum doubles. The Hecke branch proves Coxeter word control before generic
compatible-parameter Hecke basis, parabolic induction, traces, specialization,
abstract type-A affine PBW, traditional multiplicative cyclotomic PBW and
cellular module theory. The join constructs a concrete Hecke symmetry and
separately supplies the generic quantum tensor centralizer argument.

A property-based definition (coalgebra, antipode, integral, cell datum, Hecke
symmetry) specifies a class and does not assert every input has that property.
Existence, uniqueness, nonzero models, quotient/tensor descent, closure,
basis independence and convention compatibility are separate supplier
obligations explicitly placed before their consumers. A definition cannot
hide its own proof in the word “standard.” `justified_by` points to its later
well-definedness proof; that proof depends on the definition and must never
also be a dependency of the definition. This avoids definition-proof cycles.

**Coefficients.** Hopf foundations are over a stated field k. Full algebraic
dual Hopf structure and canonical finite coevaluation require finite dimension.
Right duals require bijective antipode; finite bijectivity is proved after,
not before, Hopf-module decomposition. General tensor exactness over a field
uses AC only when an arbitrary basis/complement is actually selected, declared
with `def-axiom-of-choice`. Finite constructions and supplied finite bases use
no arbitrary choice. Hecke foundations first use a universal Laurent ring over
Z, prove a basis there, then use arbitrary base change. The Coxeter set S is finite throughout; W need not be finite. Finite-variable universal rings therefore suffice. Formal completion is
confined to HH-14's explicit matrix-unit lifting proof. Generic quantum
centralizers are only over Q(q); root-of-unity or modular equality is not
promised by that theorem.

**Distinct homes.** General group representations stay in Representation
Theory of Groups. Special Topics in Representation Theory owns the existing
specialized representation/application tracks. Braid Groups stays independent.
The drafted scheme-theory pair
`affine-group-schemes-hopf-algebras-and-rational-representations` keeps its home;
it is an application cross-link, not an entrance prerequisite. Existing generic
type-A Hecke items on
`principal-series-representations-of-gl-n-over-a-finite-field`, Soergel-normalized
items on `type-a-soergel-bimodules-and-hecke-categorification`, and existing
Hecke Specht/quantum/KLR/KL plans keep their IDs and established owners.
The new `hh-` item stems distinguish general foundations from those applications.
HH-11 and the approved symmetric/permutation foundations now live in Coxeter
Groups; all supplier page and item IDs remain stable.
No new page currently consumes their unfinished plans as proved suppliers.

## 1. Full-text source evidence and what it supports

The commissioned agents read three distinct extensive authoritative lecture
texts in full: Schneider, *Lectures on Hopf algebras* (56 PDF pages);
Etingof–Semenyakin, *A brief introduction to quantum groups*, arXiv:2106.05252v3
(43 pages); and Geck, *Modular representations of Hecke algebras*,
arXiv:math/0511548v2 (54 pages). Hiss's 22 slides are additional full reading,
not substituted for an extensive text. No uninspected textbook is counted.

The article reader read all five requested papers in full: Etingof–Gelaki
q-alg/9712033v1 (7 pages), math/9905168v2 (11), math/0202258v3 (8),
Brundan–Kleshchev 0808.2032v4 (32), and Elias–Williamson 1212.0791v2 (45).
Citation snapshots and version-pinned hashes appear in the article report.
Additional Lusztig/Haines–Kottwitz–Prasad/Mathas texts were fully extracted but
only the exact reported sections were read; extraction is not a full-reading
claim. The downloaded texts remain outside the tracked corpus. Source reading
includes bibliographies but is not independent solution of every exercise.

| Evidence report | Exact source uses and boundaries |
|---|---|
| [Hopf full-text report](hopf-hecke-scaffold/hopf-source-report.md) | Schneider §1 pp.2–21: definitions, convolution and antipode identities; §2 pp.22–26: explicit Hopf-module inverse and finite integrals; §3 pp.27–29: Frobenius/averaging. Includes an independent complete coalgebra-local-finiteness route and source formula corrections. |
| [Hecke full-text report](hopf-hecke-scaffold/hecke-source-report.md) | Geck §§2,4,5,8; Lusztig §§1.1–1.10 pp.1–5, §§3.1–3.3 pp.8–9: signed-reflection exchange, Matsumoto and noncircular regular-module basis. Haines–Kottwitz–Prasad §§1.6–1.15 informs affine proof obligations, but its p-adic PBW is not transferred without geometry. Mathas §§1.1–1.5 informs cellular contracts and exposes imported cyclotomic PBW. |
| [Quantum full-text report](hopf-hecke-scaffold/quantum-source-report.md) | Etingof–Semenyakin §§2.1–2.4: tensor/dual motivation; §§3.2,3.4: finite double and quasitriangular axioms. Explicit ordered-basis Hecke operator checked independently on all 27 order/equality triples; symbolic verification informs but does not replace the written local proof. |
| [Five article report](hopf-hecke-scaffold/arxiv-source-report.md) | Brundan–Kleshchev §2.1: polynomial divisibility and series-representative cautions. Elias–Williamson §3.2: normalization; positivity has a separate deep prerequisite closure. Etingof–Gelaki: normalized twist gauges, categorical versus ordinary dimensions, and extensive classification hypotheses. |

## 2. Earliest supplier and implicit-prerequisite audit

Published suppliers below were inspected in their current full item bodies,
with their actual hypotheses. Their existing audit metadata is evidence of
current repository status, not a fresh independent audit by this planner.
Every remaining silent source assumption is assigned to an earlier local
contract below or is excluded from the claimed branch.

| Needed fact | Actual existing proved supplier / earliest new local supplier | Exact limitation |
|---|---|---|
| Tensor construction, finite sums and bilinear descent | `thm-universal-property-of-module-tensor-products`, `prop-elementary-tensor-formulas-descend-exactly-when-balanced` on `tensor-products-of-modules` (published, audited 2026-08-16) | Balanced inputs; a tensor symbol alone does not prove a map exists. |
| Tensor associator, unit and product basis | `thm-symmetry-and-associativity-over-a-commutative-ring`, `thm-unit-isomorphisms-for-module-tensor-products`, `thm-tensor-product-basis-from-bases` on the same page (published, audited 2026-08-16) | Coherence diagrams are additional HH-1 obligations; given bases do not assert choice-free existence of arbitrary bases. |
| Central scalar algebra and tensor multiplication | `def-algebra-over-a-commutative-ring`, `thm-tensor-product-of-algebras-over-a-commutative-ring` (published, audited 2026-08-16) | Commutative base ring and central structure maps are essential. |
| Field tensor algebra, universal extension | `def-tensor-algebra-of-a-vector-space`, `thm-universal-property-of-the-tensor-algebra` (published, audited 2026-09-14) | HH-1 separately constructs free associative algebra over universal Hecke rings. |
| Ring quotient universal property | `thm-quotient-ring-universal-property` on `ideals-and-quotient-rings` (published, audited 2026-08-02) | A two-sided ideal; coalgebra, counit and antipode descend separately in HH-2/5. |
| Finite dual bases | `thm-dual-family-is-a-basis-in-finite-dimension` (published, audited 2026-08-13) | HH-1 supplies tensor-dual isomorphism and basis-independent coevaluation; infinite dual surjectivity is never inferred. |
| Arbitrary vector-space complements / coordinate extension | HH-1 tensor-injection and coefficient-separation proof with `def-axiom-of-choice` when genuinely needed | AC travels to coalgebra/comodule local-finiteness proofs using infinite ambient spaces; no unsupported choice-free statement. |
| Tensor-kernel identity and quotient coactions | HH-1 `lem-hh-tensor-injections-quotients-and-kernels-over-a-field` | Restricted to fields; ring flatness not presumed. |
| Rationality of dual modules | HH-3 `thm-hh-comodules-and-rational-dual-modules` | All modules are rational only for finite coalgebras. |
| Convolution, opposite maps and antipode properties | HH-4, with explicit Hom(C,A) associativity and both inverse equations | Composition and convolution are different; bijectivity comes later. |
| Hopf quotient counit/antipode conditions | HH-5 quotient theorem | Includes ε(I)=0 and S(I)⊆I; ring ideal alone is insufficient. |
| Finite integrals and S inverse | HH-7 range-valued Hopf-module inverse → HH-8 dual regular structure → one-dimensional integrals and finite bijectivity | No circular use of S^-1 in HH-7/8. |
| Monoidal category language / braiding / leg notation | HH-1 concrete coherence → HH-6 concrete module category → HH-9 leg embeddings and hexagons | No abstract category theorem is silently imported. |
| Double associativity, pairing and tensor equivalence | HH-10 crossing-map distributive laws, structural maps and explicit inverse functors | Finite H; every source exercise is a named obligation. |
| Free groups and presented-group existence | HH-11 reduced-word free group and quotient universal property | Must prove rank-two orders survive; quotient by relations alone is insufficient. |
| Coxeter exchange and reduced words | HH-11 signed-reflection action, exchange/deletion, Matsumoto, parabolic decomposition | General geometric root positivity and faithful chamber geometry are unnecessary and not assumed. |
| Hecke independence and associative multiplication | HH-12 commuting left/right length operators on a free module | No cancellation of torsion before basis theorem; all six length cases checked. |
| Trace perfection vs semisimplicity | HH-13 dual trace basis; HH-14 radical nilpotence and regular-trace determinant | Symmetrizing form alone does not imply semisimplicity. |
| Formal lifting / convergence | HH-14 successive idempotent and matrix-unit corrections in a complete ring | No generic algebra splitting inferred from merely nonzero determinant. |
| Laurent divisibility and crossed-product PBW | HH-1 Laurent ring → HH-15 divided difference, skew group algebra and leading permutation coefficient | Universal-ring proof precedes arbitrary base change; denominators are absent from the defining Laurent-polynomial relation. |
| Cyclotomic spanning, generic modules, total dimension | HH-16 transport/straightening → separated-content seminormal models → colored RSK → explicit matrix units | Neither affine quotient nor source citation proves rank r^n n!. |
| Integral Murphy basis, cellular layer and radical | HH-17 integral Garnir straightening, generic independence, layer coefficient laws, form invariance | Generic diagonalization cannot justify singular-parameter integral formulas. |
| Quantum Serre, commutation and centralizer dimensions | HH-18 explicit tensor generator relations, every order/equality braid case, local commutation, classical/generic two-sided dimension bounds | A commuting action only proves inclusion; full centralizer equality has its own source/readiness gate. |

The machine inventory contains the exact 111 unique local contract IDs. The
page graph is `hopf-hecke-scaffold/pages.json`; its item arrays deliberately
remain empty. Definitions and lemma statements here are design contracts,
not `items/` carriers, so existing publication/verification fields are not
copied onto them. A future author must expand any grouped foundational lemma
into as many earlier local suppliers as its complete proof requires.

## 3. Page graph and ordered contracts

Each A page requires exactly the earlier pages listed here. Each B companion
requires only its A page and remains a dependency leaf. Published prerequisite
page IDs resolve through their established homes even after category moves.

## HH-1 — Tensor Coherence and Algebraic Descent

**A:** `tensor-coherence-and-algebraic-descent`. **B:** `tensor-coherence-and-algebraic-descent-examples`.

**Requires:** `tensor-products-of-modules`, `modules-and-module-homomorphisms`, `ideals-and-quotient-rings`, `dual-spaces-bilinear-forms-and-inertia`, `linear-independence-bases-and-dimension`, `linear-maps-rank-nullity-and-quotient-spaces`, `chain-conditions-and-semisimple-modules`, `relations-functions-and-quotients`.

A formula involving tensors becomes mathematics only after it descends from a multilinear map. The opening page proves the coherence and descent tools that later sources usually suppress. Scalars are a field k for the Hopf branch; the Hecke branch will explicitly introduce its universal commutative coefficient rings. No infinite tensor expansion or implicit completion is permitted.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-scalar-and-tensor-conventions` | Fix algebraic tensors, left-associated tensor powers, the empty tensor k, opposite algebra, and finite-sum notation. These use the published tensor and algebra definitions; parentheses are removed only after the next coherence lemma. |
| `lem-hh-tensor-coherence-on-elementary-tensors` | Verify associator naturality, the pentagon, unit triangle and symmetry hexagon on pure tensors; spanning then proves each diagram. This is a concrete proof for vector spaces, not an appeal to general coherence. |
| `lem-hh-tensor-injections-quotients-and-kernels-over-a-field` | Prove tensoring an injection is injective and ker(p⊗q)=U⊗W+V⊗Z for quotient maps p:V→V/U,q:W→W/Z. Extend finite bases locally; arbitrary complements use explicit AC and def-axiom-of-choice. |
| `lem-hh-coefficient-extension-and-finite-tensor-separation` | Assuming AC only for infinite ambient spaces, extend a given finite independent family to a basis and extend its coordinate maps by zero on the complement. For Σv_i⊗w_i with the v_i independent, contraction by these maps recovers each w_i, proving evaluation separation. In finite ambient dimension ordinary finite basis extension suffices without AC. This is the exact infinite-dual/rational-coaction justifier and records where Choice enters. |
| `lem-hh-finite-tensor-duality-and-canonical-coevaluation` | Construct V*⊗W*→(V⊗W)*, prove it is an isomorphism for finite dimensions by product dual bases, and identify Σv_i⊗v_i* with id_V independently of basis. Infinite full-dual surjectivity is not claimed. |
| `lem-hh-free-associative-ring-and-relations-descent` | Construct R⟨S⟩ as the free R-module on finite words for commutative R, including the empty word; concatenation is associative. Prove its universal property, two-sided generated-ideal description and quotient algebra universal property. This extends the published field tensor-algebra supplier to Hecke coefficient rings. |
| `lem-hh-universal-presentations-and-base-change` | Prove presentation base change by explicit mutually inverse generator maps: S⊗R R⟨X⟩ identifies with S⟨X⟩ on the word bases, and (S⊗R A)/(image S⊗R I) identifies with S⊗R(A/I) by its balanced-map universal property. This proves the needed right exactness locally without flatness. Tensor an explicitly proved universal basis isomorphism and its inverse to transport the basis to every commutative specialization. |
| `lem-hh-finite-polynomial-and-localization-constructions` | Construct multivariate polynomial and Laurent rings from finitely supported monomials over a commutative coefficient ring. Prove the universal properties by substitution of finite sums. When the coefficient ring is a domain (in particular Z or Q), ordered exponent leading terms prove the polynomial/Laurent rings are domains; construct their fraction fields from equivalence classes of numerator/denominator pairs and check operations. No domain assertion is made over a ring with zero divisors. Only finitely many variables are needed: the Coxeter generator set is finite even when W is infinite. |
| `lem-hh-finite-matrix-and-module-preliminaries` | Supply Gaussian elimination, determinant/adjugate identities, and invariance of finite matrix rank under field extension by minors. A square spanning family in a finite free module has a coordinate matrix with a right inverse, hence unit determinant and is a basis. For finite-dimensional algebra modules, strict submodule chains reduce vector dimension; choose a maximal proper submodule by maximal finite dimension to build a finite composition series. Prove a submodule of a finite direct sum of simples splits by induction on the number of summands, without arbitrary Choice. A nilpotent endomorphism has trace zero using its kernel filtration and a finite adapted basis. These finite facts supply HH-14 and later density/dimension arguments without silently appealing to Wedderburn or infinite module decomposition. The published module/simple/semisimple definitions supply terminology; their arbitrary-module complement theorem is not used. The finite splitting proof writes a submodule of S⊕M either as S⊕(N∩M), or as a graph over its projected, inductively split image in M. |
| `lem-hh-regular-module-detects-linear-and-tensor-identities` | Prove faithful left-regular evaluation at 1 and its tensor powers detect equality of algebra elements. A multilinear identity checked on spanning pure tensors holds globally; a quotient identity requires prior descent. |

**Examples:** Show that u⊗v has many finite presentations but a bilinear contraction is invariant; work out pentagon on four named vectors, tensor quotient by a one-dimensional subspace, and finite coevaluation in two bases. Give an infinite-dimensional dual example where the tensor-dual identification fails.

## HH-2 — Coalgebras, Counits, and the Fundamental Coalgebra Theorem

**A:** `coalgebras-counits-and-the-fundamental-coalgebra-theorem`. **B:** `coalgebras-counits-and-the-fundamental-coalgebra-theorem-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`.

A coalgebra reverses the structure arrows of an associative algebra: one input is split into two outputs. Associativity becomes coassociativity, and the scalar-valued counit deletes either output. These are equations of linear maps with the tensor constraints supplied by HH-1, rather than equations of fictional uniquely determined Sweedler components.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-coalgebra-and-coalgebra-map` | Specify Δ:C→C⊗C, ε:C→k, (Δ⊗id)Δ=(id⊗Δ)Δ, and (ε⊗id)Δ=id=(id⊗ε)Δ. Coalgebra maps preserve both maps. This is a property-defined class, with existence established by the explicit examples below. |
| `lem-hh-counit-uniqueness-and-finite-sweedler-calculus` | If ε and ε′ are counits, apply ε⊗ε′ to Δ to prove equality. Explain Sweedler notation as a finite tensor sum; every subsequent contraction must be a linear map and invariant under changing that sum. |
| `def-hh-subcoalgebras-coideals-and-quotient-coalgebras` | Define subcoalgebra, and coideal I with Δ(I)⊆I⊗C+C⊗I and ε(I)=0. The quotient formula is conditional until the following descent theorem proves existence. |
| `thm-hh-coalgebra-quotient-and-kernel-descent` | Use the tensor-kernel lemma to prove Δ descends to C/I and the two coalgebra identities descend. A coalgebra-map kernel is a coideal over a field. Give the universal property and prove sums of subcoalgebras are subcoalgebras. |
| `lem-hh-finite-comatrix-coalgebra-exists` | On basis c_ij set Δ(c_ij)=Σ_l c_il⊗c_lj and ε(c_ij)=δ_ij. Verify both coalgebra axioms by finite index reordering. The one-dimensional group-like coalgebra Δ(c)=c⊗c, ε(c)=1 supplies a nonzero entrance example. Defer polynomial primitive examples until the polynomial construction and bialgebra descent in HH-4; no later construction is assumed here. |
| `thm-hh-fundamental-theorem-of-coalgebras` | For c, choose Δ(c)=Σa_i⊗b_i with b_i independent. Coassociativity and coefficient functionals give Δ(span a_i)⊆span a_i⊗C. Its finite matrix coefficients c_ij satisfy Δ(c_ij)=Σ_l c_il⊗c_lj; counitality puts c in their span. Sum these subcoalgebras for a finite set. Prove coefficient functionals extend if C is infinite; declare AC exactly there, or reconstruct the required finite coefficient maps by a quotient separation supplier. |

**Examples:** Compute group-like and primitive elements in finite-dimensional small coalgebras, quotient a comatrix coalgebra by a counital coideal, and show why ε(I)=0 is indispensable. The fundamental theorem is over fields, not arbitrary rings.

## HH-3 — Comodules, Matrix Coefficients, and Coalgebra Duality

**A:** `comodules-matrix-coefficients-and-coalgebra-duality`. **B:** `comodules-matrix-coefficients-and-coalgebra-duality-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `coalgebras-counits-and-the-fundamental-coalgebra-theorem`.

A right comodule records a vector together with the coalgebra coefficients of its transformation. The definition is the arrow-reversed counterpart of a left module. Matrix coefficients make its axioms explicit and show why dual-algebra descriptions need a rationality restriction in infinite dimension.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-right-comodule-and-comodule-morphism` | Define ρ:M→M⊗C with (ρ⊗id)ρ=(id⊗Δ)ρ and (id⊗ε)ρ=id. Define compatible linear maps and subcomodules. Existence: the regular comodule C and finite matrix-comodules are checked locally. |
| `lem-hh-comodule-kernels-quotients-and-coefficient-identities` | Use tensor exactness to construct kernel, image and quotient comodules. In a finite basis write ρ(v_j)=Σ_i v_i⊗c_ij; compare coefficients to prove the comatrix identities. No basis coefficient is treated as canonical. |
| `lem-hh-every-comodule-element-lies-in-a-finite-subcomodule` | Given ρ(m)=Σv_i⊗c_i with c_i independent, coassociativity shows span(v_i) is a finite right subcomodule and counitality puts m in it. As in HH-2, state AC for any extension of finite coordinate functionals. |
| `def-hh-dual-algebra-and-rational-module` | Give convolution multiplication on C* explicitly. A C*-module is rational when every vector admits a finite tensor whose evaluation gives its entire C*-orbit; existence/uniqueness of this tensor must precede naming its coaction. |
| `thm-hh-comodules-and-rational-dual-modules` | Prove dual functionals separate finite tensors, reconstruct the unique coaction from rationality, and derive its axioms from the module laws. Conversely obtain the C*-action from a coaction. For finite C every module is rational; no such assertion for general C. |
| `thm-hh-finite-algebra-coalgebra-duality` | Transpose multiplication and unit under finite tensor duality to make A* a coalgebra; transpose Δ,ε to make C* an algebra. Prove functoriality, reversal and the finite bidual equivalence. Distinguish finite objects from finite-dimensional comodules over an infinite coalgebra. |

**Examples:** Build group-graded vector spaces as kG-comodules, compute two-dimensional coefficient matrices, and exhibit why an arbitrary C*-module need not reconstruct a coaction when C is infinite.

## HH-4 — Bialgebras, Convolution, and Antipode Identities

**A:** `bialgebras-convolution-and-antipode-identities`. **B:** `bialgebras-convolution-and-antipode-identities-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `coalgebras-counits-and-the-fundamental-coalgebra-theorem`, `comodules-matrix-coefficients-and-coalgebra-duality`.

The diagonal action of a group on two representations uses g↦g⊗g, while a primitive symmetry uses x↦x⊗1+1⊗x. Requiring this splitting to respect multiplication leads to the bialgebra axioms. Inversion is then encoded by convolution, a multiplication on linear maps that differs from composition.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-bialgebra-and-bialgebra-map` | Define a coalgebra and a unital k-algebra on H with Δ and ε unital algebra maps, using the published multiplication on H⊗H. Equivalently m and u are coalgebra maps; prove the equivalence by writing all diagrams. |
| `lem-hh-convolution-algebra-associativity-and-unit` | On Hom(C,A) set f*g=m(f⊗g)Δ. HH-1 descent gives a linear map; associativity follows from the threefold tensor diagram and uε is the two-sided unit. This works without finite dimensions. |
| `def-hh-hopf-algebra-and-antipode` | A Hopf algebra is a bialgebra for which id_H has a two-sided convolution inverse S. The two equations are m(S⊗id)Δ=uε=m(id⊗S)Δ. This does not assert compositional bijectivity of S. |
| `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication` | Prove uniqueness in a unital associative convolution algebra; then use convolution on Hom(H⊗H,H) and Hom(H,H⊗H) to prove S(ab)=S(b)S(a), ΔS=(S⊗S)τΔ, S(1)=1 and εS=ε. Supply both inverse calculations, not a citation to antipode folklore. |
| `lem-hh-group-and-polynomial-hopf-algebras-exist` | Construct kG as the free vector space on the supplied group, and k[x] with primitive x. Verify all identities on bases or generators after algebra descent. For finite G construct k^G using finite-set tensor identification; infinite all-functions Hopf structure is not claimed. |
| `lem-hh-commutative-or-cocommutative-antipode-is-involutive` | Show S²=id under either specified hypothesis via convolution inverse uniqueness. Neither this conclusion nor antipode bijectivity is part of the general definition. |

**Examples:** Compare group algebra and function algebra for a finite nonabelian group; compute convolution of linear maps; show why treating S as an ordinary inverse of id is meaningless. Polynomial examples work in every characteristic, with characteristic-dependent primitive elements.

## HH-5 — Hopf Ideals, Finite Duals, and Basic Constructions

**A:** `hopf-ideals-finite-duals-and-basic-constructions`. **B:** `hopf-ideals-finite-duals-and-basic-constructions-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `coalgebras-counits-and-the-fundamental-coalgebra-theorem`, `comodules-matrix-coefficients-and-coalgebra-duality`, `bialgebras-convolution-and-antipode-identities`.

A quotient Hopf algebra requires three different descents: multiplication, coproduct/counit, and antipode. Linear duals require a different check: transposed multiplication must land in an algebraic tensor product. Keeping these obligations separate prevents both the missing-counit-ideal error and the infinite full-dual error.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-hopf-ideal-and-hopf-subalgebra` | Define a two-sided ideal I with Δ(I)⊆I⊗H+H⊗I, ε(I)=0 and S(I)⊆I. Define Hopf subalgebra by closure under all structural maps; an arbitrary subbialgebra is not silently called Hopf. |
| `thm-hh-hopf-quotient-kernel-and-tensor-product-constructions` | Prove all quotient maps descend and satisfy the Hopf equations. Over a field, prove kernels of Hopf maps satisfy every condition. Construct tensor products using checked tensor multiplication, flipped middle factors, counit and tensor antipode; prove axioms. |
| `thm-hh-finite-dimensional-dual-hopf-algebra` | Use HH-1 finite duality and HH-3 algebra/coalgebra duality, then transpose the bialgebra and antipode equations. The antipode is S*; no prior bijectivity assumption is needed. |
| `def-hh-finite-dual-of-an-associative-algebra` | Set A° to functionals annihilating a finite-codimensional two-sided ideal. It is a vector subspace: use intersection ideals and the finite-dimensional embedding A/(I∩J)→A/I⊕A/J. Define transposed multiplication only after proving its image lies in A°⊗A°. |
| `thm-hh-finite-dual-coalgebra-and-hopf-descent` | For f factoring through A/I, transpose quotient multiplication by finite duality to obtain a tensor in (A/I)*⊗(A/I)*; evaluation separation proves independence and coalgebra axioms. Prove finite-dual functionals are exactly coefficients of finite representations: a quotient regular representation supplies one direction; ker(ρ) has finite codimension for the other. For bialgebra H, (ρ⊗σ)Δ is a finite representation and gives convolution closure. For Hopf H, h↦ρ(S(h))^t is a representation because S and transpose both reverse products; its coefficients are f∘S and prove antipode closure. This elementary dual-action proof is supplied here, before HH-6. Pairing finite tensors proves every remaining bialgebra/antipode identity. |
| `lem-hh-taft-algebra-pbw-and-hopf-structure` | Fix N>1 and a given primitive Nth root ζ in a field k, with char(k)∤N. On the supplied basis g^i x^j (0≤i,j<N) define (g^i x^j)(g^a x^b)=ζ^(−aj)g^(i+a mod N)x^(j+b) if j+b<N, and zero otherwise. Check associativity from the exponent cocycle and degree truncation; prove this algebra is exactly the presentation g^N=1, x^N=0, gx=ζxg by spanning and this independent model. Set Δg=g⊗g, Δx=1⊗x+x⊗g, εg=1, εx=0, Sg=g^−1, Sx=−xg^−1. Derive the quantum-binomial recursion for BA=ζAB; the interior Nth coefficients vanish because 1−ζ^N=0 and 1−ζ^j≠0 for 0<j<N. Verify each relation is killed by Δ, ε and the reversing S map, then both antipode equations on generators and their extension to products. |

**Examples:** Compute finite duals of polynomial algebras through finite quotient coefficients, finite-group duality, tensor Hopf structure, and Sweedler H4 with char(k)≠2. Contrast a coalgebra coideal, a ring ideal, and a Hopf ideal.

## HH-6 — Hopf Module Tensor Products and Rigid Duality

**A:** `hopf-module-tensor-products-and-rigid-duality`. **B:** `hopf-module-tensor-products-and-rigid-duality-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `comodules-matrix-coefficients-and-coalgebra-duality`, `bialgebras-convolution-and-antipode-identities`, `hopf-ideals-finite-duals-and-basic-constructions`.

Tensor representations explain why a bialgebra has a coproduct and counit; finite dual representations explain the antipode. This page constructs every action before naming the category structure and proves its natural constraints concretely. It distinguishes a left dual from a right dual and an ordinary vector-space bidual from an H-module bidual.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-module-category-and-tensor-action` | Define the category of left H-modules using the published module objects/maps. Set h(v⊗w)=Σh_1v⊗h_2w and hk=ε(h)k. Balanced descent and Δ multiplicativity prove the action exists. |
| `thm-hh-bialgebra-module-tensor-coherence` | Check associator and both unit maps are H-linear using coassociativity/counitality, then inherit HH-1 pentagon and triangle. Prove naturality explicitly. Conversely recover the bialgebra axioms from regular-module actions and coherence. |
| `def-hh-left-dual-of-a-finite-hopf-module` | For finite V define h·f(v)=f(S(h)v). Evaluation V*⊗V→k and coevaluation k→V⊗V* are specified using HH-1; anti-multiplicativity proves it is a module action. |
| `thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities` | Prove both maps are H-linear by both antipode identities; verify the two triangle compositions in a finite dual basis and show basis independence. Coevaluation for infinite V is not claimed. |
| `lem-hh-right-dual-and-bidual-conditions` | Under explicit bijective S define the right dual using S^-1 and verify its evaluation/coevaluation. The vector-space identification V≅V** twists action by S²; prove this formula and require S²=id or specified pivotal correction for an H-linear identification. |

**Examples:** Work out a finite-group contragredient and a Taft module dual; demonstrate that tensor products require only a bialgebra, whereas duals use the antipode and finite dimensionality.

## HH-7 — Hopf Modules, Coinvariants, and the Fundamental Theorem

**A:** `hopf-modules-coinvariants-and-the-fundamental-theorem`. **B:** `hopf-modules-coinvariants-and-the-fundamental-theorem-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `comodules-matrix-coefficients-and-coalgebra-duality`, `bialgebras-convolution-and-antipode-identities`, `hopf-module-tensor-products-and-rigid-duality`.

A Hopf module carries both an action and a coaction with an exact compatibility equation. Its decomposition is the elementary engine for integrals and finite-dimensional antipode bijectivity, so it must be proved before those consequences. Coinvariants are a kernel-defined subspace, not an assumed complement.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-right-right-hopf-module-and-coinvariants` | Define right action and right coaction with ρ(mh)=Σm_0h_1⊗m_1h_2. Set M^coH={m:ρ(m)=m⊗1}; prove it is a subspace, and construct the free Hopf module V⊗H with both maps. |
| `lem-hh-hopf-module-coinvariant-projection` | Define P(m)=Σm_0S(m_1). Use coassociativity, antipode anti-coalgebra and cancellation to prove ρ(P(m))=P(m)⊗1 and P is the identity on coinvariants. Individual Sweedler terms need not be coinvariant. |
| `thm-hh-fundamental-theorem-of-hopf-modules` | Construct α:M^coH⊗H→M, n⊗h↦nh, and β(m)=ΣP(m_0)⊗m_1. Prove β lands in M^coH⊗H by applying the range-valued linear map P:M→M^coH in the first tensor factor; compute both composites explicitly. α and β respect action/coaction. No bijective-antipode hypothesis is used. |
| `cor-hh-hopf-module-functor-equivalence` | Describe both functors and natural unit/counit using the explicit maps, then prove they are inverse equivalences. This requires only the concrete category/functor definitions supplied in this item, not general category-equivalence folklore. |

**Examples:** Compute the projection and inverse decomposition for V⊗kG and V⊗k[x]. Include a compatible module/comodule and a pair failing compatibility; the theorem cannot be invoked for arbitrary simultaneous structures.

## HH-8 — Finite Hopf Integrals, Frobenius Duality, and Maschke

**A:** `finite-hopf-integrals-frobenius-duality-and-maschke`. **B:** `finite-hopf-integrals-frobenius-duality-and-maschke-examples`.

**Requires:** `comodules-matrix-coefficients-and-coalgebra-duality`, `bialgebras-convolution-and-antipode-identities`, `hopf-ideals-finite-duals-and-basic-constructions`, `hopf-modules-coinvariants-and-the-fundamental-theorem`, `chain-conditions-and-semisimple-modules`.

An integral is a vector in the regular module transforming by the trivial character. Existence and uniqueness in finite dimension are consequences of the Hopf-module theorem, rather than assertions hidden in a definition. The same construction supplies a nondegenerate associative pairing and an averaging proof of semisimplicity.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-left-right-integrals-and-integral-functionals` | Define Λ by hΛ=ε(h)Λ or Λh=ε(h)Λ, with separate notation for the two spaces. An integral functional is an integral of H* in finite dimension; zero is allowed by the definition and a nonzero element is an existence theorem. |
| `lem-hh-finite-dual-regular-hopf-module-construction` | For finite H define (f↽h)(x)=f(xS(h)) and the unique ρ(f)=Σf_0⊗f_1 determined by Σp(f_1)f_0(x)=Σp(x_1)f(x_2) for every p,x. HH-1 finite tensor duality proves existence and uniqueness; the right-comodule axioms follow from the left regular H* action. Pair both sides of ρ(f↽h)=Σ(f_0↽h_1)⊗f_1h_2 with p,x; expand ΔS and cancel ΣS(h_2)h_3 to prove compatibility. Coinvariants are precisely left integrals of H*. |
| `thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective` | Apply HH-7 to the preceding right H Hopf module H*. The isomorphism (H*)^coH⊗H→H* and positive finite dimension give dim((H*)^coH)=1. For a nonzero coinvariant λ, S(h)=0 makes λ↽h=0; injectivity of that isomorphism gives λ⊗h=0 and hence h=0. Finite-dimensional rank-nullity gives bijective S without using S^−1. Apply the same argument to the finite Hopf algebra H* and the proved bidual identification to obtain one-dimensional left integral spaces of H as well. The now bijective antipode transports left integrals to right integrals on both H and H*. |
| `def-hh-frobenius-functional-and-associative-pairing` | A finite algebra is Frobenius when some λ makes (a,b)↦λ(ab) nondegenerate. This is a property, and the next theorem proves it for finite Hopf algebras. |
| `thm-hh-finite-hopf-algebras-are-frobenius` | Use a nonzero dual integral and the Hopf-module isomorphism to prove H→H*, h↦λ(h·−), bijective. Derive explicit dual-basis identities from its inverse, supplying both sides and conventions. |
| `thm-hh-hopf-maschke-integral-averaging` | For finite H prove semisimplicity iff a left integral has ε(Λ)≠0. Forward: split the augmentation using semisimple module theory. Reverse: normalize Λ, average a k-linear retraction using ΔΛ and S, check H-linearity and retraction. Arbitrary infinite-dimensional module splittings require explicit AC; a finite regular-module splitting suffices for ring semisimplicity and avoids such an assertion. |

**Examples:** Recover the finite-group Maschke characteristic condition from Σg, compute Taft integrals and failure of semisimplicity, and verify the Frobenius pairing in H4. Do not infer semisimplicity of H* or S²=id in arbitrary characteristic from this theorem.

## HH-9 — Quasitriangular Hopf Algebras and Braided Module Categories

**A:** `quasitriangular-hopf-algebras-and-braided-module-categories`. **B:** `quasitriangular-hopf-algebras-and-braided-module-categories-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `bialgebras-convolution-and-antipode-identities`, `hopf-module-tensor-products-and-rigid-duality`.

An ordinary flip generally fails to intertwine a noncocommutative tensor action. An R-matrix corrects the flip and must satisfy compatibility with all tensor products, not merely a Yang–Baxter equation on one representation. Leg embeddings and all tensor formulas are defined before the quasitriangular axioms are introduced.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-leg-notation-and-quasitriangular-hopf-algebra` | Define R_12,R_13,R_23 by the unit embeddings and checked flips. A quasitriangular structure is invertible R∈H⊗H with RΔ(h)=Δ^op(h)R, (Δ⊗id)R=R_13R_23, (id⊗Δ)R=R_13R_12. The finite algebraic tensor setting is explicit. |
| `lem-hh-quasitriangular-counit-and-yang-baxter-identities` | Derive both counit normalizations from the hexagons and invertibility, then derive R_12R_13R_23=R_23R_13R_12 by the exact leg calculations. QYBE alone does not imply quasitriangularity. |
| `def-hh-braiding-and-triangular-structure` | Define braiding as a natural family of invertible module maps c_VW:V⊗W→W⊗V satisfying the two stated hexagons. Define triangular by R_21R=1. The next theorem supplies existence of the family τR. |
| `thm-hh-r-matrix-constructs-a-module-braiding` | Prove τR is well-defined, H-linear, natural, invertible and satisfies both hexagons; then triangular gives c_WV c_VW=id. Conversely recover algebraic R from braiding on regular modules only with the full naturality/detection hypotheses proved locally. |
| `lem-hh-local-braiding-operators-obey-braid-relations` | On a fixed tensor power prove adjacent braid relations from QYBE or the hexagons and distant commutation from disjoint factors. This local operator lemma is sufficient for the later Hecke action and does not relocate the Braid Groups category. |

**Examples:** Check R=1 in cocommutative examples and a finite-dimensional double R after HH-10. Contrast a QYBE solution with an R-matrix, and mark completed generic quantum universal R as a separate construction requiring topology.

## HH-10 — Drinfeld Doubles and Yetter–Drinfeld Module Constructions

**A:** `drinfeld-doubles-and-yetter-drinfeld-module-constructions`. **B:** `drinfeld-doubles-and-yetter-drinfeld-module-constructions-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `comodules-matrix-coefficients-and-coalgebra-duality`, `bialgebras-convolution-and-antipode-identities`, `hopf-ideals-finite-duals-and-basic-constructions`, `hopf-module-tensor-products-and-rigid-duality`, `finite-hopf-integrals-frobenius-duality-and-maschke`, `quasitriangular-hopf-algebras-and-braided-module-categories`.

The quantum double combines a finite Hopf algebra and its dual into an algebra with controlled cross-relations. Finite dimensionality and bijective antipode have already been established in HH-8, so neither is smuggled into the construction. Its tensor module description is given by an explicit Yetter–Drinfeld compatibility equation.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-finite-double-cross-relations` | Fix finite H with bijective S proved in HH-8. Write * for ordinary convolution and f⊙g=g*f for H*op multiplication. Use vector space D=H*op⊗H in normal order f h. Its crossing map χ(h⊗f)=Σ f_1(S(h_1))f_3(h_3)f_2⊗h_2 uses the ordinary dual coproduct Δf(x,y)=f(xy). Thus (f⊗h)(g⊗k)=Σ g_1(S(h_1))g_3(h_3)(g_2*f)⊗h_2k, with unit ε⊗1. This convention is chosen for direct left-left coaction evaluation; it is not the incompatible H*cop convention. The product is a candidate until the next distributive-law proof. |
| `lem-hh-double-crossing-map-and-associativity` | Pair χ(h⊗f) with x∈H to obtain Σ f(S(h_1)x h_3)⊗h_2. Check χ(1⊗f)=f⊗1 and χ(h⊗ε)=ε⊗h. The H multiplication distributive law has common paired value f(S(k_1)S(h_1)x h_3k_3)⊗h_2k_2. The H*op multiplication law has common paired value Σ g(S(h_2)x_1h_4)f(S(h_1)x_2h_5)⊗h_3. These equalities establish both crossing laws, hence the two associations of (f h)(g k)(p l) agree by successive crossings. The tensor normal form gives injective subalgebra embeddings; no unproved presented-algebra PBW is used. |
| `lem-hh-double-coalgebra-and-antipode-descent` | Set Δ_D(fh)=Σ(f_1h_1)⊗(f_2h_2) and ε_D(fh)=f(1)ε(h). Pairing the cross relation with x,y gives f(S(h_1)x h_3S(h_4)y h_6)⊗h_2⊗h_5, which cancels to f(S(h_1)xy h_4)⊗h_2⊗h_3 and proves coproduct multiplicativity. Define bar f=f∘S^−1 and S_D(fh)=S(h)bar f reversing products. Apply the inverse crossing to bar f S(h): its coefficients are f_1(S(h_1))f_3(h_3), so the defining crossing is preserved by reversal. Both antipode contractions on Δ(fh) reduce respectively to S(h_1)(bar f_1⊙f_2)h_2 and f_1h_1S(h_2)bar f_2; dual and H antipode identities give f(1)ε(h)1. Coassociativity and counits follow from the tensor coalgebra. This supplies Hopf structure before YD tensor modules and the canonical R theorem. |
| `def-hh-left-left-yetter-drinfeld-module` | Specify a left H action and left coaction δ(v)=Σv_-1⊗v_0 satisfying coassociativity/counitality and δ(hv)=Σh_1v_-1S(h_3)⊗h_2v_0. Compatible maps preserve both structures. Direct evaluation f·v=Σf(v_-1)v_0 obeys f·(g·v)=(g*f)·v, explaining why H*op occurs in the double. This definition asserts a property; the next equivalence supplies all double-module models. |
| `thm-hh-double-modules-and-yetter-drinfeld-modules` | Reconstruct δ(v)=Σh_i⊗f_i v from the H*op action, independently of dual basis. Its module law is exactly left-coaction coassociativity. The inverse crossing identity f h=Σf_1(h_1)f_3(S(h_3))h_2f_2 becomes precisely the displayed YD equation; the forward crossing is recovered by antipode cancellations, so both functors are inverse. Tensor structures use δ(v⊗w)=Σv_-1w_-1⊗v_0⊗w_0 and the diagonal H action; check compatibility by cancelling the middle S(h_3)h_4. Define c(v⊗w)=Σv_-1w⊗v_0 and c^−1(w⊗v)=Σv_0⊗S^−1(v_-1)w. Coassociativity and the inverse antipode identities prove both composites are identity; the YD equation proves H-linearity, and its coaction version proves H-colinearity. The two hexagons respectively expand Δ(v_-1) and the tensor product coaction, proving braiding without a later R theorem. |
| `thm-hh-finite-double-hopf-structure-and-canonical-r` | After the structural-map and YD equivalence suppliers, set R=Σ(f_i⊗1)⊗(ε⊗h_i), with dual-first leg order. The canonical tensor is basis independent; its inverse replaces h_i by S^−1(h_i), as verified by evaluating the dual leg and cancelling x_2S^−1(x_1) and S^−1(x_2)x_1. On every module τR is the proved YD braiding. Apply this to regular D modules: faithful tensor regular evaluation gives RΔ(d)=Δ^op(d)R and both quasitriangular hexagons from the already proved module identities. Alternatively the two hexagons follow directly by pairing Δf and by the reversed convolution product. No convention is borrowed from the defective extracted source equation. |

**Examples:** Construct D(kG) on basis δ_g⊗h for a finite group, compute its multiplication, canonical R and braided modules. Use a nonabelian finite group to distinguish genuinely noncommutative data. Infinite doubles require a restricted pairing and remain outside this finite construction.

## HH-11 — Coxeter Presentations, Exchange, and Reduced Word Theorems

**A:** `coxeter-presentations-exchange-and-reduced-word-theorems`. **B:** `coxeter-presentations-exchange-and-reduced-word-theorems-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `symmetric-groups-and-the-sign-homomorphism`, `splitting-fields`, `finite-fields-and-cyclotomic-extensions`, `group-homomorphisms-and-the-isomorphism-theorems`.

The Hecke branch begins again with generators, words and length; it does not assume the exchange or reduced-word theorem. A presentation alone gives a group, while its reflection geometry is what supplies the word control needed to define T_w independently of a reduced expression.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-coxeter-matrix-word-group-and-length` | For a finite generator set S give m_ss=1 and symmetric m_st∈{2,3,…,∞}; construct the presented group via reduced free-group words, relator normal closure and quotient. Prove the universal property using existing group quotient laws. Define reduced word, ℓ and standard parabolic subgroup. |
| `def-hh-geometric-coxeter-representation-and-roots` | Use one common characteristic-zero splitting field for the finite product of polynomials t^(2m_st)−1 over all finite edges, and choose primitive 2m_st roots ζ_st. On the full basis {α_s:s∈S}, set σ_s(α_s)=−α_s and σ_s(α_t)=α_t+c_st α_s for t≠s, where c_st=ζ_st+ζ_st^−1 for finite m and 2 for m=∞. Define roots only as the orbit of these supplied vectors; no positivity assertion is made. The next lemma proves all relators globally, rather than incorrectly using an isolated rank-two representation of the whole presentation. |
| `lem-hh-dihedral-root-recurrence-and-root-sign` | First prove σ_s²=1. On span(α_s,α_t), σ_sσ_t has characteristic polynomial z²−(c_st²−2)z+1, with roots ζ_st²,ζ_st^−2 for finite m>2; for m=2 it is −I. Thus its order is m and I+A+⋯+A^(m−1)=0. Since σ_sσ_t is identity on the quotient by this plane, its off-plane block is annihilated by that geometric sum, proving the full-rank relator; for m=∞ the plane matrix is nonidentity unipotent with square-zero difference and has infinite order. These facts prove distinct generators and prescribed dihedral orders survive. Now on {±1}×T set U_s(e,t)=(e(−1)^δ(s,t),sts). The 2m alternating conjugate reflections repeat in two m-term lists, so every relation preserves signs. Repeated prefix reflections delete two letters. Therefore the sign-change set of a reduced word is expression independent and has cardinality its length. For an alternating dihedral word the prefix reflections are distinct up to m (and indefinitely for m=∞); any competing word has at least this many letters by its sign changes. This supplies ambient reducedness, not merely intrinsic dihedral word length. |
| `thm-hh-coxeter-exchange-deletion-and-faithfulness` | First supply length parity: the presentation maps every generator to −1, so ℓ(sw)=ℓ(w)±1 by parity and the two elementary inequalities. If ℓ(sw)<ℓ(w), w has a reduced expression beginning with s. Its inversion/sign-change set contains s; expression independence forces s to be a prefix reflection of every reduced expression, giving the exact exchange deletion. Deduce the two-letter deletion condition using the first nonreduced prefix. The signed action is faithful because a nonidentity element has a nonempty sign-change set. Geometric-representation faithfulness and root positivity are neither used nor claimed. |
| `thm-hh-matsumoto-reduced-word-theorem` | Follow the complete length induction of Lusztig Theorem 1.9 pp.4–5: apply exchange to the first letter of the other expression; if its deletion index precedes the last letter, two length-(n−1) inductions connect the expressions. In the last-letter case successively move that obstruction through alternating prefixes, as in the finite family A′_p, until both words are alternating in their distinct first generators. Prove S∩⟨s,t⟩={s,t} because every element of the dihedral subgroup acts trivially on the quotient of the full reflection space by span(α_s,α_t), while σ_u for u outside that set does not. Ambient dihedral reducedness then forces the obstruction chain to end exactly at the finite braid length m; the single braid move connects it. State every induction measure and both finite/infinite cases; no unproved rank-two prefix theorem is imported. |
| `thm-hh-parabolic-minimal-representatives-and-length-additivity` | Derive the Tits word reduction algorithm from deletion and Matsumoto: transform the reduced prefix ending at the first failure into the deletion expression followed by the repeated last generator, then cancel its square. Every move uses only the letters already in that word. Thus a J-word trivial in W reduces using only J-relators, proving the intrinsic parabolic presentation embeds; it also proves its intrinsic and ambient lengths agree. Choose a least-length representative d of a right coset W/W_J (a minimum of natural-number lengths). If concatenating a reduced J-word to d first fails, exchange either deletes a J-letter (contradicting the reduced J-word after cancelling d), or a d-letter (giving a shorter representative in the same coset). Hence length is additive. If d and d′ are two minimal representatives, write d′=du and use additivity twice to force u=1. Inversion gives the opposite-sided result. For type A, adjacent swaps sort inversions and the generator relators yield S_n with the published inversion-length formula. |

**Examples:** Work out rank-one, finite dihedral and type-A reduced words, a nonreduced word deleted by exchange, and minimal representatives for S2⊂S3. No geometric braid-group construction is a prerequisite.

## HH-12 — Generic Coxeter Hecke Algebras and the Standard Basis

**A:** `generic-coxeter-hecke-algebras-and-the-standard-basis`. **B:** `generic-coxeter-hecke-algebras-and-the-standard-basis-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `polynomial-rings-and-roots`.

A generic Hecke algebra replaces each involution relation by a quadratic relation while retaining braid relations. Reduced-word independence and a basis theorem are distinct obligations: neither the presentation nor a count of spanning words proves freeness. The regular-module length-operator construction supplies independence before specialization.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-universal-coxeter-hecke-parameters-and-presentation` | For a finite Coxeter generator set S (W may be infinite), take the finite-variable universal ring R=Z[v_C,v_C^−1], one parameter per connected component of the odd-edge graph. An odd dihedral braid explicitly conjugates its two generators. Conversely abelianization to one sign coordinate per odd-edge component separates generators in different components, so simple-generator conjugacy is exactly odd-edge connectivity. Define (T_s−v_s)(T_s+v_s^−1)=0 and finite braid relations using the proved free associative ring quotient. |
| `lem-hh-reduced-word-independence-and-length-multiplication` | Define T_w as a reduced product only after HH-11 Matsumoto. Prove T_sT_w=T_sw if ℓ(sw)>ℓ(w), otherwise T_sw+(v_s−v_s^-1)T_w; derive right multiplication similarly and show all words span. |
| `lem-hh-commuting-left-right-hecke-length-operators` | On free module with basis e_w define P_s and Q_t by the two length cases. Prove P_sQ_t=Q_tP_s by all rank-two/length configurations (Lusztig §§3.2–3.3 six cases). Obtain braid relations for P by commuting through a reduced right word and evaluating at e_1, then verify quadratics and unit. |
| `thm-hh-generic-coxeter-hecke-standard-basis` | The preceding representation sends T_w e_1=e_w, so spanning elements are independent over R. This gives the universal free basis; base change from HH-1 gives it over every commutative specialization. No torsion-free conclusion is assumed in the proof. |
| `lem-hh-hecke-anti-involution-bar-and-normalization` | Prove w↦w^-1 defines the anti-involution by checking relations; prove v_s↦v_s^-1,T_s↦T_s^-1 defines bar, with T_s^-1=T_s−(v_s−v_s^-1). Equal parameter Q=v² and S_s=vT_s gives (S_s−Q)(S_s+1)=0. Record this conversion before comparing application homes. |

**Examples:** Compute the complete rank-one and S3 multiplication tables in both normalizations, unequal-parameter dihedral consistency, and specialization v=1. Link to existing type-A principal-series and braid-trace pages as applications with existing item homes.

## HH-13 — Hecke Parabolic Induction and Symmetrizing Traces

**A:** `hecke-parabolic-induction-and-symmetrizing-traces`. **B:** `hecke-parabolic-induction-and-symmetrizing-traces-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `generic-coxeter-hecke-algebras-and-the-standard-basis`.

Parabolic induction and traces expose useful structure without yet invoking semisimplicity. The standard basis makes the parabolic subalgebra embedding and coset freeness actual theorems. A symmetrizing trace requires a perfect pairing, which is proved integrally and survives every base change.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-parabolic-hecke-subalgebra-and-induced-module` | Using the basis, embed H_J via T_u,u∈W_J. Define induction H⊗_HJ M and restriction with the published balanced tensor construction, rather than informal coset symbols. |
| `thm-hh-parabolic-hecke-freeness-and-induced-bases` | Use minimal representatives and length additivity to prove H is free on {T_d} on the stated left/right side over H_J. Construct induced bases when M has one; supply induction-restriction adjunction explicitly via h⊗m↦h·f(m). |
| `def-hh-canonical-hecke-trace-and-symmetrizing-form` | For finite W set τ(T_w)=δ_w1, extending R-linearly using the proved basis. Symmetrizing means τ(ab)=τ(ba) and the pairing induces an isomorphism H→Hom_R(H,R); no field semisimplicity enters this definition. |
| `thm-hh-canonical-hecke-trace-is-symmetric-and-perfect` | On the free regular module E, use the bilinear coordinate pairing (e_x,e_y)=δ_xy. Each left length operator P_s is self-transpose: on the pair e_w,e_sw with ℓ(sw)>ℓ(w), its matrix is [[0,1],[1,v_s−v_s^−1]]. Therefore P_x^t=P_(x^−1), reversing a reduced word, and τ(T_xT_y)=(e_1,P_xP_y e_1)=(P_(x^−1)e_1,P_y e_1)=δ_(x^−1,y). Thus the dual family to {T_w} is {T_(w^−1)}, rather than the algebra inverse T_w^−1. The symmetric basis-pair formula gives τ(ab)=τ(ba); the permutation Gram matrix gives the integral dual-module isomorphism for finite W and every base change. |

**Examples:** Calculate parabolic induction from rank one into S3, its two-sided conventions, and dual trace bases. A perfect symmetrizing form alone does not imply semisimplicity; supply a nonsemisimple specialization illustrating this.

## HH-14 — Hecke Base Change, Semisimplicity, and Deformation

**A:** `hecke-base-change-semisimplicity-and-deformation`. **B:** `hecke-base-change-semisimplicity-and-deformation-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `generic-coxeter-hecke-algebras-and-the-standard-basis`, `hecke-parabolic-induction-and-symmetrizing-traces`, `chain-conditions-and-semisimple-modules`.

Deformation arguments use hypotheses on the coefficient ring, field and parameter. Freeness makes base change legitimate; nondegenerate trace pairing alone does not imply semisimplicity. This page supplies the precise determinant and lifting arguments before invoking a Tits-style conclusion.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-specialization-and-regular-trace-determinant` | Define the specialized finite-W algebra using HH-1, and the matrix (Tr(L_TxTy)) in its finite basis. Determinant is basis dependent up to a squared unit; nonvanishing is invariant and meaningful over a field. |
| `lem-hh-regular-trace-criterion-in-characteristic-zero` | Define J as intersection of annihilators of simple finite modules. A finite composition chain of the regular module gives J^length=0. Finite dimensionality selects finitely many maximal left ideals whose intersection is J, embedding H/J into a finite sum of simples and proving H/J semisimple by HH-1’s finite semisimple-submodule proof. For j∈J, L_jb is nilpotent for every b and has zero trace, so nondegenerate regular-trace pairing forces J=0 and H semisimple. This implication is sufficient; no unproved separable-division-algebra trace converse is consumed. Prove the two definitions of J agree using the maximal kernels of maps a↦av for every nonzero vector in a simple module. Select the finite maximal-ideal intersection by successive strict dimension drops; this uses no arbitrary Choice. |
| `thm-hh-generic-finite-hecke-semisimplicity` | At v=1, evaluate the regular-trace matrix of characteristic-zero kW directly: Tr(L_g)=\|W\|δ_g1, so determinant is nonzero. The universal determinant is therefore a nonzero Laurent polynomial and the generic fraction-field algebra is semisimple. Splitness is not inferred merely from semisimplicity. |
| `lem-hh-formal-deformation-matrix-unit-lifting` | For a finite free k[[h]] algebra with split semisimple reduction, prove formal series arithmetic and completeness coefficientwise. Lift the finitely many diagonal matrix idempotents by Newton corrections e↦e−(2e−1)^−1(e²−e), whose error squares, and successively work in complementary corners to keep them orthogonal and summing to 1. Their corners are direct summands of a finite free module; a finite elimination/completeness argument shows each corner has rank given by its reduction (zero between different blocks, one within a block). In each block lift x_a∈e_aAe_1 and y_a∈e_1Ae_a; y_ax_a is an invertible scalar multiple of e_1, so normalize it to e_1 and obtain x_ay_a=e_a by the rank-one corner and reduction. Then E_ab=x_a y_b are exact matrix units. Their reductions are a basis, so the determinant of their coordinate matrix is a unit; they form a k[[h]] basis and give mutually inverse full matrix-block algebra maps. Block sums are now central; centrality was not assumed at the initial idempotent-lifting step. |
| `thm-hh-split-deformation-labels-and-exceptional-parameters` | State and prove the label bijection in the formal split setting using the lifted matrix blocks. For a general specialization only determinant-nonvanishing semisimplicity is claimed; splitness and simple labels require an explicitly chosen splitting field or proven type-A generic models. Do not extrapolate to roots of unity or modular fields. |

**Examples:** Compute the rank-one regular-trace determinant and repeated-root nonsemisimple case; compare symmetrizing and regular trace forms. Illustrate the formal lifting theorem on a two-dimensional algebra and locate the exact exceptional parameter.

## HH-15 — Type A Affine Hecke Algebras and Bernstein PBW

**A:** `type-a-affine-hecke-algebras-and-bernstein-pbw`. **B:** `type-a-affine-hecke-algebras-and-bernstein-pbw-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `generic-coxeter-hecke-algebras-and-the-standard-basis`, `polynomial-rings-and-roots`.

Affine type A adds commuting invertible weight variables to the finite Hecke generators. The Bernstein relation contains a quotient of Laurent polynomials; its divisibility must be proved before it can define an operator. The construction here is algebraic and avoids importing p-adic Iwasawa decomposition as an invisible prerequisite.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences` | Set Λ=Z^n, A=R[X_1^±1,…,X_n^±1], let s_i permute Xi,Xi+1, and prove f−s_i f is divisible by 1−Xi/Xi+1 using monomial finite geometric sums, including negative exponents. Define D_i f only after divisibility and prove the twisted Leibniz rule. |
| `def-hh-type-a-affine-bernstein-presentation` | Use multiplicative Q normalization: (T_i−Q)(T_i+1)=0, finite braid relations, commuting invertible Xi, and T_i f−s_i(f)T_i=(Q−1)D_i(f). Equivalently T_i Xi T_i=Q Xi+1; prove equivalence from generator relations using twisted Leibniz. Q is a unit in the universal ring. |
| `lem-hh-demazure-lusztig-operators-satisfy-affine-relations` | In K⋊S_n, define T_i=Q s_i+(Q−1)(1−s_i)/(1−Xi/Xi+1). Construct this skew group algebra directly, prove associative multiplication, then check quadratic, distant and adjacent rank-three braid relations by clearing denominators and collecting permutation coefficients. The coefficient of s_i is nonzero over the universal fraction field. The operator preserves A by divisibility. |
| `thm-hh-affine-type-a-bernstein-pbw` | Rewrite all words to X^λT_w for spanning. The skew-group images of T_w have distinct nonzero leading permutation terms and lower-length terms, so a longest-length coefficient argument proves independence over the universal ring. Descend the explicit basis isomorphism through every base change, rather than reusing generic faithfulness at singular parameters. |
| `thm-hh-affine-type-a-center` | Commute a central Σf_wT_w with all Xi in the fraction skew algebra to force w=1; then commute f with Ti to force S_n invariance over the universal domain. State center after arbitrary specialization separately: base change does not automatically preserve centers and is not claimed here. |

**Examples:** Calculate the n=2 Bernstein relation, its Laurent divisibility, a polynomial-module action and symmetric central elements. Differentiate this algebraic affine type-A construction from p-adic convolution and from degenerate affine Hecke algebras.

## HH-16 — Cyclotomic Hecke Quotients and Ariki–Koike PBW

**A:** `cyclotomic-hecke-quotients-and-ariki-koike-pbw`. **B:** `cyclotomic-hecke-quotients-and-ariki-koike-pbw-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `generic-coxeter-hecke-algebras-and-the-standard-basis`, `type-a-affine-hecke-algebras-and-bernstein-pbw`.

Cyclotomic Hecke algebras quotient the affine algebra by a polynomial in X1. The polynomial alone provides neither a basis nor a dimension formula. The page proves integral spanning and then independence using explicitly constructed generic modules and a combinatorial dimension count, before transporting the basis to any specialization.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-multiplicative-cyclotomic-hecke-algebra` | Fix r≥1 and R=Z[Q^±1,u_1^±1,…,u_r^±1]; quotient the type-A affine algebra by ∏(X1−u_a). Unit parameters make X1 invertible in the quotient via the constant coefficient; this is the traditional multiplicative Ariki–Koike convention, not the additive degenerate presentation. |
| `lem-hh-cyclotomic-commuting-jucys-murphy-generators` | Define Li=Q^(1−i)Ti−1⋯T1 X1 T1⋯Ti−1, identify them with Xi by affine relations, and prove commutation. Do not claim each Li satisfies the same cyclotomic polynomial; give the actual transport identities needed for straightening. |
| `lem-hh-cyclotomic-straightening-spanning` | Prove integral spanning by the explicit normal-word supplier below, not by asserting identical cyclotomic polynomials for L_i. Extend coefficients to the finite free faithful ring R′=R[v,w]/(v²−Q,w^r−(−1)^(r+1)∏u_a); v,w are units. Put s_j=v^−1T_(j−1), z=w^−1X_1. Reproduce Neaime §6 Lemmas6.2–6.15 with a=v−v^−1 and the expanded cyclotomic coefficients, correcting z s_j commutation to j≥3 and retaining all quadratic coefficients. The span of Λ_1⋯Λ_n is closed under every generator by the rank-two reductions and the nine final-letter cases; it contains 1. Each Λ_n word has nonnegative total X-degree k<r. HH-15 Bernstein rewriting preserves nonnegative exponents and this total degree; finite Hecke parabolic factorization then puts it in Σ_(0≤a<r,d∈D) H_(n−1)X_n^aT_d. Induction gives the promised bounded PBW span over R′. Prove faithful-free descent locally: tensor a cokernel with a free module containing the basis element 1; if that tensor is zero, the cokernel was zero. Negative powers are polynomial expressions because the cyclotomic constant and each Hecke generator are units. Exact reduction contracts and source corrections appear in §8 below. |
| `def-hh-multipartitions-standard-tableaux-and-generic-contents` | Define r-multipartitions, standard multitableaux and res_t(i)=u_component Q^(column−row). Finite tableaux, their row/column orders and addable boxes are defined explicitly. Generic parameter separation and all denominators are checked in the universal fraction field. Prove the elementary finite-poset facts used later: connect two linear extensions by moving the first differing minimal available element left across incomparable neighbors; make a cover pair consecutive by contracting that cover before choosing an extension. Standard tableaux are linear extensions of row/column box order. Distinct addable boxes of a component have distinct diagonal contents. For equal-content boxes on one diagonal, the right and lower intermediary boxes are both required between their labels; therefore endpoints of three consecutive labels cannot have equal contents. These proofs justify admissible-swap connectivity and all three-content denominators. |
| `thm-hh-generic-cyclotomic-seminormal-models` | For a=res_t(i), b=res_t(i+1), set T_i v_t=((Q−1)b/(b−a))v_t+((Qb−a)/(b−a))v_(s_i t), where a nonstandard tableau is interpreted as zero. Prove consecutive contents differ. Diagonal Li acts by res_t(i). For same-row and same-column consecutive entries the diagonal coefficient is Q or −1 respectively. Verify quadratic, affine and cyclotomic equations; for braid, enumerate all six reorderings of the three consecutive entries subject to their row/column partial order, include every nonstandard term, and clear the three pairwise-content denominators. Prove that endpoints of three consecutive entries cannot have equal contents. This finite local calculation must be written, not replaced by an exercise citation. Prove irreducibility using connected adjacent swaps and joint spectral projectors. |
| `lem-hh-colored-permutation-rsk-and-tableau-square-count` | Prove a bijection between r-colored permutations and pairs of standard multitableaux of one shape by componentwise insertion with an explicit reverse algorithm. Deduce Σλ fλ²=r^n n!. The ordinary RSK theorem is proved here if no proved earlier supplier is used. |
| `thm-hh-ariki-koike-basis-and-generic-splitness` | The spanning bound is r^n n!. Proved generic models and the square count give at least that dimension using a proved finite-algebra density lemma/matrix units constructed from joint-eigenvalue projectors and swaps. Hence spanning monomials are independent over the fraction field and over universal R. Base-change the resulting free-basis isomorphism for all fields/rings with unit parameters. |

**Examples:** Compute r=1 finite type A, n=1 the cyclotomic polynomial quotient, r=2,n=2 the rank-eight basis, and separated versus colliding generic content spectra. Do not apply the formulas of additive generators at v²=1 without an invertible normalization conversion.

## HH-17 — Cyclotomic Murphy Bases and Cellular Module Constructions

**A:** `cyclotomic-murphy-bases-and-cellular-module-constructions`. **B:** `cyclotomic-murphy-bases-and-cellular-module-constructions-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `generic-coxeter-hecke-algebras-and-the-standard-basis`, `type-a-affine-hecke-algebras-and-bernstein-pbw`, `cyclotomic-hecke-quotients-and-ariki-koike-pbw`, `chain-conditions-and-semisimple-modules`.

Cellular structure organizes representations at singular parameters, where generic eigenvector formulas no longer apply. The Murphy basis is an integral basis theorem with a triangular multiplication law and involution, and the cell-module quotient constructions must be justified independently of generic semisimplicity.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-cell-datum-dominance-and-cell-ideals` | Define a finite poset, basis C_st^λ, anti-involution *, and the coefficient-independence axiom modulo the higher-cell span. Prove the higher-cell span is a two-sided ideal from this axiom before forming quotients. Give multipartition dominance and row-standard tλ explicitly. |
| `def-hh-cyclotomic-murphy-elements` | For a_c=Σ_(b<c)\|λ^(b)\| set u_λ=∏_(c=2)^r∏_(i=1)^a_c(L_i−u_c) and x_λ=Σ_(w∈S_λ)T_w, with S_λ the rows of the initial standard multitableau. Prove x_λu_λ=u_λx_λ. Set m_λ=u_λx_λ and m_st=T_(d(s))^*m_λT_(d(t)), where d(t) sends the initial tableau to t and * fixes T_i,L_i. These are genuine elements before any basis/cellularity claim; no omitted parameter rescaling is allowed. |
| `lem-hh-type-a-garnir-straightening-and-murphy-cell-law` | Supply the full ordinary type-A integral proof locally (Mathas §§3.3–3.18, printedpp18–25), using the earlier noncircular HH-12 basis. For adjacent-row Garnir belt (i,j), split λ into ν=(λ_1,…,λ_(i−1),j−1,λ_i+1,λ_(i+1)−j,λ_(i+2),…) and equate the two length-additive coset expansions of Σ_(x∈S_ν S_λ)T_x: Σ_(w∈S_ν∩D_λ)x_λ T_w=Σ_(v∈S_λ∩D_ν)T_v^*x_ν. Isolate the unique Garnir term to express x_λT_d(g) as larger-shape row terms minus strictly more dominant standard right-tableau terms. Every nonstandard row tableau factors g w with additive length by reducing its inversion number while retaining a column violation. Straighten in the finite lexicographic shape/tableau order, on each side. The equal-cardinality square spanning matrix and HH-12 rank n! prove basis. Establish the column eigenvalue −1 refinement and use row eigenvalues Q to eliminate coefficients of shapes failing dominance (Mathas Prop3.16), proving dominance ideals and the fixed-initial-row right multiplication law (Cor3.17/Thm3.18). Lexicographic shape growth alone is not called dominance. For the dominance upgrade, propagate a nonzero coefficient across valid adjacent swaps within each row-label block using the universal row-eigenvalue equations. Linear extensions of a finite poset are connected by such swaps; every cover pair can be adjacent in some extension. If two block nodes share a column, a neighboring vertical cover pair can therefore be assigned consecutive block labels, contradicting the proved column eigenvalue −1 versus Q. Each block consequently forms a horizontal strip; the first p blocks have at most p boxes per column, forcing Σ_(j≤p)μ_j≥Σ_(j≤p)λ_j. Carry this universal-domain argument through basis specialization rather than cancel Q+1 at singular parameters. |
| `lem-hh-componentwise-initial-row-straightening` | Use the fixed-initial-row type-A cell law in each component interval and the commuting factor u_λ; no stronger simultaneous tableau inequality is assumed from an unread source. Decompose row permutations into within-component permutations followed by distinguished component coset representatives, with additive length. These coset representatives preserve the order inside each component. Tableau-prefix dominance is preserved under their relabeling: for each cutoff m, the selected labels in each component form an initial segment, so every cumulative-row inequality becomes the already proved inequality at that segment size. This elementary counting replaces DJM3.17’s imported Bruhat cancellation. Componentwise shape dominance lifts to multipartition dominance; modulo higher shapes, multiplying m_(tλ,t) by finite T_i retains the same initial left row. Left multiplication and * give the shape-ideal closure needed by the next lemma. |
| `lem-hh-cyclotomic-component-shift-and-dominance-ideals` | For a=(a_1,…,a_r), u_a=∏_c∏_(j≤a_c)(L_j−u_c), b=a+e_k, prove u_a T_(a_k)⋯T_1 X_1 T_1⋯T_(a_k)=Q^(a_k)u_k u_a+Q^(a_k)u_b by L_(a_k+1)=Q^(−a_k)T_(a_k)⋯T_1 X_1 T_1⋯T_(a_k). Right-multiply by the proved inverse T products. For m_(tλ,t)X_1 decompose d(t) into a component permutation and component coset, then separate the term with u_a from that with u_b. The first is governed by the previous fixed-row law. The second moves one first-row node of component k to a new final row of component k−1; express x_λ via its length-additive row coset sum x_νΣ T_c. This raises multipartition dominance; at k=1 the product u_b contains ∏(L_1−u_c) and is zero. Apply ordinary component straightening to restore partitions. Induction over generator words proves every higher-shape span is a right ideal; * proves two-sidedness. Modulo higher shapes, initial-left-row closure holds for X_1 as well. This is the complete DJM3.4/3.15–3.25 route; no cyclotomic PBW or type-A Murphy theorem is left as an external supplier. |
| `thm-hh-cyclotomic-murphy-basis-and-cellularity` | Use the three earlier integral suppliers: ordinary type-A Garnir/Murphy straightening, componentwise initial-row straightening, and the u_a/T_0 dominance-raising identity. Together they prove the spans N^≥λ,N^>λ are two-sided ideals and (m_(tλ,t))H reduces modulo N^>λ to the same fixed initial row, with coefficients independent of any later left multiplication. Thus m_st h≡Σ_v r_(t,v)(h)m_sv mod N^>λ and * swaps indices. The shape (empty,…,1^n) has m_λ=1, so this fixed-row closure proves all standard m_st span H. HH-16 colored RSK counts exactly r^n n! standard pairs, equal to the proved integral PBW rank. The coordinate matrix of this spanning family is square and has a right inverse; its determinant is a unit, so the family is an integral basis. This completes cellularity over universal R, and tensoring gives every specialization. Generic diagonalization is not a substitute for this integral argument. |
| `thm-hh-cell-modules-forms-and-radicals` | Construct the free cell module using the stated coefficient matrices, prove module laws by quotient associativity, define its bilinear form from multiplication, and prove independence, symmetry and invariance. Radical is a submodule by invariance; quotient is well-defined. |
| `thm-hh-cellular-simple-module-classification-over-a-field` | Prove a nonzero cell-form quotient is absolutely simple by the rank-one action identity; prove all simple modules arise by choosing a minimal nonannihilating cell ideal, and prove distinct nonzero quotients are nonisomorphic. All steps use cell ideals/finite poset induction locally, not Ariki or KLR categorification. |

**Examples:** Calculate cell modules and their forms for the rank-one cyclotomic algebra and a small type-A specialization, including a vanishing form. Recover ordinary Hecke Specht construction as r=1 and cross-link its existing home instead of duplicating its item IDs.

## HH-18 — Hecke Symmetries and Generic Quantum Schur–Weyl Duality

**A:** `hecke-symmetries-and-generic-quantum-schur-weyl-duality`. **B:** `hecke-symmetries-and-generic-quantum-schur-weyl-duality-examples`.

**Requires:** `tensor-coherence-and-algebraic-descent`, `bialgebras-convolution-and-antipode-identities`, `hopf-module-tensor-products-and-rigid-duality`, `quasitriangular-hopf-algebras-and-braided-module-categories`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `generic-coxeter-hecke-algebras-and-the-standard-basis`, `hecke-base-change-semisimplicity-and-deformation`.

The bridge starts with an explicit operator rather than an assumed universal R-matrix. A Hecke symmetry is an invertible Yang–Baxter operator satisfying a specified quadratic relation; the local relation checks construct an action. Quantum Schur–Weyl duality is a stronger equality of commutants and receives its own proof, parameter assumptions and foundational closure.

| Proposed local supplier | Exact content, justification and proof obligation |
|---|---|
| `def-hh-hecke-symmetry-and-ordered-basis-operator` | On ordered basis e_a define T(e_a⊗e_a)=q e_a⊗e_a; for a<b flip; for a>b flip+(q−q^-1)e_a⊗e_b. Define Hecke symmetry by invertibility, local braid equation and (T−q)(T+q^-1)=0. This definition is a property; the next lemma proves the model has it. |
| `lem-hh-type-a-tensor-operator-is-a-hecke-symmetry` | On each two-dimensional ordered-pair span prove the quadratic and inverse T^-1=T−(q−q^-1). Check adjacent braid equality in all equality/order patterns for triples, displaying a complete finite-case computation. Distant commutation is separate. Convert to S=qT,Q=q² explicitly. |
| `thm-hh-hecke-symmetry-tensor-power-action` | Use HH-12 presentation universal property to obtain Hn→End(V^⊗n). A quasitriangular braiding factors this way only after an extra quadratic relation is checked. At q=1 recover the permutation action; no abstract algebra-image identification in small dimension. |
| `def-hh-type-a-quantum-tensor-action-for-centralizers` | Over F=Q(q) use commuting invertible L_j (1≤j≤N), E_i,F_i (i<N) and K_i=L_i L_(i+1)^−1. Specify L_j E_i L_j^−1=q^(δ_ji−δ_j,i+1)E_i, the inverse exponent for F_i, [E_i,F_j]=δ_ij(K_i−K_i^−1)/(q−q^−1), distant E/E and F/F commutation, and adjacent Serre E_i²E_j−(q+q^−1)E_iE_jE_i+E_jE_i²=0 and its F counterpart. Define the associative presented algebra using HH-1. Candidate vector actions are L_j e_a=q^δ_ja e_a, E_i e_a=δ_(a,i+1)e_i, F_i e_a=δ_(a,i)e_(i+1), with ΔE_i=E_i⊗K_i+1⊗E_i, ΔF_i=F_i⊗1+K_i^−1⊗F_i, ΔL_j=L_j⊗L_j. The next relation-descent lemma proves these give the promised tensor actions; global quantum PBW is unnecessary. |
| `lem-hh-quantum-presentation-and-tensor-action-descent` | Check vector matrices satisfy every presented relation, then establish coproduct descent on those relations: Cartan relations follow by moving K past E/F, and the commutator splits into its two factor commutators with mixed terms cancelling. For adjacent Serre, write ΔE_i=A+B with A=E_i⊗K_i, B=1⊗E_i and AB=q²BA; expand the cubic Serre expression, group terms by degree in each tensor factor, and cancel the mixed bidegrees using K_iE_j=q^(−1)E_jK_i and the coefficients 1,−(q+q^−1),1. Pure terms are the factor Serre relations; the F calculation uses inverse Cartan weights. Distant relations use commuting factors. Set ε(L)=1, ε(E)=ε(F)=0 and reversing S(L)=L^−1, S(E)=−E K^−1, S(F)=−K F; check the same relations descend and both antipode equations on generators. Iterating Δ proves all tensor formulas satisfy all relations, with finite Laurent matrix entries. This verifies existence/nontriviality and coproduct convention before any commutation or centralizer theorem. |
| `lem-hh-quantum-and-hecke-tensor-actions-commute` | For each j compare T(L_j⊗L_j) and (L_j⊗L_j)T on a basis pair: both are the same weight scalar times T. For E_i compare T(E_i⊗K_i+1⊗E_i) with its reverse product on all pairs (a,b), partitioned by whether each label is i, i+1 or an outside label and by its order. The only two-term contribution is the (i+1,i+1) pair, where equality is q=(q−q^−1)+q^−1; the mixed i/i+1 pairs and outside-label pairs follow the displayed coefficients without omitted cases. Apply the same complete partition to F_i⊗1+K_i^−1⊗F_i. On tensor powers, the two summands touching neighboring sites form the checked two-site coproduct; every other term is identity or K_i⊗K_i there. This proves commuting inclusion for all generators and powers, before commutant equality. |
| `lem-hh-classical-tensor-centralizer-by-polarization` | Over Q, identify End(V^⊗n) with End(V)^⊗n; permutation conjugation permutes factors, so its commutant is spanned by orbit sums. Expanding Σ_(J⊆[n])(−1)^(n−\|J\|)(Σ_(j∈J)a_j)^⊗n gives Σ_(σ∈S_n)a_(σ1)⊗⋯⊗a_(σn); divide by repeated-label stabilizers to span every orbit sum by a^⊗n. For x_b equal to a on tensor position b, the commuting power sums p_m=Σx_b^m are classical Lie tensor operators of a^m. Derive Newton recursion m e_m=Σ_(j=1)^m(−1)^(j−1)e_(m−j)p_j by differentiating ∏(1+x_b t) as a formal coefficient identity. Then a^⊗n=e_n belongs to the classical Lie image. Adjacent E_i,F_i and diagonal counts generate all matrix Lie operators by commutators. This proves A_0=End_(B_0) without Young symmetrizers, highest weights or a hidden irreducibility exercise. |
| `lem-hh-finite-semisimple-matrix-double-commutant` | Work entirely over Q. Average finite projections for a finite group to prove Maschke complete reducibility. For each simple S, D=End_B(S) is a division algebra by kernel/image; view S as a right D^op-space. Prove finite density using a D^op-basis v_1,…,v_d: the evaluation image of B→S^d is a submodule. If proper, finite semisimplicity supplies a nonzero B-map S^d→S killing it, necessarily Σd_j on the coordinates with d_j∈D. Evaluating at 1 gives Σd_j(v_j)=0, contradicting D^op-independence. Thus B maps onto End_(D^op)(S). Apply the same argument to a sum of such tuples for distinct simples; intertwiners between distinct simples are zero, so the image is the direct sum of the independent matrix blocks. On W=⊕S_λ^(m_λ), End_B(W)=⊕Mat_(m_λ)(D_λ); commuting with diagonal and off-diagonal matrix units forces its commutant to be the original blocks End_(D_λ^op)(S_λ) acting equally on the multiplicity copies. This proves the finite semisimple bicommutant without algebraic closure, FTA, splitness or generic quantum semisimplicity. Finite composition and complement facts were supplied in HH-1. |
| `lem-hh-finite-matrix-rank-under-specialization` | For a finite matrix over R=Q[q,q^−1]_(q−1), any nonzero minor at q=1 is nonzero in F=Q(q), so generic rank is at least specialized rank. Therefore kernel dimension can only decrease. Apply this separately to vectorized word-column matrices (image dimension lower bounds) and vectorized commutator matrices (commutant dimension upper bounds). A finite word basis exists because an increasing sequence of matrix-word spans stabilizes within the finite endomorphism dimension. Only selected regular words are specialized; arbitrary rational denominators are not assumed regular. |
| `lem-hh-classical-and-generic-tensor-double-centralizer-suppliers` | Combine the preceding classical polarization/Newton lemma and finite semisimple double-commutant lemma to obtain A_0=End_(B_0) and B_0=End_(A_0) over Q. Set R=Q[q,q^−1]_(q−1); every tensor matrix is regular there. Add H_j=(L_j−1)/(q−1), whose diagonal entry on a word with m copies of j is 1+q+⋯+q^(m−1) (zero for m=0); these are in A_F and specialize to all classical diagonal counts. Form two finite vectorized commutator systems, one for the Hecke T_a, one for E_i,F_i,L_j^±1,H_j. The rank-specialization lemma gives dim End_(B_F)≤dim A_0 and dim End_(A_F)≤dim B_0. Lift finite word bases of A_0 and B_0 to regular matrices; their nonzero minors give dim A_F≥dim A_0 and dim B_F≥dim B_0. The proved commuting inclusions give the reverse inequalities, so both sandwiches are equalities. No generic quantum semisimplicity or character theorem is imported. |
| `thm-hh-generic-quantum-schur-weyl-mutual-centralizers` | For F=Q(q), N≥1 and n≥0, the two proved rank sandwiches imply A_F=End_(B_F)(V^⊗n) and B_F=End_(A_F)(V^⊗n), where A_F and B_F are the quantum and Hecke images. This includes N<n without identifying the Hecke image with the abstract algebra. When N≥n, the Hecke orbit of e_1⊗⋯⊗e_n specializes to the n! distinct permutation tensors; a nonzero minor and HH-12 basis prove faithfulness generically. n=0 and N=1 give scalar images and scalar commutants directly. Root-of-unity and modular equalities are outside this theorem. |

**Examples:** Calculate T on a two-dimensional space, all triple-order braid cases, q=1 flip and q=−1 sign distinction, and n=2,N=1 nonfaithfulness. Compute local commutation with each quantum generator before any commutant-equality claim.

## 4. Finite construction work plans and authoring exit conditions

These are bounded mathematical work plans for the hardest seams, rather than
“check the relations” placeholders. Their exit condition is a complete local
argument in dependency order, not an inference from a bibliography.

**Coxeter/Hecke regular-module route (HH-11/12).** Construct the signed action
U_s(e,t)=(e(−1)^δ(s,t),sts), verify U_s²=1 and the 2m alternating-reflection
terms come in two equal m-term lists. Reduced prefix-reflection repetition
would delete two letters, so reduced prefixes are distinct. Their sign-change
set depends only on the presented-group action, giving exchange. Carry out
Lusztig's length induction for Matsumoto, including the case the exchange
letter is last and the alternating two-generator chain ends at its finite
braid length. Establish the length-square exception sw=wt if both middle
lengths agree and ℓ(swt)=ℓ(w). For the Hecke operators list all six length
patterns on w,sw,wt,swt; the two exceptional patterns require equal parameters
on conjugate s,t. Commutation makes evaluation A→E at e_1 injective because
all e_w are reached by commuting right operators; it is surjective by reduced
left products. Transport the associative operator-algebra multiplication to E,
then derive the presentation and the basis. This supplies actual independence
without preliminary GCD cancellation.

**Finite integrals route (HH-7/8).** The projection is P(m)=Σm_0S(m_1).
First prove its value is coinvariant by cancellation in the iterated coaction.
Then β(m)=ΣP(m_0)⊗m_1 and α(n⊗h)=nh are inverse. For finite H, the right H*
Hopf module has (f↽h)(x)=f(xS(h)) and coaction characterized by
Σp(f_1)f_0(x)=Σp(x_1)f(x_2). Pairing both sides proves compatibility without
S inverse. Coinvariants are left dual integrals. Dimensions give one nonzero
integral line; α(λ⊗h)=0 if S(h)=0 forces h=0. Only then define S^-1. The
Frobenius pairing and normalized averaging use this proved isomorphism and
its explicit dual-basis identities. There is no Larson–Radford semisimple/
cosemisimple equivalence hidden in Hopf Maschke.

**Affine polynomial model (HH-15).** Work universally with Q invertible and
Laurent variables Xi. On monomials prove
D_i(f)=(f−s_i f)/(1−Xi/Xi+1) belongs to the Laurent ring, including negative
exponents. In the fraction-field skew algebra set
T_i=Q s_i+(Q−1)(1−s_i)/(1−Xi/Xi+1). Verify the quadratic in its identity and
s_i coefficients. For the adjacent braid collect coefficients of the six
permutations of three indices after multiplying by the common product of
three pairwise denominators, then verify the resulting polynomial identities;
for distant generators use disjoint permutations and variables. Prove the
cross relation for arbitrary Laurent f by the twisted Leibniz identity from
the generator case. For a reduced word w, its top permutation coefficient is
a product of permuted nonzero rational functions. Lower terms have smaller
Coxeter length, so choose maximal-length w in a hypothetical dependence to
prove its coefficient zero, descending on length. Universal spanning and
independence yield the basis isomorphism; its tensor extension proves every
specialization. Polynomial-model faithfulness at singular parameters is not
an assumption. The p-adic convolution model is a distinct future application.

**Cyclotomic rank and cellular structure (HH-16/17).** The complete local design route now uses Neaime’s generator-closed normal-word span, followed by the independent generic seminormal/matrix-unit/colored-RSK lower bound. The finite-free coefficient extension, corrected source identities and bounded-PBW conversion are supplied in §8. HH-17 has three separate earlier integral suppliers: ordinary Garnir/Murphy straightening with its dominance refinement, componentwise fixed-initial-row straightening, and the DJM component-shift identity. Their shape ideals and fixed-row law give an integral spanning family of the already proved PBW rank; the square matrix determinant proves basis without generic-to-integral inference. This removes the previous unfilled source gates while preserving the cyclotomic PBW and cellularity claims.

**Quantum centralizer design (HH-18).** A relation-descent supplier constructs the precise quantum tensor action before local commutation. Classical polarization/Newton identities prove the first commutant, and the elementary finite semisimple double-commutant supplier proves the other. Two independently formed finite commutator matrices give generic upper bounds on commutant dimensions; two finite word-column matrices give image lower bounds at q=1. The commuting inclusions close both rank sandwiches over Q(q). The explicit regular diagonal H_j=(L_j−1)/(q−1) prevents degeneration of Cartan data. The former open full-centralizer source gate is replaced by this complete elementary route; no advanced quantum character or semisimplicity theorem is assumed.

## 5. Excluded advanced consumers and source hazards

- Generic quantum universal R needs a specified completion, type-I weights
  and local finiteness; it is not an element of the plain algebraic H⊗H.
  Quantum affine evaluation homomorphisms are not generally Hopf maps and
  finite-dimensional quantum affine modules do not inherit a global braiding.
- Hecke algebras are not assumed Hopf: T_i↦T_i⊗T_i generally fails the
  quadratic relation. The bridge uses a Hopf braiding plus an extra Hecke
  polynomial, or the explicit elementary Hecke symmetry.
- Finite-dimensional triangular classification, Frobenius-type divisibility,
  modular/ribbon reconstruction, Deligne/super-Tannakian theory, Witt lifting,
  Nichols–Zoeller and general Radford fourth-power formulas are later frontiers
  with explicit supplier gaps in the reports. None is consumed here.
  Etingof–Gelaki math/9905168v2 explicitly labels its positive-characteristic
  classification proof incomplete and points to an unread repair paper;
  it cannot be a supplied proof. If twists are later added, normalized gauges
  must satisfy ε(x)=1; ordinary and categorical dimensions remain distinct.
- KLR/Ariki decomposition, KL positivity and Soergel categorification retain
  established homes and substantial prerequisite gates. The Brundan–Kleshchev
  article imports cyclotomic dimension and leaves some repeated-residue braid
  cases as exercises; Elias–Williamson uses Soergel/Rouquier/Hodge suppliers.
  They do not close these elementary source gaps merely by being authoritative.
- Normalizations remain explicit. Here normalized (T−v)(T+v^-1)=0 converts
  to S=vT and Q=v². Published Soergel convention instead uses q=v^-2 and
  a separate H_i=v(T_i+1); that H_i is not the standard normalized generator.
  Traditional multiplicative cyclotomic generators are not Mathas's additive
  unified generators at v²=1 without an invertible conversion factor.

## 6. Readiness and integration status

This independently repaired **draft prose design** contains 111 ordered proposed contracts and no authored item proofs. Every promised construction has an explicit local proof route and its necessary support placed earlier; definitions bind named existence/descent/uniqueness justifiers. The repaired HH-10 convention, HH-11 full-rank representation, HH-16 integral span, HH-17 integral cell law and HH-18 two-sided centralizers are documented in §8 and the independent audit. Completion of this scaffold design is distinct from proving or publishing the items: future authoring must write all arguments and pass normal build gates before any application consumes them.

Machine contracts: [page graph](hopf-hecke-scaffold/pages.json), [111 proposed suppliers](hopf-hecke-scaffold/inventory.json) and [independent audit](hopf-hecke-scaffold/independent-audit.md). Native pages retain draft status and empty items/examples arrays.

## 7. Binding definition justification and item-level supplier map

The inventory records explicit proposed proof dependencies for every contract and named `justified_by` targets for every definition. AC is tagged and propagated through the selected infinite coefficient/complement proof variants; finite constructions do not acquire it merely by sharing a page. Every justification depends on its definition, while no definition depends on its own future justifier. HH-9’s later finite-double illustration is a separate justification relation, never an earlier ordinary prerequisite. Future item authoring must verify and record the actual dependency uses against the complete authored proof.

| Definition | Named local proof contracts for its promised features |
|---|---|
| `def-hh-scalar-and-tensor-conventions` | `lem-hh-tensor-coherence-on-elementary-tensors` |
| `def-hh-coalgebra-and-coalgebra-map` | `lem-hh-finite-comatrix-coalgebra-exists` |
| `def-hh-subcoalgebras-coideals-and-quotient-coalgebras` | `thm-hh-coalgebra-quotient-and-kernel-descent` |
| `def-hh-right-comodule-and-comodule-morphism` | `lem-hh-comodule-kernels-quotients-and-coefficient-identities` |
| `def-hh-dual-algebra-and-rational-module` | `thm-hh-comodules-and-rational-dual-modules` |
| `def-hh-bialgebra-and-bialgebra-map` | `lem-hh-group-and-polynomial-hopf-algebras-exist` |
| `def-hh-hopf-algebra-and-antipode` | `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication`, `lem-hh-group-and-polynomial-hopf-algebras-exist` |
| `def-hh-hopf-ideal-and-hopf-subalgebra` | `thm-hh-hopf-quotient-kernel-and-tensor-product-constructions` |
| `def-hh-finite-dual-of-an-associative-algebra` | `thm-hh-finite-dual-coalgebra-and-hopf-descent` |
| `def-hh-module-category-and-tensor-action` | `thm-hh-bialgebra-module-tensor-coherence` |
| `def-hh-left-dual-of-a-finite-hopf-module` | `thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities` |
| `def-hh-right-right-hopf-module-and-coinvariants` | `lem-hh-hopf-module-coinvariant-projection`, `thm-hh-fundamental-theorem-of-hopf-modules` |
| `def-hh-left-right-integrals-and-integral-functionals` | `thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective` |
| `def-hh-frobenius-functional-and-associative-pairing` | `thm-hh-finite-hopf-algebras-are-frobenius` |
| `def-hh-leg-notation-and-quasitriangular-hopf-algebra` | `thm-hh-r-matrix-constructs-a-module-braiding`, `thm-hh-finite-double-hopf-structure-and-canonical-r` |
| `def-hh-braiding-and-triangular-structure` | `thm-hh-r-matrix-constructs-a-module-braiding` |
| `def-hh-finite-double-cross-relations` | `lem-hh-double-crossing-map-and-associativity`, `lem-hh-double-coalgebra-and-antipode-descent`, `thm-hh-finite-double-hopf-structure-and-canonical-r` |
| `def-hh-left-left-yetter-drinfeld-module` | `thm-hh-double-modules-and-yetter-drinfeld-modules` |
| `def-hh-coxeter-matrix-word-group-and-length` | `thm-hh-coxeter-exchange-deletion-and-faithfulness` |
| `def-hh-geometric-coxeter-representation-and-roots` | `lem-hh-dihedral-root-recurrence-and-root-sign` |
| `def-hh-universal-coxeter-hecke-parameters-and-presentation` | `lem-hh-reduced-word-independence-and-length-multiplication`, `thm-hh-generic-coxeter-hecke-standard-basis` |
| `def-hh-parabolic-hecke-subalgebra-and-induced-module` | `thm-hh-parabolic-hecke-freeness-and-induced-bases` |
| `def-hh-canonical-hecke-trace-and-symmetrizing-form` | `thm-hh-canonical-hecke-trace-is-symmetric-and-perfect` |
| `def-hh-specialization-and-regular-trace-determinant` | `thm-hh-generic-finite-hecke-semisimplicity` |
| `def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences` | `lem-hh-demazure-lusztig-operators-satisfy-affine-relations` |
| `def-hh-type-a-affine-bernstein-presentation` | `thm-hh-affine-type-a-bernstein-pbw` |
| `def-hh-multiplicative-cyclotomic-hecke-algebra` | `thm-hh-ariki-koike-basis-and-generic-splitness` |
| `def-hh-multipartitions-standard-tableaux-and-generic-contents` | `thm-hh-generic-cyclotomic-seminormal-models` |
| `def-hh-cell-datum-dominance-and-cell-ideals` | `thm-hh-cell-modules-forms-and-radicals` |
| `def-hh-cyclotomic-murphy-elements` | `thm-hh-cyclotomic-murphy-basis-and-cellularity` |
| `def-hh-hecke-symmetry-and-ordered-basis-operator` | `lem-hh-type-a-tensor-operator-is-a-hecke-symmetry` |
| `def-hh-type-a-quantum-tensor-action-for-centralizers` | `lem-hh-quantum-presentation-and-tensor-action-descent` |

## 8. Independent repairs and exact hard-seam derivations

This section records the one targeted audit and one repair pass. It is a proof-design receipt, not a claim that empty native pages already contain proved items. The [independent audit](hopf-hecke-scaffold/independent-audit.md) distinguishes the mathematical route checks from structural validation.

### 8.1 Finite algebra facts and Choice

HH-1 separates arbitrary coefficient extension (AC) from finite duality, finite matrix arithmetic and finite module decomposition. To split a submodule N of S⊕M, where S is simple and M is a smaller finite direct sum of simples, either N contains S, reducing to N∩M, or N∩S=0. In the latter case the projection embeds N into M; the inductively split image makes N the graph of a map to S, with complementary S plus the complement of that image. This proves the finite submodule/quotient facts without importing the AC-bearing arbitrary-module theorem.

For the HH-14 radical, the intersection of all maximal left ideals equals the intersection of annihilators of simple modules: apply every map a↦av to a nonzero vector of a simple module. A finite-dimensional intersection stabilizes after finitely many strict dimension drops. Thus A/J embeds into finitely many simple quotients. The finite submodule result makes it semisimple. A finite composition series of A shows J^length=0, because J kills each successive simple factor; L_jb is therefore nilpotent for every b. The kernel-filtration basis proves its trace zero. These steps justify the determinant criterion without assuming the converse, separability or splitness. Formal matrix-unit lifting supplies labels over the explicitly complete split coefficient ring only; it does not descend a Brauer class or splitting to a rational function field.

HH-7's inverse is (P⊗id)ρ, with P considered directly as a map into the coinvariant subspace. This avoids importing arbitrary complements into the finite integral proof. HH-8's finite dual Hopf-module construction, injectivity argument, passage to H* and left/right integral transport use no S inverse before bijectivity is established.

### 8.2 Coherent finite double

The extraction of Etingof–Semenyakin equation (3.10) fails the unit check. The repaired convention is derived locally, rather than accepted because the source is authoritative. For a direct left coaction, f(gv)=(g*f)v, so use H*op with ordinary dual coproduct. In normal order f h,

χ(h⊗f)=Σf_1(S(h_1))f_3(h_3)f_2⊗h_2.

Its two distributive laws, paired on x, have respective common expressions

f(S(k_1)S(h_1)x h_3k_3)⊗h_2k_2,

Σg(S(h_2)x_1h_4)f(S(h_1)x_2h_5)⊗h_3.

They follow by anti-multiplicativity of S and by expanding Δ(S(h_1)x h_3), respectively, and give associativity. The coproduct cross check pairs on x,y and reduces

f(S(h_1)x h_3S(h_4)y h_6)⊗h_2⊗h_5

to f(S(h_1)xy h_4)⊗h_2⊗h_3 by the middle antipode cancellation. This is precisely Δ of the paired crossing.

Set bar f=f∘S^−1. The inverse crossing formula applied to bar f S(h) yields the same scalars f_1(S(h_1))f_3(h_3) as the original crossing under reversal. Thus S_D(fh)=S(h)bar f descends. Its two convolutions reduce to

ΣS(h_1)(bar f_1⊙f_2)h_2,   Σf_1h_1S(h_2)bar f_2,

and equal f(1)ε(h)1 by the two dual and H antipode identities. No pairing nondegeneracy beyond finite duality is assumed.

The YD equivalence precedes the canonical R proof. Its braiding has inverse c^−1(w⊗v)=Σv_0⊗S^−1(v_-1)w; the inverse identities contract S^−1(x_2)x_1 and x_2S^−1(x_1). The correct canonical tensor is dual-first R=Σ(f_i⊗1)⊗(ε⊗h_i); R^−1 replaces h_i by S^−1(h_i). The established YD braiding and hexagons on regular D modules imply the algebraic quasitriangular identities by faithful tensor evaluation. For H=kG, the multiplication becomes (δ_x h)(δ_y k)=δ_(x,h y h^−1)δ_x hk, which passes both unit checks and matches the chosen braiding. This finite-group guard does not substitute for the general Hopf crossing proof above.

### 8.3 Coxeter and trace seams

The full-rank reflection representation is essential: an isolated rank-two model cannot verify relations involving other generators. On the s,t plane the product has eigenvalues ζ_st^±2 and no eigenvalue 1 for finite m. The geometric sum annihilates the off-plane block, so the finite relation holds on the entire representation. Infinite edges give a nonzero square-zero unipotent difference, hence infinite order in characteristic zero.

The signed-reflection action gives an inversion-count lower bound for **any** competing expression. This fills the silent ambient-reducedness step in the source's dihedral corollary. The full representation also proves S∩⟨s,t⟩={s,t}, filling the generator-membership step in Matsumoto's last-letter case. Deletion plus Matsumoto gives word reduction using only the letters present, so parabolic presentation embedding and minimal-coset length additivity have a complete local route.

For the Hecke regular model, the six length squares are (swt,sw,wt,w)=(l+2,l+1,l+1,l), its reverse, the two mixed monotone squares, and the two exceptional equal-middle squares. Exchange forces sw=wt in the exceptions; the odd-edge conjugacy parameter proof gives v_s=v_t. These are exactly the conditions needed for commuting left/right operators. Each P_s is self-transpose in its two-element coordinate block. Therefore τ(T_xT_y)=δ_(x^−1,y), proving the trace pairing directly. The dual basis is indexed by inverse **group elements**, not by algebra inverses.

### 8.4 Cyclotomic integral spanning and cells

For r=1, eliminate X_1=u_1 and use the finite type-A basis. For r≥2, the finite free extension R′=R[v,w]/(v²−Q,w^r−(−1)^(r+1)∏u_a) has explicit basis {v^i w^j:0≤i<2,0≤j<r}. No assumption that it is a domain is used. It is faithful and flat because it is free of positive rank. The normalized s_j=v^−1T_(j−1), z=w^−1X_1 satisfy the cyclotomic constant-one presentation of Neaime §6, with z commuting with s_j only for j≥3.

Write Λ_1={z^k:0≤k<r}. For i≥2, Λ_i consists of 1, descending words s_i⋯s_j, loop words s_i⋯s_2z^k, and sandwich words s_i⋯s_2z^ks_2⋯s_j, with 1≤k<r and 2≤j≤i. Normal-word spanning is proved by generator closure, not by BMR freeness. Rank two is controlled by

(s_2zs_2)²=a²zs_2zs_2+a zs_2z+s_2z²s_2,

s_2z²s_2=(s_2zs_2)²−a²zs_2zs_2−a zs_2z,

where a=v−v^−1. Neaime Lemmas6.2–6.4 induct on the loop power; Proposition6.5 closes all rank-two left products. For the step n, the older generators preserve the prior span and s_n commutes past Λ_1⋯Λ_(n−2). The nine remaining factor pairs are descending/descending (6.7), descending/loop (6.8), descending/sandwich (6.9), loop/descending (6.10), loop/loop (6.11), loop/sandwich (6.12), sandwich/descending (6.13), sandwich/loop (6.14), and sandwich/sandwich (6.15). Square propagation is Lemma6.6; its finite index sweeps and the referenced braid moves are supplied by §§5.7–5.16. The correction to 6.4 Case3 is

a z^c s_2z^(c′)s_2zs_2=a²z^(c+c′)s_2zs_2+a z^(c+1)s_2z^(c′).

These moves decrease the finite stage/power/index measures and use no parameter-difference denominators. Each Λ_n word has nonnegative X-degree k<r. Bernstein rewriting preserves that degree and nonnegativity; length-additive parabolic factorization then places it in Σ H_(n−1)X_n^bT_d, 0≤b<r. The tower induction proves the bounded PBW spanning family after extension. Right-exact tensoring of its cokernel and faithful freeness descend spanning to R.

Generic contents separate addable boxes and entire standard tableau sequences. Three consecutive boxes cannot have equal endpoint contents: two required intermediary boxes lie between equal-diagonal boxes. The rational seminormal formulas therefore have valid denominators on every local three-label orbit. Enumerating admissible linear extensions gives the complete finite braid verification, with nonstandard states set to zero; the same-row/column boundary values are Q and −1. Adjacent incomparable swaps connect standard tableaux; joint spectral interpolation and nonzero swap coefficients produce every matrix unit, independently in each shape. Colored RSK supplies the count r^n n!, so the generic lower bound matches integral spanning and proves PBW independence. No statement that each L_i has the original cyclotomic polynomial enters this argument.

HH-17 then uses the ordinary integral Garnir proof, including its **dominance upgrade**; lexicographic growth is insufficient. The two coset expansions in Mathas Lemma3.12 are explicitly equated before isolating the Garnir term. Propagation under row-block adjacent swaps and the −1 column eigenvalue exclude a vertical pair in any block of consecutive row labels. Each block forms a horizontal strip; the first p blocks have at most p boxes per column, giving the required shape dominance inequalities. This is established over the universal domain before specialization, so Q+1 is never cancelled at a singular parameter.

Component cosets preserve within-component order. Their relabeling preserves prefix dominance by taking, at each cutoff, an initial segment of each component's labels. The fixed-initial-row type-A cell law therefore extends componentwise. The genuinely cyclotomic identity is the displayed u_a/T_0 shift in the earlier contract, followed by the coset expansion that moves one node into the earlier component. It produces strictly dominant shapes; the k=1 branch vanishes by the actual polynomial on L_1. These calculations prove the higher-shape ideals and the initial-row right ideal before quotienting. Standard m_st span because the bottom shape has m_λ=1, and their cardinality equals the proved PBW rank. The square coordinate matrix has a right inverse, hence unit determinant: this is integral cellularity, independent of generic diagonalization or a false unit-diagonal transition.

### 8.5 Both generic quantum commutants

The selected coproduct convention is fixed before calculation. On two tensor sites the quantum generator relations and commutation with T are finite calculations partitioned by labels i,i+1 and outside labels. The all-(i+1) pair for E reduces to q=q^−1+(q−q^−1). The quantum Serre coproduct calculation expands by bidegree after ΔE_i=A+B with AB=q²BA and K_iE_j=q^−1E_jK_i for adjacent i,j; pure bidegrees are factor Serre relations and mixed bidegrees cancel with coefficients 1,−(q+q^−1),1. F uses inverse weights. Thus no global quantum PBW or unverified universal R is needed to define the actual tensor matrices.

Classically, polarization gives the entire permutation commutant as a span of a^⊗n, and Newton recursion expresses these in the Lie tensor image. The reverse commutant is proved over Q by finite semisimple density over the division algebras End_B(S); no silent FTA, algebraic closure or splitting field is used. For a finite tuple of division-linearly independent vectors, a proper evaluation image would admit a nonzero map to S annihilating it; at 1 this is a forbidden dependence. Distinct simples have zero intertwiners, giving independent blocks. Commuting with the diagonal/off-diagonal multiplicity matrix units gives the bicommutant exactly.

Let A_0,B_0 be these rational classical images, and A_F,B_F the generic images. The regular diagonal H_j=(L_j−1)/(q−1) specializes to the classical count operator. Finite generator commutator systems give

dim_F End_(B_F)≤dim_Q A_0,   dim_F End_(A_F)≤dim_Q B_0.

Finite word-column minors give dim_F A_F≥dim_Q A_0 and dim_F B_F≥dim_Q B_0. Verified commuting inclusion supplies the middle inequalities, so both sandwiches close. This proves mutual image-centralizer equality for all N≥1,n≥0; it does not assert faithful abstract Hecke action when N<n, nor equality at root-of-unity or modular specializations.
