---
id: ex-cm07-oscillator-stationary-saddle-check
kind: example
title: "The harmonic oscillator on a long interval: the stationary curve is neither a local minimum nor a local maximum"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [def-cm07-action-and-mechanical-lagrangian, pthm-cm07-euler-lagrange-equations, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-linearity-of-the-integral, thm-ftc-second-part, thm-continuous-implies-integrable, thm-of-archimedean, thm-of-square-roots, def-darboux-integral, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-heine-borel-rn, thm-extreme-value-metric, def-vector-valued-derivative-and-integral, def-abs-value, def-interval]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  pthm-cm07-euler-lagrange-equations: physical-result
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-of-archimedean: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-abs-value: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check that stationarity is not minimisation, on a harmonic oscillator embedded in three-dimensional configuration space and moving along one fixed unit vector, with positive stiffness: on intervals longer than pi divided by the angular frequency, arbitrarily small fixed-endpoint variations in the declared dimensionless C^2 metric around the zero stationary curve produce both strictly larger and strictly smaller actions, so the stationary curve is neither a local minimiser nor a local maximiser; on shorter intervals every sine-mode variation in the checked family increases the action. The computation uses exact model actions and exact trigonometric integrals; no experimental values are reported."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.1, printed pages 10-13 (PDF pages 16-19): the principle of least action is a misnomer; the stationary path may be a minimum or a saddle"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.2: the function satisfying Euler's equation is stationary and the stationary value may be a maximum or a minimum"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 5, Section 5.1, chapter pages 1-2: the harmonic oscillator Lagrangian and equation of motion"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Example

Fix a duration $T>0$ and declare a one-label model of the force branch of
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$, a fixed unit vector
$e\in\mathbb R^{3}$ with dimensionless components, and force map
$F(t,x,v)=-k(e\cdot x)e$ with constant $k>0$. This is the global potential
model with $U(x)=\tfrac12k(e\cdot x)^{2}$ and no residual forces
([[def-cm03-potential-and-mechanical-energy]]), with mechanical Lagrangian
$$L(t,x,v)=\tfrac12m\lvert v\rvert_{2}^{2}-\tfrac12k(e\cdot x)^{2}$$
([[def-cm07-action-and-mechanical-lagrangian]]). Under
[[def-cm01-units]], $[m]=\mu$, $[e]=1$, $[x]=\ell$, $[t]=[T]=\tau$,
$[k]=\mu\tau^{-2}$, $[\omega]=\tau^{-1}$ and $[\ell_{0}]=\ell$, where
$\omega:=\sqrt{k/m}>0$. Fix a length scale $\ell_{0}>0$ and let
$\eta_{n}(t):=\ell_{0}\sin(n\pi t/T)e$; the scalar $\varepsilon$ below is
dimensionless. Consider curves on $[0,T]$.

Then:

1. the zero curve $x_{*}\equiv0$ is stationary for the action $S$;
2. for every integer $n\ge1$ the map $\eta_{n}$ is a variation of $x_{*}$,
   and for every dimensionless real $\varepsilon$ one has the exact
   identity
   $$S(\varepsilon\eta_{n})=\frac{mT\ell_{0}^{2}}{4}\,\varepsilon^{2}\Bigl(\Bigl(\frac{n\pi}{T}\Bigr)^{2}-\omega^{2}\Bigr);$$
3. if $T>\pi/\omega$, then $S(\varepsilon\eta_{1})<0$ and
   $S(\varepsilon\eta_{n})>0$ for every integer $n>\omega T/\pi$ and every
   $\varepsilon\ne0$; since $\varepsilon\eta_{n}\to0$ in the dimensionless
   $C^{2}$ metric defined below as $\varepsilon\to0$, the stationary curve
   $x_{*}$ is neither a local minimiser nor a local maximiser in that topology;
4. if $0<T<\pi/\omega$, then $S(\varepsilon\eta_{n})>0$ for every $n\ge1$ and
   every $\varepsilon\ne0$: every variation in this family increases the
   action, and no claim of global minimality is made.

## Facts & Assumptions

**Given:** The model data of the Example, $T>0$, the zero curve $x_{*}$, the maps $\eta_{n}(t)=\ell_{0}\sin(n\pi t/T)e$, and a dimensionless real $\varepsilon$.

[F1] The model and its stationarity criterion ([[def-cm07-action-and-mechanical-lagrangian]], [[pthm-cm07-euler-lagrange-equations]]): $x_{*}$ is stationary if and only if $m x''(t)=-k(e\cdot x(t))e$ for all $t\in[0,T]$; the zero curve satisfies this.

[F2] Trigonometric facts ([[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-derivatives]], [[cor-differentiable-implies-continuous]], [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[cor-trigonometric-parity-and-pythagorean-identity]]): $\sin'=\cos$, $\cos'=-\sin$, the product-to-sum identity $2\sin^{2}u=1-\cos(2u)$ (the addition formula for the cosine with $u=u$), the basic values $\sin0=0$, $\cos0=1$ and $\sin(m\pi)=0$ for every integer $m$, and $\sin^{2}+\cos^{2}=1$; iterating the derivative identities twice gives $\eta_n\in C^{2}$, since the derivatives through order two are scalar multiples of $\sin$ or $\cos$, which are continuous by differentiability and [[cor-differentiable-implies-continuous]]. Consequently $e\cdot\eta_{n}(t)=\ell_{0}\sin(n\pi t/T)$ and $\eta_{n}'(t)=\ell_{0}(n\pi/T)\cos(n\pi t/T)e$, while $\eta_{n}$ vanishes at $t=0$ and $t=T$ for every integer $n\ge1$.

[F3] Integral and order calculus ([[thm-ftc-second-part]], [[thm-chain-rule-for-total-derivatives]], [[thm-linearity-of-the-integral]], [[thm-continuous-implies-integrable]], [[def-darboux-integral]], [[def-interval]], [[def-euclidean-inner-product]], [[def-vector-valued-derivative-and-integral]], [[def-abs-value]]): the integral is linear, continuous integrands are integrable, and for $\alpha\ne0$ the function $t\mapsto\sin(\alpha t)/\alpha$ is a primitive of $t\mapsto\cos(\alpha t)$ on $[0,T]$ by the chain rule and the fundamental theorem; hence $\int_{0}^{T}\cos(\alpha t)dt=(\sin(\alpha T)-\sin0)/\alpha$. The Archimedean property gives, for $T>\pi/\omega$, an integer $n>\omega T/\pi$ ([[thm-of-archimedean]]); and $\omega=\sqrt{k/m}$ exists uniquely by [[thm-of-square-roots]].

[F4] The topology used for local extrema: on $C^{2}$ curves $h:[0,T]\to\mathbb R^{3}$ define
$$d_{T,\ell_{0}}(f,g):=\sup_{t\in[0,T]}\left(\frac{|f(t)-g(t)|_{2}}{\ell_{0}}+\frac{T|f'(t)-g'(t)|_{2}}{\ell_{0}}+\frac{T^{2}|f''(t)-g''(t)|_{2}}{\ell_{0}}\right).$$
This is a dimensionless metric: finiteness follows from continuity on the compact interval $[0,T]$ ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]), and the metric axioms follow componentwise from the Euclidean norm and its triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]). A local minimiser or maximiser means one relative to the fixed-endpoint $C^{2}$ curve class with this metric. For fixed $n$, $d_{T,\ell_{0}}(\varepsilon\eta_{n},0)\le |\varepsilon|(1+n\pi+n^{2}\pi^{2})$ by the trigonometric bounds, so it tends to zero as $\varepsilon\to0$.

## Verification

**Proof technique:** direct; evaluate the action of the scaled sine variations in closed form and read off the two signs.

1.1 Stationarity of the zero curve: $\mathsf Mx''=m\cdot0=-k(e\cdot0)e$ on $[0,T]$, so by [F1] $x_{*}$ is stationary; and each $\eta_{n}$ is a variation because it is $C^{\infty}$ on $[0,T]$ with $\eta_{n}(0)=\eta_{n}(T)=0$ by [F2]. [F1, F2, given]

1.2 The two integrals: with $\alpha:=2n\pi/T\ne0$ and the product-to-sum identity $2\sin^{2}u=1-\cos(2u)$ of [F2] applied to $u=n\pi t/T$, the linearity of the integral and the primitive of [F3] give $\int_{0}^{T}(e\cdot\eta_{n}(t))^{2}dt=\frac{\ell_{0}^{2}}{2}\int_{0}^{T}\bigl(1-\cos(\alpha t)\bigr)dt=\ell_{0}^{2}T/2,$ because $\alpha T=2n\pi$ is an integer multiple of $2\pi$ and $\sin(2n\pi)=0=\sin0$ by [F2]; and $\int_{0}^{T}\lvert\eta_{n}'(t)\rvert_{2}^{2}dt=\ell_{0}^{2}(n\pi/T)^{2}\int_{0}^{T}\cos(n\pi t/T)^{2}dt=\ell_{0}^{2}(n\pi/T)^{2}T/2,$ using $\cos^{2}=1-\sin^{2}$ of [F2] and the value just computed. [F2, F3, algebra]

2.1 Exact action of the scaled variation: since $x_{*}=0$ and the integrand is quadratic, for every dimensionless real $\varepsilon$ one has $S(\varepsilon\eta_{n})=\frac{\varepsilon^{2}}{2}\int_{0}^{T}\bigl(m\lvert\eta_{n}'(t)\rvert_{2}^{2}-k(e\cdot\eta_{n}(t))^{2}\bigr)dt=\frac{\varepsilon^{2}}{2}\Bigl(m\int_{0}^{T}\lvert\eta_{n}'\rvert_{2}^{2}dt-k\int_{0}^{T}(e\cdot\eta_{n})^{2}dt\Bigr).$ Inserting the two integrals of step 1.2 gives $S(\varepsilon\eta_{n})=\frac{\varepsilon^{2}}{2}\cdot\frac{\ell_{0}^{2}T}{2}\Bigl(m\Bigl(\frac{n\pi}{T}\Bigr)^{2}-k\Bigr)=\frac{mT\ell_{0}^{2}}{4}\varepsilon^{2}\Bigl(\Bigl(\frac{n\pi}{T}\Bigr)^{2}-\omega^{2}\Bigr),$ using $k=m\omega^{2}$ with $\omega=\sqrt{k/m}$ of [F3]. This proves clause 2. [F3, step 1.2, algebra]

3.1 Signs for $T>\pi/\omega$: the coefficient $((n\pi/T)^{2}-\omega^{2})$ is negative for $n=1$ because $\pi/T<\omega$; it is positive for every integer $n>\omega T/\pi$ because then $n\pi/T>\omega$; both statements are read off the identity of step 2.1, and [F3] provides such an integer. Hence for $\varepsilon\ne0$ the actions $S(\varepsilon\eta_{1})$ and $S(\varepsilon\eta_{n})$ differ in sign from $S(x_{*})=0$. [F3, step 2.1, algebra]

3.2 Signs for $0<T<\pi/\omega$: then $\pi/T>\omega$, hence $(n\pi/T)^{2}\ge(\pi/T)^{2}>\omega^{2}$ for every $n\ge1$, and step 2.1 gives $S(\varepsilon\eta_{n})>0$ for $\varepsilon\ne0$. This is a statement about this family of variations only; no global minimality is asserted. [F3, step 2.1, algebra]

4.1 Smallness: by [F4] the curves $\varepsilon\eta_{n}$ converge to $x_{*}$ in the declared dimensionless $C^{2}$ metric as $\varepsilon\to0$, so every neighbourhood of $x_{*}$ in the fixed-endpoint curve class contains curves of strictly smaller and of strictly larger action by step 3.1; the zero curve is neither a local minimiser nor a local maximiser. [F4, step 3.1]

5.1 Clauses 1-4 are proved; all quantities are exact model values under the declared oscillator idealization. [step 1.1, step 2.1, step 3.1, step 4.1, step 3.2] ∎

## Remarks

- The computation shows the explicit threshold: for $T<\pi/\omega$ the oscillator's zero curve increases the action along every sine-mode variation, while for $T>\pi/\omega$ both signs occur. The mathematical analogue with the dimensionless Lagrangian $\frac12(v^{2}-\omega^{2}q^{2})$ and its second variation is recorded in the verification page of the mathematics track.
