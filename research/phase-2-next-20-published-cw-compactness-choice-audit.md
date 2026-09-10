# Published CW compactness choice audit — 2026-09-11

This bounded audit reconciles the AT6 author handoff for
`lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells`.
It covers the complete target, both declared CW interfaces, every direct
published consumer of the target and of its compact-image corollary, and the
exact active draft use. It does not audit the transitive consumer closure or
claim a choice-theoretic lower bound for the classical theorem. No published
item was edited.

## Deduplication and fixed artifacts

The whole canonical ledger was searched by all six exact IDs, titles and
aliases, the distinct-cell point-selection mechanism, compact-image and
finite-subcomplex supplier paths, and the supplying IDs. The relative-skeletal
homology theorem and finite-dimensional axiomatic-support lemma already had
one U-P row each from earlier audit pools; those rows are extended below.
The target and the other three consumers had no row. No historical ledger
finding covered this exact choice mechanism. The author handoff in
`research/phase-2-next-20-step3b-e.md` is therefore reconciled without adding
duplicate classifications.

Current SHA-256 values are:

- target `lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells`:
  `d2072081e6c3b0d41e1c5271a8e55365599e809b2aaf65eeb596e8fe7d87c232`;
- `cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex`:
  `0fd0c729edbe12c96ebf447d9f53defcda352882f3c15a8093e69b5bfb2c56ad`;
- `lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology`:
  `06e02bb8281505b20df5fe1da6601d9225a57d1fddfade22a13335301560b866`;
- `cex-the-hawaiian-earring-is-not-a-cw-complex-with-its-circle-cells`:
  `69faacb358b2722a110f3bb865debc2e1a10d905b8c1ca5ea2cebd2974aa1b87`;
- `thm-relative-homology-of-consecutive-cw-skeleta`:
  `82b8ad55b876684a85b1d8769c28afdb9adbdb3b12743cb358ec9959cc1b41fc`;
- `lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support`:
  `12cc5701a9648583055b1829036978a8eac711f55defa67556a878f09e05eeb7`.

## Confirmed target defect

Target proof 1.1 starts with an arbitrary infinite family of open cells met by
`K` and says to choose a sequence `x_i` in `K` from pairwise distinct cells.
Neither the Statement nor the two declared dependencies assumes or supplies a
choice principle. In ZF an arbitrary infinite set need not supply a countably
infinite subfamily, and even after such a subfamily is selected the proof must
choose one point from each of countably many nonempty intersections. Thus this
is a genuine proof/hypothesis gap, not a missing direct edge to an already
applicable assumption.

The argument after that selection is sound. Pairwise distinct open cells put
at most one selected point in each characteristic-disk interior. Induction on
skeleta and the weak topology make every subset of the selected set closed, so
it is an infinite closed discrete subspace of compact `K`, a contradiction.

One direct repair is to add `Assume AC`, declare published
`def-axiom-of-choice`, select countably many distinct met cells and a point in
each intersection, then keep the existing proof. A precisely established
weaker choice principle or a complete choice-free replacement would also
suffice. This audit does not claim AC is necessary for the theorem.

## Exact direct-consumer impact

Five direct published consumers are impact candidates rather than additional
confirmed defects at this stage:

- The compact-image corollary applies the affected target to `f(K)` and then
  correctly closes the finitely many met cells under closure finiteness.
- The skeletal-homology colimit lemma applies that corollary separately to a
  finite cycle and to a finite bounding chain. Its surjectivity/injectivity
  argument is otherwise sound.
- The relative consecutive-skeleta theorem uses the target to make singular
  chains in an infinite wedge meet finitely many summands. Its direct-sum
  conclusion is sound once the compactness input is repaired or qualified.
- The finite-dimensional axiomatic-support lemma invokes the compact-image
  corollary for closures of finitely many support cells. It can avoid the
  choice-sensitive route entirely: CW closure finiteness itself makes the
  finite union of those cell closures a finite subcomplex.
- The Hawaiian-earring counterexample invokes the target after observing that
  one explicit compact set meets every proposed circle cell. It can either
  inherit the repaired hypothesis or reproduce the target contradiction using
  its explicit countable family, without any arbitrary-family selection.

Because the target might receive a choice-free proof, these five rows remain
U-P exact impact candidates rather than being promoted to confirmed inherited
choice defects. Their complete current local arguments were read, but this pass
does not traverse further consumers.

The live draft
`ex-field-cohomology-of-an-infinite-wedge-of-circles` explicitly assumes AC and
states that the arbitrary-CW comparison may spend it on this compactness route.
It therefore has no live prerequisite blocker from this finding.

## Disposition

The target is one new A-P item. Three direct published consumers are new U-P
impact candidates and the two existing U-P rows are extended with their exact
routes. Existing published `def-axiom-of-choice` is sufficient for the
straightforward repair; no new Phase-2 pair is required.
