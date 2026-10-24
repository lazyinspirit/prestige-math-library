---
id: thm-purity-of-branch-locus-for-finite-normal-covers
kind: theorem
title: "A finite normal generically étale cover of a regular scheme is étale if unramified in codimension one"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - thm-purity-for-finite-covers-of-regular-local-rings
  - thm-regular-local-rings-are-normal
  - cor-localisations-of-regular-local-rings-are-regular
  - cor-height-preserved-under-going-down-integral-extensions
  - lem-integral-closure-commutes-etale-base-change
  - thm-etale-locus-open
  - thm-finite-morphism-integral-closed
  - thm-etale-equivalent-flat-unramified-fp
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-30.md"
      - "research/frontier-38-owner-30-alpha-batch-30-5a.md"
      - "research/frontier-38-owner-30-step5-hash-30-post-5a.json"
    content_sha256: "83efd66d5ba5b24af7e9baa4c4bd45349d479567d9dcc92e27202df70b86f831"
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
    - title: "SGA 2, Exposé X §§3.5–3.9 and complete proof of Theorem 3.4(i)"
      url: https://arxiv.org/pdf/math/0511279
    - title: "SGA 1, Exposé X §3, purity and its dimension-two discriminant proof"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Fundamental Groups §§19–21, especially Lemmas 20.7 and 21.3–21.4"
      url: https://stacks.math.columbia.edu/download/pione.pdf
    - title: "Stacks Project, Algebraic and Formal Geometry §15, Lemmas 15.1 and 15.5; regular-case argument expanded here"
      url: https://stacks.math.columbia.edu/download/algebraization.pdf
---

## Statement

Assume AC. Let $X$ be a locally Noetherian regular integral scheme and let $Y\to X$ be finite, with $Y$ normal, every irreducible component dominating $X$, and finite separable generic extensions. If the morphism is étale at every point lying over every codimension-one point of $X$, then it is étale everywhere. Equivalently its nonempty branch locus has a codimension-one component. The statement has arbitrary relative dimension and includes mixed characteristic.

## Facts & Assumptions

**Given:** AC, $X$, $Y$ and the hypotheses in the Statement.

[F1] Regular rings are normal and localizations are regular; going down preserves heights in integral domain extensions over a normal domain ([[thm-regular-local-rings-are-normal]], [[cor-localisations-of-regular-local-rings-are-regular]], [[cor-height-preserved-under-going-down-integral-extensions]]).

[F2] Finite étale covers extend uniquely across the closed point of any regular local ring of dimension at least two ([[thm-purity-for-finite-covers-of-regular-local-rings]]). Étale base change commutes with integral closure ([[lem-integral-closure-commutes-etale-base-change]]).

[F3] The étale locus is open and finite morphisms are closed ([[thm-etale-locus-open]], [[thm-finite-morphism-integral-closed]]). Étale equals flat and unramified in finite presentation ([[thm-etale-equivalent-flat-unramified-fp]]). AC is inherited through [F1]–[F3] ([[def-axiom-of-choice]]).

## Proof

1.1 Work over a Noetherian affine open of $X$; the finite normal algebra $B$ of $Y$ is the integral closure of its normal base domain $A$ in its generic product of separable fields. Indeed $B$ is integral over $A$, and an element of the generic algebra integral over $A$ is integral over $B$ and therefore belongs to $B$ by normality. By [F3] the image of the nonétale locus is a closed subset $Z$ of $\operatorname{Spec}A$. If it is nonempty, choose the generic point $\mathfrak p$ of one of its irreducible components. It is neither generic nor height one by the hypotheses, so $d=\dim A_{\mathfrak p}\ge2$. Over the punctured spectrum of $A_{\mathfrak p}$ the cover is finite étale: no proper subprime lies in $Z$ by the minimality of $\mathfrak p$. [F1, F3, construct]

2.1 By [F2] this punctured cover extends to a finite étale algebra $D$ over $A_{\mathfrak p}$. The generic algebra is the same as that of $B_{\mathfrak p}$. Both algebras are its integral closure of $A_{\mathfrak p}$: this was proved for $B$ in step 1.1 and follows for $D$ from integral-closure compatibility in [F2] applied to the normal ring $A_{\mathfrak p}$ and its fraction field. Hence they are canonically isomorphic, so $B_{\mathfrak p}$ is étale, contradicting $\mathfrak p\in Z$. Thus $Z$ is empty on every affine open, and the finite cover is étale. This proves the full codimension-one criterion. [F1, F2, F3, step 1.1] ∎
