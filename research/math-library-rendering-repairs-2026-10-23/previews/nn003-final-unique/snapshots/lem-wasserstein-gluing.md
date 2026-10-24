---
id: "lem-wasserstein-gluing"
kind: lemma
title: "Gluing two Euclidean couplings"
status: published
dependency_level: 1
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-wasserstein-two-space-and-couplings", "def-standard-borel-space", "lem-finite-products-of-standard-borel-spaces-are-standard-borel", "def-axiom-of-choice", "thm-disintegration-of-a-joint-law-on-standard-borel-spaces", "def-product-measure-on-sigma-finite-spaces", "thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique", "def-product-sigma-algebra-and-finite-product-sigma-algebras", "lem-borel-product-of-second-countable-spaces", "def-measure-kernel-and-probability-kernel", "thm-measurability-of-integration-against-a-kernel", "thm-sections-of-product-measurable-sets-are-measurable", "thm-dynkin-pi-lambda", "thm-monotone-convergence-for-the-integral", "def-measure", "def-borel-probability-law-on-a-polish-space"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "Full AC is used for the two standard-Borel disintegrations; this finite gluing uses no further selection."
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Chapter 1 and Chapter 8"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §§5.1–5.3"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
---
## Statement

Assume the Axiom of Choice. Let $d_1,d_2,d_3\ge1$, let $\alpha$ be a Borel probability on $\mathbb R^{d_1}\times\mathbb R^{d_2}$ and $\beta$ a Borel probability on $\mathbb R^{d_2}\times\mathbb R^{d_3}$, and suppose the second marginal of $\alpha$ and first marginal of $\beta$ are the same probability $\rho$ on $\mathbb R^{d_2}$. There is a Borel probability $\gamma$ on $\mathbb R^{d_1}\times\mathbb R^{d_2}\times\mathbb R^{d_3}$ whose $(x,y)$ marginal is $\alpha$ and whose $(y,z)$ marginal is $\beta$.

## Statement references

[[def-wasserstein-two-space-and-couplings]]

[[def-standard-borel-space]]

[[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]

[[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]

[[def-product-measure-on-sigma-finite-spaces]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[[lem-borel-product-of-second-countable-spaces]]

[[def-measure-kernel-and-probability-kernel]]

[[thm-measurability-of-integration-against-a-kernel]]

[[thm-sections-of-product-measurable-sets-are-measurable]]

[[thm-dynkin-pi-lambda]]

[[thm-monotone-convergence-for-the-integral]]

[[def-measure]]

[[def-borel-probability-law-on-a-polish-space]]

[[def-axiom-of-choice]]

[Ambrosio, Gigli, and Savaré, *Gradient Flows*, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

## Diagram

In the diagram, $X=\mathbb R^{d_1}$, $Y=\mathbb R^{d_2}$, and $Z=\mathbb R^{d_3}$. It records the required projections from the joint law $\gamma$ onto the adjacent coordinate pairs. The arrows are pushforwards of $\gamma$; the proof below constructs the middle measure explicitly and does not infer existence from the picture.

```tikz
\begin{tikzpicture}[>=stealth]
  \path[use as bounding box] (-2,-0.7) rectangle (12,1);
  \node (alpha) at (0,0) {$\alpha$ on $X\times Y$};
  \node (gamma) at (5,0) {$\gamma$ on $X\times Y\times Z$};
  \node (beta) at (10,0) {$\beta$ on $Y\times Z$};
  \draw[->] (gamma) -- node[above] {$(x,y)_\#$} (alpha);
  \draw[->] (gamma) -- node[above] {$(y,z)_\#$} (beta);
\end{tikzpicture}
```

The two outer laws have the same middle marginal $\rho$ on $Y$; the arrows specify that projecting the constructed triple law onto either adjacent pair recovers the corresponding outer law.

## Facts & Assumptions

**Given:** the Axiom of Choice, the two probability measures, and their common middle marginal $\rho$.

[F1] Euclidean spaces with their Borel sigma-algebras are standard Borel; finite products have the product Borel sigma-algebra. [[def-standard-borel-space]] [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]] [[lem-borel-product-of-second-countable-spaces]]

[F2] Under AC [[def-axiom-of-choice]], a probability on a product of standard Borel spaces with second marginal $\rho$ disintegrates as $K_y(dx)\rho(dy)$ for a probability kernel $K$, with the specified joint law recovered by integrating the kernel. [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]

[F3] Products of two probability measures exist, have mass one, and assign a rectangle the product of its factor masses. [[def-product-measure-on-sigma-finite-spaces]] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F4] The sets measurable for the product sigma-algebra are generated by measurable rectangles, and a pi-system contained in a lambda-system generates a sigma-algebra contained in that lambda-system. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] [[thm-dynkin-pi-lambda]]

[F5] Kernel evaluations on measurable sets are measurable; nonnegative measurable functions can be integrated against a kernel measurably, and sections of product-measurable sets are measurable. [[def-measure-kernel-and-probability-kernel]] [[thm-measurability-of-integration-against-a-kernel]] [[thm-sections-of-product-measurable-sets-are-measurable]]

[F6] Monotone convergence passes increasing nonnegative integrands through integrals; probability measures are countably additive. [[thm-monotone-convergence-for-the-integral]] [[def-measure]]

[F7] If $P$ is a Borel probability law on a Polish space and $S$ is Borel into a Polish space, define $S_\#P(H)=P(S^{-1}(H))$; preimages show this is a Borel probability law and that coordinate marginals compose with coordinate projections. [[def-borel-probability-law-on-a-polish-space]] [[def-measure]]

## Proof
1.1 Apply [F2] to $\alpha$ with its second coordinate y as conditioning variable, obtaining a probability kernel $K_y(dx)$ with $\alpha(A\times B)=\int_BK_y(A)d\rho(y)$. The supplier conditions on the second marginal, so for $\beta$ first define the coordinate swap $S(y,z)=(z,y)$ and $\widehat\beta=S_\#\beta$ on $\mathbb R^{d_3}\times\mathbb R^{d_2}$. By [F7], this is a Borel probability whose second marginal is the common law $\rho$. Apply [F2] to $\widehat\beta$ to obtain a probability kernel $L_y(dz)$ with $\widehat\beta(C\times B)=\int_BL_y(C)d\rho(y)$, equivalently $\beta(B\times C)=\int_BL_y(C)d\rho(y)$. Thus for every Borel $A\subseteq\mathbb R^{d_1}$, $B\subseteq\mathbb R^{d_2}$, and $C\subseteq\mathbb R^{d_3}$ both joint laws are disintegrated over the same conditioning law. [given, F1, F2, F7]

2.1 For each $y$, let $Q_y=K_y\otimes L_y$, the product probability on $\mathbb R^{d_1}\times\mathbb R^{d_3}$. For a rectangle $A\times C$, $Q_y(A\times C)=K_y(A)L_y(C)$ is measurable in $y$. The sets $D$ for which $y\mapsto Q_y(D)$ is measurable form a lambda-system: the whole space has value one, complements have value $1-Q_y(D)$, and disjoint unions have value the increasing limit of finite sums. Rectangles form a pi-system generating the product Borel sigma-algebra by [F1] and [F4]. Thus [F4] proves measurability for every Borel $D$. The same lambda-system argument applied to rectangles $B\times A\times C$ in the variables $(y,x,z)$ shows that $y\mapsto Q_y(E_y)$ is measurable for each Borel $E\subseteq\mathbb R^{d_2}\times\mathbb R^{d_1}\times\mathbb R^{d_3}$, where $E_y=\{(x,z):(y,x,z)\in E\}$. [F1, F3, F4, F5, step 1.1]

3.1 Define $\widetilde\gamma(E)=\int Q_y(E_y)\,d\rho(y)$ on the product Borel sigma-algebra in the coordinate order $(y,x,z)$. It is nonnegative and has total mass one. For disjoint $E_j$, their sections are disjoint, so countable additivity of $Q_y$ followed by monotone convergence [F6] gives $\widetilde\gamma(\bigcup_jE_j)=\sum_j\widetilde\gamma(E_j)$. Hence $\widetilde\gamma$ is a Borel probability. [F3, F5, F6, step 2.1]

4.1 For Borel rectangles $B\times A\times\mathbb R^{d_3}$ and $B\times\mathbb R^{d_1}\times C$, the definition and the two identities in step 1.1 give respectively $\widetilde\gamma(B\times A\times\mathbb R^{d_3})=\int_BK_y(A)L_y(\mathbb R^{d_3})\,d\rho(y)=\alpha(A\times B)$ and $\widetilde\gamma(B\times\mathbb R^{d_1}\times C)=\int_BL_y(C)K_y(\mathbb R^{d_1})\,d\rho(y)=\beta(B\times C)$. Rectangles determine finite Borel measures by [F4], so these identities identify the two pair marginals in coordinate order $(y,x,z)$. Define the Borel coordinate permutation $P(y,x,z)=(x,y,z)$ and set $\gamma=P_\#\widetilde\gamma$, meaning $\gamma(H)=\widetilde\gamma(P^{-1}(H))$ for each Borel $H$; by [F7] this is a Borel probability. The coordinate projections satisfy $\operatorname{pr}_{x,y}\circ P(y,x,z)=(x,y)$ and $\operatorname{pr}_{y,z}\circ P(y,x,z)=(y,z)$, hence their pushforwards are exactly $\alpha$ and $\beta$. [F1, F2, F4, F7, step 1.1, step 3.1] ∎
