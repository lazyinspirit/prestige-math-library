# frontier-31 / beta / batch-11 — scaffold notes

## Scope and control check

- Owned artefacts: `research/frontier-31-batch-11.pages.json`,
  `research/frontier-31-batch-11.coverage.json`, and this note only.  No
  published content, plan structure, workflow state, or another batch was
  changed.
- The task assigns the A/B pair at orders 366.045/366.046 and makes the A page
  require `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples`.
  `research/plan-algebraic-geometry-track.md` lines 210–258 (AV-3) and the
  corresponding `research/plan-spec.json` record agree on those controls; no
  design/spec drift is recorded here.
- `tools/autopilot` reports a separate `frontier-23` authoring run.  It is not
  this dispatch and was left untouched.

## Conventions and route fixed by AV-3

- Work over the previously established algebraically closed base field `k`.
  Projective space is `(k^(n+1) minus {0}) / k^*`; `[a_0:...:a_n]` denotes a
  proportional class.  `V_+(I)` uses homogeneous equations and the irrelevant
  ideal is `(x_0,...,x_n)`.
- A *classical projective variety* means a nonempty irreducible projective
  algebraic set.  Thus the global-functions result is the classical statement
  `Gamma(X,O_X)=k` for this irreducible object, not a claim about arbitrary
  disconnected projective algebraic sets or an appeal to later properness.
- The affine chart is `D_+(x_0)`, identified with affine space by ratios
  `x_i/x_0`.  For `I=(f_1,...,f_r)`, distinguish all-polynomial
  homogenization `I^h` from the raw ideal `(f_1^h,...,f_r^h)` and use
  `I^h=(f_1^h,...,f_r^h):x_0^infinity`.  Saturation is essential.
- The homogeneous coordinate ring is graded and is not the scalar-valued
  global-function ring.  Homogeneous coordinate tuples defining a projective
  morphism have a common degree and no common zero on the source.
- The cone example assumes `char(k) != 2`; the power-map example separates
  the generic fibre away from characteristic divisors of the degree.
- AV-3's chosen sequence is retained: quotient/projective equations;
  topology and standard charts; closure and saturation; coordinate ring,
  irreducibility and global functions; homogeneous-coordinate morphisms;
  cones and hypersurface pieces; then seven worked examples/counterexamples.
  The later product/Segre/Veronese/Grassmannian page receives those constructions.

## Scaffolded graph

Every record in the manifest has an explicit `deps` array.  Dependency ids are
either an earlier item in this pair or an established item (`def-graded-ring-and-graded-module`,
the affine Zariski/Nullstellensatz/coordinate-ring/localisation chain, and the
affine regular-function/morphism chain).  The claimed role and exact target of
each new item are:

| Item | Claim or construction | Dependency rationale |
| --- | --- | --- |
| `def-projective-space-points` | Define `P^n(k)` as nonzero vectors modulo scalar rescaling. | Root convention. |
| `def-homogeneous-polynomial-and-homogeneous-ideal` | Define forms, homogeneous ideals, and the inherited grading. | Uses established graded rings. |
| `lem-homogeneous-polynomial-zero-locus-well-defined` | `F(lambda a)=lambda^dF(a)` makes a homogeneous zero locus descend. | Needs points and forms. |
| `def-projective-algebraic-set` | Define `V_+(I)` and the irrelevant-ideal boundary. | Needs the preceding descent lemma. |
| `thm-projective-zariski-topology` | Homogeneous zero loci give the Zariski closed sets. | Needs forms and `V_+`. |
| `lem-standard-projective-opens-are-affine-spaces` | Identify each `D_+(x_i)` with affine `n`-space. | Needs projective topology and established affine topology. |
| `lem-homogenization-dehomogenization-correspondence` | On the `x_0` chart, relate homogenization/dehomogenization and saturation. | Needs forms, affine sets, and localisation ideals. |
| `def-projective-closure-affine-set` | Define closure of an affine algebraic set in the `x_0` chart. | Needs topology and chart. |
| `thm-ideal-projective-closure-saturation` | Identify its homogeneous vanishing ideal with saturated homogenization. | Needs the correspondence, closure, and affine Nullstellensatz. |
| `def-homogeneous-coordinate-ring` | Define `k[x_0,...,x_n]/I_+(X)` with its grading. | Needs projective equations. |
| `def-projective-variety-classical` | Define nonempty irreducible classical projective variety. | Needs projective set and affine charts. |
| `lem-projective-irreducibility-homogeneous-prime` | Relate projective irreducibility to the non-irrelevant homogeneous prime. | Needs coordinate ring and affine Nullstellensatz. |
| `def-regular-function-projective-variety` | Define regular functions chartwise/through degree-zero quotients. | Needs projective variety, ring, charts. |
| `lem-projective-regular-function-chart-compatibility` | Equal-degree quotients precisely match affine-chart regularity. | Needs regular functions and chart overlaps. |
| `thm-global-regular-functions-projective-variety` | Prove global regular functions on the classical projective variety are constant. | Needs the preceding irreducibility and quotient control. |
| `def-morphism-to-projective-space-homogeneous-coordinates` | Define maps from equal-degree coordinate tuples without common zeros. | Needs source/projective target and regularity. |
| `lem-projective-coordinate-morphisms-well-defined` | Establish rescaling invariance and chartwise gluing. | Needs coordinate tuple and chart compatibility. |
| `thm-closed-projective-embedding-by-homogeneous-generators` | Give the chosen homogeneous-coordinate presentation as a closed embedding. | Restricted to the chosen polynomial presentation; no later scheme-theoretic `Proj` universal claim. |
| `def-affine-cone-projective-set` | Define the affine cone, including the vertex. | Needs `P^n` and `V_+`. |
| `lem-projective-variety-cone-irreducible` | Transfer irreducibility between cone and projective variety. | Needs cone, prime criterion, affine Nullstellensatz. |
| `lem-projective-closure-dense-affine-chart` | Affine set is dense in its own projective closure and recovered on the chart. | Needs closure/chart/homogenization. |
| `def-degree-projective-hypersurface` | Define degree from a homogeneous defining form. | Needs equations and the irreducible hypersurface setting. |
| `lem-projective-hypersurface-affine-pieces` | Dehomogenize hypersurface equations and calculate transitions. | Needs degree, charts, h/deh. |
| `rem-projective-coordinate-ring-not-function-ring` | Separate graded coordinate ring from constant global functions. | Needs both rings and global-functions theorem. |
| `ex-projective-line-two-affine-charts` | Compute the two `P^1` charts and `tu=1`. | Exercises points and chart lemma. |
| `ex-projective-closure-parabola` | Homogenize `y=x^2` and find `[0:0:1]` at infinity. | Exercises h/deh and closure theorem. |
| `cex-naive-homogenization-adds-component` | Raw homogenized twisted-cubic generators add a line at infinity; saturation removes it. | Tests the saturation distinction. |
| `ex-projective-conic-standard-charts` | Calculate all affine pieces of `XZ=Y^2`. | Exercises hypersurface charts. |
| `ex-affine-cone-over-conic` | Under `char(k) != 2`, compare smooth conic and singular cone vertex. | Exercises cone and degree definitions. |
| `cex-inhomogeneous-equation-not-projectively-well-defined` | Show `x_0+1` changes truth under representative rescaling. | Tests homogeneity necessity. |
| `ex-morphism-projective-line-power-map` | Build `[s:t] -> [s^d:t^d]` and state the characteristic qualification. | Exercises homogeneous-coordinate maps. |

The chart-density item deliberately states the design trap: density follows from
the definition of *the* closure.  “No component at infinity” is only needed
when recovering a pre-existing projective set from its affine chart, so it is
not falsely made a hypothesis for density itself.

### Proposed proof strategies

- Establish projective topology with sums of homogeneous ideals for arbitrary
  intersections and products for finite unions; make the empty locus of the
  irrelevant ideal visible.  Prove standard charts by normalising the nonzero
  coordinate and checking their homogenized/dehomogenized equations.
- Compare `I^h` and raw chosen-generator homogenization after localising at
  `x_0`, then clear a power of `x_0`.  Combine that with the earlier affine
  Nullstellensatz to prove the saturated-closure theorem, rather than treating
  a generator list as intrinsically projective.
- Use the affine cone and the established affine prime/irreducible
  correspondence for the projective prime criterion and cone lemma.  Treat the
  irrelevant ideal separately in both arguments.
- Translate equal-degree homogeneous quotients to affine ratio coordinates to
  establish chart compatibility.  The global-functions proof then uses the
  no-pole homogeneous quotient argument over the fixed algebraically closed
  field, without using properness from a later page.
- For a homogeneous-coordinate map, use common source degree for rescaling
  invariance, then `F_j/F_i` on every target chart and the overlap identity to
  glue.  The closed-presentation result is confined to the selected
  homogeneous polynomial quotient and proved chartwise.
- All B items are direct calculations under their stated qualifications:
  dehomogenize equations, compute the saturation counterexample, use partial
  derivatives only for the conic/vertex comparison, and calculate the
  characteristic-sensitive power-map fibres.  No general smoothness,
  properness, products, or scheme `Proj` result is imported.

## Source harvest and evidence

The coverage file holds 46 individual source-native headings/results and their
dispositions.  Full texts actually read and their exact recorded locators are:

1. Milne, *Algebraic Geometry*, Chapter 6, sections 6a–6i, printed pp.
   130–146 / PDF pp. 129–145, plus the table of contents at PDF pp. 3–4:
   <https://www.jmilne.org/math/CourseNotes/AG.pdf>.
2. Artin, *Algebraic Geometry*, Chapter 3, §§3.1–3.2 and 3.4, printed pp.
   58–72 / PDF pp. 61–75, plus Chapter 3 contents:
   <https://math.mit.edu/classes/18.721/ag-jul20.pdf>.
3. Arapura, *Notes on Algebraic Geometry*, Chapter 2, §§2.1–2.5, PDF pp.
   15–22: <https://www.math.purdue.edu/~arapura/preprints/algeom.pdf>.

All three exact URLs opened as complete PDFs in the source reader on
2026-09-05 (Milne 231 pages, Artin 189 pages, Arapura 41 pages).  The shell
environment could not resolve these external hosts during a direct download
attempt, and `pdftotext` is absent; no byte/hash `fetch_verified` receipt has
been fabricated.  The local source-fetch stamper must be run and its result
recorded below.  If its DNS failure persists, the coverage retains only sources
whose complete texts were browser-verified and the mechanical receipt remains
an explicit unresolved gate rather than a claim of success.

Every deferred entry targets the planned
`products-segre-and-veronese-embeddings-and-grassmannians` page and names the
specific reason.  Complex-analytic compactness and quasiprojective-variety
material are out of scope for stated, result-specific reasons.  No source row
is dropped merely to clear a gate.

## Validation ledger and next action

- PASS — JSON parse: both batch JSON artefacts parse.
- PASS — `node tools/manifest-deps.mjs research/frontier-31-batch-11.pages.json`:
  31 items, 0 normalised, 0 errors.  This confirms an explicit `deps` array on
  every record.
- PASS — `node tools/content-policy.mjs --manifest-only
  research/frontier-31-batch-11.pages.json`: 31 scoped items, 0 errors,
  0 warnings.  All item dependencies resolve and B uses no B-page dependency.
- PASS — `node tools/coverage-checklist.mjs
  research/frontier-31-batch-11.coverage.json --require-destination`: 1 page,
  46 harvested results, 0 errors, 0 warnings.
- BLOCKED BY ENVIRONMENT — `node tools/source-fetch-check.mjs --coverage
  research/frontier-31-batch-11.coverage.json --stamp --timeout-sec 30`:
  0/3 stamped.  All three source hosts failed `EAI_AGAIN`; no coverage stamp
  was written.
- BLOCKED BY ENVIRONMENT — `node tools/url-sweep.mjs --coverage
  research/frontier-31-batch-11.coverage.json --out
  /tmp/frontier-31-batch-11-url-liveness.json --recover --fail-on-dead`:
  0/3 live and 0 archive recoveries because curl could not resolve the same
  three hosts.  The liveness output is temporary and outside task artefacts.
- PASS — `node tools/validate-plan.mjs research/plan-spec.json`: the current
  pre-splice plan is acyclic with no unresolved asserted ids.  Its item-level
  report does not yet contain this manifest, as expected at beta scaffolding.

- The whole-plan validator cannot yet validate this pair's newly proposed items
  until the later authorised plan-splice stage inserts this manifest into
  `plan-spec.json`; the batch-local dependency and content-policy checks are
  the direct scaffold checks at this stage.
- Next action: retain the three browser-verified sources and their exact URLs;
  rerun the source-fetch stamper in a resolver-capable stage environment before
  accepting the mechanical source receipt.  The remaining local scaffold gates
  are clean.
