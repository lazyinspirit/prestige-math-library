---
id: thm-square-criterion-in-q2
kind: theorem
title: "Square criterion in Q_2"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-zp-is-the-valuation-ring-of-qp, thm-p-adic-newton-criterion]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Hensel's Lemma, Theorem 4.5"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/hensel.pdf"
    - title: "Andrew V. Sutherland, 18.782 Lecture 10"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf"
pipeline_run: null
---

## Statement

Let $x \in \mathbb Q_2^\times$. Write

$$x = 2^n u$$

with $n \in \mathbb Z$ and odd $u \in \mathbb Z_2^\times$. Then $x$ is a square
in $\mathbb Q_2$ if and only if $n$ is even and $u \equiv 1 \pmod 8$.

## Facts & Assumptions

**Given:** $x = 2^n u$ with odd $u \in \mathbb Z_2^\times$.

[L1] $\mathbb Z_2$ is the valuation ring of $\mathbb Q_2$
([[cor-zp-is-the-valuation-ring-of-qp]]).

[L2] Newton's criterion holds in $\mathbb Q_2$
([[thm-p-adic-newton-criterion]]).

## Proof

**Proof technique:** direct.

1.1 If $x = y^2$, write $y = 2^m v$ with odd $v \in \mathbb Z_2^\times$. Then $n = 2m$ is even. Every odd square is congruent to $1$ modulo $8$, so the unit factor $u$ is congruent to $1$ modulo $8$. [L1, given, algebra]

1.2 Conversely, assume $n = 2m$ and $u \equiv 1 \pmod 8$. For $f(X)=X^2-u$ at $a_0=1$, $$|f(1)|_2 = |1-u|_2 \le 2^{-3} < 2^{-2} = |f'(1)|_2^2.$$ By [L2], Newton iteration converges to a root $v \in \mathbb Z_2$ of $f$, so $v^2=u$. Then $y := 2^m v$ satisfies $y^2=x$. [L2, given, algebra]

2.1 This proves both directions of the criterion. [step 1.1, step 1.2] ∎
