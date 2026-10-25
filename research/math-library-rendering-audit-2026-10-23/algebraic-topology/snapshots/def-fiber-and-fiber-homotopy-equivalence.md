---
id: "def-fiber-and-fiber-homotopy-equivalence"
kind: "definition"
title: "Fiber and fiber homotopy equivalence"
deps: ["def-subspace-topology-top", "def-homotopy-equivalence"]
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

For a continuous $p:E\to B$ and $b\in B$, its **fiber over $b$** is $F_b=p^{-1}(\{b\})$ with the subspace topology of [[def-subspace-topology-top]]; in CGWH constructions take the kified subspace. The fiber may be empty.

Given $p:E\to B$ and $q:E'\to B$, a **map over $B$** is a continuous $u:E\to E'$ with $qu=p$. A **homotopy over $B$** between such maps is $H:E\times I\to E'$ satisfying $qH(e,t)=p(e)$ at every time. A **fiber homotopy equivalence** is a map $u$ over $B$ for which a map $v:E'\to E$ over $B$ exists with $vu\simeq\mathrm{id}_E$ and $uv\simeq\mathrm{id}_{E'}$ through homotopies over $B$. This strengthens [[def-homotopy-equivalence]] by fixing every base coordinate.

Restriction gives ordinary homotopy equivalences $F_b\simeq F'_b$. In particular an empty fiber cannot be fiber homotopy equivalent to a nonempty one. When $B$ is one point this is precisely ordinary homotopy equivalence; when $B$ is empty both total spaces are empty. Comparing fibers over two different points as spaces is not itself a map over the original base. These definitions require no AC.
