---
id: ex-qftmath-dirac-rest-projector
kind: example
title: Dirac rest projections and two spin sectors
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qft-dirac-projections
  - lem-qft-dirac-projection-matrices
dependency_roles:
  def-qft-dirac-projections: mathematical-premise
  lem-qft-dirac-projection-matrices: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 4, plane-wave solutions
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page author-hosted notes; positive and negative energy spinor solutions in Chapter 4.
    - title: Niklas Beisert, Quantum Field Theory I, ETH Zürich 2025 HS complete lecture notes
      url: https://people.phys.ethz.ch/~nbeisert/lectures/QFT1-25HS-Notes.pdf
      locator: Complete 194-page official course notes; Chapter 5 §§5.1, 5.2, 5.4–5.6, printed 5.1–5.6 and 5.10–5.18, for Clifford algebra, spinor covariance, Hamiltonian form and fermionic quantization. The exact local conventions and domains are proved in the library.
---

## Example

Take the fiber matrices of [[def-qft-dirac-projections]] at $\mathbf k=0$ with $\mu>0$. Then $\omega=\mu$ and the positive and negative matrix eigenspaces each have dimension two. The coordinate spinors displayed below are vectors in the finite-dimensional fiber $\mathbb C^4$; they are not point-supported, normalizable vectors in the continuum Hilbert space $\mathcal H_D$. For $\mu=0$, the point $(\omega,\mathbf k)=(0,0)$ is the omitted mass-shell apex, so this example makes no massless rest-state claim.

## Facts & Assumptions

**Given:** $\mu>0$, $\mathbf k=0$, the fixed Pauli-block matrices and energy projections, and the ordinary Hermitian inner product on $\mathbb C^4$.

[F1] $\beta=\operatorname{diag}(I_2,-I_2)$, $h_D(\mathbf k)=\boldsymbol\alpha\cdot\mathbf k+\beta\mu$, $\omega=\sqrt{|\mathbf k|^2+\mu^2}$, and $P_\pm=(I_4\pm h_D/\omega)/2$. [[def-qft-dirac-projections]]

[F2] $P_\pm$ are complementary orthogonal projections of rank two. [[lem-qft-dirac-projection-matrices]]

## Verification

**Given:** The data and matrix conventions in [F1]–[F2].

1.1 At $\mathbf k=0$, the definition gives $h_D(0)=\beta\mu$ and $\omega(0)=\mu$. Since $\mu>0$, $h_D(0)/\omega(0)=\beta$, so $P_+(0)=(I_4+\beta)/2=\begin{pmatrix}I_2&0\\0&0\end{pmatrix}$ and $P_-(0)=(I_4-\beta)/2=\begin{pmatrix}0&0\\0&I_2\end{pmatrix}$. [F1, given, algebra]

2.1 The first two standard coordinate vectors $e_1,e_2$ span $\operatorname{ran}P_+(0)$ and the last two $e_3,e_4$ span $\operatorname{ran}P_-(0)$; they are orthonormal in $\mathbb C^4$. Each displayed range therefore has dimension two, agreeing with the general projection result [F2]. [F1, F2, step 1.1, algebra] ∎
