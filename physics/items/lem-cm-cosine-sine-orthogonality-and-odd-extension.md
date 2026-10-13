---
id: lem-cm-cosine-sine-orthogonality-and-odd-extension
kind: lemma
title: "Sine orthogonality on a half period and the full-period integrals of odd $2L$-periodic functions"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-sine-coefficients-of-periodic-functions, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, cor-trigonometric-parity-and-pythagorean-identity, thm-ftc-second-part, thm-substitution, def-oriented-integral, thm-additivity-over-subintervals, thm-linearity-of-the-integral, def-continuity-real, thm-continuous-implies-integrable, thm-ftc-first-part]
dependency_roles:
  def-cm-sine-coefficients-of-periodic-functions: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-substitution: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-ftc-first-part: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845), Theorem 5.4(c) and its proof (orthonormality of the trigonometric system)"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 6.5 (sinusoidal standing-wave modes with vanishing endpoints)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Statement

All integrals in this statement and proof are ordinary Riemann integrals of continuous functions on compact intervals, as in [[def-cm-sine-coefficients-of-periodic-functions]].

Let $L>0$. Then:

**(a)** For all integers $n,k\ge1$,

$$\int_0^L\sin\Bigl(\frac{n\pi x}{L}\Bigr)\sin\Bigl(\frac{k\pi x}{L}\Bigr)dx=\frac{L}{2}\,\delta_{nk}.$$

**(b)** Let $W:\mathbb R\to\mathbb R$ be continuous ([[def-continuity-real]]), odd and $2L$-periodic. Then

$$\int_0^{2L}W(x)\,dx=0,\qquad \int_0^{2L}W(x)\cos\Bigl(\frac{k\pi x}{L}\Bigr)dx=0\quad\text{for every integer }k ,$$

and, for every integer $k\ge1$,

$$\frac{1}{2L}\int_0^{2L}W(x)\sin\Bigl(\frac{k\pi x}{L}\Bigr)dx=\frac{1}{L}\int_0^{L}W(x)\sin\Bigl(\frac{k\pi x}{L}\Bigr)dx .$$

## Facts & Assumptions

**Given:** The period $L>0$; the integers $n,k$ in (a); the continuous odd $2L$-periodic $W$ in (b).

[F1] Product-to-sum identities and values: $2\sin a\sin b=\cos(a-b)-\cos(a+b)$, $\sin(m\pi)=0$ and $\cos(m\pi)=(-1)^m$ for integers $m$, and $\sin0=0$, $\cos0=1$ ([[thm-sine-and-cosine-addition-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-sine-and-cosine-by-power-series]]).

[F2] The sine and cosine integrands in this proof are continuous on each compact interval, hence Riemann integrable ([[thm-continuous-implies-integrable]]). For $m\ne0$, $\int_0^L\cos(m\pi x/L)dx=(L/(m\pi))[\sin(m\pi)-0]=0$, and for $m=0$ the integral is $L$; the values follow from the fundamental theorem ([[thm-ftc-second-part]], [[def-oriented-integral]], [[thm-linearity-of-the-integral]]).

[F3] Additivity and change of variable on a period: for a continuous $2L$-periodic $g$, $\int_0^{2L}g=\int_0^Lg+\int_L^{2L}g$, and substituting $x=2L-u$ in the second integral gives $\int_L^{2L}g(x)dx=\int_0^Lg(2L-u)du=\int_0^Lg(-u)du$ by periodicity ([[thm-additivity-over-subintervals]], [[def-oriented-integral]], [[thm-substitution]], [[thm-ftc-first-part]]).

## Proof

**Proof technique:** direct; product-to-sum and elementary substitutions on a period.

1.1 For $n,k\ge1$, [F1] gives $2\sin(n\pi x/L)\sin(k\pi x/L)=\cos\bigl((n-k)\pi x/L\bigr)-\cos\bigl((n+k)\pi x/L\bigr)$. Integrating over $[0,L]$ and using [F2]: if $n\ne k$ both frequencies are nonzero, so the integral is $0$; if $n=k$ the first term contributes $L$ and the second (frequency $2n\ne0$) contributes $0$, so the integral is $L/2$. This proves (a). [given, F1, F2, algebra]

1.2 Since $W$ is odd and $2L$-periodic, [F3] gives $\int_0^{2L}W=\int_0^LW+\int_0^LW(-u)du=\int_0^LW-\int_0^LW=0$. [given, F3, algebra]

1.3 Likewise, $\int_0^{2L}W(x)\cos(k\pi x/L)dx=\int_0^LW(x)\cos(k\pi x/L)dx+\int_0^LW(-u)\cos(k\pi(2L-u)/L)du$. Now $W(-u)=-W(u)$ and $\cos(k\pi(2L-u)/L)=\cos(2k\pi-k\pi u/L)=\cos(k\pi u/L)$; the two integrals are equal and opposite, so the total is $0$. [given, F1, F3, algebra]

2.1 For the sine integral, split at $L$: $\int_0^{2L}W(x)\sin(k\pi x/L)dx=\int_0^L(\cdots)dx+\int_0^LW(-u)\sin(k\pi(2L-u)/L)du$. Here $\sin(k\pi(2L-u)/L)=\sin(2k\pi-k\pi u/L)=-\sin(k\pi u/L)$, and $W(-u)=-W(u)$; the second integral equals $\int_0^LW(u)\sin(k\pi u/L)du$. Hence the full-period integral is twice the half-period integral, which is the displayed identity. [given, F1, F3, algebra] ∎

## Remarks

- The sine functions $\sin(n\pi x/L)$, $n\ge1$, are the eigenfunctions of the fixed-end problem in the elementary sense of satisfying the two endpoint conditions and the second-derivative eigenequation; part (a) records only their mutual orthogonality, not completeness, which is proved separately with Fejer means.

- The identities of part (b) are the reason an odd $2L$-periodic function has no cosine component in its complex Fourier expansion; the statement is computational and uses no expansion theory.
