---
id: lem-gr-periodic-sobolev-completeness
kind: lemma
title: "Completeness of the periodic Sobolev spaces H^s(T^3_{2 pi}; R^N)"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, thm-fourier-basis-and-parseval-on-the-n-torus, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, lem-trigonometric-characters-are-orthonormal, thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set, def-square-summable-family-on-an-arbitrary-index-set, thm-cauchy-schwarz-in-an-inner-product-space, lem-metric-limits-unique, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  lem-trigonometric-characters-are-orthonormal: mathematical-premise
  thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set: mathematical-premise
  def-square-summable-family-on-an-arbitrary-index-set: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  lem-metric-limits-unique: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "M. E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (UNC lecture notes, 2018), Section 1 (Fourier series on the torus T^n): characters, Fourier coefficients, the Parseval identity, the coefficient isometry onto the square-summable sequences and the completeness of the weighted coefficient spaces"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universitat Ulm, WS 2018/19), Section 2.1 (Fourier characterisation of the Sobolev spaces H^s(T^3) as weighted square-summable coefficient spaces, hence Hilbert spaces for every real s, and the continuous embedding H^s(T^3) into L-infinity for s>3/2)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture notes), Chapter 3 (Sobolev Spaces), Sections 3.5 and 3.10 (Sobolev spaces and compactness results): completeness of Sobolev spaces by passage of the weak identities to the limit"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $s\ge0$ be an integer and $N\ge1$, write
$H^s=H^s(\mathbb T^3_{2\pi};\mathbb R^N)$ for the periodic Sobolev space with
its norm $\|\cdot\|_{H^s}$ and Fourier coefficients
$\widehat u(k)\in\mathbb C^N$ of [[def-gr-periodic-torus-and-sobolev-spaces]],
and put
$$N_s(u)^2:=\sum_{k\in\mathbb Z^3}(1+|k|^2)^s\,|\widehat u(k)|^2\le+\infty .$$
Then:

**(a)** every Cauchy sequence in $(H^s,\|\cdot\|_{H^s})$ converges in
$(H^s,\|\cdot\|_{H^s})$; that is, $H^s$ is a real Banach space;

**(b)** more precisely, for every Cauchy sequence $(u_n)$ in $H^s$ there is
$u\in H^s$ with $N_s(u_n-u)\to0$, and then
$\|u_n-u\|_{H^s}\le C_s^{1/2}N_s(u_n-u)\to0$, where $C_s$ is the constant of
clause (b) of
[[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]]; this $u$ is
the unique limit of $(u_n)$.

## Facts & Assumptions

**Given:** Countable Choice, integers $s\ge0$ and $N\ge1$, the torus
$\mathbb T^3_{2\pi}$ with its normalized measure and the spaces of
[[def-gr-periodic-torus-and-sobolev-spaces]], and a sequence $(u_n)$ in $H^s$
that is Cauchy for $\|\cdot\|_{H^s}$.

[L1] Fourier differentiation and norm equivalence: there are constants
$0<c_s\le C_s<\infty$, depending only on $s$, with
$c_sN_s(u)^2\le\|u\|_{H^s}^2\le C_sN_s(u)^2$ for every $u\in H^s$; and
conversely, if a class $u\in L^2(\mathbb T^3_{2\pi};\mathbb R^N)$ satisfies
$N_s(u)<\infty$, then $u\in H^s$ and the same two inequalities hold
([[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]] clause (b)).

[L2] $L^2(\mathbb T^3_{2\pi};\mathbb R^N)$ is a real Hilbert space, hence
complete; for $u\in L^2$ and every $k$ one has
$|\widehat u(k)|_{\mathbb C^N}\le\|u\|_2$, because $|\chi_k|=1$ and
Cauchy--Schwarz applies ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]],
[[def-gr-periodic-torus-and-sobolev-spaces]],
[[thm-cauchy-schwarz-in-an-inner-product-space]]).

[L3] $(\chi_k)_{k\in\mathbb Z^3}$ is an orthonormal family of $L^2$, so for
finitely supported coefficient families
$\|\sum_ka_k\chi_k\|_2^2=\sum_k|a_k|^2$
([[lem-trigonometric-characters-are-orthonormal]],
[[thm-fourier-basis-and-parseval-on-the-n-torus]],
[[def-gr-periodic-torus-and-sobolev-spaces]]).

[L4] $\ell^2(\mathbb Z^3;\mathbb C^N)$ is complete. Under the elementary
identification $c\leftrightarrow(c^j_k)_{(k,j)}$ it is the space
$\ell^2(\mathbb Z^3\times\{1,\dots,N\};\mathbb C)$ of
[[def-square-summable-family-on-an-arbitrary-index-set]], and
$\ell^2(I;\mathbb F)$ is complete for every index set $I$ and every
$\mathbb F\in\{\mathbb R,\mathbb C\}$
([[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]]).

[L6] A convergent sequence in a metric space has exactly one limit
([[lem-metric-limits-unique]]).

## Proof

**Proof technique:** direct.

1.1 (Weighted coefficient Cauchy sequences.) $H^s$ is a vector space, so $u_n-u_m\in H^s$; put $w_k:=(1+|k|^2)^{s/2}$ and $c^{(n)}:=(w_k\widehat{u_n}(k))_k$. By [L1], $\|c^{(n)}-c^{(m)}\|_{\ell^2}^2=\sum_k|w_k\widehat{u_n}(k)-w_k\widehat{u_m}(k)|^2=N_s(u_n-u_m)^2\le c_s^{-1}\|u_n-u_m\|_{H^s}^2$, so $(c^{(n)})$ is a Cauchy sequence in $\ell^2(\mathbb Z^3;\mathbb C^N)$. [L1, algebra]

2.1 (Coefficientwise limit.) By [L4] there is $c\in\ell^2(\mathbb Z^3;\mathbb C^N)$ with $\|c^{(n)}-c\|_{\ell^2}\to0$; convergence in $\ell^2$ gives coordinate convergence, so $w_k\widehat{u_n}(k)\to c_k$ for every $k$. Put $v_k:=w_k^{-1}c_k$; then $\widehat{u_n}(k)\to v_k$ and $N_s(v)^2:=\sum_k(1+|k|^2)^s|v_k|^2=\sum_k|c_k|^2=\|c\|_{\ell^2}^2<\infty$. [step 1.1, L4, algebra]

3.1 (Conjugate symmetry of the limit coefficients.) Each $u_n$ is real-valued, so $\widehat{u_n}(-k)=\overline{\widehat{u_n}(k)}$ for every $k$, by conjugating the defining integral and using $\chi_{-k}=\overline{\chi_k}$; passing to the limit of the convergent coordinate sequences gives $v_{-k}=\overline{v_k}$ for every $k$. [step 2.1, L3, algebra]

4.1 (The limit class.) For $n\ge0$ let $u^{(n)}:=\sum_{|k|_\infty\le n}v_k\chi_k$, a finite sum defining a class in $L^2(\mathbb T^3_{2\pi};\mathbb R^N)$: conjugating the finite sum gives $\sum_k\overline{v_k}\,\overline{\chi_k}=\sum_kv_{-k}\chi_{-k}=\sum_kv_k\chi_k$ by step 3.1, so it is real-valued, and its Fourier coefficients are $v_k$ for $|k|_\infty\le n$ and $0$ otherwise. By [L3] and step 2.1, $\|u^{(n)}-u^{(m)}\|_2^2=\sum_{n<|k|_\infty\le m}|v_k|^2\to0$ as $n,m\to\infty$, because $\sum_k|v_k|^2\le N_s(v)^2<\infty$ and $s\ge0$ gives $(1+|k|^2)^s\ge1$; since $L^2$ is complete [L2], $(u^{(n)})$ converges in $L^2$ to a class $u\in L^2(\mathbb T^3_{2\pi};\mathbb R^N)$. For every $k$, $|\widehat u(k)-\widehat{u^{(n)}}(k)|=|\widehat{u-u^{(n)}}(k)|\le\|u-u^{(n)}\|_2\to0$ by [L2], so $\widehat u(k)=v_k$; hence $N_s(u)=N_s(v)<\infty$ and [L1] gives $u\in H^s$. [step 2.1, step 3.1, L1, L2, L3, algebra]

5.1 (Convergence in $H^s$.) By steps 2.1 and 4.1, $N_s(u_n-u)^2=\sum_k(1+|k|^2)^s|\widehat{u_n}(k)-v_k|^2=\sum_k|w_k\widehat{u_n}(k)-c_k|^2=\|c^{(n)}-c\|_{\ell^2}^2\to0$, and [L1] gives $\|u_n-u\|_{H^s}\le C_s^{1/2}N_s(u_n-u)\to0$. [step 1.1, step 2.1, step 4.1, L1, algebra]

6.1 (Conclusion.) Steps 4.1 and 5.1 produce, for every Cauchy sequence in $H^s$, a limit $u\in H^s$ with $N_s(u_n-u)\to0$ and $\|u_n-u\|_{H^s}\to0$; this is (a) and the first two assertions of (b), and the limit is unique by [L6]. [step 4.1, step 5.1, L6] ∎

## Remarks

- **Role.** This supplies the completeness of $H^{s-1}$ used in
  [[lem-gr-galerkin-compactness]] (the Cauchy diagonal subsequence converges)
  and of $H^{s-2}$ used in
  [[lem-gr-galerkin-limit-is-classical-solution]] (the extracted limit of the
  time derivatives), and more generally the Banach-space property of the
  periodic Sobolev scale.
- **What is used.** Only the Fourier characterisation of the norm and of the
  space, completeness of $L^2$, completeness of the weighted coefficient
  space and the elementary conjugate-symmetry consequence of real-valuedness.
  No differentiability of the limit class is assumed; membership in $H^s$
  follows from the finite weighted norm through clause (b) of
  [[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]].
