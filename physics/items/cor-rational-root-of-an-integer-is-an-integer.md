---
id: cor-rational-root-of-an-integer-is-an-integer
kind: corollary
title: "A rational root of $x^{k} = m$ is an integer: if $k \\ge 1$, $m \\in \\mathbb{Z}$, $x \\in \\mathbb{Q}$ and $x^{k}$ is the image of $m$, then $x$ is the image of an integer"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-euclids-lemma, lem-every-integer-above-one-has-a-prime-divisor, def-prime,
       def-coprime, cor-gcd-quotients-coprime, lem-coprime-criterion,
       def-common-divisor-and-gcd, lem-gcd-basic-values, def-divides-in-z,
       lem-divisibility-basic, def-rationals, def-rat-operations, thm-rat-field,
       lem-int-embeds-rat, def-field, def-group-power, def-semigroup-and-monoid,
       lem-units-of-z, thm-induction-principle, lem-int-cancellation, def-integers,
       def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring,
       def-natural-numbers, def-nat-order, lem-nat-embeds-int, lem-nat-discrete,
       lem-nat-nonzero-is-successor]
justified_by: []
forward_refs: [ex-no-rational-square-root-of-three]
aliases: [cor-rational-root-theorem-for-pure-powers]
landmark: true
short: "a rational $k$-th root of an integer is an integer"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Rational root theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_root_theorem"
    - title: "University of Toronto MAT 246 solutions: Rational roots"
      url: "https://www.math.toronto.edu/vtk/246Winter2015/hw6sol.pdf"
pipeline_run: null
---

## Statement

$\mathbb{Q}$ is a field ([[thm-rat-field]], [[def-field]]), so
$(\mathbb{Q},\cdot,1)$ is a commutative monoid and natural powers $x^{k}$ are
defined in it by [[def-group-power]]. Write $j : \mathbb{Z} \to \mathbb{Q}$,
$j(u) = [(u,1)]$, for the embedding of [[lem-int-embeds-rat]].

Let $k \in \mathbb{N}$ with $k \ge 1$, let $m \in \mathbb{Z}$, and let
$x \in \mathbb{Q}$ satisfy

$$x^{k} \;=\; j(m).$$

Then $x = j(z)$ for some $z \in \mathbb{Z}$.

## Facts & Assumptions

**Given:** $k \in \mathbb{N}$ with $k \ge 1$, $m \in \mathbb{Z}$, and $x \in \mathbb{Q}$ with $x^{k} = j(m)$.

[L1] A rational is a class $[(u,w)]$ with $u, w \in \mathbb{Z}$, $w \ne 0$, and $[(u,w)] = [(u',w')]$ exactly when $u w' = u' w$ ([[def-rationals]]).

[L2] $[(u,w)] \cdot [(u',w')] = [(uu', ww')]$, $0 = [(0,1)]$, $1 = [(1,1)]$, and $[(u,w)] \ne 0$ exactly when $u \ne 0$ ([[def-rat-operations]]).

[L3] $\mathbb{Q}$ is a field: multiplication is associative and commutative on all of $\mathbb{Q}$ with $y \cdot 1 = y$ and $y \cdot 0 = 0$ ([[thm-rat-field]], [[def-field]]), so $(\mathbb{Q},\cdot,1)$ is a commutative monoid ([[def-semigroup-and-monoid]]).

[L4] $g^{0} = e$ and $g^{\sigma(t)} = g^{t} \cdot g$ in a monoid ([[def-group-power]]).

[L5] $j(u) = [(u,1)]$ is injective and preserves addition and multiplication ([[lem-int-embeds-rat]]).

[L6] For $d := \gcd(u,w) \ne 0$ there are unique $u/d$ and $w/d$ with $u = d(u/d)$, $w = d(w/d)$, and $\gcd(u/d, w/d) = 1$ ([[cor-gcd-quotients-coprime]], [[def-common-divisor-and-gcd]], [[def-coprime]]).

[L7] $\gcd(u,w) \ge 1$ unless $u = w = 0$ ([[lem-gcd-basic-values]], [[def-common-divisor-and-gcd]]).

[L8] If $\gcd(u,w) = 1$ then the set of common divisors of $u$ and $w$ is exactly $\{1,-1\}$ ([[lem-coprime-criterion]], [[lem-units-of-z]]).

[L9] If $q$ is prime and $q \mid uv$ then $q \mid u$ or $q \mid v$ ([[thm-euclids-lemma]]).

[L10] Every integer $> 1$ has a prime divisor, and every prime $q$ satisfies $q > 1$ ([[lem-every-integer-above-one-has-a-prime-divisor]], [[def-prime]]).

[L11] Divisibility is reflexive and transitive, $d \mid u$ implies $d \mid uc$, and $d \mid u$ means $u = dc$ for some $c$ ([[lem-divisibility-basic]], [[def-divides-in-z]]).

[L12] Induction on $\mathbb{N}$ ([[thm-induction-principle]]); every natural $\ne 0$ is a successor ([[lem-nat-nonzero-is-successor]]); $m < n$ exactly when $\sigma(m) \le n$, and $1 = \sigma(0)$ ([[lem-nat-discrete]], [[def-natural-numbers]], [[def-nat-order]]).

[L14] $u \mid 1$ exactly when $u = 1$ or $u = -1$ ([[lem-units-of-z]]).

[L13] A product of two nonzero integers is nonzero ([[lem-int-cancellation]]); $\mathbb{Z}$ is a commutative ring whose order is total, antisymmetric and transitive ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]], [[thm-int-ordered-ring]], [[def-int-order]]); $\iota : \mathbb{N} \to \mathbb{Z}$ is injective and order preserving with image the nonnegative integers ([[lem-nat-embeds-int]]).

## Proof

**Proof technique:** direct.

1.1 $0 < 1$ in $\mathbb{Z}$, and every integer $y > 0$ satisfies $y \ge 1$: $y = \iota(t)$ with $t \ne 0$, so $1 = \sigma(0) \le t$ and $\iota$ preserves the order. [L12, L13]

1.2 For integers $u, w$ with $w \ne 0$ and every $t \in \mathbb{N}$: $w^{t} \ne 0$ and $[(u,w)]^{t} = [(u^{t}, w^{t})]$, powers on the left in $\mathbb{Q}$ and on the right in $\mathbb{Z}$. The set of $t$ for which this holds contains $0$, since $w^{0} = 1 \ne 0$ and $[(u,w)]^{0} = 1 = [(1,1)] = [(u^{0}, w^{0})]$; and if it holds at $t$ then $w^{\sigma(t)} = w^{t} w \ne 0$ and $[(u,w)]^{\sigma(t)} = [(u^{t},w^{t})] \cdot [(u,w)] = [(u^{t}u,\, w^{t}w)] = [(u^{\sigma(t)}, w^{\sigma(t)})]$. Induction finishes it. [L1, L2, L4, L12, L13]

1.3 Suppose first $x = 0$. Since $k \ge 1$, write $k = \sigma(t)$; then $x^{k} = x^{t} \cdot 0 = 0 = j(0)$, so $j(m) = j(0)$ and $m = 0$ by injectivity of $j$; and $x = 0 = j(0)$ is the image of an integer. [L3, L4, L5, L12]

1.4 Suppose instead $x \ne 0$, and write $x = [(a,b)]$ with $b \ne 0$; then $a \ne 0$. If $b < 0$, replace $(a,b)$ by $(-a,-b)$, which represents the same rational because $a(-b) = (-a)b$; so we may assume $b > 0$. [L1, L2, L13, choose]

2.1 For a prime $q$, an integer $u$ and $t \ge 1$: if $q \mid u^{t}$ then $q \mid u$. Let $S$ be the set of $t$ for which this implication holds; $0 \in S$ vacuously, since $t \ge 1$ fails there. Suppose $t \in S$ and $q \mid u^{\sigma(t)} = u^{t} u$. By [L9] either $q \mid u^{t}$ or $q \mid u$; in the second case we are done, and in the first, if $t \ge 1$ then $t \in S$ gives $q \mid u$, while if $t = 0$ then $u^{t} = 1$ and $q \mid 1$ is impossible for a prime, since $q > 1 > 0 > -1$ would then be contradicted. So $\sigma(t) \in S$ and $S = \mathbb{N}$. [step 1.1, L4, L9, L10, L12, L13, L14]

2.2 Put $d := \gcd(a,b)$; since $a \ne 0$ we have $d \ge 1 > 0$, so $d \ne 0$. Put $a_1 := a/d$ and $b_1 := b/d$, so that $a = d a_1$, $b = d b_1$ and $\gcd(a_1,b_1) = 1$. [step 1.1, step 1.4, L6, L7, L13]

3.1 $a_1 \ne 0$ and $b_1 > 0$: if $a_1 = 0$ then $a = 0$, and if $b_1 \le 0$ then $b = d b_1 \le 0$, both contrary to step 1.4. Moreover $[(a,b)] = [(a_1,b_1)]$, because $a b_1 = (d a_1) b_1 = a_1 (d b_1) = a_1 b$. [step 1.4, step 2.2, L1, L13]

4.1 By step 1.2, $x^{k} = [(a_1,b_1)]^{k} = [(a_1^{k}, b_1^{k})]$, and this equals $j(m) = [(m,1)]$, so $a_1^{k} \cdot 1 = m\, b_1^{k}$, that is $a_1^{k} = m\, b_1^{k}$. [step 1.2, step 3.1, L1, L5, L13]

5.1 Suppose $b_1 > 1$ and fix a prime $q$ with $q \mid b_1$. Since $k \ge 1$, write $k = \sigma(t)$; then $b_1^{k} = b_1^{t} b_1$, so $b_1 \mid b_1^{k}$ and hence $q \mid b_1^{k}$ by transitivity. Then $q \mid m\, b_1^{k} = a_1^{k}$, so $q \mid a_1$ by step 2.1. [step 2.1, step 4.1, L4, L10, L11, L12]

6.1 So $q$ is a common divisor of $a_1$ and $b_1$, which are coprime, hence $q = 1$ or $q = -1$ by [L8] and [L14]; but $q > 1 > 0 > -1$, a contradiction. Therefore $b_1 \le 1$, and $b_1 > 0$ gives $b_1 \ge 1$, so $b_1 = 1$. [step 1.1, step 2.2, step 3.1, step 5.1, L8, L10, L13, L14]

7.1 Hence $x = [(a_1,1)] = j(a_1)$ is the image of an integer; together with step 1.3 this covers both cases. [step 1.3, step 3.1, step 6.1, L5] ∎

## Remarks

- **The instances live on the companion page.** No rational squares to $3$ or to $6$, and none cubes to $2$: each is this corollary followed by ruling out the finitely many integer candidates by size, and all three are worked out in [[ex-no-rational-square-root-of-three]].

- **The argument lives inside $\mathbb{Q}$ and never enters $\mathbb{R}$.** No $n$-th root is asserted to exist; the hypothesis is that a rational $x$ already satisfies $x^{k} = j(m)$, and the conclusion is about its denominator. The powers are monoid powers of [[def-group-power]] in $(\mathbb{Q},\cdot,1)$, not [[def-integer-power]], which is stated in the ambient ordered field.

- **This is a second route to a fact the library already had.** The published [[fs-sqrt2-rational]] refutes "some rational number squares to $2$" by parity alone, on the construction pages, long before primes existed here. The case $k = 2$, $m = 2$ of this corollary gives the same conclusion by a different argument, and the two agree: a rational squaring to $2$ would have to be an integer $z$ with $z^{2} = 2$, and $1 < 2 < 4$ leaves no candidate.

- **Where primality is used.** Exactly once, in step 2.1, through [[thm-euclids-lemma]]: a prime dividing a power divides the base. For a composite divisor the step fails, which is why the classical proof cannot be run with an arbitrary common factor in place of a prime.
