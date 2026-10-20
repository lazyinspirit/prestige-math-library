---
id: thm-yarotsky-fixed-architecture-sobolev-approximation-rate
kind: theorem
title: "Target-independent ReLU rate on the unit Sobolev ball"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [def-relu-network, def-axiom-of-choice, lem-relu-bounded-product-approximation, lem-sobolev-taylor-grid-approximation, def-countable-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Dmitry Yarotsky, Error bounds for approximations with deep ReLU networks, Theorem 1 and complete proof"
      url: "https://arxiv.org/pdf/1610.01145"
      locator: "Theorem 1 and proof, §§3.1–3.2, printed pp. 6–13."
    - title: "Michael J. Sullivan, Deep Learning Theory, §5.3"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "§5.3, localized Taylor approximation and logarithmic product construction."
---

## Statement

Assume the Axiom of Choice. Let $d,n\ge1$, let $Q=(0,1)^d$, and let $F_{d,n}$ be the unit ball of $W^{n,\infty}(Q;\mathbb R)$ for the norm given by the maximum of the essential suprema of all weak derivatives of order at most $n$. There is a constant $C=C(d,n)$ such that for every $0<\varepsilon<1/2$ one can choose a ReLU network architecture, independent of $f\in F_{d,n}$, for which every $f\in F_{d,n}$ has weights producing a representative $\Phi_f$ with $$\|f-\Phi_f\|_{L^\infty(Q)}\le\varepsilon,$$ depth at most $C(1+\log(1/\varepsilon))$, and at most $C\varepsilon^{-d/n}(1+\log(1/\varepsilon))$ weights and computation units.

## Statement references

[Yarotsky, Theorem 1 and proof: target-independent Sobolev approximation rate](https://arxiv.org/pdf/1610.01145)

[Sullivan, §5.3: ReLU approximation of Sobolev functions](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** The Axiom of Choice, integers $d,n\ge1$, $f\in F_{d,n}$, and $0<\varepsilon<1/2$.

[F1] For every $N\ge2$, the weighted Taylor grid sum $g_N$ satisfies $\|f-g_N\|_{L^\infty(Q)}\le C(d,n)N^{-n}$, has at most $2^d$ nonzero local terms at each point, and each local Taylor polynomial has degree below $n$ ([[lem-sobolev-taylor-grid-approximation]]).

[F2] Products of inputs in a fixed bounded square can be approximated by ReLU networks with logarithmic dependence on accuracy ([[lem-relu-bounded-product-approximation]]). Its explicit globally defined network formula cancels identically on either coordinate axis for every real value of the other input, as shown in that lemma’s proof.

[F3] A ReLU network uses hidden ReLU units and affine outputs, and its depth counts input and output layers ([[def-relu-network]]).

[A1] The Axiom of Choice is assumed by the Sobolev Taylor-grid supplier and by the Lipschitz-representative argument ([[def-axiom-of-choice]]).

## Proof

1.1 Choose an integer $N\ge2$ with $C(d,n)N^{-n}\le\varepsilon/2$ and form $g_N$ from [F1]. Then $N\le C'(d,n)\varepsilon^{-1/n}$, so the number of grid centers is $(N+1)^d=O_{d,n}(\varepsilon^{-d/n})$. [given, F1, A1, choose, algebra]

1.2 For each center $a_m$, write its Taylor polynomial as a finite sum of monomials in the scaled variables $z_i=N(x_i-a_{m,i})$, multiplied by coefficients $D^\alpha f(a_m)N^{-|\alpha|}/\alpha!$. On the support of $\phi_m$, $|z_i|\le1$, and all coefficients are bounded by a constant depending only on $d,n$. The hat $\phi_m$ is the product of $d$ one-dimensional ReLU hats, since $|z|=\rho(z)+\rho(-z)$ and $u_+=\rho(u)$. There are only a number depending on $d,n$ of products and summands. Choose the error of each product operation to be $\eta/C(d,n)$; inductively, multiplying by a factor of magnitude at most $1$ adds at most that error to the previous product error, and summing the finitely many terms multiplies it by at most another $C(d,n)$. On the hat support, all intermediate inputs stay in fixed bounded intervals depending only on $d,n$, so the bounded-domain error guarantee in [F2] applies there and the monomial sum followed by multiplication by the hat has term error at most $\eta$. Off the hat support, the final product is exactly zero: although the error guarantee is only used on the bounded square, the explicit product formula in [F2] defines a network globally, and the axis cancellation proved there holds for every value of the other input. Thus the local error is zero there. The resulting subnetwork has $O_{d,n}(1+\log(1/\eta))$ weights, units, and depth. [given, F2, F3, construct, algebra]

2.1 At any $x$, at most $2^d$ of the exact hats are nonzero by [F1], and the constructed approximate term is zero outside the same support. Thus summing all local subnetworks gives a network $\Phi_f$ with $\|g_N-\Phi_f\|_\infty\le2^d\eta$. Choose $\eta=\varepsilon/2^{d+1}$. Then the triangle inequality and step 1.1 give $\|f-\Phi_f\|_\infty\le\varepsilon$. [step 1.1, step 1.2, F1, algebra]

3.1 The local polynomial degree and number of terms depend only on $d,n$, while the grid size depends only on $N$. All local subnetworks have depth $O_{d,n}(1+\log(1/\eta))$ and size of the same order; they run in parallel and their outputs are summed affinely. Hence the total depth is $O_{d,n}(1+\log(1/\varepsilon))$ and the total weights and units are $O_{d,n}(N^d(1+\log(1/\varepsilon)))=O_{d,n}(\varepsilon^{-d/n}(1+\log(1/\varepsilon)))$. The edge pattern depends on $N,d,n,\varepsilon$ but not on $f$; only Taylor coefficients and output weights depend on $f$. [step 1.1, step 1.2, step 2.1, algebra] ∎
