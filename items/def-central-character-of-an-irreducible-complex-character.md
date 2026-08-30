---
id: def-central-character-of-an-irreducible-complex-character
kind: definition
title: "The central character of an irreducible complex character"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-class-sum-of-a-conjugacy-class-in-k-g, def-irreducible-complex-character, prop-basic-value-properties-of-a-complex-character]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Anupam Singh, Representation Theory of Finite Groups, Chapter 15"
      url: "https://arxiv.org/pdf/1001.0462.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 3.5"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Definition

Let $G$ be a finite group, let $\chi$ be an irreducible complex character of
$G$, and let $C$ be a conjugacy class of $G$ with class sum $\widehat C$
([[def-class-sum-of-a-conjugacy-class-in-k-g]]).

The **central character** of $\chi$ is the function on class sums defined by

$$\omega_\chi(\widehat C):=\frac{|C|\,\chi(g)}{\chi(1)} \qquad(g\in C).$$

This is well defined because $\chi$ is a class function
([[prop-basic-value-properties-of-a-complex-character]]), so the value does not
depend on the chosen $g\in C$, and $\chi(1)>0$ for an irreducible character.
