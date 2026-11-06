---
id: thm-gts-global-cotangent-complex-obstruction-and-lifting-torsor
kind: theorem
title: Global cotangent-complex obstruction and lifting torsor
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
dependency_level: 2
deps:
  - thm-gts-affine-square-zero-lifting-obstruction-torsor-and-automorphisms
  - lem-flat-deformations-form-a-zariski-sheaf-of-groupoids
  - def-cotangent-complex-of-a-scheme-morphism
  - def-ext-groups-of-the-cotangent-complex
  - lem-cotangent-complex-truncation-and-smooth-case
  - def-axiom-of-choice
  - lem-gts-cotangent-marked-algebra-and-sheaf-extension-classification
  - lem-gts-cotangent-scheme-effectivity-and-artin-flatness
dependency_roles:
  lem-gts-cotangent-marked-algebra-and-sheaf-extension-classification: mathematical-premise
  lem-gts-cotangent-scheme-effectivity-and-artin-flatness: mathematical-premise
  thm-gts-affine-square-zero-lifting-obstruction-torsor-and-automorphisms: mathematical-premise
  lem-flat-deformations-form-a-zariski-sheaf-of-groupoids: mathematical-premise
  def-cotangent-complex-of-a-scheme-morphism: mathematical-premise
  def-ext-groups-of-the-cotangent-complex: mathematical-premise
  lem-cotangent-complex-truncation-and-smooth-case: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project Authors, The Cotangent Complex, Lemma 92.21.1/tag 08UZ
      url: https://stacks.math.columbia.edu/download/cotangent.pdf
      locator: Full statement and proof of Lemma 92.21.1/tag 08UZ, PDF pp. 37–38; transitivity Lemma 20.3/tag 08T4.
    - title: The Stacks Project Authors, Deformation Theory, Chapter 91
      url: https://stacks.math.columbia.edu/download/defos.pdf
      locator: §7, Lemmas 7.1–7.8 and Remark 7.9, PDF pp. 19–25.
    - title: Robin Hartshorne, Lectures on Deformation Theory, Math 274 draft
      url: https://math.berkeley.edu/~robin/math274root.pdf
      locator: Chapter 2, §10, Theorem 10.6 and proof, printed pp. 62–64.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases: []
---

## Statement

Assume the Axiom of Choice. Let $A'\twoheadrightarrow A$ be a small extension of local Artin $k$-algebras with residue field $k$ and square-zero kernel $I$, and let $X$ be a flat, locally finitely presented $A$-scheme with a specified reduction $X_0$. The marked relative lifting problem fixes the whole $A$-scheme $X$ and the identification of its reduction. The source result asserts a canonical obstruction in $\operatorname{Ext}^2_{\mathcal O_X}(L_{X/A},\mathcal O_X\otimes_A I)$, vanishing exactly when a lift exists; when nonempty, marked isomorphism classes form an $\operatorname{Ext}^1$-torsor and lift automorphisms inducing the identity on $X$ are $\operatorname{Ext}^0$. If $X$ is smooth over $A$, then $T_{X/A}:=\mathcal H om_{\mathcal O_X}(\Omega^1_{X/A},\mathcal O_X)$ and the obstruction group is $H^2(X,T_{X/A}\otimes_A I)$.

## Statement references

[Stacks Project, Lemma 92.21.1/tag 08UZ](https://stacks.math.columbia.edu/download/cotangent.pdf)

## Extension diagram

The top row is the prescribed base thickening and the bottom row is the marked sheaf extension to be constructed. The map $c$ sends $i$ to $1\otimes i$. All sheaves in the diagram are viewed on the underlying space of $X$; base rings denote their inverse-image sheaves.

```tikzcd
0 \arrow[r] & I \arrow[r] \arrow[d,"c"] & A' \arrow[r] \arrow[d] & A \arrow[r] \arrow[d] & 0 \\
0 \arrow[r] & \mathcal O_X\otimes_A I \arrow[r] & \mathcal O_{X'} \arrow[r] & \mathcal O_X \arrow[r] & 0
```

## Facts & Assumptions

**Given:** the small extension $A'\twoheadrightarrow A$, its square-zero kernel $I$, the flat locally finitely presented $A$-scheme $X$, its specified reduction $X_0$, and AC.

[F1] [[lem-gts-cotangent-marked-algebra-and-sheaf-extension-classification]] proves extension classification in all sheaves of modules, including the restriction fiber and automorphisms; it does not assume global polynomial-generator lifts or projectivity of polynomial sheaves.

[F2] [[lem-gts-cotangent-scheme-effectivity-and-artin-flatness]] proves scheme effectivity of quasi-coherent square-zero kernels and equivalence, for this exact kernel, with flat locally finitely presented scheme lifts over Artin bases.

[F3] [[def-cotangent-complex-of-a-scheme-morphism]] supplies the global sheaf-ring complex, the canonical transitivity triangle and affine comparisons; [[def-ext-groups-of-the-cotangent-complex]] defines global derived Ext.

[F4] [[lem-cotangent-complex-truncation-and-smooth-case]] gives $H^0(L)=\Omega$, the degree-zero and degree-one truncation comparisons, and the smooth locally free differential identification.

[F5] [[thm-gts-affine-square-zero-lifting-obstruction-torsor-and-automorphisms]] proves the corresponding marked affine obstruction and fiber. [[lem-flat-deformations-form-a-zariski-sheaf-of-groupoids]] supplies compatible-lift descent; no arbitrary local lifts are assumed compatible.

[A1] [[def-axiom-of-choice]] is inherited from [F1]–[F5].

## Proof

**Given:** [F1]–[F5], [A1] and the Statement's data. Put $S=\operatorname{Spec}A$, $S'=\operatorname{Spec}A'$, let $f:X\to S$ be the given map, and put $M=\mathcal O_X\otimes_AI$.

1.1 Write $C=\mathbf Lf^*L_{S/S'}$, $K=L_{X/S'}$, and $L=L_{X/S}$. The conormal presentation of the surjection $A'\to A$ identifies $\tau_{\ge-1}L_{S/S'}$ with $\widetilde I[1]$. Since $f$ is flat, $C$ lies in degrees at most $-1$ and $\mathcal H^{-1}(C)=M$. Hence $\operatorname{Ext}^0_{\mathcal O_X}(C,M)=0$ and $\operatorname{Ext}^1_{\mathcal O_X}(C,M)=\operatorname{Hom}_{\mathcal O_X}(M,M)$. This is a global calculation: the part in degrees at most $-2$ has derived Hom into a degree-zero module zero in degrees below two, so truncation gives these identities without replacing global Ext by local sections of a sheaf Ext. Let $\gamma$ be the identity of $M$, equivalently the map induced by $c:i\mapsto1\otimes i$. [F3, F4, A1, given, construct]

2.1 By [F1], $\operatorname{Ext}^1_{\mathcal O_X}(K,M)$ classifies square-zero $f^{-1}\mathcal O_{S'}$-algebra sheaves $0\to M\to E\to\mathcal O_X\to0$. Restriction to the base followed by coefficient change is the map to $\operatorname{Ext}^1_{\mathcal O_X}(C,M)$. In the conormal presentation of $A'\to A$ it sends an extension to its structural multiplication map $I\otimes_A\mathcal O_X\to M$: evaluating the relation $i\in I$ gives exactly its structural image in $E$. The sheaf-generator proof and naturality in [F1] show this equality globally, so it includes the required gluing of algebra data. Thus the fiber over $\gamma$ is exactly the marked sheaf-ring lifting problem with the prescribed kernel map. No overlap choices or triple-overlap obstructions have been suppressed by an appeal to affine descent. [F1, F3, step 1.1, algebra]

3.1 The canonical triangle $C\to K\to L\to C[1]$ gives the exact sequence $\operatorname{Ext}^1(K,M)\to\operatorname{Ext}^1(C,M)\xrightarrow{\partial}\operatorname{Ext}^2(L,M)$, all groups taken globally over $\mathcal O_X$. Define $o(X,A')=\partial\gamma$. It vanishes exactly when the fiber in step 2.1 is nonempty. The preceding exact sequence, beginning with $\operatorname{Ext}^0(C,M)=0$, injects $\operatorname{Ext}^1(L,M)$ into $\operatorname{Ext}^1(K,M)$ with image the kernel of restriction. Each nonempty fiber is therefore a torsor for $\operatorname{Ext}^1(L,M)$. The boundary is canonical because both the global sheaf-ring cotangent triangle and the class $\gamma$ are canonical; [F1]'s presentation comparisons prove that constructing the fiber with different sheaves of generators gives the same class and action. [F1, F3, step 1.1, step 2.1, construct, algebra]

4.1 The module $M$ is quasi-coherent, and in every extension in this fiber the structural multiplication map onto its kernel is the identity of $M$. Apply [F2]: $(|X|,E)$ is a scheme $X'$ flat and locally finitely presented over $A'$, with $IX'=M$ at the sheaf level and $X'\times_{A'}A=X$ with exactly its given marking. Conversely every flat lift has kernel canonically $I\otimes_A\mathcal O_X$ and structural map $c$, so gives precisely an object of this fiber. Isomorphisms in the two problems agree by [F2]. This proves the existence criterion and torsor for scheme lifts, rather than merely for abstract ringed-space extensions. Composing the unchanged $X$-marking with the specified marking of $X_0$ preserves the latter automatically. [F2, step 2.1, step 3.1, algebra]

5.1 The automorphism calculation in [F1] gives global derivations $\mathcal O_X\to M$ over $A'$, which are the same as those over $A$ because $A'\twoheadrightarrow A$. They are $\operatorname{Hom}_{\mathcal O_X}(\Omega^1_{X/A},M)=\operatorname{Ext}^0_{\mathcal O_X}(L,M)$ by [F4], with additive composition as in [F1]. By step 4.1 these are exactly the scheme-lift automorphisms inducing the identity on $X$; their action on the kernel is forced to be the identity because that kernel is generated by $I$. On affine restrictions the boundary, the kernel map and the automorphism calculation coincide with [F5]'s affine theorem by the affine comparison and the evaluation calculation of step 2.1. Compatible such restrictions glue as in [F5]; this checks agreement of the two interfaces without using compatible-lift descent as the construction of $o$. [F1, F2, F3, F4, F5, step 2.1, step 4.1, algebra]

6.1 If $X/A$ is smooth, [F4] gives $L\simeq\Omega^1_{X/A}[0]$ with $\Omega^1_{X/A}$ finite locally free. Internal Hom from this module is exact, so an injective resolution computes global derived Hom as $\mathbf R\Gamma(X,\mathcal H om(\Omega^1_{X/A},M))$. Locally choosing a finite basis identifies this internal Hom canonically with $T_{X/A}\otimes_AI$; these basis-independent evaluation maps agree on overlaps. Thus $\operatorname{Ext}^2(L,M)=H^2(X,T_{X/A}\otimes_AI)$ and the already constructed obstruction lies in the group in the Statement. This makes no claim that the group vanishes on a general $X$. The zero-kernel case has $M=0$, the zero obstruction and the unique trivial marked lift. All required conclusions follow. [F3, F4, step 3.1, step 4.1, step 5.1, algebra] ∎
