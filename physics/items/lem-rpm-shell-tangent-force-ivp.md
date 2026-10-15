---
id: lem-rpm-shell-tangent-force-ivp
kind: lemma
title: "Smooth shell-tangent force initial-value problem"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-rpm-spacetime-observer-and-worldline, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, lem-gr-parallel-transport-and-geodesic-speed, thm-picard-lindelof-local-existence-and-uniqueness, thm-smooth-dependence-of-ode-solutions-on-parameters, thm-existence-and-uniqueness-of-a-maximal-ode-solution, lem-gr-future-causal-classification-by-a-timelike-field, def-covariant-derivative-along-a-curve, def-christoffel-symbols-of-an-affine-connection]
dependency_roles:
  def-rpm-spacetime-observer-and-worldline: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 3 lecture-note excerpt"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr3.pdf"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 3"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
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

Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold and let $m,c>0$. Let $\mathcal V\subset TM$ be an open set of future timelike vectors and let $f$ be a smooth vector field along the bundle projection $\mathcal V\to M$, with $f(p,V)\in T_pM$ and $g_p(V,f(p,V))=0$ for every $(p,V)\in\mathcal V$. Fix an initial parameter $s_0\in\mathbb R$. For every initial datum $(p_0,U_0)\in\mathcal V$ satisfying $g_{p_0}(U_0,U_0)=-c^2$, there is an open interval $J\ni s_0$ and a unique local solution consisting of a $C^2$ curve $x:J\to M$ and its $C^1$ tangent field $U=dx/ds$, with $x(s_0)=p_0$, $U(s_0)=U_0$, $dx/ds=U$, and $D_sU=f(x,U)/m$. The solution depends smoothly on its initial data and on any finite-dimensional parameters on which $f$ depends smoothly, on a common sufficiently short compact interval containing $s_0$ near the base datum. It remains on the future unit timelike shell. There is a unique maximal solution on an open interval containing $s_0$, but this interval need not be all of $\mathbb R$.

## Facts & Assumptions

**Given:** The prescribed background of [[def-rpm-spacetime-observer-and-worldline]], its metric-compatible torsion-free connection [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], and the open-domain force field of [A1].

[A1] The force field is prescribed and smooth on an open set of future timelike velocities, is orthogonal to the velocity argument, and $m,c>0$.

[F1] Picard–Lindelöf: “a unique local solution of the IVP exists on some interval around the initial time” ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[F2] Smooth dependence: for a jointly smooth field, near base data “there are a compact time interval $I$ and a neighbourhood $W$” on which the solutions exist and depend smoothly on initial data and parameters ([[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F3] Along a curve, $\frac{d}{ds}g(V,W)=g(D_sV,W)+g(V,D_sW)$ ([[lem-gr-parallel-transport-and-geodesic-speed]]).

[F4] Every IVP satisfying Picard–Lindelöf has a “unique maximal solution” on an “open interval containing the initial time” ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[F5] A nonzero causal vector is future-directed exactly when its pairing with the time-orientation field is negative, and that pairing cannot vanish ([[lem-gr-future-causal-classification-by-a-timelike-field]]).

[F6] The covariant derivative along a curve is the pullback connection ([[def-covariant-derivative-along-a-curve]]); chart connection coefficients are defined by $\nabla_{\partial_b}\partial_c=\Gamma^a{}_{bc}\partial_a$ ([[def-christoffel-symbols-of-an-affine-connection]]).


## Proof

1.1 In a chart write $U=U^c\partial_c$. The pullback connection and its Leibniz rule in [F6] give $D_sU=(\dot U^a+\Gamma^a{}_{bc}\dot x^bU^c)\partial_a$; since $\dot x^b=U^b$, the covariant system is $\dot x^a=U^a$, $\dot U^a=-\Gamma^a{}_{bc}(x)U^bU^c+m^{-1}f^a(x,U)$. The right side is smooth on an open chart-state domain, hence locally Lipschitz; [F1] gives a unique local solution through each allowed initial datum, and uniqueness makes coordinate solutions agree on chart overlaps. [given, F1, F6, algebra]

1.2 Along this solution, metric compatibility [F3] gives $\frac{d}{ds}g(U,U)=2g(D_sU,U)=2m^{-1}g(f(x,U),U)=0$ by [A1]. Thus $g(U,U)$ stays equal to its initial value $-c^2$. The vector $U$ never vanishes; by [F5] its continuous pairing with the time-orientation field cannot vanish, so the initially negative pairing remains negative and its future direction is preserved. [given, A1, F3, F5, algebra]

2.1 The coordinate field is jointly smooth in initial coordinates and any smooth force parameters, so [F2] supplies smooth dependence on a common compact local interval. To obtain a maximal solution on $\mathcal V$, take the union of all local solutions through the datum on open intervals containing $s_0$. Any two such intervals intersect in an interval containing $s_0$. The set where their position-velocity pairs agree is closed by continuity and open by local uniqueness [F1] in a chart; since it contains $s_0$, connectedness makes the pairs agree on the whole overlap. Their union is therefore a well-defined solution on the open interval union and is maximal by construction. This is the chartwise gluing of the Euclidean maximal-ODE result [F4]; no infinite lifetime follows. [step 1.1, F1, F2, F4] ∎
