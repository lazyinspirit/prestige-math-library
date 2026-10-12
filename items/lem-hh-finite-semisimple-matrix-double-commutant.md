---
id: lem-hh-finite-semisimple-matrix-double-commutant
kind: lemma
title: "Finite semisimple matrix density and the double commutant over Q"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 0
deps: [lem-hh-finite-matrix-and-module-preliminaries]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof et al., Introduction to representation theory"
      url: "https://arxiv.org/pdf/0901.0827"
      locator: "§§2.1–2.3, pp. 23–25, Proposition 2.2, Corollary 2.4 and Theorem 2.5; §§4.18–4.19, pp. 64–65, Theorem 4.54"
---

## Statement

Let $G$ be a finite group, $W$ a finite-dimensional rational representation, and $B\subseteq\operatorname{End}_{\mathbb Q}(W)$ the image of $\mathbb Q[G]$. Then
$$B=\operatorname{End}_{\operatorname{End}_B(W)}(W).$$
No algebraic-closure, splitting, or commutativity hypothesis on the division algebras of simple summands is required.

## Facts & Assumptions

**Given:** A finite group $G$, a finite-dimensional left $\mathbb Q[G]$-module $W$, and the finite-complement result below.

[F1] Every submodule of a finite direct sum of simple modules is a direct sum of a subfamily and has a complement; finite-dimensional modules have finite composition series ([[lem-hh-finite-matrix-and-module-preliminaries]]).

## Proof

**Given:** The data in [F1].

1.1 Let $U\subseteq W$ be a $G$-submodule and choose a rational linear projection $p:W\to U$ that is the identity on $U$. The average $P=|G|^{-1}\sum_{g\in G}gpg^{-1}$ has image in $U$, restricts to the identity on $U$, and satisfies $hPh^{-1}=P$ for every $h\in G$ by reindexing the finite sum. Thus $P$ is a $G$-linear projection and $\ker P$ complements $U$. Selecting a nonzero submodule of least positive rational dimension makes it simple; splitting it off and inducting on dimension writes $W=\bigoplus_{\lambda}S_\lambda^{m_\lambda}$ with finitely many pairwise nonisomorphic simple modules $S_\lambda$. [given, F1, algebra]

1.2 For a simple $S$, $D=\operatorname{End}_B(S)$ is a division ring: a nonzero module map has zero kernel and nonzero image, so is bijective and its inverse is again a module map. Give $S$ the right $D^{\mathrm{op}}$-action $s\cdot d^{\mathrm{op}}=d(s)$. It has a finite basis over this division ring: a $D^{\mathrm{op}}$-independent list is rationally independent because $\mathbb Q\,\mathrm{id}_S\subseteq D$, so its length is bounded by $\dim_{\mathbb Q}S$; a list of maximal length spans. Write this basis as $v_1,\ldots,v_d$. [given, F1, algebra]

2.1 The evaluation image $I=\{(bv_1,\ldots,bv_d):b\in B\}\subseteq S^d$ is a $B$-submodule. If it were proper, [F1] would give a nonzero complement; projecting onto one simple summand of that complement and identifying it with $S$ gives a nonzero $B$-map $f:S^d\to S$ that vanishes on $I$. Every such map has the form $f(x_1,\ldots,x_d)=\sum_jd_j(x_j)$ with $d_j\in D$. For $b\in B$, $0=f(bv_1,\ldots,bv_d)=b\sum_jd_j(v_j)$, so at $b=1$ one gets $\sum_jv_j\cdot d_j^{\mathrm{op}}=0$. The chosen right $D^{\mathrm{op}}$-basis forces every $d_j=0$, contradicting $f\ne0$. Hence evaluation is onto. Any $D^{\mathrm{op}}$-linear endomorphism of $S$ is therefore the action of some $b\in B$: choose $b$ with the prescribed values on the basis, then both maps are $D^{\mathrm{op}}$-linear and agree on that basis. Thus the image of $B$ on $S$ is $\operatorname{End}_{D^{\mathrm{op}}}(S)$. [given, F1, step 1.2, algebra]

3.1 Apply the same evaluation argument simultaneously to one chosen $D_\lambda^{\mathrm{op}}$-basis of each $S_\lambda$. The target is $X=\bigoplus_\lambda S_\lambda^{d_\lambda}$. If the image of $B\to X$, $b\mapsto(bv_{\lambda,j})_{\lambda,j}$, were proper, [F1] would provide a nonzero $B$-map $f:X\to S_\mu$ killing that image for some simple type $\mu$. A map from $S_\lambda$ to $S_\mu$ is zero for $\lambda\ne\mu$, since a nonzero map between simple modules is an isomorphism; the remaining coordinates of $f$ are maps $d_j\in D_\mu$. Evaluating at $b=1$ contradicts the $D_\mu^{\mathrm{op}}$-independence of the chosen basis of $S_\mu$, exactly as in step 2.1. Therefore every tuple of target values on all these bases is attained by one $b$, and the image of $B$ on the distinct simple types is the full independent product $\prod_\lambda\operatorname{End}_{D_\lambda^{\mathrm{op}}}(S_\lambda)$. [given, F1, step 1.2, step 2.1, algebra]

4.1 On $W_\lambda=S_\lambda^{m_\lambda}$ this product acts by the same full algebra $R_\lambda=\operatorname{End}_{D_\lambda^{\mathrm{op}}}(S_\lambda)$ on each copy. Its commutant on $S_\lambda$ is exactly $D_\lambda$: a map commutes with $R_\lambda$ iff it commutes with the image of $B$, which is equivalent to being in $\operatorname{End}_B(S_\lambda)$. Hence $\operatorname{End}_B(W)=\bigoplus_\lambda M_{m_\lambda}(D_\lambda)$. To take its commutant on $W_\lambda$, first commute with the diagonal and off-diagonal copy matrix units; this forces zero off-diagonal blocks and the same map $g:S_\lambda\to S_\lambda$ on every diagonal block. Commuting with the diagonal $D_\lambda$ maps is exactly the condition $g(s\cdot d^{\mathrm{op}})=g(s)\cdot d^{\mathrm{op}}$, so $g\in\operatorname{End}_{D_\lambda^{\mathrm{op}}}(S_\lambda)=R_\lambda$. The independent central block projections eliminate maps between distinct $\lambda$. Thus the commutant of $\operatorname{End}_B(W)$ is precisely $\bigoplus_\lambda R_\lambda$ acting diagonally on the multiplicity copies, which is the image of $B$ from step 3.1. [step 3.1, algebra] ∎
