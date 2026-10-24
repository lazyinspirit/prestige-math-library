---
id: "thm-lc-strong-compactness-covering-embeddings"
kind: "theorem"
title: "The covering-embedding characterization of strong compactness"
deps: ["thm-lc-strong-compactness-fine-measures-and-logic", "lem-lc-fine-ultrapower-seed-and-normality", "lem-lc-ultrapower-critical-point"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Theorem 20.2 p.431 and covering construction Lemma 20.12 p.438;
        local seed converse
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC, for a regular uncountable cardinal kappa, strong compactness is equivalent to the following: for every cardinal lambda>=kappa there are a definable elementary embedding $j:V\to M$ into a transitive class with critical point kappa and a set s in M such that $j``\lambda\subseteq s\subseteq j(\lambda)$ and M satisfies $|s|<j(\kappa)$. Embeddings retain the formula-schema and set-restriction convention.

## Facts & Assumptions

**Given:** ZFC. Proved ordinal fixing for fine-index ultrapowers locally, used the internal cover bound to force movement at kappa, and checked every law of the converse seed-derived fine measure.

[F1] [[thm-lc-strong-compactness-fine-measures-and-logic]]: Strong compactness is equivalent to fine kappa-complete measures at every lambda.

[F2] [[lem-lc-fine-ultrapower-seed-and-normality]]: The fine ultrapower identity seed has exactly the required covering and internal size properties.

[F3] [[lem-lc-ultrapower-critical-point]]: Critical point means the least moved ordinal; the constant-predecessor argument is supplied for this different index set below.

## Proof

1.1 If kappa is strongly compact, take the fine U on P_kappa(lambda) from F1 and its j,s from F2. We check the critical point without assuming U is a measure on kappa. For every eta<kappa, a map from the index set to eta has a U-large constant fibre: otherwise intersecting the eta fibre complements gives empty in U. Induct on alpha<kappa. Each predecessor of the constant-alpha class, for alpha>0, can be modified outside its U-large membership set to take values in alpha; the fibre argument makes it constant. For alpha=0 there are no predecessors. The collapse equation then gives j(alpha)=alpha, exactly the predecessor reasoning whose critical-point terminology is F3. [F1, F2, F3]

2.1 If j(kappa)=kappa, F2's internal size bound gives in M an enumeration of s of ordinal length eta<kappa. This is also an external enumeration, since M is transitive. But s contains j``kappa=kappa by step 1.1, contradicting that kappa is a cardinal: choosing the least preimage of each ordinal below kappa injects kappa into eta. Hence j(kappa)>kappa (the ordinal map is increasing and cannot move it downward), and its critical point is kappa. This proves the required embedding property. [F2, step 1.1]

3.1 Conversely take such j,s for a fixed lambda. Its internal subset and size assertions mean precisely that s belongs to j(P_kappa(lambda)). Define $U=\{X\subseteq P_\kappa(\lambda):s\in j(X)\}$. Definability and Separation make U a set. The seed lies in the image of the whole index set and not in j(empty); image complements, intersections and inclusions give properness, complement decisions and upward closure. If eta<kappa and X_xi are U-members, j fixes eta and the image sequence has entry j(X_xi) at xi. Thus s belongs to the intersection of that image sequence, equal to j of the intersection, proving kappa-completeness. For alpha<lambda the image of its point cone is the sets containing j(alpha); since j(alpha) belongs to s, that cone belongs to U. Hence U is fine. This holds for every lambda, so F1 gives strong compactness. No equality of s with j``lambda or sequence closure of M has been inferred. [F1, F2, step 2.1] ∎
