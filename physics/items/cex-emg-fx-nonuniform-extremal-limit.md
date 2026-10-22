---
id: cex-emg-fx-nonuniform-extremal-limit
kind: counterexample
title: Subextremal RN surface gravity has no uniform positive lower bound
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-emg-xs-rn-data
  - prop-emg-xs-rn-horizon-data
  - def-emg-explicit-power-regimes
  - def-complete-ordered-real-field
  - cor-archimedean-reciprocal
dependency_roles:
  def-emg-xs-rn-data: mathematical-premise
  prop-emg-xs-rn-horizon-data: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  def-complete-ordered-real-field: mathematical-premise
  cor-archimedean-reciprocal: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Max Weissenbacher, Decay and non-decay for the massless Vlasov equation on subextremal and extremal Reissner–Nordström black holes, Arch. Rational Mech. Anal. 248, 118 (2024)"
      url: https://arxiv.org/pdf/2303.15338
      locator: "arXiv:2303.15338v2, Section 1.3.5, equation (35), for the surface-gravity definition; Section 2.1, equation (45), for the surface-gravity formula and subextremal/extremal distinction, with equations (47)–(48) listing the Schwarzschild and extremal RN special cases. The exact root formula and uniform-lower-bound counterexample are proved here."
physical_scope: null
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement refuted

Fix a mass length $m>0$. For each length parameter $q_e\in\mathbb R$ with $0<q_e^2<m^2$, take the electric RN family with mass parameter $M=m$ and magnetic parameter $q_m=0$, and define $Q^2:=q_e^2$, $r_\pm:=m\pm\sqrt{m^2-Q^2}$, and $\kappa_+(q_e):=(r_+-r_-)/(2r_+^2)$. The false claim is that there exists a constant $c>0$, with units of inverse length, such that $\kappa_+(q_e)\ge c$ for every such $q_e$.

## Statement references

[[prop-emg-xs-rn-horizon-data]]

## Facts & Assumptions

**Given:** A fixed $m>0$ and the subextremal electric RN family with $q_m=0$ and $0<q_e^2<m^2$.

[F1] [[def-emg-xs-rn-data]]: $Q^2=q_e^2+q_m^2$ and the static RN metric uses $f(r)=1-2m/r+Q^2/r^2$.

[F2] [[prop-emg-xs-rn-horizon-data]]: when $m>0$ and $Q^2>0$, the outer surface gravity is $\kappa_+=(r_+-r_-)/(2r_+^2)$ with $r_\pm=m\pm\sqrt{m^2-Q^2}$.

[F3] [[def-emg-explicit-power-regimes]]: for $a>0$, $\sqrt a$ is the unique positive real solution of $s^2=a$.

[F4] [[def-complete-ordered-real-field]]: $\mathbb R$ is a complete ordered field.

[F5] [[cor-archimedean-reciprocal]]: in any complete ordered field, for every $\epsilon>0$ there is a natural $N\ge1$ with $1/N<\epsilon$.

[A1] The fixed mass parameter satisfies $m>0$; all mass and charge parameters have length units and $\kappa_+$ has inverse-length units.

## Counterexample

1.1 For each integer $n\ge2$, choose $q_{e,n}=m\sqrt{1-n^{-2}}$ and $q_{m,n}=0$. By [F3], $Q_n^2=q_{e,n}^2=m^2(1-n^{-2})$, so $0<Q_n^2<m^2$ and $\sqrt{m^2-Q_n^2}=m/n$. Applying [F2] gives $r_{+,n}=m(1+1/n)$, $r_{-,n}=m(1-1/n)$, and
$$\kappa_{+,n}=\frac{r_{+,n}-r_{-,n}}{2r_{+,n}^2}=\frac{n}{m(n+1)^2},\qquad 0<\kappa_{+,n}<\frac1{mn}.$$
[given, A1, F1, F2, F3, algebra]

2.1 Let $c>0$ be any proposed inverse-length lower bound. Since $mc>0$, [F4]–[F5] allow a natural $N\ge1$ with $1/N<mc$. For every integer $n\ge2N$, $1/n\le1/(2N)<mc$, so step 1.1 gives $0<\kappa_{+,n}<1/(mn)<c$. Thus the sequence $\kappa_{+,n}$ tends to zero through subextremal RN data, contradicting any positive uniform lower bound. Every member of the sequence remains subextremal; only its limit reaches $Q^2=m^2$. [given, A1, F4, F5, step 1.1, algebra] ∎

## Remarks

The counterexample concerns the unscaled outer surface gravity as the charge approaches extremality at fixed mass. It makes no claim about the scaled throat coordinates or about uniform estimates for waves.
