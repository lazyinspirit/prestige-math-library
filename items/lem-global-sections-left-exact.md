---
id: lem-global-sections-left-exact
kind: lemma
title: "Global sections are left exact but need not preserve epimorphisms"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exact-sequence-sheaves, def-kernel-cokernel-image-sheaves, def-section-restriction-and-global-section]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 17.3 and Section 6.9"
      url: "https://stacks.math.columbia.edu/tag/01AF"
    - title: "Ravi Vakil, The Rising Sea, Exercise 2.6.F"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Statement

Let $X$ be a topological space. If
$$
0\to\mathcal F'\to\mathcal F\to\mathcal F''
$$
is exact in sheaves of abelian groups on $X$, then
$$
0\to\Gamma(X,\mathcal F')\to\Gamma(X,\mathcal F)\to\Gamma(X,\mathcal F'')
$$
is exact. However, there exists an epimorphism of sheaves of abelian groups on
some space $X$ whose induced map on global sections is not surjective.

## Facts & Assumptions

**Given:** A topological space $X$.

[F1] Global sections are sections over the whole space:
$\Gamma(X,\mathcal F)=\mathcal F(X)$
([[def-section-restriction-and-global-section]]).

[L1] Kernel sheaves are computed objectwise
([[def-kernel-cokernel-image-sheaves]]).

[L2] Exactness of sheaves means image equals kernel at each interior term
([[def-exact-sequence-sheaves]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $0\to\mathcal F'\to\mathcal F\to\mathcal F''$ is exact. By [L1], the kernel of the map $\Gamma(X,\mathcal F)\to\Gamma(X,\mathcal F'')$ is the section group of the kernel sheaf at $X$. By [L2], that kernel sheaf is the image of $\mathcal F'\to\mathcal F$, so its sections over $X$ are exactly the image of $\Gamma(X,\mathcal F')\to\Gamma(X,\mathcal F)$. Together with [F1], this is the displayed left exactness. [F1, L1, L2, given]

1.2 For the failure of surjectivity, let $X=S^1$, let $\mathcal C$ be the sheaf of continuous real-valued functions on $S^1$, and let $\underline{\mathbb Z}$ be the subsheaf of locally constant integer-valued functions. Let $\mathcal Q$ be the quotient sheaf obtained by sheafifying the presheaf $V\mapsto \mathcal C(V)/\underline{\mathbb Z}(V)$. Every germ of a section of $\mathcal Q$ is represented locally by a continuous real-valued function, so the canonical map $\mathcal C\to\mathcal Q$ is locally surjective and hence an epimorphism of sheaves. [F1, construct]

1.3 Cover the circle by the arcs $U_0=S^1\setminus\{(-1,0)\}$ and $U_1=S^1\setminus\{(1,0)\}$. Choose continuous angle functions $\theta_0:U_0\to(-1/2,1/2)$ and $\theta_1:U_1\to(0,1)$ with $e^{2\pi i\theta_i(z)}=z$. On one connected component of $U_0\cap U_1$ the difference $\theta_1-\theta_0$ is $0$, and on the other it is $1$, so the classes of $\theta_0$ and $\theta_1$ agree in the quotient presheaf and glue to a global section $q\in\Gamma(X,\mathcal Q)$. If $q$ had a lift $g\in\Gamma(X,\mathcal C)$, then $g-\theta_i$ would be an integer-valued continuous function on the connected arc $U_i$, hence a constant $n_i$. On the two components of $U_0\cap U_1$ this would force $n_0-n_1$ to be both $0$ and $1$, a contradiction. Thus $\Gamma(X,\mathcal C)\to\Gamma(X,\mathcal Q)$ is not surjective. [construct, contradiction]

2.1 Step 1.1 gives left exactness, and step 1.3 gives an epimorphism whose global sections map is not surjective. [step 1.1, step 1.3] ∎
