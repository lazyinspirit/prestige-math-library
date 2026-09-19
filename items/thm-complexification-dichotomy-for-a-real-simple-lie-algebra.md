---
id: thm-complexification-dichotomy-for-a-real-simple-lie-algebra
kind: theorem
title: Complexification dichotomy for a real simple lie algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-complexification-of-a-real-lie-algebra, prop-complexification-preserves-semisimplicity, thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals, def-simple-semisimple-and-reductive-lie-algebras, prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero, cor-semisimple-lie-algebras-are-centerless-and-perfect, thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, lem-chevalley-basis-and-real-structure-constants, def-cartan-subalgebra-of-a-lie-algebra, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §9, Theorem 6.94 and Proposition 6.95 with their proofs, printed pp. 406-408"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 39, §39.2 and the paragraph after Theorem 39.6, printed pp. 182-184"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak g_0$ be a finite-dimensional real simple Lie algebra
([[def-simple-semisimple-and-reductive-lie-algebras]]) with complexification
$\mathfrak g=\mathfrak g_0\otimes_{\mathbb R}\mathbb C$
([[def-complexification-of-a-real-lie-algebra]]). Then exactly one of the
following holds:

1. $\mathfrak g$ is a complex simple Lie algebra;
2. $\mathfrak g=\mathfrak s\oplus\sigma(\mathfrak s)$ is a direct sum of two
   simple ideals interchanged by the canonical conjugation $\sigma$ of
   $\mathfrak g$ over $\mathfrak g_0$
   ([[prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero]]),
   and the two ideals are isomorphic complex Lie algebras. In this case
   $\mathfrak g_0$ is isomorphic, as a real Lie algebra, to the complex simple
   Lie algebra $\mathfrak s$ regarded as a real Lie algebra.

In particular a real simple Lie algebra is either a complex simple Lie algebra
viewed as a real Lie algebra, or a noncomplex simple Lie algebra whose
complexification is simple.

## Facts & Assumptions

**Given:** A finite-dimensional real simple Lie algebra $\mathfrak g_0$ that is nonabelian with no nonzero proper ideal, with complexification $\mathfrak g=\mathfrak g_0\otimes_{\mathbb R}\mathbb C$ and canonical conjugation $\sigma$; and the notation of [[def-simple-semisimple-and-reductive-lie-algebras]], [[def-complexification-of-a-real-lie-algebra]] and [[prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero]].

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters only through the isomorphism theorem of [L6], which is used in step 5.1 to identify the complex Lie algebra $\mathfrak s$ with its complex conjugate.

[L1] A Lie algebra is simple if it is nonabelian and has no nonzero proper ideal, and semisimple if its radical is zero; a solvable ideal of a semisimple algebra is zero ([[def-simple-semisimple-and-reductive-lie-algebras]]).

[L2] The complexification $\mathfrak g_{\mathbb C}$ of a finite-dimensional real Lie algebra $\mathfrak g_0$ carries the bracket $[X\otimes z,Y\otimes w]=[X,Y]\otimes zw$, every element has a unique expression $X\otimes1+i\,Y\otimes1$ with $X,Y\in\mathfrak g_0$, and $\mathfrak g_0$ embeds as a real form ([[def-complexification-of-a-real-lie-algebra]]).

[L3] The canonical conjugation $\sigma(X\otimes z)=X\otimes\bar z$ is a well-defined conjugate-linear bracket-preserving involution of $\mathfrak g$ with fixed locus $\mathfrak g_0\otimes1$, so it is additive and real-linear, $\sigma^2=\mathrm{id}$, and $\sigma(iz)=-i\,\sigma(z)$ for $z\in\mathfrak g$ ([[prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero]]).

[L4] $\mathfrak g_0$ is semisimple if and only if $\mathfrak g$ is semisimple ([[prop-complexification-preserves-semisimplicity]]).

[L5] Every finite-dimensional semisimple Lie algebra over a characteristic-zero field is a finite direct sum of simple ideals, and the simple ideals are nonabelian with trivial center and satisfy $[\mathfrak l,\mathfrak l]=\mathfrak l$ ([[thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals]], [[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L6] Every complex semisimple Lie algebra has a Cartan subalgebra; relative to it, the algebra has a root-space decomposition with one-dimensional root spaces and admits a Chevalley basis with integer, hence real, structure constants ([[thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]], [[lem-chevalley-basis-and-real-structure-constants]], [[def-cartan-subalgebra-of-a-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 $\mathfrak g_0$ is semisimple: its radical is an ideal, and the only ideals of the nonabelian simple algebra $\mathfrak g_0$ are $0$ and $\mathfrak g_0$, so either the radical is zero and $\mathfrak g_0$ is semisimple, or the radical is $\mathfrak g_0$, which would make $\mathfrak g_0$ solvable and hence abelian in the simple case, a contradiction. [L1]

1.2 $\sigma$ is a conjugate-linear involutive automorphism of $\mathfrak g$, hence additive and real-linear with $\sigma^2=\mathrm{id}_{\mathfrak g}$, its fixed locus is exactly $\mathfrak g_0$, and $\sigma(iX)=-i\,\sigma(X)$ for every $X\in\mathfrak g$. [L2, L3]

2.1 $\mathfrak g$ is semisimple by [L4] and step 1.1, so it is a finite direct sum $\mathfrak g=\mathfrak g_1\oplus\cdots\oplus\mathfrak g_n$ of simple ideals. Moreover every ideal $\mathfrak a$ of $\mathfrak g$ is the sum of the simple ideals it contains: the projection $p_j\colon\mathfrak g\to\mathfrak g_j$ is a Lie algebra homomorphism, so $p_j(\mathfrak a)$ is an ideal of the simple algebra $\mathfrak g_j$ and is therefore $0$ or $\mathfrak g_j$; and $p_j(\mathfrak a)\ne0$ forces $\mathfrak g_j\subseteq\mathfrak a$, because for $x\in\mathfrak a$ with $x_j:=p_j(x)\ne0$ one has $[x,\mathfrak g_j]=[x_j,\mathfrak g_j]\subseteq\mathfrak a\cap\mathfrak g_j$, which would be zero if $\mathfrak a\cap\mathfrak g_j=0$ and would then put the nonzero $x_j$ in the center $Z(\mathfrak g_j)=0$. Hence the simple ideals are exactly the minimal nonzero ideals, and $[\mathfrak g_j,\mathfrak g_j]=\mathfrak g_j\ne0$ for every $j$. [L1, L5, step 1.1]

3.1 Let $\pi$ be the permutation of $\{1,\dots,n\}$ determined by $\sigma(\mathfrak g_i)=\mathfrak g_{\pi(i)}$, which is well defined because $\sigma$ carries simple ideals to nonzero simple ideals by step 1.2 and step 2.1; then $\pi$ is transitive. Suppose it has at least two orbits, let $O$ be one of them and put $\mathfrak W=\bigoplus_{i\in O}\mathfrak g_i$ and $\mathfrak W'=\bigoplus_{i\notin O}\mathfrak g_i$. Both are nonzero ideals of $\mathfrak g$, both are $\sigma$-stable because $O$ and its complement are unions of orbits, and $\mathfrak g=\mathfrak W\oplus\mathfrak W'$. Every $X\in\mathfrak g_0$ is $\sigma$-fixed, so by uniqueness of the decomposition its components in $\mathfrak W$ and $\mathfrak W'$ are $\sigma$-fixed as well by step 1.2; hence $\mathfrak g_0=(\mathfrak g_0\cap\mathfrak W)\oplus(\mathfrak g_0\cap\mathfrak W')$, and each summand is an ideal of $\mathfrak g_0$ because it is the intersection of the subalgebra $\mathfrak g_0$ with an ideal of $\mathfrak g$. Both summands are nonzero: if $O=\{i\}$ and $0\ne x\in\mathfrak g_i$, then $x+\sigma x$ and $i(x-\sigma x)$ cannot both vanish and each is a $\sigma$-fixed element of $\mathfrak W$; if $O=\{i,j\}$ with $\sigma(\mathfrak g_i)=\mathfrak g_j$ and $0\ne x\in\mathfrak g_i$, then $x+\sigma x$ is a nonzero $\sigma$-fixed element of $\mathfrak W$ by step 1.2. Thus $\mathfrak g_0$ would be the direct sum of two nonzero proper ideals, contradicting simplicity, so $\pi$ is transitive and either $n=1$ or $n=2$ with $\mathfrak g=\mathfrak g_1\oplus\mathfrak g_2$ and $\sigma(\mathfrak g_1)=\mathfrak g_2$. [step 1.2, step 2.1]

4.1 All orbits of $\pi$ have one or two elements: applying $\sigma$ twice to $\sigma(\mathfrak g_i)=\mathfrak g_{\pi(i)}$ gives $\mathfrak g_i=\mathfrak g_{\pi(\pi(i))}$ by step 1.2, so $\pi^2=\mathrm{id}$ and every orbit of the resulting involution has at most two elements. [step 1.2, step 3.1]

4.2 In the case $n=2$ the projection $p\colon\mathfrak g\to\mathfrak g_1$ restricts to an isomorphism of real Lie algebras $\mathfrak g_0\to(\mathfrak g_1)_{\mathbb R}$, where $(\mathfrak g_1)_{\mathbb R}$ denotes the complex Lie algebra $\mathfrak g_1$ with scalars restricted to $\mathbb R$. Indeed $p$ is a Lie algebra homomorphism; it is injective on $\mathfrak g_0$ because $\mathfrak g_0\cap\mathfrak g_2=0$, an element of that intersection being $\sigma$-fixed and at the same time lying in $\mathfrak g_1$ by $\sigma(\mathfrak g_2)=\mathfrak g_1$; and it is surjective because for $x\in\mathfrak g_1$ the element $x+\sigma x$ lies in $\mathfrak g_0$ by step 1.2 and is mapped to $x$. Moreover $\sigma$ restricts to a conjugate-linear isomorphism $\mathfrak g_1\to\mathfrak g_2$, so $\mathfrak g_2$ is isomorphic to the complex conjugate Lie algebra $\overline{\mathfrak g_1}$. [step 1.2, step 3.1]

5.1 If $n=1$, then $\mathfrak g=\mathfrak g_1$ is a complex simple Lie algebra, which is alternative 1 of the Statement. If $n=2$, then $\mathfrak g=\mathfrak g_1\oplus\mathfrak g_2$ with $\mathfrak g_2=\sigma(\mathfrak g_1)$ and both ideals simple; by step 4.2 the real Lie algebra $\mathfrak g_0$ is isomorphic to $(\mathfrak g_1)_{\mathbb R}$, so $\mathfrak g_0$ is the complex simple algebra $\mathfrak g_1$ regarded as a real Lie algebra. The two ideals are isomorphic as complex Lie algebras: by [L6], choose a Chevalley basis $(b_j)$ of $\mathfrak g_1$ with real structure constants $[b_i,b_j]=\sum_k c_{ij}^k b_k$. If $(\overline b_j)$ denotes the corresponding basis of the conjugate algebra $\overline{\mathfrak g_1}$, then $\overline b_j\mapsto b_j$ is complex-linear and bracket-preserving because every $c_{ij}^k$ is real. Thus $\overline{\mathfrak g_1}\cong\mathfrak g_1$, while the conjugate-linear isomorphism $\sigma:\mathfrak g_1\to\mathfrak g_2$ is equivalently a complex-linear isomorphism $\overline{\mathfrak g_1}\to\mathfrak g_2$; hence $\mathfrak g_2\cong\mathfrak g_1$. This is alternative 2 and completes the dichotomy. [A1, L6, step 4.1, step 4.2] ∎

## Remarks

- The dichotomy is Knapp's Theorem 6.94, printed pp. 406-408: a real simple
  Lie algebra is either complex (as a Lie algebra) or has simple
  complexification. The proof above uses only the effect of the canonical
  conjugation on the decomposition of the complexification into simple ideals,
  which is why it needs no Cartan-theoretic hypothesis. The Axiom of Choice is
  declared as [[def-axiom-of-choice]] and is used exactly once, through the
  isomorphism theorem invoked in step 4.1 to identify a complex semisimple Lie
  algebra with its complex conjugate.
