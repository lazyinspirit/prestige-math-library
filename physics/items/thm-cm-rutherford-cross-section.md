---
id: thm-cm-rutherford-cross-section
kind: theorem
title: "The Rutherford deflection map, its inverse, the cross-section density
  $(\\kappa/4E)^2\\csc^4(\\theta/2)$ and the divergence of the total
  cross-section"
status: published
origin: pipeline
domain: mathematics
dependency_level: 4
deps:
  [
    def-cm-scattering-data,
    thm-cm-coulomb-scattering,
    thm-cm-differential-cross-section-density,
    def-interval,
    def-ck-euclidean-maps-and-diffeomorphisms,
    def-derivative,
    def-principal-inverse-tangent,
    def-principal-inverse-sine-and-cosine,
    def-tangent-cotangent-secant-cosecant,
    lem-tangent-principal-branch-is-bijective,
    thm-principal-inverse-tangent-calculus,
    thm-tangent-cotangent-secant-cosecant-derivatives-and-periods,
    thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions,
    thm-sine-and-cosine-addition-formulas,
    thm-sine-and-cosine-subtraction-formulas,
    cor-trigonometric-parity-and-pythagorean-identity,
    thm-sine-cosine-signs-monotonicity-and-ranges,
    thm-derivative-of-an-inverse,
    cor-mean-value-theorem,
    thm-chain-rule,
    thm-algebra-of-derivatives,
    thm-algebra-of-continuous-functions,
    thm-ftc-second-part,
    thm-additivity-over-subintervals,
    thm-monotonicity-of-the-integral,
    thm-continuous-implies-integrable,
    cor-primitives-of-a-continuous-function,
    def-continuity-real,
    def-countable-choice
  ]
dependency_roles:
  def-cm-scattering-data: mathematical-premise
  thm-cm-coulomb-scattering: mathematical-premise
  thm-cm-differential-cross-section-density: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-derivative: mathematical-premise
  def-principal-inverse-tangent: mathematical-premise
  def-principal-inverse-sine-and-cosine: mathematical-premise
  def-tangent-cotangent-secant-cosecant: mathematical-premise
  lem-tangent-principal-branch-is-bijective: mathematical-premise
  thm-principal-inverse-tangent-calculus: mathematical-premise
  thm-tangent-cotangent-secant-cosecant-derivatives-and-periods: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-and-cosine-subtraction-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  def-continuity-real: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin),
        §6.4, Eqs. (358)-(367): the Rutherford cross-section and the small-angle
        divergence of the total cross-section"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics,
        §3.5, Eq. (3.69) and following: $\\tan(\\theta/2)=\\alpha/(2Eb)$ and the
        Rutherford scattering formula"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the cross-section measures. Fix $\mu>0$, $\kappa>0$ and $E>0$. For every $b>0$ put $J(b)=\sqrt{2\mu E}\,b$ and use the Coulomb trajectory family of [[thm-cm-coulomb-scattering]] clause 4. Its impact distance is $b$ and its
**deflection map**
$$\theta_{\rm def}:(0,\infty)\to(0,\pi),\qquad \theta_{\rm def}(b):=2\arctan\frac{\kappa}{2Eb}.$$
Then:

1. $\theta_{\rm def}$ is $C^1$ and strictly decreasing, with
   $\theta_{\rm def}(b)\to\pi$ as $b\downarrow0$ and
   $\theta_{\rm def}(b)\to0$ as $b\to\infty$; it is a $C^1$ bijection
   $(0,\infty)\to(0,\pi)$ with inverse
   $$b(\theta)=\frac{\kappa}{2E}\cot\frac{\theta}{2}\qquad(0<\theta<\pi).$$
2. For every interval $(\theta_1,\theta_2)\subseteq(0,\pi)$ the pair
   $(\theta,b)$ is a deflection branch with cross-section density
   $$\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta) =b(\theta)\Bigl|\frac{\mathrm db}{\mathrm d\theta}(\theta)\Bigr|\frac{1}{\sin\theta} =\Bigl(\frac{\kappa}{4E}\Bigr)^2\csc^4\frac{\theta}{2},$$
   finite and positive on $(\theta_1,\theta_2)$; and the pushforward of the
   incident flux measure under the branch is described by
   [[thm-cm-differential-cross-section-density]].
3. For every $\theta_0\in(0,\pi)$ the truncated total cross-section
   $$\int_0^{\theta_0}\!\!\int_0^{2\pi}\Bigl(\frac{\kappa}{4E}\Bigr)^2 \csc^4\frac{\theta}{2}\,\sin\theta\,\mathrm d\varphi\,\mathrm d\theta=+\infty,$$
   while for $0<\theta_1<\theta_2<\pi$ the integral over
   $(\theta_1,\theta_2)\times(0,2\pi)$ is finite; in this sense the total
   cross-section of the ideal Coulomb model diverges at forward angles and
   every compact angular acceptance away from $0$ has finite cross-section.

## Facts & Assumptions

**Given:** Countable choice, the fixed data $\mu,\kappa,E$, the family $J(b)=\sqrt{2\mu E}\,b$, the deflection map $\theta_{\rm def}$ and its asserted inverse $b(\theta)$.

[L1] $\arctan:\mathbb R\to(-\pi/2,\pi/2)$ is the inverse of $\tan$, $\arctan$ is $C^1$ and strictly increasing, and $\tan(\arctan y)=y$ for every real $y$; on $0<\theta/2<\pi/2$ one has $\arctan(\tan(\theta/2))=\theta/2$ ([[def-principal-inverse-tangent]], [[lem-tangent-principal-branch-is-bijective]], [[thm-principal-inverse-tangent-calculus]]).

[L2] Trigonometric calculus: derivatives of $\tan,\cot,\sec,\csc$ and their Pythagorean and parity identities, the cotangent double-angle form $\sin\theta=2\sin(\theta/2)\cos(\theta/2)$, and $\cos(\theta/2)>0$ for $0<\theta<\pi$ ([[thm-tangent-cotangent-secant-cosecant-derivatives-and-periods]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]], [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-subtraction-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[def-tangent-cotangent-secant-cosecant]]).

[L3] The half-angle advance for the Coulomb branch is $\Delta=\pi/2-\arctan(\kappa/(2Eb))$ and the deflection magnitude is $\pi-2\Delta=2\arctan(\kappa/(2Eb))$ ([[thm-cm-coulomb-scattering]] clauses 3-4).

[L4] Chain, quotient and inverse-function rules: $\theta_{\rm def}$ and $b$ are $C^1$ with the derivatives computed below; the inverse of a continuous injective $C^1$ function with nonvanishing derivative has reciprocal derivative ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-derivative-of-an-inverse]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-derivative]], [[def-interval]]).

[L5] One-dimensional substitution/change of variables with the absolute derivative and the branch density identity $\mathrm d\sigma/\mathrm d\Omega=b|b'|/\sin\theta$ hold on every deflection branch ([[thm-cm-differential-cross-section-density]], [[def-cm-scattering-data]]).

[L6] A continuous nonnegative function with a positive value has positive integral, the integral is monotone, and for $0<\varepsilon<\theta_0$ the computed integral $\int_\varepsilon^{\theta_0}\theta^{-3}\,\mathrm d\theta=\frac12(\varepsilon^{-2}-\theta_0^{-2})$ diverges as $\varepsilon\downarrow0$; $\sin x\le x$ for $x\ge0$ (mean value theorem applied to $\sin$ on $[0,x]$, using $\cos\le1$) and $\cos(\theta/2)\ge\cos(\theta_0/2)>0$ for $0<\theta\le\theta_0\le\pi/2$ ([[thm-ftc-second-part]], [[thm-monotonicity-of-the-integral]], [[thm-continuous-implies-integrable]], [[cor-primitives-of-a-continuous-function]], [[cor-mean-value-theorem]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-additivity-over-subintervals]], [[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

## Proof

**Proof technique:** direct.

1.1 Differentiation of the branch: by [L4] and [L2], $$\theta_{\rm def}'(b)=2\cdot\frac{1}{1+\bigl(\frac{\kappa}{2Eb}\bigr)^2}\cdot\Bigl(-\frac{\kappa}{2Eb^2}\Bigr)<0 \qquad(b>0),$$ so $\theta_{\rm def}$ is $C^1$ with strictly negative derivative, hence strictly decreasing; as $b\downarrow0$, $\kappa/(2Eb)\to\infty$ and $\arctan$ tends to $\pi/2$, so $\theta_{\rm def}\to\pi$; as $b\to\infty$, $\kappa/(2Eb)\to0$ and $\theta_{\rm def}\to0$. The image is therefore $(0,\pi)$ and the inverse exists, is $C^1$ by [L4], and satisfies the claimed formula: for $0<\theta<\pi$, $\arctan\bigl(\tan(\theta/2)\bigr)=\theta/2$ by [L1] (since $0<\theta/2<\pi/2$) and $\tan(\theta/2)=\kappa/(2E b(\theta))$ with $b(\theta)=\frac{\kappa}{2E}\cot(\theta/2)$, because $\tan(\theta/2)\cot(\theta/2)=1$ by [L2]; substituting shows $\theta_{\rm def}(b(\theta))=\theta$. [given, L1, L2, L4, algebra]

2.1 The half-angle and deflection relation of [L3] applied for each $b>0$ to the corresponding trajectory with $J=J(b)$ give exactly the deflection value $\pi-2\Delta=2\arctan(\kappa/(2Eb))$; thus the abstract branch formula is the computed scattering deflection of the Coulomb problem, and clause 1 is complete. [step 1.1, L3, algebra]

2.2 Cross-section density: by [L2], $b'(\theta)=-\frac{\kappa}{4E}\csc^2(\theta/2)$, so $|b'(\theta)|=\frac{\kappa}{4E}\csc^2(\theta/2)$; combining with [L5], $$\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta)=\frac{b(\theta)|b'(\theta)|}{\sin\theta} =\frac{\kappa^2}{8E^2}\cdot\frac{\cot(\theta/2)\csc^2(\theta/2)}{\sin\theta}.$$ Using $\sin\theta=2\sin(\theta/2)\cos(\theta/2)$ from [L2], $$\cot\frac{\theta}{2}\csc^2\frac{\theta}{2}\Big/\sin\theta=\frac{\cos(\theta/2)}{\sin^3(\theta/2)}\cdot\frac{1}{2\sin(\theta/2)\cos(\theta/2)}=\frac{1}{2}\csc^4\frac{\theta}{2},$$ whence $\mathrm d\sigma/\mathrm d\Omega=\frac{\kappa^2}{16E^2}\csc^4(\theta/2)=(\kappa/(4E))^2\csc^4(\theta/2)$, finite and positive on $(\theta_1,\theta_2)$; this is clause 2. [step 1.1, L2, L5, algebra]

3.1 Divergence: for $0<\theta\le\theta_0$ with $\theta_0\le\pi/2$, the integrand of clause 3 equals $\bigl(\kappa/(4E)\bigr)^2\sin\theta\,\csc^4(\theta/2)=\bigl(\kappa/(4E)\bigr)^2\cdot 2\cos(\theta/2)/\sin^3(\theta/2)$ by the same identities; since $\sin(x)\le x$ for $x\ge0$ and $\cos(\theta/2)\ge\cos(\theta_0/2)>0$ by [L6], the integrand is at least $C\theta^{-3}$ with $C=16\bigl(\kappa/(4E)\bigr)^2\cos(\theta_0/2)>0$. Hence for $0<\varepsilon<\theta_0$, by monotonicity of the integral and the $\varphi$-integration of a constant, $$\int_\varepsilon^{\theta_0}\!\!\int_0^{2\pi}\bigl(\kappa/(4E)\bigr)^2\csc^4(\theta/2)\sin\theta\,\mathrm d\varphi\,\mathrm d\theta\ge 2\pi C\int_\varepsilon^{\theta_0}\theta^{-3}\,\mathrm d\theta=\pi C\bigl(\varepsilon^{-2}-\theta_0^{-2}\bigr)\longrightarrow+\infty$$ as $\varepsilon\downarrow0$, by the fundamental theorem and [L6]; hence the truncated integral over $(0,\theta_0)$ diverges. If instead $\pi/2<\theta_0<\pi$, cut the interval at $\pi/2$ and use the divergence on $(0,\pi/2]$ together with additivity. [step 2.2, L6, algebra]

4.1 Finiteness on compact angular intervals: the integrand $(\kappa/(4E))^2\csc^4(\theta/2)\sin\theta$ is continuous on the compact rectangle $[\theta_1,\theta_2]\times[0,2\pi]$ because $\sin(\theta/2)>0$ there, so its integral is finite by [L6]; this completes clause 3. [step 3.1, L6, algebra] ∎
