---
id: pthm-aqft-noninvertible-defect-realization
kind: physics-theorem
title: "Finite-lattice realization of the Ising non-invertible defect"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-noninvertible-symmetries
dependency_level: 3
deps:
  - def-aqft-noninvertible-defect-fusion
  - def-aqft-ising-fusion-data
  - lem-aqft-ising-fusion-data-coherence
  - def-aqft-topological-defect
dependency_roles:
  def-aqft-noninvertible-defect-fusion: mathematical-premise
  def-aqft-ising-fusion-data: mathematical-premise
  lem-aqft-ising-fusion-data-coherence: mathematical-premise
  def-aqft-topological-defect: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "An exact finite periodic quantum Ising spin chain and its declared finite defect-network extension at the self-dual zero-field coupling; no infinite-volume, continuum-QFT, universality, or empirical claim is made."
sources:
  references:
    - title: "David Aasen, Roger S. K. Mong, and Paul Fendley, Topological Defects on the Lattice I: The Ising Model"
      url: "https://arxiv.org/pdf/1601.07185"
      locator: "§§2–3.2, PDF pp. 3–11, for the Ising transfer/dual Hilbert spaces, duality kernel, local Pauli intertwiners and character-sum fusion; §§4.1–4.3, PDF pp. 17–22, for trivalent junctions and F-moves."
    - title: "Jürg Fröhlich, Jürgen Fuchs, Ingo Runkel, and Christoph Schweigert, Kramers–Wannier Duality from Conformal Defects"
      url: "https://arxiv.org/pdf/cond-mat/0404051"
      locator: "Critical-Ising defect discussion, PDF pp. 2–5: independent CFT treatment of the duality defect and fusion rule; no continuum limit is inferred here."
    - title: "Steven H. Simon, Topological Quantum, §§9.2–9.3"
      url: "https://www-thphys.physics.ox.ac.uk/people/SteveSimon/topological2020/TopoBookSep12.pdf"
      locator: "PDF pp. 119–121 (book pagination approximately 103–105): Ising F-symbols, mixed associators and pentagon convention."
    - title: "Nils Carqueville, Lecture Notes on 2-Dimensional Defect TQFT"
      url: "https://arxiv.org/pdf/1607.05747"
      locator: "§2.1, PDF pp. 5–8: model-defined defect bordisms, junctions, isotopy classes and correlator functor; oriented 2D setting only."
verification:
  precheck: pass
---

## Statement

Fix an integer $L\ge2$ and the periodic site set $\mathbb Z/L\mathbb Z$. Let $\mathcal H_L=\ell^2(\mathbb Z_2^L)$ with orthonormal basis $|h_1,\ldots,h_L\rangle$, where every $h_j\in\mathbb Z_2$ and $h_0=h_L$. Define Pauli operators by $Z_j|\mathbf h\rangle=(-1)^{h_j}|\mathbf h\rangle$ and $X_j|\mathbf h\rangle=|\mathbf h+\mathbf e_j\rangle$. Adopt the finite quantum Ising model with Hamiltonian

$$
H_L=-J\sum_{j=1}^{L}(Z_jZ_{j+1}+X_j),\qquad J>0,
$$

where $Z_{L+1}=Z_1$, $J$ has units of energy, and $\hbar=1$. Euclidean propagation through a time interval $s\ge0$ is the exact finite matrix $e^{-sH_L}$, with $s$ in inverse-energy units. Correlators are matrix elements between arbitrary boundary vectors of finite ordered lists of observable matrices and these propagation factors.

Let $\widehat{\mathcal H}_L=\ell^2(\mathbb Z_2^L)$ have basis $|\widehat h_{1/2},\ldots,\widehat h_{L-1/2}\rangle$, with dual Pauli operators $\widehat Z$ and $\widehat X$ defined by the same formulas on half-integer sites. Define the Kramers–Wannier defect map $D_L:\mathcal H_L\to\widehat{\mathcal H}_L$ by

$$
\langle\widehat{\mathbf h}|D_L|\mathbf h\rangle=2^{-L/2}(-1)^{\sum_{j=1}^{L}\widehat h_{j-1/2}(h_{j-1}+h_j)}.
$$

Identify the dual chain with the original chain by the half-site shift $j+1/2\mapsto j$; under this identification $D_L$ is an endodefect. A defect line is a wrapping insertion of $D_L$ on a Euclidean time slice. Its allowed position changes are slides within gaps between fixed observable insertions. In this finite lattice model, topologicality means invariance under the declared local line slides and re-association moves; no smooth continuum isotopy claim is made. A finite defect network has labels $\mathbf 1,\psi,\sigma$, represented on the chain by $I,P_L,D_L$, where $P_L=\prod_jX_j$. Its fusion spaces are one-dimensional precisely for

$$
\mathbf 1\otimes a=a\otimes\mathbf 1=a,\qquad \psi\otimes\psi=\mathbf 1,\qquad \psi\otimes\sigma=\sigma\otimes\psi=\sigma,\qquad \sigma\otimes\sigma=\mathbf 1\oplus\psi,
$$

and zero otherwise. Fix the Ising junction bases and associator as follows. Write $\epsilon(\mathbf 1)=0$ and $\epsilon(\psi)=1$; then

$$
[F^{\sigma\sigma\sigma}_{\sigma}]_{ab}=2^{-1/2}(-1)^{\epsilon(a)\epsilon(b)},\qquad a,b\in\{\mathbf 1,\psi\},
$$

$$
[F^{\psi\sigma\psi}_{\sigma}]_{\sigma\sigma}=-1,\qquad [F^{\sigma\psi\sigma}_{\psi}]_{\sigma\sigma}=-1,
$$

and every other allowed associator coefficient is $1$. In the local height basis, the nontrivial trivalent tensors with cyclic labels $(\sigma,\sigma,\psi)$ and $(\sigma,\psi,\sigma)$ are $2^{-1/4}(-1)^h$ and $(X)_{hh'}=\delta_{h',h+1}$, respectively; reversed orientations use adjoint tensors. Together with the unit-channel maps specified above, these are the adopted local junction and re-association data of this finite network model; they are not inferred from fusion multiplicities alone.

For this selected finite model, $D_L$ is topological under the declared defect slides, its exact operator fusion is $D_L^2=I+P_L$, $P_L^2=I$, and $D_LP_L=P_LD_L=D_L$, and the junction spaces and associators are the finite semisimple unitary Ising fusion data above. In particular $D_L$ is non-invertible. The claim is confined to this finite lattice model and asserts no continuum limit or empirical fact.

## Statement references

[Aasen, Mong, and Fendley, §§2–4](https://arxiv.org/pdf/1601.07185)

[Fröhlich, Fuchs, Runkel, and Schweigert, critical-Ising defect discussion](https://arxiv.org/pdf/cond-mat/0404051)

[Simon, *Topological Quantum*, §§9.2–9.3](https://www-thphys.physics.ox.ac.uk/people/SteveSimon/topological2020/TopoBookSep12.pdf)

[Carqueville, *Lecture Notes on 2-Dimensional Defect TQFT*, §2.1](https://arxiv.org/pdf/1607.05747)

## Facts & Assumptions

**Given:** Adopt the finite periodic Hamiltonian, Euclidean matrix-element correlators, duality kernel, defect insertion rule and local junction data in the statement. All spin and dual-spin labels lie in $\mathbb Z_2$; $J>0$ has energy units; $s$ has inverse-energy units; and there is no empirical premise.

[A1] This is an adopted finite-lattice model, not a claim that nature or a continuum QFT realizes the model.

[F1] [[def-aqft-topological-defect]]: in a specified model, a defect is topological when every declared correlator is invariant under every allowed isotopy that preserves the other insertions and boundary data.

[F2] [[def-aqft-noninvertible-defect-fusion]]: an object is tensor-invertible only if it has a two-sided fusion inverse; fusion data include junction maps and associators, not only fusion multiplicities.

[F3] [[def-aqft-ising-fusion-data]]: the Ising fusion data have labels $\mathbf 1,\psi,\sigma$, the displayed Ising fusion table, and the displayed associator and duality coefficients.

[F4] [[lem-aqft-ising-fusion-data-coherence]]: these data satisfy the monoidal coherence and duality identities and define a finite semisimple unitary fusion category.

## Proof
1.1 In the kernel formula, toggling the input height $h_j$ changes the exponent by $\widehat h_{j-1/2}+\widehat h_{j+1/2}$, while multiplying the input by $Z_jZ_{j+1}$ contributes $(-1)^{h_j+h_{j+1}}$, which is exactly the exponent change from toggling the output dual height $\widehat h_{j+1/2}$. Thus $D_LX_j=\widehat Z_{j-1/2}\widehat Z_{j+1/2}D_L$ and $D_LZ_jZ_{j+1}=\widehat X_{j+1/2}D_L$. Summing these identities gives $D_LH_L=\widehat H_LD_L$, where $\widehat H_L=-J\sum_j(\widehat Z_{j-1/2}\widehat Z_{j+1/2}+\widehat X_{j+1/2})$. The half-site identification makes $\widehat H_L=H_L$. [A1, given, algebra]

1.2 Composing two kernels and summing over the intermediate dual heights gives $\langle\mathbf h'|D_L^2|\mathbf h\rangle=2^{-L}\sum_{\widehat{\mathbf h}\in\mathbb Z_2^L}(-1)^{\sum_j\widehat h_{j-1/2}(h_{j-1}+h_j+h'_{j-1}+h'_j)}=\prod_j\delta_{d_{j-1},d_j}$, where $d_j=h_j+h'_j$ in $\mathbb Z_2$ and each sum $\sum_{u\in\mathbb Z_2}(-1)^{ur}$ equals $2$ if $r=0$ and $0$ if $r=1$. The constraints force all $d_j$ to be the same bit, so $\mathbf h'=\mathbf h$ or $\mathbf h'=\mathbf h+\mathbf 1$. These are exactly the matrix elements of $I+P_L$, proving $D_L^2=I+P_L$. [A1, given, algebra]

2.1 Induction gives $D_LH_L^n=H_L^nD_L$ for every $n\ge0$. The finite-dimensional exponential series converges absolutely, so termwise equality yields $D_Le^{-sH_L}=e^{-sH_L}D_L$ for every $s\ge0$. [A1, step 1.1, algebra]

2.2 Toggling every input height leaves the kernel unchanged because each neighboring pair changes by $1+1=0$ in $\mathbb Z_2$; shifting every output dual height leaves it unchanged because $\sum_j(h_{j-1}+h_j)=0$ in $\mathbb Z_2$. Hence $D_LP_L=P_LD_L=D_L$, while $P_L^2=I$ by $X_j^2=I$. The fusion operators therefore satisfy the stated Ising fusion table. [A1, step 1.2, algebra]

3.1 If the defect time $\tau$ moves inside a gap $(t_a,t_{a+1})$ with no observable insertion, the two adjacent propagators combine as $e^{-(t_{a+1}-\tau)H_L}D_Le^{-(\tau-t_a)H_L}=D_Le^{-(t_{a+1}-t_a)H_L}$ by [step 2.1] and the semigroup law. All other factors in the correlator stay fixed, so its matrix element is independent of $\tau$. Thus every declared line-slide preserves the correlator. [A1, F1, step 2.1, algebra]

3.2 The network's junction spaces and local re-association maps are the explicit finite data adopted in [A1] and displayed in the Statement, not a conclusion from fusion multiplicities alone. The only two-channel change of basis is the stated $2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$; the two mixed one-channel moves have the stated $-1$ coefficients, and every other allowed channel has coefficient $1$. By [F4], these maps satisfy pentagon and both duality identities, so the declared re-association moves are consistent for every finite network. [A1, F3, F4, step 2.2, algebra]

4.1 Since $P_L$ is nontrivial (it sends $|0,\ldots,0\rangle$ to $|1,\ldots,1\rangle$), the relation $D_LP_L=D_L$ would imply $P_L=I$ if $D_L$ had a left inverse, a contradiction. Thus $D_L$ has no two-sided inverse. Steps [2.2], [3.1], and [3.2] establish operator fusion, topologicality, and coherent junction data for the finite model; this is a conditional lattice-model deduction, not an empirical or continuum claim. [A1, F2, F4, step 2.2, step 3.1, step 3.2] ∎
## Remarks

The square records the exact local intertwiner used in step 1.1. Its commutativity follows from the displayed kernel calculation; no proof relies on the diagram.

```tikzcd
\mathcal H_L \arrow[r,"D_L"] \arrow[d,"Z_jZ_{j+1}"'] & \widehat{\mathcal H}_L \arrow[d,"\widehat X_{j+1/2}"] \\
\mathcal H_L \arrow[r,"D_L"'] & \widehat{\mathcal H}_L
```
