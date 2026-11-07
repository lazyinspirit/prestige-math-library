---
id: lem-maynard-pratt-type-ii-count-from-mollified-fourth-moment
kind: lemma
title: "Type II zeta-zero count from the mollified fourth moment"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - def-maynard-pratt-type-ii-detection-integral
  - cor-zeta-zero-count-unit-interval
  - lem-riemann-zeta-linear-growth-on-critical-line
  - thm-gamma-meromorphic-continuation
  - thm-stirling-formula-gamma
  - def-number-theoretic-mobius-function
proof_strategy: direct
sources:
  references:
    - title: "J. Maynard and K. Pratt, Half-isolated zeros and zero-density estimates"
      url: "https://arxiv.org/abs/2206.11729"
      locator: "Definition 22 and proof of Lemma 24, Appendix C; the transfer calculation below is written with an explicitly assumed mollified moment."
    - title: "L. Guth and J. Maynard, New large value estimates for Dirichlet polynomials"
      url: "https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v"
      locator: "§13.1, the Type II zero-detection term."
---

## Statement

Assume countable choice. For $T\ge2$ define $$M_T(s)=\sum_{1\le m\le2T^{1/100}}\mu(m)m^{-s},\qquad F_T(t)=M_T(\tfrac12+it)\zeta(\tfrac12+it),$$ and let $I_T(\rho)$ be the Type II integral of [[def-maynard-pratt-type-ii-detection-integral]] for each nontrivial zero $\rho=\beta+i\gamma$ with $0<\beta<1$ and $\gamma\in[T,2T]$. Suppose there are constants $A_0>0$, $B_0\ge0$ and $T_0\ge2$ such that, for every $T\ge T_0$,
$$\int_{T/2}^{3T}|F_T(t)|^4\,dt\le A_0T(\log T)^{B_0}.$$
Then there are constants $C>0$ and $T_1\ge T_0$, depending only on $A_0,B_0,T_0$ and the absolute constants in the cited zero-window and Gamma estimates, such that for every $T\ge T_1$ and every $\sigma\in[1/2,1]$, the number of zero occurrences, counted with multiplicity, with $\beta\ge\sigma$, $\gamma\in[T,2T]$ and $|I_T(\rho)|\ge1/3$ is at most
$$C\,T^{2(1-\sigma)}(\log T)^{B_0+5}.$$
The fourth-moment estimate is an explicit hypothesis, not established by this lemma. The result does not assert a Type I estimate or the Guth–Maynard zero-density theorem.

## Facts & Assumptions

**Given:** Countable choice, $A_0,B_0,T_0$ and the displayed fourth-moment hypothesis, and the parameters and zero count in the Statement.

[A1] Countable choice holds. [[def-countable-choice]]

[F1] The stated Type II integral is absolutely convergent, with the prescribed removable value when $\beta=1/2$. [[def-maynard-pratt-type-ii-detection-integral]]

[F2] Each closed positive unit-height interval contains at most $C\log(t+2)$ nontrivial zero occurrences, with multiplicity. [[cor-zeta-zero-count-unit-interval]]

[F3] On the critical line $|\zeta(1/2+it)|\le2+2|t|$, and $|\mu(m)|\le1$. [[lem-riemann-zeta-linear-growth-on-critical-line]], [[def-number-theoretic-mobius-function]]

[F4] Gamma is meromorphic with a simple pole at zero, $z\Gamma(z)=\Gamma(z+1)$ off the poles, and the uniform sector form of Stirling's formula holds. [[thm-gamma-meromorphic-continuation]], [[thm-stirling-formula-gamma]]

## Proof

**Proof technique:** isolate the critical-line boundary, dominate the Gamma kernel uniformly away from its pole, and transfer the fourth moment by a finite zero-window count.

1.1 Put $L=\log T$ and take $T$ large enough that $L\ge2$. By F2, covering $[T,2T]$ by at most $T+2$ closed unit intervals counts at most $CTL$ zero occurrences, including multiplicities. If $1/2\le\sigma\le1/2+1/L$, then $T^{2(1-\sigma)}\ge e^{-2}T$, so this total count is at most $C'e^2T^{2(1-\sigma)}L$. Since $B_0\ge0$, it is bounded by the required right-hand side. This branch includes every critical-line zero, where F1 uses its removable value. [A1, F1, F2, given, algebra]

2.1 Now suppose $\sigma>1/2+1/L$. For a counted zero set $\delta=\beta-1/2$. Then $1/L<\delta<1/2$. F4 and compactness show that $|\Gamma(1-\delta+iu)|$ is uniformly bounded for $|u|\le1$, so the functional equation gives $|\Gamma(-\delta+iu)|\le C/|{-\delta+iu}|\le CL$ there. For $|u|\ge1$, all $-\delta+iu$ lie in one closed sector away from the negative real axis. The sector-uniform Stirling estimate, with $-1/2\le-\delta\le0$, gives $|\Gamma(-\delta+iu)|\le C e^{-|u|}$ for sufficiently large $|u|$; compactness supplies the remaining bounded range. Enlarging $C$ gives the single uniform estimate $$|\Gamma(-\delta+iu)|\le CL e^{-|u|}\qquad(u\in\mathbb R).$$ [F4, step 1.1, given, algebra]

3.1 Since $\rho-\delta+iu=1/2+i(\gamma+u)$, the definition F1, step 2.1 and $|T^{iu/2}|=1$ give $$|I_T(\rho)|\le CL\,T^{-\delta/2}\int_{\mathbb R}e^{-|u|}|F_T(\gamma+u)|\,du.$$ By F3 the finite mollifier is bounded by $C T^{1/200}$ and $|\zeta(1/2+it)|\le2+2|t|$, so both the first and fourth power weighted integrals have absolutely convergent exponential tails. Weighted Hölder on finite intervals, followed by those tails, gives $$(\int e^{-|u|}|F_T(\gamma+u)|du)^4\le 2^3\int e^{-|u|}|F_T(\gamma+u)|^4du.$$ Indeed the weight has total mass $2$, and this is the ordinary four-exponent Hölder inequality for that finite measure. Thus, since $T^{-2\delta}\le T^{1-2\sigma}$, $$|I_T(\rho)|^4\le CL^4T^{1-2\sigma}\int_{\mathbb R}e^{-|u|}|F_T(\gamma+u)|^4du.$$ [F1, F3, step 2.1, given, algebra]

4.1 By F3, $|M_T(1/2+it)|\le\sum_{m\le2T^{1/100}}m^{-1/2}\le C T^{1/200}$ and hence $|F_T(t)|^4\le C T^{1/50}(1+|t|)^4$. For $\gamma\in[T,2T]$, the part of the integral in step 3.1 with $\gamma+u\notin[T/2,3T]$ has $|u|\ge T/2$ and is at most $CT^{-100}$ after increasing the large-$T$ threshold: an exponential dominates the displayed polynomial. Summing these tails over all at most $CTL$ occurrences from step 1.1 remains negligible. This also justifies every improper integral and finite interchange below. [F3, step 1.1, step 3.1, algebra]

5.1 For any real $t$, F2 implies $$\sum_{\substack{\rho:\,T\le\gamma\le2T}}e^{-|t-\gamma|}\le CL.$$ Indeed partition $[T,2T]$ into unit intervals; each contains $O(L)$ zero occurrences, and at distance $j$ from $t$ there are at most two such intervals, whose weights are $O(e^{-j})$. This includes repeated zeros. For the selected zero occurrences, $|I_T(\rho)|\ge1/3$ implies $1\le81|I_T(\rho)|^4$. Sum the estimate of step 3.1 over them, change variables $t=\gamma+u$, apply step 4.1 to the tails, and use the displayed bound on $[T/2,3T]$. The result is $$R_{II}(\sigma,T)\le CL^5T^{1-2\sigma}\int_{T/2}^{3T}|F_T(t)|^4dt+O(T^{-90}).$$ [F2, step 1.1, step 3.1, step 4.1, given, algebra]

6.1 Insert the assumed fourth moment into step 5.1. The main term is at most $CA_0T^{2-2\sigma}L^{B_0+5}$. Since $1/2\le\sigma\le1$, its power of $T$ is nonnegative, so the displayed negligible tail is absorbed for large $T$. Together with step 1.1 this proves the stated bound uniformly throughout $[1/2,1]$. No bound on the assumed fourth moment is proved here. [step 1.1, step 5.1, given, algebra] ∎
