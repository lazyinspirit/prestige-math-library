---
id: lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend
kind: lemma
title: "Quiver Harder–Narasimhan filtrations exist, are unique, and descend"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-acyclic-quiver-stability-data
  - lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form
  - lem-upper-half-plane-sum-phase-between
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, §4.4"
      url: "https://arxiv.org/pdf/1611.03696"
    - title: "Markus Reineke, The Harder–Narasimhan system in quantum groups and cohomology of quiver moduli, §2"
      url: "https://arxiv.org/pdf/math/0204059"
verification:
  precheck: pass
---

## Statement

Let $Q$ be finite and acyclic, let $k=\mathbb F_q$, and give every vertex an
arbitrary charge $z_i\in\mathbb H$. Over any field extension $K/k$, every
finite-dimensional representation has a unique filtration
$$0=M_0\subsetneq M_1\subsetneq\cdots\subsetneq M_r=M$$
whose nonzero factors $M_j/M_{j-1}$ are $Z$-semistable and have strictly
decreasing phases. If $M$ is defined over $k$, the unique filtration of its
scalar extension $M_{\bar k}=M\otimes_k\bar k$ is Frobenius invariant and
descends to $k$. Consequently geometric
semistability of an $\mathbb F_q$-representation is equivalent to
semistability tested only on its $\mathbb F_q$-subrepresentations. Write
$|\mathbf d|=\sum_i d_i$ for total dimension.

## Facts & Assumptions

**Given:** A finite acyclic quiver, $k=\mathbb F_q$, charges $z_i\in\mathbb H$,
and a finite-dimensional representation over an extension field $K/k$; for
the descent claims, the representation is the scalar extension of an object
defined over $k$.

[F1] The central charge is additive on short exact sequences, phases lie in
$(0,1)$, and semistability is tested on nonzero subrepresentations
([[def-finite-acyclic-quiver-stability-data]]).

[F2] Kernels, images, quotients and inverse images of subrepresentations are
computed vertexwise in the abelian category of quiver representations
([[lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form]]).

[F3] The phase of a sum of two nonzero upper-half-plane central charges lies
between their phases ([[lem-upper-half-plane-sum-phase-between]]).

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Let $M\ne0$ have dimension vector $\mathbf d$. The nonzero dimension vectors of its subrepresentations form a nonempty subset of the finite set $\{\mathbf e:0\le e_i\le d_i\}$. Choose the largest attained phase and, among subobjects attaining it, the largest attained total dimension. Such a phase and dimension are maxima of finite sets of attained values, so they are attained without an infinite choice. Let $S\subseteq M$ attain both maxima. Every nonzero subobject of $S$ is a subobject of $M$, so its phase is at most $\phi_Z(S)$; hence $S$ is semistable. [F1, choose, algebra]

1.2 If $A,B$ are semistable and $\phi_Z(A)>\phi_Z(B)$, then $\operatorname{Hom}(A,B)=0$. Indeed, a nonzero map has a nonzero image $I$. From $0\to\ker f\to A\to I\to0$, semistability of $A$ and [F3] force $\phi_Z(I)\ge\phi_Z(A)$: if the kernel is zero the phases are equal; if the kernel is nonzero and $\phi_Z(I)<\phi_Z(A)$, the phase of the sum lies strictly below $\phi_Z(A)$, contradicting $Z(A)=Z(\ker f)+Z(I)$. But $I\subseteq B$ and semistability of $B$ give $\phi_Z(I)\le\phi_Z(B)$, a contradiction. [F1, F2, F3]

2.1 If $T\subseteq M/S$ is nonzero, let $P\subseteq M$ be its inverse image. Then $0\to S\to P\to T\to0$ is exact. If $\phi_Z(T)>\phi_Z(S)$, [F3] gives $\phi_Z(P)>\phi_Z(S)$, contrary to maximality of the phase of $S$. If $\phi_Z(T)=\phi_Z(S)$, additivity and [F3] give $\phi_Z(P)=\phi_Z(S)$, while $|\mathbf d(P)|>|\mathbf d(S)|$, contrary to the second maximum. Thus every nonzero subobject of $M/S$ has phase strictly less than $\phi_Z(S)$. [F1, F2, F3, step 1.1]

2.2 Consider two filtrations with first subobjects $S,S'$ of phases $p,p'$. If $p>p'$, every factor in the quotient filtration of $M/S'$ has phase below $p'$. Step 1.2 therefore makes every map from $S$ to each such factor zero. Induction along the finite quotient filtration shows $\operatorname{Hom}(S,M/S')=0$: a map whose projection to the last factor is zero factors through the preceding subobject. Thus $S$ maps into $S'$, which contradicts semistability of $S'$ because $p>p'$. Interchanging $S,S'$ rules out $p'<p$ as well, so $p=p'$. Applying step 1.2 to all factors of both quotients now gives $S\subseteq S'$ and $S'\subseteq S$, hence $S=S'$. Induction on the quotient proves equality of the full filtrations. [F1, F2, step 1.2, construct]

3.1 Induct on $|\mathbf d(M)|$. The zero representation has the empty filtration. For $M\ne0$, the quotient $M/S$ has smaller total dimension, so by induction it has a filtration with semistable factors in strictly decreasing phase order. Step 2.1 places every one of those phases below $\phi_Z(S)$. Pulling that filtration back along $M\to M/S$ and placing $S$ first gives the required filtration of $M$. [F2, step 1.1, step 2.1, construct]

4.1 Let $M$ be defined over $k$, set $M_{\bar k}=M\otimes_k\bar k$, and let $\sigma(x)=x^q$ be Frobenius. Applying $\sigma$ to a filtration preserves the arrow maps of $M_{\bar k}$, every dimension vector, and every phase. It therefore gives another HN filtration; uniqueness proved above fixes each term. At each vertex, a Frobenius-invariant subspace has a unique reduced row-echelon basis matrix. Applying $\sigma$ gives another such matrix for the same subspace, so uniqueness makes the matrix fixed entrywise. Its entries lie in $\mathbb F_q$, and the arrow maps of $M$ preserve these descended subspaces. Thus the filtration descends to $k$. [F1, F2, step 3.1, step 2.2, algebra]

5.1 If an $\mathbb F_q$-object is geometrically unstable, it has a geometric subrepresentation of phase greater than its total phase. Step 1.1 chooses a subobject of maximal phase, so the first HN term has phase greater than the total phase. Step 4.1 descends that term and its phase inequality to $\mathbb F_q$, contradicting $\mathbb F_q$-semistability. Conversely, an $\mathbb F_q$-subrepresentation extends to $\bar k$ with the same dimension vector and phase. This proves the stated equivalence and the result. [F1, step 1.1, step 4.1] ∎
