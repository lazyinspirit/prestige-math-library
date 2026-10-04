---
id: ex-pontryagin-dual-of-euclidean-space
kind: example
title: "The Pontryagin dual of Euclidean space is Euclidean space"
deps:
- lem-unit-circle-is-a-compact-metrizable-topological-group
- lem-continuous-characters-of-the-real-line-are-exponentials
- lem-duals-of-finite-products-and-discrete-direct-sums
- def-pontryagin-dual-and-compact-open-topology
- lem-compact-open-character-group-operations-are-continuous
- def-product-topology
- def-homeomorphism-and-open-maps
- def-continuous-map-top
- thm-complex-exponential-addition-and-real-extension
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- def-complex-metric-convergence-and-continuity
- thm-algebra-of-continuous-functions
- def-p-norms-on-rn
- def-euclidean-inner-product
- lem-standard-basis-of-f-n
- thm-cauchy-schwarz-and-the-euclidean-norm
- lem-metrics-on-rn
- cor-heine-borel-in-the-product-topology
- thm-compactness-under-continuous-maps
- def-group-homomorphism
- def-standard-topologies
- lem-continuity-is-local-and-pastes
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: "Dikran D. Dikranjan, Introduction to Topological Groups (author lecture notes, Universita di Udine / Universidad Complutense de Madrid, 2007)"
    url: "http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf"
    locator: "Section 7.2, Example 7.7, printed p. 49: the real-line dual; Section 7.3, Lemma 7.12, printed p. 50: finite product duals. The Euclidean computation is their coordinatewise consequence."
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand 1953, Chapter VII, Sections 34-35 (printed pp. 134-140)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
    locator: "Section 35C, printed pp. 139-140, gives the real-line dual; Section 35A, printed pp. 138-139, computes finite product duals."
status: published
origin: pipeline
proof_strategy: direct
---
## Example

For $n\ge1$ every continuous group homomorphism
$\varphi:\mathbb R^{n}\to\mathbb T$ is
$\varphi(x)=\exp(2\pi i\,\xi\cdot x)$ for a unique $\xi\in\mathbb R^{n}$, and
$\xi\mapsto\varphi_{\xi}$ is an isomorphism of topological groups
$\mathbb R^{n}\to\widehat{\mathbb R^{n}}$
([[def-p-norms-on-rn]], [[def-product-topology]]).

## Facts & Assumptions

[F1] Every continuous group homomorphism $\psi:\mathbb R\to\mathbb T$ is $\psi(t)=\exp(2\pi i\xi t)$ for a unique $\xi\in\mathbb R$, and conversely each such map is a continuous character. ([[lem-continuous-characters-of-the-real-line-are-exponentials]])

[F2] Coordinates of $\mathbb R^n$ are indexed by $j<n$. With the standard vectors $e_j$ one has $x=\sum_{j<n}x_je_j$ and $\xi\cdot x:=\sum_{j<n}\xi_jx_j$. Repeated application of the homomorphism law gives $\varphi(x)=\prod_{j<n}\varphi(x_je_j)$. The coordinate inclusion $t\mapsto te_j$ is continuous, since $d_2(te_j,se_j)=|t-s|$. ([[lem-standard-basis-of-f-n]], [[def-euclidean-inner-product]], [[def-p-norms-on-rn]], [[lem-metrics-on-rn]], [[def-group-homomorphism]])

[F3] The circle has continuous multiplication and inversion. $\exp(u+v)=\exp u\exp v$, so $\exp(2\pi i(\xi+\xi')\cdot x)=\exp(2\pi i\xi\cdot x)\exp(2\pi i\xi'\cdot x)$, and $e^{i\pi}+1=0$. Moreover $u\mapsto\exp(2\pi iu)$ is continuous at $0$. ([[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[lem-continuous-characters-of-the-real-line-are-exponentials]], [[lem-continuity-is-local-and-pastes]])

[F4] The product topology on $\mathbb R^n$ is its Euclidean metric topology. Closed balls in $\mathbb R^{n}$ are compact, and a continuous real-valued function on a nonempty compact set attains its maximum. ([[cor-heine-borel-in-the-product-topology]], [[thm-compactness-under-continuous-maps]], [[def-complex-metric-convergence-and-continuity]])

[F5] The dual of a topological group is a Hausdorff topological group, so translations of the dual are homeomorphisms, and its compact-open subbasis is $S(K,W)=\{\gamma:\gamma[K]\subseteq W\}$. Continuity of a homomorphism at the identity implies continuity everywhere by translating target neighbourhoods to the identity and translating the resulting source neighbourhoods back; translations in $\mathbb R^n$ are isometries for $d_2$ and translations in the dual are homeomorphisms. ([[lem-compact-open-character-group-operations-are-continuous]], [[def-pontryagin-dual-and-compact-open-topology]], [[def-homeomorphism-and-open-maps]], [[lem-metrics-on-rn]])

[F6] On the nonempty compact subsets of a Euclidean space the quantity $R:=\max_{x\in K}\lVert x\rVert_{2}$ is finite and $|\xi\cdot x|\le\lVert\xi\rVert_{2}\lVert x\rVert_{2}$ for all $x$. The norm is continuous by $|\lVert x\rVert_2-\lVert y\rVert_2|\le\lVert x-y\rVert_2$. ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-p-norms-on-rn]], [[lem-metrics-on-rn]], [[thm-compactness-under-continuous-maps]])

## Verification

**Given:** $n\ge1$ and a continuous group homomorphism $\varphi:\mathbb R^{n}\to\mathbb T$, together with the maps $\varphi_{\xi}(x)=\exp(2\pi i\xi\cdot x)$.

1.1 For each $j<n$ the map $\psi_j(t):=\varphi(te_j)$ is a continuous group homomorphism $\mathbb R\to\mathbb T$, so by [F1] there is a unique $\xi_j\in\mathbb R$ with $\psi_j(t)=\exp(2\pi i\xi_jt)$. Define $\xi\in\mathbb R^n$ by $\xi(j):=\xi_j$ for $j<n$. Consequently $\varphi(x)=\prod_{j<n}\psi_j(x_j)=\prod_{j<n}\exp(2\pi i\xi_jx_j)=\exp\big(2\pi i\sum_{j<n}\xi_jx_j\big)=\exp(2\pi i\,\xi\cdot x)$ by [F2] and [F3]. [F1, F2, F3]

2.1 The vector $\xi$ is unique: if $\exp(2\pi i\xi\cdot x)=\exp(2\pi i\xi'\cdot x)$ for all $x$, then restricting to $x=te_j$ for $j<n$ shows $\psi_j(t)=\exp(2\pi i\xi'_jt)$, so the uniqueness in [F1] gives $\xi_j=\xi'_j$ for every $j<n$ and hence $\xi=\xi'$. [step 1.1, F1]

3.1 Each $\varphi_{\xi}$ is a continuous character: it is the product over $j<n$ of the one-dimensional characters $x\mapsto\exp(2\pi i\xi_jx_j)$ composed with the continuous coordinate projections, so it is continuous, and the addition formula gives its homomorphism law. The map $\xi\mapsto\varphi_{\xi}$ is a bijective homomorphism: it is a homomorphism by [F3], injective by step 2.1, and surjective by step 1.1. [step 1.1, step 2.1, F1, F2, F3, F5]

3.2 It is continuous at the identity: let $K\subseteq\mathbb R^{n}$ be compact and $W\subseteq\mathbb T$ open with $1\in W$. If $K=\varnothing$, $S(K,W)$ is the whole dual and there is nothing to check; otherwise choose $\rho>0$ with $B(1,\rho)\subseteq W$, and by continuity of $u\mapsto\exp(2\pi iu)$ at $0$ by [F3] choose $\delta'>0$ with $|\exp(2\pi iu)-1|<\rho$ whenever $|u|<\delta'$. With $R:=\max_{x\in K}\lVert x\rVert_{2}$ by [F6], put $\delta:=\delta'/(R+1)$; if $\lVert\eta\rVert_{2}<\delta$ and $x\in K$, then $|\eta\cdot x|\le\lVert\eta\rVert_{2}\lVert x\rVert_{2}<\delta'$, so $|\varphi_{\eta}(x)-1|<\rho$ and $\varphi_{\eta}[K]\subseteq B(1,\rho)\subseteq W$, that is $\varphi_{\eta}\in S(K,W)$. Hence the map is continuous at the identity character and, being a homomorphism, continuous everywhere by [F5]. [step 2.1, F3, F5, F6]

3.3 It has continuous inverse: given $\varepsilon>0$, let $R:=1/(2\varepsilon)$ and let $K$ be the closed ball of radius $R$, compact by [F4]. If $\varphi_{\eta}\in S(K,B(1,1))$ and $\lVert\eta\rVert_{2}\ge\varepsilon$, then $x_{0}:=\eta/(2\lVert\eta\rVert_{2}^{2})$ satisfies $\lVert x_{0}\rVert_{2}=1/(2\lVert\eta\rVert_{2})\le R$, so $x_{0}\in K$, and $\eta\cdot x_{0}=1/2$, whence $|\varphi_{\eta}(x_{0})-1|=|\exp(\pi i)-1|=2$, contradicting $\varphi_{\eta}\in S(K,B(1,1))$; therefore $\lVert\eta\rVert_{2}<\varepsilon$. So the inverse map sends the identity neighbourhood $S(K,B(1,1))$ into the ball of radius $\varepsilon$, and it is continuous at the identity, hence everywhere by [F5]. [step 2.1, F3, F4, F5]

4.1 By steps 3.1, 3.2 and 3.3 the map $\xi\mapsto\varphi_{\xi}$ is a continuous bijective homomorphism with continuous inverse, hence an isomorphism of topological groups $\mathbb R^{n}\to\widehat{\mathbb R^{n}}$, and step 1.1 with step 2.1 is the stated classification with its uniqueness. [step 1.1, step 2.1, step 3.1, step 3.2, step 3.3] ∎
