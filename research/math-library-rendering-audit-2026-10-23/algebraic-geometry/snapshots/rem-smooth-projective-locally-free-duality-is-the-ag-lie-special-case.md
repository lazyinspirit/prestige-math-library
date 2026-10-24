---
id: rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case
kind: remark
title: "The smooth projective locally free theorem is the special case"
status: published
origin: pipeline
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-03"
    scope: "Cumulative whole-item verification: completed original Step5 full statement/definition and proof read plus the recorded later Step7 local mathematical corrections. Exact recovered original carrier and current post-correction carrier match recorded hashes; every substantive delta is covered by the cited correction reasoning. No independent audit of the local repairs and no new review round is claimed; supplier review is limited to interfaces used."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-28.md"
      - "research/frontier-38-owner-30-alpha-batch-28-5a.md"
      - "research/frontier-38-owner-30-step5-hash-28-post-5a.json"
      - "research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u28.json"
    original_read_raw_sha256: "bbcd55f526976eeab0d6bcbbe528e66a07b32c7bdb7ba34e3a375727679a9851"
    repair_post_guard_sha256: "c941c7eb52c58174887ef5c827cb243e9d5124249526a69ea69923366561e7e7"
    content_sha256: "d87b1881b23a68a15d9a6e78406b7cde1b9937fd3400d89af10b51d8d3c66d0b"
pipeline_run: frontier-38-owner-30
deps: ["def-axiom-of-choice", "thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme", "thm-serre-duality-smooth-projective-variety-locally-free-sheaves", "lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction", "lem-regular-immersion-koszul-ext-sheaf", "lem-regular-immersion-local-to-global-ext-collapse", "lem-smooth-projective-embedding-gysin-trace-compatibility"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stacks, Lemma 48.27.1(7): the smooth differential form identification"
      url: https://stacks.math.columbia.edu/tag/0FVV
    - title: "Stacks, Remark 48.27.6: vector bundle pairing"
      url: https://stacks.math.columbia.edu/tag/0FW0
    - title: "Vakil 2025, 29.2.K and 29.4.K\u201329.4.10: locally free and canonical-bundle specializations"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
---

## Remark

Under AC, if $X/k$ is smooth projective of pure dimension $d$, regular local rings make it CM. The regular-immersion Koszul calculation [[lem-regular-immersion-koszul-ext-sheaf]] and conormal adjunction [[lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction]] identify the ambient sheaf Ext in the local CM packet with $\bigwedge^d\Omega^1_{X/k}$. Thus the normalized $\omega_X$ is the canonical line bundle. For finite locally free $E$, $\mathcal R\!Hom(E,\omega_X)=E^\vee\otimes\omega_X$: locally a finite free module has exact Hom, so the positive sheaf Ext terms vanish, and taking derived global sections gives $\operatorname{Ext}_X^{d-i}(E,\omega_X)=H^{d-i}(X,E^\vee\otimes\omega_X)$.

To compare traces, fix the normalized identification with the canonical line bundle. For an embedding of codimension $c$, [[lem-regular-immersion-local-to-global-ext-collapse]] uses $\sigma_c=(-1)^{c(c+1)/2}$ times the Koszul/Hodge determinant identification, rather than the unmodified determinant map. Use that same identification to transport the coherent theorem's dualizing sheaf and trace. Its global adjunction is the one-row Ext comparison, and its counit is precomposition with $\mathcal O_P\to i_*\mathcal O_X$; hence the transported trace is the published Gysin trace. The cup/evaluation compatibility and embedding independence proved in [[lem-smooth-projective-embedding-gysin-trace-compatibility]] then identify the pairing with [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]. For singular projective $X$ that is Cohen–Macaulay and pure of dimension $d$, the coherent Ext statement remains valid and the dualizing sheaf may fail to be invertible. Without the Cohen–Macaulay hypothesis, duality generally requires the normalized dualizing complex $D_X$, rather than a shift of a single sheaf.
