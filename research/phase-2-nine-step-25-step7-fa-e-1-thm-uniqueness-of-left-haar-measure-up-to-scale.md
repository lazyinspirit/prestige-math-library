# Final adjudication: Haar uniqueness

Run: phase-2-nine-step-25. Group e, queue position 1.
Item: `thm-uniqueness-of-left-haar-measure-up-to-scale`.
Disposition: **accepted-after-review**. Source status: **verified**.
The current mathematical text needs no further repair. This is independent terminal adjudication, not a judge verdict or pass stamp.

## Reviewed evidence and exact conventions

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the frozen queue. Read the entire current item and all five directly cited suppliers: `lem-haar-integral-comparison-inequality`, `thm-rmk-uniqueness-among-radon-measures`, `lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set`, `thm-recursion`, and `def-axiom-of-choice`. Also read the local Haar definition, published Radon definition, and the Haar positivity lemma used by the comparison supplier. Read both `library/representation-theory/haar-measure-existence-and-uniqueness` pages (A and its `-examples` companion), the target entries in batch-10.pages.json, batch-10.coverage.json and batch-10.proof-contracts.json (including boundaries and risk_review), and group-e Step-7 context and the target Alpha adjudication.

The claim is under AC for arbitrary locally compact Hausdorff groups. Haar measures are nonzero Borel measures, finite on compact sets, outer regular on all Borel sets and compact-inner-regular on open sets. Neither sigma-compactness nor compact inner regularity on arbitrary Borel sets is assumed. All C_c functionals here are real; real equality also implies equality on complexifications when needed.

The initial Terra rejection in `research/phase-2-nine-step-25-judge.jsonl`, context `6a0d40cc383d8e650312a4d07befdd675143b3db3cf96843ca16a2a0bb304620`, objected to attributing a cutoff/kernel argument to the definition of AC. Alpha's confirmed-fatal adjudication and original repair are in `research/phase-2-nine-step-25-alpha-step7-e.md` and the adjudications JSONL. The one paid Terra rejudge actually **passed** at 2026-09-10T08:24:00.657Z, context `f3f66e0146a52774f0b7ca1e01bcbdb6fa1a066c1f13d5057185cfdfb4cc6298`, item hash `61b74d37fcfa09474f66e0806b146cb4fa9b48647402de26980e82176889f396`. The cycle file records that completed repair rejudge. There is no final Terra rejection to invent.

The subsequent preflight evidence (round 2, file ending `16019657a34a8736987a99e377e183e9292349f8085601b6a2c3601f1a6dfb9d.json`) identifies the impermissible forward use of `thm-choice-implies-dependent-implies-countable-choice`. The current licensed correction replaces that dependency with published recursion and a local AC-to-DC argument. Thus this frozen queue reviews later corrected bytes after the one paid judgment, as permitted by WORKFLOW.md; the older pass does not certify them. Group context reports no reader concerns or alerts.

## Independent mathematical basis

1. The family of successor sets is a set of nonempty sets. AC chooses a member of each distinct successor set; repeated successor sets cause no difficulty. Composition gives a single-valued successor function on A. Recursion produces the chain with precisely the prescribed initial element. This discharges DC without the removed forward supplier or an additional prerequisite.
2. Nonzero measures have positive total mass; open inner regularity on G supplies a positive-mass compact K, with finite mass by compact finiteness. The cutoff with U=G gives a nonnegative nonzero C_c function whose integral is positive. Therefore both associated functionals are nonzero. Integration is finite on C_c, positive and left invariant. Strict positivity on any nonzero positive test function follows from the comparison supplier's covering inequality: a positive-integral test function is bounded in integral by its finite covering ratio times the integral of the proposed nonzero test function. Thus one f_0 works for both I and J. The supplier's proof and its positivity dependency explicitly justify this general strict positivity; it is not limited to symmetric u.
3. For fixed f and f_0 the intersection of the two small identity neighbourhoods still admits a nonzero symmetric u. The comparison errors after division by I(u)>0 are bounded by epsilon. Subtracting the two expressions after multiplying respectively by I(f_0) and I(f) cancels r=J(u)/I(u); the triangle inequality gives epsilon times I(f_0)+I(f). The resulting expression is independent of epsilon, so it vanishes. No convergence of ratios, subnet, countable exhaustion, or simultaneous choice over all epsilon is needed.
4. The scalar J(f_0)/I(f_0) is finite and strictly positive. Positive and negative parts of real C_c functions remain in C_c. Scaling a Radon measure by this scalar preserves both regularity equalities and compact finiteness. The cited RMK uniqueness proof recovers compact values by cutoffs, open values by inner regularity, and all Borel values by outer regularity. It applies also to infinite values. Zero test functions and empty Borel sets cause no exception; the group cannot be empty.

## External verification

Read Gert K. Pedersen, *The Existence and Uniqueness of the Haar Integral on a Locally Compact Topological Group*, https://home.agh.edu.pl/~rudol/Paradoxes/haarintegral.pdf . Relevant complete sections read: p.2 Definitions and covering estimates; p.3 Theorem 2 statement; pp.4–5 Second Proof; p.5 Remark 2. The second proof supports symmetric small-support kernels, left-translation substitutions and the error estimate proving proportionality. Remark 2 supports commuting integrals of continuous compactly supported kernels through finite tensor approximation, without global sigma-finiteness. The local proof uses algebraic cancellation instead of the source's subnet selection. The library's explicit Radon definition and local RMK uniqueness, rather than an inferred source convention, govern equality on all Borel sets. AC-to-DC via recursion and the cancellation algebra are familiar and were checked directly.

## Metadata reconciliation and checks

Only this item's contract derivation descriptions and choice boundary were synchronized to the current proof; the prior independent risk record was preserved. Its coverage argument/dependency list was synchronized to the local DC derivation. No item, supplier, A/B page, claim, or mathematical proof was edited.

Updated the owning `research/phase-2-nine-step-25-batch-10.cross-batch-dependencies.json` input following `briefs/tasks/frontier-dependency-ledger.md`: recorded the removed forward supplier and its local replacement. No new cross-batch dependency exists: comparison is same-batch, all other direct suppliers are published. The removed row documents the earlier out-of-run edge, not a verified new supplier. Ran `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-nine-step-25` successfully.

Focused checks completed: precheck 1 checked / 0 failing; strict proof-contract validation for this ID 0 errors / 0 warnings; rendercheck passed including actual KaTeX and YAML parsing. These checks supplement the mathematical review and do not constitute another judgment.

Unresolved mathematical obligations: none for this item. Next action: record the current exact bytes with the authorized terminal recorder, then return control to the build driver. No further review or repair wave is authorized.
