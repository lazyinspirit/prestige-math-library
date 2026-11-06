---
id: lem-gts-etale-representable-presheaf-is-sheaf
kind: lemma
title: "Representable presheaves are sheaves on the small étale site"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC, inherited through the étale-site and faithfully-flat suppliers."
deps:
  - def-gts-presheaf-and-sheaf-on-a-site
  - def-gts-small-etale-site-of-a-scheme
  - lem-gts-etale-coverings-form-a-grothendieck-site
  - def-axiom-of-choice
  - thm-etale-morphisms-open-and-quasi-finite
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
dependency_roles:
  def-gts-presheaf-and-sheaf-on-a-site: mathematical-premise
  def-gts-small-etale-site-of-a-scheme: mathematical-premise
  lem-gts-etale-coverings-form-a-grothendieck-site: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-etale-morphisms-open-and-quasi-finite: mathematical-premise
  lem-faithfully-flat-effective-descent-of-modules-and-algebras: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Section 59.27"
      url: "https://stacks.math.columbia.edu/tag/03PF"
      locator: "Lemma 59.27.2; representable presheaves are sheaves on the small étale site."
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I"
      url: "https://www.jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "§§5–6, printed pp. 38–49; representable presheaves, sheaf condition and descent."
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
---

## Statement

Assume the full Axiom of Choice. Let $X$ be a scheme and let $Y\to X$ be any morphism of schemes. On $X_{\acute e t}$, the rule
$$h_Y(U):=\operatorname{Hom}_X(U,Y)$$
with restrictions given by precomposition is a sheaf of sets.

## Statement references

[[def-gts-presheaf-and-sheaf-on-a-site]]

[[def-gts-small-etale-site-of-a-scheme]]

[[lem-gts-etale-coverings-form-a-grothendieck-site]]

## Facts & Assumptions

**Given:** Full AC, the small étale site of $X$, and an arbitrary $X$-scheme $Y$.

[A1] Full AC is the choice-function axiom of [[def-axiom-of-choice]].

[F1] A declared cover is a jointly-surjective family of étale arrows, pullbacks exist, and the family is a pretopology ([[def-gts-small-etale-site-of-a-scheme]], [[lem-gts-etale-coverings-form-a-grothendieck-site]]).

[F2] Étale morphisms are open ([[thm-etale-morphisms-open-and-quasi-finite]]).

[F3] For a faithfully flat ring map $A\to B$, descent data for commutative algebras are effective and the resulting descent equivalence is fully faithful; the descended algebra is the invariant equalizer. For the canonical descent datum on $B$ itself, this equalizer is $A=\operatorname{Eq}(B\rightrightarrows B\otimes_A B)$ ([[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]).

## Proof

**Proof technique:** affine descent after an étale-local refinement.

1.1 Precomposition preserves identities and composition, so $h_Y$ is a presheaf by the definition in [F1]. Let $(U_i\to U)$ be a declared cover and let $f_i:U_i\to Y$ be a matching family; thus their restrictions agree on every $U_i\times_U U_j$. It remains to construct and prove uniqueness of a descended $X$-morphism. [F1, given]

1.2 Fix $u\in U$. By joint surjectivity choose $i$ and $u_i\in U_i$ over $u$. Let $q:Y\to X$ be the given structure map. Choose an affine open $X_0\subseteq X$ containing the image of $u$, an affine open $V_0\subseteq U$ containing $u$ and mapping into $X_0$, and an affine open $Z\subseteq q^{-1}(X_0)$ containing $f_i(u_i)$. Choose an affine open $W\subseteq U_i$ containing $u_i$ with $f_i(W)\subseteq Z$. Since $U_i\to U$ is étale and hence open by [F2], its image of $W$ is an open neighbourhood of $u$; choose an affine open $V\subseteq U$ containing $u$ and contained in that image and in $V_0$. The affine opens of $W\times_UV$ cover it, and their images are open by [F2] and cover $V$. Since $V$ is quasi-compact, finitely many such affine opens $T_1,\ldots,T_n$ have images covering $V$. Their finite disjoint union $T$ is affine, and $T\to V$ is affine, flat, and surjective: it is a finite disjoint union of restrictions of étale morphisms. It is therefore faithfully flat. Every map $T_j\to Y$ lands in $Z$, and the maps agree on $T_j\times_VT_k$ by the matching condition on the original family. [A1, F1, F2, given]

2.1 Write $V=\operatorname{Spec}A$, $T=\operatorname{Spec}B$, $X_0=\operatorname{Spec}A_0$, and $Z=\operatorname{Spec}C$. The faithfully flat ring map is $A\to B$, and $C$ is an $A_0$-algebra because $Z\subseteq q^{-1}(X_0)$. The compatible maps $T\to Z$ give an $A_0$-algebra map $C\to B$ whose two composites to $B\otimes_A B$ agree. The canonical faithfully-flat equalizer is $A=\operatorname{Eq}(B\rightrightarrows B\otimes_A B)$, so every element of $C$ maps into $A$. Thus the map uniquely descends to an $A_0$-algebra map $C\to A$, hence to a unique $X_0$-morphism $V\to Z$ by [F3]. The descended map is over $X_0$, hence is an $X$-morphism $V\to Y$. Its pullback to each $T_j$ is the given $f_i|_{T_j}$. [F3, step 1.2]

3.1 Carry out step 1.2 at every point of $U$. On overlaps, the resulting local maps have the same value at each point: choose a point of an original covering object above it, and use the matching condition on the fibre product together with [F1]. After shrinking around that point, both maps land in one affine open of $Y$. Their pullbacks to a jointly-surjective étale refinement agree there by the original matching condition; affine faithful-flat descent in [F3] gives equality of the local maps. The local morphisms therefore glue on the open cover of $U$ to a morphism $f:U\to Y$. The same local uniqueness proves that no other morphism has the required restrictions. [F1, F3, step 1.2, step 2.1]

4.1 If $U$ is empty, its unique morphism to $Y$ is the required amalgamation. Otherwise the descended morphism is unique and exists, so every matching family for every declared cover has exactly one amalgamation. By [F1], this is precisely the sheaf condition in [F1]'s pretopology, hence $h_Y$ is a sheaf on $X_{\acute e t}$. The argument treats arbitrary schemes $Y$ by reducing to affine target neighbourhoods; it does not assert that an arbitrary sheaf is representable. [F1, step 1.1, step 1.2, step 2.1, step 3.1] ∎
