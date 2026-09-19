---
id: lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces
kind: lemma
title: Spectral convolution eigenspaces are finite-dimensional and invariant
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact, thm-hilbert-adjoint-properties, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-axiom-of-choice, def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group, prop-integration-against-haar-is-invariant-under-translations-and-conjugation]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3, the finite-dimensional invariant subspaces produced by T_k"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VII §1"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact Lie group and $k\in C(G)$.

1. The Hilbert adjoint of $T_k$ is $T_{k^*}$ with $k^*(x)=\overline{k(x^{-1})}$,
   and $T_k$ commutes with every left translation $L_g$.
2. If $k^*=k$, then $T_k$ is compact self-adjoint, its nonzero eigenspaces are
   finite-dimensional and left-invariant, and the closed span of the
   eigenspaces is the closure of the range of $T_k$.
3. For arbitrary $k$ the operator $T_k^*T_k$ is compact, positive and
   self-adjoint, and its nonzero eigenspaces have the same properties.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ with normalized Haar measure, and $k\in C(G)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the compactness and spectral theory cited.

[L1] $T_k$ is a compact operator on $L^2(G)$ with kernel $K(x,y)=k(x^{-1}y)$; the left and right regular representations are unitary and satisfy $L_gR_h=R_hL_g$ ([[lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact]], [[def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group]]).

[L2] Hilbert adjoints satisfy $(TS)^*=S^*T^*$, $T^{**}=T$ and $\|T^*T\|=\|T\|^2$; for a compact self-adjoint operator the set of nonzero eigenvalues consists of real numbers with finite-dimensional eigenspaces and the closed span of the eigenspaces is the orthogonal complement of the kernel, equal to the closure of the range ([[thm-hilbert-adjoint-properties]], [[thm-spectral-theorem-for-compact-self-adjoint-operators]]).

[L3] Integrals over $G$ are invariant under left translation, and the adjoint kernel satisfies the change-of-variables identity used below ([[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]]); Fubini's theorem applies to the integrable kernels occurring in the inner-product calculation ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 For $f,h\in L^2(G)$ the change of variables $x\mapsto yz^{-1}$ and translation invariance of the measure give $\langle T_kf,h\rangle=\int_G\int_Gk(x^{-1}y)f(y)\overline{h(x)}\,dy\,dx=\int_Gf(y)\overline{\int_G\overline{k(y^{-1}z)}h(z)\,dz}\,dy=\langle f,T_{k^*}h\rangle$, so $T_k^*=T_{k^*}$; here $k^*(y)=\overline{k(y^{-1})}$. [L1, L3]

1.2 The operator commutes with left translations: substituting $y=gu$ in the convolution integral gives $(L_gT_kf)(x)=\int_Gk((g^{-1}x)^{-1}y)f(y)\,dy=\int_Gk(x^{-1}y)f(g^{-1}y)\,dy=(T_kL_gf)(x)$, so $L_gT_k=T_kL_g$. [L1, L3]

2.1 If $k=k^*$, then $T_k$ is compact by [L1] and self-adjoint by step 1.1; the spectral theorem [L2] gives that the nonzero eigenvalues are real with finite-dimensional eigenspaces and that the closed span of the eigenspaces is the closure of the range. Every eigenspace is invariant under $L_g$ because $L_g$ commutes with $T_k$ by step 1.2 and is invertible. [L2, step 1.1, step 1.2]

3.1 For arbitrary $k$, the operator $T_k^*T_k$ is compact (composition of a compact operator with a bounded one), positive and self-adjoint by [L2], and step 2.1 applies to it with the same left-invariance conclusion, since both $T_k$ and $T_k^*=T_{k^*}$ commute with left translations by step 1.2. [A1, L1, L2, step 1.1, step 1.2, step 2.1]∎
