---
id: lem-rephasing-changes-the-factor-set-by-a-coboundary
kind: lemma
title: "Rephasing changes factor sets by coboundaries"
status: published
origin: pipeline
deps: ["def-projective-representation-and-factor-set", "lem-factor-set-is-a-normalized-two-cocycle", "def-normalized-two-cocycle-and-two-coboundary", "def-second-cohomology-by-factor-sets"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Remark 1.5(a), printed p. 3"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Clara Loh, Group Cohomology, SS 2019 — coboundaries and H^2"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
proof_strategy: direct
---

## Statement

For $c:Q\to\mathbb C^\times$ with $c(1)=1$, $P_c(q)=c(q)P(q)$ has factor set
$\alpha_c(q,r)=c(q)c(r)c(qr)^{-1}\alpha(q,r)$. Hence rephasing preserves the
cohomology class.

## Facts & Assumptions

**Given:** A finite group $Q$, a normalized projective representation $P:Q\to\operatorname{GL}(V)$ with factor set $\alpha$, and a function $c:Q\to\mathbb C^\times$ with $c(1)=1$.

[F1] $P(1)=\operatorname{id}_V$ and $P(q)P(r)=\alpha(q,r)P(qr)$ for all $q,r\in Q$, with $\alpha(q,r)\in\mathbb C^\times$. ([[def-projective-representation-and-factor-set]]).

[F2] $\alpha(1,q)=\alpha(q,1)=1$ for all $q\in Q$. ([[lem-factor-set-is-a-normalized-two-cocycle]]).

[F3] For an abelian group $M$ with $G$-action written additively, the two-coboundary of a normalized one-cochain $u$ is $(\delta u)(g,h)=g\cdot u(h)-u(gh)+u(g)$. ([[def-normalized-two-cocycle-and-two-coboundary]]).

[F4] The factor-set model of the second cohomology group is $H^2(G,M)=Z^2(G,M)/B^2(G,M)$, and replacing a normalized two-cocycle $f$ by $f+\delta u$ does not change its class. ([[def-second-cohomology-by-factor-sets]]).

[A1] Scalar multiples of a linear map compose by multiplying scalars, and scalars commute with composition in $\operatorname{GL}(V)$.

## Proof

**Proof technique:** direct.

1.1 $P_c(1)=c(1)P(1)=\operatorname{id}_V$, so $P_c$ is normalized. [F1, given, algebra]

1.2 Using [F1] and [A1], $P_c(q)P_c(r)=c(q)c(r)P(q)P(r)=c(q)c(r)\alpha(q,r)P(qr)=c(q)c(r)c(qr)^{-1}\alpha(q,r)P_c(qr)$. [F1, A1, algebra]

2.1 Step 1.2 exhibits $\alpha_c(q,r)=c(q)c(r)c(qr)^{-1}\alpha(q,r)$ as the factor set of $P_c$; it takes values in $\mathbb C^\times$, and it is normalized because $\alpha_c(1,q)=c(1)c(q)c(q)^{-1}\alpha(1,q)=1$ and $\alpha_c(q,1)=c(q)c(1)c(q)^{-1}\alpha(q,1)=1$ by [F2]. [F2, step 1.2, algebra]

3.1 Read in multiplicative notation for the trivial action, the published coboundary of [F3] is $\delta c(g,h)=c(g)c(h)c(gh)^{-1}$; step 2.1 therefore says $\alpha_c=(\delta c)\cdot\alpha$, the factor set of $P$ multiplied pointwise by the coboundary of $c$. [F3, step 2.1]

4.1 By [F4], multiplying a normalized two-cocycle by a coboundary does not change its class in $H^2(Q,\mathbb C^\times)$, so $[\alpha_c]=[\alpha]$: rephasing preserves the cohomology class. Conversely, if $\alpha'=(\delta c)\cdot\alpha$ for a normalized $c$, then steps 1.2 and 2.1 show that $\alpha'$ is exactly the factor set of the rephased family $P_c$; so every factor set cohomologous to $\alpha$ is realized by a normalized rephasing of $P$. [F4, step 2.1, step 3.1] ∎
