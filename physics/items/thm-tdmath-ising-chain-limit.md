---
id: thm-tdmath-ising-chain-limit
kind: theorem
title: "One-dimensional periodic Ising-chain limit"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-finite-sum","def-natural-logarithm","def-real-exponential-function-and-e","lem-finite-sum-laws","thm-algebra-of-derivatives","thm-chain-rule","thm-derivative-of-exponential","thm-exponential-addition-formula","thm-exponential-beats-every-polynomial","thm-logarithm-derivative-and-integral","thm-natural-logarithm-laws","thm-nth-roots-exist","thm-real-power-continuity-and-derivatives"]
justified_by: []
dependency_roles: {"def-finite-sum":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","lem-finite-sum-laws":"mathematical-premise","thm-algebra-of-derivatives":"mathematical-premise","thm-chain-rule":"mathematical-premise","thm-derivative-of-exponential":"mathematical-premise","thm-exponential-addition-formula":"mathematical-premise","thm-exponential-beats-every-polynomial":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise","thm-natural-logarithm-laws":"mathematical-premise","thm-nth-roots-exist":"mathematical-premise","thm-real-power-continuity-and-derivatives":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete HTML chapter text"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S5"
      locator: "Full author-hosted HTML chapter text read; canonical/grand-canonical ensembles §§1.3–1.4 pp.17–30; two-state model §1.2.3 pp.11–14; 1D Ising §5.3.1 pp.156–157."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; ensembles and traces §§4.2–4.6 pp.192–217; Bose/Fermi models §§5.6–5.7 pp.277–303; 1D Ising §6.2.2 pp.330–333."
---

## Statement


Fix $\beta>0$ and $J,h\in\mathbb R$. For $N\ge2$, let $s_i\in\{-1,1\}$, $s_{N+1}=s_1$, $H_N(s)=-J\sum_{i=1}^Ns_is_{i+1}-h\sum_{i=1}^Ns_i$, and $Z_N=\sum_se^{-\beta H_N(s)}$. Define $\cosh x:=(e^x+e^{-x})/2$, $\sinh x:=(e^x-e^{-x})/2$, and $T_{s,t}:=e^{\beta Jst+\beta h(s+t)/2}$. Then $Z_N=\operatorname{tr}(T^N)=\lambda_+^N+\lambda_-^N$, where $\lambda_\pm=e^{\beta J}\cosh(\beta h)\pm\sqrt{e^{2\beta J}\sinh^2(\beta h)+e^{-2\beta J}}$ and $\lambda_+>|\lambda_-|$. Therefore $N^{-1}\log Z_N\to\log\lambda_+$. On every compact subset of $(0,\infty)\times\mathbb R^2$ in $(\beta,J,h)$, the limit and its derivatives of every fixed finite order converge uniformly. This is a result for the specified one-dimensional periodic two-state model only.

## Facts & Assumptions


**Given:** The periodic two-state chain, the transfer matrix in the statement, and parameters $\beta>0$, $J,h\in\mathbb R$.

[A1] Spins are $\{-1,1\}$, the Hamiltonian and periodic boundary condition are as stated, and the hyperbolic functions have the exponential definitions in the Statement.

[F1] [[def-finite-sum]] and [[lem-finite-sum-laws]]: finite configuration sums can be regrouped by their indices.

[F2] [[def-real-exponential-function-and-e]] and [[thm-exponential-addition-formula]]: exponential weights factor according to sums in the exponent.

[F3] [[thm-nth-roots-exist]]: every positive real radicand has a unique positive square root.

[F4] [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[thm-derivative-of-exponential]], [[thm-logarithm-derivative-and-integral]], and [[thm-natural-logarithm-laws]]: exponentials are smooth; positive real powers have the stated derivative; and the logarithm differentiates on positive reals. Repeated chain and product rules may be applied to obtain the higher derivatives used below.

[F5] [[thm-exponential-beats-every-polynomial]]: for $0<\rho<1$ and fixed $k$, $N^k\rho^N\to0$.



## Proof

**Given:** The finite periodic chain and its stated parameters.

1.1 For each configuration, the product $\prod_{i=1}^N T_{s_i,s_{i+1}}$ has bond contribution $e^{\beta J\sum_i s_is_{i+1}}$ and field contribution $e^{\beta h\sum_i(s_i+s_{i+1})/2}=e^{\beta h\sum_i s_i}$. These factors equal $e^{-\beta H_N(s)}$. Summing over the finite spin sequences gives $Z_N=\sum_{s_1,\ldots,s_N}T_{s_1s_2}\cdots T_{s_Ns_1}=\operatorname{tr}(T^N)$. [A1, F1, F2]

1.2 In the ordered basis $+1,-1$, $T=\begin{pmatrix}e^{\beta J+\beta h}&e^{-\beta J}\\e^{-\beta J}&e^{\beta J-\beta h}\end{pmatrix}$. Put $A=e^{\beta J}\cosh(\beta h)$ and $B=\sqrt{e^{2\beta J}\sinh^2(\beta h)+e^{-2\beta J}}$. The diagonal entries give $\operatorname{tr}T=2A$; direct multiplication gives $\det T=e^{2\beta J}-e^{-2\beta J}$. Using $\cosh^2x-\sinh^2x=1$, which follows by expanding their definitions, $A^2-\det T=e^{2\beta J}\sinh^2(\beta h)+e^{-2\beta J}=B^2$. Thus the characteristic polynomial has roots $A\pm B=\lambda_\pm$. Since $A,B>0$, $A+B>|A-B|$, hence $\lambda_+>|\lambda_-|$. [A1, F2, F3]

2.1 For a $2\times2$ matrix $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, direct multiplication gives $M^2-(a+d)M+(ad-bc)I=0$. Apply this identity to $T$ and multiply by $T^n$; taking traces gives $z_{n+2}=(\operatorname{tr}T)z_{n+1}-(\det T)z_n$, where $z_n=\operatorname{tr}(T^n)$, $z_0=2$, and $z_1=\lambda_++\lambda_-$. The sequence $\lambda_+^n+\lambda_-^n$ has the same recurrence and initial values, so induction gives $Z_N=z_N=\lambda_+^N+\lambda_-^N$. [step 1.1, step 1.2, F1]

3.1 Set $r=\lambda_-/\lambda_+$. Then $Z_N=\lambda_+^N(1+r^N)$ and $|r|<1$, so $1+r^N>0$. Therefore $N^{-1}\log Z_N=\log\lambda_++N^{-1}\log(1+r^N)$, whose second term tends to zero. For a compact parameter set, continuity and $|r|<1$ give $0<\rho<1$ with $|r|\le\rho$. The positive radicand in $B$ is a smooth positive combination of exponentials; the real-power derivative in [F4] with exponent $1/2$, followed inductively by chain and product rules, makes $B$ and $\lambda_\pm$ smooth. Since $\lambda_+>0$, its reciprocal and logarithm are smooth as well, by the real-power derivative with exponent $-1$ and the logarithm derivative in [F4]. Every fixed finite collection of derivatives of $r$ is therefore bounded on the compact set. For a multi-index $\alpha$ of order at most $k$ and $N\ge k$, repeated product differentiation of the $N$ factors gives at most $C_kN^k$ terms; each has at least $N-k$ undifferentiated factors $r$, so $|\partial^\alpha(r^N)|\le C_kN^k\rho^{N-k}$. Put $u=r^N$. Since $1+u\ge1-\rho$, repeated differentiation of $\log(1+u)$ gives finite sums of products of derivatives of $u$ divided by powers of $1+u$. Each term has at least one derivative factor and the product bounds yield $|\partial^\alpha\log(1+u)|\le C'_kN^k\rho^{N-k}$ after enlarging the constant. Divide by $N$; [F5] implies $N^{k-1}\rho^{N-k}\to0$. The zero-order logarithm term also tends uniformly to zero. Hence the correction and every fixed-order derivative vanish uniformly on the compact set. [A1, F4, F5, step 1.2, step 2.1] ∎
