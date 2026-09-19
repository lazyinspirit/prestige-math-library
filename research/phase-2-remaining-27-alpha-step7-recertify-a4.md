# Step-7 final combined recertification — group a

Run: `phase-2-remaining-27`  
Coverage: batches 11, 12, 13

## `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system`

### Files read

- `items/prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system.md`
- The matching contract entry in
  `research/phase-2-remaining-27-batch-12.proof-contracts.json`
- The matching manifest entry in
  `research/phase-2-remaining-27-batch-12.pages.json`
- The contract-quoted clauses for `def-axiom-of-choice`,
  `thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra`,
  `def-root-and-root-space-relative-to-a-cartan-subalgebra`,
  `thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional`,
  `prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra`,
  `prop-killing-form-orthogonality-of-root-spaces`,
  `def-killing-dual-vector-of-a-root`,
  `lem-killing-length-of-a-root-is-nonzero`,
  `def-coroot-of-a-lie-algebra-root`,
  `cor-cartan-integers-are-integral`,
  `def-killing-form-of-a-finite-dimensional-lie-algebra`,
  `def-toral-and-maximal-toral-subalgebra`,
  `thm-trace-is-sum-of-eigenvalues`,
  `thm-root-reflections-preserve-the-root-set`,
  `def-root-reflection-from-a-coroot`,
  `thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system`,
  `cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root`,
  `def-reduced-crystallographic-euclidean-root-system`,
  `def-positive-system-and-base-of-simple-roots`, and
  `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`.

### Verdict

Verified and re-issued with byte-identical mathematical content. The raw file
SHA-256 was `a242ab5bb612c180e8683d9ee60b461ed8fe09228b670b92f5aedbe8ff84bda7`
both before and after re-issue. The trace identity proves positivity on the
real coroot span; restriction and the nondegenerate Killing pairing identify
that span with the real root span; the Cartan-integer and reflection suppliers
then establish crystallographicity, reflection invariance, and reducedness.
The empty rank-zero case is also harmless: both real spans and both bases are
empty, and all asserted maps are the unique maps between zero spaces.

### Sources consulted

- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed., Chapter II
  §§4–5, especially Corollary 2.38 (the real forms and positive-definite
  pairing) and Theorem 2.42 (the reduced abstract root system):
  <https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf>
- Alexander Kirillov Jr., *An Introduction to Lie Groups and Lie Algebras*,
  §§6.6–7.4, especially Theorem 6.45 (the real Cartan form and positivity),
  Theorem 7.3 (the roots form a reduced root system), and Theorem 7.16 (simple
  roots form a basis):
  <https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf>

### Focused checks

- Explicit precheck: PASS.
- Targeted rendercheck: PASS.
- Strict Batch-12 proof contract: PASS with 0 errors and no warning for this
  item.
- Targeted citecheck: PASS.

### Blocker

None.

## `def-coadjoint-representation-of-a-lie-group`

### Files read

- `items/def-coadjoint-representation-of-a-lie-group.md`
- `research/phase-2-remaining-27-batch-13.proof-contracts.json`; as expected
  for a definition whose proof provenance is `not-applicable`, it has no proof
  contract entry
- The matching manifest entry in
  `research/phase-2-remaining-27-batch-13.pages.json`
- The declared dependency clauses in `def-countable-choice`,
  `def-conjugation-and-the-adjoint-representation-of-a-lie-group`,
  `prop-adjoint-is-a-smooth-lie-group-representation`,
  `def-algebraic-dual-and-linear-functional`,
  `def-smooth-left-action-of-a-lie-group`,
  `def-orbit-stabilizer-and-orbit-map-of-a-smooth-action`, `def-lie-group`,
  `def-fundamental-vector-field-of-a-left-action`, and
  `prop-adjoint-exponential-identity`.

### Verdict

Verified and re-issued with byte-identical mathematical content. The raw file
SHA-256 was `469ae8585ecea27a49522a01338f09ece2f9121814e6e8970ad5e3408b175f09`
both before and after re-issue. The inverse in
`Ad^*_g(alpha) = alpha o Ad_{g^{-1}}` gives the left-action law in the stated
order; finite-dimensional matrix coordinates establish joint smoothness; and
the library's `exp(-t xi)` fundamental-field convention converts the usual
infinitesimal coadjoint sign to
`xi_{g*}(alpha)(eta) = alpha([xi,eta])`. The zero covector, zero-dimensional
Lie algebra, disconnected-group, and abelian-group cases are all covered by
the same formulas.

### Sources consulted

- Eckhard Meinrenken, *Symplectic Geometry*, §7.3, Remark 7.13(b), printed
  page 84, together with the notes' explicit `exp(-t xi)` convention in
  Remark 7.6:
  <https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf>
- Ana Cannas da Silva, *Lectures on Symplectic Geometry*, Lecture 21, §21.5,
  printed pages 131--132; this gives the inverse-adjoint definition, explains
  that the inverse makes it a left representation, and records the composition
  law:
  <https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf>

### Focused checks

- Explicit precheck: not applicable because this definition has no proof-like
  section.
- Targeted rendercheck: PASS.
- Strict proof contract: not applicable because the definition is outside the
  proof-bearing Batch-13 contract scope.
- Targeted citecheck: PASS.

### Blocker

None.

## `lem-highest-weight-modules-have-weights-below-the-top-weight`

### Files read

- `items/lem-highest-weight-modules-have-weights-below-the-top-weight.md`
- The matching contract entry in
  `research/phase-2-remaining-27-batch-12.proof-contracts.json`
- The matching manifest entry in
  `research/phase-2-remaining-27-batch-12.pages.json`
- The contract-quoted clauses for `def-axiom-of-choice`,
  `thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra`,
  `def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra`,
  `thm-poincare-birkhoff-witt`,
  `thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra`,
  `def-highest-weight-vector-and-highest-weight-module`,
  `prop-root-vectors-shift-weight-spaces`,
  `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`,
  and `thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional`.

### Verdict

Verified and re-issued with byte-identical mathematical content. The raw file
SHA-256 was `cf6d11f606c13c9f51cde8b0422fcba5f9238948a11af5b4b5bf7357348e90aa`
both before and after re-issue. PBW in the order
`n^-`, `h`, `n^+` gives `V = U(n^-)v`; its root-vector monomials are weight
vectors with weights in `lambda - Q_+`. Grouping a finite linear combination
by its distinct weights (whose weight spaces form a direct sum) shows that an
actual weight of `V` must occur among those monomial weights. A nonempty
monomial lowers by a nonzero element of `Q_+`, so the top weight space consists
exactly of the empty monomial line `C v`. This also covers the rank-zero case,
where `n^- = 0` and `V = C v`.

### Sources consulted

- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed., Proposition
  5.11 and its complete proof; the proposition states all three conclusions
  for an arbitrary highest-weight module:
  <https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf>
- Alexander Kirillov Jr., *An Introduction to Lie Groups and Lie Algebras*,
  §8.2, especially Theorem 8.14 and its PBW proof for the universal Verma
  module, followed by Theorem 8.15 for arbitrary highest-weight quotients:
  <https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf>

### Focused checks

- Explicit precheck: PASS.
- Targeted rendercheck: PASS.
- Strict Batch-12 proof contract: PASS with 0 errors and one nonblocking
  `shotgun-bracket` warning. The warning was triaged: step 2.1 genuinely uses
  the four tagged PBW/generation/triangular-decomposition inputs, while the
  remaining declared facts are cited at the later weight and top-line steps;
  it identifies no missing premise or inaccurate citation.
- Targeted citecheck: PASS.

### Blocker

None.

## `lem-simple-reflections-preserve-weight-multiplicities`

### Files read

- `items/lem-simple-reflections-preserve-weight-multiplicities.md`
- The matching contract entry in
  `research/phase-2-remaining-27-batch-12.proof-contracts.json`
- The matching manifest entry in
  `research/phase-2-remaining-27-batch-12.pages.json`
- The contract-quoted clauses for `def-axiom-of-choice`,
  `def-root-reflection-from-a-coroot`, `thm-root-sl-two-triple`,
  `def-coroot-of-a-lie-algebra-root`,
  `thm-finite-dimensional-representations-of-sl-two`,
  `def-weight-and-weight-space-of-a-lie-algebra-representation`,
  `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system`,
  `def-weyl-group-of-a-root-system`, and
  `prop-weyl-length-equals-positive-root-inversion-number`.

### Verdict

Verified and re-issued with byte-identical mathematical content. The raw file
SHA-256 was `293abf26d8ca5bec81eea091cecfe5839df13b8a19cf50fddb6dcb013b261581`
both before and after re-issue. For a simple root, finite-dimensional
`sl_2` theory makes the root operators nilpotent, so
`N_alpha = exp(E) exp(-F) exp(E)` is invertible. Directly expanding the three
adjoint exponentials gives
`N_alpha rho(H) N_alpha^{-1} = rho(H - alpha(H)h_alpha)`. Hence `N_alpha`
intertwines `V_mu` with `V_{s_alpha(mu)}`; its inverse supplies the reverse
inclusion. Products of simple reflections give the result for every Weyl-group
element. The proof also covers nonweights (both spaces are zero), the zero
representation, and the rank-zero case.

### Sources consulted

- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed., Chapter V
  §1 and Theorem 5.5(e), which records Weyl invariance of weight
  multiplicities (with complete reducibility extending the irreducible
  formulation to arbitrary finite-dimensional modules):
  <https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf>
- Alexander Kirillov Jr., *An Introduction to Lie Groups and Lie Algebras*,
  §8.1, Theorem 8.8 and its proof by restriction to each simple-root
  `sl_2`-subalgebra:
  <https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf>

### Focused checks

- Explicit precheck: PASS.
- Targeted rendercheck: PASS.
- Strict Batch-12 proof contract: PASS with 0 errors and no warning for this
  item.
- Targeted citecheck: PASS.

### Blocker

None.
