---
id: fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k
kind: false-statement
title: Global cartan and iwasawa decompositions hold for every nonlinear cover without modified k
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group", "thm-global-iwasawa-decomposition", "prop-real-cartan-subalgebras-need-not-be-conjugate", "thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations", "prop-exponential-map-is-natural-for-lie-group-homomorphisms", "cor-real-line-is-universal-cover-of-circle", "thm-universal-cover-uniqueness-and-dominating-property", "thm-cartans-closed-subgroup-theorem", "thm-lie-subgroup-lie-subalgebra-correspondence", "thm-one-parameter-subgroups-are-exactly-exponentials", "def-special-linear-lie-algebra-sl-two", "thm-finite-dimensional-representations-of-sl-two", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §3, Theorem 6.31 with its finite-center hypothesis, printed pp. 361-368; Chapter VII, §1, the covering and center hypotheses, printed pp. 434-446"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 43, §43.3, the universal cover of SL(2,R) is not linear, printed pp. 197-198"
landmark: false
proof_strategy: counterexample
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. False: the global Cartan and Iwasawa decompositions stated for connected semisimple groups with finite center and compact $K$ hold verbatim on every nonlinear cover with the same compact $K$. The universal cover of $\operatorname{SL}_2(\mathbb R)$ is a counterexample: its lifted compact-direction subgroup is a closed copy of $\mathbb R$, not a compact circle.

## Facts & Assumptions

**Given:** $G=\operatorname{SL}_2(\mathbb R)$, $K=\operatorname{SO}(2)$, $k=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $\mathfrak p$ the symmetric traceless real matrices, and the based universal covering homomorphism $\pi:\widetilde G\to G$.

[A1] We assume [[def-axiom-of-choice]], including the countable choice inherited by the Lie-group and covering interfaces.

[L1] The global Cartan and Iwasawa theorems apply to connected semisimple groups with finite center and an involutive automorphism whose differential is a Cartan involution **and which fixes the center pointwise**; they give compact $K$ and diffeomorphic product factorizations ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], [[thm-global-iwasawa-decomposition]]).

[L2] The algebra $\mathfrak{sl}_2(\mathbb R)$ is semisimple and $\theta X=-X^{\mathsf T}$ is a Cartan involution with compact eigenspace $\mathbb Rk$ ([[prop-real-cartan-subalgebras-need-not-be-conjugate]]).

[L3] The simply connected covering Lie group maps onto $G$ with discrete central kernel, and covering homomorphisms intertwine exponentials ([[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]], [[prop-exponential-map-is-natural-for-lie-group-homomorphisms]]). The line covers the circle universally, and based universal covers of a path-connected locally path-connected space are uniquely isomorphic over the base ([[cor-real-line-is-universal-cover-of-circle]], [[thm-universal-cover-uniqueness-and-dominating-property]]).

[L4] Closed subgroups are embedded Lie subgroups; a Lie subalgebra has a unique connected immersed subgroup; and one-parameter subgroups are precisely exponential curves ([[thm-cartans-closed-subgroup-theorem]], [[thm-lie-subgroup-lie-subalgebra-correspondence]], [[thm-one-parameter-subgroups-are-exactly-exponentials]]).

[L5] The standard complex $\mathfrak{sl}_2$ triple has $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$, and in every finite-dimensional complex module $h$ acts diagonally with integer eigenvalues ([[def-special-linear-lie-algebra-sl-two]], [[thm-finite-dimensional-representations-of-sl-two]]).

## Refutation

**Proof technique:** counterexample.

1.1 The group $K$ is a circle, parametrized by $r(t)=\exp(tk)$ with period $2\pi$. The group $G$ is connected: for $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ put $s=(a^2+c^2)^{1/2}$ and $q=s^{-1}\begin{pmatrix}a&-c\\c&a\end{pmatrix}\in K$; then $q^{-1}g=\begin{pmatrix}s&u\\0&s^{-1}\end{pmatrix}$, which is joined to $I$ through upper triangular determinant-one matrices with positive diagonal, while $q$ is joined to $I$ inside the circle. A central matrix of $G$ commutes with $I+te$ and $I+tf$ for every real $t$; commuting with both matrix units forces it to be scalar. Determinant one then gives center $\{I,-I\}$. The automorphism $\Theta(g)=(g^{-1})^{\mathsf T}$ fixes both central elements, has differential $\theta$, and fixed group $K$. Thus every hypothesis in [L1] holds for the base group, while no such hypothesis has been presumed for its cover. [L1, L2, L5, algebra]

2.1 By [L1] and step 1.1, $K\times\mathfrak p\to G$, $(q,X)\mapsto q\exp X$, is a diffeomorphism. Precomposing its first factor with the universal covering map $r:\mathbb R\to K$ shows that $P:\mathbb R\times\mathfrak p\to G$, $P(t,X)=r(t)\exp X$, is a covering. Its domain is a vector space, hence connected and simply connected by straight-line contraction. By [L3] it identifies, preserving basepoints, with the universal cover $\widetilde G$. The identification is smooth in covering charts, since both coverings are local diffeomorphisms. Under it the entire inverse image $\widetilde K=\pi^{-1}(K)$ is exactly $\mathbb R\times\{0\}$, a connected closed embedded submanifold. [L1, L3, step 1.1, algebra]

3.1 The lift starting at the identity of $r(t)$ is $t\mapsto\widetilde\exp(tk)$ by exponential naturality and uniqueness of path lifts in a covering. In the coordinates of step 2.1 it is $t\mapsto(t,0)$. Thus it is a diffeomorphism and group isomorphism from the additive line onto $\widetilde K$, not merely an injective immersion. The kernel of $\pi$ consists of $(2\pi m,0)$, $m\in\mathbb Z$, and is central by [L3]. Its element $z=\widetilde\exp(2\pi k)$ is nonidentity and has infinite order; in particular the cover has infinite center. [L3, L4, step 2.1, algebra]

4.1 No compact subgroup $H$ of $\widetilde G$ can have Lie algebra $\mathbb Rk$. Such an $H$ would be closed, hence embedded by [L4], and its identity component $H^0$ would be closed in the compact group $H$, hence compact. Uniqueness of the connected immersed subgroup would identify $H^0$, with its intrinsic Lie-group topology, with $\widetilde K\cong\mathbb R$ from step 3.1, a contradiction. This uses closedness of an identity component; it does not assert that any subgroup abstractly isomorphic to $\mathbb R$ inside a compact group is noncompact in the subspace topology. [L4, step 3.1, algebra]

4.2 The cover is genuinely nonlinear. Let $\rho:\widetilde G\to\operatorname{GL}(V)$ be any finite-dimensional real representation and complexify its differential to a complex $\mathfrak{sl}_2$ representation on $V_{\mathbb C}$. The complex matrix $-ik$ has eigenvalues $1,-1$, hence is conjugate in $\operatorname{GL}_2(\mathbb C)$ to $h$. Conjugating the other two members of the standard triple gives a triple with semisimple member $-ik$, so [L5] makes $d\rho(-ik)$ diagonalizable with integer eigenvalues. Therefore $d\rho(k)=i\,d\rho(-ik)$ has eigenvalues in $i\mathbb Z$ and $\exp(2\pi d\rho(k))=I$. Naturality of the exponential gives $\rho(z)=I$ for the nonidentity $z$ of step 3.1. Every such representation has nontrivial kernel, so no faithful finite-dimensional real representation exists. The same proof applies to a complex representation without first complexifying. [L3, L5, step 3.1, algebra]

5.1 A verbatim compact-$K$ factorization on this nonlinear cover would require a compact subgroup with Lie algebra $\mathbb Rk$, impossible by step 4.1. The correct lifted Cartan factor is $\widetilde K$. Explicitly, the lift of $\Theta$ in the covering coordinates of step 2.1 is $(t,X)\mapsto(t,-X)$, because $\Theta(r(t)\exp X)=r(t)\exp(-X)$. It is a group automorphism: its compositions with multiplication on either side are lifts of the same base map on connected $\widetilde G\times\widetilde G$ and agree at the identity, hence agree everywhere; its square is the identity by the same uniqueness argument. Its fixed group is precisely $\mathbb R\times\{0\}=\widetilde K$. Thus the replacement is noncompact, and neither the finite-center nor compact-$K$ qualification may be discarded in the stated theorems. This is a counterexample to the joint claim, without asserting that every nonlinear cover has identical behavior. [A1, L1, step 2.1, step 4.1, step 4.2, algebra] ∎
