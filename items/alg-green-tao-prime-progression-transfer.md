---
id: alg-green-tao-prime-progression-transfer
kind: algorithm
title: "Finite witness extraction for the Green–Tao transfer"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§9, proof of Theorem 1.1, printed pp. 523–524; positive count, removal of the zero-difference term, and interval support"
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, The Green–Tao theorem: an exposition"
      url: "https://arxiv.org/pdf/1403.2957"
      locator: "§8, proof of Theorem 1.1, printed p. 22; finite search after the relative progression count"
---
## Definition

Fix an integer $k\ge3$, a prime $p$, and a real number $0<\epsilon<1/(4k)$. Write $F_p=\mathbb Z/p\mathbb Z$ and represent its elements by $0,1,\ldots,p-1$. Let

$$I_{p,\epsilon}=\{n\in\{0,1,\ldots,p-1\}:\lceil\epsilon p\rceil\le n\le\lfloor2\epsilon p\rfloor\}.$$

For a function $f:F_p\to[0,\infty)$, define its normalized $k$-term progression count and its zero-difference contribution by

$$\Lambda_{k,p}(f)=\frac1{p^2}\sum_{x,r\in F_p}\prod_{j=0}^{k-1}f(x+jr),\qquad D_{k,p}(f)=\frac1{p^2}\sum_{x\in F_p}f(x)^k.$$

Given $f$ supported on $I_{p,\epsilon}$, execute the following finite procedure.

1. Compute $\Lambda_{k,p}(f)$ and $D_{k,p}(f)$. If $\Lambda_{k,p}(f)\le D_{k,p}(f)$, return `no-witness-at-p`.
2. Enumerate the pairs $(x,r)$ in lexicographic order using the standard representatives, with $r\in\{1,\ldots,p-1\}$. For each pair, compute $x+jr$ in $F_p$ for $j=0,\ldots,k-1$.
3. Return the first pair for which every $x+jr$ lies in $I_{p,\epsilon}$ and $f(x+jr)>0$. If the finite enumeration ends without such a pair, return `no-witness-at-p`.

The procedure uses only finite sums, comparisons, and a finite search. Its successful use in the prime progression argument requires the relative transfer estimates and the majorant hypotheses; separate proved results establish when its failure output cannot occur.

## Definition references

[Green and Tao, §9, proof of Theorem 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Conlon, Fox, and Zhao, §8](https://arxiv.org/pdf/1403.2957)
