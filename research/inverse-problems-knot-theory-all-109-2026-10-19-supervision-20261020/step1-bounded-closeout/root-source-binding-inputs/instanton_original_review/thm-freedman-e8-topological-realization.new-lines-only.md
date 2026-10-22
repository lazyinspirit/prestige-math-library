<!-- new lines at canonical 12 -->
  - def-axiom-of-choice

<!-- new lines at canonical 16 -->
axiom_use: "Assumes full AC for the explicitly imported Freedman TOP realization; the lattice specialization and counterexample inference are finite."

<!-- new lines at canonical 19 -->
  proof: ai-altered

<!-- new lines at canonical 29 -->
Assume full AC. There exists a closed connected simply connected oriented topological four-manifold $Y_{E_8}$ whose integral intersection form is isometric to the positive-definite even unimodular lattice $L_{E_8}$. This is a topological realization statement and does not assert a smooth structure on $Y_{E_8}$.

<!-- new lines at canonical 37 -->
**Given:** Full AC and the E8 lattice as defined by its Gram matrix. The run-specific TOP external-source permission in CLAUDE.md §12 applies to the following explicitly imported realization input.

<!-- new lines at canonical 41 -->
[F2] **External TOP input — Freedman's realization theorem.** For every integral unimodular symmetric form $\omega$, there exists an oriented closed simply connected almost-smooth topological four-manifold whose integral intersection form is $\omega$. Here almost-smooth means smooth off a single point. This is the existence clause of Freedman, *The topology of four-dimensional manifolds*, Theorem 1.5, printed p. 368; Theorem 1.7, printed p. 371, separately records the E8 case. This input is imported from that source under the run-specific TOP exception; its plumbing, contractible cap and four-dimensional realization proof are not reconstructed here.


<!-- new lines at canonical 45 -->
**Given:** The local lattice calculation [F1] and the explicit external TOP realization input [F2].

<!-- new lines at canonical 47 -->
1.1 Apply [F2] to the integral unimodular form $\omega=L_{E_8}$, which satisfies its exact algebraic hypothesis by [F1]. It gives an oriented closed simply connected topological four-manifold $Y_{E_8}$ with intersection form $L_{E_8}$. Simply connected includes path connectedness, so $Y_{E_8}$ has every property required in the statement. [F1, F2]

<!-- new lines at canonical 49 -->
1.2 The source also gives smoothness away from a point, but no smooth structure on the whole closed manifold is asserted or used. This establishes precisely the stated topological realization. [F2, step 1.1] ∎

<!-- new lines at canonical 51 -->
## Imported-source boundary

<!-- new lines at canonical 53 -->
The realization existence in [F2] is an external input permitted for this run's TOP branch, not a locally reconstructed proof or new acceptance of an arbitrary disk-embedding theorem. The lattice calculation remains the existing local supplier. No smooth diagonalization result is used to obtain the topological manifold.

