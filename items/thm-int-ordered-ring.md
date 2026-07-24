---
id: thm-int-ordered-ring
kind: theorem
title: "The integers form a totally ordered ring"
status: published
origin: session
deps: [def-integers, def-int-operations, def-int-order, thm-int-comm-ring]
aliases: []
landmark: true
short: "ℤ ordered ring"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

The relation of [[def-int-order]] is well defined and is a total order on
$\mathbb{Z}$; it is compatible with addition ($x \le y$ implies
$x + z \le y + z$) and positives are closed under multiplication
($0 < x$ and $0 < y$ imply $0 < xy$). Thus $\mathbb{Z}$ is a totally
ordered commutative ring.

## Facts & Assumptions

**Given:** Integers $x = [(a,b)]$, $y = [(c,d)]$, $z = [(e,f)]$ with the operations of [[def-int-operations]].

[A1] Addition on $\mathbb{N}$ is commutative and associative.

[A2] The order on $\mathbb{N}$ is total, antisymmetric, and transitive.

[A3] In $\mathbb{N}$: $x \le y$ if and only if $x + z \le y + z$.

[A4] In $\mathbb{N}$: if $x \le y$ then $y = x + k$ for some $k$, with $k \ge 1$ when $x < y$.

[A5] Multiplication on $\mathbb{N}$ is commutative, associative, distributes over addition, and $k, m \ge 1$ imply $km \ge 1$.

## Proof

**Proof technique:** direct.

1.1 Suppose $(a,b) \sim (a',b')$ and $(c,d) \sim (c',d')$, i.e. $a + b' = b + a'$ and $c + d' = d + c'$. [given]

1.2 Suppose $a + d \le b + c$. [given]

1.3 Totality: in $\mathbb{N}$ either $a + d \le b + c$ or $b + c \le a + d$, so $x \le y$ or $y \le x$. [A2]

1.4 Antisymmetry: $x \le y$ and $y \le x$ give $a + d \le b + c$ and $b + c \le a + d$, hence $a + d = b + c$, which is $x = y$ as classes. [A2]

1.5 Transitivity: from $a + d \le b + c$ and $c + f \le d + e$, adding gives $(a+d)+(c+f) \le (b+c)+(d+e)$; regrouping, $(a+f)+(c+d) \le (b+e)+(c+d)$; cancelling, $a + f \le b + e$, i.e. $x \le z$. [A1, A2, A3]

1.6 Compatibility with addition: $x + z \le y + z$ reads $(a+e)+(d+f) \le (b+f)+(c+e)$, which regroups to $(a+d) + (e+f) \le (b+c) + (e+f)$, equivalent to $a + d \le b + c$, i.e. $x \le y$. [A1, A3]

1.7 Suppose $0 < x$ and $0 < y$, i.e. $b < a$ and $d < c$. [given]

2.1 Adding $(a'+d')$: $(a+d) + (a'+d') \le (b+c) + (a'+d')$. [step 1.2, A3]

2.2 Regrouping with the equations of step 1.1: $(b+c) + (a'+d') = (b+a') + (c+d') = (a+b') + (d+c') = (a+d) + (b'+c')$. [step 1.1, A1]

2.3 Write $a = b + k$ and $c = d + m$ with $k, m \ge 1$. [step 1.7, A4]

3.1 So $(a+d) + (a'+d') \le (a+d) + (b'+c')$; cancelling $(a+d)$ gives $a' + d' \le b' + c'$: the relation is independent of representatives. [step 2.1, step 2.2, A3]

3.2 Expanding both components of $xy = [(ac+bd,\, ad+bc)]$: $ac + bd = (b+k)(d+m) + bd = (bd + bm + kd + bd) + km$ and $ad + bc = (b+k)d + b(d+m) = bd + kd + bd + bm$, so $ac + bd = (ad + bc) + km$. [step 2.3, A1, A5]

4.1 Since $km \ge 1$, $ad + bc < ac + bd$, which is $0 < xy$. [step 2.3, step 3.2, A2, A5]

5.1 The order is well defined, total, compatible with addition, and positives are closed under multiplication: $\mathbb{Z}$ is a totally ordered commutative ring. [step 3.1, step 1.3, step 1.4, step 1.5, step 1.6, step 4.1] ∎
