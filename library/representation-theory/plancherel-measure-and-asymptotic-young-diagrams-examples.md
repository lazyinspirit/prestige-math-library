---
page: plancherel-measure-and-asymptotic-young-diagrams-examples
title: "Plancherel Measure and Asymptotic Young Diagrams — Examples"
status: draft
requires: [plancherel-measure-and-asymptotic-young-diagrams]
items: []
examples:
  - cex-plancherel-measure-is-not-uniform-on-partitions
  - ex-plancherel-measure-on-partitions-of-three
  - ex-rsk-shapes-of-all-six-permutations-in-s3
---

These examples keep the Plancherel measure of
[[plancherel-measure-and-asymptotic-young-diagrams]] visible at the smallest
interesting order. The case $n=3$ is computed twice: first from the
standard-tableau counts $f^{(3)}=f^{(1^3)}=1$, $f^{(2,1)}=2$ and the hook
length formula, giving the weights $1/6,4/6,1/6$ and their sum
([[ex-plancherel-measure-on-partitions-of-three]]), and then by running
Robinson-Schensted row insertion on all six permutations of $\{1,2,3\}$,
which produces the same frequency vector and confirms the shape law at $n=3$
([[ex-rsk-shapes-of-all-six-permutations-in-s3]]). The counterexample
[[cex-plancherel-measure-is-not-uniform-on-partitions]] records that these
weights are not uniform on the three partitions: the middle shape carries four
times the weight of either extreme shape, and for every $n\ge3$ the shapes
$(n)$ and $(2,1^{n-2})$ separate the Plancherel weights from the uniform
weights. No fluctuations, edge statistics or sharp constants are exhibited
here; the examples illustrate the qualitative limit theory of the companion
page only at the level of the measure itself.
