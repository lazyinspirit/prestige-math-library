---
id: fs-telgarsky-unrestricted-gate-parameter-separation
kind: false-statement
title: "The unrestricted all-parameter depth separation is false"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-relu-network, lem-relu-tent-iterate-depth, lem-bernstein-polynomial-lipschitz-error]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Matus Telgarsky, Benefits of Depth in Neural Networks, Theorem 1.1 and §3.4"
      url: "https://proceedings.mlr.press/v49/telgarsky16.pdf"
      locator: "Theorem 1.1, p. 2, and proof in §3.4, pp. 9–10."
    - title: "Matus Telgarsky, Deep Learning Theory, §5.2"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "§5.2, tent-map depth separation and crossing-count proof."
---

## Statement

For every integer $k\ge1$ and dimension $d\ge1$, the stated Telgarsky bound asserts that there is a function $f(x)=h^{k^3+4}(x_1)$, where $h(z)=\rho(2\rho(z)-4\rho(z-1/2))$, computed by a ReLU network with $2k^3+8$ layers, $3k^3+12$ computation nodes, and $4+d$ distinct parameters, such that for every positive integer triple $t,\alpha,\beta$ its $L^1([0,1]^d)$ distance from every function in the following union is at least $1/64$: functions computed in at most $k$ computational layers by networks with at most $2^{k/(t\alpha\beta)}$ gate nodes whose gates are $(t,\alpha,\beta)$-semi-algebraic; and sums of at most $t$ affine-threshold decision trees, each with at most $2^{k^3/t}$ total nodes, including leaves. Here a $(t,\alpha,\beta)$-semi-algebraic gate is a map $g:\mathbb R^q\to\mathbb R$ expressible as a finite sum of polynomial pieces $p_j$ of degree at most $\beta$, each multiplied by indicators of conjunctions of signs of at most $t$ predicate polynomials $q_i$ of degree at most $\alpha$; an affine-threshold decision tree recursively branches on tests $\langle a,x\rangle-b\ge0$ and has constant real outputs at its leaves.

## Statement references

[Telgarsky, Theorem 1.1 and §3.4: depth-separation claim and proof](https://proceedings.mlr.press/v49/telgarsky16.pdf)

[Telgarsky lecture notes, §5.2: tent-map depth separation](https://mjt.cs.illinois.edu/dlt/index.html)

[Telgarsky lecture notes, §5.1: Bernstein expectation representation](https://mjt.cs.illinois.edu/dlt/index.html)

[Telgarsky lecture notes, §5.1: binomial approximation bound used in the refutation](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** The claimed bound in the preceding statement.

[F1] The map $\tau(x)=2\rho(x)-4\rho(x-1/2)$ maps $[0,1]$ to itself and is $2$-Lipschitz ([[lem-relu-tent-iterate-depth]]).

[F2] Every $L$-Lipschitz function on $[0,1]$ has degree-$N$ Bernstein polynomial approximation error at most $L/(2\sqrt N)$ ([[lem-bernstein-polynomial-lipschitz-error]]).

## Refutation

1.1 Set $d=k=t=\alpha=1$, $\beta=N=2^{22}$. The gate $P_N(z)=B_N(h^5)(z)$ is a single $(1,1,N)$-semi-algebraic gate: use the constant predicate polynomial $q_1(z)=1$ with condition $q_1(z)\ge0$, and the one polynomial piece $p_1(z)=P_N(z)$, whose degree is at most $N$. The predicate condition holds for every $z$, and $q_1$ has degree $0\le\alpha$. The claimed node cap is $2^{1/N}<2$, so the integer node count of this network is at most one. Hence $P_N$ belongs to the first class in the claimed union. [given, construct, algebra]

2.1 On $[0,1]$, the formula for $h$ reduces to $2x$ on $[0,1/2]$ and $2-2x$ on $[1/2,1]$, so it is the tent map in [F1], maps the interval into itself, and is $2$-Lipschitz. Thus $h^5$ is $32$-Lipschitz. Applying [F2] at $N=2^{22}$ gives $\|P_N-h^5\|_\infty\le32/(2\sqrt{2^{22}})=1/128$. Consequently $\int_0^1|P_N(x)-h^5(x)|\,dx\le1/128<1/64$, contradicting the claimed infimum lower bound. [step 1.1, F1, F2, algebra] ∎
