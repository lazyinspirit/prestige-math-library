---
id: lem-cft-defect-sewing-idempotent-trace-resolution
kind: lemma
title: "Trace pairing and a complete resolution of a split projector"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-modular-ribbon-category-and-hopf-link-data
  - lem-simple-ribbon-fusion-dimensions-are-nonzero
dependency_roles:
  def-modular-ribbon-category-and-hopf-link-data: mathematical-premise
  lem-simple-ribbon-fusion-dimensions-are-nonzero: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Fjelstad, Fuchs, Runkel and Schweigert, TFT Construction of RCFT Correlators V, arXiv:hep-th/0503194v2"
      url: "https://arxiv.org/pdf/hep-th/0503194v2"
      locator: "Section 4.2, Lemma 4.3, and Appendix C.1, equations (C.6)–(C.9); the split-projector linear algebra is isolated here from the connecting-manifold argument."
---

## Statement

Let $\mathcal C$ be a complex modular ribbon fusion category with its spherical pivotal trace, let $Y$ be an object, and let $P:Y\to Y$ satisfy $P^2=P$. For each simple label $i$, put
$$ E_i=\{e:Y\to U_i\mid eP=e\},\qquad F_i=\{f:U_i\to Y\mid Pf=f\}. $$
The bilinear pairing $E_i\times F_i\to\mathbb C$, $(e,f)\mapsto\operatorname{tr}_j(ef)$, is nondegenerate. For arbitrary bases $(e_{i,a})$ and $(f_{i,b})$ of these two spaces, its matrix $C^{(i)}_{ab}=\operatorname{tr}_j(e_{i,a}f_{i,b})$ is invertible and
$$ P=\sum_{i,a,b}d_i\bigl(C^{(i)}{}^{-1}\bigr)_{ba}\,f_{i,b}e_{i,a},\qquad d_i=\operatorname{tr}_j(\operatorname{id}_{U_i}). $$
Zero-dimensional blocks contribute an empty sum; the inverse of their empty matrix denotes the unique automorphism of the zero vector space. This identity does not divide by $\operatorname{tr}_j(P)$ or by $d_Y$, either of which may vanish.

## Statement references

[[def-modular-ribbon-category-and-hopf-link-data]]

[[lem-simple-ribbon-fusion-dimensions-are-nonzero]]

## Facts & Assumptions

**Given:** The object, idempotent, trace, fixed Hom spaces, and bases in the Statement.

[F1] [[def-modular-ribbon-category-and-hopf-link-data]] gives finite semisimplicity, $\operatorname{End}(U_i)=\mathbb C\operatorname{id}_{U_i}$, and the pivotal trace. An idempotent on a finite direct sum of simple objects splits by the ordinary image/kernel decomposition of its finite multiplicity matrices.

[F2] [[lem-simple-ribbon-fusion-dimensions-are-nonzero]] gives $d_i\ne0$. Linearity of the pivotal trace gives $\operatorname{tr}_j(t\operatorname{id}_{U_i})=t d_i$ for $t\in\mathbb C$.

## Proof

1.1 Split $P$ as $Y\xrightarrow{r}Z\xrightarrow{h}Y$ with $rh=\operatorname{id}_Z$ and $hr=P$, using the image/kernel decompositions in [F1]. The maps $e\mapsto eh$ and $f\mapsto rf$ identify $E_i$ with $\operatorname{Hom}(Z,U_i)$ and $F_i$ with $\operatorname{Hom}(U_i,Z)$. Their inverses are $a\mapsto ar$ and $b\mapsto hb$: for example $(eh)r=eP=e$ and $r(hb)=b$. Under these maps $ef=(eh)(rf)$, so the pairing is unchanged. [given, F1, algebra]

2.1 Write $Z=\bigoplus_{i,t}U_i$ with inclusions $h_{i,t}:U_i\to Z$ and projections $r_{i,t}:Z\to U_i$. They satisfy $r_{i,t}h_{k,s}=\delta_{ik}\delta_{ts}\operatorname{id}_{U_i}$ when $i=k$, and zero when $i\ne k$, and $\sum_{i,t}h_{i,t}r_{i,t}=\operatorname{id}_Z$. Thus the pairing between $\operatorname{Hom}(Z,U_i)$ and $\operatorname{Hom}(U_i,Z)$ has matrix $d_i I$ in these projection/inclusion bases. By [F2] it is nondegenerate, and this property persists under every invertible change of bases and the isomorphisms of step 1.1. Consequently every $C^{(i)}$ in the Statement is square and invertible. [F1, F2, step 1.1, algebra]

3.1 Define $R$ to be the displayed sum in the Statement. It satisfies $PR=R=RP$, because every $e_{i,a}$ and $f_{i,b}$ is fixed on its stated side. For $f_{k,c}$ in a chosen basis, Schur's lemma gives $e_{i,a}f_{k,c}=0$ if $i\ne k$, and $e_{k,a}f_{k,c}=(C^{(k)}_{ac}/d_k)\operatorname{id}_{U_k}$ if $i=k$. Therefore $$ Rf_{k,c}=\sum_{a,b}d_k(C^{(k)}{}^{-1})_{ba}f_{k,b}\frac{C^{(k)}_{ac}}{d_k}=f_{k,c}. $$ This calculation divides only by the nonzero simple dimension $d_k$. [given, F1, F2, step 2.1, algebra]

4.1 The maps $h h_{i,t}:U_i\to Y$ from steps 1.1 and 2.1 belong to $F_i$ and span its simple inclusions, so step 3.1 gives $R h h_{i,t}=h h_{i,t}$ for all $i,t$. Summing against $r_{i,t}$ gives $Rh=h$. Since $R=RP=Rhr$, it follows that $R=hr=P$. If $Z=0$, all these sums are empty and $P=0$, so the same conclusion holds. This proves both nondegeneracy and the resolution, without a nonzero total-dimension assumption. [step 1.1, step 2.1, step 3.1, algebra] ∎

## Remarks

This lemma supplies the finite algebraic resolution after a boundary projector and its field-space identifications have been constructed. It does not identify a disk RT correlator with this trace pairing and does not construct the FRS connecting ribbon graph or the marked-torus projector.
