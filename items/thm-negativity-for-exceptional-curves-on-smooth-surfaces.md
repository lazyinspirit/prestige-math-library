---
id: thm-negativity-for-exceptional-curves-on-smooth-surfaces
kind: theorem
title: "Negativity of contracted curves on regular surfaces"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps: [
          cor-degree-additive-proper-curve, def-axiom-of-choice, def-cartier-divisor,
                    def-degree-invertible-sheaf-proper-dimension-one,
                    def-divisor-intersection-number-on-smooth-projective-surface,
                    def-embedding-dimension-and-regular-local-ring, def-integral-scheme,
                    def-projective-morphism-pre-proj, lem-positive-conormal-degree-of-a-fibre-divisor,
                    thm-intersection-with-curve-as-degree-of-restriction, thm-nonaffine-regular-local-ring-is-ufd]
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
    - title: "The Stacks Project, Resolution of Surfaces, Chapter 54 (complete chapter PDF)"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
    - title: "Olivier Debarre, Introduction to Mori Theory (M2 course notes, 2016 version)"
      url: "https://www.math.ens.psl.eu/~debarre/M2.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice, inherited from the Euler-characteristic and intersection suppliers. Let $k$ be a
field, let $X$ be an integral regular projective surface over $k$
([[def-divisor-intersection-number-on-smooth-projective-surface]]), let $Y$ be an integral regular finite-type
$k$-scheme of pure dimension two, let $f\colon X\to Y$ be a proper birational morphism and let $E\subseteq X$
be an integral curve with $f(E)$ a single closed point $y\in Y$. Then:

1. $E$ is an effective Cartier divisor on $X$;
2. $\deg_E\bigl(\mathcal O_X(-E)|_E\bigr)>0$, that is, the conormal sheaf of $E$ in $X$ has positive degree on $E$; and
3. $E\cdot E<0$; equivalently the normal bundle $\mathcal O_X(E)|_E$ has negative degree.

No similar statement is proved here for curves not contracted by a birational morphism, and no negative definiteness of the full intersection matrix of a reducible exceptional divisor is claimed.

## Facts & Assumptions

**Given:** A field $k$, an integral regular projective surface $X$ over $k$, an integral regular finite-type $k$-scheme $Y$ of pure dimension two, a proper birational morphism $f\colon X\to Y$, and an integral curve $E\subseteq X$ with $f(E)$ a single closed point $y\in Y$.

[F1] *cor-degree-additive-proper-curve.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and let $C$ be a proper $k$-scheme (def-proper-morphism) whose underlying topological space has dimension at most one (def-dimension-noetherian-topological-space). For all invertible $\mathcal O_C$-modules $\mathcal L$ and $\mathcal M$ (def-invertible-sheaf): 1. ([[cor-degree-additive-proper-curve]])

[F2] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F3] *def-cartier-divisor.* Let $X$ be a scheme and let $K_X$ be its sheaf of meromorphic functions, with the injective structure map $\mathcal O_X\to K_X$ (def-sheaf-total-quotient-rings, def-sheaf-on-topological-space). ([[def-cartier-divisor]])

[F4] *def-degree-invertible-sheaf-proper-dimension-one.* Assume the Axiom of Choice, inherited from the Euler-characteristic supplier below ([[def-axiom-of-choice]]). Let $k$ be a field (def-field) and let $C$ be a proper $k$-scheme (def-proper-morphism) whose underlying topological space is Noetherian of dimension at most one (def-dimension-noetherian-topological-space, def-locally-noetherian-and-noetherian-scheme). ([[def-degree-invertible-sheaf-proper-dimension-one]])

[F5] *def-divisor-intersection-number-on-smooth-projective-surface.* Assume the Axiom of Choice, inherited from the Euler-characteristic supplier below ([[def-axiom-of-choice]]). Let $k$ be a field and let $X$ be an integral ([[def-integral-scheme]]), regular ([[def-embedding-dimension-and-regular-local-ring]]), projective ([[def-projective-morphism-pre-proj]]) $k$-scheme of pure dimension two (def-dimension-noetherian-topological-space). ([[def-divisor-intersection-number-on-smooth-projective-surface]])

[F6] *def-embedding-dimension-and-regular-local-ring.* For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, define $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$. The ring is **regular local** when $\operatorname{edim}R=\dim R$. The cotangent space is intrinsic, and is finite-dimensional because $\mathfrak m$ is finitely generated. ([[def-embedding-dimension-and-regular-local-ring]])

[F7] *def-integral-scheme.* An **integral scheme** is a nonempty scheme that is reduced and whose underlying topological space is irreducible. Equivalently, it is nonempty and every nonempty affine open is the spectrum of a domain. The latter criterion is independent of the chosen affine open cover. ([[def-integral-scheme]])

[F8] *def-projective-morphism-pre-proj.* For an arbitrary base scheme $S$, a morphism $f:X\to S$ is **projective on this page** if for some integer $n\ge0$ it factors over $S$ as $X\xrightarrow{i}\mathbb P^n_S\longrightarrow S,$ where $i$ is a closed immersion and the second arrow is the projection. (def-projective-morphism-pre-proj)

[F9] *lem-positive-conormal-degree-of-a-fibre-divisor.* Assume the Axiom of Choice. Let $k$, $X$, $Y$, $f\colon X\to Y$ and $y\in Y$ be as in lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces, and let $Z\subseteq X$ be a nonzero effective Cartier divisor with $Z\subseteq f^{-1}(y)$ set-theoretically. ([[lem-positive-conormal-degree-of-a-fibre-divisor]])

[F10] *thm-intersection-with-curve-as-degree-of-restriction.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let $X$ be an integral regular projective surface over $k$ ([[def-divisor-intersection-number-on-smooth-projective-surface]]) and let $C$ and $D$ be effective Cartier divisors on $X$ (def-effective-cartier-divisor, [[def-cartier-divisor]]) with associated line bundles $\mathcal O_X(C)$ and  ([[thm-intersection-with-curve-as-degree-of-restriction]])

[F11] *thm-nonaffine-regular-local-ring-is-ufd.* Assume the Axiom of Choice. Every regular local ring is a unique factorization domain. In particular every smooth finite-type scheme over a field is locally factorial. ([[thm-nonaffine-regular-local-ring-is-ufd]])

## Proof

1.1 At every point of $X$ the local ring is a regular local ring and therefore a unique factorization domain, so the height-one prime defining the integral curve $E$ is locally principal and $E$ is an effective Cartier divisor; this proves assertion 1. [F3, F6, F7, F11, given]

2.1 The curve $E$ is set-theoretically contained in the fibre $f^{-1}(y)$ over the closed point $y$, so the positive conormal degree lemma applies with $Z=E$, whose only irreducible component is $E$ itself, and gives $\deg_E(\mathcal O_X(-E)|_E)>0$; this is assertion 2. [F4, F9, step 1.1]

3.1 The restriction-degree identity gives $E\cdot E=\deg_E(\mathcal O_X(E)|_E)$, and additivity of the degree on inverse invertible sheaves gives $\deg_E(\mathcal O_X(E)|_E)+\deg_E(\mathcal O_X(-E)|_E)=0$; hence $E\cdot E=-\deg_E(\mathcal O_X(-E)|_E)<0$, which is assertion 3 and says that the normal bundle of $E$ has negative degree. [F1, F4, F5, F10, step 2.1]

4.1 No statement is made for curves not contracted by a birational morphism, and no negative definiteness of the full intersection matrix of a reducible exceptional divisor is claimed; the Axiom of Choice is inherited from the Euler-characteristic and intersection suppliers. [F2, step 3.1] ∎

## Remarks

- The three assertions are the pointwise UFD fact, the conormal positivity theorem, and the degree bookkeeping converting conormal positivity into self-intersection negativity.
- The hypothesis that E is contracted by a birational morphism is used only through the containment E in a fibre of a point.
