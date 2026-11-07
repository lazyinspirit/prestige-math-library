---
dependency_level: 3
id: lem-shtuka-level-forgetting-is-a-finite-etale-frame-torsor
kind: lemma
title: Shtuka level forgetting over the leg-avoiding target
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-drinfeld-shtuka-with-bounded-modification
- lem-frobenius-compatible-frames-form-a-finite-etale-torsor
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Tuan Ngo Dac, Compactification des champs de chtoucas et théorie géométrique
      des invariants
    url: https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf
    locator: Chapter II §2; compare Lafforgue 2002 Chapter I §1(a), level map over
      the leg-avoiding target.
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $X/\mathbb F_q$ be a smooth projective geometrically connected curve, $r\ge1$, and $N\subset X$ a finite closed subscheme, possibly empty or nonreduced. The level-forgetting morphism of shtuka groupoids
$$\operatorname{Cht}_{r,N}\longrightarrow\operatorname{Cht}_r\times_{X\times X}(X\setminus N)^2$$
is representable by finite étale surjective schemes and is a torsor under the constant group $\mathrm{GL}_r(\Gamma(N,\mathcal O_N))$. This assertion concerns the groupoid morphism and requires no prior algebraicity of the shtuka stack.

## Facts & Assumptions

**Given:** AC and the curve, rank and finite level in the Statement.

[F1] A shtuka has diagram $E\xrightarrow{j}E'\xleftarrow{t}E''$ and $\tau:\sigma^*E\xrightarrow{\sim}E''$; both modifications are isomorphisms away from their leg graphs. A compatible level structure is a frame of the restriction to $N$ commuting with this diagram. ([[def-drinfeld-shtuka-with-bounded-modification]])

[F2] Under AC, compatible frames of a bundle on $\operatorname{Spec}B\times S$ with Frobenius isomorphism form a finite étale surjective torsor under the constant group $\mathrm{GL}_r(B)$, for any finite $\mathbb F_q$-algebra $B$ and any base $S$. ([[lem-frobenius-compatible-frames-form-a-finite-etale-torsor]], [[def-axiom-of-choice]])

## Proof

1.1 Fix any scheme $S$ mapping to the target groupoid, hence any specified unlevelled shtuka whose two legs avoid $N$. Since the cokernels of $j$ and $t$ are supported on the leg graphs, their restrictions $j_N,t_N$ are isomorphisms. They induce the Frobenius isomorphism $\theta=j_N^{-1}t_N\tau_N:\sigma^*E_N\to E_N$. The level-compatibility diagram says exactly $\sigma^*u=u\theta$ for a frame $u:E_N\to\mathcal O_{N\times S}^r$. [F1, given, construct, algebra]

2.1 Put $B=\Gamma(N,\mathcal O_N)$. This is a finite-dimensional $\mathbb F_q$-algebra, and $N=\operatorname{Spec}B$ because $N$ is finite. By [F2], the frames in step 1.1 are represented by a finite étale surjective $S$-scheme with the asserted constant-group action. In the fibre product of groupoids over the specified $S$-object, an object consists of a levelled shtuka and an isomorphism of its underlying shtuka to the specified one. Transporting the level by that isomorphism identifies this fibre groupoid with the set of compatible frames; any automorphism preserving the underlying identification is the identity. Thus this scheme represents the actual fibre product, including its isomorphisms. Since the construction works for every $S$, it proves representability, finite étaleness, surjectivity and the torsor assertion. For empty $N$, $B=0$ and the cover is the identity. [F1, F2, step 1.1, construct, algebra] ∎
