---
id: thm-cm-action-variable-derivative
kind: theorem
title: "The action variable of a two-simple-turning-point family is $C^1$ with derivative $T(E)/(2\\pi)$, the period quadrature over $2\\pi$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-one-dimensional-action-variable, def-interval, def-ck-euclidean-maps-and-diffeomorphisms, def-continuity-real, thm-euclidean-inverse-function-theorem, thm-substitution, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-chain-rule, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, cor-primitives-of-a-continuous-function, thm-continuous-implies-integrable, thm-monotonicity-of-the-integral, thm-extreme-value-metric, lem-integral-elementary-bounds]
dependency_roles:
  def-cm-one-dimensional-action-variable: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-substitution: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  lem-integral-elementary-bounds: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §4.5.3, printed pp. 108-111, Eqs. (4.136)-(4.142): $I=\\frac1{2\\pi}\\oint p\\,\\mathrm dq$, the varying-endpoint cancellation and the identity $\\mathrm dE/\\mathrm dI=\\omega=2\\pi/T$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 10: the action variable and its energy derivative for a periodic one-dimensional motion"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let $J_0\subseteq\mathbb R$ be an open interval, let $U:J_0\to\mathbb R$ be of
class $C^3$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), let $m>0$, let
$E_0<E_1$, and let $a,b:(E_0,E_1)\to J_0$ be functions with
$a(E)<b(E)$, $U(a(E))=U(b(E))=E$, $U(q)<E$ for $a(E)<q<b(E)$, and

$$U'\bigl(a(E)\bigr)<0<U'\bigl(b(E)\bigr)\qquad(E_0<E<E_1)$$

(the energy $E$ has exactly the two simple turning points $a(E)$, $b(E)$ in
$J_0$). Then:

1. $a$ and $b$ are of class $C^1$ on $(E_0,E_1)$;
2. the action variable $J_{\mathrm{a}}$ of
   [[def-cm-one-dimensional-action-variable]] is of class $C^1$ on
   $(E_0,E_1)$, and for every $E\in(E_0,E_1)$
   $$J_{\mathrm{a}}'(E)=\frac{1}{2\pi}T(E),\qquad T(E):=\sqrt{2m}\int_{a(E)}^{b(E)}\frac{\mathrm dq}{\sqrt{E-U(q)}}\in(0,\infty),$$
   where the integral is the improper integral over the open interval
   $(a(E),b(E))$, convergent at both endpoints.

## Facts & Assumptions

**Given:** The data $J_0,U,m,E_0,E_1,a,b$ of the statement, with $U$ of class $C^3$, exactly two simple turning points, and $U<E$ in between.

[L1] The Euclidean inverse function theorem: if $F$ is $C^1$ near $c$ and $DF(c)$ is invertible, then $F$ restricts to a $C^1$ bijection from a neighbourhood of $c$ onto a neighbourhood of $F(c)$ with $C^1$ inverse ([[thm-euclidean-inverse-function-theorem]]). A $C^k$ map with invertible derivative has a $C^k$ local inverse by the same theorem applied to the derivative and induction on smoothness; in the one-variable case $U'(\xi)\ne0$ makes $\xi\mapsto U(\xi)$ a $C^3$ diffeomorphism near $\xi$ onto its image.

[L2] Leibniz's rule on a compact rectangle: for continuous $g,h$ on $[a,b]\times[c,d]$ with $x\mapsto g(x,t)$ differentiable on $(a,b)$ with derivative $h(x,t)$, the function $x\mapsto\int_c^d g(x,t)\,\mathrm dt$ is differentiable with derivative $\int_c^d h(x,t)\,\mathrm dt$; with the chain rule this gives the variable-limit rule $\frac{\mathrm d}{\mathrm dE}\int_c^{z(E)}G(E,z)\,\mathrm dz=G(E,z(E))z'(E)+\int_c^{z(E)}\partial_EG(E,z)\,\mathrm dz$ ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]], [[thm-chain-rule]]).

[L3] Substitution: for $\varphi$ differentiable on $[c,d]$ with integrable $\varphi'$ and $f$ continuous on an interval containing $\varphi([c,d])$, $\int_{\varphi(c)}^{\varphi(d)}f=\int_c^d(f\circ\varphi)\varphi'$ ([[thm-substitution]]).

[L4] A continuous real function on a nonempty compact metric space attains a maximum ([[thm-extreme-value-metric]]); the integral is monotone and additive, and a continuous nonnegative function with a positive value has positive integral ([[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]], [[thm-continuous-implies-integrable]]).

[L5] Continuous functions on intervals have primitives, sums, products and quotients with nonvanishing denominators of $C^k$ functions are $C^k$, and the square root is $C^1$ on $(0,\infty)$ with derivative $1/(2\sqrt{\ })$ ([[cor-primitives-of-a-continuous-function]], [[thm-algebra-of-derivatives]], [[thm-algebra-of-continuous-functions]], [[thm-chain-rule]]).

## Proof

**Proof technique:** direct.

1.1 Fix $E_*\in(E_0,E_1)$. Since $U'(a(E_*))\ne0$ and $U'(b(E_*))\ne0$, the inverse function theorem [L1] applied to $U$ at $a(E_*)$ and at $b(E_*)$ gives $\delta>0$ and $C^3$ (hence $C^1$) functions $A,B:(E_*-\delta,E_*+\delta)\to J_0$ with $U(A(E))=U(B(E))=E$, $A(E_*)=a(E_*)$ and $B(E_*)=b(E_*)$. Shrinking $\delta$, continuity gives $A<B$ on the smaller interval. For every such $E$, the two real numbers $A(E)$ and $B(E)$ are distinct solutions of $U(q)=E$; by hypothesis the only two solutions in $J_0$ are $a(E)<b(E)$, so $\{A(E),B(E)\}=\{a(E),b(E)\}$; since $A<B$ and $a<b$, this forces $a=A$ and $b=B$ on that neighbourhood. Hence $a$ and $b$ are $C^1$ near the arbitrary point $E_*$, which is clause 1. [given, L1, choose, algebra]

2.1 Fix $E_*$ again. Since $U'$ is continuous and $U'(a(E_*))<0<U'(b(E_*))$, choose disjoint neighborhoods of $a(E_*)$ and $b(E_*)$ on which $U'<0$ and $U'>0$, respectively. Choose $q_1,q_2$ in these neighborhoods with $a(E_*)<q_1<q_2<b(E_*)$. By continuity of $a$ and $b$ from step 1.1, shrink $\delta>0$ so that for $|E-E_*|<\delta$, $a(E)$ and $q_1$ remain in the first neighborhood, $q_2$ and $b(E)$ remain in the second, and $a(E)<q_1<q_2<b(E)$. Thus $U$ is strictly decreasing on $[a(E),q_1]$ and strictly increasing on $[q_2,b(E)]$. On this energy interval write $$M(E):=\int_{q_1}^{q_2}\sqrt{2m(E-U(q))}\,\mathrm dq,\qquad L(E):=\int_{a(E)}^{q_1}\sqrt{2m(E-U(q))}\,\mathrm dq,\qquad R(E):=\int_{q_2}^{b(E)}\sqrt{2m(E-U(q))}\,\mathrm dq,$$ so that $J_{\mathrm a}=(L+M+R)/\pi$ there. [given, step 1.1, construct, algebra]

3.1 The function $u(E,q):=\sqrt{2m(E-U(q))}$ is continuous on the compact rectangle $[E_*-\delta,E_*+\delta]\times[q_1,q_2]$ and $\partial_Eu(E,q)=m/\sqrt{2m(E-U(q))}$ is continuous there, because $U(q)<E_*$ for every $q\in[q_1,q_2]$ and $U$ is continuous on the compact interval, so that $E-U(q)\ge\epsilon>0$ on the rectangle after shrinking $\delta$ [L4, L5]. Hence by [L2] the middle term is $C^1$ with $$M'(E)=\int_{q_1}^{q_2}\frac{m\,\mathrm dq}{\sqrt{2m(E-U(q))}}\qquad(|E-E_*|<\delta).$$ [step 2.1, L2, L4, L5, algebra]

3.2 For the left leg, use the open interval about $a(E_*)$ chosen in step 2.1, containing every segment $[a(E),q_1]$ and having $U'<0$. On this interval $U$ is strictly monotone; its local $C^3$ inverses from [L1] agree on overlaps by injectivity, giving a $C^3$ inverse $\psi$ on the whole image interval. For $E$ near $E_*$ the substitution $s=U(q)$ [L3] gives $$L(E)=\int_{U(q_1)}^{E}\sqrt{2m(E-s)}\,w(s)\,\mathrm ds,\qquad w(s):=-\frac{1}{U'(\psi(s))}>0,$$ and $w$ is $C^2$ on the image interval; here $U(q_1)<E$ for $E$ near $E_*$ since $U(q_1)<E_*$. [step 2.1, L1, L3, algebra, construct]

3.3 The right leg is treated identically: near $b(E_*)$ one has $U'>0$, the $C^3$ local inverse $\psi$ of $U$ gives $R(E)=\int_{U(q_2)}^{E}\sqrt{2m(E-s)}\,w(s)\,\mathrm ds$ with $w:=1/U'(\psi(s))>0$ of class $C^2$, the substitution $s=E-z^2$ and the variable-limit Leibniz rule give $$R'(E)=\int_{q_2}^{b(E)}\frac{m\,\mathrm dq}{\sqrt{2m(E-U(q))}} .$$ [step 2.1, L1, L2, L3, L5, algebra]

4.1 Substituting $s=E-z^2$ in the last integral [L3] turns the left leg into $$L(E)=2\sqrt{2m}\int_0^{z(E)}z^2w(E-z^2)\,\mathrm dz,\qquad z(E):=\sqrt{E-U(q_1)}>0,$$ with $z$ of class $C^1$ and the integrand $G(E,z):=2\sqrt{2m}z^2w(E-z^2)$ of class $C^1$ on a compact rectangle. By the variable-limit Leibniz rule [L2], $$L'(E)=G\bigl(E,z(E)\bigr)z'(E)+\int_0^{z(E)}\partial_EG(E,z)\,\mathrm dz=\sqrt{2m}\,z(E)w\bigl(E-z(E)^2\bigr)+2\sqrt{2m}\int_0^{z(E)}z^2w'(E-z^2)\,\mathrm dz .$$ [step 3.2, L2, L3, L5, algebra]

5.1 Integration by parts, equivalently the product rule applied to $z\mapsto z\,w(E-z^2)$, gives $$\int_0^{z(E)}w(E-z^2)\,\mathrm dz=z(E)\,w\bigl(E-z(E)^2\bigr)+2\int_0^{z(E)}z^2w'(E-z^2)\,\mathrm dz ;$$ substituting this into step 4.1 yields $$L'(E)=\sqrt{2m}\int_0^{z(E)}w(E-z^2)\,\mathrm dz=\int_{a(E)}^{q_1}\frac{m\,\mathrm dq}{\sqrt{2m(E-U(q))}},$$ the last equality by the same substitutions read backwards [L3]: $\sqrt{2m}\int_0^{z(E)}w(E-z^2)\,\mathrm dz=\int_{a(E)}^{q_1}u(E,q)^{-1}m\,\mathrm dq$. [step 4.1, L3, L5, algebra]

6.1 Adding the three derivatives of steps 3.1, 5.1 and 3.3 gives $$J_{\mathrm a}'(E)=\frac{1}{\pi}\int_{a(E)}^{b(E)}\frac{m\,\mathrm dq}{\sqrt{2m(E-U(q))}}=\frac{\sqrt{2m}}{2\pi}\int_{a(E)}^{b(E)}\frac{\mathrm dq}{\sqrt{E-U(q)}}=\frac{T(E)}{2\pi}$$ for $|E-E_*|<\delta$, with the middle integral understood improperly at $a(E)$ and $b(E)$. The endpoint pieces converge by steps 3.2–5.1 and 3.3; additivity on interior truncations and passage to the endpoint limits justify splitting this improper integral at $q_1,q_2$. The second equality uses $m/\sqrt{2m}=\sqrt{2m}/2$, and the last is the definition of $T(E)$. [step 3.1, step 5.1, step 3.3, L3, L4, algebra]

7.1 The integrand $q\mapsto 1/\sqrt{E-U(q)}$ is continuous and strictly positive on the nonempty open interval $(a(E),b(E))$, so $T(E)>0$ by [L4]; and the derivative computed in step 6.1 is independent of the auxiliary $E_*$, so the formula holds on all of $(E_0,E_1)$ and $J_{\mathrm a}$ is $C^1$ there. This is clause 2. [step 6.1, L4, algebra] ∎
