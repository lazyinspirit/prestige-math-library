---
id: lem-transcendence-basis-exchange
kind: lemma
title: "One element of a transcendence basis can be exchanged for a suitable rival"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-maximal-algebraically-independent-subset-is-a-transcendence-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Lemma 9.6"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $k\subseteq K$ be a field extension, let $S$ and $T$ be transcendence bases
of $K$ over $k$, and let $s\in S$. Then there exists $t\in T$ such that
$(T\setminus\{t\})\cup\{s\}$ is again a transcendence basis of $K$ over $k$.

## Facts & Assumptions

**Given:** A field extension $k\subseteq K$, transcendence bases $S$ and $T$ of $K$ over $k$, and an element $s\in S$.

[L1] If a subset of $K$ is algebraically independent and $K$ is algebraic over the field it generates, then that subset is a transcendence basis ([[lem-maximal-algebraically-independent-subset-is-a-transcendence-basis]]).

## Proof

**Proof technique:** direct.

1.1 Because $T$ is a transcendence basis, $K$ is algebraic over $k(T)$; in particular $s$ is algebraic over $k(T)$. Choose a finite subset $U=\{t_1,\ldots,t_m\}\subseteq T$ of minimal size such that $s$ is algebraic over $k(U)$. [given, choose]

2.1 Minimality forces $m\ge 1$. Choose a nonzero polynomial relation for $s$ over $k(U)$ and clear denominators to obtain $$ P(s,t_1,\ldots,t_m)=0 $$ with $P\in k[X,Y_1,\ldots,Y_m]$ nonzero. The variable $Y_m$ must occur in $P$; otherwise the same relation would show that $s$ is algebraic over $k(t_1,\ldots,t_{m-1})$, contradicting minimality of $U$. Therefore, viewing $P$ as a polynomial in $Y_m$ over $k(s,t_1,\ldots,t_{m-1})$, we see that $t_m$ is algebraic over $k(s,t_1,\ldots,t_{m-1})$. [step 1.1, algebra]

3.1 Put $T'=(T\setminus\{t_m\})\cup\{s\}$. If $T'$ were algebraically dependent, then $s$ would be algebraic over $k(T\setminus\{t_m\})$. Together with step 2.1 this would make $t_m$ algebraic over $k(T\setminus\{t_m\})$, contradicting algebraic independence of $T$. Hence $T'$ is algebraically independent. [step 2.1, given]

4.1 Step 2.1 shows that $t_m$ is algebraic over $k(T')$, so $k(T)$ is algebraic over $k(T')$. Since $K$ is algebraic over $k(T)$, it is also algebraic over $k(T')$. By [L1], $T'$ is a transcendence basis of $K$ over $k$. [L1, step 3.1, algebra] ∎
