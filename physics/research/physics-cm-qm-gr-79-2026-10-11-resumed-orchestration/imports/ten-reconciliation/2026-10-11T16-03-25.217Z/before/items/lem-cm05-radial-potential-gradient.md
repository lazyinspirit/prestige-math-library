---
id: lem-cm05-radial-potential-gradient
kind: lemma
title: "The radial composite $x\\mapsto u(\\lvert x\\rvert)$ on an annulus: $C^k$ regularity and $\\nabla\\bigl(u\\circ\\lvert\\cdot\\rvert\\bigr)(x)=u'(\\lvert x\\rvert)\\,x/\\lvert x\\rvert$"
status: draft
origin: session
domain: mathematics
dependency_level: 0
deps: [def-interval, def-euclidean-inner-product, cor-inner-product-induces-a-norm, lem-reverse-triangle-inequality-in-a-normed-space, thm-cauchy-schwarz-and-the-euclidean-norm, def-total-derivative-in-euclidean-space, def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables, thm-chain-rule-for-total-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-real-power-continuity-and-derivatives, def-real-power, thm-gradient-represents-directional-derivatives-and-steepest-ascent, thm-total-derivative-computes-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, thm-algebra-of-continuous-functions, thm-induction-principle]
dependency_roles:
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  lem-reverse-triangle-inequality-in-a-normed-space: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-real-power: mathematical-premise
  thm-gradient-represents-directional-derivatives-and-steepest-ascent: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-induction-principle: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), Section 1.2.4, printed page 4 (PDF page 10): the gravitational potential $V=-GMm/r$ and the force $F=-\\nabla V$ of the inverse-square field, an instance of the radial gradient computed here"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4 footnote 12, chapter page 8 (PDF page 41): a conservative central force is $F(r)=-\\mathrm dU(r)/\\mathrm dr$, the radial form of the gradient of a central potential"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let $J_0\subseteq(0,\infty)$ be an open interval
([[def-interval]]), let $u:J_0\to\mathbb R$ be of class $C^k$ for some
$k\ge1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), and put
$$A:=\{\,x\in\mathbb R^3:\lvert x\rvert\in J_0\,\},\qquad \lvert x\rvert:=\lVert x\rVert_2=\sqrt{\langle x,x\rangle},$$
the Euclidean norm of [[def-euclidean-inner-product]]. Then:

1. $A$ is open in $\mathbb R^3$ and $0\notin A$;
2. the function $N:A\to(0,\infty)$, $N(x):=\lvert x\rvert$, is of class
   $C^\infty$ on $A$; it is totally differentiable at every $x\in A$
   ([[def-total-derivative-in-euclidean-space]]) with
   $$DN(x)h=\frac{\langle x,h\rangle}{\lvert x\rvert}\qquad(h\in\mathbb R^3),\qquad\text{so}\qquad\nabla N(x)=\frac{x}{\lvert x\rvert}$$
   ([[def-jacobian-matrix-and-gradient]]);
3. the radial composite $U:=u\circ N:A\to\mathbb R$, $U(x)=u(\lvert x\rvert)$,
   is of class $C^k$ on $A$ and totally differentiable at every $x\in A$
   with
   $$DU(x)h=u'(\lvert x\rvert)\,\frac{\langle x,h\rangle}{\lvert x\rvert}=\Bigl\langle u'(\lvert x\rvert)\frac{x}{\lvert x\rvert},\,h\Bigr\rangle\qquad(h\in\mathbb R^3),$$
   that is, $\nabla U(x)=u'(\lvert x\rvert)\,x/\lvert x\rvert$.

## Facts & Assumptions

**Given:** The open interval $J_0\subseteq(0,\infty)$, the $C^k$ function $u:J_0\to\mathbb R$ with $k\ge1$, the domain $A=\{x\in\mathbb R^3:\lvert x\rvert\in J_0\}$, and the maps $N$, $U$ of the statement.

[L1] The Euclidean norm: $\lvert x\rvert^2=\langle x,x\rangle$; it vanishes only at $x=0$, is nonnegative everywhere, satisfies the triangle inequality $\lvert x+y\rvert\le\lvert x\rvert+\lvert y\rvert$, and $\lvert\lambda x\rvert=\lvert\lambda\rvert\,\lvert x\rvert$ ([[def-euclidean-inner-product]], [[cor-inner-product-induces-a-norm]]).

[L2] Reverse triangle inequality: $\bigl\lvert\lvert x\rvert-\lvert y\rvert\bigr\rvert\le\lvert x-y\rvert$ ([[lem-reverse-triangle-inequality-in-a-normed-space]]).

[L3] Cauchy–Schwarz: $\lvert\langle x,y\rangle\rvert\le\lvert x\rvert\lvert y\rvert$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L4] Chain rule and total derivatives: a composite of totally differentiable maps is totally differentiable with the composed derivative ([[thm-chain-rule-for-total-derivatives]]); the total derivative of a scalar-valued map at a point is the row $(D_{\mathbf e_j}f(a))_j$ of directional derivatives, so on $\mathbb R$ it is multiplication by the ordinary derivative ([[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]]); a map whose first partial derivatives exist near a point and are continuous there is totally differentiable there ([[thm-continuous-partial-derivatives-imply-total-differentiability]]); and for a totally differentiable scalar field $D_vf(a)=\langle\nabla f(a),v\rangle$ ([[thm-gradient-represents-directional-derivatives-and-steepest-ascent]]).

[L5] $C^k$ closure: finite componentwise sums, products and scalar multiples of $C^k$ Euclidean maps are $C^k$, and a composite of composable $C^k$ Euclidean maps is $C^k$; a map is $C^\infty$ when it is $C^k$ for every $k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[L6] Real powers: $x\mapsto x^{\alpha}$ is continuous and differentiable on $(0,\infty)$ with derivative $\alpha x^{\alpha-1}$ ([[thm-real-power-continuity-and-derivatives]], [[def-real-power]]).

[L7] Induction principle for the statement "for every natural $m$" ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 The norm is continuous on $\mathbb R^3$ by the reverse triangle inequality [L2], so $A$, the preimage of the open set $J_0$ under $N$, is open; and $N(0)=0\notin J_0$ gives $0\notin A$. This is clause 1. [given, L1, L2, algebra]

1.2 Fix $x\in A$ and $h\in\mathbb R^3$ with $x+h\in A$. By bilinearity, symmetry and [L1], $\lvert x+h\rvert^2-\lvert x\rvert^2=2\langle x,h\rangle+\lvert h\rvert^2$, and therefore $\lvert x+h\rvert-\lvert x\rvert=\bigl(2\langle x,h\rangle+\lvert h\rvert^2\bigr)/\bigl(\lvert x+h\rvert+\lvert x\rvert\bigr)$, the denominator being at least $\lvert x\rvert>0$. [given, L1, algebra]

2.1 Remainder estimate at $x$: subtracting $\langle x,h\rangle/\lvert x\rvert$ from step 1.2 and putting over the common denominator $\lvert x\rvert(\lvert x+h\rvert+\lvert x\rvert)$ gives $$\Bigl\lvert\lvert x+h\rvert-\lvert x\rvert-\frac{\langle x,h\rangle}{\lvert x\rvert}\Bigr\rvert\le\frac{\lvert x\rvert\,\lvert h\rvert^2+\lvert\langle x,h\rangle\rvert\,\bigl\lvert\lvert x\rvert-\lvert x+h\rvert\bigr\rvert}{\lvert x\rvert\,(\lvert x+h\rvert+\lvert x\rvert)}\le\frac{2\lvert h\rvert^2}{\lvert x\rvert},$$ where [L3] bounds the first numerator term by $\lvert x\rvert\lvert h\rvert^2$, [L2] bounds the second by $\lvert x\rvert\lvert h\rvert\cdot\lvert h\rvert$, and the denominator is at least $\lvert x\rvert^2$. Hence the normalized remainder tends to $0$ as $h\to0$: $N$ is totally differentiable at $x$ with $DN(x)h=\langle x,h\rangle/\lvert x\rvert$. [step 1.2, L1, L2, L3, algebra]

3.1 The representing vector: for every $v$, [L4] gives $D_vN(x)=DN(x)v=\langle x,v\rangle/\lvert x\rvert=\langle x/\lvert x\rvert,v\rangle$; comparing with $D_vN(x)=\langle\nabla N(x),v\rangle$ and taking $v$ over the standard basis shows $\nabla N(x)=x/\lvert x\rvert$. In particular every first partial derivative of $N$ agrees on $A$ with a component of $x/\lvert x\rvert$ and is continuous, so $N$ is $C^1$ by [[def-ck-euclidean-maps-and-diffeomorphisms]]. [step 2.1, L4, L5, algebra]

3.2 Chain rule for the composite $U=u\circ N$: $u$ is $C^k$ hence totally differentiable, $N$ is totally differentiable at every point of $A$ by step 2.1, and the domains compose, so [L4] gives $DU(x)=Du(N(x))\circ DN(x)$; and $DU(x)h=u'(\lvert x\rvert)\cdot DN(x)h=u'(\lvert x\rvert)\langle x,h\rangle/\lvert x\rvert$ because the total derivative of the real function $u$ at $t$ is multiplication by $u'(t)$ by [L4]. This is the displayed formula for $DU$. [step 2.1, L4, algebra]

4.1 The induction on smoothness: the base case $m=1$ is step 3.1. Assume $m\ge1$ and $N\in C^m(A)$. The map $t\mapsto t^{-1}$ is $C^\infty$ on $(0,\infty)$ by [L6] with $\alpha=-1$ iterated, so $x\mapsto1/\lvert x\rvert$ is $C^m$ on $A$ as the composite $t\mapsto t^{-1}$ after $N$. The coordinate maps $x\mapsto x_j$ are the components of the identity, whose partial derivatives are the constants $\delta_{jk}$; they are therefore $C^\infty$, hence $C^m$, by [[def-ck-euclidean-maps-and-diffeomorphisms]] and [[def-directional-and-partial-derivatives]]. So $\nabla N(x)=x/\lvert x\rvert$, a finite product of $C^m$ maps, is $C^m$; since a map is $C^{m+1}$ exactly when its first partial derivatives are $C^m$ ([[def-ck-and-multi-index-notation-in-several-variables]]), $N$ is $C^{m+1}$. By induction [L7], $N\in C^m(A)$ for every $m$, that is $N\in C^\infty(A)$. This completes clause 2. [step 3.1, L5, L6, L7, algebra]

5.1 The gradient and the regularity: the display of step 3.2 writes $DU(x)$ as the linear map $h\mapsto\langle u'(\lvert x\rvert)x/\lvert x\rvert,h\rangle$, so $\nabla U(x)=u'(\lvert x\rvert)x/\lvert x\rvert$ by the same uniqueness argument as step 3.1; and $U$, a composite of the $C^k$ maps $u$ and $N$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), is $C^k$ on $A$ by [L5]. This is clause 3 and completes the proof. [step 3.1, step 3.2, L4, L5, algebra] ∎

## Remarks

- **Why the annulus.** The proof uses $\lvert x\rvert\ge c>0$ only through the open interval $J_0\subseteq(0,\infty)$; on a domain meeting the origin the norm is not differentiable there and the radial composite need not be. The collision-excluded configuration domains of the two-body model are exactly annuli of this shape.

- **The inverse-square instance.** For $u(\rho)=-\kappa/\rho$ with $\kappa>0$ on $J_0=(0,\infty)$, clause 3 gives $\nabla U(x)=\kappa x/\lvert x\rvert^3$, so the potential $U(x)=-\kappa/\lvert x\rvert$ presents the attractive inverse-square force $-kx/\lvert x\rvert^3$ with $k=\kappa$, the form used by the gravitational model of this batch.
