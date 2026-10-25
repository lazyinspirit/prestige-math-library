---
id: lem-finite-etale-galois-refinements-and-quotients
kind: lemma
title: "Finite étale covers admit connected Galois trivializations and subgroup quotients"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-etale-fundamental-group-and-fibre-functor
  - lem-finite-etale-algebra-module-presentation-and-rank
  - thm-effective-fpqc-descent-of-finite-etale-covers
  - lem-fpqc-cover-submersive
  - lem-etale-stable-base-change-composition
  - lem-finite-stable-base-change-composition
  - thm-etale-equivalent-flat-unramified-fp
  - thm-unramified-diagonal-open-immersion
  - thm-etale-morphisms-open-and-quasi-finite
  - thm-finite-morphism-integral-closed
  - lem-etale-radicial-morphism-open-immersion
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-30.md; immutable carrier: research/frontier-38-owner-30-step5-hash-30-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-30 dispatch"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, Exposé V §§3–5, especially Theorem 4.1"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Fundamental Groups of Schemes §§3, 5–6"
      url: https://stacks.math.columbia.edu/download/pione.pdf
---

## Statement

Assume AC and let $X$ be connected with geometric basepoint $\bar x$. Write $F=F_{\bar x}$.

1. Every $X$-morphism between finite étale covers is finite étale. Its equalizers are open and closed. The functor $F$ is faithful and reflects isomorphisms. Each cover is a finite disjoint union of nonempty connected open and closed covers; a map from a nonempty connected cover to a connected cover is surjective.
2. Every finite étale cover $Y$ is trivialized by a nonempty connected finite étale cover $T\to X$ whose group $H=\operatorname{Aut}_X(T)$ acts simply transitively on $F(T)$. Thus $T$ is a **connected Galois cover**. For any $y\in F(Y)$ and $t\in F(T)$ there is exactly one $X$-map $T\to Y$ carrying $t$ to $y$.
3. If $T$ is connected Galois and $K\le H$, its scheme quotient $T/K$ exists, is finite étale over $X$, and has geometric fibre $F(T)/K$. More generally, any finite continuous action factoring through $H^{\mathrm{op}}$ is realized by the contracted cover obtained by descending a finite disjoint union of copies of $T$.

## Facts & Assumptions

**Given:** AC, $X$, $\bar x$, and the finite covers in the Statement.

[F1] Finite and étale maps are stable under base change and composition. Étale maps have open diagonal; finite maps are separated and closed. Finite étale maps are open ([[lem-etale-stable-base-change-composition]], [[lem-finite-stable-base-change-composition]], [[thm-etale-equivalent-flat-unramified-fp]], [[thm-unramified-diagonal-open-immersion]], [[thm-etale-morphisms-open-and-quasi-finite]], [[thm-finite-morphism-integral-closed]]).

[F2] A finite étale algebra is finite locally free, its rank is locally constant, and its geometric fibre cardinality is that rank ([[lem-finite-etale-algebra-module-presentation-and-rank]]). An étale universally injective morphism is an open immersion ([[lem-etale-radicial-morphism-open-immersion]]).

[F3] Finite étale covers and their maps descend effectively along fpqc covers ([[thm-effective-fpqc-descent-of-finite-etale-covers]]). Fpqc maps are universally submersive, so an upstairs saturated open subset descends to a downstairs open subset ([[lem-fpqc-cover-submersive]]).

[F4] The fibre functor and AC convention are [[def-etale-fundamental-group-and-fibre-functor]] and [[def-axiom-of-choice]]. AC is inherited through [F1]–[F3]; no inverse-limit choice is made in this lemma.

## Proof

1.1 Given $u:Y\to Z$, its graph in $Y\times_XZ$ is the pullback of the diagonal of $Z/X$, hence is an open and closed immersion by [F1]. The projection $Y\times_XZ\to Z$ is finite étale, so the graph factorization shows that $u$ is finite étale. The equalizer of two maps is likewise the pullback of an open and closed diagonal. If two maps agree on $F(Y)$, their equalizer contains the entire fibre; its complementary open and closed cover has rank zero at $\bar x$ and hence everywhere on connected $X$ by [F2], so it is empty. This proves faithfulness. [F1, F2]

2.1 A nonempty open and closed piece of a cover is itself finite étale. Its image is open and closed by [F1] and nonempty, hence all of $X$. Each such piece therefore contributes at least one point to every geometric fibre. A cover of rank $n$ cannot have more than $n$ disjoint nonempty open and closed pieces. Repeatedly split a disconnected piece: every split increases their number, so after at most $n-1$ splits all pieces are connected. This proves the finite connected decomposition without a Noetherian assumption. A map to a connected cover is open and closed by step 1.1 and [F1], and thus is surjective if its source is nonempty. [F1, F2, step 1.1, construct]

3.1 If $F(u)$ is a bijection, its source-to-target map has degree one on each component of $Z$, by [F2], step 2.1 and connectedness. A finite locally free map of degree one is an isomorphism: locally its algebra is free of rank one, and the unit generates its residue fibre at every prime; Nakayama as used in [F2] makes the unit a local basis, so the ring map is an isomorphism. Hence $F$ reflects isomorphisms. For maps from a connected cover, agreement at one fibre point makes their open and closed equalizer nonempty and therefore the whole source. [F2, step 1.1, step 2.1]

3.2 Let $Y$ have rank $n>0$. In $Y^n=Y\times_X\cdots\times_XY$, remove the finitely many open and closed loci on which two coordinates agree. The resulting open and closed cover $P$ has as its fibre the ordered lists of all $n$ distinct points of $F(Y)$. Choose one such list $p$, and let $T$ be the connected component of $P$ containing it. By step 2.1, $T\to X$ is nonempty finite étale and surjective. The coordinate sections of $T\times_XY\to T$ have disjoint open and closed graphs by [F1]. On every geometric fibre they exhaust the $n$ points, since the list in $P$ has no repeated coordinate. Their disjoint union is thus the whole $T\times_XY$, and $T$ trivializes $Y$. For $n=0$ take $T=X$; the empty cover is already trivialized. [F1, F2, step 2.1, construct]

4.1 Permuting the $n$ coordinates gives an action of $S_n$ on $P$. Any other point $p'\in F(T)$ is obtained from $p$ by a unique permutation $\sigma$. The image $\sigma(T)$ is a connected component of $P$ meeting $T$ at $p'$, and therefore equals $T$. Thus the subgroup preserving $T$ acts transitively on $F(T)$. An automorphism of $T$ fixing one geometric point is the identity by step 3.1, so $H=\operatorname{Aut}_X(T)$ acts freely as well. This proves simple transitivity. Any map $T\to Y$ is a section of the trivial cover $T\times_XY$; connectedness of $T$ makes it one of the coordinate sections. These are in bijection with $F(Y)$ by evaluation at a fixed point of $T$, proving the uniqueness and existence assertion. [step 3.1, step 3.2, construct]

5.1 The map $\coprod_{h\in H}T\to T\times_XT$ given on the $h$-summand by the graph of $h$ is finite étale by step 1.1. It is bijective on the geometric fibre because $H$ acts simply transitively; step 3.1 makes it an isomorphism. Consequently $T/X$ is an $H$-torsor, and $T\to X$ is an fpqc cover. Any finite $H^{\mathrm{op}}$-set $E$ determines a descent datum on $\coprod_E T$ over that fpqc cover: on the overlap identified with $\coprod_H T$, use the permutation of $E$ associated to $h$, with the opposite-group convention matching composition of changes of trivialization. The group-action law is precisely the cocycle identity. By [F3] this datum descends to a finite étale $X$-cover with fibre $E$. [F3, step 1.1, step 3.1, step 4.1, construct]

6.1 For $K\le H$, use the coset action in step 5.1. The quotient map of the finite trivial fibre is compatible with the descent datum, so [F3] descends it to $q:T\to T/K$. Its fibre is $F(T)/K$, and $q$ is finite étale and surjective by step 1.1 and fibrewise surjectivity; thus it is fpqc. The relation $T\times_{T/K}T$ is the disjoint union of the graphs of $k\in K$, as seen after the faithfully flat cover $T\to X$ and then descended by [F3]. A $K$-invariant map $a:T\to W$ to any $X$-scheme has equal pullbacks on that relation. For each affine open of $W$, its preimage in $T$ is saturated, hence descends to an open of $T/K$ by submersiveness in [F3]. Cover that open by affine opens $U$: since $q$ is finite, $q^{-1}(U)$ is affine, and the ring equalizer argument of [F3] descends $a$ on $U$. The unique descended morphisms agree on overlaps and glue. Thus $T/K$ satisfies the universal property of the scheme quotient. This completes the assertions with the AC use recorded in [F4]. [F3, F4, step 1.1, step 5.1] ∎
