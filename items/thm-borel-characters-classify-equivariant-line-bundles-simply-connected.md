---
id: thm-borel-characters-classify-equivariant-line-bundles-simply-connected
kind: theorem
title: Borel characters classify equivariant flag line bundles
status: draft
origin: pipeline
landmark: true
deps:
  - def-borel-character-equivariant-line-bundle
  - lem-semisimple-flag-torsor-zariski-charts
  - lem-semisimple-borel-root-factorization
  - thm-semisimple-flag-variety-smooth-projective
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - def-invertible-sheaf
  - def-sheaf-tensor-product
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 7, 17, 20-23, especially 21.68-21.91 and 23.59 (line bundles on flag varieties and characters of B)"
    - title: "Michel Brion, Lectures on the Geometry of Flag Varieties"
      url: https://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf
      locator: "§1.3 (line bundles on G/B) and §2.1"
    - title: "Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem"
      url: https://people.math.harvard.edu/~lurie/papers/bwb.pdf
      locator: "Complete three-page note, especially Theorems 1 and 3 and Lemma 4"
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with Borel $B=T\ltimes U$ and flag variety
$X=G/B$ as fixed in
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]],
[[lem-semisimple-borel-root-factorization]] and
[[thm-semisimple-flag-variety-smooth-projective]]. Then:

(i) taking the fibre at the base point $eB$ gives an equivalence of groupoids
between $G$-equivariant algebraic line bundles on $X$ and one-dimensional
algebraic representations of $B$: the fibre functor
$$\Phi:\mathcal L\longmapsto\Bigl(\mathcal L_{eB},\ \text{the induced }B\text{-action}\Bigr)$$
is full, faithful and essentially surjective, with quasi-inverse
$\mathbb C_\chi\mapsto G\times^B\mathbb C_\chi$;

(ii) consequently the isomorphism classes of $G$-equivariant algebraic line
bundles on $X$ are in bijection with the characters of $B$, hence with
$X^*(B)\cong X^*(T)$ by clause (iv) of
[[lem-semisimple-borel-root-factorization]]; with the sign convention of
[[def-borel-character-equivariant-line-bundle]] the class of
$\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$ corresponds to $-\lambda$.

The statement classifies $G$-equivariant line bundles only; it makes no claim
about line bundles on $X$ without an equivariant structure.

## Facts & Assumptions

**Given:** the group $G$ with Borel $B=T\ltimes U$, the flag variety $X=G/B$ with its quotient structure and $B$-torsor $\pi_B:G\to X$, the associated equivariant line bundles $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] $\pi_B:G\to X$ is the quotient of $G$ by right translation by $B$ with fibres the right cosets; over a finite subcover of single $G$-translates of the open big-cell chart it is a trivial $B$-torsor, so every $G$-equivariant fibre bundle associated with $\pi_B$, in particular every $\mathcal L_\lambda$, is Zariski locally trivial over those charts. ([[lem-semisimple-flag-torsor-zariski-charts]], [[thm-semisimple-flag-variety-smooth-projective]])

[F2] The restriction of characters is an isomorphism $X^*(B)\to X^*(T)$, $\chi\mapsto\chi|_T$; every character of $B$ is trivial on the unipotent radical $U$. ([[lem-semisimple-borel-root-factorization]])

[F3] For every $\lambda\in X^*(T)$ the sheaf $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$ is a $G$-equivariant line bundle on $X$: its fibre over $gB$ is the one-dimensional space $\{[g,v]:v\in\mathbb C\}$ on which $B$ acts by $-\lambda$ at the base point, the left $G$-action $g'[g,v]=[g'g,v]$ commutes with it, $\mathcal L_0$ is the structure sheaf, and $\mathcal L_\lambda\otimes\mathcal L_\mu\cong \mathcal L_{\lambda+\mu}$, $\mathcal L_\lambda^{\vee}\cong \mathcal L_{-\lambda}$. ([[def-borel-character-equivariant-line-bundle]], [[def-invertible-sheaf]], [[def-sheaf-tensor-product]])



**Proof technique:** direct: describe the fibre functor at $eB$, prove faithfulness and fullness from transitivity of the $G$-action and $B$-equivariance of the fibre maps, prove essential surjectivity by the evaluation isomorphism $G\times^B\mathcal L_{eB}\cong\mathcal L$, and read off the classification through the identification $X^*(B)\cong X^*(T)$.

## Proof

1.1 The fibre functor. For a $G$-equivariant line bundle $\mathcal L$ on $X$, the point $eB$ is fixed by $B$, so the action of $G$ on $\mathcal L$ restricts to an action of $B$ on the one-dimensional vector space $\mathcal L_{eB}$; this action is a morphism $B\times\mathcal L_{eB}\to\mathcal L_{eB}$ of varieties and is linear on each fibre, hence makes $\mathcal L_{eB}$ a one-dimensional algebraic $B$-representation $\mathbb C_\chi$ for a character $\chi\in X^*(B)$. A $G$-equivariant morphism $\varphi:\mathcal L\to\mathcal M$ of line bundles induces a $B$-equivariant linear map $\varphi_{eB}:\mathcal L_{eB}\to\mathcal M_{eB}$, so $\Phi$ is a functor from $G$-equivariant line bundles to one-dimensional algebraic $B$-representations. [F1, F3, given]

2.1 Faithfulness and fullness. Let $\varphi:\mathcal L\to\mathcal M$ be $G$-equivariant with $\varphi_{eB}=0$. For a point $x=gB$ and $v\in\mathcal L_x$, choose $w\in\mathcal L_{eB}$ with $v=g\cdot w$, possible because $G$ acts transitively on $X$ and the action map is an isomorphism on fibres of a $G$-equivariant line bundle; then $\varphi_x(v)=g\cdot\varphi_{eB}(w)=0$, so $\varphi=0$. Hence $\Phi$ is faithful. Conversely let $\psi:\mathcal L_{eB}\to\mathcal M_{eB}$ be any $B$-equivariant linear map. Define $\varphi_x(g\cdot w)=g\cdot\psi(w)$ for $x=gB$; this is well defined because an ambiguity $g\mapsto gb$ changes the fibre coordinate by the $B$-action and $\psi$ commutes with that action. To see regularity, use each Zariski-local section $s:V\to G$ of [F1]: the action identifies $\mathcal L|_V$ and $\mathcal M|_V$ with $V\times\mathcal L_{eB}$ and $V\times\mathcal M_{eB}$, and in these trivializations $\varphi|_V=\operatorname{id}_V\times\psi$ is a morphism. The formulas agree on overlaps by $B$-equivariance, so they glue to a $G$-equivariant morphism of line bundles. Thus the induced map $\operatorname{Hom}_G(\mathcal L,\mathcal M)\to \operatorname{Hom}_B(\mathcal L_{eB},\mathcal M_{eB})$ is bijective. [F1, step 1.1]

2.2 Essential surjectivity. Let $\mathcal L$ be a $G$-equivariant line bundle and $\mathbb C_\chi=\mathcal L_{eB}$ its fibre at $eB$ as in step 1.1. The evaluation morphism $$G\times\mathbb C_\chi\longrightarrow\mathcal L,\qquad(g,v)\longmapsto g\cdot v,$$ is $B$-equivariant for the right $B$-action $(g,v)\cdot b=(gb,b^{-1}\cdot v)$ on the product, because $g b\cdot(b^{-1}\cdot v)=g\cdot v$; it therefore descends to a morphism $G\times^B\mathbb C_\chi\to\mathcal L$ of line bundles over $X=G/B$, and this morphism is $G$-equivariant for the left action $g'[g,v]=[g'g,v]$. On the fibre over each point it is the linear isomorphism $g\cdot(-):\mathcal L_{eB}\to\mathcal L_{gB}$, so it is an isomorphism of line bundles. Hence $\mathcal L$ is $G$-equivariantly isomorphic to an associated bundle of a one-dimensional $B$-representation, and this evaluation supplies the quasi-inverse comparison. Conversely, for every character $\chi$ of $B$, put $\lambda=-\chi|_T$. By [F2] and [F3], $\mathcal L_\lambda=G\times^B\mathbb C_\chi$ has fibre $\mathbb C_\chi$ at $eB$, which proves essential surjectivity. The construction is Zariski-locally trivial by [F1]. [F1, F2, F3, step 1.1]

3.1 Classification. Steps 2.1 and 2.2 show that $\Phi$ is an equivalence of groupoids. A one-dimensional algebraic representation of $B$ is determined up to isomorphism by its character, and distinct characters give non-isomorphic representations, so the isomorphism classes of the targets of $\Phi$ are in bijection with $X^*(B)$; equivalently $[\mathcal L]\mapsto\chi$ where $\mathcal L_{eB}\cong\mathbb C_\chi$ is a bijection onto $X^*(B)$. By [F2] the restriction map $X^*(B)\to X^*(T)$ is an isomorphism, so the classes are also in bijection with $X^*(T)$; the sign convention of [F3] makes the fibre of $\mathcal L_\lambda$ over $eB$ the module $\mathbb C_{-\lambda}$, so under this bijection the class of $\mathcal L_\lambda$ corresponds to $-\lambda$. [F2, F3, step 2.1, step 2.2]

4.1 Conclusion. Clauses (i) and (ii) rest on the fibre functor of step 1.1, its full faithfulness in step 2.1, essential surjectivity in step 2.2 and the character computation in step 3.1. The Axiom of Choice [A1] is assumed in the statement and is inherited through the quotient and torsor structure [F1] and the associated-bundle construction [F3]; the proof itself makes no choice, the constructions being canonical and the only cover used being the fixed finite torsor chart cover of [F1]. The quotient and local triviality used at steps 1.1 and 2.2 are supplied by [F1], and the associated bundle and its sign convention by [F3]. [A1, F1, F2, F3, step 1.1, step 2.1, step 2.2, step 3.1] ∎
