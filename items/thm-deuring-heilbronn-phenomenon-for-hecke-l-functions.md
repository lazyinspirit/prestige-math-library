---
id: thm-deuring-heilbronn-phenomenon-for-hecke-l-functions
kind: theorem
title: Deuring–Heilbronn zero repulsion for Hecke L-functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
- lem-hecke-congruence-family-cardinality-and-primitive-reduction
- lem-primitive-hecke-analytic-landau-page-family-core
- lem-hecke-four-factor-zero-power-mass-and-cancellation
- lem-real-part-power-sum-for-summable-complex-family
- thm-ftc-second-part
- thm-natural-logarithm-laws
- thm-real-power-continuity-and-derivatives
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
proof_strategy: four-factor exceptional-pole cancellation, exact all-zero mass, and
  the summable real-part power sum
axiom_use: Original AC, Countable Choice and Dependent Choice scope retained. Actual
  primitive Hecke and zero-indexing inputs use AC and CC; no class field or exceptional-zero
  lower bound is assumed.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the
      Chebotarev density theorem
    url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
    locator: Theorem 3.3 and full proof in §7, printed pp. 1170–1176; auxiliary LMO
      power-sum inequality, Theorem 7.1.
  - title: Asif Zaman, Analytic Estimates for the Chebotarev Density Theorem and Their
      Applications
    url: https://www.math.toronto.edu/zaman/files/thesis.pdf
    locator: Chapter 6 §6.2.1, Lemma 6.2.1 and complete proof of Theorem 6.2.2, printed
      pp. 140–142.
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $K$ be a number field of degree $n_K$ and absolute discriminant $D_K$, and let $H$ be a congruence class group with $Q=\max_{\chi\bmod H}N_{K/\mathbb Q}\mathfrak f_\chi$. Suppose a real Hecke character $\psi\bmod H$ has a real zero $\beta_1$ of $L(s,\psi)$. Let $T\ge1$, let $\chi\bmod H$ be any Hecke character, and let $\rho_0=\beta_0+i\gamma_0$ be a zero of $L(s,\chi)$ with $1/2\le\beta_0<1$ and $|\gamma_0|\le T$. Exclude only the designated occurrence $\rho_0=\beta_1$ of the same primitive $L$-function as $\psi$ (when $\chi$ has that primitive ancestor); every other zero occurrence remains included. For every $\epsilon>0$,
$$\beta_0\le1-\frac{\log\!\left(\dfrac{c_\epsilon}{(1-\beta_1)\log(D_KQT^{n_K}e^{O_\epsilon(n_K)})}\right)}{b_1\log D_K+b_2\log Q+b_3n_K\log T+O_\epsilon(n_K)},$$
where $c_\epsilon>0$ is effective and
$$(b_1,b_2,b_3)=\begin{cases}(48+\epsilon,60+\epsilon,24+\epsilon),&\psi\text{ is quadratic},\\(24+\epsilon,12+\epsilon,12+\epsilon),&\psi\text{ is trivial}. \end{cases}$$

## Statement references

[[lem-hecke-four-factor-zero-power-mass-and-cancellation|Hecke four-factor mass and exceptional-pole cancellation]]

[[lem-real-part-power-sum-for-summable-complex-family|Specified-index summable real-part power sum]]

## Facts & Assumptions

**Given:** The original field, real character, two designated zeros, $Q,T,\epsilon$, with only the explicit exceptional-occurrence exclusion in the Statement.

[F1] Primitive reduction preserves the congruence family, conductor maximum and all positive-critical zeros with multiplicities. [[lem-hecke-congruence-family-cardinality-and-primitive-reduction]]

[F2] At $Q'=e^nDQ$, $T'=T+3$, the analytic family common-region theorem has scale $\log(Q'T'^n)\ge n$ and constant $c_1=1/4{,}000{,}000$. Every zero occurrence in its near-one strip is simple and the whole family contains at most one such occurrence; all primitive completed zeros are in the open strip. [[lem-primitive-hecke-analytic-landau-page-family-core]]

[F3] For the retained target and a simple designated real exceptional zero, the all-zero nodes have attained $R$, finite mass $M=S/R$, $R\ge(\alpha+1-\beta_0)^{-2}$, and cancellation $\operatorname{Re}\sum z_j^m\le6m(1-\beta_1)\alpha^{-2m-1}$. Their effective mass coefficients tend to $(2,5/2,1)$ in the nontrivial-real case and $(1,1/2,1/2)$ in the trivial case, multiplying $(\log D,\log Q,n\log T)$, with $O_\alpha(n)$ remainder. [[lem-hecke-four-factor-zero-power-mass-and-cancellation]]

[F4] A specified naturally indexed summable complex family of mass $M=S/R$ has an integer $1\le m\le\lfloor(12+\eta)M\rfloor$ with $\operatorname{Re}\sum z_j^m\ge\eta R^m/(48+5\eta)$, for every $\eta>0$. [[lem-real-part-power-sum-for-summable-complex-family]]

[F5] FTC gives finite-interval integral comparisons, positive real powers have their derivative laws, and $\log(1+u)\le u$ for $u\ge0$ follows by integrating $1/(1+u)\le1$. [[thm-ftc-second-part]] [[thm-natural-logarithm-laws]] [[thm-real-power-continuity-and-derivatives]]

[A1] Retain the original AC, CC and DC scope. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Write $n=n_K$, $D=D_K$, $\delta=1-\beta_1$, and $\Delta=1-\beta_0>0$. Reduce the family primitively by [F1], retaining the identity of the designated primitive zero occurrence. Euler nonvanishing above one and the boundary assertion in [F2] show $\delta>0$; finite Euler factors have zeros only on real part zero. A real finite-order character is either trivial or quadratic, since its nonzero real values are $\pm1$. Put $L=\log D+\log Q+n\log(T+3)+C_\epsilon n$, where the effective $C_\epsilon\ge1$ is enlarged below. Then $n\le\log(e^nDQ(T+3)^n)\le L$. Let $\kappa=c_1/2$. If $\delta L\ge\kappa$, choose the final $c_\epsilon\le\kappa$; its numerator $\log(c_\epsilon/(\delta L))$ is nonpositive, so the claimed bound follows directly from $\beta_0<1$. Otherwise $\delta<\kappa/L$ puts $\beta_1$ in [F2]'s common region, showing that it is a simple positive-critical primitive zero. The target exclusion is exactly what ensures that the target occurrence is retained in [F3]. [A1, F1, F2, F3, given, construct, algebra]

2.1 Fix a small effective $\eta>0$ and then a sufficiently large effective $\alpha\ge1$, both depending only on the public $\epsilon>0$. The explicit mass functions in [F3] converge to their listed coefficients. Choose $\eta$ small and $\alpha$ large enough that $2(12+\eta)$ times those three coefficients is at most $(48+\epsilon,60+\epsilon,24+\epsilon)$ in the quadratic case, or $(24+\epsilon,12+\epsilon,12+\epsilon)$ in the trivial case. This is possible with strict margin because their limiting products at $\eta=0$ are precisely those six numbers before adding $\epsilon$. In the two cases respectively this gives $$2(12+\eta)M/\alpha\le D_\epsilon:=b_1\log D+b_2\log Q+b_3n\log T+E_\epsilon n,$$ for an effective $E_\epsilon>0$ chosen to absorb the $O_\alpha(n)$ term. The same mass bound, with fixed parameters, also gives $M/\alpha\le A_\epsilon L$ for an effective absolute $A_\epsilon$, enlarging $C_\epsilon$ if necessary. No field-dependent order constant or conductor-independent estimate has been promoted to uniformity. [F3, F5, step 1.1, construct, algebra]

3.1 Apply [F4] to the naturally indexed all-zero nodes of [F3]. They are nonempty because the retained target supplies a node, and are absolutely summable with positive attained maximum. For the resulting $m$, $R^m\ge(\alpha+\Delta)^{-2m}\ge\alpha^{-2m}\exp(-2m\Delta/\alpha)$, using $\log(1+\Delta/\alpha)\le\Delta/\alpha$. Combining with the cancellation inequality yields $$\exp(-2m\Delta/\alpha)\le\frac{6(48+5\eta)}\eta\,\frac m\alpha\,\delta.$$ Since $m\le(12+\eta)M$, the left side is at least $\exp(-D_\epsilon\Delta)$ by step 2.1, while the right side is at most $A'_\epsilon\delta L$ for an effective $A'_\epsilon>0$. Thus $\Delta\ge\log(1/(A'_\epsilon\delta L))/D_\epsilon$. This implication remains valid when that logarithm is nonpositive. Choose $c_\epsilon\le\min\{\kappa,1/A'_\epsilon\}$; the same bound with $\log(c_\epsilon/(\delta L))$ follows. [F3, F4, F5, step 1.1, step 2.1, algebra]

4.1 Finally $\log(T+3)\le\log T+\log4$ for $T\ge1$, so $L$ may be enlarged to $\log(DQT^ne^{C'_{\epsilon}n})$, retaining the direction of the lower bound for $\Delta$. The chosen $D_\epsilon$ is exactly the denominator displayed in the Statement, with its effective $O_\epsilon(n)=E_\epsilon n$. The large-$\delta L$ branch in step 1.1 is still valid after the final enlargement of $L$ and decrease of $c_\epsilon$. Thus both branches give exactly the original quadratic/trivial coefficients and every original height/target range, for every retained zero occurrence. All constants were chosen effectively from explicit scalar functions and the accepted common-region witness. No log-free density theorem, class-field realization or exceptional-zero lower bound is used. [F1, F2, F3, step 1.1, step 2.1, step 3.1, algebra] ∎

## Source correction

The primary Theorem3.3 on printed1153 omits an exclusion for the exceptional occurrence, but its proof(7-4)/(7-10) deletes $\beta_1$ before using the target as a node in(7-5). Applying zero repulsion to the deleted occurrence itself is not justified. This successor makes only that necessary exclusion explicit. A coincident zero of another primitive function is retained; only copies of the designated function/occurrence are removed in the locally proved cancellation lemma. All other original public hypotheses, both coefficient triples, epsilon dependence and effective uniformity are unchanged.
