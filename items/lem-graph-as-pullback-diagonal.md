---
id: "lem-graph-as-pullback-diagonal"
kind: "lemma"
title: "The graph is a pullback of the diagonal"
status: published
origin: "pipeline"
deps: ["def-graph-morphism-over-base", "def-diagonal-morphism-scheme", "lem-fibre-product-unique-canonical-isomorphism"]
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
    - title: "Vakil proof 11.1.18, diagram (11.1.18.1), p.232"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

For an $S$-morphism $u:X\to Y$, put $H=(u\operatorname{pr}_X,\operatorname{pr}_Y):X\times_S Y\to Y\times_S Y$. The square with top arrow $\Gamma_u:X\to X\times_S Y$, bottom arrow $\Delta_{Y/S}:Y\to Y\times_S Y$, left arrow $u$, and right arrow $H$ is Cartesian.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] For an $S$-morphism $u:X\to Y$ (as in def-scheme-over-base), the **graph morphism** is $\Gamma_u=(\operatorname{id}_X,u):X\to X\times_S Y$, supplied by thm-fibre-products-of-schemes-exist. Its first projection is the identity and its second projection is $u$. The definition alone does not assert that its image is closed. ([[def-graph-morphism-over-base]])

[F2] For $X\to S$, the **diagonal morphism** is the unique $\Delta_{X/S}:X\to X\times_S X$ satisfying $\operatorname{pr}_1\Delta_{X/S}=\operatorname{id}_X=\operatorname{pr}_2\Delta_{X/S}$. It exists by thm-fibre-products-of-schemes-exist. For any test scheme $T$, it takes an $S$-morphism $a:T\to X$ to the compatible pair $(a,a)$. ([[def-diagonal-morphism-scheme]])

[F3] If $(P,p,q)$ and $(P',p',q')$ are fibre products of the same pair $X\to S\leftarrow Y$, there is a unique isomorphism $u:P\to P'$ with $p'u=p$ and $q'u=q$. ([[lem-fibre-product-unique-canonical-isomorphism]])

## Proof

1.1 By F1 and F2 both composites around the square are $(u,u)$. A compatible test pair consists of $a:T\to X\times_S Y$ and $c:T\to Y$ satisfying $Ha=\Delta c$. Write $a=(a_X,a_Y)$. Equality means exactly $ua_X=c$ and $a_Y=c$. [given, F1, F2]

2.1 Thus $a_X$ is the unique map $T\to X$ whose graph composite is $a$ and whose $u$-composite is $c$. Conversely any map $d:T\to X$ supplies the pair $((d,ud),ud)$. These operations are inverse, so the square has the pullback universal property, with its canonical uniqueness as in F3. The argument includes empty schemes and $u=\operatorname{id}$, and imposes no reducedness or separation hypothesis. [F1, F3, step 1.1] ∎
