---
id: lem-kernel-of-degree-two-inflation-is-the-transgression-image
kind: lemma
title: "The kernel of degree-two inflation is the transgression image"
status: draft
origin: pipeline
deps: [def-low-degree-transgression-for-a-group-extension, lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps, def-axiom-of-choice]
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
    - title: "Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21"
      url: "https://arxiv.org/pdf/1103.4052"
---

## Statement

Assume AC. The map $\operatorname{inf}:H^2(Q,A^N)\to H^2(G,A)$ is pullback along $\pi:G\to Q$ followed by coefficient inclusion $A^N\hookrightarrow A$. Then $\ker\operatorname{inf}=\operatorname{im}\operatorname{Tra}$. H2 denotes normalized bar cohomology, with its inherited derived interpretation.

## Facts & Assumptions

**Given:** AC, the group extension, module A and B=A^N.

[F1] For a Q-invariant class, $L=N_{A\rtimes G}(D)$ projects onto G with kernel B, and Tra is L/D ([[def-low-degree-transgression-for-a-group-extension]]).

[F2] Pullback then abelian coefficient pushout realizes inflation on bar H2 ([[lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps]]).

## Proof

1.1 For a transgression class let E0=L/D. Its pullback to G is isomorphic to L by $l\mapsto(lD,p(l))$. Injectivity follows from $D\cap\ker p=1$. For a pair (lD,g) in the pullback, $p(l)^{-1}g\in N$ and multiplication by its unique lift in D corrects p(l) to g, proving surjectivity. This isomorphism fixes the kernel B. Pushing L out to A gives the group $(A\rtimes L)/\{(-b,(b,1)):b\in B\}$. The homomorphism $(a,l)\mapsto(a,1)l$ onto $A\rtimes G$ has exactly that kernel: its value is the identity only if $l=(-a,1)\in B$. It is onto since L maps onto G. Thus the inflated extension is split, and its class is zero. [F1, F2, given, algebra]

1.2 Conversely let $0\to B\xrightarrow{i_0}E_0\to Q\to1$ have zero inflated class. Form $P=E_0\times_QG$ and $E=(A\rtimes P)/S$, $S=\{(-b,(i_0(b),1)):b\in B\}$. By F2 this is the inflated extension. The map $j:P\to E$, $p\mapsto[(0,p)]$, is injective, since membership of (0,p) in S forces b=0 and p=1. Its intersection with A is precisely B. In P the subgroup $U=\{(1,n):n\in N\}$ is normal, has trivial intersection with B and projects isomorphically onto N. Put $D=j(U)$. [F2, given, algebra]

2.1 The normalizer of D in E is exactly j(P). One inclusion follows because U is normal in P. Every e in E is a product a j(p); if e normalizes D then a does. Conjugation by a sends the unique D-element over n to itself exactly when $na=a$ for every n, because its commutator is the kernel element $a-na$. Hence such a belongs to B, already in j(P), proving the other inclusion. Therefore $N_E(D)/D=j(P)/j(U)\cong E_0$ via the first projection of P. This isomorphism fixes the identified B and Q. [step 1.2, algebra]

3.1 Since the inflated class is zero, E is equivalent to the split extension $A\rtimes G$ by the classification implicit in F2. Carry D through this equivalence. It is the graph of a crossed map d on N, and its normalizer projects onto G, so the normalizer equation of F1 shows [d] is Q-invariant. Step 2.1 identifies its normalizer quotient, with both kernel and quotient fixed, with the original E0. Hence $\operatorname{Tra}[d]=[E_0]$. Together with step 1.1 this proves both inclusions. In particular no injectivity of $H^2(G,B)\to H^2(G,A)$ was used. [F1, F2, step 1.1, step 2.1, algebra] ∎
