---
id: "thm-universal-coefficient-spectral-sequence"
kind: "theorem"
title: "Universal coefficient spectral sequence"
deps: ["thm-the-opposite-of-an-abelian-category-is-abelian", "thm-first-hypercohomology-spectral-sequence", "thm-second-hypercohomology-spectral-sequence", "def-cochain-complex-hom-from-a-chain-complex", "def-ext-via-a-projective-resolution-of-the-first-variable", "def-dependent-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 5.7.9"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Let $C$ be a bounded-below chain complex of projective left $R$-modules and $M$ a left $R$-module. Supply a projective Cartan–Eilenberg grid for $C$: its augmented vertical complexes on terms, horizontal cycles, horizontal boundaries, and horizontal homology are named projective resolutions, and its two horizontal structure sequences are split exact in every bidegree. Let $\mathsf P_q\to H_qC$ denote the supplied homology-object resolution in degree $q$. Then
$$E_2^{p,q}=\operatorname{Ext}_{\mathsf P_q}^p(H_qC,M)\quad\Longrightarrow\quad H^{p+q}(\operatorname{Hom}_R(C,M))$$
is strongly convergent with a finite decreasing filtration by resolution degree. Here $\operatorname{Hom}(C,M)^n=\operatorname{Hom}(C_n,M)$ and $\delta f=f d_C$. The page differential has degree $(r,1-r)$. If $C_q=0$ for $q<b$, translate $q$ by $b$; the original target degree remains $p+q$. Naturality and resolution-independent notation require DC or the supplied comparisons and homotopies of the hypercohomology theorems.
Under that resolution-independent convention one may suppress $\mathsf P_q$ and write the page as $\operatorname{Ext}_R^p(H_qC,M)$.

## Facts & Assumptions

**Given:** The ring, modules, projective complex and supplied data above.

[F1] Opposite abelian categories are abelian ([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[F2] The two hypercohomology sequences have termwise-derived first page and derived-cohomology second page, with finite convergence ([[thm-first-hypercohomology-spectral-sequence]], [[thm-second-hypercohomology-spectral-sequence]]).

[F3] Projective-model Ext is the cohomology of Hom of the projective resolution into the second argument ([[def-ext-via-a-projective-resolution-of-the-first-variable]]).

[F4] The Hom cochain convention is degree $n$ equal to Hom from $C_n$, with precomposition differential ([[def-cochain-complex-hom-from-a-chain-complex]]).

## Proof

1.1 Regard $C_q$ as a cochain complex in $(R\text{-}\mathrm{Mod})^{\mathrm{op}}$, keeping the index $q$. The supplied projective Cartan–Eilenberg grid becomes injective Cartan–Eilenberg data there; cycles and boundaries exchange their kernel/cokernel descriptions and the homology object becomes the same cohomology object. The functor $\operatorname{Hom}_R(-,M)$ from this opposite category to abelian groups is additive and left exact: a map on a quotient is exactly a map vanishing on the submodule. On the homology object in degree $q$, F3 identifies its relative derived objects with $\operatorname{Ext}_{\mathsf P_q}^p(H_qC,M)$. Apply F2. [F1, F2, F3]

2.1 The horizontal-first sequence therefore has second page $\operatorname{Ext}_{\mathsf P_q}^p(H_qC,M)$. In the other sequence the first page is the relative Ext computed from the supplied term resolution of $C_q$. For $p>0$ it vanishes: because $C_q$ is projective, the first epimorphism in that resolution splits, its kernel is a projective summand, and the next epimorphism splits in turn. For each fixed degree this finite induction splits all short exact sequences needed to calculate that degree; Hom sends them to split exact sequences. In degree zero the kernel identification gives $\operatorname{Hom}_R(C_q,M)$. Thus the other sequence collapses after its cochain differential to the cohomology in F4. [F2, F3, F4, step 1.1]

3.1 The one-row collapse identifies the common total target with $H^n(\operatorname{Hom}(C,M))$. The second sequence retains its resolution-degree filtration, with endpoints zero and $n-b+1$ in degree $n\ge b$. F2 gives strong convergence and the stated bidegree and comparison naturality. At $n=b$ there is a single possible quotient; for $C=0$ with zero data everything is zero. The finite splitting argument in step 2.1 introduces no additional choice beyond the supplied data; global comparison conventions remain those of F2. [F2, F4, step 2.1] ∎
