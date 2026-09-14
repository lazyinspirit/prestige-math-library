---
id: thm-gitik-symmetric-submodel-satisfies-zf
kind: theorem
title: Gitik's symmetric submodel satisfies ZF
status: draft
origin: pipeline
deps:
  - thm-gitik-intermediate-model-zf-minus-power-set
  - def-gitik-finite-support-symmetric-submodel
  - lem-gitik-support-approximation-and-bounded-stage
  - lem-gitik-strong-compact-support-homogenization
  - thm-hereditarily-symmetric-interpretations-form-a-zf-model
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Schürz, Gitik's model, Theorem 12, Lemmas 13–17 and the final theorem, pages 11–20"
      url: https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf
---

## Statement

The finite-support symmetric class $N_G$ is a transitive model of every axiom
of ZF. In particular it satisfies full Separation, Replacement and Power Set.
No choice function used in the ground or intermediate construction is thereby
made an element of $N_G$, and Choice is not part of the conclusion.

## Facts & Assumptions

**Given:** The Gitik class extension and finite-support symmetric system of the preceding items.

[F1] [[thm-gitik-intermediate-model-zf-minus-power-set]]: $M[G]$ is transitive, has Separation and Collection/Replacement, and has a definable global well-order; Power Set in $M[G]$ is not assumed.

[F2] [[def-gitik-finite-support-symmetric-submodel]]: $N_G$ is the union of its complete set-stage symmetric interpretations $N_{G_\theta}$.

[F3] [[lem-gitik-support-approximation-and-bounded-stage]]: Every member of $N_G$ belongs to some regular set stage.

[F4] [[lem-gitik-strong-compact-support-homogenization]]: For each $x\in N_G$, $M[G]$ has a set $S_x=\{y\in N_G:y\subseteq x\}$.

[F5] [[thm-hereditarily-symmetric-interpretations-form-a-zf-model]]: Each set-forcing symmetric interpretation is a transitive ZF model containing its ground model and contained in the full generic extension; no Choice hypothesis is required.

[F6] [[def-axiom-of-choice]]: Ground AC supports the ground forcing and filter choices already encoded by the preceding suppliers. Ambient stage and witness selections below use F1's definable global well-order, not a propagation of AC to $M[G]$ or $N_G$.

## Proof

1.1 By F2, every finite tuple of members of $N_G$ lies in one $N_{G_\theta}$. The restricted forcing and symmetry data form a set-sized symmetric system, so F5 makes each such stage a transitive ZF model. The inclusions between stages preserve membership, and F2 therefore makes their union transitive. Check names put every ground set, in particular $\varnothing$ and $\omega$, in every sufficiently large stage. Extensionality and Foundation are absolute to the transitive union, while Pairing, Union and Infinity may be computed in one common stage and have the same values in the union. [F2, F3, F5]

1.2 Fix $x\in N_G$ and let $S_x$ be the set supplied by F4 inside $M[G]$. For each $y\in S_x$, F3 gives a regular $\theta$ with $y\in N_{G_\theta}$; use F1's definable global well-order to take the least such $\theta$. Collection in $M[G]$ bounds these stages by one regular $\Theta$, enlarged if necessary so that $x\in N_{G_\Theta}$. Thus $S_x\subseteq N_{G_\Theta}$. Conversely every $y\in N_{G_\Theta}$ with $y\subseteq x$ belongs to $N_G$, so transitivity gives $$S_x=\mathcal P^{N_{G_\Theta}}(x).$$ The right side is a member of $N_{G_\Theta}$ by F5 and hence of $N_G$. This proves Power Set in $N_G$. If $x=\varnothing$, both sides are the singleton $\{\varnothing\}$, so the argument includes the empty endpoint. [F1, F2, F3, F4, F5]

2.1 In the ambient $M[G]$, recursively form $R^N_\alpha=\{u\in N_G:\operatorname{rank}(u)<\alpha\}$. The recursion is set-valued without ambient Power Set. At a successor, $R^N_{\alpha+1}=\mathcal P^{N_G}(R^N_\alpha)$ is the set given by step 1.2. At a limit $\lambda$, Replacement and Union in F1 form $\bigcup_{\alpha<\lambda}R^N_\alpha$. To see that this limit set belongs to $N_G$, apply F3 and Collection to its members, bounding them in one stage $N_{G_\Theta}$. That stage is transitive and has exactly the same members of rank below $\lambda$, so $R^N_\lambda=R^{N_{G_\Theta}}_\lambda\in N_{G_\Theta}$. The zero case is empty and successor stages are already in $N_G$ by step 1.2. Thus every $R^N_\alpha$ is a set of $M[G]$ and a member of $N_G$. [F1, F2, F3, F5, step 1.2]

3.1 The class $N_G$ is almost universal relative to $M[G]$. Indeed, if $a\in M[G]$ and $a\subseteq N_G$, Replacement in F1 collects the ranks of members of $a$. For an ordinal $\alpha$ strictly above their supremum, $a\subseteq R^N_\alpha$, and step 2.1 gives $R^N_\alpha\in N_G$. This argument bounds the whole ambient set at once; it does not choose names or supports for its members. [F1, step 2.1]

4.1 Bounded Separation holds in $N_G$. Given $a,\vec z\in N_G$ and a bounded formula, choose one stage containing the finite tuple. Bounded truth is absolute between the transitive models $N_{G_\theta}$ and $N_G$, so Separation in that stage gives the required subset of $a$. The same argument constructs unordered pairs and the boundedly definable parts of each of Jech's eight Gödel operations. More generally, an operation output formed in $M[G]$ from $N_G$-parameters is an ambient set of elements of $N_G$; step 3.1 places it inside an $N_G$-set, and bounded Separation cuts out its exact value. Hence $N_G$ is closed under unordered pair, difference, product, domain, membership restricted to a square and the three permutations of triple coordinates. [F1, F2, F5, step 1.1, step 3.1]

5.1 Continue by induction on formula complexity, using only the transitivity, almost universality and bounded cuts already verified. Atomic and Boolean cuts use step 4.1. At an existential step, for every tuple in the current argument set, first take the least rank of an $N_G$-witness when one exists and then use F1's ambient definable global well-order on that set-sized rank segment to select a least witness. Replacement in F1 collects these witnesses, step 3.1 places them in an $N_G$-container, and projection of the lower-complexity relation gives the existential cut. This proves every Separation instance. For a functional formula on $a\in N_G$, the same ambient Replacement collects its unique $N_G$-values, almost universality gives an $N_G$-container, and the just-proved Separation instance cuts out exactly the range, proving Replacement. Together with steps 1.1 and 1.2 this is all of ZF. F6 records only the upstream ground choices; the proof never invokes AC in $M[G]$ or constructs a choice function in $N_G$. [F1, F6, step 1.1, step 1.2, step 3.1, step 4.1] ∎
