---
id: lem-halting-oracle-is-not-computably-dominated
kind: lemma
title: "The halting oracle is not computably dominated"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-computably-dominated-oracle, def-turing-jump, thm-every-oracle-is-strictly-below-its-jump]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local proof and prerequisite repair; not independent review or a whole-closure audit"
    delegated_by: owner
  precheck: pass
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Example 2.3 and §7.5"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

The ordinary halting oracle $0'=\varnothing'$ is not computably dominated.

## Facts & Assumptions

**Given:** the halting oracle $0'$.

[F1] Its diagonal halting set and effective program syntax are specified in [[def-turing-jump]].

[F2] The empty oracle cannot compute its jump, by [[thm-every-oracle-is-strictly-below-its-jump]].

[F3] Computable domination means that every total oracle-computable function has some total computable pointwise upper bound, by [[def-computably-dominated-oracle]].

## Proof

**Proof technique:** direct.

1.1 With an oracle query to $0'$, define $h(e)=0$ when $\Phi_e^{\varnothing}(e)$ diverges. Otherwise simulate that program, answering every empty-oracle query negatively, and let $h(e)$ be its least halting stage, counted from its initial configuration. The query guarantees that this simulation terminates when it is undertaken. Thus $h$ is total and $0'$-computable. [given, F1, construct]

2.1 If a total computable function $g$ satisfies $h(e)\le g(e)$ for every $e$, an ordinary machine decides $0'$ as follows: compute $g(e)$, simulate $\Phi_e^{\varnothing}(e)$ through that many transitions (also checking the initial configuration), and answer yes exactly if it halts. Every halting computation is detected because its halting stage is at most $g(e)$; every nonhalting computation is answered no. This would make $0'$ computable from the empty oracle, contrary to [F2]. [F1, F2, step 1.1]

3.1 Therefore this particular total $0'$-computable function $h$ has no total computable pointwise upper bound. By [F3], $0'$ is not computably dominated. [F3, step 1.1, step 2.1] ∎
