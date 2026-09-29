---
id: ex-direct-integral-of-a-constant-hilbert-field
kind: example
title: Direct integral of a constant Hilbert field
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-direct-integral-of-a-measurable-hilbert-field
  - thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
  - def-complex-lp-and-euclidean-test-function-conventions
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - thm-monotone-convergence-for-the-integral
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: https://arxiv.org/pdf/1912.07262
      locator: "Chapter 1 §1.G, Example 1.G.1, printed pp. 59–60"
    - title: "F. Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Ch. 10"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr14.pdf
      locator: "Part III, Chapter 10 §§1.3–1.5, printed pp. 95–96; continuous-field construction and fibrewise orthogonalization"
axiom_use: "Assume AC. It supplies the direct-integral completeness result and the Countable Choice hypothesis of the Parseval theorem. The basis is fixed in the example, and the finite-coordinate construction and limit are canonical; no additional choice is used."
verification:
  precheck: n/a
---

## Example

Assume AC. Let $(X,\mathcal B,\mu)$ be a sigma-finite standard-Borel measure
space, and let $K$ be a separable complex Hilbert space with a fixed finite or
countable orthonormal basis $(b_j)_{j\in J}$, where $J$ may be empty. For the
constant field $H_x=K$, define $L^2(X,\mu;K)$ to be the quotient, modulo
agreement off a Borel null set, of maps $\xi:X\to K$ for which every
coefficient $x\mapsto\langle\xi(x),b_j\rangle$ is Borel measurable and
$\int_X\|\xi(x)\|_K^2\,d\mu(x)<\infty$. Then
$$\int_X^\oplus K\,d\mu \cong L^2(X,\mu;K) \cong \bigoplus_{j\in J}L^2(X,\mu;\mathbb C).$$
by the coordinate map
$$[\xi]\longmapsto \bigl([\langle\xi(\cdot),b_j\rangle]\bigr)_{j\in J},$$
which is a surjective linear isometry. Here the Hilbert sum on the right
consists of coordinate classes $(f_j)_{j\in J}$ with
$\sum_{j\in J}\|f_j\|_2^2<\infty$. If $X$ is countable with counting measure,
the same direct integral is the ordinary Hilbert sum
$\bigoplus_{x\in X}K$.

## Facts & Assumptions

**Given:** AC, a sigma-finite standard-Borel measure space, a separable complex Hilbert space with a fixed finite or countable orthonormal basis, and the constant field with its coefficient-measurability convention.

[F1] The measurable-field convention uses measurable Gram coefficients and a fibrewise dense countable fundamental family; sections are tested against that family ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]]).

[F2] The direct integral is the quotient of square-integrable measurable sections by agreement off a measurable null set, with the integrated fibre inner product ([[def-direct-integral-of-a-measurable-hilbert-field]]).

[F3] Complex scalar $L^2$ consists of measurable complex functions with finite $\int|f|^2$, modulo almost-everywhere equality ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F4] For a complete orthonormal family, Parseval gives $\sum_j|\langle v,b_j\rangle|^2=\|v\|^2$, with the sum defined by finite subsum limits ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F5] The nonnegative integral commutes with increasing pointwise limits ([[thm-monotone-convergence-for-the-integral]]).

[F6] The nonnegative integral is additive on finite sums of nonnegative measurable functions ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[F7] Under AC, the direct integral of the stated field is complete ([[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]]).

[F8] AC supplies a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** coordinate expansion in the fixed orthonormal basis.

1.1 Enumerate the fixed basis as a sequence, extending it by zero sections if $J$ is finite or empty. These constant sections $e_j(x)=b_j$ form a measurable fundamental family: their Gram coefficients are constant, and their span is dense in every fibre $K$. Thus the field's measurable sections are exactly the maps tested by these coordinates, and its almost-everywhere quotient is the stated $L^2(X,\mu;K)$ [F1, F2, given, construct]

1.2 Define $U$ by the displayed coordinate map. Each coordinate class belongs to scalar $L^2$ because Parseval and monotone convergence give $$ \sum_{j\in J}\|\langle\xi(\cdot),b_j\rangle\|_2^2 =\int_X\sum_{j\in J}|\langle\xi(x),b_j\rangle|^2\,d\mu(x) =\int_X\|\xi(x)\|^2\,d\mu(x). $$ The identity also shows that $U$ is well-defined on almost-everywhere classes, linear, and isometric; when $J$ is finite the increasing sums stabilize. [F2, F3, F4, F5, algebra]

1.3 With counting measure on a countable standard-Borel $X$, every section is measurable, the integral norm is $\int_X\|\xi(x)\|^2\,d\#(x)=\sum_{x\in X}\|\xi(x)\|^2$, and the only null set is empty. The quotient therefore consists exactly of square-summable families $(\xi(x))_{x\in X}$ in $K$, with its ordinary Hilbert-sum norm. [F2, algebra]

2.1 For a finitely supported tuple $(f_j)_{j\in J}$, choose a Borel representative of each of its finitely many coordinates in the support; these finitely many existential instantiations require no choice axiom. The finite-coordinate section $\xi(x)=\sum_{j\in J_0}f_j(x)b_j$ has measurable fundamental coefficients, and orthonormality gives $\|\xi(x)\|^2=\sum_{j\in J_0}|f_j(x)|^2$. Additivity of the nonnegative integral makes this section square-integrable, and its coordinate image is the given tuple. Changing representatives changes the section only on a finite union of Borel null sets, so its class is independent of the representatives. [F1, F2, F3, F6, step 1.2, construct]

3.1 For an arbitrary square-summable tuple $(f_j)_{j\in J}$, its finite truncations converge in the Hilbert-sum norm. By step 2.1 each truncation has its canonical finite-coordinate section class; since $U$ is an isometry, these classes form a Cauchy sequence in the direct integral. AC supplies its completeness; the limit has coordinates $(f_j)$ because $U$ preserves distances and the truncations converge to that tuple. Hence $U$ is onto. No representatives are selected in this step: all tuples and sections are already almost-everywhere classes. [F2, F3, F7, F8, step 1.2, step 2.1, construct]

4.1 If $X=\varnothing$ or $K=\{0\}$, both sides are the zero space; in the zero-fibre case the basis is empty and the coordinate sum has no terms. If $K=\mathbb C$ with basis $b_1=1$, $U$ is the identity on scalar $L^2$. Finite nonzero-dimensional fibres use only their finitely many coordinates, and padding the measurable fundamental sequence by zero sections changes no coordinate or norm. A null base gives only the zero almost-everywhere class. AC is used in step 3.1 for the completeness theorem and in step 1.2 through Parseval's Countable Choice hypothesis; the fixed basis and coordinate truncations require no further choice. This example has no interval endpoint or if-and-only-if assertion. [F3, F4, F7, F8, step 1.2, step 3.1, algebra] $\square$

## Source qualifications

Bekka–de la Harpe, Chapter 1 §1.G, Example 1.G.1(2), printed p. 60, identifies a constant separable Hilbert field with vector-valued $L^2$ using a fixed orthonormal basis; Example 1.G.1(1) gives the counting-measure Hilbert sum. The coordinate norm calculation, onto argument, and zero- and finite-dimensional cases are proved above. Bruhat, Part III Chapter 10 §§1.3–1.5, printed pp. 95–96, treats a continuous/Lusin field convention and fibrewise orthogonalization; no topological continuity assumption from that setting is used here.

## Boundary cases

- **Empty:** $X=\varnothing$ gives the zero spaces, as checked in step 4.1.
- **Zero:** $K=\{0\}$ gives no coordinates and zero norm, as checked in step 4.1.
- **One:** $K=\mathbb C$ with $b_1=1$ gives scalar $L^2$, as checked in step 4.1.
- **Degenerate:** finite bases are exhausted after finitely many coordinates; padded zero sections and null representatives are handled in steps 1.1–3.1.
- **Endpoints:** not applicable; the base is an arbitrary measure space and has no interval parameter.
- **Nonempty choice:** AC is used exactly as stated in step 4.1; step 3.1 uses completeness and no representative selection.
- **Iff directions:** not applicable; the example asserts an isometric identification, not an equivalence.
