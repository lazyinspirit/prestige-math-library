---
id: post-csm-isobaric-preparation
kind: postulate
title: "Isothermal-isobaric joint preparation"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - post-csm-counting-and-physical-observables
  - def-csm-statistical-state-observable
  - def-td-si-quantities
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
dependency_roles:
  post-csm-counting-and-physical-observables: formulation-prerequisite
  def-csm-statistical-state-observable: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: formulation-prerequisite
physical_scope: "Fixed finite particle number with a classical shape-scaled domain and a declared uniform dV/V0 volume prior; alternative piston measures define different preparations."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "University of Concordia, CHEM 630P Statistical Mechanics Part 1, complete lecture notes, NPT ensemble section"
      url: "https://mypage.concordia.ca/faculty/glamoure/pdfs/statmech_part1.pdf"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.7"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Postulate

Fix integers $N,d\ge1$, a prescribed temperature control $T>0$ in kelvins,
$\beta=(k_BT)^{-1}$ as in [[def-td-si-quantities]], and external pressure
$P_{\rm ext}>0$ in J m$^{-d}$, a fixed dimensionless shape
$Q_1\subseteq\mathbb R^d$ that is Lebesgue measurable, meaning
$Q_1\in\mathcal L(\mathbb R^d)$, and has Lebesgue measure
$|Q_1|_d:=\lambda_d(Q_1)=1$
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]), and
a positive volume reference $V_0$ in m$^d$. Write
$y=(y_1,\ldots,y_N)\in Q_1^N$, take $dy$ to be product Lebesgue measure on
$Q_1^N$, take $dp$ to be Lebesgue measure on $\mathbb R^{dN}$, and take
$dV$ to be Lebesgue measure on $(0,\infty)$. Identify
the position domain at volume $V>0$ by $q_i=V^{1/d}y_i$. The Jacobian is
$V^N$, which is the full position-volume factor because $|Q_1|_d=1$. Adopt
the joint reference
$$d\nu_N=\frac{dV}{V_0}\,\frac{V^N\,dy\,dp}{N!a_0^{dN}},$$
where $a_0>0$ is the action reference in J s. The factors $dV/V_0$ and
$V^Ndy\,dp/a_0^{dN}$ are dimensionless. Let
$$H_N:(0,\infty)\times Q_1^N\times\mathbb R^{dN}\to\mathbb R\cup\{+\infty\}$$
be a product-measurable energy-valued Hamiltonian (in joules) for this
reference, with $+\infty$ marking forbidden states. Require
$H_N(V,g\cdot(y,p))=H_N(V,y,p)$ for $\nu_N$-almost every $(V,y,p)$
and every within-species permutation $g$, acting by simultaneous
permutation of the position and momentum particle coordinates. For the
displayed single-species factor this group is $S_N$; for several species it
is $\prod_a S_{N_a}$ as in [[post-csm-counting-and-physical-observables]].
The volume coordinate is unchanged by this action, so the Gibbs density
admits an invariant representative on the labelled lift. Set
$e^{-\beta(+\infty+P_{\rm ext}V)}:=0$. The product reference
$\nu_N$ is sigma-finite: $Q_1^N$ has finite measure, while $(0,\infty)$ and
$\mathbb R^{dN}$ have countable finite-measure exhaustions; the factor $V^N$
is finite on each set where $V$ is bounded. Assume
$$0<\Delta_N:=\int_{(0,\infty)\times Q_1^N\times\mathbb R^{dN}} e^{-\beta(H_N(V,y,p)+P_{\rm ext}V)}\,d\nu_N<\infty.$$
Adopt the probability density
$$\rho_N(V,y,p):=\Delta_N^{-1}e^{-\beta(H_N(V,y,p)+P_{\rm ext}V)}$$
relative to $\nu_N$. The displayed
$N!$ is the single-species convention; for several indistinguishable species
with fixed counts $N_a$, replace it by $\prod_aN_a!$ as in
[[post-csm-counting-and-physical-observables]]. The factor $dV/V_0$ is an
explicit volume-reference convention; a different piston state measure gives
a different preparation. This postulate includes no piston kinetic energy
unless it is explicitly included in the Hamiltonian, and does not claim a
smooth wall dynamics.
