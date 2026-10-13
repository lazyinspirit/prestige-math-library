---
id: thm-cm-central-force-polar-reduction
kind: theorem
title: "Polar reduction of a non-radial central-force trajectory: $\\rho^2\\theta'=J/\\mu$, the effective-potential equation and energy conservation"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-central-force-trajectory, lem-cm-oriented-orthonormal-triads, lem-cm-planar-polar-lift, thm-cm-central-force-angular-momentum-conservation, lem-cm-derivative-of-pairings-of-curves, thm-chain-rule, thm-algebra-of-derivatives, def-euclidean-inner-product, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, cor-zero-derivative-implies-constant, def-interval, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm-central-force-trajectory: mathematical-premise
  lem-cm-oriented-orthonormal-triads: mathematical-premise
  lem-cm-planar-polar-lift: mathematical-premise
  thm-cm-central-force-angular-momentum-conservation: mathematical-premise
  lem-cm-derivative-of-pairings-of-curves: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §2.5.4, printed pp. 31-33, Eqs. (2.83)-(2.88): the planar polar Lagrangian, the conserved $J=\\mu r^2\\dot\\phi$, the radial equation $\\mu\\ddot r=-\\partial_rV_{\\rm eff}$ and the energy $E=\\frac12\\mu\\dot r^2+V_{\\rm eff}(r)$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.4, Eqs. (3.44)-(3.57): polar coordinates in a central field, the first integral and the effective radial equation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let $\mu>0$, let $J_0\subseteq(0,\infty)$ be an open interval, let
$U:J_0\to\mathbb R$ be of class $C^2$, let $I\subseteq\mathbb R$ be an interval
with at least two points, and let $r:I\to\mathbb R^3$ be a central-force
trajectory for $(\mu,U)$ whose angular momentum $j=\mu\,r\times r'$ is a nonzero
constant vector ([[thm-cm-central-force-angular-momentum-conservation]]); write
$J:=|j|>0$. Let $(e_1,e_2,e_3)$ be an oriented orthonormal triad with
$e_3=j/J$ ([[lem-cm-oriented-orthonormal-triads]]).

Then there are twice differentiable $\rho:I\to(0,\infty)$ and
$\theta:I\to\mathbb R$ with

$$r(t)=\rho(t)\bigl(\cos\theta(t)\,e_1+\sin\theta(t)\,e_2\bigr)\qquad(t\in I),$$

and for **every** such pair $(\rho,\theta)$:

1. $\rho(t)=|r(t)|$ for all $t$;
2. $\rho^2\theta'=J/\mu$ on $I$, so $\theta'>0$;
3. the effective-potential equation $\mu\rho''=-\bigl(U^{\mathrm{eff}}_J\bigr)'(\rho)$
   holds on $I$, with $U^{\mathrm{eff}}_J=U+J^2/(2\mu\rho^2)$
   ([[def-cm-central-force-trajectory]]);
4. $E:=\frac12\mu\lVert r'\rVert_2^2+U(|r|)$ equals
   $\frac12\mu\rho'^2+U^{\mathrm{eff}}_J(\rho)$ and is constant on $I$.

## Facts & Assumptions

**Given:** A central-force trajectory $r$ for $(\mu,U)$ with constant nonzero angular momentum $j=Je_3$, $J>0$, an oriented orthonormal triad $(e_1,e_2,e_3)$, and twice differentiable $\rho,\theta$ with $r=\rho(\cos\theta\,e_1+\sin\theta\,e_2)$.

[L1] For the oriented orthonormal triad: every $x\in\mathbb R^3$ is $x=\langle x,e_1\rangle e_1+\langle x,e_2\rangle e_2+\langle x,e_3\rangle e_3$ and $|x|^2=\sum_i\langle x,e_i\rangle^2$ ([[lem-cm-oriented-orthonormal-triads]]).

[L2] The angular momentum is orthogonal to $r$ and to $r'$: $\langle r,e_3\rangle J=\langle r,j\rangle=0$ and $\langle r',j\rangle=0$ ([[thm-cm-central-force-angular-momentum-conservation]]).

[L3] Polar lift: for twice differentiable $\rho_1,\rho_2:I\to\mathbb R$ with $(\rho_1,\rho_2)\ne(0,0)$ there is a twice differentiable angle function such that $\rho_1=r_0\cos\theta$, $\rho_2=r_0\sin\theta$ with $r_0=\sqrt{\rho_1^2+\rho_2^2}$ ([[lem-cm-planar-polar-lift]]).

[L4] Differentiability rules: inner products and cross products of differentiable curves differentiate by the product rule, $\langle x,y\rangle'=\langle x',y\rangle+\langle x,y'\rangle$ and $(x\times y)'=x'\times y+x\times y'$; the chain rule differentiates $\cos\theta$ and $\sin\theta$ with derivatives $-\theta'\sin\theta$ and $\theta'\cos\theta$; sums, products and quotients with nonvanishing denominator differentiate by the usual rules ([[lem-cm-derivative-of-pairings-of-curves]], [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[L5] Cross product rules: $e_1\times e_2=e_3$, $e_2\times e_1=-e_3$, the product is bilinear, and $e_i$ are unit vectors ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]); $\cos^2+\sin^2=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L6] A function continuous on $I$ whose derivative vanishes at every interior point is constant on $I$ ([[cor-zero-derivative-implies-constant]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Put $\rho_i:=\langle r,e_i\rangle$ for $i=1,2$; these are twice differentiable by [L4]. They are never both zero: by [L1] and [L2], $r=\rho_1e_1+\rho_2e_2+\langle r,e_3\rangle e_3=\rho_1e_1+\rho_2e_2$, so $\rho_1=\rho_2=0$ would give $r=0$, contradicting $|r|\in J_0\subseteq(0,\infty)$. [given, L1, L2, L4, algebra]

1.2 Clause 1 for an arbitrary pair: if $r=\rho(\cos\theta\,e_1+\sin\theta\,e_2)$, then $|r|^2=|r|^2$ is computed by [L1] and [L5] as $\rho^2(\cos^2\theta+\sin^2\theta)=\rho^2$, hence $\rho=|r|$. [given, L1, L5, algebra]

1.3 Differentiating [L5]'s expansion $r=\rho\,n$ with $n:=\cos\theta\,e_1+\sin\theta\,e_2$ and $n_\perp:=-\sin\theta\,e_1+\cos\theta\,e_2$ by [L4] gives $$r'=\rho'n+\rho\theta'\,n_\perp,\qquad r''=(\rho''-\rho\theta'^2)n+(2\rho'\theta'+\rho\theta'')n_\perp .$$ Here $n\times n_\perp=e_3$ and $n_\perp\times n=-e_3$ by bilinearity of the cross product and $e_1\times e_2=e_3$. [given, L4, L5, algebra]

2.1 Apply the polar lift [L3] to $(\rho_1,\rho_2)$: there is a twice differentiable $\theta$ with $\rho_1=r_0\cos\theta$, $\rho_2=r_0\sin\theta$ for $r_0=\sqrt{\rho_1^2+\rho_2^2}$; by Parseval in [L1] and $\langle r,e_3\rangle=0$, $r_0^2=\rho_1^2+\rho_2^2=|r|^2$, so $r_0=|r|=:\rho$ is twice differentiable with values in $J_0\subseteq(0,\infty)$. Substituting into the expansion of step 1.1 gives $r=\rho(\cos\theta\,e_1+\sin\theta\,e_2)$, so such a pair exists. [step 1.1, L1, L2, L3, algebra]

2.2 Clause 2: from step 1.3, $$r\times r'=\rho\,n\times\bigl(\rho'n+\rho\theta'n_\perp\bigr)=\rho^2\theta'\,e_3,$$ so $j=Je_3=\mu r\times r'=\mu\rho^2\theta'e_3$, giving $J=\mu\rho^2\theta'$ and hence $\rho^2\theta'=J/\mu>0$. [given, step 1.3, L5, algebra]

3.1 Clause 3: the trajectory equation is $\mu r''=-\bigl(U'(|r|)/|r|\bigr)r=-U'(\rho)\,n$ by clause 1. Comparing with the decomposition of step 1.3 and using the linear independence of $n$ and $n_\perp$ — their components in the orthonormal triad are distinct, so $\alpha n+\beta n_\perp=0$ forces $\alpha=\beta=0$ by taking inner products with $n$ and $n_\perp$ — the radial component gives $$\mu\bigl(\rho''-\rho\theta'^2\bigr)=-U'(\rho).$$ Substituting $\rho^2\theta'=J/\mu$ from step 2.2 gives $\mu\rho''=-U'(\rho)+\mu\rho\theta'^2=-U'(\rho)+\dfrac{J^2}{\mu\rho^3}=-\bigl(U^{\mathrm{eff}}_J\bigr)'(\rho)$, because $\bigl(U^{\mathrm{eff}}_J\bigr)'=U'(\rho)-\dfrac{J^2}{\mu\rho^3}$. [given, step 1.2, step 1.3, step 2.2, L1, L5, algebra]

3.2 Clause 4, the energy identity: from step 1.3 and orthonormality, $\lVert r'\rVert_2^2=\rho'^2+\rho^2\theta'^2$, so $$E=\tfrac12\mu\rho'^2+\tfrac12\mu\rho^2\theta'^2+U(\rho)=\tfrac12\mu\rho'^2+\frac{J^2}{2\mu\rho^2}+U(\rho)=\tfrac12\mu\rho'^2+U^{\mathrm{eff}}_J(\rho)$$ by step 2.2. [step 1.3, step 2.2, L1, algebra]

4.1 The right-hand side is differentiable on $I$ and its derivative is $$\mu\rho'\rho''+\bigl(U^{\mathrm{eff}}_J\bigr)'(\rho)\,\rho'=\rho'\Bigl(\mu\rho''+\bigl(U^{\mathrm{eff}}_J\bigr)'(\rho)\Bigr)=0$$ by step 3.1 (the equation holds at every point of $I$); hence $E$ is constant on $I$ by [L6]. [step 3.1, step 3.2, L4, L6, algebra] ∎
