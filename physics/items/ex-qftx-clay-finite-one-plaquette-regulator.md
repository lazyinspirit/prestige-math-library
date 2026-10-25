---
id: ex-qftx-clay-finite-one-plaquette-regulator
kind: example
title: A finite one-plaquette SU(2) regulator
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-yang-mills-clay-problem-examples
dependency_level: 0
deps: []
dependency_roles: {}
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "Arthur Jaffe and Edward Witten, Quantum Yang-Mills Theory, §§4–6"
      url: "https://www.claymath.org/library/monographs/MPPc.pdf"
    - title: "Arthur Jaffe, Constructive Quantum Field Theory, §8, PDF p. 14, For the Millennium: Gauge Theory in Four Dimensions"
      url: "https://arthurjaffe.net/Assets/pdf/CQFT.pdf"
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
---

## Example

Let $\Gamma$ be the boundary graph of a square with vertices $v_0,v_1,v_2,v_3$ and one plaquette, traversed in the order $v_0\to v_1\to v_2\to v_3\to v_0$. Label its successive boundary edges $e_1,e_2,e_3,e_4$; choose their reference orientations to be $v_0\to v_1$, $v_1\to v_2$, $v_3\to v_2$, and $v_0\to v_3$, respectively. Use the compact matrix group $G=SU(2)=\left\{\begin{pmatrix}a&b\\-\overline b&\overline a\end{pmatrix}:a,b\in\mathbb C,\ |a|^2+|b|^2=1\right\}$ in its defining two-dimensional representation. Assign a link variable $U_j\in G$ to each edge in its reference orientation; in the ordered boundary product, a reversed traversal contributes $U_j^{-1}$. Thus the plaquette holonomy is $U_p=U_1U_2U_3^{-1}U_4^{-1}$. The group is the unit sphere $S^3$ in the $(a,b)$ coordinates; let $\mu$ be its normalized round surface measure. For $\beta\ge0$, define the dimensionless action $S_\beta(U)=\beta\left(1-\tfrac12\operatorname{Re}\operatorname{Tr}U_p\right)$ and partition function $Z_\beta=\int_{G^4}e^{-S_\beta(U)}\,d\mu^{\otimes4}(U)$. This finite graph integral satisfies $e^{-2\beta}\le Z_\beta\le1$, so it is finite and strictly positive. It has only four group variables and defines no continuum fields, no Wightman or Osterwalder–Schrader reconstruction, and no Hamiltonian; it therefore does not solve the four-dimensional existence and mass-gap problem.

## Example references

[Arthur Jaffe and Edward Witten, “Quantum Yang-Mills Theory,” §§4–6, printed pp. 141–150](https://www.claymath.org/library/monographs/MPPc.pdf)

[Arthur Jaffe, “Constructive Quantum Field Theory,” §8, PDF p. 14, “For the Millennium: Gauge Theory in Four Dimensions”](https://arthurjaffe.net/Assets/pdf/CQFT.pdf)

## Facts & Assumptions

**Given:** Use the finite graph, group, reference orientations, boundary traversal convention, and $\beta\ge0$ stated in the Example.

[A1] Each matrix in $G$ has the displayed form with $|a|^2+|b|^2=1$, so $\operatorname{Tr}U=2\operatorname{Re}a$.

[A2] The measure $\mu$ is normalized round surface volume on the unit sphere in $\mathbb C^2$, and $\mu^{\otimes4}$ is the corresponding fourfold product probability measure.

[A3] The Hilbert–Schmidt inner product on complex matrices is $\langle X,Y\rangle_{\mathrm{HS}}=\operatorname{Tr}(X^\dagger Y)$.

## Proof

1.1 Products and inverses of matrices in $G$ remain in $G$, so $U_p\in G$. By [A1], $\operatorname{Re}\operatorname{Tr}U_p=2\operatorname{Re}a_p$ for some $a_p$ with $|a_p|\le1$. Hence $-2\le\operatorname{Re}\operatorname{Tr}U_p\le2$, and the defined action satisfies $0\le S_\beta(U)\le2\beta$. [given, A1, algebra]

1.2 Left and right multiplication by any fixed $V\in G$ preserve the Hilbert–Schmidt inner product [A3]: $\operatorname{Tr}((VU)^\dagger(VU))=\operatorname{Tr}(U^\dagger U)$ and $\operatorname{Tr}((UV)^\dagger(UV))=\operatorname{Tr}(U^\dagger U)$ by unitarity and cyclicity of trace. The tangent variation $(\dot a,\dot b)$ maps to a matrix with squared Hilbert–Schmidt norm $2(|\dot a|^2+|\dot b|^2)$, so the displayed embedding induces twice the standard round metric on the $(a,b)$ sphere. These multiplications therefore preserve its round volume and normalization. Thus $\mu$ is a left- and right-invariant probability measure, and the product measure in [A2] has total mass one. [given, A2, A3, algebra]

2.1 Exponentiating the action bounds gives $e^{-2\beta}\le e^{-S_\beta(U)}\le1$ for every $U\in G^4$. The integrand is continuous, hence measurable and integrable on the compact probability space $(G^4,\mu^{\otimes4})$. Integrating the pointwise bounds yields $e^{-2\beta}\le Z_\beta\le1$, which proves finiteness and strict positivity. At $\beta=0$, the integrand is identically one and $Z_0=1$. [given, A1, A2, step 1.1, step 1.2, algebra]

3.1 The defined object is one integral over the finite-dimensional space $G^4$; its definition contains no fields on $\mathbb R^4$, no limiting construction, no reconstructed Hilbert space, and no Hamiltonian whose spectrum could satisfy the required gap condition. It establishes only the finite-regulator integral asserted in the Example, not a continuum Yang–Mills theory or a mass gap. [given, step 2.1, algebra] ∎

## Remarks

This finite construction is a regulated example related to Four-dimensional Yang–Mills existence and mass gap, not a logical approximation theorem or a supplier of the open conclusion.

## Remarks references

[[op-qftx-clay-4d-yang-mills-existence-mass-gap|Clay existence and mass-gap problem]]
