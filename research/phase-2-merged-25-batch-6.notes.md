# Batch 6 — Spectral Sequences

Run: phase-2-catchup-24. Role: beta. Step-5 status: all 51 assigned draft items and both draft pages authored, with completed proof contracts. See the Step-5 final receipt below for checks, provenance, and Alpha metadata reconciliation. Earlier scaffold/source-gate reports below are historical evidence, not the current authoring status.

## Authority, design reconciliation and inventory

Read CLAUDE.md, SCHEMA.md, WORKFLOW.md, README.md, beta task/contract, and frontier-dependency-ledger instructions. Checked the live .autopilot run and git history; concluded RESUME files were not treated as active instructions.

Read all three complete design sections: algebraic-topology §3.7 at L260; combinatorics-and-categories HA-6 at L3463; homological-algebra HA-15 at L3107–3270, together with the latter's indexing conventions. HA-15 controls the mathematics because it is the dedicated later homological-algebra design and matches the current plan's category, order and sole prerequisite. The current plan controls metadata: A spectral-sequences, order 365.065, homological-algebra, requires chain-complexes-and-homology; B spectral-sequences-examples, order 365.066, requires its A.

Conflicts retained explicitly: older HA-6 has order 321, category-theory placement and ext-and-tor prerequisite, and combines double complexes, exact couples, five-term extraction and Grothendieck constructions. These belong to later pairs in the current plan, especially double-complexes-exact-couples-and-convergence (HA-16). Its exhaustive/Hausdorff convergence shorthand is insufficient and is not adopted as a theorem. The topology sketch supplies warnings and later motivation, not additional topology prerequisites. HA-15's source pagination for Sharifi is stale: current PDF §4.1–4.2 is pp.87–92, not pp.77–83. Plan item arrays are empty placeholders; the manifest supplies the inventory for the authorized later splice, not an unauthorized plan edit.

Final inventory: 44 A items = all 36 numbered HA-15 items, all six false statements, and two needed local lemmas. Seven B items preserve the complete companion scope. A is below the 60-item limit. No extra prerequisite A/B pair is needed. All item IDs have explicit dependency arrays and provenance; IDs are unused in published items. The design's awkward differential ID suffix is retained for stability, but its statement explicitly gives (-r,r-1).

Added lem-spectral-sequence-subquotient-and-local-lifting-calculus first: normality, epic pullbacks, image lifting, quotient descent, second/third quotient formulas, modularity and naturality. Added lem-abelian-group-model-for-spectral-sequence-computations before the extension counterexample: a direct Ab model and the exact integer/cyclic-group interfaces used by examples. This makes the concrete model a proved prerequisite rather than assuming that a group definition proves Ab is abelian.

## Proof contract and dependency paths

Homological, increasing convention: n=p+q; A^r_{p,n}=F_p C_n intersect d_n^{-1}(F_{p-r}C_{n-1}); for r>=1, Z^r=A^r and B^r=A^{r-1}_{p-1,n}+d(A^{r-1}_{p+r-1,n+1}). At r=0 use Z^0=F_p, B^0=F_{p-1}. Thus E^r=Z^r/B^r and d^r has bidegree (-r,r-1). The unprojected B^r is not claimed to be nested; infinity uses the projected bar-Z/bar-B inside E^0. Meets/joins are conditional on existence; finite stationary values suffice for every convergence assertion.

The differential proof checks both denominator summands. For next-page homology, locally write dx=a+db and replace x by x-b; the numerator becomes A^{r+1}, the homology denominator A^r_{p-1}+d(A^r_{p+r}). The r=0 case is checked separately. Local representatives are morphisms after epic pullback, not element arguments in an arbitrary abelian category. The added lemma proves the required finite categorical calculus, with no embedding theorem or choice of a global lift.

For bounded convergence, fix p,n and choose r so F_{p-r}C_{n-1}=0 and F_{p+r-1}C_{n+1}=C_{n+1}. The stationary quotient is (F_p intersect ker d_n)/((F_{p-1} intersect ker d_n)+(F_p intersect im d_{n+1})). The earlier filtered-homology quotient lemma identifies this with gr_p H_n. Bounds may depend on n. No derived limits, completeness theorem, infinite-sum exactness, or unbounded convergence is imported.

Actual published supplier paths read and checked include:

- filtered complex/map -> def-subcomplex, def-chain-map -> def-chain-complex-in-an-abelian-category -> def-abelian-category. Degrees are lower homological indices and d lowers degree by one. Subobject maps are monic; restricted differentials are unique.
- associated graded -> lem-the-differential-descends-to-a-quotient-complex -> subcomplex, kernel/cokernel universal properties and d squared zero. Cokernel epic cancellation proves the square-zero quotient differential.
- image filtration and naturality -> thm-a-chain-map-induces-a-well-defined-map-on-homology -> lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries -> image factorization, normal monomorphisms and kernel universal properties. Boundaries factor through cycles by epic cancellation. prop-homology-respects-identities-and-composition uses unique quotient descent and the componentwise chain-map identities.
- categorical foundation -> def-additive-category/def-preadditive-category -> finite biproducts, canonical product/coproduct comparison, zero objects and bilinearity. def-image-and-coimage-in-a-category-with-kernels-and-cokernels -> kernels/coequalizers -> limits/cones, functors/naturality, categories. Canonical coimage-to-image existence uses epic cancellation and the kernel of coker f. Finite sums and intersections in the owned proof are constructed directly; no assertion of all-small completeness is used.
- associated-graded representative independence -> def-the-quotient-of-an-object-by-a-subobject -> subobject mutual-factorization equivalence and mono normality; inverse cokernel maps supply the owned well-definedness proof. The published quotient-order correspondence uses the library's stated order-preserving convention despite its old anti-isomorphism ID; this orientation is not used by the local proof.
- Ab model -> def-group-homomorphism, def-equivalence-relation, thm-int-ordered-ring thm-integers-modulo-n-basic-algebra and thm-division-algorithm-in-z. Kernels, coset cokernels, finite biproducts and canonical coimage/image comparison are proved explicitly in the helper. Division with remainder for the positive divisors 2 and 4 supplies the finite residue lists without a hidden cardinality assumption. Integer order supplies injectivity of multiplication by two; modular operations are the published congruence-class operations. This path avoids the published Ab theorem's all-small-limit and module route. The numeric prerequisites include integer representative independence, congruence equivalence/arithmetic, natural arithmetic and induction/recursion.

The page requires closure has 100 earlier pages. Direct owned external suppliers have homes inside it; no same-frontier batch supplies an owned dependency. Graph expansion was supplemented by body reading, not treated as semantic proof by ID resolution. Well-definedness backlinks (e.g. integer operations and their verification lemmas, subobject equivalence) are formula/verification pairs, not circular proof assumptions: the lemmas prove the displayed raw formula before invoking its quotient meaning. Orientation-only forward references in remarks were not promoted to proof dependencies. In particular the category-size remark's transfinite-recursion and Burali–Forti discussions do not supply the finite diagrams here; the definable-class clause is the relevant convention. No global choice, universes, or beyond-choice supplier is used. The foundations extension-boundary check was run separately.

Edges: first quadrant from page s>=2, normalized F_{-1}H=0 and F_nH_n=H_n. The two homological composites are E^s_{0,n}->F_0H_n->H_n and H_n->H_n/F_{n-1}H_n->E^s_{n,0}. Do not call the complete composites epic/monic. Single-column collapse requires s>=1; single-row collapse requires s>=2. Cohomological indices are (-p,-q), giving (r,1-r). The constant shift is explicitly sign-free translation, not an implicit signed triangulated shift.

Examples: two-step Z --2--> Z gives d^1=2; trivial filtration gives d^0=2 and collapse at E^1; generators in degrees 2 and 1 at filtration levels 2 and 0 give d^2 an isomorphism; edge composites are computed on E^2. Z/4 versus (Z/2)^2 exhibits the same two graded pieces and different exponents; a section of reduction modulo two cannot exist. Cochain reindexing sends (2,0)->(0,1) to (-2,0)->(0,-1). All computations are direct, with no classification or Ext theorem.

## Published findings for owner reconciliation

Supervisor update, 2026-09-09: all three findings below are now locally
repaired by root and recorded A-R in the canonical published-consumer ledger.
Finding 1 now explicitly applies published monomorphism normality, proves
epic cancellation and cokernel uniqueness, and has synchronized plan edges.
Finding 2 explicitly proves both correctly typed distributive laws. Finding 3
uses the published order-preserving convention. Targeted precheck/rendercheck
pass; no independent judgment or transitive closure audit is claimed.

No ledger write authority was granted. The following findings are recorded here for reconciliation; no published consumer was changed.

1. items/thm-third-isomorphism-theorem-in-an-abelian-category.md, proof 1.2: factoring a map into a subobject from vanishing modulo that subobject needs normality of the monomorphism, not a cokernel universal property. Repair supplier: already-published thm-every-monomorphism-is-the-kernel-of-its-cokernel, monomorphism clause. The owned next-page/convergence route would need this identity, so it is instead proved in lem-spectral-sequence-subquotient-and-local-lifting-calculus. No dependency on this published third-isomorphism theorem or on the modular theorem built from it is retained.
2. items/thm-the-opposite-of-a-preadditive-category-is-preadditive.md, proof 1.2: displayed composites are ill-typed for the given f,g:B->A and h:C->B. Repair directly: h^op composed with (f^op+g^op) equals ((f+g) composed with h)^op=(fh+gh)^op; the other law uses k:A->D and (kf+kg)^op. The result is true. The owned helper's epic normality and epic pullback are proved directly from the abelian comparison, bypassing this defective duality proof. Published homology uses only the monomorphism clause of normality, whose proof 1.1–2.1 is independent of the dual clause. This exact clause distinction, not co-residence, clears that path.
3. items/thm-the-quotient-is-independent-of-the-representing-monomorphism.md calls the correspondence order-anti-isomorphic, whereas the current supplier statement and chosen quotient order make it order-preserving. Its proof needs only equality of quotient classes, which remains valid; the owned proof constructs the inverse cokernel maps directly.

Removal justification: the initial helper declared published normality, epic-pullback and first-isomorphism theorems. The final helper replaces those uses by explicit direct derivations from def-abelian-category and the two elementary zero-kernel/cokernel propositions listed in its deps. This removes the actual proof use, not merely the graph edge. The published all-small-limit criterion, categorical member calculus, and Ab-as-Z-module machinery are not required after these local constructions. No defect in a later published consumer was used to block this supplier pair.

Cross-batch dependency input for the later authorized reviewer is the empty array: no owned page or item depends on another batch in this run. Step 3 must write its required empty input and refresh the ledger; this beta dispatch's three-file authority does not include that file.

## Sources and unresolved source gates

Coverage retains all sources and dispositions. Two independent treatments were read: Weibel's textbook chapter and Sharifi's full lecture-note set; Stacks 12.24 cross-checks construction/convergence, and Stacks 12.5 supplies the categorical checklist. Exact URLs, named locators, included/inline item IDs, deferred destinations and exclusion reasons are in coverage.json. The new Ab proof is a local verification against Definition 12.5.1, not a claim that Stacks Example 12.5.6 is an Ab example (it is the pullback formula).

Read the complete relevant text through the browser, not just snippets: Weibel §§5.1–5.2, §5.4 through Exercise 5.4.4, and Theorem 5.5.1 with its bounded-case proof; Sharifi §4.1 and §4.2 through the complete proof of 4.2.3; Stacks 12.24.1–11 and 12.5.1–15. Browser recovery succeeded at the original URLs after shell DNS failure. No screenshot inspection is claimed. Rotman was a suggested design source, not selected proof backing.

Source cautions: Sharifi 4.1.9 interchanges the complete/cocomplete labels for intersections/unions; 4.1.14 reverses decreasing finite endpoints; 4.1.16 overstates the complete edge composites; 4.2.3's differential-descent discussion needs the extra lower-filtration summand check. Stacks 12.24.11's prose degree near the upper vanishing bound must be n+1 in cochain notation. The manifest writes the corrected formulas and checks them independently. Weibel's narrower support-based collapse definition is translated explicitly to the design's all-later-differentials-zero convention. Infinite convergence and general completion invariance remain harvested with HA-16 destinations, not deleted.

Historical source-recovery record: the initial `source-fetch-check --stamp`
received `EAI_AGAIN` for all four active URLs. Its recorded recovery attempts
subsequently recovered full text for every source, and the Step-3 fix-pass
rerun verifies all four receipts. Shell `url-sweep` remains unable to resolve
the hosts, so `source-backing --require-verified` remains blocked when it is
given a fresh shell liveness file. That transport failure is not evidence of
open-web absence: the full texts are recorded and were reread. No
`source_resolution` drop or invented stamp was added. The remaining source
gate is a successful liveness sweep followed by source-backing, while the
present mathematics and sources are retained.

## Checks actually run

- Own manifest-deps: 51 items, zero errors, zero normalizations.
- Own content-policy --manifest-only: 51 items, zero errors/warnings.
- Own coverage-checklist --require-destination: 119 harvested entries, zero errors/warnings, after correcting the source-kind spelling to reference-work.
- validate-plan research/plan-spec.json: pass; existing redundant-requires warnings. This validates the current plan, whose owned item arrays await the later authorized splice.
- validate-plan on a temporary copy of the current plan with only the owned A/B inventories inserted: pass; no item cycles, forward references, B-page dependencies or unresolved IDs. The repository plan was not modified.
- extcheck: pass with existing published unproved warnings; no owned beyond-choice edge.
- Initial source-fetch-check --coverage ...batch-6.coverage.json --stamp:
  EAI_AGAIN at every URL; superseded by the recorded successful recovery and
  the 4/4 verified Step-3 rerun below.
- url-sweep final four-source coverage: FAIL, 0/4 live, curl error 6 (DNS). Earlier three-source --recover sweep also failed. These are network failures, not proof of missing full text.
- source-backing --require-verified: FAIL, 19 harvested included results reported without verified backing. No results were removed in response.
- Earlier whole-run manifest check passed; whole-run content-policy reported three missing IDs in other batches (def-algebra-of-sets, thm-lebesgue-measure-agrees-with-volume-on-boxes, thm-euclidean-domain-implies-pid). The later owned-only check isolates this batch and passes. No other batch was repaired.

No publication, build-driver transition, or claim of source-gate completion is made.

## Step-3 fix pass

### Alpha-c verdict, batch 6, sole `missing` entry (no formal finding ID assigned)

**Disposition: not rebutted; batch remains blocked on the authorized shared
scaffold repair.** The finding is structural, not a missing mathematical
supplier in this batch. The current manifest already contains the two exact
load-bearing lemmas in proof order, with explicit direct dependencies and
source dispositions:

- `lem-spectral-sequence-subquotient-and-local-lifting-calculus` is A-item 1.
  Its finite quotient, modularity, quotient-descent and local-epic-lifting
  proof uses only `def-abelian-category`,
  `prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero`,
  and `prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism`.
  It is the actual supplier for the associated-graded subquotient calculation,
  the `Z^r/B^r` construction, induced differentials, next-page identification,
  filtered-homology comparison, and bounded abutment; no defective published
  third-isomorphism, modularity, or opposite-category proof is used.
- `lem-abelian-group-model-for-spectral-sequence-computations` is A-item 34,
  immediately after the extension-problem definition and before the filtered
  abelian-group counterexample. Its `Ab`, `Z/2`, and `Z/4` model uses exactly
  `def-abelian-category`, `def-group-homomorphism`, `thm-int-ordered-ring`,
  `thm-integers-modulo-n-basic-algebra`, `def-equivalence-relation`, and
  `thm-division-algorithm-in-z`. It is the actual supplier for the extension
  counterexample, all six relevant false statements, and each B-page concrete
  computation. It assumes neither a representative-choice function nor an
  all-small-limits/module route.

I reread the immediate published interfaces and their hypotheses. In
particular, the abelian-category definition supplies finite biproducts,
kernels, cokernels and the coimage-to-image isomorphism; the two elementary
propositions supply the zero-kernel/cokernel cases used to derive normality and
epic cancellation. The integer and congruence interfaces supply the direct
finite residue calculations in the `Ab` model. There is no same-frontier
supplier: `phase-2-catchup-24-batch-6.cross-batch-dependencies.json` remains
the correct empty array. A declared-edge traversal is acyclic and has no path
to `deferred-set-theory-beyond-choice`; that catalogue is not a premise.

Source support was rechecked against the complete referenced texts: Weibel,
Chapter 5 Definition 5.2.1 and Bounded Convergence 5.2.5; Sharifi §§4.1–4.2;
Stacks 12.24, especially Lemma 12.24.11 for finite-filtration convergence; and
Stacks 12.5 Definition 12.5.1 and Lemmas 12.5.13–15 for the finite
abelian-category calculation. The coverage locators for Weibel and Stacks 12.5
were corrected to agree with their existing verified full-text fetch receipts;
no mathematical source, disposition, or claim changed.

**Unchanged external blocker and required repair:**
`research/plan-homological-algebra-track.md` still has no occurrence of either
helper ID and still describes HA-15 as a 42-item page; the current canonical
`research/plan-spec.json` A/B entries are still page-only (`items: []`). The
single authorized homological-algebra prose/plan writer must add the local
calculus before the filtration items, add the `Ab` helper immediately after the
extension-problem definition and before the counterexample, and synchronize the
complete reviewed 44-A/7-B inventory, dependencies and strategies. No new A/B
pair is needed, and this dispatch is expressly not authorized to edit those
shared plan files. The pair cannot clear Step 3 until that repair exists and is
rechecked against the unchanged manifest.

### Checks run in this fix pass

- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json`
  — pass: 691 items, 0 normalizations and 0 errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-catchup-24-batch-*.pages.json`
  — pass: 691 scoped items, 0 errors and 0 warnings.
- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-6.coverage.json --require-destination`
  — pass: 1 page, 119 harvested results, 0 errors and 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0. It still
  reports this pair among the plan pages whose item lists are not yet asserted;
  that mechanical pass does not repair the binding-inventory omission above.
- `node tools/extcheck.mjs --quiet` — exit 0 with 57 pre-existing published
  recorded-not-proved warnings; none concerns an owned batch-6 item or the
  reviewed proof paths.
- An item-level closure walk over every `deps`, `justified_by` and load-bearing
  `forward_refs` edge of the 51 owned roots resolved 781 items, with no missing
  ID and no path to `deferred-set-theory-beyond-choice`.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-6.coverage.json --stamp`
  — pass: 4/4 fetch-verified and 4/4 resolved, 0 newly stamped and 0 drops.
- `node tools/url-sweep.mjs --coverage research/phase-2-catchup-24-batch-6.coverage.json --out /tmp/phase-2-catchup-24-batch-6-step3-url-liveness.json --timeout-ms 22000 --fail-on-dead`
  — blocked by this shell's DNS: 0/4 live, each failure `curl (6) Could not
  resolve host`. The subsequent `source-backing.mjs --require-verified` against
  that temporary liveness report therefore reports 19 `backing-lost` results.
  This is a fresh transport failure, not evidence that a source disappeared:
  all four records retain verified full-text fetch receipts and no
  `source_resolution` drop was made. A successful liveness sweep and backing
  check remain an operational source-gate blocker.

## Step-5 authoring

Current dispatch: author-batch-6, 2026-09-10. All 51 item files initially absent. Current HA-15 at lines 3381–3562 includes the two helper amendments; the older inventory blocker is superseded. Latest independent Step-3 source gate remains recorded, not overridden. Homological increasing convention and finite-only abutment retained. Sources reread: Stacks 12.5.1, 12.5.11–15; 12.24.1–11; Weibel 5.2.1–8, 5.4.1–7 and bounded 5.5.1; retained Sharifi PDF sections 4.1–4.2 pp87–92. Browser succeeds for Stacks/Weibel; shell curl still fails DNS. No AC needed. Each following checkpoint records an authored item, not a judge decision. Checks remain pending until the final receipt.

### lem-spectral-sequence-subquotient-and-local-lifting-calculus

Authored claim/conventions: In an abelian category, finite sums of subobjects are images of biproduct maps, intersections and inverse images are pullbacks. For subobjects $U,V,W\subseteq X$ there are canonical isomorphisms
$$ (U+V)/V\cong U/(U\cap V),\qquad (X/V)/(U/V)\cong X/U\quad(V\subseteq U). $$
If $U\subseteq W$, then $W\cap(U+V)=U+(W\cap V)$. A map preserving a numerator and denominator induces a unique quotient map. A map into $\operatorname{im}f$ lifts through $f$ after an epimorphism onto its domain. Equality and factorization through a subobject can be tested after that epimorphism. These constructions are natural for maps preserving the displayed data.

Sources: [Stacks, §12.5](https://stacks.math.columbia.edu/tag/00ZX), Definition 12.5.1 and Lemmas 12.5.11–15. The finite categorical argument below is supplied locally.

Dependencies: def-abelian-category, prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero, prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-increasing-and-decreasing-filtration-of-an-object

Authored claim/conventions: Let $A$ be an object of an abelian category. An **increasing filtration** is a specified family of subobjects $F_pA\subseteq A$, $p\in\mathbb Z$, with $F_pA\subseteq F_{p+1}A$. A **decreasing filtration** satisfies $F^{p+1}A\subseteq F^pA$. The translation on the same object is $F^pA=F_{-p}A$; translating back gives $F_pA=F^{-p}A$. A filtration-preserving morphism $f:A\to B$ factors on each piece as $F_pA\to F_pB\hookrightarrow B$ (or with upper indices). The restrictions are unique because the inclusions are monic. The ambient setting is [[def-abelian-category]].

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: def-abelian-category. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-exhaustive-separated-bounded-and-finite-filtration

Authored claim/conventions: For an increasing filtration as in [[def-increasing-and-decreasing-filtration-of-an-object]], **exhaustive** means $\bigvee_{p\in\mathbb Z}F_pA=A$ and **separated** means $\bigwedge_{p\in\mathbb Z}F_pA=0$, when those joins and meets exist in the subobject order. In modules these are the usual union and intersection. A filtration is **bounded below** if $F_aA=0$ for some $a$, **bounded above** if $F_bA=A$ for some $b$, and **finite** if both hold; the witnesses may be enlarged to give $a<b$. Thus finite does not require distinct consecutive subobjects.

For a complex, **degreewise bounded** means $F_{a_n}C_n=0$ and $F_{b_n}C_n=C_n$ for each $n$, with bounds permitted to depend on $n$; **uniformly bounded** requires the same bounds for all degrees. For decreasing filtrations finite means $F^aA=A$ and $F^bA=0$ for $a<b$. For orientation only, completeness means that the canonical map $A\to\varprojlim_{p\to-\infty}A/F_pA$ is an isomorphism, when that inverse limit exists. No assertion about convergence of an unbounded spectral sequence is part of these definitions.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90. Sharifi 4.1.14 reverses the decreasing endpoints in its prose; the endpoints above agree with its Definition 4.2.1(b).

Dependencies: def-increasing-and-decreasing-filtration-of-an-object. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-associated-graded-object-of-a-filtered-object

Authored claim/conventions: For an increasing filtration, the **associated graded object** is the indexed family
$$\operatorname{gr}^F_pA=\operatorname{coker}(F_{p-1}A\hookrightarrow F_pA)=F_pA/F_{p-1}A\quad(p\in\mathbb Z).$$
For a decreasing filtration it is $\operatorname{gr}^p_FA=F^pA/F^{p+1}A$. Here the inclusions come from [[def-increasing-and-decreasing-filtration-of-an-object]], and quotient means [[def-the-quotient-of-an-object-by-a-subobject]]. This definition uses a family; it assumes no infinite direct sum. With $F^p=F_{-p}$, the decreasing piece at $p$ is the increasing piece at $-p$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: def-increasing-and-decreasing-filtration-of-an-object, def-the-quotient-of-an-object-by-a-subobject. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### lem-associated-graded-quotients-are-well-defined-subquotients

Authored claim/conventions: The associated graded quotients of a filtered object exist as subquotients of the ambient object, independently up to unique compatible isomorphism of the monomorphisms representing its subobjects.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: def-associated-graded-object-of-a-filtered-object, lem-spectral-sequence-subquotient-and-local-lifting-calculus. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-filtered-chain-complex

Authored claim/conventions: A **filtered chain complex** $(C,d,F)$ in an abelian category is a chain complex with increasing filtrations $F_pC_n\subseteq C_n$ for all $n$, whose pieces form subcomplexes. Explicitly $d_n$ factors as $F_pC_n\to F_pC_{n-1}$ on each piece. These restrictions square to zero since their composites with the monic inclusion into $C_{n-2}$ are $d_{n-1}d_n=0$. The conventions are [[def-increasing-and-decreasing-filtration-of-an-object]] and [[def-subcomplex]]. Thus, in modules, the condition is exactly $d_n(F_pC_n)\subseteq F_pC_{n-1}$; a factorization implies the inclusion, and the inclusion defines the restricted function. No finite-bound hypothesis is implicit.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: def-increasing-and-decreasing-filtration-of-an-object, def-subcomplex. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-filtered-chain-map

Authored claim/conventions: A **filtered chain map** $f:(C,d,F)\to(D,\partial,F)$ is a chain map satisfying $\partial_nf_n=f_{n-1}d_n$ such that $f_n$ restricts to $F_pC_n\to F_pD_n$ for every $p,n\in\mathbb Z$. Here filtered complex means [[def-filtered-chain-complex]] and chain map means [[def-chain-map]]. The restrictions are unique. The identity preserves each piece; if $f$ and $g$ preserve pieces, then $(gf)(F_pC_n)\subseteq g(F_pD_n)\subseteq F_pE_n$, so their composite does too.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: def-filtered-chain-complex, def-chain-map. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex

Authored claim/conventions: The family $\operatorname{gr}^F_pC_{p+q}$ of a filtered chain complex has a differential $d^0$ of bidegree $(0,-1)$ satisfying $(d^0)^2=0$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: lem-associated-graded-quotients-are-well-defined-subquotients, def-filtered-chain-complex, lem-the-differential-descends-to-a-quotient-complex. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-induced-filtration-on-homology

Authored claim/conventions: For a filtered chain complex, the **induced filtration on homology** is
$$F_pH_n(C)=\operatorname{im}\bigl(H_n(F_pC)\longrightarrow H_n(C)\bigr).$$
The arrow is induced by the inclusion chain map from [[def-filtered-chain-complex]], using [[thm-a-chain-map-induces-a-well-defined-map-on-homology]]. Since $F_{p-1}C\to C$ factors through $F_pC$, functoriality in [[prop-homology-respects-identities-and-composition]] shows that its homology image is contained in $F_pH_n(C)$. Thus this is an increasing family of subobjects of $H_n(C)$. The domain $H_n(F_pC)$ of the arrow need not embed into $H_n(C)$.

Sources: [Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), Definition 12.24.5; Weibel §5.5 p.135.

Dependencies: def-filtered-chain-complex, thm-a-chain-map-induces-a-well-defined-map-on-homology, prop-homology-respects-identities-and-composition. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data

Authored claim/conventions: Put $Z_n=\ker d_n$, $D_n=\operatorname{im}d_{n+1}$ and $P_p=F_pC_n\cap Z_n$. Then the induced homology filtration satisfies
$$\operatorname{gr}^F_pH_n(C)\cong \frac{P_p}{P_{p-1}+(F_pC_n\cap D_n)}.$$
The isomorphism is induced by the cycle quotient $Z_n\to H_n(C)$ and is natural for filtered chain maps.

Sources: [Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), equations 12.24.5.1–12.24.5.2; the omitted intermediate quotient calculation is proved here.

Dependencies: def-induced-filtration-on-homology, lem-spectral-sequence-subquotient-and-local-lifting-calculus. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex

Authored claim/conventions: For a filtered chain complex as in [[def-filtered-chain-complex]], put $n=p+q$ and, for $r\ge0$,
$$A^r_{p,n}=F_pC_n\cap d_n^{-1}(F_{p-r}C_{n-1}).$$
Inverse images and intersections are the pullbacks of [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]]. Since $d$ preserves $F$, $A^0_{p,n}=F_pC_n$. For $r\ge1$ define the subobjects
$$Z^r_{p,q}=A^r_{p,n},\qquad B^r_{p,q}=A^{r-1}_{p-1,n}+d_{n+1}(A^{r-1}_{p+r-1,n+1}).$$
The image in the second summand lies in $F_pC_n$ since $(p+r-1)-(r-1)=p$. Separately set $Z^0_{p,q}=F_pC_n$, $B^0_{p,q}=F_{p-1}C_n$. The symbols $B^r$ include lower-filtration approximate cycles, not just actual boundaries.

For comparison with projected conventions, let $\bar Z^r_{p,q}$ and $\bar B^r_{p,q}$ be the images of $A^r_{p,n}$ and $d(A^{r-1}_{p+r-1,n+1})$ in $\operatorname{gr}_pC_n$ for $r\ge1$; set $\bar Z^0=\operatorname{gr}_pC_n$ and $\bar B^0=0$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: def-filtered-chain-complex, lem-spectral-sequence-subquotient-and-local-lifting-calculus. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### lem-r-boundaries-embed-in-r-cycles

Authored claim/conventions: For every filtered chain complex, $B^r_{p,q}\subseteq Z^r_{p,q}$ for all $p,q\in\mathbb Z$ and $r\ge0$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-r-page-of-the-spectral-sequence-of-a-filtered-complex

Authored claim/conventions: The **$r$-page** of a filtered complex is the family
$$E^r_{p,q}=Z^r_{p,q}/B^r_{p,q}\quad(r\ge0),$$
with the conventions of [[def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex]]. The quotient is licensed by [[lem-r-boundaries-embed-in-r-cycles]]. In particular $E^0_{p,q}=F_pC_{p+q}/F_{p-1}C_{p+q}$.

For $r\ge1$ this is canonically $\bar Z^r_{p,q}/\bar B^r_{p,q}$: the kernel of $A^r_{p,n}\to\operatorname{gr}_pC_n$ is
$$A^r_{p,n}\cap F_{p-1}C_n=A^{r-1}_{p-1,n},$$
since $(p-1)-(r-1)=p-r$. The image of the remaining denominator summand is exactly $\bar B^r$; nested quotients in [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] give the comparison.

The formula uses only a finite filtration window at each position. More precisely, fix $k\ge0$ and $0\le r\le k$. The filtered complex $F_{p+k}C/F_{p-k-1}C$, with the induced filtration, gives canonically the same $E^r_{p,q}$. Indeed the numerator test uses levels $p,p-r\ge p-k$, and the denominator uses levels $p-1,p+r-1\le p+k$. The removed subcomplex has level $p-k-1$ below every test level, and its contribution in degree $n$ lies in $A^{r-1}_{p-1,n}$ when $r\ge1$, because its differential stays at level $p-k-1\le p-r$. Thus inverse-image tests and the final quotient are unchanged; for $r=0$ this is directly the nested quotient $F_p/F_{p-1}$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex, lem-r-boundaries-embed-in-r-cycles, lem-spectral-sequence-subquotient-and-local-lifting-calculus. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### lem-the-filtered-differential-induces-d-r-on-the-r-page

Authored claim/conventions: For each $r\ge0$, the filtered differential induces a morphism
$$d^r:E^r_{p,q}\longrightarrow E^r_{p-r,q+r-1}$$
characterized on local representatives by $[x]\mapsto[d_nx]$, where $n=p+q$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: def-r-page-of-the-spectral-sequence-of-a-filtered-complex, prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex, lem-spectral-sequence-subquotient-and-local-lifting-calculus. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### prop-the-rth-differential-has-bidegree-minus-r-r-minus-one

Authored claim/conventions: In the homological convention the $r$th differential has bidegree $(-r,r-1)$ and total degree $-1$. The stable item ID is retained; its verbal suffix does not specify the sign convention.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: lem-the-filtered-differential-induces-d-r-on-the-r-page. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### lem-the-rth-differential-squares-to-zero

Authored claim/conventions: For every $r\ge0$ the page differential satisfies $(d^r)^2=0$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: lem-the-filtered-differential-induces-d-r-on-the-r-page. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### thm-the-next-page-is-the-homology-of-the-current-page

Authored claim/conventions: For the pages of a filtered complex there is a specified natural isomorphism
$$\alpha_r:H(E^r,d^r)_{p,q}\xrightarrow{\sim}E^{r+1}_{p,q}\qquad(r\ge0).$$
The homology at $(p,q)$ uses the incoming map from $(p+r,q-r+1)$ and outgoing map to $(p-r,q+r-1)$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: def-r-page-of-the-spectral-sequence-of-a-filtered-complex, lem-the-filtered-differential-induces-d-r-on-the-r-page, lem-the-rth-differential-squares-to-zero, lem-spectral-sequence-subquotient-and-local-lifting-calculus, def-homology-object-of-a-chain-complex. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### prop-e-zero-is-the-associated-graded-complex

Authored claim/conventions: In the specified quotient model, $(E^0,d^0)$ is the associated graded complex: $E^0_{p,q}=\operatorname{gr}_pC_{p+q}$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: def-r-page-of-the-spectral-sequence-of-a-filtered-complex, prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### prop-e-one-is-homology-of-the-associated-graded-complex

Authored claim/conventions: There is a canonical isomorphism $E^1_{p,q}\cong H_{p+q}(\operatorname{gr}^F_pC)$, inverse to the specified initial next-page map. If $d(F_pC_n)\subseteq F_{p-1}C_{n-1}$ for all $p,n$, then $E^1_{p,q}\cong\operatorname{gr}_pC_{p+q}$ and $d^1$ is the map between these graded objects induced by $d$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

The lowering-hypothesis clause is the increasing homological translation of [Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), Lemma 12.24.3(2). The proof here is componentwise and requires no countable direct sum.

Dependencies: thm-the-next-page-is-the-homology-of-the-current-page, prop-e-zero-is-the-associated-graded-complex, lem-the-filtered-differential-induces-d-r-on-the-r-page. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-limiting-cycles-boundaries-and-e-infinity

Authored claim/conventions: Use the projected cycle and boundary subobjects in the $E^0$ model of [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]. They satisfy
$$\bar B^r\subseteq\bar B^{r+1}\subseteq\bar Z^{r+1}\subseteq\bar Z^r\subseteq E^0.$$
Indeed $A^{r+1}_{p,n}\subseteq A^r_{p,n}$; the actual boundary numerator is $F_pC_n\cap d(F_{p+r-1}C_{n+1})$, which increases with r, and every such actual boundary is a cycle for every page. The r=0 values are $\bar B^0=0$, $\bar Z^0=E^0$.

Only when the indicated join and meet exist as subobjects, define
$$\bar Z^\infty=\bigwedge_{r\ge0}\bar Z^r,\qquad \bar B^\infty=\bigvee_{r\ge0}\bar B^r,\qquad E^\infty=\bar Z^\infty/\bar B^\infty.$$
The boundary join lies in each cycle subobject because actual boundaries have differential zero, so the quotient is meaningful. When both families are eventually stationary, their eventual values supply the meet and join. This notation asserts no unbounded abutment. The unprojected denominators $B^r$ are not asserted to be nested.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here. Compare [Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), formulas preceding Lemma 12.24.2 and Lemma 12.24.6.

Dependencies: def-r-page-of-the-spectral-sequence-of-a-filtered-complex. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-homological-spectral-sequence

Authored claim/conventions: A **homological spectral sequence** in an abelian category ([[def-abelian-category]]), starting at a specified integer $r_0\ge0$, consists of objects $E^r_{p,q}$, maps
$$d^r_{p,q}:E^r_{p,q}\to E^r_{p-r,q+r-1},\qquad d^rd^r=0,$$
for r≥r₀ and p,q∈ℤ, and specified isomorphisms
$$\alpha_r:\frac{\ker(d^r_{p,q})}{\operatorname{im}(d^r_{p+r,q-r+1})}\xrightarrow{\sim}E^{r+1}_{p,q}.$$
The quotient has the meaning of [[def-homology-object-of-a-chain-complex]]; no direct sum of the whole family is assumed. The isomorphisms are data. **First quadrant** means the initial page vanishes unless p,q≥0; **third quadrant** means it vanishes unless p,q≤0. **Bounded** means that for each integer n only finitely many initial-page terms with p+q=n are nonzero. These support conditions persist because later terms are subquotients of earlier ones.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: def-abelian-category, def-homology-object-of-a-chain-complex. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-cohomological-spectral-sequence

Authored claim/conventions: A **cohomological spectral sequence** has objects $E_r^{p,q}$ for r≥r₀≥0 and square-zero maps
$$d_r:E_r^{p,q}\to E_r^{p+r,q-r+1},$$
with specified isomorphisms $H(E_r,d_r)^{p,q}\to E_{r+1}^{p,q}$. Its total degree is p+q, raised by one by d. Equivalently it is a [[def-homological-spectral-sequence]] under $E_r^{p,q}=E^r_{-p,-q}$: negating the target indices $(-p-r,-q+r-1)$ gives $(p+r,q-r+1)$. Negating again recovers the homological sequence, including its transition data.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: def-homological-spectral-sequence. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-morphism-of-spectral-sequences

Authored claim/conventions: A **morphism of spectral sequences from page s** is a family of bidegree (0,0) maps $f_r:E^r\to D^r$ for r≥s, where both sequences are defined, such that $d_D^rf_r=f_rd_E^r$ and
$$f_{r+1}\alpha_r^E=\alpha_r^D H(f_r).$$
Use [[def-homological-spectral-sequence]] or [[def-cohomological-spectral-sequence]] as appropriate; the map on homology is the unique cycle-quotient map of [[thm-a-chain-map-induces-a-well-defined-map-on-homology]]. A map of abutments is additional filtered data, compatible with the stable graded maps; it is not inherent in f.

If $f_s$ is an isomorphism at every bidegree, all later $f_r$ are isomorphisms. In fact the inverse of $f_s$ commutes with differentials by multiplying the commutation equation on both sides by inverses. Thus $f_s$ and its inverse carry kernels and boundary images into each other and induce inverse quotient maps on homology. The displayed compatibility expresses $f_{s+1}$ as a composite of three isomorphisms. Repeating this argument a finite number of times proves the assertion at every r≥s.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90. Mapping Lemma 5.2.4 and Sharifi Lemma 4.1.4.

Dependencies: def-homological-spectral-sequence, def-cohomological-spectral-sequence, thm-a-chain-map-induces-a-well-defined-map-on-homology. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences

Authored claim/conventions: Every filtered chain map induces a morphism of spectral sequences from page zero, respecting identities and composition. If its map on some page $s$ is an isomorphism in every bidegree, it is an isomorphism on every later page and on $E^\infty$ whenever the defining limiting subobjects exist.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here. Compare [Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), Lemma 12.24.4.

The infinity clause supplies the promised argument for [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Exercise 5.2.3, printed p.125; existence of the limiting subobjects is explicit, as in the warning preceding that exercise.

Dependencies: def-filtered-chain-map, thm-the-next-page-is-the-homology-of-the-current-page, def-morphism-of-spectral-sequences, lem-spectral-sequence-subquotient-and-local-lifting-calculus, def-limiting-cycles-boundaries-and-e-infinity, def-r-page-of-the-spectral-sequence-of-a-filtered-complex. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-spectral-sequence-stabilization-at-a-bidegree

Authored claim/conventions: A [[def-homological-spectral-sequence]] **stabilizes at $(p,q)$** if there is R such that for every r≥R both the incoming and outgoing differentials at that position are zero. Then their homology quotient is canonically $E^r_{p,q}$, and α supplies identifications with every subsequent term. Isomorphism of the underlying objects alone does not assert this vanishing.

For an abstract sequence, its terms can be represented as nested subquotients of the initial term at each position. Start with $Z_{r_0}=E^{r_0}_{p,q}$ and $B_{r_0}=0$. Given the quotient $Z_r\twoheadrightarrow Z_r/B_r\cong E^r_{p,q}$, define $Z_{r+1}$ as the inverse image of the outgoing kernel and $B_{r+1}$ as the inverse image of the incoming image. Square zero puts $B_r\subseteq B_{r+1}\subseteq Z_{r+1}\subseteq Z_r$. The transition α identifies $Z_{r+1}/B_{r+1}$ with $E^{r+1}_{p,q}$. When both differentials vanish, these inverse images are respectively $Z_r$ and $B_r$, so stabilization makes both families stationary. Their eventual quotient is denoted $E^\infty_{p,q}$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: def-homological-spectral-sequence. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-collapse-at-a-page

Authored claim/conventions: A spectral sequence **collapses at $E^s$** if every differential at every bidegree is zero for every r≥s. The specified transitions then identify $E^s$ with the stable page of [[def-spectral-sequence-stabilization-at-a-bidegree]]. One zero differential does not meet this definition. Pointwise stabilization with no uniform bound R(p,q) also does not imply collapse at any fixed page. We use the same definition with subscripts in the cohomological convention.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90. The all-later-differentials convention follows Sharifi Definition 4.1.13; Weibel Definition 5.2.7 uses the narrower one-row/column terminology.

Dependencies: def-spectral-sequence-stabilization-at-a-bidegree. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### prop-degree-reasons-force-stabilization-in-a-bounded-region

Authored claim/conventions: A bounded spectral sequence stabilizes at each bidegree. In particular first- and third-quadrant spectral sequences stabilize pointwise. If the initial support is globally finite, there is a uniform collapse page.

Here regular means eventual vanishing of the outgoing differential at each position, and coregular means eventual vanishing of the incoming differential. These conditions are respectively equivalent to eventual stationarity of the nested cycle and boundary subobjects in the initial page. In the homological convention, bounded below means each diagonal has support bounded below in its first coordinate; bounded above means support bounded above. Boundedness is equivalent to having both bounds. Bounded below implies regular; bounded above implies coregular. The cohomological versions follow by reversing both coordinates, so their named support directions are reversed.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Regular/coregular conventions and equivalences: [Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), Definition 12.24.7 and Lemma 12.24.8, translated to increasing homological coordinates; all implications are proved above.

Dependencies: def-spectral-sequence-stabilization-at-a-bidegree. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### prop-a-spectral-sequence-supported-in-one-row-or-column-collapses

Authored claim/conventions: In homological or cohomological indexing, support in one column at page s≥1 forces collapse at that page. Support in one row at page s≥2 forces collapse there.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: def-collapse-at-a-page, prop-degree-reasons-force-stabilization-in-a-bounded-region. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-abutment-to-a-filtered-object

Authored claim/conventions: An **abutment to a filtered family** $H_n$ consists of specified isomorphisms
$$E^\infty_{p,q}\xrightarrow{\sim}\operatorname{gr}^F_pH_{p+q}=F_pH_{p+q}/F_{p-1}H_{p+q}.$$
Use [[def-associated-graded-object-of-a-filtered-object]] for the graded pieces, and [[def-limiting-cycles-boundaries-and-e-infinity]] or [[def-spectral-sequence-stabilization-at-a-bidegree]] for the stable terms. On this page every asserted convergence has a finite filtration in each total degree. In particular it is exhaustive and separated. The associated graded family is not identified with the unfiltered target. A morphism of abutments is a filtered map on the $H_n$ whose maps on these quotients agree with the stable-page maps under the specified identifications. For decreasing cohomological filtrations replace the quotient by $F^pH^{p+q}/F^{p+1}H^{p+q}$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: def-associated-graded-object-of-a-filtered-object, def-limiting-cycles-boundaries-and-e-infinity, def-spectral-sequence-stabilization-at-a-bidegree. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology

Authored claim/conventions: If the filtration on every $C_n$ is finite, the spectral sequence of the filtered chain complex stabilizes pointwise and naturally abuts to $H_n(C)$ with its image filtration. This homology filtration is finite, exhaustive and separated. No uniform filtration bound in n is required.

Sources: [Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), Lemma 12.24.11 and equations 12.24.5.1–2; [Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), bounded case of Theorem 5.5.1 pp.135–136. The chain proof explicitly uses degrees n−1 and n+1; no unbounded convergence clause is used.

Dependencies: def-exhaustive-separated-bounded-and-finite-filtration, lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data, thm-the-next-page-is-the-homology-of-the-current-page, def-limiting-cycles-boundaries-and-e-infinity, prop-degree-reasons-force-stabilization-in-a-bounded-region, def-abutment-to-a-filtered-object, lem-spectral-sequence-subquotient-and-local-lifting-calculus. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence

Authored claim/conventions: Let a homological spectral sequence be first quadrant from page s≥2, with finite abutment data as in [[def-abutment-to-a-filtered-object]], normalized by $F_{-1}H_n=0$ and $F_nH_n=H_n$ for n≥0. By [[prop-degree-reasons-force-stabilization-in-a-bounded-region]] the axis terms stabilize. The **edge maps** are the composites
$$E^s_{0,n}\twoheadrightarrow E^\infty_{0,n}\cong F_0H_n\hookrightarrow H_n,$$
$$H_n\twoheadrightarrow H_n/F_{n-1}H_n\cong E^\infty_{n,0}\hookrightarrow E^s_{n,0}.$$
The first surjection is obtained by composing the finitely many transition quotient maps on the vertical axis: every outgoing differential there lands at negative first coordinate. On the horizontal axis, every incoming source has second coordinate $1-r<0$, so the transitions identify successive kernels as subobjects; their composite gives the second inclusion. Further stationary transitions do not change these maps.

For cohomological first-quadrant indexing, normalize $F^0H^n=H^n$ and $F^{n+1}H^n=0$. The analogous arrows are $E_s^{n,0}\to H^n$ through $F^nH^n$, and $H^n\to E_s^{0,n}$ through $H^n/F^1H^n$. Neither the first whole-target map is necessarily epic nor the second monic: for example, in an abelian category with a supplied nonzero object $M$, with page terms fixed equal to $M$ at (0,1) and (1,0), zero elsewhere and zero differentials, the abutment $H_1=M\oplus M$ filtered by its first summand has edges the summand inclusion and the other summand projection. These respectively miss the second summand and kill the first.

Sources: [Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Example 5.2.6 p.124. The whole-target epic/monic claims in Sharifi Remark 4.1.16 are not used.

Dependencies: def-abutment-to-a-filtered-object, prop-degree-reasons-force-stabilization-in-a-bounded-region. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### lem-edge-homomorphisms-are-natural

Authored claim/conventions: Edge maps commute with compatible morphisms of spectral sequences and filtered abutments. In particular this holds for filtered chain maps of degreewise finitely filtered complexes satisfying the first-quadrant and endpoint hypotheses.

Sources: [Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Example 5.2.6 and naturality in Theorem 5.5.1; the commuting squares are proved here.

Dependencies: def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence, def-morphism-of-spectral-sequences, prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### def-extension-problem-of-a-convergent-spectral-sequence

Authored claim/conventions: For the abutment data of [[def-abutment-to-a-filtered-object]], the **extension problem** is reconstructing the filtered $H_n$ from its successive pieces $\operatorname{gr}_pH_n$. Each step has a subobject and quotient
$$0\longrightarrow F_{p-1}H_n\longrightarrow F_pH_n\longrightarrow\operatorname{gr}_pH_n\longrightarrow0.$$
Specifying the two outside objects does not specify the middle one or the maps. A splitting would supply a section of the quotient map and an identification with the direct sum compatible with the subobject. Neither collapse nor a list of graded pieces supplies such sections. The one-jump case has no nontrivial extension between two nonzero pieces.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: def-abutment-to-a-filtered-object. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### lem-abelian-group-model-for-spectral-sequence-computations

Authored claim/conventions: Abelian groups and homomorphisms form an abelian category. Kernels and images are the ordinary subgroup kernels and images, and cokernels are coset quotients. In particular $\mathbb Z$, $\mathbb Z/2$, $\mathbb Z/4$ and their finite products are legitimate objects for filtered-complex computations. Multiplication by 2 on $\mathbb Z$ is injective with cokernel $\mathbb Z/2$.

Sources: [Stacks, §12.5](https://stacks.math.columbia.edu/tag/00ZX), Definition 12.5.1 and Lemmas 12.5.11–15. The finite categorical argument below is supplied locally.

Dependencies: def-abelian-category, def-group-homomorphism, thm-int-ordered-ring, thm-integers-modulo-n-basic-algebra, def-equivalence-relation, thm-division-algorithm-in-z. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects

Authored claim/conventions: The assertion “isomorphic associated graded objects imply isomorphic filtered objects” is false. Let A=ℤ/4 and B=(ℤ/2)². Set $F_pA=F_pB=0$ for p<0, $F_0A=\{0,2\}$, $F_0B=(\mathbb Z/2)\times0$, and $F_pA=A$, $F_pB=B$ for p≥1. These filtered objects have isomorphic graded families and nonisomorphic underlying groups.

Sources: [Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 bounded abutment and extension interpretation; the two finite-group filtrations and all quotient calculations are supplied explicitly here.

Dependencies: def-associated-graded-object-of-a-filtered-object, lem-abelian-group-model-for-spectral-sequence-computations. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### prop-collapse-does-not-in-general-split-the-abutment

Authored claim/conventions: Collapse does not in general split the filtered abutment.

Sources: [Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.123–124; the nonsplitting witness is computed here.

Dependencies: cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, def-collapse-at-a-page, def-extension-problem-of-a-convergent-spectral-sequence, def-zero-and-stalk-complex, def-r-page-of-the-spectral-sequence-of-a-filtered-complex, lem-the-filtered-differential-induces-d-r-on-the-r-page. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### thm-the-cohomological-filtered-complex-construction

Authored claim/conventions: Let K be a cochain complex with decreasing filtration by subcomplexes. Set $C_n=K^{-n}$, $F_pC_n=F^{-p}K^{-n}$ and $d_n=d_K^{-n}$. Then
$$E_r^{p,q}(K)=E^r_{-p,-q}(C),\qquad d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}.$$
The construction gives $E_0^{p,q}=\operatorname{gr}^p K^{p+q}$ and $E_1^{p,q}\cong H^{p+q}(\operatorname{gr}^p K)$. With degreewise finite filtration it naturally abuts to the decreasing image filtration on $H^{p+q}(K)$, with $E_\infty^{p,q}\cong\operatorname{gr}^pH^{p+q}(K)$.

Sources: [Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Definition 5.2.3 p.123; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3 pp.91–92.

Dependencies: def-cohomological-spectral-sequence, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences, def-cochain-complex-in-an-abelian-category, prop-e-zero-is-the-associated-graded-complex, prop-e-one-is-homology-of-the-associated-graded-complex. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### prop-shifting-a-filtered-complex-reindexes-its-spectral-sequence

Authored claim/conventions: For integers a,b define $D_n=C_{n-a}$, $d_D=d_C$, and $G_pD_n=F_{p-b}C_{n-a}$. Then
$$E^r_{p,q}(D,G)\cong E^r_{p-b,q+b-a}(C,F)$$
canonically, with equality when the same quotient models are used. This identification commutes with differentials and next-page maps and identifies the finite filtered abutments. This is a sign-free degree translation, not the signed triangulated shift.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here. The sign-free degree/filtration translation here is distinguished from the décalage of Weibel Exercise 5.4.3.

Dependencies: thm-the-next-page-is-the-homology-of-the-current-page, prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, def-r-page-of-the-spectral-sequence-of-a-filtered-complex. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### fs-e-infinity-is-the-abutment-object

Authored claim/conventions: It is false that $E^\infty$ is the abutment itself, without extension data.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: def-abutment-to-a-filtered-object, cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects, def-homological-spectral-sequence. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### fs-e-r-plus-one-is-literally-equal-to-the-homology-of-e-r

Authored claim/conventions: It is false that literal equality $E^{r+1}=H(E^r)$ is required in the definition of a spectral sequence.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: def-homological-spectral-sequence, lem-abelian-group-model-for-spectral-sequence-computations. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### fs-a-spectral-sequence-collapses-when-one-differential-is-zero

Authored claim/conventions: It is false that the vanishing of a single differential $d^s$ implies collapse at $E^s$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: def-collapse-at-a-page, def-r-page-of-the-spectral-sequence-of-a-filtered-complex, lem-the-filtered-differential-induces-d-r-on-the-r-page, lem-abelian-group-model-for-spectral-sequence-computations. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### fs-collapse-solves-all-extension-problems

Authored claim/conventions: It is false that collapse solves all extension problems of a spectral sequence.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: prop-collapse-does-not-in-general-split-the-abutment. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### fs-the-filtration-on-homology-is-h-n-of-the-filtered-subcomplex

Authored claim/conventions: It is false that $F_pH_n(C)$ is always $H_n(F_pC)$, or that the latter always embeds into $H_n(C)$.

Sources: [Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), Definition 12.24.5; the identity-complex counterexample is calculated here.

Dependencies: def-induced-filtration-on-homology, lem-abelian-group-model-for-spectral-sequence-computations. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### fs-e-zero-and-e-one-page-conventions-are-universal-across-sources

Authored claim/conventions: It is false that the labels $E_0$ and $E_1$ have universal meanings independent of the construction convention. In particular the initial object of a homology exact-couple iteration can be called generic page zero even though its filtration-normalized label is page one.

Sources: [Vitolo, corrected author version](https://poincare.unisalento.it/vitolo/vitolo_files/publications/journals/6a_VsComp.pdf), Appendix B pp.31–35, especially the iteration before Proposition 8.2 p.33 and Theorem 8.1 p.35; [Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Example 5.9.3 and Theorem 5.9.4 pp.155–156. Only the numbering conventions are used externally; the zero-couple calculation is proved locally.

Dependencies: prop-e-zero-is-the-associated-graded-complex, prop-e-one-is-homology-of-the-associated-graded-complex, def-homological-spectral-sequence, lem-abelian-group-model-for-spectral-sequence-computations. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### ex-the-two-step-filtration-and-its-spectral-sequence

Authored claim/conventions: Let $C_1=ℤx$, $C_0=ℤy$, d(x)=2y, and all other terms be zero. Give y filtration degree 0 and x degree 1. Thus $F_pC=0$ for p<0, $F_0C$ is the degree-zero stalk, and $F_pC=C$ for p≥1. The two-step filtration has $E^0=E^1$ supported at (1,0),(0,0), with $d^1$ multiplication by 2, and $E^2=E^\infty$ supported at (0,0) with group ℤ/2.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: def-r-page-of-the-spectral-sequence-of-a-filtered-complex, lem-the-filtered-differential-induces-d-r-on-the-r-page, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, lem-abelian-group-model-for-spectral-sequence-computations. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### ex-a-filtered-complex-collapsing-at-e-one

Authored claim/conventions: Let $C_1=C_0=ℤ$, $d_1=2$, with all other terms zero and the trivial filtration $F_pC=0$ for p<0, $F_pC=C$ for p≥0. This spectral sequence collapses at $E^1$, with the single stable term $E^1_{0,0}=ℤ/2$.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: def-r-page-of-the-spectral-sequence-of-a-filtered-complex, lem-the-filtered-differential-induces-d-r-on-the-r-page, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, lem-abelian-group-model-for-spectral-sequence-computations. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### ex-a-nonzero-d-two-differential-in-a-small-filtered-complex

Authored claim/conventions: There is a finite filtered complex with $d^0=d^1=0$ and $d^2$ nonzero. Take $C_2=ℤx$, $C_1=ℤy$ and dx=y, with filtration degrees 2 for x and 0 for y, and all other terms zero. Then $d^2:E^2_{2,0}→E^2_{0,1}$ is the identity ℤ→ℤ.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: def-r-page-of-the-spectral-sequence-of-a-filtered-complex, lem-the-filtered-differential-induces-d-r-on-the-r-page, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, lem-abelian-group-model-for-spectral-sequence-computations. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### ex-edge-maps-from-a-first-quadrant-spectral-sequence

Authored claim/conventions: For the complex $C_1=ℤ$ --2--> $C_0=ℤ$ with $F_0C$ the degree-zero stalk, $F_1C=C$ and $F_pC=0$ for p<0, both first-quadrant edge maps in degree zero, taken from $E^2$, identify ℤ/2 with $H_0(C)=ℤ/2$. All positive-degree edges are zero maps between zero groups.

Sources: [Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Example 5.2.6; explicit calculation in this item.

Dependencies: def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, lem-abelian-group-model-for-spectral-sequence-computations, def-r-page-of-the-spectral-sequence-of-a-filtered-complex, lem-the-filtered-differential-induces-d-r-on-the-r-page. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### ex-two-filtered-abelian-groups-with-the-same-associated-graded

Authored claim/conventions: For A=ℤ/4 filtered by $F_0A=\{0,2\}$ and B=(ℤ/2)² filtered by $F_0B=(ℤ/2)×0$, take $F_{-1}=0$ and $F_1$ the whole group in each case. The two graded families are ℤ/2 at indices 0 and 1 and zero elsewhere, though the groups are not isomorphic.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects, lem-abelian-group-model-for-spectral-sequence-computations. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### cex-collapse-with-a-nonsplit-extension-problem

Authored claim/conventions: A collapsed spectral sequence can have a nonsplit extension in its abutment: the filtered degree-zero stalk of ℤ/4 with $F_{-1}=0,F_0=\{0,2\},F_1=ℤ/4$ is such a counterexample.

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Dependencies: prop-collapse-does-not-in-general-split-the-abutment, lem-abelian-group-model-for-spectral-sequence-computations. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.

### ex-the-cohomological-reindexing-of-a-homological-spectral-sequence

Authored claim/conventions: A nonzero homological $d^2$ can be read as a cohomological $d_2$. Let $C_2=ℤx$, $C_1=ℤy$, dx=y, with filtration levels 2 and 0. The corresponding cochain complex has $K^{-2}=ℤx$, $K^{-1}=ℤy$, $d_Kx=y$, with decreasing levels -2 and 0. Its nonzero second differential is
$$d_2:E_2^{-2,0}\longrightarrow E_2^{0,-1},\quad[x]\longmapsto[y].$$

Sources: [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

Dependencies: thm-the-cohomological-filtered-complex-construction, lem-abelian-group-model-for-spectral-sequence-computations, def-r-page-of-the-spectral-sequence-of-a-filtered-complex, lem-the-filtered-differential-induces-d-r-on-the-r-page. Decision: local proof/definition supplied, no recorded result or global choice. Contract records actual steps and boundary evidence. Checks: final scoped precheck (where proof-bearing), strict contract, content-policy and rendercheck pass; see the final receipt for invocation and limitations. Open mathematical gap: none identified in this item. Next action: owning Alpha reconciles metadata and the independent review proceeds through the build driver.


### Step-5 final receipt

Completed pages: `spectral-sequences` at `library/homological-algebra/spectral-sequences.md` (44 items) and `spectral-sequences-examples` at `library/homological-algebra/spectral-sequences-examples.md` (7 items). All 51 completed item IDs are individually checkpointed above and enumerated in `phase-2-catchup-24-batch-6.pages.json`. The proofs include finite categorical local lifting, both denominator checks, the corrected-cycle next-page isomorphism, degreewise finite abutment, both edge composites, and explicit integer/cyclic-group calculations. Definitions have item-specific convention and boundary records rather than invented numbered proofs.

The final coverage pass made three promised inline clauses explicit without changing IDs or dropping scope: the filtration-lowering case of the first differential (Stacks 12.24.3(2)); the existence-qualified mapping lemma at infinity (Weibel Exercise 5.2.3 p.125); and regular/coregular equivalences and one-sided support implications (Stacks 12.24.7–8). The infinity proof transports the subobject interval through a quotient, proves that the order isomorphism preserves existing joins/meets, and checks the recursive projected cycles and boundaries, including page zero. This is not an unbounded abutment theorem. The regular/coregular proof supplies both iff directions. Exact source passages were reread in the browser; these arguments are local derivations, not substitutions of source strategy sentences.

Checks actually run:

- `node tools/tsx-run.mjs tools/precheck.mts` with every one of the manifest's 51 explicit `items/ID.md` arguments: final result **34 checked, 0 failing**. Seventeen definitions have no phase proof and are not counted by this tool. Initial formatting failures were repaired to the normative canonical phase order, then rerun. Proof reference and contract boundary mappings were updated to match the actual final steps.
- `node tools/validate-plan.mjs`: the exact bare invocation failed with the tool's required-argument usage message. The applicable invocation `node tools/validate-plan.mjs research/plan-spec.json` then passed: no declared cycles, forward dependencies, B-page dependencies or unresolved IDs among the 978 itemized pages. It emits existing redundant-prerequisite warnings and reports 641 pages without item lists. This is plan validation, not proof validation or an assertion that the new manifest dependencies are already synchronized into the plan.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-6.pages.json`: **51 scoped items, 0 errors, 0 warnings**. Initial YAML/provenance format failures were repaired and rerun.
- `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-6.proof-contracts.json --strict`: **51/51 checked, 0 errors, 0 warnings**. Contracts map every numbered proof step once to its actual claim and inputs, with exact local source statement/definition excerpts and their uses. The numbering-convention refutation additionally records the exact external naming excerpts and printed locators. Bare external theorem numbers were removed from numbered prose to avoid the parser mistaking them for local proof references; exact locators remain in source notes and evidence.
- `node tools/rendercheck.mjs` with all 51 explicit item paths and both page paths: **53 files pass** under the real KaTeX and YAML parsers. One intermediate attempt mistakenly used nonexistent `tools/rendercheck.mts`; it failed module resolution, then the actual `.mjs` tool was run successfully.
- Owned manifest/order inspection: all 51 stable IDs appear once in their assigned draft pages, all current owned dependencies point backward within the A page or to earlier external suppliers, and no generated B statement is a dependency target.
- The owned `phase-2-catchup-24-batch-6.cross-batch-dependencies.json` was atomically maintained as `[]`. `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24` passed after dependency edits, refreshing the derived consumer ledger. No other consumer's input was edited.

These structural checks supplement the written arguments and do not certify mathematics. No judgment, acceptance, verification stamp, workflow transition, plan edit, or published-content edit was made in this Step-5 pass.

Provenance decisions: all A statements retain `ai-altered`; their proofs are `ai-altered`, or `not-applicable` for definitions. All seven B statements are `ai-generated` with `generation.role` example/counterexample, because the exact displayed instances are locally constructed rather than exact source statements. Their arguments are recorded as altered proofs using the cited construction. No generated statement is used as a supplier. The definition of associated graded has the schema's `justified_by` backlink to its well-definedness lemma, without adding a dependency cycle. No result is silently recorded without proof. No source was dropped or marked unavailable after a transport failure.

Sources and independent evidence: source URLs and locators are retained. Weibel and Stacks were read through the browser; the retained complete Sharifi and Vitolo PDFs supplied the relevant passages when their browser fetches failed. Vitolo Appendix B pp.31–35 distinguishes the generic iteration's input page zero (before Proposition 8.2 p.33) from the separately normalized filtered theorem (Theorem 8.1 p.35), which agrees with Weibel; the zero exact-couple witness verifies the convention comparison locally. Fresh shell DNS failure during this authoring pass was not interpreted as open-web absence. The independent Step-3 insufficient verdict is preserved. Its environmental failure is followed by the root's `phase-2-catchup-24-group-c-source-recovery.md`, which records the subsequent 18/18 liveness and 47/47 backing success using the retained liveness receipt; this author did not rerun or stamp that gate. Thus the old source-liveness report must not be relabelled as a newly discovered mathematical blocker.

Alpha reconciliation: no missing assigned input or unresolved mathematical gap is identified in the completed draft arguments. No narrowing, removal, new page, or new item is proposed. The prerequisite metadata below must be synchronized by owning Alpha into the shared plan, preserving the load-bearing dependencies already present in the draft manifest/items. This is outside Step-5 write authority. The source-independent reviews remain intact for the build driver; completing drafts does not replace them.

- `prop-e-one-is-homology-of-the-associated-graded-complex`: add `lem-the-filtered-differential-induces-d-r-on-the-r-page`.
- `prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences`: add `def-limiting-cycles-boundaries-and-e-infinity`, `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`.
- `prop-collapse-does-not-in-general-split-the-abutment`: add `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`, `lem-the-filtered-differential-induces-d-r-on-the-r-page`.
- `thm-the-cohomological-filtered-complex-construction`: add `prop-e-one-is-homology-of-the-associated-graded-complex`, `prop-e-zero-is-the-associated-graded-complex`.
- `prop-shifting-a-filtered-complex-reindexes-its-spectral-sequence`: add `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`.
- `fs-e-infinity-is-the-abutment-object`: add `def-homological-spectral-sequence`.
- `ex-edge-maps-from-a-first-quadrant-spectral-sequence`: add `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`, `lem-the-filtered-differential-induces-d-r-on-the-r-page`.
- `ex-the-cohomological-reindexing-of-a-homological-spectral-sequence`: add `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`, `lem-the-filtered-differential-induces-d-r-on-the-r-page`.

Alpha should also synchronize the associated-graded definition’s `justified_by` backlink, the seven B provenance/generation fields, and the three completed inline statement clauses described above. Preserve every original item and page ID. Final next action for this author: hand off the completed manifest, pages, contracts and notes; no remaining authorized draft work is deferred.
