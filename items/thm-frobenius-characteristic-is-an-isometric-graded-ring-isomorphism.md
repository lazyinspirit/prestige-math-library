---
id: thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism
kind: theorem
title: "The Frobenius characteristic is an isometric graded ring isomorphism"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-graded-ordinary-representation-ring-of-symmetric-groups
  - def-outer-induction-product-for-symmetric-group-characters
  - def-frobenius-characteristic-map
  - lem-frobenius-characteristic-is-an-isometry
  - lem-characteristic-of-a-young-permutation-character-is-complete
  - lem-frobenius-characteristic-preserves-outer-products
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - thm-youngs-rule-for-permutation-modules
  - lem-kostka-change-of-basis-is-dominance-unitriangular
  - def-virtual-character-and-character-ring-of-a-finite-group
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - thm-characters-of-direct-sums-tensor-products-and-duals
  - thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
  - cor-distinct-specht-modules-are-inequivalent
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "(7.3) and its proof, printed pp. 113–114 (ch is an isometric isomorphism of rings)"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, §6 and §16"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§6, printed pp. 22–26; §16 (Theorem 16.4), printed pp. 60–64"
---

## Statement

Restrict the characteristic map to the integral lattice
$R_S=\bigoplus_{n\ge0}R(S_n)$ of
[[def-graded-ordinary-representation-ring-of-symmetric-groups]]. Then

$$\operatorname{ch}:R_S\longrightarrow\Lambda$$

is a degree-preserving $\mathbb Z$-module isomorphism. It carries the outer
induction product $\circ$ of
[[def-outer-induction-product-for-symmetric-group-characters]] to
multiplication, $\operatorname{ch}(f\circ g)=\operatorname{ch}(f)\operatorname{ch}(g)$,
and the unit (the trivial character of $S_0$) to $1$; consequently $R_S$ is a
commutative graded $\mathbb Z$-algebra and $\operatorname{ch}$ is an
isomorphism of graded rings onto $\Lambda$. With the sesquilinear Hall form,
$\operatorname{ch}$ is an isometry as in
[[lem-frobenius-characteristic-is-an-isometry]]. After scalar extension,
$\operatorname{ch}\otimes\mathbb Q:R_{S,\mathbb Q}\to\Lambda_{\mathbb Q}$ and
$\operatorname{ch}\otimes\mathbb C:R_{S,\mathbb C}\to\Lambda_{\mathbb C}$ are
isomorphisms. No choice principle is used.

## Facts & Assumptions

**Given:** An integer $n\ge0$, the graded abelian group $R_S=\bigoplus_nR(S_n)$ with the outer product $\circ$, the characteristic map $\operatorname{ch}$ on $\mathrm{cf}_S$, and the Specht characters $\chi^\lambda$ of $S_n$.

[F1] $R(S_n)$ is the character ring of $S_n$, the integral span of its irreducible complex characters; $R_S$ is the direct sum of the $R(S_n)$ with degree-$n$ homogeneous parts, and $R_{S,\mathbb Q}=\mathbb Q\otimes_{\mathbb Z}R_S$, $R_{S,\mathbb C}=\mathbb C\otimes_{\mathbb Z}R_S$ ([[def-graded-ordinary-representation-ring-of-symmetric-groups]]).

[F2] For $f=\sum_ia_i\chi_i\in R(S_m)$, $g=\sum_jb_j\psi_j\in R(S_n)$, the outer product is $f\circ g=\sum_{i,j}a_ib_j\operatorname{Ind}_{S_m\times S_n}^{S_{m+n}}(\chi_i\boxtimes\psi_j)$; it is $\mathbb Z$-bilinear and maps $R(S_m)\times R(S_n)$ into $R(S_{m+n})$, and the trivial character of $S_0$ is the unit ([[def-outer-induction-product-for-symmetric-group-characters]]).

[F3] $\operatorname{ch}(f)=\sum_{\rho\vdash n}f(\rho)p_\rho/z_\rho$ on $\mathrm{cf}(S_n)$ and $\operatorname{ch}$ is linear on $\mathrm{cf}_S$; the degree-$n$ component of $\operatorname{ch}(f)$ for $f\in\mathrm{cf}(S_m)$ is zero when $n\ne m$, so $\operatorname{ch}$ preserves degrees ([[def-frobenius-characteristic-map]]).

[F4] $\langle\operatorname{ch}(f),\operatorname{ch}(g)\rangle_H=\langle f,g\rangle_{S_n}$ for all $f,g\in\mathrm{cf}(S_n)$, $\operatorname{ch}$ is injective on $\mathrm{cf}(S_n)$, and $\langle f,f\rangle_{S_n}=\sum_{\rho\vdash n}|f(\rho)|^2/z_\rho$ vanishes only for $f=0$ ([[lem-frobenius-characteristic-is-an-isometry]]).

[F5] For every $\mu\vdash n$, $\operatorname{ch}(\varphi^\mu)=h_\mu$, where $\varphi^\mu$ is the character of the Young permutation module $M^\mu$ ([[lem-characteristic-of-a-young-permutation-character-is-complete]]).

[F6] $\operatorname{ch}(f\circ g)=\operatorname{ch}(f)\operatorname{ch}(g)$ for all $f\in R(S_m)$, $g\in R(S_n)$ ([[lem-frobenius-characteristic-preserves-outer-products]]).

[F7] For every $d\ge0$, $\{h_\mu:\mu\vdash d\}$ is a $\mathbb Z$-basis of $\Lambda^d$ ([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F8] Young's rule: $M^\mu\cong\bigoplus_{\lambda\vdash n}(S^\lambda)^{\oplus K_{\lambda\mu}}$, so $\varphi^\mu=\sum_{\lambda\vdash n}K_{\lambda\mu}\chi^\lambda$ by additivity of characters ([[thm-youngs-rule-for-permutation-modules]], [[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[F9] The matrix $(K_{\lambda\mu})$ satisfies $h_\mu=\sum_\lambda K_{\lambda\mu}s_\lambda$ and is unitriangular in a linear extension of dominance, hence invertible over $\mathbb Z$ ([[lem-kostka-change-of-basis-is-dominance-unitriangular]]).

[F10] Every finite-dimensional complex representation of $S_n$ is completely reducible (Maschke's theorem over $\mathbb C$), and the modules $\{S^\lambda:\lambda\vdash n\}$ are pairwise inequivalent and exhaust the irreducible complex $S_n$-representations; hence every honest character of $S_n$ is a nonnegative integral combination of the $\chi^\lambda$, and the family $\{\chi^\lambda:\lambda\vdash n\}$ is a $\mathbb Z$-basis of $R(S_n)$ ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]], [[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]], [[cor-distinct-specht-modules-are-inequivalent]], [[def-virtual-character-and-character-ring-of-a-finite-group]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

## Proof

**Proof technique:** direct.

1.1 Membership $\operatorname{ch}(R(S_n))\subseteq\Lambda^n$: for $\mu\vdash n$, [F8] gives $\varphi^\mu=\sum_{\lambda}K_{\lambda\mu}\chi^\lambda\in R(S_n)$ and [F5] gives $\operatorname{ch}(\varphi^\mu)=h_\mu\in\Lambda^n$. Since $(K_{\lambda\mu})$ is invertible over $\mathbb Z$ [F9], each $\chi^\lambda=\sum_\mu(K^{-1})_{\mu\lambda}\varphi^\mu$ and, by linearity of $\operatorname{ch}$ [F3], $\operatorname{ch}(\chi^\lambda)=\sum_\mu(K^{-1})_{\mu\lambda}h_\mu\in\Lambda^n$. As the $\chi^\lambda$ span $R(S_n)$ over $\mathbb Z$ [F10], $\operatorname{ch}(R(S_n))\subseteq\Lambda^n$ for every $n$, hence $\operatorname{ch}(R_S)\subseteq\Lambda$. [F3, F5, F8, F9, F10]

1.2 Injectivity: if $f=\sum_nf_n\in R_S$ satisfies $\operatorname{ch}(f)=0$, then each degree component $\operatorname{ch}(f_n)$ vanishes by degree preservation [F3]; the isometry formula [F4] then gives $\langle f_n,f_n\rangle_{S_n}=\langle\operatorname{ch}(f_n),\operatorname{ch}(f_n)\rangle_H=0$, and vanishing of $\sum_{\rho\vdash n}|f_n(\rho)|^2/z_\rho$ forces $f_n=0$; hence $f=0$ and $\operatorname{ch}$ is injective on $R_S$. [F3, F4]

1.3 Multiplicativity and unit: for homogeneous $f\in R(S_m)$, $g\in R(S_n)$ one has $\operatorname{ch}(f\circ g)=\operatorname{ch}(f)\operatorname{ch}(g)$ [F6]; for general $f=\sum_mf_m$, $g=\sum_ng_n$ bilinearity of $\circ$ [F2] and linearity of $\operatorname{ch}$ [F3] give $\operatorname{ch}(f\circ g)=\sum_{m,n}\operatorname{ch}(f_m)\operatorname{ch}(g_n)=\operatorname{ch}(f)\operatorname{ch}(g)$. For the trivial character $e$ of $S_0$ one has $\operatorname{ch}(e)=e(\varnothing)p_\varnothing/z_\varnothing=1$ since $e(\varnothing)=1$ and $z_\varnothing=p_\varnothing=1$. [F2, F3, F6]

2.1 Surjectivity onto $\Lambda$: step 1.1 shows $\operatorname{ch}(R_S)\subseteq\Lambda$, and $h_\mu=\operatorname{ch}(\varphi^\mu)\in\operatorname{ch}(R_S)$ for every partition $\mu$ [F5]; since $\{h_\mu:\mu\vdash d\}$ is a $\mathbb Z$-basis of $\Lambda^d$ for every $d$ [F7], the image contains a $\mathbb Z$-basis of $\Lambda$ and therefore equals $\Lambda$. [F5, F7, step 1.1]

3.1 By steps 1.1, 2.1 and 1.2 the map $\operatorname{ch}:R_S\to\Lambda$ is a bijective degree-preserving $\mathbb Z$-linear map, hence a $\mathbb Z$-module isomorphism; by step 1.3 it is multiplicative and sends the unit to $1$. Transporting the ring axioms of $\Lambda$ along the bijection: for $f,g,h\in R_S$, associativity and commutativity of $\circ$ follow from $\operatorname{ch}((f\circ g)\circ h)=\operatorname{ch}(f)\operatorname{ch}(g)\operatorname{ch}(h)=\operatorname{ch}(f\circ(g\circ h))$ and $\operatorname{ch}(f\circ g)=\operatorname{ch}(g\circ f)$ together with injectivity of $\operatorname{ch}$, distributivity is the bilinearity of $\circ$ [F2], and $e\circ f=f$ because $\operatorname{ch}(e\circ f)=1\cdot\operatorname{ch}(f)$; so $R_S$ is a commutative graded $\mathbb Z$-algebra and $\operatorname{ch}$ is a graded ring isomorphism. The isometry clause is [F4]. [F2, F3, F4, step 1.2, step 1.3, step 2.1]

4.1 Both $R_S$ and $\Lambda$ are free $\mathbb Z$-modules, graded with finitely generated homogeneous components; a $\mathbb Z$-module isomorphism between them remains an isomorphism after tensoring with $\mathbb Q$ or $\mathbb C$, with inverse $\operatorname{ch}^{-1}\otimes\mathrm{id}$. Hence $\operatorname{ch}\otimes\mathbb Q:R_{S,\mathbb Q}\to\Lambda_{\mathbb Q}$ and $\operatorname{ch}\otimes\mathbb C:R_{S,\mathbb C}\to\Lambda_{\mathbb C}$ are isomorphisms. [F1, step 3.1, algebra] ∎
