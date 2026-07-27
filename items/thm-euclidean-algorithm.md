---
id: thm-euclidean-algorithm
kind: theorem
title: "The Euclidean algorithm: for $a \\in \\mathbb{Z}$ and $b > 0$ the remainder descent from $(a,b)$ terminates, and the last nonzero remainder is $\\gcd(a,b)$"
status: draft
origin: session
deps: [lem-gcd-euclidean-step, def-common-divisor-and-gcd, lem-gcd-basic-values, thm-division-algorithm-in-z, thm-recursion, thm-induction-principle, thm-well-ordering-principle, def-natural-numbers, def-nat-order, lem-nat-discrete, lem-nat-trichotomy, lem-nat-nonzero-is-successor, lem-nat-embeds-int, def-int-abs, lem-int-abs-properties, thm-int-ordered-ring, def-int-order, thm-int-comm-ring, def-int-operations, def-integers]
justified_by: []
forward_refs: [ex-euclidean-algorithm-on-consecutive-fibonacci-numbers]
aliases: []
landmark: true
short: "Euclidean algorithm"
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Euclidean algorithm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_algorithm"
pipeline_run: null
---

## Statement

Let $a \in \mathbb{Z}$ and $b > 0$. Define $\Phi : \mathbb{Z} \times \mathbb{Z} \to \mathbb{Z} \times \mathbb{Z}$ by

$$\Phi(u,v) \;=\; \begin{cases} (v,\; u - qv) & \text{if } v > 0, \\ (u,v) & \text{if } v \le 0, \end{cases}$$

where in the first clause $q$ is the unique quotient of $u$ by $v$ given by
[[thm-division-algorithm-in-z]], so that $u - qv$ is the remainder and
$0 \le u - qv < v$.

Let $R : \mathbb{N} \to \mathbb{Z} \times \mathbb{Z}$ be the unique function
with $R(0) = (a,b)$ and $R(\sigma(k)) = \Phi(R(k))$ supplied by the recursion
theorem ([[thm-recursion]]). Write $R(k) = (a_k, b_k)$; the sequence
$b_0, b_1, b_2, \dots$ is the **remainder descent** from $(a,b)$.

Then:

1. $b_k \ge 0$ for every $k$, and $b_{\sigma(k)} < b_k$ whenever $b_k > 0$;
2. $\gcd(a_k, b_k) = \gcd(a,b)$ for every $k$
   ([[def-common-divisor-and-gcd]]);
3. there is a least $N \in \mathbb{N}$ with $b_N = 0$, and $N \ne 0$; writing
   $N = \sigma(M)$, the value $b_M$ is the **last nonzero remainder**, and
   $b_M > 0$;
4. $a_N = b_M = \gcd(a,b)$.

So the descent terminates, and the last nonzero remainder is $\gcd(a,b)$.

## Facts & Assumptions

**Given:** $a \in \mathbb{Z}$, $b > 0$, the map $\Phi$ and the sequence $R(k) = (a_k,b_k)$ described above, and the embedding $\iota : \mathbb{N} \to \mathbb{Z}$, $\iota(k) = [(k,0)]$, of [[lem-nat-embeds-int]].

[L1] $\mathbb{Z}$ is a commutative ring; its order is total, antisymmetric and transitive, and is compatible with addition; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-comm-ring]], [[def-int-operations]], [[thm-int-ordered-ring]], [[def-int-order]], [[def-integers]]).

[L2] For $u \in \mathbb{Z}$ and $v > 0$ there is exactly one pair $(q,r)$ of integers with $u = qv + r$ and $0 \le r < v$ ([[thm-division-algorithm-in-z]]).

[L3] For a set $A$, an $\alpha \in A$ and a function $f : A \to A$ there is exactly one $g : \mathbb{N} \to A$ with $g(0) = \alpha$ and $g(\sigma(k)) = f(g(k))$ ([[thm-recursion]]).

[L4] Induction on $\mathbb{N}$: a property holding at $0$ and inherited by successors holds everywhere ([[thm-induction-principle]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]], [[def-nat-order]], [[def-natural-numbers]]).

[L6] $\iota$ is injective, preserves addition, multiplication and order, and its image is exactly the nonnegative integers ([[lem-nat-embeds-int]]).

[L7] On $\mathbb{N}$: exactly one of $m < n$, $m = n$, $n < m$ holds ([[lem-nat-trichotomy]]); $m < n$ if and only if $\sigma(m) \le n$ ([[lem-nat-discrete]]); and every $n \ne 0$ is a successor ([[lem-nat-nonzero-is-successor]]).

[L8] If $u = qv + r$ then $\gcd(u,v) = \gcd(v,r)$ ([[lem-gcd-euclidean-step]]).

[L9] $\gcd(u,0) = |u|$, and $|u| = u$ when $u \ge 0$ ([[lem-gcd-basic-values]], [[def-int-abs]], [[lem-int-abs-properties]]).

## Proof

**Proof technique:** induction.

1.1 $\Phi$ is a well-defined function. For $v > 0$ the pair $(q,r)$ with $u = qv + r$ and $0 \le r < v$ is unique by [L2], so $q$ and $r = u - qv$ depend only on $(u,v)$; for $v \le 0$ the value is $(u,v)$; and the two clauses are exhaustive and exclusive by totality. Hence [L3] applies with $A = \mathbb{Z} \times \mathbb{Z}$, $\alpha = (a,b)$ and $f = \Phi$, giving the sequence $R$. [L1, L2, L3, construct]

1.2 Base case of the induction, at $k = 0$: $b_0 = b > 0$, so $b_0 \ge 0$; and $\gcd(a_0,b_0) = \gcd(a,b)$ because $(a_0,b_0) = (a,b)$. [base, given, L1]

1.3 Induction hypothesis: fix $k$ and assume $b_k \ge 0$ and $\gcd(a_k,b_k) = \gcd(a,b)$. [ih]

2.1 Inductive step. If $b_k > 0$, then by [L2] write $a_k = q b_k + r$ with $0 \le r < b_k$; by definition $R(\sigma(k)) = \Phi(a_k,b_k) = (b_k, r)$, so $b_{\sigma(k)} = r \ge 0$ and $b_{\sigma(k)} = r < b_k$, while $\gcd(a_{\sigma(k)}, b_{\sigma(k)}) = \gcd(b_k, r) = \gcd(a_k,b_k) = \gcd(a,b)$ by [L8]. If instead $b_k = 0$, then $b_k \le 0$, so $R(\sigma(k)) = R(k)$ and both properties are inherited unchanged. Since $b_k \ge 0$, these two cases are exhaustive. [step 1.3, L1, L2, L8]

3.1 By induction, $b_k \ge 0$ and $\gcd(a_k,b_k) = \gcd(a,b)$ for every $k \in \mathbb{N}$; and step 2.1 also shows $b_{\sigma(k)} < b_k$ whenever $b_k > 0$. This is claim 1 and claim 2. [step 1.2, step 2.1, L4]

4.1 Let $U := \{\, n \in \mathbb{N} : \iota(n) = b_k \text{ for some } k \in \mathbb{N} \,\}$. Every $b_k$ is nonnegative, hence lies in the image of $\iota$, so $U$ is nonempty; let $n_0$ be its least element and fix $k_0$ with $b_{k_0} = \iota(n_0)$. [step 3.1, L5, L6, choose]

5.1 $b_{k_0} = 0$. Otherwise $b_{k_0} > 0$, so $0 \le b_{\sigma(k_0)} < b_{k_0}$ by step 3.1; writing $b_{\sigma(k_0)} = \iota(n_1)$ with $n_1 \in U$, we get $\iota(n_1) < \iota(n_0)$, and hence $n_1 < n_0$, since otherwise $n_0 \le n_1$ by trichotomy and so $\iota(n_0) \le \iota(n_1)$, contradicting antisymmetry. That contradicts the minimality of $n_0$. [step 3.1, step 4.1, L1, L6, L7]

6.1 So $\{\, k \in \mathbb{N} : b_k = 0 \,\}$ is nonempty; let $N$ be its least element. $N \ne 0$, since $b_0 = b > 0$. Hence $N = \sigma(M)$ for some $M \in \mathbb{N}$, and $M < N$ because $M < \sigma(M)$. [step 5.1, given, L5, L7]

7.1 $b_M > 0$: indeed $b_M \ge 0$ by step 3.1, and $b_M \ne 0$ because $M < N$ and $N$ is the least index with vanishing $b$. [step 3.1, step 6.1]

8.1 Since $b_M > 0$, the definition gives $R(N) = R(\sigma(M)) = \Phi(a_M,b_M) = (b_M,\; a_M - q b_M)$, so $a_N = b_M$ and $b_N = a_M - q b_M$; and $b_N = 0$ by the choice of $N$. [step 6.1, step 7.1, L2]

9.1 Therefore $\gcd(a,b) = \gcd(a_N, b_N) = \gcd(a_N, 0) = |a_N| = a_N = b_M$, the last equality because $a_N = b_M > 0$. So the descent terminates at index $N$ and the last nonzero remainder $b_M$ equals $\gcd(a,b)$, which is claims 3 and 4. [step 3.1, step 7.1, step 8.1, L9, discharge-induction] ∎

## Remarks

- **Termination is not an extra appeal to well-ordering about $\mathbb{Z}$.** It
  is the clause $0 \le r < v$ of [[thm-division-algorithm-in-z]], which makes the
  second coordinates a strictly decreasing sequence of nonnegative integers;
  well-ordering is then applied to their preimages in $\mathbb{N}$, where it is
  available.

- **The theorem is stated for $b > 0$ only**, matching
  [[thm-division-algorithm-in-z]]. For $b < 0$ one may run the descent from
  $(a,|b|)$ instead: $\gcd(a,b) = \gcd(a,|b|)$ by [[lem-gcd-basic-values]], so
  nothing is lost. That reduction is recorded here rather than built into the
  statement, so that the recursion above uses the published division algorithm
  exactly as stated.

- **No claim is made about how many divisions the descent takes.** The count
  depends on the pair; the companion page works out one family where it is
  exactly known ([[ex-euclidean-algorithm-on-consecutive-fibonacci-numbers]]),
  and no worst-case bound over all inputs is proved anywhere here.
