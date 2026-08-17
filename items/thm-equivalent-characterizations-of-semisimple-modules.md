---
id: thm-equivalent-characterizations-of-semisimple-modules
kind: theorem
title: "Equivalent characterizations of semisimple modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semisimple-module, def-socle-of-a-module, thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules, thm-zorn, thm-universal-property-of-module-direct-sums]
justified_by: []
aliases: []
landmark: true
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
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

Assuming the Axiom of Choice, for a module $M$ the following are equivalent: $M$ is a direct sum of simple submodules; $M$ is the sum of its simple submodules; and every submodule of $M$ has a complementary submodule. See [[def-semisimple-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A left $R$-module is semisimple when it is an internal direct sum of simple submodules, allowing the empty direct sum. Hence the zero module is semisimple. ([[def-semisimple-module]]).

[L2] Assuming the Axiom of Choice, every finitely generated nonzero module has a maximal proper submodule. ([[thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules]]).

[L3] Assume the Axiom of Choice (def-axiom-of-choice). Let $(P, \le)$ be a nonempty poset in which every chain has an upper bound. Then $P$ has a maximal element (def-maximal-element). Note the hypothesis asks only for an upper bound, not a least upper bound, and the conclusion asserts only that a maximal element exists, never that a greatest one does. ([[thm-zorn]]).

[L4] Let $(M_i)_{i\in I}$ be left $R$-modules and $N$ a left $R$-module. For every family of homomorphisms $f_i:M_i\to N$, there is a unique homomorphism $$f:\bigoplus_{i\in I}M_i\longrightarrow N$$ such that $f\circ\jmath_i=f_i$ for every $i$. It is given by $$f((m_i))=\sum_{i\in\operatorname{supp}(m)}f_i(m_i).$$ For $I=\varnothing$, this is the unique map $0\to N$. ([[thm-universal-property-of-module-direct-sums]]).

[L5] The socle $\operatorname{Soc}(M)$ is the sum of all simple submodules of $M$. ([[def-socle-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 A direct sum of simple submodules is plainly their sum. Conversely, if $M$ is a sum of simple submodules, Zorn's lemma applied to independent families of them gives a maximal direct sum $D$; if $D\ne M$, a simple submodule not contained in $D$ meets $D$ trivially, contradicting maximality. [L1, L2, L3, L4, L5, given, algebra]

2.1 Given $N\le M$ and a direct-sum decomposition $M=\bigoplus_{i\in I}S_i$ into simples, use Zorn to choose a maximal sum $C=\bigoplus_{j\in J}S_j$ with $C\cap N=0$. If some $S_i$ were not contained in $N+C$, simplicity would give $S_i\cap(N+C)=0$, so adjoining it would contradict maximality. Hence every $S_i\le N+C$, and therefore $M=N\oplus C$. [L3, step 1.1, given, algebra]

3.1 Conversely suppose every submodule has a complement. By [L5], choose $C$ with $M=\operatorname{Soc}(M)\oplus C$. If $C\ne0$, choose $0\ne x\in C$. The cyclic module $Rx$ has a maximal proper submodule $K$ by [L2]. Let $D$ complement $K$ in $M$. Then $Rx=K\oplus(Rx\cap D)$, and $Rx\cap D\cong Rx/K$ is a nonzero simple submodule of $C$, contrary to $C\cap\operatorname{Soc}(M)=0$. Hence $C=0$ and $M$ is a sum of simples. The zero module is the empty sum. [L2, L5, step 2.1, given, algebra] ∎
