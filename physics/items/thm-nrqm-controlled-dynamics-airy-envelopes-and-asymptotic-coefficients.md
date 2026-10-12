---
id: thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients
aliases: [nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]
kind: theorem
domain: mathematics
title: "Airy envelopes and asymptotic coefficients"
status: draft
origin: pipeline
dependency_level: 2
deps: [thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization, lem-nrqm-composites-complex-gaussian-continuation, thm-dominated-convergence, def-complex-differentiability-holomorphic-and-entire, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization: mathematical-premise
  lem-nrqm-composites-complex-gaussian-continuation: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Sections 9.2, 9.7 (Airy function integral representations, Wronskians and asymptotic expansions)"
      url: "https://dlmf.nist.gov/9.7"
    - title: "F. W. J. Olver, Asymptotics and Special Functions, Chapter 11 (uniform Airy asymptotics; standard monograph)"
      url: "https://dlmf.nist.gov/9.7"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $A$ be the
entire Airy function of
[[thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization]] and
define, for real $z$,
$$B(z):=\frac1\pi\int_0^\infty\Bigl[\exp\bigl(-t^3/3+zt\bigr)+\sin\bigl(t^3/3+zt\bigr)\Bigr]dt .$$
Then:

(a) $B$ is well defined and smooth on $\mathbb R$, extends to an entire
solution of $B''=zB$, and the Wronskian identity
$$A(z)B'(z)-A'(z)B(z)=\frac1\pi$$
holds for all complex $z$;

(b) as $Z\to+\infty$, with $\Theta=2Z^{3/2}/3+\pi/4$,
$$B(Z)=\frac1{\sqrt\pi}Z^{-1/4}e^{2Z^{3/2}/3}\bigl(1+O(Z^{-3/2})\bigr),\quad B'(Z)=\frac1{\sqrt\pi}Z^{1/4}e^{2Z^{3/2}/3}\bigl(1+O(Z^{-3/2})\bigr),$$
$$B(-Z)=\frac1{\sqrt\pi}Z^{-1/4}\bigl(\cos\Theta+O(Z^{-3/2})\bigr),\quad B'(-Z)=\frac1{\sqrt\pi}Z^{1/4}\bigl(\sin\Theta+O(Z^{-3/2})\bigr);$$

(c) *Envelopes.* With $p(z):=1+|z|$ and $S(z):=\frac23(z_+)^{3/2}$ there is a
constant $C<\infty$ with
$$|A(z)|\le Cp(z)^{-1/4}e^{-S(z)},\quad|B(z)|\le Cp(z)^{-1/4}e^{S(z)},\quad |A'(z)|\le Cp(z)^{1/4}e^{-S(z)},\quad|B'(z)|\le Cp(z)^{1/4}e^{S(z)}$$
for all real $z$, and there is $c>0$ with
$A(z)\ge cp(z)^{-1/4}e^{-S(z)}$ for $z\ge0$.

## Facts & Assumptions

**Given:** the entire functions $A,B$ and real $z,Z>0$.

[F1] $A$ is entire with $A''=zA$, and its positive and negative asymptotics and the estimate of its oscillatory representation are known ([[thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization]]).

[F2] The exponential integral $E(z):=\pi^{-1}\int_0^\infty e^{-t^3/3+zt}dt$ is absolutely convergent with all derivatives uniformly convergent on compact real sets. The sine integral $S(z):=\pi^{-1}\int_0^\infty\sin(t^3/3+zt)dt$ is conditionally convergent, uniformly on compact real sets, as is its first derivative: integrate the tails by parts against $t^2+z$. For higher derivatives use distributions in $z$; pairing against smooth compactly supported tests supplies rapid Fourier decay. Integration by parts in $t$ then gives $E''-zE=\pi^{-1}$ and $S''-zS=-\pi^{-1}$ as distributions, with the finite endpoint at $t=0$ supplying the signs. Thus the continuous function $B=E+S$ satisfies $B''=zB$ distributionally, meaning $\int B\varphi''=\int zB\varphi$ for every smooth compactly supported real test $\varphi$. It is a classical smooth solution: twice integrating the continuous function $zB(z)$ locally leaves a distribution with second derivative zero, hence an affine function (convolving locally with a smooth approximate identity gives affine smooth functions, and passing to the locally uniform limit gives the same conclusion). Iteration then gives smoothness. The Airy Taylor recurrence extends its Cauchy data uniquely to an entire solution (the recurrence is $(n+2)(n+1)b_{n+2}=b_{n-1}$ for $n\ge1$ and $b_2=0$, giving infinite radius by the ratio test on each of the three coefficient subsequences). ([[thm-dominated-convergence]], [[def-complex-differentiability-holomorphic-and-entire]], algebra).

[F3] The substitution computations: for $Z>0$, $t=\sqrt Z+Z^{-1/4}u$ in the exponential integral and $t=\sqrt Z\,s$ with the Fresnel identity in the sine integral ([[thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization]], [[lem-nrqm-composites-complex-gaussian-continuation]]).

## Proof

1.1 [Definition and ODE] By [F2], $B=E+S$ is smooth and satisfies $B''=zB$ since the two one-sided forcing terms cancel; analytic continuation gives an entire solution. [F2, algebra]

2.1 [Positive asymptotics] For $Z>0$, substitute $t=\sqrt Z+Z^{-1/4}u$ in $E(Z)$. Its exponent is $2Z^{3/2}/3-u^2-u^3/(3Z^{3/4})$, with $u\ge-Z^{3/4}$. On this domain the real exponent after removal of $2Z^{3/2}/3$ is at most $-2u^2/3$. Split at $|u|=Z^{3/4}/4$: the outer contribution is exponentially small; on the central part expand the cubic exponential through its linear term. That linear term is odd and integrates to zero on the symmetric central interval; the remainder is bounded by $CZ^{-3/2}|u|^6e^{-c u^2}$ after multiplication by the Gaussian. Thus $E(Z)=\pi^{-1/2}Z^{-1/4}e^{2Z^{3/2}/3}(1+O(Z^{-3/2}))$. For $E'$ the extra amplitude $t=\sqrt Z+Z^{-1/4}u$ gives the same relative bound: its extra linear term is odd, and its first nonzero cross term is also of relative order $Z^{-3/2}$. The nonstationary sine integral at positive $Z$ is $O(Z^{-1})$, and its first derivative is polynomially bounded, by integration by parts after scaling $t=\sqrt Z s$ with phase derivative $1+s^2$. Both are negligible relative to the exponential terms. This proves the positive formulas in (b). [step 1.1, F1, F2, F3, algebra]

2.2 [Negative asymptotics and endpoint cancellation] Substituting $t=u/Z$ gives $E(-Z)=1/(\pi Z)+O(Z^{-4})$, since $|e^{-u^3/(3Z^3)}-1|\le u^3/(3Z^3)$ and the moments against $e^{-u}$ are finite. In the sine integral use $t=\sqrt Z s$, $\lambda=Z^{3/2}$, and the phase $s^3/3-s$. Near the endpoint $s=0$, integration by parts supplies $-1/(\pi Z)$; the next endpoint terms start at $O(Z^{-4})$ because the second derivative of the phase vanishes there. Near $s=1$, the compact Morse-coordinate/Fourier-moment estimate proved in [F1] gives the stationary contribution $\pi^{-1/2}Z^{-1/4}\cos(2Z^{3/2}/3+\pi/4)$ with absolute error $O(Z^{-7/4})$. On the remaining region repeated nonstationary integration gives a smaller error. The two endpoint contributions cancel in $B(-Z)=E(-Z)+S(-Z)$. Apply the same argument directly to the first differentiated integrals (amplitude $t$), not by differentiating an unspecified remainder: the endpoint terms cancel again, and the stationary term is $\pi^{-1/2}Z^{1/4}\sin(2Z^{3/2}/3+\pi/4)$ with absolute error $O(Z^{-5/4})$. This gives the negative formulas in (b). [step 1.1, F1, F2, F3, algebra]

3.1 [Wronskian and envelopes] $AB'-A'B$ has derivative $AB''-A''B=0$ by step 1.1 and [F1]. Taking $Z\to+\infty$ in step 2.1 and [F1] gives the constant $\pi^{-1}$. The upper envelopes follow from steps 2.1 and 2.2 outside a compact interval and continuity inside it. For the lower envelope, [F1] gives $A>0$ and $A'<0$ for large positive $z$. In fact $A$ has no zero on $[0,\infty)$: if there were a last zero $z_0$, positivity on $(z_0,\infty)$ would give $A''=zA\ge0$ there, so $A'$ would be increasing with limit zero and hence nonpositive, contradicting $A(z_0)=0<A(z)$ for $z>z_0$. A last zero exists if any does, since zeros are isolated and positivity already holds beyond a fixed compact interval. The positive asymptotics and the positive minimum of $A(z)(1+z)^{1/4}e^{2z^{3/2}/3}$ on that compact interval now yield the global lower envelope. This proves (a)-(c). [step 1.1, step 2.1, step 2.2, F1, F3, algebra] ∎
