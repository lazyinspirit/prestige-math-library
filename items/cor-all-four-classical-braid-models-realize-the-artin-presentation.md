---
id: cor-all-four-classical-braid-models-realize-the-artin-presentation
kind: corollary
title: "All four classical braid models realize the Artin presentation"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-the-artin-presentation-is-complete-for-geometric-braids,
       thm-geometric-and-configuration-braid-models-are-canonically-isomorphic,
       thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk,
       prop-the-artin-presentation-surjects-onto-geometric-braids,
       prop-geometric-endpoint-permutation-equals-covering-monodromy,
       lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent,
       def-braid-group-by-the-artin-presentation,
       def-elementary-geometric-half-twist,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       def-unordered-configuration-space,
       def-group-presentation,
       thm-first-isomorphism-theorem-groups,
       def-axiom-of-choice,
       thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, section 9.1.3 'Mapping class group of a punctured disk', printed p. 256 (PDF p. 266)"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC and $n\ge1$. Write $B_n^{\mathrm{Artin}}$ for the Artin-presentation
group of [[def-braid-group-by-the-artin-presentation]], $G_n=B_n^{\mathrm{geom}}$
for the geometric braid group at the base tuple $Q_n$ of
[[def-elementary-geometric-half-twist]],
$$B_n^{\mathrm{conf}}:=\pi_1\bigl(C_n(D^2),[Q_n]\bigr),\qquad \pi_1\bigl(C_n(\operatorname{int}D^2),[Q_n]\bigr)$$
for the unordered configuration-space fundamental groups of
[[def-unordered-configuration-space]] at the same base configuration, the
second identified with the first by the open-to-closed inclusion, and
$\operatorname{Mod}(D^2,Q_n;\partial D^2)$ for the boundary-fixed punctured-disk
mapping class group of
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]. Then:

1. the four models $B_n^{\mathrm{Artin}}$, $G_n$,
   $B_n^{\mathrm{conf}}\cong\pi_1(C_n(\operatorname{int}D^2),[Q_n])$ and
   $\operatorname{Mod}(D^2,Q_n;\partial D^2)$ are pairwise connected by the
   canonical isomorphisms: the completeness isomorphism $\varphi_n$ of
   [[thm-the-artin-presentation-is-complete-for-geometric-braids]], the
   published inverse-loop isomorphism of
   [[thm-geometric-and-configuration-braid-models-are-canonically-isomorphic]],
   the open-to-closed identification, and the AC-dependent boundary-fixed
   mapping-class isomorphism of
   [[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]
   (an in-run batch-20 scaffold, not a published supplier);
2. under these identifications, for every $1\le i\le n-1$ the Artin generator
   $\sigma_i$ corresponds to the class $[\sigma_i]$ of the elementary geometric
   half twist, to the configuration loop class $\Phi([\sigma_i])$ whose endpoint
   monodromy is the adjacent transposition $(i\ i+1)$, and to the class $[H_i]$
   of the half twist supported near the $i$-th and $(i+1)$-st punctures, that is,
   of the explicit boundary-fixed homeomorphism supported in the disc $U_i$ and
   exchanging $q_i$ and $q_{i+1}$;
3. consequently each of the four models carries the Artin presentation with
   these corresponding generators: for each model the assignment
   $\sigma_i\mapsto$ its generator extends to a group isomorphism from
   $B_n^{\mathrm{Artin}}$ onto the model, so the model is presented by the
   generators $\sigma_1,\dots,\sigma_{n-1}$ subject to the two Artin relations
   and to no further relations.

For $n=1$ there is no generator, all four groups are trivial, and clauses 2
and 3 are vacuous.

## Facts & Assumptions

**Given:** AC, an integer $n\ge1$, the Artin-presentation group
$B_n^{\mathrm{Artin}}=\langle X\mid R\rangle$ of
[[def-braid-group-by-the-artin-presentation]] with generating set
$X=\{\sigma_1,\dots,\sigma_{n-1}\}$ and its two families of Artin relators
interpreted in the sense of [[def-group-presentation]], the four models of the
statement, and an index $i$ with $1\le i\le n-1$.

[F1] For every $n\ge1$ the surjection $\varphi_n\colon B_n^{\mathrm{Artin}}\to G_n$
of [[prop-the-artin-presentation-surjects-onto-geometric-braids]] is an
isomorphism, and it carries each generator $\sigma_i$ to the class $[\sigma_i]$
of the elementary geometric half twist of [[def-elementary-geometric-half-twist]];
the endpoint permutation of that class is the transposition of $i$ and $i+1$
([[thm-the-artin-presentation-is-complete-for-geometric-braids]],
[[prop-the-artin-presentation-surjects-onto-geometric-braids]],
[[def-elementary-geometric-half-twist]]).

[F2] The inverse-loop slicing map
$\Phi\colon G_n\to B_n^{\mathrm{conf}}=\pi_1(C_n(D^2),[Q_n])$,
$\Phi([\beta])=(\iota^C_*[S(\beta)])^{-1}$, is a group isomorphism intertwining
the endpoint maps, $\pi_{\mathrm{conf}}(\Phi([\beta]))=\pi_{\mathrm{geo}}([\beta])$
for every $[\beta]\in G_n$; and the open-to-closed inclusion induces an
isomorphism $\iota^C_*\colon\pi_1(C_n(\operatorname{int}D^2),[Q_n])\to\pi_1(C_n(D^2),[Q_n])$
at the same basepoint
([[thm-geometric-and-configuration-braid-models-are-canonically-isomorphic]],
[[prop-geometric-endpoint-permutation-equals-covering-monodromy]],
[[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]).

[F3] The composite
$\Psi:=\delta\circ(\iota^C_*)^{-1}\circ\Phi\colon G_n\to\operatorname{Mod}(D^2,Q_n;\partial D^2)$
is a group isomorphism, and for every $1\le i\le n-1$ it satisfies
$\Psi([\sigma_i])=[H_i]$, where $H_i$ is the explicit boundary-fixed
homeomorphism supported in the support disc $U_i$ of
[[def-elementary-geometric-half-twist]] and exchanging $q_i$ and $q_{i+1}$.
The theorem supplying $\Psi$ is an in-run batch-20 scaffold of this run, not a
published supplier
([[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]],
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]).

[F4] AC holds, and AC implies dependent choice and countable choice
([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]);
this is the hypothesis under which the mapping-class isomorphism of [F3] and the
free-kernel suppliers of the completeness theorem of [F1] are available.

[F5] *Presentation transport along an isomorphism.* If a group has a
presentation $B=\langle X\mid R\rangle=F(X)/\langle\!\langle R\rangle\!\rangle_{F(X)}$
and $\theta\colon B\to M$ is a group isomorphism, then the composite
$q_\theta\colon F(X)\to B\xrightarrow{\ \theta\ }M$ of the quotient map with
$\theta$ is a surjective homomorphism with kernel
$\langle\!\langle R\rangle\!\rangle_{F(X)}$: surjectivity is clear, and
$q_\theta(w)=e_M$ holds exactly when $q(w)\in\ker\theta=\{e_B\}$, that is,
exactly when $w\in\langle\!\langle R\rangle\!\rangle_{F(X)}$. The first
isomorphism theorem therefore gives
$M\cong F(X)/\langle\!\langle R\rangle\!\rangle_{F(X)}=\langle X\mid R\rangle$,
the isomorphism carrying the class of each $x\in X$ to $\theta([x])$
([[def-group-presentation]], [[thm-first-isomorphism-theorem-groups]],
[[def-braid-group-by-the-artin-presentation]]).

## Proof

**Proof technique:** direct.

1.1 **The abstract and geometric models.** By [F1] the map $\varphi_n\colon B_n^{\mathrm{Artin}}\to G_n$ is a group isomorphism and $\varphi_n(\sigma_i)=[\sigma_i]$ for every $i$, so the abstract model and the geometric model are identified generator by generator. [F1]

2.1 **The two configuration models.** By [F2] the inverse-loop slicing map $\Phi\colon G_n\to B_n^{\mathrm{conf}}$ is a group isomorphism with $\pi_{\mathrm{conf}}\circ\Phi=\pi_{\mathrm{geo}}$, and $\iota^C_*$ is an isomorphism $\pi_1(C_n(\operatorname{int}D^2),[Q_n])\to B_n^{\mathrm{conf}}$; hence the composites $\Phi\circ\varphi_n$ and $(\iota^C_*)^{-1}\circ\Phi\circ\varphi_n$, being composites of group isomorphisms, are group isomorphisms from $B_n^{\mathrm{Artin}}$ onto $B_n^{\mathrm{conf}}$ and onto $\pi_1(C_n(\operatorname{int}D^2),[Q_n])$ respectively. The generator $\sigma_i$ is carried to $\Phi([\sigma_i])$, whose endpoint monodromy is $\pi_{\mathrm{conf}}(\Phi([\sigma_i]))=\pi_{\mathrm{geo}}([\sigma_i])$, the transposition of $i$ and $i+1$ by [F1] and [F2]; in the open-disc model it is carried to $(\iota^C_*)^{-1}\Phi([\sigma_i])$, the same configuration loop class read through the inclusion. [F1, F2, step 1.1]

2.2 **The mapping-class model.** By [F3] the composite $\Psi$ is a group isomorphism $G_n\to\operatorname{Mod}(D^2,Q_n;\partial D^2)$ with $\Psi([\sigma_i])=[H_i]$, so $\Psi\circ\varphi_n$ is a group isomorphism $B_n^{\mathrm{Artin}}\to\operatorname{Mod}(D^2,Q_n;\partial D^2)$ carrying $\sigma_i$ to $[H_i]$, the class of the boundary-fixed half twist supported in $U_i$ that exchanges $q_i$ and $q_{i+1}$. [F3, step 1.1]

3.1 **Presentation transport to each model.** Let $R$ be the set of the two families of Artin relators, so that $B_n^{\mathrm{Artin}}=\langle X\mid R\rangle=F(X)/\langle\!\langle R\rangle\!\rangle_{F(X)}$ by [[def-braid-group-by-the-artin-presentation]] and [[def-group-presentation]]. Apply [F5] to the identity isomorphism of $B_n^{\mathrm{Artin}}$ and to the isomorphisms of steps 1.1, 2.1 and 2.2: the identity on $B_n^{\mathrm{Artin}}$, $\varphi_n$, $\Phi\circ\varphi_n$, $(\iota^C_*)^{-1}\circ\Phi\circ\varphi_n$ and $\Psi\circ\varphi_n$. Each of the five models is therefore isomorphic to $F(X)/\langle\!\langle R\rangle\!\rangle$ through the composite of the quotient map with that isomorphism, with the class of $\sigma_i$ mapping to the corresponding generator displayed in steps 1.1, 2.1 and 2.2; in particular each model is generated by those $n-1$ elements and satisfies no relation among them beyond the Artin relators. [F5, step 1.1, step 2.1, step 2.2]

4.1 **Conclusion and the one-strand case.** Steps 1.1, 2.1 and 2.2 identify the four models pairwise through the stated isomorphisms and track $\sigma_i$ to the half twist, to the loop of monodromy $(i\ i+1)$ and to the supported half twist, and step 3.1 transports the presentation to each of them, proving all three clauses for $n\ge2$. For $n=1$ the index range $1\le i\le n-1$ is empty, so the generator clauses are vacuous, and $B_1^{\mathrm{Artin}}$ is the trivial group given by the empty presentation by [[def-braid-group-by-the-artin-presentation]]; the isomorphisms of [F1]–[F3] then identify the other three models with it, so each of the four models is trivial and carries the empty presentation of the trivial group, which is clause 3 at $n=1$. AC enters only through [F3] and through the free-kernel suppliers of the completeness theorem recorded in [F4]. ∎ [F1, F3, F4, step 1.1, step 2.1, step 2.2, step 3.1]

## Remarks

- The corollary does not reprove the mapping-class or configuration
  identifications: it composes them with the completeness theorem and tracks the
  generator through the composite. Its only genuinely new input beyond the
  suppliers is the bookkeeping that the generator correspondence survives each
  composite, which is why the configuration and mapping-class models inherit the
  Artin presentation.
- The mapping-class isomorphism is an in-run batch-20 draft
  ([[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]],
  precheck PASS; not a published supplier), flagged in the dispatch report
  together with the consuming step 2.2 and the cross-batch edge recorded in
  `frontier-37-owner-30-batch-22.cross-batch-dependencies.json`; no published
  theorem supplies it.
- The construction is choice-free apart from the AC hypothesis: the
  presentations are finite, the free group on $X$ is explicit, and no connecting
  path or lift is chosen in the composites, all of which use the fixed
  basepoint $Q_n$ of the suppliers.
