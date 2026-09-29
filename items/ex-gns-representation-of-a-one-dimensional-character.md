---
id: ex-gns-representation-of-a-one-dimensional-character
kind: example
title: GNS representation of a continuous unitary character
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-complex-conjugate-real-imaginary-part-and-modulus, def-complex-metric-convergence-and-continuity, def-complex-numbers-and-arithmetic, def-continuous-function-of-positive-type, def-countable-choice, def-cyclic-vector-and-cyclic-unitary-representation, def-hilbert-space, def-linear-map, def-real-and-complex-inner-product-space, def-strongly-continuous-unitary-representation, def-topological-group, cor-inner-product-induces-a-norm, lem-complex-conjugation-and-modulus-laws, lem-positive-type-functions-define-a-pre-hilbert-form, lem-the-gns-translation-action-is-unitary-and-strongly-continuous, thm-choice-implies-dependent-implies-countable-choice, thm-complex-numbers-form-a-field, thm-complex-plane-is-complete, thm-gns-construction-for-topological-groups, thm-uniqueness-of-the-cyclic-gns-representation]
landmark: false
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Bekka and de la Harpe, Unitary Representations of Groups, Duals, and Characters, Example 1.B.7(1) and Construction 1.B.5, Chapter 1 §1.B, printed pp. 27–28"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Construction 1.B.5, printed pp. 27–28; Example 1.B.7(1), printed p. 28"
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Theorem C.4.10, Appendix C §C.4"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
      locator: "Theorem C.4.10 and complete proof, Appendix C §C.4, printed pp. 376–377"
---

## Example

Assume the Axiom of Choice. Let $G$ be a topological group and let
$\chi:G\to\mathbb C$ be a continuous group homomorphism with
$|\chi(g)|=1$ for every $g\in G$. Put $\varphi=\chi$. Then
$\varphi\in P_1(G)$. On $\mathbb C$, use the first-variable-linear inner
product $\langle z,w\rangle=z\overline w$ and define
$$\pi_\chi(g)z=\chi(g)z.$$
The triple $(\pi_\chi,\mathbb C,1)$ is a pointed cyclic strongly continuous
unitary representation with coefficient $\varphi$, and is unitarily equivalent
by the unique pointed intertwiner to the canonical GNS triple of $\varphi$. In
the algebraic GNS quotient, $[\delta_g]=\chi(g)[\delta_e]$ for every $g\in G$.

## Facts & Assumptions

[A1] A topological group has an identity and satisfies the group laws
([[def-topological-group]]).

[A2] The complex numbers form a field; complex conjugation, modulus, and
multiplication obey their usual identities. In particular, if $|z|=1$, then
$z^{-1}=\overline z$ ([[def-complex-numbers-and-arithmetic]],
[[thm-complex-numbers-form-a-field]],
[[def-complex-conjugate-real-imaginary-part-and-modulus]],
[[lem-complex-conjugation-and-modulus-laws]]).

[A3] The metric on $\mathbb C$ is $d_{\mathbb C}(z,w)=|z-w|$; continuity of
$\chi$ is with respect to this metric ([[def-complex-metric-convergence-and-continuity]]).

[A4] Complex inner products are linear in the first variable, their induced
length is a norm, and $\mathbb C$ with $\langle z,w\rangle=z\overline w$ is
complete, hence a complex Hilbert space ([[def-real-and-complex-inner-product-space]],
[[cor-inner-product-induces-a-norm]], [[thm-complex-plane-is-complete]],
[[def-hilbert-space]]).

[A5] A unitary representation is a homomorphism into bijective complex-linear
isometries with continuous vector orbits, and a vector is cyclic when its orbit
span is dense ([[def-linear-map]],
[[def-strongly-continuous-unitary-representation]],
[[def-cyclic-vector-and-cyclic-unitary-representation]]).

[A6] Positive type is the finite-matrix condition for
$(\varphi(g_i^{-1}g_j))_{i,j}$, and the GNS form on finitely supported
functions is
$$B_\varphi(f,h)=\sum_{x,y\in G}f(x)\overline{h(y)}\varphi(y^{-1}x),$$
with null space $N_\varphi=\{f:B_\varphi(f,f)=0\}$
([[def-continuous-function-of-positive-type]],
[[lem-positive-type-functions-define-a-pre-hilbert-form]]).

[A7] Under AC, left translation on the quotient extends to the canonical
strongly continuous GNS representation, and the GNS theorem supplies its
cyclic vector and diagonal coefficient. Two cyclic strongly continuous
representations with the same coefficient have a unique pointed unitary
intertwiner ([[lem-the-gns-translation-action-is-unitary-and-strongly-continuous]],
[[thm-gns-construction-for-topological-groups]],
[[thm-uniqueness-of-the-cyclic-gns-representation]]).

[A8] AC implies DC and Countable Choice; the local GNS completion and uniqueness
theorem use Countable Choice for Hilbert completion and bounded extension
([[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]],
[[def-countable-choice]]).

## Verification

**Given:** $G$, $\chi$, and the conventions and facts in [A1]–[A8]. All sums
below are finite when applied to finitely supported functions.

**Proof technique:** direct.

1.1 The homomorphism law gives $\chi(e)=\chi(e)^2$. Since $|\chi(e)|=1$, the value is nonzero, so cancellation gives $\chi(e)=1$. Applying the homomorphism law to $g^{-1}g=e$ gives $\chi(g^{-1})=\chi(g)^{-1}=\overline{\chi(g)}$ by [A2]. [A1, A2]
2.1 For any $n\ge1$, any $g_1,\ldots,g_n\in G$ (including repetitions), and any $c_1,\ldots,c_n\in\mathbb C$, the matrix quadratic form is $$\sum_{i,j=1}^n\overline{c_i}\,\chi(g_i^{-1}g_j)c_j=\left|\sum_{j=1}^n c_j\chi(g_j)\right|^2\ge0.$$ Thus the matrix is positive semidefinite. The given continuity of $\chi$ and $\chi(e)=1$ show $\varphi\in P_1(G)$; zero coefficients are covered by the same identity. [A2, A6, step 1.1, algebra]
2.2 The pairing $\langle z,w\rangle=z\overline w$ is the stated complex inner product, its induced norm is $|z|$, and the complex plane is complete; hence $\mathbb C$ is a complex Hilbert space by [A4]. For each $g$, multiplication by $\chi(g)$ is complex-linear by [A5] and is an isometry because $|\chi(g)z|=|z|$; multiplication by $\chi(g^{-1})$ is its inverse. The homomorphism law makes $\pi_\chi$ a representation. For fixed $z$ and $g_0$, $$\|\pi_\chi(g)z-\pi_\chi(g_0)z\|=|\chi(g)-\chi(g_0)|\,|z|\longrightarrow0$$ as $g\to g_0$, by continuity in [A3]. Thus it is strongly continuous. Since $\pi_\chi(e)1=1$, the orbit span contains $1$ and is all of $\mathbb C$; also $\langle\pi_\chi(g)1,1\rangle=\chi(g)=\varphi(g)$. [A3, A4, A5, step 1.1]
2.3 Define $L_\chi(f)=\sum_x f(x)\chi(x)$ on finitely supported $f$. Using [A2] and step 1.1, $$B_\chi(f,h)=\sum_{x,y}f(x)\overline{h(y)}\chi(y)^{-1}\chi(x)=L_\chi(f)\,\overline{L_\chi(h)}.$$ Therefore $B_\chi(f,f)=|L_\chi(f)|^2$ and $N_\chi=\ker L_\chi$. The map $[f]\mapsto L_\chi(f)$ is a well-defined linear isometry from the quotient onto $\mathbb C$: it is onto because $L_\chi(z\delta_e)=z$. For each $g$, $L_\chi(\delta_g)=\chi(g)$ and $L_\chi(\chi(g)\delta_e)=\chi(g)$, so injectivity on the quotient gives $[\delta_g]=\chi(g)[\delta_e]$. Left translation satisfies $L_\chi(L_gf)=\chi(g)L_\chi(f)$, in agreement with the scalar action $\pi_\chi(g)$ from [A7]. [A2, A6, A7, step 1.1, algebra]
3.1 By step 2.1, $\varphi$ meets the input hypotheses of the GNS construction in [A7]. Its canonical triple is cyclic, strongly continuous, and has diagonal coefficient $\varphi$. Step 2.2 gives the same properties and coefficient for $(\pi_\chi,\mathbb C,1)$. The pointed uniqueness theorem in [A7] therefore gives the unique unitary intertwiner carrying the vector $1$ to the canonical GNS vector. [A5, A7, step 2.1, step 2.2]
4.1 The only choice used is AC, declared in the example, through the GNS completion/action and pointed uniqueness inputs in [A7]; [A8] identifies the precise reduction AC $\Rightarrow$ DC $\Rightarrow$ Countable Choice used for completion and bounded extensions. The finite matrix, scalar representation, and quotient calculations in steps 1.1–3.1 use no choice. [A7, A8] ∎
