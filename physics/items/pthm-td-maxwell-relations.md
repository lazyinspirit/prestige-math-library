---
id: pthm-td-maxwell-relations
kind: physics-theorem
title: Maxwell relations on valid thermodynamic potential charts
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Equality of mixed response derivatives on positive-temperature C2 single-phase charts where the named thermodynamic potentials are C2 functions of their local natural coordinates; no relation crosses a singular chart or phase boundary.
deps:
  - def-td-legendre-potentials
  - pthm-td-potential-differentials
  - thm-clairaut-schwarz-mixed-partials
dependency_roles:
  def-td-legendre-potentials: formulation-prerequisite
  pthm-td-potential-differentials: physical-result
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §2.8
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.08:_Maxwell_Relations
    - title: Jeremy Tatum, Heat and Thermodynamics, §12.5, Summary, Maxwell Relations, and Gibbs-Helmholtz Relations
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/12:_Free_Energy/12.05:_Summary_the_Maxwell_Relations_and_the_Gibbs-Helmholtz_Relations
dependency_level: 9
---

## Statement

Let $U,H,F,G,\Omega$ and their natural-coordinate charts be as in [[def-td-legendre-potentials]], with the exact differentials supplied by [[pthm-td-potential-differentials]]. Assume each potential is C2 on its named open chart. Every pair of conjugate coefficients in its exact differential has equal cross derivatives. Explicitly, with all unlisted natural coordinates held fixed, for each species $i,j$:

- From $U(s,V,n)$: $T_V|_{s,n}=-p_s|_{V,n}$; $T_{n_j}|_{s,V,n}=\mu_{j,s}|_{V,n}$; $-p_{n_j}|_{s,V,n}=\mu_{j,V}|_{s,n}$; and $\mu_{i,n_j}|_{s,V}=\mu_{j,n_i}|_{s,V}$.
- From $H(s,p,n)$: $T_p|_{s,n}=V_s|_{p,n}$; $T_{n_j}|_{s,p,n}=\mu_{j,s}|_{p,n}$; $V_{n_j}|_{s,p,n}=\mu_{j,p}|_{s,n}$; and $\mu_{i,n_j}|_{s,p}=\mu_{j,n_i}|_{s,p}$.
- From $F(T,V,n)$: $s_V|_{T,n}=p_T|_{V,n}$; $s_{n_j}|_{T,V,n}=-\mu_{j,T}|_{V,n}$; $-p_{n_j}|_{T,V,n}=\mu_{j,V}|_{T,n}$; and $\mu_{i,n_j}|_{T,V}=\mu_{j,n_i}|_{T,V}$.
- From $G(T,p,n)$: $-s_p|_{T,n}=V_T|_{p,n}$; $-s_{n_j}|_{T,p,n}=\mu_{j,T}|_{p,n}$; $V_{n_j}|_{T,p,n}=\mu_{j,p}|_{T,n}$; and $\mu_{i,n_j}|_{T,p}=\mu_{j,n_i}|_{T,p}$.
- From $\Omega(T,V,\mu)$: $s_V|_{T,\mu}=p_T|_{V,\mu}$; $s_{\mu_j}|_{T,V,\mu_{k\ne j}}=n_{j,T}|_{V,\mu}$; $p_{\mu_j}|_{T,V,\mu_{k\ne j}}=n_{j,V}|_{T,\mu}$; and $n_{i,\mu_j}|_{T,V,\mu_{k\ne j}}=n_{j,\mu_i}|_{T,V,\mu_{k\ne i}}$.

## Facts & Assumptions

**Given:** The local C2 potential charts and their exact differentials. Temperature is positive; derivatives are taken only inside the relevant open natural-coordinate chart.

[F1] [[pthm-td-potential-differentials]]: The coefficient lists are $(T,-p,\mu)$ for $U$, $(T,V,\mu)$ for $H$, $(-s,-p,\mu)$ for $F$, $(-s,V,\mu)$ for $G$, and $(-s,-p,-n)$ for $\Omega$.

[F2] [[def-td-legendre-potentials]]: The listed natural variables are local inverse coordinates only on the stated valid transform charts.

[L1] [[thm-clairaut-schwarz-mixed-partials]]: For a C2 scalar function on an open Euclidean set, every pair of mixed second coordinate partials is equal.

## Proof

1.1 For $U(s,V,n)$ the coefficient of $ds$ is $T$, of $dV$ is $-p$, and of $dn_j$ is $\mu_j$ by [F1]. Apply [L1] to each unordered pair of its natural coordinates; the resulting equalities are exactly the four relations in the first bullet of the Statement. [given, F1, F2, L1]

1.2 For $H(s,p,n)$ the coefficients from [F1] are $T,V,\mu_j$. Equality of the mixed derivatives in [L1] for the pairs $(s,p)$, $(s,n_j)$, $(p,n_j)$, and $(n_i,n_j)$ gives the second bullet. [given, F1, F2, L1]

1.3 For $F(T,V,n)$ the coefficients are $-s,-p,\mu_j$. Applying [L1] to $(T,V)$, $(T,n_j)$, $(V,n_j)$, and $(n_i,n_j)$ yields the third bullet, including its minus signs. [given, F1, F2, L1, algebra]

1.4 For $G(T,p,n)$ the coefficients are $-s,V,\mu_j$. Applying [L1] to the same four types of coordinate pairs yields the fourth bullet. [given, F1, F2, L1, algebra]

2.1 For $\Omega(T,V,\mu)$ the coefficients are $-s,-p,-n_j$. Applying [L1] to $(T,V)$, $(T,\mu_j)$, $(V,\mu_j)$, and $(\mu_i,\mu_j)$ yields the fifth bullet. Each equality is confined to the same valid chart by [F2]. [given, F1, F2, L1, algebra] ∎
