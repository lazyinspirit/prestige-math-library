---
id: thm-every-countable-linear-order-embeds-in-the-rationals
kind: theorem
title: "Every countable linear order embeds in the rationals"
status: draft
origin: pipeline
deps: [def-partial-order, def-countable, def-injection-surjection-bijection, lem-countable-iff-surjection-from-n, thm-rationals-countable, thm-rat-ordered-field, thm-recursion, thm-induction-principle, thm-well-ordering-principle]
proof_strategy: recursion
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Lemma 9.36 and complete proof, printed pp. 86-87"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

Every at most countable linear order $(L,\le_L)$ admits a strictly
order-preserving injection into the rational order: there is a function
$f:L\to\mathbb Q$ such that

$$x<_L y\quad\Longrightarrow\quad f(x)<f(y).$$

This includes finite and empty linear orders. No choice principle is used.

## Facts & Assumptions

**Given:** An at most countable set $L$ carrying a linear order $\le_L$; write
$<_L$ for its associated strict order.

[F1] A linear order is a partial order in which every pair is comparable, and
$x<y$ means $x\le y$ and $x\ne y$. [[def-partial-order]]

[F2] A nonempty set is at most countable if and only if it is the range of a
surjection from $\mathbb N$. [[def-countable]],
[[lem-countable-iff-surjection-from-n]]

[F3] There is a bijection $\rho:\mathbb N\to\mathbb Q$.
[[thm-rationals-countable]], [[def-injection-surjection-bijection]]

[F4] The rationals form a totally ordered field. In particular, if $a<b$ then
$a<(a+b)/2<b$, and $a-1<a<a+1$. [[thm-rat-ordered-field]]

[F5] Recursion holds on $\mathbb N$. [[thm-recursion]]

[F6] Induction holds on $\mathbb N$. [[thm-induction-principle]]

[F7] Every nonempty subset of $\mathbb N$ has a least element.
[[thm-well-ordering-principle]]

## Proof

**Proof technique:** finite-stage recursion.

1.1 If $L=\varnothing$, the empty function is the required injection. Hence assume $L\ne\varnothing$; by [F2] fix a surjection $e:\mathbb N\to L$, and by [F3] fix a bijection $\rho:\mathbb N\to\mathbb Q$. These are two witnesses to two existential statements, not a simultaneous choice from a family. [given, F2, F3]

1.2 Put $L_n=e[\{k:k<n\}]$. Suppose $f_n:L_n\to\mathbb Q$ is strictly order preserving and put $x=e(n)$. If $x\notin L_n$, the already placed points below and above $x$ have finite image sets $B_n=\{f_n(y):y\in L_n,\ y<_Lx\}$ and $C_n=\{f_n(y):y\in L_n,\ x<_Ly\}$. Induction on the finite list $e(0),\ldots,e(n-1)$ and totality give a maximum $b$ of $B_n$ when it is nonempty and a minimum $c$ of $C_n$ when it is nonempty; strict preservation gives $b<c$ when both exist. Thus the set $I_n$ of rationals strictly above $b$ and below $c$, with either missing constraint omitted, is nonempty: use $(b+c)/2$ when both exist, $b+1$ or $c-1$ when just one exists, and $0$ when neither exists. Every old point is below or above $x$ by linearity, so every member of $I_n$ is outside $f_n[L_n]$. [F1, F4, F6, assume-hyp]

2.1 Apply recursion to states $(n,f_n)$, starting with $(0,\varnothing)$ and incrementing the first coordinate at each transition. Given $f_n$, leave it unchanged when $e(n)\in L_n$, and otherwise let $m_n=\min\{m:\rho(m)\in I_n\}$ and put $f_{n+1}=f_n\cup\{(e(n),\rho(m_n))\}$. The set minimized over is nonempty by step 1.2 and surjectivity of $\rho$, so [F7] makes the state transition single-valued. Induction using step 1.2 shows that every $f_n$ is a function with domain $L_n$, extends every earlier $f_k$, and is strictly order preserving. [step 1.2, F3, F5, F6, F7]

3.1 Let $f=\bigcup_{n\in\mathbb N}f_n$. Coherence makes $f$ a function. For each $x\in L$, surjectivity of $e$ makes $\{n:e(n)=x\}$ nonempty, so its least member $k$ exists by [F7] and $x\in L_{k+1}$; hence $\operatorname{dom}(f)=L$. If $x<_Ly$, choose stages containing both; a later common stage exists and its strict preservation gives $f(x)<f(y)$. Thus $f$ is strictly order preserving, and therefore injective: for distinct $x,y$, linearity gives one of $x<_Ly$ or $y<_Lx$, so their images are distinct. [step 2.1, F1, F2, F7]

4.1 The empty case and step 3.1 prove the theorem for every at most countable linear order. The only selections were the two fixed existential witnesses $e,\rho$; every later rational was determined by a least natural index, so the construction is valid in ZF and uses no form of the Axiom of Choice. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- Allowing repetitions in $e$ is essential for the library's convention: a
  nonempty finite set is at most countable and has a surjection from
  $\mathbb N$, but need not be bijective with it. The “already placed” branch
  in step 2.1 handles repetitions.
- Monk's proof chooses a rational in each finite gap. Taking the least index in
  a fixed enumeration of $\mathbb Q$ implements that instruction without a
  countable choice function.
