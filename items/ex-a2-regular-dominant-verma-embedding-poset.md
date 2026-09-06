---
id: ex-a2-regular-dominant-verma-embedding-poset
kind: example
title: "The A2 regular integral-dominant Verma embedding poset"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-strong-linkage-order-on-weights, thm-bgg-verma-homomorphism-criterion, def-bruhat-order-on-the-symmetric-group, lem-a-nonzero-verma-homomorphism-is-injective]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, §15"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Example

Let $\lambda$ be regular dominant integral in type $A_2$. The six distinct weights $w\mathbin\cdot\lambda$ are indexed by $W=S_3$, and there is an embedding $M(w\mathbin\cdot\lambda)\hookrightarrow M(v\mathbin\cdot\lambda)$ exactly when $v\le w$ in Bruhat order. Thus the directed Hasse diagram runs from the longest element's Verma module down through the two length-two, two length-one, and identity vertices as inclusions into $M(\lambda)$.

## Facts & Assumptions

**Given:** Strong linkage [[def-strong-linkage-order-on-weights]] the BGG criterion [[thm-bgg-verma-homomorphism-criterion]], Bruhat order [[def-bruhat-order-on-the-symmetric-group]], and injectivity [[lem-a-nonzero-verma-homomorphism-is-injective]].

## Verification

**Proof technique:** direct.

1.1 Put $\nu=\lambda+\rho$.  Regularity makes the dot orbit free, so its members are indexed by the six elements of $S_3$.  For $u\in W$ and a positive root $\alpha$, $$\langle u\nu,\alpha^\vee\rangle =\langle\nu,(u^{-1}\alpha)^\vee\rangle$$ is positive exactly when $u^{-1}\alpha$ is positive; integrality makes every such positive value a positive integer. [given, algebra]

2.1 Write $s=s_{\alpha_1}$, $t=s_{\alpha_2}$, and $w_0=sts=tst$. The positive-reflection pairs are $(e,s),(e,t),(e,w_0),(s,st),(s,ts),(t,st),(t,ts),(st,w_0),(ts,w_0)$. The rank inequalities defining Bruhat order give precisely these reflection comparisons (all except $(e,w_0)$ are covers). Thus checking the three positive roots of $A_2$ shows that the reflections satisfying step 1.1 are exactly the pairs $u<s_\alpha u$ in Bruhat order.  In particular every strong-linkage edge lies in Bruhat order, while every Bruhat cover is one of these positive-integral reflection edges.  Taking transitive closures and applying the BGG criterion proves the nonzero-homomorphism equivalence; the cited injectivity lemma turns every such map into an embedding. This proves both directions of the stated embedding equivalence. [step 1.1, construct] ∎
