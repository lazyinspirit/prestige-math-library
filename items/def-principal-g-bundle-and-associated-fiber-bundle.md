---
id: "def-principal-g-bundle-and-associated-fiber-bundle"
kind: "definition"
title: "Principal g bundle and associated fiber bundle"
deps: ["def-topological-group", "def-locally-trivial-fiber-bundle", "thm-quotient-universal-property"]
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
    - title: "Peter Selick, MAT1345 lecture notes"
      url: "https://www.math.toronto.edu/selick/mat1345/notes.pdf"
      locator: "Chapter 1 Definition 1.1.4 p.2, associated construction p.3, section 1.2 pullback paragraph pp.7–8; right-action convention translated explicitly"
status: published
origin: "pipeline"
justified_by: ["prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback"]
---

## Definition

Let $G$ be a topological group, as in [[def-topological-group]], with identity $1$. A **right principal $G$-bundle** is a continuous map $\pi:P\to B$ with a continuous right action $(p,g)\mapsto pg$, satisfying $p1=p$, $(pg)h=p(gh)$ and $\pi(pg)=\pi(p)$, together with equivariant bundle charts $\theta_i:\pi^{-1}(U_i)\cong U_i\times G$ over an open cover. Equivariance means $\theta_i(pg)=(b,ag)$ whenever $\theta_i(p)=(b,a)$. Charts use ordinary products as in [[def-locally-trivial-fiber-bundle]]. In each fiber the action is free and transitive: right multiplication on $G$ has those properties and the chart identifies the actions. Freeness alone is not the definition.

A **left $G$-space** is a topological space $F$ with a continuous map $(g,x)\mapsto gx$ such that $1x=x$ and $g(hx)=(gh)x$. Effectiveness of this action is not required. Define
$$P\times_G F=(P\times F)/\bigl((pg,x)\sim(p,gx)\bigr)$$
with the ordinary quotient topology, and write $[p,x]$ for its points. Precisely, the relation is the orbit relation of the right action $(p,x)\cdot g=(pg,g^{-1}x)$. Its action law is $((p,x)\cdot g)\cdot h=(pgh,h^{-1}g^{-1}x)=(p,x)\cdot(gh)$, and its generating relations are exactly the displayed ones. Thus the equivalence relation and quotient are defined without choosing orbit representatives.

The projection $r([p,x])=\pi(p)$ is well-defined and continuous by [[thm-quotient-universal-property]], since $(p,x)\mapsto\pi(p)$ is continuous and constant on every orbit. This is the **associated fiber-bundle construction**; the next proposition proves its local triviality and pullback property. The quotient construction and projection already make sense before that proof.

If $B$ is empty then $P$ is empty. If $F$ is empty the associated space is empty even for nonempty $B$; this is allowed by our bundle convention. For singleton $F$ the construction is the orbit projection of the principal bundle. For the trivial group it is the product with $F$ over the chart-identified base. No AC is used.
