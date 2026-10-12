---
id: lem-nrqm-approximations-scaled-line-model-correspondence
aliases: [nrqm-approximations-scaled-line-model-correspondence]
kind: lemma
domain: mathematics
title: "Nondimensionalisation of the one-dimensional stationary equation and of the WKB exponent"
status: draft
origin: session
dependency_level: 0
deps: [def-derivative, thm-chain-rule, cor-one-dimensional-change-of-variables-with-absolute-derivative]
dependency_roles:
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-one-dimensional-change-of-variables-with-absolute-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 11.6 printed pages 253-254 (PDF pages 261-262): the WKBJ equation d^2 psi/dx^2 = -k^2 psi with k^2 = 2m(E-V)/hbar^2 and the phase phi(x) = int k dx"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Section 5.4 'WKB Approximation' printed and PDF pages 70-72 (the one-dimensional WKB solution with the local wavenumber and the phase integral, in the same reduced equation)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
verification:
  precheck: pass
---

## Statement

Let $\ell>0$ and $E_\star>0$ be real reference scales, let $m>0$ and
$\hbar>0$ be real, and define
$$h:=\frac{\hbar}{\ell\sqrt{2mE_\star}}>0 .$$
Let $I\subseteq\mathbb R$ be a nonempty open interval, let
$W\in C^2(I;\mathbb R)$, let $\lambda\in\mathbb R$, and let $u:I\to\mathbb C$
be a function. Then:

(a) $u$ is of class $C^2$ on $I$ and satisfies
$$u''(\xi)=\frac{W(\xi)-\lambda}{h^2}\,u(\xi)\qquad(\xi\in I)$$
if and only if the function $\psi:\ell I\to\mathbb C$, $\psi(x):=u(x/\ell)$,
is of class $C^2$ on the open interval $\ell I=\{\ell\xi:\xi\in I\}$ and
satisfies
$$-\frac{\hbar^2}{2m}\,\psi''(x)+E_\star W(x/\ell)\,\psi(x)=E_\star\lambda\,\psi(x) \qquad(x\in\ell I);$$

(b) if $a<b$ are points of $I$, then each of the following identities holds
under its indicated strict-sign hypothesis:

(i) if $W(\xi)-\lambda>0$ for every $\xi\in[a,b]$, then
$$\frac1h\int_a^b\sqrt{W(\xi)-\lambda}\,d\xi =\frac1\hbar\int_{\ell a}^{\ell b}\sqrt{2m\bigl(E_\star W(x/\ell)-E_\star\lambda\bigr)}\,dx ;$$

(ii) if $\lambda-W(\xi)>0$ for every $\xi\in[a,b]$, then
$$\frac1h\int_a^b\sqrt{\lambda-W(\xi)}\,d\xi =\frac1\hbar\int_{\ell a}^{\ell b}\sqrt{2m\bigl(E_\star\lambda-E_\star W(x/\ell)\bigr)}\,dx .$$

All square roots here are the nonnegative real square roots of strictly
positive numbers. Part (i) is the forbidden-region exponent identity; part
(ii) is the allowed-region phase identity.

The identities are statements about the displayed functions and integrals
only. The number $h$ is dimensionless because $\hbar$ is in $\mathrm{J\,s}$
and $\ell\sqrt{2mE_\star}$ is in $\mathrm{kg\,m^2\,s^{-1}}=\mathrm{J\,s}$;
no physical interpretation, no approximation and no error estimate is
asserted here.

## Facts & Assumptions

**Given:** the scales $\ell,E_\star,m,\hbar$, the interval $I$, the functions $W,u$, the number $\lambda$, and the number $h>0$. For part (b), also take points $a<b$ in $I$ satisfying the strict-sign hypothesis for the part being proved.

[F1] **Chain rule.** If $g$ is differentiable at $c$ and $f$ differentiable at $g(c)$, then $f\circ g$ is differentiable at $c$ with $(f\circ g)'(c)=f'(g(c))g'(c)$; the statement applies to real and imaginary parts separately ([[thm-chain-rule]], [[def-derivative]]).

[F2] **One-dimensional change of variables.** If $\varphi$ is $C^1$ and injective on a neighbourhood of $[a,b]$ with $\varphi'\ne0$ there, and $f$ is continuous on an interval containing $\varphi([a,b])$, then $\int_{\min\varphi([a,b])}^{\max\varphi([a,b])}f(y)\,dy =\int_a^b f(\varphi(\xi))|\varphi'(\xi)|\,d\xi$ ([[cor-one-dimensional-change-of-variables-with-absolute-derivative]]).

## Proof

**Proof technique:** direct; differentiate the affine substitution twice by its chain rule and substitute the definition of $h$, then integrate by the one-dimensional change of variables in each strict-sign case.

**Given:** the data of the statement and [F1]-[F2].

1.1 [Second derivatives under the substitution] Since $\xi\mapsto\ell\xi$ is $C^1$ with derivative $\ell$ and inverse $x\mapsto x/\ell$, the map $\psi=u\circ(\cdot/\ell)$ is $C^2$ exactly when $u$ is, and by [F1] applied twice, $\psi'(x)=\frac{u'(x/\ell)}{\ell},\qquad \psi''(x)=\frac{u''(x/\ell)}{\ell^{2}}\qquad(x\in\ell I).$ [F1]

1.2 [The scale identity] From the definition of $h$ and $W$, $E_\star>0$, $h^{2}=\frac{\hbar^{2}}{2m\ell^{2}E_\star},\qquad\text{hence}\qquad \frac{1}{h^{2}\ell^{2}}=\frac{2mE_\star}{\hbar^{2}} .$ [given, algebra]

1.3 [Forbidden-region exponent identity (b)(i)] On $[a,b]$ the function $x\mapsto\ell x$ is $C^1$ and strictly increasing with derivative $\ell>0$, and the integrand $f_+(x):=\sqrt{2m(E_\star W(x/\ell)-E_\star\lambda)}$ is continuous on $[\ell a,\ell b]$ because $W-\lambda>0$. By [F2] applied to $\varphi(\xi)=\ell\xi$, $\int_{\ell a}^{\ell b}f_+(x)\,dx =\ell\sqrt{2mE_\star}\int_a^b\sqrt{W(\xi)-\lambda}\,d\xi.$ Dividing by $\hbar$ and using $\ell\sqrt{2mE_\star}/\hbar=1/h$ gives (b)(i). [F2, given, algebra]

2.1 [Forward implication of (a)] Suppose $u$ is $C^2$ with $u''=(W-\lambda)u/h^{2}$ on $I$. By step 1.1, $\psi$ is $C^2$ on $\ell I$ and $\psi''(x)=\frac{u''(x/\ell)}{\ell^{2}} =\frac{1}{\ell^{2}}\cdot\frac{W(x/\ell)-\lambda}{h^{2}}\,u(x/\ell) =\frac{2mE_\star}{\hbar^{2}}\bigl(W(x/\ell)-\lambda\bigr)\psi(x),$ by step 1.2. Multiplying by $-\hbar^{2}/(2m)$ and bringing $\psi$ terms to the left gives $-(\hbar^{2}/2m)\psi''+E_\star W(x/\ell)\psi=E_\star\lambda\psi$ on $\ell I$. [step 1.1, step 1.2, algebra]

2.2 [Converse implication of (a)] Suppose conversely that $\psi$ is $C^2$ with $-\frac{\hbar^{2}}{2m}\psi''+E_\star W(x/\ell)\psi=E_\star\lambda\psi$ on $\ell I$. By step 1.1, $u(\xi)=\psi(\ell\xi)$ is $C^2$ on $I$ with $u''(\xi)=\ell^{2}\psi''(\ell\xi)$; substituting the assumed equation at $x=\ell\xi$ gives $u''(\xi)=\ell^{2}\cdot\frac{2m}{\hbar^{2}}\bigl(E_\star W(\xi)-E_\star\lambda\bigr)\psi(\ell\xi) =\frac{2m\ell^{2}E_\star}{\hbar^{2}}\bigl(W(\xi)-\lambda\bigr)u(\xi) =\frac{W(\xi)-\lambda}{h^{2}}u(\xi),$ the last equality by step 1.2. [step 1.1, step 1.2, algebra]

3.1 [Allowed-region phase identity (b)(ii)] If instead $\lambda-W>0$ on $[a,b]$, then $f_-(x):=\sqrt{2m(E_\star\lambda-E_\star W(x/\ell))}$ is continuous and real on $[\ell a,\ell b]$. The same change of variables gives $\int_{\ell a}^{\ell b}f_-(x)\,dx =\ell\sqrt{2mE_\star}\int_a^b\sqrt{\lambda-W(\xi)}\,d\xi.$ Division by $\hbar$ and the same scale identity prove (b)(ii), with the nonnegative real square roots justified by the strict sign hypothesis. [F2, given, algebra] ∎

## Remarks

- **Role of the lemma.** The lemma is the exact bookkeeping that lets the dimensionless equation $u''=(W-\lambda)u/h^{2}$, in which the semiclassical parameter $h$ is explicit, be read as the physical line-model equation with potential $E_\star W(\cdot/\ell)$ at energy $E_\star\lambda$. Both the equation and the phase integral transfer exactly; no approximation is involved.
- **Small $h$.** The regime $h\ll1$ is the regime $\hbar\ll\ell\sqrt{2mE_\star}$; the lemma itself makes no smallness assumption, and the error theorems that use smallness state it separately.
