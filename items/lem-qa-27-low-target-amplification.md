---
id: lem-qa-27-low-target-amplification
kind: lemma
title: Low-target amplification has a controlled multiplicative loss
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-12-amplitude-amplification
  - thm-qa-12-amplification-rotation-correctness
  - lem-qa-12-amplification-plane-invariant
  - prop-qa-12-amplitude-access-cost-accounting
  - def-principal-inverse-sine-and-cosine
  - thm-principal-inverse-sine-and-cosine-derivatives
  - thm-sine-and-cosine-derivatives
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
  - thm-sine-and-cosine-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - lem-bernoulli-inequality
justified_by: []
proof_strategy: direct
axiom_use: "None; integer selection and all products and inductions are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andris Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations"
      url: "https://arxiv.org/pdf/1010.4458"
---

## Statement

Let $n\ge1$ be an integer. Let a coherent sampler have success weight $q>0$, and suppose an estimate $\widehat q>0$ satisfies $|\widehat q-q|\le q/100$ and $\widehat q\le1/(9n)$. Choose the least integer $k\ge0$ such that $(2k+1)^2\widehat q\ge1/(9n)$, and put $d=2k+1$, $x=d^2\widehat q$, $y=d^2q$. Applying $k$ standard iterates of [[alg-qa-12-amplitude-amplification]] gives success weight $r$ satisfying
$$\frac1{9n}\le x\le\frac1n,\qquad \frac{100}{101}x\le y\le\frac{100}{99}x,\qquad y\left(1-\frac2{5n}\right)\le r\le y.$$
In particular $1/(16n)\le r\le\min\{1,100/(99n)\}$, and the positive-probability conditional good state is unchanged. The total number of sampler/inverse calls in this fixed amplification is exactly $d$, charging reflections separately.

For any $s\le n$ such amplifications, indexed by $i$, with the same parameter $n$, their multiplicative losses obey
$$\prod_{i=1}^s\frac{r_i}{d_i^2q_i}\ge\frac35,\qquad \prod_{i=1}^s d_i\le\sqrt{\frac53}\prod_{i=1}^s\sqrt{\frac{r_i}{q_i}}.$$

## Facts & Assumptions

**Given:** The coherent sampler, relative estimate, integer $n$ and least crossing index $k$ in the Statement; all sampler inverse and reflection operations required by the fixed amplification are supplied.

[F1] [[thm-qa-12-amplification-rotation-correctness]] gives $r=\sin^2(d\theta)$ for $\theta=\arcsin\sqrt q$; [[lem-qa-12-amplification-plane-invariant]] keeps the good component collinear with the original good component.

[F2] [[def-principal-inverse-sine-and-cosine]] and [[thm-principal-inverse-sine-and-cosine-derivatives]] give $\arcsin0=0$ and $(\arcsin u)'=(1-u^2)^{-1/2}$ for $|u|<1$.

[F3] [[cor-mean-value-theorem]] and [[thm-algebra-of-derivatives]] give the mean value theorem and derivative rules. [[thm-sine-and-cosine-derivatives]] gives $\sin'=\cos$, $\cos'=-\sin$, $\sin0=0$ and $\cos0=1$.

[F4] [[thm-sine-and-cosine-addition-formulas]] and [[cor-trigonometric-parity-and-pythagorean-identity]] give sine addition and $|\sin u|,|\cos u|\le1$ for real $u$.

[F5] [[prop-qa-12-amplitude-access-cost-accounting]] counts $k+1$ forward calls, $k$ inverse calls and $k$ calls to each reflection.

[F6] [[lem-bernoulli-inequality]] gives $(1-a)^n\ge1-na$ for $0\le a\le1$ and integer $n\ge1$.

## Proof


1.1 Since $\widehat q>0$, some finite $k$ crosses the target. If the least index is $k=0$, the crossing and $\widehat q\le1/(9n)$ force $x=1/(9n)$. If $k\ge1$, minimality gives $(d-2)^2\widehat q<1/(9n)$, so $d\sqrt{\widehat q}<1/(3\sqrt n)+2\sqrt{\widehat q}\le1/\sqrt n$ and $x<1/n$. The relative estimate gives $99q/100\le\widehat q\le101q/100$, hence $100/101\le q/\widehat q\le100/99$. Multiplying by $x$ proves the bounds on $y$, and also $q\le100/(891n)<1$. [given, algebra]

2.1 Put $u=\sqrt q$. For $0\le v\le u$, [F2] gives $1\le(\arcsin v)'\le(1-q)^{-1/2}$. Applying [F3] to $\arcsin$ on $[0,u]$ yields $\sqrt q\le\theta\le\sqrt q/\sqrt{1-q}$. Therefore $z=d\theta$ satisfies $y\le z^2\le y/(1-q)\le(100/(99n))/(1-100/891)=900/(791n)$. [given, F2, F3, step 1.1, algebra]

3.1 For $v\ge0$ define $f(v)=\sin v-v+v^3/6$. By [F3] and [F4], $f'''(v)=1-\cos v\ge0$ and $f''(0)=f'(0)=f(0)=0$. Three applications of the mean value theorem imply successively $f''(v)\ge0$, $f'(v)\ge0$ and $f(v)\ge0$. Thus $\sin z\ge z-z^3/6$. Step 2.1 gives $z^2\le900/791<6$, so this lower bound is positive and may be squared: $\sin^2z\ge z^2(1-z^2/6)^2\ge z^2(1-z^2/3)\ge y(1-300/(791n))\ge y(1-2/(5n))$. The factor $1-300/(791n)$ is positive because $n\ge1$, which justifies replacing $z^2$ by its lower bound $y$. [given, F3, F4, step 2.1, algebra]

4.1 Sine addition and [F4] give $|\sin((h+1)\theta)|\le|\sin(h\theta)|+\sin\theta$ for integer $h\ge1$. Finite induction yields $|\sin(d\theta)|\le d\sin\theta$, so [F1] gives $r\le d^2q=y$. Together with step 3.1 this proves the multiplicative loss bound. Since $y\ge100/(909n)$, it also gives $r\ge(100/(909n))(3/5)=20/(303n)>1/(16n)$; the upper bounds $r\le100/(99n)$ and $r\le1$ follow from step 1.1 and [F4]. In particular $r>0$, and the collinearity in [F1] shows that conditioning on success preserves the original good state. [given, F1, F4, step 1.1, step 3.1, induction, algebra]

5.1 By [F5], this fixed amplification makes $k+1+k=2k+1=d$ sampler/inverse calls and $k$ calls to each reflection. For $s\le n$ instances, the preceding bounds give $\prod_{i=1}^s r_i/(d_i^2q_i)\ge(1-2/(5n))^s\ge(1-2/(5n))^n\ge3/5$ by [F6]. All factors are positive, so rearranging this product inequality and taking nonnegative square roots gives $\prod_{i=1}^s d_i\le\sqrt{5/3}\prod_{i=1}^s\sqrt{r_i/q_i}$, as claimed. [given, F5, F6, step 4.1, algebra] ∎

## Remarks

The upper bound $x\le1/n$ concerns the estimated quadratic weight. A one-percent estimate allows the actual amplified weight $r$ to exceed $1/n$; the proved bound $r\le100/(99n)$ retains this distinction. No estimate is treated as an exact amplitude input to the known-amplitude maximization procedure.
