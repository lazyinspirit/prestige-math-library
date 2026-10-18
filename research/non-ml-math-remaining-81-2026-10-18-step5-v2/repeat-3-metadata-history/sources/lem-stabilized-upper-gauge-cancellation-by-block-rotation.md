---
id: lem-stabilized-upper-gauge-cancellation-by-block-rotation
kind: lemma
title: Stabilized upper gauge cancellation by block rotation
status: draft
dependency_level: 0
origin: pipeline
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory
      (2021), expanded local argument
    url: https://arxiv.org/pdf/2011.14368v3
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
---

## Statement

Let two sphere-bundle clutching triples have the same upper bundle $F$, and let $\phi$ be an orthogonal bundle isomorphism between their glued bundles. After adding the pulled-back bundle $\pi^*F$ to both triples, there is an orthogonal isomorphism with upper gauge equal to the identity. The target clutching map can be kept literally fixed.

## Facts & Assumptions

## Proof

**Proof technique:** direct construction.

**Given:** The data and hypotheses in the Statement.

1.1 Write the upper component as $g(x,v)$ over $D_+V$, with $g_0(x)=g(x,0)$. Stabilize $\phi$ by the pulled-back isomorphism $g_0^{-1}$ on $\pi^*F$. Its upper gauge is $U=\operatorname{diag}(g,g_0^{-1})$. Radial contraction of the disk deforms this to $\operatorname{diag}(g_0,g_0^{-1})$. For any orthogonal endomorphism $a$ of $F$, set $R_t=\begin{pmatrix}\cos t\,I&-\sin t\,I\\ \sin t\,I&\cos t\,I\end{pmatrix}.$ The path $\operatorname{diag}(a,I)R_t\operatorname{diag}(I,a^{-1})R_t^{-1}$, $0\le t\le\pi/2$, starts at $\operatorname{diag}(a,a^{-1})$ and ends at $I$. Hence there is an explicit orthogonal homotopy $U_s$ from $U$ to $I$ over the entire upper disk. [given, construct, algebra]


2.1 Let $\beta$ be the stabilized target clutching map. Use $U^{-1}$ as an automorphism of its upper disk bundle. The required lower automorphism on the equator is $\beta U^{-1}\beta^{-1}$. Extend it over the lower disk by $h_-(x,rv)=\beta(x,v)U_{1-r}(x,v)^{-1}\beta(x,v)^{-1}\quad(r>0),\qquad h_-(x,0)=I.$ Because $U_1=I$, orthogonality gives uniform continuity at the center, even though $\beta$ need not extend there. The two automorphisms obey the equatorial clutching relation and therefore define a genuine automorphism of the fixed target bundle. Composing it with the stabilized $\phi$ gives upper gauge $U^{-1}U=I$, as required. [step 1.1, construct, algebra] ∎
