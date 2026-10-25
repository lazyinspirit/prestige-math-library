---
id: thm-riesz-rising-sun-lemma
kind: theorem
title: "Riesz's rising sun lemma with the correct endpoint conclusion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-continuity-real, def-interval, thm-extreme-value-r, thm-open-subsets-of-r-structure]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Frigyes Riesz, Sur l’existence de la dérivée des fonctions monotones et sur quelques problèmes qui s’y rattachent, Section 2"
      url: "https://real.mtak.hu/214055/1/math_005_208-221.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, Lemma 1.6.17"
      url: "https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Statement

Let $F : [a,b] \to \mathbb{R}$ be continuous ([[def-continuity-real]]) and put

$$E := \{x \in [a,b) : \text{there is } y \in (x,b] \text{ with } F(y) > F(x)\}.$$

Then $E$ is an open subset of the subspace $[a,b)$. Equivalently, $E \cap (a,b)$ is open in
$\mathbb{R}$, and every component of $E$ is either an initial half-open
interval $[a,d)$ when $a\in E$, or an open interval $(c,d)$ with
$a \le c < d \le b$
([[thm-open-subsets-of-r-structure]]). For every component $I$ of $E$ with
left endpoint $c$ and right endpoint $d$ one has

$$F(c) \le F(d),$$

and if $c > a$ then in fact

$$F(c) = F(d).$$

Equivalently, every $x \in I$ satisfies $F(x) < F(d)$, while if $c > a$ then
$F(x) < F(c) = F(d)$ for all $x \in I$.

## Facts & Assumptions

**Given:** The continuous function $F : [a,b] \to \mathbb{R}$ and the set $E \subseteq [a,b)$ just defined.

[A1] The symbols are those of the statement.

## Proof

**Proof technique:** direct.

1.1 Let $x \in E$. Choose $y > x$ with $F(y) > F(x)$. By continuity at $x$, after shrinking if necessary there is $\varepsilon$ with $0<\varepsilon<y-x$ such that $F(t) < F(y)$ whenever $|t-x| < \varepsilon$ and $t \in [a,b]$. Every $t \in (x-\varepsilon,x+\varepsilon) \cap [a,b)$ then satisfies $t<y$ and $F(t)<F(y)$, so it also belongs to $E$. Thus $E$ is open in the subspace $[a,b)$. Therefore $E \cap (a,b)$ is open in $\mathbb{R}$, and [[thm-open-subsets-of-r-structure]] writes it as a countable disjoint union of open intervals. A component meeting the left endpoint is $[a,d)$ when $a\in E$; if $a\notin E$, an open component may instead have the form $(a,d)$. Thus every component of $E$ is either $[a,d)$ when $a\in E$, or $(c,d)$ with $a\le c<d\le b$. [given]

2.1 Fix a component $I$ of $E$, write its left endpoint as $c$ and its right endpoint as $d$, and let $x \in I$. By the extreme value theorem [[thm-extreme-value-r]], choose $t\in[x,b]$ at which $F$ attains its maximum on $[x,b]$. Since $x\in E$, some point to the right of $x$ has value greater than $F(x)$, so $t>x$ and $F(t)>F(x)$. The maximizing point $t$ does not belong to $E$. Since every point of $I$ lies in $E$, this forces $t\ge d$. If $d<b$ and $F(t)>F(d)$, then necessarily $t>d$, which would put $d$ in $E$, contrary to $d$ being the right endpoint of the component. Thus $F(t)\le F(d)$; the reverse inequality holds because $d\in[x,b]$ and $t$ is a maximizer. When $d=b$ one has $t=d$ directly. Hence in all cases $F(x)<F(t)=F(d)$. [step 1.1]

3.1 Letting $x \downarrow c$ through points of $I$ in step 2.1 and using continuity at $c$ gives $F(c) \le F(d)$. If $c > a$, then $c \notin E$, so no point to the right of $c$ has value strictly larger than $F(c)$; in particular $F(d) \le F(c)$. Hence $F(c) = F(d)$ when $c > a$. [step 2.1]

4.1 Steps 1.1 through 3.1 are exactly the claimed conclusions. [step 1.1, step 2.1, step 3.1] ∎
