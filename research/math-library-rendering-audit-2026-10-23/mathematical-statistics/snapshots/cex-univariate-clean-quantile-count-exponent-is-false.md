---
id: cex-univariate-clean-quantile-count-exponent-is-false
kind: counterexample
title: "The claimed univariate clean-quantile count exponent is too strong"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [lem-absolutely-continuous-upper-quantile-exact-tail-mass, def-countable-choice, def-identically-distributed-and-iid-random-variables, def-bernoulli-and-binomial-random-variables, def-natural-logarithm, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws, def-real-exponential-function-and-e]
proof_strategy: direct
axiom_use: Countable Choice is used only through the upper-quantile exact-tail lemma.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, Theorem 1 and §2.1"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 8–13; the clean quantile-count bound in the proof of Theorem 1."
---

## Statement refuted

The auxiliary bound used in the source proof,
$$
\mathbb P\!\left(B_N>\frac34\varepsilon N\right)\le e^{-\varepsilon N/12},\qquad B_N\sim\operatorname{Bin}(N,\varepsilon/2),
$$
is false for admissible theorem parameters: with $\eta=0$, $\varepsilon=1/10$, $N$ sufficiently large and divisible by $40$, and $\delta=4e^{-N/120}$, one has
$$
\mathbb P\!\left(B_N>\frac{3N}{40}\right)>e^{-N/120}=e^{-\varepsilon N/12}.
$$
For absolutely continuous clean data, [[lem-absolutely-continuous-upper-quantile-exact-tail-mass]] makes this binomial variable exactly the source's upper-quantile count. This refutes that proof step, not the univariate estimator theorem.

## Facts & Assumptions

**Given:** An absolutely continuous real law, iid copies $Z_1,\ldots,Z_N$, and $N$ a sufficiently large multiple of $40$.

[A1] Countable Choice enters only through the published singleton-null result used by the exact-tail lemma ([[def-countable-choice]], [[lem-absolutely-continuous-upper-quantile-exact-tail-mass]]).

[F1] For $0<u<1$, the upper quantile has exact tail mass $\mathbb P(Z_i>Q_u(Z))=1-u$ ([[lem-absolutely-continuous-upper-quantile-exact-tail-mass]]).

[F2] The iid indicators of a common event are independent Bernoulli variables, and their sum has the binomial law ([[def-identically-distributed-and-iid-random-variables]], [[def-bernoulli-and-binomial-random-variables]]).

[F3] For $x>0$, $\log x=\int_1^x dt/t$ ([[thm-logarithm-derivative-and-integral]]).

[F4] The logarithm is continuous and satisfies its product and quotient laws, and it is inverse to the exponential ([[thm-natural-logarithm-laws]], [[def-natural-logarithm]]).

[F5] For $w>0$, the exponential power series has nonnegative terms and $e^w\ge1+w+w^2/2$ ([[def-real-exponential-function-and-e]]).

## Counterexample

**Proof technique:** direct.

**Given:** The absolutely continuous law, iid copies, and the stated $N$.

1.1 Put $\eta=0$ and $\delta=4e^{-N/120}$. For sufficiently large $N$, $0<\delta<1$ and $\delta\ge e^{-N/4}$ because $4e^{29N/120}>1$. The theorem's definition then gives $\varepsilon=8\eta+12\log(4/\delta)/N=1/10$. Hence $p=\varepsilon/2=1/20$, $q=3\varepsilon/4=3/40$, and the asserted failure exponent is $\varepsilon/12=1/120$. [F4, F5, given, algebra]

2.1 By [F1], each indicator $\mathbf1\{Z_i>Q_{19/20}(Z)\}$ has success probability $1/20$; iid sampling and [F2] give $B_N\sim\operatorname{Bin}(N,p)$ with $p=1/20$. At $q=3/40$, its relative-entropy rate is $D(q\|p)=q\log(q/p)+(1-q)\log((1-q)/(1-p))=\frac3{40}\log\frac32+\frac{37}{40}\log\frac{37}{38}$. [A1, F1, F2, step 1.1, algebra]

3.1 To bound this rate rigorously, put $x=1/5$ and $y=1/38$. From [F3] and $s=(t-1)/(t+1)$, $\log(3/2)=2\int_0^x(1-s^2)^{-1}ds$. On $[0,x]$, $(1-s^2)^{-1}=1+s^2+s^4+s^6+s^8/(1-s^2)$ and $s^8/(1-s^2)\le(25/24)s^8$, so $\log(3/2)<23947783/59062500<405466/10^6$. Also $\log(37/38)=-\int_0^y(1-s)^{-1}ds\le-y-y^2/2-y^3/3=-2195/82308<-26668/10^6$, since $(1-s)^{-1}\ge1+s+s^2$. Therefore $D(q\|p)<(3\cdot405466-37\cdot26668)/(40\cdot10^6)=229682/40000000<23/4000<1/120$. [F3, step 2.1, algebra]

4.1 Let $m=qN+1$, an integer because $40\mid N$. For $p_m=m/N$, the binomial point-mass ratio $\mathbb P_{p_m}(B_N=j+1)/\mathbb P_{p_m}(B_N=j)=((N-j)/(j+1))(p_m/(1-p_m))$ is greater than $1$ at $j=m-1$ and less than $1$ at $j=m$, and decreases with $j$. Thus $m$ is a mode of $\operatorname{Bin}(N,p_m)$, whose $N+1$ masses sum to one; consequently $\mathbb P_{p_m}(B_N=m)\ge1/(N+1)$. The binomial formula and [F4] give $\mathbb P_p(B_N=m)=\mathbb P_{p_m}(B_N=m)e^{-ND(p_m\|p)}\ge e^{-ND(p_m\|p)}/(N+1)$. By continuity of $D(r\|p)$ in $r$, [F4] and step 3.1 give $D(p_m\|p)\to D(q\|p)<1/120$. Choose $c>0$ with $D(q\|p)+c<1/120$. For all sufficiently large such $N$, $D(p_m\|p)<1/120-c$ and [F5] gives $e^{cN}\ge1+cN+(cN)^2/2>N+1$. Therefore $\mathbb P_p(B_N=m)>e^{-N/120}$. Since $m>3N/40$, this mass lies in $\{B_N>3N/40\}$, disproving the displayed source bound at the admissible parameters from step 1.1. [F2, F4, F5, step 1.1, step 2.1, step 3.1, algebra] ∎

