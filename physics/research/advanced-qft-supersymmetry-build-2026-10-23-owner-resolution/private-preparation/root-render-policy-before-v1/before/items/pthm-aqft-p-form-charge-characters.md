---
id: pthm-aqft-p-form-charge-characters
kind: physics-theorem
title: "Exchangeability makes p-form symmetry groups Abelian and simple charges characters"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-p-form-symmetries
dependency_level: 2
deps:
  - def-aqft-p-form-global-symmetry
dependency_roles:
  def-aqft-p-form-global-symmetry: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "A conditional result for one group-like symmetry in a unitary selected model whose codimension-greater-than-one defects admit the stated local exchange isotopies; simple bounded charged operators are considered only when their crossing action is scalar."
sources:
  references:
    - title: "Davide Gaiotto, Anton Kapustin, Nathan Seiberg, and Brian Willett, Generalized Global Symmetries"
      url: "https://arxiv.org/pdf/1412.5148"
      locator: "§3, PDF pp. 11–12: group-like defect fusion, exchangeability for q>0, and the qualifications on topology."
    - title: "Lakshya Bhardwaj et al., Lectures on Generalized Symmetries"
      url: "https://arxiv.org/pdf/2307.07547"
      locator: "§§2.2.1–2.2.2, PDF pp. 12–20: Abelianity by exchanging topological defects, simple p-dimensional operators, characters, and the Pontryagin dual charge group."
verification:
  precheck: pending
---

## Statement

Let $d\ge2$, $1\le p<d$, and let $\mathcal T$ have a group-like $p$-form global symmetry $G$ as defined above. Assume the selected model has a unitary Hilbert-space realization and, for every $g,h\in G$, admits two parallel copies of their codimension-$(p+1)$ symmetry supports inside a contractible neighborhood with a disk spanned by two independent normal directions, together with an isotopy exchanging their order without intersecting any other insertion or changing boundary data. Then $G$ is Abelian.

Let $O(C)$ be a nonzero genuine $p$-dimensional operator bounded in the operator norm of the selected Hilbert-space representation. Call it **simple for this result** when each topological local junction endomorphism on $O$ produced by passing a symmetry defect across it is a scalar multiple of $O$. Assume the induced action on the one-dimensional space spanned by $O$ is continuous and unitary. There is a continuous character $\chi_O:G\to U(1)$ such that passing $U_g$ across $O$ multiplies it by $\chi_O(g)$. Thus the charge of $O$ belongs to the Pontryagin dual $\widehat G=\operatorname{Hom}_{\mathrm{cts}}(G,U(1))$. This theorem makes no claim for $p=0$ or for operators with nonscalar crossing endomorphisms.

## Statement references

[Gaiotto, Kapustin, Seiberg, and Willett, §3, PDF pp. 11–12](https://arxiv.org/pdf/1412.5148)

[Bhardwaj et al., §§2.2.1–2.2.2, PDF pp. 12–20](https://arxiv.org/pdf/2307.07547)

## Facts & Assumptions

**Given:** The selected model $\mathcal T$, an integer $p$ with $1\le p<d$, its group-like symmetry $G$, and the exchange and operator hypotheses in the Statement.

[A1] The model acts unitarily by conjugation on the bounded nonzero operator $O$; the line $\mathbb C O$ is invariant and the induced action there is continuous. Simplicity means each crossing junction endomorphism lies in $\mathbb C O$.

[A2] For each $g,h\in G$, the two parallel symmetry defects admit an isotopy exchanging their order, while remaining disjoint from every other insertion and preserving all fixed boundary and model data.

[F1] [[def-aqft-p-form-global-symmetry]]: $U_g$ are invertible topological symmetry defects, their same-support fusion is $U_g\star U_h=U_{gh}$, the group is effective modulo identical actions in all declared correlators, and $\widehat G$ is the group of continuous $U(1)$ characters.

## Proof

1.1 The group-like fusion law gives $U_g\star U_h=U_{gh}$ and $U_h\star U_g=U_{hg}$ on a common support. [F1, given]

1.2 Passing $U_g$ across $O$ produces a topological local junction endomorphism of $O$. Simplicity in [A1] makes this $\chi_O(g)O$ for a scalar $\chi_O(g)$; invertibility of $U_g$ and $O\ne0$ imply $\chi_O(g)\ne0$. [A1, F1]

2.1 By [A2], the two supports can be exchanged by an admissible isotopy. Topologicality in [F1] therefore makes the two fused insertions equal in every allowed correlator with all other insertions fixed. Effectiveness in [F1] identifies their group labels, so $gh=hg$ for arbitrary $g,h\in G$. [A2, F1, step 1.1]

2.2 Passing the fused interface $U_g\star U_h$ across $O$ is the same as passing $U_h$ and then $U_g$. The scalar action and the fusion law therefore give $\chi_O(gh)O=\chi_O(g)\chi_O(h)O$. Since $O\ne0$, $\chi_O(gh)=\chi_O(g)\chi_O(h)$. The identity defect $U_e=\mathbf 1_{\mathcal T}$ from [F1] acts trivially, so $\chi_O(e)O=O$ and $\chi_O(e)=1$. [F1, step 1.2, algebra]

2.3 Unitary conjugation preserves the operator norm, so $\|O\|=\|\chi_O(g)O\|=|\chi_O(g)|\|O\|$. As $\|O\|>0$, $|\chi_O(g)|=1$; continuity follows from [A1]. Thus $\chi_O$ is a continuous homomorphism from $G$ to $U(1)$. [A1, step 1.2, algebra]

3.1 By the definition of $\widehat G$ in [F1], $\chi_O\in\widehat G$. The proof uses local exchangeability for the single group $G$ and does not imply that different higher-form symmetry groups commute jointly. [F1, step 2.2, step 2.3] ∎

## Remarks

The diagram records the exchange isotopy and the same-support fusion maps. Its top arrow is equality of correlators under [A2]; the proof above, not the diagram, uses effectiveness to infer equality of group labels.

```tikzcd
U_g(\Sigma)\star U_h(\Sigma) \arrow[r, "\text{exchange isotopy}"] \arrow[d, "\text{fusion}"'] & U_h(\Sigma)\star U_g(\Sigma) \arrow[d, "\text{fusion}"] \\
U_{gh}(\Sigma) \arrow[r, "\text{equal correlators}"'] & U_{hg}(\Sigma)
```

The individual group conclusion is subject to the specified exchange isotopy. It does not assert that electric and magnetic flux operators commute jointly on every spatial topology. In Maxwell theory, torsion cycles can give a torsion-pairing commutator between the electric and magnetic flux operators, a mixed relation between distinct symmetry actions.

## Remarks references

[Gaiotto, Kapustin, Seiberg, and Willett, Appendix F, PDF pp. 70–71](https://arxiv.org/pdf/1412.5148)

