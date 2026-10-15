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

For each pair of types prescribe the product map $\pi_{T,T\prime}:X_T\times X_{T\prime}\to X_{T\times T\prime}$ by $\pi(a,b)=a+b$ on represented coefficient maps, and require it to be surjective: $X_{T\times T\prime}=\{a+b:a\in X_T,b\in X_{T\prime}\}$. Thus each product state admits a factorization, without requiring it to be unique. For $t>0$, prescribe the scaling bijection $s_{t,T}:X_T\to X_{tT}$ by $s_{t,T}(a)=ta$, with inverse coefficient scaling by $1/t$. The type identifications and the precise commuting conditions are specified below. Require $\sigma_{T\times T\prime}(a+b)=\sigma_T(a)+\sigma_{T\prime}(b)$ and $\sigma_{tT}(ta)=t\sigma_T(a)$; entropy is therefore independent of any nonunique product factorization. Include the formal empty unit type $1$, with $X_1=\{0\}$, where $0$ is the empty coefficient map, $m(1)=0$, $\sigma_1(0)=0$, $T\times1=T$, and $t1=1$. A transition edge from type $T$ to type $T'$ is a pair $a\in X_T$, $b\in X_{T'}$ such that the underlying equal-mass compounds satisfy $a\prec b$ under [[def-tdmath-forward-sector-hypotheses]]. Thus an edge can exist only when $m(T)=m(T')$. Its cost is the finite real number $\sigma_{T'}(b)-\sigma_T(a)$.

A decorated finite chain from $\Gamma$ to $\Gamma'$ consists of a catalyst type $C\in\mathcal G$, an integer $N\ge1$, types $T_0=\Gamma\times C,T_1,\ldots,T_N=\Gamma'\times C$, and states $a_k\in X_{T_k}$, $b_{k+1}\in X_{T_{k+1}}$ with an edge $a_k\prec b_{k+1}$ for every $0\le k<N$. Its cost is the finite real sum

$$c=\sum_{k=0}^{N-1}\bigl(\sigma_{T_{k+1}}(b_{k+1})-\sigma_{T_k}(a_k)\bigr).$$

Define the ordered extended real line $\overline{\mathbb R}=\mathbb R\cup\{-\infty,+\infty\}$ by placing $-\infty$ below every real and $+\infty$ above every real. Finite addition retains its usual meaning; a real added to either infinity leaves that infinity, and equal-sign infinities add to themselves. Opposite-sign infinite sums are undefined. Positive multiplication preserves each infinity, and negation exchanges the infinities. For a nonempty real set bounded below, its infimum is its greatest real lower bound; completeness ensures existence. Define $F:\mathcal G\times\mathcal G\to\overline{\mathbb R}$ by taking $F(\Gamma,\Gamma\prime)$ as the infimum of all such witness costs. Set $F=+\infty$ if there is no witness and $F=-\infty$ if the witness costs are unbounded below. The infimum is over real witness costs, so no subtraction of extended-real infima is used. The structural identifications are product permutation and reassociation, $T\times1=T$, $1T=T$, $s(tT)=(st)T$, $t(T\times R)=(tT)\times(tR)$ and $t1=1$. Their state maps are the identity on the corresponding represented coefficient maps: finite addition is commutative and associative, adds zero for the unit, and commutes with coefficient scaling. Thus the displayed product and scaling maps commute with these identifications, which preserve $\nu$, $m$, $\sigma$ and accessibility.

Additional reversible identifications, if used, are separate specified data: a set $E\subseteq\mathcal G^2$ of pairs $(T,R)$ with $\nu_T=\nu_R$ and, for each pair, a bijection $r_{T,R}:X_T\to X_R$ such that $\sigma_R(r_{T,R}(a))=\sigma_T(a)$ and $a\sim r_{T,R}(a)$ for every $a\in X_T$. Include identity pairs with identity maps and close these data under inverse and composition, with $r_{R,T}=r_{T,R}^{-1}$ and $r_{R,H}\circ r_{T,R}=r_{T,H}$. Require closure under positive scaling and product with another specified pair $(D,H)$, with $r_{tT,tR}(ta)=t r_{T,R}(a)$ and $r_{T\times D,R\times H}(a+d)=r_{T,R}(a)+r_{D,H}(d)$. The latter must hold independently of every nonunique product factorization. These requirements give exactly the commuting product/scaling diagrams. They preserve aggregate composition and mass; replacing a state by its image preserves and reflects every comparison with any compound, by mutual accessibility, consistency and transitivity. Their maps and all structural maps must agree on overlapping identifications. One may take only the structural data, with no additional pairs. The calibration theorem does not supply additional identifications: these are hypotheses to check whenever chosen. Reversible equal-state splitting is an accessibility assertion; it does not identify every state of a product with a single unsplit state. The cost identities and inequalities require a separate proof.
