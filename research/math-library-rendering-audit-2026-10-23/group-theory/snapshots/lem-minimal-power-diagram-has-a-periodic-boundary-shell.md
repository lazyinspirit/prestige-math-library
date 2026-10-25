---
id: lem-minimal-power-diagram-has-a-periodic-boundary-shell
kind: lemma
title: "A shortest finite-order representative shares a word root with a relator"
status: published
origin: pipeline
deps: [thm-greendlinger-shell-existence-from-the-curvature-count, def-minimal-cyclic-power-diagram-and-relator-root, lem-sc-toolkit-periodic-word-square-alternative]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Lipschutz (1964), \u00a76, printed pp.41\u201342; local torsion deduction retaining the common-root alternative"
      url: "http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf"
---

## Statement

For a shortest representative $z$ of a nonidentity finite-order conjugacy class in a symmetrised $C'(1/6)$ presentation, a cyclic rotation of $z$ and a cyclic conjugate of a defining relator are positive powers of a common nonempty word.

## Facts & Assumptions

**Given:** A nonidentity finite-order element and a shortest conjugacy representative $z$ in the conventions below.

[F1] Every nonempty freely reduced null word has, in a cyclic reading, a relator segment longer than half that relator ([[thm-greendlinger-shell-existence-from-the-curvature-count]]).

[F2] Shortest conjugacy representatives exist, are nonempty and cyclically reduced; relator roots and minimal power diagrams have the conventions of [[def-minimal-cyclic-power-diagram-and-relator-root]].

[F3] A nonempty cyclically Dehn-reduced word shares a common root with a relator, or all its powers are Dehn-reduced, or its square is conjugate to a nonempty word all of whose powers are Dehn-reduced ([[lem-sc-toolkit-periodic-word-square-alternative]]).

## Proof

1.1 The word $z$ is nonempty and cyclically reduced by [F2]. Every cyclic rotation represents a conjugate of the original element. If such a rotation contained $s$ with $r=st$ and $|s|>|r|/2$, replace $s$ by $t^{-1}$ in that rotation. The quotient element is unchanged since $st=1$, while length strictly decreases since $|t|<|s|$; subsequent free reduction cannot increase length. This contradicts shortest conjugacy length. Hence $z$ is cyclically Dehn-reduced. [F2, given]

1.2 Any nonempty word $a$ all of whose positive powers are Dehn-reduced has infinite order. Indeed if $a^n=1$, its nonempty freely reduced literal word has a long cyclic relator segment by [F1]. Every cyclic segment of $a^n$ of length at most $n|a|$ appears as a literal segment of $a^{2n}$ by taking two copies of that cyclic word. This contradicts Dehn reduction of $a^{2n}$. This argument also covers n=1 and a segment crossing the chosen basepoint. [F1]

2.1 Apply [F3] using step 1.1. Its all-powers alternative for $z$ contradicts finite order by step 1.2. Its square alternative gives $z^2$ conjugate to a nonempty $y$ of infinite order by step 1.2. But if $z^n=1$ then $(z^2)^n=1$, and conjugation preserves this equation; hence $y$ has finite order, a contradiction, even when $z^2=1$. Only the common-root alternative remains. The inverse of a defining relator has the inverse root, so the conclusion may equally be expressed using cyclic conjugates of the original oriented defining words and integer powers of their roots. [F3, step 1.1, step 1.2] ∎
