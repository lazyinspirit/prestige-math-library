---
id: thm-qa-28-matrix-function-error-cost
kind: theorem
title: Matrix-function transformation error and resource bound
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - alg-qa-28-qsvt-matrix-function
  - thm-qa-28-polynomial-matrix-function-error
  - lem-qa-24-qsvt-robustness-amplitude-bound
  - thm-qa-24-qsvt-singular-space-action
  - thm-qa-24-qsvt-query-count
  - thm-qa-22-lcu-block-encoding-correctness
  - thm-qa-23-qsp-synthesis-correctness
  - def-qa-24-singular-value-transform
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-spectral-resolution-and-polynomial-spectral-projections
  - def-functional-calculus-for-a-normal-endomorphism
  - prop-functional-calculus-for-normal-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-triangle-inequality-for-inner-product-norm
justified_by: []
axiom_use: "None; the proof uses finite spectral/SVD decompositions, the supplied QSVT robustness estimate, and finite LCU algebra."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 22, Theorem 17, Corollary 18, and Lemma 52"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §§29.2–29.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Statement

Use [[alg-qa-28-qsvt-matrix-function]] on a nonzero finite-dimensional space, with active set $J$ and $B=\sum_{j\in J}\gamma_j>0$. Let $A=H/\alpha$ be the target Hermitian contraction and let $\widetilde A$ be the contraction compressed from the supplied block encoding, with $\|\widetilde A-A\|\le\varepsilon_{BE}$. For each $j\in J$, let $d_j$ be its QSVT degree, let $\tau_j$ bound $|p_j(x)-g_j(\alpha x)/\gamma_j|$ on $\sigma(A)$, and let $\kappa_j$ bound the operator-norm deviation of its implemented QSVT block from the ideal singular-value transform $p_j^{\mathrm{SV}}(\widetilde A)$. This bound includes any polynomial error in numerical QSP phase generation, finite phase compilation, and signal-call implementation. Let $\kappa_{LCU}$ bound the projected-block deviation of the implemented LCU circuit from its exact LCU construction on those component unitaries. Then $B\ge\|f(H)\|$, so this is a valid $B$-block encoding, and its returned block $W_{00}$ satisfies
$$\left\|W_{00}-\frac{f(H)}{B}\right\|\le\frac1B\sum_{j\in J}\gamma_j\left(\tau_j+4d_j\sqrt{\varepsilon_{BE}}+\kappa_j\right)+\kappa_{LCU}.$$
If each phase list realizes its target $p_j$ exactly and the phase, signal-call, and LCU implementations are exact, the $\kappa$ bounds may all be taken to be zero. The scale $B$ is the supplied sum of component scales, not an asserted optimal normalization.

The component $j\in J$ uses exactly $d_j$ signal calls in its QSVT sequence, with the forward/inverse split and projector-reflection counts of [[thm-qa-24-qsvt-query-count]]. Inside a single LCU SELECT call, the maximum selected-component branch length is $\max_{j\in J} d_j$, while the implemented oracle-occurrence count is charged by the supplied SELECT circuit and may be the sum of separately controlled component counts; PREPARE, SELECT, inverse PREPARE, control logic, phase generation, compilation, ancillas, gates, and bit-time costs are separately charged according to their supplied implementations. No complexity bound for polynomial approximation or for exact-algebraic bit growth is implied.

## Facts & Assumptions

**Given:** The finite-dimensional Hermitian target, supplied scales and parity polynomials, exact or approximate block-encoding access, QSVT phase lists, and the implementation-error bounds stated above.

[F1] [[alg-qa-28-qsvt-matrix-function]]: omitted components have certified $g_j=0$; the active decomposition is $\bar f=\sum_{j\in J}c_jg_j$, with $|g_j|\le\gamma_j$, $p_j$ approximates $g_j(\alpha x)/\gamma_j$, and LCU coefficients are $c_j\gamma_j$ with normalization $B$.

[F2] [[thm-qa-28-polynomial-matrix-function-error]]: a scalar error bound on $\sigma(A)$ gives the same operator-norm bound for the corresponding finite spectral-calculus matrices.

[F3] [[lem-qa-24-qsvt-robustness-amplitude-bound]]: for contractions within operator distance $\varepsilon_{BE}$, a degree-$d_j$ QSVT transform changes by at most $4d_j\sqrt{\varepsilon_{BE}}$.

[F4] [[thm-qa-24-qsvt-singular-space-action]] and [[def-qa-24-singular-value-transform]]: the ideal phase sequence has the prescribed parity singular-value transform on each singular subspace, including the kernel.

[F5] [[thm-qa-22-lcu-block-encoding-correctness]]: exact LCU compression is the normalized weighted sum of component compressions.

[F6] [[thm-qa-23-qsp-synthesis-correctness]]: OP1 phase synthesis returns the specified exact scalar polynomial or a numerically certified approximation for each supplied bounded parity target; numerical deviation is included in $\kappa_j$.

[F7] [[thm-spectral-resolution-and-polynomial-spectral-projections]], [[def-functional-calculus-for-a-normal-endomorphism]], and [[prop-functional-calculus-for-normal-endomorphisms]]: a Hermitian matrix has an orthogonal eigenspace resolution and its scalar functions act by the corresponding eigenvalue values.

[F8] [[thm-qa-24-qsvt-query-count]]: a degree-$d_j$ sequence uses $d_j$ signal calls and the stated separate reflection, controlled-call, and phase-operation counts.

[F9] [[cor-triangle-inequality-for-inner-product-norm]] and [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: vector and operator action obey the triangle inequality and the operator norm is the supremum on unit vectors.

## Proof

1.1 On a Hermitian input $A$, each active parity singular-value transform in [F4] equals ordinary polynomial functional calculus. Indeed, for an eigenvector with eigenvalue $x>0$, choose its left and right singular vectors equal, so its transform coefficient is $p_j(x)$. For $x<0$, choose singular value $|x|$ and left vector the negative of the right vector; the coefficient is $-p_j(|x|)=p_j(x)$ when $p_j$ is odd, while for even parity it is $p_j(|x|)=p_j(x)$. At $x=0$, an odd polynomial vanishes and the even transform assigns $p_j(0)$ on the kernel. The spectral resolution [F7] and basis-independence in [F4] make these equalities independent of choices within degenerate eigenspaces. Also [F1] gives $|f(\lambda)|\le\sum_{j\in J}\gamma_j=B$ on $\sigma(H)$; apply [F2] to the zero polynomial and $f$ to obtain $\|f(H)\|\le B$. [F1, F2, F4, F7, given, algebra]

2.1 By [F2], $\|p_j(A)-g_j(H)/\gamma_j\|\le\tau_j$, since $A=H/\alpha$ and the scalar bound holds on its spectrum. By [F3]–[F4], replacing the exact signal block $A$ by $\widetilde A$ changes the ideal transform $p_j^{\mathrm{SV}}$ by at most $4d_j\sqrt{\varepsilon_{BE}}$; step 1.1 identifies the transform at $A$ with $p_j(A)$. The implemented component adds at most $\kappa_j$ by its definition, including numerical phase and signal implementation errors. For any unit vector $v$, the vector triangle inequality in [F9] bounds the action of the total difference by the sum of these three operator bounds; taking the supremum over unit $v$ gives $\|Y_j-g_j(H)/\gamma_j\|\le\tau_j+4d_j\sqrt{\varepsilon_{BE}}+\kappa_j$, where $Y_j$ is its actual top-left block. [F2, F3, F4, F6, F7, F9, step 1.1, given]

3.1 The exact LCU block for these $Y_j$ is $B^{-1}\sum_{j\in J}c_j\gamma_jY_j$ by [F5]; its actual circuit differs from that block by at most $\kappa_{LCU}$. The decomposition in [F1] gives $f(H)=\sum_{j\in J}c_jg_j(H)$ on the spectrum. For each unit vector $v$, apply the vector triangle inequality [F9] to the weighted sum of component errors from step 2.1 and the LCU implementation error; taking the supremum over $v$ gives the displayed operator-norm bound after multiplying each component bound by $\gamma_j/B$. [F1, F5, F9, step 2.1, given, algebra]

4.1 The exact signal-call count for component $j\in J$ is $d_j$ by [F8]; a SELECT branch invokes its designated component sequence, so its selected-component branch has at most $\max_{j\in J}d_j$ signal calls. The implemented SELECT circuit may contain the sum of separately controlled component occurrences; its actual oracle-occurrence count remains separately charged. The remaining resource coordinates are the declared preparation, inverse, control, coefficient, phase, reflection, compilation, and output costs in [F1], [F6], and [F8]; neither a degree count nor an exact phase list supplies those costs automatically. [F1, F6, F8, given, algebra] ∎
