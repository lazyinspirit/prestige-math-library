---
id: lem-specialization-dense-domains-and-union
kind: lemma
title: "Dense domains and directed unions of specializing conditions"
status: published
origin: pipeline
deps: [def-finite-aronszajn-specialization-poset, def-aronszajn-suslin-and-special-tree]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Theorem 16.38 proof, printed p332; density and union argument only, with no invocation of Martin’s axiom"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

For an Aronszajn tree $T$ and each $t\in T$, the set $D_t=\{p\in P(T):t\in\operatorname{dom}(p)\}$ is dense: every $p\in P(T)$ has some $q\le p$ in $D_t$. If a nonempty downward-directed family $G\subseteq P(T)$ meets every $D_t$, then $\bigcup G$ is a total specializing function $T\to\omega$. Downward directed means that for every $p,q\in G$ there is $r\in G$ with $r\le p,q$. These assertions require no choice axiom and assert no existence of such a $G$.

## Facts & Assumptions

**Given:** $T$, $P(T)$, and $D_t$ as above. In the union assertion, a family $G$ with the stated properties is supplied.

[F1] Conditions are finite partial maps separating comparable distinct nodes, with stronger conditions extending weaker ones. [[def-finite-aronszajn-specialization-poset]]

[F2] A natural-valued map separating comparable distinct nodes specializes the tree. [[def-aronszajn-suslin-and-special-tree]]

## Proof

1.1 Fix $p\in P(T)$ and $t\in T$. If $t\in\operatorname{dom}(p)$ take $q=p$. Otherwise choose the explicit natural $N=0$ when $\operatorname{ran}(p)=\varnothing$ and $N=1+\max\operatorname{ran}(p)$ when the finite range is nonempty. Put $q=p\cup\{(t,N)\}$. It is a finite function extending $p$, and $N$ differs from every old label. Pairs in the old domain satisfy F1 already; any new comparable pair involves $t$ and has unequal labels. Thus $q\in P(T)\cap D_t$ and $q\le p$, proving density. [F1, given]

1.2 Put $f=\bigcup G$ as a union of graphs. If $(t,a),(t,b)\in f$, take $p,q\in G$ containing the respective pairs. Directedness gives $r\in G$ extending both; as $r$ is a function, $a=r(t)=b$. Thus $f$ is a function with domain contained in $T$ and values in $\omega$. For each $t\in T$, meeting $D_t$ supplies a condition in $G$ with $t$ in its domain, so $t\in\operatorname{dom}(f)$. Hence $\operatorname{dom}(f)=T$. No simultaneous selection of the conditions is needed for this pointwise conclusion. [F1, given]

2.1 If $x<_Ty$, totality gives $p,q\in G$ whose domains contain $x,y$ respectively. A common stronger $r\in G$ contains both nodes, so F1 gives $r(x)\ne r(y)$. Since $r\subseteq f$ by its membership in $G$, these are $f(x)$ and $f(y)$. Therefore $f$ specializes $T$ by F2. This uses only the supplied directed family; density alone does not provide that family. [F1, F2, step 1.2] ∎
