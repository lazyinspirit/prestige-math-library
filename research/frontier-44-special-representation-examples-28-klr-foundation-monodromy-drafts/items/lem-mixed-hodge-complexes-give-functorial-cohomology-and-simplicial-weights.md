---
id: lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights
kind: lemma
title: "Mixed Hodge complex cohomology and simplicial weights"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cohomological-mixed-hodge-complex, lem-morphisms-of-mixed-hodge-structures-are-strict, thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex]
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Statement

The degree-$n$ cohomology of a cohomological mixed Hodge complex is naturally a mixed Hodge structure with the shifted weight filtration in its definition. Morphisms induce morphisms of these structures. A cosimplicial system of pure weight-zero Hodge complexes has a simple complex with weight filtration by cosimplicial degree; if all degrees are nonnegative, its degree-$n$ cohomology has weights at most $n$. The cosimplicial spectral sequence
$$E_1^{p,q}=H^q(K^p)\Longrightarrow H^{p+q}(sK)$$
degenerates at $E_2$, with $\operatorname{Gr}^W_qH^n(sK)=E_2^{n-q,q}$.

## Facts & Assumptions

**Given:** Complexes and finite filtrations as in [[def-cohomological-mixed-hodge-complex]]. The double-complex spectral sequence and its finite-diagonal convergence are supplied by [[thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex]]. Pure Hodge maps split by $(p,q)$ type; strictness and exactness of weight graded pieces are proved in [[lem-morphisms-of-mixed-hodge-structures-are-strict]].

## Proof

1.1 In the weight spectral sequence write $E_1^{a,b}=H^{a+b}(\operatorname{Gr}^W_{-a}K)$. This is pure of weight $b$. The differential $d_1:E_1^{a,b}\to E_1^{a+1,b}$ preserves $F$ and rational comparison, hence also conjugate $F$, so it is a pure Hodge morphism and is strict. Its cohomology $E_2^{a,b}$ is pure of weight $b$. The filtration induced by $F$ on $E_1$ is its cohomology filtration, since the differential on each weight graded complex is $F$-strict. [given, algebra]

2.1 The compatibility of the $F$ filtrations at the next page can be seen on representatives: lift a class in $F^p$ on a weight graded piece to an element of $F^p$ in that weight. A correction that kills its first weight differential can be chosen in $F^p$, since $d_1$ is strict. Repeating in the next weight works whenever the next differential is strict. Thus the direct filtration from the complex and the recursively induced filtration agree on every page reached by strict differentials; the same representative correction shows the next differential preserves $F$. Rational comparison provides the identical assertion for $\overline F$. Inductively, $d_r$ for $r\ge2$ is a map from a pure structure of weight $b$ to one of weight $b-r+1$, preserving both filtrations. On a source $(p,q)$ component it would land in $F^p\cap\overline F^q$ on the target; this intersection is zero because the target weight is less than $p+q=b$. Hence $d_r=0$. The zero differential is strict and continues the induction. [step 1.1, construct, algebra]

3.1 The same correction procedure at the stabilized page identifies its $F$ filtration with that induced from cohomology. Finite-diagonal convergence identifies $E_\infty^{a,b}$ with $\operatorname{Gr}^W_bH^{a+b}(K)$ under the shifted convention. Each graded piece has the pure weight-$b$ decomposition already proved; therefore $H^n(K)$ is a mixed Hodge structure. The representative construction commutes with filtered chain maps, so induced cohomology maps preserve its two filtrations. No splitting of mixed cohomology over $\mathbb Q$ or $\mathbb R$ is asserted. [step 1.1, step 2.1, given, algebra]

4.1 For a cosimplicial pure system put $W_{-p}sK=\bigoplus_{i\ge p}K^i[-i]$; its associated weight graded complex at index $-p$ is $K^p[-p]$. Its degree-$n$ cohomology is $H^{n-p}(K^p)$, pure of weight $n-p=n+(-p)$, so this is a mixed Hodge complex. The first weight spectral sequence is the cosimplicial spectral sequence. Steps 1.1–2.1 give degeneration at $E_2$ and the displayed graded identification. Since $p\ge0$, the surviving weights $q=n-p$ are at most $n$. [step 1.1, step 2.1, step 3.1, construct] ∎
## Source notes

Deligne II 3.2.6–3.2.11 and III 8.1.9, 8.1.14–8.1.19. The induced-filtration correction argument in step 2.1 is a required proof interface: independent review must check the strict representative lifting and convergence hypotheses. This draft is not a claim that merely naming a mixed Hodge complex proves its comparison or graded purity.
