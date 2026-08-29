---
id: thm-the-covering-criterion-for-exactness
kind: theorem
title: "The covering criterion for exactness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exactness-at-a-node,
       thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact,
       thm-epimorphisms-in-an-abelian-category-are-universal,
       thm-chasing-rule-exactness-detected-by-members,
       def-equivalence-of-members]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.15"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "David Mehrle, Category Theory, Part III, Chapter 7"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: frontier-23
---

## Statement

For a composable pair
$$X\xrightarrow{f}Y\xrightarrow{g}Z$$
in an abelian category, the following are equivalent:

1. the pair is exact at $Y$;
2. $g f = 0$, and for every morphism $h:W \to Y$ with $g h = 0$, there exist
   an object $V$, an epimorphism $k:V \to W$, and a morphism $l:V \to X$ such that
   $$h k = f l.$$

## Facts & Assumptions

**Given:** The composable pair $X \xrightarrow{f} Y \xrightarrow{g} Z$.

[L1] Exactness at $Y$ is equivalent to the member criterion $g y \equiv 0 \Rightarrow \exists x,\; f x \equiv y$ ([[thm-chasing-rule-exactness-detected-by-members]]).

[L2] Member equivalence means equality after precomposition by one common pair of epimorphisms ([[def-equivalence-of-members]]).

## Proof

**Proof technique:** direct.

1.1 Assume the pair is exact. Then [L1] gives $g f = 0$. Now let $h:W \to Y$ satisfy $g h = 0$. Then $g h \equiv 0$, so [L1] gives a member $x:U \to X$ with $f x \equiv h$. By [L2], there exist an object $V$ and epimorphisms $a:V \to U$ and $k:V \to W$ such that $f x a = h k$. Putting $l := x a$ proves the covering condition. [L1, L2, assume-hyp, choose, construct]

1.2 Assume $g f = 0$ and the covering condition. Let $y:W \to Y$ be a member with $g y \equiv 0$. Choose an epic $u:W' \to W$ with $g y u = 0$, and apply the covering condition to $h := y u$. This gives an epic $k:V \to W'$ and a map $l:V \to X$ with $y u k = f l$. Since $u k$ is epic, [L2] says exactly that $f l \equiv y$. Therefore [L1] gives exactness at $Y$. [L1, L2, assume-hyp, construct]

2.1 Thus the covering condition is equivalent to exactness. [step 1.1, step 1.2] ∎
