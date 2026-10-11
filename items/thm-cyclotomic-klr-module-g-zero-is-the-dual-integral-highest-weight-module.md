---
id: thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module
kind: theorem
title: "The cyclotomic module $G_0$ is the restricted dual integral highest-weight module"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [def-axiom-of-choice,
       def-contravariant-form-on-an-integrable-quantum-highest-weight-module,
       def-upper-global-basis-by-the-contravariant-form,
       def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       def-graded-grothendieck-group-shift-module-and-cartan-map,
       def-the-klr-cartan-pairing,
       lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient,
       thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero,
       thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 6: the perfect pairing between [Proj] and [Rep], the dual identification of G_0 with the restricted dual, and the normalized representatives."
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991) 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "Section 3 and Section 5: the highest-weight contravariant form and the dual/integral pairing conventions."
---

## Statement

For the same standard homogeneous general-field/general-Cartan parameters as
the integral projective theorem, the tensor pairing
$T(P,M)=\operatorname{gdim}(P^\psi\otimes M)$ is weightwise perfect and
$A$-bilinear, with normalized cover/simple dual bases. Its associated map
$$\Psi_{\mathrm{can}}:G_0(R^\Lambda)\longrightarrow V_A(\Lambda)^\vee=\bigoplus_\beta\operatorname{Hom}_A (V_A(\Lambda)_{\Lambda-\beta},A),\qquad \Psi_{\mathrm{can}}(M)(\phi(P))=T(P,M)$$
is an isomorphism to the RESTRICTED weight dual, identified inside
$V(\Lambda)$ using the highest-weight contravariant form. It intertwines the
CANONICAL module action having the same normalization as projective $K_0$, and
sends normalized simple classes to the form-dual projective basis. The KK
module action is also sound, but its intertwiner is
$\Psi_{\mathrm{KK}}|_\beta=q^{\operatorname{def}_\Lambda(\beta)}
\Psi_{\mathrm{can}}|_\beta$. Thus an unrescaled KK identification is not
asserted to send simples to the upper global basis. The Hom pairing is instead
first-bar-sesquilinear, $h(P,M)=T(P^\#,M)$; this does not alter the bilinear
tensor-dual identification.

## Facts & Assumptions

**Given:** The standard cyclotomic quotient $R^\Lambda$, the two Grothendieck
groups with their normalizations
([[thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero]]),
and the projective identification
[[thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]].

[F1] The quotient-cover lemma
([[lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient]]):
finite blocks have finitely many absolutely simple graded shift orbits and
normalized projective covers; $T(P,S)=\delta_{P,S}$ in normalized bases and
$T$ is $A$-bilinear with $h(P,M)=T(P^\#,M)$.

[F2] The projective identification
[[thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]]:
$K_0(R^\Lambda)\cong V_A(\Lambda)$ with highest vector $1_\Lambda$ under the
vacuum normalization.

[F3] The highest-weight contravariant form and the restricted dual
([[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]],
[[def-upper-global-basis-by-the-contravariant-form]],
[[def-the-klr-cartan-pairing]]).

## Proof

**Proof technique:** dualize the perfect tensor pairing to an isomorphism onto
the restricted weight dual, then check that the adjunction identities of the
functors translate into the restricted contravariant-dual action and compare
the two normalizations.

1.1 Perfectness and the dual isomorphism. By [F1] each weight component has finitely many absolutely simple graded shift orbits and normalized projective covers, and the exactness of projective tensor pairing together with the unscaled diagonal values gives perfectness over $A$ on each weight. Hence $G_0$ is free on the simple classes and the functional map $\Psi_{\mathrm{can}}(M)(\phi(P))=T(P,M)$ is an isomorphism from $G_0(R^\Lambda)$ to the weightwise dual $\bigoplus_\beta\operatorname{Hom}_A(V_A(\Lambda)_{\Lambda-\beta},A)$, i.e. the restricted weight dual and not a full unrestricted product dual. [F1, F2]

2.1 Intertwining with the canonical action. Transport $K_0$ by $\phi$; its tensor form is the actual highest-weight contravariant form with $\sigma(F_i)=q_i^{-1}K_iE_i$ ([[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]]). From tensor adjunction, $T(P,F_i^{\mathrm{basic}}M)=T(E_i^{\mathrm{basic}}P,M)=T(\sigma(F_i)P,M)$, and the analogous normalized identity is $T(P,E_i^{\mathrm{can}}M)=T(\sigma(E_i)P,M)$; these are precisely the restricted contravariant-dual action relations, so $\Psi_{\mathrm{can}}$ intertwines the canonical module action with the dual action and sends normalized simple classes to the form-dual projective basis. [step 1.1, F2, F3]

3.1 The KK normalization and the Hom pairing. The Kang--Kashiwara action differs from the canonical one by the weight rescaling $q^{\operatorname{def}_\Lambda(\beta)}$ on root $\beta$, so its intertwiner is $\Psi_{\mathrm{KK}}|_\beta=q^{\operatorname{def}_\Lambda(\beta)}\Psi_{\mathrm{can}}|_\beta$; in particular the unrescaled KK identification is not asserted to send simples to the upper global basis. The Hom pairing satisfies $h(P,M)=T(P^\#,M)$ by [F1] and is first-bar-sesquilinear, which concerns the other duality and does not alter the bilinear tensor-dual identification. The Axiom of Choice is inherited only through the integral projective identification [F2] and the contravariant-form suppliers [F3]. [step 2.1, F1, F3] ∎
