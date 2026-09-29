---
id: lem-flag-variety-canonical-bundle-weight-minus-two-rho
kind: lemma
title: Canonical weight of a flag variety
status: draft
origin: pipeline
landmark: false
deps:
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - def-borel-character-equivariant-line-bundle
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - thm-semisimple-flag-variety-smooth-projective
  - lem-semisimple-projective-orbit-flag-quotients
  - lem-semisimple-flag-torsor-zariski-charts
  - lem-semisimple-borel-root-factorization
  - lem-semisimple-root-exponential-algebraic-subgroups
  - def-weyl-vector-rho
  - def-sheaf-relative-differentials
  - lem-sheaf-differentials-affine-compatibility
  - lem-differential-of-morphism-via-cotangent-map
  - thm-borel-characters-classify-equivariant-line-bundles-simply-connected
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 7, 17, 20-23, especially 7.18, 17.3, 20.32, 21.68-21.91, 22.17-22.27, 23.59"
    - title: "Brian Conrad, Reductive Group Schemes"
      url: https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf
      locator: "§§1.2, 1.4, especially Theorems 1.2.7, 1.4.12, Proposition 1.4.7 and Corollary 1.4.13"
    - title: "Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem"
      url: https://people.math.harvard.edu/~lurie/papers/bwb.pdf
      locator: "Complete three-page note, especially Theorems 1 and 3 and Lemma 4"
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with Borel $B=T\ltimes U$, positive roots
$\Phi^+$ and flag variety $X=G/B$ of
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]] and
[[lem-semisimple-borel-root-factorization]], let
$$\rho=\tfrac12\sum_{\beta\in\Phi^+}\beta$$
be the Weyl vector of the chosen positive system, so that
$2\rho=\sum_{\beta\in\Phi^+}\beta$ is the sum of the positive roots
([[def-weyl-vector-rho]]), and let
$$\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$$
be the Borel-character equivariant line bundle of
[[def-borel-character-equivariant-line-bundle]]. Then the canonical line
bundle (dualizing line bundle)
$$\omega_X=\det\Omega^1_{X/\mathbb C}=\textstyle\bigwedge^{|\Phi^+|}\Omega^1_{X/\mathbb C}$$
of [[def-smooth-projective-dualizing-line-bundle-and-trace]] is isomorphic to
$\mathcal L_{-2\rho}$: the canonical line of the flag variety is the
equivariant line bundle attached to the character $-2\rho$. With the fibre
conventions of [[def-borel-character-equivariant-line-bundle]], the fibre at
$eB$ of both sides is the one-dimensional $B$-module $\mathbb C_{2\rho}$.

## Facts & Assumptions

**Given:** the group $G$ with Borel $B=T\ltimes U$, the opposite unipotent subgroup $U^-$, the positive roots $\Phi^+$ and Weyl vector $\rho$, the flag variety $X=G/B$ with orbit map $\pi_B$ and base point $eB=[v_B]$, the big cell $\Omega=U^-B$, the equivariant line bundles $\mathcal L_\lambda$, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] $X=G/B$ is a nonempty smooth projective complex variety of dimension $|\Phi^+|$, and the orbit map $\pi_B:G\to X$, $g\mapsto g[v_B]$, is surjective with fibres the right cosets $gB$, so the stabilizer of $[v_B]$ is $B$ and $eB$ is fixed by $B$. ([[thm-semisimple-flag-variety-smooth-projective]], [[lem-semisimple-projective-orbit-flag-quotients]])

[F2] $B=T\ltimes U$ is a closed connected solvable subgroup with unipotent radical $U$, the torus $T$ normalizes the opposite unipotent subgroup $U^-$ and $T\cap U^-=1$, the product map $\prod_{\beta\in\Phi^+}U_{-\beta}\to U^-$, $(z_\beta)\mapsto\prod_{\beta}u_{-\beta}(z_\beta)$ in any height-compatible order, is an isomorphism of varieties onto $U^-$ with $\operatorname{Lie}U^-=\mathfrak n^-=\bigoplus_{\beta\in\Phi^+}\mathfrak g_{-\beta}$, and the restriction of characters is an isomorphism $X^*(B)\to X^*(T)$, so every character of $B$ is trivial on $U$. ([[lem-semisimple-borel-root-factorization]])

[F3] For every root $\alpha$ and all $t\in T$, $z\in\mathbb C$ one has $t\,u_\alpha(z)\,t^{-1}=u_\alpha(\alpha(t)z)$, where $\alpha(t)$ is the value of the character $\alpha$ of $T$; in particular conjugation by $t$ acts on $U_{-\beta}$ by $u_{-\beta}(z)\mapsto u_{-\beta}(\beta(t)^{-1}z)$ for every $\beta\in\Phi^+$. ([[lem-semisimple-root-exponential-algebraic-subgroups]])

[F4] The big cell $\Omega=U^-B$ is open in $G$, and $\sigma_B:U^-\to X$, $u\mapsto u[v_B]$, is an injective morphism with image an open chart $V=\sigma_B(U^-)$ containing $eB$, over which the product morphism $U^-\times B\to\Omega$ is an isomorphism exhibiting $\pi_B$ as the trivial $B$-torsor; in particular $\sigma_B$ is an isomorphism of varieties from $U^-$ onto the open affine chart $V$. ([[lem-semisimple-flag-torsor-zariski-charts]])

[F5] $\omega_X=\bigwedge^{N}\Omega^1_{X/\mathbb C}$ is a locally free $\mathcal O_X$-module of rank one, and an isomorphism $\varphi:X\to X'$ of smooth projective $N$-dimensional $\mathbb C$-schemes induces a canonical isomorphism $\varphi^*\omega_{X'}\cong\omega_X$. ([[def-smooth-projective-dualizing-line-bundle-and-trace]], [[def-sheaf-relative-differentials]])

[F6] For an affine chart $\operatorname{Spec}B$ of an $S$-scheme and $g\in B$ one has $\Omega_{X/S}(D(g))\cong\Omega_{B_g/A}$ compatibly with the universal derivations, and for composable morphisms $X\xrightarrow{f}Y\xrightarrow{g}Z$ over $S$ the differential satisfies the chain rule and identity, with canonical identifications $f^*g^*\Omega_{Z/S}\cong(g\circ f)^*\Omega_{Z/S}$ compatible with $\mathrm d$. ([[lem-sheaf-differentials-affine-compatibility]], [[lem-differential-of-morphism-via-cotangent-map]])

[F7] The Weyl vector of the positive system is $\rho=\frac12\sum_{\beta\in\Phi^+}\beta$ with $2\rho=\sum_{\beta\in\Phi^+}\beta\in Q$, the sum of the positive roots. ([[def-weyl-vector-rho]])

[F8] $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}=(G\times\mathbb C)/{\sim}$ with $(gb,v)\sim(g,b\cdot v)$ and $b\cdot v=\lambda(b)^{-1}v$ is a $G$-equivariant line bundle over $X$ with projection $[g,v]\mapsto gB$, its fibre over a point $gB$ is the one-dimensional space $\{[g,v]:v\in\mathbb C\}$, and the $B$-action on the fibre over $eB$ is through the character $-\lambda$. ([[def-borel-character-equivariant-line-bundle]])

[F9] Taking the fibre at $eB$ is an equivalence of groupoids from $G$-equivariant algebraic line bundles on $X$ to one-dimensional algebraic representations of $B$, and with the sign convention of [F8] the bundle $\mathcal L_\lambda$ corresponds to the one-dimensional $B$-module $\mathbb C_{-\lambda}$ on which $b$ acts by $\lambda(b)^{-1}$. ([[thm-borel-characters-classify-equivariant-line-bundles-simply-connected]])

**Proof technique:** direct: use the open big-cell chart $\sigma_B:U^-\to V$ with its root coordinates $z_\beta$, compute the cotangent space of $X$ at $eB$ as the span of the classes of $\mathrm dz_\beta$, read off the $T$-weights $\beta$ from the conjugation formula for the root subgroups, take the top exterior power to obtain the weight $2\rho$, and conclude by the classification of equivariant line bundles through their fibre at $eB$.

## Proof

1.1 The big-cell chart and the torus action. By [F4] the map $\sigma_B:U^-\to V\subset X$ is an isomorphism onto an open affine chart containing $eB$, and by [F2] the chart carries the coordinates $z_\beta$ ($\beta\in\Phi^+$) of $U^-$. For $t\in T$ and $u\in U^-$ one has $\ell_t(\sigma_B(u))=t\,u[v_B]=(tut^{-1})[v_B]=\sigma_B(tut^{-1})$, because $t^{-1}$ fixes $[v_B]$ by [F1]; hence $V$ is $T$-stable and $t$ acts on the chart by conjugation of $U^-$, which by [F3] scales the coordinate $z_\beta$ by $\beta(t)^{-1}$. Consequently the comorphism of the action satisfies $\ell_{t^{-1}}^*(z_\beta)=\beta(t)z_\beta$ for every $\beta\in\Phi^+$. [F1, F2, F3, F4]

2.1 The cotangent space at $eB$. By [F6] the $\mathcal O_X$-module $\Omega^1_{X/\mathbb C}$ restricted to the affine chart $V=\operatorname{Spec}\mathbb C[z_\beta]$ corresponds to the Kähler differential module $\Omega_{\mathbb C[z_\beta]/\mathbb C}$, which is free with basis the differentials $\mathrm dz_\beta$. Its fibre at the origin $eB$, the maximal ideal $(z_\beta)$, is therefore the $\mathbb C$-vector space $$(\Omega^1_{X/\mathbb C})_{eB}=\bigoplus_{\beta\in\Phi^+}\mathbb C\,\mathrm dz_\beta .$$ The generator $\mathrm dz_\beta$ corresponds to the universal derivation of the coordinate $z_\beta$, so by the naturality of $\mathrm d$ under the chart automorphisms [F6] the left action $\omega\mapsto(\ell_{g^{-1}})^*\omega$ of $G$ on differential forms satisfies $\ell_{b^{-1}}^*(\mathrm dz_\beta)=\mathrm d(\ell_{b^{-1}}^*(z_\beta))$ for $b\in B$; on the torus $T$ this is $\mathrm d(\beta(t)z_\beta)=\beta(t)\,\mathrm dz_\beta$ by step 1.1. Hence the cotangent space at $eB$ is a $B$-representation of dimension $|\Phi^+|$, whose $T$-weights are the positive roots $\beta$. [F6, step 1.1]

3.1 The fibre of the canonical bundle. Since $\omega_X=\bigwedge^{|\Phi^+|}\Omega^1_{X/\mathbb C}$ by [F5] and the chart module is free, forming the top exterior power commutes with taking the fibre at $eB$: the fibre $(\omega_X)_{eB}$ is the top exterior power of the cotangent space of step 2.1, one-dimensional and spanned by the class of the wedge product $$\mathrm dz_{\beta_1}\wedge\cdots\wedge\mathrm dz_{\beta_{|\Phi^+|}},$$ with $\beta_1,\dots,\beta_{|\Phi^+|}$ an enumeration of $\Phi^+$. The action of $t\in T$ multiplies each factor $\mathrm dz_\beta$ by $\beta(t)$, so the $T$-weight of this generator is $\prod_{\beta\in\Phi^+}\beta(t)=2\rho(t)$ by [F7]. The fibre is a one-dimensional algebraic $B$-representation, hence given by a character of $B$; by [F2] every character of $B$ is trivial on $U$ and is determined by its restriction to $T$, so the $B$-module $(\omega_X)_{eB}$ is exactly the one-dimensional module $\mathbb C_{2\rho}$ on which $b$ acts by $\lambda(b)^{-1}$ for the character $\lambda=-2\rho$ of $B$. [F2, F5, F7, step 1.1, step 2.1]

4.1 The equivariant structure on $\omega_X$. For $g\in G$ the left translation $\ell_g$ is an isomorphism $X\to X$, and the canonical isomorphisms $\ell_g^*\omega_X\cong\omega_X$ of [F5] compose compatibly because the differential satisfies the chain rule and identity [F6]; using them in the form $(\ell_{g^{-1}})^*$ defines a left action of $G$ on the total space of $\omega_X$ covering the action on $X$. Thus $\omega_X$ is a $G$-equivariant algebraic line bundle on $X$ whose induced $B$-action on the fibre at the fixed point $eB$ is the one computed in step 3.1, and the fibre functor of [F9] assigns to $\omega_X$ the one-dimensional $B$-module $\mathbb C_{2\rho}$. [F5, F6, F9, step 3.1]

5.1 Conclusion. By [F8] the fibre of $\mathcal L_{-2\rho}$ at $eB$ is the $B$-module $\mathbb C_{-(-2\rho)}=\mathbb C_{2\rho}$, the same one attached to $\omega_X$ in step 4.1; the fibre functor of [F9] is an equivalence, so it reflects isomorphisms and there is a (necessarily $G$-equivariant) isomorphism $\omega_X\cong\mathcal L_{-2\rho}$. In particular the canonical bundle is $\mathcal L_{-2\rho}$, and no choice of a different sign or identification enters: the identification is forced by the fibre characters. [F8, F9, step 3.1, step 4.1]

6.1 Axiom-of-choice bookkeeping. The Axiom of Choice [A1] is assumed in the statement and is inherited through the quotient, torsor and cohomological suppliers behind [F1], [F4], [F5] and [F9]; the computation itself uses only the fixed chart, the finitely many root coordinates $z_\beta$ and the conjugating tori, and makes no further choice. The open chart and quotient structure used in steps 1.1–5.1 are supplied by [F1] and [F4], and the equivariant bundle identification by [F9]. [A1, F1, F4, F5, F9, step 1.1, step 4.1, step 5.1] ∎
