---
id: thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp
aliases: [nrqm-controlled-dynamics-bounded-potential-weak-ucp]
kind: theorem
domain: mathematics
title: "Bounded-potential weak UCP"
status: draft
origin: pipeline
dependency_level: 6
deps: [thm-nrqm-controlled-dynamics-radial-carleman-estimate, def-sobolev-space-wkp-and-its-norm, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-radial-carleman-estimate: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Jerison and C. E. Kenig, Unique continuation and absence of positive eigenvalues for Schrodinger operators, Annals of Mathematics 121 (1985) 463-494 (weak unique continuation for bounded potentials via Carleman weights)"
      url: "https://doi.org/10.2307/1971319"
    - title: "H. Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Chapter 9 (local H^2 calculus and cut-off products)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\Omega\subseteq\mathbb R^3$ be open and connected, let
$B\in L^\infty_{\mathrm{loc}}(\Omega;\mathbb C)$, and let
$\psi\in H^2_{\mathrm{loc}}(\Omega)$ satisfy $\Delta\psi=B\psi$ in the
distributional sense on $\Omega$ ([[def-sobolev-space-wkp-and-its-norm]]). If
$\psi=0$ almost everywhere on some nonempty open subset of $\Omega$, then
$\psi=0$ almost everywhere on $\Omega$.

## Facts & Assumptions

**Given:** the connected open set $\Omega$, the potential $B\in L^\infty_{\mathrm{loc}}$, the solution $\psi\in H^2_{\mathrm{loc}}(\Omega)$ vanishing on a nonempty open set.

[F1] Products of $H^2_{\mathrm{loc}}$ functions with $C_c^\infty$ functions are $H^2$ with compact support, and $\Delta(\chi\psi)=\chi\Delta\psi+2\nabla\chi\cdot\nabla\psi+(\Delta\chi)\psi$ distributionally ([[def-sobolev-space-wkp-and-its-norm]], [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]).

[F2] The radial Carleman estimate: for every integer $s\ge1$, $\tau=s+1$ and every compactly supported $H^2$ function $u$ vanishing near the origin, $\|r^{-\tau}u\|_2\le\frac2s\|r^{-\tau+2}\Delta u\|_2$ ([[thm-nrqm-controlled-dynamics-radial-carleman-estimate]]).

[F3] If a function vanishes on a ball $B_{2R}(x_0)\Subset\Omega$ then any point of $\Omega$ can be reached from $x_0$ by a rectifiable path with compact image in $\Omega$, which is covered by finitely many balls of radius $R/2$ with successive centers in already-established zero regions ([[def-hilbert-space]], standard metric argument on a connected open set).

## Proof

1.1 [Local vanishing from the Carleman estimate] Let $x_0$ be a point with a neighborhood on which $\psi=0$, and let $R>0$ with $B_R(x_0)\Subset\Omega$ and $\psi=0$ on $B_R(x_0)$. Fix $\chi\in C_c^\infty(B_R(x_0))$ with $\chi=1$ on $B_{R/2}(x_0)$ and put $u:=\chi\psi$, $e:=2\nabla\chi\cdot\nabla\psi+(\Delta\chi)\psi$, $M:=\|B\|_{L^\infty(B_R(x_0))}$. Then $u$ is compactly supported in $B_R(x_0)\setminus\{x_0\}$ (it vanishes near $x_0$ because so does $\psi$), and $\Delta u=Bu+e$ with $e$ supported in the annulus $R/2\le r\le R$. Applying [F2] with $r=|x-x_0|$ and absorbing the $Bu$ term, which obeys the weighted bound $r^{-\tau+2}|Bu|\le MR^2r^{-\tau}|u|$ on $r\le R$, gives, for every integer $s\ge4MR^2$, $\|r^{-\tau}u\|_2\le\frac{4}{s}\|r^{-\tau+2}e\|_2$, where $\|r^{-\tau+2}e\|_2\le(R/2)^{-\tau+2}\|e\|_2$ because $e$ is supported in $r\ge R/2$. Since $|u|\le\rho^{\tau}r^{-\tau}|u|$ on $B_\rho(x_0)$, this yields $\|\psi\|_{L^2(B_\rho(x_0))}\le\frac{4}{s}(\rho/(R/2))^{\tau}(R/2)^2\|e\|_2$. For fixed $\rho<R/2$ the right side tends to $0$ as $s\to\infty$ through the integers, so $\psi=0$ on $B_{R/2}(x_0)$. [F1, F2, algebra]

2.1 [Propagation] By step 1.1, whenever $\psi$ vanishes on a ball of radius $2R$ around a point it vanishes on the concentric ball of radius $R/2$; hence, given any ball $B_{R'}(x_0)$ on which $\psi=0$, it vanishes on $B_{R'/4}(x_0)$, and this can be iterated along a chain of balls whose centers move by at most the smaller radius. A compact covering argument [F3] along any rectifiable path from the initial zero set to a given point of $\Omega$ therefore gives $\psi=0$ in a fixed neighborhood of that point; since the point was arbitrary, $\psi=0$ on $\Omega$. [step 1.1, F3, algebra] ∎
