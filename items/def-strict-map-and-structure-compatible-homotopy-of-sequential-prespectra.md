---
id: def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra
kind: definition
title: Strict maps and structure-compatible homotopies of sequential prespectra
status: published
origin: pipeline
deps: ["def-sequential-prespectrum-spectrum-and-adjoint-structure-maps"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 2
      url: https://web.archive.org/web/20100414235039if_/http://www.math.cornell.edu:80/~hatcher/SSAT/SSch2.pdf
      locator: Section 2.1, PDF pages 8--10
---

## Definition

Let $E=(E_n,\sigma_n)$ and $F=(F_n,\tau_n)$ be sequential prespectra. A
**strict map of prespectra** $f:E\to F$ is a family of based maps
$f_n:E_n\to F_n$ such that, for every $n\geq0$,

$$ f_{n+1}\circ\sigma_n =\tau_n\circ(1_{S^1}\wedge f_n):S^1\wedge E_n\longrightarrow F_{n+1}. $$

A **structure-compatible homotopy** $H:f\simeq g$ is a family of based
homotopies $H_n:E_n\times I\to F_n$ satisfying

$$H_{n,0}=f_n,\qquad H_{n,1}=g_n,$$

and for which every time slice
$H_{n,t}$ is strict:

$$ H_{n+1,t}\circ\sigma_n =\tau_n\circ(1_{S^1}\wedge H_{n,t}) \qquad(t\in I). $$

Thus this page uses the strict level category and this specified notion of
homotopy; it does not identify arbitrary zigzags or introduce stable maps.
