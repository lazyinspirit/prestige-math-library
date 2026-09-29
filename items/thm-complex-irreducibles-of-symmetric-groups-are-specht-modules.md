---
id: thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
kind: theorem
title: Specht modules classify the complex irreducibles of $S_n$
status: published
origin: pipeline
pipeline_run: frontier-36-complete
landmark: false
deps:
  - thm-complex-specht-modules-are-irreducible
  - cor-distinct-specht-modules-are-inequivalent
  - thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order
  - cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types
  - def-partition-young-diagram-and-conjugate-partition
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-subrepresentation-and-irreducible-representation
  - def-intertwiner-equivalent-and-faithful-representations
  - def-symmetric-group
  - lem-symmetric-group-is-a-group
  - cor-symmetric-group-has-factorial-cardinality-again
  - def-finite-cardinality
  - thm-subset-of-a-finite-set
  - def-injection-surjection-bijection
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
  - def-field-homomorphism
  - thm-the-complex-numbers-are-algebraically-closed
  - thm-reals-ordered-field
  - lem-of-naturals-positive
  - lem-characteristic-and-additive-order
  - lem-characteristic-divisibility-and-invertibility-of-a-natural-scalar-in-a-field
  - lem-nat-embeds-int
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Corollary 4.5 and its proof, printed p. 16; its proof cites Theorem 4.4 and the first corollary of Lecture 2"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 3.5 and Corollary 3.6 with proof, printed pp. 33-34"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

For every $n\ge0$, the modules $\{S^\lambda:\lambda\vdash n\}$ form a
complete irredundant list, up to isomorphism, of finite-dimensional irreducible
complex $S_n$-representations.

## Facts & Assumptions

**Given:** $n\ge0$. Let $\mathcal P_n$ be the set of partitions of $n$,
$\mathcal C_n$ the set of conjugacy classes of $S_n$, and $\mathcal I_n$ the
set of isomorphism classes of finite-dimensional irreducible complex
$S_n$-representations.

[F1] A partition is a finite weakly decreasing list of positive integers with
sum $n$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] $S_n=\operatorname{Sym}(\{1,\dots,n\})$ and
$S_0=\operatorname{Sym}(\emptyset)=\{1\}$
([[def-partition-young-diagram-and-conjugate-partition]],
[[def-symmetric-group]]); $\operatorname{Sym}(X)$ is a group
([[lem-symmetric-group-is-a-group]]).

[F3] $S_n$ is finite and $|S_n|=n!$
([[cor-symmetric-group-has-factorial-cardinality-again]]).

[F4] $\mathbb C=\mathbb R[x]/(x^2+1)$ is a field containing the embedded copy
$\iota:\mathbb R\hookrightarrow\mathbb C$
([[def-complex-numbers-and-arithmetic]],
[[thm-complex-numbers-form-a-field]]); this field embedding preserves $1$ and
addition ([[def-field-homomorphism]]).

[F5] $\mathbb R$ is an ordered field and, for every integer $m\ge1$, its
canonical natural $m\cdot1_{\mathbb R}$ is positive
([[thm-reals-ordered-field]], [[lem-of-naturals-positive]]).

[F6] A ring has characteristic zero exactly when no positive integer multiple
of its identity is zero ([[lem-characteristic-and-additive-order]]).

[F7] The natural-to-integer embedding preserves order, and zero divides no
positive integer ([[lem-nat-embeds-int]],
[[lem-characteristic-divisibility-and-invertibility-of-a-natural-scalar-in-a-field]]).

[F8] $\mathbb C$ is algebraically closed
([[thm-the-complex-numbers-are-algebraically-closed]]).

[F9] For a finite group $G$ and algebraically closed field $k$ with
$\operatorname{char}k\nmid|G|$, the finite set of irreducible representation
classes has cardinality equal to the finite set of conjugacy classes
([[thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order]]).

[F10] Conjugacy classes of $S_n$ are in bijection with the tuples of
nonnegative integers $(c_1,\dots,c_n)$ satisfying $\sum_{k=1}^n kc_k=n$;
when $n=0$ the unique empty tuple indexes the identity class
([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]]).

[F11] Each $S^\lambda$ is a nonzero irreducible complex representation of
$S_n$ ([[thm-complex-specht-modules-are-irreducible]]).

[F12] If $S^\lambda\cong S^\mu$ for $\lambda,\mu\vdash n$, then
$\lambda=\mu$ ([[cor-distinct-specht-modules-are-inequivalent]]).

[F13] A representation is finite-dimensional as specified in
[[def-finite-dimensional-representation-of-a-group-over-a-field]], is
irreducible when it is nonzero and has no proper nonzero subrepresentation
([[def-subrepresentation-and-irreducible-representation]]), and two
representations are equivalent exactly when an invertible intertwiner exists
([[def-intertwiner-equivalent-and-faithful-representations]]).

[F14] For finite sets, a bijection transports cardinality
([[def-finite-cardinality]]).

[F15] If $J\subseteq I$ and $I$ is finite, then $J$ is finite and
$|J|=|I|$ implies $J=I$
([[thm-subset-of-a-finite-set]]).

[F16] A map is injective when equal outputs force equal inputs, is surjective
when its image is the codomain, and is bijective when it is both injective and
surjective
([[def-injection-surjection-bijection]]).

[F17] For $n=0$ the only partition is the empty list
([[def-partition-young-diagram-and-conjugate-partition]]).

[F18] Cardinality is defined for finite sets, and a finite set has cardinality
only as a natural number ([[def-finite-cardinality]]).

[F19] For $n=0$, the unique empty tuple indexes the identity class of $S_0$
([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]]).

[F20] A finite set has cardinality zero exactly when it is empty
([[def-finite-cardinality]]).

No Axiom of Choice is used.

## Proof

**Proof technique:** counting.

1.1 For each $m\ge1$, [F5] gives $m\cdot1_{\mathbb R}>0$. The embedding in [F4] sends this canonical real scalar to $m\cdot1_{\mathbb C}$; if the latter were zero, injectivity would make the positive real scalar zero, a contradiction. Thus no positive integer multiple of $1_{\mathbb C}$ is zero, and [F6] yields $\operatorname{char}\mathbb C=0$. [F4, F5, F6]

1.2 The identity permutation belongs to $S_n$, so [F3] makes $S_n$ a nonempty finite group and [F20] gives $|S_n|>0$. The natural-to-integer embedding in [F7] preserves positivity, so characteristic zero does not divide this order; [F8] supplies the algebraic-closure hypothesis. Applying [F9] shows that $\mathcal I_n$ and $\mathcal C_n$ are finite and $|\mathcal I_n|=|\mathcal C_n|$. [F2, F3, F7, F8, F9, F18, F20]

1.3 For a tuple $(c_1,\dots,c_n)$ from [F10], form the finite list containing $c_k$ copies of $k$ for each $k=n,n-1,\dots,1$. Its entries are positive, weakly decreasing and sum to $n$, so [F1] makes it a partition. The inverse map sends a partition to the multiplicity $c_k$ of each part $k$. For $n=0$, [F17] and [F19] make both constructions the empty list/tuple. Thus the tuple set in [F10] is in bijection with $\mathcal P_n$, and [F10] then gives $\mathcal P_n\approx\mathcal C_n$. [F1, F10, F17, F19, construct]

1.4 Define $\Phi:\mathcal P_n\to\mathcal I_n$ by $\Phi(\lambda)=[S^\lambda]$. Fact [F11] makes this a well-defined map into $\mathcal I_n$, and [F12] makes it injective. [F11, F12, given]

2.1 By [F14] and step 1.2, the bijection in step 1.3 transports finiteness and cardinality, so $\mathcal P_n$ is finite and $|\mathcal P_n|=|\mathcal C_n|=|\mathcal I_n|$. [F14, step 1.2, step 1.3]

3.1 Let $J:=\Phi[\mathcal P_n]\subseteq\mathcal I_n$. The map $\Phi$ is injective by step 1.4, and its corestriction to its image is surjective by the definition of $J$; [F16] therefore makes this corestriction a bijection. Hence $|J|=|\mathcal P_n|=|\mathcal I_n|$ by step 2.1. Since $\mathcal I_n$ is finite by step 1.2, [F15] gives $J=\mathcal I_n$. Thus $\Phi$ is surjective as well as injective. [F15, F16, step 1.2, step 2.1, step 1.4]

4.1 The surjectivity in step 3.1 says every finite-dimensional irreducible complex $S_n$-representation is isomorphic to some $S^\lambda$; injectivity in step 1.4 says no two distinct partitions give isomorphic modules. These are exactly completeness and irredundancy, proving the statement. [F11, F12, F13, step 1.4, step 3.1] ∎
