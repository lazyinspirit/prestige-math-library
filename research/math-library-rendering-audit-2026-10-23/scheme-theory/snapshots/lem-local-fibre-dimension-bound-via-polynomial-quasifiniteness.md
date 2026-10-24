---
id: lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness
kind: lemma
title: "Local fibre-dimension bound from polynomial quasi-finiteness"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-scheme-theoretic-fibre
  - def-relative-dimension-smooth-morphism
  - def-quasi-finite-at-a-prime-for-finite-type-algebras
  - def-height-of-a-prime-ideal
  - lem-height-equals-local-dimension
  - def-dimension-noetherian-topological-space
  - cor-noether-normalisation-module-finiteness
  - cor-dimension-preserved-by-integral-extensions
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - cor-quasi-finite-locus-open-finite-type-algebra
  - thm-quasi-finite-algebra-open-finite-factorization
  - cor-localisation-dimension-does-not-increase
  - cor-dimension-of-a-quotient-as-chains-above-an-ideal
  - lem-zmt-quasi-finite-transfer-through-intermediate-rings
  - lem-field-is-noetherian
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - thm-noetherian-ring-has-noetherian-spectrum
  - def-finite-type-and-module-finite-algebras
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Commutative Algebra, Lemmas 10.125.1-10.125.6 (tags 00QD-00QH)"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.29 (tag 02FW)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice (AC). Let $A\to B$ be a ring map of finite type
([[def-finite-type-and-module-finite-algebras]]), let $\mathfrak q\in\operatorname{Spec}B$
lie over $\mathfrak p=\mathfrak q\cap A$, and let $n\ge0$. Suppose that the
scheme-theoretic fibre $\operatorname{Spec}\bigl(B\otimes_A\kappa(\mathfrak p)\bigr)$
([[def-scheme-theoretic-fibre]]) has local dimension $n$ at the point
$\overline{\mathfrak q}$ corresponding to $\mathfrak q$
([[def-relative-dimension-smooth-morphism]]), that is, $\overline{\mathfrak q}$
has an open neighbourhood of dimension $n$ and every open neighbourhood of
$\overline{\mathfrak q}$ has dimension at least $n$. Then:

1. there are $g\in B\setminus\mathfrak q$ and an $A$-algebra map
   $\varphi\colon A[T_1,\dots,T_n]\to B_g$ that is quasi-finite
   ([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]);
2. consequently there is an open neighbourhood $V$ of $\mathfrak q$ in
   $\operatorname{Spec}B$ such that for every $\mathfrak q'\in V$ with
   $\mathfrak p'=\mathfrak q'\cap A$ the scheme-theoretic fibre
   $\operatorname{Spec}\bigl(B\otimes_A\kappa(\mathfrak p')\bigr)$ has local
   dimension at most $n$ at the point corresponding to $\mathfrak q'$.

This is the affine-local form of the openness of the locus
$\{x:\dim_xX_{f(x)}\le n\}$ for a morphism locally of finite type, and clause 2
is the local input for upper semicontinuity of fibre dimensions. Clause 2 is a
statement about the local dimension (the infimum over open neighbourhoods), not
about the dimension of the fibre local ring: at the generic point of a
component of a fibre the local ring has dimension $0$ while the local dimension
of the fibre is the dimension of that component.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] A finite-type map $R\to S$ is quasi-finite at a prime $\mathfrak q$ when the $\kappa(\mathfrak p)$-algebra $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$, $\mathfrak p=\mathfrak q\cap R$, is finite over $\kappa(\mathfrak p)$; in the fibre form, $\mathfrak q$ determines a prime of $S\otimes_R\kappa(\mathfrak p)$ whose local ring is $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$ ([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]).

[F2] For a prime $\mathfrak p$ of a commutative ring $R$ the height is the Krull dimension of the local ring: $\operatorname{ht}(\mathfrak p)=\dim(R_{\mathfrak p})$ ([[def-height-of-a-prime-ideal]]).

[F3] $\operatorname{ht}(\mathfrak p)$ is also the supremum of the lengths of strict chains of primes ending at $\mathfrak p$ ([[lem-height-equals-local-dimension]]).

[F4] For a Noetherian topological space $T$, $\dim T$ is the supremum of the lengths of strict chains of nonempty irreducible closed subsets, with $\dim\varnothing=-\infty$ ([[def-dimension-noetherian-topological-space]]).

[F5] For a scheme $Y$ and a point $y\in Y$ the local dimension $\dim_yY$ is the infimum of the Krull dimensions of the open neighbourhoods of $y$; for a scheme locally of finite type over a field this is the largest dimension of an irreducible component of $Y$ containing $y$ ([[def-relative-dimension-smooth-morphism]]).

[F6] For a field $k$ and a nonzero finite-type $k$-algebra $S$ there are algebraically independent elements $z_1,\dots,z_d\in S$ with $S$ module-finite over $k[z_1,\dots,z_d]$ ([[cor-noether-normalisation-module-finiteness]]).

[F7] If $R\subseteq S$ is an injective integral extension of nonzero commutative rings, then $\dim R=\dim S$ ([[cor-dimension-preserved-by-integral-extensions]]).

[F8] For a field $k$ and $n\ge0$, $\dim k[x_1,\dots,x_n]=n$ ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]).

[F9] Assume AC. For a finite-type ring map $R\to S$ the set of primes at which it is quasi-finite is open in $\operatorname{Spec}(S)$ ([[cor-quasi-finite-locus-open-finite-type-algebra]]).

[F10] Assume AC. Let $R\to S$ be a finite-type ring map that is quasi-finite at every prime, and let $S'\subseteq S$ be the integral closure of the image of $R$. Then there are a finite $R$-subalgebra $T\subseteq S'$, module-finite over $R$, and finitely many $g_1,\dots,g_m\in T$ such that $U=D_T(g_1)\cup\cdots\cup D_T(g_m)$ is open in $\operatorname{Spec}(T)$, the contraction map $\operatorname{Spec}(S)\to\operatorname{Spec}(T)$ is a homeomorphism onto $U$, and $T_{g_i}\cong S_{g_i}$ for every $i$ ([[thm-quasi-finite-algebra-open-finite-factorization]]).

[F11] Localisation does not increase Krull dimension ([[cor-localisation-dimension-does-not-increase]]).

[F12] If $R$ is commutative and $I\trianglelefteq R$ with $R/I$ nonzero, then $\dim(R/I)\le\dim R$, since every strict chain of primes of $R/I$ lifts to one of $R$ ([[cor-dimension-of-a-quotient-as-chains-above-an-ideal]]).

[F13] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F14] For a morphism $\operatorname{Spec}B\to\operatorname{Spec}A$ the fibre over $\mathfrak p$ is $\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))$. Its map to $\operatorname{Spec}B$ identifies its underlying space with the subspace of primes contracting to $\mathfrak p$: first localise $B$ at $A\setminus\mathfrak p$, then quotient by $\mathfrak p B_{A\setminus\mathfrak p}$. The fibre need not be closed in $\operatorname{Spec}B$ when $\mathfrak p$ is not closed ([[def-scheme-theoretic-fibre]]).

[F15] Let $R\to S$ be a finite-type ring map quasi-finite at the prime $\mathfrak q\in\operatorname{Spec}(S)$, let $R\to R'$ be any ring map, put $S'=S\otimes_RR'$ and let $\mathfrak q'\in\operatorname{Spec}(S')$ lie over $\mathfrak q$. Then $R'\to S'$ is of finite type and quasi-finite at $\mathfrak q'$ ([[lem-zmt-quasi-finite-transfer-through-intermediate-rings]]).

[F16] A field is a Noetherian ring ([[lem-field-is-noetherian]]).

[F17] A finite-type algebra over a Noetherian ring is a Noetherian ring ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]).

[F18] Assume AC. The spectrum of a Noetherian commutative ring is a Noetherian topological space ([[thm-noetherian-ring-has-noetherian-spectrum]]).

## Proof

**Proof technique:** direct.

1.1 Write $\kappa=\kappa(\mathfrak p)$ and $\overline S=B\otimes_A\kappa$, a finite-type $\kappa$-algebra with a prime $\overline{\mathfrak q}$ corresponding to $\mathfrak q$, whose spectrum has the subspace topology from $\operatorname{Spec}B$ by [F14]; by the local-dimension convention of [F5] the point $\overline{\mathfrak q}$ has an open neighbourhood $U$ of dimension exactly $n$ (the infimum of the dimensions of the open neighbourhoods is attained because these dimensions are natural numbers: the fibre is finite type over the field $\kappa$, so each of its points has an affine neighbourhood of finite dimension by [F6], [F7] and [F8]), every open neighbourhood of $\overline{\mathfrak q}$ has dimension at least $n$, and since basic opens form a base for the induced topology there is $g_1\in B\setminus\mathfrak q$ with $\overline{\mathfrak q}\in D(g_1)\cap\operatorname{Spec}\overline S\subseteq U$. [F4, F5, F6, F7, F8, F14]

2.1 The set $D(g_1)\cap\operatorname{Spec}\overline S=\operatorname{Spec}(\overline S_{g_1})$ is an open neighbourhood of $\overline{\mathfrak q}$, so it has dimension at least $n$ by the convention of [F5] and at most $\dim U=n$; replacing $B$ by $B_{g_1}$ (whose fibre over $\mathfrak p$ is $\operatorname{Spec}\overline S_{g_1}$, localisation commuting with the tensor product) we may assume for the rest of the proof that the fibre $\overline S$ has dimension exactly $n$. [F4, F5, F14, step 1.1]

3.1 Apply Noether normalisation [F6] to the finite-type $\kappa$-algebra $\overline S$ of dimension $n$: there are algebraically independent $z_1,\dots,z_d\in\overline S$ with $\overline S$ module-finite over $\kappa[z_1,\dots,z_d]$, the extension $\kappa[z_1,\dots,z_d]\subseteq\overline S$ is injective and integral, so $\dim\overline S=\dim\kappa[z_1,\dots,z_d]=d$ by [F7] and [F8], and $d=n$. [F6, F7, F8, step 2.1]

4.1 By [F14], every $z_i\in\overline S=(B/\mathfrak pB)_{A\setminus\mathfrak p}$ can be written $z_i=\overline y_i/\overline a_i$ for $y_i\in B$ and $a_i\in A\setminus\mathfrak p$. Put $w_i=\overline a_i z_i=\overline y_i$. The scalars $\overline a_i$ are nonzero in $\kappa$, so $\kappa[w_1,\dots,w_n]=\kappa[z_1,\dots,z_n]$ and the $w_i$ are algebraically independent. Thus the map $\varphi\colon A[T_1,\dots,T_n]\to B$, $T_i\mapsto y_i$, becomes finite after tensoring with $\kappa$. It is itself of finite type because any finite list of $A$-algebra generators of $B$ also generates it over $A[T_1,\dots,T_n]$. If $\mathfrak r=\varphi^{-1}(\mathfrak q)$, then $\mathfrak r\cap A=\mathfrak p$, and the fibre of $\varphi$ at $\mathfrak r$ is the corresponding fibre of this finite $\kappa[T_1,\dots,T_n]$-algebra. It is finite-dimensional over $\kappa(\mathfrak r)$, as is its localization at the point of $\mathfrak q$, so [F1] proves quasi-finiteness at $\mathfrak q$. For $n=0$ the lists are empty and the same argument applies. [F1, F14, step 3.1]

5.1 By [F9] the quasi-finite locus of $\varphi$ is open in $\operatorname{Spec}B$ and contains $\mathfrak q$, so there is $g_2\in B\setminus\mathfrak q$ such that $\varphi$ is quasi-finite at every prime of $B_{g_2}$; write $g_2=b/g_1^N$ in the original ring localized at $g_1$, with $b\notin\mathfrak q$, and put $g=g_1b$, still not in $\mathfrak q$. Then the induced $A$-algebra map $\varphi_g\colon A[T_1,\dots,T_n]\to B_g$ is quasi-finite at every prime, which is assertion 1. [F9, step 2.1, step 4.1]

6.1 Now let $\mathfrak q'\in\operatorname{Spec}B_g$, put $\mathfrak p'=\mathfrak q'\cap A$, $\kappa'=\kappa(\mathfrak p')$ and $S'=B_g\otimes_A\kappa'\cong B_g\otimes_{A[T_1,\dots,T_n]}\kappa'[T_1,\dots,T_n]$, where $A[T_1,\dots,T_n]\to\kappa'[T_1,\dots,T_n]$ extends $A\to\kappa'$ and preserves the variables. Applying [F15] to the base change of $\varphi_g$ along this polynomial-ring map shows that $\psi\colon\kappa'[T_1,\dots,T_n]\to S'$ is of finite type and quasi-finite at the prime corresponding to $\mathfrak q'$. [F15, step 5.1]

7.1 Since $\kappa'$ is a field, $S'$ is a finite-type $\kappa'$-algebra, and $\psi$ is quasi-finite at every prime because the prime of step 6.1 was arbitrary; applying [F10] to $\psi$ and the prime $\mathfrak q''$ of $S'$ corresponding to $\mathfrak q'$ gives a finite $\kappa'[T_1,\dots,T_n]$-subalgebra $T$ of the relative integral closure and an element $g''\in T$, $g''\notin\mathfrak q''\cap T$, with $T_{g''}\cong(S')_{g''}$, so that $S'_{\mathfrak q''}\cong(S'_{g''})_{\mathfrak q''}\cong(T_{g''})_{\mathfrak q''}$ is a localisation of $T$. [F10, step 6.1]

8.1 Let $R''\subseteq T$ be the image of $\kappa'[T_1,\dots,T_n]$; the extension $R''\subseteq T$ is injective and integral, so $\dim T=\dim R''$ by [F7], while $R''$ is a quotient of the polynomial ring $\kappa'[T_1,\dots,T_n]$, so $\dim R''\le\dim\kappa'[T_1,\dots,T_n]=n$ by [F12] and [F8]; hence $\dim T\le n$ and $\dim S'_{\mathfrak q''}\le\dim T\le n$ by [F11], a localisation of $T$ not increasing dimension. [F7, F8, F11, F12, step 7.1]

9.1 Every strict chain of primes of $S'$ ends at some prime, and a chain ending at a prime $\mathfrak r$ has length at most $\operatorname{ht}(\mathfrak r)=\dim(S'_{\mathfrak r})\le n$ by [F2] and [F3]; taking the supremum over chains gives $\dim S'\le n$. [F2, F3, step 8.1]

10.1 The ring $S'$ is finite type over the field $\kappa'$, hence Noetherian by [F16] and [F17], so $\operatorname{Spec}S'$ is a Noetherian topological space by [F18] and its local dimension at the point corresponding to $\mathfrak q'$ is the infimum of the dimensions of the open neighbourhoods of that point [F5]; the whole space $\operatorname{Spec}S'$ is one of these neighbourhoods, so that local dimension is at most $\dim S'\le n$. [F5, F16, F17, F18, step 9.1]

11.1 For $\mathfrak q'\in D(g)$ the fibre of $\operatorname{Spec}B\to\operatorname{Spec}A$ over $\mathfrak p'$ is $\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p'))$ by [F14], and the fibre of $\operatorname{Spec}B_g$ over $\mathfrak p'$ is its open subscheme $D(g)$ with the same local dimension at $\mathfrak q'$, because $\operatorname{Spec}(B_g\otimes_A\kappa(\mathfrak p'))$ is the open subscheme $D(g)\cap\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p'))$ of the fibre and the local dimension at a point is unchanged on passing to an open neighbourhood (open neighbourhoods inside the open piece give the same infimum [F5]); by step 10.1 this local dimension is at most $n$, and since $D(g)$ is an open neighbourhood of $\mathfrak q$ in $\operatorname{Spec}B$, assertion 2 holds with $V=D(g)$. The Axiom of Choice [F13] licenses the cited results, in particular [F7], [F9], [F10] and [F18]; the proof makes finitely many choices of preimages and localising elements. [F4, F5, F13, F14, step 5.1, step 10.1] $\square$
