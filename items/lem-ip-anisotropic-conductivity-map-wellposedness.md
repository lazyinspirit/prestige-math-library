---
id: lem-ip-anisotropic-conductivity-map-wellposedness
kind: lemma
title: Weak well-posedness of the anisotropic conductivity equation
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-anisotropic-conductivity-dirichlet-to-neumann-map
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - thm-poincare-inequality-for-w-one-p-zero
  - thm-sobolev-spaces-are-banach-spaces
  - thm-lax-milgram
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, The Calderón problem on Riemannian manifolds (2012)"
      url: "https://library.slmath.org/books/Book60/files/30salo.pdf"
    - title: "Thierry Daudé, Niky Kamran, and François Nicoleau, A survey of non-uniqueness results for the anisotropic Calderón problem with disjoint data (2018)"
      url: "https://arxiv.org/pdf/1803.00910"
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Omega\subset\mathbb R^n$ be a bounded connected open set with smooth boundary, let $\gamma\in C^\infty(\overline\Omega;\operatorname{Sym}_n(\mathbb R))$ satisfy $c|\xi|^2\le\xi^T\gamma(x)\xi\le C|\xi|^2$ for fixed $0<c\le C<\infty$, and let $f\in\mathcal B_\Omega=H^1(\Omega)/H_0^1(\Omega)$ be the boundary trace-data class defined by the anisotropic weak Dirichlet-to-Neumann map. Then there is a unique $u_{\gamma,f}\in H^1(\Omega)$ with $[u_{\gamma,f}]=f$ and $\int_\Omega\gamma\nabla u_{\gamma,f}\cdot\nabla v\,dx=0$ for every $v\in H_0^1(\Omega)$. The energy formula defining $\Lambda_\gamma$ is independent of the chosen representative of its second boundary argument and is a bounded bilinear form on $\mathcal B_\Omega\times\mathcal B_\Omega$.

## Statement references

[[def-ip-anisotropic-conductivity-dirichlet-to-neumann-map]]

[[thm-lax-milgram]]

[[thm-poincare-inequality-for-w-one-p-zero]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-countable-choice|Countable Choice]]

[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration|Axiom of Choice implies Countable Choice]]

[Salo, §1, pp. 170–171](https://library.slmath.org/books/Book60/files/30salo.pdf)

[Daudé, Kamran, and Nicoleau, §1, PDF pp. 1–2](https://arxiv.org/pdf/1803.00910)

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded connected smooth domain $\Omega\subset\mathbb R^n$; a symmetric coefficient $\gamma$ with constants $0<c\le C$ as in the statement; the boundary quotient $\mathcal B_\Omega=H^1(\Omega)/H_0^1(\Omega)$; and a class $f\in\mathcal B_\Omega$.

[A1] The Axiom of Choice; it supplies the Choice assumption of the published Sobolev completeness and trace interfaces used in the boundary-data definition. ([[def-axiom-of-choice]])

[F1] $\mathcal B_\Omega$ is $H^1(\Omega)/H_0^1(\Omega)$, where $H^1=W^{1,2}$ and $H_0^1$ is the closure of $C_c^\infty(\Omega)$; the map $\Lambda_\gamma$ uses the weak solution and the energy pairing in the definition. ([[def-ip-anisotropic-conductivity-dirichlet-to-neumann-map]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]])

[F2] If $\Omega$ is bounded in one direction and $w\in W_0^{1,p}(\Omega)$, then $\|w\|_{L^p(\Omega)}\le C(p)(b-a)\|Dw\|_{L^p(\Omega)}$ for a slab $a<x\cdot e<b$ containing $\Omega$. ([[thm-poincare-inequality-for-w-one-p-zero]])

[F3] Under the Axiom of Choice, $W^{k,p}(\Omega)$ with its Sobolev norm is a complete normed space; in particular $H^1(\Omega)$ is complete, and its closed subspace $H_0^1(\Omega)$ is complete. ([[thm-sobolev-spaces-are-banach-spaces]], [[def-wkp-zero-as-a-sobolev-closure]])

[F4] Under Countable Choice, a bounded coercive real bilinear form on a real Hilbert space has a unique solution to each bounded linear functional equation. ([[thm-lax-milgram]])

[F5] The Axiom of Choice implies Countable Choice. ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-axiom-of-choice]], [[def-countable-choice]])

[F6] The coefficient inequalities give $|\gamma(x)\xi|\le C|\xi|$ and $\xi^T\gamma(x)\xi\ge c|\xi|^2$ for every $x\in\overline\Omega$ and $\xi\in\mathbb R^n$.

**Choice use:** Countable Choice is used by [F4]. The Axiom of Choice is also carried by [F3] and the trace-data interface [F1]; no family of representatives is selected in the proof.

## Proof

1.1 The space $H_0^1(\Omega)$ is a closed linear subspace of the complete space $H^1(\Omega)$ by [F1] and [F3]. Since $\Omega$ is bounded, it lies in a slab $a<x\cdot e<b$ for some unit vector $e$ and finite $a<b$; applying [F2] with $p=2$ gives $\|v\|_{L^2}\le C(2)(b-a)\|\nabla v\|_{L^2}$ for every $v\in H_0^1(\Omega)$. Thus $\|v\|_H:=\|\nabla v\|_{L^2}$ is a norm equivalent to the inherited $H^1$ norm, and $H_0^1(\Omega)$ is a real Hilbert space for $(v,w)_H=\int_\Omega\nabla v\cdot\nabla w\,dx$. [F1, F2, F3, given]

2.1 Fix any representative $U\in H^1(\Omega)$ of $f$; the existence argument below is independent of which representative is fixed. On $H_0^1(\Omega)$ define $a_\gamma(z,v)=\int_\Omega\gamma\nabla z\cdot\nabla v\,dx$ and $F_U(v)=-\int_\Omega\gamma\nabla U\cdot\nabla v\,dx$. By [F6], $a_\gamma$ is bounded by $C\|z\|_H\|v\|_H$, coercive by $c\|z\|_H^2$, and $F_U$ is bounded by $C\|\nabla U\|_{L^2}\|v\|_H$. Countable Choice follows from [F5], so [F4] gives a unique $z\in H_0^1(\Omega)$ with $a_\gamma(z,v)=F_U(v)$ for every $v\in H_0^1(\Omega)$. Then $u_{\gamma,f}:=U+z$ has quotient class $f$ and satisfies the stated weak equation. [A1, F1, F4, F5, F6, step 1.1]

3.1 If $u_1,u_2$ are two weak solutions with boundary class $f$, then $w=u_1-u_2\in H_0^1(\Omega)$ and $\int_\Omega\gamma\nabla w\cdot\nabla v\,dx=0$ for every $v\in H_0^1(\Omega)$. Taking $v=w$ and using [F6] gives $c\|\nabla w\|_{L^2}^2\le0$, so $\|w\|_H=0$ and hence $w=0$ by the norm property in step 1.1. [F6, step 1.1, step 2.1]

3.2 Let $h\in\mathcal B_\Omega$ and let $V,V'$ be any two representatives of $h$. Their difference lies in $H_0^1(\Omega)$ by [F1], so the weak equation for $u_{\gamma,f}$ gives $\int_\Omega\gamma\nabla u_{\gamma,f}\cdot\nabla(V-V')\,dx=0$. Therefore the energy pairing is independent of the representative of $h$. [F1, step 2.1]

4.1 The weak solution minimizes the quadratic energy in its boundary class: if $W$ is any representative of $f$, then $W-u_{\gamma,f}\in H_0^1(\Omega)$, and expanding the symmetric quadratic form with the weak equation gives $\int_\Omega(\gamma\nabla W)\cdot\nabla W\,dx=\int_\Omega(\gamma\nabla u_{\gamma,f})\cdot\nabla u_{\gamma,f}\,dx+\int_\Omega(\gamma\nabla(W-u_{\gamma,f}))\cdot\nabla(W-u_{\gamma,f})\,dx$. Using [F6] and taking the infimum over representatives yields $\|\nabla u_{\gamma,f}\|_{L^2}\le\sqrt{C/c}\,\|f\|_{\mathcal B_\Omega}$. The same infimum argument gives representatives $V$ of $h$ with $\|V\|_{H^1}\le\|h\|_{\mathcal B_\Omega}+\varepsilon$ for every $\varepsilon>0$. Cauchy–Schwarz and the upper bound in [F6] now give $|\langle\Lambda_\gamma f,h\rangle|\le C\sqrt{C/c}\,\|f\|_{\mathcal B_\Omega}(\|h\|_{\mathcal B_\Omega}+\varepsilon)$; letting $\varepsilon\downarrow0$ proves boundedness. To prove bilinearity, for $f_1,f_2\in\mathcal B_\Omega$ and $a,b\in\mathbb R$, the function $a u_{\gamma,f_1}+b u_{\gamma,f_2}$ has boundary class $af_1+bf_2$ and satisfies the weak equation by linearity of the quotient map and of the integral. Uniqueness from step 3.1 therefore gives $u_{\gamma,af_1+bf_2}=a u_{\gamma,f_1}+b u_{\gamma,f_2}$. For $h_1,h_2\in\mathcal B_\Omega$, representatives $V_{h_1},V_{h_2}$ give $aV_{h_1}+bV_{h_2}$ as a representative of $ah_1+bh_2$; representative independence from step 3.2 and linearity of the integral show that the energy pairing is linear in its second argument as well. Thus the energy form is bilinear, and the bound just proved makes it a bounded bilinear form on $\mathcal B_\Omega\times\mathcal B_\Omega$. [F1, F6, step 2.1, step 3.1, step 3.2, algebra] ∎

