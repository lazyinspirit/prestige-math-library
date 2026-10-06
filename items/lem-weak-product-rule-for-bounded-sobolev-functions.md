---
id: lem-weak-product-rule-for-bounded-sobolev-functions
kind: lemma
title: "Weak product rule for bounded Sobolev functions"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions, lem-weak-derivative-linearity-locality-and-commutation, thm-holder-inequality-for-integrals, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 2 §2.1, Lemma 2.1 and proof, printed pp. 26–28; the present proof applies that scalar chain-rule route to a truncated square and polarises."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\Omega\subseteq\mathbb R^n$ be open, $1\le p<\infty$, and let $u,v\in W^{1,p}(\Omega;\mathbb K)\cap L^\infty(\Omega)$. Then $uv\in W^{1,p}(\Omega)$ and $D_j(uv)=(D_ju)v+u(D_jv)$ a.e. for every $j$.

## Facts & Assumptions

**Given:** The Axiom of Choice; an open $\Omega\subseteq\mathbb R^n$ with $n\ge1$; an exponent $1\le p<\infty$; and classes $u,v\in W^{1,p}(\Omega;\mathbb K)\cap L^\infty(\Omega)$.

[F1] $W^{1,p}(\Omega;\mathbb K)$ consists of the $L^p$ classes whose weak first derivatives exist as $L^p$ classes ([[def-sobolev-space-wkp-and-its-norm]]), and $L^p$ is the quotient by almost-everywhere null functions ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] Chain rule for a globally Lipschitz scalar function $F$: for real $w\in W^{1,p}(\Omega;\mathbb R)$, $F\circ w\in W^{1,p}$ whenever $F(0)=0$, and $D_i(F\circ w)$ agrees almost everywhere with $F'(w)D_iw$ where $F$ is differentiable at $w$, with the product defined as $0$ on the preimage of the nondifferentiability set, which need not itself be null ([[thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions]]).

[F3] Weak differentiation is linear and local: weak derivatives of linear combinations are the corresponding linear combinations, and they restrict to open subsets ([[lem-weak-derivative-linearity-locality-and-commutation]]).

[F5] The Axiom of Choice, used through the chain-rule interface of [F2] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Integrability of the products. Since $v\in L^\infty(\Omega)$ and $u\in L^p(\Omega)$, the pointwise bound $|uv|^p\le\|v\|_\infty^p|u|^p$, followed by integration, gives $\|uv\|_{L^p}\le\|u\|_{L^p}\|v\|_{L^\infty}<\infty$, and the same argument applies to $u(D_jv)$ and $(D_ju)v$ because $D_ju,D_jv\in L^p$ and $u,v\in L^\infty$. Thus the three classes $uv$, $(D_ju)v$ and $u(D_jv)$ all lie in $L^p(\Omega;\mathbb K)$, and so does their sum $(D_ju)v+u(D_jv)$ (taken componentwise for $\mathbb K=\mathbb C$). [F1, given, algebra]

1.2 The real case for a truncated square. Let $w\in W^{1,p}(\Omega;\mathbb R)\cap L^\infty(\Omega)$ and $M:=\|w\|_{L^\infty}$. Define $G_M(t):=t^2$ for $|t|\le M$ and $G_M(t):=2M|t|-M^2$ for $|t|>M$. Then $G_M$ is in $C^1(\mathbb R)$, with $G_M'(t)=2t$ for $|t|\le M$ and $G_M'(t)=2M\operatorname{sgn}(t)$ for $|t|>M$, it is globally Lipschitz with constant $2M$, $G_M(0)=0$, and $G_M(t)=t^2$ for $|t|\le M$. Since $|w|\le M$ almost everywhere, $G_M\circ w=w^2$ almost everywhere and $G_M'(w)=2w$ almost everywhere on $\Omega$; by [F2] the class $G_M\circ w$ lies in $W^{1,p}(\Omega)$ with $D_j(G_M\circ w)=G_M'(w)D_jw=2wD_jw$ almost everywhere. In particular $w^2=G_M\circ w\in W^{1,p}(\Omega)$ and $D_j(w^2)=2wD_jw$. [F2, F5, given, algebra]

2.1 Polarization in the real case. Suppose first that $\mathbb K=\mathbb R$, and put $w_\pm:=u\pm v\in W^{1,p}(\Omega;\mathbb R)\cap L^\infty(\Omega)$; these classes lie in $W^{1,p}$ by the linearity part of [F3]. Applying $G_{M_\pm}$ of step 1.2 with $M_\pm:=\|w_\pm\|_{L^\infty}$ gives $u v=\frac14\bigl(w_+^2-w_-^2\bigr)$ as $L^p$ classes and, by linearity of weak derivatives [F3], $D_j(uv)=\frac14\bigl(D_j(w_+^2)-D_j(w_-^2)\bigr)=\frac12\bigl(w_+D_jw_+ - w_-D_jw_-\bigr)=(D_ju)v+u(D_jv)$ almost everywhere. [F3, step 1.1, step 1.2, algebra]

3.1 Complex case and conclusion. For general $\mathbb K\in\{\mathbb R,\mathbb C\}$, write $u=u_1+iu_2$ and $v=v_1+iv_2$ with real components; these components lie in $W^{1,p}(\Omega;\mathbb R)\cap L^\infty(\Omega)$ and $D_ju=D_ju_1+iD_ju_2$, $D_jv=D_jv_1+iD_jv_2$ by the componentwise definition of the weak derivative [F1]. Applying step 2.1 to the four real products and using linearity [F3], $D_j(uv)=D_j\bigl((u_1v_1-u_2v_2)+i(u_1v_2+u_2v_1)\bigr)=(D_ju)v+u(D_jv)$ almost everywhere, and $uv\in W^{1,p}(\Omega;\mathbb K)$ by step 1.1. [F1, F3, step 2.1, algebra] ∎

## Source notes

The classical route approximates $u$ and $v$ by smooth functions and passes to the limit in a closed graph; the proof above instead polarises the product and applies the published chain rule for globally Lipschitz scalar functions to a truncated square, which is available for all $1\le p<\infty$ and avoids any global smooth-approximation theorem. The boundedness of $u$ and $v$ is used through the truncation radius $M$ and in the integrability step.
