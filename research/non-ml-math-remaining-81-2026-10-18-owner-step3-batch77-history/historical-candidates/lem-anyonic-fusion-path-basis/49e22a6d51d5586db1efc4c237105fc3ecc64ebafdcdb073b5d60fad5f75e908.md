---
id: lem-anyonic-fusion-path-basis
kind: lemma
title: "Fusion paths give a basis of the fixed-boundary path space"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-anyonic-fusion-path-space, def-absolutely-simple-object, def-fusion-and-multifusion-category, def-fusion-rules]
justified_by: []
proof_strategy: induction
axiom_use: None; all decompositions and basis selections are finite.
provenance:
  statement: literature-derived
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
---

## Statement

Let $\mathcal C$ be a complex fusion category, fix a representative set $\operatorname{Irr}(\mathcal C)$ for its simple isomorphism classes as in [[def-fusion-rules]], and take $a,b,c\in\operatorname{Irr}(\mathcal C)$. Fix a basis $B_{x,a}^y$ of every finite-dimensional split space $W_{x,a}^y=\operatorname{Hom}_{\mathcal C}(y,x\otimes a)$ for $x,y\in\operatorname{Irr}(\mathcal C)$. For every admissible path $x_0=b,\ldots,x_n=c$ and every tuple of vertex indices $\mu_j\in B_{x_{j-1},a}^{x_j}$, the composite maps of [[def-anyonic-fusion-path-space]] form a basis of $H_{a,n;b,c}$. Consequently,

$$\dim H_{a,n;b,c}=\sum_{\substack{x_0=b,\ x_n=c\\x_1,\ldots,x_{n-1}\in\operatorname{Irr}(\mathcal C)}}\prod_{j=1}^n N_{x_{j-1}a}^{x_j}.$$

The empty product is $1$ when $b=c$ (equivalently $b\cong c$ among these representatives) and $0$ otherwise.

## Facts & Assumptions

**Given:** A complex fusion category $\mathcal C$, its representative set $\operatorname{Irr}(\mathcal C)$, labels $a,b,c$ in that set, $n\ge0$, and the vertex bases in the Statement.

[F1] [[def-anyonic-fusion-path-space]]: $T_0=b$, $T_{j+1}=T_j\otimes a$, $H_{a,n;b,c}=\operatorname{Hom}(c,T_n)$, and a path composite is built from inclusions $i_j:x_j\to x_{j-1}\otimes a$.

[F2] [[def-fusion-and-multifusion-category]]: every object of a fusion category is a finite direct sum of simple objects, and tensor product is bilinear and exact on morphisms.

[F3] [[def-fusion-rules]]: $N_{xy}^z$ is the multiplicity of representative $z$ in $x\otimes y$, equals $\dim_{\mathbb C}\operatorname{Hom}(x\otimes y,z)$, and uses the chosen representative set of simple isomorphism classes.

[F4] [[def-absolutely-simple-object]]: for simple $z$, $\operatorname{End}(z)=\mathbb C\operatorname{id}_z$; Hom spaces between nonisomorphic simple objects are zero.

## Proof

**Given:** The category, boundary charges, site charge, and split-space bases above.

1.1 For $n=0$, $T_0=b$; since $b,c$ are representatives, $c\cong b$ holds exactly when $c=b$. Semisimplicity and [F4] then give $\operatorname{Hom}(c,b)=0$ when $c\ne b$ and $\mathbb C\operatorname{id}_b$ when $c=b$. This is exactly the stated empty-path convention. [F1, F2, F3, F4, given, base]

1.2 Fix $n\ge0$ and assume for every endpoint representative $x\in\operatorname{Irr}(\mathcal C)$ that the length-$n$ path composites form a basis of $\operatorname{Hom}(x,T_n)$. [F1, F3, F4, given, ih]

2.1 By finite semisimplicity, the induction hypothesis decomposes $T_n\cong\bigoplus_{x,\gamma}x$, with one summand for each length-$n$ path $\gamma$ ending at representative $x$. For each simple representative $x$, choose the inclusions from a basis of $W_{x,a}^y=\operatorname{Hom}(y,x\otimes a)$; their number is $N_{xa}^y$ by [F3] and absolute simplicity [F4]. [F2, F3, F4, step 1.2, ih, construct]

3.1 Tensoring the decomposition in step 2.1 by $a$ gives $T_{n+1}\cong\bigoplus_{x,\gamma}(x\otimes a)$, and decomposing each factor into its simple summands yields precisely all length-$(n+1)$ path composites from [F1]. Applying $\operatorname{Hom}(c,-)$ selects exactly the summands isomorphic to $c$, each once by [F4], so these composites form a basis of $\operatorname{Hom}(c,T_{n+1})$. [F1, F2, F3, F4, step 1.2, step 2.1, ih, induction]

4.1 By step 3.1, each admissible path contributes one basis vector for every tuple of vertex indices, hence contributes $\prod_{j=1}^n\dim W_{x_{j-1},a}^{x_j}=\prod_{j=1}^nN_{x_{j-1}a}^{x_j}$ vectors. Summing over the finitely many internal simple labels gives the displayed dimension; every sum is finite because the category has finitely many simple isomorphism classes and $n$ is finite. Induction from step 1.1 completes the basis proof and count. [F1, F2, F3, step 3.1, induction, discharge-induction: step 1.1, algebra] ∎
