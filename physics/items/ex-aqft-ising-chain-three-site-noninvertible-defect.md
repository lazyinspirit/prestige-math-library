---
id: ex-aqft-ising-chain-three-site-noninvertible-defect
kind: example
title: "A non-invertible defect on a three-site Ising ring"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-noninvertible-symmetries-examples
dependency_level: 4
deps:
  - pthm-aqft-noninvertible-defect-realization
dependency_roles:
  pthm-aqft-noninvertible-defect-realization: physical-result
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "An exact finite three-site periodic quantum Ising chain at the zero-field self-dual coupling, with an eight-dimensional Hilbert space; no infinite-volume, continuum, or empirical claim is made."
sources:
  references:
    - title: "David Aasen, Roger S. K. Mong, and Paul Fendley, Topological Defects on the Lattice I: The Ising Model"
      url: "https://arxiv.org/pdf/1601.07185"
      locator: "§3.2, PDF pp. 9–11: finite-chain duality operator, fusion sum and non-invertibility."
    - title: "Jürg Fröhlich, Jürgen Fuchs, Ingo Runkel, and Christoph Schweigert, Kramers–Wannier Duality from Conformal Defects"
      url: "https://arxiv.org/pdf/cond-mat/0404051"
      locator: "Critical-Ising defect discussion, PDF pp. 2–5, for the independent fusion-category interpretation; this example makes no continuum claim."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Let $\mathcal H_3=\ell^2(\mathbb Z_2^3)$ with orthonormal basis $|h_1,h_2,h_3\rangle$, and define $Z_j|\mathbf h\rangle=(-1)^{h_j}|\mathbf h\rangle$ and $X_j|\mathbf h\rangle=|\mathbf h+\mathbf e_j\rangle$. Use periodic indices and the finite Hamiltonian $H_3=-J\sum_{j=1}^3(Z_jZ_{j+1}+X_j)$, where $J>0$ has energy units and $\hbar=1$. Euclidean propagation through $s\ge0$ is $e^{-sH_3}$. Define $K_3$ from this ring to its half-shifted dual by

$$
\langle\widehat{\mathbf h}|K_3|\mathbf h\rangle=2^{-3/2}(-1)^{\sum_{j=1}^{3}\widehat h_{j-1/2}(h_{j-1}+h_j)},\qquad h_0=h_3,
$$

and use the supplier's reflection identification $R_3|\widehat{\mathbf h}\rangle=|\mathbf r\rangle$, $r_j=\widehat h_{1/2-j}$, to set $D_3=R_3K_3$. Its complete admissible defect-bearing correlators are exactly the finite decorated tensor contractions, ordinary insertions and external boundary tensors of the supplier at $L=3$; allowed slides keep the rest of that complete input fixed. Let $P_3=X_1X_2X_3$ and $v=|000\rangle-|111\rangle$. The defect inserted on a Euclidean time slice is topological under the declared slides within gaps of fixed insertions, satisfies $D_3^2=I+P_3$, and annihilates $v$ after two fusions. Therefore this exact finite-model defect is non-invertible. No continuum or empirical claim is made.

## Example references

[Aasen, Mong, and Fendley, §3.2](https://arxiv.org/pdf/1601.07185)

[Fröhlich, Fuchs, Runkel, and Schweigert, critical-Ising defect discussion](https://arxiv.org/pdf/cond-mat/0404051)

## Facts & Assumptions

**Given:** Adopt the three-site Hilbert space, Hamiltonian, original-to-dual kernel and reflection identification, Euclidean transfer model and global spin flip in the Example. The defect line is inserted only in a gap that contains no other insertion.

[F1] [[pthm-aqft-noninvertible-defect-realization]]: for every finite periodic length $L\ge2$ in the stated model, $D_L$ is topological under the declared slides and $D_L^2=I+P_L$.

## Verification

1.1 The vector $v$ is nonzero because $|000\rangle$ and $|111\rangle$ are distinct orthonormal basis vectors. The global spin flip exchanges them, so $P_3v=|111\rangle-|000\rangle=-v$. [given, algebra]

2.1 By [F1] at $L=3$, $D_3^2v=(I+P_3)v=v-v=0$. If $D_3$ had a two-sided inverse, then $D_3^2$ would be invertible and could not annihilate the nonzero vector $v$; thus the defect is non-invertible. Its topologicality in every allowed gap follows from the same exact finite transfer-model result. [F1, step 1.1, algebra] ∎
