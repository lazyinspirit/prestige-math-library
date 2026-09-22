# Final adjudication: structure of a compact connected abelian Lie group

Run: phase-2-remaining-27. Group a, round 3, queue position 1.
Disposition: repaired. Source status: verified.

## Exact carrier and review history

Item: `thm-structure-of-a-compact-connected-abelian-lie-group` (draft run scope,
Batch 12). Entry raw-file SHA-256:
`34ac619e670dfee3f3256cfdcc0d821d6eb7b3413c2ff81081859add6da6cd73`.
Final raw-file SHA-256:
`cf0a3e726c8bf65751e9b603e2146a7efaf65a030e6db3d9dbc8b69a849d2cdf`.
These are whole-file digests, not substitutes for the recorder's own hash rules.

Read CLAUDE.md, README.md, SCHEMA.md, the Step-7 clauses of WORKFLOW.md,
the exact queue, current item, complete A/B page context, owning manifest and
coverage clauses, item proof contract (citations, derivations, boundaries and
risk review), and relevant reader/refuter records. The rendered Step-7 group-a
bundle has no item blocks; the live artifacts supply the evidence instead.
The risk record is in the Batch-12 contract; the Batch-12 refuter recorded no
finding against this item. The two Step-6 cross-group warnings identify the
same unsupported smooth-structure attribution in L3.

The actual judge ledger `research/phase-2-remaining-27-judge.jsonl` contains:

- Terra rejection, context `b61e03a9863596bf1f252ccfb3284d90b3edcb6274288b65eff56ca010cb2b0a`,
  for falsely attributing AC use to compact images and the finite lattice-basis
  selection. Alpha's adjudication at lines 1045ff of
  `research/phase-2-remaining-27-alpha-step7-a.md` removed AC entirely.
- Terra rejudge acceptance, context
  `7db15c769728971c3ac6606cd62be7e0842e29819ab9e2f8730036341c989b08`,
  item digest `d4644d332d94b7bf1b5c585b34be2ccc9b0de45ddf6b0af6fce12d09409e777a`.
  There is no second rejection in that ledger: this queue covers the later
  licensed correction, not an invented Terra rejection.
- The item-specific row in
  `research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl`
  documents the later owner repair: restore AC to supply the exponential
  dependencies' countable choice, remove the unused covering supplier,
  prove projection discreteness, and avoid assuming the torus classification
  from the definition. I reviewed that correction independently.

## Mathematical adjudication

Retain the precise theorem: under AC, a compact connected abelian finite-
dimensional real Lie group T has surjective exponential, discrete full kernel
lattice Lambda, and Lie-group isomorphisms T = t/Lambda = (R/Z)^r, r = dim t.
The page defines a torus as compact connected abelian, so its classification
is not used as an input. S^1 means R/Z with its quotient smooth structure;
its r-fold power carries the product smooth structure, including the empty
product when r=0.

I checked the current dependency interfaces:
`def-torus-and-maximal-torus-in-a-compact-lie-group` (terminology only),
`def-exponential-map-of-a-lie-group`,
`prop-commuting-lie-algebra-elements-have-multiplicative-exponentials`,
`cor-the-exponential-map-is-a-local-diffeomorphism-at-zero`,
`def-axiom-of-choice`,
`lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`,
`def-the-one-dimensional-torus-and-normalized-haar-integral`, and
`thm-compactness-under-continuous-maps`.
The exponential suppliers explicitly assume countable choice. The AC lemma
proves that implication; the compact-image supplier is choice-free. Thus
Alpha's original deletion of all choice assumptions did not preserve these
interfaces, while the later owner repair does.

There remains a genuine citation overclaim: L3 attributes a Lie-group
structure to the circle supplier, which establishes a quotient topological
space, a circle homeomorphism and measure-theoretic facts. This is a defect of
the consumer's attribution, not a defect of the supplier. I narrowed L3 to
its actual topological content and supplied the missing smooth argument
inside the owned theorem. No supplier edit or new lemma item is needed.

The independently checked argument is:

1. The abelian Lie algebra makes the exponential multiplicative. Its locally
   diffeomorphic identity neighbourhood makes its image an open subgroup;
   all cosets are open, so connectedness forces surjectivity. The kernel is
   isolated at zero, hence discrete by translation, and closed by continuity
   into a Hausdorff group.
2. For a closed discrete additive subgroup D of E, choose a small ball B
   with (B-B) intersect D equal to zero. The quotient projection is open
   because saturations are unions of translates. Inverses of its restrictions
   to translates of B give charts whose transition functions are locally
   translations by fixed elements of D. Closedness separates distinct cosets;
   images of a Euclidean countable base establish second countability.
   Addition and negation are locally affine in these charts. This proves the
   required quotient Lie-group structure, rather than presupposing it.
   Exponential induces a bijective local diffeomorphism in these charts,
   and therefore a Lie-group isomorphism.
3. In the lattice induction, closed discreteness gives finitely many points
   in each compact ball and hence a shortest nonzero vector X1. Subtracting
   nearest integer multiples proves Lambda intersect RX1 = ZX1. Reduced
   representatives of bounded orthogonal projections lie in a compact
   cylinder. Its finite intersection with Lambda gives a positive isolation
   radius for the projected subgroup. I made explicit the omitted case that
   there are no nonzero projected points in the unit ball. A uniformly
   separated subgroup is closed as well as discrete, so induction applies.
   Lifts of a projected basis together with X1 generate and are real-linearly
   independent. The zero span uses the empty basis. The argument does not
   assume its own lattice conclusion: I removed the L4 justification tag
   from the row proving that assertion and corrected its fact locator.
4. If the span V were proper, X+Lambda maps continuously onto X+V in the
   positive-dimensional real space t/V. Compactness of t/Lambda contradicts
   noncompactness of that image. This proves full rank. I replaced the
   unnecessary named topological isomorphism theorem with this direct map.
5. A lattice basis induces a linear isomorphism in quotient charts. Intervals
   of length less than one give charts on R/Z; their products make the
   coordinatewise bijection R^n/Z^n -> (R/Z)^n locally the identity, with
   smooth inverse. The case n=0 is explicitly the trivial group. The unused
   integer-power clause of L1 was removed; the required multiplicativity
   statement remains unchanged.

All these constructions use only the queued theorem's existing setting.
There is no enlarged conclusion, new theorem, page, pair or dependency item.
No potentially defective published supplier was found in this inspection;
no published-defect entry is appropriate.

## Source verification

Exact authoritative URL:
https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf

Read the complete relevant section 6.1, printed/PDF pages 30–31: Lemma 6.11
and its proof establish surjective exponential with discrete kernel for a
connected commutative Lie group; Fact 6.12 states the discrete-subgroup basis
result; the following paragraph explains the local-diffeomorphism quotient
identification; Theorem 6.13 states the product of circles and Euclidean
factors classification and its compact specialization. Fact 6.12 is stated
with a reference, not proved there; the lattice induction above and in the
item is an independent complete proof, not a claim to have read a proof in
those notes.

Retrieval: the web reader timed out. A direct HTTPS curl retrieval succeeded
and the complete two relevant PDF pages were extracted using PyMuPDF.
No search snippet was used as evidence. The separately listed Knapp reference
was not independently retrieved in this pass; no assertion of source reading
is made for it. The elementary quotient-atlas and lattice details were checked
directly as explained above, with no unresolved mathematical uncertainty.

## Metadata, checks and terminal action

Updated only the owned item, its Batch-12 manifest entry and corresponding
Batch-12/aggregate proof-contract entries, and the existing owning consumer
row in `research/phase-2-remaining-27-batch-12.cross-batch-dependencies.json`.
That row now distinguishes the circle supplier's topology from the consumer's
internal smooth construction and records the AC interface. Ran the prescribed
`node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`;
it succeeded. This generated the unified dependency record through the tool.
Declared dependencies and Step-7 scope are unchanged; no new-item certification
or self-review stamp was created. Existing independent review history is retained.

Final focused checks:

- Item precheck: pass, 1 checked, 0 failing.
- Item rendercheck: pass, including real KaTeX and YAML parsing.
- Strict proof-contract check, selected item in Batch-12 contract: 0 errors,
  0 warnings; same result in the aggregate contract. The two item entries
  are identical.
- Repository depcheck: one unrelated unresolved-link error in
  `items/def-corson-ordered-rational-permutation-model.md`, for
  `[[def-metric-space, def-axiom-of-choice]]`, plus existing repository warnings.
  This is outside the licensed scope and was not repaired. No dependency
  declaration changed in this task. This is not reported as a global pass.

The initial focused contract check caught the prose reference [L4] in its own
proof as a cited input. Removing that ambiguous label and synchronizing the
contract resolved it; all final focused checks above were rerun successfully.

Unresolved mathematical obligations for this item: none. Next action: run
queue-status and record disposition repaired with this basis, then confirm the
receipt is current. No further judge or review wave is authorized or required.
