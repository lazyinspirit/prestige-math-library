---
id: lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point
kind: lemma
title: "A proper birational map to a normal target is an isomorphism near a quasi-finite point"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [
          def-axiom-of-choice, def-normal-surface-modification-and-normalized-point-blowup,
                    cor-quasi-finite-locus-open-finite-type-algebra,
                    cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra,
                    def-proper-morphism]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, proof of Lemma 54.17.1; local Zariski Main argument"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let $f:X\to S$ be a proper birational morphism of integral Noetherian schemes with normal $S$. If $f$ is quasi-finite at $x\in X$, then $f$ is an isomorphism over an open neighbourhood of $f(x)$; in particular that fibre consists of $x$.

## Facts & Assumptions

**Given:** A proper birational morphism $f\colon X\to S$ of integral Noetherian schemes with normal $S$, and a point $x\in X$ at which $f$ is quasi-finite.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain (def-normal-noetherian-ring). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. ([[def-normal-surface-modification-and-normalized-point-blowup]])

[F3] *cor-quasi-finite-locus-open-finite-type-algebra.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R\to S$ be a ring map of finite type (def-finite-type-and-module-finite-algebras). ([[cor-quasi-finite-locus-open-finite-type-algebra]])

[F4] *cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R\to S$ be a ring map of finite type (def-finite-type-and-module-finite-algebras) that is quasi-finite at every prime of $S$ (def-quasi-finite-at-a-prime-for-finite-type-algebras), and let $S'\subseteq S$ be the integral closure of the image of $R$ in $S$ (def-integral-subalgebra-of-an-arbitrary-ring-map). ([[cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra]])

[F5] *def-proper-morphism.* A morphism of schemes $f:X\to S$ is **proper** if and only if it is separated, of finite type, and universally closed. Here separatedness has the meaning of def-separated-morphism-schemes, finite type has the meaning of def-locally-finite-type-and-finite-type-morphism, and universally closed has the meaning of def-universally-closed-morphism. ([[def-proper-morphism]])

## Proof

1.1 Choose affine open neighbourhoods $\operatorname{Spec}A$ of $f(x)$ and $\operatorname{Spec}C\subseteq f^{-1}(\operatorname{Spec}A)$ of $x$; the quasi-finite locus of $f$ is open, so after shrinking $C$ we may assume $f$ is quasi-finite at every point of $\operatorname{Spec}C$, and $C$ is a domain contained in the common function field $K$ of $X$ and $S$. [F3, F5, given]

2.1 The relative integral closure of $A$ in $C$ equals $A$: every element of $C$ integral over $A$ lies in $K=\operatorname{Frac}C$, and $A$ is normal, hence integrally closed in $K$. [F2, step 1.1]

3.1 By the source-local structure theorem for a quasi-finite algebra over a normal domain, the finite intermediate algebra between $A$ and $C$ is contained in the relative integral closure, hence equals $A$; therefore there is $g\in A$ with $x\in D(g)\subseteq\operatorname{Spec}C$ and $C_g=A_g$ as subalgebras of $K$, so $f$ restricted to the principal open $D(g)$ is an open immersion onto $D(g)\subseteq\operatorname{Spec}A$. [F4, step 2.1]

4.1 The inverse of this open immersion gives a section $s\colon D(g)\to X$ of $f$ over $D(g)$; a section of a separated morphism is a closed immersion, obtained by base changing the diagonal, and $f$ is separated because it is proper. The image of $s$ contains the generic point of the integral scheme $f^{-1}(D(g))$, over which $f$ is an isomorphism by birationality, and being closed it is the whole underlying space; the defining ideal has radical zero and the source is reduced, so the section is an isomorphism onto $f^{-1}(D(g))$. [F5, step 3.1]

5.1 Hence $f$ is an isomorphism over the open neighbourhood $D(g)$ of $f(x)$, and in particular the fibre of $f$ over $f(x)$ consists of the single point $x$; the Axiom of Choice is inherited from the cited suppliers. [F1, step 4.1] ∎

## Remarks

- The normality of the target is used exactly in step 1.2 to conclude that the relative integral closure is trivial.
- The argument is the Zariski main theorem in this restricted setting and avoids any connected-fibre assumption.
