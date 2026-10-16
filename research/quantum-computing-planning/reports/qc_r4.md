# QC researcher 4 report: QC15, QC16, QC22

Status: the complete accessible Waterloo CS 766/QIC 820 course-note corpus has been retrieved, extracted, and read in page order. Topic-specific course and research corroboration has also been read as scoped below. This report proposes mathematical contracts and proof routes only; it does not register canonical items or edit the live plan.

## Course corpus and source record

The verified institutional course index is [Watrous's Waterloo TQI lecture-notes page](https://cs.uwaterloo.ca/~watrous/TQI-notes/). It identifies the course as CS 766/QIC 820, taught at Waterloo in odd-numbered fall terms from 2011 through 2021, and links all 22 lectures as one 197-page PDF: [TQI-notes.pdf](https://cs.uwaterloo.ca/~watrous/TQI-notes/TQI-notes.pdf). The notes page says its last update was December 1, 2011 and that the notes are archival. It permits individual study and course-instructor use, but not sale. The PDF title page identifies John Watrous, the University of Waterloo, and Fall 2011.

I also fetched the [author-hosted copy](https://jhwatrous.github.io/TQI-notes.pdf). The author and institutional copies are byte-identical: 860,949 bytes, 197 PDF pages, SHA-256 `35ab2251083abea69679376b41e5346a36a357294bc2b29d9dbde3b638eab71c`. The official index HTML is cached at `sources/qc_r4/watrous-waterloo-tqi-notes-index.html`; the institutional PDF and author mirror are cached at `sources/qc_r4/watrous-waterloo-tqi-course-notes.pdf` and `sources/qc_r4/watrous-tqi-course-notes.pdf`. Extracted page-marked text is `sources/qc_r4/watrous-tqi-course-notes.txt` (542,383 bytes, 516,520 characters, SHA-256 `29589cdbd741b9dcadab6bc4460da14546fed535d19284c70da8cbd08b040071`). The complete sequential read was PDF pages 1–197 in these chunks: 1–4, 5–13, 14–24, 25–36, 37–48, 49–60, 61–72, 73–84, 85–96, 97–108, 109–120, 121–132, 133–144, 145–156, 157–168, 169–180, 181–194, and 195–197. Unread remainder: none.

For source discovery, the old Waterloo homepage at `https://cs.uwaterloo.ca/~watrous/` returns HTTP 200 but says it is no longer maintained and points to the current author site. My initial guesses `.../~watrous/TQI-notes.pdf`, `.../~watrous/CS766/`, `.../~watrous/CS766-F14/`, and `.../~watrous/QIC820/` returned HTTP 404. A subsequent Waterloo-domain search found the correct nested institutional directory and its official linked PDF. The old homepage is cached at `sources/qc_r4/watrous-old-waterloo-home.html` (576 bytes; SHA-256 `664fdfd9a4e87209a07f7ae0d29be56d5fc780fc519554e6e590b405a0520329`). The institution-hosted *book* at `https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf` is a separate source assigned to qc_r1; it is not the lecture-note corpus and is not claimed read here.

The Waterloo notes give strong finite-dimensional background for the interfaces consumed by QC15/16/22: lectures 1–3, printed pp. 1–37 (PDF pp. 4–40), treat complex Euclidean spaces, linear operators, states, measurements, and channels; lecture 6 §6.3, printed pp. 61–64 (PDF pp. 64–67), treats discrete Weyl/generalized Pauli operators and teleportation. The course notes do not cover stabilizer states, Clifford tableaux, Gottesman–Knill, graph states, or measurement-based computation. I use the course as a complete Waterloo course corpus and foundation, not as proof support for those absent topics.

## Topic-specific course and full-text corroboration

I read Ronald de Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415v6, Chapter 20 in the already-owned qc_r1 cache at `sources/qc_r1/de-wolf-1907.09415.pdf` and `.txt`. My independent sequential read covers PDF pp. 185–194 (printed pp. 173–182), including the full chapter exercises; this is a chapter-level receipt, not a claim to have read the 239-page document. The unread document ranges are PDF pp. 1–184 and 195–239. Its course treatment directly supports QC15/16/22: §20.1 gives phase-aware Pauli group and pure stabilizer-state semantics; §20.2 gives Clifford conjugation and measurement-controlled circuits; §20.3 proves the Gottesman–Knill simulation by stabilizer updates, including deterministic commuting and fair-random anticommuting Pauli measurements; §20.6 derives one-bit measurement teleportation, adaptive J(alpha) angles, a measured CZ, and an n×(d+1) cluster layout. The nonzero-branch update is explicit. In the deterministic branch the complementary outcome has probability zero; the local QC semantics should state that this branch is impossible and has no normalized conditional state.

I read Watrous, *Understanding Quantum Information and Computation* (2025), Lesson 14 “The Stabilizer Formalism,” in `sources/qc_r4/watrous-uqic.pdf/.txt`, PDF pp. 407–437, sequentially in chunks 407–414, 415–422, 423–430, 431–437. This is selected-lesson corroboration, not a complete read of the 498-page course: unread ranges are pp. 1–406 and 438–498. Lesson 14 presents Pauli and stabilizer group definitions, examples of repetition/Shor/Steane codes, Clifford conjugation, and the code-space projector/dimension formula. It asserts efficient Gottesman–Knill simulation but does not prove the tableau simulator or the reverse Clifford-generation theorem; those need local proof.

I fully read these primary full texts in page order:

- Scott Aaronson and Daniel Gottesman, “Improved Simulation of Stabilizer Circuits,” [arXiv:quant-ph/0406196](https://arxiv.org/pdf/quant-ph/0406196), PDF pp. 1–15, no unread remainder. Its phase-tracked tableau preserves signs as well as binary commutation data; it supplies exact H/S/CNOT and Pauli-measurement update algorithms, deterministic outcome calculation, random-measurement pivot replacement, and efficient simulation. The source proves the algorithmic result, but the library item should still state its own tableau invariant and phase-update verification.
- Robert Raussendorf and Hans J. Briegel, “A One-Way Quantum Computer,” [arXiv:quant-ph/0010033](https://arxiv.org/pdf/quant-ph/0010033), PDF pp. 1–4, complete short paper. It gives the initial cluster-state model, wire teleportation and byproduct corrections, one-qubit rotations, a CNOT pattern, and circuit composition.
- Robert Raussendorf, Dan E. Browne, and Hans J. Briegel, “Measurement-based quantum computation on cluster states,” [arXiv:quant-ph/0301052](https://arxiv.org/pdf/quant-ph/0301052), PDF pp. 1–37, complete paper. The most useful mathematical locators are graph-state correlations and adjacency pp. 3–5; gate patterns and adaptation pp. 5–7 and 17–20; circuit-pattern composition and byproduct propagation pp. 8–16; the correlation proof for CNOT pp. 20–21; universal cluster computation and the Clifford first round pp. 21–24; and appendix graph-decomposition conditions pp. 35–37. Its physical implementation sections are not used as axioms.

I read the selected mathematical sections of Hein, Dür, Eisert, Raussendorf, Van den Nest, and Briegel, “Entanglement in graph states and its applications,” [arXiv:quant-ph/0602096](https://arxiv.org/pdf/quant-ph/0602096), in two sequential scoped runs: PDF pp. 10–25 (graph-state definition, stabilizers, local Clifford material, binary representation) and pp. 32–40 (Gottesman–Knill overview, graph-state Pauli measurement rules, cluster states and one-way computation). I did not read the full 99-page review; unread ranges are pp. 1–9, 26–31, and 41–99. For QC15, pp. 22–25 define the binary Pauli label, give the symplectic commutation matrix, and show that Clifford conjugation induces a symplectic linear transformation; the reverse realization is asserted but referred out. For QC22, pp. 14–16 give the \(CZ\)-prepared graph state, its generators, basis and projector; pp. 35–36 prove graph updates for Pauli measurements. Arbitrary-angle adaptive computation is supported more directly by the two Raussendorf–Briegel papers and de Wolf §20.6.

The machine-readable fetch evidence is `sources/qc_r4/coverage.json`: `node tools/source-fetch-check.mjs --coverage research/quantum-computing-planning/sources/qc_r4/coverage.json --stamp` verified all 8 covered occurrences (the institutional PDF, author PDF, official Waterloo index, UQIC PDF, and four arXiv PDFs). The full hashes, extracted-text hashes, retrieval attempts, exact read receipts, and claim locators are recorded in `source-ledgers/qc_r4.json`.

## QC15: phase-aware Pauli algebra and binary symplectic representation

Define X, Y, Z by their explicit 2×2 complex matrices and set, for \(x,z\in\mathbb F_2^n\) and \(k\in\mathbb Z/4\mathbb Z\),

\[
P(k,x,z)=i^k X^xZ^z,\qquad X^x=\bigotimes_j X^{x_j},\quad Z^z=\bigotimes_j Z^{z_j}.
\]

This phase convention has \(Y=iXZ\), hence \(P(1,1,1)=Y\) in one coordinate. The exact multiplication rule is

\[
P(k,x,z)P(k',x',z')
 =P(k+k'+2\,z\cdot x',\;x+x',\;z+z'),
\]

where binary vector addition and the dot product are over \(\mathbb F_2\), and the phase index is modulo 4. The sign term comes from \(Z^zX^{x'}=(-1)^{z\cdot x'}X^{x'}Z^z\). Thus the binary label \((x,z)\) alone is only the quotient of the Pauli group by its scalar center; it is not the full group law and loses the sign needed for deterministic measurement outcomes. A Pauli \(P(k,x,z)\) is Hermitian exactly when \(k\equiv x\cdot z\pmod 2\).

The quotient labels form \(V_n=\mathbb F_2^{2n}\). Define

\[
\omega((x,z),(x',z'))=x\cdot z'+z\cdot x'.
\]

Direct coordinate calculation proves bilinearity, alternation, and nondegeneracy; the phase-aware product gives

\[
P(k,x,z)P(k',x',z')=(-1)^{\omega((x,z),(x',z'))}P(k',x',z')P(k,x,z).
\]

So commutation is exactly symplectic orthogonality. The finite-dimensional alternating-form normal-form theorem applies in characteristic 2, but the displayed form's nondegeneracy can also be proved directly by testing the standard coordinate vectors.

Define the Clifford group as the unitary normalizer of the full phase-aware Pauli group. Conjugation sends products to products and preserves commutators, so it induces a linear automorphism of \(V_n\) preserving \(\omega\). Include the phase/sign images of generators separately: H sends \(X\mapsto Z, Z\mapsto X\); S sends \(X\mapsto Y, Z\mapsto Z\); and CNOT \(c\to t\) sends \(X_c\mapsto X_cX_t\), \(Z_c\mapsto Z_c\), \(X_t\mapsto X_t\), \(Z_t\mapsto Z_cZ_t\). The exact \(Y\) signs follow by multiplying the phase-aware images. These equations both prove preservation of \(\omega\) and provide the tableau gate updates.

Recommended QC15 proof route: prove the Pauli product/commutator identities by reordering tensor coordinates; prove the binary quotient homomorphism and its kernel is the scalar center; verify each Clifford generator's conjugation on (X_j,Z_j), including phase; extend multiplicatively; then derive symplectic preservation from the commutator sign. If the page claims the full quotient map onto (Sp(2n,2)), add a local symplectic Gaussian-elimination lemma that synthesizes every binary symplectic basis change from H, S, CNOT, and swaps, with a tracked phase lift. The sources assert this converse or leave it as an exercise rather than supplying a complete proof. Alternatively state only the proved normalizer-to-symplectic-action map and avoid claiming surjectivity.

## QC16: stabilizer states, tableau semantics, and exact Gottesman–Knill simulation

A pure \(n\)-qubit stabilizer is an abelian subgroup \(S\) of Hermitian Paulis with \(n\) independent binary labels and \(-I\notin S\). Its joint \(+1\) space is one-dimensional. Prove this with

\[
\Pi_S=2^{-n}\sum_{g\in S}g.
\]

Group closure gives \(\Pi_S^2=\Pi_S\); Hermiticity gives \(\Pi_S^*=\Pi_S\); every nonidentity tensor Pauli has trace zero, while \(\operatorname{Tr}(I)=2^n\), so \(\operatorname{Tr}(\Pi_S)=1\). Therefore \(\Pi_S\) is a rank-one orthogonal projector. This proof also generalizes: \(r\) independent commuting generators give a \(2^{n-r}\)-dimensional common eigenspace. Clifford conjugation transports \(S\), its projector, and the represented ray.

For a Hermitian Pauli \(M\), define outcome bit \(b\in\{0,1\}\) by

\[
P_b=\frac{I+(-1)^bM}{2},\quad p_b=\operatorname{Tr}(P_b\rho),\quad
\rho_b=P_b\rho P_b/p_b\;\text{only when }p_b>0.
\]

If \(p_b=0\), the branch is impossible and \(\rho_b\) is undefined. For a pure maximal stabilizer \(S\), if \(M\) commutes with all generators, maximal isotropy implies its binary label lies in \(S\); phase-aware multiplication finds \(M=\pm g\) for a \(g\in S\). Exactly one outcome is certain and the other has probability zero; the tableau stays unchanged. If \(M\) anticommutes with some generator \(g_1\), conjugation by \(g_1\) changes the sign of \(M\), so \(\operatorname{Tr}(M\rho)=0\) and \(p_0=p_1=1/2\). Multiply other anticommuting generators by \(g_1\) to leave one anticommuting pivot; after sampling the fair outcome \(b\), replace \(g_1\) by \((-1)^bM\). The projected nonzero branch is stabilized by the new independent commuting set. There is no third case for a full-rank pure stabilizer. If mixed/rank-deficient stabilizer states are included, the commuting-but-independent case also needs a random update and a separate dimension/rank statement.

For tableau simulation, retain (i) each row's binary \((x,z)\) label and (ii) its phase bit. An extended tableau may also keep dual destabilizer rows to test deterministic outcomes efficiently. Invariant: stabilizer rows describe exactly the current pure state; the extended rows pair with stabilizer rows by the symplectic form. Each H/S/CNOT gate updates every row by its exact phase-aware conjugation, preserving the invariant. For measurement, symplectic pairings identify random versus deterministic cases; deterministic outcome is the sign of the unique phase-aware product of stabilizers with the measured label, and random outcome uses one fair bit followed by the pivot replacement above. After an adaptive measurement, evaluate the next classical control function on the sampled transcript and continue. Initialization from basis input \(|x\rangle\) uses generators \((-1)^{x_j}Z_j\). The result is an exact sample of the same output-transcript/final-stabilizer-state distribution, not an explicit enumeration of the full distribution.

Recommended theorem proof: induct on circuit instructions. Establish the tableau invariant initially; prove unitary rows by conjugation identities; prove the deterministic measurement case by membership in the maximal isotropic label subspace and its phase; prove each random outcome has probability \(1/2\) via anticommutation and trace cyclicity; prove that the updated generators stabilize the normalized projected state and remain independent/commuting. The finite data per row are (2n) bits plus phase, so storage is polynomial. A direct row representation gives polynomial-time updates; cite the chosen tableau's concrete row-reduction bound (for example, the Aaronson–Gottesman extended tableau has efficient gate and measurement updates) rather than promising a bound for an unspecified representation. This proof must explicitly handle zero-probability outcomes without forming a conditional state for them.

## QC22: graph states and circuit/pattern equivalence

For an ordered finite simple graph \(G=(V,E)\), define the QC-local binary adjacency matrix \(A_2(G)\in M_{|V|}(\mathbb F_2)\) by \(A_{uv}=1\) iff \(\{u,v\}\in E\), otherwise \(0\). It is symmetric with zero diagonal. Define

\[
|G\rangle=\Bigl(\prod_{\{u,v\}\in E}CZ_{uv}\Bigr)|+\rangle^{\otimes V},\quad
CZ=\operatorname{diag}(1,1,1,-1).
\]

The gates \(CZ_{uv}\) commute, so this is independent of product ordering. From \(CZ_{uv}X_vCZ_{uv}=Z_uX_v\) and \(X_v|+\rangle=|+\rangle\), obtain the vertex generators

\[
K_v=X_v\prod_{u\in N(v)}Z_u.
\]

They commute: for adjacent (v,w), the two local X/Z swaps cancel; otherwise no swap occurs. They are independent because \(K_v\) has its unique \(X\)-factor at vertex \(v\). The QC16 projector lemma therefore proves the graph state is their unique joint \(+1\) ray. Directly from diagonal \(CZ\),

\[
|G\rangle=2^{-|V|/2}\sum_{x\in\mathbb F_2^V}(-1)^{\sum_{\{u,v\}\in E}x_ux_v}|x\rangle.
\]

Define an open-graph pattern by a finite ordered graph \(G=(V,E)\), input set \(I\), output set \(O\), and ordered measurements of \(V\setminus O\). It acts on an arbitrary input state on \(I\), adjoins \(|+\rangle\) on \(V\setminus I\), applies one \(CZ\) per edge, and measures each selected vertex in a local basis determined by the earlier outcome bits. For transcript \(\mathbf b\), the ordered projectors and output-wire restriction define a branch map \(K_{\mathbf b}:\mathcal H_I\to\mathcal H_O\). Its probability on normalized \(|\psi\rangle\) is \(\|K_{\mathbf b}|\psi\rangle\|^2\); normalize the output only for a positive-probability branch. The inputless graph-state pattern is the special case \(I=\varnothing\). This gives a mathematical semantics for adaptive feed-forward without a physics supplier.

The one-bit teleportation identity is the proof engine. It is the open-graph pattern with input vertex 1, output vertex 2, and one edge. For

\[
J(\alpha)=H\operatorname{diag}(1,e^{i\alpha}),\qquad
|b\rangle_\alpha=J(\alpha)^{-1}|b\rangle,
\]

expand (CZ(|\psi\rangle\otimes|+\rangle)) and apply the measurement bra \({}_\alpha\langle b|\) on the first qubit. The remaining unnormalized vector is \(2^{-1/2}X^bJ(\alpha)|\psi\rangle\), so both outcomes have probability \(1/2\), and the normalized output is the intended gate up to the known correction \(X^b\). For a following J(\beta), the exact identity is J(-\beta)X=e^{-i\beta}ZJ(\beta); the scalar is a global phase on that measured branch. Thus the prior X-frame bit flips the next angle sign, and the new outcome adds a known X-frame bit. For the two-input CZ gadget, take vertices 1,2 as inputs and 3,4 as outputs, with edges \(\{1,2\},\{1,3\},\{2,4\}\). Prepare \(CZ_{12}CZ_{13}CZ_{24}(|\psi\rangle_{12}|+\rangle_3|+\rangle_4)\), then measure vertices 1 and 2 in the \(J(0)=H\) basis with outcomes \(b_1,b_2\). Direct expansion gives output \((X^{b_1}H\otimes X^{b_2}H)CZ|\psi\rangle\) on vertices 3,4.

For circuit-to-pattern equivalence, take an n-wire, depth-d circuit over J(\alpha) and CZ. Lay out n(d+1) vertices in columns, use the first column as the arbitrary input set and the last as outputs, connect consecutive vertices along each wire, and add an edge for each circuit CZ. This is an open graph pattern: non-input vertices start in |+>, and all graph-edge CZ gates are applied before the adaptive measurements. Apply the one-bit rule at each consumed column. Maintain a phase-aware Pauli frame; adapt the next measurement angle when an X-frame bit anticommutes through \(J(\alpha)\), and reinterpret/correct final Pauli-basis readout. Induction on circuit layers shows every allowed transcript implements the same target circuit branch with a known Pauli frame. Conversely, any finite open-graph pattern is the circuit that preserves its arbitrary input, adjoins |+> ancillas on non-input vertices, applies one CZ per graph edge, executes the same single-qubit projective measurements with transcript-conditioned classical control, and applies the specified terminal corrections. State the exact equivalence target (same transcript probabilities and corrected output state/channel) and prove it branch-by-branch. The arbitrary-angle J family gives exact one-qubit Euler rotations. For arbitrary n-qubit unitary circuits, combine QC11 exact synthesis into one-qubit gates and CNOT with CNOT=(I⊗H)CZ(I⊗H), then apply the circuit-to-pattern translation. Keep this as finite circuit/pattern semantics and avoid physical claims about cluster preparation.

## Root supplier audit and dependency proposals

Suitable published root suppliers are:

- `thm-z-mod-p-is-a-field` at \(p=2\), with `def-finite-field-and-its-order`, for the concrete binary field \(\mathbb F_2\cong\mathbb Z/2\mathbb Z\). `def-prime-subfield` and `thm-prime-subfield-classification` are optional if a page generalizes to prime subfields of arbitrary characteristic; prime-power finite-field classification, extension uniqueness, and cyclotomic extensions are not needed for the n-qubit binary algebra.
- `def-vector-space`, `def-linear-basis`, `def-dimension`, and `def-linear-map` for the finite vector spaces and induced symplectic map. Use `def-bilinear-symmetric-skew-and-alternating-forms` and `thm-alternating-forms-have-a-symplectic-normal-form` when stating the form language; its proof explicitly remains valid in characteristic 2. The particular form \(\omega\) can be checked nondegenerate by coordinates.
- `def-finite-simple-graph` for the graph object. `def-matrices-over-a-commutative-ring` is generic enough for a matrix over \(\mathbb F_2\), but root `def-adjacency-matrix-of-a-finite-simple-graph` is explicitly over \(\mathbb R\), so QC22 needs the reserved local `def-qc-binary-adjacency-matrix`.
- QC01–06's planned local interfaces should supply complex matrices/tensor products, state/projector/trace semantics, Pauli one-qubit identities, controlled-phase semantics, and measurement branches. QC16 consumes exact circuit/measurement branch semantics; QC22 consumes those interfaces and finite graph definitions.

Do not import root `def-symplectic-vector-space`: its underlying field is explicitly \(\mathbb R\). The root contains no QC Pauli group, Clifford group, stabilizer state/tableau, Gottesman–Knill, graph-state, or MBQC supplier. `def-clifford-obstruction-class` and `def-row-and-column-stabilizers-of-a-tableau` are unrelated name collisions. Physics-namespace matrix/spin and instrument results were inspected only as mathematical context; none is an allowed logical supplier, and no physics dependency edge is proposed.

The current QC15 proposal lists several field/cyclotomic/character/CRT prerequisites. This audit finds them unnecessary for the stated Pauli/symplectic algebra: the phase set is the explicit complex scalars +1, −1, +i, and −i plus a mod-4 bookkeeping index, while binary labels use only the concrete field F₂. Keep the exact F2 and alternating-form suppliers above and trim unrelated finite-field, character, and CRT prerequisites unless another theorem on that page actually uses them.

Suggested local item inventory (draft names only; the integrator owns the proposed registry):

- QC15: `def-qc-phase-aware-n-qubit-pauli-group`; `def-qc-binary-pauli-label-and-quotient`; `def-qc-binary-symplectic-form`; `def-qc-clifford-normalizer`; `thm-qc-clifford-induces-symplectic-map`; and, only if the page needs surjectivity, `thm-qc-clifford-symplectic-surjectivity` with the synthesis proof above.
- QC16: `def-qc-stabilizer-subgroup`; `def-qc-stabilizer-state`; `lem-qc-stabilizer-average-projector`; `thm-qc-stabilizer-projector-rank-and-code-dimension`; `def-qc-stabilizer-tableau`; and `thm-qc-gottesman-knill-exact-simulation` with explicit deterministic, random, and impossible measurement branches.
- QC22: the reserved `def-qc-binary-adjacency-matrix`; `def-qc-graph-state`; `lem-qc-graph-state-stabilizer-generators`; `thm-qc-graph-state-unique-stabilizer-ray`; `def-qc-adaptive-measurement-pattern`; and `thm-qc-circuit-measurement-pattern-equivalence`.

Useful worked checks for QC15-B/QC16-B/QC22-B are measuring $Z$ on $|0\rangle$ (probabilities $1,0$, with the second branch impossible), measuring $X$ on $|0\rangle$ (probabilities $1/2,1/2$), the empty graph ($|+\rangle$ with generator $X$), and the one-edge graph ($CZ|++\rangle$ with generators $X\otimes Z$ and $Z\otimes X$). For QC15, check $XZ=-ZX$ while the quotient labels are symplectically nonorthogonal, and check that dropping the phase bit identifies $Z$ and $-Z$ even though their deterministic measurement outcomes differ. These examples exercise the exact boundary the theorems need to preserve.

## Structured machine fragment for extraction

The embedded fragment is the authoritative 40-item proposal inventory: 12 QC15 items, 14 QC16 items, and 14 QC22 items. Each row carries a local statement, exact item-ID dependencies, a nonempty proof obligation, and source URLs with matching locators. Shared QC dependency IDs are the stable stems supplied by the adjacent researcher reports; proposed item IDs remain drafts for the integrator.

Checker-shaped draft fragment; empty `justified_by` arrays mean no item has been accepted as a root supplier yet.

    [
        {
            "id": "def-qc-phase-aware-n-qubit-pauli-group",
            "kind": "definition",
            "page": "pauli-and-clifford-groups-binary-symplectic-tableaux",
            "deps": [
                "thm-z-mod-p-is-a-field",
                "def-finite-field-and-its-order",
                "def-vector-space",
                "def-qc-pauli-matrices",
                "def-qc-ordered-bitstring-encoding",
                "def-qc-tensor-register-and-permutation"
            ],
            "justified_by": [],
            "statement_or_definition": "P(k,x,z)=iᵏXˣZᶻ for k∈ℤ/4 and x,z∈F₂ⁿ, with explicitly ordered tensor factors and scalar center.",
            "proof_obligations": [
                "define multiplication and identity conventions before using the group name."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.1 p.185"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein §2.2.4 PDF p.22."
                }
            ],
            "title": "Phase aware n qubit pauli group"
        },
        {
            "id": "thm-qc-pauli-product-and-adjoint",
            "kind": "theorem",
            "page": "pauli-and-clifford-groups-binary-symplectic-tableaux",
            "deps": [
                "def-qc-phase-aware-n-qubit-pauli-group",
                "def-vector-space",
                "def-qc-tensor-register-and-permutation"
            ],
            "justified_by": [],
            "statement_or_definition": "P(k,x,z)P(k′,x′,z′)=P(k+k′+2⟨z,x′⟩,x+x′,z+z′) and derive inverse/adjoint; interpret the F₂ parity ⟨z,x′⟩ as 0 or 1 before multiplying by 2 in Z/4.",
            "proof_obligations": [
                "commute Zᶻ past Xˣ′ and track the scalar i power, including the integer representative of the parity bit."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.1 p.185"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0406196",
                    "locator": "Aaronson–Gottesman PDF pp.2–4."
                }
            ],
            "title": "Pauli product and adjoint"
        },
        {
            "id": "thm-qc-hermitian-pauli-phase-criterion",
            "kind": "theorem",
            "page": "pauli-and-clifford-groups-binary-symplectic-tableaux",
            "deps": [
                "def-qc-phase-aware-n-qubit-pauli-group",
                "thm-qc-pauli-product-and-adjoint",
                "def-qc-pauli-matrices"
            ],
            "justified_by": [],
            "statement_or_definition": "P(k,x,z) is Hermitian iff k≡x·z mod 2; Hermitian Paulis square to I.",
            "proof_obligations": [
                "compute the adjoint under the fixed Xᶻ ordering."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.1 p.185"
                },
                {
                    "url": "https://jhwatrous.github.io/UQIC.pdf",
                    "locator": "Watrous UQIC Lesson 14 PDF pp.407–410."
                }
            ],
            "title": "Hermitian pauli phase criterion"
        },
        {
            "id": "def-qc-binary-pauli-label-and-quotient",
            "kind": "definition",
            "page": "pauli-and-clifford-groups-binary-symplectic-tableaux",
            "deps": [
                "def-qc-phase-aware-n-qubit-pauli-group",
                "thm-qc-pauli-product-and-adjoint",
                "thm-z-mod-p-is-a-field",
                "def-finite-field-and-its-order",
                "def-vector-space",
                "def-linear-basis",
                "def-dimension"
            ],
            "justified_by": [],
            "statement_or_definition": "quotient the full Pauli group by scalar center, sending P(k,x,z) to (x,z)∈F₂²ⁿ; quotient multiplication is vector addition.",
            "proof_obligations": [
                "show the map is well-defined, onto, a homomorphism, and has exactly the scalar center as kernel."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein §2.2.4 PDF pp.22–23."
                }
            ],
            "title": "Binary pauli label and quotient"
        },
        {
            "id": "def-qc-binary-symplectic-form",
            "kind": "definition",
            "page": "pauli-and-clifford-groups-binary-symplectic-tableaux",
            "deps": [
                "def-qc-binary-pauli-label-and-quotient",
                "def-vector-space",
                "def-bilinear-symmetric-skew-and-alternating-forms"
            ],
            "justified_by": [],
            "statement_or_definition": "define ω((x,z),(x′,z′))=x·z′+z·x′ over F₂.",
            "proof_obligations": [
                "check bilinearity and alternation in characteristic two; prove nondegeneracy by testing coordinate vectors. Optional supplier: thm-alternating-forms-have-a-symplectic-normal-form."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein §2.2.4 PDF pp.23–24."
                }
            ],
            "title": "Binary symplectic form"
        },
        {
            "id": "thm-qc-pauli-commutator-is-symplectic-pairing",
            "kind": "theorem",
            "page": "pauli-and-clifford-groups-binary-symplectic-tableaux",
            "deps": [
                "thm-qc-pauli-product-and-adjoint",
                "def-qc-binary-symplectic-form"
            ],
            "justified_by": [],
            "statement_or_definition": "P(a)P(b)=(-1)^ω(a,b)P(b)P(a), hence commutation iff ω(a,b)=0.",
            "proof_obligations": [
                "compare the two exact phase-aware products; binary labels alone do not prove signed group identities."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein §2.2.4 PDF pp.23–24"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0406196",
                    "locator": "Aaronson–Gottesman pp.3–5."
                }
            ],
            "title": "Pauli commutator is symplectic pairing"
        },
        {
            "id": "def-qc-clifford-normalizer",
            "kind": "definition",
            "page": "pauli-and-clifford-groups-binary-symplectic-tableaux",
            "deps": [
                "def-qc-phase-aware-n-qubit-pauli-group",
                "def-adjoint-of-a-linear-map-between-inner-product-spaces",
                "def-linear-isometry-and-orthogonal-or-unitary-operator"
            ],
            "justified_by": [],
            "statement_or_definition": "define Cₙ as the unitary normalizer of the full phase-aware Pauli group and state whether unitaries are taken modulo global phase.",
            "proof_obligations": [
                "verify closure under products/inverses and distinguish global scalar phase from Pauli center."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.2 PDF pp.186–187"
                },
                {
                    "url": "https://jhwatrous.github.io/UQIC.pdf",
                    "locator": "UQIC Lesson 14 PDF pp.423–426."
                }
            ],
            "title": "Clifford normalizer"
        },
        {
            "id": "thm-qc-clifford-induces-symplectic-map",
            "kind": "theorem",
            "page": "pauli-and-clifford-groups-binary-symplectic-tableaux",
            "deps": [
                "def-qc-binary-pauli-label-and-quotient",
                "def-qc-binary-symplectic-form",
                "thm-qc-pauli-commutator-is-symplectic-pairing",
                "def-qc-clifford-normalizer",
                "def-linear-map"
            ],
            "justified_by": [],
            "statement_or_definition": "conjugation descends to an invertible F₂-linear map of labels preserving ω.",
            "proof_obligations": [
                "conjugation preserves products, and the commutator identity forces preservation of ω."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein §2.2.4 PDF pp.24–25"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0406196",
                    "locator": "Aaronson–Gottesman pp.3–6."
                }
            ],
            "title": "Clifford induces symplectic map"
        },
        {
            "id": "lem-qc-hadamard-pauli-action",
            "kind": "lemma",
            "page": "pauli-and-clifford-groups-binary-symplectic-tableaux",
            "deps": [
                "def-qc-pauli-matrices",
                "def-qc-one-qubit-gate-alphabet-and-rotations"
            ],
            "justified_by": [],
            "statement_or_definition": "H X H=Z and H Z H=X, including the induced binary coordinate swap and all Y signs.",
            "proof_obligations": [
                "explicit matrix/conjugation computation."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.2 PDF p.186"
                },
                {
                    "url": "https://jhwatrous.github.io/UQIC.pdf",
                    "locator": "UQIC Lesson 14 PDF pp.426–428."
                }
            ],
            "title": "Hadamard pauli action"
        },
        {
            "id": "lem-qc-phase-gate-pauli-action",
            "kind": "lemma",
            "page": "pauli-and-clifford-groups-binary-symplectic-tableaux",
            "deps": [
                "def-qc-pauli-matrices",
                "def-qc-one-qubit-gate-alphabet-and-rotations"
            ],
            "justified_by": [],
            "statement_or_definition": "S X S†=Y and S Z S†=Z, including the binary shear and phase bit.",
            "proof_obligations": [
                "explicit matrix calculation consistent with item 3’s phase convention."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.2 PDF p.186 and Exercise 3 p.193"
                },
                {
                    "url": "https://jhwatrous.github.io/UQIC.pdf",
                    "locator": "UQIC Lesson 14 PDF pp.426–429."
                }
            ],
            "title": "Phase gate pauli action"
        },
        {
            "id": "lem-qc-cnot-pauli-action",
            "kind": "lemma",
            "page": "pauli-and-clifford-groups-binary-symplectic-tableaux",
            "deps": [
                "def-qc-pauli-matrices",
                "def-qc-phase-aware-n-qubit-pauli-group",
                "thm-qc-pauli-product-and-adjoint",
                "def-qc-controlled-unitary-access"
            ],
            "justified_by": [],
            "statement_or_definition": "for CNOT c→t, Xc→XcXt, Zc→Zc, Xt→Xt, Zt→ZcZt, with phase-aware images for products involving Y.",
            "proof_obligations": [
                "calculate images on the four generators and extend using item 3."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.2 PDF pp.186–187"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein §2.2.3 p.22"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0406196",
                    "locator": "Aaronson–Gottesman pp.5–8."
                }
            ],
            "title": "Cnot pauli action"
        },
        {
            "id": "def-qc-stabilizer-subgroup",
            "kind": "definition",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "def-subgroup",
                "def-dimension",
                "def-qc-phase-aware-n-qubit-pauli-group",
                "thm-qc-hermitian-pauli-phase-criterion",
                "def-qc-binary-pauli-label-and-quotient",
                "def-qc-binary-symplectic-form",
                "thm-qc-pauli-commutator-is-symplectic-pairing"
            ],
            "justified_by": [],
            "statement_or_definition": "an abelian subgroup of Hermitian n-qubit Paulis excluding −I, with rank defined as dimension of its binary label span.",
            "proof_obligations": [
                "show the span is isotropic and rank is independent of generating set."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.1 pp.185–186"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein §2.2.1 PDF pp.16–17."
                }
            ],
            "title": "Stabilizer subgroup"
        },
        {
            "id": "def-qc-stabilizer-state",
            "kind": "definition",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "def-qc-stabilizer-subgroup",
                "def-qc-pure-state-and-ray"
            ],
            "justified_by": [],
            "statement_or_definition": "a pure stabilizer state is the unique ray fixed by a rank-n stabilizer.",
            "proof_obligations": [
                "establish the common fixed space is nonzero and one-dimensional."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.1 p.185"
                },
                {
                    "url": "https://jhwatrous.github.io/UQIC.pdf",
                    "locator": "UQIC Lesson 14 PDF pp.407–414."
                }
            ],
            "title": "Stabilizer state"
        },
        {
            "id": "lem-qc-stabilizer-average-projector",
            "kind": "lemma",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "def-qc-stabilizer-subgroup",
                "def-qc-dirac-notation-conversion",
                "def-matrix-product-and-identity-matrix",
                "def-adjoint-of-a-linear-map-between-inner-product-spaces"
            ],
            "justified_by": [],
            "statement_or_definition": "ΠS=|S|⁻¹Σg∈Sg is self-adjoint and idempotent.",
            "proof_obligations": [
                "use group closure and Hermiticity, not simultaneous diagonalization by assertion."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein Proposition 3 PDF p.16"
                },
                {
                    "url": "https://jhwatrous.github.io/UQIC.pdf",
                    "locator": "UQIC Lesson 14 PDF pp.413–416."
                }
            ],
            "title": "Stabilizer average projector"
        },
        {
            "id": "thm-qc-stabilizer-projector-rank-and-code-dimension",
            "kind": "theorem",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "def-qc-stabilizer-subgroup",
                "lem-qc-stabilizer-average-projector",
                "def-qc-pauli-matrices",
                "def-qc-tensor-register-and-permutation",
                "def-trace-of-a-square-matrix",
                "def-trace-of-an-endomorphism",
                "lem-trace-of-an-idempotent-is-the-dimension-of-its-image"
            ],
            "justified_by": [],
            "statement_or_definition": "Tr ΠS=2ⁿ/|S|=2ⁿ⁻ʳ, so a rank-n stabilizer gives rank-one projector and rank-r gives dimension 2ⁿ⁻ʳ.",
            "proof_obligations": [
                "nonidentity tensor Paulis are traceless; trace of an orthogonal projector equals its rank."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein Proposition 3 PDF p.16"
                },
                {
                    "url": "https://jhwatrous.github.io/UQIC.pdf",
                    "locator": "UQIC Lesson 14 PDF pp.413–419."
                }
            ],
            "title": "Stabilizer projector rank and code dimension"
        },
        {
            "id": "def-qc-pauli-measurement-branch-semantics",
            "kind": "definition",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "def-qc-projective-measurement",
                "def-qc-povm-and-outcome-law",
                "def-qc-instrument-and-conditional-state",
                "def-qc-density-operator",
                "def-qc-phase-aware-n-qubit-pauli-group",
                "def-qc-pauli-matrices"
            ],
            "justified_by": [],
            "statement_or_definition": "P_b=(I+(-1)^bM)/2, p_b=Tr(P_bρ), and ρ_b=P_bρP_b/p_b only when p_b>0.",
            "proof_obligations": [
                "complementary orthogonal projectors and total probability one."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §§20.2–20.3 PDF pp.186–188"
                },
                {
                    "url": "https://cs.uwaterloo.ca/~watrous/TQI-notes/TQI-notes.pdf",
                    "locator": "Watrous course lecture 3 §3.3, printed p.34/PDF p.37 for partial-measurement conventions."
                }
            ],
            "title": "Pauli measurement branch semantics"
        },
        {
            "id": "lem-qc-zero-probability-branch",
            "kind": "lemma",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "def-qc-pauli-measurement-branch-semantics",
                "def-qc-density-operator",
                "def-qc-dirac-notation-conversion",
                "def-trace-of-a-square-matrix",
                "thm-non-negative-operator-characterisations"
            ],
            "justified_by": [],
            "statement_or_definition": "if p_b=0, the outcome is impossible and there is no normalized conditional state.",
            "proof_obligations": [
                "derive P_bρP_b=0 from positivity and zero trace."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.3 PDF pp.187–188 implies the complement of a deterministic outcome has probability zero"
                }
            ],
            "title": "Zero probability branch"
        },
        {
            "id": "lem-qc-deterministic-stabilizer-measurement",
            "kind": "lemma",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "thm-qc-pauli-commutator-is-symplectic-pairing",
                "thm-qc-pauli-product-and-adjoint",
                "def-qc-stabilizer-subgroup",
                "def-qc-stabilizer-state",
                "thm-qc-stabilizer-projector-rank-and-code-dimension",
                "def-qc-pauli-measurement-branch-semantics"
            ],
            "justified_by": [],
            "statement_or_definition": "for rank-n S, if M commutes with all generators then its label lies in L⊥=L, so M=±g for g∈S and exactly one outcome has probability one.",
            "proof_obligations": [
                "phase-aware membership; binary label equality alone does not determine the outcome sign."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.3 PDF p.188"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein §2.2.1 p.17."
                }
            ],
            "title": "Deterministic stabilizer measurement"
        },
        {
            "id": "lem-qc-anticommuting-stabilizer-measurement-is-fair",
            "kind": "lemma",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "def-qc-pauli-measurement-branch-semantics",
                "def-qc-stabilizer-subgroup",
                "def-qc-stabilizer-state",
                "thm-qc-pauli-commutator-is-symplectic-pairing"
            ],
            "justified_by": [],
            "statement_or_definition": "if M anticommutes with a stabilizer generator then Tr(Mρ)=0 and both outcomes have probability 1/2.",
            "proof_obligations": [
                "conjugate M by the +1 stabilizer or use trace cyclicity."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.3 PDF p.188"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0406196",
                    "locator": "Aaronson–Gottesman measurement algorithm."
                }
            ],
            "title": "Anticommuting stabilizer measurement is fair"
        },
        {
            "id": "lem-qc-random-measurement-stabilizer-update",
            "kind": "lemma",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "def-qc-pauli-measurement-branch-semantics",
                "lem-qc-zero-probability-branch",
                "lem-qc-deterministic-stabilizer-measurement",
                "lem-qc-anticommuting-stabilizer-measurement-is-fair",
                "thm-qc-pauli-product-and-adjoint"
            ],
            "justified_by": [],
            "statement_or_definition": "for an allowed outcome b, replace one anticommuting pivot g₁ by (−1)^bM after multiplying other anticommuting rows by g₁.",
            "proof_obligations": [
                "show updated rows commute, stay independent, exclude −I, and stabilize P_b|ψ⟩."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.3 PDF p.188"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0406196",
                    "locator": "Aaronson–Gottesman full paper."
                }
            ],
            "title": "Random measurement stabilizer update"
        },
        {
            "id": "def-qc-stabilizer-tableau",
            "kind": "definition",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "def-qc-binary-pauli-label-and-quotient",
                "def-qc-binary-symplectic-form",
                "thm-qc-pauli-commutator-is-symplectic-pairing",
                "def-qc-clifford-normalizer",
                "thm-qc-clifford-induces-symplectic-map",
                "def-qc-stabilizer-subgroup",
                "def-qc-stabilizer-state"
            ],
            "justified_by": [],
            "statement_or_definition": "each row stores a Hermitian Pauli’s binary label and phase bit; extended form includes destabilizer rows dᵢ and stabilizer rows sⱼ with ω(dᵢ,sⱼ)=δᵢⱼ and zero pairings within each family.",
            "proof_obligations": [
                "initial tableau represents its declared state and satisfies the dual-pairing invariant."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0406196",
                    "locator": "Aaronson–Gottesman full paper"
                },
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.3 p.187."
                }
            ],
            "title": "Stabilizer tableau"
        },
        {
            "id": "lem-qc-tableau-clifford-update",
            "kind": "lemma",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "def-qc-stabilizer-tableau",
                "lem-qc-hadamard-pauli-action",
                "lem-qc-phase-gate-pauli-action",
                "lem-qc-cnot-pauli-action"
            ],
            "justified_by": [],
            "statement_or_definition": "H/S/CNOT row updates are conjugation by the gate and preserve the tableau invariant.",
            "proof_obligations": [
                "include phase bits and verify row pairings."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0406196",
                    "locator": "Aaronson–Gottesman full paper"
                },
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.2 p.186."
                }
            ],
            "title": "Tableau clifford update"
        },
        {
            "id": "lem-qc-tableau-deterministic-sign",
            "kind": "lemma",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "def-qc-stabilizer-tableau",
                "lem-qc-deterministic-stabilizer-measurement",
                "thm-qc-pauli-product-and-adjoint"
            ],
            "justified_by": [],
            "statement_or_definition": "calculate deterministic outcome from the signed product of stabilizer rows whose binary labels yield the measured label.",
            "proof_obligations": [
                "row reduction must return the exact ± sign and may not infer it from binary labels."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0406196",
                    "locator": "Aaronson–Gottesman measurement algorithm"
                },
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.3 p.188."
                }
            ],
            "title": "Tableau deterministic sign"
        },
        {
            "id": "thm-qc-tableau-measurement-update",
            "kind": "theorem",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "def-qc-pauli-measurement-branch-semantics",
                "lem-qc-zero-probability-branch",
                "lem-qc-deterministic-stabilizer-measurement",
                "lem-qc-anticommuting-stabilizer-measurement-is-fair",
                "lem-qc-random-measurement-stabilizer-update",
                "def-qc-stabilizer-tableau",
                "lem-qc-tableau-clifford-update",
                "lem-qc-tableau-deterministic-sign"
            ],
            "justified_by": [],
            "statement_or_definition": "deterministic, random-pivot, and impossible branches of the tableau measurement algorithm agree with the projective measurement instrument.",
            "proof_obligations": [
                "use zero-branch semantics plus the maximal pure-stabilizer cases and preserve the phase-aware tableau invariant."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.3 PDF pp.187–188"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0406196",
                    "locator": "Aaronson–Gottesman full paper."
                }
            ],
            "title": "Tableau measurement update"
        },
        {
            "id": "thm-qc-gottesman-knill-exact-simulation",
            "kind": "theorem",
            "page": "stabilizer-circuits-and-gottesman-knill-simulation",
            "deps": [
                "def-qc-stabilizer-tableau",
                "lem-qc-tableau-clifford-update",
                "lem-qc-tableau-deterministic-sign",
                "thm-qc-tableau-measurement-update",
                "def-qc-register-and-computational-basis",
                "def-qc-ordered-bitstring-encoding",
                "def-qc-circuit-syntax-and-register-order",
                "def-qc-circuit-denotational-semantics",
                "def-qc-classical-control-and-measurement-circuit",
                "def-qc-elementary-circuit-resources"
            ],
            "justified_by": [],
            "statement_or_definition": "a polynomial-size adaptive basis-input circuit of Clifford gates and Pauli measurements can be sampled exactly by a classical phase-aware tableau simulator, returning transcript and final tableau distribution.",
            "proof_obligations": [
                "induct over instructions and state a data-structure-specific polynomial bound; do not claim explicit enumeration of the output distribution."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf Theorem 6 and proof, PDF pp.187–188"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0406196",
                    "locator": "Aaronson–Gottesman full paper."
                }
            ],
            "title": "Gottesman knill exact simulation"
        },
        {
            "id": "def-qc-binary-adjacency-matrix",
            "kind": "definition",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "def-finite-simple-graph",
                "thm-z-mod-p-is-a-field",
                "def-finite-field-and-its-order",
                "def-vector-space",
                "def-matrices-over-a-commutative-ring",
                "def-qc-ordered-bitstring-encoding"
            ],
            "justified_by": [],
            "statement_or_definition": "for an ordered finite simple graph, A₂(G) over F₂ is symmetric, zero-diagonal, with edge-indicator entries.",
            "proof_obligations": [
                "define vertex-order dependence and arithmetic mod 2; do not depend on the real-valued root adjacency matrix."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0301052",
                    "locator": "RBB 2003 p.4"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein §2.2.4 p.23."
                }
            ],
            "title": "Binary adjacency matrix"
        },
        {
            "id": "def-qc-graph-state",
            "kind": "definition",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "def-qc-register-and-computational-basis",
                "def-qc-ordered-bitstring-encoding",
                "def-qc-tensor-register-and-permutation",
                "def-qc-one-qubit-gate-alphabet-and-rotations",
                "def-qc-controlled-phase-rotation"
            ],
            "justified_by": [],
            "statement_or_definition": "|G⟩=∏uv∈E CZᵤᵥ |+⟩⊗V.",
            "proof_obligations": [
                "establish incident edge gates commute, so the finite product is order-independent."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein Definition Graph states I, p.14"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0301052",
                    "locator": "RBB 2003 pp.3–5."
                }
            ],
            "title": "Graph state"
        },
        {
            "id": "lem-qc-graph-state-amplitude-formula",
            "kind": "lemma",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "def-qc-graph-state",
                "def-qc-ordered-bitstring-encoding",
                "def-qc-tensor-register-and-permutation"
            ],
            "justified_by": [],
            "statement_or_definition": "|G⟩=2^(-|V|/2) Σx∈F₂ⱽ (−1)^{Σedge xᵤxᵥ}|x⟩.",
            "proof_obligations": [
                "multiply edge phases and retain normalization."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "direct calculation from Hein Definition 1, p.14."
                }
            ],
            "title": "Graph state amplitude formula"
        },
        {
            "id": "lem-qc-graph-state-stabilizer-generators",
            "kind": "lemma",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "def-qc-graph-state",
                "def-qc-pauli-matrices",
                "def-qc-phase-aware-n-qubit-pauli-group",
                "thm-qc-pauli-commutator-is-symplectic-pairing"
            ],
            "justified_by": [],
            "statement_or_definition": "Kᵥ=Xᵥ∏ᵤ∈N(v)Zᵤ stabilizes |G⟩; generators commute and are binary-independent.",
            "proof_obligations": [
                "conjugate Xᵥ through incident CZ gates; adjacent generators have two local anticommutations; Kᵥ has a unique X at v."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein Proposition 2 and proof, p.15"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0301052",
                    "locator": "RBB 2003 pp.3–5."
                }
            ],
            "title": "Graph state stabilizer generators"
        },
        {
            "id": "thm-qc-graph-state-unique-stabilizer-ray",
            "kind": "theorem",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "def-qc-graph-state",
                "lem-qc-graph-state-stabilizer-generators",
                "thm-qc-stabilizer-projector-rank-and-code-dimension"
            ],
            "justified_by": [],
            "statement_or_definition": "the graph generators form rank |V| and determine |G⟩ as their unique joint +1 ray; projector is 2⁻|V|Σg∈Sg.",
            "proof_obligations": [
                "establish full rank and apply the rank-one projector result."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein Proposition 3 and projector, p.16."
                }
            ],
            "title": "Graph state unique stabilizer ray"
        },
        {
            "id": "def-qc-adaptive-measurement-pattern",
            "kind": "definition",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "def-qc-graph-state",
                "def-qc-projective-measurement",
                "def-qc-povm-and-outcome-law",
                "def-qc-instrument-and-conditional-state",
                "def-qc-circuit-syntax-and-register-order",
                "def-qc-circuit-denotational-semantics",
                "def-qc-classical-control-and-measurement-circuit",
                "def-qc-elementary-circuit-resources",
                "def-qc-tensor-register-and-permutation",
                "def-qc-pure-state-and-ray",
                "def-qc-controlled-phase-rotation",
                "def-qc-dirac-notation-conversion"
            ],
            "justified_by": [],
            "statement_or_definition": "Define an open-graph pattern (G,I,O) with ordered finite vertices, arbitrary input on I, |+⟩ ancillas on V\\I, one CZ per edge, ordered adaptive local projective measurements on V\\O, and branch maps K_b:H_I→H_O after retaining output wires.",
            "proof_obligations": [
                "define tensor and measurement order, the branch map including output-wire restriction, classical basis-selection functions, and terminal correction semantics."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.6 PDF pp.190–192"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0301052",
                    "locator": "RBB 2003 §§II D–F, pp.8–16."
                }
            ],
            "title": "Adaptive measurement pattern"
        },
        {
            "id": "thm-qc-pattern-branch-probabilities-and-zero-branches",
            "kind": "theorem",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "def-qc-adaptive-measurement-pattern",
                "def-qc-pure-state-and-ray",
                "def-qc-density-operator",
                "lem-qc-zero-probability-branch"
            ],
            "justified_by": [],
            "statement_or_definition": "For normalized |ψ⟩ on I, p_b=||K_b|ψ⟩||²; normalize the output only when p_b>0 and mark p_b=0 transcripts impossible.",
            "proof_obligations": [
                "derive each branch map from the ordered measurement instrument and show probabilities sum to one across all adaptive transcripts."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §§20.2–20.3 and §20.6"
                }
            ],
            "title": "Pattern branch probabilities and zero branches"
        },
        {
            "id": "lem-qc-one-bit-teleportation",
            "kind": "lemma",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "def-qc-tensor-register-and-permutation",
                "def-qc-pure-state-and-ray",
                "def-qc-one-qubit-gate-alphabet-and-rotations",
                "def-qc-pauli-matrices",
                "def-qc-controlled-phase-rotation",
                "def-qc-projective-measurement",
                "def-qc-povm-and-outcome-law",
                "def-qc-instrument-and-conditional-state"
            ],
            "justified_by": [],
            "statement_or_definition": "measuring the first qubit of CZ(|ψ⟩⊗|+⟩) in the J(α)⁻¹ computational basis produces normalized output XᵇJ(α)|ψ⟩ with probability 1/2 for each b.",
            "proof_obligations": [
                "expand amplitudes and check each branch norm."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.6 p.191"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0010033",
                    "locator": "RBB 2001 pp.1–2"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0301052",
                    "locator": "RBB 2003 pp.5–6."
                }
            ],
            "title": "One bit teleportation"
        },
        {
            "id": "lem-qc-adaptive-angle-pauli-frame-update",
            "kind": "lemma",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "lem-qc-one-bit-teleportation",
                "lem-qc-hadamard-pauli-action",
                "lem-qc-phase-gate-pauli-action",
                "def-qc-one-qubit-gate-alphabet-and-rotations"
            ],
            "justified_by": [],
            "statement_or_definition": "J(−β)X=e^(−iβ)ZJ(β); the scalar is global on that measured branch, so the prior X-frame bit flips the next measurement angle and the new outcome updates the Pauli frame.",
            "proof_obligations": [
                "multiply the displayed matrices in the fixed J convention, track the global scalar, and verify the Pauli-frame bit update."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.6 p.191"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0301052",
                    "locator": "RBB 2003 §§II B and II E, pp.5–7, 11–13."
                }
            ],
            "title": "Adaptive angle pauli frame update"
        },
        {
            "id": "lem-qc-measurement-pattern-for-cz",
            "kind": "lemma",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "def-qc-adaptive-measurement-pattern",
                "thm-qc-pattern-branch-probabilities-and-zero-branches",
                "lem-qc-one-bit-teleportation",
                "lem-qc-adaptive-angle-pauli-frame-update",
                "def-qc-controlled-phase-rotation"
            ],
            "justified_by": [],
            "statement_or_definition": "For the open-graph gadget with inputs 1,2, outputs 3,4, and edges {1,2},{1,3},{2,4}, prepare CZ12 CZ13 CZ24(|ψ⟩12|+⟩3|+⟩4), measure 1,2 in the J(0)=H basis with outcomes b1,b2, and obtain (X^b1 H⊗X^b2 H)CZ|ψ⟩ on outputs 3,4.",
            "proof_obligations": [
                "expand all four outcome branches with the declared wire order; verify each branch has probability 1/4 and its output equals the displayed corrected CZ branch."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.6 p.192"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0301052",
                    "locator": "RBB 2003 CNOT correlation proof pp.20–21."
                }
            ],
            "title": "Measurement pattern for cz"
        },
        {
            "id": "def-qc-circuit-to-graph-resource-encoding",
            "kind": "definition",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "def-qc-binary-adjacency-matrix",
                "def-qc-graph-state",
                "def-qc-circuit-syntax-and-register-order",
                "def-qc-circuit-denotational-semantics",
                "def-qc-elementary-circuit-resources",
                "def-qc-one-qubit-gate-alphabet-and-rotations",
                "def-qc-controlled-phase-rotation",
                "def-qc-adaptive-measurement-pattern"
            ],
            "justified_by": [],
            "statement_or_definition": "Encode an n-wire depth-d circuit over J(α), CZ as an open graph on n(d+1) vertices: first column is the input set, last is the output set, horizontal edges join consecutive wire positions, and vertical edges encode each CZ.",
            "proof_obligations": [
                "specify schedule and show no duplicated edges."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.6 pp.190–192"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0301052",
                    "locator": "RBB 2003 §§II D and II F, pp.8–16."
                }
            ],
            "title": "Circuit to graph resource encoding"
        },
        {
            "id": "thm-qc-circuit-simulated-by-adaptive-pattern",
            "kind": "theorem",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "def-qc-adaptive-measurement-pattern",
                "thm-qc-pattern-branch-probabilities-and-zero-branches",
                "lem-qc-one-bit-teleportation",
                "lem-qc-adaptive-angle-pauli-frame-update",
                "lem-qc-measurement-pattern-for-cz",
                "def-qc-circuit-to-graph-resource-encoding",
                "def-qc-classical-control-and-measurement-circuit"
            ],
            "justified_by": [],
            "statement_or_definition": "The adaptive measurements on def-qc-circuit-to-graph-resource-encoding’s open graph reproduce the circuit transcript probabilities and implement each branch on the arbitrary input with the stated Pauli frame.",
            "proof_obligations": [
                "induction over layers using teleportation/CZ lemmas, adaptive bases, and final readout reinterpretation."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.6 pp.190–192"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0301052",
                    "locator": "RBB 2003 §§II D–G, pp.8–20."
                }
            ],
            "title": "Circuit simulated by adaptive pattern"
        },
        {
            "id": "thm-qc-pattern-is-measurement-circuit",
            "kind": "theorem",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "def-qc-adaptive-measurement-pattern",
                "def-qc-circuit-syntax-and-register-order",
                "def-qc-circuit-denotational-semantics",
                "def-qc-classical-control-and-measurement-circuit",
                "def-qc-elementary-circuit-resources"
            ],
            "justified_by": [],
            "statement_or_definition": "Every finite open-graph adaptive pattern is a circuit that preserves its arbitrary input, adjoins |+⟩ ancillas on non-input vertices, applies one CZ per graph edge, performs the same ordered projective measurements and transcript-controlled corrections, and has the same branch maps.",
            "proof_obligations": [
                "preserve each branch operator and transcript probability."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0010033",
                    "locator": "RBB 2001 pp.3–4."
                }
            ],
            "title": "Pattern is measurement circuit"
        },
        {
            "id": "thm-qc-circuit-pattern-equivalence-and-universality",
            "kind": "theorem",
            "page": "graph-states-and-measurement-based-computation",
            "deps": [
                "lem-qc-one-bit-teleportation",
                "lem-qc-adaptive-angle-pauli-frame-update",
                "lem-qc-measurement-pattern-for-cz",
                "def-qc-circuit-to-graph-resource-encoding",
                "thm-qc-circuit-simulated-by-adaptive-pattern",
                "thm-qc-pattern-is-measurement-circuit",
                "def-qc-controlled-phase-rotation",
                "def-qc-one-qubit-gate-alphabet-and-rotations",
                "thm-qc-one-qubit-euler-decomposition",
                "thm-qc-exact-arbitrary-unitary-qsd-upper-bound"
            ],
            "justified_by": [],
            "statement_or_definition": "Prove both branch-preserving circuit/open-pattern translations; then use QC11 exact synthesis into one-qubit gates and CNOT, with CNOT=(I⊗H)CZ(I⊗H), to show the patterns realize every finite n-qubit unitary circuit.",
            "proof_obligations": [
                "combine the branch-map inductions in both directions; cite the exact QC11 synthesis theorem, derive CNOT=(I⊗H)CZ(I⊗H), use the J(α) Euler decomposition, and track transcript probabilities and output corrections."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf §20.6 pp.190–192"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0010033",
                    "locator": "RBB 2001 pp.2–4"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0301052",
                    "locator": "RBB 2003 §§II F–G and conclusion."
                }
            ],
            "title": "Circuit pattern equivalence and universality"
        },
        {
            "id": "thm-qc-clifford-symplectic-surjectivity",
            "kind": "theorem",
            "page": "pauli-and-clifford-groups-binary-symplectic-tableaux",
            "deps": [
                "def-qc-binary-symplectic-form",
                "lem-qc-hadamard-pauli-action",
                "lem-qc-phase-gate-pauli-action",
                "lem-qc-cnot-pauli-action"
            ],
            "justified_by": [],
            "statement_or_definition": "every element of Sp(2n,2) is induced by a Clifford, if that stronger result is needed.",
            "proof_obligations": [
                "give terminating symplectic Gaussian elimination reducing every symplectic basis to the standard basis and reverse the H/S/CNOT/SWAP lift while tracking phase."
            ],
            "sources": [
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein §2.2.4 PDF pp.24–25"
                },
                {
                    "url": "https://arxiv.org/pdf/quant-ph/0602096",
                    "locator": "Hein p.24 asserts the converse"
                },
                {
                    "url": "https://arxiv.org/pdf/1907.09415",
                    "locator": "de Wolf Exercise 5 and solution hint at synthesis but do not prove it. Omit this item if QC15 claims only the forward symplectic action."
                }
            ],
            "title": "Optional Clifford symplectic surjectivity theorem"
        }
    ]


## Inherited-root-remark-repair-plan

This JSON is a scoped mandatory repair plan from the current edge and closure snapshots. It records one actionable direct repair and one unresolved closure occurrence for which the supplied direct-consumer artifact identifies no nonremark parent; the latter remains explicitly uncleared.

```json
{
  "plan_id": "Inherited-root-remark-repair-plan",
  "scope": "Only the two commissioned remarks, direct nonremark consumers listed for them in the scoped inherited-edge artifact, and their occurrence in the flat root prerequisite closure. Planning only; no root item edits, engine transitions, merged inventory edits, or proof certifications.",
  "input_artifacts": [
    {
      "path": "research/quantum-planning-review/inherited-remark-edges.json",
      "sha256": "fbc334175b78a160cc11a2ca2c99fa47d57157226719fd95e3145ba07972388e"
    },
    {
      "path": "research/quantum-planning-review/root-prerequisite-closure.json",
      "sha256": "d9ffb738cea0c948875734a5919e4ab8ddd124387a318545117d113f7216c199",
      "item_count": 1832,
      "unique_item_count": 1832
    }
  ],
  "repairs": [
    {
      "target_remark": "rem-metric-axiom-conventions",
      "target_path": "items/rem-metric-axiom-conventions.md",
      "target_raw_sha256": "4c038a2638d6d5c6d38e6ab900bb7f2d8bd3538a7c95f12580370f104f6bae4a",
      "present_in_root_prerequisite_closure": true,
      "closure_position_1_based": 725,
      "direct_nonremark_rootconsumer_count": 1,
      "mandatory_parent_repairs": [
        {
          "id": "def-norm-and-normed-space",
          "path": "items/def-norm-and-normed-space.md",
          "status": "published",
          "raw_sha256": "d3d37d53770707a09666a0b93c69c8d824017a6a0e771c1c7d0034d403b04ba3",
          "current_deps": [
            "def-vector-space",
            "def-function-space",
            "def-linear-map",
            "def-metric-space",
            "lem-metric-nonnegativity",
            "def-metric-topology",
            "lem-bounded-remetrisation",
            "rem-metric-axiom-conventions",
            "def-abs-value",
            "lem-of-abs-value",
            "lem-of-triangle-inequality",
            "def-complete-ordered-field",
            "lem-vector-space-elementary-consequences"
          ],
          "replacement_deps": [
            "def-vector-space",
            "def-function-space",
            "def-linear-map",
            "def-metric-space",
            "lem-metric-nonnegativity",
            "def-metric-topology",
            "lem-bounded-remetrisation",
            "def-abs-value",
            "lem-of-abs-value",
            "lem-of-triangle-inequality",
            "def-complete-ordered-field",
            "lem-vector-space-elementary-consequences"
          ],
          "edge_to_remove": "rem-metric-axiom-conventions",
          "body_context_moves": [
            {
              "body_lines": [
                56,
                59
              ],
              "current_context": "The real-valued norm codomain is described as the same convention that rem-metric-axiom-conventions records for metrics.",
              "replacement_text": "This is the same real-valued convention as [[def-metric-space]], which defines a metric d:X×X→R; no extended values occur in either definition.",
              "replacement_link": "def-metric-space"
            },
            {
              "body_lines": [
                121,
                127
              ],
              "current_context": "The seminorm weakening of norm separation is compared to the metric (M1)/pseudometric discussion in rem-metric-axiom-conventions.",
              "replacement_text": "The analogous metric weakening is the pseudometric (M1′) in [[def-metric-space]]: retain symmetry and triangle inequality but require only p(x,x)=0. Here dropping norm separation while retaining homogeneity and triangle gives a seminorm.",
              "replacement_link": "def-metric-space"
            }
          ],
          "verified_proof_and_definition_uses": [
            {
              "body_lines": [
                61,
                77
              ],
              "use": "Norm nonnegativity is proved locally from N(−v)=N(v), N(v+(−v))≤N(v)+N(−v), and ordered-field trichotomy. No metric remark supplies this proof."
            },
            {
              "body_lines": [
                79,
                100
              ],
              "use": "The induced metric d_N(u,v)=N(u−v) is checked against exactly M1–M3 from def-metric-space; metric open sets and other metric notions are accessed through def-metric-topology."
            },
            {
              "body_lines": [
                109,
                116
              ],
              "use": "The failure of metric-to-norm reconstruction uses the proved bounded remetrisation lemma and its same-topology property."
            }
          ],
          "retained_proved_suppliers_and_reason": [
            "def-metric-space: real-valued metric and pseudometric definitions, plus the three metric axioms used in the induced-metric proof.",
            "lem-metric-nonnegativity: cited in the comparison of the three-axiom metric convention; its statement/proof is independent of the remark.",
            "def-metric-topology: the induced metric supplies the normed-space open-set vocabulary.",
            "lem-bounded-remetrisation: the counterexample showing an arbitrary metric need not be norm-induced."
          ],
          "new_bridge_required": false,
          "consumer_review_obligations": [
            "Replace both direct remark mentions with the exact def-metric-space statements above; confirm no remaining body text relies on the remark’s naming-fork or extended-metric commentary.",
            "Recheck the local norm nonnegativity proof, induced metric M1–M3 verification, norm-topology statement, and bounded-remetrisation counterexample against the retained suppliers.",
            "Recompute the root prerequisite closure and scoped inherited-edge report; this parent edge must disappear, and no proof-acceptance status is implied by this plan."
          ]
        }
      ]
    },
    {
      "target_remark": "rem-euclidean-topology-dictionary",
      "target_path": "items/rem-euclidean-topology-dictionary.md",
      "target_raw_sha256": "a6c1c1398a2c1cc1833503fb06317e93adb944bb172b31768ef29e18a3d5eda5",
      "present_in_root_prerequisite_closure": true,
      "closure_position_1_based": 1659,
      "target_current_deps": [
        "lem-product-topology-on-rn",
        "lem-real-and-metric-notions-agree",
        "thm-all-norms-on-rn-are-equivalent"
      ],
      "direct_nonremark_rootconsumer_count": 0,
      "direct_nonremark_rootconsumer_carriers": [],
      "available_proved_replacement_suppliers": [
        {
          "id": "lem-product-topology-on-rn",
          "covers": "For n≥1, the product topology on R^n is the metric topology of d∞ and, by explicit metric comparisons, also of d1 and d2."
        },
        {
          "id": "thm-all-norms-on-rn-are-equivalent",
          "covers": "Every norm on R^n is equivalent to the Euclidean norm and therefore induces the same metric topology."
        },
        {
          "id": "lem-real-and-metric-notions-agree",
          "covers": "For n=1, the usual real-line and metric formulations of continuity, compactness, and related notions agree."
        }
      ],
      "new_bridge_required": false,
      "mandatory_closure_action": "The scoped edge artifact confirms zero direct nonremark carriers. Root assigns this nested-only occurrence to qc_r1’s planned replacement/reification of enclosing remark rem-complex-plane-euclidean-dictionary, whose raw hash is recorded above. That overlay removes the enclosing remark from logical-supplier use and drops its dep on rem-euclidean-topology-dictionary while retaining an expository cross-reference; two proposed theorem carriers with no remark dependencies carry the logical claims. This report edits no root carrier and does not claim the current flat closure is clean. The planned-overlay checker must confirm no remaining entry after the 18 parent corrections are applied.",
      "consumer_review_obligations": [
        "Confirm qc_r1’s overlay removes the enclosing remark dependency from the planned logical closure and keeps any remaining cross-reference expository only; do not invent a direct nonremark parent.",
        "Review the two exact proposed theorem contracts, dependencies, and proof routes above; neither may acquire remark dependencies. The Euclidean dictionary’s existing proved suppliers are the logical inputs for topology claims.",
        "Run the planned-overlay checker after all 18 parent corrections; this plan does not certify the current closure or mark the target cleared independently."
      ],
      "closure_resolution": "eliminated_from_planned_logical_closure_by_enclosing_remark_repair",
      "enclosing_remark_repair": {
        "id": "rem-complex-plane-euclidean-dictionary",
        "owner": "qc_r1",
        "planned_action": "In qc_r1’s planned overlay, remove rem-complex-plane-euclidean-dictionary as a logical supplier and remove its dependency on rem-euclidean-topology-dictionary; retain the cross-reference only in expository prose. Reify its logical content through the two typed theorem proposals below, neither of which has remark dependencies.",
        "root_carrier_directly_edited_by_this_plan": false,
        "raw_sha256": "29cd04ec94721ba22480fc3ebb23f3b77040fdac9ec83dc0710796c0e54ca60a",
        "logical_replacement_proposals": [
          {
            "id": "thm-complex-coordinate-isometry-and-topology-transport",
            "kind": "theorem",
            "deps": [
              "thm-complex-numbers-are-the-real-coordinate-plane",
              "def-complex-metric-convergence-and-continuity",
              "def-p-norms-on-rn",
              "def-isometry-and-metric-embedding",
              "lem-isometry-is-an-embedding",
              "def-metric-topology",
              "def-metric-interior-closure-boundary",
              "def-metric-compactness",
              "def-metric-bounded-diameter",
              "thm-continuous-image-of-a-connected-space",
              "thm-continuous-image-of-a-compact-space-is-compact"
            ],
            "contract": "The coordinate map Φ(z)=(Re z, Im z) is a bijective isometry from C with its complex modulus metric to R² with d₂, and transports open, closed, interior, closure, boundary, boundedness, compactness, and connectedness.",
            "proof_route": "Use the coordinate bijection and identity |z−w|=||Φ(z)−Φ(w)||₂. Apply the isometric-embedding/homeomorphism result for topological notions; apply compact and connected continuous-image results in both directions; use equality of distances for boundedness.",
            "remark_dependencies": []
          },
          {
            "id": "thm-complex-coordinate-map-preserves-real-total-differentiability",
            "kind": "theorem",
            "deps": [
              "thm-complex-coordinate-isometry-and-topology-transport",
              "def-total-derivative-in-euclidean-space",
              "def-euclidean-linear-map"
            ],
            "contract": "For a real-differentiable map expressed in complex and real coordinates, D(Φ∘f∘Φ⁻¹)=Φ∘Df∘Φ⁻¹; the coordinate dictionary preserves real total differentiability.",
            "proof_route": "Use real-linearity of Φ and its inverse, then rewrite the Fréchet remainder through the exact norm equality from the isometry theorem; the remainder is o(||h||) in one coordinate system exactly when it is in the other.",
            "remark_dependencies": []
          }
        ]
      },
      "new_bridge_required_for_dictionary_claims": false,
      "new_bridges_required_for_enclosing_complex_plane_logical_claims": true
    }
  ]
}
```
