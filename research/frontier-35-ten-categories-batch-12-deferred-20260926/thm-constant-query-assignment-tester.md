---
id: thm-constant-query-assignment-tester
kind: theorem
title: "A polynomial-size constant-query assignment tester exists"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-assignment-tester-and-rejection-ratio, lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester, lem-proximity-gap-amplification-preserves-input-coordinates, lem-exponential-base-assignment-tester-from-quadratic-oracles, def-constraint-graph-and-labeling-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §9 Theorem 9.1 and Corollary 9.3, printed pp. 29-33."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.3 and §18.5, printed pp. 368-375."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Fix the finite alphabet $\Sigma_{\rm out}:=\bigcup_{0\le k\le6}\{0,1\}^k$ of $127$ symbols of [[lem-proximity-gap-amplification-preserves-input-coordinates]], fix an integer $t\ge t_1$ and put $C:=C_t$, where $t_1$ and $C_t$ are the constants supplied there for testers of the fixed format "alphabet $\Sigma_{\rm out}$, arity two". Then there are absolute constants $\rho^\ast>0$ and $c<\infty$ with the following property. For every Boolean circuit $C$ of size $m$ with $n$ named inputs and input-coordinate list $X$ over the basis of [[def-boolean-circuit-size-depth-fanin-and-basis]] there is a constraint system $P^\ast(C,X)$ such that

- the variables of $P^\ast(C,X)$ include the named input coordinates $X$, labeled by two designated bits identified with $0,1\in\Sigma_{\rm out}$, and every constraint of $P^\ast(C,X)$ is a binary relation over $\Sigma_{\rm out}$;
- $P^\ast(C,X)$ is an assignment tester with alphabet $\Sigma_{\rm out}$, arity bound $2$ and rejection ratio $\rho^\ast$ in the sense of [[def-assignment-tester-and-rejection-ratio]]: every accepted input extends to a labeling with $\operatorname{UNSAT}=0$, and every input and auxiliary labeling satisfies $\operatorname{UNSAT}\ge\rho^\ast\delta$;
- $P^\ast(C,X)$ has at most $(m+n)^{c}$ constraints;
- the map $(C,X)\mapsto P^\ast(C,X)$ is deterministic and is computed in time polynomial in $m+n$, and it enumerates every choice of the underlying constructions instead of sampling it.

## Facts & Assumptions

**Given:** a Boolean circuit $C$ of size $m$ with $n$ named inputs and input-coordinate list $X$, the alphabet $\Sigma_{\rm out}$, the constants $t$, $C$ of the statement and the alphabet $\Sigma_0:=\{0,1\}^3\subseteq\Sigma_{\rm out}$.

[F1] The trivial tester of [[lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester]]: for every such pair $(C,X)$ there is a binary constraint graph $G_0$ over $\Sigma_0$ with $M_0\le(n+m)+4m+1$ ordinary edges, produced from the gate list deterministically in polynomial time, whose vertices include the input coordinates, in which every wire of $C$ contributes one loop so that each input coordinate has degree at least one, and which satisfies the completeness and proximity-soundness clauses of [[def-assignment-tester-and-rejection-ratio]] with ratio $1/M_0$, its input coordinates being labeled by the designated symbols $(0,0,0)$ and $(1,1,1)$ identified with the bits.

[F2] The amplification map of [[lem-proximity-gap-amplification-preserves-input-coordinates]]: applied to an assignment tester with alphabet $\Sigma_{\rm out}$, binary constraints and input-balanced output systems, it returns an assignment tester with the same named input coordinates labeled by bits, binary constraints over $\Sigma_{\rm out}$, perfect completeness, rejection ratio at least $\min\{2\rho,t^{-1}\}$ where $\rho$ is the given ratio, output size at most $C$ times the given output size, and input-balanced output systems again; the construction is deterministic and enumerates all its choices in time polynomial in the given output size.

[F3] Duplication of constraints: if a constraint list $G'$ is obtained from a list $G$ of $M$ constraints by appending copies of constraints of $G$, then for every labeling the number of violated constraints of $G'$ is at least the number of violated constraints of $G$ and the total number of constraints is $M+r$, so $\operatorname{UNSAT}_\sigma(G')\ge\frac{M}{M+r}\operatorname{UNSAT}_\sigma(G)$; in particular a tester with ratio $\rho$ stays a tester with every ratio at most $\frac{M}{M+r}\rho$ ([[def-constraint-graph-and-labeling-value]], [[def-assignment-tester-and-rejection-ratio]]).

[F4] The inner tester of [[lem-exponential-base-assignment-tester-from-quadratic-oracles]] has the fixed alphabet $\{0,1\}$, constant arity and an absolute size bound on inputs of bounded arity, so the composition and the arity conversion inside the map of [F2] use absolute constants and the format "alphabet $\Sigma_{\rm out}$, arity two" is closed under the map.

## Proof

**Proof technique:** constructive.

1.1 **The balanced base system.** Let $G_0$ be the system of [F1], with $M_0\ge1$ ordinary edges and, for $n\ge1$, $d_i\ge1$ incidences at the input coordinate $x_i$. Put $d:=\max_id_i$ when $n\ge1$ and $d:=1$ when $n=0$, so that $d\le M_0$ in either case; the case $n=0$ makes the balancing condition below vacuous and appends no copies. Let $G_1$ be $G_0$ with $d-d_i$ extra copies of the wire loop of $x_i$ appended for every $i$, so that every input coordinate has exactly $d$ incidences in $G_1$ and $M_1:=M_0+\sum_i(d-d_i)\le M_0+n d\le M_0(1+n)\le6(m+n+1)^2$. Then $G_1$ is an assignment tester over $\Sigma_{\rm out}$ with the same named input coordinates labeled by bits: perfect completeness holds because the satisfying labeling of [F1] satisfies the wire loop, and proximity soundness holds with ratio $1/M_1$, since for every labeling $\sigma=a\cup b$ the number $v_0$ of violated constraints of $G_0$ satisfies $v_0=M_0\operatorname{UNSAT}_\sigma(G_0)\ge\delta$, while $G_1$ has at least $v_0$ violated constraints among its $M_1$, so [F3] gives $\operatorname{UNSAT}_\sigma(G_1)\ge v_0/M_1\ge\delta/M_1$. [F1, F3, construct, algebra]

2.1 **The iteration.** Define $P_0:=G_1$ and, for $j\ge1$, let $P_j$ be the output of the map of [F2] applied to $P_{j-1}$; this is legitimate at every step because $P_{j-1}$ has the fixed alphabet $\Sigma_{\rm out}$, binary constraints and input-balanced output systems, the last property holding for $P_0$ by step 1.1 and for $j\ge2$ by the balance clause of [F2] applied at the previous step. Write $\rho_0:=1/M_1$ and let $\rho_j$, $M_j^\ast$ be the ratio and the output-size bound of $P_j$ for $j\ge1$; then [F2] gives $\rho_j\ge\min\{2\rho_{j-1},t^{-1}\}$ and $M_j^\ast\le C\,M_{j-1}^\ast$, so by induction on $j$ one has $\rho_j\ge\min\{2^j\rho_0,t^{-1}\}$ and $M_j^\ast\le C^jM_1$. [F2, step 1.1, algebra]

3.1 **A constant ratio at polynomial size.** Fix $K:=\lceil\log_2M_1\rceil$, so that $2^K\rho_0\ge2^K/M_1\ge1\ge t^{-1}$ and hence $\rho_K\ge t^{-1}=:\rho^\ast>0$. The size bound is $M_K^\ast\le C^KM_1\le C\,M_1^{1+\log_2C}$, which is at most $(m+n+1)^{c}$ for an absolute constant: for $m+n+1\ge6$ one has $M_1\le6(m+n+1)^2\le(m+n+1)^3$ and the exponent $c:=3(1+\log_2C)+1$ suffices, while for the finitely many smaller values of $m+n$ the number $M_1$ is bounded by the absolute constant $216$, so $M_K^\ast\le C\cdot216^{1+\log_2C}$ is also an absolute constant and is dominated by $(m+n+1)^{c}$ after enlarging $c$. [F2, step 2.1, algebra]

4.1 **Everything is enumerated.** By [F2] each iteration is deterministic, uses no randomness, and runs in time polynomial in the size of the system it is applied to; by step 2.1 the intermediate sizes are at most $M_K^\ast$, their number is $K\le\lceil\log_2(6(m+n+1)^2)\rceil=O(\log(m+n))$, and the sizes grow at most geometrically, so the total construction time is polynomial in $m+n$: all cloud ports, lazy-walk patterns, comparison slots, inner systems and arity gadgets are listed explicitly, and the running time is bounded by a polynomial in the final explicit output size. [F2, step 2.1, step 3.1, algebra]

5.1 **Conclusion.** By steps 1.1, 2.1, 3.1 and 4.1 the system $P^\ast(C,X):=P_K$ is a constraint system over the fixed alphabet $\Sigma_{\rm out}$ whose variables contain the named input coordinates $X$ labeled by bits and whose constraints are binary; its completeness and proximity-soundness clauses hold with the absolute ratio $\rho^\ast=t^{-1}>0$ in the sense of [[def-assignment-tester-and-rejection-ratio]]; it has at most $(m+n)^{c}$ constraints; and $(C,X)\mapsto P^\ast(C,X)$ is a deterministic polynomial-time map enumerating all its choices. This is the required family of assignment testers. [F1, F2, F4, step 1.1, step 3.1, step 4.1, discharge-construct] ∎

## Remarks

- **Why the balance hypothesis costs nothing.** The map of [[lem-proximity-gap-amplification-preserves-input-coordinates]] needs every named input coordinate to carry the same number of comparison slots, since the far case of its soundness analysis weighs the coordinates equally; the trivial tester of [[lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester]] is made input-balanced in step 1.1 by appending copies of the wire loops, which is exactly the reweighing by duplication used in the source, and the map returns input-balanced systems again, so the hypothesis is preserved along the iteration.
- **Where the polynomial degree comes from.** The number of steps is logarithmic, $K=\lceil\log_2M_1\rceil$, and each step multiplies the number of constraints by at most $C$, so the final size is $M_1^{1+\log_2C}$ up to a constant factor; the alphabet is fixed at $\Sigma_{\rm out}$ because each step composes with the constant-query inner tester of [[lem-exponential-base-assignment-tester-from-quadratic-oracles]], which is why the iteration can be repeated at all.
- **Relation to the source.** This is Corollary 9.3 of Dinur's paper, with the trivial tester of Section 7 replaced by the locally proved tester of [[lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester]] and the amplification step supplied by [[lem-proximity-gap-amplification-preserves-input-coordinates]]; the size and time accounting is the content of [[lem-tester-size-and-construction-time-are-polynomial]].
