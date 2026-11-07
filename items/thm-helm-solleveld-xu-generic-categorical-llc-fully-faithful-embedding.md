---
id: thm-helm-solleveld-xu-generic-categorical-llc-fully-faithful-embedding
kind: theorem
title: "Helm–Solleveld–Xu: generic fully faithful categorical embedding for listed quasi-split groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-arithmetic-langlands-parameter-stack
  - def-generic-bernstein-direct-factor
  - def-weak-generic-supercuspidal-correspondence
  - thm-local-langlands-correspondence-for-gl-n-over-p-adic-fields
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "David Helm, Maarten Solleveld, and Yujie Xu, A Generic Categorical Local Langlands Correspondence for Quasi-split Reductive Groups, Theorems 3.1, 7.2, and 7.3"
      url: "https://arxiv.org/pdf/2606.10149v2"
---

## Statement

Let $E$ be a nonarchimedean local field and let $G/E$ be one of the following
quasi-split connected reductive groups:
$\mathrm{GL}_n$, $\mathrm{SL}_n$, $\mathrm{PGL}_n$, $\mathrm{U}_n$,
$\mathrm{Sp}_{2n}$, $\mathrm{SO}_n$, $\mathrm{SO}^{*}_{2n}$,
$\mathrm{GSpin}_n$, $\mathrm{GSpin}^{*}_{2n}$, or $G_2$. Here $n\ge1$,
$\mathrm{U}_n$ denotes a quasi-split unitary group, and the asterisk denotes
the quasi-split form defined by an order-two automorphism of the Dynkin
diagram. For every standard Levi subgroup $M$ of $G$, there is a fully
faithful functor
$\mathrm{LLC}^{\mathrm{gen}}_M:\operatorname{Rep}(M(E))^{\mathrm{gen}}
\to\operatorname{IndCoh}(X_M^L)$, where
$\operatorname{Rep}(M(E))^{\mathrm{gen}}$ is the direct factor consisting
of generic Bernstein blocks and $X_M^L$ is the arithmetic Langlands
parameter stack. These functors send the compact Whittaker module
$W_M=\operatorname{c-Ind}_{U_M(E)}^{M(E)}\psi_M$ to the structure sheaf
$\mathcal O_{X_M^L}$ and are compatible with parabolic induction: for every
standard parabolic $P=MU_P$ of $G$, the square formed by
$\mathrm{LLC}^{\mathrm{gen}}_M$, $\mathrm{LLC}^{\mathrm{gen}}_G$, normalized
parabolic induction $i_P^G$, and spectral parabolic induction
$(\pi_P)_*r_P^*$ commutes up to a natural equivalence. This compatibility
is the commutativity of the following functor square:

```tikzcd
\operatorname{Rep}(M(E))^{\mathrm{gen}} \arrow[r, "\mathrm{LLC}^{\mathrm{gen}}_M"] \arrow[d, "i_P^G"'] & \operatorname{IndCoh}(X_M^L) \arrow[d, "(\pi_P)_*r_P^*"] \\
\operatorname{Rep}(G(E))^{\mathrm{gen}} \arrow[r, "\mathrm{LLC}^{\mathrm{gen}}_G"'] & \operatorname{IndCoh}(X_G^L)
```

Here $W_M$ is the compact Whittaker module for the chosen datum on $M$,
$i_P^G$ is normalized parabolic induction, and $r_P$ and $\pi_P$ are the
maps of arithmetic parameter stacks induced by the dual $L$-group inclusions.
Commutativity means there is a natural equivalence between the two composites;
the diagram records that functorial equality and is not a proof of it.

## Statement references

[[def-arithmetic-langlands-parameter-stack]]

[[def-generic-bernstein-direct-factor]]

[[def-weak-generic-supercuspidal-correspondence]]

[[thm-local-langlands-correspondence-for-gl-n-over-p-adic-fields]]

[David Helm, Maarten Solleveld, and Yujie Xu, *A Generic Categorical Local Langlands Correspondence for Quasi-split Reductive Groups*, Conjecture 3.1 and Theorems 7.2–7.3](https://arxiv.org/pdf/2606.10149v2)
