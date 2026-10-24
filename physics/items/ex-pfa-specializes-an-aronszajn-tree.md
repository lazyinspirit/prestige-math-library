---
id: ex-pfa-specializes-an-aronszajn-tree
kind: example
title: "PFA specializes an Aronszajn tree"
status: published
origin: pipeline
deps: [def-proper-forcing-axiom, thm-ccc-and-countably-closed-forcings-are-proper, thm-aronszajn-specialization-poset-ccc, lem-specialization-dense-domains-and-union, thm-hessenberg, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Sections 7-8"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

Assume PFA. For every Aronszajn tree $T$, applying PFA to the finite
specialization forcing $P(T)$ and its dense domain requirements produces a
total specializing map $f:T\to\omega$. Thus every Aronszajn tree is special
under PFA.

## Facts & Assumptions

**Given:** ZFC+PFA and an Aronszajn tree $T$.

[F1] PFA supplies a filter meeting every family of at most $\omega_1$ dense subsets of a nonempty proper partial order. [[def-proper-forcing-axiom]]

[F2] Every ccc forcing is proper. [[thm-ccc-and-countably-closed-forcings-are-proper]]

[F3] The finite-specialization forcing $P(T)$ of an Aronszajn tree is ccc. [[thm-aronszajn-specialization-poset-ccc]]

[F4] Each domain requirement $D_t=\{p\in P(T):t\in\operatorname{dom}(p)\}$ is dense, and the union of a nonempty directed family meeting every $D_t$ is a total specializing map. [[lem-specialization-dense-domains-and-union]]

[F5] An infinite cardinal has the same cardinality as its square. [[thm-hessenberg]]

[A1] AC supplies simultaneous enumerations of the countable levels of $T$ and the resulting cardinal comparison. [[def-axiom-of-choice]]

## Verification

1.1 Write $T_\alpha$ for the $\alpha$th level. Under A1 choose for every $\alpha<\omega_1$ an injection $e_\alpha:T_\alpha\to\omega$. Then $$t\longmapsto(\operatorname{ht}(t),e_{\operatorname{ht}(t)}(t))$$ injects $T$ into $\omega_1\times\omega$. Since $\omega\subseteq\omega_1$, F5 bounds this product by $|\omega_1\times\omega_1|=\omega_1$. Hence $|T|\leq\omega_1$, so the family $\mathcal D=\{D_t:t\in T\}$ has cardinality at most $\omega_1$. [F5, A1, Given]

2.1 By F3, $P(T)$ is ccc, and F2 makes it proper. It is nonempty because the empty finite function is its greatest condition. By F4 every member of $\mathcal D$ is dense. Reindex the distinct members of $\mathcal D$ along an ordinal $\lambda\leq\omega_1$ using step 1.1, and apply F1 to obtain a filter $G\subseteq P(T)$ meeting every $D_t$. Since the family is nonempty, so is $G$; by the filter convention it is downward directed. [F1, F2, F3, F4, A1, step 1.1]

3.1 Put $f=\bigcup G$. If two conditions in $G$ assign a value to the same node, a common stronger member of $G$ extends both, so the values agree and $f$ is a function. Meeting $D_t$ puts every $t\in T$ in its domain. If $s<_Tt$, choose members of $G$ mentioning $s$ and $t$ and then a common stronger member; its specializing-condition inequality gives $f(s)\ne f(t)$. Thus $f:T\to\omega$ is total and specializes $T$, exactly as F4 asserts. [F4, step 2.1]

4.1 The dense family may have repetitions, but step 2.1 reindexes its distinct members and loses no requirement. A one-node level, the label $0$, and the empty initial condition are all allowed by F4. PFA itself chooses the filter; no generic filter over the universe is postulated. AC is used exactly in step 1.1 and in the reindexing in step 2.1, and is retained through A1. [F1, F4, A1, step 1.1, step 2.1, step 3.1] ∎
