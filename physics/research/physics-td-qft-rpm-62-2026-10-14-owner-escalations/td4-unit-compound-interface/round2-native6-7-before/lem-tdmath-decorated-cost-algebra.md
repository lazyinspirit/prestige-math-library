---
id: lem-tdmath-decorated-cost-algebra
kind: lemma
title: Algebraic properties of decorated-chain costs
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 15
deps: [def-tdmath-forward-sector-hypotheses, def-tdmath-decorated-chain-costs, thm-tdmath-arbitrary-family-calibration]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-decorated-chain-costs: mathematical-premise
  thm-tdmath-arbitrary-family-calibration: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §VI.B, Eqs. 6.6–6.16, pp. 74–75"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapters 2 and 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Statement

For the cost $F$ of [[def-tdmath-decorated-chain-costs]], $F(\Gamma,\Gamma)=0$, $F$ is positively homogeneous, invariant under adding the same catalyst to both endpoints, and satisfies the triangle inequality whenever the extended-real sum on its right is defined. It is subadditive under composition whenever $F(\Gamma_1,\Gamma'_1)+F(\Gamma_2,\Gamma'_2)$ is defined. Every pair of actual forward and reverse decorated-chain witnesses has nonnegative total cost. A finite reverse witness therefore bounds all forward costs below; $F=-\infty$ can occur only when the reverse direction has no witness.

## Facts & Assumptions

**Given:** A1–A6 on accessible finite compounds, the additive extensive entropy $\sigma$, and the decorated-chain definition.

[A1] [[def-tdmath-forward-sector-hypotheses]]: accessibility is reflexive, transitive, consistent under common spectators, and positively scalable; stability is available.

[F1] [[def-tdmath-decorated-chain-costs]]: each chain has a finite real cost, and $F$ is its infimum, with empty infimum $+\infty$.

[F2] [[thm-tdmath-arbitrary-family-calibration]]: $\sigma$ is additive and extensive on every separated finite compound and represents same-type comparisons.

## Proof

1.1 A reflexive identity edge from any nonempty state of $\Gamma$ to itself has cost zero, so $F(\Gamma,\Gamma)\le0$. For a decorated closed chain, start with the compound containing every edge input $a_0,\ldots,a_{N-1}$. Apply the edge $a_0\prec b_1$ with all other edge inputs as spectators, then apply $a_1\prec b_2$ with the already produced $b_1$ and all still-unused inputs as spectators, and continue through $a_{N-1}\prec b_N$. Consistency and transitivity give $\sum_{k=0}^{N-1}a_k\prec\sum_{k=1}^{N}b_k$. Since $T_N=T_0$ and the intermediate types occur once on each side, these two compounds have the same total type up to the declared reassociation and permutation. Their entropy difference is exactly the chain cost. The same-type entropy representation [F2] makes this difference nonnegative. Hence every closed-chain witness costs at least zero and $F(\Gamma,\Gamma)=0$. [A1, F1, F2, construct]

1.2 Take finite witnesses for $(\Gamma_1,\Gamma'_1)$ and $(\Gamma_2,\Gamma'_2)$. Run the first chain with a fixed state of $\Gamma_2$ and its second catalyst as spectators; then run the second chain with the first chain's output state and first catalyst as spectators. Consistency allows both sequences, and each fixed spectator contributes zero entropy difference. The resulting witness from $\Gamma_1\times\Gamma_2$ to $\Gamma'_1\times\Gamma'_2$ has the sum of the two costs. If both infima are finite real numbers, choose witnesses within $\epsilon/2$ of each infimum and let $\epsilon\downarrow0$. If one infimum is $-\infty$ and the other is finite, use a fixed finite witness for the latter and arbitrarily negative witnesses for the former; the product costs are unbounded below. If both are $-\infty$, choose both costs arbitrarily negative, so the product infimum is $-\infty$. If either is $+\infty$ and the other is not $-\infty$, the right side is $+\infty$ and the inequality is automatic. The mixed extended sum $+\infty+(-\infty)$ is undefined and is excluded by the Statement. [A1, F1, F2, construct]

1.3 A witness for $F(\Gamma\times C_0,\Gamma'\times C_0)$ is a witness for $F(\Gamma,\Gamma')$ with enlarged catalyst $C_0\times C$, so $F(\Gamma,\Gamma')\le F(\Gamma\times C_0,\Gamma'\times C_0)$. Conversely, add one fixed state of the nonempty catalyst $C_0$ to every edge of an arbitrary witness for $F(\Gamma,\Gamma')$. Its cost is unchanged, proving the reverse inequality. Thus $F(\Gamma\times C_0,\Gamma'\times C_0)=F(\Gamma,\Gamma')$. [A1, F1, F2]

2.1 Scaling every state, type, and catalyst in a witness by $t>0$ multiplies its cost by $t$ because $\sigma_{tT}(ta)=t\sigma_T(a)$. This gives $F(t\Gamma,t\Gamma')\le tF(\Gamma,\Gamma')$; applying the same argument with scale $1/t$ gives equality, including the extended values. [A1, F1, F2, step 1.1]

3.1 Concatenate a witness from $\Gamma$ to $\Gamma'$ with one from $\Gamma'$ to $\Gamma''$, adding the other chain's fixed catalyst state as spectator to each edge. The result is a witness from $\Gamma$ to $\Gamma''$ whose cost is the sum. Taking finite approximations proves the triangle inequality when both costs are finite; an unbounded-below term with a finite witness in the other direction gives the corresponding $-\infty$ case; if a term is $+\infty$ and the sum is defined, the inequality is automatic. For an actual forward witness and an actual reverse witness with possibly different catalysts, add the reverse catalyst's fixed state to every forward edge and the forward catalyst's fixed state to every reverse edge. Consistency supplies these padded edges, and additivity makes each edge cost unchanged. The padded chains now have the same catalyst, so concatenate them into a closed chain; step 1.1 gives $c+d\ge0$. Thus any fixed finite reverse witness of cost $d$ bounds every forward witness below by $-d$. [A1, F1, F2, step 1.1, construct] ∎
