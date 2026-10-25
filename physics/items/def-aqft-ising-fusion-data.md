---
id: def-aqft-ising-fusion-data
kind: definition
title: "Skeletal Ising fusion-data package"
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-noninvertible-symmetries
dependency_level: 1
deps:
  - def-aqft-noninvertible-defect-fusion
dependency_roles:
  def-aqft-noninvertible-defect-fusion: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Steven H. Simon, Topological Quantum, §§9.2–9.3"
      url: "https://www-thphys.physics.ox.ac.uk/people/SteveSimon/topological2020/TopoBookSep12.pdf"
      locator: "PDF pp. 119–121 (book pagination approximately 103–105): Ising fusion-channel bases, F-symbols, and the pentagon equation."
    - title: "David Aasen, Roger S. K. Mong, and Paul Fendley, Topological Defects on the Lattice I: The Ising Model"
      url: "https://arxiv.org/pdf/1601.07185"
      locator: "§§4.1–4.3, PDF pp. 17–22, especially equations (4.6), (4.14)–(4.15), and (4.19)–(4.21): explicit junction tensors and Ising F-symbols."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Let the scalar field be $\mathbb C$ and let the simple labels be $\mathbf 1$, $\psi$, and $\sigma$. Define a $\mathbb C$-linear semisimple category candidate whose objects are finite direct sums of these labels, whose simple-label Hom space is $\mathbb C$ when the labels agree and $0$ otherwise, and whose Hom spaces between direct sums are the corresponding finite matrices. Give the simple-label fusion product by

$$
\mathbf 1\otimes a=a\otimes\mathbf 1=a,\qquad \psi\otimes\psi=\mathbf 1,\qquad \psi\otimes\sigma=\sigma\otimes\psi=\sigma,\qquad \sigma\otimes\sigma=\mathbf 1\oplus\psi.
$$

Extend the product bilinearly to direct sums and on morphisms by the induced tensor product of scalar maps. The unit is $\mathbf 1$ and the unitors are strict. Fusion spaces are $V_{ab}^c=\operatorname{Hom}(a\otimes b,c)$; each is one-dimensional when the displayed fusion rule allows $c$ and is zero otherwise. In every allowed one-dimensional fusion space choose its displayed basis vector. On three simple labels, define the associator in these bases by the matrix $[F^{abc}_d]_{xy}$, where $x$ is the intermediate label in $(a\otimes b)\otimes c\to d$ and $y$ is the intermediate label in $a\otimes(b\otimes c)\to d$. Set

$$
\left[F^{\sigma\sigma\sigma}_{\sigma}\right]_{xy}=\frac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}_{xy},\qquad x,y\in\{\mathbf 1,\psi\},
$$

$$
\left[F^{\psi\sigma\psi}_{\sigma}\right]_{\sigma\sigma}=-1,\qquad \left[F^{\sigma\psi\sigma}_{\psi}\right]_{\sigma\sigma}=-1.
$$

Every other coefficient is $1$ when all four fusion vertices are allowed and $0$ when any required fusion vertex is forbidden. Extend each associator linearly over direct sums. The candidate dual of each simple label is itself. For $\mathbf 1$ and $\psi$, take evaluation and coevaluation to be the unit-channel basis maps with coefficient $1$. For $\sigma$, take evaluation $\sigma\otimes\sigma\to\mathbf 1$ and coevaluation $\mathbf 1\to\sigma\otimes\sigma$ to have coefficient $2^{1/4}$ in the $\mathbf 1$ channel and zero in the $\psi$ channel. This item specifies the data; the separate coherence result checks that they satisfy the fusion-category axioms. No braiding or physical realization is included in this definition.

## Definition references

[Simon, *Topological Quantum*, §§9.2–9.3](https://www-thphys.physics.ox.ac.uk/people/SteveSimon/topological2020/TopoBookSep12.pdf)

[Aasen, Mong, and Fendley, §§4.1–4.3](https://arxiv.org/pdf/1601.07185)
