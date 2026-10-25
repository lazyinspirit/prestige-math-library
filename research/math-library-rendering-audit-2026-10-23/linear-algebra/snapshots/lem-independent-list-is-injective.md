---
id: lem-independent-list-is-injective
kind: lemma
title: "Finite sums re-indexed along an injection, with a zero term deleted, and concatenated; and the closure properties of linear independence: an independent list is injective and never $0_V$, its sublists are independent, a list is independent exactly when it is injective with linearly independent image, and every subset of a linearly independent set is linearly independent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-independence, def-linear-combination-and-span, def-monoid-finite-product, def-sum-of-linear-subspaces, thm-generalised-associativity, def-vector-space, def-field, lem-vector-space-elementary-consequences, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, def-nat-order, lem-nat-trichotomy, lem-nat-nonzero-is-successor, lem-nat-discrete, lem-nat-add-cancellative, lem-nat-add-commutative, lem-nat-order-add-compatible, thm-nat-linear-order, def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: [lem-sublist-of-independent-is-independent, lem-reindex-finite-sum]
landmark: false
short: "re-indexing finite sums; independence is hereditary"
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
    - title: "Linear independence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_independence"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed."
      url: "https://linear.axler.net/LADR4e.pdf"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]), with finite
sums of vectors as in [[def-linear-combination-and-span]] and linear independence
as in [[def-linear-independence]]. For a function $f$ and a set $A$ we write
$f[A]$ for the image of $A$ ([[def-injection-surjection-bijection]]).

**Three facts about finite sums.**

1. **Re-indexing along an injection.** Let $n, m \in \mathbb{N}$, let
   $\iota : m \to n$ be injective, and let $u : n \to V$ satisfy $u_j = 0_V$ for
   every $j < n$ with $j \notin \iota[m]$. Then
   $$\sum_{j<n} u_j \;=\; \sum_{i<m} u_{\iota(i)} .$$
2. **Deleting one index.** Let $n' \in \mathbb{N}$ and $k < \sigma(n')$. The map
   $\delta_k : n' \to \sigma(n')$ given by $\delta_k(i) = i$ for $i < k$ and
   $\delta_k(i) = \sigma(i)$ for $k \le i < n'$ is injective with image
   $\sigma(n') \setminus \{k\}$. Consequently, if $u : \sigma(n') \to V$ has
   $u_k = 0_V$, then
   $\sum_{j<\sigma(n')} u_j = \sum_{i<n'} u_{\delta_k(i)}$.
3. **Concatenation.** Let $a, q \in \mathbb{N}$, $y : a \to V$ and
   $z : q \to V$. There is exactly one list $c : a + q \to V$ with $c_i = y_i$ for
   $i < a$ and $c_{a+j} = z_j$ for $j < q$, and it satisfies
   $$\sum_{i<a+q} c_i \;=\; \sum_{i<a} y_i \;+\; \sum_{j<q} z_j .$$
   If moreover $y$ and $z$ are injective with $y[a] \cap z[q] = \varnothing$, then
   $c$ is injective with image $y[a] \cup z[q]$.

**Four facts about independence.**

4. Every linearly independent list $v : n \to V$ is injective, and
   $v_i \ne 0_V$ for every $i < n$.
5. If $v : n \to V$ is linearly independent and $\iota : m \to n$ is injective,
   then the sublist $v \circ \iota : m \to V$ is linearly independent.
6. A list $v : n \to V$ is linearly independent **if and only if** it is
   injective and its image $v[n]$ is a linearly independent subset of $V$; in
   that case $v$ is a bijection $n \to v[n]$, so $v[n] \approx n$
   ([[def-equinumerous]]).
7. Every subset of a linearly independent subset of $V$ is linearly independent.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, and the finite sums of [[def-linear-combination-and-span]] read additively in the abelian group $(V,+,0_V)$.

[L1] Finite sums: $\sum_{i<0} u_i = 0_V$; $\sum_{i<\sigma(p)} u_i = \bigl(\sum_{i<p} u_i\bigr) + u_p$; and the value depends only on $u_0, \dots, u_{p-1}$ ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L2] (F1) a list all of whose entries are $0_V$ sums to $0_V$; (F3) for $j < p$ and $u : p \to V$, $\sum_{i<p} u_i = u_j + \sum_{i<p} u^{(j)}_i$, where $u^{(j)}$ agrees with $u$ at every $i \ne j$ and $u^{(j)}_j = 0_V$ ([[def-sum-of-linear-subspaces]]).

[L3] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L4] $(V,+,0_V)$ is an abelian group; $0_F w = 0_V$, $\lambda 0_V = 0_V$ and $(-1_F)w = -w$ for all $\lambda \in F$, $w \in V$; $1_F w = w$; and $1_F \ne 0_F$ in a field ([[def-vector-space]], [[lem-vector-space-elementary-consequences]], [[def-field]]).

[L5] A list $v : p \to V$ is linearly independent when $\sum_{i<p}\lambda_i v_i = 0_V$ forces $\lambda_i = 0_F$ for every $i < p$, and a subset $S \subseteq V$ is linearly independent when every injective finite list into $S$ is ([[def-linear-independence]]).

[L6] Maps ([[def-injection-surjection-bijection]]): a composite of injections is injective; a restriction of an injection is injective; an injection is a bijection onto its image and has a two-sided inverse there; and $A \approx B$ means a bijection $A \to B$ exists ([[def-equinumerous]]).

[L7] Naturals ([[def-natural-numbers]], [[lem-nat-order-is-membership]], [[def-nat-order]]): $\sigma(p) = p \cup \{p\}$ and $p \notin p$; $m < p \iff m \in p$ and $p = \{\, m : m < p \,\}$; $m < \sigma(p) \iff m \le p$; $m < p \iff \sigma(m) \le p$ ([[lem-nat-discrete]]); exactly one of $m < p$, $m = p$, $p < m$ holds ([[lem-nat-trichotomy]]); and every $p \ne 0$ is a successor ([[lem-nat-nonzero-is-successor]]).

[L8] Splitting law for finite products in a monoid, read additively here: $\sum_{i<a+q} g_i = \bigl(\sum_{i<a} g_i\bigr) + \bigl(\sum_{j<q} g_{a+j}\bigr)$ ([[thm-generalised-associativity]]).

[L9] Addition on $\mathbb{N}$: $m \le p$ means $m + k = p$ for some $k$; $\le$ is a total order; $m + k < m + q \iff k < q$; and $m + k = m + k'$ forces $k = k'$ ([[def-nat-order]], [[thm-nat-linear-order]], [[lem-nat-order-add-compatible]], [[lem-nat-add-cancellative]], [[lem-nat-add-commutative]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1, by induction on $m$. At $m = 0$ the image $\iota[0]$ is empty, so $u_j = 0_V$ for every $j < n$ and (F1) gives $\sum_{j<n} u_j = 0_V$, which is also the empty sum $\sum_{i<0} u_{\iota(i)}$. Assume the claim for $m'$, and let $\iota : \sigma(m') \to n$ be injective with $u : n \to V$ vanishing off $\iota[\sigma(m')]$. Put $j_0 := \iota(m') < n$, let $u^{(j_0)}$ be the list agreeing with $u$ off $j_0$ and equal to $0_V$ at $j_0$, and let $\iota'$ be the restriction of $\iota$ to $m'$, which is injective. Then $u^{(j_0)}$ vanishes off $\iota'[m']$: it vanishes at $j_0$ by construction, and a $j \ne j_0$ outside $\iota'[m']$ is outside $\iota[\sigma(m')]$, so $u_j = 0_V$. The inductive hypothesis therefore gives $\sum_{j<n} u^{(j_0)}_j = \sum_{i<m'} u^{(j_0)}_{\iota(i)} = \sum_{i<m'} u_{\iota(i)}$, the second equality because $\iota(i) \ne j_0$ for $i < m'$ by injectivity. Finally (F3) at $j_0$ gives $\sum_{j<n} u_j = u_{j_0} + \sum_{j<n} u^{(j_0)}_j = \sum_{i<m'} u_{\iota(i)} + u_{\iota(m')} = \sum_{i<\sigma(m')} u_{\iota(i)}$, by commutativity and the recursion. [L1, L2, L3, L6, L7]

1.2 Claim 2, the deletion map. Fix $n' \in \mathbb{N}$ and $k < \sigma(n')$, so $k \le n'$. The two clauses define a function $\delta_k : n' \to \sigma(n')$: for $i < k$ we have $i < k \le n'$, hence $i < \sigma(n')$, and for $k \le i < n'$ we have $\sigma(i) \le n' < \sigma(n')$. It is injective, being injective on each of the two blocks while its values on the first are below $k$ and its values on the second satisfy $k < \sigma(i)$. Its image is $\sigma(n') \setminus \{k\}$: a $j < \sigma(n')$ with $j < k$ is $\delta_k(j)$; a $j < \sigma(n')$ with $k < j$ is nonzero, hence $j = \sigma(i)$ for some $i$, and then $i < j \le n'$ gives $i < n'$ while $k < \sigma(i)$ gives $k \le i$, so $j = \delta_k(i)$; and $k$ itself is not a value, the first block giving values below $k$ and the second values above $k$. [L7]

1.3 Claim 3, the concatenated list. Let $a, q \in \mathbb{N}$, $y : a \to V$ and $z : q \to V$. Every $i < a+q$ satisfies exactly one of $i < a$ and $a \le i$; in the second case there is $j$ with $a + j = i$, and $a + j < a + q$ forces $j < q$, while $j$ is unique by cancellation of addition. So the clauses $c_i := y_i$ for $i < a$ and $c_{a+j} := z_j$ for $j < q$ determine exactly one function $c : a+q \to V$. If $y$ and $z$ are injective with $y[a] \cap z[q] = \varnothing$, then $c$ is injective: it is injective on each block, and a value from the first block lies in $y[a]$ while a value from the second lies in $z[q]$, two disjoint sets. Its image is $y[a] \cup z[q]$ by the two clauses. [L6, L7, L9]

1.4 Claim 3, the sum identity. The splitting law for finite sums gives $\sum_{i<a+q} c_i = \bigl(\sum_{i<a} c_i\bigr) + \bigl(\sum_{j<q} c_{a+j}\bigr)$, and by the defining clauses $c_i = y_i$ for $i < a$ and $c_{a+j} = z_j$ for $j < q$, so $\sum_{i<a+q} c_i = \sum_{i<a} y_i + \sum_{j<q} z_j$. [L1, L8]

1.5 Claim 4, injectivity. Let $v : n \to V$ be independent and suppose $v_j = v_k$ with $j \ne k$ and $j, k < n$. Define $\lambda : n \to F$ by $\lambda_j = 1_F$, $\lambda_k = -1_F$ and $\lambda_i = 0_F$ otherwise, and put $u_i := \lambda_i v_i$. Extracting the term at $j$ by (F3) and then the term at $k$ from the resulting list gives $\sum_{i<n} u_i = u_j + \bigl(u_k + \sum_{i<n} w_i\bigr)$, where $w$ agrees with $u$ off $\{j,k\}$ and is $0_V$ at both. Every entry of $w$ is $0_V$, since $u_i = 0_F v_i = 0_V$ for $i \notin \{j,k\}$, so (F1) makes the last sum $0_V$. Hence $\sum_{i<n}\lambda_i v_i = 1_F v_j + (-1_F)v_k = v_j + (-v_k) = 0_V$, while $\lambda_j = 1_F \ne 0_F$, contradicting independence. So $v$ is injective. [L1, L2, L4, L5]

1.6 Claim 4, no entry equal to $0_V$. Let $v : n \to V$ be independent and suppose $v_j = 0_V$ for some $j < n$. Define $\lambda : n \to F$ by $\lambda_j = 1_F$ and $\lambda_i = 0_F$ for $i \ne j$, and put $u_i := \lambda_i v_i$, so $u_i = 0_F v_i = 0_V$ for every $i \ne j$. Then (F3) at $j$ together with (F1) gives $\sum_{i<n}\lambda_i v_i = u_j + 0_V = 1_F v_j = v_j = 0_V$, while $\lambda_j = 1_F \ne 0_F$, contradicting independence. So $v_i \ne 0_V$ for every $i < n$. [L1, L2, L4, L5]

1.7 Zero extension of a list of scalars. Let $\iota : m \to n$ be injective, let $\mu : m \to F$ and let $v : n \to V$. Because $\iota$ is injective there is exactly one $\lambda : n \to F$ with $\lambda_{\iota(i)} = \mu_i$ for every $i < m$ and $\lambda_j = 0_F$ for every $j < n$ outside $\iota[m]$. The list $u_j := \lambda_j v_j$ then satisfies $u_j = 0_F v_j = 0_V$ for every $j$ outside $\iota[m]$, and $u_{\iota(i)} = \mu_i v_{\iota(i)}$ for every $i < m$. [L4, L6]

1.8 Claim 7. Let $S \subseteq V$ be independent and let $T \subseteq S$. Every injective finite list $w : p \to T$ is in particular an injective finite list into $S$, hence independent; so every injective finite list into $T$ is independent, which is exactly independence of $T$. [L5]

1.9 Claim 6, from right to left. Suppose $v : n \to V$ is injective and $v[n]$ is an independent subset of $V$. Read as a function $n \to v[n]$, the list $v$ is an injective finite list into $v[n]$, hence independent; the vanishing condition is a condition on sums computed in $V$ and is unaffected by which codomain $v$ is read into, so the list $v : n \to V$ is independent. Moreover $v$ is a bijection $n \to v[n]$, so $v[n] \approx n$. [L5, L6]

2.1 Claim 2, the consequence. Let $u : \sigma(n') \to V$ with $u_k = 0_V$ for some $k < \sigma(n')$. By step 1.2 the map $\delta_k$ is injective with image $\sigma(n') \setminus \{k\}$, so $u$ vanishes off that image, and claim 1, proved in step 1.1, gives $\sum_{j<\sigma(n')} u_j = \sum_{i<n'} u_{\delta_k(i)}$. [step 1.1, step 1.2]

2.2 Claim 5. Let $v : n \to V$ be independent, $\iota : m \to n$ injective, and $\mu : m \to F$ with $\sum_{i<m}\mu_i v_{\iota(i)} = 0_V$. Take the zero extension $\lambda$ of step 1.7, so the list $u_j := \lambda_j v_j$ vanishes off $\iota[m]$ and $u_{\iota(i)} = \mu_i v_{\iota(i)}$. Then step 1.1 gives $\sum_{j<n}\lambda_j v_j = \sum_{j<n} u_j = \sum_{i<m} u_{\iota(i)} = \sum_{i<m}\mu_i v_{\iota(i)} = 0_V$, so independence of $v$ forces $\lambda_j = 0_F$ for every $j < n$, and in particular $\mu_i = \lambda_{\iota(i)} = 0_F$ for every $i < m$. Hence $v \circ \iota$ is independent. [step 1.1, step 1.7, L5]

3.1 Claim 6, from left to right. Let $v : n \to V$ be independent; it is injective by step 1.5, so it is a bijection $n \to v[n]$ and has a two-sided inverse there. Let $w : p \to v[n]$ be an injective finite list; then $\iota := v^{-1} \circ w : p \to n$ is injective and $v \circ \iota = w$, so $w$ is independent by step 2.2. Hence every injective finite list into $v[n]$ is independent, that is, $v[n]$ is an independent subset of $V$, and $v[n] \approx n$. [step 1.5, step 2.2, L5, L6]

4.1 Claim 1 is step 1.1; claim 2 is step 1.2 with step 2.1; claim 3 is step 1.3 with step 1.4; claim 4 is step 1.5 with step 1.6; claim 5 is step 2.2; claim 6 is step 1.9 with step 3.1; and claim 7 is step 1.8. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.8, step 1.9, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **Claims 1 to 3 are the only finite-sum machinery this page adds.** Everything else it needs about sums of vectors is (F1), (F2) and (F3) of [[def-sum-of-linear-subspaces]], which were collected there for exactly this purpose, together with the splitting law of [[thm-generalised-associativity]]. Claim 1 is what lets a sum be recomputed over the indices that actually carry a nonzero term, claim 2 is its everyday special case, and claim 3 is what lets two independent lists be laid end to end.

- **Claim 6 is the bridge between the two notions of [[def-linear-independence]].** It says that nothing is lost either way: an independent list is exactly an injective enumeration of an independent set. That is why the injectivity clause in the subset definition costs nothing, and why an ordered basis can be defined as an injective list whose image is a basis ([[def-linear-basis]]) without creating a second notion.

- **Claim 4 fails without independence, and both halves are used.** A list may be injective and dependent, and a list containing $0_V$ is dependent whatever else it contains, since the single index carrying $0_V$ already supports the witness built in step 1.6. The second half is the list form of the observation in [[def-linear-independence]] that $\{0_V\}$ is dependent.
