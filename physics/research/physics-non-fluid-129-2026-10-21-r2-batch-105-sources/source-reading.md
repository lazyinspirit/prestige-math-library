# Batch 105 source reading record

Run: `physics-non-fluid-129-2026-10-21-r2`  
A page: `qsmx-quantum-double`  
B page: `qsmx-quantum-double-examples`

Five full-text treatments were retrieved and read in the exact sections listed below. The local PDFs and their byte hashes are archived in `raw/`. Source retrieval stamps prove full-text fetchability, not mathematical validity. The coverage JSON records each item-by-source disposition, reading extent, supported result, and limitation.

## Finite-group lattice and Hopf-double treatments

### A. Yu. Kitaev, “Fault-tolerant quantum computation by anyons”

[Full PDF](https://arxiv.org/pdf/quant-ph/9707021).

- Local text: `raw/kitaev-fault-tolerant-anyons.pdf` (330,438 bytes; 27 pages; SHA-256 `095171071c8735471da47b929da4d2623d847dff9873d40930cdc169b96cb514`).
- Inspected: §4, equations (9)–(14), PDF pp. 10–12; §5.1, equations (17)–(23), PDF pp. 14–15; §5.2, equations (25)–(34), PDF pp. 16–18.
- Supported: finite group edge factors, orientation-dependent left/right actions, vertex and face projectors, the D(G) basis/product/adjoint, the conjugacy-class/centralizer construction, coproduct/counit/antipode conventions, and the listed Hopf identities.
- Limits: the paper's stated gauge and particle constructions supply conventions and interfaces; local proofs below directly establish every Hopf-* identity and the generalized finite-cellulation projector theorem. No ribbon, braid, modular-functor, perturbation, or fault-tolerance result is consumed.

The successor design's `kitaev-3` source map listed §4 and §5.1. I read those complete cited sections and also read §5.2, equations (25)–(34), to check the exact coproduct, counit, antipode, and identity conventions used by the local Hopf-* proof. The added reading does not enlarge the claim to a general quantum group.

### Mark de Wild Propitius and F. Alexander Bais, “Discrete Gauge Theories”

[Full lecture-note PDF](https://arxiv.org/pdf/hep-th/9511201).

- Local text: `raw/de-wild-propitius-discrete-gauge-theories.pdf` (773,566 bytes; 87 pages; SHA-256 `610ecedaf4b9f202e5280f0a7989a8892e52ca46df85e5aaf163923e6b18a426`).
- Inspected: Chapter 2, §2.1, equations (2.1.1)–(2.1.13), printed pp. 43–46 (local PDF pp. 45–48).
- Supported: the flux-projector/cross-relation multiplication, the D(H) vector-space basis, the class-representative and centralizer-fiber construction, and the coproduct with its coassociativity calculation.
- Limits: the notes give a physical flux/charge interpretation. The item is a purely algebraic representation theorem and does not import the notes' braiding, spin, fusion, scattering, or gauge-theory claims.

### Alexander Cowtan and Shahn Majid, “Quantum Double Aspects of Surface Code Models”

[Full PDF](https://arxiv.org/pdf/2107.04411).

- Local text: `raw/cowtan-majid-quantum-double-aspects.pdf` (1,923,404 bytes; 54 pages; SHA-256 `f9a79429aaa2e3437916e7ab5b9893f8e1af53ea1995e9e3482f33e082d24f63`).
- Inspected: §3, PDF pp. 7–9, for the finite-group edge/site actions and commuting projectors; §3.2, PDF pp. 10–12, for irreducible class/centralizer sectors; §2, PDF pp. 3–5, for the abelian toric specialization.
- Supported: an independent treatment of the finite-group D(G) algebra, oriented lattice actions, flatness and gauge projectors, and sector labels.
- Limits: explicit operator formulas use a ciliated square-lattice convention before the authors explain the extension to other cellulations. The local definition states its boundary-walk convention directly, and the theorem proves commutation and a nonzero pure-gauge vector without relying on a diagram or a citation. No topological protection under perturbations is claimed.

## Finite-group character and regular-representation treatments

### Peter Webb, *A Course in Finite Group Representation Theory*

[Full book PDF](https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf).

- Local text: `raw/webb-finite-group-representation.pdf` (1,322,988 bytes; 294 pages; SHA-256 `3053d04310d379844d0ccac2ae078124492730a116e63343014d276169fb4c24`).
- Inspected: §3.2, Theorem 3.2.3, printed p. 30 (PDF p. 37); §3.3, Lemma 3.3.6 and Corollary 3.3.7, printed p. 34 (PDF p. 41).
- Supported: the averaging projection on the Hom space, row character orthogonality, the regular character, and the sum of squared irreducible degrees.
- Limits: the authored lemma reproduces the finite-dimensional averaging and regular-module argument with all hypotheses; Webb's result is not substituted for that proof.

### Pavel Etingof et al., *Introduction to Representation Theory*

[Full lecture-note PDF](https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf).

- Local text: `raw/etingof-introduction-representation-theory.pdf` (1,403,098 bytes; 109 pages; SHA-256 `7008168dd922219706ef514e456d79d5c7b1b3bcabef6d94cc3ebfb6a456e44e`).
- Inspected: §3.5, Theorem 3.8 and proof, PDF pp. 37–38; §3.7, Proposition 3.14 and proof, PDF pp. 39–40.
- Supported: a separate Hom-space averaging proof of character orthogonality and the matrix-coefficient orthogonality route.
- Limits: only the finite-group sections needed for the dimension-sum lemma were read; no claim is made about reading all 109 pages. The item proves the regular-representation multiplicities and sum locally.

## Item coverage and dispositions

- `def-qsmx-finite-group-double`: included from Kitaev §4/§5.1, de Wild Propitius–Bais §2.1, and Cowtan–Majid §3. Exact structure-map formulas are stated locally.
- `thm-qsmx-double-hopf-structure`: included from Kitaev §5.2, de Wild Propitius–Bais §2.1, and Cowtan–Majid §3. The complete finite-basis Hopf-* verification is local.
- `def-qsmx-finite-group-lattice-operators`: included from Kitaev §4 and Cowtan–Majid §3.1. The oriented edge and boundary-walk conventions are written explicitly.
- `thm-qsmx-double-lattice-projectors`: included from Kitaev §4 and Cowtan–Majid §3.1. The explicit proof of commutation and the pure-gauge common vector is local.
- `lem-qsmx-finite-group-irrep-dimension-square-sum`: included from Webb §§3.2–3.3 and Etingof et al. §§3.5, 3.7. The proof locally derives character orthogonality by averaging, then derives the regular-representation multiplicity and dimension identity.
- `thm-qsmx-double-sector-labels`: included from Kitaev §5.1, de Wild Propitius–Bais §2.1, and Cowtan–Majid §3.2. The classification and dimension count are proved locally.
- `ex-qsmx-double-z2`: included from Kitaev §4/§5.1, de Wild Propitius–Bais §2.1, and Cowtan–Majid §§2, 3.2. The four characters and equality of the two signs are computed locally from the stated algebraic suppliers.

## Retrieval record

The search queries and per-item source dispositions are in `research/physics-non-fluid-129-2026-10-21-r2-batch-105.coverage.json`. The first `source-fetch-check --stamp` run reported `8/8 source(s) fetch-verified (8 newly stamped)`, zero failures, and zero drops; the final post-edit check reported `8/8 source(s) fetch-verified (0 newly stamped)`, zero failures, and zero drops. Each source required one successful body fetch. `source_resolution` is empty because no retrieval failed and no source was dropped.
