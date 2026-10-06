---
id: def-dualizing-complex-on-projective-cm-scheme
kind: definition
title: "Dualizing complexes and the normalized dualizing sheaf on a projective CM scheme"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-derived-category-of-an-abelian-category", "def-sheaf-ext-for-coherent-modules", "def-cohen-macaulay-local-module-and-ring"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for def-dualizing-complex-on-projective-cm-scheme and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-28; unchanged reader mathematics. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"b35ee6fd0b6d170051ca6d3f03f049c3dbf42230d0a77034fa86c5afb600e3d0","evidence":["research/frontier-38-owner-30-reader-28.md","research/frontier-38-owner-30-reader-findings-28.json","research/frontier-38-owner-30-dispatch/reader-reader-28.result.json","research/frontier-38-owner-30-step5-hash-28-pre.json"],"historical_binding":{"commit":"d90f26208","file":"items/def-dualizing-complex-on-projective-cm-scheme.md","historical_raw_sha256":"46868bbb7166b33c7d1ebaa85031e98ec75644d2e850235c021cb5e1dca0ed05","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:33:11.226Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks, Definition 47.15.1: local dualizing-complex conditions"
      url: https://stacks.math.columbia.edu/tag/0A7B
    - title: "Stacks, Lemma 48.27.1: normalization over a field"
      url: https://stacks.math.columbia.edu/tag/0FVV
---

## Definition

A dualizing complex on a Noetherian scheme $X$ is an object $D_X\in D^b_{\mathrm{Coh}}(X)$ such that, locally on affine open neighborhoods $U=\operatorname{Spec}B$, its corresponding complex has finite injective dimension over $B$ and the homothety map $B\to R\operatorname{Hom}_B(D_X|_U,D_X|_U)$ is an isomorphism. Here $D^b_{\mathrm{Coh}}$ means bounded complexes with coherent cohomology, $\mathcal R\!Hom$ denotes derived internal Hom, and $\operatorname{Ext}_X^r(M,N)=\operatorname{Hom}_{D(X)}(M,N[r])$ is **global** Ext, rather than a sheaf Ext.

For a projective scheme over a field $k$, a normalization over $k$ consists of a dualizing complex $D_X$ and a trace $t_X:R\Gamma(X,D_X)\to k$ for which the evaluation map induces natural isomorphisms
$$\operatorname{Hom}_{D(X)}(K,D_X[r])\cong \operatorname{Hom}_k(H^{-r}(X,K),k)$$
for all $K\in D^b_{\mathrm{Coh}}(X)$ and $r\in\mathbb Z$. For a pure $d$-dimensional Cohen–Macaulay scheme (every local ring has depth equal to dimension), the normalized dualizing sheaf is $\omega_X=\mathcal H^{-d}(D_X)$. The local constructions on this page prove existence and $D_X\cong\omega_X[d]$; concentration is a conclusion, rather than an additional definition. The shift convention is $H^a(K[b])=H^{a+b}(K)$. Pure dimension means every irreducible component has dimension $d$. A dualizing sheaf on a singular CM scheme need not be invertible.
