---
id: ex-restriction-coproduct-for-s-three-one
kind: example
title: "The restriction coproduct of the character $\\chi^{(3,1)}$ of $S_4$"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 3
deps:
  - prop-restriction-coproduct-is-schur-skewing
  - def-restriction-coproduct-on-the-graded-symmetric-group-character-ring
  - thm-littlewood-richardson-schur-product-expansion
  - def-skew-schur-function-by-hall-adjointness
  - def-littlewood-richardson-tableau-and-coefficient
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-partition-young-diagram-and-conjugate-partition
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
  - thm-frobenius-characteristic-sends-specht-characters-to-schur-functions
  - thm-standard-polytabloid-basis
  - def-young-tableau-standard-tableau-and-shape
  - def-character-of-a-complex-representation
  - thm-characters-of-direct-sums-tensor-products-and-duals
  - lem-character-ring-of-a-direct-product-is-the-tensor-product
  - def-finite-symmetric-group-and-permutation-notation
  - def-stable-schur-function-by-bialternants
  - thm-schur-functions-form-an-orthonormal-integral-basis
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §5 (5.1)–(5.12), printed pp. 69–72: skew Schur functions and their tableau expansion; Chapter I §7, Example 3, printed pp. 116–117: the skew character and restriction of χ^λ to S_m×S_r; Example 26, printed p. 134: the restriction coproduct on the graded symmetric-group character ring."
---

## Example

Using the ordered-block restriction coproduct, the irreducible character $\chi^{(3,1)}$ of $S_4$ has components

$$\begin{aligned}\Delta_{0,4}(\chi^{(3,1)})&=1\otimes\chi^{(3,1)},\\\Delta_{1,3}(\chi^{(3,1)})&=\chi^{(1)}\otimes\bigl(\chi^{(3)}+\chi^{(2,1)}\bigr),\\\Delta_{2,2}(\chi^{(3,1)})&=\chi^{(2)}\otimes\bigl(\chi^{(2)}+\chi^{(1,1)}\bigr)+\chi^{(1,1)}\otimes\chi^{(2)},\\\Delta_{3,1}(\chi^{(3,1)})&=\bigl(\chi^{(3)}+\chi^{(2,1)}\bigr)\otimes\chi^{(1)},\\\Delta_{4,0}(\chi^{(3,1)})&=\chi^{(3,1)}\otimes1.\end{aligned}$$

Under Frobenius characteristic these are the five bidegree terms of
$$\Delta_\Lambda(s_{(3,1)})=\sum_{\mu\subseteq(3,1)}s_\mu\otimes s_{(3,1)/\mu},$$
where
$$s_{(3,1)/(1)}=s_{(3)}+s_{(2,1)},\qquad s_{(3,1)/(2)}=s_{(2)}+s_{(1,1)},\qquad s_{(3,1)/(1,1)}=s_{(2)},\qquad s_{(3,1)/(3)}=s_{(1)},\qquad s_{(3,1)/(2,1)}=s_{(1)}.$$
At the identity of each $S_a\times S_{4-a}$ the corresponding component has value $3=\chi^{(3,1)}(1)$.

## Facts & Assumptions

**Given:** The partition $(3,1)$, its irreducible character $\chi^{(3,1)}$, the ordered-block restriction coproduct, and the inherited Littlewood–Richardson tableau convention.

[F1] For $a+b=n$, $\Delta_{a,b}(f)$ is the restriction of $f$ to the ordered block subgroup $S_a\times S_b$, pulled back to that product; its endpoints are $\Delta_{0,n}(f)=1\otimes f$ and $\Delta_{n,0}(f)=f\otimes1$ ([[def-restriction-coproduct-on-the-graded-symmetric-group-character-ring]]).

[F2] Under Frobenius characteristic, the coproduct is Schur skewing: $\Delta_\Lambda(s_\lambda)=\sum_{\mu\subseteq\lambda}s_\mu\otimes s_{\lambda/\mu}$, and its bidegree coefficients are the restriction multiplicities ([[prop-restriction-coproduct-is-schur-skewing]]).

[F3] The skew Schur function has expansion $s_{\lambda/\mu}=\sum_\nu c^\lambda_{\mu\nu}s_\nu$ ([[thm-littlewood-richardson-schur-product-expansion]]).

[F4] $c^\lambda_{\mu\nu}$ is the number of Littlewood–Richardson tableaux of shape $\lambda/\mu$ and content $\nu$ ([[def-littlewood-richardson-tableau-and-coefficient]]).

[F5] The skew diagram is $[\lambda]\setminus[\mu]$ in English coordinates; semistandard entries weakly increase along rows and strictly increase down columns ([[def-skew-diagram-and-semistandard-skew-tableau]]).

[F6] Partitions are weakly decreasing row lengths, $\mu\subseteq\lambda$ means diagram containment, the size is the number of nodes, and $\varnothing$ is the unique partition of zero ([[def-partition-young-diagram-and-conjugate-partition]]).

[F7] The Specht module $S^\lambda$ is defined from the column antisymmetrizer and its tabloid action; the $S^\lambda$ form a complete irredundant list of irreducible complex representations of $S_n$, with character $\chi^\lambda$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]], [[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]).

[F8] The Frobenius characteristic sends $\chi^\lambda$ to $s_\lambda$ ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]).

[F9] The standard polytabloids form a basis of $S^\lambda$, so $\dim_{\mathbb C}S^\lambda=f^\lambda$ ([[thm-standard-polytabloid-basis]]).

[F10] A character is the trace of the representing operator; in particular, its value at the identity is the dimension ([[def-character-of-a-complex-representation]]).

[F11] Character values add on direct sums ([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[F12] For irreducible characters of $G$ and $H$, $(\chi\boxtimes\psi)(g,h)=\chi(g)\psi(h)$ ([[lem-character-ring-of-a-direct-product-is-the-tensor-product]]).

[F13] $S_n=\operatorname{Sym}(\{0,1,\ldots,n-1\})$, and $S_0$ is the trivial group ([[def-finite-symmetric-group-and-permutation-notation]]).

[F14] A Littlewood–Richardson tableau is semistandard and has a top-to-bottom, right-to-left reading word that is a lattice word ([[def-littlewood-richardson-tableau-and-coefficient]]).

[F15] The stable Schur function of the empty partition is $s_{\varnothing}=1$ ([[def-stable-schur-function-by-bialternants]]).

[F16] The Schur functions are orthonormal for the Hall form: $\langle s_\lambda,s_\mu\rangle_H=\delta_{\lambda\mu}$ ([[thm-schur-functions-form-an-orthonormal-integral-basis]]).

[F17] For $d=|\lambda|-|\mu|\ge0$, $s_{\lambda/\mu}=\sum_{\nu\vdash d}\langle s_\lambda,s_\mu s_\nu\rangle_Hs_\nu$ ([[def-skew-schur-function-by-hall-adjointness]]).

[F18] A standard tableau strictly increases along rows and columns ([[def-young-tableau-standard-tableau-and-shape]]).

No form of the axiom of choice is used.

## Verification

**Proof technique:** enumerate subshapes and the small Littlewood–Richardson tableaux.

1.1 The subpartitions of $(3,1)$ are $\varnothing,(1),(2),(1,1),(3),(2,1),(3,1)$: if the second row is empty, the first has length $0,1,2,$ or $3$, and if it has length $1$, the first has length $1,2,$ or $3$. Their sizes give the first tensor-factor degrees $0,1,2,2,3,3,4$; the corresponding skew diagrams are finite by [F5] and [F6]. The group convention is $S_4=\operatorname{Sym}(\{0,1,2,3\})$ by [F13]. [F5, F6, F13]

1.2 For $\mu=(1)$, write the skew cells as $A=(1,2)$, $B=(1,3)$, and $C=(2,1)$. Semistandardness requires $A\le B$ and the reading word is $B,A,C$. Content $(3)$ gives the unique filling $A=B=C=1$, whose word $111$ is lattice. Content $(2,1)$ gives exactly one semistandard lattice filling, $A=B=1,C=2$, with word $112$; the other possible locations of the $2$ either violate $A\le B$ or make the word start with $2$. For content $(1,1,1)$, the distinct entries in the row must be one of $(A,B)=(1,2),(1,3),(2,3)$, so in every semistandard filling the reading word starts with $B\ge2$ and fails the first-prefix lattice inequality. Thus $s_{(3,1)/(1)}=s_{(3)}+s_{(2,1)}$. [F3, F4, F5, F14]

1.3 For $\mu=(2)$, the two skew cells $(1,3)$ and $(2,1)$ have no row or column comparison, and their reading order is $(1,3),(2,1)$. Content $(2)$ has the unique filling $1,1$, and content $(1,1)$ has the unique lattice filling $1,2$; the reversed filling has a word beginning with $2$. Hence $s_{(3,1)/(2)}=s_{(2)}+s_{(1,1)}$. For $\mu=(1,1)$, the remaining cells $(1,2),(1,3)$ satisfy the row inequality $(1,2)\le(1,3)$ and are read in the reverse order. Content $(2)$ gives one lattice filling, while the only semistandard filling of content $(1,1)$ has word $2,1$ and fails the lattice condition. Hence $s_{(3,1)/(1,1)}=s_{(2)}$. [F3, F4, F5, F14]

2.1 For $\mu=(3)$ and $\mu=(2,1)$ the skew diagram consists of one box, so its sole filling has content $(1)$ and its word is lattice, giving $s_{(3,1)/(3)}=s_{(1)}=s_{(3,1)/(2,1)}$ by [F3]–[F5] and [F14]. For the empty inner shape, [F17] and [F15] give $s_{(3,1)/\varnothing}=\sum_{\nu\vdash4}\langle s_{(3,1)},s_\nu\rangle_Hs_\nu=s_{(3,1)}$ by orthonormality [F16]. For $\mu=(3,1)$, [F6] leaves only $\nu=\varnothing$ in [F17], and [F15]–[F16] give $s_{(3,1)/(3,1)}=\langle s_{(3,1)},s_{(3,1)}\rangle_Hs_\varnothing=1$. These are all the remaining subshapes from step 1.1. [F3, F4, F5, F6, F14, F15, F16, F17, step 1.1]

3.1 Applying the skewing formula [F2], expanding by [F3], using the tableau counts from [F4] and [F14] in steps 1.1–2.1, and translating $s_\lambda$ back to $\chi^\lambda$ by [F8] gives the terms grouped by first-factor degree: $\Delta_{0,4}=1\otimes\chi^{(3,1)}$, $\Delta_{1,3}=\chi^{(1)}\otimes(\chi^{(3)}+\chi^{(2,1)})$, $\Delta_{2,2}=\chi^{(2)}\otimes(\chi^{(2)}+\chi^{(1,1)})+\chi^{(1,1)}\otimes\chi^{(2)}$, $\Delta_{3,1}=(\chi^{(3)}+\chi^{(2,1)})\otimes\chi^{(1)}$, and $\Delta_{4,0}=\chi^{(3,1)}\otimes1$, as stated; the character labels are those of the Specht modules in [F7], and the endpoint factors use [F1]. [F1, F2, F3, F4, F7, F8, F14, step 1.1, step 1.2, step 1.3, step 2.1]

4.1 Let $f^\lambda$ count standard tableaux. The one-row and one-column shapes each have one standard tableau by [F18], so $f^{(1)}=f^{(2)}=f^{(1,1)}=f^{(3)}=1$. Removing the largest entry gives $f^{(2,1)}=f^{(2)}+f^{(1,1)}=2$ and $f^{(3,1)}=f^{(2,1)}+f^{(3)}=3$: the largest entry is at a removable corner by [F18], and deletion and addition there are inverse operations. Thus [F9] gives dimensions $3,1,2,1,1,1$ for $(3,1),(3),(2,1),(2),(1,1),(1)$. By [F10], [F11], and [F12], the five component values at the identity are $3$, $1(1+2)=3$, $1(1+1)+1\cdot1=3$, $(1+2)1=3$, and $3$, respectively; this also verifies the empty-factor endpoints. The enumeration is finite and uses no choice. [F9, F10, F11, F12, F18, step 3.1] ∎
