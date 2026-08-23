---
id: thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs
kind: theorem
title: "The Eilenberg–Moore forgetful functor strictly creates coequalizers of $U^T$-split pairs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-u-split-coequalizer-and-creation-of-their-coequalizers, def-eilenberg-moore-category, def-t-algebra-and-algebra-homomorphism, thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.4.10"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For every monad $T$ on $\mathcal C$, the Eilenberg–Moore forgetful functor $U^T:\mathcal C^T\to\mathcal C$ strictly creates coequalizers of $U^T$-split pairs.

## Facts & Assumptions

**Given:** Algebra homomorphisms $f,g:(A,a)\rightrightarrows(B,b)$ and a supplied split coequalizer $q:B\to C$ of their underlying pair in $\mathcal C$.

[L1] The functor $U$ strictly creates coequalizers of $U$-split pairs when every supplied splitting has a unique lift on the same apex and legs, and the lifted fork is a coequalizer ([[def-u-split-coequalizer-and-creation-of-their-coequalizers]]).

[L2] Every split coequalizer is a coequalizer and an absolute colimit ([[thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $q$, $Tq$, and $T^2q$ are coequalizers of the corresponding images of $f,g$. In particular each is an epimorphism, since every coequalizer is epic by its uniqueness clause. [L2, given]

2.1 Because $f$ and $g$ are algebra homomorphisms, $qb:T B\to C$ coequalizes $Tf$ and $Tg$. The universal property of $Tq$ gives a unique $c:TC\to C$ satisfying $cTq=qb$. [step 1.1, construct]

3.1 After precomposition with the epimorphism $q$, the unit equation $c\eta_C=1_C$ is the unit law for $b$. After precomposition with the epimorphism $T^2q$, the associativity equation $cT(c)=c\mu_C$ is the associativity law for $b$. Hence $(C,c)$ is a $T$-algebra. [step 1.1, step 2.1, algebra]

4.1 The defining equation $cTq=qb$ says exactly that $q:(B,b)\to(C,c)$ is an algebra homomorphism. [step 2.1, step 3.1, algebra]

5.1 If $r:(B,b)\to(D,d)$ is an algebra homomorphism with $rf=rg$, [L2] gives a unique underlying $u:C\to D$ with $uq=r$. Precomposing $uc$ and $dT(u)$ with the epimorphism $Tq$ gives the same map, so $u$ is an algebra homomorphism and is the unique algebraic factorization. [step 4.1, L2]

6.1 Any algebra structure $c'$ on the supplied apex for which $q$ is an algebra homomorphism satisfies $c'Tq=qb=cTq$, so $c'=c$ because $Tq$ is epic. Together with step 5.1 this is the unique on-the-nose lift required by [L1]. [step 2.1, step 5.1, L1] ∎
