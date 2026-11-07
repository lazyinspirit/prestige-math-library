---
id: lem-balanced-cm-hermitian-forms-are-split
kind: lemma
title: "Balanced CM Hermitian forms of split determinant are split"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-number-field-hasse-minkowski-for-hermitian-splitting
  - thm-quadratic-local-norm-index-two-elementary
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne, Hodge Cycles on Abelian Varieties, notes by J. S. Milne"
      url: "https://www.jmilne.org/math/Documents/Deligne82.pdf"
      locator: "Section 4, Proposition 4.1 and Corollary 4.2, printed pages 28–29 (PDF pages 28–29), read. The local isotropy and global induction below reconstruct the split conclusion without importing Landherr's classification."
verification: {}
---

## Statement

Let $F$ be a totally real number field, let $E/F$ be a totally imaginary quadratic extension with conjugation $x\mapsto\bar x$, and let $(V,h)$ be a nondegenerate Hermitian $E$-space of dimension $2m$. Suppose that at every real embedding of $F$ its complex Hermitian form has signature $(m,m)$, and that
$$\det(h)\equiv(-1)^m\pmod{N_{E/F}(E^\times)}.$$
Then $V$ is split: it has a totally isotropic $E$-subspace of dimension $m$, and is an orthogonal sum of $m$ hyperbolic planes. Conversely every such split Hermitian space has the stated signatures and determinant class. This is the split criterion needed for the balanced case; it does not assert classification of all Hermitian forms.

## Facts & Assumptions

**Given:** The number fields, Hermitian space and hypotheses in the Statement.

[F1] A nonsingular quadratic form over a number field is isotropic if and only if it is isotropic over every completion. [[thm-number-field-hasse-minkowski-for-hermitian-splitting]]

[F2] For a quadratic extension of a finite extension of $\mathbb Q_p$, its local norm group has index two. [[thm-quadratic-local-norm-index-two-elementary]]

## Proof

**Proof technique:** prove finite-place isotropy using the norm quotient, apply Hasse–Minkowski to the underlying quadratic form, and split off hyperbolic planes.

1.1 Diagonalize $h$ over $E$ by finite orthogonal elimination. If every vector had zero self-pairing, applying the polarization identity to $v+w$ and $v+aw$, where $a\ne\bar a$, would make $h$ zero. Thus a nonzero self-pairing exists; split its nondegenerate line and repeat. In a diagonal basis the coefficients $a_i=h(e_i,e_i)$ lie in $F^\times$. Choosing $E=F(\sqrt\Delta)$ identifies the underlying $F$-quadratic form $q(v)=h(v,v)$ with $\bigoplus_i a_i\langle1,-\Delta\rangle$, which is nonsingular. [given, construct, algebra]

1.2 Let $K$ be a finite completion of $F$. If $E\otimes_F K$ is split, a nonzero zero divisor in one coordinate gives an isotropic vector. Otherwise write $N\subset K^\times$ for its quadratic norm group. Every square belongs to $N$, and $K^\times/N$ has order two by [F2]. The element $-1$ is a sum of finitely many squares in $K$: for odd residue characteristic the two residue-square sets for $x^2$ and $-1-y^2$ have total cardinality larger than the residue field, and a solution with a nonzero coordinate lifts by the elementary simple-root iteration. In residue characteristic two, recursively lifting an odd square root of $-7\equiv1\pmod8$ in $\mathbb Q_2$ gives $u^2=-7$, so $-1=(2/u)^2+3(1/u)^2$ in $K$. The recursion chooses the next binary digit to correct the next square congruence and converges in the given completion. [F2, given, construct, algebra]

2.1 Every nondegenerate Hermitian form of dimension at least three over the nonsplit local extension is isotropic. If $-1\in N$, two of any three diagonal coefficients have the same class in the order-two quotient, so their negative ratio is a norm and those two coordinates give a zero. If $-1\notin N$ and two coefficients have different classes, their negative ratio is a norm and the same conclusion holds. Otherwise all three coefficients have the same norm class; rescale the three coordinates so they agree. If a sum of two elements of $N$ were always in $N\cup\{0\}$, repeated addition of the squares in step 1.2 would put $-1$ in $N$. A zero intermediate sum itself already makes $-1$ a norm, so this contradiction is legitimate. Choose $a,b\in N$ with $a+b\notin N\cup\{0\}$. Since the quotient has order two and $-1\notin N$, the element $-(a+b)$ is in $N$. Taking three coordinates with these prescribed norms gives a nonzero isotropic vector. [F2, given, step 1.1, step 1.2, choose, construct, algebra]

3.1 Suppose $m\ge2$. At every finite completion, step 2.1 gives a zero of $q$; at every real completion its signature is $(2m,2m)$ as a real quadratic form and it is isotropic. By [F1] there is a nonzero $v\in V$ with $h(v,v)=0$. Nondegeneracy gives $w$ with $h(v,w)=1$. Replacing $w$ by $w-\tfrac12h(w,w)v$ makes $h(w,w)=0$, so their span is a hyperbolic plane and $V$ is its orthogonal sum with a nondegenerate Hermitian complement. The complement has signatures $(m-1,m-1)$ and determinant class $(-1)^{m-1}$, since a hyperbolic plane has determinant $-1$. [F1, given, step 1.1, step 2.1, choose, construct, algebra]

4.1 Induct on $m$. The case $m=0$ is empty. For $m=1$, diagonal coefficients $a,b$ satisfy $ab=-N(u)$ for some $u\in E^\times$, and therefore $-a/b=N(u/b)$; an element with that norm gives an isotropic vector, and the construction of step 3.1 splits the plane. For $m\ge2$, apply step 3.1 and induction to its complement. Conversely each hyperbolic plane has signature $(1,1)$ at every real embedding and determinant $-1$ modulo a norm, so an orthogonal sum of $m$ planes has the stated invariants. [given, step 1.1, step 3.1, choose, construct, algebra] ∎

## Source-reading boundary

Deligne's Proposition 4.1 and Corollary 4.2 were read at the cited pages. The source invokes Landherr for the general classification; only the split case is reconstructed here from the two explicitly linked local proofs and the displayed local norm argument. No full Hermitian classification or absolute-Hodge theorem is imported.
