---
id: thm-schlessinger-criterion-for-prorepresentability
kind: theorem
title: "Schlessinger criterion for pro-representability"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-noetherian-ring
  - thm-noetherian-ring-ideal-characterisations
  - cor-finite-variable-polynomial-ring-noetherian
  - thm-noetherianity-of-adic-completion
  - thm-noetherian-ring-quotients-and-localisations
  - lem-finite-residue-power-series-ring-is-compact
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC selects a basis and the successive lifts used to construct the hull; it
  also supplies the compactness input through the finite-residue power-series
  lemma. DC carries out the recursive construction and is assumed by the
  Noetherian ideal-characterisation supplier. No stronger principle is used.
provenance:
  statement: literature-derived
  proof: reconstructed
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Dependent Choice.

Let \(\mathcal O\) be a commutative Noetherian ring with unique maximal ideal
\(\mathfrak m_{\mathcal O}\). Assume that the natural map
\(\mathcal O\to\varprojlim_{q\ge1}\mathcal O/\mathfrak m_{\mathcal O}^q\) is an
isomorphism, and let \(k=\mathcal O/\mathfrak m_{\mathcal O}\) be finite. Define
\(\mathcal C_{\mathcal O}\) to have as objects commutative local
\(\mathcal O\)-algebras \(A\) with an identified residue field
\(A/\mathfrak m_A=k\), nilpotent maximal ideal \(\mathfrak m_A\), and
finite-dimensional \(k\)-vector spaces
\(\mathfrak m_A^j/\mathfrak m_A^{j+1}\) for every \(j\ge0\). Its morphisms are
local \(\mathcal O\)-algebra homomorphisms inducing the identity on \(k\). For
a covariant functor
\(F:\mathcal C_{\mathcal O}\to\mathrm{Sets}\) with \(F(k)\) a singleton, put
\(t_F=F(k[\epsilon])\), where \(k[\epsilon]=k[\epsilon]/(\epsilon^2)\).
For a finite-dimensional \(k\)-vector space \(V\), write \(k[V]=k\oplus V\)
with \(V^2=0\). A surjection \(B\to A\) in this category is a small extension
when its nonzero kernel is one-dimensional over \(k\) and is annihilated by
the maximal ideal of \(B\). Suppose:

- (H1) for every diagram \(A'\to A\leftarrow A''\) in which \(A''\to A\) is
  a small extension, the natural map
  \(F(A'\times_A A'')\to F(A')\times_{F(A)}F(A'')\) is surjective;
- (H2) that map is bijective when \(A=k\) and \(A''=k[\epsilon]\);
- (H3) \(t_F\) is finite-dimensional over \(k\);
- (H4) for every small extension \(B\to A\), the diagonal comparison
  \(F(B\times_A B)\to F(B)\times_{F(A)}F(B)\) is bijective.

Then there is a complete Noetherian local \(\mathcal O\)-algebra \(R\), with
residue field \(k\) and \(R/\mathfrak m_R^n\) in \(\mathcal C_{\mathcal O}\)
for every \(n\), such that the natural map
\(\operatorname{Hom}_{\mathcal O,\mathrm{cont}}(R,A)\to F(A)\) is bijective
for every \(A\in\mathcal C_{\mathcal O}\).

## Statement references

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[def-noetherian-ring]]

[[thm-noetherian-ring-ideal-characterisations]]

[[cor-finite-variable-polynomial-ring-noetherian]]

[[thm-noetherianity-of-adic-completion]]

[[thm-noetherian-ring-quotients-and-localisations]]

[[lem-finite-residue-power-series-ring-is-compact]]

[Michael Schlessinger, “Functors of Artin Rings,” Theorem 2.11 and proof](https://math.uchicago.edu/~amathew/schlessingerdef.pdf)

## Facts & Assumptions

**Given:** The category, functor, and conditions (H1)–(H4) in the Statement.

[F1] The Axiom of Choice says that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F2] Dependent Choice permits a sequence of successive choices when each stage has a nonempty set of eligible next choices. [[def-dependent-choice]]

[F3] A commutative ring is Noetherian when its regular module is Noetherian; under Dependent Choice, this is equivalent to every ideal being finitely generated. [[def-noetherian-ring]] [[thm-noetherian-ring-ideal-characterisations]]

[F4] A polynomial ring in finitely many variables over a Noetherian commutative ring is Noetherian. [[cor-finite-variable-polynomial-ring-noetherian]]

[F5] Assuming AC, the adic completion of a Noetherian commutative ring is Noetherian. [[thm-noetherianity-of-adic-completion]]

[F6] A quotient of a Noetherian commutative ring by an ideal is Noetherian. [[thm-noetherian-ring-quotients-and-localisations]]

[F7] If \(\mathcal O\) is complete Noetherian local with finite residue field and \(S=\mathcal O[[T_1,\ldots,T_r]]\), then \(S\) is compact in its maximal-ideal topology. [[lem-finite-residue-power-series-ring-is-compact]]

## Proof

**Given:** The hypotheses of the Statement.

1.1 Repeated application of (H2) to \(k[V\oplus k]\cong k[V]\times_k k[\epsilon]\) shows inductively that \(F(k[V])\cong t_F^{\dim_k V}\) for every finite-dimensional \(V\). The ring maps defining addition and scalar multiplication on square-zero ideals therefore induce a \(k\)-vector-space structure on \(t_F\), compatible with these product identifications. [given, construct]

1.2 Put \(r=\dim_k t_F\), choose a basis, and set \(P=\mathcal O[T_1,\ldots,T_r]\) and \(\mathfrak n=(\mathfrak m_{\mathcal O},T_1,\ldots,T_r)\). By [F4], \(P\) is Noetherian; its \(\mathfrak n\)-adic completion is \(S=\mathcal O[[T_1,\ldots,T_r]]\), which is Noetherian by [F5]. Set \(J_2=\mathfrak m_{\mathcal O}S+(T_1,\ldots,T_r)^2\). By the product identification in step 1.1, choose \(\xi_2\in F(S/J_2)\) whose induced tangent map \(\operatorname{Hom}_{\mathcal O}(S/J_2,k[\epsilon])\to t_F\) sends the coordinate basis to the chosen basis. The quotient \(S/J_2\) is the square-zero local algebra \(k\oplus k^r\), so it is in \(\mathcal C_{\mathcal O}\). [F1, F4, F5, step 1.1, construct]

2.1 Suppose \(J_q\subseteq J_2\) and \(\xi_q\in F(S/J_q)\) have been constructed. Since \(\mathfrak n^2\subseteq J_2\) and every next ideal contains \(\mathfrak nJ_q\), induction gives \(\mathfrak n^q\subseteq J_q\). Thus \(S/J_q\) is Noetherian by [F6] and has nilpotent maximal ideal; its finite filtration by powers of that ideal has finitely generated \(k\)-vector-space quotients by [F3], so \(S/J_q\) is Artinian and belongs to \(\mathcal C_{\mathcal O}\). Consider all ideals \(J\) with \(\mathfrak nJ_q\subseteq J\subseteq J_q\) for which \(\xi_q\) is in the image of \(F(S/J)\to F(S/J_q)\). This family is nonempty because it contains \(J_q\); its members correspond to subspaces of the finite-dimensional space \(J_q/\mathfrak nJ_q\). Indeed [F3] makes \(J_q\) finitely generated, and its images span this quotient over \(k\). [F3, F6, step 1.2, construct]

2.2 This family is closed under pairwise intersection. For two eligible ideals \(J,K\), view them as subspaces of \(J_q/\mathfrak nJ_q\). Choose a complement to \((J+K)/J\) in \((J_q/\mathfrak nJ_q)/J\); adjoining this complement to \(J\) gives an eligible ideal \(J'\supseteq J\) with \(J'+K=J_q\) and \(J'\cap K=J\cap K\). The image of \(\xi_q\) still lifts to \(S/J'\), because \(S/J\to S/J'\) is a quotient map. The ring identity
\(S/(J'\cap K)\cong S/J'\times_{S/J_q}S/K\) and (H1) give a lift of \(\xi_q\) to \(F(S/(J'\cap K))\). Since \(J'\cap K=J\cap K\), this is the required intersection. If either kernel has dimension greater than one, filter it by one-dimensional \(k\)-subspaces and apply (H1) successively. Because \(k\) is finite and \(J_q/\mathfrak nJ_q\) is finite-dimensional, its subspace lattice is finite; therefore the intersection of all eligible ideals is a finite intersection and is eligible. Define it to be \(J_{q+1}\), and choose a lift \(\xi_{q+1}\). [F1, given, step 2.1, choose, algebra]

3.1 By [F2] repeat step 2.1 to form the compatible sequence \((J_q,\xi_q)\), and put \(R_q=S/J_q\). Let \(J=\bigcap_{q\ge2}J_q\) and \(R=S/J\). Each \(J_q\) contains \(\mathfrak n^q\), so it is both open and closed; \(J\) is closed. For fixed \(m\), \(J+\mathfrak n^m\) is also open and closed. If no \(J_q\) were contained in \(J+\mathfrak n^m\), the sets \(J_q\setminus(J+\mathfrak n^m)\) would be nested nonempty closed subsets of the compact space \(S\), by [F7]. Compactness gives a point in their intersection: otherwise their open complements would cover \(S\), and a finite subcover would contradict nested nonemptiness. But such a point lies in \(\bigcap_qJ_q=J\) and outside \(J+\mathfrak n^m\), a contradiction. Hence \(J_q/J\subseteq\mathfrak m_R^m\) for some \(q\); conversely \(\mathfrak m_R^q\subseteq J_q/J\). These inclusions make the quotient ideals \(J_q/J\) cofinal with the \(\mathfrak m_R\)-adic neighborhoods. A compatible family of cosets in \(S/J_q\) is a nested family of nonempty closed subsets of compact \(S\), so compactness gives a common representative; the kernel is \(J\). Therefore \(R\cong\varprojlim_qR_q\) and is complete. By [F6] and step 1.2, \(R\) is Noetherian; its quotients \(R/\mathfrak m_R^n\) have nilpotent maximal ideal and finite-dimensional \(k\)-layers by [F3], so they lie in \(\mathcal C_{\mathcal O}\). Extend \(F\) to this pro-object by \(F(R):=\varprojlim_qF(R_q)\); the compatible \(\xi_q\) define \(\xi\in F(R)\), and its tangent map is bijective by the choice of \(\xi_2\). [F2, F3, F6, F7, step 1.2, step 2.2, construct]

4.1 For a small extension \(B\to A\) with kernel \(I\), the fiber of \(F(B)\to F(A)\), when nonempty, carries an action of \(t_F\otimes_k I\): use \(B\times_A B\cong B\times_k k[I]\) and the product identification of step 1.1. Condition (H1) makes this action transitive, and (H4) makes it free. Put \(t_R=\operatorname{Hom}_{\mathcal O,\mathrm{cont}}(R,k[\epsilon])\). The fiber of \(h_R(B)\to h_R(A)\), when nonempty, is a torsor under
\(\operatorname{Hom}_k(\mathfrak m_R/(\mathfrak m_R^2+\mathfrak m_{\mathcal O}R),I)\cong t_R\otimes_k I\): the difference of two lifts is precisely an \(\mathcal O\)-derivation from \(R\) to \(I\), and such derivations factor through the displayed cotangent quotient. The tangent bijection in step 3.1 identifies these two acting spaces. [given, step 1.1, step 3.1, algebra]

4.2 The natural map \(h_R\to F\), where \(h_R(A)=\operatorname{Hom}_{\mathcal O,\mathrm{cont}}(R,A)\), is formally smooth. Given a small extension \(B\to A\) and a couple map \((R,\xi)\to(A,\eta)\), choose \(N\) with \(\mathfrak m_A^N=0\), then choose \(q\) with \(J_q/J\subseteq\mathfrak m_R^N\) by step 3.1. The map \(R\to A\) kills \(\mathfrak m_R^N\), hence kills \(J_q/J\), so it factors through \((R_q,\xi_q)\). The composite \(S\to R_q\to A\) lifts to \(S\to B\): choose lifts in the nilpotent maximal ideal of \(B\) for the images of the finitely many variables \(T_i\). Combining this lift with \(S\to R_q\) gives
\(w:S\to C:=R_q\times_A B\), whose composite with \(C\to R_q\) is surjective. The projection \(C\to R_q\) is a small extension. If it has a section, composing that section with \(C\to B\) gives a ring lift \(R_q\to B\). If it has no section, it is essential: any \(\mathcal O\)-subalgebra of \(C\) mapping onto \(R_q\) intersects its one-dimensional kernel in a \(k\)-subspace, hence either contains the whole kernel and equals \(C\), or intersects the kernel trivially and is a section. Hence \(w\) is surjective. In the nonsplit case, (H1) applied to the defining diagram \(R_q\to A\leftarrow B\) lifts the compatible pair \(\xi_q,\eta\) to \(F(C)\). Also \(\mathfrak nJ_q\subseteq\ker(w)\subseteq J_q\): for \(x\in J_q\), its image in \(B\) lies in \(I\), and multiplying by the image of \(\mathfrak n\) kills it because \(\mathfrak m_BI=0\). Thus \(\ker(w)\) is eligible in the family defining \(J_{q+1}\), so \(J_{q+1}\subseteq\ker(w)\). The quotient map \(R_{q+1}=S/J_{q+1}\to C\to B\), and the section map in the split case, give a ring lift \(R\to B\). The transitive action in step 4.1 adjusts either lift to carry \(\xi\) to \(\eta\). Therefore \(h_R\to F\) is smooth for small extensions, and factoring an arbitrary surjection into small extensions proves formal smoothness for all surjections. [given, step 2.2, step 3.1, step 4.1, construct]

5.1 Induct on \(d(A):=\sum_{j\ge1}\dim_k(\mathfrak m_A^j/\mathfrak m_A^{j+1})\), which is finite because \(\mathfrak m_A\) is nilpotent and its layers are finite-dimensional. For \(A=k\), \(d(A)=0\) and the comparison is bijective. If \(A\ne k\), let \(j\ge1\) be maximal with \(\mathfrak m_A^j\ne0\); then \(\mathfrak m_A^{j+1}=0\). Choose a one-dimensional \(k\)-subspace \(I\subseteq\mathfrak m_A^j\). It is an ideal because \(\mathfrak m_A I=0\) and the \(A\)-action on \(I\) factors through \(k\). Thus \(A\to A/I\) is a small extension and \(d(A/I)=d(A)-1\). By induction the comparison is bijective over \(A/I\). Formal smoothness from step 4.2 lifts each map representing the reduction of a point of \(F(A)\); the free transitive actions in step 4.1 then give exactly one adjustment matching that point. Thus \(h_R(A)\to F(A)\) is bijective. Induction on \(d(A)\) proves the comparison for every object, so \(R\) pro-represents \(F\). [given, step 4.1, step 4.2, induction] ∎

## Remarks

The pullback squares used in H1 and H4 are:

```tikzcd
\begin{tikzcd}[column sep=large, row sep=large]
A'\times_A A'' \arrow[r, "\mathrm{pr}_2"] \arrow[d, "\mathrm{pr}_1"'] & A'' \arrow[d, two heads] \\
A' \arrow[r] & A
\end{tikzcd}
```

```tikzcd
\begin{tikzcd}[column sep=large, row sep=large]
B\times_A B \arrow[r, "\mathrm{pr}_2"] \arrow[d, "\mathrm{pr}_1"'] & B \arrow[d, two heads] \\
B \arrow[r] & A
\end{tikzcd}
```

The arrows are the pullback projections and the given quotient maps, so the
two paths to the lower-right object agree by the defining pullback relation.
The numbered proof uses the algebraic universal property of these fiber
products and the stated quotient identities; no proof step relies on the
drawings.
