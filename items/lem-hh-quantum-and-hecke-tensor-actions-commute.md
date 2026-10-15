---
verification:
  repair: research/hopf-hecke-unfinished-15-2026-10-15-owner/published-repairs/lem-hh-quantum-and-hecke-tensor-actions-commute.json
id: lem-hh-quantum-and-hecke-tensor-actions-commute
kind: lemma
title: "The quantum and Hecke tensor actions commute"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 2
deps: [def-hh-hecke-symmetry-and-ordered-basis-operator, lem-hh-type-a-tensor-operator-is-a-hecke-symmetry, def-hh-type-a-quantum-tensor-action-for-centralizers, lem-hh-quantum-presentation-and-tensor-action-descent]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard Dipper, Stephen Doty and Friederike Stoll, Quantized mixed tensor space and Schur–Weyl duality"
      url: "https://arxiv.org/pdf/0810.1227"
      locator: "§§1–2, pp. 3–8: quantum-group tensor action and normalized Hecke generator; the local commutation cases are supplied below"
---

## Statement

For every $N\ge1$ and $n\ge2$, each adjacent Hecke operator $T_a$ on $V_N^{\otimes n}$ commutes with the iterated-coproduct action of every $L_j^{\pm1},E_i,F_i$ from [[def-hh-type-a-quantum-tensor-action-for-centralizers]]. Thus the image $B_F$ of the normalized Hecke algebra is contained in the commutant of the quantum image $A_F$.

## Facts & Assumptions

**Given:** $F=\mathbb Q(q)$, the ordered-basis operator $T$, the quantum generator matrices, and the coproduct of [[def-hh-type-a-quantum-tensor-action-for-centralizers]].

[F1] On a pair of labels, $T$ fixes a repeated label with coefficient $q$, flips an increasing pair, and sends a decreasing pair $(a,b)$ to $(b,a)+c(a,b)$, where $c=q-q^{-1}$ ([[def-hh-hecke-symmetry-and-ordered-basis-operator]]).

[F2] Put $\kappa(a)=\delta_{i,a}-\delta_{i+1,a}$. On two tensor positions the coproduct operators are $\mathcal E_i=E_i\otimes K_i+1\otimes E_i$ and $\mathcal F_i=F_i\otimes1+K_i^{-1}\otimes F_i$; their actions are $\mathcal E_i(a,b)=\delta_{a,i+1}q^{\kappa(b)}(i,b)+\delta_{b,i+1}(a,i)$ and $\mathcal F_i(a,b)=\delta_{a,i}(i+1,b)+q^{-\kappa(a)}\delta_{b,i}(a,i+1)$ ([[def-hh-type-a-quantum-tensor-action-for-centralizers]], [[lem-hh-quantum-presentation-and-tensor-action-descent]]).

[F3] The pair operator preserves the multiset of labels, and $K_i$ is the diagonal combination $L_iL_{i+1}^{-1}$ ([[def-hh-hecke-symmetry-and-ordered-basis-operator]], [[def-hh-type-a-quantum-tensor-action-for-centralizers]]).

## Proof

**Given:** The data in [F1]–[F3].

1.1 For each $j$, $L_j\otimes L_j$ acts on $(a,b)$ by the scalar $q^{\delta_{j,a}+\delta_{j,b}}$. Every term in $T(a,b)$ has the same multiset of labels as $(a,b)$, so it has the same scalar. Hence $T(L_j\otimes L_j)=(L_j\otimes L_j)T$; the inverse $L_j^{-1}\otimes L_j^{-1}$ commutes as well. [given, F1, F3, algebra]

1.2 Fix $i$ and write $(a,b)$ for $e_a\otimes e_b$. If the pair contains no $i+1$, both $T\mathcal E_i$ and $\mathcal E_iT$ vanish by [F2]–[F3]. For the remaining labels, the complete cases are: on $(i+1,i+1)$ both composites give $(i,i+1)+q(i+1,i)$; on $(i+1,i)$ both give $q^2(i,i)$; on $(i,i+1)$ both give $q(i,i)$; for $r<i$, the inputs $(i+1,r)$ and $(r,i+1)$ give respectively $(r,i)+c(i,r)$ and $(i,r)$ under either composite; for $r>i+1$, those same two orientations give respectively $(r,i)$ and $(i,r)+c(r,i)$. These cases exhaust every pair containing $i+1$, including both orientations of each outside label, so $T\mathcal E_i=\mathcal E_iT$. The only coefficient simplification used in the repeated-label case is $q^{-1}+c=q$. [given, F1, F2, algebra]

1.3 If a pair contains no $i$, both composites with $\mathcal F_i$ vanish. The remaining complete cases are: on $(i,i)$ both give $(i,i+1)+q(i+1,i)$; on $(i,i+1)$ both give $q(i+1,i+1)$; on $(i+1,i)$ both give $q^2(i+1,i+1)$; for $r<i$, the inputs $(i,r)$ and $(r,i)$ give respectively $(r,i+1)+c(i+1,r)$ and $(i+1,r)$ under either composite; for $r>i+1$, they give respectively $(r,i+1)$ and $(i+1,r)+c(r,i+1)$. Thus every pair containing $i$ is covered and $T\mathcal F_i=\mathcal F_iT$. The repeated-label coefficients use $q^{-1}+c=q$ and $1+cq=q^2$. [given, F1, F2, algebra]

2.1 Coassociativity and the coproduct formulas in [F2] give on $n$ positions $\Delta_n(E_i)=\sum_{r=1}^n1^{\otimes(r-1)}\otimes E_i\otimes K_i^{\otimes(n-r)}$, $\Delta_n(F_i)=\sum_{r=1}^n(K_i^{-1})^{\otimes(r-1)}\otimes F_i\otimes1^{\otimes(n-r)}$, and $\Delta_n(L_j)=L_j^{\otimes n}$. For positions $a,a+1$, the two $E_i$ summands at those positions have the common outside factors $1^{\otimes(a-1)}$ on the left and $K_i^{\otimes(n-a-1)}$ on the right, with two-site sum $E_i\otimes K_i+1\otimes E_i$; the two $F_i$ summands have the common outside factors $(K_i^{-1})^{\otimes(a-1)}$ on the left and $1^{\otimes(n-a-1)}$ on the right, with two-site sum $F_i\otimes1+K_i^{-1}\otimes F_i$. For an $E_i$ summand indexed by $r<a$, the checked positions carry $K_i\otimes K_i$, while for $r>a+1$ they carry the identity. For an $F_i$ summand indexed by $r<a$, the checked positions carry the identity, while for $r>a+1$ they carry $K_i^{-1}\otimes K_i^{-1}$. Step 1.1 handles these Cartan factors and steps 1.2–1.3 handle the two-site sums; therefore $T_a$ commutes with each iterated quantum generator. Commuting with the generators implies commuting with their products and linear combinations, which proves $B_F\subseteq\operatorname{End}_{A_F}(V_N^{\otimes n})$. [step 1.1, step 1.2, step 1.3, F2, F3, algebra] ∎
