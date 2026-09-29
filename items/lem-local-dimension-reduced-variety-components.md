---
id: lem-local-dimension-reduced-variety-components
kind: lemma
title: "Local dimension for a reducible classical algebraic set"
status: draft
origin: pipeline
deps:
  - lem-dimension-local-ring-codimension-closure
  - lem-classical-variety-noetherian-components
  - def-axiom-of-choice
  - def-coordinate-ring-affine-algebraic-set
  - thm-classical-affine-nullstellensatz-correspondence
  - thm-local-ring-affine-variety-localization
  - thm-prime-spectrum-of-a-localisation-bijection
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Milne, Algebraic Geometry, §3c notes 3.13–3.14 and §4i, proof of Corollary 4.45"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Milne, Algebraic Geometry Chapter 10 supplement, §§10.54–10.56"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a reduced classical finite-type space
over an algebraically closed field $k$, and let $x\in X$ be a closed point.
If $X_i$ are the irreducible components of $X$, then
$$\dim\mathcal O_{X,x}=\max_{x\in X_i}\dim X_i.$$

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, a reduced classical finite-type
space $X$ over $k$, and a closed point $x\in X$.

[F1] A classical variety is Noetherian with finitely many irreducible
components; every open or closed subvariety has a finite affine cover
([[lem-classical-variety-noetherian-components]]).

[F2] For an affine algebraic set $U\subseteq\mathbf A_k^n$, its coordinate ring
is $k[U]=k[t_1,\ldots,t_n]/I(U)$ ([[def-coordinate-ring-affine-algebraic-set]]).

[F3] Over algebraically closed $k$ and under AC, the Nullstellensatz
correspondence identifies radical ideals of $k[U]$ with closed subsets of $U$;
nonempty irreducible closed subsets correspond to proper prime ideals
([[thm-classical-affine-nullstellensatz-correspondence]]).

[F4] For a classical affine variety $U$ and $x\in U$, the local ring is
canonically $\mathcal O_{U,x}\cong k[U]_{\mathfrak m_x}$, where
$\mathfrak m_x$ is the ideal of functions vanishing at $x$
([[thm-local-ring-affine-variety-localization]]).

[F5] For a ring $A$ and multiplicative set $S$, prime ideals of $S^{-1}A$
correspond by an inclusion-preserving bijection to the prime ideals of $A$
disjoint from $S$ ([[thm-prime-spectrum-of-a-localisation-bijection]]).

[F6] If $Y$ is an irreducible classical variety and $x$ is a closed point of
$Y$, then $\dim\mathcal O_{Y,x}=\dim Y$
([[lem-dimension-local-ring-codimension-closure]]).

[F7] AC says that every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

## Proof

1.1 Choose an affine open neighborhood $U\subseteq X$ of $x$, put $A=k[U]$, let $\mathfrak m\subset A$ be the maximal ideal of functions vanishing at $x$, and write $R=\mathcal O_{X,x}$. By [F4], $R\cong A_{\mathfrak m}$. The finite component decomposition of $X$ restricts to a finite decomposition of $U$ by its irreducible components $U_j=X_j\cap U$; precisely those $U_j$ containing $x$ come from the global components $X_j$ containing $x$. [F1, F2, F4, F7, given, choose]

2.1 For each component $U_j$, let $\mathfrak p_j=I_U(U_j)\subseteq A$. The Nullstellensatz correspondence makes $\mathfrak p_j$ prime and reverses inclusions of closed subsets. The localization correspondence identifies the primes of $R=A_{\mathfrak m}$ with the primes $\mathfrak p\subseteq\mathfrak m$ of $A$, preserving strict chains. In particular, if $x\in U_j$, then $\mathfrak q_j:=\mathfrak p_jA_{\mathfrak m}$ is a prime of $R$. [F3, F5, step 1.1]

3.1 Consider any strict prime chain $\mathfrak q_0\subsetneq\mathfrak q_1\subsetneq\cdots\subsetneq\mathfrak q_r$ in $R$, and contract it to $\mathfrak p_0\subsetneq\mathfrak p_1\subsetneq\cdots\subsetneq\mathfrak p_r$ in $A$ using [F5]. The irreducible closed subset $V_U(\mathfrak p_0)$ contains $x$, since $\mathfrak p_0\subseteq\mathfrak m$. Because $U$ is a finite union of its irreducible components, irreducibility forces $V_U(\mathfrak p_0)\subseteq U_j$ for some $j$. Thus $x\in U_j$ and $\mathfrak p_j\subseteq\mathfrak p_0$, so $\mathfrak q_j\subseteq\mathfrak q_0$. The chain therefore gives a chain of length $r$ in $R/\mathfrak q_j$. [F1, F3, F5, step 2.1, algebra]

4.1 The quotient-localization isomorphism gives $R/\mathfrak q_j\cong(A/\mathfrak p_j)_{\mathfrak m/\mathfrak p_j}$, which is the local ring $\mathcal O_{U_j,x}=\mathcal O_{X_j,x}$ because $U_j=X_j\cap U$ is an open neighborhood of $x$ in $X_j$. Hence [F6] gives $\dim(R/\mathfrak q_j)=\dim X_j$. Step 3.1 now bounds every chain length in $R$ by $\max_{x\in X_i}\dim X_i$. [F2, F4, F6, step 3.1, algebra]

5.1 Conversely, for every global component $X_i$ containing $x$, its $\mathfrak q_i$ is prime in $R$ by step 2.1 and $\dim(R/\mathfrak q_i)=\dim X_i$ by step 4.1. Every prime chain in $R/\mathfrak q_i$ lifts to a prime chain in $R$, so $\dim R\ge\dim X_i$. Taking the maximum gives the reverse inequality. [F6, step 2.1, step 4.1, algebra]

6.1 Steps 3.1–5.1 prove the asserted equality. The argument uses AC only through the explicitly AC-dependent component, affine-correspondence, local-ring, and irreducible local-dimension suppliers; after their finite component and prime correspondences are in hand, the chain comparison makes no further choice. [F7, step 3.1, step 4.1, step 5.1] ∎

## Source note

Milne’s §3c notes 3.13–3.14 identify local primes with irreducible closed
subsets through a point and identify the components through that point with
minimal local primes. The proof of Corollary 4.45 in §4i uses this local
component description. The dimension of each irreducible component at a closed
point is supplied here by [[lem-dimension-local-ring-codimension-closure]];
Milne’s Chapter 10 supplement, 10.54–10.56, gives the corresponding
irreducible-scheme dimension conventions. The finite reducible case above is
proved by the displayed prime-chain comparison.
