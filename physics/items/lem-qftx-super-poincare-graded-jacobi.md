---
id: lem-qftx-super-poincare-graded-jacobi
kind: lemma
title: Graded Jacobi and real-form verification for the extended super-Poincare algebra
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps: [def-qftx-super-poincare-algebra-4d, thm-complex-numbers-form-a-field, def-complex-conjugate-real-imaginary-part-and-modulus]
dependency_roles:
  def-qftx-super-poincare-algebra-4d: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§3.1, printed pp. 18–21, N=1 algebra derivation; the N-extended real-form and Jacobi checks below are local."
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§§3.2–3.3, printed pp. 62–73, signed grading, super-Jacobi and extended brackets; the local convention bridge is checked here."
verification:
  precheck: pending
---

## Statement

For $N\ge1$, take $S=\mathbb C^2$, $\dot S=\overline S$, $\mathfrak l=\mathfrak{sl}(S)\oplus\mathfrak{sl}(\dot S)$, $V=S\otimes\dot S$, $C_N=\Lambda^2\mathbb C^N\oplus\overline{\Lambda^2\mathbb C^N}$, even part $\mathfrak g_{\bar0}=\mathfrak l\oplus V\oplus C_N$, and odd part $\mathfrak g_{\bar1}=(S\otimes\mathbb C^N)\oplus(\dot S\otimes(\mathbb C^N)^*)$. Give $\mathfrak l$ its componentwise matrix commutator, its tensor action on $V$, and its fundamental actions on the two odd summands; let $C_N$ be central, $V$ abelian and trivial on the odd part. With $\epsilon_{12}=\epsilon_{\dot1\dot2}=1$, the odd brackets are $\{Q^I_\alpha,\bar Q_{\dot\beta J}\}=-2\delta^I{}_J T_{\alpha\dot\beta}$, $\{Q^I_\alpha,Q^J_\beta\}=2\epsilon_{\alpha\beta}Z^{IJ}$, and $\{\bar Q_{\dot\alpha I},\bar Q_{\dot\beta J}\}=2\epsilon_{\dot\alpha\dot\beta}\bar Z_{IJ}$, with $Z^{IJ}=-Z^{JI}$ and all omitted brackets zero. Then this bracket is degree-preserving, graded-skew and satisfies the super-Jacobi identity. The conjugate-linear operation $(A,B)^*=(-\overline B,-\overline A)$, $Q^*=\bar Q$, $\bar Q^*=Q$, $T_{\alpha\dot\beta}^*=T_{\beta\dot\alpha}$, $(Z^{IJ})^*=\bar Z_{IJ}$ and $(\bar Z_{IJ})^*=Z^{IJ}$ is an involution satisfying $[x,y]^*=-(-1)^{|x||y|}[x^*,y^*]$. Consequently $\tau(x)=-x^*$ on even elements and $\tau(x)=i x^*$ on odd elements is an involutive conjugate-linear automorphism, and its fixed space is a real Lie superalgebra. For $\eta=\operatorname{diag}(-1,1,1,1)$, $\sigma^0=I_2$, $\sigma^j$ the Pauli matrices, and $\bar\sigma^0=I_2$, $\bar\sigma^j=-\sigma^j$, one has $\sigma^\mu\bar\sigma^\nu+\sigma^\nu\bar\sigma^\mu=-2\eta^{\mu\nu}I_2$ and $\det(\sigma^\mu p_\mu)=-\eta^{\mu\nu}p_\mu p_\nu$.

## Statement references

[Martin, §3.1](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §§3.2–3.3](https://arxiv.org/pdf/hep-th/0108200).

## Facts & Assumptions

**Given:** An integer $N\ge1$, the finite-dimensional graded spaces, bracket table, adjoint operation and Pauli matrices specified above.

[F1] [[def-qftx-super-poincare-algebra-4d]]: $\mathfrak g_{\bar0}=\mathfrak l\oplus V\oplus C_N$, $\mathfrak g_{\bar1}=(S\otimes\mathbb C^N)\oplus(\dot S\otimes(\mathbb C^N)^*)$; $\mathfrak l$ acts by matrix commutator, tensor action and the fundamental actions; $V$ and $C_N$ are abelian, $C_N$ is central, and $V$ acts trivially on the odd part; the three odd brackets and the star operation are exactly those in the Statement.

[F2] [[thm-complex-numbers-form-a-field]]: $\mathbb C$ is a field with the coordinate addition and multiplication displayed in its Statement.

[F3] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: if $z=a+bi$ then $\overline z=a-bi$; conjugation is conjugate-linear and involutive.

## Proof


**Given:** The finite-dimensional graded space and operations in [F1], with the scalar field and conjugation in [F2]–[F3].

1.1 The matrix commutators are antisymmetric and the odd-odd brackets are symmetric under interchange of the full generator labels: for the same-chirality bracket, $\epsilon_{\beta\alpha}Z^{JI}=(-\epsilon_{\alpha\beta})(-Z^{IJ})=\epsilon_{\alpha\beta}Z^{IJ}$, and the dotted case is identical. The mixed bracket is symmetric by its Kronecker delta and the graded-skew rule. Each listed bracket has parity equal to the sum of its input parities, so the bracket is degree-preserving and graded-skew. [F1, algebra]

1.2 For matrices $X,Y,Z$, both $X(YZ-ZY)-(YZ-ZY)X$ and $(XY-YX)Z-Z(XY-YX)+Y(XZ-ZX)-(XZ-ZX)Y$ expand to $XYZ-XZY-YZX+ZYX$, so the commutator on $\mathfrak l$ satisfies Jacobi. Write $\rho_V(A,B)=A\otimes I+I\otimes B$. Operators acting on different tensor factors commute, hence $[\rho_V(A,B),\rho_V(A',B')]=[A,A']\otimes I+I\otimes[B,B']=\rho_V([(A,B),(A',B')])$. The two fundamental odd actions are representations by the same matrix-commutator identity, and the actions on $C_N$ and by $V$ are zero. Thus $\mathfrak l$ acts by representations on the abelian space $V\oplus C_N$ and on $\mathfrak g_{\bar1}$; expanding the even Jacobi identity leaves precisely these representation identities, while brackets internal to $V\oplus C_N$ vanish. [F1, F2, algebra]

2.1 For two even inputs and one odd input, the Jacobi expression is $[\rho(L),\rho(L')]q-\rho([L,L'])q$, which is zero by the fundamental-action identities in [F1]; if either even input lies in $V\oplus C_N$, its odd action is zero and the same expression vanishes. This checks all orderings of the two-even/one-odd case by graded skew-symmetry. [F1, step 1.2]

2.2 For one even input $L=(A,B)$ and two odd inputs, Jacobi is equivariance of their odd bracket. On a mixed pair, the two fundamental actions on $Q$ and $\bar Q$ give exactly $A\otimes I+I\otimes B$ on $T$, so the mixed bracket is equivariant. On an equal-chirality pair, writing $A=\begin{pmatrix}a&b\\c&-a\end{pmatrix}$ gives $A^{\mathsf T}\epsilon+\epsilon A=0$ by direct multiplication; the identical calculation for $B$ preserves the dotted alternating form. The flavor tensors $Z^{IJ}$ and $\bar Z_{IJ}$ are Lorentz scalars, so both central brackets are equivariant. Even inputs from $V\oplus C_N$ act trivially on each side. [F1, step 1.2, algebra]

2.3 The given star squares to the identity on each generator. On the matrix-commutator bracket, entrywise conjugation preserves matrix multiplication and the minus signs in $(A,B)^*$ reverse the bracket; on the fundamental and tensor actions, star exchanges the two spinor factors and the corresponding minus sign gives $[x,y]^*=-[x^*,y^*]$. On odd-odd brackets, star exchanges $Q$ with $\bar Q$, transposes the bispinor indices of $T$, and exchanges $Z$ with $\bar Z$; the real alternating-form coefficients and antisymmetric flavor labels give $[x,y]^*=[x^*,y^*]$, as required for two odd inputs. Zero brackets remain zero. For homogeneous even-even, even-odd and odd-odd inputs, substituting these identities into $\tau=-*$, $i*$ and $-*$ respectively gives $\tau([x,y])=[\tau x,\tau y]$; conjugate-linearity gives $\tau^2=I$. Therefore the fixed space is closed under the bracket. Every $x$ decomposes as $x_+ + i x_-$ with $x_+=(x+\tau x)/2$ and $x_-=(x-\tau x)/(2i)$ fixed by $\tau$, so this fixed real algebra complexifies to the displayed graded algebra. [F1, F3, step 1.1, step 1.2]

3.1 For three odd inputs, each inner bracket lies in $V\oplus C_N$. Both summands act trivially on the odd space, so each of the three terms in the odd-odd-odd super-Jacobi identity is zero. The four parity patterns checked in the preceding cases exhaust homogeneous triples, and multilinearity gives the identity for arbitrary triples. [F1, step 2.1, step 2.2]

4.1 The Pauli matrices satisfy $\sigma_i\sigma_j+\sigma_j\sigma_i=2\delta_{ij}I_2$ and $\operatorname{tr}(\sigma_i)=0$. For $\mu=\nu=0$ the sigma identity is $2I_2=-2\eta^{00}I_2$; for one temporal and one spatial index the two terms cancel; for spatial $i,j$ their sum is $-(\sigma_i\sigma_j+\sigma_j\sigma_i)=-2\delta_{ij}I_2$. Also $(p_0I_2+p_i\sigma_i)^2=(p_0^2+|\vec p|^2)I_2+2p_0p_i\sigma_i$ and direct $2\times2$ determinant expansion gives $\det(p_0I_2+p_i\sigma_i)=p_0^2-|\vec p|^2=-\eta^{\mu\nu}p_\mu p_\nu$. [F1, F2, step 1.1] ∎
## Remarks

The lemma verifies a algebraic construction. It proves neither the existence of an interacting quantum field theory nor the existence, stability or empirical observation of a supersymmetric particle state.
