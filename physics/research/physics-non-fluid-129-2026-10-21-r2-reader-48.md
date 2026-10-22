# Step 3a reader report — batch 48

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `48`

## Opened inventory

Assigned pages opened:

- `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-exchange-representations.md`
- `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-exchange-representations-examples.md`

All 12 assigned items were opened in supplier order:

1. `def-nrqmx-spin-half-tensor-chain`
2. `def-nrqmx-planar-two-particle-configuration-space`
3. `lem-nrqmx-temperley-lieb-star-involution`
4. `thm-nrqmx-schur-weyl-exchange-blocks`
5. `lem-nrqmx-planar-two-particle-config-fundamental-group`
6. `thm-nrqmx-spin-half-temperley-lieb`
7. `thm-nrqmx-heisenberg-exchange-tl`
8. `def-nrqmx-planar-character-line-bundle`
9. `thm-nrqmx-planar-character-line-bundle`
10. `thm-nrqmx-two-dimensional-exchange-holonomy`
11. `cex-nrqmx-permutation-invariance-not-bosons`
12. `ex-nrqmx-three-spin-blocks`

I also opened the batch proof contract at
`research/physics-non-fluid-129-2026-10-21-r2-batch-48.proof-contracts.json`
and checked direct mathematical suppliers before their assigned consumers.
The 40 non-batch direct supplier items opened were:

```text
cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars
cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
cor-schurs-lemma-for-irreducible-representations
cor-symmetric-group-has-factorial-cardinality-again
cor-trigonometric-parity-and-pythagorean-identity
def-adjoint-of-a-linear-map-between-inner-product-spaces
def-based-loops-and-fundamental-group
def-circle-as-real-line-mod-integers
def-column-antisymmetrizer-polytabloid-and-specht-module
def-commuting-symmetric-and-linear-actions-on-tensor-power
def-complex-conjugate-real-imaginary-part-and-modulus
def-complex-numbers-and-arithmetic
def-covering-map-and-evenly-covered-neighbourhoods
def-deck-transformation-and-deck-group
def-group-action
def-inner-product-space
def-quotient-topology
def-simply-connected
def-subspace-topology-top
def-symmetric-group
def-temperley-lieb-diagram-category
def-temperley-lieb-generator-presentation
def-topological-space
def-trace-of-an-endomorphism
def-universal-covering-space
lem-complex-conjugation-and-modulus-laws
prop-nrqm-orbital-and-spin-finite-spin-matrices
thm-adjoint-exists-and-is-unique-in-finite-dimension
thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
thm-complex-numbers-form-a-field
thm-finite-dimensional-orthogonal-decomposition
thm-fundamental-group-of-the-circle
thm-induced-fundamental-group-map-functoriality
thm-path-lifting-for-covering-maps
thm-quarter-turn-values-and-shift-formulas
thm-quotient-universal-property
thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle
thm-schur-weyl-decomposition-with-length-cutoff
thm-sine-and-cosine-addition-formulas
thm-tensor-product-basis-from-bases
```

The direct suppliers were checked against `research/math-imports.json`. The
finite-spin matrix proposition is a local published mathematics supplier and
does not appear in that import receipt. I read the current statement and proof
of every listed direct item. The computed recursive closure contains 1,101
items, including the 12 assignments and 40 other direct suppliers; I did not
independently open the remaining transitive supplier items. I did not rehash
the imported-item pins.

## Mathematical review and edits

- `def-nrqmx-spin-half-tensor-chain`: the finite-dimensional tensor basis,
  linear-first inner product, adjacent swaps, singlet projections, and empty
  bond families at $N=1$ are explicit and consistent with the cited finite-spin
  matrix supplier.
- `def-nrqmx-planar-two-particle-configuration-space` and
  `lem-nrqmx-planar-two-particle-config-fundamental-group`: the collision
  diagonal is excluded, quotient topology is specified, and the center/relative
  coordinates, antipodal quotient, deformation retraction, fundamental-group
  generator, and full-winding class are justified locally.
- `lem-nrqmx-temperley-lieb-star-involution`: reversing words and conjugating
  coefficients preserves the defining ideal; the proof covers $N=0,1$.
- `thm-nrqmx-schur-weyl-exchange-blocks`: the finite-dimensional unitary
  decomposition and action placements are justified. I clarified the Statement
  so $M_\lambda=\operatorname{Hom}_{S_N}(S^\lambda,H_N)$ is defined for every
  partition before the final zero-multiplicity assertion. I also narrowed Fact
  [F5] to the finite-dimensional scalar-endomorphism case actually used for
  $S^\lambda$; [F2] supplies that finite dimensionality. Five assigned
  consumer contract excerpts were refreshed to the exact current Statement.
- `thm-nrqmx-spin-half-temperley-lieb`: the swap identity, singlet projection,
  loop-weight-two relations, represented algebra map, and factor placement are
  supported by direct tensor calculations. The proof does not rely on the
  diagram.
- `thm-nrqmx-heisenberg-exchange-tl`: the Pauli normalization gives the stated
  bond identity and the real-coupled finite sum is self-adjoint. Its SI-unit
  remark is conditional and asserts no measured coupling.
- `def-nrqmx-planar-character-line-bundle` and
  `thm-nrqmx-planar-character-line-bundle`: the character action, covering
  sheets, deck translations, quotient charts, locally constant unitary
  transitions, and monodromy sign convention are consistent with the explicit
  inverse in the action.
- `thm-nrqmx-two-dimensional-exchange-holonomy`: the classification by a
  character value, the $S_2$ quotient cases, full-turn phase, and monodromy
  follow from the stated suppliers. I repaired the negative-power argument:
  $z\overline z=|z|^2=1$ now supplies $z^{-1}=\overline z$, after which parity
  gives the angle $-\theta$. Fact [F3] and its proof-contract derivation now
  state this use explicitly.
- `cex-nrqmx-permutation-invariance-not-bosons`: the identity operator commutes
  with the swap while $|00\rangle$ and the singlet lie in nonzero opposite
  eigenspaces, so the counterexample is valid.
- `ex-nrqmx-three-spin-blocks`: the eight vectors are orthonormal; ladder and
  swap actions, the exchange blocks, Hamiltonian matrices, trace/determinant,
  and eigenvalues check algebraically.

For the relevant source claims, I checked the cited locations in these three
papers/notes. Ikhlef, Jacobsen, and Saleur, §2, describe the spin-half
singlet-projector
Temperley–Lieb realization and its loop-weight-two relations
([source](https://arxiv.org/pdf/0901.4685)); the assigned proof independently
derives the swap normalization and relations. Nayak et al., §II.A.1, PDF pp.
3–4, discuss noncontractible planar windings and the exchange phases
$e^{i\theta}$ and $e^{2i\theta}$
([source](https://arxiv.org/pdf/0707.1889)); the local configuration-space
proof, rather than that qualitative discussion, establishes the exact
$\pi_1\cong\mathbb Z$ claim. The CT Lent 2005 notes, §23.14, Theorem 23.15,
PDF p. 56, state the Schur–Weyl decomposition for the commuting unitary-group
and symmetric-group actions
([source](https://math.uchicago.edu/~margalit/repthy/RepThry.pdf)); the local
proof establishes the unitary evaluation map and inner products used here.

## Diagram review

- In `thm-nrqmx-spin-half-temperley-lieb`, the cap, cup, and outer through
  strands match the stated $e_i$ convention.
- In `thm-nrqmx-two-dimensional-exchange-holonomy`, time runs upward and the
  right-starting strand is the over-strand, consistent with the explicit
  counterclockwise exchange path.
- In `ex-nrqmx-three-spin-blocks`, the displayed tableaux are the one standard
  tableau of shape $(3)$ and the two standard tableaux of shape $(2,1)$; row and
  column labels increase.
- No missing diagram is needed to state or prove the remaining assigned
  claims.

## Uneditable defect

`cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars`
is published and read-only. Its Statement omits finite-dimensionality, while
its Proof step 1.1 applies a triangularisability result that requires it. The
claim is false for arbitrary-dimensional irreducibles: let $K$ be a proper
extension of the algebraically closed field $k$ (for example an algebraic
closure of $k(t)$), let $G=K^\times$ act on the $k$-vector space $V=K$ by
multiplication, and note that every nonzero $G$-invariant $k$-subspace is all
of $K$. Every $G$-endomorphism is multiplication by an element of $K$, so
$\operatorname{End}_G(K)\cong K\ne k$. The assigned consumer
`thm-nrqmx-schur-weyl-exchange-blocks` uses only the finite-dimensional
irreducible Specht-module case; its Fact [F5] now records that restricted use.
The published supplier still needs an owner disposition for its unrestricted
Statement.

## Page verdicts

- `nrqmx-exchange-representations`: no remaining assigned-page or assigned-item
  defect after the two repairs. Its direct finite-dimensional use of the
  scalar-endomorphism result is explicit. The routed published-supplier issue
  remains outside reader edit scope.
- `nrqmx-exchange-representations-examples`: the counterexample and three-spin
  computation are correct; no item or page-prose defect remains.

All assigned carriers have `domain: mathematics`; no empirical premise,
experiment, or statistical conclusion appears in the batch. No
`verification.judge` record was present on either edited item. No blocker
remains within the assigned write scope.

## Validation

- `reflow.mts` passed for both edited items.
- `precheck.mts` passed for both edited items.
- `proof-layout.mjs` passed once after final edits: 2 items, 11 steps, 0 defects.
- The current Schur-block supplier excerpts in the five assigned consumer
  contracts match the repaired Statement; the holonomy step 1.1 derivation
  contract matches the repaired proof after layout normalization.

## Coverage note

The review covered both assigned pages, all 12 assigned items, and all 40
unique direct non-batch item suppliers. The recursive dependency closure is
1,101 items; the remaining transitive suppliers were not individually opened,
and imported pins were not rehashed. Page-level `requires` entries were checked
against the assigned manifest, but those required page bodies were not used as
logical suppliers and were not independently reviewed.
