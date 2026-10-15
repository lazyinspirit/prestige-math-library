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
  statement: ai-altered
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

Let $\mathcal G$ be a set of tagged system types closed under finite composition $T\times T'$ and positive scaling $tT$. Scaling is associative and acts componentwise on products: $s(tT)=(st)T$ and $t(T\times T')=(tT)\times(tT')$. Each type $T$ has a nonempty state set $X_T$ of finite tagged compounds, every state in $X_T$ is represented by the coefficient-map interpretation of [[def-tdmath-forward-sector-hypotheses]] and has the fixed aggregate composition $\nu(a)=\nu_T$ of its declared type, using the amount-function interpretation in [[def-tdmath-forward-sector-hypotheses]], and has total coefficient mass $m(T)=w_T\ge0$, and $\nu_{T\times T'}=\nu_T+\nu_{T'}$, $\nu_{tT}=t\nu_T$, with $m(T\times T')=m(T)+m(T')$ and $m(tT)=t\,m(T)$. Matching scalar masses alone do not identify aggregate composition. The entropy $\sigma_T:X_T\to\mathbb R$ is the finite additive extensive entropy from [[thm-tdmath-arbitrary-family-calibration]]; in particular $\sigma_{tT}(ta)=t\sigma_T(a)$.

For each pair of types prescribe the product map $\pi_{T,T\prime}:X_T\times X_{T\prime}\to X_{T\times T\prime}$ by $\pi(a,b)=a+b$ on represented coefficient maps, and require it to be surjective: $X_{T\times T\prime}=\{a+b:a\in X_T,b\in X_{T\prime}\}$. Thus each product state admits a factorization, without requiring it to be unique. For $t>0$, prescribe the scaling bijection $s_{t,T}:X_T\to X_{tT}$ by $s_{t,T}(a)=ta$, with inverse coefficient scaling by $1/t$. These maps commute with the stated type identifications. Require $\sigma_{T\times T\prime}(a+b)=\sigma_T(a)+\sigma_{T\prime}(b)$ and $\sigma_{tT}(ta)=t\sigma_T(a)$; entropy is therefore independent of any nonunique product factorization. Include the formal empty unit type $1$, with $X_1=\{0\}$, where $0$ is the empty coefficient map, $m(1)=0$, $\sigma_1(0)=0$, $T\times1=T$, and $t1=1$. A transition edge from type $T$ to type $T'$ is a pair $a\in X_T$, $b\in X_{T'}$ such that the underlying equal-mass compounds satisfy $a\prec b$ under [[def-tdmath-forward-sector-hypotheses]]. Thus an edge can exist only when $m(T)=m(T')$. Its cost is the finite real number $\sigma_{T'}(b)-\sigma_T(a)$.

A decorated finite chain from $\Gamma$ to $\Gamma'$ consists of a catalyst type $C\in\mathcal G$, an integer $N\ge1$, types $T_0=\Gamma\times C,T_1,\ldots,T_N=\Gamma'\times C$, and states $a_k\in X_{T_k}$, $b_{k+1}\in X_{T_{k+1}}$ with an edge $a_k\prec b_{k+1}$ for every $0\le k<N$. Its cost is the finite real sum

$$c=\sum_{k=0}^{N-1}\bigl(\sigma_{T_{k+1}}(b_{k+1})-\sigma_{T_k}(a_k)\bigr).$$

Define the ordered extended real line $\overline{\mathbb R}=\mathbb R\cup\{-\infty,+\infty\}$ by placing $-\infty$ below every real and $+\infty$ above every real. Finite addition retains its usual meaning; a real added to either infinity leaves that infinity, and equal-sign infinities add to themselves. Opposite-sign infinite sums are undefined. Positive multiplication preserves each infinity, and negation exchanges the infinities. For a nonempty real set bounded below, its infimum is its greatest real lower bound; completeness ensures existence. Define $F:\mathcal G\times\mathcal G\to\overline{\mathbb R}$ by taking $F(\Gamma,\Gamma\prime)$ as the infimum of all such witness costs. Set $F=+\infty$ if there is no witness and $F=-\infty$ if the witness costs are unbounded below. The infimum is over real witness costs, so no subtraction of extended-real infima is used. The structural type identifications are permutation, reassociation, $T\times1=T$, nested scaling $s(tT)=(st)T$, and distribution of positive scaling over product. On states their prescribed maps are respectively permutation and reassociation of sums, deletion of the zero unit, composition of the scaling bijections, and componentwise scaling; the resulting coefficient maps agree by the displayed product/scaling formulas. Any additional reversible identification is specified by a chosen set $\mathcal E\subseteq\mathcal G\times\mathcal G$ and, for each $(T,T')\in\mathcal E$, an explicit bijection $r_{T,T'}:X_T\to X_{T'}$. Require $\nu_T=\nu_{T'}$, $\sigma_{T'}(r_{T,T'}a)=\sigma_T(a)$ and $a\sim r_{T,T'}a$ for every $a\in X_T$, where $\sim$ means both accessibility directions. In particular these maps preserve $m$; composition consistency and transitivity make them preserve and reflect every comparison after any common finite spectators are added. Inverse and composite identification maps are the inverse and composite bijections; prescribed maps agree on structural rebracketings and commute with the product and scaling maps wherever their domains match. The chosen pairs and maps are part of the model data. If no additional identifications are specified, take $\mathcal E=\varnothing$; no other type identification is implicit. The cost identities and inequalities require a separate proof.
