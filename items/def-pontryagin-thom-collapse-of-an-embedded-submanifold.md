---
id: def-pontryagin-thom-collapse-of-an-embedded-submanifold
kind: definition
title: "Pontryagin–Thom collapse with specified normal data"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-disk-bundle-sphere-bundle-and-thom-space", "def-normal-and-conormal-bundles-of-an-embedded-submanifold", "lem-tubular-charts-realize-a-prescribed-normal-identification", "def-countable-choice"]
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for def-pontryagin-thom-collapse-of-an-embedded-submanifold and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-14; unchanged reader mathematics. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"79cf031e0cea4d83c90d65469d3d86ca44b72291dae59d7141cb7de0bd987d8d","evidence":["research/frontier-38-owner-30-reader-14.md","research/frontier-38-owner-30-reader-findings-14.json","research/frontier-38-owner-30-dispatch/reader-reader-14.result.json","research/frontier-38-owner-30-step5-hash-14-pre.json"],"historical_binding":{"commit":"d90f26208","file":"items/def-pontryagin-thom-collapse-of-an-embedded-submanifold.md","historical_raw_sha256":"fa2947629078b21786a5bedf00da5171d9f24ca0b88e5c2179edb0cbf2f15190","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:31:15.766Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stanford Math 215B notes, Lectures 14–15, Theorems 138–139"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "printed pp.44–46; collapse pullback, compact-support duality and Thom normalization"
    - title: "Lee, Introduction to Smooth Manifolds, tubular neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
      locator: "Tubular Neighborhoods; normal quotient identification"
---

## Definition

Let $S\subset X$ be a compact embedded smooth submanifold without boundary, of codimension $r$, in a smooth boundaryless manifold $X$. A **normal datum** on $(S,X)$ is a smooth real vector bundle $E\to S$ of rank $r$ together with a smooth bundle isomorphism $\alpha:E\to TX|_S/TS$ onto the normal quotient of [[def-normal-and-conormal-bundles-of-an-embedded-submanifold]].

A **compatible tubular chart** for the datum $(E,\alpha)$ is a diffeomorphism $\Phi$ of a neighbourhood of the zero section $0_S$ in $E$ onto a neighbourhood of $S$ in $X$, with $\Phi(s,0)=s$ for every $s$, whose induced map on the normal quotient is precisely $\alpha$: identifying the vertical subspace of $T_{(s,0)}E$ with $E_s$, the composite
$$E_s\xrightarrow{\ d\Phi_{(s,0)}|_{E_s}\ }T_sX\xrightarrow{\ q_s\ }T_sX/T_sS=\nu(S)_s$$
equals $\alpha_s$. Fixing the zero section alone is not the compatibility condition; when $E$ is the normal quotient itself compatibility says that this induced map is the identity.

Assume countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Compatible charts exist: the submanifold $S$ is closed in the Hausdorff manifold $X$ because it is compact, so [[lem-tubular-charts-realize-a-prescribed-normal-identification]] applies to $i:S\hookrightarrow X$ and the supplied smooth datum $(E,\alpha)$ and produces such a chart. This inherited hypothesis is the only choice used here: once a chart, a metric and a radius have been supplied, the collapse formula below selects nothing.

Supply a smooth metric $h$ on $E$ and a radius $\rho>0$ such that $\Phi$ is defined on a neighbourhood of $D_\rho(E)$. The **collapse** $c_{\Phi,\rho}:X_+\to\operatorname{Th}_h(E)$ of [[def-disk-bundle-sphere-bundle-and-thom-space]] sends $\Phi(s,v)$ with $\|v\|_h<\rho$ to the class of $(s,v/\rho)$, and sends every other point of $X_+$ to the Thom basepoint. This is well defined because $\Phi$ is injective, and it is based because the disjoint basepoint is not in the tube. If $X$ is locally compact, the same formula defines $c:X^+\to\operatorname{Th}_h(E)$ on the one-point compactification, since $\Phi(D_\rho(E))$ is compact and $c$ is constant off that compact set. The metric, chart and radius are auxiliary choices within the specified normal-data class; the normal identification is part of the input.
