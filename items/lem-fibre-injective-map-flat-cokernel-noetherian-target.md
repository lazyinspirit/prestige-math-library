---
id: lem-fibre-injective-map-flat-cokernel-noetherian-target
kind: lemma
title: Fibrewise injectivity lifts and leaves a flat cokernel over a Noetherian target
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-krull-intersection-theorem
  - thm-flatness-criteria-by-injections-and-ideals
  - thm-long-exact-tor-sequence-in-the-right-module-variable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.99.1 (tag 00ME), fibre-injective maps"
      url: https://stacks.math.columbia.edu/tag/00ME
---

## Statement

Assume the Axiom of Choice. Let $R\to S$ be a local homomorphism
of local rings with $S$ Noetherian, and write $\mathfrak m$ for
the maximal ideal of $R$. Let $M$ be an $S$-module flat over $R$,
let $N$ be a finite $S$-module, and let $u:N\to M$ be $S$-linear.
If the fibre map $N/\mathfrak mN\to M/\mathfrak mM$ is injective,
then $u$ is injective and $\operatorname{coker}(u)$ is flat over
$R$. No Noetherian or finite-generation condition is imposed on
$R$ or on $M$.

## Facts & Assumptions

**Given:** The local map, the finite source, the flat target, and the fibrewise injection.

[F1] Flatness preserves injections and remains true after passage from $R$ to $R/I$ for the quotient $M/IM$. It can be tested by injectivity of ideal tensor maps ([[thm-flatness-criteria-by-injections-and-ideals]]).

[F2] For a finite module $N$ over the Noetherian local ring $S$, Krull intersection gives $\bigcap_{n\ge1}(\mathfrak mS)^nN=0$, because $\mathfrak mS$ lies in the maximal ideal of $S$ ([[thm-krull-intersection-theorem]]).

[F3] If $0\to N\to M\to C\to0$ is exact and $M$ is flat over $R$, the Tor sequence identifies $\operatorname{Tor}_1^R(R/I,C)$ with the kernel of $N/IN\to M/IM$. Vanishing for every ideal $I$ makes $C$ flat ([[thm-long-exact-tor-sequence-in-the-right-module-variable]], [[thm-flatness-criteria-by-injections-and-ideals]]).

## Proof

**Proof technique:** lift the injection through every power of the maximal ideal, use Krull intersection, then repeat modulo arbitrary ideals to test flatness of the cokernel.

1.1 For $n\ge1$ let $u_n:N/\mathfrak m^nN\to M/\mathfrak m^nM$. The hypothesis is that $u_1$ is injective. Suppose $u_n$ injective. The short sequence $$0\to\mathfrak m^n/\mathfrak m^{n+1}\to R/\mathfrak m^{n+1}\to R/\mathfrak m^n\to0$$ remains exact after tensoring with the $R$-flat module $M$. For $N$, tensoring gives the analogous sequence, right exact though not necessarily injective at its left. Both left tensor terms identify with the corresponding residue modules tensored over $k=R/\mathfrak m$ with the vector space $\mathfrak m^n/\mathfrak m^{n+1}$. Since $u_1$ is injective, tensoring it over the field $k$ preserves injection on these left terms. A diagram chase with the two sequences and $u_n$ shows that $u_{n+1}$ is injective. Thus induction gives injectivity for every $n$. [F1]

2.1 If $z\in\ker u$, the image of $z$ under each $u_n$ is zero, so $z\in\mathfrak m^nN$ for every $n$. By [F2], their intersection is zero; hence $u$ is injective. [F2, step 1.1]

3.1 Let $I\subsetneq R$ be any ideal. The map $R/I\to S/IS$ is local with Noetherian local target; $N/IN$ is finite over that target, and $M/IM$ is flat over $R/I$ by [F1]. The reduction of $u_I:N/IN\to M/IM$ modulo the maximal ideal $\mathfrak m/I$ is the original injective fibre map. Apply steps 1.1–2.1 to $u_I$ over this quotient local map: $u_I$ is injective. The case $I=R$ is trivial. [F1, F2, step 1.1, step 2.1]

4.1 Put $C=\operatorname{coker}u$. Step 2.1 makes $0\to N\to M\to C\to0$ exact, and step 3.1 makes $N/IN\to M/IM$ injective for every ideal $I$. By [F3], $\operatorname{Tor}_1^R(R/I,C)=0$ for every $I$, so $C$ is $R$-flat. The Axiom of Choice is inherited at the cited Krull-intersection and flatness boundaries. [F3, step 2.1, step 3.1] ∎
