---
id: def-ito-integral-for-square-integrable-predictable-processes
kind: definition
title: "Ito integral for square-integrable predictable processes"
status: draft
origin: pipeline
deps: [thm-density-of-elementary-predictable-processes-in-predictable-l2, def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, def-progressively-measurable-and-predictable-process, lem-elementary-ito-integral-is-independent-of-the-step-representation, thm-ito-isometry-for-elementary-integrands, thm-riesz-fischer-completeness-of-l-p, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aad van der Vaart, Stochastic Integration and Differential Equations, Definition 5.25"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Definition

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Fix a horizon $T>0$ and let
$\mathcal P_T$ be the predictable sigma-algebra on $[0,T]\times\Omega$
[[def-progressively-measurable-and-predictable-process]]. Let $H$ be a
predictable process with
$$E\int_0^TH_s^2\,ds=\int_{[0,T]\times\Omega}H^2\,d(\mathrm dt\otimes P)<\infty ,$$
so that $H$ is an element of the quotient space
$L^2(\mathrm dt\otimes P)$ over $\mathcal P_T$; its class is what is integrated.
The **Ito integral** $\int_0^TH_s\,dB_s$, also written $H\cdot B$ or $I_T(H)$,
is defined as follows.

1. **Construction.** By the density theorem
   [[thm-density-of-elementary-predictable-processes-in-predictable-l2]] there
   is a sequence $(H^n)$ of bounded elementary predictable integrands
   [[def-elementary-predictable-brownian-integrand]] with
   $\|H^n-H\|_{L^2(\mathrm dt\otimes P)}\to0$. For such a sequence the
   elementary integrals $I_T(H^n)$
   [[def-ito-integral-of-an-elementary-predictable-process]] form a Cauchy
   sequence in $L^2(P)$: by the elementary isometry
   [[thm-ito-isometry-for-elementary-integrands]] and the well-definedness of
   the elementary integral,
   $$E\bigl(I_T(H^n)-I_T(H^m)\bigr)^2=E\int_0^T(H^n-H^m)^2ds=\|H^n-H^m\|^2_{L^2(\mathrm dt\otimes P)} ,$$
   and the right-hand side tends to $0$. Since $L^2(P)$ is complete
   [[thm-riesz-fischer-completeness-of-l-p]], the classes $I_T(H^n)$ converge
   in $L^2(P)$; the limit is a class in $L^2(P)$, and
   $$\int_0^TH_s\,dB_s:=\lim_{n\to\infty}I_T(H^n)\qquad\text{in }L^2(P).$$
   The limit is a random variable only up to almost-sure equality; statements
   about it are statements about that class. That the limit does not depend on
   the chosen sequence $(H^n)$ is item 11, which is proved before any
   computational use of the definition.

2. **Integrals at a time.** For $t\in[0,T]$ put
   $\int_0^tH_s\,dB_s:=\int_0^TH_s1_{[0,t]}(s)\,dB_s$, the construction of
   clause 1 applied to the truncated process $H1_{[0,t]}$. That process is
   predictable: $H$ is $\mathcal P_T$-measurable and $1_{[0,t]}$ is a
   deterministic predictable indicator, so the product is
   $\mathcal P_T$-measurable; and it is square-integrable because
   $|H1_{[0,t]}|\le|H|$ pointwise. The same construction applied to $H$
   itself gives $t=T$. The family
   $\bigl(\int_0^tH\,dB\bigr)_{t\in[0,T]}$ is a family of $L^2(P)$-classes
   indexed by $t$; its continuous version is supplied by item 13, and no path
   property is asserted by this definition.

3. **Consistency with elementary integrands.** If $H$ is itself elementary,
   then the constant sequence $H^n:=H$ is admissible in clause 1, so
   $\int_0^TH\,dB$ is the limit of the constant sequence of elementary sums,
   namely the elementary sum $I_T(H)$ of
   [[def-ito-integral-of-an-elementary-predictable-process]]. The same argument
   with $H1_{[0,t]}$ in place of $H$, and the finite telescoping of the
   elementary sum over a refinement containing $t$, gives
   $\int_0^tH\,dB=I_t(H)$ for every $t\in[0,T]$. In particular the general
   definition extends, rather than replaces, the elementary definition.

4. **Linearity in the integrand is not asserted here.** Clause 1 defines each
   integral separately from an arbitrary approximating sequence; the linear and
   isometric properties of the extension are item 12. Until item 12 is proved,
   linearity may be used only for elementary integrands, where it is part of
   [[def-ito-integral-of-an-elementary-predictable-process]].

5. **Comparison with deterministic Riemann integration.** The integral is a
   stochastic integral: the integrand is paired with the Brownian path through
   left-endpoint sums, and no pathwise Riemann--Stieltjes interpretation is
   available (the companion examples page exhibits the failure of the
   bounded-variation construction). The notation $\int_0^TH\,dB$ always refers
   to the $L^2(P)$-class defined above.

The Axiom of Choice is declared because the construction selects an
approximating sequence and uses the completeness and conditional-expectation
interfaces that assume it; the implication bridge
[[thm-choice-implies-dependent-implies-countable-choice]] records the inherited
obligations. An alternative construction that avoids selecting the sequence is
not needed, because item 11 shows every sequence gives the same class.
