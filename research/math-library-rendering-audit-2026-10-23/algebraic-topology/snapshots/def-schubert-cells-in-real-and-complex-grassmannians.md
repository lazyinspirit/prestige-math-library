---
id: def-schubert-cells-in-real-and-complex-grassmannians
kind: definition
title: Schubert cells in real and complex Grassmannians
status: published
origin: pipeline
deps: [def-stiefel-space-grassmannian-and-tautological-bundle]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Proposition 1.17"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Schubert symbols and cells, printed pp.33–35"
    - title: "Milnor and Stasheff, Characteristic Classes, §6"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Schubert symbols and characteristic cells, printed pp.73–80"
---

## Definition

Fix the coordinate flag
$0\subset\mathbb F^1\subset\cdots\subset\mathbb F^N$. A **Schubert symbol**
for $\operatorname{Gr}_n(\mathbb F^N)$ is a strictly increasing sequence
$a=(a_1<\cdots<a_n)$ with $1\leq a_i\leq N$. Its **Schubert cell** is

$$e(a)=\{W:\dim(W\cap\mathbb F^{a_i})=i,\ \dim(W\cap\mathbb F^{a_i-1})=i-1\text{ for every }i\}.$$

Every $W\in e(a)$ has a unique pivot-normalized basis

$$v_i=e_{a_i}+\sum_{\substack{j<a_i\\j\notin\{a_1,\ldots,a_{i-1}\}}}x_{ij}e_j,$$

after using earlier pivot rows to clear their columns. The free coordinates
number

$$d(a)=\sum_{i=1}^n(a_i-i),$$

so $e(a)\cong\mathbb F^{d(a)}$. Its real dimension is $d(a)$ for
$\mathbb F=\mathbb R$ and $2d(a)$ for $\mathbb F=\mathbb C$.
Equivalently, the integers $a_i-i$, read in reverse order, form a partition
fitting the $n$ by $(N-n)$ rectangle. These spaces use the Grassmannian
topology fixed in
[[def-stiefel-space-grassmannian-and-tautological-bundle]].
For $n=0$, the unique symbol is the empty sequence, the displayed sum is the
empty sum $0$, and its Schubert cell is the one-point Grassmannian.
