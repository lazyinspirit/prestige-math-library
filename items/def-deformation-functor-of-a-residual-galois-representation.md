---
id: def-deformation-functor-of-a-residual-galois-representation
kind: definition
title: "Deformation functor of a residual Galois representation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-residual-galois-representation
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: >-
  The chosen residual representation carries the Axiom of Choice dependency
  declared by its supplier. Forming strict-equivalence classes and applying
  coefficient homomorphisms uses no additional choice.
provenance:
  statement: literature-derived
  proof: direct
verification:
  precheck: pass
---

## Definition

Assume the Axiom of Choice. Let \(K\) be a number field (a finite extension
of \(\mathbb Q\)), \(p\) a prime. Fix a separable closure \(K_s\), write
\(G_K=\operatorname{Gal}(K_s/K)\), and let
\(\rho:G_K\to\operatorname{GL}_{\mathbb Q_p}(V)\) be a continuous
finite-dimensional \(p\)-adic representation with a fixed \(\rho\)-stable
full \(\mathbb Z_p\)-lattice \(\Lambda\). Put \(W=\Lambda/p\Lambda\), and
let \(\bar\rho\) be the semisimplification of this reduction: for a
composition series \(0=W_0\subsetneq\cdots\subsetneq W_r=W\) with simple
quotients, it is the direct sum of the \(W_i/W_{i-1}\). This residual
representation is relative to the chosen lattice; no independence from a
different stable lattice is asserted. Let \(S\) be a finite set of places
containing all archimedean places, the places above \(p\), and every place
where \(\bar\rho\) is ramified. Let \(G_{K,S}\) be the Galois group of the
maximal separable extension of \(K\) unramified outside \(S\). Let
\(\mathcal O\) be a complete discrete valuation ring
(a local principal ideal domain with nonzero principal maximal ideal, complete
for powers of that ideal) with residue field \(\mathbb F_p\). Let
\(\mathcal C_{\mathcal O}\) be the category of local Artinian
\(\mathcal O\)-algebras \(A\) with residue field \(\mathbb F_p\) and nilpotent maximal
ideal \(\mathfrak m_A\), with local \(\mathcal O\)-algebra maps inducing the
identity on \(\mathbb F_p\). Give every finite coefficient algebra the discrete
topology. Define \(D_{\bar\rho}(A)\) to be the set of continuous
homomorphisms \(\rho:G_{K,S}\to\operatorname{GL}_n(A)\) reducing to
\(\bar\rho\), modulo conjugation by matrices in
\(\ker(\operatorname{GL}_n(A)\to\operatorname{GL}_n(\mathbb F_p))\). For
\(f:A\to B\) in \(\mathcal C_{\mathcal O}\), the map
\(D_{\bar\rho}(f)\) is induced by applying \(f\) to matrix entries. This
covariant functor is the unrestricted deformation functor of
\(\bar\rho\); determinant restrictions and additional local deformation
conditions are separate data.

## Definition references

[[def-residual-galois-representation]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice and the chosen residual representation in the Definition.

[F1] A residual Galois representation is the specified continuous representation on the residual finite-dimensional vector space obtained from the chosen stable lattice in its supplier definition. [[def-residual-galois-representation]]

[F2] The Axiom of Choice supplies the chosen residual representation and its stable-lattice construction in [F1]. [[def-axiom-of-choice]]

## Verification

1.1 If two lifts \(\rho_1,\rho_2\) are conjugate by \(u\equiv 1\pmod{\mathfrak m_A}\), then applying a local coefficient map \(f:A\to B\) gives conjugate lifts by \(f(u)\equiv1\pmod{\mathfrak m_B}\). Thus the induced map on equivalence classes is well-defined. [given, F1, algebra]

1.2 Applying the identity coefficient map leaves each matrix unchanged, and applying \(g:B\to C\) after \(f:A\to B\) applies the composite \(g\circ f\) entrywise. The induced maps therefore satisfy the identity and composition laws, so \(D_{\bar\rho}\) is a covariant functor. [given, step 1.1, algebra] ∎
