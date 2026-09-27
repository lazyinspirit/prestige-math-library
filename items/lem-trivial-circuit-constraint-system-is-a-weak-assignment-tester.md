---
id: lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester
kind: lemma
title: "Gate constraints are a weak assignment tester"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-assignment-tester-and-rejection-ratio, def-circuit-sat, def-boolean-circuit-size-depth-fanin-and-basis, def-constraint-graph-and-labeling-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §9 proof of Corollary 9.3 (trivial assignment tester of rejection probability 1/|G_0|), printed p. 33."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5 (constraint graphs of bounded arity), printed pp. 369-371."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $C$ be a Boolean circuit with $s$ input coordinates, of which $n\le s$ are named, and $m$ non-input gates over the basis of [[def-boolean-circuit-size-depth-fanin-and-basis]]. Then there is a binary constraint graph $G$ over the fixed alphabet $\Sigma_0=\{0,1\}^3$ of eight symbols, with the $n$ named input coordinates among its vertices, such that

- $G$ has $M=O(m+s)$ ordinary edges, all relations being explicit tables of size at most $8\times8$, and both $G$ and its edge list are produced from the gate list of $C$ by a deterministic algorithm in time polynomial in $m+s$;
- $G$ satisfies the completeness and proximity inequalities of [[def-assignment-tester-and-rejection-ratio]] with the **instance-dependent** bound $\rho_C:=1/M$: every accepted input extends to a satisfying labeling, and every input $x$ and auxiliary labeling $b$ satisfy $\operatorname{UNSAT}_{x\cup b}(G)\ge\rho_C\,\delta(x,\operatorname{SAT}(C))$. The input coordinates are labeled by the two **designated symbols** $0:=(0,0,0)$ and $1:=(1,1,1)$ of $\Sigma_0$, identified with the bits of the input. As $M$ grows with $C$, this alone does not give a fixed positive rejection ratio for the map on all circuits.

## Facts & Assumptions

**Given:** a Boolean circuit $C$ with $s$ input coordinates including named coordinates $x_1,\dots,x_n$, $m$ non-input gates (NOT, AND or OR, with fan-in at most two, and the constants $0,1$) and a designated output, in the conventions of [[def-boolean-circuit-size-depth-fanin-and-basis]], and the assignment-tester conventions of [[def-assignment-tester-and-rejection-ratio]].

[F1] The wires of $C$ are its $s$ inputs and its $m$ non-input gates; they can be listed in a topological order in which every gate follows its input wires. For any assignment to all $s$ input coordinates, each wire value is determined by preceding wires; $C$ accepts a named-input assignment $x$ exactly when some assignment to the other $s-n$ input coordinates makes its designated output equal $1$ ([[def-boolean-circuit-size-depth-fanin-and-basis]], [[def-circuit-sat]]).

[F2] A binary constraint graph has a finite nonempty alphabet, one relation $R_e\subseteq\Sigma^2$ per edge in a fixed endpoint order, loops with two incidences testing $R_e(a,a)$, isolated vertices removable without changing the value, and value equal to the fraction of ordinary edges satisfied when there is at least one edge; duplicating every edge preserves the value fraction, and relations are explicit Boolean tables ([[def-constraint-graph-and-labeling-value]]).

[F3] An assignment tester with alphabet $\Sigma_0$ and rejection ratio $\rho$ maps a circuit with named inputs to a constraint system containing those input coordinates, such that accepted inputs extend to labelings with unsatisfiability zero and every input $x$ and auxiliary labeling $b$ satisfy $\operatorname{UNSAT}_{x\cup b}\ge\rho\,\delta(x,\operatorname{SAT}(C))$, where $\delta$ is the relative Hamming distance to the accepted inputs and equals $1$ when $\operatorname{SAT}(C)=\varnothing$ ([[def-assignment-tester-and-rejection-ratio]]).

## Proof

**Proof technique:** constructive.

1.1 **The gadget.** Put $\Sigma_0:=\{0,1\}^3$, with designated symbols $0=(0,0,0)$ and $1=(1,1,1)$; the remaining six symbols are auxiliary. Take as vertices the $s+m$ wires of $C$, listed in a topological order, together with one **gate vertex** per non-input gate; the wire vertices include the named input coordinates and are the only vertices whose alphabet is restricted to the two designated symbols. For each wire vertex $v$ add one loop edge with relation $D:=\{(s,s):s\in\{0,1\}\}$, restricting its label to a designated symbol. Write $d(0):=(0,0,0)$ and $d(1):=(1,1,1)$ for the designated symbols. For a gate $g$ with input wires $p,q$ and output wire $r$ let $T_g\subseteq\Sigma_0$ be the set of triples $(a,b,z)$ with $z$ the value of $g$ on the input bits $a,b$, taking $b:=a$ and $p=q$ for the one-input gate NOT, so that $T_g$ is a four-element table for AND and OR and the two-element table $\{(a,a,1-a):a\in\{0,1\}\}$ for NOT; for a constant gate let $T_g:=\{(c,c,c)\}$ and let $r$ be its output wire. Add a loop edge at the gate vertex with relation $D_g:=\{(s,s):s\in T_g\}$, add edges from the gate vertex to $p$ and to $q$ with relations $P_1:=\{((a,b,z),d(a)):(a,b,z)\in T_g\}$ and $P_2:=\{((a,b,z),d(b)):(a,b,z)\in T_g\}$, and add an edge from the gate vertex to $r$ with relation $P_3:=\{((a,b,z),d(z)):(a,b,z)\in T_g\}$; for a constant gate only $P_3$ is added, there being no input wire. Finally add a loop at the output wire with relation $\{(1,1)\}$. [F1, F2, construct]

2.1 **Size and explicitness.** Each wire contributes one loop, each non-constant gate contributes one loop and three projection edges, each constant gate one loop and one projection edge, and the output one further loop; hence $M\le(s+m)+4m+1=O(m+s)$ ordinary edges, and $\Sigma_0$ is a fixed eight-symbol alphabet with relations of at most $8\times8$ entries. Every relation is one of the finitely many displayed tables determined by the gate type, so the edge list is written down from the topological gate list in time linear in $m+s$. [F2, step 1.1, algebra]

2.2 **Perfect completeness.** If $x\in\operatorname{SAT}(C)$, choose an assignment to the other $s-n$ input coordinates witnessing acceptance, and label every wire vertex by its value in the resulting evaluation of $C$, read as the designated symbol $0$ or $1$, and label each gate vertex by the triple of the two input values and the output value of that gate. Then every wire label is designated, so the loops with relation $D$ are satisfied; each gate vertex carries a triple of its truth table, so its loop $D_g$ is satisfied; each projection edge is satisfied because the triple's coordinates are exactly the labels of the corresponding wire vertices; and the output loop is satisfied because the output evaluates to $1$. Hence $\operatorname{UNSAT}_{x\cup b}(G)=0$ for that labeling, the completeness clause of [F3]. [F1, F3, step 1.1, algebra]

2.3 **Soundness.** Fix $x\in\{0,1\}^X$ and an arbitrary labeling $b$ of the gate vertices and of the wire vertices other than the named inputs, and suppose all $M$ edges of $G$ are satisfied. Then every wire label is a designated symbol by the loops with relation $D$. Read the labels of the unnamed input wires as an assignment to the other $s-n$ input coordinates. We show by induction along the topological order that each wire label equals the evaluation of that wire on this full input assignment: the input vertices have these values by construction, and for a gate whose input wires are already correct, its loop forces its label to be a truth-table triple $(a,b,z)$ of that gate, while the projection edges force $a$ and $b$ to be the labels of its input wires and $z$ to be the label of its output wire; hence the output wire of the gate carries the correct evaluated value. The induction terminates at the designated output wire, whose loop forces its label to be $1$, so the output evaluates to $1$ and $C$ accepts $x$ by [F1]. Therefore if $x\notin\operatorname{SAT}(C)$ at least one edge is violated under every $b$, that is $\operatorname{UNSAT}_{x\cup b}(G)\ge1/M$; and since $\delta(x,\operatorname{SAT}(C))\le1$ always, with $\delta=1$ on $\operatorname{SAT}(C)=\varnothing$ by [F3], this gives $\operatorname{UNSAT}_{x\cup b}(G)\ge\delta(x,\operatorname{SAT}(C))/M$. [F1, F3, step 1.1, algebra]

3.1 Steps 2.1, 2.2 and 2.3 verify the size, explicitness, completeness and instancewise soundness clauses with $\rho_C=1/M$, for the constructed graph over $\Sigma_0=\{0,1\}^3$ of arity $2$, the input coordinates being the wire vertices of the named inputs labeled by the designated symbols. Since $M$ is unbounded across circuits, this is a weak, size-dependent proximity construction rather than a map with the fixed rejection ratio required by [F3]. [F3, step 2.1, step 2.2, step 2.3, discharge-construct] ∎

## Remarks

- **Why the alphabet has eight symbols.** A gate vertex must carry the two input bits and the output bit so that the projection edges can force the wires; that is the three-coordinate alphabet $\{0,1\}^3$, and the wire vertices use only the two designated symbols, which is what makes the induction of step 2.3 go through. The six other symbols may legitimately label gate vertices when they belong to that gate's truth table, but no such symbol satisfies a wire loop $D$, so it cannot fake an input or wire value.
- **The rejection ratio is only inverse-linear.** Its ratio $1/M$ would require $O(\log M)$ verified constant-factor amplification steps to reach a fixed rejection ratio; the point of this construction is that its size is linear in the circuit rather than exponential. It is deliberately *not* the constant-ratio tester; [[lem-exponential-base-assignment-tester-from-quadratic-oracles]] supplies that one at exponential size. Combining these two testers at polynomial size requires an additional robust input-preserving composition interface.
- **No randomness and no choice.** The gadget is a fixed function of the gate list: the topological order is taken from the circuit description, the relations are the five displayed tables, and no vertex, edge or label is selected. In particular the construction uses no choice principle, and the identification of bits with designated symbols is part of the alphabet convention.
