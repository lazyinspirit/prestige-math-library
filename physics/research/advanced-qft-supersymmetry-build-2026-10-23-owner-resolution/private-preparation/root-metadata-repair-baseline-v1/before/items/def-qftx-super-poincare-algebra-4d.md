---
id: def-qftx-super-poincare-algebra-4d
kind: definition
title: Four-dimensional real extended super-Poincare algebra
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps: [def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field, def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: [lem-qftx-super-poincare-graded-jacobi]
dependency_roles:
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
dependency_level: 0
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§1, 2, and 3.1, printed pp. 5–6, 13–16, and 18–21; the local item fixes the real form and sign bridge explicitly."
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§3.2, printed pp. 62–65; its spinor and central-charge conventions are not silently imported."
verification:
  precheck: n/a
---

## Definition

Use the complex field $\mathbb C$ with conjugation $z\mapsto\overline z$. Fix an integer $N\ge1$. Let $S=\mathbb C^2$ and let $\dot S=\overline S$ be its conjugate vector space, with dotted basis labels. In the chosen bases put $\epsilon_{12}=\epsilon_{\dot1\dot2}=1$ and $\epsilon_{21}=\epsilon_{\dot2\dot1}=-1$, with zero diagonal. Write $\mathfrak{sl}(S)$ and $\mathfrak{sl}(\dot S)$ for the traceless complex $2\times2$ matrices. The complex even space is

$$\mathfrak g_{\bar0}=\bigl(\mathfrak{sl}(S)\oplus\mathfrak{sl}(\dot S)\bigr)\oplus V\oplus C_N,\qquad V=S\otimes\dot S,\qquad C_N=\Lambda^2\mathbb C^N\oplus\overline{\Lambda^2\mathbb C^N}.$$

Write $T_{\alpha\dot\beta}$ for the basis of $V$. The central space $C_N$ has generators $Z^{IJ}$ and $\bar Z_{IJ}$ for $1\le I<J\le N$, extended by antisymmetry in the flavor indices and with zero diagonal. The complex odd space is

$$\mathfrak g_{\bar1}=(S\otimes\mathbb C^N)\oplus(\dot S\otimes(\mathbb C^N)^*),$$

with basis $Q^I_\alpha$ and $\bar Q_{\dot\alpha I}$. A homogeneous vector has parity $|x|\in\{0,1\}$. The bracket is complex-bilinear, preserves parity, and obeys $[x,y]=-(-1)^{|x||y|}[y,x]$. Its complete nonzero table, apart from the graded-skew consequences, is

$$[ (A,B),(A',B') ]=([A,A'],[B,B']),\qquad [(A,B),T]= (A\otimes I+I\otimes B)T,$$

$$[(A,B),Q^I_\alpha]=A_\alpha{}^\gamma Q^I_\gamma,\qquad [(A,B),\bar Q_{\dot\alpha I}]=B_{\dot\alpha}{}^{\dot\gamma}\bar Q_{\dot\gamma I},$$

$$\{Q^I_\alpha,\bar Q_{\dot\beta J}\}=-2\delta^I{}_J T_{\alpha\dot\beta},\qquad \{Q^I_\alpha,Q^J_\beta\}=2\epsilon_{\alpha\beta}Z^{IJ},\qquad \{\bar Q_{\dot\alpha I},\bar Q_{\dot\beta J}\}=2\epsilon_{\dot\alpha\dot\beta}\bar Z_{IJ}.$$

All other brackets vanish: $V$ and $C_N$ are abelian, $C_N$ is central, and $V$ brackets trivially with the odd space. The two antisymmetric factors in each equal-chirality odd bracket make that bracket symmetric in the combined spinor-flavor labels. The Lie-superalgebra and real-form properties are established by the local Jacobi result.

Define a conjugate-linear involution $*$ on the generators by

$$ (A,B)^*=(-\overline B,-\overline A),\quad Q^I_\alpha{}^*=\bar Q_{\dot\alpha I},\quad \bar Q_{\dot\alpha I}{}^*=Q^I_\alpha,\quad T_{\alpha\dot\beta}^*=T_{\beta\dot\alpha},\quad (Z^{IJ})^*=\bar Z_{IJ},\quad (\bar Z_{IJ})^*=Z^{IJ}.$$

It uses the operator-adjoint convention $[x,y]^*=-(-1)^{|x||y|}[x^*,y^*]$. The associated real Lie superalgebra is the fixed space of the conjugate-linear map $\tau(x)=-x^*$ on even elements and $\tau(x)=i x^*$ on odd elements. Its real Lorentz algebra is the fixed diagonal copy of $\mathfrak{sl}(2,\mathbb C)$; its real translation generators are the $\tau$-fixed skew-Hermitian bispinors. Hermitian physical momenta are obtained by multiplying those real translation generators by $-i$ in a unitary representation.

For the metric convention $\eta=\operatorname{diag}(-1,1,1,1)$, put $\sigma^0=I_2$ and

$$\sigma^1=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma^2=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad \sigma^3=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad \bar\sigma^0=I_2,\qquad \bar\sigma^j=-\sigma^j.$$

They obey

$$\sigma^\mu\bar\sigma^\nu+\sigma^\nu\bar\sigma^\mu=-2\eta^{\mu\nu}I_2.$$

Identify the Hermitian bispinor momentum matrix by $T_{\alpha\dot\beta}=\sigma^\mu_{\alpha\dot\beta}P_\mu$, where $P_\mu=\eta_{\mu\nu}P^\nu$. This fixes the mixed relation as $\{Q^I_\alpha,\bar Q_{\dot\beta J}\}=-2\sigma^\mu_{\alpha\dot\beta}P_\mu\delta^I{}_J$. In a massive rest fiber $P^\mu=(M,0,0,0)$, so $P_0=-M$ and the mixed anticommutator is $2M\delta_{\alpha\dot\beta}\delta^I{}_J$. Here $N$ counts left Weyl spinors; the scalar central-charge matrix is antisymmetric and therefore vanishes for $N=1$. Tensorial or topological extensions are outside this scalar-central-charge algebra. The convention uses natural units $\hbar=c=1$; translation and central-charge generators have mass dimension one and supercharges have mass dimension one-half.

## Definition references

[Martin, §§1–3.1](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §3.2](https://arxiv.org/pdf/hep-th/0108200).

The complex numbers as $\mathbb R[x]/(x^2+1)$, with the real embedding and imaginary unit $i$: [[def-complex-numbers-and-arithmetic]].

$\mathbb C=\mathbb R[x]/(x^2+1)$ is a field, every element is uniquely $a+bi$, and every nonzero element has inverse $(a-bi)/(a^2+b^2)$: [[thm-complex-numbers-form-a-field]].

Real and imaginary parts, complex conjugation, and modulus: [[def-complex-conjugate-real-imaginary-part-and-modulus]].
