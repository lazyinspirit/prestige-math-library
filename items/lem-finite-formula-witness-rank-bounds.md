---
id: lem-finite-formula-witness-rank-bounds
kind: lemma
title: "Least witness ranks give choice-free bounds"
status: draft
origin: pipeline
deps: [lem-finite-formula-witness-criterion, prop-minimum-rank-selection-and-collection, thm-membership-rank-and-hierarchy-levels]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — Theorem 4.3 proof pp10–11"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Statement

For a fixed finite family of formulas and each ordinal $\alpha$, there is a definable ordinal $b(\alpha)>\alpha$ such that every true existential instance with parameters in $V_\alpha$ has a witness of rank below $b(\alpha)$. More generally, for a definable increasing exhaustive hierarchy of sets $W_\gamma$ with union $W$, the witnesses in $W$ can be bounded by a single stage $W_{b(\alpha)}$ for parameters in $W_\alpha$.

## Facts & Assumptions

[F1] [[prop-minimum-rank-selection-and-collection]]: In ZF every nonempty definable class $C$ has a least member-rank $\alpha$, and $\{x\in C:\operatorname{rank}(x)=\alpha\}$ is a nonempty set. Replacement yields the Collection schema: if $\forall x\in a\ \exists y\ \phi(x,y)$, a set $b$ exists with $\forall x\in a\ \exists y\in b\ \phi(x,y)$. Conversely, Separation and Collection yield Replacement for functional formulas.

[F2] [[thm-membership-rank-and-hierarchy-levels]]: In ZF, for every set $x$ and ordinal $\alpha$,

$$x\in V_\alpha\iff\operatorname{rank}(x)<\alpha,\qquad x\subseteq V_\alpha\iff\operatorname{rank}(x)\le\alpha.$$

Thus $\operatorname{rank}(x)$ is the least $\alpha$ with $x\subseteq V_\alpha$, and $\operatorname{rank}(x)=\alpha$ iff $x\in V_{\alpha+1}\setminus V_\alpha$.

## Proof

**Given:** A fixed finite list of existential formulas in ambient ZF and a specified ordinal $\alpha$.

1.1 For each existential matrix $\psi_i(y,\bar x)$ define $r_i(\bar x)=0$ when no witness exists, and otherwise let it be the least rank of a witness. F1 supplies that least ordinal and a witness at that rank. Because the list of formulas is fixed externally, this is a separate definable function for each $i$, with no appeal to truth for arbitrary formulas. [F1, given]

2.1 The union of the finitely many sets of parameter tuples from $V_\alpha$ is a set, including a singleton empty tuple for a sentence. Replacement collects all $r_i(\bar a)$ in a set $R_\alpha$. Put $b(\alpha)=\sup(R_\alpha\cup\{\alpha\})+1$. Then $b(\alpha)>\alpha$ and every required least-rank witness has rank below $b(\alpha)$; by F2 it lies in $V_{b(\alpha)}$. No particular witness has been selected as a function of the tuple. [F2, step 1.1]

3.1 For $W$, replace least witness rank by the least stage containing a witness in $W$ whose matrix holds relativized to $W$. Exhaustion gives such a stage; it has a least value by the well-order of ordinals. Replacement over tuples in $W_\alpha$ and the same successor-supremum formula give $b(\alpha)$. By monotonicity, for every true instance at least one witness lies in $W_{b(\alpha)}$; witnesses of larger rank need not lie there. With no existential formulas or no true instances, the same formula still gives a bound above $\alpha$. [step 1.1, step 2.1, given] ∎
