---
id: def-assignment-tester-and-rejection-ratio
kind: definition
title: "Assignment tester and rejection ratio"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-constraint-graph-and-labeling-value, def-gap-preserving-csp-reduction, def-circuit-sat, def-boolean-circuit-size-depth-fanin-and-basis]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §2 Definition 2.2 (assignment tester), printed p. 9."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.3 Corollary 18.25 and §18.5 Definition 18.27, printed pp. 368-369."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

**Constraint systems of bounded arity.** Fix a finite alphabet $\Sigma_0$ containing distinguished, distinct symbols $0$ and $1$, identified with the Boolean bits, and an integer $q\ge2$. A **constraint system of arity at most $q$** over $\Sigma_0$ consists of a finite variable set $V$ together with a finite list of **constraints**, each constraint being an ordered tuple $(v_1,\dots,v_k)$ of variables of length $k\le q$, repetitions allowed, together with a relation $R\subseteq\Sigma_0^k$. A labeling $\sigma:V\to\Sigma_0$ **satisfies** such a constraint when $(\sigma(v_1),\dots,\sigma(v_k))\in R$, and
$$\operatorname{val}_\sigma(G):=\frac{\#\{\text{constraints satisfied by }\sigma\}}{\#\{\text{constraints of }G\}},$$
the fraction of satisfied constraints, defined to be $1$ when the list is empty; $\operatorname{UNSAT}_\sigma(G):=1-\operatorname{val}_\sigma(G)$ and $\operatorname{UNSAT}(G):=\min_\sigma\operatorname{UNSAT}_\sigma(G)$. For $q=2$ this is the value convention of [[def-constraint-graph-and-labeling-value]]: a constraint on two distinct variables is an edge carrying its relation in the displayed endpoint order, a constraint on a repeated variable is a loop, and duplicated constraints correspond to duplicated edges. There, and throughout, relations are explicit tables.

**Circuits with named inputs.** A Boolean circuit $C$ of size $m$ over the basis of [[def-boolean-circuit-size-depth-fanin-and-basis]] is given together with a specified list $X=(x_1,\dots,x_n)$ of $n$ of its input coordinates, so that an **input** is a string $a\in\{0,1\}^X\cong\{0,1\}^n$, and $C$ **accepts** $a$ when some assignment to the remaining input coordinates makes the designated output evaluate to one under the circuit gate rules, as in [[def-circuit-sat]]. Write $\operatorname{SAT}(C)\subseteq\{0,1\}^X$ for the set of accepted inputs. For $a\in\{0,1\}^X$ put
$$\delta\bigl(a,\operatorname{SAT}(C)\bigr):=\min_{a'\in\operatorname{SAT}(C)}\frac{\#\{i:a_i\ne a'_i\}}{n},$$
the relative Hamming distance on the named coordinates, and define $\delta(a,\operatorname{SAT}(C)):=1$ when $\operatorname{SAT}(C)=\varnothing$. For $n=0$ the cube $\{0,1\}^0$ has one element, so $\delta$ is $0$ or $1$ according to whether $C$ accepts; for $n\ge1$ and nonempty $\operatorname{SAT}(C)$ the minimum is over a nonempty finite set and always lies in $[0,1]$.

**Assignment tester.** An **assignment tester with alphabet $\Sigma_0$, arity bound $q$ and rejection ratio $\rho>0$** is a map $P$ sending each pair $(C,X)$ as above to a constraint system $G=P(C,X)$ of arity at most $q$ over $\Sigma_0$ whose variable set contains the named input coordinates, $X\subseteq V(G)$, such that with $Y:=V(G)\setminus X$:

- **(Perfect completeness.)** If $a\in\operatorname{SAT}(C)$ then there is $b\in\Sigma_0^{Y}$ with $\operatorname{UNSAT}_{a\cup b}(G)=0$.
- **(Proximity soundness.)** For every $a\in\{0,1\}^X$ and every $b\in\Sigma_0^{Y}$,
$$\operatorname{UNSAT}_{a\cup b}(G)\ \ge\ \rho\cdot\delta\bigl(a,\operatorname{SAT}(C)\bigr).$$

The two clauses are the completeness and soundness clauses of [[def-gap-preserving-csp-reduction]] read at the level of a fixed input: perfect completeness says that an accepted input extends to a fully satisfying labeling of the whole system, and proximity soundness says that the violation fraction witnessed by any labeling is at least $\rho$ times how far the given input is from acceptance. Since $\delta\le1$ always, the soundness clause is implied by the stronger requirement that every $a\notin\operatorname{SAT}(C)$ has $\operatorname{UNSAT}_{a\cup b}(G)\ge\rho$ for all $b$; the definition states the proportional form, which is what the amplification and composition arguments of this page use.

The definition itself imposes no bound on $|G|$ or on the time needed to produce it. When those are needed one says that the tester is **uniform** (or has **output size** $N$) if $P$ is computed by a deterministic algorithm running in time polynomial in the bit length of the explicit description of $(C,X)$ and, respectively, if the number of variables and constraints of $P(C,X)$ is at most $N$ times a constant depending only on the fixed parameters; all constant factors below depend only on $\Sigma_0,q$ and on the family of constructions, never on $n$ or $m$.

## Remarks

- **Distinct from a global gap.** A gap-preserving reduction compares $\operatorname{UNSAT}$ of a whole instance before and after the map; an assignment tester compares, for one fixed input prefix, the violations forced on an arbitrary auxiliary labeling against the distance of that prefix from the accepted set. The two notions meet when the prefix is the empty function, and the composition of testers is what makes the constant-query PCP with named input coordinates available.
- **The empty-$\operatorname{SAT}$ convention matters.** With $\delta:=1$ on $\operatorname{SAT}(C)=\varnothing$ the soundness clause forces a positive violation fraction for every input, including the degenerate case where $C$ accepts nothing; without the convention the distance to an empty set would be undefined and the clause vacuous. The same convention makes the instancewise bound of [[lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester]] non-vacuous for unsatisfiable circuits.
- **Multiplicity and order.** The constraint list is a list, not a set: two identical constraints count twice in the value fraction, exactly as duplicated edges do in the constraint-graph convention. The displayed order of the variables of a constraint is part of the data, and reversing a tuple transposes its relation; a tester must fix the order of every constraint it emits.
