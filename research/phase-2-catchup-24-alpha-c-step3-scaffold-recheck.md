# Group c — final scaffold adjudication

Run: phase-2-catchup-24. Dispatch: scaffold-final-c-bd0c5046bfa0f50e.
Assigned batches: 5, 6, 7. This report supersedes the previous recheck's current verdicts; the initial Step-3 review remains historical evidence.

## Terminal outcome

| A page | Outcome | Current reason |
| --- | --- | --- |
| tor-flatness-and-global-dimension | escalate | Shared-plan dependency mismatch, six unresolved scope destinations, and failed current source-backing gate |
| kunneth-exactness-and-splittings-over-principal-ideal-domains | escalate | Current source-backing gate failed; no confidence-1 certification issued |
| spectral-sequences | escalate | Current source-backing gate failed; no confidence-1 certification issued |
| koszul-euler-characteristics-and-hilbert-samuel-multiplicity | escalate | Current source-backing gate failed; no confidence-1 certification issued |

No owner-decision file was present for these scaffolds when checked. No owner record was written or overridden. Ordinary verdicts are insufficient with nonempty missing lists. These are escalations, not acceptance of the mathematics conditional on a later fix. Work on the pairs stops at the terminal records.

## Current gate uncertainty and owner decision

`source-fetch-check --stamp` reports 16/16 active source records verified, **zero newly stamped**. It reused the existing evidence; this dispatch did not download and stamp sixteen documents. In contrast, the current shell `url-sweep` returned 0/18 live: every failure was curl error 6, "Could not resolve host". `source-backing --require-verified` with that actual sweep then returned 47 backing-lost diagnostics. The sweep includes contextual citation URLs as well as the sixteen active source records.

The browser returned complete mathematical text for Stacks 012K, 00ZX, 0AZU, Hochster's 170-page notes, Garrett's 13-page chapter, Friedman's 806-page book, and tom Dieck's 580-page topology book. This contradicts interpreting the shell result as disappearance of these sources. Sharifi's complete local 97-page PDF has SHA-256 prefix dbff1b909421574e, matching the retained coverage stamp; the original browser URL instead redirected and failed. Shell download of Hochster also failed DNS. Screenshot requests for Hochster and Garrett returned cache misses, while text remained readable. No source was dropped and no existing recovery history or stamp was invented, replaced, or invalidated. Recovery stopped where complete text was obtained. A temporary network outage is not an open-web-absence finding.

The owner decision needed is how to reconcile the current failing machine liveness/backing evidence with the retained verified documents and browser evidence, and obtain a valid current backing gate. This dispatch does not request broader access and does not synthesize a passing liveness file. Representative affected claims are:

- Tor: `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic`, backed by Weibel chapter 2 and Sharifi §3.5.
- Kunneth: `thm-pid-kunneth-exactness-from-cycle-boundary-presentations` and `thm-pid-kunneth-splitting-from-cycle-boundary-presentations`, backed by tom Dieck §11.10 and Friedman §6.4.5.
- Spectral: `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, backed by the filtered-complex treatments in Sharifi §4.2 and Stacks 012K. The gate failure applies to the page's source-backed construction and convergence items, not an assertion that their proofs are false.
- Koszul: `lem-shifted-adic-koszul-filtration-euler-comparison`, `thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic`, and the local polynomial supplier; the actual gate names Stacks 0AZU, 00JV, 00K4 and Hochster.

The central arguments and the prerequisite branches below were examined. This report does **not** assert a complete semantic certification of every transitive prerequisite of the escalated pairs. In particular, gathering the Kunneth and Koszul closure files was a dependency discovery operation, not proof that every gathered body had been read and approved. No unfinished audit is converted into confidence 1.

## Findings superseded by current files

The current Kunneth design and plan carry the five-A/two-B inventory including the first arbitrary-rank PID freeness lemma. The published `items/thm-submodules-of-free-modules-over-a-pid-are-free.md` now carries AC, well-ordering, and transfinite-induction dependencies and a coordinate-ideal proof. The previous missing-freeness-metadata finding is no longer current.

The spectral design and plan carry all 44 A and seven B items, including the first local subquotient/lifting lemma and the abelian-group computation model before its consumers. The previous missing-two-items finding is no longer current.

The Koszul design and plan carry the first module-relative polynomial lemma and all seven A/three B items. The previous three B-page prerequisites were cut over to A pages. The current requires closures inspected contain no missing page or B-page prerequisite: Tor 110 pages, Kunneth 112, spectral 101, Koszul 130.

The Tor release now explicitly distinguishes DC with supplied resolution data from AC existence statements. Its current contracts must not be rejected by simply repeating the old blanket missing-choice diagnosis. This dispatch does not certify every changed Tor proof by that observation alone.

## Remaining Tor amendments

The current manifest and published `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes` contain two actual dependencies absent from its plan item: `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes` and `thm-long-exact-tor-sequence-in-the-left-module-variable`. The proof needs the former to identify the terminal syzygy as flat and the latter for the converse vanishing along a flat resolution. Proposed exact amendment: append those two IDs to this item's plan deps, preserving the existing three. Removing them from the manifest would conceal actual proof uses. The shared plan is outside this dispatch's write authority.

Six current Tor scope rows still have destination `owner-decision`: Weibel 3.1.3/Exercise 3.1.2; 3.1.6–7/Exercises 3.1.1,3.1.3; 4.1.3 ideal tests; 4.1.5/Exercises 4.1.1–3; Sharifi Remark 3.5.11; Sharifi Example 3.5.13. The owner must assign actual mathematical destinations, preserve the stated results, and finish any recorded formula recovery. The group scope file retains these as owner-decision, not stands. None is used to prove the Kunneth supplier, so they do not independently block that pair.

## Mathematical checks and exact dependency uses

Kunneth: the local freeness argument well-orders a given basis, chooses a lift of each nonzero principal coordinate ideal, and uses transfinite induction with finite support for spanning; highest nonzero coordinate gives independence. AC is explicit. Splitting `C_n -> B_{n-1}` gives `C_n = Z_n direct-sum B_{n-1}`; it does not assert that `B_n` splits in `Z_n`. Tensoring the cycle/boundary sequence gives the kernel and cokernel of `B_p tensor H_q(D) -> Z_p tensor H_q(D)`. A lift `s(b) tensor y` gives the positive connecting-map sign. The quotient is identified with the actual published Tor map, not the old Kunneth theorem being replaced. Retractions to cycles give maps to zero-differential homology complexes, hence a retraction of the tensor injection; restricting the quotient to its kernel supplies a noncanonical section.

The remaining published freeness path was actually followed: local two-term tensor lemma -> `lem-the-kunneth-tor-map` -> `lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free` -> `thm-submodules-of-free-modules-over-a-pid-are-free`. The updated last proof closes the earlier specific defect. AC in the owned pair covers this choice use. The balanced-Tor, homology-LES, tensor totalization and naturality interfaces remain actual prerequisites; unrelated flat-dimension statements on the Tor page are not prerequisites merely by residence there.

Spectral: the first local lemma derives the normal monic/epic properties from the coimage-image axiom, constructs pullbacks as kernels of a difference map, proves pullbacks of epics are epic, and supplies quotient/modular identities. Thus its generalized-element calculations are local epic lifts, not an undeclared embedding into modules. For r >= 1 the numerator is `F_p C_n intersect d^{-1}(F_{p-r} C_{n-1})`; the denominator uses the preceding-page lower filtration and boundaries from level p+r-1. The representative correction x-b verifies the next-page quotient. Degreewise finite bounds in degrees n-1,n,n+1 suffice to stabilize at graded homology; a global filtration bound and infinite colimits are not used. The local abelian-group model verifies the finite quotient computations, including Z/4 versus Z/2 direct-sum Z/2, without using the later module-category page. First-quadrant edge orientations do not assert the false universal injectivity/surjectivity found in some source formulations.

The published categorical branches read include homology well-definedness, chain maps on cycles/boundaries, kernel/cokernel universal properties, canonical coimage-image factorization, balancedness, normal monics, duality, finite biproducts, and the integer/quotient constructions used by the model. The transitive dependency extraction also exposes the class-size convention's ordinal orientation branch; orientation about large categories is not a use of Burali-Forti to prove a finite filtered-complex claim. No deferred-set-theory catalogue supplier was found in these extracted item paths.

Koszul: the new first lemma proves eventual polynomiality for finite M with finite length M/IM by finite generation of gr_I M over a polynomial ring over a finite-length quotient R/m^c. The one-variable kernel/cokernel Hilbert-series induction then treats each variable and cumulative lengths. This avoids treating a later parameter theorem as its own prerequisite. Noetherian finite-generation suppliers were checked in their choice-free directions; the chain-condition SES supplier now proves finite generation directly. The length supplier uses Jordan–Hölder and the module correspondence/isomorphism theorems.

Finite length of Koszul homology uses finite support, the ideal-annihilation homotopy, localization exactness, radical-as-intersection-of-primes and local Nakayama; the owned claim explicitly assumes AC where its published radical/Nakayama suppliers do. The shifted filtration has exponent max(0,p+n) in cohomological degree n. Graded Koszul homology vanishes in high internal degrees; for a fixed high tail E, Artin–Rees applied to its cycle submodule bounds the image of still higher tails inside I times homology. Their homology maps are isomorphisms, so Nakayama kills that tail. Euler additivity on the bounded quotient gives the rth finite difference at p-1 of length(M/I^(n+1)M), matching the declared coefficient convention. First-element reduction instead uses T=(0:x), C=M/xM and the two-term complex [M --x--> M], then tensoring with the finite free remaining Koszul complex; its correction has the subtraction sign. Empty sequence, unit ideal, M=0 and the redundant-generator DVR example were checked locally.

Actual read Artin–Rees path: `lem-shifted-adic-koszul-filtration-euler-comparison` -> `thm-artin-rees-lemma` -> `lem-rees-module-finiteness-and-stable-filtrations` -> finite-generation and polynomial-Noetherian suppliers. Actual read Nakayama path: `thm-nakayama-lemma` -> determinant trick and Jacobson unit characterization -> proper ideal in maximal ideal. The coefficient assumptions and AC clauses match their uses. This is evidence for these branches, not a blanket audit of all co-resident commutative algebra pages.

## Source readings and edits

- [Stacks 012K](https://stacks.math.columbia.edu/tag/012K), filtered-complex construction, page transition and finite convergence; [Stacks 00ZX](https://stacks.math.columbia.edu/tag/00ZX), especially 12.5.11–13, supplies the independent categorical comparison. Sharifi's complete local 97-page Homological Algebra notes, §§4.1–4.2, printed pp.87–92, were read for the definitions, transition/convergence proof, and edge discussion. The retained SHA prefix is given above. These readings support the spectral core; source slips about completeness/cocompleteness and edge maps are not copied into the manifest.
- [tom Dieck, Algebraic Topology](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/diecktop.pdf), §11.10, Theorem 11.10.1 and its complete proof, printed pp.298–299, supports the cycle/boundary construction and splitting. [Friedman, Singular intersection homology](https://faculty.tcu.edu/gfriedman/ihbook.pdf), §6.4.5, printed pp.314–318, equations (6.11)–(6.13) and Splitting, independently supports those steps. Lemma 6.4.19's further representative proof was only partially read in this dispatch; it is not certified here by the earlier source record alone.
- [Garrett, chapter 11](https://www-users.cse.umn.edu/~garrett/m/algebra/notes_2023-24/11.pdf), §6, Theorem 6.0.1 and proof, actually printed pp.177–178, PDF pages 11–12, supports the arbitrary-rank freeness argument. **Applied edit:** corrected this locator in batch-5 coverage from printed 178–179/PDF 10–11. No result disposition was deleted. A preexisting /tmp file named tomdieck.pdf turned out to be Representation Theory, not the cited topology book; it was not used as topology evidence.
- [Stacks 0AZU](https://stacks.math.columbia.edu/tag/0AZU), 43.15.1–6, complete relevant text, and [Hochster, Math 615 Winter 2012](https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2024/10/615W12.pdf), printed pp.104–108, complete Euler/filtered-complex/multiplicity discussion, support the Koszul core. The local scaffold proves its own high-tail vanishing and polynomial bound; the source's broader spectral convergence is not imported as an unlisted prerequisite. Hochster p.165 and Stacks 00JV/00K4 were not independently reread in full in this final dispatch, so no new full-read certification of those routes is claimed.

Applied bookkeeping edits: refreshed group scope decisions, resolved the three stale Koszul declines with current argument-specific evidence, and retained the six Tor owner decisions. Stacks 43.15.3 prime-factor associativity is unused here; 43.15.2 multiplicity additivity remains assigned to the existing Rees/Hilbert–Samuel page; Hochster's March 14 depth warning concerns an unasserted depth statement. All other dispositions remain recorded. Ordinary verdicts and this report were updated. Manifests, shared designs/plan and published items were not edited.

## Frontier and published-consumer bookkeeping

The owned batch-5/6/7 inputs are empty arrays and were reconciled against the current declared edges and examined load-bearing strategies. No cross-batch edge was found: the Kunneth use of Tor is internal to batch 5; the Koszul high-tail argument does not consume batch 6 spectral convergence. `frontier-dependency-ledger refresh --require-reviewed` succeeded. The derived shared ledger was refreshed by its tool only. No other batch input was edited.

The old published Kunneth theorem and the parameter-multiplicity consumers being supplied by these pairs remain Phase-3 consumer work, not suppliers in the replacement proofs. Their existing debt records are not cleared by this review. The old specific published PID freeness metadata defect is closed in the current supplier, as recorded above. No new unrelated co-resident defect was promoted into a blocker and no published proof was changed.

## Commands actually run

| Check | Result |
| --- | --- |
| manifest-deps on all run batch manifests | exit 0; 735 items, 0 normalized, 0 errors |
| content-policy --manifest-only on batches 5,6,7 | exit 0; 117 items, 0 errors/warnings |
| coverage-checklist --require-destination, separately for 5,6,7 | exit 0; 102,119,24 harvested rows respectively, 0 errors/warnings |
| source-fetch-check --coverage comma-separated 5,6,7 --stamp --timeout-sec 15 | exit 0; 16/16 verified/resolved, 0 newly stamped, 0 drops |
| validate-plan research/plan-spec.json | exit 0; declared page order acyclic, no item cycles/forward dependencies; 646 plan pages still have no item list globally |
| extcheck --quiet | exit 0; recorded-not-proved material remains cited remarks and consequences marked; global unproved-on-published notices remain, not a proof audit of this group |
| scope-decisions refresh/check --run phase-2-catchup-24 --group c | 33 current declines, 0 pending, 0 errors; six owner-decision rows remain explicitly unresolved |
| url-sweep --coverage comma-separated 5,6,7 --out /tmp/c-bd0-liveness.json --timeout-ms 3000 --fail-on-dead | exit 1; 0/18 live, all DNS failures |
| source-backing --coverage comma-separated 5,6,7 --liveness /tmp/c-bd0-liveness.json --require-verified | exit 1; 47 backing-lost diagnostics resulting from that sweep |
| frontier-dependency-ledger refresh --run phase-2-catchup-24 --require-reviewed | exit 0; refreshed and deduplicated |

An attempted `frontier-dependency-ledger check` is not a supported command and returned usage; it is not counted as a successful check. The correct refresh --require-reviewed was then run. No test result or fresh fetch stamp is inferred from a command that did not run. Raw logs remain /tmp/c-bd0-check-0.log through -6.log, /tmp/c-bd0-url-sweep.log and /tmp/c-bd0-source-backing.log; the results above are preserved here so the report does not depend on temporary files.
