---
id: prop-relative-morse-inequalities-for-a-cobordism
kind: proposition
title: "Relative Morse inequalities for a cobordism"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-poincare-polynomial-over-a-field, lem-exact-sequence-dimension-inequality, lem-one-handle-changes-relative-homology-in-one-degree, lem-long-exact-sequence-of-a-triple-in-singular-homology, lem-a-collar-product-region-deformation-retracts-onto-its-face, def-morse-function-adapted-to-a-cobordism, lem-interior-slab-handle-attachment, def-smooth-cobordism-triad-for-morse-theory, lem-finitely-many-critical-values-can-be-separated-locally, thm-regular-interval-diffeomorphism, thm-fundamental-theorem-on-flows, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, thm-long-exact-sequence-of-a-pair-in-singular-homology, def-relative-singular-homology, def-field, def-countable-choice, thm-morse-lemma, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-compactly-supported-vector-fields-are-complete]
justified_by: []
aliases: []
landmark: false
proof_strategy: relative-filtration-telescoping
sources:
  scraped: []
  references:
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Section 3 Lemma 3.2 (PDF pp. 25-26), and Sections 6-7 (PDF pp. 87-93)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
    - title: "C. T. C. Wall, Differential Topology, Sections 5.1-5.4, printed pp. 129-148 (PDF pp. 137-151)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
dependency_level: 3
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a compact collared triad
([[def-smooth-cobordism-triad-for-morse-theory]]) and let $f:W\to[0,1]$ be an
adapted Morse function with $f^{-1}(0)=M_0$, $f^{-1}(1)=M_1$, all critical
points interior and nondegenerate
([[def-morse-function-adapted-to-a-cobordism]]), and let $F$ be a field. Write
$$m^{\mathrm{rel}}_k(f):=\#\{p\in\operatorname{Crit}(f):\operatorname{ind}(p)=k\}.$$
Then there is a unique polynomial $Q(t)=\sum_kq_kt^k\in\mathbb Z[t]$ with
$q_k\ge0$ such that
$$\sum_km^{\mathrm{rel}}_k(f)t^k=P_{W,M_0}(t)+(1+t)Q(t),$$
where $P_{W,M_0}(t)=\sum_k\dim_FH_k(W,M_0;F)t^k$ is the relative Poincare
polynomial ([[def-poincare-polynomial-over-a-field]]). Equivalently,
$m^{\mathrm{rel}}_k(f)\ge b_k(W,M_0;F)$ for every $k$ and the strong alternating
partial-sum inequalities hold for the relative Betti numbers. No orientability
of $W$ and no Morse-Smale hypothesis is assumed.

## Facts & Assumptions

**Given:** A compact collared triad $(W;M_0,M_1)$, an adapted Morse function $f:W\to[0,1]$ with all critical points interior and nondegenerate, a field $F$, and the sublevels $W^t:=f^{-1}([0,t])$ for $0\le t\le1$.

[F1] For an adapted pair $(f,X)$, with $X$ complete in the collar-extension sense of [F7], an interior slab between regular values with exactly one critical point $p$ identifies $W^{t_i}$ with $W^{t_{i-1}}$ plus one rounded handle of index $\operatorname{ind}(p)$, attached away from the boundary; the lower-sublevel comparison is up to homotopy of pairs ([[lem-interior-slab-handle-attachment]]).

[F2] Attaching one rounded $k$-handle changes relative homology in degree $k$ only: $H_i(N',N;F)=0$ for $i\ne k$ and $H_k(N',N;F)\cong F$ ([[lem-one-handle-changes-relative-homology-in-one-degree]], part (a)).

[F3] The critical values of a Morse function can be separated by perturbations supported near the interior critical points, preserving adaptedness and the number and indices of critical points ([[lem-finitely-many-critical-values-can-be-separated-locally]]).

[F4] For $B\subseteq A\subseteq X$ there is a long exact sequence $\cdots\to H_n(A,B;G)\to H_n(X,B;G)\to H_n(X,A;G)\xrightarrow{\delta}H_{n-1}(A,B;G)\to\cdots$ ([[lem-long-exact-sequence-of-a-triple-in-singular-homology]]).

[F5] Finite exact vector-space sequences give the rank bookkeeping: if $A_k,C_k$ are finite-dimensional and vanish for $k<0$ and $k>N$, so are the $B_k$, and there is a unique $Q\in\mathbb Z[t]$ with nonnegative coefficients such that $P_A+P_C=P_B+(1+t)Q$, with $q_k=\dim\ker(A_k\to B_k)\ge0$ ([[lem-exact-sequence-dimension-inequality]]).

[F6] A product collar $C=X\times[0,1]$ deformation retracts onto its face $X\times\{0\}$, and for every coefficient group the map of pairs induces isomorphisms on relative homology, so $H_i(C,X\times\{0\};G)=0$ ([[lem-a-collar-product-region-deformation-retracts-onto-its-face]]).

[F7] Adaptedness requires $f^{-1}(0)=M_0$, $f^{-1}(1)=M_1$ and interior nondegenerate critical points away from a fixed boundary collar. An adapted pair additionally has a downward gradient-like field $X$, pointing outward at $M_0$ and inward at $M_1$, which extends to a complete field on a boundaryless extension obtained by appending negative collar parameters. This does not require $W$ to be invariant under the ambient flow ([[def-morse-function-adapted-to-a-cobordism]], [[def-smooth-cobordism-triad-for-morse-theory]]).

[L1] $H_k(W,M_0;F)$ is the relative singular homology of the pair, so $P_{W,M_0}(t)=\sum_k\dim_FH_k(W,M_0;F)t^k$ when the dimensions are finite and eventually zero ([[def-relative-singular-homology]], [[def-poincare-polynomial-over-a-field]]).

[F8] Compact regular interior bands have the normalized-flow product structure ([[thm-regular-interval-diffeomorphism]]). Local smooth flows exist and are unique ([[thm-fundamental-theorem-on-flows]]), and under $\mathrm{AC}_\omega$ smooth partitions of unity exist on manifolds with boundary ([[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]). A Morse function on a compact manifold has finitely many critical points ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

[F9] A nondegenerate critical point has Morse coordinates $f=f(p)-|u|^2+|v|^2$, including the empty-coordinate case in dimension zero ([[thm-morse-lemma]]).

[F10] A compact subset of an open set in a smooth manifold admits a smooth bump equal to one near that subset and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]). Under $\mathrm{AC}_\omega$, a compactly supported smooth vector field on a boundaryless manifold is complete ([[thm-compactly-supported-vector-fields-are-complete]]).

## Proof

**Proof technique:** relative-filtration-telescoping.

1.1 The critical set is finite by [F8]. The interior-supported bumps in [F3] separate its values while fixing a boundary collar: choose their supports away from that collar and their coefficients small enough to keep the function in $(0,1)$ on those supports. It suffices to prove the identity for this perturbation, again denoted $f$, since its critical points and indices are unchanged. Write its critical values as $c_1<\cdots<c_\nu$. Choose regular $0<t_0<\cdots<t_\nu<1$ with $t_0<c_1$, $c_i<t_i<c_{i+1}$ for $1\le i<\nu$, and $c_\nu<t_\nu$; if $\nu=0$ choose any $t_0\in(0,1)$. Put $W_i=W^{t_i}$. All these stages are compact $n$-manifolds with boundary. [F3, F7, F8, given, choose]

2.1 Construct a downward gradient-like field for this $f$. Choose disjoint interior Morse charts by [F9] and smaller charts with closures inside them. On each Morse chart prescribe $X_p=(2u,-2v)$, so $df(X_p)=-4(|u|^2+|v|^2)$. Cover the complement of the smaller charts by regular coordinate neighborhoods avoiding still smaller critical neighborhoods. On each choose a smooth field $Y$ with $df(Y)=-1$: a nonzero coordinate derivative of $f$ can be inverted, also in boundary charts. Patch these fields and the $X_p$ by a partition of unity from [F8]. Near each critical point only its Morse-chart field contributes, giving the exact local model; elsewhere the derivative is a convex combination of negative numbers. At $M_0$ the resulting $X$ points outward, and at $M_1$ inward, since $f$ is constant on each face and its nonzero inward normal derivative has respectively positive and negative sign. Thus $X$ satisfies all adapted-field conditions except ambient completeness. [F7, F8, F9, step 1.1, construct]

3.1 Append negative parameters to the fixed face collars to obtain the boundaryless extension $\widehat W$ of [F7]. Smoothness in boundary charts means that the coefficients of $X$ extend locally across the faces in signed collar charts. Compactness of the faces gives finitely many such extensions; together with $X$ on the interior, a partition of unity from [F8] patches them to a field $\widetilde X$ on an open neighborhood $U$ of $W$ in $\widehat W$, agreeing with $X$ on $W$. Choose a relatively compact open neighborhood $V$ with $W\subseteq V\subseteq\overline V\subseteq U$. By [F10] take a bump $\rho$ equal to one near $W$ with support in $V$. Extend $\rho\widetilde X$ by zero outside $U$. Its support lies in the compact set $\overline V$, so [F10] makes it complete, while its restriction to $W$ is $X$. Hence $(f,X)$ is adapted in the precise sense required by [F1]; trajectories in $W$ are followed only until a boundary exit. Empty faces need no extension, and if $\partial W=\varnothing$ take $\widehat W=W$. [F7, F8, F10, step 2.1, construct]

4.1 The bottom and top bands are products even at the faces. On these compact regular bands normalize the field of step 3.1 to $Y:=X/df(X)$, so $df(Y)=1$. Its ambient extension permits the local-flow theorem in [F8] across the faces. At $M_0$ the field $Y$ points inward and at $M_1$ outward. Along a trajectory $f(\Phi_s(x))=f(x)+s$; compactness permits continuation until the endpoint level. The inverse formula $y\mapsto(\Phi_{a-f(y)}(y),f(y))$ then gives the product, as in [F8]. Choose $t_0$ sufficiently small and $t_\nu$ sufficiently close to $1$ when $\nu>0$. Thus $W_0\cong M_0\times[0,t_0]$ relative to $M_0$, and the top band is $f^{-1}(t_\nu)\times[t_\nu,1]$. If $\nu=0$, the same flow identifies the entire triad with $M_0\times[0,1]$; if a face is empty the corresponding regular band is empty. Hence $H_j(W_0,M_0;F)=0$ by [F6]. [F6, F7, F8, step 1.1, step 3.1, construct]

4.2 For each $1\le i\le\nu$ the closed band $f^{-1}([t_{i-1},t_i])$ lies in the interior of $W$ and contains exactly one nondegenerate critical point $p_i$ of index $k_i:=\operatorname{ind}(p_i)$. Apply [F1] to the adapted pair constructed in steps 2.1 and 3.1. With its lower-sublevel comparison up to homotopy of pairs, $W_i$ is obtained from $W_{i-1}$ by attaching one rounded $k_i$-handle, so [F2] gives $$H_j(W_i,W_{i-1};F)=0\ \ (j\ne k_i),\qquad H_{k_i}(W_i,W_{i-1};F)\cong F.$$ [F1, F2, step 1.1, step 3.1]

5.1 Induction on $i$: $H_j(W_i,M_0;F)$ is finite-dimensional for every $j$ and vanishes for $j<0$ and $j>n$. For $i=0$ it vanishes by step 4.1. For the step, apply [F5] to the exact sequence of the triple $(W_i,W_{i-1},M_0)$ from [F4] with $A_j=H_j(W_{i-1},M_0;F)$, $B_j=H_j(W_i,M_0;F)$, $C_j=H_j(W_i,W_{i-1};F)$: the hypotheses hold by the induction hypothesis and by step 4.2, and [F5] concludes that the $B_j$ are finite-dimensional. [F4, F5, L1, step 4.2]

6.1 The same application of [F5] gives, for each $i$, the polynomial identity $$P^{\mathrm{rel}}_{i-1}(t)+t^{k_i}=P^{\mathrm{rel}}_i(t)+(1+t)Q_i(t),$$ where $P^{\mathrm{rel}}_i(t):=\sum_j\dim_FH_j(W_i,M_0;F)t^j$, the middle term is the relative polynomial of the slab by step 4.2, and $Q_i\in\mathbb Z[t]$ has nonnegative coefficients. [F5, step 4.2, step 5.1]

7.1 Summing over $i=1,\dots,\nu$ telescopes: $P^{\mathrm{rel}}_0=0$ by step 5.1, so $$\sum_{i=1}^\nu t^{k_i}=P^{\mathrm{rel}}_\nu(t)+(1+t)Q(t),\qquad Q:=\sum_{i=1}^\nu Q_i\in\mathbb Z[t],$$ with $Q$ of nonnegative coefficients, and the left side is $\sum_km^{\mathrm{rel}}_k(f)t^k$ because the critical points $p_1,\dots,p_\nu$ exhaust $\operatorname{Crit}(f)$ and $k_i=\operatorname{ind}(p_i)$. [step 1.1, step 6.1, algebra]

8.1 Compress the top product of step 4.1 to its lower face and use the identity on $W_\nu$. This is a strong deformation retraction of $W$ onto $W_\nu$, fixing $M_0$. Alternatively the triple sequence [F4] and the vanishing of the product relative group [F6] show that $H_j(W_\nu,M_0;F)\to H_j(W,M_0;F)$ is an isomorphism. Thus $P^{\mathrm{rel}}_\nu=P_{W,M_0}$ and step 7.1 is the required identity. When $\nu=0$ the empty sum gives $P_{W,M_0}=Q=0$. [F4, F6, L1, step 4.1, step 7.1]

9.1 Uniqueness holds because $(1+t)R=0$ forces successively every coefficient of $R$ to be zero, and the coefficientwise and alternating partial-sum forms follow by comparing coefficients of $(1+t)Q$ exactly as in the absolute case; the relative Betti numbers $b_k(W,M_0;F)=\dim_FH_k(W,M_0;F)$ are finite and eventually zero by step 5.1. Adaptedness is used through the interior-slab identification [F1]; a critical point on the boundary would not produce a handle stage and would break the count. [F5, step 5.1, step 8.1, algebra] ∎

## Remarks

- **Relative to the incoming face.** The Poincare polynomial is that of the pair $(W,M_0)$; the argument never uses a duality theorem and therefore holds without orientability of $W$ or of $M_0$.
- **Specialization.** Taking $M_0=\varnothing$ and closing the triad recovers the absolute Morse polynomial identity; the relative form is the one used in the h-cobordism argument.
- **Choice.** $\mathrm{AC}_\omega$ enters through the partition-of-unity and flow suppliers [F8], compact-support completeness [F10], and the handle-attachment suppliers [F1] and [F2]. The collar retraction [F6] and the rank bookkeeping are choice free.
