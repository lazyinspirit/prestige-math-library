# Batch 51 notes — tgr-mi02 / tgr-mi02-examples

Run physics-remaining-80-2026-10-17, beta batch 51. The assigned pair is
tgr-mi02 (A, order 599) and tgr-mi02-examples (B, order 600), in
thermodynamics-and-general-relativity-mathematics. Only this pair was authored.
The three items and both pages remain drafts.

## Plan comparison and conflicts

The complete assigned section of research/plan-thermodynamics-and-general-relativity-track.md
specifies one A-page lemma, ex-tgr-two-first-law-calibrations, and
cex-tgr-entropy-type-identification on B. It declares no earlier A-page
prerequisites. The plan-spec rows agree that A has no earlier page requirement
and B follows tgr-mi02. The design's pair-level empty requires list refers to
external earlier prerequisites; the plan-spec B-to-A edge is the companion
page's natural dependency, so there is no substantive prerequisite conflict.
The empty plan-spec item arrays were the expected pre-authoring placeholders;
they are now populated in the batch pages manifest.

The source module preserves the exact scope: arbitrary positive calibration
b and entropy offset s_* factor the same smooth one-form; quantum calibration
remains an additional input; the B calibration example depends on the lemma;
the finite C² entropy counterexample is independent and makes no backreaction
or continuum claim. Charged and rotating first laws retain their additional
work terms and restrictions.

## Inventory, dependencies, and levels

The recorded run graph places batch 51 at dependency level 0 with requires=[].
The independent current manifest review and the run drift record agree that
tgr-mi02 has no in-run A-page supplier. Item levels are:

| Item | In-run logical suppliers | Level |
|---|---|---:|
| lem-tgr-first-law-calibration-freedom | none | 0 |
| cex-tgr-entropy-type-identification | none | 0 |
| ex-tgr-two-first-law-calibrations | lem-tgr-first-law-calibration-freedom (0) | 1 |

The lemma was authored before its consumer example. The counterexample is
independent. All three items are mathematical, have only mathematical
prerequisites, and the local dependency graph is acyclic. The pages contain
one A item and two B examples, below the 100-item page limit. No cross-batch
logical dependency was found; the cross-batch dependency input is empty.

The category directory did not exist before this assignment. The two assigned
page files create the directory and both state library: mathematics. No shared
_category.md or pathway was authored because this dispatch owns only the
assigned draft items, pages, and batch evidence; category-level setup may be
needed before a category-wide pathway check.

## Argument and prerequisite review

The A lemma is a direct conditional deduction. It defines the state family as
a nonempty connected smooth manifold and E, A, κ as smooth real-valued
functions, assumes C>0, κ>0, and the pointwise one-form equality
dE=Cκ dA. For each constant b>0 and s_* in R, differentiation gives
dS=(C/b)dA and multiplication gives T dS=dE. Positivity of κ and nonemptiness
of X show distinct b produce distinct T functions; changing s_* changes S
without changing dS. The proof uses no imported mathematics, physical
postulate, empirical input, or choice principle. It also covers the degenerate
dA=0 case without claiming that the entropy gradients then distinguish b.

The B example explicitly instantiates X=(0,∞), E=A=r, κ=C=1 and checks
b=1 and b=2. It consumes the actual A statement at its stated smoothness,
positivity, and one-form hypotheses. The CEX defines a finite two-level
Hilbert space, density matrices, zero Hamiltonian energy, fixed geometric
label, and finite spectral entropy locally. The explicit pure and maximally
mixed diagonal matrices have equal trace and energy but entropies 0 and
k_B log 2. It assumes no physical realization, dynamics, coupling, or
continuum limit.

## Source reading and dispositions

Two independent full texts were inspected for the A-page context:

- Pietro Benetti Genolini's 78-page full lecture notes, §§1.3 and 2.1. The
  relevant passage leaves the area-entropy coefficient η unspecified at the
  classical stage and then describes the separate Hawking-temperature result
  that fixes η.
- Robert M. Wald's 46-page Living Reviews article, §§2–3. It distinguishes
  the classical black-hole mechanics identity and formal κ/A roles from the
  zero classical physical temperature and quantum Hawking relation.

Both sources are context only; the general factorization claim is proved
locally. The coverage file records the exact source URLs, locators, supported
items, limitations, failed retrieval routes, searches, and dispositions.
The University-hosted Genolini PDF route returned HTTP 502 and the PMC mirror
of Wald returned a CAPTCHA. Searches found the full arXiv HTML versions of
both texts, which were inspected successfully. No source was dropped and no
item proof relies on a source citation.

## Evidence status

The required A/B pages, item carriers, proof contracts, source coverage, notes,
and cross-batch dependency input are present. The ready/escalated Step 1 records
and scoped check outcomes are recorded after final validation. Completion of
these authoring records is not independent proof approval.


The scoped item-level recomputation confirms levels 0, 1, and 0 for the lemma,
calibration example, and entropy counterexample respectively. A current full-run
recomputation confirms every stored batch graph row still matches, including
batch 51 at level 0 with requires=[]. The recorded shared graph file has the old input digest
949a7d0c47a19fe0e526a4bd4b666ce43d9ea1bd59a953a573f370963527fc0c. The last
successful full recomputation before another writer began left every graph row
unchanged and produced input digest
398a1085669936208248fad3538d2d5def07982a30059a40bbfb53525831cc05. A later
full check now exits with Duplicate item undefined because batch 1 page emg-g01
has in-flight ID-only string entries. This is outside batch 51 and its dependency
closure; the shared file remains untouched for the owner to recompute after the
other writers drain.

## Scoped check outcomes

- Source retrieval: source-fetch-check --stamp fetched and stamped both complete full-text sources; the subsequent check mode verified 2/2 stamps and 0 drops.
- Proof format: precheck passed all 3 items; proof-layout passed 3 items and 7 steps with 0 defects.
- Contracts and rendering: strict proof-contract passed 3/3 entries with 0 errors or warnings; rendercheck parsed all 5 item/page files and all math.
- Scope and dependencies: content-policy passed 3 scoped items with 0 errors or warnings; focused depcheck passed 3 items and 2 pages. Scoped item levels recomputed to 0, 1, 0 as listed above.
- Readiness: all 3 item records are ready with their exact dependencies; each record is current under the Step 1 hash check.
- Owner follow-ups: refresh the shared full-run batch dependency input after active authors drain, and provide the category-level _category.md/pathway before category-wide path checks.
