---
id: lem-generic-complex-algebraic-whitney-regularity
kind: lemma
title: "Generic complex algebraic Whitney regularity"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-ag-standard-smooth-algebra,
       def-axiom-of-choice,
       def-classical-algebraic-prevariety-regular-maps-and-varieties,
       def-finite-complex-algebraic-whitney-stratification-and-control-data,
       lem-classical-variety-noetherian-components,
       lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs,
       lem-dimension-nonempty-open-subset,
       lem-grassmannian-standard-affine-charts,
       thm-generic-fibre-dimension,
       thm-holomorphic-implicit-function-theorem,
       thm-regular-equals-smooth-over-perfect-field,
       thm-zariski-tangent-space-jacobian-kernel]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Hassler Whitney, Tangents to an analytic variety, Annals of Mathematics 81 (1965), 496-549"
      url: "https://doi.org/10.2307/1970400"
      locator: "Whitney conditions (a) and (b)"
---

## Statement

Assume AC. Let $S,Y\subseteq\mathbb C^n$ be disjoint irreducible smooth locally
closed complex algebraic varieties with $Y\subseteq\overline S$ and
$\dim Y<\dim S$. There is a proper closed algebraic subset $E\subsetneq Y$ such
that $(S,Y)$ satisfies Whitney (a) and (b) at every point of $Y\setminus E$.
Finite prescribed incident upper strata can be treated with one common
exceptional subset by taking a finite union. The same result holds in the
affine charts of a quasi-projective algebraic ambient manifold.

## Facts & Assumptions

**Given:** AC, smooth irreducible disjoint locally closed $S,Y\subseteq\mathbb C^n$ with $Y\subseteq\overline S$ and $\dim Y<\dim S$.

[F1] Whitney (a) and (b) for an incident pair are the conditions of [[def-finite-complex-algebraic-whitney-stratification-and-control-data]]: limits of tangent planes and of real secant lines through points of the lower stratum are compared inside a complex tangent plane, and both conditions are required.

[F2] A dominant morphism between irreducible classical varieties has nonempty fibres of pure dimension $\dim X-\dim Y$ over a dense open subset of the target ([[thm-generic-fibre-dimension]]).

[F3] A point of a positive-dimensional irreducible complex variety can be reached by a normalized holomorphic arc whose punctured part lies in any prescribed nonempty Zariski open subset ([[lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs]]).

[F4] Closed algebraic subsets of a classical variety have finitely many irreducible components, and every proper closed subvariety of an irreducible variety has strictly smaller dimension; a finite union of closed subsets has dimension the maximum of the dimensions of its components ([[lem-classical-variety-noetherian-components]], [[lem-dimension-nonempty-open-subset]]).

[F5] For $X=\operatorname{Spec}(\mathbb C[t_1,\ldots,t_m]/I)$ the tangent space at a $\mathbb C$-point is the kernel of the Jacobian of any finite generating list of $I$ ([[thm-zariski-tangent-space-jacobian-kernel]]); Grassmannian matrix charts and their transition maps are algebraic regular maps ([[lem-grassmannian-standard-affine-charts]]). A smooth complex algebraic variety is locally standard smooth, so it admits near each point a standard smooth presentation with $n\ge c\ge0$ whose defining equations have an invertible Jacobian minor and the holomorphic implicit function theorem exhibits the variety as a holomorphic graph over its tangent coordinates ([[def-ag-standard-smooth-algebra]], [[thm-holomorphic-implicit-function-theorem]], [[thm-regular-equals-smooth-over-perfect-field]]); consequently the algebraic tangent plane of that graph is also the analytic tangent space, and the derivative of any holomorphic arc lying in the variety lies in it.

[F6] Products of irreducible classical varieties over $\mathbb C$ are irreducible. For affine factors $A,B$, let $D(f),D(g)$ be two nonempty principal opens of $A\times B$. Choose $(a_f,b_f)$ where $f$ is nonzero and $(a_g,b_g)$ where $g$ is nonzero. The nonempty opens $D(f(-,b_f))$ and $D(g(-,b_g))$ of $A$ meet at some $a$. Then $D(f(a,-))$ and $D(g(a,-))$ meet in $B$, giving a point of $D(f)\cap D(g)$. Principal opens form a basis on the affine product, so it is irreducible. Product affine charts cover the general product; their overlaps are nonempty opens, hence dense in each chart, and the same intersection argument proves irreducibility globally. Also $\operatorname{Gr}(d,n)$ and $\mathbb P^{n-1}$ are irreducible: their standard affine charts are irreducible affine spaces with nonempty open overlaps, so any two nonempty opens meet by passing through an overlap ([[def-classical-algebraic-prevariety-regular-maps-and-varieties]], [[lem-grassmannian-standard-affine-charts]]).

[A1] AC is inherited from the fiber-dimension, curve-arc and Jacobian suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Put $d=\dim S$ and let $G$ be the graph of the map $(x,y)\mapsto(T_xS,[x-y])$ from $S\times Y$ to $\operatorname{Gr}(d,n)\times\mathbb P^{n-1}$; it is algebraic by [F5], because on chart domains the tangent plane is the kernel of the Jacobian matrix of local equations, whose basis entries are regular ratios on each fixed nonzero-minor chart and the secant coordinates are regular since $x\ne y$. Let $Z$ be the reduced closure of $G$ in $\overline S\times Y\times\operatorname{Gr}(d,n)\times\mathbb P^{n-1}$. The graph $G$ is isomorphic to $S\times Y$, hence irreducible by [F6], and $\overline S$, $Y$, $\operatorname{Gr}(d,n)$ and $\mathbb P^{n-1}$ are irreducible; the ambient product is therefore irreducible by [F6], and its closed subset $Z$, the closure of the irreducible $G$, is irreducible as well. Let $B=Z\setminus G$, a proper closed subset, and let $g:Z\to Y$ be the projection; it is dominant because it is onto on $G$. [F4, F5, F6, A1, construct]

2.1 Apply [F2] to $g$ to obtain a dense open subset of $Y$ over which the fibres $Z_y$ are nonempty and pure of dimension $r=\dim Z-\dim Y$. This number is positive, because each fibre contains $G_y=\{(x,y,T_xS,[x-y]):x\in S\}\cong S$ of dimension $\dim S\ge1$. Each irreducible component $B_i$ of the proper closed subset $B$ has $\dim B_i<\dim Z$ by [F4]; if $B_i\to Y$ is dominant, [F2] gives a further dense open of $Y$ over which its fibres have pure dimension $\dim B_i-\dim Y\le r-1$, and if it is not dominant we remove its image closure. Intersecting the finitely many dense opens leaves a dense open $Y^0\subseteq Y$ on which $Z_y$ is pure $r$-dimensional while $B_y$ has dimension at most $r-1$; hence no irreducible component of $Z_y$ is contained in $B_y$, and for every component $V$ of $Z_y$ the set $V\cap G_y=V\setminus B_y$ is a nonempty dense open subset of the irreducible $V$. [F2, F4, A1, step 1.1, algebra]

3.1 Fix $y\in Y^0$ and an incidence point $z_0=(y,y,T,[u])\in Z_y$ with $u\ne0$. Let $V$ be an irreducible component of $Z_y$ containing $z_0$ and let $\gamma$ be the holomorphic arc supplied by [F3] for the variety $V$, the nonempty Zariski open $V\setminus B_y$ and the point $z_0$. Since $\gamma$ maps into $Z_y$ and $Z_y\subseteq g^{-1}(y)$, its second coordinate is the constant $y$; write $\gamma(s)=(x(s),y,T(s),[u(s)])$ with $\gamma(0)=z_0$ and $\gamma(s)\in G$ for $s\ne0$. Then $T(s)=T_{x(s)}S$ and $[u(s)]=[x(s)-y]$ for $s\ne0$, so $x(s)\ne y$ for $s\ne0$. Choosing a projective chart containing $[u]$, the normalized representative of the arc is holomorphic, and since $x(s)-y$ is not identically zero some coordinate has finite positive vanishing order; with $m\ge1$ the minimum of these orders, $x(s)-y=s^mv(s)$ with $v$ holomorphic and $v(0)\ne0$, and $[v(0)]=[u]$. [F3, A1, step 2.1, construct]

4.1 Let $p_0$ be a complex covector annihilating the complex plane $T$. In a Grassmannian matrix chart around $T$ write $T(s)$ as the graph of a holomorphic matrix $A(s)$ with $A(0)=A_0$, possible for small $s$ because $T(s)\to T$; every annihilator of the graph of $A(s)$ has the form $q(s)=(-A(s)^tb,b)$ for $b\in(\mathbb C^{n-d})^*$, and $b$ can be chosen with $(-A_0^tb,b)=p_0$ because $p_0$ annihilates $T$. The resulting $q(s)$ is holomorphic and annihilates each $T(s)$. Since $x(s)\in S$ for $s\ne0$, its derivative lies in $T_{x(s)}S=T(s)$ by [F5], so $q(s)(x'(s))=0$ for $s\ne0$. Differentiating $x(s)-y=s^mv(s)$ gives $x'(s)=s^{m-1}(mv(s)+sv'(s))$, and dividing by $s^{m-1}$ and letting $s\to0$ yields $p_0(mv(0))=0$, hence $p_0(v(0))=0$. Every annihilator of $T$ therefore kills $v(0)$, so $v(0)\in T$ and the limiting complex secant line $[u]$ lies in $T$. [F5, A1, step 3.1, algebra]

5.1 Now let $x_j\in S$ and $y_j\in Y$ be sequences converging to the same point $y\in Y^0$, with tangent planes $T_{x_j}S$ converging to a plane $T$ and real secant lines through $x_j,y_j$ converging to a real line $\ell$. After choosing their signs, the secant directions normalized to unit vectors converge to a unit vector $w$ spanning $\ell$, and the complex projective points $[x_j-y_j]=[w_j]$ converge to $[w]$, the complex line spanned by $\ell$; moreover $(x_j,y_j,T_{x_j}S,[x_j-y_j])\in G\subseteq Z$ converges to $(y,y,T,[w])\in Z_y$ because $Z$ is closed. Applying steps 3.1 and 4.1 to this incidence point shows that its limiting complex secant line lies in $T$, so $w\in T$ and $\ell=\mathbb Rw\subseteq T$. This is Whitney (b) at $y$ in the full moving-point form. [F1, step 3.1, step 4.1]

6.1 For Whitney (a) at $y$, let $x_j\in S$ converge to $y$ with tangent planes converging to $T$, and let $w\in T_yY$ be a nonzero real tangent vector (the zero vector already belongs to $T$). In a holomorphic chart of the smooth manifold $Y$ near $y$ choose points $y_j\in Y$ of the form $y+\epsilon_jw+o(\epsilon_j)$ with $\epsilon_j>0$, $\epsilon_j\to0$ and $\|x_j-y\|/\epsilon_j\to0$, for instance $\epsilon_j=\sqrt{\|x_j-y\|}$ and a straight segment in the chart. Then $\|x_j-y_j\|\ge\epsilon_j\|w\|/2$ for large $j$, and the secant directions from $y_j$ to $x_j$ converge to the real line spanned by $w$. Since the tangent planes $T_{x_j}S\to T$, Whitney (b) from step 5.1 places that real line in $T$, so $w\in T$. Every real tangent vector of $T_yY$ arises in this way, so $T_yY\subseteq T$, proving Whitney (a). [F1, step 5.1, construct]

7.1 Set $E=Y\setminus Y^0$; it is a proper closed algebraic subset by step 2.1, and steps 5.1 and 6.1 show that $(S,Y)$ satisfies (a) and (b) at every point of $Y\setminus E$. For finitely many prescribed incident upper strata $S_1,\ldots,S_m$ over the same irreducible $Y$, apply the construction to each and take the union of the finitely many proper closed exceptional sets; since $Y$ is irreducible, that finite union is still proper, by [F4]. For a quasi-projective ambient manifold, use the finitely many affine ambient charts $U_\alpha$ that meet $Y$; their intersections with the irreducible $Y$ are nonempty opens. Inside each chart apply the affine result to every pair of irreducible components $(S_i,Y_j)$ of $(S\cap U_\alpha,Y\cap U_\alpha)$ with $Y_j\subseteq\overline{S_i}$ and $\dim Y_j<\dim S_i$, and for each point of an irreducible component of $Y\cap U_\alpha$ one of these pairs accounts for every sequence in $S$ converging to it after passing to a subsequence in a component. Each chart exceptional set is closed in $Y\cap U_\alpha$ and has smaller dimension than $Y$, so its closure in $Y$ is proper by [F4]. The union of these finitely many closures and the proper closed complements $Y\setminus U_\alpha$ is still proper because $Y$ is irreducible. Outside this union every chart argument applies, giving the required closed $E\subsetneq Y$. [F4, step 2.1, step 5.1, step 6.1] ∎

## Remarks

- The decisive passage is step 4.1: differentiability of an arbitrary radial curve alone does not prove Whitney (b), because the limiting tangent plane must be recovered from generic fibre purity of the full moving-secant incidence closure. The cited Whitney article identifies the established theorem; the proof above is the local algebraic construction, and the fixed-lower-point arc is supplied by [[lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs]].
