---
id: def-seifert-form-s-equivalence
kind: definition
title: "S-equivalence of integral Seifert forms"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-seifert-pairing-and-matrix
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Stavros Garoufalidis and Peter Teichner, On Knots with Trivial Alexander Polynomial"
      url: "https://people.math.gatech.edu/~stavros/publications/teichner1.pdf"
      locator: "§3, Definition 3.2 and the matrix of an algebraic tube addition, printed pp.3–4"
    - title: "H. F. Trotter, On S-equivalence of Seifert Matrices"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0020/LOG_0020.pdf"
      locator: "Inventiones Mathematicae 20 (1973), pp.173–207"
---

## Definition

Let $V$ be an integral Seifert matrix in the positive-push convention $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. Two integral Seifert forms are **S-equivalent** when they are related by a finite sequence of integral unimodular basis changes and algebraic tube additions or their inverses. A basis change replaces $V$ by $P^T V P$ for $P\in\operatorname{GL}_m(\mathbb Z)$. A tube addition replaces $V$ by
$$\begin{pmatrix} V&0&\rho\\ 0&0&1\\ \rho^T&0&0 \end{pmatrix},\qquad \rho\in\mathbb Z^m,$$
where the two new basis elements are the short and long curves of the added tube. The **empty Seifert form** is the unique bilinear form on the zero module, represented by the $0\times0$ matrix.

## Definition references

[[def-knot-seifert-pairing-and-matrix|The positive-push convention and integral Seifert matrices]]

Stavros Garoufalidis and Peter Teichner, “On Knots with Trivial Alexander Polynomial,” §3, Definition 3.2 and the tube-addition matrix, https://people.math.gatech.edu/~stavros/publications/teichner1.pdf

H. F. Trotter, “On S-equivalence of Seifert Matrices,” *Inventiones Mathematicae* 20 (1973), 173–207, https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0020/LOG_0020.pdf
