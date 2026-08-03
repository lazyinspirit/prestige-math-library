---
id: lem-adjoining-a-vector-outside-the-span
kind: lemma
title: "If $S \\subseteq V$ is linearly independent and $w \\notin \\operatorname{span}(S)$ then $S \\cup \\{w\\}$ is linearly independent and $\\operatorname{span}(S) \\subsetneq \\operatorname{span}(S \\cup \\{w\\})$; and if $w \\in \\operatorname{span}(S)$ then $\\operatorname{span}(S \\cup \\{w\\}) = \\operatorname{span}(S)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-linear-independence, lem-independent-list-is-injective, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, lem-span-monotone-and-idempotent, def-linear-subspace, def-sum-of-linear-subspaces, def-monoid-finite-product, def-vector-space, def-field, lem-vector-space-elementary-consequences, def-natural-numbers, lem-nat-order-is-membership, lem-nat-nonzero-is-successor, def-injection-surjection-bijection]
justified_by: []
aliases: [lem-extend-independent-by-one]
landmark: true
short: "adjoining a vector outside the span"
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
    - title: "Dartmouth College linear algebra lecture notes: Linear independence"
      url: "https://math.dartmouth.edu/~m24w21/lecture-05.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]), let
$S \subseteq V$ and let $w \in V$.

1. If $w \in \operatorname{span}(S)$ then
   $\operatorname{span}(S \cup \{w\}) = \operatorname{span}(S)$
   ([[def-linear-combination-and-span]]).
2. If $S$ is linearly independent ([[def-linear-independence]]) and
   $w \notin \operatorname{span}(S)$, then $w \notin S$, the set $S \cup \{w\}$ is
   linearly independent, and
   $\operatorname{span}(S) \subsetneq \operatorname{span}(S \cup \{w\})$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, a subset $S \subseteq V$ and a vector $w \in V$.

[L1] For $T \subseteq V$, $\operatorname{span}(T)$ is a linear subspace of $V$ containing $T$ and contained in every linear subspace of $V$ containing $T$; and $T \subseteq T'$ implies $\operatorname{span}(T) \subseteq \operatorname{span}(T')$ ([[def-linear-combination-and-span]], [[lem-span-monotone-and-idempotent]]).

[L2] $\operatorname{span}(T)$ is exactly the set of vectors $\sum_{i<p}\mu_i y_i$ with $p \in \mathbb{N}$, $\mu : p \to F$ and $y : p \to T$ ([[lem-span-is-the-set-of-linear-combinations]]).

[L3] Finite sums: $\sum_{i<\sigma(p)} u_i = \bigl(\sum_{i<p} u_i\bigr) + u_p$ ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]); (F1) an all-$0_V$ list sums to $0_V$; (F3) $\sum_{i<p} u_i = u_j + \sum_{i<p} u^{(j)}_i$ for $j < p$, with $u^{(j)}$ agreeing with $u$ off $j$ and $0_V$ at $j$ ([[def-sum-of-linear-subspaces]]).

[L4] Deleting one index: for $k < \sigma(p)$ the map $\delta_k : p \to \sigma(p)$ is injective with image $\sigma(p) \setminus \{k\}$, and a list $u : \sigma(p) \to V$ with $u_k = 0_V$ satisfies $\sum_{j<\sigma(p)} u_j = \sum_{i<p} u_{\delta_k(i)}$ ([[lem-independent-list-is-injective]], claim 2).

[L5] A list $v : p \to V$ is independent when $\sum_{i<p}\lambda_i v_i = 0_V$ forces every $\lambda_i = 0_F$; a subset is independent when every injective finite list into it is ([[def-linear-independence]]).

[L6] $(V,+,0_V)$ is an abelian group; $0_F y = 0_V$; $1_F y = y$; (V4) $(\lambda\mu)y = \lambda(\mu y)$; and a linear subspace contains $0_V$ and is closed under $+$, under scalar multiplication and hence under additive inverses, since $-y = (-1_F)y$ ([[def-vector-space]], [[lem-vector-space-elementary-consequences]], [[def-linear-subspace]]).

[L7] $F$ is a field: every $\lambda \ne 0_F$ has an inverse with $\lambda^{-1}\lambda = 1_F$ ([[def-field]]).

[L8] Every natural number $p \ne 0$ is a successor, and $\sigma(p) = p \cup \{p\}$ ([[lem-nat-nonzero-is-successor]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]); injectivity is as in [[def-injection-surjection-bijection]].

## Proof

**Proof technique:** direct.

1.1 Claim 1. From $S \subseteq S \cup \{w\}$ we get $\operatorname{span}(S) \subseteq \operatorname{span}(S \cup \{w\})$. Conversely, assume $w \in \operatorname{span}(S)$; since also $S \subseteq \operatorname{span}(S)$, the set $S \cup \{w\}$ is contained in $\operatorname{span}(S)$, which is a linear subspace of $V$, so minimality gives $\operatorname{span}(S \cup \{w\}) \subseteq \operatorname{span}(S)$. The two inclusions give the claim. [L1]

1.2 The two easy parts of claim 2. Assume $w \notin \operatorname{span}(S)$. Then $w \notin S$, because $S \subseteq \operatorname{span}(S)$. Also $\operatorname{span}(S) \subseteq \operatorname{span}(S \cup \{w\})$ by monotonicity, and $w$ lies in the larger set and not in the smaller, so the inclusion is strict. [L1]

1.3 Now assume in addition that $S$ is independent, and let $v : n \to S \cup \{w\}$ be an injective finite list with $\lambda : n \to F$ and $\sum_{i<n}\lambda_i v_i = 0_V$. If $w$ is not a value of $v$, then $v$ is an injective finite list into $S$, so independence of $S$ gives $\lambda_i = 0_F$ for every $i < n$ and there is nothing more to prove. [L5]

1.4 In the remaining case $w = v_k$ for exactly one $k < n$, since $v$ is injective. Then $n \ne 0$, say $n = \sigma(n')$, and $y := v \circ \delta_k$ is an injective finite list $n' \to S$: it is injective as a composite of injections, and its values are the $v_j$ with $j \ne k$, each of which lies in $S \cup \{w\}$ and differs from $v_k = w$. Moreover, for every $\mu : n \to F$ with $\mu_k = 0_F$ the list $i \mapsto \mu_i v_i$ has the value $0_F w = 0_V$ at $k$, so deleting that index gives $\sum_{i<n}\mu_i v_i = \sum_{i<n'}\mu_{\delta_k(i)} y_i$. [L4, L6, L8]

2.1 In that case the coefficient of $w$ vanishes. Suppose $\lambda_k \ne 0_F$. Applying (F3) at $k$ to the list $i \mapsto \lambda_i v_i$ gives $0_V = \lambda_k w + R$, where $R = \sum_{i<n}\lambda'_i v_i$ with $\lambda'_k := 0_F$ and $\lambda'_i := \lambda_i$ for $i \ne k$, using $0_F w = 0_V$ to identify the deleted entry. By step 1.4 applied to $\lambda'$, $R = \sum_{i<n'}\lambda'_{\delta_k(i)} y_i$, which is a linear combination of elements of $S$ and therefore lies in $\operatorname{span}(S)$. Then $\lambda_k w = -R$ lies in $\operatorname{span}(S)$, that set being a linear subspace, and hence so does $w = 1_F w = (\lambda_k^{-1}\lambda_k)w = \lambda_k^{-1}(\lambda_k w)$, contradicting $w \notin \operatorname{span}(S)$. So $\lambda_k = 0_F$. [step 1.4, L2, L3, L6, L7]

3.1 The remaining coefficients vanish too. Since $\lambda_k = 0_F$ by step 2.1, step 1.4 applied to $\lambda$ itself gives $0_V = \sum_{i<n}\lambda_i v_i = \sum_{i<n'}\lambda_{\delta_k(i)} y_i$; the list $y$ is an injective finite list into the independent set $S$, hence independent, so $\lambda_{\delta_k(i)} = 0_F$ for every $i < n'$. As $\delta_k$ has image $n \setminus \{k\}$, this says $\lambda_j = 0_F$ for every $j \ne k$, and with $\lambda_k = 0_F$ every coefficient vanishes. [step 1.4, step 2.1, L4, L5]

4.1 Steps 1.3 and 3.1 show that every injective finite list into $S \cup \{w\}$ is independent, so $S \cup \{w\}$ is linearly independent; with step 1.2 this is claim 2, and step 1.1 is claim 1. [step 1.1, step 1.2, step 1.3, step 3.1] ∎

## Remarks

- **This is the engine of both existence arguments below.** Claim 2 is what makes a maximal independent set span ([[lem-basis-iff-maximal-independent-iff-minimal-spanning]]), what makes the maximal element produced by Zorn's lemma a basis ([[thm-every-independent-set-extends-to-a-basis]]), and what forbids an independent set of $n+1$ vectors inside a space with a spanning set of $n$ ([[thm-dimension-of-a-linear-subspace]]). Claim 1 is the complementary bookkeeping: adjoining a vector already in the span changes nothing.

- **Both hypotheses of claim 2 are needed.** Independence of $S$ alone does not make $S \cup \{w\}$ independent, and $w \notin \operatorname{span}(S)$ alone does not either, since $S$ may already be dependent. The companion page's false statement that a union of two independent sets is independent is the same point in its most tempting false form: it is not enough that the adjoined part be independent, it must lie outside the span.

- **Where the field is used.** Only at the inversion $\lambda_k^{-1}$ in the proof above. That is the single place where a vector space over a field behaves better than a module over a ring, and it is why the notions of this page are stated for fields throughout.
