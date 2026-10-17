---
id: lem-iterated-brownian-integral-identities
kind: lemma
title: "Product identity and conditional moments for iterated Brownian integrals"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-milstein-scheme-and-iterated-integrals
  - def-continuous-brownian-ito-process
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - def-conditional-expectation-given-a-sigma-algebra
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Kloeden and Platen, Numerical Solution of Stochastic Differential Equations, Chapter 5.2 and Section 10.3, printed pp. 167-176 and 345-351"
      url: "https://stevencjxie8.com/files/refs/ref7.pdf"
    - title: "Desmond J. Higham, An Algorithmic Introduction to Numerical Simulation of Stochastic Differential Equations, SIAM Review 43 (2001), Sections 3 and 6"
      url: "https://people.fjfi.cvut.cz/vybirja2/Seminar/Higham-NumSimulOfSDE.pdf"
    - title: "M. Tretyakov, Lecture Notes for a Mini-Course on Numerical Methods for SDEs, Section 6.4"
      url: "https://www.math.chalmers.se/~cohend/MT2016/LNminicourseSDEv1.pdf"
---

## Statement

Let the finite-dimensional Brownian It\^o setting and the integrals $I_{ij,n}$ be as in [[def-milstein-scheme-and-iterated-integrals]]. For every grid interval of length $h>0$,
$$I_{ij,n}+I_{ji,n}=\Delta W_n^i\Delta W_n^j-\delta_{ij}h.$$
In the scalar case, writing $I_n=I_{11,n}$ and $\Delta W_n=\Delta W_n^1$, this gives
$$I_n=\frac12\bigl((\Delta W_n)^2-h\bigr),\quad \mathbb E[I_n\mid\mathcal F_{t_n}]=0,\quad \mathbb E[I_n^2\mid\mathcal F_{t_n}]=\frac{h^2}{2},\quad \mathbb E[\Delta W_n I_n\mid\mathcal F_{t_n}]=0.$$
Consequently, under the commutativity condition in the Definition, the double-integral term in the general Milstein Taylor increment equals
$$\sum_{i,j}L_i\sigma_j(Y_n)I_{ij,n}=\frac12\sum_{i,j}L_i\sigma_j(Y_n)\bigl(\Delta W_n^i\Delta W_n^j-\delta_{ij}h\bigr).$$

## Facts & Assumptions

**Given:** AC, a filtered probability space with an adapted standard $m$-dimensional Brownian motion whose increments after $t_n$ are independent of $\mathcal F_{t_n}$, and the grid interval $[t_n,t_n+h]$.

[L1] [[def-milstein-scheme-and-iterated-integrals]]: $I_{ij,n}=\int_{t_n}^{t_n+h}(W_s^i-W_{t_n}^i)\,dW_s^j$, and the commutative condition is $L_i\sigma_j=L_j\sigma_i$.

[F1] [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]: for a Brownian It\^o process, the second-order term in It\^o's formula is one half of the Hessian paired with the instantaneous covariance matrix; the theorem assumes AC and the usual-filtration/integrability conventions stated in its body.

[F2] [[def-continuous-brownian-ito-process]]: Brownian increments are independent of the current sigma algebra and have their stated centered normal laws.

[F3] [[def-standard-normal-and-normal-laws]]: a standard normal has density $(2\pi)^{-1/2}e^{-x^2/2}$; its odd moments vanish and its even moments follow by integration by parts.

[F4] [[def-conditional-expectation-given-a-sigma-algebra]]: conditional expectation is the measurable integrable version characterized by its integrals on events in the conditioning sigma algebra.

[A1] [[def-axiom-of-choice]]: AC is assumed by the cited Brownian and It\^o interfaces; no further choice is used here.

## Proof

**Given:** The assumptions above.

1.1 Apply [F1] to $f(x)=x_i x_j$ on $[t_n,t_n+h]$. It gives $W^i_{t_n+h}W^j_{t_n+h}-W^i_{t_n}W^j_{t_n}=\int_{t_n}^{t_n+h}W_s^i\,dW_s^j+\int_{t_n}^{t_n+h}W_s^j\,dW_s^i+\delta_{ij}h$. Expand each integrand as its value at $t_n$ plus its Brownian increment; the two constant terms cancel from the two sides, leaving $\Delta W_n^i\Delta W_n^j=I_{ij,n}+I_{ji,n}+\delta_{ij}h$. [F1, L1, A1]

1.2 Setting $i=j=1$ in step 1.1 yields $I_n=((\Delta W_n)^2-h)/2$. By [F2], $\Delta W_n$ is independent of $\mathcal F_{t_n}$ and has law $N(0,h)$. Scaling the density in [F3] and integrating by parts give $\mathbb E[\Delta W_n\mid\mathcal F_{t_n}]=0$, $\mathbb E[(\Delta W_n)^2\mid\mathcal F_{t_n}]=h$, $\mathbb E[(\Delta W_n)^3\mid\mathcal F_{t_n}]=0$, and $\mathbb E[(\Delta W_n)^4\mid\mathcal F_{t_n}]=3h^2$. [F2, F3, step 1.1]

2.1 Substituting the four conditional moments from step 1.2 into $I_n=((\Delta W_n)^2-h)/2$ gives $\mathbb E[I_n\mid\mathcal F_{t_n}]=(h-h)/2=0$, $\mathbb E[I_n^2\mid\mathcal F_{t_n}]=(3h^2-2h^2+h^2)/4=h^2/2$, and $\mathbb E[\Delta W_n I_n\mid\mathcal F_{t_n}]=(0-h\cdot0)/2=0$. Each equality is an equality of conditional-expectation versions by the event-integral definition [F4]. [F2, F3, F4, step 1.2]

3.1 Under commutativity, pair the summand with indices $(i,j)$ with the summand $(j,i)$. The coefficients agree by [L1], so the sum equals $\frac12\sum_{i,j}L_i\sigma_j(Y_n)(I_{ij,n}+I_{ji,n})$. Substituting step 1.1 gives the displayed Brownian-increment formula. The argument includes $i=j$, where the summand is one half of $L_i\sigma_i(Y_n)((\Delta W_n^i)^2-h)$. [L1, step 1.1] ∎
