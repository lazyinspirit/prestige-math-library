---
id: thm-ma-aleph-one-eliminates-suslin-trees
kind: theorem
title: "MA(aleph-one) eliminates Suslin trees"
status: published
origin: pipeline
deps: [def-martins-axiom, def-finite-aronszajn-specialization-poset, thm-aronszajn-specialization-poset-ccc, lem-specialization-dense-domains-and-union, def-aronszajn-suslin-and-special-tree, thm-countable-union-of-countable, cor-cardinal-absorption, thm-schroder-bernstein, def-axiom-of-choice]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Proposition 7.4 and complete proof, printed p. 35"
      url: https://karagila.org/files/Forcing-2023.pdf
    - title: "Monk, Set theory following Jech, Theorem 16.38 and complete proof, printed p. 332"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

In ZFC, $\mathrm{MA}(\aleph_1)$ implies that no Suslin tree exists.

## Facts & Assumptions

**Given:** ZFC and $\mathrm{MA}(\aleph_1)$.

[F1] $\mathrm{MA}(\aleph_1)$ supplies a filter meeting any family of at most $\aleph_1$ dense subsets of a nonempty ccc forcing partial order. [[def-martins-axiom]]

[F2] The finite-specialization forcing $P(T)$ consists of finite natural-valued partial maps separating comparable tree nodes, is ordered by reverse inclusion, and contains the empty condition. [[def-finite-aronszajn-specialization-poset]]

[F3] For every Aronszajn tree, $P(T)$ is ccc. [[thm-aronszajn-specialization-poset-ccc]]

[F4] Each node-domain set $D_t$ is dense in $P(T)$, and the union of a nonempty downward-directed family meeting every $D_t$ is a total specializing map $T\to\omega$. [[lem-specialization-dense-domains-and-union]]

[F5] A Suslin tree is an Aronszajn tree of height $\omega_1$ with countable levels and no uncountable antichain; the fibers of a specializing map are antichains. [[def-aronszajn-suslin-and-special-tree]]

[F6] A countable union of countable sets is countable under countable choice. [[thm-countable-union-of-countable]]

[F7] For an infinite cardinal $\kappa$ and nonzero $\lambda\le\kappa$, the product cardinal $\kappa\otimes\lambda$ equals $\kappa$. [[cor-cardinal-absorption]]

[F8] Injections both ways between two sets yield a bijection. [[thm-schroder-bernstein]]

[A1] AC supplies simultaneous level enumerations and representatives and includes countable choice. [[def-axiom-of-choice]]

## Proof

1.1 Suppose toward a contradiction that $T$ is a Suslin tree. Every level $T_\alpha$ is nonempty: height $\omega_1$ gives a node above any prescribed $\alpha$, and its predecessor well-order has a node of height $\alpha$. By AC choose $t_\alpha\in T_\alpha$ and an injection $e_\alpha:T_\alpha\to\omega$ for every $\alpha<\omega_1$. Then $\alpha\mapsto t_\alpha$ injects $\omega_1$ into $T$, while $t\mapsto(\operatorname{ht}(t),e_{\operatorname{ht}(t)}(t))$ injects $T$ into $\omega_1\times\omega$. F7 gives $|\omega_1\times\omega|=\aleph_1$, and F8 applied to the two displayed injections gives $|T|=\aleph_1$. [F5, F7, F8, A1, choose, assume-contra]

2.1 Form $P(T)$. It is nonempty because it contains the empty condition by F2, and it is ccc by F3 because $T$ is Aronszajn. The family $\mathcal D=\{D_t:t\in T\}$ has size at most $|T|=\aleph_1$, and every member is dense by F4. Apply F1 to obtain a filter $G\subseteq P(T)$ meeting every $D_t$. Because $T$ and hence $\mathcal D$ are nonempty, this filter is nonempty; its filter directedness has exactly the orientation required by F4. [F1, F2, F3, F4, F5, step 1.1]

3.1 By F4, $f=\bigcup G$ is a total specializing function $T\to\omega$. For each $n<\omega$, the fiber $A_n=f^{-1}(\{n\})$ is a tree antichain by F5. Since $T$ is Suslin, each $A_n$ is countable, but $T=\bigcup_{n<\omega}A_n$ would then be countable by F6 and A1. This contradicts $|T|=\aleph_1$ from step 1.1, because $\aleph_1$ is uncountable. [F4, F5, F6, A1, step 1.1, step 2.1]

4.1 Therefore no Suslin tree can exist under $\mathrm{MA}(\aleph_1)$. AC is spent at step 1.1 and through the ccc and countable-union suppliers; the dense-set union lemma itself makes no choice. [A1, step 3.1, discharge-contradiction] ∎
