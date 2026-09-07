---
id: thm-hopf-boundary-point-lemma-for-the-laplacian
kind: theorem
title: "Hopf boundary point lemma for the laplacian"
status: published
origin: pipeline
deps: [lem-interior-sphere-barrier-for-the-laplacian, thm-weak-maximum-principle-for-the-laplacian, thm-heine-borel-rn, thm-extreme-value-metric, def-connected-space]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Lemma 2.21, pp.29–30"
---

## Statement

Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open, and suppose $B_R(a)\subset\Omega$ is an interior tangent ball at $p\in\partial\Omega$. Let $u\in C^2(\Omega)$ be subharmonic, with a continuous extension to $\overline B_R(a)$, such that $u(x)<M$ for every $x\in\Omega$ and $u(p)=M$. If the finite derivative $\partial_\nu u(p)$ exists for $\nu=(p-a)/R$, then $\partial_\nu u(p)>0$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] The exponential annulus barrier is subharmonic, has inner value one and outer value zero, and has strictly negative outward derivative. ([[lem-interior-sphere-barrier-for-the-laplacian]]).

[F2] The weak maximum principle controls a subharmonic function on a bounded nonempty open set by its boundary values when it is continuous on the closure. ([[thm-weak-maximum-principle-for-the-laplacian]]).

[F3] Closed bounded Euclidean sets are compact ([[thm-heine-borel-rn]]).

[F4] A continuous real function on a nonempty compact metric space attains a minimum ([[thm-extreme-value-metric]]).

[F5] A connected space has no separation into two nonempty disjoint open subsets ([[def-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 On the compact inner sphere, continuity and strict inequality give $\varepsilon=M-\max_{|x-a|=R/2}u(x)>0$. Take the exponential barrier $v$, equal to one on that sphere and zero on the outer sphere. [F1, given]

1.2 Here is the additional Hopf route to the strong subharmonic principle. Suppose $U$ is a domain and $f\in C^2(U)$ satisfies $\Delta f\ge0$ and $f\le M$ in $U$, and $E=\{f=M\}$ is nonempty but not all of $U$. It is relatively closed. Its complement $G$ is nonempty open, and some $y\in E$ is a relative boundary point of $G$; otherwise $E$ and $G$ would separate $U$. Choose $d>0$ with $\overline B_d(y)\subset U$ and $x\in G$ with $|x-y|<d/4$. [F5, given, algebra]

2.1 Continuity from inside the tangent ball gives $u\le M$ on its entire outer sphere. On the annulus, $w=u+\varepsilon v-M$ is subharmonic and continuous on the closure, and its values are at most zero on both boundary spheres. The weak maximum principle gives $w\le0$ throughout the annulus. [F1, F2, step 1.1]

2.2 Set $r=\inf_{z\in E}|x-z|$. Openness of $G$ gives $r>0$, and $r\le|x-y|<d/4$. A closest point $q\in E$ exists: minimize distance on the nonempty compact set $E\cap\overline B_{d/2}(y)$; points of $E$ outside this set have distance from $x$ greater than $d/4$, so this also minimizes over all of $E$. The ball $B_r(x)$ lies in $G$, its closure lies in $U$, and $q$ is on its sphere. [F3, F4, step 1.2, algebra]

3.1 For $0<t<R/2$, $u(p)-u(p-t\nu)\ge\varepsilon v(p-t\nu)$. Divide by $t>0$ and pass to the assumed finite limit: $\partial_\nu u(p)\ge-\varepsilon\partial_\nu v(p)>0$. [F1, step 2.1, algebra]

4.1 Apply the boundary conclusion already proved in step 3.1 to $f$ on $G$, with this tangent ball and boundary point $q$. It gives a positive outward derivative. But $q\in U$ is an interior maximum of the differentiable function $f$, so all its first derivatives are zero and this directional derivative is zero. Therefore $E=U$ and $f$ is constant. This alternative uses no mean inequality. [step 3.1, step 2.2, algebra] ∎
