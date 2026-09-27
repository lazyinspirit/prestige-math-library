---
id: ex-depth-of-a-union-of-planes
title: Depth of a union of planes
kind: example
status: published
origin: pipeline
deps: [def-dependent-choice, def-depth-with-respect-to-an-ideal]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (ex-depth-of-a-union-of-planes). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Example

Assume Dependent Choice. Let $S=k[x,y,z,w]_{(x,y,z,w)}$, $I=(x,y)$, $J=(z,w)$, and
$A=S/(I\cap J)$. The union of the two coordinate planes has
$\dim A=2$ but $\operatorname{depth}A=1$, so it is not Cohen--Macaulay.

## Facts & Assumptions

**Given:** Dependent Choice ([[def-dependent-choice]]), $I+J$ is the maximal ideal, and $I\cap J=IJ$.

## Verification

**Proof technique:** direct.

1.1 The ring $A$ embeds in $S/I\oplus S/J$ by reduction modulo $I$ and $J$, because $I\cap J=IJ$. Put $\ell=x+z$. Its image is $(z,x)$ in the two polynomial-domain quotients, so multiplication by $\ell$ is injective on their direct sum and hence on $A$. Thus $\operatorname{depth}A\ge1$. [given, algebra]

2.1 More generally the embedding identifies $A$ with the fibre product of the two local polynomial rings $B=S/I$ and $C=S/J$ over their common residue field $k$: its elements are pairs $(f,g)$ with equal constant term. Let $a=(f,g)$ be any regular element of the maximal ideal of $A$. Since $B,C$ are domains, regularity forces $f,g\ne0$, and both have zero constant term. The pair $(f,0)$ belongs to $A$ but is not in $aA$: an equation $a(h,j)=(f,0)$ would force $h=1,j=0$, while $(1,0)\notin A$. For every maximal-ideal element $(u,v)$, however, $(u,v)(f,0)=(fu,0)=a(u,0)$ because $(u,0)\in A$. Thus the nonzero class of $(f,0)$ in $A/aA$ is annihilated by the entire maximal ideal. No regular sequence can extend $a$, so $\operatorname{depth}A\le1$. Step 1.1 gives the reverse bound. Both irreducible components have dimension $2$, so $\dim A=2$. [step 1.1, algebra] ∎
