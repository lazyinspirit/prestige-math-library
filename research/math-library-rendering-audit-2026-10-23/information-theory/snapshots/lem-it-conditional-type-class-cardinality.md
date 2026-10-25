---
id: lem-it-conditional-type-class-cardinality
kind: lemma
title: "Conditional type-class cardinality bound"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-it-empirical-type-and-type-class
  - lem-it-finite-marginals-and-conditionals-are-pmfs
  - lem-it-type-class-cardinality-bounds
  - def-it-finite-conditional-entropy
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the conditional classes are finite products of finite type classes."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Chapter 1, §1.2, Proposition 1.5 (Method of types), printed pp. 15–16."
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 11"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§11.1, Theorem 11.1.3 (type-class size), printed pp. 350–352."
---

## Statement

Let $\mathcal U,\mathcal V$ be finite nonempty alphabets, let $n\ge1$, and let $q$ be an attainable joint $n$-type on $\mathcal U\times\mathcal V$. For $v$ with $q_V(v)>0$, put $q_{U\mid v}(u):=q(u,v)/q_V(v)$; this is an $nq_V(v)$-type. If $v^n\in\mathcal V^n$ has empirical type $q_V$, then
$$\left|\{u^n\in\mathcal U^n:\widehat P_{u^n,v^n}=q\}\right|=\prod_{v:q_V(v)>0}|T_{q_{U\mid v}}|\le \exp\!\bigl(nH_q(U\mid V)\bigr),$$
where $T_{q_{U\mid v}}$ is the type class of length $nq_V(v)$ and $H_q(U\mid V)$ is the finite conditional entropy for joint law $q$.

## Facts & Assumptions

**Given:** The finite alphabets, blocklength, joint type, and fixed sequence $v^n$ in the Statement.

[F1] [[def-it-empirical-type-and-type-class]]: an empirical type records each symbol count divided by blocklength, and its type class is the set of words with that type.

[F2] [[lem-it-finite-marginals-and-conditionals-are-pmfs]]: each conditional vector of a joint probability vector given a positive-mass value is a probability vector.

[F3] [[lem-it-type-class-cardinality-bounds]]: for any finite alphabet and attainable type $r$, $|T_r|\le e^{mH(r)}$, where $m$ is that type's blocklength.

[F4] [[def-it-finite-conditional-entropy]]: $H_q(U\mid V)=\sum_{v:q_V(v)>0}q_V(v)H(q_{U\mid v})$, omitting zero-mass conditioning values.

[F5] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(r)=-\sum_{u:r(u)>0}r(u)\ln r(u)$ with $0\ln0=0$.

## Proof

1.1 For each $v$ with $q_V(v)>0$, let $J_v:=\{j:v_j=v\}$. The sets $J_v$ partition the positions of $v^n$. A word $u^n$ has joint type $q$ with this fixed $v^n$ exactly when, within each $J_v$, it places $nq(u,v)$ copies of symbol $u$. These counts sum to $nq_V(v)=|J_v|$, and their ratios define the attainable type $q_{U\mid v}$ of length $|J_v|$. Restriction to each $J_v$ gives a bijection from the joint-type fiber to the Cartesian product of these local type classes, so their cardinalities multiply and give the displayed product. Values with $q_V(v)=0$ have no positions and contribute factor $1$. [given, F1, F2, construct]

2.1 Apply [F3] to each factor in step 1.1, with blocklength $nq_V(v)$, to get $|T_{q_{U\mid v}}|\le e^{nq_V(v)H(q_{U\mid v})}$. Multiplying the finite bounds gives $\exp(n\sum_{v:q_V(v)>0}q_V(v)H(q_{U\mid v}))$, which equals $e^{nH_q(U\mid V)}$ by [F4] and [F5]. The omitted zero-mass rows contribute zero to the entropy sum. [F3, F4, F5, step 1.1, algebra] ∎
