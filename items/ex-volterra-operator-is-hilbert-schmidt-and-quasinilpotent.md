---
id: ex-volterra-operator-is-hilbert-schmidt-and-quasinilpotent
kind: example
title: Volterra operator is Hilbert Schmidt and quasinilpotent
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-l-two-kernels-give-hilbert-schmidt-operators, thm-hilbert-schmidt-operators-are-compact, thm-riesz-schauder-spectrum-of-a-compact-operator, def-axiom-of-choice, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, def-completed-product-measure, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, cor-newton-leibniz-with-finitely-many-exceptional-points, lem-derivative-of-a-power, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-spectrum-and-resolvent-of-a-bounded-operator, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, thm-bounded-linear-operator-equivalences, def-metric-convergence, def-banach-space, def-hilbert-space, def-real-and-complex-inner-product-space, thm-cauchy-schwarz-in-an-inner-product-space, def-hilbert-schmidt-operator, def-hilbert-space-adjoint, def-self-adjoint-positive-unitary-and-normal-operator]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.1 and §3.6, the Volterra operator"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$H:=L^2([0,1],\mathbb C)$ with the integral pairing linear in the first
argument ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]],
[[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]) and let
$$Vf(x):=\int_0^xf(t)\,dt\qquad(0\le x\le1)$$
be the Volterra operator, that is, the integral operator with kernel
$k(x,t):=\mathbf 1_{\{0\le t\le x\}}$ on $[0,1]^2$. Then:

1. $V$ is Hilbert–Schmidt with $\|V\|_{HS}^2=\tfrac12$, hence compact
   ([[def-hilbert-schmidt-operator]], [[thm-hilbert-schmidt-operators-are-compact]]);
2. $V^nf(x)=\frac{1}{(n-1)!}\int_0^x(x-t)^{n-1}f(t)\,dt$ for every $n\ge1$, and
   $\|V^{n+1}\|\le\frac{1}{n!\,\sqrt{2(n+1)(2n+1)}}\to0$;
3. $V$ has no nonzero eigenvalue:
   $\ker(V-\lambda I)=\{0\}$ for every $\lambda\ne0$;
4. the spectrum of $V$ is $\sigma(V)=\{0\}$
   ([[def-spectrum-and-resolvent-of-a-bounded-operator]]); thus $V$ is
   quasinilpotent, and in particular $V$ is not self-adjoint though it is
   compact, showing that the compact self-adjoint spectral theorem does not
   apply.

## Facts & Assumptions

**Given:** AC, the complex Hilbert space $L^2([0,1])$, the kernel $k(x,t)=\mathbf 1_{\{0\le t\le x\}}$, and the operator $V$.

[A1] **The kernel is square-integrable.** The function $k$ is measurable on the completed product measure and $\int_{[0,1]^2}|k|^2\,d(\lambda\times\lambda)=\int_0^1\lambda([0,x])\,dx=\int_0^1x\,dx=\tfrac12$, by Tonelli, the measure of intervals and the polynomial integral; the class of $k$ lies in $L^2$ of the completed product measure with squared norm $\tfrac12$ ([[def-completed-product-measure]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[cor-newton-leibniz-with-finitely-many-exceptional-points]], [[lem-derivative-of-a-power]]).

[A2] **Kernel operators.** For a kernel class $k$ of finite square norm, the operator $T_kf(x)=\int_0^1k(x,t)f(t)\,dt$ is bounded with $\|T_k\|\le\|k\|_2$, is Hilbert–Schmidt with $\|T_k\|_{HS}=\|k\|_2$, and is therefore compact ([[thm-l-two-kernels-give-hilbert-schmidt-operators]], [[thm-hilbert-schmidt-operators-are-compact]], [[def-hilbert-schmidt-operator]], [[def-compact-linear-operator]], [[def-bounded-linear-operator]]).

[A3] **Norm and integral bounds.** For $f\in L^2[0,1]$: Cauchy–Schwarz gives $\bigl|\int_0^xg\bigr|\le\sqrt x\,\|g\|_2$ and $\bigl(\int_0^1\bigl|\int_0^xg\bigr|^2dx\bigr)^{1/2}\le\|g\|_2$; the operator norm is the unit-ball supremum; and $\int_0^1x^{m}dx=1/(m+1)$ for integers $m\ge0$, computed by the Newton–Leibniz formula applied to the primitive $x^{m+1}/(m+1)$ of $x^m$, whose derivative is given by the derivative-of-a-power lemma, with the Riemann integral agreeing with the Lebesgue integral ([[def-operator-norm]], [[thm-cauchy-schwarz-in-an-inner-product-space]], [[cor-newton-leibniz-with-finitely-many-exceptional-points]], [[lem-derivative-of-a-power]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[A4] **Spectrum of a compact operator.** Under AC, a nonzero spectral value of a compact operator on a complex Banach space is an eigenvalue of finite algebraic multiplicity, and if the space is infinite dimensional then $0$ belongs to the spectrum ([[thm-riesz-schauder-spectrum-of-a-compact-operator]], [[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-banach-space]]).

[A5] **Convergence.** A nonnegative sequence $(b_n)$ with $b_{n+1}/b_n\to L<1$ eventually satisfies $b_{n+1}\le q\,b_n$ for a fixed $q<1$, hence $b_n\to0$; limits of sequences are unique ([[def-metric-convergence]], [[def-hilbert-space]]).

[A6] **Self-adjointness test.** The adjoint is characterized by $\langle Tf,g\rangle=\langle f,T^*g\rangle$, and $T$ is self-adjoint when $T^*=T$ ([[def-hilbert-space-adjoint]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

## Verification

**Proof technique:** direct.

**Given:** AC, the space $L^2([0,1],\mathbb C)$, the Volterra kernel and operator, and the bounds above.

1.1 **$V$ is Hilbert–Schmidt with norm $1/\sqrt2$.** By [A1] the class of $k$ has square norm $\tfrac12$ in the completed product measure; the kernel operator of [A2] is $T_kf(x)=\int_0^1k(x,t)f(t)\,dt=\int_0^xf(t)\,dt=Vf(x)$ for $f\in L^2$ and almost every $x$, by the definition of $k$; hence $V=T_k$ is Hilbert–Schmidt with $\|V\|_{HS}=\|k\|_2=1/\sqrt2$ and is compact. [A1, A2]

1.2 **Iterated integration and norm decay.** By induction on $n$: for $n=1$ the formula is the definition of $V$; assuming it for $n$, $V^{n+1}f(x)=\int_0^x\frac{1}{(n-1)!}\int_0^t(t-s)^{n-1}f(s)\,ds\,dt=\frac{1}{n!}\int_0^x(x-s)^nf(s)\,ds$ by Fubini and the inner integration $\int_s^x(t-s)^{n-1}dt=(x-s)^n/n$ [A1, A3]. Cauchy--Schwarz and Tonelli give $$\|V^{n+1}f\|_2^2\le\frac{\|f\|_2^2}{(n!)^2}\int_0^1\int_0^x(x-s)^{2n}\,ds\,dx=\frac{\|f\|_2^2}{(n!)^2(2n+1)(2n+2)},$$ so $\|V^{n+1}\|\le1/(n!\sqrt{(2n+1)(2n+2)})$, and the right side tends to $0$ because the ratio of consecutive terms tends to $0$ [A5]. [A1, A3, A5, algebra]

1.3 **$V$ is not self-adjoint.** Let $f(x)=1$ and $g(x)=x$. Then $Vf(x)=x$ and $Vg(x)=x^2/2$, so [A3] gives $\langle Vf,g\rangle=\int_0^1x^2\,dx=1/3$ but $\langle f,Vg\rangle=\int_0^1x^2/2\,dx=1/6$. These values are unequal, whereas [A6] would make them equal if $V=V^*$. [A3, A6]

2.1 **There is no nonzero eigenvalue.** Let $Vf=\lambda f$ with $\lambda\ne0$. Iterating, $V^nf=\lambda^nf$ for every $n\ge1$, so if $f\ne0$ then step 1.2 gives $$1\le\frac{\|V^n\|}{|\lambda|^n}\le b_n:=\frac{1}{|\lambda|^n(n-1)!\sqrt{(2n-1)(2n)}}.$$ But $$\frac{b_{n+1}}{b_n}=\frac1{|\lambda|n}\sqrt{\frac{(2n-1)(2n)}{(2n+1)(2n+2)}}\longrightarrow0,$$ so $b_n\to0$ by [A5], contradicting $1\le b_n$ for every $n$. Hence $f=0$: the kernel of $V-\lambda I$ is trivial for every $\lambda\ne0$. [step 1.2, A5, algebra]

3.1 **The spectrum is $\{0\}$.** By [step 1.1] $V$ is compact on the infinite-dimensional complex Banach space $L^2[0,1]$, so every nonzero spectral value would be an eigenvalue by [A4], and there are no nonzero eigenvalues by [step 2.1]; hence $\sigma(V)\subseteq\{0\}$, while $0\in\sigma(V)$ because the space is infinite dimensional [A4]. Therefore $\sigma(V)=\{0\}$. [step 1.1, step 2.1, A4]

4.1 **Conclusion.** Claims 1–4 are [step 1.1], [step 1.2], [step 2.1] and [step 3.1], and [step 1.3] proves the final non-self-adjointness assertion directly. [step 1.1, step 1.2, step 2.1, step 3.1, step 1.3] ∎
