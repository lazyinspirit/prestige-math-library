---
id: lem-noetherian-local-flatness-criterion-finite-over-target
kind: lemma
title: Local flatness criterion for a module finite over a larger Noetherian local algebra
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-equational-criterion-for-flatness
  - thm-flatness-criteria-by-injections-and-ideals
  - thm-long-exact-tor-sequence-in-the-right-module-variable
  - thm-artin-rees-lemma
  - thm-krull-intersection-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.99.10 (tag 00ML), variant of the local criterion"
      url: https://stacks.math.columbia.edu/tag/00ML
    - title: "The Stacks Project, Algebra, Lemma 10.99.7 (tag 00MK), local criterion for flatness"
      url: https://stacks.math.columbia.edu/tag/00MK
---

## Statement

Assume the Axiom of Choice. Let $R\to S$ be a local homomorphism of
Noetherian local rings, let $I\subsetneq R$ be an ideal, and let $M$ be a
finite $S$-module. If $M/IM$ is flat over $R/I$ and the multiplication map
$$I\otimes_R M\longrightarrow M$$
is injective, then $M$ is flat over $R$. There is **no** assumption that
$M$ is finitely generated as an $R$-module.

## Facts & Assumptions

**Given:** The local map, ideal, finite $S$-module, and two hypotheses of the Statement. Write $\mathfrak m$ for the maximal ideal of $R$ and $\mathfrak n$ for that of $S$.

[F1] Flatness over $R/I$ is equivalent to lifting each finite relation as in the equational criterion ([[thm-equational-criterion-for-flatness]]). Flatness over $R$ is equivalent to injectivity of $J\otimes_RM\to M$ for every finitely generated ideal $J$ ([[thm-flatness-criteria-by-injections-and-ideals]]).

[F2] The long exact Tor sequence identifies $\operatorname{Tor}_1^R(R/J,M)$ with $\ker(J\otimes_RM\to M)$, and transmits vanishing of $\operatorname{Tor}_1^R(-,M)$ through finite-length extensions ([[thm-long-exact-tor-sequence-in-the-right-module-variable]]). Its Dependent Choice hypothesis follows from the assumed AC ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F3] For a finite ideal $J\subseteq R$, Artin–Rees applied to $J\subseteq R$ and the $\mathfrak m$-adic filtration gives some $c$ with $J\cap\mathfrak m^n\subseteq\mathfrak m^{n-c}J$ for $n\ge c$ ([[thm-artin-rees-lemma]]). If $N$ is a finite $S$-module, then $\bigcap_{r\ge0}(\mathfrak mS)^rN=0$, because $\mathfrak mS\subseteq\mathfrak n=J(S)$ ([[thm-krull-intersection-theorem]]).

## Proof

**Proof technique:** lift a relation modulo $I$ to get the maximal-ideal injection, then use finite-length Tor vanishing and Artin–Rees to test all ideals.

1.1 We first show that $\mathfrak m\otimes_RM\to M$ is injective. Let $z=\sum_{i=1}^r a_i\otimes x_i$ lie in its kernel, with $a_i\in\mathfrak m$ and $\sum_i a_ix_i=0$. In the flat $R/I$-module $M/IM$, [F1] gives $\overline y_j\in M/IM$ and $\overline b_{ij}\in R/I$ such that $$\overline x_i=\sum_j\overline b_{ij}\overline y_j,\qquad \sum_i\overline a_i\overline b_{ij}=0\quad\text{for every }j.$$ Choose lifts $y_j\in M$ and $b_{ij}\in R$. Then $x_i-\sum_jb_{ij}y_j\in IM$ and $\sum_i a_ib_{ij}\in I$. Expanding $z$ with these equations expresses it as the image of an element $w\in I\otimes_RM$: for a term $a_i\otimes (c m)$ with $c\in I$, move $c$ to the first tensor factor to obtain $a_ic\otimes m$, and the remaining terms already have first factor $\sum_i a_ib_{ij}\in I$. The image of $w$ in $M$ is the image of $z$, namely zero. The given injectivity of $I\otimes_RM\to M$ makes $w=0$, hence $z=0$. [F1]

2.1 Apply [F2] to $0\to\mathfrak m\to R\to k:=R/\mathfrak m\to0$. Step 1.1 gives $\operatorname{Tor}_1^R(k,M)=0$. A finite-length $R$-module has a finite filtration with quotients $k$; induction on its length using the long exact Tor sequence of [F2] therefore gives $\operatorname{Tor}_1^R(N,M)=0$ for every finite-length $N$. Since $R$ is Noetherian local, $R/\mathfrak m^n$ and $R/(J+\mathfrak m^n)$ have finite length for any ideal $J$ and $n\ge1$. Consequently both multiplication maps $$\mathfrak m^n\otimes_RM\to M,\qquad (J+\mathfrak m^n)\otimes_RM\to M$$ are injective. [F2, step 1.1]

3.1 Fix a finitely generated ideal $J\subseteq R$ and set $K=\ker(J\otimes_RM\to M)$. For each $n\ge1$, tensor the exact sequence $$J\cap\mathfrak m^n\longrightarrow J\oplus\mathfrak m^n\longrightarrow J+\mathfrak m^n\longrightarrow0$$ with $M$. The map $(J\oplus\mathfrak m^n)\otimes_RM\to (J+\mathfrak m^n)\otimes_RM$ sends $(z,0)$ to zero for $z\in K$: its product in $M$ is zero, and the second injection in step 2.1 detects this. Right exactness of tensor therefore puts $(z,0)$ in the image of $(J\cap\mathfrak m^n)\otimes_RM$. In particular, $$K\subseteq\operatorname{im}\bigl((J\cap\mathfrak m^n)\otimes_RM\longrightarrow J\otimes_RM\bigr)\quad\text{for every }n. $$ [F2, step 2.1]

4.1 By Artin–Rees [F3], for $n\ge c$ the image in step 3.1 lies in $\mathfrak m^{n-c}(J\otimes_RM)$. The $S$-module $J\otimes_RM$ is finite: a finite generating set of $J$ gives a surjection $M^r\to J\otimes_RM$. As $\mathfrak mS\subseteq J(S)$, Krull intersection [F3] yields $$K\subseteq\bigcap_{n\ge c}\mathfrak m^{n-c}(J\otimes_RM)=0.$$ Thus $J\otimes_RM\to M$ is injective for every finitely generated $J$, and [F1] makes $M$ flat over $R$. This argument uses finiteness over $S$ only for Krull intersection; $M$ need not be finite over $R$. [F1, F3, step 3.1]

5.1 The Axiom of Choice enters through the published Krull-intersection boundary and implies the Dependent Choice used for the cited Tor sequence. The remaining choices above are finite. [F2, F3, step 4.1] $\square$
