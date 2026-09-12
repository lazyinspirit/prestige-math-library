---
id: "def-mapping-path-space-replacement-of-a-map"
kind: "definition"
title: "Mapping path space replacement of a map"
deps: ["lem-interval-exponential-law-and-quotient-homotopies", "thm-product-universal-property", "def-subspace-topology-top"]
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

For a continuous map $f:X\to Y$, let $Y^I=C_0(I,Y)$ with the ordinary compact-open topology. Define
$$E_f=\{(x,\gamma)\in X\times Y^I:\gamma(0)=f(x)\},\qquad p_f(x,\gamma)=\gamma(1),\qquad j_f(x)=(x,c_{f(x)}),$$
where $c_y$ is the constant path with value $y$. These use the product and subspace topologies of [[thm-product-universal-property]] and [[def-subspace-topology-top]]. They are called the **mapping-path space**, its **endpoint projection**, and its **constant-path inclusion**.

Evaluation is continuous by [[lem-interval-exponential-law-and-quotient-homotopies]], so $p_f$ is continuous. The constant-path map $x\mapsto c_{f(x)}$ is continuous by transposing $(x,t)\mapsto f(x)$; pairing with $x$ and restricting to $E_f$ shows that $j_f$ is continuous. Also let $r_f(x,\gamma)=x$; this is continuous as a restricted product projection. No arbitrary selection of paths is part of these definitions.

For CGWH spaces use the kified path space, k-product and kified indicated subspace instead; the same interval exponential law supplies these maps. Empty $X$ gives empty $E_f$. If $Y$ is empty then the existence of $f$ already forces $X$ empty. For a one-point domain this is the space of paths starting at its specified image; for a one-point target it identifies with $X$. The factorization and homotopy claims are proved next.
