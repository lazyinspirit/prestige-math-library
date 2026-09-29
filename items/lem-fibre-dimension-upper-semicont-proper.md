---
id: lem-fibre-dimension-upper-semicont-proper
kind: lemma
title: "Upper semicontinuity of proper fibre dimension"
status: draft
origin: pipeline
deps:
  - def-proper-morphism
  - thm-proper-morphism-closed-image
  - def-scheme-theoretic-fibre
  - def-dimension-noetherian-topological-space
  - def-relative-dimension-smooth-morphism
  - lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness
  - def-locally-finite-type-and-finite-type-morphism
  - cor-base-change-finite-type-and-products
  - def-irreducible-topological-space-and-subset
  - def-axiom-of-choice
  - lem-field-is-noetherian
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - thm-noetherian-ring-has-noetherian-spectrum
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, More on Morphisms, Section 37.30 (tags 05F6-0D4J)"
      url: https://stacks.math.columbia.edu/download/more-morphisms.pdf
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.28-29.30"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
---

## Statement

Assume the Axiom of Choice (AC). Let $f:X\to S$ be a proper morphism of
schemes, that is, $f$ is separated, of finite type and universally closed
([[def-proper-morphism]]), and for $s\in S$ let $X_s$ be the scheme-theoretic
fibre ([[def-scheme-theoretic-fibre]]), a scheme of finite type over
$\kappa(s)$ and hence a Noetherian topological space. Then for every integer
$n\ge0$ the set
$$\{s\in S:\dim X_s\ge n\}$$
is closed in $S$, where $\dim$ is the dimension of the Noetherian space $X_s$
and an empty fibre has dimension $-\infty$
([[def-dimension-noetherian-topological-space]]). Equivalently, the function
$s\mapsto\dim X_s$ is upper semicontinuous. No Noetherian hypothesis is imposed
on $S$ or on $X$; the finiteness of type is part of properness and is not a
separate assumption.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] A morphism $f:X\to S$ is proper if and only if it is separated, of finite
type and universally closed ([[def-proper-morphism]]).

[F2] A proper morphism is a closed map: the image of every closed subset of
$X$ is closed in $S$, and this persists after base change
([[thm-proper-morphism-closed-image]]).

[F3] For $f:X\to S$ and $s\in S$ the scheme-theoretic fibre is
$X_s=X\times_S\operatorname{Spec}\kappa(s)$, and for an affine open
$U=\operatorname{Spec}B\subseteq X$ mapping into an affine open
$V=\operatorname{Spec}A\subseteq S$ with $s\in V$ corresponding to
$\mathfrak p\in\operatorname{Spec}A$ one has
$U\times_S\operatorname{Spec}\kappa(s)=\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))$,
an open subscheme of $X_s$ ([[def-scheme-theoretic-fibre]]).

[F4] A morphism is locally of finite type if every point of the source has an
affine open neighbourhood $U=\operatorname{Spec}B$ mapping into an affine open
$V=\operatorname{Spec}A$ of the target with $A\to B$ of finite type; it is of
finite type if in addition it is quasi-compact
([[def-locally-finite-type-and-finite-type-morphism]]).

[F5] Arbitrary base change preserves morphisms of finite type
([[cor-base-change-finite-type-and-products]]).

[F6] For a Noetherian topological space $T$, $\dim T$ is the supremum of the
lengths of strict chains of nonempty irreducible closed subsets, and
$\dim\varnothing=-\infty$ ([[def-dimension-noetherian-topological-space]]).

[F7] For a scheme $Y$ and a point $y\in Y$ the local dimension $\dim_yY$ is
the infimum of the Krull dimensions of the open neighbourhoods of $y$; it is
unchanged on passing to an open neighbourhood of $y$, since the open
neighbourhoods contained in an open piece have the same infimum
([[def-relative-dimension-smooth-morphism]]).

[F8] Assume AC. Let $A\to B$ be finite type, $\mathfrak q\in\operatorname{Spec}B$
over $\mathfrak p=\mathfrak q\cap A$, and suppose the fibre
$\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))$ has local dimension $n$ at
the point corresponding to $\mathfrak q$. Then there is an open neighbourhood
$V$ of $\mathfrak q$ such that for every $\mathfrak q'\in V$, with
$\mathfrak p'=\mathfrak q'\cap A$, the fibre
$\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p'))$ has local dimension at
most $n$ at the point corresponding to $\mathfrak q'$
([[lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness]]).

[F9] If $Y$ is irreducible, every nonempty open subset $V\subseteq Y$ is dense
and irreducible. If $\overline V\ne Y$, then $Y=\overline V\cup(Y\setminus V)$
is a union of two proper closed subsets, a contradiction. If $V=A\cup B$ with
$A,B$ proper and closed in $V$, then $Y=\overline A\cup\overline B$ by density
of $V$, so irreducibility forces one closure to equal $Y$; since that set is
closed in $V$, it must then equal $V$, a contradiction. The empty space is not
irreducible, by the definition of irreducibility ([[def-irreducible-topological-space-and-subset]]).

[F10] A field is a Noetherian ring; a finite-type algebra over a Noetherian
ring is a Noetherian ring; the spectrum of a Noetherian ring is a Noetherian
topological space ([[lem-field-is-noetherian]],
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]],
[[thm-noetherian-ring-has-noetherian-spectrum]]).

[F11] The Axiom of Choice states that every family of nonempty sets has a
choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the morphism $f$ is of finite type; fix $s\in S$. By [F5] the base change $X_s\to\operatorname{Spec}\kappa(s)$ is of finite type, hence quasi-compact by [F4], so $X_s$ is covered by finitely many affine opens $\operatorname{Spec}A_i$ with each $A_i$ a finite-type $\kappa(s)$-algebra by [F4]; each $A_i$ is Noetherian by [F10], hence each $\operatorname{Spec}A_i$ is a Noetherian topological space by [F10], and a space with a finite open cover by Noetherian subspaces is Noetherian (a descending chain of closed subsets restricts to a descending chain in each chart and therefore stabilises). [F1, F4, F5, F10]

1.2 For $n\ge0$ put $U_n=\{x\in X:$ the fibre $X_{f(x)}$ has local dimension at most $n$ at $x\}$ and $Z_n=X\setminus U_n$. Then $U_n$ is open in $X$: indeed, by [F4] it suffices to check this on an affine chart $U=\operatorname{Spec}B$ mapping into an affine $V=\operatorname{Spec}A$ with $A\to B$ finite type, and for a point $x\in U$ corresponding to $\mathfrak q\in\operatorname{Spec}B$ the fibre of $U\to V$ at the corresponding $\mathfrak p=\mathfrak q\cap A$ is $\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))$ by [F3], an open subscheme of $X_{f(x)}$ with the same local dimension at $x$ by [F7]; if this local dimension is $m\le n$, then clause 2 of [F8] applied with $n$ replaced by $m$ gives an open neighbourhood of $\mathfrak q$ inside $U$ on which the fibre local dimension is at most $m\le n$, so $U_n\cap U$ is a union of such neighbourhoods and is open. [F3, F4, F7, F8]

1.3 For every $s\in S$ one has $\dim X_s=\sup_{x\in X_s}\dim_xX_s$: the inequality $\dim_xX_s\le\dim X_s$ holds because $X_s$ itself is an open neighbourhood of $x$ and $\dim_xX_s$ is the infimum over such neighbourhoods [F7]; conversely, given a strict chain $Z_0\subsetneq\cdots\subsetneq Z_d$ of nonempty irreducible closed subsets of $X_s$ and a point $x\in Z_0$, every open neighbourhood $W$ of $x$ in $X_s$ gives nonempty irreducible open subspaces $W\cap Z_0\subseteq\cdots\subseteq W\cap Z_d$ which are strictly increasing (if $W\cap Z_i=W\cap Z_{i+1}$, then this set is a nonempty open subset of the irreducible space $Z_{i+1}$ and hence dense in it by [F9], while it is contained in the closed subset $Z_i\subseteq Z_{i+1}$, whence $Z_{i+1}=Z_i$, a contradiction), so $\dim W\ge d$ and $\dim_xX_s\ge d$; taking the supremum over chains and using [F6] gives the reverse inequality. [F6, F7, F9]

2.1 For every $s\in S$ and every integer $d\ge0$: $\dim X_s>d$ if and only if there is $x\in X_s$ with $\dim_xX_s>d$; this is immediate from the identification of step 1.3, the left-hand condition being the supremum of the numbers $\dim_xX_s$ exceeding $d$. In particular the empty fibre, of dimension $-\infty$ by [F6], satisfies neither condition. [F6, step 1.3]

3.1 For every $d\ge0$ the equality $\{s\in S:\dim X_s>d\}=f(Z_d)$ holds: if $\dim X_s>d$, step 2.1 supplies $x\in X_s$ with $\dim_xX_s>d$, and $x\in Z_d$ because the local dimension of $X_{f(x)}=X_s$ at $x$ exceeds $d$; conversely $x\in Z_d$ has $f(x)=s$ and $\dim X_s\ge\dim_xX_s>d$ by step 1.3. [step 1.3, step 2.1]

4.1 By step 1.2 the set $Z_d$ is closed in $X$, and $f$ is a closed map by [F2], so $f(Z_d)$ is closed in $S$; by step 3.1 the set $\{s:\dim X_s>d\}$ is closed for every $d\ge0$, and since $\dim X_s$ takes values in $\mathbb N\cup\{-\infty\}$ [F6] one has $\{s:\dim X_s\ge n\}=\{s:\dim X_s>n-1\}$ for every $n\ge1$. [F2, F6, step 1.2, step 3.1]

5.1 For $n\ge1$ the set $\{s:\dim X_s\ge n\}$ is closed by step 4.1, and for $n=0$ it equals $f(X)$, the image of the closed set $X$, which is closed by [F2]; hence the set is closed for every $n\ge0$, which is the theorem. The Axiom of Choice [F11] is used exactly through the cited local fibre-dimension lemma [F8] and the cited algebra results [F10] that carry it, and no further choice is made. [F2, F6, F10, F11, step 4.1] $\square$
