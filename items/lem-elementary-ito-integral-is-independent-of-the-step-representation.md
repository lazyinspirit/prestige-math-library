---
id: lem-elementary-ito-integral-is-independent-of-the-step-representation
kind: lemma
title: "Elementary Ito integrals do not depend on step representation"
status: draft
origin: pipeline
deps: [def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, thm-taking-out-what-is-known, thm-tower-property-of-conditional-expectation, thm-factorization-of-expectations-for-independent-variables, def-independent-sigma-algebras-and-events, lem-gaussian-even-moment-bound-for-brownian-increments, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Stochastic Integration and Differential Equations, Definition 5.20 and Lemma 5.22"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $H$ and $H'$ be two
elementary predictable integrands on $[0,T]$ whose values agree
$(\mathrm dt\otimes P)$-almost everywhere, and let $I_t(H)$, $I_t(H')$ be their
defining sums [[def-ito-integral-of-an-elementary-predictable-process]] for the
chosen representations. Then $I_T(H)=I_T(H')$ almost surely, and in fact
$I_t(H)=I_t(H')$ almost surely for every deterministic $t\in[0,T]$. In
particular, replacing a representation by a deterministic refinement of its
partition, or by any other elementary representation of the same
$(\mathrm dt\otimes P)$-class, does not change the sums; the elementary integral
is a function of that class.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a horizon $T>0$, elementary representations $H_s=\sum_{k=0}^{m-1}\xi_k1_{(t_k,t_{k+1}]}(s)$ and $H'_s=\sum_{l=0}^{m'-1}\xi'_l1_{(u_l,u_{l+1}]}(s)$ with bounded coefficients measurable at the left endpoints, agreeing $(\mathrm dt\otimes P)$-almost everywhere, and their defining sums.

[F1] A $(\mathrm dt\otimes P)$-almost-everywhere equality of two elementary processes, each predictable and hence product measurable, may be integrated by Tonelli: $\int_0^T\int_\Omega|H-H'|\,dP\,dt=0$. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[def-elementary-predictable-brownian-integrand]]

[F2] For $0\le s<t$ the increment $B_t-B_s$ is independent of $\mathcal F_s$, has law $N(0,t-s)$, mean $0$ and second moment $t-s$. [[def-elementary-predictable-brownian-integrand]] [[lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments]] [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F3] If $Y\in L^1(P)$ is independent of a sub-sigma-algebra $\mathcal G$, then $E[Y\mid\mathcal G]=EY$ almost surely: the constant $EY$ is $\mathcal G$-measurable, and for $A\in\mathcal G$ the factorization of expectations for the independent pair $(Y,1_A)$ gives $E[Y1_A]=EY\,P(A)$. [[def-independent-sigma-algebras-and-events]] [[thm-factorization-of-expectations-for-independent-variables]] [[lem-conditional-expectation-is-unique-almost-surely]]

[F4] For integrable $Z$ and $\mathcal H\subseteq\mathcal G$, $E[E[Z\mid\mathcal G]\mid\mathcal H]=E[Z\mid\mathcal H]$ almost surely; if $Z$ is $\mathcal G$-measurable and $ZW$ is integrable, $E[ZW\mid\mathcal G]=ZE[W\mid\mathcal G]$. [[thm-tower-property-of-conditional-expectation]] [[thm-taking-out-what-is-known]]

[F5] The defining sums are linear under a common refinement and $I_0(H)=0$; adaptedness and path continuity are part of the definition. [[def-ito-integral-of-an-elementary-predictable-process]]

[F6] AC is declared for the conditional-expectation interface. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** direct.

1.1 Let $0=w_0<w_1<\cdots<w_J=T$ be the common refinement of the two partitions, and write $H_s=\sum_{j=0}^{J-1}\eta_j1_{(w_j,w_{j+1}]}(s)$ and $H'_s=\sum_{j=0}^{J-1}\eta'_j1_{(w_j,w_{j+1}]}(s)$, where $\eta_j$ is the coefficient $\xi_k$ of the block containing $(w_j,w_{j+1}]$ and similarly for $\eta'_j$; then $\eta_j$ and $\eta'_j$ are bounded and $\mathcal F_{w_j}$-measurable, because $\mathcal F_{t_k}\subseteq\mathcal F_{w_j}$ whenever $t_k\le w_j$. [F5, given]

1.2 On each time interval the difference is the constant random variable $\eta_j-\eta'_j$: $H-H'=\sum_j(\eta_j-\eta'_j)1_{(w_j,w_{j+1}]}$ identically on $[0,T]$, so Tonelli gives $0=\int_0^T\!\!\int_\Omega|H-H'|\,dP\,dt=\sum_{j=0}^{J-1}(w_{j+1}-w_j)E|\eta_j-\eta'_j|$. Every summand is nonnegative, $w_{j+1}-w_j>0$, and therefore $E|\eta_j-\eta'_j|=0$, that is, $\eta_j=\eta'_j$ almost surely for each $j$. [F1, given]

2.1 On the common refinement the elementary sum of item 5 can be taken over the refined partition: within each original block the increments telescope, $\sum_{j:\,(w_j,w_{j+1}]\subseteq(t_k,t_{k+1}]}\xi_k(B_{w_{j+1}}-B_{w_j})=\xi_k(B_{t_{k+1}}-B_{t_k})$, a finite rearrangement of the defining sum. Applying this to $H$ and to $H'$, the difference of the two terminal sums is $D:=I_T(H)-I_T(H')=\sum_{j=0}^{J-1}(\eta_j-\eta'_j)\bigl(B_{w_{j+1}}-B_{w_j}\bigr)$ identically. [F5, step 1.1]

3.1 Write $\zeta_j:=\eta_j-\eta'_j$ and $\Delta_j:=B_{w_{j+1}}-B_{w_j}$ for each $j$. By [F2] the increment $\Delta_j$ is independent of $\mathcal F_{w_j}$ and has law $N(0,w_{j+1}-w_j)$. Hence [F3] gives $E[\Delta_j\mid\mathcal F_{w_j}]=0$ and $E[\Delta_j^2\mid\mathcal F_{w_j}]=w_{j+1}-w_j$ almost surely, because these conditional expectations of a variable independent of $\mathcal F_{w_j}$ equal its unconditional mean. Since $\zeta_j$ is bounded and $\mathcal F_{w_j}$-measurable, [F4] yields $E[\zeta_j\Delta_j\mid\mathcal F_{w_j}]=\zeta_jE[\Delta_j\mid\mathcal F_{w_j}]=0$ and $E[\zeta_j^2\Delta_j^2\mid\mathcal F_{w_j}]=\zeta_j^2(w_{j+1}-w_j)$ almost surely. [F2, F3, F4, step 2.1]

4.1 Expanding the square, $E D^2=\sum_{j,j'=0}^{J-1}E[\zeta_j\zeta_{j'}\Delta_j\Delta_{j'}]$. If $j<j'$, then $\zeta_j\Delta_j\zeta_{j'}$ is $\mathcal F_{w_{j'}}$-measurable and integrable, so the tower property and step 3.1 give $E[\zeta_j\zeta_{j'}\Delta_jE[\Delta_{j'}\mid\mathcal F_{w_{j'}}]]=0$; by symmetry every off-diagonal term vanishes. The diagonal terms satisfy $E[\zeta_j^2\Delta_j^2]=E[E[\zeta_j^2\Delta_j^2\mid\mathcal F_{w_j}]]=E[\zeta_j^2](w_{j+1}-w_j)$ by step 3.1. [F4, step 3.1]

5.1 Combining steps 4.1 and 1.2, $ED^2=\sum_{j=0}^{J-1}E[\zeta_j^2](w_{j+1}-w_j)\le\max_j\|\zeta_j\|_\infty\sum_{j=0}^{J-1}(w_{j+1}-w_j)E|\zeta_j|=0$, where the last identity is the Tonelli computation of step 1.2. Since $D$ is square-integrable, $ED^2=0$ forces $D=0$ almost surely. [step 1.2, step 4.1]

6.1 The same computation at a deterministic time $t\in[0,T]$ uses the truncated common partition $\{w_j\wedge t\}$: its nonempty blocks are $(w_j,w_{j+1}\wedge t]$ with $w_j<t$, whose left endpoints are $w_j$ and whose coefficients $\zeta_j$ are $\mathcal F_{w_j}$-measurable, so the truncated sum is elementary; the difference of the truncated sums is $\sum_{j}\zeta_j(B_{w_{j+1}\wedge t}-B_{w_j\wedge t})$, each increment is independent of $\mathcal F_{w_j}$ with second moment $(w_{j+1}\wedge t)-(w_j\wedge t)$, and the off-diagonal terms vanish by the same tower argument. The diagonal sum is $\sum_jE[\zeta_j^2]\bigl((w_{j+1}\wedge t)-(w_j\wedge t)\bigr)\le\max_j\|\zeta_j\|_\infty\sum_jE|\zeta_j|\bigl((w_{j+1}\wedge t)-(w_j\wedge t)\bigr)$, and this is $0$ by the Tonelli identity of step 1.2 restricted to $[0,t]$. Hence $I_t(H)=I_t(H')$ almost surely for every $t$. A deterministic refinement of one partition is the special case in which the two representations are identically equal, and then the shared coefficients cancel in $\zeta_j$, recovering that refinement changes nothing. AC enters only through the conditional-expectation facts [F3] and [F4]; the grid, the coefficients and the limits in the argument are all determined by the given representations. [step 5.1, F2, F4, F6, given] ∎

## Source notes

Van der Vaart, Definition 5.20 and Lemma 5.22, first defines the integral on step processes and then checks that the definition does not depend on the representation; the isometry computation for the difference is the same conditional-centering expansion used here. The nearly-sure statement at every fixed time is what makes the notation $\int_0^tH\,dB$ well defined before the completion step of item 10.
