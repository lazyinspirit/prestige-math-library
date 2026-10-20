---
id: cex-telgarsky-small-k-large-degree-gate
kind: counterexample
title: "A single high-degree gate defeats the stated small-k separation"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [lem-bernstein-polynomial-lipschitz-error, lem-relu-tent-iterate-depth]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Matus Telgarsky, Benefits of Depth in Neural Networks, Theorem 1.1 and §3.4"
      url: "https://proceedings.mlr.press/v49/telgarsky16.pdf"
      locator: "Theorem 1.1, p. 2; semi-algebraic gate parameters and small-k case."
---

## Statement refuted

For every integer $k\ge1$ and dimension $d\ge1$, the stated Telgarsky bound asserts that there is a function $f(x)=h^{k^3+4}(x_1)$, where $h(z)=\rho(2\rho(z)-4\rho(z-1/2))$, computed by a ReLU network with $2k^3+8$ layers, $3k^3+12$ computation nodes, and $4+d$ distinct parameters, such that for every positive integer triple $t,\alpha,\beta$ its $L^1([0,1]^d)$ distance from every function in the following union is at least $1/64$: functions computed in at most $k$ computational layers by networks with at most $2^{k/(t\alpha\beta)}$ gate nodes whose gates are $(t,\alpha,\beta)$-semi-algebraic; and sums of at most $t$ affine-threshold decision trees, each with at most $2^{k^3/t}$ total nodes, including leaves. Here a $(t,\alpha,\beta)$-semi-algebraic gate is a map $g:\mathbb R^q\to\mathbb R$ expressible as a finite sum of polynomial pieces $p_j$ of degree at most $\beta$, each multiplied by indicators of conjunctions of signs of at most $t$ predicate polynomials $q_i$ of degree at most $\alpha$; an affine-threshold decision tree recursively branches on tests $\langle a,x\rangle-b\ge0$ and has constant real outputs at its leaves.

## Statement references

[Telgarsky, Theorem 1.1: the claimed gate-parameter range](https://proceedings.mlr.press/v49/telgarsky16.pdf)


## Facts & Assumptions

**Given:** The parameters and target in the counterexample description.

[F1] The map $\tau(x)=2\rho(x)-4\rho(x-1/2)$ maps $[0,1]$ to itself and is $2$-Lipschitz ([[lem-relu-tent-iterate-depth]]).

[F2] A degree-$N$ Bernstein polynomial approximates an $L$-Lipschitz function on $[0,1]$ within $L/(2\sqrt N)$ ([[lem-bernstein-polynomial-lipschitz-error]]).

## Counterexample

Take $d=k=t=\alpha=1$ and $\beta=2^{22}$. The target is $h^5(x)$ on $[0,1]$, where $h(x)=\rho(2\rho(x)-4\rho(x-1/2))$. A single polynomial gate of degree at most $2^{22}$ can compute the Bernstein polynomial of $h^5$ of degree $2^{22}$; the gate-node cap $2^{1/2^{22}}$ permits one node.

1.1 On $[0,1]$, $h(x)=2x$ for $x\le1/2$ and $h(x)=2-2x$ for $x\ge1/2$, so it equals the tent map in [F1], maps the interval into itself, and is $2$-Lipschitz. Thus $h^5$ is $32$-Lipschitz. For $N=2^{22}$, [F2] gives a degree-$N$ polynomial $P_N$ with $\sup_{[0,1]}|h^5-P_N|\le32/(2\sqrt N)=1/128$. [given, F1, F2, algebra]

2.1 A single gate with the constant predicate polynomial $q_1(z)=1$, condition $q_1(z)\ge0$, and polynomial piece $P_N$ is $(1,1,N)$-semi-algebraic; the predicate is always true and has degree $0$. Since $2^{1/N}<2$, the allowed integer node count is one. The normalized Lebesgue integral on $[0,1]$ of its error is at most $1/128<1/64$, so this is a counterexample to the claimed uniform lower bound. [step 1.1, algebra] ∎

