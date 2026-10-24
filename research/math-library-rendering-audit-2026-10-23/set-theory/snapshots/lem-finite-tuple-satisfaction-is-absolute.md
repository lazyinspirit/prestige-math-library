---
id: "lem-finite-tuple-satisfaction-is-absolute"
kind: "lemma"
title: "Finite-tuple satisfaction is absolute"
deps: ["thm-set-structure-satisfaction-recursion", "lem-satisfaction-coincidence", "thm-ordinals-and-omega-are-absolute-in-transitive-models", "thm-structural-recursion-on-set-coded-syntax"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke §5.1 pp13–14 and §5.4 p16; Marks Exercise 20.1 p86
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Work in ZF. Let $N$ be a transitive set model of ZF, or a definable transitive class model interpreted formula by formula, and let $\varnothing\ne A\in N$. For every coded membership formula $\phi$ and finite tuple $a$ from $A$ assigning all its free variables, satisfaction of $\phi[a]$ in $(A,\in)$ computed in $N$ agrees with external satisfaction. This does not assert that $(A^\omega)^N=A^\omega$.

## Facts & Assumptions

**Given:** ZF; nonempty set A in a transitive ZF model. Finite tuples and syntax agree by transitivity and actual omega; constructor comparison transfers both witness directions without assuming agreement of infinite assignment spaces.

[F1] [[thm-set-structure-satisfaction-recursion]]: Set satisfaction exists with the atomic, Boolean and existential clauses, uniformly definable from the structure.

[F2] [[lem-satisfaction-coincidence]]: Truth depends only on the assigned free variables.

[F3] [[thm-ordinals-and-omega-are-absolute-in-transitive-models]]: The finite indices and formula codes of a transitive ZF model are the actual finite ones.

[F4] [[thm-structural-recursion-on-set-coded-syntax]]: Constructor induction and recursion on finite formula syntax are available.

## Proof

1.1 Fix an actual formula code and take $m\in\omega$ greater than every variable index occurring anywhere in it, including bound indices. Transitivity and internal Pairing and Union put every finite tuple from $A$ in $N$. Conversely every internal $m$-tuple from $A$ is an actual one: the domain, entries and ordered pairs agree by transitivity. Finite code parsing uses the same finite words in both universes. [given, F3]

2.1 On each subformula define truth for assignments $t\in A^m$ recursively. For atoms use equality or membership of the indicated coordinates; use complement and intersection for negation and conjunction; for $\exists v_i\psi$ use $\exists b\in A$ applied to the truth of $\psi$ at $t[i:=b]$. Recursion into $\mathcal P(A^m)$ is a set construction, both internally and externally. [F4, step 1.1, construct]

3.1 Constructor induction identifies these truth values. Atoms compare the same sets by the same membership relation. Equal child truth values give equal negations and conjunctions. At an existential node each witness on either side lies in the identical set $A$, and its updated tuple is in $N$ by step 1.1; the induction hypothesis therefore transfers each witness in both directions. This comparison does not require equality of the internal and external power sets of $A^m$. [F4, step 1.1, step 2.1]

4.1 Fix one $a_0\in A$. An $m$-tuple extends to an infinite assignment by setting every later coordinate equal to $a_0$; Replacement constructs this extension inside $N$ as well as outside. The satisfaction clauses show by constructor induction that this extension has exactly the recursively computed finite truth values. Coincidence makes all choices of extension equivalent on the free variables. Step 3.1 thus proves the asserted equality of internal and external satisfaction for every finite tuple. The single choice of $a_0$ is existential instantiation, not AC. [F1, F2, F4, step 3.1] ∎
