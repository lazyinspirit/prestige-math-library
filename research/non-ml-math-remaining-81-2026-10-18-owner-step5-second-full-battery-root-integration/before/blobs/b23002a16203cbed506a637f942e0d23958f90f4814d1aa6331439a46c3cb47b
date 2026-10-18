---
id: lem-it-finite-povm-measurement-channel
kind: lemma
title: A finite POVM defines a classical-output quantum channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [ def-qc-povm-and-outcome-law, def-qc-register-and-computational-basis, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-non-negative-square-root-exists-and-is-unique, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-real-and-complex-inner-product-space, def-trace-of-an-endomorphism, def-qc-quantum-channel, def-qc-kraus-representation, thm-qc-kraus-choi-equivalence, thm-qc-trace-preserving-kraus-normalization, thm-trace-of-ab-equals-trace-of-ba, thm-adjoint-exists-and-is-unique-in-finite-dimension ]
aliases: [ lem-it-finite-povm-outcome-map-is-cptp ]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §2.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.9.2"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space and let $(E_y)_{y\in\Omega}$ be a finite POVM on $H$, where $\Omega=\{y_0,\ldots,y_{m-1}\}$ is a fixed enumeration of its nonempty outcome set. Let $K=\mathbb C^m$ with standard orthonormal basis $(f_0,\ldots,f_{m-1})$, and set $\Pi_jz:=\langle z,f_j\rangle f_j$, the rank-one projection onto $f_j$ under the root linear-first convention. The map $\mathcal M_E(X):=\sum_{j<m}\operatorname{tr}(XE_{y_j})\Pi_j$ is a quantum channel from $H$ to $K$. For the indexed register $\mathbb C^\Omega$ with orthonormal basis $|y\rangle$, the unitary identification $Jf_j=|y_j\rangle$ gives the equivalent channel $X\mapsto\sum_{y\in\Omega}\operatorname{tr}(E_yX)|y\rangle\langle y|=J\mathcal M_E(X)J^*$. Thus either finite outcome-register convention is covered.

## Facts & Assumptions

**Given:** The space $H$, the finite POVM, its enumeration, and the output register $K$ in the Statement.

[F1] [[def-qc-povm-and-outcome-law]]: each $E_y$ is non-negative and $\sum_yE_y=I_H$; the outcome weight on a state $\rho$ is $\operatorname{tr}(\rho E_y)$.

[F2] [[thm-non-negative-square-root-exists-and-is-unique]]: every non-negative operator $E_y$ has a non-negative square root $E_y^{1/2}$.

[F3] [[def-real-and-complex-inner-product-space]]: the inner product is linear in its first argument and conjugate-linear in its second.

[F4] [[def-qc-kraus-representation]]: a finite Kraus family represents $\Phi$ when $\Phi(X)=\sum_aK_aXK_a^*$ for every input operator.

[F5] [[thm-qc-kraus-choi-equivalence]]: a finite Kraus representation implies complete positivity.

[F6] [[thm-qc-trace-preserving-kraus-normalization]]: a finite Kraus representation is trace-preserving exactly when $\sum_aK_a^*K_a=I_H$.

[F7] [[thm-trace-of-ab-equals-trace-of-ba]]: the trace is cyclic for compatible finite-dimensional maps.

[F8] [[def-qc-quantum-channel]]: a finite-dimensional quantum channel is a complex-linear completely positive trace-preserving map on the full operator space.

[F9] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: the adjoint satisfies $\langle Kx,z\rangle=\langle x,K^*z\rangle$.

[F10] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis.

[F11] [[def-qc-register-and-computational-basis]]: the specified output basis $(f_j)$ is orthonormal.

[F12] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: finite-dimensional linear maps have unique adjoints.

## Proof

1.1 The adjoints used below exist uniquely by [F12]. Choose an ordered orthonormal basis $(e_k)_{k<d}$ of $H$ using [F10]. For each $j<m$ and $k<d$, define $K_{jk}:H\to K$ by $K_{jk}x=f_j\langle E_{y_j}^{1/2}x,e_k\rangle$. This is linear by the root convention in [F3]. Set $P_kx:=\langle x,e_k\rangle e_k$. The adjoint identity [F9] and the output-basis orthonormality [F11] give $K_{jk}^*z=\langle z,f_j\rangle E_{y_j}^{1/2}e_k$ and therefore $K_{jk}^*K_{jk}=E_{y_j}^{1/2}P_kE_{y_j}^{1/2}$. [given, F12, F2, F3, F9, F10, F11, construct, choose]

2.1 Since $(e_k)$ is a basis, $\sum_kP_k=I_H$. Using step 1.1 and the completeness relation in [F1], $\sum_{j,k}K_{jk}^*K_{jk}=\sum_jE_{y_j}^{1/2}(\sum_kP_k)E_{y_j}^{1/2}=\sum_jE_{y_j}=I_H$. Thus the finite family is trace-preserving by [F6]. [given, F1, F2, F6, step 1.1, algebra]

3.1 For each fixed $j$, the $f_j$ output diagonal entry of $\sum_kK_{jk}XK_{jk}^*$ is $\sum_k\langle E_{y_j}^{1/2}XE_{y_j}^{1/2}e_k,e_k\rangle=\operatorname{tr}(E_{y_j}^{1/2}XE_{y_j}^{1/2})$. By trace cyclicity [F7], this is $\operatorname{tr}(XE_{y_j})$, and all off-diagonal output entries vanish because each $K_{jk}$ has range in $\mathbb C f_j$ and [F11] makes the output basis orthonormal. Summing over $j$ yields $\mathcal M_E$, so it has the finite Kraus representation [F4] and is completely positive by [F5]. Together with steps 1.1 and 2.1 it is a quantum channel by [F8]. The coordinate map $Jf_j=|y_j\rangle$ is unitary because it carries one orthonormal basis onto the other; replacing each Kraus map by $JK_{jk}$ preserves its normalization and complete positivity by [F5]–[F6]. The conjugated output is $\sum_j\operatorname{tr}(XE_{y_j})|y_j\rangle\langle y_j|=\sum_y\operatorname{tr}(E_yX)|y\rangle\langle y|$ by [F7], proving the indexed-register clause. [given, F4, F6, F5, F7, F8, F11, step 1.1, step 2.1, algebra] ∎

