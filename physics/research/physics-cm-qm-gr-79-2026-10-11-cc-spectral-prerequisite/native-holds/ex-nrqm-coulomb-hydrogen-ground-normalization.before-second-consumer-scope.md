---
id: ex-nrqm-coulomb-hydrogen-ground-normalization
aliases: [nrqm-coulomb-example-hydrogen-ground-normalization]
kind: example
domain: mathematics
title: "Hydrogen ground normalization"
status: draft
origin: pipeline
dependency_level: 11
deps: [thm-nrqm-coulomb-ground-radial-probability-and-units, thm-nrqm-coulomb-kummer-recurrence-and-termination, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-orbital-and-spin-sphere-onb, thm-polar-coordinates-formula-for-lebesgue-measure, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, thm-ftc-second-part, thm-derivative-of-exponential, thm-algebra-of-derivatives, cor-cauchy-schwarz-inequality-for-l-two, def-l-p-space-as-a-quotient-by-null-functions, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-coulomb-ground-radial-probability-and-units: mathematical-premise
  thm-nrqm-coulomb-kummer-recurrence-and-termination: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.4 pp. 229-235 (Theorem 10.9 and the explicit ground state R_{0,0} at p. 232)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics (Cappella Archive), Section 8.1 pp. 186-193 (radial wavefunctions, radial probability densities and expectation values of the hydrogen ground state)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\gamma>0$, $a_0:=2/\gamma$, and let
$$\psi_{100}(x):=\Bigl(\frac{\gamma^3}{8\pi}\Bigr)^{1/2}e^{-r/a_0}\qquad(x=r\Omega,\ r=|x|),$$
the ground vector of [[thm-nrqm-coulomb-ground-radial-probability-and-units]].
This example re-verifies, by elementary one-variable integration, that:

(a) $\|\psi_{100}\|_{L^2}=1$;

(b) $\psi_{100}\in D(C)$ and $C\psi_{100}=-\frac{\gamma^2}{4}\psi_{100}$, as checked by differentiating $e^{-r/a_0}$ directly;

(c) the radial law $p(r)=4r^2a_0^{-3}e^{-2r/a_0}$ integrates to $1$ and has mean $3a_0/2$;

(d) the exact same constants arise from the closed form of the Laguerre polynomial $L_0^{(1)}=1$, so the normalization is a special case of the general polynomial-exponential solution.

## Verification

**Given:** $\gamma>0$, $a_0=2/\gamma$, the function $\psi_{100}$ and the radial density $p$; the ground solution data of the previous items.

**Proof technique:** direct differentiation and elementary antiderivatives.

[F1] $Y_{00}=1/\sqrt{4\pi}$ and $\sigma(S^2)=4\pi$; the polar decomposition of Lebesgue measure holds ([[thm-nrqm-orbital-and-spin-sphere-onb]], [[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F2] For $a>0$: $\int_0^\infty e^{-ar}dr=1/a$, $\int_0^\infty re^{-ar}dr=1/a^2$, $\int_0^\infty r^2e^{-ar}dr=2/a^3$, $\int_0^\infty r^3e^{-ar}dr=6/a^4$; each follows from the derivative of $r^ne^{-ar}$ and the fundamental theorem with vanishing boundary terms ([[thm-ftc-second-part]], [[thm-derivative-of-exponential]], [[thm-algebra-of-derivatives]]).

[F3] The ground solution of $A_0$ at $k=\gamma/2$ is $u(r)=cre^{-r/a_0}$ and the transported function is $\psi_{100}=(\gamma^3/(8\pi))^{1/2}e^{-r/a_0}$; $C\psi_{100}=-(\gamma^2/4)\psi_{100}$ ([[thm-nrqm-coulomb-kummer-recurrence-and-termination]] (d), (e), [[thm-nrqm-coulomb-ground-radial-probability-and-units]] (a), [[thm-nrqm-coulomb-transported-radial-endpoint-realization]]).

1.1 [Normalization] By [F1] and [F2], $\|\psi_{100}\|^2=\frac{\gamma^3}{8\pi}\int_{\mathbb R^3}e^{-2r/a_0}dx=\frac{\gamma^3}{8\pi}\cdot4\pi\int_0^\infty r^2e^{-2r/a_0}dr=\frac{\gamma^3}{2}\cdot\frac{2}{(2/a_0)^3}=\frac{\gamma^3a_0^3}{8}=1$, because $\gamma a_0=2$. This is (a). [F1, F2, given, algebra]

2.1 [Direct check of the eigenvalue] Write $f:=e^{-r/a_0}$, so $f'=-(1/a_0)f$ and $f''=a_0^{-2}f$, and let $u:=rf$, so that $\psi_{100}=cr^{-1}uY_{00}$ with $c=(\gamma^3/(8\pi))^{1/2}\cdot\sqrt{4\pi}$. By the reduction identity the free part of $C\psi_{100}$ is $cr^{-1}(-u'')Y_{00}$ and the potential part is $-\gamma cr^{-1}fY_{00}$, so $C\psi_{100}=cr^{-1}(-u''-\gamma f)Y_{00}$. Now $-u''=-2f'-rf''=(2/a_0-r/a_0^2)f$, hence $-u''-\gamma f=(2/a_0-\gamma-r/a_0^2)f=-(r/a_0^2)f$ because $\gamma=2/a_0$; therefore $C\psi_{100}=-a_0^{-2}cr^{-1}uY_{00}=-(\gamma^2/4)\psi_{100}$, since $a_0^{-2}=\gamma^2/4$. This re-derives part (b). [step 1.1, F3, algebra]

3.1 [Radial law and mean] By [F1], $p(r)=r^2\int_{S^2}|\psi_{100}|^2d\sigma=\frac{\gamma^3}{2}r^2e^{-2r/a_0}=4r^2a_0^{-3}e^{-2r/a_0}$; by [F2], $\int_0^\infty p=4a_0^{-3}\cdot\frac{2}{(2/a_0)^3}=4a_0^{-3}\frac{a_0^3}{4}=1$ and $\int_0^\infty rp=4a_0^{-3}\cdot\frac{6}{(2/a_0)^4}=4a_0^{-3}\frac{6a_0^4}{16}=\frac{3a_0}{2}$. This is (c). [step 2.1, F1, F2, algebra]

4.1 [Laguerre special case] By [F3] the general regular solution at $j=0$ is a multiple of $r^{l+1}e^{-kr}L_0^{(2l+1)}(2kr)$ with $L_0^{(a)}=1$; for $l=0$, $k=\gamma/2$ this is the function $u=cre^{-r/a_0}$ used above, so the same constants arise from the general formula and the computations are consistent. This is (d). [step 3.1, F3, algebra]

5.1 [Conclusion] Parts (a), (b), (c), (d) are steps 1.1, 2.1, 3.1 and 4.1. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
