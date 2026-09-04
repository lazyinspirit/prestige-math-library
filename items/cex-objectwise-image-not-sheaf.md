---
id: cex-objectwise-image-not-sheaf
kind: counterexample
title: "The objectwise image of a sheaf morphism need not be a sheaf"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-subsheaf, lem-image-sheaf-is-sheafification-presheaf-image]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 29"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Statement refuted

For every morphism of sheaves of sets, the objectwise image presheaf is already
a subsheaf of the target.

## Facts & Assumptions

**Given:** The sheaf morphism
$$\exp: C^0(-,\mathbb R)\longrightarrow C^0(-,S^1),\qquad \exp_U(f)(z)=e^{2\pi i f(z)},$$
on the circle $X=S^1$.

[F1] A subsheaf must in particular be a sheaf ([[def-subsheaf]]).

[L1] The image sheaf is obtained by sheafifying the objectwise image presheaf
([[lem-image-sheaf-is-sheafification-presheaf-image]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $U_1=S^1\setminus\{(-1,0)\}$ and $U_2=S^1\setminus\{(1,0)\}$. These open arcs cover $S^1$. On each $U_i$ choose a continuous argument $\theta_i:U_i\to\mathbb R$ with $e^{2\pi i\theta_i(z)}=z$. Therefore the identity map $\operatorname{id}_{S^1}$ restricts to sections in the objectwise image presheaf on both $U_1$ and $U_2$. [given, choose, construct]

2.1 On the overlap $U_1\cap U_2$, both local sections are equal to the same target section $\operatorname{id}_{S^1}|_{U_1\cap U_2}$, so they are compatible. [step 1.1, given]

3.1 Suppose $\operatorname{id}_{S^1}$ lay in the global objectwise image. Then there would be a continuous $f:S^1\to\mathbb R$ with $e^{2\pi i f(z)}=z$ for every $z\in S^1$. Writing $z=e^{2\pi i t}$ with $t\in[0,1]$, the function $g(t):=f(e^{2\pi i t})-t$ is continuous and integer valued, hence constant. So $f(e^{2\pi i t})=t+n$ for some fixed integer $n$. Evaluating at $t=0$ and $t=1$ gives two values of $f$ at the same point $1\in S^1$, namely $n$ and $n+1$, a contradiction. Thus $\operatorname{id}_{S^1}$ is not in the global objectwise image. [step 2.1, given]

4.1 Steps 1.1 to 3.1 give compatible local sections in the image presheaf that do not glue globally, so the objectwise image is not a sheaf and hence not a subsheaf by [F1]. By [L1], its sheafification is the correct image sheaf. [F1, L1, step 3.1] ∎
