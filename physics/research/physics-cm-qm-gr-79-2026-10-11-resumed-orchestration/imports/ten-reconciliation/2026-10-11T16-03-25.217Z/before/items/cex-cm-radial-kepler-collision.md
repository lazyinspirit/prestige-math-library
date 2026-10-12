---
id: cex-cm-radial-kepler-collision
kind: counterexample
title: "A zero-angular-momentum Kepler trajectory reaches the force centre in finite time, refuting unconditional global existence"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 7
deps: [def-cm-central-force-trajectory, def-interval, def-derivative, def-limit-point-r, thm-algebra-of-derivatives, thm-real-power-continuity-and-derivatives, thm-chain-rule, thm-mean-value-inequality, def-ck-euclidean-maps-and-diffeomorphisms, thm-cm-kepler-conic-and-eccentricity, thm-cm-kepler-orbit-period, thm-cm-scattering-turning-point-and-global-branches]
dependency_roles:
  def-cm-central-force-trajectory: mathematical-premise
  def-interval: mathematical-premise
  def-derivative: mathematical-premise
  def-limit-point-r: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-mean-value-inequality: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-cm-kepler-conic-and-eccentricity: mathematical-premise
  thm-cm-kepler-orbit-period: mathematical-premise
  thm-cm-scattering-turning-point-and-global-branches: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §2.5.4, printed pp. 32-33: the angular-momentum barrier and the separation of the radial and angular problems"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Statement refuted

**False statement.** *Every solution of the attractive inverse-square equation
$\mu\,r''=-\kappa\,r/|r|^3$ ($\mu,\kappa>0$) on its maximal interval of
definition is defined for all real times and satisfies $|r(t)|\ge c$ for some
$c>0$.*

The conic and period results
[[thm-cm-kepler-conic-and-eccentricity]] and
[[thm-cm-kepler-orbit-period]] therefore do not extend to the radial case
$j=0$; their hypothesis $j\ne0$ is essential. The witness below also shows why
the finite-range scattering theorem
[[thm-cm-scattering-turning-point-and-global-branches]] assumes a simple
turning point rather than mere boundedness from below.

## Facts & Assumptions

**Given:** Parameters $\mu>0$, $\kappa>0$, the constant $A:=\bigl(9\kappa/(2\mu)\bigr)^{1/3}>0$, and the curve $r:(-\infty,1)\to\mathbb R^3$, $r(t):=A(1-t)^{2/3}e_1$, where $e_1$ is a unit vector.

[L1] The central-force equation in the radial case: for a curve $r=\rho\,e_1$ with $\rho>0$ of class $C^2$, the equation $\mu r''=-\kappa r/|r|^3$ is equivalent to $\mu\rho''=-\kappa/\rho^2$, and the angular momentum $\mu r\times r'$ vanishes identically ([[def-cm-central-force-trajectory]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L2] Power derivatives: for $t<1$, $\frac{\mathrm d}{\mathrm dt}(1-t)^{2/3}=-\frac23(1-t)^{-1/3}$ and $\frac{\mathrm d}{\mathrm dt}\bigl(-\frac23(1-t)^{-1/3}\bigr)=-\frac29(1-t)^{-4/3}$, by the real-power derivative and the chain rule ([[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-limit-point-r]], [[def-interval]]).

[L3] For $t<1$, $A^3(1-t)^2=\frac{9\kappa}{2\mu}(1-t)^2$ and, equivalently, $\frac{2\mu A}{9}=\frac{\kappa}{A^2}$: this is the defining relation of $A$, and it is an equality of positive real numbers ([[thm-mean-value-inequality]], [[def-interval]]).

## Counterexample

**Proof technique:** direct.

1.1 The curve solves the equation: by [L2], $r''(t)=-\frac{2A}{9}(1-t)^{-4/3}e_1$, so $\mu r''=-\frac{2\mu A}{9}(1-t)^{-4/3}e_1$, while $-\kappa r/|r|^3=-\kappa\rho^{-2}e_1=-\frac{\kappa}{A^2}(1-t)^{-4/3}e_1$ because $\rho(t)=A(1-t)^{2/3}$. By [L3] the two coefficients agree, so $\mu r''=-\kappa r/|r|^3$ for every $t<1$; and the angular momentum vanishes identically. [given, L1, L2, L3, algebra]

2.1 Failure of global existence: $\rho(t)=A(1-t)^{2/3}\to0$ as $t\uparrow1$, and $\rho$ is strictly positive and $C^2$ on $(-\infty,1)$. There is no solution of $\mu r''=-\kappa r/|r|^3$ on an interval containing $1$ whose restriction to $(-\infty,1)$ equals $r$: such a solution would be continuous at $1$ with $r(1)=\lim_{t\uparrow1}r(t)=0$, and the equation is undefined at the origin (the right-hand side contains $r/|r|^3$). Hence the maximal interval of $r$ is $(-\infty,1)$, not $\mathbb R$. [given, step 1.1, L1, algebra]

3.1 Failure of the lower bound and conclusion: $\inf_{t<1}\rho(t)=0$, so there is no $c>0$ with $|r(t)|\ge c$ on the domain. Both clauses of the refuted statement fail, and the claim that every attractive inverse-square solution is a global, non-colliding conic is false. [step 1.1, step 2.1, algebra] ∎
