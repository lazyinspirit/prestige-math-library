---
id: def-group-presentation
kind: definition
title: "Group presentation by generators and relations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-free-group, def-normal-closure, def-quotient-group]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Brittenham, Group Presentations, Class Notes"
      url: "https://www.math.unl.edu/~mbrittenham2/classwk/872s07/lecnotes/slides.from.class/cls08--presentations.pdf"
pipeline_run: null
---

## Definition

Let $F(X)$ be a free group and let $R\subseteq F(X)$ be a set of words, called
**relations**. The group with presentation

$$\langle X\mid R\rangle:=F(X)/\langle\!\langle R\rangle\!\rangle_{F(X)}$$

is the quotient by the normal closure of $R$. The members of $X$ are its
**generators**. In this quotient, every relation in $R$ becomes the identity,
as do all consequences forced by normality.
