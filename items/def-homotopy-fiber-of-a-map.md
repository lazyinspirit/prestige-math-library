---
id: "def-homotopy-fiber-of-a-map"
kind: "definition"
title: "Homotopy fiber of a map"
deps: ["def-mapping-path-space-replacement-of-a-map", "def-fiber-and-fiber-homotopy-equivalence"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter7 pp49–56; Chapter9 §3 p66 and §5 pp68–69"
    - title: "Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem4.41 pp375–377; Hopf example pp377–378; §4.3 pp405–410"
status: published
origin: "pipeline"
---

## Definition

For a based continuous map $f:(X,x_0)\to(Y,y_0)$, its **homotopy fiber** is the fiber of $p_f:E_f\to Y$ over $y_0$:
$$\operatorname{hofib}(f)=\{(x,\gamma):\gamma(0)=f(x),\ \gamma(1)=y_0\},$$
with basepoint $(x_0,c_{y_0})$. Its topology is the iterated subspace topology of [[def-mapping-path-space-replacement-of-a-map]] and [[def-fiber-and-fiber-homotopy-equivalence]], or the specified kified topology in CGWH. Basedness ensures the displayed basepoint belongs to it. Unlike a literal fiber, its points include a specified path from the image to the basepoint.

For a strictly commuting square of based maps $a:X\to X'$, $b:Y\to Y'$ with $bf=f'a$, the induced map is $(x,\gamma)\mapsto(a(x),b\circ\gamma)$. The endpoint equations hold since $b\gamma(0)=f'a(x)$ and $b\gamma(1)=y'_0$. Postcomposition on path spaces is continuous: the inverse image of the compact-open condition $\eta(K)\subseteq U$ is $\gamma(K)\subseteq b^{-1}U$; kification gives the CG version. Hence the indicated map is continuous and preserves basepoints. Identity and composite squares give the identity and composite formulas pointwise; no path choices are required.

The existence of a basepoint excludes empty $X$ and $Y$ here. When $X$ is one point, this construction is the based loop space of $Y$; when $Y$ is one point it is $X$. These are identities of the specified path-subspace constructions, not claims that arbitrary literal fibers already have the same homotopy type.
