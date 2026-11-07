---
id: lem-cyclic-number-field-idele-norm-quotient-and-local-degrees
kind: lemma
title: "Cyclic idele norm quotients and detection by local degrees"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-idele-group-of-a-global-field
  - def-idele-class-group-of-a-global-field
  - lem-early-number-field-idele-norm-index-and-h1
  - thm-global-field-element-integral-at-all-but-finitely-many-places
  - lem-number-field-completion-tensor-and-norm-in-zf
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-finite-galois-extension-characterizations
  - thm-fundamental-theorem-of-finite-galois-theory
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - lem-unramified-local-unit-norms-and-cohomology
  - thm-number-field-places-classification
justified_by: []
proof_strategy: direct
axiom_use: "AC is explicit for global places, simultaneous norm preimages and the early norm/H1 interface. It implies CC/DC. No global reciprocity, Brauer theorem, or Frobenius-density theorem is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VII §§5–7, idele norm quotients and the cyclic local-global row; finite cochain/norm assembly is supplied explicitly here, independent of invariant-sum reciprocity."
verification: {}
---

## Statement

Assume AC. Let $L/K$ be a finite cyclic extension of number fields of degree
$n\ge1$. Write $I_F=\mathbb A_F^\times$ and $C_F=I_F/F^\times$. For each
finite or archimedean place $v$ of $K$, choose $w\mid v$ in $L$, and put
$$Q_v=K_v^\times/N_{L_w/K_v}L_w^\times,\qquad d_v=[L_w:K_v].$$
The norm subgroup and degree are independent of the choice of $w$. Component
maps give an isomorphism
$$I_K/N_{L/K}I_L\xrightarrow{\sim}\bigoplus_v Q_v.$$
Under this isomorphism the diagonal map from $K^\times$ induces the exact
sequence
$$0\longrightarrow K^\times/N_{L/K}L^\times\longrightarrow\bigoplus_v Q_v\longrightarrow C_K/N_{L/K}C_L\longrightarrow0.$$
The last group has order $n$, and
$$\operatorname{lcm}_{v} d_v=n,$$
where the least common multiple is that of the finite set of distinct
positive divisors $d_v$ of $n$. No invariant-sum normalization is asserted.

## Statement references

[[lem-early-number-field-idele-norm-index-and-h1]]

[J. S. Milne, *Class Field Theory*, Chapter VII §§5–7](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** AC and the finite cyclic extension in the Statement, with its natural actions on ideles and idele classes.

[F1] For a finite cyclic number-field extension $L/K$ of degree $n$, $C_K/N C_L$ has order $n$ and $H^1(\operatorname{Gal}(L/K),C_L)=0$, under AC, CC and DC. This earlier interface does not use global reciprocity. [[lem-early-number-field-idele-norm-index-and-h1]]

[F2] Ideles are tuples of local nonzero elements that are units at almost all finite places; $C_F=I_F/F^\times$. [[def-idele-group-of-a-global-field]] [[def-idele-class-group-of-a-global-field]]

[F3] Relative completion tensor decomposition holds at every finite or archimedean place, and its norm is the product of local norms. Finite completions are complete discrete valuation fields with finite residue field. [[lem-number-field-completion-tensor-and-norm-in-zf]]

[F4] Finite separable extensions are simple. For finite Galois extensions, the extension is a separable splitting field, the fixed field is the base, and subgroups and intermediate fields satisfy the finite Galois correspondence. [[thm-primitive-element-theorem-for-finite-separable-extensions]] [[thm-finite-galois-extension-characterizations]] [[thm-fundamental-theorem-of-finite-galois-theory]]

[F5] Under AC, each global-field element is integral at almost all finite places. [[thm-global-field-element-integral-at-all-but-finitely-many-places]]

[F6] Simple residue roots lift uniquely in a complete valued field. Finite unramified local extensions correspond to finite residue extensions; their degree is $ef$, and extending absolute values are unique. [[lem-hensel-factor-lifting-over-a-complete-valued-field]] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[F7] Unit norms are onto in finite unramified extensions of finite-residue local fields. [[lem-unramified-local-unit-norms-and-cohomology]]

[F8] Archimedean places are real embeddings and conjugate pairs of complex embeddings, and finite places have the usual prime valuations. [[thm-number-field-places-classification]]

[A1] AC implies CC and DC, and permits simultaneous local norm preimages. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** assemble local norm preimages with a common finite unit bound, then apply the early cyclic norm index and H1 vanishing.

**Given:** The data above; write $G=\langle\sigma\rangle$.

1.1 Choose $L=K(\theta)$ with monic separable minimal polynomial $f$ by [F4] and a finite Bezout identity $af+bf'=1$. By [F5], the coefficients of these three polynomials are integral outside finitely many finite places of $K$. Add all archimedean places, which are finite by [F8] and the finite number of complex conjugates of a primitive generator of $K/\mathbb Q$, obtaining a finite $S$. At $v\notin S$, the reduction of $f$ is squarefree. For each residue irreducible factor of degree $d$, take the degree-$d$ unramified field with that residue extension by [F6], and lift its simple root of $\bar f$ to a root of $f$. The first $d$ powers of that root are independent, by scaling a relation to have a unit coefficient and reducing. Thus its minimal polynomial has degree $d$ and, by taking its unramified Galois conjugates, is integral and reduces to the chosen residue factor. These distinct factors exhaust $f$. The tensor decomposition [F3] then shows every $L_w/K_v$ is unramified at $v\notin S$, with valued-field compatibility given by the unique extension in [F6]. This is an explicit finite separability-certificate proof, without a global finite-ramification theorem. [A1, F3, F4, F5, F6, F8, given, choose, construct, algebra]

2.1 At any place $v$, the factors of $L\otimes_KK_v=\prod_{w\mid v}L_w$ are transitive under $G$. Otherwise an orbit sum of primitive idempotents would be a nontrivial idempotent in its invariant ring, whereas that ring is $K_v$: taking invariants is solving the finitely many linear equations for $L^G=K$, and these kernels commute with scalar extension. The stabilizer $D_w$ identifies with $\operatorname{Gal}(L_w/K_v)$. A local automorphism preserves the embedded $L$ by permuting the roots of a separable global splitting polynomial, and conversely a stabilizing element extends by continuity; the local tensor factor is generated by $L$ and $K_v$, so the two maps are inverse. Thus $d_v=|D_w|$ divides $n$ and is independent of $w$. Norm subgroups are also independent by transport. The idele norm has component $\prod_{w\mid v}N_{L_w/K_v}(x_w)$, by grouping the $G$-norm product into stabilizer cosets; this is the finite local norm of [F3]. [F3, F4, step 1.1, construct, algebra]

3.1 An idele $a\in I_K$ is a unit outside a finite set of finite places. Outside that set and $S$, unit norm surjectivity [F7] makes its class in $Q_v$ zero. Thus the component maps take values in $\bigoplus_vQ_v$. They annihilate $N I_L$ by step 2.1. Conversely a finite-support tuple of classes in $Q_v$ has representatives $a_v\in K_v^\times$ at its finitely many supported places. Taking $a_v=1$ elsewhere gives an idele, so the component map is onto. [F2, F7, step 1.1, step 2.1, construct, algebra]

4.1 If an idele $a$ has trivial class in every $Q_v$, choose for each $v$ one place $w_v\mid v$ and an element $x_{w_v}$ with local norm $a_v$, taking the other components above $v$ to be $1$. By [F7], these chosen preimages can be units when $v$ lies outside $S$ and the finite nonunit support of $a$. Under [A1] make all these choices simultaneously. The resulting $x$ is an idele of $L$, with norm $a$ by step 2.1. Hence the kernel is exactly $N I_L$, proving the first isomorphism. Since $N C_L$ is the image of $N I_L$ modulo $K^\times$, the quotient of this direct sum by the diagonal image of $K^\times$ is exactly $C_K/N C_L$. [A1, F2, F7, step 2.1, step 3.1, choose, algebra]

5.1 Suppose $a\in K^\times$ is a norm in every completion. By step 4.1 choose $x\in I_L$ with norm $a$. Its class $u=[x]\in C_L$ has $G$-norm one. Such $u$ defines the one-cocycle $c(\sigma^i)=\prod_{j<i}\sigma^j u$; the norm-one identity verifies the wrap-around cocycle relation. By [F1,A1], this cocycle is a coboundary, so $u=\sigma v/v$ for some $v\in C_L$. Lift $v$ to an idele $y$. Then $b=x/(\sigma y/y)$ has trivial class in $C_L$, so lies in diagonal $L^\times$, and $N_{L/K}b=a$. The converse is immediate by local norm compatibility. This proves injectivity of $K^\times/N L^\times$ in the displayed sequence; step 4.1 proves exactness at the other terms. The final group has order $n$ by [F1,A1]. [A1, F1, F2, step 4.1, choose, algebra]

5.2 Let $d$ be the least common multiple of the distinct divisors $d_v$ of $n$, and let $H\le G$ be its unique subgroup of order $d$. It contains every $D_w$. Put $M=L^H$; by [F4], $M/K$ is cyclic of degree $n/d$. At every completion its decomposition group is the image of $D_w$ in $G/H$, which is trivial: this follows by restriction in the finite Galois extension $L_w/K_v$ and the stabilizer description in step 2.1. Thus every completion factor of $M/K$ is just $K_v$. The norm $I_M\to I_K$ is therefore onto, by choosing one factor above each place and putting the given idele component there and $1$ in the other factors; this preserves units and is allowed by [A1]. Hence $C_K/N C_M$ is zero. Applying [F1] to the cyclic extension $M/K$ says its order is $[M:K]=n/d$, so $n=d$. No Frobenius-density or global reciprocity theorem is used. [A1, F1, F3, F4, step 2.1, step 4.1, construct, algebra]

6.1 At $n=1$ all local quotients and the idele-class quotient are zero, and all local degrees are one. The zero class, principal norms and split archimedean factors have already been included in the constructions. Steps 3.1–5.2 prove all the asserted isomorphism, exactness, order and least-common-multiple clauses under the original AC hypothesis. [step 3.1, step 4.1, step 5.1, step 5.2, algebra] ∎
