# QC researcher 2 checkpoint

Status: Preskill's available chs. 2–6 PDFs were read sequentially in full;
ch. 4 is author-marked incomplete. Assigned item inventory and proof routes
are recorded below, with source gaps called out. Assigned pages: QC07–QC10,
QC17, and QC24. Exclusive
outputs are this report, `sources/qc_r2/`, `source-ledgers/qc_r2.json`, and
`source-ledgers/qc_r2-coverage.json`.

## Current checkpoint (2026-10-14)

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the complete
  quantum-computing `TEAM-BRIEF.md`. Read the braid-track plan and inspected its
  planning-inventory format before writing. The report remains a draft research
  artifact; no engine, item, manifest, publication or run-state file was touched.
- Coordinated source reuse with qc_r1: qc_r1's ledger now records complete
  sequential reads of Watrous, *The Theory of Quantum Information*, and de
  Wolf, *Quantum Computing: Lecture Notes*. Those caches and ledgers remain
  qc_r1-owned. My selected
  cross-read ranges and locators are recorded below and in
  `source-ledgers/qc_r2.json`; I did not copy or alter those files.
- The official Preskill course index is
  `https://www.preskill.caltech.edu/ph229/` (retrieved 2026-10-14, HTTP 200,
  final URL unchanged, 58,706 downloaded bytes; local HTML
  `sources/qc_r2/preskill-course.html`, SHA-256
  `453b7634d72cba2456b978dd0ec703c4e8899a04069c40f823d49152e95b3db0`). It
  identifies chapters 2–6 as foundations/states, measurement/evolution,
  entanglement, classical and quantum circuits, and quantum algorithms. It says
  chapter 4 is incomplete, and lists 2015/2020 versions for chapters 2, 3, 5,
  and 6. The index's printed page counts differ from the downloaded PDFs for
  ch. 2 (index 52; PDF 53) and ch. 3 (index 66; PDF 65); PDF counts below are
  the reading-range authority. Do not claim ch. 4 complete beyond the available
  70-page file.
- First two Preskill URL attempts were unsuccessful and are retained as
  evidence: `https://theory.caltech.edu/~preskill/ph219/` failed TLS certificate
  validation; `https://www.theory.caltech.edu/~preskill/ph219/` redirected to
  the same path and returned HTTP 404. I switched to the official current
  author site, not an unofficial mirror.
- Retrieved and locally extracted the official available chs. 2–6. Preskill's
  ch. 6 is a prepublication draft provided for personal use only (the source
  page expressly bars resale or redistribution); this work keeps only the
  authorized internal reading cache and cites/synthesizes rather than copying
  its prose into planning text.

  | Chapter | Official PDF URL | PDF pages | PDF bytes | PDF SHA-256 | Extracted text bytes (characters) | Extracted text SHA-256 |
  |---|---|---:|---:|---|---:|---|
  | 2, updated July 2015 | `https://www.preskill.caltech.edu/ph219/chap2_15.pdf` | 53 | 376,827 | `709a8a52cfbc9afb65ed6fb9dfbd9b59afaa8eac21167cbaf37a43b2555b0d34` | 108,187 (102,834) | `7fa59493416787f16647df6d3f454927c4001c8e975af75b4d2a3761ea46602d` |
  | 3, title page says Oct. 2018; index says July 2015 | `https://www.preskill.caltech.edu/ph219/chap3_15.pdf` | 65 | 433,557 | `34141b215c144c0cc8fd86e9a4ba289e1e8eb73b9dc6cf1dccdf594d4f57e6ad` | 128,187 (122,013) | `1c8072283edda35a2d08f001b827150da2a8311d9a5847bc0e8c2e7121072fd7` |
  | 4, 2001 available version | `https://www.preskill.caltech.edu/ph229/notes/chap4_01.pdf` | 70 | 422,808 | `f534889a223492ca32873fe20bac3214cf0b2e7d35e0a8d26f44fa10503d0546` | 142,456 (136,833) | `e703a89bb5715fbc2ba69f95042970318054de1b1cb9c8a0b2e09297638d4475` |
  | 5, updated July 2015 | `https://www.preskill.caltech.edu/ph219/chap5_15.pdf` | 54 | 332,702 | `e5f011c45dd67810ae6de81276c8a15c02948a772264fdfd7b638e4006aa62c3` | 114,442 (111,500) | `3f4d6542c2da64c07c140bf557b7d08562176af9296d26a3ce01d661d3dcf311` |
  | 6, updated November 2020 | `https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf` | 64 | 466,725 | `83afe653105520793ab37a56cfcce606dbec20e2ff67510887ae71dd0c6d6a28` | 152,351 (146,042) | `bb6a611647c58eaf6c8ceaae25e5b43e857de3d888275cfdb804a85066095bde` |

  `mutool draw -F txt` produced one file per PDF page plus the concatenated text
  file. Preskill ch. 2 was read sequentially and completely, PDF pages 1–53, in
  these chunks: 1–4, 5–10, 11–16, 17–22, 23–28, 29–34, 35–40, 41–46, and
  47–53. The read supports the mathematical contracts for unit rays, density
  matrices and Bloch parametrization; Pauli anticommutation and rotations;
  global versus relative phase (including the controlled 2π-rotation example);
  bipartite tensor-product semantics, partial trace, Schmidt decomposition,
  mixed-state ensembles, and fidelity/distance. It also includes the chapter's
  full exercises. Physical postulates and realization claims in the source are
  not taken as logical assumptions. Preskill's bra/ket inner product is linear
  in the ket/second argument, which must be translated to the library's
  published first-argument-linear convention. Extraction, contents searches
  and TOCs are not counted as reading.
- Also retrieved Preskill ch. 7 as a read-only cross-source for qc_r5:
  `https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf`, 92 PDF pages,
  690,902 bytes, SHA-256
  `ddb6901c73ca5732272164c03ef91696be01d697bc4c7c55eeeddcee7aafc8bc`;
  extracted text `sources/qc_r2/ch7_26_6A.txt`, 242,729 bytes (236,069
  characters), SHA-256
  `09445864102f73d2d356b4416855ff68070c3e2d0cbf4359e189b951cca2a38c`. I
  have not read ch. 7; qc_r5 was given this exact cache path and its own reading
  receipt responsibility.
- Preskill ch. 3 is now also fully read sequentially, PDF pages 1–65, in chunks
  1–6, 7–12, 13–18, 19–24, 25–30, 31–36, 37–42, 43–48, 49–54, 55–60, and
  61–65. The title page says October 2018 although the course index says July
  2015. The read covers orthogonal measurement, generalized POVMs and their
  ancilla realization; outcome-conditioned instruments; Kraus/operator-sum
  maps, trace preservation and complete positivity; channels as unitary
  dilation followed by partial trace; finite-dimensional channel-state duality
  and Stinespring construction; plus all ch. 3 exercises. For QC09 it supports
  the math-level outcome/state-update, classical branch, and deferred
  measurement interfaces, but the circuit theorem still needs a local proof
  from explicit circuit semantics. Physical decoherence/noise models and
  measurement narratives are source context only, never mathematical axioms.
- Preskill ch. 4's entire *available file* is now read sequentially, PDF pages
  1–70, in chunks 1–6, 7–12, 13–18, 19–24, 25–30, 31–36, 37–42, 43–48,
  49–54, 55–60, and 61–70. Its title page is dated 2 November 2001 and the
  author index labels it incomplete. Do not call this a complete treatment of
  ch. 4: the file itself has explicit placeholders and `??` exercise
  cross-references, though the full 70-page available text has been read. The
  sections QC17 uses are nevertheless substantive: Bell basis and Pauli
  correction semantics (4.1, PDF pp. 4–8), dense coding (4.4.1, pp. 28–29),
  teleportation (4.4.2–4.4.3, pp. 30–35), including the full two-qubit
  expansion proving each outcome leaves a known Pauli correction of the
  arbitrary input $a|0\rangle+b|1\rangle$, and exact resource accounting of
  one shared ebit plus two classical bits. The same file supplies the CNOT
  basis action and circuit reading convention, Schmidt/entanglement examples,
  Pauli/Bell correlations, and no-cloning proof. Its physical and
  experimental assertions are context only; the planned QC items will define
  states, maps, measurement laws, and protocol resources mathematically.
- Preskill ch. 5 is now fully read sequentially, PDF pages 1–54, in chunks 1–6,
  7–12, 13–18, 19–24, 25–30, 31–36, 37–42, 43–48, and 49–54. It defines
  finite classical and quantum circuits, circuit families, uniformity, size,
  depth and width; proves reversible embedding, Toffoli universality with
  clean scratch, and the compute-copy-reverse uncomputation method; defines
  quantum circuit inputs, finite local unitary gates and final computational
  basis readout; and presents exact two-qubit universality and finite-gate
  approximation. Relevant locators: §5.2.2 (PDF pp.14–19) for
  $(x,y)\mapsto(x,y\oplus f(x))$, Toffoli and reversible permutations;
  §5.2.3 (pp.20–22) for
  clean uncomputation and the pebble-game time-space tradeoff; §5.3 (pp.22–24)
  for circuit semantics and the deferred-measurement claim; §5.3.3 (pp.31–33)
  for circuit-counting lower bounds, including the informal exponential lower
  bound for arbitrary state preparation; §§5.4.2–5.4.4 (pp.36–45) for exact
  two-qubit synthesis, finite universality and Solovay–Kitaev. The statement
  that any entangling two-qubit gate plus local gates is universal appears in
  §5.4.1/exercise 5.6 but Preskill explicitly leaves its local-equivalence
  classification as unproved in the exercise; it is not a complete proof
  supplier. The matrix conventions for $S,T$ differ by scalar phase between
  §5.4.3 and Exercise 5.3; preserve that as a warning for exact controlled
  gate contracts. Physical locality remarks and physical implementation
  claims are not mathematical prerequisites.
- Preskill ch. 6 is now fully read sequentially, PDF pages 1–64, in chunks 1–6,
  7–12, 13–18, 19–24, 25–30, 31–36, 37–42, 43–48, 49–54, 55–60, and 61–64.
  The last four ranges were reread consecutively after I noticed that a prior
  source-inspection call had opened pp. 61–64 before pp. 43–60; this logged
  sequence is the complete sequential reading pass. The read includes every
  section and exercise: reversible function-oracle semantics and phase
  kickback (6.1); period finding, QFT, factoring and phase estimation (6.2–6.4);
  abelian HSP/discrete log (6.5); Grover reflections, exact iteration and
  query lower bound (6.6–6.7); local Hamiltonian simulation and phase-based
  eigenvalue/state estimation (6.8); MPS simulation (6.9); and the history-
  state reduction for QMA/local Hamiltonian (6.10). The state-estimation
  discussion explicitly requires the initial state's squared overlap with
  the target eigenstate to be at least inverse-polynomial for efficient
  sampling; it never licenses free generic state preparation. Ch. 6 is a
  working draft and has technical assertions beyond this assignment (notably
  a retrospective citation for the QMA local-Hamiltonian theorem); those are
  not treated as accepted root-local proof suppliers. Physical motivation is
  context only.
- Primary and corroborating reading is complete to the scopes recorded here.
  Source-fetch-check verified all seven official Preskill index/chapter URLs;
  see `source-ledgers/qc_r2-coverage.json`. I did not read chapter 7 and do not
  claim that Preskill chapter 4 is complete.

## Independent full-text corroboration

The corroborating documents are independent full-text corpora, not substitutes
for the chapter-by-chapter Preskill receipt above. qc_r1 owns both caches and
the full-document read receipts. I read only the exact contiguous selections
below; the distinction is recorded in `source-ledgers/qc_r2.json`.

| Full-text source and owner | qc_r2 selected read | Corroborated contracts and limit |
|---|---|---|
| John Watrous, *The Theory of Quantum Information* (598-page author-hosted draft), `sources/qc_r1/TQI.pdf` / `.txt`; complete sequential corpus read by qc_r1, ledger `source-ledgers/qc_r1.json` | PDF pp.367–377, sequentially; §6.3.1, printed pp.359–369 | Theorem 6.47 and Corollary 6.49 characterize exact teleportation via unitary corrections; Example 6.50 gives the four qubit Pauli/Bell branches; Corollary 6.52 bounds the number of outcome labels; Proposition 6.54 and Example 6.55 prove dense coding from orthogonal unitary encodings. This is the independent formal check for QC17; its Dirac convention must be translated. |
| Ronald de Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415v6 (239-page author-hosted PDF); complete sequential corpus read by qc_r1, ledger `source-ledgers/qc_r1.json` | PDF pp.20–24, 25–33, and 139–142; each selected range read in order | §§1.2–1.5 independently cover qubit measurement, elementary gates, controlled-U and the explicit teleportation expansion; §§2.1.2–2.2 define circuit wires, order, tensor/serial composition, final readout and inverse-circuit construction. Exercise 2.8 states deferred measurement with one ancilla per delayed one-qubit result but leaves the proof to the reader. §15.1 gives density/POVM outcome laws and §15.2 encoding information bounds, not an arbitrary state-preparation circuit theorem. |

These sources expose useful proof boundaries. Preskill §5.3 states deferred measurement, while de Wolf Exercise 2.8 asks the reader to prove it; QC09 therefore needs its own finite-dimensional circuit proof. Preskill §5.3.3 sketches a state-complexity volume argument, but not the needed chart and parameter-dimension details; QC24 needs its own stated model and proof. de Wolf §15 studies how much classical information can be decoded from a low-dimensional quantum encoding; that is not a gate-cost theorem for preparing an arbitrary amplitude table.

## Bracket, matrix, and phase conventions

The root library fixes the inner product to be linear in its first argument.
All kets, amplitudes, projectors, measurement formulas and protocol identities
in the QC inventory use the following explicit translation:

$$\langle x|y\rangle_D:=\langle y,x\rangle_{root},\qquad
\langle x|:y\mapsto\langle y,x\rangle_{root},\qquad
|x\rangle\langle y|:z\mapsto\langle z,y\rangle_{root}x.$$

In orthonormal coordinates the last operator has matrix $xy^\dagger$. For a
unit vector $x$, its ray projector is $P_xz=\langle z,x\rangle_{root}x$;
replacing $x$ by $e^{i\theta}x$ leaves $P_x$ unchanged. Born probabilities
are $\|P_a x\|^2$ or $\operatorname{tr}(\rho E_a)$; their numerical values are
unchanged by the convention translation. The source PDFs use standard Dirac
notation linear in the ket, so source bracket identities are not copied
verbatim into QC item proofs.

Fix exact one-qubit matrices, including their scalar phases: $X=\begin{bmatrix}0&1\\1&0\end{bmatrix}$, $Y=\begin{bmatrix}0&-i\\i&0\end{bmatrix}$, $Z=\begin{bmatrix}1&0\\0&-1\end{bmatrix}$, $H=2^{-1/2}\begin{bmatrix}1&1\\1&-1\end{bmatrix}$, $S=\operatorname{diag}(1,i)$ and $T=\operatorname{diag}(1,e^{i\pi/4})$. Define $R_z(\theta)=e^{-i\theta Z/2}$ and $R_{\hat n}(\theta)=e^{-i\theta\hat n\cdot\sigma/2}$; the phase gate $\operatorname{diag}(1,e^{i\theta})=e^{i\theta/2}R_z(\theta)$. The scalar is immaterial on an uncontrolled isolated gate but becomes a relative phase under control. This fixed contract avoids Preskill ch. 5's differing scalar conventions for $S,T$ across the main text and an exercise.

## Actual root mathematical suppliers

These are extant root items/pages, not proposed quantum items. The QC definitions
should cite them directly and prove the finite quantum-specific construction
locally.

- The convention and scalar laws are in [inner-product-spaces-and-orthogonality](../../../library/linear-algebra/inner-product-spaces-and-orthogonality.md): `def-inner-product-space`, `def-inner-product-norm`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, and `thm-finite-dimensional-isometry-characterisations`. The local route for unitarity is matrix adjoint plus $U^*U=I$, or the finite-dimensional isometry equivalence; the root inner product convention must be preserved.
- [the-spectral-theorem-and-singular-value-decomposition](../../../library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md) supplies `def-self-adjoint-and-normal-endomorphism`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `def-non-negative-and-positive-operator`, `thm-non-negative-operator-characterisations`, `thm-non-negative-square-root-exists-and-is-unique`, `thm-singular-value-decomposition`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `thm-operator-norm-is-the-largest-singular-value`, and `cor-operator-norm-submultiplicative-and-t-star-t-identity`. These support positive density matrices, eigenvalue checks, and norm/error estimates.
- [matrices-and-the-matrix-of-a-linear-map](../../../library/linear-algebra/matrices-and-the-matrix-of-a-linear-map.md) supplies ordered-basis coordinates, composition/matrix products, `def-trace-of-a-square-matrix`, `thm-trace-of-ab-equals-trace-of-ba`, and `def-trace-of-an-endomorphism`. These support Pauli trace orthogonality, density probabilities and circuit composition.
- [tensor-products-of-modules](../../../library/abstract-algebra/tensor-products-of-modules.md) supplies the algebraic tensor product (`def-tensor-product-of-modules-by-generators-and-relations`, `thm-universal-property-of-module-tensor-products`, `thm-tensor-product-basis-from-bases`, `prop-functoriality-of-module-tensor-products`, `thm-symmetry-and-associativity-over-a-commutative-ring`). It does **not** supply a Hilbert inner product on the finite tensor product. QC02 must define the product inner product from an ordered orthonormal product basis, prove its positivity and well-definedness there, and prove that wire permutations are unitary using that basis.
- [boolean-circuits-and-nonuniform-complexity](../../../library/computability-theory/boolean-circuits-and-nonuniform-complexity.md) provides `def-boolean-circuit-size-depth-fanin-and-basis`, with NOT, binary AND/OR, size, depth, output and basis limitations. Reversible embedding starts from a finite multi-output list of such Boolean circuits and makes the sum of their gate counts explicit.
- `def-finite-probability-space-and-event`, `def-expectation-on-a-finite-probability-space`, and `lem-finite-probability-basic-laws` supply finite outcome distributions when an item needs a classical probability space. They do not supply the quantum measurement map; QC04's finite effects/instrument contracts do that.
- QC24's continuous-parameter lower-bound route can use root `thm-morse-sard-for-euclidean-maps`, `def-critical-locus-and-critical-value-set`, and `def-null-and-content-zero-in-rn`. A fixed circuit topology with $g$ gates of maximum arity $k$ is a smooth map from at most $p g$ real matrix-entry parameters to a projective output chart, where $p=2\cdot4^k$ is a safe over-parameterization of the real/imaginary entries of each local matrix. The pure-state ray space in dimension $D$ has charts of real dimension $2D-2$. If $pg<2D-2$, Sard makes that topology's image null in every chart; for fixed $n,g$ there are only finitely many gate-location/type topologies. Thus not all rays are reachable, and generic exact preparation requires $\Omega(2^n)$ gates in this continuous bounded-arity model. The QC proof must write the chart map and dimension inequality explicitly; Preskill's sketch alone is not enough.

## Mathematical material in the physics library: provenance only

The source audit found relevant material under `physics/library/`, including a
mathematics-only sublayer. These are origins and cross-checks, not QC logical
dependencies or remark suppliers.

- `physics/library/non-relativistic-quantum-mechanics-mathematics/qm-math-composites.md` identifies its math-layer items with `domain: mathematics`. Relevant originals are `lem-nrqm-composites-hilbert-tensor-construction`, `lem-nrqm-composites-bounded-tensor-maps`, `thm-nrqm-composites-finite-partial-trace-and-schmidt`, `lem-nrqm-composites-finite-effects-and-instruments`, `lem-nrqm-composites-euclidean-l2-product-unitary`, `lem-nrqm-composites-finite-ancilla-complete-positivity`, and `lem-nrqm-composites-finite-naimark-compression`. They provide related completed Hilbert tensor products, partial traces, instruments and compression results. The Hilbert tensor construction and several infinite/trace-class extensions explicitly assume `def-countable-choice`; that hypothesis is unnecessary for the finite QC register construction proposed here. The root algebraic tensor-product page plus a QC-local finite product-coordinate proof is the cleaner dependency route.
- `physics/library/non-relativistic-quantum-mechanics/qm-state-geometry.md` records mathematical ray and rank-one projection items `def-nrqm-state-geometry-state-vectors-and-rays`, `lem-nrqm-state-geometry-normalization-and-phase-classes`, and `lem-nrqm-state-geometry-ray-to-rank-one-projection`; the same page then has physical preparation assignments. The mathematical results are useful provenance, but finite QC rays and phase invariance should depend on QC03 and root inner-product/matrix suppliers, not on physics namespace items.
- `physics/library/non-relativistic-quantum-mechanics/qm-framework-and-quantities.md` explicitly adopts `post-nrqm-framework-state-and-composition`, `post-nrqm-framework-observable-and-probability`, `post-nrqm-framework-ideal-conditional-measurement`, and `post-nrqm-framework-autonomous-dynamics`. These are physical premises about modeled systems and ideal measurement/dynamics. None belongs in a QC `deps`, `justified_by`, or proof narrative. QC definitions specify finite mathematical maps, circuits and outcome laws without assuming that a physical apparatus realizes them.

## QC07 item inventory: one-qubit geometry and gates

Cross-link QC02 `def-qc-register-and-computational-basis`,
`def-qc-ordered-bitstring-encoding`, and
`def-qc-tensor-register-and-permutation`, plus QC03
`def-qc-pure-state-and-ray` and `def-qc-density-operator`. These prevent a
second ray/register convention from being introduced in QC07.

- `def-qc-qubit-and-bloch-representation`: specify an ordered orthonormal basis of a complex two-dimensional space; define its pure ray and density state as a positive self-adjoint trace-one matrix; define $\rho(r)=\tfrac12(I+r_xX+r_yY+r_zZ)$. Pauli trace orthogonality proves existence/uniqueness of $r\in\mathbb R^3$ and gives $r_j=\operatorname{tr}(\rho\sigma_j)$. From $(r\cdot\sigma)^2=|r|^2I$, the eigenvalues are $(1\pm|r|)/2$, so positivity is equivalent to $|r|\le1$; $\operatorname{tr}(\rho^2)=\tfrac12(1+|r|^2)$, so purity is equivalent to $|r|=1$. The proof consumes QC03 state/density definitions and the root adjoint, trace, spectral and positive-operator suppliers. Preskill §2.3.2, PDF pp.21–22, corroborates the coordinate formulas.
- `def-qc-pauli-matrices`: state exact matrices $X,Y,Z$; compute $\sigma_j^*=\sigma_j$, $\sigma_j^2=I$, pairwise anticommutation and $\sigma_j\sigma_k=\delta_{jk}I+i\sum_\ell\epsilon_{jk\ell}\sigma_\ell$. These identities are direct $2\times2$ matrix products; they drive the Bloch, rotation, Bell and phase proofs.
- `def-qc-one-qubit-gate-alphabet-and-rotations`: fix exact $H,X,Y,Z,S,T$, $R_z(\theta)$ and axis rotations including angle and global-phase conventions. Verify each displayed matrix is unitary from the root adjoint/isometry criterion; verify $R_{\hat n}(\theta)=\cos(\theta/2)I-i\sin(\theta/2)\hat n\cdot\sigma$ using the Pauli-square identity. This interface also lets QFT/circuit pages cite the same exact phase matrices.
- The one-qubit matrix conventions make scalar phases explicit; the standalone invariance theorem and the definition of relative phase are placed on QC08 with controlled-gate semantics so downstream consumers share one phase route.

## QC08 item inventory: controlled gates, phase and entanglement

- `def-qc-controlled-unitary-access`: for control-first basis order $|0\rangle\otimes\mathbb C^d,|1\rangle\otimes\mathbb C^d$, define $C(U)=\begin{bmatrix}I_d&0\\0&U\end{bmatrix}$ for a named unitary $U$. Prove $C(U)^*C(U)=I$ and its action on each control basis state; define multi-control activation strings and negative controls by conjugating with $X$. State the target-wire order as part of the interface. A black-box $U$ does not include controlled access unless declared.
- `def-qc-inverse-unitary-access`: define $U^*=U^{-1}$ as an explicit gate/oracle capability. For a finite circuit alphabet closed under inverses, reversing gates constructs the inverse circuit with the same gate count and reversed layers. For a black-box, access to $U^*$ is a separately stated query capability; do not treat it as free.
- `def-qc-controlled-phase-rotation`: define $CP(\theta)=\operatorname{diag}(1,1,1,e^{i\theta})$ in ordered basis $|00\rangle,|01\rangle,|10\rangle,|11\rangle$, equivalently controlled $P(\theta)=\operatorname{diag}(1,e^{i\theta})$. Its QFT phase convention is therefore exact and independently auditable.
- `def-qc-relative-phase`: for two nonzero coefficients in a fixed ordered orthonormal basis, define the relative phase by the unit-modulus part of their ratio. A separate basis measurement (e.g. after $H$) or the off-diagonal projector entry proves that changing one coefficient's phase while fixing the other can change the ray and outcome law.
- `thm-qc-standalone-global-phase-invariance`: for every nonzero state vector $x$ and scalar $\lambda$ with $|\lambda|=1$, the rays/projectors of $x$ and $\lambda x$ coincide. Hence every defined POVM outcome probability is identical because $\rho_{\lambda x}=\rho_x$ and $\operatorname{tr}(E_i\rho_{\lambda x})=\operatorname{tr}(E_i\rho_x)$. Consume QC03 ray/density and QC04 POVM law; state the nonzero/normalized condition.
- `thm-qc-controlled-global-phase-is-relative-phase`: for finite-dimensional unitary $U$, choose an eigenvector $U\phi=\mu\phi$, $|\mu|=1$, and input control $(|0\rangle+\overline\mu|1\rangle)/\sqrt2$ with target $\phi$. Under $C(U)$ the control becomes $|+\rangle$, whose QC04 $X$-basis POVM outcome $+$ has probability $1$. Under $C(e^{i\theta}U)$ it becomes $(|0\rangle+e^{i\theta}|1\rangle)/\sqrt2$, so the same outcome has probability $\cos^2(\theta/2)$; this differs for $\theta\not\equiv0\pmod{2\pi}$. This proves the two controlled channels are distinct, rather than leaving “generally different” unexplained. It consumes `def-qc-controlled-unitary-access`, finite-dimensional unitary spectral/eigenvector facts, QC03 state, and QC04 POVM/outcome law; QC08 must require QC04 directly and must not require QC09 for this proof. Preskill ch. 2's controlled $2\pi$ spin-rotation example is corroboration, not the matrix proof.

## QC09 item inventory: syntax, semantics, measurement and cost

- `def-qc-circuit-syntax-and-register-order`: finite ordered wire set; bitstrings map to computational basis according to QC02's single encoding; each gate occurrence names an ordered tuple of distinct wires and its arity. A circuit is a finite layered list with disjoint gate supports within each layer. Inputs, outputs and measured wires are explicit.
- `def-qc-circuit-denotational-semantics`: use QC02's tensor-register permutation to embed a local gate as $U$ on its selected factors and identities on the others. A layer acts by the tensor product of its disjoint local gates; for chronological layers $L_1,\dots,L_d$, the output map is $U_{L_d}\cdots U_{L_1}$. Product-basis coordinates prove the local embedding and wire permutation are well-defined; root matrix-composition and unitary/isometry items prove every circuit denotes a unitary. The convention must make diagram time-left-to-right compatible with matrix action-right-to-left.
- `def-qc-classical-control-and-measurement-circuit`: consume QC04's `def-qc-projective-measurement`, `def-qc-povm-and-outcome-law`, and `def-qc-instrument-and-conditional-state`. Specify branch probabilities and normalized conditional states only when the branch probability is positive; classical feed-forward is the direct sum/block-controlled map indexed by the stored classical label. Keep outcome labels and any hidden Kraus/environment label distinct.
- Add `thm-qc-deferred-measurement` with finite register, finite outcome and finite-dimensional instrument hypotheses. For Kraus operators $M_{a,j}$ with $\sum_{a,j}M_{a,j}^*M_{a,j}=I$, the map $Vx=\sum_{a,j}M_{a,j}x\otimes|a,j\rangle$ is an isometry. Extend its orthonormal columns to a unitary on a larger finite register using QC03/root orthonormal-basis existence. Replace each classically selected later gate by the block-controlled unitary $\sum_aU_a\otimes|a\rangle\langle a|$, retain the record, and measure it at the end. Orthogonality of record basis states removes cross terms when the record is read or discarded, giving exactly the same branch probabilities, conditional maps and final output distribution. Tensoring this identity with an arbitrary reference space proves entanglement with external registers is preserved. This is a mathematical circuit theorem, not a claim about physical measurement delay.
- Use the canonical QC09 `def-qc-elementary-circuit-resources`, without a duplicate resource item. Its contract should fix a finite gate alphabet of maximum arity $k$, count each gate occurrence once as size, define depth by the explicit layers above, count data and ancilla wires, distinguish clean ancillas (initialized to $|0\rangle$ and returned to $|0\rangle$) from dirty ancillas (arbitrary input vector, exactly restored and uncorrelated), and count oracle calls separately. This item is the QC10 cost premise; QC14 may later refine classical description, input-bit and query costs without a cycle.

## QC10 item inventory: reversible embedding and coherent oracles

- `def-qc-clean-and-dirty-ancillas`: define the clean and dirty contracts as above. Exact restoration means for every data input $|\psi\rangle$ and every dirty register state $|\eta\rangle$, the output factors as $U|\psi\rangle\otimes|\eta\rangle$; restoring only computational-basis values is insufficient if an arbitrary dirty state can be correlated.
- `alg-qc-reversible-embedding`: for $f:\{0,1\}^n\to\{0,1\}^m$, define $U_f|x,y\rangle=|x,y\oplus f(x)\rangle$. The map permutes the basis and is its own inverse; its linear extension is unitary by orthonormal-basis preservation. This is a coherent basis-function computation, not a map cloning arbitrary quantum states.
- `thm-qc-reversible-embedding-cost`: given a bounded-fan-in Boolean DAG $C$ with $S$ non-input gates, $m$ output positions and $E$ input-port uses, allocate a fresh clean target bit for each gate output. AND into a zero target is Toffoli; NOT into a fresh zero target $t$ is $X(t)$ then CNOT$(a,t)$, producing $1\oplus a$ while preserving $a$; OR into a fresh target is CNOT$(a,t)$, CNOT$(b,t)$, Toffoli$(a,b,t)$, producing $a\oplus b\oplus ab=a\lor b$. Treat literal constant-1 wires as explicit X-prepared basis inputs; if their initialization is charged, add one X per such wire (or fold them into the augmented DAG before defining $S,E$). Compute the gate outputs in topological order, CNOT the $m$ designated output positions into $y$, and reverse the computation. The exact action is $(x,y,0^w)\mapsto(x,y\oplus C(x),0^w)$; gate count $O(S+E+m)$, clean workspace $w=O(S+E+m)$ and fully serial depth $O(S+E+m)$. Since fan-in is bounded, $E=O(S)$; size/work simplify to $O(S+m)$. Dependencies: QC09 resources/semantics, QC02 register order, and root `def-boolean-circuit-size-depth-fanin-and-basis`.
- `thm-qc-reversible-embedding-parallel-depth`: for a layered bounded-fan-in DAG with $S$ non-input gates, $m$ output positions, $E$ input-port uses, $D$ topological layers and maximum per-layer source fanout $F$, in each layer make private computational-basis copies for every input-port use using balanced CNOT fanout trees, evaluate gates on distinct supports in at most three disjoint-support sublayers, then reverse the fanout trees immediately. Copy the outputs to $y$ with a second balanced fanout/unfanout schedule and reverse the clean evaluation. Gate count and workspace remain $O(S+E+m)$, while depth is at most $2D(2\lceil\log_2(F+1)\rceil+3)+2\lceil\log_2(m+1)\rceil+1$; for bounded fan-in $E=O(S)$. Coherent CNOT fanout copies computational-basis labels and entangles superpositions; it is not cloning arbitrary states. This depth is fanout-sensitive and is not a constant-factor copy of Boolean-DAG depth. Dependencies: the serial reversible embedding, QC09 layered resources/semantics and QC02 register order.
- `def-qc-coherent-function-oracle`: explicitly state the query model and cost. The XOR oracle is the embedding above. With target $|{-}\rangle=(|0\rangle-|1\rangle)/\sqrt2$, $U_f(|x\rangle|{-}\rangle)=(-1)^{f(x)}|x\rangle|{-}\rangle$, so phase kickback follows by the XOR action and linearity. Oracle query cost is one only when the oracle is declared; deriving it from a Boolean circuit incurs the reversible embedding cost. Any unknown oracle inverse/control capability must be separately stated.

## QC17 item inventory: Bell basis, teleportation and dense coding

Reserve `def-qc-bell-basis`, `alg-qc-teleportation`, `alg-qc-dense-coding`, and `thm-qc-teleportation-correctness-and-resource-count`. Depend on QC02 tensor/register semantics, QC03 rays/density states, QC07 Pauli matrices and QC09 PVM/instrument/circuit laws. The Preskill chapter 4 file is useful but officially incomplete; the independent full-text treatment is Watrous §6.3.1 plus de Wolf §§1.5/15.1, all citations in `source-ledgers/qc_r2.json`.

- Define $|\Phi^\pm\rangle=(|00\rangle\pm|11\rangle)/\sqrt2$ and $|\Psi^\pm\rangle=(|01\rangle\pm|10\rangle)/\sqrt2$. Direct inner products prove orthonormality; CNOT followed by $H$ on the control is the inverse Bell-basis transform under the selected wire order.
- Teleportation uses a prior $|\Phi^+\rangle_{BC}$ and arbitrary normalized $|\psi\rangle_A=\alpha|0\rangle+\beta|1\rangle$. Let $V_{AB}=(H_A\otimes I_{BC})\,\mathrm{CNOT}_{A\to B}$, with matrix action right-to-left. The exact Bell-measurement identity is
  $$V_{AB}\bigl(|\psi\rangle_A\otimes|\Phi^+\rangle_{BC}\bigr)=\tfrac12\sum_{a,b\in\{0,1\}}|ab\rangle_{AB}\otimes X^bZ^a|\psi\rangle_C.$$
  Prove by expanding the four computational-basis terms after the stated CNOT and Hadamard; the untransformed pre-gate state is not the right-hand side. Orthogonality gives each outcome probability $1/4$. Sending the two-bit label $(a,b)$ and applying $Z^aX^b$ corrects because $(X^bZ^a)^{-1}=Z^aX^b$. The operator identity tensors with $I_R$ for every reference $R$, so correctness holds for inputs entangled with another register. Protocol resources are one shared Bell pair and two classical bits to transfer one qubit state; no no-cloning or physical claim is needed.
- Dense coding starts with the same Bell pair. Alice applies $Z^aX^b$ to her half; the four resulting vectors are the Bell basis up to the fixed signs already defined. Bob applies the inverse Bell transform and measures the two basis bits, recovering $(a,b)$. The protocol consumes the shared Bell state and sends one qubit register to convey two classical bits. This reports the protocol's resource count only; optimality requires an additional theorem such as Watrous Corollary 6.52 and should not be inferred from the example alone.

## QC24 item inventory: state preparation and its cost boundary

Reserve `alg-qc-state-preparation` and `thm-qc-state-preparation-cost`; make the
input and gate models part of the statement.

- **Input:** an explicit normalized amplitude table $\alpha=(\alpha_x)_{x\in\{0,1\}^n}$ with $D=2^n$ and $\sum_x|\alpha_x|^2=1$. An explicit $b$-bit-per-real-coordinate table has $\Theta(Db)$ scalar storage up to encoding overhead; at minimum it contains $D$ amplitude entries. If input arrives as a formula/oracle/prepared state, state that model separately. Do not assume QRAM, free data access, or free state preparation.
- **Exact rotation-level construction:** for each prefix $p$, let $r_p=(\sum_{x\succeq p}|\alpha_x|^2)^{1/2}$. At a node with $r_p>0$, choose $\theta_p$ with $\cos(\theta_p/2)=r_{p0}/r_p$ and $\sin(\theta_p/2)=r_{p1}/r_p$, and apply that prefix-controlled $R_y(\theta_p)$ to the next wire. If $r_p=0$, choose any angle; that branch has zero amplitude. The product of child-norm ratios gives amplitude magnitudes $|\alpha_x|$. Then apply a diagonal leaf-phase map sending $|x\rangle$ to $e^{i\arg\alpha_x}|x\rangle$ on nonzero entries; omit one reference phase because it is global. This is $O(D)$ variable-arity controlled rotations/phases. Convert each $k$-controlled operation to bounded-arity gates by computing the selected control conjunction into $O(k)$ clean ancillas with a Toffoli ladder, applying a controlled $SU(2)$ rotation/phase, and uncomputing. A controlled $R_y$ uses the exact two-CNOT/single-qubit decomposition; the ladder proof gives $O(k)$ fixed-arity gates per operation. Therefore the explicit bounded-arity construction uses $O(nD)$ continuous-rotation gates, $O(n)$ clean ancillas, $O(nD)$ serial depth and $O(n)$ total wires. This gate count excludes bits needed to represent the angles; for a finite alphabet it is an abstract exact-rotation upper bound, not a claim that arbitrary exact angles belong to that alphabet.
- **Generic continuous-gate lower bound:** for fixed data width $n$, ancilla width $a$, total width $W=n+a$, and a fixed circuit topology of $g$ gates from continuous $k$-local families with at most $p$ real parameters per occurrence, overparameterize each gate by the real and imaginary entries of its matrix, with $p\le2\cdot4^k$. Circuit output amplitudes and the projection onto the all-zero clean-workspace subspace are polynomial in these parameters. On the open domain where a chosen data amplitude is nonzero, its ratios to the other data amplitudes give a smooth map into one standard projective chart $\mathbb R^{2D-2}$ of $\mathbb{CP}^{D-1}$; the chart is local, not a global identification of projective space with Euclidean space. Allowed unitary/clean-ancilla parameter tuples lie in this smooth overparameterized domain. If $pg<2D-2$, Morse–Sard makes the chart image null. There are finitely many gate type/location topologies for fixed $W,g$, so their union cannot cover a chart. Therefore generic exact preparation needs $g=\Omega(D)$ when $k,p$ are constants. State this only for fixed finite width $W$ and include the ancillas in $W$.
- **Fixed discrete alphabet:** exact outputs form a countable set, so a finite gate alphabet cannot exactly prepare every ray. For approximation use projective chord distance $d([u],[v])=\min_{|\lambda|=1}\|u-\lambda v\|_2$. To avoid complement sign vectors representing the same ray, fix the first $D/2$ signs to $+1$ and choose a binary code on the remaining $D/2$ signs with pairwise Hamming distance $h\in[\delta D,D/2]$, for fixed $0<\delta<1/4$ (e.g. $\delta=1/16$). A greedy Hamming-ball bound gives at least $2^{(D/2)(1-H_2(2\delta))-O(1)}=\exp(c_\delta D)$ codewords, where $H_2(t)=-t\log_2t-(1-t)\log_2(1-t)$; each removed ball has radius below relative distance $2\delta$ in length $D/2$. The normalized sign vectors have nonnegative inner product $1-2h/D$ and projective distance $2\sqrt{h/D}\ge2\sqrt\delta$. If approximation error is below $\sqrt\delta$, each circuit output can cover at most one packed ray. A finite alphabet with at most $A$ gate types, maximum arity $k$, and total wire width $W$ (data and ancillas) has at most $(C A W^k)^g$ gate/type/location sequences of length $g$ for $W\ge2$; parallel layers may be linearized without increasing gate count. Thus fixed small error requires $g=\Omega(D/\log W)$; if $W=\operatorname{poly}(n)$, this is $\Omega(2^n/\log n)$. A finite-gate upper bound needs a separately stated synthesis theorem, angle precision and width accounting; QC14's later cost refinement is not a dependency of this proof.

## Explicit proof gaps and integration cautions

- Preskill chapter 4 is not a complete chapter; only the 70-page available file and the substantive Bell/teleportation/dense-coding sections are read. Do not mark the chapter itself complete.
- Global phase on an isolated ray and a phase inside a controlled block are separate theorems. A generic controlled-unitary oracle is not automatically free, and a black-box inverse is not automatically available.
- QC02 must prove the finite Hilbert tensor inner product locally. The root tensor item proves the algebraic tensor product only; the physics Hilbert-tensor extension assumes countable choice and is not a QC dependency.
- Deferred measurement and feed-forward need the finite ancilla/isometry proof above. A statement in a source, or a physical measurement postulate, is not enough.
- A dirty ancilla is not a clean ancilla and is not safe scratch. QC10's stated reversible simulation uses clean workspace; any dirty-ancilla optimization needs a distinct proof and resource bound.
- The exact arbitrary state-preparation construction has continuous-angle gates. A finite alphabet requires an approximation theorem, a metric, an error budget, and an explicit classical input representation. Preskill's short lower-bound discussion and de Wolf's encoding chapter do not silently provide these missing contracts.
- The quantum protocol item can count one Bell-pair resource and its classical/qubit message sizes; do not claim the communication is optimal unless the item includes the appropriate independently proved information bound.
- No physics postulate, physics remark, or empirical statement is a QC dependency. No engine, QC item file, manifest, active-run state, or publication was changed.

## Source-consumer dispositions after interface review

- **QC07:** Preskill ch. 2 §2.3.2, PDF pp.21–22, is a source for Bloch coordinates and Pauli traces; its §2.1–2.2 spinor discussion corroborates rays and phase. de Wolf §1.4, PDF pp.21–22, cross-checks elementary gates and controlled-U. The local QC07 obligations are exact matrices, Pauli identities, uniqueness, positivity and purity; neither source supplies root-library logical dependencies.
- **QC08:** de Wolf §1.4, PDF pp.21–22, and Preskill ch. 2's controlled $2\pi$ example support the fixed control-block convention. The two phase theorems are proved locally: QC08 standalone invariance consumes QC03 ray/density plus QC04 POVM outcome law; the controlled-phase witness consumes QC07 matrices/control semantics, QC04 outcome law and root finite-dimensional spectral theorem. This avoids a QC08–QC09 page cycle.
- **QC09:** Preskill ch. 3 §§3.1–3.3 and ch. 5 §5.3 plus de Wolf §2.1.2 corroborate finite outcome laws, circuit wire ordering, composition and deferred-measurement scope. The coherent-record isometry and unitary extension are QC09 proof obligations; no physical measurement postulate supplies them.
- **QC10:** Preskill ch. 5 §5.2.2, pp.14–19, supports the reversible embedding and compute/copy/uncompute construction; de Wolf §2.1.2/Exercise 2.8 supports Toffoli completeness and highlights workspace hygiene. The exact fresh-target gates and fanout-sensitive depth proof are local: NOT is $X(t)$ then CNOT$(a,t)$; per-layer CNOT copy/unfanout trees give the explicit bound above. A citation to the classical DAG alone does not imply a constant-factor coherent depth simulation.
- **QC17:** Preskill ch. 4 §§4.1, 4.4.1–4.4.3 is read in its available, author-incomplete file; de Wolf §1.5 and Watrous §6.3.1 are independent full-text corroboration. The corrected teleportation identity begins after CNOT then Hadamard; branch corrections/resources are proved locally. Watrous Corollary 6.52 may support a separate outcome-label lower bound, but it is not needed for the proposed protocol theorem.
- **QC24:** Preskill ch. 5 §5.3.3 is only a lower-bound sketch and §5.4.4 supports finite-gate synthesis background. de Wolf §15.2 bounds information in an encoded state but does not give state-preparation gate costs. QC24 therefore owns the explicit amplitude-table model, prefix-rotation construction, width/precision accounting, local Sard chart proof and finite-alphabet packing proof.



## Structured A-item export

The checker-shaped rows below cover assigned A pages QC07–QC10, QC17 and QC24 only. Source citations corroborate the topic; local proof obligations state what remains to be established.

```json
[
  {
    "id": "def-qc-qubit-and-bloch-representation",
    "kind": "definition",
    "page": "qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates",
    "deps": [
      "def-qc-pure-state-and-ray",
      "def-qc-density-operator",
      "def-qc-register-and-computational-basis"
    ],
    "justified_by": [],
    "statement_or_definition": "A qubit is a two-dimensional complex register with ordered orthonormal basis |0>,|1>; every density matrix has a unique Bloch form rho=(I+r_x X+r_y Y+r_z Z)/2.",
    "proof_obligations": [
      "Fix basis order and derive real coefficients from Hermitian trace-one coordinates."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "Preskill §2.3.2, PDF pp.21–22; proof calculations are finite-matrix obligations."
      }
    ]
  },
  {
    "id": "def-qc-pauli-matrices",
    "kind": "definition",
    "page": "qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates",
    "deps": [
      "def-qc-qubit-and-bloch-representation"
    ],
    "justified_by": [],
    "statement_or_definition": "X=[[0,1],[1,0]], Y=[[0,-i],[i,0]], Z=[[1,0],[0,-1]] in the ordered computational basis.",
    "proof_obligations": [
      "Verify adjoints, products and traces directly using the root-linear-first matrix convention."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "Preskill §2.3.2, PDF pp.21–22; proof calculations are finite-matrix obligations."
      }
    ]
  },
  {
    "id": "thm-qc-pauli-algebra",
    "kind": "theorem",
    "page": "qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates",
    "deps": [
      "def-qc-pauli-matrices"
    ],
    "justified_by": [],
    "statement_or_definition": "The Pauli matrices are Hermitian involutions, pairwise anticommute, and sigma_j sigma_k=delta_jk I+i sum_l epsilon_jkl sigma_l; tr(sigma_j sigma_k)=2delta_jk.",
    "proof_obligations": [
      "Compute all nine products and track the sign determined by the displayed Y matrix."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "Preskill §2.3.2, PDF pp.21–22; proof calculations are finite-matrix obligations."
      }
    ]
  },
  {
    "id": "def-qc-bloch-coordinate-map",
    "kind": "definition",
    "page": "qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates",
    "deps": [
      "def-qc-pauli-matrices",
      "def-qc-density-operator"
    ],
    "justified_by": [],
    "statement_or_definition": "Define r_j=tr(rho sigma_j) for j=x,y,z and r=(r_x,r_y,r_z).",
    "proof_obligations": [
      "Show coordinates are real and recover rho from the orthogonal Pauli basis."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "Preskill §2.3.2, PDF pp.21–22; proof calculations are finite-matrix obligations."
      }
    ]
  },
  {
    "id": "thm-qc-bloch-coordinate-existence-and-uniqueness",
    "kind": "theorem",
    "page": "qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates",
    "deps": [
      "def-qc-bloch-coordinate-map",
      "thm-qc-pauli-algebra"
    ],
    "justified_by": [],
    "statement_or_definition": "Every Hermitian trace-one 2x2 matrix has a unique representation rho=(I+r·sigma)/2 with r in R^3.",
    "proof_obligations": [
      "Use {I,X,Y,Z} as an orthogonal real basis of Hermitian 2x2 matrices."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "Preskill §2.3.2, PDF pp.21–22; proof calculations are finite-matrix obligations."
      }
    ]
  },
  {
    "id": "thm-qc-bloch-positivity-ball",
    "kind": "theorem",
    "page": "qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates",
    "deps": [
      "thm-qc-bloch-coordinate-existence-and-uniqueness",
      "thm-qc-pauli-algebra",
      "def-non-negative-and-positive-operator"
    ],
    "justified_by": [],
    "statement_or_definition": "rho(r) is positive semidefinite iff ||r||_2<=1, with eigenvalues (1±||r||_2)/2.",
    "proof_obligations": [
      "Square r·sigma using anticommutation and compute its eigenvalues, including r=0."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "Preskill §2.3.2, PDF pp.21–22; proof calculations are finite-matrix obligations."
      }
    ]
  },
  {
    "id": "thm-qc-bloch-purity-sphere",
    "kind": "theorem",
    "page": "qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates",
    "deps": [
      "thm-qc-bloch-coordinate-existence-and-uniqueness",
      "thm-qc-pauli-algebra",
      "def-qc-pure-state-and-ray"
    ],
    "justified_by": [],
    "statement_or_definition": "tr(rho(r)^2)=(1+||r||_2^2)/2, so a qubit state is pure iff ||r||_2=1.",
    "proof_obligations": [
      "Expand rho squared and invoke the finite-dimensional density purity criterion."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "Preskill §2.3.2, PDF pp.21–22; proof calculations are finite-matrix obligations."
      }
    ]
  },
  {
    "id": "def-qc-one-qubit-gate-alphabet-and-rotations",
    "kind": "definition",
    "page": "qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates",
    "deps": [
      "def-qc-pauli-matrices"
    ],
    "justified_by": [],
    "statement_or_definition": "Fix H=(X+Z)/sqrt(2), X,Y,Z, S=diag(1,i), T=diag(1,e^{i pi/4}), R_z(theta)=exp(-i theta Z/2), and R_n(theta)=exp(-i theta n·sigma/2); preserve exact scalar phases.",
    "proof_obligations": [
      "State angle, axis and basis conventions and verify each matrix is unitary; controlled gates retain displayed scalars."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "Preskill §2.3.2, PDF pp.21–22; proof calculations are finite-matrix obligations."
      }
    ]
  },
  {
    "id": "thm-qc-axis-rotation-pauli-formula",
    "kind": "theorem",
    "page": "qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates",
    "deps": [
      "def-qc-one-qubit-gate-alphabet-and-rotations",
      "thm-qc-pauli-algebra"
    ],
    "justified_by": [],
    "statement_or_definition": "For real unit n, R_n(theta)=cos(theta/2)I-i sin(theta/2)n·sigma and is unitary.",
    "proof_obligations": [
      "Use (n·sigma)^2=I in the exponential series and multiply by the adjoint."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "Preskill §2.3.2, PDF pp.21–22; proof calculations are finite-matrix obligations."
      }
    ]
  },
  {
    "id": "thm-qc-hadamard-pauli-conjugation",
    "kind": "theorem",
    "page": "qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates",
    "deps": [
      "def-qc-one-qubit-gate-alphabet-and-rotations",
      "thm-qc-pauli-algebra"
    ],
    "justified_by": [],
    "statement_or_definition": "H X H=Z, H Z H=X, H Y H=-Y; H exchanges computational and X eigenbases.",
    "proof_obligations": [
      "Multiply the stated matrices and verify the minus sign and normalization."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "Preskill §2.3.2, PDF pp.21–22; proof calculations are finite-matrix obligations."
      }
    ]
  },
  {
    "id": "def-qc-controlled-unitary-access",
    "kind": "definition",
    "page": "controlled-gates-phase-and-entanglement",
    "deps": [
      "def-qc-tensor-register-and-permutation",
      "def-qc-one-qubit-gate-alphabet-and-rotations"
    ],
    "justified_by": [],
    "statement_or_definition": "In control-first basis order define C(U)=diag(I,U); controlled access to black-box U is an explicit capability.",
    "proof_obligations": [
      "Verify unitarity and state control/target order and activation convention."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "de Wolf §1.4, PDF pp.21–22; Preskill ch.2 controlled-spin phase discussion."
      }
    ]
  },
  {
    "id": "def-qc-inverse-unitary-access",
    "kind": "definition",
    "page": "controlled-gates-phase-and-entanglement",
    "deps": [
      "def-qc-controlled-unitary-access"
    ],
    "justified_by": [],
    "statement_or_definition": "Inverse access explicitly supplies U*=U^{-1}; black-box inverse queries are separately stated and charged.",
    "proof_obligations": [
      "Take adjoints of the chronological product and distinguish an inverse capability from a free query."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "de Wolf §1.4, PDF pp.21–22; Preskill ch.2 controlled-spin phase discussion."
      }
    ]
  },
  {
    "id": "def-qc-controlled-phase-rotation",
    "kind": "definition",
    "page": "controlled-gates-phase-and-entanglement",
    "deps": [
      "def-qc-controlled-unitary-access",
      "def-qc-one-qubit-gate-alphabet-and-rotations"
    ],
    "justified_by": [],
    "statement_or_definition": "CP(theta)=diag(1,1,1,e^{i theta}) in order |00>,|01>,|10>,|11>, equivalently controlled diag(1,e^{i theta}) with first bit control.",
    "proof_obligations": [
      "Check action on all basis vectors and derive control-target convention."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "de Wolf §1.4, PDF pp.21–22; Preskill ch.2 controlled-spin phase discussion."
      }
    ]
  },
  {
    "id": "def-qc-relative-phase",
    "kind": "definition",
    "page": "controlled-gates-phase-and-entanglement",
    "deps": [
      "def-qc-pure-state-and-ray",
      "def-qc-one-qubit-gate-alphabet-and-rotations"
    ],
    "justified_by": [],
    "statement_or_definition": "For two nonzero coordinates in a fixed ordered basis, relative phase is the unit-modulus part of their ratio; changing it can change the ray.",
    "proof_obligations": [
      "Show ratios are invariant under common scalar multiplication and projector off-diagonal entries detect relative changes."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "de Wolf §1.4, PDF pp.21–22; Preskill ch.2 controlled-spin phase discussion."
      }
    ]
  },
  {
    "id": "thm-qc-standalone-global-phase-invariance",
    "kind": "theorem",
    "page": "controlled-gates-phase-and-entanglement",
    "deps": [
      "def-qc-pure-state-and-ray",
      "def-qc-density-operator",
      "def-qc-povm-and-outcome-law"
    ],
    "justified_by": [],
    "statement_or_definition": "For nonzero x and |lambda|=1, x and lambda x define the same ray and density matrix, so every defined POVM probability tr(E_i rho) agrees.",
    "proof_obligations": [
      "Translate Dirac notation to the root-linear-first convention, compute the rank-one projector and apply the QC04 outcome law."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "de Wolf §1.4, PDF pp.21–22; Preskill ch.2 controlled-spin phase discussion."
      }
    ]
  },
  {
    "id": "thm-qc-controlled-global-phase-is-relative-phase",
    "kind": "theorem",
    "page": "controlled-gates-phase-and-entanglement",
    "deps": [
      "def-qc-controlled-unitary-access",
      "def-qc-pure-state-and-ray",
      "def-qc-povm-and-outcome-law",
      "thm-complex-spectral-theorem-for-normal-endomorphisms"
    ],
    "justified_by": [],
    "statement_or_definition": "If U phi=mu phi, |mu|=1, input control (|0>+conj(mu)|1>)/sqrt(2) and target phi. C(U) gives X+ probability 1; C(e^{i theta}U) gives cos^2(theta/2), distinct for theta not 0 mod 2pi.",
    "proof_obligations": [
      "Apply both block matrices and compute the X-basis POVM law; this proves distinct channels by an explicit witness and consumes QC04, not QC09."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "de Wolf §1.4, PDF pp.21–22; Preskill ch.2 controlled-spin phase discussion."
      }
    ]
  },
  {
    "id": "def-qc-cnot-and-control-target-order",
    "kind": "definition",
    "page": "controlled-gates-phase-and-entanglement",
    "deps": [
      "def-qc-controlled-unitary-access",
      "def-qc-pauli-matrices"
    ],
    "justified_by": [],
    "statement_or_definition": "CNOT_{a->t}|a,t>=|a,t xor a>, with the first wire control and second wire target.",
    "proof_obligations": [
      "Check all four basis actions and confirm X acts only in the active control block."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "de Wolf §1.4, PDF pp.21–22; Preskill ch.2 controlled-spin phase discussion."
      }
    ]
  },
  {
    "id": "def-qc-controlled-z-and-swap",
    "kind": "definition",
    "page": "controlled-gates-phase-and-entanglement",
    "deps": [
      "def-qc-controlled-phase-rotation",
      "def-qc-tensor-register-and-permutation"
    ],
    "justified_by": [],
    "statement_or_definition": "CZ=CP(pi)=diag(1,1,1,-1); SWAP|a,b>=|b,a> in ordered tensor basis.",
    "proof_obligations": [
      "Check basis actions and distinguish wire permutation from relabeling."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "de Wolf §1.4, PDF pp.21–22; Preskill ch.2 controlled-spin phase discussion."
      }
    ]
  },
  {
    "id": "def-qc-multicontrol-activation",
    "kind": "definition",
    "page": "controlled-gates-phase-and-entanglement",
    "deps": [
      "def-qc-controlled-unitary-access",
      "def-qc-pauli-matrices"
    ],
    "justified_by": [],
    "statement_or_definition": "A multi-controlled U acts on a specified control bit string; negative controls are conjugated to positive controls with X before/after.",
    "proof_obligations": [
      "Verify all activation strings and that conjugating gates restore controls."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "de Wolf §1.4, PDF pp.21–22; Preskill ch.2 controlled-spin phase discussion."
      }
    ]
  },
  {
    "id": "def-qc-pure-state-entanglement",
    "kind": "definition",
    "page": "controlled-gates-phase-and-entanglement",
    "deps": [
      "def-qc-tensor-register-and-permutation",
      "thm-qc-schmidt-decomposition"
    ],
    "justified_by": [],
    "statement_or_definition": "A bipartite pure ray is entangled across a tensor cut iff it is not a product ray, equivalently its Schmidt rank exceeds one.",
    "proof_obligations": [
      "State finite factor hypotheses and use Schmidt decomposition for both directions."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "de Wolf §1.4, PDF pp.21–22; Preskill ch.2 controlled-spin phase discussion."
      }
    ]
  },
  {
    "id": "thm-qc-cnot-creates-bell-entanglement",
    "kind": "theorem",
    "page": "controlled-gates-phase-and-entanglement",
    "deps": [
      "def-qc-cnot-and-control-target-order",
      "def-qc-pure-state-entanglement",
      "def-qc-one-qubit-gate-alphabet-and-rotations"
    ],
    "justified_by": [],
    "statement_or_definition": "CNOT(H|0> tensor |0>)=(|00>+|11>)/sqrt(2) is entangled.",
    "proof_obligations": [
      "Compute coefficients and show the coefficient matrix has rank two."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "de Wolf §1.4, PDF pp.21–22; Preskill ch.2 controlled-spin phase discussion."
      }
    ]
  },
  {
    "id": "def-qc-circuit-syntax-and-register-order",
    "kind": "definition",
    "page": "circuit-syntax-denotational-semantics-and-measurement",
    "deps": [
      "def-qc-register-and-computational-basis",
      "def-qc-ordered-bitstring-encoding"
    ],
    "justified_by": [],
    "statement_or_definition": "Specify finite ordered wires, input/output/measured wires, gate tuples and a finite sequence of disjoint-support layers.",
    "proof_obligations": [
      "Use QC02's bitstring encoding and state chronological layer order."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "Preskill ch.3 §§3.1–3.3 and ch.5 §5.3; circuit proofs stated locally."
      }
    ]
  },
  {
    "id": "def-qc-circuit-denotational-semantics",
    "kind": "definition",
    "page": "circuit-syntax-denotational-semantics-and-measurement",
    "deps": [
      "def-qc-circuit-syntax-and-register-order",
      "def-qc-tensor-register-and-permutation"
    ],
    "justified_by": [],
    "statement_or_definition": "Embed local gates by identities and tensor permutations; disjoint layers are tensor products and chronological L1,...,Ld denote U_Ld...U_L1.",
    "proof_obligations": [
      "Prove local embedding is well-defined and each layer/circuit is unitary."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "Preskill ch.3 §§3.1–3.3 and ch.5 §5.3; circuit proofs stated locally."
      }
    ]
  },
  {
    "id": "def-qc-classical-control-and-measurement-circuit",
    "kind": "definition",
    "page": "circuit-syntax-denotational-semantics-and-measurement",
    "deps": [
      "def-qc-projective-measurement",
      "def-qc-povm-and-outcome-law",
      "def-qc-instrument-and-conditional-state",
      "def-qc-controlled-unitary-access"
    ],
    "justified_by": [],
    "statement_or_definition": "Store finite outcome labels; feed-forward is block-controlled by the label, and branch states normalize only at positive probability; distinguish outcomes from hidden Kraus labels.",
    "proof_obligations": [
      "Compute branch maps from QC04 instruments and keep observed and environmental indices separate."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "Preskill ch.3 §§3.1–3.3 and ch.5 §5.3; circuit proofs stated locally."
      }
    ]
  },
  {
    "id": "def-qc-elementary-circuit-resources",
    "kind": "definition",
    "page": "circuit-syntax-denotational-semantics-and-measurement",
    "deps": [
      "def-qc-circuit-syntax-and-register-order"
    ],
    "justified_by": [],
    "statement_or_definition": "Fix finite alphabet/max arity k; size counts gate occurrences, depth explicit disjoint layers, width all data/ancilla wires; clean ancillas start/end |0>, dirty ancillas are arbitrary and exactly restored uncorrelated; count oracle queries separately.",
    "proof_obligations": [
      "State the full finite gate/resource contract and verify layerization does not change gate count."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "Preskill ch.3 §§3.1–3.3 and ch.5 §5.3; circuit proofs stated locally."
      }
    ]
  },
  {
    "id": "lem-qc-local-gate-wire-embedding",
    "kind": "lemma",
    "page": "circuit-syntax-denotational-semantics-and-measurement",
    "deps": [
      "def-qc-circuit-syntax-and-register-order",
      "def-qc-tensor-register-and-permutation"
    ],
    "justified_by": [],
    "statement_or_definition": "Every ordered tuple of distinct wires has a unique global unitary embedding of its local gate, acting as identity elsewhere.",
    "proof_obligations": [
      "Check product basis vectors and extend linearly."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "Preskill ch.3 §§3.1–3.3 and ch.5 §5.3; circuit proofs stated locally."
      }
    ]
  },
  {
    "id": "lem-qc-disjoint-layer-order-independence",
    "kind": "lemma",
    "page": "circuit-syntax-denotational-semantics-and-measurement",
    "deps": [
      "lem-qc-local-gate-wire-embedding"
    ],
    "justified_by": [],
    "statement_or_definition": "Gates on disjoint supports commute, so layer denotation is independent of within-layer ordering.",
    "proof_obligations": [
      "Evaluate both compositions on product basis vectors."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "Preskill ch.3 §§3.1–3.3 and ch.5 §5.3; circuit proofs stated locally."
      }
    ]
  },
  {
    "id": "thm-qc-circuit-inverse-reversal",
    "kind": "theorem",
    "page": "circuit-syntax-denotational-semantics-and-measurement",
    "deps": [
      "def-qc-circuit-denotational-semantics",
      "def-qc-inverse-unitary-access"
    ],
    "justified_by": [],
    "statement_or_definition": "When inverses are available, reverse gate/layer order and adjoint each gate to implement the circuit inverse with equal size.",
    "proof_obligations": [
      "Take the adjoint of the ordered layer product and verify inverse availability."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "Preskill ch.3 §§3.1–3.3 and ch.5 §5.3; circuit proofs stated locally."
      }
    ]
  },
  {
    "id": "def-qc-measurement-branch-output-law",
    "kind": "definition",
    "page": "circuit-syntax-denotational-semantics-and-measurement",
    "deps": [
      "def-qc-povm-and-outcome-law",
      "def-qc-instrument-and-conditional-state"
    ],
    "justified_by": [],
    "statement_or_definition": "A measured circuit induces the finite label distribution from its instrument; normalize branch outputs only for positive probability.",
    "proof_obligations": [
      "Write branch traces explicitly and verify the sum over outcomes is the total channel."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "Preskill ch.3 §§3.1–3.3 and ch.5 §5.3; circuit proofs stated locally."
      }
    ]
  },
  {
    "id": "lem-qc-coherent-record-isometry",
    "kind": "lemma",
    "page": "circuit-syntax-denotational-semantics-and-measurement",
    "deps": [
      "def-qc-instrument-and-conditional-state"
    ],
    "justified_by": [],
    "statement_or_definition": "For finite Kraus operators M_{a,j} with sum M*_{a,j}M_{a,j}=I, Vx=sum M_{a,j}x tensor |a,j> is an isometry.",
    "proof_obligations": [
      "Compute inner products via orthogonal record labels and the completeness identity."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "Preskill ch.3 §§3.1–3.3 and ch.5 §5.3; circuit proofs stated locally."
      }
    ]
  },
  {
    "id": "thm-qc-deferred-measurement",
    "kind": "theorem",
    "page": "circuit-syntax-denotational-semantics-and-measurement",
    "deps": [
      "lem-qc-coherent-record-isometry",
      "def-qc-classical-control-and-measurement-circuit",
      "thm-qc-finite-kraus-choi-stinespring-equivalence"
    ],
    "justified_by": [],
    "statement_or_definition": "Every finite-outcome instrument circuit with classical later control has an equivalent coherent-record circuit measured at the end, preserving branch law and reference correlations.",
    "proof_obligations": [
      "Extend the isometry to a finite unitary, use block control, and recover the same maps by orthogonal record readout/discard; tensor with arbitrary reference."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "Preskill ch.3 §§3.1–3.3 and ch.5 §5.3; circuit proofs stated locally."
      }
    ]
  },
  {
    "id": "thm-qc-terminal-measurement-circuit-equivalence",
    "kind": "theorem",
    "page": "circuit-syntax-denotational-semantics-and-measurement",
    "deps": [
      "thm-qc-deferred-measurement",
      "def-qc-measurement-branch-output-law"
    ],
    "justified_by": [],
    "statement_or_definition": "Moving all finite measurements to final readout preserves the joint law of labels and designated outputs.",
    "proof_obligations": [
      "Induct over the finite measurement/feed-forward stages without merging labels."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "Preskill ch.3 §§3.1–3.3 and ch.5 §5.3; circuit proofs stated locally."
      }
    ]
  },
  {
    "id": "def-qc-clean-and-dirty-ancillas",
    "kind": "definition",
    "page": "reversible-computation-ancillas-and-coherent-oracles",
    "deps": [
      "def-qc-elementary-circuit-resources",
      "def-qc-register-and-computational-basis"
    ],
    "justified_by": [],
    "statement_or_definition": "Clean ancillas start at |0> and return to |0>; dirty ancillas start arbitrary and must return exactly as an uncorrelated factor for every data input.",
    "proof_obligations": [
      "State the tensor identity for all vectors, then extend to mixed states."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.2.2, PDF pp.14–19; construction/resource proof stated locally."
      }
    ]
  },
  {
    "id": "alg-qc-reversible-embedding",
    "kind": "algorithm",
    "page": "reversible-computation-ancillas-and-coherent-oracles",
    "deps": [
      "def-qc-ordered-bitstring-encoding",
      "def-qc-circuit-denotational-semantics"
    ],
    "justified_by": [],
    "statement_or_definition": "For f:{0,1}^n->{0,1}^m, U_f|x,y>=|x,y xor f(x)> is a basis permutation and unitary involution.",
    "proof_obligations": [
      "Check action twice on basis states and extend linearly."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.2.2, PDF pp.14–19; construction/resource proof stated locally."
      }
    ]
  },
  {
    "id": "thm-qc-reversible-embedding-cost",
    "kind": "theorem",
    "page": "reversible-computation-ancillas-and-coherent-oracles",
    "deps": [
      "alg-qc-reversible-embedding",
      "def-qc-clean-and-dirty-ancillas",
      "def-qc-elementary-circuit-resources",
      "def-boolean-circuit-size-depth-fanin-and-basis"
    ],
    "justified_by": [],
    "statement_or_definition": "A bounded-fan-in DAG with S gates, E input-port uses, m outputs has a clean XOR embedding using O(S+E+m) gates/work and serial depth. Fresh-target NOT is X(t) then CNOT(a,t); AND uses Toffoli; OR uses CNOT(a,t), CNOT(b,t), Toffoli(a,b,t); compute/copy/uncompute.",
    "proof_obligations": [
      "Check each truth table, charge constant initialization, count gates/ancillas and prove reverse evaluation clears workspace."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.2.2, PDF pp.14–19; construction/resource proof stated locally."
      }
    ]
  },
  {
    "id": "thm-qc-reversible-embedding-parallel-depth",
    "kind": "theorem",
    "page": "reversible-computation-ancillas-and-coherent-oracles",
    "deps": [
      "thm-qc-reversible-embedding-cost",
      "def-qc-elementary-circuit-resources",
      "def-qc-circuit-denotational-semantics"
    ],
    "justified_by": [],
    "statement_or_definition": "For S gates, m outputs, E input-port uses, D DAG layers and maximum same-layer fanout F, balanced private CNOT fanout/unfanout trees and at most three disjoint-support evaluation sublayers use O(S+E+m) gates/work and depth <=2D(2 ceil(log2(F+1))+3)+2 ceil(log2(m+1))+1; bounded fan-in gives E=O(S).",
    "proof_obligations": [
      "Give per-layer copy/evaluate/unfanout and output copy schedule; state coherent basis-label fanout entangles superpositions and is not arbitrary-state cloning or constant-factor depth preservation."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.2.2, PDF pp.14–19; construction/resource proof stated locally."
      }
    ]
  },
  {
    "id": "def-qc-coherent-function-oracle",
    "kind": "definition",
    "page": "reversible-computation-ancillas-and-coherent-oracles",
    "deps": [
      "alg-qc-reversible-embedding",
      "def-qc-elementary-circuit-resources"
    ],
    "justified_by": [],
    "statement_or_definition": "Declare XOR oracle O_f|x,y>=|x,y xor f(x)> as one query only when provided as oracle; compiled Boolean implementations incur reversible gate costs, with control/inverse access separately stated.",
    "proof_obligations": [
      "Separate oracle capabilities and query costs from circuit synthesis."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.2.2, PDF pp.14–19; construction/resource proof stated locally."
      }
    ]
  },
  {
    "id": "thm-qc-reversible-xor-oracle-unitary",
    "kind": "theorem",
    "page": "reversible-computation-ancillas-and-coherent-oracles",
    "deps": [
      "def-qc-coherent-function-oracle"
    ],
    "justified_by": [],
    "statement_or_definition": "The XOR oracle is unitary and involutive for every total Boolean f, even if f is non-injective.",
    "proof_obligations": [
      "Check O_f^2=I on basis vectors while preserving x."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.2.2, PDF pp.14–19; construction/resource proof stated locally."
      }
    ]
  },
  {
    "id": "thm-qc-phase-kickback-from-xor-oracle",
    "kind": "theorem",
    "page": "reversible-computation-ancillas-and-coherent-oracles",
    "deps": [
      "def-qc-coherent-function-oracle",
      "def-qc-register-and-computational-basis"
    ],
    "justified_by": [],
    "statement_or_definition": "With target |->, O_f(|x>|->)=(-1)^{f(x)}|x>|->; extend to superpositions by linearity.",
    "proof_obligations": [
      "Apply the XOR action to both target basis components and simplify the sign."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.2.2, PDF pp.14–19; construction/resource proof stated locally."
      }
    ]
  },
  {
    "id": "lem-qc-toffoli-clean-target-and-uncomputation",
    "kind": "lemma",
    "page": "reversible-computation-ancillas-and-coherent-oracles",
    "deps": [
      "def-qc-clean-and-dirty-ancillas",
      "def-qc-circuit-denotational-semantics"
    ],
    "justified_by": [],
    "statement_or_definition": "Toffoli on clean t=0 writes ab into t and preserves a,b; its inverse clears it after output copy.",
    "proof_obligations": [
      "Check the four control assignments and self-inverse property."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.2.2, PDF pp.14–19; construction/resource proof stated locally."
      }
    ]
  },
  {
    "id": "lem-qc-fresh-target-not-and-or-gadgets",
    "kind": "lemma",
    "page": "reversible-computation-ancillas-and-coherent-oracles",
    "deps": [
      "def-qc-pauli-matrices",
      "def-qc-cnot-and-control-target-order",
      "lem-qc-toffoli-clean-target-and-uncomputation"
    ],
    "justified_by": [],
    "statement_or_definition": "Fresh target t=0: X(t),CNOT(a,t) yields 1 xor a; CNOT(a,t),CNOT(b,t),Toffoli(a,b,t) yields a or b.",
    "proof_obligations": [
      "Evaluate all input assignments and confirm source wires are unchanged."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.2.2, PDF pp.14–19; construction/resource proof stated locally."
      }
    ]
  },
  {
    "id": "thm-qc-clean-uncomputation-restores-workspace",
    "kind": "theorem",
    "page": "reversible-computation-ancillas-and-coherent-oracles",
    "deps": [
      "def-qc-clean-and-dirty-ancillas",
      "thm-qc-reversible-embedding-cost",
      "thm-qc-circuit-inverse-reversal"
    ],
    "justified_by": [],
    "statement_or_definition": "Computing g(x) into clean work, copying outputs to a separate target and applying the inverse restores work to zero, coherently for superpositions.",
    "proof_obligations": [
      "Prove on basis inputs then use linearity; keep copied target disjoint."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.2.2, PDF pp.14–19; construction/resource proof stated locally."
      }
    ]
  },
  {
    "id": "thm-qc-oracle-phase-query-cost-boundary",
    "kind": "theorem",
    "page": "reversible-computation-ancillas-and-coherent-oracles",
    "deps": [
      "def-qc-coherent-function-oracle",
      "thm-qc-phase-kickback-from-xor-oracle",
      "def-qc-elementary-circuit-resources"
    ],
    "justified_by": [],
    "statement_or_definition": "Phase-oracle query cost is one only under an explicit oracle contract; synthesis charges circuit resources and control/inverse capabilities separately.",
    "proof_obligations": [
      "Relate phase kickback to the declared XOR contract without treating compiled implementation as a free query."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.2.2, PDF pp.14–19; construction/resource proof stated locally."
      }
    ]
  },
  {
    "id": "def-qc-bell-basis",
    "kind": "definition",
    "page": "bell-states-teleportation-and-dense-coding",
    "deps": [
      "def-qc-tensor-register-and-permutation",
      "def-qc-one-qubit-gate-alphabet-and-rotations"
    ],
    "justified_by": [],
    "statement_or_definition": "Define Phi±=(|00>±|11>)/sqrt(2), Psi±=(|01>±|10>)/sqrt(2).",
    "proof_obligations": [
      "Compute all inner products and verify dimension four."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph229/notes/chap4_01.pdf",
        "locator": "§4.1 and §§4.4.1–4.4.3, available incomplete chapter."
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.5, PDF pp.25–33."
      }
    ]
  },
  {
    "id": "thm-qc-bell-transform-inverse",
    "kind": "theorem",
    "page": "bell-states-teleportation-and-dense-coding",
    "deps": [
      "def-qc-bell-basis",
      "def-qc-cnot-and-control-target-order",
      "def-qc-one-qubit-gate-alphabet-and-rotations"
    ],
    "justified_by": [],
    "statement_or_definition": "CNOT followed by H on control maps computational basis to the defined Bell basis; reverse adjoint order is inverse.",
    "proof_obligations": [
      "Apply gates to four basis vectors and track signs."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.5, PDF pp.25–33."
      }
    ]
  },
  {
    "id": "alg-qc-teleportation",
    "kind": "algorithm",
    "page": "bell-states-teleportation-and-dense-coding",
    "deps": [
      "def-qc-bell-basis",
      "def-qc-classical-control-and-measurement-circuit",
      "def-qc-circuit-denotational-semantics"
    ],
    "justified_by": [],
    "statement_or_definition": "With input A and shared Phi+ on BC, apply CNOT A->B then H_A, measure AB=(a,b), send two bits, and apply Z^a X^b on C.",
    "proof_obligations": [
      "Specify chronological gates, ordered wires, Bell resource and correction convention."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.5, PDF pp.28–31."
      }
    ]
  },
  {
    "id": "thm-qc-teleportation-bell-expansion",
    "kind": "theorem",
    "page": "bell-states-teleportation-and-dense-coding",
    "deps": [
      "alg-qc-teleportation",
      "def-qc-bell-basis",
      "def-qc-one-qubit-gate-alphabet-and-rotations"
    ],
    "justified_by": [],
    "statement_or_definition": "V_AB=(H_A tensor I_BC) CNOT_{A->B} satisfies V_AB(|psi>_A tensor |Phi+>_BC)=1/2 sum_{a,b}|ab>_AB tensor X^b Z^a |psi>_C.",
    "proof_obligations": [
      "Expand computational terms after CNOT then H; pre-gate input is not the displayed RHS."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.5, PDF pp.28–31."
      },
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§6.3.1, PDF pp.367–377."
      }
    ]
  },
  {
    "id": "thm-qc-teleportation-equiprobable-outcomes",
    "kind": "theorem",
    "page": "bell-states-teleportation-and-dense-coding",
    "deps": [
      "thm-qc-teleportation-bell-expansion",
      "def-qc-projective-measurement"
    ],
    "justified_by": [],
    "statement_or_definition": "Every normalized input has probability 1/4 for each teleportation label (a,b).",
    "proof_obligations": [
      "Take norms of orthogonal branches and use unitarity of X^b Z^a."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph229/notes/chap4_01.pdf",
        "locator": "§4.4.2–4.4.3, available incomplete chapter."
      }
    ]
  },
  {
    "id": "thm-qc-teleportation-correction-identity",
    "kind": "theorem",
    "page": "bell-states-teleportation-and-dense-coding",
    "deps": [
      "thm-qc-teleportation-bell-expansion",
      "def-qc-pauli-matrices"
    ],
    "justified_by": [],
    "statement_or_definition": "Applying Z^a X^b to X^b Z^a|psi> returns |psi> under the stated Pauli convention.",
    "proof_obligations": [
      "Compute inverse order exactly, including a=b=1."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph229/notes/chap4_01.pdf",
        "locator": "Preskill ch.4 §§4.1, 4.4.1–4.4.3, available author-incomplete file."
      }
    ]
  },
  {
    "id": "thm-qc-teleportation-reference-stability",
    "kind": "theorem",
    "page": "bell-states-teleportation-and-dense-coding",
    "deps": [
      "thm-qc-teleportation-bell-expansion",
      "thm-qc-teleportation-correction-identity",
      "def-qc-tensor-register-and-permutation"
    ],
    "justified_by": [],
    "statement_or_definition": "Corrected teleportation is the identity on the input even when it is entangled with any finite reference R.",
    "proof_obligations": [
      "Tensor the branch operator identity with I_R and extend by linearity."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§6.3.1, PDF pp.367–377."
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.5, PDF pp.28–31."
      }
    ]
  },
  {
    "id": "thm-qc-teleportation-correctness-and-resource-count",
    "kind": "theorem",
    "page": "bell-states-teleportation-and-dense-coding",
    "deps": [
      "alg-qc-teleportation",
      "thm-qc-teleportation-equiprobable-outcomes",
      "thm-qc-teleportation-correction-identity",
      "thm-qc-teleportation-reference-stability"
    ],
    "justified_by": [],
    "statement_or_definition": "Teleportation transfers one qubit state using one shared Bell pair and two classical bits, with exact corrected output and four equiprobable labels.",
    "proof_obligations": [
      "Combine expansion, branch law, correction and reference stability; count shared state, bits and local gates separately."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§6.3.1, Theorem 6.47, Corollary 6.49, Example 6.50."
      }
    ]
  },
  {
    "id": "alg-qc-dense-coding",
    "kind": "algorithm",
    "page": "bell-states-teleportation-and-dense-coding",
    "deps": [
      "def-qc-bell-basis",
      "thm-qc-bell-transform-inverse",
      "def-qc-classical-control-and-measurement-circuit"
    ],
    "justified_by": [],
    "statement_or_definition": "Alice locally applies one of four Pauli encodings to her half of Phi+, sends that qubit, and Bob inverse-transforms and measures two bits.",
    "proof_obligations": [
      "List operators and specify transmitted register and measurement."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§6.3.1, Example 6.55."
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.5/§15.1, PDF pp.25–33, 139–142."
      }
    ]
  },
  {
    "id": "thm-qc-dense-coding-correctness-and-resource-count",
    "kind": "theorem",
    "page": "bell-states-teleportation-and-dense-coding",
    "deps": [
      "alg-qc-dense-coding",
      "def-qc-bell-basis"
    ],
    "justified_by": [],
    "statement_or_definition": "Four local Pauli encodings produce orthogonal Bell states, allowing two classical bits to be decoded from one transmitted qubit using one shared Bell pair.",
    "proof_obligations": [
      "Compute vectors/signs and orthogonality; do not infer optimality from the protocol."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§6.3.1, Proposition 6.54 and Example 6.55."
      }
    ]
  },
  {
    "id": "def-qc-teleportation-protocol-resource-count",
    "kind": "definition",
    "page": "bell-states-teleportation-and-dense-coding",
    "deps": [
      "def-qc-elementary-circuit-resources",
      "alg-qc-teleportation"
    ],
    "justified_by": [],
    "statement_or_definition": "Count the preshared Bell pair, two classical bits, local gate occurrences and two-bit measurement record as distinct protocol resources.",
    "proof_obligations": [
      "Specify message direction and avoid claims of optimality or physical realization."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph229/notes/chap4_01.pdf",
        "locator": "Preskill ch.4 §§4.1, 4.4.1–4.4.3, available author-incomplete file."
      }
    ]
  },
  {
    "id": "def-qc-state-preparation-cost-model",
    "kind": "definition",
    "page": "state-preparation-isometry-synthesis-and-limits",
    "deps": [
      "def-qc-pure-state-and-ray",
      "def-qc-elementary-circuit-resources"
    ],
    "justified_by": [],
    "statement_or_definition": "Input is an explicit normalized D=2^n amplitude table; separate table precision/storage, continuous-gate cost, finite-alphabet gates, width, ancillas and error metric.",
    "proof_obligations": [
      "State table/formula/oracle/prepared-state input model and do not assume free QRAM."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.3.3 / §5.4.4; chart, width and packing details supplied locally."
      }
    ]
  },
  {
    "id": "alg-qc-state-preparation",
    "kind": "algorithm",
    "page": "state-preparation-isometry-synthesis-and-limits",
    "deps": [
      "def-qc-state-preparation-cost-model",
      "def-qc-one-qubit-gate-alphabet-and-rotations",
      "def-qc-controlled-unitary-access"
    ],
    "justified_by": [],
    "statement_or_definition": "Prepare magnitudes using prefix subtree norms and controlled R_y rotations, then apply a diagonal leaf-phase map; zero-norm branches may take any angle.",
    "proof_obligations": [
      "Prove child-norm ratios multiply to target magnitudes, handle zeros and omit one global reference phase."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.3.3 / §5.4.4; chart, width and packing details supplied locally."
      }
    ]
  },
  {
    "id": "lem-qc-prefix-norm-rotation-identities",
    "kind": "lemma",
    "page": "state-preparation-isometry-synthesis-and-limits",
    "deps": [
      "alg-qc-state-preparation"
    ],
    "justified_by": [],
    "statement_or_definition": "At prefix p with r_p>0 choose cos(theta_p/2)=r_{p0}/r_p and sin(theta_p/2)=r_{p1}/r_p to split amplitude by child norms.",
    "proof_obligations": [
      "Induct on prefix length and avoid division on zero-norm branches."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.3.3 / §5.4.4; chart, width and packing details supplied locally."
      }
    ]
  },
  {
    "id": "thm-qc-state-preparation-rotation-level-upper-bound",
    "kind": "theorem",
    "page": "state-preparation-isometry-synthesis-and-limits",
    "deps": [
      "alg-qc-state-preparation",
      "lem-qc-prefix-norm-rotation-identities"
    ],
    "justified_by": [],
    "statement_or_definition": "The exact continuous construction uses O(D) variable-control rotations/phases; bounded-arity Toffoli ladders yield O(nD) gates/depth and O(n) clean ancillas/wires.",
    "proof_obligations": [
      "Count prefix nodes, prove each control ladder/uncompute costs O(n), and exclude angle-description bits from this model."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.3.3 / §5.4.4; chart, width and packing details supplied locally."
      }
    ]
  },
  {
    "id": "def-qc-projective-chord-distance",
    "kind": "definition",
    "page": "state-preparation-isometry-synthesis-and-limits",
    "deps": [
      "def-qc-pure-state-and-ray"
    ],
    "justified_by": [],
    "statement_or_definition": "d([u],[v])=min_{|lambda|=1}||u-lambda v||_2=sqrt(2-2|<u,v>_D|) for unit representatives.",
    "proof_obligations": [
      "Derive phase minimizer and translate the Dirac pairing to root-linear-first convention."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.3.3 / §5.4.4; chart, width and packing details supplied locally."
      }
    ]
  },
  {
    "id": "thm-qc-projective-chart-dimension",
    "kind": "theorem",
    "page": "state-preparation-isometry-synthesis-and-limits",
    "deps": [
      "def-qc-pure-state-and-ray"
    ],
    "justified_by": [],
    "statement_or_definition": "The locus in CP^{D-1} where a chosen coordinate is nonzero has a smooth chart C^{D-1}=R^{2D-2}; the whole projective space is not one Euclidean chart.",
    "proof_obligations": [
      "Divide remaining coordinates by the selected nonzero coordinate and verify the smooth inverse."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.3.3 / §5.4.4; chart, width and packing details supplied locally."
      }
    ]
  },
  {
    "id": "thm-qc-continuous-parameter-state-preparation-lower-bound",
    "kind": "theorem",
    "page": "state-preparation-isometry-synthesis-and-limits",
    "deps": [
      "def-qc-state-preparation-cost-model",
      "thm-qc-projective-chart-dimension",
      "thm-morse-sard-for-euclidean-maps",
      "def-qc-clean-ancilla-output-projection"
    ],
    "justified_by": [],
    "statement_or_definition": "At fixed total width W=n+a and bounded arity, g gates with p continuous parameters each cannot cover all rays if pg<2D-2; generic exact preparation costs Omega(D) when p is constant.",
    "proof_obligations": [
      "Map each topology smoothly into the local projective chart after projecting clean ancillas to zero, apply Sard on the open nonzero-coordinate domain and union finitely many topologies for fixed W,g."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.3.3 / §5.4.4; chart, width and packing details supplied locally."
      }
    ]
  },
  {
    "id": "thm-qc-finite-alphabet-exact-nonuniversality",
    "kind": "theorem",
    "page": "state-preparation-isometry-synthesis-and-limits",
    "deps": [
      "def-qc-state-preparation-cost-model",
      "def-qc-elementary-circuit-resources"
    ],
    "justified_by": [],
    "statement_or_definition": "At fixed finite gate alphabet and width, exact finite circuits reach only countably many states, not every ray for D>=2.",
    "proof_obligations": [
      "Count the circuit union and note CP^{D-1} contains uncountably many rays."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.3.3 / §5.4.4; chart, width and packing details supplied locally."
      }
    ]
  },
  {
    "id": "lem-qc-signed-ray-packing-code",
    "kind": "lemma",
    "page": "state-preparation-isometry-synthesis-and-limits",
    "deps": [
      "def-qc-projective-chord-distance"
    ],
    "justified_by": [],
    "statement_or_definition": "For even D fix first D/2 signs +1 and choose a greedy code on the remaining half with distances h in [delta D,D/2], 0<delta<1/4; obtain exp(c_delta D) distinct rays.",
    "proof_obligations": [
      "Use Hamming-ball/entropy counting and fixed half signs to prevent antipodal complements."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.3.3 / §5.4.4; chart, width and packing details supplied locally."
      }
    ]
  },
  {
    "id": "thm-qc-discrete-alphabet-approximate-preparation-lower-bound",
    "kind": "theorem",
    "page": "state-preparation-isometry-synthesis-and-limits",
    "deps": [
      "def-qc-state-preparation-cost-model",
      "def-qc-projective-chord-distance",
      "lem-qc-signed-ray-packing-code"
    ],
    "justified_by": [],
    "statement_or_definition": "For error below sqrt(delta), alphabet size A, maximum arity k and total width W require Omega(D/log W) gates; W=poly(n) gives Omega(2^n/log n).",
    "proof_obligations": [
      "Normalize sign vectors, prove projective separation >=2sqrt(delta), then compare exp(cD) pack size with at most (C A W^k)^g circuits."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.3.3 / §5.4.4; chart, width and packing details supplied locally."
      }
    ]
  },
  {
    "id": "def-qc-clean-ancilla-output-projection",
    "kind": "definition",
    "page": "state-preparation-isometry-synthesis-and-limits",
    "deps": [
      "def-qc-elementary-circuit-resources",
      "def-qc-circuit-denotational-semantics"
    ],
    "justified_by": [],
    "statement_or_definition": "A clean-workspace preparation outputs target data ray tensor |0^a>; projection onto the all-zero workspace gives the data amplitude vector for chart normalization.",
    "proof_obligations": [
      "Distinguish exact clean factorization from postselection and require nonzero projected data."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.3.3 / §5.4.4; chart, width and packing details supplied locally."
      }
    ]
  },
  {
    "id": "thm-qc-finite-width-topology-count",
    "kind": "theorem",
    "page": "state-preparation-isometry-synthesis-and-limits",
    "deps": [
      "def-qc-state-preparation-cost-model",
      "def-qc-elementary-circuit-resources"
    ],
    "justified_by": [],
    "statement_or_definition": "For finite width W, arity k and alphabet A, length-g circuits number at most (C A W^k)^g; parallel layers can be linearized without more gates.",
    "proof_obligations": [
      "Count type and wire-location choices per gate occurrence."
    ],
    "sources": [
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap5_15.pdf",
        "locator": "Preskill ch.5 §5.3.3 / §5.4.4; chart, width and packing details supplied locally."
      }
    ]
  }
]
```



## Inherited-root-remark-repair-plan

Plan-only machine-readable disposition for the assigned inherited remark and its actual direct root consumers.

```json
{
  "section": "Inherited-root-remark-repair-plan",
  "status": "plan-only",
  "date": "2026-10-14",
  "scope": "Only direct non-remark consumers of rem-plane-star-shaped-and-convex-dictionary that occur in root-prerequisite-closure.json; no source certification and no root/item/engine edits.",
  "closure_evidence": {
    "proposal_items": 867,
    "prerequisite_items": 1825,
    "mechanical_status": "fail",
    "failed_legacy_remark_edges": 10,
    "target_remark_is_one_of_failed_edges": true,
    "both_direct_consumers_in_root_prerequisite_closure": true,
    "direct_edge_hashes_match_current_bodies": true,
    "caveat": "The planned edge removals below do not make the 867-item closure pass. In particular, def-oriented-complex-triangle-and-boundary and def-complex-domain currently depend on rem-complex-plane-euclidean-dictionary, so those inherited paths remain until their separate remark repair is completed."
  },
  "inherited_remark": {
    "id": "rem-plane-star-shaped-and-convex-dictionary",
    "path": "items/rem-plane-star-shaped-and-convex-dictionary.md",
    "raw_sha256": "80e707359dd5d6ccdc4dff05e78cc9db8e6f3bd1392c64a7eea3b27e9748ce77",
    "claims_and_disposition": [
      {
        "claim": "The C=R^2 identification preserves Euclidean topology and straight segments.",
        "disposition": "Substantive bridge fact where used: move to the typed coordinate lemma below; do not leave as an unsupported remark link."
      },
      {
        "claim": "Star-shaped means the full segment from the chosen center to each point remains in the set.",
        "disposition": "Use def-star-shaped-open-subset-of-rn after transporting through the coordinate lemma."
      },
      {
        "claim": "Convex means every segment between two points remains in the set.",
        "disposition": "Use def-convex-subset-of-euclidean-space after transporting through the coordinate lemma."
      },
      {
        "claim": "Every convex complex domain is star-shaped with respect to each point.",
        "disposition": "Substantive but immediate from the two definitions: fix a and z and use convexity at every t in [0,1]. Connectedness is not used for this implication. Give this derivation in the local-logarithm consumer; do not rely on prose embedded in the star-shaped definition as a theorem."
      }
    ]
  },
  "proposed_missing_supplier": {
    "id": "lem-complex-coordinate-map-is-affine-isometry-and-preserves-openness",
    "kind": "lemma",
    "status": "new planning supplier; not authored or published",
    "deps": [
      "thm-complex-numbers-are-the-real-coordinate-plane",
      "def-complex-conjugate-real-imaginary-part-and-modulus",
      "lem-complex-conjugation-and-modulus-laws",
      "lem-metrics-on-rn",
      "def-metric-space",
      "def-metric-ball",
      "def-metric-topology"
    ],
    "remark_free_dependency_closure_audit": {
      "transitive_items_checked": 250,
      "remark_nodes_found": 0
    },
    "full_contract": "For Phi:C->R^2, Phi(a+bi)=(a,b), prove bijectivity, real-affinity Phi((1-t)z+t w)=(1-t)Phi(z)+t Phi(w) for t in [0,1], and the isometry identity |z-w|=d_2(Phi(z),Phi(w)). Consequently Phi and its inverse preserve metric-open sets and carry every complex segment exactly to its Euclidean-coordinate segment. State that d_C(z,w)=|z-w| and d_2 is the Euclidean metric; do not identify complex multiplication with a real-linear operation in both variables.",
    "proof_route": [
      "Use thm-complex-numbers-are-the-real-coordinate-plane for unique coordinates, bijectivity, addition, and multiplication; multiplication by the real scalar t+0i gives coordinatewise real scalar multiplication, hence affine-segment preservation.",
      "Use the coordinate modulus formula to compute |z-w|=sqrt((Re z-Re w)^2+(Im z-Im w)^2)=d_2(Phi(z),Phi(w)); lem-metrics-on-rn supplies that d_2 is the Euclidean metric.",
      "For any center and radius, the distance identity gives Phi(B_C(z,r))=B_R2(Phi(z),r) and the inverse equality; by def-metric-ball and def-metric-topology, U is open iff Phi(U) is open.",
      "Conclude only the stated affine, metric and openness transport facts; star-shapedness and convexity follow by applying their existing definitions to the transported segments."
    ],
    "source_disposition": "No new external-source claim is certified by this plan; this is a local coordinate proof route from existing root items."
  },
  "parents": [
    {
      "id": "prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain",
      "path": "items/prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain.md",
      "status": "published",
      "source_raw_sha256": "5d6b20fb0993b5edf1d3635e4cadbe14b0fc7595d1941520d89a1f0021067769",
      "current_deps": [
        "def-oriented-complex-triangle-and-boundary",
        "rem-plane-star-shaped-and-convex-dictionary",
        "def-complex-primitive",
        "thm-riemann-stieltjes-and-parametric-contour-integrals-agree",
        "thm-existence-of-complex-line-integrals-on-rectifiable-paths",
        "prop-reversal-and-concatenation-of-complex-line-integrals",
        "cor-ml-estimate-for-complex-line-integrals",
        "prop-linearity-of-complex-line-integrals"
      ],
      "replacement_deps": [
        "def-oriented-complex-triangle-and-boundary",
        "def-star-shaped-open-subset-of-rn",
        "lem-complex-coordinate-map-is-affine-isometry-and-preserves-openness",
        "def-complex-primitive",
        "thm-riemann-stieltjes-and-parametric-contour-integrals-agree",
        "thm-existence-of-complex-line-integrals-on-rectifiable-paths",
        "prop-reversal-and-concatenation-of-complex-line-integrals",
        "cor-ml-estimate-for-complex-line-integrals",
        "prop-linearity-of-complex-line-integrals"
      ],
      "actual_math_uses": [
        "The proof needs U open to choose a complex-metric ball B(z,rho) contained in U.",
        "The proof needs the chosen-center segment condition to ensure ell_az lies in U and every radial segment from a to the short edge lies in U, hence Delta[a,z,z+h] is contained in U.",
        "It does not use connectedness; do not add def-complex-domain merely because the prose calls U a domain elsewhere."
      ],
      "body_edit_loci": [
        "Statement line 32: replace the direct remark characterization with the transported definition: Phi(U) is star-shaped at Phi(a) under def-star-shaped-open-subset-of-rn; retain explicit openness in d_C.",
        "Facts & Assumptions line 44: state a in U, U open in d_C, and the equivalent R^2 star-shaped condition supplied by the new lemma.",
        "Proof step 1.1 line 60: cite the coordinate lemma for openness transfer and segment transport before invoking star-shapedness to contain the local triangle."
      ],
      "affected_consumer_review_duties": [
        "Recheck thm-holomorphic-primitive-on-star-shaped-domain: its invocation of this proposition must use the same transported star-shaped hypothesis and still discharge open-set hypotheses.",
        "Recheck every descendant in root-prerequisite-closure.json; this proposition is a direct prerequisite of thm-holomorphic-primitive-on-star-shaped-domain and later complex-analysis results.",
        "The retained def-oriented-complex-triangle-and-boundary dependency independently imports rem-complex-plane-euclidean-dictionary; this repair does not resolve that other inherited remark."
      ]
    },
    {
      "id": "lem-local-holomorphic-logarithm-nonvanishing-function-on-disc",
      "path": "items/lem-local-holomorphic-logarithm-nonvanishing-function-on-disc.md",
      "status": "published",
      "source_raw_sha256": "0a8102d6df087801a45c9d65a571187e1d1e9ceefcfb5e16e84bf45988c90e84",
      "current_deps": [
        "thm-holomorphic-primitive-on-star-shaped-domain",
        "def-star-shaped-open-subset-of-rn",
        "thm-cauchy-integral-formula-higher-derivatives",
        "thm-algebra-of-complex-derivatives",
        "thm-chain-rule-for-complex-derivatives",
        "thm-complex-exponential-is-entire-with-derivative-itself",
        "thm-complex-exponential-addition-and-real-extension",
        "thm-zero-complex-derivative-on-a-domain-implies-constant",
        "thm-classification-of-complex-logarithms",
        "rem-plane-star-shaped-and-convex-dictionary",
        "lem-euclidean-polygonal-paths-are-continuous",
        "thm-path-connected-implies-connected"
      ],
      "replacement_deps": [
        "thm-holomorphic-primitive-on-star-shaped-domain",
        "def-complex-domain",
        "def-star-shaped-open-subset-of-rn",
        "def-convex-subset-of-euclidean-space",
        "lem-complex-coordinate-map-is-affine-isometry-and-preserves-openness",
        "thm-cauchy-integral-formula-higher-derivatives",
        "thm-algebra-of-complex-derivatives",
        "thm-chain-rule-for-complex-derivatives",
        "thm-complex-exponential-is-entire-with-derivative-itself",
        "thm-complex-exponential-addition-and-real-extension",
        "thm-zero-complex-derivative-on-a-domain-implies-constant",
        "thm-classification-of-complex-logarithms",
        "lem-euclidean-polygonal-paths-are-continuous",
        "thm-path-connected-implies-connected"
      ],
      "actual_math_uses": [
        "The disk must be open to apply holomorphy and to satisfy def-complex-domain; prove openness explicitly by epsilon=r-|z-a| and the complex triangle inequality.",
        "The disk must be nonempty; a is in D(a,r) because r>0.",
        "The radius inequality proves the disk is convex: |(1-t)z+tw-a| <= (1-t)|z-a|+t|w-a| < r. Transfer this through Phi, apply def-convex-subset-of-euclidean-space, and derive star-shapedness at a directly from the convex definition.",
        "The zero-derivative-constant theorem requires a complex domain. Convexity gives a segment between any two disk points; the coordinate lemma makes it a continuous path, so the disk is path-connected and hence connected. Then def-complex-domain applies.",
        "Connectedness is needed for constancy, not for convexity-implies-star-shapedness."
      ],
      "body_edit_loci": [
        "Statement lines 34–36: define D(a,r) explicitly as {z in C: |z-a|<r}, r>0, and preserve the exact nonvanishing/holomorphic hypotheses.",
        "Facts & Assumptions line 40: replace the remark citation with the explicit open-ball proof, radius inequality, coordinate transport, convex/star-shaped definitions, and the nonempty-open-connected domain proof.",
        "Proof steps 1.1–2.1 lines 54–56: cite def-star-shaped for the primitive theorem and def-complex-domain for the zero-derivative theorem; keep the derivative/quotient/exponential proof unchanged."
      ],
      "affected_consumer_review_duties": [
        "Recheck its direct prerequisite thm-holomorphic-primitive-on-star-shaped-domain after the proposition repair.",
        "Recheck cor-local-holomorphic-roots-nonvanishing-function, a direct downstream consumer, for any stale remark link or hidden assumption that the disc/logarithm is a domain.",
        "Recheck all further descendants in root-prerequisite-closure.json; do not treat source citations or prior audit dates as proof approval.",
        "def-complex-domain itself currently depends on rem-complex-plane-euclidean-dictionary; that separate inherited edge remains a closure blocker until repaired."
      ]
    }
  ],
  "no_false_pass": {
    "remaining_directed_work": "This is not a graph-pass result. The plan removes one remark from two direct consumers after authoring the proposed coordinate lemma and editing those bodies. The root867 closure still has ten failed legacy remark edges before integration, and the consumers retain independent paths through rem-complex-plane-euclidean-dictionary and other inherited remarks.",
    "source_scope": "No source files, source ledgers, item bodies, merged inventories, engine files, or workflow state were modified."
  }
}
```

