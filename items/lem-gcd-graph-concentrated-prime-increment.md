---
dependency_level: 3
id: lem-gcd-graph-concentrated-prime-increment
kind: lemma
title: Quality increment for a concentrated large prime
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-finite-weighted-gcd-graph
- lem-gcd-graph-quality-selection-and-pruning
- lem-gcd-graph-generic-prime-increment
- lem-gcd-graph-unbalanced-valuation-edge-bound
sources:
  references:
  - title: D. Koukoulopoulos and J. Maynard, On the Duffin–Schaeffer conjecture, Annals192(2020),251–307
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
proof_strategy: direct
---

## Statement

If $G$ is a nontrivial finite weighted GCD graph and $p\in R(G)$ satisfies $p\ge H_0$, there is a nontrivial GCD subgraph $G'$ recording exactly the additional prime $p$ such that $R(G')\subseteq R(G)\setminus\{p\}$ and $q(G')\ge q(G)$.

## Statement references

[Koukoulopoulos–Maynard, §§6–14](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

## Facts & Assumptions

**Given:** All the hypotheses and notation in the Statement. All graph sums and prime data are finite; all constants are absolute.

[F1] The full stated result or definition in [[def-finite-weighted-gcd-graph]] is available, with its hypotheses and constants.

[F2] The full stated result or definition in [[lem-gcd-graph-quality-selection-and-pruning]] is available, with its hypotheses and constants.

[F3] The full stated result or definition in [[lem-gcd-graph-generic-prime-increment]] is available, with its hypotheses and constants.

[F4] The full stated result or definition in [[lem-gcd-graph-unbalanced-valuation-edge-bound]] is available, with its hypotheses and constants.

## Proof

1.1 For every p in R with p≥H_0, there is a positive-mass subgraph recording p, removing it from R, and having quality at least q(G).
First apply the small-set pruning conclusion of [F2] with eta=C_0/p. Since $(C_0/p)^{9/5}\le1/(2p^{3/2})$ (equivalently $2\cdot10^{72}\le p^{3/10}$), we may arrange
$$
\mu(E\cap(A\times B))\le\mu(E)/(2p^{3/2}) \quad\text{when both relative side masses are at most }C_0/p. \tag{7}
$$
Quality does not decrease. If this removes p from R, record it with f=g=0 by the edge-gcd condition, and finish. Otherwise apply the dichotomy of [[lem-gcd-graph-generic-prime-increment]]. Its increment alternative finishes. In the concentrated alternative choose k with alpha_k,beta_k≥1-C_0/p.
Apply [[lem-gcd-graph-unbalanced-valuation-edge-bound]] with r=1 in both orientations. Either an increment finishes, or the edges from the k-class to classes of distance at least 2, and vice versa, each have relative mass at most 1/(4p^s). Equation (7) bounds all edges having neither endpoint in the k-class by 1/(2p^(3/2)). Retain just the five rectangles (k,k), (k,k+1), (k+1,k), (k,k-1), (k-1,k), omitting negative classes. Their union E* has relative mass
$$
\rho\ge1-\frac1{2p^s}-\frac1{2p^{3/2}} \ge(1-p^{-s})^{2/3}>0. \tag{8}
$$ [given, F1, F2, F3, F4, algebra]

2.1 For the last inequality, concavity gives $(1-x)^{2/3}\le1-2x/3$, and $p^{-3/2}/2\le p^{-s}/6$ follows from $p^{7/15}\ge3$. The edge-only restriction has q*/q=rho^10≥(1-p^-s)^(20/3).
Form G+ by taking the vertex unions V_k∪V_(k+1), W_k∪W_(k+1), keeping E* between them, and recording f(p)=g(p)=k. This is a valid GCD graph: the retained edges include no (k+1,k+1) rectangle, so every retained gcd has exact p-valuation k. Equal f,g require divisibility only on vertices, not exact valuation.
If k=0, all E* lies in E+, though G* may have additional isolated vertices. Hence $q(G+)/q(G*)\ge(1-p^{-s})^{-10}$, and (8) finishes. An equality assertion about coinciding vertex sets would be unnecessary and generally false.
For k≥1 put $A=p\alpha_{k-1}$, $B=p\beta_{k-1}$, so 0≤A,B≤C_0. The three edge rectangles E+, E_(k,k-1), E_(k-1,k) partition E*. Write their relative E* masses as u,v,w. the quality identity, (8), and side mass bounds give
$$
\frac{q(G+)}{q(G)}\ge \frac{u^{10}}{(1-A/p)^9(1-B/p)^9(1-1/p)^2(1-p^{-s})^{10/3}},
$$
$$
\frac{q(G_{k,k-1})}{q(G)}\ge\frac{v^{10}p^{10}}{B^9(1-p^{-s})^{10/3}},\quad \frac{q(G_{k-1,k})}{q(G)}\ge\frac{w^{10}p^{10}}{A^9(1-p^{-s})^{10/3}}. \tag{9}
$$ [given, F1, F2, F3, F4, algebra]

3.1 The last two are asserted only when the corresponding edge mass is positive, which implies B>0 or A>0. At least one of these quality ratios exceeds 1, because the sum of their tenth-root thresholds is
$$
S=\left[(1-A/p)^{9/10}(1-B/p)^{9/10}(1-1/p)^{1/5} +\frac{B^{9/10}+A^{9/10}}p\right](1-p^{-s})^{1/3}<1.
$$
To check this strictly, put X=(9A+9B+2)/(10p). Then e^-X≤1-X+X²/2 and X²/2≤10^81/p². Also weighted AM–GM gives A^(9/10)≤(9A+1)/10 and its B version. Therefore
$$
S\le(1+10^{81}/p^2)(1-p^{-s})^{1/3} \le(1+10^{81}/p^2)(1-p^{-s}/3)<1,
$$
where the strict final inequality follows already from $p^{29/30}>3\cdot10^{81}$, valid for p≥H_0. Since u+v+w=1, one threshold is strictly exceeded. Choose the corresponding graph in (9). Each is a genuine GCD subgraph, has positive quality and adds only p, so its residual prime set is contained in R without p. This completes the concentrated transition.
 [given, F1, F2, F3, F4, algebra] ∎
