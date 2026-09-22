---
id: lem-pmea-three-quarter-separation-estimate
kind: lemma
title: "The PMEA three-quarter separation estimate"
status: published
origin: pipeline
deps: [def-product-measure-extension-axioms-pmea-and-pmea-sigma, def-normalized-families-and-collectionwise-normality, def-first-countable-top, def-discrete-family-and-sigma-bases, def-topological-space, def-neighbourhood-top, def-normal-and-t4-spaces]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Real-valued-measurable cardinals"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/rvmc.pdf"
      locator: "Lemma 8E and its proof, printed p. 70"
verification:
  audited: 2026-09-22
---

## Statement

Assume PMEA ([[def-product-measure-extension-axioms-pmea-and-pmea-sigma]]). Let
$X$ be a normal space ([[def-normal-and-t4-spaces]]), let
$\{F_i : i \in I\}$ be a discrete family of subsets of $X$
([[def-discrete-family-and-sigma-bases]]), and for each $x \in X$ let
$\mathcal U_x$ be a downwards-directed family of neighbourhoods of $x$
([[def-neighbourhood-top]]) such that $|\mathcal U_x| < \mathfrak c$ and:
whenever $G \subseteq X$ is open,
$i \in I$ and $x \in F_i \subseteq G$, there is $U \in \mathcal U_x$ with
$U \subseteq G$. Then there is a function $x \mapsto U^x$ with
$U^x \in \mathcal U_x$ and $U^x \cap U^y = \varnothing$ whenever $x \in F_i$,
$y \in F_j$ with $i \ne j$.

If $X$ is first countable ([[def-first-countable-top]]) and only PMEA-$\sigma$
is assumed, the same conclusion holds for countable families $\mathcal U_x$ of
open neighbourhoods of $x$ that are local bases.

## Facts & Assumptions

**Given:** A normal space $X$, a discrete family $\{F_i : i \in I\}$, families $\mathcal U_x$ of neighbourhoods of the points as in the statement, and a full extension $\nu$ of the fair-coin product measure on $2^I$ ([[def-product-measure-extension-axioms-pmea-and-pmea-sigma]]).

[F1] Under PMEA, $\nu$ may be taken $\mathfrak c$-additive; under PMEA-$\sigma$ it may be taken countably additive. Consequently, if $\{A_t\}$ is an upwards-directed family of subsets of $2^I$ of cardinality $<\mathfrak c$ in the first case and countable in the second, covering $2^I$, then $\sup_t \nu(A_t) = 1$ (Fremlin, Lemma 8E and the continuity-from-below consequence of [[def-product-measure-extension-axioms-pmea-and-pmea-sigma]]).

[F2] $\nu$ agrees with $\mu_I$ on cylinders; in particular, for distinct $i,j \in I$ the event $\{z : z(i) \ne z(j)\}$ has measure $1/2$ ([[def-product-measure-extension-axioms-pmea-and-pmea-sigma]]).

[L1] For each $z \in 2^I$, the closures of $\bigcup_{z(i)=1}F_i$ and $\bigcup_{z(i)=0}F_i$ are disjoint. Indeed, if a point lay in both closures, a neighbourhood meeting at most one member of the discrete family would have to meet one member from each complementary subfamily, a contradiction. Normality therefore supplies disjoint open sets containing the two original subunions ([[def-discrete-family-and-sigma-bases]], [[def-normal-and-t4-spaces]]). No individual $F_i$ is asserted closed.

[L2] Probabilities are monotone, and $\nu(2^I \setminus A) = 1 - \nu(A)$ ([[def-product-measure-extension-axioms-pmea-and-pmea-sigma]]).

## Proof

**Proof technique:** direct.

1.1 For $z \in 2^I$ choose disjoint open $G_z, H_z$ containing respectively the closures of $\bigcup_{z(i)=1}F_i$ and $\bigcup_{z(i)=0}F_i$, by normality via [L1]. In particular $F_i \subseteq G_z$ when $z(i)=1$ and $F_i \subseteq H_z$ when $z(i)=0$. [given, L1]

2.1 For $x \in F_i$ and $U \in \mathcal U_x$ put $A(x,U) := \{\, z : z(i)=1 \text{ and } U \subseteq G_z, \text{ or } z(i)=0 \text{ and } U \subseteq H_z \,\}$. If $V\subseteq U$, then $A(x,V)\supseteq A(x,U)$. Because $\mathcal U_x$ is downwards directed, the events $A(x,U)$ are therefore upwards directed. They cover $2^I$: for $z$ with $z(i)=1$ we have $F_i \subseteq G_z$, so the hypothesis on $\mathcal U_x$ gives $U \subseteq G_z$, and symmetrically for $z(i)=0$. [step 1.1, given]

3.1 For $x \in F_i$ there is $U^x \in \mathcal U_x$ with $\nu(A(x,U^x)) > 3/4$: the family $\{A(x,U)\}$ is upwards directed, of cardinality $< \mathfrak c$, and covers $2^I$, so its measures have supremum $1$ by [F1]. [step 2.1, F1]

4.1 If $x \in F_i$, $y \in F_j$ with $i \ne j$, then $\nu(A(x,U^x) \cap A(y,U^y) \cap \{z : z(i) \ne z(j)\}) > 0$: the first two complements have measure strictly below $1/4$ by step 3.1, while the complement of the difference event has measure $1/2$ by [F2]. Hence the complement of the displayed intersection has measure strictly below $1/4+1/4+1/2=1$ by subadditivity, so the intersection has positive measure. [step 3.1, F2, L2]

5.1 Choose $z$ in that intersection. Since $z(i) \ne z(j)$, either $z(i)=1$, $z(j)=0$, so that $U^x \subseteq G_z$, $U^y \subseteq H_z$ and $U^x \cap U^y \subseteq G_z \cap H_z = \varnothing$, or the reverse. Hence $U^x \cap U^y = \varnothing$. [step 4.1, step 1.1]

5.2 In the PMEA-$\sigma$, first countable case the same argument applies with countable local bases. Such a base is downwards directed: for $U,V$ in the base, $U\cap V$ is a neighbourhood of $x$, so some base member lies inside it. Thus the upwards-directed countable cover $\{A(x,U) : U \in \mathcal U_x\}$ has a member of measure $> 3/4$ by countable additivity, and steps 4.1 and 5.1 are unchanged. [step 3.1, step 4.1, F1]

6.1 Steps 3.1 and 5.1 give the required assignment under PMEA, and step 5.2 gives it under PMEA-$\sigma$ for first countable $X$. [step 3.1, step 5.1, step 5.2] ∎

## Remarks

- **The numbers.** Two events of measure above $3/4$ overlap in measure above $1/2$, and the difference event has measure exactly $1/2$; a point of the triple overlap separates the two chosen neighbourhoods. The companion page computes this arithmetic as an example.

- **Only two coordinates are used**, through the measure of $\{z : z(i) \ne z(j)\}$.
