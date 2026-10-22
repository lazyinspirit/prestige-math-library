---
id: ex-knot-kt-09-worked-cases
kind: example
title: "Hopf link and two-component unlink Alexander modules"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-maximal-abelian-cover-alexander-module
  - lem-maximal-abelian-cover-link-exterior-retraction
  - lem-multivariable-laurent-ring-noetherian-ufd
  - lem-multivariable-alexander-order-and-specialization
  - def-one-variable-alexander-module-of-an-oriented-link
  - thm-classification-of-connected-covering-spaces
  - thm-cellular-homology-computes-singular-homology
  - thm-homotopy-lifting-for-covering-maps
  - prop-retracts-inject-fundamental-groups
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Thomas Cochran, Classical Isotopy Invariants of Links and 3-Manifolds, slides 4–5"
      url: "https://math.rice.edu/~cochran/ResearchLectures/KAISTLecture2.pdf"
    - title: "Daniel S. Silver and Susan G. Williams, Mahler Measure, Links and Homology Growth, §4"
      url: "https://arxiv.org/pdf/math/0003127"
    - title: "Allen Hatcher, Algebraic Topology, §§1.3 and 2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Example

Let $\Lambda_2=\mathbb Z[t_1^{\pm1},t_2^{\pm1}]$, $\Lambda_1=\mathbb Z[t^{\pm1}]$, and let $\eta:\Lambda_2\to\Lambda_1$ send $t_1,t_2$ to $t$. Choose standard pairwise-disjoint radius-$\epsilon$ tubes with $0<\epsilon<1/\sqrt2$. Let $H$ be the standard Hopf link $\{z=0\}\cup\{w=0\}$ in $S^3=\{(z,w)\in\mathbb C^2:|z|^2+|w|^2=1\}$, orienting its components so the increasing phase meridians are positive, and let $U$ be the standard two-component unlink whose components lie in separate $3$-balls. Use a spine vertex as the basepoint for the unlink cover. For $H$, the complement is $T^2\times(0,1)$ and the compact exterior is $T^2\times I$; its maximal abelian cover is $\mathbb R^2\times I$, so its absolute multivariable Alexander module is $A_H=0$. Its total-linking cyclic cover is $S^1\times\mathbb R\times I$, with trivial $t$-action on first homology, so the one-variable Alexander module is $\Lambda_1/(t-1)$, whereas $A_H\otimes_{\Lambda_2,\eta}\Lambda_1=0$. For $U$, the compact exterior is a genus-two handlebody with spine $S^1\vee S^1$, and its maximal-abelian-cover chain complex is $\Lambda_2^2\xrightarrow{(t_1-1,\ t_2-1)}\Lambda_2$; its first homology is free of rank one, so $A_U\cong\Lambda_2$. The total-linking cyclic-cover complex is $\Lambda_1^2\xrightarrow{(t-1,\ t-1)}\Lambda_1$, with first homology $\Lambda_1$. These computations distinguish chain specialization from tensoring the multivariable homology module.

The projection below is schematic: the upper crossing has the first component $K_1$ (blue) over, and the lower crossing has the second component $K_2$ (red) over. The calculations use the stated coordinate and handlebody models, not the drawing.

```tikz
\begin{tikzpicture}[scale=1.1]
  \draw[red,thick] (0.55,0) circle (1);
  \draw[blue,thick] (-0.55,0) circle (1);
  \draw[white,line width=5pt] plot[domain=115:132,samples=20] ({0.55+cos(\x)},{sin(\x)});
  \draw[blue,thick] plot[domain=48:66,samples=20] ({-0.55+cos(\x)},{sin(\x)});
  \draw[white,line width=5pt] plot[domain=-66:-47,samples=20] ({-0.55+cos(\x)},{sin(\x)});
  \draw[red,thick] plot[domain=225:248,samples=20] ({0.55+cos(\x)},{sin(\x)});
  \node[fill=white,inner sep=1pt,font=\scriptsize] at (0,0.835) {blue over};
  \node[fill=white,inner sep=1pt,font=\scriptsize] at (0,-0.835) {red over};
  \node[blue] at (-1.25,0.15) {$K_1$};
  \node[red] at (1.25,-0.15) {$K_2$};
\end{tikzpicture}
```

## Example references

[[def-maximal-abelian-cover-alexander-module]]

[[def-one-variable-alexander-module-of-an-oriented-link]]

## Facts & Assumptions

**Given:** AC; the standard Hopf link $H$ and two-component unlink $U$ specified in the Example; and the maximal-abelian and total-linking covers of their compact exteriors.

[A1] AC is the assumption of the maximal-abelian-cover definition ([[def-axiom-of-choice]]).

[F1] The multivariable module is absolute first homology of the maximal abelian cover, with the positive-meridian deck action ([[def-maximal-abelian-cover-alexander-module]]).

[F2] The one-variable module is first homology of the cover classified by total linking, whose defining homomorphism sums the Alexander-dual meridian coordinates ([[def-one-variable-alexander-module-of-an-oriented-link]]).

[F3] Connected covers are classified by the subgroups they induce ([[thm-classification-of-connected-covering-spaces]]).

[F4] Cellular homology agrees naturally with singular homology for CW complexes ([[thm-cellular-homology-computes-singular-homology]]).

[F5] $\Lambda_2$ is a domain and UFD, with signed monomials as its units ([[lem-multivariable-laurent-ring-noetherian-ufd]]

[[prop-retracts-inject-fundamental-groups]]).

[F6] Diagonal coefficient extension of the maximal-abelian-cover chain complex is the total-linking cyclic-cover chain complex ([[lem-multivariable-alexander-order-and-specialization]]).

[F7] The compact-exterior maximal abelian cover and the open-complement maximal abelian cover are deck-equivariantly homotopy equivalent and have the same module ([[lem-maximal-abelian-cover-link-exterior-retraction]]).

[F8] Homotopies into a covering base lift uniquely after an initial lift is specified ([[thm-homotopy-lifting-for-covering-maps]]).

[F9] A deformation retract induces an isomorphism on fundamental groups at every basepoint in the retract ([[prop-retracts-inject-fundamental-groups]]).

## Verification

1.1 Every point of $S^3\setminus H$ has $z\ne0$ and $w\ne0$. The map $(z,w)\mapsto(z/|z|,w/|w|,|z|)$ has inverse $(u,v,s)\mapsto(su,\sqrt{1-s^2}v)$, so the open complement is $T^2\times(0,1)$ and a compact exterior is $T^2\times I$. The two phase loops are positive meridians of the two coordinate-circle components, hence form the basis of $\pi_1(E_H)=H_1(E_H;\mathbb Z)=\mathbb Z^2$. By [F3], the maximal abelian cover is the universal cover $\mathbb R^2\times I$, whose first homology vanishes. The compact-exterior/open-complement identification [F7] therefore gives $A_H=0$. [A1, F1, F3, F7, given, construct]

1.2 By [F1], the two positive meridians form the coordinate basis; the coordinate-sum definition [F2] therefore sends both to $1$, so its kernel in $\mathbb Z^2$ is generated by $(1,-1)$. Quotienting the universal cover $\mathbb R^2\times I$ by this rank-one translation subgroup gives $S^1\times\mathbb R\times I$. Its first homology is $\mathbb Z$ generated by the circle. Every deck transformation is represented by a translation, and the path of translations from the identity to that translation is a homotopy, so $t$ acts as $1$. Thus the cyclic module is $\Lambda_1/(t-1)\ne0$, whereas $A_H\otimes_{\Lambda_2,\eta}\Lambda_1=0$ because $A_H=0$. [F1, F2, F3, step 1.1, algebra]

2.1 For the standard unknot $K=\{w=0\}$ in $S^3\subset\mathbb C^2$, the exterior of the tube $|w|\le\epsilon$ is homeomorphic to $D^2_{\sqrt{1-\epsilon^2}}\times S^1$ by $(z,v)\mapsto(z,\sqrt{1-|z|^2}\,v)$; hence it is a solid torus. A separating sphere for the split unlink shows that $E_U$ is the boundary connected sum of two such solid tori, a genus-two handlebody. Its standard spine is $G=S^1\vee S^1$, with loop cores representing the two positive meridians. The handlebody is the regular neighborhood of $G$ in the standard handlebody sense. In its $0$-handle choose a tree joining the centers of all four attaching disks, and use a maximal tree of that graph together with the two $1$-handle cores to form the spine $G$. The $0$-handle is a regular neighborhood of the chosen tree, and each $1$-handle is $D^2\times I$ around its core. Contract the disk fibers in the $0$-handle and in each $1$-handle to their cores; these maps agree on the attaching disks and give a strong deformation retraction fixed on $G$. By [F9], inclusion induces an isomorphism on fundamental groups, so the restricted maximal abelian cover of $G$ is connected and classified by the kernel of $\pi_1(G)\to\mathbb Z^2$; surjectivity follows because its two loop generators are the meridian basis. Lift this retraction using [F8]. Uniqueness fixes the preimage of $G$, and for every deck transformation $h$ the lifts $h\widetilde F$ and $\widetilde Fh$ agree initially, so the lift is deck-equivariant. Its first homology is therefore the module of the graph cover. With one vertex and two oriented loop edges, the lifted cellular boundary sends the $i$th edge to $(t_i-1)$ times the vertex, giving $C_1=\Lambda_2^2\xrightarrow{(t_1-1,\ t_2-1)}C_0=\Lambda_2$. [A1, F1, F3, F4, F7, F8, F9, given, construct]

2.2 The quotient $\Lambda_2/(t_1-1)$ is $\mathbb Z[t_2^{\pm1}]$, a domain by [F5], so $t_1-1$ is prime. It does not divide $t_2-1$, whose image under $t_1\mapsto1$ is the nonzero element $t_2-1$. If $(a,b)$ lies in the kernel, $(t_1-1)a=-(t_2-1)b$, so primality forces $t_1-1$ to divide $b$. Write $b=(t_1-1)c$; cancellation in the domain gives $a=-(t_2-1)c$. Thus the kernel is generated by $(-(t_2-1),t_1-1)$; it is free because its second coordinate can vanish only when $c=0$. Hence $A_U\cong\Lambda_2$. [F4, F5, step 2.1, algebra]

3.1 Under total linking, both loop edges map to $t$, so [F6] gives the cyclic-cover boundary $(t-1,t-1):\Lambda_1^2\to\Lambda_1$. Since $\Lambda_1$ is a domain, its kernel consists of $(a,-a)$ and is free of rank one. This confirms the stated cyclic-cover module and completes the example. [F2, F5, F6, step 2.1, algebra] ∎

## Sources

[[def-maximal-abelian-cover-alexander-module]]

[[def-one-variable-alexander-module-of-an-oriented-link]]

[[thm-classification-of-connected-covering-spaces]]

[[lem-maximal-abelian-cover-link-exterior-retraction]]

[[lem-multivariable-laurent-ring-noetherian-ufd]]

[[prop-retracts-inject-fundamental-groups]]
