---
id: thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis
kind: theorem
title: "Self-dual simple cyclotomic modules give the upper global basis"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 34
deps: [def-axiom-of-choice,
       def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       def-upper-global-basis-by-the-contravariant-form,
       lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient,
       thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module,
       thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module,
       thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis,
       thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda,
       thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 6: the dual identification of G_0 with the restricted dual and the self-dual normalized simples."
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991) 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "Section 5: the upper global basis as the form-dual of the lower global basis."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited through the lower projective, canonical crystal, restricted-dual and global-basis duality suppliers.

In exactly the symmetric normalized-$d_i=1$, characteristic-zero, loopless
arbitrary-multiedge geometric-parameter regime of the lower projective theorem,
the CANONICAL restricted-dual identification
$\Psi_{\mathrm{can}}:G_0(R^\Lambda)\to V_A(\Lambda)^\vee$ maps normalized
$D_\psi$-self-dual simple classes bijectively to the upper global basis,
form-dual to the lower projective basis under the actual highest-weight
contravariant form. A simple and its normalized projective COVER have the same
$B(\Lambda)$ label; this is the cover/simple correspondence, not projective Hom
duality applied to a simple. Canonical $G_0$ operators have the same projective
normalization. The alternative KK module action remains valid, but its
intertwiner is
$\Psi_{\mathrm{KK}}=q^{\operatorname{def}_\Lambda(\beta)}
\Psi_{\mathrm{can}}$ on root $\beta$ and sends a simple to that defect-rescaled
upper vector. The unrescaled upper-basis claim is made only for
$\Psi_{\mathrm{can}}$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice. The geometric-parameter regime of the lower projective theorem, the
normalized $D_\psi$-self-dual simples and normalized covers, and the two
restricted-dual identifications.

[F1] The quotient-cover pairing
([[lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient]]):
$T(P(S),S')=\delta_{S,S'}$ in normalized bases.

[F2] The lower projective theorem
([[thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis]]):
$\phi(P(S))$ is the lower global vector with the same crystal label.

[F3] The integral projective and $G_0$ identifications
([[thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]],
[[thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module]])
and the upper/lower duality and crystal compatibility
([[thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible]],
[[def-upper-global-basis-by-the-contravariant-form]],
[[def-cyclotomic-klr-diagram-duality-and-graded-module-duals]]).

## Proof

**Proof technique:** pair the normalized simple functional against the lower
basis, identify it with the form-dual lower functional, and apply the
upper/lower duality theorem; then compare the two normalizations.

1.1 The functional $\Psi_{\mathrm{can}}(S)$. By [F1] the pairing is diagonal in normalized bases, and by [F2] the class $\phi(P(S))$ is the lower global vector with the same crystal label; therefore $\Psi_{\mathrm{can}}(S)$ is exactly the weightwise dual lower-basis functional with that label. [F1, F2]

2.1 Identification with the upper global basis. The integral projective identification [F3] identifies the tensor form on projectives with the actual highest-weight contravariant form; the upper/lower duality theorem identifies these restricted dual functionals with the upper global vectors and preserves crystal labels. This proves the bijection and the normalization statements, using neither a generic negative-half form nor a vector-dual trace shift. [step 1.1, F3]

3.1 Cover/simple correspondence and the two actions. A simple and its normalized projective cover have the same $B(\Lambda)$ label by the cover/simple correspondence of [F2], not by applying projective Hom duality to a simple. The $G_0$ theorem [F3] proves the canonical action and its defect-rescaled KK version; keeping the two maps distinct preserves both sound quantum actions and the rank-one $\lambda=2$ check, with $\Psi_{\mathrm{KK}}=q^{\operatorname{def}_\Lambda(\beta)}\Psi_{\mathrm{can}}$ on root $\beta$, so that only $\Psi_{\mathrm{can}}$ gives the unrescaled upper-basis claim. The Axiom of Choice is inherited through the lower projective and canonical crystal suppliers, the QG-5 global-basis duality and the restricted-dual identifications of [F2] and [F3]. [step 2.1, F2, F3] ∎
