---
id: cex-a-noncompact-codimension-one-foliation-need-not-satisfy-novikov-compactness-conclusions
kind: counterexample
title: A noncompact foliation violating Novikov's compactness conclusions
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- thm-novikov-reeb-component-theorem
- cor-reebless-leaves-are-pi-one-injective-under-novikov-hypotheses
- def-reeb-component-in-a-cooriented-three-manifold-foliation
- def-two-dimensional-torus
- prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
- prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields
- def-regular-foliation-atlas
- def-based-loops-and-fundamental-group
- def-induced-homomorphism-on-fundamental-groups
- def-euclidean-spheres-and-closed-balls
- def-countable-choice-principle-for-foliation-pair
- lem-irrational-torus-flow-is-free-with-dense-orbits
- lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
- cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 23
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.6, printed p. 167
  - title: S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §§6-7, printed pp. 16-25
  - title: 'Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov''s Theorem
      (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)'
    url: https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf
    locator: Introduction, printed p. ix
  - title: Sushmita Venugopalan, Novikov's Theorem in Higher Dimensions? (arXiv:1907.05876)
    url: https://arxiv.org/pdf/1907.05876
    locator: Theorem 1, printed p. 2
---

## Statement refuted

Assume Countable Choice $\mathrm{AC}_\omega$. The Reeblessness conclusions of Novikov's theorem extend to noncompact three-manifolds: every Reebless $C^2$ cooriented codimension-one foliation of an oriented $3$-manifold, compact or not, has all leaves with injective inclusion-induced fundamental-group homomorphisms.

## Facts & Assumptions

**Given:** The three-torus $N_0=T^2\times S^1$ with coordinates $(x,y)$ on the first torus factor, an irrational number $\lambda$, the point $p\in N_0$, and the punctured manifold $M=N_0\setminus\{p\}$.

[F1] A closed constant-rank-one form defines an integrable hyperplane field, so $\ker(dy-\lambda\,dx)$ is the tangent field of a codimension-one foliation ([[prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields]], [[def-regular-foliation-atlas]]).

[F2] The product $T^2\times S^1$ carries its canonical product smooth structure and the product coordinates decompose its tangent space ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-two-dimensional-torus]]).

[F3] A Reeb component is a compact saturated solid torus whose boundary is a single compact leaf ([[def-reeb-component-in-a-cooriented-three-manifold-foliation]]); the inclusion-induced homomorphism on fundamental groups and its injectivity are as in [[def-induced-homomorphism-on-fundamental-groups]] and [[def-based-loops-and-fundamental-group]]; a Euclidean ball and its punctured version are the standard model ([[def-euclidean-spheres-and-closed-balls]]).

[F5] Irrational torus flows have injective immersed dense orbits ([[lem-irrational-torus-flow-is-free-with-dense-orbits]]). A compact oriented surface with genus $g$ and $b>0$ boundary circles has free fundamental group of rank $2g+b-1$ ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]). A circle loop of degree one is essential ([[cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero]]).

[F4] Novikov's theorem and its corollary are stated for closed manifolds ([[thm-novikov-reeb-component-theorem]], [[cor-reebless-leaves-are-pi-one-injective-under-novikov-hypotheses]]), and the standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



## Counterexample

**Proof technique:** direct verification.

1.1 Let $N_0=T^2\times S^1$ with coordinates $(x,y)$ on the first torus factor and the circle coordinate suppressed, and let $\omega=dy-\lambda\,dx$ with $\lambda$ irrational. The form is closed and nowhere vanishing, so by the closed-constant-rank-one-forms criterion its kernel is integrable and defines a codimension-one foliation $F_0$ of $N_0$ by [[def-regular-foliation-atlas]], the product structure being the canonical one of [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]. [F1, F2, given, construct]

2.1 The leaf through $([x_0],[y_0],[z_0])$ is parametrized intrinsically by $(u,[v])\mapsto([x_0+u],[y_0+\lambda u],[v])$. Equality of the first two coordinates would give an integer $k$ with $\lambda k$ an integer, so $k=0$ by irrationality. Plaque continuation gives the intrinsic cylinder $\mathbb R\times S^1$. F5 proves density of its torus orbit, hence density of the cylinder in $N_0$. No leaf is compact, so none can be the compact boundary leaf of a Reeb component. Thus $F_0$ is Reebless. [F3, F5, step 1.1]

3.1 Remove a point $p\in N_0$ and set $M=N_0\setminus\{p\}$, $F=F_0|_M$. Then $M$ is a noncompact three-manifold and $F$ is a codimension-one foliation of it; a Reeb component of $F$ would be a compact foliated solid torus in $M$ and hence in $N_0$, forcing a compact leaf of the Reebless foliation $F_0$, so $F$ is Reebless. [F3, given, step 2.1]

4.1 Let $L$ be the original cylinder containing $p$. The restricted foliation has the connected leaf $L'=L\setminus\{p\}$; there is no leaf of $F$ through the removed point. Choose one intrinsic plaque disk through $p$ in a small foliation box. Dense $L$ may have other plaques in that box, so its full intersection with the box is not asserted to be this disk. Polar coordinates identify $L$ with $\mathbb R^2\setminus\{0\}$; if $p$ maps to $a\ne0$, then $L'\cong\mathbb R^2\setminus\{0,a\}$. Remove small disjoint disks about these two points and cut off the outer end. The resulting compact pair of pants is a deformation retract along the three end collars, so F5 gives free rank two. The map $z\mapsto(z-a)/|z-a|$ has degree one on a sufficiently small puncture circle, proving that circle essential in $L'$ by F5. [F3, F5, step 2.1, step 3.1, construct]

5.1 Center ambient foliation coordinates $(u,v,w)$ at $p$, with the chosen plaque $w=0$. Its puncture circle $u^2+v^2=\varepsilon^2$, $w=0$, bounds the upper hemisphere $u^2+v^2+w^2=\varepsilon^2$, $w\ge0$. This continuous disk avoids $p$ and lies in the coordinate box. The circle is therefore nullhomotopic in $M$ but essential in $L'$ by step 4.1. Inclusion on fundamental groups is noninjective, while $F$ is smooth, cooriented by $\omega$, oriented in the ambient torus and Reebless. This refutes the extension beyond the closed-manifold hypothesis. [F3, F4, step 3.1, step 4.1, construct] ∎