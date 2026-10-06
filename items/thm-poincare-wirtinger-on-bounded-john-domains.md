---
id: thm-poincare-wirtinger-on-bounded-john-domains
kind: theorem
title: "The mean-zero Poincare inequality on bounded John domains"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-axiom-of-choice, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, def-ball-average-operator-on-r-n, def-john-domain-and-john-constant, lem-john-domain-admits-bounded-overlap-ball-chains, thm-poincare-inequality-on-a-ball, lem-ball-mean-oscillation-potential-bound, lem-truncated-riesz-kernel-potential-bounded-on-lp, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n, thm-holder-inequality-for-integrals, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-linear-change-of-variables-for-lebesgue-measure, lem-classical-derivatives-are-weak-derivatives, lem-sphere-and-ball-measures-scale]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 5 §5.4, Theorem 5.33 and its proof, printed pp. 141-143."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Theorem 3.29 and the Poincare discussion, printed pp. 77-79."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a bounded John domain with admissible constant $c_J$, and let $1\le p<\infty$. There is a constant $C(n,p,c_J)$ with
$$\|u-u_\Omega\|_{L^p(\Omega)}\le C(n,p,c_J)\operatorname{diam}(\Omega)\|Du\|_{L^p(\Omega)}$$
for every $u\in W^{1,p}(\Omega;\mathbb K)$, where $u_\Omega=|\Omega|^{-1}\int_\Omega u$. The factor $\operatorname{diam}(\Omega)$ is necessary: for the function $u(x)=x_1$ on a ball of radius $R$ with the centre as distinguished point, the ratio $\|u-u_B\|_{L^p(B)}/\|Du\|_{L^p(B)}$ grows linearly in $R$, while the John constant of that pair is $1$ for every $R$.

## Facts & Assumptions

**Given:** The Axiom of Choice, whose Countable-Choice consequence is used for the measure-theoretic interfaces; a bounded John domain $\Omega$ with distinguished point $x_0$ and admissible constant $c_J$; $1\le p<\infty$; a field $\mathbb K$; and a class $u\in W^{1,p}(\Omega;\mathbb K)$.

[F1] The John chain lemma: with $r_0=\frac14\operatorname{dist}(x_0,\partial\Omega)$ and $B_0=B(x_0,r_0)$ there is $M=M(n,c_J)$ such that for every $x\in\Omega$ there are balls $B_i=B(x_i,r_i)\subseteq\Omega$ with $|B_i\cup B_{i+1}|\le M|B_i\cap B_{i+1}|$, $\operatorname{dist}(x,B_i)\le Mr_i$, $r_i\to0$, $x_i\to x$, and multiplicity at most $M$ ([[lem-john-domain-admits-bounded-overlap-ball-chains]]; $x_0,c_J$ as in [[def-john-domain-and-john-constant]]).

[F2] Ball oscillation and ball Poincare: for $v\in W^{1,p}(B)$, $\|v-v_B\|_{L^p(B)}\le C_1(n,p)r\|Dv\|_{L^p(B)}$ and $\int_B|v-v_B|\le C_2(n)r\int_B|Dv|$ for a ball $B=B(x,r)$ ([[thm-poincare-inequality-on-a-ball]], [[lem-ball-mean-oscillation-potential-bound]]).

[F3] At almost every Lebesgue point $x$ of $u$, the centered averages $A_ru(x)$ converge to $u(x)$ as $r\downarrow0$ ([[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]], [[def-ball-average-operator-on-r-n]]).

[F4] The truncated Riesz kernel bound: for measurable $\Omega'\subseteq B(z_0,\rho)$ and $f\in L^p(\Omega')$, $\|\int_{\Omega'}|x-y|^{1-n}|f(y)|dy\|_{L^p(\Omega')}\le C(n)\rho\|f\|_{L^p(\Omega')}$ ([[lem-truncated-riesz-kernel-potential-bounded-on-lp]]).

[F5] Holder's inequality and Tonelli's theorem for nonnegative functions on sigma-finite products ([[thm-holder-inequality-for-integrals]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); $W^{1,p}$ consists of $L^p$ classes with gradient in $L^p$ ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F6] Linear substitution scales Lebesgue measure by the absolute determinant ([[thm-linear-change-of-variables-for-lebesgue-measure]]); smooth classical derivatives are weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]), and balls have positive finite measure scaling with the nth power of the radius ([[lem-sphere-and-ball-measures-scale]]).

## Proof

**Proof technique:** direct.

1.1 Lebesgue points and the near case. Extend $u$ by zero outside $\Omega$; it is locally integrable. The cited differentiation theorem implies $A_s(|u-u(x)|)(x)\to0$ at almost every $x$: apply it simultaneously to $|u-a|$ for the countable dense set $a\in\mathbb Q$ (or $\mathbb Q+i\mathbb Q$), and bound $\limsup_{s\downarrow0}A_s(|u-u(x)|)(x)\le2|a-u(x)|$; let $a\to u(x)$. Write $B_0=B(x_0,r_0)$ for the fixed central ball and $B_*:=B(x_0,2r_0)\subset\Omega$. For almost every $x\in B_*$, [F2] gives $|u(x)-u_{B_*}|\le C(n)\int_{B_*}|Du(y)||x-y|^{1-n}dy$. Also $|u_{B_*}-u_{B_0}|\le|B_0|^{-1}\int_{B_*}|u-u_{B_*}|\le C(n)r_0^{1-n}\int_{B_*}|Du|$ by the $L^1$ ball Poincare estimate. Since $|x-y|\le4r_0$ for $x,y\in B_*$, this last bound is at most $C(n)\int_{B_*}|Du(y)||x-y|^{1-n}dy$. Thus $|u(x)-u_{B_0}|\le C(n)\int_\Omega|Du(y)||x-y|^{1-n}dy$ in the near case, with the same fixed $B_0$ for all $x$. [F1, F2, F3, algebra]

1.2 Telescoping along the chain. Fix a Lebesgue point $x\notin B(x_0,2r_0)$ of $u$ and a chain $\{B_i=B(x_i,r_i)\}$ from [F1], with overlap and distance constant $M$. Since $\operatorname{dist}(x,B_i)\le Mr_i$, we have $|x_i-x|\le(M+1)r_i$ and hence $B_i\subseteq B(x,(M+2)r_i)$. The volume ratio is $|B(x,(M+2)r_i)|/|B_i|=(M+2)^n$, so [F3] gives $$|u_{B_i}-u(x)|\le\frac1{|B_i|}\int_{B_i}|u(y)-u(x)|\,dy\le(M+2)^n A_{(M+2)r_i}(|u-u(x)|)(x)\longrightarrow0.$$ Thus $u_{B_i}\to u(x)$, and $|u(x)-u_{B_0}|\le\sum_{i\ge0}|u_{B_i}-u_{B_{i+1}}|$. Writing each difference of means as an average over the intersection and using $|B_i|,|B_{i+1}|\le M|B_i\cap B_{i+1}|$ from [F1], $$|u_{B_i}-u_{B_{i+1}}|\le M\left(\frac{\int_{B_i}|u-u_{B_i}|}{|B_i|}+\frac{\int_{B_{i+1}}|u-u_{B_{i+1}}|}{|B_{i+1}|}\right).$$ Applying the $L^1$ ball Poincare inequality [F2] on each ball and using the radius comparability supplied by [F1] gives $$|u_{B_i}-u_{B_{i+1}}|\le C_3(n,c_J)\sum_{j\in\{i,i+1\}}r_j\frac{\int_{B_j}|Du|}{|B_j|}.$$ [F1, F2, F3, given, algebra]

2.1 The potential bound. From step 1.2, $|u(x)-u_{B_0}|\le C_3\sum_i r_i\int_{B_i}|Du|/|B_i|$ (each ball counted with a bounded number of neighbours with comparable radii, the constant absorbed into $C_3$). For $y\in B_i$ the chain property $\operatorname{dist}(x,B_i)\le Mr_i$ gives $|x-y|\le(M+2)r_i$, hence $|B_i|=\omega_{n-1}r_i^n/n$ and $r_i/|B_i|=c(n)r_i^{1-n}\le c(n,M)|x-y|^{1-n}$; summing over $i$ and using the multiplicity bound of [F1], $\sum_i r_i\int_{B_i}|Du|/|B_i|\le c(n,M)\int_\Omega|Du(y)|\,|x-y|^{1-n}N(x,y)\,dy\le c(n,M)\int_\Omega|Du(y)|\,|x-y|^{1-n}dy$ with $N(x,y)\le M$ the number of balls containing $y$; the exchange of sum and integral is Tonelli [F5]. The index $i=0$ needs the separate bound $r_0\int_{B_0}|Du|/|B_0|\le c(n,c_J)\int_{B_0}|Du(y)||x-y|^{1-n}dy$: the John condition at $x$ gives $\operatorname{diam}\Omega\le8c_Jr_0$, so $|x-y|\le8c_Jr_0$ for $y\in B_0$ and $r_0^{1-n}\le(8c_J)^{n-1}|x-y|^{1-n}$. Together with step 1.1, this gives $|u(x)-u_{B_0}|\le C_4(n,c_J)\int_\Omega|Du(y)|\,|x-y|^{1-n}dy$ for almost every $x\in\Omega$. [F1, F5, step 1.1, step 1.2, given, algebra]

3.1 $L^p$ norms and the mean. Take $L^p(\Omega)$ norms in step 2.1 and apply the truncated kernel bound [F4] with $\Omega'=\Omega\subseteq B(x_0,\operatorname{diam}\Omega)$ and $f=|Du|$: $\|u-u_{B_0}\|_{L^p(\Omega)}\le C_5(n,c_J)\operatorname{diam}(\Omega)\|Du\|_{L^p(\Omega)}$. Since $u_{B_0}$ is a constant, $u_\Omega-u_{B_0}=|\Omega|^{-1}\int_\Omega(u-u_{B_0})$, so by Holder [F5] $|u_{B_0}-u_\Omega|\le|\Omega|^{-1}\int_\Omega|u-u_{B_0}|\le|\Omega|^{-1/p}\|u-u_{B_0}\|_{L^p(\Omega)}$. Hence $\|u-u_\Omega\|_{L^p(\Omega)}\le\|u-u_{B_0}\|_{L^p(\Omega)}+|\Omega|^{1/p}|u_{B_0}-u_\Omega|\le2\|u-u_{B_0}\|_{L^p(\Omega)}\le C(n,p,c_J)\operatorname{diam}(\Omega)\|Du\|_{L^p(\Omega)}$ with $C(n,p,c_J):=2C_5(n,c_J)$. [F1, F4, F5, step 2.1, given, algebra]

4.1 Necessity of length scaling. On $B=B(0,R)$ take $u(x)=x_1$. By [F6] its weak gradient is $e_1$, and reflection in the first coordinate gives $u_B=0$. Substituting $x=Ry$ yields $\|u\|_{L^p(B)}=R^{1+n/p}(\int_{B(0,1)}|y_1|^pdy)^{1/p}$ and $\|Du\|_{L^p(B)}=R^{n/p}|B(0,1)|^{1/p}$. The first integral is finite and positive, since the unit ball contains a ball on which $|y_1|$ is bounded below by a positive number. Their ratio is therefore $c(n,p)R$ with $c(n,p)>0$. The radial segment from any $x$ to $0$ satisfies $R-|\gamma(t)|\ge |x|-|\gamma(t)|=|x-\gamma(t)|$, so this distinguished pair admits John constant $1$ for every $R$. Thus no dimension-and-John-constant bound can omit the length factor. [F1, F6, algebra] ∎

## Source notes

Kinnunen proves the Sobolev-Poincare inequality on John domains (Theorem 5.33, printed pp. 141-143) by exactly this chaining: the telescoping over $|u_{B_i}-u_{B_{i+1}}|$, the ball Poincare inequality, the comparison $r_i\approx|x-y|$ on $B_i$, the multiplicity bound, and the truncated-kernel estimate. The present item states the $L^p$ (rather than $L^{p^*}$) mean-zero form, which is what the surrounding page promises; the chaining argument is the same, and no Sobolev exponent is used. The endpoint index $i=0$ is absorbed with the John bound $\operatorname{diam}\Omega\le8c_Jr_0$.
