---
id: ex-qftx-n4-su2-chiral-primary-dimension
kind: example
title: Conditional Dimension of the SU(2) Quadratic Chiral Primary
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 10
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-scft-and-frontier-examples
deps:
  - def-qftx-scft-protected-data
  - pthm-qftx-scft-chiral-primary-unitarity-bound
  - post-qftx-n4-super-yang-mills-model
dependency_roles:
  def-qftx-scft-protected-data: formulation-prerequisite
  pthm-qftx-scft-chiral-primary-unitarity-bound: physical-result
  post-qftx-n4-super-yang-mills-model: formulation-prerequisite
physical_scope: "Conditional scaling-dimension calculation for a nonzero scalar chiral primary in a unitary realization of the selected four-dimensional N=4 SU(2) model. No continuum SCFT construction or general protection-under-deformation theorem is asserted."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Supersymmetric Field Theory"
      url: "https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf"
      locator: "§4.4.2, printed pp. 128–129, for N=4 field content; §6.4.2, printed pp. 193–194, for the N=1 chiral dimension relation."
    - title: "Justin Kinney, Juan Maldacena, Shiraz Minwalla, and Suvrat Raju, An Index for 4 Dimensional Super Conformal Theories"
      url: "https://arxiv.org/pdf/hep-th/0510251v1"
      locator: "§4.1, printed pp. 16–19, for the N=4 Yang–Mills superconformal-letter representation and its stated calculation scope."
verification:
  precheck: pending
---

## Example

Use the selected N=4 SU(2) field data and natural units $c=\hbar=1$. Let $Z$ be the complex scalar component of the first canonical adjoint chiral superfield; its engineering mass dimension is one and its selected N=1 $U(1)_R$ charge is $2/3$. Suppose a proposed unitary SCFT realization supplies a nonzero scalar superconformal primary state $|\mathcal O\rangle$ associated with the renormalized composite $\mathcal O=\operatorname{Tr}_2(Z^2)$ in a prescription that preserves the exact selected $U(1)_R$ symmetry, and suppose the selected chiral-branch supercharge $Q$ from the SCFT data satisfies $Q|\mathcal O\rangle=0$. Then $\mathcal O$ has $R$ charge $4/3$ and scaling dimension exactly $2$. This is conditional shortening data for this specified operator state; it does not assert that the classical action constructs a continuum SCFT or that every scalar observable is protected.

## Example references

[David Tong, *Supersymmetric Field Theory*, §§4.4.2 and 6.4.2](https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf)

[Kinney, Maldacena, Minwalla, and Raju, *An Index for 4 Dimensional Super Conformal Theories*, §4.1](https://arxiv.org/pdf/hep-th/0510251v1)

## Facts & Assumptions

**Given:** The selected classical N=4 SU(2) field data, a proposed unitary SCFT realization supplying the named primary state, a renormalization prescription preserving its exact selected U(1)_R symmetry, annihilation by the selected positive-branch supercharge, and the local scalar-primary unitarity theorem.

[F1] [[post-qftx-n4-super-yang-mills-model]]: the chosen global group is SU(2), the chiral superfields are adjoint-valued, and the canonical fields are obtained from the connection-normalized fields by division by $g$.

[F2] [[def-qftx-scft-protected-data]]: the selected N=1 $U(1)_R$ assigns charge $2/3$ to each adjoint chiral superfield.

[F3] [[pthm-qftx-scft-chiral-primary-unitarity-bound]]: if a scalar superconformal primary has $r\ge0$ and is annihilated by the selected chiral-branch supercharge $Q$, then its scaling dimension is $d=3r/2$.

[A1] In the assumed quantum realization, $\mathcal O=\operatorname{Tr}_2(Z^2)$ in the chosen renormalization prescription corresponds to a nonzero scalar superconformal primary state and $Q|\mathcal O\rangle=0$ for the selected chiral-branch supercharge; the prescription preserves the exact selected $U(1)_R$ symmetry. This is a hypothesis of the example, not a consequence of the classical postulate.

## Verification

1.1 For a gauge transformation $U\in SU(2)$, $(UZU^{-1})^2=UZ^2U^{-1}$. For finite matrices, $\operatorname{Tr}_2(AB)=\sum_{i,j}A_{ij}B_{ji}=\sum_{i,j}B_{ji}A_{ij}=\operatorname{Tr}_2(BA)$, so $\operatorname{Tr}_2(UZ^2U^{-1})=\operatorname{Tr}_2(Z^2U^{-1}U)=\operatorname{Tr}_2(Z^2)$. Under an $R$ rotation by $\alpha$, $Z\mapsto e^{2i\alpha/3}Z$, hence $Z^2\mapsto e^{4i\alpha/3}Z^2$ and the linear trace has charge $4/3$. [given, F1, F2, A1, algebra]

2.1 By step 1.1, the state has $r_{\mathcal O}=4/3>0$. The positive-branch hypothesis in [F3] therefore applies to the nonzero primary in [A1], giving $d_{\mathcal O}=\frac32\cdot\frac43=2$. This is a conditional representation-theoretic deduction; the engineering dimension of the classical composite is not being used as a substitute for the scaling-dimension proof. [given, F3, A1, step 1.1, algebra] ∎
