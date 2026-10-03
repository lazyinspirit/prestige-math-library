---
id: lem-tubular-charts-realize-a-prescribed-normal-identification
kind: lemma
title: "Compatible tubular charts realize a prescribed normal identification"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold", "def-normal-and-conormal-bundles-of-an-embedded-submanifold", "cor-every-smooth-manifold-admits-a-riemannian-metric", "def-tangential-and-normal-projections-along-a-riemannian-submanifold", "prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices", "prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism", "thm-chain-rule-for-differentials-of-smooth-maps", "def-countable-choice"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.24 and Proposition 6.25"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
      locator: "Tubular neighbourhoods, printed pp.139–141"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $i:S\hookrightarrow M$ be a closed smooth embedded submanifold, $E\to S$ a smooth real vector bundle, and $\alpha:E\to\nu(S)=i^*TM/di(TS)$ a smooth bundle isomorphism over $\mathrm{id}_S$. Then there is a diffeomorphism $\Phi$ from an open neighbourhood of the zero section $0_S$ in $E$ onto an open neighbourhood $U$ of $i(S)$ in $M$, with $\Phi(s,0)=i(s)$ for every $s$, whose induced map on the normal quotient is exactly $\alpha$: identifying the vertical subspace of $T_{(s,0)}E$ with $E_s$, the composite
$$E_s\xrightarrow{\ d\Phi_{(s,0)}|_{E_s}\ }T_{i(s)}M\xrightarrow{\ q_s\ }T_{i(s)}M/di_s(T_sS)=\nu(S)_s$$
equals $\alpha_s$ for every $s\in S$. In particular, taking $E=\nu(S)$ and $\alpha=\mathrm{id}$, the normal bundle itself admits a tubular chart inducing the identity on its normal quotient.

## Facts & Assumptions

**Given:** Countable choice, a closed smooth embedded submanifold $i:S\hookrightarrow M$, a smooth real vector bundle $E\to S$ and a smooth bundle isomorphism $\alpha:E\to\nu(S)$ over $\mathrm{id}_S$.

[F1] Under $\mathrm{AC}_\omega$ there are an open neighbourhood $\Omega_0\subseteq\nu(S)$ of the zero section and a diffeomorphism $\Phi_0:\Omega_0\to U_0$ onto an open neighbourhood of $i(S)$ with $\Phi_0(0_s)=i(s)$ ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).

[F2] Under $\mathrm{AC}_\omega$ every smooth manifold admits a Riemannian metric ([[cor-every-smooth-manifold-admits-a-riemannian-metric]]).

[F3] For an embedded submanifold of a Riemannian manifold the orthogonal complement $C=(di(TS))^\perp$ is a smooth subbundle with $TM|_S=di(TS)\oplus C$, the metric identifies $C$ with the quotient normal bundle $\nu(S)$ of [[def-normal-and-conormal-bundles-of-an-embedded-submanifold]], and the orthogonal projection $\pi^\perp:TM|_S\to C$ is smooth ([[def-tangential-and-normal-projections-along-a-riemannian-submanifold]]).

[F4] A fibrewise linear map over a smooth base map is smooth exactly when its local matrix functions are smooth ([[prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices]]).

[F5] A smooth bundle map over a diffeomorphism whose every fibre map is bijective is a bundle isomorphism ([[prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism]]).

[F6] Differentials satisfy the chain rule ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

[A1] Countable choice is [[def-countable-choice]]; it is used exactly through [F1] and [F2].

## Proof

**Proof technique:** direct.

1.1 By [F1] fix a tubular chart $\Phi_0$, and by [F2] fix a Riemannian metric $g$ on $M$; then [F3] exhibits $\nu(S)$ as the smooth quotient bundle identified with $C$ and makes $\pi^\perp$ smooth. Let $\Psi:\Omega\subseteq F\to M$ be any chart of a smooth bundle $F\to S$ of rank equal to $\operatorname{codim}S$ with $\Psi(0_s)=i(s)$. Write $z$ for the zero section and identify $T_{(s,0)}F=dz_s(T_sS)\oplus F_s$, where $F_s=\ker d\pi_F$ is the vertical subspace. Since $\Psi\circ z=i$, one has $d\Psi_{(s,0)}(dz_s(u))=di_s(u)$; hence $d\Psi_{(s,0)}$ sends the horizontal summand isomorphically onto $di_s(T_sS)$ and $F_s$ isomorphically onto a complement of it. The quotient class $\beta_s(v):=[d\Psi_{(s,0)}(v)]\in\nu(S)_s$ is therefore a well-defined linear map $F_s\to\nu(S)_s$. [F1, F2, F3, given, construct]

2.1 With $j:C\to\nu(S)$ the identification of [F3] and $\widetilde\beta_s:=\pi^\perp\circ d\Psi_{(s,0)}|_{F_s}$ one has $\beta=j\circ\widetilde\beta$, because $d\Psi(v)-\pi^\perp d\Psi(v)$ lies in $di_s(T_sS)$. In local frames of $F$ and $TM|_S$ the components of $d\Psi_{(s,0)}|_{F_s}$ are smooth functions of $s$, since $\Psi$ is smooth, and $\pi^\perp$ has smooth local matrices by [F3]; so [F4] makes $\widetilde\beta$ and $\beta$ smooth bundle maps over $\mathrm{id}_S$. Fibrewise, $\pi^\perp d\Psi(v)=0$ forces $d\Psi(v)\in di_s(T_sS)$, hence $v=0$ by the splitting and injectivity of $d\Psi$; since $\operatorname{rank}F=\operatorname{codim}S=\operatorname{rank}C$, each $\widetilde\beta_s$ and $\beta_s$ is bijective. By [F5], $\beta$ is a smooth bundle isomorphism. [F3, F4, F5, step 1.1, algebra]

3.1 Apply step 2.1 to $F=\nu(S)$ and $\Psi=\Phi_0$: the induced map $\beta_0$ is a smooth bundle automorphism of $\nu(S)$. Put $\gamma=\beta_0^{-1}\circ\alpha:E\to\nu(S)$ and $\Phi=\Phi_0\circ\gamma:\gamma^{-1}(\Omega_0)\to U_0$. Since $\gamma$ is a smooth bundle isomorphism over $\mathrm{id}_S$, the set $\gamma^{-1}(\Omega_0)$ is open and contains $0_S$, and $\Phi$ is a diffeomorphism with $\Phi(0_s)=\Phi_0(0_s)=i(s)$. For $v\in E_s$ one has $d\gamma_{(s,0)}(v)=\gamma_s(v)$, because $\gamma$ is fibrewise linear over $\mathrm{id}_S$; hence by the chain rule [F6] the induced map of $\Phi$ at $s$ is $\beta_{0,s}\circ\gamma_s=\beta_{0,s}\circ\beta_{0,s}^{-1}\circ\alpha_s=\alpha_s$. [F5, F6, step 2.1, construct]

4.1 Taking $E=\nu(S)$ and $\alpha=\mathrm{id}$ in step 3.1 gives the chart $\Phi_0\circ\beta_0^{-1}$, which induces the identity, so the normal bundle admits a chart in the specified compatible class. If $S=\varnothing$ then $E$, $\nu(S)$, $\Omega_0$ and $U_0$ are empty and the condition is vacuous; if $E$ has rank zero then $\operatorname{codim}S=0$ and $\beta_s$ is the unique isomorphism between zero spaces, so step 3.1 still applies. The isomorphism $\gamma$ is determined by the supplied chart and $\alpha$, so no object is selected beyond [A1]; the metric of [F2] only exhibits the smooth structure and does not enter $\beta_0$. [F1, F2, step 3.1, given] ∎
