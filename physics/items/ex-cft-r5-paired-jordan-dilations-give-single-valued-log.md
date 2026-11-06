---
id: ex-cft-r5-paired-jordan-dilations-give-single-valued-log
kind: example
title: "Paired rank-two Jordan dilations give a single-valued logarithmic coefficient"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
deps:
  - def-cft-r5-logarithmic-full-cft-data
  - lem-cft-r5-joint-jordan-dilation-log-polynomial
dependency_roles:
  def-cft-r5-logarithmic-full-cft-data: mathematical-premise
  lem-cft-r5-joint-jordan-dilation-log-polynomial: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Rongvoram Nivesvivat and Sylvain Ribault, Logarithmic CFT at Generic Central Charge: from Liouville Theory to the Q-state Potts Model, arXiv:2007.04190v1"
      url: https://arxiv.org/pdf/2007.04190v1
      locator: "§§2.1 and 3.1, on Jordan dilation and logarithmic coefficients; this local finite-dimensional example supplies no vertex-algebra or full-CFT construction."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Let $E_L=E_R=\mathbb C e_0\oplus\mathbb C e_1$ and $N e_0=0$, $N e_1=e_0$. On $\mathcal H_{\rm toy}=E_L\otimes_{\mathbb C}E_R$, define commuting nilpotent dilation parts

$$N_L=N\otimes I_{E_R},\qquad N_R=I_{E_L}\otimes N,\qquad L_0=N_L,\qquad \bar L_0=N_R.$$

The only declared joint generalized weight is $(0,0)$. For $z\in\mathbb C^\times$, choose a local logarithm $\ell(z)$ and its conjugate $\overline{\ell(z)}$ on the Euclidean slice, and define the finite-dimensional dilation operator

$$D(z,\bar z)=\exp(\ell(z)L_0)\exp(\overline{\ell(z)}\bar L_0).$$

Set $v=e_1\otimes e_0+e_0\otimes e_1$ and let $\lambda\in\mathcal H_{\rm toy}^*$ be the coordinate functional with $\lambda(e_0\otimes e_0)=1$ and value zero on the other three tensor basis vectors. The pair $(D,v,\lambda)$ is an algebraic Jordan-dilation toy that illustrates the logarithmic-sector mechanism in the earlier definition; it is not a full local CFT package and supplies no local fields, Virasoro modes beyond $L_0,\bar L_0$, OPE, or crossing data.

The two nilpotent actions are shown on the relevant vectors:

```tikzcd
e_1\otimes e_0 \arrow[r,"N_L"] & e_0\otimes e_0 \\
e_0\otimes e_1 \arrow[r,"N_R"] & e_0\otimes e_0
```

Each arrow is the action of the indicated left or right nilpotent dilation; the diagram depicts the algebraic data only.

## Facts & Assumptions

**Given:** The vector spaces $E_L,E_R$, the map $N$, the tensor-product operators, the branch $\ell$, the vector $v$, and the functional $\lambda$ above.

[F1] [[def-cft-r5-logarithmic-full-cft-data]] defines a logarithmic sector by a nontrivial left or right nilpotent part of $L_0$ or $\bar L_0$ on a joint generalized-weight vector. It distinguishes this sector property from an actual logarithmic correlator.

[F2] [[lem-cft-r5-joint-jordan-dilation-log-polynomial]] gives the finite polynomial formula for commuting nilpotent dilation parts and the branch-continuation rule.

## Verification

1.1 The tensor-factor actions commute. Each squares to zero because $N^2=0$, and both are nonzero since $N_L(e_1\otimes e_0)=e_0\otimes e_0$ and $N_R(e_0\otimes e_1)=e_0\otimes e_0$. In this toy representation, $v$ satisfies the algebraic generalized-eigenvector relations $L_0^2v=\bar L_0^2v=0$ with $L_0v=N_Lv$ and $\bar L_0v=N_Rv$; these are exactly the finite-dimensional nilpotence hypotheses of the dilation lemma with $h=\bar h=0$ and $r=s=2$. This does not make $v$ a vector in the domain of a full local CFT package. [given, F2, algebra]

2.1 Since $N_LN_Rv=0$, the lemma's finite expansion reduces to
$D(z,\bar z)v=v+(\ell(z)+\overline{\ell(z)})e_0\otimes e_0$.
Applying $\lambda$ gives $\lambda(Dv)=\ell(z)+\overline{\ell(z)}=2\ln|z|$, a nonconstant logarithmic coefficient on $\mathbb C^\times$. This is a matrix coefficient of the toy dilation, not a correlator supplied by a field theory. [given, F2, step 1.1, algebra]

3.1 Continuing once around $z=0$ changes $\ell$ by $2\pi i$ and its conjugate by $-2\pi i$, leaving $\lambda(Dv)$ unchanged. The other coordinate functional that extracts the coefficient of $e_1\otimes e_0$ instead gives the constant $1$, so the same toy representation has matrix coefficients with and without logarithms. [given, F2, step 2.1, algebra] ∎
