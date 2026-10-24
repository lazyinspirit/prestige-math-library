---
id: ex-euclidean-algorithm-on-consecutive-fibonacci-numbers
kind: example
title: "Consecutive Fibonacci numbers are coprime, and for every $m \\in \\mathbb{N}$ the Euclidean algorithm on $(F_{m+3}, F_{m+2})$ takes exactly $m+1$ divisions, with quotient $1$ in the first $m$ of them and quotient $2$ in the last"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-recursion, thm-induction-principle, def-natural-numbers, def-nat-addition, def-nat-order, lem-nat-discrete, thm-euclidean-algorithm, lem-gcd-euclidean-step, def-common-divisor-and-gcd, lem-gcd-basic-values, def-coprime, thm-division-algorithm-in-z, lem-nat-embeds-int, def-int-abs, lem-int-abs-properties, thm-int-ordered-ring, def-int-order, thm-int-comm-ring, def-int-operations, def-integers]
justified_by: []
aliases: []
landmark: false
short: "Euclid on Fibonacci pairs"
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Fibonacci sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fibonacci_sequence"
    - title: "Euclidean algorithm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_algorithm"
pipeline_run: null
---

## Example

**The sequence.** Write $k+1$ for $\sigma(k)$ and $k+2$ for $\sigma(\sigma(k))$
([[def-nat-addition]]). By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{Z} \times \mathbb{Z}$, the element $(0,1)$ and the function
$(u,v) \mapsto (v,\, u+v)$, there is exactly one $G : \mathbb{N} \to \mathbb{Z} \times \mathbb{Z}$
with $G(0) = (0,1)$ and $G(k+1) = (v,\, u+v)$ whenever $G(k) = (u,v)$. Define
$F_k$ to be the first coordinate of $G(k)$. Then $G(k) = (F_k, F_{k+1})$ for
every $k$, so

$$F_0 = 0, \qquad F_1 = 1, \qquad F_{k+2} = F_{k+1} + F_k ,$$

and the sequence begins $0, 1, 1, 2, 3, 5, 8, 13$. **The indexing starts at
$F_0 = 0$**, and the statements below depend on that choice.

**Coprimality.** For every $k \in \mathbb{N}$,

$$\gcd(F_{k+1},\, F_k) \;=\; 1 ,$$

so consecutive Fibonacci numbers are coprime ([[def-coprime]]).

**The division count.** For $m \in \mathbb{N}$ let $R$ be the remainder descent
of [[thm-euclidean-algorithm]] from $(F_{m+3},\, F_{m+2})$, which is legitimate
because $F_{m+2} > 0$, and for $k$ below the terminating index $N$ let $q_k$ be
the quotient used at step $k$, so that $a_k = q_k b_k + b_{k+1}$ with
$0 \le b_{k+1} < b_k$. Then

$$N = m+1, \qquad q_k = 1 \ \text{ for } k < m, \qquad q_m = 2 .$$

Equivalently, on $(F_{n+2}, F_{n+1})$ with $n = m+1 \ge 1$ the algorithm performs
exactly $n$ divisions. At $m = 0$ the pair is $(F_3,F_2) = (2,1)$, there is a
single division $2 = 2 \cdot 1 + 0$, and the list of quotients equal to $1$ is
empty.

**What is not claimed.** Nothing here says these pairs are the *worst* case for
their size; that is Lamé's theorem, and no bound on the number of divisions in
terms of the size of the inputs is available at this point in the reading order.

## Facts & Assumptions

**Given:** The sequence $F : \mathbb{N} \to \mathbb{Z}$ described above, with $F_0 = 0$, $F_1 = 1$ and $F_{k+2} = F_{k+1} + F_k$.

[L1] $\mathbb{Z}$ is a commutative ring; its order is total, antisymmetric and transitive and is compatible with addition; positives are closed under multiplication; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-comm-ring]], [[def-int-operations]], [[thm-int-ordered-ring]], [[def-int-order]], [[def-integers]]).

[L2] Induction on $\mathbb{N}$ ([[thm-induction-principle]]); $\sigma(k) = k+1$ ([[def-nat-addition]], [[def-natural-numbers]]); $m < n$ iff $\sigma(m) \le n$ on $\mathbb{N}$ ([[lem-nat-discrete]], [[def-nat-order]]).

[L3] For a set $X$, an $\alpha \in X$ and $f : X \to X$ there is exactly one $g : \mathbb{N} \to X$ with $g(0) = \alpha$ and $g(\sigma(k)) = f(g(k))$ ([[thm-recursion]]).

[L4] $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, preserves order, and has image the nonnegative integers ([[lem-nat-embeds-int]]); hence $0 < x$ in $\mathbb{Z}$ implies $1 \le x$, since $x = \iota(k)$ with $k \ne 0$, so $\sigma(0) \le k$ by the discreteness of [L2] and order preservation gives $1 = \iota(1) \le \iota(k) = x$ ([[lem-nat-discrete]]).

[L5] For $u \in \mathbb{Z}$ and $v > 0$ there is exactly one pair $(q,r)$ with $u = qv + r$ and $0 \le r < v$ ([[thm-division-algorithm-in-z]]).

[L6] If $u = qv + r$ then $\gcd(u,v) = \gcd(v,r)$ ([[lem-gcd-euclidean-step]]).

[L7] $\gcd(u,0) = |u|$ and $|u| = u$ for $u \ge 0$ ([[lem-gcd-basic-values]], [[def-int-abs]], [[lem-int-abs-properties]], [[def-common-divisor-and-gcd]]).

[L8] The descent of [[thm-euclidean-algorithm]] from $(a,b)$ with $b > 0$ satisfies $R(0) = (a,b)$ and $R(k+1) = (b_k,\, a_k - q_k b_k)$ whenever $b_k > 0$, with $q_k$ the quotient of $a_k$ by $b_k$; it is the unique such sequence, and $N$ is the least index with $b_N = 0$.

[L9] $u$ and $v$ are coprime exactly when $\gcd(u,v) = 1$ ([[def-coprime]]).

## Verification

**Proof technique:** induction.

1.1 $G(k) = (F_k, F_{k+1})$ for every $k$, by induction: it holds at $k = 0$ since $G(0) = (0,1) = (F_0, F_1)$, and if $G(k) = (F_k,F_{k+1})$ then $G(k+1) = (F_{k+1},\, F_k + F_{k+1})$, whose first coordinate is $F_{k+1}$, so the second is $F_{k+2}$ by definition of $F$ as the first coordinate one step later. Hence $F_{k+2} = F_{k+1} + F_k$. [L1, L2, L3]

1.2 Induction hypothesis: fix $m$ and assume that the descent from $(F_{m+3},F_{m+2})$ terminates at index $m+1$ with quotients $q_k = 1$ for $k < m$ and $q_m = 2$. [ih]

2.1 For every $k$: $F_k \ge 0$ and $F_{k+1} \ge 1$. By induction, at $k = 0$ this is $F_0 = 0 \ge 0$ and $F_1 = 1 \ge 1$; and if it holds at $k$ then $F_{k+1} \ge 1 \ge 0$ and $F_{k+2} = F_{k+1} + F_k \ge 1 + 0 = 1$, using compatibility of the order with addition. [step 1.1, L1, L2, L4]

2.2 Coprimality. By induction on $k$: at $k = 0$, $\gcd(F_1,F_0) = \gcd(1,0) = |1| = 1$ by [L7]. If $\gcd(F_{k+1},F_k) = 1$, then $F_{k+2} = 1 \cdot F_{k+1} + F_k$ and [L6] give $\gcd(F_{k+2},F_{k+1}) = \gcd(F_{k+1},F_k) = 1$. So $\gcd(F_{k+1},F_k) = 1$ for every $k$, and consecutive Fibonacci numbers are coprime. [step 1.1, L1, L2, L6, L7, L9]

2.3 Base case of the division count, $m = 0$. Here $F_2 = F_1 + F_0 = 1$ and $F_3 = F_2 + F_1 = 1 + 1 = 2$, so the descent starts at $(2,1)$ with $b_0 = 1 > 0$. Dividing, $2 = q \cdot 1 + r$ with $0 \le r < 1$ forces $r = 0$, since $0 < r$ would give $1 \le r$ by [L4]; hence $q = 2$ and $R(1) = (1,0)$. So $N = 1 = m+1$, the single quotient is $q_0 = 2$, and there is no index $k < m = 0$. [base, step 1.1, L1, L4, L5, L8]

3.1 For every $m$: $0 \le F_{m+1}$, $0 < F_{m+2}$ and $F_{m+2} < F_{m+3}$. The first two are step 2.1; and $F_{m+3} = F_{m+2} + F_{m+1}$ with $F_{m+1} \ge 1 > 0$ gives $F_{m+2} < F_{m+3}$. [step 1.1, step 2.1, L1]

4.1 Inductive step. Consider the descent $R'$ from $(F_{m+4}, F_{m+3})$; it is legitimate since $F_{m+3} > 0$ by step 3.1. Its first division is $F_{m+4} = 1 \cdot F_{m+3} + F_{m+2}$, and $0 \le F_{m+2} < F_{m+3}$ by step 3.1, so by the uniqueness in [L5] the quotient is $q'_0 = 1$ and $R'(1) = (F_{m+3}, F_{m+2})$. [step 1.1, step 3.1, L5, L8]

5.1 The shifted sequence $k \mapsto R'(k+1)$ starts at $(F_{m+3},F_{m+2})$ and obeys the same recursion as $R'$, hence, by the uniqueness in [L3], equals the descent from $(F_{m+3},F_{m+2})$. Therefore its terminating index is $m+1$ by step 1.2, so $R'$ terminates at index $1 + (m+1) = (m+1)+1$; and its quotients are $q'_0 = 1$ followed by the quotients of step 1.2, that is $1$ repeated $m+1$ times and then $2$. This is the claim at $m+1$. [step 1.2, step 4.1, L3, L8]

6.1 By induction the division count holds for every $m \in \mathbb{N}$: the descent from $(F_{m+3},F_{m+2})$ takes exactly $m+1$ divisions, with quotient $1$ in the first $m$ and quotient $2$ in the last; together with step 2.2 this is the whole example. [step 2.2, step 2.3, step 5.1, L2, discharge-induction] ∎

## Remarks

- **The last quotient is $2$, not $1$, and the reason is the repeated value $F_1 = F_2 = 1$.** The chain of quotient-$1$ divisions $F_{k+2} = 1 \cdot F_{k+1} + F_k$ is a valid division only while $F_k < F_{k+1}$, which fails exactly at $k = 1$. The descent therefore ends at the pair $(F_3,F_2) = (2,1)$ with the single division $2 = 2 \cdot 1 + 0$. A statement of the form "quotient $1$ at every step" is false for that reason, and the count would also be wrong at the first index if the sequence were indexed from $1$.

- **Coprimality does not need the division count**, and the count does not need coprimality; they are recorded together because both are read off the same identity $F_{k+2} = F_{k+1} + F_k$, once through [[lem-gcd-euclidean-step]] and once through [[thm-division-algorithm-in-z]].

- **No worst-case claim.** Lamé's theorem — that the Fibonacci pairs minimise the size of the inputs for a given number of divisions — is a genuinely different statement, and nothing above establishes or assumes it.
