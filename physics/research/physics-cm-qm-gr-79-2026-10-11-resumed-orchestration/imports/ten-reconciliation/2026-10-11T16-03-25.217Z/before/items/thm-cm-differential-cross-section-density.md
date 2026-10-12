---
id: thm-cm-differential-cross-section-density
kind: theorem
title: "One-dimensional substitution on a deflection branch: the outgoing angular measure has density $b|\\mathrm db/\\mathrm d\\theta|$, hence cross-section density $b|\\mathrm db/\\mathrm d\\theta|/\\sin\\theta$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-scattering-data, def-interval, def-continuity-real, thm-derivative-of-an-inverse, cor-one-dimensional-change-of-variables-with-absolute-derivative, thm-continuous-implies-integrable, thm-additivity-over-subintervals, thm-sine-cosine-signs-monotonicity-and-ranges, thm-algebra-of-continuous-functions, cor-mean-value-theorem, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]
dependency_roles:
  def-cm-scattering-data: mathematical-premise
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  cor-one-dimensional-change-of-variables-with-absolute-derivative: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.4, Eqs. (347)-(351): the annular incident area $2\\pi b\\,\\mathrm db$ and the outgoing solid angle, giving $\\mathrm d\\sigma/\\mathrm d\\Omega=(b/\\sin\\theta)|\\mathrm db/\\mathrm d\\theta|$"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.5, Eqs. (3.70)-(3.72): the differential cross-section and the geometric relation $\\mathrm d\\sigma/\\mathrm d\\Omega=b|\\mathrm db/\\mathrm d\\theta|/\\sin\\theta$"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let $(a_1,a_2)\subseteq(0,\infty)$ be an interval with at least two points, let
$\theta:(a_1,a_2)\to(0,\pi)$ be of class $C^1$ with $\theta'(b)\ne0$ for every
$b\in(a_1,a_2)$ — a deflection branch with inverse
$b:(\theta_1,\theta_2)\to(a_1,a_2)$ in the sense of
[[def-cm-scattering-data]] — and let $g:(0,\pi)\times\mathbb R\to\mathbb R$ be
continuous and $2\pi$-periodic in its second argument. Then

$$\int_{a_1}^{a_2}\!\int_0^{2\pi} g\bigl(\theta(b),\varphi\bigr)\,b\;\mathrm db\;\mathrm d\varphi =\int_{\theta_1}^{\theta_2}\!\int_0^{2\pi} g(\theta,\varphi)\,b(\theta)\,\bigl|b'(\theta)\bigr|\;\mathrm d\theta\;\mathrm d\varphi .$$

Consequently the outgoing angular measure carried to the branch has density
$b(\theta)|b'(\theta)|$ with respect to $\mathrm d\theta\,\mathrm d\varphi$, and
cross-section density
$$\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta) =\frac{b(\theta)\,\bigl|b'(\theta)\bigr|}{\sin\theta} =\frac{b(\theta)}{\sin\theta\,\bigl|\theta'(b(\theta))\bigr|}\qquad(\theta_1<\theta<\theta_2)$$
with respect to the solid-angle element $\sin\theta\,\mathrm d\theta\,\mathrm d\varphi$;
the two expressions agree because $b'(\theta)=1/\theta'(b(\theta))$. For
finitely many branches with pairwise disjoint images the contributions add.

## Facts & Assumptions

**Given:** A deflection branch $\theta$, its inverse $b$, and a continuous $g$ as in the statement.

[L1] A $C^1$ function on an interval with nowhere vanishing derivative is strictly monotone: by the mean value theorem its difference quotients have one sign ([[cor-mean-value-theorem]]), so $\theta$ is a continuous injection; the inverse of a continuous injective function on an interval is differentiable with $b'(\theta)=1/\theta'(b(\theta))$ where $\theta'\ne0$ ([[thm-derivative-of-an-inverse]], [[def-continuity-real]], [[def-interval]]).

[L2] On an interval on which it is $C^1$ and injective with nonvanishing derivative, the one-dimensional change-of-variables formula holds: $\int_{\theta_1}^{\theta_2}f(\theta)\,\mathrm d\theta=\int_{a_1}^{a_2}f(\theta(b))|\theta'(b)|\,\mathrm db$ for continuous $f$ on the image interval ([[cor-one-dimensional-change-of-variables-with-absolute-derivative]]).

[L3] Continuous functions on compact intervals are Riemann integrable, and the integral is additive over adjacent subintervals ([[thm-continuous-implies-integrable]], [[thm-additivity-over-subintervals]]); sums and products of continuous functions are continuous ([[thm-algebra-of-continuous-functions]]). If $G(x,t)$ is continuous on a compact rectangle, then $x\mapsto\int_c^dG(x,t)\,dt$ is continuous there: apply the Leibniz rule [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]] with the identically zero interior derivative.

[L4] $\sin\theta>0$ for $0<\theta<\pi$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the inverse $b$ is differentiable with $b'(\theta)=1/\theta'(b(\theta))$ on $(\theta_1,\theta_2)$; since $\theta$ is $C^1$ with nowhere vanishing derivative and $b$ is continuous, $b'$ is continuous, so $b$ is $C^1$. [given, L1, L3]

2.1 Fix $\varphi$. The function $\Phi_\varphi(\theta):=g(\theta,\varphi)\,b(\theta)\,|b'(\theta)|$ is continuous on $[\theta_1,\theta_2]$ by [L3] and step 1.1. Applying [L2] with this $f=\Phi_\varphi$ and using $|b'(\theta(b))\,\theta'(b)|=1$ gives $$\int_{\theta_1}^{\theta_2}g(\theta,\varphi)\,b(\theta)\,|b'(\theta)|\,\mathrm d\theta=\int_{a_1}^{a_2}g(\theta(b),\varphi)\,b\,\mathrm db .$$ [given, step 1.1, L2, L3, algebra]

3.1 Both sides of step 2.1 are continuous functions of $\varphi$ on $[0,2\pi]$ by [L3] (the integrands $(b,\varphi)\mapsto g(\theta(b),\varphi)b$ and $(\theta,\varphi)\mapsto g(\theta,\varphi)b(\theta)|b'(\theta)|$ are continuous on the compact rectangles, using steps 1.1 and the continuity of $g$, $\theta$ and $b$); the periodicity of $g$ in the second variable makes the integrals well defined for the circular variable $\varphi$. Integrating the identity of step 2.1 over $\varphi\in[0,2\pi]$ gives the displayed double-integral identity. [step 2.1, L3, given]

4.1 Dividing the density $b(\theta)|b'(\theta)|$ by the strictly positive factor $\sin\theta$ (step [L4]) converts the reference measure $\mathrm d\theta\,\mathrm d\varphi$ into the solid-angle element $\sin\theta\,\mathrm d\theta\,\mathrm d\varphi$, giving $\mathrm d\sigma/\mathrm d\Omega(\theta)=b(\theta)|b'(\theta)|/\sin\theta$; substituting $b'(\theta)=1/\theta'(b(\theta))$ from step 1.1 gives the second expression. For finitely many branches $(a_1^{(j)},a_2^{(j)})$ with pairwise disjoint image intervals the domain of the $\theta$-integral is the disjoint union of the images; additivity [L3] yields the sum of the densities. [step 1.1, step 2.1, step 3.1, L3, L4, algebra] ∎
