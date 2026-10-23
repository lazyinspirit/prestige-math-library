---
id: def-fd-elastic-collision-measure
kind: definition
title: Elastic collision measure and weak collision operator
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-kinetic-density
  - def-tdmath-elastic-collision-kernel
dependency_roles:
  def-fd-kinetic-density: mathematical-premise
  def-tdmath-elastic-collision-kernel: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2, §§2.2–2.3"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §3.1"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
verification:
  precheck: pending
---

## Definition

Each velocity is in $\mathbb R^3$ measured in metres per second, $dv=\lambda_3$ is three-dimensional Lebesgue measure, and $v_*=1\,\mathrm{m\,s^{-1}}$ is the fixed reference speed. The elastic collision set is
$$Q_{\rm el}:=\{(v,w,v',w')\in\mathbb R^{12}:v+w=v'+w',\ |v|^2+|w|^2=|v'|^2+|w'|^2\},$$
with its relative Borel sigma-algebra. A collision measure is a nonnegative countably additive measure $\nu$ on this set, invariant under particle exchange in either pair and under interchange of incoming and outgoing pairs. Symmetry is a model hypothesis; it does not follow merely from the conservation equations.

The collision model declares an input domain $\mathcal D_\nu$ contained in the finite-valued, positive, Lebesgue-measurable functions $f:\mathbb R^3\to(0,\infty)$ for which each of the four coordinate evaluations $f(v),f(w),f(v'),f(w')$ on $Q_{\rm el}$ is $\nu$-measurable. For each $f\in\mathcal D_\nu$, it supplies a chosen measurable locally integrable representative $Q_\nu(f)\in L^1_{\rm loc}(\mathbb R^3,dv)$. For finite-valued complex Lebesgue-measurable $\varphi$, set
$$A:=f(v)f(w),\qquad B:=f(v')f(w'),\qquad \delta\varphi:=\varphi(v)+\varphi(w)-\varphi(v')-\varphi(w').$$
Let $\mathcal T_f$ be the class of those $\varphi$ for which $\delta\varphi$ is $\nu$-measurable and both integrals
$$\int_{\mathbb R^3}|\varphi(v)Q_\nu(f)(v)|\,dv,\qquad \int_{Q_{\rm el}}|(B-A)\delta\varphi|\,d\nu$$
are finite. For each $f\in\mathcal D_\nu$, the model declares a complex linear subspace $\mathcal S_f\subseteq\mathcal T_f$ containing every compactly supported smooth complex-valued velocity test $\varphi\in C_c^\infty(\mathbb R^3;\mathbb C)$. Require the weak collision identity
$$\int_{\mathbb R^3}\varphi(v)Q_\nu(f)(v)\,dv =\frac14\int_{Q_{\rm el}}(B-A)\delta\varphi\,d\nu$$
for every $\varphi\in\mathcal S_f$. For the moment-balance results below, additionally require $1$, $v_1,v_2,v_3$, and $|v|^2$ to lie in $\mathcal S_f$; for the entropy result additionally require $\log(f/f_{\rm ref})\in\mathcal S_f$, where $f_{\rm ref}>0$ is a constant reference density with the same units as $f$. Each required membership includes the stated measurability and absolute-convergence conditions. The collision measure and weak identity are adopted mathematical model data; they do not assert a microscopic derivation or that every density and measure admit such an operator. In a physical application, normalize the units of $\nu$ so $Q_\nu(f)$ has units of $f$ per second; no specific cross-section or measured collision rate is fixed here.

## Definition references

[Current published elastic collision-kernel definition](../items/def-tdmath-elastic-collision-kernel.md)

[Tong, §§2.2–2.3, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Golse, §3.1, full chapter](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)
