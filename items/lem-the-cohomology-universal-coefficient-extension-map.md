---
id: lem-the-cohomology-universal-coefficient-extension-map
title: "The cohomological universal-coefficient extension map"
kind: lemma
status: published
origin: pipeline
deps: ["def-axiom-of-choice", "lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free", "thm-free-modules-are-projective-with-choice-boundary", "def-balanced-ext-bifunctor", "cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (lem-the-cohomology-universal-coefficient-extension-map). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice and the supplied balanced-Ext resolution hypotheses of [[def-balanced-ext-bifunctor]]. For a free $R$-complex over a PID, the cycle-boundary sequences induce a natural map $\operatorname{Ext}^1_R(H_{n-1}C,G)\to H^n\operatorname{Hom}_R(C,G)$.

## Proof

**Given:** AC, the supplied balanced-Ext data, a free PID-complex $C$, an $R$-module $G$, and the cycle-boundary sequence $0\to B_{n-1}C\to Z_{n-1}C\to H_{n-1}C\to0$.

1.1 AC makes $B_{n-1}C$ and $Z_{n-1}C$ free by [[lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free]], hence projective by [[thm-free-modules-are-projective-with-choice-boundary]]. The displayed short exact sequence is therefore a length-one projective resolution of $H_{n-1}C$. By [[cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]], using AC to meet its DC premise and the supplied balanced-Ext data, its degree-one cohomology identifies $\operatorname{Ext}^1_R(H_{n-1}C,G)$ with $\operatorname{Hom}_R(B_{n-1}C,G)$ modulo restrictions of maps $Z_{n-1}C\to G$. [given]

2.1 For $\psi:B_{n-1}C\to G$, define the degree-$n$ cochain $\psi d_n:C_n\to G$. It is a cocycle because $d_nd_{n+1}=0$. If $\psi$ changes by $g|_{B_{n-1}C}$ for $g:Z_{n-1}C\to G$, projectivity of $B_{n-2}C$ splits $C_{n-1}\twoheadrightarrow B_{n-2}C$, giving a projection $\pi_{n-1}:C_{n-1}\to Z_{n-1}C$. Then $(g|_B)d_n=(g\pi_{n-1})d_n$ is a coboundary, since $\pi_{n-1}d_n=d_n$. Thus $[\psi]\mapsto[\psi d_n]$ descends from the quotient in step 1.1 to the claimed cohomology group. [step 1.1, construct]

3.1 For a chain map $u:C\to D$, the pullback of $\psi d_n^D$ equals $(\psi\,u_{n-1}|_{B_{n-1}C})d_n^C$ because $u$ commutes with differentials. This is the map induced on the two projective presentations. Postcomposition with a coefficient map $G\to G'$ also commutes exactly with the construction. Hence the resulting map is natural in the complex and in $G$; the projection used in step 2.1 establishes descent but is absent from the map itself. [step 1.1, step 2.1, algebra] ∎
