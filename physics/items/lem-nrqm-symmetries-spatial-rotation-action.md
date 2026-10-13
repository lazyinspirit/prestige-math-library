---
id: lem-nrqm-symmetries-spatial-rotation-action
aliases: [nrqm-symmetries-spatial-rotation-action]
kind: lemma
domain: mathematics
title: "The spatial rotation action on the component-valued wave-function space"
status: published
origin: session
dependency_level: 5
deps: [cor-inner-product-induces-a-norm, def-axiom-of-choice, def-countable-choice,
       def-cm-special-orthogonal-group, def-complex-lp-and-euclidean-test-function-conventions,
       def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-metric-continuity,
       def-schwartz-space-and-its-seminorms, def-sobolev-space-wkp-and-its-norm,
       lem-cm-so3-is-a-matrix-group, lem-nrqm-kinematics-component-valued-wavefunction-identifications,
       lem-nrqm-kinematics-componentwise-position-and-momentum, lem-nrqm-kinematics-momentum-representation,
       lem-schwartz-space-is-dense-in-l-two, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces,
       thm-dominated-convergence, thm-extension-of-a-bounded-map-from-a-dense-subspace,
       thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces,
       thm-linear-change-of-variables-for-lebesgue-measure, thm-plancherel,
       thm-spectral-theorem-for-unbounded-self-adjoint-operators]
dependency_roles:
  cor-inner-product-induces-a-norm: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  lem-nrqm-kinematics-component-valued-wavefunction-identifications: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-kinematics-momentum-representation: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-extension-of-a-bounded-map-from-a-dense-subspace: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 4.1.3 and 4.2, printed pages 62-68 (PDF pages 70-76): the rotation operator, its Hermitian generators, and the behaviour of position and momentum as vector operators under rotations"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', Section 1.2, printed pages 6-9 (PDF pages 6-9): the angular momentum operators, their commutation relations with position and momentum, and operators that are vectors under rotations"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 8.2, printed pages 175-177 (PDF pages 187-189): the one-parameter unitary groups of rotations, their generator and the invariance of the Laplacian"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]), the choice hypotheses of
the cited spectral suppliers. Fix an integer $r\ge1$ and $\hbar>0$, let
$H^{(r)}=L^{2}(\mathbb R^{3};\mathbb C^{r})$ with inner product linear in the
first argument ([[def-complex-lp-and-euclidean-test-function-conventions]],
[[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-hilbert-space]]), let $Q_{j},P_{k}$ be the componentwise position and
momentum operators ([[lem-nrqm-kinematics-componentwise-position-and-momentum]]
clause (a)), and let $\mathcal S^{(r)}=\mathcal S(\mathbb R^{3};\mathbb C^{r})$
and $W^{m,2}(\mathbb R^{3};\mathbb C^{r})$ be the componentwise Schwartz and
Sobolev classes ([[def-schwartz-space-and-its-seminorms]],
[[def-sobolev-space-wkp-and-its-norm]]). Let $SO(3)$ be the special orthogonal
group with its Euclidean topology ([[def-cm-special-orthogonal-group]],
[[lem-cm-so3-is-a-matrix-group]]) and for $R\in SO(3)$ define, componentwise,
$$\bigl(U(R)f\bigr)_{l}(x):=f_{l}(R^{-1}x)\qquad(x\in\mathbb R^{3},\ l=1,\dots,r).$$
Let $U^{(r)}$ be the unitary momentum representation of
[[lem-nrqm-kinematics-momentum-representation]] and $M_R$ the bounded operator
on $L^{2}(\mathbb R^{3},dp;\mathbb C^{r})$ given by $(M_Rg)(p):=g(R^{-1}p)$. Then:

(a) $U(R)$ is a well-defined unitary operator for every $R$, with
$U(I)=\mathrm{id}$, $U(RS)=U(R)U(S)$ and $U(R)^{-1}=U(R^{-1})$ for all
$R,S\in SO(3)$; and for every $f\in H^{(r)}$ the orbit map
$R\mapsto U(R)f$ is continuous on $SO(3)$ ([[def-metric-continuity]]).
Moreover $U(R)\mathcal S^{(r)}=\mathcal S^{(r)}$ and
$U(R)W^{m,2}(\mathbb R^{3};\mathbb C^{r})=W^{m,2}(\mathbb R^{3};\mathbb C^{r})$
for $m=1,2$;

(b) $U^{(r)}U(R)U^{(r)-1}=M_R$. For $a\in\mathbb R^3$ define the maximal directional operators
$$Q(a):=M_{a\cdot x},\qquad P(a):=U^{(r)-1}M_{a\cdot p}U^{(r)},$$
where each multiplier has its maximal domain, namely the classes for which its product is in $L^2$. Thus
$$D(Q(a))=\{f:(a\cdot x)f\in L^2\},\qquad D(P(a))=\{f:(a\cdot p)U^{(r)}f\in L^2\}.$$
They are self-adjoint (for $a=0$ they are the zero operator on all of $H^{(r)}$). On the common coordinate domains they agree with $\sum_l a_lQ_l$ and $\sum_l a_lP_l$, respectively. The full conjugation identities, including domains, are
$$U(R)Q_jU(R)^{-1}=Q(Re_j),\qquad U(R)P_kU(R)^{-1}=P(Re_k),$$
$$U(R)D(Q_j)=D(Q(Re_j)),\qquad U(R)D(P_k)=D(P(Re_k)).$$
In particular, an individual coordinate domain is preserved when $Re_j=\pm e_j$ (respectively $Re_k=\pm e_k$); no such preservation is asserted for an arbitrary rotation. The expressions $\sum_lR_{lj}Q_l$ and $\sum_lR_{lk}P_l$ in full operator identities mean these maximal directional realizations.

(c) with the free operator $H_{0}:=\frac{1}{2m_{0}}\sum_{k=1}^{3}P_{k}^{2}$ for a
parameter $m_{0}>0$, whose domain is $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$,
one has $U(R)H_{0}U(R)^{-1}=H_{0}$; and for a real bounded measurable
$V:\mathbb R^{3}\to\mathbb R$ with multiplier $M_{V}$ (multiplication by $V$)
and $V_{R}(x):=V(R^{-1}x)$ one has $U(R)M_{V}U(R)^{-1}=M_{V_{R}}$, so that
$U(R)H_{V}U(R)^{-1}=H_{V_{R}}$ for the free-plus-$V$ operator $H_{V}$ with
domain $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Axiom of Choice; $r\ge1$; $\hbar>0$; the space $H^{(r)}$; the componentwise operators $Q_{j},P_{k}$; $R,S\in SO(3)$; $f\in H^{(r)}$; $\psi\in\mathcal S^{(r)}$; the momentum unitary $U^{(r)}$ and the multipliers $M_R$; a real bounded measurable $V$.

[F1] **Componentwise kinematics.** $Q_{j},P_{k}$ are self-adjoint with domains $D(Q_{j})=\{f:x_{j}f_{l}\in L^{2}\ \forall l\}$, $D(P_{k})=\{f:D_{k}f_{l}\in L^{2}\ \forall l\}$, and on $\mathcal S^{(r)}$ one has $Q_{j}f=x_{j}f$, $P_{k}f=-i\hbar D_{k}f$ componentwise; $\mathcal S^{(r)}\subseteq D(Q_{j})\cap D(P_{k})$ and both operators map $\mathcal S^{(r)}$ into itself ([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clauses (a),(c), [[def-schwartz-space-and-its-seminorms]]).

[F2] **Momentum representation.** $U^{(r)}$ is unitary and satisfies $U^{(r)}D(P_{k})=D(M_{p_{k}})$ and $U^{(r)}P_{k}=M_{p_{k}}U^{(r)}$; on Schwartz classes it acts by the componentwise Fourier transform with normalization $(2\pi\hbar)^{-3/2}$, and it maps $\mathcal S^{(r)}$ onto itself ([[lem-nrqm-kinematics-momentum-representation]] clauses (a),(b), [[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (b), [[def-schwartz-space-and-its-seminorms]]).

[F3] **Substitution and components.** For an orthogonal $R$ and $f\in L^{1}(\mathbb R^{3};\mathbb C)$ one has $\int f(R^{-1}x)\,dx=\int f(y)\,dy$, because the linear substitution scales Lebesgue measure by $|\det R|=1$ ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[lem-cm-so3-is-a-matrix-group]]). A class $f=(f_{l})$ of $H^{(r)}$ is determined by its components, and componentwise operations preserve the $L^{2}$ norm: $\|f\|^{2}=\sum_{l}\|f_{l}\|^{2}$ ([[lem-nrqm-kinematics-component-valued-wavefunction-identifications]] clause (a), [[cor-inner-product-induces-a-norm]]).

[F4] **Schwartz calculus.** $\psi\in\mathcal S^{(r)}$ means each component $\psi_{l}$ is smooth with $\sup_{x}|x^{\alpha}\partial^{\beta}\psi_{l}(x)|<\infty$ for all multi-indices $\alpha,\beta$; hence each component and each of its derivatives is bounded, and $\mathcal S^{(r)}\subseteq W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ ([[def-schwartz-space-and-its-seminorms]], [[def-sobolev-space-wkp-and-its-norm]]). For an invertible linear substitution $A$ with $|A x|\le\|A\|\,|x|$, the chain rule gives $\partial^{\beta}(\psi_{l}\circ A)(x)=\sum_{|\gamma|=|\beta|}c_{\gamma}\,\partial^{\gamma}\psi_{l}(Ax)$ with constants depending only on $A,\beta$, so the seminorms of $\psi_{l}\circ A$ are bounded by finitely many seminorms of $\psi_{l}$; in particular $\mathcal S^{(r)}$ is invariant under composition with an invertible linear map.

[F5] **Sobolev and Fourier characterization.** For a scalar position-space class $f$, let $g=U^{(1)}f$ be its momentum representative in the normalization of [F2], with $p=2\pi\hbar\xi$. Then $f\in W^{1,2}$ exactly when $p_kg\in L^2$ for all $k$, and $f\in W^{2,2}$ exactly when $|p|^2g\in L^2$. Moreover $\|f\|_{W^{2,2}}$ is equivalent to $\|(1+|p|^2)g\|_2$ for fixed $\hbar>0$. These statements apply componentwise ([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], [[thm-plancherel]], [[def-sobolev-space-wkp-and-its-norm]]).

[F6] **Density and extension.** $\mathcal S^{(r)}$ is dense in $H^{(r)}$ ([[lem-schwartz-space-is-dense-in-l-two]]); a bounded linear operator on a dense subspace extends uniquely to the whole space with the same norm ([[thm-extension-of-a-bounded-map-from-a-dense-subspace]]); if a sequence $g_n\to g$ pointwise and $|g_n|\le h$ with $h$ integrable, then $\int g_n\to\int g$ ([[thm-dominated-convergence]]); and for $u,v\in\mathbb R^{3}$ one has $|u\cdot v|\le|u|\,|v|$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Proof technique:** direct; define the rotation action componentwise, prove unitarity and the representation property by orthogonal substitution, transport the action to the momentum representation for the operator conjugations, and obtain strong continuity from dominated convergence and density.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Well-definedness and unitarity] Let $R\in SO(3)$. For a representative $f$ of a class in $H^{(r)}$ the function $x\mapsto f(R^{-1}x)$ is measurable and its components satisfy $\int|f_{l}(R^{-1}x)|^{2}dx=\int|f_{l}(y)|^{2}dy$ by [F3], so the assignment is well defined on classes, linear, and isometric; it is surjective with inverse given by $R^{-1}$ because composition with $R^{-1}$ undoes it on representatives, so $U(R)$ is a unitary operator and $U(R)^{-1}=U(R^{-1})$. [F3, given, algebra]

2.1 [Representation and Schwartz invariance] For $R,S\in SO(3)$ and $f$ one has $(U(R)U(S)f)_{l}(x)=(U(S)f)_{l}(R^{-1}x)=f_{l}(S^{-1}R^{-1}x)=f_{l}((RS)^{-1}x)=(U(RS)f)_{l}(x)$, since $(RS)^{-1}=S^{-1}R^{-1}$ by [F3]; and $U(I)=\mathrm{id}$. For $\psi\in\mathcal S^{(r)}$ each component $\psi_{l}\circ R^{-1}$ is smooth with all seminorms finite by [F4] applied to $A=R^{-1}$, and the same argument with $R$ in place of $R^{-1}$ gives $U(R)\mathcal S^{(r)}=\mathcal S^{(r)}$. [step 1.1, F3, F4, algebra]

2.2 [Conjugation of position] For $f\in H^{(r)}$, the condition $U(R)^{-1}f\in D(Q_j)$ is, by orthogonal substitution, exactly $(\sum_lR_{lj}x_l)f\in L^2$. On this domain the componentwise computation gives $(U(R)Q_jU(R)^{-1}f)(x)=(R^{-1}x)_jf(x)=(Re_j\cdot x)f(x)$. Thus the conjugate is exactly the maximal multiplier $Q(Re_j)$, and $U(R)D(Q_j)=D(Q(Re_j))$. More generally $Q(a)$ is self-adjoint: for $a\ne0$ choose a rotation taking $e_j$ to $a/|a|$, and the same computation makes $Q(a)$ a real scalar multiple of a unitary conjugate of the self-adjoint $Q_j$; the case $a=0$ is immediate. On the common coordinate domain multiplication distributes to give $Q(a)f=\sum_la_lQ_lf$. [step 1.1, F1, given, algebra]

3.1 [Strong continuity] Let $\psi\in\mathcal S^{(r)}$ and $R_{0}\in SO(3)$. For $R$ in a bounded neighbourhood of $R_{0}$ one has $|R^{-1}x|\ge\tfrac12|x|$ and $|R_{0}^{-1}x|\ge\tfrac12|x|$, so with the radial majorant $h(x):=\sup_{|y|\ge|x|/2}\max_{l}|\psi_{l}(y)|$ one has $|(U(R)\psi-U(R_{0})\psi)_{l}(x)|^{2}\le 4h(x)^{2}$ for every $x$, where $h\in L^{2}$ because $\psi$ is Schwartz; moreover $(U(R)\psi)_{l}(x)\to(U(R_{0})\psi)_{l}(x)$ for every $x$ as $R\to R_{0}$, by continuity of $\psi_{l}$ and of $R\mapsto R^{-1}x$. Dominated convergence gives $\|U(R)\psi-U(R_{0})\psi\|\to0$, and for $\varepsilon/3$-close $\psi$ to $f$ in the sense of [F6] the triangle inequality and unitarity of step 1.1 give $\|U(R)f-U(R_{0})f\|\le2\|f-\psi\|+\|U(R)\psi-U(R_{0})\psi\|<\varepsilon$ for $R$ close to $R_{0}$; hence the orbit map is continuous. [step 1.1, step 2.1, F4, F6, given, algebra]

3.2 [Momentum-space form of the action] Let $\psi\in\mathcal S^{(r)}$ and compute componentwise for $p\in\mathbb R^{3}$, using the substitution $y=R^{-1}x$, $x=Ry$ of [F3] and $R^{\mathsf T}=R^{-1}$: $(U^{(r)}U(R)\psi)_{l}(p)=(2\pi\hbar)^{-3/2}\int e^{-ip\cdot x/\hbar}\psi_{l}(R^{-1}x)\,dx=(2\pi\hbar)^{-3/2}\int e^{-ip\cdot Ry/\hbar}\psi_{l}(y)\,dy=(2\pi\hbar)^{-3/2}\int e^{-iR^{\mathsf T}p\cdot y/\hbar}\psi_{l}(y)\,dy=(U^{(r)}\psi)_{l}(R^{-1}p)=(M_RU^{(r)}\psi)_{l}(p)$. Both $U^{(r)}U(R)U^{(r)-1}$ and $M_R$ are bounded operators (products of unitaries), and they agree on the dense subspace $U^{(r)}\mathcal S^{(r)}=\mathcal S^{(r)}$ of [F2]; [F6] extends the identity to all of $L^{2}(\mathbb R^{3},dp;\mathbb C^{r})$. [step 2.1, F2, F3, F6, given, algebra]

4.1 [Sobolev invariance] By [F2] and [F5], $W^{1,2}(\mathbb R^{3};\mathbb C^{r})$ and $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ correspond in momentum space to the conditions $p_{k}g\in L^{2}$ for every $k$, respectively $|p|^{2}g\in L^{2}$. By step 3.2 the rotated representative is $g_R(p)=g(R^{-1}p)$. Set $q=R^{-1}p$, so $dp=dq$ and $p_k=\sum_lR_{kl}q_l$; therefore each $p_kg_R(p)$ is the rotation-substituted finite linear combination $\sum_lR_{kl}q_lg(q)$, which is in $L^2$ when every $q_lg(q)$ is, and the converse follows by applying the same argument to $R^{-1}$. For the second-order condition, $|p|^2g_R(p)=|q|^2g(q)$ under the same measure-preserving substitution, and the converse again follows with $R^{-1}$. Thus $U(R)W^{m,2}=W^{m,2}$ for $m=1,2$. [step 3.2, F2, F5, given, algebra]

4.2 [Conjugation of momentum] By [F2] and step 3.2, the momentum representation of $U(R)P_kU(R)^{-1}$ is $M_RM_{p_k}M_R^{-1}$. Orthogonal substitution shows that its domain is exactly $\{g:(Re_k\cdot p)g\in L^2\}$, and its action there is multiplication by $(R^{-1}p)_k=\sum_lR_{lk}p_l$. Transporting by $U^{(r)}$ gives exactly $P(Re_k)$ and $U(R)D(P_k)=D(P(Re_k))$. For any nonzero $a$, the same rotation-and-scaling argument as step 2.2 makes $M_{a\cdot p}$ and hence $P(a)$ self-adjoint; for $a=0$ this is immediate. On the common momentum domain $P(a)f=\sum_la_lP_lf$ by [F2] and distribution of the multiplier. This proves the full directional identities of (b). [step 3.2, step 2.2, F2, given, algebra]

5.1 [Free operator and multipliers] Since $U(R)P_{k}U(R)^{-1}=\sum_{l}R_{lk}P_{l}$ on the maximal directional domains by step 4.2 and $U(R)W^{2,2}=W^{2,2}$ by step 4.1, also $U(R)P_{k}^{2}U(R)^{-1}=\sum_{l,l'}R_{lk}R_{l'k}P_{l}P_{l'}$ on $W^{2,2}$; summing over $k$ and using $\sum_{k}R_{lk}R_{l'k}=\delta_{ll'}$ for orthogonal $R$ gives $U(R)\bigl(\sum_{k}P_{k}^{2}\bigr)U(R)^{-1}=\sum_{l}P_{l}^{2}$, so $U(R)H_{0}U(R)^{-1}=H_{0}$. For $f\in H^{(r)}$ one has $(U(R)M_{V}U(R)^{-1}f)_{l}(x)=V(R^{-1}x)f_{l}(x)$ by step 1.1, so $U(R)M_{V}U(R)^{-1}=M_{V_{R}}$ on all of $H^{(r)}$; adding the two identities on the common domain $W^{2,2}$ gives $U(R)H_{V}U(R)^{-1}=H_{V_{R}}$, which is (c). [step 4.1, step 4.2, F1, given, algebra]

6.1 [Assembly] Steps 1.1, 2.1, 3.1 prove unitarity, the representation property, the Schwartz invariance, strong continuity and, with step 4.1, the Sobolev invariance of (a); steps 3.2, 4.2, 2.2 prove (b); step 5.1 proves (c). [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 4.2, step 2.2, step 5.1] ∎

## Remarks

- **Convention.** With $U(R)f=f\circ R^{-1}$ the position operator transforms with the inverse matrix, $U(R)Q_{j}U(R)^{-1}=\sum_{l}R_{lj}Q_{l}$; this is exactly the conjugation identity computed in Binney's (4.26) with $U^{\dagger}(\alpha)xU(\alpha)=R(\alpha)x$. The invariant statement used by the physics items is the multiplier identity $U(R)M_{V}U(R)^{-1}=M_{V\circ R^{-1}}$ and the criterion $V\circ R^{-1}=V$.
- **Scope.** The lemma concerns the spatial factor only. No rotation action on the internal factor $\mathbb C^{r}$ and no SU(2) lift are introduced; those belong to the orbital-and-spin development.
