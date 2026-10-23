---
id: cex-fd-collision-support
kind: counterexample
title: Restricted collision support need not force Maxwellians
status: published
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
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
generation:
  role: counterexample
---

## Statement refuted

Let $v,w,v\prime,w\prime\in\mathbb R^3$ be velocities measured in metres per second, let $dv$ be three-dimensional Lebesgue measure, and set $Q_{\rm el}:=\{(v,w,v\prime,w\prime):v+w=v\prime+w\prime,\ |v|^2+|w|^2=|v\prime|^2+|w\prime|^2\}$. Let $\nu$ be a nonnegative countably additive measure on $Q_{\rm el}$ invariant under exchange of either velocity pair and interchange of incoming and outgoing pairs. For a positive finite-valued Lebesgue-measurable velocity density $g\in L^1(\mathbb R^3)$ whose four coordinate evaluations on $Q_{\rm el}$ are $\nu$-measurable, set $A_g:=g(v)g(w)$ and $B_g:=g(v\prime)g(w\prime)$, and define the possibly infinite collision entropy production by $\mathscr P_\nu(g):=\frac14\int_{Q_{\rm el}}(A_g-B_g)\log(A_g/B_g)\,d\nu$. A Maxwellian means a function $C\exp(-|v-U|^2/(2\theta))$ for a density scale $C>0$ with the units of $g$, a velocity $U\in\mathbb R^3$, and squared speed $\theta>0$. Full support means every nonempty relatively open subset of $Q_{\rm el}$ has positive $\nu$-measure. The proposed implication that $\mathscr P_\nu(g)=0$ forces $g$ to be Maxwellian for every such symmetric $\nu$ and positive integrable $g$ is false without a full-support assumption on $\nu$.

## Statement references

[Tong, §2.3, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Golse, §3.2, full chapter](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

## Facts & Assumptions

**Given:** The elastic collision set and weak collision identity from the collision-measure definition.

[F1] [[def-fd-elastic-collision-measure]]: A symmetric nonnegative measure may have restricted support; the weak identity is required only on its declared test subspace.

[A1] Let $\nu$ be the unit Dirac measure at $(0,0,0,0)\in Q_{\rm el}$, let $\mathcal D_\nu$ be the positive finite-valued Borel-measurable velocity densities, set $Q_\nu(g)=0$ for every $g\in\mathcal D_\nu$, and for each $g\in\mathcal D_\nu$ let $\mathcal S_g$ be the complex linear span of $C_c^\infty(\mathbb R^3;\mathbb C)$ together with $1,v_1,v_2,v_3,|v|^2,\log(g/f_*)$, where $f_*>0$ is the reference density in [A2].

[A2] Let $v_*=1\,\mathrm{m\,s^{-1}}$, fix a density scale $f_*>0$ with the units of $f$, and use $f_{\rm ref}=f_*$ in the logarithmic test. Set
$$f(v):=f_*e^{-(|v|/v_*)^2}\left(2+\frac12\sin(v_1/v_*)\right).$$

## Counterexample

1.1 The origin quadruple is elastic and is fixed by particle exchange and incoming/outgoing interchange, so its Dirac measure is symmetric and locally finite. Every positive finite-valued Borel-measurable density has Borel-measurable collision evaluations on $Q_{\rm el}$. At the only point in the support, $v=w=v'=w'=0$, hence $A=B$ and $\delta\varphi=0$ for every compact smooth test and every polynomial/logarithmic test in $\mathcal S_f$. The collision integral is absolutely zero; the left side is zero because $Q_\nu(f)=0$. Thus the declared collision model satisfies the weak identity on the test subspace required by the elastic-collision definition, and its entropy production is exactly zero. [A1, F1, algebra]

2.1 The density in [A2] is positive, smooth, and integrable with every polynomial velocity weight because its oscillatory factor is bounded above and below by positive constants and the Gaussian factor decays at infinity. Its logarithm has second derivative in $v_1$ equal to the constant $-2/v_*^2$ plus the second derivative of $\log(2+\tfrac12\sin s)$ divided by $v_*^2$, where $s=v_1/v_*$. The latter second derivative is $-1/16$ at $s=0$ and $-1/5$ at $s=\pi/2$. Therefore the Hessian of $\log f$ is not constant. The logarithm of any Maxwellian has constant Hessian, so this $f$ is not Maxwellian despite zero production. [A2, algebra] ∎
