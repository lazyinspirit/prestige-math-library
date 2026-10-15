---
id: def-tdmath-decorated-chain-costs
kind: definition
title: Decorated finite-chain costs with catalysts
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 14
deps: [def-tdmath-forward-sector-hypotheses, thm-tdmath-arbitrary-family-calibration]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  thm-tdmath-arbitrary-family-calibration: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §VI.B, Eqs. 6.6, 6.9, and 6.10, pp. 74–75"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapters 2 and 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Definition

Let $\mathcal G$ be a set of tagged system types closed under finite composition $T\times T'$ and positive scaling $tT$. Scaling is associative and acts componentwise on products: $s(tT)=(st)T$ and $t(T\times T')=(tT)\times(tT')$. Each type $T$ has a nonempty state set $X_T$ of finite tagged compounds, every state in $X_T$ is represented by the coefficient-map interpretation of [[def-tdmath-forward-sector-hypotheses]] and has total coefficient mass $m(T)=w_T\ge0$, and $m(T\times T')=m(T)+m(T')$, $m(tT)=t\,m(T)$. The entropy $\sigma_T:X_T\to\mathbb R$ is the finite additive extensive entropy from [[thm-tdmath-arbitrary-family-calibration]]; in particular $\sigma_{tT}(ta)=t\sigma_T(a)$.

Include the formal empty unit type $1$, with $X_1=\{*\}$, $m(1)=0$, $\sigma_1(*)=0$, $T\times1=T$, and $t1=1$. A transition edge from type $T$ to type $T'$ is a pair $a\in X_T$, $b\in X_{T'}$ such that the underlying equal-mass compounds satisfy $a\prec b$ under [[def-tdmath-forward-sector-hypotheses]]. Thus an edge can exist only when $m(T)=m(T')$. Its cost is the finite real number $\sigma_{T'}(b)-\sigma_T(a)$.

A decorated finite chain from $\Gamma$ to $\Gamma'$ consists of a catalyst type $C\in\mathcal G$, an integer $N\ge1$, types $T_0=\Gamma\times C,T_1,\ldots,T_N=\Gamma'\times C$, and states $a_k\in X_{T_k}$, $b_{k+1}\in X_{T_{k+1}}$ with an edge $a_k\prec b_{k+1}$ for every $0\le k<N$. Its cost is the finite real sum

$$c=\sum_{k=0}^{N-1}\bigl(\sigma_{T_{k+1}}(b_{k+1})-\sigma_{T_k}(a_k)\bigr).$$

Define $F(\Gamma,\Gamma')$ as the infimum of all such witness costs. Set $F=+\infty$ if there is no witness and $F=-\infty$ if the witness costs are unbounded below. The infimum is over real witness costs, so no subtraction of extended-real infima is used. Type permutations, reassociation, reversible identifications, and the identity $T\times1=T$ are part of the declared type structure. The cost identities and inequalities require a separate proof.
