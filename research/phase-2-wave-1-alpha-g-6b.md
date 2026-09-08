# Step 6b group g — phase-2-wave-1

Scope: batches 9 and 13 only. No stage transition or judge outcome is asserted.

Post-reader versus pre-6b snapshots have identical item carriers, page carriers,
and manifests for both batches (only the snapshot label differs). Three batch-9
touched obligations are owed; no page, reader-finding, refuter-finding or
post-reader obligation is routed. Both reader-findings arrays and refuter flagged
arrays are empty. No prior group-g 6b decision file existed at entry.

## Mathematical review

Read current items and all direct external dependency statements for both batches.
The three repaired carriers are sound: fixed-size density selection counts ordered
adjacency pairs in A times B, allowing overlap; the binomial averages require
1 <= m <= N, with internal division restricted to m >= 2. Both loglog examples
quote the current theorem formula, have positive denominator on 0 < x < 1/2,
and give exponent 8C at x=1/16. The comparison permits different fixed positive
constants and proves eventual dominance with its explicit x_r witness.

Batch-9 high-risk proof chain read in full: induced-copy density definition;
good-copy extension; fixed-size selection; local special-copy trichotomy;
maximal-blowup trichotomy; restricted-blockade production; subreciprocal recursion
parameters; logarithmic/constant divisibility; blockade amplification; density
theorem; scale-comparison example. The local special-copy proof uses the
intermediate H_(r-1)-w, correctly distinguishing it from H-w. Maximal-blowup
processing complements both pattern and host, uses integral block sizes, and
retains both directional degree bounds. Zero-floor width uses explicitly allowed
empty QID blocks. Amplification selects backwards, preserves bounds into fixed
tails, treats m=1 without density division, and uses complementary profiles
without assuming a copy bound for the complemented host. Terminal recurrence
pairs have product at least one; the full-interval change epsilon'=epsilon^a
weakens the copy threshold in the required direction.

Source checked: https://arxiv.org/html/2301.10147v3, sections 3.1, 4.1–4.4,
5.1–5.2 and introductory base-two convention. Local proofs were checked as
written, including strengthened non-strict bounds and explicit finite extrema,
rather than treating the source or independent reports as verdicts.

Batch-13 high-risk items read: epsilon-NFA definition (finite stabilization,
least closure, arbitrary union preservation, set-coded recursion and path iff),
subset invariant (starts at E(S), including empty word), DFA singleton embedding,
full three-state subset witness (eight transitions and four unreachable states),
and raw Turing-machine interface (finite support exactly m, distinct outcomes,
nonhalting initial state, empty alphabet/input and clamped left boundary).
Relevant direct ZF set, recursion, finite-cardinality, DFA transition and
acceptance supplier statements have been checked. Source convention verification,
contract/ledger writes and focused gates are complete as detailed below.

Both owned consumer inputs correctly remain `[]`: current item dependencies,
page prerequisites and the frontier collector show no same-frontier external
supplier. No dependency changed, so no refresh or input rewrite was needed.
No new mathematical repair, withdrawal or escalation was required.

## Completed item reviews

- `def-induced-copy-density-and-homogeneous-restriction-parameter`: The host has n>0, so labelled count/n^h is defined, including h=0 with the unique empty map. Singletons satisfy both edge-count inequalities at a=b=0; the finite powerset supplies an attained nonempty maximum in [1/n,1]. The full set qualifies when either threshold is at least 1. Checked def-induced-copy-number, induced-embedding definition, two-element-subset count and finite powerset statement.

- `lem-good-copy-extension-count`: For r=0 the given map is its unique extension. For r>0 the union of at most |I| forbidden sets leaves at least t/j>0 images; disjoint label blocks ensure injection, and different new images give disjoint extension families. This verifies empty I and j=t=1, without arbitrary-index choice. Checked the two-direction blowup definition and finite sum/product suppliers; source 4.2(1).

- `lem-qid-fixed-size-density-selection`: For finite nonempty A and 1<=m<=N the m-subset family is nonempty. Counting incidences of ordered adjacency pairs gives ratio m/N even for overlapping A,B; counting unordered internal edges gives m(m-1)/(N(N-1)) only for m>=2. B empty, m=1 and m=N are explicitly covered, and the complement converts the bound in the correct direction. Checked double counting, averaging, binomial formula and two-element count; source 4.3(1), 5.2(1).

- `lem-local-special-copy-trichotomy`: The h=1, empty A/B and 0^0 cases are discharged before division. Failure of the count alternatives forces a first r>0 and positive retained nonedge mass. The fibres use H_(r-1)-w, with a unique restriction/completion correspondence; at most |B|^(h-2) fibres leaves the claimed mass and both size bounds. Checked function-count and double-count statements; source 3.1, independently verifying the intermediate-pattern correction.

- `lem-qid-maximal-blowup-trichotomy`: Checked all ten steps against source 4.3 and current local trichotomy, blowup exclusion, fixed-size selection, trimming and floor statements. h=1 and the singleton-size branch hold; reciprocal-integrality makes t_i integral. r1>=k*r_k bounds all successive sets; 8hx<=1 gives the trimming factor. Complementing BOTH pattern and host preserves the excluded counts. Exact-size trimming retains both directional bounds, contradicts finite maximality, and y=1/ceil(1/x) in [x^2,x] yields the final doubled exponents.

- `lem-special-copy-trichotomy-produces-a-restricted-blockade`: Source 4.4 and current maximal-blowup trichotomy support the induction. h=1 has impossible copy premise; zero floor width uses explicitly permitted empty blocks. In the positive-width branch finite maximal sequences exist, and k-1 below 2log2(1/x) forces |B_k|>1 before applying the supplier. Both excluded outcomes contradict the correct count/length bounds; induction on H-g preserves the x-domain and floor width. Keeping half the indices preserves directional bounds on later vertices.

- `lem-subreciprocal-functions-close-under-the-density-recursion`: Every ell evaluation is in (0,1/2); ell(c)>1 gives 0<z<1 and b>2. Monotonicity gives p^2>=ell(x)>1 and 0<Q<=L. The ceiling t is the least natural with the required power bound, including integral ratios and t=1. The strict exponent comparisons give delta<x^d eta^t. Checked floor, log and positive-base power statements; source 5.2 parameter setup.

- `lem-qid-logarithmic-and-constant-divisibility`: The elementary floor/induction proof verifies log2(y)<=y for every y>=2, including exact powers; both candidate functions are nonincreasing and greater than 1 on the open domain. Choosing d>max(1,k1,k2), c=1/(16|H|) turns the non-strict premise into the strict blockade premise and preserves floor width. The logarithmic length exceeds 2 on that c-domain. Checked current blockade theorem, subreciprocal definition and floors; source 5.1 and the preceding constant-function discussion.

- `lem-ell-divisibility-amplifies-through-a-blockade`: For each cutoff host, inherited labelled counts meet divisibility since h>=1 and delta<x^d eta^t; delta*n>1 gives N>eta^-1 and positive blocks. Backwards selection fixes the tail before trimming and ensures profile eligibility and enough vertices for the ceiling m. The two exact binomial identities bound all internal/cross edges also at m=1. Complement processing uses beta_s(u,pv) on the original induced host, never an unproved complemented copy hypothesis. Checked all F1-F7 suppliers and source 5.2(1).

- `thm-quantitative-density-theorem-for-ell-divisive-graphs`: Singletons handle delta0*n<=1 by edge counts. The finite recurrence induction enumerates every exponent pair summing to r; terminal products p^t epsilon^2>=1 force one threshold >=1, so all terminal profiles equal 1. The finite maximum supplies a nonempty witness. For the full interval, a=log2(1/c)>1 gives epsilon^a<c and monotonic ell gives delta_prime>=delta, preserving both the copy premise and final size. Checked profile, parameter and amplification suppliers; source 5.2.

- `ex-comparing-the-two-quantitative-density-scales`: With C1,C2>0 and L>1 both logarithmic losses and the denominator are positive. Cancellation gives C2/(C1 log2 L); the explicit x_r makes this less than every r>0 and r=1 gives eventual strict dominance, without global dominance for unequal constants. At x=1/16 equal constants give losses 16C and 8C. Both F1/F2 formulas agree with the current corollary/theorem, and base-two logarithm laws apply.

- `def-epsilon-nfa-word-transition`: Finite strict inclusion cannot persist through n+1 stages, so C_n is closed; induction proves leastness and the finite-path characterization in both directions. Union preservation follows from the starting vertex, including the empty family. The fixed-word recursion is a self-map on N x P(Q), and its graph is separated in an ambient set; prefix compatibility proves the word recursion. Splitting at the last letter proves path iff without simultaneous choices. Empty S,F,Sigma and zero-length paths are checked. Read direct ZF suppliers; Gallier Definitions 3.5-3.7 and Aho sections 1-2 agree with the stated tagged-label convention.

- `thm-subset-construction-reachability-invariant`: The full finite powerset, closed start and total transition meet the current DFA definition. Induction begins at E(S), which is essential for unclosed S and the empty word, and uses exactly the NFA and DFA successor rules. Final-set membership is equivalent in both directions to nonempty intersection; the empty subset absorbs every word. Empty alphabet/finals and F=Q are covered. Checked all six suppliers; Aho section 2 uses the full powerset, whereas Gallier section 3.5 uses closed subsets as accurately distinguished locally.

- `prop-deterministic-automata-are-special-nondeterministic-automata`: The given DFA total map supplies each singleton letter value and the separate epsilon tag receives empty. Saturation is the identity, hence induction proves the singleton equality from every state for every word, including empty alphabet and empty word. Singleton intersection is equivalent in both directions to DFA final-state membership, including empty/full finals. Checked current DFA definition, extended transition, acceptance, induction and epsilon interface; Gallier section 3.5 p.34 explicitly observes the DFA inclusion.

- `ex-subset-construction-for-an-epsilon-nfa`: Recomputed all eight transitions: A maps to B,Z; B to B,C; C to Z,C; Z to Z,Z. The sole epsilon edge p->q makes all four closed. Words epsilon,a,ab,b respectively reach A,B,C,Z, and closure of this list under both letters proves exhaustiveness by induction. Enumerating all eight subsets leaves precisely {p},{q},{p,r},{p,q,r} unreachable; finals in the reachable part are B,C. The current subset theorem supplies exactly this construction; Aho section 2 gives the convention, not this original witness.

- `def-turing-machine-initial-and-halting-configuration-interface`: Separation inside Gamma^N defines finite-support tapes and inside N x Gamma defines the unique initial tape. Blank exclusion proves support(t_w)=m in BOTH directions. Distinct qacc,qrej give disjoint outcomes, and the additional q0 distinctness gives a nonhalting initial configuration. Empty input/alphabet, Gamma={blank}, length one and head zero are valid; no run/reachability theorem is asserted. Checked all eight ZF suppliers. Savage 5.1.1 has a single-ended tape and abnormal left exit; Watrous 12.1 excludes halting transition entries but has a two-sided tape and preceding blank start; MIT lecture 5 slides 8-10 has a right-infinite tape and full transition domain. Local differences are explicitly conventions.

## Decisions and final validation

All 16 required risk reviews are complete in the owned contracts. The three
routed reader repairs are confirmed: one `accepted_repair` for the loglog
substitution example, and two `amended_repair` decisions for fixed-size selection
and scale comparison because their contracts now contain the required risk
review. Their item bytes are unchanged. Every owned item still matches its
post-reader raw item hash. Reader-findings and refuter-report hashes match the
scope records. The exact routed obligation census is 3/3, with unique ledger
references and repair_confidence 1 on each decision.

Appended three closed reader-defect rows through `tools/defect-ledger.mjs append`
using the group row file. The generated shared view was refreshed by that tool.
Metadata clarification: those rows' prevention.ref spells the rendering tool
`tools/rendercheck.mts`; the existing tool actually run is
`tools/rendercheck.mjs`. The append-only shared rows were preserved; this is a
path spelling clarification, not another defect outcome or mathematical blocker.

Focused checks completed:

- `risk-report` on each owned contract, first without and then with
  `--require-reviewed`: 0 errors; all eleven batch-9 and five batch-13 required
  reviews complete.
- Strict proof contracts: 22/22 and 9/9, no errors or warnings.
- Citation fidelity: 86 citations over 31 items, no missing quotes or detected
  widening candidates. The cited mathematical statements were also read.
- Explicit owned-item precheck: 26 proof-bearing items passed; the remaining five
  definitions were read directly.
- Explicit rendercheck: all 37 owned item/page files passed real KaTeX and YAML.
- Content policy: 31 scoped items, no errors or warnings.
- Defect-ledger validation for this run: no errors.
- Owned obligation/hash consistency and scoped whitespace checks passed.

The first ad hoc report-hash check mistakenly used the reader Markdown report;
inspection of step6-scope.mjs showed that reader_report_sha256 covers the reader
findings JSON. The corrected check passes. No defect row was created for this
mechanical check mistake.

No item body changed during 6b, so reflow and precheck after a material edit were
not triggered; focused precheck was nevertheless run. No independent review was
rerun or altered. Subject hashes and any judge outcomes remain for the engine's
configured stages. Group g has no unresolved mathematical blocker. Next action:
return these records to the engine; this report makes no stage-transition decision.
