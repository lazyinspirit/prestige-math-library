---
id: cex-fd-collision-support
kind: counterexample
title: Restricted collision support need not force Maxwellians
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-elastic-collision-measure
dependency_roles:
  def-fd-elastic-collision-measure: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2, §2.3, pp. 32–35"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits,
        §3.2, pp. 23–25"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
verification:
  precheck: pending
generation:
  role: counterexample
---

## Statement refuted

The claim that zero collision entropy production for a symmetric elastic collision measure forces every positive integrable velocity density to be Maxwellian is false without a full-support assumption.

## Statement references

[Tong, §2.3, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Golse, §3.2, full chapter](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

## Facts & Assumptions

**Given:** The elastic collision set and weak collision identity from the collision-measure definition.

[F1] [[def-fd-elastic-collision-measure]]: A symmetric nonnegative measure may have restricted support; the weak identity is required only on its declared test subspace.

[A1] Let $\nu$ be the unit Dirac measure at $(0,0,0,0)\in Q_{\rm el}$, let $Q_\nu(f)=0$, and for each positive finite-valued $f$ let $\mathcal S_f$ be the span of $1,v_1,v_2,v_3,|v|^2,\log(f/f_{\rm ref})$.

[A2] Let $v_*=1\,\mathrm{m\,s^{-1}}$, fix a density scale $f_*>0$ with the units of $f$, and set
$$f(v):=f_*e^{-(|v|/v_*)^2}\left(2+\frac12\sin(v_1/v_*)\right).$$

## Counterexample

1.1 The origin quadruple is elastic and is fixed by particle exchange and incoming/outgoing interchange, so its Dirac measure is symmetric. At the only point in the support, $v=w=v'=w'=0$, hence $A=B$. Thus the right side of the weak collision identity is zero for every $\varphi\in\mathcal S_f$, and its left side is zero because $Q_\nu(f)=0$. The collision model is admissible on these tests and its entropy production is exactly zero. [A1, F1, algebra]

2.1 The density in [A2] is positive, smooth, and integrable with every polynomial velocity weight because its oscillatory factor is bounded above and below by positive constants and the Gaussian factor decays at infinity. Its logarithm has second derivative in $v_1$ equal to the constant $-2/v_*^2$ plus the second derivative of $\log(2+\tfrac12\sin s)$ divided by $v_*^2$, where $s=v_1/v_*$. The latter second derivative is $-1/16$ at $s=0$ and $-1/5$ at $s=\pi/2$. Therefore the Hessian of $\log f$ is not constant. The logarithm of any Maxwellian has constant Hessian, so this $f$ is not Maxwellian despite zero production. [A2, algebra] ∎
