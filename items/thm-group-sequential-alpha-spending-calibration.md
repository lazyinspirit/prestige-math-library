---
id: thm-group-sequential-alpha-spending-calibration
kind: theorem
title: Group-sequential boundaries exist uniquely and spend alpha exactly
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-group-sequential-alpha-spending-design
  - alg-group-sequential-alpha-spending-boundary-calibration
  - def-test-size-and-power
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - def-axiom-of-choice
  - thm-continuity-from-below-for-measures
  - thm-intermediate-value
justified_by: []
strategy: "Factor the canonical covariance as an invertible lower-triangular Gram matrix. The resulting nondegenerate Gaussian law has full support and atomless standard-normal marginals. For each look, the probability of a new crossing is a continuous strictly decreasing function of the boundary, with endpoint values equal to the previous cumulative spend and one. The intermediate value theorem gives the unique boundary; the recursion then gives the spending identities."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "David L. DeMets and K. K. Gordon Lan, Interim Analysis: The Alpha Spending Function Approach, Statistics in Medicine 13 (1994), PDF pp. 2–3, 6–7"
      url: "https://eclass.uoa.gr/modules/document/file.php/MATH301/PracticalSession3/LanDeMets.pdf"
    - title: "Michael J. Grayling, James M. S. Wason, and Adrian P. Mander, Group Sequential Clinical Trial Designs for Normally Distributed Outcome Variables, The Stata Journal 18(2) (2018), PDF pp. 2–4"
      url: "https://arxiv.org/pdf/1710.03127"
    - title: "Giorgos Minas, Multivariate Global Testing and Adaptive Designs, PhD thesis, Chapter 5 §§5.3–5.3.1, printed pp. 72–73"
      url: "https://wrap.warwick.ac.uk/id/eprint/58321/7/WRAP_THESIS_Minas_2013.pdf"
---

## Statement

Assume AC and the canonical group-sequential design of
[[def-group-sequential-alpha-spending-design]]. The recursive boundary
algorithm [[alg-group-sequential-alpha-spending-boundary-calibration]] is
well-defined: every positive spending increment has a unique finite boundary,
while a zero increment has boundary $+\infty$. For every $k$, the probability
under $P_0$ of a rejection by look $k$ is $A(t_k)$; in particular the terminal
simple-null rejection probability is $\alpha$. When embedded in an experiment
with a nonempty alternative and a singleton null whose law is $P_0$, the test
size is therefore $\alpha$. The same cumulative-probability conclusion holds
for separately calibrated symmetric two-sided crossing events. This exact
statement is conditional on the specified joint Gaussian null law and
prescheduled information fractions; it does not cover data-dependent timing,
an estimated variance, or a composite null without an additional argument.

## Facts & Assumptions

**Given:** AC, a finite $K\ge1$, prescheduled fractions
$0<t_1<\cdots<t_K=1$, $\alpha\in(0,1)$, a nondecreasing spending function
$A:[0,1]\to[0,\alpha]$ with $A(0)=0$ and $A(1)=\alpha$, and the specified
canonical null vector $Z\sim N_K(0,\Sigma)$. Prove the boundary algorithm is
well-defined and gives cumulative null rejection probability $A(t_k)$ at
each planned look.

[F1] [[def-group-sequential-alpha-spending-design]]: The planned information fractions, spending-function conditions, canonical covariance $\Sigma_{jk}=\sqrt{t_j/t_k}$ for $j\le k$, and the one-sided or symmetric two-sided crossing events are as stated in the definition.

[F2] [[def-multivariate-normal-law]]: Under AC, for finite $d$ and symmetric positive semidefinite $\Sigma$, the law $N_d(m,\Sigma)$ exists and has a realization $m+\Sigma^{1/2}Y$ with independent standard-normal coordinates $Y$.

[F3] [[lem-characteristic-function-of-a-multivariate-normal-law]]: Under AC, the vector characteristic function of $N_d(m,\Sigma)$ is $\exp(iu\cdot m-u^T\Sigma u/2)$ and determines its Borel law uniquely, including for singular $\Sigma$.

[F4] [[def-standard-normal-and-normal-laws]]: Under AC, the standard normal law $N(0,1)$ is the probability measure with density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$ on Borel subsets of $\mathbb R$.

[F5] [[lem-normal-density-has-total-mass-one]]: The standard normal density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$ is positive and Borel measurable and has Lebesgue integral one.

[F6] [[thm-continuity-from-below-for-measures]]: For an increasing sequence of measurable sets $E_n$, a measure satisfies $\mu(\bigcup_n E_n)=\sup_n\mu(E_n)$.

[F7] [[thm-intermediate-value]]: A continuous real function on a closed bounded interval takes every value between its endpoint values.

[F8] [[def-test-size-and-power]]: For a statistical experiment and nonempty disjoint null and alternative hypotheses, the size of a test is the supremum of its rejection probability over the null; when the null is a singleton, size is its rejection probability under that one null law.

[F9] [[alg-group-sequential-alpha-spending-boundary-calibration]]: At a positive spending increment the one-sided mode solves $P_0(R_{k-1}\cup\{Z_k\ge b_k\})=A(t_k)$ and the symmetric two-sided mode solves $P_0(R_{k-1}\cup\{|Z_k|\ge c_k\})=A(t_k)$; at a flat increment the boundary is $+\infty$.

[A1] [[def-axiom-of-choice]]: Assume the Axiom of Choice.

## Proof

1.1 For $1\le i\le j\le K$, define a lower-triangular matrix $L$ by $L_{j1}=\sqrt{t_1/t_j}$ and, for $2\le i\le j$, $L_{ji}=\sqrt{(t_i-t_{i-1})/t_j}$, with $L_{ji}=0$ for $i>j$. For $j\le k$, the $(j,k)$ entry of $LL^T$ is $$\frac{t_1+\sum_{i=2}^{j}(t_i-t_{i-1})}{\sqrt{t_jt_k}}=\sqrt{t_j/t_k}=\Sigma_{jk}.$$ Thus $\Sigma=LL^T$. Its diagonal entries in $L$ are $1$ and $\sqrt{(t_i-t_{i-1})/t_i}>0$ for $i\ge2$, so $L$ is invertible and $v^T\Sigma v=\|L^Tv\|^2>0$ for every nonzero $v$. [given, F1, algebra]

1.2 For every $k$, the $k$th coordinate has law $N(0,1)$ by the projection clause in [F2]. It has no atoms, and for $x<y$, $$0<P_0(x<Z_k<y)=\int_x^y\phi(u)\,du\le\frac{y-x}{\sqrt{2\pi}}.$$ Positivity follows from [F5]; the upper bound follows from $0<e^{-u^2/2}\le1$. The same facts bound a two-sided strip by $P_0(c<|Z_k|<d)\le2(d-c)/\sqrt{2\pi}$ when $0\le c<d$. [F2, F4, F5, algebra]

2.1 By [F2] and [F3], the canonical law exists and is represented by $Z=\Sigma^{1/2}Y$ for independent standard-normal coordinates $Y$. Since $\Sigma$ is positive definite by step 1.1, $\Sigma^{1/2}$ is invertible: if $\Sigma^{1/2}v=0$, then $v^T\Sigma v=0$, forcing $v=0$. The inverse image under this linear homeomorphism of any nonempty open subset of $\mathbb R^K$ is nonempty and open, hence contains a product of nonempty open intervals. Each interval has positive standard-normal probability by [F4]–[F5], and independence makes the product probability positive. Therefore every nonempty open subset of $\mathbb R^K$ has positive $P_0$-probability. [step 1.1, F2, F3, F4, F5, A1, construct]

3.1 For the induction step, fix $k\in\{1,\ldots,K\}$. Assume that the boundaries through $k-1$ have been constructed with $P_0(R_{k-1})=A(t_{k-1})$; for $k=1$ this is the empty base case $R_0=\varnothing$, $A(t_0)=A(0)=0$. Any finite two-sided boundary already constructed is positive, as established when its root was obtained. Let $S=R_{k-1}^c$. In the one-sided mode, $S$ is the intersection of the open conditions $Z_j<b_j$ for earlier finite boundaries; in the symmetric two-sided mode, it is the intersection of $|Z_j|<c_j$ for earlier finite boundaries. These conditions describe a nonempty open set: choose each constrained coordinate below its upper boundary, or inside its interval $(-c_j,c_j)$, and ignore infinite boundaries. Thus $P_0(S)=1-A(t_{k-1})\ge1-\alpha>0$. [given, F1, step 2.1, construct]

4.1 In the one-sided mode set $q(x)=A(t_{k-1})+P_0(S\cap\{Z_k\ge x\})$ for $x\in\mathbb R$. If $x<y$, then $q(x)-q(y)=P_0(S\cap\{x\le Z_k<y\})>0$. Although $S\subseteq\mathbb R^K$, it restricts only coordinates $j<k$, as described in step 3.1. Thus $O_{x,y}:=S\cap\{z\in\mathbb R^K:x<z_k<y\}$ is nonempty and open: choose each earlier coordinate below its finite one-sided boundary (or arbitrarily when its boundary is $+\infty$), choose $z_k\in(x,y)$, and choose the remaining coordinates arbitrarily. By step 2.1, $P_0(O_{x,y})>0$; the only part of $S\cap\{x\le Z_k<y\}$ omitted from $O_{x,y}$ lies on $Z_k=x$, which has probability zero by step 1.2. Also $|q(x)-q(y)|\le(y-x)/\sqrt{2\pi}$ by step 1.2, so $q$ is continuous. Moreover $q(x)\to1$ as $x\to-\infty$ and $q(x)\to A(t_{k-1})$ as $x\to+\infty$, since the omitted lower and upper normal tails tend to zero. For the symmetric two-sided mode set $q(c)=A(t_{k-1})+P_0(S\cap\{|Z_k|\ge c\})$ for $c\ge0$. For $0\le c<d$, $q(c)-q(d)=P_0(S\cap\{c\le|Z_k|<d\})>0$. Here $S$ again restricts only coordinates $j<k$, so $O_{c,d}:=S\cap\{z\in\mathbb R^K:c<|z_k|<d\}$ is nonempty and open: set every earlier coordinate to $0$ (which satisfies every finite earlier symmetric no-crossing condition because its boundary is positive), choose $z_k=(c+d)/2$, and choose the remaining coordinates arbitrarily. Step 2.1 gives $P_0(O_{c,d})>0$. The bound in step 1.2 makes $q$ continuous. Here $q(0)=1$ and $q(c)\to A(t_{k-1})$ as $c\to+\infty$. The tail limits in both modes follow from [F6] applied to increasing lower or central intervals of the standard-normal coordinate. [step 2.1, step 3.1, step 1.2, F6, algebra, construct]

5.1 Since $A$ is nondecreasing, either $A(t_k)=A(t_{k-1})$ or $A(t_{k-1})<A(t_k)\le\alpha<1$. In the flat case, [F9] assigns $+\infty$, whose crossing event is empty, so the previous cumulative probability is unchanged. In the increasing case, the target lies strictly between the endpoint limits of $q$. The limits in step 4.1 give finite endpoints on which the continuous function takes values on opposite sides of $A(t_k)$; [F7] gives a root. Strict decrease in step 4.1 makes that finite root unique. The induction therefore defines every boundary through the finite maximum $K$. In the symmetric two-sided mode $q(0)=1>A(t_k)$, so the root is strictly positive. [given, F1, F7, F9, step 4.1, algebra]

6.1 The induction step is complete: at an increasing look the selected root gives $P_0(R_k)=A(t_k)$ by [F9]; at a flat look the event union is unchanged and $A(t_k)=A(t_{k-1})$. Induction from $R_0=\varnothing$ proves the equality for every $k$. Stopping at the first crossing makes $R_k$ exactly the event of rejection by look $k$. At $k=K$, $t_K=1$ and $A(1)=\alpha$, so the terminal simple-null rejection probability is $\alpha$. For any embedding with a nonempty alternative and singleton null $\{\theta_0\}$ whose law is $P_0$, the rejection indicator is a measurable test function because $R_K$ is a finite union of Borel threshold events; [F8] then makes its size $\alpha$. AC is used in the supplied Gaussian law and representation [F2] and [F4], not in the finite root selection: each root is unique and there are only finitely many looks. [F1, F2, F4, F8, F9, step 5.1, algebra] ∎