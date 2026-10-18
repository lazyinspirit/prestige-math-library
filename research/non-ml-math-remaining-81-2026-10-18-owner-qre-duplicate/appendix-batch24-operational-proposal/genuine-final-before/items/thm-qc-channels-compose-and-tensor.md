---
id: thm-qc-channels-compose-and-tensor
kind: theorem
title: "Finite-dimensional channels compose and tensor"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-and-complex-inner-product-space, prop-adjoint-algebra, def-qc-quantum-channel, def-qc-kraus-representation, def-qc-tensor-map, lem-qc-tensor-products-of-operator-matrix-units-form-a-basis, thm-qc-kraus-choi-equivalence, thm-qc-kraus-map-completely-positive, thm-qc-trace-preserving-kraus-normalization, thm-qc-tensor-map-composition-and-adjoint]
justified_by: []
proof_strategy: direct
dependency_level: 7
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §§2.2.1–2.2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §§3.2–3.3"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $\Phi:\mathcal L(H)\to\mathcal L(K)$ and
$\Psi:\mathcal L(K)\to\mathcal L(L)$ be finite-dimensional quantum channels.
Then $\Psi\circ\Phi$ is a channel. If
$\Theta:\mathcal L(H')\to\mathcal L(K')$ is another finite-dimensional
channel, the tensor map
$\Phi\otimes\Theta:\mathcal L(H\otimes H')\to\mathcal L(K\otimes K')$
is the linear map specified on product matrix units by
$(\Phi\otimes\Theta)(E_{uv}\otimes F_{st})=
\Phi(E_{uv})\otimes\Theta(F_{st})$. The basis result
[[lem-qc-tensor-products-of-operator-matrix-units-form-a-basis]] makes this
map well-defined and unique. It is also a channel, with the displayed factor
order.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces and channels
$\Phi,\Psi,\Theta$ with the domains and codomains in the Statement.

[F1] [[def-qc-quantum-channel]]: each channel is completely positive and
trace-preserving.

[F2] [[thm-qc-kraus-choi-equivalence]]: every completely positive map has a
finite Kraus representation.

[F3] [[thm-qc-trace-preserving-kraus-normalization]]: a Kraus representation
is trace-preserving exactly when its adjoint-square sum is the identity.

[F4] [[thm-qc-kraus-map-completely-positive]]: every finite Kraus sum is
completely positive.

[F5] [[def-qc-kraus-representation]]: the family $(A_i)$ represents $\Phi$
when $\Phi(X)=\sum_iA_iXA_i^\dagger$, and likewise for the other maps.

[F6] [[def-qc-tensor-map]]: tensor maps act on elementary tensors by applying
the factor maps in order.

[F7] [[thm-qc-tensor-map-composition-and-adjoint]]: tensor maps preserve
composition and identities, and the tensor adjoint is the tensor of the
adjoints.

[F8] [[lem-qc-tensor-products-of-operator-matrix-units-form-a-basis]]: the
product matrix units form a basis of each operator space on a tensor product.

[F9] [[prop-adjoint-algebra]]: for compatible maps, the adjoint reverses
composition, so $(B_jA_i)^\dagger=A_i^\dagger B_j^\dagger$.

## Proof


1.1 By [F1] and [F2], choose finite Kraus families $(A_i)$ for $\Phi$ and $(B_j)$ for $\Psi$. By [F9], $(B_jA_i)^\dagger=A_i^\dagger B_j^\dagger$ for each $i,j$, so for every $X\in\mathcal L(H)$, $(\Psi\circ\Phi)(X)=\sum_{j,i}(B_jA_i)X(B_jA_i)^\dagger$. Thus the composite has a finite Kraus representation and is completely positive by [F4]. By [F1] and [F3], $\sum_iA_i^\dagger A_i=I_H$ and $\sum_jB_j^\dagger B_j=I_K$. Therefore $\sum_{j,i}(B_jA_i)^\dagger(B_jA_i) =\sum_iA_i^\dagger(\sum_jB_j^\dagger B_j)A_i =\sum_iA_i^\dagger A_i=I_H$. By [F3] the composite is trace-preserving, hence a channel by [F1]. [given, F1, F2, F3, F4, F5, F9, algebra, choose]

1.2 By [F1] and [F2], choose finite Kraus families $(A_i)$ and $(C_j)$ for $\Phi$ and $\Theta$. For any product matrix unit $E_{uv}\otimes F_{st}$, [F6] and [F7] give $\sum_{i,j}(A_i\otimes C_j)(E_{uv}\otimes F_{st}) (A_i\otimes C_j)^\dagger =(\sum_iA_iE_{uv}A_i^\dagger)\otimes (\sum_jC_jF_{st}C_j^\dagger) =\Phi(E_{uv})\otimes\Theta(F_{st}) =(\Phi\otimes\Theta)(E_{uv}\otimes F_{st})$ by the definition in the Statement. By [F8] these product matrix units form a basis of $\mathcal L(H\otimes H')$; linearity therefore gives a finite Kraus representation of $\Phi\otimes\Theta$ on every input operator. Hence this tensor map is completely positive by [F4]. [given, F1, F2, F4, F5, F6, F7, F8, algebra, choose]

2.1 By [F1] and [F3], $\sum_iA_i^\dagger A_i=I_H$ and $\sum_jC_j^\dagger C_j=I_{H'}$. Using [F7], $\sum_{i,j}(A_i\otimes C_j)^\dagger(A_i\otimes C_j) =(\sum_iA_i^\dagger A_i)\otimes(\sum_jC_j^\dagger C_j) =I_H\otimes I_{H'}=I_{H\otimes H'}$. Thus [F3] makes the tensor map trace-preserving, and [F4] gives complete positivity; it is a channel by [F1]. Empty Kraus families are covered: their normalization equals the input identity only when that input space is zero, where all displayed sums and identities are empty or zero. [given, F1, F3, F4, F7, step 1.2, algebra] ∎

