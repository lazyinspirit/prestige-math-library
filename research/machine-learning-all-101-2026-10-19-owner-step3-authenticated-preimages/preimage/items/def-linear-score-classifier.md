---
id: def-linear-score-classifier
kind: definition
title: Finite linear-score classifiers with a deterministic tie rule
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Stanford CS229 Spring 2022 lecture notes"
      url: "https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf"
---

## Definition

Let $d\ge1$ and $K\ge2$ be finite integers, with ordered labels $1<2<\cdots<K$. A finite linear-score classifier on $\mathbb R^d$ is specified by vectors $a_k\in\mathbb R^d$ and constants $b_k\in\mathbb R$, one pair for each label, and assigns score $s_k(x)=a_k^Tx+b_k$ to $x\in\mathbb R^d$. Its predicted label is the smallest index attaining $\max_{1\le j\le K}s_j(x)$. This rule is single-valued, including when two or more scores tie.

## Definition references

[Hastie, Tibshirani, and Friedman, ESL, §4.2, equations (4.3)–(4.6)](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Stanford CS229 Spring 2022 lecture notes, §§2.1–2.2](https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf)
