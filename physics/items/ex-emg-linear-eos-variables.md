---
id: ex-emg-linear-eos-variables
kind: example
title: "Linear barotropic equation of state and its enthalpy coordinates"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-emg-strict-charged-barotropic-system
  - lem-emg-charged-fluid-positive-symmetric-reduction
dependency_roles:
  def-emg-strict-charged-barotropic-system: mathematical-premise
  lem-emg-charged-fluid-positive-symmetric-reduction: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Yvonne Choquet-Bruhat, Introduction to General Relativity, Black Holes, and Cosmology (Oxford, 2015), Chapter IX: Relativistic fluids"
      url: "https://inspirehep.net/files/b6b9e25e70e9a80e6aa13c2611ae4a76"
      locator: "Full book PDF inspected; Chapter IX, §§IX.7.1–IX.7.2 and IX.9.1, on strict sound speed, fluid hyperbolicity, and barotropic enthalpy. The explicit linear-EOS formulas below are derived directly."
    - title: "Daniela Pugliese and Juan A. Valiente Kroon, On the evolution equations for ideal magnetohydrodynamics in curved spacetime, arXiv:1112.1525v1 (2011)"
      url: "https://arxiv.org/pdf/1112.1525"
      locator: "Full paper inspected; §§3–4 and Appendix A compare charged-fluid/barotropic conventions. The example's integral evaluations are direct."
verification:
  precheck: pending
---

## Example

Fix a dimensionless constant $w$ with $0<w<1$, take $J=(0,\infty)$, choose a reference energy density $\epsilon_*>0$, and set

$$p(\epsilon)=w\epsilon.$$

Choose $N_*>0$ with units $\mathrm{m}^{-3}$ as in [[def-emg-strict-charged-barotropic-system]]. Then $\epsilon+p=(1+w)\epsilon>0$ and $p'=w\in(0,1)$ on $J$, so this is an instance of the strict EOS. The EOS-defined number-density and enthalpy coordinates are

$$N(\epsilon)=N_*\left(\frac{\epsilon}{\epsilon_*}\right)^{1/(1+w)},\qquad r(\epsilon)=\frac{\sqrt w}{1+w}\log\left(\frac{\epsilon}{\epsilon_*}\right).$$

Here the ratios and $r$ are dimensionless. The map $r:J\to\mathbb R$ is strictly increasing and onto; in these variables $N=N_*e^{r/\sqrt w}$. These are mathematical EOS variables, not a microscopic derivation of particle number.

## Facts & Assumptions

**Given:** $0<w<1$, $\epsilon>0$, $\epsilon_*>0$, $N_*>0$, and the EOS-defined functions of [[def-emg-strict-charged-barotropic-system]] and [[lem-emg-charged-fluid-positive-symmetric-reduction]].

[F1] [[def-emg-strict-charged-barotropic-system]]: $N(\epsilon)=N_*\exp(\int_{\epsilon_*}^{\epsilon}(z+p(z))^{-1}\,dz)$, with $N_*>0$.

[F2] [[lem-emg-charged-fluid-positive-symmetric-reduction]]: $r(\epsilon)=\int_{\epsilon_*}^{\epsilon}\sqrt{p'(z)}/(z+p(z))\,dz$ and $r'=\sqrt{p'}/(\epsilon+p)>0$ for the strict EOS.

## Proof

**Proof technique:** direct integral evaluation and differentiation.

1.1 The derivative of $p(\epsilon)=w\epsilon$ is $p'=w$. Since $w>0$ and $\epsilon>0$, $p'=w\in(0,1)$ and $\epsilon+p=(1+w)\epsilon>0$ on $J$. Thus the strict EOS hypotheses hold. [given, algebra]

1.2 For every $z>0$, $(z+p(z))^{-1}=((1+w)z)^{-1}$. Substituting this in [F1] and integrating gives $N=N_*\exp((1+w)^{-1}\log(\epsilon/\epsilon_*))=N_*(\epsilon/\epsilon_*)^{1/(1+w)}$. The logarithm is dimensionless because both arguments are energy densities. [F1, given, algebra]

2.1 Since $\sqrt{p'(z)}=\sqrt w$, [F2] gives $r=(\sqrt w/(1+w))\log(\epsilon/\epsilon_*)$. Differentiating yields $r'=\sqrt w/((1+w)\epsilon)>0$, so $r$ is strictly increasing. As $\epsilon\downarrow0$ its logarithm tends to $-\infty$, and as $\epsilon\to\infty$ it tends to $+\infty$; the positive prefactor preserves these limits, so its range is all of $\mathbb R$. Solving the displayed formula gives $\epsilon/\epsilon_*=\exp((1+w)r/\sqrt w)$; inserting this in step 1.2 yields $N=N_*e^{r/\sqrt w}$. [F2, given, step 1.2, algebra] ∎