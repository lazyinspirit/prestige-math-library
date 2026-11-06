---
id: pthm-cmp-heterotic-cy3-chiral-index
kind: physics-theorem
title: Heterotic Calabi–Yau bundle chiral index
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
category: string-theory
deps:
- lem-gts-general-projective-threefold-gaga-by-finite-projection
- def-axiom-of-choice
- def-chern-classes-from-the-projective-bundle-relation
- def-chern-classes-of-a-vector-bundle
- def-chern-character-and-todd-class
- def-cmp-heterotic-associated-vector-bundle
- def-cmp-heterotic-cy3-bundle-compactification
- def-e-valued-dolbeault-operators-and-ltwo-structure
- def-euler-characteristic-coherent-sheaf
- post-cmp-heterotic-cohomology-spectrum-dictionary
- thm-acyclic-resolution-theorem-for-right-derived-functors
- thm-dolbeault-lemma-polydisc
- thm-grothendieck-riemann-roch-for-projective-morphisms
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- thm-smooth-function-module-sheaves-are-acyclic
dependency_roles:
  lem-gts-general-projective-threefold-gaga-by-finite-projection: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  def-chern-classes-of-a-vector-bundle: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  def-cmp-heterotic-associated-vector-bundle: mathematical-premise
  def-cmp-heterotic-cy3-bundle-compactification: formulation-prerequisite
  def-e-valued-dolbeault-operators-and-ltwo-structure: mathematical-premise
  def-euler-characteristic-coherent-sheaf: mathematical-premise
  post-cmp-heterotic-cohomology-spectrum-dictionary: physical-assumption
  thm-acyclic-resolution-theorem-for-right-derived-functors: mathematical-premise
  thm-dolbeault-lemma-polydisc: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  thm-smooth-function-module-sheaves-are-acyclic: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Philip S. Candelas, Gary T. Horowitz, Andrew D. Strominger, and Edward Witten, Vacuum Configurations for Superstrings
    url: https://ooguri.caltech.edu/documents/31340/Candelas_Horowitz_Strominger_Witten.pdf
    locator: '§4, journal pp. 62–65 (PDF pp. 17–20): standard-embedding generation index. The cohomological and GRR derivation
      below fixes the sign convention locally.'
  - title: 'Angel M. Uranga, String Theory: A Graduate Course, Lecture 9: Calabi–Yau compactification and Heterotic String
      phenomenology'
    url: https://members.ift.uam-csic.es/auranga/lect13.pdf
    locator: 'PDF pp. 20–23: Dirac index, bundle cohomology and the convention-dependent sign of the net chiral count.'
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional index deduction for an actual paired gauge-adjoint matter sector in a smooth projective heterotic bundle phase, at leading tree level in the two-derivative linearized massless-mode approximation as g_str=exp(Phi_0) tends to zero and alpha-prime/L^2 tends to zero for string-frame g_L=L^2 g_0 at fixed smooth shape and holomorphic bundle. No finite-parameter error bound or persistence after corrections is claimed. It predicts the signed net index, not vector-like pairs, the full spectrum, experimental data or vacuum existence."
---

## Statement

Assume the Axiom of Choice. Let $X$ be a smooth, connected, irreducible projective complex threefold with specified trivialization $K_X\cong\mathcal O_X$ and complex orientation. For a locally free holomorphic bundle $E$ on $X$, write $c_i^{\mathrm{top}}(E)\in H^{2i}(X;\mathbb Z)$ for the topological Chern class of its underlying complex bundle, and write $c_i^{\mathrm{CH}}(E)\in A^i(X)$ for its algebraic Chow Chern class. Let $A^*(X)_{\mathbb Q}=A^*(X)\otimes\mathbb Q$ and let $\deg_X:A^3(X)_{\mathbb Q}\to\mathbb Q$ be the degree of the resulting zero-cycle class, extended rationally; this algebraic degree is distinct in definition from evaluation of a topological cohomology class on $[X]$. Let $V_R$ be a rank-$r>0$ locally free holomorphic bundle in an actual paired gauge-adjoint matter sector of the adopted `post-cmp-heterotic-cohomology-spectrum-dictionary`: $R$ and $\overline R$ are distinct conjugate representations of the unbroken gauge centralizer, and $V_R$ comes from the full structure-group multiplicity representation paired with $R$ in the adjoint branching. Use the dictionary only at leading tree level in its two-derivative, linearized massless-mode approximation. In natural units fix a smooth internal shape metric $g_0$, complex structure and holomorphic bundle, use the string-frame metrics $g_L=L^2g_0$ and constant dimensionless dilaton $\Phi_0$, and take the joint formal limit $g_{\mathrm{str}}=e^{\Phi_0}\to0$, $\alpha'/L^2\to0$, where $[L]=\mathrm{length}$ and $[\alpha']=\mathrm{length}^2$. No finite-parameter error bound or persistence of unprotected massless states after corrections is asserted. Assume
$$c_1^{\mathrm{top}}(T_X)=c_1^{\mathrm{top}}(V_R)=0,\qquad c_1^{\mathrm{CH}}(T_X)=c_1^{\mathrm{CH}}(V_R)=0\text{ in }A^1(X)_{\mathbb Q},$$
and coherent cohomology $H^0(X,\mathcal V_R)=H^3(X,\mathcal V_R)=0$, where $\mathcal V_R$ is the coherent sheaf of holomorphic sections of $V_R$. By the Dolbeault resolution comparison in the Proof, put $h^q(X,V_R)=\dim_{\mathbb C}H_{\bar\partial}^q(X,V_R)=\dim_{\mathbb C}H^q(X,\mathcal V_R)$, and use the adopted chirality convention $N_R-N_{\overline R}=h^1(X,V_R)-h^2(X,V_R)$. Then
$$N_R-N_{\overline R}=-\chi(X,\mathcal V_R)=-\deg_X\!\left([\operatorname{ch}^{\mathrm{CH}}(V_R)\operatorname{td}^{\mathrm{CH}}(T_X)]_3\right)=-\frac12\deg_X(c_3^{\mathrm{CH}}(V_R)).$$
Replacing $V_R$ by its dual exchanges the representation assignment and reverses this signed index, with the same endpoint vanishings transferred by Serre duality. This index does not determine vector-like pairs or the full massless spectrum.

## Statement references

[[def-cmp-heterotic-cy3-bundle-compactification]]

[[def-chern-classes-from-the-projective-bundle-relation]]

[[def-chern-classes-of-a-vector-bundle]]

[[def-e-valued-dolbeault-operators-and-ltwo-structure]]

[[post-cmp-heterotic-cohomology-spectrum-dictionary]]

[[thm-acyclic-resolution-theorem-for-right-derived-functors]]

[[thm-dolbeault-lemma-polydisc]]

[[thm-smooth-function-module-sheaves-are-acyclic]]

[[thm-grothendieck-riemann-roch-for-projective-morphisms]]

[[def-chern-character-and-todd-class]]

[[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]

## Facts & Assumptions

**Given:** The Axiom of Choice; a smooth connected irreducible projective complex threefold $X$ with $K_X\cong\mathcal O_X$; the specified leading-order joint-limit matter sector; the locally free holomorphic bundle $V_R$ and its coherent sheaf $\mathcal V_R$; the topological and Chow Chern classes typed in the Statement; and the stated endpoint and Chow-class vanishing hypotheses.

[F9] [[lem-gts-general-projective-threefold-gaga-by-finite-projection]] algebraizes the given holomorphic bundle on the actual arbitrary smooth projective threefold, uniquely up to isomorphism, and canonically identifies analytic and algebraic coherent cohomology in every degree and identifies duals. In the algebraic expressions below, $\mathcal V_R$ denotes this finite locally free algebraization; its analytification is the original holomorphic section sheaf. Thus the Chow Chern classes and the input to GRR have a defined algebraic carrier. No projective-space hypothesis on $X$ is imposed.

[F1] [[thm-grothendieck-riemann-roch-for-projective-morphisms]] applies to $X\to\operatorname{Spec}\mathbb C$ and $[\mathcal V_R]\in K_0(X)$; it identifies $\chi(X,\mathcal V_R)$ with $\deg_X([\operatorname{ch}^{\mathrm{CH}}(V_R)\operatorname{td}^{\mathrm{CH}}(T_X)]_3)$ in the rational Chow ring.

[F2] [[def-chern-character-and-todd-class]] defines the Chern character and Todd class in $A^*(X)_{\mathbb Q}$ and gives $\operatorname{ch}_1^{\mathrm{CH}}=c_1^{\mathrm{CH}}$, $\operatorname{ch}_2^{\mathrm{CH}}=\tfrac12((c_1^{\mathrm{CH}})^2-2c_2^{\mathrm{CH}})$, $\operatorname{ch}_3^{\mathrm{CH}}=\tfrac16((c_1^{\mathrm{CH}})^3-3c_1^{\mathrm{CH}}c_2^{\mathrm{CH}}+3c_3^{\mathrm{CH}})$, and $\operatorname{td}^{\mathrm{CH}}=1+\tfrac12c_1^{\mathrm{CH}}+\tfrac1{12}((c_1^{\mathrm{CH}})^2+c_2^{\mathrm{CH}})+\tfrac1{24}c_1^{\mathrm{CH}}c_2^{\mathrm{CH}}+\cdots$.

[F3] [[def-euler-characteristic-coherent-sheaf]] defines $\chi(X,\mathcal V_R)=\sum_{q=0}^3(-1)^q\dim_{\mathbb C}H^q(X,\mathcal V_R)$, with finite-dimensional terms on this projective variety.

[F4] [[post-cmp-heterotic-cohomology-spectrum-dictionary]] adopts $h^1(X,V_R)$ and $h^2(X,V_R)$ as multiplicities in the paired distinct conjugate unbroken-gauge representations $R$ and $\overline R$, where $V_R$ is the associated bundle for the corresponding full structure-group multiplicity representation in the actual gauge-adjoint branching. This applies only in the joint weak-coupling, fixed-shape large-radius limit, at leading tree-level, two-derivative, linearized massless-mode order, with no finite-parameter error estimate or persistence claim. These physical conditions are hypotheses of this theorem, including when using the dual paired sector.

[F5] [[def-cmp-heterotic-associated-vector-bundle]] defines $V_R$ as the locally free holomorphic vector bundle in the chosen representation.

[F6] [[def-chern-classes-from-the-projective-bundle-relation]] defines $c_i^{\mathrm{top}}$ in integral singular cohomology, while [[def-chern-classes-of-a-vector-bundle]] defines $c_i^{\mathrm{CH}}$ in the algebraic Chow ring of a smooth scheme; these are distinct typed classes here.

[F7] [[def-e-valued-dolbeault-operators-and-ltwo-structure]] defines the global $V_R$-valued Dolbeault complex. In a holomorphic frame the local Dolbeault lemma [[thm-dolbeault-lemma-polydisc]] applies componentwise, and each sheaf of smooth $V_R$-valued forms is acyclic by [[thm-smooth-function-module-sheaves-are-acyclic]]. Thus the Dolbeault complex is an acyclic resolution of the original holomorphic section sheaf, identified with $\mathcal V_R^{an}$ by [F9]. Applying [[thm-acyclic-resolution-theorem-for-right-derived-functors]] to the global-sections functor, with the injective-resolution data defining sheaf cohomology and all successive kernel sheaves in its domain, identifies its global cohomology canonically with coherent sheaf cohomology. Its DC hypothesis is covered by the assumed AC.

[F8] [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]] gives the perfect pairings $H^q(X,\mathcal V_R)\times H^{3-q}(X,\mathcal V_R^\vee\otimes K_X)\to\mathbb C$ in the stated smooth projective hypotheses.

[A1] [[def-axiom-of-choice]] is assumed as an ambient mathematical hypothesis and is inherited by the exact imported GRR, coherent cohomology, and Serre-duality carriers. Its use is mathematical; no physical measurement or experimental premise enters this deduction.

[A2] The topological equalities $c_1^{\mathrm{top}}(V_R)=c_1^{\mathrm{top}}(T_X)=0$, the rational Chow equalities $c_1^{\mathrm{CH}}(V_R)=c_1^{\mathrm{CH}}(T_X)=0$, and $H^0(X,\mathcal V_R)=H^3(X,\mathcal V_R)=0$ are explicit hypotheses. The topological vanishings alone are not used as substitutes for the Chow-class vanishings; neither is inferred merely from the phrase “Calabi–Yau.”

## Proof

**Given:** The projective threefold, bundle and hypotheses above, with [F1]–[F9] and [A1]–[A2].

1.1 First use [F9] to choose the finite locally free algebraization of the given holomorphic $V_R$; all algebraic Chow and GRR notation refers to this algebraization. On each holomorphic coordinate polydisc with a holomorphic frame of rank $r$, the sheaf complex $0\to\mathcal O(V_R)\to\mathcal A^{0,0}(V_R)\xrightarrow{\bar\partial_{V_R}}\cdots\xrightarrow{\bar\partial_{V_R}}\mathcal A^{0,3}(V_R)\to0$ is the direct sum of $r$ scalar Dolbeault resolutions in its coefficient functions: at degree zero its kernel consists of holomorphic sections, and at every positive degree local closedness is exact by [F7] and the componentwise theorem [[thm-dolbeault-lemma-polydisc]]. Each $\mathcal A^{0,q}(V_R)$ is a sheaf of modules over the sheaf of smooth real functions, so it is acyclic for global sections by [F7]. The acyclic resolution theorem [[thm-acyclic-resolution-theorem-for-right-derived-functors]] in [F7] therefore identifies the cohomology of its global-section complex, which is $H_{\bar\partial}^q(X,V_R)$ by the Definition, with $H^q(X^{an},\mathcal V_R^{an})$. Combining this with [F9] gives the Dolbeault-to-algebraic-coherent comparison used below; it applies here because $X$ is a smooth projective complex threefold and $V_R$ is holomorphic. [given, F5, F7, F9, algebra]

2.1 By [F3] and [A2], $\chi(X,\mathcal V_R)=h^0-h^1+h^2-h^3=-h^1(X,V_R)+h^2(X,V_R)$. The adopted assignment [F4] defines $N_R-N_{\overline R}=h^1-h^2$, so $N_R-N_{\overline R}=-\chi(X,\mathcal V_R)$. [given, F3, F4, A2, step 1.1, algebra]

3.1 The algebraic sheaf $\mathcal V_R$ is finite locally free by [F9], and its cohomology is the analytic cohomology used in step 2.1. Apply [F1] to the projective structure morphism $f:X\to\operatorname{Spec}\mathbb C$; its source and target are nonsingular irreducible quasi-projective schemes, and AC is [A1]. The Hirzebruch–Riemann–Roch clause gives $\chi(X,\mathcal V_R)=\deg_X([\operatorname{ch}^{\mathrm{CH}}(V_R)\operatorname{td}^{\mathrm{CH}}(T_X)]_3)$. Combining this with step 2.1 gives the first equality in the Formula. [given, F1, F5, F9, A1, step 2.1]

4.1 In the rational Chow ring, [F2] gives $\operatorname{ch}^{\mathrm{CH}}_1(V_R)=c_1^{\mathrm{CH}}(V_R)=0$, $\operatorname{ch}^{\mathrm{CH}}_2(V_R)=-c_2^{\mathrm{CH}}(V_R)$, and $\operatorname{ch}^{\mathrm{CH}}_3(V_R)=\tfrac12c_3^{\mathrm{CH}}(V_R)$ under [A2]. The same formulas and $c_1^{\mathrm{CH}}(T_X)=0$ give $\operatorname{td}^{\mathrm{CH}}_1(T_X)=0$ and $\operatorname{td}^{\mathrm{CH}}_3(T_X)=0$. Therefore the codimension-three part of the product in step 3.1 is exactly $\operatorname{ch}^{\mathrm{CH}}_3(V_R)=\tfrac12c_3^{\mathrm{CH}}(V_R)$: all other degree-three summands contain either $\operatorname{ch}^{\mathrm{CH}}_1(V_R)$, $\operatorname{td}^{\mathrm{CH}}_1(T_X)$, or $\operatorname{td}^{\mathrm{CH}}_3(T_X)$. Taking the Chow degree yields the second Formula equality. [given, F2, A2, step 3.1, algebra]

5.1 The dual compatibility and cohomology comparisons of [F9] transport the algebraic Serre pairing [F8] to the original analytic bundles. This pairing, the specified trivialization $K_X\cong\mathcal O_X$, and the definition of $V_R^\vee$ give $H^q(X,\mathcal V_R^\vee)\cong H^{3-q}(X,\mathcal V_R)^*$ for every $q$. Thus the assumed endpoint vanishings transfer to $H^0(X,\mathcal V_R^\vee)=H^3(X,\mathcal V_R^\vee)=0$, and $h^1(X,V_R^\vee)=h^2(X,V_R)$ while $h^2(X,V_R^\vee)=h^1(X,V_R)$; the adopted dictionary therefore reverses the signed multiplicity. Also the algebraic Chern roots of $V_R^\vee$ are $-x_i$ when those of $V_R$ are $x_i$, so $c_3^{\mathrm{CH}}(V_R^\vee)=(-1)^3c_3^{\mathrm{CH}}(V_R)=-c_3^{\mathrm{CH}}(V_R)$ by the splitting definition in [F2]. Hence the GRR expression itself changes sign as well. [F2, F4, F8, F9, A2, step 1.1, algebra] ∎
