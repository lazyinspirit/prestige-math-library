---
id: thm-qa-24-qsvt-error-and-resource-bound
kind: theorem
title: QSVT robustness, approximation error, and resources
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - thm-qa-24-qsvt-singular-space-action
  - def-qa-24-singular-value-transform
  - def-qa-22-block-encoding
  - def-qa-24-pue-svd-data
  - def-qc-circuit-cost-model
  - lem-qa-24-qsvt-robustness-amplitude-bound
  - thm-qa-24-qsvt-query-count
  - lem-qa-24-singular-transform-basis-independence
  - thm-singular-value-decomposition
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-triangle-inequality-for-inner-product-norm
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - prop-adjoint-algebra
  - def-orthogonal-projection
  - lem-pythagorean-theorem-and-finite-orthogonal-sums
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
axiom_use: "None; the proof uses finite SVDs, operator-norm estimates, and finite circuit products."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemmas 22–23 and Lemma 19"
      url: https://arxiv.org/pdf/1806.01838
      locator: "PDF pp. 19–25."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §§29.2–29.3"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Printed pp. 144–147; PDF pp. 152–155."
---

## Statement

Let $A$ be a finite square or rectangular matrix with a declared isometric padding $\widehat A$, and let $\alpha>0$ satisfy $\alpha\ge\|A\|_{\mathrm{op}}$. Let $B$ be the exact compressed PUE block of the supplied input unitary and assume

$$\|B-\widehat A/\alpha\|_{\mathrm{op}}\le\varepsilon_{\mathrm{BE}}.$$

Let $P$ be the degree-$d$ parity polynomial of an admissible QSVT phase sequence, and let $f$ have the same parity. Put $S:=\{0\}\cup\{\sigma_j:\sigma_j>0\text{ is a singular value of }\widehat A/\alpha\}$, so zero is included even when the two matrix dimensions differ. If $\sup_{\sigma\in S}|P(\sigma)-f(\sigma)|\le\eta_{\mathrm{poly}}$, and the implemented phase operation at slot $\ell$ is a unitary within operator-norm error $\zeta_\ell$ of its ideal operation, then the implemented compressed block $\widetilde B$ satisfies

$$\|\widetilde B-f^{\mathrm{SV}}(\widehat A/\alpha)\|_{\mathrm{op}}\le\eta_{\mathrm{poly}}+4d\sqrt{\varepsilon_{\mathrm{BE}}}+\sum_{\ell}\zeta_\ell.$$

The exact sequence uses $d$ calls alternating between $U$ and $U^*$, $d+1$ projector-phase operations, and the reflection and one-qubit resources in [[thm-qa-24-qsvt-query-count]]. A real-polynomial control wrapper has its separately listed controlled gates. Matrix-data access, block-encoding construction, inverse and controlled access, phase-list generation, finite-gate compilation, and classical bit costs are charged through their declared interfaces; no cost follows from a bare matrix.

## Facts & Assumptions

**Given:** A normalized block encoding, its finite PUE compression, an admissible degree-$d$ phase sequence, a uniform scalar approximation bound, and unitary phase implementations with the stated errors.

[F1] [[def-qa-22-block-encoding]]: an $(\alpha,a,\varepsilon)$ block encoding has normalized compression within $\varepsilon$ of the declared padded target divided by $\alpha$, with $\alpha\ge\|A\|_{\mathrm{op}}$.

[F2] [[def-qa-24-singular-value-transform]]: odd and even singular-value transforms are defined by their SVD coefficients, including the even kernel term.

[F3] [[lem-qa-24-qsvt-robustness-amplitude-bound]]: for contractions $C,D$, $\|P^{\mathrm{SV}}(C)-P^{\mathrm{SV}}(D)\|_{\mathrm{op}}\le4d\sqrt{\|C-D\|_{\mathrm{op}}}$.

[F4] [[thm-qa-24-qsvt-query-count]]: the exact sequence has $d$ signal calls, $d+1$ phase slots, and the corresponding right/left reflection counts.

[F5] [[def-qc-circuit-cost-model]]: oracle queries, controlled calls, gates, depth, width, ancillas, classical generation, and precision are separate cost coordinates.

[F6] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum action on unit vectors.

[F7] [[cor-triangle-inequality-for-inner-product-norm]]: the vector norm satisfies the triangle inequality.

[F8] [[thm-singular-value-decomposition]]: an SVD supplies complete orthonormal right and left singular bases and the positive-term formula.

[F9] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: compatible finite-dimensional maps satisfy $\|ST\|_{\mathrm{op}}\le\|S\|_{\mathrm{op}}\|T\|_{\mathrm{op}}$.

[F10] [[thm-qa-24-qsvt-singular-space-action]]: the ideal QSVT sequence for block $B$ compresses to $P^{\mathrm{SV}}(B)$.

[L1] [[def-qa-24-pue-svd-data]]: a projected-unitary compression is a contraction.

[L2] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: each isometric padding map preserves vector norms.

[L3] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Tx,y\rangle=\langle x,T^*y\rangle$.

[L4] [[prop-adjoint-algebra]]: adjoints reverse products and preserve sums.

[L5] [[def-orthogonal-projection]]: a vector and its projection-complement components are orthogonal.

[L6] [[lem-pythagorean-theorem-and-finite-orthogonal-sums]]: orthogonal components have squared norms that add.

## Proof

1.1 Let $E_{\rm in},E_{\rm out}$ be the declared isometric padding maps in [F1], so $\widehat A=E_{\rm out}AE_{\rm in}^*$ and $E_{\rm in}^*E_{\rm in}=I$. Put $P_{\rm in}=E_{\rm in}E_{\rm in}^*$. By [L3]–[L4], $P_{\rm in}^*=P_{\rm in}=P_{\rm in}^2$; [L5] makes it an orthogonal projection, and [L6] gives $\|P_{\rm in}z\|\le\|z\|$. The adjoint identity [L3] then yields $\|E_{\rm in}^*z\|^2=\langle P_{\rm in}z,z\rangle=\|P_{\rm in}z\|^2\le\|z\|^2$. Since both padding maps preserve norms by [L2], [F9] gives $\|\widehat A\|_{\rm op}=\|E_{\rm out}AE_{\rm in}^*\|_{\rm op}\le\|A\|_{\rm op}$; conversely $\widehat A E_{\rm in}x=E_{\rm out}Ax$ for every $x$, so taking maxima over unit vectors gives equality. Thus $A_0:=\widehat A/\alpha$ is a contraction. The PUE compression $B$ is a contraction by [L1], and [F1] gives $\|B-A_0\|_{\rm op}\le\varepsilon_{\rm BE}$. Applying [F3] gives $\|P^{\mathrm{SV}}(B)-P^{\mathrm{SV}}(A_0)\|_{\rm op}\le4d\sqrt{\varepsilon_{\rm BE}}$. [F1, F3, F6, F9, L1, L2, L3, L4, L5, L6, given, algebra]

1.2 Choose the SVD bases of $A_0$ from [F8]. For odd parity, the difference $P^{\mathrm{SV}}(A_0)-f^{\mathrm{SV}}(A_0)$ sends each right singular vector $v_j$ to $(P(\sigma_j)-f(\sigma_j))u_j$ and annihilates $\ker A_0$. Orthonormality gives, for $x=\sum_j c_jv_j+x_0$, $\|(P^{\mathrm{SV}}-f^{\mathrm{SV}})x\|^2=\sum_j|P(\sigma_j)-f(\sigma_j)|^2|c_j|^2\le\eta_{\mathrm{poly}}^2\|x\|^2$. For even parity the same bound follows by diagonal action on the right singular basis, including $P(0)-f(0)$ on the kernel. Taking the maximum over unit vectors by [F6] yields $\|P^{\mathrm{SV}}(A_0)-f^{\mathrm{SV}}(A_0)\|_{\mathrm{op}}\le\eta_{\mathrm{poly}}$. [F2, F6, F8, given, algebra]

1.3 Replace the ideal phase operations one slot at a time by their implemented unitaries. The product difference is a sum of $d+1$ terms, each containing one phase difference and otherwise unitary factors. By [F9], multiplying by those unitary factors preserves or bounds the operator norm by their norm $1$; [F7] and [F6] then give $\|\widetilde U_\Phi-U_\Phi\|_{\mathrm{op}}\le\sum_\ell\zeta_\ell$. Compression by the input and output projections is contractive, so the same upper bound holds for the compressed blocks. The exact ideal compressed block is $P^{\mathrm{SV}}(B)$ by [F10]. [F4, F5, F6, F7, F9, F10, given, algebra]

2.1 The implemented block differs from $f^{\mathrm{SV}}(A_0)$ by the sum of its phase-implementation, input-block, and scalar-approximation differences. Applying the triangle inequality to steps 1.1, 1.2, and 1.3 yields $\|\widetilde B-f^{\mathrm{SV}}(A_0)\|_{\mathrm{op}}\le\eta_{\mathrm{poly}}+4d\sqrt{\varepsilon_{\mathrm{BE}}}+\sum_\ell\zeta_\ell$. The resource statement follows from [F4]–[F5]; each absent access, synthesis, data-loading, or compilation operation remains a separate supplied cost. [F4, F5, F7, step 1.1, step 1.2, step 1.3] ∎
