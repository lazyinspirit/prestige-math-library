# Researcher 02 — Rolfsen failure; Hatcher textbook substitution; Birman--Brendle supplement

## Assignment outcome

The assigned target was Dale Rolfsen, *Knots and Links*, preferably a
legitimate complete author-hosted copy at UBC.  I did **not** use the
freely indexed scans of that book: they are not a UBC/author/publisher-hosted
full text and a search result is not permission or evidence of a complete
edition.

### Rolfsen retrieval attempt and why it failed

- Rolfsen identity independently verified: Dale Rolfsen, *Knots and Links*,
  Publish or Perish (1976), corrected second printing (1990), and AMS Chelsea
  edition (2003), xiv + 439 pp.  The public UBC record is his CV:
  <https://personal.math.ubc.ca/~rolfsen/cv.pdf>.  The current AMS catalogue is
  <https://bookstore.ams.org/chel-346-h>.
- On 2026-09-07, the author-home candidates
  `https://personal.math.ubc.ca/~rolfsen/`,
  `https://personal.math.ubc.ca/~rolfsen/Knots_and_Links.pdf`, and their
  `www.math.ubc.ca` aliases were fetch-verified.  The aliases redirect to the
  `personal` host; each requested body returned HTTP 404, not a PDF.
- The official JSTOR record for Birman's related book confirms scope but did
  not yield a readable complete body in this environment; previews and
  third-party mirrors were deliberately excluded.  In particular, a
  four-page institutional PDF headed *A Study of Braids* was only that book's
  title/contents pages, not its 272-page body, and is not counted as a source.

The substitute that satisfies this assignment's **complete textbook** requirement
is Allen Hatcher's *Algebraic Topology*, below.  It supplies the topology needed
by BG-2/BG-3/BG-5: covering spaces, path/homotopy lifting, regular covers, fibre
bundles, Serre fibrations, and their long exact homotopy sequences.  The
breadth-heavy textbook does not try to prove Alexander's or Markov's theorem.
Consequently Birman--Brendle is retained only as a complete, author-hosted,
braid-specific **supplementary survey**, never relabelled as the textbook
substitution.

## Formal textbook substitution: Hatcher, *Algebraic Topology*

- **Author/title/version:** Allen Hatcher, *Algebraic Topology*, complete online
  textbook.  Its preface says the book remains available online after print
  publication and its embedded note records the 2015 corrected reprinting.
- **Authoritative URL actually fetched:**
  <https://pi.math.cornell.edu/~hatcher/AT/AT.pdf>.  This is Hatcher's Cornell
  mathematics faculty site, and the book itself names the Hatcher Cornell web
  address on internal p. xi.  It is not a preview, repository scan, or mirror.
- **Ignored local cache:**
  `scratchpad/source-cache/braid-groups/hatcher-algebraic-topology.pdf`; full
  text extraction:
  `scratchpad/source-cache/braid-groups/hatcher-algebraic-topology.txt`; per-PDF
  page text is in `scratchpad/source-cache/braid-groups/hatcher-pages/`.
- **Retrieval/full-body verification:** HTTP 200; `file` identifies PDF 1.5;
  `mutool info` reports `Pages: 560`; SHA-256 is
  `bebb3032bf9021b956da3bd070eb6c67dc662cf849be9cdf6679f677560e5618`.
  The complete extraction has 50,647 words / 282,594 lines and ends with the
  book's index on printed p. 551.  The table of contents spans Chapters 0--4,
  Appendix, bibliography, and index (internal PDF pp. ix--xii).  This is a
  full 560-page textbook body.

### Textbook retrieval is not reading

The whole 560-page Hatcher book was retrieved and full-body-validated.  The
following, and only the following, portions were actually read for braid-track
planning (all page numbers are Hatcher's printed pages; parenthetical PDF pages
allow direct cache checks):

| Actually read | Planning use |
|---|---|
| preface pp. ix--xi (PDF pp. 6--8) and contents pp. iii--v (PDF pp. 3--5) | identity, textbook status, version context, and section map |
| §1.3 **Covering Spaces**, pp. 56--82 (PDF pp. 65--91), including Propositions 1.30--1.34, 1.36--1.40 and Theorem 1.38 | covering definitions; homotopy/path/unique lifting; subgroup/cover classification; monodromy; regular covers/deck groups |
| §2.2 **Cellular Homology**, pp. 137--148 (PDF pp. 146--157), especially Lemma 2.34 and Theorem 2.35 | honest cellular-chain proof route for a finite punctured-disk spine and its first homology; this is support only, not an equivariant-cover homology derivation |
| §4.2 **Fiber Bundles**, pp. 375--380 (PDF pp. 384--389), Theorem 4.41, Proposition 4.48, Example 4.49 | a bundle is a Serre fibration; long exact homotopy sequence; discrete-fibre special case |
| §4.3 **Fibrations**, pp. 405--409 (PDF pp. 414--418), Propositions 4.61--4.66 | fibre transport, pullbacks, pathspace fibration replacement, and actual versus homotopy fibres |

I did **not** claim to have read Hatcher's remaining chapters or his additional
topics merely because the full book was cached.  Hatcher also does not contain a
classical planar configuration-space/Fadell--Neuwirth proof or the braid closure
theorems; those require the focused sources named below.

### Textbook harvest: BG-2/BG-3/BG-5 proof infrastructure

| Exact Hatcher locator | Statement/hypotheses actually usable | Scaffold route and disposition |
|---|---|---|
| §1.3 pp. 56--62, Props. 1.30--1.34 | A covering is locally a disjoint union of sheets.  Homotopies and paths lift uniquely after a starting lift; `p_*` is injective; the image comprises loops with closed lifts; and, for path- and locally path-connected source, a based lift exists exactly under subgroup containment. | **Included for BG-2/BG-3:** `lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations`, `thm-ordered-configurations-cover-unordered-configurations-regularly`, `def-endpoint-monodromy-of-a-configuration-loop`, `thm-configuration-braid-pure-braid-short-exact-sequence`, and trace/path-homotopy lemmas.  First prove the `S_n` quotient is a cover by disjoint coordinate disks; only then invoke these lifting theorems. |
| §1.3 pp. 63--73, Props. 1.36--1.40 and Theorem 1.38 | If `X` is path-connected, locally path-connected, and semilocally simply-connected, based connected covers correspond to subgroups of `π_1(X)`; unbased covers correspond to conjugacy classes.  A connected cover is normal exactly when its subgroup is normal, and its deck group is `N(H)/H` (or `π_1(X)/H` in the normal case). | **Included:** use the theorem only after recording its three hypotheses for planar configuration spaces.  It justifies interpreting the ordered-to-unordered cover's deck group as `S_n` and its kernel as pure braids. **Inline:** basepoint changes conjugate subgroups, so the ordered base configuration cannot be suppressed in an exact-sequence proof. |
| §4.2 pp. 375--380, Theorem 4.41 and Prop. 4.48 | A map with disk HLP is a Serre fibration and has the displayed long exact homotopy sequence; every fibre bundle has disk/CW-pair HLP.  For connected total/base spaces and discrete fibre, Example 4.49 recovers `π_n(E)≅π_n(B)` for `n≥2` and the low-degree exact sequence. | **Included for BG-5:** `thm-fadell-neuwirth-forgetful-fibration` must first establish a *locally trivial bundle* for the forgetful map.  Then Hatcher supplies the LES, never the Fadell--Neuwirth local-triviality proof itself.  The pure-braid forgetting short exact sequence additionally needs the punctured-disk fibre's `π_1` and the section. |
| §4.3 pp. 405--409, Props. 4.61--4.66 | A fibration transports fibres along paths up to homotopy; pullbacks along homotopic maps are fibre-homotopy equivalent; the pathspace construction replaces any map by a fibration; actual fibres and homotopy fibres agree for a fibration. | **Included as proof guardrail:** the Fadell--Neuwirth fibre is only well-defined up to the specified fibre/bundle model.  Do not assert a long exact sequence for an arbitrary forgetful map before proving it is a fibration. **Deferred:** the specialized configuration-space bundle construction to Fadell--Neuwirth/other braid source. |
| §2.2 pp. 137--148, Lemma 2.34 and Theorem 2.35 | The cellular chain groups of a CW complex are free on cells, and their homology computes singular homology. | **Inline support for BG-8, not a substitute for a covering-module proof:** collapse a finitely punctured disk to a one-vertex, `n`-loop CW spine, then compute ordinary `H_1` and use it as the finite cellular model that must be lifted separately to the cyclic cover. **Deferred:** `Z[t^{±1}]`-module freeness and the deck-equivariant chain calculation; Hatcher as read does not supply that calculation. |

### Textbook-specific convention/hypothesis hazards

1. Hatcher's cover-classification theorem needs **path-connected, locally
   path-connected, semilocally simply-connected** base (Theorem 1.38).  These
   hold for the finite-configuration manifolds used here, but the scaffold must
   say why or cite its manifold/local-coordinate prerequisites; it must not apply
   the theorem to an arbitrary quotient space by slogan.
2. A free finite action does not on its own establish every local statement that
   the configuration quotient needs.  For `F_n(D^2)→C_n(D^2)`, give the
   disjoint-neighborhood construction so the `n!` sheets and the `S_n` deck
   action are explicit before applying Hatcher's cover machinery.
3. A fibre bundle is a fibration (Prop. 4.48), but Hatcher does **not** prove the
   planar Fadell--Neuwirth forgetful map is a fibre bundle.  The actual local
   trivialization is an independent substantive intermediate, and the LES is
   only available after it.
4. The LES of Theorem 4.41 is based and has the ordinary low-dimensional
   nonabelian/set-level qualifications.  Use it carefully to derive
   `1→F_{n-1}→PB_n→PB_{n-1}→1`; require connectedness and the section for the
   particular short-exact and semidirect-product conclusions.
5. The cellular-homology pages are not evidence that ordinary `H_1` is already
   the reduced Burau module.  The latter is homology of an infinite cyclic cover
   with its deck action, so the module calculation remains assigned to a
   braid-specific cover source.

## Supplementary braid-specific source: complete author-hosted scholarly treatment

- **Authors/title/version:** Joan S. Birman and Tara E. Brendle, *Braids: A
  Survey*, author manuscript dated 2 December 2004; subsequently Chapter 2,
  *Handbook of Knot Theory*, Menasco--Thistlethwaite (eds.), Elsevier, 2005,
  pp. 19--103.  The first page names both authors and their then institutional
  addresses; the abstract says the intended level is accessible to graduate
  students.
- **Authoritative URL actually fetched:**
  <https://www.math.columbia.edu/~jb/Handbook-21.pdf>.  This is Joan Birman's
  Columbia faculty page, not a preview or mirror.  Brendle's publication page
  separately identifies the same work and its Handbook publication:
  <https://www.maths.gla.ac.uk/~tbrendle/papers.html>.
- **Ignored local cache:**
  `scratchpad/source-cache/braid-groups/birman-brendle-braids-a-survey-author-copy.pdf`;
  full-text extraction:
  `scratchpad/source-cache/braid-groups/birman-brendle-braids-a-survey-author-copy.txt`;
  per-PDF-page extractions are in
  `scratchpad/source-cache/braid-groups/birman-brendle-pages/`.
- **Retrieval/full-body verification:** HTTP 200, `application/pdf`,
  `Content-Length: 809077`; `file` identifies PDF 1.2 with 91 pages and
  `mutool info` reports `Pages: 91`.  SHA-256:
  `22f52d9961a3f0fcdfb94760122d40b41fe8998bfb3ab5c81b0b7860c795c8a2`.
  Full extraction has 5,730 words / 45,028 lines and ends with bibliography
  entries [129]--[137] on PDF p. 91, following the Chapter-6 material and
  complete bibliography.  Thus this is a complete 91-page author manuscript,
  not an excerpt.

### Supplement retrieval is not reading

The **whole 91-page author manuscript** was retrieved and body-validated.  I
actually read only the following target-relevant material (page numbers below
are the manuscript's printed/PDF page numbers, so they remain locatable in the
cached author copy):

| Actually read | What it supplies |
|---|---|
| title, abstract, contents, PDF pp. 1--2 | identity, date, scope, and exact section map |
| §1 introduction and §§1.1--1.3, pp. 3--7 | geometric/configuration/mapping-class conventions; exact sequence (1); Theorem 1 and proof |
| §2 opening and §2.1, pp. 12--13 | axis-based definition of a closed braid and closure convention |
| §2.2, pp. 13--17 | Theorem 2 (Alexander), Yamada--Vogel algorithm, Lemmas 2.1--2.2, Corollaries 2.1--2.2 |
| §2.3, pp. 17--26 | Theorems 3--4 (Reidemeister/Markov), Markov moves, and the complete stated proof route via Lemmas 2.3--2.8 |
| §4.2, pp. 46--47 | unreduced/reduced Burau definitions, faithfulness status as of 2004, equation (15) relating reduced Burau and Alexander polynomial |
| §4.4, p. 52 | total-winding cyclic cover and the topological construction of reduced Burau |
| bibliography pp. 89--91, especially [123], [129], [135], [136] | Rolfsen, Traczyk, Vogel, and Yamada provenance used in the proof routes |

I did **not** claim to have read §§1.4, 3, 4.1/4.3/4.5--4.7, 5, or 6 merely
because they were retrieved.  In particular, the survey's brief §4.2 formula
is useful evidence for the proposed Burau/Alexander item but is not a complete
derivation of that identification.

## Non-negotiable conventions and hazards

1. **Choose one picture orientation and multiplication order.**  The source
   illustrates braids left-to-right with strands bottom-to-top, but also permits
   the usual vertical top-to-bottom picture (p. 3).  It calls multiplication
   juxtaposition/concatenation.  The scaffold must state whether `XY` means
   “do X then Y” in the selected picture, and use that choice in every Artin,
   Markov, and matrix formula.  Simultaneously inverting every generator
   changes the crossing convention, but does not excuse a mixed convention.
2. **Geometric braid isotopy is not arbitrary link isotopy.**  The ambient
   slice is `R^2 × I`; strands do not pass through each other or self-intersect
   (p. 3).  The source permits non-level-preserving braid isotopy in that
   cylinder, but it does *not* permit a strand to loop over initial points.
   Arbitrary ambient isotopy becomes relevant only after closing the braid.
3. **Ordered versus unordered configurations controls purity.**  On pp. 3--4,
   `C^0_{\hat n}` is ordered, `C^0_n=C^0_{\hat n}/Σ_n` is unordered,
   `P_n=π_1(C^0_{\hat n},p)`, and `B_n=π_1(C^0_n,τp)`.  The quotient is a
   regular `n!`-sheeted cover and yields `1→P_n→B_n→Σ_n→1`.  Do not call a
   setwise-endpoint braid pure.
4. **The disk model fixes the boundary pointwise.**  On pp. 5--7, the authors
   use `S_{0,1,n}` with punctures permuted for the full group and
   `S_{0,1,\hat n}` with them fixed pointwise for the pure group; isotopy is
   relative to `∂S`.  A punctured disk with free boundary, a plane with removed
   points, and a disk with marked rather than deleted points must not be
   swapped without a proved bridge.
5. **Closure needs an oriented, unknotted axis.**  Source §2.1 (pp. 12--13)
   closes in the complement of a braid axis `A`; in `S^3` the point at infinity
   is added to the axis.  The closed braid condition is `ρ(t)>0` and
   `dθ/dt>0` in cylindrical coordinates around `A`.  It is an *oriented* link
   statement, not a statement about unoriented link types.
6. **“Braid isotopy” and “conjugation” are different formulations.**  Theorem
   4 uses braid isotopy plus stabilization/destabilization.  The text (p. 18)
   cites Morton for the result that braid-isotopic closed braids are conjugate
   in `B_n`.  The planned algebraic Markov theorem, written with conjugation,
   needs that bridge explicitly; it cannot silently replace source terminology.
7. **Both signs of stabilization matter.**  Algebraically the move is
   `β∈B_n ↦ βσ_n^{±1}∈B_{n+1}`, subject to the fixed inclusion and side
   convention.  Positive and negative moves preserve ordinary oriented closure
   isotopy.  Confusing this with the transverse Markov theorem is a serious
   error: transverse equivalence allows only the appropriate sign.
8. **Burau's ring, basis, and normalization cannot be implicit.**  The source
   uses `Λ=Z[t,t^{-1}]`, a total-winding cover of the punctured disk, a deck
   generator `t`, and a lift fixed over a specified boundary basepoint (p. 52).
   Matrix conventions transpose/invert in the literature.  Equation (15) on
   p. 47 uses `det(\barρ(X)-I)/(1+t+⋯+t^{n-1})`; `det(I-\barρ)` differs by a
   sign, and Alexander polynomials are normally only determined up to a unit
   `±t^k` until a normalization is declared.
9. **Do not give current faithfulness status from this 2004 manuscript.**  It
   records faithful for `n≤3`, nonfaithful for `n≥5`, and leaves `B_4` open
   (pp. 46--47, 52).  It supports the construction and historical result, not
   a 2026 current-status claim.

## Harvest: exact locators, proof routes, and disposition

The names in the disposition column are existing proposals in
`research/plan-braid-groups-track.md`, not newly authored library claims.
I checked the relevant current IDs and did not propose duplicates of the
published `def-braid-group-by-the-artin-presentation`,
`thm-the-braid-group-surjects-onto-the-symmetric-group`, or
`thm-the-two-strand-braid-group-is-infinite-cyclic`.

| Exact source support | Precise statement and hypotheses | Rigorous scaffold route / intermediate results | Disposition |
|---|---|---|---|
| §1.1, pp. 3--4, equation (1) | For a fixed distinct base configuration in `C`, `P_n=π_1(C^0_{\hat n},p)` and `B_n=π_1(C^0_n,τp)`.  The free `Σ_n` quotient is a regular `n!`-sheeted covering and gives `1→P_n→B_n→Σ_n→1`. | Define ordered then unordered configurations, prove local evenly-covered neighborhoods from pairwise disjoint disks, define monodromy by lifting, and prove exactness.  The geometric trace of simultaneous coordinate paths supplies the braid picture. | **Included:** `def-ordered-configuration-space`, `def-unordered-configuration-space`, `def-pure-braid-group-from-ordered-configurations`, `def-braid-group-from-unordered-configurations`, `thm-ordered-configurations-cover-unordered-configurations-regularly`, `thm-configuration-braid-pure-braid-short-exact-sequence`, and BG-3 trace/slice lemmas. |
| §1 introduction p. 3; §1.1 p. 4 | A geometric braid lives in `R^2×I`; no strand self-intersections/collisions are allowed.  The graphs of collision-free coordinate paths give pure geometric braids, modulo simultaneous path homotopy rel endpoints. | Keep a separately stated geometric definition and prove trace/slice inverses.  Do not make it merely an illustration of the configuration definition: the later closure definition needs the embedded strand model. | **Included:** `def-geometric-braid-with-setwise-endpoints`, `def-braid-isotopy-relative-top-and-bottom`, `prop-stacking-of-geometric-braids-is-well-defined`, `thm-geometric-braids-form-a-group`, and BG-3 conversion lemmas. |
| §1.2, pp. 4--5, equation (2) | `B_n` has Artin generators `σ_1,…,σ_{n-1}` with far-commutation and adjacent braid relations; `P_n` has the stated iterated free-group extension (5). | The source records rather than proves completeness of (2).  Use the separate González-Meneses/Artin source for the full presentation proof; here use the relation only to match notation and matrices. | **Inline:** the author-source Artin notation for closures and Burau. **Deferred to existing/published ownership:** presentation completeness and the full pure presentation. |
| §1.3, pp. 5--7, Theorem 1 and equations (6) | For the disk with one boundary component fixed pointwise, `B_n≅M_{0,1,n}` and `P_n≅M_{0,1,\hat n}`.  Full classes may permute punctures; pure ones fix each. | Evaluation `E:Diff^+(D^2)→C^0_{\hat n}`, `h↦(h(p_i))`, has fibre the pointwise-puncture stabilizer.  The fibration's long exact sequence, contractibility/connectedness inputs for `Diff^+(D^2)`, yields the pure isomorphism; compare the `Σ_n` short exact sequences and apply the five lemma for the full group.  Existence of the evaluation fibration and disk-diffeomorphism facts must be declared prerequisites/proved sources, not handwaved. | **Included:** `def-boundary-fixed-mapping-class-group-of-a-punctured-disk`, `lem-a-braid-motion-extends-to-a-boundary-fixed-ambient-isotopy`, `def-endpoint-mapping-class-of-a-braid-motion`, independence lemmas, `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`, and `cor-pure-braids-are-pure-punctured-disk-mapping-classes`. |
| §2.1, pp. 12--13 | Closing a braid joins its endpoints round an unknotted axis.  Equivalently, a link `K⊂S^3` is a closed braid about `A` when its angular coordinate is strictly increasing. | Make the solid-torus `S^3\setminus A` picture and endpoint closure explicit.  Check that a geometric braid's orientation gives the oriented closure.  Define braid index only after closure exists. | **Included:** `def-closure-of-a-geometric-braid`, `def-braid-index-of-an-oriented-link`; **inline:** solid-torus versus `S^3`/axis convention. |
| §2.2, pp. 13--17, Theorem 2; Lemmas 2.1--2.2; Corollaries 2.1--2.2 | **Alexander:** every oriented knot or link in `S^3` is a closed braid.  Given an oriented diagram `D`, its height `h(D)` counts pairs of incoherently oriented Seifert circles.  A height-zero diagram is closed-braid form. | The necessary chain is: define Seifert smoothing/picture and coherent versus incoherent circles; **Lemma 2.2:** if `h(D)>0`, a defect region and reducing arc exist; perform the Yamada--Vogel reducing move; **Lemma 2.1:** it lowers `h` exactly by one; nonnegative integer termination gives height zero.  The minimum-Seifert-circle/braid-index corollary is a separate conclusion, not needed to prove existence. | **Included:** `lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity` and `thm-alexanders-closed-braid-theorem`. **Required repair before authoring:** the current single proposed lemma names only the decrease.  Add a distinct planned intermediate such as unused `lem-positive-height-seifert-picture-has-reducing-arc`, or enlarge the named lemma's statement/proof so it explicitly includes source Lemma 2.2. **Deferred:** Corollaries 2.1--2.2/braid-index optimization; do not promise a minimum-index algorithm. |
| §2.3, pp. 17--19, Theorems 3--4 | **Markov:** if closed braids `X,X'` represent the same *oriented* link type in oriented `3`-space, a finite chain joins them by braid isotopy and one stabilization/destabilization at each step.  The algebraic formulation uses conjugation only after the braid-isotopy/conjugacy bridge. | First prove the easy direction directly: conjugation and either signed stabilization preserve oriented closure isotopy.  For completeness, begin with Reidemeister's theorem (Theorem 3), apply the Alexander/Yamada height machinery, and reduce to source Lemma 2.3. | **Included:** `def-markov-conjugation-and-stabilization-moves`, `lem-markov-moves-preserve-oriented-closure-isotopy`, `lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves`, `thm-markovs-closed-braid-equivalence-theorem`. **Required clarification:** add/inline an explicitly sourced `braid-isotopy ⇔ conjugacy` bridge in the fixed convention; the proposed algebraic theorem cannot receive this for free from Theorem 4's wording. |
| §2.3, pp. 19--26, Lemmas 2.3--2.8 | The Traczyk proof route is genuine but layered: replace non-braid-like Reidemeister moves by braid-like moves and Yamada--Vogel moves (Lemma 2.3); make peak arcs disjoint (2.4); replace commuting peaks by valleys and reduce noncommuting peaks (2.5); eliminate height-one peaks (2.6); classify irreducible peaks as at most four bands (2.7); turn each such peak into lower-height paths whose endpoints are Markov-equivalent (2.8); induct on maximum height. | The scaffold's present single “factor through Markov moves” lemma must not pretend this is a two-line proof.  Either it is a carefully scoped recorded theorem with source metadata, or its proof has to include the listed peak-reduction lemmas as internal phases/new items.  Lemma 2.8 itself defers a concrete two-stabilization/two-destabilization computation to Traczyk. | **Included, but proof-depth gate:** `lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves` only if its proof outline names all seven source intermediates and honestly records the final Traczyk calculation. **Deferred:** exchange moves, Markov theorem without stabilization, braid foliations, and transverse Markov theory belong to specialized later material, not the foundational closure page. |
| §4.2, pp. 46--47 | The unreduced Burau map sends `σ_i` to the identity except for the block `[[1-t,t],[1,0]]`; it has a one-dimensional invariant part and an `(n-1)`-dimensional reduced representation `\barρ`.  The source states `Δ_{\widehat X}(t)=det(\barρ(X)-I_{n-1})/(1+t+⋯+t^{n-1})` as equation (15), in its convention. | Verify the generator matrices satisfy Artin relations by local `2×2`/`3×3` multiplication.  Derive the invariant line/quotient rather than merely asserting “splits” integrally.  For the Alexander formula, state its unit normalization and prove conjugation and both stabilizations before using Markov; identify with the independently defined Alexander polynomial through a source-supported Fox/covering argument. | **Included:** BG-8 `def-unreduced-burau-matrices`, `lem-unreduced-burau-matrices-satisfy-the-artin-relations`, `prop-unreduced-burau-has-an-invariant-line-and-reduced-quotient`; BG-10 `prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid`. **Deferred:** a full proof that the determinant equals the preferred normalized Alexander polynomial needs a primary Alexander/Fox source, not equation (15) alone. |
| §4.4, p. 52 | Let `D_n` be a disk with distinguished punctures and boundary basepoint.  Total exponent/winding `ε:π_1(D_n,d_0)→Z` defines a regular infinite cyclic cover with deck generator `t`; `H_1(\widetilde D_n)` is free rank `n-1` over `Z[t^{±1}]`.  Boundary-fixed puncture-permuting mapping classes have unique basepoint-normalized lifts and act on that module as reduced Burau. | First define the meridian basis and total winding, then the cover and deck action.  Prove a braid preserves `ε`, hence lifts; normalize over `d_0` to obtain functorial composition.  Compute half-twist action on a cellular basis to compare with matrix Burau. | **Included:** `def-total-winding-homomorphism-of-the-punctured-disk`, `def-burau-infinite-cyclic-cover`, `def-reduced-burau-homology-module`, `lem-the-reduced-burau-module-is-free-of-rank-n-minus-one`, `lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover`, `def-reduced-burau-representation`, `thm-topological-and-matrix-burau-representations-agree`. |
| §4.2 pp. 46--47 and §4.4 p. 52 | Historical status in this source: reduced Burau is faithful for `n≤3`, nonfaithful for `n≥5`, with `n=4` open *at the manuscript's date*. | The construction does not prove those results.  Treat faithfulness as a separate theorem/recorded current-status remark, with a source that is current and exact. | **Deferred:** `thm-reduced-burau-is-faithful-for-at-most-three-strands` needs its listed proof source; `rem-current-faithfulness-status-of-the-reduced-burau-representation` needs a current source.  Do not cite this 2004 paper as evidence for later developments. |

## Planning corrections and dependency checks prompted by the source

The current track already allocates the material well: BG-8 owns construction
of Burau, BG-10 owns closure/Markov/trace consequences.  No ownership move is
recommended.  The following proof dependencies must remain visible.

```text
oriented link diagram
  -> Seifert smoothing/coherence/height
  -> positive-height defect region (source Lemma 2.2)
  -> reducing move lowers height (source Lemma 2.1)
  -> Alexander closed-braid theorem

Reidemeister theorem + Alexander/Yamada machinery
  -> Lemmas 2.3--2.8 peak reduction
  -> Markov theorem stated with braid isotopy
  -> braid-isotopy/conjugacy bridge
  -> algebraic Markov equivalence

punctured-disk mapping-class model + total winding
  -> infinite cyclic cover + deck module
  -> reduced Burau action and matrix comparison
  -> normalized determinant checks under Markov moves
  -> Burau/Alexander closure formula
```

Two specifics need action in the later scaffold, not a citation-only patch:

- `thm-alexanders-closed-braid-theorem` currently depends only on a lemma whose
  outline says “a reducing move lowers complexity.”  The source proves both
  *existence* of a reducing arc at positive height and strict decrease; add the
  former as an intermediate or make both parts explicit in the existing lemma.
- `thm-markovs-closed-braid-equivalence-theorem` currently jumps from a
  factorization lemma to words related by conjugation.  The source statement
  has **braid isotopy**, with conjugacy supplied by a separate result cited on
  p. 18.  State and source that equivalence in the proof architecture, and
  keep ordinary oriented Markov theory separate from transverse variants.

## Source-specific disposition ledger

- **Included as planned claims:** Hatcher supplies the cover/fibration/LES and
  cellular-homology infrastructure for BG-2/BG-3/BG-5; the supplementary source
  supplies configuration/pure braid language, the boundary-fixed punctured-disk
  mapping-class identification, geometric closure and braid index, the
  Yamada--Vogel Alexander route, oriented Markov moves/equivalence, the
  cyclic-cover and matrix forms of Burau, and the carefully normalized
  Burau/Alexander interface.
- **Inline explanatory material:** the unknotted axis and `S^3` versus solid
  torus; diagram-orientation and product conventions; full versus pure
  endpoint/marked-point behavior; the meaning of a Markov stabilization; and
  the `±t^k`/matrix-convention warning.
- **Deferred to identified later suppliers:** Artin-presentation completeness;
  the full pure-braid presentation; a complete Burau determinant/Alexander
  derivation; current Burau faithfulness; Hecke/Ocneanu trace existence and
  HOMFLY/Jones proof; and an explicit exchange-move calculation.
- **Out of scope for this foundation evidence:** Markov theorem without
  stabilization, braid foliations, transverse/contact refinements,
  Lawrence--Krammer faithfulness, Garside/word/conjugacy algorithms, and the
  survey's general applications.  They were retrieved only as parts of the
  full manuscript and were not read for this assignment.

This report deliberately gives no evidential weight to an inaccessible Rolfsen
full text or to any preview.  Its formal complete-textbook support is the
fetch-verified, complete Hatcher textbook; its braid-specific supplementary support
is the fetch-verified, complete author-hosted Birman--Brendle manuscript.  The
exact portions actually read from each are listed above.
