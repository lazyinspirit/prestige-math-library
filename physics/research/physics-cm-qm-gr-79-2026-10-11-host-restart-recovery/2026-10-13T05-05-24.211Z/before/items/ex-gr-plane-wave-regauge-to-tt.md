---
id: ex-gr-plane-wave-regauge-to-tt
kind: example
title: "Regauging an explicit harmonic-gauge plane-wave amplitude to transverse-traceless form"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-plane-wave-perturbation, lem-gr-plane-wave-gauge-decomposition, lem-gr-tt-screen-projector, def-gr-flat-linearized-perturbation, def-gr-minkowski-model-and-inertial-chart, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-algebra-of-derivatives, def-derivative]
dependency_roles:
  def-gr-plane-wave-perturbation: mathematical-premise
  lem-gr-plane-wave-gauge-decomposition: mathematical-premise
  lem-gr-tt-screen-projector: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.39)-(6.52): the explicit solution for the coefficients B_mu that converts a harmonic-gauge plane wave to transverse-traceless form, printed pp. 149-151 (PDF pp. 156-158)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.2.1 (5.20)-(5.21): the residual gauge transformation H_{mu nu} -> H_{mu nu} + i(k_mu lambda_nu + k_nu lambda_mu - k.rho lambda^rho eta_{mu nu}) and the conditions H_{0 mu} = 0, H^mu{}_mu = 0, printed pp. 211-212 (PDF pp. 218-219)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Work in the inertial chart of the flat model with the wave covector
$k^a=\omega(1,0,0,1)$, $\omega=1$, and let
$\mathcal X$ be the space of symmetric amplitudes of
[[def-gr-plane-wave-perturbation]] clause (c). Consider the amplitude

$$X=\begin{pmatrix}-2&-2&0&0\\-2&1&0&2\\0&0&-1&0\\0&2&0&2\end{pmatrix},$$

whose components in the orthonormal basis $(e_0,e_1,e_2,e_3)$ are displayed
in the order $(0,1,2,3)$. Then:

1. $X$ lies in $V_0=\{X:k^a\bar X_{ab}=0\}$ and is not TT: $X(e_0,e_0)=-2\ne0$
   and its trace is $\operatorname{tr}X=-X_{00}+X_{11}+X_{22}+X_{33}
   =2+1-1+2=4\ne0$.
2. The unique $Z$ of [[lem-gr-plane-wave-gauge-decomposition]] clause (c)
   with $X'_{ab}:=X_{ab}-k_aZ_b-k_bZ_a$ TT is $Z=(1,2,0,1)$, and
   $$X'=\begin{pmatrix}0&0&0&0\\0&1&0&0\\0&0&-1&0\\0&0&0&0\end{pmatrix},$$
   so the amplitudes of the TT representative are $A_+=1$, $A_\times=0$.
3. With $\xi_b=Z_b\sin(k\cdot x)$ the perturbation $h_{ab}=X_{ab}\cos(k\cdot x)$
   satisfies $h'_{ab}:=h_{ab}-\partial_a\xi_b-\partial_b\xi_a
   =X'_{ab}\cos(k\cdot x)$, which is a TT plane wave in harmonic gauge.

## Verification

**Given:** The inertial chart, $k^a=(1,0,0,1)$, $k_a=(-1,0,0,1)$, the amplitude $X$ above and the vector $Z=(1,2,0,1)$.

[L1] A symmetric amplitude $X$ is in $V_0$ exactly when $k^a\bar X_{ab}=0$ for every $b$. For $X\in V_0$ and $\omega\ne0$ in the adapted frame, its unique TT representative is $X'_{ab}=X_{ab}-k_aZ_b-k_bZ_a$, where $Z_0=-X_{00}/(2\omega)$, $Z_1=-X_{01}/\omega$, $Z_2=-X_{02}/\omega$, $Z_3=Z_0-X_{03}/\omega$ ([[lem-gr-plane-wave-gauge-decomposition]] clauses (b)-(c)).

[L2] For $h_{ab}=X_{ab}\cos(k\cdot x)$ and $\xi_b=Z_b\sin(k\cdot x)$ one has $\partial_a\xi_b=k_aZ_b\cos(k\cdot x)$ and $h'=X'\cos(k\cdot x)$ with $X'=X-kZ-kZ$ ([[lem-gr-plane-wave-gauge-decomposition]] clause (d), [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-gr-plane-wave-perturbation]] clauses (c)-(d)).

1.1 (Membership in $V_0$ and failure of TT.) The trace is $\operatorname{tr}X=\eta^{ab}X_{ab}=-X_{00}+X_{11}+X_{22}+X_{33}=2+1-1+2=4$, so $\bar X_{ab}=X_{ab}-2\eta_{ab}$ has entries $\bar X_{00}=-2+2=0$, $\bar X_{01}=-2$, $\bar X_{03}=0$, $\bar X_{11}=1-2=-1$, $\bar X_{13}=2$, $\bar X_{22}=-1-2=-3$, $\bar X_{33}=2-2=0$ and $\bar X_{12}=\bar X_{23}=0$. With $k^0=1$, $k^3=1$, $k^1=k^2=0$, the four contractions are $k^a\bar X_{a0}=\bar X_{00}+\bar X_{30}=0$, $k^a\bar X_{a1}=\bar X_{01}+\bar X_{31}=-2+2=0$, $k^a\bar X_{a2}=0$, $k^a\bar X_{a3}=\bar X_{03}+\bar X_{33}=0$; hence $X\in V_0$. It is not TT because $X(e_0,e_0)=X_{00}=-2\ne0$ and $\operatorname{tr}X=4\ne0$. This is clause 1. [L1, algebra]

2.1 (The TT representative.) Since $X\in V_0$ by step 1.1, [L1] with $\omega=1$ gives the unique $Z$ as $Z_0=-X_{00}/2=1$, $Z_1=-X_{01}=2$, $Z_2=-X_{02}=0$, $Z_3=Z_0-X_{03}=1$, which is the displayed $Z$. Forming $k_aZ_b+k_bZ_a$ with $k_a=(-1,0,0,1)$ gives the matrix with entries $(kZ+Zk)_{00}=-2$, $(kZ+Zk)_{01}=-2$, $(kZ+Zk)_{03}=0$, $(kZ+Zk)_{11}=0$, $(kZ+Zk)_{13}=2$, $(kZ+Zk)_{22}=0$, $(kZ+Zk)_{23}=0$, $(kZ+Zk)_{33}=2$, and subtracting from $X$ gives the displayed $X'$, whose only nonzero entries are $X'_{11}=1$ and $X'_{22}=-1$; hence $A_+=X'_{11}=1$ and $A_\times=X'_{12}=0$. This is clause 2. [L1, step 1.1, algebra]

3.1 (The perturbation.) By [L2] the gauge-transformed perturbation of the plane wave $h_{ab}=X_{ab}\cos(k\cdot x)$ is $h'=X'\cos(k\cdot x)$, and $X'\in T\subseteq V_0$ is TT and in harmonic gauge in the sense of [[def-gr-plane-wave-perturbation]] clause (c). This is clause 3. [L2, step 2.1, algebra] ∎

## Remarks

- **Uniqueness.** The example exhibits the unique solution of the linear system of [[lem-gr-plane-wave-gauge-decomposition]] clause (c): any other $Z$ would give a different tensor whose $0$-components would not vanish, and the lemma's uniqueness statement forbids two TT representatives in the same class.

- **What the amplitudes are.** The pair $(A_+,A_\times)=(1,0)$ is the gauge-invariant first-order content of this class up to the frame choice: a screen rotation mixes the pair as in [[lem-gr-tt-screen-projector]] clause (d), and the class, not the coordinate pair, is the intrinsic object.
