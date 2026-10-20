---
id: lem-sobolev-taylor-grid-approximation
kind: lemma
title: "Local Taylor approximation on a Sobolev grid"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-sobolev-space-wkp-and-its-norm, thm-w-one-infinity-functions-have-lipschitz-representatives, thm-local-smooth-approximation-in-wkp, def-axiom-of-choice, def-countable-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, lem-mollification-commutes-with-weak-derivatives-in-the-interior]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Dmitry Yarotsky, Error bounds for approximations with deep ReLU networks, §3.2"
      url: "https://arxiv.org/pdf/1610.01145"
      locator: "Theorem 1 proof, pp. 10–12; grid, partition of unity, local Taylor polynomial, and bounded overlap."
    - title: "Juha Kinnunen, Sobolev Spaces, §§1.2 and 3.4"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Definition 1.8 and Theorem 3.31, with proof, for W^{n,∞} derivatives and Lipschitz representatives."
    - title: "Michael J. Sullivan, Deep Learning Theory, §5.3"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "§5.3, Taylor localization in the ReLU Sobolev approximation proof."
---

## Statement

Assume the Axiom of Choice. Let $d,n\ge1$, let $Q=(0,1)^d$, and let $f\in W^{n,\infty}(Q;\mathbb R)$ have Sobolev norm at most $1$ using the maximum over weak derivatives of order at most $n$. For every integer $N\ge2$, take the tensor grid $a_m=m/N$, $m\in\{0,\ldots,N\}^d$, and the partition-of-unity hats $\phi_m(x)=\prod_{i=1}^d(1-N|x_i-m_i/N|)_+$. Use the Lipschitz representatives of $D^\alpha f$ for $|\alpha|<n$ to define $T_mf(x)=\sum_{|\alpha|<n}D^\alpha f(a_m)(x-a_m)^\alpha/\alpha!$. Then $g_N=\sum_m\phi_mT_mf$ extends continuously to $[0,1]^d$ and satisfies $\|f-g_N\|_{L^\infty(Q)}\le C(d,n)N^{-n}$.

## Statement references

[Yarotsky, proof of Theorem 1: grid partition and local Taylor approximation](https://arxiv.org/pdf/1610.01145)

[Kinnunen, Definition 1.8 and Theorem 3.31: Sobolev norms and Lipschitz representatives](https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf)

[Sullivan, §5.3: local Taylor approximation for ReLU networks](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** The Axiom of Choice, integers $d,n\ge1$, $Q=(0,1)^d$, $f\in W^{n,\infty}(Q;\mathbb R)$ with norm at most $1$, and an integer $N\ge2$.

[F1] The $W^{n,\infty}$ norm is the maximum of $\|D^\alpha f\|_{L^\infty}$ over all multi-indices $|\alpha|\le n$ ([[def-sobolev-space-wkp-and-its-norm]]), and under the Axiom of Choice each $W^{1,\infty}(Q)$ class has a Lipschitz representative with constant at most $\|Du\|_{L^\infty(Q)}$ ([[thm-w-one-infinity-functions-have-lipschitz-representatives]]).

[F2] The Axiom of Choice implies Countable Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]), and under Countable Choice interior mollifications converge in $W^{k,p}$ on every relatively compact open subset for finite $p$ ([[thm-local-smooth-approximation-in-wkp]]).

[F3] On the interior domain $\Omega_\varepsilon$, the derivatives of a mollification satisfy $D^\alpha(\rho_\varepsilon*u)=\rho_\varepsilon*(D^\alpha u)$ ([[lem-mollification-commutes-with-weak-derivatives-in-the-interior]]).

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

## Proof

1.1 For each $|\alpha|<n$, $D^\alpha f\in W^{1,\infty}(Q)$ by [F1], since its first weak derivatives are among the derivatives of $f$ of order at most $n$. By [F1], choose their Lipschitz representatives; their Lipschitz constants are at most $\sqrt d$, because each coordinate weak derivative has essential supremum at most $1$. Since $Q$ has finite measure and all derivatives of order at most $n-1$ are essentially bounded, the same weak-derivative identities give $f\in W^{n-1,1}(Q)$. By [A1] and [F2], Countable Choice holds, and the interior mollification theorem applies with $k=n-1$ and $p=1$. For every compact segment in $Q$, convolution of each Lipschitz representative differs from it uniformly by at most $\sqrt d$ times the mollifier radius, so the mollified derivatives through order $n-1$ converge uniformly there. [F1, F2, A1, given]

2.1 For an interior grid center $a_m$ and interior $x$, choose the mollifier radius smaller than the distance from their segment to $\partial Q$. By [F3], $D^\alpha f_\delta=\rho_\delta*D^\alpha f$ on that segment; nonnegativity and unit mass of $\rho_\delta$ imply $|D^\alpha f_\delta|\le\|D^\alpha f\|_\infty\le1$ for $|\alpha|=n$. The one-variable Taylor formula applied to $t\mapsto f_\delta(a_m+t(x-a_m))$ therefore gives remainder at most $\frac1{n!}\sup_t|\frac{d^n}{dt^n}f_\delta(a_m+t(x-a_m))|\le C(d,n)\|x-a_m\|_\infty^n$, since $\sum_i|x_i-a_{m,i}|\le d\|x-a_m\|_\infty$. Passing to the uniform limits from step 1.1 proves the estimate for interior points. Approximate any boundary grid center and any boundary input by interior points; the Lipschitz extensions of all coefficients and the finite Taylor polynomial are continuous, so the same estimate holds on the closed cube. [step 1.1, F1, F2, F3, algebra]

3.1 The one-dimensional hats sum to $1$ on each grid interval, so their tensor products satisfy $\sum_m\phi_m=1$ on the cube; at most $2^d$ are nonzero at any point, and each nonzero term has $\|x-a_m\|_\infty\le1/N$. Therefore $|f(x)-g_N(x)|\le\sum_{m:\phi_m(x)>0}\phi_m(x)C(d,n)N^{-n}=C(d,n)N^{-n}$. Each $u_\alpha$ and each hat is continuous on the closed cube, so the finite sum $g_N$ extends continuously there. [step 2.1, construct, algebra] ∎
