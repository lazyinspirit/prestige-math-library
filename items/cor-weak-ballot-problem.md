---
id: cor-weak-ballot-problem
kind: corollary
title: "The weak ballot count: for $p\\ge q\\ge0$ the orderings in which the first candidate is never behind satisfy $(p+1)\\,N=(p-q+1)\\binom{p+q}{q}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-ballot-problem, def-diagonal-lattice-path-and-its-height, thm-binomial-closed-formula, def-factorial-and-falling-factorial, lem-nat-mult-cancellative, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.3'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

Let $p,q\in\mathbb{N}$ with $p\ge q$. Write

$$\mathcal{B}^{\ge}(p,q) := \{\, v\in\mathcal{W}((0,0),(p+q,p-q)) : h(i)\ge 0 \text{ for } 0\le i\le p+q \,\}, \qquad N := \lvert\mathcal{B}^{\ge}(p,q)\rvert,$$

the diagonal paths of length $p+q$ from the origin ending at height $p-q$ whose
height is never negative ([[def-diagonal-lattice-path-and-its-height]]); these
record the orderings of a count with $p$ votes for the first candidate and $q$
for the second in which the first candidate is never behind. Then
$\mathcal{B}^{\ge}(p,q)$ is finite and, in $\mathbb{N}$,

$$(p+1)\,N = (p-q+1)\binom{p+q}{q}.$$

## Facts & Assumptions

**Given:** natural numbers $p\ge q$, and the set $\mathcal{B}^{\ge}(p,q)$ above.

[F1] A diagonal path of length $n$ from $(0,\alpha)$ is the same datum as a function $h:\{0,\dots,n\}\to\mathbb{Z}$ with $h(0)=\alpha$ and $h(i)-h(i-1)\in\{1,-1\}$ for $1\le i\le n$; with $\mu(n)$ the number of up-steps its endpoint height is $h(n)=\alpha+2\mu(n)-n$ ([[def-diagonal-lattice-path-and-its-height]]).

[L1] For natural numbers $p'>q'$, the set of diagonal paths of length $p'+q'$ from $(0,0)$ ending at height $p'-q'$ whose height is at least $1$ at every index from $1$ to $p'+q'$ is finite, and its cardinality $N'$ satisfies $(p'+q')N'=(p'-q')\binom{p'+q'}{p'}$ ([[thm-ballot-problem]]).

[L2] For $n,k\in\mathbb{N}$ with $k\le n$: $\binom{n}{k}\cdot k!\cdot (n-k)! = n!$ in $\mathbb{N}$, and $\binom{n}{k}=\binom{n}{n-k}$ ([[thm-binomial-closed-formula]]).

[L3] $n! \ne 0$ for every $n\in\mathbb{N}$, and $\sigma(n)! = n!\cdot\sigma(n)$ ([[def-factorial-and-falling-factorial]]).

[L4] For all $m,n,k\in\mathbb{N}$ with $k\ne 0$: if $m\cdot k=n\cdot k$ then $m=n$ ([[lem-nat-mult-cancellative]]).

[L5] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L6] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 Prepending an up-step is a bijection from $\mathcal{B}^{\ge}(p,q)$ onto the set of diagonal paths of length $p+q+1$ from $(0,0)$ ending at height $p-q+1$ whose height is at least $1$ from the index $1$ onwards. Given $h$ in the first set, put $\tilde h(0):=0$ and $\tilde h(i):=h(i-1)+1$ for $1\le i\le p+q+1$: then $\tilde h(1)-\tilde h(0)=1$, the later differences are those of $h$, the values from the index $1$ on are at least $1$ because $h\ge0$, and $\tilde h(p+q+1)=p-q+1$. Conversely, given $\tilde h$ in the second set, its first step is forced upward since $\tilde h(1)\ge1$ and $\tilde h(1)-\tilde h(0)\in\{1,-1\}$, so putting $h(i):=\tilde h(i+1)-1$ for $0\le i\le p+q$ gives $h(0)=0$, $h\ge0$ and $h(p+q)=p-q$. The two constructions undo one another, so [L5] and [L6] give a bijection and equal cardinalities. [F1, L5, L6, construct]

1.2 Two identities in $\mathbb{N}$. First, $(p+1)\binom{p+q+1}{p+1}=(p+q+1)\binom{p+q}{p}$: with $n:=p+q+1$ and $k:=p+1$ one has $k\le n$ and $n-k=q$, so [L2] gives $\binom{n}{p+1}\,(p+1)\,p!\,q!=n!$, while [L2] applied to $\binom{p+q}{p}$ gives $\binom{p+q}{p}\,p!\,q!=(p+q)!$, and multiplying the latter by $n$ and using $n\cdot(p+q)!=n!$ from [L3] makes the two left sides equal; cancelling the nonzero factor $p!\,q!$ by [L3] and [L4] gives the identity. Second, $\binom{p+q}{p}=\binom{p+q}{q}$ by the symmetry clause of [L2], since $(p+q)-p=q$. [L2, L3, L4, algebra]

2.1 Apply [L1] with $p'=p+1$ and $q'=q$, which is legitimate because $p+1>q$ follows from $p\ge q$: the set it counts is exactly the second set of step 1.1, so its cardinality is $N$ by step 1.1, and $(p+q+1)N=(p-q+1)\binom{p+q+1}{p+1}$. [L1, step 1.1, algebra]

3.1 Multiplying step 2.1 by $p+1$ and substituting the first identity of step 1.2 gives $(p+1)(p+q+1)N=(p-q+1)(p+q+1)\binom{p+q}{p}$; cancelling the nonzero factor $p+q+1$ by [L4] and rewriting $\binom{p+q}{p}$ as $\binom{p+q}{q}$ by the second identity of step 1.2 gives $(p+1)N=(p-q+1)\binom{p+q}{q}$. At $q=0$ this reads $(p+1)N=(p+1)\binom{p}{0}=p+1$, so $N=1$, the single all-up path; at $p=q$ it reads $(p+1)N=\binom{2p}{p}$, which is the relation the Catalan development uses. [L2, L4, step 1.2, step 2.1, algebra] ∎

## Remarks

- **Why the extra up-step and not a reflection.** The weak condition $h\ge0$ is
  not of the form treated by the reflection principle, whose hypothesis is a
  strict inequality against a level with both endpoints strictly above it.
  Prepending one up-step turns the weak condition at every index into the strict
  condition from the index $1$ onwards, and the strict count is already proved.

- **The case $p=q$.** Here $p-q+1=1$, and the identity says that $p+1$ times the
  number of never-behind orderings is the central binomial coefficient. That is
  the shape the Catalan numbers take on this page, and it is why the weak form is
  stated separately rather than left as an exercise on the strict one.
