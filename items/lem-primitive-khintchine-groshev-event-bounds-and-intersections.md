---
id: lem-primitive-khintchine-groshev-event-bounds-and-intersections
kind: lemma
title: "Mass and intersection bounds for primitive Khintchine–Groshev events"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - def-gcd-of-finite-integer-tuple
  - def-primitive-linear-form-approximation-condition
  - def-number-theoretic-mobius-function
  - def-probability-measure
  - thm-fundamental-theorem-of-arithmetic
  - lem-khintchine-groshev-torus-event-measure-and-independence
  - lem-parallel-integer-vectors-share-a-primitive-direction
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, §§2–3"
      url: "https://arxiv.org/pdf/0811.0809v3"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$, let $q\in\mathbb Z^n\setminus\{0\}$, and let $0\le\delta<1/2$. In $[0,1)^{n\times m}$ define

$$B(q,p,\delta):=\{X:\|qX+p\|_\infty<\delta\},\qquad B(q,\delta):=\bigcup_{p\in\mathbb Z^m}B(q,p,\delta),$$

and

$$B'(q,\delta):=\bigcup_{\substack{p\in\mathbb Z^m\\\gcd(q_1,\ldots,q_n,p_1,\ldots,p_m)=1}}B(q,p,\delta).$$

Write $d=\gcd(q_1,\ldots,q_n)$ and interpret a product over no primes as $1$. Then

$$|B'(q,\delta)|=(2\delta)^m\prod_{\ell\mid d,\ \ell\text{ prime}}(1-\ell^{-m}).$$

For any nonzero $q_1,q_2\in\mathbb Z^n$ with $q_2\ne q_1$ and $q_2\ne-q_1$, and any $0\le\delta_1,\delta_2<1/2$, there is the uniform bound

$$|B'(q_1,\delta_1)\cap B'(q_2,\delta_2)|\le 24^m(\delta_1\delta_2)^m.$$

## Statement references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited*, §§2–3](https://arxiv.org/pdf/0811.0809v3)

## Facts & Assumptions

**Given:** Countable Choice, the matrix cube, nonzero integer rows, and radii in $[0,1/2)$.

[A1] Countable Choice supplies the countably additive Lebesgue measures used on the unit cubes. ([[def-countable-choice]])

[F1] The finite-tuple gcd is a nonnegative common divisor of the tuple and is divisible by every common divisor. ([[def-gcd-of-finite-integer-tuple]])

[F2] The Möbius value is $0$ on nonsquarefree integers and is $(-1)^s$ on a product of $s$ distinct primes; unique prime factorization lists the finite prime support. ([[def-number-theoretic-mobius-function]], [[thm-fundamental-theorem-of-arithmetic]])

[F3] The event $B(q,\delta)$ is the preimage of the max-norm torus box of radius $\delta$ under $X\mapsto[qX]$, so it has measure $(2\delta)^m$; two such events from linearly independent rows are independent. The same preimage formula holds for finite unions of axis-parallel boxes. ([[lem-khintchine-groshev-torus-event-measure-and-independence]])

[F4] Parallel nonzero integer rows have a common primitive integer direction $u$ and integer coefficients; that direction has integer coordinates $c_j$ with $\sum c_ju_j=1$. ([[lem-parallel-integer-vectors-share-a-primitive-direction]])

[F5] Lebesgue measure on a probability space is finitely subadditive. ([[def-probability-measure]])

## Proof




1.1 For fixed $q$ and $p$, $B(q,p,\delta)$ is a product of coordinate strips. If $p\ne p'$, some coordinate differs by a nonzero integer, and the two strict errors cannot both be below $\delta<1/2$; hence the sets $B(q,p,\delta)$ are pairwise disjoint. Put $d=\gcd(q_1,\ldots,q_n)$. For each positive divisor $\ell\mid d$, the disjoint union over $p\in\ell\mathbb Z^m$ satisfies $\displaystyle \bigcup_{p\in\ell\mathbb Z^m}B(q,p,\delta)=B(q/\ell,\delta/\ell),$ whose measure is $(2\delta/\ell)^m$ by [F3]. [given, A1, F1, F3, algebra]

1.2 If $q_1,q_2$ are linearly independent, then $B'(q_i,\delta_i)\subseteq B(q_i,\delta_i)$, and [F3] gives intersection measure at most $(2\delta_1)^m(2\delta_2)^m\le24^m(\delta_1\delta_2)^m$. [given, F3, algebra]

1.3 Now suppose $q_1,q_2$ are linearly dependent. By [F4], write $q_1=a u$, $q_2=b u$ with $u$ primitive and nonzero integers $a,b$. Replacing a row and its offset by their negatives leaves its event unchanged, so assume $a,b>0$; the excluded cases $q_2=\pm q_1$ are exactly $a=b$. The identity $\sum c_ju_j=1$ implies that an integer divides all coordinates of $a u$ and all coordinates of $p$ exactly when it divides $a$ and all coordinates of $p$. Thus the primitivity condition for $a u$ is precisely $\gcd(a,p_1,\ldots,p_m)=1$, and likewise for $b u$. If a representative $z$ of a torus point is replaced by $z+v$ with $v\in\mathbb Z^m$, replacing $p$ by $p-av$ preserves both the inequality and this gcd condition; hence the scalar event is well defined on $\mathbb T^m$. The events are consequently preimages under $X\mapsto[uX]$ of the scalar events $B'_1(a,\delta_1)$ and $B'_1(b,\delta_2)$. These scalar events are finite unions of axis-parallel boxes in $\mathbb T^m$; [F3] shows their intersection measure is unchanged under this preimage. [given, F3, F4, algebra]

2.1 For any positive integer $g$, [F2] gives $\sum_{\ell\mid g}\mu(\ell)=1$ if $g=1$ and $0$ otherwise: only squarefree divisors contribute, and their signs sum to $\prod_{p\mid g}(1-1)$. Apply this with $g=\gcd(q_1,\ldots,q_n,p_1,\ldots,p_m)$. Every contributing $\ell$ divides $d$, and the condition $\ell\mid p_j$ for all $j$ is exactly the union counted in step 1.1. Finite summation and disjointness therefore give $\displaystyle |B'(q,\delta)|=\sum_{\ell\mid d}\mu(\ell)(2\delta/\ell)^m=(2\delta)^m\prod_{p\mid d}(1-p^{-m}),$ where the final equality expands the finite product over prime divisors of $d$. [given, step 1.1, F1, F2, algebra]

2.2 Put $d=\gcd(a,b)$, $a=dA$, $b=dB$, so $A,B$ are coprime positive integers with $A\ne B$. For a scalar event with denominator $a$, any box meeting $[0,1)^m$ has each offset coordinate in $\{-a,-a+1,\ldots,0\}$: the inequality $|ax_j+p_j|<\delta_1<1/2$ with $0\le x_j<1$ gives $-a-\delta_1<p_j<\delta_1$, which for integer $p_j$ implies $-a\le p_j\le0$. The same holds for denominator $b$. If a pair of boxes with offsets $p_1,p_2\in\mathbb Z^m$ meets, then in each coordinate $\displaystyle L_j:=b p_{1j}-a p_{2j}\in d\mathbb Z,\qquad |L_j|<\Delta:=b\delta_1+a\delta_2.$ Set $R:=\Delta/d=B\delta_1+A\delta_2$. For a fixed coordinate and a fixed possible $L_j$, the equation $B p_{1j}-A p_{2j}=L_j/d$ has at most $d+1$ solutions with $-a\le p_{1j}\le0$, since all its solutions differ by $(A,B)$ and the first coordinate ranges over an interval of length $dA$. There are at most $1+2R$ possible multiples $L_j\in d\mathbb Z$ with $|L_j|<\Delta$. [given, step 1.3, algebra, algebra]

3.1 For each offset pair in one coordinate, the interval intersection has length at most $2\min(\delta_1/a,\delta_2/b)=(2/d)\min(\delta_1/A,\delta_2/B)$. Therefore the sum of these intersection lengths over all possible offset pairs in that coordinate is at most $\displaystyle 4(1+2R)\min(\delta_1/A,\delta_2/B).$ If $R\le1$, every possible $L_j$ is zero. Then coprimality of $A,B$ forces $A\mid p_{1j}$ and $B\mid p_{2j}$ in every coordinate. Since $\gcd(a,p_1)=\gcd(b,p_2)=1$, this forces $A=B=1$, contrary to $A\ne B$; hence the intersection is empty. If $R>1$ and $\delta_1/A\le\delta_2/B$, then $B\delta_1\le A\delta_2$, so $R\le2A\delta_2$ and $R\min(\delta_1/A,\delta_2/B)\le2\delta_1\delta_2$. If $\delta_2/B\le\delta_1/A$, the symmetric estimate gives the same bound. Thus for $R>1$ the coordinate sum is at most $24\delta_1\delta_2$. [given, step 2.2, algebra]

4.1 The offset constraints and interval overlaps separate by coordinates. If the primitivity restrictions on offsets are dropped, the sum of the volumes of all pairwise box intersections factors as the product of the $m$ coordinate sums, and so is at most $(24\delta_1\delta_2)^m$ by step 3.1. Restoring primitivity only removes boxes. Finite subadditivity [F5] bounds the measure of their union by this sum, which proves the scalar intersection bound in step 1.3 and hence the claimed parallel-row bound. [step 1.3, step 3.1, F5, algebra] ∎
