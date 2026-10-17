---
id: ex-qsm-dt-qubit-isolated-response
kind: example
title: Exactly computed two-level Kubo response
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 5
deps:
  - lem-qsm-matrix-exponential-response
  - thm-qsm-dt-finite-kubo
  - thm-qsm-dt-spectral-fdt
dependency_roles:
  lem-qsm-matrix-exponential-response: mathematical-premise
  thm-qsm-dt-finite-kubo: mathematical-premise
  thm-qsm-dt-spectral-fdt: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §§1.1–1.5"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2, printed pp. 572–575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
---

## Example

Let $\mathcal H=\mathbb C^2$, $\Delta>0$ in J, and $\hbar>0$ in J s; put $\omega=\Delta/\hbar$. Set
$$X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\quad H=\frac{\Delta}{2}Z.$$
Take $A=B=X$ (dimensionless), $\beta>0$ in J$^{-1}$, and a finite interval $[0,T]$ with $T>0$ in s. Use dimensionless $\epsilon\in\mathbb R$ and a constant real control $h(t)=h_0$ such that $h_0X$ has unit J. Write $\sigma=e^{-\beta H}/\operatorname{Tr}(e^{-\beta H})$ and $x=\beta\Delta/2$; the initial Gibbs matrix is fixed while the control acts.

```tikz
\begin{tikzpicture}[>=stealth]
  \draw[->] (0,0) -- (0,2.8) node[above] {energy};
  \draw[thick] (0.6,0.7) -- (2.1,0.7) node[right] {$E_-=-\Delta/2$};
  \draw[thick] (0.6,2.1) -- (2.1,2.1) node[right] {$E_+=\Delta/2$};
  \draw[<->] (1.35,0.85) -- (1.35,1.95) node[midway,right] {$X,\ \hbar\omega=\Delta$};
\end{tikzpicture}
```

The horizontal lines denote the two eigenvalues of $H$; the arrows mark the off-diagonal matrix elements of $X$ and their Bohr frequency $\omega=\Delta/\hbar$. The drawing encodes the finite transition structure only; all response claims below follow from the explicit matrix calculation.

## Facts & Assumptions

**Given:** The matrices, $\Delta>0$, $\hbar>0$, $\beta>0$, and real constant $h_0$.

[F1] [[thm-qsm-dt-finite-kubo]]: the fixed-Gibbs finite-time response uses $R_{XX}(t)=\frac{i}{\hbar}\operatorname{Tr}(\sigma[\alpha_t(X),X])$ and has the stated quadratic remainder.

[F2] [[thm-qsm-dt-spectral-fdt]]: the equilibrium correlation has a positive atomic spectral measure, detailed balance, and the stated zero-frequency qualification.

[F3] [[lem-qsm-matrix-exponential-response]]: differentiating a finite noncommuting Gibbs family gives the Kubo–Mori covariance; it equals $\beta$ times the ordinary variance only in the commuting case.

## Verification


**Proof technique:** multiply the Pauli matrices, then apply the finite response and static-derivative suppliers.

**Given:** [F1]–[F3] and the two-level data above.

1.1 Direct multiplication gives $X^2=Y^2=Z^2=I$, $YX=-iZ$, and $[Z,X]=2iY$. The Gibbs matrix is $\sigma=(I-\tanh(x)Z)/2$, so $\operatorname{Tr}(\sigma Z)=-\tanh(x)$ and $\operatorname{Tr}(\sigma X)=0$. [given, construct, algebra]


2.1 Conjugation by $e^{-itH/\hbar}$ yields $\alpha_t(X)=X\cos(\omega t)-Y\sin(\omega t)$. Hence $C_{XX}(t)=\operatorname{Tr}(\sigma\alpha_t(X)X)=\cos(\omega t)-i\tanh(x)\sin(\omega t)$ and $R_{XX}(t)=2\tanh(x)\sin(\omega t)/\hbar$. The spectral measure has its two transition atoms at $\pm\omega$ and satisfies $S_{XX}(-\omega)=e^{-\beta\Delta}S_{XX}(\omega)$, in agreement with [F2]. [given, F1, F2, step 1.1, algebra]


2.2 For comparison, the static Gibbs family for $H(h)=H-hX$ has $Z(h)=2\cosh(\beta\sqrt{(\Delta/2)^2+h^2})$. By [F3], $\partial_h\log Z(h)=\beta\operatorname{Tr}(\sigma_hX)$, so $\operatorname{Tr}(\sigma_hX)=\frac{h}{\sqrt{(\Delta/2)^2+h^2}}\tanh\!\left(\beta\sqrt{(\Delta/2)^2+h^2}\right)$ and $\left.\partial_h\operatorname{Tr}(\sigma_hX)\right|_{h=0}=\frac{2}{\Delta}\tanh(x)$. Since $\operatorname{Var}_\sigma(X)=1$ and $\tanh(x)<x$ for $x>0$ (the derivative of $x-\tanh x$ is $\tanh^2x>0$), this static susceptibility is strictly below $\beta\operatorname{Var}_\sigma(X)=\beta$. Thus the noncommuting Gibbs derivative is not replaced by $\beta$ times ordinary variance. [given, F3, step 1.1, algebra]


3.1 Integrating the kernel for constant $h_0$ gives $\delta\langle X(t)\rangle=\frac{2\epsilon h_0}{\Delta}\tanh(x)(1-\cos(\omega t))+r_\epsilon(t)$, with $|r_\epsilon(t)|\le(|\epsilon|C_T)^2e^{|\epsilon|C_T}/2$ and $C_T=2|h_0|T/\hbar$, because $\|X\|=1$. [F1, step 2.1, algebra]


4.1 When $\epsilon h_0\ne0$, the leading response oscillates without a long-time limit; the finite-time theorem does not imply relaxation to the static Gibbs derivative. This is an exact model calculation, not an observation. [given, step 3.1, step 2.2] ∎