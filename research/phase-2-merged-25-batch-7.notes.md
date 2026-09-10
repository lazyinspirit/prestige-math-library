# Batch 7 — phase-2-catchup-24

Current: **Step-5 local authoring complete**; see `## Step-5 authoring` and its
completion report for current checks and Alpha handoff. The following Step-1
records are retained as historical evidence, not current proof status.

Historical Step-1 status: **blocked; do not certify source or transitive-proof closure**.

Supervisor reconciliation, 2026-09-09: the genuine fetch-stamp tool now
verifies all four active sources from a working network environment. The
historical transport failures below no longer describe current fetch state.
The two Hilbert-series published targets are recorded centrally as U-P:
missing explicit edges alone do not establish inadequacy when published
Noetherian interfaces justify the inference. Their exact supporting proofs
still need review. The new local scaffold route remains subject to normal
mathematical review; none of these actions certifies transitive closure.

The owned manifest now contains seven A items and three B examples. All six
CA-16M A claims and all three designed examples are preserved. A local
polynomial-existence lemma was added before the definition to close a specific
inherited proof gap. No new pair is required by the proposed mathematical
arguments. No published item, page, global plan, prose design or central ledger
was edited. This is a scaffold, not authored proofs or an independent review.

## Authority, inputs and current state

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, briefs/beta-scaffold.md,
briefs/tasks/frontier-dependency-ledger.md, the generated batch-7 and generic
beta-batch tasks, the complete CA-16M design through its last example, the
owned manifest, and the matching current plan entries. Coverage and notes did
not exist at dispatch. Read the existing published-consumer ledger entry at
lines 593–595 and the current parameter-reduction item.

The run status command on 2026-09-09 reported phase-2-catchup-24 running at
1-scaffold, with drift and drift-apply complete. HEAD was 209eaa2f1, following
92b292bfe. The working tree already contained extensive other work. Nothing
about a historical RESUME file was treated as active-state evidence.

Writable deliverables used: this notes file and the sibling `.pages.json` and
`.coverage.json`. Temporary diagnostics and the hypothetical plan overlay were
written under /tmp. No cross-batch input is written in Step 1 because the
specific batch task restricts deliverables to these three files; the Step-3
reviewer must write its required input under its own authority.

## Design/plan comparison and changes

The generated requires list and canonical plan agree, including
`prime-spectra-and-radicals`. The first CA-16M prose paragraph omits that page,
but its subsequent finite-length subsection explicitly requires the radical
intersection theorem and says to declare the home. The plan controls; retain
that page. Orders 365.9021/365.9022, category, companion and all nine designed
IDs agree. The canonical Rees page is
`rees-modules-artin-rees-and-hilbert-samuel-theory`, not the CA-11 prose alias.
No backward prerequisite from that published page was introduced.

Within-pair closure additions and refinements:

- Added `lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison`
  before the definition. Its full strategy proves polynomial existence using
  finite length of R/m^c, Noetherianity of the polynomial ring, finite
  homogeneous kernel/cokernel induction and cumulative Hilbert series. It
  handles M/IM=0, M=0 and I=R separately. It does not assume a dimension theorem.
- Rerouted the definition and the multiplicity theorem from
  `thm-existence-of-hilbert-samuel-polynomial` to that new lemma. The removed
  path was actually used to define P, and was inadequate as a self-contained
  proof route: the published existence theorem uses
  `thm-hilbert-serre-theorem`, whose step 1.2 asserts its kernel finite without
  supplying Noetherianity of the polynomial algebra or a finite-submodule
  result in its dependencies. Step 1.4 also says “algebra hypothesis” where
  induction is intended. Our new proof supplies the kernel-finiteness step
  explicitly. No conclusion of either published theorem is declared false.
- Extended the finite-length lemma with the exact supporting statements
  finite N has finite length iff Supp(N) is contained in {m}, and
  Supp(M/IM)=Supp(M) intersect V(I). Their complete local arguments now precede
  their uses in the strategies. Added explicit localisation, Koszul homology
  localisation, and finite-ideal-generation dependencies.
- Expanded the filtration strategy to specify the degree p+n component,
  deletion differential, homogeneous generators of graded homology, adjacent
  tail isomorphisms, and Artin–Rees applied to Z^n inside E^n=F^pK^n.
  The needed direction is Z^n intersect I^(q-p)E^n contained in I Z^n.
  Surjectivity forces H=IH; local Nakayama kills the finite H. No completeness
  or unstated spectral-sequence convergence is used.
- Replaced the first-element lemma's omnibus
  `thm-koszul-concatenation-and-mapping-cone` dependency with its exact
  `lem-koszul-complex-concatenation-tensor-isomorphism` supplier. Only the
  signed tensor identification is used; no append-one cone or cone LES is
  invoked in the new argument. Thus removal is justified against the actual
  proof, not merely by resolving another ID. Kept the ordinary homology LES.
- Expanded the first-element lemma with the local Noetherian hypotheses and
  support proof for T/yT. Its quotient two-term complex has the acyclic kernel
  [M/T -> xM], an isomorphism. Tensoring with the bounded finite-free y-Koszul
  complex preserves the two short exact sequences; a finite column filtration
  proves kernel acyclicity. No flatness of T or M/T is assumed.
- Made inherited AC explicit in the examples that invoke the bridge theorem.
  Added the DVR ideal theorem for the redundant-generator example's direct
  verification that the DVR has primes (0) and (t).

The A inventory is below the validator's 60-item ceiling. IDs were checked
against the plan and published files by content policy and overlay validation;
no collision was reported. All ten entries have explicit deps arrays and
component provenance. Generated examples have `generation.role: example` and
are not supplier targets. The canonical plan is not writable in this task;
normal later manifest splice must register the new local item and dependency
refinements. The hypothetical overlay passes validation; this is not a claim
that the canonical plan has already been rewritten.

## Mathematical interfaces examined

All modules below are over a commutative unital Noetherian local ring when
locality is used. “Finite” means finitely generated, not finite cardinality.
Koszul complexes are homological with the usual ordered deletion signs;
K^n=K_(-n) is used only in the filtration proof. P(n) always means
length(M/I^(n+1)M). For sufficiently large p, the quotient term in degree -i
has length binomial(r,i) P(p-i-1). Thus the finite difference is evaluated at
p-1. A coefficient of a lower-degree term is not claimed invariant under
translating the Hilbert-function variable. The zero polynomial is explicitly
allowed, and degree bounds mean either it is zero or has degree at most r.

| Owned use | Read supplier interface and check |
|---|---|
| Polynomial lemma | `thm-hilbert-basis-theorem` handles arbitrary commutative Noetherian coefficient rings, including quotients; iterate it finitely. `thm-noetherian-ring-quotients-and-localisations` supplies its quotient clause only. Finite-module Noetherianity makes the induction kernel finite. The finite-generation/ACC implications of `thm-noetherian-ring-ideal-characterisations` used here are explicitly choice-free; its DC-dependent converse is not used. |
| Definition and all lengths | Read `def-composition-series-and-length-of-a-module`, its justified_by result `thm-jordan-holder-theorem-for-modules`, and `cor-length-is-additive-in-short-exact-sequences`. Length is independent of series; finite length passes in both directions through a short exact sequence. Zero has the empty series. |
| Finite Koszul homology | `def-koszul-complex-of-a-sequence-with-coefficients` has terms finite direct sums of M. Read generator contraction and annihilation; d h_j+h_j d=f_j id, so I kills homology without a characteristic restriction. `cor-koszul-homology-localises` and exact module localisation give the required support containment. |
| Closed-point support | Read `thm-support-and-annihilator-of-a-finite-module` and its element-annihilator and finite-generator cyclic-support proofs. Its finiteness hypothesis is satisfied for homology and T/yT. Read `thm-radical-as-intersection-of-primes` and its separating-prime lemma: AC is inherited; nonzero closed-point-supported N gives sqrt(Ann N)=m. Finite maximal-ideal generators and a pigeonhole expansion supply m^c N=0 locally. |
| Nakayama | Read `thm-nakayama-lemma`, `lem-determinant-trick-for-nakayama`, and `thm-jacobson-radical-unit-characterisation`. Required hypotheses are finite module and I contained in the Jacobson radical, satisfied over R or R_p at the indicated prime. The published general interface uses AC through maximal-ideal existence; this assumption is retained. |
| Tail comparison | Read `thm-artin-rees-lemma`, `lem-rees-module-finiteness-and-stable-filtrations`, and `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring`. Artin–Rees applies to the cycles in a fixed finite tail term, not to an infinite completion. The intersection equality has exactly the needed descending-power direction. |
| Graded construction | Read `def-associated-graded-ring-and-module`; the action is multiplication on quotient classes. The strategy checks the induced differential and finite generation over gr_I(R) explicitly. Read the Hilbert-basis finite-generation proof and quotient/localisation theorem as supporting branches. |
| Euler identities and two-term comparison | Read `thm-long-exact-sequence-in-homology` and all four exactness lemmas immediately supplying it. Boundedness makes the relevant LES finite after zero endpoints. The first-element strategy uses only module complexes and finite direct sums, with a shift changing the Euler sign. |
| DVR examples | Read `thm-dvr-ideal-and-module-length`. Its input is a DVR with uniformiser, its output length(R/(t^n))=n for n>=0. Calculations give (H_0,H_1) lengths (2,1) and polynomial n+2 on R direct-sum k; for (t,0) on R, the differential maps (a,b) to ta and c to (0,tc), giving lengths (1,1,0) and polynomial n+1. |

The actual first-element and filtration proofs are in the manifest strategies,
not just obligations to “use a spectral sequence.” All zero/unit/empty cases
are included. The finite-difference and monomial-count arguments are expanded
locally. The new polynomial proof keeps the definition independent of the
later Euler-comparison result, so it introduces no circular proof route.

### Limits of this dependency audit — outstanding blocker

The immediate interfaces and the specific intermediate branches listed above
were read mathematically. I have **not completed an item-by-item semantic
audit of the entire transitive prerequisite closure**. Do not interpret the
structural passes or old published verification stamps as that audit.

A provisional traversal of inline deps/justified_by lists on the earlier
manifest revision reached 561 published items. A broader traversal including
all body links reached 1,528 on the initial planned inventory; that is an
over-approximation including orientation and unused clauses, not a count of
actual proof prerequisites. Neither number is a certification or a stable
final census. The remaining audit must classify actual uses, including
load-bearing body references, rather than audit every co-resident item or
blindly accept every reachable claim. In particular continue the LES branch
through `lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes`
and `thm-snake-lemma-under-the-weaker-stacks-hypotheses`, the finite-module
branch through its chain-condition and quotient results, the determinant
branch through the adjugate identity, and the ideal/radical branch through
separating-prime existence. These are open verification obligations, not
confirmed defective results. Supply local adequate arguments if an affected
clause is defective. This batch remains blocked until that audit is finished.

## Published consumer findings for ledger reconciliation

Existing A-P target `items/thm-multiplicity-under-reduction-by-a-parameter.md`:
its step 2.1 uses an unproved local Euler/multiplicity bridge and a two-row
comparison. This batch supplies, in proof order,
`lem-koszul-homology-finite-length-for-an-ideal-of-definition`,
`lem-shifted-adic-koszul-filtration-euler-comparison`,
`thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic`, and
`lem-koszul-euler-characteristic-first-element-reduction`, with polynomial,
definition and Euler-cancellation support. All are scaffold-only, item files
absent, not publication-ready while the blockers remain. Phase 3 should use
these to prove the general parameter reduction, preserve the annihilator
correction, replace the ambiguous T/JT support sentence, repair the misleading
“finite-annihilator” title, retain AC and move/reconcile the consumer and its
page headers after the bridge. Stacks 43.15.4–6 and Hochster p.165 support
this strategy. Do not substitute the weaker superficial regular-parameter
statement. No owned proof uses the defective consumer, the Hilbert–Samuel
dimension theorem, or the parameters/dimension theorem.

Additional defect-focused finding for the ledger owner (deduplicate before
adding): `items/thm-hilbert-serre-theorem.md`, step 1.2 lacks the finite-kernel
Noetherian justification in its supplier interface; step 1.4 has a broken
induction reference. Its consumer
`items/thm-existence-of-hilbert-samuel-polynomial.md` inherits that proof gap.
The required repair is the explicit finite-graded-module induction recorded
in the new local polynomial lemma, or an earlier properly declared
Noetherian/finite-submodule route. This does not claim the Hilbert–Serre
statement is false. This batch reroutes the actual polynomial use rather than
editing published content. No new prerequisite page is required for this
local reroute. The central ledger is outside this writer's authority, so this
is a reconciliation note, not a centrally recorded classification change.

## Source evidence and recovery

Coverage records exact source ranges, result dispositions and browser reading
receipts. The independent principal treatments are Stacks 43.15 and Hochster's
complete 170-page Math 615 Winter 2012 lecture notes. Two additional active
Stacks records cover the new polynomial proof. All cited active texts were
opened with the web tool, and the complete indicated relevant arguments were
read. Hochster's printed pp.104–108 contain the Euler/multiplicity treatment;
printed p.165 gives the quotient/annihilator Euler formula. The latter source
uses a last-element convention; the local signed tensor proof establishes our
first-element convention. Its displayed indexing is not copied into P(n).
The B examples are explicitly marked locally calculated design examples, not
invented headings or named examples in Hochster.

Supplementary complete text was read at Stacks 012V (why convergence needs
hypotheses), 00IJ (Artin–Rees) and 0621 (Koszul signs, contraction and tensor
concatenation). The generic spectral-sequence machinery is not proof backing
for any owned item. Stacks multiplicity associativity is out of this pair's
scope; arbitrary module multiplicity additivity is assigned to the existing
Rees/Hilbert–Samuel page. No designed result was dropped.

The direct Python fetch of Hochster failed with temporary DNS resolution
failure. A first attempted Python command also failed because only python3 is
installed; that is not counted as a network attempt. The full PDF was then
recovered and read through the web tool at the very same institutional URL.
The source-fetch tool subsequently attempted each of the four active URLs
six times (initial plus five retries); all 24 real attempts returned EAI_AGAIN
and are preserved in `recovery_attempts`, with timestamps around
2026-09-09T06:36:02Z. URL liveness returned curl error 6 for the same hosts.

Searches performed included “Koszul Euler characteristic multiplicity lecture
notes pdf” (located the complete institutional Hochster PDF), “Hochster
615W12.pdf” (located citations to the old institutional path), and “Stacks
0AZU Algebraic multiplicities” (confirmed the same complete official text).
The web reader recovered the original sources; no source-drop decision is
permitted on evidence of a local DNS outage. Do not invent fetch stamps or
rewrite source_resolution to dropped. The remaining problem is the mechanical
fetch gate's network access, not proof of open-web absence. No broader access
was requested. Reuse these attempts on the next dispatch.

## Checks actually run

- `coverage-checklist ...batch-7.coverage.json --require-destination`: final
  pass, 1 page, 24 harvested results, 0 errors, 0 warnings. An earlier version
  produced a low-yield warning; corrected source/application bookkeeping
  cleared it without dropping mathematics.
- Whole-run `manifest-deps ...batch-*.pages.json`: pass at execution, 130 items,
  0 missing/normalised, 0 errors. Other writers may populate more manifests.
- Manifest-only `content-policy ...batch-7.pages.json --manifest-only`: final
  pass, 10 scoped items, 0 errors and warnings.
- `validate-plan research/plan-spec.json`: pass, with repository-wide
  redundant-prerequisite warnings. The output explicitly limits item checks
  to populated plan pages.
- `validate-plan /tmp/b7-plan-overlay.json --repo <repo>`: pass with the owned
  manifest substituted into a temporary copy of the current plan; confirms
  local item order, IDs and page prerequisite closure, not proof adequacy.
- `extcheck --quiet`: pass, 61 existing unproved-on-published warnings; no
  Foundations bootstrapping errors. This does not certify new mathematical
  proofs, which have not been authored.
- A direct plan-home traversal found A/B requires closures of 132/133 pages,
  respectively, with no missing home for owned dependencies and no declared
  cross-batch prerequisite in this run. The overlay validator independently
  found no illegal B dependencies, forward edges or cycles.
- `source-fetch-check --coverage ...batch-7.coverage.json --stamp
  --timeout-sec 15`: failed, 0/4 fetch-verified, 24 recorded DNS failures.
- Subsequent `source-fetch-check` without stamp: failed, 4 unstamped sources.
- `url-sweep --coverage ...batch-7.coverage.json --out
  /tmp/b7-url-liveness.json --fail-on-dead --timeout-ms 3000`: failed, 0/4 live,
  all curl DNS error 6. This was before the last source-harvest refinement;
  the four active source URLs did not change.
- `source-backing --coverage ...batch-7.coverage.json --liveness
  /tmp/b7-url-liveness.json --require-verified`: failed, five then-included
  item IDs lacked mechanically openable backing. This preceded addition of
  the p.165 included Corollary; the source failure remains unresolved for all
  four active sources. No claim of a final backing pass is made.

No precheck, rendercheck, judge, publication or full proof certification was
run or claimed. On resumption, reread the current manifest and coverage,
verify current plan/prerequisite files and the above open obligations, complete
the transitive mathematical audit, and rerun fetch/liveness/backing through an
available network environment without changing published content. Step 3
must independently assess the local polynomial and tail arguments. Its
cross-batch input should be [] if its current inventory still has no
same-frontier edges, then refresh the shared ledger under its own authority.

Final JSON/inventory integrity check passed: seven A items, three examples,
explicit dependency arrays, all ten item files absent, exactly six real failed
fetch attempts retained for each active source, and no fabricated fetch stamp.

## Step-3 fix pass

This pass read the stable batch-7 findings in
`research/phase-2-catchup-24-alpha-c-step3-scaffold-review.md` and the matching
`batch: "7"` record in
`research/phase-2-catchup-24-alpha-c-step3-verdicts.json`.  Neither finding is
rebutted.  The local scaffold remains mathematically intact, but the pair is
**blocked** until the named shared-plan/prose changes are made by their
authorized writer.  This dispatch may edit only this batch's manifest,
coverage, and notes, so it did not edit `research/plan-spec.json`, the
commutative-algebra prose plan, a published page, or an item.

### `batch 7 missing[0]` — A-page closure reaches B pages

**Disposition:** confirmed, blocked on the authorized shared-plan writer; no
manifest, coverage, or item change can cure a page-level `requires` edge.

**Current evidence:** a traversal of the current `research/plan-spec.json`
from `koszul-euler-characteristics-and-hilbert-samuel-multiplicity` reaches 133
pages and encounters exactly these B-page paths:

1. `koszul-euler-characteristics-and-hilbert-samuel-multiplicity`
   → `koszul-complexes-and-regular-sequences`
   → `zariski-topology-on-prime-spectra-examples`;
2. that path continues through `zariski-topology-on-prime-spectra`
   → `henselian-rings-and-equicharacteristic-cohen-structure-examples`;
3. it then continues through
   `henselian-rings-and-equicharacteristic-cohen-structure`
   → `inverse-limits-and-noetherian-completion-examples`.

These are structural page prerequisites, so the fact that no B-page *item* is
an actual proof premise does not remove the failure.  The required, already
authorized cutovers are exact and do not weaken any mathematical claim:

| Plan page | replace in `requires` | with |
| --- | --- | --- |
| `koszul-complexes-and-regular-sequences` | `zariski-topology-on-prime-spectra-examples` | `zariski-topology-on-prime-spectra` |
| `zariski-topology-on-prime-spectra` | `henselian-rings-and-equicharacteristic-cohen-structure-examples` | `henselian-rings-and-equicharacteristic-cohen-structure` |
| `henselian-rings-and-equicharacteristic-cohen-structure` | `inverse-limits-and-noetherian-completion-examples` | `inverse-limits-and-noetherian-completion` |

The current CA reconciliation table in
`research/plan-commutative-algebra-track.md` already lists precisely these
three B-to-A substitutions.  After that writer applies them to the prose plan
and `plan-spec.json`, rerun `validate-plan` and the page-closure traversal;
only then can the structural blocker be cleared.  This is not a
same-frontier dependency: batch 7's existing cross-batch input remains `[]`.

### `batch 7 missing[1]` — binding CA-16M / plan inventory omits the local polynomial lemma

**Disposition:** locally resolved in the batch manifest; still blocked on
binding prose/plan synchronization.

**Manifest record already present:**
`lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison` is the
first A item, immediately before
`def-koszul-euler-characteristic-and-degree-indexed-multiplicity`.  The
definition and
`thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic` use that
lemma rather than `thm-existence-of-hilbert-samuel-polynomial`.  Its declared
suppliers are the associated-graded definition, module-length definition and
additivity, Hilbert basis, finite-module Noetherianity, Noetherian
quotients/localisations, local-ring definition, and the choice-free
finite-generation/ACC direction of the Noetherian ideal characterisation.
This is the actual route for eventual polynomiality; it does not use the
published Hilbert--Serre proof with its noted finite-kernel gap.  The following
finite-length, filtration, and Euler-comparison items then occur in proof
order, with all ten manifest records carrying explicit `deps` arrays.

The two independent active source treatments remain adequate for that route:
Stacks Project §§10.58.5--10.58.7 and 10.59.5 give the graded-polynomial and
Hilbert-function comparison, while Stacks Project §43.15.4--.6 and Hochster,
*Math 615* pp.104--108, 165 support the finite-difference/Koszul and
first-element comparisons.  The coverage file records exact locators and
dispositions for all 24 harvested results; current fetch verification covered
all four active texts.

**Remaining shared-scaffold repair:** CA-16M's opening `Requires:` sentence in
`research/plan-commutative-algebra-track.md` must add
`prime-spectra-and-radicals`; its current `plan-spec.json` page entry already
has that edge.  The authorized writer must then make the binding CA-16M prose
inventory and the `plan-spec.json` A-page inventory exactly match this
manifest's seven A items, including the first lemma and every current
`statement`, `deps`, and `strategy`; it must retain the three current B
examples and their leaf dependency on the A page.  The current plan has the
old six-item A inventory, so the structural `validate-plan` pass does not
substitute for this synchronization.  No new A/B pair is needed.

### Checks run in this pass

- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-7.coverage.json --require-destination` — 1 page, 24 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json` — 691 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-catchup-24-batch-7.pages.json` — 10 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — passed its current global structural checks; its current B-page-dependency result cannot detect the unmaterialized seven-item batch manifest, so it does not close either recorded plan/prose mismatch.
- `node tools/extcheck.mjs --quiet` — passed with 57 pre-existing recorded-not-proved warnings and no Foundations bootstrap error; none is a declared or actual owned proof supplier.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-7.coverage.json --stamp` — 4/4 active sources fetch-verified, 4/4 resolved, 0 newly stamped, 0 drops.

No manifest or coverage data changed in this fix pass: their existing contents
already carry the required local lemma, dependency refinements, source records,
and result dispositions.  The blocker is solely the forbidden shared-plan and
prose mutation described above.

## Step-5 authoring

2026-09-10: authoring in progress. Read current CLAUDE, README, SCHEMA,
manifest, coverage, task, CA-16M amendment, group-c Step-3 decisions/review,
and immediate dependency statements/proofs. No missing dispatch input;
contracts absent initially and will be created. Current amendment addresses
the historical inventory/B-page findings. Latest Step-3 verdict retains a
source-liveness concern; this turn retrieved all four source URLs through web.
Independent review records are preserved. No new source-fetch stamp is claimed.
Read Stacks 00JV 10.58.5–7, 00K4 opening and 10.59.5, 0AZU through 43.15.6,
and Hochster printed 104–108 and 165 relevant Euler passages. The local proofs
supply finite kernels, graded differential, tail vanishing and first-element
signs explicitly. All pages/items stay draft. Only own content, contracts,
notes and consumer input are writable. No promised claim is removed.

### Authored checkpoint: `lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison`

Source locators: Stacks Project, Section 10.58, Lemmas 10.58.5–6 and Proposition 10.58.7; Section 10.59, opening Hilbert functions and Proposition 10.59.5. The proof gives its own kernel/cokernel induction and extends the proper ring-ideal convention to module-relative finite colength. Only choice-free clauses of the Noetherian interfaces are used.

Claim/conventions: Let $(R,\mathfrak m)$ be a commutative Noetherian local ring, $M$ a finitely generated $R$-module, and $I$ an ideal such that $\ell_R(M/IM)<\infty$. For every integer $n\geq0$, $M/I^{n+1}M$ has finite length. There is a unique $P\in\mathbb Q[T]$ with $P(n)=\ell_R(M/I^{n+1}M)$ for all sufficiently large integers $n$. If $I=R$ or $M=0$, then $P=0$. No degree/dimension assertion is part of this lemma.

Dependencies: def-associated-graded-ring-and-module, def-composition-series-and-length-of-a-module, cor-length-is-additive-in-short-exact-sequences, thm-hilbert-basis-theorem, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian, thm-noetherian-ring-quotients-and-localisations, def-local-ring, thm-noetherian-ring-ideal-characterisations.
Local proof completed; format and contract checks pending. No mathematical gap identified in this item. Next: author the next item in manifest order, then validate the batch.

### Authored checkpoint: `def-koszul-euler-characteristic-and-degree-indexed-multiplicity`

Source locators: Hochster, Math 615 (Winter 2012), printed pp.104–108; Stacks 43.15.1 and 43.15.6. Our definition extends coefficient indexing to every nonnegative integer and uses the fixed $n+1$ variable convention. Polynomial existence is an earlier prerequisite, so there is no circular well-definedness reference to the later bridge theorem.

Claim/conventions: Write $\ell_R$ for [[def-composition-series-and-length-of-a-module|module length]]. If $C_\bullet$ is a bounded homological complex of $R$-modules and every $H_i(C)$ has finite length, its **Euler characteristic** is
$$\chi(C)=\sum_{i\in\mathbb Z}(-1)^i\ell_R(H_i(C)).$$
Boundedness makes the sum finite. The terms of $C$ themselves need not have finite length. For a cochain complex use $\sum_n(-1)^n\ell_R(H^n(C))$; reindexing $C^n=C_{-n}$ preserves this number.

Let $(R,\mathfrak m)$ be a commutative Noetherian local ring and $M$ a finite $R$-module. Call $I$ a **module-relative ideal of definition** if $\ell_R(M/IM)<\infty$, allowing $I=R$. The unique eventual polynomial
$$P_{I,M}(n)=\ell_R(M/I^{n+1}M)\quad(n\gg0)$$
exists by [[lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison]]. For each integer $j\geq0$ define the **degree-indexed coefficient**
$$e_j(I,M)=j![T^j]P_{I,M}(T).$$
Here $[T^j]$ means the coefficient of $T^j$, and $0!=1$. Set $P_{I,0}=0$, $P_{R,M}=0$ and their coefficients equal to zero, consistently with that lemma. A coefficient above the degree is zero. Coefficients below the degree depend on the fixed $n+1$ convention; this definition does not identify the index with support dimension.

For a finite ordered sequence $\mathbf f$, $K(\mathbf f;M)$ denotes [[def-koszul-complex-of-a-sequence-with-coefficients]]. Its Euler characteristic is defined whenever its homology has finite length. For the empty sequence $I=0$ and $K(\varnothing;M)=M[0]$. The module-relative hypothesis then says $M$ has finite length, and $P_{0,M}$ is the constant $\ell_R(M)$.

Dependencies: def-koszul-complex-of-a-sequence-with-coefficients, def-composition-series-and-length-of-a-module, lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison.
Local proof completed; format and contract checks pending. No mathematical gap identified in this item. Next: author the next item in manifest order, then validate the batch.

### Authored checkpoint: `lem-koszul-homology-finite-length-for-an-ideal-of-definition`

Source locators: Stacks 43.15.5, first proof paragraph, and Remark 43.15.6, especially conditions (3) and (5); Hochster printed pp.104–106. The two support assertions are proved locally in both directions, including the nonzero/zero split; no support-dimension theorem is imported.

Claim/conventions: Assume AC. Let $(R,\mathfrak m)$ be a commutative Noetherian local ring. A finite $R$-module $N$ has finite length if and only if $\operatorname{Supp}(N)\subseteq\{\mathfrak m\}$. For a finite module $M$ and any ideal $I$,
$$\operatorname{Supp}(M/IM)=\operatorname{Supp}(M)\cap V(I).$$
Consequently, if $I=(f_1,\ldots,f_r)$ and $\ell_R(M/IM)<\infty$, every $H_i(K(\mathbf f;M))$ has finite length and its Euler characteristic is defined. The empty sequence, $I=R$, and $M=0$ are included.

Dependencies: def-koszul-euler-characteristic-and-degree-indexed-multiplicity, cor-sequence-ideal-annihilates-koszul-homology, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian, thm-support-and-annihilator-of-a-finite-module, thm-nakayama-lemma, cor-length-is-additive-in-short-exact-sequences, def-axiom-of-choice, thm-radical-as-intersection-of-primes, cor-koszul-homology-localises, thm-localisation-of-modules-is-exact, thm-noetherian-ring-ideal-characterisations.
Local proof completed; format and contract checks pending. No mathematical gap identified in this item. Next: author the next item in manifest order, then validate the batch.

### Authored checkpoint: `lem-bounded-finite-length-complex-euler-identities`

Source locator: Hochster, Math 615, printed pp.104–105, the two cycle/boundary short exact sequences and their alternating cancellation. The short-exact-complex assertion is derived explicitly from the local homology LES. No convergence or finite-length-of-terms assumption is added to that assertion.

Claim/conventions: For a bounded homological complex $D$ of finite-length $R$-modules,
$$\sum_i(-1)^i\ell_R(D_i)=\chi(D).$$
If $0\to A\to B\to C\to0$ is a short exact sequence of bounded complexes whose homology modules all have finite length, then $\chi(B)=\chi(A)+\chi(C)$. In this second assertion the terms need not have finite length. The shift $D[1]_i=D_{i-1}$ with differential $-d_D$ satisfies $\chi(D[1])=-\chi(D)$.

Dependencies: def-koszul-euler-characteristic-and-degree-indexed-multiplicity, cor-length-is-additive-in-short-exact-sequences, thm-long-exact-sequence-in-homology.
Local proof completed; format and contract checks pending. No mathematical gap identified in this item. Next: author the next item in manifest order, then validate the batch.

### Authored checkpoint: `lem-shifted-adic-koszul-filtration-euler-comparison`

Source locators: Stacks 43.15.5, the filtration and associated-graded paragraphs; Hochster printed pp.105–108. The local argument proves high-tail acyclicity rather than invoking a spectral-sequence convergence theorem. Artin–Rees is used on cycles inside a fixed finite tail term, with the explicit containment into $IZ^n$; Nakayama is the AC-bearing tail step. No completeness hypothesis is needed.

Claim/conventions: Assume AC. Let $(R,\mathfrak m)$ be a commutative Noetherian local ring, $M$ a finite $R$-module, $\mathbf f=(f_1,\ldots,f_r)$, and $I=(\mathbf f)$ with $\ell_R(M/IM)<\infty$. Reindex $K(\mathbf f;M)$ as $K^n=K_{-n}$ in cochain degrees $-r,\ldots,0$. Put
$$F^pK^n=I^{\max(0,p+n)}K^n\qquad(p\in\mathbb Z).$$
These are subcomplexes. There is $p_0$ such that every $F^pK$ for $p\geq p_0$ is acyclic. For such $p$, the projection induces $H^n(K)\cong H^n(K/F^pK)$ in every degree, the quotient terms have finite length, and $\chi(K)=\chi(K/F^pK)$.

Dependencies: lem-koszul-homology-finite-length-for-an-ideal-of-definition, lem-bounded-finite-length-complex-euler-identities, def-associated-graded-ring-and-module, thm-hilbert-basis-theorem, thm-artin-rees-lemma, thm-nakayama-lemma, thm-long-exact-sequence-in-homology, def-axiom-of-choice, cor-sequence-ideal-annihilates-koszul-homology, lem-koszul-generator-contraction-homotopy, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian, thm-noetherian-ring-quotients-and-localisations, def-koszul-complex-of-a-sequence-with-coefficients, cor-length-is-additive-in-short-exact-sequences.
Local proof completed; format and contract checks pending. No mathematical gap identified in this item. Next: author the next item in manifest order, then validate the batch.

### Authored checkpoint: `thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic`

Source locators: Stacks 43.15.4 (finite differences), Theorem 43.15.5 and Remark 43.15.6; Hochster printed pp.106–108. In the present convention the quotient by $I^{p-i}$ contributes $P(p-i-1)$, not $P(p-i)$. The monomial count proves the degree bound independently of a dimension theorem. No parameter-reduction result is a premise.

Claim/conventions: Assume AC. Let $(R,\mathfrak m)$ be a commutative Noetherian local ring, $M$ a finite $R$-module and $I=(f_1,\ldots,f_r)$ with $\ell_R(M/IM)<\infty$. Use $P(n)=\ell_R(M/I^{n+1}M)$ for all sufficiently large $n$. Then $P=0$ or $\deg(P)\leq r$, and
$$e_r(I,M)=r![T^r]P(T)=\chi(K(f_1,\ldots,f_r;M)).$$
The degree-$r$ coefficient may vanish. This includes $M=0$, $I=R$ and $r=0$.

Dependencies: def-koszul-euler-characteristic-and-degree-indexed-multiplicity, lem-koszul-homology-finite-length-for-an-ideal-of-definition, lem-bounded-finite-length-complex-euler-identities, lem-shifted-adic-koszul-filtration-euler-comparison, lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison, def-axiom-of-choice, cor-length-is-additive-in-short-exact-sequences.
Local proof completed; format and contract checks pending. No mathematical gap identified in this item. Next: author the next item in manifest order, then validate the batch.

### Authored checkpoint: `lem-koszul-euler-characteristic-first-element-reduction`

Source locator: Hochster, Math 615, printed p.165, Proposition and Corollary comparing the quotient and annihilator when the last element is removed. The displayed formula here removes the first element; the signed tensor calculation proves that convention explicitly. The acyclic-kernel argument and finite column filtration replace any generic two-row spectral-sequence appeal.

Claim/conventions: Assume AC. Let $(R,\mathfrak m)$ be a commutative Noetherian local ring, $M$ a finite $R$-module, $J=(y_1,\ldots,y_s)$ and $\ell_R(M/(x,J)M)<\infty$. Put $C=M/xM$ and $T=0:_M x$. Then $C/JC$ and $T/JT$ have finite length, all homology modules in the following formula have finite length, and
$$\chi(K(x,y_1,\ldots,y_s;M))=\chi(K(y_1,\ldots,y_s;C))-\chi(K(y_1,\ldots,y_s;T)).$$
The sequence $\mathbf y$ may be empty. This does not assert that $T$ itself has finite length.

Dependencies: lem-koszul-homology-finite-length-for-an-ideal-of-definition, lem-bounded-finite-length-complex-euler-identities, thm-long-exact-sequence-in-homology, def-axiom-of-choice, thm-support-and-annihilator-of-a-finite-module, thm-localisation-of-modules-is-exact, thm-nakayama-lemma, lem-koszul-complex-concatenation-tensor-isomorphism, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian.
Local proof completed; format and contract checks pending. No mathematical gap identified in this item. Next: author the next item in manifest order, then validate the batch.

### Authored checkpoint: `ex-koszul-euler-characteristic-empty-sequence`

This is a locally calculated design example, not a named example attributed to a source. The empty-sequence convention is consistent with Hochster printed p.166 (the zero-generator case) and with Stacks 43.15.4 at index zero. The general bridge is only a consistency check here; the homology and polynomial were calculated directly.

Claim/conventions: Assume AC. For any finite-length module $M$ over a commutative Noetherian local ring $(R,\mathfrak m)$, the empty sequence satisfies $\chi(K(\varnothing;M))=e_0(0,M)=\ell_R(M)$. For the concrete instance $M=R/\mathfrak m$, both numbers are $1$. For $M=0$, both are $0$.

Dependencies: def-koszul-euler-characteristic-and-degree-indexed-multiplicity, thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic, def-axiom-of-choice.
Local proof completed; format and contract checks pending. No mathematical gap identified in this item. Next: author the next item in manifest order, then validate the batch.

### Authored checkpoint: `ex-koszul-euler-characteristic-annihilator-correction`

Locally calculated design example. The general correction formula is supported by Hochster printed p.165; Stacks 43.15.5 supplies the comparison context. The actual instance uses the published DVR length interface and explicit multiplication maps, with no formal power-series construction assumed.

Claim/conventions: Assume AC. Let $R$ be a discrete valuation ring with uniformizer $t$ and residue field $k=R/(t)$. Take $M=R\oplus k$ and the one-element sequence $(t)$. Then $H_0(K(t;M))\cong k\oplus k$, $H_1(K(t;M))\cong k$, and all other homology vanishes. Moreover $P_{(t),M}(T)=T+2$, so $e_1((t),M)=\chi(K(t;M))=1$. Omitting the annihilator correction from first-element reduction would give the incorrect value $2$.

Dependencies: thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic, lem-koszul-euler-characteristic-first-element-reduction, thm-dvr-ideal-and-module-length, def-axiom-of-choice, def-koszul-complex-of-a-sequence-with-coefficients, def-koszul-euler-characteristic-and-degree-indexed-multiplicity, cor-length-is-additive-in-short-exact-sequences.
Local proof completed; format and contract checks pending. No mathematical gap identified in this item. Next: author the next item in manifest order, then validate the batch.

### Authored checkpoint: `ex-koszul-euler-characteristic-redundant-zero-generator`

Locally calculated design example. Source context: Stacks 43.15.5 and Hochster printed pp.106–108, 165. The ordered two-element differential and the prime-chain calculation are supplied explicitly; no general theorem equating Hilbert degree and support dimension is used.

Claim/conventions: Assume AC. Over a discrete valuation ring $R$ with uniformizer $t$ and residue field $k=R/(t)$, the sequence $(t,0)$ on $M=R$ generates $I=(t)$ and has $H_0\cong k$, $H_1\cong k$, $H_2=0$. Thus $\chi(K(t,0;R))=e_2((t),R)=0$, although $R$ has dimension one and its degree-one leading multiplicity $e_1((t),R)$ is $1$.

Dependencies: thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic, lem-koszul-euler-characteristic-first-element-reduction, thm-dvr-ideal-and-module-length, def-axiom-of-choice, thm-ideals-in-a-dvr, def-koszul-complex-of-a-sequence-with-coefficients, def-koszul-euler-characteristic-and-degree-indexed-multiplicity, cor-length-is-additive-in-short-exact-sequences.
Local proof completed; format and contract checks pending. No mathematical gap identified in this item. Next: author the next item in manifest order, then validate the batch.

### Step-5 completion report — 2026-09-10

All ten assigned items have completed local arguments or definitions; both pages
are written as drafts at the required category paths. All promised scope is
preserved. The canonical phase repairs were applied and checked against the
mathematical argument. A multiline equation displaced by the phase repair was
restored to its deriving step before the final clean precheck. The final
contracts use the current phase labels, not the original one-phase numbering.

Completed item IDs:

- `lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison`
- `def-koszul-euler-characteristic-and-degree-indexed-multiplicity`
- `lem-koszul-homology-finite-length-for-an-ideal-of-definition`
- `lem-bounded-finite-length-complex-euler-identities`
- `lem-shifted-adic-koszul-filtration-euler-comparison`
- `thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic`
- `lem-koszul-euler-characteristic-first-element-reduction`
- `ex-koszul-euler-characteristic-empty-sequence`
- `ex-koszul-euler-characteristic-annihilator-correction`
- `ex-koszul-euler-characteristic-redundant-zero-generator`

Completed page IDs and paths:

- `koszul-euler-characteristics-and-hilbert-samuel-multiplicity`: `library/commutative-algebra/koszul-euler-characteristics-and-hilbert-samuel-multiplicity.md`
- `koszul-euler-characteristics-and-hilbert-samuel-multiplicity-examples`: `library/commutative-algebra/koszul-euler-characteristics-and-hilbert-samuel-multiplicity-examples.md`

Checks actually run:

- `node tools/tsx-run.mjs tools/precheck.mts` with all ten explicit manifest
  item paths: initial run requested canonical phase repairs; final run passes
  all nine proof-bearing items, zero failures. The definition has no proof body
  and is correctly skipped. Final rerun followed the last content edit.
- `node tools/validate-plan.mjs`: reports usage because this checkout requires
  a plan path. Corrected invocation `node tools/validate-plan.mjs
  research/plan-spec.json` passes, exit 0. It reports acyclic page order and no
  item cycle, forward reference, B-page dependency or unresolved ID among 978
  itemized pages; 641 page-only entries remain outside its item assertions.
  Global redundant-prerequisite warnings are unrelated to this batch.
- `node tools/content-policy.mjs
  research/phase-2-catchup-24-batch-7.pages.json`: final pass, 10 scoped items,
  zero errors, zero warnings.
- `node tools/proof-contract.mjs
  research/phase-2-catchup-24-batch-7.proof-contracts.json --strict`: final pass,
  10/10 item contracts, zero errors and warnings. There are 57 numbered proof
  rows, each mapped once to its actual claim, fact/prior-row inputs, and
  concrete given hypotheses. Source excerpts are from the current local
  supplier statements/definitions; every fact use is mapped. The definition
  has no invented proof rows. Every item has all eight boundary dispositions.
- Additional `node tools/rendercheck.mjs` with the ten item paths and two page
  paths: pass, all 12 files, actual KaTeX and renderer YAML parsing enabled.
- Explicit cross-batch intersection check against current run manifests found
  no item or page supplier in another consumer batch. Consumer input remains
  `research/phase-2-catchup-24-batch-7.cross-batch-dependencies.json = []`.

These are author checks, not mathematical adjudication or publication evidence.
No judges or verification/publication stamps were written. No finite test is
offered as a proof.

Provenance decisions:

- The polynomial lemma and coefficient convention remain statement
  `ai-altered`: the module-relative and all-coefficient conventions are
  deliberate extensions of the cited interfaces.
- The other five A statements remain `literature-derived`; all six supplied
  A proofs are `ai-altered`. The definition has proof `not-applicable`.
- All three B statements remain `ai-generated` with generation role `example`,
  and their calculated verifications are `ai-altered`. They are never
  dependency targets. They are not falsely attributed as named source examples.
- All four source URLs were retrieved through the web reader in this turn.
  Locators are Stacks 10.58.5–7, 10.59 opening/10.59.5, 43.15.1–6, and
  Hochster printed 104–108, 165 (also the empty case on 166). Source citations
  in item remarks identify the convention changes and locally supplied work.
  No source was dropped and no retrieval stamp was fabricated.

Dependency reconciliation for owning Alpha c:

The current plan already contains the seven A and three B inventory and the
CA-16M binding amendment records the historical B-to-A cutovers. The authored
manifest additionally declares the following direct proof uses already on
earlier required pages; Alpha should synchronize these arrays in the shared
plan. This is dependency precision, not a new prerequisite page, a narrowing,
or a removal:

- `lem-koszul-homology-finite-length-for-an-ideal-of-definition`: add `def-koszul-complex-of-a-sequence-with-coefficients`.
- `lem-shifted-adic-koszul-filtration-euler-comparison`: add `cor-length-is-additive-in-short-exact-sequences`, `def-koszul-complex-of-a-sequence-with-coefficients`.
- `thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic`: add `cor-length-is-additive-in-short-exact-sequences`.
- `lem-koszul-euler-characteristic-first-element-reduction`: add `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian`.
- `ex-koszul-euler-characteristic-annihilator-correction`: add `cor-length-is-additive-in-short-exact-sequences`, `def-koszul-complex-of-a-sequence-with-coefficients`, `def-koszul-euler-characteristic-and-degree-indexed-multiplicity`.
- `ex-koszul-euler-characteristic-redundant-zero-generator`: add `cor-length-is-additive-in-short-exact-sequences`, `def-koszul-complex-of-a-sequence-with-coefficients`, `def-koszul-euler-characteristic-and-degree-indexed-multiplicity`.

The consumer input was rechecked after these edits and remains empty: every
added supplier is already published or in this batch. The unified ledger and
workflow state were left untouched under this dispatch's restriction to the
consumer input. There is no cross-batch edge requiring a new review row.

Unresolved mathematical or scope obligations:

No open gap was found in the completed owned proofs, and no scope change,
new page, result narrowing or removal is proposed. Alpha still owns the
shared-plan dependency synchronization above and independent adjudication.
The source-liveness warning in the preserved Step-3 verdict is superseded by
the existing root receipt `phase-2-catchup-24-group-c-source-recovery.md`,
which records actual 18/18 liveness and 47/47 backing recovery. That receipt
was read; its checks are not claimed as checks performed by this author.
The historical scaffold's full-transitive-audit uncertainty is not silently
converted into a full-closure certification here. Current immediate
interfaces and actual uses were checked; independent reviews are preserved.

The published parameter-reduction consumer remains outside this dispatch.
The owned bridge and first-element lemma now supply their promised local
arguments, but their draft existence does not repair or publish that consumer.
Next action: Alpha c can review these authored items, exact contracts and
source locators, and synchronize the owned manifest dependency declarations
through the authorized shared-plan process. No further Beta proof work is
identified.
