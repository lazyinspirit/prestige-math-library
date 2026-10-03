---
id: thm-bgg-resolution-of-a-finite-dimensional-simple-module
kind: theorem
title: The BGG resolution of a finite-dimensional simple module
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [prop-the-bgg-differential-squares-to-zero, lem-the-bgg-augmentation-has-image-the-simple-module, lem-dimension-of-the-kernel-modulo-n-minus-equals-the-next-term, lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential, lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules, def-bgg-differential-from-signed-verma-maps, def-bgg-bruhat-verma-sum-in-degree-k, def-axiom-of-choice, thm-pbw-model-of-a-verma-module, lem-positive-root-pairings-of-a-dominant-integral-weight, def-bgg-category-o, lem-finite-weyl-strong-exchange-and-deletion]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 3.2 and Sec. 4.1 (Theorem BGG and its proof), pp. 11 and 14-18"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "A. Rocha-Caridi, Splitting criteria for modules induced from a subalgebra of a semisimple Lie algebra, Trans. AMS 262 (1980), Sec. 10, Corollary 10.6, pp. 355-356"
      url: "https://www.ams.org/journals/tran/1980-262-02/S0002-9947-1980-0586721-0/S0002-9947-1980-0586721-0.pdf"
    - title: "N. Hemelsoet and R. Voorhaar, A computer algorithm for the BGG resolution, arXiv:1911.00871, Theorems 2.5 and 2.6, p. 5"
      url: "https://arxiv.org/pdf/1911.00871"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda\in\Lambda^+$. The BGG complex $C_\bullet(\lambda)$ with differentials $d_k$ is a resolution of $L(\lambda)$ by Verma modules:

$$0\to C_{|\Phi^+|}(\lambda)\to\cdots\to C_1(\lambda)\to C_0(\lambda)\to L(\lambda)\to0$$

is exact. Equivalently, $\operatorname{coker}d_1=L(\lambda)$ and $\operatorname{im}d_{k+1}=\ker d_k$ for all $k\ge1$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight $\lambda\in\Lambda^+$, the BGG complex $C_\bullet(\lambda)$ with differentials $d_k\colon C_k(\lambda)\to C_{k-1}(\lambda)$ and augmentation $d_0=\pi\colon C_0(\lambda)=M(\lambda)\twoheadrightarrow L(\lambda)$.

[F1] $d_{k-1}\circ d_k=0$ for all $k\ge2$, and the augmented sequence is a complex; $d_{k+1}$ therefore maps $C_{k+1}(\lambda)$ into $\ker d_k$ for every $k\ge0$, and its restriction to $C_{k+1}(\lambda)$ is a $U(\mathfrak n^-)$-linear map onto a submodule of $\ker d_k$ ([[prop-the-bgg-differential-squares-to-zero]], [[def-bgg-differential-from-signed-verma-maps]]).

[F2] The complex is exact at $C_0$: $\operatorname{im}d_1=\ker d_0=\ker\pi$ and $\operatorname{coker}d_1=L(\lambda)$ ([[lem-the-bgg-augmentation-has-image-the-simple-module]]).

[F3] For every $j$ the module $C_j(\lambda)=\bigoplus_{\ell(w)=j}M(w\circ\lambda)$ is an object of $\mathcal O$ that is free over $U(\mathfrak n^-)$ on the weight-vector generators $v_w$ (the highest weight vectors of the summands), and $C_j(\lambda)/\mathfrak n^-C_j(\lambda)$ has dimension $|W_j|$; $C_j(\lambda)=0$ for $j>|\Phi^+|$ ([[thm-pbw-model-of-a-verma-module]], [[def-bgg-bruhat-verma-sum-in-degree-k]], [[lem-positive-root-pairings-of-a-dominant-integral-weight]], [[def-bgg-category-o]]).

[F4] **BGG 10.7** ([[lem-dimension-of-the-kernel-modulo-n-minus-equals-the-next-term]]): if $C_\bullet(\lambda)$ is exact in degrees $0,\dots,k-1$, then $\ker d_k/\mathfrak n^-\ker d_k$ is finite-dimensional of dimension $|W_{k+1}|=\dim C_{k+1}(\lambda)/\mathfrak n^-C_{k+1}(\lambda)$.

[F5] **BGG 10.6** ([[lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential]]): if $C_\bullet(\lambda)$ is exact in degrees $0,\dots,k-1$, then $\bar d_{k+1}\colon C_{k+1}(\lambda)/\mathfrak n^-C_{k+1}(\lambda)\to\ker d_k/\mathfrak n^-\ker d_k$ is injective.

[F6] **BGG 10.5** ([[lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules]]): if $N\in\mathcal O$ and $\varphi\colon M\to N$ is a $U(\mathfrak n^-)$-linear map from a free $U(\mathfrak n^-)$-module $M$ on weight-vector generators with each $\varphi(v_i)$ a weight vector, then $\varphi$ is surjective if and only if $\bar\varphi$ is surjective.

[F7] $\ker d_k$ is an object of $\mathcal O$ for every $k$ (a subobject of $C_k(\lambda)\in\mathcal O$), and the differentials are $\mathfrak h$-equivariant, so $d_{k+1}(v_w)$ is a weight vector of weight $w\circ\lambda$ for each generator $v_w$ of $C_{k+1}(\lambda)$ ([[def-bgg-category-o]], [[def-bgg-bruhat-verma-sum-in-degree-k]]).

## Proof

1.1 **Base of the induction.** Exactness at $C_0$ is [F2]: $\operatorname{im}d_1=\ker d_0$ and $\operatorname{coker}d_1=L(\lambda)$. [F2, base]

1.2 **Induction statement.** We prove by induction on $k\ge1$ that $\operatorname{im}d_{k+1}=\ker d_k$; note that exactness at $C_1,\dots,C_k$ for the unaugmented complex means $\operatorname{im}d_{j+1}=\ker d_j$ for $1\le j\le k$. The induction hypothesis available at stage $k$ is that $C_\bullet(\lambda)$ is exact in degrees $0,\dots,k-1$. For $k>|\Phi^+|$ the modules $C_k(\lambda)$ vanish by [F3], so it suffices to run the induction for $1\le k\le|\Phi^+|$; at $k=|\Phi^+|$ the statement $\operatorname{im}d_{|\Phi^+|+1}=\ker d_{|\Phi^+|}$ says that $d_{|\Phi^+|}$ is injective. [F3, ih]

2.1 **Dimensions agree.** Assume exactness in degrees $0,\dots,k-1$. By [F4] applied at degree $k$, the two spaces $\ker d_k/\mathfrak n^-\ker d_k$ and $C_{k+1}(\lambda)/\mathfrak n^-C_{k+1}(\lambda)$ are finite-dimensional of the same dimension $|W_{k+1}|$. [F4, step 1.2, ih]

3.1 **The reduced map is an isomorphism.** Under the same hypothesis, $\bar d_{k+1}$ is injective by [F5], and it is a linear map between the two finite-dimensional spaces of step 2.1 of equal dimension; hence $\bar d_{k+1}$ is bijective. [F5, step 2.1, ih]

4.1 **Upgrading to surjectivity.** The module $C_{k+1}(\lambda)$ is free over $U(\mathfrak n^-)$ on its weight-vector generators $v_w$ by [F3], and $\ker d_k\in\mathcal O$ by [F7]; the restriction $\varphi\colon C_{k+1}(\lambda)\to\ker d_k$ of $d_{k+1}$ is $U(\mathfrak n^-)$-linear (indeed $\mathfrak g$-linear) with $\varphi(v_w)$ a weight vector for every generator by [F7], and $\bar\varphi=\bar d_{k+1}$ is surjective by step 3.1. By [F6] the map $\varphi$ is surjective, i.e. $\operatorname{im}d_{k+1}=\ker d_k$: exactness at $C_k$. [F3, F6, F7, step 3.1]

5.1 The base of the induction is step 1.1, and step 4.1 passes from exactness in degrees $0,\dots,k-1$ to exactness at degree $k$, for every $1\le k\le|\Phi^+|$. Hence $0\to C_{|\Phi^+|}(\lambda)\to\cdots\to C_1(\lambda)\to C_0(\lambda)\to L(\lambda)\to0$ is exact and the two equivalent formulations hold. [F1, F3, step 1.1, step 4.1, discharge-induction: induction on the degree $k$] ∎
