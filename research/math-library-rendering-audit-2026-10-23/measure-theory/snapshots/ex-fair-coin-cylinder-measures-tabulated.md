---
id: ex-fair-coin-cylinder-measures-tabulated
kind: example
title: Fair-coin cylinder masses and separated blocks
deps: ["thm-fair-coin-measure-on-binary-sequences", "thm-fair-coin-one-sided-shift-is-measure-preserving-and-mixing", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Examples 2.8–2.9
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Example

Assume countable choice. Index binary sequences by $0,1,2,\ldots$, and let $[a_0\cdots a_{r-1}]$ prescribe the first $r$ coordinates. For fair-coin probability $p$, $p([0])=1/2$, $p([01])=1/4$, $p([101])=1/8$, and $p([01]\cap\sigma^{-3}[10])=1/16$.

## Facts & Assumptions

[F1] A cylinder prescribing $k$ distinct coordinates has fair-coin mass $2^{-k}$. [[thm-fair-coin-measure-on-binary-sequences]].

[F2] The left shift moves coordinate $j+1$ into position $j$. [[thm-fair-coin-one-sided-shift-is-measure-preserving-and-mixing]].

## Verification

**Given:** Assume countable choice. Index binary sequences by $0,1,2,\ldots$, and let $[a_0\cdots a_{r-1}]$ prescribe the first $r$ coordinates. For fair-coin probability $p$, $p([0])=1/2$, $p([01])=1/4$, $p([101])=1/8$, and $p([01]\cap\sigma^{-3}[10])=1/16$.

1.1 The prefix $[0]$ prescribes the single value $x_0=0$, so [F1] gives $2^{-1}=1/2$. The prefix $[01]$ prescribes $x_0=0,x_1=1$, so its mass is $2^{-2}=1/4$. The prefix $[101]$ prescribes $x_0=1,x_1=0,x_2=1$, giving $2^{-3}=1/8$. Repeated symbols do not reduce the number of distinct prescribed coordinates. [F1]

2.1 By [F2], membership in $\sigma^{-3}[10]$ prescribes $x_3=1,x_4=0$. Intersecting with $[01]$ therefore prescribes exactly coordinates $0,1,3,4$, with respective values $0,1,1,0$. Coordinate 2 and all later coordinates remain free. The cylinder mass is $2^{-4}=1/16$ by [F1]. Equivalently this intersection is the disjoint union $[01010]\cup[01110]$, whose masses sum to $2(1/32)=1/16$. Countable choice is inherited from the measure construction in [F1], not from the finite coordinate count. [1.1, F1, F2] ∎

