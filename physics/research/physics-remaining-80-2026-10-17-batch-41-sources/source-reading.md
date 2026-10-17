# Batch 41 source reading — physical-time KMS strip equilibrium

Run: `physics-remaining-80-2026-10-17`  
Batch: `41`  
Pages: `qsm-kms-equilibrium` (A), `qsm-kms-equilibrium-examples` (B)  
Reading date: 2026-10-17

## Independent treatment 1: Naaijkens

Pieter Naaijkens, *Quantum Spin Systems on Infinite Lattices*, extended and corrected Summer 2016 lecture notes, arXiv:1311.2717v2. Full-text URL: <https://arxiv.org/pdf/1311.2717>.

The complete 157-page author-hosted PDF and extracted text were previously retrieved for batch 39 and re-inspected at `research/physics-remaining-80-2026-10-17-batch-39-sources/raw/naajk-quantum-spin-systems.pdf` and `.txt`. The PDF SHA-256 is `6d954604ef16fc58481f469a43ab3364229c4456d8ee6bf7c2446adb6d22751d`; the extracted text SHA-256 is `2832a3e3c67e29128632b3a9d8723cafa24f9b5ceefb9024e19329ec85a5bd06`.

I read the complete relevant KMS section, §3.4, printed pp. 74–78 (PDF pages 74–78): Definition 3.4.4; Proposition 3.4.5; the finite Gibbs/KMS calculation and matrix-unit uniqueness discussion; and Corollary 3.4.9 with its local Gibbs-limit discussion. I did not claim to reread unrelated chapters as part of batch 41.

Harvested results and disposition:

| Result read | Supported item | Disposition |
|---|---|---|
| Definition 3.4.4, printed p. 74: closed strip of width `hbar beta` and the lower/upper correlation order | `def-qsm-kms-state` | `included`; the item fixes SI physical time and states boundedness explicitly. Naaijkens later sets `hbar=1`, a convention not transferred here. |
| Finite Gibbs/KMS identity and matrix-unit uniqueness discussion, printed pp. 76–77 | `thm-qsm-finite-kms-gibbs-characterization`, `ex-qsm-kms-two-level-gibbs-boundary` | `inline`; the source sketches the finite result, and the items supply the full finite-dimensional argument and exact two-level calculation. |
| Local Gibbs limit and Corollary 3.4.9, printed pp. 77–78 | `lem-qsm-gibbs-strip-limit`, `thm-qsm-infinite-spin-kms-existence` | `inline`; Naaijkens gives the existence route, while the local items prove state extension, subsequential compactness, strip regularity, boundary passage, and the all-observable extension under their explicit assumptions. |
| Entire-element analytic continuation, Proposition 3.4.5, printed p. 74 | None | `out-of-scope`; the assigned proofs use the stated bounded-strip condition directly and do not invoke entire analytic elements. |

Naaijkens's base KMS definition states analyticity in the interior and continuity at the boundary but does not explicitly require a global strip bound. The assigned definition includes the bound as part of its convention; the separate Ruelle treatment states the usual correlation norm bound. The local strip-uniqueness proof uses the bound as an explicit hypothesis and does not infer it from an unbounded-strip maximum principle.

## Independent treatment 2: Ruelle

David Ruelle, *Topics in Quantum Statistical Mechanics and Operator Algebras*, complete author-hosted lecture notes, arXiv:math-ph/0107009v1, dated 11 July 2001. Full-text URL: <https://arxiv.org/pdf/math-ph/0107009>. The full PDF is 36 pages.

I inspected the complete relevant sections in the full-text PDF: Chapter 1 §7, printed pp. 12–13, and Chapter 2 §6, printed pp. 23–24. Chapter 1 §7 states the strip KMS theorem, its time-rescaling convention, invariance, and the uniform bound `sup_z |F_AB(z)| <= ||A|| ||B||`. Chapter 2 §6 gives the finite local Gibbs state, records limit-point KMS existence under an exponentially weighted interaction condition, and states Gibbs/KMS equivalence with a citation to Bratteli–Robinson. The notes do not provide the complete proof of every cited equivalence; the assigned items supply their own conditional arguments.

Harvested results and disposition:

| Result read | Supported item | Disposition |
|---|---|---|
| Chapter 1 §7 KMS theorem, printed pp. 12–13: analytic strip, invariance, correlation norm bound | `def-qsm-kms-state`, `lem-qsm-kms-strip-uniqueness`, `lem-qsm-kms-invariance` | `inline`; Ruelle's strip parameter can be changed by rescaling time and uses its own `hbar=1` convention. The items state `beta hbar` seconds and prove the strip arguments locally. |
| Chapter 2 §6 finite Gibbs state and finite Gibbs/KMS equivalence, printed pp. 23–24 | `thm-qsm-finite-kms-gibbs-characterization`, `ex-qsm-kms-two-level-gibbs-boundary` | `inline`; the local finite proof spells out the matrix-unit argument and handles degeneracies and dimension one. |
| Chapter 2 §6 Gibbs limits under `||Phi||_lambda < infinity`, printed pp. 23–24 | `lem-qsm-gibbs-strip-limit`, `thm-qsm-infinite-spin-kms-existence` | `inline`; finite-range and the declared per-site bound fit the local finite-range setting, but the items prove their own compactness and strip-limit steps rather than importing Ruelle's cited proposition. |

## Mathematical supplier interfaces inspected

The following byte-pinned imported mathematical suppliers were read at their current local carriers. They are published mathematics imports and remain read-only. Hashes below match `research/math-imports.json`.

| Supplier | Exact interface used | SHA-256 |
|---|---|---|
| `def-c-star-algebra` | Complex Banach *-algebra, submultiplicative norm, C*-identity, and the nonzero-unit convention for unital algebras | `e44ecca8f802cb996ea12627a9fc89fee02e8998f753c826e7c871172256c3fd` |
| `thm-hadamard-three-lines` | Bounded continuous function on a closed strip, holomorphic inside; positive interpolation exponents, including zero boundary suprema | `707d55bb07f9c103fd3bb228c9253948018367d68659a8291f3d8ef9a0ee5d69` |
| `thm-goursat-triangle-theorem` | Holomorphic scalar function has zero integral around every contained filled triangle; no continuity of the derivative required | `85722d23d4c46e20a08698a7576748f491ce46075873922b42e497d8e061f3f8` |
| `thm-morera-triangle-theorem` | A continuous scalar function with zero integrals on all contained filled triangles is holomorphic | `b0efaaceb048cafe26c69d932b1b3b1445ea06e61cd8cc48e887a508db3ca9fa` |
| `thm-liouville-bounded-entire-function` | A bounded entire scalar function is constant | `cabd9f149515bbd7d30c8c91bc7d086031a4246e79720bcee9cd0d608c889f7b` |
| `thm-weierstrass-convergence-holomorphic-functions` | Locally uniform limits of holomorphic functions are holomorphic | `308eb5944c76a206f09f1991eb3ebd06ab8cb30823f3fb1649142c4b6d2a4c55` |
| `thm-nested-interval-property` | Nested nonempty closed bounded real intervals with lengths tending to zero have a unique common point | `da4409821c2cd1ceade540254fafd20c4fb7e2d5d19c3b9c8df6f9d7cbde3c4c` |
| `thm-recursion` | A deterministic base value and next-stage rule define a unique sequence on the natural numbers | `c0b8927e0789d38f9807825b1133c8f9beb8411d8265a55ad9b002e2127ead22` |

I read the full current Statement/Proof of the used complex-analysis results above and checked their domain, boundedness, continuity, strip orientation, and zero-boundary cases against the local uses. The nested-interval and recursion proofs were also read fully; the grid extraction in `lem-qsm-gibbs-strip-limit` uses Countable Choice only where stated and otherwise specifies deterministic least-index selections.

## Current QSM supplier check — reinspected 2026-10-17

The transitive in-run supplier closure used by the seven assigned items was rechecked against the current batch manifests, current item carriers, and current Step-1 records. All 16 in-run suppliers from batches 36, 38, and 39 have current `ready` records with matching item/dependency hashes. I also read the complete current proofs of the remaining transitive interfaces: the explicit integer-lattice enumeration, tensor-factor norm equality, finite-range commutator/path estimate, and signed-time boundary Duhamel estimate. The latter two retain both signs of time and the finite-range constants used by the thermodynamic dynamics. The exact item inventory, levels, record paths, and carried interfaces are in `research/physics-remaining-80-2026-10-17-batch-41.dependency-inputs.json`. These are authoring-readiness records only; the suppliers remain draft where their item frontmatter says draft, and no independent review or native gate acceptance is inferred.

The current finite-matrix C*-identity and density/state interface is the separate draft `[[lem-qsm-finite-matrix-cstar-and-state-duality]]`. I read its current full Statement and Proof; it establishes the ordinary finite-matrix C*-identity, positive functional/density correspondence, and norm-one trace-functional interface for every nonzero finite-dimensional local matrix algebra, including dimension one. Its current owner Step-1 record is ready and hash-current. `[[lem-qsm-matrix-state-calculus]]` is also current and ready, and supplies the finite Hermitian spectral calculus and trace cyclicity used in the assigned proofs.

An earlier paragraph in this batch record said that the current finite-range dynamics carrier still used the old matrix-state-only route, that its frontmatter omitted the C*-identity lemma, and that the new lemma lacked current Step-1 readiness. That observation is superseded by the owner’s dated QSM resolutions and the current carrier inspection. The current `items/thm-qsm-finite-range-spin-dynamics.md` frontmatter depends on `lem-qsm-finite-matrix-cstar-and-state-duality`; its Statement makes the finite-matrix C*-identity and Countable Choice explicit hypotheses, and its Facts identify the exact supplier. The current batch-39 proof contract and current item agree on that interface. Its current Step-1 record is ready and hash-current. The current local-generator, state-extension, state-compactness, and quasi-local-completion suppliers used by batch 41 are also ready and hash-current. Batch 41 therefore has no missing in-run supplier carrier or unresolved supplier-readiness hold. Its proofs remain conditional on the exact draft supplier statements and assumptions, not an assertion of independent approval.

Countable Choice is used only at the strengths stated by the exact QSM suppliers: the quasi-local completion and finite-range dynamics assumptions, and the countable local-state compactness/diagonal extractions. The current proof of `lem-qsm-gibbs-strip-limit` carries this assumption explicitly; the infinite-spin KMS result carries the same condition through that lemma and the finite-range dynamics theorem. No full Axiom of Choice is added or silently inferred.

The imported complex-analysis suppliers listed above remain byte-pinned to `research/math-imports.json`; current local hashes match their import pins. The second full-text source is also present as `research/physics-remaining-80-2026-10-17-batch-43-sources/raw/ruelle.pdf` with SHA-256 `17b08625f412c71761bf4a1e655e7bef26fb99e1152df49d4d904d95b5fb364e`; the current batch-41 coverage fetch stamp records the same 36-page PDF. Its Chapter 1 §7 KMS theorem and Chapter 2 §6 Gibbs discussion were inspected at the full-text locators above.

There were no retrieval failures and no sources were dropped. The actual command `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-41.coverage.json --stamp` returned `4/4 source(s) fetch-verified (0 newly stamped)` and `4/4 source(s) resolved (0 documented drops)`. No `source_resolution` decision is required when all full-text retrievals succeed.


## Scoped owner amendment — 2026-10-17

The preceding native reading narrative and its fetch/reading records are historical. Their raw preimage is preserved at `research/physics-remaining-80-2026-10-17-owner-qsm41-scoped-triage/before/source-reading.md`; the source fetch receipts and PDF bytes are unchanged. This amendment records a focused inspection of the already-fetched local source context and current repaired QSM interfaces, not a fresh fetch or an independent full audit.

The actual Ruelle KMS theorem, invariance, and correlation bound are on printed/PDF p. 13, with the time-rescaling convention continuing on p. 14. The finite local Gibbs definition and infinite-spin Gibbs-limit existence discussion are on p. 24. The Gibbs/KMS equivalence theorem is on p. 25 and concerns the general infinite-spin interaction under its exponential summability hypothesis, with proof referred to Bratteli–Robinson. Thus the earlier `pp. 12–13` / `pp. 23–24` locators and the description of that equivalence as finite are superseded. Ruelle provides related Gibbs/KMS context, not a direct finite-matrix uniqueness proof. The assigned finite characterization retains its complete matrix-unit argument and the actual independent Naaijkens finite Gibbs/uniqueness discussion on pp. 76–77. No authored mathematical statement, dependency, choice hypothesis, or physical-time strip width is changed.

The earlier native table explicitly excluded Naaijkens Proposition 3.4.5 (entire analytic elements) from the assigned strip proofs. That disposition is now represented by an explicit `out-of-scope` coverage row on both paired coverage records. All eleven existing source-result rows and their destinations remain unchanged apart from the corrected Ruelle locators/provenance. The low-yield count is caused by the distinction between one `included` label and ten `inline` labels, rather than by an absence of the seven actual assigned items. No label is promoted to improve the numerical yield.

The scoped owner successor report records the exact seven current public interfaces and their uses of the repaired finite-matrix C*-identity, density/state duality, all-complex-observable norm bound, completion, compactness, signed-time dynamics and local-generator interfaces. The full `beta*hbar` physical-time strip is retained; no global trace-class density or relaxation/uniqueness conclusion is inferred.

The same bounded source-context check also identified these named headings without explicit native coverage dispositions. They are now individually recorded, without claiming their broader conclusions:

- §3.4, Theorem 3.4.6 (Roepstorff–Araki–Sewell), printed/PDF p. 75: KMS equivalent to a derivation/logarithmic inequality: out of scope. The assigned pair proves bounded-strip KMS statements directly at fixed beta>0. It does not claim the general equivalence with the generator-domain logarithmic inequality, its zero-denominator conventions, or the inverse implication. None of its proofs invokes this theorem.
- §3.4, Proposition 3.4.7, printed/PDF pp. 75–76: limits for varying dynamics and inverse temperatures, including beta=+infinity: out of scope. The general theorem permits varying inverse temperatures and a ground-state limit, with its own generator-convergence hypotheses. The assigned lem-qsm-gibbs-strip-limit proves its fixed positive-beta finite-range local-pair case directly by state compactness and closed-strip estimates; it neither invokes nor proves the broader proposition.
- §3.4, Exercise 3.4.8, printed/PDF p. 76: every finite-matrix tracial linear functional is a scalar multiple of the trace: out of scope. The general tracial-functional classification is not asserted by the assigned pair. The finite KMS characterization derives off-diagonal vanishing and diagonal Gibbs ratios directly with matrix units, so it does not require the separate exercise or a general tracial-functional lemma.
- §3.4, Remark 3.4.10, printed/PDF p. 78: more general convergence hypotheses for KMS-limit constructions: out of scope. The assigned interaction scope is uniformly bounded finite range, with the exact selected thermodynamic dynamics and local generator. It does not assert the broader varying-domain or approximate-generator convergence generalization in this remark.
- §3.4, Corollary 3.4.9, printed/PDF p. 77: nonempty ground-state set (separate second conclusion): out of scope. Only the fixed beta>0 KMS-existence conclusion is covered inline by thm-qsm-infinite-spin-kms-existence. Ground states, beta=+infinity, and their separate existence criterion are outside this approved KMS pair; no ground-state theorem is inferred from the positive-temperature strip proof.
- Ruelle Chapter 1 §7, entire-analytic-elements density lemma (p. 13): out of scope; the assigned proof uses local-algebra norm density and direct bounded-strip arguments.
- Ruelle Chapter 2 §6, general infinite-spin Gibbs/KMS equivalence theorem (p. 25): out of scope as a mathematical conclusion; the existing finite local Gibbs context row remains inline, but no converse infinite Gibbs characterization or exponential-summability equivalence is claimed.

The owner read the exact relevant named statements above from the current native-fetched Naaijkens text and Ruelle PDF. This is a focused harvest/provenance check; it does not assert a fresh full-section, full-chapter, or external audit reading. The original eleven harvest destinations and original source-reading preimage remain preserved.
