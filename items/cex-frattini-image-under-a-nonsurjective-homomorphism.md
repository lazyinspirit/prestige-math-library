---
id: cex-frattini-image-under-a-nonsurjective-homomorphism
kind: counterexample
title: "A nonsurjective homomorphism need not carry the Frattini subgroup into the target Frattini subgroup"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-frattini-subgroup-of-a-cyclic-p-group, lem-frattini-subgroup-is-characteristic, def-frattini-subgroup-of-a-finite-group, thm-frattini-subgroup-is-nilpotent, def-finite-symmetric-group-and-permutation-notation, cor-only-proper-nontrivial-normal-subgroup-of-s-n, thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable, cor-nilpotent-groups-and-finite-p-groups-are-solvable, def-group-homomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, §2.2"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement refuted

For every group homomorphism $f:G\to H$, one has $f(\Phi(G))\le\Phi(H)$. This fails for the embedding $f:C_4\hookrightarrow S_5$ below: $f(\Phi(C_4))\nleq\Phi(S_5)$.

## Facts & Assumptions

**Given:** The cyclic group $C_4=\langle g\rangle$, the symmetric group $S_5$ with the cycle convention of [[def-finite-symmetric-group-and-permutation-notation]], and the homomorphism $f:C_4\to S_5$ defined by $f(g)=(1\,2\,3\,4)$ ([[def-group-homomorphism]]).

[L1] If $P=\langle g\rangle$ has order $p^n$ with $n\ge1$, then $\Phi(P)=\langle g^p\rangle$ and $d(P)=1$ ([[ex-frattini-subgroup-of-a-cyclic-p-group]]).

[L2] The Frattini subgroup of every finite group is nilpotent ([[thm-frattini-subgroup-is-nilpotent]]).

[L3] For $n\ge5$, the normal subgroups of $S_n$ are $1,A_n,S_n$ ([[cor-only-proper-nontrivial-normal-subgroup-of-s-n]]).

[L4] The groups $A_5$ and $S_5$ are not solvable ([[thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable]]).

[L5] Every nilpotent group is solvable ([[cor-nilpotent-groups-and-finite-p-groups-are-solvable]]).

[L6] The Frattini subgroup is characteristic and hence normal ([[lem-frattini-subgroup-is-characteristic]], [[def-frattini-subgroup-of-a-finite-group]]).

## Counterexample

**Proof technique:** direct.

1.1 The $4$-cycle has order four, so $f$ is an embedding. By [L1], $\Phi(C_4)=\langle g^2\rangle$, and $f(g^2)=(1\,3)(2\,4)\ne1$. [given, L1, algebra]

1.2 By [L2] and [L6], $\Phi(S_5)$ is nilpotent and normal. The list [L3] leaves only $1,A_5,S_5$; [L4] and [L5] exclude the latter two, so $\Phi(S_5)=1$. [given, L2, L3, L4, L5, L6, algebra]

2.1 Step 1.1 exhibits a nonidentity element of $f(\Phi(C_4))$, while step 1.2 makes the target Frattini subgroup trivial. Hence $f(\Phi(C_4))\nleq\Phi(S_5)$. [step 1.1, step 1.2] ∎
