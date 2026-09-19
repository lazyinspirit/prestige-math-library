---
id: cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group
kind: corollary
title: Maximal compact subgroups exist and are conjugate in a connected finite center semisimple Lie group
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, cor-semisimple-lie-algebras-are-centerless-and-perfect, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-riemannian-symmetric-pair-of-noncompact-type, thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space, prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k, thm-every-element-of-a-compact-connected-lie-group-lies-in-a-maximal-torus, thm-structure-of-a-compact-connected-abelian-lie-group, thm-cartans-closed-subgroup-theorem, def-exponential-map-of-a-lie-group, def-homogeneous-space-of-a-lie-group, def-riemannian-distance-on-a-connected-manifold, thm-existence-of-geodesically-convex-neighborhoods, def-levi-civita-connection, def-simple-semisimple-and-reductive-lie-algebras, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §3, Theorem 6.31(b),(c),(f),(g), printed pp. 361-368; Historical Notes 2, printed p. 766 (Borel 1998, pp. 128-133)"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a connected real semisimple Lie group
with finite center, let $\Theta$ be a global Cartan involution, and let
$K=G^\Theta$ ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).
Then $K$ is a maximal compact subgroup of $G$: it is compact, and no compact
subgroup of $G$ strictly contains it. Moreover every compact subgroup of $G$ is
contained in a conjugate of $K$, so that the maximal compact subgroups of $G$
are exactly the conjugates of $K$, and any two maximal compact subgroups are
conjugate.

## Facts & Assumptions

**Given:** The Axiom of Choice; a connected real semisimple Lie group $G$ with finite center, a global Cartan involution $\Theta$, $K=G^\Theta$, the Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ of its Lie algebra, and $X=G/K$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the global decomposition of [L1] and the Cartan closed subgroup theorem of [L6].

[L1] $K$ is a closed subgroup of $G$ with Lie algebra $\mathfrak k_0$ and $K$ is compact; $(k,X)\mapsto k\exp X$ is a diffeomorphism $K\times\mathfrak p_0\to G$; and the Cartan involution $\theta_*$ of $\mathfrak g_0$ is the differential of $\Theta$ at the identity ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], [[def-cartan-involution-of-a-real-semisimple-lie-algebra]]).

[L2] $\mathfrak g_0$ is semisimple, hence centerless and equal to its own derived subalgebra, and the Killing form is negative definite on $\mathfrak k_0$, positive definite on $\mathfrak p_0$, with the summands orthogonal and $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$, $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$ ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]], [[cor-semisimple-lie-algebras-are-centerless-and-perfect]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]], [[def-simple-semisimple-and-reductive-lie-algebras]]).

[L3] The pair $(G,K)$ need not itself be of noncompact type: $\mathfrak g_0$ may have compact ideals. The noncompact-type convention explicitly splits off those compact ideals, which lie in $\mathfrak k_0$ and act trivially on $G/K$; the resulting effective pair has the same symmetric space $X$ and tangent space $\mathfrak p_0$ ([[def-riemannian-symmetric-pair-of-noncompact-type]]). Applied to that effective pair, the symmetric-space results give a $G$-invariant metric on $X$ whose value at the origin is $B_{\theta_*}|_{\mathfrak p_0}$; the map $\Phi:\mathfrak p_0\to X$, $X\mapsto\exp(X)K$, is a diffeomorphism with $\Phi(0)=K$, the geodesics through the origin are $t\mapsto\exp(tX)K$, and $R(X,Y)Z=-\lbrack\lbrack X,Y\rbrack,Z\rbrack$, so sectional curvature is nonpositive everywhere ([[thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space]], [[prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k]], [[def-levi-civita-connection]]).

[L4] $X$ is a smooth manifold with the quotient smooth structure, $G$ acts smoothly and transitively on $X$, the stabilizer of the origin is $K$, and for the invariant Riemannian metric the action of $G$ is by isometries: $d(gx,gy)=d(x,y)$ for all $g\in G$ and $x,y\in X$ ([[def-homogeneous-space-of-a-lie-group]], [[def-riemannian-distance-on-a-connected-manifold]], [[prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k]]).

[L5] Every element of a compact connected Lie group lies in a maximal torus, every torus is a compact connected abelian Lie group, and the exponential map of a compact connected abelian Lie group is surjective ([[thm-every-element-of-a-compact-connected-lie-group-lies-in-a-maximal-torus]], [[thm-structure-of-a-compact-connected-abelian-lie-group]]).

[L6] A closed subgroup of a finite-dimensional real Lie group is an embedded Lie subgroup ([[thm-cartans-closed-subgroup-theorem]], [[def-exponential-map-of-a-lie-group]]).

[L7] Geodesically convex neighborhoods exist on a Riemannian manifold, and distance functions on a manifold of nonpositive curvature satisfy the convexity inequality of step 1.6: for a geodesic $\gamma$ with midpoint $m=\gamma(1/2)$ and any point $z$ of a Hadamard manifold, $$d(z,m)^{2}\le\tfrac12\bigl(d(z,\gamma(0))^{2}+d(z,\gamma(1))^{2}\bigr)-\tfrac14d(\gamma(0),\gamma(1))^{2}.$$ This is the standard convexity of the distance function on a simply connected complete manifold of nonpositive curvature; in the Euclidean model it reduces to the parallelogram identity, and for $X=G/K$ the curvature of [L3] is nonpositive and $\Phi$ exhibits $X$ as diffeomorphic to the vector space $\mathfrak p_0$, so $X$ is complete and its closed bounded subsets are compact by the Hopf--Rinow theorem, whence bounded sequences have convergent subsequences ([[thm-existence-of-geodesically-convex-neighborhoods]], [[prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k]], [[def-riemannian-distance-on-a-connected-manifold]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $K$ is compact and is a closed subgroup of $G$ with Lie algebra $\mathfrak k_0$; this proves the existence half of the statement. [L1]

1.2 $K$ contains no nontrivial element of $\exp(\mathfrak p_0)$: if $k=\exp X$ with $X\in\mathfrak p_0$ and $k\in K$, then applying $\operatorname{Ad}$ and using [L2] together with the identity $\operatorname{Ad}_{\exp X}=e^{\operatorname{ad}_X}$ gives an element $e^{\operatorname{ad}_X}$ that is simultaneously positive definite and self-adjoint for the inner product $B_{\theta_*}$ on $\mathfrak g_0$ and orthogonal there (orthogonality holds because $k\in K$ forces $\operatorname{Ad}_k\theta_*\operatorname{Ad}_k^{-1}=\theta_*$, hence $\operatorname{Ad}_k^*=\operatorname{Ad}_k^{-1}$); a positive definite operator equal to its own inverse is the identity, so $e^{\operatorname{ad}_X}=1$, $\operatorname{ad}_X=0$ and $X=0$ because the center of $\mathfrak g_0$ is trivial by [L2]. [L1, L2, algebra]

1.3 Suppose $K\subseteq K_1$ with $K_1\le G$ compact, and let $g\in K_1$. By [L1] write $g=k\exp X$ with $k\in K$, $X\in\mathfrak p_0$. Then $\exp X=k^{-1}g\in K_1$, so $\exp(nX)=(k^{-1}g)^n\in K_1$ for every $n\in\mathbb Z$. [L1, algebra]

1.4 The exponential map of a compact connected Lie group is surjective: every element lies in a maximal torus by [L5], and the exponential map of a torus is surjective by [L5]. [L5]

1.5 The distance function on $X$ is complete: after the harmless compact-ideal reduction described in [L3], the metric is that of the effective Riemannian symmetric pair of noncompact type, and $X$ is diffeomorphic to the vector space $\mathfrak p_0$ by [L3]. [L3]

1.6 Convexity of the radius function of a compact set. Let $O\subseteq X$ be a nonempty compact subset and put $f(x):=\max_{y\in O}d(x,y)$; this is finite and continuous because $O$ is compact. For every geodesic $\gamma$ of the invariant metric of [L3] with midpoint $m=\gamma(1/2)$ the midpoint inequality $$f(m)^{2}\le\tfrac12\bigl(f(\gamma(0))^{2}+f(\gamma(1))^{2}\bigr)-\tfrac14 d(\gamma(0),\gamma(1))^{2}$$ holds: by [L7] each $y\in O$ satisfies $d(y,m)^{2}\le\tfrac12(d(y,\gamma(0))^{2}+d(y,\gamma(1))^{2})-\tfrac14 d(\gamma(0),\gamma(1))^{2}$, and the deficit term is independent of $y$, so taking the maximum over the compact set $O$ on the left, and bounding each of the two remaining maxima by $f(\gamma(0))$ and $f(\gamma(1))$ in the sense $\max_y\tfrac12(d(y,\gamma(0))^{2}+d(y,\gamma(1))^{2})\le\tfrac12(f(\gamma(0))^{2}+f(\gamma(1))^{2})$, gives the displayed inequality with the same deficit. [L3, L4, L7, algebra]

2.1 The sequence $\operatorname{Ad}(\exp(nX))=e^{n\operatorname{ad}_X}$ of step 1.3 lies in $\operatorname{Ad}(K_1)$, which is compact because $K_1$ is compact and $\operatorname{Ad}$ is continuous; hence $\{e^{n\operatorname{ad}_X}:n\in\mathbb Z\}$ is bounded in $\operatorname{End}(\mathfrak g_0)$. Since $\operatorname{ad}_X$ is self-adjoint for $B_{\theta_*}$ (for $W\in\mathfrak p_0$ one has $(\operatorname{ad}W)^*=-\operatorname{ad}(\theta_*W)=\operatorname{ad}W$), it has a real orthonormal eigenbasis with eigenvalues $\lambda_1,\dots,\lambda_m$; the operators $e^{n\operatorname{ad}_X}$ have eigenvalues $e^{n\lambda_i}$, and boundedness for all $n\in\mathbb Z$ forces $\lambda_i=0$ for every $i$. Hence $\operatorname{ad}_X=0$ and $X=0$ because $Z(\mathfrak g_0)=0$, so every compact subgroup $K_1$ containing $K$ equals $K$: the subgroup $K$ is maximal compact. [L2, step 1.3, algebra]

2.2 The radius function of a compact group. Let $L\le G$ be compact, acting on $X$ by isometries by [L4], and fix a base point $x_1\in X$; put $O:=L\cdot x_1$, a nonempty compact subset of $X$ because $L$ is compact and the action is continuous, and define $f(x):=\max_{y\in O}d(x,y)$. Then $f$ is finite, continuous and $L$-invariant, it satisfies the midpoint inequality of step 1.6 along every geodesic of $X$, and it is proper: $x_1=e\cdot x_1$ lies in $O$, so $f(x)\ge d(x,x_1)$ for every $x$, and therefore $f(x)\to\infty$ as $d(x,x_1)\to\infty$. [L4, step 1.6, algebra]

3.1 The radius function attains its minimum: let $D=\inf_{x\in X}f(x)$ and choose a minimizing sequence $(x_n)$. Since $f(x_n)\to D$ and $f\ge d(\cdot,x_1)$ by step 2.2, the sequence is bounded; by [L7] bounded sequences in $X$ have convergent subsequences, so a subsequence converges to some $x_0\in X$, and continuity of $f$ by step 2.2 gives $f(x_0)=D$. [L7, step 1.5, step 2.2, algebra]

4.1 At $x_0$ every element of $L$ fixes $x_0$: fix $g\in L$ and apply the midpoint inequality of step 2.2 to the geodesic from $x_0$ to $g\cdot x_0$ with midpoint $m$; because $f$ is $L$-invariant and $g\cdot x_0\in X$, one has $f(g\cdot x_0)=f(x_0)=D$, so $$f(m)^{2}\le\tfrac12\bigl(f(x_0)^{2}+f(gx_0)^{2}\bigr)-\tfrac14 d(x_0,gx_0)^{2}=D^{2}-\tfrac14 d(x_0,gx_0)^{2}.$$ By minimality of step 3.1 we have $f(m)\ge D$, hence $d(x_0,g\cdot x_0)^{2}\le 0$ and $g\cdot x_0=x_0$. As $g\in L$ was arbitrary, every element of $L$ fixes $x_0$. [step 2.2, step 3.1, algebra]

5.1 The orbit of $x_0$ under $L$ is therefore the single point $x_0$, so $L$ is contained in the stabilizer of $x_0$ in $G$. Writing $x_0=hK$ with $h\in G$, that stabilizer is the conjugate $hKh^{-1}$ of $K$, so every compact subgroup $L\le G$ is contained in a conjugate of $K$; no connectedness hypothesis on $L$ was used. [L4, step 2.2, step 4.1, algebra]

6.1 The maximal compact subgroups of $G$ are exactly the conjugates of $K$: each conjugate $hKh^{-1}$ is the fixed-point group of the Cartan involution $h\Theta h^{-1}$, hence compact, and it is maximal by the argument of step 2.1 applied to that involution; conversely a maximal compact subgroup is contained in a conjugate of $K$ by step 5.1 and equals it by maximality. [L1, step 2.1, step 5.1]

7.1 The assertions of the Statement follow: $K$ is compact by step 1.1 and maximal by step 2.1; every compact subgroup of $G$ is contained in a conjugate of $K$ by step 5.1; and the maximal compact subgroups are exactly the conjugates of $K$ by step 6.1. [step 1.1, step 2.1, step 5.1, step 6.1] ∎

## Remarks

- **Cartan's conjugacy theorem.** The conjugacy of maximal compact subgroups is Cartan's theorem; Knapp records it in the Historical Notes (printed p. 766) as deliberately omitted there, with the reference to Borel [1998], pp. 128-133. The argument above proves it locally from the geometry of the noncompact symmetric space $G/K$: a compact group of isometries of a Hadamard manifold with the midpoint inequality of [L7] fixes a point, and the stabilizer of that point is a conjugate of $K$.
- **What is used from the page.** The proof uses the global Cartan decomposition of [[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], the identification $\mathfrak p_0\cong G/K$ of [[thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space]], and the invariant metric and curvature of [[prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k]].
