---
id: lem-chosen-surface-maps-have-the-endpoint-seifert-degree
kind: lemma
title: "Chosen surface maps have the endpoint Seifert degree"
status: draft
origin: session
deps:
  - lem-chosen-marked-link-triangles-define-chain-maps
  - lem-chosen-link-neck-maps-and-edge-counts-satisfy-local-identities
  - thm-chosen-hamiltonian-squeeze-has-uniform-unit-junction-and-comparison
  - thm-offcurve-split-birth-and-death-have-actual-triangular-counts
  - thm-finite-based-link-move-words-have-full-colored-unit-comparisons
  - lem-knot-floer-duality-and-filtration-swap
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "Full Choice is retained through the actual count suppliers. The finite determinant and Euler ledger introduces no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Zemke, Absolute gradings on link Floer homology and the Heegaard Floer concordance invariants"
      url: "https://arxiv.org/abs/1701.03454"
---

## Statement

Assume the Axiom of Choice. Supply an actual composable chosen decorated surface movie in S3 times an interval, with the good finite marked triangle and neck data, actual auxiliary top cycles, unit calibrations and diagram comparisons described in the proof. Suppose its knot endpoints have the normalized ordinary w and z gradings and original Seifert Alexander normalization. Its actual composite has grading shifts equal to the two region Euler characteristics minus half the total number of endpoint pairs. In particular a genus-g surface with disk w-region and connected genus-g z-region has a full-minus map of Maslov degree zero, nonnegative U exponents and Alexander upper shift g. An annulus with both regions disks has degree zero in both filtrations. This is a grading theorem for a supplied actual composite; existence of a compatible movie and its tower scalar are separate hypotheses and conclusions are not asserted for a merely formal tree word.

## Facts & Assumptions

**Given:** The actual composable chosen movie, its elementary count maps and comparisons, its genuine sector caps, its region decomposition and the endpoint normalization in the Statement.

[F1] [[lem-chosen-marked-link-triangles-define-chain-maps]] supplies its stated actual interface. No full decorated movie invariance is used.

[F2] [[lem-chosen-link-neck-maps-and-edge-counts-satisfy-local-identities]] supplies its stated actual interface. No full decorated movie invariance is used.

[F3] [[thm-chosen-hamiltonian-squeeze-has-uniform-unit-junction-and-comparison]] supplies its stated actual interface. No full decorated movie invariance is used.

[F4] [[thm-offcurve-split-birth-and-death-have-actual-triangular-counts]] supplies its stated actual interface. No full decorated movie invariance is used.

[F5] [[thm-finite-based-link-move-words-have-full-colored-unit-comparisons]] supplies its stated actual interface. No full decorated movie invariance is used.

[F6] [[lem-knot-floer-duality-and-filtration-swap]] supplies its stated actual interface. No full decorated movie invariance is used.

[F7] [[def-axiom-of-choice]] supplies its stated actual interface. No full decorated movie invariance is used.

## Proof

1.1 For each intermediate S3 multi-link diagram use its actual ordinary w complex and its actual ordinary z complex, obtained by setting the opposite color to one. Choose their absolute origins so their respective highest ordinary homology degrees are (n-1)/2, where n is the number of w marks, also the number of z marks. The highest classes and their identifications in the chosen data must be supplied by the actual ordinary operations, not assumed for an unconstructed diagram. For a band step, its actual squeeze comparison supplies those identifications. A different intermediate origin would change the two adjacent step shifts oppositely; no endpoint degree is being prescribed by this choice. [given, F1, F2, F3, F4, F5, F6, F7, construct, algebra]

1.2 Fix either color q=w or q=z separately. Its relative Maslov grading is the actual capped determinant index minus twice the q intersections. For two triangle terms in the chosen sector, glue their corner caps and connecting pair-strip caps. The matching boundary real frames cancel in pairs. The difference is the capped triply periodic chain, so the index difference is its Chern evaluation plus twice its q intersections. Thus, after subtracting the corner relative gradings and twice the marked exponent, the triangle operator has ONE constant c_q on that sector, independent of the chosen auxiliary input corner. This assertion uses determinant-line gluing, not counts or an arbitrary absolute triangle formula. Here the sector is genuine: each S3 end has unique Spin-c structure and the auxiliary unlink is nullhomologous in the split S1-times-S2 boundary, so BOTH the w and z auxiliary structures are explicitly the standard torsion structure. They are not inferred from one another by a false torsion implication for a homologically nontrivial link. The actual auxiliary filling uses three- and four-handles and yields S3-times-I. Its handle exact sequence shows H2(X) is generated by the attaching spheres from the auxiliary boundary: all H2 is killed by those three-handles and four-handles add none. Also X is the complement of a regular neighborhood of a one-complex in the product, so it is simply connected: a loop bounds a disk in the product, and a generic disk misses that one-complex since two plus one is less than four. Thus H2 has no invisible torsion pairing, and restriction H2-cohomology of X to the auxiliary boundary is injective. The standard torsion auxiliary restriction therefore fixes the same genuine extension sector for both input cycles. The cap-zero argument from the actual cut balls verifies its periodic Chern relations. Nothing requires c_w=c_z. [given, F1, F2, F3, F4, F5, F6, F7, construct, algebra]

1.3 Consequently for the actual index-zero triangle operator F, its q degree as a map with a homogeneous auxiliary input theta is Mq(theta)+c_q. This remains true after setting the opposite color to one: the surviving variable has degree minus two and exactly restores its removed marked exponent. [given, F1, F2, F3, F4, F5, F6, F7, construct, algebra]

1.4 The chosen auxiliary cycles Theta_w and Theta_z differ only in the alternating four-marked factor. Its actual index-one z bigon has n_w=0 and n_z=1, so its actual relative degrees give $M_w(\Theta_w)-M_w(\Theta_z)=1,\qquad M_z(\Theta_w)-M_z(\Theta_z)=-1.$ The same relative difference is retained by the actual marked neck transfers. No absolute half-degree for either auxiliary cycle is used. [given, F1, F2, F3, F4, F5, F6, F7, construct, algebra]

1.5 The NEW unit comparison proves that F(Theta_w,-) with all V equal to one is the actual ordinary w diagram comparison, with its top unit carried with coefficient one. This is a chain homotopy equivalence at the fixed ordinary w-pointed ends. Its degree is zero: a homogeneous isomorphism between the ordinary homology modules with highest degree normalized to the SAME (n-1)/2 must carry that highest degree to itself, and its unit coefficient is one. Hence M_w(Theta_w)+c_w=0. [given, F1, F2, F3, F4, F5, F6, F7, construct, algebra]

1.6 Apply literal w/z relabeling to the SAME NEW physical unit comparison. The strips, source junction, inverses, continuations and triangle collars are unchanged; their independent marked weights are relabeled. It proves that F(Theta_z,-) with all U equal to one is the ordinary z diagram comparison and has z degree zero. Hence M_z(Theta_z)+c_z=0. The relative auxiliary difference and the common WITHIN-z determinant constant then give $\deg_{M_w}F(\Theta_w,-)=0,\qquad \deg_{M_z}F(\Theta_w,-)=-1.$ Similarly F(Theta_z,-) has degrees (-1,0). This is an actual unit-comparison calibration and a relative cap computation. It does not assert equality of the w and z constants or choose them to obtain the answer. [given, F1, F2, F3, F4, F5, F6, F7, construct, algebra]

1.7 Let a triangle contributing to F(Theta_w,x) have exponents a=n_w and b=n_z and output y. The two homogeneous equalities just proved read Mw(y)-2a=Mw(x) and Mz(y)-2b=Mz(x)-1. Set the intermediate collapsed grading to A=(Mw-Mz)/2. Subtracting gives $A(U^a y)=A(x)+\tfrac12-b.$ Every actual b is nonnegative. Thus after V=1 the chosen type-z band map has Maslov shift zero, algebraic U exponent nonnegative, and Alexander upper shift plus one-half. The type-w map has Maslov shift minus one and Alexander upper shift minus one-half. These statements concern the actual finite triangle counts, including all positive z intersections, not only their associated-graded part. [given, F1, F2, F3, F4, F5, F6, F7, construct, algebra]

1.8 The NEW arbitrary-old-link split-birth operation supplies an actual triangular matrix [[D,H],[0,D]], with birth the top-column inclusion and death the bottom-row extraction. Its NEW ordinary edge normalization gives H=Da+aD at uniform U and V=1; the explicit degree-zero triangular change Q=[[I,a],[0,I]] conjugates it to diag(D,D) and preserves BOTH those maps. This follows from the actual edge's lower-left coefficient one and the actual weighted index-two chain identity, not a rank inference or an assumed H zero. The two local generators differ by one in BOTH relative Maslov gradings, as the two empty birth bigons show. Thus the ordinary birth map sends the old highest class to the new highest class. With highest origins (n-1)/2 and n/2 its w shift is plus one-half. Death extracts the complementary class one degree below the new highest class and hence has w shift plus one-half as well. Literal w/z exchange gives the SAME two statements for z, using a relative edge from an old z to the new z. Both birth and death therefore have actual pair of degrees (+1/2,+1/2). This uses the proved arbitrary-old-link birth operation, not the earlier same-region auxiliary unlink neck. [given, F1, F2, F3, F4, F5, F6, F7, construct, algebra]

1.9 For the ACTUAL quasistabilization the new operator at uniform coloring is two copies of D. S-plus uses the w-top generator and S-minus extracts the other generator, so the same highest-class argument gives w shift plus one-half for both. After forgetting w, T-plus uses the z-top and T-minus extracts its complement, so both T maps have z shift plus one-half. The actual relative local difference (1,-1) then gives the full pairs: S-plus and S-minus have (+1/2,-1/2); T-plus and T-minus have (-1/2,+1/2). These conclusions come from actual inclusions, extractions, ordinary top origins and the relative disk index, without declaring an auxiliary absolute half-degree. The H-piece T-plus T-minus accordingly has (-1,+1), agreeing with the actual Psi derivative and its boundary-weighted edge identity. [given, F1, F2, F3, F4, F5, F6, F7, construct, algebra]

1.10 Every elementary map now calibrated above has EXACTLY the pair in the actual doubled-region Euler ledger: (0,-1) for z saddles, (-1,0) for w saddles, (+1/2,+1/2) for births and deaths, and the respective quasistabilization pairs. The determinant argument supplies homogeneity of the actual counts; the ordinary unit comparisons and literal top/bottom maps supply their constants. Glue the actual movie pieces along m marked intervals. Their region Euler numbers add with subtraction m, precisely canceling the intermediate top origins. The proved doubled-region identity therefore gives the TOTAL pair $(\delta_w,\delta_z)=(\chi(F_w)-(n_0+n_1)/2,\ \chi(F_z)-(n_0+n_1)/2).$ The highest-origin declarations have canceled at every intermediate interface; the endpoint origins are fixed original knot origins. The retained endpoint conjugation/cap interface identifies A=(Mw-Mz)/2 with the ORIGINAL Seifert Alexander normalization, with no correction. Thus for a supplied ACTUAL COMPOSABLE chosen movie, not a merely formal word, the cumulative determinant/endpoint-cap grading is the half-Euler difference. For the constructed genus-g disk-w surface it is (0,-2g), so its full-minus map has Maslov shift zero, nonnegative U exponents and Alexander upper shift g. For a decorated annulus with both regions disks it is (0,0), giving a degree-zero bifiltered map. [given, F1, F2, F3, F4, F5, F6, F7, construct, algebra]

1.11 For completeness the relative region Euler ledger is a finite gluing identity. Double a region R across its dividing arcs. At an endpoint with n marked intervals, the corner real boundary frames contribute half of their number. Hence its normalized relative Euler count is chi(R) minus one half of the sum of its incoming and outgoing marked-pair counts. If two pieces glue along m intervals, Euler characteristic subtracts m; the two intermediate half contributions also sum to m. Thus the normalized counts add. Applying this to every actual elementary map calibrated above proves the displayed total pair by induction over the finite chosen movie, with no declaration of an intermediate absolute origin affecting the endpoint total. [given, F1, F2, F3, F4, F5, F6, F7, construct, algebra] ∎

The admission of a whole surface to the compatible chosen data, tower nonvanishing, and any countable-choice-only specialization remain separate obligations.
