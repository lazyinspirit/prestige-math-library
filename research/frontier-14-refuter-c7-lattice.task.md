## This dispatch — refuter `c7-lattice`, run `frontier-14`, batch 7

Read the items below in full, on disk at `items/<id>.md`, together with
every item each one names in its `deps` and cites in a `[F#]`/`[A#]`/`[L#]`
fact. The batch's proof contract is `research/frontier-14-batch-7.proof-contracts.json`;
its `boundaries` rows are claims you may falsify.

Pages: `stone-weierstrass-general` (A) and `stone-weierstrass-general-examples` (B).
Subject: the Kakutani–Krein lattice route to Stone–Weierstrass on a compact
Hausdorff space.

### Your items

- `def-two-point-duplication-property`
- `def-separating-real-function-lattice`
- `def-unital-separating-real-function-algebra-general`
- `prop-general-real-function-algebra-agrees-with-the-metric-definition`
- `lem-two-point-interpolation-for-a-separating-real-function-lattice`
- `lem-two-compact-cover-sweeps-for-function-lattices`
- `thm-lattice-stone-weierstrass`
- `ex-distance-function-lattice-is-dense-on-a-compact-metric-space`

### Where this group's defects are most likely

- **The empty and one-point space.** `lem-two-compact-cover-sweeps-for-function-lattices`
  assumes $X$ nonempty; `thm-lattice-stone-weierstrass` handles $X=\varnothing$
  in its own step 1.1 by calling the empty function a constant function. Decide
  whether that is true and whether the one-point case really needs the
  equal-point clause of `def-two-point-duplication-property`.
- **The two cover sweeps.** In `lem-two-compact-cover-sweeps-for-function-lattices`
  steps 2.1–5.1, check that the families really cover, that the finite maxima and
  minima really stay in $L$ (`L` is only assumed closed under pointwise maxima
  and minima — is a *finite* max licensed?), and that the second sweep's index
  set $G$ is legitimately formed. Check whether any step makes a simultaneous
  choice over an infinite index set without a stated principle.
- **`[L2]` cites `lem-compactness-of-a-subspace-is-ambient`** for a cover of the
  whole space by open subsets of that same space. Open that item and decide
  whether the clause cited actually licenses the use.
- **`prop-general-real-function-algebra-agrees-with-the-metric-definition`**
  claims two ambient sets $C(K,\mathbb R)$ are *equal*, and excludes the empty
  metric space. Check the exclusion is honest and that the cited
  `thm-metric-continuity-characterisations` clause says what `[L3]` says it says.
- **`ex-distance-function-lattice-is-dense-on-a-compact-metric-space`** has an
  `ai-altered` Statement and an `ai-generated` proof. The generated object is
  "the smallest real vector sublattice containing constants and all $d_a$" —
  check that this object exists as described, and that the density claim is true
  including for the empty and one-point metric space.

Report every finding in your final message, fatal first, per the brief above.
