---
id: thm-howard-heegner-euler-system-kolyvagin-bound
kind: theorem
title: "Heegner-Point Euler System Gives Kolyvagin’s Selmer Bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 40
deps:
  - def-classical-heegner-point-kolyvagin-data
  - def-p-primary-selmer-groups-for-an-elliptic-curve
  - thm-bcdt-every-elliptic-curve-over-q-is-modular
  - thm-heegner-point-euler-system-kolyvagin-construction
  - thm-mazur-rubin-higher-core-rank-kolyvagin-selmer-bound
  - thm-poitou-tate-exact-sequence-for-finite-modules
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Benjamin Howard, The Heegner Point Kolyvagin System"
      url: "https://arxiv.org/pdf/1202.6340"
      locator: "§1.6 Theorem 1.6.5, printed pp. 17–18."
verification: {}
---

## Statement

Let $E/\mathbb Q$ be an elliptic curve of conductor $N$, let $K$ be imaginary quadratic of discriminant $D\ne-3,-4$ with every prime dividing $N$ split in $K$, and let $p$ be odd with $p,D,N$ pairwise coprime. Assume the Galois action $G_K\to\operatorname{Aut}_{\mathbb Z_p}(T_p(E))$ is surjective and for some integer $s$ the Selmer triple $(T_p(E),\mathcal F,\mathcal L_s)$ admits a Kolyvagin system $\kappa$ with $\kappa_1\ne0$. Then the compact $p$-power Selmer group $S_p(E/K)$ is free of rank one over $\mathbb Z_p$, and there is a finite $\mathbb Z_p$-module $M$ such that
$$\operatorname{Sel}_{p^\infty}(E/K)\cong(\mathbb Q_p/\mathbb Z_p)\oplus M\oplus M$$
and
$$\operatorname{length}_{\mathbb Z_p}(M)\le\operatorname{length}_{\mathbb Z_p}\bigl(S_p(E/K)/\mathbb Z_p\kappa_1\bigr).$$
Here $S_p(E/K)$ is the compact $p$-power Selmer group fitting into $0\to E(K)\otimes\mathbb Z_p\to S_p(E/K)\to\varprojlim_m\operatorname{Sha}(E/K)[p^m]\to0$, where $\operatorname{Sha}(E/K)=\ker(H^1(K,E)\to\prod_v H^1(K_v,E))$ is the group of everywhere locally trivial $E$-torsors.

## Statement references

[[def-p-primary-selmer-groups-for-an-elliptic-curve]]

[Howard, *The Heegner Point Kolyvagin System*, §1.6 Theorem 1.6.5](https://arxiv.org/pdf/1202.6340)

## Authoring status

The local proof still requires the Mazur–Rubin bound and verification of its hypotheses, together with the identification of propagated local conditions with the usual p-primary Selmer groups. The current Poitou–Tate carrier contains a local argument through its stated dependencies, but that does not complete these separate arguments or justify its AC, Countable Choice and DC assumptions under this unqualified Statement. The current BCDT modularity supplier also supplies no local proof. These obligations remain escalated.
