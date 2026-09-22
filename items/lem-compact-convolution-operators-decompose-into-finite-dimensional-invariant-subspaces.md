---
id: lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces
kind: lemma
title: Spectral convolution eigenspaces are finite-dimensional and invariant
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact, thm-hilbert-adjoint-properties, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-axiom-of-choice, def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group, prop-integration-against-haar-is-invariant-under-translations-and-conjugation]
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
   self-adjoint; its nonzero eigenspaces are finite-dimensional and left-invariant,
   and their closed span is $\overline{\operatorname{ran}(T_k^*T_k)}=(\ker(T_k^*T_k))^\perp$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ with normalized Haar measure, and $k\in C(G)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the compactness and spectral theory cited.

[L1] $T_k$ is a compact operator on $L^2(G)$ with kernel $K(x,y)=k(x^{-1}y)$; the left and right regular representations are unitary and satisfy $L_gR_h=R_hL_g$ ([[lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact]], [[def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group]]).

[L2] Hilbert adjoints satisfy $(TS)^*=S^*T^*$, $T^{**}=T$ and $\|T^*T\|=\|T\|^2$; for a compact self-adjoint operator the set of nonzero eigenvalues consists of real numbers with finite-dimensional eigenspaces and the closed span of the eigenspaces is the orthogonal complement of the kernel, equal to the closure of the range ([[thm-hilbert-adjoint-properties]], [[thm-spectral-theorem-for-compact-self-adjoint-operators]]).

[L3] Integrals are invariant under left translation ([[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]]), and Fubini applies to integrable functions on the finite product measure space ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[L4] The complex $L^2$ pairing is linear in its first variable and satisfies Cauchy–Schwarz ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

## Proof

**Proof technique:** direct.

1.1 Since Haar measure has mass one, [L4] applied to $|f|,1$ gives $\|f\|_1\le\|f\|_2$, and similarly for $h$. Thus $k(x^{-1}y)f(y)\overline{h(x)}$ is absolutely integrable, with integral of its modulus at most $\|k\|_\infty\|f\|_1\|h\|_1$. Fubini gives $\langle T_kf,h\rangle=\int_G f(y)\overline{\int_G\overline{k(x^{-1}y)}h(x)\,dx}\,dy=\langle f,T_{k^*}h\rangle$, because $k^*(y^{-1}x)=\overline{k(x^{-1}y)}$. The continuous function $k^*$ defines a bounded operator by [L1], so uniqueness of the adjoint gives $T_k^*=T_{k^*}$. No substitution reversing the two kernel arguments is made. [A1, L1, L2, L3, L4]

1.2 For $g\in G$, $(L_gT_kf)(x)=\int_G k(x^{-1}gy)f(y)\,dy$. Substituting $u=gy$, using left invariance, gives $\int_G k(x^{-1}u)f(g^{-1}u)\,du=(T_kL_gf)(x)$. Hence $L_gT_k=T_kL_g$. [L1, L3]

2.1 If $k=k^*$, step 1.1 makes $T_k$ self-adjoint. Compactness [L1] and the spectral theorem [L2] give finite-dimensional nonzero eigenspaces whose closed span is $(\ker T_k)^\perp=\overline{\operatorname{ran}T_k}$. If $T_kv=\lambda v$, step 1.2 gives $T_kL_gv=\lambda L_gv$; applying this also to $g^{-1}$ proves invariance of the eigenspace. The standing AC assumption supplies the countable choice required by the spectral theorem. [A1, L1, L2, step 1.1, step 1.2]

3.1 Put $S=T_k^*T_k$. The adjoint identities give $S^*=T_k^*T_k=S$, and $\langle Sf,f\rangle=\|T_kf\|_2^2\ge0$. It is compact: the image under $T_k$ of the unit ball has compact closure, and its image under the bounded, hence continuous, operator $T_k^*$ is compact and contains $S$ of that ball. By steps 1.1–1.2, both factors commute with every $L_g$, so $S$ does too. Apply the compact self-adjoint spectral theorem directly to $S$: its nonzero eigenspaces are finite-dimensional, and their closed span is $(\ker S)^\perp=\overline{\operatorname{ran}S}$. Commutation and the inverse translation prove their left invariance exactly as for $T_k$. If $k=0$, both operators vanish and the nonzero-eigenspace family is empty with closed span $\{0\}$; no finite-dimensionality assertion is made about a zero eigenspace. [A1, L1, L2, L4, step 1.1, step 1.2] ∎
