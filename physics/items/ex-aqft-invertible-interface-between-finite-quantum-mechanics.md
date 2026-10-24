---
id: ex-aqft-invertible-interface-between-finite-quantum-mechanics
kind: example
title: "An invertible interface between two finite quantum-mechanical models"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-defects-and-topological-operators-examples
dependency_level: 2
deps:
  - def-aqft-topological-interface
dependency_roles:
  def-aqft-topological-interface: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "An exact finite-dimensional 0+1-dimensional quantum-mechanical interface with hbar=1 and positive energy gap Delta; no continuum QFT or empirical claim is made."
sources:
  references:
    - title: "Nils Carqueville, Lecture Notes on 2-Dimensional Defect TQFT"
      url: "https://arxiv.org/pdf/1607.05747"
      locator: "§2.1, PDF pp. 5–8: source and target region labels for a defect wall and model-defined correlators; the finite-dimensional matrix example is verified locally."
verification:
  precheck: pass
---

## Example

Use natural units $\hbar=1$ on the Euclidean-time interval $[0,T]$, $T>0$. Let the source model $\mathcal T_-$ have Hilbert space $\mathcal H_-=\mathbb C^2$, and the target model $\mathcal T_+$ have Hilbert space $\mathcal H_+=\mathbb C^2$, both with the standard positive inner product and all complex $2\times2$ matrices as local operator insertions. Their Hamiltonian operators $H_\pm\in\operatorname{End}(\mathcal H_\pm)$ are self-adjoint, with matrices

$$H_- = \begin{pmatrix}0&0\\0&\Delta\end{pmatrix},\qquad H_+ = \begin{pmatrix}\Delta&0\\0&0\end{pmatrix},\qquad \Delta>0.$$

Here $\Delta$ and the Hamiltonians $H_\pm$ have units of energy; $T$ and each Euclidean-time interval $s$ have units of inverse energy. Propagation is $e^{-sH_\pm}$. Define the interface map

$$V=\begin{pmatrix}0&1\\1&0\end{pmatrix}:\mathcal H_-\longrightarrow\mathcal H_+.$$

The map $V$ is dimensionless by convention. The target observable corresponding to $O_-\in\operatorname{End}(\mathbb C^2)$ is $O_+=VO_-V^\dagger$. The combined model's boundary data are dimensionless unit vectors $\psi_-\in\mathcal H_-$ and $\psi_+\in\mathcal H_+$ for which

$$Z=\langle\psi_+,e^{-TH_+}V\psi_-\rangle\ne0.$$

For each interface position $\tau\in(0,T)$, all declared other insertions are finite ordered lists $(t_i,O_i)$ with distinct times $0<t_1<\cdots<t_n<T$, where $O_i\in\operatorname{End}(\mathcal H_-)$ if $t_i<\tau$ and $O_i\in\operatorname{End}(\mathcal H_+)$ if $t_i>\tau$. An insertion at $t_i=\tau$ is not admissible. Each $t_i$ and $\tau$ has inverse-energy units, and the insertion matrices are dimensionless by convention. For every allowed sequence of interfaces, the boundary pair is admissible exactly when its empty-list transfer amplitude is nonzero; all correlators are divided by that amplitude. In particular, for a reverse pair the no-insertion amplitude must have a nonzero identity-interface limit. Define the transfer map from time $s$ to time $t$, $0\le s\le t\le T$, by

$$E_\tau(t,s)=\begin{cases}e^{-(t-s)H_-},&s\le t\le\tau,\\ e^{-(t-s)H_+},&\tau\le s\le t,\\ e^{-(t-\tau)H_+}Ve^{-(\tau-s)H_-},&s<\tau<t.\end{cases}$$

For any finite ordered sequence of interfaces with matching source and target spaces and any finite ordered list of other insertions, the unnormalized transfer amplitude is the matrix element between its external boundary vectors of the ordered product of: each interval propagator $e^{-sH_-}$ or $e^{-sH_+}$ on the model occupying that interval, each interface map $V$ or $V^\dagger$ at its crossing time, and each ordinary insertion matrix at its stated time. Its empty-list amplitude is the same product with all ordinary insertion matrices omitted. The admissibility and normalization rule above therefore defines every declared correlator with a reverse pair and with any finite list of other insertions, not only the single-interface correlator below.

The empty-list transfer amplitude is

$$Z_\tau=\langle\psi_+,e^{-(T-\tau)H_+}V e^{-\tau H_-}\psi_-\rangle=Z,$$

where the equality follows from $H_+V=VH_-$.

More generally, with the ordered list above, it is

$$C_\tau((t_1,O_1),\ldots,(t_n,O_n))=\frac{\langle\psi_+,E_\tau(T,t_n)O_nE_\tau(t_n,t_{n-1})\cdots O_1E_\tau(t_1,0)\psi_-\rangle}{Z},$$

with the empty-list numerator interpreted as $\langle\psi_+,E_\tau(T,0)\psi_-\rangle=Z$. Thus every finite ordered list of ordinary insertions on both sides, and every admissible boundary pair, has a specified correlator. The source-to-target transport sends each source-side insertion $O_i$ to $VO_iV^\dagger$ and the initial state $\psi_-$ to $V\psi_-$; target-side insertions and the terminal vector $\psi_+$ are already target data. With $\widehat O_i=VO_iV^\dagger$ for $t_i<\tau$ and $\widehat O_i=O_i$ for $t_i>\tau$, the corresponding target-only matrix element uses the same transfer normalizer $Z$ and agrees with $C_\tau$ by $e^{-sH_+}V=Ve^{-sH_-}$. The usual topology on $\mathbb C$ is the value-space topology. This is an invertible topological interface between two specified models. It is an internal symmetry only if the source and target models are identified as one complete model.

## Example references

[Carqueville, §2.1, PDF pp. 5–8](https://arxiv.org/pdf/1607.05747)

## Facts & Assumptions

**Given:** The two finite-dimensional transfer models, $\Delta>0$, $V$, and the interface amplitude specified in the Example.

[A1] Propagation in each model over length $s\ge0$ is the matrix exponential $e^{-sH_\pm}$; the amplitude inserts $V$ between the source and target propagation factors.

[F1] [[def-aqft-topological-interface]]: a topological interface preserves every declared complete correlator under allowed decorated isotopies; an invertible symmetry also requires an endodefect, two-sided identity fusion, and specified observable and combined background/boundary bijections whose covariance identity holds for every declared input.

## Verification

**Proof technique:** direct.

**Given:** [A1], [F1], and the matrices in the Example.

1.1 Direct multiplication gives $V^\dagger V=VV^\dagger=I$ and $H_+V=VH_-$. Thus $V$ is unitary and intertwines the source and target Hamiltonians. The assignment $O_-\mapsto VO_-V^\dagger$ is a bijective, product-preserving, adjoint-preserving map of the two full matrix observable algebras, and the corresponding boundary-state map is $\psi\mapsto V\psi$. [given, algebra]

2.1 From $H_+V=VH_-$, induction gives $H_+^nV=VH_-^n$ for every integer $n\ge0$. Substituting this identity term by term into the convergent finite-matrix exponential series yields $e^{-sH_+}V=Ve^{-sH_-}$ for every $s\ge0$. [step 1.1, algebra]

3.1 For any $s<\tau<t$, step 2.1 gives $E_\tau(t,s)=e^{-(t-\tau)H_+}Ve^{-(\tau-s)H_-}=Ve^{-(t-s)H_-}=e^{-(t-s)H_+}V$, independent of $\tau$. Taking adjoints of $H_+V=VH_-$ also gives $e^{-rH_-}V^\dagger=V^\dagger e^{-rH_+}$ for every $r\ge0$, so the corresponding reverse-interface crossing factor is independent of its position as well. In any fixed finite allowed sequence of forward and reverse interfaces, moving one interface within a gap between fixed insertion times changes only its crossing factor; all other interval factors and insertion maps remain fixed. Therefore every declared finite-list numerator is independent of each interface position, and the same argument with no ordinary insertions makes the normalizer independent. For a single interface, setting $\widehat O_i=VO_iV^\dagger$ when $t_i<\tau$ and $\widehat O_i=O_i$ when $t_i>\tau$ rewrites each source-side factor as a target-model factor, with initial vector $V\psi_-$, terminal vector $\psi_+$, and the same normalizer $Z$. Hence the corresponding target-only normalized matrix element equals $C_\tau$. Thus every normalized correlator is independent of position for all admissible boundary data and insertion lists. [A1, step 2.1, algebra]

4.1 Put the reverse interface $V^\dagger$ a distance $\delta>0$ from $V$, with every other insertion and every other interface fixed outside the shrinking two-interface collar. The transfer factors between the pair are $V^\dagger e^{-\delta H_+}V=e^{-\delta H_-}$ on $\mathcal H_-$ and $Ve^{-\delta H_-}V^\dagger=e^{-\delta H_+}$ on $\mathcal H_+$. These converge to the identity matrices in operator norm as $\delta\downarrow0$. For any fixed finite allowed sequence of other interfaces and ordinary insertions, its numerator is a finite product of fixed matrices and these factors, so it converges to the numerator with the transparent identity interface; its no-ordinary-insertion normalizer converges to the corresponding nonzero identity-interface normalizer by the admissibility condition in the Example. Division is continuous at that nonzero limit, so every declared normalized correlator converges in the usual topology of $\mathbb C$, including those with other interfaces. Thus the fusion limits are both transparent identities. By [F1], step 3.1 verifies topologicality and these limits give the two-sided inverse. Since the two named models have different Hamiltonian matrices, this is an equivalence interface between models, not an internal symmetry of either model before an identification is supplied. [F1, step 1.1, step 3.1, algebra] ∎
