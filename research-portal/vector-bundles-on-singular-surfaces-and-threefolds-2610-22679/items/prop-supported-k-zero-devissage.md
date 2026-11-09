---
id: prop-supported-k-zero-devissage
kind: proposition
title: Dévissage of K zero with regular ambient support
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - def-nonconnective-k-spectrum-interface
  - def-scheme-perfect-complexes
  - thm-author-3a003d7b5208-nonconnective-k-zero-input
  - lem-author-3a003d7b5208-triangle-presentation
  - lem-author-7ef3227685d9-supported-k0-heart
  - lem-author-7ef3227685d9-supported-k0-euler
  - lem-author-7ef3227685d9-supported-k0-postnikov
  - lem-author-7ef3227685d9-supported-k0-ideal-filtration
  - lem-author-7ef3227685d9-supported-k0-devissage-naturality
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  thm-author-3a003d7b5208-nonconnective-k-zero-input: mathematical-premise
  lem-author-3a003d7b5208-triangle-presentation: mathematical-premise
  lem-author-7ef3227685d9-supported-k0-heart: mathematical-premise
  lem-author-7ef3227685d9-supported-k0-euler: mathematical-premise
  lem-author-7ef3227685d9-supported-k0-postnikov: mathematical-premise
  lem-author-7ef3227685d9-supported-k0-ideal-filtration: mathematical-premise
  lem-author-7ef3227685d9-supported-k0-devissage-naturality: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 14
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied constructions. Let $U$ be a regular Noetherian finite-dimensional scheme and $i:T\hookrightarrow U$ any closed subscheme with defining ideal $\mathcal I$. Let $K_0^{|T|}(U)=\pi_0K_{|T|}(U)$ for the specified nonconnective K-theory of the current supported perfect category. There is a canonical isomorphism
$$K_0^{|T|}(U)\xrightarrow{\sim}G_0(T),$$
where $G_0(T)$ is the Grothendieck group of coherent sheaves on $T$ with short exact relations. For a supported perfect object $E$ it is the coherent-cohomology Euler class followed by ideal-power dévissage, explicitly
$$[E]\longmapsto\sum_n(-1)^n\sum_{r\geq0}[\mathcal I^rH^n(E)/\mathcal I^{r+1}H^n(E)].$$
Each quotient is regarded as a coherent $\mathcal O_T$-module; both sums are finite after deleting zero terms, and the resulting class is independent of the chosen annihilating powers. The inverse sends $[F]$ to the class of the perfect $U$-object $i_*F[0]$.

Under this isomorphism the support-to-global map $K_0^{|T|}(U)\to K_0(U)$ is coherent pushforward $G_0(T)\xrightarrow{i_*}G_0(U)$ followed by the regular ambient perfect comparison $G_0(U)\xrightarrow{\sim}K_0(U)$, sending $[M]$ to $[M[0]]$. No regularity of $T$, global vector-bundle resolution or resolution-property assumption is imposed. No analogous identification for singular ambient $U$ is asserted.

## Statement references
[[def-nonconnective-k-spectrum-interface]]

[[lem-author-7ef3227685d9-supported-k0-postnikov]]

[[lem-author-7ef3227685d9-supported-k0-devissage-naturality]]

## Facts & Assumptions

[A1] The Choice assumption in Given and the stated universes are used through the essentially small perfect-category presentations and the specified nonconnective K-theory model. [[math:def-axiom-of-choice]]
**Given:** $U,T,i,\mathcal I$ as in the Statement, AC and fixed suitable universes. The supported category is the supplied full sheaf-derived $\mathrm{Perf}_{|T|}(U)$, not complexes internally constructed in a coherent abelian category.

**Goal:** Prove the stated comparison and support-to-global compatibility in the current nonconnective model.

[F1] [[lem-author-7ef3227685d9-supported-k0-heart]], [[lem-author-7ef3227685d9-supported-k0-euler]] and [[lem-author-7ef3227685d9-supported-k0-postnikov]] give the actual bounded supported t-structure, additive coherent Euler map and Postnikov inverse, together with the general spectral $\pi_0$ premise [[thm-author-3a003d7b5208-nonconnective-k-zero-input]].

[F2] [[lem-author-7ef3227685d9-supported-k0-ideal-filtration]] and [[lem-author-7ef3227685d9-supported-k0-devissage-naturality]] give finite ideal-power dévissage, its inverse formula and coherent pushforward compatibility.

[F3] [[def-scheme-perfect-complexes]] and [[def-nonconnective-k-spectrum-interface]] supply the full stable idempotent-complete supported categories, their essentially small presentations and the actual support inclusion. [[lem-author-3a003d7b5208-triangle-presentation]] identifies object/cofiber and triangle presentations.

## Proof
1.1 By [F1], the degree-zero group of the current nonconnective functor identifies with $G_0(\mathcal A_T)$ by the coherent-cohomology Euler map. By [F2], closed coherent pushforward gives $G_0(T)\simeq G_0(\mathcal A_T)$. Compose the former map with the inverse of the latter. This is an isomorphism, and its displayed formula is exactly the Euler sum followed by the ideal-power quotient sum. Finiteness and independence follow from [F1]–[F2]. [F1, F2, F3, A1]

2.1 The two inverse constructions take $[F]$ first to $[i_*F]$ and then to the class of $i_*F[0]$ by [F1]–[F2]. This object is perfect by the imported local regular-perfect theorem applied to its coherent degree-zero cohomology. Thus the inverse has the asserted actual-object interpretation without any global locally free resolution. [F1, F2, F3, step 1.1]

3.1 The Euler/Postnikov comparisons commute with supported-to-global inclusion by [F1]. Under abelian dévissage the corresponding map is precisely coherent pushforward by [F2]. Their commutative squares compose to the stated support-to-global formula, using the same ambient comparison with $T=U$. This establishes the full proposition in the specified nonconnective model. [F1, F2, F3, step 1.1, step 2.1] ∎
