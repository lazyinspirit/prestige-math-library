---
id: thm-gleason-kahane-zelazko
kind: theorem
title: Gleason Kahane Zelazko
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["lem-zero-free-entire-function-of-exponential-type-is-an-exponential", "def-unital-banach-algebra", "lem-neumann-series", "thm-banach-series-criterion", "lem-complex-exponential-series-converges-everywhere", "lem-cauchy-product-of-absolutely-convergent-complex-series", "thm-liouville-bounded-entire-function", "cor-complex-power-series-sums-are-analytic", "thm-complex-power-series-converge-locally-uniformly", "def-complex-exponential", "cor-complex-power-series-sums-have-derivatives-of-all-orders", "def-complex-series-power-series-and-absolute-convergence", "thm-direct-comparison-test", "thm-absolute-convergence-of-complex-series", "thm-complex-analytic-functions-are-holomorphic", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-complex-exponential-addition-and-real-extension"]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Theorem 3.1.11, printed pp. 59–61"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.5.1, printed pp. 258–262"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Let $A$ be a complex unital Banach algebra
([[def-unital-banach-algebra]]) and let $\varphi : A \to \mathbb C$ be a complex
linear map with $\varphi(1) = 1$ which is **nonzero on every invertible element**:
$\varphi(a) \ne 0$ whenever $a \in A$ is invertible. Then $\varphi$ is
continuous and multiplicative:

$$|\varphi(a)| \le \|a\| \quad\text{and}\quad \varphi(ab) = \varphi(a)\varphi(b) \qquad (a,b \in A).$$

No commutativity of $A$ is assumed, and the argument is choice-free. The
hypothesis is that $\varphi$ is nonzero on invertible elements, not that it is
nonzero on $A$; together with $\varphi(1) = 1$ it is the exact hypothesis used.

## Facts & Assumptions

**Given:** A complex unital Banach algebra $A$ and a complex-linear $\varphi : A \to \mathbb C$ with $\varphi(1) = 1$ that is nonzero at every invertible element.

[F1] $A$ is complete, $\|1\| = 1$, the multiplication is associative and bilinear with $\|xy\| \le \|x\|\,\|y\|$, and $1 \ne 0$ ([[def-unital-banach-algebra]]).

[F2] If $\|y\| < 1$ then $1-y$ is invertible with inverse $\sum_{n\ge0}y^n$; hence $\lambda 1 - a$ is invertible whenever $|\lambda| > \|a\|$ ([[lem-neumann-series]]).

[F3] A normed space is a Banach space if and only if every absolutely convergent series in it converges ([[thm-banach-series-criterion]]).

[F4] For every $\zeta \in \mathbb C$ the series $\sum \zeta^n/n!$ converges absolutely ([[lem-complex-exponential-series-converges-everywhere]], [[def-complex-exponential]]).

[F5] The radius is defined by the real absolute-value coefficient series. The sum on its open disc is analytic, hence holomorphic; there all derivatives are given by termwise differentiation. Nonnegative series admit the direct comparison test, and absolutely convergent complex series converge. ([[def-complex-series-power-series-and-absolute-convergence]], [[cor-complex-power-series-sums-are-analytic]], [[thm-complex-analytic-functions-are-holomorphic]], [[cor-complex-power-series-sums-have-derivatives-of-all-orders]], [[thm-direct-comparison-test]], [[thm-absolute-convergence-of-complex-series]]).

[F6] If $f$ is entire and zero-free with constants $M>0$, $C \ge 0$ satisfying $|f(z)| \le Me^{C|z|}$ for all $z$, then $f(z) = f(0)e^{az}$ with $a = f'(0)/f(0)$ ([[lem-zero-free-entire-function-of-exponential-type-is-an-exponential]]).

[F7] Every bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

[F8] The complex exponential satisfies $e^{z+w}=e^ze^w$, agrees with the real exponential on reals and has modulus $|e^z|=e^{\operatorname{Re}z}$. ([[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

**Proof technique:** direct.

1.1 $|\varphi(a)| \le \|a\|$ for every $a$: otherwise put $\lambda:=\varphi(a)$, so $|\lambda|>\|a\|$ and $\lambda 1-a=\lambda(1-a/\lambda)$ is invertible by [F2], while $\varphi(\lambda1-a)=\lambda-\varphi(a)=0$ by linearity and $\varphi(1)=1$; this contradicts the hypothesis that $\varphi$ vanishes at no invertible element. [F1, F2, algebra]

1.2 Put $E_a(z)=\sum_{n\ge0}z^na^n/n!$. Comparison with $\sum (|z|\|a\|)^n/n!$ and completeness prove convergence and $\|E_a(z)\|\le e^{|z|\|a\|}$. For $S_N(z)=\sum_{k=0}^N z^ka^k/k!$, the terms of total degree $n\le N$ in $S_N(z)S_N(-z)$ sum to $a^nz^n\sum_{k=0}^n(-1)^{n-k}/(k!(n-k)!)$, namely 1 for $n=0$ and 0 otherwise by the finite binomial formula. Writing $t=|z|\|a\|$, the remaining terms have norm at most $\sum_{n=N+1}^{2N}t^n\sum_{k=\max(0,n-N)}^{\min(n,N)}1/(k!(n-k)!)\le\sum_{n>N}(2t)^n/n!\to0$. Multiplication is continuous by submultiplicativity. Passing to the limit, and then exchanging the two factors in the same computation, gives $E_a(z)E_a(-z)=E_a(-z)E_a(z)=1$. No commutativity beyond the powers of the single element $a$ is used. [F1, F3, F4, F5, algebra]

1.3 The scalar analytic estimate used below is direct: if $|d_n|\le D r^n/n!$ with $D,r\ge0$, then for every $R\ge0$, $\sum |d_n|R^n\le D e^{rR}<\infty$ by comparison. The absolute-value coefficient series therefore converges at every real argument, and its radius, hence the complex radius, is infinite. By [F5] its sum is entire and its derivative at zero is $d_1$. This includes $D=0$ and $r=0$, using the constant-term convention $0^0=1$. [F4, F5, algebra]

2.1 $\varphi(E_a(z)) = \sum_{n\ge0}z^n\varphi(a^n)/n!$ for every $z$, by continuity of $\varphi$ from [step 1.1] applied to the partial sums of the absolutely convergent series of [step 1.2]; consequently $f_a(z) := \varphi(E_a(z))$ is an entire function of $z$, with $|f_a(z)| \le \|E_a(z)\| \le e^{|z|\|a\|}$, $f_a(0) = \varphi(1) = 1$, derivative $f_a'(0) = \varphi(a)$ by termwise differentiation, and $f_a$ is zero-free because $E_a(z)$ is invertible by [step 1.2] and $\varphi$ vanishes at no invertible element. [step 1.1, step 1.2, step 1.3, F5, algebra]

3.1 By [F6] applied to the zero-free entire $f_a$ of [step 2.1] with $M = 1$ and $C = \|a\|$: $f_a(z) = e^{z\varphi(a)}$, that is, $\varphi(E_a(z)) = e^{z\varphi(a)}$ for all $z \in \mathbb C$ and all $a \in A$. [step 2.1, F6]

4.1 Fix $a,b \in A$ and put $F(z,w) := \varphi(E_a(z)E_b(w))$. For fixed $w$, the function $z \mapsto F(z,w) = \sum_n z^n\varphi(a^nE_b(w))/n!$ is entire with $|F(z,w)| \le e^{|z|\|a\|}e^{|w|\|b\|}$, the bound coming from [step 1.2] and [step 1.1]; $F(0,w) = \varphi(E_b(w)) = e^{w\varphi(b)}$ by [step 3.1]; $F(\cdot,w)$ is zero-free because $E_a(z)E_b(w)$ is a product of invertibles [step 1.2]; and $\partial_zF(0,w) = \varphi(aE_b(w))$ by termwise differentiation of this scalar power series, whose coefficient bound is $\|a\|^n\|E_b(w)\|/n!$. [step 1.1, step 1.2, step 1.3, step 3.1, F5, algebra]

5.1 Applying [F6] to $z \mapsto F(z,w)/F(0,w)$ (zero-free, value $1$ at $0$, growth $M_w e^{\|a\||z|}$ with $M_w := e^{2\|b\||w|}$) gives $F(z,w) = F(0,w)e^{zc(w)}$ for every $z$, where $c(w) := \partial_zF(0,w)/F(0,w) = \varphi(aE_b(w))e^{-w\varphi(b)}$. [step 1.1, step 4.1, F6, F8, algebra]

6.1 The numerator $\varphi(aE_b(w))=\sum_{n\ge0}w^n\varphi(ab^n)/n!$ is entire by step 1.3, since its coefficients are bounded by $\|a\|\|b\|^n/n!$. The exponential factor in $c(w)=\varphi(aE_b(w))e^{-w\varphi(b)}$ is entire by the same estimate; the product is holomorphic by the product rule, obtained directly by splitting its difference quotient. Thus $c$ is entire. Fix $w$. If $c(w)\ne0$, set $z=t\overline{c(w)}/|c(w)|$, $t>0$. The identity in step 5.1 and [F8] give $|F(0,w)|e^{t|c(w)|}\le e^{t\|a\|+|w|\|b\|}$. Since $|F(0,w)|=e^{\operatorname{Re}(w\varphi(b))}$, this implies $t(|c(w)|-\|a\|)\le2|w|\|b\|$. Divide by $t$ and let $t\to\infty$ to obtain $|c(w)|\le\|a\|$. If $c(w)=0$ this bound is immediate. [step 1.1, step 1.3, step 4.1, step 5.1, F5, F8, algebra]

7.1 By [F7] the bounded entire function $c$ is constant. At zero, $E_b(0)=1$, so $c(0)=\varphi(a)$ and $c(w)=\varphi(a)$ for all $w$. [step 1.2, step 5.1, step 6.1, F7, algebra]

8.1 Consequently $F(z,w) = e^{w\varphi(b)}e^{z\varphi(a)}$ for all $z,w \in \mathbb C$ by [step 5.1] and [step 7.1]. [step 5.1, step 7.1, algebra]

9.1 Differentiate the scalar identity in step 8.1 with respect to $z$ at zero, using the derivative established in step 4.1 and the exponential power series. It gives $\varphi(aE_b(w))=\varphi(a)e^{w\varphi(b)}$. Differentiate this identity with respect to $w$ at zero, using the numerator series in step 6.1 and [F5]. Its left derivative is $\varphi(ab)$ and its right derivative is $\varphi(a)\varphi(b)$. Thus $\varphi(ab)=\varphi(a)\varphi(b)$ without invoking any double-series interchange. [step 4.1, step 6.1, step 8.1, F4, F5, algebra]

10.1 By [step 1.1] $\varphi$ is bounded, hence continuous, and by [step 9.1] it is multiplicative; both assertions of the theorem are proved. [step 1.1, step 9.1] ∎

## Remarks

- **The hypothesis is used twice.** It gives continuity through the spectrum argument [step 1.1] and zero-freeness of the functions $f_a$ and $F(\cdot,w)$ in [steps 2.1 and 4.1]; no other invocation occurs.
- **The two-variable step is not a formal consequence of the one-variable step**, which is why the function $F$ and its $w$-dependent constant $c(w)$ are introduced: the one-variable theorem applied for fixed $w$ produces a constant that has to be shown independent of $w$.
