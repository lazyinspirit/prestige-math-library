---
id: lem-complete-reducibility-reduces-to-codimension-one-simple-submodules
kind: lemma
title: "Complete reducibility reduces to splitting codimension-one simple submodules"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps: [def-rational-representation-and-comodule-of-an-affine-group-scheme, def-simple-and-semisimple-representations, lem-tensor-and-hom-representations-are-rational]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22, Lemma 22.40, printed pp. 477-478; Ch. 4 (4.15)-(4.17)"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "none (Steinberg uses the compact-form averaging argument instead)"
---

## Statement

Let $G$ be an algebraic group over a field $k$ with
$X(G)=\operatorname{Hom}_k(G,\mathbf G_m)=0$, so that every one-dimensional
rational representation of $G$ is trivial
([[def-rational-representation-and-comodule-of-an-affine-group-scheme]],
[[def-simple-and-semisimple-representations]]). For a possibly nonaffine $G$, a finite-dimensional rational representation here means a morphism $G\to\operatorname{GL}_V$, with subrepresentations the invariant subspaces; this agrees with the cited comodule definition when $G$ is affine. Then the following conditions
are equivalent: (a) every finite-dimensional rational representation of $G$ is
semisimple; (b) every subrepresentation $W$ of codimension one in a
finite-dimensional representation $V$ is a direct summand; (c) every simple
subrepresentation $W$ of codimension one in a finite-dimensional representation
$V$ is a direct summand.

## Facts & Assumptions

**Given:** A field $k$, an algebraic group $G$ over $k$ with $X(G)=0$, and the notions of simple and semisimple rational representations and of subrepresentations ([[def-simple-and-semisimple-representations]]).

[F1] *Semisimplicity.* A rational representation $V$ is semisimple when $V=\bigoplus_{i\in I}S_i$ is an internal direct sum of simple subrepresentations; subrepresentations are the invariant subspaces (equivalently subcomodules when $G$ is affine), and the image of a subrepresentation under an equivariant map is a subrepresentation ([[def-simple-and-semisimple-representations]], [[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

[F2] *Hom representations.* For finite-dimensional rational representations $V,W$, the space $\operatorname{Hom}_k(V,W)$ with $(g\cdot f)(v)=g\cdot f(g^{-1}v)$ is a finite-dimensional rational representation, isomorphic to $V^*\otimes_kW$ ([[lem-tensor-and-hom-representations-are-rational]]). For a nonaffine $G$, the same formula is rational directly: in finite bases its matrix entries are products of the regular entries of the two representation matrices and of the inverse representation matrix, and the group law follows by substitution. Thus it defines a morphism $G\to\operatorname{GL}(\operatorname{Hom}_k(V,W))$ without an affineness hypothesis.

[F3] *Characters of one-dimensional representations.* A rational representation of $G$ on a one-dimensional $k$-space is given by a morphism $G\to\mathbf G_m$, that is, by an element of $X(G)$; since $X(G)=0$, such a representation is trivial, and a nonzero vector of it is fixed by every $R$-point of $G$ ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]], given).

## Proof

**Proof technique:** direct.

1.1 *(b)$\Rightarrow$(c)* is immediate: a simple subrepresentation of codimension one is in particular a subrepresentation of codimension one. [given]

1.2 *(a)$\Rightarrow$(b).* Since $V$ is finite-dimensional, its direct-sum decomposition has finitely many simple summands. Induct on their number. The zero-summand case is immediate. Write $V=S\oplus V'$ with $S$ simple and $V'$ a sum of fewer simple subrepresentations, and let $q:V\to V'$ be the projection. For a subrepresentation $W\subseteq V$, simplicity gives either $W\cap S=S$ or $W\cap S=0$. In the first case, $W=S\oplus(W\cap V')$; induction splits $W\cap V'$ in $V'$, hence splits $W$ in $V$. In the second case, $q|_W$ is injective and $q(W)$ is a subrepresentation of $V'$; induction gives $V'=q(W)\oplus C'$ for some subrepresentation $C'$. Set $C=S\oplus C'$. Every $v\in V$ differs from some $w\in W$ by an element of $C$, because the $q(W)$ component of $q(v)$ has a unique lift through the injective map $q|_W$. If $w\in W\cap C$, then $q(w)\in q(W)\cap C'=0$, so $w\in W\cap S=0$. Thus $V=W\oplus C$ in this case as well. [F1, given]

1.3 *(c)$\Rightarrow$(b), induction on $n=\dim V$.* Assume (c) and let $W\subseteq V$ be a subrepresentation of codimension one in an $n$-dimensional $V$. If $W=0$ then $V=0\oplus V$; if $W$ is simple then (c) applies; so suppose $W\ne0$ is not simple. Then $W$ has a nonzero proper subrepresentation, and a maximal proper subrepresentation $W'$ of $W$ exists and has $W/W'$ simple, since any strictly increasing chain of proper subrepresentations of the finite-dimensional $W$ has length at most $\dim W$. The quotient $V/W'$ has dimension $n-\dim W'<n$ when $W'\ne0$, and $W/W'$ is a simple subrepresentation of codimension one in $V/W'$, so (c) gives $V/W'=W/W'\oplus V'/W'$ for a subrepresentation $V'\subseteq V$ containing $W'$; then $\dim V'/W'=1$, so $\dim V'=\dim W'+1$. If $W'$ is simple, (c) splits the pair $W'\subseteq V'$; if $W'$ is not simple, then $\dim V'<n$ and the induction hypothesis (b) applied to $V'$ splits the pair $W'\subseteq V'$. In both cases $V'=W'\oplus L$ for a one-dimensional subrepresentation $L$. Now $W\cap V'=W'$ because $W/W'\cap V'/W'=0$ in the direct sum $V/W'=W/W'\oplus V'/W'$, so $W\cap L\subseteq W\cap V'=W'$ and $W\cap L\subseteq L$ give $W\cap L\subseteq W'\cap L=0$; and $\dim W+\dim L=(n-1)+1=n=\dim V$ with $W+L\subseteq V$, so $V=W\oplus L$. [given]

1.4 *(b)$\Rightarrow$(a), first the splitting property.* Assume (b) and let $W\subseteq V$ be a subrepresentation of a finite-dimensional $V$. If $W=0$, it is already a direct summand, so assume $W\ne0$. On the rational representation $\operatorname{Hom}_k(V,W)$ of [F2] consider the subrepresentations $V_1=\{f:f|_W=a\operatorname{id}_W\text{ for some }a\in k\}$ and $W_1=\{f:f|_W=0\}$; both are subrepresentations because $W$ is stable under $G$, and $V_1/W_1\cong k$ has dimension one. By (b) applied to the pair $W_1\subseteq V_1$ there is a one-dimensional subrepresentation $L$ with $V_1=W_1\oplus L$. Every nonzero $f\in L$ satisfies $f|_W=a\operatorname{id}_W$ with $a\ne0$; by [F3] the one-dimensional representation $L$ is trivial, so $g\cdot f=f$ for all $R$-points $g$, that is, $f(v)=g\cdot f(g^{-1}v)$ for all $v\in V$, which after replacing $g$ by $g^{-1}$ says $f(g\cdot v)=g\cdot f(v)$: $f$ is a homomorphism of rational representations. Replacing $f$ by $a^{-1}f$ we may suppose $f|_W=\operatorname{id}_W$, and then $V=W\oplus\ker f$ because $f|_W=\operatorname{id}_W$ gives $W\cap\ker f=0$ and $v-f(v)\in\ker f$ for every $v$. [F2, given, algebra]

2.1 *(b)$\Rightarrow$(a), conclusion.* Under (b) every subrepresentation of every finite-dimensional $V$ is a direct summand by step 1.4. We prove by induction on $\dim V$ that such a $V$ is a direct sum of simple subrepresentations. For $V=0$ this is the empty sum. If $V\ne0$, choose a nonzero subrepresentation $S\subseteq V$ of minimal dimension; it is simple, because a proper nonzero subrepresentation of $S$ would be a nonzero subrepresentation of $V$ of smaller dimension. By step 1.4, $V=S\oplus C$ with $\dim C<\dim V$, and every subrepresentation of $C$ is a subrepresentation of $V$, so the induction hypothesis applies to $C$ and exhibits it as a direct sum of simple subrepresentations; adjoining $S$ gives such a decomposition of $V$. [F1, step 1.4]

3.1 Steps 1.1, 1.2, 1.3, 1.4 and 2.1 prove (a)$\Rightarrow$(b)$\Rightarrow$(c) and (c)$\Rightarrow$(b)$\Rightarrow$(a), so the three conditions are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎

## Remarks

- The hypothesis $X(G)=0$ enters only in step 1.4, through the triviality of the one-dimensional representation $L$; it is what forces the constructed linear map $V\to W$ to be equivariant rather than merely $G$-invariant as a line.
- The proof is the source's proof of Lemma 22.40; the equivalence of the sum and direct-sum formulations of semisimplicity is not used, because the definition adopted here is the direct-sum one.
