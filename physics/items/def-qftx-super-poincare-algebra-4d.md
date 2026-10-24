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

Use the complex field $\mathbb C$ with conjugation $z\mapsto\overline z$. Fix an integer $N\ge1$. Let $S=\mathbb C^2$ have standard basis $s_1,s_2$. For a complex vector space $W$, its conjugate vector space $\overline W$ consists of symbols $\overline w$ for $w\in W$, with addition $\overline w+\overline v=\overline{w+v}$ and scalar action $\lambda\overline w=\overline{\overline\lambda w}$. Set $\dot S=\overline S$ with dotted basis $\dot s_{\dot1}=\overline{s_1}$ and $\dot s_{\dot2}=\overline{s_2}$. Let $F=\mathbb C^N$ have standard basis $f_1,\ldots,f_N$, and let $F^*$ be its complex-linear dual with dual basis $f^1,\ldots,f^N$ and scalar action $(\lambda\ell)(v)=\lambda\ell(v)$. All tensor products are over $\mathbb C$, with scalar action $\lambda(v\otimes w)=(\lambda v)\otimes w=v\otimes(\lambda w)$ and product bases formed from the displayed bases. Define $\Lambda^2F=(F\otimes_{\mathbb C}F)/\operatorname{span}_{\mathbb C}\{v\otimes v:v\in F\}$; its basis is $f_I\wedge f_J$ for $1\le I<J\le N$, with quotient scalar action. Its conjugate $\overline{\Lambda^2F}$ has basis $\overline{f_I\wedge f_J}$ and the conjugate scalar action just defined. For $N=1$ these exterior-square spaces are zero. In the displayed bases, $\mathfrak{sl}(S)=\{A\in\operatorname{End}_{\mathbb C}(S):\operatorname{tr}A=0\}$ and $\mathfrak{sl}(\dot S)=\{B\in\operatorname{End}_{\mathbb C}(\dot S):\operatorname{tr}B=0\}$. Put $\epsilon_{12}=\epsilon_{\dot1\dot2}=1$ and $\epsilon_{21}=\epsilon_{\dot2\dot1}=-1$, with zero diagonal. The complex even space is

$$\mathfrak g_{\bar0}=\bigl(\mathfrak{sl}(S)\oplus\mathfrak{sl}(\dot S)\bigr)\oplus V\oplus C_N,\qquad V=S\otimes\dot S,\qquad C_N=\Lambda^2F\oplus\overline{\Lambda^2F}.$$

Write $T_{\alpha\dot\beta}=s_\alpha\otimes\dot s_{\dot\beta}$ for the basis of $V$. The listed central generators form a basis of $C_N$: $Z^{IJ}$ corresponds to $f_I\wedge f_J$ and $\bar Z_{IJ}$ to $\overline{f_I\wedge f_J}$ for $1\le I<J\le N$; extend them by antisymmetry in the flavor indices and set their diagonal entries to zero. The complex odd space is

$$\mathfrak g_{\bar1}=(S\otimes F)\oplus(\dot S\otimes F^*),$$

with basis $Q^I_\alpha=s_\alpha\otimes f_I$ and $\bar Q_{\dot\alpha I}=\dot s_{\dot\alpha}\otimes f^I$. A homogeneous vector has parity $|x|\in\{0,1\}$. The bracket is complex-bilinear, preserves parity, and obeys $[x,y]=-(-1)^{|x||y|}[y,x]$. Its complete nonzero table, apart from the graded-skew consequences, is

$$[ (A,B),(A',B') ]=([A,A'],[B,B']),\qquad [(A,B),T]= (A\otimes I+I\otimes B)T,$$

$$[(A,B),Q^I_\alpha]=A^\gamma{}_{\alpha}Q^I_\gamma,\qquad [(A,B),\bar Q_{\dot\alpha I}]=B^{\dot\gamma}{}_{\dot\alpha}\bar Q_{\dot\gamma I},$$

Here $A^\gamma{}_{\alpha}$ is the entry in row $\gamma$, column $\alpha$, so $As_\alpha=\sum_\gamma A^\gamma{}_{\alpha}s_\gamma$; dotted entries use the same convention. Thus on the translation basis the tensor action is $[(A,B),T_{\alpha\dot\beta}]=\sum_\gamma A^\gamma{}_{\alpha}T_{\gamma\dot\beta}+\sum_{\dot\gamma}B^{\dot\gamma}{}_{\dot\beta}T_{\alpha\dot\gamma}$.

$$\{Q^I_\alpha,\bar Q_{\dot\beta J}\}=-2\delta^I{}_J T_{\alpha\dot\beta},\qquad \{Q^I_\alpha,Q^J_\beta\}=2\epsilon_{\alpha\beta}Z^{IJ},\qquad \{\bar Q_{\dot\alpha I},\bar Q_{\dot\beta J}\}=2\epsilon_{\dot\alpha\dot\beta}\bar Z_{IJ}.$$

All other brackets vanish: $V$ and $C_N$ are abelian, $C_N$ is central, and $V$ brackets trivially with the odd space. The two antisymmetric factors in each equal-chirality odd bracket make that bracket symmetric in the combined spinor-flavor labels. The Lie-superalgebra and real-form properties are established by the local Jacobi result.

Define a conjugate-linear involution $*$ on the generators by

$$ (A,B)^*=(-\overline B,-\overline A),\quad Q^I_\alpha{}^*=\bar Q_{\dot\alpha I},\quad \bar Q_{\dot\alpha I}{}^*=Q^I_\alpha,\quad T_{\alpha\dot\beta}^*=T_{\beta\dot\alpha},\quad (Z^{IJ})^*=\bar Z_{IJ},\quad (\bar Z_{IJ})^*=Z^{IJ}.$$

It uses the operator-adjoint convention $[x,y]^*=-(-1)^{|x||y|}[x^*,y^*]$. The associated real Lie superalgebra is the fixed space of the conjugate-linear map $\tau(x)=-x^*$ on even elements and $\tau(x)=i x^*$ on odd elements. Its real Lorentz algebra is the fixed diagonal copy of $\mathfrak{sl}(2,\mathbb C)$; its real translation generators are the $\tau$-fixed skew-Hermitian bispinors. The star-fixed translation coordinates defined below are abstract elements of the complex algebra; their multiples by $i$ form a real basis of the tau-fixed translation space.

For the metric convention $\eta=\operatorname{diag}(-1,1,1,1)$, put $\sigma^0=I_2$ and

$$\sigma^1=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma^2=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad \sigma^3=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad \bar\sigma^0=I_2,\qquad \bar\sigma^j=-\sigma^j.$$

They obey

$$\sigma^\mu\bar\sigma^\nu+\sigma^\nu\bar\sigma^\mu=-2\eta^{\mu\nu}I_2.$$

Define abstract translation coordinates $p_0=(T_{1\dot1}+T_{2\dot2})/2$, $p_1=(T_{1\dot2}+T_{2\dot1})/2$, $p_2=(T_{2\dot1}-T_{1\dot2})/(2i)$, and $p_3=(T_{1\dot1}-T_{2\dot2})/2$. Then $T_{\alpha\dot\beta}=\sigma^\mu_{\alpha\dot\beta}p_\mu$, $p_\mu^*=p_\mu$, and $\tau(ip_\mu)=ip_\mu$. A representation of the complex supertranslation algebra $\mathfrak t=V\oplus C_N\oplus\mathfrak g_{\bar1}$ on a graded complex vector space $\mathcal D$ means a parity-preserving complex-linear map $\rho:\mathfrak t\to\operatorname{End}_{\mathbb C}(\mathcal D)$ preserving the bracket, where the target bracket on homogeneous endomorphisms is $[X,Y]=XY-(-1)^{|X||Y|}YX$. Write $P_\mu=\rho(p_\mu)$ and use the charge symbols for their images. Thus $\rho(T_{\alpha\dot\beta})=\sigma^\mu_{\alpha\dot\beta}P_\mu$ and the represented mixed relation is $\{Q^I_\alpha,\bar Q_{\dot\beta J}\}=-2\sigma^\mu_{\alpha\dot\beta}P_\mu\delta^I{}_J$, with $P_\mu=\eta_{\mu\nu}P^\nu$. Complex linearity gives $\rho(ip_\mu)=iP_\mu$, hence $-i\rho(ip_\mu)=P_\mu$. For a real number $M>0$, a massive rest module here means such a supertranslation representation with $P^0=M I_{\mathcal D}$ and $P^j=0$ for $j=1,2,3$. Consequently $P_0=-M I_{\mathcal D}$ and its mixed anticommutator is $2M\delta_{\alpha\dot\beta}\delta^I{}_J I_{\mathcal D}$. This is an algebraic specialization, with no assertion of a Hilbert adjoint or a spectral fiber. Here $N$ counts left Weyl spinors; the scalar central-charge matrix is antisymmetric and therefore vanishes for $N=1$. Tensorial or topological extensions are outside this scalar-central-charge algebra. The convention uses natural units $\hbar=c=1$; translation and central-charge generators have mass dimension one and supercharges have mass dimension one-half.

## Definition references

[Martin, §§1–3.1](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §3.2](https://arxiv.org/pdf/hep-th/0108200).

The complex numbers as $\mathbb R[x]/(x^2+1)$, with the real embedding and imaginary unit $i$: [[def-complex-numbers-and-arithmetic]].

$\mathbb C=\mathbb R[x]/(x^2+1)$ is a field, every element is uniquely $a+bi$, and every nonzero element has inverse $(a-bi)/(a^2+b^2)$: [[thm-complex-numbers-form-a-field]].

Real and imaginary parts, complex conjugation, and modulus: [[def-complex-conjugate-real-imaginary-part-and-modulus]].

## Remarks

The separate positive unitary representation definition supplies a nonzero graded complex Hilbert space $\mathcal H$, a joint momentum projection-valued measure $E$, self-adjoint coordinate integrals $p_\mu(E)$ on their square-integrability domains, and a common dense invariant domain $\mathcal D$. In that setting the algebraic images above are $P_\mu=p_\mu(E)|_{\mathcal D}$, and $-i\rho(ip_\mu)=P_\mu$ on $\mathcal D$. Self-adjointness and spectral assertions require those additional hypotheses; they do not follow from a representation on a graded complex vector space. The rest-module relation above applies on any separately supplied invariant domain on which the momenta have the stated scalar values; no existence of a nonzero spectral fiber is asserted here.

## Remarks references

[[def-qftx-unitary-super-poincare-representation|positive unitary representation definition]]
