---
id: prop-cover-asphericity-interface-artin-tits-prerequisites
kind: proposition
title: Coverings preserve the higher-homotopy obstruction to K(pi,1)
status: published
domain: mathematics
origin: pipeline
deps:
  - math:def-covering-map-and-evenly-covered-neighbourhoods
  - math:thm-covering-space-lifting-criterion
  - math:thm-homotopy-lifting-for-covering-maps
  - math:def-higher-homotopy-group-by-based-cubes
  - math:prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant
  - math:def-eilenberg-maclane-space
  - math:def-homotopy-equivalence
  - math:def-cw-complex-with-closure-finiteness-and-weak-topology
  - math:prop-higher-homotopy-basepoint-transport-and-moving-homotopies
dependency_roles:
  math:def-covering-map-and-evenly-covered-neighbourhoods: mathematical-premise
  math:thm-covering-space-lifting-criterion: mathematical-premise
  math:thm-homotopy-lifting-for-covering-maps: mathematical-premise
  math:def-higher-homotopy-group-by-based-cubes: mathematical-premise
  math:prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant: mathematical-premise
  math:def-eilenberg-maclane-space: mathematical-premise
  math:def-homotopy-equivalence: mathematical-premise
  math:def-cw-complex-with-closure-finiteness-and-weak-topology: mathematical-premise
  math:prop-higher-homotopy-basepoint-transport-and-moving-homotopies: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement

Let $p:E\to B$ be a covering map with $E$ and $B$ nonempty and path-connected, and choose $e\in E$. For every $n\geq2$, postcomposition with $p$ induces an isomorphism $p_*:\pi_n(E,e)\to\pi_n(B,p(e))$. Here a covering map is a surjective continuous map for which every point of $B$ has an open neighbourhood whose inverse image is a disjoint union of open sets each mapped homeomorphically onto that neighbourhood.

Call a nonempty path-connected space aspherical when all its homotopy groups in degrees at least two vanish. Then $E$ is aspherical if and only if $B$ is aspherical. In particular, if either space is a CW complex and its fundamental group is equipped with a specified isomorphism to $G$, that space is a $K(G,1)$ exactly when it is aspherical. For either $X=E$ or $X=B$, suppose instead that $X$ is of CW homotopy type and has a specified isomorphism $\pi_1(X,x)\cong G$. Then $X$ has the homotopy type of a $K(G,1)$ exactly when it is aspherical. Here being of CW homotopy type means being homotopy equivalent to a CW complex; the equivalence and its inverse homotopies need not preserve basepoints. These statements do not identify the two fundamental groups or supply a finite CW model.

## Facts & Assumptions

[F1] The covering lifting criterion gives a unique based lift of a map from a path-connected, locally path-connected based space when the image of its fundamental group lies in the image of the covering's fundamental group ([[math:thm-covering-space-lifting-criterion]]).

[F2] A homotopy into the base of a covering has a unique lift extending any specified lift at time zero ([[math:thm-homotopy-lifting-for-covering-maps]]).

[F3] $\pi_n(X,x)$ is represented by maps $I^n\to X$ taking the whole boundary to $x$, modulo homotopies fixed on that boundary ([[math:def-higher-homotopy-group-by-based-cubes]]). Postcomposition induces a group homomorphism on these classes ([[math:prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]).

[F4] Fibres of a covering are discrete, by its evenly covered neighbourhoods ([[math:def-covering-map-and-evenly-covered-neighbourhoods]]). A $K(G,1)$ is a connected based CW complex with the specified fundamental-group isomorphism and vanishing higher homotopy groups ([[math:def-eilenberg-maclane-space]]). Homotopy equivalence is defined by maps whose two composites are homotopic to the respective identities ([[math:def-homotopy-equivalence]]). CW complexes have the cell filtration, closure finiteness and weak topology of [[math:def-cw-complex-with-closure-finiteness-and-weak-topology]].

[F5] For a path $\gamma:y_0\to y_1$ in $Y$ and $n\geq1$, basepoint transport $\beta_\gamma:\pi_n(Y,y_1)\to\pi_n(Y,y_0)$ is an isomorphism. If $H:u\simeq v$ is a homotopy and $\gamma(t)=H(z_0,t)$, then $u_*=\beta_\gamma\circ v_*$ on the groups based at $z_0$ ([[math:prop-higher-homotopy-basepoint-transport-and-moving-homotopies]]).

## Proof
**Given:** The covering, basepoint, and path-connected spaces in the statement. Write $b=p(e)$ and $I=[0,1]$.

**Goal:** Prove the higher-homotopy isomorphisms and the stated consequences.

1.1 Fix $n\geq2$. The cube $I^n$ is path-connected and locally path-connected, and every loop in it contracts to its basepoint by straight-line interpolation inside the cube. Thus its fundamental group is trivial. A representative $a:(I^n,\partial I^n)\to(B,b)$ has a lift taking a chosen boundary point to $e$ by [F1]. The boundary $\partial I^n$ is connected for $n\geq2$; the lift maps it continuously into the discrete fibre $p^{-1}(b)$, so the entire boundary maps to $e$. Hence every class in $\pi_n(B,b)$ is in the image of $p_*$. [given, F1, F3, F4]

1.2 Let $X$ be either $E$ or $B$ and suppose that $X$ is of CW homotopy type. Choose a CW complex $C$, a homotopy equivalence $f:C\to X$ and an inverse $g:X\to C$, with homotopies $gf\simeq\operatorname{id}_C$ and $fg\simeq\operatorname{id}_X$. Since $X$ is nonempty, so is $C$. For any $c,d\in C$, a path in $X$ from $f(c)$ to $f(d)$ maps under $g$ to a path from $gf(c)$ to $gf(d)$; the first homotopy supplies paths from $gf(c)$ to $c$ and from $gf(d)$ to $d$. Reversing the first and concatenating shows that $C$ is path-connected. [given, F4, choose, construct]

2.1 Suppose two based cube maps into $E$ have images that are homotopic relative to $\partial I^n$ in $B$. By [F2], lift that homotopy starting with the first map. On each boundary point the lifted time path lies in the discrete fibre over $b$ and starts at $e$, so it is constant. At time one, the resulting based lift and the second map lift the same cube map and agree at a boundary point; uniqueness in [F1] makes them equal. The lifted homotopy is therefore relative to the boundary, proving injectivity on classes. [F1, F2, F3, F4, step 1.1]

2.2 Fix $c\in C$, put $y=f(c)$, and let $n\geq1$. Write $A=f_*:\pi_n(C,c)\to\pi_n(X,y)$ and $B=g_*:\pi_n(X,y)\to\pi_n(C,g(y))$. The homotopy $gf\simeq\operatorname{id}_C$ and [F5] show that $BA=(gf)_*$ is a basepoint-transport isomorphism. Similarly, with $D=f_*:\pi_n(C,g(y))\to\pi_n(X,fg(y))$, the homotopy $fg\simeq\operatorname{id}_X$ shows that $DB=(fg)_*$ is an isomorphism. Hence $A$ and $B$ are injective. For $v\in\pi_n(X,y)$, surjectivity of $BA$ gives $u$ with $BA(u)=B(v)$; injectivity of $B$ then gives $A(u)=v$. Thus $A$ is an isomorphism, even though the original inverse homotopies need not be based. [F3, F5, step 1.2]

3.1 By [F3], $p_*$ is a homomorphism; steps 1.1 and 2.1 show it is bijective and hence an isomorphism. Basepoint transport in [F5] makes vanishing independent of the basepoint in a path-connected space. Consequently $E$ is aspherical exactly when $B$ is. For either space that is a CW complex, the $K(G,1)$ criterion follows from [F4] and its specified fundamental-group identification. [F3, F4, F5, step 1.1, step 2.1]

4.1 For the specified basepoint $x\in X$, choose a path $\eta:y\to x$. By [F5] and step 2.2, $\beta_\eta^{-1}\circ f_*:\pi_n(C,c)\to\pi_n(X,x)$ is an isomorphism for every $n\geq1$. In degree one, composing with the specified isomorphism to $G$ equips $C$ with the required fundamental-group identification. In degrees at least two, it shows that $C$ is aspherical exactly when $X$ is. Thus if $X$ is aspherical, $C$ is a $K(G,1)$ by [F4]. Conversely, if $X$ is homotopy equivalent to a $K(G,1)$, the same argument with that CW model gives vanishing of the higher groups of $X$. No step identifies the fundamental groups of $E$ and $B$ or asserts finiteness of a CW model. [F4, F5, step 1.2, step 2.2, choose] ∎
