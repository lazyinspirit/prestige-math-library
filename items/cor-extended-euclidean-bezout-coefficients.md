---
id: cor-extended-euclidean-bezout-coefficients
kind: corollary
title: "The extended Euclidean algorithm: the same descent produces integers $x, y$ with $ax + by = \\gcd(a,b)$, so Bézout coefficients are computed and not merely shown to exist"
status: published
origin: session
deps: [thm-euclidean-algorithm, def-common-divisor-and-gcd, thm-division-algorithm-in-z, thm-recursion, thm-induction-principle, def-natural-numbers, thm-int-comm-ring, def-int-operations, def-integers, thm-int-ordered-ring, def-int-order]
justified_by: []
forward_refs: [ex-bezout-coefficients-not-unique]
aliases: [cor-extended-euclidean-algorithm]
landmark: false
short: "computing Bézout coefficients"
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Extended Euclidean algorithm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm"
pipeline_run: null
---

## Statement

Let $a \in \mathbb{Z}$ and $b > 0$, and let $R(k) = (a_k,b_k)$ and $N$ be the
remainder descent and its terminating index from [[thm-euclidean-algorithm]].
Define $\Psi : \mathbb{Z}^{6} \to \mathbb{Z}^{6}$ by

$$\Psi(A,B,x,y,u,v) \;=\; \begin{cases} (B,\; A - qB,\; u,\; v,\; x - qu,\; y - qv) & \text{if } B > 0, \\ (A,B,x,y,u,v) & \text{if } B \le 0, \end{cases}$$

where in the first clause $q$ is the unique quotient of $A$ by $B$ given by
[[thm-division-algorithm-in-z]]. Let

$$S : \mathbb{N} \to \mathbb{Z}^{6}, \qquad S(0) = (a,\, b,\, 1,\, 0,\, 0,\, 1), \qquad S(\sigma(k)) = \Psi(S(k))$$

be the function supplied by the recursion theorem ([[thm-recursion]]), and write
$S(k) = (A_k, B_k, x_k, y_k, u_k, v_k)$. Then for every $k \in \mathbb{N}$

$$(A_k, B_k) = (a_k, b_k), \qquad A_k = a x_k + b y_k, \qquad B_k = a u_k + b v_k .$$

In particular, at the terminating index $N$,

$$a x_N + b y_N \;=\; A_N \;=\; a_N \;=\; \gcd(a,b) ,$$

so the descent that computes $\gcd(a,b)$ computes a pair of Bézout coefficients
alongside it.

## Facts & Assumptions

**Given:** $a \in \mathbb{Z}$, $b > 0$, the descent $R(k) = (a_k,b_k)$ and terminating index $N$ of [[thm-euclidean-algorithm]], and the map $\Psi$ and sequence $S(k) = (A_k,B_k,x_k,y_k,u_k,v_k)$ described above.

[L1] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x + 0 = x$, $x \cdot 1 = x$, $x \cdot 0 = 0$, multiplication distributes over addition, and every $x$ has an additive inverse; we write $u - v$ for $u + (-v)$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L2] For $A' \in \mathbb{Z}$ and $B' > 0$ there is exactly one pair $(q,r)$ of integers with $A' = qB' + r$ and $0 \le r < B'$ ([[thm-division-algorithm-in-z]]).

[L3] For a set $X$, an $\alpha \in X$ and $f : X \to X$ there is exactly one $g : \mathbb{N} \to X$ with $g(0) = \alpha$ and $g(\sigma(k)) = f(g(k))$ ([[thm-recursion]], [[def-natural-numbers]]).

[L4] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L5] The descent satisfies $R(0) = (a,b)$; $b_k \ge 0$ for every $k$; $R(\sigma(k)) = (b_k,\, a_k - q b_k)$ with $q$ the quotient of $a_k$ by $b_k$ when $b_k > 0$, and $R(\sigma(k)) = R(k)$ when $b_k = 0$; $N$ is the least index with $b_N = 0$; and $a_N = \gcd(a,b)$ ([[thm-euclidean-algorithm]], [[def-common-divisor-and-gcd]]).

[L6] The order on $\mathbb{Z}$ is total and antisymmetric; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

## Proof

**Proof technique:** induction.

1.1 $\Psi$ is a well-defined function: for $B > 0$ the quotient $q$ of $A$ by $B$ is unique by [L2], so the first clause depends only on the argument; the second clause is the identity; and the two conditions $B > 0$ and $B \le 0$ are exhaustive and exclusive by totality. So [L3] applies with $X = \mathbb{Z}^{6}$ and produces $S$. [L1, L2, L3, L6, construct]

1.2 Base case, $k = 0$: $(A_0,B_0) = (a,b) = (a_0,b_0)$; and $A_0 = a = a \cdot 1 + b \cdot 0 = a x_0 + b y_0$, $B_0 = b = a \cdot 0 + b \cdot 1 = a u_0 + b v_0$. [base, given, L1, L5]

1.3 Induction hypothesis: fix $k$ and assume $(A_k,B_k) = (a_k,b_k)$, $A_k = a x_k + b y_k$ and $B_k = a u_k + b v_k$. [ih]

2.1 Inductive step, case $b_k > 0$. Then $B_k = b_k > 0$, so both recursions take their first clause with the same divisor and the same dividend, hence with the same quotient $q$ by [L2]. Therefore $(A_{\sigma(k)}, B_{\sigma(k)}) = (B_k,\, A_k - qB_k) = (b_k,\, a_k - q b_k) = (a_{\sigma(k)}, b_{\sigma(k)})$. [step 1.3, L2, L5]

2.2 Inductive step, case $b_k = 0$. Then $B_k = b_k = 0$, so $B_k \le 0$ and $S(\sigma(k)) = S(k)$, while $R(\sigma(k)) = R(k)$; all three equalities are inherited unchanged. Since $b_k \ge 0$, the two cases are exhaustive. [step 1.3, L5, L6]

3.1 Back in the case $b_k > 0$ of step 2.1, the coefficients transport: $A_{\sigma(k)} = B_k = a u_k + b v_k = a x_{\sigma(k)} + b y_{\sigma(k)}$, since $(x_{\sigma(k)}, y_{\sigma(k)}) = (u_k,v_k)$; and $B_{\sigma(k)} = A_k - q B_k = (a x_k + b y_k) - q(a u_k + b v_k) = a(x_k - q u_k) + b(y_k - q v_k) = a u_{\sigma(k)} + b v_{\sigma(k)}$ by distributivity. [step 1.3, step 2.1, L1]

4.1 By induction the three equalities hold for every $k \in \mathbb{N}$. [step 1.2, step 2.1, step 3.1, step 2.2, L4]

5.1 At the terminating index $N$ this reads $a x_N + b y_N = A_N = a_N = \gcd(a,b)$, so $(x_N, y_N)$ is a pair of Bézout coefficients for $a$ and $b$, obtained from the descent itself. [step 4.1, L5, discharge-induction] ∎

## Remarks

- **What "computed" means here.** The coefficients are produced by a recursion
  over $\mathbb{N}$ whose every step is an application of the division algorithm
  and four ring operations; nothing in the argument appeals to the existence of a
  least element of a set. That is the difference from
  [[thm-bezout-identity]], where the coefficients come from a well-ordering
  argument and the proof gives no way to find them.

- **The Bézout pair produced is not the only one.** The companion page records
  the full family of solutions and a second pair for the same equation
  ([[ex-bezout-coefficients-not-unique]]).

- **Only the first four coordinates of $S$ are needed for the conclusion**; the
  last two are carried because the recursion for $(x,y)$ reads off the previous
  values of $(u,v)$, which is what makes the whole thing a single application of
  the recursion theorem instead of a mutual recursion.
