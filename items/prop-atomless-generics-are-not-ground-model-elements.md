---
id: "prop-atomless-generics-are-not-ground-model-elements"
kind: "proposition"
title: "Atomless generic filters are not in the ground model"
deps: ["def-dense-open-sets-and-model-generic-filters"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila Theorem 1.13 p4; Marks discussion after Lemma 24.6 p99
      url: https://karagila.org/files/Forcing-2023.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, let M be a transitive ZF model containing an atomless forcing preorder P and its order: every condition has two incompatible stronger conditions. If G is M-generic then $G\notin M$. The atomless hypothesis cannot simply be omitted.

## Facts & Assumptions

**Given:** ZF. Complement of a filter is dense in atomless forcing because two incompatible refinements cannot both be in the filter; if G were ground-model, its complement would contradict genericity. Singleton forcing checks the missing-hypothesis boundary.

[F1] [[def-dense-open-sets-and-model-generic-filters]]: Generic filters meet ground dense sets, and internal directedness makes any two filter conditions compatible.

## Proof

1.1 For any filter G on atomless P, $P\setminus G$ is dense. Given p, choose two incompatible refinements q,r of p. They cannot both be in G, since internal directedness would give a common stronger condition. At least one therefore lies in $P\setminus G$ below p. This is one finite existential argument for each p, not a simultaneous choice function. [F1, given]

2.1 If G were in M, internal Separation would make the actual set $D=P\setminus G$ an element of M. Step 1.1 makes D dense, while genericity would require $G\cap D\ne\varnothing$, impossible by its definition. Thus G is not in M. For singleton forcing, its unique filter P belongs to M and meets every dense set, exhibiting the failure when atomlessness is removed. [F1, step 1.1] ∎
