# Thistlethwaite 1991: full-paper reading and MT dependency report

Literature-only, 2026-10-21. No new mathematical proof, accepted-proof review, canonical edit, or original105 closure.

Primary: Morwen B. Thistlethwaite, *On the algebraic part of an alternating link*, Pacific Journal of Mathematics 151(2) (1991), 317–333. Public publisher PDF: https://msp.org/pjm/1991/151-2/pjm-v151-n2-p09-s.pdf . Durable PDF/text are `thistlethwaite-1991-algebraic-part.pdf` and `.txt` in this directory.

## Actual reading extent

Read the entire extracted article, printed pp.317–333 (PDF pages2–18), including introduction, all definitions/results/proofs, epilogue and bibliography. The 21-page PDF also contains a title wrapper and journal back matter; these are not part of the 17-page article. Rendered all article pages sequentially into `thistlethwaite-1991-rendered/`. Directly inspected page images319,320,323,324,325,327,329,330,331,332: every numbered figure1–9, plus the two imported proofs and their surrounding statements. Other article pages were read as extracted text, not claimed visually inspected. Also directly read the supplied MT Figure4.5/context p147 and bibliography p171.

MT bibliography entry[13], p171, exactly identifies this paper. Entry[12] is the adequate-link Kauffman polynomial paper; entry[5] is Menasco's 1984 Conway-sphere/surface paper. These agree with the dependencies MT itself names on p147.

## Full paper map and relevant scope

- pp.317–318: algebraic-part motivation; standing focus is links admitting connected prime alternating diagrams, using Menasco's irreducibility/atoroidality result. This is not an arbitrary reducible or nugatory-diagram setting.
- pp.318–322, Section2: tangles in closed-up punctured 3-spheres; four endpoints per boundary sphere; no interior ball containing a single knotted arc. Definition2.2 (p319) defines inessential boundary-return crossings and reduced tangles. A separate standing convention on p319 excludes nugatory crossings. Definitions2.4/2.5 (pp320–321) make Conway spheres/disks pairwise essential, excluding specified trivial sides. Elementary/algebraic tangles and maximal Conway decompositions are then defined.
- pp.322–327, Section3: visible/hidden Conway-sphere normalization from Menasco [M1]; Figure3(ii) hidden form becomes visible after an isotopy adding exactly two crossings (Figure3(iii)). Theorem3.1 and its adequate-double extension provide crossing-minimality; Corollaries3.2/3.3 control triviality and the hidden pieces. Elementary recognition uses Conway disks and visible alternating subtangles.
- pp.327–330, Section4: Conway-sphere-free case. Elementary links' alternating diagrams are recognized via the Kauffman invariant kappa, deletion/contraction, and Proposition4.5's elementary graph induction. This entire algebraic recognition branch is NOT needed merely to import3.1/5.1 into MT.
- pp.330–333, Section5: Proposition5.1 proves visibility preserved by homeomorphisms. Proposition5.2 gives a sketch for algebraic-diagram flyping using Bonahon–Siebenmann; it is not used in5.1 and is not a substitute for general MT. The text explicitly calls general Tait flyping unsolved at that date. It ends with adequate-diagram non-flyping examples and references.

## Exact Theorem3.1 input and proof

Printed p324: a REDUCED ALTERNATING diagram D of a tangle (X,T) with ONE boundary component and n crossings is crossing-minimal among ALL diagrams of that tangle. It does not literally state node counts, rigid-vertex graphs, all punctured-sphere tangles, or a boundary-fixed equivalence.

Figure4 forms the pure double of the tangle by adjoining the reflected paired copy. Its link type depends only on the tangle equivalence. Doubling the reduced alternating diagram yields a generally NON-ALTERNATING ADEQUATE link diagram. Corollary3.4 of [T3] says this doubled diagram is crossing-minimal; any smaller original tangle diagram would double to a smaller diagram of the same link. This proves3.1. The following remark explicitly extends the argument to ANY tangle diagram whose double is adequate, including the nonalternating hidden pieces used below.

Required source edges: the actual pure-double construction/adequacy check in Figure4, and adequate-link crossing-minimality [T3]Cor3.4. Accepted alternating-link minimality alone does NOT supply this nonalternating adequate theorem. No claim that an adequate-minimality library supplier was checked is made here.

MT4.9 uses3.1 after its fixed five-crossing substitution at rigid vertices. The literal 1991 theorem is link/tangle-only; MT states the graph extension, which must retain the actual substitution and graph-homeomorphism/node bookkeeping. It is not an already-proved arbitrary graph-tangle statement merely by renaming3.1.

## Exact Proposition5.1 input and proof

Printed pp330–331: alternating link diagrams D1,D2, an actual pair homeomorphism h, and a Conway sphere F for l(D1) VISIBLE for D1 imply h(F) VISIBLE for D2. Read with the paper's standing prime/diagram conventions above. Here VISIBLE (p322) means parallel to a sphere in Figure3(i), and Conway means Definition2.4's pairwise-essential object. It does not literally say every four-punctured sphere is visible or every arbitrary ball tangle can be normalized.

Proof DAG:

1. Alternating-link crossing invariance [T1] gives a common n.
2. If the image sphere were hidden, Menasco [M1]'s normal form gives Figure3(ii). Figure3(iii) isotopy makes it visible but increases the whole diagram to n+2 crossings.
3. Cutting at the sphere gives two corresponding tangle pairs U1/V1 and U2/V2. Their total crossing sums differ by two, so at least one new tangle diagram exceeds the crossing count of its equivalent old tangle.
4. Yet each new hidden-piece diagram has an ADEQUATE pure double (Corollary3.3(i), p325; Figure3(iii)), hence is crossing-minimal by the remark following3.1 and [T3]Cor3.4. Contradiction.

This uses no flyping theorem, no algebraic-link Proposition5.2, no Kindred parent persistence, and no Section4 algebraic-recognition theorem. The indispensable external geometry is Menasco's visible/hidden Conway normal form; indispensable algebra is adequate-double crossing-minimality. The source itself advertises an unpublished purely geometric alternative, but that is not a proof supplier here.

MT p147 explicitly says5.1 uses Kauffman polynomial properties [12] and Conway-sphere results [5], and extends to rigid-vertex graph pairs by fixed five-crossing substitutions. The supplied page therefore confirms rather than removes these edges.

## Normal-tangle definition: still missing

This complete paper does NOT define the term NORMAL TANGLE. It defines tangle, reduced diagram, pairwise-essential Conway sphere/disk, visible/hidden, trivial/elementary/algebraic tangles. Its visible-sphere normal-form discussion must not silently be identified with MT's exact normal-tangle predicate. MT4.10 may consume5.1 because its own normal tangle makes the Conway sphere essential/visible; the actual MT definition must be read to verify that implication and its graph/vertex conditions.

Likewise the existing MT Figure4.5/context p147 illustrates the alternating closure used by4.9 and names the external dependencies, but contains no normal-tangle definition. The closure shows two sphere arcs joining the four tangle endpoints. Reducedness and strict comparison still depend on MT's normal/reduced hypotheses and its preceding4.9 text, not on an arbitrary closure rule.

## Updated bounded dependency plan

The external paper has now been fully acquired/read; do not request3.1/5.1 piecemeal again. For MT implementation, bind only:

1. MT complexity and NORMAL TANGLE definitions, with graph/prime/reduced conventions and representative-transfer rules. These remain the next small primary packet.
2. The already-recorded MT preparation/alignment/intersection blocks, in contiguous source packets rather than new conditional helpers.
3. Existing sufficient statement interfaces or actual proofs for adequate-link crossing-minimality [T3]Cor3.4 and Menasco [M1]'s visible/hidden sphere normal form. The identified references are [T3]: *On the Kauffman polynomial of an adequate link*, Invent. Math.93(1988),285–296; [M1]: *Closed incompressible surfaces in alternating knot and link complements*, Topology23(1984),37–44. Their full texts have NOT been read for this task.
4. The actual fixed-tangle substitution and graph-to-link transfer already asserted by MT. This is a finite interface obligation, not a demand for the entire algebraic-part theory or general flyping as a supplier.

The classical global route remains noncircular and fully mapped at architecture level. Local authoring and source-support binding remain; no original105 completion follows from this reading.
