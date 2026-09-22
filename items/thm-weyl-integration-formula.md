---
id: thm-weyl-integration-formula
kind: theorem
title: Weyl integration formula
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits, prop-weyl-jacobian-is-well-defined-and-weyl-invariant, cor-normalized-haar-measure-on-a-compact-lie-group, prop-integration-against-haar-is-invariant-under-translations-and-conjugation, prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics, thm-quotient-manifold-by-a-closed-lie-subgroup, prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density, def-axiom-of-choice, def-weyl-group-of-a-compact-connected-lie-group, thm-compact-group-weyl-group-is-finite, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-morse-sard-for-smooth-manifolds, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-density-measure-integration-agrees-with-smooth-density-integration, prop-density-pullback-under-local-diffeomorphisms, lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces, thm-cartans-closed-subgroup-theorem, prop-exponential-map-is-natural-for-lie-group-homomorphisms, thm-smooth-inverse-function-theorem-on-manifolds, def-roots-of-a-compact-connected-lie-group, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§15, Theorem 15.3 with its proof: the degree-#W map q:(G/T)×T→G and det(Ad(t^{-1})−1)"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VIII §1 (Weyl integration), cross-check"
proof_strategy: direct
landmark: true
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact connected Lie group with
maximal torus $T$, let $dg$ and $dt$ be normalized Haar measures on $G$ and $T$,
and let $d(xT)$ be the unique $G$-invariant probability measure on $G/T$
characterized by the Weil identity
$$\int_G F(x)\,dg=\int_{G/T}\int_T F(xt)\,dt\,d(xT)$$
for every continuous $F$ on $G$. Then for every continuous $f$ on $G$
$$\int_G f(g)\,dg=\frac{1}{|W(G,T)|}\int_T\int_{G/T} f(xtx^{-1})\,d(xT)\,J(t)\,dt,$$
and if $f$ is a class function the inner integral equals $f(t)$, so that
$\int_G f\,dg=|W(G,T)|^{-1}\int_T f(t)J(t)\,dt$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact connected Lie group $G$ with maximal torus $T$, normalized Haar measures $dg$ on $G$, $dt$ on $T$, the root system of $(G,T)$, and the Weyl Jacobian $J$ of the chosen positive system, which by [[prop-weyl-jacobian-is-well-defined-and-weyl-invariant]] depends only on $\Phi$ and is $W$-invariant.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the normalized Haar measures of [L1] and the differentiable structure of [L3].

[L1] $dg$ is the unique regular Borel probability on $G$ invariant under left and right translations and inversion, $dt$ is the corresponding measure on $T$, and integrals against them are invariant under translations and conjugation ([[cor-normalized-haar-measure-on-a-compact-lie-group]], [[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]]).

[L2] Conjugacy classes meet $T$, and two points of $T$ are conjugate exactly when they are in the same $W(G,T)$-orbit ([[prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits]]). The group $W(G,T)$ is finite and acts faithfully on $T$ ([[thm-compact-group-weyl-group-is-finite]]); its action is by Lie-group automorphisms ([[def-weyl-group-of-a-compact-connected-lie-group]]).

[L3] The quotient $Q=G/T$ is a smooth manifold of dimension $\dim G-\dim T$, the quotient map $\pi:G\to Q$ is a submersion, and its proof supplies smooth local sections. Closed subgroups are embedded Lie subgroups; a smooth map with invertible differential is locally a diffeomorphism; exponentials are natural ([[thm-quotient-manifold-by-a-closed-lie-subgroup]], [[thm-cartans-closed-subgroup-theorem]], [[thm-smooth-inverse-function-theorem-on-manifolds]], [[prop-exponential-map-is-natural-for-lie-group-homomorphisms]]).

[L4] G has a bi-invariant Riemannian metric, whose identity inner product is Ad-invariant. Riemannian densities define Radon measures finite on compact sets, and their Borel integrals are computed by their local smooth density coefficients ([[prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics]], [[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]], [[thm-density-measure-integration-agrees-with-smooth-density-integration]]).

[L5] The compact adjoint representation has its finite character-space decomposition and infinitesimal bracket formula by [[def-roots-of-a-compact-connected-lie-group]]. Since [L2] gives $C_G(T)=T$, the real fixed algebra of $T$ is $\mathfrak t$ and hence the complex zero weight space is $\mathfrak t_{\mathbb C}$. The compact-root theorem identifies the nonzero infinitesimal weights with a semisimple reduced root system; its nonzero root spaces are one-dimensional by [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]] and [[thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part]]. If $\alpha$ is a root, the opposite infinitesimal root is $-d\alpha$, while the inverse circle character $\alpha^{-1}$ has that differential; characters are determined by their differentials, so the opposite root character is $\alpha^{-1}$. Their product $J(t)=\prod_{\alpha>0}|1-\alpha(t)^{-1}|^2$ is independent of positive system and W-invariant ([[prop-weyl-jacobian-is-well-defined-and-weyl-invariant]]).

[L6] Smooth density pullback under a local diffeomorphism uses the absolute determinant. Euclidean $C^1$ change of variables holds for nonnegative measurable functions; localization with the density chart formula of [L4] gives the same formula in manifold charts. Fubini holds for integrable complex functions on sigma-finite product spaces ([[prop-density-pullback-under-local-diffeomorphisms]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[L7] Critical values of a smooth map of manifolds form a manifold-null set. Borel probabilities on a compact metric space are determined by their integrals of continuous real functions ([[thm-morse-sard-for-smooth-manifolds]], [[lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces]]).

## Proof

**Proof technique:** normalized quotient densities and finite sheets of the conjugation map.

1.1 Define $dQ=\pi_*dg$. It is a G-invariant Borel probability by equivariance and [L1]. For continuous F on G, $\overline F(xT)=\int_TF(xt)\,dt$ is independent of representative by Haar invariance, and is continuous by local sections [L3] and continuity on compact sets. Fubini and right invariance give $$\int_Q\overline F\,dQ=\int_G\int_TF(xt)\,dt\,dg(x)=\int_GF\,dg.$$ If $\nu$ is another invariant Borel probability, then for $h\in C(Q)$, Fubini and invariance give $\int h\,d\nu=\int_Q\int_G h(gxT)\,dg\,d\nu(xT)$. The inner integral is $\int_Gh(gT)\,dg=\int_Qh\,dQ$ by right invariance, independently of x. Hence both measures agree on continuous tests. The compact quotient is metrizable: the Ad(T)-invariant inner product of [L4] descends to a smooth invariant quotient metric via the local sections of [L3], whose distance gives the manifold topology. Thus [L7] proves uniqueness. Applying the Weil identity to $F=h\circ\pi$ likewise characterizes dQ uniquely. [L1, L3, L4, L6, L7]

1.2 Choose a bi-invariant metric as in [L4] and put $\mathfrak m=\mathfrak t^\perp$. Its restriction is Ad(T)-invariant, so transporting it by the left G-action defines a smooth invariant metric on Q: at $eT$ use the isometry $d\pi_e:\mathfrak m\to T_{eT}Q$, and invariance under the isotropy T makes the transport independent of representative. Local sections from [L3] give smoothness. The metric on T is the restriction of the group metric. Write the resulting unnormalized densities and volumes as $dv_G,dv_T,dv_Q$ and $V_G,V_T,V_Q$. They have finite positive total masses by compactness and [L4]. The normalized densities on G and T are their Haar probabilities by invariance and [L1]; on Q the normalized density is a G-invariant Borel probability. [L1, L3, L4]

2.1 On the compact manifold $Q\times T$ define $q(xT,t)=xtx^{-1}$. This is well defined because T is abelian and smooth by local sections [L3]. Use $\mathfrak g=\mathfrak m\oplus\mathfrak t$ and left translation by $t^{-1}$ at the target. Differentiating $\exp(sX)t\exp(sY)\exp(-sX)$ at zero gives $$dq_{(eT,t)}(X,Y)=(\operatorname{Ad}(t^{-1})-I)X+Y.$$ The first summand lies in $\mathfrak m$ by Ad(T)-invariance; the second lies in $\mathfrak t$. By [L5] the determinant on $\mathfrak m$ is $\prod_{\alpha\in\Phi}(\alpha(t)^{-1}-1)=\prod_{\alpha>0}|1-\alpha(t)^{-1}|^2=J(t)$. The real determinant equals that of its complexification; each root occurs once. Equivariance and isometries from the bi-invariant metric give the same absolute Jacobian at every $(xT,t)$ for the unnormalized product densities. Thus q is locally a diffeomorphism precisely when $t\in T_{reg}:=\{J>0\}$. [L3, L4, L5, step 1.2]

3.1 We verify the volume normalization, rather than assuming a product decomposition of Haar measure. Over a smooth local section $s:U\to G$, the map $b:U\times T\to\pi^{-1}U$, $b(u,t)=s(u)t$, is a diffeomorphism: its inverse is $g\mapsto(\pi g,s(\pi g)^{-1}g)$. At $(u,t)$, project its base tangent vectors orthogonally to the horizontal complement of the fibre tangent. Since $\pi\circ b$ is projection, their horizontal components map isometrically onto the base vectors by the definition of the quotient metric. The fibre tangent vectors are obtained by left translation from T and are isometric to its tangent vectors. The additional vertical components of base vectors give a block triangular change-of-frame matrix with identity diagonal, hence determinant 1. Therefore $b^*dv_G=dv_Q\,dv_T$. Take a finite section cover of compact Q and replace it by a disjoint Borel partition subordinate to the cover. The chart formulas and [L6], applied also to indicators of these sets, yield $V_G=V_QV_T$. By uniqueness in step 1.1 the normalized quotient density is dQ. Consequently the normalized product measure $dQ\,dt$ and dg have the same relative Jacobian J under q on its regular locus. [L3, L4, L6, step 1.1, step 1.2, step 2.1]

3.2 Let $C_G(t)$ be the closed centralizer. Its Lie algebra is $\ker(\operatorname{Ad}(t)-I)$: differentiating commutation gives one inclusion and exponential naturality gives the converse by one-parameter subgroups. By [L5], for $t\in T_{reg}$ this is $\mathfrak t$. Since $T\subseteq C_G(t)^0$ has the same Lie algebra, exponential charts and connectedness imply $C_G(t)^0=T$. Any torus containing t lies in this identity component, so T is the unique maximal torus containing t. More generally the dimension of this fixed algebra is $\dim T$ exactly for $t\in T_{reg}$, and is larger for singular t. Dimension is invariant under conjugation. By [L2] every element is conjugate into T, so $G_{reg}:=q(Q\times T_{reg})$ is the complement of $q(Q\times(T\setminus T_{reg}))$. The latter compact set is precisely the critical-value set of q by step 2.1; it is null by [L7], hence Haar-null by the smooth positive density chart formula [L4]. Thus $G_{reg}$ is open and of full Haar measure. No null-set assertion is transported through a singular local map. [L2, L3, L4, L5, L7, step 2.1]

4.1 Fix $q(xT,t)$ in $G_{reg}$. If $q(yT,t')=q(xT,t)$, put $m=x^{-1}y$; then $m^{-1}tm=t'$. Conjugation preserves regularity by step 3.2, and the uniqueness of the maximal torus containing t shows $mTm^{-1}=T$. Conversely each $m\in N_G(T)$ gives the preimage $(xmT,m^{-1}tm)$, and two such pairs agree exactly when the cosets mT agree. Thus every fibre of $q_r:Q\times T_{reg}\to G_{reg}$ has exactly $|W|$ points. To obtain an evenly covered neighborhood of any g, choose disjoint local-diffeomorphism neighborhoods at its finitely many preimages, and intersect their open images. After restriction each supplies one preimage of every point of this intersection; the constant fibre count just proved leaves no other preimages. These are the required $|W|$ sheets. This proves the covering directly and does not assert that its open source is compact. [L2, L3, step 2.1, step 3.2]

5.1 Choose a countable cover of $G_{reg}$ by evenly covered coordinate neighborhoods small enough that each of their finitely many sheets lies in a coordinate neighborhood of the source; second countability permits this refinement. Subtract preceding sets to obtain a disjoint Borel partition. On each set and each sheet apply [L6] to the nonnegative measurable function, or to the four nonnegative parts of an integrable complex function. The normalized density Jacobian is J by step 3.1. Summing the countable disjoint pieces and the $|W|$ sheets gives $$|W|\int_{G_{reg}} f(g)\,dg=\int_{Q\times T_{reg}}f(xtx^{-1})J(t)\,dQ\,dt.$$ For continuous f on compact G all integrals are absolutely finite because f and J are bounded and the normalized source measure is finite. [L4, L6, step 3.1, step 4.1]

6.1 The target complement is Haar-null by step 3.2; on the omitted source $Q\times(T\setminus T_{reg})$ one has $J=0$ pointwise. Hence step 5.1 already extends to integration over all of G and $Q\times T$, without any uniform approximation by functions supported in $G_{reg}$. Fubini [L6] puts the torus integral outside and gives the formula in the statement with the unique probability of step 1.1. For a class function the integrand is independent of xT, giving the stated specialization; independence of positive roots follows from [L5]. If there are no roots, the adjoint decomposition makes $\mathfrak g=\mathfrak t$, hence connected G equals T by exponential charts, Q is a point, W is trivial, and J is the empty product 1. This includes the trivial group. Choice supplies the assumptions of the stated Lie, Haar, density and countable-chart interfaces. [A1, L3, L5, L6, step 1.1, step 3.2, step 5.1] ∎
