---
id: lem-anyonic-fusion-path-basis
kind: lemma
title: "Fusion paths give a basis of the fixed-boundary path space"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [ def-anyonic-fusion-path-space, def-absolutely-simple-object, def-fusion-and-multifusion-category, def-fusion-rules ]
justified_by: []
proof_strategy: induction
axiom_use: None; all decompositions and basis selections are finite.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, PDF pp. 14–16: fusion multiplicity spaces and tree-basis expansion."
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§4.1, Definition 4.1.1: finite semisimple tensor categories."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $\mathcal C$ be a complex fusion category, let $a,b,c$ be simple objects, and fix a basis $B_{x,a}^y$ of every finite-dimensional split space $W_{x,a}^y=\operatorname{Hom}_{\mathcal C}(y,x\otimes a)$. Use the fixed representative set for internal labels and the chosen empty-path isomorphism of [[def-anyonic-fusion-path-space]], retaining arbitrary simple external objects $a,b,c$. For $n\ge1$, every admissible path $x_0=b,\ldots,x_n=c$ and every tuple of vertex indices $\mu_j\in B_{x_{j-1},a}^{x_j}$ gives a composite map of [[def-anyonic-fusion-path-space]], and these maps form a basis of $H_{a,n;b,c}$. Consequently,

$$\dim H_{a,n;b,c}=\sum_{\substack{x_0=b,\ x_n=c\\x_1,\ldots,x_{n-1}\text{ simple representatives}}}\prod_{j=1}^n N_{x_{j-1}a}^{x_j}.$$

At $n=0$, separately, there is one empty path with vector $u_{c,b}$ when $b\cong c$ and no path otherwise; the displayed sum is for $n\ge1$.

## Facts & Assumptions

**Given:** A complex fusion category $\mathcal C$, simple objects $a,b,c$, $n\ge0$, and the vertex bases in the Statement.

[F1] [[def-anyonic-fusion-path-space]]: $T_0=b$, $T_{j+1}=T_j\otimes a$, $H_{a,n;b,c}=\operatorname{Hom}(c,T_n)$, and a path composite is built from inclusions $i_j:x_j\to x_{j-1}\otimes a$.

[F2] [[def-fusion-and-multifusion-category]]: every object of a fusion category is a finite direct sum of simple objects, and tensor product is bilinear and exact on morphisms.

[F3] [[def-fusion-rules]]: $N_{xy}^z$ is the multiplicity of simple $z$ in $x\otimes y$ and equals $\dim_{\mathbb C}\operatorname{Hom}(x\otimes y,z)$.

[F4] [[def-absolutely-simple-object]]: for simple $z$, $\operatorname{End}(z)=\mathbb C\operatorname{id}_z$; Hom spaces between nonisomorphic simple objects are zero.

## Proof

**Given:** The category, boundary charges, site charge, and split-space bases above.

1.1 For $n=0$, $T_0=b$ and [F4] gives $\operatorname{Hom}(c,b)=0$ when $c\not\cong b$. If $c\cong b$, composition with the chosen isomorphism $u_{c,b}:c\to b$ identifies $\operatorname{End}(c)=\mathbb C\operatorname{id}_c$ with $\operatorname{Hom}(c,b)$, so the latter has basis $u_{c,b}$. This is exactly the typed empty-path convention of [F1]. For $n=1$, the path vectors are directly the chosen basis $B_{b,a}^{c}$ of $\operatorname{Hom}(c,b\otimes a)$, since the starting map is $\operatorname{id}_b$. This separately proves the positive-length base case without requiring the bases for isomorphic but unequal external objects to coincide. [F1, F2, F4, given, base]

1.2 Fix $n\ge1$ and assume for every simple endpoint $x$ that the length-$n$ path composites form a basis of $\operatorname{Hom}(x,T_n)$. [F1, F4, given, ih]

2.1 By finite semisimplicity, the induction hypothesis decomposes $T_n\cong\bigoplus_{x,\gamma}x$, with one summand for each length-$n$ path $\gamma$ ending at $x$. Here $x$ ranges once over the fixed simple representatives, even when the external endpoints are different isomorphic objects. For each such $x$, finite semisimplicity gives $x\otimes a\cong\bigoplus_y y^{\oplus N_{xa}^y}$. Applying $\operatorname{Hom}(y,-)$, all nonisomorphic simple summands vanish and each of the $N_{xa}^y$ copies of $y$ contributes $\operatorname{End}(y)=\mathbb C\operatorname{id}_y$ by [F4]. Hence $\dim W_{x,a}^y=N_{xa}^y$ and the specified inclusion basis has exactly that many vectors. [F2, F3, F4, step 1.2, ih, construct, algebra]

3.1 Choose retractions $p_{x,\gamma}:T_n\to x$ dual to the path inclusions $\gamma:x\to T_n$ in step 2.1. They exist by taking any semisimple decomposition and changing its inclusion basis to the given basis for each simple $x$; the inverse basis matrix changes its retractions. Thus $\sum_{x,\gamma}\gamma p_{x,\gamma}=\operatorname{id}_{T_n}$ and $p_{x,\gamma}\gamma\prime$ is the appropriate Kronecker identity. Tensoring gives a direct-sum decomposition of $T_n\otimes a$ with inclusions $\gamma\otimes\operatorname{id}_a$ and retractions $p_{x,\gamma}\otimes\operatorname{id}_a$. Applying $\operatorname{Hom}(c,-)$ therefore gives the isomorphism $\bigoplus_{x,\gamma}\operatorname{Hom}(c,x\otimes a)\to\operatorname{Hom}(c,T_{n+1})$ sending $(h_{x,\gamma})$ to $\sum_{x,\gamma}(\gamma\otimes\operatorname{id}_a)h_{x,\gamma}$. Its inverse applies each displayed retraction. Inserting the specified basis $B_{x,a}^{c}$ in each summand gives exactly the length-$(n+1)$ path composites of [F1], so they form a basis, including when the external $c$ differs from its representative. [F1, F2, F3, F4, step 1.2, step 2.1, ih, induction]

4.1 For $n\ge1$, step 3.1 shows that each admissible path contributes one basis vector for every tuple of vertex indices, hence contributes $\prod_{j=1}^n\dim W_{x_{j-1},a}^{x_j}=\prod_{j=1}^nN_{x_{j-1}a}^{x_j}$ vectors. Summing over the finitely many internal simple labels gives the displayed dimension; every sum is finite because the category has finitely many simple isomorphism classes and $n$ is finite. Step 1.1 gives the separate $n=0$ count. Induction completes the basis proof and count. [F1, F2, F3, step 3.1, induction, discharge-induction: step 1.1, algebra] ∎
