---
id: thm-strong-maximum-principle-for-harmonic-functions
kind: theorem
title: "Strong maximum principle for harmonic functions"
status: published
origin: pipeline
deps: [def-connected-space, lem-interior-sphere-barrier-for-the-laplacian, thm-weak-maximum-principle-for-the-laplacian, thm-heine-borel-rn, thm-extreme-value-metric, thm-fermat-for-euclidean-local-extrema]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Theorem 2.15, pp.26–27"
---

## Statement

Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a domain, and let $u\in C^2(\Omega)$ be harmonic. If $u$ attains a global maximum or a global minimum at a point of $\Omega$, it is constant.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Closed bounded Euclidean sets are compact, and continuous real functions attain their extrema on nonempty compact sets ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]).

[F2] On $R/2<|x-y|<R$, the normalized exponential barrier $v$ is subharmonic, equals $1$ on the inner sphere and $0$ on the outer sphere, and has strictly negative outward derivative there ([[lem-interior-sphere-barrier-for-the-laplacian]]).

[F3] A subharmonic $C^2$ function continuous on the closure of a bounded open set has its maximum on the boundary ([[thm-weak-maximum-principle-for-the-laplacian]]).

[F4] At an interior differentiable extremum the gradient vanishes ([[thm-fermat-for-euclidean-local-extrema]]). A connected space has no nontrivial clopen subset ([[def-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $u$ attains its global maximum $M$, and put $E=\{x\in\Omega:u(x)=M\}$. This set is nonempty and relatively closed. Fix $z\in E$ and choose $r>0$ with $\overline B_{3r}(z)\subset\Omega$. The set $E\cap\overline B_{2r}(z)$ is nonempty compact. If there were $y\in B_r(z)\setminus E$, its distance to this compact set would attain a positive minimum $R$ at a point $p$, with $0<R\le|y-z|<r$. The closed ball $\overline B_R(y)$ lies inside $B_{2r}(z)$, and $u<M$ on its interior while $u(p)=M$ on its boundary. [F1, given, choose]

2.1 On the inner sphere $|x-y|=R/2$, compactness and strict inequality give $a:=M-\max u>0$. Use the barrier $v$ from [F2] with $\alpha=2n/R^2$. The function $u+av$ is subharmonic on the annulus: $\Delta u=0$ and $\Delta v\ge0$. On its inner boundary $u+av=u+a\le M$, and on its outer boundary $u+av=u\le M$. By [F3], $u+av\le M$ throughout the annulus. [F1, F2, F3, step 1.1]

3.1 Let $\nu=(p-y)/R$. For $0<t<R/2$, step 2.1 implies $$\frac{u(p)-u(p-t\nu)}{t}\ge a\frac{v(p-t\nu)}{t}.$$ As $t\downarrow0$, the left side tends to $\nabla u(p)\cdot\nu=0$ by [F4], because $p$ is an interior global maximum in $\Omega$. Since $v(p)=0$, the right side tends to $-a\partial_\nu v(p)>0$ by [F2], which is impossible. Thus there is no such $y$, so $B_r(z)\subseteq E$. Every $z\in E$ therefore has a neighborhood in $E$. [F2, F4, step 1.1, step 2.1, algebra]

4.1 The nonempty set $E$ is both open and closed in the connected domain $\Omega$, so [F4] gives $E=\Omega$. Thus $u$ is constant. For a global minimum apply the same argument to $-u$, which is again harmonic. All choices above concern finitely many points and real parameters at a time; no mean-value or countable-choice hypothesis is used. [F4, step 1.1, step 3.1, algebra] ∎
