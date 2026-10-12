---
id: lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action
aliases: [nrqm-angular-momentum-su2-lift]
kind: lemma
domain: mathematics
title: "The SU(2) lift of the spatial rotation action on the component-valued wave-function space and its coordinate generators"
status: draft
origin: session
dependency_level: 7
deps: [def-axiom-of-choice, def-bounded-linear-operator, def-cm-quaternion-rotation-map-and-cover, def-cm-special-orthogonal-group, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-covering-homomorphism-of-lie-groups, def-cross-product-in-r3, def-hilbert-space, def-infinitesimal-generator-of-a-unitary-group, def-inner-product-space, def-l-p-space-as-a-quotient-by-null-functions, def-linear-isometry-and-orthogonal-or-unitary-operator, def-nrqm-uncertainty-strong-spectral-commutation, def-operator-norm, def-quaternions, def-self-adjoint-positive-unitary-and-normal-operator, def-strongly-continuous-one-parameter-unitary-group, def-strongly-continuous-unitary-representation, def-symmetric-self-adjoint-and-essentially-self-adjoint, ex-su-two-to-so-three-as-a-covering-homomorphism, lem-cm-cross-product-triple-identity, lem-nrqm-angular-momentum-product-flow-generator, lem-nrqm-kinematics-componentwise-position-and-momentum, lem-nrqm-symmetries-rotation-generators-on-schwartz-classes, lem-nrqm-symmetries-spatial-rotation-action, lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus, lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, prop-nrqm-orbital-and-spin-finite-spin-matrices, thm-bounded-borel-pvm-integral, thm-nrqm-orbital-and-spin-symmetric-power-su2-representation, thm-stone-one-parameter-unitary-groups]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-covering-homomorphism-of-lie-groups: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-infinitesimal-generator-of-a-unitary-group: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-linear-isometry-and-orthogonal-or-unitary-operator: mathematical-premise
  def-nrqm-uncertainty-strong-spectral-commutation: mathematical-premise
  def-operator-norm: mathematical-premise
  def-quaternions: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-strongly-continuous-unitary-representation: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  ex-su-two-to-so-three-as-a-covering-homomorphism: mathematical-premise
  lem-cm-cross-product-triple-identity: mathematical-premise
  lem-nrqm-angular-momentum-product-flow-generator: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-symmetries-rotation-generators-on-schwartz-classes: mathematical-premise
  lem-nrqm-symmetries-spatial-rotation-action: mathematical-premise
  lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus: mathematical-premise
  lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-nrqm-orbital-and-spin-symmetric-power-su2-representation: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 7.2-7.4, printed pages 145-164 (PDF pages 153-172): orbital generators and spherical harmonics, spin as an intrinsic representation, the rotation of spinors and the spin rotation operators"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', Section 2, printed pages 11-18 (the algebraic theory of angular momentum: ladder operators, multiplets and the spin representations) and Chapter 10 'Addition of Angular Momentum', Sections 1-2, printed pages 1-7 (tensor-lifted addition of angular momenta)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 8.2, printed pages 175-178 (PDF pages 187-190): angular momentum, the rotation group generated by the orbital angular momentum operators and the simultaneous eigenbasis theorem"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]), the choice hypotheses of
the cited spectral suppliers. Fix $\hbar>0$ and $s\in\{0,\tfrac12,1,\tfrac32,\dots\}$, put
$r:=2s+1$, and let
$H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{r})$ with inner product linear in the
first argument
([[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-complex-lp-and-euclidean-test-function-conventions]],
[[def-hilbert-space]], [[def-inner-product-space]]). Let $SO(3)$ be the
special orthogonal group ([[def-cm-special-orthogonal-group]]), let
$U(R)$ for $R\in SO(3)$ be the componentwise spatial rotation action
$$(U(R)f)_{l}(x):=f_{l}(R^{-1}x)\qquad(l=1,\dots,r)$$
of [[lem-nrqm-symmetries-spatial-rotation-action]], and let
$\rho_0:SU(2)\to SO(3)$ be the quaternion conjugation cover of
[[ex-su-two-to-so-three-as-a-covering-homomorphism]], using the matrix identification
$$a+bi+cj+dk\longmapsto\begin{pmatrix}a+bi&c+di\\-c+di&a-bi\end{pmatrix}$$
and the imaginary basis $(i,j,k)$ of [[def-cm-quaternion-rotation-map-and-cover]].
For the physical coordinate axes used by the Pauli matrices fix
$$C:=\begin{pmatrix}0&0&-1\\0&-1&0\\-1&0&0\end{pmatrix}\in SO(3),\qquad \rho(W):=C^{-1}\rho_0(W)C.$$
Thus $\rho$ is the same two-sheeted cover transported to the axes
$(Ce_1,Ce_2,Ce_3)=(-e_3,-e_2,-e_1)$; it is not the literal matrix $\rho_0$ in the imaginary basis. It is smooth by
[[def-covering-homomorphism-of-lie-groups]]. Let
$F_{s}:\mathcal S_{2s}\to V_{s}=\mathbb C^{r}$ be the unitary identification
$v_{k}\mapsto e_{s-k}$ of
[[thm-nrqm-orbital-and-spin-symmetric-power-su2-representation]] clause
(d) (for $s=0$, $\mathcal S_{0}=\mathbb C v_{0}$ and $F_{0}v_{0}:=1$),
define $D_{s}:SU(2)\to U(V_{s})$ by
$D_{s}(W):=F_{s}U_{2s}(W)F_{s}^{-1}$ for $s>0$ and
$D_{0}(W):=I_{\mathbb C}$, and let $S_{i}=\hbar J_{i}$ be the self-adjoint
spin endomorphisms of $V_{s}$ of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (a). By clauses
(b),(d),(f) of the theorem the maps $D_{s}$ are strongly continuous unitary
representations of $SU(2)$.
For $W\in SU(2)$ define the matrix action $M_{s}(W)\in\mathcal B(H_{s})$ and
the lifted operator $U_{s}(W)$ by
$$(M_{s}(W)f)(x):=D_{s}(W)\bigl(f(x)\bigr),\qquad U_{s}(W):=U(\rho(W))\,M_{s}(W)\qquad(f\in H_{s},\ x\in\mathbb R^{3}),$$
where the matrix $D_{s}(W)$ acts on the column vector $f(x)\in\mathbb C^{r}$.
Finally let $R_{i}(t)$, $i=1,2,3$, be the coordinate rotation matrices and
$L_{i}$ the self-adjoint coordinate-rotation generators on $H_{s}$ of
[[lem-nrqm-symmetries-rotation-generators-on-schwartz-classes]] (so that
$U(R_{i}(t))=e^{-itL_{i}/\hbar}$), and put
$A_{i}(t):=\cos(t/2)I_{2}-i\sin(t/2)\sigma_{i}\in SU(2)$ with the Pauli
matrices $\sigma_{i}$ of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e). Then:

(a) for every $W\in SU(2)$ the operator $U_{s}(W)$ is unitary, with
$U_{s}(I)=\mathrm{id}$ and $U_{s}(W_{1}W_{2})=U_{s}(W_{1})U_{s}(W_{2})$ for
all $W_{1},W_{2}\in SU(2)$, and $W\mapsto U_{s}(W)$ is strongly continuous
([[def-strongly-continuous-unitary-representation]]);

(b) $\rho(A_{i}(t))=R_{i}(t)$ for every $t\in\mathbb R$ and every $i$, and
$t\mapsto U_{s}(A_{i}(t))$ is a strongly continuous one-parameter unitary
group ([[def-strongly-continuous-one-parameter-unitary-group]]);

(c) the operators $L_{i}$ and $S_{i}$ strongly commute (their spectral
projection-valued measures commute;
[[def-self-adjoint-positive-unitary-and-normal-operator]],
[[thm-bounded-borel-pvm-integral]]), the sum $J_{i}:=L_{i}+S_{i}$ with
domain $D(J_{i}):=D(L_{i})$ is self-adjoint, and
$$U_{s}(A_{i}(t))=e^{-itJ_{i}/\hbar}\qquad(t\in\mathbb R);$$
moreover for $W\in SU(2)$ one has the conjugation identities including
domains
$$U_{s}(W)Q_{j}U_{s}(W)^{-1}=\sum_{l=1}^{3}\rho(W)_{lj}Q_{l},\qquad U_{s}(W)P_{k}U_{s}(W)^{-1}=\sum_{l=1}^{3}\rho(W)_{lk}P_{l},$$
where $Q_{j},P_{k}$ are the componentwise position and momentum operators of
[[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a) and
$\rho(W)_{lj}$ are the matrix entries of the transported cover in the standard basis; the sums mean the maximal directional realizations $Q(\rho(W)e_j)$ and $P(\rho(W)e_k)$ of [[lem-nrqm-symmetries-spatial-rotation-action]] clause (b), with domains $U_s(W)D(Q_j)$ and $U_s(W)D(P_k)$;

(d) **Scope.** The statement is a mathematical statement about the
finite-dimensional spin representation and the componentwise rotation action;
it asserts no physical interpretation, no measurement, no dynamics and no
value of $\hbar$, $s$ or $W$. The spatial action enters only through
$U(R)=U(\rho(W))$ and the internal action only through $M_{s}(W)$; no action
on a second spatial or internal factor is introduced.

## Facts & Assumptions

**Given:** the Axiom of Countable Choice and the Axiom of Choice; the spin
label $s$, $r=2s+1$, the space $H_{s}$; the rotation action $U(R)$ and the
covering homomorphism $\rho$; the identification $F_{s}$ and the
representation $D_{s}=F_{s}U_{2s}F_{s}^{-1}$ with spin operators
$S_{i}=\hbar J_{i}$; the operators $M_{s}(W)$ and $U_{s}(W)$; the coordinate
rotations $R_{i}(t)$, $A_{i}(t)$ and the generators $L_{i}$; $W,W_{1},W_{2}\in
SU(2)$, real $s_{0},t$ (use $u$ for the group parameter where it is not the
spin label).

[F1] **The covering and its axes.** The quaternion cover $\rho_0$ is a smooth surjective two-sheeted covering homomorphism with kernel $\{I_2,-I_2\}$. The displayed $C$ satisfies $C^TC=I$, $C^{-1}=C$ and $\det C=1$. Conjugation $R\mapsto C^{-1}RC$ is a smooth automorphism of $SO(3)$ with smooth inverse, so $\rho=C^{-1}\rho_0C$ has the same covering, continuity, surjectivity, multiplicativity and kernel properties. The canonical matrix identification and quaternion conjugation formula are those of [[ex-su-two-to-so-three-as-a-covering-homomorphism]], [[def-cm-quaternion-rotation-map-and-cover]] and [[def-quaternions]].

[F2] **Spatial rotation action.** $U(R)$ is a unitary operator for every $R$
with $U(I)=\mathrm{id}$, $U(RS)=U(R)U(S)$ and $U(R)^{-1}=U(R^{-1})$; the map
$R\mapsto U(R)$ is strongly continuous on $SO(3)$; and
$U(R)Q_{j}U(R)^{-1}=Q(Re_j)=\sum_{l}R_{lj}Q_{l}$,
$U(R)P_{k}U(R)^{-1}=P(Re_k)=\sum_{l}R_{lk}P_{l}$ as
operator identities on the maximal directional domains defined by
[[lem-nrqm-symmetries-spatial-rotation-action]] clause (b). Explicitly,
$Q(a)$ is multiplication by $a\cdot x$ on its maximal domain
$D(Q(a))=\{f\in H_s:(a\cdot x)f\in H_s\}$, and
$P(a)=(U^{(r)})^{-1}M_{a\cdot p}U^{(r)}$ on its maximal domain
$D(P(a))=\{f\in H_s:(a\cdot p)U^{(r)}f\in L^{2}(\mathbb R^{3};\mathbb C^{r})\}$,
where $U^{(r)}$ is the normalized Fourier unitary and $M_{a\cdot p}$ is
maximal multiplication by $a\cdot p$ from that clause. In particular the
conjugate domains are $U(R)D(Q_j)=D(Q(Re_j))$ and
$U(R)D(P_k)=D(P(Re_k))$, not necessarily the original individual coordinate
domains (clauses (a),(b)).

[F3] **Coordinate rotation generators.** For each $i$, $U_{i}(t):=U(R_{i}(t))$
is a strongly continuous one-parameter unitary group with
$U_{i}(t)=e^{-itL_{i}/\hbar}$ for the self-adjoint generator $L_{i}$, and for
$\psi\in\mathcal S^{(r)}$ one has
$L_{i}\psi=-i\hbar\sum_{j}(e_{i}\times x)_{j}D_{j}\psi
=\sum_{j,k}\varepsilon_{ijk}Q_{j}P_{k}\psi$
([[lem-nrqm-symmetries-rotation-generators-on-schwartz-classes]] clauses
(a),(b), [[lem-nrqm-kinematics-componentwise-position-and-momentum]]).

[F4] **Internal representation.** For $s>0$, $n=2s$ and
$F_{s}:\mathcal S_{n}\to V_{s}$ the unitary identification $v_{k}\mapsto
e_{s-k}$ of
[[thm-nrqm-orbital-and-spin-symmetric-power-su2-representation]] clause (d),
$D_{s}(W)=F_{s}U_{n}(W)F_{s}^{-1}$ with $U_{n}(W)=W^{\otimes n}|_{\mathcal
S_{n}}$ defines a group homomorphism $SU(2)\to U(V_{s})$ that is continuous
in operator norm; for $s=0$, $D_{0}(W)=I_{\mathbb C}$; and $S_{i}=\hbar J_{i}$
are the self-adjoint matrices of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] with
$[S_{i},S_{j}]=i\hbar\sum_{k}\varepsilon_{ijk}S_{k}$ and
$S^{2}=\hbar^{2}s(s+1)I$
([[thm-nrqm-orbital-and-spin-symmetric-power-su2-representation]]
clauses (b),(c),(d),(f),
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clauses (a),(b),(c)).

[F5] **Internal coordinate generator.** For every $i$ the curve
$t\mapsto A_{i}(t)$ lies in $SU(2)$, satisfies $A_{i}(s_{0})A_{i}(t)=A_{i}(s_{0}+t)$
and $A_{i}(0)=I_{2}$, and the family $t\mapsto D_{s}(A_{i}(t))$ has
infinitesimal generator $-iJ_{i}$: for every $v\in V_{s}$,
$\frac1t\bigl(D_{s}(A_{i}(t))v-v\bigr)\to-iJ_{i}v$
([[thm-nrqm-orbital-and-spin-symmetric-power-su2-representation]]
clauses (d),(e), [[thm-stone-one-parameter-unitary-groups]],
[[def-infinitesimal-generator-of-a-unitary-group]],
[[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]).

[F6] **Matrix actions commute with componentwise operators.** For a fixed
matrix $T\in\operatorname{End}(\mathbb C^{r})$, define
$(M_{T}f)(x):=Tf(x)$. This is a bounded operator on $H_s$ because
$\|Tf(x)\|\le\|T\|\,\|f(x)\|$ pointwise; it commutes with $U(R)$ because
$T f(R^{-1}x)=(Tf)(R^{-1}x)$, and it commutes with $Q_j$ and $P_k$ and
preserves their domains because those operators act componentwise by scalar
multiplication and weak differentiation, respectively. For $W\in SU(2)$,
$M_s(W)=M_{D_s(W)}$ is unitary since $D_s(W)$ is unitary. These identities
follow from the componentwise definitions
([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a),
[[def-bounded-linear-operator]],
[[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

[F7] **Commutation with a flow.** If a bounded $S\in\mathcal B(H)$ commutes
with every element $e^{iuT}$ of the flow of a self-adjoint $T$, then $S$
commutes with every spectral projection $E_{T}(\Lambda)$
([[lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus]]
clause (c)).

[F8] **Calculus of a strongly commuting pair.** If the self-adjoint operators
$A$ and $B$ have commuting spectral projection-valued measures, then
$f(B)g(A)=g(A)f(B)$ for all bounded Borel $f,g$
([[lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators]]
clause (a), [[def-nrqm-uncertainty-strong-spectral-commutation]] clause (b)).

[F9] **Product flow.** If $A$ is self-adjoint and $B$ is bounded self-adjoint
with $Be^{iuA}=e^{iuA}B$ for all real $u$, then $A+B$ with domain $D(A)$ is
self-adjoint and $e^{iu(A+B)}=e^{iuA}e^{iuB}$ for all $u$
([[lem-nrqm-angular-momentum-product-flow-generator]] clauses (a),(c)).

## Proof

**Proof technique:** direct; verify unitarity and multiplicativity from the
matrix action, compute the quaternion image of the coordinate subgroups,
transport the commutation of the internal matrices with the spatial flow into
strong spectral commutation, and identify the coordinate generators through
the product-flow lemma and Stone's theorem.

**Given:** The data of the statement and [F1]-[F9].

1.1 [Unitary and representation law] Let $W\in SU(2)$; the fibrewise matrix action $M_{s}(W)$ is well defined on almost-everywhere classes, linear, and isometric because $\|D_{s}(W)f(x)\|_{\mathbb C^{r}}=\|f(x)\|_{\mathbb C^{r}}$ for almost every $x$ with $D_{s}(W)$ unitary, so $\|M_{s}(W)f\|=\|f\|$ and $M_{s}(W)$ extends to a unitary operator with inverse $M_{s}(W^{-1})$, and $M_{s}(W_{1})M_{s}(W_{2})=M_{s}(W_{1}W_{2})$ again componentwise; $U(\rho(W))$ is unitary by [F2], so $U_{s}(W)$ is unitary with $U_{s}(I)=U(I)M_{s}(I)=\mathrm{id}$. Using [F6] to move $M_{s}(W_{1})$ across $U(\rho(W_{2}))$ and the multiplicativity $\rho(W_{1}W_{2})=\rho(W_{1})\rho(W_{2})$ of [F1] together with $D_{s}(W_{1}W_{2})=D_{s}(W_{1})D_{s}(W_{2})$, one gets $U_{s}(W_{1})U_{s}(W_{2})=U(\rho(W_{1}))U(\rho(W_{2}))M_{s}(W_{1})M_{s}(W_{2})=U_{s}(W_{1}W_{2})$. [F1, F2, F4, F6, algebra]

1.2 [Coordinate rotations under the transported cover] Put $c=\cos(t/2)$ and $d=\sin(t/2)$. In the canonical matrix identification of [F1], the matrices $A_1(t),A_2(t),A_3(t)$ correspond respectively to $c-dk,c-dj,c-di$, hence uniformly to $q=c+d\varphi(Ce_i)$. For a unit axis $r$ and $v=\alpha r+w$ with $w\perp r$, quaternion multiplication $uv=-u\cdot v+u\times v$ gives
$$ (c+dr)v(c-dr)=(c^2+d^2)\alpha r+(c^2-d^2)w+2cd(r\times w)=\alpha r+\cos t\,w+\sin t\,(r\times w). $$
Use $r=\varphi(Ce_i)$ and identify vectors through $\varphi$. Since $C\in SO(3)$, it preserves inner products and satisfies $(Cu)\times(Cv)=C(u\times v)$ (the determinant definition of the cross product); conjugating this Rodrigues formula by $C$ gives precisely the rotation about $e_i$ through $t$. Therefore $\rho_0(A_i(t))=CR_i(t)C^{-1}$ and $\rho(A_i(t))=R_i(t)$, with exactly the coordinate convention of [F3]. [F1, F3, given, algebra]

1.3 [Strong commutation of the spatial generators with internal projections] Let $P$ be a spectral projection of the self-adjoint matrix $S_{i}$ and let $M$ be the bounded self-adjoint fibrewise matrix action $(Mf)(x):=Pf(x)$; by [F6] the operator $M$ commutes with $U(R_{i}(u))=e^{-iuL_{i}/\hbar}$ for every $u$, so by [F7] applied to the self-adjoint operator $L_{i}$ and the bounded $M$ one has $ME_{L_{i}}(\Lambda)=E_{L_{i}}(\Lambda)M$ for every Borel $\Lambda$; taking for $P$ every spectral projection $E_{S_{i}}(\Sigma)$ of the finite matrix $S_{i}$ gives $E_{L_{i}}(\Lambda)E_{S_{i}}(\Sigma)=E_{S_{i}}(\Sigma)E_{L_{i}}(\Lambda)$ for all Borel $\Lambda,\Sigma$, which is the strong commutation of $L_{i}$ and $S_{i}$ in the sense of [F8]. [F4, F6, F7, algebra]

1.4 [Internal coordinate generator] By [F5] the family $t\mapsto D_{s}(A_{i}(t))$ is a strongly continuous one-parameter unitary group on $V_{s}$ with infinitesimal generator $-iJ_{i}$; the family $t\mapsto e^{-itS_{i}/\hbar}$ is by [F4] and the spectral calculus a strongly continuous one-parameter unitary group whose quotient at $v$ is $-iS_{i}v/\hbar=-iJ_{i}v$, so by Stone's theorem the two groups agree: $D_{s}(A_{i}(t))=e^{-itS_{i}/\hbar}$ for every $t$. [F4, F5, algebra]

1.5 [Strong continuity of the lift] Let $W_{m}\to W$ in $SU(2)$ and $f\in H_{s}$; since $\rho$ is continuous by [F1], $\rho(W_{m})\to\rho(W)$ and [F2] gives $\|U(\rho(W_{m}))g-U(\rho(W))g\|\to0$ for every fixed $g$; since $\|D_{s}(W_{m})-D_{s}(W)\|\to0$ in operator norm by [F4], $\|M_{s}(W_{m})f-M_{s}(W)f\|\le\|D_{s}(W_{m})-D_{s}(W)\|\,\|f\|$ tends to $0$; combining, $\|U_{s}(W_{m})f-U_{s}(W)f\|\le\|U(\rho(W_{m}))(M_{s}(W_{m})f-M_{s}(W)f)\|+\|U(\rho(W_{m}))M_{s}(W)f-U(\rho(W))M_{s}(W)f\|\to0$, so $W\mapsto U_{s}(W)$ is strongly continuous. [F1, F2, F4, algebra]

2.1 [Conjugations of position and momentum] By [F6] the matrix action $M_s(W)$ commutes with $Q_j$ and $P_k$ and preserves their maximal coordinate domains, so the operator domains of the conjugates by $U_s(W)=U(\rho(W))M_s(W)$ are $U_s(W)D(Q_j)=U(\rho(W))D(Q_j)=D(Q(\rho(W)e_j))$ and $U_s(W)D(P_k)=U(\rho(W))D(P_k)=D(P(\rho(W)e_k))$, where the last equalities are [F2]. On these domains [F2] gives $U_s(W)Q_jU_s(W)^{-1}=Q(\rho(W)e_j)=\sum_l\rho(W)_{lj}Q_l$ and $U_s(W)P_kU_s(W)^{-1}=P(\rho(W)e_k)=\sum_l\rho(W)_{lk}P_l$, with both sums understood as the displayed maximal directional realizations. This proves the conjugation identities of (c). [step 1.1, F2, F6, algebra]

2.2 [Self-adjoint sum and product flow] By step 1.3 the spectral measures of $L_{i}$ and $S_{i}$ commute, so [F8] with $f(\mu)=e^{-i\mu t/\hbar}$, $g(\lambda)=e^{-i\lambda u/\hbar}$ gives $e^{-itS_{i}/\hbar}e^{-iuL_{i}/\hbar}=e^{-iuL_{i}/\hbar}e^{-itS_{i}/\hbar}$ for all $t,u$; hence [F9] applies with $A:=L_{i}$ and the bounded self-adjoint $B:=S_{i}$, so the sum $J_{i}=L_{i}+S_{i}$ with domain $D(L_{i})$ is self-adjoint and $e^{-itJ_{i}/\hbar}=e^{-itL_{i}/\hbar}e^{-itS_{i}/\hbar}$ for every $t$. [step 1.3, F4, F8, F9, algebra]

3.1 [Coordinate subgroup generator] Let $t$ be real; by step 1.2, $\rho(A_{i}(t))=R_{i}(t)$, so by [F3] and step 1.4 $U_{s}(A_{i}(t))=U(R_{i}(t))M_{s}(A_{i}(t))=e^{-itL_{i}/\hbar}e^{-itS_{i}/\hbar}=e^{-itJ_{i}/\hbar}$ by step 2.2; since the right-hand side is a strongly continuous one-parameter unitary group in $t$ and $A_{i}$ is multiplicative by [F5], $t\mapsto U_{s}(A_{i}(t))$ is a strongly continuous one-parameter unitary group with the displayed generator, which is (b) and the generator identity of (c). [step 1.2, step 1.4, step 2.2, F3, F5, algebra]

4.1 [Assembly] Step 1.1 proves unitarity, the identity and the representation law, and step 1.5 proves strong continuity, which is (a); step 3.1 proves (b) and the generator identity of (c); step 1.3 proves the strong commutation of $L_{i}$ and $S_{i}$, step 2.2 the self-adjointness of $J_{i}$, and step 2.1 the conjugation identities of (c); (d) records only the scope of these mathematical assertions. [step 1.1, step 1.3, step 1.5, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **Kernel and the two lifts.** Since $D_{s}(-I_{2})=(-1)^{2s}I$ by the
  diagonal action and [[thm-nrqm-orbital-and-spin-symmetric-power-su2-representation]]
  clauses (a),(b) (for $s=0$ also $D_{0}(-I_{2})=I$), one has
  $U_{s}(-I_{2})=(-1)^{2s}\mathrm{id}$. For half-integer $s$ this is
  $-\mathrm{id}\ne\mathrm{id}$, so $W\mapsto U_{s}(W)$ does not factor
  through $\rho$: no map $V$ with $V(\rho(W))=U_{s}(W)$ exists, since
  $\rho(-I_{2})=\rho(I_{2})=I$ would force $V(I)=-\mathrm{id}$. For integer
  $s$, $-I_{2}$ acts as the identity and the action passes to the rotation
  group $SU(2)/\{I_{2},-I_{2}\}\cong SO(3)$ of
  [[ex-su-two-to-so-three-as-a-covering-homomorphism]]. On a half-integer
  spin sector the two lifts $\pm U_{s}(W)$ of one rotation $\rho(W)$ differ
  by the central sign.
- **Units.** $\hbar>0$ is a fixed positive parameter of the statement; $L_{i}$
  and $S_{i}=J_{i}\hbar$ carry the unit of action, and no numerical value is
  asserted.
