# Batch 59 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-59`; scope file retains original assignment group `x`.

## Dispositions

Exactly three decisions are owed and supplied in the companion decisions JSON:

- `touched:59:lem-temperley-lieb-quantum-binomial-digit-criterion`: **amended_repair**. Retained the reader’s formal quantum-factorial notation, including the empty factorial. Corrected its bibliographic locator from section 2.3 to section 2.1, Definition 2.3, PDF p.6. No polynomial, parameter branch or proof argument changed.
- `touched:59:lem-temperley-lieb-link-state-gram-determinant`: **amended_repair**. Retained the reader’s algebraic-closedness citation and interpretation of the entire determinant product as a polynomial. Amended Proof 8.2 for the separately routed endpoint finding and synchronized the missing dependency in the batch manifest.
- `refuter:59:1`: **confirmed_nonfatal**, repaired with confidence 1. The old inclusive interior range reached the undefined `d_(2p−1,−1)`. The interior range is now `2≤m<p`; at `m=p`, both exponents equal `2p−2=d_(2p−1,1)`. The `p=2` contribution comes from the prefactor `[2]^{d_(3,1)}`. At `m=p+1` both exponents remain 1. No negative dimension index is needed.

All five confirmed defects have separate closed ledger rows: `nm81-b59-quantum-factorial-notation`, `nm81-b59-factorial-source-locator`, `nm81-b59-gram-closedness-citation`, `nm81-b59-gram-whole-product`, and `nm81-b59-gram-endpoint-index`. Each belongs to `3a-adjudicate` and is referenced by its decision. The refuter decision references exactly its one row. The manifest synchronization is a mechanical consequence, not another mathematical defect. No judge stamp existed on either edited item; the endpoint correction is local, not a material rewrite.

## Historical evidence

The quantum-binomial pre-reader raw SHA-256 `f48faa8b34a1fbcc612f3b74e5f69d07898d9c3fb83f009d02c76be4e31456e7` matches `.autopilot/non-ml-math-remaining-81-2026-10-18/owner-step2-source-baseline/items/lem-temperley-lieb-quantum-binomial-digit-criterion.md`. Its initial current raw SHA-256 matched post-reader `8adc5bc6429eb92cb5dc1bbf0456c2aacaee24da9af08e26e0bb4c9a77418711`.

The Gram pre-reader raw SHA-256 `c568b555250906bf962583bfa86a7b4ca31e05411a8321c20537d55fc1815db2` matches `research/non-ml-math-remaining-81-2026-10-18-owner-step2-tl-restriction-premise-resolution/consumers/before/items/lem-temperley-lieb-link-state-gram-determinant.md`. Its initial current raw SHA-256 matched post-reader `fb72d64ca82bc1467e8bffadbb23ebb1ac4a3f8526b4ad469abe360dcb3c71bd`. Compared the exact archived pre and current reader-post text. The pre already contained the eigenvalue proof that complex simple-module endomorphisms are scalar; the reader added its missing explicit dependency/citation. It did not supply an absent mathematical argument. The whole-product continuation correction is necessary: at `n=6,p=3,delta=0`, the individual quotient `[3]/[2]` has a pole, although the whole determinant product has polynomial continuation. Original snapshots remain unchanged.

## Mathematical and risk review

Followed the generated dependency levels, completing each item’s risk review and report checkpoint before proceeding upward. Twelve HIGH/CRITICAL risk reviews are now complete in the batch contract. Each records the actual proof, prerequisites, source comparison and boundary cases; those entries are the detailed per-item evidence, not a scaffold acceptance.

At level 1, reviewed the eight-step quantum-binomial argument and its five direct prerequisites. Symmetric Laurent descent and the final-letter recurrence establish the polynomial/factorial identities. A quadratic field extension preserves zero values. The `Q=1` branch gives quantum characteristic equal to the field characteristic; otherwise finite order is prime to that characteristic. Block coefficient extraction retains unit factors, and ordinary Lucas digits give precisely the stated full-row criterion. Checked `n=0`, empty products, characteristic two, both endpoint coefficients and both directions. No factorial is divided after vanishing specialization.

At level 3, reviewed closure cyclicity/Markov rules, integral spin split injection and projectivity equivalence. Read actual diagram category, associative stacking, generation, local relations and free-coordinate suppliers. Closure counts respectively preserve the cyclic graph, add one loop for a new identity strand, or add none for the last cup-cap attachment. The nonzero loop hypothesis and rank restriction on the third rule are correct. The spin maps satisfy both snake equations, have the stated symmetric generator matrix, and bending is invertible over the Laurent ring. Matching Dyck words give a unitriangular coordinate minor, so the explicit linear retraction survives every base change, including rank zero. Augmentation multiplicativity follows from propagation; splitting it and rightmost-letter annihilation establish both projectivity directions, including zero loop and ranks zero/one.

At level 4, reviewed the field projector criterion, recursion properties and order-three example. The common kernel in each word weight is the line spanned by `v_k`, with square `G_(n,k)`. A normalized two-sided projector forces that square to be invertible. Conversely, the generic projector matrix and integral retraction place the element in the localization at those precise Gaussian denominators; freeness descends all identities there. Specialization and finite Gaussian elimination then give the result over the original field. Reflection proves both-sidedness and uniqueness. The recursion’s sandwich identity proves idempotence and annihilation; propagation preserves identity coefficient 1; word span gives the corner; normalized Markov rules give the trace. Every inverted denominator is covered by the hypotheses, while the final trace numerator may vanish. At order three the algebra is explicitly C×C and its trace matrix is all ones.

At level 5, checked the existence theorem’s exact composition of the two field criteria, including the translation between characteristic-zero conventions `p=0` and `p=infinity`. The loop-two example uses `[r]=r`, `d_1²=2d_1` and normalized trace `3/4` correctly.

At level 7, checked cellular semisimplicity in both directions using actual right cell-module classification, cellular dimension count, Wedderburn decomposition through opposite algebras, the complex eigenvalue argument, and nilpotence of the Jacobson radical. Zero form quotients are not mistaken for actual heads. For the determinant, reviewed all eleven steps and all eight direct suppliers. Generic lower-rank nondegeneracy supplies an invariant orthogonal complement and scalar quotient form. The triangular basis change has determinant 1. The four-type gluing blocks give the scalar recurrence; invertibility is justified before division, and empty blocks at `n=2p+1` are omitted. At `n=2p` restoring the terminal arc adds one loop. Checked both product recurrences, the repaired endpoint, `p=0,1`, ranks zero/one and whole-product polynomial specialization. The restriction supplier’s optional central splitting proof is not needed by this consumer’s orthogonal-complement argument.

At level 9, reviewed the trace-boundary theorem with its actual classification and projector suppliers. Order at least three gives nonzero loop and all recursion denominators through rank `ell−1`; the nonzero projector has trace zero. Cyclicity and its one-dimensional corner put it in the trace radical. The independent complex classification gives semisimplicity. The corner also implies the primitivity used in F2. No reviewed construction uses AC.

## Sources inspected

- [Spencer, arXiv:2011.01328v4](https://arxiv.org/pdf/2011.01328): Definition 2.3, printed/PDF p.6; section 2.5 Theorem 2.7/Corollary 2.8, p.9; complete section 10.3, p.32. Used the zero pattern, preserving unit factors rather than importing a scalar-free quantum Lucas equality.
- [Elias–Libedinsky, Appendix A by Webster](https://arxiv.org/pdf/1401.2467v2): Theorem A.2 statement, PDF p.24; Lemma A.7 and full leading-word argument, p.27; proof of A.2, p.29. Local elementary retraction/localization replaces the quantum-group prerequisites; positive-loop signs are checked directly.
- [Chen](https://arxiv.org/pdf/1502.06845): Definition 2.1.7, PDF p.16; Theorem 2.3.2 and complete induction, pp.20–23; Proposition 2.3.6, p.24; Definitions 5.1.3–5.1.4 and Lemma 5.1.5, p.47. Converted unnormalized closure trace by division by delta to the rank power.
- [Iohara–Lehrer–Zhang](https://arxiv.org/pdf/1702.08128): section 1.2, equation (1.2), PDF p.2, and section 2, p.3. Converted `f_i=-d_i`; no converse from semisimplicity to nondegenerate trace is used.
- [Ridout–Saint-Aubin](https://arxiv.org/pdf/1204.4505): section 4, Lemma 4.3, Proposition 4.4 with full block calculation, equations (4.6)–(4.20), PDF pp.18–20; Theorem 4.7 and Corollary 4.6, p.20. Checked the same arc/defect convention and exact scalar and determinant recurrences.
- [Mathas manuscript](https://web.math.ucsb.edu/~bigelow/books/mathas.pdf): Theorem 2.13 classification statement, PDF p.18. Used the current local supplier’s precise nonzero-form condition, not the following source prose’s inaccurate use of “non-degenerate”.

General published algebra suppliers were checked at their exact used interfaces; this is not an audit of their entire transitive closure or every bibliography entry.

## Consumers and owner alerts

The reader altered the Statements’ notation/continuation interpretation, so searched all item and page references and inspected their actual uses. Four owned direct item consumers remain sound: the complex classification (including separate removable factors in its critical odd-rank branch), zero-loop rank-three/four example, field projector criterion and Spencer existence theorem. The A-page summary uses unchanged conclusions.

Ten outside direct item consumers were checked for affected uses without editing: `ex-temperley-lieb-order-three-critical-standard-module`, `ex-temperley-lieb-order-three-noncritical-gram-radical`, `lem-temperley-lieb-annular-central-element-and-reflection-maps`, `lem-temperley-lieb-critical-gram-unit-interval`, `lem-temperley-lieb-critical-standard-modules-are-simple`, `lem-temperley-lieb-jones-wenzl-ring-descent`, `lem-temperley-lieb-root-gram-rank-and-reflection-dimensions`, `lem-temperley-lieb-root-noncritical-radicals-and-simple-heads`, `lem-temperley-lieb-signed-forest-candidates-and-their-composition`, and `lem-temperley-lieb-spencer-support-binomial-and-reflection-calculus`. They use generic nondegeneracy, explicit nonsingular low-rank factors, independently justified removable critical factors, the integer polynomial identity, or unchanged Gaussian polynomial/factorial/zero-pattern interfaces. No mathematical consumer repair is required; no propagation to another hop is triggered.

Nonblocking owner follow-ups outside the three routed carrier decisions:

- In outside `lem-temperley-lieb-critical-standard-modules-are-simple`, Proof 3.1 says “Steps 1.1–2.2” although the last prior step is 2.1; its actual tags correctly cite 2.1 and its proof supplies the conclusion. Correct that prose reference in its owning batch if still current.
- Bibliographic locator alerts on unrouted carriers: closure-trace definition and cyclic/Markov lemma cite Chen section 5.1 at PDF pp.60–61, whereas the actual source is PDF pp.45–47 (closure Definition 2.1.7 is p.16). The recursion-properties lemma’s Proposition 2.3.6 is PDF p.24, just beyond its pp.19–23 range. Exact source sections were independently found and read; these page-number errors do not block the local proofs. Left those carriers unchanged under the exact decision scope.

No defective published carrier was found. No published-ledger edit or lock was needed. Preserved cross-batch records and stable IDs; appended this batch’s consumer review to the frontier ledger. No withdrawal, substantial prerequisite gap or mathematical escalation remains.

## Local checks and handoff

- Initial risk report: 17 scoped items; twelve HIGH/CRITICAL items; zero mechanical errors.
- Reflow: both edited item paths unchanged.
- Precheck: both edited items pass; 2 checked, 0 failing.
- Final batched `node tools/proof-layout.mjs items/lem-temperley-lieb-link-state-gram-determinant.md items/lem-temperley-lieb-quantum-binomial-digit-criterion.md`: 2 items, 19 steps, 0 defects.
- Strict proof-contract check on the two edited items: 2/2 checked, 0 errors, 0 warnings.
- Renderer check on the two edited items: frontmatter and every math span parse; no delimiter errors.
- Final risk report with `--require-reviewed`: 17 items routed, 0 errors; all twelve required reviews complete.
- Defect-ledger append: five valid closed rows appended atomically through the ledger tool with `--no-render`.

These are local checks, not mathematical certification. The engine owns decision hashes, judging, gate battery and stage transitions.
