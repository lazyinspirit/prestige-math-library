# Batch 62 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-62`. Only batch 62 is owned.

## Completed reviews in dependency order

### lem-polynomial-squarefree-decomposition-and-multiplicity

Steps 1.1–4.1 checked against current F1–F9 supplier statements. Characteristic zero lowers multiplicities exactly one per gcd; Bezout field-extension stability preserves the rational gcd. Division uniqueness descends q_k to Q. Degree zero gives the empty product, constants 1 have no roots, and all choices are finite. No defect.

### thm-sturm-sign-variation-counts-distinct-roots

Steps 1.1–5.1 checked against division, Bezout, continuity, IVT, derivative and factor/degree statements. No adjacent sequence zeros; isolated internal zeros with opposite neighbors preserve variation even at simultaneous nonadjacent zeros. A simple P root drops variation once; nonroot endpoints permit deleted internal zeros. Nonconstant squarefree input excludes zero/constants. No defect.

### lem-squarefree-integer-polynomial-root-separation-bound

Steps 1.1–6.1 checked with current determinant, division, factorization and modulus suppliers. The coefficient map has dimension 2d-1; quotient coordinates contribute a_d^(d-1); interpolation diagonalizes multiplication by P prime. Setting the formal leading coefficient to zero annihilates the top output row, proving discriminant integrality without dividing an arbitrary integer. Nonzero discriminant and all other pair distances <=2R give the displayed exponent. d=2 exponent zero and d=1 caveat checked. Finite root choices only; no defect.

Current supplier Statement/Definition sections were opened independently; contract quotes and reader/refuter reports were treated as evidence, not verdicts. No AC is used in these finite algebraic arguments. Next: polynomial isolation procedure and soundness.

## Polynomial isolation and level-4 reviews

Both refuter title findings are confirmed fatal and repaired by adding the nonzero qualification; their closed defect IDs are numerical-optimization-dynamics-2026-10-16-3a-batch-62-D01, numerical-optimization-dynamics-2026-10-16-3a-batch-62-D02. The zero-input branch remains explicit. No Definition or Statement changed, so no downstream mathematical contract changed.

Steps 1.1–3.1 checked against the current procedure and completed squarefree/Sturm/separation reviews. Nonzero constants exit immediately; degree one needs no separation threshold. Integer normalization preserves multiplicity. Initial B=H+2 excludes endpoint roots; midpoint roots are removed globally before counting children, and disjoint queued open intervals prevent duplicate output. Remaining roots retain the initial separation bound, so binary depth is uniformly bounded. Zero input returns only identically zero. Qualified the overstrong title without narrowing the existing Statement.

lem-real-interval-arithmetic-preserves-enclosure: Steps 1.1–3.1 checked against actual outward-operation formulas and directed rounding. Multiplication extrema are corners, reciprocal requires zero exclusion, and the square hull handles zero. Topological induction permits correlated/shared inputs without claiming exact hull equality. Overflow/domain statuses make no finite claim; no defect.

ex-double-polynomial-root-has-no-sign-change: Verification 1.1–2.1 checked exactly: gcd=x-1, q2=x-1, q1=1; both endpoint values are 1 and square is nonnegative. S=x-1 has H=1, B=3 and variations 1,0; the algorithm emits (-3,3,2) before midpoint testing. No defect.

lem-brouwer-fixed-point-for-closed-box: Steps 1.1–3.1 reviewed against current closed-ball Brouwer statement and box definition. All-degenerate box is a singleton; deleting fixed coordinates reduces to positive sides. Radial ball/cube homeomorphism and inverse are algebraically inverse and norm bounds prove continuity at zero. Finite coordinate selection uses no AC; no defect.

Next: complete touched procedure decisions and scalar/vector certificate reviews.

### alg-krawczyk-root-certification

amended_repair: The reader replaces the unrestricted minimum width with an exactly represented positive rational. Reversing precisely this phrase reproduces the immutable pre-reader raw SHA256; current bytes reproduce reader-post before Alpha amendments. Dyadic midpoint and side-width comparisons with rational eta are decidable exactly. Checked B=0, degenerate boxes, failed/nonfinite evaluation, width stop, bisection coverage and unresolved queue flushing. No unrepresented real comparison is needed. Alpha additionally corrects the Rump subsection locator to Section 13, Theorem 13.3 and Algorithm 13.4; subsection 13.3 concerns multiple roots.

### alg-smooth-function-root-isolation

accepted_repair: The reader replaces the unrestricted minimum width with an exactly represented positive rational. Reversing precisely this phrase reproduces the immutable pre-reader raw SHA256; current bytes reproduce reader-post before Alpha amendments. Dyadic midpoint and side-width comparisons with rational eta are decidable exactly. Checked B=0, degenerate boxes, failed/nonfinite evaluation, width stop, bisection coverage and unresolved queue flushing. No unrepresented real comparison is needed.

### lem-interval-jacobian-mean-value-enclosure

Steps 1.1–3.1 checked against current chain rule, total/directional derivative, continuity, MVT and interval-Jacobian statements. Each scalar row function on [0,1] is continuous and differentiable with the displayed derivative because the segment stays in the box and open U. Separate mean-value points per row are essential and explicitly retained. x=y and degenerate sides work without division by x-y; row choices are finite. No defect.

### thm-scalar-interval-newton-exclusion-and-inclusion

Steps 1.1–4.1 independently checked with scalar procedure, outward operations, MVT and IVT. For r=m use 0 in Fm; otherwise divide only by derivatives in zero-free D. Strict inclusion bounds exact endpoint Newton points, giving opposite strict signs for either derivative sign; MVT gives uniqueness. Intersection updates preserve every original root; exact singleton certificates cover the degenerate current interval and original singleton inputs. N=0, nonfinite ranges and derivative intervals containing zero remain inconclusive. No defect.

### thm-krawczyk-inclusion-exclusion-and-uniqueness

Steps 1.1–4.1 checked against current box Brouwer, rowwise MVT, outward-enclosure and algorithm statements. For each root z the exact affine identity puts z in K; g(x)=x-CF(x) maps Y into K, so Brouwer plus nonsingular C yields existence. Row-sum bound q<1 forces two roots equal. WC=I certifies C exactly; B=0 and nonfinite evaluations leave unresolved coverage. Degenerate sides have empty interior, preventing strict-inclusion success. Separate contraction test is sufficient, without asserting necessity. Contract-only reader quote change reproduces pre/post hashes exactly; current source otherwise matches both snapshots. Corrected Rump subsection 13.3 locator to Section 13, Theorem 13.3, pp. 89–90. No proof rewrite.

### thm-smooth-function-root-isolation-soundness

Steps 1.1–2.1 checked with current smooth and scalar procedures and scalar certificate theorem. Closed children cover parent and preserve endpoint roots. At most B boxes processed leaves at most B+1 queued entries, all returned unresolved. Singleton or exact contracted singleton can certify an endpoint root; certified boxes need not be disjoint and theorem promises coverage, not a duplicate-free root count. Nonfinite and B=0 cases remain inconclusive. Current item equals pre/post sources; only the contract quote became exactly rational eta, matching the procedure. No mathematical defect.

### ex-validated-mass-action-equilibrium-root

Verification 1.1–2.1 checked exactly: equilibrium relation and mass conservation give 2a^2+a-1; a=1/2,b=1/4 are positive and satisfy both. Range [-11/32,13/32], derivative [5/2,7/2], midpoint residual 0 and Newton singleton 1/2 are exact. Strict interior inclusion and zero-free derivative prove uniqueness only in the stated box; no unproved global chemical conclusion. No defect.

### ex-event-root-with-derivative-separated-from-zero

Verification 1.1–3.1 checked exactly: g range [-1,2], derivative [2,4] with margin 2, g(3/2)=1/4, quotient [1/16,1/8], Newton interval [11/8,23/16] strictly inside [1,2]. Rational eta=1/2 and B=1 meet corrected supplier interface and certify this box. No outside-root claim. Current item equals pre/post sources; contract-only quote matches the reader rational-width repair. No defect.

## Page and historical comparison

The page lists the same 15 items in the same order. Removing only certified nonsingular from point preconditioner reproduces the immutable pre-reader page SHA256; current page matches reader-post. The added caveat accurately mirrors the procedure and theorem and is accepted as audit enrichment, not a newly demonstrated false claim in the old prose. Indeed strict Krawczyk interior inclusion itself implies nonsingularity in Rump Theorem 13.3. Current scalar, polynomial and unresolved-box summaries match their suppliers. No missing historical preimage remains: exact reverse-edit reconstructions match the frozen pre-reader SHA256 values; the three quote-only contract changes likewise reconstruct both pre and post canonical hashes.

## Consumer checks and owner alert

The complete direct/reference search for the two reader-edited procedures found the owned soundness theorems and event example, plus three outside carriers. `alg-validated-periodic-orbit-corrector` Definition explicitly supplies positive rational eta and its validation call passes it unchanged, so needs no repair. `thm-orbital-stability-from-certified-floquet-multipliers` F7 only consumes the nonsingular preconditioner/contraction certificate, so is unaffected.

**Open outside-scope consumer alert:** `alg-safeguarded-hybrid-event-location-and-restart` Inputs do not require an exactly represented rational omega; steps 3–5 and 7 pass eta=omega/(b-a) (and related minima) to `alg-smooth-function-root-isolation`. Thus the newly explicit rational-width admissibility is not ensured. A dyadic physical interval makes b-a rational, but still does not make an unrestricted omega rational. No outside file was edited. Owner must route the consumer to its owning batch to supply exact rational local tolerances (and justify any physical-time conversions), or explicitly constrain represented physical input data coherently. This is a downstream interface obligation, not an unmet prerequisite of the reviewed batch-62 mathematics. No further hop is reviewed until that owner decides a necessary Definition repair.

## Sources independently consulted

- [Rump, Verification methods](https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf): §6.2, Theorem 6.2 and its complete proof, printed pp. 30–31; Section 13, rowwise mean-value formula (13.1), Theorem 13.1, Theorem 13.3 and its complete proof, Algorithm 13.4, pp. 87–90. Checked C1/derivative enclosure, zero exclusion, box domain and nonsingularity uses. The local vector result uses an explicit extra contraction certificate; Rump's stronger inclusion theorem is not imported as an unproved local premise. Subsection 13.3 is Multiple roots II, confirming the two corrected locators.
- [Moreno Maza, Tutorial on real root isolation](https://www.csd.uwo.ca/~mmorenom/Publications/RS-SAV-Tutorial.pdf): slides 12–14, full Sturm conditions, theorem argument and negative-remainder construction. Nonroot endpoints and squarefreeness match the local specialization. Its root-estimation slides provide background; the particular discriminant separation estimate is checked from the complete local determinant argument, not attributed to a matching bound on those slides.
- [Ó Dúnlaing, numerical analysis notes](https://www.maths.tcd.ie/~odunlain/1263/book.pdf): §2, Lemma 2.4, Lemma 2.5 and Theorem 2.6 with proof, printed pp. 3–4. The multiplicity lemma there is stated without proof; the local gcd chain supplies its own full argument.
- [Kearfott, Interval Computations](https://interval.louisiana.edu/preprints/survey.pdf): §2, Theorems 1–2 and surrounding univariate argument, printed pp. 2–3. Checked continuous derivative, valid derivative enclosure and interval inclusion assumptions; the local scalar proof explicitly handles both derivative signs and strict inclusion.

Current direct supplier Statement/Definition sections were read from items/, including polynomial field/gcd/factor/degree and determinant interfaces, real/complex fields, rounding/interval operations, total derivative/chain rule/continuity, MVT/IVT, finite-dimensional rank-nullity, and closed-ball Brouwer. This review does not claim a transitive audit of published suppliers. No defective published item was found, so no published-ledger edit or lock was needed. No AC assumption is introduced.

## Checks and handoff

- Initial `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-62.proof-contracts.json`: completed; all required risk subjects reviewed individually before handoff. Final same command with `--require-reviewed`: 0 errors, 13 subjects (12 HIGH/CRITICAL plus the moderate box-Brouwer supplier).
- Reflow on the four Alpha-edited item files: all unchanged. No Statement, Definition or proof was changed by Alpha; changes are two titles and two source locators. Reader's two Definition repairs were separately reviewed along with their consumers.
- `node tools/tsx-run.mjs tools/precheck.mts` on the seven routed/edited item paths: 4 proof bodies checked, 0 failing; the three algorithms have no phase proof.
- `node tools/rendercheck.mjs` on those seven items and the routed A page: 8 files, 0 errors; actual KaTeX and YAML parsing succeeded.
- Final post-edit/post-reflow `node tools/proof-layout.mjs items/alg-rational-polynomial-root-isolation.md items/thm-rational-polynomial-root-isolation-is-sound-and-finite.md items/alg-krawczyk-root-certification.md items/alg-smooth-function-root-isolation.md items/thm-krawczyk-inclusion-exclusion-and-uniqueness.md items/thm-smooth-function-root-isolation-soundness.md items/ex-event-root-with-derivative-separated-from-zero.md`: 7 items, 17 steps, 0 defects. No later item edit.
- Decisions inventory compared to the authoritative scope: exactly 8 owed obligations, each once, no extra decision. Six confirmed defects have closed 3a-adjudicate ledger rows D01–D06. Every completed repair records repair_confidence 1. All 18 owned items remain draft.
- Two exploratory CLI calls failed harmlessly: `python` is unavailable (used python3 thereafter), and precheck treats `--help` as a filename. These are not mathematical defects and have no ledger rows. No judge/stamp/gate cycle was run; decision sealing and engine gates remain engine-owned.

All batch-62 routed decisions and risk reviews are complete. The outside hybrid-event consumer alert remains open for its owner; no historical escalation is silently cleared, and no outside repair or run transition is claimed. The next owner action is to route that consumer's rational-width interface correction to its owning batch before downstream closure.
