---
id: def-low-degree-transgression-for-a-group-extension
kind: definition
title: "Low-degree transgression for a group extension"
status: published
origin: pipeline
deps: [lem-degree-one-maps-and-quotient-action-are-well-defined, lem-bar-two-cocycles-classify-abelian-kernel-extensions, lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
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

## Definition

Assume AC. For $1\to N\to G\xrightarrow{\pi}Q\to1$, a left G-module A and $[d]\in H^1(N,A)^Q$, put $D_d=\{(d(n),n):n\in N\}\le A\rtimes G$ and $L_d=N_{A\rtimes G}(D_d)$. Define $\operatorname{Tra}[d]$ to be the class of
$$0\longrightarrow A^N\longrightarrow L_d/D_d\longrightarrow Q\longrightarrow1.$$
It is a well-defined homomorphism to normalized bar $H^2(Q,A^N)$. Explicitly choose normalized $\alpha:Q\to G$ and $\eta:Q\to A$ with $(\alpha(q)\cdot d-d)(n)=n\eta(q)-\eta(q)$; put $f(q,r)=\alpha(q)\alpha(r)\alpha(qr)^{-1}$. Then Tra is represented by
$$F(q,r)=\eta(q)+\alpha(q)\eta(r)-f(q,r)\eta(qr)-d(f(q,r)).$$
This fixes the DHW sign convention. The derived interpretation of bar cohomology retains its comparison convention.

## Facts & Assumptions

**Given:** AC, the extension, A, and a Q-invariant crossed-map class [d].

[F1] The conjugation action on crossed-map classes factors through Q ([[lem-degree-one-maps-and-quotient-action-are-well-defined]]).

[F2] Normalized factor sets classify the extensions with fixed action ([[lem-bar-two-cocycles-classify-abelian-kernel-extensions]]).

[F3] AC chooses elements of arbitrary nonempty indexed families ([[def-axiom-of-choice]]).

## Proof

1.1 The crossed identity makes $D_d$ a subgroup mapping isomorphically onto N. In $A\rtimes G$, conjugating $(d(g^{-1}ng),g^{-1}ng)$ by (a,g) gives $(a+g d(g^{-1}ng)-na,n)$. Thus $(a,g)\in L_d$ exactly when $(g\cdot d-d)(n)=na-a$ for every n. By invariance in F1 there exists such an a for each g, so $L_d\to G$ is onto. Setting g=1 shows $L_d\cap A=A^N$. Its elements over N are precisely $A^N D_d$, since division by the unique D_d element over the same n lies in this intersection. Consequently the quotient extension is exact; its action on $A^N$ is $a\mapsto ga$, the quotient Q-action. [F1, given, algebra]

2.1 Apply AC to the fibers of $G\to Q$, normalizing $\alpha(1)=1$. For each q the set of a solving the normalizer equation for $\alpha(q)$ is nonempty by step 1.1. Apply AC to these Q-indexed sets and normalize $\eta(1)=0$, which is a solution. Then $l_q=(\eta(q),\alpha(q))\in L_d$. For $f=f(q,r)$, direct multiplication gives $l_ql_r=(F(q,r),1)(d(f),f)l_{qr}$ with exactly the F printed in the Definition. All factors except possibly $(F,1)$ are in $L_d$, so it too is, and step 1.1 gives $F\in A^N$. [F3, step 1.1, algebra]

2.2 If $d_b=d+\delta b$ for a fixed b in A, then $D_{d_b}=(-b,1)D_d(-b,1)^{-1}$ by the semidirect multiplication. Conjugation by (-b,1) therefore identifies their normalizers and quotients, fixes every element of $A^N$, and is the identity on Q. Hence the extension class depends only on [d]. [F2, step 1.1, algebra]

3.1 In the quotient $L_d/D_d$, the elements $\bar l_q$ form a normalized section and satisfy $\bar l_q\bar l_r=i(F(q,r))\bar l_{qr}$. Associativity yields $F(q,r)+F(qr,s)=qF(r,s)+F(q,rs)$ by comparing the two triple products. Also F(1,q)=F(q,1)=0. Thus F is a normalized $A^N$-valued cocycle representing the extension by F2. Different alpha or eta give another normalized section of the same extension; their unique difference $b:Q\to A^N$ changes F by $\delta b$, as in F2. [F2, step 2.1, algebra]

4.1 For d and e choose the same alpha and compatible eta_d,eta_e; their sum solves the normalizer equation for d+e. The displayed formula then gives $F_{d+e}=F_d+F_e$ term by term. For d=0 choose eta=0, giving F=0. Independence in steps 2.2 and 3.1 makes these choices irrelevant, proving additivity on cohomology. In particular if N acts trivially on A, invariance is literal equality of crossed maps, so eta=0 is allowed and $F=-d(f)$. If N=1 or Q=1, the normalized formulas give the zero transgression. [step 2.1, step 3.1, step 2.2, algebra] ∎
