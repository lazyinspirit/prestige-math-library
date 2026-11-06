---
id: def-m2-brane-worldvolume-action
kind: definition
title: M2 Brane Worldvolume Action
status: published
origin: session
domain: physics
library: physics
dependency_level: 8
deps: [post-eleven-dimensional-cjs-supergravity-action, post-m2-cjs-superspace-constraints]
dependency_roles:
  post-eleven-dimensional-cjs-supergravity-action: physical-assumption
  post-m2-cjs-superspace-constraints: formulation-prerequisite
physical_scope: >-
  Classical local single Green–Schwarz membrane action on a compact oriented timelike three-dimensional worldvolume without boundary, using the coefficientwise smooth finite complex-Grassmann field model and a local CJS superchart covering the image; tension is an independent positive normalization, and no global potential patching or quantum definition is claimed.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "E. Bergshoeff, E. Sezgin, and P. K. Townsend, Supermembranes and Eleven-Dimensional Supergravity, Physics Letters B 189 (1987), equations (3)–(20)"
      url: https://pure.rug.nl/ws/portalfiles/portal/14453122/1987PhysLettBBergshoeff4.pdf
    - title: "E. Bergshoeff, E. Sezgin, and P. K. Townsend, Properties of the Eleven-Dimensional Supermembrane Theory, Annals of Physics 185 (1988), §2"
      url: https://pure.rug.nl/ws/files/14495060/1988AnnPhysBergshoeff.pdf
    - title: "Paul K. Townsend, Four Lectures on M-theory, §2"
      url: https://arxiv.org/pdf/hep-th/9612121v3
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $Y^{11}$ be the oriented Lorentzian eleven-manifold supplied by the CJS background, and let $\Sigma_3$ be a compact oriented smooth three-manifold without boundary. A bosonic configuration is a smooth embedding $X:\Sigma_3\to Y^{11}$ whose induced metric is Lorentzian and nondegenerate. In each oriented local worldvolume chart $\xi^i$, set
$$
g_{ij}=\partial_iX^m\partial_jX^nG_{mn}(X),\qquad S_{\mathrm{M2}}[X]=-T_{\mathrm{M2}}\int_{\Sigma_3}d^3\xi\,\sqrt{-\det g}+T_{\mathrm{M2}}\int_{\Sigma_3}X^*C_3.
$$

Here $G_{mn}$ is the CJS spacetime metric, $C_3$ is its three-form potential, and $T_{\mathrm{M2}}>0$ is an independent physical normalization with units of length$^{-3}$ in $\hbar=c=1$ units. Worldvolume chart coordinates $\xi^i$ are dimensionless; target coordinates are length-valued and metric components are dimensionless. Choose the potential normalization so $\int_{\Sigma_3}X^*C_3$ has units of length$^3$. This is a classical action definition, not a quantization or a claim of quantum membrane existence.

For the Green–Schwarz completion, fix a finite-dimensional complex Grassmann algebra $\mathcal A=\Lambda_\mathbb C(\epsilon_1,\ldots,\epsilon_N)$ with $N\ge64$. Its parity decomposition is $\mathcal A=\mathcal A_{\bar0}\oplus\mathcal A_{\bar1}$, and its body map $\operatorname{bod}:\mathcal A_{\bar0}\to\mathbb C$ sends every positive-degree monomial to zero. A smooth $\mathcal A$-valued field on an open set $U\subseteq\Sigma_3$ is an element of $C^\infty(U)\otimes_\mathbb R\mathcal A$; smoothness means coefficientwise smoothness. The target $Y^{11|32}$ has the local complexified CJS structure sheaf with real body of post-m2-cjs-superspace-constraints. A Green–Schwarz field map $Z$ is a parity-preserving complex-algebra morphism from its local superfunction sheaf to $C^\infty_{\Sigma_3}\otimes\mathcal A$, compatible with target coordinate changes, whose body is the real embedding $X$. The pullback of a smooth coefficient $f$ at an even coordinate $x=X+n$ with nilpotent $n$ is its finite Taylor series $\sum_\nu (\partial^\nu f)(X)n^\nu/\nu!$; odd coordinates are substituted algebraically. This specifies pullback without analytically continuing a smooth function to a complex open set. In target coordinates, the even coordinates take values in $C^\infty\otimes\mathcal A_{\bar0}$ and the fermionic coordinates $\theta^\alpha(\xi)$ take values in $C^\infty\otimes\mathcal A_{\bar1}$. “Superembedding” here means this field map with embedded body; no separate injectivity condition is imposed on nilpotent directions.

Assume the image of $Z$ lies in a target superchart on which the local super three-form $C_3$ is defined. Pullback and integration are taken coefficientwise on $\Sigma_3$. The pulled-back bosonic supervielbein is $E_i^a=Z^\sharp(E^a)(\partial_i)$, and the even induced metric is $g_{ij}=E_i^aE_j^b\eta_{ab}$. Its body $g^{(0)}_{ij}=\partial_iX^m\partial_jX^nG_{mn}(X)$ is Lorentzian and nondegenerate. Hence $-\det g$ has positive body; $\sqrt{-\det g}$ denotes the unique even square root with positive body, defined by the finite Taylor expansion in the nilpotent part. The scalar extension accommodates the factors $i$ in the superspace constraints and recovers the real bosonic action at the body, with all nilpotent fields set to zero. No reality condition on nilpotent coefficients is imposed. The resulting formal action is the even $\mathcal A_{\bar0}$-valued functional
$$
S_{\mathrm{M2}}[Z]= -T_{\mathrm{M2}}\int_{\Sigma_3}d^3\xi\,\sqrt{-\det g} +T_{\mathrm{M2}}\int_{\Sigma_3}Z^*C_3.
$$
The worldvolume orientation fixes the sign of the integral. The potential convention is $C_3=-6B_3$ relative to the source convention $B_3=\frac16E^A\wedge E^B\wedge E^C B_{CBA}$ in post-m2-cjs-superspace-constraints. Since $\Sigma_3$ is compact without boundary, an exact shift of the pulled-back Wess–Zumino three-form integrates to zero. No value of $T_{\mathrm{M2}}$ is inferred here, and no path-integral measure or global patching of $C_3$ is defined.

## Definition references

[[post-m2-cjs-superspace-constraints]]

[[post-eleven-dimensional-cjs-supergravity-action]]

[Bergshoeff, Sezgin, and Townsend, *Supermembranes and Eleven-Dimensional Supergravity*, eqs. (3)–(20)](https://pure.rug.nl/ws/portalfiles/portal/14453122/1987PhysLettBBergshoeff4.pdf)

[Bergshoeff, Sezgin, and Townsend, *Properties of the Eleven-Dimensional Supermembrane Theory*, §2](https://pure.rug.nl/ws/files/14495060/1988AnnPhysBergshoeff.pdf)

[Townsend, *Four Lectures on M-theory*, §2](https://arxiv.org/pdf/hep-th/9612121v3)

