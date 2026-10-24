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
physical_scope: "The group-Abelianity conclusion uses total group-like fusion, effectiveness, the stated local exchange isotopies, and model transport identifying the composite crossing and background maps; the separate character conclusion assumes a unitary Hilbert-space crossing action and a nonzero bounded simple operator with continuous scalar action."
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

Let $d\ge2$, $1\le p<d$, and let $\mathcal T$ have a group-like $p$-form global symmetry $G$ as defined above. Suppose that for every $g,h\in G$ and every allowed configuration of remaining insertions and fixed data, the model admits two parallel copies of their codimension-$(p+1)$ symmetry supports inside a contractible neighborhood with a disk spanned by two independent normal directions, and an admissible isotopy exchanging their order without intersecting any other insertion or changing boundary or model data. Require that the model-supplied transport along this isotopy identifies the two composite crossing bijections on all complete typed insertion data and the two composite background maps; that is, it identifies $\rho_g\circ\rho_h$ with $\rho_h\circ\rho_g$ and $\beta_g\circ\beta_h$ with $\beta_h\circ\beta_g$. Then $G$ is Abelian.

For the separate character conclusion, assume additionally that the crossing action has a unitary Hilbert-space realization: there are a complex Hilbert space $\mathcal H$ and a group homomorphism $V:G\to U(\mathcal H)$, with $V_e=I$ and $V_{gh}=V_gV_h$, such that crossing $U_g$ acts on bounded linear operators by $O\mapsto V_gOV_g^{-1}$. Let $O\in B(\mathcal H)$ be a nonzero genuine $p$-dimensional operator, where $B(\mathcal H)$ is the space of bounded linear operators with norm $\|O\|:=\sup_{\|\psi\|=1}\|O\psi\|<\infty$. Call $O$ **simple for this result** if crossing each $U_g$ sends it to a scalar multiple $\chi_O(g)O$, and assume the map $g\mapsto\chi_O(g)\in\mathbb C$ is continuous. Then $\chi_O:G\to U(1)$ is a continuous character, so the charge of $O$ belongs to the Pontryagin dual $\widehat G=\operatorname{Hom}_{\mathrm{cts}}(G,U(1))$. Neither conclusion is asserted for $p=0$; the character conclusion also makes no claim for nonscalar crossing actions.

## Statement references

[Gaiotto, Kapustin, Seiberg, and Willett, §3, PDF pp. 11–12](https://arxiv.org/pdf/1412.5148)

[Bhardwaj et al., §§2.2.1–2.2.2, PDF pp. 12–20](https://arxiv.org/pdf/2307.07547)

## Facts & Assumptions

**Given:** The selected model $\mathcal T$, integers $d\ge2$ and $1\le p<d$, its group-like symmetry $G$, and the local exchange isotopies. For the character conclusion also assume the specified unitary representation, bounded nonzero genuine operator, scalar crossing action, and continuity condition.

[A1] For each $g,h\in G$ and every allowed configuration of remaining insertions and fixed data, two parallel copies of the corresponding codimension-$(p+1)$ symmetry defects admit an isotopy exchanging their order inside a contractible neighborhood while avoiding other insertions and preserving boundary and model data. The model-supplied transport identifies the composite crossing bijections and background maps at the two endpoints on the complete admitted domain.

[A2] For the character conclusion, $V:G\to U(\mathcal H)$ is a unitary representation implementing crossing by conjugation on $B(\mathcal H)$, and $O\in B(\mathcal H)$ is nonzero, genuine, and simple in the Statement's sense.

[A3] The induced scalar map $\chi_O:G\to\mathbb C$ is continuous.

[F1] [[def-aqft-p-form-global-symmetry]]: fusion is defined for every ordered pair with $U_g\star U_h=U_{gh}$ and transparent identity and inverses; crossing automorphisms obey $\rho_{gh}=\rho_g\circ\rho_h$ in the stated order convention; topologicality preserves declared correlators, and effectiveness identifies elements with identical admitted actions; $\widehat G$ is the group of continuous $U(1)$ characters.

## Proof

1.1 Total group-like fusion gives $U_g\star U_h=U_{gh}$ and $U_h\star U_g=U_{hg}$ on a common support for arbitrary $g,h\in G$. [F1, given]

1.2 Fusion-action compatibility in [F1] gives $\chi_O(gh)O=\rho_{gh}(O)=\rho_g(\rho_h(O))=\chi_O(h)\chi_O(g)O$. Since the scalar values commute and $O\ne0$, $\chi_O(gh)=\chi_O(g)\chi_O(h)$. The identity action gives $\chi_O(e)=1$. [A2, F1, given, algebra]

2.1 By [A1], the exchange identifies the composite crossing bijections $\rho_g\circ\rho_h$ and $\rho_h\circ\rho_g$ and the composite background maps on the complete admitted domain. Topologicality in [F1] also makes their correlator actions identical. Fusion compatibility and effectiveness in [F1] therefore identify the group labels $gh$ and $hg$, so $gh=hg$ for arbitrary $g,h\in G$. This argument uses no Hilbert-space or operator hypothesis. [A1, F1, step 1.1]

2.2 Unitary conjugation preserves the operator norm, so $\|O\|=\|V_gOV_g^{-1}\|=\|\chi_O(g)O\|=|\chi_O(g)|\|O\|$. Because $O\ne0$, its norm is positive and $|\chi_O(g)|=1$. By [A3], the resulting homomorphism is continuous; hence $\chi_O:G\to U(1)$ is continuous. [A2, A3, step 1.2, algebra]

3.1 By the definition of $\widehat G$ in [F1], $\chi_O\in\widehat G$. The proof establishes Abelianity for this single group under the specified local exchange hypothesis and does not imply that distinct higher-form symmetry groups commute jointly. [F1, step 1.2, step 2.2] ∎

## Remarks

The diagram records the exchange isotopy and the same-support fusion maps. Its top arrow is equality of correlators under [A1]; the proof above, not the diagram, uses effectiveness to infer equality of group labels.

```tikzcd
U_g(\Sigma)\star U_h(\Sigma) \arrow[r, "\text{exchange isotopy}"] \arrow[d, "\text{fusion}"'] & U_h(\Sigma)\star U_g(\Sigma) \arrow[d, "\text{fusion}"] \\
U_{gh}(\Sigma) \arrow[r, "\text{equal correlators}"'] & U_{hg}(\Sigma)
```

The individual group conclusion is subject to the specified exchange isotopy. It does not assert that electric and magnetic flux operators commute jointly on every spatial topology. In Maxwell theory, torsion cycles can give a torsion-pairing commutator between the electric and magnetic flux operators, a mixed relation between distinct symmetry actions.

## Remarks references

[Gaiotto, Kapustin, Seiberg, and Willett, Appendix F, PDF pp. 70–71](https://arxiv.org/pdf/1412.5148)

