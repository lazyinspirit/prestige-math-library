---
id: lem-opposite-index-nondegenerate-zeros-cancel-in-a-ball
kind: lemma
title: "Opposite-index nondegenerate zeros cancel in a ball"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-local-index-is-additive-under-a-transverse-perturbation, lem-index-sum-of-an-outward-field-is-the-gauss-degree, lem-degree-zero-unit-vector-field-on-a-sphere-extends-over-the-ball, def-isolated-zero-and-local-index-of-a-vector-field, def-nondegenerate-zero-of-a-vector-field, thm-index-of-a-nondegenerate-vector-field-zero, def-induced-tangent-bundle-chart, def-embedded-smooth-submanifold-with-boundary, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-countable-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §6, Exercises 10-13 with hints, printed pp. 146-148 (cancelling a pair of opposite zeros inside a ball via the degree-zero extension)"
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, Step 2, printed p. 40 (index-preserving local perturbation; cancellation here uses the separately proved degree-zero extension)"
dependency_level: 5
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $M$ be a smooth $n$-manifold, $n\ge2$, let $X$
be a smooth vector field and let $B\subseteq M$ be a smoothly embedded closed
ball whose interior contains exactly two zeros $p,q$ of $X$, both
nondegenerate and of opposite index, with $X\ne0$ on $\partial B$
([[def-embedded-smooth-submanifold-with-boundary]]). Then there is a smooth
vector field $X'$ on $M$ with $X'=X$ outside $\operatorname{int}B$ (in
particular on a neighbourhood of $\partial B$) and $X'\ne0$ on $B$; thus $X'$
has exactly the zeros of $X$ outside $B$ and none in $B$.

## Facts & Assumptions

**Given:** A smooth field $X$ on the smooth $n$-manifold $M$, $n\ge2$, and a closed ball $B$ containing exactly the two nondegenerate zeros $p,q$ in its interior, with opposite indices and $X\ne0$ on $\partial B$.

[F1] Choose a smooth parametrization $b:D^n\to B$ and pull back the field as $Y(u)=(db_u)^{-1}X(b(u))$. This is a smooth vector field on the closed Euclidean ball, with exactly the two corresponding nondegenerate zeros and no boundary zero. The differential of $b$ provides matching base and fibre orientations. The boundary-degree lemma identifies its normalized boundary degree with the sum of local indices, which are preserved under this pullback ([[lem-local-index-is-additive-under-a-transverse-perturbation]], [[lem-index-sum-of-an-outward-field-is-the-gauss-degree]], [[def-induced-tangent-bundle-chart]]).

[F2] A smooth map $u:S^m\to S^m$ of degree $0$ is homotopic to a constant map and admits a smooth nowhere-zero extension $F:D^{m+1}\to\mathbb R^{m+1}\setminus\{0\}$ with $F(x)=u(x/|x|)$ for $|x|\ge\frac23$; in particular $F=u$ on the boundary sphere ([[lem-degree-zero-unit-vector-field-on-a-sphere-extends-over-the-ball]]).

[F3] Each of the two zeros is nondegenerate with index $\pm1$, and the two indices are opposite, so their sum is $0$ ([[thm-index-of-a-nondegenerate-vector-field-zero]], [[def-nondegenerate-zero-of-a-vector-field]]).

[F4] There are smooth bump functions equal to $1$ on a prescribed closed collar of the boundary sphere and supported in a slightly larger collar, and smooth radial interpolations with prescribed values near the two ends of an interval exist ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

## Proof

1.1 In the parametrization of [F1] the normalized field $u(y):=Y(y)/|Y(y)|$ on the boundary sphere is smooth and its degree equals $\operatorname{ind}_{b^{-1}(p)}Y+\operatorname{ind}_{b^{-1}(q)}Y=0$ by [F1] and [F3]. [F1, F3, algebra]

2.1 Fix $0<r_0<1$ so that $Y\ne0$ on the collar $\{r_0\le\|y\|\le1\}$, put $u_0(v):=Y(r_0v)/|Y(r_0v)|$, and note that the ball of radius $r_0$ contains the same two zeros, so [F1] gives $\deg u_0=0$ as well; by [F2] applied to $u_0$ there is a smooth nowhere-zero $F_0$ on $\overline B_{r_0}(0)$ with $F_0(y)=u_0(y/\|y\|)$ for $\frac23r_0\le\|y\|\le r_0$. Put $\Psi(v,s):=Y(sv)/|Y(sv)|$ on $S^{n-1}\times[r_0,1]$, choose by [F4] a smooth function $\sigma:[r_0,1]\to[r_0,1]$ with $\sigma(s)=s$ for $s$ near $1$ and $\sigma(s)=r_0$ for $s$ near $r_0$, and define $F:=F_0$ on $\overline B_{r_0}(0)$ and $F(y):=\Psi(y/\|y\|,\sigma(\|y\|))$ for $r_0\le\|y\|\le1$: the two formulas agree on the sphere $\|y\|=r_0$, where both equal $u_0(y/\|y\|)$ and are independent of $\|y\|$ in a one-sided neighbourhood of it, so $F$ is smooth and nowhere zero on $\overline B_2(0,1)$, and $F(y)=Y(y)/|Y(y)|$ on a collar $\{\|y\|\ge1-\delta\}$ because $\sigma(s)=s$ there. [F1, F2, F3, F4, step 1.1, construct]

3.1 Choose by [F4] a smooth bump $\mu$ equal to $1$ on a neighbourhood of the collar $\{\|y\|\ge1-\delta\}$ and supported in a slightly larger zero-free collar, extend $\mu|Y|$ smoothly by zero from that zero-free collar, and write $\psi:=\mu\,|Y|+(1-\mu)c$ with a positive constant $c$, and put $X'':=\psi\,F$; then $\psi$ is smooth and positive on the ball with $\psi=|Y|$ on $\{\|y\|\ge1-\delta\}$, so $X''$ is a smooth nowhere-zero field on the ball, and on that collar $X''=|Y|\cdot Y/|Y|=Y$. Therefore the field equal to $X''$ on $B$ (transported back by $db$) and to $X$ outside $\operatorname{int}B$ is smooth, agrees with $X$ on a neighbourhood of $\partial B$ and outside $\operatorname{int}B$, and is nowhere zero on $B$. [F1, F4, step 2.1, construct, algebra]

4.1 The resulting smooth field $X'$ on $M$ therefore has no zero in $B$ and coincides with $X$ off $\operatorname{int}B$, so its zero set is exactly the zero set of $X$ outside $B$, as claimed. [step 3.1, algebra] ∎
