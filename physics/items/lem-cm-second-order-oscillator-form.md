---
id: lem-cm-second-order-oscillator-form
kind: lemma
title: "Solutions of $v''+\\omega^2v=0$ are exactly the functions $A\\cos(\\omega(t-t_0))+B\\sin(\\omega(t-t_0))$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-interval, def-derivative, def-ck-euclidean-maps-and-diffeomorphisms, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule, cor-zero-derivative-implies-constant, cor-trigonometric-parity-and-pythagorean-identity]
dependency_roles:
  def-interval: mathematical-premise
  def-derivative: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §2.6, printed pp. 38-44: small oscillations and the oscillatory solution with frequency squared $\\omega^2$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 2 small oscillations: the second-order linear oscillator and its general sinusoidal solution"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let $\omega>0$, let $I\subseteq\mathbb R$ be an interval with at least two points
([[def-interval]]), let $t_0\in I$, and let $v:I\to\mathbb R$ be twice
differentiable ([[def-ck-euclidean-maps-and-diffeomorphisms]]) with

$$v''(t)+\omega^2v(t)=0\qquad(t\in I).$$

Then there are reals $A,B$ with

$$v(t)=A\cos\bigl(\omega(t-t_0)\bigr)+B\sin\bigl(\omega(t-t_0)\bigr)\qquad(t\in I).$$

Conversely, for all reals $A,B$ the function
$t\mapsto A\cos(\omega(t-t_0))+B\sin(\omega(t-t_0))$ is twice differentiable on
$\mathbb R$ and satisfies $v''+\omega^2v=0$ there.

## Facts & Assumptions

**Given:** A real $\omega>0$, an interval $I\subseteq\mathbb R$ with at least two points, a point $t_0\in I$, and a twice differentiable $v:I\to\mathbb R$ with $v''+\omega^2v=0$ on $I$.

[L1] Sine and cosine are differentiable with $(\sin u)'=\cos u$ and $(\cos u)'=-\sin u$; the chain rule differentiates the compositions $t\mapsto\cos(\omega(t-t_0))$, $t\mapsto\sin(\omega(t-t_0))$ with derivatives $-\omega\sin(\omega(t-t_0))$ and $\omega\cos(\omega(t-t_0))$ ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]]).

[L2] Sums, products and constant multiples of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]]).

[L3] A function continuous on $I$ whose derivative vanishes at every interior point of $I$ is constant on $I$ ([[cor-zero-derivative-implies-constant]]).

[L4] $\sin^2+\cos^2=1$ identically ([[cor-trigonometric-parity-and-pythagorean-identity]]).

## Proof

**Proof technique:** direct.

1.1 Write $\varphi(t):=\omega(t-t_0)$ and define $$w:=v\cos\varphi-\frac{v'}{\omega}\sin\varphi,\qquad z:=v\sin\varphi+\frac{v'}{\omega}\cos\varphi$$ on $I$. Every term is a product of twice differentiable functions, so $w$ and $z$ are differentiable by [L2]. [given, L1, L2, construct]

1.2 Differentiating and using $v''=-\omega^2v$: $$w'=v'\cos\varphi-\omega v\sin\varphi-\frac{v''}{\omega}\sin\varphi-v'\cos\varphi=-\frac{\omega^2v+v''}{\omega}\sin\varphi=0,$$ and likewise $z'=v'\sin\varphi+\omega v\cos\varphi+\frac{v''}{\omega}\cos\varphi-v'\sin\varphi=\frac{\omega^2v+v''}{\omega}\cos\varphi=0$ on $I$. [given, L1, L2, algebra]

2.1 By [L3] and step 1.2 there are reals $A,B$ with $w=A$ and $z=B$ on $I$. [step 1.1, step 1.2, L3]

3.1 Multiplying out and using [L4], $w\cos\varphi+z\sin\varphi=v(\cos^2\varphi+\sin^2\varphi)=v$ on $I$; hence $v=A\cos\varphi+B\sin\varphi$, which is the asserted representation. [step 1.1, step 2.1, L4, algebra]

4.1 Conversely, if $u(t):=A\cos(\omega(t-t_0))+B\sin(\omega(t-t_0))$, then [L1] and [L2] give $u'=-\omega A\sin\varphi+\omega B\cos\varphi$ and $u''=-\omega^2A\cos\varphi-\omega^2B\sin\varphi=-\omega^2u$ on $I$, so $u''+\omega^2u=0$. [L1, L2, algebra] ∎
