# Step 5a reader report — batch 12

Run: `frontier-35-ten-categories`  
Role: reader  
Manifest: `research/frontier-35-ten-categories-batch-12.pages.json`

## Opened inventory

Opened all four manifest pages and all 58 listed items. The directly cited dependencies needed to check the claims were also opened, including the published constraint-graph, graph-power, field, circuit, Fourier, and QBF items.

### A page: `library/computability-theory/the-ip-equals-pspace-theorem.md`

`def-qbf-arithmetization-operators`, `lem-quantifier-polynomials-agree-on-booleans`, `def-multilinearization-operator`, `lem-multilinearization-preserves-boolean-values`, `lem-ordered-arithmetization-evaluates-to-the-truth-value`, `lem-efficient-prime-field-for-a-polynomial-soundness-budget`, `def-shamir-protocol-for-tqbf`, `lem-honest-prover-maintains-the-claim-invariant`, `lem-each-round-has-polynomial-communication`, `lem-shamir-protocol-has-perfect-completeness`, `lem-first-false-claim-survives-with-root-bound-probability`, `lem-total-soundness-follows-by-union-bound`, `lem-shamir-qbf-verifier-runs-in-polynomial-time`, `thm-tqbf-has-a-polynomial-round-interactive-proof`, `thm-pspace-is-contained-in-ip`, `thm-ip-equals-pspace`, `cor-ip-is-closed-under-complement`, `thm-ip-can-be-given-perfect-completeness`, `fs-ip-equals-pspace-needs-no-degree-reduction`, `fs-the-verifier-trusts-the-final-field-value`.

### B page: `library/computability-theory/the-ip-equals-pspace-theorem-examples.md`

`ex-two-quantifier-qbf-arithmetization-transcript`, `ex-multilinearization-preserves-boolean-values`, `ex-ip-can-be-given-perfect-completeness`, `cex-ip-equals-pspace-needs-no-degree-reduction`.

### A page: `library/computability-theory/gap-amplification-and-assignment-testing.md`

`def-gap-preserving-csp-reduction`, `lem-complete-linear-blowup-reductions-compose`, `def-degree-reduction-by-expander-clouds`, `lem-cloud-consistency-forces-near-constant-labels`, `thm-degree-reduction-preserves-unsatisfaction`, `def-constraint-graph-powering`, `lem-canonical-local-view-lift-preserves-perfect-satisfiability`, `def-plurality-decoding-of-powered-local-views`, `lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws`, `lem-plurality-consistency-along-middle-walk-positions`, `lem-expander-walk-violated-edge-collision-bound`, `lem-overlap-controlled-union-lower-bound`, `lem-powering-preserves-perfect-satisfiability`, `lem-powering-amplifies-small-gaps`, `thm-gap-amplification-step`, `def-explicit-constant-rate-constant-distance-code`, `def-reed-solomon-outer-code-and-binary-linear-inner-code`, `lem-reed-solomon-outer-code-has-constant-rate-and-distance`, `lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation`, `lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time`, `lem-concatenated-code-multiplies-rate-and-distance`, `thm-explicit-code-construction-and-distance`, `def-assignment-tester-and-rejection-ratio`, `def-hadamard-linearity-constraint-system`, `thm-linearity-test-rejects-proportionally-to-distance`, `def-quadratic-consistency-test`, `lem-quadratic-test-soundness`, `lem-circuit-satisfaction-is-linear-quadratic-consistency`, `lem-exponential-base-assignment-tester-from-quadratic-oracles`, `lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester`, `fs-repeating-constraints-amplifies-the-gap`.

### B page: `library/computability-theory/gap-amplification-and-assignment-testing-examples.md`

`ex-degree-reduction-preserves-unsatisfaction`, `cex-repeating-constraints-amplifies-the-gap`, `ex-plurality-decoding-of-powered-local-views`.

## Repairs and evidence

### Powering and local views

- `items/def-constraint-graph-powering.md`, Definition and Remarks: changed middle-position tests to read the canonical coordinate `κ_{x,y}` for the relevant vertex, so the claimed coordinate is independent of where lazy holds occur. Corrected the alphabet bound to `|Σ|^{(2d)^{O(t)}}`, which also covers `d=1`. Replaced the incorrect partner count with direct incidence/edge counts. Each start-pattern pair now has two incidence copies paired with the reversed pattern and opposite copy bit. The symmetric central window pairs mirrored move tests by transposition; hence a reversal-fixed walk has a symmetric table and its two copies form a valid ordinary loop. The degree is `2(2d)^L`, there are `|V|(2d)^L` ordinary edges, and uniform edge sampling via the unique copy-0 incidence is equivalent to uniform start-pattern sampling.
- `items/def-plurality-decoding-of-powered-local-views.md`, Definition and Remarks: plurality claims now use the same canonical vertex coordinate as the edge relation; extended the claim to all `1≤ℓ≤R`; clarified that distinct walk patterns reaching the same endpoint remain separate votes, while repeated visits within one pattern do not add votes.
- `items/lem-canonical-local-view-lift-preserves-perfect-satisfiability.md`, Facts [F1] and Proof 2.1: aligned the slot description with the copy-bit construction and verified the canonical coordinates satisfy each orientation; the copy bit does not affect the relation.
- `items/lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws.md`, Proof 1.1, 1.2, 2.1, 5.1 and statement: counted length-`ℓ` patterns with `k` moves as `binom(ℓ,k)d^ℓ`, giving the stated binomial move count and uniform move-slot sequence; corrected the odd-binomial maximum inequality; made the claimed value depend on the endpoint’s canonical coordinate; and used the admissible window constant `1/(8C₀|Σ|)` with `t≥4` and the resulting `m≥t/2` bound.
- `items/lem-plurality-consistency-along-middle-walk-positions.md`, Statement, [F1], Proof 1.1–3.1 and Remarks: defined the sample as a uniform ordinary powered edge oriented by its unique copy-0 incidence (equivalently a uniform start-pattern), and aligned the middle-position claims and window constant with the canonical coordinates and the lazy-length lemma.
- `items/lem-powering-amplifies-small-gaps.md`, Facts [F1], [F3], Proof 1.1–5.1 and Remarks: aligned the violation probability with uniform ordinary-edge sampling, used the central `k` consecutive positions for the collision estimate and invoked stationarity at that subwindow’s start, counted `k=2⌊a⌋+1` exactly for `a=c_win√t≥1`, and corrected the resulting event-sum lower bound and constants. The proof’s two regimes now yield the stated `β√t min(UNSAT(G),1/t)` bound.
- `items/thm-gap-amplification-step.md`, Statement, [F2], Proof 1.1, 3.1, 4.1 and Remarks: updated the output degree to `2(2D)^{2t+1}` and the ordinary-edge count for doubled walk slots. The theorem now proves the composed map directly on the regular range produced by degree reduction, with `C_t=D(2D)^{2t+1}`; it no longer applies the general composition lemma to a powering map whose established domain is only the regular intermediate graphs.
- `library/computability-theory/gap-amplification-and-assignment-testing.md`, summary prose: replaced “one slot per lazy walk” with the paired-incidence convention and explicit duplication for reversal-fixed walks.

Evidence for the endpoint-coordinate convention: Dinur, [*The PCP Theorem by Gap Amplification*](https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf), §6, equation (4), PDF p.18 / printed pp.19–20, defines the claim for a vertex `v` using the endpoint-view coordinate `~σ(w)_v`; Lemma 6.2, PDF pp.21–22, likewise indexes the claim by the endpoint vertex. Arora–Barak, [*Computational Complexity: A Modern Approach* draft](https://theory.cs.princeton.edu/complexity/book.pdf), §18.5.1, PDF pp.386–390 / printed pp.371–377, uses vertex-indexed local-view claims and plurality decoding (Claim 18.32, PDF p.389). The duplication repair follows the opened published dependency `items/def-graph-power-and-walk-constraint.md`, which notes that reversal can fix a walk slot and instructs duplication when ordinary paired incidences are required; `items/def-regular-multigraph-and-normalized-adjacency.md` specifies that ordinary loops have two incidences.

### QBF examples and protocol

- `items/ex-two-quantifier-qbf-arithmetization-transcript.md`, Example and Verification 1.1–5.1: recomputed `L=4`, `n=2`, `T=5`, `D=4`, `N=241`, so the first prime above `N` is 251; corrected the field and the modular calculation `−3≡248`, `248+12=260≡9 (mod 251)`.
- `items/ex-ip-can-be-given-perfect-completeness.md`, Example and Verification 1.1–5.1: for `x∧¬x`, counted four syntax nodes, obtaining `D=4`, `N=97`, and first prime `p=101`; corrected the soundness numerator to `2TD=16` and the field list.
- `items/ex-multilinearization-preserves-boolean-values.md`, Example and Verification 4.1: corrected the degree description: the original polynomial has degree three in `x` and degree one in `z`; the multilinearized polynomial has degree at most one in each.
- `items/def-shamir-protocol-for-tqbf.md`, Definition: set `p=3` when `T=0`, where the positive-`T` field-size lemma does not apply; this still satisfies the protocol’s field-size inequality for the `N=2` zero-round case.
- `items/lem-honest-prover-maintains-the-claim-invariant.md`, Facts [A3] and Proof: replaced the false claim that reductions preserve all variable dependencies with the block-prefix/reverse-schedule fact; the schedule assigns all variables needed for the incoming polynomial even if cancellation removes them from the outgoing polynomial.
- `items/lem-first-false-claim-survives-with-root-bound-probability.md`, Facts [A5] and Proof 1.1: stopped reading the active variable at quantifier nodes where it may be undefined; the active value is used only for reduction nodes, and the reverse schedule supplies the variables needed by the challenged polynomial.
- `items/lem-honest-prover-maintains-the-claim-invariant.md` and `items/lem-powering-amplifies-small-gaps.md`: adopted the canonical precheck stratification, which moves the honest-message legality step before the verifier-test phase and places the event-sum estimate before the two-regime conclusion; updated in-item step references and contract numbering.

### Circuit equations and reduction composition

- `items/lem-circuit-satisfaction-is-linear-quadratic-consistency.md`, Statement and Proof 1.1–4.1: corrected the OR gate equation’s nonzero coefficient count to four and the total coefficient bound to `O(m+1)`; recorded the designated output index rather than assuming it is the last gate; and handled the valid boundary cases (a designated output may be an input or earlier gate, while a well-formed circuit has at least one wire).
- `items/lem-exponential-base-assignment-tester-from-quadratic-oracles.md`, Facts [F1] and Proof 2.1, 3.4: synchronized the four-coefficient equation, handled `n=0` by distinguishing whether the empty input satisfies the circuit, and removed the invalid `N=0` circuit case because a well-formed circuit has an output wire.
- `items/lem-complete-linear-blowup-reductions-compose.md`, Statement, Facts and Proof 1.1–2.1: added the necessary hypothesis that the first reduction preserves at least one edge on every nonempty input; the actual degree-reduction application has this property by its stated output edge count.

### Contracts and validation

Updated the batch proof-contract file for the edited derivation claims, inputs, source-section quotations, and boundaries. This includes the powering slot counts and theorem degree, the corrected examples and circuit claims, the QBF schedule hypotheses, and the two canonical step-number changes. The repaired definition `def-shamir-protocol-for-tqbf` has no proof-contract row in the batch file, so none was available to update for it. Checked the edited items’ frontmatter: none had a `verification.judge` record to remove.

Ran the requested `reflow.mts` and `precheck.mts` commands for all 16 changed items. Reflow completed for all; it changed formatting in `lem-powering-amplifies-small-gaps`, `lem-circuit-satisfaction-is-linear-quadratic-consistency`, and `lem-exponential-base-assignment-tester-from-quadratic-oracles`, and reported the other items unchanged. After adopting the canonical stratification, precheck passes for all 13 proof-bearing items; the three definitions (`def-constraint-graph-powering`, `def-plurality-decoding-of-powered-local-views`, `def-shamir-protocol-for-tqbf`) each report `0 checked, 0 failing` because they have no checkable proof body.

## Uneditable defects

None found. No confirmed defect remains in an uneditable published dependency, B-page prose, another batch, or a published item.

## Page verdicts

- `the-ip-equals-pspace-theorem` (A): pass; no page-prose repair needed. The listed QBF item repairs are recorded above.
- `the-ip-equals-pspace-theorem-examples` (B): pass; no B-page prose repair needed. Its arithmetic examples are repaired in their assigned items.
- `gap-amplification-and-assignment-testing` (A): pass after the local-view slot-summary repair above.
- `gap-amplification-and-assignment-testing-examples` (B): pass; no B-page prose repair needed.

## Blocker and coverage note

No blocker. All four assigned pages, all 58 manifest items, the dependencies needed to check the claims, and the cited source passages named above were opened. No coverage limitation remains known.
