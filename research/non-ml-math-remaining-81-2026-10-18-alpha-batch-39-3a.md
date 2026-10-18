# Batch 39 Step 3a adjudication

Run: non-ml-math-remaining-81-2026-10-18. Group: batch-39.

## Completed supplier reviews

### def-incomplete-tensor-product-with-reference-vector

Checked coherent embeddings J_nm by Fubini and unit reference norm, including H_0=C; the common-index inner product is positive definite. Coordinate projections are contractions by scalar Cauchy-Schwarz and Fubini, commute with later embeddings and extend uniquely to the dense completion. Current L2 and completion suppliers explicitly assume Countable Choice, which is stated. No reader/refuter finding applies. Reader repair accepted.

### def-universal-weyl-c-star-algebra

Checked finite-support twisted algebra, positive-unital state indexing as a set, linear-first quotient pairing, null-space and completion conventions against the well-definedness supplier. Countable Choice is now explicit for Hilbert and norm completion, including V=0 and lambda=0; regularity is deliberately separate. Reader repair accepted.

### lem-heisenberg-group-lagrangian-splitting-and-dual-orbit

Checked all six steps: normalized negative-half symplectic cocycle, inverse, center from nondegeneracy, conjugation alpha_q(p,t)=(p,t-q.p), and factorization with z-q.p/2. Exact real-character and finite-product-dual suppliers give chi_(a,mu); dual action is a->a+mu q, free transitive only for mu!=0, including n=0. Uses only finite-product choice-free clause. No findings or repair.

### lem-universal-weyl-c-star-algebra-is-well-defined

Checked cocycle and involution, positivity/Cauchy-Schwarz quotient, coefficient state sum|a_v|^2, bounded left shifts and finite coefficient bound. GNS spaces are nonzero since unit has norm one, meeting bounded-operator C*-supplier hypothesis; supremum C*-identity and ideal quotient are valid. Vector states bound arbitrary Hilbert representations, with zero Hilbert space now treated separately. Completion and uniqueness use declared Countable Choice. Reader repair accepted.

### lem-schrodinger-weyl-system-is-regular-and-irreducible

Read every step and exact supplier statements. Checked n=0 scalar case, translation/modulation unitarity, negative-half group phase and joint strong continuity by telescoping and DCT. Closed-subspace residual is constructed by a Countable Choice minimizing sequence with parallelogram estimate and real/imaginary variations. For n>=1 lambda!=0 lets p cover every Fourier frequency, so h_q=0 a.e. for each q. Borel representatives ensure product measurability and Tonelli yields 0=||f||^2||g||^2, a contradiction. No exchange of uncountable exceptional sets occurs. Reader repair accepted.

### cex-universal-weyl-c-star-algebra-has-nonregular-representations

Checked the explicitly completed finite-support l2(V), twisted shift inner-product isometry, inverse L_-v, cocycle multiplier, and extension by the reviewed universal lemma. For nonzero v and t!=0, delta_tv and delta_0 are orthogonal, so the distance sqrt(2) proves failure of strong continuity at zero. No irreducibility is asserted. Countable Choice is explicit. Reader repair accepted.

### ex-one-mode-schrodinger-weyl-relations

Checked L2 Hilbert hypothesis under Countable Choice and translation invariance; multipliers have modulus one. Directly computed U_q V_p phase -lambda qp, corrected W phase +lambda qp/2, and product exponent -(lambda/2)(qpprime-pqprime). Formula matches Schrodinger supplier. Algebra remains valid at lambda=0 though statement assumes nonzero. Reader repair accepted.

### ex-zero-central-character-has-many-regular-characters

Checked complex scalar Hilbert carrier against completeness supplier. Real-linearity gives additive scalar character and each line is continuous; one dimension gives irreducibility. A scalar unitary intertwiner would force equal characters, contradicted at (1,0) by 1 versus -1. This only refutes nonzero-parameter omission, not finite-dimensional theorem itself. No choice needed. Reader repair accepted.

### lem-one-mode-gaussian-weyl-average-is-rank-one

Checked all six proof steps and Gaussian Fourier constants: p integral is 2sqrt(pi a)exp(-a(x-q/2)^2), and y=x-q factors the kernel into Omega_a(x)Omega_a(y). Absolute integrability is justified first for compact-support test functions, then density extends the bounded identity. Fourier uniqueness gives totality since Omega_a is everywhere positive. Confirmed refuter:39:1 fatal: algebraic Weyl relations need not give measurable orbits. Added regularity to both systems in the intertwiner clause and supplied finite-grid strong-measurability and tensor-coordinate continuity arguments in 4.1. Checked the sole item consumer, infinite-mode example F3/3.3: it explicitly proves local strong continuity before taking averages, so no consumer claim needs repair. A-page references describe only valid Schrodinger projection/cyclicity. Reader weak-integral repair retained and amended; no outside affected consumer.

Refuter obligation `refuter:39:1`: **confirmed_fatal**, repaired completely with confidence 1. Observed carrier digest in scope: `372806b27c6e634be6fbb415d9824a954f28bd882544d6a4f13b1057670108ff`. The original statement and Step 4.1 omitted regularity; the current repair adds it. A nonmeasurable character twist of the Schrodinger system preserves the Weyl relation, while its nonzero Gaussian matrix coefficient need not be measurable. The corrected regular systems are jointly strongly continuous, so the normalized Gaussian vector integrals exist. This is a hypothesis repair, not a change to the explicit Schrodinger rank-one identity.

Source checked: Prasad, *An Easy Proof of the Stone-von Neumann-Mackey Theorem*, §4.3, Lemma 4.2, PDF pp. 7–8 (https://arxiv.org/pdf/0912.0574); Speicher notes, Definition VII.5, Notation VIII.3 and Remark VIII.5, PDF pp. 41, 43–45 (https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf). The source convention builds continuity into its Weyl representations, whereas the local definition separates regularity.

### thm-stone-von-neumann-for-finite-dimensional-weyl-systems

Checked every step and exact SNAG, Mackey, PVM, induced-action, field-uniqueness, and decomposition supplier statements. Regular line factors give joint continuity. Irreducibility makes a nonzero vector cyclic and rational group coordinates yield separability before SNAG. Countably many rational central parameters restrict spectral support to the fixed nonzero-lambda orbit. The quotient is standard Borel; normalized Radon full-support measure is sigma-finite by compact-box cover. For each rational n in N the two fiber multiplication fields agree a.e.; intersect countably and use full support/continuity in q, then continuity in n, obtaining scalar inducing character. A nontrivial fiber subspace would yield a closed invariant induced subspace, with nonzero vectors supported on a finite positive-measure open set. The same argument applies to the Schrodinger model and Mackey uniqueness identifies them. Includes n=0, excludes lambda=0 and infinite modes, and explicitly assumes AC. Reader repair accepted; no new defect.

Exact key supplier locations: `lem-spectral-measure-of-a-representation-of-an-abelian-lch-group` Statement; `thm-mackey-imprimitivity-theorem` Statement; `def-transitive-system-of-imprimitivity` normalized-measure clause; `thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication` final uniqueness sentence; `thm-bounded-borel-pvm-integral` clauses 1–2; `lem-the-induced-action-is-unitary` Statement and `def-covariant-function-model-of-unitary-induction` Definition. All hypotheses are supplied at their actual use. The scalar inducing action in the second model has one-dimensional multiplicity by the same irreducibility argument in Step 6.1. No theorem statement changed.

### cex-infinite-mode-regular-weyl-representations-are-inequivalent

Read all ten steps and exact tensor, Gaussian, box-density and Bochner supplier statements. Checked finite-support symplectic nondegeneracy, compatible local unitaries, product Weyl phase, and line regularity by finite tensor continuity and dense extension. Finite box density plus one-mode Gaussian orbit totality gives reference cyclicity. Local coordinate families are regular before applying repaired Gaussian intertwiner clause. Product projections R_n equal reference-line projection on each finite stage eventually and converge strongly by contractions/density. Confirmed refuter:39:2 nonfatal: orthogonality of one vector did not imply orthogonality of every translate. Repaired 5.1 by choosing a translate with nonzero reference overlap using cyclicity, then applying R_n inside M. Tail expectations in H2 converge for every vector by a uniform contraction estimate; overlap is 2^(3/4)/sqrt(3), squared 2sqrt(2)/3<1. Common averages intertwine, contradicting unit expectation in H1. Reader repair retained and amended; Statement unchanged and no new prerequisites.

Refuter obligation `refuter:39:2`: **confirmed_nonfatal**, repaired completely with confidence 1. Original observation digest: `5845ab371a922733d43dfcff8d44b6ea9e955c5ca1794c0916fc7903b483906d`. Invariance alone does not make every translate orthogonal to the reference line. Corrected Step 5.1 uses cyclicity to choose v with nonzero overlap and applies the already proved strong projection limit to zeta=W(-v)eta in M. This preserves irreducibility and the inequivalence witness; the Statement is unchanged.

Source comparison: Speicher notes Chapter X, Definition X.1/Remark X.2 and Example X.4, PDF pp. 56–58. Only the coherent finite-stage tensor construction is imported; the local bounded projection and tail-expectation arguments are proved here. The source uses unbounded number-operator averages, which are unnecessary for this local bounded proof.

## Decisions and reader-delta evidence

There are exactly twelve decisions: ten touched carriers and two flagged refuter findings. No reader or page-only decision is owed. All reader mathematical repairs are retained. Five touched verdicts are accepted_repair; five are amended_repair (two mathematical amendments and three contract citation-bookkeeping corrections). Confidence 1 records completed local repairs, not judgment or certification.

| Obligation | Verdict | Closed defect |
|---|---|---|
| `touched:39:def-incomplete-tensor-product-with-reference-vector` | amended_repair | `nmm81-b39-3a-tensor-prerequisites` |
| `touched:39:def-universal-weyl-c-star-algebra` | accepted_repair | `nmm81-b39-3a-universal-choice` |
| `touched:39:lem-universal-weyl-c-star-algebra-is-well-defined` | amended_repair | `nmm81-b39-3a-universal-interfaces` |
| `touched:39:lem-schrodinger-weyl-system-is-regular-and-irreducible` | accepted_repair | `nmm81-b39-3a-schrodinger-projection` |
| `touched:39:cex-universal-weyl-c-star-algebra-has-nonregular-representations` | accepted_repair | `nmm81-b39-3a-nonregular-completion` |
| `touched:39:ex-one-mode-schrodinger-weyl-relations` | accepted_repair | `nmm81-b39-3a-one-mode-hilbert` |
| `touched:39:ex-zero-central-character-has-many-regular-characters` | accepted_repair | `nmm81-b39-3a-scalar-completeness` |
| `touched:39:lem-one-mode-gaussian-weyl-average-is-rank-one` | amended_repair | `nmm81-b39-3a-gaussian-weak-integral` |
| `refuter:39:1` | confirmed_fatal | `nmm81-b39-3a-gaussian-regularity` |
| `touched:39:thm-stone-von-neumann-for-finite-dimensional-weyl-systems` | amended_repair | `nmm81-b39-3a-mackey-interfaces` |
| `touched:39:cex-infinite-mode-regular-weyl-representations-are-inequivalent` | amended_repair | `nmm81-b39-3a-tensor-strong-projection` |
| `refuter:39:2` | confirmed_nonfatal | `nmm81-b39-3a-translated-overlap` |

The current eight unedited item bodies match their post-reader raw SHA-256 and differ from pre-reader hashes; the two Alpha-edited items differ from both snapshots. Risk reviews are added to all eleven HIGH/CRITICAL contracts. The three additional contract amendments correct an orphan F1 citation, omitted completion A1 uses, and the normalized-measure F4 citation/use mapping. These mechanical mapping defects create no separate mathematical defect row. Each touched repair has its own reader-repair row; the independent Gaussian hypothesis defect and tensor translated-overlap defect have separate rows.

## Sources and supplier scope

All routed current carrier bodies and the current Definition/Statement of every declared dependency were opened. Exact applications are recorded in the item sections and risk reviews above. This review does not recursively re-audit all published supplier proofs. The two page-reading records in the batch cross-dependency file remain unchanged; the Gaussian consumer search found only the owned infinite-mode item and the A-page reading/projection references. No new defective published item or outside affected consumer was identified, so no published-ledger entry is owed.

Additional source comparison: Fewster–Rejzner, *Algebraic Quantum Field Theory—an introduction*, §4 Weyl-algebra discussion and Exercises 14–17, PDF pp. 18–19 (https://arxiv.org/pdf/1904.04051v2). Checked the negative-half symplectic phase and discrete-carrier representation; the local proof supplies its own universal GNS norm construction and constant-distance discontinuity calculation. Sources are contextual comparisons; the local proofs and current exact supplier interfaces establish the conclusions. No unbounded-number-operator limiting claim from the tensor-product notes is used.

## Checks and handoff

- Initial risk-report without `--require-reviewed`: 13 items, 11 HIGH/CRITICAL, 0 errors. Final `--require-reviewed`: 13 items, 0 errors; all eleven specific reviews complete.
- Final `node tools/tsx-run.mjs tools/reflow.mts` on the two edited items: unchanged.
- Final `node tools/tsx-run.mjs tools/precheck.mts` on the two edited items: 2 checked, 0 failing.
- Final `node tools/rendercheck.mjs` on the two edited items: 0 errors under actual KaTeX and renderer YAML parsing.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-39.proof-contracts.json --strict`: 13/13 checked, 0 errors, 0 warnings. Initial stale citation mappings and a nonstandard boundary label were corrected before this successful run; no mechanical failure was logged as a mathematical defect.
- Final batched layout command: `node tools/proof-layout.mjs items/lem-one-mode-gaussian-weyl-average-is-rank-one.md items/cex-infinite-mode-regular-weyl-representations-are-inequivalent.md`: 2 items, 16 steps, 0 defects.
- Exact obligation comparison: 12/12, with 12 unique closed defect-ledger references. Accepted-repair item and manifest hashes match reader-post; their stripped-risk contract hashes also match. Amended repairs retain the reader mathematics with the corrections explained above. Engine-owned observation snapshots and scope were not modified.
- Appended twelve closed rows with `caught_at_stage: "3a-adjudicate"` using the serialized defect-ledger tool; generated view refreshed. Mathematical reader-repair rows are separate from mechanical contract corrections.
- Updated both materially amended items' provenance, affected manifest/contract/source-evidence records, and the owned-consumer note in `briefs/tasks/frontier-dependency-ledger.md`. No prior judge record existed on either edited item. Published content remains read-only; stable IDs and all prior proposed withdrawals remain present.

No unresolved mathematical blocker or escalation remains in batch 39. No judge, stamp, dispatch, certification or engine gate cycle was initiated. These are local checks; engine hash stamping, the gate battery, scheduling and transition remain pending with the build driver.
