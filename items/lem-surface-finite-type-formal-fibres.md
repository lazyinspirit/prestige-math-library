---
id: lem-surface-finite-type-formal-fibres
kind: lemma
title: Surface finite type formal fibres
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-ag-local-flatness-regular-parameters
- lem-flat-local-ascent-of-regularity
- lem-surface-complete-equicharacteristic-formal-fibres
- lem-surface-completed-polynomial-generic-fibre
- thm-completion-is-exact-on-finite-modules
- lem-surface-generic-power-series-formal-fibres
- lem-surface-finite-completion-factors
- lem-surface-completion-base-change-preserves-closed-fibre-local-completions
- thm-completion-of-a-noetherian-local-ring
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project: full proof imports for normal-surface resolution, lemma-check-G-ring-maximal-ideals,
      proposition-finite-type-over-G-ring, lemma-regular-permanence, lemma-regular-composition'
    url: https://stacks.math.columbia.edu/download/more-algebra.pdf
  - title: Stacks Lemmas 15.42.3–4 and 15.42.7, regular-map base change, composition and descent
    url: https://stacks.math.columbia.edu/tag/07QI
verification:
  precheck: pass
---

## Statement

Assume AC and DC. Let $A$ be a field or a complete equicharacteristic Noetherian local ring and $B$ an essentially finite-type $A$-algebra. Every formal fibre of every local ring of $B$ is geometrically regular over its residue fraction field. Equivalently, for primes $\mathfrak q\subseteq\mathfrak p$ of $B$, $\widehat{B_{\mathfrak p}}\otimes_B\kappa(\mathfrak q)$ is geometrically regular.

## Facts & Assumptions

**Given:** A field or complete equicharacteristic Noetherian local ring $A$, an essentially finite-type $A$-algebra $B$, and primes $\mathfrak q\subseteq\mathfrak p$ of $B$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-ag-local-flatness-regular-parameters.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(R,\mathfrak m)\to(S,\mathfrak n)$ be a local homomorphism of Noetherian local rings and let $M$ be a finite $S$-module. If $\operatorname{Tor}_1^R(R/\mathfrak m,M)=0$, then $M$ is flat over $R$. The module $M$ is not assumed finite over $R$. ([[lem-ag-local-flatness-regular-parameters]])

[F4] *lem-flat-local-ascent-of-regularity.* Assume the Axiom of Choice. For a flat local map $(R,\mathfrak m)\to(S,\mathfrak n)$ of nonzero Noetherian local rings: if $R$ and $S/\mathfrak mS$ are regular, then $S$ is regular. Conversely, regularity of $S$ implies regularity of $R$. ([[lem-flat-local-ascent-of-regularity]])

[F5] *lem-surface-complete-equicharacteristic-formal-fibres.* Assume AC. For a complete equicharacteristic Noetherian local ring $A$ and primes $\mathfrak q\subseteq\mathfrak p$, the formal fibre $\widehat{A_{\mathfrak p}}\otimes_A\kappa(\mathfrak q)$ is geometrically regular over $\kappa(\mathfrak q)$. ([[lem-surface-complete-equicharacteristic-formal-fibres]])

[F6] *lem-surface-completed-polynomial-generic-fibre.* Assume AC. Let $A$ be a complete equicharacteristic Noetherian local domain, let $\mathfrak q$ be maximal in $A[t]$ over its closed point, and let $\mathfrak r$ be a nonzero prime ideal with $\mathfrak r\subset\mathfrak q$ and $\mathfrak r\cap A=0$. Then $\widehat{A[t]_{\mathfrak q}}\otimes_{A[t]}\kappa(\mathfrak r)$ is geometrically regular over $\kappa(\mathfrak r)$. ([[lem-surface-completed-polynomial-generic-fibre]])

[F7] *thm-completion-is-exact-on-finite-modules.* Assume the Axiom of Choice. Let $R$ be a Noetherian commutative ring, let $I \subseteq R$ be an ideal, and let $ 0 \to M' \to M \to M'' \to 0 $ be a short exact sequence of finitely generated $R$-modules. Then the induced sequence of $I$-adic completions $ 0 \to \widehat{M'} \to \widehat M \to \widehat{M''} \to 0 $ is exact. ([[thm-completion-is-exact-on-finite-modules]])

[F8] A regular ring map is a flat map with geometrically regular fibres. Such maps are stable under finite-type base change and localization, compose when the resulting fibres are Noetherian, and descend through a faithfully flat target map. For composition, after a finite purely inseparable fibre-field extension, flat-local ascent from regular base and fibre applies. For descent, flatness descends and each extended fibre has a faithfully flat regular cover, so local regularity descends. These are Stacks Lemmas 15.42.3, 15.42.4 (07QI), and 15.42.7 (07NT), with their stated Noetherian-fibre qualifications.

[F9] Generic completed fibres of a power-series ring with polynomial variables are geometrically regular; finite ring extensions have the finite-product completion formula. ([[lem-surface-generic-power-series-formal-fibres]], [[lem-surface-finite-completion-factors]])

[F10] Completion base change identifies corresponding closed-fibre local completions. ([[lem-surface-completion-base-change-preserves-closed-fibre-local-completions]])

[F11] The maximal-adic completion of a Noetherian local ring is faithfully flat and has the same residue field. ([[thm-completion-of-a-noetherian-local-ring]])

## Proof

1.1 A field is a complete local ring and a quotient has the property by compatibility of completion with quotients; finite-type algebras are reduced to polynomial rings by induction on the number of variables, so it suffices to treat the one-variable step at maximal primes $\mathfrak q$, with $\mathfrak p=\mathfrak q\cap R$. [F5, F7, given]

1.2 For a flat local map $U\to V$ of Noetherian local rings, the map of maximal-adic completions $\widehat U\to\widehat V$ is flat. Indeed $V$ is flat over $U$ and $\widehat V$ is flat over $V$, so $\widehat V$ is flat over $U$. Resolve the residue field of $U$ by degreewise finite free modules; tensoring with $\widehat U$ gives a resolution of the same residue field, and its tensor with $\widehat V$ is exact in positive degrees by $U$-flatness. Hence $\operatorname{Tor}_1^{\widehat U}(\kappa(U),\widehat V)=0$. The local flatness criterion [F3], with finite $\widehat V$-module $\widehat V$, makes it flat over $\widehat U$; being a local flat map, it is faithfully flat. [F3, F7, F11, algebra]

2.1 Write $R$ for the preceding polynomial ring and $\mathfrak q$ for a maximal prime of $R[t]$, with $\mathfrak p=\mathfrak q\cap R$. Localize $R$ at $\mathfrak p$. Base change to $\widehat{R_{\mathfrak p}}$ gives the unique closed-fibre prime $\mathfrak q'$ and the same completed polynomial local ring, by comparison modulo every maximal-ideal power. The horizontal local map is a localization of the base change of the regular completion map of $R_{\mathfrak p}$. For the complete base, quotient by the contraction of a fibre prime to reduce to a complete domain, then choose its finite regular power-series subring. The finite-completion factors reduce to that subring. If the remaining polynomial prime is zero, the generic-power-series supplier applies with one polynomial variable; if nonzero, [F6] applies. Thus the vertical completed-polynomial map has geometrically regular fibres. Composition in [F8] proves the completion map at $\mathfrak q$ is regular. [F5, F6, F7, F8, F9, F10, step 1.1]

3.1 To pass from maximal primes to a prime $P$, choose a maximal ideal $m\supseteq P$ and a prime $P'$ of $\widehat{R_m}$ over $P$, using faithful flatness. The map from $R_P$ to the completion of $(\widehat{R_m})_{P'}$ is regular: it is the composite of the regular maximal completion map, a localization, and a completion of a complete equicharacteristic ring, whose formal fibres are supplied by [F5]. It factors through $\widehat{R_P}$. The map $\widehat{R_P}\to\widehat{(\widehat{R_m})_{P'}}$ is faithfully flat by the completed-flat-local calculation in step 1.2. Descent in [F8] therefore makes $R_P\to\widehat{R_P}$ regular. Quotients and localizations retain the property through the exact quotient identity for formal fibres and this argument, proving the statement for essentially finite-type algebras. AC and DC are inherited from the suppliers. [F1, F2, F4, F5, F8, step 2.1, step 1.2, algebra] ∎

## Remarks

- The two fibre lemmas of the previous levels supply exactly the zero-prime and generic-fibre cases; the remaining work is flatness and descent of regularity.
- No universal catenarity is used.
