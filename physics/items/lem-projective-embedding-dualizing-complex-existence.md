---
id: lem-projective-embedding-dualizing-complex-existence
kind: lemma
title: "Existence and biduality from a projective embedding"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-axiom-of-choice", "def-dualizing-complex-on-projective-cm-scheme", "lem-finite-closed-immersion-derived-coinduction-adjunction", "lem-regular-quotient-dualizing-complex-and-biduality", "def-projective-morphism-pre-proj", "lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space", "thm-localisation-and-polynomial-extension-of-regular-rings"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-28.md"
      - "research/frontier-38-owner-30-alpha-batch-28-5a.md"
      - "research/frontier-38-owner-30-step5-hash-28-post-5a.json"
    content_sha256: "62c34ccb353a39f709680f335fde17c4ca5d90742932dd636833197b4105d659"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks, Lemma 47.15.9: quotient dualizing complex"
      url: https://stacks.math.columbia.edu/tag/0A7I
    - title: "Stacks, Lemma 48.27.1: existence over a field; here proved by embedding"
      url: https://stacks.math.columbia.edu/tag/0FVV
    - title: "Vakil 2025, 29.4.A\u2013G: explicit closed-immersion Ext construction"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
---

## Statement

Assume AC. Let $X$ be a projective scheme over a field $k$, and fix a closed embedding $i:X\hookrightarrow P=\mathbb P^N_k$. With $\omega_P=\mathcal O_P(-N-1)$, set
$$D_i=i^!(\omega_P[N]),\qquad i_*D_i=\mathcal R\!Hom_P(i_*\mathcal O_X,\omega_P[N]).$$
Then $D_i$ is a dualizing complex. For every $K\in D^b_{\mathrm{Coh}}(X)$, $\mathbb D_i(K)=\mathcal R\!Hom_X(K,D_i)$ lies in $D^b_{\mathrm{Coh}}(X)$ and canonical evaluation gives $K\cong\mathbb D_i\mathbb D_i(K)$. No smoothness or CM hypothesis is needed here.

## Facts & Assumptions

**Given:** $k,X,i,N$ and AC.

[F1] Projectivity over a field supplies a closed embedding into finite projective space ([[def-projective-morphism-pre-proj]]).

[F2] Finite twisted locally free resolutions exist for coherent sheaves on $P$ ([[lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space]]); its affine charts are regular finite-dimensional polynomial rings ([[thm-localisation-and-polynomial-extension-of-regular-rings]]).

[F3] The derived closed-immersion adjunction is [[lem-finite-closed-immersion-derived-coinduction-adjunction]], and the regular quotient's dualizing and biduality assertions are [[lem-regular-quotient-dualizing-complex-and-biduality]].

## Proof

1.1 Choose the embedding in [F1]. Resolve $\omega_P[N]$ by injective module sheaves and apply $i^b$ from [F3]. This constructs $D_i$ with its actual $\mathcal O_X$-action, rather than treating an ambient locally free resolution as a complex of $\mathcal O_X$-modules. On a standard chart $U=\operatorname{Spec}A\subset P$, $X\cap U=\operatorname{Spec}(A/I)$, and the derived complex corresponds to $R\operatorname{Hom}_A(A/I,\omega_P(U)[N])$; finite resolutions in [F2] verify this correspondence and its compatibility with localization. [F1, F2, F3, construct]

2.1 The rings $A$ are regular of dimension $N$, and the restriction of $\omega_P$ is invertible. Hence [F3] proves finite injective dimension, finite cohomology and homothety on $X\cap U$. These affine opens cover $X$. The finite ambient resolutions [F2] bound the cohomology degrees uniformly, and their local Hom cohomology sheaves are coherent, so $D_i\in D^b_{\mathrm{Coh}}(X)$ and is dualizing in the sense of [[def-dualizing-complex-on-projective-cm-scheme]]. For any bounded coherent $K$, the same local argument gives bounded coherent duals and bidual evaluation is an isomorphism on this cover, hence globally. This proves existence and biduality before any use of duality on singular schemes. AC is used by the listed regularity and resolution suppliers. [F2, F3, step 1.1, algebra] ∎
