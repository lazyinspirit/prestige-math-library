---
id: prop-qftx-su2-bpst-explicit-connection-on-s4
kind: proposition
title: Explicit charge-one BPST connection on the round four-sphere
status: draft
origin: session
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: ZF + full AC, inherited from the gauge datum and instanton-number definition.
deps:
- def-qftx-nonabelian-gauge-data
- def-qftx-principal-connection-form
- lem-qftx-two-chart-principal-bundle-gluing
- def-qftx-lie-algebra-valued-form-bracket
- lem-qftx-principal-curvature-cartan-bianchi
- def-qftx-instanton-number-and-asd-sector
- thm-qftx-yang-mills-selfdual-action-bound
- lem-qftx-hodge-star-decomposition-four-dimensions
- ex-unitary-and-special-unitary-lie-groups
- thm-heine-borel-rn
- def-axiom-of-choice
dependency_roles:
  def-qftx-nonabelian-gauge-data: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  lem-qftx-two-chart-principal-bundle-gluing: mathematical-premise
  def-qftx-lie-algebra-valued-form-bracket: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  def-qftx-instanton-number-and-asd-sector: mathematical-premise
  thm-qftx-yang-mills-selfdual-action-bound: mathematical-premise
  lem-qftx-hodge-star-decomposition-four-dimensions: mathematical-premise
  ex-unitary-and-special-unitary-lie-groups: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: A. A. Belavin, A. M. Polyakov, A. S. Schwartz, and Yu. S. Tyupkin, Pseudoparticle Solutions of the Yang–Mills Equations
    url: https://strings.itp.ac.ru/Papers/belavin1975.pdf
    locator: 'Printed pp. 85–87, equations (3)–(18): charge, self-dual bound, regular finite-action SU(2) charge-one field, and its gauge form.'
  - title: 'David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks'
    url: https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf
    locator: 'Lecture 1, §§1.1–1.1.2, printed pp. 6–10, equations (1.1)–(1.11): action and charge conventions, Bianchi consequence, and the charge-one SU(2) connection with ''t Hooft symbols.'
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume full Axiom of Choice. Let $B^5=\{z\in\mathbb R^5:|z|\leq1\}$ and $S^4=\partial B^5=\{z\in\mathbb R^5:|z|=1\}$ have the Euclidean induced unit round metric $g_X$. Put $p_\infty=(0,0,0,0,-1)$ and $p_0=(0,0,0,0,1)$, and set $U_N=S^4\setminus\{p_\infty\}$ and $U_S=S^4\setminus\{p_0\}$. Define the north chart by

$$\kappa_N:\mathbb R^4\longrightarrow S^4\setminus\{p_\infty\},\qquad \kappa_N(x)=\left(\frac{2x}{1+|x|^2},\frac{1-|x|^2}{1+|x|^2}\right),$$

and the south chart by

$$\kappa_S:\mathbb R^4\longrightarrow S^4\setminus\{p_0\},\qquad \kappa_S(y)=\left(\frac{2y}{1+|y|^2},\frac{|y|^2-1}{1+|y|^2}\right).$$

Write $x=(x^1,x^2,x^3,x^4)$ and $y=(y^1,y^2,y^3,y^4)$ for the inverse chart coordinates, so $\kappa_N(0)=p_0$, $r^2=|x|^2=\sum_{\mu=1}^4(x^\mu)^2$, and on the overlap $y=x/r^2$. The north coordinates have $dx^1\wedge dx^2\wedge dx^3\wedge dx^4>0$. The metrics in these charts are respectively $4(1+r^2)^{-2}\sum_{\mu=1}^4(dx^\mu)^2$ and $4(1+|y|^2)^{-2}\sum_{\mu=1}^4(dy^\mu)^2$.

Define $SU(2)=\{U\in M_2(\mathbb C):U^*U=I,\det U=1\}$. Write $\epsilon_{123}=1$ and let

$$ \sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad \sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad T_a=-\frac{i}{2}\sigma_a. $$

The $T_a$ are traceless anti-Hermitian generators. Set $B(X,Y)=-\operatorname{tr}_2(XY)$. Define antisymmetric symbols by $\eta_{aij}=\epsilon_{aij}$, $\eta_{ai4}=\delta_{ai}$, $\bar\eta_{aij}=-\epsilon_{aij}$, and $\bar\eta_{ai4}=\delta_{ai}$ for spatial indices $i,j\in\{1,2,3\}$, where $\delta_{ai}$ is the Kronecker delta; extend them antisymmetrically in the last two indices. For a scale parameter $\rho>0$, define $u(x)=(x^4I-i x^j\sigma_j)/r\in SU(2)$ on $U_N\cap U_S$. Form the quotient of the two trivial right $SU(2)$-bundles by identifying $(x,h)_S\sim(x,u(x)^{-1}h)_N$ for each $x\in U_N\cap U_S$ and $h\in SU(2)$, so its local sections satisfy $s_S=s_Nu^{-1}$. Take the set of admitted bundle sectors to be the singleton containing the isomorphism class of this glued bundle, and take the representation family to be the singleton defining representation on $\mathbb C^2$. Define the local connection potentials by

$$ A_N=\frac{2\eta_{a\mu\nu}x^\nu}{r^2+\rho^2}T_a\,dx^\mu,\qquad A_S=-\frac{2\rho^2\bar\eta_{a\mu\nu}y^\nu}{1+\rho^2|y|^2}T_a\,dy^\mu. $$

On the overlap these obey $A_S=\operatorname{Ad}_u A_N+u\,d(u^{-1})$, so they define a smooth principal connection on the glued bundle. Let $F$ be its global curvature, with chart representatives $F_N$ and $F_S$. In the north chart its curvature, written $F_N=\tfrac12F^N_{\mu\nu}dx^\mu\wedge dx^\nu$, has components

$$ F^N_{\mu\nu}=-\frac{4\rho^2}{(r^2+\rho^2)^2}\eta_{a\mu\nu}T_a. $$

Let $*_{g_X}$ be the Hodge star characterized on two-forms by $\alpha\wedge *_{g_X}\beta=\langle\alpha,\beta\rangle_{g_X}\,d\operatorname{vol}_X$, acting componentwise on the Lie-algebra coefficients. This curvature is self-dual, meaning $F_N=*_{g_X}F_N$. With $B$ as fixed above, define the charge by $q_B=(8\pi^2)^{-1}\int_{S^4}B(F\wedge F)$ and, for any real $g>0$, define the action by $S_B(g)=g^{-2}\int_{S^4}B(F\wedge *_{g_X}F)$. Then $q_B=1$, $S_B(g)=8\pi^2/g^2<\infty$, and the action saturates the self-dual bound. This is one explicit Belavin–Polyakov–Schwartz–Tyupkin (BPST) charge-one connection; no uniqueness or moduli classification is asserted.

## Statement references

[Belavin–Polyakov–Schwartz–Tyupkin, printed pp. 85–87](https://strings.itp.ac.ru/Papers/belavin1975.pdf)

[Tong, Lecture 1 §§1.1–1.1.2](https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf)

[[def-qftx-instanton-number-and-asd-sector|Trace form, charge, and Chern–Weil sign convention]]

[[thm-qftx-yang-mills-selfdual-action-bound|Self-dual action bound and Bianchi consequence]]

[[lem-qftx-principal-curvature-cartan-bianchi|Local curvature and section-transition convention]]

[[ex-unitary-and-special-unitary-lie-groups|SU(2) matrix Lie group and Lie algebra]]

[[thm-heine-borel-rn|Closed-and-bounded compactness in the matrix coordinate space]]

## Facts & Assumptions

**Given:** Full AC; the round sphere charts and orientation; the Pauli matrices, symbols, scale $\rho>0$, and trace form $B$ in the Statement.

[A1] Full AC means every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] $SU(2)$ is a real matrix Lie group with Lie algebra the traceless skew-Hermitian matrices and commutator bracket. [[ex-unitary-and-special-unitary-lie-groups]]

[F2] A closed and bounded subset of Euclidean $\mathbb R^8$ is compact. [[thm-heine-borel-rn]]

[F3] For a right principal bundle, the local-section change $s_S=s_Ng$ gives $A_S=\operatorname{Ad}_{g^{-1}}A_N+g^{-1}dg$ and $F_S=\operatorname{Ad}_{g^{-1}}F_N$; the local curvature is $dA+\tfrac12[A\wedge A]$. [[def-qftx-principal-connection-form]], [[lem-qftx-principal-curvature-cartan-bianchi]]

[F4] The graded bracket convention gives $\tfrac12[A\wedge A](\partial_\mu,\partial_\nu)=[A_\mu,A_\nu]$. [[def-qftx-lie-algebra-valued-form-bracket]]

[F5] The charge is $q_B=(8\pi^2)^{-1}\int B(F\wedge F)$ and the action is $S_B=g^{-2}\int B(F\wedge *_{g_X}F)$; a self-dual connection with positive charge saturates $S_B\geq8\pi^2|q_B|/g^2$. [[def-qftx-instanton-number-and-asd-sector]], [[thm-qftx-yang-mills-selfdual-action-bound]]

[F6] Gauge data specify the actual global group, right principal bundle, representation family, and admitted bundle sector; the datum itself does not choose a connection. [[def-qftx-nonabelian-gauge-data]]

[F7] Two trivial right principal bundles glued on an open overlap by a smooth group-valued transition map form a smooth right principal bundle, and the local sections obey the declared transition. [[lem-qftx-two-chart-principal-bundle-gluing]]

[F8] In an oriented four-dimensional inner-product space, the Hodge star on two-forms is an isometric involution with orthogonal $+1$ and $-1$ eigenspaces and projections $(I\pm *)/2$. [[lem-qftx-hodge-star-decomposition-four-dimensions]]


## Proof

1.1 The Pauli identity $\sigma_i\sigma_j=\delta_{ij}I+i\epsilon_{ijk}\sigma_k$ gives $(x^4I-i x^j\sigma_j)^*(x^4I-i x^j\sigma_j)=r^2I$. In entries this matrix is $\begin{pmatrix}x^4-i x^3&-i x^1-x^2\\-i x^1+x^2&x^4+i x^3\end{pmatrix}$, whose determinant is $(x^4)^2+(x^3)^2+(x^1)^2+(x^2)^2=r^2$. Thus $u(x)$ is unitary with determinant one wherever $r>0$. The equations $U^*U=I$ and $\det U=1$ make $SU(2)$ closed in the eight-dimensional real matrix space, and its entries have modulus at most one, so it is bounded; [F2] gives compactness. The traceless skew-Hermitian $2\times2$ matrices have the form $\begin{pmatrix}ia&z\\-\bar z&-ia\end{pmatrix}$ for $a\in\mathbb R$ and $z\in\mathbb C$, so $T_1,T_2,T_3$ form a real basis. Direct multiplication gives $[T_a,T_b]=\epsilon_{abc}T_c$ and $B(T_a,T_b)=\tfrac12\delta_{ab}$. For $X,Y\in\mathfrak{su}(2)$, cyclicity gives $B(X,Y)=B(Y,X)$, while $\overline{\operatorname{tr}(XY)}=\operatorname{tr}(Y^*X^*)=\operatorname{tr}(YX)=\operatorname{tr}(XY)$, so $B(X,Y)\in\mathbb R$. Since $X^*=-X$, $B(X,X)=\operatorname{tr}(X^*X)>0$ for $X\ne0$; and $B(UXU^{-1},UYU^{-1})=B(X,Y)$ by cyclicity for $U\in SU(2)$. Thus $B$ is symmetric, positive definite, and adjoint-invariant. Finally $M=\operatorname{diag}(i,-i)$ and $N=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ lie in $SU(2)$, while $MN=-NM$, so $SU(2)$ is non-Abelian. Together with [F1], this verifies the group, representation, and trace hypotheses of the definition. [given, F1, F2, algebra]

2.1 By [F7], the quotient with $\tau=u^{-1}$ is a smooth right principal $SU(2)$-bundle with sections satisfying $s_S=s_Nu^{-1}$. Full AC [A1] supplies the countable-choice hypothesis of the gauge-data interface [F6], which specifies the actual global form, singleton defining-representation family, and bundle sector selected in the Statement. Matrix multiplication using $\sigma_i\sigma_j=\delta_{ij}I+i\epsilon_{ijk}\sigma_k$ gives $u^{-1}du=\frac{2\eta_{a\mu\nu}x^\nu}{r^2}T_a\,dx^\mu$ and $du\,u^{-1}=\frac{2\bar\eta_{a\mu\nu}x^\nu}{r^2}T_a\,dx^\mu$. Thus $A_N=\frac{r^2}{r^2+\rho^2}u^{-1}du$. With transition $g=u^{-1}$, [F3] gives $\operatorname{Ad}_u A_N+u\,d(u^{-1})=-\frac{\rho^2}{r^2+\rho^2}du\,u^{-1}=-\frac{2\rho^2\bar\eta_{a\mu\nu}x^\nu}{r^2(r^2+\rho^2)}T_a\,dx^\mu$. Substituting $y=x/r^2$ and $dx^\mu=(\delta_{\mu\lambda}/|y|^2-2y^\mu y_\lambda/|y|^4)dy^\lambda$, the term containing $y^\mu y^\nu\bar\eta_{a\mu\nu}$ vanishes by antisymmetry, leaving exactly the displayed $A_S$. The $A_N$ coefficients are smooth at $x=0$ because $\rho>0$, and $A_S$ is smooth at $y=0$ because its denominator is positive and its numerator is linear in $y$. In a product chart with local section $s_i$ and group coordinate $h\in SU(2)$, set $\omega_i=\operatorname{Ad}_{h^{-1}}A_i+h^{-1}dh$. The checked transition relation makes these forms agree on the overlap; direct substitution gives $\omega_i(Z_P)=Z$ for every fundamental vertical vector $Z_P$ and $R_k^*\omega_i=\operatorname{Ad}_{k^{-1}}\omega_i$ for every fixed $k\in SU(2)$. The converse in [F3] therefore gives a smooth principal connection on the glued bundle. [given, A1, F3, F6, F7, step 1.1, algebra]

3.1 Differentiating $A^a_{N,\nu}=2\eta_{a\nu\lambda}x^\lambda/(r^2+\rho^2)$ and using [F4] gives $F^a_{N,\mu\nu}=-4\eta_{a\mu\nu}/D+4Q_{a\mu\nu}/D^2$, where $D=r^2+\rho^2$ and $Q_{a\mu\nu}=-\eta_{a\nu\lambda}x^\lambda x_\mu+\eta_{a\mu\lambda}x^\lambda x_\nu+\epsilon_{bca}\eta_{b\mu\lambda}\eta_{c\nu\kappa}x^\lambda x^\kappa$. Put $t=x^4$, write $x_a=x^a$ for spatial indices, and set $|\vec x|^2=\sum_{k=1}^3(x^k)^2$. For $\mu=i,\nu=4$, expanding the symbols gives $Q_{ai4}=x_ax_i+t(\epsilon_{aik}x_k+\delta_{ai}t)-\epsilon_{bka}(\epsilon_{bil}x_l+\delta_{bi}t)x_k$. The contraction $\sum_b\epsilon_{bka}\epsilon_{bil}=\delta_{ki}\delta_{al}-\delta_{kl}\delta_{ai}$ makes the $x_ax_i$ terms cancel, and $\epsilon_{ika}=\epsilon_{aik}$ cancels the terms linear in $t$; hence $Q_{ai4}=(|\vec x|^2+t^2)\delta_{ai}=r^2\eta_{ai4}$. For distinct spatial $i,j$, expansion gives the derivative terms $-\epsilon_{ajl}x_lx_i-\delta_{aj}tx_i+\epsilon_{ail}x_lx_j+\delta_{ai}tx_j$. The terms in the bracket product linear in $t$ equal $t(-\delta_{ai}x_j+\delta_{aj}x_i)$, so they cancel those derivative terms. Contracting the two spatial epsilon factors by $\sum_b\epsilon_{bca}\epsilon_{bil}=\delta_{ci}\delta_{al}-\delta_{cl}\delta_{ai}$ leaves $R_{aij}=\epsilon_{ijm}x_ax_m-\epsilon_{ajl}x_lx_i+\epsilon_{ail}x_lx_j$, and the two-index-$4$ term is $t^2\epsilon_{aij}$. Let $k$ be the remaining spatial index and $\varepsilon=\epsilon_{ijk}$. If $a=i$, the first two terms of $R$ are $\varepsilon x_ix_k-\varepsilon x_kx_i=0$; if $a=j$, they are $\varepsilon x_jx_k-\varepsilon x_kx_j=0$; if $a=k$, all three terms sum to $\varepsilon(x_i^2+x_j^2+x_k^2)$. Thus $R_{aij}=\epsilon_{aij}|\vec x|^2$ and $Q_{aij}=r^2\eta_{aij}$. These are all independent antisymmetric index pairs, so $F^a_{N,\mu\nu}=-4\rho^2\eta_{a\mu\nu}/(r^2+\rho^2)^2$. The two-forms $\eta_1=dx^{14}+dx^{23}$, $\eta_2=dx^{24}+dx^{31}$, and $\eta_3=dx^{34}+dx^{12}$ are self-dual in the chosen Euclidean orientation because the Euclidean Hodge star interchanges the two displayed summands in each. Write $g_X=\Omega(x)^2\delta$ on the north chart, where $\Omega(x)=2/(1+r^2)>0$ and $\delta=\sum_\mu (dx^\mu)^2$. At each point, the induced inner product on two-forms scales by $\Omega^{-4}$ while the oriented volume form scales by $\Omega^4$. Thus $\langle\alpha,\beta\rangle_{g_X}\,d\operatorname{vol}_{g_X}=\langle\alpha,\beta\rangle_\delta\,d^4x$ for all two-forms $\alpha,\beta$ there. The defining wedge identity and nondegeneracy of the wedge pairing imply $*_{g_X}=*_\delta$ on two-forms pointwise. Hence $F_N=*_{g_X}F_N$. [given, F4, F8, step 2.1, algebra]

4.1 The trace form gives $B(T_a,T_b)=\tfrac12\delta_{ab}$ and the defining symbols satisfy $\sum_{a,\mu,\nu}\eta_{a\mu\nu}^2=12$. Since $F_N=\tfrac12F_{N,\mu\nu}dx^\mu\wedge dx^\nu$, the local action density is $B(F_N\wedge *_{g_X}F_N)=48\rho^4(r^2+\rho^2)^{-4}d^4x$. The radial substitution $t=r^2/\rho^2$ gives $\int_{\mathbb R^4}\rho^4(r^2+\rho^2)^{-4}d^4x=2\pi^2\cdot\tfrac12\int_0^\infty t(1+t)^{-4}dt=\pi^2/6$: with $v=1+t$, $\int_0^\infty t(1+t)^{-4}dt=\int_1^\infty(v^{-3}-v^{-4})dv=[-1/(2v^2)+1/(3v^3)]_1^\infty=1/2-1/3=1/6$. Hence $\int_{S^4}B(F\wedge *_{g_X}F)=8\pi^2$; the omitted stereographic point has measure zero and the patched curvature is smooth. Self-duality gives $B(F\wedge F)=B(F\wedge *_{g_X}F)$, so $q_B=1$. The action is $S_B=8\pi^2/g^2$, finite and equal to the bound in [F5]. The definition and bound interfaces invoked in [F5] both assume full AC [A1]. [given, A1, F5, F8, step 1.1, step 3.1, algebra] ∎

## Remarks
The square records the change of local connection form across the overlap and its induced curvature change. Step 2.1 verifies the top arrow, and step 3.1 verifies the curvature calculation; the proof does not rely on the diagram.
```tikzcd
\begin{tikzcd}[column sep=14em, row sep=6em]
\Omega^1(U_N\cap U_S,\mathfrak{su}(2)) \arrow[r,"{A\mapsto\mathrm{Ad}_uA+u\,d(u^{-1})}"] \arrow[d,"{A\mapsto dA+\frac{1}{2}[A\wedge A]}"'] & \Omega^1(U_N\cap U_S,\mathfrak{su}(2)) \arrow[d,"{A\mapsto dA+\frac{1}{2}[A\wedge A]}"] \\
\Omega^2(U_N\cap U_S,\mathfrak{su}(2)) \arrow[r,"{F\mapsto\mathrm{Ad}_uF}"'] & \Omega^2(U_N\cap U_S,\mathfrak{su}(2))
\end{tikzcd}
```
