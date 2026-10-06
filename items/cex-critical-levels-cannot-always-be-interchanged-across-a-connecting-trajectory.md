---
id: cex-critical-levels-cannot-always-be-interchanged-across-a-connecting-trajectory
kind: counterexample
title: "Critical levels connected by a trajectory cannot always be interchanged"
status: published
origin: pipeline
dependency_level: 3
deps: [lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged, def-morse-function-adapted-to-a-cobordism, def-morse-trajectory-from-p-to-q, cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function, def-downward-gradient-like-vector-field]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
    - title: "Andrei Pajitnov, Circle-Valued Morse Theory (de Gruyter Studies in Mathematics 32), Chapter 5 Sections 1-3 (pp. 163-189) and Chapter 4 Section 3 (pp. 132-162)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/pajbook.pdf"
proof_strategy: "one-dimensional flow obstruction to the value exchange"
---

## Statement refuted

The disjointness hypothesis in the critical-value interchange lemma can be
dropped: whenever two critical levels are joined by a trajectory, their values
can always be interchanged while keeping the same gradient-like field.

## Facts & Assumptions

[F1] [[lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged]] permits arbitrary assignments of the two cluster values inside a regular-endpoint band containing just those clusters, with the same field, under the no-connecting-trajectory hypothesis.

[F2] [[def-downward-gradient-like-vector-field]]: A smooth field $X$ is downward gradient-like for a Morse function $h$ when $dh_x(X_x)<0$ at every $x\notin\operatorname{Crit}(h)$ and $X$ has the model form $(2u,-2v)$ in Morse coordinates at every critical point.

[F3] [[def-morse-trajectory-from-p-to-q]]: For critical points $p,q$ of a Morse function, a Morse trajectory from $p$ to $q$ is a nonconstant full trajectory of $-\operatorname{grad}_g f$ with past limit $p$ and future limit $q$.

[F4] [[cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function]]: Along a nonconstant negative-gradient trajectory, $(f\circ\gamma)'(t)<0$ for every $t$.

[F5] [[def-morse-function-adapted-to-a-cobordism]]: An adapted pair on a triad consists of an adapted Morse function and a complete downward gradient-like field; excellence is not required for this item.

[A1] Put $f(\theta)=(2+\cos\theta)/4$ on the circle. Choose a positive smooth function $a$ equal to $4/(1+\cos\theta)$ near $p=0$, to $4/(1-\cos\theta)$ near $q=\pi$, and patched to one away from these two disjoint neighbourhoods by scalar cutoffs. Set $X=a(\theta)\sin\theta\,\partial_\theta$. The metric $d\theta^2/(4a(\theta))$ makes $X=-\operatorname{grad}f$.

## Counterexample

**Given:** The circle with $f,X$ of [A1], with its closed-triad faces empty.

1.1 Its only critical points are $p,q$, with values $3/4,1/4$ and indices $1,0$. Near $p$ take the Morse coordinate $u=\sin(\theta/2)/\sqrt2$, so $f=3/4-u^2$ and $Xu=2u$; near $q$ take $v=\sin((\theta-\pi)/2)/\sqrt2$, so $f=1/4+v^2$ and $Xv=-2v$. Elsewhere $df(X)=-a\sin^2\theta/4<0$. Thus this is an exact downward gradient-like field, rather than merely a descending round-metric gradient. [F2, F5, A1, algebra]

2.1 On each of the two open arcs the field is nonzero and points from $p$ to $q$. Its solutions are full trajectories: near either endpoint the smooth field has a simple linear zero with slope $\pm2$, so reaching it requires infinite time (equivalently the separated time integral has logarithmic divergence). Consequently each arc has past limit $p$ and future limit $q$. [F3, A1, step 1.1, algebra]

3.1 If $X$ is downward gradient-like for a new function $g$ with these same critical points, then $g$ is strictly decreasing on either arc trajectory. For finite $t_1<t_2$, continuity at the endpoints gives $g(p)\ge g(\gamma(t_1))>g(\gamma(t_2))\ge g(q)$; hence $g(p)>g(q)$. Reversing their values while retaining $X$ is impossible. This refutes the stated universal interchange without the no-connection hypothesis. [F1, F2, F4, step 2.1, algebra]

4.1 The lower point has index zero and the upper point index one, so the separation hypothesis requiring lower index at least upper index is absent here. Perturbation cannot be promised for every connecting pair; the index hypothesis is exactly what licenses it in the rearrangement argument. The counterexample establishes the fixed-field obstruction independently of such a perturbation. [step 1.1, step 3.1, algebra] ∎
