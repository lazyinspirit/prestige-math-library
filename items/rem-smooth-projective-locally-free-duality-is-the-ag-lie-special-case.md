---
id: rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case
kind: remark
title: "The smooth projective locally free theorem is the special case"
status: draft
origin: pipeline
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
