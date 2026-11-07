---
id: ex-menon-later-frequency-character-uniformity
kind: example
title: Menon's later frequency regimes for every character
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
proof_strategy: direct
axiom_use: No choice axiom is used; only finite bin and threshold families occur.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - lem-menon-later-prime-frequency-summation
  - lem-dirichlet-polynomial-threshold-partition-is-finite
  - lem-dirichlet-character-arithmetic-function-characterization
  - lem-dirichlet-character-values
  - thm-canonical-prime-factorisation
sources:
  references:
    - title: Siddarth Menon, Improved bounds for multiplicative functions in almost all short intervals
      url: https://arxiv.org/pdf/2607.15574v1
      locator: Section 2.2; Proposition 3.1 equation (3.5) and Remark 3.6
---

## Example

Use the parameters, increasing disjoint prime ranges and both spacing assumptions of the later-frequency summation lemma. In particular $\kappa=(2^{25}-2)^{-1}$, $\varepsilon=\kappa/2$, $\eta=\kappa/8$, $\alpha_j=\varepsilon/2-\eta(1+1/(2j))$, and $H_j=j^2P_1^{\kappa/24}/(\log Q_1)^{1/3}$ are real numbers. Fix $B>0$, any positive integer $q\le(\log X)^B$, any Dirichlet character $\chi$ modulo $q$, and $z\in\{-1,1\}$. Let $S$ be the positive integers having a prime divisor in every $[P_i,Q_i]$, $1\le i\le J$, and put
$$F(s)=\sum_{\substack{X\le n\le3X\\n\in S}}\chi(n)z^{\Omega(n)}n^{-s},\qquad Q_{j,v}(s)=\sum_{\substack{P_j\le p\le Q_j\\e^{v/H_j}\le p<e^{(v+1)/H_j}}}z\chi(p)p^{-s}.$$
For $1\le T_0\le T\le X$, let $\mathcal T_j$ be the set of $t\in[T_0,T]$ for which $j$ is the smallest index such that every nonempty bin satisfies $|Q_{j,v}(1+it)|\le e^{-\alpha_jv/H_j}$. Then, uniformly in every displayed character and modulus, for $2\le j\le J$,
$$\int_{\mathcal T_j}|F(1+it)|^2dt\ll\frac{1+T/X}{j^2P_1}+\frac1{H_j}+\frac1{P_j},\qquad \sum_{j=2}^J\int_{\mathcal T_j}|F(1+it)|^2dt\ll\frac{1+T/X}{P_1}+\frac{(\log Q_1)^{1/3}}{P_1^{\kappa/24}}.$$
This includes principal and imprimitive characters and $q=1$. The same assertions hold with $[T_0,T]$ replaced by $[-T,-T_0]$, using the threshold sets at those actual negative frequencies, or by any finite union of subintervals of $[-T,T]$. No conjugation symmetry is assumed. If $J=1$, there are no later regimes.

Menon's Section 3 choices are $X_0=X$, $P_j=\exp(j^{4j}(\log Q_1)^{j-1}\log P_1)$ and $Q_j=\exp(j^{4j+2}(\log Q_1)^j)$, with $J$ the largest permitted index for which $Q_j\le\exp(\log X/\log\log X)$, retaining the stated spacing assumptions and $3\le P_1<Q_1$. The estimates above apply to every such admissible selection; the formulas alone are not a replacement for checking those assumptions. The result is exactly the later-regime contribution, and does not bound frequencies at which no index passes its threshold test.

## Example references

[[lem-menon-later-prime-frequency-summation|later-regime estimate with exact spacing hypotheses]]

## Facts & Assumptions

**Given:** The displayed parameters, ranges, character, sign and frequency sets.

[F1] The later-frequency lemma proves both bounds for the given real widths, coefficient identities, and compact finite frequency sets with a small current bin family and a large preceding bin. [[lem-menon-later-prime-frequency-summation]]

[F2] Finite Boolean combinations of the polynomial threshold conditions on a compact interval are finite unions of intervals and points; endpoint changes do not alter integrals of continuous functions. [[lem-dirichlet-polynomial-threshold-partition-is-finite]]

[F3] Characters are multiplicative, including on nonunits, and have modulus at most one. [[lem-dirichlet-character-arithmetic-function-characterization]] [[lem-dirichlet-character-values]]

[F4] Prime factorization gives $\Omega(mp)=\Omega(m)+1$ for any prime $p$. [[thm-canonical-prime-factorisation]]

## Verification

1.1 Let $S_j$ require a prime factor in every range except the $j$th. Take $a_n=\mathbf1_S(n)\chi(n)z^{\Omega(n)}$, $b_{j,m}=\mathbf1_{S_j}(m)\chi(m)z^{\Omega(m)}$, and $c_{j,p}=z\chi(p)$. Their moduli are at most one. For $p\in[P_j,Q_j]$, the disjointness of the prime ranges gives $\mathbf1_S(mp)=\mathbf1_{S_j}(m)$. Consequently [F3–F4] give $a_{mp}=b_{j,m}c_{j,p}$ for $p\nmid m$ (indeed for all $m$). The support condition on $a_n$ also holds. This does not require primitivity or nonprincipality, and includes $\chi(p)=0$. [F3, F4, given, construct, algebra]

1.2 By [F2], $\mathcal T_j$ is a finite union of intervals and points. Its closure $E_j$ in the compact frequency domain differs only by finitely many endpoints. The current weak inequalities hold on $E_j$ by continuity. At every point of $\mathcal T_j$ some preceding bin exceeds its threshold, since $j$ was minimal. The union of the finitely many preceding weak threshold sets is closed and contains $\mathcal T_j$, so it also contains $E_j$. Thus every point of $E_j$ has at least one preceding bin at or above threshold. This verifies precisely [F1], including at closure endpoints. [F2, given, construct, algebra]

2.1 Apply [F1] to these $E_j$ with $c=3$ and the coefficients of step 1.1; then remove the finitely many extra endpoints using [F2]. This proves both estimates. The arguments used only $|\chi(n)|\le1$ and multiplicativity and hence are uniform even without a bound on $q$; in particular they hold for the parent's fixed-$B$ range. Applying the same reasoning on the specified negative or mixed frequency domain proves those versions without identifying $F(1-it)$ with $\overline{F(1+it)}$. No choice principle is used in the finite closures, covers or sums. [F1, F2, step 1.1, step 1.2, given, algebra] ∎

## Remarks

This supplies equation (3.5) and its sum only. The residual set, the arbitrary-$R$ Parseval interface, and the long-average and parent-theorem assemblies remain separate obligations. The parent's Countable Choice convention is retained when this choice-free estimate is used there.
