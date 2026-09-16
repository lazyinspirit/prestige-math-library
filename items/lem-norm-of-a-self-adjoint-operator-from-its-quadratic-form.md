---
id: lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form
kind: lemma
title: Norm of a self adjoint operator from its quadratic form
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-self-adjoint-positive-unitary-and-normal-operator, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, thm-cauchy-schwarz-in-an-inner-product-space, prop-pythagorean-parallelogram-and-polarisation-identities, def-real-and-complex-inner-product-space, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §1.3, Problems 1.19–1.20 (quadratic-form bound and polarization)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §2, Proposition 2.2"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
real or complex Hilbert space ([[def-hilbert-space]]) and let
$T\in\mathcal B(H)$ be a bounded self-adjoint operator
([[def-self-adjoint-positive-unitary-and-normal-operator]],
[[def-bounded-linear-operator]]), with operator norm $\|T\|$
([[def-operator-norm]]). Put $q(x):=\langle Tx,x\rangle$ for $x\in H$ and

$$M:=\sup\{\,|q(x)|:\|x\|=1\,\},$$

with the convention that a supremum over the empty set of reals is $0$; the
empty case occurs only for $H=\{0\}$, where the only operator is $T=0$.
Then

$$\|T\|=M=\sup_{\|x\|=1}|\langle Tx,x\rangle| .$$

The identity holds over both scalar fields, and in the case $H=\{0\}$ both sides
equal $0$.

## Facts & Assumptions

**Given:** A real or complex Hilbert space $H$, a bounded self-adjoint operator $T$, the quadratic form $q(x)=\langle Tx,x\rangle$, and $M=\sup\{|q(x)|:\|x\|=1\}$ with the empty-supremum convention.

[A1] **Self-adjointness is the identity** $\langle Tx,y\rangle=\langle x,Ty\rangle$ for all $x,y$: a self-adjoint operator satisfies $T^*=T$, and the Hilbert adjoint is characterised by $\langle Tx,y\rangle=\langle x,T^*y\rangle$ ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[A2] **Inner-product algebra.** The pairing is linear in the first argument, conjugate-linear in the second, conjugate symmetric, and positive definite, and $\|v\|^2=\langle v,v\rangle$ ([[def-real-and-complex-inner-product-space]]). Consequently for real $t>0$ and $x,y\in H$ one has $\langle T(tx),t^{-1}y\rangle=t\cdot t^{-1}\langle Tx,y\rangle=\langle Tx,y\rangle$, the expansion $q(x\pm u)=q(x)\pm\langle Tx,u\rangle\pm\langle Tu,x\rangle+q(u)$ holds, and if $\langle Tx,u\rangle$ is real then self-adjointness gives $\langle Tu,x\rangle=\overline{\langle Tx,u\rangle}=\langle Tx,u\rangle$, so that $q(x+u)-q(x-u)=4\langle Tx,u\rangle$. For $z\ne0$ with unit vector $u=z/\|z\|$ one has $q(z)=\|z\|^{2}q(u)$.

[A3] **Parallelogram law.** $\|x+u\|^{2}+\|x-u\|^{2}=2\|x\|^{2}+2\|u\|^{2}$ for all $x,u\in H$ ([[prop-pythagorean-parallelogram-and-polarisation-identities]]).

[A4] **Operator norm and Cauchy–Schwarz.** $\|Tv\|\le\|T\|\,\|v\|$ and $\|T\|=\sup\{\|Tv\|:\|v\|\le1\}$ ([[def-operator-norm]], [[def-bounded-linear-operator]]); $|\langle v,w\rangle|\le\|v\|\,\|w\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]), so the dual norm formula $\|z\|=\sup\{|\langle z,y\rangle|:\|y\|=1\}$ holds for every $z\in H$ by Cauchy–Schwarz and by testing $y=z/\|z\|$ when $z\ne0$ (both sides are $0$ at $z=0$).

[A5] **Choice.** Countable Choice is the hypothesis under which this pair's Hilbert-space interface is stated; no choice is used inside the argument below ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a real or complex Hilbert space $H$, a bounded self-adjoint $T$, and $M=\sup\{|q(x)|:\|x\|=1\}$.

1.1 **The quadratic form is dominated by $M$.** For $z\in H$, if $z=0$ then $|q(z)|=0=M\|z\|^{2}$, while if $z\ne0$ then [A2] gives $q(z)=\|z\|^{2}q(u)$ for the unit vector $u=z/\|z\|$, hence $|q(z)|=\|z\|^{2}|q(u)|\le M\|z\|^{2}$. [A2, algebra]

1.2 **$M\le\|T\|$.** For every unit vector $x$, Cauchy–Schwarz and the norm bound give $|q(x)|=|\langle Tx,x\rangle|\le\|Tx\|\,\|x\|\le\|T\|$, so $\|T\|$ is an upper bound of the set whose supremum is $M$; hence $M\le\|T\|$, and when $H=\{0\}$ both numbers are $0$. [A4, algebra]

2.1 **A sesquilinear bound.** For all $x,y\in H$ one has $|\langle Tx,y\rangle|\le\frac{M}{2}(\|x\|^{2}+\|y\|^{2})$: if $x=0$ or $y=0$ then $\langle Tx,y\rangle=0$ and the right side is $\ge0$; otherwise put $c:=\langle Tx,y\rangle$, and if $c\ne0$ choose the unit scalar $\omega$ with $\overline\omega c=|c|$ (namely $\omega=c/|c|$ over $\mathbb C$, $\omega=\operatorname{sign}(c)$ over $\mathbb R$) and set $u:=\omega y$, so that $\|u\|=\|y\|$ and $\langle Tx,u\rangle=\overline\omega c=|c|\ge0$ is real; then [A2] gives $4|\langle Tx,y\rangle|=4\langle Tx,u\rangle=q(x+u)-q(x-u)\le|q(x+u)|+|q(x-u)|\le M(\|x+u\|^{2}+\|x-u\|^{2})$ by [step 1.1], and the parallelogram law [A3] turns the last factor into $2\|x\|^{2}+2\|u\|^{2}=2\|x\|^{2}+2\|y\|^{2}$. [step 1.1, A1, A2, A3, algebra]

3.1 **Removing the norms.** For $x,y\ne0$ and every real $t>0$, [step 2.1] applied to the pair $(tx,t^{-1}y)$ together with the scaling identity of [A2] gives $|\langle Tx,y\rangle|\le\frac{M}{2}(t^{2}\|x\|^{2}+t^{-2}\|y\|^{2})$; the right side is minimised at $t^{2}=\|y\|/\|x\|>0$, where it equals $M\|x\|\,\|y\|$, so $|\langle Tx,y\rangle|\le M\|x\|\,\|y\|$ for all $x,y\in H$ (the zero cases being trivial). [step 2.1, A2, algebra]

4.1 **$\|T\|\le M$.** For $x\ne0$ the dual norm formula [A4] gives $\|Tx\|=\sup_{\|y\|=1}|\langle Tx,y\rangle|\le M\|x\|$ by [step 3.1] with $\|y\|=1$, and the inequality also holds at $x=0$; thus $M$ is a uniform bound for $T$ on the unit ball, so $\|T\|\le M$ by the unit-ball characterisation of the operator norm in [A4]. [step 3.1, A4, algebra]

5.1 **Conclusion.** Steps 1.2 and 4.1 give $\|T\|=M$; if $H=\{0\}$ then $T=0$, $M=0$ by the empty-supremum convention and $\|T\|=0$, so the identity holds there as well. [step 1.2, step 4.1, A5] ∎
