---
id: lem-sr-uniform-low-speed-taylor-remainder
kind: lemma
domain: mathematics
title: 'The uniform second-order Taylor remainder of $z\mapsto(1-z)^{-1/2}$ on $[0,z_0]$'
status: published
origin: session
dependency_level: 0
deps: [cor-taylor-remainder-bound, thm-real-power-continuity-and-derivatives, thm-real-power-agrees-with-rational-exponent, def-rational-power, thm-chain-rule, thm-algebra-of-derivatives, lem-derivative-of-a-power, lem-rational-power-monotone, lem-rational-power-laws, lem-of-inverse-positive, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, thm-of-archimedean]
dependency_roles:
  thm-of-archimedean: mathematical-premise
  lem-of-triangle-inequality: mathematical-premise
  cor-taylor-remainder-bound: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-real-power-agrees-with-rational-exponent: mathematical-premise
  def-rational-power: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  lem-rational-power-monotone: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  lem-of-inverse-positive: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'J. Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I, Section 4.3, Theorem 4.3.2, printed pp. 172-173 "Taylor''s theorem" (Taylor''s theorem with the Lagrange remainder and its error estimate)'
      url: 'https://www.jirka.org/ra/realanal.pdf'
    - title: 'MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes (Taylor''s theorem, the Lagrange remainder and the differentiation rules)'
      url: 'https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $z_0\in[0,1)$ and define $f:(-\infty,1)\to\mathbb R$ by $f(z):=(1-z)^{-1/2}=\bigl((1-z)^{1/2}\bigr)^{-1}$, the reciprocal of the nonnegative square root, with rational powers as in [[def-rational-power]]; put $K(z_0):=\tfrac38(1-z_0)^{-5/2}$.

(a) $f$ is differentiable on $(-\infty,1)$ with $f'(z)=\tfrac12(1-z)^{-3/2}$, and twice differentiable there with $f''(z)=\tfrac34(1-z)^{-5/2}$; in particular $|f''(z)|\le\tfrac34(1-z_0)^{-5/2}$ for every $z\in[0,z_0]$.

(b) For every $z\in[0,z_0]$ there is a real $R(z)$ with $$f(z)=1+\tfrac z2+R(z),\qquad |R(z)|\le K(z_0)\,z^2,$$ so $|f(z)-1|\le\tfrac z2+K(z_0)z^2$ for $z\in[0,z_0]$. Consequently, for every $\eta>0$, $$0\le z\le\min\!\left\{z_0,\frac{\eta}{\tfrac12+K(z_0)z_0}\right\}\ \Longrightarrow\ |f(z)-1|\le\eta ;$$ the display is the quantitative form of $f(z)\to1$ as $z\to0^+$ used by [[lem-sr-uniform-galilean-limit-of-boost-charts]].

The lemma is a statement of real analysis about the single function $f$; it attaches no physical meaning to $z$ and makes no claim about a Lorentz factor or a physical velocity.

## Facts & Assumptions

**Given:** A real number $z_0\in[0,1)$; the function $f:(-\infty,1)\to\mathbb R$, $f(z)=(1-z)^{-1/2}=\bigl((1-z)^{1/2}\bigr)^{-1}$, with rational powers as in [[def-rational-power]]; and the constant $K(z_0)=\tfrac38(1-z_0)^{-5/2}$.

[L1] For $a>0$ and rational $r$ the rational power $a^r$ is defined and positive, and $a^{-r}=(a^r)^{-1}$; on rational exponents it agrees with the real power $\exp(r\log a)$ ([[def-rational-power]], [[lem-rational-power-laws]], [[thm-real-power-agrees-with-rational-exponent]]). In particular $1^{-1/2}=1$.

[L2] For real $\alpha$ the function $x\mapsto x^\alpha$ is differentiable on $(0,\infty)$ with derivative $\alpha x^{\alpha-1}$ ([[thm-real-power-continuity-and-derivatives]]).

[L3] The identity function $p_1(z)=z$ has derivative $1$, the affine map $g(z)=1-z$ has derivative $-1$, and derivatives obey the sum, scalar-multiple and chain rules on their stated domains ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]]).

[L4] If $0\le z\le z_0$ then $0<1-z_0\le 1-z$, and for positive bases $a\le b$ and rational $r>0$ one has $a^r\le b^r$ (with equality exactly when $a=b$); reciprocals of positive elements reverse the order ([[lem-rational-power-monotone]], [[lem-of-inverse-positive]]).

[L5] Taylor's theorem with the Lagrange remainder: if $f$ has derivatives through order $n+1$ on the closed interval between $a$ and $x$ with endpoint continuity, and $|f^{(n+1)}(t)|\le M$ throughout that interval, then $|R_{n,a}f(x)|\le M\,|x-a|^{n+1}/(n+1)!$ ([[cor-taylor-remainder-bound]]).

[L6] Absolute value: $|u+v|\le|u|+|v|$, $|uv|=|u|\,|v|$, $|u|=u$ for $u\ge0$, and $|u|=0$ if and only if $u=0$ ([[def-abs-value]], [[lem-of-abs-value]], [[lem-of-triangle-inequality]]).

[L7] The canonical natural numbers are cofinal in $\mathbb R$: for every real $b$ there is an integer $N>b$ ([[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 The composite form of $f$. Define $g:(-\infty,1)\to(0,\infty)$ by $g(z):=1-z$ and $h:(0,\infty)\to(0,\infty)$ by $h(y):=y^{-1/2}$. For every $z<1$ the base $1-z$ is positive, so $f=h\circ g$; and by [L1] the rational power $h(y)=y^{-1/2}$ equals the real power $\exp\bigl(-\tfrac12\log y\bigr)$, so the derivative statement of [L2] applies to $h$. [given, L1, L2]

1.2 The inner derivative. The constant function $z\mapsto1$ has derivative $0$ and the identity $p_1$ has $p_1'\equiv1$ by [L3]; the difference rule of [[thm-algebra-of-derivatives]] therefore gives $g'(z)=-1$ for every $z\in(-\infty,1)$, and each point of $(-\infty,1)$ is a limit point of that interval. [L3]

2.1 The outer derivative. By [L2] with $\alpha=-\tfrac12$, the function $y\mapsto y^{-1/2}$ is differentiable on $(0,\infty)$ with derivative $\bigl(y^{-1/2}\bigr)'=-\tfrac12 y^{-3/2}$; by step 1.1 this is $h'$. [L2, step 1.1]

3.1 First derivative of $f$. Fix $z\in(-\infty,1)$. Then $g(z)=1-z>0$ is a limit point of $(0,\infty)$, so the chain rule [L3] applied to $f=h\circ g$ at $z$ gives $$f'(z)=h'\bigl(g(z)\bigr)g'(z)=-\tfrac12(1-z)^{-3/2}\cdot(-1)=\tfrac12(1-z)^{-3/2}.$$ [step 1.2, step 2.1, L3, algebra]

4.1 Second derivative of $f$. The function $z\mapsto\tfrac12(1-z)^{-3/2}$ is the scalar multiple by $\tfrac12$ of the composite of $g$ with $y\mapsto y^{-3/2}$; the rational power $y^{-3/2}$ agrees with the real power by [L1], so [L2] with $\alpha=-\tfrac32$ gives it derivative $-\tfrac32 y^{-5/2}$ on $(0,\infty)$, and the scalar rule and the chain rule [L3] give $$f''(z)=\tfrac12\Bigl(-\tfrac32(1-z)^{-5/2}\Bigr)(-1)=\tfrac34(1-z)^{-5/2}$$ for every $z\in(-\infty,1)$, which also covers the claim that $f$ is twice differentiable there. [step 3.1, L1, L2, L3, algebra]

5.1 Uniform bound on $[0,z_0]$. Let $z\in[0,z_0]$. By [L4], $0<1-z_0\le1-z$, so $(1-z_0)^{5/2}\le(1-z)^{5/2}$ and, taking reciprocals of positive elements, $(1-z)^{-5/2}\le(1-z_0)^{-5/2}$. Multiplying by $\tfrac34>0$ and using $f''>0$ by [L1] to read $|f''|=f''$ ([L6]) gives $|f''(z)|=f''(z)\le\tfrac34(1-z_0)^{-5/2}$ for every $z\in[0,z_0]$. [step 4.1, L1, L4, L6, algebra]

6.1 The Taylor remainder. Fix $z\in[0,z_0]$. Since $[0,z]\subseteq(-\infty,1)$, the function $f$ has derivatives through order $2$ on the closed interval between $0$ and $z$, continuous at the endpoints; by step 5.1 the second derivative is bounded there by $M:=\tfrac34(1-z_0)^{-5/2}$. Applying [L5] with $n=1$, $a=0$ and this $z$ gives, for $R(z):=R_{1,0}f(z)=f(z)-f(0)-f'(0)z$, $$|R(z)|\le\frac{M}{2!}\,z^2=\frac{3}{8}(1-z_0)^{-5/2}z^2=K(z_0)z^2 .$$ Here $f(0)=1^{-1/2}=1$ by [L1] and $f'(0)=\tfrac12$ by step 3.1, so the displayed expansion of $f$ is $f(z)=1+\tfrac z2+R(z)$. [step 3.1, step 5.1, L1, L5, algebra]

7.1 The quantitative limit. For $z\in[0,z_0]$, steps 6.1 and 3.1 give $|f(z)-1|=\bigl|\tfrac z2+R(z)\bigr|\le\tfrac z2+K(z_0)z^2=z\bigl(\tfrac12+K(z_0)z\bigr)\le z\bigl(\tfrac12+K(z_0)z_0\bigr)$ by [L6] and $K(z_0)>0$, $z\le z_0$, which is the first displayed assertion of (b); if in addition $0\le z\le\eta/(\tfrac12+K(z_0)z_0)$ for an $\eta>0$, then $|f(z)-1|\le\eta$, which is the second displayed assertion; and the bound is not asserted for $z$ outside $[0,z_0]$. [step 6.1, L1, L6, algebra]

8.1 Failure of a single remainder constant on $[0,1)$. For every integer $N\ge2$ put $z_N=1-N^{-2}\in(0,1)$. By [L1], $f(z_N)=N$, so the exact remainder $r_N:=f(z_N)-1-z_N/2=N-1-z_N/2$ satisfies $r_N>N-3/2$. Given $B\ge0$, choose $N>\max\{2,B+3/2\}$ by [L7]; then $|r_N|>B\ge Bz_N^2$. Thus no finite $B\ge0$ bounds $|f(z)-1-z/2|$ by $Bz^2$ on all of $[0,1)$. [step 6.1, L1, L6, L7, algebra] ∎

## Remarks

The constants depend on $z_0$ alone, and the estimate is uniform over the whole interval $[0,z_0]$; as $z_0\uparrow1$ the constant $K(z_0)=\tfrac38(1-z_0)^{-5/2}$ grows without bound. The actual impossibility of a single remainder constant on $[0,1)$ is proved by the family in step 8.1, which explains the bounded speed window in the consumers. No physical quantity and no physical restriction are introduced here: $z$ is an arbitrary real parameter, and the two in-run consumers named in the statement are the items that apply this estimate to the model's velocities.
