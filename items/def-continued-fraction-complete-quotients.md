---
id: def-continued-fraction-complete-quotients
kind: definition
title: "Complete quotients in the continued-fraction algorithm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-field, def-regular-continued-fraction, lem-nat-embeds-int, thm-of-archimedean, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "William Stein, Elementary Number Theory: Primes, Congruences, and Secrets"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Definition

Work in the complete ordered field of real numbers
([[def-complete-ordered-field]]). For a real number $\alpha$, set
$$\alpha_0 := \alpha.$$
Given $\alpha_n$, the Archimedean property ([[thm-of-archimedean]]) and the
well-ordering principle ([[thm-well-ordering-principle]]) produce a unique
integer $a_n$ with
$$a_n \le \alpha_n < a_n+1.$$

For completeness, here is that construction. Choose positive integers $r,s$
with $-r<\alpha_n<s$ by Archimedeanness, and let
$$T:=\{k\in\mathbb N:\alpha_n<-r+k\}.$$
The set $T$ is nonempty because $r+s\in T$, so it has a least element $k_0$.
Since $-r<\alpha_n$, one has $k_0>0$; write $k_0=j+1$. Minimality gives
$-r+j\le\alpha_n<-r+j+1$, so $a_n:=-r+j$ works. If two integers satisfied
the displayed inequalities, discreteness of the integer order would put one
at least $1$ above the other and contradict the upper inequality, proving
uniqueness.
If $\alpha_n \ne a_n$, define the next **complete quotient**
$$\alpha_{n+1} := \frac{1}{\alpha_n-a_n}.$$

Thus the continued-fraction algorithm associates to $\alpha$ its integer parts
$a_n$ and its successive complete quotients $\alpha_n$. Whenever
$\alpha_{n+1}$ is defined, one has $0 < \alpha_n-a_n < 1$ and therefore
$\alpha_{n+1} > 1$, so every later digit $a_{n+1},a_{n+2},\ldots$ is positive.
