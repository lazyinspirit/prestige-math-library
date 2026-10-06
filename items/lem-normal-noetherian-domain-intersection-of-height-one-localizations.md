---
id: lem-normal-noetherian-domain-intersection-of-height-one-localizations
kind: lemma
title: "A normal Noetherian domain is the intersection of its height-one localizations"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - def-normal-noetherian-ring
  - lem-normal-domain-implies-s-two
  - thm-existence-of-associated-primes
  - lem-associated-prime-equivalent-cyclic-embedding
  - thm-depth-zero-associated-prime-criterion
  - lem-depth-quotient-by-regular-element
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
    - title: "The Stacks Project, Tag 031T and Tag 0AVK (Hartogs for normal domains)"
      url: "https://stacks.math.columbia.edu/tag/031T"
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 2.5/1 and scheme Hartogs in owner-arithmetic-models/neron-source/closure-supplement.md"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC. Let $A$ be a Noetherian normal domain ([[def-normal-noetherian-ring]]) with fraction field $K$, so that $A$ is integrally closed in $K$. Then, inside $K$,
$$A=\bigcap_{\operatorname{ht}\mathfrak p=1}A_{\mathfrak p},$$
the intersection running over all height-one prime ideals $\mathfrak p$ of $A$. Equivalently, a rational function which is regular at every height-one point of $\operatorname{Spec}A$ is regular.

## Facts & Assumptions

**Given:** AC, a Noetherian normal domain $A$ with fraction field $K$, and an element $z=b/a\in K$ with $a,b\in A$, $a\ne0$.

[F1] A Noetherian ring is normal when every prime localization is an integrally closed domain; for a domain this means integrally closed in its fraction field ([[def-normal-noetherian-ring]]). A normal Noetherian domain satisfies Serre's condition $(S_2)$: $\operatorname{depth}A_{\mathfrak p}\ge\min(2,\operatorname{ht}\mathfrak p)$ for every prime $\mathfrak p$ ([[lem-normal-domain-implies-s-two]], assuming AC).

[F2] A nonzero module over a Noetherian ring has an associated prime ([[thm-existence-of-associated-primes]], assuming DC, hence in particular under AC); a prime $\mathfrak p$ is associated to $M$ exactly when $\mathfrak p=\operatorname{Ann}(m)$ for some $m\in M$, equivalently when $A/\mathfrak p$ embeds in $M$ ([[lem-associated-prime-equivalent-cyclic-embedding]]).

[F3] For a Noetherian local ring $(R,\mathfrak m)$ and a nonzero finite module $M$, $\operatorname{depth}(M)=0$ if and only if $\mathfrak m\in\operatorname{Ass}(M)$ ([[thm-depth-zero-associated-prime-criterion]], assuming AC).

[F4] If $R$ is Noetherian, $M$ finite, $I\subseteq J(R)$ and $x\in I$ is $M$-regular, then $\operatorname{depth}_I(M/xM)=\operatorname{depth}_I(M)-1$ ([[lem-depth-quotient-by-regular-element]], assuming AC).

[F5] A height-one prime localization of a Noetherian integrally closed domain is a discrete valuation ring ([[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]).

## Proof

**Proof technique:** direct, by contraposition of the nontrivial inclusion.

1.1 The inclusion $A\subseteq\bigcap_{\operatorname{ht}\mathfrak p=1}A_{\mathfrak p}$ holds because every $A_{\mathfrak p}$ contains $A$, compatibly with the common fraction field $K$; all rings involved are subrings of $K$. [given, algebra]

2.1 Suppose $z=b/a\notin A$. Then $b\notin aA$, so the class $\bar b$ of $b$ in the finite nonzero $A$-module $A/aA$ generates a nonzero cyclic submodule $C=A\bar b$. By [F2] $C$ has an associated prime $\mathfrak p$, say $\mathfrak p=\operatorname{Ann}(c\bar b)$ for some $c\in A$; then $0\ne a\in\mathfrak p$ because $a$ annihilates $A/aA$. [F2, step 1.1, algebra]

3.1 The localized module $C_{\mathfrak p}$ is nonzero, since $\operatorname{Ann}(c\bar b)=\mathfrak p$: if $s\in A\setminus\mathfrak p$ satisfied $s(c\bar b)=0$, then $s\in\mathfrak p$, a contradiction. As $C_{\mathfrak p}\subseteq(A/aA)_{\mathfrak p}=A_{\mathfrak p}/aA_{\mathfrak p}$ and the annihilator of the image of $c\bar b$ in this localization is $\mathfrak pA_{\mathfrak p}$, the associated-prime depth criterion [F3] gives $\operatorname{depth}_{A_{\mathfrak p}}(A_{\mathfrak p}/aA_{\mathfrak p})=0$. [F2, F3, step 2.1, algebra]

4.1 Since $A$ is a domain and $a\ne0$, the element $a$ is $A_{\mathfrak p}$-regular and lies in the maximal ideal $\mathfrak pA_{\mathfrak p}\subseteq J(A_{\mathfrak p})$; the regular-element depth formula [F4] applied to $M=A_{\mathfrak p}$ gives $\operatorname{depth}(A_{\mathfrak p}/aA_{\mathfrak p})=\operatorname{depth}(A_{\mathfrak p})-1$, so $\operatorname{depth}A_{\mathfrak p}=1$. [F4, step 3.1, algebra]

5.1 By the $(S_2)$ condition of [F1], $1=\operatorname{depth}A_{\mathfrak p}\ge\min(2,\operatorname{ht}\mathfrak p)$, so $\operatorname{ht}\mathfrak p\le1$; since $0\ne a\in\mathfrak p$ we also have $\operatorname{ht}\mathfrak p\ge1$, hence $\operatorname{ht}\mathfrak p=1$, and $A_{\mathfrak p}$ is a discrete valuation ring by [F5]. [F1, F5, step 2.1, step 4.1, algebra]

6.1 Finally $z\notin A_{\mathfrak p}$. Indeed, for the annihilator $\operatorname{Ann}(\bar b)\subseteq A$ of $\bar b\in A/aA$ one has $\operatorname{Ann}(\bar b)\subseteq\mathfrak p$, since $s\bar b=0$ implies $s(c\bar b)=c(s\bar b)=0$ and hence $s\in\operatorname{Ann}(c\bar b)=\mathfrak p$. If $b/a\in A_{\mathfrak p}$, write $b=au$ with $u=r/s$, $r\in A$, $s\in A\setminus\mathfrak p$; then $sb=ar\in aA$, so $s\in\operatorname{Ann}(\bar b)\subseteq\mathfrak p$, contradicting $s\notin\mathfrak p$. Thus every $z\in K$ outside $A$ lies outside $A_{\mathfrak p}$ for some height-one prime $\mathfrak p$, and with step 1.1 the intersection equals $A$. [F2, step 2.1, step 5.1, algebra] ∎

The last step also yields the standard Hartogs form: an element of $K$ contained in $A_{\mathfrak p}$ for every height-one prime $\mathfrak p$ lies in $A$, so on a normal Noetherian scheme a rational function regular in codimension one is regular.
