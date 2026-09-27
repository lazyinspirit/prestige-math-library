---
id: def-hadamard-linearity-constraint-system
kind: definition
title: "Hadamard linearity constraint system"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-assignment-tester-and-rejection-ratio, def-linearity-test]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.1 Definition 18.22 and Theorem 18.23, printed pp. 363-364."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §5 (Hadamard encoding and linearity tests), printed pp. 17-18."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Definition

Let $n\ge0$ and let $f:\mathbb F_2^n\to\mathbb F_2$ be a fixed table, in the conventions of [[def-linearity-test]]. The **Hadamard linearity constraint system** $\operatorname{Lin}_n(f)$ is the constraint system of arity at most $3$ over the alphabet $\mathbb F_2$ of [[def-assignment-tester-and-rejection-ratio]] whose variables are the table coordinates $z\in\mathbb F_2^n$ — one variable per cube point, so $V=\mathbb F_2^n$ — and whose constraint list contains, **once for each ordered pair** $(x,y)\in\mathbb F_2^n\times\mathbb F_2^n$, the ternary constraint with variable tuple $(x,\ y,\ x+y)$ and relation
$$R_{\rm lin}:=\bigl\{(a,b,c)\in\mathbb F_2^3:\ a+b=c\bigr\},$$
the addition being modulo two. The list is a list, so constraints belonging to different pairs are counted separately even when they coincide as tuples.

Since $x,y$ range over the whole cube, the variable tuple of a constraint may repeat coordinates — for instance $(0,0,0)$ for the pair $(0,0)$, and $(x,x,0)$ for $(x,x)$ — and the satisfaction rule of a constraint system is the substitution rule: the tuple $(x,y,x+y)$ is satisfied by a labeling $\sigma:\mathbb F_2^n\to\mathbb F_2$ exactly when $\sigma(x)+\sigma(y)=\sigma(x+y)$, coinciding coordinates being read as the single symbol assigned to them. The same substitution covers the degenerate cases: the pair $(0,0)$ forces $\sigma(0)=0$, and for $n=0$ the cube has one point, the list has the single constraint with tuple $(0,0,0)$, and the system is satisfied exactly by the table $f(0)=0$.

**Value and rejection probability.** For a labeling $\sigma$ of $\operatorname{Lin}_n(f)$ — that is, an arbitrary table $\sigma:\mathbb F_2^n\to\mathbb F_2$ — the fraction $\operatorname{val}_\sigma$ counts the satisfied constraints among the $4^n$ listed pairs, and $\operatorname{UNSAT}_\sigma=1-\operatorname{val}_\sigma$. For the *fixed* table $f$ we write
$$\varepsilon_{\rm lin}(f):=1-\operatorname{val}_f\bigl(\operatorname{Lin}_n(f)\bigr)=\frac{\#\{(x,y):f(x)+f(y)\ne f(x+y)\}}{4^n},$$
the **rejection probability of the linearity system**, which is exactly the BLR rejection probability of $f$ in the sense of [[def-linearity-test]]: the pair $(x,y)$ is drawn uniformly in the test and the listed constraint at that pair is violated precisely when the test rejects. In particular a uniformly random constraint of the system involves the three coordinates $x,y,x+y$ and is checked with three table queries and $2n$ random bits.

**Perfect completeness.** Every linear table passes. If $f=\ell_u$ for some $u\in\mathbb F_2^n$, then for all $x,y$ the distributivity of the dot product over addition in $\mathbb F_2$ gives $\ell_u(x)+\ell_u(y)=u\cdot x+u\cdot y=u\cdot(x+y)=\ell_u(x+y)$, so every constraint of the system is satisfied and $\varepsilon_{\rm lin}(\ell_u)=0$. The system is explicit: its $4^n$ constraint tuples and its single fixed relation table $R_{\rm lin}$ are enumerated by the displayed rule, and its size is determined by $n$ alone.

## Remarks

- **One constraint per test, not one per violation pattern.** The system records multiplicity: the pairs $(x,y)$ and $(y,x)$ give two constraints, and a pair with $x=y$ still gives one constraint. This is what makes $\varepsilon_{\rm lin}(f)$ equal — not merely comparable — to the rejection probability of the sampled BLR test, and it is the convention used by the exponential-base tester of [[lem-exponential-base-assignment-tester-from-quadratic-oracles]], where every random choice of the verifier is materialized as one constraint.
- **Relation to the proximity definition.** The system constrains *table coordinates*, not inputs of a circuit: in the language of [[def-assignment-tester-and-rejection-ratio]] the whole cube of table positions is the auxiliary part of the variable set, and the rejection probability is the quantity the soundness clause controls. The distance of a table from the linear tables is a property of the labeling of these coordinates, and [[thm-linearity-test-rejects-proportionally-to-distance]] is the statement that the violated fraction is at least that distance.
- **No random sampling is part of the definition.** Sampling the pair $(x,y)$ is a way of estimating the value of an explicit, fully listed system; the system itself is deterministic and independent of any randomness, and it is produced by enumerating the $4^n$ pairs, which is polynomial in the size of the listing but exponential in $n$ as a description of $f$ requires.
