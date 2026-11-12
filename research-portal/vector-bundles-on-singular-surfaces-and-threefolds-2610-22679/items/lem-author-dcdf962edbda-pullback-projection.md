---
id: lem-author-dcdf962edbda-pullback-projection
kind: lemma
title: Equivalence of the weight-zero pullback projection
status: published
domain: mathematics
deps:
  - lem-author-dcdf962edbda-restriction
  - thm-author-dcdf962edbda-source-input
  - lem-author-dcdf962edbda-qcqs-site
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  lem-author-dcdf962edbda-restriction: mathematical-premise
  thm-author-dcdf962edbda-source-input: mathematical-premise
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
formulation_deps:
  - lem-author-dcdf962edbda-restriction
  - thm-author-dcdf962edbda-source-input
  - lem-author-dcdf962edbda-qcqs-site
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - lem-author-dcdf962edbda-restriction
  - thm-author-dcdf962edbda-source-input
  - lem-author-dcdf962edbda-qcqs-site
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice and fix Grothendieck universes $U\in V\in W$ with $\omega\in U$, containing the fields and scheme data. Existence of these universes is a separate size assumption. Let $k\in U$ be a field whose prime subfield is identified with $F=\mathbb Q$ or $F=\mathbb F_p$ for a prime $p$. For $B=F,k$, let $\mathcal D_B$ be the category of quasi-compact quasi-separated (qcqs) $B$-schemes with data in $U$ and all $B$-morphisms. Use the general qcqs $F$-scheme cdh site and its representative-based evaluation convention. Let $\mathcal E=\mathcal D_\infty(\mathbb Z)$ be the stable infinity-localization of unbounded cochain complexes of $V$-small abelian groups at quasi-isomorphisms, considered in $W$; its homotopy category is $D(\mathbb Z)$.

The canonical source natural map $\rho_0:\mathbb Z(0)_{\mathrm{mot},F}\to\mathbb Z(0)_{\mathrm{cdh},F}$ is an equivalence in $\mathcal E$ at every $X\in\mathcal D_F$. Here these are the supplied weight-zero motivic and cdh functors, and $\rho_0$ is the left projection of their coherent source pullback square. Consequently its restriction along the forgetful functor $u_0:\mathcal D_k\to\mathcal D_F$, $X\mapsto X_F$, is a natural equivalence on all qcqs $k$-schemes within the size bound; $X_F$ is the scheme with structure map $X\to\operatorname{Spec}k\to\operatorname{Spec}F$. Its motivic source is the completed functor $\mathbb Z(0)_{\mathrm{mot},k}=u_0^*\mathbb Z(0)_{\mathrm{mot},F}$. These are equivalences of the actual comparison maps supplied by the pullback construction, and hence also equivalences after passing to $D(\mathbb Z)$.

## Statement references
[[lem-author-dcdf962edbda-restriction]]

[[thm-author-dcdf962edbda-source-input]]

[[lem-author-dcdf962edbda-qcqs-site]]

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

## Facts & Assumptions
**Given:** The stated field, prime-subfield identification, Choice and universe assumptions, and the supplied source functors and coherent square.

**Goal:** Prove that the canonical source projection and its restriction are equivalences.

[A1] [[math:def-axiom-of-choice]] is retained for the chosen skeleton and representative isomorphisms in the qcqs-site supplier and for the supplied derived enhancement. [[math:def-grothendieck-universe-closure-convention]] specifies universe closure; the existence of the stated nested universes is separately assumed.

[F1] [[lem-author-dcdf962edbda-qcqs-site]] supplies the prime-field, qcqs, size, cdh-site and representative-based evaluation conventions, including the underlying $F$-scheme $X_F$.

[F2] [[lem-author-dcdf962edbda-restriction]] supplies $\mathcal E$, its finite coherent limits and homotopy category, the forgetful functor $u_0$, the identification of its restricted motivic source with the completed functor, and natural equivalence with evaluation on the chosen skeleton. Restriction preserves the actual coherent comparison diagrams and objectwise equivalences. A homotopy-cartesian square means that its upper-left vertex, with its maps and specified homotopy, is the limit of the other three vertices in the coherent category.

[F3] [[thm-author-dcdf962edbda-source-input]] supplies the natural coherent weight-zero square with left projection $\rho_0$ and right column $A_F(X)\xrightarrow{\eta_F}B_F(X)$. It imports this square from Elmanto–Morrow, Theorems 4.10(2) and 4.24(2), at $j=0$, and the equivalence of $\eta_F$ from Examples 4.11 and 4.26. Its hypotheses are exactly a qcqs scheme over $F=\mathbb Q$ or $\mathbb F_p$ and compatible size bounds.

## Proof
1.1 For any $X\in\mathcal D_F$, the coherent square of [F3] identifies its upper-left object with the limit of the cospan $A_F(X)\xrightarrow{\eta_F}B_F(X)\leftarrow\mathbb Z(0)_{\mathrm{cdh},F}(X)$ in $\mathcal E$, and identifies its projection to the last vertex with $\rho_0(X)$. Since $\eta_F$ is an equivalence, it gives an equivalence of this cospan with $B_F(X)\xrightarrow{\mathrm{id}}B_F(X)\leftarrow\mathbb Z(0)_{\mathrm{cdh},F}(X)$. The latter has limit $\mathbb Z(0)_{\mathrm{cdh},F}(X)$ with identity projection: its other map and homotopy are determined by the last vertex. The limit universal property identifies cones and their mapping spaces under an equivalence of diagrams, so the original projection is an equivalence as well. Thus the equivalence is precisely $\rho_0(X)$. These limits are coherent limits in $\mathcal E$, not ordinary pullbacks in its homotopy category. [A1, F1, F2, F3, construct]

2.1 The map $\rho_0$ is natural by [F3]; step 1.1 establishes that its actual component is an equivalence at every source object. For each $X\in\mathcal D_k$, composing its structure map gives $X_F\in\mathcal D_F$: its underlying scheme, and hence its qcqs property, are unchanged, and its data remain within the chosen bound. By [F2], restriction takes the component at $X$ to exactly $\rho_0(X_F)$, preserves its coherence and naturality, and identifies its motivic source with the stated completed functor. The representative-based site evaluation is naturally equivalent to this full-category evaluation by the same supplier. Hence the restricted map is an equivalence at every such $X$, with its actual source projection retained. Passing to $D(\mathbb Z)$ preserves these maps and equivalences. [A1, F1, F2, F3, step 1.1] ∎
