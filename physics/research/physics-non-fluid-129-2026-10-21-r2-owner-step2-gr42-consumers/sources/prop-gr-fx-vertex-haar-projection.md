---
id: prop-gr-fx-vertex-haar-projection
kind: proposition
title: Finite graph vertex Haar averaging is an orthogonal projection
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-discrete-holonomy-model
  - prop-gr-fx-su2-compact
  - def-axiom-of-choice
  - cor-normalized-haar-probability-on-a-compact-group
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-strongly-continuous-unitary-representation
  - def-bounded-linear-operator
  - def-tensor-product-of-complex-representations
  - def-dual-complex-representation
  - def-haar-averaging-operator-on-hom-spaces
  - lem-haar-averaging-projects-onto-the-intertwiner-space
  - def-orthogonal-projection
dependency_roles:
  def-gr-fx-discrete-holonomy-model: mathematical-premise
  prop-gr-fx-su2-compact: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  cor-normalized-haar-probability-on-a-compact-group: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-strongly-continuous-unitary-representation: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-tensor-product-of-complex-representations: mathematical-premise
  def-dual-complex-representation: mathematical-premise
  def-haar-averaging-operator-on-hom-spaces: mathematical-premise
  lem-haar-averaging-projects-onto-the-intertwiner-space: mathematical-premise
  def-orthogonal-projection: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "John C. Baez, Spin Network States in Gauge Theory, arXiv:gr-qc/9411007, §2"
      url: "https://arxiv.org/pdf/gr-qc/9411007"
      locator: "§2, invariant tensors and intertwiners at finite graph vertices."
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (2025), §§5.2.1 and 5.2.11"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory-2025.pdf"
      locator: "The compact-group Haar theorem and averaging inner products; the exact projection interface and its full AC premise are supplied by the linked local Haar theorem."
verification:
  precheck: pass
---

## Statement

Assume the full Axiom of Choice. Let a finite oriented graph be given, fix total orders on its finite vertex and edge sets, and for each edge $e$ choose a finite-dimensional strongly continuous unitary representation $\rho_e:SU(2)\to U(V_e)$. At a vertex $v$ set

$$W_v=\bigotimes_{t(e)=v}V_e\;\otimes\!\bigotimes_{s(e)=v}V_e^*,$$

where the edge order induces the order on each factor list and an empty tensor product is $\mathbb C$. Use the dual action $g\cdot\lambda=\lambda\circ\rho_e(g^{-1})$ on $V_e^*$, with the dual Hilbert inner product determined by any orthonormal basis of $V_e$. On elementary tensors use the tensor-product inner product $\langle\bigotimes_i u_i,\bigotimes_i w_i\rangle=\prod_i\langle u_i,w_i\rangle$, extended sesquilinearly. Let $R_v$ be the resulting diagonal unitary representation and define its fixed-vector subspace by

$$W_v^{SU(2)}:=\{w\in W_v:R_v(g)w=w\text{ for every }g\in SU(2)\}.$$

An orthogonal projection onto a subspace $S\subseteq W_v$, regarded as an endomorphism of $W_v$, is the idempotent with range $S$ and kernel $S^\perp$.

For the normalized Haar probability measure $\mu$ on $SU(2)$,

$$P_vw:=\int_{SU(2)}R_v(g)w\,d\mu(g)$$

is the orthogonal projection of $W_v$ onto its invariant subspace $W_v^{SU(2)}$. The vector integral is defined coordinatewise in the finite-dimensional space, equivalently by the weak integral in [[def-haar-averaging-operator-on-hom-spaces]]. On the coefficient space $W=\bigotimes_{v\in V}W_v$, with vertex order fixed as above, the operators $P_v$ acting on their respective vertex factors commute, and $\prod_{v\in V}P_v$ projects onto the tensors invariant at every vertex. This is a finite kinematic projection; it imposes no Hamiltonian or continuum constraint.

## Statement references

[[def-gr-fx-discrete-holonomy-model]]

[[prop-gr-fx-su2-compact]]

[[def-axiom-of-choice]]

[[cor-normalized-haar-probability-on-a-compact-group]]

[[def-hilbert-space]]

[[def-real-and-complex-inner-product-space]]

[[def-strongly-continuous-unitary-representation]]

[[def-bounded-linear-operator]]

[[def-tensor-product-of-complex-representations]]

[[def-dual-complex-representation]]

[[def-haar-averaging-operator-on-hom-spaces]]

[[lem-haar-averaging-projects-onto-the-intertwiner-space]]

[[def-orthogonal-projection]]

## Facts & Assumptions

**Given:** Full AC, compact Hausdorff $SU(2)$, finite-dimensional strongly continuous unitary edge representations, and the finite graph data of Definition [[def-gr-fx-discrete-holonomy-model]].

[F1] [[prop-gr-fx-su2-compact]]: $SU(2)$ with its matrix topology is a compact Hausdorff group.

[F2] [[def-axiom-of-choice]]: full AC is the adopted set-theoretic principle; it is stronger than the countable-choice assumption used in the tetrad supplier.

[F3] [[def-tensor-product-of-complex-representations]]: a finite tensor product carries the diagonal tensor-product representation on the algebraic tensor product.

[F4] [[def-dual-complex-representation]]: the dual representation acts by $g\cdot\lambda=\lambda\circ\rho(g^{-1})$.

[F5] [[cor-normalized-haar-probability-on-a-compact-group]]: under AC, a compact Hausdorff group has a unique normalized Haar probability measure.

[F6] [[def-hilbert-space]] and [[def-real-and-complex-inner-product-space]]: the spaces here are complex Hilbert spaces with the stated inner products.

[F7] [[def-strongly-continuous-unitary-representation]]: a unitary representation is a group homomorphism into the unitary operators, and strong continuity means each orbit map is continuous.

[F8] [[def-bounded-linear-operator]]: a bounded linear operator has finite operator norm and obeys $\|Tv\|\le\|T\|\|v\|$.

[F9] [[def-haar-averaging-operator-on-hom-spaces]]: normalized Haar averaging is defined for compact Hausdorff groups and strongly continuous unitary representations on complex Hilbert spaces.

[F10] [[lem-haar-averaging-projects-onto-the-intertwiner-space]]: under full AC and those compactness/continuity hypotheses, the averaged operator is a contractive idempotent whose range is the bounded intertwiner space.

[F11] [[def-orthogonal-projection]]: on a finite-dimensional inner-product space, the orthogonal projection onto a subspace is the component map associated with the orthogonal direct sum of that subspace and its orthogonal complement.

## Proof

**Proof technique:** direct application of Haar averaging and Hilbert geometry.

1.1 For each dual factor, choose an orthonormal basis of $V_e$ and use its dual-basis inner product; this is basis-independent because a change between orthonormal bases preserves the Euclidean coefficient norm. The matrix of the dual action is the transpose of the inverse unitary matrix, hence is unitary. Tensor products of orthonormal bases are an orthonormal basis for the displayed tensor inner product, so the diagonal action is unitary by [F3]–[F4]. Its matrix entries are finite sums and products of continuous entries of the edge representations, so [F7] makes $R_v$ strongly continuous. [given, F3, F4, F7, algebra]

2.1 For fixed $w\in W_v$, define $T_w:\mathbb C\to W_v$ by $T_w(z)=zw$, with the trivial representation on $\mathbb C$. It is linear and bounded by [F8], with $\|T_w\|=\|w\|$. The intertwining equation $T_w(z)=R_v(g)T_w(z)$ for all $z$ is equivalent to $w\in W_v^{SU(2)}$. [given, F6, F8, step 1.1, algebra]

3.1 By [F1], $SU(2)$ is compact Hausdorff; by [F2] and [F5], its normalized Haar probability exists under the stated full AC assumption. The hypotheses of [F9]–[F10] now hold for $H=\mathbb C$, $J=W_v$, and $T=T_w$, using [F6], [F7], and steps 1.1–1.2. Since the trivial representation acts as the identity, the weak Haar average of $T_w$ is $T_{P_vw}$, where the finite-dimensional vector integral is defined coordinatewise. The range clause of [F10] therefore gives $P_v^2=P_v$, $\|P_v\|\le1$, and $\operatorname{ran}P_v=W_v^{SU(2)}$. [given, F1, F2, F5, F6, F7, F9, F10, step 1.1, step 2.1, algebra]

4.1 If $x\in\operatorname{ran}P_v$ and $y\in\ker P_v$, then $P_v(x+ty)=x$ for every complex scalar $t$. Contractivity gives $\|x\|\le\|x+ty\|$. Squaring and taking real $t$ of both signs forces $\operatorname{Re}\langle x,y\rangle=0$; taking $t$ purely imaginary of both signs forces $\operatorname{Im}\langle x,y\rangle=0$. Hence range and kernel are orthogonal. Since an idempotent has $W_v=\operatorname{ran}P_v\oplus\ker P_v$, the kernel is the orthogonal complement of the range, and [F11] identifies $P_v$ as the orthogonal projection onto its invariant range. [given, F10, F11, step 3.1, algebra]

5.1 On $W=\bigotimes_vW_v$, each vertex operator acts as $P_v$ on one factor and identity on the others. Operators on distinct tensor factors commute, so their product is an idempotent whose range is $\bigotimes_v\operatorname{ran}P_v$, the tensors invariant under every vertex action. It is the orthogonal projection onto this joint invariant subspace because tensor products of orthogonal projections are orthogonal projections in the product Hilbert structure. If the graph has no vertices, the empty product is the identity on $\mathbb C$, consistent with the statement. [given, F3, F6, step 4.1, algebra] ∎

## Remarks

The imported Haar theorem's full-Axiom-of-Choice hypothesis is retained explicitly; compactness or finite dimension does not remove that adopted premise from this supplier interface. The projection concerns finite vertex representation spaces only and does not construct a physical Hilbert space for gravity.
