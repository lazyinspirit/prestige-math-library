---
id: def-weak-generic-supercuspidal-correspondence
kind: definition
title: "Weak generic supercuspidal correspondence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-arithmetic-langlands-parameter-stack
  - def-generic-bernstein-direct-factor
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Helm, Maarten Solleveld, and Yujie Xu, A Generic Categorical Local Langlands Correspondence for Quasi-split Reductive Groups, Definitions 4.3 and 5.1–5.6"
      url: "https://arxiv.org/pdf/2606.10149v2"
verification:
  precheck: n/a
---

## Definition

Let $E$ be a nonarchimedean local field, let $G/E$ be connected, reductive,
and quasi-split, and fix a Whittaker datum $(B,\psi)$ for $G$. For each
standard Levi subgroup $M$ of $G$, a **weak generic supercuspidal
correspondence** is a map $\Phi_M$ from irreducible $\psi_M$-generic
supercuspidal representations $\sigma$ of $M(E)$ to $\widehat M$-conjugacy
classes of supercuspidal Langlands parameters $(\rho,N)$ as defined in the
arithmetic Langlands parameter-stack definition. The map is required to
satisfy the following conditions for every
standard Levi $M$.

1. **Unramified-twist compatibility.** If $\chi$ is an unramified character of
   $M(E)$, then, after compatible representatives are chosen,
   $\Phi_M(\sigma\otimes\chi)|_{I_E}=\Phi_M(\sigma)|_{I_E}$ and
   $\Phi_M(\sigma\otimes\chi)(\mathrm{Fr}_{\mathrm{geom}})
   =\widehat\chi\,\Phi_M(\sigma)(\mathrm{Fr}_{\mathrm{geom}})$. Here
   $\widehat\chi$ represents the class corresponding to $\chi$ under the
   character-parameter identification
   $X_{\mathrm{nr}}(M)\cong(Z(\widehat M)^{I_E})^\circ_{\mathrm{Fr}}$.
   Here $X_{\mathrm{nr}}(M)$ is the group of smooth unramified characters of
   $M(E)$, and the subscript $\mathrm{Fr}$ denotes coinvariants for geometric
   Frobenius.
2. **Weyl compatibility.** For each relative Weyl element
   $w\in W(G,M):=N_G(M)(E)/M(E)$, let $\widehat w$ be its corresponding
   element under the natural identification with
   $W(\widehat G,\widehat M):=N_{\widehat G}({}^L M)/\widehat M$, where
   ${}^L M$ is the standard Levi $L$-group inside ${}^L G$ and the
   normalizer preserves this full $L$-group, including its Weil action. Then
   $\Phi_M(w\cdot\sigma)=\operatorname{Ad}(\widehat w)\Phi_M(\sigma)$.
3. **Plancherel compatibility.** For every Levi subgroup $L\supset M$ such
   that ${}^L L$ minimally contains ${}^L M$ (that is, ${}^L L$ strictly
   contains ${}^L M$ and no proper intermediate Levi $L$-group lies between
   them), the unramified-twist identification from clause 1 carries the pole
   set of the Harish–Chandra $\mu$-function $\mu_{L,\sigma}$ to the set of
   parameters $\phi'$ for which the adjoint local $L$-factor
   $L(1,\operatorname{Ad}_{\widehat L}\phi')$ has a pole. The $\mu$-function
   is the rational function on the unramified-twist orbit occurring in the
   Plancherel density for normalized parabolic induction; the adjoint
   representation is conjugation on the Lie algebra of $\widehat L$.

## Definition references

[[def-arithmetic-langlands-parameter-stack]]

[[def-generic-bernstein-direct-factor]]

[David Helm, Maarten Solleveld, and Yujie Xu, *A Generic Categorical Local Langlands Correspondence for Quasi-split Reductive Groups*, Definitions 4.3 and 5.1–5.6](https://arxiv.org/pdf/2606.10149v2)
