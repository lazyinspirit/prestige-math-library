---
id: thm-ballot-problem
kind: theorem
title: "Bertrand's ballot problem: for $p>q\\ge0$ the orderings in which the first candidate is strictly ahead throughout satisfy $(p+q)\\,N=(p-q)\\binom{p+q}{p}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-reflection-principle-for-diagonal-lattice-paths, def-diagonal-lattice-path-and-its-height, thm-binomial-closed-formula, def-binomial-coefficient, def-factorial-and-falling-factorial, lem-nat-mult-cancellative, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, def-finite-cardinality, def-canonical-natural]
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
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
pipeline_run: null
---

## Statement

Let $p,q\in\mathbb{N}$ with $p>q$. A count in which the first candidate receives
$p$ votes and the second $q$ votes, the votes being read in order, is recorded by
a diagonal lattice path of length $p+q$ from $(0,0)$ whose step word has exactly
$p$ letters $U$, one for each vote for the first candidate; such a path ends at
height $p-q$ ([[def-diagonal-lattice-path-and-its-height]]). The first candidate
is **strictly ahead throughout** when the height after each of the $p+q$ votes is
at least $1$. Write

$$\mathcal{B}(p,q) := \{\, v\in\mathcal{W}((0,0),(p+q,p-q)) : h(i)\ge 1 \text{ for } 1\le i\le p+q \,\}, \qquad N := \lvert\mathcal{B}(p,q)\rvert .$$

Then $\mathcal{B}(p,q)$ is finite and, in $\mathbb{N}$,

$$(p+q)\,N = (p-q)\binom{p+q}{p}.$$

## Facts & Assumptions

**Given:** natural numbers $p>q$, so $p\ge1$ and $p+q\ge1$; and the set $\mathcal{B}(p,q)$ above.

[F1] A diagonal path of length $n$ from $(0,\alpha)$ is the same datum as a function $h:\{0,\dots,n\}\to\mathbb{Z}$ with $h(0)=\alpha$ and $h(i)-h(i-1)\in\{1,-1\}$ for $1\le i\le n$; with $\mu(n)$ the number of up-steps its endpoint height is $h(n)=\alpha+2\mu(n)-n$; and it stays strictly above the level $c$ when $h(i)>c$ for every $i\le n$ ([[def-diagonal-lattice-path-and-its-height]]).

[L1] For $c\in\mathbb{Z}$, $n\in\mathbb{N}$ and $a>c$, $b>c$: if $2$ divides $n+b-a$ and $b-a\ge-n$, and $u$ is the natural number with $2u=n+b-a$, then the set of paths in $\mathcal{W}((0,a),(n,b))$ staying strictly above level $c$ is finite and its cardinality $\lvert\mathcal{A}\rvert$ satisfies $\lvert\mathcal{A}\rvert+\binom{n}{u+a-c}=\binom{n}{u}$ ([[thm-reflection-principle-for-diagonal-lattice-paths]], clause 2).

[L2] For $n,k\in\mathbb{N}$ with $k\le n$: $\binom{n}{k}\cdot k!\cdot (n-k)! = n!$ in $\mathbb{N}$ ([[thm-binomial-closed-formula]]).

[L3] $n! \ne 0$ for every $n\in\mathbb{N}$, and $\sigma(n)! = n!\cdot\sigma(n)$ ([[def-factorial-and-falling-factorial]]).

[L4] For all $m,n,k\in\mathbb{N}$ with $k\ne 0$: if $m\cdot k=n\cdot k$ then $m=n$ ([[lem-nat-mult-cancellative]]).

[L5] $\binom{n}{k}=0$ for $k>n$, and $\binom{n}{n}=1$ ([[def-binomial-coefficient]]).

[L6] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L7] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 For $v\in\mathcal{B}(p,q)$ the first step is forced upward: $h(0)=0$ and $h(1)-h(0)\in\{1,-1\}$, while $h(1)\ge1$, so $h(1)=1$. [F1]

1.2 Two identities in $\mathbb{N}$, with $m:=p+q$. First, $m\binom{m-1}{p-1}=p\binom{m}{p}$: since $p\ge1$ and $p-1\le m-1$, and since $m-1-(p-1)=q$ and $m-p=q$, [L2] gives $\binom{m-1}{p-1}(p-1)!\,q!=(m-1)!$ and $\binom{m}{p}\,p\,(p-1)!\,q!=m!$; multiplying the first by $m$ and using $m\cdot(m-1)!=m!$ from [L3] makes both left sides equal, and cancelling the nonzero factor $(p-1)!\,q!$ by [L3] and [L4] gives the identity. Second, $m\binom{m-1}{p}=q\binom{m}{p}$: when $q=0$ both sides are $0$, since then $p=m$ and $\binom{m-1}{p}=0$ by [L5]; and when $q\ge1$ then $p\le m-1$ with $m-1-p=q-1$, so [L2] gives $\binom{m-1}{p}\,p!\,(q-1)!=(m-1)!$ and $\binom{m}{p}\,p!\,q\,(q-1)!=m!$, and the same multiplication by $m$ and cancellation of $p!\,(q-1)!$ gives it. [L2, L3, L4, L5, algebra]

2.1 Shifting the index by one is a bijection from $\mathcal{B}(p,q)$ onto the set $\mathcal{A}$ of paths in $\mathcal{W}((0,1),(p+q-1,p-q))$ that stay strictly above the level $0$: given $h$, put $h^{-}(i):=h(i+1)$ for $0\le i\le p+q-1$, so $h^{-}(0)=1$ by step 1.1, $h^{-}(p+q-1)=p-q$, consecutive values differ by $1$ in absolute value, and $h^{-}(i)\ge1>0$; conversely, given such an $h^{-}$, put $h(0):=0$ and $h(i):=h^{-}(i-1)$ for $1\le i\le p+q$, which has $h(1)-h(0)=1$ and the remaining differences those of $h^{-}$, ends at $p-q$, and has $h(i)\ge1$ for $i\ge1$. The two constructions undo one another, so [L6] and [L7] apply and $N=\lvert\mathcal{A}\rvert$. [F1, L6, L7, step 1.1, construct]

3.1 Apply [L1] with $n=p+q-1$, $a=1$, $b=p-q$ and $c=0$: the hypotheses $a>c$ and $b>c$ hold because $p>q$, and $n+b-a=2p-2$ is even with $2(p-1)=n+b-a$, so $u=p-1$ and $u+a-c=p$; also $b-a\ge-n$ since $n+b-a\ge0$. Hence $N+\binom{p+q-1}{p}=\binom{p+q-1}{p-1}$. [L1, step 2.1, algebra]

4.1 Multiplying step 3.1 by $m=p+q$ and substituting the two identities of step 1.2 gives $m\,N+q\binom{m}{p}=p\binom{m}{p}$, and since $q\le p$ this is exactly $(p+q)N=(p-q)\binom{p+q}{p}$. At $q=0$ it reads $p\,N=p\binom{p}{p}=p$, so $N=1$ by [L4], matching the single all-up path; at $p=2$, $q=1$ it reads $3N=\binom{3}{2}=3$, so $N=1$, the one path with step word $UUD$. [L4, L5, step 1.2, step 3.1, algebra] ∎

## Remarks

- **The quotient form.** The identity of the statement is an identity of natural
  numbers. Reading each natural number as its canonical natural in $\mathbb{R}$
  ([[def-canonical-natural]]) and dividing by the nonzero real $p+q$ turns it into
  the familiar $\frac{p-q}{p+q}\binom{p+q}{p}$; the multiplicative form is the one
  proved, and the division is legitimate only because $p+q\ne0$, which needs
  $p>q$ or at least $p+q\ge1$.

- **Why $p>q$ and not $p\ge q$.** With $p=q$ the height ends at $0$, so the last
  vote brings the count level and the first candidate is not strictly ahead
  throughout; the count is then $0$, while the right-hand side is $0$ as well, so
  the identity survives but says nothing. The interesting weak form, in which the
  first candidate is merely never behind, is a separate statement.
