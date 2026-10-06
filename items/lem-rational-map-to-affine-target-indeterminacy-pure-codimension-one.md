---
id: lem-rational-map-to-affine-target-indeterminacy-pure-codimension-one
kind: lemma
title: "Indeterminacy of a rational map into an affine scheme is of pure codimension one"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - def-rational-map-integral-schemes
  - def-normal-noetherian-ring
  - def-finite-type-and-module-finite-algebras
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 4.4/2 (indeterminacy of maps into affine targets)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
    - title: "The Stacks Project, Tag 031T (Hartogs for normal schemes)"
      url: "https://stacks.math.columbia.edu/tag/031T"
---

## Statement

Assume AC. Let $R$ be a ring, let $Z$ be a normal Noetherian $R$-scheme ([[def-normal-noetherian-ring]]) and let $B$ be a finitely generated $R$-algebra ([[def-finite-type-and-module-finite-algebras]]). Here an $R$-rational map means an equivalence class of $R$-morphisms on dense open subschemes, agreeing on a dense open of their intersection; on the disjoint integral components of the normal $Z$ this extends the field-case convention of [[def-rational-map-integral-schemes]]. For such a map $u:Z\dashrightarrow\operatorname{Spec}B$ the indeterminacy locus of $u$ is empty or of pure codimension one in $Z$. In particular, if $u$ is defined at every point of height at most one, then $u$ extends uniquely to an $R$-morphism $Z\to\operatorname{Spec}B$.

## Facts & Assumptions

**Given:** AC, a ring $R$, a normal Noetherian $R$-scheme $Z$, a finitely generated $R$-algebra $B$, and an $R$-rational map $u:Z\dashrightarrow\operatorname{Spec}B$.

[F1] Choose $R$-algebra generators $b_1,\dots,b_n$ of $B$, so that $\operatorname{Spec}B$ is a closed subscheme of $\mathbb A^n_R$ cut out by the ideal of all defining relations; a morphism $Z\to\operatorname{Spec}B$ is the same as an $R$-algebra map $B\to\Gamma(Z,\mathcal O_Z)$, equivalently a choice of $n$ regular functions satisfying those relations ([[def-finite-type-and-module-finite-algebras]]).

[F2] A normal Noetherian domain $A$ with fraction field $K$ satisfies $A=\bigcap_{\operatorname{ht}\mathfrak p=1}A_{\mathfrak p}$ in $K$; equivalently, an element of $K$ regular at every height-one point of $\operatorname{Spec}A$ is regular ([[lem-normal-noetherian-domain-intersection-of-height-one-localizations]], assuming AC). A rational map on an integral scheme is given by a morphism on a dense open, and two morphisms agreeing on a dense open of an integral scheme coincide ([[def-rational-map-integral-schemes]]).

## Proof

**Proof technique:** direct. The domain of the map is the common regular locus of finitely many rational functions, and each pole locus is pure codimension one by the intersection formula.

1.1 Let $Y=\operatorname{Spec}B$ and choose generators $b_1,\dots,b_n$ of $B$ over $R$ as in [F1]. On the dense open where $u$ is represented, the pullbacks $u^*(b_i)$ are rational functions $f_i$ on $Z$. On an integral affine chart $U=\operatorname{Spec}A\subseteq Z$ with fraction field $K$, the $f_i$ lie in $K$, and a morphism $U\to Y$ is given exactly by an $R$-algebra map $B\to A$, i.e. by elements $f_1,\dots,f_n\in A$ satisfying every defining relation of $B$. Since those relations vanish on the dense open where $u$ is defined, they vanish as rational functions; hence $u$ is defined at a point $z\in U$ if and only if $f_1,\dots,f_n$ all lie in the local ring $\mathcal O_{Z,z}$. [F1, F2, given, algebra]

2.1 On an integral affine chart $U=\operatorname{Spec}A$, the nonregular locus of $f\in\operatorname{Frac}A$ is $V(J_f)$, where $J_f=\{a\in A:af\in A\}$: membership in $A_{\mathfrak q}$ is equivalent to $J_f$ containing an element outside $\mathfrak q$. If $\mathfrak q$ is a prime minimal over $J_f$, then $f\notin A_{\mathfrak q}$. Apply [F2] to the normal Noetherian local domain $A_{\mathfrak q}$: there is a height-one prime $\mathfrak pA_{\mathfrak q}$ at which $f$ is not regular, with $\mathfrak p\subseteq\mathfrak q$. All chains below $\mathfrak p$ survive localization, so $\mathfrak p$ has height one in $A$. Nonregularity implies $J_f\subseteq\mathfrak p$, and minimality of $\mathfrak q$ therefore gives $\mathfrak p=\mathfrak q$. Every irreducible component of $V(J_f)$ thus has codimension one. [F2, step 1.1, algebra]

3.1 By step 1.1 the indeterminacy locus of $u$ on $U$ is the union of the pole loci of $f_1,\dots,f_n$. If all $f_i$ are regular on $U$, this locus is empty and $u$ is a morphism on $U$. Otherwise it is the union of finitely many closed subsets each of which is of pure codimension one by step 2.1; a finite union of pure-codimension-one closed subsets of a Noetherian scheme has all its irreducible components of codimension one, so the indeterminacy locus is of pure codimension one. [F2, step 2.1, algebra]

4.1 If $u$ is defined at every point of height at most one, then by step 2.1 no pole locus meets the height-one points of $U$, so each pole locus is empty; thus all $f_i$ are regular on every affine chart, and the local morphisms $U\to Y$ glue to an $R$-morphism $Z\to Y$ extending $u$, unique because $Y$ is separated over $R$ and two extensions agree on the dense domain of $u$ by [F2]. Finite generation of $B$ over $R$ is used to have finitely many $b_i$; the relation ideal need not be finitely generated, so that a common regular locus can be exhibited. [F1, F2, step 3.1, algebra] ∎ 