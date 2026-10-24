---
id: ex-sl3-harish-chandra-center-generators
kind: example
title: "Degree-two and degree-three Harish-Chandra generators for $\\mathfrak{sl}_3$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-axiom-of-choice, def-root-reflections-and-the-weyl-group-action, cor-the-center-is-a-polynomial-algebra-of-rank-many-generators, thm-harish-chandra-isomorphism-for-the-center]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (ex-sl3-harish-chandra-center-generators). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For $\mathfrak{sl}_3$, the Weyl group is $S_3$ permuting $t_1,t_2,t_3$. On the Cartan subalgebra, the invariant polynomials

$$s_2=t_1^2+t_2^2+t_3^2, \qquad s_3=t_1^3+t_2^3+t_3^3$$

generate $S(\mathfrak h)^W$, so their inverse Harish-Chandra images give independent degree-two and degree-three generators of $Z(U(\mathfrak{sl}_3))$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Cartan subalgebra of diagonal traceless matrices $\operatorname{diag}(t_1,t_2,t_3)$ in $\mathfrak{sl}_3$, with $t_1+t_2+t_3=0$.

## Verification

**Proof technique:** direct.

1.1 For diagonal $h=\operatorname{diag}(t_1,t_2,t_3)$, the root vectors satisfy $[h,E_{ij}]=(t_i-t_j)E_{ij}$. The corresponding root reflections from [[def-root-reflections-and-the-weyl-group-action]] interchange $t_i$ and $t_j$, so $W=S_3$ on the trace-zero Cartan. The symmetric polynomials in $t_1,t_2,t_3$ are generated freely by the elementary symmetric functions $e_1,e_2,e_3$. The trace-zero relation sets $e_1=0$. Every invariant class modulo this relation has an invariant representative, obtained by averaging any representative over the finite group $S_3$. If an invariant polynomial is a multiple of $e_1$ in the full polynomial ring, averaging its quotient makes it a multiple of $e_1$ already in the invariant ring. Thus the quotient invariant ring is exactly $\mathbb C[e_2,e_3]$. Newton's identities give $s_2=-2e_2$ and $s_3=3e_3$ there. Hence $s_2,s_3$ are algebraically independent generators. [given, algebra]

2.1 Under Choice, [[cor-the-center-is-a-polynomial-algebra-of-rank-many-generators]] says the center of $U(\mathfrak{sl}_3)$ is polynomial on two generators of definite PBW degrees. The filtered isomorphism [[thm-harish-chandra-isomorphism-for-the-center]] and step 1.1 show that the preimages of $s_2$ and $s_3$ are algebraically independent generators of respective PBW degrees two and three. [step 1.1, given] ∎
