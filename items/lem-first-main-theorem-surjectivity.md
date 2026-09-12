---
id: lem-first-main-theorem-surjectivity
kind: lemma
title: Every local full-defect block induces to a global block of defect D
deps: ["lem-block-idempotents-are-fixed-by-normal-p-subgroup-brauer-projection", "lem-block-induction-exists-under-centralizer-containment", "thm-defect-groups-are-maximal-brauer-support", "lem-idempotents-lift-through-finite-commutative-algebra-quotients", "thm-brauer-homomorphism-is-multiplicative", "def-brauer-homomorphism-for-a-p-subgroup", "thm-sylow-second-theorem", "thm-modular-block-central-characters-correspond-to-blocks"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Saunders, Modular Representation Theory, Theorem 5.16
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Farrell–Lassueur, Modular Representation Theory of Finite Groups, Theorem
        40.4, §40 (printed pp.8–12 of upload17)
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Fix $D\le G$ a $p$-subgroup and $N=N_G(D)$. For every block $b=kNe$ with defect group $D$, $b^G$ is defined and has defect group $D$. Its idempotent $f$ satisfies $\operatorname{Br}_D(f)=e$. This proof is choice-free.

## Facts & Assumptions

**Given:** The finite groups, splitting residue field and nonzero local block.

[F1] [[lem-block-idempotents-are-fixed-by-normal-p-subgroup-brauer-projection]] gives $e=\operatorname{Br}_D(e)$.

[F2] [[lem-block-induction-exists-under-centralizer-containment]] defines $b^G$ and gives its central character.

[F3] [[thm-defect-groups-are-maximal-brauer-support]] identifies defect groups with maximal nonzero support.

[F4] Idempotents lift through finite commutative quotients by [[lem-idempotents-lift-through-finite-commutative-algebra-quotients]].

[F5] [[thm-brauer-homomorphism-is-multiplicative]] gives the algebra homomorphism on fixed elements.

[F6] [[def-brauer-homomorphism-for-a-p-subgroup]] gives coefficient projection.

[F7] Sylow containment and conjugacy are [[thm-sylow-second-theorem]].

[F8] [[thm-modular-block-central-characters-correspond-to-blocks]] supplies the finite block idempotents and their identifying scalar values.

## Proof

1.1 We first record the elementary normalizer condition: if $P<T$ are finite $p$-groups, let $P$ act on $T/P$ by left multiplication. Nonfixed orbit sizes are divisible by $p$, and $[T:P]$ is divisible by $p$. The fixed points are $N_T(P)/P$ and include the identity coset, so their positive cardinality is divisible by $p$; hence $N_T(P)>P$. Now if $x$ has nonzero coefficient in $e$, F1 puts $x\in C_G(D)$. By F7 take a Sylow subgroup $T$ of $C_G(x)$ containing $D$. If $T>D$, its subgroup $R=N_T(D)>D$ lies in $N$ and centralizes $x$. The coefficient of $x$ survives $\operatorname{Br}_R(e)$ by F6, contradicting F3 for the local block. Thus $D$ is Sylow in $C_G(x)$ for every support element $x$ of $e$. [F1, F3, F6, F7, algebra]

2.1 Suppose $y=gxg^{-1}$ also centralizes $D$, with $x$ in that support. Both $gDg^{-1}$ and $D$ are Sylow in $C_G(y)$: the first by step 1.1, and the second by equal order and $D\le C_G(y)$. F7 supplies $c\in C_G(y)$ with $cgDg^{-1}c^{-1}=D$. Then $cg\in N$ and $(cg)x(cg)^{-1}=y$. Since $e$ is central in $kN$, its coefficients at $x$ and $y$ agree. Therefore its coefficients are constant on every intersection of a $G$-conjugacy class with $C_G(D)$, with zero throughout intersections missing the support. Give each full $G$-class that common coefficient, zero for a class disjoint from $C_G(D)$. This finite class sum is $a\in Z(kG)$ with $\operatorname{Br}_D(a)=e$ by F6. [F6, F7, step 1.1, algebra]

3.1 By F5 the image of $Z(kG)$ is a finite commutative quotient algebra. Its idempotent $e$, present by step 2.1, lifts by F4 to a central idempotent $u\in kG$. Write $u$ as a sum of distinct global primitive block idempotents $f_j$ using F8. Their Brauer images are orthogonal idempotents, central in $kN$ because $N$ normalizes $D$, and sum to $e$. Since $e$ is primitive in $Z(kN)$, exactly one image equals $e$ and all others are zero. Let $f$ be that block idempotent and $B=kGf$. F2 applies because $C_G(D)\le N$ and gives $\lambda_{b^G}(f)=\lambda_b(e)=1$. F8 forces $b^G=B$. [F2, F4, F5, F8, step 2.1, algebra]

4.1 Its Brauer image at $D$ is nonzero. If $S>D$ had $\operatorname{Br}_S(f)\ne0$, put $R=N_S(D)>D$ by step 1.1. Then $D\le R\le N$. Since $C_G(S)\subseteq C_G(R)\subseteq C_G(D)$, F6 gives $\operatorname{Br}_R(e)=\operatorname{Br}_R(f)\ne0$: a nonzero coefficient retained at $S$ is still retained at $R$. This contradicts F3 for the local block $e$. Thus no such $S$ exists, and F3 proves $D$ is a global defect group of $B$. For $D=1$ the normalizer is $G$, and the proof gives the original defect-zero block; when no local defect-$D$ block exists the universal assertion has no inputs. All lifting and subgroup selections here concern finite sets, so no AC or stronger Green restriction theorem is used. [F3, F6, step 1.1, step 3.1, algebra] ∎
