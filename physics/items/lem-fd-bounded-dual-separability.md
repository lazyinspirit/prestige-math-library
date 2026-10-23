---
id: lem-fd-bounded-dual-separability
kind: lemma
title: Separability and Hilbert structure of the no-slip dual
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [ def-countable-choice ]
dependency_roles:
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak
        Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§2.2, printed pp. 4–5, for the Hilbert structures on the
        divergence-free energy spaces."
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§§5.2.2–5.4, printed pp. 42–48, for the periodic Hilbert-space and
        compactness framework."
---

## Statement

Assume Countable Choice and let $V$ be any separable real Hilbert space. Its continuous real-linear dual $V^*$,
with norm $\|\ell\|_{V^*}=\sup_{\|v\|_V\le1}|\ell(v)|$, is a separable real
Hilbert space. The Riesz map
$$J:V\to V^*,\qquad Jw(v)=(w,v)_V$$
is a surjective linear isometry.

## Statement references

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, §2.2, pp. 4–5](https://www.mdpi.com/2311-5521/6/1/42/pdf).

[Leonid Ryzhik, *Math 256B Lecture Notes*, §§5.2.2–5.4, pp. 42–48](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

## Facts & Assumptions

**Given:** Countable Choice and a separable real Hilbert space $V$.

[F1] $V$ is complete and has a countable dense subset, as specified by the real Hilbert and separability hypotheses in the Statement.

[F2] [[def-countable-choice]]: from each countable sequence of nonempty sets one may select one element; this selects an approximating sequence for the distance minimization below.

## Proof

1.1 Let $\ell\in V^*$ be nonzero. Its kernel $K=\{v:\ell(v)=0\}$ is a closed linear subspace. Choose $x\notin K$ and put $d_0=\inf_{k\in K}\|x-k\|_V$. By [F2], choose $k_n\in K$ with $\|x-k_n\|_V\to d_0$. Since $(k_n+k_m)/2\in K$, the parallelogram identity yields
$$\|k_n-k_m\|_V^2=2\|x-k_n\|_V^2+2\|x-k_m\|_V^2-4\left\|x-\frac{k_n+k_m}{2}\right\|_V^2\le2\|x-k_n\|_V^2+2\|x-k_m\|_V^2-4d_0^2,$$
which tends to zero as $n,m\to\infty$. Thus $(k_n)$ is Cauchy; completeness and closedness give a limit $k_0\in K$ attaining the distance. Set $y=x-k_0\ne0$; because $k_0\in K$ and $x\notin K$, $\ell(y)=\ell(x)\ne0$. For any $k\in K$, the quadratic $\|y-tk\|_V^2$ has its minimum at $t=0$, so its linear coefficient vanishes and $(y,k)_V=0$. [given, F1, F2, algebra]

2.1 For any $z\in V$, the vector $z-\ell(z)y/\ell(y)$ belongs to $K$. Orthogonality from step 1.1 therefore gives
$$\ell(z)=\frac{\ell(y)}{\|y\|_V^2}(y,z)_V=(w_\ell,z)_V,\qquad w_\ell:=\frac{\ell(y)}{\|y\|_V^2}y.$$
The zero functional is represented by $w_0=0$. If two vectors represent the same functional, their difference is orthogonal to every vector and hence is zero. Cauchy–Schwarz gives $\|Jw\|_{V^*}\le\|w\|_V$, while testing at $v=w/\|w\|_V$ for $w\ne0$ gives equality. Thus $J$ is a linear isometric bijection. [given, F1, step 1.1, algebra]

3.1 The image under an isometry of a countable dense subset of $V$ is countable and dense in $V^*$ because $J$ is onto. The Riesz isometry transports the Hilbert inner product of $V$ to $V^*$, so the dual is a separable real Hilbert space. [given, F1, step 2.1] ∎

