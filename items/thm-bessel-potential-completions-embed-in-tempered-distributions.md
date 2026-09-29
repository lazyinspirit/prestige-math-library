---
id: thm-bessel-potential-completions-embed-in-tempered-distributions
kind: theorem
title: The Bessel completion embeds canonically in tempered distributions
status: published
origin: pipeline
deps:
  - lem-japanese-bracket-powers-preserve-schwartz-space
  - lem-weighted-fourier-images-of-schwartz-functions-are-dense-in-ltwo
  - def-real-order-bessel-potential-sobolev-space
  - lem-complex-lp-completeness-density-and-inner-product
  - lem-schwartz-space-is-dense-in-l-two
  - def-schwartz-space-and-its-seminorms
  - def-tempered-distribution
  - def-weak-and-strong-topologies-on-tempered-distributions
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - def-countable-choice
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "Section 12.1.2, Definition 12.3 and properties (1),(4), printed pp. 140–141; the completion bridge is proved locally"
    - title: "Richard B. Melrose, Differential Analysis, Chapter 3"
      url: https://math.mit.edu/~rbm/18-155-F17/Chapter3.pdf
      locator: "Section 4, equation (4.14) and Proposition 4.8 proof, printed pp. 68–69; Fourier normalization converted and the completion bridge proved locally"
---

## Statement

Assume Countable Choice. For every $n\ge1$ and $s\in\mathbb R$, weighted
Fourier transformation extends from Schwartz space to a surjective linear
isometry
$$J_s:H^s(\mathbb R^n)\longrightarrow L^2(\mathbb R^n),\qquad J_s([u_j])=\lim_{j\to\infty}\langle\xi\rangle^s\mathcal F(u_j)$$
in $L^2$. If $g=J_s([u_j])$, then
$$E_s([u_j])=\mathcal F^{-1}(u_{\langle\xi\rangle^{-s}g})$$
where $u_h$ denotes the functional $\phi\mapsto\int h(\xi)\phi(\xi)\,d\xi$
whenever this integral defines a tempered distribution. This is a well-defined
continuous linear injection
$H^s(\mathbb R^n)\to\mathcal S'(\mathbb R^n)$ for both weak and strong dual
topologies. It sends the canonical Schwartz class to its usual regular
distribution and is independent of the representing Cauchy sequence.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $s\in\mathbb R$, and a completion class
$U\in H^s(\mathbb R^n)$.

[A1] Countable Choice permits one selection from each nonempty set in a
countable family ([[def-countable-choice]]).

[F1] Both bracket powers are inverse continuous multipliers on Schwartz space
and act invertibly on $\mathcal S'$ ([[lem-japanese-bracket-powers-preserve-schwartz-space]]).

[F2] The weighted Fourier image of Schwartz space is dense in complex $L^2$
([[lem-weighted-fourier-images-of-schwartz-functions-are-dense-in-ltwo]]).

[F3] $H^s$ consists of norm-Cauchy Schwartz sequences modulo zero limiting
distance, with the limiting norm and canonical dense constant-sequence map
([[def-real-order-bessel-potential-sobolev-space]]).

[F4] Complex $L^2$ is complete under Countable Choice
([[lem-complex-lp-completeness-density-and-inner-product]]).

[F5] The first-variable-linear complex $L^2$ pairing is well-defined and
satisfies Cauchy–Schwarz ([[lem-complex-lp-completeness-density-and-inner-product]]).

[F6] Schwartz classes are contained in and dense in complex $L^2$
([[lem-schwartz-space-is-dense-in-l-two]]).

[F7] A tempered distribution is a continuous complex-linear functional on
Schwartz space, with bilinear test pairing
([[def-tempered-distribution]]).

[F8] The weak topology tests individual Schwartz functions; the strong
topology tests bounded subsets of Schwartz space, bounded in every Schwartz
seminorm ([[def-weak-and-strong-topologies-on-tempered-distributions]]).

[F9] Fourier transformation is a topological automorphism of $\mathcal S'$
for both weak and strong topologies
([[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]]).

[F10] The distributional Fourier transform agrees with the unitary Plancherel
transform on regular $L^2$ distributions
([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]).

[F11] Schwartz seminorms are $p_{\alpha\beta}(\phi)=\sup_\xi
|\xi^\alpha\partial^\beta\phi(\xi)|$
([[def-schwartz-space-and-its-seminorms]]).

## Proof

1.1 For $U=[u_j]$, put $g_j=\langle\xi\rangle^s\mathcal F(u_j)$. The completion norm identity gives $\|g_j-g_k\|_2=q_s(u_j-u_k)$, so $(g_j)$ is Cauchy; by [F4] it has an $L^2$ limit $g$. Equivalent Cauchy sequences have difference norm tending to zero, hence the same limit. Define $J_sU=g$. [F3, F4, given]

1.2 Given $g\in L^2$, [F2] makes the weighted Schwartz image dense; for each $j$ choose $u_j\in\mathcal S$ with $\|\langle\xi\rangle^s\mathcal F(u_j)-g\|_2<2^{-j}$. Countable Choice [A1] selects this sequence. [A1, F2, given]

1.3 For $g\in L^2$ define $T_sg(\phi)=\int_{\mathbb R^n}g(\xi)\langle\xi\rangle^{-s}\phi(\xi)\,d\xi$. By [F1], $\langle\xi\rangle^{-s}\phi\in\mathcal S$, and [F6] puts it in $L^2$; the integral is the pairing $(g,\overline{\langle\xi\rangle^{-s}\phi})_2$, so [F5] gives absolute convergence independent of the representative of $g$. The function $\langle\xi\rangle^{-s}g$ is locally integrable because its weight is bounded on compact sets. [F1, F5, F6, F7]

2.1 Termwise addition and scalar multiplication commute with the $L^2$ limit, and $\|J_sU\|_2=\lim_j\|g_j\|_2=\lim_jq_s(u_j)=\|U\|_{H^s}$; thus $J_s$ is a linear isometry. [F3, step 1.1]

2.2 The norm identity $q_s(u_j-u_k)=\|\langle\xi\rangle^s\mathcal F(u_j)-\langle\xi\rangle^s\mathcal F(u_k)\|_2$ makes $(u_j)$ Cauchy in the Schwartz norm $q_s$. Its completion class $U=[u_j]$ satisfies $J_sU=g$, so $J_s$ is onto. [F3, step 1.2]

2.3 Choose an integer $N>|s|+n/2$. Polynomial expansion gives $\langle\xi\rangle^N|\phi(\xi)|\le C\sum_{|\alpha|\le N}p_{\alpha0}(\phi)$, while dyadic shells show $\int\langle\xi\rangle^{-2(N-|s|)}d\xi<\infty$; hence $\|\langle\xi\rangle^{-s}\phi\|_2\le C'\sum_{|\alpha|\le N}p_{\alpha0}(\phi)$. Cauchy–Schwarz [F5] now bounds $|T_sg(\phi)|$ by this finite-seminorm expression times $\|g\|_2$, proving temperateness by [F7]. For bounded $B\subset\mathcal S$, [F8] and [F11] make the same bound uniform over $\phi\in B$, so $g\mapsto T_sg$ is continuous for both dual topologies. [F5, F7, F8, F11, step 1.3]

3.1 Define $E_sU=\mathcal F^{-1}(T_s(J_sU))$. It is linear and continuous for weak and strong dual topologies by the isometry [F3, step 2.1], the uniform estimate in step 2.3, and the continuous inverse Fourier transform [F9]; it depends only on $U$ because $J_s$ is well-defined. [F3, F8, F9, step 2.1, step 2.3]

4.1 For the canonical class $i(u)$ of $u\in\mathcal S$, $J_s(i(u))=\langle\xi\rangle^s\widehat u$, so $T_s(J_s(i(u)))=u_{\widehat u}$. By [F10], $\mathcal F u_u=u_{\widehat u}$; invertibility [F9] gives $E_s(i(u))=u_u$, the functional $\phi\mapsto\int u\phi$. If $U=[u_j]$, then $d(i(u_j),U)=\lim_kq_s(u_j-u_k)\to0$ by the Cauchy condition, so step 3.1 gives $u_{u_j}\to E_sU$ in both topologies and the map is independent of the representing sequence. [F1, F3, F8, F9, F10, step 1.3, step 3.1]

4.2 If $E_sU=0$ and $g=J_sU$, Fourier injectivity [F9] gives $T_sg=0$. Multiplication by $\langle\xi\rangle^s$ is allowed on $\mathcal S'$ by [F1]; for each $\phi\in\mathcal S$, $\langle\langle\xi\rangle^sT_sg,\phi\rangle=T_sg(\langle\xi\rangle^s\phi)=\int g\phi=u_g(\phi)$. Hence $u_g=0$. [F1, F9, step 1.3, step 3.1]

5.1 By [F6] and Countable Choice [A1], choose $\phi_j\in\mathcal S$ with $\phi_j\to\overline g$ in $L^2$. Then $0=u_g(\phi_j)=\int g\phi_j$; Cauchy–Schwarz [F5] yields $\int g\phi_j\to\int|g|^2$, so $g=0$ in $L^2$. The isometry [F3, step 2.1] gives $U=0$, proving that $E_s$ is injective. [A1, F3, F5, F6, step 4.2] ∎
