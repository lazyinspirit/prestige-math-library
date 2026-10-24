---
id: lem-feferman-tail-flip-model-is-finitely-formalizable
kind: lemma
title: The tail-flip symmetric model is finitely formalizable
status: published
origin: pipeline
deps: [thm-feferman-definability-union-is-a-zf-model, cor-feferman-model-has-no-free-ultrafilter-on-omega, cor-feferman-model-refutes-bpi, lem-forcing-transfer-for-finite-zfc-fragments, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - {title: "Solomon Feferman, Some applications of the notions of forcing and generic sets, Theorems 4.9 and 4.12, printed pp. 341, 343–344", url: "https://bibliotekanauki.pl/articles/1381977.pdf"}
---

## Statement

For every externally fixed finite fragment $\Delta$ of ZF together with
$\neg\mathrm{BPI}$ and the assertion that every ultrafilter on $\omega$ is
principal, ZFC+GCH proves that the tail-flip hereditary-symmetric construction
yields a set model of $\Delta$.

## Facts & Assumptions

**Given:** One externally fixed finite list $\Delta$ containing finitely many ZF axiom instances and the two displayed extra sentences.

[F1] [[thm-feferman-definability-union-is-a-zf-model]] supplies the general hereditary-symmetric-name proof that the tail-flip interpretation is a transitive ZF model; its proof is among the finite derivations traced below.

[F2] [[cor-feferman-model-has-no-free-ultrafilter-on-omega]] and [[cor-feferman-model-refutes-bpi]] supply the completed finite tail and cofinite-filter arguments for the two extra sentences.

[F3] [[lem-forcing-transfer-for-finite-zfc-fragments]] builds a countable transitive model and generic from the finite source fragment actually used by a formal forcing verification.

[F4] [[def-axiom-of-choice]] records the ambient source Choice; neither target sentence assumes it.

## Proof

**Proof technique:** direct finite proof tracing.

1.1 Expand the proofs of the finitely many ZF instances in $\Delta$, the general hereditary-symmetric model proof in F1, and the two proofs in F2. Retain the exact forcing-truth, symmetry, HS-name recursion, infinite-tail transform, finite-modification, filter-duality, and cofinite-filter instances used. No finite-predicate/HS identification is included. Because $\Delta$ and every displayed derivation are finite, only finitely many formulas of Separation, Replacement, name recursion, and forcing absoluteness occur. Call their finite source union $\Gamma$. [F1, F2, given]

2.1 Add to $\Gamma$ the definitions and source-existence assertions for $\operatorname{Add}(\omega,\omega)$, the all-bit flip group, bounded stabilizers, and the finitely many ground parameters occurring in step 1.1. This retains an entire infinite-tail automorphism as one definable ground set; it does not replace it by finitely many flips. [step 1.1]

3.1 Apply F3 in ambient ZFC+GCH only to obtain a countable transitive set $M\models\Gamma$ and an $M$-generic $G$.  The collection of $M$-names is an external set, so Separation in the ambient source forms the set of values $\{\dot x_G:\dot x\in\mathrm{HS}^{M}_{\mathcal F}\}$.  The finite instances retained from F1—not F3—verify on this set structure the selected ZF axioms.  The finite instances retained from F2 verify that every ultrafilter on its omega is principal and that BPI fails. Hence it is a set model of $\Delta$. [F1, F2, F3, step 1.1, step 2.1]

4.1 This is one construction for each external finite $\Delta$. It asserts neither a uniform truth predicate nor a countable transitive model of full ZF. Ambient Choice and GCH are used only for the reflected source and its cardinal bookkeeping, as recorded by F4; the target includes a principle incompatible with UFL/BPI. [F3, F4, step 3.1] ∎
