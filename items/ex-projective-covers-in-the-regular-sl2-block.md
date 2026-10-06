---
id: ex-projective-covers-in-the-regular-sl2-block
kind: example
title: The two projectives in the principal sl2 block
status: published
origin: pipeline
deps:
- def-axiom-of-choice
- cor-antidominant-verma-modules-are-simple
- cor-central-characters-are-dot-weyl-orbits
- def-bgg-category-o
- def-special-linear-lie-algebra-sl-two
- def-truncated-category-o-at-a-finite-weight-ideal
- def-verma-flag-and-its-multiplicities
- def-verma-module
- lem-block-projection-preserves-projectives
- lem-maximal-verma-is-projective-in-a-finite-truncation
- prop-projective-covers-in-o-are-indecomposable-and-unique
- thm-bgg-reciprocity
- thm-category-o-has-enough-projectives
- thm-central-character-summands-split-into-linkage-blocks
- thm-poincare-birkhoff-witt
- thm-projectives-in-category-o-have-verma-flags
- thm-universal-property-of-verma-modules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-7.md; immutable carrier: research/frontier-38-owner-30-step5-hash-7-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-7 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Proposition 16.4 and
      Example 20.8
    url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    locator: §16.3, Proposition 16.4, printed pp. 86-87; §20.3, Example 20.8 (the sl2 projectives),
      printed p. 103 (full text read at harvest)
  - title: Lin Chen, lecture notes (Spring 2024), Lecture 9, Theorem 2.2 and Example 3.16
    url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    locator: §2, Theorem 2.2, printed p. 4; §3, Example 3.16, printed p. 7 (full text read at harvest)
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

The rank-one computation is done for a general regular block and then
specialised. Let $\mathfrak g=\mathfrak{sl}_2$ with basis $e,f,h$ and
coordinate $l=\lambda(h)$ on weights, so that $\rho=1$ and the dot action of
the reflection is $s\mathbin\cdot l=-l-2$. For every $\lambda$ the Verma
module $M(\lambda)$ has basis $v_k=f^kv_0$, $k\ge0$, on which
$h\cdot v_k=(\lambda(h)-2k)v_k$, $f\cdot v_k=v_{k+1}$ and
$e\cdot v_k=k(\lambda(h)-k+1)v_{k-1}$. Fix an integer $n\ge0$ and take
$\lambda(h)=n$: the span $U$ of $v_k$ for $k\ge n+1$ is a submodule
isomorphic to $M(-n-2)=L(-n-2)$, the quotient $M(n)/U$ is the simple module
$L(n)$, and $0\to L(-n-2)\to M(n)\to L(n)\to0$ is nonsplit. The dot orbit of
$n$ is $\{n,-n-2\}$ with $-n-2\le n$, and $\chi_n=\chi_{-n-2}$; thus
$\Delta(n)=M(n)$ and $\Delta(-n-2)=M(-n-2)=L(-n-2)$ are the two standards of
the regular integral block $C_n$ of highest weight $n$.

For every such $n$, the projective covers are $P(n)=\Delta(n)$ and
$P(-n-2)$ with the nonsplit sequence
$$0\longrightarrow\Delta(n)\longrightarrow P(-n-2)\longrightarrow\Delta(-n-2)\longrightarrow0.$$
The latter has head and socle $L(-n-2)$ and middle factor $L(n)$.

For $n=0$ this is the regular integral block $C$ of highest weight $0$, whose
simple labels are $0$ and $-2$ with $-2\le0$. Then $\Delta(0)=M(0)$ is
projective and is the projective cover $P(0)$ of the one-dimensional simple
module $L(0)=\mathbb C$. The projective cover $P(-2)$ of
$L(-2)=\Delta(-2)$ fits into the nonsplit short exact sequence
$$0\longrightarrow\Delta(0)\longrightarrow P(-2)\longrightarrow\Delta(-2)\longrightarrow0,$$
its head and socle are $L(-2)$, and its middle composition factor is $L(0)$.
The Verma-flag multiplicities are $(P(0):\Delta(0))=1$ and
$(P(-2):\Delta(-2))=(P(-2):\Delta(0))=1$, matching BGG reciprocity with
$[\Delta(0):L(0)]=[\Delta(0):L(-2)]=[\Delta(-2):L(-2)]=1$ and
$[\Delta(-2):L(0)]=0$.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_2$ with its standard basis, the coordinate $l=\lambda(h)$ on weights with $\rho=1$ and dot action $s\mathbin\cdot l=-l-2$, an integer $n\ge0$, the regular integral block $C_n$ with labels $n$ and $-n-2$, and its projective covers.

[F1] For every weight $\lambda$ the Verma module $M(\lambda)=U(\mathfrak{sl}_2)\otimes_{U(\mathfrak b)}\mathbb C_\lambda$ has basis $v_k=f^kv_0$, $k\ge0$, with $h\cdot v_k=(\lambda(h)-2k)v_k$, $f\cdot v_k=v_{k+1}$ and $e\cdot v_k=k(\lambda(h)-k+1)v_{k-1}$, by the PBW factorisation $U(\mathfrak{sl}_2)=U(\mathbb Cf)U(\mathfrak h\oplus\mathbb Ce)$ applied to the induced module ([[def-verma-module]], [[thm-poincare-birkhoff-witt]], [[def-special-linear-lie-algebra-sl-two]]).

[F2] A homomorphism out of a Verma module is determined by the image of its highest-weight vector, which may be any vector killed by $\mathfrak n^+$ of the prescribed weight; in particular a highest-weight vector of weight $\mu$ in a module $V$ induces a unique $\mathfrak g$-map $M(\mu)\to V$ ([[thm-universal-property-of-verma-modules]], [[def-verma-module]]).

[F3] If $\langle\lambda+\rho,\alpha^\vee\rangle<0$ then $M(\lambda)$ is simple; here $\langle(-n-2)+1,\alpha^\vee\rangle=-(n+1)<0$, so $M(-n-2)=L(-n-2)$ ([[cor-antidominant-verma-modules-are-simple]]).

[F4] With $\rho=1$ the dot action is $s\mathbin\cdot l=-l-2$, so the dot orbit of $n$ is $\{n,-n-2\}$ and $\chi_n=\chi_{-n-2}$; and $-n-2\le n$ because $n-(-n-2)=(n+1)\alpha$ with $\alpha$ the positive root, and $(n+1)\alpha\in Q^+$ ([[def-bgg-category-o]], [[cor-central-characters-are-dot-weyl-orbits]]).

[F5] The block $C_n$ is the full subcategory of objects all of whose simple composition factors are $L(n)$ and $L(-n-2)$; the set $\{n,-n-2\}$ is a finite downward-closed ideal of its linkage class in which $n$ is maximal and $-n-2$ is minimal ([[thm-central-character-summands-split-into-linkage-blocks]], [[def-truncated-category-o-at-a-finite-weight-ideal]]).

[F6] Since $n$ is maximal in the finite downward-closed ideal $C_n$, the Verma module $\Delta(n)=M(n)$ is projective in $\mathcal O_{C_n}$, and an object of $\mathcal O_{C_n}$ projective there is projective in $\mathcal O$ ([[lem-maximal-verma-is-projective-in-a-finite-truncation]], [[lem-block-projection-preserves-projectives]]).

[F7] Each simple $L(\mu)$ has an indecomposable projective cover $P(\mu)$, unique up to isomorphism, with head $L(\mu)$; conversely an indecomposable projective with head $L(\mu)$ is a projective cover of $L(\mu)$ ([[thm-category-o-has-enough-projectives]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]]).

[F8] Every projective is Verma-filtered, and BGG reciprocity gives $(P(\lambda):\Delta(\mu))=[\Delta(\mu):L(\lambda)]$; two weights label composition factors of an indecomposable object only if they lie in one linkage block, hence in the same full dot orbit ([[thm-projectives-in-category-o-have-verma-flags]], [[thm-bgg-reciprocity]], [[cor-central-characters-are-dot-weyl-orbits]], [[thm-central-character-summands-split-into-linkage-blocks]]).

## Verification

**Proof technique:** direct: derive the rank-one Verma submodule and quotient from the PBW model, then identify both projective covers for every $n\ge0$ and specialise to $n=0$.

1.1 By the action of [F1], for $n\ge0$ the subspace $U=\sum_{k\ge n+1}\mathbb Cv_k$ is a submodule: it is $h$- and $f$-stable, and $e\cdot v_k=k(n-k+1)v_{k-1}$ lies in $U$ for $k\ge n+2$ while $e\cdot v_{n+1}=0$; the vector $v_{n+1}$ is a highest-weight vector of weight $-n-2$, so [F2] gives a nonzero map $M(-n-2)\to U$, which is surjective because the powers of $f$ on $v_{n+1}$ span $U$ and injective because $M(-n-2)$ is simple by [F3], hence an isomorphism; hence $U\cong L(-n-2)$. The quotient $M(n)/U$ has basis the images $u_0,\dots,u_n$ of $v_0,\dots,v_n$, on which $e\cdot u_j=j(n-j+1)u_{j-1}\ne0$ for $1\le j\le n$; any nonzero submodule contains some $u_j$, and applying $e^j$ with all factors $j!(n-j+1)\cdots n$ nonzero gives $u_0$, which generates the quotient, so $M(n)/U$ is simple of highest weight $n$, that is $L(n)$. A splitting of $0\to L(-n-2)\to M(n)\to L(n)\to0$ would exhibit a submodule of $M(n)$ isomorphic to $L(n)$, necessarily containing a nonzero vector of the weight-$n$ space $\mathbb Cv_0$ and hence, since $v_0$ generates the infinite-dimensional $M(n)$, the whole of $M(n)$; so the sequence is nonsplit. [F1, F2, F3]

2.1 The dot orbit is $\{n,-n-2\}$ by [F4]. By [F5] and [F6], $\Delta(n)$ is projective in its block. The Verma module is indecomposable, since its one-dimensional highest line lies in one summand and generates the whole module. Its unique simple quotient is $L(n)$ by step 1.1, so [F7] identifies $\Delta(n)$ with $P(n)$. Its one-factor flag gives $(P(n):\Delta(n))=1$ and $(P(n):\Delta(-n-2))=0$. [F1, F4, F5, F6, F7, step 1.1]

2.2 By [F7] and [F8], the indecomposable cover $P(-n-2)$ is Verma-filtered with multiplicities $[\Delta(\mu):L(-n-2)]$. Step 1.1 gives these multiplicities as one for $\mu=n,-n-2$. No other label contributes: all Verma factors of a module in $C_n$ lie in $C_n$, whose only simple labels are $n,-n-2$, by [F5]. Thus the flag has exactly the factors $\Delta(n)$ and $\Delta(-n-2)$, once each. [F5, F7, F8, step 1.1]

3.1 The bottom flag factor cannot be $\Delta(-n-2)$, since the resulting quotient $\Delta(n)$ would give the simple quotient $L(n)$, contradicting the unique head $L(-n-2)$ of $P(-n-2)$. Hence the flag is the exact sequence $0\to\Delta(n)\to P(-n-2)\to\Delta(-n-2)\to0$. It is nonsplit, since a splitting decomposes the cover into two nonzero summands. [F7, step 2.2]

4.1 The socle of $\Delta(n)$ is $L(-n-2)$: it contains that simple submodule by step 1.1, and a simple submodule not contained there would map isomorphically to $L(n)$ and split that nonsplit sequence. Likewise, any simple submodule of $P(-n-2)$ outside $\Delta(n)$ would map isomorphically to its quotient $L(-n-2)$ and split step 3.1. Thus $P(-n-2)$ has socle $L(-n-2)$, head $L(-n-2)$, and middle composition factor $L(n)$, since its three factors come from the flag and step 1.1. [F7, step 1.1, step 2.2, step 3.1]

5.1 Taking $n=0$ gives $P(0)=\Delta(0)$ and the nonsplit sequence $0\to\Delta(0)\to P(-2)\to\Delta(-2)\to0$, with head and socle $L(-2)$ and middle factor $L(0)$. The flag entries are $(P(0):\Delta(0))=1$, $(P(0):\Delta(-2))=0$, and $(P(-2):\Delta(0))=(P(-2):\Delta(-2))=1$; the standard composition entries are $[\Delta(0):L(0)]=[\Delta(0):L(-2)]=[\Delta(-2):L(-2)]=1$ and $[\Delta(-2):L(0)]=0$. They agree with BGG reciprocity by [F8]. [F8, step 1.1, step 2.1, step 2.2, step 4.1] ∎
