# Batch 65 authoring notes — KT-10

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Pair: `twisted-alexander-polynomials-and-reidemeister-torsion`  
Role: beta, batch 65  
Scheduling input: `bba46865d8c5cc10deb2f620eb009e7506a242311805020ba44de5de715e51b6`  
Batch dependency level: 2; prerequisite batches: 56, 57, 64.

## Authority and design reconciliation

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the exact beta-65 task and dependency-order task, the owner direction, the KT-10 plan section, the matching `plan-spec.json` records, the current dependency-level input, and current predecessor-batch evidence before constructing carriers.
- `research/plan-knot-theory-track.md` KT-10, lines 368–375, controls mathematical scope, conventions and proof route. The owner direction gives this plan authority over stale task/design conflicts.
- `plan-spec.json` agrees on A/B page IDs, order (3126/3127), title, category and page-level `requires`. Its two KT-10 `items: []` arrays are registration placeholders; the prose plan supplies the actual inventory: six main A items, four expressly named local prerequisite modules, one worked example and one boundary counterexample.
- The older `research/knot-theory-planning-2026-10-18/prerequisite-map.md` additionally lists `thm-twisted-burau-determinant-for-colored-braid-closure-procedure-properties`, which the controlling KT-10 inventory does not include. No KT-10 claim below depends on this extra theorem; algorithmic properties are stated only in the plan-listed final theorem.
- The prerequisite map also names `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, absent from the current batch-57 manifest, as a direct prerequisite of the Wada/torsion route. The local cellular and determinant arguments require a genuine based exterior spine and the stated coefficient hypotheses, but do not use irreducibility or boundary-incompressibility. No missing claim is inferred from that absent lemma.
- The controlling plan requires a genuine cellular model of the exterior and warns that a group isomorphism alone does not make an arbitrary presentation complex an exterior spine. Accordingly, the Wada definition and theorems state the based-spine hypothesis explicitly; the proof never infers it from `thm-knot-wirtinger-presentation-correctness` alone.
- The plan’s algorithm description says to return `not-applicable` when acyclicity fails; its later, more specific boundary says nonacyclic input has the declared zero-torsion value. The latter controls: return zero for a valid chain complex that is nonacyclic, and `not-applicable` for an invalid extension/certificate, a failed chain identity, or an inadmissible zero denominator. The denominator is checked before the acyclicity branch.
- The algorithm and Burau theorem require finite, compatible based spine certificates for both the closure exterior and the closure-with-axis exterior. The current task describes finite presentations/matrices but supplies no automatic topological recognizer. I carry these certificates as explicit geometric inputs and never promote a bare group presentation to an exterior spine. Handoff retains this exact input obligation for owner reconciliation.
- `thm-knot-wirtinger-presentation-correctness` proves a group presentation but does not prove simple-homotopy equivalence of its presentation 2-complex to the exterior. Any consumer that needs that equivalence must supply or assume the actual spine certification explicitly.

## Batch inputs and supplier audit

- The current batch dependency input gives batch 65 level 2 and exactly the required batches 56, 57 and 64. The latest read-only run status reports step 1 held for an owner blocker, 29/109 page pairs covered, no workers in flight, and an owner repair/recertification blocker at `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`. This authoring handoff does not repair engine state or verdicts.
- Batch 56’s manifest contains `thm-knot-wirtinger-presentation-correctness` and its crossing-ball/conjugacy suppliers. The actual theorem and the two local crossing lemmas were inspected. The theorem’s scope is a group isomorphism and termination; it supplies no 2-spine/simple-equivalence assertion.
- Batch 57’s manifest contains `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, and `thm-knot-exterior-homology-and-longitude`. Their complete current carriers were inspected. The exterior is a chosen compact tube complement; the positive meridian is the oriented normal-disk boundary; the longitude theorem is knot-only and is not generalized to colored links.
- Batch 64’s manifest contains `def-maximal-abelian-cover-alexander-module`, the compact-exterior retraction and cellular-chain suppliers, the triangulated chain algorithm and its correctness theorem. Their actual definitions/proofs were inspected. The module is absolute $H_1$ of the full maximal-abelian cover with positive-meridian variables; the compact-exterior cover is deck-equivariantly equivalent; and the chain theorem uses all meridian coordinates, not a one-variable total-linking specialization.
- The published `thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians` body was read completely. It identifies the standard positive meridians as a free basis; the algorithm uses this basis and the library’s explicit Artin action convention.
- These current supplier bodies are draft Step-1 inputs, not independent acceptance. The link generalization is made explicit wherever used; knot-only homology/longitude conclusions are not imported into a link argument.

## Authoritative source reading and dispositions

Full relevant text was inspected directly, including equations and complete relevant proofs. The final source-fetch check is recorded in the source-evidence file; all coverage entries are fetch-verified.

- Anthony Conway, *Burau Maps and Twisted Alexander Polynomials*, full 20-page version 2 PDF, §§2.2–2.4, 3.1–3.3; `https://arxiv.org/pdf/1510.06678`. It supplies the twisted chain/torsion conventions, colored/reduced Burau construction, Theorem 3.19 and its complete braid-axis decomposition proof, and the trefoil calculation. Its Wada-to-torsion passage is explicitly not used as proof: the local deficiency-one/torsion argument is proved here.
- Paul Kirk and Charles Livingston, *Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants*, complete 27-page author-hosted PDF, §§2.1–2.3, Theorem 3.4, §4 including Theorem 4.1 and Lemma 4.2; `https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf`. It supplies an independent twisted homology/torsion treatment and a complete module-theoretic Wada comparison; results are corroboration, not a substitute for the local chain-basis proof.
- Andrew Ranicki, *Notes on Reidemeister Torsion*, complete 10-page lecture notes, Definitions 4 and 6, the basis-change discussion and Theorem 15, and Example 17; `https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf`. This is the required independent full lecture-note treatment; it supports based torsion, unit ambiguity, simple-homotopy caveats, and the knot-exterior 2-dimensional cell model. The local arguments still give all proof steps.
- All three primary sources were fetched and their complete relevant sections were inspected. Supplemental spine-source recovery had two failed candidates before success: a CJHB-hosted notes PDF candidate ending in `notes.pdf` returned 404 (the exact path was not preserved in the authoring bundle), and `https://gt.postech.ac.kr/~jccha/math422-chapter-10-2026-spring/` returned 502. The successful Stillwell alternative was the complete 7-page author-hosted excerpt at `https://homepages.math.uic.edu/~kauffman/Stillwell.pdf`; pages 1–4 including §4.2.4 were inspected. That passage gives a group-presentation proof only and is not cited as a simple-spine proof. During the trefoil-spine check, another search-result PDF URL, `https://mathweb.tifr.res.in/sites/default/files/publications/ln/tifr44.pdf`, returned 404; the complete alternative lecture notes by Cattabriga–Francaviglia at `https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf` were opened, and the full §5.2.1 Van Kampen argument and annulus-core description were inspected. The source-fetch checker later stamped all 8 coverage entries, including this 53-page PDF. The final supplemental searches were `torus knot exterior union of two solid tori annulus core degree p q presentation a^p=b^q lecture notes pdf` and `trefoil complement solid tori annulus presentation a^2 b^-3 knot exterior spine lecture notes`; the returned TIFR PDF URL returned 404 and the successful Cattabriga–Francaviglia alternative was opened. The recovered text confirms the annulus slopes and group presentation, while the assigned item separately supplies the simple-spine cell argument. The recovery is recorded in coverage/source evidence; the source-resolution module has no drop/escalation record because all required sources were recovered. This source supports the (2,3) torus splitting and group relation, not the simple-spine equivalence, which is justified locally. No required source was dropped; the retrieval histories are in the coverage and source-evidence records. All current source entries are fetch-verified.

## Item inventory and intended dependency order

The inventory follows the controlling plan and retains all dependent claims. Logical edges and levels below are represented in the manifest before carriers; levels count only direct suppliers that belong to this run. External published suppliers do not increase the level.

| Item | Role | Direct in-run suppliers | Planned level |
|---|---|---|---:|
| `def-knot-twisted-chain-complex-and-reidemeister-torsion` | Define full-abelianization twisted complex and based torsion | `def-knot-exterior`; `def-knot-meridian-and-preferred-longitude`; `def-maximal-abelian-cover-alexander-module`; `lem-maximal-abelian-cover-link-exterior-retraction` | 4 |
| `def-knot-wada-quotient-for-deficiency-one-presentation` | Define admissible deleted-column quotient for a certified exterior spine | `def-knot-twisted-chain-complex-and-reidemeister-torsion` | 5 |
| `lem-twisted-acyclicity-from-torsion-module` | Localized acyclicity under torsion, positive-rank deck map, and Euler characteristic | `def-knot-twisted-chain-complex-and-reidemeister-torsion` | 5 |
| `lem-twisted-torsion-cell-basis-change-ambiguity` | Prove the exact determinant/deck-unit indeterminacy under based cell changes and elementary simple expansions | `def-knot-twisted-chain-complex-and-reidemeister-torsion` | 5 |
| `lem-twisted-fox-jacobian-is-cellular-boundary` | Prove the evaluated Fox matrix is the lifted cellular differential | `def-knot-twisted-chain-complex-and-reidemeister-torsion`; `def-knot-wada-quotient-for-deficiency-one-presentation` | 6 |
| `lem-knot-twisted-exterior-acyclicity-from-torsion-module` | Knot/link-exterior specialization with the spine hypotheses explicit | `def-knot-twisted-chain-complex-and-reidemeister-torsion`; `def-knot-wada-quotient-for-deficiency-one-presentation`; `lem-twisted-acyclicity-from-torsion-module` | 6 |
| `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion` | Complete finite-dimensional chain-basis determinant proof | `def-knot-wada-quotient-for-deficiency-one-presentation`; `lem-twisted-fox-jacobian-is-cellular-boundary`; `lem-twisted-acyclicity-from-torsion-module` | 7 |
| `alg-twisted-burau-determinant-for-colored-braid-closure` | Exact finite input/output procedure | `def-knot-twisted-chain-complex-and-reidemeister-torsion`; `def-knot-wada-quotient-for-deficiency-one-presentation`; `lem-twisted-fox-jacobian-is-cellular-boundary` | 7 |
| `thm-twisted-burau-axis-torsion-product` | Prove the axis decomposition product and colored Burau block determinant | `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`; `alg-twisted-burau-determinant-for-colored-braid-closure`; `thm-abelian-cover-chain-model-computes-alexander-module` | 8 |
| `thm-knot-wada-quotient-equals-reidemeister-torsion` | Exterior-spine theorem and permitted simple/Tietze changes | `lem-knot-twisted-exterior-acyclicity-from-torsion-module`; `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`; `thm-knot-wirtinger-presentation-correctness`; `thm-abelian-cover-chain-model-computes-alexander-module` | 8 |
| `thm-twisted-burau-determinant-formula-under-extension-hypotheses` | Final algorithm-to-torsion theorem with acyclic and nonacyclic branches | `thm-twisted-burau-axis-torsion-product`; `thm-knot-wada-quotient-equals-reidemeister-torsion`; `alg-twisted-burau-determinant-for-colored-braid-closure` | 9 |
| `cex-knot-kt-10-boundary-case` | Zero denominator column despite another admissible column | `def-knot-twisted-chain-complex-and-reidemeister-torsion`; `def-knot-wada-quotient-for-deficiency-one-presentation` | 6 |
| `ex-knot-kt-10-worked-cases` | Trefoil, trivial representation, reduced Burau and torsion computation | `def-knot-twisted-chain-complex-and-reidemeister-torsion`; `def-knot-wada-quotient-for-deficiency-one-presentation`; `thm-knot-wada-quotient-equals-reidemeister-torsion`; `alg-twisted-burau-determinant-for-colored-braid-closure`; `thm-twisted-burau-determinant-formula-under-extension-hypotheses` | 10 |

The inventory is the ten plan-listed A items plus the one necessary basis-change well-definedness lemma and the two plan-listed B items. The exact dependency set and all levels are synchronized from the final carrier frontmatter; the scoped recomputation verifies all 13 labels. The 2D-spine condition is part of the Wada input; no theorem is made to rely on group-presentation correctness alone.

## Authoring checkpoints

### Checkpoint — `def-knot-twisted-chain-complex-and-reidemeister-torsion`

- Claim/convention: defines the full $H_1(E_L)$ meridian abelianization first, an explicit quotient deck map $\chi$, and only then the $\rho\otimes\psi$ coefficient complex. Torsion is the acyclic based determinant product, zero on nonacyclic complexes, and taken modulo the exact image of $\det(\rho\otimes\psi(G))$; the commonly used coarser determinant/deck-unit group is stated separately.
- Dependencies: `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-maximal-abelian-cover-alexander-module`, `lem-maximal-abelian-cover-link-exterior-retraction`, `def-group-ring`, `thm-group-ring-is-a-unital-algebra-with-basis-g`, `def-field-of-fractions`, `def-axiom-of-choice`; `justified_by: lem-twisted-torsion-cell-basis-change-ambiguity`; level 4.
- Sources/locators: Conway, complete v2 §§2.2–2.4 and 3.3; Kirk–Livingston, complete §§2.1–3; Ranicki, complete notes Definitions 4 and 6. The source unit conventions are retained with the exact coefficient image distinguished from the coarser deck-unit convention.
- Proof-contract status: included in the final strict 13-item pass (0 errors/warnings); the basis-change lemma supplies the stated well-definedness support. Validation status: final scoped checks are recorded below.
- Next: keep definitions and lemmas in ascending level; the basis-change lemma is the well-definedness supplier.

The full compact-exterior supplier was added to the first definition after checking that the open-complement maximal-abelian statement alone does not identify H1(E_L); its retraction lemma supplies that isomorphism and raises the local levels by one. The current item checkpoints below supersede the historical “next” fields in earlier entries.


### Checkpoint — `def-knot-wada-quotient-for-deficiency-one-presentation`

- Claim/convention: defines the deleted-block Fox minor quotient only for a specified deficiency-one based 2-spine of the selected exterior; records all row/column and group-ring conventions; a zero $D_j$ makes that column undefined. A bare isomorphism of group presentations is explicitly insufficient.
- Dependencies: `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-maximal-abelian-cover-alexander-module`, `def-group-presentation`, `def-free-group`, `def-group-ring`, `thm-group-ring-is-a-unital-algebra-with-basis-g`, `def-field-of-fractions`, `def-axiom-of-choice`; manifest level 5.
- Sources/locators: Conway, full v2 §§2.4 and 3.3; Kirk–Livingston, complete §4; Ranicki, complete notes Definition 6 and Theorem 15. Source bodies inspected; no citation replaces the later local ratio proof.
- Proof-contract status: included in the final strict 13-item pass (0 errors/warnings). Validation status: final scoped checks are recorded below.
- Next: author the positive-rank localized acyclicity lemma and based torsion unit-ambiguity lemma before the dependent Fox and determinant results.


### Checkpoint — `lem-twisted-acyclicity-from-torsion-module`

- Claim/conventions: for a finite based 2-complex with one 0-cell, n 1-cells and n−1 2-cells, positive-rank free-abelian deck quotient, and torsion H1 over the Laurent ring, localization gives an acyclic complex. The proof derives H0=0 from a nontrivial deck monomial, then Euler–Poincaré forces H2=0; it does not assume top homology vanishes in advance.
- Dependencies: `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-field-of-fractions`, `thm-field-of-fractions-is-a-field-and-the-domain-embeds`, `def-axiom-of-choice`; manifest level 5.
- Sources/locators: Conway, complete version-2 PDF Lemma 2.7; Kirk–Livingston, complete §§3–4; Ranicki, complete notes Example 17. Each source was read in full at the relevant argument; the proof is local.
- Proof-contract status: generated from the four-step argument and included in the final strict 13-item pass. Validation status: final scoped checks are recorded below.
- Next: prove the unit-indeterminacy lemma, then the exterior specialization and Fox-to-cellular boundary lemma.


### Checkpoint — `lem-twisted-torsion-cell-basis-change-ambiguity`

- Claim/convention: proves lift/orientation factors are exactly in the determinant-image subgroup, elementary simple expansions/collapses add only such a unit, and a common coefficient-basis change cancels when Euler characteristic is zero.
- Dependencies: `def-knot-twisted-chain-complex-and-reidemeister-torsion`, `def-axiom-of-choice`; manifest level 5. This is the well-definedness supplier listed in the definition's `justified_by`.
- Sources/locators: Ranicki complete notes basis-change formula and Theorem 15; Conway complete version-2 §§2.3–2.4; Kirk–Livingston complete §3. Full text inspected; the local determinant calculation is supplied in the proof.
- Proof-contract status: generated from the three-step argument and included in the final strict 13-item pass. Validation status: final scoped checks are recorded below.
- Next: use this lemma with the definition suppliers to finish the Fox boundary and Wada-minor proofs.


### Checkpoint — `lem-twisted-fox-jacobian-is-cellular-boundary`

- Claim/convention: derives both $\partial_1$ blocks and each $\partial_2$ Fox-Jacobian row from lifted oriented cells; the product, inverse, and Fox fundamental identity are proved locally.
- Dependencies: twisted-chain and Wada definitions, free/group presentations, group ring and its unital multiplication theorem, AC; manifest level 6.
- Sources/locators: Conway, complete version-2 §§2.4/3.1; Kirk–Livingston, complete §4; Ranicki, complete notes pp. 3–5. No displayed diagram is used as proof.
- Proof-contract status: generated from the four-step argument and included in the final strict 13-item pass. Validation status: final scoped checks are recorded below.
- Next: finish the knot-spine specialization of acyclicity, then the generic deleted-minor determinant theorem.


### Checkpoint — `lem-knot-twisted-exterior-acyclicity-from-torsion-module`

- Claim/convention: specializes the general acyclicity result to the actual based 2-dimensional exterior spine, with one 0-cell, n 1-cells, n−1 2-cells, a positive-rank deck epimorphism and the degree-one torsion hypothesis.
- Dependencies: twisted-chain definition, general torsion-module acyclicity lemma and AC; manifest level 6. The Euler characteristic is computed from the explicit cell counts.
- Sources/locators: Conway, complete v2 Lemma 2.7; Kirk–Livingston, complete §3. Local proof invokes only the already-authored general lemma.
- Proof-contract status: generated from the two-step specialization and included in the final strict 13-item pass. Validation status: final scoped checks are recorded below.
- Next: prove the algebraic deleted-minor torsion identity using the Fox differential and unit-ambiguity lemmas.


### Checkpoint — `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`

- Claim/convention: proves for a certified based deficiency-one exterior spine that any admissible deleted block has nonzero numerator and quotient equal to the based torsion class; all admissible columns agree. The proof uses the explicit $d_1$ block and a block-triangular torsion basis.
- Dependencies: Wada definition, Fox-cellular lemma, generic acyclicity lemma, torsion unit-ambiguity lemma, field of fractions and AC; manifest level 7.
- Sources/locators: Kirk–Livingston complete §4 Theorem 4.1/Lemma 4.2; Conway complete §§2.3–2.4; Ranicki complete notes Theorem 15. The local matrix proof is supplied in four steps.
- Proof-contract status: generated from the three-step argument and included in the final strict 13-item pass. Validation status: final scoped checks are recorded below.
- Next: author the exact finite colored-braid procedure and then prove its axis-decomposition torsion product.


### Checkpoint — `alg-twisted-burau-determinant-for-colored-braid-closure`

- Procedure/convention: finite encoded colored braid, exact field and representation, declared full-meridian-to-color map, and a certified based deficiency-one exterior spine. The reduced block is computed in the cumulative-meridian basis $g_i=x_1\cdots x_i$; extension, the designated boundary denominator, chain identity, and acyclicity are checked exactly in that order. A zero designated denominator returns `not-applicable`; once it is nonzero, nonacyclic torsion returns zero. The gluing input includes the based torus and filled solid-torus cell structures, as well as actual compatible spine certificates.
- Dependencies: twisted/Wada definitions, Fox cellular lemma, Artin braid/closure and punctured-disk-meridian conventions, group presentation/free group/ring, exact fraction field, AC; manifest level 7.
- Sources/locators: Conway, complete version-2 §§2.1–2.4 and 3.1–3.3; Kirk–Livingston complete §§2–4; Ranicki complete notes Definitions 4 and 6. The source's quotient-to-torsion step is not used in place of the local proof.
- Proof-contract status: finite procedure input, failure and boundary checks recorded; included in the final strict 13-item pass. Validation status: final scoped checks are recorded below.
- Next: prove the axis decomposition product from the based chain complexes and local Wada theorem.


## Supplemental source-recovery record

- Search purpose: independently check the knot-group/spine caveat while drafting the Wada items. The first CJHB-hosted notes PDF candidate ending in `notes.pdf` returned 404; its exact URL tail was not retained, so no full URL is invented here. The next author-hosted candidate `https://gt.postech.ac.kr/~jccha/math422-chapter-10-2026-spring/` returned 502. Recovery stopped on success at Stillwell's complete 7-page author-hosted excerpt, `https://homepages.math.uic.edu/~kauffman/Stillwell.pdf`; pages 1–4, including §4.2.4, were inspected. Its argument identifies the knot group by an open-cover presentation and does not prove that the presentation 2-complex is a simple spine. The local claims retain an explicit spine certificate hypothesis. Since a usable supplemental text was recovered and no required source was dropped, no `source_resolution.status=dropped` entry was entered.
- Retrieval attempts were bounded and stopped after this successful alternative. Per-item disposition: `thm-knot-wada-quotient-equals-reidemeister-torsion` cites an actual spine certificate as a hypothesis and does not use Stillwell for simple equivalence; `thm-twisted-burau-axis-torsion-product` requires compatible based spine/gluing certificates as hypotheses; `ex-knot-kt-10-worked-cases` proves the trefoil exterior spine from the genus-one splitting locally.

## Final authoring checkpoints

### Checkpoint — `thm-twisted-burau-axis-torsion-product`

- Claim/conventions: for actual compatible based spine and filling certificates, $D=\det(\rho(g_n)\psi(g_n)-I_d)\ne0$ implies $\tau(X)\doteq N/D$, where $N=\det(\overline B_\rho(\beta)-I)$. The proof computes $\tau(V)=D^{-1}$ and $\tau(T)=(-1)^d$, proves the cellular short exact sequence and torsion multiplicativity, derives torsion of $H_1(Y;\Lambda^d)$ on the acyclic branch, and computes the $Y$ deleted minor as $(-1)^dND$. For $X$, the deleted Fox minor differs from $N$ by $\prod_i\det(M_i^{-1})$, a declared coefficient unit; hence $N=0$ exactly in the nonacyclic branch.
- Dependencies: twisted/Wada definitions, Fox-cellular lemma, Wada deleted-minor theorem, torsion basis-change lemma, colored braid procedure, batch-64 full-abelian-cover chain theorem, compact knot exterior, S-vK and punctured-disk/braid conventions, fraction-field domain theorem, AC; item level 8.
- Sources/locators: Conway, complete v2 §§3.1–3.3, Theorem 3.19 and full proof; Kirk–Livingston, complete §§2–4; Ranicki, complete notes Definitions 4/6 and Theorem 15. All primary-source bodies were inspected.
- Proof-contract status: generated from normalized dependency-layer steps 1.1, 2.1–2.2, 3.1, 4.1–4.2, 5.1 and 6.1 and included in the final strict 13-item pass. Validation status: final scoped checks are recorded below.
- Boundary: generic spine recognition is not claimed. The algorithm accepts exact finite geometric certificates as input; it does not infer them from group-presentation data.

### Checkpoint — `thm-knot-wada-quotient-equals-reidemeister-torsion`

- Claim/conventions: for a knot exterior and an actual based simple-spine certificate with one vertex, $n\ge2$ edges and $n-1$ relators, torsion $H_1$ and any admissible deleted column, the Wada quotient represents the exact declared torsion class. All admissible columns agree; presentation changes are allowed only when a finite based simple cellular equivalence is supplied.
- Dependencies: Fox-cellular lemma, knot-specific acyclicity lemma, generic Wada minor theorem, basis-change/unit lemma, twisted/Wada definitions, AC; item level 8.
- Source locators: Kirk–Livingston complete §§3–4; Conway complete v2 §§2.3–2.4; Ranicki complete basis-change discussion and Theorem 15. The actual group-correctness supplier proves only a group isomorphism and is not asserted as a spine certificate; older prerequisite-map edges to it and to the batch-64 module-computation theorem were removed from this item's direct dependencies because this statement assumes the spine and twisted-module hypotheses directly.
- Proof-contract status: generated and included in the final strict 13-item pass. Validation status: final scoped checks are recorded below.

### Checkpoint — `thm-twisted-burau-determinant-formula-under-extension-hypotheses`

- Claim/conventions: for applicable finite colored-braid input, a nonzero designated denominator, actual compatible based certificates, and coefficient extension over the filling, the procedure represents the exterior torsion; the nonacyclic branch returns zero and has $N=0$. The zero-denominator test precedes the nonacyclic return.
- Dependencies: algorithm, braid-axis torsion product, twisted-chain convention, full positive-meridian chain-model result, Wada and basis-change conventions, field-of-fractions facts and AC; item level 9.
- Sources/locators: Conway, complete v2 §§3.1–3.3 and Theorem 3.19; Kirk–Livingston complete §§2–4; Ranicki complete Definitions 4/6 and Theorem 15. Proof is the local two-branch argument, not citation-only.
- Proof-contract status: generated and included in the final strict 13-item pass. Validation status: final scoped checks are recorded below.

### Checkpoint — `cex-knot-kt-10-boundary-case`

- Claim/conventions: an elementary expansion of the unknot circle spine adds $x$ and a $2$-cell $r=x$. Under trivial $\rho$, $\psi(x)=1$, $\psi(y)=t$, Fox row $[1\ 0]$ gives $D_x=0$ (inadmissible) and $W_y=1/(t-1)$. The full localized chain is acyclic.
- Dependencies: Wada and twisted-chain definitions, knot exterior/peripheral and knot-homology conventions, AC; item level 6.
- Sources/locators: Kirk–Livingston complete §4; Ranicki complete Definitions 4/6. Local finite calculation is complete.
- Proof-contract status: generated and included in the final strict 13-item pass. Validation status: final scoped checks are recorded below.

### Checkpoint — `ex-knot-kt-10-worked-cases`

- Claim/conventions: the genus-one Heegaard split of the $(2,3)$ torus knot gives the based simple-spine presentation $\langle a,b\mid a^2b^{-3}\rangle$ with $a\mapsto t^3$, $b\mapsto t^2$. Fox deletion in the $a$ column gives $-(t^4+t^2+1)/(t^3-1)=(t^2-t+1)/(1-t)$. For $\sigma_1^3$, cumulative-meridian Fox evaluation gives reduced scalar $-t^3$, so $N/D=-(t^3+1)/(t^2-1)$ is exactly the same rational function. The example does not claim that the full axis procedure recognizes a geometric spine; its procedure interpretation is conditional on the compatible $Y,T,V$ certificate.
- Dependencies: twisted/Wada definitions, Wada torsion theorem, braid procedure, final formula, S-vK, knot exterior/peripheral and knot-homology theorem, AC; item level 10.
- Sources/locators: Conway complete v2 §§3.1–3.3; Kirk–Livingston complete §4; Ranicki complete Definitions 4/6 and Theorem 15; Cattabriga–Francaviglia complete lecture notes §5.2.1 (pp. 27–28), full Van Kampen argument inspected. The local torus-splitting, simple-spine cell model and finite determinant computations are explicit.
- Proof-contract status: generated and included in the final strict 13-item pass. Validation status: final scoped checks are recorded below.

## Current handoff status

All 11 A and 2 B carriers are drafted; both authored pages contain only YAML frontmatter and empty bodies. The final source harvest has 22 dispositions across 2 pages with no coverage warnings; all 8 source entries (5 unique URLs) are fetch-verified. Cattabriga–Francaviglia §5.2.1 was read in full after a TIFR candidate 404; it supplies the torus-splitting/Van Kampen context and is not treated as a simple-spine proof. Proof contracts strictly validate all 13 items (69 exact fact/source citations and 39 mapped steps); native precheck passes 10 proof-bearing items with 0 failures after the canonical phase-layer renumbering; `proof-layout` passes 13 items/39 steps with 0 defects; scoped dependency levels match for all 13 carriers; manifest/carrier/cross-batch synchronization has 0 mismatches. The first native precheck proposed dependency-layer renumbering for nine arguments; I inspected and applied only step-label and corresponding earlier-step-reference changes, preserving each argument. All 13 items have current `ready` authoring records with their direct dependency IDs; `step1-decisions check` confirms zero outstanding batch-65 items (291/485 run items ready, 322 total work entries). The axis theorem and algorithm remain conditional on actual compatible geometric spine/filling certificates, which are explicit inputs and are not inferred from group presentations.

Run-wide checks remain owner-blocked: `item-dependency-levels.mjs check --run ...` most recently reports 169 unrelated empty-inventory/stale-level errors outside batch 65; the scoped batch-65 recomputation is clean. `batch-dependency-levels.mjs check --run ...` cannot parse another run item’s frontmatter: `Invalid escape sequence \# at line 25, column 76` near `$-L\#L$`. Earlier checks encountered different malformed strings, so this is a run-wide owner issue, not a batch-65 dependency mismatch. I did not edit shared scheduling/engine state. Latest live autopilot status recomputes to 29/109 pages covered, no workers in flight, and the existing owner repair/recertification blocker in `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`.
