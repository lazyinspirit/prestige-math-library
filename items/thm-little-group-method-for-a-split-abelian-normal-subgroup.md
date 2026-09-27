---
id: thm-little-group-method-for-a-split-abelian-normal-subgroup
kind: theorem
title: "The little group method for a semidirect product with abelian kernel"
status: draft
origin: pipeline
deps: ["thm-projective-clifford-correspondence", "thm-extension-exists-iff-the-clifford-obstruction-vanishes", "thm-clifford-correspondence", "thm-gallagher-correspondence-for-an-extendible-character", "thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional", "def-internal-semidirect-product", "def-conjugate-representation-and-inertia-group", "cor-cyclotomic-field-splits-a-finite-group", "thm-the-complex-numbers-are-algebraically-closed", "prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient", "thm-characters-of-direct-sums-tensor-products-and-duals", "cor-dimension-of-an-induced-finite-dimensional-representation"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — Propositions (4.2.4), (4.2.6) and Remark (4.2.7), printed pp. 56–57"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.3 (Gallagher) and Theorem 1.2 (Clifford), printed pp. 2–3"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
proof_strategy: direct
---

## Statement

Let $G=A\rtimes H$ be a finite internal semidirect product with $A$ normal and
abelian, so that $G=AH$ and $A\cap H=\{1\}$
([[def-internal-semidirect-product]]). For $\theta\in\hat A=\operatorname{Hom}(A,\mathbb C^\times)$
put
$$H_\theta=\{h\in H:\theta(h^{-1}ah)=\theta(a)\ \text{for all }a\in A\},\qquad I_\theta=A\rtimes H_\theta .$$
Then $\widetilde\theta(ah):=\theta(a)$ is a linear character of $I_\theta$
extending $\theta$, and up to isomorphism the irreducible complex
representations of $G$ are exactly
$$\operatorname{Ind}_{I_\theta}^{G}\bigl(\widetilde\theta\otimes\operatorname{Infl}_{H_\theta}^{I_\theta}\sigma\bigr),\qquad \theta\text{ one representative per }H\text{-orbit in }\hat A,\quad \sigma\in\operatorname{Irr}(H_\theta),$$
with degrees $[H:H_\theta]\dim\sigma$. In this split case the Clifford
obstruction class vanishes, whereas for a nonsplit invariant type the projective
correspondence supplies the correction.

## Facts & Assumptions

**Given:** A finite group $G$ together with a normal abelian subgroup $A$ and a subgroup $H$ with $G=AH$ and $A\cap H=\{1\}$, and a linear character $\theta:A\to\mathbb C^\times$.

[F1] $G$ is the internal semidirect product of $A$ by $H$ exactly when $A\trianglelefteq G$, $G=AH$ and $A\cap H=\{1\}$. ([[def-internal-semidirect-product]]).

[F2] $\mathbb C$ is a splitting field for every finite group. ([[cor-cyclotomic-field-splits-a-finite-group]], [[thm-the-complex-numbers-are-algebraically-closed]]).

[F3] Every irreducible representation of a finite abelian group over a splitting field has degree $1$; hence the irreducible complex characters of $A$ are exactly the homomorphisms $A\to\mathbb C^\times$. ([[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]]).

[F4] ${}^g\theta(a)=\theta(g^{-1}ag)$ defines the conjugation action and $I_G(\theta)=\{g\in G:{}^g\theta=\theta\}$ is the inertia group, a subgroup with $N\le I_G(\theta)\le G$. ([[def-conjugate-representation-and-inertia-group]]).

[F5] Induction gives a bijection $\operatorname{Irr}(I_G(\theta)\mid\theta)\to\operatorname{Irr}(G\mid\theta)$, whose inverse takes the $\theta$-isotypical component; conjugate normal types give the same target set, and the sets $\operatorname{Irr}(G\mid\theta)$ over distinct $G$-orbits partition $\operatorname{Irr}(G)$. ([[thm-clifford-correspondence]]).

[F6] If a representation affording $\theta$ has a fixed extension $\widetilde S$ to $I_G(\theta)$, then $\operatorname{Irr}(I_G(\theta)/N)\to\operatorname{Irr}(I_G(\theta)\mid\theta)$, $\eta\mapsto\chi_{\widetilde S}\operatorname{Inf}\eta$, is a bijection, and the induced $G$-character has ramification index $\eta(1)$ over $\theta$. ([[thm-gallagher-correspondence-for-an-extendible-character]]).

[F7] If $N\trianglelefteq G$ and $\rho$ is a representation with $N\subseteq\ker\rho$, then $\rho$ factors through a representation $\overline\rho$ of $G/N$ with $\rho=\overline\rho\circ\pi$, and irreducibility is the same for $\rho$ and $\overline\rho$. ([[prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient]]).

[F8] For finite-dimensional complex representations one has $\chi_{V\otimes W}(g)=\chi_V(g)\chi_W(g)$. ([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[F9] The dimension of an induced representation is $\dim_k\operatorname{Ind}_H^G W=[G:H]\dim_k W$. ([[cor-dimension-of-an-induced-finite-dimensional-representation]]).

[F10] An invariant irreducible representation extends to its inertia group if and only if its Clifford obstruction class is zero. ([[thm-extension-exists-iff-the-clifford-obstruction-vanishes]]).

[F11] For a nonsplit invariant type the irreducible $I$-modules over the type are parametrized by irreducible projective representations of the quotient with factor set $\alpha^{-1}$, tensored with the type; when $\alpha$ is trivializable this reduces to Gallagher's correspondence. ([[thm-projective-clifford-correspondence]]).

[A1] Consequently, if $I\le G$ and $\pi:I\to I/A$ is the quotient map, inflation along $I/A\cong H_\theta$ carries the irreducible characters of $H_\theta$ bijectively onto the irreducible characters of $I_\theta$ that are trivial on $A$, since $A$ is contained in the kernel of precisely those representations.



## Proof

**Proof technique:** direct.

1.1 Every element of $G$ has a unique expression $ah$ with $a\in A$, $h\in H$: existence is $G=AH$ by [F1], and if $ah=a'h'$ then $h'h^{-1}=(a')^{-1}a\in A\cap H=\{1\}$, so $h=h'$ and $a=a'$. Also $H_\theta=\{h\in H:{}^h\theta=\theta\}$ is the stabilizer in $H$ of $\theta$ under the action of [F4], hence a subgroup of $H$; and $A\le I_G(\theta)$, because $A$ is abelian and therefore ${}^a\theta(b)=\theta(a^{-1}ba)=\theta(b)$ for all $a,b\in A$. [F1, F4, given]

2.1 The inertia group is $I_\theta=I_G(\theta)=A\rtimes H_\theta$: an element $g=ah$ satisfies ${}^g\theta={}^h\theta$ because $A$ acts trivially, so $g\in I_G(\theta)$ if and only if $h\in H_\theta$; thus $I_G(\theta)=AH_\theta=\{ah:a\in A,\ h\in H_\theta\}$, which is a subgroup of $G$ by steps 1.1 and the normality of $A$ in $G$. Moreover the assignment $hH_\theta\mapsto hI_\theta$ is a bijection $H/H_\theta\to G/I_\theta$, since $I_\theta\cap H=H_\theta$ and $G=I_\theta H$; hence $[G:I_\theta]=[H:H_\theta]$. [F1, step 1.1, given]

3.1 The formula $\widetilde\theta(ah):=\theta(a)$ defines a linear character of $I_\theta$ with $\widetilde\theta|_A=\theta$: it is well defined by the uniqueness in step 1.1, takes values in $\mathbb C^\times$, and $\widetilde\theta(1)=1$. For $a,b\in A$ and $h,k\in H_\theta$ one has $(ah)(bk)=a(hbh^{-1})(hk)$ with $hbh^{-1}\in A$, so $\widetilde\theta\bigl((ah)(bk)\bigr)=\theta(a)\theta(hbh^{-1})=\theta(a)\theta(b)=\widetilde\theta(ah)\widetilde\theta(bk)$, using $h\in H_\theta$; and $\widetilde\theta(a\cdot 1)=\theta(a)$ for $a\in A$, so $\widetilde\theta$ extends $\theta$. [step 1.1, step 2.1, given, algebra]

4.1 Gallagher's correspondence applies to the extension $\widetilde\theta$ of $\theta$ to $I_\theta$: by [F6] the map $\eta\mapsto\chi_{\widetilde\theta}\operatorname{Inf}\eta$ is a bijection from $\operatorname{Irr}(I_\theta/A)$ onto $\operatorname{Irr}(I_\theta\mid\theta)$. The quotient $I_\theta/A$ is isomorphic to $H_\theta$ via $ah\mapsto h$, and by [F7] and [A1] inflation identifies $\operatorname{Irr}(H_\theta)$ with $\operatorname{Irr}(I_\theta/A)$ through the irreducible representations of $I_\theta$ having $A$ in their kernel; hence the irreducible characters of $I_\theta$ lying over $\theta$ are exactly the characters of the representations $\widetilde\theta\otimes\operatorname{Infl}_{H_\theta}^{I_\theta}\sigma$ with $\sigma\in\operatorname{Irr}(H_\theta)$, since $\widetilde\theta$ is one-dimensional and $\chi_{\widetilde\theta\otimes\operatorname{Infl}\sigma}=\widetilde\theta\cdot(\operatorname{Infl}\chi_\sigma)$ by [F8]. [F6, F7, F8, A1, step 2.1, step 3.1]

5.1 Clifford induction then gives the parametrization: by [F5] induction is a bijection $\operatorname{Irr}(I_\theta\mid\theta)\to\operatorname{Irr}(G\mid\theta)$, so composing with step 4.1, the assignment $\sigma\mapsto\operatorname{Ind}_{I_\theta}^{G}(\widetilde\theta\otimes\operatorname{Infl}\sigma)$ is a bijection from $\operatorname{Irr}(H_\theta)$ onto $\operatorname{Irr}(G\mid\theta)$, and every representation in its image is irreducible. [F5, step 4.1]

5.2 The degrees are $[H:H_\theta]\dim\sigma$: the tensor product $\widetilde\theta\otimes\operatorname{Infl}\sigma$ has dimension $\dim\sigma$ because $\widetilde\theta$ is one-dimensional, so [F9] with $G$, $I_\theta$ and this module gives $\dim\operatorname{Ind}_{I_\theta}^G(\widetilde\theta\otimes\operatorname{Infl}\sigma)=[G:I_\theta]\dim\sigma=[H:H_\theta]\dim\sigma$ by step 2.1; the ramification index over $\theta$ is instead $\dim\sigma$ by [F6]. [F6, F9, step 2.1, step 4.1]

5.3 In this split situation the Clifford obstruction vanishes and no projective correction is needed: $\widetilde\theta$ is a genuine extension of $\theta$ to $I_\theta$ by step 3.1, so the obstruction class of $\theta$ is zero by [F10]; correspondingly, in the general correspondence of [F11] the factor set can be taken to be $1$ and the irreducible projective representations of $I_\theta/A$ are the ordinary irreducible representations of $H_\theta$, so the assignment of step 4.1 is exactly Gallagher's correspondence and the theorem above is its orbit-parametrized form. For a nonsplit invariant type the obstruction can be nonzero; when it is, [F11] replaces the ordinary quotient representations by the irreducible projective representations attached to the class. A nonsplit extension by itself does not force a nonzero obstruction (the trivial type always extends). [F10, F11, step 2.1, step 3.1, step 4.1]

6.1 The list is exhaustive and repetition-free over the orbits: the irreducible characters of $A$ are exactly the homomorphisms $A\to\mathbb C^\times$, because $\mathbb C$ is a splitting field for the finite group $A$ by [F2] and every irreducible of a finite abelian group over a splitting field is one-dimensional by [F3]; since $A$ acts trivially on $\hat A$, the $G$-orbits on these characters are exactly the $H$-orbits, and by [F5] the sets $\operatorname{Irr}(G\mid\theta)$ depend only on the orbit of $\theta$ and partition $\operatorname{Irr}(G)$. Taking one $\theta$ per $H$-orbit therefore lists every irreducible $G$-representation exactly once through step 5.1. [F2, F3, F5, step 5.1]

6.2 The degenerate cases are included: if $H_\theta=H$ then $I_\theta=G$, induction is the identity, and the list is $\{\widetilde\theta\otimes\operatorname{Infl}\sigma:\sigma\in\operatorname{Irr}(H)\}$ with degrees $\dim\sigma$; if $H_\theta=1$ then $I_\theta=A$ and the list reduces to the single representation $\operatorname{Ind}_A^G\theta$ of degree $[H:1]=\dim\operatorname{Ind}_A^G\theta$; if $A=1$ then $G=H$, the dual $\hat A$ is trivial, $H_\theta=H$, and the statement is the tautology $\operatorname{Irr}(H)=\operatorname{Irr}(H)$ with degrees $\dim\sigma$. [F3, step 2.1, step 5.1, step 5.2]

7.1 Steps 3.1, 5.1, 6.1, 5.2 and 6.2 prove the assertion: $\widetilde\theta(ah)=\theta(a)$ is a linear character of $I_\theta=A\rtimes H_\theta$ extending $\theta$, and the representations $\operatorname{Ind}_{I_\theta}^G(\widetilde\theta\otimes\operatorname{Infl}\sigma)$, for one $\theta$ from each $H$-orbit in $\hat A$ and $\sigma\in\operatorname{Irr}(H_\theta)$, are exactly the irreducible complex representations of $G$ up to isomorphism, with the stated degrees; step 5.3 records that the obstruction vanishes in this split case and that the projective correspondence is the correction required when it does not. [step 3.1, step 5.1, step 6.1, step 5.2, step 5.3, step 6.2] ∎
