---
id: lem-dependent-iff-a-vector-lies-in-the-span-of-the-others
kind: lemma
title: "A subset $S \\subseteq V$ is linearly dependent if and only if some $s \\in S$ lies in $\\operatorname{span}(S \\setminus \\{s\\})$; and $\\operatorname{span}(S)$ is already the set of linear combinations of INJECTIVE finite lists into $S$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-linear-independence, lem-independent-list-is-injective, def-vector-space, def-field, lem-vector-space-elementary-consequences, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, def-sum-of-linear-subspaces, def-monoid-finite-product, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, lem-nat-nonzero-is-successor, def-injection-surjection-bijection]
justified_by: []
aliases: [lem-dependent-iff-redundant]
landmark: false
short: "dependent iff one vector is spanned by the rest"
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
    - title: "Interactive Linear Algebra: Linear Independence"
      url: "https://textbooks.math.gatech.edu/ila/linear-independence.html"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and let
$S \subseteq V$.

1. $S$ is linearly dependent ([[def-linear-independence]]) **if and only if**
   there is $s \in S$ with $s \in \operatorname{span}(S \setminus \{s\})$
   ([[def-linear-combination-and-span]]).
2. $$\operatorname{span}(S) \;=\; \Bigl\{\, \sum_{i<m} \nu_i x_i \;:\; m \in \mathbb{N},\ \nu : m \to F,\ x : m \to S \text{ injective} \,\Bigr\} .$$
   That is, restricting the lists in [[lem-span-is-the-set-of-linear-combinations]]
   to **injective** lists changes nothing.

**The two boundary cases are instances, not exceptions.** For $S = \varnothing$
both sides of claim 1 fail: $\varnothing$ is independent and there is no $s$. For
$S = \{0_V\}$ both hold: $\{0_V\}$ is dependent, and
$0_V \in \operatorname{span}(\varnothing) = \{0_V\}$
([[lem-span-is-the-set-of-linear-combinations]]).

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, and a subset $S \subseteq V$.

[L1] $\operatorname{span}(T)$ is exactly the set of vectors $\sum_{i<p}\mu_i w_i$ with $p \in \mathbb{N}$, $\mu : p \to F$ and $w : p \to T$; it is a linear subspace of $V$ containing $T$; and $\operatorname{span}(\varnothing) = \{0_V\}$ ([[lem-span-is-the-set-of-linear-combinations]], [[def-linear-combination-and-span]]).

[L2] Finite sums: $\sum_{i<0} u_i = 0_V$ and $\sum_{i<\sigma(p)} u_i = \bigl(\sum_{i<p} u_i\bigr) + u_p$, the value depending only on $u_0, \dots, u_{p-1}$ ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L3] (F1) an all-$0_V$ list sums to $0_V$; (F2) $\lambda\sum_{i<p} u_i + \sum_{i<p} w_i = \sum_{i<p}(\lambda u_i + w_i)$; (F3) $\sum_{i<p} u_i = u_j + \sum_{i<p} u^{(j)}_i$ for $j < p$, where $u^{(j)}$ agrees with $u$ off $j$ and is $0_V$ at $j$ ([[def-sum-of-linear-subspaces]]).

[L4] Deleting one index: for $k < \sigma(p)$ the map $\delta_k : p \to \sigma(p)$ is injective with image $\sigma(p) \setminus \{k\}$, and a list $u : \sigma(p) \to V$ with $u_k = 0_V$ satisfies $\sum_{j<\sigma(p)} u_j = \sum_{i<p} u_{\delta_k(i)}$ ([[lem-independent-list-is-injective]], claim 2).

[L5] The vector space axioms ([[def-vector-space]]) and their elementary consequences ([[lem-vector-space-elementary-consequences]]): $(V,+,0_V)$ is an abelian group; $0_F w = 0_V$; $\lambda 0_V = 0_V$; $(-1_F)w = -w$; $1_F w = w$; and (V4) $(\lambda\mu)w = \lambda(\mu w)$, (V3) $(\lambda+\mu)w = \lambda w + \mu w$.

[L6] $F$ is a field: $0_F \ne 1_F$, every $\lambda \ne 0_F$ has an inverse $\lambda^{-1}$ with $\lambda^{-1}\lambda = 1_F$, and every $\mu$ has an additive inverse $-\mu$ ([[def-field]]).

[L7] A list $v : p \to V$ is independent when $\sum_{i<p}\lambda_i v_i = 0_V$ forces every $\lambda_i = 0_F$, and $S$ is dependent exactly when some injective finite list into $S$ is dependent ([[def-linear-independence]]).

[L8] Naturals and maps: every $p \ne 0$ is a successor ([[lem-nat-nonzero-is-successor]]); $\sigma(p) = p \cup \{p\}$ with $p \notin p$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]); induction ([[thm-induction-principle]]); and injectivity as in [[def-injection-surjection-bijection]].

## Proof

**Proof technique:** direct.

1.1 Collecting repeated entries. For every $p \in \mathbb{N}$, every $w : p \to V$ and every $\mu : p \to F$ there are $m \in \mathbb{N}$, an injective $x : m \to V$ with $x[m] \subseteq w[p]$, and $\nu : m \to F$, with $\sum_{i<p}\mu_i w_i = \sum_{i<m}\nu_i x_i$. By induction on $p$: at $p = 0$ take $m = 0$, both sums being $0_V$. Assume it at $p$, and let $w : \sigma(p) \to V$ and $\mu : \sigma(p) \to F$; applying the hypothesis to the restrictions gives $\sum_{i<p}\mu_i w_i = \sum_{i<m}\nu_i x_i$ with $x$ injective and $x[m] \subseteq w[p]$, and the recursion gives $\sum_{i<\sigma(p)}\mu_i w_i = \sum_{i<m}\nu_i x_i + \mu_p w_p$. If $w_p \notin x[m]$, extend $x$ to $x' : \sigma(m) \to V$ by $x'_m := w_p$ and $\nu$ to $\nu'$ by $\nu'_m := \mu_p$; then $x'$ is injective with $x'[\sigma(m)] \subseteq w[\sigma(p)]$ and the recursion gives $\sum_{i<\sigma(m)}\nu'_i x'_i = \sum_{i<m}\nu_i x_i + \mu_p w_p$. If instead $w_p = x_k$ for the unique such $k < m$, put $\nu'_k := \nu_k + \mu_p$ and $\nu'_i := \nu_i$ for $i \ne k$; applying (F3) at $k$ to the lists $i \mapsto \nu_i x_i$ and $i \mapsto \nu'_i x_i$, whose $k$-deleted forms coincide, and using (V3) in the form $(\nu_k + \mu_p)x_k = \nu_k x_k + \mu_p x_k$, gives $\sum_{i<m}\nu'_i x_i = \sum_{i<m}\nu_i x_i + \mu_p x_k$, which is the required value. [L2, L3, L5, L8]

1.2 A scalar passes through a finite sum: for $\lambda \in F$, $p \in \mathbb{N}$ and $u : p \to V$, applying (F2) with the all-$0_V$ second list and using (F1) and the identity law gives $\lambda\sum_{i<p} u_i = \sum_{i<p}\lambda u_i$; combined with (V4) this yields $\lambda \sum_{i<p}\lambda_i v_i = \sum_{i<p}(\lambda\lambda_i)v_i$ for scalars $\lambda_i$ and vectors $v_i$. [L3, L5]

2.1 Claim 2. Every $\sum_{i<m}\nu_i x_i$ with $x : m \to S$ is a linear combination of elements of $S$, hence lies in $\operatorname{span}(S)$, so the right-hand set is contained in $\operatorname{span}(S)$. Conversely an element of $\operatorname{span}(S)$ is $\sum_{i<p}\mu_i w_i$ for some $w : p \to S$, and step 1.1 rewrites it as $\sum_{i<m}\nu_i x_i$ with $x$ injective and $x[m] \subseteq w[p] \subseteq S$, so $x : m \to S$ is an injective finite list. [step 1.1, L1]

2.2 Claim 1, from left to right. Let $S$ be dependent, witnessed by an injective $v : n \to S$ and $\lambda : n \to F$ with $\sum_{i<n}\lambda_i v_i = 0_V$ and $\lambda_j \ne 0_F$ for some $j < n$. Put $u_i := \lambda_i v_i$, so (F3) at $j$ gives $0_V = u_j + R$ with $R := \sum_{i<n} u^{(j)}_i$, whence $u_j = -R$ and $v_j = 1_F v_j = (\lambda_j^{-1}\lambda_j)v_j = \lambda_j^{-1}(\lambda_j v_j) = \lambda_j^{-1}(-R) = (-\lambda_j^{-1})R$. Now $u^{(j)}_i = \lambda'_i v_i$ where $\lambda'_j := 0_F$ and $\lambda'_i := \lambda_i$ for $i \ne j$, since $0_F v_j = 0_V$; also $n \ne 0$, say $n = \sigma(n')$, and the entry of this list at $j$ is $0_V$, so deleting the index $j$ gives $R = \sum_{i<n'}\lambda'_{\delta_j(i)} v_{\delta_j(i)}$. Applying step 1.2 to the scalar $-\lambda_j^{-1}$ gives $v_j = \sum_{i<n'}\kappa_i y_i$ with $\kappa_i := (-\lambda_j^{-1})\lambda'_{\delta_j(i)}$ and $y := v \circ \delta_j$. Since $\delta_j$ has image $n \setminus \{j\}$ and $v$ is injective, $y$ takes its values in $S \setminus \{v_j\}$, so $v_j$ is a linear combination of elements of $S \setminus \{v_j\}$ and therefore lies in $\operatorname{span}(S \setminus \{v_j\})$. Taking $s := v_j \in S$ finishes this direction. [step 1.2, L1, L3, L4, L5, L6, L7]

3.1 Claim 1, from right to left. Let $s \in S$ with $s \in \operatorname{span}(S \setminus \{s\})$. By step 2.1 applied to $S \setminus \{s\}$ there are $m$, an injective $x : m \to S \setminus \{s\}$ and $\nu : m \to F$ with $s = \sum_{i<m}\nu_i x_i$. Extend $x$ to $v : \sigma(m) \to S$ by $v_m := s$, which is injective because $s \notin x[m]$, and extend $\nu$ to $\lambda : \sigma(m) \to F$ by $\lambda_m := -1_F$. The recursion then gives $\sum_{i<\sigma(m)}\lambda_i v_i = \sum_{i<m}\nu_i x_i + (-1_F)s = s + (-s) = 0_V$, while $\lambda_m = -1_F \ne 0_F$, since $-1_F = 0_F$ would give $1_F = 0_F$. So $v$ is an injective finite list into $S$ that is dependent, and $S$ is dependent. [step 2.1, L2, L5, L6, L7]

4.1 Claim 1 is steps 2.2 and 3.1 together, and claim 2 is step 2.1. [step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **Claim 2 is the working form of the span.** Once it is available, "a vector of $\operatorname{span}(S)$" may always be taken to come with an injective list of vectors of $S$ carrying it, which is what makes the coefficient of a chosen entry meaningful. Every later argument on this page that solves for one entry of a list drawn from a span uses it in that form — [[thm-steinitz-exchange]] and [[cor-a-linear-subspace-has-a-complement]] — and [[lem-span-is-the-set-of-linear-combinations]] on its own does not supply it, since its lists may repeat. [[lem-adjoining-a-vector-outside-the-span]] solves for an entry too but needs nothing from here, its list being injective by hypothesis, drawn from the definition of independence of a subset.

- **Claim 1 removes the lists from the statement.** Dependence as defined is an existential over lists and witnesses; claim 1 restates it as a property of the set alone: some member is redundant, in that the span does not shrink when it is removed. That is also the form in which dependence is used to characterise bases ([[lem-basis-iff-maximal-independent-iff-minimal-spanning]]).

- **The vector produced is not unique and the lemma does not say it is.** In a dependent set several members may be redundant, and which ones they are depends on the set. What the proof produces is one $s$, read off from a chosen witness; a different witness may produce a different $s$.
