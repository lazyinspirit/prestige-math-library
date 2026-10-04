---
id: ex-translation-through-the-sl2-wall
kind: example
title: "Translation through the sl2 wall"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - cor-central-characters-are-dot-weyl-orbits
  - def-dot-action-facets-and-single-wall-translation-data
  - def-translation-functor-between-o-blocks
  - def-truncated-category-o-at-a-finite-weight-ideal
  - def-verma-flag-and-its-multiplicities
  - ex-projective-covers-in-the-regular-sl2-block
  - lem-every-nonzero-verma-submodule-contains-a-singular-vector
  - lem-finite-length-objects-decompose-into-indecomposables
  - lem-maximal-verma-is-projective-in-a-finite-truncation
  - lem-verma-flag-multiplicities-are-independent-of-the-flag
  - prop-projective-covers-in-o-are-indecomposable-and-unique
  - prop-translation-functors-are-exact-and-biadjoint-across-a-wall
  - thm-central-character-summands-split-into-linkage-blocks
  - thm-every-category-o-object-has-finite-length
  - thm-projective-object-characterisations
  - thm-translation-to-and-from-a-wall-on-standard-modules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9, Example 3.16 and Construction 3.17"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
      locator: "§3, Example 3.16 and Construction 3.17, printed p. 7 (full text read at harvest)"
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Remark 24.2"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§24.1, Remark 24.2, printed pp. 120-121 (full text read at harvest)"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $\mathfrak g=\mathfrak{sl}_2$ with the coordinate
$l=\langle\lambda,\alpha^\vee\rangle$ on weights, so that $\rho$ has coordinate
$1$ and the dot action of the wall reflection is $s\mathbin\cdot l=-l-2$. Take
the single-wall translation datum $(\lambda,\mu)=(-2,-1)$: $\lambda+\rho=-1$
spans the negative chamber, $\mu+\rho=0$ is the wall $l=-1$, the translating
weight is $\nu=1$, and the reverse pair $(0,-1)$ realizes the same central
characters because $s\mathbin\cdot(-2)=0$ and $s\mathbin\cdot(-1)=-1$. Thus
$T_0^{-1}=T_{-2}^{-1}$ and $T_{-1}^0=T_{-1}^{-2}$ are the same two functors.

The wall weight $\mu=-1$ is not strictly antidominant, but its standard object
is simple: in the action $e\cdot v_k=k(\lambda(h)-k+1)v_{k-1}$ of
$\mathfrak{sl}_2$ on $M(\lambda)$ one has $e\cdot v_k=-k^2v_{k-1}$ for
$\lambda(h)=-1$, which is nonzero for every $k\ge1$, so the only singular
vector of $M(-1)$ is the top one; since every nonzero submodule of a Verma
module contains a singular vector, $\Delta(-1)=M(-1)=L(-1)$. Its linkage class
is the single weight $-1$, a one-element finite downward-closed ideal
$\Gamma=\{-1\}$ in which $-1$ is maximal, so
[[lem-maximal-verma-is-projective-in-a-finite-truncation]] applies: the wall
standard $\Delta(-1)$ is projective in its block
$\mathcal O_{\chi_{-1}}=\mathcal O_\Gamma$.

Translation to the wall sends both standard objects of the regular block to
the wall standard and kills the simple quotient: claim (1) of
[[thm-translation-to-and-from-a-wall-on-standard-modules]] gives
$T_0^{-1}\Delta(-2)\cong\Delta(-1)$ and $T_0^{-1}\Delta(0)\cong\Delta(-1)$,
and exactness applied to the nonsplit sequence
$0\to\Delta(-2)\to\Delta(0)\to L(0)\to0$ shows
$T_0^{-1}L(0)=0$ while $T_0^{-1}L(-2)=T_0^{-1}\Delta(-2)=L(-1)$.

Translation from the wall is where the nonsplit extension appears: claim (2)
of the same theorem with $w=1$ gives the projective object
$Q=T_{-1}^0\Delta(-1)$ a Verma flag with the two factors $\Delta(-2)$ and
$\Delta(0)$, each occurring once. Decomposing $Q$ into indecomposables and
using that the regular block has simple labels $0,-2$ shows
$Q\cong P(0)^a\oplus P(-2)^b$, and comparing flag multiplicities with the
values $(P(0):\Delta(0))=1$ and
$(P(-2):\Delta(0))=(P(-2):\Delta(-2))=1$ of
[[ex-projective-covers-in-the-regular-sl2-block]] gives $a=0$, $b=1$. Hence
$T_{-1}^0\Delta(-1)=T_{-1}^0L(-1)\cong P(-2)$, the nonsplit extension
$0\to\Delta(0)\to P(-2)\to\Delta(-2)\to0$: the wall standard $\Delta(-1)$ is
projective in its own block, but translating it back through the wall produces
a two-step projective whose standard flag does not split.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_2$ with the coordinate $l=\langle\lambda,\alpha^\vee\rangle$, the wall $l=-1$, the single-wall datum $(\lambda,\mu)=(-2,-1)$ with translating weight $\nu=1$ and wall reflection $s$, the regular integral block $C$ with simple labels $0,-2$ and its projective objects $P(0),P(-2)$, the wall block $\mathcal O_{\chi_{-1}}$, and $Q=T_{-1}^0\Delta(-1)$.

[F1] For $\mathfrak{sl}_2$ the pair $(-2,-1)$ is a single-wall translation datum with $\lambda+\rho=-1$ spanning the negative chamber, $\mu+\rho=0$ on the wall, dot-stabilizer $\{1,s\}$ of $\mu$, wall reflection $s$ acting by $s\mathbin\cdot l=-l-2$, and translating weight $\nu=1$; the reverse pair $(0,-1)$ realizes the same central characters and the same functors, and $T_0^{-1}=T_{-2}^{-1}$, $T_{-1}^0=T_{-1}^{-2}$ ([[def-dot-action-facets-and-single-wall-translation-data]], [[def-translation-functor-between-o-blocks]]).

[F2] Two weights have the same central character exactly when they lie in one dot orbit, and $s\mathbin\cdot(-2)=0$, $s\mathbin\cdot(-1)=-1$; in particular $\chi_0=\chi_{-2}$ and the dot orbit of $-1$ is $\{-1\}$ ([[cor-central-characters-are-dot-weyl-orbits]], [[def-dot-action-facets-and-single-wall-translation-data]]).

[F3] The rank-one model of the parent example has basis $v_k=f^kv_0$ with $e\cdot v_k=k(\lambda(h)-k+1)v_{k-1}$; with $\lambda(h)=-1$ this is $e\cdot v_k=-k^2v_{k-1}\ne0$ for all $k\ge1$, so the only singular vector of $M(-1)$ is its top; every nonzero submodule of a Verma module contains a singular vector, so $M(-1)$ is simple and $\Delta(-1)=M(-1)=L(-1)$ ([[ex-projective-covers-in-the-regular-sl2-block]], [[lem-every-nonzero-verma-submodule-contains-a-singular-vector]], [[def-verma-flag-and-its-multiplicities]]).

[F4] The blocks are the full subcategories of objects whose simple composition factors have labels in one linkage class, and the block of $\chi_{-1}$ is the full subcategory of objects whose simple composition factors are $L(\eta)$ with $\chi_\eta=\chi_{-1}$; by [F2] these are exactly the objects with all composition factors $L(-1)$, that is, the truncation $\mathcal O_\Gamma$ at the one-element finite downward-closed ideal $\Gamma=\{-1\}$, in which $-1$ is maximal ([[thm-central-character-summands-split-into-linkage-blocks]], [[def-truncated-category-o-at-a-finite-weight-ideal]], [[cor-central-characters-are-dot-weyl-orbits]]).

[F5] Let $\Gamma$ be a finite downward-closed ideal of a linkage class and $\lambda\in\Gamma$ maximal. Then $\Delta(\lambda)=M(\lambda)$ is projective in $\mathcal O_\Gamma$ ([[lem-maximal-verma-is-projective-in-a-finite-truncation]]).

[F6] The regular integral block $C$ has simple labels $0$ and $-2$; $\Delta(0)=M(0)$ is projective and is the projective cover $P(0)$ of $L(0)$; $L(-2)=\Delta(-2)=M(-2)$ has the projective cover $P(-2)$, which fits into the nonsplit sequence $0\to\Delta(0)\to P(-2)\to\Delta(-2)\to0$; and the flag multiplicities are $(P(0):\Delta(0))=1$, $(P(-2):\Delta(0))=1$ and $(P(-2):\Delta(-2))=1$, while $(P(0):\Delta(-2))=0$ because $P(0)=\Delta(0)$ has the one-step flag $0\subseteq\Delta(0)$ ([[ex-projective-covers-in-the-regular-sl2-block]], [[def-verma-flag-and-its-multiplicities]]).

[F7] $T_\lambda^\mu\Delta(w\mathbin\cdot\lambda)\cong\Delta(w\mathbin\cdot\mu)$ and $T_\mu^\lambda\Delta(w\mathbin\cdot\mu)$ has a finite Verma flag with exactly the two factors $\Delta(w\mathbin\cdot\lambda)$ and $\Delta(w s\mathbin\cdot\lambda)$, each with multiplicity one, for every $w\in W$ ([[thm-translation-to-and-from-a-wall-on-standard-modules]]).

[F8] The functors $T_\lambda^\mu$, $T_\mu^\lambda$ are exact, both send projectives to projectives, and $T_\mu^\lambda$ is left adjoint to $T_\lambda^\mu$ ([[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]]).

[F9] Every object of $\mathcal O$ has finite length, hence is a finite direct sum of indecomposables; a direct summand of a projective object is projective; every indecomposable projective object has a unique maximal proper subobject, so its head is simple and the object is a projective cover of that head; and any two indecomposable projectives with isomorphic heads are isomorphic ([[thm-every-category-o-object-has-finite-length]], [[lem-finite-length-objects-decompose-into-indecomposables]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]], [[thm-projective-object-characterisations]]).

[F10] The multiplicity $(X:\Delta(\mu))$ is well defined for every Verma-filtered $X$ and is additive over direct sums: a Verma flag of $X$ and one of $Y$ concatenate to a Verma flag of $X\oplus Y$ with the combined factors ([[def-verma-flag-and-its-multiplicities]], [[lem-verma-flag-multiplicities-are-independent-of-the-flag]]).

## Verification

**Proof technique:** direct: evaluate the two translation functors on the sl2 block by the wall theorem, keep the surviving standard factors, and identify the reverse translate of the wall standard by decomposing it into indecomposable projectives and comparing flag multiplicities.

1.1 By [F7] with $w=1$ and $w=s$, using [F2] to evaluate $s\mathbin\cdot(-2)=0$ and $s\mathbin\cdot(-1)=-1$, the translated wall functor satisfies $T_{-2}^{-1}\Delta(-2)\cong\Delta(-1)$ and $T_{-2}^{-1}\Delta(0)\cong\Delta(s\mathbin\cdot(-1))=\Delta(-1)$; by [F1] $T_0^{-1}=T_{-2}^{-1}$, so both standard objects of the regular block are sent to $\Delta(-1)$. [F1, F2, F7]

1.2 By [F4] and [F5], $\Delta(-1)$ is projective in $\mathcal O_{\chi_{-1}}=\mathcal O_\Gamma$; by [F8] its image $Q=T_{-1}^0\Delta(-1)=T_{-1}^{-2}\Delta(-1)$ under the left adjoint is projective in the regular block $C$, and by [F7] with $w=1$ it has a finite Verma flag with the two factors $\Delta(-2)$ and $\Delta(0)$, each once, so $(Q:\Delta(0))=(Q:\Delta(-2))=1$. [F4, F5, F7, F8]

2.1 By [F8] the functor $T_0^{-1}$ is exact, so applying it to the nonsplit sequence $0\to\Delta(-2)\to\Delta(0)\to L(0)\to0$ of [F6] yields the exact sequence $0\to T_0^{-1}\Delta(-2)\to T_0^{-1}\Delta(0)\to T_0^{-1}L(0)\to0$; the first two terms are the simple $\Delta(-1)=L(-1)$ by step 1.1 and [F3], and the first arrow is a monomorphism between these nonzero simple objects, hence an isomorphism. Thus the rightmost term is $T_0^{-1}L(0)=0$ and, using [F3], $T_0^{-1}L(-2)=T_0^{-1}\Delta(-2)\cong\Delta(-1)=L(-1)$. [F3, F6, F8, step 1.1]

2.2 By [F9] write $Q=Q_1\oplus\cdots\oplus Q_n$ with each $Q_i$ an indecomposable object; each $Q_i$ is projective because it is a direct summand of the projective $Q$, and its head is a simple object of $\mathcal O$, necessarily a composition factor of $Q$ and hence $L(0)$ or $L(-2)$ by [F6]; by [F6] and [F9] an indecomposable projective with head $L(0)$ is isomorphic to $P(0)=\Delta(0)$ and one with head $L(-2)$ is isomorphic to $P(-2)$, so $Q\cong P(0)^a\oplus P(-2)^b$ for integers $a,b\ge0$. [F6, F9, step 1.2]

3.1 The multiplicities are additive over direct sums by [F10]; with the values of [F6] and step 1.2 this gives $1=(Q:\Delta(0))=a\,(P(0):\Delta(0))+b\,(P(-2):\Delta(0))=a+b$ and $1=(Q:\Delta(-2))=a\,(P(0):\Delta(-2))+b\,(P(-2):\Delta(-2))=b$, so $a=0$ and $b=1$. [F6, F10, step 1.2, step 2.2]

4.1 Consequently $Q=T_{-1}^0\Delta(-1)=T_{-1}^0L(-1)\cong P(-2)$, the nonsplit extension $0\to\Delta(0)\to P(-2)\to\Delta(-2)\to0$ of [F6] with the two-step flag $\Delta(0),\Delta(-2)$; together with steps 1.1 and 2.1 this shows that translation to the wall sends $\Delta(0)$ and $\Delta(-2)=L(-2)$ to the wall standard $\Delta(-1)=L(-1)$ and annihilates the finite-dimensional simple $L(0)$, while the reverse translation of the wall standard $L(-1)$ is the projective $P(-2)$, whose standard flag does not split. [F6, step 1.1, step 2.1, step 3.1] ∎
