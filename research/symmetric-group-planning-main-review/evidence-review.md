# Independent review of symmetric-group planning evidence

Review stream: `/root/symmetric_scaffold`, 2026-09-07. This directory is
isolated from the concurrently written canonical planning directory. Nothing
here authenticates another stream's agent roster or edits the live plan.

## Current evidence provenance

At 15:05 local time the canonical directory contained only `initial-audit.md`,
`pages.json`, and `research-report-contract.md`. Between 15:14 and 15:17,
`agent-1-textbook-ordinary.md`, `agent-2-textbook-symmetric-functions.md`,
`agent-roster.md`, and several cached source files appeared without a spawn or
message visible in this root collaboration tree. Their mathematical content
can be reviewed, but their claimed agent identities and launch/completion
states are not tool-authenticated in this stream.

The two first reports accurately identify retrievable complete texts and their
major ownership boundaries. They remain provisional evidence until the owner
or supervising root authenticates the concurrent stream.

## Full-text checks performed independently

### James 1978

- G. D. James, *The Representation Theory of the Symmetric Groups*, Lecture
  Notes in Mathematics 682, Springer, 1978.
- Cache: `scratchpad/source-cache/symmetric-groups/ordinary-textbook/`.
- SHA-256 of PDF:
  `e339ca5fb1ff9d78874c21c0dd6f7ce609ef94cc805d9921d824424c0712babc`.
- MuPDF reports 161 pages. The extracted terminal pages contain the complete
  index through “Young's Rule,” agreeing with the printed contents. This is a
  complete book scan, not a preview.
- Independently inspected: printed §§11--12, pp. 39--43. Theorem 11.1 states
  that the radical quotient of `S^lambda` is nonzero exactly for p-regular
  `lambda`; Definition 11.2 names it `D^lambda`; Theorem 11.5 gives all
  inequivalent absolutely irreducible modules and says every coefficient
  field is splitting for `S_n`; Theorem 11.6 computes the dimension as the
  p-rank of the Specht Gram matrix. Theorem 12.1 and Corollaries 12.2--12.3
  give the dominance-unitriangular decomposition-matrix boundary. The source
  explicitly says the general modular composition-factor problem is open.
- The ordinary report's harvest of §§6, 16, 18--21, and 25 is consistent with
  the source. James's Murnaghan--Nakayama proof uses the alternating hook
  combination plus Littlewood--Richardson/binomial cancellation; his §25 is a
  real orthogonal form over characteristic zero, not modular JM
  diagonalisation.

### Macdonald 1995

- I. G. Macdonald, *Symmetric Functions and Hall Polynomials*, second edition,
  Oxford Mathematical Monographs, OUP, 1995.
- Cache: `scratchpad/source-cache/symmetric-groups/symmetric-functions-textbook/`.
- SHA-256 of PDF:
  `64e242b84d1f3b7864ed28f89a9b331269a28c1ce2a32ce03b4ee692f5974ea7`.
- MuPDF reports 486 pages. The scan includes front matter, bibliography, and
  the index ending at printed p. 475. This is a complete book scan.
- Independently inspected: Chapter I §4, printed pp. 62--68; §7, pp. 112--117;
  §9, pp. 142--148. The Hall pairing is integral via dual `h`/`m` bases;
  power sums are orthogonal only after rational extension. The Cauchy kernel
  proves Schur orthonormality degreewise/formally. The characteristic map is
  an isometric graded-ring isomorphism because cycle-type concatenation and
  Frobenius reciprocity prove multiplicativity. Section 9 gives a complete LR
  bijection/proof, while §7 Example 5 states Murnaghan--Nakayama without its
  full proof.
- Macdonald distinguishes outer induction multiplication from internal
  tensor/Kronecker multiplication: `p_lambda * p_mu` is zero unless the
  partitions agree, then equals `z_lambda p_lambda`. No positive general
  Kronecker rule is supplied.

### Mathas cache does not yet meet textbook assignment 3

- `mathas-1999-ihaschur.pdf` is a 79-PDF-page author-uploaded document whose
  own contents ends at printed p. 73 and whose introduction repeatedly calls
  it “these notes.” It is a complete version of those notes, not the complete
  228-page AMS University Lecture Series 15 book.
- `mathas-ams-endmatter.pdf` has only 29 PDF pages: series list, front matter,
  contents/end matter and index. It is not the book body. The index proves the
  published book reaches at least p. 188, but does not repair the missing
  body.
- These files may count as authoritative lecture-note evidence. They must not
  be relabelled as the required third full textbook. Assignment 3 still needs
  a genuinely complete, distinct book or an explicitly justified replacement.

### Seminormal article cache

- A. Garsia, *Young Seminormal Representation, Murphy Elements and Content
  Evaluations*: 53-page course notes; source title describes its scope
  accurately.
- A. M. Vershik and A. Yu. Okounkov, *A New Approach to the Representation
  Theory of the Symmetric Groups. II*, arXiv:math/0503040v3: 31 pages.
- Arun Ram, *Seminormal Representations of Weyl Groups and Iwahori--Hecke
  Algebras*: 51 pages.
- The file named `mathas-soriano-2006-seminormal-cellular.pdf` is actually
  arXiv:math/0604108v4, *Seminormal Forms and Gram Determinants for Cellular
  Algebras*, sole author Andrew Mathas. A manifest must use title-page
  metadata, not the filename.
- Mathas's seminormal construction assumes separating JM contents and passes
  to the fraction field; in that setting the algebra is split semisimple. His
  non-separated specialization gives linkage/block-basis information, not a
  simultaneous eigenbasis for modular simples. This characteristic boundary
  must survive the scaffold.

## Publication and ownership audit

Published, nonempty suppliers on disk include the group-algebra, Maschke,
ordinary-character and induction pages in abstract algebra; the modular
projective-cover and Brauer-character/decomposition-matrix pages in group
theory; finite-variable symmetric polynomials; finite probability; and the
monoidal, braided, rigid, and tensor-category pages. `derived-categories` has
a nonempty 60-item page but status `draft`, so it is not a published supplier.

RG-8--RG-11, RG-13, RL-8, and RL-12--RL-15 are registered with empty plan
inventories and have no page files. They are planned suppliers only.

Exact retained ownership:

- RG-8--RG-11: Young combinatorics/permutation modules, characteristic-zero
  Specht classification, ordinary branching/Young's rule/Schur--Weyl, hook
  lengths and RSK.
- RG-13: generic type-A Hecke presentation, standard basis, group/finite-field
  specializations and Tits deformation.
- RL-8: `def-littlewood-richardson-tableau-and-coefficient`,
  `thm-littlewood-richardson-tensor-product-rule`, and their finite-rank
  `GL_r` Schur-module interpretation.
- SYMR: stable Hall/Frobenius machinery, outer restriction/induction
  consequences and skew Specht characters; JM/seminormal refinements;
  symmetric-group modular blocks/branching; Hecke cellular/simple theory;
  cyclotomic Hecke--KLR, level-one Fock/crystals and Ariki; Kronecker,
  FI-stability and Plancherel branches.
- Braid: braid topology/geometric representations, Hecke/Jones trace
  applications, braid-specific categorical actions, Soergel/Rouquier and link
  homology. The two leads agreed that braid currently consumes RG-13 directly
  and needs no SYMR edge; SYMR has no braid dependency.

RL's classical affine/Kac--Moody pages do not supply quantum groups or crystal
bases. The Fock page must introduce the narrow
`U_v(\widehat{\mathfrak{sl}}_e)`/crystal interface it actually uses. It must not cite
RL-14 as if “integrable highest weight” silently meant quantum affine.

## Proof-review rules for the final scaffold

1. Every modular statement names the splitting field, characteristic p,
   quantum characteristic e, partition regularity convention and nonzero
   parameter assumptions it needs.
2. Semisimple seminormal forms and integral/modular triangular JM actions are
   separate claims. Denominators/content separation may not be suppressed.
3. Nakayama's block theorem and Kleshchev modular branching need actual full
   proof routes or must be visibly recorded, non-load-bearing results. James
   1978 calls Nakayama's result a conjecture and does not prove the general
   theorem.
4. The Brundan--Kleshchev isomorphism must specify degenerate versus
   nondegenerate cyclotomic Hecke algebra, quiver, base field, block idempotents
   and completion/power-series choices. A slogan “Hecke = KLR” is inadequate.
5. Ariki's ungraded characteristic-zero canonical-basis theorem and later
   graded decomposition-number theorems are not interchangeable; the final
   source report must state exact coefficient-field restrictions.
6. Murnaghan stability is an eventual statement unless a verified explicit
   stable range is sourced. No unsupported bound will be proposed.
7. Logan--Shepp/Vershik--Kerov limit shape, FI Noetherianity/stability, and any
   deep categorification theorem need source-visible intermediate lemmas or an
   honest recorded-result designation. They cannot be justified by abstracts.

## Review of the concurrent scaffold and inventory (15:20 snapshot)

The concurrent stream has now created
`research/plan-symmetric-group-representations-track.md` and
`research/symmetric-group-planning/proposed-inventory.md`. The architecture is
substantive and the first four page inventories are mostly source-faithful.
The following issues must be resolved before completion.

### Structural and contract issues

1. The canonical prose plan is still an overview with `_Inventory pending_`;
   detailed rows are only in the separate inventory and cover SYMR-1 through
   SYMR-4. This is expected mid-run but not a finished deliverable.
2. The main plan needs a substantive `##`/`###` heading for every A page whose
   heading contains the exact `pages.json` title and whose opening text gives
   the exact page ID. Otherwise `tools/run-tasks.mjs` can match the first ID in
   the overview table and dispatch a future builder to the wrong block. Give B
   companions corresponding exact headings where practical.
3. The commission requires `proposed-items.json` with at least
   `{id,kind,page,deps}` and true item-ID arrays. The current Markdown table is
   not the requested mechanical inventory.
4. Provenance is supplied only through a file-wide default. The task asks for
   statement and proof provenance for every item; a final machine inventory or
   explicit table columns should carry both values per row, especially for
   recorded results and AI-altered examples.
5. Every source heading actually read needs an included/inline/inherited/
   deferred/out-of-scope disposition tied to item IDs. The plan promises this
   crosswalk but does not yet contain it.

### LR ownership and duplicate-claim issues

1. Main-plan §10 offers moving
   `def-littlewood-richardson-tableau-and-coefficient` from RL-8 to SYMR. That
   conflicts with the agreed seam and the supervising root's direction to use
   the stable existing ID with its supplier page declared. `pages.json`
   already takes the safe direction: SYMR outer-products requires
   `tensor-product-multiplicities-and-littlewood-richardson`. Freeze that
   decision and reuse the RL-8 ID; do not propose a move.
2. `cex-a-semistandard-skew-tableau-with-a-nonlattice-word-contributes-zero`
   is a near-exact duplicate of RL-8's existing proposed
   `cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr`. Remove the
   SYMR duplicate or change it into a genuinely additional symmetric-group
   module computation with a different conclusion.
3. `ex-littlewood-richardson-coefficient-greater-than-one-for-outer-induction`
   is likewise too close to RL-8's
   `ex-a-littlewood-richardson-coefficient-greater-than-one`. A distinct SYMR
   example should compute the full induced-module decomposition/dimension
   check, while citing the inherited LR example/coefficient.
4. The main plan says “SYMR-4 proposes” the outer-induction theorem; its own
   label table places outer products on SYMR-3. Correct the label.

### Exact-claim and dependency issues in SYMR-1--SYMR-4

1. `def-skew-schur-function-by-hall-adjointness` includes the theorem “it is
   zero unless containment” but says that conclusion is proved by the next
   row. Keep the definition as adjointness alone and put zero/containment in
   `thm-skew-jacobi-trudi-and-tableau-expansion`.
2. `def-restriction-coproduct...` says the finite degreewise sum lies in a
   “completed” bidegree direct sum. No completion is needed: each homogeneous
   component has the finite sum over `a+b=n`, and the Hopf structure lives in
   the ordinary graded tensor product. Reserve completion for the infinite
   Cauchy kernel.
3. `thm-skew-specht-modules-have-littlewood-richardson-specht-filtrations`
   does not yet state one exact theorem: “any arbitrary-field version is
   stated only ... under its source hypotheses” is a placeholder. Replace it
   with the precise coefficient ring/field and filtration theorem supplied by
   a proof-bearing skew-Specht source, or keep only the characteristic-zero
   character/direct-sum conclusion. No later item should depend on the broader
   placeholder.
4. The Murnaghan--Nakayama theorem lists the general Mackey double-coset
   formula as a dependency although the stated James proof only needs the
   induction character formula/Frobenius setup plus alternating-hook
   cancellation. Remove a non-logical dependency unless the final proof
   actually invokes Mackey.
5. The fixed-tabloid reconstruction theorem openly has only one proof
   treatment. That is an honest gap, but it must appear in the final coverage
   summary; do not count a generic character-theory citation as an independent
   proof.

### Review of agent-4 source metadata and restrictions

1. The report calls S3 “Andrew Mathas and Marcos Soriano,
   *Seminormal Forms and Gram Determinants for Cellular Algebras*.” The
   retrieved PDF's main article (pp. 1--22) is by **Andrew Mathas alone**. It is
   followed by a separately titled appendix, *Constructing Idempotents from
   Triangular Actions* (pp. 23--29), by **Marcos Soriano**. Bibliographic
   identity and heading dispositions must treat these authorships accurately;
   Soriano is not a coauthor on the main title page.
2. The retrieved Okounkov--Vershik arXiv version's exact title is *A New
   Approach to the Representation Theory of the Symmetric Groups. II*. Keep
   “II” in the source manifest and explain its relation to the 1996 Selecta
   paper instead of silently shortening the title.
3. The report correctly distinguishes separated fraction-field seminormal
   bases from non-separated linkage/block idempotents. The final item rows must
   preserve that distinction: ordinary `C S_n` has content eigenlines;
   root-of-unity/modular Hecke theory generally has triangular JM action and
   generalized residue spaces, not the same Lagrange projectors.
4. The ordinary JM page may cite Mathas/Soriano only as an abstract independent
   check. Its main proof support is Okounkov--Vershik plus Garsia/James. Ram's
   later formula ranges were not read closely enough in the report to support
   a type-A formula item.

### Review of agent-3 “textbook” completion

The report's mathematical reading is useful, candid, and source-specific, but
its completion classification fails the commission's third-textbook contract.

- The retrieved Mathas document is a complete **73-printed-page
  prepublication manuscript**. Its own introduction calls it “these notes.”
  The report acknowledges that the published AMS book is a distinct expanded
  xiii+188-page edition and that only publisher end matter, not its body, was
  retrieved.
- Calling the shorter manuscript a “textbook” does not overcome the explicit
  instruction not to relabel short lecture notes. The task also directs the
  researcher to retrieve a different authoritative book when a desired book
  has no accessible full text. That replacement was not made.
- Therefore this source may be counted as complete authoritative lecture
  notes and all read chapters may support claims, but assignment 3 cannot be
  marked complete as the third full textbook unless a genuinely complete
  different book is retrieved or the owner explicitly grants an exception.

The mathematical restrictions from the report that must be preserved are:

1. Mathas uses right modules and a dual-Specht/e-restricted labelling; translate
   to the usual Dipper--James p-regular convention only through explicit
   conjugation/duality.
2. The cellular simple-module theorem needs a finite-dimensional cellular
   algebra over a field; over a general coefficient ring it supplies cell
   modules/forms, not the simple classification.
3. Murphy JM action is triangular over general rings; interpolation and
   seminormal diagonalisation require a field plus `e>n`/separation.
4. The q-Schur comparison quoted needs `d>=n` where stated.
5. The Jantzen/Schaper formula needs a PID lift and nonzero generic quantum
   factorial; it is a virtual radical-layer identity/constraint, not a general
   decomposition-number algorithm.
6. The source proves same-e-core block classification in its exact Hecke/q-Schur
   conventions, but its Specht irreducibility criterion is restricted to
   e-restricted labels and does not solve general irreducible-Specht or
   decomposition problems.

### Review of concurrent SYMR-5 inventory

The JM/GZ page is strong and source-backed, with 14 A rows and 4 B leaves. It
needs these exact repairs:

1. `thm-young-seminormal-form-from-jucys-murphy-eigenlines` says “the exact S2
   ... coefficients” without putting the coefficients in the claim. State the
   actual basis convention and matrix/formula; otherwise the claim is not
   exact and a future author cannot know which of the sign/orientation variants
   it must prove.
2. `thm-young-orthogonal-form-from-seminormal-rescaling` says “over `R`,” which
   reads as an arbitrary ring in this track. The source result uses the real
   numbers/positive square-root normalization (or a characteristic-zero field
   after adjoining square roots with no positivity). Write `\mathbb R`
   explicitly and give the matrix signs under the selected tableau order.
3. The claimed proof of
   `thm-relative-centralizer-is-generated-by-the-previous-center-and-last-jucys-murphy-element`
   compares dimensions using multiplicity-free restriction. Add the inherited
   `cor-complex-specht-restriction-branching-rule` dependency if that is the
   final proof route.
4. The reverse inclusion in “symmetric polynomials in JM give the whole center”
   needs the lemma that distinct partition shapes have distinct multisets of
   contents, plus finite spectral interpolation. Make that intermediate joint
   explicit; centrality alone proves only one inclusion.
5. In the modular-collision counterexample say that *branchwise addable-node
   eigenvalues/residues* collide after reduction. Bare contents can repeat in
   different places even in characteristic zero; the failed denominator is a
   specific same-stage Lagrange denominator.

### Review of concurrent SYMR-9 inventory

The Hecke/cellular page has a coherent chain and stays below the item cap, but
several rows are still instructions to a future author rather than exact
claims.

1. `thm-separated-hecke-residues-give-seminormal-idempotents-and-bases`
   promises “explicit `T_i` blocks” without stating them. Give the actual
   one- and two-dimensional formulas in the chosen right-module,
   `(T_i-q)(T_i+1)=0`, Murphy-basis convention. A locator to Mathas Theorem
   3.34 is not a substitute for the formula the item must prove.
2. `thm-q-schaper-virtual-radical-layer-formula` similarly refers to “the
   stated signed/valued rim-hook virtual-character combination” without
   stating the sum, its indexing set, signs, or valuations. Either reproduce
   the exact Corollary 5.32 identity with all lift hypotheses, or demote this
   to an explicitly recorded result that is not load-bearing. Its current
   wording cannot drive a proof-complete content page.
3. The Jantzen definition should use the source's exact PID data: a prime
   element/prime ideal, the divisibility valuation `nu_p`, free lattice,
   fraction field, and residue field. Localizing to a DVR is another valid
   formulation but must be stated, not hidden behind the broad inherited
   `def-valuation-ring` dependency.
4. `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`
   must identify which Murphy cell module specializes to which ordinary
   Specht or dual/conjugate Specht. “Compare ... by the explicit duality” is
   still a proof instruction, and the report itself warns that Mathas's
   `S^lambda` is dual to the Dipper--James module labelled by `lambda'`.
5. `cex-cellularity-does-not-make-every-cell-module-simple` is not an exact
   counterexample yet: it supplies no rank, parameter, partition, Gram matrix,
   or radical. Select and state one small specialization explicitly.
6. The `(3,2)` q-Schaper example needs a convention check before its displayed
   decomposition entry is fixed in the final scaffold: Mathas's source uses
   dual-Specht/e-restricted labels, while the inventory declares the
   Dipper--James/e-regular convention. Translate both partitions and the
   order direction, rather than copying the source labels verbatim.
7. The general cellular-algebra theorem is correctly restricted to a
   finite-dimensional algebra over a field. The source asserts the nonzero
   cell heads are absolutely irreducible; this should retain the cell datum's
   coefficient-field hypothesis and not be generalized to arbitrary base
   rings when reused.

Mechanical dependency checking confirms that the previously suspected local
infrastructure IDs do exist: `def-algebra-over-a-commutative-ring`,
`def-left-and-right-modules`, `thm-jordan-holder-theorem-for-modules`,
`def-valuation-ring`, and `thm-smith-normal-form-existence-over-a-pid`. The
remaining apparently unresolved dependencies in SYMR-1--5/9 are planned RG,
RL, or RG-13 suppliers, not misspellings that can be judged against published
`items/` alone. They still need exact supplier-page declarations in the final
machine inventory.

### Review of incoming agent-5 modular portfolio

The report is unusually careful about p-regular versus p-restricted labels,
ordinary versus modular branching, and the status of Nakayama's theorem. Its
six counted full documents are present and complete by the reported hashes;
James duplicates the agent-1 textbook, so it is a cross-check rather than an
additional independent treatment, but the portfolio still contains five
distinct article/notes sources.

Repairs and integration constraints:

1. O'Donovan is a proof-bearing source for Nakayama, but the proof is not local
   to an abacus page. It imports Brauer quotients/correspondence, Young modules,
   vertices, projective modules and the Mullineux map. Until those exact
   suppliers exist, the block classification must be an explicitly recorded,
   non-load-bearing theorem. Craven and James only state it in the inspected
   ranges and do not close this gap.
2. The asserted defect-group formula and “abelian iff `w<p`” boundary is drawn
   only from the report's deliberately non-counted dissertation cross-check.
   Do not turn it into a proof-complete inventory item without an eligible
   proof-bearing source; omit it or mark it as a recorded endpoint with that
   evidence status explicit.
3. The good-node signature convention in Kleshchev is verified: nodes are
   ordered top-to-bottom, adjacent/effectively exposed `-+` pairs are cancelled,
   the leftmost remaining `-` is good, and the rightmost remaining `+` is
   cogood. Preserve that whole package. Importing the theorem into the chosen
   p-regular James convention also conjugates diagrams, reverses the geometric
   order, negates residues under sign twist, and changes Specht conventions;
   “transpose and sign-twist” alone is not enough for an exact combinatorial
   row. Either keep the branching page entirely p-restricted or spell out the
   translated signature.
4. Kleshchev Theorems 11.6--11.7 give composition multiplicities in `E_iD` and
   `F_iD`, not semisimple decompositions. Theorem 7.4 supplies simple
   head/socle with grading shifts in cyclotomic-Hecke notation. These should be
   separate inventory items with separate hypotheses and provenance.
5. The crystal identification is credited/stated by the survey rather than
   proved there. It should be recorded-result provenance unless the KLR/Fock
   portfolio supplies the proof chain. The elementary signature definition
   and modular branching theorem may precede the crystal statement without a
   reverse Fock dependency, avoiding a cycle.
6. The report correctly says same p-core at fixed `n` already implies the same
   weight. Keep weight as a derived integer, not a second block-classification
   hypothesis. Also keep block weight distinct from the numerical defect
   `v_p((pw)!)`.
7. General defining-characteristic decomposition numbers remain outside the
   track's proof claims. Characteristic-zero root-of-unity canonical-basis
   formulas and positive-characteristic adjustment matrices must not be
   collapsed into one theorem.

### Independent recovery and review of the Ariki/Grojnowski proof boundary

The agent-6 retrieval failure is no longer a document-access blocker. The
complete 20-page original article is readable from the full-PDF mirror
`https://scispace.com/pdf/on-the-decomposition-numbers-of-the-hecke-algebra-of-g-m-1-n-440do7n73s.pdf`
under DOI `10.1215/KJM/1250518452`: Susumu Ariki, *On the decomposition
numbers of the Hecke algebra of G(m,1,n)*, J. Math. Kyoto Univ. 36 (1996),
789--808. Its opening roadmap, §§2--4, Theorem 4.4 and terminal references are
present. This legitimate complete article can replace the malformed 1,163-byte
response in the evidence ledger, subject to local checksum/cache validation by
the canonical writer.

It does **not** turn the current one-row Ariki theorem into a locally closed
proof. Ariki's §3 explicitly imports the Kazhdan--Lusztig induction theorem,
the Chriss--Ginzburg equivariant K-theory/homology comparison and IC character
formula, and geometric facts about Springer fibres/Steinberg varieties. Section
4 imports Lusztig's quiver/perverse-sheaf construction of `U_v^-` and its
canonical basis, BBD intersection-cohomology invariance, Kashiwara's lower
crystal/global basis, and the Grojnowski--Lusztig equality of the two bases.
Ariki supplies the induction transplant and the final Grothendieck/highest-
weight/canonical-to-simple argument once those joints are available.

Ian Grojnowski, *Affine sl_p controls the representation theory of the
symmetric group and related Hecke algebras*, arXiv:math/9907129, is a complete
45-page source and genuinely gives an elementary, self-contained route through
affine/cyclotomic Hecke functors, multiplicity-one restriction/induction,
crystal structure, integral Grothendieck actions and the p-canonical basis
properties (i)--(iii). But §14.1 explicitly says property (iv), equality of the
0-canonical basis with the Lusztig--Kashiwara canonical/global basis, is
immediate from the Kazhdan--Lusztig geometric affine-Hecke description and
Lusztig's perverse-sheaf definition and is only tersely explained in an earlier
paper. It is therefore an excellent proof source for modular branching and the
ungraded highest-weight categorification, not a geometry-free proof of the
canonical-basis/decomposition-number equality.

Consequently the hard gate has two honest options: scaffold the exact geometric
supplier chain (including its sheaf/cohomology prerequisites), or identify a
different complete proof source whose imported results already have exact
owners. Merely changing the provenance flag on the existing Ariki row is not
acceptable.
