---
id: def-composition-with-an-assignment-tester
kind: definition
title: "Composition of an edge system with an assignment tester"
status: draft
origin: pipeline
deps:
  - def-robust-codeword-blocks-for-constraint-graphs
  - def-assignment-tester-and-rejection-ratio
  - thm-two-piece-pcp-of-proximity
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §5.1, Definition 5.1 (composition), Lemma 1.8 and its proof"
      url: https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach, §18.5.2, Corollary 18.35 and proof of Lemma 18.30"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
---

## Definition

Fix a finite binary constraint graph $G$ over an alphabet $\Sigma$ of size
$W\ge2$, and form its blocks and ordered robust edge circuits using
[[def-robust-codeword-blocks-for-constraint-graphs]]. Each active vertex $v$
has a block $B_v=((v,1),\ldots,(v,\ell))$, where
$\ell=2^{\lceil\log_2 W\rceil}$. For an edge $e=(v,w)$, let
$C_e(X_e,Y_e)$ be its robust circuit, with its two formal input pieces
$X_e=(x_{e,1}^{(1)},\ldots,x_{e,\ell}^{(1)})$ and
$Y_e=(x_{e,1}^{(2)},\ldots,x_{e,\ell}^{(2)})$ in the specified endpoint order.

Let $P$ be the deterministic two-piece assignment-tester construction of
[[thm-two-piece-pcp-of-proximity]]. Apply $P$ to $C_e$ with these two
named input lists. Write its Boolean constraint system as
$T_e=(V_e,\mathcal C_e)$, let $X_e^*=X_e\cup Y_e$ be its named raw input
variables, and put $q_e=|\mathcal C_e|$. The system has arity at most six;
all variables in $V_e\setminus X_e^*$, including the verifier's external
and private proof-table variables, are local auxiliary variables.

For every edge, $q_e$ is a positive integer. Indeed, $W\ge2$ gives
$\ell\ge2$, so this local instance has $n=2\ell>0$. In the construction in
[[thm-two-piece-pcp-of-proximity]], the comparison family then has
$D=n2^L\ge1$ rows, and each of the nine test families is padded to
$U=D2^K\ge1$ rows. Thus $q_e=9U>0$. If the edge set is nonempty, set
$
M=\operatorname{lcm}\{q_e:e\in E(G)\}.
$
This is a well-defined positive integer because the edge set is finite and
each $q_e>0$. If $E(G)=\varnothing$, define $G\circ P$ to have no
variables and no constraints.

Suppose $E(G)\ne\varnothing$. The output variable set consists of the active
vertex blocks together with a fresh private copy $(e,z)$ of every
$z\in V_e\setminus X_e^*$ for each edge $e$. Map the first named piece of
$T_e$ coordinatewise to $B_v$ and the second coordinatewise to $B_w$.
When $e$ is a loop, $v=w$, so both formal pieces map coordinatewise to the
same block. Map each auxiliary variable $z$ to its private copy $(e,z)$.
Call the resulting map on gadget variables $\phi_e$. Thus endpoint bits are
shared across all incident edge gadgets, while every other gadget variable is
private to one edge.

For each ordered constraint
$(z_1,\ldots,z_r,R)\in\mathcal C_e$, with
$R\subseteq\{0,1\}^r$, put exactly $M/q_e$ copies of
$
(\phi_e(z_1),\ldots,\phi_e(z_r),R)
$
in the output constraint list. The composition $G\circ P$ is the Boolean
constraint system on the variables just described and the multiset union of
these lists. It has arity at most six. Repetitions in tuples and duplicate
constraints are retained, as allowed by
[[def-assignment-tester-and-rejection-ratio]]. Every edge contributes exactly
$M$ constraints, so the total list has $|E(G)|M$ constraints.

For any labeling $\tau$ of the output variables, let $\tau_e$ be its
pullback to $V_e$ along $\phi_e$. Since duplicating every row of $T_e$
by the same factor preserves its violated fraction, for nonempty $E(G)$
$
\operatorname{UNSAT}_{\tau}(G\circ P)
=\frac{1}{|E(G)|}\sum_{e\in E(G)}
  \operatorname{UNSAT}_{\tau_e}(T_e).
$
Conversely, any collection of local gadget labelings that agrees on every
variable identification made by the maps $\phi_e$, including the two formal
pieces of a loop, combines into a unique output labeling, because all other
variables have edge-private names. If the original graph is edgeless, the
output has the empty constraint list and unsatisfiability zero under the
empty-system convention of [[def-assignment-tester-and-rejection-ratio]].

## Remarks

Dinur's §5.1 Definition 5.1 introduces edge circuits, shares their endpoint
variables across assignment-tester outputs, keeps local auxiliary variables
private, and assumes equal gadget constraint counts; Lemma 1.8 analyzes that
composition. This definition uses the same sharing pattern with the local
two-piece Boolean assignment tester and arity-six constraint systems. It
achieves equal counts explicitly by taking the least common multiple of the
positive finite gadget sizes. Arora–Barak Corollary 18.35 gives the qCSP view
of a PCP of proximity, and the proof of Lemma 18.30 uses shared codeword
blocks and edge-private proof variables. Those citations motivate this
construction; its local assignment-tester properties are supplied by
[[thm-two-piece-pcp-of-proximity]].

The construction is choice-free: the local tester and robust circuits are
deterministic, and the least common multiple and all variable renamings are
computed from finite explicit lists. No axiom of choice is used.
