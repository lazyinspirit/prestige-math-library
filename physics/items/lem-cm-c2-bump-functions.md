---
id: lem-cm-c2-bump-functions
kind: lemma
title: "Explicit twice differentiable bumps detect nonzero values of continuous functions"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-derivative, thm-algebra-of-derivatives, thm-chain-rule, thm-monotonicity-from-the-derivative, cor-zero-derivative-implies-constant, def-interval, def-continuity-real, def-abs-value, def-limit-point-r, def-darboux-integral, thm-continuous-implies-integrable, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, thm-nonnegative-continuous-with-zero-integral-vanishes]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-monotonicity-from-the-derivative: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
  def-abs-value: mathematical-premise
  def-limit-point-r: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-nonnegative-continuous-with-zero-integral-vanishes: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.2 (Euler's Differential Equation) and Section 5.9 (Lagrange multipliers for Holonomic Constraints), where the local coefficient argument is applied"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.1 (the 'if and only if' derivation of Lagrange's equations; the explicit bump here supplies the converse), printed pages 10-13"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

For real $c$ and $r>0$ define $h:\mathbb R\to\mathbb R$ by $h(s):=10s^3-15s^4+6s^5$ and
$\beta_{c,r}:\mathbb R\to\mathbb R$ by

$$\beta_{c,r}(t):=h\bigl(1-\tfrac{|t-c|}{r}\bigr)\ \text{for }|t-c|<r,\qquad \beta_{c,r}(t):=0\ \text{for }|t-c|\ge r .$$

Then:

1. $h(0)=0$, $h(1)=1$, $h'(0)=h'(1)=0$, $h''(0)=h''(1)=0$, and $0\le h\le1$ on $[0,1]$ with
   $h(s)>0$ for $0<s<1$;
2. $\beta_{c,r}$ is of class $C^2$ on $\mathbb R$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]),
   $0\le\beta_{c,r}\le1$, $\beta_{c,r}(c)=1$, $\beta_{c,r}(t)>0$ for $|t-c|<r$, and
   $\beta_{c,r}(t)=0$ for $|t-c|\ge r$;
3. **(detection)** let $J\subseteq\mathbb R$ be an open interval, let $E:J\to\mathbb R$ be
   continuous ([[def-continuity-real]]) and let $t_0\in J$ with $E(t_0)\ne0$. Then there is
   $\rho>0$ with $[t_0-\rho,t_0+\rho]\subseteq J$ such that, with $\beta:=\beta_{t_0,\rho}$,

$$\int_{t_0-\rho}^{t_0+\rho}E(t)\beta(t)\,dt\ne0 .$$

**Conventions.** The displayed integral is the Darboux integral over the closed bounded interval
$[t_0-\rho,t_0+\rho]$ of the continuous function $t\mapsto E(t)\beta(t)$
([[def-darboux-integral]], [[thm-continuous-implies-integrable]]); note that $\beta$ vanishes
at both endpoints and outside the interval, so no extension convention is needed.

## Facts & Assumptions

**Given:** The reals $c,r$, the polynomials and bumps displayed in the Statement, an open
interval $J$, a continuous $E:J\to\mathbb R$ and $t_0\in J$ with $E(t_0)\ne0$.

[F1] $h$ is a polynomial, hence differentiable on $\mathbb R$; the product and sum rules
([[thm-algebra-of-derivatives]]) give
$$h'(s)=30s^2(1-s)^2,\qquad h''(s)=60s(1-s)(1-2s),$$
so $h(0)=0,h(1)=1,h'(0)=h'(1)=h''(0)=h''(1)=0$, and $h'\ge0$ on $\mathbb R$; in particular
$h$ is nondecreasing with $h(s)\in[0,1]$ for $s\in[0,1]$ and $h(s)>0$ for $0<s<1$.

[F2] At an interior point of $\mathbb R$ differentiability is the usual two-sided derivative,
and at the points $c-r,c,c+r$ the one-sided derivatives of the two polynomial pieces of
$\beta_{c,r}$ are computed by the chain rule ([[def-derivative]], [[def-limit-point-r]],
[[thm-chain-rule]], [[thm-algebra-of-derivatives]]); the explicit matching argument below establishes two-sided differentiability at each gluing point.

[F3] If $E$ is continuous at $t_0$ with $E(t_0)\ne0$, then for
$\varepsilon=|E(t_0)|/2>0$ there is $\delta>0$ such that $|E(t)-E(t_0)|<\varepsilon$ for
$|t-t_0|<\delta$; then $E(t)>E(t_0)/2>0$ when $E(t_0)>0$ and $E(t)<E(t_0)/2<0$ when
$E(t_0)<0$ ([[def-continuity-real]], [[def-abs-value]]). Since $J$ is open there is $\rho>0$
with $[t_0-\rho,t_0+\rho]\subseteq J$; take $\rho\le\delta$.

[F4] A continuous real function on a closed bounded interval is integrable there
([[thm-continuous-implies-integrable]]); the integral is linear and monotone
([[thm-linearity-of-the-integral]], [[thm-monotonicity-of-the-integral]]), and a
nonnegative continuous function whose integral vanishes is identically zero
([[thm-nonnegative-continuous-with-zero-integral-vanishes]]).

## Proof

**Proof technique:** direct; compute the polynomial and glue the pieces of the bump, then
localise the sign of $E$ and integrate.

1.1 The derivative formulas of [F1] follow from the sum and product rules, and substituting $s=0$ and $s=1$ gives the vanishing values. Since $h'\ge0$ on $\mathbb R$, [F1] and the monotonicity criterion make $h$ nondecreasing on $\mathbb R$; hence $0=h(0)\le h(s)\le h(1)=1$ for $s\in[0,1]$, and $h(s)>0$ for $0<s<1$ because $h(s)=s^3(10-15s+6s^2)$ and $10-15s+6s^2=6(s-5/4)^2+5/8>0$. This proves clause 1. [F1, algebra]

1.2 Clause 2: on each of the three regions $|t-c|<r$ split at $t=c$, and $|t-c|\ge r$, the function $\beta_{c,r}$ is a polynomial in $t$ composed with the affine map $t\mapsto1-(t-c)/r$ or $t\mapsto1+(t-c)/r$, or is the constant $0$; by [F2] and the chain rule its one-sided derivatives of order $\le2$ at the gluing points $c-r,c,c+r$ are obtained from $h(0)=0$, $h(1)=1$, $h'(0)=h'(1)=0$, $h''(0)=h''(1)=0$ of clause 1, and they agree from the two sides (at $c$ the factor $\mp1/r$ from the two affine branches multiplies $h'(1)=0$, and at $c\pm r$ it multiplies $h'(0)=0$, so the first derivative is $0$ from both sides; the second derivatives are $h''(0)/r^2=0$ and $h''(1)/r^2=0$). At each joining point $u$ the polynomial values agree, so the glued function is continuous. Its two one-sided difference quotients tend to the common first derivative $0$, hence its two-sided derivative exists at $u$. On either side this derivative is the polynomial derivative and has limit $0$, so it is continuous there. Applying the same difference-quotient argument to this first derivative, whose one-sided derivatives both tend to $0$, shows that the second derivative exists at $u$ and equals $0$. Its polynomial pieces tend to that same value, making it continuous. Hence $\beta_{c,r}$ is of class $C^2$ on $\mathbb R$; the bounds $0\le\beta_{c,r}\le1$, the value $\beta_{c,r}(c)=h(1)=1$, the strict positivity on $(c-r,c+r)$ and the support statement are read off from clause 1 and the definition. [F1, F2, algebra]

2.1 Clause 3: by [F3] choose $\rho>0$ with $[t_0-\rho,t_0+\rho]\subseteq J$ and with $E$ of the strict sign of $E(t_0)$ on $(t_0-\rho,t_0+\rho)$. Put $\beta:=\beta_{t_0,\rho}$. On the support interval, $E\beta$ is continuous and has the strict sign of $E(t_0)$ wherever $\beta>0$, and $E(t_0)\beta(t_0)=E(t_0)\ne0$; by clause 2, $\beta>0$ exactly on $(t_0-\rho,t_0+\rho)$ and $\beta\ge0$ everywhere. [F3, step 1.2]

3.1 If $E(t_0)>0$ then $E\beta\ge0$ on $\mathbb R$ and $(E\beta)(t_0)>0$; were $\int_{t_0-\rho}^{t_0+\rho}E\beta=0$, [F4] would force $E\beta=0$ identically on the interval, contradicting $(E\beta)(t_0)>0$. If $E(t_0)<0$ apply the same argument to $-E\beta$, whose integral is $-\int E\beta$. In both cases the displayed integral is nonzero. [F4, step 2.1, algebra] ∎

## Remarks

- The bump of this lemma is a polynomial, so no exponential is needed and the construction is
  entirely elementary; the price of using $C^2$ bumps instead of smooth ones is that the
  variations in [[lem-cm-first-variation-formula]] and
  [[thm-cm-hamilton-phase-action-stationarity]] are taken of class $C^2$, which is exactly the
  regularity required there.

- The detecting clause is the local form of the fundamental lemma of the calculus of variations:
  it is used in [[thm-cm-stationarity-iff-euler-lagrange]] and
  [[thm-cm-hamilton-phase-action-stationarity]] to show that a continuous coefficient which is
  not identically zero produces a nonzero first variation.
