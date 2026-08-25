---
id: cex-three-squares-fail-for-seven-modulo-eight
kind: counterexample
title: "$7$ and $28$ are not sums of three integer squares"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [prop-three-square-congruence-obstruction, lem-sum-of-three-squares-is-never-seven-modulo-eight, lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
short: "three squares miss $7$ and $28$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Evan Dummit, Number Theory (part 9): The Geometry of Numbers, §9.1.3"
      url: "https://dummit.cos.northeastern.edu/docs/numthy_9_geometry_of_numbers.pdf"
pipeline_run: null
---

## Statement refuted

**False claim:** every nonnegative integer is a sum of three integer squares,
that is, for every $n\ge 0$ there are integers $x,y,z$ with $n=x^2+y^2+z^2$.

The integers $7$ and $28$ refute it. Both are excluded by
[[prop-three-square-congruence-obstruction]], as $7=4^0\cdot 7$ and
$28=4^1\cdot 7$ with $7\equiv 7\pmod 8$; and for $7$ the exclusion can also be
seen by a finite search, which is carried out below so that the witness does not
rest on the obstruction alone.

## Facts & Assumptions

**Given:** The integers $7$ and $28$.

[A1] The false claim: for every integer $n\ge 0$ there are integers $x,y,z$ with $n=x^2+y^2+z^2$.

[F1] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[L1] For $a\in\mathbb N$ and a positive integer $m$ with $m\equiv 7\pmod 8$, there are no integers $x,y,z$ with $4^am=x^2+y^2+z^2$ ([[prop-three-square-congruence-obstruction]]).

[L2] There are no integers $x,y,z$ with $x^2+y^2+z^2\equiv 7\pmod 8$ ([[lem-sum-of-three-squares-is-never-seven-modulo-eight]]).

[L3] If $x,y,z\in\mathbb Z$ and $4\mid x^2+y^2+z^2$, then $x$, $y$ and $z$ are all even ([[lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates]]).

## Counterexample

**Proof technique:** direct.

1.1 Since $8\mid 7-7$, we have $7\equiv 7\pmod 8$ by [F1], so a representation $7=x^2+y^2+z^2$ would give $x^2+y^2+z^2\equiv 7\pmod 8$, which [L2] excludes; hence $7$ is not a sum of three integer squares. [given, L2, F1, algebra]

1.2 The same conclusion by finite search: in $7=x^2+y^2+z^2$ each square is at most $7$, so each lies in $\{0,1,4\}$, and the sums of three members of that set are $0,1,2,3,4,5,6,8,9$ and $12$, none of which is $7$. [given, algebra]

2.1 For $28$: since $28=4\cdot 7$ we have $4\mid 28$, so a representation $28=x^2+y^2+z^2$ would by [L3] have $x$, $y$ and $z$ all even, say $x=2x'$, $y=2y'$, $z=2z'$; then $4\cdot 7=4(x'^2+y'^2+z'^2)$ gives $7=x'^2+y'^2+z'^2$, contradicting step 1.1. [step 1.1, L3, F1, algebra]

3.1 So neither $7$ nor $28$ is a sum of three integer squares, and [A1] is false; the two are the instances $a=0$ and $a=1$ of [L1] at $m=7$. [step 1.1, step 1.2, step 2.1, A1, L1] ∎

## Remarks

**Two independent routes for $7$.** Step 1.1 argues by residues modulo $8$ and step 1.2 by exhausting the finitely many candidates. The second uses no lemma about squares at all, so the non-existence claim does not depend on the congruence argument being right.

**Why $28$ needs the halving step.** The residue of $28$ modulo $8$ is $4$, which is attainable by a sum of three squares, so the congruence argument does not apply to $28$ directly. It is the divisibility by $4$, and the fact that this forces all three coordinates even, that reduces $28$ to $7$.
