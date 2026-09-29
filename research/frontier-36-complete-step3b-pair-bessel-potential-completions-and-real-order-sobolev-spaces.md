# Step 3b — Bessel-potential completions and real-order Sobolev spaces

- Run: `frontier-36-complete`; role: `alpha-high`; batch: 12.
- Owned pair: `bessel-potential-completions-and-real-order-sobolev-spaces` and its `-examples` companion only.
- Dispatch order: bracket multiplier; candidate norm; positive definiteness; weighted-image density; completion; tempered embedding; Hilbert structure; weighted-distribution characterization; Schwartz inclusion example; zero-order example.
- This is an author checkpoint, not an independent review or gate receipt.

## Verified starting state

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the PDE-14F design section, current batch-12 manifest/coverage/notes and cross-batch inputs, the Step-3a task/report/receipt, the Step-3b task, and `research/frontier-36-complete-owner-authoring-direction.md`.
- `frontier-36-complete-owner-authoring-direction.md` says the Bessel completion page has no PDE-11 proof obligation. The later Fourier-multiplier page must use PDE-11 and this page as separate inputs. The current batch-13 manifest confirms the five designed PDE-14F item interfaces and does not require a new local result.
- The current scope receipt is `sufficient`; the 10 manifest items and their levels match the dispatched order (0, 1, 2, 2, 3, 4, 5, 5, 5, 5). Five item-local direct-dependency repairs are documented below; none changes the dispatched order. Batch 12's cross-batch input is `[]`; the shared consumer/supplier ledger is read-only for this dispatch.
- The Step-3a source coverage records full-text reads and hashes. I independently reread the extracted full passages at `/tmp/frontier-36-b12-dyatlov.txt` (Exercise 11.3, printed p. 135; §§12.1.1–12.1.2, printed pp. 139–141; lines 9397–9648) and `/tmp/frontier-36-b12-melrose.txt` (§4, printed pp. 66–70; lines 2026–2278). PDF SHA-256 prefixes match batch coverage: Dyatlov `c9723c57a1e2b770`, Melrose `d4ac9864bf08282b`. Dyatlov states the weighted-distribution definition and Hilbert/density properties; our completion-class equivalence and embedding are proved locally. Melrose uses a different Fourier normalization; only its weight-space/Hilbert/density arguments are used after conversion to the repository's unitary (2\pi) transform.
- Laugesen Chapter 3 is bounded-domain, real-valued, integer weak-derivative theory. The batch coverage correctly defers those results to the weak-derivatives page and does not use Laugesen as proof backing for the real-order completion.
- The exact published item prerequisites have been read, including their relevant proof sections: the Schwartz/multiplier/Fourier interfaces; Schwartz and compactly supported smooth density in (L^2); the complex (L^2) pairing/completeness; Plancherel; countable choice; normed-space completion; the (S') Fourier automorphism and regular (L^2) Fourier agreement. No defect has been confirmed in a published clause used by this pair. This is a targeted dependency audit, not an audit of the entire library.
- The repository's metric-completion and Fourier/L2 interfaces explicitly assume Countable Choice where countable approximants are selected. The proofs below retain exactly `def-countable-choice` where used; no full AC, DC, or arbitrary-index selection is used. The bracket-derivative estimate is choice-free.
- The run status command reports `frontier-36-complete — running`, but still shows Step 1 in progress and Step 3b waiting. This supplied dispatch is being handled as instructed; the stale stage view is reported at handoff, not changed here.

## Item checkpoints

All ten assigned items and both pair pages are now authored and checked. The entries below retain the audited claims, proof inputs/source locators, completed arguments and contracts, checks, decisions, and next actions.

### Completed: `lem-japanese-bracket-powers-preserve-schwartz-space`

- Scaffold audit: the strategy's chain/product-rule derivative expansion is valid; prove the degree bound and resulting polynomial growth explicitly, then apply the published multiplier lemma. Show inverse actions on both \(\mathcal S\) and \(\mathcal S'\). No choice principle is used.
- Sources: Dyatlov, Exercise 11.3, printed p. 135 (exercise statement only; local derivative bounds are required); Melrose, Proposition 4.8 proof, printed p. 69 (weight multiplier context).
- Dependencies: `def-schwartz-space-and-its-seminorms`; `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space`.
- Completed proof: for $q=1+|\\xi|^2$, induction under the chain and product rules gives finite sums $P_{\\alpha,j}q^{s/2-j}$ with $\\deg P_{\\alpha,j}\\le|\\alpha|$. Therefore $|\\partial^\\alpha w_s|\\le C\\langle\\xi\\rangle^{\\max(0,s+|\\alpha|)}$; the same estimate with $-s$ supplies all multiplier hypotheses. The published multiplier result gives continuous actions on $\\mathcal S$ and transposed actions on both dual topologies; pointwise $w_sw_{-s}=1$ proves both inverse compositions. This local calculation uses no choice principle.
- Sources reread at: Dyatlov, Exercise 11.3, printed p. 135 (statement only; its exercise proof is not imported); Melrose, Proposition 4.8 proof, printed p. 69. Exact library excerpts are contracted from `def-schwartz-space-and-its-seminorms` and `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space`.
- Checks: explicit-path `precheck.mts items/lem-japanese-bracket-powers-preserve-schwartz-space.md` passed; `proof-contract.mjs ... --strict --items lem-japanese-bracket-powers-preserve-schwartz-space` passed (1/1, no warnings).
- Decision: `accept`, confidence 1, direct dependencies `def-schwartz-space-and-its-seminorms` and `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space`; receipt `research/frontier-36-complete-step3b-review-lem-japanese-bracket-powers-preserve-schwartz-space.json` records the complete proof and checks.
- Open gaps: none. Next item: `def-bessel-potential-pre-hilbert-norm-on-schwartz-space` (level 1).

### Completed: `def-bessel-potential-pre-hilbert-norm-on-schwartz-space`

- Scaffold audit: retained the exact weighted Fourier form and repository's negative-sign $2\\pi$ convention. The item calls $q_s$ a candidate seminorm and explicitly defers strict definiteness, so it does not silently assume the next lemma. It makes no derivative-sum or $(I-\\Delta)^{k/2}$ norm comparison.
- Completed construction: $w_s\\widehat u,w_s\\widehat v\\in\\mathcal S\\subset L^2$ by the bracket lemma, Schwartz Fourier automorphism, and Schwartz-to-$L^2$ supplier. The complex $L^2$ inner product/Cauchy–Schwarz proves that $Q_s(u,v)$ is finite and first-variable-linear, with $Q_s(u,v)=(w_s\\widehat u,w_s\\widehat v)_{L^2}$. Countable Choice is retained only because the cited Fourier/L² interfaces state it; this item selects no objects and uses no full AC.
- Sources: Dyatlov, Definition 12.3 and (12.5), printed p. 140; Melrose, (4.14), (4.17), printed pp. 68–69 (normalization converted). Published item excerpts are linked in the definition and direct deps.
- Checks: explicit item `rendercheck` passed (YAML and KaTeX); strict proof contract passed for this definition entry. The first render pass correctly flagged a multiline display equation; it was made one-line and the repeated explicit-path render passed. No precheck applies to this definition kind.
- Decision: `accept`, confidence 1, direct dependencies `lem-japanese-bracket-powers-preserve-schwartz-space`, `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space`, `lem-schwartz-space-is-dense-in-l-two`, `lem-complex-lp-completeness-density-and-inner-product`, and `def-countable-choice`; item receipt created.
- Open gaps: none. Next item: `lem-bessel-potential-norm-is-positive-definite` (level 2), followed by `lem-weighted-fourier-images-of-schwartz-functions-are-dense-in-ltwo` at the same level.

### Completed: `lem-bessel-potential-norm-is-positive-definite`

- Scaffold audit: the strictly positive bracket and Plancherel route is valid. The proof separately upgrades the zero L2 class to an actual zero Schwartz function using continuity and positive measure of a ball; this is needed because Schwartz inputs are actual functions. The weighted L2 pairing establishes sesquilinearity/nonnegativity, while the separation argument supplies definiteness.
- Completed proof: $q_s(u)=0$ makes $w_s\\widehat u=0$ almost everywhere; since $w_s>0$ everywhere, $\\widehat u=0$ a.e. Plancherel gives $\\|u\\|_2=0$. If a continuous $u$ had a nonzero value, it would be bounded away from zero on a positive-measure ball, a contradiction. Conversely $u=0$ gives $q_s(u)=0$ directly.
- Sources: Dyatlov, formula (12.5), printed p. 140; Melrose, Proposition 4.8 and proof, printed p. 69. The local zero-separation argument is fully written; Plancherel is cited to its repository theorem under Countable Choice.
- Checks: explicit-path precheck, rendercheck, and strict proof-contract check passed (one item; zero warnings/errors).
- Decision: `accept`, confidence 1, direct dependencies `def-bessel-potential-pre-hilbert-norm-on-schwartz-space`, `thm-plancherel`, `def-schwartz-space-and-its-seminorms`, and `def-countable-choice`; item receipt created.
- Open gaps: none. Next item: `lem-weighted-fourier-images-of-schwartz-functions-are-dense-in-ltwo` (level 2).

### Local scaffold repair for the current density item

- The original strategy used “regard $h\in C_c^\infty$ as Schwartz” without an exact declared definition input. I added direct dependencies `def-complex-lp-and-euclidean-test-function-conventions` and `def-schwartz-space-and-its-seminorms`, then authored the compact-support seminorm calculation explicitly. The existing complex smooth-density theorem remains the density input.
- Recomputed label: the new suppliers are published; the only in-run suppliers remain the level-0 bracket lemma and level-1 candidate-form definition, so density remains level 2 and the full dispatch order is unchanged.
- Refreshed the pair's Step-3a `sufficient` scope receipt with the current manifest; receipt SHA-256 remains `2ce39d17229d9065ef0a0684f4c0af43810fbcae13f1e88ae34770334695c82b`. No other pair, page claim, item ID, or plan dependency changed.
- Completed proof: for arbitrary complex $h\\in C_c^\\infty$, its real and imaginary parts and all their derivatives have compact support, so every Schwartz seminorm is finite. The inverse weight preserves $\\mathcal S$; applying the inverse Schwartz Fourier automorphism to $w_{-s}h$ gives $u\\in\\mathcal S$ with $w_s\\widehat u=h$ pointwise. Since such $h$ are dense in complex $L^2$ under Countable Choice, the whole weighted range is dense.
- Sources: Dyatlov property (4), printed pp. 140–141; Melrose, Proposition 4.8 density proof, printed p. 69. Exact repository excerpts are contracted for the bracket lemma, Fourier automorphism, complex smooth-density theorem, definition of complex test functions, Schwartz seminorms, and the candidate Fourier map.
- Checks: explicit-path precheck, rendercheck, and strict proof-contract check passed (one item; zero warnings/errors).
- Decision: `repaired`, confidence 1. Direct prerequisites now include the two added published definitions plus the existing five suppliers; the scope was refreshed and the level remains 2. Item receipt created.
- Open gaps: none. Next item: `def-real-order-bessel-potential-sobolev-space` (level 3).

### Completed: `def-real-order-bessel-potential-sobolev-space`

- Scaffold audit: the positive-definiteness supplier makes Schwartz a normed space; the published metric-completion result supplies Cauchy-sequence classes, zero-distance equivalence, limiting norm, canonical dense linear isometry, and Banach structure. The statement keeps the later $\\mathcal S'$ identification out of this definition.
- Completed definition: $H^s$ is the completion of $(\\mathcal S,q_s)$; classes are norm-Cauchy sequences modulo $q_s(u_j-v_j)\\to0$, the norm is $\\lim_jq_s(u_j)$, and constant sequences embed densely and linearly isometrically. Countable Choice is stated exactly as required by the metric completion interface; no full AC or DC is assumed.
- Sources: Dyatlov Definition 12.3/(12.5), printed p. 140, and Melrose (4.14)/Proposition 4.8, printed pp. 68–69, support the weighted norm context. The completion-class presentation is our local application of the repository metric-completion theorem.
- Checks: explicit item rendercheck and strict proof-contract check passed (one item; zero errors/warnings). No precheck applies to a definition.
- Decision: `accept`, confidence 1, direct dependencies `def-bessel-potential-pre-hilbert-norm-on-schwartz-space`, `lem-bessel-potential-norm-is-positive-definite`, `def-completion-of-a-normed-space`, `thm-metric-completion-carries-a-unique-banach-space-structure`, and `def-countable-choice`; item receipt created.
- Open gaps: none. Next item: `thm-bessel-potential-completions-embed-in-tempered-distributions` (level 4).

### Local scaffold repair for the embedding theorem

- The claim includes continuity for both weak and strong dual topologies. Its scaffold did not directly declare the published definition of those topologies, which the strong-continuity proof uses through bounded test sets; the seminorm estimate also uses the exact Schwartz-seminorm definition. I added `def-weak-and-strong-topologies-on-tempered-distributions` and `def-schwartz-space-and-its-seminorms` to the item deps and will cite both explicitly.
- Recomputed label: this new supplier is published. The in-run deps remain bracket multiplier (level 0), weighted-image density and completion (level 3), so the theorem remains level 4 and the item order is unchanged.
- Refreshed the pair's sufficient Step-3a scope receipt again; the ten-item inventory and statements are unchanged. Current receipt SHA-256 remains `2ce39d17229d9065ef0a0684f4c0af43810fbcae13f1e88ae34770334695c82b`.
- Completed proof: for a class $U=[u_j]$, weighted transforms form a Cauchy sequence in $L^2$ and define a representation-independent linear isometry $J_s$; density and Countable Choice lift every $L^2$ element, proving onto. The bilinear functional $T_sg(\phi)=\int g\langle\xi\rangle^{-s}\phi$ is well-defined, locally represented by $\langle\xi\rangle^{-s}g$, and tempered by an explicit estimate using finitely many $p_{\alpha0}$ and the convergent dyadic-shell integral. The estimate is uniform on bounded test sets, so $T_s$ is weakly and strongly continuous. Composition with inverse Fourier gives $E_s$; the $L^2$ Fourier-agreement theorem and Fourier automorphism prove agreement on canonical Schwartz classes, and a direct weighted-test calculation plus Schwartz density proves injectivity. Countable Choice is used only for $L^2$ completeness and the two countable approximant selections.
- The first explicit precheck proposed its canonical phase ordering. I adopted the reordering and consistently remapped proof-step references and contract obligations; the subsequent explicit-path precheck passed without repair. Rendercheck and strict proof contract passed (1/1, no warnings/errors).
- Decision: `repaired`, confidence 1; direct dependencies are the bracket multiplier, weighted-image density, $H^s$ completion, complex $L^2$ interface, Schwartz $L^2$ density, Schwartz seminorms, tempered-distribution definition, weak/strong dual topology, Fourier automorphism of $\mathcal S'$, $L^2$ Fourier agreement, and Countable Choice. Receipt `research/frontier-36-complete-step3b-review-thm-bessel-potential-completions-embed-in-tempered-distributions.json` records this decision and exact dependency audit.
- Sources rechecked from repository suppliers: completion classes and norm in `def-real-order-bessel-potential-sobolev-space`; weighted-image density in `lem-weighted-fourier-images-of-schwartz-functions-are-dense-in-ltwo`; bilinear pairing in `def-tempered-distribution`; bounded-set definition in `def-weak-and-strong-topologies-on-tempered-distributions`; Fourier inverse and $L^2$ agreement in the cited Fourier suppliers. Literature context remains Dyatlov §12.1.2, printed pp. 140–141, and Melrose §4, printed pp. 68–69, with normalization converted as stated above.
- Open gaps: none. Next item: `cor-bessel-potential-spaces-are-hilbert-and-complete` (level 5).

### Completed: `cor-bessel-potential-spaces-are-hilbert-and-complete`

- Scaffold audit: the pullback route is valid, but the original dependency list supplied the complex $L^2$ form and completeness without the definition used to conclude “Hilbert space.” I added the direct published dependency `def-hilbert-space` to the batch-12 manifest and authored item. This is a local dependency repair only; the claim and level 5 are unchanged.
- Refreshed the pair's sufficient scope decision with that evidence. The recomputed run-wide item-level check passed (923 items across 60 pages; maximum level 18), and the pair order remains corollary before the characterization theorem, then the two B examples by task order.
- Completed proof: define $(U,V)_{H^s}=(J_sU,J_sV)_{L^2}$. The L2 pairing supplies sesquilinearity and conjugate symmetry; the isometry identifies its square-root norm with the completion norm and gives positive definiteness. For completeness, an arbitrary Hs-Cauchy sequence maps to an L2-Cauchy sequence; Countable Choice supplies L2 completeness, and surjectivity gives its unique preimage limit, with convergence pulled back by isometry. No stronger choice principle or noncanonical sequence selection is used.
- Sources: Dyatlov, §12.1.2 property (1), printed p. 140, reread in the full §12.1.2 passage on printed pp. 140–141; it states Hilbert structure via the weighted L2 model. Melrose, Proposition 4.8 and proof, printed p. 69, supports the weighted-space model after normalization conversion. The completed-space pullback proof is local and contracted to exact repository supplier text.
- Checks: explicit-path precheck passed; explicit item rendercheck passed; strict proof-contract check passed (1/1, no warnings/errors).
- Decision: `repaired`, confidence 1. Direct dependencies: embedding theorem, Hs completion definition, Hilbert-space definition, complex L2 interface, and Countable Choice. Receipt `research/frontier-36-complete-step3b-review-cor-bessel-potential-spaces-are-hilbert-and-complete.json` records the item audit.
- Open gaps: none. Next item: `thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation` (level 5).

### Local scaffold repair and completed theorem: `thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation`

- Scaffold audit: the proposed two-direction argument and use of injectivity for uniqueness are valid. The proof explicitly multiplies distributions by the reciprocal bracket and uses bilinear Schwartz-test pairings; the original dependencies did not directly declare the tempered-distribution definition. I added `def-tempered-distribution` to the manifest and authored theorem.
- Refreshed the pair scope and recomputed levels; the run-wide check passed (923 items / 60 pages, maximum level 18) and the level-5 order is unchanged.
- Completed proof: for $U\in H^s$, set $g=J_sU$. The embedding formula gives $\mathcal F(E_sU)=u_{w_{-s}g}$, and testing the multiplier product gives $w_s\mathcal F(E_sU)=u_g$ with $\|U\|=\|g\|_2$. Conversely, for $u\in S'$ with $w_s\mathcal Fu=u_g$, multiplication by $w_{-s}$ shows $\mathcal Fu=u_{w_{-s}g}$; surjectivity of $J_s$ gives $U$, and Fourier injectivity gives $u=E_sU$. If $h$ is another L2 witness, the two preimages have the same E-image; injectivity of E makes them equal, so $g=h$. Choice assumptions are inherited from the embedding and Fourier suppliers; the inverse preimage is unique.
- Sources: Dyatlov, §12.1.2, Definition 12.3 and properties (1),(4), printed pp. 140–141; Melrose, §4, (4.14) and Proposition 4.8 proof, printed pp. 68–69, Fourier normalization converted. The exact completion-to-distribution bridge is proved here using the completed earlier theorem.
- Checks: the first explicit precheck proposed canonical layer numbering because the reverse-inclusion step only depended on step 1.1; after adopting the suggested numbering, explicit-path precheck passed. Rendercheck and strict proof-contract check passed (1/1, no warnings/errors).
- Decision: `repaired`, confidence 1. Direct dependencies: bracket multiplier, canonical embedding theorem, Fourier automorphism on $S'$, regular polynomial-growth/L2-to-tempered theorem, tempered-distribution definition, and Countable Choice. Receipt `research/frontier-36-complete-step3b-review-thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation.json` records the audit.
- Open gaps: none. Next item: `ex-schwartz-functions-in-every-bessel-potential-completion` (B page, level 5).

### Completed: `ex-schwartz-functions-in-every-bessel-potential-completion`

- Scaffold audit: the direct route is valid. The weighted transform is Schwartz by Fourier automorphism and the bracket multiplier, and the published Schwartz-to-L2 supplier gives the exact finite norm. The constant-sequence completion map and the prior embedding theorem identify the resulting class with the usual regular distribution. The statement does not claim the converse intersection theorem.
- Source passages reread: Dyatlov, §12.1.2 property (4), printed pp. 140–141; Melrose, Proposition 4.8 proof, printed p. 69, including its weighted-L2 density argument. Melrose's Fourier normalization is converted as described in the preceding checkpoints.
- Completed calculation: for arbitrary $u\in\mathcal S$ and real $s$, $f=\langle\xi\rangle^s\widehat u$ lies in $\mathcal S\subset L^2$, so $q_s(u)^2=\int|f|^2=\|f\|_2^2<\infty$. Its constant Cauchy sequence has norm $q_s(u)$ and maps under $E_s$ to the regular distribution $u_u$. This works separately for each $s$ without selecting a sequence across orders.
- Checks: explicit-path precheck, rendercheck, and strict proof-contract check passed (1/1, no warnings/errors).
- Decision: `accept`, confidence 1. Direct dependencies: bracket multiplier, candidate norm, Hs completion, canonical embedding theorem, Fourier automorphism on Schwartz space, Schwartz-to-L2 supplier, and Countable Choice. Receipt `research/frontier-36-complete-step3b-review-ex-schwartz-functions-in-every-bessel-potential-completion.json` records the audit.
- Open gaps: none. Next item: `ex-zero-order-bessel-completion-is-ltwo` (B page, level 5).

### Completed: `ex-zero-order-bessel-completion-is-ltwo`

- Scaffold audit: the supplied route is sound after directly adding the candidate-norm and completion definitions and the tempered Fourier automorphism. The latter is required to identify distributions after comparing their Fourier transforms. These published prerequisites keep the item at level 5; recomputation after repair reports 924 items across 60 pages, maximum level 18, with no change to this pair's dispatched order.
- Exact claim: at $s=0$, $I_0=\mathcal F_2^{-1}J_0$ is a surjective linear isometry $H^0\to L^2$, is the identity on canonical Schwartz classes, and $E_0(U)=u_{I_0U}$. Hence $E_0(H^0)$ is exactly the regular complex-$L^2$ distributions and the norm factor is one.
- Sources reread in full relevant passages: Dyatlov §12.1.2 property (3), printed p. 140 (explicitly $H^0=L^2$), within full §12.1.2 pp. 140–141; Melrose §4, equation (4.8) and Proposition 4.8/proof, printed pp. 66 and 69. The source normalizations are converted to the repository's unitary negative-sign $2\pi$ convention.
- Completed argument: [F1] gives $q_0(u)=\|\widehat u\|_2$, and unitary Plancherel makes this $\|u\|_2$. The composition of the onto isometries $J_0$ and $\mathcal F_2^{-1}$ is onto and isometric, and is the identity on the dense canonical Schwartz copy. For $f=I_0U$, the embedding theorem gives $\mathcal F(E_0U)=u_{J_0U}$; distributional Fourier agreement gives $\mathcal F(u_f)=u_{\mathcal F_2f}=u_{J_0U}$. Fourier injectivity on $\mathcal S'$ proves $E_0U=u_f$. Surjectivity supplies every regular $L^2$ distribution, and the embedding theorem supplies uniqueness.
- Direct dependencies: `thm-bessel-potential-completions-embed-in-tempered-distributions`, `def-bessel-potential-pre-hilbert-norm-on-schwartz-space`, `def-real-order-bessel-potential-sobolev-space`, `thm-plancherel`, `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`, `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions`, `lem-schwartz-space-is-dense-in-l-two`, and `def-countable-choice`.
- Checks: explicit-path precheck passed after adopting canonical numbering (1.1 weighted norm; 1.2 composed isometry; 2.1 distributional identification); explicit item rendercheck passed; strict proof contract passed (1/1, zero warnings/errors). The first precheck invocation used bare `node` on `.mts` and failed at loader startup; it was rerun using the required `tools/tsx-run.mjs` runner, and the successful result is the recorded check.
- Decision: `repaired`, confidence 1; the final scope receipt was refreshed after the manifest statement was made type-correct. Item receipt `research/frontier-36-complete-step3b-review-ex-zero-order-bessel-completion-is-ltwo.json` records the audited dependency set and evidence.
- Open mathematical gaps: none. Page authoring and batch-level checks were the next actions at this checkpoint; their results are recorded below.

### Batch-render repair checkpoint: `lem-japanese-bracket-powers-preserve-schwartz-space`

- The first explicit 12-file page/item render pass found one multiline display in this item's statement. Joined the displayed pair of bracket definitions onto one source line; the statement and proof are mathematically unchanged.
- Reran its explicit-path precheck, item rendercheck, and strict proof contract; all passed (1/1, zero warnings/errors). Refreshed its `accept` receipt at confidence 1 with the same dependencies.
- Page rendering and batch-level content/dependency/plan checks are complete; results are recorded below.

## Open owner / Step 4 obligations

- The PDE-14F source matrix in `research/plan-pde-track.md` lists Laugesen Chapter 3 as a source, while the fetched Chapter 3 is the bounded-domain integer weak-derivative treatment deferred to PDE-11. The coverage and Step-3a report instead use Dyatlov and Melrose as the two real-order sources. This is a shared source-matrix/prose reconciliation note for Step 4; do not edit the plan here.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-36-complete` was attempted after the item dependency repairs, as required, but failed before writing because sibling batch-15 item `def-connection-one-form-of-an-oriented-orthonormal-frame` has invalid YAML in its source title at line 19 (`items/def-connection-one-form-of-an-oriented-orthonormal-frame.md`). It is owned by `the-gauss-bonnet-theorem-for-riemannian-surfaces`. Quote that YAML `title` scalar, rerun its page/item checks, then rerun the ledger refresh. I did not edit the sibling item or the derived unified ledger. Batch 12's own cross-batch input remains `[]`.
- The run-wide Step-3 scope check has two unrelated open reviews: `the-gauss-bonnet-theorem-for-riemannian-surfaces` and `recurrence-transience-and-hitting-times-for-markov-chains`. This pair's sufficient scope receipt is current, and all ten of its item decisions are current and closed.
- The live engine status remains at `1-drift` in progress with `3b-author` waiting. Do not write engine state or certification receipts; the supplied dispatch is completed locally and its additions await the engine's dispatch-success certification.
- No published-consumer defect has been confirmed so far; if later proof inspection finds one, report exact IDs/evidence/repair route here and in the final dispatch report without editing the published item or shared ledger.

## Dispatch handoff

### Completed items

- A page: `lem-japanese-bracket-powers-preserve-schwartz-space`; `def-bessel-potential-pre-hilbert-norm-on-schwartz-space`; `lem-bessel-potential-norm-is-positive-definite`; `lem-weighted-fourier-images-of-schwartz-functions-are-dense-in-ltwo`; `def-real-order-bessel-potential-sobolev-space`; `thm-bessel-potential-completions-embed-in-tempered-distributions`; `cor-bessel-potential-spaces-are-hilbert-and-complete`; `thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation`.
- B page: `ex-schwartz-functions-in-every-bessel-potential-completion`; `ex-zero-order-bessel-completion-is-ltwo`.
- Both pages are draft and registered in `research/frontier-36-complete-batch-12.pages.json`; the existing batch-12 coverage already records the source passages for both examples and no sibling rows were removed. No new local supplier item was required; only direct prerequisites were added to assigned items.

### Checks and receipts

- Eight proof-bearing item files passed explicit-path precheck; both definitions correctly had no precheck phase.
- Explicit-path rendercheck passed all 10 item files and both page files (12 files total).
- Batch-12 content policy passed for 10 scoped items with zero errors and warnings.
- Strict proof-contract validation passed all 10 items with zero errors and warnings.
- `item-dependency-levels.mjs check --run frontier-36-complete` passed for 924 items across 60 pages, maximum level 18; the assigned levels/order remain 0, 1, 2, 2, 3, 4, then four level-5 items.
- `validate-plan.mjs research/plan-spec.json` passed its current pre-splice page-order and dependency checks. It reports both target page entries with empty item lists, so it did not validate these ten item-level edges; Step 4 must splice the authored A/B inventory and rerun item-level plan validation.
- The pair scope receipt is current (`sufficient`, SHA-256 `da386d6c900b3f857e79f7c3545b335683d2c9e71343d4bfc2004a0820330bc2`). All ten item receipts were refreshed in dispatch dependency order after the bracket display-format repair changed transitive hashes; a direct receipt audit confirms all ten decisions are closed (`accept` or `repaired`, confidence 1).
- The explicit run-wide scope check remains open only for the two unrelated pairs named above. The required derived-ledger refresh is blocked by the batch-15 YAML defect; its exact owner route and remedy are recorded above.

### Source and defect report

- Dyatlov §12.1.2, printed pp. 140–141, and Melrose §4, printed pp. 66–70, were read in full relevant passages. Melrose's Fourier normalization was converted to the repository's unitary negative-sign $2\pi$ transform. Choice assumptions are Countable Choice only where inherited; the bracket derivative proof is choice-free.
- Potential published-item defects: none identified in the published supplier clauses used by this pair. This is a targeted audit of those dependencies, not a full-library audit. The batch-15 malformed YAML title is in an in-progress draft, not a published mathematical item.
- Step 4 should reconcile the PDE-14F source matrix row at `research/plan-pde-track.md` §11.12/table near line 3224: it lists Dyatlov and Laugesen, while the actual scoped real-order sources are Dyatlov and Melrose; Laugesen Chapter 3 is deferred with integer weak-derivative content to PDE-11. Do not repair the shared plan here.
