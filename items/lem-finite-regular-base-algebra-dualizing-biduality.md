---
id: lem-finite-regular-base-algebra-dualizing-biduality
kind: lemma
title: Dualizing biduality for finite algebras over a regular base
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
- def-axiom-of-choice
- def-dualizing-complex-on-projective-cm-scheme
- lem-finite-closed-immersion-derived-coinduction-adjunction
- thm-localisation-and-polynomial-extension-of-regular-rings
- lem-global-dimension-is-detected-on-cyclic-modules
- def-dependent-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project, Resolution of Surfaces, 54.8.8 and 54.11.6: exact imports replaced by the local
      argument'
    url: https://stacks.math.columbia.edu/download/resolve.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $R$ be a regular Noetherian ring of finite dimension $d$, and let $B\ne0$ be a module-finite $R$-algebra. For any integer $s$, $D_B=R\operatorname{Hom}_R(B,R[s])$ is a dualizing complex over $B$. For every $M\in D^b_{\mathrm{fin}}(B)$ the canonical evaluation $M\to R\operatorname{Hom}_B(R\operatorname{Hom}_B(M,D_B),D_B)$ is an isomorphism; both duals are bounded with finite cohomology. These constructions commute with localization on $R$; localization on $B$ preserves the dualizing conditions and coherent bidual evaluation.

## Facts & Assumptions

**Given:** A regular Noetherian ring $R$ of finite dimension $d$, a nonzero module-finite $R$-algebra $B$, an integer $s$, and $M\in D^b_{\mathrm{fin}}(B)$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-dualizing-complex-on-projective-cm-scheme.* A dualizing complex on a Noetherian scheme $X$ is an object $D_X\in D^b_{\mathrm{Coh}}(X)$ such that, locally on affine open neighborhoods $U=\operatorname{Spec}B$, its corresponding complex has finite injective dimension over $B$ and the homothety map $B\to R\operatorname{Hom}_B(D_X|_U,D_X|_U)$ is an isomorphism. (def-dualizing-complex-on-projective-cm-scheme)

[F4] *lem-finite-closed-immersion-derived-coinduction-adjunction.* Assume AC. For a finite homomorphism $A\to B$ of Noetherian rings and $G\in D^+(A)$, the complex $f^!G=R\operatorname{Hom}_A(B,G)$ has its natural $B$-action and is right adjoint to restriction of scalars. ([[lem-finite-closed-immersion-derived-coinduction-adjunction]])

[F5] *thm-localisation-and-polynomial-extension-of-regular-rings.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular. Regularity can equivalently be tested at maximal ideals. For every nonzero such ring, $\operatorname{gldim}R=\dim R$, allowing infinity. ([[thm-localisation-and-polynomial-extension-of-regular-rings]])

[F6] *lem-global-dimension-is-detected-on-cyclic-modules.* For a unital ring $R$, its left global dimension equals $\sup_I\operatorname{pd}_R(R/I)$ over all left ideals $I$, and equals the supremum of the injective dimensions of all left modules. The equalities allow infinity; in the commutative Noetherian case the cyclic modules are finite. ([[lem-global-dimension-is-detected-on-cyclic-modules]])

## Proof

1.1 Every finite $R$-module has a bounded resolution by finite projective modules: $R$ has finite global dimension by [F5], the resolution can be terminated at that bound, and the syzygies of a finite module over the Noetherian ring $R$ are again finite. Similarly every bounded complex of finite $R$-modules has a bounded complex of finite projective modules, and the finite global dimension is detected on cyclic modules by [F6]. [F5, F6, given]

2.1 The free module $R$ of rank one has injective dimension at most $d=\dim R$ over $R$, because the global dimension of $R$ bounds both the projective and the injective dimensions of its modules; hence the shift $R[s]$ has a bounded injective resolution of length at most $d$, with injective terms that are $R$-modules. [F5, step 1.1]

3.1 Applying $R\operatorname{Hom}_R(B,-)$ to a bounded injective resolution of $R[s]$ gives a bounded complex $D_B=R\operatorname{Hom}_R(B,R[s])$ of $B$-modules whose terms are injective over $B$ by the finite-ring coinduction adjunction [F4], so $D_B$ has finite injective dimension over $B$. [F4, step 2.1]

4.1 Since $B$ is a finite $R$-module, a bounded resolution of $B$ by finite projective $R$-modules computes $R\operatorname{Hom}_R(B,R[s])$, so $D_B$ has bounded cohomology with finite $R$-modules, hence finite $B$-modules, in each degree. [F4, F6, step 1.1, step 3.1]

5.1 For $M\in D^b_{\mathrm{fin}}(B)$, coinduction along the finite map $R\to B$ gives $R\operatorname{Hom}_B(M,D_B)=R\operatorname{Hom}_R(M,R[s])$ after forgetting the $B$-structure; applying the same identity to the $B$-module $R\operatorname{Hom}_B(M,D_B)$ and substituting yields $R\operatorname{Hom}_B(R\operatorname{Hom}_B(M,D_B),D_B)\cong R\operatorname{Hom}_R(R\operatorname{Hom}_R(M,R[s]),R[s])$. [F4, step 3.1, given, step 4.1]

6.1 The right-hand side is the double dual of $M$ computed from a bounded resolution of $M$ by finite projective $R$-modules: a finite projective module is canonically isomorphic to its double dual, so termwise double duality of the resolution is a quasi-isomorphism, and the evaluation at $1\in B$ is the actual bidual map of $B$-complexes; forgetting scalars reflects quasi-isomorphisms, so the canonical evaluation $M\to R\operatorname{Hom}_B(R\operatorname{Hom}_B(M,D_B),D_B)$ is an isomorphism and both duals are bounded with finite cohomology. [F6, step 5.1]

7.1 All constructions commute with localization on $R$: finite projective resolutions and $R\operatorname{Hom}$ localize, and bounded injective resolutions localize by the ideal test for injectivity together with localization of Hom from finitely presented ideals; localization on $B$ preserves the dualizing conditions, the finite cohomology and the coherent bidual evaluation, computed from a degreewise finite free $B$-resolution. [F4, F5, F6, step 6.1]

8.1 The Axiom of Choice is inherited from the resolution suppliers and the Axiom of Dependent Choice is retained from the Ext and resolution data; no further choice is made. [F1, F2, step 1.1, step 7.1] ∎

## Remarks

- This is the finite-algebra case of the quotient statement used elsewhere on this page; the proof does not assume that $B$ is a quotient of $R$ by an ideal, only that $R\to B$ is finite.
- The shift $s$ is carried through all identifications; biduality is shift-invariant because the two shifts cancel.
