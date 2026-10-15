---
id: lem-qft-example-dirac-pauli-square
kind: lemma
title: Minimal Dirac magnetic square and formal Pauli benchmark
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-qft-example-data
dependency_roles:
  def-qft-example-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, section 64
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted textbook draft; printed pp. 383–385, minimally coupled Dirac electron and tree plus radiative magnetic-moment coefficients.
    - title: David Tong, Quantum Field Theory, Chapter 4, sections 4.3 and 4.7
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html
      locator: Complete author-hosted HTML chapter; Clifford matrices, Dirac equation, Pauli spinors, and positive-/negative-frequency solutions.
---

## Statement

Let $m>0$ be a particle mass in kilograms, $q\in\mathbb R$ its charge in coulombs, and $A:\mathbb R^3\to\mathbb R^3$ a smooth spatial vector potential with components in tesla-metres. Use standard Cartesian coordinates $x_i$ measured in metres and write $\partial_i:=\partial/\partial x_i$. Let $\epsilon_{ijk}$ be the alternating symbol with $\epsilon_{123}=1$, and sum repeated spatial indices from $1$ to $3$. Define $B_k(x)=\epsilon_{kij}\partial_iA_j(x)$ and $\mathbf B=(B_1,B_2,B_3):\mathbb R^3\to\mathbb R^3$; its smooth components are in tesla.

Let $\mathcal C=C_c^\infty(\mathbb R^3;\mathbb C^4)$ be the common invariant test domain. In this item, “common core” refers only to this shared domain of the displayed differential expressions; no operator-theoretic core property for a closure is asserted. Define the dimensionless finite matrices
$$\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad \sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix},$$
$$\beta=\begin{pmatrix}I_2&0\\0&-I_2\end{pmatrix},\qquad \alpha_i=\begin{pmatrix}0&\sigma_i\\\sigma_i&0\end{pmatrix},\qquad \Sigma_i=\operatorname{diag}(\sigma_i,\sigma_i),$$
and use $\hbar,c$ of [[def-qft-example-data]]. On $\mathcal C$, define
$$\pi_i\psi=-i\hbar\partial_i\psi-qA_i\psi,\qquad H_D\psi=c\sum_{i=1}^3\alpha_i\pi_i\psi+\beta mc^2\psi.$$
These maps preserve $\mathcal C$. The components $\pi_i$ have units $\mathrm{kg\,m\,s^{-1}}$ and $H_D$ has units joules. Define the operator expressions
$$\boldsymbol\pi^2\psi:=\sum_{i=1}^3\pi_i(\pi_i\psi),\qquad (\boldsymbol\Sigma\cdot\mathbf B)\psi:=\sum_{i=1}^3\Sigma_iB_i\psi.$$
Here $[\pi_i,\pi_j]:=\pi_i\circ\pi_j-\pi_j\circ\pi_i$, and $H_D^2$ denotes composition on $\mathcal C$. On $\mathcal C$, the identities are
$$[\pi_i,\pi_j]=iq\hbar\epsilon_{ijk}B_k,\qquad H_D^2=m^2c^4I_4+c^2(\boldsymbol\pi^2-q\hbar\boldsymbol\Sigma\cdot\mathbf B).$$
The operator $K:=\boldsymbol\pi^2-q\hbar\boldsymbol\Sigma\cdot\mathbf B$ maps $\mathcal C$ to itself and has units $(\mathrm{kg\,m\,s^{-1}})^2$.

For commuting formal indeterminates $t,X$ over $\mathbb R$, define the first-order square-root coefficient $a$ by
$$(mc^2+taX)^2\equiv m^2c^4+tc^2X\pmod{t^2}.$$
Comparing the coefficient of $tX$ gives $a=1/(2m)$; substituting $K$ for $X$ gives the formal first-degree correction $K/(2m)$, with no operator square-root assertion. Its spin term is $-(q/m)\mathbf S\cdot\mathbf B$, where $S_i=\hbar\Sigma_i/2$, $\mathbf S=(S_1,S_2,S_3)$, and $(\mathbf S\cdot\mathbf B)\psi:=\sum_{i=1}^3S_iB_i\psi$. The magnetic-moment dot product below uses the same componentwise sum convention.

Under the coefficient convention $H_{\mathrm{mag}}=-\boldsymbol\mu_{\mathrm{mag}}\cdot\mathbf B$ and $\boldsymbol\mu_{\mathrm{mag}}=g_s(q/(2m))\mathbf S$, equality of the formal coefficients as a linear function of $q$ gives $g_s=2$ for the minimal tree-level term. Here $H_{\mathrm{mag}}$ has units joules and $\boldsymbol\mu_{\mathrm{mag}}$ has units $\mathrm{A\,m^2}$. No magnetic self-adjoint closure, full spectrum, operator square-root theorem, radiative correction, or empirical prediction is asserted.

## Facts & Assumptions

**Given:** Assume $m>0$, $q\in\mathbb R$, smooth $A$ with the component units stated above, and the common invariant test domain $\mathcal C$ defined in the Statement. Use the finite Dirac matrices and SI constants stated above.

[F2] [[def-qft-example-data]]: $c$ is in metres per second, $\hbar$ is in joule-seconds, $q$ is in coulombs, and spatial $A_i$ is in tesla-metres.

## Proof

1.1 For $\psi\in\mathcal C$, expand $\pi_i\pi_j\psi-\pi_j\pi_i\psi$. The second derivatives and products $A_iA_j$ cancel; the remaining derivative terms are $iq\hbar(\partial_iA_j-\partial_jA_i)\psi=iq\hbar\epsilon_{ijk}B_k\psi$ by the stated alternating-symbol and summation conventions. Smoothness of $A$ ensures each multiplication and differentiation maps $\mathcal C$ to itself. [given, F2, algebra]

1.2 In $\mathbb R[X,t]/(t^2)$, the coefficient of $tX$ in $(mc^2+taX)^2$ is $2mc^2a$. The defining identity in the Statement sets this equal to $c^2$, so $a=1/(2m)$ since $m>0$. Substituting $K$ for $X$, the spin part of $K/(2m)$ is $-q\hbar\boldsymbol\Sigma\cdot\mathbf B/(2m)=-(q/m)\mathbf S\cdot\mathbf B$. [given, algebra]

2.1 Direct multiplication of the displayed $2\times2$ matrices gives $\sigma_i^2=I_2$, $\sigma_1\sigma_2=i\sigma_3$, $\sigma_2\sigma_3=i\sigma_1$, and $\sigma_3\sigma_1=i\sigma_2$; each reversed product has the opposite sign. Thus $\sigma_i\sigma_j=\delta_{ij}I_2+i\epsilon_{ijk}\sigma_k$. Block multiplication gives $\alpha_i\alpha_j=\delta_{ij}I_4+i\epsilon_{ijk}\Sigma_k$, $\alpha_i\beta=-\beta\alpha_i$, and $\beta^2=I_4$. These fixed constant matrices commute with every $\pi_j$. Expand $(\sum_i\alpha_i\pi_i)^2=\sum_{i,j}\alpha_i\alpha_j\pi_i\pi_j$. The $\delta_{ij}$ term in the derived block product is the operator $\boldsymbol\pi^2$ defined in the Statement. Its antisymmetric term is
$$\frac{i}{2}\epsilon_{ijk}\Sigma_k[\pi_i,\pi_j] =-\frac{q\hbar}{2}\epsilon_{ijk}\epsilon_{ij\ell}\Sigma_kB_\ell =-q\hbar\boldsymbol\Sigma\cdot\mathbf B,$$
because $\epsilon_{ijk}\epsilon_{ij\ell}=2\delta_{k\ell}$. The cross terms with $\beta mc^2$ cancel by $\alpha_i\beta+\beta\alpha_i=0$, and $\beta^2=I_4$. This proves the displayed square identity on $\mathcal C$; no product outside that domain is used. [step 1.1, given, algebra]

3.1 The coefficient of the term linear in $q$ is $-(q/m)\mathbf S\cdot\mathbf B$. Equating it with $-g_s(q/(2m))\mathbf S\cdot\mathbf B$ as a formal coefficient identity gives $g_s=2$, including the zero-charge specialization of that identity. This is only a formal lowest-order coefficient comparison, not an operator or empirical conclusion. [step 1.2, given, algebra] ∎
