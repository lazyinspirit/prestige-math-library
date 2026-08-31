---
id: lem-nerode-equivalence-is-a-right-congruence
kind: lemma
title: "Nerode-equivalent words stay equivalent after right concatenation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nerode-equivalence, def-equivalence-relation]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 20. Nonregular Languages"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

For every language $L\subseteq\Sigma^*$, the Nerode relation $\equiv_L$ of
[[def-nerode-equivalence]] is an equivalence relation on $\Sigma^*$, and for
every words $u,v,x\in\Sigma^*$,
$$ u\equiv_L v \implies ux\equiv_L vx. $$

## Facts & Assumptions

**Given:** A language $L\subseteq\Sigma^*$.

[L1] By [[def-nerode-equivalence]], $u\equiv_L v$ means that for every continuation $y\in\Sigma^*$ one has $uy\in L$ if and only if $vy\in L$.

[L2] By [[def-equivalence-relation]], it is enough to check reflexivity, symmetry, and transitivity.

## Proof

**Proof technique:** direct.

1.1 Reflexivity, symmetry, and transitivity follow immediately from the biconditional in [L1], so [L2] shows that $\equiv_L$ is an equivalence relation. [L1, L2, given]

1.2 Assume $u\equiv_L v$ and fix $x\in\Sigma^*$. For every continuation $y$, [L1] applied to the continuation $xy$ gives $uxy\in L \iff vxy\in L$, which is exactly the condition $(ux)\equiv_L(vx)$. [L1, given]

2.1 Therefore $\equiv_L$ is an equivalence relation preserved by right concatenation. [step 1.1, step 1.2] ∎
