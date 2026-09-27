---
id: lem-affine-morphism-separated
kind: lemma
title: Affine morphisms are separated
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-affine-morphism-schemes, def-separated-morphism-schemes, def-diagonal-morphism-scheme, thm-affine-fibre-product-tensor-ring, thm-affine-closed-immersions-quotient-rings, lem-fibre-product-open-restriction, lem-closed-immersion-local-on-target]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemmas 26.21.1 and 26.21.15, printed pp.35, 42"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Section 11.3.4, printed p.308"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
---

## Statement

Every affine morphism $f:X\to S$ is separated. No Noetherian, reducedness,
finite-type, quasi-compactness or nonemptiness hypothesis is used, and the zero
ring and empty scheme are allowed.

## Facts & Assumptions

**Given:** An affine morphism of schemes $f:X\to S$, its diagonal $\Delta_{X/S}$ and the projections $\operatorname{pr}_1,\operatorname{pr}_2:X\times_S X\to X$.

[F1] A morphism $f:X\to S$ is **affine** when $f^{-1}(U)$ is affine for every affine open subscheme $U\subseteq S$. The empty scheme is affine, being $\operatorname{Spec}0$, and affineness of a morphism does not require source or target to be affine. ([[def-affine-morphism-schemes]])

[F2] A morphism $f:X\to S$ is **separated** when its diagonal $\Delta_{X/S}:X\to X\times_S X$ is a closed immersion. ([[def-separated-morphism-schemes]])

[F3] The **diagonal morphism** is the unique $\Delta_{X/S}:X\to X\times_S X$ with $\operatorname{pr}_1\Delta_{X/S}=\operatorname{id}_X=\operatorname{pr}_2\Delta_{X/S}$. ([[def-diagonal-morphism-scheme]])

[F4] For ring maps $A\to B$, $A\to C$, allowing the zero ring, $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C)$, with the projections $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$. ([[thm-affine-fibre-product-tensor-ring]])

[F5] For a ring $A$, closed immersions $Z\to\operatorname{Spec}A$ are, up to unique isomorphism over $\operatorname{Spec}A$, precisely the morphisms $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ for ideals $I\subseteq A$. ([[thm-affine-closed-immersions-quotient-rings]])

[F6] If opens $V\subseteq X$ and $W\subseteq Y$ of an $S$-diagram map into an open $U\subseteq S$, then $\operatorname{pr}_1^{-1}(V)\cap\operatorname{pr}_2^{-1}(W)$ is an open subscheme of $X\times_S Y$ representing $V\times_U W$. ([[lem-fibre-product-open-restriction]])

[F7] A morphism $i:Z\to T$ is a closed immersion if and only if its restrictions to the members of an open cover of $T$ are closed immersions. ([[lem-closed-immersion-local-on-target]])

## Proof

**Proof technique:** direct.

1.1 For each affine open subscheme $W=\operatorname{Spec}A\subseteq S$ the inverse image $U_W=f^{-1}(W)$ is affine, say $U_W=\operatorname{Spec}B_W$, by [F1]; and $Q_W:=\operatorname{pr}_1^{-1}(U_W)\cap\operatorname{pr}_2^{-1}(U_W)$ is, by [F6], the open subscheme of $X\times_S X$ representing $U_W\times_W U_W$, which [F4] identifies with $\operatorname{Spec}(B_W\otimes_A B_W)$. [F1, F4, F6, given]

1.2 By [F3] one has $\operatorname{pr}_j\Delta_{X/S}=\operatorname{id}_X$ for $j=1,2$. [F3]

2.1 The subschemes $Q_W$ cover $X\times_S X$: for a point $z$ of the product, both $\operatorname{pr}_1(z)$ and $\operatorname{pr}_2(z)$ map to the same point $w\in S$, so choosing an affine open $W$ with $w\in W$ gives $\operatorname{pr}_j(z)\in f^{-1}(W)=U_W$ for $j=1,2$ and hence $z\in Q_W$. [given, step 1.1]

2.2 Fix an affine open $W=\operatorname{Spec}A\subseteq S$. Since $\operatorname{pr}_j\Delta_{X/S}=\operatorname{id}_X$, one has $\Delta_{X/S}^{-1}(Q_W)=U_W$; and under the identifications of step 1.1 the restriction $U_W\to Q_W$ corresponds to the morphism $\operatorname{Spec}B_W\to\operatorname{Spec}(B_W\otimes_A B_W)$ induced by the multiplication $m_W:B_W\otimes_A B_W\to B_W$, $b\otimes b'\mapsto bb'$, which is surjective because $b=m_W(b\otimes1)$. By [F5] this restriction is a closed immersion; the cases $B_W=0$, $A=0$ and $W=\varnothing$ are included, with $m_W$ again surjective. [F3, F4, F5, step 1.1]

3.1 The open subschemes $Q_W$ of step 2.1 form an open cover of $X\times_S X$, and step 2.2 exhibits the restriction of $\Delta_{X/S}$ to each of them as a closed immersion. By [F7] the diagonal $\Delta_{X/S}:X\to X\times_S X$ is itself a closed immersion. [F7, step 2.1, step 2.2]

4.1 By [F2] the morphism $f$ is separated, which is the assertion. Throughout, only affineness of $f$ and the tensor and quotient descriptions of affine fibre products were used, so no Noetherian, reducedness or finite-type hypothesis enters. [F2, step 3.1] ∎
