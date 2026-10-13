---
id: lem-em-harmonic-forcing-periodic-response
kind: lemma
title: "Periodic responses of $\\ddot z=\\operatorname{Re}(we^{-i\\omega t})$ and the affine classification of all solutions"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [cor-zero-derivative-implies-constant, def-interval, def-derivative, def-ck-euclidean-maps-and-diffeomorphisms, def-complex-exponential, def-complex-conjugate-real-imaginary-part-and-modulus, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-sine-and-cosine-derivatives, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-ftc-second-part, def-complex-numbers-and-arithmetic, thm-continuous-implies-integrable, cor-differentiable-implies-continuous, def-interior-closure-boundary-r]
dependency_roles:
  cor-zero-derivative-implies-constant: mathematical-premise
  def-interval: mathematical-premise
  def-derivative: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  def-interior-closure-boundary-r: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Classical Electromagnetism, node 96 'Thompson scattering' (University of Texas at Austin)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node96.html"
      locator: "eqs. (1120)-(1130) of node 96, including the differential and total Thomson cross section"
    - title: "David Tong, Electromagnetism (University of Cambridge Part II Mathematical Tripos, author-hosted complete 236-page notes)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "section 6.2 'Dipole Radiation', printed pp. 143-153, and section 6.3 'Scattering', printed pp. 154-157"
verification:
  precheck: pass
---

## Statement

Let $\omega>0$, $T:=2\pi/\omega$, $n\ge1$ and $w\in\mathbb C^n$; use the real part and complex exponential of [[def-complex-conjugate-real-imaginary-part-and-modulus]] and [[def-complex-exponential]]. Define $z_p:\mathbb R\to\mathbb R^n$ by $z_p(t):=\operatorname{Re}(-w\omega^{-2}e^{-i\omega t})$ componentwise ([[def-derivative]] for the derivative below). Then:

(a) $z_p$ is $C^\infty$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) and satisfies $z_p''(t)=\operatorname{Re}(we^{-i\omega t})$ for every $t\in\mathbb R$; it is $T$-periodic.

(b) every $C^2$ solution $z:\mathbb R\to\mathbb R^n$ of $z''(t)=\operatorname{Re}(we^{-i\omega t})$ on $\mathbb R$ has the form $z(t)=z_p(t)+a+bt$ with unique $a,b\in\mathbb R^n$.

(c) such a solution is $T$-periodic if and only if $b=0$; the $T$-periodic solutions are exactly $z_p(t)+a$, $a\in\mathbb R^n$, and their oscillating part has complex amplitude $-w/\omega^2$.

(d) [Local solutions and exact global extension] Let $I$ be any nonempty open interval, $t_*\in I$, and let $z:I\to\mathbb R^n$ be $C^2$ with the same harmonic equation on $I$. Then $z=z_p+a+bt$ on $I$ for a unique pair $a,b\in\mathbb R^n$, with $b=z'(t_*)-z_p'(t_*)$ and $a=z(t_*)-z_p(t_*)-bt_*$. The same explicit formula defines its unique global harmonic-ODE extension $Z$ on $\mathbb R$. This extension is $T$-periodic exactly when $b=0$, equivalently $z'(t_*)=z_p'(t_*)$; when $b=0$ its mean over every complete period is $a$. For general drift, the mean of its global extension over $[t,t+T]$ is $a+b(t+T/2)$. Thus periodic preparation can be imposed on the global response without requiring a driven nonlinear family to exist on $\mathbb R$. If $I$ contains at least one pair $t,t+T$, equality at that pair forces $b=0$. If $I$ contains no such pair, a condition expressed only as $z(t+T)=z(t)$ wherever both arguments belong to $I$ is vacuous and does not imply periodicity of the global extension. All affine-drift local solutions remain classified, and the original global branches (a)-(c) remain intact.

## Facts & Assumptions

**Given:** A real $\omega>0$ with $T=2\pi/\omega$, an integer $n\ge1$, a vector $w\in\mathbb C^n$, and the map $z_p:\mathbb R\to\mathbb R^n$ of the Statement with components $z_{p,j}(t)=\operatorname{Re}(-w_j\omega^{-2}e^{-i\omega t})$.

[F1] Complex exponential and Euler form: $\exp$ is entire with $\exp'=\exp$ and satisfies the addition law $\exp(z+u)=\exp z\,\exp u$; for real $\theta$ one has $e^{i\theta}=\cos\theta+i\sin\theta$, and the complex exponential extends the real one; $\cos 0=1$, $\sin 0=0$, and $\sin(m\pi)=0$ for every integer $m$, so $\sin2\pi=0$; both sine and cosine have period $2\pi$ ([[def-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-sine-and-cosine-derivatives]]).

[F2] Real and imaginary parts: for real $a,b$ one has $\operatorname{Re}(a+bi)=a$ and $\operatorname{Im}(a+bi)=b$; $\operatorname{Re}$ and $\operatorname{Im}$ are $\mathbb R$-linear; complex multiplication in real coordinates is $(a+bi)(c+si)=(ac-bs)+(as+bc)i$; conjugation is a real-field automorphism with $\overline{z+u}=\overline z+\overline u$ and $\overline{zu}=\overline z\,\overline u$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-complex-numbers-and-arithmetic]]).

[F3] One-variable calculus rules on $\mathbb R$: $\sin'=\cos$ and $\cos'=-\sin$; sums, scalar multiples and products of differentiable functions are differentiable, with $(f+g)'=f'+g'$, $(\lambda f)'=\lambda f'$ and $(fg)'=f'g+fg'$; the chain rule holds for compositions; the identity map has derivative $1$ and $t\mapsto\omega t$ has derivative $\omega$ ([[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-derivative]]).

[F4] Shift and period formulas: $\sin(x+\pi)=-\sin x$ and $\cos(x+\pi)=-\cos x$ for every real $x$, and both sine and cosine have period $2\pi$: $\sin(x+2\pi)=\sin x$ and $\cos(x+2\pi)=\cos x$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F5] Zero-derivative corollary ([[cor-zero-derivative-implies-constant]]): if $J\subseteq\mathbb R$ is order-convex ([[def-interval]]), $f:J\to\mathbb R$ is continuous on $J$ and differentiable at every interior point of $J$ with $f'=0$ there, then $f$ is constant on $J$; if $f,g:J\to\mathbb R$ are continuous on $J$ and differentiable at every interior point of $J$ with $f'=g'$ there, then $f-g$ is constant on $J$. The interior of $\mathbb R$ is $\mathbb R$, the interior of every nonempty open interval is itself, and every point of a nondegenerate interval that lies in its interior is an interior point ([[def-interior-closure-boundary-r]], [[def-interval]]).

[F6] Integral calculus: if $G:[a,b]\to\mathbb R$ is differentiable at every point of $[a,b]$ (one-sided at the endpoints) and $f:=G'$ is Riemann integrable on $[a,b]$, then $\int_a^b f=G(b)-G(a)$ ([[thm-ftc-second-part]]); a real function continuous on $[a,b]$ is Riemann integrable on $[a,b]$ ([[thm-continuous-implies-integrable]]); a function differentiable at a point of its domain that is a limit point of that domain is continuous there, so a function differentiable on an interval is continuous on it ([[cor-differentiable-implies-continuous]]).

[F7] Class conventions: a map $U\to\mathbb R^q$ on an open $U$ is $C^k$ when every component is, and $C^\infty$ when it is $C^k$ for every $k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]); the componentwise rules of [F3] show that sums, scalar multiples, products and compositions of smooth real functions are smooth.

## Proof

**Proof technique:** direct; expand the complex encoding in real components, use the elementary antiderivative $\frac{d}{dt}e^{-i\omega t}=-i\omega e^{-i\omega t}$ componentwise, classify solutions by the zero-derivative corollary, and compute the period means with the fundamental theorem of calculus.

1.1 Write $w_j=\alpha_j+i\beta_j$ with $\alpha_j=\operatorname{Re}w_j$, $\beta_j=\operatorname{Im}w_j$ real and fix the component index $j$; by [F1] $e^{-i\omega t}=\cos\omega t-i\sin\omega t$, so the product rule of [F2] with $(a,b)=(\alpha_j,\beta_j)$ and $(c,s)=(\cos\omega t,-\sin\omega t)$ gives $z_{p,j}(t)=\operatorname{Re}(-w_j\omega^{-2}e^{-i\omega t})=-\omega^{-2}(\alpha_j\cos\omega t+\beta_j\sin\omega t)$ for every real $t$. The maps $t\mapsto\omega t$, $\sin$ and $\cos$ are smooth, and the sum, scalar-multiple and product rules of [F3] give the derivatives of finite combinations, so each $z_{p,j}$ is $C^\infty$ and hence $z_p$ is $C^\infty$ by [F7]. [given, F1, F2, F3, F7]

2.1 Differentiating the display of step 1.1 componentwise with the rules of [F3] gives $z_{p,j}'(t)=\omega^{-1}(\alpha_j\sin\omega t-\beta_j\cos\omega t)$ and $z_{p,j}''(t)=\alpha_j\cos\omega t+\beta_j\sin\omega t=\operatorname{Re}((\alpha_j+i\beta_j)(\cos\omega t-i\sin\omega t))=\operatorname{Re}(w_je^{-i\omega t})$ for every $j$ and every real $t$, the middle equality by the product rule of [F2] and the last by [F1]; hence $z_p''(t)=\operatorname{Re}(we^{-i\omega t})$ componentwise. [step 1.1, F1, F2, F3]

2.2 Since $\omega(t+T)=\omega t+2\pi$, the display of step 1.1 and the period formulas $\cos(\omega t+2\pi)=\cos\omega t$, $\sin(\omega t+2\pi)=\sin\omega t$ of [F4] give $z_{p,j}(t+T)=z_{p,j}(t)$ for every $j$ and every $t\in\mathbb R$, so $z_p$ is $T$-periodic; with steps 1.1 and 2.1 this is claim (a). [step 1.1, F4, given]

3.1 Let $z:\mathbb R\to\mathbb R^n$ be $C^2$ with $z''(t)=\operatorname{Re}(we^{-i\omega t})$ on $\mathbb R$ and set $h:=z-z_p$; by step 2.1, $h''=0$ on $\mathbb R$. Fix $j$; the component $h_j$ is $C^2$, so $h_j'$ is continuous on $\mathbb R$ by [F6] and differentiable at every point of $\mathbb R$, which is the interior of $\mathbb R$ by [F5], with $(h_j')'=h_j''=0$; [F5] applied on the order-convex interval $\mathbb R$ therefore makes $h_j'$ a constant $b_j\in\mathbb R$. The map $h_j-b_j\,\mathrm{id}$ is continuous on $\mathbb R$ by [F6] and differentiable at every point with derivative $h_j'-b_j=0$, the derivative of $b_j\,\mathrm{id}$ being $b_j$ by [F3]; [F5] makes $h_j-b_j\,\mathrm{id}$ a constant $a_j$, so $h_j=a_j+b_jt$ and $z=z_p+a+bt$ with $a=(a_1,\dots,a_n)$, $b=(b_1,\dots,b_n)$. If also $z=z_p+a'+b't$ on $\mathbb R$, evaluating at $t=0$ gives $a=a'$ and then differentiating at $t=0$ gives $b=b'$, so the pair $(a,b)$ is unique; this is claim (b). [step 2.1, F3, F5, F6, given]

4.1 Let $z=z_p+a+bt$ be a solution as in step 3.1. If $b=0$, then $z=z_p+a$ is $T$-periodic by step 2.2. Conversely, if $z$ is $T$-periodic, then for every $t\in\mathbb R$ the equality $z(t+T)=z(t)$ together with $z_p(t+T)=z_p(t)$ of step 2.2 gives $b(t+T)=bt$, hence $bT=0$ and $b=0$ because $T>0$. The $T$-periodic solutions are therefore exactly the maps $z_p+a$ with $a\in\mathbb R^n$; their oscillating part is $z_p$ itself, whose defining formula $z_p(t)=\operatorname{Re}(-w\omega^{-2}e^{-i\omega t})$ exhibits the complex amplitude vector $-w/\omega^2$; this is claim (c). [step 2.2, step 3.1, given]

4.2 Let $I$ be a nonempty open interval, $t_*\in I$, and let $z:I\to\mathbb R^n$ be $C^2$ with $z''=\operatorname{Re}(we^{-i\omega t})$ on $I$; put $h:=z-z_p$ on $I$. Fixing $j$ and repeating the argument of step 3.1 on the order-convex interval $I$, every interior point of which lies in $I$ where the assumed derivatives exist, gives a constant $b_j$ on $I$ equal to $h_j'$, then a constant $a_j$ with $h_j=a_j+b_jt$ on $I$; hence $z=z_p+a+bt$ on $I$. Evaluating at $t_*$ gives $b=z'(t_*)-z_p'(t_*)$ and $a=z(t_*)-z_p(t_*)-bt_*$, and conversely those values reproduce $z$ on $I$, so the pair $(a,b)$ is unique. Define $Z(t):=z_p(t)+a+bt$ for all real $t$ with these $(a,b)$; by steps 2.1 and 2.2, $Z$ is a $C^\infty$ solution on $\mathbb R$ extending $z$. If $\tilde Z$ is any global $C^2$ solution on $\mathbb R$ agreeing with $z$ on $I$, then step 3.1 writes $\tilde Z=z_p+\tilde a+\tilde bt$ with a unique pair $(\tilde a,\tilde b)$; restricting to $I$ and using the uniqueness just proved gives $\tilde a=a$ and $\tilde b=b$, so $\tilde Z=Z$ and the extension is unique. [step 2.1, step 2.2, step 3.1, F5, given]

5.1 For $Z$ as in step 4.2, step 4.1 gives that $Z$ is $T$-periodic if and only if $b=0$, which by step 4.2 is equivalent to $z'(t_*)=z_p'(t_*)$. If $t$ and $t+T$ both lie in $I$, then $Z(t+T)-Z(t)=bT$ while $Z$ agrees with $z$ at those two arguments, so equality $z(t+T)=z(t)$ forces $bT=0$ and $b=0$. If $I$ contains no such pair, then the condition "$z(t+T)=z(t)$ whenever both $t$ and $t+T$ lie in $I$" has empty scope and is satisfied vacuously; the extension with any fixed nonzero $b$ obeys it and is not $T$-periodic, so the condition determines nothing about periodicity of the global extension. [step 4.1, step 4.2, given]

6.1 Fix $t\in\mathbb R$ and a component index $j$ and define $G_j(s):=-\omega^{-3}(\alpha_j\sin\omega s-\beta_j\cos\omega s)$ for $s\in[t,t+T]$; by the rules of [F3], $G_j$ is differentiable at every point of $[t,t+T]$ with $G_j'(s)=-\omega^{-2}(\alpha_j\cos\omega s+\beta_j\sin\omega s)=z_{p,j}(s)$. The map $z_{p,j}$ is differentiable on $\mathbb R$ by steps 1.1 and 2.1, hence continuous on $[t,t+T]$ by [F6], hence Riemann integrable on $[t,t+T]$ by [F6]; the fundamental theorem [F6] therefore gives $\int_t^{t+T}z_{p,j}=\omega^{-3}[\beta_j(\cos(\omega(t+T))-\cos\omega t)-\alpha_j(\sin(\omega(t+T))-\sin\omega t)]=0$, the vanishing because $\cos(\omega t+2\pi)=\cos\omega t$ and $\sin(\omega t+2\pi)=\sin\omega t$ by [F4] and $\omega T=2\pi$. Summing over $j$ and dividing by $T$ gives mean zero for $z_p$ over $[t,t+T]$. For the affine part put $P(s):=as+bs^2/2$, differentiable with $P'(s)=a+bs$ by [F3]; the same fundamental theorem, the integrand $s\mapsto a+bs$ being continuous, gives $\frac1T\int_t^{t+T}(a+bs)\,ds=\frac{P(t+T)-P(t)}T=a+\frac{b((t+T)^2-t^2)}{2T}=a+b(t+\frac T2)$. Adding the two computations, the mean of $Z$ over $[t,t+T]$ is $a+b(t+T/2)$ for every real $t$, and it equals $a$ for every $t$ exactly when $b=0$, which by step 5.1 is exactly the periodicity condition; then the mean over every complete period is $a$. This completes the proof of (d) and of the lemma. [step 5.1, F3, F4, F6, algebra] ∎

## Remarks

- The proof uses no choice principle: the exponential, sine and cosine interfaces, the real-linear algebra of $\operatorname{Re}$ and $\operatorname{Im}$, the zero-derivative corollary and the fundamental theorem are all constructive, and the only selections made are of finitely many components of the fixed vectors $a$ and $b$.
- The affine drift is deliberately retained: the lemma does not assert that every solution family is periodic, only that a specified periodic preparation selects the solutions with $b=0$, and that this selection can be imposed on the unique global extension of any local solution even when no global driven nonlinear family is available.
- The local-interval clauses are not cosmetic. For an interval $I$ shorter than $T$ the equation $z(t+T)=z(t)$ is never instantiated inside $I$, so it cannot test periodicity; the global extension and its mean are the exact objects that the periodic-preparation hypothesis constrains.
