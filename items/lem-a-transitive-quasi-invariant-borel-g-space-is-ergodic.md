---
id: lem-a-transitive-quasi-invariant-borel-g-space-is-ergodic
kind: lemma
title: A transitive Borel $G$-space with a quasi-invariant measure class is ergodic
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
local_addition: true
proof_strategy: direct
deps:
  - def-quasi-invariant-measure-on-a-homogeneous-space
  - lem-closed-subgroup-quotient-averaging-and-compact-lifts
  - lem-second-countable-lch-spaces-are-standard-borel
  - def-radon-measure-on-an-lch-space
  - def-compactness-variants
  - lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure
  - def-second-countable-space
  - def-locally-compact-space
  - def-group-action
  - def-standard-borel-space
  - def-topological-group
  - def-axiom-of-choice
  - thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h
  - lem-haar-lifts-and-borel-descent-on-a-homogeneous-space
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-modular-function-of-a-locally-compact-group
  - def-system-of-imprimitivity
  - lem-scalar-and-complex-measures-from-a-pvm
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
    - title: "G. B. Folland, A Course in Abstract Harmonic Analysis, Chapter 2 §2.6 (transitive quasi-invariant actions are ergodic)"
      url: "https://www.math.tamu.edu/~folland/"
---

## Statement

Assume AC. Let $G$ be a second-countable locally compact Hausdorff topological
group, $H\le G$ a closed subgroup, and $\mu$ a nonzero quasi-invariant Radon
measure on $G/H$. If $E\subseteq G/H$ is Borel with
$\mu(E\,\triangle\,gE)=0$ for every $g\in G$, then $\mu(E)=0$ or
$\mu((G/H)\setminus E)=0$. Equivalently, any transitive system of imprimitivity
on $G/H$ whose measure class is the quasi-invariant class is ergodic.

## Facts & Assumptions

**Given:** AC, the group $G$, closed subgroup $H$, the quotient $q:G\to G/H$, a nonzero quasi-invariant Radon measure $\mu$ on $G/H$, and a Borel $E\subseteq G/H$ with $\mu(E\triangle gE)=0$ for all $g$.

[F1] $q$ is continuous and open, $G/H$ is a standard Borel $G$-space with Borel action, $q^{-1}(gE)=g\,q^{-1}(E)$ for the left action, and a Borel set $F\subseteq G/H$ is $\mu$-null if and only if $q^{-1}(F)$ is Haar null ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]], [[lem-second-countable-lch-spaces-are-standard-borel]], [[lem-haar-lifts-and-borel-descent-on-a-homogeneous-space]], [[def-group-action]]).

[F2] There exists a full-support strongly quasi-invariant rho-measure $\mu_\rho$ whose class is the quasi-invariant class, and every nonzero quasi-invariant $\sigma$-finite Borel measure is equivalent to $\mu_\rho$; Radon measures on the $\sigma$-compact space $G/H$ are $\sigma$-finite ([[thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h]], [[def-quasi-invariant-measure-on-a-homogeneous-space]], [[lem-haar-lifts-and-borel-descent-on-a-homogeneous-space]], [[def-radon-measure-on-an-lch-space]], [[def-compactness-variants]], [[def-second-countable-space]], [[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]]).

[F3] Tonelli applies to nonnegative product-measurable functions on sigma-finite measure spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]). Right translation by $t$ scales left Haar measure by a positive scalar, so it preserves Haar-null Borel sets; this holds at the Borel-measure level, not only for $C_c$ integrals ([[def-modular-function-of-a-locally-compact-group]], Borel-level form). Left Haar measure on $G$ is sigma-finite because $G$ is sigma-compact by [F1].

[F4] For a transitive system of imprimitivity on $G/H$, invariance of a spectral projection $P(B)$ under the representation means $P(gB)=P(B)$ for all $g$, and $P$ is strongly countably additive, so $P(B\triangle gB)=0$ whenever $P(gB)=P(B)$ ([[def-system-of-imprimitivity]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[F5] AC is the standing hypothesis ([[def-axiom-of-choice]], [[def-topological-group]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the data and the invariant Borel set $E$ of the statement.

1.1 Lift the indicator: $f(t):=\mathbf 1_E(q(t))$. For every $g$, applying the hypothesis to $g^{-1}$ gives $\mu(E\triangle g^{-1}E)=0$, so by [F1] the set $q^{-1}(E\triangle g^{-1}E)$ is Haar null. Since $q(gt)=gq(t)$, one has $f(gt)=\mathbf 1_E(gq(t))=\mathbf 1_{g^{-1}E}(q(t))$, which equals $f(t)=\mathbf 1_E(q(t))$ at every $t$ outside $q^{-1}(E\triangle g^{-1}E)$; hence $f\circ L_g=f$ Haar-a.e. for every $g\in G$. [F1, F2]

2.1 The function $(g,t)\mapsto|f(gt)-f(t)|$ is Borel and hence product-measurable, since multiplication is continuous and the Borel sigma-algebra of a product of second-countable spaces is the product Borel sigma-algebra. By step 1.1 each integral in $t$ is zero. Tonelli therefore gives $\int_G\int_G|f(gt)-f(t)|\,dg\,dt=0$, so for Haar-almost every $t$, $f(gt)=f(t)$ for Haar-almost every $g$. [F1, F3, step 1.1]

3.1 Choose $t_0$ with the preceding property; the conull set is nonempty since Haar measure is nonzero. The exceptional set of $g$ is Haar null, and its right translate by $t_0$ remains null by [F3]. Substituting $u=gt_0$ therefore gives $f(u)=f(t_0)$ for Haar-almost every $u$. Since $f(t_0)\in\{0,1\}$, $f=\mathbf 1_{q^{-1}(E)}$ is Haar-a.e. zero or Haar-a.e. one. [F3, step 2.1]

4.1 By the null-class equivalence of [F1], $f=0$ Haar-a.e. gives $\mu(E)=0$ and $f=1$ Haar-a.e. gives $\mu((G/H)\setminus E)=0$. This proves the first assertion. [F1, step 3.1]

5.1 Equivalence with ergodicity of transitive systems: let $(U,P)$ be a transitive system on $G/H$ whose null class (the class of $P$-null Borel sets) is the quasi-invariant class, and let $P(B)$ be invariant under $U$. Then $P(gB)=P(B)$ for all $g$, so $P(B\triangle gB)=0$ by [F4] and hence $B\triangle gB$ is null for every measure in the quasi-invariant class; applying [step 4.1] to a representative $\mu$ gives $\mu(B)=0$ or $\mu(B^c)=0$, and translating back gives $P(B)=0$ or $P(B)=I$. Thus the system is ergodic. [F4, step 4.1, F5] ∎ 