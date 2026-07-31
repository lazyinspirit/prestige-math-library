---
id: def-integers-modulo-n
kind: definition
title: "The congruence class $[a]_n$ and the quotient set $\\mathbb Z/n$"
status: published
origin: session
deps: [lem-congruence-is-an-equivalence-relation, def-equivalence-relation, lem-equivalence-classes-partition]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
pipeline_run: null
---

## Definition

Fix an integer $n$. Congruence modulo $n$ is an equivalence relation on
$\mathbb Z$ by [[lem-congruence-is-an-equivalence-relation]]. The
**congruence class of $a$ modulo $n$** is

$$[a]_n:=\{\,b\in\mathbb Z:b\equiv a\pmod n\,\},$$

and the **integers modulo $n$** form the quotient set

$$\mathbb Z/n:=\{\,[a]_n:a\in\mathbb Z\,\}.$$

This is the quotient-set construction of [[def-equivalence-relation]]. By
[[lem-equivalence-classes-partition]], two classes are equal exactly when their
representatives are congruent:

$$[a]_n=[b]_n\quad\Longleftrightarrow\quad a\equiv b\pmod n.$$

At $n=0$ each class is a singleton because congruence modulo $0$ is equality.
At $n=1$ there is one class, namely $\mathbb Z$ itself.

## Remarks

- The notation $\mathbb Z/n$ in this item denotes a quotient set. It does not
  yet assert any algebraic structure.
- Since congruence modulo $n$ and modulo $-n$ are the same relation, their
  quotient sets are literally the same collection of subsets of $\mathbb Z$.
