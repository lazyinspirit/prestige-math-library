---
id: lem-reachability-count-is-verifiable-in-nl
kind: lemma
title: "A reachable-vertex count is verifiable in NL"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-l-and-nl, def-directed-st-connectivity, def-inductive-reachable-vertex-count]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §3.4.2"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Statement

Given the true count $c=|C_i(G,s)|$, there is a nondeterministic
$O(\log N)$-work-space verifier that accepts a certificate exactly when
$v\notin C_i(G,s)$. The certificate lists all $c$ reachable vertices in
strictly increasing order, each with a walk from $s$ of length at most $i$.

## Facts & Assumptions

**Given:** an $N$-vertex digraph, $s$, $i\le N-1$, the true count $c=|C_i(G,s)|$, and a vertex $v$.

[L1] $C_i$ consists of precisely the vertices with an $s$-to-vertex walk of length at most $i$ ([[def-inductive-reachable-vertex-count]]).

## Proof

**Proof technique:** positive certificate and counting.

1.1 Guess, in strictly increasing vertex-label order, $c$ distinct vertices different from $v$, together with for each an $s$-to-that-vertex walk of length at most $i$. Check each edge and count the listed vertices. [given, construct]

2.1 The current vertex, previous path vertex, path-length counter, list counter, and labels use $O(\log N)$ space. Thus this is an NL verifier. [step 1.1, algebra]

3.1 If it accepts, [L1] puts all $c$ listed vertices in $C_i$. The given equality $c=|C_i|$ makes this list exhaust $C_i$, so $v\notin C_i$. Conversely, when $v\notin C_i$, list every member of $C_i$ with a witnessing bounded walk; the list has exactly the given length $c$, and the verifier accepts. [L1, step 1.1, cases] ∎
