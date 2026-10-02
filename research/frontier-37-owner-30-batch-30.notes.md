# Batch 30 Step-1 scaffold notes — Analytic Hypersurfaces and Local Parametrisation

Run `frontier-37-owner-30`, beta, order 869–870 in `complex-analysis`. I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned task, the current plan and batch evidence, and the complete SC-8 design section at `research/plan-complex-analysis-track.md` lines 4282–4323 before construction. The owner direction file `research/frontier-37-owner-30-owner-authoring-direction.md` did not exist. The live `.autopilot/` state, rather than any old `*RESUME.md`, identified this as Step 1. I did not edit the shared plan or selected pair.

## Design and controlling plan

The design's shorthand SC-3/SC-5 plus commutative-algebra Noetherian, localisation and dimension interfaces agrees with the six explicit A-page `requires` in `research/plan-spec.json`: `holomorphic-inverse-and-weierstrass-preparation`, `modules-and-module-homomorphisms`, `noetherian-rings-and-hilbert-basis`, `localisation-of-modules-and-support`, `krull-dimension-and-height-theorems`, and `the-dbar-complex-and-integral-solutions`. The A/B ids, category, order and companion agree. **No design-versus-plan conflict was found.** The plan's two item inventories remain empty because this worker does not edit shared plans. The design's general analytic-set/coherence warning, exclusion of Segre/CR and global results, and requirement for *convergent* Puiseux parametrisation are preserved.

The design names Freitag as a possible second source. One attempted mirror retrieval timed out; I searched alternate access and used the accessible author-hosted Demailly book as the second complete treatment. No mathematical result was harvested from or attributed to the failed mirror. This is not a claim that Freitag is unavailable, and no `source_resolution` drop or five-failure claim was entered.

## Inventory and mathematical route

The A page has 19 items: all ten design targets and nine necessary local definitions/lemmas. The local suppliers establish reduced equations and square-free reduction; a nonzero discriminant; nearby reducedness and the principal vanishing ideal; dimension of the holomorphic germ ring; connectedness of the punctured covering; and the total-quotient/product description needed for normalization. The B page has eight items: hyperplane, node, the cusps `y²=x³` and `y²=x⁵`, crossing axes, a nonreduced equation with the same zero set, a smooth curve whose chosen projection branches, and the general-analytic-set scope warning. Exact ids and order are in the manifest and coverage file. Each item was appended once in prerequisite order and received a Step-1 outcome before the next item. Local corrections to explicit dependencies and proof strategies caused affected `ready` records to be refreshed in dependency order; no escalation was overwritten.

Finite projection follows generic regular coordinates, Weierstrass preparation/division, stable slice-zero counts and the holomorphic implicit-function theorem. The nonzero discriminant follows reduced factorisation, the published UFD/Gauss interfaces and characteristic zero. The branch set is defined for a **fixed projection**: it is where the full set of distinct unramified sheets fails, and it need not equal the singular locus (`y²=x` demonstrates this). The vanishing-ideal proof divides by the prepared equation and uses all distinct roots over the dense discriminant complement. This makes the reduced equation unique up to a unit and supports the gradient criterion and finite irreducible decomposition.

For pure codimension one, the prepared quotient is finite integral over the base germ ring; the principal-ideal height theorem gives height one for each factor. For the singular locus, nearby reducedness makes the fixed gradient equation valid, while local persistence of roots and the nonzero discriminant put the singular set over a proper analytic base hypersurface. Finite integral dimension bounds it by `n−2`, including emptiness for `n=1`. These dimension claims explicitly **assume the Axiom of Choice**, with direct `def-axiom-of-choice` dependencies. The hyperplane example declares AC only for its numerical dimension assertion. The finite-projection, Puiseux and normalization arguments do not use AC-specific clauses of their imported interfaces.

For an irreducible plane branch, a disconnected punctured covering would yield a proper monic holomorphic factor by symmetric products of its sheets and removable singularities. The connected covering has cyclic monodromy; pulling it back by `x=t^m` makes the root single-valued and bounded. Removability gives a convergent `h(t)`, followed by a linear coordinate choice and holomorphic unit-root reparametrisation. Formal Newton-series convergence is not assumed. The normalization proof makes each `C{t}` finite over `C{t^m}`, checks equality of fraction fields by the degree of the irreducible prepared polynomial, and proves integral closedness by the negative-valuation obstruction. An explicit total-fraction product lemma separates distinct branches without using a later normalization theorem. The crossing example uses the one-variable identity theorem to show one connected disc map cannot cover both axes.

All 27 manifest items have explicit `deps` and `dependency_level`, computed from **in-run** suppliers only; their levels range from 0 to 9. A read-only transitive audit of the owned proof paths reached 1,110 local/published ids with no missing id, unpublished supplier, cycle, `proved_here: false` Recorded result, or route to `deferred-set-theory-beyond-choice`. I inspected the used statements and proofs for Weierstrass preparation/division, UFD/Noetherianity, generic regular direction, discriminant, Krull height, integral-extension dimension, holomorphic IFT, removable singularity, covering monodromy and circle fundamental group. Their used hypotheses, directions and axiom strength fit the strategies. All direct out-of-batch suppliers are published and lie in the controlling plan's page prerequisite closure; none is merely planned. There is no new prerequisite pair or page split to escalate. The owned consumer-batch dependency input is `[]`; the derived frontier ledger was refreshed. No defective actual published prerequisite was found. Unrelated published Recorded-result consumer warnings do not block this supplier.

## Source reading and disposition

I fetched the complete [Lebl, *Tasty Bits of Several Complex Variables*](https://www.jirka.org/scv/scv.pdf) PDF (248 pages; 1,652,309 bytes; stamp `729cdb8a00685da5`) and read the relevant arguments in Ch. 6 §§6.1–6.7, printed pp. 167–196; I inspected the §6.8 heading and scope at p. 197 for its out-of-scope disposition. I also fetched the complete [Demailly, *Complex Analytic and Differential Geometry*](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf) PDF (455 pages; 3,557,990 bytes; stamp `d7c7654a7417e832`) and read the relevant arguments in Ch. II §§2, 4, 6 and Ex. 11.8, especially printed pp. 78–83, 90–99, 105–107 and 128. These are independent book-length treatments, each recorded for both A and B pages. The coverage file has exact source locators and item mappings: 27 canonical inclusions plus 36 source headings (19 included, 6 inline, 4 already published, 7 out of scope with specific reasons). There are no deferred results. `source-fetch-check --stamp` verified all four page/source entries, and the later check still reports 4/4 verified and resolved. The source headings and dispositions remain in coverage for Step-5 review.

## Checks and remaining run work

- Assigned coverage: pass, 2 pages, 63 harvested rows, 0 errors/warnings. Assigned manifest dependencies and manifest-only policy: pass, 27 items. Assigned source check: 4/4 verified and resolved.
- Whole-run `manifest-deps` and `content-policy --manifest-only`: pass, 553 scoped items, 0 errors; policy has 0 warnings. Whole-run coverage across present files: pass, 24 page records and 1,023 harvested rows, 0 errors, 4 low-yield warnings in other batches (5, 12, 18, 19).
- Whole-run source check across the 23 currently present coverage files: 85/85 entries fetch-verified and resolved. Coverage files for batches 3, 6, 7, 8, 21, 22 and 29 were still absent at that snapshot, so this is not a claim of complete run coverage.
- `validate-plan.mjs research/plan-spec.json`: pass; its current shared plan still has 319 empty planned item inventories. A read-only `/tmp` simulation inserting only this pair's 27 items also passes: no unresolved id, forward item reference, B-page dependency or cycle; 317 planned inventories remain empty. The plan reports only pre-existing advisory redundant direct page prerequisites for this A page. No shared plan was edited.
- `extcheck.mjs`: pass on 21,782 published items, reporting 177 Recorded results and 40 existing consumers resting on them; none is in this pair's proof closure. `fwdcheck.mjs`: pass.
- `item-dependency-levels.mjs check --run frontier-37-owner-30`: exit 1 at the latest concurrent snapshot because 14 other A/B page inventories are still empty (batches 2, 6, 7, 8, 21, 22, 29). It reports **no batch-30 label mismatch**. Re-run after those suppliers are scaffolded.
- `step1-decisions.mjs check --run frontier-37-owner-30`: no batch-30 open or stale row. A concurrent run snapshot after the final pair corrections had 552 items, 538 current ready records and 28 work rows, including still-empty sibling pages and other batches' stale/escalated records. These counts change as other workers scaffold. Step-1 records are readiness for authoring, not mathematical approval; Step 3 and later review still follow.

Only the assigned manifest, coverage, notes, readiness records and consumer-batch dependency input were authored here. Published items, shared plans, engine state and verdicts were not edited.

## Owner-directed proof audit updates — 2026-10-01

This additive record follows the original Step-1 snapshot above. The current
batch manifest has 29 items (21 A-page items and eight B-page items); the
earlier counts of 27 items and 19 A-page items describe the earlier scaffold
snapshot, not the current manifest.

An owner-directed mathematical audit repaired six current draft items and their
Step-3 proof-contract entries:

- Both cusp examples now use the correct unit criterion in
  $\mathcal O_{\mathbb C,0}[y]$. In a factorization of a monic polynomial the
  leading coefficients are units; a constant factor would then be a unit.
  Normalized linear factors yield $a^2=x^3$ or $a^2=x^5$, contradicting odd
  order.
- The local irreducible-decomposition proof now reverses the vanishing-ideal
  inclusion correctly and splits a product of three or more factors into one
  factor and the product of all remaining factors when proving irreducibility.
- The Puiseux proof now obtains algebraic irreducibility from the local
  decomposition and vanishing-ideal/UFD route, uses a uniform root bound on a
  closed coefficient disc, and continues the root graphs over the slit with
  distinct values on the slit fibres. Its ramified-disc radius is
  $\delta=\varepsilon^{1/m}$.
- The finite-projection result explicitly centers a germ at $p$ before applying
  the origin-based generic-coordinate supplier. Properness uses continuity on
  $K\times\overline D$ and the absence of boundary zeros.
- The nearby-reducedness proof chooses its stable slice disc inside the
  neighborhood where the local factorization holds.

The new Puiseux proof dependencies are ordered after the local decomposition
supplier; its manifest dependency level is now 8, and its two cusp examples
are level 9. Their titles and mathematical claims are preserved. No gate,
engine receipt, shared plan, or run state was changed during this audit.

Other proof and scope findings remain report-only in
research/frontier-37-owner-30-analytic-hypersurfaces-audit.md; they are not
cleared by these six repairs.

## Step-3A owner-directed audit execution — 2026-10-01

The audit treated the current 29 item files as draft claims, not as accepted
proofs. The batch contains 21 A items and eight B examples. The current source
coverage has 29 canonical items and 36 source headings (19 included, six
inline, four already published and seven out of scope). The source locator and
fetch evidence did not change, so `coverage.json` was left untouched.

Six released item proofs were repaired: the two cusp examples, the local
irreducible decomposition, the convergent Puiseux parametrisation, finite
local projection, and nearby reducedness. The finite-projection statement now
specifies the representative `Z(W)∩(V×D)` that its properness argument uses;
its proof explicitly centers at `p`, and compact inverse images are identified
with closed zero sets in `K×closed D` using the no-boundary-zero condition.
The Puiseux dependencies and page summary retain the local decomposition,
vanishing-ideal and UFD route used to establish algebraic irreducibility.
Selected proof-contract derivations and citation-use step labels were
reconciled to the current proof text; dependency levels remain consistent.

Focused validation after these edits: `precheck` passed all six released
items directly; `rendercheck` passed all six with balanced KaTeX, no multiline
display blocks, and renderer-valid YAML. No whole-run gate, engine, receipt,
plan, state, shared decision file or commit was run or changed. A separate
report records the connected-cover boundary-limit gap left report-only pending
owner direction, along with cross-scope observations.
