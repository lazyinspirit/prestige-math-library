---
dependency_level: 9
id: lem-finite-cohomological-dimension-gives-coefficient-projection-and-perfectness
kind: lemma
title: Finite cohomological dimension gives coefficient projection and perfectness
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-derived-category-of-etale-sheaves
  - def-perfect-complex-over-a-ring
  - lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives
  - thm-existence-of-the-bounded-below-right-total-derived-functor
  - prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles
  - lem-bounded-above-complexes-admit-projective-replacements
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Étale Cohomology, Finite cohomological dimension
      url: https://stacks.math.columbia.edu/tag/0F0Y
      locator: Section 59.96, coefficient projection under finite cohomological dimension
axiom_use: Assume AC for ordinary étale injective resolutions and the successive finite-free module resolutions. The geometric finiteness and dimension hypotheses are explicit inputs, not asserted here.
---

## Statement

Assume the Axiom of Choice. Fix $B=\mathbb Z/\ell^n\mathbb Z$, where $\ell$ is prime and $n\geq1$, and a scheme $Y$ with the stated universe conventions for its étale site. Suppose there is $D\geq0$ such that $H^q(Y,F)=0$ for every sheaf of $B$-modules $F$ and every $q>D$. Let $E$ be a bounded constructible complex with Tor-amplitude $[a,b]$ over $B$, and assume that every $H^i(Y,E)$ is a finite group. Then $C=R\Gamma(Y,E)$ is a perfect $B$-complex, with Tor-amplitude contained in $[a,b+D]$, and for every finite $B$-module $M$ the canonical coefficient comparison is an isomorphism
$$C\otimes_B^L M\longrightarrow R\Gamma\bigl(Y,E\otimes_B^L\underline M\bigr).$$
The same comparison holds for bounded complexes of finite $B$-modules. The dimension bound and finiteness of the geometric cohomology are hypotheses; this lemma does not supply them for a scheme merely from its dimension or constructibility.

## Statement references

[[def-derived-category-of-etale-sheaves]]

[[def-perfect-complex-over-a-ring]]

[[lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives]]

[Stacks Project, Section 59.96](https://stacks.math.columbia.edu/tag/0F0Y)

## Facts & Assumptions

**Given:** AC, the coefficient ring, site, cohomological-dimension bound, complex, Tor-amplitude and finite cohomology hypotheses in the statement.

[F1] Étale module sheaves have enough injectives under AC, so their bounded-below derived global sections exist. [[lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives]] [[thm-existence-of-the-bounded-below-right-total-derived-functor]]

[F2] Total derived functors preserve distinguished triangles. Bounded-above module complexes have projective resolutions under the stated choice/replacement hypotheses. [[prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles]] [[lem-bounded-above-complexes-admit-projective-replacements]]

[F3] Tor-amplitude, ordinary étale derived categories and perfect module complexes have their declared meanings. [[def-derived-category-of-etale-sheaves]] [[def-perfect-complex-over-a-ring]]

[A1] AC supplies the successive replacement data used in [F1] and [F2]. [[def-axiom-of-choice]]

## Proof

1.1 The functor of global sections is left exact, since kernels are computed on sections. Thus [F1] constructs $R\Gamma$. A complex with cohomology in degrees $[u,v]$ has derived global sections in $[u,v+D]$: truncate it successively into its finitely many cohomology sheaves, apply the hypothesized bound to each sheaf, and use the long exact sequences from [F2]. In particular $E$ itself has cohomology in $[a,b]$, by tensoring with $B$ in [F3], so $C$ lies in $[a,b+D]$. The natural coefficient comparison is an isomorphism for a finite free module, and hence for a bounded finite-free complex by finite sums, shifts and these same triangle sequences. [given, A1, F1, F2, F3, algebra]

2.1 Resolve a finite module $M$ by a bounded-above complex $Q$ of finite free $B$-modules in degrees at most zero. Choose finite generators at each step; every successive kernel is finite because $B$ is a finite ring, so this construction continues under [A1]. For an integer $N\geq1$, let $Q_N$ be its brutal truncation to degrees $[-N,0]$, and put $Z_N=\ker(Q^{-N}\to Q^{-N+1})$. Exactness of the augmented resolution shows that the cone of $Q_N\to M$ is isomorphic to $Z_N[N+1]$ in the derived category. By the Tor-amplitude hypothesis, $E\otimes^L\underline{Z_N}[N+1]$ has cohomology in $[a-N-1,b-N-1]$. Step 1.1 bounds its derived global sections above by $b+D-N-1$. [A1, F2, F3, step 1.1, construct, algebra]

2.2 If $C=0$, take the zero model. Otherwise its bounded finite cohomology yields a bounded-above resolution by finite free modules. Explicitly, start in the highest nonzero cohomology degree and attach finitely many free generators mapping to representative cocycles; the cone kills that highest cohomology. Its next cohomology is still finite, as it is built from the former finite cohomology and the kernel of a map between finite modules. Repeat downwards, using [A1]; the resulting bounded-above complex maps quasi-isomorphically to $C$ degree by degree. Make it minimal by removing differential unit entries. A unit entry is isolated by invertible row and column operations into a contractible pair $B\xrightarrow{1}B$; $d^2=0$ makes its adjacent maps zero. Working from the top degree downwards requires finitely many removals at each degree. Every fixed term and homotopy component stabilizes after its adjacent degrees have been processed, so these removals define a minimal bounded-above finite-free complex homotopy equivalent to the original one. [A1, F2, step 1.1, algebra]

3.1 Independently of any Tor bound for $C$, the cone of $C\otimes^L Q_N\to C\otimes^L M$ is bounded above by $b+D-N-1$. Indeed $C$ is bounded above by $b+D$ and $Z_N$ is in degree zero; bounded-above free resolutions and their total tensor complex show that tensoring these two objects is bounded above by the sum of their upper bounds. Shift by $N+1$ as in step 2.1. For a fixed degree $i$, choose $N$ with $b+D-N-1<i-1$. In the natural comparison diagram for $Q_N\to M$, both approximation maps are then isomorphisms on $H^i$ by their cone bounds. The comparison for $Q_N$ is an isomorphism by step 1.1. Therefore the comparison for $M$ is an isomorphism on $H^i$. Since this holds for every $i$, it is a quasi-isomorphism. No perfection or Tor bound for $C$ was used in this projection proof. [F2, step 1.1, step 2.1, choose, algebra]

4.1 Since $E\otimes^L\underline M$ lies in $[a,b]$, steps 1.1 and 3.1 give $C\otimes^LM$ in $[a,b+D]$ for every finite $M$. An arbitrary $B$-module is the filtered union of its finitely generated submodules, each finite because $B$ is finite. Derived tensor commutes with this filtered colimit: compute by a bounded-above free resolution of $C$ and use the elementwise exactness of filtered colimits of modules. Thus the same bound holds for every module, proving the asserted Tor-amplitude of $C$. Finite truncation triangles extend the comparison of step 3.1 to bounded complexes of finite modules. [F2, F3, step 1.1, step 3.1, algebra]

5.1 Its reduction modulo $\ell$ has zero differential, because every minimal differential entry lies in the maximal ideal $(\ell)$. It computes $C\otimes_B^L B/(\ell)$ and hence has cohomology only in $[a,b+D]$ by step 4.1. Thus each free term outside that interval has zero reduction modulo $\ell$. A finite free module over $B$ with zero reduction has rank zero, so all those terms are zero. The minimal model is therefore bounded and finite free, proving perfection in the sense of [F3]. This also covers $n=1$, where the maximal ideal is zero, and the zero complex. Together with steps 3.1–4.1 this proves every assertion. [F3, step 4.1, step 2.2, algebra] ∎

## Remarks

Applied to extension by zero of a flat constructible finite-level lattice on a proper geometric compactification, this lemma produces the perfect-complex and derived-reduction hypotheses of the adic trace-limit argument once the actual torsion geometric finiteness and uniform cohomological-dimension theorems are proved. The statement is conditional on those two substantive geometric inputs and does not import them.
