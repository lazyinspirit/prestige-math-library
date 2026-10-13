---
id: ex-cm-rutherford-cross-section-check
kind: example
title: "An exact Rutherford check: $\\kappa=E=1$, $b=1$ give
  $\\theta=2\\arctan\\frac12$ and $\\mathrm d\\sigma/\\mathrm d\\Omega=25/16$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 5
deps:
  [
    thm-cm-rutherford-cross-section,
    thm-cm-coulomb-scattering,
    def-cm-scattering-data,
    def-principal-inverse-tangent,
    def-tangent-cotangent-secant-cosecant,
    thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions,
    thm-sine-and-cosine-subtraction-formulas,
    cor-trigonometric-parity-and-pythagorean-identity,
    def-interval,
    def-countable-choice
  ]
dependency_roles:
  thm-cm-rutherford-cross-section: mathematical-premise
  thm-cm-coulomb-scattering: mathematical-premise
  def-cm-scattering-data: mathematical-premise
  def-principal-inverse-tangent: mathematical-premise
  def-tangent-cotangent-secant-cosecant: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  thm-sine-and-cosine-subtraction-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin),
        §6.4, Eqs. (358)-(365): the Rutherford angle and density, checked here
        at exact rational data"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the cited scattering measures and vocabulary.

Take the repulsive Coulomb data $\kappa=1$ and $E=1$ (with any $\mu>0$ and
$J=\sqrt{2\mu}$, so that the asymptotic impact distance of
[[thm-cm-coulomb-scattering]] is $b=1$). Then the deflection map of
[[thm-cm-rutherford-cross-section]] has the exact values
$$\theta_{\rm def}(1)=2\arctan\frac12\in(0,\pi), \qquad \frac{\pi}{2}-\Delta=\arctan\frac12,\qquad \Delta=\frac{\pi}{2}-\arctan\frac12,$$
the inverse branch satisfies $b(\theta_{\rm def}(1))=1$, and
$$\frac{\mathrm d\sigma}{\mathrm d\Omega}\Bigl(\theta_{\rm def}(1)\Bigr) =\Bigl(\frac{\kappa}{4E}\Bigr)^2\csc^4\Bigl(\frac{\theta_{\rm def}(1)}{2}\Bigr) =\frac{25}{16},$$
because $\theta_{\rm def}(1)/2=\arctan\frac12$ and $\csc^2(\arctan\frac12)=1+\cot^2(\arctan\frac12)=1+4=5$.

## Facts & Assumptions

**Given:** Countable choice for the scattering measures. $\kappa=1$, $E=1$, $b=1$, the deflection map $\theta_{\rm def}(b)=2\arctan(\kappa/(2Eb))$, the inverse branch $b(\theta)=\frac{\kappa}{2E}\cot(\theta/2)$, and the half-angle $\Delta=\pi/2-\arctan(\kappa/(2Eb))$.

[L1] Deflection and half-angle: $\theta_{\rm def}(b)=2\arctan(\kappa/(2Eb))$ and $\Delta=\pi/2-\arctan(\kappa/(2Eb))$, with $\theta_{\rm def}=\pi-2\Delta$ ([[thm-cm-rutherford-cross-section]], [[thm-cm-coulomb-scattering]], [[def-cm-scattering-data]]).

[L2] $\tan(\arctan y)=y$ and $\cot(\arctan y)=1/y$ for $y>0$; $\csc^2 u=1+\cot^2u$ ([[def-principal-inverse-tangent]], [[def-tangent-cotangent-secant-cosecant]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

[L3] The cross-section density is $(\kappa/(4E))^2\csc^4(\theta/2)$ on the branch ([[thm-cm-rutherford-cross-section]]).

[L4] $\pi-2(\pi/2-\arctan\frac12)=2\arctan\frac12$ by the subtraction formula and elementary algebra ([[thm-sine-and-cosine-subtraction-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 Substituting $\kappa=E=b=1$ into [L1]: $\theta_{\rm def}(1)=2\arctan\frac12$ and $\Delta=\frac{\pi}{2}-\arctan\frac12$; and $\pi-2\Delta=2\arctan\frac12=\theta_{\rm def}(1)$ by [L4]. [given, L1, L4, algebra]

2.1 Inverse check: $b(\theta_{\rm def}(1))=\frac12\cot(\arctan\frac12)=\frac12\cdot2=1$ by [L2]. [step 1.1, L2, algebra]

3.1 Density: $\frac{\theta_{\rm def}(1)}{2}=\arctan\frac12$, so by [L2] $\csc^2(\arctan\frac12)=1+\cot^2(\arctan\frac12)=1+4=5$; hence $\csc^4=25$ and, by [L3] with $\kappa=E=1$, $\mathrm d\sigma/\mathrm d\Omega=(\frac14)^2\cdot25=\frac{25}{16}$. [step 1.1, L2, L3, algebra] ∎
