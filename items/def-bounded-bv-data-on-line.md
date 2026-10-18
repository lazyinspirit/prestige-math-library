---
id: def-bounded-bv-data-on-line
kind: definition
title: Bounded BV data on the real line
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
aliases: []
deps:
  [
    def-l-p-space-as-a-quotient-by-null-functions,
    def-l-infinity-on-a-measure-space,
    def-locally-integrable-function-on-r-n
  ]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jérôme Droniou, A beginner’s course in finite volume approximation of
        scalar conservation laws, complete lecture note"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "§2.3.1, pp. 19–20: one-dimensional BV seminorms and the spatial
        translation estimate used in the scheme analysis."
    - title: "Siddhartha Mishra, Ulrik S. Fjordholm and Rémi Abgrall, Numerical
        Methods for Conservation Laws, ETH lecture notes"
      url: "https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbo\
        lic_pdes.pdf"
      locator: "§4.6, Theorems 4.18–4.19, PDF pp. 55–57: the BV convention, Helly
        compactness and the L1-data convergence theorem."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $u$ be an almost-everywhere equivalence class of measurable functions on
$\mathbb R$ with $u\in L^\infty(\mathbb R)\cap L^1_{\mathrm{loc}}(\mathbb R)$,
using the quotient convention of
[[def-l-p-space-as-a-quotient-by-null-functions]], the essentially bounded
class of [[def-l-infinity-on-a-measure-space]], and the local integrability
convention of [[def-locally-integrable-function-on-r-n]]. For $h>0$ define
$$D_hu(x):=u(x+h)-u(x),\qquad \operatorname{TV}_{\mathrm{tr}}(u):=\sup_{h>0}\frac1h\int_{\mathbb R}|D_hu(x)|\,dx,$$
where the integral may be $+\infty$. The **bounded BV class on the line**
$\mathrm{BV}_b(\mathbb R)$ consists of those classes for which
$\operatorname{TV}_{\mathrm{tr}}(u)<\infty$; we write
$\operatorname{TV}(u):=\operatorname{TV}_{\mathrm{tr}}(u)$.

This translation-variation convention is the standard one-dimensional BV
seminorm on bounded locally integrable classes. It is unchanged by modifying
$u$ on a null set, because each translate of a null set is null. It does not
require $u\in L^1(\mathbb R)$: every bounded constant function belongs to
$\mathrm{BV}_b(\mathbb R)$ and has variation $0$.
