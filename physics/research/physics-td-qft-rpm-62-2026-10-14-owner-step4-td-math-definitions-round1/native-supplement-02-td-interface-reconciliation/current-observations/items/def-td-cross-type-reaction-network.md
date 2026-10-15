---
id: def-td-cross-type-reaction-network
kind: definition
title: Cross-type mixing and reaction network
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A declared family of allowed transitions between distinct tagged composition types, with finite catalyst chains and an explicit no-sinks condition; this definition does not claim a particular material network satisfies it.
deps: [def-td-process-and-protocol, def-td-scaled-products-and-comparison, post-td-accessibility-a1-a6, def-tdmath-decorated-chain-costs, def-tdmath-forward-sector-hypotheses]
dependency_roles:
  def-td-process-and-protocol: formulation-prerequisite
  def-td-scaled-products-and-comparison: formulation-prerequisite
  post-td-accessibility-a1-a6: physical-assumption
  def-tdmath-decorated-chain-costs: mathematical-premise
  def-tdmath-forward-sector-hypotheses: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§VI.A–VI.B
      url: https://arxiv.org/pdf/cond-mat/9708200v2
verification:
  precheck: n/a
dependency_level: 15
---

## Definition

A cross-type mixing and reaction network consists of a declared set $\mathcal G$ of tagged composition types and a state set $X_\Gamma$ for each type. Each state set comes with a fixed formal composition $\nu_\Gamma$, and its states satisfy $\nu(x)=\nu_\Gamma$ as in [[def-tdmath-decorated-chain-costs]]. These mathematical coefficients and their positive type weights are distinct from dimensioned material amounts. For physical channels the model additionally supplies endpoint quantity maps $U_\Gamma:X_\Gamma\to\mathbb R\,\mathrm J$ and $n_\Gamma:X_\Gamma\to\mathbb R^r\,\mathrm{mol}$ in a declared finite species list, together with any separately tracked mechanical or external-field endpoint quantities. No identification of two distinct scaled tags is made.

For each channel $\alpha$ from $\Gamma$ to $\Gamma'$, the model supplies sets $Z_\alpha$ of configurations, $\mathcal K_\alpha$ of protocol records, $\mathcal B_\alpha$ of outer-boundary records, and $\mathcal R_\alpha$ of transfer records, and equilibrium subsets and endpoint maps $\xi^-_\alpha:Z^-_\alpha\to X_\Gamma$, $\xi^+_\alpha:Z^+_\alpha\to X_{\Gamma'}$. A typed record is
$$P=(I,x^-,x^+,z,\kappa,b,r),$$
where $I=[t_0,t_1]$, $t_0<t_1$, is a finite time interval in seconds, $x^-\in X_\Gamma$, $x^+\in X_{\Gamma'}$, $z:I\to Z_\alpha$, $z(t_0)\in Z^-_\alpha$, $z(t_1)\in Z^+_\alpha$, $\xi^-_\alpha(z(t_0))=x^-$, $\xi^+_\alpha(z(t_1))=x^+$, $\kappa\in\mathcal K_\alpha$, $b\in\mathcal B_\alpha$, and $r\in\mathcal R_\alpha$. Write $\mathcal T_\alpha$ for this typed record set. Transfer maps $Q_\alpha,W_{\mathrm{on},\alpha}:\mathcal T_\alpha\to\mathbb R\,\mathrm J$ and $N_\alpha:\mathcal T_\alpha\to\mathbb R^r\,\mathrm{mol}$ record heat, work and material transfer with declared signs; any tracked $\Delta K_{\mathrm{cm}}$ and $\Delta U_{\mathrm{ext}}$ are also joule-valued record maps. The transfer maps may depend on the whole record; factorization through the field $r$ requires an additional declared condition. The channel specifies a balance predicate on $\mathcal T_\alpha$, or equivalently a balance map into a declared product of quantity spaces whose required value is zero, and a model-admitted subset satisfying that predicate. The predicate states the actual energy and material constraints of that channel; no balance law, physical admission or endpoint realizability follows from the tuple alone. Other channels require their own adopted constraints. Define $(\Gamma,x)\mathcal R(\Gamma',y)$ exactly when an admitted channel record has those endpoints. No channel is inferred from separated composition.

For a fixed-constitution core closed channel of system $s$, use $X_\Gamma=X_{\Gamma'}=D_c$ and all six original fields, configuration/equilibrium sets and endpoint maps of [[def-td-process-and-protocol]]. Fix the outer-boundary record $b_s$ of that system and take $\mathcal B_\alpha=\{b_s\}$. The embedding

$$\iota_s(I,x^-,x^+,z,\kappa,r)=(I,x^-,x^+,z,\kappa,b_s,r)$$

is a bijection from $\mathcal P_{\mathrm{cl}}(s)$ onto the core channel's admitted subset; its inverse deletes the fixed field $b_s$. Thus the subsets are identified by this map, not by equality of six- and seven-tuples. On the image assign $Q_\alpha(\iota_s(P))=Q[P](1\,\mathrm J)$ and $W_{\mathrm{on},\alpha}(\iota_s(P))=W_{\mathrm{on}}[P](1\,\mathrm J)$, where the supplier's real values are numerical joule values. Set $N_\alpha=0$ there and retain the supplier's stronger no-matter-crossing condition throughout the interval, together with its fixed-chart mass, endpoint velocities and zero kinetic/external changes. These assignments need not factor through $r$ alone. Values on other typed records are separate protocol data and do not enlarge the admitted subset or assert an energy-balance law.

For any permitted equal-formal-mass compound states $A,B$ of the network, define $A\prec B$ exactly when at least one admitted channel record has initial state $A$ and final state $B$; for named single types this is the relation $\mathcal R$ above. This is the exact relation supplied to [[def-tdmath-forward-sector-hypotheses]], not a separate abstract order that enlarges or restricts the channel edges. Its extension to finite tagged products and common spectators is governed by the adopted A1–A6 conditions below. Thus every edge in a decorated chain is precisely an admitted channel transition. This identification is a declared model condition.

The network is **finite-factor closed** when its types admit the declared finite composition and positive scaling operations and each allowed channel respects the model’s stated conservation constraints. In this network class, explicitly adopt the represented state-family conditions of [[def-tdmath-decorated-chain-costs]]. Each $X_T$ is a nonempty set of finite coefficient-map states with its declared fixed $\nu_T$. The separated-product map

$$\pi_{T,T\prime}:X_T\times X_{T\prime}\to X_{T\times T\prime},\qquad \pi_{T,T\prime}(a,b)=a+b$$

is surjective, so each admitted separated-product state has a factorization, which need not be unique. For every $t>0$, the positive coefficient-scaling map $s_{t,T}:X_T\to X_{tT}$, $s_{t,T}(a)=ta$, is a bijection with inverse scaling by $1/t$. These maps commute with the declared reassociation, permutation and scaling conventions and preserve the exact amount-function and formal-mass identities. The empty unit has $X_1=\{0\}$ with the empty coefficient map $0$. A chosen finite real baseline entropy family used for the chain costs must obey

$$\sigma_{T\times T\prime}(a+b)=\sigma_T(a)+\sigma_{T\prime}(b),\qquad \sigma_{tT}(ta)=t\sigma_T(a),\qquad \sigma_1(0)=0,$$

independently of a nonunique factorization. These are explicit admissibility and calibration conditions of the declared model, not consequences of a channel record or claims that every physical network satisfies them. Separated products remain sums of represented states; the distinct raw tags of scaled and joined types are retained, with reversible preparation transport as specified in [[def-tdmath-forward-sector-hypotheses]], rather than identifying those tags. The dimensioned endpoint-quantity maps and channel balance predicates remain the separately supplied physical data. In addition, each channel must preserve the dimensionless formal mass $m$ of [[def-td-scaled-products-and-comparison]]; this is the equal-coefficient-mass convention required by the mathematical chain-cost supplier, not a statement that formal mass is kilograms or moles. The common relation on all equal-formal-mass compounds satisfies A1–A6 of [[post-td-accessibility-a1-a6]], including consistency with spectators and stability. A decorated finite chain is exactly a finite sequence of such allowed transitions with a common catalyst and the real baseline-entropy edge costs in [[def-tdmath-decorated-chain-costs]].

For $\Gamma,\Gamma'$, let $F(\Gamma,\Gamma')\in\mathbb R\cup\{-\infty,+\infty\}$ be the infimum of those finite decorated-chain costs, with $+\infty$ if no witness exists and $-\infty$ if costs are unbounded below. The network has **no sinks** when, for every ordered type pair,

$$F(\Gamma,\Gamma')<+\infty\quad\Longleftrightarrow\quad F(\Gamma',\Gamma)<+\infty.$$

No-sinks is an explicit property required of a network used in the global-offset theorem; it is not proved by this definition, and it is not asserted for every physical mixing or reaction. Raw channel data may have an empty channel set, but such data do not satisfy the finite-factor-closed A1–A6 subclass above: each nonempty $X_T$ requires an admitted identity-endpoint witness by A1. That subclass may have no channels between distinct composition types while retaining those reflexive witnesses. In every case no-sinks must be checked, not inferred from the absence of cross-composition channels.
