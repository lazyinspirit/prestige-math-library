---
id: def-induced-class-function-on-a-finite-group
kind: definition
title: "Induced class functions and restricted class functions"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-class-function-and-the-space-of-complex-class-functions, def-induced-character-of-a-complex-representation, thm-frobenius-formula-for-induced-characters, def-subgroup]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Alex Bartel, Introduction to Representation Theory of Finite Groups, §6.1"
      url: "https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf"
      locator: "§6.1, Definition 6.1 through Theorem 6.5, printed pp. 28–30"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, §4.3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
      locator: "§4.3, Proposition 4.3.5 and Corollary 4.3.8"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Let $G$ be a finite group, let $H\le G$ be a subgroup, and let
$\theta\in\mathrm{cf}(H)$ be a complex class function on $H$
([[def-class-function-and-the-space-of-complex-class-functions]],
[[def-subgroup]]).

**Induction.** The **induced class function** $\operatorname{Ind}_H^G\theta\in
\mathrm{cf}(G)$ is defined by the Frobenius formula
$$\operatorname{Ind}_H^G\theta(g):=\frac1{|H|}\sum_{\substack{x\in G\\ x^{-1}gx\in H}}\theta\bigl(x^{-1}gx\bigr), \qquad g\in G .$$
The sum is over the finite set of $x\in G$ with $x^{-1}gx\in H$, and each
summand is a complex number, so the formula is well defined; the normalising
factor $1/|H|$ is the one used for honest induced characters in
[[thm-frobenius-formula-for-induced-characters]].

**Restriction.** For $\psi\in\mathrm{cf}(G)$ the **restricted class function**
$\operatorname{Res}_H^G\psi\in\mathrm{cf}(H)$ is the restriction
$\psi|_H$. It is a class function because the conjugating elements in the
equation $f(hkh^{-1})=f(k)$ for $k,h\in H$ are also elements of $G$.

**Elementary properties.** The definition is arranged so that the following
three statements hold; each is a direct computation from the displayed sum.

1. $\operatorname{Ind}_H^G\theta$ is a class function on $G$: for $t,g\in G$ the
   substitution $y=tx$ is a bijection from $\{x\in G:x^{-1}gx\in H\}$ onto
   $\{y\in G:y^{-1}(tgt^{-1})y\in H\}$, because
   $(tx)^{-1}(tgt^{-1})(tx)=x^{-1}gx$, and then
   $\operatorname{Ind}_H^G\theta(tgt^{-1})=\operatorname{Ind}_H^G\theta(g)$.
2. Induction is $\mathbb C$-linear in $\theta$: for
   $\theta_1,\theta_2\in\mathrm{cf}(H)$ and $\lambda\in\mathbb C$ one has
   $\operatorname{Ind}_H^G(\theta_1+\theta_2)=\operatorname{Ind}_H^G\theta_1+
   \operatorname{Ind}_H^G\theta_2$ and
   $\operatorname{Ind}_H^G(\lambda\theta)=\lambda\operatorname{Ind}_H^G\theta$,
   because both sides are the same finite sum of values of
   $\theta_1+\theta_2$, respectively $\lambda\theta$.
3. If $\theta=\chi$ is the character of a finite-dimensional complex
   representation of $H$, then $\operatorname{Ind}_H^G\chi$ as defined here is
   the honest induced character of
   [[def-induced-character-of-a-complex-representation]]: this is exactly the
   content of the Frobenius formula
   [[thm-frobenius-formula-for-induced-characters]].

The map $\theta\mapsto\operatorname{Ind}_H^G\theta$ is thus a $\mathbb C$-linear
map $\mathrm{cf}(H)\to\mathrm{cf}(G)$ extending the honest induction of
characters; no claim of positivity, integrality or dependence only on a
character is made for a general $\theta$.

## Remarks

- **Why class functions are needed.** The Frobenius kernel argument of this page
  applies induction to the virtual character
  $\theta=\varphi-\varphi(1)1_H$ of [[lem-frobenius-character-extension-construction]],
  which is not an honest character, and the library defines
  $\operatorname{Ind}_H^G\chi$ only for honest characters
  ([[def-induced-character-of-a-complex-representation]]). The display above is
  the unique $\mathbb C$-linear extension of that construction, so
  [[lem-zero-at-identity-induction-restriction-for-a-frobenius-complement]] and
  [[lem-frobenius-character-extension-construction]] may apply it to
  $\theta$. For an honest character $\chi$ of $H$ the two notions agree, by
  property 3.

- **Value at the identity.** At $g=1$ every $x\in G$ contributes to the defining
  sum, and $x^{-1}1x=1$, so
  $\operatorname{Ind}_H^G\theta(1)=\frac{1}{|H|}\sum_{x\in G}\theta(1) = [G:H]\theta(1)$.
  The normalising factor $1/|H|$ is therefore what makes induction of the
  trivial character return
  $[G:H]$; for the virtual character $\theta=\varphi-\varphi(1)1_H$ of the
  kernel argument one has $\theta(1)=0$, so
  $\operatorname{Ind}_H^G\theta(1)=0$.

- **Reciprocity.** The $\mathbb C$-bilinear pairing between induction and
  restriction is recorded in
  [[lem-induction-restriction-reciprocity-for-class-functions]].
