---
id: prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient
kind: proposition
title: "A representation with kernel containing a normal subgroup factors through the quotient, and irreducibility is unchanged by inflation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kernel-and-image-of-group-homomorphism, def-normal-subgroup, prop-canonical-quotient-map, thm-quotient-group-laws]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 4.2"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be a group, let $N\mathrel{\trianglelefteq}G$ be a normal subgroup,
and let $\rho:G\to\operatorname{GL}(V)$ be a representation over a field $k$
with $N\subseteq\ker\rho$. Then:

1. the formula $\overline\rho(gN):=\rho(g)$ defines a well-posed
   representation $\overline\rho:G/N\to\operatorname{GL}(V)$ with
   $\rho=\overline\rho\circ\pi$, where $\pi:G\to G/N$ is the canonical
   quotient map;
2. $V$ is irreducible as a representation of $G$ if and only if it is
   irreducible as a representation of $G/N$.

## Facts & Assumptions

**Given:** A group $G$, a normal subgroup $N\mathrel{\trianglelefteq}G$, a
field $k$, and a representation $\rho:G\to\operatorname{GL}(V)$ with
$N\subseteq\ker\rho$.

[F1] The kernel of a group homomorphism is the preimage of the identity
([[def-kernel-and-image-of-group-homomorphism]]).

[F2] A subgroup $N$ of $G$ is normal exactly when $gNg^{-1}=N$ for every
$g\in G$ ([[def-normal-subgroup]]).

[F3] The canonical map $\pi:G\to G/N$, $\pi(g)=gN$, is a surjective group
homomorphism ([[prop-canonical-quotient-map]]).

[F4] The cosets form the group $G/N$ under $(gN)(hN)=ghN$, with identity
$N$ and inverse $g^{-1}N$ ([[thm-quotient-group-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $gN=hN$, then $g^{-1}h\in N$ by the coset laws of [F4], so
$\rho(g^{-1}h)=e$ by [F1] and the hypothesis $N\subseteq\ker\rho$; hence
$\rho(h)=\rho(g)$. Therefore $\overline\rho(gN):=\rho(g)$ is independent of
the chosen coset representative. [F1, F4, given]

2.1 By [F4], $(gN)(hN)=ghN$; applying $\rho$ gives
$\overline\rho(gN)\overline\rho(hN)=\rho(g)\rho(h)=\rho(gh)
=\overline\rho(ghN)=\overline\rho((gN)(hN))$, so $\overline\rho$ is a group
homomorphism into $\operatorname{GL}(V)$, with
$\rho=\overline\rho\circ\pi$ by [F3]. This proves claim 1. [F3, F4, step 1.1,
given]

3.1 A subspace $U\subseteq V$ is $\rho$-stable exactly when it is
$\overline\rho$-stable, because $\pi$ of [F3] is surjective and
$\rho(g)=\overline\rho(gN)$: the two stability conditions quantify over the
same operators. [F3, step 2.1, given]

4.1 A representation is irreducible exactly when its only stable subspaces
are $0$ and $V$. By step 3.1 the stable subspaces for $\rho$ and for
$\overline\rho$ coincide, so the two irreducibility statements are
equivalent, which is claim 2. [step 3.1, algebra] ∎
