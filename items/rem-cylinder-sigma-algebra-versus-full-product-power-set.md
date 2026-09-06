---
id: rem-cylinder-sigma-algebra-versus-full-product-power-set
kind: remark
title: "The cylinder sigma-algebra need not be the full path-space power set"
status: draft
origin: pipeline
deps: [def-coordinate-maps-and-cylinder-sigma-algebra, lem-cylinder-sigma-events-depend-on-countably-many-coordinates]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shalizi, Building Processes, proof of Theorem 29"
      url: "https://www.stat.cmu.edu/~cshalizi/754/notes/lecture-02.pdf"
---

Assuming countable choice, for uncountable $I$ every $\mathcal C_I$-event is
determined by countably many coordinates
([[lem-cylinder-sigma-events-depend-on-countably-many-coordinates]]). Thus a
subset that is not determined by any countable coordinate set is not in
$\mathcal C_I$; such subsets occur, for example, in uncountable Bernoulli path
spaces. Consequently the extension theorems in general construct measures only
on $\mathcal C_I$, not on every subset of path space and not for every
set-defined path functional. If every coordinate space is a singleton, by
contrast, the path space is a singleton and $\mathcal C_I$ is its full power
set. The companion counterexample makes the proper-inclusion boundary concrete.
