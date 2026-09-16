---
id: thm-weyl-integration-formula
kind: theorem
title: Weyl integration formula
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits, prop-weyl-jacobian-is-well-defined-and-weyl-invariant, cor-normalized-haar-measure-on-a-compact-lie-group, prop-integration-against-haar-is-invariant-under-translations-and-conjugation, prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics, thm-quotient-manifold-by-a-closed-lie-subgroup, prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density, def-axiom-of-choice, def-weyl-group-of-a-compact-connected-lie-group, cor-proper-local-diffeomorphisms-have-constant-finite-fibres, lem-c1-local-diffeomorphisms-preserve-null-sets-locally, thm-change-of-variables-for-oriented-manifold-diffeomorphisms, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
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

[L2] Conjugacy classes meet $T$, and two points of $T$ are conjugate exactly when they are in the same $W(G,T)$-orbit; $|W(G,T)|<+\infty$ and acts faithfully by Lie-group automorphisms of $T$ ([[prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits]], [[def-weyl-group-of-a-compact-connected-lie-group]]).

[L3] $G/T$ is a compact smooth manifold with a smooth left $G$-action and $\dim(G/T)=\dim G-\dim T$; every locally compact LCH space carries a Radon volume measure for any smooth Riemannian metric, and the Riemannian volume of a compact manifold is a finite Radon measure ([[thm-quotient-manifold-by-a-closed-lie-subgroup]], [[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]], [[prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics]]).

[L4] A smooth map of manifolds that is a local diffeomorphism with constant finite fibres is a covering map; a $C^1$ local diffeomorphism preserves null sets locally; the change of variables formula holds for oriented manifold diffeomorphisms, and there is a Fubini theorem for $L^1$ functions on sigma-finite product spaces ([[cor-proper-local-diffeomorphisms-have-constant-finite-fibres]], [[lem-c1-local-diffeomorphisms-preserve-null-sets-locally]], [[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Let $\pi:G\to G/T$ be the quotient map. The pushforward of $dg$ under $\pi$ is a $G$-invariant Borel probability on $G/T$: invariance holds because $dg$ is left invariant and $\pi$ is $G$-equivariant, and total mass one holds because $\pi$ is surjective. In a local trivialization $G\supseteq U\cong V\times T$ of the principal $T$-bundle, the product decomposition and the invariance of $dg$ under right translations by $T$ show that for continuous $F$ the function $xT\mapsto\int_TF(xt)\,dt$ is well defined and that $\int_GF\,dg=\int_{G/T}\!\int_TF(xt)\,dt\,d(xT)$: the two sides are equal on each chart by Fubini and the fibre coordinate is normalized by $\int_Tdt=1$, and a partition of unity on the compact quotient assembles the local identities. [L1, L3, L4]

1.2 Define the regular set $T_{\mathrm{reg}}:=\{t\in T:\alpha(t)\ne1\text{ for all }\alpha\in\Phi\}$ and $G_{\mathrm{reg}}:=\{g\in G:g=xtx^{-1}\text{ for some }t\in T_{\mathrm{reg}}\}$. The complement of $T_{\mathrm{reg}}$ in $T$ is the finite union of the kernels of the root characters; each such kernel is a proper closed subgroup, and a proper closed subgroup of a compact group has empty interior, hence Haar measure zero (a closed set of positive measure contains a neighbourhood of the identity by the Steinhaus argument, and an open subgroup of the connected torus would be all of it). Therefore $T_{\mathrm{reg}}$ has full measure in $T$ and, by the regularity of $dg$ and [L4], $G_{\mathrm{reg}}$ is open of full measure with null complement. [L1, L4]

2.1 Consider the smooth map $q:(G/T)\times T_{\mathrm{reg}}\to G_{\mathrm{reg}}$, $q(xT,t)=xtx^{-1}$. It is surjective by the definition of $G_{\mathrm{reg}}$ and it is a local diffeomorphism: in a neighbourhood of each point it is equivariant for the free action of $G$ on the first factor, and at $(eT,t)$ its differential, with respect to the $\operatorname{Ad}(t)$-invariant splitting $\mathfrak g=\mathfrak t\oplus\mathfrak m$, is $(X,Y)\mapsto Y+(1-\operatorname{Ad}(t))X$, which is an isomorphism because $1-\operatorname{Ad}(t)$ is invertible on $\mathfrak m$ for regular $t$ (its eigenvalues there are $1-\alpha(t)\ne0$). [L1, L3, step 1.2]

3.1 The fibers of $q$ have exactly $|W(G,T)|$ points: if $yt'y^{-1}=xtx^{-1}$ then $m:=x^{-1}y$ satisfies $m^{-1}tm=t'$, and since $t'$ is regular the maximal torus containing it is unique, so $m\in N_G(T)$; conversely every $m\in N_G(T)$ produces the point $(xmT,m^{-1}tm)$ over the same image, and $mT$ is determined by that point, so the fiber is in bijection with $N_G(T)/T=W(G,T)$. Hence, $q$ being a local diffeomorphism with constant finite fibres out of a compact space, it is a covering map; its degree is $|W(G,T)|$. [L2, step 2.1]

4.1 For continuous $f$ supported in $G_{\mathrm{reg}}$, pull the volume measure $dg$ back along the covering $q$: on each connected component of the source over which $q$ is a diffeomorphism the change-of-variables formula expresses $\int f\,dg$ as the integral of $f\circ q$ times the absolute Jacobian, and the $|W|$ sheets together give $\int_Gf\,dg=\tfrac1{|W|}\int_{G/T}\int_{T_{\mathrm{reg}}}f(xtx^{-1})|\det(1-\operatorname{Ad}(t))|_{\mathfrak m}|\,dt\,d(xT)$. At each regular $t$ the complex eigenvalues of $\operatorname{Ad}(t)$ on $\mathfrak m_{\mathbb C}$ are the roots, so $\det(1-\operatorname{Ad}(t))|_{\mathfrak m}=\prod_{\alpha\in\Phi^+}(1-\alpha(t))(1-\alpha(t)^{-1})=\prod_{\alpha\in\Phi^+}|1-\alpha(t)|^2=J(t)$; the integrand is continuous and integrable. [L1, L4, step 2.1, step 3.1]

5.1 Since $G_{\mathrm{reg}}$ and $T_{\mathrm{reg}}$ have full measure and the integrands are continuous, step 4.1 extends to every continuous $f$ on $G$: approximate $f$ uniformly and use that the total masses are one. This proves the displayed formula for continuous $f$ and, by step 1.1, with the explicit invariant probability $d(xT)$. [L1, L3, step 1.1, step 1.2, step 4.1]

6.1 If $f$ is a class function then $f(xtx^{-1})=f(t)$ for all $x$, and the inner integral over $G/T$ is the constant $f(t)$ because $d(xT)$ is a probability; hence $\int_Gf\,dg=|W(G,T)|^{-1}\int_Tf(t)J(t)\,dt$, and by [[prop-weyl-jacobian-is-well-defined-and-weyl-invariant]] the right side does not depend on the chosen positive system. The Axiom of Choice entered only through the Haar and manifold structure theory cited. [A1, L2, step 1.1, step 4.1, step 5.1] ∎
