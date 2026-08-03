---
id: lem-open-or-closed-surjection-is-quotient
kind: lemma
title: "A continuous open surjection, a continuous closed surjection, and a continuous surjection admitting a continuous section are all quotient maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-quotient-topology, def-homeomorphism-and-open-maps, def-continuous-map-top,
       thm-continuity-characterisations-top, def-injection-surjection-bijection,
       def-topological-space]
justified_by: []
forward_refs: [cex-quotient-map-neither-open-nor-closed]
aliases: []
landmark: true
short: "open, closed or sectioned surjections are quotient maps"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Quotient space (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_space_(topology)"
    - title: "Open and closed maps (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_and_closed_maps"
    - title: "Section (category theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Section_(category_theory)"
pipeline_run: null
---

## Statement

Let $X$ and $Y$ be topological spaces and let $q : X \to Y$ be continuous
([[def-continuous-map-top]]). Each of the following three conditions makes $q$ a
quotient map ([[def-quotient-topology]]).

1. $q$ is a surjection and an **open map**
   ([[def-homeomorphism-and-open-maps]]).
2. $q$ is a surjection and a **closed map**.
3. $q$ admits a **continuous section**: a continuous $s : Y \to X$ with
   $q \circ s = \mathrm{id}_Y$. (Surjectivity of $q$ is then automatic and need
   not be assumed.)

None of the three conditions is necessary. A quotient map need be neither open
nor closed, and need admit no section; a witness that is a quotient map by clause
3 while failing clauses 1 and 2 is worked on the companion page, and is named in
the remarks below.

## Facts & Assumptions

**Given:** Topological spaces $X$ and $Y$, a continuous map $q : X \to Y$, a subset $V \subseteq Y$, and, where the clause requires it, a continuous $s : Y \to X$ with $q \circ s = \mathrm{id}_Y$.

[A1] $q$ is a quotient map when it is a surjection and, for every $V \subseteq Y$, $V$ is open in $Y$ exactly when $q^{-1}[V]$ is open in $X$ ([[def-quotient-topology]]).

[A2] $q$ is an open map when images of open sets are open, and a closed map when images of closed sets are closed ([[def-homeomorphism-and-open-maps]]).

[L1] A map is continuous exactly when preimages of open sets are open, and exactly when preimages of closed sets are closed ([[thm-continuity-characterisations-top]], clauses (b) and (c); [[def-continuous-map-top]]).

[L2] If $q$ is surjective then $q[q^{-1}[V]] = V$ for every $V \subseteq Y$; and $q^{-1}[Y \setminus V] = X \setminus q^{-1}[V]$ ([[def-injection-surjection-bijection]]).

[L3] A subset of a space is closed exactly when its complement is open ([[def-topological-space]]).

[L4] $(u \circ v)^{-1}[T] = v^{-1}[u^{-1}[T]]$ for composable functions ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 If $V$ is open in $Y$ then $q^{-1}[V]$ is open in $X$, by continuity of $q$ and [L1]; this half of the quotient condition holds under all three hypotheses. [given, L1]

1.2 Assume clause 3 and let $y \in Y$; then $y = q(s(y))$, so $q$ is surjective. [given]

1.3 Assume clause 1 and that $q^{-1}[V]$ is open in $X$. Then $q[q^{-1}[V]] = V$ by [L2], and $q[q^{-1}[V]]$ is open in $Y$ by [A2]; so $V$ is open. [given, A2, L2]

1.4 Assume clause 2 and that $q^{-1}[V]$ is open in $X$. Then $X \setminus q^{-1}[V] = q^{-1}[Y \setminus V]$ by [L2] and is closed by [L3], so $q[q^{-1}[Y \setminus V]] = Y \setminus V$ is closed by [A2] and [L2]; hence $V$ is open by [L3]. [given, A2, L2, L3]

1.5 Assume clause 3 and that $q^{-1}[V]$ is open in $X$. Then $s^{-1}[q^{-1}[V]] = (q \circ s)^{-1}[V] = V$ by [L4] and $q \circ s = \mathrm{id}_Y$, and $s^{-1}[q^{-1}[V]]$ is open in $Y$ by continuity of $s$ and [L1]; so $V$ is open. [given, L1, L4]

2.1 Under clause 1 the map $q$ is a surjection by hypothesis and satisfies both halves of the quotient condition, by steps 1.1 and 1.3; so it is a quotient map by [A1]. [step 1.1, step 1.3, A1]

2.2 Under clause 2 the same holds by steps 1.1 and 1.4. [step 1.1, step 1.4, A1]

2.3 Under clause 3 the map $q$ is a surjection by step 1.2 and satisfies both halves by steps 1.1 and 1.5. [step 1.1, step 1.2, step 1.5, A1]

3.1 Steps 2.1, 2.2 and 2.3 establish the three clauses. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **The three clauses are genuinely different, and none of them reverses.** The
  canonical projection of an identification space need be neither open nor
  closed, and the companion page's
  [[cex-quotient-map-neither-open-nor-closed]] is a quotient map that fails both
  conditions while satisfying clause 3. In the other direction, an open
  surjection and a closed surjection are unrelated notions, as
  [[def-homeomorphism-and-open-maps]] records with a two-point witness.

- **Clause 3 is the cheapest of the three in practice.** Exhibiting a continuous
  right inverse is a one-line construction whenever one is available, and it
  requires no computation with images at all; clauses 1 and 2 require knowing
  what $q$ does to every open, respectively every closed, subset of $X$.

- **Where openness usually comes from.** For a quotient by an equivalence
  relation, $q$ is open exactly when the saturation of every open set is open
  ([[def-quotient-topology]]), since $q[U]$ is open in the quotient exactly when
  $q^{-1}[q[U]]$ is open in $X$. That criterion is what the group-like quotients
  on the companion page verify, translation of an open set by a group element
  being a homeomorphism there.
