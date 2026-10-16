---
id: thm-qa-hidden-shift-generalized-dihedral-reduction
kind: theorem
title: Hidden shift as generalized-dihedral hidden subgroup
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-finite-abelian-hidden-shift-problem
  - def-generalized-dihedral-group
  - def-external-semidirect-product
  - thm-external-semidirect-product-is-a-group
  - def-qc-coherent-function-oracle
  - def-qc-toffoli-and-fredkin
  - def-qc-cnot-and-control-target-order
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; all groups, functions, and encodings are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Greg Kuperberg, A Subexponential-Time Quantum Algorithm for the Dihedral Hidden Subgroup Problem"
      url: "https://arxiv.org/pdf/quant-ph/0302112"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Statement

Let $A$ be a finite abelian group in explicit additive coordinates, and let $f,g:A\to S$ satisfy the hidden-shift promise of [[def-qa-finite-abelian-hidden-shift-problem]]: both maps are injective and there is a unique $s\in A$ such that $f(a)=g(a+s)$ for every $a$. Write $D_A=A\rtimes\mathbb Z_2$ with
$$
(a,b)(a',b')=(a+(-1)^b a',b+b'\bmod2),
$$
and define $F(a,0)=f(a)$ and $F(a,1)=g(a)$. Then $F$ is constant exactly on the left cosets of the order-two subgroup $H_s=\{(0,0),(s,1)\}=\langle(s,1)\rangle$. The subgroup determines the shift uniquely: $H_s=H_t$ implies $s=t$.

If a coherent XOR oracle for this $F$ is directly supplied, one $F$-oracle query implements one value query. From only coherent XOR oracles for $f$ and $g$, the $F$-XOR operation can be implemented with four calls total (two to compute the values into scratch registers and two to uncompute them), plus the controlled output XOR; no controlled call to either oracle is assumed. All gate, workspace, and named-oracle query costs remain separately charged.

## Facts & Assumptions

**Given:** The finite abelian group $A$, injective fixed-length encodings of the finite set $S$, coherent XOR oracles for $f,g$, and the unique shift $s$ satisfying $f(a)=g(a+s)$.

[F1] The generalized-dihedral multiplication is the displayed semidirect-product law, and it is a group law ([[def-generalized-dihedral-group]], [[def-external-semidirect-product]], [[thm-external-semidirect-product-is-a-group]]).

[F2] The hidden-shift promise gives injectivity of $f,g$ and $f(a)=g(a+s)$ for every $a\in A$ ([[def-qa-finite-abelian-hidden-shift-problem]]).

[F3] A coherent function oracle adds the fixed-length output encoding by bitwise XOR and is its own inverse ([[def-qc-coherent-function-oracle]]).

[F4] CNOT and Toffoli implement reversible XOR and controlled conjunction on computational-basis bits ([[def-qc-cnot-and-control-target-order]], [[def-qc-toffoli-and-fredkin]]).

## Proof

1.1 By [F1], $(s,1)^2=(s-s,0)=(0,0)$, and $(s,1)\ne(0,0)$ because its second coordinate is $1$. Thus $H_s$ has the two stated elements. Right multiplication gives
$$
(a,0)(s,1)=(a+s,1),\qquad (a+s,1)(s,1)=(a,0).
$$
Consequently the left coset through $(a,0)$ is exactly $C_a=\{(a,0),(a+s,1)\}$. Every group element belongs to one such pair, and distinct $a$ give distinct pairs because their parity-zero representatives differ. [given, F1, algebra]

2.1 On the pair $C_a$, [F2] gives $F(a,0)=f(a)=g(a+s)=F(a+s,1)$. If two parity-zero values agree, injectivity of $f$ makes their coordinates equal; if two parity-one values agree, injectivity of $g$ does the same. If $F(a,0)=F(b,1)$, then $f(a)=g(b)=g(a+s)$, so injectivity of $g$ yields $b=a+s$ and the two inputs lie in $C_a$. Thus equality of $F$-values occurs exactly within one left coset. [F2, step 1.1, algebra]

2.2 The nonidentity element of $H_s$ is $(s,1)$, so equality $H_s=H_t$ forces $(s,1)=(t,1)$ and hence $s=t$. [step 1.1, algebra]

3.1 A direct $F$-XOR oracle is exactly one value-query interface for the function just defined. Given only $O_f,O_g$, compute $f(a)$ and $g(a)$ into two fresh zero scratch registers with one call to each oracle. For each output bit, the selected value is $(1-b)f(a)_i\oplus b g(a)_i$; CNOT and Toffoli gates from [F4] implement this reversible Boolean-controlled XOR into the target, leaving the input and scratch registers unchanged. Apply $O_g$ and then $O_f$ again to erase the scratch registers, since [F3] makes each XOR oracle self-inverse and the group input is unchanged. The target has acquired precisely $F(a,b)$ and all scratch bits return to zero, using four calls total. This gives an explicit query account without postulating controlled access to $O_f$ or $O_g$. [F3, F4, step 2.1, algebra] ∎
