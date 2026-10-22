---
id: ex-emg-fx-extremal-puncture-end
kind: example
title: Extremal cylindrical puncture end
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps:
  - prop-emg-fx-rn-isotropic-seed
dependency_roles:
  prop-emg-fx-rn-isotropic-seed: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. I. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009)"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "Section III.B, equations (3.15)-(3.16), gives the one-hole RN seed; the end and proper-distance statements here are proved directly."
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012), author preprint arXiv:gr-qc/0703035v1"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Section 6.2.3, equations (6.22)-(6.24), supplies the isotropic spatial metric convention; the limiting cylinder is computed directly here."
verification:
  precheck: pass
---

## Example

Let $m=|q|>0$ in the one-hole Reissner–Nordström (RN) conformal-data family; this equality defines its extremal parameter case. Use the punctured spatial manifold $\Sigma=(0,\infty)\times S^2$. Then $\psi^2=1+m/r$ and the centered sphere $S_r$ has areal radius $\rho(r)=r\psi^2=r+m$. No centered coordinate sphere is minimal. The proper radial coordinate

$$s(r):=r+m\log(r/m)$$

has range $\mathbb R$ and gives

$$h=ds^2+(r(s)+m)^2\gamma_{S^2}.$$

As $r\downarrow0$, $s\to-\infty$ and $r(s)+m\to m$, so this end is asymptotic to the product cylinder $\mathbb R\times S^2$ with round-sphere radius $m$. The puncture is omitted; no point-source interpretation or global event-horizon claim is part of this example.

## Example references

[[prop-emg-fx-rn-isotropic-seed]]

## Facts & Assumptions

**Given:** $m=|q|>0$, the isotropic conformal data on $(0,\infty)\times S^2$, and the formulas in the Statement.

[F1] [[prop-emg-fx-rn-isotropic-seed]]: $\psi^2=(1+m/(2r))^2-q^2/(4r^2)$, $K=0$, and $R_{\rm areal}=r\psi^2$; the puncture $r=0$ is excluded from the smooth data manifold.

## Verification

1.1 Substituting $q^2=m^2$ into the conformal factor gives $\psi^2=(1+m/(2r))^2-m^2/(4r^2)=1+m/r$, which is positive for every $r>0$. Therefore $\rho=r\psi^2=r+m$ and $\rho'(r)=1$. [given, F1, algebra]

2.1 The radial line element of $h=\psi^4(dr^2+r^2\gamma_{S^2})$ is $\psi^2dr=(1+m/r)dr$. Since $s'(r)=1+m/r=\psi^2>0$, $s$ is a proper radial coordinate; moreover $s\to-\infty$ as $r\downarrow0$ and $s\to+\infty$ as $r\to\infty$, so its range is $\mathbb R$. [given, step 1.1, algebra]

3.1 Replacing $\psi^4dr^2$ by $ds^2$ and using $\rho=r+m$ gives $h=ds^2+\rho(s)^2\gamma_{S^2}$. As $s\to-\infty$, $r(s)\to0$, so $\rho(s)^2\to m^2$ and the spherical coefficient converges to that of the product cylinder of radius $m$. [step 1.1, step 2.1, algebra]

4.1 The unit normal to $S_r$ is $\nu=\psi^{-2}\partial_r$. Its mean curvature is $H=\operatorname{div}_h\nu=2\rho'/(\psi^2\rho)=2r/(r+m)^2>0$ for every $r>0$. Thus no centered coordinate sphere is minimal, while the infinite negative range of $s$ proves that the puncture is an infinite-distance cylindrical end. [step 1.1, step 2.1, algebra] ∎

