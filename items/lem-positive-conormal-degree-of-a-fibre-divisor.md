---
id: lem-positive-conormal-degree-of-a-fibre-divisor
kind: lemma
title: "A divisor supported in a special fibre has positive conormal degree on some component"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps: [
          def-associated-prime-of-a-module, def-axiom-of-choice,
                    def-degree-invertible-sheaf-proper-dimension-one, def-effective-cartier-divisor,
                    def-invertible-sheaf-of-cartier-divisor, def-local-ring, def-stalk-of-presheaf,
                    lem-effective-cartier-divisor-has-no-embedded-associated-primes,
                    lem-existence-of-a-fibre-cutter,
                    lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces,
                    lem-nonzero-section-vanishing-at-a-point-has-positive-degree,
                    thm-one-dimensional-regular-local-rings-are-dvrs, cor-degree-additive-proper-curve]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Section 54.7 (Vanishing)"
      url: "https://stacks.math.columbia.edu/tag/0AX7"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Let $k$, $X$, $Y$, $f\colon X\to Y$ and $y\in Y$ be as in
[[lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces]], and let $Z\subseteq X$ be a
nonzero effective Cartier divisor with $Z\subseteq f^{-1}(y)$ set-theoretically. Then there exists an
irreducible component $C$ of $Z$ with $\deg_C\bigl(\mathcal O_X(-Z)|_C\bigr)>0$; that is, the conormal sheaf
$\mathcal O_X(-Z)|_Z$ has a component of positive degree.

## Facts & Assumptions

**Given:** A field $k$, integral regular finite-type $k$-schemes $X,Y$ of pure dimension two, a proper birational morphism $f\colon X\to Y$, a closed point $y\in Y$ with one-dimensional fibre components $C_1,\dots,C_r$, and a nonzero effective Cartier divisor $Z\subseteq f^{-1}(y)$ supported set-theoretically in the fibre.

[F1] *def-associated-prime-of-a-module.* Let $R$ be a commutative ring and let $M$ be a left $R$-module. A prime ideal $\mathfrak p \subsetneq R$ is **associated to $M$** when $ \mathfrak p=\operatorname{Ann}_R(m) $ for some element $m \in M$. The set of associated primes of $M$ is denoted $ \operatorname{Ass}_R(M). $ ([[def-associated-prime-of-a-module]])

[F2] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F3] *def-degree-invertible-sheaf-proper-dimension-one.* Assume the Axiom of Choice, inherited from the Euler-characteristic supplier below ([[def-axiom-of-choice]]). Let $k$ be a field (def-field) and let $C$ be a proper $k$-scheme (def-proper-morphism) whose underlying topological space is Noetherian of dimension at most one (def-dimension-noetherian-topological-space, def-locally-noetherian-and-noetherian-scheme). ([[def-degree-invertible-sheaf-proper-dimension-one]])

[F4] *def-effective-cartier-divisor.* A Cartier divisor $D$ on a scheme $X$ is **effective** if it has a local-equation representation $(U_i,f_i)$ as in def-cartier-divisor with $f_i\in\mathcal O_X(U_i)$ and with multiplication by the germ $(f_i)_x$ injective on $\mathcal O_{X,x}$ for every $x\in U_i$. ([[def-effective-cartier-divisor]])

[F5] *def-invertible-sheaf-of-cartier-divisor.* Let $D$ be a Cartier divisor on a scheme $X$, represented by meromorphic units $f_i\in\mathcal K_X(U_i)^\times$ with regular-unit ratios on the overlaps (def-cartier-divisor). The subsheaf $\mathcal O_X\subseteq\mathcal K_X$ is the one of def-sheaf-total-quotient-rings. ([[def-invertible-sheaf-of-cartier-divisor]])

[F6] *def-local-ring.* A **local ring** is a nonzero commutative ring $R$ with exactly one maximal ideal. That ideal is usually denoted $\mathfrak m_R$ or simply $\mathfrak m$. The quotient $R/\mathfrak m$, which is a field, is the **residue field** of the local ring. ([[def-local-ring]])

[F7] *lem-effective-cartier-divisor-has-no-embedded-associated-primes.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a regular locally Noetherian scheme ([[def-local-ring]]) and let $Z\subseteq X$ be an effective Cartier divisor, with associated closed subscheme $Z=Z_D\hookrightarrow X$ and ideal sheaf $I_D$ ([[def-effective-cartier-divisor]], thm-effective-cartier-divisor-closed-immersion). ([[lem-effective-cartier-divisor-has-no-embedded-associated-primes]])

[F8] *lem-existence-of-a-fibre-cutter.* Assume the Axiom of Choice. Let $k$, $X$, $Y$, $f\colon X\to Y$ and $y\in Y$ be as in [[lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces]], and assume $\dim f^{-1}(y)=1$ with components $C_1,\dots,C_r$. ([[lem-existence-of-a-fibre-cutter]])

[F9] *lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces.* Assume the Axiom of Choice. Let $k$ be a field, let $X$ and $Y$ be integral regular finite-type $k$-schemes of pure dimension two, let $f\colon X\to Y$ be a proper birational morphism and let $y\in Y$ be a closed point. Put $F=f^{-1}(y)$. Then: 1. $F$ is a proper $\kappa(y)$-scheme with $\dim F\le 1$. 2. ([[lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces]])

[F10] *lem-nonzero-section-vanishing-at-a-point-has-positive-degree.* Assume the Axiom of Choice. Let $k$ be a field, let $C$ be an integral proper $k$-scheme of dimension one and let $\mathcal L$ be an invertible $\mathcal O_C$-module with a nonzero global section $s\in\Gamma(C,\mathcal L)$. If $s$ vanishes at some closed point of $C$, then $\deg_C(\mathcal L)>0$ for the degree of [[def-degree-invertible-sheaf-proper-dimension-one]]. ([[lem-nonzero-section-vanishing-at-a-point-has-positive-degree]])

[F11] *thm-one-dimensional-regular-local-rings-are-dvrs.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring. Fields are excluded from the term DVR. ([[thm-one-dimensional-regular-local-rings-are-dvrs]])

[F12] *cor-degree-additive-proper-curve.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and let $C$ be a proper $k$-scheme (def-proper-morphism) whose underlying topological space has dimension at most one (def-dimension-noetherian-topological-space). For all invertible $\mathcal O_C$-modules $\mathcal L$ and $\mathcal M$ (def-invertible-sheaf): 1. ([[cor-degree-additive-proper-curve]])

## Proof

1.1 Write $Z=\sum_jd_jC_j$ with $d_j\ge0$, not all zero, and use the fibre cutter $u$ with orders $e_j=v_{C_j}(u)>0$ at all components; choose an index $i$ with $d_i/e_i$ maximal and replace $u$ by $u^{d_i}$ and $Z$ by $e_iZ$, so that $v_{C_j}(u)\ge v_{C_j}(Z)$ for every $j$ with equality at $i$. [F8, F9, F11, given]

2.1 The order inequalities say that $u$ vanishes at the generic point of every component of $Z$, hence at every associated point of the effective Cartier divisor $Z$; since $Z$ has no embedded associated points, the section $u$ is zero on $Z$. Thus $u$ lies in the ideal $I=\mathcal O_X(-Z)$, and its image in $I|_C$ restricted to $C_i$ is nonzero at the generic point, because the order at $C_i$ is exactly $v_{C_i}(Z)$. [F1, F4, F5, F7, step 1.1]

3.1 Near the chosen point $x_i\in C_i$ with $x_i\notin C_j$ for $j\ne i$, choose a local generator $t$ of $I$; the divisor $Z$ has only the component $C_i$ there, and $g_i$ is nonzero on $C_i$ while $Z$ has no embedded associated points, so multiplication by $g_i$ on $\mathcal O_Z$ is injective. [F6, F7, F8, step 2.1]

4.1 From $u=g_ih_i\in(t)$ and the vanishing of $u$ on $Z$ we get $h_i\in(t)$: the image of $h_i$ in $\mathcal O_Z$ is killed by the injective multiplication by $g_i$ and hence is zero. Therefore the section coefficient $u/t=g_i\cdot(h_i/t)$ vanishes at $x_i$. [F6, F7, step 3.1]

5.1 The section $u/t$ of the invertible sheaf $I|_{C_i}$ is nonzero and vanishes at the closed point $x_i$, so the positive-degree lemma gives $\deg_{C_i}(I|_{C_i})>0$ for the rescaled data; by additivity of the degree under tensor powers, dividing by the positive scaling factor $e_i$ returns the same positivity for the original conormal sheaf, proving the claim. [F3, F10, F12, step 1.1, step 4.1, F2] ∎

## Remarks

- The rescaling by d_i/e_i is what makes the section vanish on all of Z while remaining nonzero on the chosen component.
- No embedded associated points of Z is used twice: to conclude that u vanishes on Z and that multiplication by g_i is injective on O_Z.
