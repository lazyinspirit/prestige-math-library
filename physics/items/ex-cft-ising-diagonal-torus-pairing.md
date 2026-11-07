---
id: ex-cft-ising-diagonal-torus-pairing
kind: example
title: The diagonal Ising torus pairing
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: mathematics
library: mathematics
deps:
  - def-cft-modular-invariant-character-pairing
  - thm-cft-strongly-rational-character-modularity
dependency_roles:
  def-cft-modular-invariant-character-pairing: mathematical-premise
  thm-cft-strongly-rational-character-modularity: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: Section 7.5, printed pages 95–100; section 9.6, printed pages 157–159.
    - title: Yi-Zhi Huang, Vertex operator algebras and the Verlinde conjecture
      url: https://arxiv.org/pdf/math/0406291v3
      locator: Section 1 and Theorem 5.5, PDF pages 2–4 and 55–56, for the general chiral conventions; no general theorem is inferred from this example.
---

## Example

For the three Ising chiral character labels $0,\frac12,\frac1{16}$, with $c=\frac12$, define

$$S=\frac12\begin{pmatrix}1&1&\sqrt2\\1&1&-\sqrt2\\\sqrt2&-\sqrt2&0\end{pmatrix},\qquad T=\operatorname{diag}\!\left(e^{-\pi i/24},e^{23\pi i/24},e^{\pi i/12}\right),$$

in that label order. Under the source modular actions with these matrices, the diagonal pairing

$$Z(\tau,\bar\tau)=|\chi_0(\tau)|^2+|\chi_{1/2}(\tau)|^2+|\chi_{1/16}(\tau)|^2$$

is invariant under the genus-one $S$ and $T$ generators. This calculation verifies a character-pairing identity only; it does not construct a full local CFT.

## Example references

[[def-cft-modular-invariant-character-pairing]]

[[thm-cft-strongly-rational-character-modularity]]

## Facts & Assumptions

**Given:** The Ising character vector with labels ordered $0,\frac12,\frac1{16}$, the stated $S,T$ transformation laws, and the diagonal multiplicity matrix $M=I_3$.

[F1] [[def-cft-modular-invariant-character-pairing]]: in the diagonal left/right convention, the pairing is invariant when $\overline{\rho(g)}^{\,T}M\rho(g)=M$ for $g=S,T$.

[F2] [[thm-cft-strongly-rational-character-modularity]]: the strongly rational character theorem uses the finite ordinary-character vector and its actual modular matrices.

[A1] The Ising chiral character vector transforms with the displayed real $S$ matrix. Its $T$ phases are $e^{2\pi i(h-c/24)}$ for $h=0,\frac12,\frac1{16}$ and $c=\frac12$, giving the displayed diagonal matrix. These explicit source data are inputs to this matrix verification.

## Verification

1.1 The rows of $S$ are $r_0=(\frac12,\frac12,\frac1{\sqrt2})$, $r_{1/2}=(\frac12,\frac12,-\frac1{\sqrt2})$, and $r_{1/16}=(\frac1{\sqrt2},-\frac1{\sqrt2},0)$. Their squared norms are $1,1,1$; their pairwise inner products are $0,0,0$. Thus $S^T S=I_3$, and $S$ is real, so $\overline S^{\,T}M S=I_3$. [given, A1, algebra]

1.2 Each diagonal entry of $T$ has unit modulus, since its exponent is $2\pi i$ times the real number $h-c/24$. Therefore $\overline T^{\,T}M T=I_3$. [given, A1, algebra]

2.1 The general character-modularity interface in [F2] identifies the role of these matrices; [A1] supplies the specific Ising transformation laws and is not derived from [F2] here. The two identities from steps 1.1 and 1.2 are exactly the $S,T$ equations in [F1]. Since $S,T$ generate the modular group, the diagonal pairing is invariant under the generated genus-one modular action. The calculation remains conditional on [A1] and establishes no full-CFT construction. [given, F1, F2, A1, step 1.1, step 1.2, algebra] ∎

## Proof status

The finite matrix verification is complete. The explicit Ising character transformation laws are cited source inputs; this example does not derive the general modularity theorem or establish a full local theory.
