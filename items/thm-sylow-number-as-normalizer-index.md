---
id: thm-sylow-number-as-normalizer-index
kind: theorem
title: "Sylow III*: $n_p(G)=[G:N_G(P)]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-second-theorem, def-number-of-sylow-p-subgroups, thm-conjugate-subgroups-are-counted-by-the-normalizer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

If $P$ is a Sylow $p$-subgroup of a finite group $G$, then $$n_p(G)=[G:N_G(P)].$$ See [[thm-sylow-second-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. ([[thm-sylow-second-theorem]]).

[L2] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L3] Let $H\le G$. The rule $$G/N_G(H)\longrightarrow\{gHg^{-1}:g\in G\},\qquad gN_G(H)\longmapsto gHg^{-1},$$ is a well-defined bijection. If $G$ is finite, the number of distinct conjugates of $H$ is $[G:N_G(H)]$. ([[thm-conjugate-subgroups-are-counted-by-the-normalizer]]).

## Proof

**Proof technique:** direct.

1.1 Conjugation is transitive on the Sylow $p$-subgroups by Sylow II, and the stabilizer of $P$ is exactly $N_G(P)$. [L1, L2, L3, given, algebra]

2.1 By step 1.1 the set of Sylow $p$-subgroups is exactly the conjugacy class of $P$, so [L3] counts it as $[G:N_G(P)]$, and [L2] identifies that count with $n_p(G)$. If $P$ is the unique Sylow $p$-subgroup, then $N_G(P)=G$ and both sides are $1$; if $p\nmid|G|$, then $P=\{1\}$, again with $N_G(P)=G$ and both sides $1$. This proves the stated claim. [step 1.1, L2, L3, given, algebra] ∎
