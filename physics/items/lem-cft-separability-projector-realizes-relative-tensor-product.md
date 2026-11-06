---
id: lem-cft-separability-projector-realizes-relative-tensor-product
kind: lemma
title: "The separability projector realizes the relative tensor product"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-cft-mtc-symmetric-special-frobenius-defect-data
dependency_roles:
  def-cft-mtc-symmetric-special-frobenius-defect-data: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jens Fjelstad, Jürgen Fuchs, and Carl Stigner, RCFT with Defects: Factorization and Fundamental World Sheets, arXiv:1202.3929v2"
      url: "https://arxiv.org/pdf/1202.3929v2"
      locator: "Appendix A.2–A.3, especially Lemma A.3 and equations (A.5)–(A.8)."
    - title: "Jens Fjelstad, Jürgen Fuchs, Ingo Runkel, and Christoph Schweigert, TFT Construction of RCFT Correlators V: Proof of Modular Invariance and Factorisation, arXiv:hep-th/0503194v2"
      url: "https://arxiv.org/pdf/hep-th/0503194v2"
      locator: "Appendix A.3, equations (A.6)–(A.8), for the separability idempotent and relative tensor retract."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\mathcal C$ and the special Frobenius algebra data be as in [[def-cft-mtc-symmetric-special-frobenius-defect-data]]. Let $A,B$ be such algebras, $X$ an $A$-$B$-bimodule, and $M$ a left $B$-module. Put $e_B=\Delta_B\circ\eta_B:\mathbf1\to B\otimes B$. With canonical associators and unitors inserted, define
$$ P_{X,M}=(\rho_X^r\otimes\rho_M)\circ(\operatorname{id}_X\otimes e_B\otimes\operatorname{id}_M):X\otimes M\to X\otimes M. $$
Then $P_{X,M}$ is an idempotent, and its split image is the coequalizer $X\otimes_B M$ of the right $B$-action on $X$ and left $B$-action on $M$. The left $A$-action on $X$ descends to this image.

## Statement references

[[def-cft-mtc-symmetric-special-frobenius-defect-data]]

## Facts & Assumptions

**Given:** The finite semisimple complex ribbon category, the special Frobenius algebra $B$, the $A$-$B$-bimodule $X$, and the left $B$-module $M$ with the action and associator conventions of the linked definition.

[F1] [[def-cft-mtc-symmetric-special-frobenius-defect-data]]: $m_B\circ\Delta_B=\operatorname{id}_B$, the Frobenius identities hold, and the left and right actions on $X$ commute. The relative tensor product is the coequalizer of the two stated action maps.

## Proof

1.1 Define $e_B=\Delta_B\eta_B$. The Frobenius identities and the two unit identities give the centrality equality
$$ (m_B\otimes\operatorname{id}_B)\circ(\operatorname{id}_B\otimes e_B) =\Delta_B =(\operatorname{id}_B\otimes m_B)\circ(e_B\otimes\operatorname{id}_B), $$
as maps $B\to B\otimes B$. Specialness gives $m_B\circ e_B=\eta_B$. These are equalities of morphisms; in Sweedler shorthand they say $b e_B^{(1)}\otimes e_B^{(2)}=e_B^{(1)}\otimes e_B^{(2)}b$ and $e_B^{(1)}e_B^{(2)}=1_B$. [given, F1, algebra]

2.1 In the same shorthand, interpreted as composition with the morphism $e_B$ and the indicated module actions rather than as elements of the objects, $P_{X,M}(x\otimes m)=x e_B^{(1)}\otimes e_B^{(2)}m$. Applying $P$ twice gives $x e_B^{(1)}e_B'{}^{(1)}\otimes e_B'{}^{(2)}e_B^{(2)}m$, where the primed copy denotes the second occurrence of $e_B$. Apply centrality to the primed copairing with the input slot $e_B^{(2)}$: $e_B'{}^{(1)}\otimes e_B'{}^{(2)}e_B^{(2)}=e_B^{(2)}e_B'{}^{(1)}\otimes e_B'{}^{(2)}$. The double application therefore equals $x e_B^{(1)}e_B^{(2)}e_B'{}^{(1)}\otimes e_B'{}^{(2)}m$. Now $m_Be_B=\eta_B$ and the unital right action on $X$ reduce it to $x e_B'{}^{(1)}\otimes e_B'{}^{(2)}m=P_{X,M}(x\otimes m)$. This substitution composes the centrality morphism with the second output of the unprimed copairing; no interchange of the two outputs or braiding is used. Thus $P^2=P$ as endomorphisms of $X\otimes M$. [given, F1, step 1.1, algebra]

3.1 Centrality also gives $P\circ(\rho_X^r\otimes\operatorname{id}_M)=P\circ(\operatorname{id}_X\otimes\rho_M)$. If $q:X\otimes M\to Z$ equalizes those action maps, then
$$ qP(x\otimes m)=q(xe_B^{(1)}\otimes e_B^{(2)}m) =q(x\otimes e_B^{(1)}e_B^{(2)}m)=q(x\otimes m), $$
so $qP=q$. Conversely, if $qP=q$, the displayed equality for $P$ implies that $q$ equalizes the two action maps. Hence the coequalizing maps are exactly the maps fixed by precomposition with $P$. [given, F1, step 1.1, step 2.1, algebra]

4.1 Finite semisimplicity splits $P$ as $X\otimes_BM\xrightarrow{i}X\otimes M\xrightarrow{r}X\otimes_BM$ with $i r=P$ and $r i=\operatorname{id}$. For every coequalizer $q$, step 3.1 gives $qP=q$, so $q=(q i)r$; if $q'=q''r$, then $q''=q'i$ by $r i=\operatorname{id}$. Thus $r$ has the coequalizer universal property. Since the left $A$-action on $X$ commutes with its right $B$-action, its tensor with $\operatorname{id}_M$ commutes with $P$ and preserves the image; restricting along $i,r$ defines the descended left $A$-action. [given, F1, step 2.1, step 3.1, algebra] ∎
