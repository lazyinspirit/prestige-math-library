---
id: ex-em-wave-equation-prerequisites-hypothesis-boundaries
kind: example
title: "Explicit mathematical hypothesis/convention examples"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 6
proof_strategy: direct
deps:
  - cor-mean-value-theorem
  - def-wave-energy-and-energy-flux
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-continuity-real
  - def-borel-and-lebesgue-measurable-function-on-rn
  - def-ck-and-multi-index-notation-in-several-variables
  - def-countable-choice
  - def-directional-and-partial-derivatives
  - def-euclidean-inner-product
  - def-jacobian-matrix-and-gradient
  - def-laplacian-of-a-c2-function
  - def-vector-valued-derivative-and-integral
  - def-wave-equation-cauchy-data-and-wave-speed
  - cor-continuous-functions-are-borel-measurable
  - cor-differentiable-implies-continuous
  - lem-em-global-retarded-root
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-algebra-of-derivatives
  - thm-borel-sets-are-lebesgue-measurable
  - thm-chain-rule-for-total-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-em-retarded-root-and-fields
  - thm-em-wave-cauchy-kirchhoff
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-real-power-continuity-and-derivatives
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  cor-mean-value-theorem: mathematical-premise
  def-wave-energy-and-energy-flux: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-continuity-real: mathematical-premise
  def-borel-and-lebesgue-measurable-function-on-rn: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-wave-equation-cauchy-data-and-wave-speed: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  lem-em-global-retarded-root: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-em-retarded-root-and-fields: mathematical-premise
  thm-em-wave-cauchy-kirchhoff: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§47 printed pp. 110-113: the one-dimensional wave equation (47.1) and its general solution in the characteristic variables t-x/c, t+x/c; §63 printed pp. 160-163: equation (63.1) and its uniqueness footnote for the subluminal case"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§9.1.1 printed pp. 364-366: the one-dimensional wave equation and travelling-wave solutions f(z-+vt); §10.3.1 printed pp. 429-431: the retarded-time equation (10.33) and the single-retarded-point mean-velocity argument"
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§6.1 printed pp. 134-136: the wave equation and retarded/advanced solution structure; §6.4.1 printed pp. 157-159: the retarded-time equation (6.36)"
verification:
  precheck: pass
---

## Example

For clause (i) assume Countable Choice ([[def-countable-choice]]) for the Euclidean box-measure interface; the direct root counterexamples in (ii), (iii) are choice-free. Use the zero-based spatial coordinates $x=(x_0,x_1,x_2)$ and standard basis $e_0=(1,0,0)$, $e_1=(0,1,0)$, $e_2=(0,0,1)$ of [F8]. Here $C_c^\infty(\mathbb R)$ denotes the smooth real-valued functions $f:\mathbb R\to\mathbb R$ that vanish outside a compact subset of $\mathbb R$; smoothness is defined in [F3].

(i) [Plane-wave solutions with infinite spatial $L^2$ norm] Let $c>0$ and $W:=c^{-2}\partial_t^2-\Delta$ as in [[def-wave-equation-cauchy-data-and-wave-speed]] and [[def-laplacian-of-a-c2-function]]. For every $f\in C_c^\infty(\mathbb R)$ the function $u:\mathbb R^3\times\mathbb R\to\mathbb R$, $u(x,t):=f(x_1-ct)$, is of class $C^\infty$ and satisfies $Wu=0$ identically. If $f\ne0$, then for every $t$ the level set $\{x:u(x,t)\ne0\}=\mathbb R\times(ct+U)\times\mathbb R$, where $U:=\{s\in\mathbb R:f(s)\ne0\}$ is nonempty and open, is unbounded, and $\int_{\mathbb R^3}|u(x,t)|^2\,dx=+\infty$. Consequently the smooth-data existence and smoothness clause (a) of [[thm-em-wave-cauchy-kirchhoff]] carries no global finite-energy or decay conclusion: compact support of the data is a genuine hypothesis of its clause (d), not a consequence of smoothness.

(ii) [Failure of root existence without the uniform speed bound] Let $c>0$, $a>0$ and $z(s):=(\sqrt{c^2s^2+a^2},0,0)$. Then $z$ is of class $C^\infty$ on $\mathbb R$ with $|z'(s)|=\dfrac{c^2|s|}{\sqrt{c^2s^2+a^2}}<c$ for every $s\in\mathbb R$, while $\sup_{s\in\mathbb R}|z'(s)|=c$; so there is no $v_*<c$ with $|z'(s)|\le v_*$ for all $s$: the worldline is subluminal at every finite time but has no uniform subluminal bound. For the observation $(x,t)=(0,0)$ there is no root $s<t$ of $t-s=|x-z(s)|/c$: the equation would read $-s=\sqrt{c^2s^2+a^2}/c$ with $s<0$, and squaring gives $s^2=s^2+a^2/c^2$, i.e. $a=0$, a contradiction. Thus the existence clause of [[thm-em-retarded-root-and-fields]] genuinely needs its hypothesis $|z'|\le v_*<c$; the substitution denominator degenerates along this curve in the same limit.

(iii) [The event must lie off the worldline] Let $z$ be of class $C^1$ with $|z'|\le v_*<c$, and let $x=z(t)$ for some $t\in\mathbb R$. Then $s=t$ solves $t-s=|x-z(s)|/c$ trivially, and the strict decrease of $s\mapsto t-s-|x-z(s)|/c$ shows that no root $s<t$ exists; hence the exclusion of the worldline $\Gamma$ in clause (a) of [[thm-em-retarded-root-and-fields]] is a genuine hypothesis.

These are explicit mathematical checks of hypotheses and conventions of the wave and retarded-root results; no measurement, physical field identification or empirical claim is made.

## Facts & Assumptions

**Given:** A speed $c>0$, a profile $f\in C_c^\infty(\mathbb R)$ (taken nonzero in part (i) of the Verification), a parameter $a>0$ for part (ii), and a $C^1$ worldline with a uniform bound $|z'|\le v_*<c$ for part (iii).

[F1] With the partial derivatives of [F7] and the Laplacian of [F2], the wave operator of speed $c$ is $\Box_c:=\partial_t^2-c^2\Delta$ and the wave equation with source $g$ is $\Box_cu=g$; the operator used in this example is $W=c^{-2}\partial_t^2-\Delta=c^{-2}\Box_c$ ([[def-wave-equation-cauchy-data-and-wave-speed]]).

[F2] For open $U\subseteq\mathbb R^n$ and $C^2$ $h:U\to\mathbb R$, the Laplacian is $\Delta h=\operatorname{div}\nabla h=\sum_{i<n}\partial_i\partial_ih$, with the gradient of [F8]; for a $C^2$ map it is taken componentwise ([[def-laplacian-of-a-c2-function]]).

[F3] For $k\in\mathbb N$, a map is of class $C^k$ when, for every word $(i_1,\ldots,i_r)$ of coordinate indices with $0\le r\le k$, the iterated derivative $\partial_{i_r}\cdots\partial_{i_1}f$ exists and is continuous on its domain, the word of length $0$ denoting $f$ itself ([[def-ck-and-multi-index-notation-in-several-variables]]); on open Euclidean domains this is read componentwise, with the same convention for the word of length $0$, and the map is smooth when it is $C^k$ for every $k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F4] Finite componentwise sums and products of $C^k$ Euclidean maps are $C^k$, scalar multiples are included, and a composite of composable $C^k$ Euclidean maps is $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F5] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[F6] Sums, scalar multiples, products and quotients (where defined) of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]]).

[F7] For open $U\subseteq\mathbb R^m$ and $F:U\to\mathbb R^n$, the directional derivative is $D_vF(a)=\lim_{t\to0}\frac{F(a+tv)-F(a)}{t}$; for a standard basis vector $e_j$ the $j$th partial derivative is $\partial_jF(a)=D_{e_j}F(a)$ ([[def-directional-and-partial-derivatives]]).

[F8] For $F:U\to\mathbb R^n$ with all partial derivatives existing, the Jacobian matrix is $Jf(a)=(\partial_jf_i(a))$; for scalar $f$ the gradient is $\nabla f(a)=(\partial_0f(a),\ldots,\partial_{m-1}f(a))$ in the standard basis ([[def-jacobian-matrix-and-gradient]]).

[F9] For $f:A\to\mathbb R^m$ with $A\subseteq\mathbb R$ and a limit point $c\in A$, differentiability at $c$ means that the difference quotients $\frac{1}{x-c}(f(x)-f(c))$ converge, and the derivative is their limit; the notion is computed componentwise ([[def-vector-valued-derivative-and-integral]]).

[F10] On $\mathbb R^n$ the Euclidean inner product is $\langle x,y\rangle=\sum_{k<n}x_ky_k$, it is bilinear and symmetric with $\langle z,z\rangle\ge0$ and equality only for $z=0$, and the Euclidean norm is $\lVert x\rVert_2=\sqrt{\langle x,x\rangle}$ ([[def-euclidean-inner-product]]).

[F11] Let $f,g:X\to[0,+\infty]$ be measurable on a measure space. If $f\le g$ then $\int f\le\int g$; if $c>0$ then $\int cf=c\int f$, and the integral of the zero function is $0$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F12] Assume $\mathrm{AC}_\omega$. For reals $a_i\le b_i$, every box $R$ with $R^\circ\subseteq R\subseteq\overline R$ is Lebesgue measurable with $\lambda_n(R)=\prod_{i<n}(b_i-a_i)$; in particular a box of side lengths $L_1,\dots,L_n>0$ has measure $L_1\cdots L_n$, and one with some $a_i=b_i$ has measure $0$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F13] For $\alpha\in\mathbb R$ the function $x\mapsto x^\alpha$ is continuous and differentiable on $(0,\infty)$ with $(x^\alpha)'=\alpha x^{\alpha-1}$; in particular $(\sqrt x)'=1/(2\sqrt x)$ there, and $a^x$ is continuous on $\mathbb R$ for $a>0$ ([[thm-real-power-continuity-and-derivatives]]). Square-root smoothness is derived in step 1.2.

[F14] If $f:A\to\mathbb R$, $A\subseteq\mathbb R$, is differentiable at a limit point $c\in A$, then $f$ is continuous at $c$ ([[cor-differentiable-implies-continuous]]).

[F15] $f$ is continuous at $c\in A$ when for every real $\varepsilon>0$ there is $\delta>0$ with $\lvert x-c\rvert<\delta$ and $x\in A$ implying $\lvert f(x)-f(c)\rvert<\varepsilon$ ([[def-continuity-real]]).

[F16] Every continuous map $\mathbb R^n\to\mathbb R^m$ is Borel measurable ([[cor-continuous-functions-are-borel-measurable]]) in the sense of [[def-borel-and-lebesgue-measurable-function-on-rn]]; since every Borel subset of $\mathbb R^n$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]), a continuous real-valued function on $\mathbb R^n$ is measurable for the Lebesgue measure space to which the nonnegative-integral rules [F11] and the box-measure theorem [F12] refer.

[F17] $\mathrm{AC}_\omega$: every family $(X_n)_{n\in\mathbb N}$ of nonempty sets has a choice function ([[def-countable-choice]]).

[F18] Let $c>0$, $0\le v_*<c$ and $z:\mathbb R\to\mathbb R^3$ of class $C^1$ with $|z'(s)|\le v_*$ for every $s$. Then for every $(x,t)\in\mathbb R^3\times\mathbb R$ there is exactly one real root $s=s(x,t)$ of $t-s=|x-z(s)|/c$, and $s\le t$ with equality exactly when $x=z(t)$ ([[lem-em-global-retarded-root]]).

[F19] With $C=q/(4\pi\varepsilon_0)$, a $C^3$ worldline $z$ with $|z'|\le v_*<c$, $\Omega=\mathbb R^3\times\mathbb R$ and $\Gamma=\{(z(s),s)\}$, the theorem of [[thm-em-retarded-root-and-fields]] asserts: for every $(x,t)\in\Omega\setminus\Gamma$ there is exactly one $s=s(x,t)<t$ with $t-s=|x-z(s)|/c$, with the derivative formulas and uniform bounds of its clause (a); its clauses (b)-(d) give the retarded pairings, the Liénard-Wiechert fields and the far-zone remainder.

[F20] The Cauchy-Kirchhoff theorem of [[thm-em-wave-cauchy-kirchhoff]] solves $Wu=g$ on slabs from smooth data: clause (a) gives a $C^\infty$ solution for smooth data and source with no finite-energy or decay hypothesis, and clause (d) states the compact-support conclusion under the hypothesis that the data and the source vanish off fixed compact sets. No boundary condition on a finite spatial domain, no finite-total-energy hypothesis and no decay of the data at infinity is assumed or asserted.

[F21] If a real function is continuous on $[a,b]$, $a<b$, and differentiable on $(a,b)$, then $f(b)-f(a)=f'(\xi)(b-a)$ for some $\xi\in(a,b)$ ([[cor-mean-value-theorem]]). The wave energy density is $e=\tfrac12(u_t^2+c^2|Du|^2)$ ([[def-wave-energy-and-energy-flux]]).

## Verification

1.1 Smoothness and the wave equation. The map $\pi(x,t):=x_1-ct$ is affine, hence $C^\infty$ from [F3]; $f$ is $C^\infty$ and $u=f\circ\pi$ is therefore $C^\infty$ on $\mathbb R^3\times\mathbb R$ by the composition clause of [F4]. Its partial derivatives are $\partial_tu=-c\,(f'\circ\pi)$, $\partial_t^2u=c^2(f''\circ\pi)$ and $\partial_1u=f'\circ\pi$ with $\partial_0u=\partial_2u=0$, by the chain rule [F5] together with the scalar-multiple and linearity rules [F6] and the definitions of the partial derivatives and the gradient [F7, F8]; hence $\nabla u=(0,f'\circ\pi,0)$ and $\Delta u=\partial_1\partial_1u=f''\circ\pi$ by [F2]. Consequently $Wu=c^{-2}\partial_t^2u-\Delta u=f''\circ\pi-f''\circ\pi=0$ identically, with $W$ as in [F1]. [F1, F2, F3, F4, F5, F6, F7, F8, algebra]

1.2 The curve of part (ii). Let $c>0$, $a>0$ and $z(s):=(g(s),0,0)$ with $g(s):=\sqrt{c^2s^2+a^2}$. For every integer $m\ge0$, induction using [F13] gives $(d/dy)^m y^{1/2}=\bigl(\prod_{j=0}^{m-1}(1/2-j)\bigr)y^{1/2-m}$ on $(0,\infty)$, with the empty product equal to $1$; each derivative is continuous by [F13], so $y\mapsto\sqrt y$ is $C^\infty$ by [F3]. The polynomial $s\mapsto c^2s^2+a^2$ takes values in $(0,\infty)$ and is $C^\infty$ by direct repeated differentiation, so $g$ is $C^\infty$ on $\mathbb R$ by [F4], and $z$ is $C^\infty$ by [F3]. The chain rule [F5] with $(\sqrt x)'=1/(2\sqrt x)$ [F13] gives $g'(s)=c^2s/g(s)$, so $z'(s)=(c^2s/g(s),0,0)$ [F8, F9] and $\lVert z'(s)\rVert_2=c^2\lvert s\rvert/g(s)$ [F10]. One has $\lVert z'(s)\rVert_2<c$ for every $s$ because $c^2\lvert s\rvert<c\,g(s)$ is equivalent to $c^2s^2<c^2s^2+a^2$, true for $a>0$; and $c^2\lvert s\rvert/g(s)=c\cdot\frac{c\lvert s\rvert}{\sqrt{c^2s^2+a^2}}\to c$ as $\lvert s\rvert\to\infty$, so $\sup_{s}\lVert z'(s)\rVert_2=c$ and there is no $v_*<c$ with $\lVert z'(s)\rVert_2\le v_*$ for all $s$. [F3, F4, F5, F6, F8, F9, F10, F13, algebra]

1.3 Events on the worldline. Let $z$ be $C^1$ with $|z'|\le v_*<c$ and let $x=z(t)$ for some $t\in\mathbb R$; then $0=t-t=|x-z(t)|/c$, so $s=t$ solves $t-s=|x-z(s)|/c$. Applying [F18] at the event $(x,t)=(z(t),t)$: its unique root $s(x,t)$ satisfies $s(x,t)\le t$ with equality exactly when the observation point equals $z(t)$, which is exactly the present case, so $s(x,t)=t$ and there is no root strictly below $t$. Hence, for the model of [F19], which is defined on the complement of the worldline $\Gamma=\{(z(s),s)\}$, the domain restriction $x\ne z(t)$ in clause (a) is not redundant: at an event with $x=z(t)$ the retarded root below $t$ does not exist. [F10, F18, F19, algebra]

2.1 The nonzero level set. If $f=0$, step 1.1 gives $u=0$ and $U=\varnothing$; the nonemptiness and divergence claims concern only $f\ne0$. Assume $f\ne0$. The profile $f$ is differentiable on $\mathbb R$ because it is $C^\infty$ [F3], so it is continuous at every point by [F14]; hence $U=\{s:f(s)\ne0\}$, the preimage of the open set $\mathbb R\setminus\{0\}$, is open, and it is nonempty because $f$ is not the zero function. For every $t\in\mathbb R$ the equivalence $u(x,t)\ne0\Leftrightarrow f(x_1-ct)\ne0\Leftrightarrow x_1-ct\in U$ exhibits the level set as $\{x:u(x,t)\ne0\}=\mathbb R\times(ct+U)\times\mathbb R$; since $U\ne\varnothing$ and the $x_0$ and $x_2$ coordinates are unrestricted, this set is nonempty and unbounded, so for every $t$ the function $u(\cdot,t)$ does not have compact spatial support. [step 1.1, F3, F14, algebra]

2.2 The spatial $L^2$ norm diverges. Assume $f\ne0$; pick $s_0$ with $f(s_0)\ne0$ and put $\eta:=\lvert f(s_0)\rvert^2/4>0$. Continuity of $f$ at $s_0$ [F14, F15] gives $\delta>0$ with $\lvert f(s)-f(s_0)\rvert<\lvert f(s_0)\rvert/2$ for $\lvert s-s_0\rvert<2\delta$, whence $\lvert f(s)\rvert\ge\lvert f(s_0)\rvert/2$ and $\lvert f(s)\rvert^2\ge\eta$ on the interval $I:=[s_0-\delta,s_0+\delta]$. Fix $t\in\mathbb R$ and $R>0$ and put $K:=(-R,R)\times(ct+I)\times(-R,R)$, so that for $x\in K$ one has $x_1-ct\in I$ and therefore $\lvert u(x,t)\rvert^2=\lvert f(x_1-ct)\rvert^2\ge\eta\,\mathbf 1_K(x)$. The map $x\mapsto\lvert u(x,t)\rvert^2$ is $C^\infty$ on $\mathbb R^3$ by the composition and product clauses of [F4] applied to the affine map $x\mapsto x_1-ct$ and the smooth profile, hence continuous [F3] and Borel measurable with $\mathbf 1_K$ Borel; by [F16] both functions are measurable for the Lebesgue measure space, so the monotonicity and scalar rules [F11] give $\int_{\mathbb R^3}\lvert u(x,t)\rvert^2dx\ge\eta\lambda_3(K)=\eta\cdot2\delta\cdot(2R)^2$ by the box-measure theorem [F12], and the right-hand side exceeds every prescribed real number for $R$ large. Hence $\int_{\mathbb R^3}\lvert u(x,t)\rvert^2dx=+\infty$ for every $t$. Finally, the Cauchy data of $u$ at $t=0$ are the smooth functions $x\mapsto f(x_1)$ and $x\mapsto-cf'(x_1)$, whose first member does not have compact support as a function of $x\in\mathbb R^3$; by clauses (a) and (d) of [F20] the smooth-data clause carries no global finite-energy or decay conclusion, while the compact-support clause is stated for data vanishing off compact sets, so compact support is a genuine hypothesis of clause (d) and not a consequence of smoothness. The wave energy is separately infinite: choose $b>s_0$ outside the compact support of $f$, so $f(b)=0$ and [F21] gives a point $a_1\in(s_0,b)$ with $f'(a_1)=-f(s_0)/(b-s_0)\ne0$. Continuity of $f'$ gives a closed interval $I_1$ of positive length and $m_1>0$ with $|f'|^2\ge m_1$ on $I_1$. For this travelling wave [F21] and step 1.1 give $e=c^2|f'(x_1-ct)|^2$, so on $(-R,R)\times(ct+I_1)\times(-R,R)$ its integral is at least $c^2m_1|I_1|(2R)^2$, which is unbounded as $R\to\infty$ by [F11], [F12], [F16]. Thus failure of finite wave energy follows from the derivative profile, independently of the already proved infinite $L^2$ norm of $u$. Countable Choice is used in this step through the box-measure and measurability interfaces [F12, F16, F17]. [F3, F4, F11, F12, F14, F15, F16, F17, F20, F21, step 1.1, algebra]

2.3 No root at the origin for the curve of part (ii). With $z$ as in step 1.2, suppose a root $s<0$ existed for the observation $(x,t)=(0,0)$: then $-s=\lvert x-z(s)\rvert/c=\lVert z(s)\rVert_2/c=\sqrt{c^2s^2+a^2}/c$. Since $s<0$ the left side is positive, so squaring is legitimate and gives $s^2=(c^2s^2+a^2)/c^2=s^2+a^2/c^2$, hence $a^2=0$ and $a=0$, contradicting $a>0$. So no root $s<0$ exists at $(0,0)$ even though $z$ is $C^\infty$ with $\lVert z'(s)\rVert_2<c$ at every $s$; therefore the existence clause of the theorem [F19], whose hypothesis $|z'|\le v_*<c$ fails for this curve, cannot be applied here, and the uniform speed bound is a genuine hypothesis. The substitution denominator degenerates in the same limit: with $x=0$ one has $n(s)=(0-z(s))/\lVert z(s)\rVert_2=-e_0$ and $\beta(s)=z'(s)/c\to(-1,0,0)=-e_0$ as $s\to-\infty$, so $n(s)\cdot\beta(s)\to1$ and $\kappa(s)=1-n(s)\cdot\beta(s)\to0$ [F6, F10]. [F6, F10, F19, step 1.2, algebra]

3.1 Audit. Step 1.1 proves the smoothness and $Wu=0$ claims of (i), step 2.1 the structure, nonemptiness and unboundedness of the nonzero level set, and step 2.2 the divergence of the spatial $L^2$ norm together with the stated consequence for clauses (a) and (d) of the wave theorem; steps 1.2 and 2.3 prove that the pointwise subluminal curve without a uniform bound fails the root-existence conclusion and degenerates the denominator $1-n\cdot\beta$; and step 1.3 proves that events on the worldline have no retarded root below the observation time, so the exclusion of $\Gamma$ is needed. The counterexamples (ii) and (iii) are choice-free: they use only the explicit algebraic curve, the strict inequalities and the root lemma [F18]; Countable Choice is assumed only in part (i), where it enters through the box-measure and measurability interfaces [F12, F16, F17]. No measurement, physical field identification or empirical claim is made, and no quantitative physical precision is asserted. [given, step 1.1, step 2.1, step 2.2, step 1.2, step 1.3, step 2.3] ∎
