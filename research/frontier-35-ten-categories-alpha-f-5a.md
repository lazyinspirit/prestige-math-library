# Step 5a Alpha, group f: batches 12 and 14

## Scope and current checkpoint

Run `frontier-35-ten-categories`; dispatch `5a-f`; owned batches 12 and 14. The current scope files route 25 touched items and one page in batch 12, 12 refuter findings there, three touched items and one page in batch 14, and one published-item reader finding there. The pre/post hash snapshots have been compared with current carriers. No pair or page is being added.

Batch 12 concerns the Shamir IP protocol and gap amplification. The present protocol chooses the prime $3$ directly when its round count $T=0$; the prime-search lemma assumes $T,D\ge1$. All communication and verifier bounds that cover the zero-round protocol therefore use $\log(TD+2)$, and the verifier's search claim is split at $T=0$. The code construction counts padded rate as $k/N(k)>1/128$ and unpadded rate as $1/32$; the quadratic test has an explicit ideal-rejection premise and no false independence assertion. The assignment tester definition now requires designated Boolean symbols, evaluates unset input coordinates as input coordinates, and distinguishes a fixed rejection ratio from an instancewise one. The trivial circuit system consequently claims only an instancewise bound. The gap theorem's degree-reduction Fact F1 applies the supplier to arbitrary input degrees.

The named-input interface required a further local closure. A circuit can have $s$ total input coordinates but only $n\le s$ named ones. The circuit-to-quadratic-system lemma now uses $N=s+m$ wire variables and existentially quantifies the $s-n$ unnamed inputs. It claims gate-wire uniqueness only after all $s$ inputs are fixed. The exponential tester uses the same $N=s+m$ for table size, chooses one witness completion in its completeness proof, and compares only the named coordinates for soundness. The trivial gate gadget counts $s+m$ wires and reads unnamed wire labels as the existential completion. This repairs the direct consumers of the assignment-tester definition without adding a page or item.

Batch 14 concerns graded tensor constructions and homological Gaussian elimination. The homology corollary now gives $H_n(p)H_n(i)=1_{H_n(\bar X)}$ and $H_n(i)H_n(p)=1_{H_n(X)}$ with well-typed targets. The finite composite retract proof uses $i p=1_{X^\bullet}-(dh+hd)$; the projective bimodule example uses $(\varepsilon)=k\varepsilon$ over an arbitrary field and an explicit balancing relation. The published complexes-category item is read-only; its raw `\mathbb Z` outside math is a nonfatal rendering defect already classified in `research/published-consumer-supplier-ledger.md`.

## Evidence and sources

- Current owned carriers: `items/*.md` named by the two scope files; page carriers `library/computability-theory/gap-amplification-and-assignment-testing.md` and `library/homological-algebra/homological-gaussian-elimination.md`. Reader reports, refuter JSON, pre/post hash snapshots, proof contracts, and cited dependency statements have been read for the routed findings. The batch-12 and batch-14 cross-group input files have no entries.
- Arora and Barak, [Computational Complexity: A Modern Approach](https://theory.cs.princeton.edu/complexity/book.pdf), author draft PDF pp. 349 and 379–380: concatenated and Reed–Solomon codes; self-correction queries are individually uniform but dependent, with error at most $2\delta$ for two queries.
- Dinur, [The PCP Theorem by Gap Amplification](https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf), PDF pp. 9–10, Definition 2.2: tester soundness is proportional with a fixed $\varepsilon$; the preceding code discussion defines rate from the encoded block length.
- Stacks Project, [Tensor product, tag 00CV](https://stacks.math.columbia.edu/tag/00CV), §10.12: balanced tensor universal property, finite direct sums, bimodule actions and Hom; [Finite projective modules, tag 00JL](https://stacks.math.columbia.edu/tag/00JL) for projective summands.
- Bar-Natan, [Fast Khovanov homology computations](https://www.math.toronto.edu/~drorbn/papers/FastKh/FastKh.pdf), Gaussian elimination and Schur-complement source.

## Consumer tracing and records

Statement and definition changes were checked at their direct uses. The multilinearization definition's nine references use its interpolation and Boolean-value properties; the only use that repeated an equality of other-variable degrees was repaired in `lem-multilinearization-preserves-boolean-values`. The quadratic-soundness lemma's three references use the specific tensor-test estimate; the generalized clause now has its ideal-rejection premise. The code theorem's two references use the padded-rate claim, with the definition's remark corrected. The assignment-tester definition's four direct references use its designated symbols and fixed-ratio clause; its circuit translation suppliers and their exponential consumer now handle unnamed inputs. The zero-round communication lemma is used by the verifier lemma and TQBF theorem, both updated. The homology corollary's direct example consumer uses only the induced isomorphism, so its text needed no change. The trivial gadget's direct definition remark now says instancewise. No sound consumer was edited solely for citing a supplier.

The two owned cross-batch dependency inputs are empty, and no changed direct consumer introduced a cross-group edge. The published complexes-category defect has since moved from U-C to A-R in `research/published-consumer-supplier-ledger.md` after the owner enclosed the integer grading in math delimiters. The direct draft consumer `def-complex-homotopy-and-contractibility-in-an-additive-category` uses the unchanged category assertion and needs no edit. The exact Step-5 claim and repair receipt record the pre/post carrier hashes. No substantial missing prerequisite remains for an owned local repair; no escalation is claimed.

## Checks

Reflow and precheck passed for all 21 locally changed items, including the three named-input supplier/consumer edits after the final statement adjustment. Strict proof-contract checks pass with zero errors for batch 12 and batch 14. Risk-report ran first without `--require-reviewed` for both contracts; the 33 HIGH/CRITICAL batch-12 items and 20 HIGH/CRITICAL batch-14 items have item-specific complete `risk_review` records. Both reports pass with `--require-reviewed` and zero errors (55 and 26 routed contract items respectively). The 50 group decisions reference 43 distinct 5a defect-ledger rows. Seven supplemental `gate:<defect_id>` decisions bind the additional repairs to their own item subjects instead of attaching them to a different touched item or page. Twelve touched repairs have `amended_repair` verdicts because their item text still matches the reader result while later item-specific proof-contract risk reviews changed the full carrier. The published reader row is now `fixed` by the owner-held bounded markup repair; the claim, receipt, local precheck and rendercheck close its routing obligation.

## Routed verdicts

The exact evidence and defect IDs for every obligation are in `research/frontier-35-ten-categories-alpha-f-5a-decisions.json`. The ledger rows have `caught_at_stage: 5a-adjudicate`; every completed local repair records `repair_confidence: 1`. The counts are two accepted item repairs, 19 amended item repairs, seven audit-enrichment reviews with no defect, two accepted page repairs, nine confirmed fatal refuter findings, three confirmed nonfatal refuter findings, one confirmed nonfatal published reader finding, and seven supplemental decisions (two fatal and five nonfatal).

| Obligation | Verdict |
|---|---|
| `touched:12:def-constraint-graph-powering` | `amended_repair` |
| `touched:12:def-plurality-decoding-of-powered-local-views` | `amended_repair` |
| `touched:12:def-shamir-protocol-for-tqbf` | `accepted_repair` |
| `touched:12:ex-ip-can-be-given-perfect-completeness` | `amended_repair` |
| `touched:12:ex-multilinearization-preserves-boolean-values` | `amended_repair` |
| `touched:12:ex-plurality-decoding-of-powered-local-views` | `reviewed_no_defect` |
| `touched:12:ex-two-quantifier-qbf-arithmetization-transcript` | `amended_repair` |
| `touched:12:fs-the-verifier-trusts-the-final-field-value` | `reviewed_no_defect` |
| `touched:12:lem-canonical-local-view-lift-preserves-perfect-satisfiability` | `accepted_repair` |
| `touched:12:lem-circuit-satisfaction-is-linear-quadratic-consistency` | `amended_repair` |
| `touched:12:lem-complete-linear-blowup-reductions-compose` | `amended_repair` |
| `touched:12:lem-each-round-has-polynomial-communication` | `amended_repair` |
| `touched:12:lem-expander-walk-violated-edge-collision-bound` | `reviewed_no_defect` |
| `touched:12:lem-exponential-base-assignment-tester-from-quadratic-oracles` | `amended_repair` |
| `touched:12:lem-first-false-claim-survives-with-root-bound-probability` | `amended_repair` |
| `touched:12:lem-honest-prover-maintains-the-claim-invariant` | `amended_repair` |
| `touched:12:lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws` | `amended_repair` |
| `touched:12:lem-plurality-consistency-along-middle-walk-positions` | `amended_repair` |
| `touched:12:lem-powering-amplifies-small-gaps` | `amended_repair` |
| `touched:12:lem-powering-preserves-perfect-satisfiability` | `reviewed_no_defect` |
| `touched:12:lem-shamir-protocol-has-perfect-completeness` | `reviewed_no_defect` |
| `touched:12:lem-shamir-qbf-verifier-runs-in-polynomial-time` | `amended_repair` |
| `touched:12:lem-total-soundness-follows-by-union-bound` | `reviewed_no_defect` |
| `touched:12:thm-gap-amplification-step` | `amended_repair` |
| `touched:12:thm-tqbf-has-a-polynomial-round-interactive-proof` | `amended_repair` |
| `page:12:gap-amplification-and-assignment-testing` | `accepted_repair` |
| `refuter:12:1` | `confirmed_fatal` |
| `refuter:12:2` | `confirmed_fatal` |
| `refuter:12:3` | `confirmed_nonfatal` |
| `refuter:12:4` | `confirmed_fatal` |
| `refuter:12:5` | `confirmed_nonfatal` |
| `refuter:12:6` | `confirmed_nonfatal` |
| `refuter:12:7` | `confirmed_fatal` |
| `refuter:12:8` | `confirmed_fatal` |
| `refuter:12:9` | `confirmed_fatal` |
| `refuter:12:10` | `confirmed_fatal` |
| `refuter:12:11` | `confirmed_fatal` |
| `refuter:12:12` | `confirmed_fatal` |
| `touched:14:cex-gaussian-reduction-is-not-strictly-natural-for-arbitrary-chain-maps` | `amended_repair` |
| `touched:14:def-graded-balanced-tensor-product-and-homogeneous-hom` | `amended_repair` |
| `touched:14:thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules` | `reviewed_no_defect` |
| `page:14:homological-gaussian-elimination` | `accepted_repair` |
| `reader:14:1` | `confirmed_nonfatal` |
| `gate:frontier-35-5a-f-extra-12-lem-multilinearization-preserves-boolean-values` | `confirmed_nonfatal` |
| `gate:frontier-35-5a-f-extra-12-fs-ip-equals-pspace-needs-no-degree-reduction` | `confirmed_nonfatal` |
| `gate:frontier-35-5a-f-extra-12-def-reed-solomon-outer-code-and-binary-linear-inner-code` | `confirmed_nonfatal` |
| `gate:frontier-35-5a-f-extra-12-lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester` | `confirmed_fatal` |
| `gate:frontier-35-5a-f-extra-14-ex-left-projective-bimodule-with-nonexact-tensor` | `confirmed_nonfatal` |
| `gate:frontier-35-5a-f-extra-14-cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology` | `confirmed_fatal` |
| `gate:frontier-35-5a-f-extra-14-thm-finite-iterated-homological-gaussian-elimination` | `confirmed_nonfatal` |
