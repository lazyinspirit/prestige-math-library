---
id: ex-imprimitivity-for-a-finite-transitive-g-set
kind: example
title: Finite transitive $G$-sets recover the stabilizer-induction classification
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
proof_strategy: direct
deps:
  - thm-mackey-imprimitivity-theorem
  - thm-uniqueness-in-mackey-imprimitivity
  - def-system-of-imprimitivity
  - def-transitive-system-of-imprimitivity
  - thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets
  - def-induced-r-linear-g-module-by-h-covariant-functions
  - def-projection-valued-measure
  - def-coset
  - def-group-action
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-polish-space
  - def-hilbert-space
  - def-orthogonal-projection
  - lem-orthogonal-projection-is-linear-self-adjoint-contractive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
    - title: "I. M. Isaacs, Character Theory of Finite Groups, Chapter 5 (induced characters and permutation representations)"
      url: "https://www.math.ucla.edu/~mike/Isaacs.pdf"
---

## Example

Assume AC. Let $G$ be a finite group with the discrete topology acting transitively on a finite set $X$,
fix $x_0\in X$, put $H=\operatorname{Stab}_G(x_0)$ and identify $X$ with $G/H$.
Let $\mathcal H=\ell^2(X)$ carry the permutation representation $U$, and let
$P$ be the projection-valued measure on $X$ assigning to $E\subseteq X$ the
orthogonal projection onto the coordinate subspace $\ell^2(E)$. Then $(U,P)$
is a transitive system of imprimitivity on the finite standard Borel space $X$,
and it is unitarily equivalent to the canonical system of the trivial
representation $1_H$ of $H$; the induced representation
$\operatorname{Ind}_H^G1_H$ is the permutation representation on $G/H$, so the
finite case of Mackey's theorem reduces to the classical
stabilizer/induction classification. More generally a finite-dimensional
unitary representation of $G$ carrying a transitive system on $X$ is induced
from a unitary representation of $H$ on a fibre of dimension
$\dim(\mathcal H)/|X|$, by the general theorem.

## Facts & Assumptions

**Given:** AC, the finite group $G$, the transitive finite $G$-set $X$, the stabilizer $H$ of $x_0$, and the permutation representation $U$ on $\ell^2(X)$ with the coordinate projections $P$.

[F1] The finite set $X$ with the discrete metric is Polish (every Cauchy sequence is eventually constant, the full set is dense) and its power-set $\sigma$-algebra is standard Borel; unitary representations of the discrete group $G$ are strongly continuous ([[def-polish-space]], [[def-standard-borel-space]], [[def-hilbert-space]]).

[F2] The coordinate projections $\ell^2(E)$ are orthogonal projections satisfying $P(E)P(F)=P(E\cap F)$, $P(\varnothing)=0$, $P(X)=I$ and finite additivity, so $P$ is a projection-valued measure; the permutation representation is unitary with $UP(E)U^{-1}=P(gE)$ ([[def-orthogonal-projection]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]], [[def-projection-valued-measure]], [[def-group-action]]).

[F3] Transitivity identifies $X$ with the left coset space $G/H$, where $H=\operatorname{Stab}_G(x_0)$, and $\operatorname{Ind}_H^G1_H$ is the permutation representation of $G$ on $G/H$ ([[def-coset]], [[def-group-action]], [[thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets]], [[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F4] Mackey's imprimitivity theorem and its uniqueness clause apply to the transitive system on $G/H$: it is unitarily equivalent to the canonical induced system of a strongly continuous unitary representation of $H$, and the inducing representation is unique up to unitary equivalence ([[thm-mackey-imprimitivity-theorem]], [[thm-uniqueness-in-mackey-imprimitivity]], [[def-system-of-imprimitivity]], [[def-transitive-system-of-imprimitivity]]).

[F5] AC is the standing hypothesis ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** AC, the data above.

1.1 $(U,P)$ is a system of imprimitivity: by [F1] $U$ is a strongly continuous unitary representation on the finite-dimensional space $\ell^2(X)$, and by [F2] $P$ is a projection-valued measure with $UP(E)U^{-1}=P(gE)$ for all $g$ and all $E\subseteq X$. The action is transitive, so the system is transitive on the finite homogeneous space $G/H$ by [F3], which is a standard Borel space by [F1]. [F1, F2, F3]

2.1 The equivalence preserves both parts of the system. For $v\in\ell^2(X)$ set $F_v(g)=v(gx_0)$. Then $F_v(gh)=F_v(g)$ for $h\in H$, and $\sum_{gH}|F_v(g)|^2=\sum_{x\in X}|v(x)|^2$, so this is a unitary onto the covariant model of $\operatorname{Ind}_H^G1_H$ with counting quotient measure. It sends $(U_av)(x)=v(a^{-1}x)$ to $F_v(a^{-1}g)$ and sends $P(E)$ to multiplication by $\mathbf 1_E(gx_0)$. Thus the permutation system is the canonical induced system of $1_H$, not merely an equivalent group representation. [F2, F3, step 1.1, construct]

3.1 Fibre dimension: for a finite-dimensional unitary representation carrying a transitive system, the fibres $P(\{x\})\mathcal H$ are mutually orthogonal (the singletons are disjoint) and sum to $\mathcal H$; transitivity of $U$ transports $P(\{x\})$ to $P(\{gx\})$, so all fibres have the same dimension $d$; hence $|X|d=\dim\mathcal H$ and $d=\dim(\mathcal H)/|X|$. The general theorem identifies the representation with the induction of a unitary representation of $H$ on one fibre, of that dimension; the induced space has the original total dimension. [F2, F4, step 2.1, algebra]

4.1 Steps 1.1, 2.1 and 3.1 verify the claims: the permutation system is a transitive system of imprimitivity on the finite standard Borel space, it is equivalent to the canonical system of the trivial representation of the stabilizer, the finite computation of the induction is the permutation representation, and the fibre dimension of a general finite-dimensional transitive system is $\dim(\mathcal H)/|X|$. [step 1.1, step 2.1, step 3.1, F5] ∎
