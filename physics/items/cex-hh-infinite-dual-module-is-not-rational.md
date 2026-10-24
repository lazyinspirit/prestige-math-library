---
id: cex-hh-infinite-dual-module-is-not-rational
kind: counterexample
title: "An infinite-dimensional dual algebra with a nonrational module"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-dual-algebra-and-rational-module, def-hh-right-comodule-and-comodule-morphism, def-left-and-right-modules, def-algebraic-dual-and-linear-functional, def-hh-coalgebra-and-coalgebra-map, def-dimension, cor-independent-set-is-no-larger-than-a-finite-spanning-set]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Daniel Kongsgaard and UCSD Math 207A, Hopf Algebras Lecture Notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "§1.6, printed pp.11–15; Examples 1.15–1.16, pp.13–14; §§3.3–3.4, printed pp.36–41"
    - title: "Andrew Baker, Hopf algebras over fields: an introduction, SMSTC supplementary course notes 2026–7"
      url: "https://www.maths.gla.ac.uk/~ajb/SMSTC/HopfAlgebrasNotes.pdf"
      locator: "§2.3, printed pp.23–24"
---
## Statement refuted

For every infinite-dimensional coalgebra $C$, every unital left $C^*$-module is rational and is induced by a right $C$-comodule under the evaluation action $f\triangleright m=(\operatorname{id}\otimes f)\rho(m)$.

## Example

Let $C=\bigoplus_{n\in\mathbb N}ke_n$ with $\Delta(e_n)=e_n\otimes e_n$ and $\varepsilon(e_n)=1$. Then $C$ is infinite-dimensional and its full dual $C^*$ is the space of all sequences $(a_n)_{n\in\mathbb N}$ with pointwise multiplication. Its regular left module $M=C^*$ is not rational and cannot be induced by a right $C$-coaction.

## Facts & Assumptions

**Given:** A field $k$, the direct-sum vector space $C=\bigoplus_{n\in\mathbb N}ke_n$, its displayed structure maps, and the full algebraic dual.

[F1] A coalgebra has coassociative $\Delta$ and a two-sided counit $\varepsilon$; a coalgebra map preserves both structure maps. This item checks the axioms for its displayed example. ([[def-hh-coalgebra-and-coalgebra-map]])

[F2] $C^*=\operatorname{Hom}_k(C,k)$ has candidate convolution $(f*g)(c)=(f\otimes g)\Delta(c)$, unit $\varepsilon$, and rationality means each vector orbit has a finite tensor representative in $M\otimes C$. ([[def-hh-dual-algebra-and-rational-module]])

[F3] A unital left module has an associative action and the unit acts as identity. ([[def-left-and-right-modules]])

[F4] The full algebraic dual is the space of all linear functionals, with no support restriction on their values on the basis of a direct sum. ([[def-algebraic-dual-and-linear-functional]])

[F5] In this example, “induced by a right coaction” means that some coaction $\rho:M\to M\otimes C$ gives the action by the evaluation formula $f\triangleright m=(\operatorname{id}_M\otimes f)\rho(m)$, using the right-comodule and dual-module conventions in [[def-hh-right-comodule-and-comodule-morphism]] and [[def-hh-dual-algebra-and-rational-module]].

[F6] A vector space is infinite-dimensional exactly when it has no finite basis. If a space has a finite spanning set, it cannot contain a linearly independent subset equinumerous with $\mathbb N$. ([[def-dimension]], [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]])

## Refutation

**Given:** The coalgebra, dual algebra, regular module, and evaluation action specified above.

1.1 Every vector of $C$ has finite support. On each basis vector, $(\Delta\otimes\operatorname{id})\Delta(e_n)=e_n\otimes e_n\otimes e_n=(\operatorname{id}\otimes\Delta)\Delta(e_n)$ and $(\varepsilon\otimes\operatorname{id})\Delta(e_n)=e_n=(\operatorname{id}\otimes\varepsilon)\Delta(e_n)$. The structure maps are linear, so these equalities extend to $C$ and make the displayed structure a coalgebra. [given, F1, construct]

2.1 A functional $f\in C^*$ is determined by the sequence $a_n=f(e_n)$, and every sequence occurs: for a finite-support vector $\sum_n\lambda_ne_n$, define $f(\sum_n\lambda_ne_n)=\sum_n\lambda_na_n$. The convolution satisfies $(f*g)(e_n)=f(e_n)g(e_n)$, so under this identification $C^*$ is the pointwise algebra $k^{\mathbb N}$ with unit $\varepsilon=(1,1,\ldots)$. The basis vectors $e_n$ are linearly independent in $C$, and the coordinate functionals $\delta_n$ are linearly independent in $C^*$ because evaluating a finite linear relation at $e_j$ recovers its $j$th coefficient. Both independent sets are equinumerous with $\mathbb N$. By [F6], neither $C$ nor $C^*$ has a finite spanning set, hence neither has a finite basis; both are infinite-dimensional by [F6]. [F2, F4, F6, step 1.1, algebra]

3.1 The regular action $f\triangleright m:=f*m$ makes $M=C^*$ a unital left module because the pointwise product is associative and $\varepsilon$ is its unit. At its unit vector $m=\varepsilon$, the orbit map is $C^*\to C^*$, $f\mapsto f\triangleright\varepsilon=f$. Its image is all of the infinite-dimensional space $C^*$. If $\varepsilon$ were rational, some finite tensor $t=\sum_{i=1}^r m_i\otimes c_i$ would represent this orbit, so every $f\triangleright\varepsilon=(\operatorname{id}\otimes f)t$ would lie in the finite-dimensional span of $m_1,\dots,m_r$, a contradiction. Thus $M$ is not rational. [F2, F3, step 2.1, construct]

4.1 If a right coaction $\rho:M\to M\otimes C$ induced the regular action, write its finite tensor $\rho(\varepsilon)=\sum_{i=1}^r m_i\otimes c_i$. The defining evaluation formula [F5] would give $f=f\triangleright\varepsilon=\sum_{i=1}^r f(c_i)m_i$ for every $f\in C^*$, again forcing $C^*$ into the finite-dimensional span of the $m_i$, contrary to step 2.1. Hence no such coaction induces this action. [F2, F3, F4, F5, step 2.1, step 3.1]

5.1 Step 1.1 verifies the coalgebra, step 2.1 identifies its full dual algebra, step 3.1 disproves rationality, and step 4.1 rules out an inducing coaction. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
