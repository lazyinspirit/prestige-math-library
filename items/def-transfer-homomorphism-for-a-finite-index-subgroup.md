---
id: def-transfer-homomorphism-for-a-finite-index-subgroup
kind: definition
title: "Transfer homomorphism for a finite index subgroup"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-coset, def-group-homomorphism, lem-coset-membership-and-equality]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Paul Flavell, An Introduction to Transfer and Fusion in Finite Groups, §§2–5"
      url: "https://web.mat.bham.ac.uk/P.J.Flavell/fusion.pdf"
      locator: "§§2–5, PDF pp. 1–15"
    - title: "Hans Kurzweil and Bernd Stellmacher, The Theory of Finite Groups, §§7.1–7.2"
      url: "https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf"
      locator: "§§7.1–7.2, printed pp. 163–171"
verification:
  precheck: n/a
---

## Definition

Let $G$ be a finite group, let $H\le G$ be a subgroup, let $A$ be an abelian
group written multiplicatively, and let $\varphi:H\to A$ be a group
homomorphism ([[def-group-homomorphism]]). Write $H\backslash G$ for the set of
right cosets $Ht$ of $H$ in $G$ ([[def-coset]]), and for each coset
$\alpha=Ht_{\alpha}\in H\backslash G$ choose a representative $t_{\alpha}$.

**The transfer.** For $x\in G$ the **transfer** of $\varphi$ is

$$V_{\varphi}(x):=\prod_{\alpha\in H\backslash G}\varphi\!\left(t_{\alpha}\,x\,t_{\alpha x}^{-1}\right), \qquad\text{where }\alpha x:=Ht_{\alpha}x .$$

Two comments make the displayed formula a definition rather than a shorthand.

1. *Each factor lies in $H$, so $\varphi$ is evaluated inside its domain.* The
   coset $\alpha x=Ht_{\alpha}x$ is a right coset of $H$, with the chosen
   representative $t_{\alpha x}$; hence $t_{\alpha}x\,t_{\alpha x}^{-1}\in H$,
   because $t_{\alpha}x$ and $t_{\alpha x}$ represent the same right coset
   ([[lem-coset-membership-and-equality]]).
2. *The product is well defined although the coset set is unordered.* The index
   set $H\backslash G$ is finite, and $A$ is abelian, so the product of the
   finitely many elements $\varphi(t_{\alpha}xt_{\alpha x}^{-1})\in A$ does not
   depend on the order in which the factors are written; the factor attached to
   the coset $\alpha$ is determined by $\alpha$, $x$, the chosen representatives
   and $\varphi$.

The definition of $V_\varphi$ therefore depends on the chosen transversal
$\{t_{\alpha}\}$; the fact that it does not depend on that choice is proved in
[[lem-transfer-is-independent-of-the-transversal]], and the fact that
$V_\varphi:G\to A$ is a homomorphism is proved in
[[lem-transfer-is-a-homomorphism]].

## Remarks

- **Right action convention.** The symbol $\alpha x$ denotes right
  multiplication on the coset, $\alpha x=Ht_{\alpha}\cdot x$, and the coset
  assignment $\alpha\mapsto\alpha x$ is a permutation of the finite set
  $H\backslash G$. The transfer is thus built from the right action of $G$ on
  its right cosets of $H$, the choice that makes every factor
  $t_{\alpha}xt_{\alpha x}^{-1}$ lie in $H$; with left cosets the analogous
  factor is $t_{x\alpha}^{-1}xt_{\alpha}$, where
  $\alpha=t_{\alpha}H$ and $x\alpha=xt_{\alpha}H=t_{x\alpha}H$.

- **Abelian target.** Abelianness of $A$ is used only to make the ordering of
  the product irrelevant; the elements $\varphi(\cdot)$ need not commute in a
  nonabelian target, and the construction is not made there.

- **Group-theoretic role.** The transfer is the tool that converts information
  about the $p$-part of $G$ into a homomorphism into an abelian quotient of a
  Sylow subgroup; it is applied in
  [[thm-burnside-normal-p-complement-theorem]] and
  [[lem-fusion-control-gives-a-nontrivial-p-quotient-of-the-p-residual]].
