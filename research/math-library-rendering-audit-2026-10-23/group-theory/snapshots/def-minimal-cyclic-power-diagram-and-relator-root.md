---
id: def-minimal-cyclic-power-diagram-and-relator-root
kind: definition
title: "Minimal cyclic power diagram and relator root"
status: published
origin: pipeline
deps: [def-sc-toolkit-symmetrised-relators-and-pieces, thm-sc-toolkit-van-kampen-existence, def-group-power, thm-well-ordering-principle]
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Lipschutz (1964), \u00a72 and \u00a76; minimum-length choices expanded locally"
      url: "http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf"
---

## Definition

Use the symmetrised presentation of [[def-sc-toolkit-symmetrised-relators-and-pieces]]. Let $g\ne1$ have finite order in the quotient. Choose a shortest freely reduced word $z$ among all words representing conjugates of $g$. Such lengths form a nonempty subset of the natural numbers, so a minimum is attained by [[thm-well-ordering-principle]]. The length is positive since the empty word represents the identity. The word $z$ is cyclically reduced: if $z=a u a^{-1}$, conjugating by $a^{-1}$ would give the shorter representative $u$.

Let $n$ be the least positive integer with $g^n=1$, using powers in [[def-group-power]]. The word $z^n$ is null. Its diagrams exist by [[thm-sc-toolkit-van-kampen-existence]]; choose one of least area, again using well-ordering. This is a **minimal cyclic power diagram** for this choice of $z$. Since $g\ne1$, $n\ge2$. No simultaneous choice for all conjugacy classes is required.

A **relator root** is a nonempty word $v$ which is not literally a proper power and for which a cyclic rotation $r$ of a defining relator satisfies $r=v^m$ literally, for some integer $m\ge1$. The root is a word; its image in the quotient is a separate object. A shortest nonempty word whose positive power equals a given relator is a root: a proper-power decomposition would give a still shorter such word. Existence follows since the relator itself is a candidate. Literal powers and quotient-group powers must be distinguished.
