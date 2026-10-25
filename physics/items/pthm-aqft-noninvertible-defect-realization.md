---
id: pthm-aqft-noninvertible-defect-realization
kind: physics-theorem
title: "Finite-lattice realization of the Ising non-invertible defect"
status: "published"
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Fix an integer $L\ge2$ and the periodic site set $\mathbb Z/L\mathbb Z$. Let $\mathcal H_L=\ell^2(\mathbb Z_2^L)$ with orthonormal basis $|h_1,\ldots,h_L\rangle$, where every $h_j\in\mathbb Z_2$ and $h_0=h_L$. Define Pauli operators by $Z_j|\mathbf h\rangle=(-1)^{h_j}|\mathbf h\rangle$ and $X_j|\mathbf h\rangle=|\mathbf h+\mathbf e_j\rangle$. Adopt the finite quantum Ising model with Hamiltonian

$$
H_L=-J\sum_{j=1}^{L}(Z_jZ_{j+1}+X_j),\qquad J>0,
$$

where $Z_{L+1}=Z_1$, $J$ has units of energy, and $\hbar=1$. Euclidean propagation through a time interval $s\ge0$ is the exact finite matrix $e^{-sH_L}$, with $s$ in inverse-energy units. Correlators are matrix elements between arbitrary boundary vectors of finite ordered lists of observable matrices and these propagation factors.

Let $\widehat{\mathcal H}_L=\ell^2(\mathbb Z_2^L)$ have basis $|\widehat h_{1/2},\ldots,\widehat h_{L-1/2}\rangle$, with dual Pauli operators $\widehat Z$ and $\widehat X$ defined by the same formulas on half-integer sites. Define the dual Hamiltonian, with half-integer indices periodic modulo $L$, by

$$
\widehat H_L=-J\sum_{j=1}^{L}\bigl(\widehat Z_{j-1/2}\widehat Z_{j+1/2}+\widehat X_{j+1/2}\bigr).
$$

Define the original-to-dual Kramers–Wannier map $K_L:\mathcal H_L\to\widehat{\mathcal H}_L$ by

$$
\langle\widehat{\mathbf h}|K_L|\mathbf h\rangle=2^{-L/2}(-1)^{\sum_{j=1}^{L}\widehat h_{j-1/2}(h_{j-1}+h_j)}.
$$

The reverse-oriented map is $K_L^\dagger:\widehat{\mathcal H}_L\to\mathcal H_L$. To give a single endodefect with the fusion convention below, use the explicit reflection identification $R_L:\widehat{\mathcal H}_L\to\mathcal H_L$ sending $|\widehat{\mathbf h}\rangle$ to $|\mathbf r\rangle$ with $r_j=\widehat h_{1/2-j}$ (all indices are periodic), and set $D_L=R_LK_L$. This is an isometry of the two spin bases and identifies the dual Hamiltonian with $H_L$. The matrix of $D_L$ is real symmetric: its exponent is $\sum_j r_{1-j}(h_{j-1}+h_j)$, whose coefficient matrix is symmetric in $\mathbf r$ and $\mathbf h$. Thus $D_L^2=K_L^\dagger K_L$. The original-to-dual map and its reverse also have the typed fusion $K_L^\dagger K_L=I+P_L$ and $K_LK_L^\dagger=I+\widehat P_L$. A repeated fixed half-site identification is not used for this square; it would retain a spatial translation. A defect line is a wrapping insertion of $D_L$ on a Euclidean time slice. Its allowed position changes are slides within gaps between fixed observable insertions. In this finite lattice model, topologicality means invariance under the declared local line slides; re-association of junction channels is a separate linear recoupling identity; no smooth continuum isotopy claim is made. A finite defect network has labels $\mathbf 1,\psi,\sigma$, represented on the chain by $I,P_L,D_L$, where $P_L=\prod_jX_j$. Its fusion spaces are one-dimensional precisely for

$$
\mathbf 1\otimes a=a\otimes\mathbf 1=a,\qquad \psi\otimes\psi=\mathbf 1,\qquad \psi\otimes\sigma=\sigma\otimes\psi=\sigma,\qquad \sigma\otimes\sigma=\mathbf 1\oplus\psi,
$$

and zero otherwise. Choose a basis vector in each allowed one-dimensional fusion space and define the associator in those bases as follows. Write $\epsilon(\mathbf 1)=0$ and $\epsilon(\psi)=1$; then

$$
[F^{\sigma\sigma\sigma}_{\sigma}]_{ab}=2^{-1/2}(-1)^{\epsilon(a)\epsilon(b)},\qquad a,b\in\{\mathbf 1,\psi\},
$$

$$
[F^{\psi\sigma\psi}_{\sigma}]_{\sigma\sigma}=-1,\qquad [F^{\sigma\psi\sigma}_{\psi}]_{\sigma\sigma}=-1,
$$

and every other allowed associator coefficient is $1$. In the abstract channel category, the unit maps $\mathbf 1\otimes a\to a$ and $a\otimes\mathbf 1\to a$ have coefficient $1$. Each simple label is self-dual; its left and right evaluation and coevaluation maps have coefficient $\lambda_a$ in the unit channel, where $\lambda_{\mathbf 1}=\lambda_\psi=1$ and $\lambda_\sigma=2^{1/4}$, with zero coefficient in the $\psi$ channel for $\sigma\otimes\sigma$. These are categorical maps, distinct from the lattice triangle normalizations below.

For local lattice tensors, heights $h,h',\widetilde h$ range over $\mathbb Z_2$, with addition modulo $2$; height $0$ denotes the label $\mathbf 1$, height $1$ denotes $\psi$, and a vertex marked $\sigma$ denotes an empty site. Set $Q_{hh'}=\delta_{h',h+1}$. The two nontrivial height placements of a trivalent junction of two $\sigma$ lines and one $\psi$ line have the following weights: when the vertex between the two $\sigma$ lines has ordinary height $h$ and the other vertices are empty, the weight is $T_{\sigma\sigma\psi}(h)$; when that vertex is empty and the other two have ordinary heights $h,h'$, the weight is $T_{\sigma\psi\sigma}(h,h')$. Explicitly,

$$
T_{\sigma\sigma\psi}(h)=2^{-1/4}(-1)^h,\qquad T_{\sigma\psi\sigma}(h,h')=Q_{hh'}.
$$

The identity-defect termination tensors have the following four orientations: the first two represent the two local orientations of the $\sigma\otimes\sigma\to\mathbf 1$ unit channel, and the last two represent the two local orientations of the $\psi\otimes\psi\to\mathbf 1$ unit channel. In each case the dashed third edge has label $\mathbf 1$ and the two sloping defect edges have the indicated common label:

- For defect label $\sigma$, when the upper vertex has height $h$ and the two lower vertices are empty sites, the tensor is $2^{-1/4}$.
- For defect label $\sigma$, when the upper vertex is empty and the lower vertices have heights $h,h'$, the tensor is $\delta_{hh'}$.
- For defect label $\psi$, when all three site vertices are empty, the tensor is $2^{-1/4}$.
- For defect label $\psi$, when the upper vertex has dual height $\widetilde h$ and the lower vertices have heights $h,h'$, the tensor is $Q_{h\widetilde h}\delta_{hh'}$.

In the last orientation, $\widetilde h$ is the upper dual-basis height and $h,h'$ are the lower ordinary heights, all in $\mathbb Z_2$. The mixed index $Q_{h\widetilde h}$ uses the same $h$ as $\delta_{hh'}$; there is no second independent dual height. Reversed orientations use adjoint tensors; every fusion-forbidden label or height assignment has weight zero, and all components outside the stated domains are zero. The other allowed channels use their unit basis maps of coefficient $1$. These local triangles and the abstract channel maps above are the adopted junction data of this finite network model, not consequences of the fusion multiplicities alone.

The complete admissible input domain is declared as follows. Each input is a finite decorated lattice tensor network with boundary vectors or boundary tensors, arbitrary finite ordinary insertion matrices, propagation tensors $e^{-sH_L}$ (or their dual versions), and any finite number of the wrapping defects and local trivalent junction tensors above, with their oriented site orderings. Local height edges have index set $\{0,1\}$, empty-site edges have the singleton label $\sigma$, and row edges have index set $\mathbb Z_2^L$. Matching edges are contracted only when their index sets and model sides agree; reversal uses the stated adjoint tensor. Boundary vectors and all uncontracted indices are part of the combined boundary data. The correlator is the unnormalized complex number

$$
C(\Gamma;b;O_1,\ldots,O_n)=\sum_{\text{internal admissible indices}}\left(\prod_v d_v\right)\left(\prod_{t\in\Gamma}\mathcal T_t(\text{incident indices})\right),\qquad d_v=\begin{cases}1,&\text{ordinary spin site},\\\sqrt2,&\text{empty site}.\end{cases}
$$

Here the finite graph $\Gamma$ records all sites, incidences, side labels, tensor orientations, and the external boundary contraction; $\mathcal T_t$ is exactly the specified matrix component or local triangle component at $t$. The product over $v$ runs over local patch sites whose factors are not already absorbed into a row tensor; row matrices have their displayed normalization. Every site weight is included once; if a site is split among patches, its positive factors are split with product $d_v$. Unit defect quadrilaterals carry $2^{-1/4}\delta_{a\alpha}\delta_{b\beta}$, and a duality quadrilateral carries $2^{-1/2}(-1)^{ab}$ at its two ordinary corners; forbidden assignments vanish. These give a fully finite contraction prescription, including the source's site-weight convention, rather than inferring network correlators from fusion multiplicities. On a row with no extra local junction patch it is exactly the ordered matrix element already specified. Reflection identifications permute the row and boundary indices consistently and do not change a contraction. The value space is $\mathbb C$ with its usual topology. A declared line slide moves an entire $I$, $P_L$ or $D_L$ slice within a gap containing no other tensor insertion, leaving all boundary tensors fixed. Junction recouplings compare the two local contractions with the same external height indices, including site factors; equality or a specified linear combination must hold before the rest of the graph is contracted. No arbitrary continuum network or additional support deformation is asserted.

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
1.1 In the $K_L$ kernel, toggling the input height $h_j$ changes the exponent by $\widehat h_{j-1/2}+\widehat h_{j+1/2}$, while multiplying the input by $Z_jZ_{j+1}$ contributes $(-1)^{h_j+h_{j+1}}$, which is the exponent change from toggling $\widehat h_{j+1/2}$. Thus $K_LX_j=\widehat Z_{j-1/2}\widehat Z_{j+1/2}K_L$ and $K_LZ_jZ_{j+1}=\widehat X_{j+1/2}K_L$. Summing gives $K_LH_L=\widehat H_LK_L$. The reflection sends $\widehat X_{j+1/2}$ to $X_{-j}$ and $\widehat Z_{j-1/2}\widehat Z_{j+1/2}$ to $Z_{1-j}Z_{-j}$; reindexing the periodic sums gives $R_L\widehat H_L=H_LR_L$, and consequently $D_LH_L=H_LD_L$. To check the square convention, put $k=1-j$ in the exponent of $D_L$ to write it as $\sum_k r_k(h_{-k}+h_{1-k})$; the two conditions on a pair of indices are $k+j=0$ and $k+j=1$, each symmetric. Hence $D_L^\dagger=D_L$ and $D_L^2=(R_LK_L)^\dagger R_LK_L=K_L^\dagger K_L$. [A1, given, algebra]

1.2 Computing $K_L^\dagger K_L=D_L^2$ by summing over the intermediate dual heights gives $\langle\mathbf h'|D_L^2|\mathbf h\rangle=2^{-L}\sum_{\widehat{\mathbf h}\in\mathbb Z_2^L}(-1)^{\sum_j\widehat h_{j-1/2}(h_{j-1}+h_j+h'_{j-1}+h'_j)}=\prod_j\delta_{d_{j-1},d_j}$, where $d_j=h_j+h'_j$ in $\mathbb Z_2$ and each sum $\sum_{u\in\mathbb Z_2}(-1)^{ur}$ equals $2$ if $r=0$ and $0$ if $r=1$. The constraints force all $d_j$ to be the same bit, so $\mathbf h'=\mathbf h$ or $\mathbf h'=\mathbf h+\mathbf 1$. These are exactly the matrix elements of $I+P_L$, proving $D_L^2=I+P_L$. Applying the same character sum to $K_LK_L^\dagger$ on the dual side imposes constant neighboring differences of the dual heights, proving $K_LK_L^\dagger=I+\widehat P_L$ as well. [A1, given, algebra]

1.3 Put $t=2^{-1/4}$, $Z_{hh'}=(-1)^h\delta_{hh'}$ and $Q_{hh'}=\delta_{h',h+1}$. The corrected identity-termination component is $Q_{h\widetilde h}\delta_{hh'}$, as in the source's equation (4.4); it sets $h'=h$ and $\widetilde h=h+1$, not an unrelated pair of dual heights. Local contractions use $\sum_k\delta_{hk}\delta_{kh'}=\delta_{hh'}$, $\sum_kQ_{hk}Q_{kh'}=\delta_{hh'}$, and $\sum_kZ_{hk}Z_{kh'}=\delta_{hh'}$. The scalar from a pair of empty-site termination triangles is $t^2=1/\sqrt2$; inserting the additional empty site contributes $\sqrt2$, so its total scalar is $1$. Thus the identity-channel and all unit-leg recouplings have coefficient $1$. [A1, given, algebra]

2.1 Induction gives $D_LH_L^n=H_L^nD_L$ for every $n\ge0$. The finite-dimensional exponential series converges absolutely, so termwise equality yields $D_Le^{-sH_L}=e^{-sH_L}D_L$ for every $s\ge0$. [A1, step 1.1, algebra]

2.2 Toggling every input height leaves the kernel unchanged because each neighboring pair changes by $1+1=0$ in $\mathbb Z_2$; shifting every output dual height leaves it unchanged because $\sum_j(h_{j-1}+h_j)=0$ in $\mathbb Z_2$. Hence $D_LP_L=P_LD_L=D_L$, while $P_L^2=I$ by $X_j^2=I$. Moreover $P_L$ commutes with every $X_j$, and conjugation by $P_L$ changes the signs of both factors of each $Z_jZ_{j+1}$, so $P_LH_L=H_LP_L$. The fusion operators therefore satisfy the stated Ising fusion table, and all three line labels commute with propagation. [A1, step 1.2, algebra]

2.3 For the four-$\sigma$ patch, fix its two ordinary external heights $h,h'$. The horizontal unit and $\psi$ resolutions have components $A_0(h,h')=t^2=1/\sqrt2$ and $A_1(h,h')=t^2(-1)^{h+h'}$. The vertical resolutions have components $B_0(h,h')=\delta_{hh'}\delta_{hh'}=\delta_{hh'}$ and $B_1(h,h')=Q_{hh'}Q_{hh'}=Q_{hh'}$: the two triangles share the same ordinary corner heights, and the empty corners have no summation index. Since $\delta_{hh'}+Q_{hh'}=1$ and $\delta_{hh'}-Q_{hh'}=(-1)^{h+h'}$, these give $A_a=2^{-1/2}(B_0+(-1)^aB_1)$ for each $a\in\{0,1\}$ and every external height assignment. Rotation gives the inverse relation, with the same real symmetric Hadamard matrix. These are the two rows of the source's local identities (4.14)–(4.15), now verified componentwise; hence $[F^{\sigma\sigma\sigma}_\sigma]_{ab}=2^{-1/2}(-1)^{ab}$. [A1, step 1.3, algebra]

3.1 If the defect time $\tau$ moves inside a gap $(t_a,t_{a+1})$ with no other tensor insertion, the two adjacent propagators combine as $e^{-(t_{a+1}-\tau)H_L}D_Le^{-(\tau-t_a)H_L}=D_Le^{-(t_{a+1}-t_a)H_L}$ by [step 2.1] and the semigroup law. All other factors in the correlator stay fixed, so its matrix element is independent of $\tau$. The same calculation applies to $P_L$ by step 2.2 and trivially to $I$. These are equalities of matrices with all external row indices fixed, so they remain valid inside every declared complete network contraction, for every fixed boundary tensor. Thus every declared line-slide preserves the complete correlator. [A1, F1, step 2.1, step 2.2, algebra]

4.1 The mixed resolutions reduce, after the common positive factors from step 1.3, to moving a shift $Q^a$ past a sign $Z^b$, with $a,b\in\{0,1\}$ the ordinary labels $\mathbf 1,\psi$. Their exact contractions are $\sum_k(Z^b)_{hk}(Q^a)_{kh'}=(-1)^{bh}\delta_{h',h+a}$ and $\sum_k(Q^a)_{hk}(Z^b)_{kh'}=(-1)^{bh'}\delta_{h',h+a}$. The ratio is $(-1)^{ab}$ on every nonzero component. For external labels $(\sigma,b,\sigma)$ and output $a$, or $(a,\sigma,b)$ and output $\sigma$, these are respectively the two orders of the sign and shift triangles; thus $F^{\sigma b\sigma}_a=F^{a\sigma b}_\sigma=(-1)^{ab}$. This gives precisely the two exceptional negative coefficients. All remaining nonunit one-channel cases are $\psi\psi\psi\to\psi$, $\psi\psi\sigma\to\sigma$, $\sigma\psi\psi\to\sigma$, and $\psi\sigma\sigma$, $\sigma\sigma\psi\to\mathbf 1$ or $\psi$; their paired shift or sign factors reduce by the three contraction identities in step 1.3 and have coefficient $1$. Forbidden channels have zero components by definition. This exhausts the triples without a unit leg; triples with a unit were covered in step 1.3. The coefficients are exactly those in [F3], and their unitarity and pentagon from [F4] ensure consistency of successive recouplings. Every identity holds for fixed external indices, so multiplying by any remaining network tensors and summing the finitely many shared indices proves the corresponding full-correlator identity. This recoupling argument is separate from the line-slide calculation in step 3.1. [A1, F3, F4, step 1.3, step 2.3, algebra]

5.1 Since $P_L$ is nontrivial (it sends $|0,\ldots,0\rangle$ to $|1,\ldots,1\rangle$), the relation $D_LP_L=D_L$ would imply $P_L=I$ if $D_L$ had a left inverse, a contradiction. Thus $D_L$ has no two-sided inverse. Steps 1.3, 2.2, 2.3, 3.1, and 4.1 establish operator fusion, topologicality, and coherent junction data for the finite model; this is a conditional lattice-model deduction, not an empirical or continuum claim. [A1, F2, F4, step 1.3, step 2.2, step 2.3, step 3.1, step 4.1] ∎

## Remarks

The square records the exact local intertwiner used in step 1.1. Its commutativity follows from the displayed kernel calculation; no proof relies on the diagram.

```tikzcd
\mathcal H_L \arrow[r,"K_L"] \arrow[d,"Z_jZ_{j+1}"'] & \widehat{\mathcal H}_L \arrow[d,"\widehat X_{j+1/2}"] \\
\mathcal H_L \arrow[r,"K_L"'] & \widehat{\mathcal H}_L
```
