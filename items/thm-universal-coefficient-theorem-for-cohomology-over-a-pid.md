---
id: thm-universal-coefficient-theorem-for-cohomology-over-a-pid
title: "The universal coefficient theorem for cohomology over a PID"
kind: theorem
status: published
origin: pipeline
deps: ["def-evaluation-map-from-cohomology-to-hom-of-homology", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free", "thm-free-modules-are-projective-with-choice-boundary", "def-ext-via-a-projective-resolution-of-the-first-variable", "def-axiom-of-choice"]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (thm-universal-coefficient-theorem-for-cohomology-over-a-pid). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. Let $R$ be a PID, $C$ a chain complex of free
$R$-modules, and $G$ an $R$-module. Then naturally
$$0\to\operatorname{Ext}^1_R(H_{n-1}C,G)\to H^n\operatorname{Hom}_R(C,G)\xrightarrow{\operatorname{ev}_n}\operatorname{Hom}_R(H_nC,G)\to0$$
is exact.

## Proof

**Given:** The Axiom of Choice, the free PID-complex $C$, an $R$-module $G$, the evaluation map, and the cycle-boundary sequences. Choice is used to make arbitrary-rank cycle and boundary modules free and then to split the surjections with free targets ([[def-axiom-of-choice]], [[lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free]], [[thm-free-modules-are-projective-with-choice-boundary]]).

1.1 Under the stated Choice hypothesis, $B_{n-1}C$ is free and projective. Choose a section $s_n:B_{n-1}C\to C_n$ of the corestricted differential and put $\pi_n=1-s_nd_n:C_n\to Z_nC$. For any $h:H_nC\to G$, the cochain $h\circ q_n\circ\pi_n$ restricts on $Z_nC$ to $h\circ q_n$, vanishes on $B_nC$, and hence is a cocycle. Its evaluation is $h$, proving surjectivity. [given, choose, algebra]

1.2 If a cocycle $f:C_n\to G$ has zero evaluation, then $f|_{Z_nC}=0$: its restriction factors through $H_nC$, and that induced map is zero. Since $d_n:C_n\twoheadrightarrow B_{n-1}C$ has kernel $Z_nC$, there is a unique $\psi:B_{n-1}C\to G$ with $f=\psi d_n$. Conversely every such $\psi d_n$ is a cocycle because $d_nd_{n+1}=0$. [given, algebra]

2.1 The cochain $\psi d_n$ is a coboundary exactly when $\psi$ extends to $Z_{n-1}C$. Indeed, if $\psi d_n=\varphi d_n$ for a cochain $\varphi:C_{n-1}\to G$, surjectivity of $d_n$ onto $B_{n-1}C$ gives $\psi=\varphi|_{B_{n-1}C}$. Conversely, if $g:Z_{n-1}C\to G$ extends $\psi$, Choice and projectivity of $B_{n-2}C$ give a projection $\pi_{n-1}:C_{n-1}\to Z_{n-1}C$; then $\psi d_n=(g\pi_{n-1})d_n$ is a coboundary. Thus $\ker\operatorname{ev}_n$ is $\operatorname{Hom}_R(B_{n-1}C,G)/\operatorname{im}(\operatorname{Hom}_R(Z_{n-1}C,G))$. [step 1.2, given, choose, algebra]

3.1 The free presentation $0\to B_{n-1}C\to Z_{n-1}C\to H_{n-1}C\to0$ identifies this quotient with $\operatorname{Ext}^1_R(H_{n-1}C,G)$ by [[def-ext-via-a-projective-resolution-of-the-first-variable]]. Define the extension map on a representative $\psi$ by $[\psi]\mapsto[\psi d_n]$; step 2.1 proves it is well defined and injective, while step 1.2 identifies its image with the evaluation kernel. [step 1.2, step 2.1, algebra]

4.1 Naturality requires no chosen projection: for a chain map $u:C\to D$, pullback of $\psi d_n^D$ is $(\psi\,u_{n-1}|_{B_{n-1}C})d_n^C$, exactly the map induced on the free presentations; a map $G\to G'$ commutes by postcomposition. Evaluation also commutes with these maps. The chosen projections in steps 1.1 and 2.1 establish existence and exactness only. Thus the displayed sequence is natural. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
