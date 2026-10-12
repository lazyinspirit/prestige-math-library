---
id: lem-nrqm-symmetries-parity-action
aliases: [nrqm-symmetries-parity-action]
kind: lemma
domain: mathematics
title: "The spatial parity action on the component-valued wave-function space"
status: draft
origin: session
dependency_level: 5
deps: [cor-inner-product-induces-a-norm, def-axiom-of-choice, def-countable-choice,
       def-complex-lp-and-euclidean-test-function-conventions, def-hilbert-space,
       def-l-p-space-as-a-quotient-by-null-functions, def-schwartz-space-and-its-seminorms,
       def-sobolev-space-wkp-and-its-norm, def-self-adjoint-positive-unitary-and-normal-operator,
       lem-nrqm-kinematics-component-valued-wavefunction-identifications,
       lem-nrqm-kinematics-componentwise-position-and-momentum, lem-nrqm-kinematics-momentum-representation,
       lem-schwartz-space-is-dense-in-l-two, thm-extension-of-a-bounded-map-from-a-dense-subspace,
       thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces,
       thm-linear-change-of-variables-for-lebesgue-measure, thm-plancherel]
dependency_roles:
  cor-inner-product-induces-a-norm: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  lem-nrqm-kinematics-component-valued-wavefunction-identifications: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-kinematics-momentum-representation: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  thm-extension-of-a-bounded-map-from-a-dense-subspace: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  thm-plancherel: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 4.1.4 and 4.2, printed pages 62-68 (PDF pages 70-76): the parity operator, its eigenvalues, and the anticommutation relations with position, momentum and vector operators"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Fix an integer $r\ge1$ and
$\hbar>0$, let $H^{(r)}=L^{2}(\mathbb R^{3};\mathbb C^{r})$ with inner product
linear in the first argument ([[def-complex-lp-and-euclidean-test-function-conventions]],
[[def-l-p-space-as-a-quotient-by-null-functions]], [[def-hilbert-space]]), let
$Q_{j},P_{k}$ be the componentwise position and momentum operators
([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a)), and
let $\mathcal S^{(r)}=\mathcal S(\mathbb R^{3};\mathbb C^{r})$ and
$W^{m,2}(\mathbb R^{3};\mathbb C^{r})$ be the componentwise Schwartz and
Sobolev classes ([[def-schwartz-space-and-its-seminorms]],
[[def-sobolev-space-wkp-and-its-norm]]). Define the **parity action**
$$\bigl(\Pi f\bigr)_{l}(x):=f_{l}(-x)\qquad(x\in\mathbb R^{3},\ l=1,\dots,r),$$
let $U^{(r)}$ be the unitary momentum representation of
[[lem-nrqm-kinematics-momentum-representation]], and let $M_{-1}$ be
multiplication on $L^{2}(\mathbb R^{3},dp;\mathbb C^{r})$ by the function
$p\mapsto$ the reflection $g\mapsto g(-p)$, that is $(M_{-1}g)(p):=g(-p)$. Then:

(a) $\Pi$ is a well-defined unitary operator with $\Pi^{2}=\mathrm{id}$ and
$\Pi^{*}=\Pi$; moreover $\Pi\mathcal S^{(r)}=\mathcal S^{(r)}$ and
$\Pi W^{m,2}(\mathbb R^{3};\mathbb C^{r})=W^{m,2}(\mathbb R^{3};\mathbb C^{r})$
for $m=1,2$;

(b) $\Pi D(Q_{j})=D(Q_{j})$ and $\Pi Q_{j}\Pi=-Q_{j}$; $\Pi D(P_{k})=D(P_{k})$
and $\Pi P_{k}\Pi=-P_{k}$;

(c) $U^{(r)}\Pi U^{(r)-1}=M_{-1}$;

(d) with $H_{0}=\frac{1}{2m_{0}}\sum_{k}P_{k}^{2}$ for a parameter
$m_{0}>0$ and a real bounded measurable $V:\mathbb R^{3}\to\mathbb R$, writing
$V_{P}(x):=V(-x)$ and $H_{V}=H_{0}+M_{V}$, one has $\Pi H_{0}\Pi=H_{0}$ and
$\Pi M_{V}\Pi=M_{V_{P}}$, so $\Pi H_{V}\Pi=H_{V_{P}}$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Axiom of Choice; $r\ge1$;
$\hbar>0$; the space $H^{(r)}$; the componentwise operators $Q_{j},P_{k}$;
$f\in H^{(r)}$; $\psi\in\mathcal S^{(r)}$; the momentum unitary $U^{(r)}$ and
the multiplier $M_{-1}$; a real bounded measurable $V$; a parameter $m_{0}>0$.

[F1] **Componentwise kinematics.** $Q_{j},P_{k}$ are self-adjoint with the
maximal componentwise domains, $\mathcal S^{(r)}$ lies in both domains and is
invariant under both operators, and on $\mathcal S^{(r)}$ one has $Q_{j}f=x_{j}f$
and $P_{k}f=-i\hbar D_{k}f$ ([[lem-nrqm-kinematics-componentwise-position-and-momentum]]
clauses (a),(c), [[def-schwartz-space-and-its-seminorms]]).

[F2] **Momentum representation.** $U^{(r)}$ is unitary with
$U^{(r)}D(P_{k})=D(M_{p_{k}})$, $U^{(r)}P_{k}=M_{p_{k}}U^{(r)}$, acting on
Schwartz classes by the componentwise Fourier transform with normalization
$(2\pi\hbar)^{-3/2}$, and $U^{(r)}\mathcal S^{(r)}=\mathcal S^{(r)}$
([[lem-nrqm-kinematics-momentum-representation]] clauses (a),(b),
[[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (b)).

[F3] **Reflection substitution.** For $f\in L^{1}(\mathbb R^{3};\mathbb C)$ one
has $\int f(-x)\,dx=\int f(y)\,dy$, since $x\mapsto-x$ is a linear substitution
of determinant $-1$ and absolute determinant $1$
([[thm-linear-change-of-variables-for-lebesgue-measure]]). A class in $H^{(r)}$
is determined by its components, $\|f\|^{2}=\sum_{l}\|f_{l}\|^{2}$, and componentwise
operations commute with the $L^{2}$ class formation
([[lem-nrqm-kinematics-component-valued-wavefunction-identifications]] clause (a),
[[cor-inner-product-induces-a-norm]]).

[F4] **Schwartz invariance.** If $\psi\in\mathcal S^{(r)}$, then
$\psi_{l}(-\cdot)$ is smooth and $\sup_{x}|x^{\alpha}\partial^{\beta}\psi_{l}(-x)|=\sup_{y}|(-y)^{\alpha}\partial^{\beta}\psi_{l}(y)|$,
which is finite; hence $\Pi\psi\in\mathcal S^{(r)}$ and by symmetry
$\Pi\mathcal S^{(r)}=\mathcal S^{(r)}$ ([[def-schwartz-space-and-its-seminorms]]).

[F5] **Sobolev and Fourier characterization.** Under the momentum variable
$p=2\pi\hbar\xi$ of [F2], $W^{1,2}$ and $W^{2,2}$ are the sets of classes with
$p_{k}U^{(r)}f\in L^{2}$ for all $k$, respectively with $|p|^{2}U^{(r)}f\in L^{2}$
([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]],
[[thm-plancherel]], [[def-sobolev-space-wkp-and-its-norm]]).

[F6] **Density and extension.** $\mathcal S^{(r)}$ is dense in $H^{(r)}$
([[lem-schwartz-space-is-dense-in-l-two]]); a bounded linear operator on a dense
subspace extends uniquely to the whole space ([[thm-extension-of-a-bounded-map-from-a-dense-subspace]]).

## Proof

**Proof technique:** direct; verify unitarity and involution by the reflection
substitution, transport the action to the momentum representation for the
operator conjugations, and read the Hamiltonian identities off the operator
conjugations.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Unitarity and involution] For $f\in H^{(r)}$ the function $x\mapsto f(-x)$ is measurable with $\int|f_{l}(-x)|^{2}dx=\int|f_{l}(y)|^{2}dy$ by [F3], so the assignment is well defined on classes, linear and isometric; applying it twice returns the original representative, so $\Pi^{2}=\mathrm{id}$, $\Pi$ is bijective and hence unitary with $\Pi^{-1}=\Pi$. Being unitary and an involution, $\Pi$ is also self-adjoint: $\langle\Pi f,g\rangle=\langle f,\Pi g\rangle$ follows by the same substitution, $\Pi^{*}=\Pi$. [F3, given, algebra]

1.2 [Schwartz invariance] [F4] gives $\Pi\mathcal S^{(r)}=\mathcal S^{(r)}$ directly, with the substitution $y=-x$ used only to identify the reflected exponents. [F4, given]

2.1 [Conjugation of position] Let $f\in H^{(r)}$ and compute $(\Pi Q_{j}\Pi f)_{l}(x)=\bigl(Q_{j}\Pi f\bigr)_{l}(-x)=(-x)_{j}(\Pi f)_{l}(-x)=-x_{j}f_{l}(x)$, so $\Pi Q_{j}\Pi=-Q_{j}$ as an identity of operators with domain $D(Q_{j})$, since $\Pi$ maps $D(Q_{j})$ onto itself (multiplication by $-x_{j}$ is bounded exactly where $x_{j}$ is) and $\Pi^{-1}=\Pi$ by step 1.1. [step 1.1, F1, given, algebra]

2.2 [Momentum-space form] Let $\psi\in\mathcal S^{(r)}$ and compute componentwise with the substitution $y=-x$ of [F3]: $(U^{(r)}\Pi\psi)_{l}(p)=(2\pi\hbar)^{-3/2}\int e^{-ip\cdot x/\hbar}\psi_{l}(-x)\,dx=(2\pi\hbar)^{-3/2}\int e^{ip\cdot y/\hbar}\psi_{l}(y)\,dy=(U^{(r)}\psi)_{l}(-p)=(M_{-1}U^{(r)}\psi)_{l}(p)$. Both $U^{(r)}\Pi U^{(r)-1}$ and $M_{-1}$ are bounded, and they agree on the dense subspace $U^{(r)}\mathcal S^{(r)}=\mathcal S^{(r)}$ by [F2]; [F6] extends the identity to all of $L^{2}(\mathbb R^{3},dp;\mathbb C^{r})$. [step 1.2, F2, F3, F6, given, algebra]

3.1 [Conjugation of momentum] By [F2] and step 2.2 the conjugate of $P_{k}$ corresponds to $M_{-1}M_{p_{k}}M_{-1}=M_{p_{k}\circ(-\,\mathrm{id})}=M_{-p_{k}}$, because $(M_{-1}M_{p_{k}}M_{-1}g)(p)=p_{k}g(p)\cdot(-1)$; hence $U^{(r)}\,\Pi P_{k}\Pi\,U^{(r)-1}=U^{(r)}(-P_{k})U^{(r)-1}$ and, conjugating by the unitary $U^{(r)}$, $\Pi P_{k}\Pi=-P_{k}$ including domains by [F5] and step 2.2. [step 2.2, F2, F5, given, algebra]

3.2 [Sobolev invariance] By [F5] the sets $W^{1,2},W^{2,2}$ are described by the conditions $p_{k}g\in L^{2}$ and $|p|^{2}g\in L^{2}$ on the momentum representative; by step 2.2 this representative is transformed by $g\mapsto g(-\cdot)$, and $|(-p)|=|p|$ with the coordinate conditions again unchanged; hence $\Pi W^{m,2}=W^{m,2}$ for $m=1,2$. [step 2.2, F5, given, algebra]

4.1 [Hamiltonian conjugation] Since $\Pi P_{k}\Pi=-P_{k}$ with domain preservation by step 3.1 and $\Pi W^{2,2}=W^{2,2}$ by step 3.2, applying the identity twice gives $\Pi P_{k}^{2}\Pi=P_{k}^{2}$ on $W^{2,2}$, hence $\Pi H_{0}\Pi=H_{0}$; and for $f\in H^{(r)}$ one has $(\Pi M_{V}\Pi f)_{l}(x)=V(-x)f_{l}(x)$ by step 1.1, so $\Pi M_{V}\Pi=M_{V_{P}}$ on all of $H^{(r)}$. Adding on the common domain gives $\Pi H_{V}\Pi=H_{V_{P}}$. [step 3.1, step 3.2, F1, given, algebra]

5.1 [Assembly] Steps 1.1 and 1.2 prove (a) with step 3.2 for the Sobolev part, steps 2.1, 2.2, 3.1 prove (b) and (c), and step 4.1 proves (d). [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **Discrete transformation.** The parity action is an involution, so it has no one-parameter group and no Stone generator; its commutation with the dynamics is decided directly by the conjugation identity $\Pi H_{V}\Pi=H_{V_{P}}$.
- **Scope.** Parity acts on the spatial argument only; no internal-factor sign and no SU(2) lift is introduced.
