---
id: lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle
kind: lemma
title: The fundamental-group label controls contractibility of the Whitney circle
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
- def-whitney-circle-for-a-pair-of-intersection-points
- def-based-loops-and-fundamental-group
- def-induced-homomorphism-on-fundamental-groups
- def-simply-connected
- def-path-connected
- def-connected-space
- thm-connected-and-locally-path-connected-implies-path-connected
- prop-topological-manifolds-are-locally-compact-and-locally-path-connected
- thm-fundamental-group-laws
- def-homotopy-relative-and-path-homotopy
- thm-relative-whitney-approximation-for-manifold-valued-maps
- def-countable-choice
- def-local-oriented-intersection-sign
- def-two-dimensional-torus
- prop-flat-torus-model-geometry
- def-product-orientation
- thm-fundamental-group-of-the-circle
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Proof of Theorem 7.27, printed p. 139 (the lift $\tilde\omega$ of $\omega$ to the universal cover closes
      up exactly when $g(x)=g(y)$, and $\tilde M$ is simply connected)
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Theorem 6.6 and the Remark following it, printed pp. 71-72 (the loop $L$ is required to be contractible
      in $V$; for connected $M,M'$, $r\ge2$ and $V$ simply connected no explicit hypothesis is needed)
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (complete lecture notes, ICTP/Münster)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1 §1.3, printed pp. 14-15 (the Homology Lemma uses the Whitney trick exactly when the path-composed
      loop is null-homotopic in $W$)
verification:
  precheck: pass
dependency_level: 1
---

## Statement

Let $X$ be a path-connected smooth manifold, let $A,B\subseteq X$ be complementary transverse closed connected submanifolds and let $\gamma=\alpha*\beta$ be a Whitney circle for $p,q\in A\cap B$. Then: (i) $\gamma$ bounds a continuous disk if and only if its class $[\gamma]\in\pi_1(X,p)$ is trivial; (ii) replacing $\alpha$ by another embedded arc $\alpha'$ from $p$ to $q$ in $A$ that avoids the other double points changes $[\gamma]$ by the class of the loop $\alpha'*\bar\alpha$ in $A$, an element of the image of $\pi_1(A,p)\to\pi_1(X,p)$, and replacing $\beta$ changes it by the conjugate, transported along $\alpha$, of an element of the image of $\pi_1(B,q)\to\pi_1(X,q)$; (iii) consequently, if $X$ is simply connected then every Whitney circle is null-homotopic, and in general the group label $g(z)\in\pi_1(X)$ of a double point $z$ (defined by paths in the two sheets and a path to a base point) satisfies $g(q)=g(p)\,[\gamma]$ up to the path convention. The labels must be computed with paths compatible with the chosen arcs, and null-homotopy is exactly their equality. When $X,A,B$ are oriented, define $I(z)=\varepsilon(z)g(z)$ using the oriented intersection sign; for an opposite-sign pair, label equality is exactly the group-ring condition $I(p)=-I(q)$ in $\mathbb Z[\pi_1(X)]$. No signed untwisted coefficient is asserted without these orientation data. In particular the naive signed cancellation hypothesis alone does not make the circle contractible.

## Facts & Assumptions

**Given:** A path-connected space $X$, complementary transverse closed connected submanifolds $A,B\subseteq X$, intersection points $p,q\in A\cap B$, and a Whitney circle $\gamma=\alpha*\beta$ for the ordered pair $(p,q)$ as in [[def-whitney-circle-for-a-pair-of-intersection-points]], with $\alpha:I\to A$ from $p$ to $q$ and $\beta:I\to B$ from $q$ to $p$.

[F1] Loop classes concatenate: $[\alpha][\beta]=[\alpha*\beta]$ defines a group structure on $\pi_1(X,x_0)$, the identity is the class of the constant loop and $[\alpha]^{-1}=[\bar\alpha]$; hence whenever the concatenations are defined, $[\alpha'*\beta]=[\alpha'*\bar\alpha][\alpha*\beta]$ and $[\alpha*\beta']=[\alpha*(\beta'*\bar\beta)*\bar\alpha][\alpha*\beta]$ ([[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]).

[F2] A based loop is null-homotopic exactly when its class is the identity, and a null-homotopy of the loop $\gamma$ at $p$ is a continuous map $H:I\times I\to X$ with $H(s,0)=\gamma(s)$, $H(s,1)=p$ and $H(0,t)=H(1,t)=p$ ([[def-based-loops-and-fundamental-group]], [[def-homotopy-relative-and-path-homotopy]]).

[F3] Assume countable choice $\mathrm{AC}_\omega$ for the smoothing refinement only: a continuous map that is smooth on a neighbourhood of a closed subset is homotopic relative to that subset to a smooth map equal to it on a neighbourhood of the subset ([[thm-relative-whitney-approximation-for-manifold-valued-maps]], [[def-countable-choice]]).

[F4] A continuous map induces a homomorphism of fundamental groups by composition, and $X$ is simply connected when it is nonempty and path-connected and every $\pi_1(X,x_0)$ is trivial; a connected manifold is locally path-connected and therefore path-connected ([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]], [[thm-connected-and-locally-path-connected-implies-path-connected]], [[def-induced-homomorphism-on-fundamental-groups]], [[def-simply-connected]], [[def-path-connected]], [[def-connected-space]]).

[F5] For oriented ambient manifold and oriented complementary sheets, the local oriented intersection sign is the orientation sign of $T_pA\oplus T_pB\to T_pX$, first factor $A$ ([[def-local-oriented-intersection-sign]]), products carry the product orientation ([[def-product-orientation]]); the degree isomorphism $\operatorname{Deg}:\pi_1(\mathbb R/\mathbb Z,[0])\to\mathbb Z$ classifies loops of the quotient circle ([[thm-fundamental-group-of-the-circle]]); and $T^2=\mathbb R^2/\mathbb Z^2$ is the standard torus, a connected boundaryless smooth surface whose quotient charts identify each tangent space $T_{[x]}T^2$ with $\mathbb R^2$ and make the quotient map a surjective local isometry ([[def-two-dimensional-torus]], [[prop-flat-torus-model-geometry]]).

## Proof

**Proof technique:** direct; prove the loop dictionary (i), the arc-comparison formula (ii) and the label identity (iii), then assemble the consequences and exhibit a torus model with opposite signs whose Whitney circle is not contractible.

1.1 If $F:D^2\to X$ fills $\gamma$, with the marked boundary point $z_*=1$ mapping to $p$, then $H(s,t)=F((1-t)e^{2\pi is}+tz_*)$ is a based nullhomotopy: the segment stays in the convex disk, $H(s,0)=\gamma(s)$, $H(s,1)=p$, and $H(0,t)=H(1,t)=p$. Conversely a based nullhomotopy $H$ descends through the quotient $(s,t)\mapsto(1-t)e^{2\pi is}$, because its two side edges agree and its top edge is constant. The descended continuous map fills $\gamma$. Thus $\gamma$ bounds a continuous disk exactly when $[\gamma]=1$. [F1, F2, given, construct]

1.2 For another $A$ arc $\alpha\prime$, cancellation of $\bar\alpha*\alpha$ gives $[\alpha\prime*\beta]=[\alpha\prime*\bar\alpha][\gamma]$. The first factor is the image of a loop in $A$ based at $p$. For another $B$ arc $\beta\prime$, the loop $\delta=\beta\prime*\bar\beta$ is based at $q$, and $[\alpha*\beta\prime]=[\alpha*\delta*\bar\alpha][\gamma]$. Thus this change is a left multiplier in the image of the $B$ group transported from $q$ to $p$ along $\alpha$. All displayed products now lie in $\pi_1(X,p)$. [F1, F4, algebra]

2.1 The continuous criterion needs no smoothing. For a smooth refinement, reparametrize each smooth arc by a smooth increasing interval map flat to all orders at both endpoints. Their concatenation $\widetilde\gamma$ is a smooth based loop, since all one-sided derivatives vanish at both corners; interpolation of the interval parameters gives a based homotopy to $\gamma$. This reparametrized loop need not be an immersion. A continuous filling of $\widetilde\gamma$ can be made radial-constant on an outer annulus, extended a little outside the disk, and smoothed by [F3] relative to a closed exterior annulus. Its restriction is a smooth disk map with that boundary. This optional refinement assumes $\mathrm{AC}_\omega$; it does not assert the product corner collars or cleanliness required of a Whitney disk, which are supplied by the later geometric constructions. [F3, step 1.1, construct]

2.2 For (iii), fix a base point $x_0\in X$ and a path $\lambda$ from $x_0$ to $p$, and for a double point $z$ choose a path $a_z$ in $A$ from $p$ to $z$ and a path $b_z$ in $B$ from $z$ to $p$; define the group label $g(z):=[\lambda*a_z*b_z*\bar\lambda]\in\pi_1(X,x_0)$. With the compatible choices $a_p,b_p$ constant, $a_q=\alpha$, $b_q=\beta$ this gives $g(p)=[\lambda*\bar\lambda]=1$ and $g(q)=[\lambda*\alpha*\beta*\bar\lambda]=\lambda_*[\gamma]$, so $g(q)=g(p)\,[\gamma]$ after transporting back along $\lambda$; changing $a_z$ along a loop of $A$ or $b_z$ along a loop of $B$ multiplies the label by an element of the image of the corresponding sheet group, which is the path convention left open in the statement. Hence the two points carry equal labels exactly when $[\gamma]=1$, which by step 1.1 is exactly the condition that the Whitney circle bounds a disk; When $X,A,B$ are oriented and the signs are opposite, [F5] defines $\varepsilon(z)$, and $I(z):=\varepsilon(z)g(z)$ satisfies $I(p)=-I(q)$ exactly when the labels are equal. The unsigned label equality and disk criterion do not require orientations. If $X$ is simply connected, then $\pi_1(X,p)=1$ by [F4] and $[\gamma]=1$ for every choice of arcs, so every Whitney circle is null-homotopic. [F1, F4, F5, step 1.1, step 1.2]

3.1 Finally, the signed hypothesis alone is strictly weaker. For the declared smooth-torus supplier [F5] in this witness assume $\mathrm{AC}_\omega$. In the torus $X_0=T^2=\mathbb R^2/\mathbb Z^2$ oriented as the product of its two circle factors let $A_0$ be the horizontal circle $\mathbb R\times\{0\}/\mathbb Z^2$ and let $B_0$ be the graph of $f(x)=\tfrac14\sin(2\pi x)$; orient both circles by increasing $x$. They are closed connected embedded circles, so they are complementary in dimension $2$, and $A_0\cap B_0=\{(0,0),(1/2,0)\}$ with transverse crossings because $f$ vanishes exactly at $x=0$ and $x=1/2$ in $[0,1)$ and $f'(0)=\pi/2>0>f'(1/2)$. In the frame $(\partial_x,\partial_y)$ the isomorphism $T_pA_0\oplus T_pB_0\to T_pX_0$ has matrix with columns $(1,0)$ and $(1,f'(x))$, of determinant $f'(x)$, so by [F5] the intersection signs are $\varepsilon(0,0)=+1$ and $\varepsilon(1/2,0)=-1$: the two points have opposite signs and the signed count vanishes. Let $\alpha(t)=(t/2,0)$ and $\beta(t)=((1+t)/2,f((1+t)/2))$ for $t\in I$, using quotient coordinates; then $\gamma=\alpha*\beta$ is a Whitney circle for the pair. Its first coordinate traces $0\mapsto1/2$ along $\alpha$ and $1/2\mapsto1$ along $\beta$, so the projection $pr:T^2\to\mathbb R/\mathbb Z$ satisfies $pr\circ\gamma=\omega_1$, whose class is nontrivial by [F5]. If $[\gamma]$ were trivial, then by the induced homomorphism of [F4] the class $[pr\circ\gamma]=pr_*[\gamma]$ would be trivial as well, a contradiction; hence $[\gamma]\neq1$ and, by step 1.1, the circle bounds no disk, although its two points have opposite signs and vanishing signed count. Therefore the signed cancellation hypothesis alone does not make the Whitney circle contractible; the missing datum is exactly the label of step 2.2. [F1, F4, F5, step 1.1, step 2.2] ∎
