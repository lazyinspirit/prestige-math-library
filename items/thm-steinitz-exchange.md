---
id: thm-steinitz-exchange
kind: theorem
title: "The Steinitz exchange lemma: if $L \\subseteq V$ is linearly independent and $S \\subseteq V$ spans $V$ with $S$ finite of size $n$, then $L$ is finite with $|L| = m \\le n$, and there is $T \\subseteq S$ of size $n - m$ such that $L \\cup T$ spans $V$"
status: draft
origin: session
deps: [def-linear-independence, lem-independent-list-is-injective, lem-dependent-iff-a-vector-lies-in-the-span-of-the-others, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, lem-span-monotone-and-idempotent, def-linear-subspace, def-sum-of-linear-subspaces, def-monoid-finite-product, def-vector-space, def-field, lem-vector-space-elementary-consequences, def-natural-numbers, lem-nat-order-is-membership, def-nat-order, def-nat-addition, thm-induction-principle, lem-nat-add-successor-left, lem-nat-add-commutative, lem-nat-add-cancellative, lem-nat-nonzero-is-successor, lem-nat-discrete, thm-nat-linear-order, def-countable, def-equinumerous, def-injection-surjection-bijection, lem-pigeonhole]
justified_by: []
aliases: [thm-exchange-lemma, lem-steinitz]
landmark: true
short: "Steinitz exchange"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Steinitz exchange lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Steinitz_exchange_lemma"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). Let
$S \subseteq V$ span $V$ ([[def-linear-combination-and-span]]) with $S$ finite,
say $S \approx n$ for $n \in \mathbb{N}$ ([[def-countable]],
[[def-equinumerous]]), and let $L \subseteq V$ be linearly independent
([[def-linear-independence]]). Then:

1. $L$ is finite, and the unique natural number $m$ with $L \approx m$
   ([[lem-pigeonhole]], claim 3) satisfies $m \le n$;
2. writing $k$ for the unique natural number with $m + k = n$, there is
   $T \subseteq S$ with $T \approx k$ and
   $\operatorname{span}(L \cup T) = V$.

Sizes are compared through equinumerosity throughout; no cardinal number is used
or needed, and "$|X| = p$" below abbreviates $X \approx p$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, a spanning subset $S \subseteq V$ with $S \approx n$, and a linearly independent subset $L \subseteq V$.

[L1] $\operatorname{span}(T)$ is a linear subspace of $V$ containing $T$ and contained in every linear subspace of $V$ containing $T$; $T \subseteq T'$ implies $\operatorname{span}(T) \subseteq \operatorname{span}(T')$; and $\operatorname{span}(T)$ is exactly the set of linear combinations of finite lists into $T$ ([[def-linear-combination-and-span]], [[lem-span-monotone-and-idempotent]], [[lem-span-is-the-set-of-linear-combinations]], [[def-linear-subspace]]).

[L2] $\operatorname{span}(T)$ is already the set of $\sum_{i<p}\nu_i x_i$ with $x : p \to T$ **injective**; and $T$ is linearly dependent exactly when some $t \in T$ lies in $\operatorname{span}(T \setminus \{t\})$ ([[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]]).

[L3] Finite sums: $\sum_{i<0}u_i = 0_V$ and the successor recursion; (F1) an all-$0_V$ list sums to $0_V$; (F3) $\sum_{i<p}u_i = u_j + \sum_{i<p}u^{(j)}_i$ for $j < p$ ([[def-monoid-finite-product]], [[def-sum-of-linear-subspaces]]).

[L4] Deleting one index: for $k < \sigma(p)$ the map $\delta_k : p \to \sigma(p)$ is injective with image $\sigma(p) \setminus \{k\}$, and a list $u : \sigma(p) \to V$ with $u_k = 0_V$ satisfies $\sum_{j<\sigma(p)}u_j = \sum_{i<p}u_{\delta_k(i)}$; also every subset of a linearly independent subset of $V$ is linearly independent ([[lem-independent-list-is-injective]], claims 2 and 7).

[L5] $(V,+,0_V)$ is an abelian group; $0_F y = 0_V$; $1_F y = y$; (V4) $(\lambda\mu)y = \lambda(\mu y)$; a linear subspace is closed under $+$, under scalar multiplication and under additive inverses; and every $\lambda \ne 0_F$ in $F$ has an inverse ([[def-vector-space]], [[lem-vector-space-elementary-consequences]], [[def-field]], [[def-linear-subspace]]).

[L6] Naturals: $\sigma(p) = p \cup \{p\}$ with $p \notin p$; $m \le p \iff \exists k\ (m + k = p)$; $m + k = m + k'$ forces $k = k'$; $\sigma(m) + k = \sigma(m+k)$; addition is commutative with $0 + p = p$; $\le$ is a total order; every $p \ne 0$ is a successor; and $m < p \iff \sigma(m) \le p$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]], [[def-nat-order]], [[def-nat-addition]], [[lem-nat-add-cancellative]], [[lem-nat-add-successor-left]], [[lem-nat-add-commutative]], [[thm-nat-linear-order]], [[lem-nat-nonzero-is-successor]], [[lem-nat-discrete]]).

[L7] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L8] A finite set is equinumerous with exactly one natural number ([[lem-pigeonhole]], claim 3); $X \approx Y$ means a bijection exists; a composite of bijections is a bijection; an injection is a bijection onto its image ([[def-equinumerous]], [[def-injection-surjection-bijection]], [[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 Removing one element from a finite set. Let $X \approx \sigma(p)$ and $x \in X$; then $X \setminus \{x\} \approx p$. Take a bijection $g : \sigma(p) \to X$ and let $c$ be the unique index with $g(c) = x$. The map $\tau : \sigma(p) \to \sigma(p)$ with $\tau(c) = p$, $\tau(p) = c$ and $\tau(i) = i$ for $i \notin \{c,p\}$ is well defined, the clauses agreeing when $c = p$, and satisfies $\tau \circ \tau = \mathrm{id}$, so it is a bijection. Then $h := g \circ \tau$ is a bijection $\sigma(p) \to X$ with $h(p) = x$, and its restriction to $p$ is a bijection onto $X \setminus \{x\}$: it is injective; its values differ from $x$, since $h$ is injective and $h(p) = x$; and every $y \in X \setminus \{x\}$ is $h(i)$ for some $i \in \sigma(p)$ with $i \ne p$, that is $i < p$. [L6, L8]

1.2 Extending an injective list by one value. Let $A$ be a set, $f : p \to A$ injective and $y \in A \setminus f[p]$. Since $\sigma(p) = p \cup \{p\}$ and $p \notin p$, there is exactly one $f' : \sigma(p) \to A$ with $f'(i) = f(i)$ for $i < p$ and $f'(p) = y$, and $f'$ is injective because $f$ is and $y$ is not a value of $f$. [L6, L8]

1.3 The exchange step. Let $L' \subseteq V$ be linearly independent, $T \subseteq S$, $\operatorname{span}(L' \cup T) = V$, and $w \in V$ with $w \notin \operatorname{span}(L')$. Then there is $t \in T$ with $t \notin L'$ and $\operatorname{span}\bigl((L' \cup \{w\}) \cup (T \setminus \{t\})\bigr) = V$. Indeed $w \in \operatorname{span}(L' \cup T)$, so $w = \sum_{i<p}\nu_i x_i$ for some injective $x : p \to L' \cup T$ and $\nu : p \to F$. Some $i_0 < p$ has $x_{i_0} \notin L'$ and $\nu_{i_0} \ne 0_F$: otherwise $\nu_i = 0_F$ whenever $x_i \notin L'$, and then, if $L' = \varnothing$, every term $\nu_i x_i$ is $0_F x_i = 0_V$ and (F1) gives $w = 0_V \in \operatorname{span}(L')$, while if $L' \ne \varnothing$ we may fix $a \in L'$ and put $x'_i := x_i$ when $x_i \in L'$ and $x'_i := a$ otherwise, so that $\nu_i x'_i = \nu_i x_i$ for every $i$, both being $0_V$ in the second case, and $w = \sum_{i<p}\nu_i x'_i \in \operatorname{span}(L')$; either way $w \in \operatorname{span}(L')$, contrary to hypothesis. Put $t := x_{i_0}$, which lies in $T$ and not in $L'$, and put $U := (L' \cup \{w\}) \cup (T \setminus \{t\})$; since $t \notin L'$ we have $(L' \cup T) \setminus \{t\} = L' \cup (T \setminus \{t\}) \subseteq U$. Now (F3) at $i_0$ gives $w = \nu_{i_0}t + R$ with $R = \sum_{i<p}\nu'_i x_i$, where $\nu'_{i_0} := 0_F$ and $\nu'_i := \nu_i$ otherwise; the list $i \mapsto \nu'_i x_i$ has the value $0_V$ at $i_0$, so deleting that index expresses $R$ as a linear combination of the $x_i$ with $i \ne i_0$, all of which lie in $(L' \cup T)\setminus\{t\}$, whence $R \in \operatorname{span}(U)$. Since $w \in U \subseteq \operatorname{span}(U)$ and $\operatorname{span}(U)$ is a linear subspace, $\nu_{i_0}t = w + (-R) \in \operatorname{span}(U)$ and therefore $t = \nu_{i_0}^{-1}(\nu_{i_0}t) \in \operatorname{span}(U)$. Hence $\operatorname{span}(U)$ contains $L' \cup (T\setminus\{t\})$ together with $t$, that is all of $L' \cup T$, so it contains $\operatorname{span}(L' \cup T) = V$ by minimality of the span. [L1, L2, L3, L4, L5]

2.1 The exchange induction. For every $m \in \mathbb{N}$: if $L' \subseteq V$ is linearly independent with $L' \approx m$, then $m \le n$ and there is $T \subseteq S$ with $T \approx k$, where $k$ is the unique natural with $m + k = n$, and $\operatorname{span}(L' \cup T) = V$. By induction on $m$. At $m = 0$ we have $L' = \varnothing$, since $\varnothing$ is the only set equinumerous with $0$; take $T := S$, note $0 + n = n$ so $k = n$, and $\operatorname{span}(\varnothing \cup S) = \operatorname{span}(S) = V$; and $0 \le n$. Assume the statement at $m$ and let $L''$ be independent with $L'' \approx \sigma(m)$. Then $L'' \ne \varnothing$, so fix $w \in L''$ and put $L' := L'' \setminus \{w\}$, which is independent and, by step 1.1, satisfies $L' \approx m$. The inductive hypothesis gives $m \le n$, the unique $k$ with $m + k = n$, and $T \subseteq S$ with $T \approx k$ and $\operatorname{span}(L' \cup T) = V$. Moreover $w \notin \operatorname{span}(L')$: otherwise $w \in \operatorname{span}(L'' \setminus \{w\})$ would make $L''$ dependent. So step 1.3 supplies $t \in T$ with $t \notin L'$ and $\operatorname{span}(L'' \cup (T \setminus \{t\})) = V$, using $L' \cup \{w\} = L''$. Since $t \in T$ we have $k \ne 0$, say $k = \sigma(k')$, and step 1.1 gives $T \setminus \{t\} \approx k'$; finally $\sigma(m) + k' = \sigma(m + k') = m + \sigma(k') = m + k = n$, so $\sigma(m) \le n$ and $k'$ is the unique natural with $\sigma(m) + k' = n$. Taking $T \setminus \{t\} \subseteq S$ completes the inductive step. [step 1.1, step 1.3, L1, L2, L4, L6, L7, L8]

3.1 $L$ is finite. Suppose not. Then for every $p \in \mathbb{N}$ there is an injection $p \to L$: at $p = 0$ the empty function serves, and given an injective $f : p \to L$, the image $f[p]$ cannot be all of $L$, since $L \approx p$ would make $L$ finite, so some $y \in L \setminus f[p]$ exists and step 1.2 extends $f$ to an injection $\sigma(p) \to L$. Take $p := \sigma(n)$ and an injection $f : \sigma(n) \to L$; its image $f[\sigma(n)]$ is a subset of $L$, hence independent, and $f[\sigma(n)] \approx \sigma(n)$. Step 2.1 applied to it gives $\sigma(n) \le n$, while $n < \sigma(n)$, so $n < n$, which is impossible. Hence $L$ is finite. [step 1.2, step 2.1, L4, L6, L7, L8]

4.1 By step 3.1 the set $L$ is finite, so there is exactly one $m \in \mathbb{N}$ with $L \approx m$, and step 2.1 applied to $L$ gives $m \le n$ together with $T \subseteq S$ satisfying $T \approx k$ for the unique $k$ with $m + k = n$ and $\operatorname{span}(L \cup T) = V$; these are claims 1 and 2. [step 2.1, step 3.1, L8] ∎

## Remarks

- **What the induction actually exchanges.** At each stage a vector of $L$ is brought in and a vector of $T$ is thrown out, the thrown-out one being chosen so that the spanning property survives; the bound $m \le n$ falls out because $T$ cannot run out before $L$ does. The hypothesis that $L$ is independent is used exactly once per stage, to know that the newly brought-in $w$ is not already in the span of what has been brought in so far.

- **Finiteness of $L$ is proved, not assumed.** The argument in step 3.1 builds an injection $\sigma(n) \to L$ from the assumption that $L$ is not finite, one index at a time; this is an induction on the *statement* that such an injection exists, so it selects nothing globally and uses no choice principle. The conclusion is then the contradiction $\sigma(n) \le n$.

- **Sizes are equinumerosity classes, not cardinals.** "$|L| = m$" abbreviates $L \approx m$, and it is well posed because a finite set is equinumerous with exactly one natural number ([[lem-pigeonhole]]). Nothing above needs a theory of cardinal numbers, and nothing above says anything about infinite $S$.
