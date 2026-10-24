---
id: ex-equivariant-fourier-hardy-symbol-index
kind: example
title: Fourier–Hardy index and the sign of the cotangent plane symbol
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-equivariant-pseudodifferential-calculus-examples
deps:
  - def-axiom-of-choice
  - lem-equivariant-finite-chart-symbol-calculus
  - lem-equivariant-controlled-symbol-realization
  - thm-hopf-line-calculation-of-k-zero-of-the-two-sphere
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-equivariant-finite-chart-symbol-calculus: mathematical-premise
  lem-equivariant-controlled-symbol-realization: mathematical-premise
  thm-hopf-line-calculation-of-k-zero-of-the-two-sphere: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. F. Atiyah and I. M. Singer, The Index of Elliptic Operators: I,
        Annals of Mathematics 87 (1968), 484–530"
      url: https://doi.org/10.2307/1970715
      locator: "§8, printed pp. 525–526, the Hardy projection and rectangle clutching
        computation."
dependency_level: 2
---

## Example

Assume AC. Let $S^1=\mathbb R/(2\pi\mathbb Z)$, with coordinate $x$ and density $dx/(2\pi)$. Let a compact Lie group $G$ act trivially on $S^1$ and let $V$ be a finite-dimensional unitary complex $G$-representation. On $L^2(S^1;V)$ let $P_+$ be the orthogonal projection onto the closed span of $e^{inx}v$ with $n\ge0$. The bounded operator

$$A=e^{ix}P_++(1-P_+)$$

is an equivariant order-zero elliptic pseudodifferential operator. Its leading symbol on the two components of the cotangent sphere is $e^{ix}I_V$ at $\xi>0$ and $I_V$ at $\xi<0$. Its kernel is zero, its cokernel is the constant copy of $V$, and $\operatorname{Ind}_G(A)=-[V]$.

Write $b\in K_c^0(T^*\mathbb R)$ for the relative complex line symbol $x+i\xi$, invertible outside the origin. The group $K_c^0$ here means stabilized finite complex bundle symbols invertible outside a compact set, modulo compact-support homotopies and addition of everywhere invertible symbols. The plane generator uses the complex coordinate $x+i\xi$ and therefore is the root Bott class clutched by $z$. After a degree-one symbol homotopy the symbol of $A$ is supported in a coordinate interval, and its class there is $-b\otimes V$. Thus the compact-support analytic index of $b$ is $1$.

For clarity about orientation, the tautological cotangent form is $\theta=\xi\,dx$ and $d\theta=d\xi\wedge dx$. The positively oriented boundary for the complex plane $x+i\xi$ traverses the top of a rectangle from right to left. The Hardy symbol winds $-1$ on that boundary. Reversing to the $d\theta$ orientation reverses both boundary windings; it does not change the class identity $[\sigma(A)]=-b\otimes V$.

## Example references

[Atiyah–Singer I, §8, printed pp. 525–526](https://doi.org/10.2307/1970715)

[[thm-hopf-line-calculation-of-k-zero-of-the-two-sphere]]

## Facts & Assumptions

**Given:** The circle, trivial geometric $G$-action, coefficient representation $V$, and Fourier convention $e^{inx}$ in the example.

[A1] AC is inherited from the bundle, Sobolev and Fredholm suppliers. [[def-axiom-of-choice]]

[F1] Smooth classical symbols with the positive Fourier kernel $e^{i(x-y)\xi}$ have the local symbol calculus and Sobolev/Fredholm properties specified by the finite-chart supplier. [[lem-equivariant-finite-chart-symbol-calculus]]

[F2] The compact symbol index is invariant under stabilized symbol homotopy, equals the Fredholm kernel difference of a realization, is compatible with coefficient representations, and is independent of compactification for controlled compact-support representatives. [[lem-equivariant-controlled-symbol-realization]]

[F3] The relative plane symbol clutched by $z$ represents $\beta=[\gamma]-1$ in the fixed root convention; a loop of winding $k$ represents $k\beta$. [[thm-hopf-line-calculation-of-k-zero-of-the-two-sphere]]

## Verification

**Given:** The preceding data and symbol/index conventions.

1.1 The exponentials are an orthonormal complete system. Completeness can be checked without an additional spectral theorem: convolution of a continuous periodic function with the Fejér kernel is a trigonometric polynomial and converges uniformly, since the nonnegative kernel has integral one and its mass outside each neighborhood of zero tends to zero; continuous functions are dense in $L^2$ by approximation of interval indicators and simple functions. Thus an $L^2$ function orthogonal to every exponential is zero. Consequently $P_+$ is a norm-one orthogonal projection. On Fourier basis vectors, $A(e^{inx}v)=e^{i(n+1)x}v$ for $n\ge0$ and $A(e^{inx}v)=e^{inx}v$ for $n<0$. These images are exactly the distinct nonzero modes, so $A$ is an isometry onto their closed span, its kernel is zero, and its cokernel is the constants. Every identification commutes with $G$, proving $\operatorname{Ind}_G(A)=-[V]$. [A1, given, construct, algebra]

2.1 To verify the actual classical symbol, let $f$ be a smooth cutoff supported in a coordinate interval of length less than $2\pi$, and extend it by zero to $\mathbb R$. With $\widehat f(\eta)=\int e^{-ix\eta}f(x)\,dx$, local application to $f(x)e^{ix\xi}$ gives $e^{-ix\xi}P_+(fe^{i(\cdot)\xi})(x)=(2\pi)^{-1}\sum_{n\ge0}\widehat f(n-\xi)e^{ix(n-\xi)}$. Every derivative of $\widehat f$ decays faster than every power, by repeated integration by parts. For $\xi\to-\infty$ the sum and all its $x,\xi$ derivatives are rapidly decreasing, since $n-\xi\ge n+|\xi|$. For $\xi\to+\infty$ use full Fourier reconstruction, whose sum is $f(x)$ on the chosen chart, and subtract the sum over $n<0$; that sum has the same rapid estimates. Uniform bounds on the remaining compact $\xi$ interval follow by convergence of the differentiated sums. Hence this localized complete symbol has leading term $f(x)$ on the positive ray and zero on the negative ray, with smooth rapidly decreasing remainders away from a bounded frequency interval. Off the diagonal the localized kernels are smooth by the same integration-by-parts estimates. This establishes $P_+$ in the calculus [F1], with the asserted two-ray symbol. Multiplication by $e^{ix}$ gives the displayed elliptic symbol of $A$. [F1, step 1.1, construct, algebra]

3.1 Choose a smooth real function $\varphi$ on $[0,2\pi]$, equal to $0$ near $0$, equal to $2\pi$ near $2\pi$, and increasing only in a proper interior interval $I$. The loops $u_t(x)=\exp(i((1-t)x+t\varphi(x)))$ are smooth periodic degree-one loops, for $0\le t\le1$, joining $e^{ix}$ to a loop equal to $1$ outside $I$. All derivatives match at the endpoints because $\varphi$ is constant there. On the positive cotangent ray replace $e^{ix}$ by $u_t(x)$, leaving the negative symbol $1$. These are elliptic symbol homotopies; [F2] preserves their index. At $t=1$ the symbol is the identity outside the compact subinterval where $\varphi$ varies, and its class is extended from $T^*I$. A coordinate on $I$ gives the following compact representative on $\mathbb R^2$: $a(x,\xi)=1+(e^{i\varphi(x)}-1)h(\xi)$, where $h=0$ on $\xi\le-1$, $h=1$ on $\xi\ge1$, and $\varphi$ is extended by its endpoint constants. Its possible zeros lie in a compact rectangle, and its boundary values are $e^{i\varphi(x)}$ on the top and $1$ on the other three sides. [F2, step 2.1, construct]

4.1 Traverse that rectangle counterclockwise in the coordinate orientation $dx\wedge d\xi$. On the top $x$ decreases, so the change of argument is $-2\pi$. The boundary map has winding $-1$, whereas $x+i\xi$ has winding $+1$. Their class identity can also be seen directly: map the rectangle to a disk; the ratio of its boundary function to $\bar z$ has winding zero and hence a continuous logarithm (integrate its logarithmic derivative and use the zero total integral). Exponentiating scalar multiples of that logarithm gives a homotopy to $\bar z$. The sum of the $z$ and $\bar z$ relative symbols is zero: the boundary matrices $\operatorname{diag}(z,\bar z)$ contract through $\left(\begin{smallmatrix}t z&-\sqrt{1-t^2}\\\sqrt{1-t^2}&t\bar z\end{smallmatrix}\right)$, $1\ge t\ge0$, to a constant invertible matrix, and then to the identity. Thus $[a]=-b$, consistently with [F3]. Tensoring the argument by $V$ proves the class assertion. Since $a$ has index $-[V]$ by steps 1.1 and 3.1, additivity and excision give $a_{\{1\}}(b)=1$, where $a$ denotes the compact-support analytic index. Finally $d\theta=d\xi\wedge dx$ reverses the chosen complex orientation, giving precisely the orientation statement in the example. [F2, F3, step 1.1, step 3.1, construct, algebra] ∎

## Remarks

The geometric action on the circle is trivial here. Multiplication by $e^{ix}$ does not commute with geometric circle rotations on the same source and target bundle, so this operator does not supply a rotation-equivariant Hardy index. The coefficient-representation statement is the equivariant assertion used here.
