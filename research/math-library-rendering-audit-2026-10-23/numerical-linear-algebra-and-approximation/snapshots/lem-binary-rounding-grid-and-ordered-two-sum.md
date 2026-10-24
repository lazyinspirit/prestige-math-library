---
id: lem-binary-rounding-grid-and-ordered-two-sum
kind: lemma
title: "Binary rounding grids, exact subtraction, and ordered TwoSum"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [thm-of-archimedean]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, sections 2.2–2.3"
      url: https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
---

## Statement

For an integer $p\ge2$, let $\mathbb B_p=\{0\}\cup\{\pm m2^k: m,k\in\mathbb Z,\ 2^{p-1}\le m<2^p\}$, with unbounded exponent. Let $R$ round a real number to its nearest member of $\mathbb B_p$, breaking ties by the even normalized significand; set $R(0)=0$. For $x\ne0$ put $E(x)$ be the unique integer with $2^{E(x)}\le|x|<2^{E(x)+1}$, and set $q(x)=2^{E(x)-p+1}$. The following hold.

- $R$ is monotone, odd, and fixes $\mathbb B_p$. For $R(t)\ne0$, $|R(t)-t|\le q(R(t))/2$.
- If $x,y\in\mathbb B_p$, then $\rho=R(x+y)-(x+y)$ belongs to $\mathbb B_p$ and $|\rho|\le\min(|x|,|y|)$. If $|R(x+y)|<\min(|x|,|y|)$, the sum is exact.
- If $x,y\in\mathbb B_p$ have the same sign and $|x|/2\le|y|\le2|x|$, then $x-y\in\mathbb B_p$ (Sterbenz exact subtraction).
- If $A,B\in\mathbb B_p$ and $|A|\ge|B|$, then $S=R(A+B)$, $Z=R(S-A)$, $T=R(B-Z)$ satisfy $Z=S-A$ and $T=A+B-S$ exactly.

## Facts & Assumptions

**Given:** the binary set and nearest-even rounding just defined. All quantities in this lemma use unbounded exponents; finite-range success is handled separately by its consumers.

[F1] [[thm-of-archimedean]]: for every real number there is a larger natural number.

## Proof

1.1 Integer induction gives $2^n\ge n+1$ for $n\ge0$: the initial equality is immediate and $2^{n+1}\ge2(n+1)\ge n+2$. For $t>0$, [F1] supplies a natural $N>\max(t,1/t,1)$, so $2^{-N}<t<2^N$. The finite set of integers $j\in[-N,N]$ with $2^j\le t$ is nonempty and has a largest element $E$; it satisfies $2^E\le t<2^{E+1}$. Strict increase of powers of two makes $E$ unique. Thus the stated $E(x)$ exists for every $x\ne0$. In its binade, the finitely many points $m2^{E-p+1}$, $2^{p-1}\le m\le2^p$, bracket $t$; their adjacent neighbors determine its nearest point. Points outside that bracket cannot be nearer, and zero is farther than a positive grid point; negative arguments follow by reflection. On a binade $[2^j,2^{j+1}]$, the nonnegative grid has spacing $2^{j-p+1}$. Its consecutive midpoints partition the real line into nearest-point cells, proving monotonicity and exactness on the grid; reflection preserves the even-significand tie rule, proving oddness. Every nonzero real number has two bracketing grid points, so a nearest point exists and is nonzero for a nonzero argument. The gaps on either side of a grid point $c\ne0$ are at most $q(c)$, including the half-sized lower gap at a power of two. Its rounding cell therefore gives $|R(t)-t|\le q(R(t))/2$. Also, for any power of two $h$, every integer multiple $nh$ with $|n|\le2^p$ is in $\mathbb B_p$: the integer has at most $p$ significant bits, except $|n|=2^p$, which is a power of two. [given, F1, algebra]

2.1 Suppose $x,y\ne0$ and $|x|\ge|y|$, and put $h=q(y)$. Both operands and their exact sum $t=x+y$ are integer multiples of $h$. Whenever $|t|\le|y|$, step 1.1 makes $t$ representable because $|y|<2^p h$. In particular, if $|R(t)|<|y|$, monotonicity and the fixed grid points $\pm|y|$ imply $|t|<|y|$, so $R(t)=t$. Otherwise $|R(t)|\ge|y|$, hence its binade spacing is an integer multiple of $h$, so $\rho=R(t)-t$ is an integer multiple of $h$. Since $x$ and $y$ themselves are candidate nearest points, $|\rho|\le\min(|t-x|,|t-y|)=|y|<2^p h$; step 1.1 makes $\rho$ representable. The zero-operand cases have $\rho=0$, and interchange handles the other magnitude order. This proves the second assertion, including the strict small-rounded-sum case. [step 1.1, algebra]

3.1 For the subtraction assertion, change both signs and interchange operands so that $x\ge y>0$ and $x\le2y$. Then $0\le x-y\le y$, and the grid argument in step 2.1, applied to $x$ and $-y$, shows that $x-y$ is representable. Reversing the transformations proves all same-sign cases; zero gives only the trivial zero pair. [step 2.1, algebra]

4.1 For the ordered transform, if $A=0$ then $B=0$ and all outputs vanish. Otherwise oddness allows $A>0$. Since $0\le A+B\le2A$ and $2A$ is representable, monotonicity gives $0\le S\le2A$. If $B\ge-A/2$, it also gives $S\ge A/2$; step 3.1 then makes $S-A$ exact. If $B<-A/2$, the operands $A$ and $-B$ meet step 3.1, so $S=A+B$ exactly and $S-A=B$ is exact as well. Thus always $Z=S-A=B+\rho$, where $\rho=S-(A+B)$. Step 2.1 makes $-\rho$ representable, so $T=R(B-Z)=-\rho=A+B-S$ exactly. [step 1.1, step 2.1, step 3.1, algebra] ∎

