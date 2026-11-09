---
id: def-multiplicative-filtered-spectrum
kind: definition
title: Multiplicative filtrations and graded products
status: published
domain: mathematics
deps:
  - def-decreasing-filtered-spectrum
  - def-stable-spectra-interface
dependency_roles:
  def-decreasing-filtered-spectrum: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 5
---

## Definition
A **decreasing filtered spectrum** is a coherent diagram $F$ in spectra indexed by the integers, with a transition map $F^i\to F^k$ whenever $i\geq k$, as in [[def-decreasing-filtered-spectrum]]. Write $\operatorname{FilSp}$ for the infinity-category of such diagrams and coherent natural transformations. A **multiplicative filtered spectrum**, written $F\in\operatorname{CAlg}(\operatorname{FilSp})$, is such a diagram equipped with coherently compatible symmetric, associative and unital multiplication data: for every finite ordered list $(i_1,\ldots,i_n)$, including the empty list, there is a map

$$\mu_{i_1,\ldots,i_n}:F^{i_1}\wedge\cdots\wedge F^{i_n}\longrightarrow F^{i_1+\cdots+i_n}.$$

The empty smash product is the sphere spectrum $\mathbb S$, and the empty sum is $0$. The maps are compatible with all transition maps and permutations, with substitution of lists into lists, and with the unit, together with all higher homotopies required for a commutative algebra object. In particular, the one-input operation is the identity up to the specified coherent identification. Thus the notation specifies coherent data; unrelated binary pairings do not suffice.

A multiplicative filtration **on a commutative ring spectrum $E$** additionally has a coherent multiplicative augmentation $F\to\operatorname{const}(E)$: its component maps $F^i\to E$ form an augmentation of the underlying tower, and the $n$-input products commute with these maps and the $n$-fold product of $E$, coherently. A commutative ring spectrum means a commutative algebra object in spectra under smash product; $\operatorname{const}(E)$ is its constant filtered diagram.

Put $\operatorname{gr}^iF=\operatorname{cofib}(F^{i+1}\to F^i)$ and write $q_i:F^i\to\operatorname{gr}^iF$ for the canonical cofiber map. The **associated graded multiplication** is the coherent family

$$\overline\mu_{i,j}:\operatorname{gr}^iF\wedge\operatorname{gr}^jF\longrightarrow\operatorname{gr}^{i+j}F$$

induced by $\mu_{i,j}$. It satisfies $\overline\mu_{i,j}(q_i\wedge q_j)\simeq q_{i+j}\mu_{i,j}$. These are maps from filtration stages to graded pieces; the definition does not assert that there is a map from $E$ or from an image subgroup of $\pi_*E$ to a graded piece.

## Facts & Assumptions

**Given:** A coherent decreasing filtered spectrum $F$ with the specified commutative multiplication data, and, when a filtration on $E$ is discussed, a commutative ring spectrum $E$ and multiplicative augmentation as above.

**Goal:** Justify the indexing, the associated graded products and their compatibility with the cofiber maps.

[F1] [[def-decreasing-filtered-spectrum]] supplies the tower, its transition maps and the cofiber definition of the associated graded.

[F2] [[def-stable-spectra-interface]] supplies the symmetric monoidal stable infinity-category of spectra, the sphere unit, coherent diagrams and cofibers. Smash product preserves colimits separately in each variable.

## Justification

1.1 If $i_r\geq k_r$ for every $r$, then $\sum i_r\geq\sum k_r$, so the indicated target transition map exists. Addition is associative and commutative with identity $0$; consequently the stated compatibility, symmetry and substitution requirements have matching source and target indices. The augmentation is a coherent natural transformation to the constant tower, with additional compatibility with all products. These clauses specify structure and do not assert that every tower admits it. [F1, F2, given]

2.1 For fixed $i,j$, compatibility with transitions identifies the restriction of $\mu_{i,j}$ along $F^{i+1}\wedge F^j\to F^i\wedge F^j$ with a map factoring through $F^{i+j+1}\to F^{i+j}$; the same holds for $F^i\wedge F^{j+1}$. Hence their composites with $q_{i+j}$ have the canonical coherent nullhomotopies coming from the cofiber. Compatibility on their common corner follows from the coherent multiplication and transition data. [F1, F2, given, step 1.1]

3.1 Since smash preserves colimits separately, $\operatorname{gr}^iF\wedge\operatorname{gr}^jF$ is the iterated cofiber of the square with corners $F^{i+1}\wedge F^{j+1}$, $F^{i+1}\wedge F^j$, $F^i\wedge F^{j+1}$ and $F^i\wedge F^j$. The compatible nullhomotopies in step 2.1 therefore induce $\overline\mu_{i,j}$ by the universal property of that iterated cofiber, and its composite with $q_i\wedge q_j$ is $q_{i+j}\mu_{i,j}$. [F2, step 2.1, construct]

4.1 The same construction for any finite list uses the cube formed by replacing each $F^{i_r}$ by $F^{i_r+1}$ in every possible subset of inputs. Its iterated cofiber is the smash of the corresponding graded pieces, and every face with a raised index maps through $F^{\sum i_r+1}$. The coherent permutation, substitution and unit data of $F$ descend through these universal cofiber constructions. Thus the graded products are coherently commutative, associative and unital, with unit $\mathbb S\to F^0\xrightarrow{q_0}\operatorname{gr}^0F$. Together with step 3.1 this justifies the definition. [F1, F2, given, step 3.1] ∎
