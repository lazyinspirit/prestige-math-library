---
id: def-monomial-representation-and-m-group
kind: definition
title: "Monomial representations, monomial characters, and M-groups"
status: draft
origin: pipeline
deps: [def-subgroup, def-finite-dimensional-representation-of-a-group-over-a-field, def-induced-r-linear-g-module-by-h-covariant-functions, def-induced-character-of-a-complex-representation, def-irreducible-complex-character, def-character-of-a-complex-representation, thm-complex-representations-are-determined-by-their-characters, cor-dimension-of-an-induced-finite-dimensional-representation]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — §4.3, printed pp. 57–58, and §4.6, printed pp. 64–65"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Wen-Wei Li, Yanqi Lake Lectures on Algebra I — Definition 12.5.1 and Theorem 12.5.6, printed pp. 146–148"
      url: "https://www.wwli.asia/downloads/YAlg1.pdf"
    - title: "SLMath, Character Theory of Finite Groups, Chapter 9 — slides 375–378"
      url: "https://www.slmath.org/ckeditor_assets/attachments/500/characters.pdf"
---

## Definition

Throughout this page $G$ is a finite group, "representation" means a
finite-dimensional complex representation
([[def-finite-dimensional-representation-of-a-group-over-a-field]]), and
$H\le G$ means that $H$ is a subgroup of $G$ ([[def-subgroup]]).

A **linear character** of a finite group $H$ is a group homomorphism
$\lambda:H\to\mathbb C^\times$. Equivalently it is a one-dimensional complex
character of $H$, namely the character of the one-dimensional representation
on which $h$ acts as multiplication by $\lambda(h)$
([[def-character-of-a-complex-representation]]). Its kernel is
$\ker\lambda=\{h\in H:\lambda(h)=1\}$, the kernel of that representation.

**Monomial representation.** A nonzero finite-dimensional complex
$G$-representation $V$ is **monomial** if there are a subgroup $H\le G$ and a
one-dimensional $H$-representation $L$ with

$$ V\cong\operatorname{Ind}_H^G L $$

as complex $G$-representations
([[def-induced-r-linear-g-module-by-h-covariant-functions]]). Such an $L$ is
determined by the linear character $\lambda:H\to\mathbb C^\times$ that is its
representing map, and one writes $\operatorname{Ind}_H^G\lambda$ for
$\operatorname{Ind}_H^G L$.

**Monomial character.** A complex character $\chi$ of $G$ is **monomial** if
there are a subgroup $H\le G$ and a linear character $\lambda$ of $H$ with

$$ \chi=\operatorname{Ind}_H^G\lambda $$

([[def-induced-character-of-a-complex-representation]]).

**$M$-group.** A finite group $G$ is an **$M$-group** if every irreducible
complex character of $G$ is monomial
([[def-irreducible-complex-character]]). Since a nonzero representation is
monomial exactly when its character is, by
[[thm-complex-representations-are-determined-by-their-characters]] together
with the defining equation $\chi_{\operatorname{Ind}_H^G L}
=\operatorname{Ind}_H^G\chi_L$ of the induced character, this is equivalent to
asking that every irreducible complex representation of $G$ is monomial.

## Remarks

- If $\chi=\operatorname{Ind}_H^G\lambda$ is monomial with $\lambda$ linear,
  then $\chi(1)=[G:H]\dim L=[G:H]$, so an induced character is linear exactly
  when $H=G$ ([[cor-dimension-of-an-induced-finite-dimensional-representation]]).
  Consequently a nonlinear monomial irreducible of $G$ is induced from a
  *proper* subgroup.

- The definition quantifies over honest irreducible characters. An integral
  combination of monomial characters need not be an irreducible character and
  need not be monomial itself, so exhibiting a virtual character as a
  $\mathbb Z$-combination of induced linear characters says nothing about
  whether a *given* irreducible is one of the summands. The page keeps the
  Brauer-type statement for virtual characters and the $M$-group property
  strictly apart.

- All conventions above are the ones used later on this page: induction is the
  covariant-function model of the linked definition, characters are complex,
  and "linear" always means one-dimensional.
