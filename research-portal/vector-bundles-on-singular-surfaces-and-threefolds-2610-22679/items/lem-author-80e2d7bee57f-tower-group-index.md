---
id: lem-author-80e2d7bee57f-tower-group-index
kind: lemma
title: Reading spectrum homotopy from an Omega tower
status: published
domain: mathematics
deps:
  - lem-author-e0b0bf18ed2b-omega-tower-shift
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-e0b0bf18ed2b-omega-tower-shift: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 2
---

## Statement
Work in ZFC with the size, pointed-space and spectrum conventions of the Omega-tower comparison. Let $Y=(Y_n,\alpha_n:Y_n\simeq\Omega Y_{n+1})_{n\geq0}$ be a coherent Omega tower of pointed spaces and let $E$ be its associated spectrum. Write $\mathbb S=\Sigma^\infty S^0$ for the sphere spectrum and $\pi_i(E)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[i],E)$ with its stable abelian group law. For pointed spaces use $\pi_d(Z)=\pi_0\operatorname{Map}_{S_*}(S^d,Z)$, computed in a pointed Kan representative, with $S^{d+1}=\Sigma S^d\simeq S^1\wedge S^d$ in that order.

For an integer $i$, choose $N\geq0$ with $N+i\geq2$. For $n\geq N$, put $A_n=\pi_{n+i}(Y_n)$. With $d=n+i$, let $\lambda_d:\pi_{d+1}(Y_{n+1})\xrightarrow{\sim}\pi_d(\Omega Y_{n+1})$ be the suspension–loop identification and set $b_n=\lambda_d^{-1}\circ(\alpha_n)_*:A_n\to A_{n+1}$. Define the stable group of the tower in degree $i$ by $G_i(Y)=\operatorname{colim}_{n\geq N}(A_n,b_n)$, a sequential colimit of abelian groups.

For every $n\geq N$, the natural comparison gives compatible isomorphisms $\pi_i(E)\cong A_n\cong G_i(Y)$. These identifications are natural in coherent maps of towers and independent of increasing the cutoff $N$, under the canonical tail-colimit identifications.

## Statement references

[[lem-author-e0b0bf18ed2b-omega-tower-shift]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions
**Given:** $Y$, $E$, $i$ and $N$ as stated. Use the same size and foundational conventions as the Omega-tower comparison, including AC.

**Goal:** Identify the specified stable group with the spectrum homotopy group and each stage group on the indicated tail.

[F1] [[lem-author-e0b0bf18ed2b-omega-tower-shift]] supplies the coherent-tower realization, sphere and homotopy-group conventions, the ordered suspension–loop group isomorphism, and the cutoff-independent colimit $G_i(Y)$ with exactly the bonding maps $b_n$ above. It gives natural comparison isomorphisms $c_n:\pi_i(E)\xrightarrow{\sim}A_n$ satisfying $b_nc_n=c_{n+1}$, and identifies the canonical stage-to-colimit maps as isomorphisms for $n+i\geq2$.

[A1] Assume [[math:def-axiom-of-choice]] as part of ZFC. Its use is inherited through [F1] from the classical foundations of the stable enhancement; the two-step application below makes no additional selection of representatives or strict models.

## Proof
1.1 Fix any $n\geq N$. Since $n+i\geq2$, apply [F1] with $k=i$ to obtain the group isomorphism $c_n:\pi_i(E)\xrightarrow{\sim}\pi_{n+i}(Y_n)=A_n$. Its compatibility with advancement is $b_nc_n=c_{n+1}$, with $b_n$ exactly as defined in the Statement. The foundational assumption for this application is [A1]. [F1, A1, given]

2.1 The group system $(A_n,b_n)$ and its colimit are exactly those of [F1], so the canonical map $\iota_n:A_n\to G_i(Y)$ is an isomorphism. Compose it with $c_n$ from step 1.1. The equality $\iota_{n+1}b_n=\iota_n$, together with $b_nc_n=c_{n+1}$, makes the composite independent of advancement. Naturality and the canonical identifications for increased cutoffs are those supplied by [F1]. This proves all the claimed comparisons. [F1, step 1.1] ∎
