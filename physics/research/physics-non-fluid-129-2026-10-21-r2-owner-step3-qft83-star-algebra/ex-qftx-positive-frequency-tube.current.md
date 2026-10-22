---
id: ex-qftx-positive-frequency-tube
kind: example
title: One positive frequency decays in the future imaginary direction
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-countable-choice
  - def-qftx-joint-spectrum-input
  - thm-qftx-spectral-tube-holomorphy
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-joint-spectrum-input: mathematical-premise
  thm-qftx-spectral-tube-holomorphy: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, arXiv:1904.04051v2 (2019)"
      url: https://arxiv.org/pdf/1904.04051
      locator: "§§5.1–5.2, printed pp. 24–25: the translation Fourier sign, positive spectrum, future-tube extension, and bounded-insertion example in the Reeh–Schlieder proof."
    - title: "Jens Mund, General Aspects of Relativistic Quantum Field Theory, incomplete lecture notes, DF-UFJF (2012)"
      url: https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf
      locator: "§1.3, PDF pp. 8–9, equation (22), and §2.1, Theorem 2.8, PDF pp. 18–19: the positive-energy Fourier convention and the sign of the distributional tube."
verification:
  precheck: pending
---

## Example

Let $p\in\overline V_+$ be nonzero, let $\mathcal H=\mathbb C^2$ with
standard basis $e_0,e_1$, and set $\Omega=e_0$,
$E_p(S)=\operatorname{diag}(\mathbf1_S(0),\mathbf1_S(p))$, and
$U_p(a)=\operatorname{diag}(1,e^{ip\cdot a})$. Take
$\mathfrak A=\mathcal B(\mathbb C^2)$. These data give a positive-energy joint
spectral input with a translation-invariant cyclic vacuum: the zero mode fixes
$\Omega$, while $e_1$ carries one nonzero positive frequency. The continuation
is $U_p(a+ib)=\operatorname{diag}(1,e^{ip\cdot a-p\cdot b})$. For every
$b\in V_+$, the $e_1$ component decays by $e^{-p\cdot b}<1$; the vacuum
component remains $1$, so the full operator norm is exactly $1$. Reversing the
Fourier sign gives $U_p^-(a+ib)=\operatorname{diag}(1,e^{-ip\cdot a+p\cdot b})$,
which grows on $e_1$ in the future imaginary direction and decays there in the
past direction. This finite-spectrum example illustrates the Fourier-sign
convention; it is not a claim about a physical field or a general Wightman
theorem.

## Example references

[[def-qftx-joint-spectrum-input]]

[[thm-qftx-spectral-tube-holomorphy]]

[Fewster and Rejzner, §§5.1–5.2](https://arxiv.org/pdf/1904.04051)

[Mund, §1.3 and §2.1](https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, nonzero $p\in\overline V_+$, and the positive-energy joint-spectrum conventions of [[def-qftx-joint-spectrum-input]].

[F1] [[def-qftx-joint-spectrum-input]]: the Minkowski pairing is $p\cdot a=p^0a^0-\mathbf p\cdot\mathbf a$, the future cone is $\overline V_+=\{p^0\ge|\mathbf p|\}$, bounded Borel functions act by the PVM integral, and the input includes a translation-invariant cyclic unit vector.

[F2] [[thm-qftx-spectral-tube-holomorphy]]: for $z=a+ib$, $b\in V_+$, the continuation is $U(z)=\Phi_E(\mathbf1_{\overline V_+}e^{ip\cdot z})$ with norm at most one.

[A1] $\mathcal H=\mathbb C^2$ has inner product $(x,y)=x_0\overline{y_0}+x_1\overline{y_1}$ and standard basis $e_0,e_1$; $\Omega=e_0$; $E_p(S)=\operatorname{diag}(\mathbf1_S(0),\mathbf1_S(p))$ for Borel $S$; $U_p(a)=\operatorname{diag}(1,e^{ip\cdot a})$; and $\mathfrak A=\mathcal B(\mathbb C^2)$.

## Verification

1.1 For Borel sets $S,T$, $E_p(S)$ is diagonal with entries in $\{0,1\}$,
$E_p(\mathbb R^4)=I$, and
$E_p(S\cap T)=E_p(S)E_p(T)$. For a disjoint sequence, each of the distinct
points $0,p$ belongs to at most one set, so the coordinatewise sum of the
projections is $E_p(\bigcup_n S_n)$ and is finite on every vector. Thus $E_p$
is a strongly countably additive PVM supported on $\{0,p\}\subseteq\overline
V_+$. The diagonal operators $U_p(a)$ form a unitary representation because
$|e^{ip\cdot a}|=1$ and $U_p(a+a')=U_p(a)U_p(a')$; continuity is ordinary
continuity of the exponential. Put $P_0:=E_p(\{0\})=\operatorname{diag}(1,0)$
and $P_p:=E_p(\{p\})=\operatorname{diag}(0,1)$. Since $p\ne0$, these are the
two spectral projections and $E_p$ vanishes off their supports. Therefore the
bounded Borel multiplier $q\mapsto e^{iq\cdot a}$ has integral
$$\Phi_{E_p}(q\mapsto e^{iq\cdot a})=e^{i0\cdot a}P_0+e^{ip\cdot a}P_p =\operatorname{diag}(1,e^{ip\cdot a})=U_p(a),$$
by the finite-support PVM integral formula. Also $U_p(a)\Omega=\Omega$. For every
$(x,y)\in\mathbb C^2$, the matrix
$\begin{pmatrix}x&0\\y&0\end{pmatrix}$ sends $\Omega$ to $(x,y)$, so
$\Omega$ is cyclic for $\mathfrak A$. [A1, F1, F2, algebra]

2.1 The cone-restricted multiplier has values $1$ at $0$ and $e^{ip\cdot(a+ib)}=e^{ip\cdot a}e^{-p\cdot b}$ at $p$; hence its PVM integral is $\operatorname{diag}(1,e^{ip\cdot a-p\cdot b})$. For $b\in V_+$, $p\cdot b\ge p^0(b^0-|\mathbf b|)>0$, since nonzero $p\in\overline V_+$ has $p^0>0$. Therefore the $e_1$ eigenvalue has modulus $e^{-p\cdot b}<1$, while the $e_0$ eigenvalue is $1$. The operator norm is $1$, in agreement with [F2]. [A1, F1, F2, step 1.1, algebra]

3.1 On the $e_1$ component the reversed-sign continuation is $e^{-ip\cdot(a+ib)}=e^{-ip\cdot a+p\cdot b}$, of modulus $e^{p\cdot b}>1$ for $b\in V_+$. For $b\in -V_+$, $p\cdot b<0$, so its modulus is less than $1$. The $e_0$ vacuum component stays $1$ in both continuations. Thus the nonzero frequency's damping direction reverses with the Fourier sign. [A1, F1, algebra] ∎
