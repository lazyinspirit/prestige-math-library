---
id: "lem-compact-intertwiners-produce-finite-dimensional-invariant-subspaces"
kind: "lemma"
title: "Compact intertwiners produce finite dimensional invariant subspaces"
deps: ["lem-nonzero-compact-kernel-operators-yield-nonzero-positive-compact-k-star-k", "lem-nonzero-positive-compact-self-adjoint-operators-have-positive-finite-dimensional-eigenspaces", "lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner", "def-unitary-eigenfunction-for-a-probability-system", "def-axiom-of-choice", "thm-rank-nullity"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Sarig Theorem 3.2 p.91, local compact-intertwiner proof of its difficult implication
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
    - title: Axler 10.99 p.326 (local positive version)
      url: https://measure.axler.net/MIRA.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. A nonzero invariant square-integrable kernel with zero marginals for a measure-preserving transformation of a completed Lebesgue probability space produces a nonzero finite-dimensional $U_T$-invariant subspace $E$ of $H_0$. The restriction $U_T|_E$ is unitary, even when $T$ is not invertible.

## Facts & Assumptions

[F1] The associated $S=K^*K$ is nonzero, positive, self-adjoint and compact on $H_0$, and commutes with $U_T$ [[lem-nonzero-compact-kernel-operators-yield-nonzero-positive-compact-k-star-k]].

[F2] Such an $S$ has a nonzero finite-dimensional positive eigenspace [[lem-nonzero-positive-compact-self-adjoint-operators-have-positive-finite-dimensional-eigenspaces]].

[F3] Invariant zero-marginal kernels give commuting operators preserving $H_0$ [[lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner]].

[F4] Koopman is an isometry and $H_0$ is closed [[def-unitary-eigenfunction-for-a-probability-system]].

[F5] A finite-dimensional linear map satisfies rank-nullity [[thm-rank-nullity]].

[F6] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** The kernel in the statement and AC.

1.1 F3 supplies the nonzero restriction of $K$ to the closed space $H_0$, so this space is nonzero. Apply F1 there, then F2, to obtain $\alpha>0$ and the nonzero finite-dimensional subspace $E=\ker(S-\alpha I)\subseteq H_0$. AC supplies all inherited projection and compactness selections. [F1, F2, F3, F4, F6]

2.1 For $f\in E$, commutation gives $S(U_Tf)=U_T(Sf)=\alpha U_Tf$, so $U_Tf\in E$. The restriction is injective because $U_T$ preserves norm. Rank-nullity gives image dimension equal to $\dim E$, and a subspace of a finite-dimensional space with full dimension equals that space: a basis of a proper subspace could be enlarged by a vector outside it, contradicting the dimension. Thus the restriction is surjective. Being a surjective isometry, it is unitary. [F1, F4, F5, step 1.1] ∎
