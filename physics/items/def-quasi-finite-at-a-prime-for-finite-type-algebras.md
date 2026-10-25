---
id: def-quasi-finite-at-a-prime-for-finite-type-algebras
kind: definition
title: Quasi-finiteness at a prime of a finite-type algebra
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-finite-type-and-module-finite-algebras, cor-residue-field-of-a-localisation-at-a-prime, thm-localisation-commutes-with-quotients, cor-tensor-product-with-a-quotient-ring, def-tensor-product-of-modules-by-generators-and-relations, def-dimension, def-quasi-finite-morphism-classical]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Commutative Algebra, Section 10.122, Lemma 10.122.2 and Definition 10.122.3"
      url: "https://stacks.math.columbia.edu/tag/00PI"
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Definition 17.3"
      url: "https://www.jmilne.org/xnotes/CA.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Let $R\to S$ be a ring map of finite type ([[def-finite-type-and-module-finite-algebras]]),
let $\mathfrak q\in\operatorname{Spec}(S)$ be a prime, and let
$\mathfrak p=\mathfrak q\cap R$ be its contraction to $R$. Write
$\kappa(\mathfrak p)=R_{\mathfrak p}/\mathfrak pR_{\mathfrak p}
\cong\operatorname{Frac}(R/\mathfrak p)$ for the residue field
([[cor-residue-field-of-a-localisation-at-a-prime]]).

The map $R\to S$ is **quasi-finite at $\mathfrak q$** when the
$\kappa(\mathfrak p)$-algebra

$$ S_{\mathfrak q}/\mathfrak pS_{\mathfrak q} $$

is **finite** over $\kappa(\mathfrak p)$, that is, finitely generated as a
$\kappa(\mathfrak p)$-module, equivalently finite-dimensional over
$\kappa(\mathfrak p)$ ([[def-dimension]]); the quotient is a
$\kappa(\mathfrak p)$-algebra because $\mathfrak pS_{\mathfrak q}$ is the
extension of the ideal $\mathfrak p$. The map $R\to S$ is **quasi-finite**
when it is of finite type and quasi-finite at every prime of $S$.

**The fibre form.** The **fibre** of $\operatorname{Spec}(S)\to\operatorname{Spec}(R)$
over $\mathfrak p$ is $\operatorname{Spec}\bigl(S\otimes_{R}\kappa(\mathfrak p)\bigr)$
([[def-tensor-product-of-modules-by-generators-and-relations]]). The prime
$\mathfrak q$ determines a prime $\overline{\mathfrak q}$ of the fibre, and the
local ring of the fibre at that prime is $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$.
Indeed the quotient and tensor laws identify
$S\otimes_{R}\kappa(\mathfrak p)\cong S_{\mathfrak p}/\mathfrak pS_{\mathfrak p}$
(locally on the base use [[cor-tensor-product-with-a-quotient-ring]] over the
local ring $R_{\mathfrak p}$ and [[thm-localisation-commutes-with-quotients]]),
and localising that $\kappa(\mathfrak p)$-algebra at the prime
$\overline{\mathfrak q}$ and quotienting by $\mathfrak p$ recovers
$S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$. Either description may be used as
the definition: the two are related by these canonical identifications, and
all items on this page use whatever form makes the step at hand shortest.

**Conventions kept here.** (i) The definition is phrased only at a prime of
$S$ and never requires a chosen closed point, so it applies to nonreduced
rings, to noninjective maps, and to primes of arbitrarily large residue field.
(ii) A fibre may be empty or may have infinitely many primes; quasi-finiteness
is a condition at one prime at a time, and the map is quasi-finite only when
the condition holds at all primes of $S$. (iii) This is distinct from the
classical closed-point convention of [[def-quasi-finite-morphism-classical]],
which tests only closed-point fibres of classical varieties over an
algebraically closed field; the algebraic notion above is the one used by the
Zariski Main Theorem on this page.
