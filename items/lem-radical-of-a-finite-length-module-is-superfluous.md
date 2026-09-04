---
id: lem-radical-of-a-finite-length-module-is-superfluous
kind: lemma
title: "For a finite-length module, the radical is a superfluous submodule"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-module-radical-socle-head-and-loewy-series, def-composition-series-and-length-of-a-module, thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $M$ be a finite-length module. If $N\le M$ and
$N+\operatorname{rad}(M)=M$, then $N=M$.

## Facts & Assumptions

**Given:** A finite-length module $M$ and a submodule $N\le M$ with $N+\operatorname{rad}(M)=M$.

[F1] The module radical is the intersection of the maximal submodules, and the
head is $M/\operatorname{rad}(M)$ ([[def-module-radical-socle-head-and-loewy-series]]).

[L1] Finite length means a composition series exists
([[def-composition-series-and-length-of-a-module]]).

[L2] Every nonzero finitely generated module has a maximal proper submodule
([[thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules]]).

## Proof

**Proof technique:** direct.

1.1 Assume for contradiction that $N\ne M$. Since $M$ has finite length by [L1], it is finitely generated. Therefore the nonzero quotient $M/N$ has a maximal proper submodule by [L2], and its inverse image in $M$ is a maximal submodule $P$ containing $N$. [L1, L2, given, assume-contra, algebra]

2.1 By [F1], the radical lies in every maximal submodule, so $\operatorname{rad}(M)\subseteq P$. Hence $M=N+\operatorname{rad}(M)\subseteq P<M$, a contradiction. Therefore $N=M$, and the radical is superfluous. [F1, step 1.1, discharge-contradiction] ∎
