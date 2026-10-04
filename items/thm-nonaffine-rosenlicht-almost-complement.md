---
id: thm-nonaffine-rosenlicht-almost-complement
kind: theorem
title: "Rosenlicht almost-complements to abelian subvarieties"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-dependent-choice, def-abelian-variety-over-a-field, lem-nonaffine-connected-group-geometrically-connected, prop-abelian-variety-commutativity-from-rigidity, thm-nonaffine-group-scheme-normal-subgroup-quotient, lem-nonaffine-commutative-torsor-norm-map, thm-nonaffine-rational-map-smooth-variety-to-abelian-variety-extends, thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism, thm-nonaffine-abelian-multiplication-finite-faithfully-flat, lem-nonaffine-reduced-neutral-subgroup-over-perfect-field, lem-nonaffine-group-monomorphism-closed-immersion]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Proposition 8.23 and Theorem 8.24, p.153"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Sections 4.2-4.3"
      url: https://arxiv.org/pdf/1509.03059
---

## Statement

Assume AC and DC. Let $G$ be a smooth connected separated finite-type group scheme over any field $k$, and $A\subseteq G$ an abelian subvariety. Then $A$ is central and there is a connected closed normal subgroup scheme $H\subseteq G$ such that multiplication $A\times H\to G$ is a finite faithfully flat homomorphism. Its kernel is the finite group scheme $A\cap H$, embedded by $a\mapsto(a,a^{-1})$. In particular $G=A H$ as an fppf sheaf. If $k$ is perfect, $H$ can be chosen smooth. No uniqueness is asserted; over an imperfect field smoothness of $H$ is not asserted.

## Facts & Assumptions

[F1] Abelian subvarieties of connected groups are central; smooth connected groups are geometrically integral. Normal subgroup quotients exist, commute with field extension, and are fppf torsors; a quotient of a smooth connected group is smooth connected. ([[prop-abelian-variety-commutativity-from-rigidity]], [[lem-nonaffine-connected-group-geometrically-connected]], [[thm-nonaffine-group-scheme-normal-subgroup-quotient]])

[F2] A smooth commutative torsor over a field admits a norm morphism with covariance by a positive integer. Rational maps from smooth integral varieties to abelian varieties extend, and pointed morphisms from smooth geometrically integral groups to abelian varieties are homomorphisms. ([[lem-nonaffine-commutative-torsor-norm-map]], [[thm-nonaffine-rational-map-smooth-variety-to-abelian-variety-extends]], [[thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism]])

[F3] Nonzero multiplication on an abelian variety is finite faithfully flat, with finite kernel, under AC and DC. Over a perfect field reductions and reduced identity components of normal subgroups of smooth groups are smooth normal subgroups. Homomorphisms with trivial scheme kernel are closed immersions. ([[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]], [[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]], [[lem-nonaffine-group-monomorphism-closed-immersion]])

## Proof

**Given:** AC, DC, $G$, and $A$ as stated.

1.1 By [F1], $A$ is central and $q:G\to Q=G/A$ is a smooth torsor over a smooth geometrically integral group. Its generic fibre is a smooth $A_{k(Q)}$-torsor. Apply [F2] there to obtain $\psi$ with $\psi(ag)=na+\psi(g)$ for a positive integer $n$. Its finitely many defining coefficients spread to a nonempty open of $Q$, giving a rational map $G\dashrightarrow A$. The extension theorem in [F2] gives a morphism $\phi:G\to A$. The covariance extends over $A\times G$: this product is geometrically integral and the two morphisms agree on a dense open; the target is separated. Translate $\phi$ by $-\phi(e)$, retaining covariance and obtaining a pointed morphism. It is a homomorphism by [F2], and $\phi|_A=[n]$. [F1, F2, given, construct, algebra]

2.1 Let $N=\ker\phi$, a closed normal subgroup. Multiplication $m:A\times N\to G$ is the pullback of $[n]:A\to A$ along $\phi$: the isomorphism with $G\times_{\phi,A,[n]}A$ sends $(a,h)$ to $(ah,a)$, with inverse $(g,a)\mapsto(a,a^{-1}g)$. It is a homomorphism by centrality, finite faithfully flat by [F3], and its kernel is $A[n]$ diagonally embedded as stated. Put $H=N^0$, the open and closed identity component. It is normal: after algebraic closure conjugation by $G$ preserves the component containing the identity, and the factorization descends; equivalently, the conjugation map from the geometrically connected $G\times N^0$ lands in that open and closed component. The restriction $m_H:A\times H\to G$ is finite and flat, being the restriction of $m$ to an open and closed subscheme. Its image is closed by finiteness and open by flat finite presentation. It contains the identity, so connectedness of $G$ makes it surjective. Therefore it is finite faithfully flat. Its kernel is exactly $A\cap H$, a closed subgroup of $A[n]$, so finite. [F1, F3, step 1.1, construct, algebra]

3.1 If $k$ is perfect, replace $H$ with $R=H_{\mathrm{red}}$, which is smooth connected and normal by [F3]. Over an algebraic closure $R$ has the same points as $H$, so $A\times R\to G$ is surjective on closed points. Its image is closed, since it is a closed restriction of the finite $m_H$, hence the map is surjective. Let $J=A\cap R$, finite as a subgroup of $A[n]$. The normal quotient $(A\times R)/J$ exists by [F1]. The induced homomorphism to $G$ has trivial scheme kernel, so is a monomorphism on all test schemes. By [F3] it is a closed immersion. This closed immersion is surjective and has reduced target $G$; its ideal is nilpotent and thus zero. It is an isomorphism. Hence $m_R$ is the quotient torsor and is faithfully flat as well as finite, with the claimed kernel. This proves the perfect-field clause without asserting that an arbitrary surjective morphism is flat. AC and DC are inherited from [F1]–[F3]. [F1, F3, step 2.1, algebra] ∎
