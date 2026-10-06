---
id: lem-c2-saddle-function-has-c1-morse-coordinates
kind: lemma
title: "A C\u00b2 saddle function has C\u00b9 Morse coordinates"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-euclidean-inverse-function-theorem, cor-mean-value-theorem, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 0
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a76, printed pp. 16\u201319; the C\u00b9 coordinate regularity is proved locally here"
---

## Statement

Let $f$ be C² near $p\in\mathbb R^2$, with $df(p)=0$ and Hessian of signature $(1,1)$.
There is a C¹ local diffeomorphism $(x,y)$ centered at $p$ for which $f-f(p)=xy$. The
coordinate change is only asserted to be C¹.

## Facts & Assumptions
**Given:** A function $f$ of class $C^2$ near $p\in\mathbb R^2$ with $df(p)=0$ and Hessian of signature $(1,1)$.

[F1] If $U\subseteq\mathbb R^n$ is open, $f:U\to\mathbb R^n$ is $C^1$ and $Df(a)$ is invertible, then $f$ is a local diffeomorphism at $a$ with a $C^1$ inverse $g$ satisfying $Dg(y)=Df(g(y))^{-1}$. ([[thm-euclidean-inverse-function-theorem]]).

[F2] For composable differentiable maps the total derivative of the composite is the composite of the total derivatives. ([[thm-chain-rule-for-total-derivatives]]).

[F3] A function continuous on $[a,b]$ and differentiable on $(a,b)$ satisfies $f(b)-f(a)=f'(c)(b-a)$ for some interior point $c$. ([[cor-mean-value-theorem]]).

[F4] If every partial derivative of a map exists near a point and is continuous there, then the map is totally differentiable at that point with the Jacobian as its derivative. ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).



## Proof

**Proof technique:** direct.

1.1 Translate $p$ to the origin, so $f(0)=0$, $df(0)=0$, and the Hessian $H$ of $f$ at the origin is a symmetric bilinear form of signature $(1,1)$; fix $v$ with $H(v,v)>0$ and a vector $e$ independent of $v$. [given]

2.1 Replace $e$ by $w=e-H(e,v)H(v,v)^{-1}v$; then $H(v,w)=0$, and since the Gram determinant of the independent pair $(e,v)$ under the indefinite form $H$ equals $\det(H)$ times a nonzero square it is negative, so $H(w,w)=H(e,e)-H(e,v)^2/H(v,v)<0$; in the linear coordinates with first axis $v$ and second axis $w$ one therefore has $f_{xx}(0)>0$, $f_{yy}(0)<0$, $f_{xy}(0)=0$, and after shrinking to a smaller neighbourhood also $f_{xx}>0$ there. [step 1.1, algebra]

3.1 On that smaller neighbourhood the map $\Phi(x,y)=(f_x(x,y),y)$ has derivative $\begin{pmatrix}f_{xx}&f_{xy}\\0&1\end{pmatrix}$ with determinant $f_{xx}>0$, so $\Phi$ is a local diffeomorphism at the origin by [F1]; the preimage of the slice $\{(0,y)\}$ is therefore a $C^1$ curve that can be written $x=\eta(y)$ with $\eta(0)=0$, and differentiating $f_x(\eta(y),y)=0$ gives $\eta'(y)=-f_{xy}(\eta(y),y)/f_{xx}(\eta(y),y)$. [F1, step 2.1]

4.1 Define $b(y)=f(\eta(y),y)$; then $b'(y)=f_x(\eta(y),y)\eta'(y)+f_y(\eta(y),y)=f_y(\eta(y),y)$ by [F2], so $b$ is $C^2$ near zero with $b'(0)=f_y(0,0)=0$, and differentiating once more at the origin with $\eta'(0)=-f_{xy}(0)/f_{xx}(0)=0$ gives $b''(0)=f_{yy}(0)<0$. [F2, step 3.1]

5.1 For $x\neq\eta(y)$ set $X(x,y)=\operatorname{sgn}(x-\eta(y))\sqrt{f(x,y)-b(y)}$ and set $X=0$ on the curve $x=\eta(y)$; positivity under the square root follows from $f(x,y)-b(y)=(x-\eta(y))\int_0^1 f_x(\eta(y)+t(x-\eta(y)),y)\,dt$, a mean value formula justified by [F3], together with $f_{xx}>0$ and $f_x=0$ on the curve; off the curve $2XX_x=f_x$ and $2XX_y=f_y-b'$, and the limits along the curve, obtained from the second-order expansion in $x-\eta(y)$ and continuity of the Hessian, are $X_x=\sqrt{f_{xx}/2}$ and $X_y=f_{xy}/\sqrt{2f_{xx}}$ at $(\eta(y),y)$; the first of these is also the derivative of the defined $X$ on the curve by the expansion, the second by $\eta'=-f_{xy}/f_{xx}$, and both limits are continuous with $X_x(0,0)>0$, so [F4] applies to the defining formula for $X$ on each side of the curve with matching limits. [F3, F4, step 4.1]

5.2 Define $Y(y)=\operatorname{sgn}(y)\sqrt{b(0)-b(y)}$ for $y\neq0$ and $Y(0)=0$; since $b''(0)<0$ the one-variable form of [F3] gives $b(0)-b(y)>0$ for small nonzero $y$ and shows that $Y$ is $C^1$ near zero with $Y'(0)=\sqrt{-b''(0)/2}>0$. [F3, step 4.1]

6.1 The map $(x,y)\mapsto(X(x,y),Y(y))$ has invertible derivative $\operatorname{diag}(X_x(0,0),Y'(0))$ with positive diagonal entries at the origin, so by [F1] it is a $C^1$ local diffeomorphism; moreover $X^2-Y^2=(f-b(y))-(b(0)-b(y))=f(x,y)-f(0)$, so the new coordinates $(u,w)=(X+Y,X-Y)$ centred at the origin satisfy $f-f(p)=uw$; the construction used only explicit linear algebra, mean value formulas and the local inverse theorem, all with finitely many choices. [F1, step 5.1, step 5.2] ∎
