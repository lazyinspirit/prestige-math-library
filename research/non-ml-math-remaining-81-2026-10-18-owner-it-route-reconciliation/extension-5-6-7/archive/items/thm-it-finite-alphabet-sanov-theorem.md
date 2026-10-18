---
id: thm-it-finite-alphabet-sanov-theorem
kind: theorem
title: "Finite-alphabet Sanov bounds on the support simplex"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-finite-alphabet-product-law
  - lem-it-finite-product-law-is-iid
  - def-it-empirical-type-and-type-class
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - lem-it-number-of-n-types-polynomial-bound
  - lem-it-type-class-probability-bounds
  - lem-it-n-type-approximation
  - lem-it-finite-relative-entropy-continuity-on-simplex
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; each approximating sequence is explicitly rounded on a finite alphabet."
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Theorem 15.13 and the finite-alphabet regularity discussion, printed pp. 307–308 / author PDF pp. 332–333; Exercise III.23(a)–(e), printed pp. 334–335"
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 11"
      url: "https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf"
      locator: "Theorem 11.4.1 and proof, printed pp. 362–363 (complete Chapter 11 PDF pp. 15–16)"
---

## Statement

Let $\mathcal A$ be finite, let $p$ be a probability vector on $\mathcal A$, and set $S:=\operatorname{supp}(p)=\{a\in\mathcal A:p(a)>0\}$. Then $S$ is finite nonempty and $p(a)>0$ on $S$. For each $n\ge1$, use the finite product law $p^{\otimes n}$ from [[def-it-finite-alphabet-product-law]] and [[lem-it-finite-product-law-is-iid]], and let $X_1^{(n)},\ldots,X_n^{(n)}$ be its coordinate maps. Let $\widehat P_n$ be the empirical type of this coordinate word, taking values in the support simplex
$$\Delta(S):=\{q\in[0,1]^S:\sum_{a\in S}q(a)=1\}.$$
For any set $\Gamma\subseteq\Delta(S)$, let $\Gamma^\circ$ and $\overline\Gamma$ denote its interior and closure in the relative topology induced by $\|\cdot\|_1$. With $\inf\varnothing=+\infty$ and $\ln0=-\infty$,
$$\liminf_{n\to\infty}\frac1n\ln p^{\otimes n}(\widehat P_n\in\Gamma)\ge-\inf_{q\in\Gamma^\circ}D(q\|p),$$
and
$$\limsup_{n\to\infty}\frac1n\ln p^{\otimes n}(\widehat P_n\in\Gamma)\le-\inf_{q\in\overline\Gamma}D(q\|p).$$
For every $n\ge1$ the finite upper bound
$$p^{\otimes n}(\widehat P_n\in\Gamma)\le(n+1)^{|S|-1}\exp\!\left(-n\inf_{q\in\overline\Gamma}D(q\|p)\right)$$
also holds. If the two infima agree, the limit exists and equals their negative common value. If an ambient alphabet has zero-mass letters, the same statement is applied on $S$ to the event intersected with $\Delta(S)$; it does not assert a large-deviation theorem on a larger face than the source support.

## Facts & Assumptions

**Given:** A finite alphabet $\mathcal A$, a probability vector $p$, its finite product laws and coordinate maps from the statement, and a set $\Gamma$ of empirical probability vectors. Write $S=\operatorname{supp}(p)$ and $k=|S|$.

[F1] [[def-it-empirical-type-and-type-class]]: each word $x^n$ has empirical vector $\widehat P_{x^n}$, and its type class is $T_q=\{x^n:\widehat P_{x^n}=q\}$.

[F2] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $D(q\|p)=\sum_{a:q(a)>0}q(a)\ln(q(a)/p(a))$, with value $+\infty$ if $q(a)>0=p(a)$ for some $a$.

[F3] [[lem-it-number-of-n-types-polynomial-bound]]: the type classes partition the word space and there are at most $(n+1)^{k-1}$ $n$-types on a $k$-letter support.

[F4] [[lem-it-type-class-probability-bounds]]: each $n$-type $q$ satisfies $p^{\otimes n}(T_q)\le e^{-nD(q\|p)}$ and the corresponding lower bound is $(n+1)^{-(k-1)}e^{-nD(q\|p)}$.

[F5] [[lem-it-n-type-approximation]]: every probability vector on the fixed finite support is within $k/n$ in $\ell^1$ of an attainable $n$-type.

[F6] [[lem-it-finite-relative-entropy-continuity-on-simplex]]: for a full-support reference vector $p$ on $S$, $q\mapsto D(q\|p)$ is finite and continuous on all of $\Delta(S)$, including coordinates where $q(a)=0$.

[F7] [[lem-it-finite-product-law-is-iid]]: $p^{\otimes n}$ is a probability law on $S^n$, and its coordinate maps are independent with common law $p$.

## Proof

1.1 By [F7], the $n$th finite product sample has the coordinate word used to define $\widehat P_n$; by [F1], the event $\{\widehat P_n\in\Gamma\}$ is the disjoint union of the type classes $T_q$ with $q\in\Gamma\cap\mathcal P_n(S)$. Its probability is the sum of the probabilities of those finitely many classes. [given, F1, F7]

1.2 Fix $q\in\Gamma^\circ$. By the definition of relative interior in the topology on $\Delta(S)$ induced by $\ell^1$, some $\varepsilon>0$ has the property that every $r\in\Delta(S)$ with $\|r-q\|_1<\varepsilon$ belongs to $\Gamma$. By [F5], the fixed rounding rule supplies an $n$-type $q_n$ with $\|q_n-q\|_1\le k/n$ for every $n$, so $q_n\in\Gamma$ for all sufficiently large $n$. [F5, choose]

2.1 Every $q\in\Gamma\cap\mathcal P_n(S)$ lies in $\overline\Gamma$, so [F2] and the upper half of [F4] give $p^{\otimes n}(T_q)\le e^{-n\inf_{r\in\overline\Gamma}D(r\|p)}$. There are at most $(n+1)^{k-1}$ such types by [F3]; summing the classes from step 1.1 proves the finite upper bound, including the empty-set case. [F2, F3, F4, step 1.1, algebra]

2.2 For all sufficiently large $n$, the event contains $T_{q_n}$ from step 1.2, so [F4] gives probability at least $(n+1)^{-(k-1)}e^{-nD(q_n\|p)}$. By [F6], $D(q_n\|p)\to D(q\|p)$; taking normalized logarithms and the liminf gives at least $-D(q\|p)$. [F4, F6, step 1.2, algebra]

3.1 If the event probability is positive, take logarithms of the finite upper bound in step 2.1 and divide by $n$. If it is zero, its normalized logarithm is $-\infty$ by convention. Since $(k-1)\ln(n+1)/n\to0$, both cases yield the limsup inequality. [given, step 2.1, algebra]

3.2 Since step 2.2 holds for every $q\in\Gamma^\circ$, the liminf is at least $-\inf_{q\in\Gamma^\circ}D(q\|p)$. If $\Gamma^\circ=\varnothing$, the right-hand side is $-\infty$, so the inequality is automatic. [step 2.2, given, algebra]

4.1 When the interior and closure infima agree, steps 3.1 and 3.2 bound the limsup above and the liminf below by the same value. Since every liminf is at most the corresponding limsup, the limit exists and equals that common value. The proof covers the empty event by the stated extended-real conventions and uses the explicit rounding construction from step 1.2. [step 1.2, step 3.1, step 3.2, given, algebra]

5.1 If $k=1$, then $\Delta(S)=\{p\}$. For $p\in\Gamma$, the empirical law is always $p$ under the product law [F7], both infima are $D(p\|p)=0$, and the normalized log probability is $0$; for $p\notin\Gamma$, both infima are $+\infty$ and the probability is zero. Thus the one-letter support boundary also satisfies the statement. [given, F2, F7, step 4.1, algebra] ∎

