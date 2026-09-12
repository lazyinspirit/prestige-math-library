---
id: lem-transitive-p-group-permutation-modules-have-point-stabilizer-vertices
kind: lemma
title: Transitive p-group permutation modules have point-stabilizer vertices
deps: [def-relative-projectivity, thm-higman-criterion-for-relative-projectivity, def-vertex-and-source-of-an-indecomposable-module, lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

For any field $k$ of characteristic $p$, finite $p$-group $R$, and subgroup $L\le R$, the permutation module $V=k[R/L]$ is indecomposable and has vertex $L$.

## Facts & Assumptions

**Given:** A field, finite $p$-group and subgroup as stated.

[F1] A module induced from a subgroup is relatively projective for that subgroup. ([[def-relative-projectivity]])

[F2] Relative $T$-projectivity is equivalent to the identity being a relative trace of a $T$-endomorphism. ([[thm-higman-criterion-for-relative-projectivity]])

[F3] A vertex is an inclusion-minimal relative-projectivity $p$-subgroup. ([[def-vertex-and-source-of-an-indecomposable-module]])

[F4] The augmentation ideal $I_R$ is nilpotent over any field of characteristic $p$. ([[lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent]])

## Proof

**Proof technique:** direct.

1.1 Every nonzero finite-dimensional $kR$-module $W$ has a nonzero fixed vector: choose the largest $j\ge0$ with $I_R^jW\ne0$, which exists by [F4]. Every vector in this nonzero space is annihilated by $I_R$ and hence by each $r-1$. On the other hand $V^R$ is one-dimensional, since invariance means constant coefficients on the transitive basis $R/L$. If $V$ split into two nonzero submodules, their nonzero fixed subspaces would be in direct sum inside $V^R$, a contradiction. Thus $V$ is indecomposable. [F4]

1.2 The map $kR\otimes_{kL}k\to V$, $r\otimes1\mapsto rL$, is an isomorphism on coset bases and respects the $R$-action. Therefore $V$ is relatively $L$-projective by [F1]. To prove minimality suppose $T<L$ and $\operatorname{id}_V=\operatorname{Tr}_T^R(\alpha)$ with $\alpha\in\operatorname{End}_{kT}(V)$, as required by [F2] for relative $T$-projectivity. [F1, F2]

2.1 Let $e$ denote the basis vector $L$ and $\lambda$ its coefficient functional. For a left coset $rT$ define $c(rT)=\lambda(r\alpha(r^{-1}e))$. Replacing $r$ by $rt$ does not change this value, since $\alpha(t^{-1}v)=t^{-1}\alpha(v)$. For $l\in L$, $l^{-1}e=e$ and $\lambda(lv)=\lambda(v)$, so $c(lrT)=c(rT)$. Each $L$-orbit on $R/T$ has size $[L:L\cap rTr^{-1}]$. Since $|T|<|L|$, that index is a positive power of $p$, and is zero in $k$. [step 1.2]

3.1 The coefficient of $e$ in $\operatorname{Tr}_T^R(\alpha)(e)$ is $\sum_{rT}c(rT)$. Grouping by the orbits in step 2.1 makes each contribution zero. The coefficient of $e$ in $\operatorname{id}_V(e)$ is $1$, a contradiction. No proper $T<L$ is therefore a relative-projectivity subgroup. Together with steps 1.1–1.2 and [F3], this says $L$ is a vertex. [F2, F3, step 1.1, step 1.2, step 2.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
