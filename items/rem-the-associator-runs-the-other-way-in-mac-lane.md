---
id: rem-the-associator-runs-the-other-way-in-mac-lane
kind: remark
title: "Mac Lane writes the associator in the opposite direction"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monoidal-category]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Chapter 2.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

Mac Lane's convention is the inverse of the one fixed in
[[def-monoidal-category]]. This page writes

$$\alpha_{X,Y,Z}:((X\otimes Y)\otimes Z)\longrightarrow X\otimes(Y\otimes Z),$$

while Mac Lane's $a_{X,Y,Z}$ points

$$a_{X,Y,Z}:X\otimes(Y\otimes Z)\longrightarrow (X\otimes Y)\otimes Z.$$

Thus $a_{X,Y,Z}=\alpha_{X,Y,Z}^{-1}$ and
$\alpha_{X,Y,Z}=a_{X,Y,Z}^{-1}$. The page keeps this warning separate so that a
reader comparing formulas with Mac Lane does not mistake a convention change
for a mathematical disagreement.
