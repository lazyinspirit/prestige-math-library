---
id: ex-broken-trajectories-in-an-index-two-torus-moduli-space
kind: example
title: "Broken trajectories in an index-two torus moduli space"
status: published
origin: pipeline
deps: [cor-every-smooth-vector-field-on-a-compact-manifold-is-complete, def-axiom-of-choice, lem-smooth-bump-between-concentric-euclidean-balls, def-downward-gradient-like-vector-field, def-morse-smale-pair, thm-index-two-compactification-is-a-compact-one-manifold-with-boundary, lem-gluing-broken-index-two-trajectories-gives-collar-ends, def-mod-two-morse-differential]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 17 Sec. 5.1 (the tilted torus: four open subdiagonals, eight broken trajectories; PDF pp. 76-78)"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.2.a and Figure 3.1-3.2, printed pp. 59-61 (broken trajectories compactifying a one-dimensional moduli space)"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 13 and Appendix A, complete author PDF"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
      locator: "Ch. 13 Sec. 13.4 and Figure 6, printed pp. 522-523 (four intervals and eight composable pairs on the tilted torus)"
dependency_level: 6
---

## Example

Assume AC. A concrete model of the tilted-torus trajectory picture is $M=(\mathbb R/2\pi\mathbb Z)^2$ with $f(u,v)=\cos u+2\cos v$ and the normalized product field constructed below. Its critical points are $a=(0,0)$ of index $2$, $b=(\pi,0)$ and $c=(0,\pi)$ of index $1$, and $d=(\pi,\pi)$ of index $0$. Each of $\mathcal M(a,b)$, $\mathcal M(a,c)$, $\mathcal M(b,d)$ and $\mathcal M(c,d)$ has two elements. The space $\mathcal M(a,d)$ consists of four open intervals, compactified to four disjoint closed intervals with eight once-broken endpoints. Modulo two, $\partial a=2b+2c=0$ and $\partial b=\partial c=2d=0$, so $\partial^2=0$.

## Facts & Assumptions

**Given:** AC and the torus $M$ with the displayed function.

[A1] AC supplies the compactification and differential results used below ([[def-axiom-of-choice]]).

[F1] Smooth cutoffs between nested coordinate balls exist ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F2] A downward gradient-like field must have $df(X)<0$ off the critical set and the exact normalized local Morse model; Morse--Smale means transverse stable and unstable manifolds ([[def-downward-gradient-like-vector-field]], [[def-morse-smale-pair]]). Under AC, a smooth vector field on a compact manifold is complete ([[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]).

[F3] For index drop two the compactification is a compact one-manifold, with once-broken products as its boundary and a unique one-sided collar at each endpoint ([[thm-index-two-compactification-is-a-compact-one-manifold-with-boundary]], [[lem-gluing-broken-index-two-trajectories-gives-collar-ends]]).

[F4] The mod-two differential counts only index-one trajectories modulo two ([[def-mod-two-morse-differential]]).

## Verification

**Proof technique:** direct, by an explicit product flow.

1.1 Choose a smooth positive periodic function $\mu(\theta)$ equal to $4/(1+\cos\theta)$ near $0$ and $4/(1-\cos\theta)$ near $\pi$. It exists by [F1]: use disjoint cutoff neighbourhoods of the poles and take the convex combination of these positive local functions with the constant $2$ outside them. Put $Y(\theta)=\mu(\theta)\sin\theta$ and $X=(Y(u),Y(v))$. Then $df(X)=-\mu(u)\sin^2u-2\mu(v)\sin^2v<0$ off the four critical points. Near $0$, the signed coordinate $w=\operatorname{sgn}(\theta)\sqrt{1-\cos\theta}$ is smooth and satisfies $\dot w=2w$; near $\pi$, $w=\operatorname{sgn}(\theta-\pi)\sqrt{1+\cos\theta}$ satisfies $\dot w=-2w$. Multiplying the second coordinate by $\sqrt2$ gives exactly the Morse coordinates for the weighted second cosine. Thus $X$ satisfies [F2]. The Hessian $\operatorname{diag}(-\cos u,-2\cos v)$ has indices $2,1,1,0$ at $a,b,c,d$. [F1, F2, given, construct, algebra]

2.1 In each coordinate, stable and unstable sets are a pole or the circle with the other pole removed. Their products in $M$ are transverse: every nonempty coincidence has, in each coordinate, at least one full tangent direction; the only potential point/point intersection for distinct equilibria is empty. The smooth field is complete on compact $M$ by [F2], so the pair is Morse--Smale. For each adjacent-index pair, one coordinate is constant and the other follows either of the two complementary arcs, giving exactly two orbit classes. These are all adjacent-index pairs. [F2, step 1.1, algebra]

3.1 On each of the four open rectangles between the coordinate separatrices, both coordinates run from $0$ to $\pi$. On either chosen arc the time coordinate $\tau(\theta)=\int_{\theta_*}^{\theta}d\eta/Y(\eta)$ is a diffeomorphism onto $\mathbb R$: its derivative has the sign of $Y$, and the simple zeros of $Y$ make the endpoint times infinite. Every trajectory is therefore $u(t)=\tau_u^{-1}(t-A)$, $v(t)=\tau_v^{-1}(t-B)$. Common time translation changes $A$ and $B$ equally, leaving the relative delay $A-B\in\mathbb R$ as the unique parameter. Its two infinite ends break through $b$ and $c$, respectively, with the arc choices fixed. Hence there are four open intervals, each with its two distinct broken endpoints. [step 1.1, step 2.1, algebra]

4.1 By [F3] these are exactly the compactifying endpoints, with one collar branch each; the fixed arc choices identify each broken pair with the appropriate rectangle, so no endpoints are identified across intervals. There are $2\cdot2+2\cdot2=8$ pairs in $(\mathcal M(a,b)\times\mathcal M(b,d))\sqcup(\mathcal M(a,c)\times\mathcal M(c,d))$, two per closed interval. By [F4] the differential is $\partial a=2b+2c=0$, $\partial b=\partial c=2d=0$ and $\partial d=0$. [A1, F3, F4, step 2.1, step 3.1] ∎
