---
id: lem-zero-projection-rank
kind: lemma
title: Zeroth projection is rank
status: draft
domain: mathematics
deps:
  - def-filtration-projections
  - def-motivic-filtration
  - prop-motivic-weight-zero
  - lem-cdh-integer-sections
  - lem-author-a279c89ed6c8-cdh-zero-site-comparison
  - math:def-axiom-of-choice
  - lem-author-ec13f1db88a5-rank-zero-stage
dependency_roles:
  def-filtration-projections: mathematical-premise
  def-motivic-filtration: mathematical-premise
  prop-motivic-weight-zero: mathematical-premise
  lem-cdh-integer-sections: mathematical-premise
  lem-author-a279c89ed6c8-cdh-zero-site-comparison: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-ec13f1db88a5-rank-zero-stage: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 10, Lemma 5.1 and proof; p. 5, Lemma 2.4
      reading_limits: The supplied article text at these locations was read. The proof
        below uses the named completed suppliers and explicitly compares their
        site conventions.
dependency_level: 20
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied weight-zero and perfect K-theory constructions. Let $k$ be a field and $X$ a quasi-compact quasi-separated $k$-scheme. Under the canonical identifications
$$H^{0,0}_{\mathrm{mot}}(X,\mathbb Z)\cong H^0_{\mathrm{cdh},F}(X,\mathbb Z)\cong\operatorname{LC}(|X|,\mathbb Z),$$
the actual zeroth filtration projection $p_0:K_0(X)\to H^{0,0}_{\mathrm{mot}}(X,\mathbb Z)$ is the locally constant Euler rank. Here $F$ is the prime subfield of $k$, and the cdh group uses the supplied entire qcqs $F$-scheme site. The group $\operatorname{LC}(|X|,\mathbb Z)$ consists of functions on the underlying topological space that are constant on a neighbourhood of every point, with pointwise addition. No seminormality, normality, separatedness, finite-type or dimension hypothesis is needed for this rank identification.

In the original separated seminormal finite-type case over an algebraically closed field, the same identifications agree naturally with the constant-integer sections on the separated finite-type $k$-scheme cdh site and give
$$H^{0,0}_{\mathrm{mot}}(X,\mathbb Z)\cong H^0_{\mathrm{cdh}}(X,\mathbb Z)\cong\mathbb Z^{\pi_0(X)}.$$
Here $\pi_0(X)$ is the finite set of connected components, and its components are open and closed. Thus the original componentwise statement, including disconnected and empty schemes, is retained. On general qcqs schemes the locally constant-function description is used; arbitrary functions on connected components are not asserted to be locally constant.

The spectrum $K(X)$ is the specified nonconnective K-theory of perfect complexes and $K_0(X)=\pi_0K(X)$. A perfect complex is locally quasi-isomorphic to a bounded complex of finite locally free sheaves. Its Euler rank at a point is the alternating dimension of its derived fiber over the residue field. The projection is the actual stage-zero-to-graded map, with $F^0_{\mathrm{mot}}K(X)=K(X)$. A qcqs scheme is quasi-compact and quasi-separated. Seminormality in the finite-type specialization has the supplied local square-and-cube-root convention.

## Statement references

[[lem-author-ec13f1db88a5-rank-zero-stage]]

[[prop-motivic-weight-zero]]

[[lem-author-a279c89ed6c8-cdh-zero-site-comparison]]

[[lem-cdh-integer-sections]]

## Facts & Assumptions

**Given:** A field $k$, a qcqs $k$-scheme $X$, Choice and compatible site and universe bounds. For the final specialization also assume the separated seminormal finite-type and algebraically closed hypotheses.

**Goal:** Identify the actual projection in qcqs scope and recover the original finite-type component formula on its original site.

[A1] The stated Choice and size premises are inherited from the actual rank, perfect K-theory and weight-zero constructions in [F1]–[F3]. They are used when applying those suppliers at steps 1.1–2.1. [[math:def-axiom-of-choice]]

[F1] [[def-motivic-filtration]] identifies stage zero with K. [[def-filtration-projections]] defines $p_0$ as the actual stage-to-graded map on every qcqs field-scheme. [[prop-motivic-weight-zero]] identifies its target with the constant-integer derived sections on the general qcqs prime-field cdh site.

[F2] [[lem-author-ec13f1db88a5-rank-zero-stage]] computes that site's degree-zero constant sections as locally constant integers, identifies $\Omega^\infty\operatorname{gr}^0K$ as this discrete sheaf, and identifies the actual map on perfect $K_0$ as the locally constant Euler rank. This is an actual map identification over every field, without a smooth-locus premise.

[F3] [[lem-author-a279c89ed6c8-cdh-zero-site-comparison]] gives the natural comparison with separated finite-type $k$-site sections when $X$ is separated finite type. [[lem-cdh-integer-sections]] identifies the latter with $\mathbb Z^{\pi_0(X)}$ under the additional seminormal and algebraically closed hypotheses.



## Proof

1.1 Apply [F1] and [F2] to the given qcqs field-scheme under [A1]. Their source is the same specified K-spectrum, and their map is the same stage-zero cofiber projection. The discrete zeroth-space identification in [F2] identifies its zeroth homotopy group with $\operatorname{LC}(|X|,\mathbb Z)$, and the actual map on $K_0$ is the Euler rank. Composing with the weight-zero identification in [F1] gives the first display and the claimed rank equality on every such $X$. [A1, F1, F2, given]

2.1 The rank in step 1.1 is computed on local bounded finite locally free representatives. Those ranks are locally constant, compatible with restrictions, and additive in exact triangles, as in [F2]. Hence this is a natural homomorphism on all perfect classes, including those without a global vector-bundle presentation. On the empty scheme the locally constant-function group is zero and the same identity applies. [F2, step 1.1]

3.1 Now impose the original separated seminormal finite-type and algebraically closed hypotheses. Apply the natural site comparison and component-section calculation in [F3] to the same weight-zero group. The finite connected components of this noetherian scheme are clopen, so their integer values describe exactly its locally constant functions. These identifications take the map in step 1.1 to the original componentwise rank map and give the second display. Thus every original finite-type assertion and the broader qcqs rank equality hold with their respective precise site conventions. [A1, F1, F3, step 1.1, step 2.1] ∎

## Maintenance scope and reading limits
The supplied article v1 text was read at its qcqs conventions on p. 3, Lemma 2.4 on p. 5 and Lemma 5.1 on p. 10. The current rank-zero-stage argument and weight-zero, stage-projection, site-comparison and integer-section contracts supply this deduction; their deep constructions are not independently reconstructed or accepted here. The original unrestricted smooth-locus proof premise remains a separate article defect. The four direct consumers were inspected: they use the rank identity on normal affine finite-type schemes and need no edits. Original coverage is unchanged.
