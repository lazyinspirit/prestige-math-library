---
id: def-tdmath-forward-signed-comparison
kind: definition
title: Signed comparison for forward-sector relations
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: [def-tdmath-forward-sector-hypotheses, def-tdmath-tagged-scalable-compound]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-tagged-scalable-compound: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §II.D"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §4.1, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Definition

Let $u,v$ be finite-support real coefficient maps on the tagged state labels of [[def-tdmath-tagged-scalable-compound]] with equal total coefficient. For a typed state $x$, compound notation uses the represented map $\iota(x)$ from [[def-tdmath-forward-sector-hypotheses]]; its raw unit point mass is $e_{(\Gamma,x)}$. Signed maps still use the ordinary total of their raw coefficients, exactly the bookkeeping mass of the represented nonnegative maps. Put $d=v-u$, $d^+(x)=\max(d(x),0)$ and $d^-(x)=\max(-d(x),0)$. Define $u\preceq_s v$ to mean $d^-\prec d^+$ under the compound relation of [[def-tdmath-forward-sector-hypotheses]]. Write $u\sim_s v$ when both $u\preceq_s v$ and $v\preceq_s u$. These are formal signed comparison maps, not physical negative amounts. The positive and negative parts are finite-support compounds of equal mass. If $u\sim_s v$, then $cu\sim_s cv$ for every real $c$: positive $c$ uses scaling, $c=0$ is reflexivity, and negative $c$ swaps the positive and negative parts while equivalence supplies both comparison directions. This Definition introduces the signed notation; ordinary-order compatibility and the signed-order laws are proved separately.
