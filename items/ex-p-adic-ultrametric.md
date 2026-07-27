---
id: ex-p-adic-ultrametric
kind: example
title: "The $2$-adic absolute value gives an ultrametric on $\\mathbb{Q}$, in which every triangle is isosceles and every point of a ball is a centre"
status: published
origin: session
deps: [def-metric-space, def-metric-ball, def-integers, def-rationals, def-integer-power,
       thm-strong-induction, lem-alternating-sequence, thm-induction-principle,
       def-nat-addition, lem-nat-add-successor-left, def-nat-order, lem-nat-discrete,
       thm-nat-linear-order, lem-nat-embeds-int, thm-int-comm-ring, thm-int-ordered-ring,
       lem-int-cancellation, lem-int-embeds-rat, lem-of-q-embeds, thm-rat-field,
       lem-power-laws, lem-power-monotone, def-max-min, lem-finite-set-has-max,
       lem-metric-nonnegativity, cor-of-one-positive, lem-of-add-order,
       lem-of-sign-rules, lem-of-inverse-positive, def-natural-numbers,
       def-field, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: [ex-2-adic-ultrametric]
landmark: false
short: "$2$-adic ultrametric on $\\mathbb{Q}$"
proof_strategy: direct
verification:
  precheck: pass
  # judge block removed 2026-07-27: the Remarks were materially corrected by the
  # level-7-algebra scope-denial sweep, so the earlier pass was given on different
  # text (SCHEMA 3). Owner instruction: no re-judge for a published fix, so this
  # item is owner-audited but carries no AI-judge pass for its current text.
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "P-adic number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/P-adic_number"
    - title: "Ultrametric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrametric_space"
    - title: "Parity (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Parity_(mathematics)"
    - title: "Valuation (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Valuation_(algebra)"
pipeline_run: null
---

## Example

Write $2 := 1 + 1$. Call an integer ([[def-integers]]) **even** if it is $2t$ for
some integer $t$, and **odd** if it is $2t + 1$ for some integer $t$.

**The $2$-adic valuation.** Every nonzero integer $m$ can be written in exactly
one way as

$$m = 2^{\,j} u \qquad \text{with } j \in \mathbb{N} \text{ and } u \text{ odd},$$

and $v_2(m) := j$ is the **$2$-adic valuation** of $m$
([[def-integer-power]]). For a nonzero rational $x$ ([[def-rationals]]), written
$x = a/b$ with $a$ and $b$ nonzero integers, the integer

$$v_2(x) := v_2(a) - v_2(b)$$

does not depend on the chosen representation. The **$2$-adic absolute value** is

$$|x|_2 := 2^{-v_2(x)} \quad (x \ne 0), \qquad |0|_2 := 0,$$

read inside $\mathbb{R}$ through the embeddings $\mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$
([[lem-int-embeds-rat]], [[lem-of-q-embeds]]), and the **$2$-adic distance** is

$$d_2(x,y) := |x - y|_2 \qquad (x, y \in \mathbb{Q}).$$

**Claims.**

1. $d_2$ is an **ultrametric** on $\mathbb{Q}$ ([[def-metric-space]]): it
   satisfies (M1), (M2) and the strong triangle inequality
   $d_2(x,z) \le \max\{d_2(x,y), d_2(y,z)\}$.
2. **Every triangle is isosceles**: if $d_2(x,y) \ne d_2(y,z)$ then
   $d_2(x,z) = \max\{d_2(x,y), d_2(y,z)\}$.
3. **Every point of a ball is a centre**: if $y \in B(x,r)$ then
   $B(y,r) = B(x,r)$ ([[def-metric-ball]]).

**Why $p = 2$ and not a general prime.** The general $p$-adic valuation needs
primality and unique factorisation in $\mathbb{Z}$, neither of which this item
develops or assumes. At $p = 2$ everything reduces to parity, which is
available: [[lem-alternating-sequence]] partitions $\mathbb{N}$ into the ranges
of its two index maps, and that is what claim 2 of the verification turns into
"even or odd, never both".

Claims 2 and 3 use nothing about $d_2$ beyond the strong triangle inequality, so
they hold in every ultrametric space.

## Facts & Assumptions

**Given:** The integers $\mathbb{Z}$ and rationals $\mathbb{Q}$ with their arithmetic; the successor $\sigma$ on $\mathbb{N}$; the element $2 = 1 + 1$; the index maps $e, o$ of [[lem-alternating-sequence]]; and integers $m, a, c$ and rationals $x, y, z$ as introduced in the steps.

[L1] Ring and field arithmetic: $\mathbb{Z}$ is a commutative ring ([[thm-int-comm-ring]]) and $\mathbb{Q}$ a field ([[thm-rat-field]], [[def-rationals]]); $\mathbb{Z}$ is totally ordered and its order is compatible with addition and with multiplication by positives ([[thm-int-ordered-ring]]); nonzero integers have nonzero product and cancel ([[lem-int-cancellation]]).

[L2] Induction ([[thm-induction-principle]]) and strong induction ([[thm-strong-induction]]) on $\mathbb{N}$ ([[def-natural-numbers]]).

[L3] The index maps: $e_0 = 0$, $e_{\sigma(j)} = \sigma(\sigma(e_j))$, $o_0 = \sigma(0)$, $o_{\sigma(j)} = \sigma(\sigma(o_j))$, and $\mathbb{N}$ is the disjoint union of the ranges of $e$ and $o$, each natural lying in exactly one range and being hit exactly once ([[lem-alternating-sequence]]).

[L4] Addition on $\mathbb{N}$: $m + 0 = m$, $m + \sigma(k) = \sigma(m+k)$ ([[def-nat-addition]]) and $\sigma(m) + n = \sigma(m+n)$ ([[lem-nat-add-successor-left]]); the order is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]]), and $n \ne 0$ gives $n \ge 1$ ([[lem-nat-discrete]]).

[L5] The embedding $\mathbb{N} \to \mathbb{Z}$ is injective, preserves addition, multiplication and order, and its image is exactly the set of integers $\ge 0$ ([[lem-nat-embeds-int]]); the embeddings $\mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$ are injective and order preserving ([[lem-int-embeds-rat]], [[lem-of-q-embeds]]).

[L6] Powers: $a^0 = 1$, $a^{n+1} = a^n a$, $a^{m+n} = a^m a^n$ and $a^{-m} = (a^m)^{-1}$, valid for integer exponents when $a \ne 0$, and $a \ne 0$ gives $a^n \ne 0$ ([[def-integer-power]], [[lem-power-laws]]); for $a > 1$ and $k \ge 1$ one has $a^k \ge a > 1$, and $a > 0$ gives $a^n > 0$ ([[lem-power-monotone]]).

[L7] Order in $\mathbb{R}$: $0 < 1$ hence $0 < 1 < 2$ ([[cor-of-one-positive]], [[lem-of-add-order]]); products and inverses of positives are positive and scaling preserves inequalities ([[lem-of-sign-rules]], [[lem-of-inverse-positive]], [[def-field]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L8] Metric notions: the axioms (M1), (M2), (M3), the strong form (M3'), and the fact that a function satisfying (M1), (M2), (M3') is nonnegative and hence satisfies (M3), the maximum of two nonnegative reals being at most their sum ([[def-metric-space]], [[lem-metric-nonnegativity]], [[def-max-min]], [[lem-finite-set-has-max]]); balls are as in [[def-metric-ball]].

## Verification

**Proof technique:** direct.

1.1 For every $j \in \mathbb{N}$ one has $e_j = j + j$ and $o_j = \sigma(j+j)$, by induction on $j$: at $j = 0$, $e_0 = 0 = 0 + 0$ and $o_0 = \sigma(0) = \sigma(0+0)$; and if $e_j = j+j$ and $o_j = \sigma(j+j)$, then $e_{\sigma(j)} = \sigma(\sigma(e_j)) = \sigma(\sigma(j+j)) = \sigma(j) + \sigma(j)$ and $o_{\sigma(j)} = \sigma(\sigma(o_j)) = \sigma(\sigma(\sigma(j+j))) = \sigma(\sigma(j)+\sigma(j))$, using $\sigma(p) + q = \sigma(p+q)$ and $p + \sigma(q) = \sigma(p+q)$. [L2, L3, L4]

1.2 No integer $k$ satisfies $0 < k < 1$: such a $k$ would be positive, hence the image of a natural $n \ne 0$, so $n \ge 1$ and, the embedding being order preserving, $k \ge 1$, contradicting $k < 1$. [L1, L4, L5]

1.3 A product of two odd integers is odd: $(2a+1)(2c+1) = 2(2ac + a + c) + 1$ by ring arithmetic. [L1]

2.1 Every natural number is $j + j$ for exactly one $j$, or $\sigma(j+j)$ for exactly one $j$, and never both: this is the disjoint-union statement for the ranges of $e$ and $o$, rewritten through step 1.1. [step 1.1, L3]

2.2 No integer is both even and odd: if $2s = 2t + 1$ then the integer $k := s - t$ satisfies $2k = 1$, and $k \le 0$ would give $2k \le 0 < 1$ while $k \ge 1$ would give $2k \ge 2 > 1$, so $0 < k < 1$, which step 1.2 forbids. [step 1.2, L1, L7]

3.1 Every integer is even or odd: an integer $m \ge 0$ is the image of a natural $n$, which by step 2.1 is $j+j$ or $\sigma(j+j)$, so $m$ is $2t$ or $2t+1$ with $t$ the image of $j$, the embedding preserving addition and successors; and if $m < 0$ then $-m > 0$ is $2t$ or $2t+1$, whence $m = 2(-t)$ or $m = 2(-t-1)+1$. [step 2.1, L1, L5]

3.2 The representation is unique: if $2^{\,j}u = 2^{\,j'}u'$ with $u, u'$ odd and, without loss of generality, $j \le j'$, then $2^{\,j'} = 2^{\,j}2^{\,j'-j}$ and cancelling the nonzero factor $2^{\,j}$ gives $u = 2^{\,j'-j}u'$; if $j' > j$ then $j' - j \ge 1$ and $u = 2\big(2^{\,j'-j-1}u'\big)$ is even as well as odd, which step 2.2 forbids; so $j = j'$ and then $u = u'$. [step 2.2, L1, L4, L6]

4.1 Every nonzero integer $m$ is $2^{\,j}u$ with $j \in \mathbb{N}$ and $u$ odd: apply strong induction to the property $P(n)$ that every nonzero integer whose absolute value is the image of $n$, that is every nonzero $m$ equal to the image of $n$ or to its negative, has such a representation. Given $n$ and $P(k)$ for all $k < n$, note $n \ne 0$ since $m \ne 0$; by step 2.1 either $n = \sigma(j+j)$, in which case $m$ is $\pm(2t+1)$ and hence odd by the computation of step 3.1, so $m = 2^0 m$ works, or $n = j + j$ with $j \ne 0$, in which case $m = 2m'$ for the nonzero integer $m'$ that is the image of $j$ or its negative, and $j < n$ because $j \ge 1$ gives $n = j + j \ge j + 1 > j$, so $P(j)$ supplies $m' = 2^{\,i}u$ and $m = 2^{\,i+1}u$. Every nonzero integer is the image of some natural or its negative, so the conclusion holds for all of them. [step 2.1, step 3.1, L1, L2, L4, L5, L6]

5.1 For nonzero integers $a, c$ with $a + c \ne 0$: $v_2(a+c) \ge \min\{v_2(a), v_2(c)\}$. Indeed write $a = 2^{\,s}u$ and $c = 2^{\,s'}u'$ with $u, u'$ odd and, without loss of generality, $s \le s'$; then $a + c = 2^{\,s}\big(u + 2^{\,s'-s}u'\big)$, the bracket is a nonzero integer, so by step 4.1 it equals $2^{\,i}q$ with $q$ odd, whence $a + c = 2^{\,s+i}q$ and, by the uniqueness of step 3.2, $v_2(a+c) = s + i \ge s = \min\{s,s'\}$. [step 3.2, step 4.1, L1, L6]

5.2 The valuation of a nonzero rational is well defined: if $a/b = c/d$ with $a, b, c, d$ nonzero integers then $ad = cb$, and writing $a = 2^{\,s}u$, $b = 2^{\,t}w$, $c = 2^{\,s'}u'$, $d = 2^{\,t'}w'$ with all four of $u,w,u',w'$ odd gives $ad = 2^{\,s+t'}(uw')$ and $cb = 2^{\,s'+t}(u'w)$ with $uw'$ and $u'w$ odd by step 1.3; the uniqueness of step 3.2 applied to the nonzero integer $ad$ forces $s + t' = s' + t$, that is $s - t = s' - t'$. [step 1.3, step 3.2, step 4.1, L1, L6]

6.1 Basic properties of $|\cdot|_2$: for $x \ne 0$ the value $2^{-v_2(x)}$ is a positive real, since $2 > 0$ and powers and inverses of positives are positive; so $|x|_2 > 0$ for $x \ne 0$ and $|x|_2 = 0$ exactly when $x = 0$. Moreover $|-x|_2 = |x|_2$, because $-x = (-a)/b$ and $-\big(2^{\,s}u\big) = 2^{\,s}(-u)$ with $-u = 2(-t-1)+1$ odd when $u = 2t+1$, so $v_2(-x) = v_2(x)$. [step 5.2, L1, L6, L7]

7.1 Strong triangle inequality for $|\cdot|_2$: $|x+y|_2 \le \max\{|x|_2, |y|_2\}$. If $x = 0$, or $y = 0$, or $x + y = 0$, this is immediate from step 6.1. Otherwise write $x = a/b$ and $y = c/b$ over a common nonzero denominator $b$, with $a, c$ nonzero integers, so that $x + y = (a+c)/b$ with $a + c \ne 0$; then $v_2(x) = v_2(a) - v_2(b)$, $v_2(y) = v_2(c) - v_2(b)$ and $v_2(x+y) = v_2(a+c) - v_2(b)$, so step 5.1 gives $v_2(x+y) \ge \min\{v_2(x), v_2(y)\}$; finally $t \mapsto 2^{\,t}$ is strictly increasing on $\mathbb{Z}$, since for $t < t'$ one has $2^{\,t'} = 2^{\,t}2^{\,t'-t}$ with $2^{\,t} > 0$ and $2^{\,t'-t} > 1$, so $2^{-v_2(x+y)} \le 2^{-\min\{v_2(x),v_2(y)\}} = \max\{2^{-v_2(x)}, 2^{-v_2(y)}\}$. [step 5.1, step 5.2, L1, L5, L6, L7]

8.1 Claim 1: $d_2(x,y) = |x-y|_2$ vanishes exactly when $x = y$ by step 6.1, is symmetric because $|y-x|_2 = |-(x-y)|_2 = |x-y|_2$, and satisfies $d_2(x,z) = |(x-y)+(y-z)|_2 \le \max\{|x-y|_2, |y-z|_2\} = \max\{d_2(x,y), d_2(y,z)\}$ by step 7.1; being nonnegative, it also satisfies the ordinary triangle inequality, the maximum of two nonnegative reals being at most their sum. So $d_2$ is an ultrametric on $\mathbb{Q}$. [step 6.1, step 7.1, L8]

9.1 Claim 2: suppose $d_2(x,y) \ne d_2(y,z)$ and, without loss of generality, $d_2(x,y) < d_2(y,z)$. Then $d_2(x,z) \le \max\{d_2(x,y), d_2(y,z)\} = d_2(y,z)$; and $d_2(y,z) \le \max\{d_2(y,x), d_2(x,z)\} = \max\{d_2(x,y), d_2(x,z)\}$, where the maximum cannot be $d_2(x,y)$, since that would give $d_2(y,z) \le d_2(x,y) < d_2(y,z)$; so $d_2(y,z) \le d_2(x,z)$ and the two are equal, that is $d_2(x,z) = \max\{d_2(x,y), d_2(y,z)\}$. [step 8.1, L7, L8]

9.2 Claim 3: let $y \in B(x,r)$, so $d_2(x,y) < r$. For $z \in B(y,r)$ the strong triangle inequality gives $d_2(x,z) \le \max\{d_2(x,y), d_2(y,z)\} < r$, so $z \in B(x,r)$; and for $z \in B(x,r)$ it gives $d_2(y,z) \le \max\{d_2(y,x), d_2(x,z)\} < r$, so $z \in B(y,r)$. Hence $B(y,r) = B(x,r)$. [step 8.1, L8]

10.1 Claims 1, 2 and 3 are established by steps 8.1, 9.1 and 9.2, so the $2$-adic distance is an ultrametric on $\mathbb{Q}$ in which every triangle is isosceles and every point of a ball is a centre. [step 8.1, step 9.1, step 9.2] ∎

## Remarks

- **Where parity is spent, and where it is not.** The partition of $\mathbb{N}$
  into the two ranges of [[lem-alternating-sequence]] is used exactly twice: in
  step 2.1, to know that a natural is even or odd, and through it in step 3.1 for
  the integers. Uniqueness of the valuation (step 3.2) uses only that no integer
  is both even and odd, which step 2.2 derives from the discreteness of
  $\mathbb{Z}$ rather than from the partition.
- **What an ultrametric costs and what it buys.** Claims 2 and 3 are formal
  consequences of (M3') and hold in every ultrametric space
  ([[def-metric-space]]); they are recorded here because they are the two facts
  that make ultrametric geometry look unlike the real line, where a triangle need
  not be isosceles and a ball has exactly one centre.
- **The general $p$-adic absolute value is not available here.** Its
  well-definedness needs the primality of $p$ in the form of Euclid's lemma, that
  $p$ dividing a product divides one of the factors, which this item does not
  establish and does not assume. At $p = 2$ the
  statement doing the same work is that a product of odd integers is odd, proved
  in step 1.3 above by a one-line ring computation.
