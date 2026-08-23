---
id: lem-thue-small-representatives
kind: lemma
title: "Thue's lemma on small nonzero representatives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-strong-pigeonhole-principle, thm-product-rule, lem-finite-set-has-max, thm-of-square-roots, thm-standard-representatives-modulo-n, thm-euclids-lemma, def-congruence-modulo-an-integer]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Theorem E.I.1"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime and let $a\in\mathbb Z$ with $p\nmid a$. Then there are nonzero integers $r,s$ with $|r|,|s|<\sqrt p$ and $ra\equiv s\pmod p$.

## Facts & Assumptions

**Given:** A prime $p$ and an integer $a$ with $p\nmid a$.

[L1] Every nonempty finite subset of $\mathbb R$ has a maximum and a minimum ([[lem-finite-set-has-max]]).

[L2] Every nonnegative real $t$ has a unique nonnegative square root $\sqrt t$ whose square is $t$ ([[thm-of-square-roots]]).

[L3] If finite sets $A,B$ are given, then $|A\times B|=|A||B|$ ([[thm-product-rule]]).

[L4] The quotient $\mathbb Z/n$ has $n$ elements for positive $n$ ([[thm-standard-representatives-modulo-n]]).

[L5] If a map from a finite set $A$ to a finite set $B$ has $|A|>|B|$, then some fibre contains more than one element ([[thm-the-strong-pigeonhole-principle]]).

[L6] If a prime $p$ divides $uv$, then $p\mid u$ or $p\mid v$ ([[thm-euclids-lemma]]).

[F1] The congruence $u\equiv v\pmod n$ means that $n\mid(u-v)$ ([[def-congruence-modulo-an-integer]]).

## Proof

**Proof technique:** direct.

1.1 The set $H:=\{k\in\mathbb N:k\le p\text{ and }k^2<p\}$ is finite and contains $0$, so [L1] gives its largest element $h$. [given, L1, construct]

2.1 One has $(h+1)^2>p$: a strict inequality in the other direction would put $h+1$ in $H$, while equality would factor the prime $p$ as $(h+1)(h+1)$ with $1<h+1<p$. Also $h^2<p=(\sqrt p)^2$, so $h<\sqrt p$ by nonnegativity and [L2]. [step 1.1, L2, given, algebra]

3.1 Put $I:=\{0,1,\ldots,h\}$. Then [L3] gives $|I\times I|=(h+1)^2>p=|\mathbb Z/p|$ by step 2.1 and [L4]. [step 2.1, L3, L4, algebra]

4.1 Apply [L5] to $(i,j)\mapsto[ia-j]_p$. Distinct pairs $(i,j),(i',j')\in I\times I$ have the same image. With $r=i-i'$ and $s=j-j'$, this says $ra\equiv s\pmod p$. [step 3.1, L5, F1, construct]

5.1 The coordinate bounds give $|r|,|s|\le h<\sqrt p$. [step 4.1, step 2.1, F1, L2, algebra]

6.1 If $r=0$, then [F1] gives $p\mid s$; the bound $|s|<\sqrt p<p$ forces $s=0$, contrary to distinctness. If $s=0$, then $p\mid ra$; [L6] and $p\nmid a$ give $p\mid r$, and the same bound forces $r=0$, again a contradiction. [step 5.1, L6, F1, given, algebra]

7.1 Thus the integers $r,s$ from step 4.1 are both nonzero, satisfy $ra\equiv s\pmod p$, and obey the required strict bounds. [step 4.1, step 5.1, step 6.1] ∎
