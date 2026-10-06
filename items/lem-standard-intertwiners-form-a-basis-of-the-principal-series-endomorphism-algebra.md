---
id: lem-standard-intertwiners-form-a-basis-of-the-principal-series-endomorphism-algebra
kind: lemma
title: "The standard intertwiners form a basis of the principal series endomorphism algebra"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-standard-intertwining-operators-for-finite-principal-series
  - lem-principal-series-endomorphisms-as-the-chi-idempotent-corner
  - thm-weyl-stabilizer-controls-principal-series-endomorphisms
  - def-diagonal-torus-characters-and-weyl-action
  - lem-mackey-support-for-homs-between-finite-principal-series
  - thm-bruhat-decomposition-of-gl-n-over-a-finite-field
  - prop-endomorphisms-form-a-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Lemma 11.8 and equation (11.7), printed pp. 48-49"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Section 11.3 (the basis $(B_{nw})$, the cocycle and the triviality of $\\lambda$ over $\\mathbb C$), printed pp. 48-50"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - The standard basis of $H(G,B)$ indexed by $W^F$, printed p. 44"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

The canonical, compensated operators $B_w$ defined in
[[def-standard-intertwining-operators-for-finite-principal-series]],
$w\in W_\chi$, form a $\mathbb C$-basis of
$\operatorname{End}_G I(\chi)$. Their dimension is $|W_\chi|$. For two
characters, the analogous corner between their idempotents, with the covariance
compensation and the opposite orientation matched to its source and target,
gives a Hom basis indexed by $\{w:\chi=w\cdot\chi'\}$. No choice principle is
used.

## Facts & Assumptions

**Given:** $G=\operatorname{GL}_n(\mathbb F_q)$ with Borel $B$ and torus $T$,
characters $\chi,\chi'\in\widehat T$ with idempotents $e_\chi,e_{\chi'}$, Weyl
action $w\cdot\chi$ and stabiliser $W_\chi$, the principal series modules
$I(\chi),I(\chi')$, and for $w\in W_\chi$ the compensated corner elements
$\Theta_w=q^{\ell(w)}e_\chi\dot we_\chi$ and operators
$B_w=R_{\Theta_{w^{-1}}}$.

[F1] The map $\mathbb C[G]e_\chi\to I(\chi)$, $ge_\chi\mapsto f_g$ with
$f_g(gb)=\widetilde\chi(b)^{-1}$ and $f_g=0$ off $gB$, is an isomorphism of left
$\mathbb C[G]$-modules; right multiplication identifies
$e_\chi\mathbb C[G]e_\chi$ with
$\operatorname{End}_{\mathbb C[G]}(\mathbb C[G]e_\chi)^{\mathrm{op}}$, the
elements $e_\chi\dot we_\chi$ with $w\in W_\chi$ form a basis of the corner, and
$\dim_{\mathbb C}\operatorname{End}_G(I(\chi))=|W_\chi|$
([[lem-principal-series-endomorphisms-as-the-chi-idempotent-corner]]).

[F2] The $B_w$, $w\in W_\chi$, are well defined by
$B_w=R_{\Theta_{w^{-1}}}$, the compensation
$\widetilde\chi(b_1)^{-1}\widetilde\chi(b_2)^{-1}e_\chi ge_\chi=e_\chi\dot we_\chi$
for $g=b_1\dot wb_2$ makes them independent of the choice of double-coset
representatives, and the family $(\Theta_w)_{w\in W_\chi}$ is a $\mathbb C$-basis
of the corner ([[def-standard-intertwining-operators-for-finite-principal-series]]).

[F3] The double cosets $B\dot wB$, $w\in S_n$, partition $G$
([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]]).

[F4] $(w\cdot\chi)(t)=\chi(\dot w^{-1}t\dot w)$ and
$W_\chi=\{w:w\cdot\chi=\chi\}$
([[def-diagonal-torus-characters-and-weyl-action]]).

[F5] $\dim_{\mathbb C}\operatorname{Hom}_G(I(\chi),I(\chi'))=\#\{w\in S_n:\chi=w\cdot\chi'\}$,
and this number equals $\#\{u:\chi'=u\cdot\chi\}$ under inversion
([[lem-mackey-support-for-homs-between-finite-principal-series]]).

[F6] $\dim_{\mathbb C}\operatorname{End}_G(I(\chi))=|W_\chi|$
([[thm-weyl-stabilizer-controls-principal-series-endomorphisms]]).



## Proof

**Proof technique:** direct.

1.1 For $A=\mathbb C[G]$, an $A$-linear map $Ae_\chi\to Ae_{\chi\prime}$ is determined by $a=f(e_\chi)$, which satisfies $e_\chi a=a$ and $ae_{\chi\prime}=a$. Conversely each $a\in e_\chi Ae_{\chi\prime}$ gives $f(ye_\chi)=ya$. Thus this mixed corner is naturally the vector space $\operatorname{Hom}_G(I(\chi),I(\chi\prime))$ under the models of [F1], and its dimension is $\#\{w:\chi=w\cdot\chi\prime\}$ by [F5]. [F1, F5, algebra]

2.1 Bruhat decomposition and $e_\chi b=\widetilde\chi(b)e_\chi$, $be_{\chi\prime}=\widetilde\chi\prime(b)e_{\chi\prime}$ show that the mixed corner is spanned by $e_\chi\dot w e_{\chi\prime}$, one vector per double coset. For $t\in T$, its left character is $\chi(t)$, while moving $t$ across $\dot w$ gives character $\chi\prime(\dot w^{-1}t\dot w)=(w\cdot\chi\prime)(t)$. Therefore the vector vanishes unless $\chi=w\cdot\chi\prime$. The remaining family has exactly the dimension computed in step 1.1 and still spans, so it is a basis. Right multiplication gives the corresponding Hom basis with precisely the source and target orientation of step 1.1. [F3, F4, step 1.1, algebra]

3.1 Taking $\chi'=\chi$ the surviving indices are exactly $W_\chi$ by [F4], so the mixed corner is $e_\chi\mathbb C[G]e_\chi$ with basis $e_\chi\dot we_\chi$, $w\in W_\chi$; rescaling each by $q^{\ell(w)}$ and reindexing $w\mapsto w^{-1}$ (a bijection of $W_\chi$) exhibits $\Theta_w$, $w\in W_\chi$, as a basis of the corner. By [F2] the right multiplication map $R$ is $\mathbb C$-linear and injective from the corner onto $\operatorname{End}_{\mathbb C[G]}(\mathbb C[G]e_\chi)$, transported to $\operatorname{End}_G(I(\chi))$; hence the $B_w=R_{\Theta_{w^{-1}}}$, $w\in W_\chi$, form a $\mathbb C$-basis of $\operatorname{End}_G(I(\chi))$. Its cardinality $|W_\chi|$ agrees with the independent computation $\dim_{\mathbb C}\operatorname{End}_G(I(\chi))=|W_\chi|$ of [F6], and the compensation convention of [F2] is exactly what makes each $B_w$ independent of representatives. [F1, F2, F4, F6, step 2.1, algebra]

4.1 Step 2.1 gives the mixed-corner basis indexed by $\{w:\chi=w\cdot\chi'\}$ together with the orientation identification of step 1.1, and step 3.1 gives the basis $(B_w)_{w\in W_\chi}$ of $\operatorname{End}_G(I(\chi))$ with $|W_\chi|$ elements; all families are finite and the permutation matrices $\dot w$ are explicit, so no choice principle is used. [step 1.1, step 2.1, step 3.1] ∎ 