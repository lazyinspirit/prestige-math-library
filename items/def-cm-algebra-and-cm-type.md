---
id: def-cm-algebra-and-cm-type
kind: definition
title: "CM algebra and CM type"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Complex Multiplication, Chapter I §1"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "§1, CM-algebras and CM-types, printed pp. 10–12."
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "§1, Preliminaries, printed pp. 2–3."
verification: {}
---

## Definition

A **CM field** is a number field $K$ that is a totally imaginary quadratic extension of a totally real number field. A number field is **totally real** if every embedding into $\mathbb C$ has image in $\mathbb R$, and **totally imaginary** if no embedding into $\mathbb C$ has image in $\mathbb R$. A **CM algebra** is a finite nonempty product $E=\prod_j K_j$ of CM fields, equipped with the involution $\bar{\phantom{x}}$ whose restriction to each factor is its unique complex-conjugation automorphism. A **CM type** on $E$ is a subset $\Phi\subset\operatorname{Hom}_{\mathbb Q\text{-alg}}(E,\mathbb C)$ containing exactly one embedding from each pair $\{\varphi,\bar\varphi\}$. Thus $|\Phi|=[E:\mathbb Q]/2$. The pair $(E,\Phi)$ is a **CM pair**.

## Definition references

[[def-number-field]]

