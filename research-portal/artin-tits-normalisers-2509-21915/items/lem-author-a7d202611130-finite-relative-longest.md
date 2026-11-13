---
id: lem-author-a7d202611130-finite-relative-longest
kind: lemma
title: Finite relative longest element without spherical ambient rank
status: published
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-parabolic-subgroups-artin-tits-normalisers
  - def-longest-elements-artin-tits-normalisers
  - def-associates-artin-tits-normalisers
  - def-brink-howlett-artin-tits-normalisers
  - rem-opposite-convention-artin-tits-normalisers
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-parabolic-subgroups-artin-tits-normalisers: mathematical-premise
  def-longest-elements-artin-tits-normalisers: mathematical-premise
  def-associates-artin-tits-normalisers: mathematical-premise
  def-brink-howlett-artin-tits-normalisers: mathematical-premise
  rem-opposite-convention-artin-tits-normalisers: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Matthew Dyer and Harrison Gimenez, Root Systems, Tits Cones and Imaginary
        Cones of Brink-Howlett Groupoids
      url: https://arxiv.org/abs/2606.12937v1
      locator: §1.24 (component convention) and Lemma 1.25, especially (a),(c),
        PDF/printed p. 10; arbitrary-rank convention §1.4, p. 4
      statement: For simple-root subsets J⊆H, finiteness of (W_H\W_J)∩Ref(W) is
        equivalent to finitely many components of H meeting H\J, all of finite
        type. Their union D is spherical. For r=ν(H\J,J)=w_D w_(D∩J), Lemma
        1.25(a) gives Φ_H^+\Φ_J^+=Φ_D^+\Φ_(D∩J)^+=Φ^+∩r^(-1)Φ^-, and (c) gives
        rJ=(J\D)∪r(J∩D)⊆H.
      hypotheses: A Coxeter system with a based root system, including the standard
        geometric root system; J⊆H⊆Π and (W_H\W_J)∩Ref(W) finite. Arbitrary rank
        is allowed; neither W nor W_J is assumed finite.
      reading_limits: For this repair, read the frozen extracted §1.24 and Lemma 1.25
        and visually checked Lemma 1.25 on PDF p. 10; read the arbitrary-rank
        convention in §1.4. Only the component convention and the stated
        relative-longest result are imported. No reconstruction of its proof or
        reading of Brink–Howlett (1999) is claimed.
    - title: Matthew Dyer and Harrison Gimenez, Root Systems, Tits Cones and Imaginary
        Cones of Brink-Howlett Groupoids
      url: https://arxiv.org/abs/2606.12937v1
      locator: §§1.2–1.4, PDF/printed pp. 3–4 (reflections, root signs and
        positive-root bijection); §1.28, PDF/printed p. 11 (reflection-subgroup
        root subsystem and standard parabolics)
      statement: "The standard based root system has the disjoint decomposition
        Φ=Φ^+⊔Φ^- with Φ^-=-Φ^+. The map α↦s_α is a bijection Φ^+→Ref(W). For a
        reflection subgroup U, its root subsystem is Φ_U={α∈Φ:s_α∈U}; for U=W_L
        its canonical simple-root set is Π_L. Consequently α↦s_α restricts to
        Φ_L^+↔W_L∩Ref(W). The reflection formula in §1.2 is equivariant under
        W⊆O(V,B): s_(wα)=w s_α w^(-1)."
      hypotheses: A Coxeter system with its based root system in (V,B), in particular
        the standard geometric root system; L is any subset of its simple
        indices. The ambient system and W_L may have infinite rank or be
        infinite.
      reading_limits: For this repair, read the frozen extracted §§1.2–1.4 and §1.28
        through its reflection-subgroup conventions, and visually checked the
        root-subsystem formulas on PDF p. 11. Import only these statements and
        definitions, not their background proofs or any corank theorem. The
        equivariance identity follows directly by substituting the B-preserving
        W-action into the displayed reflection formula. No reading of the cited
        background references is claimed.
formulation_deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-parabolic-subgroups-artin-tits-normalisers
  - def-longest-elements-artin-tits-normalisers
  - def-associates-artin-tits-normalisers
  - def-brink-howlett-artin-tits-normalisers
  - rem-opposite-convention-artin-tits-normalisers
argument_deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-parabolic-subgroups-artin-tits-normalisers
  - def-longest-elements-artin-tits-normalisers
  - def-associates-artin-tits-normalisers
  - def-brink-howlett-artin-tits-normalisers
  - rem-opposite-convention-artin-tits-normalisers
dependency_level: 11
---

## Statement

Let $(W,S)$ be a Coxeter system with $S=\{s_i:i\in\Gamma_0\}$, where $\Gamma_0$ may be infinite, and use its standard geometric root system $\Phi=\Phi^+\sqcup\Phi^-$. For $L\subseteq\Gamma_0$, write $W_L$ and $\Phi_L$ for its standard parabolic subgroup and roots, and put $\Pi_L=\{\alpha_i:i\in L\}$. Let $I\subseteq\Gamma_0$, let $a,b\in\Gamma_0\setminus I$ be distinct, and put $T=I\cup\{a,b\}$. Suppose $|\Phi_T\setminus\Phi_I|<\infty$. Let $D$ be the union of the connected components of the diagram induced on $T$ that meet $\{a,b\}$. Then $D$ is spherical, meaning $W_D$ is finite. With $w_L$ denoting the longest element whenever $W_L$ is finite, $r=w_Dw_{D\cap I}$ maps $\Pi_I$ onto $\Pi_K$ for an associate $K\subseteq T$ of $I$, and $q=r^{-1}$ is an article Brink–Howlett morphism $I\to K$ in the groupoid of associates of $I$. Writing $N(x)=\Phi^+\cap x\Phi^-$, one has $N(q)=\Phi_T^+\setminus\Phi_I^+$.

## Statement references

[[def-coxeter-data-artin-tits-normalisers]]

[[def-parabolic-subgroups-artin-tits-normalisers]]

[[def-longest-elements-artin-tits-normalisers]]

[[def-associates-artin-tits-normalisers]]

[[def-brink-howlett-artin-tits-normalisers]]

[[rem-opposite-convention-artin-tits-normalisers]]

## Facts & Assumptions

[F1] The ambient diagram and geometric action, parabolic root sets, longest elements, associates and article morphisms use [[def-coxeter-data-artin-tits-normalisers]]; [[def-parabolic-subgroups-artin-tits-normalisers]]; [[def-longest-elements-artin-tits-normalisers]]; [[def-associates-artin-tits-normalisers]]; [[def-brink-howlett-artin-tits-normalisers]]; [[rem-opposite-convention-artin-tits-normalisers]].

[F2] The root-sign decomposition and parabolic root–reflection correspondence in the External input section are the independent inputs from Dyer–Gimenez §§1.2–1.4 and 1.28.

[F3] The finite-relative-longest result in the External input section is Dyer–Gimenez Lemma 1.25(a),(c), with the component convention preceding it.

## External input

Dyer–Gimenez §§1.2–1.4 and 1.28 give $\Phi=\Phi^+\sqcup(-\Phi^+)$, the bijection $\alpha\mapsto s_\alpha$ from $\Phi^+$ to $\operatorname{Ref}(W)$, and $\Phi_L=\{\alpha\in\Phi:s_\alpha\in W_L\}$ for every standard parabolic $W_L$. Thus this bijection restricts to $\Phi_L^+\leftrightarrow W_L\cap\operatorname{Ref}(W)$. Here $\operatorname{Ref}(W)=\{ws_iw^{-1}:w\in W,\ i\in\Gamma_0\}$. The reflection formula and the $W$-invariance of the bilinear form give $s_{w\alpha}=ws_\alpha w^{-1}$. These inputs apply in arbitrary rank. [Root-system and parabolic-subsystem source](https://arxiv.org/abs/2606.12937v1).

Dyer–Gimenez Lemma 1.25 says that for simple-root subsets $J_0\subseteq H_0$, finiteness of $(W_{H_0}\setminus W_{J_0})\cap\operatorname{Ref}(W)$ makes the union $D_0$ of components of $H_0$ meeting $H_0\setminus J_0$ spherical. For $r_0=w_{D_0}w_{D_0\cap J_0}$, it gives $r_0J_0\subseteq H_0$ as a simple-root subset and $\Phi^+\cap r_0^{-1}\Phi^-=\Phi_{H_0}^+\setminus\Phi_{J_0}^+$. The notation here treats $J_0,H_0,D_0$ as sets of simple roots, as in that source. [Relative-longest source, Lemma 1.25(a),(c)](https://arxiv.org/abs/2606.12937v1).

## Proof

**Given:** The Coxeter system, subsets and finite relative-root difference in the Statement, the definitions in [F1], and the explicitly imported premises [F2]–[F3].

**Goal:** Establish the stated relative-longest construction and inversion set.

1.1 By [F2], $\alpha\mapsto s_\alpha$ identifies $\Phi_T^+\setminus\Phi_I^+$ with $(W_T\setminus W_I)\cap\operatorname{Ref}(W)$: its restrictions to the two nested parabolics are bijections. Also $\Phi_T\setminus\Phi_I$ is the disjoint union of $\Phi_T^+\setminus\Phi_I^+$ and its negative, since both parabolic root sets are closed under negation. Thus finiteness of the full root difference is equivalent to finiteness of that reflection difference. [F1, F2, given]

2.1 Apply [F3] to the simple-root subsets $J_0=\Pi_I\subseteq H_0=\Pi_T$. Under the index-to-simple-root identification, $D_0=\Pi_D$. Hence $W_D$ is finite, as is its subgroup $W_{D\cap I}$, so the longest elements in $r=w_Dw_{D\cap I}$ are defined. The imported conclusions give $r\Pi_I=\Pi_K$ for some $K\subseteq T$, and $N(r^{-1})=\Phi_T^+\setminus\Phi_I^+$. This is the source element $\nu(\{a,b\},I)$ with its arguments written in index notation. [F1, F3, step 1.1]

3.1 By the reflection equivariance in [F2], $r\Pi_I=\Pi_K$ gives $rW_Ir^{-1}=W_K$, so $K$ is an associate of $I$. Inverting the root-set equality gives $q\Pi_K=\Pi_I$ for $q=r^{-1}$. By [[def-brink-howlett-artin-tits-normalisers]], this is precisely an article morphism $I\to K$; [[rem-opposite-convention-artin-tits-normalisers]] identifies the same arrow convention. Step 2.1 supplies the required $N(q)$. No finiteness condition has been placed on components of $I$ outside $D$. [F1, F2, step 2.1] ∎
