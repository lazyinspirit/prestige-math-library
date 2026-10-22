---
id: lem-ip-fno-torus-compact-universality
kind: lemma
title: Fourier neural operators approximate continuous maps uniformly on compact torus sets
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-countable-choice
  - def-ip-generalized-fourier-neural-operator
  - lem-ip-finite-dimensional-neural-universal-approximation
  - thm-fourier-basis-and-parseval-on-the-n-torus
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nikola Kovachki, Zongyi Li, Burigede Liu, Kamyar Azizzadenesheli, Kaushik Bhattacharya, Andrew Stuart and Anima Anandkumar, On Universal Approximation and Error Bounds for Fourier Neural Operators"
      url: "https://jmlr.org/papers/volume22/21-0806/21-0806.pdf"
      locator: "Theorem 5 and complete proof in Appendix D.1–D.4, including Fourier truncation and coefficient extraction/reconstruction."
    - title: "Nikola Kovachki et al., Neural Operator: Learning Maps Between Function Spaces"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "§4.4, the periodic Fourier multiplier layer, real-valued conjugate-symmetry convention and output reconstruction, printed pp. 20–23."
---

## Statement

Assume Countable Choice. Let $n\ge1$, let $a,b\ge1$, and let $\sigma\in C^\infty(\mathbb R)$ be globally Lipschitz and nonpolynomial. Let $T:L^2(\mathbb T^n;\mathbb R^a)\to L^2(\mathbb T^n;\mathbb R^b)$ be continuous, let $C$ be a compact subset of the input space, and let $\varepsilon>0$. Then a finite Fourier neural operator on $\mathbb T^n$, with finitely many channels and layers, finite Fourier multipliers, continuous periodic bias functions, coordinatewise activation $\sigma$, and a final pointwise affine output map, satisfies
$$\sup_{f\in C}\|T(f)-\Phi(f)\|_{L^2(\mathbb T^n;\mathbb R^b)}<\varepsilon.$$

## Statement references

[[def-ip-generalized-fourier-neural-operator|The Fourier multiplier layer and generalized FNO architecture.]]

[[lem-ip-finite-dimensional-neural-universal-approximation|Finite-dimensional activation approximation on compact sets.]]

[Kovachki et al., Theorem 5 and Appendix D: complete compact-uniform FNO approximation proof](https://jmlr.org/papers/volume22/21-0806/21-0806.pdf)

## Facts & Assumptions

**Given:** Countable Choice and $n,a,b,\sigma,T,C,\varepsilon$ as in the statement.

[F1] Fourier characters form an orthonormal basis of $L^2(\mathbb T^n)$; finite Fourier projections are contractions converging strongly to the identity. ([[thm-fourier-basis-and-parseval-on-the-n-torus]])

[F2] Finite sums of affine hidden units with activation $\sigma$ are uniformly dense in continuous maps on every compact subset of a finite-dimensional Euclidean space. ([[lem-ip-finite-dimensional-neural-universal-approximation]])

[F3] A Fourier neural operator layer can apply any finite Fourier multiplier, inject any continuous periodic bias channel, and apply a pointwise affine map followed by $\sigma$; finite compositions with an affine output map have the architecture stated above. ([[def-ip-generalized-fourier-neural-operator]])

[A1] Countable Choice is used by the Fourier-basis supplier for completed Lebesgue $L^2$, including density of continuous periodic functions and Hilbert completeness. The finite coefficient extraction, finite-dimensional neural approximation and synthesis steps require only finite choices. ([[def-countable-choice]])

## Proof

**Given:** Countable Choice and the data in the statement.

1.1 If $C=\varnothing$, the zero operator from [F3] suffices. Otherwise let $P_N$ be the orthogonal projection onto real Fourier modes of frequency at most $N$. Strong convergence in [F1] is uniform on compact $C$: for $\eta>0$, choose a finite $\eta/3$-net $f_1,\ldots,f_s$ for $C$, then take $N$ so that $\|P_Nf_i-f_i\|_2<\eta/3$ for every $i$. For $f$ within $\eta/3$ of $f_i$, contraction of $I-P_N$ gives $\|(I-P_N)f\|_2<2\eta/3$. Hence $\sup_{f\in C}\|P_Nf-f\|_2\to0$. [A1, F1, F3, given, choose]

2.1 For each $f\in C$, continuity of $T$ supplies a radius $r_f>0$ such that its oscillation on the full ball $B(f,r_f)$ is less than $\varepsilon/8$. Choose a finite subcover $B(f_i,r_i/2)$ of $C$ by the HALF-radius balls, and take a positive $\delta<\min_i r_i/4$. By step 1.1, increase $N$ until $\sup_{f\in C}\|P_Nf-f\|_2<\delta$. For every $f\in C$ choose $i$ with $\|f-f_i\|_2<r_i/2$; then $\|P_Nf-f_i\|_2<3r_i/4$, so both points lie in the full continuity ball $B(f_i,r_i)$ and $\|T(P_Nf)-T(f)\|_2<\varepsilon/8<\varepsilon/4$. The set $P_NC$ and its continuous image $T(P_NC)$ are compact. Fourier projections converge uniformly on the latter by the finite-net argument of step 1.1, so choose $M$ with $\sup_{z\in P_NC}\|P_MT(z)-T(z)\|_2<\varepsilon/4$. [F1, step 1.1, given, choose]

3.1 The range of $P_N$ is finite dimensional. In a real orthonormal trigonometric basis, define $g:P_NC\to\mathbb R^q$ by listing the coefficients of $P_MT(z)$. By [F2], approximate $g$ uniformly on compact $P_NC$ by a finite $\sigma$-network with Euclidean coefficient error less than $\varepsilon/8$; orthonormality makes the corresponding output-polynomial error less than $\varepsilon/8$ in $L^2$. [F2, step 2.1]

4.1 First apply the finite Fourier multiplier $P_N$ from step 2.1, retaining the WHOLE real Fourier polynomial, including both sine and cosine components of each nonzero frequency. Its coefficient vectors lie in a compact set, so all its pointwise values are uniformly bounded. Inject the finitely many retained real basis functions $\varphi_j(x)$ as periodic bias channels. The multiplication map $(z,t)\mapsto zt$ is continuous on the compact ranges of $(P_Nf)(x)$ and $\varphi_j(x)$; approximate it by the pointwise networks of [F2], then use a zero-frequency multiplier to average each product. Since $\int(P_Nf)(x)\varphi_j(x)\,dx$ is exactly the real coefficient of $\varphi_j$, these constant channels approximate ALL desired coefficients without using an impossible translation-invariant cosine-only projection. Mandatory activations can be passed with arbitrarily small error on these bounded channels: choose $c$ with $\sigma'(c)\ne0$, encode $z$ as $c+\tau z$, and decode affinely by $(\sigma(c+\tau z)-\sigma(c))/(\tau\sigma'(c))$, which converges uniformly to $z$ on every bounded interval as $\tau\to0$. Approximate the finite products and implement the coefficient network from step 3.1 using finitely many such layers. At each stage uniform continuity on the compact finite coefficient ranges propagates arbitrarily small errors through the finite composition; zero-mode averaging has norm one. [F1, F2, F3, step 2.1, step 3.1, construct]

5.1 Inject the finitely many output basis functions $\varphi_k(x)$ as periodic bias channels. The output coefficient vector from step 4.1 ranges over a compact set; the continuous map from that vector and $(\varphi_k(x))_k$ to $\sum_kc_k\varphi_k(x)$ is uniformly approximated on their compact product by [F2]. The final affine output approximates this output Fourier polynomial with arbitrarily small uniform, hence $L^2$, error because normalized torus measure is one. [F2, F3, step 3.1, step 4.1, construct]

6.1 Choose the coefficient-extraction and Fourier-synthesis errors in steps 4.1–5.1 so their sum is less than $\varepsilon/4$. Combining this with the input truncation, output truncation and finite coefficient-map errors from steps 2.1 and 3.1 yields $\sup_{f\in C}\|T(f)-\Phi(f)\|_2<\varepsilon/4+\varepsilon/4+\varepsilon/8+\varepsilon/4<\varepsilon$. All cutoffs and channel counts are finite. [step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎
