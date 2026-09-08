---
id: lem-degree-one-maps-and-quotient-action-are-well-defined
kind: lemma
title: "Degree-one maps and the quotient action are well-defined"
status: draft
origin: pipeline
deps: [def-degree-one-restriction-inflation-and-quotient-action]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
    - title: "Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21"
      url: "https://arxiv.org/pdf/1103.4052"
---

## Statement

The formulas define homomorphisms $\operatorname{inf}:H^1(Q,A^N)\to H^1(G,A)$, $\operatorname{res}:H^1(G,A)\to H^1(N,A)^Q$, and a Q-action on $H^1(N,A)$. Here H1 is the bar quotient, with the inherited convention for its derived interpretation.

## Facts & Assumptions

**Given:** The extension, module, and formulas in the preceding Definition.

[F1] Restriction, inflation and conjugation are given by the displayed crossed-map formulas ([[def-degree-one-restriction-inflation-and-quotient-action]]).

## Proof

1.1 If a is N-fixed, then $n(ga)=g(g^{-1}ng)a=ga$, since N is normal. Thus ga is N-fixed. Replacing g by gn with n in N does not change ga, proving the Q-action on $A^N$. For a crossed map c into $A^N$, $c(\pi(gh))=c(\pi g)+g c(\pi h)$; hence its inflation is crossed. Principal c from a in $A^N$ inflates to $g\mapsto ga-a$. Restriction plainly preserves the crossed identity and sends the principal map from a to the principal map from the same a. [F1, given, algebra]

1.2 For $d\in Z^1(N,A)$, write $u=g^{-1}ng$, $w=g^{-1}mg$. Then $(g\cdot d)(nm)=g(d(u)+u d(w))=(g\cdot d)(n)+n(g\cdot d)(m)$, so the action preserves crossed maps. It sends $\delta a$ to $\delta(ga)$ and satisfies $(gh)\cdot d=g\cdot(h\cdot d)$ by substitution. For $t\in N$, using $d(t^{-1})=-t^{-1}d(t)$ gives $(t\cdot d)(n)=d(n)+n d(t)-d(t)$. Hence N acts trivially on H1, and the action there factors through Q. [F1, algebra]

2.1 For a global crossed map D on G the identical expansion gives $gD(g^{-1}ng)=D(n)+nD(g)-D(g)$. Consequently conjugation changes its restriction by the principal map $\delta(D(g))$, so the restriction class is Q-invariant. All formulas are additive in the crossed map, and therefore descend to the stated homomorphisms. The zero module and either trivial end group obey the same identities. [step 1.1, step 1.2, algebra] ∎
