---
id: ex-vogan-diagrams-for-real-forms-of-sl-three-c
kind: example
title: Vogan diagrams for real forms of sl three c
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-vogan-diagram, thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence, thm-classification-of-real-forms-by-vogan-diagrams, prop-classical-real-forms-of-the-classical-complex-lie-algebras, def-axiom-of-choice, ex-general-and-special-linear-lie-groups, ex-unitary-and-special-unitary-lie-groups, def-classical-complex-matrix-lie-algebras, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-cartan-subalgebra-of-a-lie-algebra, ex-diagonal-cartan-subalgebra-and-roots-of-sl-n, ex-cartan-involution-and-k-plus-p-for-sl-n-r, ex-classical-simple-lie-algebras-and-their-killing-forms]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §8, definition of the Vogan diagram of a triple (g_0,h_0,Sigma^+), the compact and noncompact imaginary roots of sl(2n,R) and Example 1 (su(p,q)), printed pp. 391-399; Chapter VI, §10, Theorem 6.96 and Figure 6.1 for A_n, printed pp. 409-414"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 40 and Lecture 43, Vogan diagrams and the classification of real forms, printed pp. 206-210 and 217-222"
landmark: false
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. Let $\mathfrak g=\mathfrak{sl}_3(\mathbb C)$ with
Dynkin diagram $A_2$ and simple roots $\alpha_1=\varepsilon_1-\varepsilon_2$,
$\alpha_2=\varepsilon_2-\varepsilon_3$ relative to the diagonal Cartan
subalgebra. Then the compact, the intermediate and the split real form of
$\mathfrak g$ are pairwise non-isomorphic and are distinguished by their Vogan
data
([[def-vogan-diagram]],
[[thm-classification-of-real-forms-by-vogan-diagrams]],
[[prop-classical-real-forms-of-the-classical-complex-lie-algebras]]):

$$\mathfrak{su}(3):\ \text{trivial involution, no painted vertex},$$

$$\mathfrak{su}(2,1):\ \text{trivial involution, exactly one painted vertex (}\alpha_2,\ \text{equivalently}\ \alpha_1),$$

$$\mathfrak{sl}_3(\mathbb R):\ \text{the nontrivial involution of }A_2\text{, no painted vertex},$$

and these three classes are pairwise distinct, so on $A_2$ the Vogan data
distinguish the compact, the intermediate and the split real form.

## Facts & Assumptions

**Given:** The Axiom of Choice; the complex Lie algebra $\mathfrak g=\mathfrak{sl}_3(\mathbb C)$ with diagonal Cartan subalgebra $\mathfrak h$ ([[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]]); the three real forms $\mathfrak{su}(3)$, $\mathfrak{su}(2,1)$ and $\mathfrak{sl}_3(\mathbb R)$ of $\mathfrak g$ ([[ex-unitary-and-special-unitary-lie-groups]], [[ex-general-and-special-linear-lie-groups]], [[def-classical-complex-matrix-lie-algebras]]).

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the conjugacy and classification statements used in [L4] and [L5].

[L1] The Killing form of $\mathfrak{sl}_3(\mathbb C)$ is $B(X,Y)=6\operatorname{tr}(XY)$, and a real form $\mathfrak g_0$ is compact exactly when $B$ is negative definite on it ([[ex-classical-simple-lie-algebras-and-their-killing-forms]], [[def-cartan-involution-of-a-real-semisimple-lie-algebra]]).

[L2] For $\mathfrak g_0=\mathfrak{sl}_3(\mathbb R)$ the map $\theta(X)=-X^{\mathsf T}$ is a Cartan involution with $\mathfrak k_0=\mathfrak{so}(3)$ and $\mathfrak p_0$ the symmetric traceless matrices ([[ex-cartan-involution-and-k-plus-p-for-sl-n-r]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).

[L3] A $\theta$-stable Cartan subalgebra $\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$ of a real semisimple Lie algebra has compact part $\mathfrak t_0=\mathfrak h_0\cap\mathfrak k_0$ and split part $\mathfrak a_0=\mathfrak h_0\cap\mathfrak p_0$; it is maximally compact exactly when $\mathfrak t_0$ is a maximal abelian subspace of $\mathfrak k_0$, and for a maximally compact $\theta$-stable Cartan there are no real roots ([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]], [[def-cartan-subalgebra-of-a-lie-algebra]]).

[L4] The Vogan diagram of a triple $(\mathfrak g_0,\mathfrak h_0,\Sigma^{+})$, with $\mathfrak h_0$ maximally compact and $\Sigma^{+}$ a compatible positive system, is the Dynkin diagram of $\Sigma^{+}$ with the two-element orbits under the involution induced by $\theta$ labelled and the one-element orbits painted or not according as the corresponding imaginary simple root is noncompact or compact; two real forms are isomorphic exactly when their Vogan diagrams are equivalent ([[def-vogan-diagram]]).

[L5] The assignment sending a real form of a complex semisimple Lie algebra to the equivalence class of its Vogan diagram is well defined up to equivalence and injective: real forms with equivalent Vogan diagrams are isomorphic, and the class does not depend on the chosen maximally compact Cartan or compatible positive system; these are the two directions established in the cited items ([[thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence]], [[thm-classification-of-real-forms-by-vogan-diagrams]]). The classical list contains, for type $A_2$, the entries $\mathfrak{su}(3,0)=\mathfrak{su}(3)$ (the compact entry with $q=0$) and $\mathfrak{su}(2,1)$ among the algebras $\mathfrak{su}(p,q)$ with $p+q=3$, together with the split form $\mathfrak{sl}_3(\mathbb R)$ ([[prop-classical-real-forms-of-the-classical-complex-lie-algebras]]); its exhaustive-enumeration direction is recorded there as an open obligation and is not used here.





**Proof technique:** direct computation in each real form.

1.1 The compact form $\mathfrak{su}(3)$: the identity is a Cartan involution, since $\mathfrak{su}(3)$ is a compact real form by [L1], so $\mathfrak k_0=\mathfrak{su}(3)$ and $\mathfrak p_0=0$. The diagonal traceless skew-Hermitian matrices $\mathfrak t_0$ form a maximal abelian subspace of $\mathfrak k_0$, hence a maximally compact $\theta$-stable Cartan subalgebra $\mathfrak h_0=\mathfrak t_0$ with $\mathfrak a_0=0$ by [L3]; all roots of $(\mathfrak g,\mathfrak h)$ are therefore imaginary, and each of them is compact because the root spaces lie in the complexification of $\mathfrak k_0$, which is all of $\mathfrak g$. The Vogan diagram has the trivial involution, no complex roots, and no painted vertex. [given, L1, L3, L4, algebra]

1.2 The intermediate form $\mathfrak{su}(2,1)$: with $I=\operatorname{diag}(1,1,-1)$ the map $\theta(X)=-X^{*}$ is a Cartan involution of $\{X:X^{*}I+IX=0\}$ and $\mathfrak k_0=\mathfrak{su}(2)\oplus\mathfrak u(1)$ consists of the matrices whose off-diagonal block vanishes; the diagonal traceless skew-Hermitian matrices form a maximally compact $\theta$-stable Cartan subalgebra with $\mathfrak a_0=0$, so again all roots are imaginary. [given, L3, L4, algebra]

1.3 The split form $\mathfrak{sl}_3(\mathbb R)$: let $H_1=\begin{pmatrix}0&-1&0\\ 1&0&0\\ 0&0&0\end{pmatrix}\in\mathfrak k_0$ and $H_2=\operatorname{diag}(1,1,-2)\in\mathfrak p_0$, so that $\mathfrak h_0=\mathbb RH_1\oplus\mathbb RH_2$ is a $2$-dimensional abelian subalgebra of $\mathfrak{sl}_3(\mathbb R)$ with $\theta H_1=H_1$ and $\theta H_2=-H_2$. It is a Cartan subalgebra: conjugating by the invertible complex matrix $Q=\operatorname{diag}\left(\begin{pmatrix}1&1\\ -i&i\end{pmatrix},1\right)$ turns $H_1$ into $\operatorname{diag}(i,-i,0)$ and fixes $H_2$, so $\operatorname{ad}_H$ is diagonalizable over $\mathbb C$ for every $H\in\mathfrak h_0$, and the centralizer of $\mathfrak h_0$ in $\mathfrak{sl}_3(\mathbb C)$ is the diagonal Cartan algebra, of the same dimension $2$, so $\mathfrak h_0$ is abelian, self-normalizing and of maximal dimension among abelian subalgebras. The same conjugation shows that the roots of $(\mathfrak g,\mathfrak h)$ take on $H=xH_1+yH_2$ the values $\pm 2ix$, $\pm(ix+3y)$ and $\pm(-ix+3y)$, so that with $\beta_1=\varepsilon_1-\varepsilon_2$ and $\beta_2=\varepsilon_2-\varepsilon_3$ the values are $\beta_1(H)=2ix$, $\beta_2(H)=-ix+3y$ and $(\beta_1+\beta_2)(H)=ix+3y$. Finally $\dim\mathfrak t_0=1$ is maximal because two independent elements of $\mathfrak k_0=\mathfrak{so}(3)\cong\mathbb R^3$ do not commute under the cross product, so $\mathfrak h_0$ is maximally compact by [L3]. [given, L2, L3, algebra]

2.1 The simple roots of $\mathfrak{su}(2,1)$ have different compactness: the root space of $\alpha_1=\varepsilon_1-\varepsilon_2$ is $\mathbb CE_{12}$ with $E_{12}$ inside the $2\times2$ top block, hence $E_{12}\in\mathfrak k_0$ and $\alpha_1$ is compact imaginary, while the root space of $\alpha_2=\varepsilon_2-\varepsilon_3$ is $\mathbb CE_{23}$ with $E_{23}$ in the off-diagonal block, so $E_{23}\in\mathfrak p_0$ and $\alpha_2$ is noncompact imaginary; the sum $\alpha_1+\alpha_2$ is not simple and is not painted. Hence exactly one simple root is painted, namely $\alpha_2$. Numbering the two vertices in the opposite order gives $\mathfrak{su}(1,2)$, which is isomorphic to $\mathfrak{su}(2,1)$ by reordering the coordinates, and its diagram is the image of the first under the nontrivial automorphism of $A_2$; both are the same Vogan class. [step 1.2, L4, algebra]

2.2 The action of $\theta$ on these roots is computed from $\theta H=xH_1-yH_2$: $\theta\beta_1=\beta_1$, while $\theta\beta_2=-(\beta_1+\beta_2)$ and $\theta(\beta_1+\beta_2)=-\beta_2$. Hence $\beta_1$ is imaginary, $\beta_2$ and $\beta_1+\beta_2$ are complex and form a two-element orbit, and there are no real roots, consistent with maximal compactness by [L3]. [step 1.3, L3, algebra]

3.1 The positive system $\Sigma^{+}=\{\beta_1,-\beta_2,\beta_1+\beta_2\}$ is $\theta$-stable by step 2.2, and its simple roots are $\delta_1=-\beta_2$ and $\delta_2=\beta_1+\beta_2$, because the only decomposable positive root is $\beta_1=(-\beta_2)+(\beta_1+\beta_2)$; the Dynkin diagram of $\{\delta_1,\delta_2\}$ is $A_2$. By step 2.2, $\theta\delta_1=\delta_2$ and $\theta\delta_2=\delta_1$, so the involution induced on the diagram is nontrivial and the two simple roots form a single two-element orbit; since there are no one-element orbits, no vertex is painted. [step 1.3, step 2.2, L4, algebra]

4.1 The three diagrams are pairwise distinct as Vogan data: $\mathfrak{su}(3)$ has trivial involution and empty painting; $\mathfrak{su}(2,1)$ has trivial involution and exactly one painted vertex; $\mathfrak{sl}_3(\mathbb R)$ has the nontrivial involution of $A_2$, which has no fixed vertex and hence empty painting because every simple root is complex. Distinctness also follows from the invariants: $\mathfrak{su}(3)$ has negative definite Killing form by [L1], while $\mathfrak{p}_0\ne0$ for the other two; and $\mathfrak{su}(2,1)$ has a compact Cartan subalgebra, while every $\theta$-stable Cartan of $\mathfrak{sl}_3(\mathbb R)$ has nonzero split part because $\mathfrak t_0\subseteq\mathfrak k_0=\mathfrak{so}(3)$ is at most one-dimensional and the rank is $2$. [step 1.1, step 1.2, step 2.1, step 3.1, L1, L2, L3, algebra]

5.1 Distinction and completeness of the three computed classes: steps 1.1, 1.3 and 2.1 compute the Vogan diagram of each of $\mathfrak{su}(3)$, $\mathfrak{su}(2,1)$ and $\mathfrak{sl}_3(\mathbb R)$, three real forms of $\mathfrak{g}$ appearing in the classical list of [L5], and these three diagrams are pairwise distinct by step 4.1. By the well-definedness and injectivity of the assignment in [L5], non-isomorphic real forms cannot share a Vogan class, so the three distinct classes computed here are exactly the classes of these three non-isomorphic forms and on $A_2$ the Vogan data distinguish the compact, the intermediate and the split real form. Nothing here asserts that these are all real forms of $\mathfrak{sl}_3(\mathbb C)$ or that every abstract $A_2$ diagram is realized: only the two proven directions are used, for the three forms at hand. [step 1.1, step 1.3, step 2.1, step 4.1, L4, L5, A1]

6.1 Endpoints and scope: on $A_2$ the involution has no fixed vertex, so no painting ambiguity arises for the split form, in contrast with $A_{2n}$; the compact form is the one with $\mathfrak p_0=0$, and the intermediate form is the one with a compact Cartan and $\mathfrak p_0\ne0$. The computations use explicit matrices and the finite root system $A_2$ only, and the axiom of choice enters solely through the classification interface of [L5]. [given, step 1.1, step 4.1, A1, algebra] ∎
