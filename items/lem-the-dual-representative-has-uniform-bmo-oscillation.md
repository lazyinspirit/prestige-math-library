---
id: lem-the-dual-representative-has-uniform-bmo-oscillation
kind: lemma
title: "The dual representative has uniformly bounded BMO oscillation"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [lem-hone-functional-has-compatible-local-ltwo-representatives, lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone, thm-riesz-representation-for-hilbert-space, cor-cauchy-schwarz-inequality-for-l-two]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "the closing computation of Theorem 7.40 ('show $\\sup_Q|Q|^{-1}\\int_Q|b-b_Q|\\lesssim_n|L|_{H^1\\to\\mathbb C}$') and (7.72)-(7.74), printed pp. 47-48"
    - title: "Brooke Wilson, Math 581A Classical and Multilinear Harmonic Analysis (University of Washington, Fall 2024), lecture 20"
      url: "https://sites.math.washington.edu/~blwilson/581AFall2024/Lectures/lecture20.pdf"
      locator: "the norm bound for the representing function, scanned pages 2-3"
---

## Statement

Assume Countable Choice, fix the $H^1$ kernel $\varphi$ and auxiliary order
$\widetilde N$ of [[lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone]],
let $\Lambda\in(H^1(\mathbb R^n))^*$ and let $u$ be the representative of the
preceding lemma. Then $u\in\mathrm{BMO}(\mathbb R^n)$ and
$\|u\|_{\mathrm{BMO}}\le C_{n,\widetilde N,\varphi}\|\Lambda\|$, with the
constant independent of $\Lambda$.

## Facts & Assumptions

**Given:** Countable Choice, the fixed $\varphi,\widetilde N$, $\Lambda\in(H^1(\mathbb R^n))^*$, the locally integrable representative $u$ and the local representatives $u_Q$ of [[lem-hone-functional-has-compatible-local-ltwo-representatives]], and a nondegenerate cube $Q$.

[F1] For every nondegenerate cube $Q$ the representative $u_Q\in L^2_0(Q)$ has mean $0$ on $Q$, satisfies $\Lambda(f)=\int_Qu_Qf$ for $f\in L^2_0(Q)$, and $u-u_Q$ is almost everywhere constant on $Q$ ([[lem-hone-functional-has-compatible-local-ltwo-representatives]]).

[F2] The restriction of $\Lambda$ to $L^2_0(Q)$ obeys $|\Lambda(f)|\le C_{n,\widetilde N,\varphi}|Q|^{1/2}\|\Lambda\|\,\|f\|_{L^2}$ for $f\in L^2_0(Q)$: this is the mean-zero embedding $\|f\|_{H^1}\le C_{n,\widetilde N,\varphi}|Q|^{1/2}\|f\|_{L^2}$ composed with $|\Lambda(f)|\le\|\Lambda\|\|f\|_{H^1}$ ([[lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone]]).

[F3] Riesz representation is an isometry: the representing vector $u_Q$ of $\Lambda|_{L^2_0(Q)}$ has $\|u_Q\|_{L^2}=\|\Lambda|_{L^2_0(Q)}\|$, the operator norm on the subspace ([[thm-riesz-representation-for-hilbert-space]]).

[F4] On the positive finite-measure cube $Q$, $|Q|^{-1}\int_Q|u_Q|\le|Q|^{-1/2}\|u_Q\|_{L^2}$ ([[cor-cauchy-schwarz-inequality-for-l-two]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $u-u_Q$ equals a constant $c$ almost everywhere on $Q$, and $u_Q$ has mean $0$ on $Q$; hence $\operatorname{mean}_Q(u)=c$ and $u-\operatorname{mean}_Q(u)=u_Q$ almost everywhere on $Q$. Therefore the mean oscillation of $u$ over $Q$ is $|Q|^{-1}\int_Q|u_Q|$. [F1]

1.2 By [F2] and [F3], $\|u_Q\|_{L^2}\le C_{n,\widetilde N,\varphi}|Q|^{1/2}\|\Lambda\|$. [F2, F3]

2.1 Combining steps 1.1 and 1.2 with the Cauchy-Schwarz bound [F4] gives $|Q|^{-1}\int_Q|u-\operatorname{mean}_Q(u)|=|Q|^{-1}\int_Q|u_Q|\le|Q|^{-1/2}\|u_Q\|_{L^2}\le C_{n,\widetilde N,\varphi}\|\Lambda\|$ for every nondegenerate cube $Q$. Taking the supremum over $Q$ shows $u\in\mathrm{BMO}(\mathbb R^n)$ with $\|u\|_{\mathrm{BMO}}\le C_{n,\widetilde N,\varphi}\|\Lambda\|$. [step 1.1, step 1.2, F4] ∎
