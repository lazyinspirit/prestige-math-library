---
id: thm-nonaffine-regular-local-ring-is-ufd
kind: theorem
title: "Regular local rings are unique factorization domains"
status: published
origin: pipeline
deps: [def-smooth-morphism-schemes, def-axiom-of-choice, lem-nonaffine-regular-local-picard-principal-localization, lem-regular-local-domain-induction, lem-regular-local-quotient-by-parameter-is-regular, cor-localisations-of-regular-local-rings-are-regular, thm-krull-principal-ideal-theorem, thm-flatness-is-local, cor-finite-flat-noetherian-modules-are-projective]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Lemma 15.123.2"
      url: https://stacks.math.columbia.edu/tag/0AG0
    - title: "Matsumura, Commutative Ring Theory, Theorem 20.3"
      url: https://doi.org/10.1017/CBO9781139171762
---

## Statement

Assume the Axiom of Choice. Every regular local ring is a unique factorization domain. In particular every smooth finite-type scheme over a field is locally factorial.

## Facts & Assumptions

[F1] Regular local rings are domains; quotienting by an element of $\mathfrak m\setminus\mathfrak m^2$ gives a regular local ring of dimension one less; prime localizations are regular local. ([[lem-regular-local-domain-induction]], [[lem-regular-local-quotient-by-parameter-is-regular]], [[cor-localisations-of-regular-local-rings-are-regular]])

[F2] Line bundles on any principal localization of a regular local ring are trivial. ([[lem-nonaffine-regular-local-picard-principal-localization]])

[F3] A prime minimal over a nonzero principal ideal of a Noetherian domain has height one. Flatness can be checked at primes, and finite flat modules over a Noetherian ring are projective. ([[thm-krull-principal-ideal-theorem]], [[thm-flatness-is-local]], [[cor-finite-flat-noetherian-modules-are-projective]])

## Proof

**Given:** AC and a regular local ring $(R,\mathfrak m)$ of dimension $d$.

1.1 We prove by induction on $d$ that every height-one prime is principal. If $d=0$, $R$ is a field by [F1] and there is nothing to prove. For $d>0$, choose $x\in\mathfrak m\setminus\mathfrak m^2$. By [F1], $R/(x)$ is a domain, so $x$ is a prime element. A height-one prime containing $x$ equals $(x)$ by [F3]. Fix instead a height-one prime $\mathfrak p$ with $x\notin\mathfrak p$. [F1, F3, given, choose, base]

2.1 Assume as induction hypothesis that every height-one prime in a regular local ring of dimension less than $d$ is principal. For every prime $\mathfrak q$ of $R$ not containing $x$, $\mathfrak q\ne\mathfrak m$ and $\dim R_{\mathfrak q}<d$. If $\mathfrak p\not\subset\mathfrak q$, the ideal $\mathfrak pR_{\mathfrak q}$ is the unit ideal. Otherwise it is a height-one prime in the regular local ring $R_{\mathfrak q}$ and is principal by induction. Thus $\mathfrak p_x$ is a finite, locally free rank-one $R_x$-module. It is flat by [F3], projective by [F3], and invertible (local multiplication with the dual is an isomorphism, hence so globally). By [F2], $\mathfrak p_x=(y)$ for some $y\in R_x$. Write $y=x^{-m}f$ with $f\in\mathfrak p$, by clearing denominators in the localized ideal. [F1, F2, F3, step 1.1, IH, algebra]

3.1 Every nonzero nonunit in a Noetherian domain factors into irreducibles: a factorization obstruction would give a strict ascending chain of principal ideals by repeatedly splitting a nonirreducible factor, contradicting the ascending chain condition. Factor $f$ and choose an irreducible factor $a\in\mathfrak p$. In $R_x$ it is a nonunit dividing $y$, while $y$ generates a prime ideal. Since a prime element is irreducible, $a$ and $y$ are associates in $R_x$. Consequently $(a)R_x$ is prime. The element $a$ is not associated to $x$, since $x\notin\mathfrak p$, so the primeness of $x$ implies $x\nmid a$. If $x^r b\in(a)$, write $x^r b=ac$; primeness of $x$ forces $x\mid c$, and cancelling $x$ repeatedly gives $b\in(a)$. Hence $(a)R_x\cap R=(a)$. Since contraction preserves prime ideals, $(a)$ is prime in $R$. It is nonzero and contained in the height-one prime $\mathfrak p$, so $(a)=\mathfrak p$. This completes the induction. [F1, step 1.1, step 2.1, algebra]

4.1 For any irreducible $b\in R$, choose a prime minimal over $(b)$. By [F3] it has height one, and by step 3.1 it is $(c)$. Then $b=ct$, and irreducibility of $b$ implies that $t$ is a unit. Thus $(b)=(c)$ is prime. Factorization exists by the ascending-chain argument of step 3.1, and uniqueness follows by cancelling prime irreducible factors one at a time. This proves that $R$ is a UFD. A smooth finite-type scheme has regular local rings by the geometric-regularity definition of smoothness; applying the result at each point gives local factoriality. AC is used through [F1]–[F3] and the chosen minimal prime. [F1, F3, step 3.1, discharge-induction, algebra] ∎
