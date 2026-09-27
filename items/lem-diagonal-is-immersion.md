---
id: lem-diagonal-is-immersion
kind: lemma
title: Every scheme diagonal is an immersion
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-diagonal-morphism-scheme, def-locally-closed-immersion, lem-closed-immersion-local-on-target, thm-affine-fibre-product-tensor-ring, thm-affine-closed-immersions-quotient-rings, lem-fibre-product-open-restriction, lem-points-of-scheme-fibre-product-residue-tensors]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemmas 26.21.1-2 and Section 26.10, printed pp.35, 18"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Sections 11.3.1-2, printed pp.306-307"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

For every morphism of schemes $f:X\to S$, the diagonal $\Delta_{X/S}$ is an
immersion ([[def-locally-closed-immersion]]). It identifies $X$ with a locally
closed subscheme of $X\times_S X$. A point $z$ of $X\times_S X$ lies in its image
if and only if the two projections carry $z$ to one and the same point $x$ of $X$
and induce one and the same map of residue fields $\kappa(x)\to\kappa(z)$.

## Facts & Assumptions

**Given:** A morphism of schemes $f:X\to S$, its diagonal $\Delta_{X/S}$ and the projections $\operatorname{pr}_1,\operatorname{pr}_2:X\times_S X\to X$.

[F1] The **diagonal morphism** is the unique $\Delta_{X/S}:X\to X\times_S X$ with $\operatorname{pr}_1\Delta_{X/S}=\operatorname{id}_X=\operatorname{pr}_2\Delta_{X/S}$. ([[def-diagonal-morphism-scheme]])

[F2] A morphism is an **immersion** when it factors as a closed immersion into an open subscheme of its target; such a factorization is a device exhibiting the morphism, not extra data, and restricting the target to a smaller open subscheme containing the image does not change the property. ([[def-locally-closed-immersion]])

[F3] A morphism $i:Z\to X$ of schemes is a closed immersion if and only if its restriction $i^{-1}(V_j)\to V_j$ is a closed immersion for every member $V_j$ of an open cover of $X$. ([[lem-closed-immersion-local-on-target]])

[F4] Let $A\to B$ and $A\to C$ be maps of commutative unital rings, allowing the zero ring. Then $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C)$, with the projections given by $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$. ([[thm-affine-fibre-product-tensor-ring]])

[F5] For a ring $A$, closed immersions $Z\to\operatorname{Spec}A$ are, up to unique isomorphism over $\operatorname{Spec}A$, precisely the morphisms $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ for ideals $I\subseteq A$. ([[thm-affine-closed-immersions-quotient-rings]])

[F6] If opens $V\subseteq X$, $W\subseteq Y$ of an $S$-scheme diagram map into an open $U\subseteq S$, then $\operatorname{pr}_1^{-1}(V)\cap\operatorname{pr}_2^{-1}(W)$ is an open subscheme of $X\times_S Y$ representing $V\times_U W$. ([[lem-fibre-product-open-restriction]])

[F7] Points of $P=X\times_S Y$ for $S$-schemes $X,Y$ are in bijection with quadruples $(x,y,s,\mathfrak r)$ where $x\in X$, $y\in Y$ have image $s\in S$ and $\mathfrak r\in\operatorname{Spec}(\kappa(x)\otimes_{\kappa(s)}\kappa(y))$; the residue field at the point is canonically $\kappa(\mathfrak r)$, and the two projections of the quadruple are the contractions $x,y$ of $\mathfrak r$ along the two tensor inclusions. ([[lem-points-of-scheme-fibre-product-residue-tensors]])

## Proof

**Proof technique:** direct.

1.1 Choose an open cover $X=\bigcup_i U_i$ with $U_i=\operatorname{Spec}B_i$ affine and $f(U_i)\subseteq V_i=\operatorname{Spec}A_i$ affine, and put $Q_i=\operatorname{pr}_1^{-1}(U_i)\cap\operatorname{pr}_2^{-1}(U_i)$. By [F6] the open subscheme $Q_i$ represents $U_i\times_{V_i}U_i$, so [F4] identifies $Q_i$ with $\operatorname{Spec}(B_i\otimes_{A_i}B_i)$, an open subscheme of $X\times_S X$. [F4, F6, given]

1.2 For each $x\in X$, choose $i$ with $x\in U_i$. Since both projections of $\Delta_{X/S}(x)$ are $x$ by [F1], this point lies in $Q_i$. Thus $\Delta_{X/S}(X)\subseteq Q:=\bigcup_i Q_i$. [F1, given]

1.3 If $z=\Delta_{X/S}(x)$, then $\operatorname{pr}_1(z)=\operatorname{pr}_2(z)=x$ by [F1], and the residue-field map induced by either projection is the inverse of the isomorphism induced by $\Delta_{X/S}$, because the composites $\operatorname{pr}_j\Delta_{X/S}=\operatorname{id}_X$ induce identity maps on residue fields; in particular the two projections induce the same map $\kappa(x)\to\kappa(z)$. [F1, given]

2.1 Each $Q_i$ is open by step 1.1, so $Q$ is an open subscheme of $X\times_S X$ containing the image of $\Delta_{X/S}$ by step 1.2. [step 1.1, step 1.2]

2.2 The inverse image $\Delta_{X/S}^{-1}(Q_i)$ equals $U_i$, and the restricted morphism $U_i\to Q_i$ is, under the identifications of step 1.1, the morphism $\operatorname{Spec}B_i\to\operatorname{Spec}(B_i\otimes_{A_i}B_i)$ corresponding to the multiplication map $m_i:B_i\otimes_{A_i}B_i\to B_i$, $b\otimes b'\mapsto bb'$. This $m_i$ is surjective, since $b=m_i(b\otimes1)$, and then [F5] exhibits the restricted morphism as a closed immersion; the cases $B_i=0$ and $A_i=0$ of the zero ring are included, with $m_i$ again surjective. Consequently $\Delta_{X/S}^{-1}(Q)=\bigcup_i\Delta_{X/S}^{-1}(Q_i)=X$. [F4, F5, step 1.1]

2.3 Conversely let $z$ satisfy $\operatorname{pr}_1(z)=\operatorname{pr}_2(z)=x$ with a common induced residue map $\psi:\kappa(x)\to\kappa(z)$. By [F7] the point $z$ corresponds to a quadruple $(x,x,s,\mathfrak r)$ with $\kappa(z)=\kappa(\mathfrak r)$, and the ring map $\varphi:\kappa(x)\otimes_{\kappa(s)}\kappa(x)\to\kappa(z)$ with kernel $\mathfrak r$ restricts to $\psi$ on each tensor factor. Since these restrictions agree, the universal property of the tensor product factors $\varphi$ through the multiplication $\kappa(x)\otimes_{\kappa(s)}\kappa(x)\to\kappa(x)$, whose kernel $\mathfrak m_0$ is therefore contained in $\mathfrak r$. That multiplication maps onto the field $\kappa(x)$, so $\mathfrak m_0$ is maximal and proper, and the prime $\mathfrak r$ containing it is equal to it. By step 1.3 the point $\Delta_{X/S}(x)$ is the point of the product whose quadruple is $(x,x,s,\mathfrak m_0)$, so injectivity of the bijection of [F7] gives $z=\Delta_{X/S}(x)$. [F7, step 1.3]

3.1 Steps 1.2 and 2.1 show that the open subscheme $Q$ of $X\times_S X$ contains $\Delta_{X/S}(X)$, and step 2.2 gives $\Delta_{X/S}^{-1}(Q)=X$ and shows that the restriction of $\Delta_{X/S}$ to each member of the open cover $\{Q_i\}$ of $Q$ is a closed immersion. By [F3] the morphism $\Delta_{X/S}:X\to Q$ is a closed immersion. [F3, step 1.2, step 2.1, step 2.2]

4.1 Composing the closed immersion $\Delta_{X/S}:X\to Q$ of step 3.1 with the open immersion $Q\hookrightarrow X\times_S X$ exhibits $\Delta_{X/S}$ as an immersion by [F2]; explicitly, $X$ is identified with the closed subscheme $\Delta_{X/S}(X)$ of $Q$, cut out on the chart $Q_i$ by the kernel of $m_i$ of step 2.2. [F2, step 2.2, step 3.1]

5.1 Steps 4.1 and 2.3 prove that $\Delta_{X/S}$ is an immersion and that a point of $X\times_S X$ lies in its image exactly when the two projections carry it to one point $x$ of $X$ and induce one and the same map $\kappa(x)\to\kappa(z)$. [step 4.1, step 2.3] ∎
