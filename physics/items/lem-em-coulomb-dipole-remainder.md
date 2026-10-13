---
id: lem-em-coulomb-dipole-remainder
kind: lemma
title: "Monopole-dipole expansion with an explicit remainder for compactly supported $L^1$ densities"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [thm-of-square-roots, def-l-one-of-a-measure, def-integral-over-a-measurable-set, def-euclidean-inner-product, def-metric-ball, thm-newton-leibniz-with-interior-derivative, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, thm-integral-triangle-inequality, thm-monotonicity-of-the-integral, def-countable-choice, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-measure-null-set-and-almost-everywhere, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-cauchy-schwarz-and-the-euclidean-norm, def-integrable-real-and-complex-functions-and-their-integrals, cor-continuous-functions-are-borel-measurable, def-borel-sigma-algebra]
dependency_roles:
  thm-of-square-roots: mathematical-premise
  def-l-one-of-a-measure: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis, 2014), §1.10, §1.12, §2.7"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    - title: "S. Teitel, PHY 415 (University of Rochester), Unit 2-4: Electric Multipole Expansion"
      url: "https://www.pas.rochester.edu/~stte/phy415F23/units/unit_2-4.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]). Let $a>0$ and let $\rho\in L^1(\lambda_3)$ be a real or complex valued Lebesgue integrable function on $\mathbb R^3$ that vanishes $\lambda_3$-almost everywhere outside the closed ball $B_a:=\{y\in\mathbb R^3:\lVert y\rVert_2\le a\}$ ([[def-l-one-of-a-measure]], [[def-metric-ball]]). Put

$$Q:=\int\rho\,d\lambda_3,\qquad p:=\int y\,\rho(y)\,d\lambda_3\in\mathbb C^3,\qquad \lVert\rho\rVert_1:=\int\lvert\rho\rvert\,d\lambda_3,$$

the vector $p$ being defined by $p_k:=\int y_k\rho(y)\,d\lambda_3(y)$ for the canonical coordinates $k<3$, namely $k\in\{0,1,2\}$, and $\langle p,x\rangle:=\sum_{k<3}p_kx_k$ being the complex-bilinear coordinate contraction, with no complex conjugation, which agrees with the real Euclidean pairing when $p$ is real; if $\rho$ is real-valued then $Q$ is real and $p\in\mathbb R^3$, while $R(x)$ below is real in that case and complex in general. Then for every $x\in\mathbb R^3$ with $r:=\lVert x\rVert_2\ge2a>0$,

$$\int\frac{\rho(y)}{\lVert x-y\rVert_2}\,d\lambda_3(y)=\frac Qr+\frac{\langle p,x\rangle}{r^3}+R(x),\qquad R(x):=\int_{B_a}\rho(y)\Bigl(\frac1{\lVert x-y\rVert_2}-\frac1r-\frac{\langle x,y\rangle}{r^3}\Bigr)d\lambda_3(y),$$

and the remainder satisfies the explicit bound

$$\lvert R(x)\rvert\le\frac{16\,a^2\,\lVert\rho\rVert_1}{r^3}.$$

In the all-space kernel integral define $K_x(y)=\lVert x-y\rVert_2^{-1}$ for $y\ne x$ and $K_x(x)=0$, so its integrand means $\rho K_x$ and is an everywhere-defined measurable function. This convention cannot affect the integral: $x\notin B_a$ and the density vanishes almost everywhere outside $B_a$. All integrals are Lebesgue integrals; the closed ball $B_a$ is Borel and $\chi_{B_a}\rho$ is integrable. The constant $16$ is permissible but not sharp, and $Q$, $p$ and $\lVert\rho\rVert_1$ are finite. No derivative of the remainder in $x$ is asserted.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; a real $a>0$; a real or complex $\rho\in L^1(\lambda_3)$ vanishing $\lambda_3$-almost everywhere outside $B_a=\{y:\lVert y\rVert_2\le a\}$; and a fixed $x\in\mathbb R^3$ with $r=\lVert x\rVert_2\ge2a$.

[F1] Euclidean inner product and norm: $\langle x,y\rangle=\sum_{k<3}x_ky_k$ and $\lVert x\rVert_2=\sqrt{\langle x,x\rangle}$; Cauchy-Schwarz gives $\lvert\langle x,y\rangle\rvert\le\lVert x\rVert_2\lVert y\rVert_2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F2] Positive square roots exist uniquely ([[thm-of-square-roots]]). Chain rule and algebra of derivatives for Euclidean maps, with the $C^k$ convention for vector and scalar fields ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F3] Fundamental theorem with interior derivative: if $G:[0,1]\to\mathbb R$ is continuous and differentiable on $(0,1)$ and $f$ is Riemann integrable on $[0,1]$ with $f=G'$ on $(0,1)$, then $\int_0^1f=G(1)-G(0)$ ([[thm-newton-leibniz-with-interior-derivative]]).

[F4] Monotonicity and two-sided bounds for the Riemann integral: if $f\le g$ on $[0,1]$ then $\int_0^1f\le\int_0^1g$, and $m\le f\le M$ gives $m\le\int_0^1f\le M$ ([[thm-monotonicity-of-the-integral]]).

[F5] $L^1(\lambda_3)$ is a complex vector space and the Lebesgue integral is complex-linear on it: $\int(\alpha f+\beta g)=\alpha\int f+\beta\int g$; integrable functions are measurable ([[def-l-one-of-a-measure]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F6] Triangle inequality for the Lebesgue integral: $\lvert\int f\,d\lambda\rvert\le\int\lvert f\rvert\,d\lambda$ for $f\in L^1(\lambda_3)$ ([[thm-integral-triangle-inequality]]).

[F7] Monotonicity and nonnegative homogeneity of the nonnegative integral, and the integral over a measurable set: for measurable $0\le f\le h$ one has $\int f\le\int h$, for $c>0$ one has $\int cf=c\int f$, and $\int_Ef\,d\lambda=\int f\chi_E\,d\lambda$ for nonnegative measurable $f$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-over-a-measurable-set]]).

[F8] Almost everywhere equality: the definition of a property holding $\lambda_3$-almost everywhere, and the equivalence, for $f,g\in L^1(\lambda_3)$, of $f=g$ a.e. with $\int_Af=\int_Ag$ for every measurable $A$ ([[def-measure-null-set-and-almost-everywhere]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F9] Measurability: continuous maps $\mathbb R^n\to\mathbb R^m$ are Borel measurable under $\mathrm{AC}_\omega$, and the Borel $\sigma$-algebra contains the open sets and hence the closed sets ([[cor-continuous-functions-are-borel-measurable]], [[def-borel-sigma-algebra]]).

## Proof

**Proof technique:** direct; reduce the kernel to a one-variable function on the parameter segment, apply the fundamental theorem twice to obtain a Taylor identity with explicit second-derivative bound, then integrate against the density.

1.1 Fix $y\in B_a$ and define $w(s):=x-sy$ for $s\in\mathbb R$, the open set $J_y:=\{s\in\mathbb R:w(s)\ne0\}$, and $h:J_y\to\mathbb R$ by $h(s):=\lVert w(s)\rVert_2^{-1}$. For $0\le s\le1$ one has $\lVert w(s)\rVert_2\ge r-s\lVert y\rVert_2\ge r-a\ge r/2>0$ by [F1], so $[0,1]\subseteq J_y$ and $h$ is of class $C^2$ near $[0,1]$. To justify the root regularity, for $u>0$ rationalization gives $|\sqrt{u+\eta}-\sqrt u|\le|\eta|/\sqrt u$ and $(\sqrt{u+\eta}-\sqrt u)/\eta=1/(\sqrt{u+\eta}+\sqrt u)$ for small nonzero $\eta$. Thus the root is continuous and has derivative $1/(2\sqrt u)$; the quotient rule makes this derivative continuously differentiable, so the reciprocal root is $C^2$. Composing with the positive polynomial $\langle w,w\rangle$ and using [F2] now gives $h'(s)=\langle w(s),y\rangle\lVert w(s)\rVert_2^{-3}$ and $h''(s)=-\lVert y\rVert_2^2\lVert w(s)\rVert_2^{-3}+3\langle w(s),y\rangle^2\lVert w(s)\rVert_2^{-5}$. [given, F1, F2, algebra]

2.1 By Cauchy-Schwarz [F1], $\lvert\langle w(s),y\rangle\rvert\le\lVert w(s)\rVert_2\lVert y\rVert_2$, so the terms of step 1.1 give $\lvert h''(s)\rvert\le\lVert y\rVert_2^2\lVert w(s)\rVert_2^{-3}+3\lVert y\rVert_2^2\lVert w(s)\rVert_2^{-3}=4\lVert y\rVert_2^2\lVert w(s)\rVert_2^{-3}$. Since $\lVert w(s)\rVert_2\ge r-a$ and $r-a\ge r/2$ for $r\ge2a$, this is at most $4\lVert y\rVert_2^2(r-a)^{-3}\le32\lVert y\rVert_2^2r^{-3}$ for every $s\in[0,1]$. [step 1.1, F1, algebra]

3.1 Put $G(s):=(1-s)h'(s)+h(s)$ on $[0,1]$. $G$ is continuous on $[0,1]$ and differentiable on $(0,1)$ with $G'(s)=(1-s)h''(s)$, a continuous hence Riemann integrable function on $[0,1]$; the fundamental theorem [F3] applied to $G$ and $f:=(1-s)h''(s)$ therefore gives $R_y(x):=\int_0^1(1-s)h''(s)\,ds=G(1)-G(0)=h(1)-h(0)-h'(0)$. Consequently $\lVert x-y\rVert_2^{-1}=h(1)=\lVert x\rVert_2^{-1}+\langle x,y\rangle r^{-3}+R_y(x)$, with $h(0)=r^{-1}$ and $h'(0)=\langle x,y\rangle r^{-3}$ by step 1.1; and monotonicity [F4] applied to $-|h''|\le(1-s)h''\le|h''|$ together with step 2.1 gives $\lvert R_y(x)\rvert\le\int_0^1(1-s)\lvert h''(s)\rvert\,ds\le32\lVert y\rVert_2^2r^{-3}\int_0^1(1-s)\,ds=16\lVert y\rVert_2^2r^{-3}\le16a^2r^{-3}$. [step 2.1, F3, F4, algebra]

4.1 The numbers $Q$, $p$, $\lVert\rho\rVert_1$ and the remainder are finite and well defined. Indeed, for each $k<3$ one has $\lvert\rho y_k\rvert\le a\lvert\rho\rvert$ on $B_a$ and $\rho y_k=0$ almost everywhere off $B_a$, so every scalar component $y_k\rho$ lies in $L^1(\lambda_3)$ and $p\in\mathbb C^3$ is finite by [F5] and [F7]; for the remainder, the function obtained by extending $y\mapsto\bigl(\lVert x-y\rVert_2^{-1}-r^{-1}-\langle x,y\rangle r^{-3}\bigr)$ from $B_a$ by zero is Borel on $\mathbb R^3$, because the bracket is continuous on the open set $\{\lVert y\rVert_2<r\}\supseteq B_a$ by [F9] (the denominator $\lVert x-y\rVert_2\ge r-a>0$ is bounded away from zero on $B_a$) and $\chi_{B_a}$ is the indicator of a closed hence Borel set, and its product with $\rho$ is bounded in modulus by $\lvert\rho\rvert$ times the finite constant $C:=a^{-1}+r^{-1}+ar^{-2}$, since $\lVert x-y\rVert_2\ge r-a\ge a$ and $\lvert\langle x,y\rangle\rvert r^{-3}\le ar^{-2}$ on $B_a$; hence the product with $\rho$ lies in $L^1(\lambda_3)$ by [F5] and [F7]. [given, step 3.1, F1, F5, F7, F9, algebra]

5.1 The stated expansion holds. Replacing $\rho$ by its representative $\chi_{B_a}\rho$ changes $Q$, $p$, $\lVert\rho\rVert_1$ and the left-hand integral by nothing, by [F8], so it suffices to prove the identity for $\chi_{B_a}\rho$, for which the pointwise identity of step 3.1 holds at every $y\in B_a$. For that representative, writing the left-hand integrand as $\rho(y)\chi_{B_a}(y)K_x(y)$ and using $\chi_{B_a}=\chi_{B_a}^2$, linearity [F5] of the Lebesgue integral on the space of integrable functions gives $\int\rho(y)\lVert x-y\rVert_2^{-1}d\lambda_3(y)=r^{-1}\int\rho\,d\lambda_3+r^{-3}\sum_{k<3}x_k\int y_k\rho(y)\,d\lambda_3+R(x)=Q/r+\langle p,x\rangle r^{-3}+R(x)$, with $R(x)$ as displayed in the Statement; the three summands are integrable by step 4.1 and the finite complex-linear combination is legitimate. The contraction is exactly $\sum_{k<3}x_kp_k$ in the Statement, so no conjugation or coordinate relabelling is used. For real $\rho$, each $p_k$ and $Q$ is real and the real kernel makes $R(x)$ real; the same identity and modulus estimate hold for complex $\rho$ by complex linearity. [step 3.1, step 4.1, F5, F7, F8, algebra]

6.1 The bound holds: by the triangle inequality [F6] and monotonicity [F7], $\lvert R(x)\rvert\le\int_{B_a}\lvert\rho(y)\rvert\bigl\lvert\lVert x-y\rVert_2^{-1}-r^{-1}-\langle x,y\rangle r^{-3}\bigr\rvert d\lambda_3(y)\le16a^2r^{-3}\int\lvert\rho\rvert\,d\lambda_3=16a^2\lVert\rho\rVert_1r^{-3}$, the middle inequality being the pointwise bound $16a^2r^{-3}$ for the bracket on $B_a$ from step 3.1 and the final equality the definition of $\lVert\rho\rVert_1$. Hence the expansion and the explicit remainder bound hold for every $r\ge2a$. [step 3.1, step 5.1, F6, F7, algebra] ∎

## Remarks

- The hypothesis is almost-everywhere support in the closed ball, not continuity of $\rho$ and not compact support in the topological sense; the moments and the integral are unchanged by modification on null sets, and the remainder bound is valid for every admissible representative.
- Only the explicit kernel and a one-variable second-order Taylor identity are used; no decay theorem for Newtonian potentials and no derivative estimate of the remainder in $x$ is invoked, and none is proved here.
