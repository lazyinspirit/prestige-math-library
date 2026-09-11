---
id: "def-locally-trivial-fiber-bundle"
kind: "definition"
title: "Locally trivial fiber bundle"
deps: ["thm-product-universal-property", "def-homeomorphism-and-open-maps", "def-partition-of-unity-subordinate-to-a-cover"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
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

A **locally trivial fiber bundle with fiber $F$** is a continuous map $p:E\to B$, an open cover $(U_i)_{i\in S}$ of $B$, and homeomorphisms
$$\theta_i:p^{-1}(U_i)\longrightarrow U_i\times F,\qquad \operatorname{pr}_1\theta_i=p|_{p^{-1}(U_i)}.$$
Here bundle charts, including those used later for principal and associated bundles, are charts in ordinary topological spaces with ordinary product and subspace topologies. A bundle whose spaces are CGWH in addition can be considered in the CGWH fibration convention; we do not silently replace an ordinary product chart by a weaker k-product-chart assumption. Products and homeomorphisms have the meanings of [[thm-product-universal-property]] and [[def-homeomorphism-and-open-maps]].

On $U_i\cap U_j$, the coordinate change has the form $(b,x)\mapsto(b,g_{ji}(b,x))$, with continuous inverse $(b,y)\mapsto(b,g_{ij}(b,y))$. In particular each $g_{ji}(b,-)$ is a homeomorphism of $F$. The identities $g_{ii}(b,x)=x$ and $g_{ki}(b,x)=g_{kj}(b,g_{ji}(b,x))$ hold because the corresponding chart composites cancel. No topology on a homeomorphism group of $F$ is assumed.

The bundle is **numerable** when the data include a partition $(\rho_i:B\to[0,1])_{i\in S}$ with locally finite cozero sets, sum one, and
$$\operatorname{supp}(\rho_i)=\overline{\{b:\rho_i(b)>0\}}\subseteq U_i.$$
This is the support-subordinate convention of [[def-partition-of-unity-subordinate-to-a-cover]]. Repeating a chart with multiple indices is allowed, so a partition subordinate to a refinement can be accompanied by an explicitly assigned original chart. Merely having pointwise finite sums or cozero containment is not this specified numerating data.

An empty base forces $E$ empty and allows the empty cover and partition. The fiber $F$ may be empty: then every chart domain, hence $E$, is empty even when $B$ is nonempty. When $F$ is nonempty the charts imply surjectivity by taking one point in the chart fiber for each particular base point; this assertion does not require choosing a simultaneous section. Over a point a chart identifies $E$ with $F$. No AC is assumed in the definition.
