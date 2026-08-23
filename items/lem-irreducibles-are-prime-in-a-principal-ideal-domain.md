---
id: lem-irreducibles-are-prime-in-a-principal-ideal-domain
kind: lemma
title: "Every irreducible element of a principal ideal domain is prime"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-ideal-domain, def-irreducible-and-prime-elements-in-a-domain, def-prime-and-maximal-ideals, cor-maximal-ideals-are-prime]
aliases: []
landmark: false
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
    - title: "K. Conrad, Modules over a PID, preliminary PID facts"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 1"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Statement

Every irreducible element of a principal ideal domain is prime.

## Facts & Assumptions

**Given:** A PID $R$, an irreducible $p\in R$, the irreducible and prime element definitions of [[def-irreducible-and-prime-elements-in-a-domain]], and maximal and prime ideals as in [[def-prime-and-maximal-ideals]].

[F1] In a PID, there is an $a\in R$ with $I=(a)$ for every ideal $I$ ([[def-principal-ideal-domain]]).

[L1] Every maximal ideal in a commutative unital ring is prime ([[cor-maximal-ideals-are-prime]]).

## Proof

**Proof technique:** direct.

1.1 Let $(p)\subseteq I\subseteq R$. By [F1], write $I=(a)$, so $p=ab$ for some $b$. Irreducibility makes $a$ or $b$ a unit. If $a$ is a unit, $I=R$; if $b$ is a unit, $(a)=(p)$. Since $p$ is a nonzero nonunit, $(p)$ is proper and therefore maximal. [F1, given, algebra]

2.1 By [L1], the maximal ideal $(p)$ is prime. [step 1.1, L1]

3.1 If $p\mid xy$, then $xy\in(p)$, so primality of the ideal gives $x\in(p)$ or $y\in(p)$, equivalently $p\mid x$ or $p\mid y$. Thus $p$ is a prime element. Associates generate the same ideal and give the same conclusion. [step 2.1, given] ∎
