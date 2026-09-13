---
id: thm-ell-one-has-the-schur-property
kind: theorem
title: Real and complex ell one have the Schur property
status: published
origin: pipeline
deps: [def-schur-property, def-weak-convergence-of-nets-and-sequences, def-c-zero-and-ell-infinity, lem-finite-truncations-are-dense-in-c0-and-ell-one, thm-reals-cauchy-complete, thm-complex-plane-is-complete, thm-nonnegative-series-bounded-partial-sums, thm-well-ordering-principle, thm-recursion, lem-index-map-grows]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "Reduce to a weakly null sequence. If its norms do not tend to zero, use least admissible indices and least finite cutoffs to form disjoint gliding-hump blocks. A single bounded sign or conjugate-phase sequence has a uniformly large pairing with every chosen vector, contradicting weak nullity."
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis (2017)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Example following Theorem 4.30, printed pp. 128–129"
---

## Statement

Both $\ell^1(\mathbb R)$ and $\ell^1(\mathbb C)$ have the Schur property:
every weakly convergent sequence in either space converges in the
$\ell^1$ norm.

## Facts & Assumptions

**Given:** $\mathbb K\in\{\mathbb R,\mathbb C\}$ and a sequence $a^{(n)}\rightharpoonup a$ in $\ell^1(\mathbb K)$, with coordinates indexed by $\mathbb N=\{0,1,\ldots\}$.

[F1] The Schur property is the implication from weak convergence to norm convergence, equivalently the same implication for weakly null sequences ([[def-schur-property]]).  Weak convergence is convergence under every bounded scalar-linear functional ([[def-weak-convergence-of-nets-and-sequences]]).

[F2] By the definitions of $\ell^\infty$ and $\ell^1$
([[def-c-zero-and-ell-infinity]], [[lem-finite-truncations-are-dense-in-c0-and-ell-one]]),
for either scalar field, if $b\in\ell^\infty(\mathbb K)$ and
$c\in\ell^1(\mathbb K)$, then

$$\sum_k|c_kb_k|\le\|b\|_\infty\|c\|_1.$$

Thus the absolutely convergent series $h_b(c)=\sum_kc_kb_k$ defines a bounded
scalar-linear functional, with no conjugation in the complex pairing.
Coordinate evaluation is the special case $b=e_k$
([[def-c-zero-and-ell-infinity]], [[lem-finite-truncations-are-dense-in-c0-and-ell-one]]).

[F3] If $c\in\ell^1(\mathbb K)$ and $P_Nc$ retains coordinates $0,\ldots,N$, then $\sum_{k>N}|c_k|=\|c-P_Nc\|_1\to0$ ([[lem-finite-truncations-are-dense-in-c0-and-ell-one]]).

[F4] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]), and a deterministic successor rule can be iterated along $\mathbb N$ ([[thm-recursion]]).

[F5] A strictly increasing index map satisfies $n_j\ge j$ ([[lem-index-map-grows]]).

[F6] Real and complex scalar Cauchy sequences converge
([[thm-reals-cauchy-complete]], [[thm-complex-plane-is-complete]]), and a
nonnegative real series converges exactly when its partial sums are bounded
above ([[thm-nonnegative-series-bounded-partial-sums]]).

## Proof

1.1 First verify the Banach-space condition. Let $(c^{(m)})$ be Cauchy in $\ell^1(\mathbb K)$. Each coordinate sequence is Cauchy because $|c_k^{(m)}-c_k^{(r)}|\le\|c^{(m)}-c^{(r)}\|_1$; let $c_k$ be its scalar limit by [F6]. Given $\eta>0$, take $M$ such that $\|c^{(m)}-c^{(r)}\|_1<\eta/2$ for $m,r\ge M$. For fixed $m\ge M$ and $N$, passage to the limit in the finite sum gives $\sum_{k=0}^N|c_k-c_k^{(m)}|\le\eta/2$. Hence [F6] gives $\sum_k|c_k-c_k^{(m)}|\le\eta/2$, so $c-c^{(m)}\in\ell^1$ and $\|c-c^{(m)}\|_1<\eta$. In particular $c=(c-c^{(M)})+c^{(M)}\in\ell^1$. Thus both scalar versions of $\ell^1$ are complete and hence Banach. [F3, F6, algebra]

2.1 Put $u^{(n)}=a^{(n)}-a$.  For every $f\in(\ell^1(\mathbb K))^*$, $f(u^{(n)})=f(a^{(n)})-f(a)\to0$, so $(u^{(n)})$ is weakly null.  By [F1] and step 1.1 it is enough to prove $\|u^{(n)}\|_1\to0$. [given, F1, step 1.1]

3.1 Suppose otherwise.  Negating the definition of convergence supplies an $\varepsilon>0$ such that $S:=\{n\in\mathbb N:\|u^{(n)}\|_1\ge\varepsilon\}$ is cofinal in $\mathbb N$: for every $N$ it contains an $n\ge N$.  In particular $S$ is nonempty. [step 2.1, assume-contra]

4.1 We recursively define strictly increasing indices $n_0<n_1<\cdots$ and strictly increasing finite cutoffs $N_0<N_1<\cdots$.  Let $n_0$ be the least element of $S$, and let $N_0$ be the least $N$ for which $\sum_{k>N}|u^{(n_0)}_k|<\varepsilon/8$; the latter set is nonempty by [F3].  Given $(n_j,N_j)$, coordinate evaluation is a bounded functional by [F2], so $u^{(n)}_k\to0$ for each $k\le N_j$.  Because this head is finite, eventually $\sum_{k=0}^{N_j}|u^{(n)}_k|<\varepsilon/8$.  The cofinal set $S$ therefore contains an $n>n_j$ satisfying this inequality.  Take the least such $n$ as $n_{j+1}$, then take the least $N>N_j$ with $\sum_{k>N}|u^{(n_{j+1})}_k|<\varepsilon/8$, again using [F3].  Each least value is unique by [F4].  On the set of pairs $(n,N)$ with $n\in S$ and $\sum_{k>N}|u^{(n)}_k|<\varepsilon/8$, these rules therefore define a total deterministic successor function; [F4] iterates it from $(n_0,N_0)$ and assembles the entire sequence without a choice axiom. [F2, F3, F4, step 3.1]

5.1 Define disjoint finite blocks $I_0=\{0,\ldots,N_0\}$ and $I_j=\{N_{j-1}+1,\ldots,N_j\}$ for $j\ge1$.  For $j\ge1$, the construction and $n_j\in S$ give $\sum_{k\in I_j}|u^{(n_j)}_k|\ge \|u^{(n_j)}\|_1-\sum_{k=0}^{N_{j-1}}|u^{(n_j)}_k|-\sum_{k>N_j}|u^{(n_j)}_k|>3\varepsilon/4$.  For $j=0$ there is no old head, so the same block sum is greater than $7\varepsilon/8$. [step 3.1, step 4.1, algebra]

6.1 Define one scalar sequence $b=(b_k)$ blockwise.  If $k\in I_j$ and $u^{(n_j)}_k\ne0$, put $b_k=\operatorname{sgn}(u^{(n_j)}_k)$ when $\mathbb K=\mathbb R$, and put $b_k=\overline{u^{(n_j)}_k}/|u^{(n_j)}_k|$ when $\mathbb K=\mathbb C$; put $b_k=0$ when that coordinate is zero.  Because $(N_j)$ is strictly increasing, [F5] gives $N_j\ge j$; hence every natural $k$ lies in exactly one of the disjoint blocks.  Thus $|b_k|\le1$, so $b\in\ell^\infty(\mathbb K)$, and the no-conjugation pairing from [F2] satisfies $u^{(n_j)}_kb_k=|u^{(n_j)}_k|$ on $I_j$ in both scalar fields. [F2, F5, step 5.1, construct]

7.1 Let $h_b$ be the bounded functional supplied by [F2].  For $j\ge1$, the triangle inequality, step 5.1, and the head and tail estimates in step 4.1 give $|h_b(u^{(n_j)})|\ge\sum_{k\in I_j}|u^{(n_j)}_k|-\sum_{k=0}^{N_{j-1}}|u^{(n_j)}_k|-\sum_{k>N_j}|u^{(n_j)}_k|>\varepsilon/2$.  For $j=0$, the block exceeds $7\varepsilon/8$ and the only complementary tail is below $\varepsilon/8$, so the stronger bound $|h_b(u^{(n_0)})|>3\varepsilon/4$ holds. [F2, step 4.1, step 5.1, step 6.1]

8.1 On the other hand, weak nullity in step 2.1 gives $h_b(u^{(n)})\to0$.  The indices $(n_j)$ are strictly increasing, and [F5] gives $n_j\ge j$, so the scalar subsequence $h_b(u^{(n_j)})$ also tends to zero.  This contradicts its uniform lower bound in step 7.1.  Therefore $\|u^{(n)}\|_1\to0$, hence $\|a^{(n)}-a\|_1\to0$; [F1] and the completeness proved in step 1.1 establish the Schur property over both $\mathbb R$ and $\mathbb C$.  The construction used only least natural numbers, scalar completeness and recursion, not Countable Choice or any stronger choice principle. [F1, F5, step 1.1, step 2.1, step 7.1, discharge-contradiction: step 3.1] ∎
