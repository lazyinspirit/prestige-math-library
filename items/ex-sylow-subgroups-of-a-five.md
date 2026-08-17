---
id: ex-sylow-subgroups-of-a-five
kind: example
title: "The Sylow subgroups of $A_5$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-number-of-sylow-p-subgroups, thm-sylow-third-theorem, def-alternating-group, cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]
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

## Example

The group $A_5$ has five Sylow $2$-subgroups, ten Sylow $3$-subgroups, and six Sylow $5$-subgroups. See [[def-number-of-sylow-p-subgroups]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L2] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L3] For $n\in\mathbb N$, the alternating group is the kernel of the sign homomorphism, $$A_n:=\ker(\operatorname{sgn}:S_n\to\{+1,-1\})=\{\sigma\in S_n:\operatorname{sgn}(\sigma)=1\}.$$ Thus $A_n$ consists exactly of the even permutations. The subgroup and normality assertions implicit in the word “group” follow from thm-image-subgroup-and-kernel-normal. ([[def-alternating-group]]).

[L4] The conjugacy classes of $S_n$ are in bijection with the tuples of nonnegative integers $(c_1,\ldots,c_n)$ satisfying $$\sum_{k=1}^n kc_k=n.$$ For $n=0$, the unique empty tuple indexes the identity class of $S_0$. ([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]]).

## Verification

**Proof technique:** direct.

1.1 There are $\binom53\cdot2=20$ three-cycles, and each order-$3$ subgroup has two nonidentity elements, giving $n_3=10$. There are $4!=24$ five-cycles, and each order-$5$ subgroup has four nonidentity elements, giving $n_5=6$. [L1, L2, L3, L4, given, algebra]

2.1 Each of the five choices of a fixed letter gives the Klein four group of the three double transpositions on the remaining letters. The resulting five groups partition the fifteen double transpositions, so $n_2=5$. The values satisfy $5\mid15$, $10\mid20$, $6\mid12$ and the respective congruences modulo $2$, $3$, and $5$. This proves the stated claim. [step 1.1, given, algebra] ∎
