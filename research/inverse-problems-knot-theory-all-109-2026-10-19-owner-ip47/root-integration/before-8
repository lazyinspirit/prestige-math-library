---
id: lem-ip-boundary-spectral-counting-and-sobolev-scale
kind: lemma
title: Boundary spectral counting and Sobolev scale
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-boundary-chart-lifting-and-fourier-projection
  - thm-lax-milgram
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - thm-fourier-basis-and-parseval-on-the-n-torus
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "§2.3, boundary spectral smoothing exponent and eigenvalue summability, printed pp. 9–11."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $d\ge2$, let $\Omega\subset(0,1)^d$ be nonempty, bounded, connected and $C^\infty$, put $M=\partial\Omega$, and set $n=d-1$. Define $H^1(M)$ as the completion of smooth functions in the norm $\|u\|_{H^1(M)}^2=\int_M(|u|^2+|\nabla_Mu|^2)\,dS$. Define $-\Delta_M$ by its weak form: $-\Delta_Mu=f$ when $u\in H^1(M)$, $f\in L^2(M)$, and $\int_M\nabla_Mu\cdot\overline{\nabla_Mv}\,dS=\langle f,v\rangle_{L^2}$ for every $v\in H^1(M)$. Then the nonnegative Laplace–Beltrami operator $-\Delta_M$ on $L^2(M)$ has an orthonormal eigenbasis $(e_j)_{j\ge0}$ with eigenvalues $0\le\lambda_0\le\lambda_1\le\cdots$ repeated with multiplicity and tending to infinity. Its counting function satisfies
$$N_M(\Lambda):=\#\{j:\lambda_j\le\Lambda\}\le C_M(1+\Lambda)^{n/2}\qquad(\Lambda\ge0).$$
For $s\ge0$, define the spectral Sobolev space and norm by
$$H^s_{\Delta}(M)=\left\{f=\sum_j c_je_j:\sum_j(1+\lambda_j)^s|c_j|^2<\infty\right\},\qquad \|f\|_{H^s_\Delta}^2=\sum_j(1+\lambda_j)^s|c_j|^2.$$
At $s=1$, this norm equals the quadratic-form norm $\int_M(|f|^2+|\nabla_Mf|^2)\,dS$. In particular, for every $\tau>0$,
$$\sum_j(1+\lambda_j)^{-n/2-\tau}<\infty.$$

The compact-resolvent construction factors through the compact embedding:

```tikz
\begin{tikzpicture}[>=stealth,node distance=2.5cm]
  \node[draw,rounded corners] (l2a) {$L^2(M)$};
  \node[draw,rounded corners,right of=l2a] (h1) {$H^1(M)$};
  \node[draw,rounded corners,right of=h1] (l2b) {$L^2(M)$};
  \draw[->] (l2a) -- node[above] {$\widetilde K$} (h1);
  \draw[->] (h1) -- node[above] {$J$ (compact)} (l2b);
  \draw[->,bend right=30] (l2a) to node[below] {$K=J\widetilde K$} (l2b);
\end{tikzpicture}
```

Here $\widetilde K$ is the weak resolvent map and $J$ is the compact inclusion; the lower arrow is their composition.

## Statement references

[[lem-ip-boundary-chart-lifting-and-fourier-projection|Finite boundary charts and compact Fourier-tail estimates.]]

[[def-surface-integral-on-a-compact-c-one-hypersurface|The surface measure and boundary gradient convention.]]

[[thm-spectral-theorem-for-compact-self-adjoint-operators|The compact self-adjoint spectral theorem.]]

[de Hoop et al., §2.3: boundary spectral smoothing exponent](https://arxiv.org/pdf/2511.20361)

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice, $\Omega$, $M$ and $n=d-1$ as in the statement.

[F1] Compact boundary charts have a square partition of unity and bounded chart maps on $L^2$ and $H^1$; the Fourier tails of lifted $H^1$ functions are bounded by $C(1+N)^{-1}\|f\|_{H^1}$. ([[lem-ip-boundary-chart-lifting-and-fourier-projection]])

[F2] A bounded coercive sesquilinear form on a Hilbert space has a unique weak solution with the standard norm estimate. ([[thm-lax-milgram]])

[F3] A compact positive self-adjoint operator on a Hilbert space has finite-multiplicity positive eigenvalues tending only to zero, and its nonzero eigenspaces span the closure of its range. ([[thm-spectral-theorem-for-compact-self-adjoint-operators]])

[F4] Fourier characters form an orthonormal basis on $\mathbb T^n$ and Parseval holds. ([[thm-fourier-basis-and-parseval-on-the-n-torus]])

[A1] The Axiom of Choice is used at the compact self-adjoint spectral theorem interface. ([[def-axiom-of-choice]])

[A2] Countable Choice is used at the chart partition, weak-solution and Hilbert interfaces. ([[def-countable-choice]])

## Proof

**Given:** Countable Choice, the Axiom of Choice, and the smooth compact boundary $M$.

1.1 Use the finite boundary charts and square partition from [F1] to define $\mathcal Gf=((\psi_jf)\circ\phi_j^{-1})_j$ on each chart and zero elsewhere, and $\mathcal L(v)=\sum_j\psi_j(v_j\circ\phi_j)$, extended by zero off the charts. The identity $\sum_j\psi_j^2=1$ gives $\mathcal L\mathcal G=I$. Change of variables and the product/chain rules on the compact chart supports make the maps bounded on $L^2$ and $H^1$. Fourier Parseval yields $\|f-\mathcal L P_N\mathcal Gf\|_2\le C(1+N)^{-1}\|f\|_{H^1(M)}$. The finite Fourier sums $\mathcal L P_N\mathcal Gf$ are smooth chartwise functions and converge in $L^2$, so smooth functions are dense in $L^2(M)$. [F1, F4, given, construct]

2.1 The estimate in step 1.1 proves $H^1(M)\hookrightarrow L^2(M)$ is compact: the finite-rank maps $\mathcal L P_N\mathcal G$ approximate the identity uniformly on the $H^1$ unit ball, and their images are bounded subsets of finite-dimensional spaces, hence have finite nets of every positive radius. Thus the unit ball is totally bounded in the complete space $L^2(M)$. [step 1.1, construct]

3.1 Put $q(u,v)=\int_M(u\overline v+\nabla_Mu\cdot\overline{\nabla_Mv})\,dS$ on $H^1(M)$. For $f\in L^2(M)$, [F2] gives a unique $u=\widetilde Kf\in H^1(M)$ with $q(u,v)=\langle f,v\rangle$ for every $v\in H^1(M)$ and $\|u\|_{H^1}\le\|f\|_2$. Let $J:H^1(M)\hookrightarrow L^2(M)$ and $K=J\widetilde K$. By step 2.1, $K$ is compact. Hermitian symmetry of $q$ gives $\langle Kf,g\rangle=\langle f,Kg\rangle$ and $\langle Kf,f\rangle=q(\widetilde Kf,\widetilde Kf)\ge0$. If $Kf=0$, the weak equation and smooth density from step 1.1 imply $\langle f,v\rangle=0$ for every $v\in L^2(M)$, so $f=0$. Thus $K$ is compact, positive, self-adjoint and injective. [A2, F2, step 1.1, step 2.1, algebra]

4.1 By [F3], $K$ has an orthonormal eigenbasis $e_j$ with positive eigenvalues $\mu_j\to0$; order these so that $\mu_j$ is nonincreasing. Put $\lambda_j=\mu_j^{-1}-1$. From $Ke_j=\mu_je_j$ and the weak equation, $\int_M\nabla_Me_j\cdot\overline{\nabla_Mv}\,dS=\lambda_j\langle e_j,v\rangle$ for every $v\in H^1(M)$. Taking $v=e_j$ gives $\lambda_j=\int_M|\nabla_Me_j|^2\,dS\ge0$, and these are the eigenvectors of the stated weak Laplace–Beltrami operator. In the form inner product $q$, the vectors $(1+\lambda_j)^{-1/2}e_j$ are orthonormal and complete: a vector $v$ orthogonal to every $e_j$ in $q$ satisfies $(1+\lambda_j)\langle v,e_j\rangle=0$ for every $j$, hence vanishes in $L^2$. Form Parseval gives $q(v,v)=\sum_j(1+\lambda_j)|\langle v,e_j\rangle|^2$, proving the $s=1$ norm identity. [A1, F3, step 3.1, algebra]

5.1 Let $E_\Lambda=\operatorname{span}\{e_j:\lambda_j\le\Lambda\}$. For $u\in E_\Lambda$, step 4.1 gives $\|u\|_{H^1}^2\le(1+\Lambda)\|u\|_2^2$. If $\dim E_\Lambda$ exceeded the rank of $P_N\mathcal G|_{E_\Lambda}$, rank-nullity would give nonzero $u\in E_\Lambda$ with $P_N\mathcal Gu=0$. The left inverse and Fourier tail estimate from [F1] then give $\|u\|_2\le C(1+N)^{-1}\|u\|_{H^1}\le C\sqrt{1+\Lambda}(1+N)^{-1}\|u\|_2$. Choose $N\ge2C\sqrt{1+\Lambda}$ to contradict $u\ne0$. Thus $N_M(\Lambda)=\dim E_\Lambda\le\operatorname{rank}(P_N\mathcal G)\le J(2N+1)^n\le C'(1+\Lambda)^{n/2}$. [F1, step 1.1, step 4.1, choose, algebra]

6.1 For $p=n/2+\tau$, group eigenvalues into $[2^k,2^{k+1})$. The bound from step 5.1 gives $\sum_j(1+\lambda_j)^{-p}\le C\sum_{k\ge0}2^{-kp}N_M(2^{k+1})\le C'\sum_{k\ge0}2^{-k(p-n/2)}<\infty$; the finitely many eigenvalues below $1$ contribute finitely. This proves the stated summability for every $\tau>0$. Defining $H^s_\Delta(M)$ by the weighted coefficient norm in the Statement completes the spectral-scale claim. [step 4.1, step 5.1, algebra] ∎
