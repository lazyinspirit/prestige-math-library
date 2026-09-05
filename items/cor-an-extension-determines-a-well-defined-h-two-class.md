---
id: cor-an-extension-determines-a-well-defined-h-two-class
kind: corollary
title: "An extension determines a well-defined H^2 class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-second-cohomology-by-factor-sets, lem-changing-the-section-changes-the-factor-set-by-a-coboundary]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

An extension of $G$ by the abelian $G$-module $M$, together with a normalized
section, determines a cohomology class $[f_s]\in H^2(G,M)$ that is independent
of the chosen normalized section.

## Facts & Assumptions

**Given:** An extension $1\to M\to E\to G\to1$ inducing the given action, and a normalized section $s$.

[F1] The second cohomology group is the quotient of cocycles by coboundaries ([[def-second-cohomology-by-factor-sets]]).

[L1] Replacing the section changes the factor set by a coboundary ([[lem-changing-the-section-changes-the-factor-set-by-a-coboundary]]).

## Proof

**Proof technique:** direct.

1.1 Because $s(1)=1$, the factor-set formula gives $f_s(1,g)=f_s(g,1)=0$ for every $g\in G$. [given, algebra]

2.1 Comparing $(s(g)s(h))s(k)$ with $s(g)(s(h)s(k))$ and translating the conjugation term through the prescribed $G$-action yields $$g\cdot f_s(h,k)-f_s(gh,k)+f_s(g,hk)-f_s(g,h)=0.$$ So $f_s$ is a normalized two-cocycle. [step 1.1, given, algebra]

3.1 Steps 1.1 and 2.1 show that $f_s\in Z^2(G,M)$, so [F1] defines a class $[f_s]\in H^2(G,M)$. [F1, step 1.1, step 2.1]

4.1 If $s'$ is another normalized section, then [L1] gives $f_{s'}=f_s+\delta u$ for some one-cochain $u$. Thus $f_s$ and $f_{s'}$ define the same coset in the quotient [F1]. [F1, L1, step 3.1]

5.1 Therefore the extension determines a well-defined class in $H^2(G,M)$ independent of the chosen normalized section. [step 4.1] ∎
