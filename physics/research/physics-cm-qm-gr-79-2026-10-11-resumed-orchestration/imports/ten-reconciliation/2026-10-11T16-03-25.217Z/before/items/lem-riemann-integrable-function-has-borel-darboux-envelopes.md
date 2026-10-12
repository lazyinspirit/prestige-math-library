---
id: lem-riemann-integrable-function-has-borel-darboux-envelopes
kind: lemma
title: "A bounded Riemann integrable function admits Borel Darboux envelopes with the same Lebesgue integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-criterion, lem-refinement-inequalities, thm-darboux-equals-riemann, lem-integral-elementary-bounds, thm-borel-sigma-algebra-of-a-subspace-is-the-trace, prop-closure-properties-of-measurable-functions-used-by-the-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-monotone-convergence-for-the-integral, thm-lebesgue-measure-of-a-box-of-every-kind, cor-archimedean-reciprocal]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Version 5.0, Section 9.1 and Exercise 9.6"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis, Section 5"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement

Assume the Axiom of Countable Choice. Let $a<b$, let $f:[a,b]\to\mathbb R$ be
bounded and Riemann integrable, and write
$$I:=\int_a^b f(x)\,dx$$
for its Riemann integral. Then there exist bounded Borel functions
$\varphi,\psi:[a,b]\to\mathbb R$ such that

$$\varphi(x)\le f(x)\le \psi(x)\qquad(x\in[a,b]),$$

$$\int_{[a,b]}\varphi\,d\lambda_1 = I = \int_{[a,b]}\psi\,d\lambda_1.$$

In particular,
$$\int_{[a,b]}(\psi-\varphi)\,d\lambda_1=0.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, reals $a<b$, a bounded Riemann integrable function $f:[a,b]\to\mathbb R$ with Riemann integral $I$, and a real $B>0$ with $|f(x)|\le B$ for every $x\in[a,b]$.

[L1] Riemann's criterion says that for every real $\varepsilon>0$ there is a partition $P$ of $[a,b]$ with $U(f,P)-L(f,P)<\varepsilon$. ([[thm-riemann-criterion]])

[L2] If $P'$ refines $P$, then $L(f,P)\le L(f,P')\le U(f,P')\le U(f,P)$. ([[lem-refinement-inequalities]])

[L3] The Borel sigma-algebra of a subspace is the trace of the ambient Borel sigma-algebra. ([[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]])

[L4] Pointwise infima of measurable functions are measurable, and the pointwise limit of an increasing sequence of measurable functions is measurable. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[L5] The nonnegative integral is monotone. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[L6] The nonnegative integral agrees with the simple integral on nonnegative simple functions, and the simple integral of $\sum_j c_j\chi_{E_j}$ is $\sum_j c_j\mu(E_j)$. ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[def-integral-of-a-nonnegative-simple-function]])

[L7] Monotone convergence holds for nonnegative measurable functions. ([[thm-monotone-convergence-for-the-integral]])

[L8] Every interval of $\mathbb R$ with any endpoint convention is Lebesgue measurable with its usual length. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[L9] A measurable real function is integrable exactly when the integral of its absolute value is finite, and the Lebesgue integral is linear on $L^1$. ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[L10] For every real $\eta>0$ there is a natural number $N\ge1$ with $1/N<\eta$. ([[cor-archimedean-reciprocal]])

[L11] A bounded function is Riemann integrable with value $I$ exactly when it is Darboux integrable with the same value, and then every lower Darboux sum is at most $I$ and every upper Darboux sum is at least $I$. ([[thm-darboux-equals-riemann]], [[lem-integral-elementary-bounds]])

## Proof

**Proof technique:** direct.

1.1 By [L1], choose recursively a refining sequence of partitions $P_1\preceq P_2\preceq\cdots$ of $[a,b]$ such that $U(f,P_n)-L(f,P_n)<1/n$ for every $n\ge1$: choose $P_1$ for $\varepsilon=1$, and once $P_n$ is chosen, let $R_{n+1}$ satisfy $U(f,R_{n+1})-L(f,R_{n+1})<1/(n+1)$ and put $P_{n+1}:=P_n\vee R_{n+1}$; then [L2] preserves the inequality under refinement. For each $n$, write $P_n=\{a=t^{(n)}_0<\cdots<t^{(n)}_{m_n}=b\}$ and let $m_{n,i}$ and $M_{n,i}$ be the infimum and supremum of $f$ on $[t^{(n)}_i,t^{(n)}_{i+1}]$. Define $$\ell_n:=m_{n,m_n-1}\chi_{\{b\}}+\sum_{i<m_n}m_{n,i}\chi_{[t^{(n)}_i,t^{(n)}_{i+1})},$$ $$u_n:=M_{n,m_n-1}\chi_{\{b\}}+\sum_{i<m_n}M_{n,i}\chi_{[t^{(n)}_i,t^{(n)}_{i+1})}.$$ Each partition piece is a Borel subset of $[a,b]$ by [L3], so $\ell_n$ and $u_n$ are bounded Borel functions on $[a,b]$. Also $-B\le \ell_n\le \ell_{n+1}\le f\le u_{n+1}\le u_n\le B$ pointwise, while [L11] gives $$L(f,P_n)\le I\le U(f,P_n),\qquad U(f,P_n)-L(f,P_n)<1/n.$$ [L1, L2, L3, choose, construct]

2.1 Put $\varphi:=\sup_n \ell_n$ and $\psi:=\inf_n u_n$. Since $\ell_n\uparrow\varphi$, the last clause of [L4] makes $\varphi$ Borel measurable; since $u_n$ are measurable, the infimum clause of [L4] makes $\psi$ Borel measurable. Step 1.1 gives $-B\le\varphi\le f\le\psi\le B$. Now $B+\ell_n$ is a nonnegative simple function, so [L6] and [L8] give $$\int_{[a,b]}(B+\ell_n)\,d\lambda_1 = B(b-a)+L(f,P_n).$$ Because $B+\ell_n\uparrow B+\varphi$, [L7] yields $$\int_{[a,b]}(B+\varphi)\,d\lambda_1 = \lim_{n\to\infty}\big(B(b-a)+L(f,P_n)\big)=B(b-a)+I,$$ the limit being the squeeze from step 1.1. Since $|(B+\varphi)-B\chi_{[a,b]}|=|\varphi|\le B\chi_{[a,b]}$, the constant function $B\chi_{[a,b]}$ is integrable by [L6] and [L8], so step 1.1 and [L5], [L9] show that $\varphi\in L^1(\lambda_1)$ and $$\int_{[a,b]}\varphi\,d\lambda_1 = I.$$ [step 1.1, L4, L5, L6, L7, L8, L9]

3.1 For each $n$ the function $u_n-\ell_n$ is nonnegative simple, and step 1.1 with [L6] and [L8] gives $$\int_{[a,b]}(u_n-\ell_n)\,d\lambda_1 = U(f,P_n)-L(f,P_n)<1/n.$$ Because $\varphi\le f\le\psi$ and $\ell_n\le\varphi\le\psi\le u_n$, one has $0\le \psi-\varphi\le u_n-\ell_n$ for every $n$. So [L5] yields $$0\le \int_{[a,b]}(\psi-\varphi)\,d\lambda_1 < 1/n\qquad(n\ge1).$$ If that integral were positive, [L10] would give $n$ with $1/n<\int_{[a,b]}(\psi-\varphi)\,d\lambda_1$, contradicting the displayed inequality. Therefore $$\int_{[a,b]}(\psi-\varphi)\,d\lambda_1=0.$$ The same bound $|\psi-\varphi|\le 2B\chi_{[a,b]}$ shows $\psi-\varphi\in L^1(\lambda_1)$. [step 1.1, step 2.1, L5, L6, L8, L9, L10]

4.1 Since $\psi=\varphi+(\psi-\varphi)$ and both summands are integrable, [L9] and step 3.1 give $$\int_{[a,b]}\psi\,d\lambda_1 =\int_{[a,b]}\varphi\,d\lambda_1+\int_{[a,b]}(\psi-\varphi)\,d\lambda_1 =I+0=I.$$ Together with steps 2.1 and 3.1, this proves the existence of bounded Borel envelopes $\varphi\le f\le\psi$ with the same Lebesgue integral $I$. [step 2.1, step 3.1, L9] ∎
