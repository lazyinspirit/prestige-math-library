---
id: lem-the-down-shift-preserves-the-number-of-sets
kind: lemma
title: "$\\lvert S_j(\\mathcal{F})\\rvert=\\lvert\\mathcal{F}\\rvert$, and $w(S_j(\\mathcal{F}))\\le w(\\mathcal{F})$ with equality only when $S_j(\\mathcal{F})=\\mathcal{F}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-down-shift-of-a-set-family, def-finite-cardinality, def-injection-surjection-bijection, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.5"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal{F}\subseteq\mathcal{P}([n])$ and let $j<n$. Then

1. the map $F\mapsto s_j(F,\mathcal{F})$ is injective on $\mathcal{F}$, and
   therefore $\lvert S_j(\mathcal{F})\rvert=\lvert\mathcal{F}\rvert$;
2. $w(S_j(\mathcal{F}))\le w(\mathcal{F})$;
3. equality holds in part 2 exactly when $S_j(\mathcal{F})=\mathcal{F}$.

## Facts & Assumptions

**Given:** a family $\mathcal{F}\subseteq\mathcal{P}([n])$ and an index $j<n$.

[F1] By definition, $s_j(F,\mathcal{F})=F\setminus\{j\}$ only when $j\in F$ and $F\setminus\{j\}\notin\mathcal{F}$; otherwise $s_j(F,\mathcal{F})=F$ ([[def-down-shift-of-a-set-family]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $s_j(F,\mathcal{F})=s_j(G,\mathcal{F})$ with $F\ne G$. Then at least one of $F$ or $G$ is shifted. If both were shifted, then $F\setminus\{j\}=G\setminus\{j\}$ and adding $j$ back gives $F=G$, impossible. So exactly one is shifted, say $F$, and then $s_j(F,\mathcal{F})=F\setminus\{j\}=G$ because $G$ is not shifted. But [F1] says precisely that $F\setminus\{j\}\notin\mathcal{F}$ when $F$ is shifted, a contradiction. Therefore $F\mapsto s_j(F,\mathcal{F})$ is injective. [F1, assume-contra]

2.1 Since the map is injective, it is a bijection from the finite set $\mathcal{F}$ onto its image $S_j(\mathcal{F})$, so $\lvert S_j(\mathcal{F})\rvert=\lvert\mathcal{F}\rvert$. [step 1.1, discharge-contradiction]

3.1 Every shifted set loses the element $j$ and every unshifted set keeps its size, so $w(S_j(\mathcal{F}))\le w(\mathcal{F})$. Equality holds exactly when no set is shifted, and that is exactly the condition $S_j(\mathcal{F})=\mathcal{F}$. [F1, step 2.1] ∎

## Remarks

- The proof uses only the two clauses of the definition. Nothing about shattering enters yet.
