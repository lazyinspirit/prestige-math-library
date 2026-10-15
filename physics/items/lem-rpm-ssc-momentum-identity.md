---
id: lem-rpm-ssc-momentum-identity
kind: lemma
title: Differentiated SSC momentum–velocity identity
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-countable-choice
  - def-covariant-derivative-along-a-curve
  - def-gr-metric-selected-connection
  - def-gr-smooth-lorentzian-objects
  - def-gr-timelike-worldline-and-proper-time
  - lem-gr-observer-pairing-with-future-causal-vectors
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
dependency_roles:
  def-countable-choice: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "L. Filipe Costa and José Natário, Center of mass, spin supplementary conditions, and the momentum of spinning particles, arXiv:1410.6443v2; published in Equations of Motion in Relativistic Gravity, Fundamental Theories of Physics 179 (Springer, 2015)"
      url: https://arxiv.org/html/1410.6443v2
      locator: Section 3, general momentum–velocity identity, with the sign and SI conventions stated locally here.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
---

## Statement

Assume Countable Choice as inherited by the supplied Lorentzian smooth-structure and connection results. Let $I\subseteq\mathbb R$ be a nonempty open interval and let $z:I\to M$ be a $C^2$ future timelike worldline in a time-oriented smooth Lorentzian four-manifold $(M,g,N)$, parametrized by proper time in the convention of [[def-gr-timelike-worldline-and-proper-time]]. Set $U:=dz/d\tau$, so $g(U,U)=-c^2$. For finite regularity, a $C^1$ tensor field along $z$ means a tensor in the fibre over $z(\tau)$ whose components in every smooth chart are $C^1$ functions of $\tau$. Define its derivative in that chart by differentiating each component and adding $+\Gamma^a{}_{bc}(z)U^b$ on each upper index and $-\Gamma^c{}_{ba}(z)U^b$ on each lower index. In particular,
$$(D_\tau V)^a=\dot V^a+\Gamma^a{}_{bc}(z)U^bV^c,\qquad (D_\tau n)_a=\dot n_a-\Gamma^c{}_{ba}(z)U^bn_c,$$
$$(D_\tau S)^{ab}=\dot S^{ab}+\Gamma^a{}_{cd}(z)U^cS^{db}+\Gamma^b{}_{cd}(z)U^cS^{ad}.$$
These formulas extend the smooth-curve derivative of [[def-covariant-derivative-along-a-curve]] to the stated $C^2/C^1$ data. Let $p$ be a $C^1$ vector field along $z$, let $S^{ab}=-S^{ba}$ and $\mathcal T^{ab}=-\mathcal T^{ab}$ be $C^1$ bivector fields along $z$, and let $n$ be a $C^1$ future unit timelike field along $z$. Suppose
$$S^{ab}n_b=0,\qquad D_\tau S^{ab}=p^aU^b-p^bU^a+\mathcal T^{ab}.$$
Define $\gamma:=-g(n,U)/c$ and $E_n:=-c\,g(p,n)$. Then $\gamma>0$, and
$$c\gamma\,p^a=\frac{E_n}{c}U^a+S^{ab}D_\tau n_b+\mathcal T^{ab}n_b.$$
Here $\mathcal T$ denotes an arbitrary antisymmetric torque; setting it to zero gives the torque-free case.

## Facts & Assumptions

**Given:** The Lorentzian manifold, its metric-compatible connection, the stated future timelike proper-time worldline, vector and bivector fields along it, a future unit field $n$, the SSC and the spin evolution equation.

[A1] Countable Choice is inherited through the supplied GR smooth-structure and connection items. [[def-countable-choice]]

[A2] Along the same proper-time curve, the observer satisfies $S^{ab}n_b=0$ and the antisymmetric fields obey $D_\tau S^{ab}=p^aU^b-p^bU^a+\mathcal T^{ab}$, with the stated regularity.

[F1] Proper-time parametrization of a future timelike Lorentzian worldline gives $g(U,U)=-c^2$. [[def-gr-timelike-worldline-and-proper-time]]

[F2] The covariant derivative along a curve satisfies the product rule on a pairing, and metric compatibility gives $D_\tau g=0$. [[def-covariant-derivative-along-a-curve]]; [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[F3] For a future unit timelike observer $n$ and future timelike $U/c$, $-g(n,U/c)>0$. [[lem-gr-observer-pairing-with-future-causal-vectors]]

## Proof

**Proof technique:** direct.

1.1 The chain rule and the connection coefficient transformation law cancel derivatives of the chart transition matrices in the displayed formulas, so $D_\tau$ is independent of the chart. The ordinary component product rule gives the tensor product and contraction rules; the coordinate identity $\partial_cg_{ab}=\Gamma^d{}_{ca}g_{db}+\Gamma^d{}_{cb}g_{ad}$ from metric compatibility gives $D_\tau g=0$. These arguments require only $C^1$ tensor components along a $C^2$ curve. Differentiate the SSC in [A2] along $z$ using the inherited smooth-structure assumption and covariant product rule, then substitute its spin evolution equation:
$$0=D_\tau(S^{ab}n_b)=p^a g(U,n)-U^a g(p,n)+\mathcal T^{ab}n_b+S^{ab}D_\tau n_b.$$
Every term is defined at the same point of $z$, so the covariant product rule applies without comparing different tangent fibres. [given, A1, A2, F2, algebra]

2.1 The definitions give $g(U,n)=-c\gamma$ and $g(p,n)=-E_n/c$. Substitution into step 1.1 and rearrangement yield
$$c\gamma\,p^a=\frac{E_n}{c}U^a+\mathcal T^{ab}n_b+S^{ab}D_\tau n_b.$$
Positivity of $\gamma$ follows from [F3]. [given, A2, step 1.1, F1, F3, algebra] ∎

## Remarks

This is tensor algebra along one specified curve. It does not select an SSC, prove closure of the MPD equations, or identify $p$ with $mU$.
