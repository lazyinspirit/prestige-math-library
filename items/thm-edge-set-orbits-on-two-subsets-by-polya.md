---
id: thm-edge-set-orbits-on-two-subsets-by-polya
kind: theorem
title: "Pólya enumeration counts edge-set orbits on the 2-subsets of [n]"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-weighted-pattern-inventory-formula,
       thm-two-element-subsets-count]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Section 15.5: Applications of Pólya's Enumeration Formula"
      url: "https://appliedcombinatorics.org/book/s_polya_apps.html"
pipeline_run: null
---

## Statement

Let $E_n=[n]^{2}$ be the set of two-element subsets of $[n]$, and let $S_n$
act on $E_n$ by

$$\sigma \cdot \{i,j\} := \{\sigma(i),\sigma(j)\}.$$

If

$$F_n(x):=\sum_{O} x^{|A|},$$

where the sum runs over the $S_n$-orbits $O$ of edge-sets $A \subseteq E_n$ and,
for each orbit $O$, $A$ denotes any member of $O$ (so $|A|$ is well defined),
then

$$F_n(x)=Z_{S_n \curvearrowright E_n}(1+x,1+x^2,\dots,1+x^{|E_n|}).$$

## Facts & Assumptions

**Given:** an integer $n \ge 0$.

[F1] A subset $A \subseteq E_n$ is exactly a $0$-$1$ colouring of the pair set $E_n$: colour a pair black when it lies in $A$ and white otherwise.

[L1] The pair set $E_n$ is finite, with $|E_n|=\binom{n}{2}$ ([[thm-two-element-subsets-count]]).

[L2] Weighted Pólya enumeration evaluates the orbit inventory at the power sums of the colour weights ([[thm-weighted-pattern-inventory-formula]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], edge-sets on $[n]$ are exactly colourings of the finite set $E_n$ by the two colours white and black. The induced action of $S_n$ on those colourings is exactly the relabelling action on edge-sets. [F1, L1]

2.1 Give white weight $1$ and black weight $x$. Then the weight of a colouring corresponding to $A \subseteq E_n$ is precisely $x^{|A|}$. The $d$-th power sum of the two colour weights is therefore $1^d+x^d=1+x^d$. [step 1.1, algebra]

3.1 Apply [L2] to the action of $S_n$ on the colourings of $E_n$. By step 2.1, the resulting pattern inventory is exactly $Z_{S_n \curvearrowright E_n}(1+x,1+x^2,\dots,1+x^{|E_n|})$, and by the definition of weight it is also exactly $\sum_O x^{|A|}=F_n(x)$, where for each orbit $O$ the symbol $A$ denotes any member of $O$. [step 2.1, L2] ∎
