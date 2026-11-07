---
id: lem-s-outside-units-are-cohomologically-acyclic
kind: lemma
title: Cohomological acyclicity of the units outside S
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-axiom-of-choice
  - lem-unramified-local-unit-norms-and-cohomology
  - thm-shapiro-lemma-for-group-cohomology
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
proof_strategy: direct
axiom_use: AC is explicit for choices of places in infinitely many finite fibres and for the supplied Shapiro interface. Continuous normalized cochains are used without assuming a derived-category convention.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed."
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Chapter I, Lemma 4.4, printed pp. 50–51, read in the local text; the finite-stage product/cochain step is made explicit here."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a global field, $S$ a set of its places containing all archimedean places, and $K_S/K$ the maximal Galois extension unramified outside $S$. For every finite Galois intermediate field $F/K$, let
$$U_{F,S}=\prod_{w\notin S_F}\mathcal O_{F_w}^{\times},$$
with the natural $\operatorname{Gal}(F/K)$ action, and set $U_S=\operatorname*{colim}_{F}U_{F,S}$ over the finite Galois intermediate fields. Give $U_S$ the discrete topology and use normalized continuous cochains. Then
$$H^r(\operatorname{Gal}(F/K),U_{F,S})=0\quad(r>0),\qquad H^r_{\rm cts}(\operatorname{Gal}(K_S/K),U_S)=0\quad(r>0),$$
and $U_S^{\operatorname{Gal}(K_S/K)}=U_{K,S}$. The same assertions hold after replacing $K$ by any finite intermediate field of $K_S/K$, using the places above $S$. This asserts no ideal-class capitulation or finite-$S$ class-formation isomorphism.

## Facts & Assumptions

**Given:** The field, set of places, unramified tower and unit products in the Statement, with normalized cochains.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] At any finite place, positive cohomology of the units in a finite unramified Galois extension of complete fields with finite residue fields is zero. [[lem-unramified-local-unit-norms-and-cohomology]]

[F2] Shapiro's lemma identifies the cohomology of a coinduced module with that of its subgroup under AC. [[thm-shapiro-lemma-for-group-cohomology]]

[F3] Continuous cohomology of a discrete module is the filtered limit of its finite-quotient cohomologies with invariant coefficients. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

## Proof

**Proof technique:** finite-orbit coinduction and exact products of cochains.

1.1 Fix a finite Galois $F/K$ in $K_S$ and write $G=\operatorname{Gal}(F/K)$. For each finite place $v\notin S$, all places of $F$ above $v$ form one finite $G$-orbit. Choose one $w_v$ in each orbit using [A1]. Its decomposition group $D_v$ is canonically the Galois group of $F_{w_v}/K_v$, which is unramified by the definition of $K_S$. Evaluation at $w_v$ and transport by $G$ identify the product of the unit groups over that orbit with $\operatorname{Coind}_{D_v}^{G}\mathcal O_{F_{w_v}}^{\times}$. Thus $U_{F,S}$ is the product over $v\notin S$ of these coinduced $G$-modules. [A1, given, choose, construct]

2.1 For a finite group $G$, normalized cochains $C^r(G,-)$ commute with arbitrary products: each is the finite product of the coefficient module indexed by the normalized $r$-tuples of $G$. Their differentials act coordinatewise. Products of short exact sequences of abelian groups are exact under [A1], so kernels and images of the product differential are the products of the individual kernels and images. Hence finite-group cohomology commutes with the product in step 1.1. [A1, step 1.1, algebra]

3.1 By [F2] each orbit term has cohomology $H^r(D_v,\mathcal O_{F_{w_v}}^{\times})$. It is zero for $r>0$ by [F1]. Step 2.1 proves $H^r(G,U_{F,S})=0$ for every positive $r$. An empty outside-place set gives the trivial coefficient and the same conclusion. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Put $\Gamma=\operatorname{Gal}(K_S/K)$. Each element of $U_S$ comes from one finite Galois stage, so the action is discrete continuous. If $F/K$ is finite Galois, the invariants of $U_S$ under $\operatorname{Gal}(K_S/F)$ are exactly the image of $U_{F,S}$. Indeed, a fixed element is represented at some finite Galois $E/K$ containing $F$; fixedness there forces invariance under $\operatorname{Gal}(E/F)$, and the fixed units in each unramified completion orbit are exactly the base completion units. Injectivity of the transition embeddings makes the equality literal in the direct limit. The finite-quotient comparison [F3] and step 3.1 then give $H^r_{\rm cts}(\Gamma,U_S)=0$ for $r>0$. Taking invariants at $F=K$ gives $U_S^\Gamma=U_{K,S}$. Replacing $K$ by a finite intermediate field repeats the argument with the cofinal finite Galois stages over that field. [F1, F3, step 3.1, construct, algebra] ∎
