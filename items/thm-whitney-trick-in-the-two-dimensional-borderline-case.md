---
id: thm-whitney-trick-in-the-two-dimensional-borderline-case
kind: theorem
title: The Whitney trick in the codimension-two borderline case
deps:
- def-whitney-circle-for-a-pair-of-intersection-points
- lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points
- lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle
- def-local-oriented-intersection-sign
- def-oriented-smooth-manifold-and-oriented-chart
- def-normal-and-conormal-bundles-of-an-embedded-submanifold
- def-smooth-embedding
- def-simply-connected
- def-countable-choice
- lem-metastable-embedding-for-maps-from-a-compact-manifold
- lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected
- thm-whitney-move-removes-a-cancelling-pair-of-intersections
- lem-opposite-local-signs-give-the-compatible-whitney-circle-framing
- thm-parametric-transversality
- thm-transverse-preimage-theorem
- thm-relative-whitney-approximation-for-manifold-valued-maps
- lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
- thm-smooth-dependence-of-ode-solutions-on-parameters
- thm-weak-whitney-proper-embedding-theorem
- thm-gram-schmidt-orthonormalisation
- thm-smooth-partitions-of-unity-exist-on-manifolds
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Theorem 6.6, Remark and proof, printed pp. 71-74 (hypotheses $r+s\ge5$, $s\ge3$, injectivity of $\pi_1(V-M')\to\pi_1(V)$
      when $r\le2$; the cases $r=2$ handled by the fundamental-group hypothesis)
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Theorem 7.27(i), printed p. 138 (the alternative hypothesis $n_1=2$, $n_2\ge3$ with $\pi_1(M)\cong\pi_1(M\setminus
      N_1)$)
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 5
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $X^m$ be a smooth manifold without boundary and let $A^r,B^s\subseteq X$ be closed connected embedded submanifolds meeting transversely with $r+s=m$, $$s\ge3,\qquad m\ge5,$$ and suppose $A$ is oriented and the normal bundle of $B$ in $X$ is oriented. If $r\le2$, assume in addition that inclusion induces an injection $\pi_1(X\setminus B)\to\pi_1(X)$. Let $p,q\in A\cap B$ have opposite intersection numbers and suppose there are embedded arcs from $p$ to $q$ in $A$ and from $q$ to $p$ in $B$, both avoiding $A\cap B\setminus\{p,q\}$, whose concatenation is null-homotopic in $X$ (automatic if $A,B$ are connected, $r\ge2$ and $X$ is simply connected). Then there is an isotopy $h_t$ of the identity of $X$, $0\le t\le1$, fixing a neighbourhood of $A\cap B\setminus\{p,q\}$, such that $h_1(A)$ meets $B$ exactly in $A\cap B\setminus\{p,q\}$. This is the handle-theoretic borderline of the trick: one sheet may have dimension two, so the other has codimension two provided the other has dimension at least three and the fundamental-group complement condition holds; it is not a consequence of the clean-disk general-position lemma.

## Facts & Assumptions

[F1] Metastable approximation of maps by embeddings. [[lem-metastable-embedding-for-maps-from-a-compact-manifold]]

[F2] A transverse finite-dimensional evaluation family has transverse slices outside a null parameter set. [[thm-parametric-transversality]]

[F3] A transverse inverse image has dimension equal to source dimension minus target codimension. [[thm-transverse-preimage-theorem]]

[F4] Opposite signs in locally oriented sheet collars give compatible adjustable admissible partial boundary frames. [[lem-opposite-local-signs-give-the-compatible-whitney-circle-framing]]

[F5] Real orthonormal frame spaces with complement rank at least two are simply connected. [[lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected]]

[F6] Under Countable Choice, continuous manifold-valued maps smooth near a closed set can be smoothed through a homotopy fixed near that set. [[thm-relative-whitney-approximation-for-manifold-valued-maps]]

[F7] A linear matrix initial-value problem with continuous coefficients has a unique solution on the prescribed compact interval. [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]

[F8] Jointly smooth finite-dimensional ODE coefficients give smooth local solution dependence on parameters; uniqueness permits composition along a compact solution interval. [[thm-smooth-dependence-of-ode-solutions-on-parameters]]

[F9] The Whitney move removes a cancelling pair of intersection points. [[thm-whitney-move-removes-a-cancelling-pair-of-intersections]]

[F10] Under Countable Choice every smooth manifold has a proper finite-dimensional Euclidean embedding. [[thm-weak-whitney-proper-embedding-theorem]]

[F11] Gram–Schmidt orthonormalizes a finite independent list and preserves its successive spans. [[thm-gram-schmidt-orthonormalisation]]

[F12] Under Countable Choice smooth partitions of unity subordinate to open covers exist. [[thm-smooth-partitions-of-unity-exist-on-manifolds]]

## Proof


**Given:** The locally oriented $r$-sheet and oriented normal bundle of the $s$-sheet, $s\ge3$, $m=r+s\ge5$, opposite signs, a specified nullhomotopic arc loop, and complement injection when $r\le2$.

1.1 Form Milnor's boundary annulus in complementary corner charts and sheet collars. Along the $r$-sheet arc choose its inward normal direction and along the $s$-sheet arc choose the direction in its oriented normal bundle. At the two corners the latter is the first-sheet velocity and its negative respectively, so opposite intersection signs give matching oriented choices. For $r=1$ the normal direction along the $s$-sheet is a line: the sign computation is precisely what lets its two endpoint choices agree. This yields a clean embedded annulus whose inner loop $\lambda$ lies outside both sheets and is nullhomotopic in $X$. [given, construct]

2.1 If $r\ge3$, make a nullhomotopy of $\lambda$ transverse to $B$ relative to a fixed boundary collar. Its inverse image of $B$ has expected dimension $2-r<0$ and is empty, so $\lambda$ contracts in $X\setminus B$. If $r=1$ or $2$, the assumed injectivity of $\pi_1(X\setminus B)\to\pi_1(X)$ gives exactly the same conclusion, since $\lambda$ already lies in the complement and its ambient class is trivial. Now in $X\setminus B$ make this disk transverse to $A$, with fixed collar; its expected incidence dimension $2-s<0$ clears $A$. The relative embedding supplier applies because $m\ge5=2\cdot2+1$, preserving the clean collar. Repeat a sufficiently small relative transversality perturbation if necessary after embedding; compact separated-pair estimates preserve embeddedness. Attach the fixed annulus to obtain a clean embedded bigon. [step 1.1, construct, algebra, F1, F2, F3]

3.1 Choose a smooth metric adapted to the clean sheet collars and the fixed product corners: prescribe orthogonal disk-tangent and sheet-normal blocks along the arcs, extend their positive matrices in charts, and combine extensions agreeing there by [F12]. Embed $X$ in Euclidean space by [F10] and represent the disk-normal bundle by this metric's orthogonal complement to the disk tangent space inside $TX$. Let $P(z)$ be the Euclidean orthogonal projection onto that smooth subbundle in convex bigon coordinates centered at an interior point. Put $Q(t,z)=P(tz)$ and solve $\partial_tU=[\partial_tQ,Q]U$, $U(0,z)=I$, on $[0,1]$ by [F7]. The coefficient $K=[\partial_tQ,Q]$ is skew symmetric, and differentiating $Q^2=Q$ gives $[K,Q]=\partial_tQ$. Consequently $U^TU=I$, and uniqueness gives $U(t,z)P(0)U(t,z)^T=Q(t,z)$. Transporting a basis at the centre and applying [F11] in the adapted metric gives a full smooth disk-normal frame. Smoothness in $z$, including local extensions at the corners, follows from [F8] and uniqueness along the compact interval. [step 2.1, construct, algebra, F7, F8, F10, F11, F12]

4.1 Along the $r$-sheet arc choose an $(r-1)$-frame $E$ tangent to that sheet and along the other arc normal to the $s$-sheet. For $r\ge2$, [F4]'s opposite-sign endpoint calculation applies in locally oriented collars; equivalently it uses the given orientation of $A$ and of the normal bundle of $B$. In the disk frame of step 3.1, $E$ is a loop in $V_{r-1}(\mathbb R^{m-2})$, with complement rank $s-1\ge2$. By [F5] it fills over the disk; attach its prescribed smooth collar to the filling and apply [F6] relative to a smaller collar to make the filling smooth. For $r=1$, $E$ is the unique empty frame and no Stiefel assertion is needed. Take its orthogonal complement inside the disk normal bundle and apply the projection transport of step 3.1 followed by [F11] to get a global $(s-1)$-frame $H$. On the $B$ arc that subspace is exactly its disk-orthogonal tangent space, so $H$ is tangent to $B$. Compatible corner values can be attained by multiplying $H$ by a smooth disk-wide $SO(s-1)$ map interpolating their two comparison matrices, constant in the corner collars; finite plane rotations provide such a path. This changes neither its subspace nor its extendibility, and no full boundary-frame class is prescribed. Thus $E,H$ is an admissible extendible frame in every case. [step 1.1, step 3.1, construct, F4, F5, F6, F11]

5.1 The local model theorem applies to this actual framed bigon with dimensions $r,s$, requiring no lower bound on $r$ once the frame is given. Apply its auxiliary ambient isotopy to $A$ and keep $B$ fixed. It removes exactly $p,q$ and fixes all other intersection neighbourhoods. This proves the borderline range, including $r=1$, without treating the codimension-one or codimension-two clearing as ordinary generic avoidance. [step 4.1, construct, F9] ∎
