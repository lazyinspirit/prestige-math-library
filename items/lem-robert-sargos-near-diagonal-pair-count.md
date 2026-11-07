---
id: lem-robert-sargos-near-diagonal-pair-count
kind: lemma
title: "Robert–Sargos Near-Diagonal Pair Count"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Olivier Robert and Patrick Sargos, “Three-dimensional Exponential Sums with Monomials”"
      url: "https://perso.univ-st-etienne.fr/rool6510/robert-2006-crelle.pdf"
      locator: "§6.1 equation (6.4), as identified by Cen et al. (4.16); primary text not read. The elementary proof below is local, not an imported source proof."
    - title: "Xi Cen et al., “A New Bound for the Gauss Circle Problem”"
      url: "https://arxiv.org/pdf/2610.21730v1"
      locator: "§4.16 near-diagonal monomial count for exponents 2,7; §4.17 instead uses Robert–Sargos Lemma8 as a double-large-sieve input."
verification:
  precheck: n/a
---

## Statement

Fix nonzero real exponents $\alpha,\beta$. For real $M,N\ge1$ and $\Delta\ge0$, let $B_{\alpha,\beta}(M,N,\Delta)$ count ordered positive-integer quadruples $(m_1,m_2,n_1,n_2)$ with $M\le m_1,m_2<2M$, $N\le n_1,n_2<2N$, and
$$\left|(m_1/M)^\alpha(n_1/N)^\beta-(m_2/M)^\alpha(n_2/N)^\beta\right|\le\Delta.$$
Then
$$B_{\alpha,\beta}(M,N,\Delta)\ll_{\alpha,\beta}MN\log(2\min(M,N))+\Delta M^2N^2.$$
Consequently, for every $\varepsilon>0$,
$$B_{\alpha,\beta}(M,N,\Delta)\ll_{\alpha,\beta,\varepsilon}(MN)^\varepsilon\bigl(MN+\Delta(MN)^2\bigr).$$
The same estimates hold when the two dyadic ranges are replaced by any fixed positive rectangular enlargements $[cM,CM]$ and $[cN,CN]$, with constants also depending on $0<c<C<\infty$. In particular they supply the normalized exponents-$2,7$ count used at Cen et al. (4.16).

## Statement references

[Olivier Robert and Patrick Sargos, “Three-dimensional Exponential Sums with Monomials”](https://perso.univ-st-etienne.fr/rool6510/robert-2006-crelle.pdf)

[Xi Cen et al., “A New Bound for the Gauss Circle Problem”, equation (4.16)](https://arxiv.org/pdf/2610.21730v1)

## Facts & Assumptions

**Given:** Fixed nonzero real $\alpha,\beta$, positive scales $M,N\ge1$, tolerance $\Delta\ge0$, and the finite integer ranges in the Statement. Only rational reduction, finite counting and the real mean value theorem are used.

## Proof

1.1 Write uniquely $m_1=ga$, $m_2=gb$ with $(a,b)=1$, and $n_2=hc$, $n_1=hd$ with $(c,d)=1$. Both ratios $a/b,c/d$ lie in $[1/2,2]$. Dividing the displayed near-equality by $(m_2/M)^\alpha(n_1/N)^\beta$, whose positive value and inverse are bounded in terms of the fixed exponents, shows $|(a/b)^\alpha-(c/d)^\beta|\le C_{\alpha,\beta}\Delta$. [given, algebra]

2.1 Group primitive pairs $(a,b)$ by the dyadic height $A\le\max(a,b)<2A$, where $A=2^i$, $i\ge0$, and $A\le2M$. There are at most $4A^2$ such pairs. Distinct reduced fractions in this class differ by at least $1/(4A^2)$, because their cross numerator is a nonzero integer and both denominators are less than $2A$. On $[1/2,2]$ the function $u\mapsto u^\alpha$ is monotone and its derivative has absolute value bounded below by a positive constant depending only on $\alpha$. The mean value theorem thus separates its images by at least $c_\alpha A^{-2}$. The analogous height-$D$ fractions $(c,d)$ have at most $4D^2$ elements and their $\beta$-power images are separated by at least $c_\beta D^{-2}$. [step 1.1, algebra]

3.1 For each height-$A$ fraction, an interval of length $2C_{\alpha,\beta}\Delta$ contains at most $1+C'_{\alpha,\beta}\Delta D^2$ height-$D$ images. Interchanging the two families as well gives at most $C_{\alpha,\beta}(\min(A^2,D^2)+\Delta A^2D^2)$ close primitive fraction pairs. A fixed $(a,b)$ has at most $2M/A$ possible positive multipliers $g$, and a fixed $(c,d)$ at most $2N/D$ multipliers $h$. Thus the quadruples in this height pair number at most $C_{\alpha,\beta}MN\bigl(\min(A/D,D/A)+\Delta AD\bigr)$. This counts all ordered pairs, including coincidences; no coprime or diagonal contribution is discarded. [step 1.1, step 2.1, algebra]

4.1 Sum over $A=2^i\le2M$ and $D=2^j\le2N$. For fixed $i$, $\sum_j2^{-|i-j|}\le3$; summing over the shorter index range therefore gives $\sum_{i,j}\min(A/D,D/A)\le C\log(2\min(M,N))$. Also $\sum_i A\le4M$ and $\sum_jD\le4N$. The bound of step 3.1 consequently sums to $C_{\alpha,\beta}\bigl(MN\log(2\min(M,N))+\Delta M^2N^2\bigr)$, as asserted. [step 3.1, algebra]

5.1 Since $\log(2\min(M,N))\le C_\varepsilon(MN)^\varepsilon$ and $(MN)^\varepsilon\ge1$, the epsilon form follows. All arguments include $\Delta=0$, $M=1$ or $N=1$, and negative nonzero exponents. For fixed enlarged ranges the ratios instead lie in $[c/C,C/c]$; their power derivatives still have fixed positive lower bounds, their heights are at most $CM,CN$, and their multiplier bounds are $CM/A,CN/D$. Repeating the same finite count proves the stated enlarged-range version. An empty integer range contributes zero. [step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎

## Source boundary and actual consumer

The cached Cen et al. text was read at equation (4.16) and its immediate argument: its first estimate cites Robert–Sargos §6.1 (6.4) with exponents $2,7$, whereas Lemma8 at Cen (4.17) is a double-large-sieve estimate. The earlier Lemma8 identification of this pair-count item was incorrect. The primary Robert–Sargos article has not been read; no claim about its full generality or its proof is made. The local proof above independently establishes the complete displayed count, in greater exponent generality than its $2,7$ application, without using the three-dimensional monomial spacing theorem or a large sieve.
