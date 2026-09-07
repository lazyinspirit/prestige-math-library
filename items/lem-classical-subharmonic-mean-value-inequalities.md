---
id: lem-classical-subharmonic-mean-value-inequalities
kind: lemma
title: "Classical subharmonic mean value inequalities"
status: draft
origin: pipeline
deps: [def-subharmonic-and-superharmonic-functions-in-rn, lem-radial-derivative-of-a-spherical-average, thm-polar-coordinates-formula-for-lebesgue-measure]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§2.1.1 Theorem 2.5, p.22"
    - title: "Tsogtgerel Gantumur, Harmonic functions (2012)"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§6 Definition 7 and Exercise 12, p.8"
---

## Statement

Assume the Axiom of Countable Choice, as in the cited polar-coordinate theorem. Let $n\ge2$ and $u\in C^2(\Omega)$, where $\Omega\subseteq\mathbb R^n$ is open. If $\Delta u\ge0$, then for every $\overline B_r(a)\subset\Omega$, $r>0$,
$$u(a)\le\frac1{|\partial B_r|}\int_{\partial B_r(a)}u\,dS,\qquad u(a)\le\frac1{|B_r|}\int_{B_r(a)}u\,dx.$$
Both inequalities reverse for $\Delta u\le0$. Conversely, either family of local mean inequalities, for all sufficiently small radii at every center, implies the corresponding Laplacian inequality.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Subharmonic means $\Delta u\ge0$ and superharmonic means $\Delta u\le0$ for a real $C^2$ function. ([[def-subharmonic-and-superharmonic-functions-in-rn]]).

[F2] For $u\in C^2$ and a compactly contained ball, the derivative of its spherical average is $m\prime(t)=\frac t n|B_t|^{-1}\int_{B_t}\Delta u$. ([[lem-radial-derivative-of-a-spherical-average]]).

[F3] Under countable choice, polar coordinates integrate a nonnegative Borel function as its sphere integral followed by $t^{n-1}dt$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

## Proof

**Proof technique:** direct.

1.1 Write $m(t)$ for the sphere average at $a$. The radial identity gives $m\prime(t)=\frac t n\frac1{|B_t|}\int_{B_t(a)}\Delta u\ge0$. Continuity gives $m(t)\to u(a)$ as $t\downarrow0$, so $m(r)\ge u(a)$. [F1, F2, given]

1.2 For the converse, two integrations of the one-variable fundamental theorem along $a+t\theta$ give $u(a+r\theta)=u(a)+r\nabla u(a)\cdot\theta+r^2\int_0^1(1-s)\theta^TD^2u(a+sr\theta)\theta\,ds$. The continuity of $D^2u$ makes its remainder after replacing the Hessian by $D^2u(a)$ uniformly $o(r^2)$ for unit $\theta$. Reflection and permutation symmetry give sphere averages of $\theta_i$ and $\theta_i\theta_j$ equal to zero for $i\ne j$, and of $\theta_i^2$ equal to $1/n$. Thus $m(r)=u(a)+r^2\Delta u(a)/(2n)+o(r^2)$. [given, algebra]

2.1 Polar coordinates give the ball average $\frac n{r^n}\int_0^r t^{n-1}m(t)\,dt\ge u(a)$. For signed $u$, apply the nonnegative polar formula to its positive and negative parts on the bounded ball; both are bounded and integrable. Replacing $u$ by $-u$ proves both reversed inequalities. [F3, step 1.1, algebra]

3.1 Integrating the expansion with the radial weights gives ball average $u(a)+r^2\Delta u(a)/(2(n+2))+o(r^2)$. Either assumed mean inequality, divided by $r^2>0$ and followed by $r\downarrow0$, forces $\Delta u(a)\ge0$. Negation gives the superharmonic converse. [F3, step 1.2, algebra] ∎
