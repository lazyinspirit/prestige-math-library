---
id: ex-counting-measure-as-haar-measure-on-a-discrete-group
kind: example
title: Counting measure as Haar measure on a discrete group
deps: [def-left-haar-integral-and-left-haar-measure]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13
      url: https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
proof_strategy: direct
---

## Example

On any discrete group $G$, including an uncountable one, counting measure $\mu(E)=|E|$ for finite $E$ and $\mu(E)=\infty$ otherwise is both left and right Haar. For $f\in C_c(G)$ its integral is the finite sum $\sum_{x\in\operatorname{supp}f}f(x)$.

## Facts & Assumptions

**Given:** A discrete group $G$.

[F1] Haar measure means nonzero invariant Borel measure, compact-finite and regular. ([[def-left-haar-integral-and-left-haar-measure]])

## Verification

**Proof technique:** direct.

1.1 Every subset of $G$ is open and Borel. A compact subset is finite, since its cover by singleton open sets has a finite subcover; a finite set is compact by selecting one member of a cover for each point. Disjoint countable additivity of counting follows as follows: if the union is finite, cardinalities add finitely; if it is infinite, either a member is infinite or the finite partial sums of the cardinalities are unbounded, and both sides are infinity. [F1]

2.1 Outer regularity holds by taking the open superset $E$ itself. The supremum of the sizes of finite subsets of $E$ is $|E|$ if finite and infinity otherwise, since an infinite set has $n$ distinct elements for each finite $n$. This proves open inner regularity. Compact finiteness follows from step 1.1 and $\mu(\{e\})=1$ proves nonzeroness. The bijections $x\mapsto ax$ and $x\mapsto xa$ preserve finite cardinality and infinitude, proving both invariances. [F1, step 1.1]

3.1 A compactly supported function has finite support, so simple-function integration gives the displayed finite sum. For instance $f=2\mathbf1_{\{e\}}$ has $\int f\,d\mu=2$ and $\int L_af\,d\mu=\int2\mathbf1_{\{a\}}\,d\mu=2$ for every $a$. For the zero function the empty sum is zero. [step 1.1, step 2.1] ∎

## Sources

Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13. Local argument and conventions as displayed above.
