---
id: thm-siegel-ineffective-lower-bound-dirichlet-zero
kind: theorem
title: Siegel's ineffective distance bound for real zeros of Dirichlet L-functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - thm-siegel-ineffective-lower-bound-dirichlet-l-at-one
  - def-primitive-dirichlet-character-and-conductor
  - lem-real-dirichlet-l-derivative-bound-near-one
  - thm-primitive-dirichlet-l-analytic-continuation
  - def-complex-norm-and-complex-normed-space
  - thm-complex-plane-is-complete
  - def-banach-space
  - lem-mean-value-inequality-for-a-differentiable-banach-valued-curve
  - thm-natural-logarithm-laws
  - thm-logarithm-slower-than-every-positive-power
  - def-real-power
  - thm-real-power-laws
  - thm-real-power-continuity-and-derivatives
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ian Petrow, Introduction to Analytic Number Theory
      url: https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf
      locator: Corollary 10.5 and complete proof, printed p. 79.
    - title: Sheng-Chi Liu, Lecture Notes in Analytic Number Theory
      url: https://bpb-us-w2.wpmucdn.com/faculty.umaine.edu/dist/1/19/files/2022/08/analyticnumbertheory.pdf
      locator: Theorem 31.2.2 proof, printed p. 81.

---




## Statement

For every real $\varepsilon>0$ there is a constant $c_\varepsilon>0$ such that every primitive real nonprincipal Dirichlet character $\chi$ of conductor $q\ge3$ and every real zero $\beta\in(0,1)$ of $L(s,\chi)$ satisfy
$$1-\beta\ge c_\varepsilon q^{-\varepsilon}.$$
The proof gives no effective procedure for computing $c_\varepsilon$.

## Statement references

Ian Petrow, *Introduction to Analytic Number Theory*, Corollary 10.5 and complete proof, printed p. 79.

Sheng-Chi Liu, *Lecture Notes in Analytic Number Theory*, Theorem 31.2.2 proof, printed p. 81.

## Facts & Assumptions

**Given:** A real $\varepsilon>0$, a primitive real nonprincipal Dirichlet character $\chi$ of conductor $q\ge3$, and a real zero $\beta\in(0,1)$ of its $L$-function.

[F1] For every $\eta>0$ there is an ineffective constant $c_\eta>0$ such that $L(1,\chi)\ge c_\eta q^{-\eta}$ ([[thm-siegel-ineffective-lower-bound-dirichlet-l-at-one]]).

[F2] A primitive character is not induced from a proper divisor of its conductor; its conductor and primitive inducing character are unique ([[def-primitive-dirichlet-character-and-conductor]]).

[F3] If $\max\{1/2,1-1/\log q\}\le\sigma\le1$, then $|L'(\sigma,\chi)|\le C(\log q)^2$ for an absolute $C$ ([[lem-real-dirichlet-l-derivative-bound-near-one]]).

[F4] The primitive nonprincipal $L$-function is entire, hence its restriction to a real interval is continuous and differentiable ([[thm-primitive-dirichlet-l-analytic-continuation]]).

[F5] The complex plane with its usual norm is a Banach space ([[def-complex-norm-and-complex-normed-space]], [[thm-complex-plane-is-complete]], [[def-banach-space]]). A continuous differentiable curve in a Banach space whose derivative has norm at most $C$ on an interval changes by at most $C$ times the interval length ([[lem-mean-value-inequality-for-a-differentiable-banach-valued-curve]]).

[F6] The natural logarithm is strictly increasing and $\log1=0$, so $\log q>0$ for $q\ge3$; moreover, for every $\alpha>0$, $\log x=o(x^\alpha)$ as $x\to\infty$, so $\log q\le C_\alpha q^\alpha$ for all $q\ge3$ after enlarging the constant on a bounded interval ([[thm-natural-logarithm-laws]], [[thm-logarithm-slower-than-every-positive-power]]).

[F7] For $q>0$ real powers satisfy $q^{r+s}=q^rq^s$ and $q^r$ is differentiable in $q$ with derivative $rq^{r-1}$; hence for fixed $\varepsilon>0$, $q^{-\varepsilon}$ decreases as $q$ increases ([[def-real-power]], [[thm-real-power-laws]], [[thm-real-power-continuity-and-derivatives]]).

## Proof

**Given:** The data in the statement.

1.1 Put $T_q=\max\{1/2,1-1/\log q\}$. If $\beta<T_q$, then $$1-\beta>1-T_q=\min\{1/2,1/\log q\}.$$ By [F6], $1/\log q\ge C_\varepsilon^{-1}q^{-\varepsilon}$ for some $C_\varepsilon>0$. By [F7], $q^{-\varepsilon}\le3^{-\varepsilon}$ for $q\ge3$, so $1/2\ge(3^\varepsilon/2)q^{-\varepsilon}$. Thus this case gives $1-\beta\ge c'_{\varepsilon}q^{-\varepsilon}$ with $c'_{\varepsilon}=\min\{C_\varepsilon^{-1},3^\varepsilon/2\}>0$. [F6, F7, given, algebra]

1.2 Now suppose $\beta\ge T_q$. The entire function in [F4], restricted to $[\beta,1]$, satisfies the hypotheses of the Banach-valued mean-value inequality in [F5], with $X=\mathbb C$ and derivative bound from [F3]. Since $L(\beta,\chi)=0$, it follows that $$L(1,\chi)=|L(1,\chi)-L(\beta,\chi)|\le C(\log q)^2(1-\beta).$$ Using [F1] with $\eta=\varepsilon/2$ gives $$1-\beta\ge \frac{c_{\varepsilon/2}}{C}\frac{q^{-\varepsilon/2}}{(\log q)^2}.$$ By [F6] with $\alpha=\varepsilon/4$, $(\log q)^2\le C_\varepsilon q^{\varepsilon/2}$, and [F7] gives the required real-power multiplication; this is at least $c''_\varepsilon q^{-\varepsilon}$ for a positive constant. [F1, F3, F4, F5, F6, F7, given, algebra]

2.1 The smaller of $c'_{\varepsilon}$ from step 1.1 and $c''_\varepsilon$ from step 1.2 is a positive constant valid in both cases. Its value inherits the ineffectivity of [F1], so the asserted bound follows with no effective computation of that constant. [F1, step 1.1, step 1.2, algebra] ∎

