---
id: thm-galois-deformation-obstructions-lie-in-h2
kind: theorem
title: "Deformation obstructions lie in H²"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-deformation-functor-of-a-residual-galois-representation
  - def-group-cohomology-as-a-derived-functor
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: >-
  The cocycle construction is choice-free once a continuous set-theoretic lift
  is chosen; for finite coefficient rings such a lift is obtained by choosing
  representatives of a finite image. AC is inherited through the residual
  representation; DC is used only for the derived-functor interpretation.
provenance:
  statement: literature-derived
  proof: reconstructed
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let \(K\) be a number field, \(S\) a finite set
of places, \(p\) a prime, and
\(\bar\rho:G_{K,S}\to\operatorname{GL}_n(\mathbb F_p)\) a fixed continuous residual
representation obtained by semisimplifying a fixed stable-lattice reduction,
where \(G_{K,S}\) is the Galois group of the maximal
extension unramified outside \(S\). Let \(\mathcal O\) be a complete discrete
valuation ring with residue \(\mathbb F_p\). Let \(D_{\bar\rho}\) be its
continuous lifts to local Artinian \(\mathcal O\)-algebras with residue
\(\mathbb F_p\), modulo
conjugation by matrices reducing to the identity. Give these finite
coefficient algebras the discrete topology. Let \(B\to A\) be a surjection
of local Artinian \(\mathcal O\)-algebras with
kernel \(I\ne0\) such that \(\mathfrak m_B I=0\), and let
\(\rho_A\in D_{\bar\rho}(A)\). Regard \(I\) as an \(\mathbb F_p\)-vector space
and give \(\operatorname{ad}(\bar\rho)\otimes_{\mathbb F_p} I\) the action of \(G_{K,S}\) through
\(\operatorname{ad}(\bar\rho)\). For any continuous set-theoretic lift
\(\widetilde\rho:G_{K,S}\to\operatorname{GL}_n(B)\) of a representative of
\(\rho_A\), the defect
\[
c(g,h)=\widetilde\rho(g)\widetilde\rho(h)\widetilde\rho(gh)^{-1}-1
\]
defines a continuous \(2\)-cocycle with values in
\(\operatorname{ad}(\bar\rho)\otimes_k I\). Its cohomology class is
independent of the chosen set-theoretic lift and representative. This class
vanishes if and only if \(\rho_A\) lifts to \(D_{\bar\rho}(B)\); hence the
obstruction to lifting lies in
\(H^2_{\mathrm{cts}}(G_{K,S},\operatorname{ad}(\bar\rho))\otimes_{\mathbb F_p} I\).

## Statement references

[[def-deformation-functor-of-a-residual-galois-representation]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[def-group-cohomology-as-a-derived-functor]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[Barry Mazur, “Deforming Galois Representations,” Chapter I §§1.1–1.3, small-extension obstruction calculation](https://bpb-us-e1.wpmucdn.com/sites/harvard.edu/dist/a/189/files/2023/01/Deforming-Galois-Representations.pdf)

## Facts & Assumptions

**Given:** The deformation functor, the small extension, and the continuous-cochain convention in the Statement.

[A1] AC is assumed for the chosen residual representation in the deformation-functor convention. [[def-axiom-of-choice]]

[F1] Lifts are taken modulo conjugation by matrices reducing to the identity. [[def-deformation-functor-of-a-residual-galois-representation]]

[F2] Continuous inhomogeneous cohomology uses the differential whose degree-two cocycle equation is \(g\cdot c(h,\ell)-c(gh,\ell)+c(g,h\ell)-c(g,h)=0\). [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F3] The derived-functor convention agrees with the continuous cochain groups, under its Dependent Choice hypothesis. [[def-group-cohomology-as-a-derived-functor]] [[def-dependent-choice]]

[F4] The deformation convention fixes \(\bar\rho\) and uses strict equivalence by conjugating matrices reducing to the identity. [[def-deformation-functor-of-a-residual-galois-representation]]

## Proof

**Given:** The Statement and facts [F1]–[F4].

1.1 Since \(I^2=0\), the kernel of \(\operatorname{GL}_n(B)\to\operatorname{GL}_n(A)\) identifies with the additive group \(\operatorname{End}_{\mathbb F_p}(\mathbb F_p^n)\otimes_{\mathbb F_p} I\) by \(1+X\leftrightarrow X\). The action by conjugation through any lift of \(\bar\rho(g)\) is \(g\cdot X=\bar\rho(g)X\bar\rho(g)^{-1}\). [given, F1, algebra]

1.2 Associativity of matrix multiplication, applied to \(\widetilde\rho(g)\widetilde\rho(h)\widetilde\rho(\ell)\) in the two parenthesizations, gives
\(c(g,h)+c(gh,\ell)=g\cdot c(h,\ell)+c(g,h\ell)\). This is the degree-two cocycle equation in [F2]. The map \(c\) is continuous because the coefficient rings are finite and \(\widetilde\rho\) is continuous. [F2, step 1.1, algebra]

2.1 If the lift is changed to \(\widetilde\rho'(g)=(1+b(g))\widetilde\rho(g)\), then direct multiplication using \(I^2=0\) gives
\(c'(g,h)=c(g,h)+b(g)+g\cdot b(h)-b(gh)\). Thus \(c'-c=db\), and the cohomology class is unchanged. If the representative of \(\rho_A\) is changed by strict conjugation \(u_A\equiv1\pmod{\mathfrak m_A}\), lift its entries to \(u_B\equiv1\pmod{\mathfrak m_B}\); this is invertible because \(B\) is local. Conjugating \(\widetilde\rho\) by \(u_B\) conjugates each defect value by \(u_B\), which leaves it unchanged since \(\mathfrak m_B I=0\). Any other set-theoretic lift of that representative changes the class by the coboundary already computed. Hence the class is independent of both choices. [A1, F1, F2, step 1.2, algebra]

2.2 If the class vanishes, choose a continuous \(1\)-cochain \(b\) with \(c=db\), and replace \(\widetilde\rho(g)\) by \((1-b(g))\widetilde\rho(g)\). The formula in step 2.1 makes its defect zero, so it is a homomorphism lifting \(\rho_A\). Conversely, an actual homomorphic lift has zero defect and therefore zero class. Hence the obstruction vanishes exactly when a lift exists. [F2, step 2.1, algebra]

2.3 For every degree \(r\), the canonical map sends \(c\otimes i\) to the cochain \((g_1,\ldots,g_r)\mapsto c(g_1,\ldots,g_r)\otimes i\). Since \(I\) is finite-dimensional over \(\mathbb F_p\), a basis identifies the target cochain group with a finite direct sum of coefficient-\(\operatorname{ad}(\bar\rho)\) cochain groups, so this map is bijective in each degree. Its definition is basis-independent and it commutes with the differential, hence induces the isomorphism
\(H^2_{\mathrm{cts}}(G,\operatorname{ad}(\bar\rho)\otimes_{\mathbb F_p} I)
\cong H^2_{\mathrm{cts}}(G,\operatorname{ad}(\bar\rho))\otimes_{\mathbb F_p} I\).
Thus the obstruction has the coefficient space claimed in the Statement. [F2, step 1.1, step 2.2, algebra] ∎
