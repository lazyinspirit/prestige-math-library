---
id: lem-increasing-sequence-of-coherent-subsheaves-stabilizes
kind: lemma
title: "Increasing sequences of coherent subsheaves of a coherent module on a Noetherian scheme stabilize"
status: published
origin: pipeline
deps: [def-coherent-module-scheme, def-noetherian-module, def-locally-noetherian-and-noetherian-scheme, thm-affine-quasi-coherent-equivalence, def-quasi-coherent-module-scheme, thm-equivalent-characterizations-of-noetherian-modules, thm-coherent-sheaves-abelian-noetherian-scheme, def-finite-type-finite-presentation-module-sheaf, lem-finite-modules-over-noetherian-rings-are-noetherian, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "The Stacks Project, tag 0BI4 (Lemma 54.15.1)"
      url: https://stacks.math.columbia.edu/tag/0BI4
      locator: "Proof of Lemma 54.15.1: the increasing sequence of coherent submodules of the fixed finite modification stabilizes by Cohomology of Schemes, Lemma 30.10.1; retrieved 2026-10-03."
    - title: "The Stacks Project, tag 01Y8 (Lemma 30.10.1)"
      url: https://stacks.math.columbia.edu/tag/01Y8
      locator: "Lemma 30.10.1, statement and proof: quasi-coherent submodules of a coherent module on a Noetherian scheme satisfy the ascending chain condition; a finite affine cover reduces this to module stabilization. Retrieved 2026-10-03."
---

## Statement

Let $X$ be a Noetherian scheme and let $\mathcal F$ be a coherent
$\mathcal O_X$-module ([[def-coherent-module-scheme]]). If
$$\mathcal F_1\subseteq\mathcal F_2\subseteq\mathcal F_3\subseteq\cdots$$
is an increasing sequence of coherent $\mathcal O_X$-submodules of $\mathcal F$,
then the sequence stabilizes: there is an index $n_0$ with
$\mathcal F_n=\mathcal F_{n_0}$ for every $n\ge n_0$.

The proof inherits the Axiom of Choice through the affine quasi-coherent
interface ([[thm-affine-quasi-coherent-equivalence]],
[[def-axiom-of-choice]]); apart from that interface it selects nothing and is
otherwise choice-free.

## Facts & Assumptions

[F1] A scheme is Noetherian if and only if it has a finite affine open cover by spectra of Noetherian rings ([[def-locally-noetherian-and-noetherian-scheme]]).

[F2] On a locally Noetherian scheme a quasi-coherent module is coherent if and only if it is of finite type ([[thm-coherent-sheaves-abelian-noetherian-scheme]]); on an affine scheme $\operatorname{Spec}A$, finite type means that the module is isomorphic to $\widetilde M$ for a finitely generated $A$-module $M$ ([[def-finite-type-finite-presentation-module-sheaf]], [[def-coherent-module-scheme]]).

[F3] For an affine scheme $U=\operatorname{Spec}A$, the functor $\Gamma(U,-)$ is an equivalence from quasi-coherent $\mathcal O_U$-modules to $A$-modules with inverse $M\mapsto\widetilde M$ ([[thm-affine-quasi-coherent-equivalence]], [[def-quasi-coherent-module-scheme]]). An equivalence of abelian categories preserves and reflects monomorphisms, so a quasi-coherent subsheaf $\mathcal G\subseteq\mathcal H$ of a quasi-coherent sheaf on $U$ corresponds to the inclusion of $A$-modules $\Gamma(U,\mathcal G)\subseteq\Gamma(U,\mathcal H)$, and $\mathcal G$ is recovered from its module of sections; thus two quasi-coherent subsheaves of $\mathcal H$ with the same module of sections are equal.

[F4] If $M$ is a finitely generated module over a Noetherian ring $A$, then $M$ is a Noetherian module, so every ascending sequence of submodules of $M$ stabilizes ([[lem-finite-modules-over-noetherian-rings-are-noetherian]], [[thm-equivalent-characterizations-of-noetherian-modules]], [[def-noetherian-module]]). This uses no choice principle.

## Proof

**Given:** A Noetherian scheme $X$, a coherent $\mathcal O_X$-module $\mathcal F$ and an increasing sequence $\mathcal F_1\subseteq\mathcal F_2\subseteq\cdots$ of coherent $\mathcal O_X$-submodules of $\mathcal F$.

1.1 If $X=\varnothing$ there is nothing to prove, so assume $X\ne\varnothing$. By [F1] fix a finite affine open cover $X=U_1\cup\cdots\cup U_r$ with $U_i=\operatorname{Spec}A_i$ and $A_i$ Noetherian; necessarily $r\ge1$. This is a single existential instantiation of the cover granted by the definition of a Noetherian scheme, not a choice from an infinite family. [F1, given]

2.1 Fix $i$. The restriction $\mathcal F|_{U_i}$ is quasi-coherent, and it is of finite type because $\mathcal F$ is coherent and the restriction of a coherent module to an open subscheme is coherent; by [F2] put $M_i:=\Gamma(U_i,\mathcal F)$, a finitely generated $A_i$-module. Each $\mathcal F_n|_{U_i}$ is likewise a coherent, hence finite type, quasi-coherent subsheaf of $\mathcal F|_{U_i}$, and $N_{i,n}:=\Gamma(U_i,\mathcal F_n)$ is a finitely generated $A_i$-submodule of $M_i$. [F2, F3, step 1.1]

3.1 For $m\le n$ the inclusion $\mathcal F_m\subseteq\mathcal F_n$ induces, under the equivalence of [F3], an inclusion of $A_i$-modules $N_{i,m}\subseteq N_{i,n}$; in particular $N_{i,1}\subseteq N_{i,2}\subseteq N_{i,3}\subseteq\cdots$ is an ascending sequence of submodules of $M_i$. [F3, step 2.1]

4.1 By [F4] the module $M_i$ is Noetherian, so the ascending sequence of step 3.1 stabilizes: there is an integer $s_i$ with $N_{i,n}=N_{i,s_i}$ for every $n\ge s_i$. This holds for each fixed $i$ with no choice used. [F4, step 3.1]

5.1 Set $s:=\max\{s_1,\dots,s_r\}$, which exists because $r$ is finite. Let $n\ge s$. For every $i$ we have $N_{i,n}=N_{i,s}$, both being $N_{i,s_i}$, so the quasi-coherent subsheaves $\mathcal F_n|_{U_i}$ and $\mathcal F_s|_{U_i}$ of $\mathcal F|_{U_i}$ have the same module of sections and are therefore equal by [F3]. Equality of subsheaves of a quasi-coherent sheaf can be checked on the members of an open cover, and the $U_i$ cover $X$; hence $\mathcal F_n=\mathcal F_s$ for every $n\ge s$, which is the asserted stabilization with $n_0=s$. [F3, step 1.1, step 4.1, algebra] ∎
