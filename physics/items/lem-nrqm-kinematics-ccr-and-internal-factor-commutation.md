---
id: lem-nrqm-kinematics-ccr-and-internal-factor-commutation
aliases: [nrqm-kinematics-ccr-and-internal-factor-commutation]
kind: lemma
domain: mathematics
title: "Canonical commutation relations on the component-valued core and commutation with the internal factor"
status: draft
origin: session
dependency_level: 4
deps: [def-adjoint-of-a-densely-defined-unbounded-operator, def-axiom-of-choice, def-bounded-linear-operator, def-countable-choice, def-hilbert-space-adjoint, def-operator-norm, def-projection-valued-measure, def-schwartz-space-and-its-seminorms, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-weak-derivative-of-a-locally-integrable-function, lem-classical-derivatives-are-weak-derivatives, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-kinematics-component-valued-wavefunction-identifications, lem-nrqm-kinematics-componentwise-position-and-momentum, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, lem-nrqm-observables-l2-multiplication-spectral-measure, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, thm-dominated-convergence, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-tonelli-theorem-for-sigma-finite-product-spaces]
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-operator-norm: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-kinematics-component-valued-wavefunction-identifications: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  lem-nrqm-observables-l2-multiplication-spectral-measure: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1, printed pages 55-58 (PDF pages 67-70): position, momentum and the canonical commutation relation; Section 8.1, printed pages 173-175 (PDF pages 185-187): algebraic position and momentum methods"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 2.3, printed pages 24-28 (PDF pages 32-36): the commutator [x,p]=i hbar in the position representation and its role in the operator calculus"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Fix integers $d\ge1$,
$r\ge1$ and $\hbar>0$, let $H^{(r)}=L^{2}(\mathbb R^{d};\mathbb C^{r})$ with
the componentwise position and momentum operators $Q_{j},P_{k}$ of
[[lem-nrqm-kinematics-componentwise-position-and-momentum]], let
$\mathcal S^{(r)}:=\mathcal S(\mathbb R^{d};\mathbb C^{r})$ be the componentwise
Schwartz class ([[def-schwartz-space-and-its-seminorms]]), and let $\Psi_{0}$
and $\Theta$ be the unitaries of
[[lem-nrqm-kinematics-component-valued-wavefunction-identifications]]. For
$S=(S_{lm})\in M_{r}(\mathbb C)$ write
$$S_{\times}f:=\Bigl(\sum_{m=1}^{r}S_{lm}f_{m}\Bigr)_{l}\qquad(f\in H^{(r)}).$$
Then:

(a) $\mathcal S^{(r)}\subseteq D(Q_{j})\cap D(P_{k})$ for all $j,k$,
$Q_{j}\mathcal S^{(r)}\subseteq\mathcal S^{(r)}$ and
$P_{k}\mathcal S^{(r)}\subseteq\mathcal S^{(r)}$, and on $\mathcal S^{(r)}$ the
canonical commutation relations hold:
$$(Q_{j}P_{k}-P_{k}Q_{j})f=i\hbar\,\delta_{jk}f\qquad(f\in\mathcal S^{(r)});$$

(b) $S_{\times}$ is bounded with $\|S_{\times}\|=\|S\|_{\mathrm{op}}$
([[def-operator-norm]]), and
$$S_{\times}D(Q_{j})\subseteq D(Q_{j}),\quad Q_{j}S_{\times}f=S_{\times}Q_{j}f\ (f\in D(Q_{j})),\qquad S_{\times}D(P_{k})\subseteq D(P_{k}),\quad P_{k}S_{\times}f=S_{\times}P_{k}f\ (f\in D(P_{k}));$$

(c) the spectral projection-valued measures of $Q_{j}$ and $P_{k}$ are
$$E_{Q_{j}}(B)=M_{\mathbf 1_{x_{j}^{-1}(B)}},\qquad E_{P_{k}}(B)=\mathcal F_{2}^{(r)*}M_{\mathbf 1_{\{2\pi\hbar\xi_{k}\in B\}}}\mathcal F_{2}^{(r)} \qquad(B\subseteq\mathbb R\ \text{Borel}),$$
where $M_{g}$ is multiplication by $g$; consequently
$S_{\times}E_{Q_{j}}(B)=E_{Q_{j}}(B)S_{\times}$ and
$S_{\times}E_{P_{k}}(B)=E_{P_{k}}(B)S_{\times}$ for every Borel $B$, and for
unitary $V\in U(r)$ and every $f\in H^{(r)}$
$$\bigl\|E_{Q_{j}}(B)V_{\times}f\bigr\|=\bigl\|E_{Q_{j}}(B)f\bigr\|,\qquad \bigl\|E_{P_{k}}(B)V_{\times}f\bigr\|=\bigl\|E_{P_{k}}(B)f\bigr\|;$$

(d) under the tensor identification $\Theta$ the operator $S_{\times}$
corresponds to the bounded amplification $I\otimes S$ of
[[lem-nrqm-composites-bounded-tensor-maps]], that is
$\Theta^{-1}S_{\times}\Theta=I\otimes S$; in particular the internal-factor
operators commute with the spatial ones in the sense of (b).

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Axiom of Choice; integers $d,r\ge1$; $\hbar>0$; the componentwise operators $Q_{j},P_{k}$ and their scalar counterparts $Q_{j}^{(1)},P_{k}^{(1)}$; the unitaries $\Psi_{0},\Theta$ and the componentwise Plancherel transform $\mathcal F_{2}^{(r)}$; a matrix $S\in M_{r}(\mathbb C)$; classes $f\in H^{(r)}$ and $u\in\mathcal S^{(r)}$; Borel sets $B\subseteq\mathbb R$.

[F1] **Componentwise formulas on the Schwartz class.** For $u=(u_l)\in\mathcal S^{(r)}$, the componentwise operators satisfy $(Q_ju)_l=x_ju_l$ and $(P_ku)_l=-i\hbar\partial_ku_l$: the Schwartz functions are smooth, their classical derivatives are their weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]), and multiplication by $x_j$ and differentiation preserve the Schwartz class ([[def-schwartz-space-and-its-seminorms]], [[lem-nrqm-kinematics-componentwise-position-and-momentum]] clauses (a),(b)).

[F2] **Componentwise operators and their identification.** $Q_{j},P_{k}$ are the orthogonal sums of the scalar operators under $\Psi_{0}$, they are self-adjoint with their maximal componentwise domains, and $\mathcal F_{2}^{(r)}$ is unitary with the Fourier representation of $P_{k}$ ([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clauses (a),(b)); the bounded multipliers and translations correspond to the amplifications of [[lem-nrqm-kinematics-component-valued-wavefunction-identifications]] clause (c).

[F3] **Weak derivatives are linear.** If $f_{1},\dots,f_{r}\in L^{2}(\mathbb R^{d};\mathbb C)$ have weak derivatives $D_{k}f_{m}\in L^{2}$ and $\alpha_{1},\dots,\alpha_{r}\in\mathbb C$, then $\sum_{m}\alpha_{m}f_{m}$ has weak derivative $\sum_{m}\alpha_{m}D_{k}f_{m}$: the defining integration-by-parts identity is verified term by term against test functions ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F4] **Multiplier spectral measure and uniqueness.** For a $\sigma$-finite measure space and a real measurable finite-valued multiplier $m$, the multiplication operator $M_{m}$ is self-adjoint with regular spectral PVM $E(B)=M_{\mathbf 1_{m^{-1}(B)}}$, and its law is $\|E(B)\psi\|^{2}=\int_{m^{-1}(B)}|\psi|^{2}$ ([[lem-nrqm-observables-l2-multiplication-spectral-measure]] clauses (a)-(c), [[def-projection-valued-measure]]). A regular PVM representing a self-adjoint operator is its spectral PVM ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]). Integrals of nonnegative product-measurable functions may be iterated ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); dominated convergence for the componentwise strong additivity is [[thm-dominated-convergence]].

[F5] **Bounded matrix action.** For $S\in M_{r}(\mathbb C)$ and $f\in L^{2}(\mathbb R^{d};\mathbb C^{r})$, $\|Sf(x)\|_{\mathbb C^{r}}\le\|S\|_{\mathrm{op}}\|f(x)\|_{\mathbb C^{r}}$ pointwise ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]), so $S_{\times}$ is bounded with $\|S_{\times}\|\le\|S\|_{\mathrm{op}}$; every elementary tensor $\kappa(u\otimes z)$ satisfies $(I\otimes S)\kappa(u\otimes z)=\kappa(u\otimes Sz)$ ([[lem-nrqm-composites-bounded-tensor-maps]] clause (a)).

## Proof

**Proof technique:** direct; compute the core commutator from the componentwise differential formulas and the classical product rule, verify the matrix-multiplier commutation from linearity of weak derivatives, transport the scalar spectral measures through the unitaries, and identify the amplification on elementary tensors.

**Given:** The data of the statement and [F1]-[F5].

1.1 [The core and the CCR] For $u=(u_l)\in\mathcal S^{(r)}$, [F1] gives $Q_ju,P_ku\in\mathcal S^{(r)}$, so both products are defined there. For each component, using the ordinary product rule for the smooth function $x_ju_l(x)$,
$$ (Q_jP_ku-P_kQ_ju)_l=-i\hbar x_j\partial_ku_l+i\hbar\partial_k(x_ju_l)=i\hbar\delta_{jk}u_l. $$
Thus $(Q_jP_k-P_kQ_j)u=i\hbar\delta_{jk}u$ as an equality of $L^2$ classes. This proves (a). [F1, algebra]

1.2 [Linearity of the matrix action] For $f\in D(Q_{j})$ and every $m$, $x_{j}f_{m}\in L^{2}$, so the components $x_{j}(S_{\times}f)_{l}=x_{j}\sum_{m}S_{lm}f_{m}=\sum_{m}S_{lm}x_{j}f_{m}$ are $L^{2}$ classes (finite sums), and $S_{\times}f\in D(Q_{j})$. For $f\in D(P_{k})$, [F3] applied to the finite linear combinations $\sum_{m}S_{lm}f_{m}$ gives $D_{k}(S_{\times}f)_{l}=\sum_{m}S_{lm}D_{k}f_{m}$, so $S_{\times}f\in D(P_{k})$; the actions agree with the matrix action on each component, whence $Q_{j}S_{\times}f=S_{\times}Q_{j}f$ and $P_{k}S_{\times}f=S_{\times}P_{k}f$. [F3, F2, algebra]

1.3 [The position spectral measure] Put $E(B):=M_{\mathbf 1_{x_{j}^{-1}(B)}}$ on $H^{(r)}$, the componentwise multiplication by the bounded indicator. Each $E(B)$ is an orthogonal projection and $E$ is a regular PVM: regularity follows by applying [F4] to the scalar multiplier $x\mapsto x_j$ on $L^2(\mathbb R^d)$ and taking the finite orthogonal sum over the $r$ components; multiplicativity and the endpoint values are pointwise, and for pairwise disjoint Borel $B_n$ with union $B$ the strong additivity follows from $\|E(B)x-\sum_{n\le N}E(B_n)x\|^2=\int|\mathbf 1_B-\sum_{n\le N}\mathbf 1_{B_n}|(x_j)\,\|x\|^2\to0$ by dominated convergence. For $x\in D(Q_j)$ and $y\in H^{(r)}$, the scalar pairing measure is $E_{x,y}(B)=\int_{x_j^{-1}(B)}\langle x(z),y(z)\rangle_{\mathbb C^r}dz$, the pushforward under $z\mapsto z_j$ of the complex measure with density $\langle x(z),y(z)\rangle$. Its first absolute moment is finite because $\int|z_j|\,|\langle x(z),y(z)\rangle|dz\le\|Q_jx\|\,\|y\|$ by Cauchy--Schwarz. The pushforward integral formula (first for indicator functions, then simple functions and integrable limits) therefore gives $\int\lambda\,dE_{x,y}(\lambda)=\int z_j\langle x(z),y(z)\rangle dz=\langle Q_jx,y\rangle$. Similarly, $E_x$ is the pushforward of $\|x(z)\|^2dz$, and $\int\lambda^2dE_x(\lambda)=\int z_j^2\|x(z)\|^2dz$, finite exactly when $x\in D(Q_j)$. Thus $E$ represents $Q_j$, and by uniqueness [F4] it is the spectral PVM of $Q_j$. [F4, F2, algebra]

2.1 [Norm of the matrix action] [F5] gives the pointwise bound $\|S_{\times}f(x)\|_{\mathbb C^{r}}\le\|S\|_{\mathrm{op}}\|f(x)\|_{\mathbb C^{r}}$, so $\|S_{\times}f\|_{H^{(r)}}\le\|S\|_{\mathrm{op}}\|f\|_{H^{(r)}}$ and $\|S_{\times}\|\le\|S\|_{\mathrm{op}}$. Choose a unit vector $z_{0}\in\mathbb C^{r}$ with $\|Sz_{0}\|=\|S\|_{\mathrm{op}}$, and a unit $h\in L^{2}(\mathbb R^{d};\mathbb C)$ with $\|h\|=1$; then $f=h\,z_{0}$ (the class $x\mapsto h(x)z_{0}$) has $\|f\|_{H^{(r)}}=\|h\|\,\|z_{0}\|=1$ and $\|S_{\times}f\|_{H^{(r)}}=\|h\|\,\|Sz_{0}\|=\|S\|_{\mathrm{op}}$, so $\|S_{\times}\|=\|S\|_{\mathrm{op}}$; this proves the norm statement of (b), and step 1.2 is the commutation statement. [step 1.2, F5, algebra]

2.2 [The momentum spectral measure] Put $E'(B):=\mathcal F_{2}^{(r)*}M_{\mathbf 1_{\{2\pi\hbar\xi_{k}\in B\}}}\mathcal F_{2}^{(r)}$, the unitary conjugate of the multiplication PVM by the scalar multiplier $m(\xi):=2\pi\hbar\xi_k$; [F4] gives the scalar multiplication PVM and its regularity, which pass to the finite component sum and unitary conjugate, so $E'$ is a regular PVM. For $x\in D(P_k)$ put $g:=\mathcal F_2^{(r)}x$ and for $y'\in H^{(r)}$ put $h':=\mathcal F_2^{(r)}y'$; then $E'_{x,y'}(B)=\int_{m^{-1}(B)}\langle g(\xi),h'(\xi)\rangle d\xi$ is the pushforward under $m$ of the complex measure with density $\langle g(\xi),h'(\xi)\rangle$. Its first absolute moment is finite since $\int |m(\xi)|\,|\langle g,h'\rangle|d\xi\le\|mg\|_2\|h'\|_2<\infty$, so the pushforward integral formula (first for indicator functions, then simple functions and integrable limits) and [F2] give $\int\lambda dE'_{x,y'}(\lambda)=\int m(\xi)\langle g,h'\rangle d\xi=\langle mg,h'\rangle=\langle P_kx,y'\rangle$. Similarly, $E'_x$ is the pushforward of $\|g(\xi)\|^2d\xi$, so $\int\lambda^2dE'_x(\lambda)=\|mg\|_2^2$, finite exactly when $x\in D(P_k)$. Thus $E'$ represents $P_k$, and by uniqueness [F4] it is the spectral PVM of $P_k$. [step 1.3, F2, F4, algebra]

3.1 [Commutation with the spectral measures] The multiplier $M_{\mathbf 1_{x_{j}^{-1}(B)}}$ commutes with $S_{\times}$ because both are multiplication by functions on the finite-dimensional values: pointwise, $\mathbf 1_{x_{j}^{-1}(B)}(x)Sz=S(\mathbf 1_{x_{j}^{-1}(B)}(x)z)$ for every $z\in\mathbb C^{r}$. For the momentum case, $S_{\times}\mathcal F_{2}^{(r)}=\mathcal F_{2}^{(r)}S_{\times}$ because $\mathcal F_{2}^{(r)}$ acts on components and matrix multiplication acts on the finite index, so $\mathcal F_{2}^{(r)}\bigl(S_{\times}g\bigr) =\bigl(\sum_{m}S_{lm}\mathcal F_{2}g_{m}\bigr)_{l}=S_{\times}\mathcal F_{2}^{(r)}g$; and $S_{\times}$ commutes with the scalar multiplier by the same pointwise argument. Hence $S_{\times}$ commutes with both $E_{Q_{j}}(B)$ and $E_{P_{k}}(B)$ by steps 1.3 and 2.2. For unitary $V\in U(r)$ and $f\in H^{(r)}$, $V_{\times}$ is unitary (it is matrix multiplication by a unitary pointwise) and commutes with the PVMs, so $\|E(B)V_{\times}f\|=\|V_{\times}E(B)f\|=\|E(B)f\|$, which is the last assertion of (c). [step 1.2, step 1.3, step 2.2, F2, algebra]

4.1 [Amplification] Let $u\in H$ and $z=\sum_{l}z_{l}e_{l}\in\mathbb C^{r}$, and put $w:=\Theta(\kappa(u\otimes z))$; by [[lem-nrqm-kinematics-component-valued-wavefunction-identifications]] clause (b), $w=\sum_{l}z_{l}\iota_{l}(u)$, where $\iota_{l}(u)\in H^{(r)}$ denotes the vector with $u$ in slot $l$ and $0$ elsewhere. Then $\Theta^{-1}S_{\times}\Theta\,\kappa(u\otimes z)=\Theta^{-1}\bigl(S_{\times}w\bigr)$, and $S_{\times}w=\sum_{l}z_{l}S_{\times}\iota_{l}(u)=\sum_{l,m}z_{l}S_{ml}\iota_{m}(u)$; applying $\Theta^{-1}$ with clause (b) gives $\sum_{l,m}z_{l}S_{ml}\kappa(u\otimes e_{m})=\kappa(u\otimes Sz)$, where the last step expands $Sz=\sum_{m}\bigl(\sum_{l}S_{ml}z_{l}\bigr)e_{m}$; by [F5] this equals $(I\otimes S)\kappa(u\otimes z)$. Both sides are bounded operators ([[lem-nrqm-composites-bounded-tensor-maps]] clause (a) and step 2.1) that agree on the elementary tensors, whose span is dense in $H\widehat{\otimes}\mathbb C^{r}$ ([[lem-nrqm-composites-hilbert-tensor-construction]] clause (c)); hence $\Theta^{-1}S_{\times}\Theta=I\otimes S$, which is (d). [step 2.1, F5, algebra] ∎

## Remarks

- **Only the core carries the CCR.** Clause (a) is a relation on the common
  Schwartz core; no product of the unbounded operators is claimed to be
  defined on all of $H^{(r)}$, and the companion counterexample of this page
  shows that no bounded-operator form with nonzero commutator can hold.
- **The internal factor is a bookkeeping factor.** Clause (d) says that the
  matrix action is exactly the amplification $I\otimes S$; together with (c)
  it says that the spatial spectral measures are invariant under the action of
  the internal factor, so the spatial laws do not distinguish internal
  components. No identification of the internal factor with a spatial object
  is made.
