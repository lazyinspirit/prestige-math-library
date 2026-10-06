---
id: cex-fundamental-group-depends-on-base-field
kind: counterexample
title: "The étale fundamental group changes when the base field changes"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-etale-fundamental-group-and-fibre-functor
  - lem-finite-etale-algebra-module-presentation-and-rank
  - lem-finite-etale-galois-refinements-and-quotients
  - thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
  - thm-the-complex-numbers-are-algebraically-closed
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item cex-fundamental-group-depends-on-base-field; evidence research/frontier-38-owner-30-reader-30.md, research/frontier-38-owner-30-reader-findings-30.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Milne, Lectures on Étale Cohomology §3, multiplicative-group coverings and base-field dependence"
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
    - title: "SGA 1, Exposé V, fibre-functor classification"
      url: https://arxiv.org/pdf/math/0206203
---

## Statement refuted

“The étale fundamental group of a connected scheme of finite type over a field is unchanged by extension of its base field.”

## Facts & Assumptions

**Given:** AC, the real and complex fields, the two spectra and basepoints.

[F1] The field $\mathbb C$ is algebraically closed ([[thm-the-complex-numbers-are-algebraically-closed]]).

[F2] The fibre-functor definition, finite étale algebra criterion, Galois-cover quotient and classification are [[def-etale-fundamental-group-and-fibre-functor]], [[lem-finite-etale-algebra-module-presentation-and-rank]], [[lem-finite-etale-galois-refinements-and-quotients]] and [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]. AC is inherited through those suppliers ([[def-axiom-of-choice]]).

## Counterexample

Assume AC. Take $X=\operatorname{Spec}\mathbb R$, with geometric basepoint $\operatorname{Spec}\mathbb C\to X$. Its base change to $\mathbb C$ is $X_{\mathbb C}=\operatorname{Spec}\mathbb C$, with its identity geometric basepoint. Then $\pi_1^{\mathrm{et}}(X_{\mathbb C})$ is trivial, whereas $\pi_1^{\mathrm{et}}(X)$ has a quotient of order two. Both schemes are connected, Noetherian and of finite type over their indicated base fields.

1.1 A finite étale algebra over $\mathbb C$ is a finite product of copies of $\mathbb C$ by [F1] and the finite-étale geometric-fibre assertion in [F2]. Its fibre functor is therefore the usual finite-set functor on disjoint unions of the basepoint. A natural automorphism of this functor fixes the singleton fibre of the identity cover, and by naturality for all maps from that singleton it fixes every point of every finite fibre. Hence $\pi_1^{\mathrm{et}}(\operatorname{Spec}\mathbb C)=1$. [F1, F2]

2.1 The algebra $\mathbb C=\mathbb R[T]/(T^2+1)$ is free of rank two over $\mathbb R$, and $2T$ is invertible in it, so it is finite étale by [F2]. Its spectrum is connected. Its two geometric points over the chosen complex basepoint correspond to the embeddings sending $T$ to $i$ and to $-i$. Complex conjugation interchanges them; it is the unique nonidentity deck transformation, since an automorphism is determined by its action on the image of $T$. Thus the cover is Galois of order two. By [F2], $\pi_1^{\mathrm{et}}(\operatorname{Spec}\mathbb R)$ surjects onto that deck group, and cannot be trivial. This differs from step 1.1 after the stated base change and refutes the claim. [F1, F2, step 1.1, algebra] ∎
