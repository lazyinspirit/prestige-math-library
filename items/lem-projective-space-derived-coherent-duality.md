---
id: lem-projective-space-derived-coherent-duality
kind: lemma
title: "Derived coherent duality on projective space"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-axiom-of-choice", "lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space", "thm-serre-duality-projective-space-twisting-sheaves", "lem-projective-space-top-cohomology-residue-pairing", "thm-cohomology-projective-space-twisting-sheaves", "def-cup-product-sheaf-cohomology", "prop-yoneda-product-is-composition-in-the-derived-category", "thm-long-exact-hom-sequences-of-a-distinguished-triangle", "thm-five-lemma-for-a-morphism-of-long-exact-sequences"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-28.md; immutable carrier: research/frontier-38-owner-30-step5-hash-28-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-28 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks, Lemma 48.27.1(5): derived duality over a field"
      url: https://stacks.math.columbia.edu/tag/0FVV
    - title: "Vakil 2025, 29.2.2 and 29.3.15: Ext comparison; the trace compatibility is supplied here"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
---

## Statement

Assume AC. Let $P=\mathbb P^N_k$ and $\omega_P=\mathcal O_P(-N-1)$, with Laurent residue trace $t_P:H^N(P,\omega_P)\to k$. For all $K\in D^b_{\mathrm{Coh}}(P)$ evaluation followed by this trace gives a natural quasi-isomorphism
$$R\Gamma(P,\mathcal R\!Hom_P(K,\omega_P[N]))\longrightarrow R\operatorname{Hom}_k(R\Gamma(P,K),k).$$
In particular it holds in every degree, with the usual signs for shifts and distinguished triangles.

## Facts & Assumptions

**Given:** $P,N,k,K$ and AC.

[F1] Twisting sheaf cohomology and its perfect Laurent trace pairing are [[thm-cohomology-projective-space-twisting-sheaves]], [[thm-serre-duality-projective-space-twisting-sheaves]] and [[lem-projective-space-top-cohomology-residue-pairing]].

[F2] Coherent sheaves on $P$ have finite twisted locally free resolutions ([[lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space]]).

[F3] Derived evaluation products are the cup and Yoneda products ([[def-cup-product-sheaf-cohomology]], [[prop-yoneda-product-is-composition-in-the-derived-category]]); a distinguished triangle gives long exact Hom sequences ([[thm-long-exact-hom-sequences-of-a-distinguished-triangle]]), compared by the five lemma ([[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]).

## Proof

1.1 By the cohomology calculation [F1], $R\Gamma(P,\omega_P[N])$ has $k$ as its sole cohomology, in degree zero; the Laurent trace identifies it with $k$. Every coherent complex on $P$ is perfect: [F2] gives this for a sheaf, and finite truncation triangles give it for bounded coherent cohomology. Thus derived internal Hom and evaluation are computed locally by bounded finite locally free complexes. Compose the derived cup map and evaluation with the trace to obtain $R\Gamma(\mathcal R\!Hom(K,\omega_P[N]))\otimes_k^{\mathbf L}R\Gamma(K)\to k$. The tensor-Hom adjoint is the map in the statement. It is natural and respects triangles because it is induced by chain evaluation and the signed total-complex differential. [F1, F2, F3, construct]

2.1 For $K=\mathcal O_P(m)$, the map on degree $a$ cohomology is precisely $H^{N+a}(P,\mathcal O(-m-N-1))\to H^{-a}(P,\mathcal O(m))^\vee$, which is an isomorphism in all degrees by [F1], including the zero groups outside their ranges. Hence the map is a quasi-isomorphism for twists and their finite direct sums and shifts. Both functors in the assertion take triangles to triangles contravariantly; exact duality of vector spaces makes the right-hand cohomology equal to the dual of the opposite-degree cohomology. The long exact sequences of [F3] and the five lemma [F3] extend the isomorphism across a cone. Apply this finitely many times to a resolution in [F2], then to truncation triangles of a bounded coherent complex. This proves the assertion for every $K$ and supplies compatibility with connecting maps. AC enters through [F2] and the derived-category and product suppliers. [F1, F2, F3, step 1.1, algebra] ∎
