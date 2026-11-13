---
title: "Corollary 1.6: quintic control near zero"
status: published
research_item: cor-se-1-6
dependency_level: 23
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 5, Corollary 1.6; PDF page 17, proof
---

PDF p. 5: ` Corollary 1.6 `; PDF p. 17: ` Proof of Corollary 1.6 `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-internal-systems](item-def-se-internal-systems)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-boundary-state-space](item-def-se-boundary-state-space)
- [def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [prop-se-3-9](item-prop-se-3-9)
- [prop-se-3-10](item-prop-se-3-10)
- [prop-se-scale-identifications](item-prop-se-scale-identifications)
- [prop-se-nonlinear-mild](item-prop-se-nonlinear-mild)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [prop-se-energy-nonlinear-estimates](item-prop-se-energy-nonlinear-estimates)
- [prop-se-h2-nonlinearity](item-prop-se-h2-nonlinearity)
- [lem-se-3-11](item-lem-se-3-11)
- [prop-se-boundary-transfer](item-prop-se-boundary-transfer)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice. Let $n\in\{2,3\}$ and let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary, connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and the non-trapping property that every generalized reflected or glancing ray leaves every compact set in finite forward time. Let $T>0$, $s\in\{1,2\}$ and $\lambda\in\mathbb R\setminus\{0\}$. Let $H_D^s(\Omega)=D((I-\Delta_D)^{s/2})$ be the Dirichlet spectral space; in particular $H_D^1=H^1_0$ and $H_D^2=H^2\cap H^1_0$ with equivalent norms. Here $H^1_0$ is the $H^1$ closure of compactly supported smooth functions.

Choose $R>0$ containing $\Theta$ and a smooth real cutoff $\varphi\in C^\infty(\mathbb R^n;[0,1])$ which is zero on $|x|\le R$, positive on $|x|>R$, and one on $|x|\ge R+1$. There is $\delta_{\mathrm{int}}>0$ such that, for every $v_0,v_T\in H_D^s(\Omega)$ of spectral norms at most $\delta_{\mathrm{int}}$, a control $h\in C([0,T];H_D^s(\Omega))$ and an integral solution $v\in C([0,T];H_D^s(\Omega))$ satisfy $v(0)=v_0$, $v(T)=v_T$, the homogeneous Dirichlet condition, and $i\partial_t v+\Delta v+\lambda|v|^4v=\varphi h$ in distributions on $(0,T)\times\Omega$.

For the boundary conclusion, choose $R_0>0$ with $\Theta\subset B_{R_0}(0)$, set $\Omega_0=B_{R_0}(0)\setminus\Theta$, $\Gamma_1=\partial B_{R_0}(0)$ and $\Gamma_2=\partial\Theta$, and let $X^s(\Omega_0)=\{f\in H^s(\Omega_0):\gamma_{\Gamma_2}f=0\}$ with its inherited $H^s$ norm. The trace $\gamma_{\Gamma_2}$ is the Sobolev value trace. There is $\delta_{\mathrm{bdry}}>0$ such that any $u_0,u_1\in X^s(\Omega_0)$ of norms at most $\delta_{\mathrm{bdry}}$ can be joined by $u\in C([0,T];H^s(\Omega_0))$ with $u(0)=u_0$, $u(T)=u_1$, and a boundary control $k\in C([0,T];H^{s-1/2}(\Gamma_1))$. They satisfy $i\partial_tu+\Delta u+\lambda|u|^4u=0$ in distributions, $\gamma_{\Gamma_1}u=k$, and $\gamma_{\Gamma_2}u=0$. Thus the local internal and outer Dirichlet boundary conclusions remain valid for the quintic nonlinearity.

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-control-cutoffs](item-def-se-control-cutoffs)

[def-se-internal-systems](item-def-se-internal-systems)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-boundary-state-space](item-def-se-boundary-state-space)

[def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] [def-se-geometry](item-def-se-geometry) fixes the exterior geometry and ray convention. [def-se-control-cutoffs](item-def-se-control-cutoffs) specifies the cutoff, and [def-se-internal-systems](item-def-se-internal-systems) specifies the quintic controlled equation and its Dirichlet evolution convention. [def-se-dirichlet-scale](item-def-se-dirichlet-scale), [def-se-boundary-state-space](item-def-se-boundary-state-space), [def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation) and [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces) specify the spectral spaces, boundary state space, distributional equation and time continuity. The Choice assumption is [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] For the stated geometry and cutoff, [prop-se-3-9](item-prop-se-3-9) gives small-data quintic internal control at $s=1$ with $v$ also in $L^4_tL^\infty_x$. [prop-se-3-10](item-prop-se-3-10) gives it at $s=2$. [prop-se-scale-identifications](item-prop-se-scale-identifications) identifies the integer endpoint spaces and their equivalent norms.

[F3] For these solution classes, [prop-se-energy-nonlinear-estimates](item-prop-se-energy-nonlinear-estimates) gives $\lambda|v|^4v\in L^1(0,T;H^1_0)$ at $s=1$, while [prop-se-h2-nonlinearity](item-prop-se-h2-nonlinearity) gives membership in $L^1(0,T;H_D^2)$ at $s=2$. [prop-se-nonlinear-mild](item-prop-se-nonlinear-mild) gives the integral equation, and [prop-se-scale-flow](item-prop-se-scale-flow) gives the unitary group and its generator action on sufficiently regular spectral vectors.

[F4] [lem-se-3-11](item-lem-se-3-11) supplies a bounded extension $E:X^s(\Omega_0)\to H_D^s(\Omega)$ whose restriction is the identity. [prop-se-boundary-transfer](item-prop-se-boundary-transfer) transfers a distributional quintic exterior solution with locally integrable forcing and nonlinearity to the stated outer boundary system and transfers the small-data radius through $E$.

## Proof

**Given:** The assumptions and notation of the Statement.

**Goal:** Establish the quintic internal control and then the outer boundary control for both endpoint orders.

1.1 Fix $s\in\{1,2\}$ and apply F2 with $m=5$. At $s=1$ use Proposition 3.9 and at $s=2$ use Proposition 3.10. The scale identifications convert their endpoint norms to the spectral norms in the Statement, shrinking the positive radius if necessary. This gives the required continuous control, integral solution, and endpoint identities for the chosen cutoff. [F1, F2, given]

2.1 The nonlinearity and $\varphi h$ are integrable in time with values in $L^2(\Omega)$ by F3 and the continuity of $h$; hence both are locally integrable on space-time. The integral identity in F3 yields the distributional equation: pair it with a compactly supported smooth spatial test function, use the unitary group to move the group to the test function, and differentiate the resulting scalar convolution against a compactly supported smooth time test function. The generator acts on the spatial test function as $i\Delta$, by F3; integration by parts in time gives $i\partial_t v+\Delta v+\lambda|v|^4v=\varphi h$. The Dirichlet condition is encoded by the spectral realization. This proves the internal assertion. [F1, F3, step 1.1]

3.1 For boundary data choose the cutoff in F1 with $R=R_0+1$. By F4, $E$ is bounded and preserves restriction to $\Omega_0$. Choose a positive boundary radius small enough that $\|Eu_j\|_{H_D^s}\le\delta_{\mathrm{int}}$ for $j=0,1$. Step 1.1 supplies an exterior solution joining these extensions, and step 2.1 supplies its distributional equation and locally integrable terms. [F1, F4, step 1.1, step 2.1, given]

4.1 Apply the quintic case of the boundary-transfer proposition in F4. Since $\varphi$ vanishes on $\Omega_0$, restricting the exterior solution gives the homogeneous quintic equation there, the prescribed endpoints and zero obstacle trace. Its outer trace is the claimed continuous boundary control. This proves the boundary assertion and the corollary. [F4, step 3.1] ∎

## Source notes

The frozen article is cited for attribution of Corollary 1.6. The argument above uses the separately stated quintic control, spectral, extension and transfer suppliers; it does not use the corollary as its own proof.
