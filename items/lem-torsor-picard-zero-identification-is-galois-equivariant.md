---
id: lem-torsor-picard-zero-identification-is-galois-equivariant
kind: lemma
title: "The geometric Picard identification of an abelian torsor is Galois equivariant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-rigidified-relative-picard-functor-and-dual-abelian-variety
  - lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Poonen–Stoll, The Cassels–Tate Pairing on Polarized Abelian Varieties"
      url: "https://math.mit.edu/~poonen/papers/sha.pdf"
      locator: "Section 2: natural identification of Picard zero of an abelian torsor with the dual and translation conventions"
    - title: "J. S. Milne, Abelian Varieties, v2.00"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "I.8, Proposition 8.4 and Remark 8.7(b)–(d)"
verification: {}
---

## Statement

Assume AC and DC. Let $K_s/K$ be a separable closure, let
$G=\operatorname{Gal}(K_s/K)$, and let $X/K$ be a right torsor under an
abelian variety $A/K$. Supply its dual $A^\vee$, representing the
algebraically trivial rigidified Picard functor, and $P\in X(K_s)$.
For $Q\in X(K_s)$ write $t_Q:A_{K_s}\to X_{K_s}$ for $b\mapsto Q+b$.
Here $\operatorname{Pic}^0(Y)$ means the group of isomorphism classes of
algebraically trivial line bundles on $Y$, rather than numerical degree-zero
classes. Pullback gives an isomorphism
$$
I_Q=t_Q^*: \operatorname{Pic}^0(X_{K_s})\longrightarrow \operatorname{Pic}^0(A_{K_s})=A^\vee(K_s).
$$
It is independent of $Q$ and satisfies $I_Q(\sigma u)=\sigma I_Q(u)$
for $\sigma\in G$. Its inverse transports divisor classes by
$[D]\mapsto[(t_Q)_*D]$ and is also independent of $Q$ and $G$-equivariant.
The identification commutes with field extension (using the image of $P$)
and with restriction to a subgroup of $G$.
This asserts equality of Picard classes, without choosing compatible
isomorphisms between individual line bundles or divisors.

## Facts & Assumptions

**Given:** The data, supplied dual, and point of the Statement.

[A1] AC and DC are inherited from the geometric supplier.
([[def-axiom-of-choice]], [[def-dependent-choice]])

[F1] For an abelian variety over any field, an algebraically trivial line
bundle $M$ has zero Mumford map: for every rational point $b$,
$[t_b^*M\otimes M^{-1}]=0$. This remains true over field extensions.
([[lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity]])

[F2] The supplied dual represents the algebraically trivial rigidified
Picard functor. A line bundle over a field can be rigidified at the origin
by choosing a basis of its one-dimensional origin fibre. Two such choices
are isomorphic by scalar multiplication, so forgetting rigidification
identifies these classes with the ordinary algebraically trivial Picard
classes. This correspondence is natural under field extension and
semilinear automorphisms, since it is obtained by forgetting a
rigidification, not by fixing a basis.
([[def-rigidified-relative-picard-functor-and-dual-abelian-variety]])

## Proof

**Given:** [A1], [F1], [F2], and the data of the Statement.

1.1 The torsor identity makes $t_Q$ an isomorphism: every point of $X$ is uniquely $Q+b$, and the same assertion holds on test schemes. Pullback therefore identifies Picard groups with inverse pullback along $t_Q^{-1}$. Both operations preserve algebraic triviality: pull back any connected family witnessing algebraic equivalence along the isomorphism times its parameter scheme, and use the inverse for the converse. Thus $I_Q$ is an isomorphism on the stated subgroups, with target identified by [F2]. [F2, given, construct]

2.1 For $Q=P+b$ one has $t_Q=t_P\circ t_b$, hence $I_Q=t_b^*I_P$. Every value of $I_P$ is algebraically trivial by step 1.1, so [F1] makes $t_b^*$ act as the identity on these values. Therefore $I_Q=I_P$ for every $Q$. The inverse sends a line bundle $M$ to $(t_P^{-1})^*M$; for a Cartier divisor $D$ this is precisely the class of $(t_P)_*D$, since transport of a Cartier divisor along an isomorphism is pullback along its inverse. Independence also holds for this inverse. [F1, step 1.1, algebra]

3.1 Conjugating $t_P$ by $\sigma$ gives $t_{\sigma P}$ because the action of $A$ on $X$ is defined over $K$. Naturality of pullback consequently gives $\sigma(t_P^*u)=t_{\sigma P}^*(\sigma u)$. By step 2.1 the right side is $t_P^*(\sigma u)$. Under the natural identification of [F2] this is exactly $\sigma I_P(u)=I_P(\sigma u)$ for the usual $G$-action on $A^\vee(K_s)$. No equality between $\sigma P$ and $P$ is required. The inverse of a bijective equivariant map is equivariant as well. [F2, step 2.1, algebra]

4.1 Pullback, inverse isomorphisms, and the identity $t_{P+b}=t_P\circ t_b$ commute with scalar extension. Applying the same construction after any field extension carrying $P$ gives the base change of $I_P$; independence from other origins there follows again from [F1]. Restricting step 3.1 to any subgroup proves compatibility with restriction. In particular these identities apply after compatible embeddings used for local scalar extension. They require no prime-to-characteristic condition. [F1, step 3.1, step 2.1, algebra] ∎

## Remarks

This proves the specific geometric input of the polarization divisor-cocycle
route, using the existing homogeneous-bundle supplier. It proves neither
local triviality nor two-torsion of the polarization obstruction, nor any
comparison of Cassels–Tate pairing constructions. The supplied dual is
retained; its existence is not reproved here.
