---
id: lem-diagonal-quasi-compact-iff-quasi-separated
kind: lemma
title: Quasi-separatedness and the diagonal
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-quasi-compact-and-quasi-separated-morphism, def-quasi-compact-and-quasi-separated-scheme, def-scheme, thm-affine-fibre-product-tensor-ring, lem-fibre-product-open-restriction, cor-affine-scheme-quasi-compact, def-diagonal-morphism-scheme]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.21.6, printed p.40"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Section 11.2.4, printed p.306"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

For a morphism of schemes $f:X\to S$ the following are equivalent: the diagonal
$\Delta_{X/S}:X\to X\times_SX$ is quasi-compact; the morphism $f$ is
quasi-separated; and for any affine opens $U,V\subseteq X$ lying over a common
affine open of $S$ the intersection $U\cap V$ is quasi-compact. In that case
each such intersection is covered by finitely many affine opens.

## Facts & Assumptions

**Given:** A morphism $f:X\to S$ and its diagonal $\Delta_{X/S}$.

[F1] A morphism $g$ is **quasi-compact** if $g^{-1}(W)$ is quasi-compact for every quasi-compact open $W$ of its target. A morphism $f:X\to S$ is **quasi-separated** if for affine opens $U,U'\subseteq X$ lying over a common affine open of $S$ the intersection $U\cap U'$ is quasi-compact; this affine criterion is the definition used here. ([[def-quasi-compact-and-quasi-separated-morphism]])

[F2] A scheme $Z$ is quasi-compact if its underlying space is, that is, if every open cover of $|Z|$ has a finite subcover. ([[def-quasi-compact-and-quasi-separated-scheme]])

[F3] Every point of a scheme has an open neighbourhood that is an affine scheme; hence the affine open subschemes form a basis of the topology. ([[def-scheme]])

[F4] Every affine scheme is quasi-compact. ([[cor-affine-scheme-quasi-compact]])

[F5] For ring maps $\Gamma(W)\to\Gamma(U)$, $\Gamma(W)\to\Gamma(V)$ with $U,V$ affine opens over an affine $W$, $\operatorname{Spec}\Gamma(U)\times_{\operatorname{Spec}\Gamma(W)}\operatorname{Spec}\Gamma(V)\cong\operatorname{Spec}(\Gamma(U)\otimes_{\Gamma(W)}\Gamma(V))$. ([[thm-affine-fibre-product-tensor-ring]])

[F6] If open subschemes $U,V$ of $X$ map into an open $W\subseteq S$, then $\operatorname{pr}_1^{-1}(U)\cap\operatorname{pr}_2^{-1}(V)$ is an open subscheme of $X\times_SX$ representing $U\times_WV$. ([[lem-fibre-product-open-restriction]])

[F7] The diagonal is the unique morphism with $\operatorname{pr}_1\Delta_{X/S}=\operatorname{id}_X=\operatorname{pr}_2\Delta_{X/S}$. ([[def-diagonal-morphism-scheme]])

## Proof

**Proof technique:** direct.

1.1 Let $U,V\subseteq X$ be affine opens mapping into a common affine open $W\subseteq S$. By [F6] the subscheme $P_{UV}:=\operatorname{pr}_1^{-1}(U)\cap\operatorname{pr}_2^{-1}(V)$ is open in $X\times_SX$ and represents $U\times_WV$, an affine scheme by [F5]; and by [F7] a point $x\in X$ satisfies $\Delta_{X/S}(x)\in P_{UV}$ exactly when $x\in U\cap V$, so $\Delta_{X/S}^{-1}(P_{UV})=U\cap V$. [F5, F6, F7, given]

2.1 The subschemes $P_{UV}$ cover $X\times_SX$: given a point $z$, let $w\in S$ be the common image of $\operatorname{pr}_1(z),\operatorname{pr}_2(z)$, choose an affine open $W\ni w$, and use [F3] to choose affine opens $U\subseteq f^{-1}(W)$ containing $\operatorname{pr}_1(z)$ and $V\subseteq f^{-1}(W)$ containing $\operatorname{pr}_2(z)$; then $z\in P_{UV}$. [F3, step 1.1]

2.2 Assume $\Delta_{X/S}$ quasi-compact. For affine $U,V$ over a common affine $W$, the scheme $P_{UV}$ is affine by step 1.1 hence quasi-compact by [F4], so $\Delta_{X/S}^{-1}(P_{UV})=U\cap V$ is quasi-compact by [F1]. Thus $f$ is quasi-separated by [F1]. [F1, F4, step 1.1]

2.3 Each $\Delta_{X/S}^{-1}(P_k)$ is the intersection of the two affine opens defining $P_k$ by step 1.1, hence quasi-compact by hypothesis. [given, step 1.1]

3.1 Assume conversely that the stated intersection condition holds, and let $Q\subseteq X\times_SX$ be affine open. By steps 1.1 and 2.1, the affine opens $P_{UV}$ cover the target. For each point of $Q$, choose such a $P_{UV}$ containing it; since $P_{UV}$ is affine, its distinguished opens contained in $Q\cap P_{UV}$ form a neighbourhood basis there. These distinguished opens cover $Q$, so [F4] gives a finite subcover $D(a_1),\dots,D(a_n)$ with $D(a_j)\subseteq P_j$ for corresponding members $P_j=P_{U_jV_j}$. By step 2.3, $\Delta_{X/S}^{-1}(P_j)=U_j\cap V_j$ is quasi-compact. The inverse image of $D(a_j)$ is the distinguished open defined by the pulled-back section $\Delta_{X/S}^{\#}(a_j)$ on this quasi-compact scheme; it is quasi-compact because a quasi-compact scheme has a finite affine open cover and the distinguished open restricts to an affine distinguished open on each member of that cover. [F3, F4, step 1.1, step 2.1, step 2.3]

4.1 The finite distinguished-open cover in step 3.1 pulls back to a finite open cover of $\Delta_{X/S}^{-1}(Q)$ by quasi-compact opens, hence $\Delta_{X/S}^{-1}(Q)$ is quasi-compact. Since $Q$ was any affine open of $X\times_SX$, every such affine open has quasi-compact inverse image under $\Delta_{X/S}$. [F2, step 3.1]

5.1 Let $V\subseteq X\times_SX$ be any quasi-compact open subscheme. Since affine opens form a basis by [F3], $V$ is covered by affine opens contained in $V$, and quasi-compactness of $V$ extracts a finite subcover $Q_1,\dots,Q_m$; hence $\Delta_{X/S}^{-1}(V)=\bigcup_{j=1}^m\Delta_{X/S}^{-1}(Q_j)$ is a finite union of quasi-compact sets by step 4.1, therefore quasi-compact. [F2, F3, step 4.1]

6.1 Step 5.1 shows that $\Delta_{X/S}^{-1}$ of every quasi-compact open is quasi-compact, so $\Delta_{X/S}$ is quasi-compact by [F1]; together with step 2.2 this proves the equivalence, and the final clause follows because a quasi-compact open subscheme of a scheme is a finite union of affine opens, as used in step 5.1. [F1, step 2.2, step 5.1] ∎
