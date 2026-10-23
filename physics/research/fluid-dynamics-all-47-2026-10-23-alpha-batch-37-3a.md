# Batch 37 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-37`; role: Alpha. Scope remains original group `n`. Seven reader obligations, no touched/page/refuter obligations. No agents, judgments, stamps or workflow transitions.

## Dependency level 2 checkpoint

`lem-fd-periodic-filter-normalization-and-commutation`: independently reviewed current Statement, Facts and Proof 1.1–5.1, exact local filter definition, batch-17 Fourier convention and its three published Fourier/torus interfaces, and every declared integration/compactness/grid supplier Statement or Definition. Periodized volume kernel has mass one; normalized Haar integral of the kernel alone is L^(-d). Finite translated cells, affine change of variables, compact-support moment finiteness and repeated parameter differentiation establish the claims. All spatial dimensions are positive; zero fields, empty active summands and identified periodic faces cause no gap. Countable Choice is explicitly inherited from the torus interface, with no extra arbitrary choice. Risk report initially returned CRITICAL 10; complete item-specific risk review now recorded. Reader findings 1–3 concern inline links in read-only published Fubini, Darboux and grid interfaces, confirmed nonfatal and awaiting ledger recording. No local source or interface repair needed.

Sources checked: Washington ME 544 *Large-Eddy Simulation*, §2 filter normalization and commutation; https://courses.washington.edu/mengr544/handouts/hd-les.pdf. Eyink, arXiv:chao-dyn/9602018v1, §I equations (1)–(4), §II equations (9)–(25); https://arxiv.org/pdf/chao-dyn/9602018. Relevant source text was retrieved through web PDF extraction; a local pdftotext fallback was unavailable, so no claim relies on that failed fallback.

Published proofs are used through their checked exact interfaces; this is no re-audit of their unrelated transitive proof trees. The subsequent checkpoints and final checks below complete this dispatch.

## Dependency level 3 covariance checkpoint

`thm-fd-filtered-covariance-energy`: Proof 1.1–6.1 checked against all sixteen declared interfaces. The covariance contraction is an integral of a square, hence positive semidefinite. Smooth pointwise PDE premises and C1-in-time/C-infinity-in-space regularity justify the filtered equation; the energy flux and contraction signs agree with the stated tensor convention. Periodic flux integrals vanish, while the compact-rectangle rule permits time differentiation of the spatial energy integral. Risk CRITICAL 10 now has a complete specific review. No local defect, public-interface change, consumer repair or additional choice use. The PDE is an adopted mathematical premise, not an empirically proved model.

## Dependency level 3 Hölder checkpoint

`thm-fd-holder-energy-transfer-bound`: Proof 1.1–3.1 checked against fourteen declared mathematical interfaces. Constant-time extension justifies fixed-time commutation without mixed derivative assumptions. Integration by parts yields the derivative-kernel increment formula; derivative support lies inside kernel support. The two component estimates give exactly d²(M_(2α)+M_α²)N_α A³ ell^(3α−1). The supremum is continuous by uniform continuity on a period cell times J and is measurable for the explicitly defined trace Lebesgue measure. Order and scalar integral rules apply to the finite dominating integral. Empty/singleton J, zero A/scalar, d=1 and α=1/3 checked; decay of the RHS keeps A,K,α,J fixed and does not infer any unsupplied uniform Hölder premise across scales. Risk CRITICAL 11 complete; no local mathematical defect. The malformed published Lebesgue explanatory sentence is nonfatal because its formal criterion and separate measure theorem remain precise.

The constant-field example and the two frontmatter-only pages were also read: zero derivatives solve the conditional system; unit filter mass gives zero stress/transfer, and A=0 verifies the estimate. No TikZ/tikzcd occurs or is needed for these analytic claims.

## Seven routed findings

### reader:37:1 — thm-riemann-fubini-on-product-rectangles

Verdict: `confirmed_nonfatal`; consumer: `lem-fd-periodic-filter-normalization-and-commutation`; closed scoped defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-37-published-1`.

The current Statement embeds [[def-sections-and-iterated-riemann-integrals]] in the section-integral clause. The full theorem explicitly distinguishes section integrability from multiple integrability and supplies equality when all sections are integrable. The owned filter lemma uses continuous compactly supported integrands on nondegenerate boxes, so its repeated Riemann integrals satisfy precisely that clause. Independently confirmed nonfatal editorial defect; the checked mathematical supplier interface remains usable. Imported published bytes are pinned and read-only. Close this scoped finding as nonfatal-recorded; mathematics-owner maintenance stays OPEN. Move all links to the following complete-section references heading (or repair only the duplicated prose for finding 4), preserving all hypotheses and dependencies; no source repair is claimed.

### reader:37:2 — def-multidimensional-darboux-sums

Verdict: `confirmed_nonfatal`; consumer: `lem-fd-periodic-filter-normalization-and-commutation`; closed scoped defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-37-published-2`.

The current Definition embeds bounded-set, complete-ordered-field, infimum, supremum-uniqueness, grid and finite-sum links before its end. Its lower/upper sum formulas and oscillation-gap identity are explicit. The owned filter lemma uses bounded continuous functions on nondegenerate boxes with nonempty cells, so all extrema are finite and the weighted oscillation argument remains valid. Independently confirmed nonfatal editorial defect; the checked mathematical supplier interface remains usable. Imported published bytes are pinned and read-only. Close this scoped finding as nonfatal-recorded; mathematics-owner maintenance stays OPEN. Move all links to the following complete-section references heading (or repair only the duplicated prose for finding 4), preserving all hypotheses and dependencies; no source repair is claimed.

### reader:37:3 — def-multidimensional-grid-partition

Verdict: `confirmed_nonfatal`; consumer: `lem-fd-periodic-filter-normalization-and-commutation`; closed scoped defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-37-published-3`.

The current Definition embeds partition, recursive finite-sum, finite-maximum and metric links inside the complete section. The exact grid construction, cell cover, disjoint interiors, mesh and volume-sum identity are explicit. The owned filter lemma uses positive side lengths and positive integer subdivisions; Euclidean cell diameter is bounded by sqrt(d) times mesh, matching its calculation. Independently confirmed nonfatal editorial defect; the checked mathematical supplier interface remains usable. Imported published bytes are pinned and read-only. Close this scoped finding as nonfatal-recorded; mathematics-owner maintenance stays OPEN. Move all links to the following complete-section references heading (or repair only the duplicated prose for finding 4), preserving all hypotheses and dependencies; no source repair is claimed.

### reader:37:4 — def-lebesgue-measure-and-the-lebesgue-sigma-algebra

Verdict: `confirmed_nonfatal`; consumer: `thm-fd-holder-energy-transfer-bound`; closed scoped defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-37-published-4`.

The current Definition literally contains the malformed phrase “Under countable choice, Assuming countable choice” followed by duplicated outer-measure wording. The full Caratheodory test quantifies over every subset A, and lambda is explicitly the restriction to the resulting family. The owned Holder theorem separately invokes the complete-measure theorem under explicit Countable Choice, the interval-measure theorem and Borel measurability, so it never relies on the broken sentence as a proof. Independently confirmed nonfatal editorial defect; the checked mathematical supplier interface remains usable. Imported published bytes are pinned and read-only. Close this scoped finding as nonfatal-recorded; mathematics-owner maintenance stays OPEN. Move all links to the following complete-section references heading (or repair only the duplicated prose for finding 4), preserving all hypotheses and dependencies; no source repair is claimed.

### reader:37:5 — def-the-one-dimensional-torus-and-normalized-haar-integral

Verdict: `confirmed_nonfatal`; consumer: `def-fd-positive-convolution-fluid-filter`; closed scoped defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-37-published-5`.

The current complete Definition contains inline supplier links throughout its torus, fundamental-domain, topology, measure and integral paragraphs. The quotient and unique representatives, probability measure, translation invariance and finite-product formula remain explicit. The owned filter uses this through def-fd-periodic-fourier-sobolev-spaces: x/L then xi=2pi x/L transports probability measure to L^(-d)dx, while convolution itself uses volume dx. Independently confirmed nonfatal editorial defect; the checked mathematical supplier interface remains usable. Imported published bytes are pinned and read-only. Close this scoped finding as nonfatal-recorded; mathematics-owner maintenance stays OPEN. Move all links to the following complete-section references heading (or repair only the duplicated prose for finding 4), preserving all hypotheses and dependencies; no source repair is claimed.

### reader:37:6 — def-fourier-coefficients-and-trigonometric-polynomials

Verdict: `confirmed_nonfatal`; consumer: `def-fd-positive-convolution-fluid-filter`; closed scoped defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-37-published-6`.

The current complete Definition contains inline Countable Choice, torus, character, integrability and integral-law links. Characters and the normalized coefficient integral are well defined, because modulus-one characters preserve integrability and almost-everywhere equality. The owned filter reaches it through def-fd-periodic-fourier-sobolev-spaces; coordinate rescaling changes exp(2pi ik.y) into exp(ik.xi) without changing normalized coefficients. Independently confirmed nonfatal editorial defect; the checked mathematical supplier interface remains usable. Imported published bytes are pinned and read-only. Close this scoped finding as nonfatal-recorded; mathematics-owner maintenance stays OPEN. Move all links to the following complete-section references heading (or repair only the duplicated prose for finding 4), preserving all hypotheses and dependencies; no source repair is claimed.

### reader:37:7 — thm-fourier-basis-and-parseval-on-the-n-torus

Verdict: `confirmed_nonfatal`; consumer: `def-fd-positive-convolution-fluid-filter`; closed scoped defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-37-published-7`.

The current Statement embeds Countable Choice, torus and Fourier-definition links in its hypotheses. Its orthonormal basis, Parseval, synthesis and surjective coefficient-isometry conclusions have explicit finite-subset-net meaning. The owned filter reaches it through def-fd-periodic-fourier-sobolev-spaces, whose proof applies the coefficient isometry componentwise under the same Countable Choice and normalized measure convention. No stronger completeness or empirical assertion is needed. Independently confirmed nonfatal editorial defect; the checked mathematical supplier interface remains usable. Imported published bytes are pinned and read-only. Close this scoped finding as nonfatal-recorded; mathematics-owner maintenance stays OPEN. Move all links to the following complete-section references heading (or repair only the duplicated prose for finding 4), preserving all hypotheses and dependencies; no source repair is claimed.

## Source fidelity and limits

Exact source locators checked: Washington §2, printed pp. 6–7, equations (1)–(5), and §3, printed pp. 11–13, equations (13)–(24); Eyink §I, printed p. 3, equations (1)–(4), and §II, printed pp. 6–8, equations (9)–(25). The local reference labels use broader/imprecise printed-page ranges: Washington equation (24) is actually on printed p. 13. Equation (23) in those notes has a pressure-sign typo; the authored theorem's pressure sign follows correctly from its own displayed PDE and agrees with Eyink (10). These source limitations are not adopted as proof premises. The rigorous periodic normalization, explicit constant and trace-measure time estimate are supplied by the local arguments, not claimed verbatim textbook theorems. No measurements, statistical precision, model truth or anomalous dissipation are inferred.

## Carrier comparison and consumer disposition

All five current raw item hashes equal both immutable pre-reader and post-reader item hashes; all pre/post item/contract/manifest fingerprints and page fingerprints are identical. Thus there was no reader repair to accept, amend or revert and no touched/page decision is owed. Each of the seven current published raw hashes matches its pinned research/math-imports.json entry. Scope and original reader/refuter artifacts are preserved. Only three item-specific risk_review mappings are enriched; item text, manifests, page bodies, provenance and verification remain unchanged.

No Statement/Definition or physical public interface changed, so no additional direct or indirect consumer repair is triggered. Existing batch-37 cross-batch rows for fd-les01 → fd-s01 and the filter definition → def-fd-periodic-fourier-sobolev-spaces retain their scoped verified status; that is interface review, not producer certification. No proposed withdrawal exists. Published maintenance remains open with its original mathematics owner, separate from the seven closed scoped nonfatal findings. No substantial mathematical prerequisite blocker was found.

## Local validation and handoff

- Before review: risk-report returned CRITICAL scores 10, 10 and 11 for the three routed proof items, and MODERATE 3 for the example, with zero mechanical errors. After complete reviews, the same command with `--require-reviewed` passed: zero errors, four items routed.
- Strict contract validation: `node tools/physics-support/proof-contract.mjs research/fluid-dynamics-all-47-2026-10-23-batch-37.proof-contracts.json --strict` passed, four of four items checked, zero errors and warnings.
- Native defect-ledger append validated and appended seven rows with `--no-render`. Each reader decision references exactly one matching `nonfatal-recorded` row at `3a-adjudicate`; exact obligation coverage check passed (seven owed, seven unique decisions).
- Current five item raw hashes still equal both immutable pre/post snapshots. All seven supplier files match their pinned import hashes. No item or page edit occurred, so changed-item reflow/precheck/proof-layout is not applicable. No judge or verification stamp changed.
- The published ledger was reread and merged under the exclusively created `research/.published-consumer-ledger.lock`, with one index row per supplier and seven detailed scoped records; only this worker's lock was released. The owned frontier dependency record was appended without replacing sibling entries.
- One exploratory command used nonexistent plural `proof-contracts.mjs`; it failed with module-not-found and was replaced by the successful singular command above. The optional local `pdftotext` executable was unavailable; source checking used web PDF extraction and installed PyMuPDF instead. Neither operational failure is a content defect or proof certificate.

The exact decisions file is `research/fluid-dynamics-all-47-2026-10-23-alpha-batch-37-3a-decisions.json`. No unresolved mathematical escalation or outside consumer repair remains. The seven original published editorial maintenance issues remain OPEN for the mathematics owner. The engine owns current decision hashes, any aggregate ledger rendering and its gate battery; this report makes no acceptance, publication or global gate assertion.
