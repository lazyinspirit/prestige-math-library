---
id: def-bgg-differential-from-signed-verma-maps
kind: definition
title: The BGG differential from signed Verma maps
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-bgg-bruhat-verma-sum-in-degree-k, lem-bruhat-covers-give-unique-verma-embeddings, lem-compatible-signs-exist-on-the-bruhat-graph, thm-verma-module-has-a-unique-simple-quotient, def-chain-complex-in-an-abelian-category, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "A. Rocha-Caridi, Splitting criteria for modules induced from a subalgebra of a semisimple Lie algebra, Trans. AMS 262 (1980), Sec. 10, p. 355 (definition of the maps $d_k$)"
      url: "https://www.ams.org/journals/tran/1980-262-02/S0002-9947-1980-0586721-0/S0002-9947-1980-0586721-0.pdf"
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 3.2, p. 11"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Fix $\lambda\in\Lambda^+$ and a compatible sign function $\varepsilon$, i.e. a function from the arrows $x\to y$ of the Bruhat graph to $\{\pm1\}$ whose product over the four edges of every square is $-1$ ([[lem-compatible-signs-exist-on-the-bruhat-graph]]). Write $\varepsilon(w,w')$ for the value of $\varepsilon$ on the arrow $w\to w'$ whenever $w\rhd w'$ are elements of $W$, and let $\iota_{w\to w'}\colon M(w\circ\lambda)\hookrightarrow M(w'\circ\lambda)$ be the canonical cover embedding of [[lem-bruhat-covers-give-unique-verma-embeddings]].

For $k\ge1$ define a $\mathfrak g$-homomorphism

$$d_k\colon C_k(\lambda)\to C_{k-1}(\lambda)$$

out of the degree-$k$ Verma sum $C_k(\lambda)=\bigoplus_{\ell(w)=k}M(w\circ\lambda)$ of [[def-bgg-bruhat-verma-sum-in-degree-k]] by requiring that its component

$$(d_k)_{w,w'}\colon M(w\circ\lambda)\to M(w'\circ\lambda)$$

from the summand indexed by $w$ (with $\ell(w)=k$) into the summand indexed by $w'$ (with $\ell(w')=k-1$) is

$$(d_k)_{w,w'}=\begin{cases}\varepsilon(w,w')\,\iota_{w\to w'},& w\rhd w',\\ 0,& w\ntriangleright w',\end{cases}$$

and that all components between pairs of summands with $\ell(w)\ne k$ or $\ell(w')\ne k-1$ are zero. Since a finite direct sum in an abelian category is a biproduct, a family of morphisms between finitely many summands and vanishing outside the $(w,w')$ pairs just described determines a unique $\mathfrak g$-homomorphism $C_k(\lambda)\to C_{k-1}(\lambda)$; each $C_k(\lambda)$ lies in $\mathcal O$ and $C_k(\lambda)=0$ for $k>|\Phi^+|$, so $d_k=0$ for $k>|\Phi^+|+1$ as a map out of the zero object. The map $d_k$ is a morphism of degree $-1$ for the grading by $k$ of the graded object $C_\bullet(\lambda)$ ([[def-chain-complex-in-an-abelian-category]]).

Set $d_0=\pi\colon C_0(\lambda)=M(\lambda)\twoheadrightarrow L(\lambda)$, the canonical surjection of [[thm-verma-module-has-a-unique-simple-quotient]], and set $d_k=0$ for $k<0$. The maps $d_k$ are the differentials of the BGG complex. For another compatible signing $\varepsilon'$, [[lem-compatible-signs-exist-on-the-bruhat-graph]] supplies vertex signs $c(w)$ with $c(e)=1$ and $\varepsilon'(w,w')/\varepsilon(w,w')=c(w)/c(w')$. The automorphism $T_k$ that multiplies the summand indexed by $w$ by $c(w)$ satisfies $T_{k-1}d_k=d'_k T_k$: the two component coefficients agree because $c(w)^2=c(w')^2=1$. Also $T_0$ is the identity, so this intertwines the augmentations. Hence the resulting complexes are isomorphic. Whether $d_{k-1}\circ d_k=0$ depends only on the square condition on $\varepsilon$ and is proved in [[prop-the-bgg-differential-squares-to-zero]].
