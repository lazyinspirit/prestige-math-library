# Reader report — batch 18

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `18`

## Review status

At review start, the run status recomputed from `.autopilot/` was `running` at
`3a-read`, with no active dispatch. The batch manifest assigns one A page, one
B page, and 12 items. All assigned item files were draft pipeline items in the
current batch. I reviewed them independently of the manifest strategies and
contracts.

## Opened inventory

Assigned pages:

- `library/numerical-linear-algebra-and-approximation/stationary-iterations-and-relaxation.md`
- `library/numerical-linear-algebra-and-approximation/stationary-iterations-and-relaxation-examples.md`

Assigned items, in dependency-level order:

- Level 0: `def-diagonal-lower-upper-splitting-convention`,
  `alg-richardson-stationary-iteration`, and
  `lem-irreducible-row-substochastic-matrix-has-strict-weighted-contraction`.
- Level 1: `alg-jacobi-stationary-iteration`,
  `alg-gauss-seidel-stationary-iteration`, and
  `alg-sor-stationary-iteration`.
- Level 2: `thm-strict-row-diagonal-dominance-implies-jacobi-and-gauss-seidel-convergence`,
  `thm-irreducibly-weakly-diagonally-dominant-jacobi-and-gauss-seidel-converge`,
  and `thm-sor-converges-iff-a-is-positive-definite-and-zero-less-than-omega-less-than-two`.
- B-page examples: `ex-stationary-splitting-with-an-initial-error-missing-an-unstable-eigenspace`,
  `ex-jacobi-iteration-for-a-strictly-diagonally-dominant-matrix`, and
  `ex-sor-iteration-for-a-positive-definite-matrix-with-omega-in-zero-two`.

Direct published item suppliers opened to check the assigned definitions,
proofs, and examples:

- `def-triangular-and-diagonal-matrices-over-a-commutative-ring`
- `def-stationary-iteration-from-a-matrix-splitting`
- `def-matrix-product-and-identity-matrix`
- `def-forward-and-back-substitution-for-triangular-systems`
- `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`
- `def-sesquilinear-and-hermitian-forms-over-a-field-with-involution`
- `def-cholesky-factorisation-with-positive-diagonal`
- `thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one`
- `cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form`
- `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial`
- `thm-the-complex-numbers-are-algebraically-closed`
- `thm-determinant-multiplicative`
- `thm-determinant-of-a-triangular-matrix`
- `thm-determinant-is-product-of-eigenvalues`
- `ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison`, linked
  from the B-page summary.

The four page prerequisites listed for the A page were opened at their current
paths: `library/linear-algebra/conjugate-gradients-minres-and-preconditioning.md`,
`library/linear-algebra/krylov-subspaces-arnoldi-and-gmres.md`,
`library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`,
and `library/numerical-linear-algebra-and-approximation/sparse-matrix-models-and-kernel-costs.md`.
I also opened the batch-18 page manifest and
`research/numerical-optimization-dynamics-2026-10-16-batch-18.proof-contracts.json`.

The source checks used the cited [Saad text](https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf),
[Bindel lecture 31](https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec31.pdf),
and [Rutgers lecture 4](https://sites.math.rutgers.edu/~falk/math574/lecture4.pdf).

## Mathematical review

The diagonal/lower/upper definition gives the stated exact splitting, including
the Hermitian identity `U=L*`. Richardson, Jacobi, Gauss–Seidel, and SOR each
specify their input checks, update equations, solve order, finite budget, and
failure returns. Their split equations agree with the published stationary
iteration definition; the pivot checks make the cited triangular solves
well-defined. None of the procedures claims convergence or finite-precision
accuracy.

The substochastic-matrix lemma correctly propagates the strict row defect along
paths of length at most `n−1`, obtains `C^n 1 < 1`, and bounds the Neumann
series geometrically. The strict diagonal-dominance proof bounds eigenvalues
of both iteration matrices. The irreducibly weakly dominant proof establishes
nonzero pivots, constructs a positive comparison vector, and gives weighted
contractions for Jacobi and Gauss–Seidel. The SOR proof correctly derives the
determinant identity, the interval `0<omega<2`, and the Hermitian energy
identity needed for positive definiteness. All statement hypotheses and
conclusions match their proofs.

The three example computations were checked directly. The stationary split has
iteration matrix `diag(2,1/2)` and illustrates convergence only for the stable
initial error. The Jacobi matrix, exact solution, and spectral radius in the
2-by-2 example are correct. The SOR split, iteration matrix, eigenvalues, and
positive-definiteness calculation are also correct. The linked published
Jacobi/Gauss–Seidel comparison example has correct splittings, spectra, and
displayed error norms.

## Repairs and evidence

1. In `items/alg-richardson-stationary-iteration.md`, the Saad reference named
   §4.1 while pointing to printed pp. 115–118. The book’s contents place §4.1
   at pp. 105–108; the cited Richardson update is Example 4.1 in §4.2.1,
   printed p. 116, equations (4.31)–(4.32). I corrected the section and locator
   and recorded that the example analyzes a nonnegative parameter. The
   [Saad text](https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf)
   and [Bindel lecture](https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec31.pdf)
   both show the cited update.

2. In `items/lem-irreducible-row-substochastic-matrix-has-strict-weighted-contraction.md`
   and `items/thm-irreducibly-weakly-diagonally-dominant-jacobi-and-gauss-seidel-converge.md`,
   I removed the Rutgers Theorem 9(iii) reference. The [Rutgers notes](https://sites.math.rutgers.edu/~falk/math574/lecture4.pdf)
   state irreducibility plus weak diagonal dominance without an explicit
   strict-row condition. Without that condition the stated generalization is
   false: `A=[[1,-1],[-1,1]]` is irreducible and weakly row-diagonally
   dominant, but Jacobi and Gauss–Seidel each have an eigenvalue `1`. The
   remaining Saad references now identify Definition 4.5 and Theorem 4.9, whose
   irreducible diagonal-dominance condition explicitly includes at least one
   strict row.

The proof contracts were not changed: their citations and derivations concern
the local facts and numbered steps, not bibliography entries, and those proof
references remain current. The three edited drafts had no `verification.judge`
records to remove.

Validation after the edits:

- `reflow` left `alg-richardson-stationary-iteration` unchanged and reflowed
  the lemma and weak-dominance theorem.
- `precheck` reported 0 checked, 0 failing for the algorithm (no proof phase),
  and PASS with 1 checked, 0 failing for each proof item.
- `node tools/proof-layout.mjs` on all three changed paths reported 3 items,
  10 steps, and 0 defects.

## Page verdicts

- `stationary-iterations-and-relaxation`: pass. Its summary matches the
  procedures and convergence results; it correctly limits the claims to exact
  arithmetic and does not promise a universal rate or optimal parameter.
- `stationary-iterations-and-relaxation-examples`: pass. Its summary matches
  the three examples and its link to the published spectral-radius comparison
  was opened and checked.

## Unrepaired defects and blockers

No uneditable defects remain. There is no blocker.

## Coverage limitation

I checked the direct published suppliers used by the assigned proofs and
opened the four required context pages, but did not re-audit the complete
upstream published dependency closures or all items listed on those context
pages.
