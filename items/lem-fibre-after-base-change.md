---
id: "lem-fibre-after-base-change"
kind: "lemma"
title: "Fibres after base change"
status: published
origin: "pipeline"
deps: ["def-scheme-theoretic-fibre", "lem-base-change-composition", "lem-field-valued-points-of-schemes"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 10.3.C"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

Let $S'\to S$ send $s'$ to $s$. For any $X\to S$ there is a canonical isomorphism of $\kappa(s')$-schemes
$$(X_{S'})_{s'}\cong X_s\times_{\operatorname{Spec}\kappa(s)}\operatorname{Spec}\kappa(s').$$

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] For a morphism $f:X\to S$ and any point $s\in S$, its **scheme-theoretic fibre** is $$X_s=X\times_S\operatorname{Spec}\kappa(s),$$ viewed as a $\kappa(s)$-scheme. The map $\operatorname{Spec}\kappa(s)\to S$ is the canonical residue-field point from lem-field-valued-points-of-schemes, and the product is base change as in def-base-change-morphism-schemes. The point $s$ need not be closed. A fibre over a generic point is called a generic fibre. Empty fibres are allowed. ([[def-scheme-theoretic-fibre]])

[F2] For $S''\xrightarrow{k}S'\xrightarrow{h}S$ and an $S$-scheme $X$, there is a canonical isomorphism $$(X\times_S S')\times_{S'}S''\cong X\times_S S''.$$ It is functorial in $X$ and compatible with the induced maps of $S$-schemes. ([[lem-base-change-composition]])

[F3] For every field $K$ and scheme $X$, morphisms $\operatorname{Spec}K\to X$ correspond bijectively to pairs $(x,\iota)$ with $x\in X$ and a field embedding $\iota:\kappa(x)\to K$. The identity embedding gives a canonical morphism $\operatorname{Spec}\kappa(x)\to X$, compatible with all scheme morphisms. More generally, for a nonzero local ring $(R,\mathfrak m)$, morphisms $\operatorname{Spec}R\to X$ correspond to pairs $(x,\varphi)$ with a local homomorphism $\varphi:\mathcal O_{X,x}\to R$. Assuming Choice, two field-valued points have the same image in $X$ if and only if they are dominated by a common field-valued point, by compatible embeddings of their fields into a third field. ([[lem-field-valued-points-of-schemes]])

## Proof

1.1 By F3 the canonical point $\operatorname{Spec}\kappa(s^{\prime})\to S$ factors through $\operatorname{Spec}\kappa(s)$ via the residue-field embedding. F1 and F2 identify the left side with $X\times_S\operatorname{Spec}\kappa(s^{\prime})$. [given, F1, F2, F3]

2.1 Apply F2 once more to the factorization through $\operatorname{Spec}\kappa(s)$. It gives exactly the displayed right side, with the same projection to $\operatorname{Spec}\kappa(s^{\prime})$. Both operations are canonical on test morphisms and are inverse regroupings; no closure, finite extension or flatness assumption is needed. If $X_s$ is empty both sides represent only empty test schemes; identity residue-field extension gives $X_s$. [F2, step 1.1] ∎
